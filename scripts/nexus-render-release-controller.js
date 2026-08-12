#!/usr/bin/env node
"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");

const API = "https://api.render.com/v1";
const CANONICAL_NEXUS_BASE_URL = "https://nexus-genesis-certified.onrender.com";
const CANONICAL_PROVIDER_BASE_URL = "https://agrinexus-provider-engines.onrender.com";
const REQUIRED_WEB_ENV = Object.freeze({
  AGRINEXUS_STATE_STORE: "postgres",
  AGRINEXUS_REQUIRE_LIVE_SERVICES: "true",
  PUBLIC_BASE_URL: CANONICAL_NEXUS_BASE_URL,
  MAP_TILE_PROVIDER: "openstreetmap",
  MAP_TILE_URL: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  MAP_TILE_ATTRIBUTION: "OpenStreetMap contributors"
});
const HOSTED_PROVIDER_ENV = Object.freeze({
  AI_PROVIDER: "webhook",
  AI_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/ai/responses`,
  TRANSLATION_PROVIDER: "webhook",
  TRANSLATION_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/translate`,
  AUTH_PROVIDER: "webhook",
  PASSWORD_RESET_PROVIDER: "webhook",
  AUTH_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/auth/users`,
  PASSWORD_RESET_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/auth/password-reset`,
  EMAIL_PROVIDER: "webhook",
  EMAIL_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/communications/email`,
  SMS_PROVIDER: "webhook",
  SMS_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/communications/sms`,
  WHATSAPP_PROVIDER: "webhook",
  WHATSAPP_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/communications/whatsapp`,
  BILLING_PROVIDER: "webhook",
  BILLING_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/billing/subscriptions`,
  LEARNING_COURSE_PROVIDER: "webhook",
  LEARNING_CERTIFICATE_PROVIDER: "webhook",
  LEARNING_COURSE_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/learning/courses`,
  LEARNING_CERTIFICATE_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/learning/certificates`,
  WORKFORCE_JOB_PROVIDER: "webhook",
  WORKFORCE_CALENDAR_PROVIDER: "webhook",
  WORKFORCE_NOTIFICATION_PROVIDER: "webhook",
  WORKFORCE_HRIS_PROVIDER: "webhook",
  WORKFORCE_SHIFT_PROVIDER: "webhook",
  WORKFORCE_JOB_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/workforce/jobs`,
  WORKFORCE_CALENDAR_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/workforce/calendar`,
  WORKFORCE_NOTIFICATION_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/workforce/notifications`,
  WORKFORCE_HRIS_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/workforce/hris`,
  WORKFORCE_SHIFT_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/workforce/shifts`,
  HEALTH_TELEHEALTH_PROVIDER: "webhook",
  HEALTH_NOTIFICATION_PROVIDER: "webhook",
  HEALTH_EHR_PROVIDER: "webhook",
  HEALTH_TELEHEALTH_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/health/telehealth`,
  HEALTH_NOTIFICATION_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/health/notifications`,
  HEALTH_EHR_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/health/ehr`,
  TRADE_PAYMENT_PROVIDER: "webhook",
  TRADE_LOGISTICS_PROVIDER: "webhook",
  TRADE_MARKET_PROVIDER: "webhook",
  TRADE_PAYMENT_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/trade/payments`,
  TRADE_LOGISTICS_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/trade/logistics`,
  TRADE_MARKET_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/trade/market`,
  LOGISTICS_TRACKING_PROVIDER: "webhook",
  LOGISTICS_TRACKING_URL: `${CANONICAL_PROVIDER_BASE_URL}/trade/logistics`,
  DRONE_PROVIDER: "webhook",
  DRONE_WEBHOOK_URL: `${CANONICAL_PROVIDER_BASE_URL}/field/drones`
});
const SHARED_PROVIDER_SECRET_KEYS = Object.freeze([
  "AI_PROVIDER_API_KEY",
  "TRANSLATION_PROVIDER_API_KEY",
  "AUTH_PROVIDER_API_KEY",
  "COMMUNICATION_PROVIDER_API_KEY",
  "BILLING_PROVIDER_API_KEY",
  "LEARNING_PROVIDER_API_KEY",
  "WORKFORCE_PROVIDER_API_KEY",
  "HEALTH_PROVIDER_API_KEY",
  "TRADE_PROVIDER_API_KEY",
  "DRONE_PROVIDER_API_KEY",
  "VOICE_PROVIDER_API_KEY"
]);
const TERMINAL_SUCCESS = new Set(["live", "succeeded"]);
const TERMINAL_FAILURE = new Set([
  "build_failed",
  "update_failed",
  "pre_deploy_failed",
  "canceled",
  "cancelled",
  "deactivated"
]);

function required(value, name) {
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function createClient({ apiKey, fetchImpl = fetch, maxAttempts = 4, retryMs = 1000 }) {
  async function request(path, { method = "GET", body } = {}) {
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      try {
        const response = await fetchImpl(`${API}${path}`, {
          method,
          headers: {
            accept: "application/json",
            authorization: `Bearer ${apiKey}`,
            ...(body === undefined ? {} : { "content-type": "application/json" })
          },
          ...(body === undefined ? {} : { body: JSON.stringify(body) })
        });
        const text = await response.text();
        let value;
        try { value = text ? JSON.parse(text) : null; } catch { value = { raw: text.slice(0, 500) }; }
        if (response.ok) return value;
        const retryable = response.status === 429 || response.status >= 500;
        if (!retryable || attempt === maxAttempts) throw new Error(`Render ${method} ${path} returned ${response.status}: ${JSON.stringify(value)}`);
      } catch (error) {
        if (attempt === maxAttempts || /^Render .* returned (?!429|5\d\d)/.test(error.message)) throw error;
      }
      await sleep(retryMs * attempt);
    }
  }
  return { request };
}

function unwrapService(item) { return item?.service || item; }

async function resolveUniqueService(client, name) {
  const result = await client.request(`/services?name=${encodeURIComponent(name)}&limit=100`);
  const services = (Array.isArray(result) ? result : result?.services || []).map(unwrapService).filter(service => service?.name === name);
  if (services.length !== 1) throw new Error(`Expected exactly one Render service named ${name}; found ${services.length}`);
  return services[0];
}

function unwrapPostgres(item) { return item?.postgres || item; }

async function resolveOrProvisionDatabase(client, web, { pollMs = 15000, timeoutMs = 20 * 60 * 1000 } = {}) {
  const result = await client.request("/postgres?name=nexus-postgres&limit=100");
  const databases = (Array.isArray(result) ? result : result?.postgres || [])
    .map(unwrapPostgres)
    .filter(database => database?.name === "nexus-postgres");
  if (databases.length > 1) throw new Error(`Expected exactly one Render database named nexus-postgres; found ${databases.length}`);
  let database = databases[0];
  if (!database) {
    const ownerId = required(web.ownerId || web.owner?.id, "Render workspace ID");
    database = unwrapPostgres(await client.request("/postgres", {
      method: "POST",
      body: {
        name: "nexus-postgres",
        ownerId,
        plan: "basic_1gb",
        region: "oregon",
        version: "17",
        databaseName: "nexus",
        databaseUser: "nexus",
        diskSizeGB: 15,
        enableDiskAutoscaling: true,
        connectionPool: "pgbouncer",
        ipAllowList: []
      }
    }));
  }
  const id = required(database?.id, "nexus-postgres ID");
  const deadline = Date.now() + timeoutMs;
  while (String(database?.status || "").toLowerCase() !== "available") {
    const status = String(database?.status || "").toLowerCase();
    if (["unavailable", "recovery_failed", "suspended"].includes(status)) throw new Error(`nexus-postgres entered terminal status ${status}`);
    if (Date.now() >= deadline) throw new Error(`nexus-postgres did not become available within ${timeoutMs}ms`);
    await sleep(pollMs);
    database = unwrapPostgres(await client.request(`/postgres/${id}`));
  }
  const connection = await client.request(`/postgres/${id}/connection-info`);
  return required(connection?.internalConnectionPoolString || connection?.internalConnectionString, "nexus-postgres internal connection");
}

async function installEnvValue(client, serviceId, key, value) {
  await client.request(`/services/${serviceId}/env-vars/${encodeURIComponent(key)}`, { method: "PUT", body: { value } });
}

function unwrapEnvVar(item) { return item?.envVar || item; }

async function readServiceEnv(client, serviceId) {
  const result = await client.request(`/services/${serviceId}/env-vars?limit=100`);
  return new Map((Array.isArray(result) ? result : result?.envVars || [])
    .map(unwrapEnvVar)
    .filter(item => item?.key)
    .map(item => [item.key, String(item.value || "")]));
}

async function ensureSharedEnvSecret(client, serviceIds, key, minimumLength = 24, bytes = 32) {
  const environments = await Promise.all(serviceIds.map(serviceId => readServiceEnv(client, serviceId)));
  const existing = environments.map(environment => environment.get(key) || "").find(value => value.length >= minimumLength);
  const value = existing || crypto.randomBytes(bytes).toString("base64url");
  await Promise.all(serviceIds.map((serviceId, index) => environments[index].get(key) === value
    ? Promise.resolve()
    : installEnvValue(client, serviceId, key, value)));
  return { key, generated: !existing, serviceCount: serviceIds.length };
}

async function installHostedProviderContract(client, webServiceId, providerServiceId) {
  await Promise.all(Object.entries(HOSTED_PROVIDER_ENV)
    .map(([key, value]) => installEnvValue(client, webServiceId, key, value)));
  const secrets = [];
  for (const key of SHARED_PROVIDER_SECRET_KEYS) {
    secrets.push(await ensureSharedEnvSecret(client, [webServiceId, providerServiceId], key));
  }
  return { environmentKeys: Object.keys(HOSTED_PROVIDER_ENV), secrets };
}

async function ensureGeneratedEnvSecret(client, serviceId, key, minimumLength, bytes = 48) {
  const result = await client.request(`/services/${serviceId}/env-vars?limit=100`);
  const envVars = (Array.isArray(result) ? result : result?.envVars || []).map(unwrapEnvVar);
  const current = envVars.find(item => item?.key === key)?.value || "";
  if (current.length >= minimumLength) return { key, installed: false };
  await installEnvValue(client, serviceId, key, crypto.randomBytes(bytes).toString("base64url"));
  return { key, installed: true };
}

async function provisionBackgroundWorker(client, web, databaseUrl) {
  validateService(web, "web_service");
  const ownerId = required(web.ownerId || web.owner?.id, "Render workspace ID");
  const repo = required(web.repo || web.repoUrl, "nexus-genesis-certified repository");
  required(databaseUrl, "nexus-postgres internal connection");
  const created = await client.request("/services", {
    method: "POST",
    body: {
      type: "background_worker",
      name: "nexus-background-worker",
      ownerId,
      repo,
      branch: "main",
      autoDeploy: "no",
      envVars: [
        { key: "NODE_ENV", value: "production" },
        { key: "DATABASE_URL", value: databaseUrl },
        { key: "DATABASE_SSL", value: "false" },
        { key: "DATABASE_POOL_MAX", value: "10" },
        { key: "DATABASE_STATEMENT_TIMEOUT_MS", value: "60000" },
        { key: "SESSION_SECRET", generateValue: true },
        { key: "PASSWORD_PEPPER", generateValue: true },
        { key: "NEXUS_WORKER_POLL_MS", value: "2000" }
      ],
      serviceDetails: {
        runtime: "node",
        plan: "starter",
        region: "oregon",
        numInstances: 1,
        maxShutdownDelaySeconds: 60,
        envSpecificDetails: {
          buildCommand: "npm install",
          startCommand: "node nexus/workers/process.js"
        }
      }
    }
  });
  return unwrapService(created);
}

async function resolveOrProvisionWorker(client, web, databaseUrl) {
  const result = await client.request("/services?name=nexus-background-worker&limit=100");
  const workers = (Array.isArray(result) ? result : result?.services || [])
    .map(unwrapService)
    .filter(service => service?.name === "nexus-background-worker");
  if (workers.length > 1) throw new Error(`Expected exactly one Render service named nexus-background-worker; found ${workers.length}`);
  if (workers.length === 1) return workers[0];
  await provisionBackgroundWorker(client, web, databaseUrl);
  return resolveUniqueService(client, "nexus-background-worker");
}

function validateService(service, expectedType) {
  const type = service.type || service.serviceDetails?.type;
  if (type && type !== expectedType) throw new Error(`${service.name} has type ${type}; expected ${expectedType}`);
  if (service.branch && service.branch !== "main") throw new Error(`${service.name} is connected to branch ${service.branch}; expected main`);
  const repo = service.repo || service.repoUrl || "";
  if (repo && !/tateron004-oss\/agrinexus(?:\.git)?$/i.test(repo)) throw new Error(`${service.name} is connected to unexpected repository ${repo}`);
}

async function reconcileServiceConfiguration(client, service) {
  const configurations = {
    "nexus-genesis-certified": {
      rootDir: "",
      autoDeploy: "no",
      serviceDetails: {
        runtime: "node",
        plan: "starter",
        healthCheckPath: "/api/healthz",
        preDeployCommand: "node foundation/scripts/migrate.js",
        envSpecificDetails: {
          buildCommand: "npm install && node rebuild/scripts/build-browser.js",
          startCommand: "npm start"
        }
      }
    },
    "nexus-background-worker": {
      rootDir: "",
      autoDeploy: "no",
      serviceDetails: {
        runtime: "node",
        plan: "starter",
        maxShutdownDelaySeconds: 60,
        envSpecificDetails: {
          buildCommand: "npm install",
          startCommand: "node nexus/workers/process.js"
        }
      }
    },
    "agrinexus-provider-engines": {
      rootDir: "",
      autoDeploy: "no",
      serviceDetails: {
        runtime: "node",
        healthCheckPath: "/healthz",
        envSpecificDetails: {
          buildCommand: "npm install",
          startCommand: "npm run provider-engines"
        }
      }
    }
  };
  const configuration = required(configurations[service.name], `canonical configuration for ${service.name}`);
  const updated = unwrapService(await client.request(`/services/${service.id}`, { method: "PATCH", body: configuration }));
  if (updated?.name && updated.name !== service.name) throw new Error(`Render updated unexpected service ${updated.name}`);
  return { ...service, ...updated };
}

async function installAcceptanceToken(client, serviceId, token) {
  await client.request(`/services/${serviceId}/env-vars/NEXUS_ACCEPTANCE_TOKEN`, { method: "PUT", body: { value: token } });
}

function canonicalToolProviders(secret, providerBaseUrl = CANONICAL_PROVIDER_BASE_URL) {
  const tools = [
    { toolId: "knowledge.search", domain: "knowledge", description: "Search governed production knowledge" },
    { toolId: "documents.create", domain: "documents", description: "Create a governed production document" },
    { toolId: "jobs.search", domain: "jobs", description: "Search governed production jobs" },
    { toolId: "resume.create", domain: "resume", description: "Create a governed production resume" },
    { toolId: "maps.view", domain: "maps", description: "Render a governed production map" },
    { toolId: "media.play", domain: "media", description: "Play governed production media" },
    { toolId: "health.record", domain: "health", description: "Record a user-confirmed health observation",
      riskTier: "regulated", confirmationRequired: true, consentScope: "health:record:write",
      dataClassification: "health" },
    { toolId: "health.emergency-guidance", domain: "health", description: "Display immediate emergency guidance without claiming diagnosis or dispatch",
      riskTier: "critical", dataClassification: "health" },
    { toolId: "telehealth.prepare", domain: "telehealth", description: "Save a governed telehealth intake" },
    { toolId: "clinic.find", domain: "health", description: "Find governed mobile clinic locations" },
    { toolId: "pharmacy.find", domain: "health", description: "Find governed pharmacy support" },
    { toolId: "marketplace.search", domain: "trade", description: "Search governed marketplace listings" },
    { toolId: "reminders.schedule", domain: "reminders", description: "Persist a governed reminder" },
    { toolId: "offline.sync", domain: "offline", description: "Synchronize a governed offline operation",
      confirmationRequired: true },
    { toolId: "communications.send", domain: "communications", description: "Deliver a governed communication" },
    { toolId: "drone.plan", domain: "operations", description: "Prepare a governed field operation" }
  ].map(tool => ({ ...tool,
    endpoint: `${providerBaseUrl}/nexus/tools/${tool.toolId}`, receiptSecret: secret,
    riskTier: tool.riskTier || "low", requiredPermission: "tasks:execute",
    confirmationRequired: Boolean(tool.confirmationRequired) }));
  return tools;
}

async function installCanonicalToolProviders(client, webServiceId, providerServiceId, secret) {
  await installEnvValue(client, webServiceId, "NEXUS_TOOL_PROVIDERS_JSON", JSON.stringify(canonicalToolProviders(secret)));
  await installEnvValue(client, providerServiceId, "NEXUS_TOOL_RECEIPT_SECRET", secret);
}

function deployId(value) { return value?.id || value?.deploy?.id; }
function deployStatus(value) { return String(value?.status || value?.deploy?.status || "").toLowerCase(); }
function deployCommit(value) { return value?.commit?.id || value?.deploy?.commit?.id || value?.commitId || value?.deploy?.commitId; }

function unwrapDeploy(item) { return item?.deploy || item; }

async function resolveReusableDeploy(client, service, releaseSha) {
  const result = await client.request(`/services/${service.id}/deploys?limit=20`);
  const deployments = (Array.isArray(result) ? result : result?.deploys || []).map(unwrapDeploy);
  return deployments.find(deploy => deployCommit(deploy) === releaseSha && !TERMINAL_FAILURE.has(deployStatus(deploy))) || null;
}

function deployFailureDetails(value) {
  const deploy = value?.deploy || value || {};
  const details = {
    status: deployStatus(deploy),
    failureReason: deploy.failureReason || deploy.reason || deploy.message || null
  };
  return JSON.stringify(details);
}

function sanitizeDiagnostic(value) {
  return String(value || "")
    .replace(/(postgres(?:ql)?:\/\/)[^\s@]+@/gi, "$1***@")
    .replace(/(authorization\s*[:=]\s*bearer\s+)[^\s]+/gi, "$1***")
    .replace(/((?:api[_-]?key|token|secret|password)\s*[:=]\s*)[^\s,;]+/gi, "$1***")
    .slice(0, 1000);
}

function deployStartedAt(value, now = Date.now()) {
  const deploy = value?.deploy || value || {};
  const parsed = Date.parse(deploy.createdAt || deploy.created_at || deploy.startedAt || deploy.started_at || "");
  return Number.isFinite(parsed) ? parsed : now - (10 * 60 * 1000);
}

async function fetchDeployDiagnostics(client, service, deploy, { attempts = 5, retryMs = 2000 } = {}) {
  const ownerId = service.ownerId || service.owner?.id;
  if (!ownerId) return [];
  try {
    const startMs = deployStartedAt(deploy) - (2 * 60 * 1000);
    const query = new URLSearchParams({
      ownerId,
      startTime: new Date(startMs).toISOString(),
      endTime: new Date(Date.now() + (60 * 1000)).toISOString(),
      direction: "backward",
      limit: "100"
    });
    query.append("resource", service.id);
    const collected = new Map();
    for (let attempt = 0; attempt < attempts; attempt += 1) {
      const result = await client.request(`/logs?${query}`);
      const logs = (Array.isArray(result?.logs) ? result.logs : [])
        .filter(log => {
          const timestamp = Date.parse(log.timestamp || log.time || "");
          return !Number.isFinite(timestamp) || timestamp >= startMs;
        });
      for (const log of logs) {
        const timestamp = log.timestamp || log.time || null;
        const message = sanitizeDiagnostic(log.message || log.text || log.log || JSON.stringify(log));
        collected.set(log.id || `${timestamp}:${message}`, { timestamp, level: log.level || null, message });
      }
      if (attempt < attempts - 1) await sleep(retryMs);
    }
    return [...collected.values()]
      .sort((left, right) => Date.parse(left.timestamp || 0) - Date.parse(right.timestamp || 0))
      .slice(-50);
  } catch (error) {
    return [{ timestamp: null, level: "diagnostic_error", message: sanitizeDiagnostic(error.message) }];
  }
}

async function deployExactSha(client, service, releaseSha, {
  pollMs = 15000,
  timeoutMs = 45 * 60 * 1000,
  diagnosticsDir = "output",
  diagnosticAttempts = 5,
  retryMs = 2000,
  forceFresh = false
} = {}) {
  const reusable = forceFresh ? null : await resolveReusableDeploy(client, service, releaseSha);
  const created = reusable || await client.request(`/services/${service.id}/deploys`, {
    method: "POST", body: { commitId: releaseSha, clearCache: "do_not_clear" }
  });
  const id = required(deployId(created), `deploy ID for ${service.name}`);
  const deadline = Date.now() + timeoutMs;
  let current = created;
  let previousStatus = "";
  while (Date.now() < deadline) {
    const status = deployStatus(current);
    if (status !== previousStatus) {
      console.log(`${service.name} deploy ${id}: ${status || "status unavailable"}${reusable ? " (resumed)" : ""}`);
      previousStatus = status;
    }
    if (TERMINAL_SUCCESS.has(status)) {
      const commit = deployCommit(current);
      if (commit && commit !== releaseSha) throw new Error(`${service.name} deployed ${commit}; expected ${releaseSha}`);
      return { serviceId: service.id, serviceName: service.name, deployId: id, status, commit: commit || releaseSha };
    }
    if (TERMINAL_FAILURE.has(status)) {
      const diagnostics = await fetchDeployDiagnostics(client, service, current, { attempts: diagnosticAttempts, retryMs });
      const failure = {
        serviceId: service.id,
        serviceName: service.name,
        deployId: id,
        ...JSON.parse(deployFailureDetails(current)),
        diagnostics
      };
      if (diagnosticsDir) {
        fs.mkdirSync(diagnosticsDir, { recursive: true });
        fs.writeFileSync(`${diagnosticsDir}/nexus-render-failure-${service.name}.json`, JSON.stringify(failure, null, 2));
      }
      const diagnosticTail = diagnostics.map(item => item.message).filter(Boolean).slice(-10);
      throw new Error(`${service.name} deploy ${id} failed: ${JSON.stringify({ ...failure, diagnostics: diagnosticTail })}`);
    }
    await sleep(pollMs);
    current = await client.request(`/services/${service.id}/deploys/${id}`);
  }
  throw new Error(`${service.name} deploy ${id} did not finish within ${timeoutMs}ms`);
}

async function waitForAcceptanceToken({ baseUrl, token, releaseSha, fetchImpl = fetch,
  pollMs = 15000, timeoutMs = 15 * 60 * 1000 } = {}) {
  const deadline = Date.now() + timeoutMs;
  let last = { status: 0, releaseSha: null, code: "not_attempted" };
  while (Date.now() < deadline) {
    try {
      const response = await fetchImpl(`${required(baseUrl, "acceptance base URL").replace(/\/$/, "")}/api/nexus/runtime/production-acceptance`, {
        headers: { authorization: `Bearer ${required(token, "acceptance token")}` }
      });
      const text = await response.text();
      let body = null;
      try { body = text ? JSON.parse(text) : null; } catch { body = null; }
      last = { status: response.status, releaseSha: body?.releaseSha || null, code: body?.code || null, stage: body?.stage || null };\n      if (response.status >= 500 && body?.releaseSha === releaseSha) {\n        throw Object.assign(new Error(`Production acceptance failed at ${body?.stage || "unknown-stage"}.`), { code: body?.code || "acceptance_failed", stage: body?.stage || null, failFast: true });\n      }
      if (response.status !== 401 && body?.releaseSha === releaseSha) return last;
    } catch (error) {\n      if (error.failFast) throw error;\n      last = { status: 0, releaseSha: null, code: error.code || error.name || "request_failed", stage: error.stage || null };\n    }
    await sleep(pollMs);
  }
  throw new Error(`Production acceptance token did not propagate for exact release ${releaseSha}: ${JSON.stringify(last)}`);
}

function exportWorkflowSecret(token, env = process.env) {
  if (!env.GITHUB_ENV) return;
  fs.appendFileSync(env.GITHUB_ENV, `NEXUS_ACCEPTANCE_TOKEN=${token}\n`);
  if (env.GITHUB_OUTPUT) fs.appendFileSync(env.GITHUB_OUTPUT, "deployed=true\n");
  process.stdout.write(`::add-mask::${token}\n`);
}

async function run(env = process.env, options = {}) {
  const apiKey = required(env.RENDER_API_KEY, "RENDER_API_KEY");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA || env.GITHUB_SHA, "EXPECTED_RELEASE_SHA");
  const nexusBaseUrl = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  if (nexusBaseUrl !== CANONICAL_NEXUS_BASE_URL) {
    throw new Error(`Refusing non-canonical Nexus production host: ${nexusBaseUrl}`);
  }
  const client = options.client || createClient({ apiKey, fetchImpl: options.fetchImpl });
  const token = crypto.randomBytes(48).toString("base64url");
  const toolProviderSecret = crypto.randomBytes(48).toString("base64url");
  const web = await resolveUniqueService(client, "nexus-genesis-certified");
  validateService(web, "web_service");
  const provider = await resolveUniqueService(client, "agrinexus-provider-engines");
  validateService(provider, "web_service");
  const databaseUrl = await resolveOrProvisionDatabase(client, web, options);
  await installEnvValue(client, web.id, "DATABASE_URL", databaseUrl);
  await installEnvValue(client, web.id, "NEXUS_RELEASE_SHA", releaseSha);
  for (const [key, value] of Object.entries(REQUIRED_WEB_ENV)) {
    await installEnvValue(client, web.id, key, value);
  }
  await ensureGeneratedEnvSecret(client, web.id, "SESSION_SECRET", 32, 48);
  await ensureGeneratedEnvSecret(client, web.id, "PASSWORD_PEPPER", 16, 32);
  const providerContract = await installHostedProviderContract(client, web.id, provider.id);
  const worker = await resolveOrProvisionWorker(client, web, databaseUrl);
  validateService(worker, "background_worker");
  await installEnvValue(client, worker.id, "DATABASE_URL", databaseUrl);
  await installEnvValue(client, worker.id, "AGRINEXUS_STATE_STORE", "postgres");
  await ensureGeneratedEnvSecret(client, worker.id, "SESSION_SECRET", 32, 48);
  await ensureGeneratedEnvSecret(client, worker.id, "PASSWORD_PEPPER", 16, 32);
  await installEnvValue(client, worker.id, "NEXUS_RELEASE_SHA", releaseSha);
  await installEnvValue(client, provider.id, "NEXUS_RELEASE_SHA", releaseSha);
  const services = [];
  for (const service of [web, worker, provider]) {
    const reconciled = await reconcileServiceConfiguration(client, service);
    validateService(reconciled, service === worker ? "background_worker" : "web_service");
    services.push(reconciled);
  }
  await installAcceptanceToken(client, services[0].id, token);
  await installCanonicalToolProviders(client, services[0].id, services[2].id, toolProviderSecret);
  exportWorkflowSecret(token, env);
  const deployments = [];
  const deploy = options.deployExactShaImpl || deployExactSha;
  deployments.push(...await Promise.all(services.map((service, index) => deploy(client, service, releaseSha,
    index === 0 ? { ...options, forceFresh: true } : options))));
  const acceptanceAuthentication = await waitForAcceptanceToken({
    baseUrl: nexusBaseUrl,
    token,
    releaseSha,
    fetchImpl: options.acceptanceFetchImpl || options.fetchImpl,
    pollMs: options.acceptancePollMs,
    timeoutMs: options.acceptanceTimeoutMs
  });
  const workerDeployment = deployments.find(item => item.serviceId === worker.id);
  const workerDiagnostics = options.captureRuntimeDiagnostics === false ? [] :
    await fetchDeployDiagnostics(client, worker, workerDeployment || {}, {
      attempts: options.runtimeDiagnosticAttempts || 5,
      retryMs: options.retryMs || 2000
    });
  const evidence = { releaseSha, deployedAt: new Date().toISOString(), services: deployments, providerContract, acceptanceAuthentication, workerDiagnostics };
  const outputDir = options.outputDir === undefined ? "output" : options.outputDir;
  if (outputDir) {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(`${outputDir}/nexus-render-release.json`, JSON.stringify(evidence, null, 2));
  }
  console.log(JSON.stringify(evidence, null, 2));
  return evidence;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = { CANONICAL_NEXUS_BASE_URL, CANONICAL_PROVIDER_BASE_URL, REQUIRED_WEB_ENV, HOSTED_PROVIDER_ENV, SHARED_PROVIDER_SECRET_KEYS, createClient, resolveUniqueService, validateService, reconcileServiceConfiguration, resolveOrProvisionDatabase, installEnvValue, readServiceEnv, ensureGeneratedEnvSecret, ensureSharedEnvSecret, installHostedProviderContract, canonicalToolProviders, installCanonicalToolProviders, provisionBackgroundWorker, resolveOrProvisionWorker, resolveReusableDeploy, deployExactSha, waitForAcceptanceToken, run };
