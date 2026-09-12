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
  "Drone & Field Operations Predictive Intelligence Modeler",
  "data-nexus-drone-predictive-modeler",
  "Nexus, prepare a drone field mission.",
  "Nexus, assess drone mission readiness.",
  "Nexus, predict field operation risk.",
  "Nexus, create a drone mission summary.",
  "Nexus, show drone reasoning trace.",
  "mission readiness",
  "field-operation risk",
  "equipment-readiness gaps",
  "approval/review requirement",
  "Drone mission readiness signal"
].forEach(token => includes(app, token, `drone predictive frontend ${token}`));

[
  "/api/nexus/drone-predictive/status",
  "/api/nexus/drone-predictive/evaluate",
  "/api/nexus/drone-predictive/summary",
  "/api/nexus/drone-predictive/scenarios",
  "/api/nexus/drone-predictive/checklist",
  "mode === \"drone\"",
  "Nexus did not dispatch a drone, retrieve live weather, analyze imagery, or claim regulatory approval.",
  "noExternalExecutionAuthorized: true"
].forEach(token => includes(server, token, `drone predictive backend ${token}`));

[
  "drone dispatched successfully",
  "live imagery analyzed successfully",
  "weather retrieved successfully",
  "regulatory approval confirmed",
  "flight launched successfully"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe drone claim ${token}`));

assert.strictEqual(packageJson.scripts["qa:nexus-drone-predictive-intelligence"], "node scripts/nexus-drone-predictive-intelligence-qa.js");
includes(qaSuite, "scripts/nexus-drone-predictive-intelligence-qa.js", "qa-suite drone wiring");
console.log("Nexus drone predictive intelligence QA passed.");
