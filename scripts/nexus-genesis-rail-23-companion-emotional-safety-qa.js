"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 23,
    suiteId: "nexus-genesis-rail-23-companion-emotional-safety",
    suiteName: "Nexus Genesis Rail 23 Companion Emotional Safety QA",
    acceptancePurpose: "Protect calm companion continuity without dependency, consciousness, manipulative attachment, or false heard/spoke claims.",
    groups: ["companionEmotionalSafety", "companion"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
