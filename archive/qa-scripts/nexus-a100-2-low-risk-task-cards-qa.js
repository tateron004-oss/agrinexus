const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-2-low-risk-task-cards.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-2-low-risk-task-cards.js");
  const doc = read("docs", "NEXUS_A100_2_LOW_RISK_TASK_CARDS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-2-low-risk-task-cards.js"), "A100-2 module must exist.");
  assert(exists("docs", "NEXUS_A100_2_LOW_RISK_TASK_CARDS.md"), "A100-2 documentation must exist.");
  assert(exists("scripts", "nexus-a100-2-low-risk-task-cards-qa.js"), "A100-2 QA must exist.");
  if (2 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint2Artifact",
    "isSafeA100Sprint2Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-2 source must include ${term}.`));

  [
    "Low-Risk Task Cards",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-2 documentation must include ${term}.`));

  [
    "nexus-a100-2-low-risk-task-cards",
    "createA100Sprint2Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-2 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-2 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-2 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-2 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-2-low-risk-task-cards"], "node scripts/nexus-a100-2-low-risk-task-cards-qa.js", "A100-2 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-2-low-risk-task-cards-qa.js"), "A100-2 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint2Artifact({ prompt: "Prepare explain support.", lane: "explain" });
    assert.equal(sprint.isSafeA100Sprint2Artifact(artifact), true, "explain artifact must be safe.");
    assert.equal(artifact.lane, "explain", "explain lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "explain must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "explain must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "explain must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "explain must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint2Artifact({ prompt: "Prepare summarize support.", lane: "summarize" });
    assert.equal(sprint.isSafeA100Sprint2Artifact(artifact), true, "summarize artifact must be safe.");
    assert.equal(artifact.lane, "summarize", "summarize lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "summarize must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "summarize must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "summarize must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "summarize must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint2Artifact({ prompt: "Prepare compare support.", lane: "compare" });
    assert.equal(sprint.isSafeA100Sprint2Artifact(artifact), true, "compare artifact must be safe.");
    assert.equal(artifact.lane, "compare", "compare lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "compare must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "compare must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "compare must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "compare must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint2Artifact({ prompt: "Prepare prepare support.", lane: "prepare" });
    assert.equal(sprint.isSafeA100Sprint2Artifact(artifact), true, "prepare artifact must be safe.");
    assert.equal(artifact.lane, "prepare", "prepare lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "prepare must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "prepare must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "prepare must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "prepare must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint2Artifact({ prompt: "Prepare checklist support.", lane: "checklist" });
    assert.equal(sprint.isSafeA100Sprint2Artifact(artifact), true, "checklist artifact must be safe.");
    assert.equal(artifact.lane, "checklist", "checklist lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "checklist must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "checklist must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "checklist must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "checklist must not prompt browser permissions.");
  }
}

function runA100Sprint2Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-2",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-2-low-risk-task-cards-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint2Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint2Qa
});
