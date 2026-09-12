const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-31-personalization-boundaries.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-31-personalization-boundaries.js");
  const doc = read("docs", "NEXUS_A100_31_PERSONALIZATION_BOUNDARIES.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-31-personalization-boundaries.js"), "A100-31 module must exist.");
  assert(exists("docs", "NEXUS_A100_31_PERSONALIZATION_BOUNDARIES.md"), "A100-31 documentation must exist.");
  assert(exists("scripts", "nexus-a100-31-personalization-boundaries-qa.js"), "A100-31 QA must exist.");
  if (31 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint31Artifact",
    "isSafeA100Sprint31Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-31 source must include ${term}.`));

  [
    "Personalization Boundaries",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-31 documentation must include ${term}.`));

  [
    "nexus-a100-31-personalization-boundaries",
    "createA100Sprint31Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-31 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-31 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-31 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-31 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-31-personalization-boundaries"], "node scripts/nexus-a100-31-personalization-boundaries-qa.js", "A100-31 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-31-personalization-boundaries-qa.js"), "A100-31 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint31Artifact({ prompt: "Prepare preference support.", lane: "preference" });
    assert.equal(sprint.isSafeA100Sprint31Artifact(artifact), true, "preference artifact must be safe.");
    assert.equal(artifact.lane, "preference", "preference lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "preference must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "preference must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "preference must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "preference must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint31Artifact({ prompt: "Prepare hint support.", lane: "hint" });
    assert.equal(sprint.isSafeA100Sprint31Artifact(artifact), true, "hint artifact must be safe.");
    assert.equal(artifact.lane, "hint", "hint lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "hint must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "hint must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "hint must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "hint must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint31Artifact({ prompt: "Prepare identity support.", lane: "identity" });
    assert.equal(sprint.isSafeA100Sprint31Artifact(artifact), true, "identity artifact must be safe.");
    assert.equal(artifact.lane, "identity", "identity lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "identity must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "identity must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "identity must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "identity must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint31Artifact({ prompt: "Prepare authority support.", lane: "authority" });
    assert.equal(sprint.isSafeA100Sprint31Artifact(artifact), true, "authority artifact must be safe.");
    assert.equal(artifact.lane, "authority", "authority lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "authority must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "authority must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "authority must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "authority must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint31Artifact({ prompt: "Prepare forget support.", lane: "forget" });
    assert.equal(sprint.isSafeA100Sprint31Artifact(artifact), true, "forget artifact must be safe.");
    assert.equal(artifact.lane, "forget", "forget lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "forget must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "forget must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "forget must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "forget must not prompt browser permissions.");
  }
}

function runA100Sprint31Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-31",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-31-personalization-boundaries-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint31Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint31Qa
});
