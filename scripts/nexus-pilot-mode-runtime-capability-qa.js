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

const capabilitySource = extractFunction(app, "a100PilotModeRuntimeCapability");
const panelSource = extractFunction(app, "a100PilotModeRuntimePanelHtml");
const previewCardSource = extractFunction(app, "renderA100PilotScenarioPreviewCard");
const localPilotSource = extractFunction(app, "runLocalPilotScenario");
const surfaceSource = extractFunction(app, "a100CapabilitySurfaceHtml");
const scopedSource = `${capabilitySource}\n${panelSource}`;

[
  "a100PilotModeRuntimeCapability",
  "a100PilotModeRuntimePanelHtml",
  "Standard User Pilot Mode",
  "Pilot flow for Standard User testing and Africa solution demonstrations.",
  "Agriculture help workflow",
  "Chronic care support workflow",
  "RPM/RTM manual intake",
  "Physician/care-team report",
  "Provider readiness",
  "Provider account/API access status",
  "Simulated provider action",
  "Safety blocked action",
  "Audit/review visibility"
].forEach(term => assert(app.includes(term), `pilot mode runtime capability should include ${term}`));

[
  "data-nexus-pilot-mode-runtime=\"true\"",
  "data-safe-local-only=\"",
  "data-simulation-only=\"",
  "data-real-provider-execution=\"",
  "data-external-mutation=\"",
  "data-no-execution-authorized=\"",
  "data-audit-review-visible=\""
].forEach(attr => assert(panelSource.includes(attr), `pilot panel should render ${attr}`));

[
  "safeLocalOnly: true",
  "simulationOnly: true",
  "realProviderExecution: false",
  "externalMutation: false",
  "noExecutionAuthorized: true",
  "auditReviewVisible: true",
  "providerAccountStatusVisible: true",
  "blockedActionsVisible: true"
].forEach(flag => assert(capabilitySource.includes(flag), `pilot runtime capability should keep ${flag}`));

[
  ["farmer-crop-issue", "Nexus, help me with crop issues"],
  ["diabetes-support", "Nexus, help with diabetes"],
  ["blood-pressure-support", "Nexus, help me with blood pressure"],
  ["physician-report", "Nexus, prepare a physician report"],
  ["plan-route", "Nexus, help me plan a route"],
  ["marketplace-inquiry", "Nexus, prepare marketplace inquiry"],
  ["provider-account-status", "Nexus, what provider accounts are connected?"],
  ["provider-readiness", "Nexus, what providers are connected?"],
  ["safety-review", "Nexus, show safety review"]
].forEach(([id, command]) => {
  assert(capabilitySource.includes(`id: "${id}"`), `pilot scenario should define ${id}`);
  assert(panelSource.includes("data-simple-command"), "pilot scenario buttons should route through existing safe command handler.");
  assert(app.includes(command), `pilot scenario should include safe command ${command}`);
});

assert(panelSource.includes("data-pilot-scenarios=\"safe-local\""), "pilot scenarios should be labeled safe-local.");
assert(panelSource.includes("data-pilot-scenario-cards=\"review-only\""), "pilot scenario review cards should be rendered.");
assert(panelSource.includes("data-pilot-scenario-card=\""), "pilot scenario cards should expose per-scenario review metadata.");
assert(panelSource.includes("data-pilot-capabilities=\"visible\""), "pilot capabilities should be visible.");
assert(panelSource.includes("data-pilot-safety-review=\"no-execution\""), "pilot safety review should be no-execution.");
assert(panelSource.includes("data-simple-command"), "pilot scenario buttons should expose safe simple commands.");
assert(panelSource.includes("runA100PilotScenarioPreviewClick(event, this)"), "pilot scenario buttons should invoke the explicit safe preview click helper.");
assert(localPilotSource.includes("renderA100PilotScenarioPreviewCard"), "pilot scenario clicks with simple commands should render a safe local Pilot preview card.");
assert(
  localPilotSource.indexOf("renderA100PilotScenarioPreviewCard") < localPilotSource.indexOf("mutate(\"/api/pilot/run\""),
  "pilot scenario simple-command guard should run before the legacy local pilot mutation path."
);
assert(app.includes("closest?.(\"[data-pilot-scenario][data-simple-command]\")"), "dynamic pilot scenario buttons should use delegated safe preview handling.");
assert(app.includes("event.target?.nodeType === 1"), "delegated pilot handler should support nested text-node click targets.");
assert(app.includes("}, true);"), "delegated pilot handler should run in capture phase before older pilot handlers.");
assert(app.includes("renderA100PilotScenarioPreviewCard({"), "delegated pilot scenario handling should render the safe preview card.");
assert(app.includes("window.runA100PilotScenarioPreviewClick = runA100PilotScenarioPreviewClick"), "pilot preview click helper should be exposed for dynamic inline Standard User buttons.");
[
  "data-pilot-preview=\"review-only\"",
  "data-real-provider-execution=\"false\"",
  "data-external-mutation=\"false\"",
  "data-provider-handoff=\"false\"",
  "data-no-execution-authorized=\"true\"",
  "data-pilot-preview-safety=\"no-execution\"",
  "No real provider execution",
  "A final execution gate is still required"
].forEach(term => assert(previewCardSource.includes(term), `pilot preview card should include ${term}`));
assert(surfaceSource.includes("a100PilotModeRuntimePanelHtml()"), "default Standard User A100 surface should include pilot runtime capability.");

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
  assert(!scopedSource.includes(term), `pilot mode capability must not introduce external execution behavior: ${term}`);
});

[
  ".a100-pilot-mode-runtime",
  ".a100-pilot-scenario-grid",
  ".a100-pilot-scenario-card-list",
  ".a100-pilot-capability-list",
  ".a100-pilot-safety-review"
].forEach(selector => assert(styles.includes(selector), `styles should include ${selector}`));

assert.equal(
  pkg.scripts["qa:nexus-pilot-mode-runtime-capability"],
  "node scripts/nexus-pilot-mode-runtime-capability-qa.js",
  "package.json should expose pilot mode runtime capability QA alias"
);

assert(
  qaSuite.includes("scripts/nexus-pilot-mode-runtime-capability-qa.js"),
  "qa-suite should include pilot mode runtime capability QA in safe suites"
);

console.log("[nexus-pilot-mode-runtime-capability-qa] passed");
