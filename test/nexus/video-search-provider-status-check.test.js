"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { searchYouTubeVideos } = require("../../server/providers/videoSearchProvider.js");

// Found live (follow-up sweep): unlike the preceding search call (which throws on !response.ok), the
// videos.list "status" call (checking which search results are embeddable) never checked its own
// response.ok -- a quota/outage/malformed-batch failure there silently produced an empty payload, zero
// "eligible" videos, and searchYouTubeVideos returning [] as if the search genuinely found nothing
// embeddable, rather than surfacing the real provider error. searchVideos() then silently degraded to
// the weaker Wikimedia Commons fallback with the actual YouTube error lost.
function fakeFetch({ searchOk = true, statusOk = false, statusBody = { error: { message: "quotaExceeded" } } } = {}) {
  let call = 0;
  return async url => {
    call += 1;
    const href = String(url);
    if (href.includes("/youtube/v3/search")) {
      return { ok: searchOk, status: searchOk ? 200 : 403, json: async () => ({ items: [{ id: { videoId: "abc123" }, snippet: { title: "Maize basics", channelTitle: "Farm Channel", publishedAt: "2026-01-01" } }] }) };
    }
    if (href.includes("/youtube/v3/videos")) {
      return { ok: statusOk, status: statusOk ? 200 : 403, json: async () => statusBody };
    }
    throw new Error(`unexpected fetch call #${call}: ${href}`);
  };
}

test("a failed videos.list status call throws a real provider error, instead of silently returning zero eligible videos", async () => {
  const original = global.fetch; global.fetch = fakeFetch({ statusOk: false });
  try {
    await assert.rejects(
      () => searchYouTubeVideos("maize planting", { YOUTUBE_API_KEY: "test-key" }),
      error => { assert.match(error.message, /quotaExceeded|youtube-status-http/); return true; }
    );
  } finally { global.fetch = original; }
});

test("a successful videos.list status call is unaffected by the fix and still filters normally", async () => {
  const original = global.fetch;
  global.fetch = fakeFetch({ statusOk: true, statusBody: { items: [{ id: "abc123", status: { embeddable: true, privacyStatus: "public" } }] } });
  try {
    // The final oEmbed preflight also calls fetch -- stub it to accept, since this test is only about
    // the status.ok check, not the oEmbed step (which has its own separate try/catch already).
    const originalFetch = global.fetch;
    global.fetch = async url => {
      const href = String(url);
      if (href.includes("/oembed")) return { ok: true, json: async () => ({ type: "video", html: "<iframe></iframe>" }) };
      return originalFetch(url);
    };
    const results = await searchYouTubeVideos("maize planting", { YOUTUBE_API_KEY: "test-key" });
    assert.equal(results.length, 1);
    assert.equal(results[0].videoId, "abc123");
  } finally { global.fetch = original; }
});
