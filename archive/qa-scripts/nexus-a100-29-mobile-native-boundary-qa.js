const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-29-mobile-native-boundary.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-29-mobile-native-boundary.js");
  const doc = read("docs", "NEXUS_A100_29_MOBILE_NATIVE_BOUNDARY.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-29-mobile-native-boundary.js"), "A100-29 module must exist.");
  assert(exists("docs", "NEXUS_A100_29_MOBILE_NATIVE_BOUNDARY.md"), "A100-29 documentation must exist.");
  assert(exists("scripts", "nexus-a100-29-mobile-native-boundary-qa.js"), "A100-29 QA must exist.");
  if (29 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint29Artifact",
    "isSafeA100Sprint29Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-29 source must include ${term}.`));

  [
    "Mobile Native Boundary",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-29 documentation must include ${term}.`));

  [
    "nexus-a100-29-mobile-native-boundary",
    "createA100Sprint29Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-29 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-29 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-29 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-29 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-29-mobile-native-boundary"], "node scripts/nexus-a100-29-mobile-native-boundary-qa.js", "A100-29 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-29-mobile-native-boundary-qa.js"), "A100-29 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint29Artifact({ prompt: "Prepare camera support.", lane: "camera" });
    assert.equal(sprint.isSafeA100Sprint29Artifact(artifact), true, "camera artifact must be safe.");
    assert.equal(artifact.lane, "camera", "camera lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "camera must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "camera must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "camera must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "camera must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint29Artifact({ prompt: "Prepare microphone support.", lane: "microphone" });
    assert.equal(sprint.isSafeA100Sprint29Artifact(artifact), true, "microphone artifact must be safe.");
    assert.equal(artifact.lane, "microphone", "microphone lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "microphone must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "microphone must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "microphone must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "microphone must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint29Artifact({ prompt: "Prepare location support.", lane: "location" });
    assert.equal(sprint.isSafeA100Sprint29Artifact(artifact), true, "location artifact must be safe.");
    assert.equal(artifact.lane, "location", "location lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "location must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "location must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "location must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "location must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint29Artifact({ prompt: "Prepare notifications support.", lane: "notifications" });
    assert.equal(sprint.isSafeA100Sprint29Artifact(artifact), true, "notifications artifact must be safe.");
    assert.equal(artifact.lane, "notifications", "notifications lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "notifications must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "notifications must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "notifications must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "notifications must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint29Artifact({ prompt: "Prepare bridge support.", lane: "bridge" });
    assert.equal(sprint.isSafeA100Sprint29Artifact(artifact), true, "bridge artifact must be safe.");
    assert.equal(artifact.lane, "bridge", "bridge lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "bridge must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "bridge must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "bridge must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "bridge must not prompt browser permissions.");
  }
}

function runA100Sprint29Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-29",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-29-mobile-native-boundary-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint29Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint29Qa
});
