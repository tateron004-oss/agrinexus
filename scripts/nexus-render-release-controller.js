#!/usr/bin/env node
"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");

const API = "https://api.render.com/v1";
const CANONICAL_NEXUS_BASE_URL = "https://nexus-genesis-certified.onrender.com";
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

function createClient({ apiKey, fetchImpl = fetch }) {
  async function request(path, { method = "GET", body } = {}) {
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
    if (!response.ok) throw new Error(`Render ${method} ${path} returned ${response.status}: ${JSON.stringify(value)}`);
    return value;
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

async function deployExactSha(client, service, releaseSha, { pollMs = 15000, timeoutMs = 45 * 60 * 1000 } = {}) {
  const reusable = await resolveReusableDeploy(client, service, releaseSha);
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
      throw new Error(`${service.name} deploy ${id} failed: ${deployFailureDetails(current)}`);
    }
    await sleep(pollMs);
    current = await client.request(`/services/${service.id}/deploys/${id}`);
  }
  throw new Error(`${service.name} deploy ${id} did not finish within ${timeoutMs}ms`);
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
  const web = await resolveUniqueService(client, "nexus-genesis-certified");
  validateService(web, "web_service");
  const provider = await resolveUniqueService(client, "agrinexus-provider-engines");
  validateService(provider, "web_service");
  const databaseUrl = await resolveOrProvisionDatabase(client, web, options);
  await installEnvValue(client, web.id, "DATABASE_URL", databaseUrl);
  const worker = await resolveOrProvisionWorker(client, web, databaseUrl);
  validateService(worker, "background_worker");
  await installEnvValue(client, worker.id, "DATABASE_URL", databaseUrl);
  const services = [];
  for (const service of [web, worker, provider]) {
    const reconciled = await reconcileServiceConfiguration(client, service);
    validateService(reconciled, service === worker ? "background_worker" : "web_service");
    services.push(reconciled);
  }
  await installAcceptanceToken(client, services[0].id, token);
  exportWorkflowSecret(token, env);
  const deployments = [];
  deployments.push(...await Promise.all(services.map(service => deployExactSha(client, service, releaseSha, options))));
  const evidence = { releaseSha, deployedAt: new Date().toISOString(), services: deployments };
  fs.mkdirSync("output", { recursive: true });
  fs.writeFileSync("output/nexus-render-release.json", JSON.stringify(evidence, null, 2));
  console.log(JSON.stringify(evidence, null, 2));
  return evidence;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = { CANONICAL_NEXUS_BASE_URL, createClient, resolveUniqueService, validateService, reconcileServiceConfiguration, resolveOrProvisionDatabase, installEnvValue, provisionBackgroundWorker, resolveOrProvisionWorker, resolveReusableDeploy, deployExactSha, run };
