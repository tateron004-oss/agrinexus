const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-1-standard-user-capability-routing.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-1-standard-user-capability-routing.js");
  const doc = read("docs", "NEXUS_A100_1_STANDARD_USER_CAPABILITY_ROUTING.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-1-standard-user-capability-routing.js"), "A100-1 module must exist.");
  assert(exists("docs", "NEXUS_A100_1_STANDARD_USER_CAPABILITY_ROUTING.md"), "A100-1 documentation must exist.");
  assert(exists("scripts", "nexus-a100-1-standard-user-capability-routing-qa.js"), "A100-1 QA must exist.");
  if (1 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint1Artifact",
    "isSafeA100Sprint1Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-1 source must include ${term}.`));

  [
    "Standard User Capability Routing",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-1 documentation must include ${term}.`));

  [
    "nexus-a100-1-standard-user-capability-routing",
    "createA100Sprint1Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-1 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-1 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-1 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-1 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-1-standard-user-capability-routing"], "node scripts/nexus-a100-1-standard-user-capability-routing-qa.js", "A100-1 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-1-standard-user-capability-routing-qa.js"), "A100-1 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint1Artifact({ prompt: "Prepare agriculture support.", lane: "agriculture" });
    assert.equal(sprint.isSafeA100Sprint1Artifact(artifact), true, "agriculture artifact must be safe.");
    assert.equal(artifact.lane, "agriculture", "agriculture lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "agriculture must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "agriculture must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "agriculture must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "agriculture must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint1Artifact({ prompt: "Prepare learning support.", lane: "learning" });
    assert.equal(sprint.isSafeA100Sprint1Artifact(artifact), true, "learning artifact must be safe.");
    assert.equal(artifact.lane, "learning", "learning lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "learning must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "learning must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "learning must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "learning must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint1Artifact({ prompt: "Prepare workforce support.", lane: "workforce" });
    assert.equal(sprint.isSafeA100Sprint1Artifact(artifact), true, "workforce artifact must be safe.");
    assert.equal(artifact.lane, "workforce", "workforce lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "workforce must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "workforce must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "workforce must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "workforce must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint1Artifact({ prompt: "Prepare marketplace support.", lane: "marketplace" });
    assert.equal(sprint.isSafeA100Sprint1Artifact(artifact), true, "marketplace artifact must be safe.");
    assert.equal(artifact.lane, "marketplace", "marketplace lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "marketplace must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "marketplace must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "marketplace must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "marketplace must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint1Artifact({ prompt: "Prepare maps support.", lane: "maps" });
    assert.equal(sprint.isSafeA100Sprint1Artifact(artifact), true, "maps artifact must be safe.");
    assert.equal(artifact.lane, "maps", "maps lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "maps must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "maps must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "maps must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "maps must not prompt browser permissions.");
  }
}

function runA100Sprint1Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-1",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-1-standard-user-capability-routing-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint1Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint1Qa
});
