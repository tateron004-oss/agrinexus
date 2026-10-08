"use strict";

// Real executor for the "media.play" canonical tool. Confirmed live during the 2026-09-22 capability audit: the
// client's own "Nexus, play X" fast path already resolves and verifies real playback, but the canonical-tool executor used by the
// general multi-step AI-agent planner just echoed back { playbackState: "playing" } with nothing behind it -- a
// plan that included media.play was "verified" without ever checking a real track existed.
//
// It now uses the same resolver the phone uses (server/media/resolver.js): public radio, Audius full tracks, YouTube (official embed),
// Jamendo, Internet Archive, and the Apple 30-second preview LAST. Every candidate it returns was preflight-checked on the server
// (the stream answered with audio, or YouTube's oEmbed accepted the video), so media.play keeps returning a verified playable
// candidate -- and the production acceptance probe keeps working even when YouTube is not configured, because the preview is
// always the final fallback. "Playing" is still only ever claimed by the phone, after its own player really started.
//
// lookupPreview/lookupVideo are the original single-provider lookups. They stay as the fallback when the resolver finds nothing or fails,
// and when a caller (a test) injects them without a resolver the executor behaves exactly as before.
const musicMediaSourceProvider = require("../../server/nexus-music-media-source-provider.js");

function defaultResolve(request) {
  return require("../../server/media/runtime.js").getMediaRuntime().resolve(request);
}

function createMediaPlayExecutor({ env = process.env, lookupPreview, lookupVideo, resolveMedia } = {}) {
  const legacyOnly = !resolveMedia && Boolean(lookupPreview || lookupVideo);
  const preview = lookupPreview || musicMediaSourceProvider.runItunesPreviewLookup;
  const video = lookupVideo || musicMediaSourceProvider.runYouTubeReadOnlyLookup;
  const resolve = resolveMedia || defaultResolve;

  return async function execute({ input = {} }) {
    const query = String(input.requestedMedia || input.resolvedMedia || input.query || "").trim();
    const kind = ["music", "radio", "video"].includes(input.kind) ? input.kind : "music";
    // "Play music" with nothing named is allowed: a local radio station is started.
    if (!query && !(kind === "radio" || (kind === "music" && input.allowEmpty === true))) {
      return { ok: false, resolved: false, provider: null, requestedMedia: query, reason: "no_media_requested" };
    }

    let resolverReason = "";
    if (!legacyOnly) {
      try {
        const found = await resolve({ query, kind, country: input.country, language: input.language, handoff: input.handoff === true });
        if (found?.mode === "handoff" && found.handoff?.url) {
          return { ok: true, resolved: true, provider: "youtube", playbackClass: "handoff", requestedMedia: query, kind, mode: "handoff",
            handoffUrl: found.handoff.url, handoffKind: found.handoff.kind, videoId: found.handoff.videoId || undefined,
            title: found.handoff.title || query, playbackState: "queued" };
        }
        const best = found?.ok ? found.candidates[0] : null;
        if (best) return fromCandidate(best, query, kind, found);
        resolverReason = found?.reason || "";
      } catch (error) {
        resolverReason = String(error?.message || "resolver_failed").slice(0, 160);
      }
    }

    const found = await preview({ mediaRequest: query }, env);
    if (found.ok === true && found.preflightVerified === true && /^https:\/\//i.test(String(found.audioUrl || ""))) {
      return { ok: true, resolved: true, provider: "apple-itunes-preview", playbackClass: "preview", isPreview: true, requestedMedia: query,
        title: found.title, artist: found.artist, album: found.album, audioUrl: found.audioUrl, providerUrl: found.providerUrl };
    }

    const videoResult = await video({ mediaRequest: query }, env);
    const videoId = /[?&]v=([A-Za-z0-9_-]{6,})/.exec(String(videoResult.sourceUrl || ""))?.[1];
    if (videoId && videoResult.sourceStatus === "source-result-available") {
      const title = String(videoResult.resultSummary || "").replace(/^YouTube video found:\s*/i, "").replace(/\s+—\s+.*$/, "").trim() || query;
      return { ok: true, resolved: true, provider: "youtube", playbackClass: "video", requestedMedia: query, title, videoId };
    }

    // Nothing real was found: honestly refuse rather than claiming "playing" for nothing, which is exactly what the old canned response did.
    return { ok: false, resolved: false, provider: null, requestedMedia: query,
      reason: found.error || videoResult.limitationNotes || resolverReason || "no_provider_available" };
  };
}

function fromCandidate(candidate, query, kind, found) {
  const common = {
    ok: true, resolved: true, provider: candidate.provider, providerName: candidate.providerName, requestedMedia: query, kind,
    title: candidate.title, artist: candidate.artist, live: candidate.live === true, isPreview: candidate.isPreview === true,
    attribution: candidate.attribution, license: candidate.license, candidateCount: found.candidates.length
  };
  if (candidate.delivery === "youtube") return { ...common, playbackClass: "video", videoId: candidate.videoId };
  if (candidate.playbackClass === "video") return { ...common, playbackClass: "video", videoUrl: candidate.url };
  return { ...common, playbackClass: candidate.isPreview ? "preview" : "audio", audioUrl: candidate.url, providerUrl: candidate.sourceUrl };
}

function verifyMediaPlayOutcome({ result }) {
  const verified = result?.ok === true && result?.resolved === true &&
    (Boolean(result?.audioUrl) || Boolean(result?.videoId) || Boolean(result?.videoUrl) || Boolean(result?.handoffUrl));
  return { verified, method: "real_music_provider_lookup", reason: verified ? null : (result?.reason || "no_playable_media_found") };
}

module.exports = Object.freeze({ createMediaPlayExecutor, verifyMediaPlayOutcome });
