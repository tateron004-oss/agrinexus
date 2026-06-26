const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const checklistPath = path.join(root, "docs", "NEXUS_PHASE_101C_STANDARD_USER_BROWSER_VALIDATION_CHECKLIST.md");

function assert(condition, message) {
  if (!condition) {
    console.error(`[phase-101c-browser-validation-checklist-qa] ${message}`);
    process.exit(1);
  }
}

assert(fs.existsSync(checklistPath), "Phase 101C browser validation checklist must exist.");
const checklist = fs.readFileSync(checklistPath, "utf8");

[
  "Normal Standard User build only",
  "node server.js",
  "No special test candidate build",
  "git diff --check",
  "node scripts/phase-101c-post-wiring-validation-qa.js",
  "node scripts/qa-suite.js nexus-workforce",
  "node scripts/qa-suite.js all-safe"
].forEach(required => assert(checklist.includes(required), `checklist must include ${required}.`));

[
  "My maize leaves are turning yellow",
  "My crops have spots on the leaves",
  "How do I improve irrigation?",
  "How do I prepare for drought?",
  "What should I do about pests eating my crops?",
  "I need help with crop issues"
].forEach(prompt => assert(checklist.includes(prompt), `checklist must include safe prompt: ${prompt}`));

[
  "Call an agronomist",
  "Message the supplier",
  "Open WhatsApp",
  "Use my location",
  "Diagnose this plant disease from my camera",
  "Pay for seeds",
  "Apply pesticide now",
  "Emergency pesticide poisoning",
  "Sell my crop",
  "Book an appointment with an extension worker"
].forEach(prompt => assert(checklist.includes(prompt), `checklist must include excluded prompt: ${prompt}`));

[
  "No provider contacted",
  "No message sent",
  "No WhatsApp/SMS/Telegram/email opened",
  "No phone/call handler opened",
  "No appointment scheduled",
  "No marketplace listing, order, buy, sell, checkout, or payment started",
  "No location shared",
  "No map permission requested",
  "No camera prompt requested",
  "No microphone prompt requested beyond the existing explicit voice UI",
  "No health/pharmacy/medical action created",
  "No emergency dispatch simulated",
  "No live source lookup performed",
  "No backend mutation or storage side effect beyond normal static asset loading"
].forEach(required => assert(checklist.includes(required), `checklist must include no-execution check: ${required}`));

[
  "general guidance",
  "verified source contract",
  "confidence/freshness disclosure",
  "local expert escalation guidance",
  "chemical/pesticide/fertilizer safety warning",
  "no-execution disclosure",
  "No external provider/source/communications/payment/location/camera endpoint"
].forEach(required => assert(checklist.includes(required), `checklist must include card/source/safety requirement: ${required}`));

console.log("[phase-101c-browser-validation-checklist-qa] passed");
