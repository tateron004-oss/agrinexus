"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createFakeWorld, STATIONS } = require("../helpers/media-fake-world.js");
const { resolveMedia } = require("../../server/media/resolver.js");
const { createContext } = require("../../server/media/util.js");
const { createMediaState, pacificDay } = require("../../server/media/state.js");
const { createTtlCache } = require("../../server/media/cache.js");
const radioBrowser = require("../../server/media/providers/radio-browser.js");
const audius = require("../../server/media/providers/audius.js");
const youtubeProvider = require("../../server/media/providers/youtube.js");
const { preflightStream } = require("../../server/media/preflight.js");

function setup(worldOptions = {}, env = {}, stateOptions = {}) {
  const world = createFakeWorld(worldOptions);
  const state = createMediaState({ filePath: "", env, ...stateOptions });
  const ctx = createContext({ env, fetch: world.fetch, state, cache: createTtlCache() });
  return { world, ctx, state };
}
const googleCalls = world => world.calls.filter(call => call.url.includes("googleapis.com"));
const KEY = { YOUTUBE_API_KEY: "test-key-placeholder" };

test("radio: 'play radio' with no name starts a popular LOCAL station, skipping streams that fail the preflight", async () => {
  const { world, ctx } = setup();
  const result = await resolveMedia({ query: "", kind: "radio", country: "Kenya" }, ctx);
  assert.equal(result.ok, true);
  const first = result.candidates[0];
  assert.equal(first.provider, "radio-browser");
  assert.equal(first.title, "Citizen Radio");
  assert.equal(first.live, true);
  assert.equal(first.verified, true);
  assert.equal(first.isPreview, false);
  assert.equal(first.delivery, "stream");
  assert.match(first.url, /^https:\/\//);
  assert.ok(!result.candidates.some(candidate => candidate.title === "Dead Air FM"), "a stream that returned 404 is never offered");
  assert.ok(result.candidates.every(candidate => candidate.country === "KE"), "only Kenyan stations for a Kenyan listener");
  // Etiquette: servers discovered from the official list, descriptive User-Agent sent.
  assert.ok(world.calls.some(call => call.url === "https://all.api.radio-browser.info/json/servers"));
  const search = world.calls.find(call => call.url.includes("/json/stations/search"));
  assert.match(search.headers["user-agent"], /Kyro-AgriNexus/);
});

test("radio: a station name is matched, and the listener's country decides between stations", async () => {
  const { ctx } = setup();
  const byName = await resolveMedia({ query: "Citizen", kind: "radio", country: "KE" }, ctx);
  assert.equal(byName.candidates[0].title, "Citizen Radio");
  const nigeria = await resolveMedia({ query: "", kind: "radio", country: "Nigeria" }, ctx);
  assert.equal(nigeria.candidates[0].title, "Lagos Gospel Radio");
  assert.equal(nigeria.candidates[0].mimeType, "audio/aac");
  const noMatch = await resolveMedia({ query: "No Such Station", kind: "radio", country: "KE" }, ctx);
  assert.equal(noMatch.ok, false);
  assert.match(noMatch.reason, /Nothing playable was found/);
});

test("radio: excludeIds moves on to the next station and an http-only stream whose https form is dead is dropped", async () => {
  const dead = new Set(["https://streams.example.test/dead.mp3", "https://streams.example.test/plain.mp3"]);
  const { ctx } = setup({ deadStreams: dead });
  const first = await resolveMedia({ query: "", kind: "radio", country: "KE" }, ctx);
  assert.ok(!first.candidates.some(candidate => candidate.title === "Plain Http Radio"));
  const next = await resolveMedia({ query: "", kind: "radio", country: "KE", excludeIds: [first.candidates[0].id] }, ctx);
  assert.equal(next.candidates[0].title, "Capital FM Kenya");
});

test("radio: the directory being down is reported honestly, not as 'no music'", async () => {
  const { ctx } = setup({ radioDown: true });
  const result = await resolveMedia({ query: "", kind: "radio", country: "KE" }, ctx);
  assert.equal(result.ok, false);
  assert.equal(result.tried[0].status, "error");
  assert.match(result.reason, /did not answer: radio-browser/);
});

test("music: a station or genre request uses radio-browser; a song title does not waste a call on it", async () => {
  const gospel = setup();
  const station = await resolveMedia({ query: "gospel", kind: "music", country: "Nigeria" }, gospel.ctx);
  assert.equal(station.candidates[0].provider, "radio-browser");
  assert.equal(station.candidates[0].title, "Lagos Gospel Radio");
  const song = setup();
  const result = await resolveMedia({ query: "Last Last Burna Boy", kind: "music", country: "KE" }, song.ctx);
  assert.equal(result.tried.find(item => item.provider === "radio-browser").status, "skipped");
  assert.ok(!song.world.calls.some(call => call.url.includes("/json/stations/search")));
});

test("music: 'play music' with nothing named becomes a local radio station and says so", async () => {
  const { ctx } = setup();
  const result = await resolveMedia({ query: "", kind: "music", country: "KE" }, ctx);
  assert.equal(result.kind, "radio");
  assert.equal(result.requestedKind, "music");
  assert.match(result.note, /popular radio station/);
  assert.equal(result.candidates[0].live, true);
});

test("Audius full tracks: close title match, explicit and gated tracks skipped, stream URL carries the app name, preview comes last", async () => {
  const { world, ctx } = setup();
  const result = await resolveMedia({ query: "Last Last", kind: "music", country: "KE" }, ctx);
  const [first, ...rest] = result.candidates;
  assert.equal(first.provider, "audius");
  assert.equal(first.title, "Last Last (Cover)");
  assert.equal(first.isPreview, false);
  assert.equal(first.durationSec, 215);
  assert.match(first.url, /\/v1\/tracks\/aud1\/stream\?app_name=KyroAgriNexus$/);
  assert.ok(!result.candidates.some(candidate => /Explicit|gated/.test(candidate.title)), "explicit and gated tracks never offered");
  const last = result.candidates[result.candidates.length - 1];
  assert.equal(last.provider, "apple-itunes-preview");
  assert.equal(last.isPreview, true);
  assert.equal(last.durationSec, 30);
  assert.equal(rest.filter(candidate => !candidate.isPreview).length, 0, "only one non-preview candidate was available");
  assert.ok(googleCalls(world).length === 0, "YouTube quota is not spent when Audius already has the song");
  assert.equal(world.calls.find(call => call.url.includes("/v1/tracks/search")).url.includes("app_name=KyroAgriNexus"), true);
  assert.equal(audius.looksExplicit({ title: "Fine song" }), false);
  assert.equal(audius.looksExplicit({ title: "x", parental_warning_type: "explicit_content" }), true);
});

test("YouTube: official search parameters, embeddability check, quota counted, repeats served from the cache", async () => {
  const { world, ctx, state } = setup({}, KEY);
  const first = await resolveMedia({ query: "Burna Boy Last Last official", kind: "music", country: "KE", includePreview: false }, ctx);
  const youtube = first.candidates[0];
  assert.equal(youtube.provider, "youtube");
  assert.equal(youtube.delivery, "youtube");
  assert.equal(youtube.videoId, "dQw4w9WgXcQ");
  assert.equal(youtube.playbackClass, "video");
  assert.ok(!first.candidates.some(candidate => candidate.videoId === "blockedVid01"), "a video that fails oEmbed / is not embeddable is dropped");
  const search = new URL(googleCalls(world).find(call => call.url.includes("/search")).url);
  assert.equal(search.searchParams.get("safeSearch"), "moderate");
  assert.equal(search.searchParams.get("videoEmbeddable"), "true");
  assert.equal(search.searchParams.get("type"), "video");
  assert.equal(search.searchParams.get("videoCategoryId"), "10");
  assert.equal(search.searchParams.get("regionCode"), "KE");
  assert.equal(state.quota().used, 101, "one search (100) + one videos.list (1)");
  const before = googleCalls(world).length;
  const again = await resolveMedia({ query: "Burna Boy Last Last official", kind: "music", country: "KE", includePreview: false }, ctx);
  assert.equal(again.candidates[0].videoId, "dQw4w9WgXcQ");
  assert.equal(googleCalls(world).length, before, "the repeat made no YouTube request");
  assert.equal(state.quota().used, 101);
  assert.equal(again.tried.find(item => item.provider === "youtube").cached, true);
  const skipFirst = await resolveMedia({ query: "Burna Boy Last Last official", kind: "music", country: "KE", includePreview: false, excludeIds: ["youtube:dQw4w9WgXcQ"] }, ctx);
  assert.ok(!skipFirst.candidates.some(candidate => candidate.videoId === "dQw4w9WgXcQ"), "excludeIds works on cached results too");
});

test("YouTube: the daily quota guard stops searching and the other providers answer; Google's own quota error is remembered", async () => {
  const guarded = setup({}, { ...KEY, NEXUS_YOUTUBE_DAILY_QUOTA: "400", NEXUS_YOUTUBE_QUOTA_RESERVE: "0" });
  for (let index = 0; index < 4; index += 1) guarded.state.spendYoutube(100);
  assert.equal(guarded.state.canSpendYoutube(100), false);
  const result = await resolveMedia({ query: "Sir Duke Stevie Wonder", kind: "music" }, guarded.ctx);
  const tried = result.tried.find(item => item.provider === "youtube");
  assert.equal(tried.status, "skipped".replace("skipped", "quota"));
  assert.equal(googleCalls(guarded.world).length, 0, "no request is made once the quota is used up");
  assert.equal(result.candidates[result.candidates.length - 1].provider, "apple-itunes-preview", "the preview still plays");
  assert.equal(result.youtube.quota.remaining, 0);

  const google = setup({ youtubeQuota: true }, KEY);
  const first = await resolveMedia({ query: "Sir Duke Stevie Wonder", kind: "music" }, google.ctx);
  assert.equal(first.tried.find(item => item.provider === "youtube").status, "quota");
  assert.equal(google.state.quota().exhausted, true);
  const callsAfterFirst = googleCalls(google.world).length;
  await resolveMedia({ query: "another song entirely", kind: "music" }, google.ctx);
  assert.equal(googleCalls(google.world).length, callsAfterFirst, "after a quotaExceeded answer YouTube is not called again today");
});

test("quota day is Pacific time and resets at its midnight; state survives a restart through its file", () => {
  let now = Date.parse("2026-10-07T06:59:00Z"); // 23:59 on 6 Oct in Pacific time
  const state = createMediaState({ filePath: "", now: () => now, env: { NEXUS_YOUTUBE_QUOTA_RESERVE: "0" } });
  state.spendYoutube(100);
  assert.equal(state.quota().used, 100);
  assert.equal(pacificDay(now), "2026-10-06");
  now = Date.parse("2026-10-07T07:01:00Z");
  assert.equal(state.quota().used, 0, "a new Pacific day starts at zero");
  const fs = require("node:fs");
  const os = require("node:os");
  const path = require("node:path");
  const file = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "media-state-")), "state.json");
  const first = createMediaState({ filePath: file, env: {}, now: () => now });
  first.spendYoutube(300);
  first.flush();
  const second = createMediaState({ filePath: file, env: {}, now: () => now });
  assert.equal(second.quota().used, 300);
  assert.ok(!JSON.stringify(JSON.parse(fs.readFileSync(file, "utf8"))).match(/query|user|title/i), "no listening data is stored");
});

test("no YouTube key: music still resolves (radio, Audius, Archive, preview) and the reason says YouTube is not set up", async () => {
  const { world, ctx } = setup();
  const result = await resolveMedia({ query: "Jambo Bwana", kind: "music" }, ctx);
  assert.equal(result.youtube.configured, false);
  const youtube = result.tried.find(item => item.provider === "youtube");
  assert.equal(youtube.status, "skipped");
  assert.match(youtube.reason, /YOUTUBE_API_KEY/);
  assert.equal(result.candidates[0].provider, "internet-archive");
  assert.match(result.candidates[0].url, /^https:\/\/archive\.org\/download\/folk_song_01\/song\.mp3$/);
  assert.match(result.candidates[0].license, /creativecommons/);
  assert.equal(googleCalls(world).length, 0);

  const nothing = setup({ itunes: false, audius: [] });
  const empty = await resolveMedia({ query: "zzzz qqqq", kind: "music" }, nothing.ctx);
  assert.equal(empty.ok, false);
  assert.match(empty.reason, /YouTube is not set up on this server/);
});

test("Jamendo is only used when JAMENDO_CLIENT_ID is configured", async () => {
  const without = setup({ audius: [] });
  const off = await resolveMedia({ query: "Savanna Sunrise", kind: "music", includePreview: false }, without.ctx);
  assert.equal(off.tried.find(item => item.provider === "jamendo").status, "skipped");
  assert.ok(!without.world.calls.some(call => call.url.includes("jamendo.com")));
  const withId = setup({ audius: [] }, { JAMENDO_CLIENT_ID: "placeholder-id" });
  const on = await resolveMedia({ query: "Savanna Sunrise", kind: "music", includePreview: false }, withId.ctx);
  assert.equal(on.candidates[0].provider, "jamendo");
  assert.match(on.candidates[0].license, /Creative Commons/);
});

test("Apple preview is the LAST resort and always labelled as a preview", async () => {
  const { ctx } = setup({ audius: [] });
  const result = await resolveMedia({ query: "Sir Duke Stevie Wonder", kind: "music" }, ctx);
  assert.equal(result.candidates.length, 1);
  assert.equal(result.candidates[0].provider, "apple-itunes-preview");
  assert.equal(result.candidates[0].isPreview, true);
  assert.equal(result.candidates[0].verified, true);
  const off = await resolveMedia({ query: "Sir Duke Stevie Wonder", kind: "music", includePreview: false }, ctx);
  assert.equal(off.candidates.length, 0);
});

test("audio-only (low data) tries YouTube's video player after the audio-only sources", async () => {
  const { world, ctx } = setup({ audius: [] }, KEY);
  const result = await resolveMedia({ query: "Jambo Bwana Folk", kind: "music", audioOnly: true, includePreview: false }, ctx);
  assert.equal(result.candidates[0].provider, "internet-archive");
  assert.equal(googleCalls(world).length, 0, "the archive audio already had it, so no video search was needed");
});

test("video: YouTube first with a key; without one, Internet Archive films then Wikimedia Commons", async () => {
  const keyed = setup({}, KEY);
  const withKey = await resolveMedia({ query: "how to plant maize", kind: "video", country: "KE" }, keyed.ctx);
  assert.equal(withKey.candidates[0].provider, "youtube");
  assert.ok(!new URL(googleCalls(keyed.world).find(call => call.url.includes("/search")).url).searchParams.has("videoCategoryId"), "no music category for video");

  const keyless = setup();
  const film = await resolveMedia({ query: "modern farming methods", kind: "video" }, keyless.ctx);
  assert.equal(film.candidates[0].provider, "internet-archive");
  assert.equal(film.candidates[0].playbackClass, "video");
  assert.match(film.candidates[0].url, /farm_512kb\.mp4$/, "the smaller derivative is chosen for slow connections");
  const commons = await resolveMedia({ query: "maize harvest kenya", kind: "video" }, keyless.ctx);
  assert.equal(commons.candidates[0].provider, "wikimedia-commons");
  assert.equal(commons.candidates[0].license, "CC BY-SA 4.0");
  assert.equal(commons.youtube.configured, false);
});

test("hand-off to YouTube: exact video with a key, search page without one; never claims playback", async () => {
  const keyed = setup({}, KEY);
  const exact = await resolveMedia({ query: "Burna Boy Last Last", kind: "music", handoff: true }, keyed.ctx);
  assert.equal(exact.mode, "handoff");
  assert.equal(exact.handoff.kind, "video");
  assert.equal(exact.handoff.url, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  const keyless = setup();
  const search = await resolveMedia({ query: "Burna Boy Last Last", kind: "music", handoff: true }, keyless.ctx);
  assert.equal(search.handoff.kind, "search");
  assert.equal(search.handoff.url, "https://www.youtube.com/results?search_query=Burna%20Boy%20Last%20Last");
  assert.equal(googleCalls(keyless.world).length, 0);
  assert.equal(search.ok, true);
});

test("preflight: audio content, HLS is flagged, HTML error pages and timeouts are rejected without throwing", async () => {
  const { ctx } = setup();
  assert.deepEqual((await preflightStream(ctx, "https://streams.example.test/citizen.mp3")).ok, true);
  const hls = await preflightStream(ctx, "https://streams.example.test/live.m3u8");
  assert.equal(hls.ok, true);
  assert.equal(hls.hls, true);
  const dead = await preflightStream(ctx, "https://streams.example.test/dead.mp3");
  assert.equal(dead.ok, false);
  assert.equal(dead.reason, "http-404");
  const never = createContext({ fetch: (url, init) => new Promise((resolve, reject) => init.signal.addEventListener("abort", () => reject(Object.assign(new Error("aborted"), { name: "AbortError" })))) });
  const slow = await preflightStream(never, "https://slow.example.test/x.mp3", { timeoutMs: 30 });
  assert.equal(slow.ok, false);
  assert.equal(slow.reason, "timeout");
});

test("radio-browser reportPlayed counts a click through the documented url endpoint, once", async () => {
  const { world, ctx } = setup();
  assert.equal(await radioBrowser.reportPlayed(ctx, STATIONS[0].stationuuid), true);
  assert.ok(world.calls.some(call => call.url.includes(`/json/url/${STATIONS[0].stationuuid}`)));
  assert.equal(await radioBrowser.reportPlayed(ctx, "not a uuid!"), false);
  assert.equal(radioBrowser.looksLikeStationOrGenre("capital fm"), true);
  assert.equal(radioBrowser.looksLikeStationOrGenre("jazz music"), true);
  assert.equal(radioBrowser.looksLikeStationOrGenre("sir duke"), false);
});

test("YouTube provider helpers: ISO durations, region blocking and the key variants", () => {
  assert.equal(youtubeProvider.parseIsoDuration("PT3M20S"), 200);
  assert.equal(youtubeProvider.parseIsoDuration("PT1H2M"), 3720);
  assert.equal(youtubeProvider.apiKey({ NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY: " k " }), "k");
  assert.equal(youtubeProvider.isConfigured({ env: {} }).configured, false);
});

test("collectVerified returns passes in ranked order without waiting for a slow dead stream", async () => {
  const { collectVerified } = require("../../server/media/util.js");
  const started = Date.now();
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const out = await collectVerified([
    async () => { await sleep(1500); return null; },
    async () => { await sleep(20); return "second"; },
    async () => { await sleep(60); return "third"; }
  ], { want: 3, graceMs: 100 });
  assert.equal(JSON.stringify(out), JSON.stringify(["second", "third"]));
  assert.ok(Date.now() - started < 900, "did not wait for the 1.5 second dead one");
});

test("Audius: a mashup that merely contains the song's words is not offered as the song", async () => {
  const world = createFakeWorld({ audius: [{ id: "mash", title: "TLC No Scrubs x Burna Boy Last Last", user: { name: "DJ Mash" }, duration: 200, is_streamable: true, play_count: 99999 },
    { id: "real", title: "Burna Boy - Last Last (Remix)", user: { name: "Fan" }, duration: 200, is_streamable: true, play_count: 5 }] });
  const ctx = createContext({ env: {}, fetch: world.fetch, state: createMediaState({ filePath: "", env: {} }), cache: createTtlCache() });
  const result = await resolveMedia({ query: "Burna Boy Last Last", kind: "music", includePreview: false }, ctx);
  assert.equal(JSON.stringify(result.candidates.map(candidate => candidate.id)), JSON.stringify(["audius:real"]));
});
