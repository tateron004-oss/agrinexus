const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const appWindowSource = app.slice(
  app.indexOf("const NEXUS_WORKFLOW_LANDING_WINDOWS"),
  app.indexOf("const NEXUS_FULL_WORKFLOW_EXTRAS")
);

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "function openNexusAppWindow(windowId, options = {})",
  "function renderNexusAppWindow(state = nexusActiveWorkflowState)",
  "function closeNexusAppWindow(options = {})",
  "function minimizeNexusAppWindow()",
  "function restoreNexusAppWindow(windowIdOverride = \"\")",
  "function resolveNexusAppIntent(input, options = {})",
  "function exposeNexusAppWindowApis()",
  "window[\"openNexusAppWindow\"]",
  "window.openNexusAppWindow = openNexusAppWindow",
  "data-nexus-app-window=\"true\"",
  "data-nexus-app-window-landing=\"true\"",
  "data-nexus-app-window-dock=\"true\"",
  "Provider / safety status",
  "Live Knowledge provider status",
  "data-nexus-route-planning-window=\"true\"",
  "data-nexus-live-knowledge-landing=\"true\"",
  "data-nexus-source-card-list=\"true\"",
  "Missing credentials, when applicable, are shown by environment variable name only. Secret values are never rendered.",
  "launchCapabilityFromAskNexus(input = \"\")",
  "launchCapabilityFromVoice(transcript = \"\")",
  "launchCapabilityFromClick(eventOrElement)"
].forEach(token => includes(app, token, `shared app window shell ${token}`));

[
  ["mobile clinic", "Mobile Clinic Request", ["Service area", "Visit need", "Condition", "Symptoms / concern", "Vitals / readings", "Red flag checklist", "Consent checkbox", "Confirmation checkbox", "Prepare mobile clinic request", "Queue locally", "Send/request action disabled until provider configured"]],
  ["pharmacy", "Pharmacy Referral", ["Pharmacy need", "Medication list", "Allergy field", "Concern", "Relevant readings", "Prepare pharmacy packet", "Send referral action"]],
  ["telehealth", "Virtual Care Encounter", ["RPM / RTM readings", "Medication field", "Allergy field", "Consent to prepare packet", "Consent to share", "Create video room gate", "Provider review queue"]],
  ["agriculture", "Agriculture Expert Case", ["Crop", "Country / region", "Farm size optional", "Problem description", "Field observations", "Soil / water / fertilizer notes", "Season / weather context optional", "Desired outcome", "Send to expert disabled until provider configured"]],
  ["marketplace", "AgriTrade Marketplace Inquiry", ["Inquiry type", "Buyer / seller role", "Product / service", "Quantity", "Region", "Desired outcome", "Send vendor inquiry disabled until provider configured"]],
  ["logistics", "Logistics & Cold Chain Request", ["Request type", "Pickup point", "Dropoff point", "Product type", "Timing", "Cold-chain / storage need", "Send logistics request disabled until provider configured"]],
  ["maps", "Route Planning & Field Visit", ["Start point", "Destination", "Purpose", "Route summary area", "Route provider is not configured. Nexus can prepare the route request, but no live route calculation has executed."]],
  ["research", "Live Knowledge Research", ["Research query", "Run research", "No fake citations are generated"]],
  ["workforce", "Workforce & Training Referral", ["Goal", "Skill area", "Country / region", "Language", "Experience level", "Training / employment / business goal", "Send partner referral disabled until provider configured"]],
  ["gate", "Payment / Booking / Dispatch Gate", ["Action type", "Required approval", "Missing provider credentials", "This action has not executed.", "Not executed. No payment, booking, dispatch"]],
  ["communications", "Communications Center", ["Email", "SMS", "WhatsApp", "Recipient", "Message preview", "Consent / confirmation gate", "Send action disabled until provider configured", "Local queue fallback"]],
  ["admin", "Provider & Case Queue", ["Queue lane", "Case status / timeline", "Add response / status action", "Follow-up action", "Local queue status"]],
  ["media", "Music & Media", ["Media search / input", "YouTube handoff", "Provider / handoff status", "Safe media handoff", "actual embedded playback"]],
  ["offline", "Offline & Low-Bandwidth Support", ["Offline queue summary", "Sync status", "Local fallback explanation", "Retry sync if available", "safe blocked state"]]
].forEach(([kind, title, tokens]) => {
  includes(appWindowSource, title, `${kind} app window title`);
  tokens.forEach(token => includes(appWindowSource, token, `${kind} app window ${token}`));
});

[
  "mobile clinic request",
  "pharmacy referral",
  "virtual care",
  "doctor visit",
  "tomato blight",
  "buyer/seller",
  "supplier request",
  "farm to market",
  "map route from",
  "Research climate-smart agriculture",
  "employer referral",
  "checkout",
  "send by email",
  "provider response inbox",
  "play music",
  "low bandwidth"
].forEach(token => includes(app.toLowerCase(), token.toLowerCase(), `intent alias ${token}`));

[
  "data-nexus-workflow-back",
  "data-nexus-workflow-minimize",
  "data-nexus-workflow-close",
  "data-nexus-window-restore",
  "openNexusFunctionWindow(restoreId",
  "function-window-dock-restore-fallback"
].forEach(token => includes(app, token, `window control ${token}`));

[
  ".nexus-workflow-landing-window",
  ".nexus-landing-intake-grid",
  ".nexus-landing-route-panel",
  ".nexus-landing-research-panel",
  ".nexus-landing-provider-status",
  ".nexus-landing-single-checkbox",
  "body.user-mode .nexus-function-window-dock",
  "bottom: clamp(142px, 18vh, 176px)",
  "z-index: 124"
].forEach(token => includes(css, token, `app window css ${token}`));

[
  "payment processed",
  "appointment booked",
  "dispatch completed",
  "provider accepted",
  "prescription approved",
  "refill approved",
  "sent successfully",
  "distance returned",
  "drive time returned",
  "diagnosis confirmed"
].forEach(token => excludes(appWindowSource, token, "Nexus app window experience"));

[
  "TWILIO_AUTH_TOKEN",
  "TAVILY_API_KEY",
  "BRAVE_SEARCH_API_KEY",
  "EXA_API_KEY",
  "STRIPE_SECRET_KEY",
  "DAILY_API_KEY"
].forEach(secret => excludes(appWindowSource, secret, "Nexus app window experience"));

assert.equal(
  packageJson.scripts["qa:nexus-app-window-experience"],
  "node scripts/nexus-app-window-experience-qa.js",
  "package.json must expose qa:nexus-app-window-experience"
);
assert(qaSuite.includes("scripts/nexus-app-window-experience-qa.js"), "qa-suite.js must include app window experience QA.");

console.log("Nexus app window experience QA passed.");
