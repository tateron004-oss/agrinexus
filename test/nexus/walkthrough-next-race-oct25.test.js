"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found on 25 October 2026 in the full live pass of every walkthrough (about two cases in a hundred failed, and passed when run alone). "Next." was said right after a walkthrough opened. The voice model began to answer before the page had the words (the text of what
// was said takes about three seconds to arrive), began with "I can't see the next step", and the page's safety net for a model that refuses (kyroRecoverRefusal) replayed the LAST words it had: the request that had opened the walkthrough. The walkthrough was reopened
// at step 1, its screen was gone when "Next." arrived, and "Next." was answered as a new question ("Which feature would you like me to walk through next?"). Two guards: nothing is replayed while the person has spoken since the last words the page has, and nothing is
// replayed when a walkthrough that those very words opened is on the screen.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("function kyroRecoverRefusal(");
const end = app.indexOf("\n}\n", start) + 2;
assert.ok(start > 0 && end > start, "the function is in app.js");

function sandbox(state) {
  const calls = [];
  const context = {
    Date, document: { querySelector: selector => (state.screen && /walkthrough/.test(selector) ? {} : null) },
    kyroRefusalSeenAt: state.refusalSeenAt ?? Date.now() - 500, kyroHeard: { text: state.text ?? "Walk me through uploading a file.", at: state.heardAt, recovered: false }, kyroToolCalledAt: 0, kyroPageSpeaksUntil: 0, kyroActiveVoiceIntake: null,
    kyroUserSpeechAt: state.speechAt ?? 0, kyroWalkthroughOpenedAt: state.openedAt ?? 0,
    reportKyroVoiceStall: () => {}, kyroTakeOverTurn: () => { calls.push("takeover"); }, kyroSpeakPageLine: () => {},
    handleNexusUnifiedBrainRuntimeCommand: async (said, options) => { calls.push(`replay:${said}:${options.source}`); return true; }
  };
  vm.createContext(context);
  vm.runInContext(`${app.slice(start, end)}\nthis.recover = kyroRecoverRefusal;`, context);
  return { recover: context.recover, calls, context };
}
const now = Date.now();

test("with nothing else going on, a refusal of words the page has is replayed through the page's own route (the safety net still works)", async () => {
  const x = sandbox({ heardAt: now - 2000 });
  assert.equal(x.recover(), true);
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(x.calls, ["takeover", "replay:Walk me through uploading a file.:voice-recovery"]);
});

test("the person has spoken since the last words the page has: the model is answering words still on their way, so nothing old is replayed", async () => {
  const x = sandbox({ heardAt: now - 5000, speechAt: now - 2000 });
  assert.equal(x.recover(), false);
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(x.calls, []);
  assert.equal(x.context.kyroHeard.recovered, false, "it can still be recovered once the new words arrive");
});

test("a walkthrough that these very words opened is on the screen: nothing is replayed, so it is not reopened at step 1", async () => {
  const x = sandbox({ heardAt: now - 6000, openedAt: now - 5000, screen: true });
  assert.equal(x.recover(), false);
  await new Promise(resolve => setImmediate(resolve));
  assert.deepEqual(x.calls, []);
});

test("but if that walkthrough's screen is gone, or it was opened for earlier words, the words are replayed as before", async () => {
  const gone = sandbox({ heardAt: now - 6000, openedAt: now - 5000, screen: false });
  assert.equal(gone.recover(), true);
  const older = sandbox({ heardAt: now - 1000, openedAt: now - 9000, screen: true });
  assert.equal(older.recover(), true);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(gone.calls.length, 2); assert.equal(older.calls.length, 2);
});

test("the page notes when the person begins to speak and when a walkthrough opens", () => {
  assert.match(app, /if \(eventType === "input_audio_buffer\.speech_started"\) \{\s+try \{ kyroUserSpeechAt = Date\.now\(\); \} catch/);
  assert.match(app, /kyroWalkthrough = \{ walk, lang \};\s+try \{ kyroWalkthroughOpenedAt = Date\.now\(\); \} catch/);
  assert.match(app, /let kyroUserSpeechAt = 0;\s+let kyroWalkthroughOpenedAt = 0;/);
});
