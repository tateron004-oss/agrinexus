"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { HOSTED_PROVIDER_ENV, SHARED_PROVIDER_SECRET_KEYS, resolveUniqueService, validateService, reconcileServiceConfiguration, resolveOrProvisionDatabase, ensureGeneratedEnvSecret, ensureSharedEnvSecret, installHostedProviderContract, canonicalToolProviders, provisionBackgroundWorker, resolveOrProvisionWorker, resolveReusableDeploy, deployExactSha, waitForAcceptanceToken, run } = require("../../scripts/nexus-render-release-controller.js");

test("release controller refuses every non-canonical Nexus host", async () => {
  await assert.rejects(
    run({ RENDER_API_KEY: "test", EXPECTED_RELEASE_SHA: "sha-1", NEXUS_BASE_URL: "https://agrinexus-platform.onrender.com" }),
    /Refusing non-canonical Nexus production host/
  );
});

test("Render client retries transient network failures without hiding permanent API errors", async () => {
  const { createClient } = require("../../scripts/nexus-render-release-controller.js");
  let attempts = 0;
  const client = createClient({ apiKey: "test", retryMs: 0, fetchImpl: async () => {
    attempts += 1;
    if (attempts < 3) throw new TypeError("fetch failed");
    return { ok: true, status: 200, text: async () => JSON.stringify({ ok: true }) };
  } });
  assert.deepEqual(await client.request("/services"), { ok: true });
  assert.equal(attempts, 3);

  const permanent = createClient({ apiKey: "test", retryMs: 0, fetchImpl: async () => ({ ok: false, status: 401, text: async () => "{}" }) });
  await assert.rejects(permanent.request("/services"), /returned 401/);
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

test("release controller defines signed production tool coverage for every workspace", () => {
  const tools = canonicalToolProviders("shared-secret");
  assert.equal(tools.length, 16);
  assert.ok(tools.every(tool => tool.receiptSecret === "shared-secret" && tool.endpoint.startsWith("https://agrinexus-provider-engines.onrender.com/nexus/tools/")));
  const manifests = require("../../nexus/apps/default-manifests.js").defaultApplicationManifests();
  const toolIds = new Set(tools.map(tool => tool.toolId));
  for (const manifest of manifests) assert.ok(manifest.capabilities.some(capability => toolIds.has(capability)), `${manifest.applicationId} has a production executor`);
  const health = tools.find(tool => tool.toolId === "health.record");
  assert.deepEqual({ riskTier: health.riskTier, confirmationRequired: health.confirmationRequired,
    consentScope: health.consentScope, dataClassification: health.dataClassification },
  { riskTier: "regulated", confirmationRequired: true, consentScope: "health:record:write", dataClassification: "health" });
  const emergency = tools.find(tool => tool.toolId === "health.emergency-guidance");
  assert.deepEqual({ riskTier: emergency.riskTier, confirmationRequired: emergency.confirmationRequired,
    dataClassification: emergency.dataClassification },
  { riskTier: "regulated", confirmationRequired: false, dataClassification: "health" });
  const offline = tools.find(tool => tool.toolId === "offline.sync");
  assert.equal(offline.confirmationRequired, true);
  assert.equal(offline.consentScope, undefined);
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

test("web production secrets are created once and compliant values are preserved", async () => {
  const writes = [];
  const client = { request: async (path, options = {}) => {
    if (path.endsWith("/env-vars?limit=100")) {
      return [{ envVar: { key: "SESSION_SECRET", value: "s".repeat(40) } }];
    }
    if (options.method === "PUT") {
      writes.push({ path, value: options.body.value });
      return { envVar: { key: path.split("/").at(-1), value: options.body.value } };
    }
    throw new Error(`Unexpected request ${path}`);
  } };
  assert.deepEqual(await ensureGeneratedEnvSecret(client, "srv-web", "SESSION_SECRET", 32), { key: "SESSION_SECRET", installed: false });
  assert.deepEqual(await ensureGeneratedEnvSecret(client, "srv-web", "PASSWORD_PEPPER", 16, 32), { key: "PASSWORD_PEPPER", installed: true });
  assert.equal(writes.length, 1);
  assert.match(writes[0].path, /PASSWORD_PEPPER$/);
  assert.ok(writes[0].value.length >= 16);
});

test("hosted provider contract installs every live mode and endpoint on Nexus", async () => {
  const writes = [];
  const environments = {
    "srv-web": new Map([["AI_PROVIDER_API_KEY", "existing-shared-provider-secret"]]),
    "srv-provider": new Map()
  };
  const client = { request: async (path, options = {}) => {
    const match = path.match(/^\/services\/([^/]+)\/env-vars(?:\/([^?]+))?/);
    if (!match) throw new Error(`Unexpected request ${path}`);
    const [, serviceId, encodedKey] = match;
    if (!encodedKey) return [...environments[serviceId].entries()].map(([key, value]) => ({ envVar: { key, value } }));
    const key = decodeURIComponent(encodedKey);
    environments[serviceId].set(key, options.body.value);
    writes.push({ serviceId, key, value: options.body.value });
    return {};
  } };

  const result = await installHostedProviderContract(client, "srv-web", "srv-provider");
  assert.deepEqual(result.environmentKeys.sort(), Object.keys(HOSTED_PROVIDER_ENV).sort());
  for (const [key, value] of Object.entries(HOSTED_PROVIDER_ENV)) {
    assert.equal(environments["srv-web"].get(key), value, `${key} is installed on Nexus`);
  }
  for (const key of SHARED_PROVIDER_SECRET_KEYS) {
    assert.ok(environments["srv-web"].get(key).length >= 24, `${key} exists on Nexus`);
    assert.equal(environments["srv-web"].get(key), environments["srv-provider"].get(key), `${key} is shared byte-for-byte`);
  }
  assert.equal(environments["srv-provider"].get("AI_PROVIDER_API_KEY"), "existing-shared-provider-secret");
  assert.equal(writes.some(write => write.key === "BILLING_PRICE_ID"), false, "controller does not fabricate a paid billing price");
});

test("shared provider credentials preserve an existing value and repair drift", async () => {
  const environments = {
    web: new Map([["SHARED_KEY", "authoritative-existing-secret"]]),
    provider: new Map([["SHARED_KEY", "stale-different-secret-value"]])
  };
  const client = { request: async (path, options = {}) => {
    const match = path.match(/^\/services\/([^/]+)\/env-vars(?:\/([^?]+))?/);
    const [, serviceId, encodedKey] = match;
    if (!encodedKey) return [...environments[serviceId].entries()].map(([key, value]) => ({ key, value }));
    environments[serviceId].set(decodeURIComponent(encodedKey), options.body.value);
    return {};
  } };
  const result = await ensureSharedEnvSecret(client, ["web", "provider"], "SHARED_KEY");
  assert.equal(result.generated, false);
  assert.equal(environments.provider.get("SHARED_KEY"), "authoritative-existing-secret");
});

test("unified release binds every production process to the exact release SHA", async () => {
  const writes = [];
  const releaseSha = "a".repeat(40);
  const services = {
    "nexus-genesis-certified": { id: "srv-web", name: "nexus-genesis-certified", type: "web_service", ownerId: "owner", branch: "main", repo: "https://github.com/tateron004-oss/agrinexus" },
    "nexus-background-worker": { id: "srv-worker", name: "nexus-background-worker", type: "background_worker", ownerId: "owner", branch: "main", repo: "https://github.com/tateron004-oss/agrinexus" },
    "agrinexus-provider-engines": { id: "srv-provider", name: "agrinexus-provider-engines", type: "web_service", ownerId: "owner", branch: "main", repo: "https://github.com/tateron004-oss/agrinexus" }
  };
  const client = { request: async (path, options = {}) => {
    if (path.startsWith("/services?name=")) {
      const name = decodeURIComponent(path.match(/name=([^&]+)/)[1]);
      return [{ service: services[name] }];
    }
    if (path === "/postgres?name=nexus-postgres&limit=100") return [{ postgres: { id: "db", name: "nexus-postgres", status: "available" } }];
    if (path === "/postgres/db/connection-info") return { internalConnectionPoolString: "postgres://private" };
    if (path.endsWith("/env-vars?limit=100")) return [];
    if (options.method === "PUT") { writes.push({ path, value: options.body.value }); return {}; }
    if (options.method === "PATCH") return services[Object.keys(services).find(name => services[name].id === path.split("/").at(-1))];
    throw new Error(`Unexpected request ${path}`);
  } };
  const deployExactSha = async (_client, service) => ({ serviceId: service.id, serviceName: service.name, status: "live", commit: releaseSha });
  await run({ RENDER_API_KEY: "key", EXPECTED_RELEASE_SHA: releaseSha, NEXUS_BASE_URL: "https://nexus-genesis-certified.onrender.com" },
    { client, deployExactShaImpl: deployExactSha, outputDir: null, captureRuntimeDiagnostics: false,
      acceptanceFetchImpl: async () => ({ status: 503, text: async () => JSON.stringify({ releaseSha, ok: false }) }) });
  for (const serviceId of ["srv-web", "srv-worker", "srv-provider"]) {
    assert.deepEqual(writes.find(write => write.path === `/services/${serviceId}/env-vars/NEXUS_RELEASE_SHA`), {
      path: `/services/${serviceId}/env-vars/NEXUS_RELEASE_SHA`,
      value: releaseSha
    });
  }
  for (const [key, value] of Object.entries({
    AGRINEXUS_STATE_STORE: "postgres",
    AGRINEXUS_REQUIRE_LIVE_SERVICES: "true",
    PUBLIC_BASE_URL: "https://nexus-genesis-certified.onrender.com",
    MAP_TILE_PROVIDER: "openstreetmap",
    MAP_TILE_URL: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    MAP_TILE_ATTRIBUTION: "OpenStreetMap contributors"
  })) {
    assert.deepEqual(writes.find(write => write.path === `/services/srv-web/env-vars/${key}`), {
      path: `/services/srv-web/env-vars/${key}`,
      value
    });
  }
  assert.deepEqual(writes.find(write => write.path === "/services/srv-worker/env-vars/AGRINEXUS_STATE_STORE"), {
    path: "/services/srv-worker/env-vars/AGRINEXUS_STATE_STORE",
    value: "postgres"
  });
  const providerDefinitions = JSON.parse(writes.find(write => write.path === "/services/srv-web/env-vars/NEXUS_TOOL_PROVIDERS_JSON").value);
  const providerSecret = writes.find(write => write.path === "/services/srv-provider/env-vars/NEXUS_TOOL_RECEIPT_SECRET").value;
  assert.ok(providerSecret.length >= 48); assert.ok(providerDefinitions.every(item => item.receiptSecret === providerSecret));
  for (const key of ["SESSION_SECRET", "PASSWORD_PEPPER"]) {
    const write = writes.find(item => item.path === `/services/srv-worker/env-vars/${key}`);
    assert.ok(write, `worker ${key} is installed`);
    assert.ok(write.value.length >= (key === "SESSION_SECRET" ? 32 : 16));
  }
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
  await assert.rejects(deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1", { pollMs: 0, timeoutMs: 100, diagnosticsDir: null }), /failed/);
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

test("forced exact deploy ignores an already-live SHA after environment rotation", async () => {
  const calls = [];
  const client = { request: async (path, options = {}) => {
    calls.push({ path, options });
    if (options.method === "POST") return { id: "dep-fresh", status: "queued", commit: { id: "sha-1" } };
    return { id: "dep-fresh", status: "live", commit: { id: "sha-1" } };
  } };
  const result = await deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1",
    { pollMs: 0, timeoutMs: 100, forceFresh: true });
  assert.equal(result.deployId, "dep-fresh");
  assert.equal(calls.some(call => call.path.includes("deploys?limit=20")), false);
  assert.equal(calls.filter(call => call.options.method === "POST").length, 1);
});

test("acceptance propagation requires authentication and exact running release", async () => {
  const responses = [
    { status: 401, body: { code: "acceptance_authentication_required" } },
    { status: 503, body: { releaseSha: "old-sha", ok: false } },
    { status: 503, body: { releaseSha: "sha-1", ok: false } }
  ];
  const fetchImpl = async () => {
    const current = responses.shift();
    return { status: current.status, text: async () => JSON.stringify(current.body) };
  };
  assert.deepEqual(await waitForAcceptanceToken({ baseUrl: "https://nexus.example", token: "secret",
    releaseSha: "sha-1", fetchImpl, pollMs: 0, timeoutMs: 100 }),
  { status: 503, releaseSha: "sha-1", code: null });
  assert.equal(responses.length, 0);
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

test("exact deploy fails immediately when the pre-deploy command fails", async () => {
  const responses = [
    [],
    {
      id: "dep-1",
      status: "pre_deploy_failed",
      reason: "migration command exited 1",
      commit: { id: "sha-1" }
    }
  ];
  const client = {
    request: async () => responses.shift()
  };
  await assert.rejects(
    deployExactSha(client, { id: "srv-1", name: "web" }, "sha-1", { pollMs: 0, timeoutMs: 100, diagnosticsDir: null }),
    /pre_deploy_failed.*migration command exited 1/
  );
  assert.equal(responses.length, 0);
});

test("pre-deploy failure captures sanitized Render build diagnostics", async () => {
  const calls = [];
  const responses = [
    [],
    { id: "dep-1", status: "pre_deploy_failed", createdAt: "2026-08-08T06:59:00Z", commit: { id: "sha-1" } },
    { logs: [{ timestamp: "2026-08-08T07:00:00Z", level: "error", message: "DATABASE_URL=postgres://user:password@db/nexus migration failed" }] }
  ];
  const client = { request: async path => {
    calls.push(path);
    return responses.shift();
  } };
  await assert.rejects(
    deployExactSha(client, { id: "srv-1", name: "web", ownerId: "tea-1" }, "sha-1", { pollMs: 0, timeoutMs: 100, diagnosticsDir: null, diagnosticAttempts: 1 }),
    /postgres:\/\/\*\*\*@db\/nexus migration failed/
  );
  assert.match(calls.at(-1), /^\/logs\?/);
  assert.match(calls.at(-1), /startTime=2026-08-08T06%3A57%3A00.000Z/);
  assert.match(calls.at(-1), /resource=srv-1/);
  assert.doesNotMatch(calls.at(-1), /type=/);
  assert.equal(responses.length, 0);
});

test("pre-deploy diagnostics reject stale records and retain the newest migration output", async () => {
  const calls = [];
  const responses = [
    [],
    { id: "dep-1", status: "pre_deploy_failed", createdAt: "2026-08-08T07:20:00Z", commit: { id: "sha-1" } },
    { logs: [{ timestamp: "2026-08-08T05:29:00Z", message: "stale npm audit output" }] },
    { logs: [{ timestamp: "2026-08-08T07:21:00Z", message: "build finished" }] },
    { logs: [{ timestamp: "2026-08-08T07:21:00Z", message: "build finished" }, { timestamp: "2026-08-08T07:22:00Z", message: "current migration failed" }] }
  ];
  const client = { request: async path => {
    calls.push(path);
    return responses.shift();
  } };
  await assert.rejects(
    deployExactSha(client, { id: "srv-1", name: "web", ownerId: "tea-1" }, "sha-1", {
      pollMs: 0,
      timeoutMs: 100,
      diagnosticsDir: null,
      retryMs: 0,
      diagnosticAttempts: 3
    }),
    /current migration failed/
  );
  assert.equal(calls.filter(path => path.startsWith("/logs?")).length, 3);
  assert.equal(responses.length, 0);
});


test("canonical providers use registry-supported risk tiers", () => {
  const providers = canonicalToolProviders("s".repeat(48));
  const allowed = new Set(["low", "medium", "high", "regulated"]);
  assert.ok(providers.every(provider => allowed.has(provider.riskTier)));
  assert.equal(providers.find(provider => provider.toolId === "health.emergency-guidance").riskTier, "regulated");
});
