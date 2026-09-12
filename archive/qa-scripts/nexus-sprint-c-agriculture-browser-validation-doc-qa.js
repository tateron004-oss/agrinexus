const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C_AGRICULTURE_RESPONSE_CARD_STANDARD_USER_BROWSER_VALIDATION.md"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c-agriculture-browser-validation-doc-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(files).forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const doc = fs.readFileSync(files.doc, "utf8");
const pkg = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");

[
  "Standard User path: Start as User",
  "nexusSprintCAgricultureCards=1",
  "hidden low-risk renderer mount point",
  "data-visible-renderer-enabled=\"false\"",
  "Flag-Off Results",
  "Flag-On Eligible Prompt Results",
  "Flag-On Excluded Prompt Results",
  "Issue Found And Fixed",
  "Safety Conclusion"
].forEach(required => assert(doc.includes(required), `browser validation doc must include: ${required}`));

[
  "Help me with crop issues",
  "Teach me how irrigation works",
  "Help me find agriculture training",
  "What should I check if my crops are yellowing?",
  "How do I prepare soil for planting?",
  "Call my farmer",
  "Send this on WhatsApp",
  "Buy fertilizer",
  "Use my location",
  "Take a picture of this plant",
  "Book an appointment",
  "Pay for seeds",
  "This is an emergency"
].forEach(prompt => assert(doc.includes(prompt), `browser validation doc must include prompt: ${prompt}`));

[
  "no provider handoff",
  "no pending action",
  "no permission prompt",
  "no payment",
  "no location",
  "no camera",
  "no dispatch",
  "no execution"
].forEach(boundary => assert(doc.toLowerCase().includes(boundary), `browser validation doc must include safety boundary: ${boundary}`));

const alias = "qa:nexus-sprint-c-agriculture-browser-validation-doc";
const script = "node scripts/nexus-sprint-c-agriculture-browser-validation-doc-qa.js";
assert(pkg.scripts && pkg.scripts[alias] === script, `${alias} package script must run browser validation doc QA.`);
assert(qaSuite.includes("scripts/nexus-sprint-c-agriculture-browser-validation-doc-qa.js"), "qa-suite must include Sprint C browser validation doc QA.");

console.log("[nexus-sprint-c-agriculture-browser-validation-doc-qa] passed");
