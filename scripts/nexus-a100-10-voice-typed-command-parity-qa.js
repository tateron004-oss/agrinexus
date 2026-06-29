const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-10-voice-typed-command-parity.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-10-voice-typed-command-parity.js");
  const doc = read("docs", "NEXUS_A100_10_VOICE_TYPED_COMMAND_PARITY.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-10-voice-typed-command-parity.js"), "A100-10 module must exist.");
  assert(exists("docs", "NEXUS_A100_10_VOICE_TYPED_COMMAND_PARITY.md"), "A100-10 documentation must exist.");
  assert(exists("scripts", "nexus-a100-10-voice-typed-command-parity-qa.js"), "A100-10 QA must exist.");
  if (10 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint10Artifact",
    "isSafeA100Sprint10Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-10 source must include ${term}.`));

  [
    "Voice and Typed Command Parity",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-10 documentation must include ${term}.`));

  [
    "nexus-a100-10-voice-typed-command-parity",
    "createA100Sprint10Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-10 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-10 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-10 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-10 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-10-voice-typed-command-parity"], "node scripts/nexus-a100-10-voice-typed-command-parity-qa.js", "A100-10 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-10-voice-typed-command-parity-qa.js"), "A100-10 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint10Artifact({ prompt: "Prepare voice support.", lane: "voice" });
    assert.equal(sprint.isSafeA100Sprint10Artifact(artifact), true, "voice artifact must be safe.");
    assert.equal(artifact.lane, "voice", "voice lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "voice must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "voice must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "voice must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "voice must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint10Artifact({ prompt: "Prepare typed support.", lane: "typed" });
    assert.equal(sprint.isSafeA100Sprint10Artifact(artifact), true, "typed artifact must be safe.");
    assert.equal(artifact.lane, "typed", "typed lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "typed must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "typed must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "typed must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "typed must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint10Artifact({ prompt: "Prepare locale support.", lane: "locale" });
    assert.equal(sprint.isSafeA100Sprint10Artifact(artifact), true, "locale artifact must be safe.");
    assert.equal(artifact.lane, "locale", "locale lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "locale must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "locale must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "locale must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "locale must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint10Artifact({ prompt: "Prepare intent support.", lane: "intent" });
    assert.equal(sprint.isSafeA100Sprint10Artifact(artifact), true, "intent artifact must be safe.");
    assert.equal(artifact.lane, "intent", "intent lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "intent must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "intent must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "intent must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "intent must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint10Artifact({ prompt: "Prepare response support.", lane: "response" });
    assert.equal(sprint.isSafeA100Sprint10Artifact(artifact), true, "response artifact must be safe.");
    assert.equal(artifact.lane, "response", "response lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "response must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "response must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "response must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "response must not prompt browser permissions.");
  }
}

function runA100Sprint10Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-10",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-10-voice-typed-command-parity-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint10Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint10Qa
});
