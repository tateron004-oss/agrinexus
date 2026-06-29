const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-13-high-risk-gating.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-13-high-risk-gating.js");
  const doc = read("docs", "NEXUS_A100_13_HIGH_RISK_GATING.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-13-high-risk-gating.js"), "A100-13 module must exist.");
  assert(exists("docs", "NEXUS_A100_13_HIGH_RISK_GATING.md"), "A100-13 documentation must exist.");
  assert(exists("scripts", "nexus-a100-13-high-risk-gating-qa.js"), "A100-13 QA must exist.");
  if (13 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint13Artifact",
    "isSafeA100Sprint13Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-13 source must include ${term}.`));

  [
    "High-Risk Gating",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-13 documentation must include ${term}.`));

  [
    "nexus-a100-13-high-risk-gating",
    "createA100Sprint13Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-13 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-13 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-13 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-13 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-13-high-risk-gating"], "node scripts/nexus-a100-13-high-risk-gating-qa.js", "A100-13 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-13-high-risk-gating-qa.js"), "A100-13 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint13Artifact({ prompt: "Prepare payments support.", lane: "payments" });
    assert.equal(sprint.isSafeA100Sprint13Artifact(artifact), true, "payments artifact must be safe.");
    assert.equal(artifact.lane, "payments", "payments lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "payments must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "payments must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "payments must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "payments must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint13Artifact({ prompt: "Prepare calls support.", lane: "calls" });
    assert.equal(sprint.isSafeA100Sprint13Artifact(artifact), true, "calls artifact must be safe.");
    assert.equal(artifact.lane, "calls", "calls lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "calls must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "calls must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "calls must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "calls must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint13Artifact({ prompt: "Prepare messages support.", lane: "messages" });
    assert.equal(sprint.isSafeA100Sprint13Artifact(artifact), true, "messages artifact must be safe.");
    assert.equal(artifact.lane, "messages", "messages lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "messages must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "messages must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "messages must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "messages must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint13Artifact({ prompt: "Prepare medical support.", lane: "medical" });
    assert.equal(sprint.isSafeA100Sprint13Artifact(artifact), true, "medical artifact must be safe.");
    assert.equal(artifact.lane, "medical", "medical lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "medical must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "medical must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "medical must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "medical must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint13Artifact({ prompt: "Prepare location support.", lane: "location" });
    assert.equal(sprint.isSafeA100Sprint13Artifact(artifact), true, "location artifact must be safe.");
    assert.equal(artifact.lane, "location", "location lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "location must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "location must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "location must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "location must not prompt browser permissions.");
  }
}

function runA100Sprint13Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-13",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-13-high-risk-gating-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint13Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint13Qa
});
