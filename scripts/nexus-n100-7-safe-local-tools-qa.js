const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const localTools = require("../server/nexus-n100-safe-local-tools.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-safe-local-tools.js");
  const doc = read("docs", "NEXUS_N100_7_SAFE_LOCAL_TOOLS.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-safe-local-tools.js"), "N100-7 safe local tools module must exist.");
  assert(exists("docs", "NEXUS_N100_7_SAFE_LOCAL_TOOLS.md"), "N100-7 documentation must exist.");
  assert(exists("scripts", "nexus-n100-7-safe-local-tools-qa.js"), "N100-7 QA must exist.");

  [
    "SAFE_LOCAL_ACTION_TYPES",
    "BLOCKED_EXTERNAL_ACTION_TYPES",
    "CONFIRMATION_REQUIRED_ACTION_TYPES",
    "prepareN100SafeLocalAction",
    "confirmN100SafeLocalAction",
    "cancelN100SafeLocalAction",
    "auditMetadata",
    "noExecutionAuthorized",
    "executionAuthority: \"none\""
  ].forEach(term => assert(source.includes(term), `N100-7 module must include ${term}.`));

  [
    "safe local tools contract",
    "confirmation",
    "cancel",
    "audit metadata",
    "does not activate Standard User behavior"
  ].forEach(term => assert(doc.includes(term), `N100-7 documentation must include ${term}.`));

  [
    "nexus-n100-safe-local-tools",
    "prepareN100SafeLocalAction",
    "confirmN100SafeLocalAction",
    "cancelN100SafeLocalAction"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-7 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-7 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-7 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "setInterval",
    "setTimeout",
    "Notification",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "clipboard.writeText",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-7 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-7-safe-local-tools"],
    "node scripts/nexus-n100-7-safe-local-tools-qa.js",
    "N100-7 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-7-safe-local-tools-qa.js"), "N100-7 QA must be wired into local-safe suites.");
}

function assertPreparedAction(actionType, expectedConfirmation) {
  const action = localTools.prepareN100SafeLocalAction({
    actionType,
    summary: `Prepare ${actionType} for user review.`,
    nowIso: "2026-06-28T12:00:00.000Z"
  });
  assert.equal(localTools.isSafeN100LocalToolAction(action), true, `${actionType} must be safe.`);
  assert.equal(action.actionType, actionType, `${actionType} must be preserved.`);
  assert.equal(action.requiresConfirmation, expectedConfirmation, `${actionType} confirmation expectation mismatch.`);
  assert.equal(action.cancelAvailable, true, `${actionType} must include cancel.`);
  assert.equal(action.canExecute, false, `${actionType} must not execute.`);
  assert.equal(action.executionAuthority, "none", `${actionType} must have no execution authority.`);
  assert.equal(action.noBackendWritePerformed, true, `${actionType} must not write backend state.`);
  assert.equal(action.noStorageWritePerformed, true, `${actionType} must not write storage.`);
  assert.equal(action.noClipboardWritePerformed, true, `${actionType} must not write clipboard.`);
  assert.equal(action.noFileWritePerformed, true, `${actionType} must not write files.`);
  localTools.BLOCKED_EXTERNAL_ACTION_TYPES.forEach(blocked => {
    assert(action.blockedActions.includes(blocked), `${actionType} must block ${blocked}.`);
  });
  return action;
}

function assertAllowedActions() {
  localTools.SAFE_LOCAL_ACTION_TYPES.forEach(actionType => {
    const shouldConfirm = localTools.CONFIRMATION_REQUIRED_ACTION_TYPES.includes(actionType);
    assertPreparedAction(actionType, shouldConfirm);
  });
}

function assertConfirmationFlow() {
  const prepared = assertPreparedAction("save_checklist", true);
  const rejected = localTools.confirmN100SafeLocalAction(prepared, { confirmation: "okay" });
  assert.equal(rejected.status, "waiting_for_user_confirmation", "Vague confirmation must not confirm local action.");
  assert.equal(rejected.confirmationRejected, true, "Vague confirmation should be rejected.");
  assert.equal(rejected.canExecute, false, "Rejected local action must not execute.");

  const confirmed = localTools.confirmN100SafeLocalAction(prepared, {
    confirmation: "confirm",
    nowIso: "2026-06-28T12:05:00.000Z"
  });
  assert.equal(confirmed.status, "confirmed_local_only", "Explicit confirmation should mark fixture local-only confirmation.");
  assert.equal(confirmed.localEffect, "fixture_only_no_runtime_side_effect", "Confirmed action must remain fixture-only.");
  assert.equal(confirmed.canExecute, false, "Confirmed local action still must not have execution authority.");
  assert.equal(confirmed.noBackendWritePerformed, true, "Confirmed local action must not write backend state.");
}

function assertCancelFlow() {
  const prepared = assertPreparedAction("export_plain_text", true);
  const cancelled = localTools.cancelN100SafeLocalAction(prepared, "user changed mind");
  assert.equal(cancelled.status, "cancelled", "Cancel must produce cancelled status.");
  assert.equal(cancelled.canExecute, false, "Cancelled local action must not execute.");
  assert.equal(cancelled.noExecutionAuthorized, true, "Cancelled action must preserve no execution.");
}

function assertBlockedActions() {
  localTools.BLOCKED_EXTERNAL_ACTION_TYPES.forEach(actionType => {
    const blocked = localTools.prepareN100SafeLocalAction({ actionType });
    assert.equal(blocked.status, "blocked_external_action", `${actionType} must be blocked.`);
    assert.equal(localTools.isSafeN100LocalToolAction(blocked), true, `${actionType} blocked payload must be safe.`);
    assert.equal(blocked.canExecute, false, `${actionType} must not execute.`);
    assert.equal(blocked.executionAuthority, "none", `${actionType} must have no execution authority.`);
  });
}

function runN100SafeLocalToolsQa() {
  assertStaticSafety();
  assertAllowedActions();
  assertConfirmationFlow();
  assertCancelFlow();
  assertBlockedActions();

  console.log(JSON.stringify({
    phase: "N100-7",
    safeLocalActions: localTools.SAFE_LOCAL_ACTION_TYPES,
    blockedExternalActions: localTools.BLOCKED_EXTERNAL_ACTION_TYPES,
    standardUserRuntimeActivated: false,
    noBackendWrites: true,
    noStorageWrites: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-7-safe-local-tools-qa] passed");
}

if (require.main === module) {
  try {
    runN100SafeLocalToolsQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100SafeLocalToolsQa
});
