#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const OBJECTIVES = Object.freeze([
  "consolidated_brain", "agentic_task_engine", "authoritative_storage", "semantic_memory",
  "worker_system", "centralized_tools", "realtime_voice", "durable_workspaces",
  "documents_forms", "object_file_storage", "identity_access", "consent_audit",
  "offline_sync", "security_engineering", "healthcare_controls", "predictive_intelligence",
  "observability", "managed_delivery", "complete_testing", "system_cleanup", "product_operations"
]);

function required(value, label) {
  if (!value) throw new Error(label);
  return value;
}

async function getJson(url, headers = {}) {
  const response = await fetch(url, { headers: { accept: "application/json", "cache-control": "no-cache", ...headers } });
  const text = await response.text();
  let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.slice(0, 500) }; }
  return { ok: response.ok, status: response.status, body };
}

function objective(id, passed, evidence, detail) {
  return { id, passed: passed === true, evidence: Array.isArray(evidence) ? evidence : [evidence].filter(Boolean), detail };
}

function evaluate({ expectedSha, runtime, health, integrations, providers, acceptance }) {
  const r = runtime.body || {};
  const h = health.body || {};
  const i = integrations.body || {};
  const p = providers.body || {};
  const a = acceptance.body || {};
  const components = a.components || {};
  const lifecycle = a.lifecycle || {};
  const workspaces = Array.isArray(a.workspaces) ? a.workspaces : [];
  const exactSha = r.releaseSha === expectedSha && a.releaseSha === expectedSha;
  const durable = runtime.ok && r.ok === true && r.pgvector === true && r.migrationsCurrent === true;
  const providerReady = providers.ok && p.ok === true && integrations.ok && i.ok === true && Array.isArray(i.liveGaps) && i.liveGaps.length === 0;
  const allWorkspaces = workspaces.length === 16 && workspaces.every(x => x.state === "authoritative" && x.releaseSha === expectedSha && x.proofsComplete === true);
  const component = name => components[name] || {};
  const live = name => component(name).ready === true && component(name).productionEvidence === true;
  const items = [
    objective("consolidated_brain", exactSha && a.singleRuntime === true && a.legacyWritePaths === 0, ["exact release SHA", "single runtime", "zero legacy writes"]),
    objective("agentic_task_engine", live("taskEngine"), component("taskEngine").evidence),
    objective("authoritative_storage", durable && live("database"), ["PostgreSQL", "pgvector", "current migrations"]),
    objective("semantic_memory", live("semanticMemory") && component("semanticMemory").restartPersistent === true, component("semanticMemory").evidence),
    objective("worker_system", live("worker") && component("worker").recentHeartbeat === true && component("worker").releaseSha === expectedSha, component("worker").evidence),
    objective("centralized_tools", providerReady && live("tools"), component("tools").evidence),
    objective("realtime_voice", live("voice") && component("voice").physicalEvidence === true, component("voice").evidence),
    objective("durable_workspaces", allWorkspaces, [`${workspaces.length}/16 authoritative workspaces`]),
    objective("documents_forms", live("documents") && component("documents").fullLifecycle === true, component("documents").evidence),
    objective("object_file_storage", live("objectStorage") && component("objectStorage").redeployPersistent === true, component("objectStorage").evidence),
    objective("identity_access", live("identity") && component("identity").tenantIsolation === true, component("identity").evidence),
    objective("consent_audit", live("consentAudit") && component("consentAudit").immutableReceipts === true, component("consentAudit").evidence),
    objective("offline_sync", live("offlineSync") && component("offlineSync").conflictRecovery === true, component("offlineSync").evidence),
    objective("security_engineering", live("security") && component("security").criticalFindings === 0, component("security").evidence),
    objective("healthcare_controls", live("healthcare") && component("healthcare").expertValidation === true, component("healthcare").evidence),
    objective("predictive_intelligence", live("predictive") && component("predictive").validatedModels === true, component("predictive").evidence),
    objective("observability", live("observability") && component("observability").alertsReady === true && component("observability").costsReady === true && component("observability").tracesReady === true, component("observability").evidence),
    objective("managed_delivery", exactSha && live("delivery") && component("delivery").windowsRunnerRequired === false, component("delivery").evidence),
    objective("complete_testing", live("testing") && component("testing").exactSha === expectedSha, component("testing").evidence),
    objective("system_cleanup", a.legacyWritePaths === 0 && a.simulatedProductionProviders === 0 && a.inMemoryProductionFallbacks === 0, ["zero alternate production paths"]),
    objective("product_operations", health.ok && h.ok === true && h.strictLiveMode === true && providerReady && live("operations"), component("operations").evidence)
  ];
  return { expectedSha, releaseSha: r.releaseSha, checkedAt: new Date().toISOString(), passed: items.every(x => x.passed), objectives: items };
}

async function run(env = process.env) {
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL is required").replace(/\/$/, "");
  const providerBase = required(env.PROVIDER_BASE_URL, "PROVIDER_BASE_URL is required").replace(/\/$/, "");
  const expectedSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA is required");
  const headers = env.NEXUS_ACCEPTANCE_TOKEN ? { authorization: `Bearer ${env.NEXUS_ACCEPTANCE_TOKEN}` } : {};
  const [runtime, health, integrations, providers, acceptance] = await Promise.all([
    getJson(`${base}/api/nexus/runtime/status`), getJson(`${base}/api/healthz`),
    getJson(`${base}/api/integrations`), getJson(`${providerBase}/healthz`),
    getJson(`${base}/api/nexus/runtime/production-acceptance`, headers)
  ]);
  const report = evaluate({ expectedSha, runtime, health, integrations, providers, acceptance });
  report.endpoints = { runtime: runtime.status, health: health.status, integrations: integrations.status, providers: providers.status, acceptance: acceptance.status };
  const output = env.NEXUS_ACCEPTANCE_OUTPUT || path.join("output", `nexus-21-objective-pass-${env.NEXUS_PASS_NUMBER || "1"}.json`);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  if (!report.passed) {
    const failed = report.objectives.filter(x => !x.passed).map(x => x.id);
    throw new Error(`21-objective production acceptance failed: ${failed.join(", ")}. Certification remains incomplete.`);
  }
  return report;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = Object.freeze({ OBJECTIVES, evaluate, run });
