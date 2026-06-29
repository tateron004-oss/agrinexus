const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
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

const capabilitySource = extractFunction(app, "a100SecurityInfrastructureRuntimeCapability");
const panelSource = extractFunction(app, "a100SecurityInfrastructureRuntimePanelHtml");
const surfaceSource = extractFunction(app, "a100CapabilitySurfaceHtml");
const scopedSource = `${capabilitySource}\n${panelSource}`;

[
  "a100SecurityInfrastructureRuntimeCapability",
  "a100SecurityInfrastructureRuntimePanelHtml",
  "Security & Infrastructure Runtime",
  "Public config only",
  "No browser-exposed secrets",
  "Provider execution disabled",
  "Simulation mode labeled",
  "Health data session-only",
  "External mutation disabled",
  "Safe environment readiness"
].forEach(term => assert(app.includes(term), `security infrastructure runtime capability should include ${term}`));

[
  "data-nexus-security-infrastructure-runtime=\"true\"",
  "data-public-config-only=\"",
  "data-browser-secrets-exposed=\"",
  "data-provider-execution-enabled=\"",
  "data-simulation-mode-labeled=\"",
  "data-health-data-session-only=\"",
  "data-external-mutation-enabled=\"",
  "data-backend-mutation=\"false\""
].forEach(attr => assert(panelSource.includes(attr), `security runtime panel should render ${attr}`));

[
  "publicConfigOnly: true",
  "browserSecretsExposed: false",
  "providerExecutionEnabled: false",
  "simulationModeLabeled: true",
  "healthDataSessionOnly: true",
  "externalMutationEnabled: false",
  "environmentReadinessSafeToExpose: true",
  "noSecretsExposed: true",
  "noExternalApiCall: true",
  "noExecutionAuthorized: true",
  "noBackendMutation: true"
].forEach(flag => assert(capabilitySource.includes(flag), `security runtime capability should keep ${flag}`));

[
  "public-config-only",
  "no-browser-secrets",
  "provider-execution-disabled",
  "simulation-mode-labeled",
  "health-data-session-only",
  "external-mutation-disabled"
].forEach(id => assert(capabilitySource.includes(`id: "${id}"`), `security runtime check should define ${id}`));

assert(panelSource.includes("data-security-infrastructure-check"), "security runtime panel should render check markers.");
assert(panelSource.includes("data-security-infrastructure-readiness=\"safe-to-expose\""), "security runtime panel should render safe readiness marker.");
assert(surfaceSource.includes("a100SecurityInfrastructureRuntimePanelHtml()"), "default Standard User A100 surface should include security infrastructure runtime capability.");

[
  "API_KEY",
  "AUTH_TOKEN",
  "CLIENT_SECRET",
  "PRIVATE_KEY",
  "PASSWORD_PEPPER",
  "SESSION_SECRET",
  "TWILIO_AUTH_TOKEN",
  "PAYSTACK_SECRET_KEY",
  "FLUTTERWAVE_SECRET_KEY",
  "OPENAI_API_KEY"
].forEach(term => assert(!scopedSource.includes(term), `new security runtime card must not expose secret-bearing env name ${term}`));

[
  "process.env",
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "sendBeacon",
  "writeDb(",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "navigator.bluetooth",
  "navigator.usb",
  "navigator.serial",
  "dispatchProviderWebhook",
  "open(",
  "location.href",
  "tel:",
  "sms:",
  "mailto:",
  "wa.me",
  "whatsapp://",
  "telegram"
].forEach(term => {
  assert(!scopedSource.includes(term), `security runtime capability must not introduce execution/device/network/provider behavior: ${term}`);
});

assert(!index.includes("nexus-security-infrastructure-runtime-capability-qa"), "QA script should not be loaded by Standard User HTML.");
assert(!app.includes("process.env."), "public app should not read process.env directly in browser runtime.");
assert(server.includes("PRODUCT_IDENTITY") && server.includes("productIdentityMetadata"), "server should continue exposing product metadata through controlled helpers.");

[
  ".a100-security-infrastructure-runtime",
  ".a100-security-infrastructure-grid",
  ".a100-security-infrastructure-summary",
  ".a100-security-infrastructure-readiness"
].forEach(selector => assert(styles.includes(selector), `styles should include ${selector}`));

assert.equal(
  pkg.scripts["qa:nexus-security-infrastructure-runtime-capability"],
  "node scripts/nexus-security-infrastructure-runtime-capability-qa.js",
  "package.json should expose security infrastructure runtime capability QA alias"
);

assert(
  qaSuite.includes("scripts/nexus-security-infrastructure-runtime-capability-qa.js"),
  "qa-suite should include security infrastructure runtime capability QA in safe suites"
);

console.log("[nexus-security-infrastructure-runtime-capability-qa] passed");
