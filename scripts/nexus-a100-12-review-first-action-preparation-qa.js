const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-12-review-first-action-preparation.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-12-review-first-action-preparation.js");
  const doc = read("docs", "NEXUS_A100_12_REVIEW_FIRST_ACTION_PREPARATION.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-12-review-first-action-preparation.js"), "A100-12 module must exist.");
  assert(exists("docs", "NEXUS_A100_12_REVIEW_FIRST_ACTION_PREPARATION.md"), "A100-12 documentation must exist.");
  assert(exists("scripts", "nexus-a100-12-review-first-action-preparation-qa.js"), "A100-12 QA must exist.");
  if (12 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint12Artifact",
    "isSafeA100Sprint12Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-12 source must include ${term}.`));

  [
    "Review-First Action Preparation",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-12 documentation must include ${term}.`));

  [
    "nexus-a100-12-review-first-action-preparation",
    "createA100Sprint12Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-12 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-12 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-12 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "httpRequest(",
    "writeFileSync",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "window.open",
    "providerHandoffAllowed: true",
    "canExecute: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `A100-12 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-12-review-first-action-preparation"], "node scripts/nexus-a100-12-review-first-action-preparation-qa.js", "A100-12 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-12-review-first-action-preparation-qa.js"), "A100-12 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint12Artifact({ prompt: "Prepare draft support.", lane: "draft" });
    assert.equal(sprint.isSafeA100Sprint12Artifact(artifact), true, "draft artifact must be safe.");
    assert.equal(artifact.lane, "draft", "draft lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "draft must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "draft must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "draft must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "draft must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint12Artifact({ prompt: "Prepare checklist support.", lane: "checklist" });
    assert.equal(sprint.isSafeA100Sprint12Artifact(artifact), true, "checklist artifact must be safe.");
    assert.equal(artifact.lane, "checklist", "checklist lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "checklist must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "checklist must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "checklist must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "checklist must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint12Artifact({ prompt: "Prepare review support.", lane: "review" });
    assert.equal(sprint.isSafeA100Sprint12Artifact(artifact), true, "review artifact must be safe.");
    assert.equal(artifact.lane, "review", "review lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "review must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "review must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "review must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "review must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint12Artifact({ prompt: "Prepare confirmation support.", lane: "confirmation" });
    assert.equal(sprint.isSafeA100Sprint12Artifact(artifact), true, "confirmation artifact must be safe.");
    assert.equal(artifact.lane, "confirmation", "confirmation lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "confirmation must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "confirmation must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "confirmation must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "confirmation must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint12Artifact({ prompt: "Prepare audit support.", lane: "audit" });
    assert.equal(sprint.isSafeA100Sprint12Artifact(artifact), true, "audit artifact must be safe.");
    assert.equal(artifact.lane, "audit", "audit lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "audit must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "audit must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "audit must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "audit must not prompt browser permissions.");
  }
}

function runA100Sprint12Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-12",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-12-review-first-action-preparation-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint12Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint12Qa
});
