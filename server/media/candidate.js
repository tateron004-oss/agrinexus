"use strict";

// The one candidate shape every provider returns, so the phone has a single thing to play:
//
// { id, provider, providerName, playbackClass: 'audio'|'video', delivery: 'stream'|'youtube'|'embed',
//   url | videoId, title, artist, durationSec|null, live, isPreview, attribution, license, verified, ... }
//
// `verified` means the server's preflight succeeded (stream reachable and really media, or YouTube oEmbed accepted). It does NOT mean it
// has played: only the phone's own player can say that, and Kyro only claims "playing" after that.

const { clip, normalizeText } = require("./util.js");

function buildCandidate(fields) {
  const delivery = fields.delivery || "stream";
  const nativeId = String(fields.nativeId || fields.videoId || fields.url || "").slice(0, 200);
  const candidate = {
    id: `${fields.provider}:${nativeId}`,
    provider: fields.provider,
    providerName: fields.providerName || fields.provider,
    playbackClass: fields.playbackClass === "video" ? "video" : "audio",
    delivery,
    title: clip(fields.title || "Untitled", 180),
    artist: clip(fields.artist || "", 140),
    durationSec: Number.isFinite(fields.durationSec) && fields.durationSec > 0 ? Math.round(fields.durationSec) : null,
    live: fields.live === true,
    isPreview: fields.isPreview === true,
    attribution: clip(fields.attribution || fields.providerName || fields.provider, 200),
    license: clip(fields.license || "", 160),
    verified: fields.verified === true,
    ...(delivery === "youtube" ? { videoId: String(fields.videoId || "") } : { url: String(fields.url || "") }),
    ...(fields.sourceUrl ? { sourceUrl: String(fields.sourceUrl) } : {}),
    ...(fields.artworkUrl ? { artworkUrl: String(fields.artworkUrl) } : {}),
    ...(fields.mimeType ? { mimeType: normalizeText(fields.mimeType) } : {}),
    ...(fields.hls === true ? { hls: true } : {}),
    ...(fields.country ? { country: String(fields.country) } : {}),
    ...(fields.language ? { language: String(fields.language) } : {}),
    ...(fields.score !== undefined ? { score: Number(fields.score) } : {})
  };
  return candidate;
}

module.exports = Object.freeze({ buildCandidate });
