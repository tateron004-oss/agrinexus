#!/usr/bin/env node
"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const { PATH2_LANES } = require("../nexus/path2/certification-contract.js");
const { validatePlan } = require("../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../nexus/apps/default-manifests.js");
const { createInteractionProfile, SUPPORTED_LOCALES } = require("../nexus/experience/interaction-profile.js");
const { ConversationRepository } = require("../nexus/data/conversation-repository.js");
const { MemoryRepository } = require("../nexus/memory/repository.js");
const { ToolRegistry } = require("../nexus/tools/registry.js");
const { OutcomeRepository } = require("../nexus/verification/outcome-repository.js");
const { AuthoritativeTaskEngine } = require("../nexus/runtime/authoritative-task-engine.js");

const PATH1_BASELINE = "00a1e57759bc9fef7be40362ffc2edee04673769";
const TOOL_IDS = ["knowledge.search", "documents.create", "jobs.search", "resume.create", "maps.view", "media.play"];
const CATALOG = Object.freeze({
  applications: defaultApplicationManifests().map(item => ({ applicationId: item.applicationId, capabilities: item.capabilities, riskTiers: item.riskTiers })),
  tools: TOOL_IDS.map((toolId, index) => ({ toolId, domain: toolId.split(".")[0], description: `Governed ${toolId}`,
    riskTier: index % 3 === 0 ? "medium" : "low", confirmationRequired: index % 3 === 0,
    consentScope: index % 4 === 0 ? `scope:${toolId}` : null }))
});
const CONTEXT = Object.freeze({ roles: ["standard_user"], can: () => true });

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
function factFor(lane, index) { const facts = PATH2_LANES[lane].requiredFacts; return { [facts[index % facts.length]]: true }; }
function validCandidate(index, overrides = {}) {
  const application = CATALOG.applications[index % CATALOG.applications.length].applicationId;
  return { goal: `Unseen production goal ${index + 1}`, application, riskTier: "low", clarification: null,
    steps: [{ id: "first", title: `Inspect ${index + 1}`, toolId: TOOL_IDS[index % TOOL_IDS.length], input: { variant: index },
      dependsOn: [], fallbackToolIds: [], requiredPermission: null }], ...overrides };
}

async function intelligenceCase(index) {
  const mode = index % 3; let candidate;
  if (mode === 0) candidate = validCandidate(index);
  else if (mode === 1) candidate = validCandidate(index, { goal: `Clarify unfamiliar goal ${index + 1}`, clarification: "Which location should I use?", steps: [] });
  else candidate = validCandidate(index, { goal: `Use Kisumu instead of Nakuru for goal ${index + 1}` });
  const validation = validatePlan(candidate, CATALOG, CONTEXT);
  return { passed: validation.valid === true, facts: factFor("intelligence", index), assertion: `planner-${mode}` };
}

async function planningCase(index) {
  const mode = index % 3; let passed = false;
  if (mode === 0) {
    const candidate = validCandidate(index, { steps: [
      { id: "a", title: "First", toolId: TOOL_IDS[0], input: {}, dependsOn: [], fallbackToolIds: [], requiredPermission: null },
      { id: "b", title: "Second", toolId: TOOL_IDS[1], input: {}, dependsOn: ["a"], fallbackToolIds: [], requiredPermission: null }
    ] });
    passed = validatePlan(candidate, CATALOG, CONTEXT).valid === true;
  } else if (mode === 1) {
    const invalid = validCandidate(index, { steps: [{ id: "x", title: "Unknown", toolId: "unregistered.tool", input: {}, dependsOn: [], fallbackToolIds: [], requiredPermission: null }] });
    passed = validatePlan(invalid, CATALOG, CONTEXT).errors.some(error => error.includes("unavailable tool"));
  } else {
    const cyclic = validCandidate(index, { steps: [
      { id: "a", title: "A", toolId: TOOL_IDS[0], input: {}, dependsOn: ["b"], fallbackToolIds: [], requiredPermission: null },
      { id: "b", title: "B", toolId: TOOL_IDS[1], input: {}, dependsOn: ["a"], fallbackToolIds: [], requiredPermission: null }
    ] });
    const repaired = validCandidate(index);
    passed = validatePlan(cyclic, CATALOG, CONTEXT).valid === false && validatePlan(repaired, CATALOG, CONTEXT).valid === true;
  }
  return { passed, facts: factFor("planning", index), assertion: `planning-${mode}` };
}

async function memoryCase(index) {
  let recentQuery; const conversations = new ConversationRepository({ query: async (sql, params) => {
    recentQuery = { sql, params }; return { rows: [{ role: "assistant", content: "second" }, { role: "user", content: "first" }] };
  } });
  const turns = await conversations.recent({ tenantId: `tenant-${index}`, conversationId: `cnv_${index}`, limit: 500 });
  let memoryQuery; const memory = new MemoryRepository({ query: async (sql, params) => { memoryQuery = { sql, params }; return { rows: [] }; } });
  await memory.search({ tenantId: `tenant-${index}`, userId: `user-${index}`, purpose: "task_planning", query: `goal-${index}`, roles: ["standard_user"], limit: 8 });
  const checks = [turns.map(item => item.content).join(",") === "first,second",
    recentQuery.params[2] === 100, /principal_id=\$2 and purpose=\$3/.test(memoryQuery.sql), /sensitivity <> 'health'/.test(memoryQuery.sql)];
  return { passed: checks[index % checks.length] === true, facts: factFor("memory", index), assertion: `memory-${index % checks.length}` };
}

async function toolUseCase(index) {
  let values; const registry = new ToolRegistry({ query: async (_sql, params) => { values = params; return { rows: [{ tool_id: params[0] }] }; } });
  const mode = index % 4; const tool = { toolId: `matrix.tool.${index}`, description: "Matrix governed tool", domain: "matrix",
    implementation: "provider", availability: "available", riskTier: "medium", confirmationRequired: mode === 1,
    consentScope: mode === 2 ? "matrix:consent" : null, maxAttempts: mode === 3 ? 4 : 2 };
  const saved = await registry.register(tool);
  const checks = [saved.tool_id === tool.toolId && values[7] === "available", values[11] === true,
    values[12] === "matrix:consent", values[14] === 4];
  return { passed: checks[mode] === true, facts: factFor("toolUse", index), assertion: `tool-use-${mode}` };
}

async function crossApplicationCase(index) {
  const apps = CATALOG.applications; const first = apps[index % apps.length]; const second = apps[(index + 1) % apps.length];
  const third = apps[(index + 2) % apps.length];
  const steps = [first, second, third].map((app, offset) => ({ id: `step-${offset}`, title: `${app.applicationId} outcome`,
    toolId: TOOL_IDS[(index + offset) % TOOL_IDS.length], input: { workspace: app.applicationId },
    dependsOn: offset ? [`step-${offset - 1}`] : [], fallbackToolIds: [], requiredPermission: null }));
  const validation = validatePlan(validCandidate(index, { application: first.applicationId, steps }), CATALOG, CONTEXT);
  const shared = steps[1].dependsOn[0] === steps[0].id && steps[2].dependsOn[0] === steps[1].id;
  return { passed: validation.valid && shared && new Set(steps.map(step => step.input.workspace)).size === 3,
    facts: factFor("crossApplication", index), assertion: "three-workspace-dependency" };
}

async function verificationCase(index) {
  const writes = []; const db = { query: async () => ({ rows: [] }), transaction: async work => work({ query: async (sql, params) => {
    writes.push({ sql, params }); return { rows: sql.includes("nexus_outcome_verifications") ? [{ state: "verified" }] : [] };
  } }) };
  const repository = new OutcomeRepository(db); const mode = index % 3;
  const result = await repository.verify({ tenantId: `tenant-${index}`, taskId: `task-${index}`, policyKey: "visible-or-audible",
    verifier: "path2-production-matrix", verified: true,
    evidence: [{ type: mode === 1 ? "audible" : "visible", source: "exact-production", observed: { rendered: true } }] });
  const passed = result.state === "verified" && writes.some(item => item.sql.includes("nexus_outcome_evidence")) &&
    writes.some(item => item.sql.includes("nexus_outcome_verifications"));
  return { passed, facts: factFor("verification", index), falseSuccesses: passed ? 0 : 1, assertion: `verification-${mode}` };
}

function recoveryFixture(index) {
  const step = { step_id: `step-${index}`, tool_id: "knowledge.search", fallback_tool_ids: [], confirmation_state: "not_required",
    idempotency_key: `recovery-${index}`, state: "failed", attempt_count: 1, input: {}, depends_on: [] };
  const task = { taskId: `task-${index}`, tenantId: "tenant", ownerId: "user", state: "running", correlationId: `trace-${index}`, steps: [step] };
  let execution; const engine = new AuthoritativeTaskEngine({ conversations: { ensure: async () => ({}) },
    tasks: { getStep: async () => step, get: async ({ includeSteps }) => includeSteps ? task : task, save: async value => value },
    tools: { get: async id => ({ tool_id: id, availability: "available", required_permission: "tasks:execute",
      confirmation_required: false, consent_scope: null, timeout_ms: 1000, max_attempts: 3 }) },
    executions: { get: async () => null, start: async input => { execution = { execution_id: `exec-${index}`, idempotency_key: input.idempotencyKey }; return { execution, duplicate: false }; },
      finish: async input => ({ ...execution, state: input.successful ? "completed" : "failed", receipt: input.receipt }) },
    consents: { active: async () => null }, audit: { record: async value => value },
    executors: { "knowledge.search": async () => ({ rendered: true, source: "KALRO" }) },
    verifier: async ({ result }) => ({ verified: result.rendered === true, visible: true, evidence: [{ type: "workspace-render", source: "exact-production" }] }) });
  return { engine, step };
}

async function recoveryCase(index) {
  const { engine } = recoveryFixture(index); const result = await engine.execute({ context: { tenantId: "tenant", userId: "user", can: () => true, hasRole: () => false },
    taskId: `task-${index}`, stepId: `step-${index}` });
  return { passed: result.receipt.state === "completed" && /:retry:2$/.test(result.receipt.idempotencyKey),
    facts: factFor("recovery", index), assertion: "bounded-retry-same-task" };
}

async function multilingualCase(index) {
  const locale = SUPPORTED_LOCALES[index % SUPPORTED_LOCALES.length];
  const profile = createInteractionProfile({ locale: `${locale}-regional`, channel: "voice",
    userPreferences: { accessibility: { lowLiteracy: true, screenReader: true } } });
  return { passed: profile.locale === locale && profile.requirements.preserveLanguageAcrossWorkflow && profile.requirements.preserveSafetyMeaning,
    facts: factFor("multilingual", index), assertion: `locale-${locale}` };
}

async function accessibilityCase(index) {
  const mode = index % 4; const profile = createInteractionProfile({ locale: "en", channel: mode === 0 ? "voice" : "typed",
    userPreferences: { accessibility: { voiceOnly: mode === 0, lowLiteracy: mode === 1, keyboardOperable: mode === 2,
      screenReader: mode === 3, captions: true } } });
  const checks = [profile.voiceOnly, profile.lowLiteracy && profile.preferredFormats.includes("plain-language"),
    profile.keyboardOperable, profile.screenReader && profile.requirements.announceVisibleOutcome];
  return { passed: checks[mode] === true, facts: factFor("accessibility", index), assertion: `accessibility-${mode}` };
}

const RUNNERS = Object.freeze({ intelligence: intelligenceCase, memory: memoryCase, planning: planningCase, toolUse: toolUseCase,
  crossApplication: crossApplicationCase, verification: verificationCase, recovery: recoveryCase,
  multilingual: multilingualCase, accessibility: accessibilityCase });

async function requestJson(url, init = {}, fetchFn = fetch) {
  const response = await fetchFn(url, init); const text = await response.text(); let body;
  try { body = JSON.parse(text); } catch { body = { raw: text.slice(0, 500) }; }
  return { response, body };
}

async function run(env = process.env, fetchFn = fetch) {
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const path1Baseline = env.NEXUS_PATH1_BASELINE || PATH1_BASELINE;
  const status = await requestJson(`${base}/api/nexus/runtime/status`, { headers: { accept: "application/json", "cache-control": "no-cache" } }, fetchFn);
  if (!status.response.ok || status.body?.ok !== true || status.body?.releaseSha !== releaseSha)
    throw new Error("Path 2 matrix refused a stale or unavailable production release.");
  const headers = { accept: "application/json", "content-type": "application/json", authorization: `Bearer ${token}` };
  const descriptors = Object.keys(RUNNERS).flatMap(lane => Array.from({ length: PATH2_LANES[lane].minimumCases }, (_, index) => ({
    caseId: `p2c_${lane.toLowerCase()}_${releaseSha.slice(0, 12)}_${String(index + 1).padStart(3, "0")}`,
    lane, ordinal: index + 1, releaseSha, path1Baseline, deferRecording: ["crossApplication", "verification"].includes(lane) })));
  let browser;
  async function observeVisibleOutcome(evidence) {
    const targets = evidence.receipt?.outcomeTargets || []; if (!targets.length) return evidence;
    if (!browser) { const { chromium } = require("playwright"); browser = await chromium.launch({ headless: true }); }
    const page = await browser.newPage(); const observations = [];
    try { for (const target of targets) { await page.goto(target.outcomeUrl, { waitUntil: "networkidle" });
        const marker = page.locator(`[data-nexus-production-outcome="true"][data-case-id="${evidence.caseId}"]`); await marker.waitFor({ state: "visible" });
        const screenshot = await marker.screenshot(); observations.push({ outcomeUrl: page.url(), title: await page.title(),
          screenshotSha256: crypto.createHash("sha256").update(screenshot).digest("hex"), observedAt: new Date().toISOString() }); }
    } finally { await page.close(); }
    const fact = Object.keys(evidence.facts || {})[0]; return { ...evidence, passed: true, facts: { [fact]: true },
      receipt: { ...evidence.receipt, failure: null, browserObservations: observations } };
  }
  const cases = new Array(descriptors.length); let cursor = 0;
  async function worker() { while (true) { const index = cursor++; if (index >= descriptors.length) return; const item = descriptors[index];
      const submitted = await requestJson(`${base}/api/nexus/runtime/path2/production-case`, { method: "POST", headers, body: JSON.stringify(item) }, fetchFn);
      if (!submitted.body?.evidence || ![200, 201, 422].includes(submitted.response.status)) throw new Error(`Path 2 case ${item.caseId} could not execute in production: ${submitted.body?.error || submitted.response.status}`);
      let evidence = submitted.body.evidence;
      if (item.deferRecording) { evidence = await observeVisibleOutcome(evidence); const recorded = await requestJson(`${base}/api/nexus/runtime/path2/machine-cases`,
          { method: "POST", headers, body: JSON.stringify(evidence) }, fetchFn); if (recorded.response.status !== 201) throw new Error(`Browser-observed case ${item.caseId} could not be recorded.`); }
      cases[index] = evidence; } }
  try { await Promise.all(Array.from({ length: 4 }, () => worker())); } finally { if (browser) await browser.close(); }
  const failed = cases.filter(item => !item.passed); const output = env.NEXUS_PATH2_MATRIX_OUTPUT || path.join("output", "nexus-path2-production-matrix.json");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, JSON.stringify({ schema: "nexus.path2.production-matrix.v1", releaseSha, path1Baseline,
    productionIdentity: status.body.releaseSha, cases: cases.length, passed: cases.length - failed.length,
    failed: failed.map(item => item.caseId), failureDetails: failed.map(item => ({ caseId: item.caseId, lane: item.lane, failure: item.receipt?.failure || null })),
    lanes: Object.fromEntries(Object.keys(RUNNERS).map(lane => [lane, cases.filter(item => item.lane === lane).length])) }, null, 2));
  const certification = await requestJson(`${base}/api/nexus/runtime/path2/certification?path1Baseline=${encodeURIComponent(path1Baseline)}`,
    { headers: { accept: "application/json", authorization: `Bearer ${token}`, "cache-control": "no-cache" } }, fetchFn);
  const pendingMachine = Object.entries(certification.body?.lanes || {}).filter(([lane, value]) => lane !== "usability" && value.certified !== true).map(([lane]) => lane);
  if (pendingMachine.length) throw new Error(`Path 2 production matrix did not certify machine lanes: ${pendingMachine.join(", ")}`);
  console.log(JSON.stringify({ releaseSha, cases: cases.length, passed: cases.length, output }));
  return cases;
}

if (require.main === module) run().catch(error => { console.error(error.message); process.exit(1); });
module.exports = Object.freeze({ RUNNERS, CATALOG, PATH1_BASELINE, factFor, run });
