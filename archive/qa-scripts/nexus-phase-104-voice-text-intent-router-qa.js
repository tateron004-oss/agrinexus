const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const routerPath = path.join(root, "public", "nexus-voice-text-intent-router.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-104-voice-text-intent-router-qa] ${message}`);
    process.exit(1);
  }
}

[
  routerPath,
  indexPath,
  appPath,
  serverPath,
  packagePath,
  qaSuitePath
].forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const routerSource = fs.readFileSync(routerPath, "utf8");
const router = require(routerPath);
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");
const runtimeSource = [indexPath, appPath, serverPath].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");

[
  "agriculture-support",
  "source-review",
  "general-assistant",
  "communication-request",
  "appointment-request",
  "marketplace-request",
  "payment-request",
  "location-request",
  "camera-media-request",
  "health-medical-request",
  "emergency-request"
].forEach(domain => assert(routerSource.includes(domain), `router must include ${domain}.`));

assert(typeof router.routeNexusIntent === "function", "router must expose routeNexusIntent.");

const expectedRoutes = [
  ["Help me with crop issues", "agriculture-support", "review-only", "low"],
  ["Explain the source freshness", "source-review", "review-only", "low"],
  ["What can Nexus do?", "general-assistant", "informational", "low"],
  ["Call the provider", "communication-request", "permission-required", "high"],
  ["Send WhatsApp to the buyer", "communication-request", "permission-required", "high"],
  ["Schedule an appointment", "appointment-request", "permission-required", "high"],
  ["Buy fertilizer", "marketplace-request", "permission-required", "high"],
  ["Process my payment", "payment-request", "blocked", "excluded"],
  ["Find my location", "location-request", "permission-required", "high"],
  ["Open the camera", "camera-media-request", "permission-required", "high"],
  ["Access my medical record", "health-medical-request", "permission-required", "high"],
  ["Emergency dispatch", "emergency-request", "blocked", "excluded"]
];

expectedRoutes.forEach(([prompt, domain, status, riskLevel]) => {
  const result = router.routeNexusIntent(prompt);
  assert(result.intentDomain === domain, `${prompt} must route to ${domain}.`);
  assert(result.routeStatus === status, `${prompt} must be ${status}.`);
  assert(result.riskLevel === riskLevel, `${prompt} must be ${riskLevel}.`);
  assert(result.executionAllowed === false, `${prompt} must not allow execution.`);
  assert(result.sideEffectsAllowed === false, `${prompt} must not allow side effects.`);
  assert(result.liveLookupAllowed === false, `${prompt} must not allow live lookup.`);
  assert(result.providerContactAllowed === false, `${prompt} must not allow provider contact.`);
  assert(result.messageAllowed === false, `${prompt} must not allow messages.`);
  assert(result.callAllowed === false, `${prompt} must not allow calls.`);
  assert(result.appointmentAllowed === false, `${prompt} must not allow appointments.`);
  assert(result.marketplaceTransactionAllowed === false, `${prompt} must not allow marketplace transactions.`);
  assert(result.paymentAllowed === false, `${prompt} must not allow payments.`);
  assert(result.locationAllowed === false, `${prompt} must not allow location.`);
  assert(result.cameraMediaAllowed === false, `${prompt} must not allow camera/media.`);
  assert(result.medicalActionAllowed === false, `${prompt} must not allow medical action.`);
  assert(result.emergencyDispatchAllowed === false, `${prompt} must not allow emergency dispatch.`);
  assert(result.storageMutationAllowed === false, `${prompt} must not allow storage mutation.`);
  assert(result.backendMutationAllowed === false, `${prompt} must not allow backend mutation.`);
  assert(result.hiddenStagedActionAllowed === false, `${prompt} must not allow hidden staged action.`);
  assert(/No action has been taken|No .* has/.test(result.userVisibleDisclosure), `${prompt} must include a no-execution disclosure.`);
});

const summary = router.summarizeIntentRoute(router.classifyVoiceTextIntent("Call John"));
assert(Array.isArray(summary), "summary must be an array.");
assert(summary.some(line => /No action has been taken/.test(line)), "summary must include no-action disclosure.");
assert(summary.some(line => /No provider has been contacted/.test(line)), "summary must include provider boundary.");
assert(summary.some(line => /No message has been sent/.test(line)), "summary must include message boundary.");
assert(summary.some(line => /No call has been placed/.test(line)), "summary must include call boundary.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "window.open",
  "location.href",
  "localStorage",
  "sessionStorage",
  "PaymentRequest",
  "navigator.sendBeacon",
  "tel:",
  "mailto:",
  "whatsapp://",
  "telegram://",
  "import(",
  "require(\"http",
  "require('http",
  "require(\"https",
  "require('https"
].forEach(forbidden => assert(!routerSource.includes(forbidden), `router must not include side effect token: ${forbidden}`));

assert(runtimeSource.includes("nexus-voice-text-intent-router.js?v=nexus-phase-104"), "active runtime must load the router for Sprint B preview integration.");
assert(runtimeSource.includes("NexusVoiceTextIntentRouter"), "app runtime must reference the router API.");
assert(runtimeSource.indexOf("nexus-voice-text-intent-router.js?v=nexus-phase-104") < runtimeSource.indexOf("/app.js?v="), "router must load before app.js.");

assert(packageData.scripts["qa:nexus-phase-104-voice-text-intent-router"] === "node scripts/nexus-phase-104-voice-text-intent-router-qa.js", "package alias must exist.");
assert(qaSuite.includes("scripts/nexus-phase-104-voice-text-intent-router-qa.js"), "qa-suite must include router QA.");

console.log("[nexus-phase-104-voice-text-intent-router-qa] passed");
