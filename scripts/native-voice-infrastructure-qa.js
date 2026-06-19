const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const sw = read("public/sw.js");
const bridge = JSON.parse(read("public/native-bridge.json"));
const desktopRuntime = JSON.parse(read("native-desktop/desktop-runtime.json"));
const androidManifest = read("native-mobile/android/app/src/main/AndroidManifest.xml");
const androidController = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusNativeController.kt");
const androidBridge = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NativeBridge.kt");
const androidService = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusVoiceService.kt");
const iosController = read("native-mobile/ios/AgriNexus/NexusWebViewController.swift");
const iosRuntime = read("native-mobile/ios/AgriNexus/NexusVoiceRuntime.swift");
const nativeShim = read("native-mobile/bridge/agrinexus-native-voice.js");
const readme = read("native-mobile/README.md");

const checks = [
  ["build advanced", server.includes('AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-293"') && app.includes('AGRINEXUS_BUILD_VERSION = "nexus-behavior-293"') && sw.includes('agrinexus-pwa-v273')],
  ["native architecture endpoint", server.includes("/api/native/voice-architecture") && server.includes("nativeVoiceRuntime") && server.includes("providerDepth")],
  ["provider depth model", server.includes("function providerDepthModel") && server.includes("health-provider-depth") && server.includes("trade-communications-payments")],
  ["realtime streaming model", server.includes("realtimeStreaming") && server.includes("/api/voice/realtime/call") && server.includes("openai-realtime-webrtc")],
  ["bridge 1.5 contract", bridge.version === "1.5.0" && bridge.realtimeVoiceStreaming && bridge.apiEndpoints.nativeVoiceArchitecture === "/api/native/voice-architecture"],
  ["bridge wake gate", bridge.wakeRuntime.nativeWakeGate.enabled === true && bridge.wakeRuntime.nativeWakeGate.followUpWindowSeconds === 12],
  ["provider domains", Array.isArray(bridge.providerDepthDomains) && bridge.providerDepthDomains.includes("health-provider-depth") && bridge.providerDepthDomains.includes("agritech-field-data")],
  ["android background/native permissions", androidManifest.includes("ACCESS_BACKGROUND_LOCATION") && androidManifest.includes("FOREGROUND_SERVICE_MICROPHONE")],
  ["android wake gate", androidService.includes("wakePhrases") && androidService.includes("waitingForCommand") && androidService.includes("followUpWindowMs") && androidService.includes("routeTranscript")],
  ["android native hooks", androidBridge.includes("voice.realtime.start") && androidController.includes("startRealtimeVoiceRuntime") && androidController.includes("prepareCameraCapture")],
  ["ios wake gate", iosRuntime.includes("wakePhrases") && iosRuntime.includes("waitingForCommand") && iosRuntime.includes("routeTranscript")],
  ["ios native hooks", iosController.includes("voice.realtime.start") && iosController.includes("location.route_update") && iosController.includes("camera.capture_ready")],
  ["native shim hooks", nativeShim.includes("startRealtime") && nativeShim.includes("requestLocation") && nativeShim.includes("captureMedia")],
  ["desktop runtime policy", desktopRuntime.version === "1.1.0" && desktopRuntime.runtimePolicy.wakeGate && desktopRuntime.handoff.architectureApi],
  ["documentation updated", readme.includes("wake-gated listening") && readme.includes("/api/native/voice-architecture")]
];

const missing = checks.filter(([, ok]) => !ok).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing native voice infrastructure pieces: ${missing.join(", ")}`);

console.log("Native voice infrastructure QA passed");
for (const [name] of checks) console.log(`- ${name}`);
