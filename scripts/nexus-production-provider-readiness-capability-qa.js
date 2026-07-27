const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}(`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const readinessStatusBody = extractFunction(server, "productionProviderReadinessStatus");
const readinessPanelBody = extractFunction(app, "a100ProductionProviderReadinessPanel");
const readinessPanelHtmlBody = extractFunction(app, "a100ProductionProviderReadinessPanelHtml");
const cardBody = extractFunction(app, "a100SafeAutonomyCardHtml");
const intentBody = extractFunction(app, "a100SafeAutonomyIntent");
const surfaceBody = extractFunction(app, "a100CapabilitySurfaceHtml");

[
  "PRODUCTION_PROVIDER_READINESS_REGISTRY",
  "productionProviderReadinessStatus",
  "productionProviderReadinessStatus(providers, providerAccountApiAccess)",
  "productionProviderReadiness,",
  "Production Provider Readiness",
  "Provider adapters are visible for readiness review only",
  "simulationSupported: true",
  "confirmationRequired",
  "permissionRequired",
  "realExecutionDisabled",
  "actionQueueCompatible: true",
  "secretValuesExposed: false",
  "noExternalApiCall: true",
  "noExecutionAuthorized: true"
].forEach(term => assert(server.includes(term), `server should include production provider readiness term: ${term}`));

[
  "phone-call",
  "whatsapp-message",
  "sms-email",
  "maps-navigation",
  "telehealth",
  "rpm-rtm-devices",
  "marketplace-payment",
  "care-team-report-delivery"
].forEach(id => {
  assert(server.includes(`id: "${id}"`), `production readiness registry should include ${id}`);
  assert(app.includes(`"${id}"`), `frontend fallback should include ${id}`);
});

[
  "Phone / call",
  "WhatsApp / message",
  "SMS / email",
  "Maps / navigation",
  "telehealth",
  "RPM / RTM",
  "Marketplace / payment",
  "Care-team / physician report delivery"
].forEach(label => {
  assert(server.toLowerCase().includes(label.toLowerCase()) || app.toLowerCase().includes(label.toLowerCase()), `provider category should be represented: ${label}`);
});

[
  "providerCategory",
  "configured",
  "connected",
  "simulationSupported",
  "confirmationRequired",
  "permissionRequired",
  "unavailableReason",
  "safeNextStep",
  "realExecutionDisabled",
  "adapterContract",
  "providerIds"
].forEach(field => assert(readinessStatusBody.includes(field), `readiness status should expose ${field}`));

assert(readinessStatusBody.includes("providerAccountApiAccess.items"), "readiness should derive account/API state without duplicating secrets.");
assert(readinessStatusBody.includes("runtimeProviders(db)") || server.includes("productionProviderReadinessStatus(runtimeProviders(db), providerAccountApiAccess)"), "config should derive readiness from runtime providers.");
assert(readinessStatusBody.includes("!Boolean(account.realExecutionEnabled)"), "real execution should remain disabled unless the account/API gate explicitly allows it.");
assert(readinessStatusBody.includes("Provider account or credential is not connected."), "unconfigured provider state should be honest.");
assert(readinessStatusBody.includes("Real execution disabled until final gate"), "connected providers should still require final execution gates.");

[
  "data-nexus-production-provider-readiness-panel=\"true\"",
  "data-secret-values-exposed=\"false\"",
  "data-real-execution-enabled=\"false\"",
  "data-production-provider-readiness-id",
  "data-production-provider-real-execution=\"false\"",
  "Adapter:",
  "Permission:",
  "Confirmation:"
].forEach(term => assert(readinessPanelHtmlBody.includes(term), `readiness panel should render safe metadata: ${term}`));

[
  "<button",
  "<a ",
  "href=",
  "<form",
  "<input",
  "<textarea",
  "onclick",
  "submit",
  "dispatch",
  "sendMessage",
  "callProvider",
  "openProvider"
].forEach(term => assert(!readinessPanelHtmlBody.includes(term), `readiness panel must not include executable UI/control term: ${term}`));

assert(readinessPanelBody.includes("data?.productionProviderReadiness"), "frontend panel should consume public readiness metadata.");
assert(cardBody.includes("a100ProductionProviderReadinessPanelHtml(productionProviderReadiness)"), "A100 card should render production provider readiness when attached.");
assert(intentBody.includes("productionProviderReadiness: capability.id === \"providers\" ? a100ProductionProviderReadinessPanel() : null"), "provider intent should attach production provider readiness only for provider prompts.");
assert(surfaceBody.includes("a100ProductionProviderReadinessPanelHtml(a100ProductionProviderReadinessPanel())"), "default Standard User A100 surface should include provider readiness capability.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "https://",
  "http://",
  "dispatchProviderWebhook",
  "writeDb(",
  "logIntegration(",
  "twilio",
  "stripe",
  "paystack",
  "flutterwave",
  "navigator.geolocation",
  "getUserMedia"
].forEach(term => assert(!readinessStatusBody.includes(term), `production readiness status must not call external/write/permission behavior: ${term}`));

[
  "NEXUS_PRODUCTION_PROVIDER_READINESS",
  "API_KEY",
  "TOKEN",
  "SECRET",
  "PASSWORD"
].forEach(secretTerm => assert(!readinessPanelHtmlBody.includes(secretTerm), `browser panel must not expose secret-bearing term: ${secretTerm}`));

[
  ".a100-production-provider-readiness",
  ".a100-production-provider-readiness-summary",
  ".a100-production-provider-readiness-grid",
  ".a100-production-provider-status-list"
].forEach(selector => assert(styles.includes(selector), `styles should include ${selector}`));

assert.equal(
  pkg.scripts["qa:nexus-production-provider-readiness-capability"],
  "node scripts/nexus-production-provider-readiness-capability-qa.js",
  "package.json should expose production provider readiness QA alias"
);

assert(
  qaSuite.includes("scripts/nexus-production-provider-readiness-capability-qa.js"),
  "qa-suite should include production provider readiness QA in safe suites"
);

console.log("[nexus-production-provider-readiness-capability-qa] passed");
