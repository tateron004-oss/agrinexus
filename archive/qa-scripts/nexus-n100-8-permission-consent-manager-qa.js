const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const permissions = require("../server/nexus-n100-permission-consent-manager.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-permission-consent-manager.js");
  const doc = read("docs", "NEXUS_N100_8_PERMISSION_CONSENT_MANAGER.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-permission-consent-manager.js"), "N100-8 permission module must exist.");
  assert(exists("docs", "NEXUS_N100_8_PERMISSION_CONSENT_MANAGER.md"), "N100-8 permission documentation must exist.");
  assert(exists("scripts", "nexus-n100-8-permission-consent-manager-qa.js"), "N100-8 QA must exist.");

  [
    "permissionId",
    "capability",
    "requestedBy",
    "reason",
    "dataUsed",
    "actionScope",
    "reversible",
    "durationScope",
    "status",
    "confirmedAt",
    "deniedAt",
    "auditEvent",
    "permissionGrantDoesNotExecuteAction"
  ].forEach(term => assert(source.includes(term), `N100-8 module must include ${term}.`));

  [
    "No silent permission",
    "No browser geolocation",
    "does not authorize provider contact",
    "does not add UI"
  ].forEach(term => assert(doc.includes(term), `N100-8 documentation must include ${term}.`));

  [
    "nexus-n100-permission-consent-manager",
    "createN100PermissionRequest",
    "grantN100Permission",
    "revokeN100Permission"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-8 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-8 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-8 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "setInterval",
    "setTimeout",
    "navigator.geolocation",
    "getCurrentPosition(",
    "watchPosition(",
    "Notification.requestPermission(",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-8 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-8-permission-consent-manager"],
    "node scripts/nexus-n100-8-permission-consent-manager-qa.js",
    "N100-8 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-8-permission-consent-manager-qa.js"), "N100-8 QA must be wired into local-safe suites.");
}

function assertPermissionLifecycle(capability) {
  const request = permissions.createN100PermissionRequest({
    capability,
    reason: `Need ${capability} for user-approved preparation.`,
    dataUsed: ["user supplied context"],
    nowIso: "2026-06-28T13:00:00.000Z"
  });
  assert.equal(permissions.isSafeN100PermissionState(request), true, `${capability} request must be safe.`);
  assert.equal(request.status, "requested", `${capability} should start requested.`);
  assert.equal(request.canExecute, false, `${capability} request must not execute.`);
  assert.equal(request.safety.noSilentPermission, true, `${capability} must block silent permission.`);

  const granted = permissions.grantN100Permission(request, { nowIso: "2026-06-28T13:05:00.000Z" });
  assert.equal(permissions.isSafeN100PermissionState(granted), true, `${capability} granted state must be safe.`);
  assert.equal(granted.canExecute, false, `${capability} grant must not execute.`);
  assert.equal(granted.permissionGrantDoesNotExecuteAction, true, `${capability} grant must not execute action.`);
  assert.equal(granted.finalConfirmationStillRequired, true, `${capability} grant must require final confirmation.`);

  const denied = permissions.denyN100Permission(request, { nowIso: "2026-06-28T13:06:00.000Z" });
  assert.equal(denied.status, "denied", `${capability} deny must work.`);
  assert.equal(denied.canExecute, false, `${capability} deny must not execute.`);

  const revoked = permissions.revokeN100Permission(granted, { nowIso: "2026-06-28T13:07:00.000Z" });
  assert.equal(revoked.status, "revoked", `${capability} revoke must work.`);
  assert.equal(revoked.canExecute, false, `${capability} revoke must not execute.`);

  return { request, granted, denied, revoked };
}

function assertAllCapabilities() {
  permissions.PERMISSION_CAPABILITIES.forEach(capability => {
    const states = assertPermissionLifecycle(capability);
    if (permissions.HIGH_RISK_BLOCKED_CAPABILITIES.includes(capability)) {
      assert.equal(states.granted.status, "blocked_high_risk", `${capability} grant must remain high-risk blocked.`);
      assert.equal(states.granted.confirmedAt, null, `${capability} high-risk grant must not confirm.`);
    } else {
      assert.equal(states.granted.status, "granted", `${capability} non-high-risk grant should be granted state only.`);
    }
    if (permissions.SENSITIVE_BROWSER_CAPABILITIES.includes(capability)) {
      assert.equal(states.request.safety.browserPermissionRequiresExplicitUserFlow, true, `${capability} must require explicit browser permission flow.`);
      assert.equal(states.request.safety.noBrowserGeolocationRequested, true, `${capability} must not request browser geolocation.`);
    }
  });
}

function runN100PermissionConsentManagerQa() {
  assertStaticSafety();
  assertAllCapabilities();

  console.log(JSON.stringify({
    phase: "N100-8",
    capabilities: permissions.PERMISSION_CAPABILITIES,
    highRiskBlocked: permissions.HIGH_RISK_BLOCKED_CAPABILITIES,
    standardUserRuntimeActivated: false,
    noSilentPermission: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-8-permission-consent-manager-qa] passed");
}

if (require.main === module) {
  try {
    runN100PermissionConsentManagerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100PermissionConsentManagerQa
});
