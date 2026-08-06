"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { RENDERER_OUTCOME_CONTRACT, contractForSurface, installRendererOutcomeVerifier } = require("../nexus-core/renderer-outcome-contract");

assert.deepEqual(Object.keys(RENDERER_OUTCOME_CONTRACT).sort(), ["content-population", "production-capability", "protected-workspace"]);
for (const surface of Object.keys(RENDERER_OUTCOME_CONTRACT)) {
  const contract = contractForSurface(surface);
  assert.ok(contract.owner && contract.rootAttribute && contract.surfaceId && contract.resultIdentity, `${surface}: incomplete renderer contract`);
}
assert.equal(contractForSurface("production-capability").resultIdentity, "transaction");
assert.equal(contractForSurface("content-population").resultIdentity, "transaction");
assert.equal(contractForSurface("protected-workspace").resultIdentity, "stable-artifact");

const browserContext = { document: {} };
browserContext.window = browserContext;
vm.runInNewContext(`(${installRendererOutcomeVerifier.toString()})()`, browserContext);
assert.equal(typeof browserContext.NexusRendererOutcomeVerifier?.currentResultId, "function", "serialized browser installer did not initialize the verifier");
assert.equal(browserContext.NexusRendererOutcomeVerifier.requiresResultChange("production-capability"), true);
assert.equal(browserContext.NexusRendererOutcomeVerifier.requiresResultChange("protected-workspace"), false);
assert.match(installRendererOutcomeVerifier.toString(), /innerText \|\| root\?\.textContent/, "shared verifier must retain deterministic DOM text fallback");

const certificationFiles = [
  "nexus-browser-playwright-smoke.js",
  "nexus-content-population-browser.test.js",
  "nexus-production-experience-browser.js",
  "nexus-capability-windows-physical.js",
  "nexus-production-experience-windows-voice.js"
];
const forbidden = /data-nexus-(?:capability-result|content-result-id|visual)/;
for (const name of certificationFiles) {
  const source = fs.readFileSync(path.join(__dirname, name), "utf8");
  assert.doesNotMatch(source, forbidden, `${name} bypasses the authoritative renderer verifier`);
}

const contentJourney = fs.readFileSync(path.join(__dirname, "nexus-content-population-browser.test.js"), "utf8");
assert.match(contentJourney, /R\(\?:é\|e\)sum\(\?:é\|e\) Builder/, "résumé owner proof must accept certified diacritic variants");
assert.match(contentJourney, /requiresResultChange\(rendererSurface\)/, "browser journey must honor each renderer's registered identity semantics");

console.log("Nexus renderer ownership contract: PASS (one authoritative verifier, no private-selector bypasses)");
