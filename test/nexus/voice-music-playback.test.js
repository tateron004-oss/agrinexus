"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

function loadMusicAssistantIntent() {
  const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf("function musicAssistantIntent(");
  const end = source.indexOf("\nfunction ", start + 10);
  assert.ok(start > 0 && end > start, "could not locate musicAssistantIntent in server.js");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(source.slice(start, end) + "\nthis.run = musicAssistantIntent;", sandbox);
  return sandbox.run;
}

test("a plain 'Play <Artist> <Title>' request with no genre keyword or 'by' connector is recognized as a music request", () => {
  // Confirmed live in production: this exact phrase reached
  // nexus_general_conversation and the model gave a confused clarifying
  // reply instead of playing anything, because neither branch of this
  // function's second check matched -- no genre keyword, no "by" connector.
  const musicAssistantIntent = loadMusicAssistantIntent();
  const result = musicAssistantIntent("Play Stevie Wonder Sir Duke.");
  assert.notEqual(result, null);
  assert.match(result.query, /Stevie Wonder Sir Duke/);
});

test("ordinary non-music idioms starting with 'play' are not misclassified as music requests", () => {
  const musicAssistantIntent = loadMusicAssistantIntent();
  assert.equal(musicAssistantIntent("Play it safe with the maize planting schedule."), null);
  assert.equal(musicAssistantIntent("Play defense against pests this season."), null);
});

test("genre-keyword and 'by' phrasing still work, unaffected by the added capitalized-title check", () => {
  const musicAssistantIntent = loadMusicAssistantIntent();
  assert.notEqual(musicAssistantIntent("Play some jazz music"), null);
  assert.notEqual(musicAssistantIntent("play thriller by michael jackson"), null);
});

test("the active OpenAI-native system prompt explicitly instructs the model to call a tool for music/play requests", () => {
  // Confirmed live in production: every other real capability has an
  // explicit "you must call X" line in this prompt, but music had none at
  // all -- the model's tool choice for a plain "Play <Artist> <Title>"
  // request was observably inconsistent across otherwise-identical calls,
  // sometimes landing on nexus_communications instead of
  // nexus_general_conversation, with no music-specific instruction anywhere
  // to correct it.
  const source = require("node:fs").readFileSync(require("node:path").join(__dirname, "../../server.js"), "utf8");
  const start = source.indexOf("function nexusOpenAiNativeSystemPrompt(");
  const end = source.indexOf("\nfunction ", start + 10);
  const prompt = source.slice(start, end);
  assert.match(prompt, /play, pause, resume, or stop music/i);
  assert.match(prompt, /you must call nexus_general_conversation/);
  assert.match(prompt, /never a communications request/i);
});

function loadDispatchGenesisWorkspaceAction({ playbackImpl, capabilityOpened = true } = {}) {
  const source = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const start = source.indexOf("function dispatchGenesisWorkspaceAction(");
  const end = source.indexOf("\nfunction ", start + 10);
  assert.ok(start > 0 && end > start, "could not locate dispatchGenesisWorkspaceAction in app.js");
  const calls = { playback: [], debugLogs: [] };
  const sandbox = {
    document: {
      body: { classList: { contains: () => false, add() {}, remove() {} }, dataset: {} },
      querySelector: () => null
    },
    canOpenSection: () => true,
    experienceMode: "user",
    setExperienceMode() {},
    goSection() {},
    nexusGenesisVoiceDebugLog: (event, payload) => calls.debugLogs.push({ event, payload }),
    playNexusProviderNeutralMusic: (query) => { calls.playback.push(query); return playbackImpl ? playbackImpl(query) : Promise.resolve({ ok: true }); },
    openGenesisRealtimeMapWorkspace: () => true,
    openNexusCapability: () => capabilityOpened,
    escapeHtml: value => value,
    translateText: value => value
  };
  vm.createContext(sandbox);
  vm.runInContext(source.slice(start, end) + "\nthis.run = dispatchGenesisWorkspaceAction;", sandbox);
  return { run: sandbox.run, calls };
}

test("a media genesis action plays real audio directly instead of routing through the decorative capability panel", async () => {
  // Confirmed live: openNexusCapability("media", ...) never reaches real
  // playback -- "media" isn't a registered NEXUS_CAPABILITIES key, and even
  // when alias-matching resolves something, the resulting workflow panel
  // doesn't call playNexusProviderNeutralMusic at all.
  const { run, calls } = loadDispatchGenesisWorkspaceAction();
  const action = { type: "genesis.workspace.open", workspace: "media", requestId: "req-1",
    payload: { query: "Stevie Wonder Sir Duke", action: "play" } };
  const opened = run(action, { response: "Playing that for you." });
  assert.equal(opened, true);
  assert.equal(calls.playback.length, 1);
  assert.equal(calls.playback[0], "Stevie Wonder Sir Duke");
});

test("a failed media playback attempt is logged, not thrown, so the dispatcher call itself still returns cleanly", async () => {
  const { run, calls } = loadDispatchGenesisWorkspaceAction({ playbackImpl: () => Promise.reject(new Error("All authoritative music providers failed.")) });
  const action = { type: "genesis.workspace.open", workspace: "media", requestId: "req-2", payload: { query: "an obscure track" } };
  const opened = run(action, {});
  assert.equal(opened, true);
  await new Promise(resolve => setTimeout(resolve, 10));
  assert.equal(calls.debugLogs.some(entry => entry.event === "genesis-media-playback-failed"), true);
});
