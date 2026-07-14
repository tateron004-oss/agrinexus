"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 24,
    suiteId: "nexus-genesis-rail-24-physical-browser-voice-proof",
    suiteName: "Nexus Genesis Rail 24 Physical Browser Voice Proof QA",
    acceptancePurpose: "Protect separation of source wiring, browser events, and human-confirmed audible output for physical voice proof.",
    groups: ["physicalVoiceProof", "synthesis", "fallback"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
