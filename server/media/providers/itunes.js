"use strict";

// Apple iTunes Search API: official 30-second PREVIEW clips only. Always the last resort for music and always labelled isPreview:true,
// so Kyro says "a 30-second preview" rather than pretending it is the whole song. Reuses the existing, tested lookup + preflight.

const musicMedia = require("../../nexus-music-media-source-provider.js");
const { buildCandidate } = require("../candidate.js");

const ID = "apple-itunes-preview";
const NAME = "Apple iTunes Search API";

// Apple serves its preview files as "audio/x-m4p" (an AAC .m4a in an MP4 container). Browsers answer canPlayType("audio/x-m4p") with "" even though they
// play the file, so the label handed to the phone is the standard one.
function normalizeAudioMime(type) {
  const value = String(type || "").toLowerCase().split(";")[0].trim();
  return /^audio\/x-m4[abp]$/.test(value) || value === "audio/m4a" ? "audio/mp4" : value;
}

async function search(ctx, request) {
  const env = { ...ctx.env, NEXUS_MUSIC_MEDIA_FETCH_IMPL: ctx.fetch };
  const preview = await musicMedia.runItunesPreviewLookup({ mediaRequest: request.query, country: request.countryCode || "US" }, env);
  if (!(preview.ok === true && preview.preflightVerified === true && /^https:\/\//i.test(String(preview.audioUrl || "")))) {
    return { candidates: [], note: preview.error || "no matching preview" };
  }
  return {
    candidates: [buildCandidate({
      provider: ID, providerName: NAME, nativeId: preview.audioUrl, playbackClass: "audio", delivery: "stream", url: preview.audioUrl,
      title: preview.title, artist: preview.artist, durationSec: 30, live: false, isPreview: true,
      attribution: `30-second preview of ${preview.title} by ${preview.artist} from Apple`, license: "Apple 30-second preview", verified: true,
      mimeType: normalizeAudioMime(preview.contentType), sourceUrl: preview.providerUrl || undefined, artworkUrl: preview.artworkUrl || undefined
    })],
    raw: preview,
    note: "30-second preview only"
  };
}

module.exports = Object.freeze({ id: ID, name: NAME, search, normalizeAudioMime, isConfigured: () => ({ configured: true, requires: [] }) });
