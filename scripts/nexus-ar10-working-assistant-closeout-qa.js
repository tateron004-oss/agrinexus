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

function runAr10WorkingAssistantCloseoutQa() {
  const doc = read("docs", "NEXUS_AR10_WORKING_ASSISTANT_CLOSEOUT.md");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const orchestrator = read("server", "nexus-live-source-orchestrator.js");
  const runtime = read("server", "nexus-assistant-runtime-entrypoint.js");
  const preview = read("server", "nexus-assistant-live-source-preview.js");

  assertIncludes(doc, [
    "Assistant Runtime 1",
    "read-only",
    "preview-only",
    "weather",
    "agriculture-context",
    "news-security",
    "job-search",
    "shipment-tracking",
    "music-media",
    "Unavailable states are expected and safe",
    "Follow-ups remain bounded",
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED=true",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED=true",
    "With flags off",
    "With flags on",
    "AR9 browser validation confirmed",
    "browser console warning/error count is `0`",
    "does not claim click-through prompt validation",
    "Remaining blockers",
    "Recommended Next Sprint Train",
    "non-executing and default-off"
  ], "AR10 closeout doc");

  assertIncludes(doc, [
    "calls, messages, WhatsApp, Telegram, SMS, or email",
    "payments, purchases, checkout, or marketplace transactions",
    "appointment booking or job application submission",
    "provider contact or dispatch",
    "location sharing or geolocation permission",
    "camera or microphone activation",
    "medical, pharmacy, emergency, or regulated execution",
    "backend writes or pending real-world actions"
  ], "AR10 blocked-action section");

  assertIncludes(orchestrator, [
    "weather",
    "agriculture-context",
    "news-security",
    "job-search",
    "shipment-tracking",
    "music-media",
    "HIGH_RISK_BLOCKED_INTENTS",
    "EXECUTION_PHRASE_PATTERNS",
    "noExecutionAuthorized: true",
    "noLocationPermissionRequested: true",
    "noProviderContactAuthorized: true",
    "noBackendWritePerformed: true",
    "RELIABILITY_CACHE_POLICY",
    "withProviderTimeout",
    "normalizeProviderFailure"
  ], "orchestrator");

  assertIncludes(runtime, [
    "buildAssistantRuntimeResponse",
    "buildAssistantRuntimeFollowUpResponse",
    "safeNextSteps",
    "blockedActions",
    "providerHandoffAllowed: false",
    "noExecutionAuthorized: true",
    "noLocationPermissionRequested: true",
    "noProviderContactAuthorized: true",
    "noBackendWritePerformed: true",
    "reliability: orchestrationResult.reliability || null"
  ], "assistant runtime");

  assertIncludes(preview, [
    "isPreviewEnabled",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED",
    "buildAssistantLiveSourcePreview",
    "noExecutionRequired: true",
    "executionAuthority: false"
  ], "assistant live-source preview");

  for (let index = 1; index <= 9; index += 1) {
    const scriptName = `qa:nexus-ar${index}`;
    assert(
      Object.keys(pkg.scripts).some(name => name.startsWith(scriptName)),
      `package.json must keep an AR${index} QA alias.`
    );
    assert(
      qaSuite.includes(`scripts/nexus-ar${index}-`) || qaSuite.includes(`scripts\\nexus-ar${index}-`),
      `qa-suite.js must include AR${index} QA.`
    );
  }

  assert.equal(
    pkg.scripts["qa:nexus-ar10-working-assistant-closeout"],
    "node scripts/nexus-ar10-working-assistant-closeout-qa.js",
    "AR10 package alias must exist."
  );
  assert(
    qaSuite.includes("scripts/nexus-ar10-working-assistant-closeout-qa.js"),
    "AR10 QA must be wired into local-safe suites."
  );

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
    assert(!orchestrator.includes(term), `AR10 closeout must not mask unsafe orchestrator behavior: ${term}`);
    assert(!runtime.includes(term), `AR10 closeout must not mask unsafe runtime behavior: ${term}`);
  });

  console.log(JSON.stringify({
    closeoutDocPresent: true,
    providerLanesDocumented: true,
    defaultOffPostureDocumented: true,
    browserValidationDocumented: true,
    arQaChainWired: true,
    noExecutionPostureVerified: true
  }, null, 2));
  console.log("[nexus-ar10-working-assistant-closeout-qa] passed");
}

if (require.main === module) {
  try {
    runAr10WorkingAssistantCloseoutQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAr10WorkingAssistantCloseoutQa
});
