const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-11-session-context-lite.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-11-session-context-lite.js");
  const doc = read("docs", "NEXUS_A100_11_SESSION_CONTEXT_LITE.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-11-session-context-lite.js"), "A100-11 module must exist.");
  assert(exists("docs", "NEXUS_A100_11_SESSION_CONTEXT_LITE.md"), "A100-11 documentation must exist.");
  assert(exists("scripts", "nexus-a100-11-session-context-lite-qa.js"), "A100-11 QA must exist.");
  if (11 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint11Artifact",
    "isSafeA100Sprint11Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-11 source must include ${term}.`));

  [
    "Session Context-Lite",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-11 documentation must include ${term}.`));

  [
    "nexus-a100-11-session-context-lite",
    "createA100Sprint11Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-11 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-11 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-11 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-11 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-11-session-context-lite"], "node scripts/nexus-a100-11-session-context-lite-qa.js", "A100-11 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-11-session-context-lite-qa.js"), "A100-11 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint11Artifact({ prompt: "Prepare topic support.", lane: "topic" });
    assert.equal(sprint.isSafeA100Sprint11Artifact(artifact), true, "topic artifact must be safe.");
    assert.equal(artifact.lane, "topic", "topic lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "topic must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "topic must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "topic must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "topic must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint11Artifact({ prompt: "Prepare lastRequest support.", lane: "lastRequest" });
    assert.equal(sprint.isSafeA100Sprint11Artifact(artifact), true, "lastRequest artifact must be safe.");
    assert.equal(artifact.lane, "lastRequest", "lastRequest lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "lastRequest must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "lastRequest must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "lastRequest must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "lastRequest must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint11Artifact({ prompt: "Prepare locale support.", lane: "locale" });
    assert.equal(sprint.isSafeA100Sprint11Artifact(artifact), true, "locale artifact must be safe.");
    assert.equal(artifact.lane, "locale", "locale lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "locale must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "locale must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "locale must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "locale must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint11Artifact({ prompt: "Prepare mode support.", lane: "mode" });
    assert.equal(sprint.isSafeA100Sprint11Artifact(artifact), true, "mode artifact must be safe.");
    assert.equal(artifact.lane, "mode", "mode lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "mode must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "mode must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "mode must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "mode must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint11Artifact({ prompt: "Prepare expires support.", lane: "expires" });
    assert.equal(sprint.isSafeA100Sprint11Artifact(artifact), true, "expires artifact must be safe.");
    assert.equal(artifact.lane, "expires", "expires lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "expires must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "expires must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "expires must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "expires must not prompt browser permissions.");
  }
}

function runA100Sprint11Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-11",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-11-session-context-lite-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint11Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint11Qa
});
