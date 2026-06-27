const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  CONTROLLED_STAGED_ACTIONS_FLAG_NAME,
  isControlledStagedActionsEnabled,
  describeControlledStagedActionsFlag
} = require("../public/nexus-controlled-staged-actions-flag.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_D5_CONTROLLED_STAGED_ACTIONS_FLAG_OFF_RUNTIME_REGRESSION.md";
const moduleName = "nexus-controlled-staged-actions-flag.js";
const qaName = "nexus-sprint-d5-controlled-staged-actions-flag-off-runtime-regression-qa.js";

assert(exists("docs", docName), "Sprint D5 flag-off regression doc must exist.");
assert(exists("public", moduleName), "Sprint D5 flag module must exist.");
assert(exists("scripts", qaName), "Sprint D5 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const appSource = read("public", "app.js");
const indexSource = read("public", "index.html");
const serverSource = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(CONTROLLED_STAGED_ACTIONS_FLAG_NAME, "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED", "D5 flag name must be canonical.");

assertIncludes(doc, [
  "Sprint D5",
  "NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED",
  "defaults to false",
  "only when an explicit test-safe input",
  "Standard User runtime must remain unchanged",
  "No-Execution Guarantees",
  "Regression Boundary",
  "D1-D4 safety chain",
  "default-off preview path"
], "D5 doc");

[
  undefined,
  null,
  false,
  true,
  1,
  "true",
  {},
  [],
  { NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED: false },
  { NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED: "true" },
  { NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED: 1 }
].forEach(value => {
  assert.equal(isControlledStagedActionsEnabled(value), false, `D5 flag must remain false for ${JSON.stringify(value)}`);
});

assert.equal(
  isControlledStagedActionsEnabled({ NEXUS_CONTROLLED_STAGED_ACTIONS_ENABLED: true }),
  true,
  "D5 flag may be true only for explicit boolean true test-safe input"
);

const description = describeControlledStagedActionsFlag();
assert.equal(description.enabled, false, "D5 flag description must default disabled.");
assert.equal(description.defaultEnabled, false, "D5 flag defaultEnabled must be false.");
assert.equal(description.reviewOnly, true, "D5 flag description must be review-only.");
assert.equal(description.executionAuthority, false, "D5 flag description must grant no execution authority.");
assert.equal(description.standardUserRuntimeWired, false, "D5 flag must not be wired to Standard User runtime.");

[
  "provider handoff",
  "calls",
  "messages",
  "WhatsApp",
  "Telegram",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera",
  "medical",
  "pharmacy",
  "emergency execution",
  "backend writes",
  "pending real-world actions",
  "storage writes",
  "live lookup",
  "external navigation"
].forEach(term => assert(doc.includes(term), `D5 no-execution guarantee must document ${term}`));

[
  "nexus-controlled-staged-actions-flag.js",
  "NexusControlledStagedActionsFlag",
  "isControlledStagedActionsEnabled",
  "describeControlledStagedActionsFlag"
].forEach(term => {
  assert(!appSource.includes(term), `public/app.js must not wire D5 flag term: ${term}`);
  assert(!indexSource.includes(term), `public/index.html must not load D5 flag term: ${term}`);
  assert(!serverSource.includes(term), `server.js must not inject D5 flag term: ${term}`);
});

[
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "open(",
  "sendBeacon",
  "setItem",
  "writeFile",
  "appendFile"
].forEach(term => {
  assert(!moduleSource.includes(term), `D5 flag module must not include unsafe runtime API: ${term}`);
});

[
  "nexus-sprint-d1-controlled-action-staging-product-boundary-qa.js",
  "nexus-sprint-d2-inert-staged-action-contract-qa.js",
  "nexus-sprint-d3-staged-action-harness-qa.js",
  "nexus-sprint-d4-staged-action-evidence-accountability-mapping-qa.js"
].forEach(term => assert(qaSuite.includes(term), `D5 requires prior Sprint D safety chain in qa-suite: ${term}`));

const alias = "qa:nexus-sprint-d5-controlled-staged-actions-flag-off-runtime-regression";
const command = `node scripts/${qaName}`;
assert(packageJson.scripts && packageJson.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint D5 QA.");

console.log("[nexus-sprint-d5-controlled-staged-actions-flag-off-runtime-regression-qa] passed");
