"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");

const canonical = "https://agrinexus-platform.onrender.com";
const forbidden = "https://nexus-genesis-certified.onrender.com";
const activeTargetFiles = [
  ".github/workflows/nexus-clean-windows-certification.yml",
  ".github/workflows/nexus-release-certification-v2.yml",
  "scripts/nexus-canonical-production-target.js",
  "scripts/nexus-release-certification-controller.js",
  "scripts/certify-nexus.js",
  "scripts/nexus-windows-stability-certification.ps1",
  "rebuild/nexus-core/production-capability-registry.js",
  "rebuild/tests/nexus-windows-physical-certification.spec.js"
];

for (const file of activeTargetFiles) {
  const source = fs.readFileSync(file, "utf8");
  assert.doesNotMatch(source, new RegExp(forbidden.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${file} must reject the retired host`);
}

const target = fs.readFileSync("scripts/nexus-canonical-production-target.js", "utf8");
assert.match(target, new RegExp(canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
assert.match(target, /url\.origin !== CANONICAL_PRODUCTION_ORIGIN \|\| url\.pathname !== "\/"/);

const controller = fs.readFileSync("scripts/nexus-release-certification-controller.js", "utf8");
assert.match(controller, /\^\[a-f0-9\]\{40\}\$/);
assert.doesNotMatch(controller, /startsWith\(actual\)|actual\.startsWith/);
assert.match(controller, /bundle-sha256/);

const physical = fs.readFileSync("rebuild/tests/nexus-windows-physical-certification.spec.js", "utf8");
assert.match(physical, /deterministic-pcm/);
assert.match(physical, /NEXUS_PROMPT_ROTATION_SEED/);
assert.match(physical, /return injectSpokenCommand\(page, prompt\)/);
assert.match(physical, /Physical microphone input must be live/);
assert.match(physical, /audio\.remote-attached/);
assert.match(physical, /muted: false/);
assert.match(physical, /audio\.volume/);
assert.match(physical, /echoCancellation: false/);
require("./nexus-physical-certification-drift.test");

const stability = fs.readFileSync("scripts/nexus-windows-stability-certification.ps1", "utf8");
for (const required of [
  "nexus-release-certification-controller.js verify-deployment",
  "nexus-provider-fetch.test.js",
  "nexus-approved-source-evidence.test.js",
  "nexus-windows-physical-certification.spec.js",
  "nexus-general-questions-physical-voice.spec.js",
  "nexus-production-transaction-windows.spec.js",
  "nexus-windows-voice-form-entry.spec.js",
  "nexus-complete-failure-injection-contract.test.js",
  "nexus-capability-windows-physical.js",
  "nexus-production-experience-windows-voice.js",
  "nexus-protected-foundation-guard.js"
]) assert.match(stability, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `stability must run ${required}`);
assert.match(stability, /\$summary\.completedPasses = 0/);

console.log("Nexus full production certification contract: PASS");
