"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 14,
    suiteId: "nexus-genesis-rail-14-consent-confirmation",
    suiteName: "Nexus Genesis Rail 14 Consent Confirmation QA",
    acceptancePurpose: "Protect explicit confirmation, changed-action invalidation, expiry, cancellation, and high-impact consent gates.",
    groups: ["consent", "safety"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
