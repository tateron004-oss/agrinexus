const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  module: path.join(root, "public", "nexus-agriculture-support-response-card.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  plan: path.join(root, "docs", "NEXUS_SPRINT_C_CONTROLLED_AGRICULTURE_RESPONSE_CARD_ACTIVATION_PLAN.md"),
  contract: path.join(root, "docs", "NEXUS_SPRINT_C_AGRICULTURE_RESPONSE_CARD_CONTRACT.md")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c-agriculture-renderer-flag-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(files).forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const source = fs.readFileSync(files.module, "utf8");
const pkg = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const cards = require(files.module);

assert(cards.SPRINT_C_FEATURE_FLAG_NAME === "NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED", "Sprint C feature flag name must match the activation plan.");
assert(cards.isSprintCFeatureEnabled({}) === false, "Sprint C agriculture cards must be disabled by default.");
assert(cards.isSprintCFeatureEnabled({ NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED: false }) === false, "explicit false must keep Sprint C cards disabled.");
assert(cards.isSprintCFeatureEnabled({ NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED: true }) === true, "explicit true must enable Sprint C cards in controlled validation.");
assert(cards.isSprintCFeatureEnabled({ location: { search: "?nexusSprintCAgricultureCards=1" } }) === true, "explicit URL validation flag must enable Sprint C cards for browser validation.");
assert(cards.isSprintCFeatureEnabled({ location: { search: "?nexusSprintCAgricultureCards=0" } }) === false, "URL flag must remain disabled unless set to 1.");

[
  "Help me with crop issues",
  "Teach me how irrigation works",
  "Help me find agriculture training",
  "What should I check if my crops are yellowing?",
  "How do I prepare soil for planting?"
].forEach(prompt => {
  assert(cards.buildSprintCAgricultureResponseCard(prompt, { globalRef: {} }) === null, `flag-off prompt must not build Sprint C card: ${prompt}`);
  const card = cards.buildSprintCAgricultureResponseCard(prompt, { globalRef: { NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED: true } });
  assert(card, `flag-on prompt must build Sprint C card: ${prompt}`);
  assert(card.id === "sprint-c-controlled-agriculture-response-card", "Sprint C card id must be stable.");
  assert(card.riskTier === "low", "Sprint C card risk tier must be low.");
  assert(card.category === "agriculture-support", "Sprint C card category must be agriculture-support.");
  assert(Array.isArray(card.guidance) && card.guidance.length >= 3, "Sprint C card must include guidance list.");
  assert(Array.isArray(card.reviewOnlyActions) && card.reviewOnlyActions[0].disabled === true, "Sprint C card action must be disabled review-only.");
  assert(Array.isArray(card.blockedActions) && card.blockedActions.join(" ").includes("provider handoff"), "Sprint C card must list blocked actions.");
  [
    "executionAuthority",
    "providerHandoffAllowed",
    "pendingActionCreationAllowed",
    "storageSideEffectAllowed",
    "networkSideEffectAllowed",
    "routeAutoOpenAllowed",
    "modalAutoOpenAllowed",
    "confirmationPromptForExecutionAllowed",
    "paymentAllowed",
    "locationSharingAllowed",
    "cameraAllowed",
    "emergencyDispatchAllowed"
  ].forEach(flag => assert(card[flag] === false, `${flag} must remain false.`));
});

[
  "Call my farmer",
  "Send this on WhatsApp",
  "Buy fertilizer",
  "Use my location",
  "Take a picture of this plant",
  "Book an appointment",
  "Pay for seeds",
  "This is an emergency",
  "Tell me the pesticide dose rate to spray"
].forEach(prompt => {
  assert(cards.buildSprintCAgricultureResponseCard(prompt, { globalRef: { NEXUS_CONTROLLED_AGRICULTURE_RESPONSE_CARDS_ENABLED: true } }) === null, `excluded prompt must not build Sprint C card: ${prompt}`);
});

[
  "window.open",
  "location.href",
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "getCurrentPosition",
  "getUserMedia",
  "localStorage.setItem",
  "sessionStorage.setItem",
  "PaymentRequest",
  "navigator.sendBeacon",
  "tel:",
  "mailto:"
].forEach(forbidden => assert(!source.includes(forbidden), `Sprint C renderer module must not introduce forbidden behavior: ${forbidden}`));

assert(!source.includes("installSprintC"), "Sprint C renderer must not add a live Standard User auto-installer in this phase.");
assert(source.includes("renderSprintCAgricultureResponseCard"), "Sprint C flag-on render helper must exist.");
assert(source.includes("isSprintCFeatureEnabled(runtimeDoc.defaultView || {})")
  && source.includes("renderSprintCAgricultureResponseCard(prompt, target, { globalRef: runtimeDoc.defaultView || {} })")
  && source.includes(": renderAgricultureSupportCard(prompt, target);"), "runtime listener must render Sprint C cards only when the explicit Sprint C flag is enabled.");
assert(source.includes('runtimeDoc.querySelectorAll("[data-nexus-sprint-c-agriculture-card]")'), "runtime clear path must remove stale Sprint C cards before excluded prompts.");
assert(source.includes("data-nexus-sprint-c-agriculture-card"), "Sprint C renderer must mark its own card element.");
assert(source.includes("disabled aria-disabled=\"true\""), "Sprint C review control must be disabled.");

const alias = "qa:nexus-sprint-c-agriculture-renderer-flag";
const script = "node scripts/nexus-sprint-c-agriculture-renderer-flag-qa.js";
assert(pkg.scripts && pkg.scripts[alias] === script, `${alias} package script must run Sprint C renderer flag QA.`);
assert(qaSuite.includes("scripts/nexus-sprint-c-agriculture-renderer-flag-qa.js"), "qa-suite must include Sprint C renderer flag QA.");

console.log("[nexus-sprint-c-agriculture-renderer-flag-qa] passed");
