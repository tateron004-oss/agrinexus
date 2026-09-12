const fs = require("fs");
const path = require("path");
const assert = require("assert");

const root = path.resolve(__dirname, "..");
const read = (...parts) => fs.readFileSync(path.join(root, ...parts), "utf8");

const app = read("public", "app.js");
const styles = read("public", "styles.css");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const doc = read("docs", "NEXUS_PREMIUM_MINIAPP_AGENTIC_UI.md");

function includes(source, needle, label) {
  assert(source.includes(needle), `${label} must include ${needle}`);
}

function rejects(source, pattern, label) {
  assert(!pattern.test(source), `${label} contains unsafe pattern ${pattern}`);
}

[
  "nexus-command-center-hero",
  "data-nexus-command-landing-actions=\"true\"",
  "data-nexus-command-landing-status=\"true\"",
  "Send",
  "Continue conversation",
  "View Receipts",
  "Provider Readiness"
].forEach(term => includes(app, term, "command landing"));

[
  "Prepare patient care summary",
  "Check crop/weather risk",
  "Track shipment",
  "Create buyer/seller packet",
  "Prepare applicant for job",
  "Create training referral",
  "Plan drone mission",
  "Test connected services"
].forEach(term => includes(app, term, "prompt chips"));

[
  "data-nexus-premium-miniapp-launcher=\"true\"",
  "NEXUS_PREMIUM_MINI_APPS",
  "Health & Care",
  "Agriculture & Food Security",
  "Trade & Marketplace",
  "Logistics & Maps",
  "Learning & Workforce",
  "Drone & Field Operations",
  "Communications & Media",
  "Provider Activation",
  "purpose",
  "primaryLabel",
  "secondaryLabel"
].forEach(term => includes(app, term, "mini-app launcher"));

[
  "data-nexus-agentic-mission-workspace=\"true\"",
  "draft",
  "collecting_info",
  "ready_to_prepare",
  "local_prepared",
  "needs_credentials",
  "needs_consent",
  "needs_confirmation",
  "vendor_required",
  "live_ready",
  "executed_with_receipt",
  "blocked_for_safety",
  "What Nexus understands",
  "Information collected",
  "Information missing",
  "Recommended next step",
  "Provider readiness",
  "Consent / confirmation",
  "Receipt / timeline",
  "Safety note"
].forEach(term => includes(app, term, "mission workspace"));

[
  "Prepared locally. Nothing was sent externally.",
  "Connected and test-ready",
  "Live action requires confirmation",
  "Provider credentials are missing",
  "Vendor endpoint required",
  "Executed with receipt",
  "Blocked for safety",
  "Low-bandwidth mode active",
  "Offline queue ready"
].forEach(term => includes(app, term, "status badge trust language"));

[
  "data-nexus-premium-activity-receipts=\"true\"",
  "What happened, what did not happen",
  "Happened:",
  "Did not happen:",
  "Next step:",
  "data-no-secret-values=\"true\""
].forEach(term => includes(app, term, "activity receipts"));

[
  "data-nexus-online-readiness-summary=\"true\"",
  "Nexus Online Readiness",
  "Connected",
  "test_ready",
  "live_ready",
  "needs_credentials",
  "vendor_required",
  "local_only",
  "failed",
  "Add Tavily to enable live knowledge.",
  "Add Mapbox to improve routes.",
  "Add SendGrid to test email.",
  "Keep health endpoints blank until partners are approved.",
  "data-nexus-render-credential-setup=\"true\"",
  "data-nexus-provider-readiness-action",
  "refresh-readiness",
  "test-all-configured-lanes",
  "show-missing-credentials-checklist"
].forEach(term => includes(app, term, "activation center preservation"));

[
  ".nexus-premium-miniapp-launcher",
  ".nexus-premium-miniapp-grid",
  ".nexus-premium-miniapp-card",
  ".nexus-agentic-mission-workspace",
  ".nexus-mission-grid",
  ".nexus-premium-activity-receipts",
  ".nexus-online-readiness-summary",
  ".nexus-ux-status-badge",
  ":focus-visible",
  "prefers-reduced-motion",
  "nexus-low-bandwidth-mode",
  "@media (max-width: 760px)",
  "min-height: 44px"
].forEach(term => includes(styles, term, "responsive/accessibility CSS"));

[
  "Health & Care",
  "Mini-App Intelligence Launcher",
  "Agentic Mission Workspace",
  "Activity & Receipts",
  "Nexus Online Readiness",
  "low-bandwidth",
  "does not diagnose",
  "does not diagnose, prescribe",
  "does not expose secrets"
].forEach(term => includes(doc, term, "premium UI doc"));

[
  /doctor reviewed/i,
  /payment completed/i,
  /dispatch completed/i,
  /appointment confirmed/i,
  /refill approved/i,
  /message sent successfully/i,
  /drone dispatched/i,
  /tracked live without provider/i
].forEach(pattern => {
  rejects(app, pattern, "app safety copy");
  rejects(doc, pattern, "doc safety copy");
});

[
  /sk_live_[A-Za-z0-9]+/,
  /sk_test_[A-Za-z0-9]+/,
  /AIza[0-9A-Za-z_-]+/,
  /AC[a-f0-9]{32}/i,
  /-----BEGIN PRIVATE KEY-----/
].forEach(pattern => {
  rejects(app, pattern, "app secret exposure");
  rejects(styles, pattern, "styles secret exposure");
  rejects(doc, pattern, "doc secret exposure");
});

assert.strictEqual(
  pkg.scripts["qa:nexus-premium-miniapp-agentic-ui"],
  "node scripts/nexus-premium-miniapp-agentic-ui-qa.js",
  "package.json must expose qa:nexus-premium-miniapp-agentic-ui"
);
includes(qaSuite, "scripts/nexus-premium-miniapp-agentic-ui-qa.js", "qa-suite wiring");

console.log("Nexus premium mini-app agentic UI QA passed.");
