const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReviewOnlyStagedAction,
  validateReviewOnlyStagedAction
} = require("../public/nexus-staged-action-contract.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "staged-actions.json");

function loadStagedActionFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateStagedActionFixtures(actions = loadStagedActionFixtures()) {
  if (!Array.isArray(actions)) {
    return {
      ok: false,
      count: 0,
      failures: ["fixture root must be an array"]
    };
  }

  const failures = [];
  actions.forEach((action, index) => {
    const validation = validateReviewOnlyStagedAction(action);
    if (!validation.ok) {
      failures.push(`fixture ${index} (${action && action.stagedActionId ? action.stagedActionId : "unknown"}) failed: ${validation.failures.join("; ")}`);
    }

    if (!isSafeReviewOnlyStagedAction(action)) {
      failures.push(`fixture ${index} did not pass safe review-only staged action check`);
    }
  });

  return {
    ok: failures.length === 0,
    count: actions.length,
    failures
  };
}

if (require.main === module) {
  const result = validateStagedActionFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-d3-staged-action-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-d3-staged-action-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  loadStagedActionFixtures,
  validateStagedActionFixtures
};
