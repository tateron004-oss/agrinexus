"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 15,
    suiteId: "nexus-genesis-rail-15-execution-integrity",
    suiteName: "Nexus Genesis Rail 15 Execution Integrity QA",
    acceptancePurpose: "Protect exact action payloads, provider/tool permission checks, duplicate prevention, failure normalization, and no preview execution.",
    groups: ["execution", "consent"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
