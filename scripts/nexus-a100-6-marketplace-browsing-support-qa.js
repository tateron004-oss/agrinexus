const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sprint = require("../server/nexus-a100-6-marketplace-browsing-support.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-a100-6-marketplace-browsing-support.js");
  const doc = read("docs", "NEXUS_A100_6_MARKETPLACE_BROWSING_SUPPORT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const indexHtml = read("public", "index.html");
  const server = read("server.js");

  assert(exists("server", "nexus-a100-6-marketplace-browsing-support.js"), "A100-6 module must exist.");
  assert(exists("docs", "NEXUS_A100_6_MARKETPLACE_BROWSING_SUPPORT.md"), "A100-6 documentation must exist.");
  assert(exists("scripts", "nexus-a100-6-marketplace-browsing-support-qa.js"), "A100-6 QA must exist.");
  if (6 === 1) {
    assert(exists("docs", "NEXUS_A100_SPRINT_LEDGER.md"), "A100 sprint ledger must exist.");
    const ledger = read("docs", "NEXUS_A100_SPRINT_LEDGER.md");
    assert((ledger.match(/A100-\d+/g) || []).length >= 42, "A100 ledger must define the full 42-sprint train.");
  }

  [
    "createA100Sprint6Artifact",
    "isSafeA100Sprint6Artifact",
    "BLOCKED_A100_ACTIONS",
    "reviewOnly",
    "noAutomaticExternalAction",
    "noBrowserPermissionPrompt"
  ].forEach(term => assert(source.includes(term), `A100-6 source must include ${term}.`));

  [
    "Marketplace Browsing Support",
    "review-only",
    "No automatic calls, messages, payments, purchases, emergency actions, provider handoffs, location tracking, camera, microphone, or browser permission prompts.",
    "not loaded by public/app.js, public/index.html, or server.js"
  ].forEach(term => assert(doc.includes(term), `A100-6 documentation must include ${term}.`));

  [
    "nexus-a100-6-marketplace-browsing-support",
    "createA100Sprint6Artifact"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load A100-6 runtime term: ${term}.`);
    assert(!indexHtml.includes(term), `public/index.html must not load A100-6 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load A100-6 runtime term: ${term}.`);
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
  ].forEach(term => assert(!source.includes(term), `A100-6 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(pkg.scripts["qa:nexus-a100-6-marketplace-browsing-support"], "node scripts/nexus-a100-6-marketplace-browsing-support-qa.js", "A100-6 package QA alias must exist.");
  assert(qaSuite.includes("scripts/nexus-a100-6-marketplace-browsing-support-qa.js"), "A100-6 QA must be wired into local-safe suites.");
}

function assertArtifacts() {
  {
    const artifact = sprint.createA100Sprint6Artifact({ prompt: "Prepare browse support.", lane: "browse" });
    assert.equal(sprint.isSafeA100Sprint6Artifact(artifact), true, "browse artifact must be safe.");
    assert.equal(artifact.lane, "browse", "browse lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "browse must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "browse must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "browse must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "browse must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint6Artifact({ prompt: "Prepare compare support.", lane: "compare" });
    assert.equal(sprint.isSafeA100Sprint6Artifact(artifact), true, "compare artifact must be safe.");
    assert.equal(artifact.lane, "compare", "compare lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "compare must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "compare must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "compare must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "compare must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint6Artifact({ prompt: "Prepare availability support.", lane: "availability" });
    assert.equal(sprint.isSafeA100Sprint6Artifact(artifact), true, "availability artifact must be safe.");
    assert.equal(artifact.lane, "availability", "availability lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "availability must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "availability must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "availability must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "availability must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint6Artifact({ prompt: "Prepare price support.", lane: "price" });
    assert.equal(sprint.isSafeA100Sprint6Artifact(artifact), true, "price artifact must be safe.");
    assert.equal(artifact.lane, "price", "price lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "price must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "price must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "price must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "price must not prompt browser permissions.");
  }
  {
    const artifact = sprint.createA100Sprint6Artifact({ prompt: "Prepare seller support.", lane: "seller" });
    assert.equal(sprint.isSafeA100Sprint6Artifact(artifact), true, "seller artifact must be safe.");
    assert.equal(artifact.lane, "seller", "seller lane mismatch.");
    assert.equal(artifact.safetyPosture.canExecute, false, "seller must not execute.");
    assert.equal(artifact.safetyPosture.executionAuthority, "none", "seller must have no execution authority.");
    assert.equal(artifact.safetyPosture.noSecretsExposed, true, "seller must not expose secrets.");
    assert.equal(artifact.safetyPosture.noBrowserPermissionPrompt, true, "seller must not prompt browser permissions.");
  }
}

function runA100Sprint6Qa() {
  assertStaticSafety();
  assertArtifacts();
  console.log(JSON.stringify({
    phase: "A100-6",
    title: sprint.SPRINT_TITLE,
    supportedLanes: sprint.SUPPORTED_LANES,
    noExecutionAuthorized: true,
    standardUserRuntimeActivated: false
  }, null, 2));
  console.log("[nexus-a100-6-marketplace-browsing-support-qa] passed");
}

if (require.main === module) {
  try {
    runA100Sprint6Qa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runA100Sprint6Qa
});
