"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createMediaPlayExecutor, verifyMediaPlayOutcome } = require("../../nexus/media/executor.js");
const { createMediaRuntime, setMediaRuntimeForTests } = require("../../server/media/runtime.js");
const { createFakeWorld } = require("../helpers/media-fake-world.js");

// media.play now resolves through server/media/resolver.js. The production deploy gate's acceptance probe exercises this tool, so the contract
// is pinned here: the result is always a preflight-verified candidate when ANY source (even only the Apple preview) can play it, and a
// missing key or an unreachable new provider never turns that into a failure.
const neverLegacy = { lookupPreview: async () => { throw new Error("legacy preview should not be needed"); }, lookupVideo: async () => { throw new Error("legacy video should not be needed"); } };
const candidate = (overrides = {}) => ({ id: "x:1", provider: "audius", providerName: "Audius", playbackClass: "audio", delivery: "stream", url: "https://cdn.example.test/a.mp3", title: "Last Last", artist: "Burna Boy", durationSec: 200, live: false, isPreview: false, attribution: "a", license: "l", verified: true, ...overrides });

test("a full-length stream candidate becomes a verified media.play result", async () => {
  const execute = createMediaPlayExecutor({ ...neverLegacy, resolveMedia: async request => { assert.equal(request.query, "last last"); assert.equal(request.kind, "music"); return { ok: true, candidates: [candidate()] }; } });
  const result = await execute({ input: { requestedMedia: "last last" } });
  assert.equal(result.ok, true);
  assert.equal(result.provider, "audius");
  assert.equal(result.playbackClass, "audio");
  assert.equal(result.audioUrl, "https://cdn.example.test/a.mp3");
  assert.equal(result.isPreview, false);
  assert.equal(verifyMediaPlayOutcome({ result }).verified, true);
});

test("YouTube, radio, video-file and hand-off candidates all verify", async () => {
  const run = async (found, input = {}) => createMediaPlayExecutor({ ...neverLegacy, resolveMedia: async () => found })({ input: { requestedMedia: "x", ...input } });
  const youtube = await run({ ok: true, candidates: [candidate({ provider: "youtube", delivery: "youtube", videoId: "dQw4w9WgXcQ", url: undefined, playbackClass: "video" })] });
  assert.equal(youtube.videoId, "dQw4w9WgXcQ");
  assert.equal(verifyMediaPlayOutcome({ result: youtube }).verified, true);
  const radio = await run({ ok: true, candidates: [candidate({ provider: "radio-browser", live: true })] }, { kind: "radio" });
  assert.equal(radio.live, true);
  assert.equal(radio.kind, "radio");
  const video = await run({ ok: true, candidates: [candidate({ provider: "internet-archive", playbackClass: "video", url: "https://archive.org/download/x/y.mp4" })] }, { kind: "video" });
  assert.equal(video.videoUrl, "https://archive.org/download/x/y.mp4");
  assert.equal(verifyMediaPlayOutcome({ result: video }).verified, true);
  const handoff = await run({ ok: true, mode: "handoff", handoff: { url: "https://www.youtube.com/results?search_query=x", kind: "search", videoId: null, title: "x" }, candidates: [] }, { handoff: true });
  assert.equal(handoff.mode, "handoff");
  assert.equal(handoff.playbackState, "queued", "a hand-off is queued, never 'playing'");
  assert.equal(verifyMediaPlayOutcome({ result: handoff }).verified, true);
});

test("a preview-only result is labelled as a preview and still verifies (the gate's fallback)", async () => {
  const execute = createMediaPlayExecutor({ ...neverLegacy, resolveMedia: async () => ({ ok: true, candidates: [candidate({ provider: "apple-itunes-preview", isPreview: true, durationSec: 30 })] }) });
  const result = await execute({ input: { requestedMedia: "sir duke" } });
  assert.equal(result.playbackClass, "preview");
  assert.equal(result.isPreview, true);
  assert.equal(verifyMediaPlayOutcome({ result }).verified, true);
});

test("when the resolver fails or finds nothing, the original iTunes-then-YouTube lookups still answer", async () => {
  const lookups = { lookupPreview: async () => ({ ok: true, preflightVerified: true, audioUrl: "https://example.com/p.m4a", title: "Sir Duke", artist: "Stevie Wonder" }), lookupVideo: async () => { throw new Error("not reached"); } };
  const afterThrow = await createMediaPlayExecutor({ ...lookups, resolveMedia: async () => { throw new Error("radio-browser exploded"); } })({ input: { requestedMedia: "sir duke" } });
  assert.equal(afterThrow.provider, "apple-itunes-preview");
  assert.equal(verifyMediaPlayOutcome({ result: afterThrow }).verified, true);
  const afterEmpty = await createMediaPlayExecutor({ ...lookups, resolveMedia: async () => ({ ok: false, candidates: [], reason: "Nothing playable" }) })({ input: { requestedMedia: "sir duke" } });
  assert.equal(afterEmpty.provider, "apple-itunes-preview");
});

test("nothing anywhere: honest refusal that carries the reason", async () => {
  const execute = createMediaPlayExecutor({
    resolveMedia: async () => ({ ok: false, candidates: [], reason: "Nothing playable was found for \"zz\". YouTube is not set up on this server (no YOUTUBE_API_KEY), so it was not searched." }),
    lookupPreview: async () => ({ ok: false, error: "exact-track-match-unavailable" }), lookupVideo: async () => ({ sourceStatus: "source-error", limitationNotes: "empty" })
  });
  const result = await execute({ input: { requestedMedia: "zz" } });
  assert.equal(result.ok, false);
  assert.equal(verifyMediaPlayOutcome({ result }).verified, false);
});

test("'play radio' needs no station name; an empty music request is still refused", async () => {
  const execute = createMediaPlayExecutor({ ...neverLegacy, resolveMedia: async request => ({ ok: true, candidates: [candidate({ provider: "radio-browser", live: true, title: request.query || "Local station" })] }) });
  const radio = await execute({ input: { kind: "radio", requestedMedia: "" } });
  assert.equal(radio.ok, true);
  assert.equal(radio.title, "Local station");
  const empty = await execute({ input: { requestedMedia: " " } });
  assert.equal(empty.reason, "no_media_requested");
});

test("through the real resolver with the pretend internet: no key, Audius has no match -> the verified preview (what the deploy gate probe needs)", async () => {
  const world = createFakeWorld({ audius: [] });
  setMediaRuntimeForTests(createMediaRuntime({ env: { YOUTUBE_API_KEY: "" }, fetch: world.fetch, filePath: "" }));
  try {
    const result = await createMediaPlayExecutor({ env: {} })({ input: { requestedMedia: "Stevie Wonder Sir Duke" } });
    assert.equal(result.ok, true);
    assert.equal(result.provider, "apple-itunes-preview");
    assert.equal(result.isPreview, true);
    assert.match(result.audioUrl, /^https:\/\//);
    assert.equal(verifyMediaPlayOutcome({ result }).verified, true);
  } finally { setMediaRuntimeForTests(null); }
});

test("through the real resolver: a reachable radio station or Audius track is preferred over the preview, and every provider being unreachable still leaves the preview", async () => {
  const good = createFakeWorld();
  setMediaRuntimeForTests(createMediaRuntime({ env: {}, fetch: good.fetch, filePath: "" }));
  try {
    const radio = await createMediaPlayExecutor({ env: {} })({ input: { kind: "radio", requestedMedia: "Citizen", country: "KE" } });
    assert.equal(radio.provider, "radio-browser");
    const down = createFakeWorld({ radioDown: true, audiusDown: true, youtubeDown: true });
    setMediaRuntimeForTests(createMediaRuntime({ env: { YOUTUBE_API_KEY: "placeholder" }, fetch: down.fetch, filePath: "" }));
    const fallback = await createMediaPlayExecutor({ env: {} })({ input: { requestedMedia: "Stevie Wonder Sir Duke" } });
    assert.equal(fallback.provider, "apple-itunes-preview");
    assert.equal(verifyMediaPlayOutcome({ result: fallback }).verified, true);
  } finally { setMediaRuntimeForTests(null); }
});
