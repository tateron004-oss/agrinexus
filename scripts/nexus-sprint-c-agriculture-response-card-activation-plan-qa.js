const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C_CONTROLLED_AGRICULTURE_RESPONSE_CARD_ACTIVATION_PLAN.md"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c-agriculture-response-card-activation-plan-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(files).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = fs.readFileSync(files.doc, "utf8");
const pkg = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");

[
  "NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED",
  "Default behavior remains safe and inert",
  "Flag-Off Behavior",
  "Flag-On Behavior",
  "Manual Standard User Browser Validation Expectations",
  "executionAuthority: false",
  "no provider handoff",
  "no pending action creation",
  "no route auto-open",
  "no modal auto-open",
  "no confirmation prompt for execution"
].forEach(required => assert(doc.includes(required), `activation plan must include: ${required}`));

[
  "calls",
  "SMS",
  "WhatsApp",
  "Telegram",
  "email",
  "location sharing",
  "camera",
  "payment",
  "purchase",
  "buy",
  "sell",
  "provider handoff",
  "external navigation",
  "emergency"
].forEach(required => assert(doc.toLowerCase().includes(required.toLowerCase()), `activation plan must block or discuss: ${required}`));

[
  "Help me with crop issues",
  "Teach me how irrigation works",
  "Help me find agriculture training",
  "What should I check if my crops are yellowing",
  "How do I prepare soil for planting",
  "Call my farmer",
  "Send this on WhatsApp",
  "Buy fertilizer",
  "Use my location",
  "Take a picture of this plant",
  "Book an appointment",
  "Pay for seeds",
  "This is an emergency"
].forEach(prompt => assert(doc.includes(prompt), `manual validation prompt must be documented: ${prompt}`));

const alias = "qa:nexus-sprint-c-agriculture-response-card-plan";
const script = "node scripts/nexus-sprint-c-agriculture-response-card-activation-plan-qa.js";
assert(pkg.scripts && pkg.scripts[alias] === script, `${alias} package script must run the Sprint C activation plan QA.`);
assert(qaSuite.includes("scripts/nexus-sprint-c-agriculture-response-card-activation-plan-qa.js"), "qa-suite must include Sprint C activation plan QA.");

console.log("[nexus-sprint-c-agriculture-response-card-activation-plan-qa] passed");
