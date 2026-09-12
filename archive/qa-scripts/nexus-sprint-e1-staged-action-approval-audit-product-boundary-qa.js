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

const docName = "NEXUS_SPRINT_E1_STAGED_ACTION_APPROVAL_AUDIT_PRODUCT_BOUNDARY.md";
const qaName = "nexus-sprint-e1-staged-action-approval-audit-product-boundary-qa.js";

assert(exists("docs", docName), "Sprint E1 product boundary doc must exist.");
assert(exists("scripts", qaName), "Sprint E1 QA script must exist.");

const doc = read("docs", docName);
const app = read("public", "app.js");
const server = read("server.js");
const index = read("public", "index.html");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint E1",
  "000508d5110c75cc3ac4cc66b027a2998058a96e",
  "documentation and deterministic QA only",
  "does not approve execution",
  "Approval readiness is not execution readiness",
  "notApprovalReady",
  "approvalPreviewOnly",
  "awaitingExplicitApproval",
  "approvalAccepted",
  "approvalRejected",
  "approvalCancelled",
  "approvalExpired",
  "approvalBlocked",
  "what Nexus is preparing",
  "what will not happen automatically",
  "no action has been taken yet",
  "auditId",
  "stagedActionId",
  "approvalEventId",
  "eventType",
  "risk tier",
  "consent state",
  "permission state",
  "redacted payload",
  "expiresAt or retention policy",
  "provider communication",
  "calls and messages",
  "payments and checkout",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR actions",
  "emergency dispatch",
  "backend writes",
  "okay",
  "sure",
  "sounds good",
  "Sprint E2 - Staged Action Approval Record Contract",
  "no-execution by default"
], "E1 boundary doc");

[
  "I already did it",
  "I contacted them",
  "I sent it",
  "I called",
  "Payment complete",
  "Location shared",
  "Camera activated",
  "Appointment booked",
  "Prescription refilled",
  "Emergency dispatched"
].forEach(unsafe => assert(doc.includes(unsafe), `E1 must explicitly prohibit unsafe copy: ${unsafe}`));

[
  "docs/NEXUS_SPRINT_D8_CONTROLLED_STAGED_ACTION_PREVIEW_CLOSEOUT.md",
  "scripts/nexus-sprint-d8-controlled-staged-action-preview-closeout-qa.js"
].forEach(relative => assert(fs.existsSync(path.join(root, relative)), `E1 requires prior D8 artifact: ${relative}`));

[
  "nexus-staged-action-approval-ui.js",
  "approvalAcceptedRuntime",
  "executeApprovedStagedAction",
  "dispatchApprovedStagedAction",
  "openApprovedProvider",
  "createApprovalAuditRecord"
].forEach(forbidden => {
  assert(!index.includes(forbidden), `index must not load future Sprint E approval runtime: ${forbidden}`);
  assert(!app.includes(forbidden), `app must not implement future Sprint E approval runtime: ${forbidden}`);
  assert(!server.includes(forbidden), `server must not implement future Sprint E approval runtime: ${forbidden}`);
});

const alias = "qa:nexus-sprint-e1-staged-action-approval-audit-product-boundary";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint E1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-d8-controlled-staged-action-preview-closeout-qa.js"), "E1 requires D8 QA to remain in qa-suite.");

console.log("[nexus-sprint-e1-staged-action-approval-audit-product-boundary-qa] passed");
