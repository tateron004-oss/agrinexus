const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");

const renderMatch = app.match(/function renderUserWorkspace\(\) \{[\s\S]*?function renderUserAccessibilityPanel\(\)/);
assert(renderMatch, "renderUserWorkspace must exist before accessibility panel");
const renderUserWorkspace = renderMatch[0];

assert(renderUserWorkspace.includes("renderNexusAgenticBrainPanel()"), "Standard User workspace must keep the assistant brain visible");
assert(!renderUserWorkspace.includes("renderNexusProductionActionAssistantPanel()"), "Standard User workspace must not expose the production runtime test console");
assert(!renderUserWorkspace.includes("renderNexusRealProviderTestingPanel()"), "Standard User workspace must not expose the real provider testing panel");
assert(!renderUserWorkspace.includes("refreshNexusRealProviderTestingStatus()"), "Standard User workspace must not auto-refresh provider testing status");
assert(!renderUserWorkspace.includes("refreshNexusProductionRuntimeStatus()"), "Standard User workspace must not auto-refresh production runtime testing status");

[
  "without sending",
  "without buyer contact, orders, or payment",
  "Change screen and voice language"
].forEach(text => {
  assert(renderUserWorkspace.includes(text), `Standard User workspace must preserve safe assistant copy: ${text}`);
});

assert(app.includes("Nexus does not diagnose, prescribe, fake provider contact"), "assistant brain panel must preserve medical and provider safety copy");

[
  "function renderNexusProductionActionAssistantPanel()",
  "function renderNexusRealProviderTestingPanel()",
  "data-nexus-real-provider-testing",
  "data-nexus-production-action-assistant"
].forEach(text => {
  assert(app.includes(text), `admin/test runtime code should remain available elsewhere: ${text}`);
});

[
  "data-nexus-runtime-action=\"execute\"",
  "Run controlled test",
  "Real provider testing"
].forEach(text => {
  assert(app.includes(text), `test/admin control remains in source but outside normal Standard User render: ${text}`);
  assert(!renderUserWorkspace.includes(text), `normal Standard User workspace must not expose ${text}`);
});

console.log("Nexus Standard User UI cleanup QA passed.");
