const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-24-location-permission-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-24-location-permission-readiness.js");
  const doc = read("docs", "NEXUS_A100_24_LOCATION_PERMISSION_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-24-location-permission-readiness.js"), "A100-24 module must exist.");
  assert(exists("docs", "NEXUS_A100_24_LOCATION_PERMISSION_READINESS.md"), "A100-24 documentation must exist.");
  assert(exists("scripts", "nexus-a100-24-location-permission-readiness-qa.js"), "A100-24 QA must exist.");
  if (24 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint24Artifact",
    "isSafeA100Sprint24Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-24 source must include ${term}.`));

  [
    "Location Permission Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-24 documentation must include ${term}.`));

  [
    "nexus-a100-24-location-permission-readiness",
    "createA100Sprint24Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-24 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-24 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-24 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-24 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-24-location-permission-readiness"], "node scripts/nexus-a100-24-location-permission-readiness-qa.js", "A100-24 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-24-location-permission-readiness-qa.js"), "A100-24 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint24Artifact({ prompt: "Prepare location support.", lane: "location" });
    assert.equal(sprint.isSafeA100Sprint24Artifact(artifact), true, "location artifact must be safe.");
    assert.equal(artifact.lane, "location", "location lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "location must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "location must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "location must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "location must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint24Artifact({ prompt: "Prepare permission support.", lane: "permission" });
    assert.equal(sprint.isSafeA100Sprint24Artifact(artifact), true, "permission artifact must be safe.");
    assert.equal(artifact.lane, "permission", "permission lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "permission must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "permission must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "permission must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "permission must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint24Artifact({ prompt: "Prepare tracking support.", lane: "tracking" });
    assert.equal(sprint.isSafeA100Sprint24Artifact(artifact), true, "tracking artifact must be safe.");
    assert.equal(artifact.lane, "tracking", "tracking lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "tracking must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "tracking must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "tracking must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "tracking must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint24Artifact({ prompt: "Prepare route support.", lane: "route" });
    assert.equal(sprint.isSafeA100Sprint24Artifact(artifact), true, "route artifact must be safe.");
    assert.equal(artifact.lane, "route", "route lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "route must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "route must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "route must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "route must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint24Artifact({ prompt: "Prepare consent support.", lane: "consent" });
    assert.equal(sprint.isSafeA100Sprint24Artifact(artifact), true, "consent artifact must be safe.");
    assert.equal(artifact.lane, "consent", "consent lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "consent must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "consent must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "consent must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "consent must not prompt browser permissions.");
  }
}

function runA100Sprint24Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-24",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-24-location-permission-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint24Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint24Qa
});
