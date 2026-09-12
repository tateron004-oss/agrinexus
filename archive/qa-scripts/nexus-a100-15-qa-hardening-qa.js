const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-15-qa-hardening.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-15-qa-hardening.js");
  const doc = read("docs", "NEXUS_A100_15_QA_HARDENING.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-15-qa-hardening.js"), "A100-15 module must exist.");
  assert(exists("docs", "NEXUS_A100_15_QA_HARDENING.md"), "A100-15 documentation must exist.");
  assert(exists("scripts", "nexus-a100-15-qa-hardening-qa.js"), "A100-15 QA must exist.");
  if (15 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint15Artifact",
    "isSafeA100Sprint15Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-15 source must include ${term}.`));

  [
    "QA Hardening",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-15 documentation must include ${term}.`));

  [
    "nexus-a100-15-qa-hardening",
    "createA100Sprint15Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-15 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-15 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-15 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-15 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-15-qa-hardening"], "node scripts/nexus-a100-15-qa-hardening-qa.js", "A100-15 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-15-qa-hardening-qa.js"), "A100-15 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint15Artifact({ prompt: "Prepare static support.", lane: "static" });
    assert.equal(sprint.isSafeA100Sprint15Artifact(artifact), true, "static artifact must be safe.");
    assert.equal(artifact.lane, "static", "static lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "static must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "static must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "static must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "static must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint15Artifact({ prompt: "Prepare runtime support.", lane: "runtime" });
    assert.equal(sprint.isSafeA100Sprint15Artifact(artifact), true, "runtime artifact must be safe.");
    assert.equal(artifact.lane, "runtime", "runtime lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "runtime must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "runtime must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "runtime must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "runtime must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint15Artifact({ prompt: "Prepare secrets support.", lane: "secrets" });
    assert.equal(sprint.isSafeA100Sprint15Artifact(artifact), true, "secrets artifact must be safe.");
    assert.equal(artifact.lane, "secrets", "secrets lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "secrets must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "secrets must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "secrets must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "secrets must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint15Artifact({ prompt: "Prepare execution support.", lane: "execution" });
    assert.equal(sprint.isSafeA100Sprint15Artifact(artifact), true, "execution artifact must be safe.");
    assert.equal(artifact.lane, "execution", "execution lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "execution must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "execution must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "execution must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "execution must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint15Artifact({ prompt: "Prepare drift support.", lane: "drift" });
    assert.equal(sprint.isSafeA100Sprint15Artifact(artifact), true, "drift artifact must be safe.");
    assert.equal(artifact.lane, "drift", "drift lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "drift must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "drift must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "drift must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "drift must not prompt browser permissions.");
  }
}

function runA100Sprint15Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-15",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-15-qa-hardening-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint15Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint15Qa
});
