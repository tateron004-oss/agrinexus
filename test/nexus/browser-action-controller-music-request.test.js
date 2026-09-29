"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "../../public/browser-action-controller.js"), "utf8");

// Found live: musicRequest()'s second regex alternative was a catch-all -- ANY "play"/"put on"/
// "listen to"/"start" command followed by 2-80 characters matched regardless of topic, unless it
// happened to contain one of a handful of blacklisted words. Real, plausible rural-user phrasings
// like "play the weather forecast", "put on my calendar for today", "play my reminders for tomorrow"
// and "play my job applications" all matched -- opening a real, autoplaying, full-viewport YouTube
// search modal (a genuine network call, not decorative) for a nonsense query, hijacking the screen
// on top of (or instead of) whatever the user actually asked for.
function loadController() {
  const windowObj = { addEventListener: () => {}, dispatchEvent: () => {}, CustomEvent: function CustomEvent() {} };
  const sandbox = { window: windowObj };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.window.NexusBrowserActionController;
}

test("commands about other topics that merely start with play/put on/listen to/start no longer misfire as a music request", () => {
  const controller = loadController();
  for (const command of [
    "play the weather forecast",
    "put on my calendar for today",
    "play my reminders for tomorrow",
    "play the market prices for maize",
    "play my job applications",
    "start my health checkup",
    "listen to my voicemail"
  ]) {
    assert.equal(controller.isMusicRequest(command), false, `must not misfire as a music request: ${command}`);
  }
});

test("genuine music requests still work, unaffected by the fix", () => {
  const controller = loadController();
  for (const command of [
    "play some jazz",
    "play despacito by luis fonsi",
    "put on gospel music",
    "listen to a playlist",
    "start my afrobeats album"
  ]) {
    assert.equal(controller.isMusicRequest(command), true, `expected a genuine music request to still match: ${command}`);
  }
});
