#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const path = require("node:path");

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
async function get(url, headers = {}) {
  const response = await fetch(url, { headers: { accept: "application/json", "cache-control": "no-cache", ...headers } });
  const text = await response.text(); let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.slice(0, 500) }; }
  return { url, status: response.status, ok: response.ok, body };
}
function receipt(probe) { return `${probe.url} status=${probe.status}`; }
function component(component, releaseSha, probes, facts = {}) {
  const passed = probes.every(probe => probe.ok || (component === "worker" && probe.status === 503)) &&
    probes.every(probe => !probe.body?.releaseSha || probe.body.releaseSha === releaseSha);
  return { component, releaseSha, production: true, simulated: false, passed, observedAt: new Date().toISOString(),
    receipts: probes.map(receipt), facts };
}
async function run(env = process.env) {
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const providerBase = required(env.PROVIDER_BASE_URL, "PROVIDER_BASE_URL").replace(/\/$/, "");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const headers = { authorization: `Bearer ${token}` };
  const [runtime, health, integrations, provider, acceptance] = await Promise.all([
    get(`${base}/api/nexus/runtime/status`), get(`${base}/api/healthz`), get(`${base}/api/integrations`),
    get(`${providerBase}/healthz`), get(`${base}/api/nexus/runtime/production-acceptance`, headers)
  ]);
  if (runtime.body?.releaseSha !== releaseSha || acceptance.body?.releaseSha !== releaseSha) throw new Error("Production probes did not reach the exact release SHA.");
  const workerReady = acceptance.body?.components?.worker?.recentHeartbeat === true && acceptance.body.components.worker.releaseSha === releaseSha;
  const providerReady = provider.ok && integrations.ok && integrations.body?.ok === true && Array.isArray(integrations.body.liveGaps) && integrations.body.liveGaps.length === 0;
  const databaseReady = health.ok && health.body?.ok === true && health.body?.releaseSha === releaseSha &&
    health.body?.checks?.database === "connected" && health.body?.pgvector === true && health.body?.migrationsCurrent === true;
  const componentProbes = [
    component("database", releaseSha, [health], {
      connected: health.body?.checks?.database === "connected",
      pgvector: health.body?.pgvector === true,
      migrationsCurrent: health.body?.migrationsCurrent === true
    }),
    component("worker", releaseSha, [acceptance], { recentHeartbeat: workerReady, releaseSha }),
    component("tools", releaseSha, [integrations, provider], { providerReady }),
    component("delivery", releaseSha, [runtime, health], { windowsRunnerRequired: false }),
    component("testing", releaseSha, [runtime, health], { exactSha: releaseSha }),
    component("operations", releaseSha, [runtime, health, integrations, provider], { strictLive: health.body?.strictLiveMode === true })
  ];
  componentProbes[0].passed = databaseReady;
  componentProbes[1].passed = workerReady;
  componentProbes[2].passed = providerReady;
  componentProbes[5].passed = componentProbes[5].passed && health.body?.strictLiveMode === true;
  const output = env.NEXUS_PROBE_FILE || path.join("output", "nexus-production-probes.json");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify({ releaseSha, source: "unified-release-live-probe", componentProbes, workspaceProbes: [] }, null, 2));
  const failed = componentProbes.filter(item => !item.passed).map(item => item.component);
  console.log(JSON.stringify({ releaseSha, produced: componentProbes.length, passed: componentProbes.length - failed.length, failed, output }, null, 2));
  if (failed.length) throw new Error(`Initial production component probes failed: ${failed.join(", ")}`);
  return componentProbes;
}
if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = Object.freeze({ component, run });
