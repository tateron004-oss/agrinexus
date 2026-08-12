"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { runYouTubeReadOnlyLookup } = require("../../server/nexus-music-media-source-provider.js");

test("YouTube selection rejects API-embeddable candidates that fail the official oEmbed preflight", async () => {
  const calls = [];
  const fetchImpl = async url => {
    const value = String(url); calls.push(value);
    if (value.includes("/youtube/v3/search")) return response({ items: [
      { id: { videoId: "blocked150" }, snippet: { title: "Blocked result", channelTitle: "Owner" } },
      { id: { videoId: "playable01" }, snippet: { title: "Playable cover", channelTitle: "Artist" } }
    ] });
    if (value.includes("/youtube/v3/videos")) return response({ items: [
      { id: "blocked150", status: { embeddable: true, privacyStatus: "public" }, contentDetails: {} },
      { id: "playable01", status: { embeddable: true, privacyStatus: "public" }, contentDetails: {} }
    ] });
    if (value.includes("blocked150")) return { ok: false, status: 401, json: async () => ({}) };
    if (value.includes("playable01")) return response({ type: "video", html: "<iframe></iframe>" });
    throw new Error("unexpected URL");
  };
  const result = await runYouTubeReadOnlyLookup({ mediaRequest: "Sir Duke cover" }, {
    YOUTUBE_API_KEY: "key", NEXUS_MUSIC_MEDIA_FETCH_IMPL: fetchImpl
  });
  assert.match(result.sourceUrl, /playable01/);
  assert.equal(calls.filter(value => value.includes("/oembed")).length, 2);
});

test("YouTube selection rejects candidates blocked in the production region before oEmbed", async () => {
  const fetchImpl = async url => {
    const value = String(url);
    if (value.includes("/youtube/v3/search")) return response({ items: [
      { id: { videoId: "regionbad" }, snippet: { title: "Blocked region", channelTitle: "Owner" } }
    ] });
    if (value.includes("/youtube/v3/videos")) return response({ items: [
      { id: "regionbad", status: { embeddable: true, privacyStatus: "public" },
        contentDetails: { regionRestriction: { blocked: ["US"] } } }
    ] });
    throw new Error("oEmbed must not run for a region-blocked candidate");
  };
  const result = await runYouTubeReadOnlyLookup({ mediaRequest: "music" }, {
    YOUTUBE_API_KEY: "key", NEXUS_MUSIC_MEDIA_FETCH_IMPL: fetchImpl
  });
  assert.equal(result.sourceStatus, "source-error");
});

function response(body) { return { ok: true, status: 200, json: async () => body }; }
