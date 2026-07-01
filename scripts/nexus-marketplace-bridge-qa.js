const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function includes(source, text, label) {
  assert(source.includes(text), `${label} must include ${text}`);
}

const server = read("server.js");
const app = read("public/app.js");
const styles = read("public/styles.css");
const providerIndex = read("server/providers/index.js");
const bridgeSource = read("server/providers/marketplaceBridgeProvider.js");
const stripeProvider = read("server/providers/stripeProvider.js");
const packageJson = read("package.json");
const qaSuite = read("scripts/qa-suite.js");

[
  "server/providers/marketplaceBridgeProvider.js",
  "scripts/nexus-marketplace-bridge-qa.js"
].forEach(relativePath => assert(fs.existsSync(path.join(root, relativePath)), `${relativePath} must exist`));

[
  "marketplaceBridge: require(\"./marketplaceBridgeProvider\")",
  "/api/nexus/tools/marketplace/search",
  "/api/nexus/tools/marketplace/listing/",
  "/api/nexus/tools/marketplace/inquiry/prepare",
  "/api/nexus/tools/marketplace/note",
  "/api/nexus/tools/marketplace/reminder",
  "/api/nexus/tools/marketplace/offline",
  "AgriTrade Marketplace Bridge",
  "marketplaceNotes"
].forEach(text => includes(server + providerIndex, text, "server marketplace bridge wiring"));

[
  "data-nexus-marketplace-bridge",
  "nexusMarketplaceBridgeCards",
  "renderNexusMarketplaceBridgePanel",
  "renderNexusMarketplaceBridgeCards",
  "searchNexusMarketplaceBridge",
  "createNexusMarketplaceBridgeListing",
  "runNexusMarketplaceBridgeAction",
  "data-marketplace-bridge-action=\"view\"",
  "data-marketplace-bridge-action=\"inquiry\"",
  "data-marketplace-bridge-action=\"note\"",
  "data-marketplace-bridge-action=\"reminder\"",
  "data-marketplace-bridge-action=\"offline\"",
  "data-marketplace-bridge-confirm",
  "data-marketplace-create-confirm",
  "No checkout available",
  "Nexus does not buy, sell, send messages, contact buyers or sellers, create orders, ship, checkout, escrow, or process payments"
].forEach(text => includes(app, text, "marketplace bridge UI"));

[
  ".nexus-marketplace-provider-bridge",
  ".nexus-marketplace-bridge-card",
  ".nexus-marketplace-bridge-actions",
  ".nexus-marketplace-bridge-confirm",
  ".nexus-marketplace-bridge-create"
].forEach(text => includes(styles, text, "marketplace bridge styles"));

[
  "starter-seeds-maize",
  "starter-fertilizer-compost",
  "starter-tools-irrigation",
  "starter-equipment-pump",
  "starter-produce-tomatoes",
  "starter-transport-cold-chain",
  "starter-training-seller",
  "starter-drone-field-review",
  "DEFAULT_INQUIRY_DRAFT",
  "requireConfirmation",
  "noAutoContact: true",
  "noOrders: true",
  "noPayments: true",
  "Payments disabled. No checkout available from Marketplace Bridge.",
  "NEXUS_MARKETPLACE_BRIDGE_ENABLED"
].forEach(text => includes(bridgeSource, text, "marketplace bridge provider"));

[
  "NEXUS_MARKETPLACE_PAYMENTS_ENABLED",
  "marketplace payment execution remains blocked",
  "paymentsBlockedByDefault"
].forEach(text => includes(stripeProvider, text, "stripe payment boundary"));

[
  "qa:nexus-marketplace-bridge",
  "scripts/nexus-marketplace-bridge-qa.js"
].forEach(text => includes(packageJson + qaSuite, text, "marketplace bridge QA wiring"));

const bridge = require(path.join(root, "server/providers/marketplaceBridgeProvider.js"));
const categories = new Set(bridge.starterListings().map(item => item.category));
[
  "Seeds",
  "Fertilizer",
  "Tools",
  "Equipment",
  "Produce",
  "Transport/logistics",
  "Training services",
  "Drone/agritech services"
].forEach(category => assert(categories.has(category), `starter listings must include ${category}`));

const db = { profile: {} };
let result = bridge.search({ query: "seeds" }, db);
assert.equal(result.body.status, "completed", "marketplace search should complete locally");
assert(result.body.data.cards.some(card => /seed/i.test(card.title)), "seeds search should return starter listing");
assert.equal(result.body.data.paymentStatus.paymentsDisabled, true, "payment status must remain disabled");

result = bridge.search({ query: "tools" }, db);
assert(result.body.data.cards.some(card => /tool/i.test(card.title)), "tools search should return starter listing");

result = bridge.createListing({ title: "Test tomatoes", category: "Produce" }, db);
assert.equal(result.body.status, "confirmation_required", "listing creation must require confirmation");

result = bridge.createListing({
  title: "Test tomatoes",
  category: "Produce",
  description: "Local review listing only",
  location: "Stockton",
  quantity: "3 crates",
  priceText: "Estimate only",
  confirmed: true
}, db);
assert.equal(result.body.status, "completed", "confirmed listing creation should complete locally");
assert.equal(result.body.data.listing.paymentEnabled, false, "created listing must not enable payment");
assert.equal(result.body.data.listing.orderCreated, false, "created listing must not create order");
assert.equal(result.body.data.listing.buyerContacted, false, "created listing must not contact buyer");

result = bridge.prepareInquiry({ title: "Test tomatoes", category: "Produce" }, db);
assert.equal(result.body.status, "prepared", "inquiry should prepare draft locally");
assert.equal(result.body.data.draftOnly, true, "inquiry must be draft-only");
assert.equal(result.body.data.sent, false, "inquiry must not send");
assert.equal(result.body.data.buyerContacted, false, "inquiry must not contact buyer");
assert.equal(result.body.data.sellerContacted, false, "inquiry must not contact seller");

result = bridge.prepareInquiry({ title: "Test tomatoes", draft: "Please send payment card details" }, db);
assert.equal(result.body.status, "blocked", "payment/private financial inquiry draft must be blocked");

result = bridge.saveNote({ title: "Test tomatoes", note: "Check crate size." }, db);
assert.equal(result.body.status, "confirmation_required", "marketplace note must require confirmation");

result = bridge.saveNote({ title: "Test tomatoes", category: "Produce", note: "Check crate size.", confirmed: true }, db);
assert.equal(result.body.status, "completed", "confirmed marketplace note should save locally");

result = bridge.saveNote({ title: "Test tomatoes", note: "Payment card number 123", confirmed: true }, db);
assert.equal(result.body.status, "blocked", "sensitive payment note must be blocked");

result = bridge.createReminder({ title: "Test tomatoes" }, db);
assert.equal(result.body.status, "confirmation_required", "marketplace reminder must require confirmation");

result = bridge.createReminder({ title: "Test tomatoes", dueAt: "Tomorrow at 9 AM", confirmed: true }, db);
assert.equal(result.body.status, "completed", "confirmed marketplace reminder should complete locally");
assert.equal(result.body.data.reminder.osNotificationRequested, false, "marketplace reminder must not request OS notification permission");

result = bridge.queueOffline({ title: "Test tomatoes", category: "Produce" }, db);
assert.equal(result.body.status, "confirmation_required", "marketplace offline queue must require confirmation");

result = bridge.queueOffline({ id: "starter-produce-tomatoes", title: "Test tomatoes", category: "Produce", location: "Stockton", quantity: "3 crates", confirmed: true }, db);
assert.equal(result.body.status, "completed", "confirmed marketplace offline queue should complete locally");
assert(!/payment|checkout|escrow|card|bank|patient|diagnos|prescri/i.test(result.body.data.item.content), "offline marketplace metadata must exclude sensitive/payment/health data");

const uiBlock = app.slice(app.indexOf("function renderNexusMarketplaceBridgePanel"), app.indexOf("function renderNexusRealProviderTestingPanel"));
[
  "window.open(",
  "navigator.geolocation",
  "getCurrentPosition",
  "location.href",
  "TWILIO_AUTH_TOKEN",
  "STRIPE_SECRET_KEY",
  "MOODLE_TOKEN"
].forEach(forbidden => {
  assert(!uiBlock.includes(forbidden), `marketplace bridge UI block must not include ${forbidden}`);
});

[
  /\bpayment processed\b/i,
  /\border created\b/i,
  /\bcheckout completed\b/i,
  /\bbuyer contacted\b/i,
  /\bseller contacted\b/i,
  /\bmessage sent\b/i
].forEach(pattern => {
  assert(!pattern.test(uiBlock), `marketplace bridge UI must not include unsafe claim ${pattern}`);
});

console.log("Nexus marketplace bridge QA passed.");
