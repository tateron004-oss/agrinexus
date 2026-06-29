const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-5-workforce-jobs-support.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-5-workforce-jobs-support.js");
  const doc = read("docs", "NEXUS_A100_5_WORKFORCE_JOBS_SUPPORT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-5-workforce-jobs-support.js"), "A100-5 module must exist.");
  assert(exists("docs", "NEXUS_A100_5_WORKFORCE_JOBS_SUPPORT.md"), "A100-5 documentation must exist.");
  assert(exists("scripts", "nexus-a100-5-workforce-jobs-support-qa.js"), "A100-5 QA must exist.");
  if (5 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint5Artifact",
    "isSafeA100Sprint5Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-5 source must include ${term}.`));

  [
    "Workforce and Jobs Support",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-5 documentation must include ${term}.`));

  [
    "nexus-a100-5-workforce-jobs-support",
    "createA100Sprint5Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-5 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-5 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-5 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-5 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-5-workforce-jobs-support"], "node scripts/nexus-a100-5-workforce-jobs-support-qa.js", "A100-5 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-5-workforce-jobs-support-qa.js"), "A100-5 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint5Artifact({ prompt: "Prepare skills support.", lane: "skills" });
    assert.equal(sprint.isSafeA100Sprint5Artifact(artifact), true, "skills artifact must be safe.");
    assert.equal(artifact.lane, "skills", "skills lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "skills must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "skills must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "skills must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "skills must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint5Artifact({ prompt: "Prepare role support.", lane: "role" });
    assert.equal(sprint.isSafeA100Sprint5Artifact(artifact), true, "role artifact must be safe.");
    assert.equal(artifact.lane, "role", "role lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "role must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "role must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "role must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "role must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint5Artifact({ prompt: "Prepare application support.", lane: "application" });
    assert.equal(sprint.isSafeA100Sprint5Artifact(artifact), true, "application artifact must be safe.");
    assert.equal(artifact.lane, "application", "application lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "application must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "application must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "application must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "application must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint5Artifact({ prompt: "Prepare interview support.", lane: "interview" });
    assert.equal(sprint.isSafeA100Sprint5Artifact(artifact), true, "interview artifact must be safe.");
    assert.equal(artifact.lane, "interview", "interview lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "interview must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "interview must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "interview must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "interview must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint5Artifact({ prompt: "Prepare shift support.", lane: "shift" });
    assert.equal(sprint.isSafeA100Sprint5Artifact(artifact), true, "shift artifact must be safe.");
    assert.equal(artifact.lane, "shift", "shift lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "shift must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "shift must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "shift must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "shift must not prompt browser permissions.");
  }
}

function runA100Sprint5Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-5",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-5-workforce-jobs-support-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint5Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint5Qa
});
