const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeRuralHealthModeFeatureFlagState,
  isRuralHealthModeVisibleFeatureEnabled,
  PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS
} = require("../public/nexus-rural-health-mode-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "rural-health-mode-feature-flags.json");

const protectedFields = Array.from(PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS);

function loadRuralHealthModeFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateRuralHealthModeFlagFixtures(fixtures = loadRuralHealthModeFlagFixtures()) {
  if (!Array.isArray(fixtures)) {
    return { ok: false, count: 0, failures: ["fixture root must be an array"] };
  }

  const failures = [];
  fixtures.forEach((fixture, index) => {
    const label = fixture && fixture.fixtureId ? fixture.fixtureId : `fixture-${index}`;
    const normalized = normalizeRuralHealthModeFeatureFlagState(fixture && fixture.input);
    const visible = isRuralHealthModeVisibleFeatureEnabled(normalized);
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
  const result = validateRuralHealthModeFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-y3-rural-health-mode-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-y3-rural-health-mode-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadRuralHealthModeFlagFixtures,
  validateRuralHealthModeFlagFixtures
};
