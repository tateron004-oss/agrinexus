const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const doc = read("docs/NEXUS_GLOBAL_REVIEW_QUEUE_AUDIT_SYSTEM.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected to find ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect to find ${needle}`);
}

const activationVerification = spawnSync(process.execPath, ["scripts/nexus-activation-verification-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(
  activationVerification.status,
  0,
  `activation verification QA should pass before global review/queue/audit QA\n${activationVerification.stdout}\n${activationVerification.stderr}`
);

[
  "queued_action_packet",
  "review_queue_packet",
  "audit_event_packet",
  "outcome_record_packet",
  "failed_action_packet",
  "nexusGlobalReviewQueueAuditSummary",
  "renderNexusGlobalReviewQueueAuditSystem",
  "handleNexusGlobalReviewQueueAuditClick",
  "data-testid=\"nexus-global-review-queue-audit-system\"",
  "data-testid=\"nexus-global-review-prepared-count\"",
  "data-testid=\"nexus-global-review-waiting-count\"",
  "data-testid=\"nexus-global-review-queued-count\"",
  "data-testid=\"nexus-global-review-failed-count\"",
  "data-testid=\"nexus-global-review-blocked-count\"",
  "data-testid=\"nexus-global-review-audit-count\"",
  "data-testid=\"nexus-global-review-state-definitions\"",
  "data-testid=\"nexus-global-review-storage-mode\"",
  "data-testid=\"nexus-global-review-safe-retry-policy\"",
  "data-testid=\"nexus-global-review-export-policy\"",
  "data-nexus-global-review-action=\"show-queued\"",
  "data-nexus-global-review-action=\"show-failed\"",
  "data-nexus-global-review-action=\"show-outcomes\"",
  "data-nexus-global-review-action=\"export-review-audit\"",
  "nexus_global_outcome_records_listed",
  "nexus_global_review_audit_export_prepared",
  "noUnsafeRetryAuthorized: true",
  "noExecutionAuthorized: true",
  "noSecretsExposed: true",
  "secretsIncluded: false",
  "showNexusQueuedActions",
  "showNexusFailedActions"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  ".nexus-global-review-audit-panel",
  ".nexus-global-review-audit-grid",
  ".nexus-global-review-audit-actions",
  ".nexus-global-review-audit-notes"
].forEach(token => includes(styles, token, `styles should include ${token}`));

[
  "Nexus Global Review, Queue, Audit, and Outcome System",
  "Prepared",
  "Waiting for confirmation",
  "Queued",
  "Confirmed",
  "Sent/executed",
  "Failed",
  "Blocked",
  "Cancelled",
  "`queued_action_packet`",
  "`review_queue_packet`",
  "`audit_event_packet`",
  "`outcome_record_packet`",
  "`failed_action_packet`",
  "show queued",
  "show failed / blocked",
  "show outcomes",
  "export review/audit packet",
  "Retry controls are safe only",
  "must not"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "silent retry allowed",
  "confirmation bypass",
  "secret value:",
  "api key value:",
  "provider contacted automatically",
  "vendor contacted automatically",
  "payment completed automatically",
  "dispatch completed automatically",
  "emergency dispatched automatically",
  "location shared automatically"
].forEach(phrase => {
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-review-queue-audit"],
  "node scripts/nexus-global-review-queue-audit-qa.js",
  "package script should expose global review/queue/audit QA"
);
includes(qaSuite, "scripts/nexus-global-review-queue-audit-qa.js", "qa suite should include global review/queue/audit QA");

console.log("nexus-global-review-queue-audit QA passed");
