const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const adjacent = require("../server/nexus-n100-confirmed-external-adjacent-actions.js");
const permissions = require("../server/nexus-n100-permission-consent-manager.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-confirmed-external-adjacent-actions.js");
  const doc = read("docs", "NEXUS_N100_9_CONFIRMED_EXTERNAL_ADJACENT_ACTIONS.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-confirmed-external-adjacent-actions.js"), "N100-9 module must exist.");
  assert(exists("docs", "NEXUS_N100_9_CONFIRMED_EXTERNAL_ADJACENT_ACTIONS.md"), "N100-9 documentation must exist.");
  assert(exists("scripts", "nexus-n100-9-confirmed-external-adjacent-actions-qa.js"), "N100-9 QA must exist.");

  [
    "LOW_RISK_EXTERNAL_ADJACENT_ACTIONS",
    "PERMISSION_REQUIRED_ACTIONS",
    "prepareN100ExternalAdjacentAction",
    "confirmN100ExternalAdjacentAction",
    "cancelN100ExternalAdjacentAction",
    "confirmed_fixture_only",
    "noExecutionAuthorized"
  ].forEach(term => assert(source.includes(term), `N100-9 source must include ${term}.`));

  [
    "Confirmed actions are `confirmed_fixture_only`",
    "sending email/message",
    "no backend writes",
    "not wired into Standard User runtime"
  ].forEach(term => assert(doc.includes(term), `N100-9 documentation must include ${term}.`));

  [
    "nexus-n100-confirmed-external-adjacent-actions",
    "prepareN100ExternalAdjacentAction",
    "confirmN100ExternalAdjacentAction",
    "cancelN100ExternalAdjacentAction"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-9 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-9 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-9 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "setInterval",
    "setTimeout",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "sendMail(",
    "sendMessage(",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-9 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-9-confirmed-external-adjacent-actions"],
    "node scripts/nexus-n100-9-confirmed-external-adjacent-actions-qa.js",
    "N100-9 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-9-confirmed-external-adjacent-actions-qa.js"), "N100-9 QA must be wired into local-safe suites.");
}

function grantedPermission(capability) {
  const request = permissions.createN100PermissionRequest({
    capability,
    reason: `Allow ${capability} preparation.`,
    nowIso: "2026-06-28T14:00:00.000Z"
  });
  return permissions.grantN100Permission(request, { nowIso: "2026-06-28T14:01:00.000Z" });
}

function assertPreparedAction(actionType) {
  const permissionCapability = actionType === "prepare_calendar_draft"
    ? "calendar"
    : actionType === "prepare_email_draft"
      ? "email_message_draft"
      : actionType === "save_to_local_app_storage"
        ? "profile_account_write"
        : null;
  const action = adjacent.prepareN100ExternalAdjacentAction({
    actionType,
    summary: `Prepare ${actionType} safely.`,
    permissionState: permissionCapability ? grantedPermission(permissionCapability) : null,
    nowIso: "2026-06-28T14:05:00.000Z"
  });
  assert.equal(adjacent.isSafeN100ExternalAdjacentAction(action), true, `${actionType} must be safe.`);
  assert.equal(action.requiresConfirmation, true, `${actionType} must require confirmation.`);
  assert.equal(action.cancelAvailable, true, `${actionType} must include cancel.`);
  assert.equal(action.status, "waiting_for_user_confirmation", `${actionType} must wait for confirmation.`);
  assert.equal(action.canExecute, false, `${actionType} must not execute.`);
  assert.equal(action.executionAuthority, "none", `${actionType} must have no execution authority.`);
  adjacent.BLOCKED_ACTIONS.forEach(blocked => {
    assert(action.blockedActions.includes(blocked), `${actionType} must block ${blocked}.`);
  });
  return action;
}

function assertPermissionRequirement() {
  adjacent.PERMISSION_REQUIRED_ACTIONS.forEach(actionType => {
    const action = adjacent.prepareN100ExternalAdjacentAction({ actionType });
    assert.equal(action.status, "waiting_for_permission", `${actionType} must wait for permission without grant.`);
    assert(action.permissionRequest, `${actionType} must include safe permission request.`);
    assert.equal(action.canExecute, false, `${actionType} permission wait must not execute.`);
    const rejected = adjacent.confirmN100ExternalAdjacentAction(action, { confirmation: "confirm" });
    assert.equal(rejected.status, "waiting_for_permission", `${actionType} must not confirm before permission.`);
  });
}

function assertConfirmationAndCancel() {
  const action = assertPreparedAction("export_download_plain_text");
  const vague = adjacent.confirmN100ExternalAdjacentAction(action, { confirmation: "okay" });
  assert.equal(vague.status, "waiting_for_user_confirmation", "Vague confirmation must not confirm.");
  assert.equal(vague.confirmationRejected, true, "Vague confirmation should be rejected.");

  const confirmed = adjacent.confirmN100ExternalAdjacentAction(action, {
    confirmation: "confirm",
    nowIso: "2026-06-28T14:10:00.000Z"
  });
  assert.equal(confirmed.status, "confirmed_fixture_only", "Explicit confirmation should remain fixture-only.");
  assert.equal(confirmed.localEffect, "prepared_for_user_review_only", "Confirmed state must only prepare for review.");
  assert.equal(confirmed.canExecute, false, "Confirmed state must not execute.");
  assert.equal(confirmed.noBackendWritePerformed, true, "Confirmed state must not write backend.");

  const cancelled = adjacent.cancelN100ExternalAdjacentAction(action, "user_cancelled");
  assert.equal(cancelled.status, "cancelled", "Cancel must be represented.");
  assert.equal(cancelled.canExecute, false, "Cancelled action must not execute.");
}

function assertAllowedAndBlockedActions() {
  adjacent.LOW_RISK_EXTERNAL_ADJACENT_ACTIONS.forEach(assertPreparedAction);
  adjacent.BLOCKED_ACTIONS.forEach(actionType => {
    const blocked = adjacent.prepareN100ExternalAdjacentAction({ actionType });
    assert.equal(blocked.status, "blocked_external_action", `${actionType} must be blocked.`);
    assert.equal(adjacent.isSafeN100ExternalAdjacentAction(blocked), true, `${actionType} blocked payload must be safe.`);
    assert.equal(blocked.canExecute, false, `${actionType} must not execute.`);
  });
}

function runN100ConfirmedExternalAdjacentActionsQa() {
  assertStaticSafety();
  assertPermissionRequirement();
  assertConfirmationAndCancel();
  assertAllowedAndBlockedActions();

  console.log(JSON.stringify({
    phase: "N100-9",
    lowRiskExternalAdjacentActions: adjacent.LOW_RISK_EXTERNAL_ADJACENT_ACTIONS,
    permissionRequired: adjacent.PERMISSION_REQUIRED_ACTIONS,
    blockedActions: adjacent.BLOCKED_ACTIONS,
    standardUserRuntimeActivated: false,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-9-confirmed-external-adjacent-actions-qa] passed");
}

if (require.main === module) {
  try {
    runN100ConfirmedExternalAdjacentActionsQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100ConfirmedExternalAdjacentActionsQa
});
