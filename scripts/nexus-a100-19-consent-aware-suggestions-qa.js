const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-19-consent-aware-suggestions.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-19-consent-aware-suggestions.js");
  const doc = read("docs", "NEXUS_A100_19_CONSENT_AWARE_SUGGESTIONS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-19-consent-aware-suggestions.js"), "A100-19 module must exist.");
  assert(exists("docs", "NEXUS_A100_19_CONSENT_AWARE_SUGGESTIONS.md"), "A100-19 documentation must exist.");
  assert(exists("scripts", "nexus-a100-19-consent-aware-suggestions-qa.js"), "A100-19 QA must exist.");
  if (19 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint19Artifact",
    "isSafeA100Sprint19Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-19 source must include ${term}.`));

  [
    "Consent-Aware Suggestions",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-19 documentation must include ${term}.`));

  [
    "nexus-a100-19-consent-aware-suggestions",
    "createA100Sprint19Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-19 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-19 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-19 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-19 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-19-consent-aware-suggestions"], "node scripts/nexus-a100-19-consent-aware-suggestions-qa.js", "A100-19 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-19-consent-aware-suggestions-qa.js"), "A100-19 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint19Artifact({ prompt: "Prepare suggestion support.", lane: "suggestion" });
    assert.equal(sprint.isSafeA100Sprint19Artifact(artifact), true, "suggestion artifact must be safe.");
    assert.equal(artifact.lane, "suggestion", "suggestion lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "suggestion must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "suggestion must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "suggestion must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "suggestion must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint19Artifact({ prompt: "Prepare consent support.", lane: "consent" });
    assert.equal(sprint.isSafeA100Sprint19Artifact(artifact), true, "consent artifact must be safe.");
    assert.equal(artifact.lane, "consent", "consent lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "consent must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "consent must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "consent must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "consent must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint19Artifact({ prompt: "Prepare choice support.", lane: "choice" });
    assert.equal(sprint.isSafeA100Sprint19Artifact(artifact), true, "choice artifact must be safe.");
    assert.equal(artifact.lane, "choice", "choice lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "choice must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "choice must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "choice must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "choice must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint19Artifact({ prompt: "Prepare scope support.", lane: "scope" });
    assert.equal(sprint.isSafeA100Sprint19Artifact(artifact), true, "scope artifact must be safe.");
    assert.equal(artifact.lane, "scope", "scope lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "scope must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "scope must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "scope must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "scope must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint19Artifact({ prompt: "Prepare cancel support.", lane: "cancel" });
    assert.equal(sprint.isSafeA100Sprint19Artifact(artifact), true, "cancel artifact must be safe.");
    assert.equal(artifact.lane, "cancel", "cancel lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "cancel must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "cancel must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "cancel must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "cancel must not prompt browser permissions.");
  }
}

function runA100Sprint19Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-19",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-19-consent-aware-suggestions-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint19Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint19Qa
});
