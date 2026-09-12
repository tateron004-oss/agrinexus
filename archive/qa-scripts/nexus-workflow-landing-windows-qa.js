const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const landingSource = app.slice(
  app.indexOf("const NEXUS_WORKFLOW_LANDING_WINDOWS"),
  app.indexOf("const NEXUS_FULL_WORKFLOW_EXTRAS")
);

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

function includesInsensitive(source, token, label) {
  assert(source.toLowerCase().includes(token.toLowerCase()), `${label} should include ${token}`);
}

[
  "const NEXUS_WORKFLOW_LANDING_WINDOWS = Object.freeze",
  "function renderNexusWorkflowLandingWindow(definition = {}, state = {})",
  "function nexusWorkflowLandingKind(definition = {})",
  "function parseNexusRoutePoints(command = \"\")",
  "data-nexus-workflow-landing-window=\"true\"",
  "data-nexus-landing-intake=",
  "data-nexus-landing-packet-preview=\"true\"",
  "data-nexus-landing-provider-status=\"true\"",
  "data-no-fake-execution=\"true\"",
  "renderNexusWorkflowLandingWindow(definition, state)"
].forEach(token => includes(app, token, `landing window shell ${token}`));

[
  "mobile-clinic-intake",
  "Patient / contact display",
  "Service area",
  "Visit need",
  "Condition",
  "Symptoms / concern",
  "Vitals / readings",
  "Red flag checklist",
  "Prepare mobile clinic request",
  "Emergency guidance"
].forEach(token => includes(app, token, `mobile clinic landing ${token}`));

[
  "pharmacy-referral",
  "Pharmacy need",
  "Medication list",
  "Allergy field",
  "No prescription, refill approval",
  "Prepare pharmacy packet"
].forEach(token => includes(app, token, `pharmacy landing ${token}`));

[
  "virtual-care-intake",
  "RPM / RTM readings",
  "Prepare encounter packet",
  "Review video room gate",
  "Provider review queue",
  "No diagnosis, treatment, prescription"
].forEach(token => includes(app, token, `telehealth landing ${token}`));

[
  "agronomy-crop-support",
  "Farm size optional",
  "Problem description",
  "Soil / water / fertilizer notes",
  "Season / weather context optional",
  "Run Live Knowledge research",
  "Prepare agronomy packet"
].forEach(token => includes(app, token, `agriculture landing ${token}`));

[
  "agritrade-vendor-inquiry",
  "Inquiry type",
  "Buyer / seller role",
  "Product / service",
  "Desired outcome",
  "No purchase, order, payment"
].forEach(token => includes(app, token, `marketplace landing ${token}`));

[
  "logistics-cold-chain-request",
  "Pickup point",
  "Dropoff point",
  "Cold-chain / storage need",
  "No booking, dispatch, delivery"
].forEach(token => includes(app, token, `logistics landing ${token}`));

[
  "maps-route-planning",
  "Start point",
  "Destination",
  "Farm visit",
  "Mobile clinic visit",
  "data-nexus-route-planning-window=\"true\"",
  "data-nexus-route-map-container=\"true\"",
  "route provider not configured / route preparation only",
  "No browser geolocation, live navigation, tracking, route distance/time"
].forEach(token => includes(app, token, `maps landing ${token}`));

[
  "internet-research",
  "Research query field",
  "data-nexus-live-knowledge-landing=\"true\"",
  "data-nexus-source-card-list=\"true\"",
  "No fake citations are generated"
].forEach(token => includes(app, token, `live knowledge landing ${token}`));

[
  "training-workforce-referral",
  "Skill area",
  "Country / region",
  "Language",
  "Experience level",
  "Prepare referral packet"
].forEach(token => includes(app, token, `workforce landing ${token}`));

[
  "payment-booking-dispatch-gate",
  "Explicit not-executed gate",
  "Admin approval gate",
  "Not executed. No payment, booking, dispatch"
].forEach(token => includes(app, token, `payment gate landing ${token}`));

[
  "mobile clinic",
  "pharmacy",
  "diabetes",
  "telehealth",
  "climate-smart",
  "from\\s+.{2,}\\s+to\\s+.{2,}",
  "live-knowledge",
  "payment-gate"
].forEach(token => includesInsensitive(app, token, `typed command support ${token}`));

[
  "launchCapabilityFromAskNexus(input = \"\")",
  "launchCapabilityFromVoice(transcript = \"\")",
  "resolveNexusFunctionIntent(input, options = {})",
  "openNexusFunctionWindow(functionIntent.functionId"
].forEach(token => includes(app, token, `shared resolver ${token}`));

[
  "data-nexus-window-restore",
  "function-window-dock-restore-fallback",
  "openNexusFunctionWindow(restoreId"
].forEach(token => includes(app, token, `restore behavior ${token}`));

[
  ".nexus-workflow-landing-window",
  ".nexus-landing-intake-grid",
  ".nexus-route-map-surface",
  ".nexus-landing-research-panel",
  ".nexus-landing-provider-status"
].forEach(token => includes(css, token, `landing window css ${token}`));

[
  "payment processed",
  "appointment booked",
  "dispatch completed",
  "provider accepted",
  "prescription approved",
  "refill approved",
  "sent successfully"
].forEach(token => excludes(landingSource, token, "workflow landing windows"));

assert.equal(
  packageJson.scripts["qa:nexus-workflow-landing-windows"],
  "node scripts/nexus-workflow-landing-windows-qa.js",
  "package.json must expose qa:nexus-workflow-landing-windows"
);
assert(qaSuite.includes("scripts/nexus-workflow-landing-windows-qa.js"), "qa-suite.js must include workflow landing windows QA.");

console.log("Nexus workflow landing windows QA passed.");
