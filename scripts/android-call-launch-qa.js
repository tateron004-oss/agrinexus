const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const bridge = fs.readFileSync(path.join(root, "native-mobile", "android", "app", "src", "main", "java", "com", "agrinexus", "mobile", "NativeBridge.kt"), "utf8");
const controller = fs.readFileSync(path.join(root, "native-mobile", "android", "app", "src", "main", "java", "com", "agrinexus", "mobile", "NexusNativeController.kt"), "utf8");
const manifest = fs.readFileSync(path.join(root, "native-mobile", "android", "app", "src", "main", "AndroidManifest.xml"), "utf8");

assert(bridge.includes('"call.launch" -> controller.launchConfirmedCall'), "Android bridge should route call.launch to controller");
assert(controller.includes("fun launchConfirmedCall(payload: JSONObject)"), "Android controller should implement launchConfirmedCall");
assert(controller.includes('provider != "native-phone"'), "Android call launch should require native-phone provider");
assert(controller.includes('source != "confirmed-call-handoff"'), "Android call launch should require confirmed-call-handoff source");
assert(controller.includes("!confirmed"), "Android call launch should require executionConfirmed");
assert(controller.includes("isSafeTelUrl(url)"), "Android call launch should validate tel URL");
assert(controller.includes("Intent(Intent.ACTION_DIAL, Uri.parse(url))"), "Android call launch should use ACTION_DIAL");
assert(!controller.includes("ACTION_CALL"), "Android call launch must not use ACTION_CALL");
assert(!manifest.includes("CALL_PHONE"), "Android manifest must not request CALL_PHONE");
assert(controller.includes("resolveActivity(activity.packageManager)"), "Android call launch should verify a dialer is available");
assert(controller.includes("call.launch_failed"), "Android call launch should emit safe failure event");
assert(controller.includes("redactedPhone"), "Android call launch failure should use redacted phone only");
assert(controller.includes('Regex("^\\\\+?[0-9][0-9\\\\s().-]{2,31}$")'), "Android call launch should restrict dialable phone characters");

console.log("Android call launch QA passed");
