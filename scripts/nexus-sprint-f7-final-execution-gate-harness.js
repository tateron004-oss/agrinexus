const finalGateContract = require("../public/nexus-final-execution-gate-contract.js");

const REQUIRED_CHANNELS = finalGateContract.REQUIRED_BLOCKED_EXECUTION_CHANNELS;

function buildBaseGate(overrides = {}) {
  return Object.assign({
    gateId: "gate-low-risk-review",
    actionId: "prepare-low-risk-review",
    actionType: "review-only",
    riskTier: "low",
    targetSummary: "Review a safe low-risk Nexus next step",
    userApprovalId: "approval-low-risk-review",
    approvalIntentOnly: true,
    finalGateRequired: true,
    finalGateSatisfied: true,
    executionAuthority: false,
    permissionState: "satisfied",
    consentState: "satisfied",
    auditState: "ready",
    providerState: "available",
    reversalOrCancelPath: "Cancel before execution",
    blockedExecutionChannels: REQUIRED_CHANNELS,
    evidenceSummary: "Fixture evidence packet is present.",
    limitations: "Fixture only. No real-world action can execute."
  }, overrides);
}

const fixtures = Object.freeze([
  { id: "complete-low-risk-review", expectedOk: true, gate: buildBaseGate() },
  { id: "missing-final-satisfaction", expectedOk: false, gate: buildBaseGate({ finalGateSatisfied: false }) },
  { id: "missing-permission", expectedOk: false, gate: buildBaseGate({ permissionState: "missing" }) },
  { id: "missing-audit", expectedOk: false, gate: buildBaseGate({ auditState: "missing" }) },
  { id: "missing-provider", expectedOk: false, gate: buildBaseGate({ providerState: "missing" }) },
  { id: "missing-reversal", expectedOk: false, gate: buildBaseGate({ reversalOrCancelPath: "" }) },
  { id: "incomplete-blocked-channels", expectedOk: false, gate: buildBaseGate({ blockedExecutionChannels: ["call"] }) },
  { id: "execution-authority-escalation", expectedOk: false, gate: buildBaseGate({ executionAuthority: true }) }
]);

function runFinalExecutionGateFixtures() {
  return fixtures.map(fixture => {
    const validation = finalGateContract.validateFinalExecutionGate(fixture.gate);
    return Object.freeze({
      id: fixture.id,
      expectedOk: fixture.expectedOk,
      ok: validation.ok,
      executionAllowed: validation.executionAllowed,
      failures: validation.failures
    });
  });
}

module.exports = Object.freeze({
  fixtures,
  buildBaseGate,
  runFinalExecutionGateFixtures
});
