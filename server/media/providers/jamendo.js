"use strict";

// Jamendo (Creative Commons / independent music), only when JAMENDO_CLIENT_ID is configured. The free API key is for non-commercial use;
// commercial use needs a Jamendo licensing agreement (see docs/MEDIA_PLAYBACK.md).

const { fetchJson, normalizeText, relevance, httpsOnly } = require("../util.js");
const { buildCandidate } = require("../candidate.js");
const { preflightStream } = require("../preflight.js");

const ID = "jamendo";
const NAME = "Jamendo";
const API_URL = "https://api.jamendo.com/v3.0/tracks/";

function clientId(env) {
  return normalizeText(env?.JAMENDO_CLIENT_ID);
}

function isConfigured(ctx) {
  const configured = Boolean(clientId(ctx?.env || process.env));
  return { configured, requires: ["JAMENDO_CLIENT_ID"] };
}

async function search(ctx, request) {
  const id = clientId(ctx.env);
  const url = new URL(API_URL);
  url.searchParams.set("client_id", id);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "12");
  url.searchParams.set("search", request.query);
  url.searchParams.set("audioformat", "mp32");
  url.searchParams.set("include", "musicinfo");
  url.searchParams.set("order", "relevance");
  const payload = await fetchJson(ctx, url, { timeoutMs: 5000 });
  const exclude = new Set(request.excludeIds || []);
  const candidates = [];
  const ranked = (Array.isArray(payload?.results) ? payload.results : [])
    .filter(track => track?.id && httpsOnly(track.audio) && !exclude.has(`${ID}:${track.id}`))
    .map(track => ({ track, score: relevance(request.query, `${track.name} ${track.artist_name}`) }))
    .filter(item => item.score >= 0.6)
    .sort((a, b) => b.score - a.score);
  for (const { track, score } of ranked.slice(0, 5)) {
    if (candidates.length >= 3) break;
    const check = await preflightStream(ctx, track.audio, { timeoutMs: 5000 });
    if (!check.ok) continue;
    candidates.push(buildCandidate({
      provider: ID, providerName: NAME, nativeId: track.id, playbackClass: "audio", delivery: "stream", url: track.audio,
      title: normalizeText(track.name), artist: normalizeText(track.artist_name), durationSec: Number(track.duration), live: false, isPreview: false,
      attribution: `${normalizeText(track.name)} by ${normalizeText(track.artist_name)} on Jamendo`,
      license: track.license_ccurl ? `Creative Commons (${track.license_ccurl})` : "Jamendo licence", verified: true, mimeType: check.contentType,
      sourceUrl: httpsOnly(track.shareurl) ? track.shareurl : undefined, artworkUrl: httpsOnly(track.image) ? track.image : undefined, score
    }));
  }
  return { candidates, note: candidates.length ? "matched tracks" : "no close match" };
}

module.exports = Object.freeze({ id: ID, name: NAME, search, isConfigured });
