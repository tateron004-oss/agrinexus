const fs = require("node:fs");
const path = require("node:path");
const {
  normalizePersonalizationFeatureFlagState,
  isPersonalizationVisibleFeatureEnabled
} = require("../public/nexus-personalization-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "personalization-feature-flags.json");

const protectedFields = [
  "preferenceContextAllowed",
  "preferenceEngineAllowed",
  "automaticPersonalizationAllowed",
  "hiddenPersonalizationAllowed",
  "preferencePersistenceAllowed",
  "preferenceSyncAllowed",
  "preferenceMutationAllowed",
  "profileDerivedExecutionAllowed",
  "providerHandoffAllowed",
  "riskTierMutationAllowed",
  "standardUserPreferenceMutationAllowed",
  "permissionPromptAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

function loadPersonalizationFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validatePersonalizationFlagFixtures(fixtures = loadPersonalizationFlagFixtures()) {
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
    const normalized = normalizePersonalizationFeatureFlagState(fixture && fixture.input);
    const visible = isPersonalizationVisibleFeatureEnabled(normalized);
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
  const result = validatePersonalizationFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-k3-personalization-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-k3-personalization-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadPersonalizationFlagFixtures,
  validatePersonalizationFlagFixtures
};
