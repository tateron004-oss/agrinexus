const fs = require("node:fs");
const path = require("node:path");
const contract = require("../public/nexus-payment-intent-contract.js");

const fixturePath = path.resolve(__dirname, "..", "fixtures", "nexus", "payment-intents.json");

function loadPaymentIntentFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function runPaymentIntentFixtures() {
  return loadPaymentIntentFixtures().map(fixture => {
    const validation = contract.validatePaymentIntent(fixture);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      ok: validation.ok,
      previewAllowed: validation.previewAllowed,
      dryRunAllowed: validation.dryRunAllowed,
      executionAllowed: validation.executionAllowed,
      paymentIntentType: fixture.paymentIntentType,
      paymentCategory: fixture.paymentCategory,
      riskTier: fixture.riskTier,
      failures: Object.freeze(validation.failures)
    });
  });
}

if (require.main === module) {
  const results = runPaymentIntentFixtures();
  const failed = results.filter(result => !result.ok);
  results.forEach(result => {
    console.log(`${result.fixtureId}: ${result.ok ? "ok" : "failed"} (${result.riskTier})`);
  });
  if (failed.length > 0) process.exitCode = 1;
}

module.exports = Object.freeze({
  loadPaymentIntentFixtures,
  runPaymentIntentFixtures
});
