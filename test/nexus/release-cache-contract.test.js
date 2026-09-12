"use strict";
const fs = require("node:fs"), path = require("node:path"), test = require("node:test"), assert = require("node:assert/strict");
const { assertReleaseCacheContract } = require("../../scripts/lib/assert-release-cache-contract.js");
const read = f => fs.readFileSync(path.join(__dirname, "../..", f), "utf8");
const sources = { app: read("public/app.js"), server: read("server.js"), sw: read("public/sw.js") };
test("immutable cache identity agrees across server, app and service worker", () => assertReleaseCacheContract(sources));
test("cache validation rejects stale app, stale worker and divergent server namespace", () => {
  for (const key of ["app", "sw", "server"]) assert.throws(() => assertReleaseCacheContract({ ...sources,
    [key]: sources[key].replaceAll("agrinexus-pwa-", "stale-pwa-") }));
});
