const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  module: path.join(root, "public", "nexus-agriculture-support-response-card.js"),
  doc: path.join(root, "docs", "NEXUS_PHASE_101_SOURCE_BACKED_AGRICULTURE_SUPPORT_RESPONSE_CARD_RUNTIME_ACTIVATION.md")
};
function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-101-agriculture-support-response-card-runtime-qa] ${message}`);
    process.exit(1);
  }
}
Object.values(paths).forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const moduleSource = fs.readFileSync(paths.module, "utf8");
const doc = fs.readFileSync(paths.doc, "utf8");
const cards = require(paths.module);
assert(cards.FEATURE_FLAG_NAME === "NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD_ENABLED", "feature flag name must match Phase 101 contract.");
assert(cards.isFeatureEnabled({}) === true, "Phase 101 card must be enabled by default for this controlled activation lane.");
assert(cards.isFeatureEnabled({ NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD_ENABLED: false }) === false, "global false flag must disable Phase 101 card.");

[
  "My maize leaves are turning yellow",
  "My crops have spots on the leaves",
  "How do I improve irrigation?",
  "How do I prepare for drought?",
  "What should I do about pests eating my crops?",
  "I need help with crop issues",
  "What fertilizer safety checks should I review for my crops?"
].forEach(prompt => {
  assert(cards.classifyAgricultureSupportPrompt(prompt).eligible === true, `prompt should be eligible: ${prompt}`);
  const card = cards.buildAgricultureSupportCard(prompt);
  assert(card && card.title && card.detectedCategory && card.summary, `card must include title/category/summary: ${prompt}`);
  assert(card.sourceStatus.label === "general guidance" && card.sourceStatus.sourceBacked === false, "card must use general guidance without verified source metadata.");
  assert(card.confidenceFreshnessDisclosure.freshness.includes("no live source lookup"), "card must disclose no live freshness lookup.");
  assert(card.localExpertEscalation.includes("local agriculture extension worker"), "card must include local expert escalation guidance.");
  assert(card.chemicalSafetyWarning.includes("local regulations"), "card must include chemical safety warning.");
  assert(card.noExecutionDisclosure.includes("No provider has been contacted."), "card must disclose no provider contact.");
  assert(card.noExecutionDisclosure.includes("No message has been sent."), "card must disclose no message sent.");
  assert(card.noExecutionDisclosure.includes("No purchase has been made."), "card must disclose no purchase.");
  assert(card.noExecutionDisclosure.includes("No location has been shared."), "card must disclose no location sharing.");
  assert(card.actions.length === 1 && card.actions[0].type === "review_only" && card.actions[0].disabled === true, "only disabled review-only action is allowed.");
  Object.keys(cards.EXECUTION_BOUNDARY).forEach(flag => assert(card[flag] === false, `${flag} must remain false.`));
});

const verifiedCard = cards.buildAgricultureSupportCard("My maize leaves are turning yellow", { verifiedSource: { name: "Example Extension Source Contract", contractId: "ag-extension-demo-contract", freshnessLabel: "reviewed test fixture", confidenceLabel: "source contract fixture" } });
assert(verifiedCard.sourceStatus.label === "source-backed guidance", "source-backed label requires verified source contract metadata.");

[
  "Buy fertilizer for me",
  "Sell my crop",
  "Call an agronomist",
  "Message the supplier",
  "Open WhatsApp for my farm",
  "Book an appointment with an extension worker",
  "Use my location to find farms near me",
  "Pay for seeds",
  "Diagnose this plant disease from my camera",
  "Upload a crop photo",
  "Emergency pesticide poisoning",
  "Guarantee my crop yield",
  "Apply pesticide now",
  "Tell me the pesticide dose rate to spray"
].forEach(prompt => {
  assert(cards.classifyAgricultureSupportPrompt(prompt).eligible === false, `prompt must be excluded: ${prompt}`);
  assert(cards.buildAgricultureSupportCard(prompt) === null, `excluded prompt must not create card: ${prompt}`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "getUserMedia",
  "window.open",
  "location.href",
  "tel:",
  "mailto:",
  "localStorage.setItem",
  "PaymentRequest",
  "navigator.sendBeacon"
].forEach(forbidden => assert(!moduleSource.includes(forbidden), `module must not include forbidden runtime side effect: ${forbidden}`));

[
  "general guidance",
  "source-backed guidance",
  "No verified live source connected",
  "no live source lookup",
  "No provider has been contacted",
  "No message has been sent",
  "No purchase has been made",
  "No location has been shared",
  "local agriculture extension worker",
  "no backend behavior change"
].forEach(required => assert(doc.includes(required) || moduleSource.includes(required), `Phase 101 docs/module must include: ${required}`));

console.log("[nexus-phase-101-agriculture-support-response-card-runtime-qa] passed");
