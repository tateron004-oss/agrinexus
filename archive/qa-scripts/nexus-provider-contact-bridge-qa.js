const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function includes(source, text, label) {
  assert(source.includes(text), `${label} must include ${text}`);
}

const server = read("server.js");
const app = read("public/app.js");
const styles = read("public/styles.css");
const packageJson = read("package.json");
const qaSuite = read("scripts/qa-suite.js");
const providerIndex = read("server/providers/index.js");
const bridgeSource = read("server/providers/providerContactBridgeProvider.js");
const npiProvider = read("server/providers/npiProvider.js");
const twilioProvider = read("server/providers/twilioProvider.js");
const mapsProvider = read("server/providers/googleMapsProvider.js");
const remindersProvider = read("server/providers/reminderProvider.js");

[
  "server/providers/providerContactBridgeProvider.js",
  "scripts/nexus-provider-contact-bridge-qa.js"
].forEach(relativePath => assert(fs.existsSync(path.join(root, relativePath)), `${relativePath} must exist`));

[
  "providerContactBridge: require(\"./providerContactBridgeProvider\")",
  "/api/nexus/tools/providers/save",
  "/api/nexus/tools/providers/note",
  "Provider Contact Bridge",
  "savedProviders",
  "providerNotes"
].forEach(text => includes(server + providerIndex, text, "server/provider contact bridge wiring"));

[
  "data-nexus-provider-contact-bridge",
  "nexusProviderContactBridgeCards",
  "renderNexusProviderContactBridgeCards",
  "sanitizeNexusProviderTestingDisplayData",
  "maskNexusProviderVisiblePhone",
  "data-provider-contact-action=\"map\"",
  "data-provider-contact-action=\"prepare-call\"",
  "data-provider-contact-action=\"start-call\"",
  "data-provider-contact-action=\"prepare-sms\"",
  "data-provider-contact-action=\"send-sms\"",
  "data-provider-contact-action=\"save\"",
  "data-provider-contact-action=\"reminder\"",
  "data-provider-contact-action=\"note\"",
  "data-provider-contact-confirm",
  "Typed route origin",
  "Unavailable for routing",
  "Unavailable for call/SMS",
  "Non-sensitive SMS draft",
  "Health details are not included by default.",
  "No call was started.",
  "/api/nexus/tools/maps/route",
  "/api/nexus/tools/sms/send",
  "/api/nexus/tools/call/start",
  "/api/nexus/tools/providers/save",
  "/api/nexus/tools/providers/note",
  "/api/nexus/tools/reminders/create"
].forEach(text => includes(app, text, "provider contact bridge UI"));

[
  ".nexus-provider-contact-bridge",
  ".nexus-provider-contact-card",
  ".nexus-provider-contact-actions",
  ".nexus-provider-contact-confirm"
].forEach(text => includes(styles, text, "provider contact bridge styles"));

[
  "requireConfirmation",
  "maskPhoneNumber",
  "No health details or secrets were stored.",
  "Provider notes must stay non-sensitive",
  "sensitiveHealthDataAllowed: false",
  "noHealthDataStored: true",
  "NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED"
].forEach(text => includes(bridgeSource, text, "provider contact bridge provider"));

[
  "CMS NPPES NPI Registry",
  "noHealthDataShared",
  "lookupOnly"
].forEach(text => includes(npiProvider, text, "NPI public lookup provider"));

[
  "requireConfirmation",
  "NEXUS_MESSAGES_ENABLED",
  "NEXUS_CALLS_ENABLED"
].forEach(text => includes(twilioProvider, text, "Twilio execution guard"));

[
  "Origin and destination text are required. Nexus will not use browser geolocation.",
  "noLocationPermissionRequested: true",
  "routeUrl"
].forEach(text => includes(mapsProvider, text, "maps route guard"));

[
  "No OS notification permission was requested.",
  "requireConfirmation"
].forEach(text => includes(remindersProvider, text, "local reminder guard"));

const bridgeUiStart = app.indexOf("function renderNexusProviderContactBridgeCards");
const bridgeUiEnd = app.indexOf("function handleNexusPlatformDashboardClick");
assert(bridgeUiStart >= 0 && bridgeUiEnd > bridgeUiStart, "provider contact bridge UI block must be discoverable");
const bridgeUi = app.slice(bridgeUiStart, bridgeUiEnd);

[
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "window.open(",
  "location.href"
].forEach(forbidden => {
  assert(!bridgeUi.includes(forbidden), `provider contact bridge UI must not introduce ${forbidden}`);
});

[
  /\bNexus diagnoses\b/i,
  /\bNexus prescribes\b/i,
  /\bbook(?:s|ed)? appointment\b/i,
  /\bemergency dispatch(?:ed|es)?\b/i,
  /\bpayment processed\b/i,
  /\bprovider contacted\b/i
].forEach(pattern => {
  assert(!pattern.test(bridgeUi), `provider contact bridge UI must not include unsafe claim ${pattern}`);
});

[
  "sk_live_",
  "sk_test_",
  "AC00000000000000000000000000000000",
  "AIzaSy",
  "xoxb-",
  "-----BEGIN PRIVATE KEY-----"
].forEach(secretPattern => {
  assert(!bridgeUi.includes(secretPattern), `provider contact bridge UI must not expose hardcoded secret pattern ${secretPattern}`);
});

const bridge = require(path.join(root, "server/providers/providerContactBridgeProvider.js"));
const db = { profile: {} };
let result = bridge.saveProvider({ providerName: "Sample Clinic" }, db);
assert.equal(result.body.status, "confirmation_required", "saving a provider must require confirmation");

result = bridge.saveProvider({ providerName: "Sample Clinic", phone: "+12095550123", confirmed: true }, db);
assert.equal(result.body.status, "completed", "confirmed provider save should complete locally");
assert.equal(result.body.data.provider.noHealthDataStored, true, "saved provider must declare no health data stored");
assert.equal(result.body.data.provider.maskedPhone.endsWith("0123"), true, "saved provider phone should preserve only suffix");
assert.equal(result.body.data.provider.maskedPhone.includes("5550123"), false, "saved provider phone must be masked");

result = bridge.saveProviderNote({ providerName: "Sample Clinic", note: "patient has chest pain", confirmed: true }, db);
assert.equal(result.body.status, "blocked", "sensitive health details in provider notes must be blocked");

result = bridge.saveProviderNote({ providerName: "Sample Clinic", note: "Verify office hours.", confirmed: true }, db);
assert.equal(result.body.status, "completed", "non-sensitive provider note should save locally");
assert.equal(result.body.data.note.sensitiveHealthDataAllowed, false, "provider notes must remain non-sensitive");

includes(packageJson, "qa:nexus-provider-contact-bridge", "package.json");
includes(qaSuite, "scripts/nexus-provider-contact-bridge-qa.js", "qa-suite.js");

console.log("Nexus provider contact bridge QA passed.");
