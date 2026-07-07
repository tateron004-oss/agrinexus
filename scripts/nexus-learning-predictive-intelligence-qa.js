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
  "Learning Predictive Intelligence Modeler",
  "data-nexus-learning-predictive-modeler",
  "Nexus, build a learning plan.",
  "Nexus, assess my learning readiness.",
  "Nexus, predict my course completion risk.",
  "Nexus, create a learning plan summary.",
  "Nexus, show learning reasoning trace.",
  "learner readiness",
  "skill-gap prediction",
  "course pathway fit",
  "completion risk",
  "Learning pathway fit signal"
].forEach(token => includes(app, token, `learning predictive frontend ${token}`));

[
  "/api/nexus/learning-predictive/status",
  "/api/nexus/learning-predictive/evaluate",
  "/api/nexus/learning-predictive/summary",
  "/api/nexus/learning-predictive/scenarios",
  "/api/nexus/learning-predictive/checklist",
  "mode === \"learning\"",
  "Nexus did not enroll the learner, issue certification, contact an instructor, or claim course completion.",
  "noExternalExecutionAuthorized: true"
].forEach(token => includes(server, token, `learning predictive backend ${token}`));

[
  "course enrolled successfully",
  "certificate issued successfully",
  "instructor contacted successfully",
  "course completed successfully",
  "LMS enrollment completed"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe learning claim ${token}`));

assert.strictEqual(packageJson.scripts["qa:nexus-learning-predictive-intelligence"], "node scripts/nexus-learning-predictive-intelligence-qa.js");
includes(qaSuite, "scripts/nexus-learning-predictive-intelligence-qa.js", "qa-suite learning wiring");
console.log("Nexus learning predictive intelligence QA passed.");
