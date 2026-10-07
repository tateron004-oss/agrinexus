"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Runs public/sw.js against a fake worker environment (no browser is available to the test suite) and checks the install step: the cache for a release
// is filled from the page the server sends right now and exactly the files that page names, so it can never mix one release's page with another's scripts.
const source = fs.readFileSync(path.join(__dirname, "..", "..", "public", "sw.js"), "utf8");

function boot({ pageHtml, failPage = false, failAsset = null }) {
  const listeners = {};
  const stores = new Map();
  const fetched = [];
  const makeCache = name => {
    const entries = new Map();
    stores.set(name, entries);
    return {
      put: async (request, response) => { entries.set(typeof request === "string" ? request : request.url, response); },
      add: async request => { const response = await fetchFake(request); if (!response.ok) throw new TypeError("bad status"); entries.set(String(request), response); },
      addAll: async requests => { const responses = await Promise.all(requests.map(fetchFake)); responses.forEach(r => { if (!r.ok) throw new TypeError("bad status"); }); requests.forEach((r, i) => entries.set(String(r), responses[i])); }
    };
  };
  async function fetchFake(request, options) {
    const url = String(request);
    fetched.push({ url, cache: options?.cache || "default" });
    if (url === "/" && failPage) return new Response("down", { status: 503 });
    if (failAsset && url.includes(failAsset)) return new Response("missing", { status: 404 });
    if (url === "/") return new Response(pageHtml, { status: 200 });
    return new Response("body of " + url, { status: 200 });
  }
  const context = {
    self: { location: { origin: "https://app.example" }, addEventListener: (type, fn) => { listeners[type] = fn; }, skipWaiting: async () => {}, clients: { claim: async () => {} } },
    caches: { open: async name => makeCache(name), keys: async () => [...stores.keys()], delete: async name => stores.delete(name), match: async () => undefined },
    fetch: fetchFake, URL, Response, console: { warn: () => {} }, Promise
  };
  vm.runInNewContext(source.replaceAll("__NEXUS_RELEASE_SHA__", "r1"), context);
  const install = async () => { let done; listeners.install({ waitUntil: p => { done = p; } }); await done; };
  return { install, stores, fetched };
}

const page = `<!doctype html><link rel="manifest" href="/manifest.webmanifest?v=aaaaaaaaaaaa"><link rel="stylesheet" href="/styles.css?v=bbbbbbbbbbbb">
<script src="/kyro-navigation.js?v=cccccccccccc"></script><script src="/app.js?v=dddddddddddd"></script><script src="https://cdn.example/x.js"></script><a href="/terms.html">t</a>`;

test("install caches the page it just fetched and exactly the files that page names", async () => {
  const worker = boot({ pageHtml: page });
  await worker.install();
  const cache = worker.stores.get("agrinexus-pwa-r1");
  for (const key of ["/", "/index.html", "/manifest.webmanifest?v=aaaaaaaaaaaa", "/styles.css?v=bbbbbbbbbbbb", "/kyro-navigation.js?v=cccccccccccc", "/app.js?v=dddddddddddd", "/status.html", "/icons/agri-nexus-192.png"]) {
    assert.ok(cache.has(key), `${key} cached`);
  }
  assert.ok(![...cache.keys()].some(key => key.includes("cdn.example")), "other origins are not cached");
  assert.ok(![...cache.keys()].some(key => key.includes("agrinexus-pwa-r1") || key.includes("?v=r1")), "no per-release URL is invented");
  assert.equal(await (await cache.get("/")).text(), await (await cache.get("/index.html")).text(), "both page entries are the same release");
  const pageFetches = worker.fetched.filter(item => item.url === "/");
  assert.equal(pageFetches.length, 1, "the page is fetched once");
  assert.equal(pageFetches[0].cache, "no-store", "the page always comes from the server");
  for (const item of worker.fetched.filter(entry => entry.url !== "/")) assert.equal(item.cache, "default", `${item.url} uses the browser's own cache and validators`);
});

test("an unreadable page installs nothing (no half release); a missing script fails the script batch atomically", async () => {
  const unreadable = boot({ pageHtml: page, failPage: true });
  await unreadable.install();
  assert.ok(!unreadable.stores.get("agrinexus-pwa-r1")?.has("/") && !unreadable.stores.get("agrinexus-pwa-r1")?.has("/app.js?v=dddddddddddd"), "no page, nothing cached");
  const half = boot({ pageHtml: page, failAsset: "app.js" });
  await half.install();
  const cache = half.stores.get("agrinexus-pwa-r1");
  assert.ok(!cache.has("/app.js?v=dddddddddddd"), "addAll is all-or-nothing for the scripts");
});
