const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C_AGRICULTURE_RESPONSE_CARD_CONTRACT.md"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c-agriculture-response-card-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(files).forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const doc = fs.readFileSync(files.doc, "utf8");
const pkg = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");

[
  "`id`",
  "`schemaVersion`",
  "`riskTier`",
  "`category`",
  "`title`",
  "`summary`",
  "`guidance`",
  "`reviewOnlyActions`",
  "`blockedActions`",
  "`sourceStatus`",
  "`executionAuthority`: `false`",
  "`providerHandoffAllowed`: `false`",
  "`pendingActionCreationAllowed`: `false`",
  "`storageSideEffectAllowed`: `false`",
  "`networkSideEffectAllowed`: `false`",
  "`routeAutoOpenAllowed`: `false`",
  "`modalAutoOpenAllowed`: `false`",
  "`confirmationPromptForExecutionAllowed`: `false`"
].forEach(required => assert(doc.includes(required), `contract must include required field/rule: ${required}`));

[
  "agentPendingAction",
  "pending communications actions",
  "pending payment actions",
  "pending marketplace actions",
  "pending health actions",
  "pending appointment actions",
  "pending location/camera actions",
  "pending provider handoffs"
].forEach(required => assert(doc.includes(required), `contract must forbid pending action creation for: ${required}`));

[
  "fetch calls",
  "external URLs",
  "window.open",
  "location.href",
  "localStorage/sessionStorage writes",
  "sendBeacon",
  "WebSocket",
  "provider SDK",
  "native bridge",
  "permission prompts"
].forEach(required => assert(doc.includes(required), `contract must forbid runtime side effect: ${required}`));

[
  "SMS",
  "WhatsApp",
  "Telegram",
  "email",
  "payment",
  "purchase",
  "buy",
  "sell",
  "location sharing",
  "camera",
  "appointment",
  "medical",
  "pharmacy",
  "telehealth",
  "emergency",
  "external navigation"
].forEach(required => assert(doc.toLowerCase().includes(required.toLowerCase()), `contract must block: ${required}`));

const alias = "qa:nexus-sprint-c-agriculture-response-card-contract";
const script = "node scripts/nexus-sprint-c-agriculture-response-card-contract-qa.js";
assert(pkg.scripts && pkg.scripts[alias] === script, `${alias} package script must run the Sprint C contract QA.`);
assert(qaSuite.includes("scripts/nexus-sprint-c-agriculture-response-card-contract-qa.js"), "qa-suite must include Sprint C contract QA.");

console.log("[nexus-sprint-c-agriculture-response-card-contract-qa] passed");
