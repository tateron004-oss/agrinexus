const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_E1_USER_CONFIRMATION_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-e1-user-confirmation-product-boundary-qa.js";

assert(exists("docs", docName), "Sprint E1 user confirmation product boundary doc must exist.");
assert(exists("scripts", qaName), "Sprint E1 user confirmation QA script must exist.");

const doc = read("docs", docName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E1",
  "6181465816680de40702b08c32ca5ee4823fc323",
  "Sprint D closed the controlled staged action preview lane",
  "review-only staged actions",
  "User Confirmation Definition",
  "Confirmation Is Not Execution",
  "Approval Intent Is Not Provider Dispatch",
  "Allowed Confirmation Categories",
  "Disallowed Execution Categories",
  "Required Confirmation Fields",
  "approvalIntentOnly: true",
  "requiresFinalExecutionGate: true",
  "executionAuthority: false",
  "Standard User Safety Expectations",
  "No-Execution Authority",
  "No-Provider-Handoff Boundary",
  "No Call/Message/Payment/Location/Camera Boundary",
  "No Medical/Pharmacy/Emergency Boundary",
  "No Backend Write / No Real Pending Action Boundary",
  "Browser Validation Requirements",
  "Rollback Strategy",
  "Sprint E2 Readiness Recommendation"
], "E1 doc");

[
  "confirmationId",
  "relatedStagedActionId",
  "confirmationType",
  "title",
  "summary",
  "approvalIntentOnly",
  "requiresFinalExecutionGate",
  "executionAuthority",
  "riskTier",
  "riskDisclosure",
  "blockedExecutionChannels",
  "evidenceRequirement",
  "sourcePacketRequirement",
  "userFacingLanguage",
  "safeUseNotes",
  "limitations"
].forEach(field => assert(doc.includes(field), `E1 doc must list required confirmation field: ${field}`));

[
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "SMS",
  "Telegram",
  "email",
  "payments",
  "purchases",
  "marketplace transactions",
  "location sharing",
  "geolocation execution",
  "camera",
  "image capture",
  "medical",
  "pharmacy",
  "emergency routing",
  "emergency dispatch",
  "backend writes",
  "real pending actions"
].forEach(term => assert(doc.includes(term), `E1 doc must block ${term}`));

[
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "console warning/error count",
  "db.json"
].forEach(term => assert(doc.includes(term), `E1 browser validation requirements must include ${term}`));

const alias = "qa:nexus-sprint-e1-user-confirmation-product-boundary";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E1 user confirmation QA.");
assert(qaSuite.includes("scripts/nexus-sprint-d8-controlled-staged-action-preview-closeout-qa.js"), "E1 requires D8 QA to remain in qa-suite.");

console.log("[nexus-sprint-e1-user-confirmation-product-boundary-qa] passed");
