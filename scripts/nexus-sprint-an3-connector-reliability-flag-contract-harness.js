const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeConnectorReliabilityFeatureFlagState,
  isConnectorReliabilityVisibleFeatureEnabled,
  PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS
} = require("../public/nexus-connector-reliability-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "connector-reliability-feature-flags.json");

const protectedFields = Array.from(PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS);

function loadConnectorReliabilityFlagFixtures() {
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

function validateConnectorReliabilityFlagFixtures(fixtures = loadConnectorReliabilityFlagFixtures()) {
  if (!Array.isArray(fixtures)) {
    return { ok: false, count: 0, failures: ["fixture root must be an array"] };
  }

  const failures = [];
  fixtures.forEach((fixture, index) => {
    const label = fixture && fixture.fixtureId ? fixture.fixtureId : `fixture-${index}`;
    const normalized = normalizeConnectorReliabilityFeatureFlagState(expandFixtureInput(fixture && fixture.input));
    const visible = isConnectorReliabilityVisibleFeatureEnabled(normalized);
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
  const result = validateConnectorReliabilityFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-an3-connector-reliability-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-an3-connector-reliability-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadConnectorReliabilityFlagFixtures,
  expandFixtureInput,
  validateConnectorReliabilityFlagFixtures
};
