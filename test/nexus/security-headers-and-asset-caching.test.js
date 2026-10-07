"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");

// Two parts:
//   1. The real server.js on throwaway ports (one without, one with AGRINEXUS_TRUST_PROXY=true): security headers on every kind of answer,
//      HSTS only over HTTPS, ETag + 304 on real public files, documents / service worker / API stay no-store.
//   2. server/static-delivery.js on a temporary public folder, so file bytes can change without touching the repository: a changed file gets a new ETag
//      and a new fingerprinted URL, a matching fingerprint is immutable and a stale one is not, traversal is refused.
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const { createStaticDelivery, etagMatches } = require("../../server/static-delivery.js");
const { applySecurityHeaders, requestIsHttps } = require("../../server/security-headers.js");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "headers-caching-"));
const plain = { port: freePortSync(), child: null };
const trusted = { port: freePortSync(), child: null };
const baseOf = server => `http://localhost:${server.port}`;

async function waitFor(url) {
  for (let i = 0; i < 200; i += 1) {
    try { if ((await fetch(url)).ok) return; } catch { /* not up yet */ }
    await sleep(150);
  }
  throw new Error(`${url} did not become reachable`);
}

function launch(server, name, extraEnv) {
  const db = path.join(dir, `${name}-db.json`);
  fs.copyFileSync(path.join(root, "db.json"), db);
  server.child = spawn(process.execPath, ["server.js"], {
    cwd: root, stdio: "ignore", windowsHide: true,
    env: {
      ...process.env, PORT: String(server.port), SESSION_SECRET: "headers-caching-secret-for-the-test-0123456789",
      AGRINEXUS_DB_PATH: db, AGRINEXUS_SPACES_PATH: path.join(dir, `${name}-spaces.json`),
      OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
      AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_TRUST_PROXY: "", ...extraEnv
    }
  });
}

test.before(async () => {
  launch(plain, "plain", {});
  launch(trusted, "trusted", { AGRINEXUS_TRUST_PROXY: "true" });
  await Promise.all([waitFor(`${baseOf(plain)}/api/healthz`), waitFor(`${baseOf(trusted)}/api/healthz`)]);
});
test.after(() => {
  plain.child?.kill(); trusted.child?.kill();
  try { fs.rmSync(dir, { recursive: true, force: true }); } catch { /* still open on Windows: temp folder, harmless */ }
});

const get = (server, route, headers = {}) => fetch(`${baseOf(server)}${route}`, { headers, redirect: "manual" });

function assertSecurityHeaders(res, label, { hsts = false } = {}) {
  assert.equal(res.headers.get("x-content-type-options"), "nosniff", `${label}: nosniff`);
  assert.equal(res.headers.get("referrer-policy"), "strict-origin-when-cross-origin", `${label}: referrer-policy`);
  assert.equal(res.headers.get("x-frame-options"), "SAMEORIGIN", `${label}: x-frame-options`);
  assert.equal(res.headers.get("content-security-policy"), "frame-ancestors 'self'", `${label}: frame-ancestors only`);
  if (hsts) assert.equal(res.headers.get("strict-transport-security"), "max-age=31536000", `${label}: hsts`);
  else assert.equal(res.headers.get("strict-transport-security"), null, `${label}: no hsts`);
}

test("security headers are on pages, static files, API answers, 404s and 401s", async () => {
  for (const [route, status] of [["/", 200], ["/styles.css", 200], ["/sw.js", 200], ["/api/healthz", 200], ["/no-such-file.js", 404], ["/api/no-such-route", 401], ["/api/session", 401], ["/exports/00000000-0000-0000-0000-000000000000.pdf", 401]]) {
    const res = await get(plain, route);
    await res.arrayBuffer();
    assert.ok([status, 404].includes(res.status), `${route} answered ${res.status}`);
    assertSecurityHeaders(res, route);
  }
  const notFound = await get(plain, "/no-such-file.js"); await notFound.arrayBuffer();
  assert.equal(notFound.status, 404); assertSecurityHeaders(notFound, "404");
  const unauthorized = await get(plain, "/api/session"); await unauthorized.arrayBuffer();
  assert.equal(unauthorized.status, 401); assertSecurityHeaders(unauthorized, "401");
});

test("a request the server cannot read at all still carries the security headers", async () => {
  const res = await new Promise((resolve, reject) => {
    const req = http.request({ host: "localhost", port: plain.port, path: "//", method: "GET", headers: { host: "bad host" } }, resolve);
    req.on("error", reject); req.end();
  });
  res.resume();
  assert.ok(res.statusCode >= 200);
  assert.equal(res.headers["x-content-type-options"], "nosniff");
  assert.equal(res.headers["x-frame-options"], "SAMEORIGIN");
});

test("HSTS is sent only when HTTPS is signalled by a trusted proxy", async () => {
  for (const route of ["/", "/app.js", "/api/healthz", "/api/session", "/no-such-file.js"]) {
    const https = await get(trusted, route, { "x-forwarded-proto": "https" }); await https.arrayBuffer();
    assertSecurityHeaders(https, `${route} via https proxy`, { hsts: true });
    const http1 = await get(trusted, route, { "x-forwarded-proto": "http" }); await http1.arrayBuffer();
    assertSecurityHeaders(http1, `${route} via http proxy`);
    const none = await get(trusted, route); await none.arrayBuffer();
    assertSecurityHeaders(none, `${route} direct`);
    // Not behind a trusted proxy: the header is just caller input and must not switch HSTS on.
    const forged = await get(plain, route, { "x-forwarded-proto": "https" }); await forged.arrayBuffer();
    assertSecurityHeaders(forged, `${route} forged header, proxy not trusted`);
  }
  const visitor = await get(trusted, "/api/healthz", { "cf-visitor": '{"scheme":"https"}' }); await visitor.arrayBuffer();
  assertSecurityHeaders(visitor, "cloudflare visitor scheme", { hsts: true });
});

test("requestIsHttps and applySecurityHeaders unit behaviour", () => {
  const env = { AGRINEXUS_TRUST_PROXY: "true" };
  assert.equal(requestIsHttps({ socket: { encrypted: true }, headers: {} }, {}), true);
  assert.equal(requestIsHttps({ socket: {}, headers: { "x-forwarded-proto": "https, http" } }, env), true);
  assert.equal(requestIsHttps({ socket: {}, headers: { "x-forwarded-proto": "http, https" } }, env), false);
  assert.equal(requestIsHttps({ socket: {}, headers: { "x-forwarded-proto": "https" } }, {}), false);
  assert.equal(requestIsHttps({ socket: {}, headers: {} }, env), false);
  const set = {};
  applySecurityHeaders({ socket: {}, headers: {} }, { setHeader: (name, value) => { set[name] = value; } }, {});
  assert.deepEqual(Object.keys(set).sort(), ["Content-Security-Policy", "Referrer-Policy", "X-Content-Type-Options", "X-Frame-Options"]);
  assert.ok(!/includeSubDomains|preload/i.test(JSON.stringify(set)));
});

test("a real static file gets a strong ETag, and a conditional request gets 304 with no body and the same ETag", async () => {
  for (const route of ["/app.js", "/styles.css", "/kyro-navigation.js?v=kyro-navigation-1"]) {
    const first = await get(plain, route);
    const body = await first.arrayBuffer();
    assert.equal(first.status, 200, route);
    const etag = first.headers.get("etag");
    assert.match(etag, /^"[0-9a-f]{32}"$/, `${route} has a strong etag`);
    assert.equal(first.headers.get("cache-control"), "no-cache", `${route} must revalidate`);
    assert.match(first.headers.get("vary") || "", /accept-encoding/i);
    assert.ok(body.byteLength > 0);
    assert.equal(etag, `"${crypto.createHash("sha256").update(Buffer.from(body)).digest("hex").slice(0, 32)}"`, `${route}: the ETag is the hash of the bytes sent`);

    const second = await get(plain, route, { "if-none-match": etag });
    assert.equal(second.status, 304, route);
    assert.equal((await second.arrayBuffer()).byteLength, 0, "304 has no body");
    assert.equal(second.headers.get("etag"), etag);
    assertSecurityHeaders(second, `${route} 304`);

    // weak form (what a client sends after Cloudflare compressed the answer) and a list
    assert.equal((await get(plain, route, { "if-none-match": `W/${etag}` })).status, 304);
    assert.equal((await get(plain, route, { "if-none-match": `"other", ${etag}` })).status, 304);
    const stale = await get(plain, route, { "if-none-match": '"0000"' });
    assert.equal(stale.status, 200); await stale.arrayBuffer();

    const modified = first.headers.get("last-modified");
    assert.ok(modified);
    assert.equal((await get(plain, route, { "if-modified-since": modified })).status, 304, "exact Last-Modified");
    const older = await get(plain, route, { "if-modified-since": new Date(Date.parse(modified) + 86400000).toUTCString() });
    assert.equal(older.status, 200, "only an exact Last-Modified match counts"); await older.arrayBuffer();
  }
});

test("index.html names every script by content hash; those URLs are immutable and match the files", async () => {
  const page = await get(plain, "/");
  const html = await page.text();
  assert.equal(page.headers.get("cache-control"), "no-store");
  assert.equal(page.headers.get("etag"), null);
  assert.ok(!html.includes("__NEXUS_RELEASE_SHA__"), "release placeholder filled in");
  assert.match(html, /<meta name="agrinexus-release" content="development">/);
  const urls = [...html.matchAll(/\b(?:src|href)="(\/[^"?#\s]+\.(?:js|css))\?v=([0-9a-f]{12})"/g)];
  assert.ok(urls.length > 30, `expected many fingerprinted URLs, found ${urls.length}`);
  assert.ok(html.includes('src="/app.js?v='), "app.js fingerprinted");
  for (const [, assetPath, hash] of urls.filter((_, i) => i % 7 === 0).concat(urls.filter(([, p]) => p === "/app.js" || p === "/styles.css"))) {
    const res = await get(plain, `${assetPath}?v=${hash}`);
    const body = Buffer.from(await res.arrayBuffer());
    assert.equal(res.status, 200, assetPath);
    assert.equal(res.headers.get("cache-control"), "public, max-age=31536000, immutable", `${assetPath} immutable`);
    assert.equal(crypto.createHash("sha256").update(body).digest("hex").slice(0, 12), hash, `${assetPath}: the URL is the hash of the bytes served`);
    // The same file under a hash that is not its own (an older page) is never immutable.
    const wrong = await get(plain, `${assetPath}?v=${"0".repeat(12)}`); await wrong.arrayBuffer();
    assert.equal(wrong.headers.get("cache-control"), "no-cache", `${assetPath} with a stale hash revalidates`);
    // The previous per-release style of URL keeps working and revalidates.
    const old = await get(plain, `${assetPath}?v=some-old-release`); await old.arrayBuffer();
    assert.equal(old.status, 200); assert.equal(old.headers.get("cache-control"), "no-cache");
  }
  // app.js carries no release id, so its bytes do not change from one release to the next; it reads the id from the page.
  const app = await (await get(plain, "/app.js")).text();
  assert.ok(!app.includes("__NEXUS_RELEASE_SHA__"));
  assert.match(app, /const AGRINEXUS_BUILD_VERSION = \(typeof document !== "undefined" && document\.querySelector\?\.\('meta\[name="agrinexus-release"\]'\)/);
  assert.ok(app.includes("const AGRINEXUS_PWA_CACHE_VERSION = `agrinexus-pwa-${AGRINEXUS_BUILD_VERSION}`;"));
  assert.ok(!/AGRINEXUS_BUILD_VERSION = "[^"]/.test(app));
});

test("the real app.js is byte-identical for two different releases, and still follows the release if its stamp lines are edited", async () => {
  const { APP_RELEASE_STAMPS } = require("../../server/static-delivery.js");
  const pub = fs.mkdtempSync(path.join(dir, "pub-"));
  fs.copyFileSync(path.join(root, "public", "app.js"), path.join(pub, "app.js"));
  const real = "__NEXUS_RELEASE_SHA__";
  const a = await deliveryServer(pub, "1".repeat(40), { "app.js": APP_RELEASE_STAMPS }, real);
  const b = await deliveryServer(pub, "2".repeat(40), { "app.js": APP_RELEASE_STAMPS }, real);
  try {
    const first = await fetch(`${a.base}/app.js`); const second = await fetch(`${b.base}/app.js`);
    const bodyA = await first.text(); const bodyB = await second.text();
    assert.equal(first.headers.get("etag"), second.headers.get("etag"));
    assert.equal(bodyA, bodyB);
    assert.ok(!bodyA.includes("1".repeat(40)) && !bodyA.includes("2".repeat(40)) && !bodyA.includes(real));
  } finally { a.server.close(); b.server.close(); }
  // If the lines in app.js stop matching, the old behaviour (id filled in) applies rather than a broken file.
  fs.writeFileSync(path.join(pub, "app.js"), 'const AGRINEXUS_BUILD_VERSION  =  "__NEXUS_RELEASE_SHA__";\n');
  const c = await deliveryServer(pub, "3".repeat(40), { "app.js": APP_RELEASE_STAMPS }, real);
  try { assert.match(await (await fetch(`${c.base}/app.js`)).text(), /"3{40}"/); } finally { c.server.close(); }
});

test("documents, the service worker, the API and exports are never stored", async () => {
  for (const route of ["/", "/index.html", "/status.html", "/terms.html", "/sw.js", "/api/healthz", "/api/session", "/api/no-such-route", "/exports/00000000-0000-0000-0000-000000000000.pdf"]) {
    const res = await get(plain, route); await res.arrayBuffer();
    assert.equal(res.headers.get("cache-control"), "no-store", route);
    assert.equal(res.headers.get("etag"), null, `${route} has no etag`);
  }
  const worker = await (await get(plain, "/sw.js")).text();
  assert.ok(!worker.includes("__NEXUS_RELEASE_SHA__"), "release id filled into the worker");
  assert.match(worker, /CACHE_NAME = "agrinexus-pwa-development"/);
});

test("other files keep the one-hour copy, now with an ETag; the vendored module revalidates", async () => {
  const icon = await get(plain, "/icons/agri-nexus-192.png"); await icon.arrayBuffer();
  assert.equal(icon.status, 200);
  assert.equal(icon.headers.get("cache-control"), "public, max-age=3600");
  assert.ok(icon.headers.get("etag"));
  assert.equal((await get(plain, "/icons/agri-nexus-192.png", { "if-none-match": icon.headers.get("etag") })).status, 304);
  const livekit = await get(plain, "/vendor/livekit-client/livekit-client.esm.mjs"); await livekit.arrayBuffer();
  if (livekit.status === 200) {
    assert.equal(livekit.headers.get("cache-control"), "no-cache");
    assert.match(livekit.headers.get("content-type"), /javascript/);
    assert.ok(livekit.headers.get("etag"));
  }
});

test("path handling is unchanged: traversal and bad encodings are refused", async () => {
  for (const route of ["/%zz", "/%00", "/..%2f..%2fserver.js", "/public-old/x.js", "/..%2fserver.js"]) {
    const res = await get(plain, route); await res.arrayBuffer();
    assert.ok([403, 404].includes(res.status), `${route} answered ${res.status}`);
  }
  const outside = await get(plain, "/..%2fpackage.json"); const text = await outside.text();
  assert.ok(!text.includes('"scripts"'));
});

// ---- server/static-delivery.js on a temporary folder ------------------------------------------------------------------------------------------

function deliveryServer(publicDir, release = "rel-1", stableStamps = {}, token = "__REL__") {
  const mime = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css", ".webmanifest": "application/manifest+json", ".png": "image/png" };
  const send = (res, status, body) => { res.writeHead(status, { "content-type": "text/plain" }); res.end(String(body)); };
  const delivery = createStaticDelivery({ publicDir, placeholder: token, fillRelease: text => text.replaceAll(token, release), mime, send, stableStamps });
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    delivery.serve(req, res, url).catch(error => { res.writeHead(500); res.end(String(error)); });
  });
  return new Promise(resolve => server.listen(0, "127.0.0.1", () => resolve({ server, delivery, base: `http://127.0.0.1:${server.address().port}` })));
}

test("changing a file's bytes changes its ETag and its fingerprinted URL; unchanged files keep both across a release change", async () => {
  const pub = fs.mkdtempSync(path.join(dir, "pub-"));
  fs.writeFileSync(path.join(pub, "index.html"), '<meta name="r" content="__REL__"><link rel="stylesheet" href="/a.css?v=__REL__"><script src="/a.js?v=old"></script><script src="/missing.js?v=x"></script>');
  fs.writeFileSync(path.join(pub, "a.js"), "console.log(1);");
  fs.writeFileSync(path.join(pub, "a.css"), "body{color:red}");
  fs.writeFileSync(path.join(pub, "release.js"), 'const R = "__REL__";');
  const one = await deliveryServer(pub, "rel-1");
  try {
    const page1 = await (await fetch(`${one.base}/`)).text();
    const hashJs1 = page1.match(/\/a\.js\?v=([0-9a-f]{12})/)[1];
    const hashCss1 = page1.match(/\/a\.css\?v=([0-9a-f]{12})/)[1];
    assert.match(page1, /content="rel-1"/);
    assert.ok(page1.includes('/missing.js?v=x'), "a file that does not exist is left as written");
    const etag1 = (await fetch(`${one.base}/a.js`)).headers.get("etag");

    // same bytes, different release id: the files without the id keep their ETag and URL, the one with the id does not
    const two = await deliveryServer(pub, "rel-2");
    try {
      const page2 = await (await fetch(`${two.base}/`)).text();
      assert.ok(page2.includes(`/a.js?v=${hashJs1}`) && page2.includes(`/a.css?v=${hashCss1}`), "unchanged files keep their URL across releases");
      assert.equal((await fetch(`${two.base}/a.js`)).headers.get("etag"), etag1);
      assert.equal((await fetch(`${two.base}/a.js`, { headers: { "if-none-match": etag1 } })).status, 304, "an ETag from the earlier release still validates");
      assert.notEqual((await fetch(`${one.base}/release.js`)).headers.get("etag"), (await fetch(`${two.base}/release.js`)).headers.get("etag"));
      assert.match(await (await fetch(`${two.base}/release.js`)).text(), /rel-2/);
    } finally { two.server.close(); }

    // now change the bytes
    fs.writeFileSync(path.join(pub, "a.js"), "console.log(2);");
    const future = new Date(Date.now() + 5000); fs.utimesSync(path.join(pub, "a.js"), future, future);
    const changed = await fetch(`${one.base}/a.js`);
    assert.notEqual(changed.headers.get("etag"), etag1, "new bytes, new ETag");
    assert.equal(await changed.text(), "console.log(2);");
    assert.equal((await fetch(`${one.base}/a.js`, { headers: { "if-none-match": etag1 } })).status, 200, "the old ETag no longer validates");
    const page3 = await (await fetch(`${one.base}/`)).text();
    const hashJs3 = page3.match(/\/a\.js\?v=([0-9a-f]{12})/)[1];
    assert.notEqual(hashJs3, hashJs1, "new bytes, new URL");
    assert.ok(page3.includes(`/a.css?v=${hashCss1}`), "the stylesheet did not change and keeps its URL");
    // the old fingerprint is not immutable any more: it can only ever be answered with the current bytes, and revalidated
    const oldUrl = await fetch(`${one.base}/a.js?v=${hashJs1}`);
    assert.equal(oldUrl.headers.get("cache-control"), "no-cache");
    assert.equal(await oldUrl.text(), "console.log(2);");
    assert.equal((await fetch(`${one.base}/a.js?v=${hashJs3}`)).headers.get("cache-control"), "public, max-age=31536000, immutable");
  } finally { one.server.close(); }
});

test("HEAD requests and If-None-Match parsing", async () => {
  const pub = fs.mkdtempSync(path.join(dir, "pub-"));
  fs.writeFileSync(path.join(pub, "a.js"), "x");
  const s = await deliveryServer(pub);
  try {
    const head = await fetch(`${s.base}/a.js`, { method: "HEAD" });
    assert.equal(head.status, 200); assert.ok(head.headers.get("etag"));
    assert.equal((await fetch(`${s.base}/a.js`, { method: "HEAD", headers: { "if-none-match": head.headers.get("etag") } })).status, 304);
    assert.equal((await fetch(`${s.base}/a.js`, { headers: { "if-none-match": "*" } })).status, 304);
  } finally { s.server.close(); }
  assert.equal(etagMatches('W/"a", "b"', '"b"'), true);
  assert.equal(etagMatches('"a"', '"b"'), false);
  assert.equal(etagMatches("", '"b"'), false);
  assert.equal(etagMatches(",", '""'), false);
});
