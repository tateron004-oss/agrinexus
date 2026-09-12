const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
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

const capabilitySource = extractFunction(app, "a100AfricaDeploymentRuntimeCapability");
const panelSource = extractFunction(app, "a100AfricaDeploymentRuntimePanelHtml");
const surfaceSource = extractFunction(app, "a100CapabilitySurfaceHtml");
const scopedSource = `${capabilitySource}\n${panelSource}`;

[
  "a100AfricaDeploymentRuntimeCapability",
  "a100AfricaDeploymentRuntimePanelHtml",
  "Africa Deployment Runtime",
  "Africa-ready rural health, agriculture, and workforce support",
  "summary-first",
  "Community health worker workflow",
  "CHW intake and handoff checklist",
  "Low-bandwidth summary mode",
  "Care-team / physician review preparation",
  "review-only",
  "No provider handoff",
  "No device connection",
  "No emergency dispatch"
].forEach(term => assert(app.includes(term), `Africa deployment capability should include ${term}`));

[
  "data-nexus-africa-deployment-runtime=\"true\"",
  "data-review-only=\"true\"",
  "data-execution-authority=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-geolocation-requested=\"false\"",
  "data-device-connection=\"false\"",
  "data-external-transmission=\"false\"",
  "data-persistent-sensitive-storage=\"false\""
].forEach(attr => assert(panelSource.includes(attr), `Africa deployment panel should render safety attribute ${attr}`));

[
  "rural-telehealth",
  "community-health-worker",
  "chronic-care-navigation",
  "agriculture-support",
  "care-team-review"
].forEach(id => {
  assert(capabilitySource.includes(`id: "${id}"`), `Africa deployment workflow should define ${id}`);
});

assert(panelSource.includes("data-africa-workflow"), "Africa deployment panel should render workflow markers.");
assert(panelSource.includes("data-africa-chw-flow=\"review-only\""), "Africa deployment panel should render review-only CHW flow marker.");
assert(panelSource.includes("data-africa-low-bandwidth=\"summary-first\""), "Africa deployment panel should render summary-first low-bandwidth marker.");
assert(panelSource.includes("data-africa-safety-boundary=\"no-execution\""), "Africa deployment panel should render no-execution safety marker.");

[
  "multilingualReady: true",
  "reviewOnly: true",
  "executionAuthority: false",
  "providerHandoff: false",
  "geolocationRequested: false",
  "deviceConnection: false",
  "externalTransmission: false",
  "persistentSensitiveStorage: false"
].forEach(flag => assert(capabilitySource.includes(flag), `Africa deployment capability should keep ${flag}`));

[
  "Patient concern and preferred language",
  "Manual BP, glucose, weight, activity, and symptom notes if known",
  "Patient education prompt in simple language",
  "Referral or review recommendation for a qualified human",
  "SMS-friendly checklist copy",
  "Offline packet-ready notes",
  "No live video requirement",
  "No automatic location lookup"
].forEach(term => assert(capabilitySource.includes(term), `Africa deployment readiness should include ${term}`));

assert(surfaceSource.includes("a100AfricaDeploymentRuntimePanelHtml()"), "default Standard User A100 surface should include Africa deployment runtime capability.");

[
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
  assert(!scopedSource.includes(term), `Africa deployment capability must not introduce execution/device/network/provider behavior: ${term}`);
});

[
  ".a100-africa-deployment-runtime",
  ".a100-africa-deployment-grid",
  ".a100-africa-chw-flow",
  ".a100-africa-low-bandwidth",
  ".a100-africa-safety-boundary"
].forEach(selector => assert(styles.includes(selector), `styles should include ${selector}`));

assert.equal(
  pkg.scripts["qa:nexus-africa-deployment-runtime-capability"],
  "node scripts/nexus-africa-deployment-runtime-capability-qa.js",
  "package.json should expose Africa deployment runtime capability QA alias"
);

assert(
  qaSuite.includes("scripts/nexus-africa-deployment-runtime-capability-qa.js"),
  "qa-suite should include Africa deployment runtime capability QA in safe suites"
);

console.log("[nexus-africa-deployment-runtime-capability-qa] passed");
