const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeApprovalIntentConfirmation,
  validateApprovalIntentConfirmation
} = require("../public/nexus-confirmation-contract.js");

const root = path.resolve(__dirname, "..");
const fixturePath = path.join(root, "fixtures", "nexus", "confirmations.json");

function loadConfirmationFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function validateConfirmationFixtures(confirmations = loadConfirmationFixtures()) {
  if (!Array.isArray(confirmations)) {
    return {
      ok: false,
      count: 0,
      failures: ["fixture root must be an array"]
    };
  }

  const failures = [];
  confirmations.forEach((confirmation, index) => {
    const validation = validateApprovalIntentConfirmation(confirmation);
    if (!validation.ok) {
      failures.push(`fixture ${index} (${confirmation && confirmation.confirmationId ? confirmation.confirmationId : "unknown"}) failed: ${validation.failures.join("; ")}`);
    }

    if (!isSafeApprovalIntentConfirmation(confirmation)) {
      failures.push(`fixture ${index} did not pass safe approval-intent confirmation check`);
    }
  });

  return {
    ok: failures.length === 0,
    count: confirmations.length,
    failures
  };
}

if (require.main === module) {
  const result = validateConfirmationFixtures();
  if (!result.ok) {
    console.error("[nexus-sprint-e3-confirmation-harness] failed");
    result.failures.forEach(failure => console.error(`- ${failure}`));
    process.exit(1);
  }

  console.log(`[nexus-sprint-e3-confirmation-harness] passed (${result.count} fixtures)`);
}

module.exports = {
  fixturePath,
  loadConfirmationFixtures,
  validateConfirmationFixtures
};
