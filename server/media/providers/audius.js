"use strict";

// Audius (https://audius.co): artist-uploaded full-length tracks through its free public API (no key; an app name is required by its terms).
// The phone plays the stream URL directly from Audius' own servers; nothing is downloaded or relayed by Kyro.

const { fetchJson, normalizeText, fold, relevance, shuffled, ProviderError, httpsOnly, APP_NAME } = require("../util.js");
const { buildCandidate } = require("../candidate.js");
const { preflightStream } = require("../preflight.js");

const ID = "audius";
const NAME = "Audius";
const HOST_DISCOVERY_URL = "https://api.audius.co";
const FALLBACK_HOSTS = Object.freeze(["https://discoveryprovider.audius.co", "https://discoveryprovider2.audius.co", "https://discoveryprovider3.audius.co"]);

async function discoverHosts(ctx) {
  const cached = ctx.cache?.get("audius:hosts");
  if (cached) return cached;
  let hosts = [];
  try {
    const payload = await fetchJson(ctx, HOST_DISCOVERY_URL, { timeoutMs: 4000 });
    hosts = (Array.isArray(payload?.data) ? payload.data : []).map(normalizeText).filter(httpsOnly);
  } catch (_) { hosts = []; }
  const list = shuffled(hosts.length ? hosts : FALLBACK_HOSTS, ctx.random);
  ctx.cache?.set("audius:hosts", list, 30 * 60 * 1000);
  return list;
}

// Audius has no dependable "explicit" field in its public API, so this checks every signal that may be present and also the wording.
function looksExplicit(track) {
  if (track?.is_explicit === true || track?.explicit === true || track?.isExplicit === true) return true;
  if (track?.parental_warning_type) return true;
  const text = `${track?.title || ""} ${track?.tags || ""} ${track?.description || ""}`;
  return /\b(explicit|nsfw|18\+|uncensored|dirty version)\b/i.test(text);
}

function playable(track) {
  if (!track?.id || !normalizeText(track.title)) return false;
  if (track.is_streamable === false || track.is_unlisted === true || track.is_delete === true) return false;
  if (track.stream_conditions || track.access?.stream === false) return false; // gated: only for paying/ token-holding listeners
  return true;
}

async function search(ctx, request) {
  const hosts = await discoverHosts(ctx);
  let payload = null;
  let lastError = null;
  let host = "";
  for (const candidateHost of hosts.slice(0, 3)) {
    const url = new URL(`${candidateHost.replace(/\/$/, "")}/v1/tracks/search`);
    url.searchParams.set("query", request.query);
    url.searchParams.set("app_name", APP_NAME);
    url.searchParams.set("limit", "20");
    try { payload = await fetchJson(ctx, url, { timeoutMs: 5000 }); host = candidateHost; break; } catch (error) { lastError = error; }
  }
  if (!payload) throw lastError || new ProviderError("no-host", "no Audius host answered");
  const exclude = new Set(request.excludeIds || []);
  const tracks = Array.isArray(payload?.data) ? payload.data : [];
  let skippedExplicit = 0;
  const ranked = [];
  for (const track of tracks) {
    if (!playable(track)) continue;
    if (looksExplicit(track)) { skippedExplicit += 1; continue; }
    if (exclude.has(`${ID}:${track.id}`) || exclude.has(String(track.id))) continue;
    const text = `${track.title} ${track.user?.name || ""} ${track.user?.handle || ""}`;
    const score = relevance(request.query, text);
    // A song request needs most of its words to match; a loose match would play the wrong music.
    if (score < 0.6) continue;
    ranked.push({ track, score: score * 100 + Math.log10(1 + Number(track.play_count || 0)) * 4 });
  }
  ranked.sort((a, b) => b.score - a.score);
  const candidates = [];
  for (const { track, score } of ranked.slice(0, 6)) {
    if (candidates.length >= 4) break;
    const streamUrl = `${host.replace(/\/$/, "")}/v1/tracks/${encodeURIComponent(track.id)}/stream?app_name=${encodeURIComponent(APP_NAME)}`;
    const check = await preflightStream(ctx, streamUrl, { timeoutMs: 5000 });
    if (!check.ok) continue;
    const artwork = track.artwork?.["480x480"] || track.artwork?.["150x150"] || "";
    candidates.push(buildCandidate({
      provider: ID, providerName: NAME, nativeId: track.id, playbackClass: "audio", delivery: "stream", url: streamUrl,
      title: normalizeText(track.title), artist: normalizeText(track.user?.name || track.user?.handle || ""),
      durationSec: Number(track.duration), live: false, isPreview: false,
      attribution: `${normalizeText(track.title)} by ${normalizeText(track.user?.name || "an Audius artist")} on Audius`,
      license: "Streamed from Audius under the artist's upload terms", verified: true, mimeType: check.contentType,
      sourceUrl: track.permalink ? `https://audius.co${track.permalink}` : undefined, artworkUrl: httpsOnly(artwork) ? artwork : undefined, score
    }));
  }
  return { candidates, note: skippedExplicit ? `skipped ${skippedExplicit} explicit track(s)` : candidates.length ? "matched tracks" : "no close match" };
}

module.exports = Object.freeze({ id: ID, name: NAME, search, looksExplicit, playable, discoverHosts, isConfigured: () => ({ configured: true, requires: [] }) });
