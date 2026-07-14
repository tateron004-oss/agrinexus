"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 25,
    suiteId: "nexus-genesis-rail-25-end-to-end-standard-user-acceptance",
    suiteName: "Nexus Genesis Rail 25 End-to-End Standard User Acceptance QA",
    acceptancePurpose: "Protect full Standard User trust-chain journey from greeting through recovery and registration of all rails.",
    groups: [
      "registration",
      "acceptance",
      "understanding",
      "context",
      "memory",
      "planning",
      "capabilityReadiness",
      "consent",
      "execution",
      "receipts",
      "privacy",
      "safety",
      "accessibility",
      "multilingual",
      "concurrency",
      "recovery",
      "companionEmotionalSafety",
      "physicalVoiceProof",
      "endToEndAcceptance"
    ],
    verbose: true
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
