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
  for (const term of terms) assert(source.includes(term), `${label} must include: ${term}`);
}

const docName = "NEXUS_SPRINT_F7_FINAL_EXECUTION_GATE_FIXTURE_HARNESS.md";
const harnessName = "nexus-sprint-f7-final-execution-gate-harness.js";
const qaName = "nexus-sprint-f7-final-execution-gate-harness-qa.js";

assert(exists("docs", docName), "F7 doc must exist.");
assert(exists("scripts", harnessName), "F7 harness must exist.");
assert(exists("scripts", qaName), "F7 QA must exist.");

const doc = read("docs", docName);
const harnessSource = read("scripts", harnessName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const app = read("public", "app.js");
const index = read("public", "index.html");
const server = read("server.js");
const harness = require(path.join(root, "scripts", harnessName));

assertIncludes(doc, [
  "Sprint F7",
  "Final Execution Gate Fixture Harness",
  "fixture-only",
  "executionAuthority: false",
  "never return execution permission",
  "fail closed",
  "complete low-risk review gate",
  "missing final gate satisfaction",
  "missing permission state",
  "missing audit state",
  "missing provider state",
  "missing reversal or cancel path",
  "incomplete blocked execution channels",
  "attempted execution-authority escalation",
  "not imported by `public/index.html`, `public/app.js`, or `server.js`"
], "F7 doc");

assert.equal(typeof harness.runFinalExecutionGateFixtures, "function", "F7 harness must export runner.");
assert.equal(typeof harness.buildBaseGate, "function", "F7 harness must export base gate builder.");
assert(Array.isArray(harness.fixtures), "F7 harness must export fixtures.");
assert(harness.fixtures.length >= 8, "F7 harness must include representative fixtures.");

const results = harness.runFinalExecutionGateFixtures();
assert.equal(results.length, harness.fixtures.length, "F7 result count must match fixtures.");
for (const result of results) {
  assert.equal(result.ok, result.expectedOk, `${result.id} must match expected validation result.`);
  assert.equal(result.executionAllowed, false, `${result.id} must never allow execution.`);
}

[
  "complete-low-risk-review",
  "missing-final-satisfaction",
  "missing-permission",
  "missing-audit",
  "missing-provider",
  "missing-reversal",
  "incomplete-blocked-channels",
  "execution-authority-escalation"
].forEach(id => assert(harnessSource.includes(id), `F7 harness must include fixture: ${id}`));

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "writeFile",
  "appendFile"
].forEach(term => assert(!harnessSource.includes(term), `F7 harness must not include side effect API: ${term}`));

assert(!index.includes(harnessName), "F7 harness must not be loaded by index.html.");
assert(!app.includes(harnessName), "F7 harness must not be loaded by app.js.");
assert(!server.includes(harnessName), "F7 harness must not be loaded by server.js.");

const alias = "qa:nexus-sprint-f7-final-execution-gate-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include F7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-f6-final-execution-gate-contract-qa.js"), "F7 requires F6 QA to remain in qa-suite.");

console.log("[nexus-sprint-f7-final-execution-gate-harness-qa] passed");
