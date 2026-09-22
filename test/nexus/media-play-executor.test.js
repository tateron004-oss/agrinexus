"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createMediaPlayExecutor, verifyMediaPlayOutcome } = require("../../nexus/media/executor.js");

// Confirmed live 2026-09-22 (the capability audit): the canonical-tool executor for "media.play" -- the one the
// general multi-step AI-agent planner actually calls -- always returned { playbackState: "playing" } with nothing
// behind it, even though the client's own "Nexus, play X" fast path already resolves and verifies real playback
// through these exact same lookup functions (server/nexus-music-media-source-provider.js). Its iTunes/YouTube network
// logic already has its own coverage (provider-neutral-music-playback.test.js, youtube-embed-preflight.test.js), so
// lookupPreview/lookupVideo are injected here rather than re-testing that module or hitting the network.
const neverCalled = name => async () => { throw new Error(`${name} must not be called here`); };

test("a real, preflight-verified iTunes preview clip returns a verified outcome and is preferred over YouTube", async () => {
  const execute = createMediaPlayExecutor({ env: {},
    lookupPreview: async request => { assert.equal(request.mediaRequest, "bohemian rhapsody queen");
      return { ok: true, preflightVerified: true, audioUrl: "https://example.com/preview.m4a", title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", providerUrl: "https://music.apple.com/x" }; },
    lookupVideo: neverCalled("lookupVideo") });
  const result = await execute({ input: { requestedMedia: "bohemian rhapsody queen" } });
  assert.equal(result.ok, true); assert.equal(result.provider, "apple-itunes-preview"); assert.equal(result.audioUrl, "https://example.com/preview.m4a");
  assert.equal(result.title, "Bohemian Rhapsody"); assert.equal(result.artist, "Queen");
  assert.equal(verifyMediaPlayOutcome({ result }).verified, true);
});

test("falls back to a real YouTube video when no iTunes preview matched", async () => {
  const execute = createMediaPlayExecutor({ env: { YOUTUBE_API_KEY: "key" },
    lookupPreview: async () => ({ ok: false, error: "exact-track-match-unavailable" }),
    lookupVideo: async () => ({ sourceStatus: "source-result-available", sourceUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", resultSummary: "YouTube video found: Some Live Cover — A Channel." }) });
  const result = await execute({ input: { requestedMedia: "some live cover" } });
  assert.equal(result.ok, true); assert.equal(result.provider, "youtube"); assert.equal(result.videoId, "dQw4w9WgXcQ"); assert.equal(result.title, "Some Live Cover");
  assert.equal(verifyMediaPlayOutcome({ result }).verified, true);
});

test("honestly refuses -- does not claim 'playing' -- when neither provider found anything real", async () => {
  const execute = createMediaPlayExecutor({ env: {},
    lookupPreview: async () => ({ ok: false, error: "exact-track-match-unavailable" }),
    lookupVideo: async () => ({ sourceStatus: "source-error", limitationNotes: "source-result-empty; open YouTube directly to verify." }) });
  const result = await execute({ input: { requestedMedia: "a song that does not exist anywhere" } });
  assert.equal(result.ok, false); assert.equal(result.resolved, false); assert.equal(result.provider, null);
  const verdict = verifyMediaPlayOutcome({ result });
  assert.equal(verdict.verified, false); assert.match(verdict.reason, /exact-track-match-unavailable|source-result-empty/);
});

test("an empty request is refused before calling any provider", async () => {
  const execute = createMediaPlayExecutor({ env: {}, lookupPreview: neverCalled("lookupPreview"), lookupVideo: neverCalled("lookupVideo") });
  const result = await execute({ input: { requestedMedia: "   " } });
  assert.equal(result.ok, false); assert.equal(result.reason, "no_media_requested");
});

test("a preview with no preflight verification (audio didn't actually check out playable) is not accepted as real, and the YouTube fallback still runs", async () => {
  let videoCalled = false;
  const execute = createMediaPlayExecutor({ env: {},
    lookupPreview: async () => ({ ok: true, preflightVerified: false, audioUrl: "https://example.com/preview.m4a" }),
    lookupVideo: async () => { videoCalled = true; return { sourceStatus: "source-error", limitationNotes: "no video either" }; } });
  const result = await execute({ input: { requestedMedia: "x" } });
  assert.equal(result.ok, false); assert.equal(videoCalled, true, "an unverified preview must not short-circuit the real fallback");
});

test("verifyMediaPlayOutcome refuses to trust a hand-built result claiming success with no audioUrl or videoId", () => {
  assert.equal(verifyMediaPlayOutcome({ result: { ok: true, resolved: true } }).verified, false);
  assert.equal(verifyMediaPlayOutcome({ result: undefined }).verified, false);
});
