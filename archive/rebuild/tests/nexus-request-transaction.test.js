"use strict";

const assert = require("node:assert/strict");
const {
  WORKFLOW_CONTRACTS,
  NexusRequestTransaction,
  validateResolution,
  verifyAcknowledgement
} = require("../nexus-core/request-transaction");

assert.equal(Object.keys(WORKFLOW_CONTRACTS).length, 13);

const invalidMap = validateResolution({
  workspace: "maps",
  parameters: { action: "show-place", place: null }
});
assert.equal(invalidMap.valid, false);
assert.deepEqual(invalidMap.missing, ["place"]);

const invalidMarketplace = validateResolution({
  workspace: "marketplace",
  parameters: { action: "sell", quantity: 50, unit: "bags", product: null }
});
assert.equal(invalidMarketplace.valid, false);
assert.deepEqual(invalidMarketplace.missing, ["product"]);

const blank = verifyAcknowledgement(
  { workspace: "maps" },
  { visible: true, populated: true, outcomeVerified: false, outcomeKind: "map" }
);
assert.equal(blank.verified, false, "An opened but blank map must never pass.");

const wrongSurface = verifyAcknowledgement(
  { workspace: "health" },
  { visible: true, populated: true, outcomeVerified: true, outcomeKind: "map" }
);
assert.equal(wrongSurface.verified, false, "The wrong visible surface must never pass.");

async function main() {
  const stages = [];
  const transaction = new NexusRequestTransaction({
    execute: async (resolution) => ({
      visible: true,
      populated: true,
      outcomeVerified: true,
      outcomeKind: resolution.workspace === "maps" ? "map" : "application"
    }),
    onStage: (type, detail) => stages.push({ type, detail })
  });
  const result = await transaction.run({
    workspace: "maps",
    command: "Show me Abuja, Nigeria on the map",
    utterance: "Show me Abuja, Nigeria on the map",
    parameters: { action: "show-place", place: "Abuja, Nigeria" }
  });
  assert.equal(result.outcome.verified, true);
  assert.deepEqual(stages.map((stage) => stage.type), [
    "request.validated", "request.executing", "request.outcome"
  ]);

  await assert.rejects(() => transaction.run({
    workspace: "maps",
    command: "Open the map",
    parameters: { action: "show-place", place: null }
  }), (error) => error.code === "missing-required-parameters");

  const blankTransaction = new NexusRequestTransaction({
    execute: async () => ({
      visible: true,
      populated: true,
      outcomeVerified: false,
      outcomeKind: "map",
      recovery: { state: "tile-failure", retryable: true }
    })
  });
  await assert.rejects(() => blankTransaction.run({
    workspace: "maps",
    command: "Show Abuja",
    parameters: { action: "show-place", place: "Abuja" }
  }), (error) => error.code === "visible-outcome-unverified" && error.recovery.state === "tile-failure");

  console.log("Nexus request transaction: PASS (13 workflow contracts)");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
