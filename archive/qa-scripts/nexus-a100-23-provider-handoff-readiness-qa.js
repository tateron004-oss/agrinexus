const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-23-provider-handoff-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-23-provider-handoff-readiness.js");
  const doc = read("docs", "NEXUS_A100_23_PROVIDER_HANDOFF_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-23-provider-handoff-readiness.js"), "A100-23 module must exist.");
  assert(exists("docs", "NEXUS_A100_23_PROVIDER_HANDOFF_READINESS.md"), "A100-23 documentation must exist.");
  assert(exists("scripts", "nexus-a100-23-provider-handoff-readiness-qa.js"), "A100-23 QA must exist.");
  if (23 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint23Artifact",
    "isSafeA100Sprint23Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-23 source must include ${term}.`));

  [
    "Provider Handoff Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-23 documentation must include ${term}.`));

  [
    "nexus-a100-23-provider-handoff-readiness",
    "createA100Sprint23Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-23 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-23 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-23 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-23 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-23-provider-handoff-readiness"], "node scripts/nexus-a100-23-provider-handoff-readiness-qa.js", "A100-23 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-23-provider-handoff-readiness-qa.js"), "A100-23 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint23Artifact({ prompt: "Prepare provider support.", lane: "provider" });
    assert.equal(sprint.isSafeA100Sprint23Artifact(artifact), true, "provider artifact must be safe.");
    assert.equal(artifact.lane, "provider", "provider lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "provider must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "provider must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "provider must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "provider must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint23Artifact({ prompt: "Prepare readiness support.", lane: "readiness" });
    assert.equal(sprint.isSafeA100Sprint23Artifact(artifact), true, "readiness artifact must be safe.");
    assert.equal(artifact.lane, "readiness", "readiness lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "readiness must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "readiness must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "readiness must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "readiness must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint23Artifact({ prompt: "Prepare handoff support.", lane: "handoff" });
    assert.equal(sprint.isSafeA100Sprint23Artifact(artifact), true, "handoff artifact must be safe.");
    assert.equal(artifact.lane, "handoff", "handoff lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "handoff must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "handoff must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "handoff must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "handoff must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint23Artifact({ prompt: "Prepare blocked support.", lane: "blocked" });
    assert.equal(sprint.isSafeA100Sprint23Artifact(artifact), true, "blocked artifact must be safe.");
    assert.equal(artifact.lane, "blocked", "blocked lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "blocked must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "blocked must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "blocked must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "blocked must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint23Artifact({ prompt: "Prepare review support.", lane: "review" });
    assert.equal(sprint.isSafeA100Sprint23Artifact(artifact), true, "review artifact must be safe.");
    assert.equal(artifact.lane, "review", "review lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "review must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "review must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "review must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "review must not prompt browser permissions.");
  }
}

function runA100Sprint23Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-23",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-23-provider-handoff-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint23Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint23Qa
});
