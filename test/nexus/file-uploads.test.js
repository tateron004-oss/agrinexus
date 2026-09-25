"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { PassThrough } = require("node:stream");
const uploads = require("../../server/uploads.js");

// Real file uploads (2026-09-23): nexusUploadReadiness had described an
// upload feature (acceptedFileTypes, maxFileSizeMb, noUnsafeArbitraryUpload)
// with no route or module that actually implemented it -- confirmed live,
// uploading a file did nothing because there was nowhere for it to go.
// These tests exercise the real module a live end-to-end smoke test (upload
// -> download -> analyze, with and without a real OPENAI_API_KEY) already
// confirmed works; they pin down the specific safety properties that matter
// most so they cannot silently regress.

function tmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "nexus-upload-test-"));
}

function fakeRequest(headers, bodyChunks) {
  const req = new PassThrough();
  req.headers = headers;
  process.nextTick(() => {
    for (const chunk of bodyChunks) req.write(chunk);
    req.end();
  });
  return req;
}

function multipartBody(fieldName, filename, mimeType, fileBuffer) {
  const boundary = "----testboundary" + Math.random().toString(16).slice(2);
  const pre = Buffer.from(`--${boundary}\r\nContent-Disposition: form-data; name="${fieldName}"; filename="${filename}"\r\nContent-Type: ${mimeType}\r\n\r\n`);
  const post = Buffer.from(`\r\n--${boundary}--\r\n`);
  return { boundary, buffer: Buffer.concat([pre, fileBuffer, post]) };
}

const REAL_PNG_1X1 = Buffer.from(
  "89504e470d0a1a0a0000000d494844520000000100000001080200000090775" +
  "3de0000000c4944415478da6360000000020001e221bc330000000049454e44ae426082",
  "hex"
);

test("magic-byte checks accept real files and reject spoofed content-types for every declared type", () => {
  assert.equal(uploads.magicBytesMatch(REAL_PNG_1X1, "image/png"), true);
  assert.equal(uploads.magicBytesMatch(Buffer.from("not a real png"), "image/png"), false);
  assert.equal(uploads.magicBytesMatch(Buffer.from([0xff, 0xd8, 0xff, 0x00]), "image/jpeg"), true);
  assert.equal(uploads.magicBytesMatch(Buffer.from("%PDF-1.4 rest"), "application/pdf"), true);
  assert.equal(uploads.magicBytesMatch(Buffer.from("RIFF____WEBP"), "image/webp"), true);
  assert.equal(uploads.magicBytesMatch(Buffer.from("RIFF____MPEG"), "image/webp"), false, "RIFF alone is not enough -- the WEBP marker must also be present");
});

test("resolveUploadedFilePath refuses to escape the upload directory (path traversal)", () => {
  const dir = path.resolve(tmpDir());
  assert.equal(uploads.resolveUploadedFilePath(dir, "../../../../etc/passwd"), path.resolve(dir, "passwd"), "path.basename already strips traversal segments, so the result stays inside dir");
  const result = uploads.resolveUploadedFilePath(dir, "real-file.pdf");
  assert.ok(result.startsWith(dir));
});

// Found live (security audit): unlike resolveUploadedFilePath just above,
// readMeta's own path builder never basename()'d fileId or checked the
// result stayed inside dir -- "../planted" resolved OUTSIDE the upload
// directory. Planting a real .meta.json one directory above dir and reading
// it back with a traversal fileId proves the escape; after the fix, that
// same read must come back empty (no file exists at the safely-clamped path).
test("readMeta refuses to escape the upload directory (path traversal)", () => {
  const dir = path.resolve(tmpDir());
  const parentDir = path.dirname(dir);
  const plantedPath = path.join(parentDir, "planted.meta.json");
  fs.writeFileSync(plantedPath, JSON.stringify({ uploadedBy: "attacker", planted: true }));
  try {
    assert.equal(uploads.readMeta(dir, "../planted"), null, "must not read a meta file planted outside the upload directory");
  } finally {
    fs.rmSync(plantedPath, { force: true });
  }
  const real = { fileId: "real-file.pdf.meta.json", uploadedBy: "u_farmer" };
  fs.writeFileSync(path.join(dir, "real-file.pdf.meta.json"), JSON.stringify(real));
  assert.deepEqual(uploads.readMeta(dir, "real-file.pdf"), real, "a real, in-directory meta file must still read correctly");
});

test("canAccessUpload requires the real uploader, or an Admin -- an unguessable id alone is not access control", () => {
  const meta = { uploadedBy: "u_farmer" };
  assert.equal(uploads.canAccessUpload(meta, { id: "u_farmer" }), true);
  assert.equal(uploads.canAccessUpload(meta, { id: "u_someone_else" }), false);
  assert.equal(uploads.canAccessUpload(meta, { id: "u_someone_else", role: "Admin" }), true);
  assert.equal(uploads.canAccessUpload(meta, null), false);
  assert.equal(uploads.canAccessUpload(null, { id: "u_farmer" }), false);
});

test("size and quota limits are clamped to sane ranges regardless of env input", () => {
  assert.equal(uploads.maxUploadBytes({}), 10 * 1024 * 1024);
  assert.equal(uploads.maxUploadBytes({ NEXUS_FILE_UPLOAD_MAX_MB: "9999" }), 25 * 1024 * 1024, "must be clamped, not trust an unbounded env value");
  assert.equal(uploads.maxUploadBytes({ NEXUS_FILE_UPLOAD_MAX_MB: "0" }), 10 * 1024 * 1024, "an explicit 0 is falsy, so it falls back to the same default as unset rather than an oddly-tiny 1MB floor");
  assert.equal(uploads.totalQuotaBytes({}), 500 * 1024 * 1024);
  assert.equal(uploads.totalQuotaBytes({ NEXUS_FILE_UPLOAD_TOTAL_QUOTA_MB: "999999" }), 4000 * 1024 * 1024);
});

test("currentUsageBytes sums real stored files and ignores .meta.json sidecars", () => {
  const dir = tmpDir();
  fs.writeFileSync(path.join(dir, "a.png"), Buffer.alloc(100));
  fs.writeFileSync(path.join(dir, "a.png.meta.json"), JSON.stringify({ sizeBytes: 999999 }));
  fs.writeFileSync(path.join(dir, "b.pdf"), Buffer.alloc(50));
  assert.equal(uploads.currentUsageBytes(dir), 150);
  assert.equal(uploads.currentUsageBytes(path.join(dir, "does-not-exist")), 0);
});

test("a real multipart upload is validated, stored, and given a real metadata sidecar with the uploader recorded", async () => {
  const dir = tmpDir();
  const env = { NEXUS_FILE_STORAGE_DIR: dir };
  const { boundary, buffer } = multipartBody("file", "leaf.png", "image/png", REAL_PNG_1X1);
  const req = fakeRequest({ "content-type": `multipart/form-data; boundary=${boundary}` }, [buffer]);
  const meta = await uploads.parseAndStoreUpload(req, { env, userId: "u_farmer" });
  assert.equal(meta.mimeType, "image/png");
  assert.equal(meta.originalFilename, "leaf.png");
  assert.equal(meta.uploadedBy, "u_farmer");
  assert.equal(meta.sizeBytes, REAL_PNG_1X1.length);
  assert.ok(fs.existsSync(path.join(dir, meta.fileId)), "the real file must be written to disk");
  assert.deepEqual(uploads.readMeta(dir, meta.fileId), meta, "readMeta must return exactly what was stored");
  assert.ok(fs.readFileSync(path.join(dir, meta.fileId)).equals(REAL_PNG_1X1), "the stored bytes must match exactly what was uploaded");
});

test("a declared type outside the allowlist is rejected before anything is written to disk", async () => {
  const dir = tmpDir();
  const { boundary, buffer } = multipartBody("file", "evil.exe", "application/x-msdownload", Buffer.from("MZ"));
  const req = fakeRequest({ "content-type": `multipart/form-data; boundary=${boundary}` }, [buffer]);
  await assert.rejects(() => uploads.parseAndStoreUpload(req, { env: { NEXUS_FILE_STORAGE_DIR: dir }, userId: "u1" }),
    error => error.message === "unsupported_file_type");
  assert.deepEqual(fs.readdirSync(dir), [], "no file may be written for a rejected type");
});

test("content that does not match its declared type is rejected and cleaned up, not silently stored", async () => {
  const dir = tmpDir();
  const { boundary, buffer } = multipartBody("file", "fake.png", "image/png", Buffer.from("this is not really a png"));
  const req = fakeRequest({ "content-type": `multipart/form-data; boundary=${boundary}` }, [buffer]);
  await assert.rejects(() => uploads.parseAndStoreUpload(req, { env: { NEXUS_FILE_STORAGE_DIR: dir }, userId: "u1" }),
    error => error.message === "content_does_not_match_declared_type");
  assert.deepEqual(fs.readdirSync(dir), [], "a spoofed file must never be left on disk, even temporarily");
});

test("a request with no file part is rejected instead of hanging or silently succeeding", async () => {
  const dir = tmpDir();
  const boundary = "----empty";
  const body = Buffer.from(`--${boundary}--\r\n`);
  const req = fakeRequest({ "content-type": `multipart/form-data; boundary=${boundary}` }, [body]);
  await assert.rejects(() => uploads.parseAndStoreUpload(req, { env: { NEXUS_FILE_STORAGE_DIR: dir }, userId: "u1" }),
    error => error.message === "no_file_in_request");
});

test("exceeding the total storage quota refuses the upload and cleans up, even though the individual file is within its own size limit", async () => {
  const dir = tmpDir();
  const env = { NEXUS_FILE_STORAGE_DIR: dir, NEXUS_FILE_UPLOAD_TOTAL_QUOTA_MB: "10" };
  // Pre-fill the "disk" past the 10MB quota with an existing file.
  fs.writeFileSync(path.join(dir, "existing.pdf"), Buffer.alloc(11 * 1024 * 1024));
  const { boundary, buffer } = multipartBody("file", "leaf.png", "image/png", REAL_PNG_1X1);
  const req = fakeRequest({ "content-type": `multipart/form-data; boundary=${boundary}` }, [buffer]);
  await assert.rejects(() => uploads.parseAndStoreUpload(req, { env, userId: "u1" }),
    error => error.message === "storage_quota_exceeded");
  assert.deepEqual(fs.readdirSync(dir).filter(name => name !== "existing.pdf"), [], "the rejected upload must leave no trace");
});

// Structural: the HTTP routes and documentProvider wiring in server.js.
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("the upload route requires sign-in and the feature flag before parsing anything", () => {
  const start = source.indexOf('if (url.pathname === "/api/nexus/upload" && req.method === "POST")');
  assert.ok(start > 0, "upload route not found");
  const body = source.slice(start, start + 700);
  assert.match(body, /nexusFlagEnabled\(process\.env, "NEXUS_FILE_UPLOAD_ENABLED"\)/);
  assert.match(body, /if \(!user\) return send\(res, 401,/);
  assert.match(body, /rateLimit\(req, 20, 10 \* 60_000\)/);
});

test("the download route enforces real per-uploader ownership via canAccessUpload before ever reading the file", () => {
  const start = source.indexOf('if (url.pathname === "/api/nexus/upload/file" && req.method === "GET")');
  assert.ok(start > 0, "download route not found");
  const body = source.slice(start, start + 1300);
  const flagIndex = body.indexOf('nexusFlagEnabled(process.env, "NEXUS_FILE_UPLOAD_ENABLED")');
  const authIndex = body.indexOf("if (!user)");
  const canAccessIndex = body.indexOf("nexusUploads.canAccessUpload(meta, user)");
  const readIndex = body.indexOf("fs.readFile(filePath");
  assert.ok(flagIndex !== -1, "the download route must also honor the file-upload feature flag, not just the upload route");
  assert.ok(authIndex !== -1 && canAccessIndex !== -1 && readIndex !== -1, "expected auth check, ownership check, and file read all present");
  assert.ok(flagIndex < authIndex && authIndex < canAccessIndex && canAccessIndex < readIndex, "the flag, then auth, then ownership must all be checked before the file is ever read");
});

test("the document-analysis tool falls back to the most recently uploaded file when the model supplies no fileId", () => {
  const start = source.indexOf('if (toolName === "nexus_file_document_analysis")');
  assert.ok(start > 0);
  const body = source.slice(start, start + 1000);
  // Found live (uploads/telehealth/permissions follow-up audit): this
  // fallback used to be a single global field, not scoped per user, despite
  // this exact comment already documenting the intent as "per account" --
  // fixed to key off the calling user's own id.
  assert.match(body, /db\.profile\?\.lastUploadedFileByUser\?\.\[user\?\.id\]/);
  assert.match(body, /nexusRealProviders\.documents\.analyze\(\{/);
  assert.match(body, /\}, process\.env, user\);/, "the real user must be passed through for the ownership check in documentProvider.analyze");
});

const docProviderSource = fs.readFileSync(path.join(__dirname, "../../server/providers/documentProvider.js"), "utf8");

test("documentProvider.analyze checks real ownership before reading an uploaded file's contents", () => {
  assert.match(docProviderSource, /nexusUploads\.canAccessUpload\(meta, user\)/);
  const ownershipCheckIndex = docProviderSource.indexOf("canAccessUpload(meta, user)");
  const readFileIndex = docProviderSource.indexOf("fs.readFileSync(filePath)");
  assert.ok(ownershipCheckIndex !== -1 && readFileIndex !== -1 && ownershipCheckIndex < readFileIndex);
});

test("documentProvider.analyze has real branches for PDF text extraction and image vision analysis, not just plain-text reads", () => {
  assert.match(docProviderSource, /extractPdfText/);
  assert.match(docProviderSource, /require\("pdf-parse"\)/);
  assert.match(docProviderSource, /describeImage/);
  assert.match(docProviderSource, /never diagnose a plant disease or a medical condition/);
});
