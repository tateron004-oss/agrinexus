const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-37-market-trust-readiness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-37-market-trust-readiness.js");
  const doc = read("docs", "NEXUS_A100_37_MARKET_TRUST_READINESS.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-37-market-trust-readiness.js"), "A100-37 module must exist.");
  assert(exists("docs", "NEXUS_A100_37_MARKET_TRUST_READINESS.md"), "A100-37 documentation must exist.");
  assert(exists("scripts", "nexus-a100-37-market-trust-readiness-qa.js"), "A100-37 QA must exist.");
  if (37 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint37Artifact",
    "isSafeA100Sprint37Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-37 source must include ${term}.`));

  [
    "Market Trust Readiness",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-37 documentation must include ${term}.`));

  [
    "nexus-a100-37-market-trust-readiness",
    "createA100Sprint37Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-37 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-37 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-37 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-37 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-37-market-trust-readiness"], "node scripts/nexus-a100-37-market-trust-readiness-qa.js", "A100-37 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-37-market-trust-readiness-qa.js"), "A100-37 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint37Artifact({ prompt: "Prepare trust support.", lane: "trust" });
    assert.equal(sprint.isSafeA100Sprint37Artifact(artifact), true, "trust artifact must be safe.");
    assert.equal(artifact.lane, "trust", "trust lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "trust must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "trust must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "trust must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "trust must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint37Artifact({ prompt: "Prepare fraud support.", lane: "fraud" });
    assert.equal(sprint.isSafeA100Sprint37Artifact(artifact), true, "fraud artifact must be safe.");
    assert.equal(artifact.lane, "fraud", "fraud lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "fraud must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "fraud must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "fraud must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "fraud must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint37Artifact({ prompt: "Prepare buyer support.", lane: "buyer" });
    assert.equal(sprint.isSafeA100Sprint37Artifact(artifact), true, "buyer artifact must be safe.");
    assert.equal(artifact.lane, "buyer", "buyer lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "buyer must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "buyer must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "buyer must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "buyer must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint37Artifact({ prompt: "Prepare seller support.", lane: "seller" });
    assert.equal(sprint.isSafeA100Sprint37Artifact(artifact), true, "seller artifact must be safe.");
    assert.equal(artifact.lane, "seller", "seller lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "seller must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "seller must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "seller must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "seller must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint37Artifact({ prompt: "Prepare price support.", lane: "price" });
    assert.equal(sprint.isSafeA100Sprint37Artifact(artifact), true, "price artifact must be safe.");
    assert.equal(artifact.lane, "price", "price lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "price must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "price must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "price must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "price must not prompt browser permissions.");
  }
}

function runA100Sprint37Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-37",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-37-market-trust-readiness-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint37Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint37Qa
});
