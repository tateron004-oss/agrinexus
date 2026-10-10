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
