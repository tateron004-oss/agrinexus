"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 19,
    suiteId: "nexus-genesis-rail-19-accessibility",
    suiteName: "Nexus Genesis Rail 19 Accessibility QA",
    acceptancePurpose: "Protect keyboard, focus, screen-reader, reduced-motion, contrast, touch, low-bandwidth, typed fallback, and voice-free access.",
    groups: ["accessibility", "fallback"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
