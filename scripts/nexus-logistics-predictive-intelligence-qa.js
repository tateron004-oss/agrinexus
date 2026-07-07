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
  "Logistics Predictive Intelligence Modeler",
  "data-nexus-logistics-predictive-modeler",
  "Nexus, track this shipment.",
  "Nexus, predict delivery risk.",
  "Nexus, simulate what happens if the shipment is delayed two days.",
  "Nexus, create a shipment summary.",
  "Nexus, show logistics reasoning trace.",
  "shipment readiness",
  "route-risk assessment",
  "delivery delay risk",
  "cold-chain risk",
  "Shipment readiness and route risk signal"
].forEach(token => includes(app, token, `logistics predictive frontend ${token}`));

[
  "/api/nexus/logistics-predictive/status",
  "/api/nexus/logistics-predictive/evaluate",
  "/api/nexus/logistics-predictive/summary",
  "/api/nexus/logistics-predictive/scenarios",
  "/api/nexus/logistics-predictive/checklist",
  "mode === \"logistics\"",
  "Nexus did not run live tracking, calculate a fake provider route, contact a carrier, or update a shipment externally.",
  "noFakeProviderExecution: true"
].forEach(token => includes(server, token, `logistics predictive backend ${token}`));

[
  "carrier contacted successfully",
  "shipment updated externally",
  "live tracking completed",
  "delivery booked successfully",
  "route provider executed successfully"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe logistics claim ${token}`));

assert.strictEqual(packageJson.scripts["qa:nexus-logistics-predictive-intelligence"], "node scripts/nexus-logistics-predictive-intelligence-qa.js");
includes(qaSuite, "scripts/nexus-logistics-predictive-intelligence-qa.js", "qa-suite logistics wiring");
console.log("Nexus logistics predictive intelligence QA passed.");
