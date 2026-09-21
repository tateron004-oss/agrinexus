"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const notes = require("../../public/kyro-offline-notes.js");

const memoryStorage = () => { const map = new Map(); return { getItem: key => (map.has(key) ? map.get(key) : null), setItem: (key, value) => map.set(key, String(value)), map }; };
const NOW = Date.UTC(2026, 8, 20, 12);

test("only plain statements of something that already happened are kept", () => {
  for (const text of ["Sold 200 kg of maize to Amina for 9000", "Spent 5000 on fertilizer for North Plot", "I bought 3 bags of seed for 6000", "It rained 20 mm today", "Add 10 bags of fertilizer to stock", "Daisy gave 12 liters of milk", "Note about Amina: wants 500 kg maize"])
    assert.equal(notes.isRecordable(text), true, text);
});

test("nothing that sends, calls, pays, posts, reminds or deletes is ever kept, and neither is a question", () => {
  for (const text of ["Sold maize and text Amina the price", "Spent 5000 and call Otieno", "Send 5000 to Amina", "Post for sale: 500 kg maize", "Remind me to spray tomorrow", "Delete my last sale", "Cancel order 2", "Sold my maize, did I make a profit?", "Tell my wife I sold the maize", "What is the weather", "Hello", "", "x".repeat(300)])
    assert.equal(notes.isRecordable(text), false, text.slice(0, 40));
});

test("a note is kept only when the phone really could not reach Kyro", () => {
  const sale = "Sold 200 kg of maize for 9000";
  assert.equal(notes.shouldKeep(new TypeError("Failed to fetch"), sale, true), true, "the request never got an answer");
  assert.equal(notes.shouldKeep(new Error("whatever"), sale, false), true, "no signal at all");
  assert.equal(notes.shouldKeep(new Error("Request failed"), sale, true), false, "the server answered with an error: it may have been recorded");
  assert.equal(notes.shouldKeep(new Error("Nexus timed out waiting for the live engine."), sale, true), false, "a timeout may have been recorded too");
  assert.equal(notes.shouldKeep(new TypeError("Failed to fetch"), "Send 5000 to Amina", true), false);
});

test("kept notes are replayed in order once, and a still-missing signal keeps the rest", async () => {
  const storage = memoryStorage();
  assert.equal(notes.add("Sold 200 kg of maize for 9000", { storage, now: NOW }), 1);
  assert.equal(notes.add("Spent 5000 on fertilizer", { storage, now: NOW + 1000 }), 2);
  assert.equal(notes.add("It rained 20 mm today", { storage, now: NOW + 2000 }), 3);
  assert.equal(notes.pending({ storage, now: NOW + 3000 }), 3);
  const sent = [];
  const outcome = await notes.drain({ storage, now: NOW + 4000, send: async text => { if (sent.length === 2) throw new TypeError("Failed to fetch"); sent.push(text); } });
  assert.deepEqual(sent, ["Sold 200 kg of maize for 9000", "Spent 5000 on fertilizer"]); assert.deepEqual(outcome, { sent: 2, left: 1 });
  const again = await notes.drain({ storage, now: NOW + 5000, send: async text => { sent.push(text); } });
  assert.deepEqual(again, { sent: 1, left: 0 }); assert.equal(sent.at(-1), "It rained 20 mm today"); assert.equal(notes.pending({ storage, now: NOW + 6000 }), 0);
});

test("old notes are dropped rather than recorded days late, and the queue is bounded", async () => {
  const storage = memoryStorage();
  notes.add("Sold 200 kg of maize for 9000", { storage, now: NOW });
  const four = NOW + 4 * 24 * 60 * 60 * 1000;
  assert.equal(notes.pending({ storage, now: four }), 0);
  const sent = []; assert.deepEqual(await notes.drain({ storage, now: four, send: async text => { sent.push(text); } }), { sent: 0, left: 0 }); assert.deepEqual(sent, []);
  const full = memoryStorage();
  for (let i = 0; i < notes.MAX_NOTES; i += 1) assert.ok(notes.add(`Sold ${i + 1} kg of maize for 900`, { storage: full, now: NOW }));
  assert.equal(notes.add("Sold 1 kg of maize for 9", { storage: full, now: NOW }), 0);
});

test("damaged or unavailable storage never throws", async () => {
  const broken = { getItem: () => "{not json", setItem: () => { throw new Error("full"); } };
  assert.equal(notes.pending({ storage: broken }), 0); assert.equal(notes.add("Sold 2 kg of maize for 90", { storage: broken }), 0);
  assert.deepEqual(await notes.drain({ storage: broken, send: async () => {} }), { sent: 0, left: 0 });
});

test("the page loads the notes module, the offline shell caches it, and the client keeps a note only through it", () => {
  const root = path.resolve(__dirname, "..", "..", "public");
  assert.match(fs.readFileSync(path.join(root, "index.html"), "utf8"), /kyro-offline-notes\.js/);
  assert.match(fs.readFileSync(path.join(root, "sw.js"), "utf8"), /kyro-offline-notes\.js/);
  const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
  assert.match(app, /KyroOfflineNotes\?\.shouldKeep\(error, text\)/); assert.match(app, /replayKyroOfflineNotes/);
});
