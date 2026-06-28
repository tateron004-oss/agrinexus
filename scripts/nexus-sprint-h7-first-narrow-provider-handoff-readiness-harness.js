const handoffContract = require("../public/nexus-first-narrow-provider-handoff-readiness-contract.js");

const REQUIRED_CHANNELS = handoffContract.BLOCKED_HANDOFF_CHANNELS;

function buildBaseHandoffReadiness(overrides = {}) {
  return Object.assign({
    handoffReadinessId: "narrow-provider-handoff-review",
    providerCategory: "communications-provider",
    providerDisplayName: "Nexus Provider Handoff Readiness Review",
    recipientDisplayName: "Verified recipient preview",
    actionType: "provider-handoff-review",
    purposeSummary: "Review whether a narrow provider handoff could be prepared later",
    riskTier: "high",
    sourceSurface: "local-safe-fixture",
    language: "en",
    userApprovalState: "approved",
    finalGateState: "satisfied",
    permissionState: "satisfied",
    consentState: "satisfied",
    auditState: "ready",
    providerAvailabilityState: "available",
    dryRunState: "validated",
    handoffReadinessOnly: true,
    handoffAllowed: false,
    externalNavigationAllowed: false,
    providerApiAllowed: false,
    nativeBridgeAllowed: false,
    networkAllowed: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    executionAuthority: false,
    cancelPath: "Cancel before any provider handoff",
    blockedHandoffChannels: REQUIRED_CHANNELS,
    limitations: "Readiness-only fixture; no provider is contacted"
  }, overrides);
}

const fixtures = Object.freeze([
  Object.freeze({
    fixtureId: "complete-narrow-provider-handoff-review",
    expectedOk: true,
    handoffReadiness: buildBaseHandoffReadiness()
  }),
  Object.freeze({
    fixtureId: "missing-final-gate",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ finalGateState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-permission",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ permissionState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-consent",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ consentState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-audit",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ auditState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-provider-availability",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ providerAvailabilityState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-user-approval",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ userApprovalState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-dry-run",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ dryRunState: "missing" })
  }),
  Object.freeze({
    fixtureId: "handoff-authority-escalation",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ handoffAllowed: true })
  }),
  Object.freeze({
    fixtureId: "external-navigation-escalation",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ externalNavigationAllowed: true })
  }),
  Object.freeze({
    fixtureId: "provider-api-escalation",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ providerApiAllowed: true })
  }),
  Object.freeze({
    fixtureId: "native-bridge-escalation",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ nativeBridgeAllowed: true })
  }),
  Object.freeze({
    fixtureId: "network-escalation",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ networkAllowed: true })
  }),
  Object.freeze({
    fixtureId: "storage-escalation",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ storageWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "backend-write-escalation",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ backendWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "incomplete-blocked-handoff-channels",
    expectedOk: false,
    handoffReadiness: buildBaseHandoffReadiness({ blockedHandoffChannels: ["call"] })
  })
]);

function runFirstNarrowProviderHandoffReadinessFixtures() {
  return fixtures.map(fixture => {
    const validation = handoffContract.validateProviderHandoffReadiness(fixture.handoffReadiness);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      expectedOk: fixture.expectedOk,
      ok: validation.ok,
      handoffAllowed: validation.handoffAllowed,
      executionAllowed: validation.executionAllowed,
      failures: validation.failures
    });
  });
}

module.exports = Object.freeze({
  REQUIRED_CHANNELS,
  fixtures,
  buildBaseHandoffReadiness,
  runFirstNarrowProviderHandoffReadinessFixtures
});
