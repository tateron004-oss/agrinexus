const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-34-accessibility-support.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-34-accessibility-support.js");
  const doc = read("docs", "NEXUS_A100_34_ACCESSIBILITY_SUPPORT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-34-accessibility-support.js"), "A100-34 module must exist.");
  assert(exists("docs", "NEXUS_A100_34_ACCESSIBILITY_SUPPORT.md"), "A100-34 documentation must exist.");
  assert(exists("scripts", "nexus-a100-34-accessibility-support-qa.js"), "A100-34 QA must exist.");
  if (34 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint34Artifact",
    "isSafeA100Sprint34Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-34 source must include ${term}.`));

  [
    "Accessibility Support",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-34 documentation must include ${term}.`));

  [
    "nexus-a100-34-accessibility-support",
    "createA100Sprint34Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-34 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-34 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-34 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-34 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-34-accessibility-support"], "node scripts/nexus-a100-34-accessibility-support-qa.js", "A100-34 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-34-accessibility-support-qa.js"), "A100-34 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint34Artifact({ prompt: "Prepare captions support.", lane: "captions" });
    assert.equal(sprint.isSafeA100Sprint34Artifact(artifact), true, "captions artifact must be safe.");
    assert.equal(artifact.lane, "captions", "captions lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "captions must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "captions must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "captions must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "captions must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint34Artifact({ prompt: "Prepare language support.", lane: "language" });
    assert.equal(sprint.isSafeA100Sprint34Artifact(artifact), true, "language artifact must be safe.");
    assert.equal(artifact.lane, "language", "language lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "language must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "language must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "language must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "language must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint34Artifact({ prompt: "Prepare readaloud support.", lane: "readaloud" });
    assert.equal(sprint.isSafeA100Sprint34Artifact(artifact), true, "readaloud artifact must be safe.");
    assert.equal(artifact.lane, "readaloud", "readaloud lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "readaloud must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "readaloud must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "readaloud must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "readaloud must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint34Artifact({ prompt: "Prepare contrast support.", lane: "contrast" });
    assert.equal(sprint.isSafeA100Sprint34Artifact(artifact), true, "contrast artifact must be safe.");
    assert.equal(artifact.lane, "contrast", "contrast lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "contrast must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "contrast must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "contrast must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "contrast must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint34Artifact({ prompt: "Prepare support support.", lane: "support" });
    assert.equal(sprint.isSafeA100Sprint34Artifact(artifact), true, "support artifact must be safe.");
    assert.equal(artifact.lane, "support", "support lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "support must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "support must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "support must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "support must not prompt browser permissions.");
  }
}

function runA100Sprint34Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-34",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-34-accessibility-support-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint34Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint34Qa
});
