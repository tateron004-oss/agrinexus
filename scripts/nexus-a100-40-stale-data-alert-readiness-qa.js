const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-40-stale-data-alert-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-40-stale-data-alert-readiness.js");
  const doc = read("docs", "NEXUS_A100_40_STALE_DATA_ALERT_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-40-stale-data-alert-readiness.js"), "A100-40 module must exist.");
  assert(exists("docs", "NEXUS_A100_40_STALE_DATA_ALERT_READINESS.md"), "A100-40 documentation must exist.");
  assert(exists("scripts", "nexus-a100-40-stale-data-alert-readiness-qa.js"), "A100-40 QA must exist.");
  if (40 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint40Artifact",
    "isSafeA100Sprint40Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-40 source must include ${term}.`));

  [
    "Stale Data Alert Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-40 documentation must include ${term}.`));

  [
    "nexus-a100-40-stale-data-alert-readiness",
    "createA100Sprint40Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-40 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-40 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-40 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-40 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-40-stale-data-alert-readiness"], "node scripts/nexus-a100-40-stale-data-alert-readiness-qa.js", "A100-40 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-40-stale-data-alert-readiness-qa.js"), "A100-40 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint40Artifact({ prompt: "Prepare stale support.", lane: "stale" });
    assert.equal(sprint.isSafeA100Sprint40Artifact(artifact), true, "stale artifact must be safe.");
    assert.equal(artifact.lane, "stale", "stale lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "stale must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "stale must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "stale must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "stale must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint40Artifact({ prompt: "Prepare recheck support.", lane: "recheck" });
    assert.equal(sprint.isSafeA100Sprint40Artifact(artifact), true, "recheck artifact must be safe.");
    assert.equal(artifact.lane, "recheck", "recheck lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "recheck must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "recheck must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "recheck must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "recheck must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint40Artifact({ prompt: "Prepare source support.", lane: "source" });
    assert.equal(sprint.isSafeA100Sprint40Artifact(artifact), true, "source artifact must be safe.");
    assert.equal(artifact.lane, "source", "source lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "source must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "source must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "source must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "source must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint40Artifact({ prompt: "Prepare date support.", lane: "date" });
    assert.equal(sprint.isSafeA100Sprint40Artifact(artifact), true, "date artifact must be safe.");
    assert.equal(artifact.lane, "date", "date lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "date must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "date must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "date must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "date must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint40Artifact({ prompt: "Prepare notice support.", lane: "notice" });
    assert.equal(sprint.isSafeA100Sprint40Artifact(artifact), true, "notice artifact must be safe.");
    assert.equal(artifact.lane, "notice", "notice lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "notice must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "notice must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "notice must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "notice must not prompt browser permissions.");
  }
}

function runA100Sprint40Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-40",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-40-stale-data-alert-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint40Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint40Qa
});
