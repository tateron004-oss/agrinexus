const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-4-learning-training-support.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-4-learning-training-support.js");
  const doc = read("docs", "NEXUS_A100_4_LEARNING_TRAINING_SUPPORT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-4-learning-training-support.js"), "A100-4 module must exist.");
  assert(exists("docs", "NEXUS_A100_4_LEARNING_TRAINING_SUPPORT.md"), "A100-4 documentation must exist.");
  assert(exists("scripts", "nexus-a100-4-learning-training-support-qa.js"), "A100-4 QA must exist.");
  if (4 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint4Artifact",
    "isSafeA100Sprint4Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-4 source must include ${term}.`));

  [
    "Learning and Training Support",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-4 documentation must include ${term}.`));

  [
    "nexus-a100-4-learning-training-support",
    "createA100Sprint4Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-4 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-4 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-4 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-4 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-4-learning-training-support"], "node scripts/nexus-a100-4-learning-training-support-qa.js", "A100-4 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-4-learning-training-support-qa.js"), "A100-4 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint4Artifact({ prompt: "Prepare course support.", lane: "course" });
    assert.equal(sprint.isSafeA100Sprint4Artifact(artifact), true, "course artifact must be safe.");
    assert.equal(artifact.lane, "course", "course lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "course must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "course must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "course must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "course must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint4Artifact({ prompt: "Prepare lesson support.", lane: "lesson" });
    assert.equal(sprint.isSafeA100Sprint4Artifact(artifact), true, "lesson artifact must be safe.");
    assert.equal(artifact.lane, "lesson", "lesson lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "lesson must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "lesson must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "lesson must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "lesson must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint4Artifact({ prompt: "Prepare quiz support.", lane: "quiz" });
    assert.equal(sprint.isSafeA100Sprint4Artifact(artifact), true, "quiz artifact must be safe.");
    assert.equal(artifact.lane, "quiz", "quiz lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "quiz must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "quiz must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "quiz must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "quiz must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint4Artifact({ prompt: "Prepare certificate support.", lane: "certificate" });
    assert.equal(sprint.isSafeA100Sprint4Artifact(artifact), true, "certificate artifact must be safe.");
    assert.equal(artifact.lane, "certificate", "certificate lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "certificate must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "certificate must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "certificate must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "certificate must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint4Artifact({ prompt: "Prepare readiness support.", lane: "readiness" });
    assert.equal(sprint.isSafeA100Sprint4Artifact(artifact), true, "readiness artifact must be safe.");
    assert.equal(artifact.lane, "readiness", "readiness lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "readiness must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "readiness must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "readiness must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "readiness must not prompt browser permissions.");
  }
}

function runA100Sprint4Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-4",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-4-learning-training-support-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint4Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint4Qa
});
