"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// 4 November 2026: someone asked the owner "how do I type instead of using the voice?" The typed box showed only when voice could not run (microphone blocked or realtime failed), so nobody could tell how to get it.
// Now: "I want to type" / "let me type" / "use the keyboard" (or the small Type button) shows it even when voice works; "use voice" (or the Use voice button) takes it away; the choice is kept in the browser.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const lines = app.split("\n");
const names = ["KYRO_OPEN_LEAD", "KYRO_TYPE_REQUEST", "KYRO_VOICE_BACK"];
const sandbox = {};
vm.runInNewContext(`${lines.filter(line => names.some(name => line.startsWith(`const ${name} = `))).join("\n")}
this.type = said => KYRO_TYPE_REQUEST.test(said); this.back = said => KYRO_VOICE_BACK.test(said);`, sandbox);

test("a person can ask to type in English or Kiswahili, and ordinary sentences with the word 'type' are left alone", () => {
  for (const say of ["I want to type", "Kyro, I want to type.", "Let me type", "Can I type?", "Could I type instead", "I would like to use the keyboard", "I prefer to type", "Switch to typing", "Typing mode", "Use the keyboard", "Type instead",
    "I cannot speak", "I can't talk", "Nataka kuandika", "Niruhusu niandike", "Nitaandika"]) assert.equal(sandbox.type(say), true, say);
  for (const say of ["What type of loan is best?", "I want to learn", "Teach me typing", "Write me a letter", "Make a note", "What is a keyboard shortcut", "Remind me to type the report", "Play some music", "Typing speed test"]) assert.equal(sandbox.type(say), false, say);
});

test("and ask to go back to voice, only as a whole sentence", () => {
  for (const say of ["Use voice", "Go back to voice", "Switch to voice mode", "I want to talk", "Let me speak", "I want to talk now", "Voice mode", "Speak instead", "Tumia sauti", "Nataka kuongea"]) assert.equal(sandbox.back(say), true, say);
  for (const say of ["I want to speak to my son", "Let me talk to the manager about the price", "Play some music", "Talk to me about fractions", "Show me my notes"]) assert.equal(sandbox.back(say), false, say);
});

test("the typed box is shown when it is asked for, with a Use voice button, and the small Type button is shown while it is not", () => {
  // the template: the box shows for the microphone fallback OR for typed mode, and typed mode has its own section, hint and Use voice button
  assert.match(app, /const typedModeOn = !microphoneFallbackRequired && trueExperienceMode !== "mission" && nexusTypedModeRequested === true;\s+kyroUpdateTypeButton\(!\(microphoneFallbackRequired \|\| typedModeOn\) && trueExperienceMode !== "mission"\);/);
  assert.match(app, /` : typedModeOn \? `\s+<section class="nexus-true-conversation" data-kyro-typed-mode="true"[^>]*>\s+<p class="nexus-companion-recovery-hint" role="status">\$\{escapeHtml\(kyroTypeText\("hint"\)\)\}<\/p>\s+\$\{renderNexusTrueCommandComposer\(\{ compact: true \}\)\}\s+<button type="button" class="kyro-use-voice" data-kyro-use-voice="true"/);
  // the microphone-fallback attribute and section are unchanged
  assert.match(app, /data-nexus-microphone-fallback-active="\$\{microphoneFallbackRequired \? "true" : "false"\}"/);
  assert.match(app, /Voice is unavailable right now\. Type your request below while the microphone retry remains available\./);
});

test("asking to type works before the lesson claims, in a lesson too; the choice is kept in the browser; an open answer card is put away so it does not hide the box", () => {
  assert.ok(app.indexOf("if (KYRO_TYPE_REQUEST.test(said))") > 0);
  assert.match(app, /if \(KYRO_TYPE_REQUEST\.test\(said\)\) \{ if \(!options\.typed\) kyroTakeOverTurn\(\); kyroSetTypedMode\(true\); return true; \}\s+if \(nexusTypedModeRequested && KYRO_VOICE_BACK\.test\(said\)\) \{ if \(!options\.typed\) kyroTakeOverTurn\(\); kyroSetTypedMode\(false\); return true; \}/);
  assert.ok(app.indexOf("if (KYRO_TYPE_REQUEST.test(said))") < app.indexOf("const tutorDemo = kyroTutorDemoCommand(said);"), "before the tutor claims");
  assert.match(app, /let nexusTypedModeRequested = \(\(\) => \{ try \{ return window\.localStorage\.getItem\("kyroTypedMode"\) === "1"; \} catch \{ return false; \} \}\)\(\);/);
  assert.match(app, /window\.localStorage\.setItem\("kyroTypedMode", nexusTypedModeRequested \? "1" : "0"\)/);
  assert.match(app, /document\.querySelectorAll\("\[data-kyro-result\]"\)\.forEach\(node => \{ if \(!node\.querySelector\("\[data-kyro-tutor-box\]"\)\) node\.remove\(\); \}\)/);
  assert.match(app, /target\.closest\("\[data-kyro-use-voice\]"\)\) kyroSetTypedMode\(false, \{ say: false \}\)/);
});

test("the small Type button is for a person who cannot speak: it is reachable, labelled, sits under the result cards, and is in Kiswahili too", () => {
  assert.match(app, /button\.id = "kyroTypeInstead";\s+button\.style\.cssText = "position:fixed;left:16px;bottom:16px;z-index:40;/);
  assert.match(app, /button\.addEventListener\("click", \(\) => \{ kyroSetTypedMode\(true, \{ say: false \}\); \}\)/);
  assert.match(app, /button\.setAttribute\("aria-label", kyroTypeText\("buttonLabel"\)\)/);
  // result cards sit above it (their z-index is far higher)
  assert.match(app, /z-index: 2147482500/.test(app) ? /z-index: 2147482500/ : /z-index:2147482500/);
  const start = app.indexOf("const KYRO_TYPE_TEXT = ");
  const text = {};
  vm.runInNewContext(`${app.slice(start, app.indexOf("function kyroTypeText"))}\nthis.table = KYRO_TYPE_TEXT;`, text);
  for (const lang of ["en", "sw"]) for (const key of ["label", "hint", "useVoice", "button", "buttonLabel", "on", "off"]) assert.ok(String(text.table[lang][key]).length > 2, `${lang}.${key}`);
  assert.match(text.table.en.on, /use voice/i);
  assert.match(text.table.sw.on, /tumia sauti/i);
});
