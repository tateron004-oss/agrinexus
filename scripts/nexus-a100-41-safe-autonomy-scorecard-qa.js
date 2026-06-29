const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-41-safe-autonomy-scorecard.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-41-safe-autonomy-scorecard.js");
  const doc = read("docs", "NEXUS_A100_41_SAFE_AUTONOMY_SCORECARD.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-41-safe-autonomy-scorecard.js"), "A100-41 module must exist.");
  assert(exists("docs", "NEXUS_A100_41_SAFE_AUTONOMY_SCORECARD.md"), "A100-41 documentation must exist.");
  assert(exists("scripts", "nexus-a100-41-safe-autonomy-scorecard-qa.js"), "A100-41 QA must exist.");
  if (41 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint41Artifact",
    "isSafeA100Sprint41Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-41 source must include ${term}.`));

  [
    "Safe Autonomy Scorecard",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-41 documentation must include ${term}.`));

  [
    "nexus-a100-41-safe-autonomy-scorecard",
    "createA100Sprint41Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-41 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-41 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-41 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-41 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-41-safe-autonomy-scorecard"], "node scripts/nexus-a100-41-safe-autonomy-scorecard-qa.js", "A100-41 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-41-safe-autonomy-scorecard-qa.js"), "A100-41 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint41Artifact({ prompt: "Prepare lane support.", lane: "lane" });
    assert.equal(sprint.isSafeA100Sprint41Artifact(artifact), true, "lane artifact must be safe.");
    assert.equal(artifact.lane, "lane", "lane lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "lane must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "lane must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "lane must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "lane must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint41Artifact({ prompt: "Prepare score support.", lane: "score" });
    assert.equal(sprint.isSafeA100Sprint41Artifact(artifact), true, "score artifact must be safe.");
    assert.equal(artifact.lane, "score", "score lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "score must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "score must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "score must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "score must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint41Artifact({ prompt: "Prepare gate support.", lane: "gate" });
    assert.equal(sprint.isSafeA100Sprint41Artifact(artifact), true, "gate artifact must be safe.");
    assert.equal(artifact.lane, "gate", "gate lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "gate must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "gate must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "gate must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "gate must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint41Artifact({ prompt: "Prepare risk support.", lane: "risk" });
    assert.equal(sprint.isSafeA100Sprint41Artifact(artifact), true, "risk artifact must be safe.");
    assert.equal(artifact.lane, "risk", "risk lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "risk must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "risk must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "risk must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "risk must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint41Artifact({ prompt: "Prepare evidence support.", lane: "evidence" });
    assert.equal(sprint.isSafeA100Sprint41Artifact(artifact), true, "evidence artifact must be safe.");
    assert.equal(artifact.lane, "evidence", "evidence lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "evidence must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "evidence must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "evidence must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "evidence must not prompt browser permissions.");
  }
}

function runA100Sprint41Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-41",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-41-safe-autonomy-scorecard-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint41Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint41Qa
});
