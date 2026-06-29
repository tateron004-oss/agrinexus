const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-36-partner-data-intake.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-36-partner-data-intake.js");
  const doc = read("docs", "NEXUS_A100_36_PARTNER_DATA_INTAKE.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-36-partner-data-intake.js"), "A100-36 module must exist.");
  assert(exists("docs", "NEXUS_A100_36_PARTNER_DATA_INTAKE.md"), "A100-36 documentation must exist.");
  assert(exists("scripts", "nexus-a100-36-partner-data-intake-qa.js"), "A100-36 QA must exist.");
  if (36 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint36Artifact",
    "isSafeA100Sprint36Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-36 source must include ${term}.`));

  [
    "Partner Data Intake",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-36 documentation must include ${term}.`));

  [
    "nexus-a100-36-partner-data-intake",
    "createA100Sprint36Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-36 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-36 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-36 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-36 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-36-partner-data-intake"], "node scripts/nexus-a100-36-partner-data-intake-qa.js", "A100-36 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-36-partner-data-intake-qa.js"), "A100-36 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint36Artifact({ prompt: "Prepare partner support.", lane: "partner" });
    assert.equal(sprint.isSafeA100Sprint36Artifact(artifact), true, "partner artifact must be safe.");
    assert.equal(artifact.lane, "partner", "partner lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "partner must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "partner must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "partner must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "partner must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint36Artifact({ prompt: "Prepare dataset support.", lane: "dataset" });
    assert.equal(sprint.isSafeA100Sprint36Artifact(artifact), true, "dataset artifact must be safe.");
    assert.equal(artifact.lane, "dataset", "dataset lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "dataset must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "dataset must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "dataset must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "dataset must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint36Artifact({ prompt: "Prepare schema support.", lane: "schema" });
    assert.equal(sprint.isSafeA100Sprint36Artifact(artifact), true, "schema artifact must be safe.");
    assert.equal(artifact.lane, "schema", "schema lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "schema must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "schema must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "schema must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "schema must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint36Artifact({ prompt: "Prepare consent support.", lane: "consent" });
    assert.equal(sprint.isSafeA100Sprint36Artifact(artifact), true, "consent artifact must be safe.");
    assert.equal(artifact.lane, "consent", "consent lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "consent must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "consent must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "consent must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "consent must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint36Artifact({ prompt: "Prepare review support.", lane: "review" });
    assert.equal(sprint.isSafeA100Sprint36Artifact(artifact), true, "review artifact must be safe.");
    assert.equal(artifact.lane, "review", "review lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "review must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "review must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "review must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "review must not prompt browser permissions.");
  }
}

function runA100Sprint36Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-36",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-36-partner-data-intake-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint36Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint36Qa
});
