"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 13,
    suiteId: "nexus-genesis-rail-13-capability-readiness",
    suiteName: "Nexus Genesis Rail 13 Capability Readiness QA",
    acceptancePurpose: "Protect truthful provider readiness, credential-name reporting, fallback naming, and no fake provider success.",
    groups: ["capabilityReadiness", "fallback"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
