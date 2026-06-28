const fs = require("node:fs");
const path = require("node:path");
const contract = require("../public/nexus-marketplace-request-contract.js");

const fixturePath = path.resolve(__dirname, "..", "fixtures", "nexus", "marketplace-requests.json");

function loadMarketplaceRequestFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function runMarketplaceRequestFixtures() {
  return loadMarketplaceRequestFixtures().map(fixture => {
    const validation = contract.validateMarketplaceRequestIntent(fixture);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      ok: validation.ok,
      previewAllowed: validation.previewAllowed,
      executionAllowed: validation.executionAllowed,
      marketplaceRequestType: fixture.marketplaceRequestType,
      requestedMarketplaceCategory: fixture.requestedMarketplaceCategory,
      riskTier: fixture.riskTier,
      failures: Object.freeze(validation.failures)
    });
  });
}

if (require.main === module) {
  const results = runMarketplaceRequestFixtures();
  const failed = results.filter(result => !result.ok);
  results.forEach(result => {
    console.log(`${result.fixtureId}: ${result.ok ? "ok" : "failed"} (${result.riskTier})`);
  });
  if (failed.length > 0) process.exitCode = 1;
}

module.exports = Object.freeze({
  loadMarketplaceRequestFixtures,
  runMarketplaceRequestFixtures
});
