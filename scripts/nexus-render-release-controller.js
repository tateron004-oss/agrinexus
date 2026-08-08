#!/usr/bin/env node
"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");

const API = "https://api.render.com/v1";
const TERMINAL_SUCCESS = new Set(["live", "succeeded"]);
const TERMINAL_FAILURE = new Set(["build_failed", "update_failed", "canceled", "cancelled", "deactivated"]);

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

function validateService(service, expectedType) {
  const type = service.type || service.serviceDetails?.type;
  if (type && type !== expectedType) throw new Error(`${service.name} has type ${type}; expected ${expectedType}`);
  if (service.branch && service.branch !== "main") throw new Error(`${service.name} is connected to branch ${service.branch}; expected main`);
  const repo = service.repo || service.repoUrl || "";
  if (repo && !/tateron004-oss\/agrinexus(?:\.git)?$/i.test(repo)) throw new Error(`${service.name} is connected to unexpected repository ${repo}`);
}

async function installAcceptanceToken(client, serviceId, token) {
  await client.request(`/services/${serviceId}/env-vars/NEXUS_ACCEPTANCE_TOKEN`, { method: "PUT", body: { value: token } });
}

function deployId(value) { return value?.id || value?.deploy?.id; }
function deployStatus(value) { return String(value?.status || value?.deploy?.status || "").toLowerCase(); }
function deployCommit(value) { return value?.commit?.id || value?.deploy?.commit?.id || value?.commitId || value?.deploy?.commitId; }

async function deployExactSha(client, service, releaseSha, { pollMs = 15000, timeoutMs = 30 * 60 * 1000 } = {}) {
  const created = await client.request(`/services/${service.id}/deploys`, {
    method: "POST", body: { commitId: releaseSha, clearCache: "do_not_clear" }
  });
  const id = required(deployId(created), `deploy ID for ${service.name}`);
  const deadline = Date.now() + timeoutMs;
  let current = created;
  while (Date.now() < deadline) {
    const status = deployStatus(current);
    if (TERMINAL_SUCCESS.has(status)) {
      const commit = deployCommit(current);
      if (commit && commit !== releaseSha) throw new Error(`${service.name} deployed ${commit}; expected ${releaseSha}`);
      return { serviceId: service.id, serviceName: service.name, deployId: id, status, commit: commit || releaseSha };
    }
    if (TERMINAL_FAILURE.has(status)) throw new Error(`${service.name} deploy ${id} failed with status ${status}`);
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
  const client = options.client || createClient({ apiKey, fetchImpl: options.fetchImpl });
  const token = crypto.randomBytes(48).toString("base64url");
  const definitions = [
    ["nexus-genesis-certified", "web_service"],
    ["nexus-background-worker", "background_worker"],
    ["agrinexus-provider-engines", "web_service"]
  ];
  const services = [];
  for (const [name, type] of definitions) {
    const service = await resolveUniqueService(client, name);
    validateService(service, type);
    services.push(service);
  }
  const web = services.find(service => service.name === "nexus-genesis-certified");
  await installAcceptanceToken(client, web.id, token);
  exportWorkflowSecret(token, env);
  const deployments = [];
  for (const service of services) deployments.push(await deployExactSha(client, service, releaseSha, options));
  const evidence = { releaseSha, deployedAt: new Date().toISOString(), services: deployments };
  fs.mkdirSync("output", { recursive: true });
  fs.writeFileSync("output/nexus-render-release.json", JSON.stringify(evidence, null, 2));
  console.log(JSON.stringify(evidence, null, 2));
  return evidence;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = { createClient, resolveUniqueService, validateService, deployExactSha, run };
