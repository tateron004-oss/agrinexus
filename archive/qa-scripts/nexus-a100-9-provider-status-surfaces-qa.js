const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-9-provider-status-surfaces.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-9-provider-status-surfaces.js");
  const doc = read("docs", "NEXUS_A100_9_PROVIDER_STATUS_SURFACES.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-9-provider-status-surfaces.js"), "A100-9 module must exist.");
  assert(exists("docs", "NEXUS_A100_9_PROVIDER_STATUS_SURFACES.md"), "A100-9 documentation must exist.");
  assert(exists("scripts", "nexus-a100-9-provider-status-surfaces-qa.js"), "A100-9 QA must exist.");
  if (9 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint9Artifact",
    "isSafeA100Sprint9Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-9 source must include ${term}.`));

  [
    "Provider Status Surfaces",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-9 documentation must include ${term}.`));

  [
    "nexus-a100-9-provider-status-surfaces",
    "createA100Sprint9Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-9 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-9 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-9 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-9 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-9-provider-status-surfaces"], "node scripts/nexus-a100-9-provider-status-surfaces-qa.js", "A100-9 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-9-provider-status-surfaces-qa.js"), "A100-9 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint9Artifact({ prompt: "Prepare connected support.", lane: "connected" });
    assert.equal(sprint.isSafeA100Sprint9Artifact(artifact), true, "connected artifact must be safe.");
    assert.equal(artifact.lane, "connected", "connected lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "connected must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "connected must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "connected must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "connected must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint9Artifact({ prompt: "Prepare unavailable support.", lane: "unavailable" });
    assert.equal(sprint.isSafeA100Sprint9Artifact(artifact), true, "unavailable artifact must be safe.");
    assert.equal(artifact.lane, "unavailable", "unavailable lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "unavailable must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "unavailable must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "unavailable must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "unavailable must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint9Artifact({ prompt: "Prepare preview support.", lane: "preview" });
    assert.equal(sprint.isSafeA100Sprint9Artifact(artifact), true, "preview artifact must be safe.");
    assert.equal(artifact.lane, "preview", "preview lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "preview must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "preview must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "preview must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "preview must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint9Artifact({ prompt: "Prepare review support.", lane: "review" });
    assert.equal(sprint.isSafeA100Sprint9Artifact(artifact), true, "review artifact must be safe.");
    assert.equal(artifact.lane, "review", "review lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "review must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "review must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "review must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "review must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint9Artifact({ prompt: "Prepare fallback support.", lane: "fallback" });
    assert.equal(sprint.isSafeA100Sprint9Artifact(artifact), true, "fallback artifact must be safe.");
    assert.equal(artifact.lane, "fallback", "fallback lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "fallback must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "fallback must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "fallback must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "fallback must not prompt browser permissions.");
  }
}

function runA100Sprint9Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-9",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-9-provider-status-surfaces-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint9Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint9Qa
});
