"use strict";
// Static file delivery for the web app (everything under public/, plus the one vendored module served from node_modules).
//
// WHY THIS EXISTS (measured in production, release a708df48): every script, the stylesheet and index.html were sent with
// "Cache-Control: no-store", so a phone re-downloaded the whole app (about 1.3 MB compressed, 52 requests) on every visit and after every
// deploy, even for files that had not changed. Rules now:
//
//   index.html and every other .html page   no-store, as before. This is the only document that decides which script versions run.
//   sw.js                                   no-store, as before (browsers must always fetch the worker fresh).
//   .js .mjs .css                           strong content ETag + "Cache-Control: no-cache" = the browser may keep a copy but must ask the
//                                           server before using it; an unchanged file answers 304 with no body. Changed bytes = new ETag.
//   same, requested as ?v=<12-hex content hash>   (the URLs the server writes into index.html, see fingerprintIndex) "public, max-age=31536000, immutable".
//                                           The URL IS the content, so a copy can never be stale. Only sent when the hash in the URL equals the hash
//                                           of the bytes this process is serving; a mismatch (an older page, or the other instance during a rolling
//                                           deploy) is answered like any other file, with no-cache, so a wrong copy can never be pinned for a year.
//   everything else (images, json, manifest, ...)   "public, max-age=3600" as before, now with an ETag so the refresh after an hour is a 304.
//
// ETags are strong, over the exact bytes sent (after the release-id placeholder is filled in). The app sends no Content-Encoding itself;
// Cloudflare compresses in front of it and, when it does, turns a strong ETag into a weak one. Both If-None-Match forms are therefore compared
// weakly (W/ stripped), which is what the HTTP spec prescribes for If-None-Match. "Vary: Accept-Encoding" is set so no cache ever hands a
// compressed copy to a client that did not ask for one.
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const TEXT_EXTENSIONS = new Set([".html", ".js", ".mjs", ".css", ".webmanifest"]);
const REVALIDATE_EXTENSIONS = new Set([".js", ".mjs", ".css"]);
const FINGERPRINT_LENGTH = 12;
const IMMUTABLE = "public, max-age=31536000, immutable";
const REVALIDATE = "no-cache";
const SHORT_LIVED = "public, max-age=3600";
const NO_STORE = "no-store";

// src="..." / href="..." pointing at a local script, stylesheet or manifest.
const LOCAL_ASSET_ATTRIBUTE = /\b(src|href)="(\/[^"?#\s]+\.(?:js|mjs|css|webmanifest))(?:\?[^"#\s]*)?"/g;

function weakTag(value) {
  return String(value || "").trim().replace(/^W\//i, "");
}

// If-None-Match: "*" or a comma separated list of (possibly weak) tags. Weak comparison.
function etagMatches(header, etag) {
  const wanted = weakTag(etag);
  return String(header || "").split(",").some(part => {
    const tag = weakTag(part);
    return tag === "*" || (tag !== "" && tag === wanted);
  });
}

function httpDate(ms) {
  return new Date(Math.floor(ms / 1000) * 1000).toUTCString();
}

// app.js asks the page which release it belongs to instead of carrying the release id itself. The repository source keeps the two lines exactly as they are
// (the release contract tests and QA scripts read them); only the served bytes differ, and those no longer change from release to release. index.html (never
// stored, one release id per response) carries <meta name="agrinexus-release">. If either line is edited so it no longer matches, nothing is rewritten and the
// old behaviour applies (id filled in, file downloaded again after each deploy): slower, never wrong.
const APP_RELEASE_STAMPS = [
  ['const AGRINEXUS_BUILD_VERSION = "__NEXUS_RELEASE_SHA__";', 'const AGRINEXUS_BUILD_VERSION = (typeof document !== "undefined" && document.querySelector?.(\'meta[name="agrinexus-release"]\')?.getAttribute?.("content")) || "unknown";'],
  ['const AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-__NEXUS_RELEASE_SHA__";', "const AGRINEXUS_PWA_CACHE_VERSION = `agrinexus-pwa-${AGRINEXUS_BUILD_VERSION}`;"]
];

// The exact transform applied to a text file on its way out: the optional release-line swap (stamps), then the release id filled in for every placeholder
// left. Exported so that anything that must know the SERVED bytes of a file (the release certification controller hashes /app.js) computes them with this
// same function rather than a copy of it. A file without the placeholder or a stamp is passed through byte for byte.
function servedTextBytes(data, { stamps, placeholder, fillRelease }) {
  if (stamps) {
    let text = data.toString("utf8");
    for (const [from, to] of stamps) text = text.replace(from, () => to);
    data = Buffer.from(text);
  }
  return data.includes(placeholder) ? Buffer.from(fillRelease(data.toString("utf8"))) : data;
}

// placeholder: the text in the served files that stands for the release id. fillRelease(text): returns text with every placeholder replaced by the release id
// (server.js owns both the placeholder and the id, so the replacement is written there).
function createStaticDelivery({ publicDir, placeholder, fillRelease, mime, send, extraFiles = {}, stableStamps = {} }) {
  const root = path.resolve(publicDir);
  // file path -> { signature, etag, fingerprint }. Bounded by the number of files that exist; a missing path never gets an entry.
  const described = new Map();
  let indexCache = null;

  function substitute(filePath, data) {
    if (!TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase())) return data;
    return servedTextBytes(data, { stamps: stableStamps[path.relative(root, filePath).split(path.sep).join("/")], placeholder, fillRelease });
  }

  // Hash of the bytes that would be sent, cached per file until its modification time or size changes (a deploy replaces every file).
  async function describe(filePath) {
    let stat;
    try { stat = await fs.promises.stat(filePath); } catch { return null; }
    if (!stat.isFile()) return null;
    const signature = `${stat.mtimeMs}:${stat.size}`;
    const known = described.get(filePath);
    if (known && known.signature === signature) return { ...known, mtimeMs: stat.mtimeMs };
    const data = substitute(filePath, await fs.promises.readFile(filePath));
    const digest = crypto.createHash("sha256").update(data).digest("hex");
    const entry = { signature, etag: `"${digest.slice(0, 32)}"`, fingerprint: digest.slice(0, FINGERPRINT_LENGTH) };
    described.set(filePath, entry);
    return { ...entry, mtimeMs: stat.mtimeMs, data };
  }

  // index.html with every local script/stylesheet/manifest URL rewritten to ?v=<content hash of that file>. The page therefore names the
  // exact bytes of every file it runs: a new release changes a URL only when that file's bytes changed, and an unchanged file keeps the same URL
  // (and so the same copy in the browser) across any number of deploys. Rebuilt only when index.html or one of those files changed.
  async function fingerprintIndex(indexPath) {
    const indexInfo = await describe(indexPath);
    if (!indexInfo) return null;
    const source = indexInfo.data || substitute(indexPath, await fs.promises.readFile(indexPath));
    const text = source.toString("utf8");
    const paths = [...new Set([...text.matchAll(LOCAL_ASSET_ATTRIBUTE)].map(match => match[2]))];
    const fingerprints = new Map();
    await Promise.all(paths.map(async assetPath => {
      let decoded;
      try { decoded = decodeURIComponent(assetPath); } catch { return; }
      const filePath = path.join(root, decoded);
      if (!filePath.startsWith(root + path.sep)) return;
      const info = await describe(filePath);
      if (info) fingerprints.set(assetPath, info.fingerprint);
    }));
    const signature = `${indexInfo.signature}|${[...fingerprints].map(([key, value]) => `${key}=${value}`).sort().join(",")}`;
    if (indexCache && indexCache.signature === signature) return indexCache.body;
    const body = Buffer.from(text.replace(LOCAL_ASSET_ATTRIBUTE, (whole, attribute, assetPath) => {
      const fingerprint = fingerprints.get(assetPath);
      return fingerprint ? `${attribute}="${assetPath}?v=${fingerprint}"` : whole;
    }));
    indexCache = { signature, body };
    return body;
  }

  function cacheControlFor(filePath, url, info) {
    const ext = path.extname(filePath).toLowerCase();
    if (REVALIDATE_EXTENSIONS.has(ext)) {
      return url.searchParams.get("v") === info.fingerprint ? IMMUTABLE : REVALIDATE;
    }
    // The manifest is named by a fingerprinted URL in index.html too.
    if (ext === ".webmanifest" && url.searchParams.get("v") === info.fingerprint) return IMMUTABLE;
    return SHORT_LIVED;
  }

  function notModified(req, info) {
    const noneMatch = req.headers["if-none-match"];
    if (noneMatch !== undefined) return etagMatches(noneMatch, info.etag);
    // If-Modified-Since is only honoured on an exact match with the file's own time, never "older than": a rolled-back deploy can carry older file
    // times with different bytes, and "not modified" must never be the answer then.
    const since = req.headers["if-modified-since"];
    return Boolean(since) && since === httpDate(info.mtimeMs);
  }

  function respondFile(req, res, url, filePath, info, data) {
    const ext = path.extname(filePath).toLowerCase();
    const headers = {
      "cache-control": cacheControlFor(filePath, url, info),
      etag: info.etag,
      "last-modified": httpDate(info.mtimeMs),
      vary: "Accept-Encoding"
    };
    if ((req.method === "GET" || req.method === "HEAD") && notModified(req, info)) {
      res.writeHead(304, headers);
      return res.end();
    }
    res.writeHead(200, { "content-type": mime[ext] || "application/octet-stream", "content-length": data.length, ...headers });
    return res.end(data);
  }

  async function readForResponse(filePath, info) {
    return info.data || substitute(filePath, await fs.promises.readFile(filePath));
  }

  async function serve(req, res, url) {
    // One vendored module is served from node_modules (see public/index.html's import map). Same revalidation rules as any script.
    const extra = extraFiles[url.pathname];
    if (extra) {
      const info = await describe(extra);
      if (!info) return send(res, 404, "Not found");
      let data;
      try { data = await readForResponse(extra, info); } catch { return send(res, 404, "Not found"); }
      return respondFile(req, res, url, extra, info, data);
    }
    // A path that cannot be decoded ("%zz") or carries a NUL byte is not a file here: answered 404, not as a server error. The folder check includes the separator, so a sibling folder whose name merely
    // starts with "public" (public-old, public_backup) can never be reached with "/../public-old/..".
    let decodedPath;
    try { decodedPath = decodeURIComponent(url.pathname); } catch { return send(res, 404, "Not found"); }
    if (decodedPath.includes("\0")) return send(res, 404, "Not found");
    const filePath = url.pathname === "/" ? path.join(root, "index.html") : path.join(root, decodedPath);
    if (filePath !== root && !filePath.startsWith(root + path.sep)) return send(res, 403, "Forbidden");
    const ext = path.extname(filePath).toLowerCase();

    // Documents and the service worker: never stored. index.html is rebuilt with content-hashed asset URLs.
    const relative = path.relative(root, filePath);
    if (ext === ".html" || relative === "sw.js") {
      let data = null;
      try {
        if (relative === "index.html") data = await fingerprintIndex(filePath);
        if (data === null) data = substitute(filePath, await fs.promises.readFile(filePath));
      } catch { return send(res, 404, "Not found"); }
      res.writeHead(200, { "content-type": mime[ext] || "application/octet-stream", "content-length": data.length, "cache-control": NO_STORE });
      return res.end(data);
    }

    const info = await describe(filePath);
    if (!info) return send(res, 404, "Not found");
    let data = null;
    const conditional = (req.method === "GET" || req.method === "HEAD") && notModified(req, info);
    if (!conditional) {
      try { data = await readForResponse(filePath, info); } catch { return send(res, 404, "Not found"); }
    }
    return respondFile(req, res, url, filePath, info, data);
  }

  return { serve, describe, fingerprintIndex };
}

module.exports = { createStaticDelivery, servedTextBytes, TEXT_EXTENSIONS, APP_RELEASE_STAMPS, etagMatches, weakTag, LOCAL_ASSET_ATTRIBUTE, FINGERPRINT_LENGTH };
