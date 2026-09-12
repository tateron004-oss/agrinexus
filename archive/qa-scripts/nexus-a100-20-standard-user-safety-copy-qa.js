const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-20-standard-user-safety-copy.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-20-standard-user-safety-copy.js");
  const doc = read("docs", "NEXUS_A100_20_STANDARD_USER_SAFETY_COPY.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-20-standard-user-safety-copy.js"), "A100-20 module must exist.");
  assert(exists("docs", "NEXUS_A100_20_STANDARD_USER_SAFETY_COPY.md"), "A100-20 documentation must exist.");
  assert(exists("scripts", "nexus-a100-20-standard-user-safety-copy-qa.js"), "A100-20 QA must exist.");
  if (20 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint20Artifact",
    "isSafeA100Sprint20Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-20 source must include ${term}.`));

  [
    "Standard User Safety Copy",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-20 documentation must include ${term}.`));

  [
    "nexus-a100-20-standard-user-safety-copy",
    "createA100Sprint20Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-20 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-20 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-20 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-20 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-20-standard-user-safety-copy"], "node scripts/nexus-a100-20-standard-user-safety-copy-qa.js", "A100-20 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-20-standard-user-safety-copy-qa.js"), "A100-20 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint20Artifact({ prompt: "Prepare preview support.", lane: "preview" });
    assert.equal(sprint.isSafeA100Sprint20Artifact(artifact), true, "preview artifact must be safe.");
    assert.equal(artifact.lane, "preview", "preview lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "preview must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "preview must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "preview must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "preview must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint20Artifact({ prompt: "Prepare review support.", lane: "review" });
    assert.equal(sprint.isSafeA100Sprint20Artifact(artifact), true, "review artifact must be safe.");
    assert.equal(artifact.lane, "review", "review lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "review must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "review must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "review must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "review must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint20Artifact({ prompt: "Prepare permission support.", lane: "permission" });
    assert.equal(sprint.isSafeA100Sprint20Artifact(artifact), true, "permission artifact must be safe.");
    assert.equal(artifact.lane, "permission", "permission lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "permission must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "permission must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "permission must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "permission must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint20Artifact({ prompt: "Prepare execution support.", lane: "execution" });
    assert.equal(sprint.isSafeA100Sprint20Artifact(artifact), true, "execution artifact must be safe.");
    assert.equal(artifact.lane, "execution", "execution lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "execution must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "execution must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "execution must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "execution must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint20Artifact({ prompt: "Prepare blocked support.", lane: "blocked" });
    assert.equal(sprint.isSafeA100Sprint20Artifact(artifact), true, "blocked artifact must be safe.");
    assert.equal(artifact.lane, "blocked", "blocked lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "blocked must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "blocked must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "blocked must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "blocked must not prompt browser permissions.");
  }
}

function runA100Sprint20Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-20",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-20-standard-user-safety-copy-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint20Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint20Qa
});
