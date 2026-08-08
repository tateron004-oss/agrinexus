"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { resolveUniqueService, validateService, deployExactSha } = require("../../scripts/nexus-render-release-controller.js");

test("service discovery rejects missing and duplicate canonical services", async () => {
  await assert.rejects(resolveUniqueService({ request: async () => [] }, "web"), /found 0/);
  await assert.rejects(resolveUniqueService({ request: async () => [{ service: { name: "web" } }, { service: { name: "web" } }] }, "web"), /found 2/);
});

test("service validation rejects stale branch and repository", () => {
  assert.throws(() => validateService({ name: "web", type: "web_service", branch: "old" }, "web_service"), /expected main/);
  assert.throws(() => validateService({ name: "web", type: "web_service", branch: "main", repo: "https://github.com/example/other" }, "web_service"), /unexpected repository/);
});

test("exact deploy polls to live and enforces commit identity", async () => {
  const responses = [
    { id: "dep-1", status: "build_in_progress", commit: { id: "sha-1" } },
    { id: "dep-1", status: "live", commit: { id: "sha-1" } }
  ];
  const client = { request: async () => responses.shift() };
  const result = await deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1", { pollMs: 0, timeoutMs: 100 });
  assert.equal(result.status, "live");
  assert.equal(result.commit, "sha-1");
});

test("exact deploy fails closed on failed status", async () => {
  const client = { request: async () => ({ id: "dep-1", status: "build_failed", commit: { id: "sha-1" } }) };
  await assert.rejects(deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1", { pollMs: 0, timeoutMs: 100 }), /failed/);
});
