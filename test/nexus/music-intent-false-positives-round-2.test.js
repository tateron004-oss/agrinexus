"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found live (same bug shape as the two already-fixed tonight, browser-action-controller.js's
// musicRequest() and app.js's isNexusMediaMusicCommand()): a careful compound-phrase music classifier
// sitting next to a looser fallback that re-lists the same qualifier words (country names, "study",
// "fitness", "workout", "relaxing", etc.) as bare standalone alternatives -- letting ordinary,
// unrelated commands misfire into the music/media pipeline. Three more instances found and fixed here.

function extractFunction(source, name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name}`);
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0;
  let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return source.slice(start, i + 1);
}

const appSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function loadMusicAssistantIntent() {
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${extractFunction(appSource, "normalizeToolText")}\n${extractFunction(appSource, "musicAssistantIntent")}\nmusicAssistantIntent;`, context);
  return command => vm.runInContext(`musicAssistantIntent(${JSON.stringify(command)})`, context);
}

test("musicAssistantIntent: ordinary commands mentioning a country/training/calm no longer misfire", () => {
  const check = loadMusicAssistantIntent();
  for (const command of [
    "find nigerian visa requirements",
    "start congolese registration form",
    "open my training schedule",
    "search calm breathing technique"
  ]) {
    assert.equal(check(command), null, `must not misfire as a music request: ${command}`);
  }
});

test("musicAssistantIntent: genuine music requests still work, unaffected by the fix", () => {
  const check = loadMusicAssistantIntent();
  assert.ok(check("play some jazz music"), "genuine music request must still match");
  assert.ok(check("play luther vandross"), "an artist name must still match");
});

// nexusConversationFirstIntent is a large function with many external dependencies (userFirstName(),
// nexusResilientConversationIntent(), etc.) that make full extraction impractical -- instead this
// verifies the specific regex actually shipped in the file, the same one nexusConversationFirstIntent
// evaluates, extracted directly from its exact source line.
function extractConversationMusicRegex() {
  const marker = 'tool: "music",\n      suggestions: ["stop the music", "play relaxing music", "pause"]';
  const markerIndex = appSource.indexOf(marker);
  assert.ok(markerIndex > 0, "could not locate the music-tool suggestion block in nexusConversationFirstIntent");
  const before = appSource.lastIndexOf("if (/", markerIndex);
  assert.ok(before > 0, "could not locate the guarding regex before the music-tool block");
  const lineEnd = appSource.indexOf(".test(lower)) {", before);
  const regexSource = appSource.slice(before + "if (".length, lineEnd);
  // eslint-disable-next-line no-eval
  return eval(regexSource);
}

test("nexusConversationFirstIntent's music regex: ordinary commands mentioning a country/relaxing/90s no longer misfire", () => {
  const musicRegex = extractConversationMusicRegex();
  for (const command of [
    "play kenyan folklore story",
    "find congolese registration office",
    "start relaxing breathing session",
    "open my 90s savings goal"
  ]) {
    assert.equal(musicRegex.test(command.toLowerCase()), false, `must not misfire as a music request: ${command}`);
  }
});

test("nexusConversationFirstIntent's music regex: genuine music requests still work", () => {
  const musicRegex = extractConversationMusicRegex();
  assert.equal(musicRegex.test("play some gospel music"), true);
  assert.equal(musicRegex.test("play a soul playlist"), true);
});

const shellSource = fs.readFileSync(path.join(__dirname, "..", "..", "public", "nexus-voice-demo-shell.js"), "utf8");

function loadMediaHandoffCommand() {
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(`${extractFunction(shellSource, "normalizeCommand")}\n${extractFunction(shellSource, "isKenyaMusicCommand")}\n${extractFunction(shellSource, "isStopMusicCommand")}\n${extractFunction(shellSource, "isMediaProviderHandoffCommand")}\nisMediaProviderHandoffCommand;`, context);
  return command => vm.runInContext(`isMediaProviderHandoffCommand(${JSON.stringify(command)})`, context);
}

test("isMediaProviderHandoffCommand: ordinary commands (including an agriculture disease alert) no longer misfire", () => {
  const check = loadMediaHandoffCommand();
  for (const command of [
    "start my workout",
    "play nigerian jollof rice recipe",
    "open the study group chat",
    "start my relaxing breathing exercise",
    "play african swine fever alert"
  ]) {
    assert.equal(check(command), false, `must not misfire as a music handoff: ${command}`);
  }
});

test("isMediaProviderHandoffCommand: genuine music/provider requests still work, unaffected by the fix", () => {
  const check = loadMediaHandoffCommand();
  assert.equal(check("play some gospel music"), true);
  assert.equal(check("open this in spotify"), true);
  assert.equal(check("play music while i study"), true);
});
