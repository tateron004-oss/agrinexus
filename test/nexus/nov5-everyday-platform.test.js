"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// The everyday and platform items still open from the owner's test report of 4 November 2026, and what the live voice runs of 5 November showed.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function speechApi() {
  const start = app.indexOf("const KYRO_SPOKEN_LINE_MAX = ");
  const end = app.indexOf("function kyroSpeakPageLine(");
  const sandbox = {};
  vm.runInNewContext(`${app.slice(start, end)}\nthis.max = KYRO_SPOKEN_LINE_MAX; this.line = kyroLineForSpeech;`, sandbox);
  return sandbox;
}

// everyday-45: "kyro is glitching and is stopping while answering a lot". The page read an answer aloud only up to 500 letters, so Kyro's tips for a person coming home stopped in the middle of "Kyro never ..." while the screen was full.
test("a long answer is read aloud to the end of a sentence, not cut after 500 letters in the middle of a word", () => {
  const api = speechApi();
  const sentence = "Keep private things private and check the official page. ";
  const long = sentence.repeat(60); // about 3400 letters
  const said = api.line(long);
  assert.ok(said.length > 1000 && said.length <= api.max, `it reads a long answer (${said.length} letters), up to ${api.max}`);
  assert.ok(said.endsWith("page."), "it stops at the end of a sentence");
  const tips = "These are Kyro's own tips, not from a government page. ".concat("An AI assistant is a computer program that answers questions in words. ".repeat(6), "Four: be careful with anyone who asks for money, gift cards or a code.");
  assert.equal(api.line(tips), tips.replace(/\s+/g, " ").trim(), "an answer of ordinary length is read whole, to the last word");
  assert.ok(api.line(tips).endsWith("gift cards or a code."));
  assert.equal(api.line("  Hello   there.  "), "Hello there.");
  assert.equal(api.line(""), "");
  const noStops = "word ".repeat(600);
  assert.ok(!/\sw$|wor$/.test(api.line(noStops)) && api.line(noStops).length <= api.max, "with no full stop at all it still stops between words");
  assert.match(app, /function kyroSpeakPageLine\(text\) \{\s+const line = kyroLineForSpeech\(text\);/);
  assert.doesNotMatch(app.slice(app.indexOf("function kyroSpeakPageLine("), app.indexOf("function kyroSpeakPageLine(") + 400), /slice\(0, 500\)/);
});

// everyday-58 and everyday-65 ("it did show the map but no step by step instructions", "it asked me to add a me section"), everyday-26 and everyday-33 ("the list to walk me through could not open", "kyro is stopping and not finishing the steps"),
// platform-13 ("the section for uploading is way too much information"): the voice model's own tool call for the words can reach the page BEFORE the page has answered them, and it cleared the screen or went to the server instead.
test("the voice model's tool call gives the page the chance to answer the words itself first, before anything on the screen is cleared", () => {
  const start = app.indexOf("async function callNexusOpenAiRealtimeTool(");
  const body = app.slice(start, start + 6000);
  const claim = body.indexOf("kyroHandleSpokenOpen(command, {}) === true");
  const dismiss = body.indexOf("kyroDismissStaleWorkspace(command)");
  assert.ok(claim > 0 && dismiss > claim, "the page's own answer comes before the screen is cleared");
  assert.match(body.slice(0, claim), /typeof kyroPageJustOpened === "function" && typeof kyroHandleSpokenOpen === "function" && !kyroPageJustOpened\(command\)/, "and not again for words the page has just answered");
  assert.match(body.slice(claim, claim + 600), /response: "Kyro already did that and said so\. Say nothing more\."/);
  // the words heard a moment later find it done (the same key, within five seconds)
  const handle = app.slice(app.indexOf("function kyroHandleSpokenOpen(text, options = {}) {"), app.indexOf("function kyroHandleSpokenOpen(text, options = {}) {") + 900);
  assert.match(handle, /kyroLastSpokenOpen\.key === spokenKey && Date\.now\(\) - kyroLastSpokenOpen\.at < 5000\) return true;/);
  assert.match(handle, /if \(handled && spokenKey\) kyroLastSpokenOpen = \{ key: spokenKey, at: Date\.now\(\) \};/);
});

// platform-09: "cant open and create the note. it finally opened after three failed attempts". With no signal voice cannot work, so the typed box shows at once, says why, and goes when the signal returns.
test("with no signal the typed box shows at once, with its own words in English and Kiswahili, and the screen is drawn again when the signal goes and comes back", () => {
  assert.match(app, /const kyroOffline = typeof navigator !== "undefined" && navigator\.onLine === false;\s+const typedModeOn = !microphoneFallbackRequired && trueExperienceMode !== "mission" && \(nexusTypedModeRequested === true \|\| kyroOffline\);/);
  assert.match(app, /kyroTypeText\(kyroOffline \? "offlineHint" : "hint"\)/);
  const start = app.indexOf("const KYRO_TYPE_TEXT = ");
  const table = {};
  vm.runInNewContext(`${app.slice(start, app.indexOf("function kyroTypeText"))}\nthis.table = KYRO_TYPE_TEXT;`, table);
  assert.match(table.table.en.offlineHint, /no signal/i); assert.match(table.table.en.offlineHint, /sold 5 bags of maize/);
  assert.match(table.table.sw.offlineHint, /Hakuna mtandao/); assert.ok(table.table.sw.offlineHint.length > 40);
  assert.match(app, /for \(const kyroSignalEvent of \["offline", "online"\]\) window\.addEventListener\(kyroSignalEvent, \(\) => \{ try \{ if \(typeof renderUserWorkspace === "function"\) renderUserWorkspace\(\); \} catch/);
});

// the live voice test's guest start (about 2 runs in 8 began with "Sign in required"): a fixed six seconds after pressing Start as User was not always enough on the live host
test("the live voice test waits for the guest session to exist instead of a fixed six seconds, and presses Start as User once more if it never came", () => {
  const run = fs.readFileSync(path.join(__dirname, "../../scripts/live-voice-suite/run.js"), "utf8");
  assert.match(run, /async function waitForGuestSession\(client/);
  assert.match(run, /fetch\('\/api\/state', \{ credentials: 'same-origin' \}\)\.then\(r => r\.status\)/);
  assert.match(run, /if \(status === 200\) \{ await sleep\(1500\); return true; \}/);
  assert.match(run, /if \(!pressedAgain && waited >= retryAfter\)/);
  assert.match(run, /if \(!\(await waitForGuestSession\(client\)\)\)/);
  assert.doesNotMatch(run, /await sleep\(6000\); await waitForPage\(client\);\s+\}\s+await client\.evaluate\(buildInstallScript/);
  const rig = fs.readFileSync(path.join(__dirname, "../../scripts/live-voice-suite/rig-page.js"), "utf8");
  assert.match(rig, /else if \(step\.offline !== undefined\)/);
  assert.match(rig, /if \(rig\.offlineSet\)/);
});

// everyday-33 ("kyro is stopping and not finishing the steps"): measured on 5 November 2026, 1545 of the 1846 steps in the 296 checked walkthroughs are longer than 500 letters when read aloud, so every one of them used to be cut off in the middle of a sentence.
test("every step of every checked walkthrough is read aloud whole (none is longer than the spoken limit), where before 84 percent were cut after 500 letters", () => {
  const walk = require("../../public/kyro-walkthrough.js");
  const guides = require("../../nexus/knowledge/guide-walkthroughs.js");
  const api = speechApi();
  let steps = 0; let longer = 0; let widest = 0;
  for (const family of guides.FAMILIES) {
    for (const id of Object.values(family.WALK_OF_TOPIC || {})) {
      const raw = family.walkthrough(id); const def = raw && (raw.walkthrough || raw);
      const instance = def && walk.createWalkthrough(def); if (!instance) continue;
      for (let i = 0; i < def.steps.length; i += 1) {
        const line = walk.sayStep(instance.snapshot(), "en"); steps += 1; if (line.length > 500) longer += 1; widest = Math.max(widest, line.length);
        assert.equal(api.line(line), line.replace(/\s+/g, " ").trim(), `${id} step ${i + 1} (${line.length} letters) is read whole`);
        instance.next();
      }
    }
  }
  assert.ok(steps > 1500, `${steps} steps looked at`);
  assert.ok(longer > steps / 2, `most steps are longer than the old 500-letter cut (${longer} of ${steps}, widest ${widest})`);
});
