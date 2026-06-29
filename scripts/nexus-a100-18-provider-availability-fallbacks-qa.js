const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-18-provider-availability-fallbacks.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-18-provider-availability-fallbacks.js");
  const doc = read("docs", "NEXUS_A100_18_PROVIDER_AVAILABILITY_FALLBACKS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-18-provider-availability-fallbacks.js"), "A100-18 module must exist.");
  assert(exists("docs", "NEXUS_A100_18_PROVIDER_AVAILABILITY_FALLBACKS.md"), "A100-18 documentation must exist.");
  assert(exists("scripts", "nexus-a100-18-provider-availability-fallbacks-qa.js"), "A100-18 QA must exist.");
  if (18 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint18Artifact",
    "isSafeA100Sprint18Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-18 source must include ${term}.`));

  [
    "Provider Availability Fallbacks",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-18 documentation must include ${term}.`));

  [
    "nexus-a100-18-provider-availability-fallbacks",
    "createA100Sprint18Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-18 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-18 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-18 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-18 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-18-provider-availability-fallbacks"], "node scripts/nexus-a100-18-provider-availability-fallbacks-qa.js", "A100-18 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-18-provider-availability-fallbacks-qa.js"), "A100-18 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint18Artifact({ prompt: "Prepare available support.", lane: "available" });
    assert.equal(sprint.isSafeA100Sprint18Artifact(artifact), true, "available artifact must be safe.");
    assert.equal(artifact.lane, "available", "available lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "available must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "available must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "available must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "available must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint18Artifact({ prompt: "Prepare degraded support.", lane: "degraded" });
    assert.equal(sprint.isSafeA100Sprint18Artifact(artifact), true, "degraded artifact must be safe.");
    assert.equal(artifact.lane, "degraded", "degraded lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "degraded must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "degraded must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "degraded must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "degraded must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint18Artifact({ prompt: "Prepare missing support.", lane: "missing" });
    assert.equal(sprint.isSafeA100Sprint18Artifact(artifact), true, "missing artifact must be safe.");
    assert.equal(artifact.lane, "missing", "missing lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "missing must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "missing must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "missing must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "missing must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint18Artifact({ prompt: "Prepare fallback support.", lane: "fallback" });
    assert.equal(sprint.isSafeA100Sprint18Artifact(artifact), true, "fallback artifact must be safe.");
    assert.equal(artifact.lane, "fallback", "fallback lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "fallback must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "fallback must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "fallback must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "fallback must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint18Artifact({ prompt: "Prepare retry support.", lane: "retry" });
    assert.equal(sprint.isSafeA100Sprint18Artifact(artifact), true, "retry artifact must be safe.");
    assert.equal(artifact.lane, "retry", "retry lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "retry must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "retry must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "retry must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "retry must not prompt browser permissions.");
  }
}

function runA100Sprint18Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-18",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-18-provider-availability-fallbacks-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint18Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint18Qa
});
