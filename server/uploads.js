"use strict";
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const busboy = require("busboy");

// Real file uploads, wired to land in exactly the directory
// documentProvider.js's resolveLocalFile() already reads from
// (NEXUS_FILE_STORAGE_DIR, defaulting to ./uploads) -- this module is the
// missing other half: documentProvider.js could always read a file placed
// there, but nothing ever let a real user put one there. Confirmed by
// nexusUploadReadiness's own claims ("acceptedFileTypes", "maxFileSizeMb",
// "noUnsafeArbitraryUpload") before this module existed: they described a
// feature that was not actually reachable.

const ACCEPTED_TYPES = Object.freeze({
  "image/jpeg": { ext: ".jpg", magic: [[0, [0xff, 0xd8, 0xff]]] },
  "image/png": { ext: ".png", magic: [[0, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]]] },
  "image/webp": { ext: ".webp", magic: [[0, [0x52, 0x49, 0x46, 0x46]], [8, [0x57, 0x45, 0x42, 0x50]]] },
  "application/pdf": { ext: ".pdf", magic: [[0, [0x25, 0x50, 0x44, 0x46]]] }
});

function acceptedTypes() {
  return Object.keys(ACCEPTED_TYPES);
}

function uploadDir(env = process.env) {
  return path.resolve(String(env.NEXUS_FILE_STORAGE_DIR || path.join(process.cwd(), "uploads")).trim());
}

function maxUploadBytes(env = process.env) {
  return Math.min(Math.max(Number(env.NEXUS_FILE_UPLOAD_MAX_MB) || 10, 1), 25) * 1024 * 1024;
}

// A hard ceiling on total bytes ever stored, independent of any one file's
// size limit -- the persistent disk in production is shared with the app's
// own database and is not large. Without this, enough small uploads could
// still fill the disk and take the whole app down, not just this feature.
function totalQuotaBytes(env = process.env) {
  return Math.min(Math.max(Number(env.NEXUS_FILE_UPLOAD_TOTAL_QUOTA_MB) || 500, 10), 4000) * 1024 * 1024;
}

// Found live (security audit): unlike resolveUploadedFilePath just below,
// this never basename()'d fileId or checked the result stayed inside dir --
// a fileId like "../planted" resolved metaPath OUTSIDE the upload
// directory. Currently contained (the bytes actually served always go
// through the sanitized resolveUploadedFilePath, so this alone isn't a full
// file-read primitive), but a metadata read escaping the upload directory
// is a real, latent path-traversal defect that becomes exploitable the
// moment any future code trusts this path more directly. Sanitized the same
// way resolveUploadedFilePath already is.
function metaPath(dir, fileId) {
  const safeName = path.basename(String(fileId || ""));
  const candidate = path.resolve(dir, `${safeName}.meta.json`);
  if (!candidate.startsWith(dir)) return null;
  return candidate;
}

function readMeta(dir, fileId) {
  try {
    const resolved = metaPath(dir, fileId);
    if (!resolved) return null;
    return JSON.parse(fs.readFileSync(resolved, "utf8"));
  } catch {
    return null;
  }
}

// Sums real on-disk file sizes (not the .meta.json sidecars, which are
// small and not size-limited data anyway) so the quota check reflects what
// is actually stored, not a counter that could drift from reality.
function currentUsageBytes(dir) {
  let total = 0;
  let entries;
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return 0;
  }
  for (const entry of entries) {
    if (entry.endsWith(".meta.json")) continue;
    try {
      total += fs.statSync(path.join(dir, entry)).size;
    } catch { /* file removed mid-scan; ignore */ }
  }
  return total;
}

function magicBytesMatch(buffer, mimeType) {
  const spec = ACCEPTED_TYPES[mimeType];
  if (!spec) return false;
  return spec.magic.every(([offset, bytes]) =>
    bytes.every((byte, index) => buffer[offset + index] === byte)
  );
}

// Resolves a fileId to a path the SAME way documentProvider.js's
// resolveLocalFile does (path.basename + startsWith(root) containment
// check), so both modules agree on what is a safe, in-bounds path.
function resolveUploadedFilePath(dir, fileId) {
  const safeName = path.basename(String(fileId || ""));
  const candidate = path.resolve(dir, safeName);
  if (!candidate.startsWith(dir)) return null;
  return candidate;
}

// Real per-uploader ownership: a fileId is hard to guess (a random UUID),
// but "hard to guess" is not access control. Anyone who is not the uploader
// (and is not an Admin) is refused, the same fail-closed posture the phone
// caller-authorization work in server.js already established for this
// codebase -- obscurity alone was exactly the kind of gap that let PR #570's
// vulnerability exist for phone calls.
function canAccessUpload(meta, user) {
  if (!meta) return false;
  if (!user) return false;
  if (user.role === "Admin") return true;
  return String(meta.uploadedBy || "") === String(user.id || "");
}

// Lists every upload owned by a given user by scanning the upload directory's
// .meta.json sidecars -- there is no separate per-user index, so a full
// account data export/erasure has no other way to find "this user's files."
function listUploadsForUser(dir, userId) {
  const target = String(userId || "");
  if (!target) return [];
  let entries;
  try {
    entries = fs.readdirSync(dir);
  } catch {
    return [];
  }
  const matches = [];
  for (const entry of entries) {
    if (!entry.endsWith(".meta.json")) continue;
    const fileId = entry.slice(0, -".meta.json".length);
    const meta = readMeta(dir, fileId);
    if (meta && String(meta.uploadedBy || "") === target) matches.push(meta);
  }
  return matches;
}

// Real deletion, not just the download/access gate canAccessUpload already
// provides -- until now nothing in this module could ever remove a stored
// file or its metadata sidecar, so an uploaded PDF or photo was permanent
// for the life of the server regardless of who asked. Deletes both the file
// and its sidecar; returns true only if something was actually removed, so
// a caller doing account erasure can report real counts instead of assuming
// success.
function deleteUpload(dir, fileId) {
  const filePath = resolveUploadedFilePath(dir, fileId);
  const sidecarPath = metaPath(dir, fileId);
  let removed = false;
  if (filePath) {
    try { fs.unlinkSync(filePath); removed = true; } catch {}
  }
  if (sidecarPath) {
    try { fs.unlinkSync(sidecarPath); removed = true; } catch {}
  }
  return removed;
}

function readRawRequest(req, maxBytes) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", chunk => {
      size += chunk.length;
      if (size > maxBytes) {
        req.destroy();
        reject(new Error("payload_too_large"));
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

// Parses a single-file multipart upload, validates its declared type against
// the allowlist AND against the file's own magic bytes (a spoofed
// Content-Type alone must never be trusted), enforces the per-file and
// total-quota size limits, and -- only if every check passes -- writes it to
// disk under a random id with the metadata sidecar needed for real ownership
// checks later. Never writes a file that fails any check.
function parseAndStoreUpload(req, { env = process.env, userId } = {}) {
  return new Promise((resolve, reject) => {
    const dir = uploadDir(env);
    fs.mkdirSync(dir, { recursive: true });
    const maxBytes = maxUploadBytes(env);
    const bb = busboy({ headers: req.headers, limits: { fileSize: maxBytes, files: 1 } });
    let handled = false;
    let fileTooLarge = false;

    bb.on("file", (_name, stream, info) => {
      // Set as soon as a file part is seen, not after the disk write
      // finishes -- busboy's own "finish" event (end of multipart parsing)
      // can fire before the piped write stream flushes to disk, and without
      // this the finish handler below would race it and wrongly reject with
      // "no file in request" even though a real file was present.
      handled = true;
      const declaredType = String(info.mimeType || "").toLowerCase();
      const spec = ACCEPTED_TYPES[declaredType];
      if (!spec) {
        stream.resume();
        reject(Object.assign(new Error("unsupported_file_type"), { declaredType }));
        return;
      }
      const fileId = crypto.randomUUID() + spec.ext;
      const tmpPath = path.join(dir, `.tmp-${fileId}`);
      const finalPath = path.join(dir, fileId);
      const writeStream = fs.createWriteStream(tmpPath);
      const chunks = [];
      let bytesWritten = 0;

      stream.on("limit", () => { fileTooLarge = true; });
      stream.on("data", chunk => {
        bytesWritten += chunk.length;
        if (chunks.length < 8) chunks.push(chunk); // enough for a magic-byte check
      });

      stream.pipe(writeStream);
      writeStream.on("finish", () => {
        handled = true;
        try {
          if (fileTooLarge) throw Object.assign(new Error("file_too_large"), { maxBytes });
          const head = Buffer.concat(chunks);
          if (!magicBytesMatch(head, declaredType)) {
            throw Object.assign(new Error("content_does_not_match_declared_type"), { declaredType });
          }
          const usage = currentUsageBytes(dir);
          if (usage + bytesWritten > totalQuotaBytes(env)) {
            throw Object.assign(new Error("storage_quota_exceeded"), { usage, quota: totalQuotaBytes(env) });
          }
          fs.renameSync(tmpPath, finalPath);
          const meta = {
            fileId,
            originalFilename: path.basename(String(info.filename || "upload")).slice(0, 200),
            mimeType: declaredType,
            sizeBytes: bytesWritten,
            uploadedBy: String(userId || ""),
            uploadedAt: new Date().toISOString()
          };
          fs.writeFileSync(metaPath(dir, fileId), JSON.stringify(meta));
          resolve(meta);
        } catch (error) {
          try { fs.rmSync(tmpPath, { force: true }); } catch {}
          try { fs.rmSync(finalPath, { force: true }); } catch {}
          reject(error);
        }
      });
      writeStream.on("error", error => { handled = true; reject(error); });
    });

    bb.on("error", error => { if (!handled) { handled = true; reject(error); } });
    bb.on("finish", () => { if (!handled) reject(new Error("no_file_in_request")); });
    req.pipe(bb);
  });
}

module.exports = Object.freeze({
  ACCEPTED_TYPES,
  acceptedTypes,
  uploadDir,
  maxUploadBytes,
  totalQuotaBytes,
  currentUsageBytes,
  metaPath,
  readMeta,
  magicBytesMatch,
  resolveUploadedFilePath,
  canAccessUpload,
  listUploadsForUser,
  deleteUpload,
  readRawRequest,
  parseAndStoreUpload
});
