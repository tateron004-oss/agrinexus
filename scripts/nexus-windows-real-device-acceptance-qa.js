"use strict";

const assert = require("node:assert");
const fs = require("node:fs");

const workflow = fs.readFileSync(".github/workflows/nexus-windows-real-device-acceptance.yml", "utf8");
const spec = fs.readFileSync("tests/playwright/nexus-windows-real-device-acceptance.spec.js", "utf8");
const preflight = fs.readFileSync("scripts/nexus-windows-real-device-preflight.ps1", "utf8");

assert.match(workflow, /workflow_run:/);
assert.match(workflow, /workflows: \["Nexus production voice certification"\]/);
assert.match(workflow, /runs-on: \[self-hosted, Windows, X64\]/);
assert.match(workflow, /nexus-protected-foundation-guard\.js/g);
assert.match(workflow, /if-no-files-found: error/);
assert.doesNotMatch(spec, /useFakeDeviceForMediaStream|use-file-for-fake-audio-capture|headless:\s*true/i);
assert.match(spec, /headless:\s*false/);
assert.match(spec, /getUserMedia/);
assert.match(spec, /acousticPeak/);
assert.match(spec, /toHaveLength\(20\)/);
assert.match(spec, /genesis\.workspace\.acknowledged/);
assert.match(spec, /liveMicrophoneTrack/);
assert.match(spec, /connectionState/);
assert.match(preflight, /Session 0/);
assert.match(preflight, /virtual\|vb-audio/);

console.log("NEXUS WINDOWS REAL-DEVICE ACCEPTANCE QA: PASS");
