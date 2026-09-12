"use strict";

const { runTrustChainQa } = require("./lib/nexus-genesis-trust-chain-shared-qa");

try {
  const result = runTrustChainQa({
    railNumber: 17,
    suiteId: "nexus-genesis-rail-17-privacy-isolation",
    suiteName: "Nexus Genesis Rail 17 Privacy Isolation QA",
    acceptancePurpose: "Protect user/session/record/provider isolation, redaction, safe logging, access denial, and admin boundaries.",
    groups: ["privacy", "adminIsolation"]
  });
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  console.error(error && error.stack ? error.stack : error);
  process.exitCode = 1;
}
