const identityContract = require("../public/nexus-contact-provider-identity-contract.js");

const REQUIRED_CHANNELS = identityContract.BLOCKED_IDENTITY_CHANNELS;

function buildBaseIdentityCandidate(overrides = {}) {
  return Object.assign({
    identityCandidateId: "contact-provider-identity-preview",
    sourceSurface: "local-safe-fixture",
    requestedActionType: "identity-preview",
    entityType: "contact",
    displayName: "Visible Candidate",
    candidateSummary: "Possible identity candidate shown for review only",
    evidenceSummary: "Matched user phrase to a visible label",
    confidenceTier: "medium",
    riskTier: "high",
    language: "en",
    ambiguityState: "single-candidate",
    missingInformationState: "none",
    permissionState: "not-required",
    consentState: "not-required",
    auditState: "ready",
    finalExecutionGateState: "ready",
    identityResolutionOnly: true,
    approvalIntentOnly: true,
    finalExecutionGateRequired: true,
    executionAuthority: false,
    providerDispatchAllowed: false,
    providerHandoffAllowed: false,
    communicationAllowed: false,
    externalNavigationAllowed: false,
    nativeBridgeAllowed: false,
    networkAllowed: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    blockedIdentityChannels: REQUIRED_CHANNELS,
    limitations: "Identity preview only; no contact or provider is contacted"
  }, overrides);
}

const fixtures = Object.freeze([
  ["contact-candidate-preview", true, { entityType: "contact", confidenceTier: "medium" }],
  ["provider-candidate-preview", true, { entityType: "provider", confidenceTier: "medium" }],
  ["role-candidate-preview", true, { entityType: "role", confidenceTier: "low", ambiguityState: "role-needs-resolution" }],
  ["marketplace-party-candidate-preview", true, { entityType: "marketplace-party", riskTier: "high" }],
  ["healthcare-provider-candidate-preview", true, { entityType: "healthcare-provider", riskTier: "high" }],
  ["pharmacy-provider-candidate-preview", true, { entityType: "pharmacy-provider", riskTier: "high" }],
  ["emergency-contact-candidate-preview", true, { entityType: "emergency-contact", riskTier: "restricted" }],
  ["transportation-provider-candidate-preview", true, { entityType: "transportation-provider", riskTier: "high" }],
  ["ambiguous-identity-candidate", true, { confidenceTier: "ambiguous", ambiguityState: "multiple-candidates" }],
  ["missing-identity-candidate", true, { entityType: "unknown", confidenceTier: "missing", missingInformationState: "target-missing" }],
  ["unsupported-entity-type", false, { entityType: "bank-account" }],
  ["unsupported-confidence-tier", false, { confidenceTier: "certain" }],
  ["missing-permission-state", false, { permissionState: "missing" }],
  ["missing-consent-state", false, { consentState: "missing" }],
  ["missing-audit-state", false, { auditState: "missing" }],
  ["missing-final-execution-gate", false, { finalExecutionGateState: "missing" }],
  ["execution-authority-escalation", false, { executionAuthority: true }],
  ["provider-dispatch-escalation", false, { providerDispatchAllowed: true }],
  ["provider-handoff-escalation", false, { providerHandoffAllowed: true }],
  ["communication-escalation", false, { communicationAllowed: true }],
  ["external-navigation-escalation", false, { externalNavigationAllowed: true }],
  ["native-bridge-escalation", false, { nativeBridgeAllowed: true }],
  ["network-escalation", false, { networkAllowed: true }],
  ["storage-write-escalation", false, { storageWriteAllowed: true }],
  ["backend-write-escalation", false, { backendWriteAllowed: true }],
  ["incomplete-blocked-identity-channels", false, { blockedIdentityChannels: ["call"] }]
].map(([fixtureId, expectedOk, overrides]) => Object.freeze({
  fixtureId,
  expectedOk,
  identityCandidate: buildBaseIdentityCandidate(overrides)
})));

function runContactProviderIdentityFixtures() {
  return fixtures.map(fixture => {
    const validation = identityContract.validateContactProviderIdentityCandidate(fixture.identityCandidate);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      expectedOk: fixture.expectedOk,
      ok: validation.ok,
      identityPreviewAllowed: validation.identityPreviewAllowed,
      executionAllowed: validation.executionAllowed,
      failures: validation.failures
    });
  });
}

module.exports = Object.freeze({
  REQUIRED_CHANNELS,
  fixtures,
  buildBaseIdentityCandidate,
  runContactProviderIdentityFixtures
});
