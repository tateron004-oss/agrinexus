#!/usr/bin/env node
"use strict";
// Read-only measurement of what a phone downloads to open the app: GET requests only, nothing is written anywhere.
//
//   node scripts/measure-first-load.js --base http://localhost:3000
//   node scripts/measure-first-load.js --base https://your-app.example --next-base https://your-app-after-a-deploy.example
//
// It fetches the home page, then every local script / stylesheet / manifest the page names (the same files the service worker caches), with
// Accept-Encoding: br, gzip, and reports for each pass: requests sent, response bytes on the wire (compressed body + response headers), and how many
// answers were 304 (no body). Passes:
//   1. cold visit            nothing cached
//   2. repeat visit          the browser's HTTP cache is modelled from the first pass's response headers: a file that is still fresh
//                            (max-age, immutable) is not requested at all; one with an ETag is asked "has it changed?" (If-None-Match);
//                            a file marked no-store, or without any validator, is downloaded again.
//   3. visit after a deploy  only with --next-base (a second server running the next release): same model, cache entries are matched by full URL,
//                            exactly as a browser does, so a file whose URL changed is a miss.
// When the server sends no Content-Encoding (a local server; in production Cloudflare compresses), the compressed size is ESTIMATED with brotli
// and shown as "est."; use it only to compare two builds, not as an absolute number.
const http = require("node:http");
const https = require("node:https");
const zlib = require("node:zlib");

function args() {
  const out = { base: "", next: "", json: false };
  const argv = process.argv.slice(2);
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === "--base") out.base = argv[++i] || "";
    else if (argv[i] === "--next-base") out.next = argv[++i] || "";
    else if (argv[i] === "--json") out.json = true;
    else if (argv[i] === "--help" || argv[i] === "-h") { console.log("usage: node scripts/measure-first-load.js --base URL [--next-base URL] [--json]"); process.exit(0); }
  }
  if (!/^https?:\/\//i.test(out.base)) { console.error("--base http(s)://host[:port] is required"); process.exit(2); }
  out.base = out.base.replace(/\/+$/, ""); out.next = out.next.replace(/\/+$/, "");
  return out;
}

function request(base, route, headers) {
  return new Promise((resolve, reject) => {
    const url = new URL(route, base + "/");
    const lib = url.protocol === "https:" ? https : http;
    const req = lib.request(url, { method: "GET", headers: { "accept-encoding": "br, gzip", "user-agent": "measure-first-load/1", ...headers } }, res => {
      const chunks = [];
      res.on("data", chunk => chunks.push(chunk));
      res.on("end", () => {
        const body = Buffer.concat(chunks);
        const headerText = res.rawHeaders.reduce((text, item, i) => text + item + (i % 2 ? "\r\n" : ": "), `HTTP/1.1 ${res.statusCode} ${res.statusMessage}\r\n`) + "\r\n";
        const headerBytes = Buffer.byteLength(headerText);
        resolve({ route, status: res.statusCode, headers: res.headers, body, headerBytes });
      });
    });
    req.on("error", reject);
    req.setTimeout(30000, () => req.destroy(new Error("timeout")));
    req.end();
  });
}

const COMPRESSIBLE = /javascript|css|html|json|svg|manifest|xml|text\//i;
function wireBodyBytes(res) {
  if (res.status === 304) return { bytes: 0, estimated: false };
  if (res.headers["content-encoding"]) return { bytes: res.body.length, estimated: false };
  if (!COMPRESSIBLE.test(res.headers["content-type"] || "") || res.body.length < 1024) return { bytes: res.body.length, estimated: false };
  const packed = zlib.brotliCompressSync(res.body, { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 } });
  return { bytes: packed.length, estimated: true };
}

function freshness(headers) {
  const control = String(headers["cache-control"] || "").toLowerCase();
  if (/no-store/.test(control)) return { store: false };
  const max = control.match(/max-age=(\d+)/);
  return { store: true, fresh: Boolean(max) && Number(max[1]) > 0 && !/no-cache/.test(control), immutable: /immutable/.test(control), etag: headers.etag || "", lastModified: headers["last-modified"] || "" };
}

function assetPaths(html) {
  const found = new Set();
  for (const match of html.matchAll(/\b(?:src|href)="(\/[^"#\s]+\.(?:js|mjs|css|webmanifest)(?:\?[^"#\s]*)?)"/g)) found.add(match[1]);
  return [...found];
}

async function visit(base, cache, label) {
  const stats = { label, requests: 0, notRequested: 0, notModified: 0, bodyBytes: 0, headerBytes: 0, estimated: false, files: 0 };
  async function load(route) {
    stats.files += 1;
    const key = new URL(route, base + "/").pathname + new URL(route, base + "/").search;
    const entry = cache.get(key);
    const headers = {};
    if (entry?.store) {
      if (entry.fresh) { stats.notRequested += 1; return entry.body; }
      if (entry.etag) headers["if-none-match"] = entry.etag;
      else if (entry.lastModified) headers["if-modified-since"] = entry.lastModified;
    }
    const res = await request(base, route, headers);
    stats.requests += 1;
    stats.headerBytes += res.headerBytes;
    if (res.status === 304 && entry) { stats.notModified += 1; return entry.body; }
    const wire = wireBodyBytes(res);
    stats.bodyBytes += wire.bytes; stats.estimated ||= wire.estimated;
    cache.set(key, { ...freshness(res.headers), body: res.body });
    return res.body;
  }
  const page = await load("/");
  const html = page.toString("utf8");
  for (const route of assetPaths(html)) await load(route);
  stats.wireBytes = stats.bodyBytes + stats.headerBytes;
  return stats;
}

const kb = n => `${(n / 1024).toFixed(1)} KB`;
function line(s) {
  return `${s.label.padEnd(34)} requests ${String(s.requests).padStart(3)} / ${String(s.files).padStart(3)} files | from cache ${String(s.notRequested).padStart(3)} | 304 ${String(s.notModified).padStart(3)} | wire ${kb(s.wireBytes).padStart(10)}${s.estimated ? " (est.)" : ""}`;
}

(async () => {
  const options = args();
  const cache = new Map();
  const results = [];
  results.push(await visit(options.base, cache, "cold visit"));
  results.push(await visit(options.base, cache, "repeat visit (same release)"));
  if (options.next) results.push(await visit(options.next, cache, "visit after a deploy (next release)"));
  if (options.json) console.log(JSON.stringify(results, null, 2));
  else {
    console.log(`base: ${options.base}${options.next ? `   next release: ${options.next}` : ""}`);
    for (const result of results) console.log(line(result));
  }
})().catch(error => { console.error(`measurement failed: ${error.message}`); process.exit(1); });
