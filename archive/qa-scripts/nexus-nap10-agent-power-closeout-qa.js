const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertIncludes(source, terms, label) {
  terms.forEach(term => {
    assert(source.includes(term), `${label} must include: ${term}`);
  });
}

function runNap10AgentPowerCloseoutQa() {
  const doc = read("docs", "NEXUS_NAP10_AGENT_POWER_CLOSEOUT_AND_NEXT_ACTIVATION_PLAN.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const app = read("public", "app.js");
  const server = read("server.js");
  const runtime = read("server", "nexus-assistant-runtime-entrypoint.js");
  const reliabilityHealth = read("server", "nexus-provider-reliability-health.js");

  assertIncludes(doc, [
    "NAP1",
    "NAP2",
    "NAP3",
    "NAP4",
    "NAP5",
    "NAP6",
    "NAP7",
    "NAP8",
    "NAP9",
    "NAP10",
    "Default-off remains",
    "Flag-on Standard User runtime requires",
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED=true",
    "data-read-only=\"true\"",
    "data-execution-authority=\"false\"",
    "data-provider-handoff=\"false\"",
    "Recommended First Runtime Activation Lane",
    "read-only Standard User source-backed preview lane",
    "intentionally non-executing"
  ], "NAP10 closeout doc");

  assertIncludes(doc, [
    "call, message, WhatsApp, Telegram, SMS, or email",
    "contact a provider",
    "submit a job application",
    "share location",
    "request browser geolocation",
    "activate camera",
    "diagnose, prescribe, refill",
    "execute marketplace transactions",
    "write backend pending real-world actions"
  ], "NAP10 safety boundaries");

  for (let index = 1; index <= 9; index += 1) {
    const aliasPrefix = `qa:nexus-nap${index}-`;
    assert(
      Object.keys(pkg.scripts).some(name => name.startsWith(aliasPrefix)),
      `package.json must keep a NAP${index} QA alias.`
    );
    assert(
      qaSuite.includes(`scripts/nexus-nap${index}-`),
      `qa-suite.js must include NAP${index} QA.`
    );
  }

  assert.equal(
    pkg.scripts["qa:nexus-nap10-agent-power-closeout"],
    "node scripts/nexus-nap10-agent-power-closeout-qa.js",
    "NAP10 package alias must exist."
  );
  assert(
    qaSuite.includes("scripts/nexus-nap10-agent-power-closeout-qa.js"),
    "NAP10 QA must be wired into local-safe suites."
  );

  assert(app.includes("await loadPublicMapConfig();"), "NAP10 depends on NAP9 post-auth config refresh.");
  assert(app.includes("runStandardUserAssistantRuntimePreview"), "Standard User command path must keep runtime preview runner.");
  assert(app.includes('data-execution-authority="false"'), "Standard User preview card must deny execution authority.");
  assert(app.includes('data-provider-handoff="false"'), "Standard User preview card must deny provider handoff.");

  assertIncludes(runtime, [
    "buildAssistantRuntimeResponse",
    "providerHealth",
    "safeRetryPolicy",
    "cachePolicy",
    "noExecutionAuthorized: true",
    "providerHandoffAllowed: false",
    "noProviderContactAuthorized: true",
    "noBackendWritePerformed: true"
  ], "assistant runtime");

  assertIncludes(server, [
    "nexusStandardUserAgentExperience",
    "buildStandardUserAgentExperience",
    "standardUserAgentExperience",
    "previewOnly: true",
    "noExecutionAuthorized: true",
    "noProviderHandoff: true",
    "noNavigationAuthorized: true"
  ], "server assistant runtime exposure");

  assertIncludes(reliabilityHealth, [
    "SAFE_RETRY_POLICY",
    "SAFE_CACHE_POLICY",
    "safeUnavailableState",
    "staleResultWarning",
    "noSecretsLogged",
    "noSecretsCached",
    "noExecutionFallback",
    "noProviderHandoffFallback",
    "noLocationPermissionFallback",
    "noBackendWriteFallback"
  ], "NAP8 reliability health");

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "fs.writeFile",
    "writeFileSync",
    "providerHandoffAllowed: true",
    "executionAuthority: true"
  ].forEach(term => {
    assert(!runtime.includes(term), `NAP10 must not mask unsafe runtime behavior: ${term}`);
    assert(!reliabilityHealth.includes(term), `NAP10 reliability health must not introduce unsafe behavior: ${term}`);
  });

  console.log(JSON.stringify({
    closeoutDocPresent: true,
    napQaChainWired: true,
    defaultOffPostureDocumented: true,
    noExecutionPostureVerified: true,
    nextActivationLanePreviewOnly: true
  }, null, 2));
  console.log("[nexus-nap10-agent-power-closeout-qa] passed");
}

if (require.main === module) {
  try {
    runNap10AgentPowerCloseoutQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap10AgentPowerCloseoutQa
});
