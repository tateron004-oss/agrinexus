const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const modulePath = path.join(root, "public", "nexus-agriculture-intent-router-phase-104.js");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-104-agriculture-intent-router-local-qa] ${message}`);
    process.exit(1);
  }
}

[modulePath, packagePath, qaSuitePath, indexPath, appPath, serverPath].forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const source = fs.readFileSync(modulePath, "utf8");
const router = require(modulePath);
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");
const activeRuntime = [indexPath, appPath, serverPath].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");

assert(router.ROUTER_VERSION === "nexus.agricultureIntentRouter.phase104.v1", "router version must be canonical.");

[
  "My maize leaves are turning yellow",
  "How do I improve irrigation?",
  "How do I prepare for drought?",
  "I need help with crop issues"
].forEach(prompt => {
  const routed = router.buildPreviewOnlyAutonomousObservation(prompt);
  assert(routed.route.route === "agriculture_support_review_preview", `${prompt} must route to preview.`);
  assert(routed.route.canRenderPreview === true, `${prompt} may render preview.`);
  assert(routed.canExecute === false && routed.executionAuthority === "none", `${prompt} must remain non-executing.`);
  assert(routed.route.providerContactEnabled === false, `${prompt} must not contact provider.`);
  assert(routed.route.paymentEnabled === false, `${prompt} must not enable payment.`);
  assert(routed.route.locationSharingEnabled === false, `${prompt} must not enable location sharing.`);
});

[
  "Call an agronomist",
  "Message the supplier",
  "Open WhatsApp",
  "Use my location",
  "Diagnose this plant disease from my camera",
  "Pay for seeds",
  "Apply pesticide now",
  "Emergency pesticide poisoning"
].forEach(prompt => {
  const routed = router.buildPreviewOnlyAutonomousObservation(prompt);
  assert(routed.route.route === "blocked_or_existing_safety_router", `${prompt} must be blocked from Phase 104 preview.`);
  assert(routed.route.canRenderPreview === false, `${prompt} must not render preview.`);
  assert(routed.canExecute === false && routed.executionAuthority === "none", `${prompt} must remain non-executing.`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "getUserMedia",
  "PaymentRequest",
  "localStorage.setItem",
  "window.open",
  "location.href"
].forEach(forbidden => assert(!source.includes(forbidden), `intent router must not include ${forbidden}.`));

[
  "nexus-agriculture-intent-router-phase-104.js",
  "NexusAgricultureIntentRouterPhase104"
].forEach(hook => assert(!activeRuntime.includes(hook), `active runtime must not load ${hook}.`));

assert(packageData.scripts["qa:nexus-phase-104-agriculture-intent-router-local"] === "node scripts/nexus-phase-104-agriculture-intent-router-local-qa.js", "package alias must exist.");
assert(qaSuite.includes("scripts/nexus-phase-104-agriculture-intent-router-local-qa.js"), "qa-suite must include Phase 104 QA.");

console.log("[nexus-phase-104-agriculture-intent-router-local-qa] passed");
