const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-38-regional-deployment-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-38-regional-deployment-readiness.js");
  const doc = read("docs", "NEXUS_A100_38_REGIONAL_DEPLOYMENT_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-38-regional-deployment-readiness.js"), "A100-38 module must exist.");
  assert(exists("docs", "NEXUS_A100_38_REGIONAL_DEPLOYMENT_READINESS.md"), "A100-38 documentation must exist.");
  assert(exists("scripts", "nexus-a100-38-regional-deployment-readiness-qa.js"), "A100-38 QA must exist.");
  if (38 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint38Artifact",
    "isSafeA100Sprint38Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-38 source must include ${term}.`));

  [
    "Regional Deployment Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-38 documentation must include ${term}.`));

  [
    "nexus-a100-38-regional-deployment-readiness",
    "createA100Sprint38Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-38 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-38 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-38 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-38 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-38-regional-deployment-readiness"], "node scripts/nexus-a100-38-regional-deployment-readiness-qa.js", "A100-38 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-38-regional-deployment-readiness-qa.js"), "A100-38 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint38Artifact({ prompt: "Prepare region support.", lane: "region" });
    assert.equal(sprint.isSafeA100Sprint38Artifact(artifact), true, "region artifact must be safe.");
    assert.equal(artifact.lane, "region", "region lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "region must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "region must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "region must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "region must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint38Artifact({ prompt: "Prepare language support.", lane: "language" });
    assert.equal(sprint.isSafeA100Sprint38Artifact(artifact), true, "language artifact must be safe.");
    assert.equal(artifact.lane, "language", "language lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "language must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "language must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "language must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "language must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint38Artifact({ prompt: "Prepare provider support.", lane: "provider" });
    assert.equal(sprint.isSafeA100Sprint38Artifact(artifact), true, "provider artifact must be safe.");
    assert.equal(artifact.lane, "provider", "provider lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "provider must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "provider must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "provider must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "provider must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint38Artifact({ prompt: "Prepare map support.", lane: "map" });
    assert.equal(sprint.isSafeA100Sprint38Artifact(artifact), true, "map artifact must be safe.");
    assert.equal(artifact.lane, "map", "map lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "map must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "map must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "map must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "map must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint38Artifact({ prompt: "Prepare compliance support.", lane: "compliance" });
    assert.equal(sprint.isSafeA100Sprint38Artifact(artifact), true, "compliance artifact must be safe.");
    assert.equal(artifact.lane, "compliance", "compliance lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "compliance must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "compliance must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "compliance must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "compliance must not prompt browser permissions.");
  }
}

function runA100Sprint38Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-38",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-38-regional-deployment-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint38Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint38Qa
});
