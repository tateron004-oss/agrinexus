const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeTaskPlanningFeatureFlagState,
  isTaskPlanningVisibleFeatureEnabled
} = require("../public/nexus-task-planning-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "task-planning-feature-flags.json");

const protectedFields = [
  "planReviewAllowed",
  "stagedPlanPreviewAllowed",
  "plannerRuntimeAllowed",
  "livePlannerReplacementAllowed",
  "executablePlanStepsAllowed",
  "automaticStepChainingAllowed",
  "providerExecutionFromPlansAllowed",
  "rawAdapterCallsAllowed",
  "implicitPermissionAllowed",
  "autonomousHighRiskStepsAllowed",
  "planBasedRouteMutationAllowed",
  "riskTierDowngradeAllowed",
  "providerSelectionFromPlanAllowed",
  "toolSelectionFromPlanAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserPlannerMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

function loadTaskPlanningFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateTaskPlanningFlagFixtures(fixtures = loadTaskPlanningFlagFixtures()) {
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
    const normalized = normalizeTaskPlanningFeatureFlagState(fixture && fixture.input);
    const visible = isTaskPlanningVisibleFeatureEnabled(normalized);
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
  const result = validateTaskPlanningFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-n3-task-planning-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-n3-task-planning-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadTaskPlanningFlagFixtures,
  validateTaskPlanningFlagFixtures
};
