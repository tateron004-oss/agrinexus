const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const suite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${message}`);
  }
}

function includes(source, token, message) {
  assert(source.includes(token), message);
}

[
  "nexus-readable-mission-receipt.v1",
  "nexus-mission-history-record.v1",
  "let nexusMissionHistory = [];",
  "function buildNexusReadableReceipt",
  "function buildNexusMissionHistoryRecord",
  "function upsertNexusMissionHistory",
  "function renderNexusReadableReceiptFields",
  "function renderNexusMissionHistoryPanel",
  "function handleNexusMissionHistoryAction"
].forEach(token => includes(app, token, `mission receipt/history runtime ${token}`));

[
  "User request",
  "Nexus interpretation",
  "Collected information",
  "User approval",
  "Prepared action",
  "Execution status",
  "Provider result",
  "Verification",
  "Time",
  "Follow-up",
  "Safety note",
  "Data-sharing note"
].forEach(label => includes(app, label, `readable receipt field ${label}`));

[
  "active",
  "paused",
  "completed",
  "failed",
  "queued",
  "cancelled",
  "archived"
].forEach(status => includes(app, `"${status}"`, `mission history status ${status}`));

[
  "inspect",
  "resume",
  "retry",
  "cancel",
  "archive",
  "delete"
].forEach(action => includes(app, `"${action}"`, `mission history action ${action}`));

[
  "localStorage.setItem(\"nexusMissionHistory\"",
  "localStorage.getItem(\"nexusMissionHistory\")",
  "localStorage.removeItem(\"nexusMissionHistory\")",
  "upsertNexusMissionHistory(buildNexusMissionHistoryRecord(packet, entry));"
].forEach(token => includes(app, token, `mission history persistence ${token}`));

[
  "data-nexus-mission-history-panel=\"true\"",
  "data-nexus-mission-history-card=\"true\"",
  "data-nexus-mission-history-action",
  "data-sensitive-receipt-access=\"local-browser-only\"",
  "local-browser-only-sensitive",
  "Delete is permitted only for archived or cancelled local mission records"
].forEach(token => includes(app, token, `visible/access-controlled history ${token}`));

[
  "Nexus did not send, call, pay, book, dispatch, diagnose, prescribe, share location, or contact a provider",
  "No provider lane",
  "No provider result recorded.",
  "No final external-execution approval recorded.",
  "No silent execution",
  "noSecretsIncluded: true"
].forEach(token => includes(app, token, `safe receipt boundary ${token}`));

[
  ".nexus-mission-history-panel",
  ".nexus-mission-history-counts",
  ".nexus-mission-history-list",
  ".nexus-readable-receipt-fields",
  ".nexus-mission-history-actions"
].forEach(token => includes(styles, token, `mission history styles ${token}`));

assert(
  pkg.scripts["qa:nexus-os-mission-receipts-history"] === "node scripts/nexus-os-mission-receipts-history-qa.js",
  "package alias exists"
);
assert(suite.includes("scripts/nexus-os-mission-receipts-history-qa.js"), "safe QA suite includes Rail 13 QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS mission receipts and history QA passed.");
