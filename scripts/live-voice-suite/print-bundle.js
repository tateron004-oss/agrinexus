#!/usr/bin/env node
"use strict";
// Prints, on one line, what to paste into the browser console of a signed-in Kyro page to run the live voice test there (no password needed):
//   node scripts/live-voice-suite/print-bundle.js [--cases-json "<options>"]
// It prints the rig, then the lines to start the voice and run the chosen cases. See docs/LIVE_VOICE_SUITE.md.
const { buildInstallScript } = require("./rig-page.js");
const { select } = require("./cases/index.js");

const args = process.argv.slice(2);
const flag = name => args.includes(name);
const value = name => { const at = args.indexOf(name); return at >= 0 ? args[at + 1] : ""; };
const cases = select({ writes: flag("--writes"), risky: flag("--risky"), sound: !flag("--no-sound"), only: value("--only"), area: value("--area") });
console.log(`${buildInstallScript({ compact: flag("--compact") })};`);
console.log("// then, once the page says Kyro is listening (click the microphone first if it asks):");
console.log("await __kyroRig.startVoice();");
console.log(`__kyroRig.runCases(${JSON.stringify(cases)});`);
console.log("// follow it with:  __kyroRig.results.map(r => r.status + ' ' + r.id + ' ' + r.failures.join('; '))");
