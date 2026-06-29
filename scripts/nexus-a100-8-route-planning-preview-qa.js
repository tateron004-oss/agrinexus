const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-8-route-planning-preview.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-8-route-planning-preview.js");
  const doc = read("docs", "NEXUS_A100_8_ROUTE_PLANNING_PREVIEW.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-8-route-planning-preview.js"), "A100-8 module must exist.");
  assert(exists("docs", "NEXUS_A100_8_ROUTE_PLANNING_PREVIEW.md"), "A100-8 documentation must exist.");
  assert(exists("scripts", "nexus-a100-8-route-planning-preview-qa.js"), "A100-8 QA must exist.");
  if (8 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint8Artifact",
    "isSafeA100Sprint8Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-8 source must include ${term}.`));

  [
    "Route Planning Preview",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-8 documentation must include ${term}.`));

  [
    "nexus-a100-8-route-planning-preview",
    "createA100Sprint8Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-8 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-8 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-8 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-8 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-8-route-planning-preview"], "node scripts/nexus-a100-8-route-planning-preview-qa.js", "A100-8 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-8-route-planning-preview-qa.js"), "A100-8 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint8Artifact({ prompt: "Prepare start support.", lane: "start" });
    assert.equal(sprint.isSafeA100Sprint8Artifact(artifact), true, "start artifact must be safe.");
    assert.equal(artifact.lane, "start", "start lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "start must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "start must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "start must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "start must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint8Artifact({ prompt: "Prepare destination support.", lane: "destination" });
    assert.equal(sprint.isSafeA100Sprint8Artifact(artifact), true, "destination artifact must be safe.");
    assert.equal(artifact.lane, "destination", "destination lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "destination must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "destination must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "destination must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "destination must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint8Artifact({ prompt: "Prepare purpose support.", lane: "purpose" });
    assert.equal(sprint.isSafeA100Sprint8Artifact(artifact), true, "purpose artifact must be safe.");
    assert.equal(artifact.lane, "purpose", "purpose lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "purpose must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "purpose must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "purpose must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "purpose must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint8Artifact({ prompt: "Prepare risk support.", lane: "risk" });
    assert.equal(sprint.isSafeA100Sprint8Artifact(artifact), true, "risk artifact must be safe.");
    assert.equal(artifact.lane, "risk", "risk lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "risk must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "risk must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "risk must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "risk must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint8Artifact({ prompt: "Prepare review support.", lane: "review" });
    assert.equal(sprint.isSafeA100Sprint8Artifact(artifact), true, "review artifact must be safe.");
    assert.equal(artifact.lane, "review", "review lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "review must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "review must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "review must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "review must not prompt browser permissions.");
  }
}

function runA100Sprint8Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-8",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-8-route-planning-preview-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint8Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint8Qa
});
