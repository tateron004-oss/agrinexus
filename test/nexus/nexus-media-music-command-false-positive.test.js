"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appJsPath = path.join(__dirname, "..", "..", "public", "app.js");
const source = fs.readFileSync(appJsPath, "utf8");

function extractFunction(name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in app.js`);
  if (source.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") {
      parenDepth -= 1;
      if (parenDepth === 0) break;
    }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0;
  let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") {
      depth -= 1;
      if (depth === 0) break;
    }
  }
  return source.slice(start, i + 1);
}

function loadMusicCommandCheck() {
  const context = {};
  vm.createContext(context);
  const intentsStart = source.indexOf("const NEXUS_MEDIA_MUSIC_INTENTS");
  const intentsEnd = source.indexOf("]);", intentsStart) + "]);".length;
  const intentsSource = source.slice(intentsStart, intentsEnd);
  vm.runInContext(`${intentsSource}\n${extractFunction("isNexusMediaMusicCommand")}\nisNexusMediaMusicCommand;`, context);
  return command => vm.runInContext(`isNexusMediaMusicCommand(${JSON.stringify(command)})`, context);
}

// Found live: providerMusicIntent/genericMusicIntent both re-listed "study"/"relaxing"/"workout"/
// "exercise"/"fitness"/"kenya"/"kenyan"/"nigerian"/"african" as bare, standalone alternatives --
// while NEXUS_MEDIA_MUSIC_INTENTS (knownMusicIntent) already correctly requires these only as
// compound phrases ("kenyan music", "workout music", etc). Ordinary, unrelated commands like "open my
// Kenya trip itinerary" or "resume my fitness plan" matched as a false-positive music intent, and
// several call sites treat a match here as "handled, stop processing" -- silently hijacking or
// suppressing whatever the user actually asked for.
test("ordinary commands mentioning a country, study, or fitness no longer misfire as a music command", () => {
  const isMusicCommand = loadMusicCommandCheck();
  for (const command of [
    "open my Kenya trip itinerary",
    "open my Nigerian visa application",
    "open my exercise reminder",
    "open the study group chat",
    "resume my fitness plan",
    "play my African market report"
  ]) {
    assert.equal(isMusicCommand(command), false, `must not misfire as a music command: ${command}`);
  }
});

test("genuine music requests, including the compound country/genre phrases, still work", () => {
  const isMusicCommand = loadMusicCommandCheck();
  for (const command of [
    "play some jazz",
    "play kenyan music",
    "play nigerian music",
    "play workout music",
    "play study music",
    "play gospel music",
    "play highlife"
  ]) {
    assert.equal(isMusicCommand(command), true, `expected a genuine music request to still match: ${command}`);
  }
});
