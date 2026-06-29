const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-17-source-backed-answer-previews.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-17-source-backed-answer-previews.js");
  const doc = read("docs", "NEXUS_A100_17_SOURCE_BACKED_ANSWER_PREVIEWS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-17-source-backed-answer-previews.js"), "A100-17 module must exist.");
  assert(exists("docs", "NEXUS_A100_17_SOURCE_BACKED_ANSWER_PREVIEWS.md"), "A100-17 documentation must exist.");
  assert(exists("scripts", "nexus-a100-17-source-backed-answer-previews-qa.js"), "A100-17 QA must exist.");
  if (17 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint17Artifact",
    "isSafeA100Sprint17Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-17 source must include ${term}.`));

  [
    "Source-Backed Answer Previews",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-17 documentation must include ${term}.`));

  [
    "nexus-a100-17-source-backed-answer-previews",
    "createA100Sprint17Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-17 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-17 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-17 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-17 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-17-source-backed-answer-previews"], "node scripts/nexus-a100-17-source-backed-answer-previews-qa.js", "A100-17 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-17-source-backed-answer-previews-qa.js"), "A100-17 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint17Artifact({ prompt: "Prepare source support.", lane: "source" });
    assert.equal(sprint.isSafeA100Sprint17Artifact(artifact), true, "source artifact must be safe.");
    assert.equal(artifact.lane, "source", "source lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "source must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "source must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "source must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "source must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint17Artifact({ prompt: "Prepare citation support.", lane: "citation" });
    assert.equal(sprint.isSafeA100Sprint17Artifact(artifact), true, "citation artifact must be safe.");
    assert.equal(artifact.lane, "citation", "citation lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "citation must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "citation must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "citation must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "citation must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint17Artifact({ prompt: "Prepare freshness support.", lane: "freshness" });
    assert.equal(sprint.isSafeA100Sprint17Artifact(artifact), true, "freshness artifact must be safe.");
    assert.equal(artifact.lane, "freshness", "freshness lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "freshness must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "freshness must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "freshness must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "freshness must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint17Artifact({ prompt: "Prepare confidence support.", lane: "confidence" });
    assert.equal(sprint.isSafeA100Sprint17Artifact(artifact), true, "confidence artifact must be safe.");
    assert.equal(artifact.lane, "confidence", "confidence lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "confidence must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "confidence must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "confidence must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "confidence must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint17Artifact({ prompt: "Prepare claim support.", lane: "claim" });
    assert.equal(sprint.isSafeA100Sprint17Artifact(artifact), true, "claim artifact must be safe.");
    assert.equal(artifact.lane, "claim", "claim lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "claim must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "claim must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "claim must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "claim must not prompt browser permissions.");
  }
}

function runA100Sprint17Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-17",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-17-source-backed-answer-previews-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint17Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint17Qa
});
