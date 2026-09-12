const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-27-health-access-preparation.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-27-health-access-preparation.js");
  const doc = read("docs", "NEXUS_A100_27_HEALTH_ACCESS_PREPARATION.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-27-health-access-preparation.js"), "A100-27 module must exist.");
  assert(exists("docs", "NEXUS_A100_27_HEALTH_ACCESS_PREPARATION.md"), "A100-27 documentation must exist.");
  assert(exists("scripts", "nexus-a100-27-health-access-preparation-qa.js"), "A100-27 QA must exist.");
  if (27 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint27Artifact",
    "isSafeA100Sprint27Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-27 source must include ${term}.`));

  [
    "Health Access Preparation",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-27 documentation must include ${term}.`));

  [
    "nexus-a100-27-health-access-preparation",
    "createA100Sprint27Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-27 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-27 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-27 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-27 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-27-health-access-preparation"], "node scripts/nexus-a100-27-health-access-preparation-qa.js", "A100-27 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-27-health-access-preparation-qa.js"), "A100-27 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint27Artifact({ prompt: "Prepare care support.", lane: "care" });
    assert.equal(sprint.isSafeA100Sprint27Artifact(artifact), true, "care artifact must be safe.");
    assert.equal(artifact.lane, "care", "care lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "care must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "care must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "care must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "care must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint27Artifact({ prompt: "Prepare clinic support.", lane: "clinic" });
    assert.equal(sprint.isSafeA100Sprint27Artifact(artifact), true, "clinic artifact must be safe.");
    assert.equal(artifact.lane, "clinic", "clinic lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "clinic must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "clinic must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "clinic must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "clinic must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint27Artifact({ prompt: "Prepare pharmacy support.", lane: "pharmacy" });
    assert.equal(sprint.isSafeA100Sprint27Artifact(artifact), true, "pharmacy artifact must be safe.");
    assert.equal(artifact.lane, "pharmacy", "pharmacy lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "pharmacy must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "pharmacy must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "pharmacy must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "pharmacy must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint27Artifact({ prompt: "Prepare telehealth support.", lane: "telehealth" });
    assert.equal(sprint.isSafeA100Sprint27Artifact(artifact), true, "telehealth artifact must be safe.");
    assert.equal(artifact.lane, "telehealth", "telehealth lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "telehealth must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "telehealth must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "telehealth must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "telehealth must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint27Artifact({ prompt: "Prepare safety support.", lane: "safety" });
    assert.equal(sprint.isSafeA100Sprint27Artifact(artifact), true, "safety artifact must be safe.");
    assert.equal(artifact.lane, "safety", "safety lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "safety must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "safety must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "safety must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "safety must not prompt browser permissions.");
  }
}

function runA100Sprint27Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-27",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-27-health-access-preparation-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint27Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint27Qa
});
