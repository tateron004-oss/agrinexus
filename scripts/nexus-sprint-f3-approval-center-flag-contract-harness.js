const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeApprovalCenterFeatureFlagState,
  isApprovalCenterVisibleFeatureEnabled
} = require("../public/nexus-approval-center-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "approval-center-feature-flags.json");

function loadApprovalCenterFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateApprovalCenterFlagFixtures(fixtures = loadApprovalCenterFlagFixtures()) {
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
    const normalized = normalizeApprovalCenterFeatureFlagState(fixture && fixture.input);
    const visible = isApprovalCenterVisibleFeatureEnabled(normalized);
    const expected = fixture && fixture.expected ? fixture.expected : {};

    for (const [field, expectedValue] of Object.entries(expected)) {
      const actualValue = field === "isVisible" ? visible : normalized[field];
      if (actualValue !== expectedValue) {
        failures.push(`${label} expected ${field}=${expectedValue} but received ${actualValue}`);
      }
    }

    for (const field of [
      "approvalPersistenceAllowed",
      "auditWriteAllowed",
      "providerHandoffAllowed",
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
  const result = validateApprovalCenterFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-f3-approval-center-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-f3-approval-center-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  loadApprovalCenterFlagFixtures,
  validateApprovalCenterFlagFixtures
};
