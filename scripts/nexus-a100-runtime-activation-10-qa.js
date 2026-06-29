const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `Missing source marker: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `Missing end marker after ${start}`);
  return source.slice(startIndex, endIndex);
}

const app = read("public", "app.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const marketplaceSource = sourceBetween(app, "function a100MarketplaceBrowsingCard", "function rememberA100SafeFollowUpContext");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(intentSource.includes("capability.id === \"marketplace\" ? a100MarketplaceBrowsingCard()"), "Marketplace prompts should attach marketplace guidance.");

[
  "AgriTrade browsing",
  "crop-selling preparation",
  "supply search",
  "listing notes",
  "inquiry questions",
  "Browse AgriTrade",
  "Show marketplace options",
  "Help me sell crops",
  "Help me find supplies",
  "Open the internal marketplace/trade section",
  "Gate any transaction-like step"
].forEach(copy => assert(marketplaceSource.includes(copy), `Marketplace card should include: ${copy}`));

[
  "Safe browsing and review-only preparation",
  "does not buy",
  "sell",
  "pay",
  "order",
  "mutate inventory",
  "send inquiries",
  "hand off to a provider"
].forEach(copy => assert(marketplaceSource.includes(copy), `Marketplace boundary should include: ${copy}`));

[
  "buy",
  "purchase",
  "pay",
  "checkout",
  "place order",
  "create order",
  "sell now",
  "complete sale",
  "update inventory"
].forEach(term => assert(intentSource.includes(term), `Transaction-like prompt should be gated: ${term}`));

[
  "browse",
  "agritrade",
  "marketplace",
  "buyer",
  "seller"
].forEach(prompt => assert(intentSource.includes(prompt), `Marketplace browse prompt should be recognized: ${prompt}`));

[
  marketplaceSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 10 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 10 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 10 source ${index} must not request geolocation.`);
  assert(!source.includes("window.open"), `Sprint 10 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 10 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 10 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 10 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 10 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 10 source ${index} must not add external/backend calls.`);
});

assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-10"], "node scripts/nexus-a100-runtime-activation-10-qa.js", "Sprint 10 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-10-qa.js"), "Sprint 10 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-10-qa] passed");
