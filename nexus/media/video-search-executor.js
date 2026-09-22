"use strict";

// Real executor for the "videos.search" canonical tool -- closes a real gap the 2026-09-22 capability
// audit found: "view videos" (general video search -- "show me videos of X") had NO path at all through
// the primary/authoritative runtime. Real video search already existed, but only on the older legacy
// chat-tool path (server.js's nexus_visual_analysis), via server/providers/videoSearchProvider.js
// (extracted from that same legacy code so both paths share one real implementation, not two).
//
// Same two-provider shape as that legacy path: real YouTube Data API v3 search first (embeddable/
// public/syndicated results with a real oEmbed preflight check) when YOUTUBE_API_KEY is configured,
// falling back to real, key-free Wikimedia Commons video search otherwise -- so video search still
// works with zero configuration, unlike media.play's YouTube fallback which needs the key.
const videoSearchProvider = require("../../server/providers/videoSearchProvider.js");

function createVideoSearchExecutor({ env = process.env, searchVideos = videoSearchProvider.searchVideos } = {}) {
  return async function execute({ input = {} }) {
    const query = String(input.query || "").trim();
    if (!query) return { ok: false, videos: [], provider: null, query, reason: "no_query_given" };
    try {
      const { provider, results } = await searchVideos(query, env);
      if (!results || !results.length) return { ok: false, videos: [], provider, query, reason: "no_video_results_found" };
      return { ok: true, videos: results, provider, query };
    } catch (error) {
      return { ok: false, videos: [], provider: error.provider || null, query, reason: String(error.message || "video_search_failed").slice(0, 200) };
    }
  };
}

function verifyVideoSearchOutcome({ result }) {
  const verified = result?.ok === true && Array.isArray(result?.videos) && result.videos.length > 0
    && result.videos.every(video => Boolean(video?.sourceUrl));
  return { verified, method: "real_video_search", reason: verified ? null : (result?.reason || "no_verified_video_result") };
}

module.exports = Object.freeze({ createVideoSearchExecutor, verifyVideoSearchOutcome });
