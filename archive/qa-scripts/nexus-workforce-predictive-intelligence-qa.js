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
  "Workforce Predictive Intelligence Modeler",
  "data-nexus-workforce-predictive-modeler",
  "Nexus, help me apply for a job.",
  "Nexus, assess my job readiness.",
  "Nexus, what skills am I missing?",
  "Nexus, create a candidate summary.",
  "Nexus, show workforce reasoning trace.",
  "job-readiness signal",
  "resume completeness",
  "skill-gap detection",
  "application readiness",
  "Application readiness signal"
].forEach(token => includes(app, token, `workforce predictive frontend ${token}`));

[
  "/api/nexus/workforce-predictive/status",
  "/api/nexus/workforce-predictive/evaluate",
  "/api/nexus/workforce-predictive/summary",
  "/api/nexus/workforce-predictive/scenarios",
  "/api/nexus/workforce-predictive/checklist",
  "mode === \"workforce\"",
  "Nexus did not contact an employer, submit a job application, schedule an interview, or claim job placement.",
  "noExternalExecutionAuthorized: true"
].forEach(token => includes(server, token, `workforce predictive backend ${token}`));

[
  "employer contacted successfully",
  "job application submitted successfully",
  "interview scheduled successfully",
  "job placement confirmed",
  "resume sent successfully"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe workforce claim ${token}`));

assert.strictEqual(packageJson.scripts["qa:nexus-workforce-predictive-intelligence"], "node scripts/nexus-workforce-predictive-intelligence-qa.js");
includes(qaSuite, "scripts/nexus-workforce-predictive-intelligence-qa.js", "qa-suite workforce wiring");
console.log("Nexus workforce predictive intelligence QA passed.");
