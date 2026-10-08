"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// The phone-side player (public/kyro-media-player.js) run in a vm with fake <audio> elements, a fake request() and a fake clock-free storage:
// the state machine, honest wording (English + Kiswahili), failure -> next candidate, blocked autoplay, controls and hand-off.
const publicDir = path.join(__dirname, "..", "..", "public");
function load(file, requireMap = {}) {
  const sandbox = { module: { exports: {} }, require: name => requireMap[path.basename(name)] || require(name), console, setTimeout, clearTimeout, Date, Promise, JSON, Math, Number, String, Array, Object, Set, Map, URL, Error, RegExp };
  sandbox.self = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(publicDir, file), "utf8"), sandbox, { filename: file });
  return sandbox.module.exports;
}
const Commands = load("kyro-media-commands.js");
const Player = load("kyro-media-player.js", { "kyro-media-commands.js": Commands });

class FakeElement {
  constructor(tag) { this.tagName = tag; this.listeners = {}; this.paused = true; this.currentTime = 0; this.readyState = 0; this.volume = 1; this.muted = false; this.dataset = {}; this.attrs = {}; this.src = ""; this.playCalls = 0; this.error = null; this.ended = false; }
  addEventListener(name, fn) { (this.listeners[name] ||= []).push(fn); }
  dispatch(name) { for (const fn of this.listeners[name] || []) fn(); }
  setAttribute(key, value) { this.attrs[key] = value; }
  removeAttribute(key) { delete this.attrs[key]; if (key === "src") this.src = ""; }
  load() {}
  remove() { this.removed = true; }
  play() { this.playCalls += 1; return this.playImpl ? this.playImpl(this) : Promise.resolve(); }
  pause() { this.paused = true; this.dispatch("pause"); }
  // A real audio element: after play() it fires `playing` and the clock moves.
  startPlayingFor(seconds = 5) { this.paused = false; this.readyState = 4; this.currentTime = seconds; this.dispatch("playing"); }
  fail(code = 4) { this.error = { code }; this.dispatch("error"); }
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
async function until(predicate, label, limit = 3000) {
  const started = Date.now();
  while (!predicate()) {
    if (Date.now() - started > limit) throw new Error(`timed out waiting for ${label}`);
    await wait(10);
  }
}

const station = (over = {}) => ({ id: "radio-browser:aaa", provider: "radio-browser", providerName: "radio-browser.info (public radio)", playbackClass: "audio", delivery: "stream", url: "https://s.example.test/a.mp3", title: "Citizen Radio", artist: "Kenya", durationSec: null, live: true, isPreview: false, attribution: "Citizen Radio via radio-browser.info", license: "Public radio stream", verified: true, ...over });
const track = (over = {}) => ({ id: "audius:1", provider: "audius", providerName: "Audius", playbackClass: "audio", delivery: "stream", url: "https://a.example.test/1/stream", title: "Last Last", artist: "Nairobi Beats", durationSec: 215, live: false, isPreview: false, attribution: "Last Last on Audius", license: "Artist upload", verified: true, ...over });

function makeWorld({ responses = [], language = "en", nativeHls = false, activation = false, youtube = null, storage = {} } = {}) {
  const world = { spoken: [], requests: [], elements: [], opened: [], store: { ...storage }, ui: [], mediaSession: { handlers: {} }, played: [] };
  const queue = [...responses];
  const controller = Player.createKyroMediaPlayer({
    request: async (url, options) => {
      world.requests.push({ url, body: options.body });
      if (url === "/api/media/played") { world.played.push(options.body); return { ok: true }; }
      const next = queue.length > 1 ? queue.shift() : queue[0];
      if (next instanceof Error) throw next;
      return next || { ok: false, candidates: [], tried: [], youtube: { configured: false } };
    },
    say: message => world.spoken.push(message),
    getLanguage: () => language,
    getCountry: () => "Kenya",
    storage: { getItem: key => (key in world.store ? world.store[key] : null), setItem: (key, value) => { world.store[key] = value; }, removeItem: key => { delete world.store[key]; } },
    createMedia: tag => { const el = new FakeElement(tag); world.elements.push(el); return el; },
    nativeHls,
    youtube,
    userActivationActive: () => activation,
    openUrl: url => { world.opened.push(url); return true; },
    mediaSession: world.mediaSession,
    MediaMetadata: function MediaMetadata(init) { Object.assign(this, init); },
    createUi: () => ({ stage: null, render: snapshot => world.ui.push(snapshot), hide() {} })
  });
  world.controller = controller;
  world.lastUi = () => world.ui[world.ui.length - 1];
  return world;
}
const okResponse = (...candidates) => ({ ok: true, candidates, tried: [], youtube: { configured: false } });
const emptyResponse = (configured = false) => ({ ok: false, candidates: [], tried: [], youtube: { configured }, reason: "Nothing playable" });

test("honest status: nothing says 'Playing' until the element really plays, then the station is announced LIVE with its source", async () => {
  const world = makeWorld({ responses: [okResponse(station())] });
  const pending = world.controller.play("", { kind: "radio" });
  await until(() => world.elements.length === 1, "an audio element");
  assert.equal(world.elements[0].src, "https://s.example.test/a.mp3");
  assert.equal(world.elements[0].dataset.nexusProviderAudio, "true");
  assert.ok(!world.spoken.some(line => /Playing/.test(line)), "no 'Playing' before the playing event");
  assert.notEqual(world.controller.getState().state, "playing");
  world.elements[0].startPlayingFor(5);
  const result = await pending;
  assert.equal(result.ok, true);
  assert.equal(result.playbackVerified, true);
  assert.equal(result.provider, "radio-browser");
  assert.equal(result.telemetry.schema, "nexus.media-playback-evidence.v1");
  assert.equal(result.telemetry.paused, false);
  assert.ok(result.telemetry.advancedSeconds >= 3);
  assert.equal(world.controller.getState().state, "playing");
  assert.match(world.spoken[0], /^Playing Citizen Radio live on radio-browser\.info \(public radio\)\. Or tell me a song\.$/);
  assert.equal(world.lastUi().live, true, "the bar shows LIVE");
  assert.equal(JSON.stringify(world.requests[0].body.excludeIds), "[]");
  assert.equal(world.requests[0].body.country, "Kenya");
  assert.equal(JSON.stringify(world.played[0]), JSON.stringify({ provider: "radio-browser", id: "aaa" }));
  assert.equal(world.mediaSession.metadata.title, "Citizen Radio");
  assert.equal(typeof world.mediaSession.handlers, "object");
});

test("a named song is announced with title, artist and provider; a preview is announced as a 30-second preview", async () => {
  const song = makeWorld({ responses: [okResponse(track())] });
  const pending = song.controller.play("Last Last", { kind: "music" });
  await until(() => song.elements.length === 1, "element");
  song.elements[0].startPlayingFor(4);
  await pending;
  assert.equal(song.spoken[0], "Playing Last Last by Nairobi Beats on Audius.");
  const preview = makeWorld({ responses: [okResponse(track({ provider: "apple-itunes-preview", providerName: "Apple", isPreview: true, title: "Sir Duke", artist: "Stevie Wonder", id: "p:1" }))] });
  const second = preview.controller.play("Sir Duke", { kind: "music" });
  await until(() => preview.elements.length === 1, "element");
  preview.elements[0].startPlayingFor(4);
  const result = await second;
  assert.match(preview.spoken[0], /^Playing a 30-second preview of Sir Duke by Stevie Wonder\./);
  assert.equal(result.playbackClass, "preview");
  assert.equal(preview.lastUi().isPreview, true);
});

test("autoplay blocked: big Play state, 'Tap play to start', and only the tap makes it say Playing", async () => {
  const world = makeWorld({ responses: [okResponse(track())] });
  // Every element created from now on refuses to autoplay, like a phone with no recent tap.
  const create = world.elements;
  const controller = Player.createKyroMediaPlayer({
    request: async () => okResponse(track()), say: message => world.spoken.push(message), getLanguage: () => "en", getCountry: () => "Kenya",
    storage: null, nativeHls: false,
    createMedia: tag => { const el = new FakeElement(tag); el.playImpl = () => Promise.reject(Object.assign(new Error("blocked"), { name: "NotAllowedError" })); create.push(el); return el; },
    createUi: () => ({ stage: null, render: snapshot => world.ui.push(snapshot), hide() {} })
  });
  const result = await controller.play("Last Last", { kind: "music" });
  assert.equal(result.ok, false);
  assert.equal(result.blocked, true);
  assert.equal(controller.getState().state, "blocked");
  assert.equal(world.spoken[0], "Tap play to start.");
  assert.ok(!world.spoken.some(line => /Playing/.test(line)));
  // The person taps the big Play button: the element now plays.
  create[0].playImpl = null;
  controller.resume();
  create[0].startPlayingFor(2);
  await until(() => controller.getState().state === "playing", "playing after the tap");
  assert.match(world.spoken[world.spoken.length - 1], /^Playing Last Last by Nairobi Beats on Audius\.$/);
});

test("a candidate that fails is skipped with an honest message and the next one plays", async () => {
  const world = makeWorld({ responses: [okResponse(station({ id: "radio-browser:bad", url: "https://s.example.test/bad.mp3" }), station({ id: "radio-browser:good", title: "Capital FM", url: "https://s.example.test/good.mp3" }))] });
  const pending = world.controller.play("", { kind: "radio" });
  await until(() => world.elements.length === 1, "first element");
  world.elements[0].fail(4);
  await until(() => world.elements.length === 2, "second element");
  assert.equal(world.spoken[0], "That stream is not available, trying another.");
  assert.ok(world.elements[0].removed, "the failed element is removed");
  world.elements[1].startPlayingFor(5);
  const result = await pending;
  assert.equal(result.title, "Capital FM");
  assert.match(world.spoken[1], /^Playing Capital FM live/);
});

test("when every candidate fails the person is told plainly, including that YouTube is not set up; failed ids are excluded from the retry", async () => {
  const world = makeWorld({ responses: [okResponse(station({ id: "radio-browser:one" })), emptyResponse(false)] });
  const pending = world.controller.play("Jambo", { kind: "music" });
  await until(() => world.elements.length === 1, "element");
  world.elements[0].fail(4);
  const result = await pending;
  assert.equal(result.ok, false);
  assert.equal(result.exhausted, true);
  assert.match(result.message, /I could not find anything to play for Jambo\./);
  assert.match(result.message, /YouTube is not set up on this server\./);
  assert.equal(JSON.stringify(world.requests[1].body.excludeIds), JSON.stringify(["radio-browser:one"]));
  assert.equal(world.controller.getState().state, "failed");
});

test("the music service being unreachable is reported as such and flagged so the caller can fall back to the older path", async () => {
  const world = makeWorld({ responses: [new Error("Request failed")] });
  const result = await world.controller.play("x", { kind: "music" });
  assert.equal(result.resolverUnavailable, true);
  assert.match(world.controller.getState().status, /could not reach the music service/);
});

test("HLS-only streams are skipped on browsers that cannot play them and used where they can", async () => {
  const hls = station({ id: "radio-browser:hls", hls: true, title: "HLS Radio", url: "https://s.example.test/live.m3u8" });
  const plain = station({ id: "radio-browser:plain", title: "Plain Radio" });
  const without = makeWorld({ responses: [okResponse(hls, plain)], nativeHls: false });
  const first = without.controller.play("", { kind: "radio" });
  await until(() => without.elements.length === 1, "element");
  assert.equal(without.elements[0].src, "https://s.example.test/a.mp3", "the HLS candidate was never loaded");
  without.elements[0].startPlayingFor(4);
  assert.equal((await first).title, "Plain Radio");
  const withHls = makeWorld({ responses: [okResponse(hls, plain)], nativeHls: true });
  const second = withHls.controller.play("", { kind: "radio" });
  await until(() => withHls.elements.length === 1, "element");
  assert.match(withHls.elements[0].src, /live\.m3u8$/);
  withHls.elements[0].startPlayingFor(4);
  assert.equal((await second).title, "HLS Radio");
});

test("controls: pause, resume, volume, mute and stop act on the playing element and say so; with nothing playing they say so", async () => {
  const world = makeWorld({ responses: [okResponse(track())] });
  const pending = world.controller.play("Last Last", { kind: "music" });
  await until(() => world.elements.length === 1, "element");
  world.elements[0].startPlayingFor(4);
  await pending;
  const element = world.elements[0];
  world.controller.control("pause");
  assert.equal(element.paused, true);
  assert.equal(world.controller.getState().state, "paused");
  assert.equal(world.spoken[world.spoken.length - 1], "Paused.");
  world.controller.control("resume");
  assert.equal(element.playCalls >= 2, true);
  element.paused = false;
  element.dispatch("play");
  assert.equal(world.controller.getState().state, "playing");
  const before = element.volume;
  world.controller.control("volume-down");
  assert.ok(element.volume < before);
  assert.match(world.spoken[world.spoken.length - 1], /^Volume \d+ percent\.$/);
  world.controller.control("volume-up");
  world.controller.control("mute");
  assert.equal(element.muted, true);
  world.controller.control("unmute");
  assert.equal(element.muted, false);
  world.controller.control("stop");
  assert.equal(world.controller.getState().state, "idle");
  assert.equal(world.spoken[world.spoken.length - 1], "Stopped.");
  assert.equal(world.controller.control("pause").handled, false, "after stop there is nothing to pause");
});

test("'next' asks for another one and excludes what was already tried; 'previous' goes back", async () => {
  const world = makeWorld({ responses: [okResponse(station({ id: "radio-browser:a", title: "Station A" })), okResponse(station({ id: "radio-browser:b", title: "Station B" }))] });
  const first = world.controller.play("", { kind: "radio" });
  await until(() => world.elements.length === 1, "first");
  world.elements[0].startPlayingFor(4);
  await first;
  world.controller.control("next");
  await until(() => world.elements.length === 2, "second");
  world.elements[1].startPlayingFor(4);
  await until(() => world.controller.getState().title === "Station B" && world.controller.getState().state === "playing", "station B playing");
  assert.equal(JSON.stringify(world.requests.filter(request => request.url === "/api/media/resolve")[1].body.excludeIds), JSON.stringify(["radio-browser:a"]));
  world.controller.control("previous");
  await until(() => world.elements.length === 3, "previous element");
  world.elements[2].startPlayingFor(4);
  await until(() => world.controller.getState().title === "Station A", "back on station A");
});

test("a live stream that stops after it started moves on to another with an honest message; a finished song just says it finished", async () => {
  const world = makeWorld({ responses: [okResponse(station({ id: "radio-browser:a" })), okResponse(station({ id: "radio-browser:b", title: "Station B" }))] });
  const first = world.controller.play("", { kind: "radio" });
  await until(() => world.elements.length === 1, "first");
  world.elements[0].startPlayingFor(4);
  await first;
  world.elements[0].fail(2);
  await until(() => world.elements.length === 2, "replacement");
  assert.ok(world.spoken.includes("The stream stopped. Trying another."));
  world.elements[1].startPlayingFor(4);
  await until(() => world.controller.getState().title === "Station B", "replacement playing");

  const song = makeWorld({ responses: [okResponse(track())] });
  const pending = song.controller.play("Last Last", { kind: "music" });
  await until(() => song.elements.length === 1, "song element");
  song.elements[0].startPlayingFor(4);
  await pending;
  song.elements[0].ended = true;
  song.elements[0].dispatch("ended");
  assert.equal(song.controller.getState().state, "ended");
  assert.equal(song.controller.getState().status, "That one has finished.");
});

test("YouTube hand-off: queued, never 'playing'; stops the in-app player first; opens only inside a user gesture; ads note once", async () => {
  const world = makeWorld({ responses: [okResponse(station()), { ok: true, mode: "handoff", handoff: { kind: "video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", videoId: "dQw4w9WgXcQ", title: "Last Last", artist: "Burna Boy" }, candidates: [], tried: [], youtube: { configured: true } }, { ok: true, mode: "handoff", handoff: { kind: "search", url: "https://www.youtube.com/results?search_query=x", title: "x" }, candidates: [], tried: [], youtube: { configured: false } }], activation: false });
  const radio = world.controller.play("", { kind: "radio" });
  await until(() => world.elements.length === 1, "radio element");
  world.elements[0].startPlayingFor(4);
  await radio;
  const result = await world.controller.play("Last Last", { kind: "music", handoff: true });
  assert.equal(result.handoff, true);
  assert.equal(result.queued, true);
  assert.equal(result.playbackVerified, false);
  assert.equal(result.opened, false, "no automatic open without a tap");
  assert.ok(world.elements[0].removed, "the in-app stream was stopped before handing off");
  assert.equal(world.controller.getState().state, "queued");
  assert.equal(world.controller.getState().handoff.url, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const line = world.spoken[world.spoken.length - 1];
  assert.match(line, /^I've queued Last Last on YouTube\. Tap Open to play it\. YouTube may show ads unless you have YouTube Premium\.$/);
  assert.ok(!/Playing/.test(line));
  assert.equal(world.requests.filter(request => request.url === "/api/media/resolve")[1].body.handoff, true);
  const again = await world.controller.play("x", { kind: "music", handoff: true });
  assert.equal(again.kind, "search");
  assert.ok(!/ads/.test(world.spoken[world.spoken.length - 1]), "the ads note is mentioned once");
  assert.match(world.spoken[world.spoken.length - 1], /^I've opened a YouTube search for x\./);

  const gesture = makeWorld({ responses: [{ ok: true, mode: "handoff", handoff: { kind: "video", url: "https://www.youtube.com/watch?v=abc123xyz", title: "T" }, candidates: [], tried: [], youtube: { configured: true } }], activation: true });
  const opened = await gesture.controller.play("T", { kind: "music", handoff: true });
  assert.equal(opened.opened, true);
  assert.deepEqual(gesture.opened, ["https://www.youtube.com/watch?v=abc123xyz"]);
});

test("Kiswahili: commands are understood, replies come back in Kiswahili", async () => {
  const world = makeWorld({ responses: [okResponse(track({ title: "Melanin", artist: "Sauti Sol" }))] });
  const handled = world.controller.handleCommand("cheza Sauti Sol Melanin");
  await until(() => world.elements.length === 1, "element");
  world.elements[0].startPlayingFor(4);
  assert.equal(await handled, true);
  assert.equal(world.requests[0].body.language, "sw");
  assert.equal(world.requests[0].body.query, "Sauti Sol Melanin");
  assert.equal(world.spoken[0], "Ninacheza Melanin ya Sauti Sol kupitia Audius.");
  assert.equal(await world.controller.handleCommand("sitisha"), true);
  assert.equal(world.spoken[world.spoken.length - 1], "Imesitishwa.");
  assert.equal(await world.controller.handleCommand("endelea"), true);
  assert.equal(await world.controller.handleCommand("ongeza sauti"), true);
  assert.match(world.spoken[world.spoken.length - 1], /^Sauti ni asilimia \d+\.$/);
  assert.equal(await world.controller.handleCommand("simamisha muziki"), true);
  assert.equal(world.spoken[world.spoken.length - 1], "Imesimamishwa.");
  assert.equal(await world.controller.handleCommand("sitisha muziki"), true);
  assert.equal(world.spoken[world.spoken.length - 1], "Hakuna kinachochezwa sasa hivi.");
  assert.equal(await world.controller.handleCommand("sitisha"), false, "a bare 'sitisha' with nothing playing is left to the rest of Kyro");
});

test("English controls while idle: a bare 'pause' is left alone, 'pause the music' is answered", async () => {
  const world = makeWorld({ responses: [okResponse(track())] });
  assert.equal(await world.controller.handleCommand("pause"), false);
  assert.equal(await world.controller.handleCommand("pause the music"), true);
  assert.equal(world.spoken[world.spoken.length - 1], "Nothing is playing right now.");
  assert.equal(await world.controller.handleCommand("make my resume"), false);
  assert.equal(await world.controller.handleCommand("what is the weather"), false);
});

test("a bare 'pause' while music plays pauses it (and is handled, so Kyro's interruption handling is not needed)", async () => {
  const world = makeWorld({ responses: [okResponse(track())] });
  const handled = world.controller.handleCommand("play Last Last");
  await until(() => world.elements.length === 1, "element");
  world.elements[0].startPlayingFor(4);
  await handled;
  assert.equal(await world.controller.handleCommand("pause"), true);
  assert.equal(world.elements[0].paused, true);
  assert.equal(await world.controller.handleCommand("resume"), true);
  assert.equal(await world.controller.handleCommand("louder"), true);
});

test("'audio only' is a per-device preference that is sent with the next request", async () => {
  const world = makeWorld({ responses: [okResponse(track())] });
  assert.equal(await world.controller.handleCommand("audio only"), true);
  assert.equal(world.store["kyro.media.audioOnly"], "1");
  assert.equal(world.spoken[0], "Audio only is on. I will prefer radio and audio.");
  const pending = world.controller.play("Last Last", { kind: "music" });
  await until(() => world.elements.length === 1, "element");
  world.elements[0].startPlayingFor(4);
  await pending;
  assert.equal(world.requests.find(request => request.url === "/api/media/resolve").body.audioOnly, true);
});

test("'play music' with no song: the last choice if remembered on this device, otherwise a local radio station", async () => {
  const fresh = makeWorld({ responses: [okResponse(station())] });
  const first = fresh.controller.play("", { kind: "music" });
  await until(() => fresh.elements.length === 1, "element");
  fresh.elements[0].startPlayingFor(4);
  await first;
  assert.equal(fresh.requests[0].body.kind, "radio");
  assert.match(fresh.spoken[0], /Or tell me a song\.$/);
  const remembered = makeWorld({ responses: [okResponse(track())], storage: { "kyro.media.last": JSON.stringify({ query: "Last Last", kind: "music", title: "Last Last" }) } });
  const second = remembered.controller.play("", { kind: "music" });
  await until(() => remembered.elements.length === 1, "element");
  remembered.elements[0].startPlayingFor(4);
  await second;
  assert.equal(remembered.requests[0].body.query, "Last Last");
  assert.equal(remembered.spoken[0], "Playing your last choice, Last Last.");
  remembered.controller.forgetLast();
  assert.equal(remembered.store["kyro.media.last"], undefined);
});

test("a newer request cancels an older one that is still loading (no stale 'Playing')", async () => {
  const world = makeWorld({ responses: [okResponse(track({ id: "audius:old", title: "Old Song" })), okResponse(track({ id: "audius:new", title: "New Song" }))] });
  const older = world.controller.play("old", { kind: "music" });
  await until(() => world.elements.length === 1, "first element");
  const newer = world.controller.play("new", { kind: "music" });
  await until(() => world.elements.length === 2, "second element");
  world.elements[1].startPlayingFor(4);
  const [oldResult, newResult] = await Promise.all([older, newer]);
  assert.equal(oldResult.cancelled, true);
  assert.equal(newResult.ok, true);
  assert.ok(!world.spoken.some(line => /Old Song/.test(line)));
});

test("YouTube candidates play only through the official player adapter and count as playing only when the adapter says state 1", async () => {
  const calls = [];
  const youtube = {
    start: async (candidate) => { calls.push(["start", candidate.videoId]); return { ok: true, telemetry: { playerState: 1 } }; },
    command: (func, args) => calls.push([func, args]), close: () => calls.push(["close"])
  };
  const world = makeWorld({ youtube, responses: [okResponse({ id: "youtube:dQw4w9WgXcQ", provider: "youtube", providerName: "YouTube", playbackClass: "video", delivery: "youtube", videoId: "dQw4w9WgXcQ", title: "Last Last", artist: "Burna Boy", live: false, isPreview: false, attribution: "Last Last on YouTube", license: "YouTube", verified: true })] });
  const result = await world.controller.play("Last Last", { kind: "music" });
  assert.equal(result.ok, true);
  assert.equal(result.provider, "youtube");
  assert.equal(result.telemetry.playerState, 1);
  assert.equal(world.elements.length, 0, "no <audio> element for a YouTube video");
  world.controller.control("pause");
  world.controller.control("volume-down");
  assert.equal(JSON.stringify(calls.slice(0, 4)), JSON.stringify([["start", "dQw4w9WgXcQ"], ["pauseVideo", null], ["unMute", null], ["setVolume", [65]]]));
  const failing = makeWorld({ youtube: { start: async () => ({ ok: false, reason: "player-error-150" }), command() {}, close() {} }, responses: [okResponse({ id: "youtube:x", provider: "youtube", providerName: "YouTube", playbackClass: "video", delivery: "youtube", videoId: "abcdefghijk", title: "T", artist: "", live: false, verified: true, attribution: "", license: "" }), emptyResponse(true)] });
  const none = await failing.controller.play("T", { kind: "music" });
  assert.equal(none.ok, false);
  assert.equal(failing.spoken[0], "That stream is not available, trying another.");
});

test("ducking lowers the volume while Kyro speaks and restores it afterwards", async () => {
  const world = makeWorld({ responses: [okResponse(track())] });
  const pending = world.controller.play("Last Last", { kind: "music" });
  await until(() => world.elements.length === 1, "element");
  world.elements[0].startPlayingFor(4);
  await pending;
  const level = world.elements[0].volume;
  assert.equal(world.controller.duck(), true);
  assert.ok(world.elements[0].volume < level / 2);
  assert.equal(world.controller.unduck(), true);
  assert.equal(world.elements[0].volume, level);
});

test("all wording exists in both languages and every Kiswahili string is non-empty", () => {
  const { en, sw } = Player.STRINGS;
  assert.deepEqual(Object.keys(en).sort(), Object.keys(sw).sort());
  for (const [key, value] of Object.entries(sw)) assert.ok(value && value.length > 1, key);
});
