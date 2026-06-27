const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeMultilingualIntelligenceFeatureFlagState,
  isMultilingualIntelligenceVisibleFeatureEnabled
} = require("../public/nexus-multilingual-intelligence-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "multilingual-intelligence-feature-flags.json");

const protectedFields = [
  "languageReviewAllowed",
  "localizedResponsePreviewAllowed",
  "sourceTraceLanguageReviewAllowed",
  "languageRuntimeAllowed",
  "liveTranslationProviderAllowed",
  "automaticLanguageSwitchingAllowed",
  "clinicalInterpretationClaimAllowed",
  "medicalTranslationCertificationClaimAllowed",
  "providerExecutionFromLanguageSwitchAllowed",
  "callMessageExecutionFromLanguageSwitchAllowed",
  "paymentExecutionFromLanguageSwitchAllowed",
  "regulatedTranslationExecutionAllowed",
  "emergencyDispatchTranslationAllowed",
  "locationCameraActivationFromLanguageSwitchAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserLanguageEngineMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

function loadMultilingualIntelligenceFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateMultilingualIntelligenceFlagFixtures(fixtures = loadMultilingualIntelligenceFlagFixtures()) {
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
    const normalized = normalizeMultilingualIntelligenceFeatureFlagState(fixture && fixture.input);
    const visible = isMultilingualIntelligenceVisibleFeatureEnabled(normalized);
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
  const result = validateMultilingualIntelligenceFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-r3-multilingual-intelligence-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-r3-multilingual-intelligence-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadMultilingualIntelligenceFlagFixtures,
  validateMultilingualIntelligenceFlagFixtures
};
