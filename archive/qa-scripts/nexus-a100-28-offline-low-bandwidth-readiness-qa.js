const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-28-offline-low-bandwidth-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-28-offline-low-bandwidth-readiness.js");
  const doc = read("docs", "NEXUS_A100_28_OFFLINE_LOW_BANDWIDTH_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-28-offline-low-bandwidth-readiness.js"), "A100-28 module must exist.");
  assert(exists("docs", "NEXUS_A100_28_OFFLINE_LOW_BANDWIDTH_READINESS.md"), "A100-28 documentation must exist.");
  assert(exists("scripts", "nexus-a100-28-offline-low-bandwidth-readiness-qa.js"), "A100-28 QA must exist.");
  if (28 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint28Artifact",
    "isSafeA100Sprint28Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-28 source must include ${term}.`));

  [
    "Offline and Low-Bandwidth Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-28 documentation must include ${term}.`));

  [
    "nexus-a100-28-offline-low-bandwidth-readiness",
    "createA100Sprint28Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-28 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-28 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-28 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-28 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-28-offline-low-bandwidth-readiness"], "node scripts/nexus-a100-28-offline-low-bandwidth-readiness-qa.js", "A100-28 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-28-offline-low-bandwidth-readiness-qa.js"), "A100-28 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint28Artifact({ prompt: "Prepare offline support.", lane: "offline" });
    assert.equal(sprint.isSafeA100Sprint28Artifact(artifact), true, "offline artifact must be safe.");
    assert.equal(artifact.lane, "offline", "offline lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "offline must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "offline must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "offline must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "offline must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint28Artifact({ prompt: "Prepare cache support.", lane: "cache" });
    assert.equal(sprint.isSafeA100Sprint28Artifact(artifact), true, "cache artifact must be safe.");
    assert.equal(artifact.lane, "cache", "cache lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "cache must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "cache must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "cache must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "cache must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint28Artifact({ prompt: "Prepare tiles support.", lane: "tiles" });
    assert.equal(sprint.isSafeA100Sprint28Artifact(artifact), true, "tiles artifact must be safe.");
    assert.equal(artifact.lane, "tiles", "tiles lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "tiles must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "tiles must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "tiles must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "tiles must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint28Artifact({ prompt: "Prepare sync support.", lane: "sync" });
    assert.equal(sprint.isSafeA100Sprint28Artifact(artifact), true, "sync artifact must be safe.");
    assert.equal(artifact.lane, "sync", "sync lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "sync must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "sync must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "sync must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "sync must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint28Artifact({ prompt: "Prepare fallback support.", lane: "fallback" });
    assert.equal(sprint.isSafeA100Sprint28Artifact(artifact), true, "fallback artifact must be safe.");
    assert.equal(artifact.lane, "fallback", "fallback lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "fallback must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "fallback must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "fallback must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "fallback must not prompt browser permissions.");
  }
}

function runA100Sprint28Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-28",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-28-offline-low-bandwidth-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint28Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint28Qa
});
