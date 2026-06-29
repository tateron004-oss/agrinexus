const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-3-agriculture-support.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-3-agriculture-support.js");
  const doc = read("docs", "NEXUS_A100_3_AGRICULTURE_SUPPORT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-3-agriculture-support.js"), "A100-3 module must exist.");
  assert(exists("docs", "NEXUS_A100_3_AGRICULTURE_SUPPORT.md"), "A100-3 documentation must exist.");
  assert(exists("scripts", "nexus-a100-3-agriculture-support-qa.js"), "A100-3 QA must exist.");
  if (3 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint3Artifact",
    "isSafeA100Sprint3Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-3 source must include ${term}.`));

  [
    "Agriculture Support",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-3 documentation must include ${term}.`));

  [
    "nexus-a100-3-agriculture-support",
    "createA100Sprint3Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-3 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-3 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-3 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-3 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-3-agriculture-support"], "node scripts/nexus-a100-3-agriculture-support-qa.js", "A100-3 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-3-agriculture-support-qa.js"), "A100-3 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint3Artifact({ prompt: "Prepare crop support.", lane: "crop" });
    assert.equal(sprint.isSafeA100Sprint3Artifact(artifact), true, "crop artifact must be safe.");
    assert.equal(artifact.lane, "crop", "crop lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "crop must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "crop must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "crop must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "crop must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint3Artifact({ prompt: "Prepare pest support.", lane: "pest" });
    assert.equal(sprint.isSafeA100Sprint3Artifact(artifact), true, "pest artifact must be safe.");
    assert.equal(artifact.lane, "pest", "pest lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "pest must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "pest must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "pest must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "pest must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint3Artifact({ prompt: "Prepare soil support.", lane: "soil" });
    assert.equal(sprint.isSafeA100Sprint3Artifact(artifact), true, "soil artifact must be safe.");
    assert.equal(artifact.lane, "soil", "soil lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "soil must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "soil must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "soil must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "soil must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint3Artifact({ prompt: "Prepare weather support.", lane: "weather" });
    assert.equal(sprint.isSafeA100Sprint3Artifact(artifact), true, "weather artifact must be safe.");
    assert.equal(artifact.lane, "weather", "weather lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "weather must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "weather must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "weather must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "weather must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint3Artifact({ prompt: "Prepare extension support.", lane: "extension" });
    assert.equal(sprint.isSafeA100Sprint3Artifact(artifact), true, "extension artifact must be safe.");
    assert.equal(artifact.lane, "extension", "extension lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "extension must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "extension must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "extension must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "extension must not prompt browser permissions.");
  }
}

function runA100Sprint3Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-3",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-3-agriculture-support-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint3Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint3Qa
});
