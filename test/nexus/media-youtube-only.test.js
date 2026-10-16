"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createFakeWorld } = require("../helpers/media-fake-world.js");
const { resolveMedia } = require("../../server/media/resolver.js");
const { createContext } = require("../../server/media/util.js");
const { createMediaState } = require("../../server/media/state.js");
const { createTtlCache } = require("../../server/media/cache.js");

// Found on production with the real server: "Play some music" played a radio station ("WALM - Old Time Radio"). The owner uses YouTube ONLY for now, so with the default settings music, radio
// requests and videos are searched on YouTube and no other source (radio, Audius, Jamendo, Internet Archive, the 30-second preview) is ever asked.
delete process.env.KYRO_MEDIA_SOURCES;
const KEY = { YOUTUBE_API_KEY: "test-key-placeholder" };

function setup(env = KEY, worldOptions = {}) {
  const world = createFakeWorld(worldOptions);
  const state = createMediaState({ filePath: "", env });
  const ctx = createContext({ env, fetch: world.fetch, state, cache: createTtlCache() });
  return { world, ctx };
}
const hosts = world => [...new Set(world.calls.map(call => new URL(call.url).host))];

test("'play some music' with nothing named is a YouTube search for popular music, not a radio station", async () => {
  const { world, ctx } = setup();
  const result = await resolveMedia({ query: "", kind: "music", country: "Kenya" }, ctx);
  assert.equal(result.ok, true);
  assert.equal(result.candidates[0].provider, "youtube");
  assert.equal(result.candidates[0].delivery, "youtube");
  const search = world.calls.find(call => call.url.includes("/youtube/v3/search"));
  assert.match(decodeURIComponent(search.url), /q=popular[+ ]music/);
  assert.ok(!result.candidates.some(candidate => candidate.provider !== "youtube"), "only YouTube candidates");
  assert.ok(!result.note, "no 'a popular radio station is offered' note");
  assert.ok(!hosts(world).some(host => /radio-browser|audius|jamendo|archive\.org|itunes\.apple/.test(host)), `no other source is asked: ${hosts(world).join(", ")}`);
});

test("a radio station by name is searched on YouTube as '<name> live'", async () => {
  const { world, ctx } = setup();
  const result = await resolveMedia({ query: "Capital FM", kind: "radio", country: "KE" }, ctx);
  assert.equal(result.ok, true);
  assert.equal(result.candidates[0].provider, "youtube");
  assert.match(decodeURIComponent(world.calls.find(call => call.url.includes("/youtube/v3/search")).url), /q=Capital[+ ]FM[+ ]live/);
  assert.ok(!hosts(world).some(host => /radio-browser|audius|jamendo|archive\.org|itunes\.apple/.test(host)));
});

test("a named song goes to YouTube only, and no 30-second preview is added", async () => {
  const { world, ctx } = setup();
  const result = await resolveMedia({ query: "Burna Boy Last Last", kind: "music", country: "KE" }, ctx);
  assert.equal(result.ok, true);
  assert.ok(result.candidates.every(candidate => candidate.provider === "youtube" && candidate.isPreview !== true));
  assert.ok(!hosts(world).some(host => /itunes\.apple|audius|radio-browser/.test(host)));
});

test("without a YouTube key nothing else plays instead, and the reason says YouTube is not set up", async () => {
  const { world, ctx } = setup({});
  const result = await resolveMedia({ query: "Burna Boy Last Last", kind: "music", country: "KE" }, ctx);
  assert.equal(result.ok, false);
  assert.match(String(result.reason), /YouTube is not set up/i);
  assert.ok(!hosts(world).some(host => /itunes\.apple|audius|radio-browser|archive\.org/.test(host)));
});

test("KYRO_MEDIA_SOURCES turns the other sources back on", async () => {
  const { ctx } = setup({ ...KEY, KYRO_MEDIA_SOURCES: "all" });
  const result = await resolveMedia({ query: "", kind: "radio", country: "Kenya" }, ctx);
  assert.equal(result.ok, true);
  assert.equal(result.candidates[0].provider, "radio-browser");
});

// Found sweeping the applications: "Play the radio" played a random popular video, because with no station named it searched YouTube for "popular music".
test("'play the radio' with no station is a YouTube search for live radio in the person's country", async () => {
  const kenya = setup();
  const result = await resolveMedia({ query: "", kind: "radio", country: "Kenya" }, kenya.ctx);
  assert.equal(result.ok, true);
  assert.match(decodeURIComponent(kenya.world.calls.find(call => call.url.includes("/youtube/v3/search")).url), /q=Kenya[+ ]radio[+ ]live/);
  const anywhere = setup();
  await resolveMedia({ query: "", kind: "radio", country: "" }, anywhere.ctx);
  assert.match(decodeURIComponent(anywhere.world.calls.find(call => call.url.includes("/youtube/v3/search")).url), /q=live[+ ]radio/);
});

// Found by the live voice test, in a real Chrome: "play some music" and "play the radio" were answered "it would not start on this device", because a 24/7 live stream was the only thing offered and
// YouTube's embedded player refused it (error 151) although the API calls it embeddable. Ordinary videos now come first unless a live stream was asked for.
const LIVE_AND_ORDINARY = [
  { videoId: "liveStream01", title: "Pop Radio 24/7 Live - Top Hits 2026", channel: "Radio Co", embeddable: true, duration: "PT0S", live: true },
  { videoId: "liveStream02", title: "Hits Radio Live Stream", channel: "Hits", embeddable: true, duration: "PT0S", live: true },
  { videoId: "songVid00001", title: "Popular music hits mix", channel: "Music Co", embeddable: true, duration: "PT3M10S" },
  { videoId: "songVid00002", title: "Popular music best songs", channel: "Music Co", embeddable: true, duration: "PT4M" }
];
test("'play some music' offers ordinary videos before any live stream", async () => {
  const { ctx } = setup(KEY, { youtubeItems: LIVE_AND_ORDINARY, oembedFail: new Set() });
  const result = await resolveMedia({ query: "", kind: "music", country: "Kenya" }, ctx);
  assert.equal(result.ok, true);
  const ids = result.candidates.map(candidate => candidate.videoId);
  assert.ok(ids.slice(0, 2).every(id => id.startsWith("songVid")), `ordinary videos first: ${ids.join(", ")}`);
  assert.ok(ids.includes("liveStream01"), "a live stream stays as a last resort");
});
test("when a live stream is asked for, a few ordinary videos follow the live ones so something can still play", async () => {
  const { ctx } = setup(KEY, { youtubeItems: LIVE_AND_ORDINARY, oembedFail: new Set() });
  const result = await resolveMedia({ query: "", kind: "radio", country: "Kenya" }, ctx);
  assert.equal(result.ok, true);
  const ids = result.candidates.map(candidate => candidate.videoId);
  assert.ok(ids[0].startsWith("liveStream"), `live first when asked: ${ids.join(", ")}`);
  assert.ok(ids.some(id => id.startsWith("songVid")), "an ordinary video is there as a fallback");
});
