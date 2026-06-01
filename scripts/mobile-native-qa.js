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

const requirements = [
  ["native bridge contract", bridge.wakePhrases.includes("Agri") && bridge.requiredPermissions.includes("backgroundAudio") && bridge.webCommands.includes("voice.stop")],
  ["installable app sharing", manifest.includes('"share_target"') && manifest.includes("Voice Intake") && manifest.includes("Field Route")],
  ["offline bridge cache", sw.includes("native-bridge.json") && sw.includes("agrinexus-pwa-v88")],
  ["visible mobile permission controls", html.includes("mobilePermissionStatus") && html.includes('data-mobile-permission="native-plan"')],
  ["native capability matrix", app.includes("function nativeAppCapabilityMatrix") && app.includes("function nativeAppReadinessSummary")],
  ["native app voice answer", app.includes("highest level app") && app.includes("always-on wake")],
  ["short wake alias", app.includes('"hey agri"') && app.includes('"agri"')],
  ["contained mobile permission layout", styles.includes(".mobile-permission-strip") && styles.includes("grid-template-columns: repeat(4")]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepStrictEqual(missing, [], `Missing mobile native requirements: ${missing.join(", ")}`);

console.log("Mobile native readiness QA passed");
for (const [name] of requirements) console.log(`- ${name}`);
