const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-30-audit-trail-preparation.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-30-audit-trail-preparation.js");
  const doc = read("docs", "NEXUS_A100_30_AUDIT_TRAIL_PREPARATION.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-30-audit-trail-preparation.js"), "A100-30 module must exist.");
  assert(exists("docs", "NEXUS_A100_30_AUDIT_TRAIL_PREPARATION.md"), "A100-30 documentation must exist.");
  assert(exists("scripts", "nexus-a100-30-audit-trail-preparation-qa.js"), "A100-30 QA must exist.");
  if (30 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint30Artifact",
    "isSafeA100Sprint30Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-30 source must include ${term}.`));

  [
    "Audit Trail Preparation",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-30 documentation must include ${term}.`));

  [
    "nexus-a100-30-audit-trail-preparation",
    "createA100Sprint30Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-30 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-30 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-30 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-30 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-30-audit-trail-preparation"], "node scripts/nexus-a100-30-audit-trail-preparation-qa.js", "A100-30 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-30-audit-trail-preparation-qa.js"), "A100-30 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint30Artifact({ prompt: "Prepare audit support.", lane: "audit" });
    assert.equal(sprint.isSafeA100Sprint30Artifact(artifact), true, "audit artifact must be safe.");
    assert.equal(artifact.lane, "audit", "audit lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "audit must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "audit must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "audit must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "audit must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint30Artifact({ prompt: "Prepare redaction support.", lane: "redaction" });
    assert.equal(sprint.isSafeA100Sprint30Artifact(artifact), true, "redaction artifact must be safe.");
    assert.equal(artifact.lane, "redaction", "redaction lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "redaction must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "redaction must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "redaction must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "redaction must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint30Artifact({ prompt: "Prepare event support.", lane: "event" });
    assert.equal(sprint.isSafeA100Sprint30Artifact(artifact), true, "event artifact must be safe.");
    assert.equal(artifact.lane, "event", "event lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "event must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "event must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "event must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "event must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint30Artifact({ prompt: "Prepare actor support.", lane: "actor" });
    assert.equal(sprint.isSafeA100Sprint30Artifact(artifact), true, "actor artifact must be safe.");
    assert.equal(artifact.lane, "actor", "actor lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "actor must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "actor must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "actor must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "actor must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint30Artifact({ prompt: "Prepare timestamp support.", lane: "timestamp" });
    assert.equal(sprint.isSafeA100Sprint30Artifact(artifact), true, "timestamp artifact must be safe.");
    assert.equal(artifact.lane, "timestamp", "timestamp lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "timestamp must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "timestamp must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "timestamp must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "timestamp must not prompt browser permissions.");
  }
}

function runA100Sprint30Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-30",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-30-audit-trail-preparation-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint30Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint30Qa
});
