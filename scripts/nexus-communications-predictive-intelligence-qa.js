const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts/qa-suite.js"), "utf8");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "Communications Predictive Intelligence Modeler",
  "data-nexus-communications-predictive-modeler",
  "Nexus, prepare a message to a provider.",
  "Nexus, assess this message before sending.",
  "Nexus, predict communication risk.",
  "Nexus, create a communication summary.",
  "Nexus, show communication reasoning trace.",
  "message readiness",
  "recipient/contact completeness",
  "outreach risk",
  "confirmation requirement",
  "Message readiness signal"
].forEach(token => includes(app, token, `communications predictive frontend ${token}`));

[
  "/api/nexus/communications-predictive/status",
  "/api/nexus/communications-predictive/evaluate",
  "/api/nexus/communications-predictive/summary",
  "/api/nexus/communications-predictive/scenarios",
  "/api/nexus/communications-predictive/checklist",
  "mode === \"communications\"",
  "Nexus did not send a message, place a call, execute WhatsApp, send email, or contact anyone externally.",
  "noExternalExecutionAuthorized: true"
].forEach(token => includes(server, token, `communications predictive backend ${token}`));

[
  "message sent successfully",
  "call placed successfully",
  "WhatsApp sent successfully",
  "email sent successfully",
  "provider contacted successfully"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe communications claim ${token}`));

assert.strictEqual(packageJson.scripts["qa:nexus-communications-predictive-intelligence"], "node scripts/nexus-communications-predictive-intelligence-qa.js");
includes(qaSuite, "scripts/nexus-communications-predictive-intelligence-qa.js", "qa-suite communications wiring");
console.log("Nexus communications predictive intelligence QA passed.");
