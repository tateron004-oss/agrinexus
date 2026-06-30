const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const cssPath = path.join(root, "public", "styles.css");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

const app = fs.readFileSync(appPath, "utf8");
const css = fs.readFileSync(cssPath, "utf8");
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");

function includesAll(source, values, label) {
  for (const value of values) {
    assert(source.includes(value), `${label} must include ${value}`);
  }
}

includesAll(app, [
  "NEXUS_PLATFORM_DASHBOARD_MODES",
  "renderNexusPlatformDashboard",
  "handleNexusPlatformDashboardClick",
  "data-nexus-platform-dashboard=\"true\"",
  "data-platform-mode-card",
  "data-platform-mode-action",
  "data-current-platform-mode",
  "data-dashboard-ask-current",
  "selectedNexusDashboardModeId"
], "Dashboard runtime");

includesAll(app, [
  "Agriculture Support",
  "Crop Issue Guidance",
  "Marketplace / AgriTrade",
  "Jobs & Workforce",
  "Training & Literacy",
  "Health Access Preparation",
  "Chronic Care Preparation",
  "Provider Report Builder",
  "Offline Intelligence Mode",
  "Source Trust / Citation Support",
  "Maps / Location Preparation",
  "Communications Preparation",
  "Community Services",
  "Admin / Testing Tools"
], "Dashboard modes");

includesAll(app, [
  "Preparation Only",
  "Provider Review Required",
  "Source-Backed Guidance",
  "Preview",
  "Review Only",
  "No buying, selling, buyer contact, checkout, or payment from this dashboard.",
  "No medical diagnosis, prescription, scheduling, provider contact, or emergency dispatch.",
  "No calls, messages, provider handoff, or external app opens automatically.",
  "No browser location permission, live sharing, dispatch, or navigation handoff starts here.",
  "No sync, send, call, payment, or provider handoff occurs automatically.",
  "Nexus will not diagnose, prescribe, replace physicians, contact providers, book appointments, send messages, make calls, complete payments, share location, or trigger emergency services from this dashboard.",
  "Health and chronic care outputs are for provider review. Agriculture guidance should be confirmed with local experts where needed."
], "Dashboard safety labels");

includesAll(app, [
  "Prepare Job Application",
  "Prepare Provider Access",
  "Prepare Provider Call",
  "Review Clinic Payment",
  "Contact Buyer Review",
  "Create Order Review",
  "Ship Crop Review",
  "Review Buyer Payment"
], "Safer action labels");

assert(!app.includes("Buyer Pay</strong>"), "Dashboard cleanup must not leave Buyer Pay as a visible Standard User action label.");
assert(!app.includes("Call Provider</strong>"), "Dashboard cleanup must not leave Call Provider as a visible Standard User action label.");
assert(!app.includes("Clinic Payment</strong>"), "Dashboard cleanup must not leave Clinic Payment as a visible Standard User action label.");
assert(!app.includes("Contact Buyer</strong>"), "Dashboard cleanup must not leave Contact Buyer as an unqualified visible Standard User action label.");
assert(!app.includes("Apply for Job</strong>"), "Dashboard cleanup must not leave Apply for Job as a visible Standard User action label.");

includesAll(css, [
  ".nexus-platform-dashboard",
  ".nexus-platform-overview",
  ".nexus-platform-dashboard-layout",
  ".nexus-mode-grid",
  ".nexus-mode-card",
  ".nexus-assistant-dashboard-panel",
  ".nexus-current-mode",
  ".nexus-dashboard-suggestions",
  ".nexus-safety-status",
  "grid-template-columns: repeat(3, minmax(0, 1fr))",
  "grid-template-columns: repeat(2, minmax(0, 1fr))",
  "@media (max-width: 560px)"
], "Dashboard CSS");

assert(
  /body\.user-mode \.app\s*\{[\s\S]*max-width:\s*min\(1440px,\s*calc\(100% - 32px\)\)/.test(css),
  "User-mode desktop app shell must no longer be capped to phone width."
);
assert(
  /@media \(max-width: 560px\)[\s\S]*body\.user-mode \.app\s*\{[\s\S]*max-width:\s*460px/.test(css),
  "Mobile breakpoint must restore compact Standard User width."
);

const dashboardBlock = app.slice(app.indexOf("const NEXUS_PLATFORM_DASHBOARD_MODES"), app.indexOf("function renderUserWorkspace"));
assert(!/window\.open|navigator\.geolocation|location\.href|fetch\(|mutate\(|openWorkflowModal\(|workflowConfig\(/.test(dashboardBlock), "Dashboard definitions and renderer must not introduce execution, network, geolocation, or workflow modal hooks.");
assert(/goSection\(mode\.section/.test(app), "Dashboard mode actions should use existing section navigation.");
assert(/openAskNexus\(\)/.test(app), "Dashboard should preserve Ask Nexus access.");

assert.equal(
  packageData.scripts["qa:nexus-platform-dashboard"],
  "node scripts/nexus-platform-dashboard-qa.js",
  "package.json must expose qa:nexus-platform-dashboard"
);
assert(qaSuite.includes("scripts/nexus-platform-dashboard-qa.js"), "qa-suite.js nexus-workforce suite must include platform dashboard QA.");

console.log("Nexus platform dashboard QA passed");
console.log("- dashboard mode coverage, desktop grid, responsive fallback, safe labels, and no-execution boundaries verified");
