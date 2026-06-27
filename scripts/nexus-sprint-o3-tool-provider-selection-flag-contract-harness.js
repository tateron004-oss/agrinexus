const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeToolProviderSelectionFeatureFlagState,
  isToolProviderSelectionVisibleFeatureEnabled
} = require("../public/nexus-tool-provider-selection-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "tool-provider-selection-feature-flags.json");

const protectedFields = [
  "selectionReviewAllowed",
  "providerPathPreviewAllowed",
  "selectionRuntimeAllowed",
  "liveSelectionEngineAllowed",
  "rawAdapterCallsAllowed",
  "providerCallsFromRawIntentAllowed",
  "silentProviderHandoffAllowed",
  "automaticConnectorExecutionAllowed",
  "providerCredentialUseAllowed",
  "paymentProviderSelectionAllowed",
  "regulatedProviderExecutionAllowed",
  "emergencyProviderDispatchAllowed",
  "transportationDispatchProviderExecutionAllowed",
  "communicationProviderExecutionAllowed",
  "locationCameraProviderActivationAllowed",
  "selectedToolIdRouteMutationAllowed",
  "selectedToolIdRiskMutationAllowed",
  "selectedToolIdProviderHandoffAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserSelectionMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

function loadToolProviderSelectionFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateToolProviderSelectionFlagFixtures(fixtures = loadToolProviderSelectionFlagFixtures()) {
  if (!Array.isArray(fixtures)) {
    return {
      ok: false,
      count: 0,
      failures: ["fixture root must be an array"]
    };
  }

  const failures = [];
  fixtures.forEach((fixture, index) => {
    const label = fixture && fixture.fixtureId ? fixture.fixtureId : `fixture-${index}`;
    const normalized = normalizeToolProviderSelectionFeatureFlagState(fixture && fixture.input);
    const visible = isToolProviderSelectionVisibleFeatureEnabled(normalized);
    const expected = fixture && fixture.expected ? fixture.expected : {};

    for (const [field, expectedValue] of Object.entries(expected)) {
      const actualValue = field === "isVisible" ? visible : normalized[field];
      if (actualValue !== expectedValue) {
        failures.push(`${label} expected ${field}=${expectedValue} but received ${actualValue}`);
      }
    }

    for (const field of protectedFields) {
      if (normalized[field] !== false) {
        failures.push(`${label} must keep ${field}=false`);
      }
    }

    if (normalized.noExecution !== true) {
      failures.push(`${label} must keep noExecution=true`);
    }
  });

  return {
    ok: failures.length === 0,
    count: fixtures.length,
    failures
  };
}

if (require.main === module) {
  const result = validateToolProviderSelectionFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-o3-tool-provider-selection-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-o3-tool-provider-selection-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadToolProviderSelectionFlagFixtures,
  validateToolProviderSelectionFlagFixtures
};
