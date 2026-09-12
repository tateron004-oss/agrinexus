const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

for (const target of [
  "telehealthProviderQueuePanel",
  "telehealthEncounterStatusList",
  "telehealthProviderActionList",
  "telehealthProviderActionButtons"
]) {
  assert(html.includes(target), `Health UI should include ${target}`);
}

for (const text of [
  "Telehealth Provider Queue - Local Demo",
  "Encounter Workflow Status",
  "Local demo workflow",
  "Not a live clinical dispatch system",
  "Provider actions update local encounter status only"
]) {
  assert(html.includes(text) || app.includes(text), `Provider queue UI should include wording: ${text}`);
}

assert(app.includes("data.profile.telehealthEncounters || []"), "App should read telehealthEncounters");
assert(app.includes("data.profile.telehealthProviderActions || []"), "App should read telehealthProviderActions");
assert(app.includes("lifecycleState"), "App should render encounter lifecycle state");
assert(app.includes("status"), "App should render encounter/provider status");
assert(app.includes("latestProviderAction"), "App should render latest provider action summary");
assert(app.includes("Details redacted or unavailable."), "App should handle Investor/redacted provider action details defensively");
assert(!app.includes("action.providerName ||"), "Provider action display should not require providerName");
assert(app.includes("data-provider-workflow"), "Provider workflow buttons should be generated with data-provider-workflow");
assert(app.includes('path: "/api/health/provider-workflow"'), "Provider workflow buttons should post to backend endpoint");
assert(app.includes("openWorkflowModal({") && app.includes("openTelehealthProviderWorkflow"), "Provider workflow buttons should use the existing confirmation modal");
assert(app.includes("!String(data.user?.role || \"\").toLowerCase().includes(\"investor\")"), "Provider workflow buttons should be hidden for Investor role");

console.log("Telehealth provider UI QA passed");
