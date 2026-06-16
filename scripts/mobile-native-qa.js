const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");
const manifest = fs.readFileSync(path.join(root, "public", "manifest.webmanifest"), "utf8");
const bridge = JSON.parse(fs.readFileSync(path.join(root, "public", "native-bridge.json"), "utf8"));
const androidController = fs.readFileSync(path.join(root, "native-mobile", "android", "app", "src", "main", "java", "com", "agrinexus", "mobile", "NexusNativeController.kt"), "utf8");
const iosRuntime = fs.readFileSync(path.join(root, "native-mobile", "ios", "AgriNexus", "NexusVoiceRuntime.swift"), "utf8");

const requirements = [
  ["native bridge contract", bridge.version === "1.4.0" && bridge.wakePhrases.includes("Agri") && bridge.requiredPermissions.includes("backgroundAudio") && bridge.requiredPermissions.includes("desktopWakeListenerOptional") && bridge.webCommands.includes("voice.stop")],
  ["native runtime source contract", bridge.nativeRuntimeSource?.android === "native-mobile/android" && bridge.nativeRuntimeSource?.ios === "native-mobile/ios/AgriNexus" && bridge.nativeRuntimeSource?.qa === "npm run app:native-runtime-qa"],
  ["native wake runtime", bridge.wakeRuntime?.mode === "native-required-for-true-background" && bridge.wakeRuntime.stopPhrases.includes("Nexus stop") && bridge.webCallbacks?.onTranscript?.includes("voice.final_transcript")],
  ["native command envelope", bridge.commandEnvelope?.inputMode?.includes("native") && bridge.apiEndpoints?.nativeRuntime === "/api/native/voice-runtime" && bridge.offlineQueue?.queueableCommands?.includes("agent.command")],
  ["native permission session contract", bridge.apiEndpoints?.nativePermissionSession === "/api/native/voice-runtime" && bridge.nativePermissionSession?.requiredPayload?.permissions?.microphone === "granted" && bridge.webCommands.includes("permissions.register")],
  ["communications execution readiness endpoint", bridge.apiEndpoints?.communicationsReadiness === "/api/communications/execution-readiness" && bridge.communicationsExecution?.channels?.includes("whatsapp")],
  ["native camera and media handoff", bridge.requiredPermissions.includes("camera") && bridge.webCommands.includes("camera.capture") && bridge.nativeEvents.includes("camera.media_attached")],
  ["installable app sharing", manifest.includes('"share_target"') && manifest.includes("Voice Intake") && manifest.includes("Field Route")],
  ["offline bridge cache", sw.includes("native-bridge.json") && sw.includes("agrinexus-pwa-v255")],
  ["visible mobile permission controls", html.includes("mobilePermissionStatus") && html.includes('data-mobile-permission="native-plan"')],
  ["native capability matrix", app.includes("function nativeAppCapabilityMatrix") && app.includes("function nativeAppReadinessSummary") && app.includes("function installAgriNexusNativeBridge")],
  ["native bridge receiver", app.includes("window.AgriNexusNativeBridge") && app.includes("voice.final_transcript") && app.includes("location.route_update") && app.includes("camera.media_attached")],
  ["streaming voice native state bridge", app.includes("function streamingVoiceEnabled") && app.includes("function registerNativeVoiceSession") && app.includes("function updateNativeVoiceBridgeState") && app.includes("window.AgriNexusNativeVoice") && app.includes("recognition.interimResults = streamingVoiceEnabled() || chromeVoiceRuntimeReady()")],
  ["native-ready voice session controller", app.includes("function updateNexusVoiceSession") && app.includes("activeTurnToken") && app.includes("userSpeaking") && app.includes("assistantSpeaking") && app.includes("function scheduleNexusSpeech")],
  ["native shell source", androidController.includes("sendTranscript") && androidController.includes("/api/native/voice-runtime") && iosRuntime.includes("SFSpeechRecognizer") && iosRuntime.includes("voice.final_transcript")],
  ["native app voice answer", app.includes("highest level app") && app.includes("visible desktop companion") && app.includes("phone-style always-on behavior")],
  ["desktop wake companion bridge", bridge.nativeRuntimeSource?.desktop === "native-desktop" && bridge.desktopRuntime?.windowsEntrypoint === "native-desktop/windows/NexusWakeListener.ps1" && bridge.desktopRuntime?.browserIndependence?.includes("Chrome microphone permission")],
  ["short wake alias", app.includes('"hey agri"') && app.includes('"agri"')],
  ["contained mobile permission layout", styles.includes(".mobile-permission-strip") && styles.includes("grid-template-columns: repeat(4")]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing mobile native requirements: ${missing.join(", ")}`);

console.log("Mobile native readiness QA passed");
for (const [name] of requirements) console.log(`- ${name}`);



