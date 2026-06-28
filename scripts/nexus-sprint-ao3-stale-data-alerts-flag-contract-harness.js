const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeStaleDataAlertsFeatureFlagState,
  isStaleDataAlertsVisibleFeatureEnabled,
  PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS
} = require("../public/nexus-stale-data-alerts-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "stale-data-alerts-feature-flags.json");

const protectedFields = Array.from(PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS);

function loadStaleDataAlertsFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function expandFixtureInput(input = {}) {
  const expanded = { ...input };
  if (expanded.unsafeAuthorityAttempt === true) {
    for (const field of protectedFields) {
      expanded[field] = true;
    }
    delete expanded.unsafeAuthorityAttempt;
  }
  return expanded;
}

function validateStaleDataAlertsFlagFixtures(fixtures = loadStaleDataAlertsFlagFixtures()) {
  if (!Array.isArray(fixtures)) {
    return { ok: false, count: 0, failures: ["fixture root must be an array"] };
  }

  const failures = [];
  fixtures.forEach((fixture, index) => {
    const label = fixture && fixture.fixtureId ? fixture.fixtureId : `fixture-${index}`;
    const normalized = normalizeStaleDataAlertsFeatureFlagState(expandFixtureInput(fixture && fixture.input));
    const visible = isStaleDataAlertsVisibleFeatureEnabled(normalized);
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
  const result = validateStaleDataAlertsFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-ao3-stale-data-alerts-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-ao3-stale-data-alerts-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadStaleDataAlertsFlagFixtures,
  expandFixtureInput,
  validateStaleDataAlertsFlagFixtures
};
