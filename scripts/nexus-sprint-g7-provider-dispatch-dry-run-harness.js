const dryRunContract = require("../public/nexus-provider-dispatch-dry-run-contract.js");

const REQUIRED_CHANNELS = dryRunContract.BLOCKED_DISPATCH_CHANNELS;

function buildBaseDryRun(overrides = {}) {
  return Object.assign({
    dryRunId: "dry-run-provider-review",
    providerType: "communications-provider",
    providerDisplayName: "Provider Dispatch Dry Run",
    actionType: "provider-dispatch-review",
    targetSummary: "Review a provider dispatch candidate without contacting anyone",
    purposeSummary: "Validate provider dispatch readiness only",
    riskTier: "high",
    finalGateId: "gate-provider-dispatch-review",
    finalGateSatisfied: true,
    permissionState: "satisfied",
    consentState: "satisfied",
    auditState: "ready",
    providerAvailabilityState: "available",
    userApprovalState: "approved",
    dryRunOnly: true,
    executionAuthority: false,
    dispatchAllowed: false,
    networkAllowed: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    reversalOrCancelPath: "Cancel before provider dispatch",
    blockedDispatchChannels: REQUIRED_CHANNELS,
    limitations: "Dry-run only; no provider is contacted"
  }, overrides);
}

const fixtures = Object.freeze([
  Object.freeze({
    fixtureId: "complete-provider-dispatch-review",
    expectedOk: true,
    dryRun: buildBaseDryRun()
  }),
  Object.freeze({
    fixtureId: "missing-final-gate",
    expectedOk: false,
    dryRun: buildBaseDryRun({ finalGateSatisfied: false })
  }),
  Object.freeze({
    fixtureId: "missing-permission",
    expectedOk: false,
    dryRun: buildBaseDryRun({ permissionState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-consent",
    expectedOk: false,
    dryRun: buildBaseDryRun({ consentState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-audit",
    expectedOk: false,
    dryRun: buildBaseDryRun({ auditState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-provider-availability",
    expectedOk: false,
    dryRun: buildBaseDryRun({ providerAvailabilityState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-user-approval",
    expectedOk: false,
    dryRun: buildBaseDryRun({ userApprovalState: "missing" })
  }),
  Object.freeze({
    fixtureId: "dispatch-authority-escalation",
    expectedOk: false,
    dryRun: buildBaseDryRun({ dispatchAllowed: true })
  }),
  Object.freeze({
    fixtureId: "network-escalation",
    expectedOk: false,
    dryRun: buildBaseDryRun({ networkAllowed: true })
  }),
  Object.freeze({
    fixtureId: "storage-escalation",
    expectedOk: false,
    dryRun: buildBaseDryRun({ storageWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "backend-write-escalation",
    expectedOk: false,
    dryRun: buildBaseDryRun({ backendWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "incomplete-blocked-dispatch-channels",
    expectedOk: false,
    dryRun: buildBaseDryRun({ blockedDispatchChannels: ["call"] })
  })
]);

function runProviderDispatchDryRunFixtures() {
  return fixtures.map(fixture => {
    const validation = dryRunContract.validateProviderDispatchDryRun(fixture.dryRun);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      expectedOk: fixture.expectedOk,
      ok: validation.ok,
      dispatchAllowed: validation.dispatchAllowed,
      executionAllowed: validation.executionAllowed,
      failures: validation.failures
    });
  });
}

module.exports = Object.freeze({
  REQUIRED_CHANNELS,
  fixtures,
  buildBaseDryRun,
  runProviderDispatchDryRunFixtures
});
