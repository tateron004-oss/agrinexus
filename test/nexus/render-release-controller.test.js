"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { resolveUniqueService, validateService, reconcileServiceConfiguration, resolveOrProvisionDatabase, provisionBackgroundWorker, resolveOrProvisionWorker, resolveReusableDeploy, deployExactSha, run } = require("../../scripts/nexus-render-release-controller.js");

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

test("canonical services are reconciled to root production entry points", async () => {
  const calls = [];
  const client = { request: async (path, options) => { calls.push({ path, options }); return { id: "srv-web", name: "nexus-genesis-certified" }; } };
  await reconcileServiceConfiguration(client, { id: "srv-web", name: "nexus-genesis-certified" });
  const body = calls[0].options.body;
  assert.equal(calls[0].path, "/services/srv-web");
  assert.equal(calls[0].options.method, "PATCH");
  assert.equal(body.rootDir, "");
  assert.equal(body.serviceDetails.envSpecificDetails.startCommand, "npm start");
  assert.equal(body.serviceDetails.preDeployCommand, "node foundation/scripts/migrate.js");
  assert.equal(body.serviceDetails.healthCheckPath, "/api/healthz");
});

test("worker and provider configuration use their canonical processes", async () => {
  const bodies = [];
  const client = { request: async (path, options) => { bodies.push(options.body); return {}; } };
  await reconcileServiceConfiguration(client, { id: "srv-worker", name: "nexus-background-worker" });
  await reconcileServiceConfiguration(client, { id: "srv-provider", name: "agrinexus-provider-engines" });
  assert.equal(bodies[0].serviceDetails.envSpecificDetails.startCommand, "node nexus/workers/process.js");
  assert.equal(bodies[1].serviceDetails.envSpecificDetails.startCommand, "npm run provider-engines");
});

test("missing worker is provisioned from Genesis and rediscovered", async () => {
  const calls = [];
  let lookups = 0;
  const web = { id: "srv-web", name: "nexus-genesis-certified", type: "web_service", ownerId: "tea-owner", branch: "main", repo: "https://github.com/tateron004-oss/agrinexus" };
  const worker = { id: "srv-worker", name: "nexus-background-worker", type: "background_worker", ownerId: "tea-owner", branch: "main", repo: web.repo };
  const client = { request: async (path, options = {}) => {
    calls.push({ path, options });
    if (path.includes("name=nexus-background-worker")) return lookups++ === 0 ? [] : [{ service: worker }];
    if (path === "/services" && options.method === "POST") return { service: worker };
    throw new Error(`Unexpected request ${path}`);
  } };
  assert.deepEqual(await resolveOrProvisionWorker(client, web, "postgres://private"), worker);
  const creation = calls.find(call => call.path === "/services" && call.options.method === "POST");
  assert.equal(creation.options.body.ownerId, "tea-owner");
  assert.equal(creation.options.body.repo, web.repo);
  assert.equal(creation.options.body.serviceDetails.envSpecificDetails.startCommand, "node nexus/workers/process.js");
  assert.equal(creation.options.body.envVars.find(item => item.key === "DATABASE_URL").value, "postgres://private");
});

test("existing worker is reused and duplicates fail closed", async () => {
  const worker = { id: "srv-worker", name: "nexus-background-worker" };
  assert.equal(await resolveOrProvisionWorker({ request: async () => [{ service: worker }] }, {}, "postgres://private"), worker);
  await assert.rejects(resolveOrProvisionWorker({ request: async () => [{ service: worker }, { service: worker }] }, {}, "postgres://private"), /found 2/);
});

test("worker provisioning and database discovery fail closed", async () => {
  const web = { id: "srv-web", name: "nexus-genesis-certified", type: "web_service", ownerId: "tea-owner", branch: "main", repo: "https://github.com/tateron004-oss/agrinexus" };
  await assert.rejects(provisionBackgroundWorker({ request: async () => [] }, web), /internal connection/);
  await assert.rejects(resolveOrProvisionDatabase({ request: async path => path === "/postgres?name=nexus-postgres&limit=100" ? [{ postgres: { name: "nexus-postgres" } }, { postgres: { name: "nexus-postgres" } }] : null }, web), /found 2/);
  const client = { request: async path => path.startsWith("/postgres?")
    ? [{ postgres: { id: "dpg-1", name: "nexus-postgres", status: "available" } }]
    : { internalConnectionPoolString: "postgres://pooled-private" } };
  assert.equal(await resolveOrProvisionDatabase(client, web), "postgres://pooled-private");
});

test("missing database is provisioned from the Genesis workspace", async () => {
  const calls = [];
  const web = { id: "srv-web", name: "nexus-genesis-certified", ownerId: "tea-owner" };
  const client = { request: async (path, options = {}) => {
    calls.push({ path, options });
    if (path.startsWith("/postgres?")) return [];
    if (path === "/postgres" && options.method === "POST") return { id: "dpg-1", name: "nexus-postgres", status: "creating" };
    if (path === "/postgres/dpg-1") return { id: "dpg-1", name: "nexus-postgres", status: "available" };
    if (path.endsWith("/connection-info")) return { internalConnectionPoolString: "postgres://pooled-private" };
    throw new Error(`Unexpected request ${path}`);
  } };
  assert.equal(await resolveOrProvisionDatabase(client, web, { pollMs: 0, timeoutMs: 100 }), "postgres://pooled-private");
  const creation = calls.find(call => call.path === "/postgres" && call.options.method === "POST");
  assert.equal(creation.options.body.ownerId, "tea-owner");
  assert.equal(creation.options.body.plan, "basic_1gb");
  assert.equal(creation.options.body.connectionPool, "pgbouncer");
});

test("exact deploy polls to live and enforces commit identity", async () => {
  const responses = [
    [],
    { id: "dep-1", status: "build_in_progress", commit: { id: "sha-1" } },
    { id: "dep-1", status: "live", commit: { id: "sha-1" } }
  ];
  const client = { request: async () => responses.shift() };
  const result = await deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1", { pollMs: 0, timeoutMs: 100 });
  assert.equal(result.status, "live");
  assert.equal(result.commit, "sha-1");
});

test("exact deploy fails closed on failed status", async () => {
  const responses = [[], { id: "dep-1", status: "build_failed", commit: { id: "sha-1" } }];
  const client = { request: async () => responses.shift() };
  await assert.rejects(deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1", { pollMs: 0, timeoutMs: 100 }), /failed/);
});

test("exact deploy resumes an existing non-failed deployment for the release SHA", async () => {
  const calls = [];
  const responses = [
    [{ deploy: { id: "dep-existing", status: "build_in_progress", commit: { id: "sha-1" } } }],
    { id: "dep-existing", status: "live", commit: { id: "sha-1" } }
  ];
  const client = { request: async (path, options = {}) => {
    calls.push({ path, options });
    return responses.shift();
  } };
  const result = await deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1", { pollMs: 0, timeoutMs: 100 });
  assert.equal(result.deployId, "dep-existing");
  assert.equal(calls.some(call => call.options.method === "POST"), false);
});

test("reusable deploy discovery ignores failed and unrelated deployments", async () => {
  const client = { request: async () => [
    { deploy: { id: "dep-failed", status: "build_failed", commit: { id: "sha-1" } } },
    { deploy: { id: "dep-other", status: "live", commit: { id: "sha-2" } } },
    { deploy: { id: "dep-match", status: "queued", commit: { id: "sha-1" } } }
  ] };
  const result = await resolveReusableDeploy(client, { id: "srv-1" }, "sha-1");
  assert.equal(result.id, "dep-match");
});
