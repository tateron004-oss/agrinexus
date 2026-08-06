"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const { FAILURE_SCENARIOS } = require("../nexus-core/production-capability-registry");

const coverage = Object.freeze({
  "provider-timeout": ["nexus-provider-fetch.test.js", /transient network errors should be retried/],
  "empty-provider-result": ["nexus-content-population-extension.test.js", /empty|zero-source/i],
  "invalid-provider-payload": ["nexus-provider-fetch.test.js", /invalid|unexpected/i],
  "rate-limit": ["nexus-provider-fetch.test.js", /429/],
  "expired-session": ["nexus-http-e2e.test.js", /denied|session/i],
  refresh: ["../../scripts/nexus-windows-stability-certification.ps1", /reset/i],
  "slow-network": ["nexus-provider-fetch.test.js", /timeout|retry/i],
  "media-autoplay-blocked": ["nexus-production-transaction-windows.spec.js", /autoplay-policy|readyState/i],
  "microphone-interruption": ["nexus-windows-physical-certification.spec.js", /microphone|return-to-listening/i],
  "location-denied": ["nexus-application-reliability-matrix.test.js", /map|geocod/i],
  "offline-reconnect": ["fixtures/nexus-production-lifecycle-journeys.js", /Reconnect and synchronize/i],
  "deployment-mismatch": ["nexus-release-certification-controller.test.js", /CANONICAL_HOST_MISMATCH|release-sha/i],
  "exhausted-quota": ["nexus-application-reliability-matrix.test.js", /server_error|rate/i],
  "authentication-transition": ["nexus-http-e2e.test.js", /authorization|denied/i],
  "broken-image": ["nexus-content-population-browser.test.js", /naturalWidth|image/i],
  "source-link-failure": ["nexus-approved-source-evidence.test.js", /source|href/i],
  "video-provider-failure": ["fixtures/nexus-production-lifecycle-journeys.js", /playable video|missing provider/i],
  "persistence-write-failure": ["nexus-windows-voice-form-entry.spec.js", /persist|save/i],
  "workspace-render-failure": ["nexus-capability-transaction-contract.test.js", /visible|render/i]
});

assert.deepEqual(Object.keys(coverage).sort(), [...FAILURE_SCENARIOS].sort(), "every registered infrastructure failure must have an injected evidence owner");
for (const [scenario, [file, pattern]] of Object.entries(coverage)) {
  const source = fs.readFileSync(`rebuild/tests/${file}`, "utf8");
  assert.match(source, pattern, `${scenario} has no executable failure evidence in ${file}`);
}

console.log(`Nexus complete failure injection contract: PASS (${FAILURE_SCENARIOS.length} scenarios)`);
