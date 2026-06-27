const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeAdvancedIntentUnderstandingFeatureFlagState,
  isAdvancedIntentUnderstandingVisibleFeatureEnabled
} = require("../public/nexus-advanced-intent-understanding-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "advanced-intent-understanding-feature-flags.json");

const protectedFields = [
  "classifierContextAllowed",
  "classifierRuntimeAllowed",
  "liveClassifierReplacementAllowed",
  "automaticRouteChangesAllowed",
  "hiddenRiskDowngradeAllowed",
  "confidenceRiskDowngradeAllowed",
  "providerSelectionAllowed",
  "toolSelectionAllowed",
  "plannerActionCreationAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "rawAdapterCallsAllowed",
  "implicitPermissionAllowed",
  "firstTurnExecutionAllowed",
  "standardUserClassifierMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

function loadAdvancedIntentUnderstandingFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateAdvancedIntentUnderstandingFlagFixtures(fixtures = loadAdvancedIntentUnderstandingFlagFixtures()) {
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
    const normalized = normalizeAdvancedIntentUnderstandingFeatureFlagState(fixture && fixture.input);
    const visible = isAdvancedIntentUnderstandingVisibleFeatureEnabled(normalized);
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
  const result = validateAdvancedIntentUnderstandingFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadAdvancedIntentUnderstandingFlagFixtures,
  validateAdvancedIntentUnderstandingFlagFixtures
};
