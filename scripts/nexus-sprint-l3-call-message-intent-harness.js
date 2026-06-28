const fs = require("node:fs");
const path = require("node:path");
const callMessageContract = require("../public/nexus-call-message-intent-contract.js");

const fixturePath = path.resolve(__dirname, "..", "fixtures", "nexus", "call-message-intents.json");

function loadCallMessageIntentFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function buildCallMessageIntentFromFixture(fixture) {
  return callMessageContract.createCallMessageIntent(fixture.input);
}

function runCallMessageIntentFixtures() {
  return loadCallMessageIntentFixtures().map(fixture => {
    const built = buildCallMessageIntentFromFixture(fixture);
    return Object.freeze({
      fixtureId: fixture.fixtureId,
      expectedOk: fixture.expectedOk,
      ok: built.validation.ok,
      previewAllowed: built.validation.previewAllowed,
      executionAllowed: built.validation.executionAllowed,
      communicationType: built.intent.communicationType,
      recipientChannelType: built.intent.recipientChannelType,
      riskTier: built.intent.riskTier,
      failures: built.validation.failures
    });
  });
}

module.exports = Object.freeze({
  fixturePath,
  loadCallMessageIntentFixtures,
  buildCallMessageIntentFromFixture,
  runCallMessageIntentFixtures
});
