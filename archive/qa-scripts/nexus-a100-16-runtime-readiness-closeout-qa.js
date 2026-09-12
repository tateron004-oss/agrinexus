const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-16-runtime-readiness-closeout.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-16-runtime-readiness-closeout.js");
  const doc = read("docs", "NEXUS_A100_16_RUNTIME_READINESS_CLOSEOUT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-16-runtime-readiness-closeout.js"), "A100-16 module must exist.");
  assert(exists("docs", "NEXUS_A100_16_RUNTIME_READINESS_CLOSEOUT.md"), "A100-16 documentation must exist.");
  assert(exists("scripts", "nexus-a100-16-runtime-readiness-closeout-qa.js"), "A100-16 QA must exist.");
  if (16 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint16Artifact",
    "isSafeA100Sprint16Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-16 source must include ${term}.`));

  [
    "Runtime Readiness Closeout",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-16 documentation must include ${term}.`));

  [
    "nexus-a100-16-runtime-readiness-closeout",
    "createA100Sprint16Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-16 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-16 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-16 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-16 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-16-runtime-readiness-closeout"], "node scripts/nexus-a100-16-runtime-readiness-closeout-qa.js", "A100-16 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-16-runtime-readiness-closeout-qa.js"), "A100-16 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint16Artifact({ prompt: "Prepare ready support.", lane: "ready" });
    assert.equal(sprint.isSafeA100Sprint16Artifact(artifact), true, "ready artifact must be safe.");
    assert.equal(artifact.lane, "ready", "ready lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "ready must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "ready must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "ready must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "ready must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint16Artifact({ prompt: "Prepare preview support.", lane: "preview" });
    assert.equal(sprint.isSafeA100Sprint16Artifact(artifact), true, "preview artifact must be safe.");
    assert.equal(artifact.lane, "preview", "preview lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "preview must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "preview must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "preview must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "preview must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint16Artifact({ prompt: "Prepare blocked support.", lane: "blocked" });
    assert.equal(sprint.isSafeA100Sprint16Artifact(artifact), true, "blocked artifact must be safe.");
    assert.equal(artifact.lane, "blocked", "blocked lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "blocked must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "blocked must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "blocked must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "blocked must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint16Artifact({ prompt: "Prepare risk support.", lane: "risk" });
    assert.equal(sprint.isSafeA100Sprint16Artifact(artifact), true, "risk artifact must be safe.");
    assert.equal(artifact.lane, "risk", "risk lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "risk must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "risk must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "risk must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "risk must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint16Artifact({ prompt: "Prepare next support.", lane: "next" });
    assert.equal(sprint.isSafeA100Sprint16Artifact(artifact), true, "next artifact must be safe.");
    assert.equal(artifact.lane, "next", "next lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "next must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "next must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "next must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "next must not prompt browser permissions.");
  }
}

function runA100Sprint16Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-16",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-16-runtime-readiness-closeout-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint16Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint16Qa
});
