const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-7-map-provider-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-7-map-provider-readiness.js");
  const doc = read("docs", "NEXUS_A100_7_MAP_PROVIDER_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-7-map-provider-readiness.js"), "A100-7 module must exist.");
  assert(exists("docs", "NEXUS_A100_7_MAP_PROVIDER_READINESS.md"), "A100-7 documentation must exist.");
  assert(exists("scripts", "nexus-a100-7-map-provider-readiness-qa.js"), "A100-7 QA must exist.");
  if (7 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint7Artifact",
    "isSafeA100Sprint7Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-7 source must include ${term}.`));

  [
    "Map Provider Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-7 documentation must include ${term}.`));

  [
    "nexus-a100-7-map-provider-readiness",
    "createA100Sprint7Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-7 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-7 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-7 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-7 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-7-map-provider-readiness"], "node scripts/nexus-a100-7-map-provider-readiness-qa.js", "A100-7 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-7-map-provider-readiness-qa.js"), "A100-7 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint7Artifact({ prompt: "Prepare tiles support.", lane: "tiles" });
    assert.equal(sprint.isSafeA100Sprint7Artifact(artifact), true, "tiles artifact must be safe.");
    assert.equal(artifact.lane, "tiles", "tiles lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "tiles must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "tiles must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "tiles must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "tiles must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint7Artifact({ prompt: "Prepare layers support.", lane: "layers" });
    assert.equal(sprint.isSafeA100Sprint7Artifact(artifact), true, "layers artifact must be safe.");
    assert.equal(artifact.lane, "layers", "layers lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "layers must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "layers must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "layers must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "layers must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint7Artifact({ prompt: "Prepare routing support.", lane: "routing" });
    assert.equal(sprint.isSafeA100Sprint7Artifact(artifact), true, "routing artifact must be safe.");
    assert.equal(artifact.lane, "routing", "routing lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "routing must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "routing must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "routing must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "routing must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint7Artifact({ prompt: "Prepare location support.", lane: "location" });
    assert.equal(sprint.isSafeA100Sprint7Artifact(artifact), true, "location artifact must be safe.");
    assert.equal(artifact.lane, "location", "location lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "location must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "location must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "location must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "location must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint7Artifact({ prompt: "Prepare offline support.", lane: "offline" });
    assert.equal(sprint.isSafeA100Sprint7Artifact(artifact), true, "offline artifact must be safe.");
    assert.equal(artifact.lane, "offline", "offline lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "offline must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "offline must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "offline must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "offline must not prompt browser permissions.");
  }
}

function runA100Sprint7Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-7",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-7-map-provider-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint7Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint7Qa
});
