const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const iosController = fs.readFileSync(path.join(root, "native-mobile", "ios", "AgriNexus", "NexusWebViewController.swift"), "utf8");
const androidController = fs.readFileSync(path.join(root, "native-mobile", "android", "app", "src", "main", "java", "com", "agrinexus", "mobile", "NexusNativeController.kt"), "utf8");
const androidManifest = fs.readFileSync(path.join(root, "native-mobile", "android", "app", "src", "main", "AndroidManifest.xml"), "utf8");

assert(iosController.includes('case "call.launch":'), "iOS bridge should handle call.launch");
assert(iosController.includes("launchConfirmedCall(body[\"payload\"] as? [String: Any] ?? [:])"), "iOS bridge should pass call.launch payload safely");
assert(iosController.includes("private func launchConfirmedCall(_ payload: [String: Any])"), "iOS controller should implement launchConfirmedCall");
assert(iosController.includes('provider == "native-phone"'), "iOS call launch should require native-phone provider");
assert(iosController.includes('source == "confirmed-call-handoff"'), "iOS call launch should require confirmed-call-handoff source");
assert(iosController.includes("confirmed else"), "iOS call launch should require executionConfirmed");
assert(iosController.includes("safeTelURL(urlValue)"), "iOS call launch should validate tel URL");
assert(iosController.includes('components.scheme == "tel"'), "iOS call launch should require tel scheme");
assert(iosController.includes("UIApplication.shared.canOpenURL(telURL)"), "iOS call launch should verify Phone UI can open the URL");
assert(iosController.includes("UIApplication.shared.open(telURL"), "iOS call launch should use Phone UI handoff");
assert(iosController.includes("call.launch_failed"), "iOS call launch should emit safe failure event");
assert(iosController.includes("redactedPhone"), "iOS call launch events should use redacted phone");
assert(iosController.includes("phone-ui-opened"), "iOS call launch should report user-visible Phone UI handoff");
assert(!/silent|background call|auto-place/i.test(iosController), "iOS call launch must not claim silent/background call placement");
assert(androidController.includes("Intent(Intent.ACTION_DIAL, Uri.parse(url))"), "Android ACTION_DIAL behavior should remain unchanged");
assert(!androidController.includes("ACTION_CALL"), "Android must still not use ACTION_CALL");
assert(!androidManifest.includes("CALL_PHONE"), "Android manifest must still not request CALL_PHONE");

console.log("iOS call launch QA passed");
