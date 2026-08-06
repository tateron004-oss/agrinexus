"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { RENDERER_OUTCOME_CONTRACT, contractForSurface } = require("../nexus-core/renderer-outcome-contract");

assert.deepEqual(Object.keys(RENDERER_OUTCOME_CONTRACT).sort(), ["content-population", "production-capability"]);
for (const surface of Object.keys(RENDERER_OUTCOME_CONTRACT)) {
  const contract = contractForSurface(surface);
  assert.ok(contract.owner && contract.rootAttribute && contract.surfaceId, `${surface}: incomplete renderer contract`);
}

const certificationFiles = [
  "nexus-browser-playwright-smoke.js",
  "nexus-content-population-browser.test.js",
  "nexus-production-experience-browser.js",
  "nexus-capability-windows-physical.js",
  "nexus-production-experience-windows-voice.js"
];
const forbidden = /data-nexus-(?:capability-result|content-result-id)/;
for (const name of certificationFiles) {
  const source = fs.readFileSync(path.join(__dirname, name), "utf8");
  assert.doesNotMatch(source, forbidden, `${name} bypasses the authoritative renderer verifier`);
}

console.log("Nexus renderer ownership contract: PASS (one authoritative verifier, no private-selector bypasses)");
