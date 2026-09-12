const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const recovery = require("../server/nexus-autonomy-workflow-reliability-recovery.js");
const sessionState = require("../server/nexus-autonomy-workflow-session-state.js");
const stepRunner = require("../server/nexus-autonomy-workflow-step-runner.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertDoc() {
  const doc = read("docs", "NEXUS_AUT9_AUTONOMY_RELIABILITY_RECOVERY.md");
  [
    "user cancellation",
    "expired workflow context",
    "provider error",
    "missing provider or source configuration",
    "empty results",
    "stale source data",
    "blocked action requests",
    "failed workflow steps",
    "unsafe automatic retry attempts",
    "executionAuthority: false",
    "noExecutionAuthorized: true",
    "noProviderHandoff: true",
    "noAutoRetry: true",
    "does not wire new runtime behavior"
  ].forEach(term => assert(doc.includes(term), `AUT9 doc must include: ${term}`));
}

function assertRecoveryReasons() {
  [
    "cancelled",
    "expired_workflow",
    "provider_error",
    "missing_config",
    "empty_results",
    "stale_source",
    "blocked_action",
    "step_failed",
    "unsafe_retry_blocked"
  ].forEach(reason => {
    assert(recovery.AUTONOMY_WORKFLOW_RECOVERY_REASONS.includes(reason), `AUT9 must support recovery reason: ${reason}`);
    const result = recovery.buildAutonomyWorkflowRecovery({
      reason,
      workflowId: "workflow-fixture",
      workflowType: "job_search_workflow",
      stepId: "step-fixture",
      error: reason === "provider_error" ? { code: "E_PROVIDER", stack: "secret stack" } : null,
      now: Date.parse("2026-06-29T00:00:00.000Z")
    });
    assert.equal(recovery.isSafeAutonomyWorkflowRecovery(result), true, `${reason} recovery must be safe.`);
    assert.equal(result.executionAuthority, false, `${reason} must not grant execution authority.`);
    assert.equal(result.noExecutionAuthorized, true, `${reason} must block execution.`);
    assert.equal(result.noProviderContactAuthorized, true, `${reason} must block provider contact.`);
    assert.equal(result.noProviderHandoff, true, `${reason} must block provider handoff.`);
    assert.equal(result.noLocationPermissionRequested, true, `${reason} must not request location.`);
    assert.equal(result.noPermissionPromptAuthorized, true, `${reason} must not authorize permissions.`);
    assert.equal(result.noBackendActionWritePerformed, true, `${reason} must not write backend action state.`);
    assert.equal(result.retryPolicy.automaticRetriesAllowed, false, `${reason} must not auto-retry.`);
    assert.equal(result.retryPolicy.maxAutomaticRetries, 0, `${reason} must keep auto-retry count zero.`);
    assert.equal(result.retryPolicy.userInitiatedRetryOnly, true, `${reason} must require user-initiated retry.`);
    assert.equal(result.auditEvent.noExecutionAuthorized, true, `${reason} audit event must preserve no-execution posture.`);
    assert(!JSON.stringify(result).includes("secret stack"), `${reason} must not expose provider stack traces.`);
  });
}

function assertAdjacentBehavior() {
  const active = sessionState.createAutonomyWorkflowSession("help me get a farm job near Stockton", { now: Date.parse("2026-06-29T00:00:00.000Z") });
  const cancelled = sessionState.applyAutonomyWorkflowCommand(active, "cancel", { now: Date.parse("2026-06-29T00:01:00.000Z") });
  assert.equal(cancelled.status, "cancelled");
  assert.equal(sessionState.isSafeAutonomyWorkflowSessionState(cancelled.state), true);

  const expired = sessionState.applyAutonomyWorkflowCommand(active, "next", { now: Date.parse(active.expiresAt) + 1 });
  assert.equal(expired.status, "expired");
  assert.equal(sessionState.isSafeAutonomyWorkflowSessionState(expired.state), true);

  const providerError = stepRunner.runAutonomyWorkflowStep({ stepId: "job-source", stepType: "search_jobs", title: "Search jobs" }, { providerMode: "error" });
  assert.equal(providerError.status, "safe_fallback");
  assert.equal(providerError.noExecutionAuthorized, true);
  assert.equal(stepRunner.isSafeAutonomyWorkflowStepResult(providerError), true);

  const normalized = recovery.buildAutonomyWorkflowRecovery({ reason: "provider_error", workflowState: active, stepResult: providerError });
  assert.equal(recovery.isSafeAutonomyWorkflowRecovery(normalized), true);
}

function assertNoRuntimeActivation() {
  const app = read("public", "app.js");
  const server = read("server.js");
  [
    "nexus-autonomy-workflow-reliability-recovery",
    "buildAutonomyWorkflowRecovery",
    "isSafeAutonomyWorkflowRecovery",
    "AUTONOMY_WORKFLOW_RECOVERY_REASONS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not activate AUT9 recovery runtime: ${term}`);
    assert(!server.includes(term), `server.js must not activate AUT9 recovery runtime: ${term}`);
  });
}

function assertQaWiring() {
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");
  assert.equal(
    pkg.scripts["qa:nexus-aut9-autonomy-reliability-recovery"],
    "node scripts/nexus-aut9-autonomy-reliability-recovery-qa.js",
    "AUT9 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut9-autonomy-reliability-recovery-qa.js"), "AUT9 QA must be wired into local-safe suites.");
}

function runAut9AutonomyReliabilityRecoveryQa() {
  assertDoc();
  assertRecoveryReasons();
  assertAdjacentBehavior();
  assertNoRuntimeActivation();
  assertQaWiring();
  console.log(JSON.stringify({
    recoveryReasonsCovered: recovery.AUTONOMY_WORKFLOW_RECOVERY_REASONS.length,
    noExecutionAuthority: true,
    noProviderHandoff: true,
    noAutoRetry: true,
    runtimeActivation: false
  }, null, 2));
  console.log("[nexus-aut9-autonomy-reliability-recovery-qa] passed");
}

if (require.main === module) {
  try {
    runAut9AutonomyReliabilityRecoveryQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut9AutonomyReliabilityRecoveryQa
});
