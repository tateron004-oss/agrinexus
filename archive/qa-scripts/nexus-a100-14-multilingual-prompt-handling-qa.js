const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-14-multilingual-prompt-handling.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-14-multilingual-prompt-handling.js");
  const doc = read("docs", "NEXUS_A100_14_MULTILINGUAL_PROMPT_HANDLING.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-14-multilingual-prompt-handling.js"), "A100-14 module must exist.");
  assert(exists("docs", "NEXUS_A100_14_MULTILINGUAL_PROMPT_HANDLING.md"), "A100-14 documentation must exist.");
  assert(exists("scripts", "nexus-a100-14-multilingual-prompt-handling-qa.js"), "A100-14 QA must exist.");
  if (14 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint14Artifact",
    "isSafeA100Sprint14Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-14 source must include ${term}.`));

  [
    "Multilingual Prompt Handling",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-14 documentation must include ${term}.`));

  [
    "nexus-a100-14-multilingual-prompt-handling",
    "createA100Sprint14Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-14 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-14 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-14 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-14 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-14-multilingual-prompt-handling"], "node scripts/nexus-a100-14-multilingual-prompt-handling-qa.js", "A100-14 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-14-multilingual-prompt-handling-qa.js"), "A100-14 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint14Artifact({ prompt: "Prepare en support.", lane: "en" });
    assert.equal(sprint.isSafeA100Sprint14Artifact(artifact), true, "en artifact must be safe.");
    assert.equal(artifact.lane, "en", "en lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "en must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "en must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "en must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "en must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint14Artifact({ prompt: "Prepare es support.", lane: "es" });
    assert.equal(sprint.isSafeA100Sprint14Artifact(artifact), true, "es artifact must be safe.");
    assert.equal(artifact.lane, "es", "es lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "es must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "es must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "es must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "es must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint14Artifact({ prompt: "Prepare fr support.", lane: "fr" });
    assert.equal(sprint.isSafeA100Sprint14Artifact(artifact), true, "fr artifact must be safe.");
    assert.equal(artifact.lane, "fr", "fr lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "fr must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "fr must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "fr must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "fr must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint14Artifact({ prompt: "Prepare sw support.", lane: "sw" });
    assert.equal(sprint.isSafeA100Sprint14Artifact(artifact), true, "sw artifact must be safe.");
    assert.equal(artifact.lane, "sw", "sw lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "sw must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "sw must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "sw must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "sw must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint14Artifact({ prompt: "Prepare ar support.", lane: "ar" });
    assert.equal(sprint.isSafeA100Sprint14Artifact(artifact), true, "ar artifact must be safe.");
    assert.equal(artifact.lane, "ar", "ar lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "ar must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "ar must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "ar must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "ar must not prompt browser permissions.");
  }
}

function runA100Sprint14Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-14",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-14-multilingual-prompt-handling-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint14Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint14Qa
});
