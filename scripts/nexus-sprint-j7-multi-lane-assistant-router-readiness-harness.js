const routerContract = require("../public/nexus-multi-lane-assistant-router-readiness-contract.js");

const REQUIRED_CHANNELS = routerContract.BLOCKED_ROUTER_CHANNELS;

function buildBaseRouterReadiness(overrides = {}) {
  return Object.assign({
    routerReadinessId: "multi-lane-router-readiness-review",
    routerName: "Multi-Lane Assistant Router Readiness",
    sourceSurface: "local-safe-fixture",
    inputSummary: "Review a user request without routing it live",
    primaryLane: "agriculture-support",
    candidateLanes: ["agriculture-support", "learning-support"],
    riskTier: "low",
    language: "en",
    intentConfidenceState: "ready",
    policyState: "satisfied",
    permissionState: "satisfied",
    consentState: "satisfied",
    auditState: "ready",
    finalGateState: "satisfied",
    dryRunState: "validated",
    fallbackState: "ready",
    routerReadinessOnly: true,
    routingAuthority: false,
    executionAuthority: false,
    runtimeRoutingAllowed: false,
    providerDispatchAllowed: false,
    providerHandoffAllowed: false,
    externalNavigationAllowed: false,
    nativeBridgeAllowed: false,
    networkAllowed: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    blockedRouterChannels: REQUIRED_CHANNELS,
    limitations: "Readiness-only fixture; no runtime route is selected"
  }, overrides);
}

const fixtures = Object.freeze([
  Object.freeze({
    fixtureId: "complete-agriculture-support-router-readiness",
    expectedOk: true,
    routerReadiness: buildBaseRouterReadiness()
  }),
  Object.freeze({
    fixtureId: "complete-health-access-info-router-readiness",
    expectedOk: true,
    routerReadiness: buildBaseRouterReadiness({
      primaryLane: "health-access-info",
      candidateLanes: ["health-access-info", "map-location-permission-info"],
      riskTier: "medium",
      inputSummary: "Review health access information without opening care workflows"
    })
  }),
  Object.freeze({
    fixtureId: "complete-communications-preparation-router-readiness",
    expectedOk: true,
    routerReadiness: buildBaseRouterReadiness({
      primaryLane: "communications-preparation",
      candidateLanes: ["communications-preparation", "provider-handoff-readiness"],
      riskTier: "high",
      inputSummary: "Review communication preparation without provider handoff"
    })
  }),
  Object.freeze({
    fixtureId: "unsupported-primary-lane",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ primaryLane: "payments" })
  }),
  Object.freeze({
    fixtureId: "unsupported-candidate-lane",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ candidateLanes: ["agriculture-support", "payments"] })
  }),
  Object.freeze({
    fixtureId: "missing-intent-confidence",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ intentConfidenceState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-policy",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ policyState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-permission",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ permissionState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-consent",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ consentState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-audit",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ auditState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-final-gate",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ finalGateState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-dry-run",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ dryRunState: "missing" })
  }),
  Object.freeze({
    fixtureId: "missing-fallback",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ fallbackState: "missing" })
  }),
  Object.freeze({
    fixtureId: "routing-authority-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ routingAuthority: true })
  }),
  Object.freeze({
    fixtureId: "runtime-routing-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ runtimeRoutingAllowed: true })
  }),
  Object.freeze({
    fixtureId: "execution-authority-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ executionAuthority: true })
  }),
  Object.freeze({
    fixtureId: "provider-dispatch-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ providerDispatchAllowed: true })
  }),
  Object.freeze({
    fixtureId: "provider-handoff-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ providerHandoffAllowed: true })
  }),
  Object.freeze({
    fixtureId: "external-navigation-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ externalNavigationAllowed: true })
  }),
  Object.freeze({
    fixtureId: "native-bridge-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ nativeBridgeAllowed: true })
  }),
  Object.freeze({
    fixtureId: "network-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ networkAllowed: true })
  }),
  Object.freeze({
    fixtureId: "storage-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ storageWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "backend-write-escalation",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ backendWriteAllowed: true })
  }),
  Object.freeze({
    fixtureId: "incomplete-blocked-router-channels",
    expectedOk: false,
    routerReadiness: buildBaseRouterReadiness({ blockedRouterChannels: ["call"] })
  })
]);

function runMultiLaneAssistantRouterReadinessFixtures() {
  return fixtures.map(fixture => {
    const validation = routerContract.validateMultiLaneAssistantRouterReadiness(fixture.routerReadiness);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      expectedOk: fixture.expectedOk,
      ok: validation.ok,
      routingAllowed: validation.routingAllowed,
      executionAllowed: validation.executionAllowed,
      failures: validation.failures
    });
  });
}

module.exports = Object.freeze({
  REQUIRED_CHANNELS,
  fixtures,
  buildBaseRouterReadiness,
  runMultiLaneAssistantRouterReadinessFixtures
});
