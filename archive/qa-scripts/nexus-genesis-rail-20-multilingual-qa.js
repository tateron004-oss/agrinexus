"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 20,
    suiteId: "nexus-genesis-rail-20-multilingual",
    suiteName: "Nexus Genesis Rail 20 Multilingual QA",
    acceptancePurpose: "Protect language switching, transcript/response locale, synthesis fallback truthfulness, and high-risk confirmation language.",
    groups: ["multilingual", "synthesis"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
