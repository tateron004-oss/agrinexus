"use strict";

// YouTube: the official Data API (needs a key) to FIND a video, and only the official IFrame player (embed) or a normal youtube.com link
// (hand-off) to PLAY it. Nothing is downloaded, extracted or re-streamed. Search is restricted to embeddable videos, safeSearch=moderate.
//
// A search costs 100 of the default 10,000 daily units, so every search goes through the quota guard (server/media/state.js) and the
// result is cached for a few hours: asking for the same song again costs nothing.

const { fetchJson, normalizeText, fold, relevance, countryCode, ProviderError } = require("../util.js");
const { buildCandidate } = require("../candidate.js");
const { checkYoutubeEmbeddable } = require("../preflight.js");
const { SEARCH_COST, LIST_COST } = require("../state.js");

const ID = "youtube";
const NAME = "YouTube";
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const VIDEOS_URL = "https://www.googleapis.com/youtube/v3/videos";
const CACHE_TTL_MS = 4 * 60 * 60 * 1000;

function apiKey(env) {
  return normalizeText(env?.YOUTUBE_API_KEY || env?.NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY || env?.NEXUS_MEDIA_PROVIDER_API_KEY);
}

function isConfigured(ctx) {
  return { configured: Boolean(apiKey(ctx?.env || process.env)), requires: ["YOUTUBE_API_KEY"] };
}

function parseIsoDuration(value) {
  const match = /^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(String(value || ""));
  if (!match) return null;
  return (Number(match[1] || 0) * 86400) + (Number(match[2] || 0) * 3600) + (Number(match[3] || 0) * 60) + Number(match[4] || 0);
}

function rankTitle(title, query, kind) {
  const text = fold(title);
  const wanted = fold(query);
  let score = relevance(query, title) * 100;
  if (kind === "music") {
    if (/\b(official|audio|lyrics?|lyric video)\b/.test(text)) score += 12;
    for (const bad of ["karaoke", "reaction", "slowed", "8d", "nightcore", "sped up", "tutorial", "cover", "remix", "instrumental"]) {
      if (text.includes(bad) && !wanted.includes(bad)) score -= 25;
    }
  }
  return score;
}

function blockedIn(item, cc) {
  if (!cc) return false;
  const restriction = item?.contentDetails?.regionRestriction;
  if (!restriction) return false;
  if (Array.isArray(restriction.blocked) && restriction.blocked.includes(cc)) return true;
  if (Array.isArray(restriction.allowed) && restriction.allowed.length && !restriction.allowed.includes(cc)) return true;
  return false;
}

function quotaError(error) {
  const reason = error?.body?.error?.errors?.[0]?.reason || "";
  return error?.status === 403 && /quota|dailyLimit|rateLimit/i.test(reason + " " + (error?.body?.error?.message || ""));
}

async function search(ctx, request) {
  const key = apiKey(ctx.env);
  if (!key) throw new ProviderError("not-configured", "YOUTUBE_API_KEY is not set");
  const kind = request.kind === "video" ? "video" : "music";
  const cc = request.countryCode || countryCode(request.country);
  const creativeCommons = request.creativeCommonsOnly === true;
  const cacheKey = `youtube:${kind}:${cc}:${creativeCommons ? "cc" : "any"}:${fold(request.query)}`;
  const exclude = new Set(request.excludeIds || []);
  const cached = ctx.cache?.get(cacheKey);
  if (cached) {
    const filtered = cached.filter(candidate => !exclude.has(candidate.id) && !exclude.has(candidate.videoId));
    return { candidates: filtered, note: "served from the recent-search cache (no YouTube quota used)", cached: true };
  }
  if (ctx.state && !ctx.state.canSpendYoutube(SEARCH_COST)) throw new ProviderError("quota-exhausted", "the daily YouTube quota is used up");

  const url = new URL(SEARCH_URL);
  url.searchParams.set("part", "snippet");
  url.searchParams.set("type", "video");
  url.searchParams.set("videoEmbeddable", "true");
  url.searchParams.set("videoSyndicated", "true");
  url.searchParams.set("safeSearch", "moderate");
  url.searchParams.set("maxResults", "10");
  if (kind === "music") url.searchParams.set("videoCategoryId", "10");
  if (cc) url.searchParams.set("regionCode", cc);
  if (creativeCommons) url.searchParams.set("videoLicense", "creativeCommon");
  url.searchParams.set("q", request.query);
  url.searchParams.set("key", key);
  ctx.state?.spendYoutube(SEARCH_COST);
  let searchPayload;
  try {
    searchPayload = await fetchJson(ctx, url, { timeoutMs: 7000 });
  } catch (error) {
    if (quotaError(error)) { ctx.state?.markYoutubeExhausted(); throw new ProviderError("quota-exhausted", "YouTube says the daily quota is used up"); }
    throw error;
  }
  const items = (Array.isArray(searchPayload?.items) ? searchPayload.items : [])
    .filter(item => /^[A-Za-z0-9_-]{6,}$/.test(String(item?.id?.videoId || "")) && item?.snippet?.liveBroadcastContent !== "upcoming");
  if (!items.length) return { candidates: [], note: "YouTube returned no embeddable results" };

  const detailsUrl = new URL(VIDEOS_URL);
  detailsUrl.searchParams.set("part", "status,contentDetails");
  detailsUrl.searchParams.set("id", items.map(item => item.id.videoId).join(","));
  detailsUrl.searchParams.set("key", key);
  ctx.state?.spendYoutube(LIST_COST);
  let details;
  try { details = await fetchJson(ctx, detailsUrl, { timeoutMs: 6000 }); } catch (error) {
    if (quotaError(error)) ctx.state?.markYoutubeExhausted();
    throw error;
  }
  const detailById = new Map((details?.items || []).map(item => [item.id, item]));
  const eligible = items.filter(item => {
    const detail = detailById.get(item.id.videoId);
    if (!detail || detail.status?.embeddable !== true || detail.status?.privacyStatus !== "public") return false;
    if (blockedIn(detail, cc)) return false;
    const seconds = parseIsoDuration(detail.contentDetails?.duration);
    if (kind === "music" && seconds && seconds > 20 * 60 && !/\b(mix|album|playlist|hour|nonstop|non stop)\b/i.test(request.query)) return false;
    if (kind === "video" && seconds !== null && seconds < 10) return false;
    return true;
  }).map(item => ({ item, score: rankTitle(item.snippet.title, request.query, kind) })).sort((a, b) => b.score - a.score);

  const embeddable = await Promise.all(eligible.slice(0, 6).map(async entry => ({ ...entry, ok: await checkYoutubeEmbeddable(ctx, entry.item.id.videoId) })));
  const candidates = embeddable.filter(entry => entry.ok).slice(0, 5).map(({ item, score }) => {
    const detail = detailById.get(item.id.videoId);
    return buildCandidate({
      provider: ID, providerName: NAME, nativeId: item.id.videoId, videoId: item.id.videoId, playbackClass: "video", delivery: "youtube",
      title: normalizeText(item.snippet.title), artist: normalizeText(item.snippet.channelTitle),
      durationSec: parseIsoDuration(detail?.contentDetails?.duration), live: item.snippet.liveBroadcastContent === "live", isPreview: false,
      attribution: `${normalizeText(item.snippet.title)} — ${normalizeText(item.snippet.channelTitle)} on YouTube (official player)`,
      license: "YouTube standard licence; played in YouTube's own embedded player", verified: true,
      sourceUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      artworkUrl: item.snippet.thumbnails?.medium?.url, score
    });
  });
  if (candidates.length) ctx.cache?.set(cacheKey, candidates, CACHE_TTL_MS);
  return { candidates, note: candidates.length ? "embeddable, public, safeSearch=moderate" : "no result passed the embeddability check" };
}

// Hand-off link: a normal youtube.com URL. Opens the YouTube app on a phone that has it, a new tab on a computer.
function handoffFor(candidate, query) {
  if (candidate?.videoId) {
    return { provider: ID, kind: "video", url: `https://www.youtube.com/watch?v=${encodeURIComponent(candidate.videoId)}`, videoId: candidate.videoId,
      title: candidate.title, artist: candidate.artist };
  }
  return searchHandoff(query);
}

function searchHandoff(query) {
  return { provider: ID, kind: "search", url: `https://www.youtube.com/results?search_query=${encodeURIComponent(normalizeText(query))}`, videoId: null,
    title: normalizeText(query), artist: "" };
}

module.exports = Object.freeze({ id: ID, name: NAME, search, isConfigured, apiKey, parseIsoDuration, handoffFor, searchHandoff, SEARCH_URL, VIDEOS_URL });
