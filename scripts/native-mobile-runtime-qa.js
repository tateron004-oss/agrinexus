const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const bridge = JSON.parse(read("public/native-bridge.json"));
const androidManifest = read("native-mobile/android/app/src/main/AndroidManifest.xml");
const androidGradle = read("native-mobile/android/app/build.gradle");
const androidController = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusNativeController.kt");
const androidService = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusVoiceService.kt");
const iosController = read("native-mobile/ios/AgriNexus/NexusWebViewController.swift");
const iosRuntime = read("native-mobile/ios/AgriNexus/NexusVoiceRuntime.swift");
const injectedBridge = read("native-mobile/bridge/agrinexus-native-voice.js");
const readme = read("native-mobile/README.md");
const desktopRuntime = JSON.parse(read("native-desktop/desktop-runtime.json"));
const desktopReadme = read("native-desktop/README.md");
const windowsWakeListener = read("native-desktop/windows/NexusWakeListener.ps1");

const checks = [
  ["bridge contract exists", bridge.nativeEvents.includes("voice.final_transcript") && bridge.webCommands.includes("wake.start")],
  ["android permissions", androidManifest.includes("RECORD_AUDIO") && androidManifest.includes("FOREGROUND_SERVICE_MICROPHONE") && androidManifest.includes("ACCESS_FINE_LOCATION") && androidManifest.includes("CAMERA")],
  ["android core dependency", androidGradle.includes("androidx.core:core-ktx")],
  ["android webview bridge", androidController.includes("addJavascriptInterface") && androidController.includes("AndroidAgriNexus") && androidController.includes("window.AgriNexusNativeBridge")],
  ["android native runtime registration", androidController.includes("/api/native/voice-runtime") && androidController.includes("\"wakeMode\", \"foreground\"") && androidController.includes("\"microphone\", \"granted\"")],
  ["android voice service", androidService.includes("SpeechRecognizer") && androidService.includes("EXTRA_PARTIAL_RESULTS") && androidService.includes("startForeground") && androidService.includes("ACTION_TRANSCRIPT") && androidService.includes("broadcastTranscript")],
  ["ios permissions", read("native-mobile/ios/AgriNexus/Info.plist").includes("NSSpeechRecognitionUsageDescription") && read("native-mobile/ios/AgriNexus/Info.plist").includes("UIBackgroundModes")],
  ["ios webview bridge", iosController.includes("WKScriptMessageHandler") && iosController.includes("agrinexusNative") && iosController.includes("/api/native/voice-runtime")],
  ["ios voice runtime", iosRuntime.includes("SFSpeechRecognizer") && iosRuntime.includes("AVAudioEngine") && iosRuntime.includes("voice.final_transcript")],
  ["web to native shim", injectedBridge.includes("window.AgriNexusNativeVoice") && injectedBridge.includes("wake.start") && injectedBridge.includes("permissions.request")],
  ["documentation", readme.includes("OS microphone permission") && readme.includes("visible listening indicator")],
  ["desktop runtime contract", bridge.nativeRuntimeSource?.desktop === "native-desktop" && desktopRuntime.platforms.windows.entrypoint === "native-desktop/windows/NexusWakeListener.ps1"],
  ["desktop visible wake listener", windowsWakeListener.includes("System.Speech") && windowsWakeListener.includes("visible listener") && windowsWakeListener.includes("AGRINEXUS_SESSION_COOKIE") && windowsWakeListener.includes("/api/agent/command")],
  ["desktop documentation", desktopReadme.includes("Chrome is closed") && desktopReadme.includes("SessionCookie")]
];

const missing = checks.filter(([, ok]) => !ok).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing native mobile runtime pieces: ${missing.join(", ")}`);

console.log("Native mobile runtime QA passed");
for (const [name] of checks) console.log(`- ${name}`);
