const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-42-a100-closeout.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-42-a100-closeout.js");
  const doc = read("docs", "NEXUS_A100_42_A100_CLOSEOUT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-42-a100-closeout.js"), "A100-42 module must exist.");
  assert(exists("docs", "NEXUS_A100_42_A100_CLOSEOUT.md"), "A100-42 documentation must exist.");
  assert(exists("scripts", "nexus-a100-42-a100-closeout-qa.js"), "A100-42 QA must exist.");
  if (42 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint42Artifact",
    "isSafeA100Sprint42Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-42 source must include ${term}.`));

  [
    "A100 Runtime Readiness Closeout",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-42 documentation must include ${term}.`));

  [
    "nexus-a100-42-a100-closeout",
    "createA100Sprint42Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-42 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-42 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-42 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-42 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-42-a100-closeout"], "node scripts/nexus-a100-42-a100-closeout-qa.js", "A100-42 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-42-a100-closeout-qa.js"), "A100-42 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint42Artifact({ prompt: "Prepare closeout support.", lane: "closeout" });
    assert.equal(sprint.isSafeA100Sprint42Artifact(artifact), true, "closeout artifact must be safe.");
    assert.equal(artifact.lane, "closeout", "closeout lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "closeout must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "closeout must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "closeout must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "closeout must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint42Artifact({ prompt: "Prepare inventory support.", lane: "inventory" });
    assert.equal(sprint.isSafeA100Sprint42Artifact(artifact), true, "inventory artifact must be safe.");
    assert.equal(artifact.lane, "inventory", "inventory lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "inventory must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "inventory must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "inventory must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "inventory must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint42Artifact({ prompt: "Prepare activation support.", lane: "activation" });
    assert.equal(sprint.isSafeA100Sprint42Artifact(artifact), true, "activation artifact must be safe.");
    assert.equal(artifact.lane, "activation", "activation lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "activation must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "activation must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "activation must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "activation must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint42Artifact({ prompt: "Prepare boundary support.", lane: "boundary" });
    assert.equal(sprint.isSafeA100Sprint42Artifact(artifact), true, "boundary artifact must be safe.");
    assert.equal(artifact.lane, "boundary", "boundary lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "boundary must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "boundary must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "boundary must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "boundary must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint42Artifact({ prompt: "Prepare qa support.", lane: "qa" });
    assert.equal(sprint.isSafeA100Sprint42Artifact(artifact), true, "qa artifact must be safe.");
    assert.equal(artifact.lane, "qa", "qa lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "qa must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "qa must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "qa must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "qa must not prompt browser permissions.");
  }
}

function runA100Sprint42Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-42",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-42-a100-closeout-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint42Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint42Qa
});
