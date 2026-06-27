const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeConsentCenterFeatureFlagState,
  isConsentCenterVisibleFeatureEnabled
} = require("../public/nexus-consent-center-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "consent-center-feature-flags.json");

function loadConsentCenterFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateConsentCenterFlagFixtures(fixtures = loadConsentCenterFlagFixtures()) {
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
    const normalized = normalizeConsentCenterFeatureFlagState(fixture && fixture.input);
    const visible = isConsentCenterVisibleFeatureEnabled(normalized);
    const expected = fixture && fixture.expected ? fixture.expected : {};

    for (const [field, expectedValue] of Object.entries(expected)) {
      const actualValue = field === "isVisible" ? visible : normalized[field];
      if (actualValue !== expectedValue) {
        failures.push(`${label} expected ${field}=${expectedValue} but received ${actualValue}`);
      }
    }

    for (const field of [
      "consentPersistenceAllowed",
      "consentRevocationAllowed",
      "auditWriteAllowed",
      "providerHandoffAllowed",
      "permissionPromptAllowed",
      "backendWriteAllowed",
      "storageWriteAllowed",
      "networkAllowed",
      "executionAuthority"
    ]) {
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
  const result = validateConsentCenterFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-h3-consent-center-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-h3-consent-center-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  loadConsentCenterFlagFixtures,
  validateConsentCenterFlagFixtures
};
