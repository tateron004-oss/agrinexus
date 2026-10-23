"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

// Found by the owner's own voice test: "louder" would not turn the music up. The music that plays is a YouTube card, and the card's controls knew pause, resume and stop only; the page then answered "I couldn't change the volume".
function card({ present = true } = {}) {
  const sent = [];
  let removed = false;
  const frame = { contentWindow: { postMessage: (message, origin) => sent.push({ ...JSON.parse(message), origin }) }, closest: () => ({ remove: () => { removed = true; } }) };
  const source = app.slice(app.indexOf("let kyroLiveMusicVolume = 100;"), app.indexOf("// \"close the weather card\" and the quiet-spell return"));
  const context = { document: { querySelector: selector => (present && selector === "[data-nexus-live-music-frame]" ? frame : null) }, JSON };
  vm.runInNewContext(`${source}\nthis.raw = kyroLiveMusicCardControl; this.level = () => kyroLiveMusicVolume;`, context);
  const control = name => { const result = context.raw(name); return result === null ? null : JSON.parse(JSON.stringify(result)); }; // (a plain copy: the page's objects come from another context)
  return { control, level: context.level, sent, removed: () => removed };
}

test("louder and quieter move the music card's volume in steps of twenty, say the level, and say so at either end", () => {
  const api = card();
  assert.equal(api.control("volume-up").say, "That is as loud as the music goes. Turn up your device volume for more.", "it starts at full volume");
  assert.deepEqual(api.control("volume-down"), { say: "Volume 80 percent." });
  assert.deepEqual(api.control("volume-down"), { say: "Volume 60 percent." });
  assert.deepEqual(api.control("volume-up"), { say: "Volume 80 percent." });
  assert.equal(api.level(), 80);
  const sets = api.sent.filter(m => m.func === "setVolume").map(m => m.args[0]);
  assert.deepEqual(sets, [100, 80, 60, 80]);
  assert.ok(api.sent.every(m => m.origin === "https://www.youtube-nocookie.com"));
  for (let i = 0; i < 6; i += 1) api.control("volume-down");
  assert.equal(api.level(), 0);
  assert.equal(api.control("volume-down").say, "That is as quiet as the music goes.");
});

test("mute, unmute, pause, resume and stop still work, and with no music card there is nothing to do", () => {
  const api = card();
  assert.deepEqual(api.control("mute"), { say: "Muted." });
  assert.equal(api.sent.at(-1).func, "mute");
  api.control("volume-down");
  assert.deepEqual(api.control("unmute"), { say: "Sound is back on." });
  assert.deepEqual(api.sent.slice(-2).map(m => m.func), ["unMute", "setVolume"]);
  assert.equal(api.control("pause"), null); assert.equal(api.sent.at(-1).func, "pauseVideo");
  assert.equal(api.control("resume"), null); assert.equal(api.sent.at(-1).func, "playVideo");
  // "stop the music" holds the place like pause: the song stays where it was, the card stays, and "play" carries on
  assert.deepEqual(api.control("stop"), { say: "Stopped. Say play and I will carry on from here." }); assert.equal(api.sent.at(-1).func, "pauseVideo"); assert.equal(api.removed(), false);
  assert.equal(api.control("resume"), null); assert.equal(api.sent.at(-1).func, "playVideo");
  // "turn off" and "close" take the card down
  assert.equal(api.control("close"), null); assert.equal(api.removed(), true); assert.equal(api.level(), 100, "a new song starts at full volume again");
  assert.equal(card({ present: false }).control("volume-up"), null);
});

test("a volume change on the music card is said and taken by both the spoken route and the instruction route, so the page does not answer 'nothing is playing'", () => {
  assert.match(app, /const cardDid = kyroLiveMusicCardControl\(parsed\.control\);[^]*?if \(cardDid\?\.say && !player\.isActive\?\.\(\)\) \{ setVoiceResponse\(cardDid\.say, true\); return true; \}/);
  assert.match(app, /const cardDid = kyroLiveMusicCardControl\(String\(control \|\| ""\)\);\s+if \(cardDid\?\.say && !player\.isActive\?\.\(\)\) \{ setVoiceResponse\(cardDid\.say, true\); return true; \}/);
});
