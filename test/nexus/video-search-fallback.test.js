"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { searchVideos } = require("../../server/providers/videoSearchProvider.js");

// Found live (server/providers/ sweep): searchVideos() rethrows ANY YouTube failure (not just "no key
// configured") instead of falling back to Wikimedia Commons, contradicting this file's own header
// comment that the Commons fallback is why "view videos" should never be fully unreachable. A genuine
// YouTube failure (quota exceeded, outage, bad key) is the realistic production failure mode -- YouTube's
// search quota is small (100 units/call against a 10,000/day budget) -- and it made Commons completely
// unreachable whenever it happened.
function fakeFetch({ youtubeOk = false, youtubeStatus = 403, commonsOk = true, commonsPages = {} } = {}) {
  return async url => {
    const href = String(url);
    if (href.includes("/youtube/v3/search") || href.includes("/youtube/v3/videos")) {
      return { ok: youtubeOk, status: youtubeOk ? 200 : youtubeStatus, json: async () => ({ error: { message: "quotaExceeded" } }) };
    }
    if (href.includes("commons.wikimedia.org")) {
      return { ok: commonsOk, status: commonsOk ? 200 : 503, json: async () => ({ query: { pages: commonsPages } }) };
    }
    throw new Error(`unexpected fetch call: ${href}`);
  };
}

test("a real YouTube provider failure (quota/outage) falls through to Commons instead of making video search unreachable", async () => {
  const original = global.fetch;
  global.fetch = fakeFetch({
    youtubeOk: false,
    commonsOk: true,
    commonsPages: { 1: { title: "File:Maize planting.webm", imageinfo: [{ url: "https://commons.wikimedia.org/x.webm", mime: "video/webm", descriptionurl: "https://commons.wikimedia.org/wiki/File:Maize_planting.webm", extmetadata: {} }] } }
  });
  try {
    const result = await searchVideos("maize planting", { YOUTUBE_API_KEY: "test-key" });
    assert.equal(result.provider, "wikimedia-commons");
    assert.equal(result.results.length, 1);
    assert.equal(result.results[0].sourceUrl, "https://commons.wikimedia.org/wiki/File:Maize_planting.webm");
  } finally {
    global.fetch = original;
  }
});

test("when both YouTube and Commons genuinely fail, the YouTube error is surfaced (not silently swallowed)", async () => {
  const original = global.fetch;
  global.fetch = fakeFetch({ youtubeOk: false, commonsOk: false });
  try {
    await assert.rejects(
      () => searchVideos("maize planting", { YOUTUBE_API_KEY: "test-key" }),
      error => { assert.equal(error.provider, "youtube"); assert.match(error.message, /quotaExceeded|youtube-search-http/); return true; }
    );
  } finally {
    global.fetch = original;
  }
});

test("no YouTube key configured still works unaffected by the fix -- goes straight to Commons", async () => {
  const original = global.fetch;
  global.fetch = fakeFetch({
    commonsOk: true,
    commonsPages: { 1: { title: "File:Irrigation basics.ogv", imageinfo: [{ url: "https://commons.wikimedia.org/y.ogv", mime: "video/ogg", descriptionurl: "https://commons.wikimedia.org/wiki/File:Irrigation_basics.ogv", extmetadata: {} }] } }
  });
  try {
    const result = await searchVideos("irrigation basics", {});
    assert.equal(result.provider, "wikimedia-commons");
    assert.equal(result.results.length, 1);
  } finally {
    global.fetch = original;
  }
});
