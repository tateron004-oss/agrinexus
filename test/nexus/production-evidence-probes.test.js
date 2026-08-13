"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { component, exactReleaseReady, objectStorageComponent, securityComponent, requestWithRetry } = require("../../scripts/nexus-run-production-evidence-probes.js");
const { pendingConfirmationContinuation, reloadAuthenticatedShell, authenticatedStandardUserRole, captureTypedIngressDiagnostic, requireVisibleAuthoritativeTypedIngress, post: browserProbePost } = require("../../scripts/nexus-run-browser-capability-probes.js");
test("exact-release convergence requires both runtime and acceptance identities", () => {
  const sha = "1".repeat(40); const response = value => ({ ok: true, body: { releaseSha: value } });
  assert.equal(exactReleaseReady(response(sha), response(sha), sha), true);
  assert.equal(exactReleaseReady(response(sha), { status: 503, ok: false, body: { releaseSha: sha } }, sha), true);
  assert.equal(exactReleaseReady(response("2".repeat(40)), response(sha), sha), false);
  assert.equal(exactReleaseReady(response(sha), response("3".repeat(40)), sha), false);
});
test("production probe transport retries bounded transient failures", async () => {
  const originalFetch = global.fetch; let calls = 0;
  global.fetch = async () => { calls += 1; if (calls === 1) throw Object.assign(new Error("reset"), { code: "ECONNRESET" }); return { ok: true }; };
  try { assert.equal((await requestWithRetry("https://production/health", {}, 2)).ok, true); assert.equal(calls, 2); }
  finally { global.fetch = originalFetch; }
});

test("browser capability failure preserves application, category, and safe server message", async () => {
  const originalFetch = global.fetch;
  global.fetch = async () => ({ ok: false, status: 503, text: async () => JSON.stringify({ code: "planner_failed",
    category: "provider", error: "Planner rejected the request" }) });
  try {
    await assert.rejects(() => browserProbePost("https://production/behavior-turn", "token", { application: "agriculture" }),
      /application=agriculture actualApplication=none expectedApplication=none code=planner_failed category=provider error=Planner rejected the request/);
  } finally { global.fetch = originalFetch; }
});

test("authenticated shell reload recovers from an aborted navigation", async () => {
  let reloads = 0; let navigations = 0;
  const page = {
    reload: async () => { reloads += 1; throw new Error("page.reload: net::ERR_ABORTED; maybe frame was detached?"); },
    url: () => "https://nexus.example/?evidence=release",
    goto: async (url, options) => { navigations += 1; assert.match(url, /evidence=release/); assert.equal(options.waitUntil, "networkidle"); }
  };
  await reloadAuthenticatedShell(page, 2);
  assert.equal(reloads, 1);
  assert.equal(navigations, 1);
});

test("browser evidence continues only transaction-bound Health and Offline Queue confirmations", () => {
  const transaction = { result: { state: "confirmation_required", taskId: "task-1", commandId: "command-1",
    correlationId: "correlation-1", outcome: { pendingStepId: "step-1" } } };
  assert.equal(pendingConfirmationContinuation("health", transaction), true);
  assert.equal(pendingConfirmationContinuation("offline-queue", transaction), true);
  assert.equal(pendingConfirmationContinuation("maps", transaction), false);
  assert.equal(pendingConfirmationContinuation("offline-queue", { result: { ...transaction.result, state: "clarification_required" } }), false);
  assert.equal(pendingConfirmationContinuation("offline-queue", { result: { ...transaction.result, commandId: null } }), false);
});

test("release workflow executes the real browser capability producer before compiling proof", () => {
  const workflow = fs.readFileSync(".github/workflows/nexus-unified-production-release.yml", "utf8");
  const producer = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");
  const componentProducer = fs.readFileSync("scripts/nexus-run-production-evidence-probes.js", "utf8");
  const app = fs.readFileSync("public/app.js", "utf8");
  assert.ok(workflow.indexOf("nexus-run-browser-capability-probes.js") < workflow.indexOf("nexus-compile-production-evidence.js"));
  assert.match(producer, /__NEXUS_CAPTURE_PRODUCTION_OUTCOME__/);
  assert.match(producer, /nexusProductionEvidence/);
  assert.match(app, /nexusProductionEvidenceViewport/);
  assert.match(app, /renderNexusAuthoritativeData\(outcome\)/);
  assert.match(app, /getBoundingClientRect/);
  assert.match(app, /#loginView/);
  assert.match(app, /#appView/);
  assert.match(app, /exact_release_evidence_required/);
  assert.match(producer, /behavior-turn/); assert.match(producer, /browser-acknowledgement/);
  assert.match(producer, /health-continuation/); assert.match(producer, /confirmed: true, consented: true/);
  assert.match(producer, /offline-queue-continuation/);
  assert.match(producer, /pre-cutover/); assert.match(producer, /post-cutover/);
  assert.match(producer, /production-acceptance\/workspaces/);
  assert.match(componentProducer, /api\/voice\/realtime\/status/);
  assert.match(componentProducer, /realtimeVoice\?\.ready === true/);
  assert.doesNotMatch(producer, /workspaceProbes:\s*\[\]/);
});
test("browser verifier proves Standard User identity through the authenticated server state contract", async () => {
  let request;
  const page = { context: () => ({ request: { get: async (url, options) => {
    request = { url, options };
    return { ok: () => true, status: () => 200, json: async () => ({ user: { role: "Standard User" } }) };
  } } }) };
  assert.equal(await authenticatedStandardUserRole(page, "https://nexus.example"), "Standard User");
  assert.deepEqual(request, { url: "https://nexus.example/api/state",
    options: { headers: { accept: "application/json", "cache-control": "no-cache" } } });
});

test("typed ingress diagnostics bind the failure to the exact release and browser state", async () => {
  const page = { evaluate: async evaluator => {
    assert.equal(typeof evaluator, "function");
    return {
      url: "https://nexus.example/",
      readyState: "complete",
      bodyClass: "user-mode",
      microphonePermission: "denied",
      loginView: { visible: false },
      appView: { visible: true },
      typedEntries: [{ visible: false }],
      microphoneControls: [{ visible: true, disabled: false }],
      statusText: ["Microphone access denied"]
    };
  } };
  const diagnostic = await captureTypedIngressDiagnostic(page, "a".repeat(40), "post-login", new Error("typed ingress timeout"));
  assert.equal(diagnostic.schema, "nexus.typed-ingress-diagnostic.v1");
  assert.equal(diagnostic.releaseSha, "a".repeat(40));
  assert.equal(diagnostic.phase, "post-login");
  assert.match(diagnostic.error, /typed ingress timeout/);
  assert.equal(diagnostic.browserState.microphonePermission, "denied");
  assert.equal(diagnostic.browserState.appView.visible, true);
  assert.equal(diagnostic.browserState.typedEntries[0].visible, false);
});

test("browser verifier returns an already-visible authoritative typed ingress without recursion", async () => {
  let microphoneRequested = false;
  const input = { isVisible: async () => true };
  const page = { locator: selector => ({ first: () => {
    if (selector.includes("primary-typed-entry")) return input;
    microphoneRequested = true; return {};
  } }) };
  assert.equal(await requireVisibleAuthoritativeTypedIngress(page), input);
  assert.equal(microphoneRequested, false);
});

test("browser verifier uses the visible microphone control to establish truthful typed fallback", async () => {
  const calls = []; let visible = false;
  const input = { isVisible: async () => visible, waitFor: async options => {
    calls.push(["input-wait", options]); visible = true;
  } };
  const microphone = { waitFor: async options => calls.push(["microphone-wait", options]),
    click: async () => calls.push(["microphone-click"]) };
  const page = { locator: selector => ({
    first: () => selector.includes("primary-typed-entry") ? input : microphone
  }) };
  assert.equal(await requireVisibleAuthoritativeTypedIngress(page), input);
  assert.deepEqual(calls.map(call => call[0]), ["microphone-wait", "microphone-click", "input-wait"]);
});

test("production browser establishes a real denied microphone permission before proving typed fallback", () => {
  const source = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");
  assert.match(source, /newCDPSession\(page\)/);
  assert.match(source, /Browser\.setPermission/);
  assert.match(source, /permission: \{ name: "microphone" \}, setting: "denied", origin: base/);
  assert.match(source, /permissionSession\.detach\(\)/);
});

test("browser capability verifier binds visible interaction to stable authoritative ingress ownership", () => {
  const source = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");
  assert.match(source, /data-nexus-primary-typed-entry="true":visible/);
  assert.match(source, /data-nexus-primary-typed-submit="true":visible/);
  assert.doesNotMatch(source, /getByLabel\("Workflow details for Nexus"/);
  assert.doesNotMatch(source, /getByRole\("button", \{ name: "Send to Nexus"/);
});

test("browser capability evidence hydrates an authenticated Standard User shell", () => {
  const source = fs.readFileSync("scripts/nexus-run-browser-capability-probes.js", "utf8");
  assert.match(source, /page\.context\(\)\.request\.post/);
  assert.match(source, /shell\?\.user\?\.role !== "Standard User"/);
  assert.match(source, /page\.reload/);
  assert.match(source, /data = value/);
  assert.match(source, /attempt <= 4/);
  assert.match(source, /login transport failed after 4 attempts/);
});
test("live probe receipts remain exact-release and fail on stale identities", () => {
  const sha = "a".repeat(40); const probe = { url: "https://production/health", status: 200, ok: true, body: { releaseSha: sha } };
  const result = component("testing", sha, [probe], { exactSha: sha });
  assert.equal(result.production, true); assert.equal(result.simulated, false); assert.equal(result.passed, true);
  assert.equal(component("testing", sha, [{ ...probe, body: { releaseSha: "b".repeat(40) } }], {}).passed, false);
});

test("five objective components fail closed unless their genuine probe facts are present", () => {
  const sha = "8".repeat(40); const ok = name => ({ url: `https://production/${name}`, status: 200, ok: true, body: { releaseSha: sha } });
  assert.equal(component("voice", sha, [ok("voice")], { realtimeEquivalent: true, realtimeConfigured: true }).passed, true);
  assert.equal(component("documents", sha, [{ ...ok("documents"), ok: false }], { fullLifecycle: true }).passed, false);
  assert.equal(component("healthcare", sha, [ok("healthcare")], { expertValidation: true }).facts.expertValidation, true);
  assert.equal(component("predictive", sha, [ok("predictive")], { validatedModels: true }).facts.validatedModels, true);
  assert.equal(component("operations", sha, [ok("brain")], { singleRuntimeIntegrity: true }).facts.singleRuntimeIntegrity, true);
});

test("database evidence remains a genuine exact-release production observation", () => {
  const sha = "c".repeat(40);
  const health = { url: "https://production/api/healthz", status: 200, ok: true, body: {
    ok: true, releaseSha: sha, checks: { database: "connected" }, pgvector: true, migrationsCurrent: true
  } };
  const result = component("database", sha, [health], {
    connected: true, pgvector: true, migrationsCurrent: true
  });
  assert.equal(result.passed, true);
  assert.deepEqual(result.facts, { connected: true, pgvector: true, migrationsCurrent: true });
  assert.deepEqual(result.receipts, ["https://production/api/healthz status=200"]);
});

test("task-engine evidence requires a durable completed lifecycle on the exact release", () => {
  const sha = "d".repeat(40);
  const probe = { url: "https://production/api/nexus/runtime/production-acceptance/probes/task-engine",
    status: 200, ok: true, body: { ok: true, releaseSha: sha, durable: true, state: "cancelled", steps: 1 } };
  const result = component("taskEngine", sha, [probe], { durableTask: true, lifecycleState: "cancelled", stepCount: 1 });
  assert.equal(result.passed, true);
  assert.equal(component("taskEngine", sha, [{ ...probe, body: { ...probe.body, releaseSha: "e".repeat(40) } }], {}).passed, false);
});

test("failed task-engine evidence preserves its authenticated stage and safe error", () => {
  const sha = "9".repeat(40);
  const probe = { url: "https://production/task-engine", status: 503, ok: false,
    body: { ok: false, releaseSha: sha, code: "Error", stage: "create", error: "Task write failed" } };
  const result = component("taskEngine", sha, [probe], { failureStage: probe.body.stage,
    failureCode: probe.body.code, failureMessage: probe.body.error });
  assert.equal(result.passed, false); assert.equal(result.facts.failureStage, "create");
  assert.match(result.receipts[0], /code=Error stage=create error="Task write failed"/);
});

test("semantic-memory evidence requires reconstruction persistence and cleanup", () => {
  const sha = "f".repeat(40);
  const probe = { url: "https://production/semantic-memory", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, durable: true, repositoryReconstructed: true, cleanedUp: true } };
  const facts = { restartPersistent: true, cleanupVerified: true };
  assert.equal(component("semanticMemory", sha, [probe], facts).passed, true);
  assert.equal(component("semanticMemory", sha, [{ ...probe, ok: false, status: 503, body: { ...probe.body, cleanedUp: false } }], facts).passed, false);
});

test("consent-audit evidence requires preserved immutable receipts", () => {
  const sha = "c".repeat(40);
  const probe = { url: "https://production/consent-audit", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, immutableReceipts: true, auditEventCount: 2, receiptPreserved: true } };
  const record = component("consentAudit", sha, [probe], { immutableReceipts: true });
  assert.equal(record.passed, true);
  assert.equal(record.facts.immutableReceipts, true);
});

test("offline-sync evidence requires durable conflict recovery and cleanup", () => {
  const sha = "d".repeat(40);
  const probe = { url: "https://production/offline-sync", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, conflictRecovery: true, durableConflict: true,
      resolution: "accept-server", cleanedUp: true } };
  const record = component("offlineSync", sha, [probe], { conflictRecovery: true });
  assert.equal(record.passed, true);
  assert.equal(record.facts.conflictRecovery, true);
});

test("identity evidence requires same-tenant authorization and cross-tenant denial", () => {
  const sha = "e".repeat(40);
  const probe = { url: "https://production/identity", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, tenantIsolation: true, sameTenantAuthorized: true, crossTenantDenied: true } };
  const record = component("identity", sha, [probe], { tenantIsolation: true });
  assert.equal(record.passed, true);
  assert.equal(record.facts.tenantIsolation, true);
});

test("object-storage evidence remains held until a prior distinct release is observed", () => {
  const sha = "f".repeat(40); const base = { url: "https://production/object-storage", status: 200, ok: true,
    body: { ok: true, releaseSha: sha, currentWriteVerified: true, priorReleaseObserved: false, redeployPersistent: false } };
  assert.equal(objectStorageComponent(sha, base), null);
  const proven = objectStorageComponent(sha, { ...base, body: { ...base.body, priorReleaseObserved: true, redeployPersistent: true } });
  assert.equal(proven.component, "objectStorage"); assert.equal(proven.passed, true); assert.equal(proven.facts.redeployPersistent, true);
});

test("security evidence requires an exact-release zero-finding production audit", () => {
  const sha = "9".repeat(40); const dir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-security-audit-"));
  const auditPath = path.join(dir, "audit.json");
  fs.writeFileSync(auditPath, JSON.stringify({ metadata: { vulnerabilities: {
    info: 0, low: 0, moderate: 0, high: 0, critical: 0, total: 0
  }, dependencies: { total: 142 } } }));
  const result = securityComponent(sha, auditPath);
  assert.equal(result.passed, true); assert.equal(result.production, true);
  assert.deepEqual(result.facts, { criticalFindings: 0, highFindings: 0, totalFindings: 0, auditedDependencies: 142 });
  fs.writeFileSync(auditPath, JSON.stringify({ metadata: { vulnerabilities: {
    info: 0, low: 0, moderate: 0, high: 1, critical: 0, total: 1
  }, dependencies: { total: 142 } } }));
  assert.equal(securityComponent(sha, auditPath).passed, false);
});
