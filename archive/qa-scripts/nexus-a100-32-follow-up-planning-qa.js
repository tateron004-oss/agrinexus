const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-32-follow-up-planning.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-32-follow-up-planning.js");
  const doc = read("docs", "NEXUS_A100_32_FOLLOW_UP_PLANNING.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-32-follow-up-planning.js"), "A100-32 module must exist.");
  assert(exists("docs", "NEXUS_A100_32_FOLLOW_UP_PLANNING.md"), "A100-32 documentation must exist.");
  assert(exists("scripts", "nexus-a100-32-follow-up-planning-qa.js"), "A100-32 QA must exist.");
  if (32 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint32Artifact",
    "isSafeA100Sprint32Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-32 source must include ${term}.`));

  [
    "Follow-Up Planning",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-32 documentation must include ${term}.`));

  [
    "nexus-a100-32-follow-up-planning",
    "createA100Sprint32Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-32 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-32 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-32 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-32 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-32-follow-up-planning"], "node scripts/nexus-a100-32-follow-up-planning-qa.js", "A100-32 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-32-follow-up-planning-qa.js"), "A100-32 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint32Artifact({ prompt: "Prepare followup support.", lane: "followup" });
    assert.equal(sprint.isSafeA100Sprint32Artifact(artifact), true, "followup artifact must be safe.");
    assert.equal(artifact.lane, "followup", "followup lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "followup must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "followup must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "followup must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "followup must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint32Artifact({ prompt: "Prepare reminder support.", lane: "reminder" });
    assert.equal(sprint.isSafeA100Sprint32Artifact(artifact), true, "reminder artifact must be safe.");
    assert.equal(artifact.lane, "reminder", "reminder lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "reminder must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "reminder must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "reminder must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "reminder must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint32Artifact({ prompt: "Prepare timing support.", lane: "timing" });
    assert.equal(sprint.isSafeA100Sprint32Artifact(artifact), true, "timing artifact must be safe.");
    assert.equal(artifact.lane, "timing", "timing lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "timing must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "timing must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "timing must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "timing must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint32Artifact({ prompt: "Prepare owner support.", lane: "owner" });
    assert.equal(sprint.isSafeA100Sprint32Artifact(artifact), true, "owner artifact must be safe.");
    assert.equal(artifact.lane, "owner", "owner lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "owner must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "owner must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "owner must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "owner must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint32Artifact({ prompt: "Prepare review support.", lane: "review" });
    assert.equal(sprint.isSafeA100Sprint32Artifact(artifact), true, "review artifact must be safe.");
    assert.equal(artifact.lane, "review", "review lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "review must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "review must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "review must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "review must not prompt browser permissions.");
  }
}

function runA100Sprint32Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-32",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-32-follow-up-planning-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint32Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint32Qa
});
