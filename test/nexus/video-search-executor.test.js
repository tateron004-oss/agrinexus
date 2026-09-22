"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createVideoSearchExecutor, verifyVideoSearchOutcome } = require("../../nexus/media/video-search-executor.js");

// Closes item 18 of the 2026-09-22 capability audit: "view videos" (general video search) had no path
// at all through the primary/authoritative runtime -- only the legacy nexus_visual_analysis tool could
// do it. This executor reuses that exact same real logic (server/providers/videoSearchProvider.js,
// extracted from server.js so both paths share one implementation), so the network calls themselves
// already have their own coverage elsewhere; searchVideos is injected here the same way media.play's
// own executor injects its lookup functions, rather than re-testing the HTTP layer or hitting the network.
const neverCalled = name => async () => { throw new Error(`${name} must not be called here`); };

test("a real result set returns ok:true with the videos and provider passed through", async () => {
  const results = [{ title: "Maize planting basics", sourceUrl: "https://www.youtube.com/watch?v=abc123", embedUrl: "https://www.youtube.com/embed/abc123" }];
  const execute = createVideoSearchExecutor({ env: {}, searchVideos: async query => { assert.equal(query, "maize planting"); return { provider: "youtube", results }; } });
  const result = await execute({ input: { query: "maize planting" } });
  assert.equal(result.ok, true);
  assert.equal(result.provider, "youtube");
  assert.deepEqual(result.videos, results);
  assert.equal(verifyVideoSearchOutcome({ result }).verified, true);
});

test("an empty query is refused before calling the provider", async () => {
  const execute = createVideoSearchExecutor({ env: {}, searchVideos: neverCalled("searchVideos") });
  const result = await execute({ input: { query: "   " } });
  assert.equal(result.ok, false);
  assert.equal(result.reason, "no_query_given");
  assert.equal(verifyVideoSearchOutcome({ result }).verified, false);
});

test("a real search that finds nothing is reported honestly, not fabricated as success", async () => {
  const execute = createVideoSearchExecutor({ env: {}, searchVideos: async () => ({ provider: "wikimedia-commons", results: [] }) });
  const result = await execute({ input: { query: "a topic with no video coverage anywhere" } });
  assert.equal(result.ok, false);
  assert.equal(result.reason, "no_video_results_found");
  assert.deepEqual(result.videos, []);
  assert.equal(verifyVideoSearchOutcome({ result }).verified, false);
});

test("a provider failure is caught and reported, not thrown, with the failing provider named", async () => {
  const execute = createVideoSearchExecutor({ env: {}, searchVideos: async () => { throw Object.assign(new Error("youtube-search-http-500"), { provider: "youtube" }); } });
  const result = await execute({ input: { query: "irrigation basics" } });
  assert.equal(result.ok, false);
  assert.equal(result.provider, "youtube");
  assert.match(result.reason, /youtube-search-http-500/);
});

test("verifyVideoSearchOutcome refuses a hand-built result claiming success with no real sourceUrl on every video", () => {
  assert.equal(verifyVideoSearchOutcome({ result: { ok: true, videos: [{ title: "no source" }] } }).verified, false);
  assert.equal(verifyVideoSearchOutcome({ result: { ok: true, videos: [] } }).verified, false);
  assert.equal(verifyVideoSearchOutcome({ result: undefined }).verified, false);
});
