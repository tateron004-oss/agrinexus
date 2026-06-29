const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-26-payment-purchase-boundaries.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-26-payment-purchase-boundaries.js");
  const doc = read("docs", "NEXUS_A100_26_PAYMENT_PURCHASE_BOUNDARIES.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-26-payment-purchase-boundaries.js"), "A100-26 module must exist.");
  assert(exists("docs", "NEXUS_A100_26_PAYMENT_PURCHASE_BOUNDARIES.md"), "A100-26 documentation must exist.");
  assert(exists("scripts", "nexus-a100-26-payment-purchase-boundaries-qa.js"), "A100-26 QA must exist.");
  if (26 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint26Artifact",
    "isSafeA100Sprint26Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-26 source must include ${term}.`));

  [
    "Payment and Purchase Boundaries",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-26 documentation must include ${term}.`));

  [
    "nexus-a100-26-payment-purchase-boundaries",
    "createA100Sprint26Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-26 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-26 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-26 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-26 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-26-payment-purchase-boundaries"], "node scripts/nexus-a100-26-payment-purchase-boundaries-qa.js", "A100-26 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-26-payment-purchase-boundaries-qa.js"), "A100-26 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint26Artifact({ prompt: "Prepare payment support.", lane: "payment" });
    assert.equal(sprint.isSafeA100Sprint26Artifact(artifact), true, "payment artifact must be safe.");
    assert.equal(artifact.lane, "payment", "payment lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "payment must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "payment must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "payment must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "payment must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint26Artifact({ prompt: "Prepare purchase support.", lane: "purchase" });
    assert.equal(sprint.isSafeA100Sprint26Artifact(artifact), true, "purchase artifact must be safe.");
    assert.equal(artifact.lane, "purchase", "purchase lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "purchase must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "purchase must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "purchase must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "purchase must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint26Artifact({ prompt: "Prepare checkout support.", lane: "checkout" });
    assert.equal(sprint.isSafeA100Sprint26Artifact(artifact), true, "checkout artifact must be safe.");
    assert.equal(artifact.lane, "checkout", "checkout lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "checkout must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "checkout must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "checkout must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "checkout must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint26Artifact({ prompt: "Prepare settlement support.", lane: "settlement" });
    assert.equal(sprint.isSafeA100Sprint26Artifact(artifact), true, "settlement artifact must be safe.");
    assert.equal(artifact.lane, "settlement", "settlement lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "settlement must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "settlement must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "settlement must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "settlement must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint26Artifact({ prompt: "Prepare wallet support.", lane: "wallet" });
    assert.equal(sprint.isSafeA100Sprint26Artifact(artifact), true, "wallet artifact must be safe.");
    assert.equal(artifact.lane, "wallet", "wallet lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "wallet must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "wallet must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "wallet must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "wallet must not prompt browser permissions.");
  }
}

function runA100Sprint26Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-26",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-26-payment-purchase-boundaries-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint26Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint26Qa
});
