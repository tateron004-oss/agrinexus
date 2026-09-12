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

const docName = "NEXUS_SPRINT_C39_PRODUCT_OWNER_APPROVAL_FOR_CONTROLLED_AGRICULTURE_RUNTIME_ACTIVATION.md";
const qaName = "nexus-sprint-c39-product-owner-approval-controlled-agriculture-runtime-activation-qa.js";

assert(exists("docs", docName), "Sprint C39 product-owner approval doc must exist.");
assert(exists("scripts", qaName), "Sprint C39 product-owner approval QA must exist.");

const doc = read("docs", docName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Current HEAD: `e2833f3931458ff19bcef76785332b8afeab15d9`",
  "Sprint C38",
  "Ron/product ownership now approves continuing beyond the C38 decision boundary",
  "controlled, flag-gated, review-only, source-backed agriculture preview behavior",
  "This approval does not authorize autonomous execution",
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp sending",
  "SMS sending",
  "Telegram sending",
  "email sending",
  "payments",
  "purchases",
  "marketplace transactions",
  "location sharing",
  "camera access",
  "image capture",
  "medical workflows",
  "pharmacy workflows",
  "emergency routing",
  "backend writes",
  "pending agent actions",
  "Activation must remain disabled by default",
  "Any runtime-visible behavior must be protected by an explicit feature flag",
  "Standard User safety must remain intact",
  "Browser validation is required for any runtime-visible change",
  "Rollback Strategy",
  "Sprint C40 Readiness Recommendation"
], "Sprint C39 approval doc");

assertIncludes(doc, [
  "NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED",
  "When the flag is off, Standard User behavior must remain unchanged.",
  "review-only",
  "Evidence & Verification",
  "no-live-lookup",
  "no-network",
  "no-execution"
], "Sprint C39 activation guardrails and C40 bridge");

assert(
  !doc.includes("authorizes autonomous execution"),
  "Sprint C39 doc must not accidentally authorize autonomous execution."
);

const alias = "qa:nexus-sprint-c39-product-owner-approval-controlled-agriculture-runtime-activation";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C39 QA.");

console.log("[nexus-sprint-c39-product-owner-approval-controlled-agriculture-runtime-activation-qa] passed");
