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
assert.doesNotMatch(spec, /navigator\.mediaDevices\.getUserMedia/);
assert.doesNotMatch(spec, /waitForNavigation/);
assert.match(spec, /#loginView"\)\)\.toBeHidden/);
assert.match(spec, /#appView"\)\)\.toBeVisible/);
assert.match(spec, /waitForResponse/);
assert.match(spec, /url\.pathname === "\/api\/login"/);
assert.match(spec, /id:\s*"u_standard"/);
assert.match(spec, /toContain\("agrinexus_sid"\)/);
assert.match(spec, /toContain\("agrinexus_auth"\)/);
assert.match(spec, /await connectRealtime\(page\);[\s\S]*Nexus physical microphone calibration\./);
assert.match(spec, /calibrationTranscriptReceived:\s*true/);
assert.match(spec, /Chrome must expose a physical microphone after Nexus connects/);
assert.match(spec, /toHaveLength\(20\)/);
assert.match(spec, /genesis\.workspace\.acknowledged/);
assert.match(spec, /liveMicrophoneTrack/);
assert.match(spec, /connectionState/);
assert.match(preflight, /Session 0/);
assert.match(preflight, /virtual\|vb-audio/);

console.log("NEXUS WINDOWS REAL-DEVICE ACCEPTANCE QA: PASS");
