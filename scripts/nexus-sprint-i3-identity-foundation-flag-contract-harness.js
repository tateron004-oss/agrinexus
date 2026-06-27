const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeIdentityFoundationFeatureFlagState,
  isIdentityFoundationVisibleFeatureEnabled
} = require("../public/nexus-identity-foundation-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "identity-foundation-feature-flags.json");

const protectedFields = [
  "identityContextAllowed",
  "accountContextAllowed",
  "roleContextAllowed",
  "identityVerificationAllowed",
  "identityDocumentCollectionAllowed",
  "identityDocumentSharingAllowed",
  "profileMutationAllowed",
  "accountMutationAllowed",
  "accountLoginAllowed",
  "passwordResetAllowed",
  "roleElevationAllowed",
  "credentialUseAllowed",
  "providerAuthorizationAllowed",
  "patientAuthorizationAllowed",
  "paymentAuthorizationAllowed",
  "emergencyContactSharingAllowed",
  "permissionPromptAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "executionAuthority"
];

function loadIdentityFoundationFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateIdentityFoundationFlagFixtures(fixtures = loadIdentityFoundationFlagFixtures()) {
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
    const normalized = normalizeIdentityFoundationFeatureFlagState(fixture && fixture.input);
    const visible = isIdentityFoundationVisibleFeatureEnabled(normalized);
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
  const result = validateIdentityFoundationFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-i3-identity-foundation-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-i3-identity-foundation-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadIdentityFoundationFlagFixtures,
  validateIdentityFoundationFlagFixtures
};
