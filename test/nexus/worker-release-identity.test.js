"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { resolveWorkerReleaseSha } = require("../../nexus/workers/release-identity.js");

test("worker prefers the release SHA explicitly installed by the release controller", () => {
  const exact = "a".repeat(40);
  assert.equal(resolveWorkerReleaseSha({ NODE_ENV: "production", NEXUS_RELEASE_SHA: exact, RENDER_GIT_COMMIT: "b".repeat(40) }), exact);
});

test("production worker refuses to emit a heartbeat without exact release identity", () => {
  assert.throws(() => resolveWorkerReleaseSha({ NODE_ENV: "production" }), /exact 40-character release SHA/);
  assert.equal(resolveWorkerReleaseSha({}), "development");
});
