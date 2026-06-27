const fs = require("node:fs");
const path = require("node:path");
const {
  normalizeOrchestrationEngineFeatureFlagState,
  isOrchestrationEngineVisibleFeatureEnabled
} = require("../public/nexus-orchestration-engine-feature-flag.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "orchestration-engine-feature-flags.json");

const protectedFields = [
  "orchestrationReviewAllowed",
  "orchestrationTracePreviewAllowed",
  "orchestrationRuntimeAllowed",
  "liveOrchestrationEngineAllowed",
  "executableStepsAllowed",
  "automaticStepChainingAllowed",
  "backgroundExecutionAllowed",
  "providerAdapterExecutionAllowed",
  "rawAdapterCallsAllowed",
  "silentProviderHandoffAllowed",
  "autonomousHighRiskOrchestrationAllowed",
  "orchestrationFromRawIntentAllowed",
  "planBasedOrchestrationExecutionAllowed",
  "selectedToolIdOrchestrationExecutionAllowed",
  "contextBasedOrchestrationExecutionAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserOrchestrationMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

function loadOrchestrationEngineFlagFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateOrchestrationEngineFlagFixtures(fixtures = loadOrchestrationEngineFlagFixtures()) {
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
    const normalized = normalizeOrchestrationEngineFeatureFlagState(fixture && fixture.input);
    const visible = isOrchestrationEngineVisibleFeatureEnabled(normalized);
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
  const result = validateOrchestrationEngineFlagFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-p3-orchestration-engine-flag-contract-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-p3-orchestration-engine-flag-contract-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  protectedFields,
  loadOrchestrationEngineFlagFixtures,
  validateOrchestrationEngineFlagFixtures
};
