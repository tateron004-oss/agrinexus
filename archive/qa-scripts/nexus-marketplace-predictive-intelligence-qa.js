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
  "Marketplace & Trade Predictive Intelligence Modeler",
  "data-nexus-marketplace-predictive-modeler",
  "Nexus, help me sell maize to a buyer.",
  "Nexus, predict transaction risk.",
  "Nexus, create a buyer summary.",
  "Nexus, show marketplace reasoning trace.",
  "Nexus, show marketplace expert checklist.",
  "Nexus, show marketplace predictive receipts.",
  "buyer readiness",
  "seller readiness",
  "product listing completeness",
  "transaction readiness",
  "trust/verification gaps",
  "needs_verification",
  "Transaction readiness signal"
].forEach(token => includes(app, token, `marketplace predictive frontend ${token}`));

[
  "/api/nexus/marketplace-predictive/status",
  "/api/nexus/marketplace-predictive/evaluate",
  "/api/nexus/marketplace-predictive/summary",
  "/api/nexus/marketplace-predictive/scenarios",
  "/api/nexus/marketplace-predictive/checklist",
  "mode === \"marketplace\"",
  "Nexus did not contact buyers or sellers, process payment, execute a transaction, arrange delivery, or claim trade acceptance.",
  "noExternalExecutionAuthorized: true"
].forEach(token => includes(server, token, `marketplace predictive backend ${token}`));

[
  "buyer contacted successfully",
  "seller contacted successfully",
  "payment processed successfully",
  "transaction completed successfully",
  "trade acceptance confirmed"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe marketplace claim ${token}`));

assert.strictEqual(packageJson.scripts["qa:nexus-marketplace-predictive-intelligence"], "node scripts/nexus-marketplace-predictive-intelligence-qa.js");
includes(qaSuite, "scripts/nexus-marketplace-predictive-intelligence-qa.js", "qa-suite marketplace wiring");
console.log("Nexus marketplace predictive intelligence QA passed.");
