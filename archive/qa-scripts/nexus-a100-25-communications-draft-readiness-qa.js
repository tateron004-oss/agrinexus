const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-25-communications-draft-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-25-communications-draft-readiness.js");
  const doc = read("docs", "NEXUS_A100_25_COMMUNICATIONS_DRAFT_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-25-communications-draft-readiness.js"), "A100-25 module must exist.");
  assert(exists("docs", "NEXUS_A100_25_COMMUNICATIONS_DRAFT_READINESS.md"), "A100-25 documentation must exist.");
  assert(exists("scripts", "nexus-a100-25-communications-draft-readiness-qa.js"), "A100-25 QA must exist.");
  if (25 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint25Artifact",
    "isSafeA100Sprint25Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-25 source must include ${term}.`));

  [
    "Communications Draft Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-25 documentation must include ${term}.`));

  [
    "nexus-a100-25-communications-draft-readiness",
    "createA100Sprint25Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-25 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-25 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-25 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-25 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-25-communications-draft-readiness"], "node scripts/nexus-a100-25-communications-draft-readiness-qa.js", "A100-25 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-25-communications-draft-readiness-qa.js"), "A100-25 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint25Artifact({ prompt: "Prepare message support.", lane: "message" });
    assert.equal(sprint.isSafeA100Sprint25Artifact(artifact), true, "message artifact must be safe.");
    assert.equal(artifact.lane, "message", "message lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "message must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "message must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "message must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "message must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint25Artifact({ prompt: "Prepare call support.", lane: "call" });
    assert.equal(sprint.isSafeA100Sprint25Artifact(artifact), true, "call artifact must be safe.");
    assert.equal(artifact.lane, "call", "call lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "call must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "call must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "call must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "call must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint25Artifact({ prompt: "Prepare recipient support.", lane: "recipient" });
    assert.equal(sprint.isSafeA100Sprint25Artifact(artifact), true, "recipient artifact must be safe.");
    assert.equal(artifact.lane, "recipient", "recipient lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "recipient must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "recipient must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "recipient must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "recipient must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint25Artifact({ prompt: "Prepare draft support.", lane: "draft" });
    assert.equal(sprint.isSafeA100Sprint25Artifact(artifact), true, "draft artifact must be safe.");
    assert.equal(artifact.lane, "draft", "draft lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "draft must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "draft must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "draft must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "draft must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint25Artifact({ prompt: "Prepare confirmation support.", lane: "confirmation" });
    assert.equal(sprint.isSafeA100Sprint25Artifact(artifact), true, "confirmation artifact must be safe.");
    assert.equal(artifact.lane, "confirmation", "confirmation lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "confirmation must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "confirmation must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "confirmation must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "confirmation must not prompt browser permissions.");
  }
}

function runA100Sprint25Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-25",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-25-communications-draft-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint25Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint25Qa
});
