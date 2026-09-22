"use strict";

// Real executor for the "media.play" canonical tool. Confirmed live during the 2026-09-22 capability audit: the
// client's own "Nexus, play X" fast path already resolves and verifies real playback (public/app.js's
// playNexusProviderNeutralMusic -> POST /api/music/providers/playback), but the canonical-tool executor used by the
// general multi-step AI-agent planner just echoed back { playbackState: "playing" } with nothing behind it -- a
// plan that included media.play was "verified" without ever checking a real track existed.
//
// This reuses the exact same real lookup functions the client's fast path already goes through
// (server/nexus-music-media-source-provider.js), so both paths agree: a real Apple iTunes Search API preview first
// (no API key needed -- a genuine 30-second clip URL, preflight-checked to actually be playable audio), then a real
// YouTube Data API v3 search (needs YOUTUBE_API_KEY) if no preview track matched well enough.
const musicMediaSourceProvider = require("../../server/nexus-music-media-source-provider.js");

// lookupPreview/lookupVideo are injectable (nexus-music-media-source-provider.js's own exports are frozen, and its
// iTunes/YouTube network logic already has its own test coverage elsewhere -- provider-neutral-music-playback.test.js,
// youtube-embed-preflight.test.js -- so this executor's own tests inject fakes here rather than hitting the network
// or re-testing that module's internals).
function createMediaPlayExecutor({ env = process.env, lookupPreview = musicMediaSourceProvider.runItunesPreviewLookup,
  lookupVideo = musicMediaSourceProvider.runYouTubeReadOnlyLookup } = {}) {
  return async function execute({ input = {} }) {
    const query = String(input.requestedMedia || input.resolvedMedia || input.query || "").trim();
    if (!query) return { ok: false, resolved: false, provider: null, requestedMedia: query, reason: "no_media_requested" };

    const preview = await lookupPreview({ mediaRequest: query }, env);
    if (preview.ok === true && preview.preflightVerified === true && /^https:\/\//i.test(String(preview.audioUrl || ""))) {
      return { ok: true, resolved: true, provider: "apple-itunes-preview", playbackClass: "preview", requestedMedia: query,
        title: preview.title, artist: preview.artist, album: preview.album, audioUrl: preview.audioUrl, providerUrl: preview.providerUrl };
    }

    const video = await lookupVideo({ mediaRequest: query }, env);
    const videoId = /[?&]v=([A-Za-z0-9_-]{6,})/.exec(String(video.sourceUrl || ""))?.[1];
    if (videoId && video.sourceStatus === "source-result-available") {
      const title = String(video.resultSummary || "").replace(/^YouTube video found:\s*/i, "").replace(/\s+—\s+.*$/, "").trim() || query;
      return { ok: true, resolved: true, provider: "youtube", playbackClass: "video", requestedMedia: query, title, videoId };
    }

    // Neither a real preview clip nor a real, embeddable YouTube video was found -- honestly refuse rather than
    // claiming "playing" for nothing, which is exactly what the old canned response did.
    return { ok: false, resolved: false, provider: null, requestedMedia: query,
      reason: preview.error || video.limitationNotes || "no_provider_available" };
  };
}

function verifyMediaPlayOutcome({ result }) {
  const verified = result?.ok === true && result?.resolved === true && (Boolean(result?.audioUrl) || Boolean(result?.videoId));
  return { verified, method: "real_music_provider_lookup", reason: verified ? null : (result?.reason || "no_playable_media_found") };
}

module.exports = Object.freeze({ createMediaPlayExecutor, verifyMediaPlayOutcome });
