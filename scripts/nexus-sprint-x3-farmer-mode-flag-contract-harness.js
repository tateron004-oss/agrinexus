const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeFarmerModeFeatureFlagState,
  isFarmerModeVisibleFeatureEnabled,
  PROTECTED_FARMER_MODE_FLAG_FIELDS
} = require("../public/nexus-farmer-mode-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "farmer-mode-feature-flags.json");

const protectedFields = Array.from(PROTECTED_FARMER_MODE_FLAG_FIELDS);

function loadFarmerModeFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateFarmerModeFlagFixtures(fixtures = loadFarmerModeFlagFixtures()) {
  if (!Array.isArray(fixtures)) {
    return { ok: false, count: 0, failures: ["fixture root must be an array"] };
  }

  const failures = [];
  fixtures.forEach((fixture, index) => {
    const label = fixture && fixture.fixtureId ? fixture.fixtureId : `fixture-${index}`;
    const normalized = normalizeFarmerModeFeatureFlagState(fixture && fixture.input);
    const visible = isFarmerModeVisibleFeatureEnabled(normalized);
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

  return { ok: failures.length === 0, count: fixtures.length, failures };
}

if (require.main === module) {
  const result = validateFarmerModeFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-x3-farmer-mode-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-x3-farmer-mode-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadFarmerModeFlagFixtures,
  validateFarmerModeFlagFixtures
};
