"use strict";

// Public radio streams from radio-browser.info (a free, community directory; no key). Live radio is instant, free and has no ads, and works
// on very little data, so it is the first choice for "play radio", "play <station>" and genre requests ("play gospel").
//
// Etiquette (https://docs.radio-browser.info): discover servers from all.api.radio-browser.info, send a descriptive User-Agent, and count a
// "click" only for a station that really started playing (server/media/routes.js -> reportPlayed()).

const { fetchJson, collectVerified, normalizeText, fold, relevance, shuffled, countryCode, ProviderError, httpsOnly } = require("../util.js");
const { buildCandidate } = require("../candidate.js");
const { preflightStream } = require("../preflight.js");

const ID = "radio-browser";
const NAME = "radio-browser.info (public radio)";
const DISCOVERY_URL = "https://all.api.radio-browser.info/json/servers";
const FALLBACK_SERVERS = Object.freeze(["de1.api.radio-browser.info", "de2.api.radio-browser.info", "fr1.api.radio-browser.info", "nl1.api.radio-browser.info"]);
const GENRES = Object.freeze(["gospel", "reggae", "jazz", "afrobeats", "afrobeat", "rumba", "benga", "hiphop", "hip hop", "rnb", "soul", "blues", "country",
  "classical", "pop", "rock", "amapiano", "bongo", "gengetone", "taarab", "worship", "praise", "news", "talk", "sports", "dancehall", "highlife", "afropop", "oldies", "kids"]);
const GENERIC_WORDS = /\b(radio|redio|fm|station|stesheni|online|live|kenya|kenyan|nigeria|nigerian|tanzania|uganda|ghana)\b/gi;

function looksLikeStationOrGenre(query) {
  const text = normalizeText(query).toLowerCase();
  if (!text) return false;
  if (/\b(radio|redio|fm|station|stesheni)\b/.test(text)) return true;
  const folded = fold(text);
  return GENRES.some(genre => folded === genre || folded.split(" ").includes(genre) || folded === `${genre} music`);
}

function stationNameFrom(query) {
  const stripped = normalizeText(String(query || "").replace(GENERIC_WORDS, " ").replace(/\b(music|muziki|some|a|the)\b/gi, " "));
  return stripped;
}

async function discoverServers(ctx) {
  const cached = ctx.cache?.get("radio-browser:servers");
  if (cached) return cached;
  let names = [];
  try {
    const list = await fetchJson(ctx, DISCOVERY_URL, { timeoutMs: 4000 });
    names = (Array.isArray(list) ? list : []).map(item => normalizeText(item?.name)).filter(name => /^[a-z0-9.-]+\.radio-browser\.info$/i.test(name));
  } catch (_) { names = []; }
  const unique = [...new Set(names)];
  const servers = shuffled(unique.length ? unique : FALLBACK_SERVERS, ctx.random);
  ctx.cache?.set("radio-browser:servers", servers, 60 * 60 * 1000);
  return servers;
}

async function queryStations(ctx, servers, params) {
  let lastError = null;
  for (const server of servers.slice(0, 3)) {
    const url = new URL(`https://${server}/json/stations/search`);
    for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== "") url.searchParams.set(key, String(value));
    try {
      const list = await fetchJson(ctx, url, { timeoutMs: 5000 });
      return Array.isArray(list) ? list : [];
    } catch (error) { lastError = error; }
  }
  throw lastError || new ProviderError("no-server", "no radio-browser server answered");
}

function streamUrlFor(station, allowHttp) {
  const raw = normalizeText(station.url_resolved || station.url);
  if (!raw) return [];
  if (httpsOnly(raw)) return [raw];
  if (/^http:\/\//i.test(raw)) {
    // A page served over https may not play an http stream (mixed content): try the https form first, only keep http where explicitly allowed.
    const upgraded = raw.replace(/^http:\/\//i, "https://");
    return allowHttp ? [upgraded, raw] : [upgraded];
  }
  return [];
}

function rank(station, nameQuery) {
  const popularity = Math.log10(1 + Number(station.clickcount || 0)) * 8 + Math.log10(1 + Number(station.votes || 0)) * 3;
  const match = nameQuery ? relevance(nameQuery, `${station.name} ${station.tags || ""}`) * 100 : 0;
  const hlsPenalty = Number(station.hls) === 1 ? 15 : 0;
  const httpsBonus = /^https:/i.test(String(station.url_resolved || station.url || "")) ? 20 : 0;
  const bitrate = Number(station.bitrate || 0);
  const bitratePenalty = bitrate > 192 ? 6 : bitrate > 0 && bitrate < 32 ? 8 : 0;
  return match + popularity + httpsBonus - hlsPenalty - bitratePenalty;
}

async function search(ctx, request) {
  const allowHttp = ctx.env?.NEXUS_MEDIA_ALLOW_HTTP_STREAMS === "true";
  const servers = await discoverServers(ctx);
  const cc = request.countryCode || countryCode(request.country);
  const nameQuery = stationNameFrom(request.query);
  const folded = fold(request.query);
  const genre = GENRES.find(item => folded === item || folded.split(" ").includes(item));
  const base = { hidebroken: "true", order: "clickcount", reverse: "true", limit: 40 };
  const httpsBase = { ...base, is_https: "true" };
  const plans = [];
  if (nameQuery) {
    if (cc) { plans.push({ ...httpsBase, name: nameQuery, countrycode: cc, limit: 25 }); plans.push({ ...base, name: nameQuery, countrycode: cc, limit: 25 }); }
    plans.push({ ...httpsBase, name: nameQuery, limit: 25 });
    if (genre) {
      if (cc) plans.push({ ...httpsBase, tag: genre, tagExact: "true", countrycode: cc });
      plans.push({ ...httpsBase, tag: genre, tagExact: "true" });
    }
  } else {
    if (cc) { plans.push({ ...httpsBase, countrycode: cc }); plans.push({ ...base, countrycode: cc }); }
    plans.push({ ...httpsBase, language: request.language === "sw" ? "swahili" : "english" });
    plans.push({ ...httpsBase });
  }

  const exclude = new Set(request.excludeIds || []);
  let attempted = 0;
  for (const plan of plans) {
    attempted += 1;
    let stations;
    try { stations = await queryStations(ctx, servers, plan); } catch (error) { if (attempted === plans.length) throw error; continue; }
    const ranked = stations
      .filter(station => station && station.stationuuid && Number(station.lastcheckok) !== 0)
      .filter(station => !exclude.has(`${ID}:${station.stationuuid}`) && !exclude.has(station.stationuuid))
      .filter(station => (nameQuery ? relevance(nameQuery, `${station.name} ${station.tags || ""}`) > 0 || plan.tag : true))
      .map(station => ({ station, score: rank(station, plan.tag ? "" : nameQuery) }))
      .sort((a, b) => b.score - a.score);
    // Check the best stations at the same time (a dead stream costs its timeout once, not once per station), keep them in rank order.
    const seen = new Set();
    const contenders = [];
    for (const entry of ranked) {
      const key = fold(entry.station.name);
      if (seen.has(key)) continue;
      seen.add(key);
      contenders.push(entry);
      if (contenders.length >= 12) break;
    }
    const checked = await collectVerified(contenders.map(({ station, score }) => async () => {
      for (const url of streamUrlFor(station, allowHttp)) {
        const check = await preflightStream(ctx, url, { timeoutMs: 3000 });
        if (check.ok) return { station, score, url, check };
      }
      return null;
    }), { want: 4, graceMs: 800 });
    const candidates = checked.slice(0, 5).map(({ station, score, url, check }) => buildCandidate({
      provider: ID, providerName: NAME, nativeId: station.stationuuid, playbackClass: "audio", delivery: "stream", url,
      title: normalizeText(station.name) || "Radio station", artist: [station.country, station.tags?.split(",").slice(0, 2).join(", ")].filter(Boolean).join(" · "),
      live: true, isPreview: false, attribution: `${normalizeText(station.name)} · public stream via radio-browser.info`,
      license: "Public radio stream (listen live)", verified: true, hls: check.hls, mimeType: check.contentType,
      sourceUrl: normalizeText(station.homepage) || undefined, artworkUrl: httpsOnly(station.favicon) ? station.favicon : undefined,
      country: station.countrycode, score
    }));
    if (candidates.length) return { candidates, note: plan.tag ? `matched radio stations tagged ${plan.tag}` : plan.name ? "matched station name" : "popular stations" };
  }
  return { candidates: [], note: "no working station found" };
}

// Counts one "click" for a station the person really listened to (the documented etiquette). Best effort; failures are ignored.
async function reportPlayed(ctx, stationUuid) {
  if (!/^[0-9a-f-]{8,64}$/i.test(String(stationUuid || ""))) return false;
  const servers = await discoverServers(ctx);
  for (const server of servers.slice(0, 2)) {
    try {
      await fetchJson(ctx, `https://${server}/json/url/${encodeURIComponent(stationUuid)}`, { timeoutMs: 4000 });
      return true;
    } catch (_) { /* try the next server */ }
  }
  return false;
}

module.exports = Object.freeze({ id: ID, name: NAME, looksLikeStationOrGenre, stationNameFrom, search, reportPlayed, discoverServers,
  isConfigured: () => ({ configured: true, requires: [] }) });
