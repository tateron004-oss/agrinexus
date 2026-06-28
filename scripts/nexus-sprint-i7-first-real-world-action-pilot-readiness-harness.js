const pilotContract = require("../public/nexus-first-real-world-action-pilot-readiness-contract.js");

const REQUIRED_CHANNELS = pilotContract.BLOCKED_ACTION_CHANNELS;

function buildBasePilotReadiness(overrides = {}) {
  return Object.assign({
    pilotReadinessId: "first-real-world-action-pilot-review",
    pilotName: "First Real-World Action Pilot Readiness",
    actionCategory: "provider-preparation",
    actionType: "real-world-action-readiness-review",
    targetSummary: "Verified target preview only",
    purposeSummary: "Validate first pilot readiness without executing anything",
    riskTier: "high",
    sourceSurface: "local-safe-fixture",
    language: "en",
    identityState: "validated",
    recipientResolutionState: "resolved",
    providerReadinessState: "available",
    finalGateState: "satisfied",
    permissionState: "satisfied",
    consentState: "satisfied",
    auditState: "ready",
    dryRunState: "validated",
    reversalOrCancelState: "ready",
    userApprovalState: "approved",
    pilotReadinessOnly: true,
    executionAuthority: false,
    executionAllowed: false,
    providerDispatchAllowed: false,
    providerHandoffAllowed: false,
    externalNavigationAllowed: false,
    nativeBridgeAllowed: false,
    networkAllowed: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    blockedActionChannels: REQUIRED_CHANNELS,
    limitations: "Readiness-only fixture; no real-world action is performed"
  }, overrides);
}

const fixtures = Object.freeze([
  Object.freeze({
    fixtureId: "complete-first-real-world-action-pilot-review",
    expectedOk: true,
    pilotReadiness: buildBasePilotReadiness()
  }),
  Object.freeze({
    fixtureId: "missing-identity",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ identityState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-recipient-resolution",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ recipientResolutionState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-provider-readiness",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ providerReadinessState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-final-gate",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ finalGateState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-permission",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ permissionState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-consent",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ consentState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-audit",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ auditState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-dry-run",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ dryRunState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-reversal-or-cancel-path",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ reversalOrCancelState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-user-approval",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ userApprovalState: "missing" })
  }),
  Object.freeze({
    fixtureId: "execution-authority-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ executionAuthority: true })
  }),
  Object.freeze({
    fixtureId: "provider-dispatch-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ providerDispatchAllowed: true })
  }),
  Object.freeze({
    fixtureId: "provider-handoff-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ providerHandoffAllowed: true })
  }),
  Object.freeze({
    fixtureId: "external-navigation-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ externalNavigationAllowed: true })
  }),
  Object.freeze({
    fixtureId: "native-bridge-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ nativeBridgeAllowed: true })
  }),
  Object.freeze({
    fixtureId: "network-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ networkAllowed: true })
  }),
  Object.freeze({
    fixtureId: "storage-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ storageWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "backend-write-escalation",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ backendWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "incomplete-blocked-action-channels",
    expectedOk: false,
    pilotReadiness: buildBasePilotReadiness({ blockedActionChannels: ["call"] })
  })
]);

function runFirstRealWorldActionPilotReadinessFixtures() {
  return fixtures.map(fixture => {
    const validation = pilotContract.validateFirstRealWorldActionPilotReadiness(fixture.pilotReadiness);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      expectedOk: fixture.expectedOk,
      ok: validation.ok,
      executionAllowed: validation.executionAllowed,
      pilotAllowed: validation.pilotAllowed,
      failures: validation.failures
    });
  });
}

module.exports = Object.freeze({
  REQUIRED_CHANNELS,
  fixtures,
  buildBasePilotReadiness,
  runFirstRealWorldActionPilotReadinessFixtures
});
