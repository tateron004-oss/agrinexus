"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 16,
    suiteId: "nexus-genesis-rail-16-outcome-receipts",
    suiteName: "Nexus Genesis Rail 16 Outcome Receipts QA",
    acceptancePurpose: "Protect verified provider outcome evidence, readable receipts, audit trace, and no invented receipts.",
    groups: ["receipts", "execution"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
