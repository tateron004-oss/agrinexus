"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const crypto = require("node:crypto");
const { parse, isMediaCommand } = require("../../public/kyro-media-commands.js");
const { completeMediaExtendedPlan, completeMediaPlaybackPlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { createMediaControlExecutor, verifyMediaControlOutcome } = require("../../nexus/media/control-executor.js");
const { CANONICAL_PROVIDER_TOOLS } = require("../../nexus/tools/canonical-provider-definitions.js");

const play = (kind, query, extra = {}) => ({ type: "play", kind, query, handoff: false, ...extra });
const pick = (text, ...keys) => { const parsed = parse(text); return parsed && Object.fromEntries(keys.map(key => [key, parsed[key]])); };

test("English play commands: songs, radio stations, videos", () => {
  assert.equal(JSON.stringify(pick("play Stevie Wonder Sir Duke", "type", "kind", "query")), JSON.stringify({ type: "play", kind: "music", query: "Stevie Wonder Sir Duke" }));
  assert.equal(pick("Nexus, play thriller by michael jackson", "query").query, "thriller by michael jackson");
  assert.equal(pick("Can you please play Rihanna Diamonds", "query").query, "Rihanna Diamonds");
  assert.equal(pick("play some jazz music", "query").query, "jazz music");
  assert.equal(pick("play the song Jambo Bwana", "query").query, "Jambo Bwana");
  assert.equal(JSON.stringify(pick("play radio", "kind", "query")), JSON.stringify({ kind: "radio", query: "" }));
  assert.equal(pick("play radio citizen", "kind", "query").query, "citizen");
  assert.equal(JSON.stringify(pick("play Capital FM", "kind", "query")), JSON.stringify({ kind: "radio", query: "Capital FM" }));
  assert.equal(pick("tune in to Kiss FM", "kind").kind, "radio");
  assert.equal(JSON.stringify(pick("watch maize farming", "kind", "query")), JSON.stringify({ kind: "video", query: "maize farming" }));
  assert.equal(pick("watch Me at the zoo", "query").query, "Me at the zoo");
  assert.equal(JSON.stringify(pick("show me a video of drip irrigation", "kind", "query")), JSON.stringify({ kind: "video", query: "drip irrigation" }));
  assert.equal(pick("play a video about composting", "kind").kind, "video");
  assert.equal(pick("play music", "query").query, "", "'play music' names no song: the player picks the last choice or a local station");
  assert.equal(pick("play some music", "query").query, "");
});

test("Kiswahili play commands", () => {
  assert.equal(JSON.stringify(pick("cheza wimbo wa Diamond Platnumz", "kind", "query", "lang")), JSON.stringify({ kind: "music", query: "Diamond Platnumz", lang: "sw" }));
  assert.equal(pick("cheza Sauti Sol", "query").query, "Sauti Sol");
  assert.equal(JSON.stringify(pick("weka redio Citizen", "kind", "query", "lang")), JSON.stringify({ kind: "radio", query: "Citizen", lang: "sw" }));
  assert.equal(pick("weka redio", "kind").kind, "radio");
  assert.equal(JSON.stringify(pick("angalia video ya kilimo cha mahindi", "kind", "query", "lang")), JSON.stringify({ kind: "video", query: "kilimo cha mahindi", lang: "sw" }));
  assert.equal(pick("tafadhali cheza muziki", "query").query, "");
});

test("hand-off phrases: open YouTube and play, play on YouTube, fungua YouTube na cheza, watch on YouTube", () => {
  assert.equal(JSON.stringify(pick("open YouTube and play Burna Boy Last Last", "kind", "query", "handoff")), JSON.stringify({ kind: "music", query: "Burna Boy Last Last", handoff: true }));
  assert.equal(JSON.stringify(pick("play Last Last on YouTube", "query", "handoff")), JSON.stringify({ query: "Last Last", handoff: true }));
  assert.equal(JSON.stringify(pick("fungua YouTube na cheza Sauti Sol Melanin", "query", "handoff", "lang")), JSON.stringify({ query: "Sauti Sol Melanin", handoff: true, lang: "sw" }));
  assert.equal(JSON.stringify(pick("watch drip irrigation on YouTube", "kind", "query", "handoff")), JSON.stringify({ kind: "video", query: "drip irrigation", handoff: true }));
  assert.equal(pick("open youtube", "openOnly").openOnly, true);
});

test("controls, English and Kiswahili, and whether the sentence itself names music", () => {
  const control = text => { const parsed = parse(text); return parsed && parsed.type === "control" ? [parsed.control, parsed.explicit] : null; };
  assert.equal(JSON.stringify(control("pause")), JSON.stringify(["pause", false]));
  assert.equal(JSON.stringify(control("pause the music")), JSON.stringify(["pause", true]));
  assert.equal(JSON.stringify(control("resume music")), JSON.stringify(["resume", true]));
  assert.equal(JSON.stringify(control("stop the music")), JSON.stringify(["stop", true]));
  assert.equal(JSON.stringify(control("next song")), JSON.stringify(["next", true]));
  assert.equal(JSON.stringify(control("skip")), JSON.stringify(["next", false]));
  assert.equal(JSON.stringify(control("previous song")), JSON.stringify(["previous", true]));
  assert.equal(JSON.stringify(control("volume up")), JSON.stringify(["volume-up", true]));
  assert.equal(JSON.stringify(control("turn it down")), JSON.stringify(["volume-down", false]));
  assert.equal(JSON.stringify(control("mute")), JSON.stringify(["mute", false]));
  assert.equal(JSON.stringify(control("sitisha muziki")), JSON.stringify(["pause", true]));
  assert.equal(JSON.stringify(control("endelea")), JSON.stringify(["resume", false]));
  assert.equal(JSON.stringify(control("simamisha muziki")), JSON.stringify(["stop", true]));
  assert.equal(JSON.stringify(control("wimbo unaofuata")), JSON.stringify(["next", true]));
  assert.equal(JSON.stringify(control("ongeza sauti")), JSON.stringify(["volume-up", true]));
  assert.equal(JSON.stringify(control("punguza sauti")), JSON.stringify(["volume-down", true]));
  assert.equal(JSON.stringify(control("nyamazisha muziki")), JSON.stringify(["mute", true]));
  assert.equal(isMediaCommand("pause", { playerActive: false }), false, "a bare pause is not for the player when nothing plays");
  assert.equal(isMediaCommand("pause", { playerActive: true }), true);
  assert.equal(isMediaCommand("pause the music"), true);
});

test("preferences: audio only and where music plays", () => {
  assert.equal(JSON.stringify(pick("audio only", "type", "key", "value")), JSON.stringify({ type: "preference", key: "audioOnly", value: true }));
  assert.equal(pick("audio only off", "value").value, false);
  assert.equal(pick("sauti pekee", "value").value, true);
  assert.equal(JSON.stringify(pick("play music in youtube from now on", "key", "value")), JSON.stringify({ key: "playIn", value: "youtube" }));
});

test("sentences that only look like media commands are left alone", () => {
  for (const text of ["play it safe with the planting schedule", "play back my message", "play a game", "watch out", "watch over the goats", "stop", "make my resume", "weka kikumbusho kesho", "cheza mchezo", "show me videos of maize", "what is the weather", "remind me to play with the kids", "", "open the map"]) {
    assert.equal(parse(text), null, JSON.stringify(text));
  }
  assert.equal(parse("x".repeat(400)), null);
});

test("planner: the new vocabulary becomes media.play / media.control steps; plain songs and video galleries stay with their existing matchers", () => {
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "media.play" }, { toolId: "media.control" }] };
  const radio = completeMediaExtendedPlan("weka redio Citizen", catalog);
  assert.equal(radio.application, "music-media");
  assert.equal(radio.steps[0].toolId, "media.play");
  assert.equal(radio.steps[0].input.kind, "radio");
  assert.equal(radio.steps[0].input.requestedMedia, "Citizen");
  assert.equal(radio.steps[0].input.language, "sw");
  const anyRadio = completeMediaExtendedPlan("play radio", catalog);
  assert.equal(anyRadio.steps[0].input.requestedMedia, "radio");
  assert.equal(anyRadio.steps[0].input.allowEmpty, true);
  assert.equal(completeMediaExtendedPlan("watch drip irrigation", catalog).steps[0].input.kind, "video");
  const handoff = completeMediaExtendedPlan("open YouTube and play Last Last", catalog);
  assert.equal(handoff.steps[0].input.handoff, true);
  assert.equal(handoff.steps[0].input.playbackState, "queued");
  const control = completeMediaExtendedPlan("pause the music", catalog);
  assert.equal(control.steps[0].toolId, "media.control");
  assert.equal(control.steps[0].input.control, "pause");
  assert.equal(completeMediaExtendedPlan("pause", catalog), null, "only the phone knows whether anything is playing");
  assert.equal(completeMediaExtendedPlan("play Stevie Wonder Sir Duke", catalog), null, "a plain English song request keeps its existing matcher");
  assert.equal(completeMediaPlaybackPlan("play Stevie Wonder Sir Duke", catalog).steps[0].input.kind, "music");
  assert.equal(completeMediaExtendedPlan("show me videos of maize", catalog), null);
  assert.equal(completeMediaExtendedPlan("pause the music", { applications: catalog.applications, tools: [{ toolId: "media.play" }] }), null, "no media.control tool, no plan");
});

test("media.control is a registered tool, returns a client instruction, and never claims the music paused", async () => {
  assert.ok(CANONICAL_PROVIDER_TOOLS.some(tool => tool.toolId === "media.control"));
  assert.ok(defaultApplicationManifests().find(app => app.applicationId === "music-media").capabilities.includes("media.control"));
  const execute = createMediaControlExecutor();
  const result = await execute({ input: { control: "pause" } });
  assert.equal(result.ok, true);
  assert.equal(result.instruction.type, "media.control");
  assert.equal(result.instruction.control, "pause");
  assert.equal(result.playbackState, "instructed");
  assert.equal(verifyMediaControlOutcome({ result }).verified, true);
  const bad = await execute({ input: { control: "explode" } });
  assert.equal(bad.ok, false);
  assert.equal(verifyMediaControlOutcome({ result: bad }).verified, false);
  assert.equal(verifyMediaControlOutcome({ result: { ok: true, instruction: { type: "media.control", control: "nonsense" } } }).verified, false);
});

test("the realtime workspace action carries the control, kind, hand-off and language to the phone", () => {
  const source = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");
  const take = name => { const start = source.indexOf(`function ${name}(`); return source.slice(start, source.indexOf("\nasync function runNexusOpenAiNativeAgentCommand", start) > start && name === "nexusGenesisWorkspaceAction" ? source.indexOf("\nasync function runNexusOpenAiNativeAgentCommand", start) : source.indexOf("\nfunction ", start + 10)); };
  const sandbox = { crypto, KyroMediaCommands: require("../../public/kyro-media-commands.js") };
  vm.createContext(sandbox);
  vm.runInContext(`${take("musicAssistantIntent")}\n${take("nexusGenesisWorkspaceAction")}\nthis.run = nexusGenesisWorkspaceAction;`, sandbox);
  const general = [{ call: { name: "nexus_general_conversation" } }];
  const control = sandbox.run("pause the music", general);
  assert.equal(control.workspace, "media");
  assert.equal(control.payload.action, "control");
  assert.equal(control.payload.control, "pause");
  const radio = sandbox.run("weka redio Citizen", general);
  assert.equal(radio.payload.kind, "radio");
  assert.equal(radio.payload.query, "Citizen");
  assert.equal(radio.payload.language, "sw");
  const handoff = sandbox.run("open YouTube and play Last Last", general);
  assert.equal(handoff.payload.handoff, true);
  const song = sandbox.run("Play Stevie Wonder Sir Duke.", general);
  assert.equal(song.payload.action, "play");
  assert.match(song.payload.query, /Stevie Wonder Sir Duke/);
  assert.equal(sandbox.run("what is the weather", general), null);
});
