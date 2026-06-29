const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-21-assistant-intent-observation.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-21-assistant-intent-observation.js");
  const doc = read("docs", "NEXUS_A100_21_ASSISTANT_INTENT_OBSERVATION.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-21-assistant-intent-observation.js"), "A100-21 module must exist.");
  assert(exists("docs", "NEXUS_A100_21_ASSISTANT_INTENT_OBSERVATION.md"), "A100-21 documentation must exist.");
  assert(exists("scripts", "nexus-a100-21-assistant-intent-observation-qa.js"), "A100-21 QA must exist.");
  if (21 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint21Artifact",
    "isSafeA100Sprint21Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-21 source must include ${term}.`));

  [
    "Assistant Intent Observation",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-21 documentation must include ${term}.`));

  [
    "nexus-a100-21-assistant-intent-observation",
    "createA100Sprint21Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-21 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-21 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-21 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-21 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-21-assistant-intent-observation"], "node scripts/nexus-a100-21-assistant-intent-observation-qa.js", "A100-21 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-21-assistant-intent-observation-qa.js"), "A100-21 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint21Artifact({ prompt: "Prepare intent support.", lane: "intent" });
    assert.equal(sprint.isSafeA100Sprint21Artifact(artifact), true, "intent artifact must be safe.");
    assert.equal(artifact.lane, "intent", "intent lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "intent must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "intent must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "intent must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "intent must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint21Artifact({ prompt: "Prepare confidence support.", lane: "confidence" });
    assert.equal(sprint.isSafeA100Sprint21Artifact(artifact), true, "confidence artifact must be safe.");
    assert.equal(artifact.lane, "confidence", "confidence lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "confidence must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "confidence must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "confidence must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "confidence must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint21Artifact({ prompt: "Prepare reason support.", lane: "reason" });
    assert.equal(sprint.isSafeA100Sprint21Artifact(artifact), true, "reason artifact must be safe.");
    assert.equal(artifact.lane, "reason", "reason lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "reason must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "reason must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "reason must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "reason must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint21Artifact({ prompt: "Prepare risk support.", lane: "risk" });
    assert.equal(sprint.isSafeA100Sprint21Artifact(artifact), true, "risk artifact must be safe.");
    assert.equal(artifact.lane, "risk", "risk lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "risk must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "risk must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "risk must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "risk must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint21Artifact({ prompt: "Prepare audit support.", lane: "audit" });
    assert.equal(sprint.isSafeA100Sprint21Artifact(artifact), true, "audit artifact must be safe.");
    assert.equal(artifact.lane, "audit", "audit lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "audit must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "audit must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "audit must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "audit must not prompt browser permissions.");
  }
}

function runA100Sprint21Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-21",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-21-assistant-intent-observation-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint21Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint21Qa
});
