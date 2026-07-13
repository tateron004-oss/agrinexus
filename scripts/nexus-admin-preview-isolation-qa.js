"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 6,
    suiteId: "nexus-admin-preview-isolation",
    suiteName: "Nexus Genesis Trust Chain Rail 6 QA",
    groups: ["adminIsolation", "ownership", "fallback"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
