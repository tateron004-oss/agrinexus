"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 22,
    suiteId: "nexus-genesis-rail-22-recovery",
    suiteName: "Nexus Genesis Rail 22 Recovery QA",
    acceptancePurpose: "Protect offline startup, lost network, timeout, stale cache, malformed response, unavailable devices, and visible retry paths.",
    groups: ["recovery", "fallback"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
