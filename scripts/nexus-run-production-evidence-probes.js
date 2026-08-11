#!/usr/bin/env node
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const { classifyProviders } = require("./lib/nexus-launch-provider-profile.js");

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
async function requestWithRetry(url, init, attempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try { return await fetch(url, init); }
    catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise(resolve => setTimeout(resolve, attempt * 1000));
    }
  }
  const failure = new Error(`Production probe transport failed after ${attempts} attempts.`);
  failure.code = lastError?.code || lastError?.cause?.code || lastError?.name || "probe_transport_failed";
  throw failure;
}
async function get(url, headers = {}) {
  const response = await requestWithRetry(url, { headers: { accept: "application/json", "cache-control": "no-cache", ...headers } });
  const text = await response.text(); let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.slice(0, 500) }; }
  return { url, status: response.status, ok: response.ok, body };
}
async function post(url, headers, body) {
  const response = await requestWithRetry(url, { method: "POST", headers: { accept: "application/json", "content-type": "application/json", ...headers }, body: JSON.stringify(body) });
  const text = await response.text(); let parsed;
  try { parsed = JSON.parse(text); } catch { parsed = { raw: text.slice(0, 500) }; }
  return { url, status: response.status, ok: response.ok, body: parsed };
}
function receipt(probe) {
  const stage = probe.body?.stage ? ` stage=${String(probe.body.stage).replace(/\s+/g, "_")}` : "";
  const error = probe.body?.error ? ` error=${JSON.stringify(String(probe.body.error).slice(0, 300))}` : "";
  return `${probe.url} status=${probe.status}${probe.body?.code ? ` code=${probe.body.code}` : ""}${stage}${error}`;
}
function exactReleaseReady(runtime, acceptance, releaseSha) {
  return runtime?.ok === true && (acceptance?.ok === true || acceptance?.status === 503) &&
    runtime.body?.releaseSha === releaseSha && acceptance.body?.releaseSha === releaseSha;
}
async function waitForExactRelease(base, headers, releaseSha, attempts = 8) {
  let runtime; let acceptance;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    [runtime, acceptance] = await Promise.all([
      get(`${base}/api/nexus/runtime/status`),
      get(`${base}/api/nexus/runtime/production-acceptance`, headers)
    ]);
    if (exactReleaseReady(runtime, acceptance, releaseSha)) return { runtime, acceptance };
    console.log(JSON.stringify({ exactReleaseWait: { attempt, runtimeStatus: runtime.status,
      runtimeReleaseSha: runtime.body?.releaseSha || null, acceptanceStatus: acceptance.status,
      acceptanceReleaseSha: acceptance.body?.releaseSha || null, expectedReleaseSha: releaseSha } }));
    if (attempt < attempts) await new Promise(resolve => setTimeout(resolve, 10000));
  }
  const error = new Error("Production probes did not reach the exact release SHA within the convergence window.");
  error.code = "exact_release_convergence_timeout";
  throw error;
}
function component(component, releaseSha, probes, facts = {}) {
  const passed = probes.every(probe => probe.ok || (component === "worker" && probe.status === 503)) &&
    probes.every(probe => !probe.body?.releaseSha || probe.body.releaseSha === releaseSha);
  return { component, releaseSha, production: true, simulated: false, passed, observedAt: new Date().toISOString(),
    receipts: probes.map(receipt), facts };
}
function objectStorageComponent(releaseSha, probe) {
  if (!probe?.ok || probe.body?.releaseSha !== releaseSha || probe.body?.redeployPersistent !== true ||
      probe.body?.currentWriteVerified !== true || probe.body?.priorReleaseObserved !== true) return null;
  return component("objectStorage", releaseSha, [probe], {
    redeployPersistent: true, currentWriteVerified: true, priorReleaseObserved: true
  });
}
function securityComponent(releaseSha, auditPath) {
  if (!auditPath || !fs.existsSync(auditPath)) return null;
  const audit = JSON.parse(fs.readFileSync(auditPath, "utf8"));
  const counts = audit?.metadata?.vulnerabilities;
  if (!counts || !Number.isInteger(counts.critical) || !Number.isInteger(counts.total)) return null;
  const probe = { url: `github-actions://exact-release/${releaseSha}/npm-audit`, status: 200, ok: true, body: { releaseSha } };
  const result = component("security", releaseSha, [probe], {
    criticalFindings: counts.critical,
    highFindings: counts.high,
    totalFindings: counts.total,
    auditedDependencies: audit?.metadata?.dependencies?.total
  });
  result.passed = counts.critical === 0 && counts.high === 0 && counts.total === 0;
  return result;
}
async function run(env = process.env) {
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const providerBase = required(env.PROVIDER_BASE_URL, "PROVIDER_BASE_URL").replace(/\/$/, "");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const headers = { authorization: `Bearer ${token}` };
  const { runtime, acceptance } = await waitForExactRelease(base, headers, releaseSha);
  const [health, integrations, provider, taskEngine, semanticMemory, consentAudit, offlineSync, identity, observability, objectStorage] = await Promise.all([
    get(`${base}/api/healthz`), get(`${base}/api/integrations`), get(`${providerBase}/healthz`),
    post(`${base}/api/nexus/runtime/production-acceptance/probes/task-engine`, headers, { releaseSha }),
    post(`${base}/api/nexus/runtime/production-acceptance/probes/semantic-memory`, headers, { releaseSha }),
    post(`${base}/api/nexus/runtime/production-acceptance/probes/consent-audit`, headers, { releaseSha }),
    post(`${base}/api/nexus/runtime/production-acceptance/probes/offline-sync`, headers, { releaseSha }),
    post(`${base}/api/nexus/runtime/production-acceptance/probes/identity`, headers, { releaseSha }),
    post(`${base}/api/nexus/runtime/production-acceptance/probes/observability`, headers, { releaseSha }),
    post(`${base}/api/nexus/runtime/production-acceptance/probes/object-storage`, headers, { releaseSha })
  ]);
  const workerReady = acceptance.body?.components?.worker?.recentHeartbeat === true && acceptance.body.components.worker.releaseSha === releaseSha;
  const providerProfile = classifyProviders(integrations.body);
  const providerReady = provider.ok && providerProfile.ready;
  const databaseReady = runtime.ok && runtime.body?.ok === true && runtime.body?.releaseSha === releaseSha &&
    runtime.body?.pgvector === true && runtime.body?.migrationsCurrent === true;
  const componentProbes = [
    component("taskEngine", releaseSha, [taskEngine], {
      durableTask: taskEngine.body?.durable === true,
      lifecycleState: taskEngine.body?.state,
      stepCount: taskEngine.body?.steps,
      failureStage: taskEngine.body?.stage || null,
      failureCode: taskEngine.body?.code || null,
      failureMessage: taskEngine.body?.error || null
    }),
    component("semanticMemory", releaseSha, [semanticMemory], {
      restartPersistent: semanticMemory.body?.durable === true && semanticMemory.body?.repositoryReconstructed === true,
      cleanupVerified: semanticMemory.body?.cleanedUp === true
    }),
    component("consentAudit", releaseSha, [consentAudit], {
      immutableReceipts: consentAudit.body?.immutableReceipts === true,
      auditEventCount: consentAudit.body?.auditEventCount,
      receiptPreserved: consentAudit.body?.receiptPreserved === true
    }),
    component("offlineSync", releaseSha, [offlineSync], {
      conflictRecovery: offlineSync.body?.conflictRecovery === true,
      durableConflict: offlineSync.body?.durableConflict === true,
      resolution: offlineSync.body?.resolution,
      cleanupVerified: offlineSync.body?.cleanedUp === true
    }),
    component("identity", releaseSha, [identity], {
      tenantIsolation: identity.body?.tenantIsolation === true,
      sameTenantAuthorized: identity.body?.sameTenantAuthorized === true,
      crossTenantDenied: identity.body?.crossTenantDenied === true
    }),
    component("observability", releaseSha, [observability], {
      alertsReady: observability.body?.alertsReady === true,
      costsReady: observability.body?.costsReady === true,
      tracesReady: observability.body?.tracesReady === true,
      alertCount: observability.body?.alertCount
    }),
    component("database", releaseSha, [runtime], {
      connected: runtime.body?.ok === true,
      pgvector: runtime.body?.pgvector === true,
      migrationsCurrent: runtime.body?.migrationsCurrent === true
    }),
    component("worker", releaseSha, [acceptance], { recentHeartbeat: workerReady, releaseSha }),
    component("tools", releaseSha, [provider], {
      providerReady, launchProfile: providerProfile.profile,
      requiredReadyCount: providerProfile.requiredReadyCount, requiredCount: providerProfile.requiredCount,
      requiredGaps: providerProfile.requiredGaps.map(item => item.id),
      optionalGaps: providerProfile.optionalGaps.map(item => item.id),
      intentionallyUnavailable: providerProfile.intentionallyUnavailable.map(item => item.id)
    }),
    component("delivery", releaseSha, [runtime, health], { windowsRunnerRequired: false }),
    component("testing", releaseSha, [runtime, health], { exactSha: releaseSha }),
    component("operations", releaseSha, [runtime, health, integrations, provider], { strictLive: health.body?.strictLiveMode === true })
  ];
  const objectStorageEvidence = objectStorageComponent(releaseSha, objectStorage);
  const objectStorageDiagnostic = {
    status: objectStorage.status,
    ok: objectStorage.ok,
    code: objectStorage.body?.code || null,
    releaseSha: objectStorage.body?.releaseSha || null,
    currentWriteVerified: objectStorage.body?.currentWriteVerified === true,
    redeployPersistent: objectStorage.body?.redeployPersistent === true,
    priorReleaseObserved: objectStorage.body?.priorReleaseObserved === true,
    priorReleaseDifferent: objectStorage.body?.priorReleaseDifferent === true
  };
  console.log(JSON.stringify({ objectStorageProbe: objectStorageDiagnostic }, null, 2));
  if (objectStorageEvidence) componentProbes.push(objectStorageEvidence);
  else componentProbes.push(component("objectStorage", releaseSha, [objectStorage], objectStorageDiagnostic));
  const securityEvidence = securityComponent(releaseSha, env.NEXUS_SECURITY_AUDIT_FILE);
  if (securityEvidence) componentProbes.push(securityEvidence);
  componentProbes[0].passed = taskEngine.ok && taskEngine.body?.ok === true && taskEngine.body?.releaseSha === releaseSha && taskEngine.body?.durable === true && taskEngine.body?.state === "cancelled" && taskEngine.body?.steps === 1;
  componentProbes[1].passed = semanticMemory.ok && semanticMemory.body?.ok === true && semanticMemory.body?.releaseSha === releaseSha && semanticMemory.body?.durable === true && semanticMemory.body?.repositoryReconstructed === true && semanticMemory.body?.cleanedUp === true;
  componentProbes[2].passed = consentAudit.ok && consentAudit.body?.ok === true && consentAudit.body?.releaseSha === releaseSha && consentAudit.body?.immutableReceipts === true && consentAudit.body?.auditEventCount === 2 && consentAudit.body?.receiptPreserved === true;
  componentProbes[3].passed = offlineSync.ok && offlineSync.body?.ok === true && offlineSync.body?.releaseSha === releaseSha && offlineSync.body?.conflictRecovery === true && offlineSync.body?.durableConflict === true && offlineSync.body?.resolution === "accept-server" && offlineSync.body?.cleanedUp === true;
  componentProbes[4].passed = identity.ok && identity.body?.ok === true && identity.body?.releaseSha === releaseSha && identity.body?.tenantIsolation === true && identity.body?.sameTenantAuthorized === true && identity.body?.crossTenantDenied === true;
  componentProbes[5].passed = observability.ok && observability.body?.ok === true && observability.body?.releaseSha === releaseSha && observability.body?.alertsReady === true && observability.body?.costsReady === true && observability.body?.tracesReady === true;
  componentProbes[6].passed = databaseReady;
  componentProbes[7].passed = workerReady;
  componentProbes[8].passed = providerReady;
  componentProbes[11].passed = componentProbes[11].passed && health.body?.strictLiveMode === true;
  const output = env.NEXUS_PROBE_FILE || path.join("output", "nexus-production-probes.json");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify({ releaseSha, source: "unified-release-live-probe", componentProbes, workspaceProbes: [] }, null, 2));
  const failed = componentProbes.filter(item => !item.passed).map(item => item.component);
  console.log(JSON.stringify({ releaseSha, produced: componentProbes.length, passed: componentProbes.length - failed.length, failed,
    failedDetails: componentProbes.filter(item => !item.passed).map(item => ({ component: item.component, receipts: item.receipts, facts: item.facts })), output }, null, 2));
  if (failed.length) throw new Error(`Initial production component probes failed: ${failed.join(", ")}`);
  return componentProbes;
}
if (require.main === module) run().catch(error => { console.error(JSON.stringify({ error: error.message, code: error.code || error.name || "probe_failed" })); process.exit(1); });
module.exports = Object.freeze({ component, exactReleaseReady, objectStorageComponent, securityComponent, requestWithRetry, run, post, waitForExactRelease });
