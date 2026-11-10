"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Live = require("../../public/kyro-live-transcript.js");

// The owner, testing by voice (10 November 2026): the conversation was not on the screen as it happened, only one "Last heard" line after the turn. These pin how the live words are kept and drawn.
const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");

test("the person's words build up as they speak, and the whole sentence replaces them", () => {
  const log = Live.createLog();
  assert.equal(log.noteEvent("conversation.item.input_audio_transcription.delta", { item_id: "u1", delta: "Show" }), true);
  log.noteEvent("conversation.item.input_audio_transcription.delta", { item_id: "u1", delta: " me a map" });
  assert.deepEqual(log.turns(), [{ id: "u1", who: "you", text: "Show me a map", final: false }]);
  log.noteEvent("conversation.item.input_audio_transcription.completed", { item_id: "u1", transcript: "Show me a map of Stockton." });
  assert.deepEqual(log.turns(), [{ id: "u1", who: "you", text: "Show me a map of Stockton.", final: true }]);
  // a late piece of a finished sentence changes nothing
  assert.equal(log.noteEvent("conversation.item.input_audio_transcription.delta", { item_id: "u1", delta: " extra" }), false);
});

test("Kyro's words stream in the same way, in the order they happened", () => {
  const log = Live.createLog();
  log.noteEvent("conversation.item.input_audio_transcription.completed", { item_id: "u1", transcript: "Open the map." });
  log.noteEvent("response.output_audio_transcript.delta", { item_id: "k1", delta: "Sure, " });
  log.noteEvent("response.output_audio_transcript.delta", { item_id: "k1", delta: "here it is." });
  assert.deepEqual(log.turns().map(turn => [turn.who, turn.text, turn.final]), [["you", "Open the map.", true], ["kyro", "Sure, here it is.", false]]);
  log.noteEvent("response.output_audio_transcript.done", { item_id: "k1", transcript: "Sure, here it is. Drag it to look around." });
  assert.deepEqual(log.turns().map(turn => [turn.who, turn.text, turn.final]), [["you", "Open the map.", true], ["kyro", "Sure, here it is. Drag it to look around.", true]]);
});

test("only the last few turns are kept, long words are shortened, and other events change nothing", () => {
  const log = Live.createLog({ max: 3 });
  for (let i = 1; i <= 5; i += 1) log.noteEvent("conversation.item.input_audio_transcription.completed", { item_id: `u${i}`, transcript: `line ${i}` });
  assert.deepEqual(log.turns().map(turn => turn.text), ["line 3", "line 4", "line 5"]);
  log.noteEvent("response.output_audio_transcript.done", { item_id: "k", transcript: "x".repeat(2000) });
  assert.ok(log.turns().at(-1).text.length <= 600);
  assert.equal(log.noteEvent("response.created", { item_id: "z" }), false);
  assert.equal(log.noteEvent("input_audio_buffer.speech_started", {}), false);
  assert.equal(log.noteEvent("conversation.item.input_audio_transcription.delta", { item_id: "e" }), false);
});

test("the SDK's own payload shape (words in acceptanceText) is understood too", () => {
  const log = Live.createLog();
  log.noteEvent("response.output_audio_transcript.delta", { item_id: "k1", acceptanceText: "Got it." });
  assert.equal(log.turns()[0].text, "Got it.");
});

// a tiny stand-in for the page, enough for the strip to be built and drawn
function fakeDocument() {
  const make = tag => {
    const el = { tag, children: [], attrs: {}, listeners: {}, hidden: false, className: "", textContent: "", classList: { set: new Set(), add(c) { this.set.add(c); }, remove(c) { this.set.delete(c); } }, scrollTop: 0, scrollHeight: 0 };
    el.setAttribute = (k, v) => { el.attrs[k] = v; };
    el.appendChild = child => { el.children.push(child); return child; };
    el.append = (...kids) => kids.forEach(kid => el.children.push(kid));
    el.replaceChildren = (...kids) => { el.children = [...kids]; };
    el.addEventListener = (name, fn) => { el.listeners[name] = fn; };
    return el;
  };
  const doc = { head: make("head"), body: make("body"), createElement: make };
  return doc;
}

test("the strip is hidden until someone speaks, draws the turns as plain text, and can be put away", () => {
  const doc = fakeDocument();
  const strip = Live.create(doc, { hideAfterMs: 1000000 });
  assert.equal(strip.element.hidden, true);
  assert.equal(strip.element.attrs.role, "log");
  assert.equal(strip.element.attrs["aria-live"], "off");
  strip.noteEvent("conversation.item.input_audio_transcription.delta", { item_id: "u1", delta: "<b>hello</b>" });
  assert.equal(strip.element.hidden, false);
  const rows = strip.element.children[1];
  assert.equal(rows.children.length, 1);
  assert.equal(rows.children[0].children[1].textContent, "<b>hello</b>"); // text, never markup
  strip.element.children[0].listeners.click();
  assert.equal(strip.element.hidden, true);
  // put away, it stays away while Kyro talks and comes back with the person's next words
  strip.noteEvent("response.output_audio_transcript.delta", { item_id: "k1", delta: "Hi" });
  assert.equal(strip.element.hidden, true);
  strip.noteEvent("conversation.item.input_audio_transcription.delta", { item_id: "u2", delta: "again" });
  assert.equal(strip.element.hidden, false);
});

test("the page loads the strip, caches it for offline, and feeds it every voice event", () => {
  assert.match(html, /\/kyro-live-transcript\.js\?v=kyro-live-transcript-1/);
  assert.match(sw, /\/kyro-live-transcript\.js\?v=kyro-live-transcript-1/);
  assert.match(app, /KyroLiveTranscript/);
  assert.match(app, /kyroLiveTranscriptNote\(eventType, payload\)/);
});
