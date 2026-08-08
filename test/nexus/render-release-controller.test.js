"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { resolveUniqueService, validateService, provisionBackgroundWorker, resolveOrProvisionWorker, deployExactSha, run } = require("../../scripts/nexus-render-release-controller.js");

test("release controller refuses every non-canonical Nexus host", async () => {
  await assert.rejects(
    run({ RENDER_API_KEY: "test", EXPECTED_RELEASE_SHA: "sha-1", NEXUS_BASE_URL: "https://agrinexus-platform.onrender.com" }),
    /Refusing non-canonical Nexus production host/
  );
});

test("service discovery rejects missing and duplicate canonical services", async () => {
  await assert.rejects(resolveUniqueService({ request: async () => [] }, "web"), /found 0/);
  await assert.rejects(resolveUniqueService({ request: async () => [{ service: { name: "web" } }, { service: { name: "web" } }] }, "web"), /found 2/);
});

test("service validation rejects stale branch and repository", () => {
  assert.throws(() => validateService({ name: "web", type: "web_service", branch: "old" }, "web_service"), /expected main/);
  assert.throws(() => validateService({ name: "web", type: "web_service", branch: "main", repo: "https://github.com/example/other" }, "web_service"), /unexpected repository/);
});

test("missing worker is provisioned from Genesis and rediscovered", async () => {
  const calls = [];
  let lookups = 0;
  const web = { id: "srv-web", name: "nexus-genesis-certified", type: "web_service", ownerId: "tea-owner", branch: "main", repo: "https://github.com/tateron004-oss/agrinexus" };
  const worker = { id: "srv-worker", name: "nexus-background-worker", type: "background_worker", ownerId: "tea-owner", branch: "main", repo: web.repo };
  const client = { request: async (path, options = {}) => {
    calls.push({ path, options });
    if (path.includes("name=nexus-background-worker")) return lookups++ === 0 ? [] : [{ service: worker }];
    if (path.includes("/env-vars")) return [{ envVar: { key: "DATABASE_URL", value: "postgres://private" } }];
    if (path === "/services" && options.method === "POST") return { service: worker };
    throw new Error(`Unexpected request ${path}`);
  } };
  assert.deepEqual(await resolveOrProvisionWorker(client, web), worker);
  const creation = calls.find(call => call.path === "/services" && call.options.method === "POST");
  assert.equal(creation.options.body.ownerId, "tea-owner");
  assert.equal(creation.options.body.repo, web.repo);
  assert.equal(creation.options.body.serviceDetails.envSpecificDetails.startCommand, "node nexus/workers/process.js");
  assert.equal(creation.options.body.envVars.find(item => item.key === "DATABASE_URL").value, "postgres://private");
});

test("existing worker is reused and duplicates fail closed", async () => {
  const worker = { id: "srv-worker", name: "nexus-background-worker" };
  assert.equal(await resolveOrProvisionWorker({ request: async () => [{ service: worker }] }, {}), worker);
  await assert.rejects(resolveOrProvisionWorker({ request: async () => [{ service: worker }, { service: worker }] }, {}), /found 2/);
});

test("worker provisioning requires the Genesis database connection", async () => {
  const web = { id: "srv-web", name: "nexus-genesis-certified", type: "web_service", ownerId: "tea-owner", branch: "main", repo: "https://github.com/tateron004-oss/agrinexus" };
  await assert.rejects(provisionBackgroundWorker({ request: async () => [] }, web), /DATABASE_URL/);
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
