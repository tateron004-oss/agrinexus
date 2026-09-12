const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const router = require("../public/nexus-voice-text-intent-router.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function functionSlice(source, name) {
  let start = source.indexOf(`async function ${name}(`);
  if (start < 0) start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  const nextAsync = source.indexOf("\nasync function ", start + 1);
  const candidates = [next, nextAsync].filter(index => index > start);
  const end = candidates.length ? Math.min(...candidates) : source.length;
  return source.slice(start, end);
}

function assertBridgeContract() {
  const app = read("public", "app.js");
  const shell = read("public", "nexus-voice-demo-shell.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const bridge = functionSlice(app, "installNexusVoiceDemoShellBridge");

  assert(bridge.includes("async submitSafeTranscript"), "FAP7 voice shell bridge must support guarded async routing.");
  assert(bridge.includes("window.NexusVoiceTextIntentRouter?.routeNexusIntent"), "FAP7 bridge must classify transcripts before assistant preview routing.");
  assert(bridge.includes("lowRiskAssistantRoute"), "FAP7 bridge must name and gate the low-risk assistant route.");
  assert(bridge.includes("route.executionAllowed === false"), "FAP7 bridge must require no execution.");
  assert(bridge.includes("route.sideEffectsAllowed === false"), "FAP7 bridge must require no side effects.");
  assert(bridge.includes("route.providerContactAllowed === false"), "FAP7 bridge must block provider contact.");
  assert(bridge.includes("route.messageAllowed === false"), "FAP7 bridge must block messaging.");
  assert(bridge.includes("route.callAllowed === false"), "FAP7 bridge must block calls.");
  assert(bridge.includes("route.locationAllowed === false"), "FAP7 bridge must block location sharing.");
  assert(bridge.includes("route.cameraMediaAllowed === false"), "FAP7 bridge must block camera/media.");
  assert(bridge.includes("route.paymentAllowed === false"), "FAP7 bridge must block payments.");
  assert(bridge.includes("route.medicalActionAllowed === false"), "FAP7 bridge must block medical actions.");
  assert(bridge.includes("route.emergencyDispatchAllowed === false"), "FAP7 bridge must block emergency dispatch.");
  assert(bridge.includes('route.riskLevel === "low"'), "FAP7 bridge must allow only low-risk routes.");
  assert(bridge.includes("runStandardUserAssistantRuntimePreview(transcript"), "FAP7 bridge must reuse the existing guarded assistant preview runner.");
  assert(bridge.includes('source: options.source || "voice-demo-shell"'), "FAP7 bridge must preserve voice shell source metadata.");
  assert(bridge.includes("assistantRuntimePreview: true"), "FAP7 bridge must report preview routing when it succeeds.");
  assert(bridge.includes("assistantRuntimePreview: false"), "FAP7 bridge must report safe fallback routing when preview is unavailable or blocked.");
  assert(bridge.includes("executionAllowed: false"), "FAP7 bridge must report no execution authority.");
  assert(bridge.includes("providerHandoff: false"), "FAP7 bridge must report no provider handoff.");
  assert(bridge.includes("permissionRequested: false"), "FAP7 bridge must report no permission request.");
  assert(!bridge.includes("goSection("), "FAP7 bridge must not navigate sections from voice shell transcript routing.");
  assert(!bridge.includes("renderUserSimpleActiveSection("), "FAP7 bridge must not open module sections from voice shell transcript routing.");

  [
    "SpeechRecognition(",
    "webkitSpeechRecognition(",
    "navigator.mediaDevices.getUserMedia",
    "getUserMedia(",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "providerHandoffAllowed = true",
    "executionAuthority: true",
    "PaymentRequest",
    "tel:",
    "mailto:",
    "whatsapp://",
    "telegram://"
  ].forEach(term => {
    assert(!bridge.includes(term), `FAP7 bridge must not introduce unsafe side-effect token: ${term}`);
  });

  const routeTranscript = functionSlice(shell, "routeTranscript");
  assert(routeTranscript.includes("bridge?.submitSafeTranscript?.(transcript"), "FAP7 voice shell must continue routing low-risk transcripts through the bridge.");
  assert(routeTranscript.indexOf("isHighRiskPrompt") < routeTranscript.indexOf("bridge?.submitSafeTranscript"), "FAP7 voice shell must guard high-risk prompts before bridge routing.");
  assert(routeTranscript.includes("speak(response)"), "FAP7 voice shell must keep spoken response behavior guarded by existing shell logic.");

  assert.equal(
    pkg.scripts["qa:nexus-fap7-voice-command-assistant-routing"],
    "node scripts/nexus-fap7-voice-command-assistant-routing-qa.js",
    "FAP7 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-fap7-voice-command-assistant-routing-qa.js"), "FAP7 QA must be wired into local-safe suites.");
}

function assertRuntimeRouteSafety() {
  const safePrompts = [
    "Help me find agriculture training",
    "Teach me how irrigation works",
    "Show me farm jobs",
    "I need help with crop issues",
    "Turn this into a checklist"
  ];
  safePrompts.forEach(prompt => {
    const route = router.routeNexusIntent(prompt);
    assert.equal(route.riskLevel, "low", `${prompt} must stay low risk.`);
    assert.equal(route.executionAllowed, false, `${prompt} must not allow execution.`);
    assert.equal(route.sideEffectsAllowed, false, `${prompt} must not allow side effects.`);
    const response = runtime.buildAssistantRuntimeResponse(prompt, {
      surface: "standard-user",
      inputMode: "voice-demo-shell",
      previewOnly: true
    }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
      NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
      NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
      NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
      NEXUS_WEATHER_PROVIDER_ENABLED: "true"
    });
    assert.equal(runtime.isSafeAssistantRuntimeResponse(response), true, `${prompt} must produce a safe assistant runtime preview.`);
    assert.equal(response.noExecutionAuthorized, true, `${prompt} must not authorize execution.`);
    assert.equal(response.providerHandoffAllowed, false, `${prompt} must not authorize provider handoff.`);
  });

  [
    "Nexus, call John",
    "Send a WhatsApp message",
    "Show my location",
    "Open the camera",
    "Buy seeds",
    "Schedule an appointment",
    "Emergency help",
    "Access my medical record"
  ].forEach(prompt => {
    const route = router.routeNexusIntent(prompt);
    assert.notEqual(route.riskLevel, "low", `${prompt} must not be routed as low-risk assistant preview.`);
    assert.equal(route.executionAllowed, false, `${prompt} must not allow execution.`);
    assert.equal(route.providerContactAllowed, false, `${prompt} must not allow provider contact.`);
    assert.equal(route.locationAllowed, false, `${prompt} must not allow location.`);
    assert.equal(route.cameraMediaAllowed, false, `${prompt} must not allow camera/media.`);
    assert.equal(route.paymentAllowed, false, `${prompt} must not allow payment.`);
    assert.equal(route.emergencyDispatchAllowed, false, `${prompt} must not allow emergency dispatch.`);
  });
}

function runFap7VoiceCommandAssistantRoutingQa() {
  assertBridgeContract();
  assertRuntimeRouteSafety();
  console.log(JSON.stringify({
    voiceShellBridgeUsesIntentRouter: true,
    lowRiskTranscriptsUseAssistantPreview: true,
    highRiskTranscriptsStayGuarded: true,
    noNavigationFromVoiceBridge: true,
    noProviderHandoff: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-fap7-voice-command-assistant-routing-qa] passed");
}

if (require.main === module) {
  try {
    runFap7VoiceCommandAssistantRoutingQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runFap7VoiceCommandAssistantRoutingQa
});
