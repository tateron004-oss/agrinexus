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

const docName = "NEXUS_SPRINT_C44_CONTROLLED_AGRICULTURE_PREVIEW_CLOSEOUT_AND_SPRINT_D_READINESS.md";
const qaName = "nexus-sprint-c44-controlled-agriculture-preview-closeout-readiness-qa.js";

assert(exists("docs", docName), "Sprint C44 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint C44 QA script must exist.");

const doc = read("docs", docName);
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const moduleSource = read("public", "nexus-agriculture-support-response-card.js");

assertIncludes(doc, [
  "Sprint C44",
  "8673f09aa22651dc5cf2fb44d612fce208198729",
  "6372c83c2c72f0b42290f410f8f30022c08f98d9",
  "283ac7e4d67bf6b6dd6454c561bd23da0ec3ce01",
  "7371d200a798421a0a17b085d6c918d6b9b5e6b5",
  "b4dbc475a191fc7c9b173fc168d4ffbe27740f92",
  "NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED",
  "setSourceBackedAgriculturePreviewValidationEnabled(true)",
  "Standard User default behavior remains unchanged",
  "No-Execution Guarantees",
  "Evidence and Verification",
  "Browser Validation Status",
  "human/local browser main-world validation remains a follow-up",
  "Sprint D Readiness",
  "Do Not Activate Yet",
  "no execution authority"
], "C44 closeout doc");

[
  "calls or provider contact",
  "messages, WhatsApp, Telegram, SMS, or email",
  "buying, selling, payments, checkout",
  "camera, image upload, microphone, location",
  "medical, pharmacy, prescription",
  "emergency, poisoning",
  "pesticide or chemical dose/rate instructions"
].forEach(term => assert(doc.includes(term), `C44 excluded scope must include ${term}`));

[
  "renders no buttons",
  "renders no links",
  "creates no pending action",
  "performs no provider handoff",
  "performs no network or live lookup",
  "performs no backend write",
  "performs no storage write",
  "performs no external navigation",
  "requests no permissions"
].forEach(term => assert(doc.includes(term), `C44 no-execution guarantee must include ${term}`));

assert(moduleSource.includes("buildSourceBackedAgriculturePreviewCard"), "C44 must close out an implemented source-backed preview builder.");
assert(moduleSource.includes("renderSourceBackedAgriculturePreviewCard"), "C44 must close out an implemented source-backed preview renderer.");
assert(moduleSource.includes("data-nexus-source-backed-agriculture-preview-card"), "C44 must close out the source-backed preview DOM marker.");
assert(moduleSource.includes("No action has been taken."), "C44 protected module must preserve no-action disclosure.");

const alias = "qa:nexus-sprint-c44-controlled-agriculture-preview-closeout-readiness";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint C44 QA.");

console.log("[nexus-sprint-c44-controlled-agriculture-preview-closeout-readiness-qa] passed");
