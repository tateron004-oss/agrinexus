const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const envExample = fs.readFileSync(path.join(root, ".env.example"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
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

const providerStatusBody = extractFunction(server, "providerAccountApiAccessStatus");
const accountPanelBody = app.slice(
  app.indexOf("function a100ProviderAccountApiAccessPanel()"),
  app.indexOf("function a100ChronicCareQuickActions")
);
const cardBody = extractFunction(app, "a100SafeAutonomyCardHtml");
const renderCardBody = extractFunction(app, "renderA100SafeAutonomyCard");
const panelHtmlBody = extractFunction(app, "a100ProviderAccountApiAccessPanelHtml");
const intentBody = extractFunction(app, "a100SafeAutonomyIntent");
const openPreviewBody = extractFunction(app, "openA100SafeAutonomyPreview");
const capabilitySurfaceBody = extractFunction(app, "a100CapabilitySurfaceHtml");
const a100ClickBody = extractFunction(app, "handleA100CapabilityButtonClick");
const runSimpleActionBody = extractFunction(app, "runSimpleAction");
const renderBody = extractFunction(app, "render").includes("renderUserSimpleActiveSection(currentSectionId())")
  ? extractFunction(app, "render")
  : app.slice(app.indexOf("function render()"), app.indexOf("function ensureLiveRouteLayer"));
const bindStaticBody = extractFunction(app, "bindStatic");

[
  "PROVIDER_ACCOUNT_API_ACCESS_REGISTRY",
  "providerAccountApiAccessStatus",
  "providerAccountApiAccess: providerAccountApiAccessStatus()",
  "providerAccountApiAccess,",
  "Provider Accounts & API Access",
  "Simulation only",
  "Account not connected",
  "API credential missing",
  "Provider review required",
  "Real execution disabled",
  "noSecretsExposed: true",
  "noExternalApiCalls: true",
  "noExecutionAuthorized: true"
].forEach(term => assert(server.includes(term), `server should include safe provider account/API access term: ${term}`));

[
  "whatsapp-messaging",
  "sms-provider",
  "voice-phone-provider",
  "maps-routing-provider",
  "telehealth-video-provider",
  "rpm-rtm-device-vendor",
  "email-provider",
  "marketplace-payment-provider",
  "hosting-deployment-provider",
  "analytics-reporting-provider",
  "care-team-report-delivery-provider"
].forEach(id => {
  assert(server.includes(`id: "${id}"`), `registry should include ${id}`);
  assert(app.includes(`"${id}"`), `frontend fallback should include ${id}`);
});

[
  "providerCategory",
  "providerOptionsExamples",
  "accountRequired",
  "apiKeyOrTokenRequired",
  "webhookRequired",
  "callbackUrlRequired",
  "businessVerificationRequired",
  "complianceAgreementRequired",
  "environmentVariablesRequired",
  "configured",
  "connected",
  "simulationAvailable",
  "realExecutionEnabled",
  "safeNextSetupStep",
  "unavailableReason"
].forEach(field => assert(providerStatusBody.includes(field), `registry status should expose ${field}`));

[
  "WHATSAPP_PROVIDER",
  "SMS_WEBHOOK_URL",
  "TWILIO_ACCOUNT_SID",
  "MAPBOX_ACCESS_TOKEN",
  "HEALTH_TELEHEALTH_WEBHOOK_URL",
  "RPM_RTM_VENDOR_API_KEY",
  "EMAIL_WEBHOOK_URL",
  "STRIPE_SECRET_KEY",
  "PUBLIC_BASE_URL",
  "ANALYTICS_API_KEY",
  "HEALTH_NOTIFICATION_WEBHOOK_URL"
].forEach(name => assert(server.includes(name), `registry should list env variable name ${name}`));

[
  "RPM_RTM_VENDOR_PROVIDER=",
  "RPM_RTM_VENDOR_API_KEY=",
  "RPM_RTM_WEBHOOK_URL=",
  "ANALYTICS_PROVIDER=",
  "ANALYTICS_API_KEY=",
  "REPORTING_WEBHOOK_URL="
].forEach(term => assert(envExample.includes(term), `.env.example should include placeholder ${term}`));

assert(providerStatusBody.includes("NEXUS_REAL_PROVIDER_EXECUTION_ENABLED"), "real execution should require a global explicit env flag.");
assert(providerStatusBody.includes("NEXUS_PROVIDER_ACCOUNT_CONNECTIONS_ENABLED"), "connected status should require an explicit connection env flag.");
assert(providerStatusBody.includes("realExecutionEnabled ? \"Real execution enabled\" : \"Real execution disabled\""), "real execution should default to disabled status.");
assert(providerStatusBody.includes("secretValuesExposed: false"), "registry items should mark no secret exposure.");
assert(providerStatusBody.includes("noExternalApiCall: true"), "registry items should mark no external API call.");
assert(providerStatusBody.includes("noExecutionAuthorized: true"), "registry items should mark no execution authority.");

[
  "data-nexus-provider-account-api-access-panel=\"true\"",
  "data-secret-values-exposed=\"false\"",
  "data-real-execution-enabled=",
  "data-provider-account-api-access-id=",
  "data-provider-account-configured=",
  "data-provider-account-connected=",
  "data-provider-account-real-execution=",
  "Env names:",
  "a100ProviderAccountApiAccessPanelHtml(a100ProviderAccountApiAccessPanel())",
  "a100ProviderAccountApiAccessPanel()",
  "providerAccountApiAccess: capability.id === \"providers\""
].forEach(term => assert(app.includes(term), `frontend should include passive provider account panel term: ${term}`));

assert(cardBody.includes("a100ProviderAccountApiAccessPanelHtml(providerAccountApiAccess)"), "A100 card should render the provider account panel with the shared helper.");
assert(capabilitySurfaceBody.includes("a100ProviderAccountApiAccessPanelHtml(a100ProviderAccountApiAccessPanel())"), "Standard User A100 surface should render provider account/API access panel by default.");
assert(panelHtmlBody.includes("data-nexus-provider-account-api-access-panel=\"true\""), "shared panel helper should render the provider account panel marker.");
assert(renderCardBody.includes("document.body.classList.contains(\"user-mode\")"), "A100 card rendering should allow the Standard User body mode marker.");
assert(intentBody.includes("providerAccountApiAccess: capability.id === \"providers\""), "Provider intent should attach provider account/API access details only on provider status prompts.");
assert(app.includes('{ id: "providers", label: "Provider Status", detail: "Show connected, not connected, preview-only, and review-required status.", command: "Nexus, what providers are connected?", section: "dashboard" }'), "Provider Status capability should target the dashboard A100 card surface.");
assert(openPreviewBody.includes("section === \"dashboard\" || section === \"agent\""), "Provider and task safe previews should render their review-only cards on the dashboard.");
assert(capabilitySurfaceBody.includes("data-a100-capability="), "A100 capability buttons should declare deterministic capability ids.");
assert(capabilitySurfaceBody.includes("onclick=\"return handleA100CapabilityButtonClick(event, this)\""), "A100 capability buttons should have a narrow direct safe-preview handler.");
assert(a100ClickBody.includes("a100SafeAutonomyIntent(button.dataset.simpleCommand)"), "A100 direct handler should use the safe intent builder.");
assert(a100ClickBody.includes("openA100SafeAutonomyPreview(intent)"), "A100 direct handler should use the safe preview renderer.");
assert(app.includes("window.handleA100CapabilityButtonClick = handleA100CapabilityButtonClick;"), "A100 direct handler should be available to generated inline capability buttons.");
assert(runSimpleActionBody.includes("button.dataset.a100Capability"), "Standard User A100 buttons should route directly to the safe preview renderer.");
assert(runSimpleActionBody.includes("openA100SafeAutonomyPreview(intent)"), "A100 direct button handling should render existing safe preview cards.");
assert(bindStaticBody.includes("[data-a100-capability][data-simple-command]"), "Static click delegation should recognize A100 capability buttons.");
assert(bindStaticBody.includes("document.body.classList.contains(\"user-mode\")"), "Static A100 delegation should allow the Standard User body mode marker.");
assert(bindStaticBody.includes("openA100SafeAutonomyPreview(intent)"), "Static A100 delegation should use the safe preview renderer.");
assert(renderBody.indexOf("renderUserSimpleActiveSection(currentSectionId())") < renderBody.lastIndexOf("bindDynamic()"), "render should bind dynamic handlers after Standard User active section rendering.");
assert(accountPanelBody.includes("data?.providerAccountApiAccess"), "panel should consume public state metadata.");
assert(accountPanelBody.includes("fallbackItems"), "panel should have conservative fallback data.");

[
  "<button",
  "<a ",
  "<form",
  "<input",
  "<textarea",
  "onclick",
  "href=",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "window.open",
  "location.href",
  "navigator.geolocation",
  "getUserMedia",
  "localStorage",
  "sessionStorage"
].forEach(term => assert(!panelHtmlBody.includes(term), `provider account panel must not include ${term}`));

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "http.request",
  "https.request",
  "dispatchProviderWebhook",
  "writeDb(",
  "logIntegration(",
  "sendSms",
  "sendEmail",
  "twilio",
  "stripe",
  "paystack",
  "flutterwave"
].forEach(term => {
  assert(!providerStatusBody.includes(term), `provider account status must not call external/write behavior: ${term}`);
});

[
  "process.env.OPENAI_API_KEY",
  "process.env.TWILIO_AUTH_TOKEN",
  "process.env.STRIPE_SECRET_KEY",
  "process.env.PAYSTACK_SECRET_KEY",
  "process.env.HEALTH_PROVIDER_API_KEY"
].forEach(term => {
  assert(!app.includes(term), `frontend must not reference server secret expression ${term}`);
});

assert(styles.includes(".a100-provider-account-api-access"), "provider account panel styles should exist.");
assert(styles.includes(".a100-provider-account-api-access-grid"), "provider account grid styles should exist.");
assert(styles.includes("@media (max-width: 720px)"), "responsive CSS should remain present.");
assert(styles.includes("body.user-mode .a100-provider-account-api-access-grid"), "provider account grid should collapse in mobile media rule.");

assert.equal(
  pkg.scripts["qa:nexus-provider-account-api-access-capability"],
  "node scripts/nexus-provider-account-api-access-capability-qa.js",
  "package alias should expose provider account/API access QA."
);
assert(
  qaSuite.includes("scripts/nexus-provider-account-api-access-capability-qa.js"),
  "qa-suite should include provider account/API access QA."
);

console.log("[nexus-provider-account-api-access-capability-qa] passed");
