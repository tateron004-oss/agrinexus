const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-33-risk-confidence-labels.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-33-risk-confidence-labels.js");
  const doc = read("docs", "NEXUS_A100_33_RISK_CONFIDENCE_LABELS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-33-risk-confidence-labels.js"), "A100-33 module must exist.");
  assert(exists("docs", "NEXUS_A100_33_RISK_CONFIDENCE_LABELS.md"), "A100-33 documentation must exist.");
  assert(exists("scripts", "nexus-a100-33-risk-confidence-labels-qa.js"), "A100-33 QA must exist.");
  if (33 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint33Artifact",
    "isSafeA100Sprint33Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-33 source must include ${term}.`));

  [
    "Risk and Confidence Labels",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-33 documentation must include ${term}.`));

  [
    "nexus-a100-33-risk-confidence-labels",
    "createA100Sprint33Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-33 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-33 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-33 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-33 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-33-risk-confidence-labels"], "node scripts/nexus-a100-33-risk-confidence-labels-qa.js", "A100-33 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-33-risk-confidence-labels-qa.js"), "A100-33 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint33Artifact({ prompt: "Prepare confidence support.", lane: "confidence" });
    assert.equal(sprint.isSafeA100Sprint33Artifact(artifact), true, "confidence artifact must be safe.");
    assert.equal(artifact.lane, "confidence", "confidence lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "confidence must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "confidence must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "confidence must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "confidence must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint33Artifact({ prompt: "Prepare risk support.", lane: "risk" });
    assert.equal(sprint.isSafeA100Sprint33Artifact(artifact), true, "risk artifact must be safe.");
    assert.equal(artifact.lane, "risk", "risk lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "risk must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "risk must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "risk must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "risk must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint33Artifact({ prompt: "Prepare freshness support.", lane: "freshness" });
    assert.equal(sprint.isSafeA100Sprint33Artifact(artifact), true, "freshness artifact must be safe.");
    assert.equal(artifact.lane, "freshness", "freshness lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "freshness must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "freshness must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "freshness must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "freshness must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint33Artifact({ prompt: "Prepare readiness support.", lane: "readiness" });
    assert.equal(sprint.isSafeA100Sprint33Artifact(artifact), true, "readiness artifact must be safe.");
    assert.equal(artifact.lane, "readiness", "readiness lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "readiness must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "readiness must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "readiness must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "readiness must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint33Artifact({ prompt: "Prepare label support.", lane: "label" });
    assert.equal(sprint.isSafeA100Sprint33Artifact(artifact), true, "label artifact must be safe.");
    assert.equal(artifact.lane, "label", "label lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "label must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "label must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "label must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "label must not prompt browser permissions.");
  }
}

function runA100Sprint33Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-33",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-33-risk-confidence-labels-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint33Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint33Qa
});
