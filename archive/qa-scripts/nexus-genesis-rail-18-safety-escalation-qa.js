"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 18,
    suiteId: "nexus-genesis-rail-18-safety-escalation",
    suiteName: "Nexus Genesis Rail 18 Safety Escalation QA",
    acceptancePurpose: "Protect emergency escalation, no diagnosis, no unauthorized execution, and respectful useful safety refusal.",
    groups: ["safety", "companion"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
