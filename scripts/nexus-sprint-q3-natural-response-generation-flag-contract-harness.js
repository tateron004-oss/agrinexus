const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeNaturalResponseGenerationFeatureFlagState,
  isNaturalResponseGenerationVisibleFeatureEnabled
} = require("../public/nexus-natural-response-generation-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "natural-response-generation-feature-flags.json");

const protectedFields = [
  "responseReviewAllowed",
  "plainLanguagePreviewAllowed",
  "sourceTraceReviewAllowed",
  "responseRuntimeAllowed",
  "liveResponseModelAllowed",
  "unsupportedClaimAllowed",
  "providerConnectionClaimAllowed",
  "completedActionClaimAllowed",
  "diagnosisClaimAllowed",
  "prescriptionClaimAllowed",
  "paymentCompletionClaimAllowed",
  "transactionCompletionClaimAllowed",
  "emergencyDispatchClaimAllowed",
  "locationSharingClaimAllowed",
  "callMessageSentClaimAllowed",
  "sourceRetrievalRuntimeAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserResponseGeneratorMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

function loadNaturalResponseGenerationFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateNaturalResponseGenerationFlagFixtures(fixtures = loadNaturalResponseGenerationFlagFixtures()) {
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
    const normalized = normalizeNaturalResponseGenerationFeatureFlagState(fixture && fixture.input);
    const visible = isNaturalResponseGenerationVisibleFeatureEnabled(normalized);
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
  const result = validateNaturalResponseGenerationFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-q3-natural-response-generation-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-q3-natural-response-generation-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadNaturalResponseGenerationFlagFixtures,
  validateNaturalResponseGenerationFlagFixtures
};
