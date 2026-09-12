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
  "NEXUS_UNIVERSAL_CONSENT_CATEGORIES",
  "function nexusUniversalConsentRequirements",
  "function nexusUniversalActionReviewForWorkflow",
  "function renderNexusUniversalActionReviewLayer",
  "nexus-universal-action-review.v1"
].forEach(token => includes(app, token, `universal confirmation runtime ${token}`));

[
  "What Nexus plans to do",
  "Destination or recipient",
  "Data being shared",
  "Provider or channel",
  "Known cost",
  "Known fee",
  "Known risk",
  "Reversible",
  "Execution is live",
  "Execution is local",
  "Will queue",
  "Provider unavailable"
].forEach(token => includes(app, token, `required action review field ${token}`));

[
  "Health-data sharing",
  "Provider handoff",
  "Communications",
  "Payments",
  "Applications",
  "Referrals",
  "Sensitive persistent memory",
  "data-nexus-explicit-consent-categories=\"true\"",
  "required before external execution"
].forEach(token => includes(app, token, `explicit consent category ${token}`));

[
  "data-nexus-universal-action-review=\"approve\"",
  "data-nexus-universal-action-review=\"edit\"",
  "data-nexus-universal-action-review=\"cancel\"",
  "data-nexus-universal-action-review=\"delay\"",
  "data-nexus-universal-action-review=\"save-draft\"",
  "Approve",
  "Edit",
  "Cancel",
  "Delay",
  "Save as draft"
].forEach(token => includes(app, token, `universal review control ${token}`));

[
  "approvalIntentOnly: true",
  "finalExecutionGateRequired: true",
  "executionAuthority: false",
  "noExecutionAuthorized: true",
  "providerHandoffAllowed: false",
  "noSilentSend: true",
  "noSilentCall: true",
  "noHiddenProviderHandoff: true",
  "Approving here records approval intent only.",
  "final execution gate"
].forEach(token => includes(app, token, `no-execution confirmation boundary ${token}`));

const handlerStart = app.indexOf("const universalReviewAction = target?.closest?.(\"[data-nexus-universal-action-review]\")");
const handlerEnd = app.indexOf("const guidedMode = target?.closest?.(\"[data-nexus-guided-mode]\")");
assert(handlerStart > -1 && handlerEnd > handlerStart, "universal review click handler is placed before guided mode handler");
const handler = app.slice(handlerStart, handlerEnd);
[
  "approval_intent_recorded",
  "review_edit_requested",
  "review_cancelled",
  "review_delayed",
  "review_saved_as_draft",
  "No provider was contacted",
  "No external action",
  "noPaymentAuthorized: true",
  "noMessageSent: true",
  "noCallPlaced: true",
  "scheduleNexusActiveWorkflowFocus"
].forEach(token => includes(handler, token, `universal review handler ${token}`));

[
  "renderNexusUniversalActionReviewLayer(nexusUniversalActionReviewForWorkflow(definition, latestPacket, latestLane))",
  "data-nexus-universal-action-review-layer=\"true\"",
  "data-final-execution-gate-required=\"true\"",
  "data-no-silent-send=\"true\"",
  "data-no-silent-call=\"true\""
].forEach(token => includes(app, token, `rendered action review layer ${token}`));

[
  ".nexus-universal-action-review",
  ".nexus-universal-action-review-heading",
  ".nexus-universal-consent-list",
  ".nexus-universal-action-review-warning",
  ".nexus-universal-action-review-actions",
  "body.user-mode .nexus-universal-action-review dl {\n    grid-template-columns: 1fr;"
].forEach(token => includes(styles, token, `universal review CSS ${token}`));

assert(
  pkg.scripts["qa:nexus-os-universal-confirmation-consent"] === "node scripts/nexus-os-universal-confirmation-consent-qa.js",
  "package alias exists"
);
assert(suite.includes("scripts/nexus-os-universal-confirmation-consent-qa.js"), "safe QA suite includes Rail 11 QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS universal confirmation and consent QA passed.");
