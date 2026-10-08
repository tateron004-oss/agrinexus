"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createFakeWorld } = require("../helpers/media-fake-world.js");
const { resolveMedia } = require("../../server/media/resolver.js");
const { createContext } = require("../../server/media/util.js");
const { createMediaState } = require("../../server/media/state.js");
const { createTtlCache } = require("../../server/media/cache.js");
const { createMediaRuntime } = require("../../server/media/runtime.js");
const routes = require("../../server/media/routes.js");
const itunes = require("../../server/media/providers/itunes.js");
const { createMediaPlayExecutor, verifyMediaPlayOutcome } = require("../../nexus/media/executor.js");

// Regression for the production browser probe that failed on release bc3298f2 ("I could not find anything to play for Stevie Wonder Sir Duke"):
// as long as the Apple preview lookup works, the chain must end in a VERIFIED candidate, whatever every other provider does -- fail, hang, return
// garbage, run out of quota, or hand back streams that cannot be reached from the server's network.
const NON_PREVIEW_HOSTS = ["radio-browser.info", "audius.co", "audius-host.test", "googleapis.com", "youtube.com", "jamendo.com", "archive.org", "wikimedia.org", "streams.example.test", "jamendo-cdn.example.test"];
const KEY = { YOUTUBE_API_KEY: "test-key-placeholder", JAMENDO_CLIENT_ID: "placeholder" };
const QUERY = "Stevie Wonder Sir Duke";

function setup(worldOptions = {}, env = KEY, ctxOptions = {}) {
  const world = createFakeWorld(worldOptions);
  const state = createMediaState({ filePath: "", env });
  const ctx = createContext({ env, fetch: world.fetch, state, cache: createTtlCache(), ...ctxOptions });
  return { world, ctx, state };
}
const faultsFor = (mode, hosts = NON_PREVIEW_HOSTS) => Object.fromEntries(hosts.map(host => [host, mode]));
const previewOf = result => result.candidates.find(candidate => candidate.provider === "apple-itunes-preview");

for (const mode of ["throw", "garbage", "html", "500", "429", "hang"]) {
  test(`every provider except Apple fails with "${mode}": the verified preview is still returned, quickly`, async () => {
    const { ctx } = setup({ faults: faultsFor(mode) }, KEY, { providerBudgetMs: 400, totalBudgetMs: 1500 });
    const started = Date.now();
    const result = await resolveMedia({ query: QUERY, kind: "music", country: "KE" }, ctx);
    assert.equal(result.ok, true, JSON.stringify(result.tried));
    const preview = previewOf(result);
    assert.ok(preview, "the Apple preview is there");
    assert.equal(preview.verified, true);
    assert.equal(preview.isPreview, true);
    assert.equal(preview.mimeType, "audio/mp4", "Apple's audio/x-m4p label is normalised so a phone does not discard it");
    assert.match(preview.url, /^https:\/\//);
    assert.ok(Date.now() - started < 4000, `took ${Date.now() - started} ms`);
    assert.ok(result.tried.every(item => item.status !== "ok" || item.provider === "apple-itunes-preview"), "nothing else succeeded");
  });
}

test("a provider that hangs and ignores its abort signal is cut off by the hard budgets and cannot starve the rest", async () => {
  const { ctx } = setup({ faults: { "audius.co": "hang-ignore-signal", "audius-host.test": "hang-ignore-signal", "googleapis.com": "hang-ignore-signal" } }, KEY, { providerBudgetMs: 150, totalBudgetMs: 400 });
  const started = Date.now();
  const result = await resolveMedia({ query: QUERY, kind: "music" }, ctx);
  assert.ok(Date.now() - started < 3000, `took ${Date.now() - started} ms`);
  assert.equal(result.tried.find(item => item.provider === "audius").status, "error");
  assert.equal(result.tried.find(item => item.provider === "audius").reason, "failed (timeout)");
  assert.equal(result.ok, true);
  assert.equal(result.tried.find(item => item.provider === "internet-archive").status, "empty", "the providers after the hung ones still ran");
  assert.equal(result.tried.find(item => item.provider === "jamendo").status, "empty");
  assert.ok(previewOf(result));
});

test("once the overall budget is used up no further provider is started; the preview that was searched in parallel is returned", async () => {
  const { ctx, world } = setup({ faults: faultsFor("hang-ignore-signal") }, KEY, { providerBudgetMs: 200, totalBudgetMs: 250 });
  const result = await resolveMedia({ query: QUERY, kind: "music" }, ctx);
  assert.equal(result.ok, true);
  assert.ok(result.tried.some(item => /overall time budget/.test(item.reason)));
  assert.ok(previewOf(result));
  assert.ok(world.calls.some(call => call.url.includes("itunes.apple.com")));
});

test("YouTube configured but misbehaving never aborts the chain: quota error, API not enabled, videos.list failure, oEmbed failure", async () => {
  const quota = setup({ youtubeQuota: true }, KEY);
  const first = await resolveMedia({ query: QUERY, kind: "music" }, quota.ctx);
  assert.equal(first.tried.find(item => item.provider === "youtube").status, "quota");
  assert.ok(previewOf(first));

  const world = createFakeWorld({ audius: [] });
  const originalFetch = world.fetch;
  const notEnabled = async (url, init) => String(url).includes("googleapis.com/youtube/v3/search")
    ? { ok: false, status: 403, headers: { get: () => "application/json" }, json: async () => ({ error: { message: "YouTube Data API v3 has not been used in project", errors: [{ reason: "accessNotConfigured" }] } }) }
    : originalFetch(url, init);
  const state = createMediaState({ filePath: "", env: KEY });
  const ctx = createContext({ env: KEY, fetch: notEnabled, state, cache: createTtlCache() });
  const second = await resolveMedia({ query: QUERY, kind: "music" }, ctx);
  assert.equal(second.tried.find(item => item.provider === "youtube").status, "error");
  assert.equal(state.quota().exhausted, false, "a misconfigured key is not 'quota used up'");
  assert.ok(previewOf(second));

  const listFails = setup({ audius: [], faults: {} }, KEY);
  const listFetch = listFails.world.fetch;
  listFails.ctx.fetch = async (url, init) => String(url).includes("/youtube/v3/videos") ? { ok: false, status: 500, headers: { get: () => "" }, json: async () => ({}) } : listFetch(url, init);
  const third = await resolveMedia({ query: QUERY, kind: "music" }, listFails.ctx);
  assert.ok(previewOf(third));

  const oembedDown = setup({ audius: [], faults: { "youtube.com": "throw" } }, KEY);
  const fourth = await resolveMedia({ query: "Burna Boy Last Last", kind: "music" }, oembedDown.ctx);
  assert.ok(previewOf(fourth));
  assert.ok(!fourth.candidates.some(candidate => candidate.provider === "youtube"), "a video that cannot be shown to pass oEmbed is not offered");
});

test("streams that cannot be reached from the server's network are never offered; the preview still is", async () => {
  const { ctx } = setup({ audius: [], deadStreams: ["https://streams.example.test/citizen.mp3", "https://streams.example.test/capital.mp3", "https://streams.example.test/dead.mp3", "https://streams.example.test/plain.mp3"], faults: { "archive.org": "html" } }, {});
  const result = await resolveMedia({ query: QUERY, kind: "music" }, ctx);
  assert.equal(result.ok, true);
  assert.equal(result.candidates.length, 1);
  assert.equal(result.candidates[0].provider, "apple-itunes-preview");
});

test("only Apple answers and the preview file itself cannot be reached: an honest, well-formed refusal, never an exception", async () => {
  const { ctx } = setup({ faults: { ...faultsFor("throw"), "audio-ssl.example.test": "throw" } }, KEY, { providerBudgetMs: 300, totalBudgetMs: 800 });
  const result = await resolveMedia({ query: QUERY, kind: "music" }, ctx);
  assert.equal(result.ok, false);
  assert.match(result.reason, /Nothing playable was found/);
  assert.ok(Array.isArray(result.tried) && result.tried.length > 0);
});

test("normalizeAudioMime: Apple's audio/x-m4p becomes audio/mp4; other types are left alone", () => {
  assert.equal(itunes.normalizeAudioMime("audio/x-m4p"), "audio/mp4");
  assert.equal(itunes.normalizeAudioMime("audio/x-m4a; charset=binary"), "audio/mp4");
  assert.equal(itunes.normalizeAudioMime("audio/mpeg"), "audio/mpeg");
  assert.equal(itunes.normalizeAudioMime(""), "");
});

test("the admin report keeps the last resolves with per-provider outcome and timing, and no query text, keys or people", async () => {
  const world = createFakeWorld({ faults: { "audius-host.test": "500" } });
  const runtime = createMediaRuntime({ env: KEY, fetch: world.fetch, filePath: "" });
  await runtime.resolve({ query: "Secret Song Title Zed", kind: "music", country: "KE" });
  await runtime.resolve({ query: "", kind: "radio", country: "Kenya" });
  const report = routes.handleAdminProviders({ runtime }).body;
  assert.equal(report.recentResolves.length, 2);
  const latest = report.recentResolves[0];
  assert.equal(latest.kind, "radio");
  assert.equal(latest.ok, true);
  assert.ok(Number.isFinite(latest.totalMs));
  assert.ok(latest.providers.every(item => "provider" in item && "status" in item && "ms" in item));
  const song = report.recentResolves[1];
  assert.equal(song.providers.find(item => item.provider === "audius").status, "error");
  const text = JSON.stringify(report);
  assert.ok(!/Secret Song|test-key-placeholder|placeholder/.test(text));
  for (let index = 0; index < 40; index += 1) await runtime.resolve({ query: "", kind: "radio", country: "KE" });
  assert.equal(runtime.report().recentResolves.length, 30, "bounded");
});

test("POST /api/media/resolve handler: a stuck resolver becomes a fast, well-formed answer, not a hung request", async () => {
  const runtime = { ctx: { env: {} }, resolve: () => new Promise(() => {}) };
  const started = Date.now();
  const outcome = await routes.handleResolve({ body: { query: QUERY, kind: "music" }, runtime, budgetMs: 100 });
  assert.equal(outcome.status, 200);
  assert.equal(outcome.body.ok, false);
  assert.ok(Array.isArray(outcome.body.candidates));
  assert.ok(Date.now() - started < 1500);
  const throwing = await routes.handleResolve({ body: { query: QUERY }, runtime: { ctx: { env: {} }, resolve: async () => { throw new Error("boom"); } } });
  assert.equal(throwing.body.ok, false);
});

test("legacy /api/music/providers/playback keeps answering under the same faults", async () => {
  const allDown = createFakeWorld({ faults: faultsFor("throw") });
  const preview = await routes.handleLegacyPlayback({ body: { query: QUERY, country: "US" }, runtime: createMediaRuntime({ env: KEY, fetch: allDown.fetch, filePath: "" }) });
  assert.equal(preview.status, 200);
  assert.equal(preview.body.provider, "apple-itunes-preview");
  assert.equal(preview.body.preflightVerified, true);
  assert.equal(preview.body.fallbackAvailable, true);

  const appleDown = createFakeWorld({ itunes: false });
  const viaYoutube = await routes.handleLegacyPlayback({ body: { query: "Burna Boy Last Last" }, runtime: createMediaRuntime({ env: KEY, fetch: appleDown.fetch, filePath: "" }) });
  assert.equal(viaYoutube.status, 200);
  assert.equal(viaYoutube.body.provider, "youtube");

  const everythingDown = createFakeWorld({ faults: { ...faultsFor("500"), "itunes.apple.com": "garbage" } });
  const none = await routes.handleLegacyPlayback({ body: { query: QUERY }, runtime: createMediaRuntime({ env: KEY, fetch: everythingDown.fetch, filePath: "" }) });
  assert.equal(none.status, 503);
  assert.equal(none.body.status, "all-providers-unavailable");

  const quota = createFakeWorld({ youtubeQuota: true, itunes: false });
  const quotaOut = await routes.handleLegacyYoutubeSearch({ body: { query: QUERY }, runtime: createMediaRuntime({ env: KEY, fetch: quota.fetch, filePath: "" }) });
  assert.equal(quotaOut.status, 503);
  assert.equal(quotaOut.body.provider, "youtube");
});

test("media.play returns a verified candidate under the same faults, whether the resolver misbehaves or the providers do", async () => {
  const allDown = createFakeWorld({ faults: faultsFor("throw") });
  const runtimeModule = require("../../server/media/runtime.js");
  runtimeModule.setMediaRuntimeForTests(createMediaRuntime({ env: KEY, fetch: allDown.fetch, filePath: "" }));
  try {
    const result = await createMediaPlayExecutor({ env: {} })({ input: { requestedMedia: QUERY } });
    assert.equal(result.ok, true);
    assert.equal(result.provider, "apple-itunes-preview");
    assert.equal(result.isPreview, true);
    assert.equal(verifyMediaPlayOutcome({ result }).verified, true);
  } finally { runtimeModule.setMediaRuntimeForTests(null); }

  const lookups = { lookupPreview: async () => ({ ok: true, preflightVerified: true, audioUrl: "https://example.com/p.m4a", title: "Sir Duke", artist: "Stevie Wonder" }), lookupVideo: async () => ({ sourceStatus: "source-error" }) };
  const hung = await createMediaPlayExecutor({ ...lookups, resolveMedia: () => new Promise(() => {}), resolverTimeoutMs: 80 })({ input: { requestedMedia: QUERY } });
  assert.equal(hung.provider, "apple-itunes-preview");
  assert.equal(verifyMediaPlayOutcome({ result: hung }).verified, true);
  const garbage = await createMediaPlayExecutor({ ...lookups, resolveMedia: async () => "not an object" })({ input: { requestedMedia: QUERY } });
  assert.equal(garbage.provider, "apple-itunes-preview");
  const empty = await createMediaPlayExecutor({ ...lookups, resolveMedia: async () => null })({ input: { requestedMedia: QUERY } });
  assert.equal(empty.provider, "apple-itunes-preview");
});
