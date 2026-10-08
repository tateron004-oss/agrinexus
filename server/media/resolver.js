"use strict";

// resolveMedia(): turns "what the person asked for" into an ordered list of candidates the phone can really play, plus an honest account of
// which providers were tried and why each did or did not help.
//
// Order -- music:  radio-browser (when the request is a station or a genre), Audius, YouTube (key + daily quota guard), Jamendo (client id),
//                  Internet Archive audio, Apple 30-second preview LAST (always labelled a preview).
//          radio:  radio-browser (a local popular station when no name is given).
//          video:  YouTube (key), Internet Archive moving images, Wikimedia Commons.
// Providers are tried in order and the search stops at the first one that has a playable match: later providers (and YouTube's scarce quota)
// are used only when an earlier one cannot help, or when the phone asks again with excludeIds after a candidate failed to play.
//
// Nothing here downloads, extracts or relays media. Every candidate is a URL the phone's own player opens directly from the provider.

const util = require("./util.js");
const radioBrowser = require("./providers/radio-browser.js");
const audius = require("./providers/audius.js");
const youtube = require("./providers/youtube.js");
const jamendo = require("./providers/jamendo.js");
const internetArchive = require("./providers/internet-archive.js");
const commons = require("./providers/commons.js");
const itunes = require("./providers/itunes.js");

const { normalizeText, countryCode } = util;
const MAX_CANDIDATES = 8;
const PREVIEW_WAIT_MS = 6000;

const PROVIDERS = Object.freeze({
  [radioBrowser.id]: radioBrowser, [audius.id]: audius, [youtube.id]: youtube, [jamendo.id]: jamendo,
  [internetArchive.id]: internetArchive, [commons.id]: commons, [itunes.id]: itunes
});

// "play", "please", "cheza" and similar are the command, not the thing to search for.
const GENERIC_REQUESTS = new Set(["music", "songs", "song", "a song", "some music", "something", "radio", "redio", "muziki", "wimbo", "nyimbo", "a radio station", "radio station"]);

function cleanQuery(value) {
  const cleaned = cleanQueryText(value);
  return GENERIC_REQUESTS.has(cleaned.toLowerCase()) ? "" : cleaned;
}

function cleanQueryText(value) {
  return normalizeText(String(value || "")
    .replace(/^\s*(?:(?:hey\s+)?(?:kyro|nexus)[,:]?\s+)?(?:please|tafadhali)?\s*/i, "")
    .replace(/^(?:play|cheza|weka|put on|listen to|sikiliza|watch|angalia)\s+/i, "")
    .replace(/\b(?:please|tafadhali|for me|now)\s*$/i, ""));
}

function plan(kind, request, ctx) {
  const hasQuery = Boolean(request.query);
  if (kind === "radio") return [{ provider: radioBrowser }];
  if (kind === "video") return [{ provider: youtube }, { provider: internetArchive }, { provider: commons }];
  const stationish = radioBrowser.looksLikeStationOrGenre(request.query);
  const order = [
    { provider: radioBrowser, skip: hasQuery && !stationish ? "not a station or genre request" : "" },
    { provider: audius },
    { provider: youtube },
    { provider: jamendo },
    { provider: internetArchive }
  ];
  if (request.audioOnly) {
    // Low-data preference: audio-only sources first, the YouTube video player after them.
    const youtubeEntry = order.splice(2, 1)[0];
    order.push(youtubeEntry);
  }
  return order;
}

async function runProvider(entry, request, ctx) {
  const provider = entry.provider;
  const started = Date.now();
  const tried = { provider: provider.id, name: provider.name, status: "ok", count: 0, ms: 0, reason: "" };
  const finish = (patch) => { Object.assign(tried, patch, { ms: Date.now() - started }); return tried; };
  if (entry.skip) return { tried: finish({ status: "skipped", reason: entry.skip }), candidates: [] };
  const config = provider.isConfigured(ctx);
  if (!config.configured) {
    return { tried: finish({ status: "skipped", reason: `not configured (${config.requires.join(", ")} is not set)` }), candidates: [] };
  }
  try {
    const result = await provider.search(ctx, request);
    const candidates = (result.candidates || []).filter(candidate => candidate && candidate.verified === true);
    ctx.state?.recordOk(provider.id, Date.now() - started);
    return { tried: finish({ status: candidates.length ? "ok" : "empty", count: candidates.length, reason: candidates.length ? "" : (result.note || "no match"),
      note: result.note || "", cached: result.cached === true ? true : undefined }), candidates, raw: result.raw };
  } catch (error) {
    const code = error?.code || "error";
    ctx.state?.recordError(provider.id, code, Date.now() - started);
    const reason = code === "quota-exhausted" ? "daily quota used up; other providers used instead"
      : code === "not-configured" ? "not configured"
      : `failed (${code})`;
    return { tried: finish({ status: code === "quota-exhausted" ? "quota" : "error", reason }), candidates: [] };
  }
}

function pickKind(requested, query) {
  const kind = ["music", "radio", "video"].includes(requested) ? requested : "music";
  if (kind === "music" && !query) return "radio"; // "play music" with nothing named: start a local radio station
  return kind;
}

function withTimeout(promise, ms, fallback) {
  let timer;
  return Promise.race([promise, new Promise(resolve => { timer = setTimeout(() => resolve(fallback), ms); timer.unref?.(); })])
    .finally(() => clearTimeout(timer));
}

async function resolveMedia(rawRequest = {}, ctx = util.createContext()) {
  const query = cleanQuery(rawRequest.query);
  const kind = pickKind(rawRequest.kind, query);
  const request = {
    query,
    kind,
    originalKind: ["music", "radio", "video"].includes(rawRequest.kind) ? rawRequest.kind : "music",
    country: normalizeText(rawRequest.country),
    countryCode: countryCode(rawRequest.country),
    language: /^sw/i.test(String(rawRequest.language || "")) ? "sw" : "en",
    excludeIds: (Array.isArray(rawRequest.excludeIds) ? rawRequest.excludeIds : []).map(String).slice(0, 60),
    audioOnly: rawRequest.audioOnly === true,
    creativeCommonsOnly: rawRequest.creativeCommonsOnly === true
  };
  const only = Array.isArray(rawRequest.onlyProviders) && rawRequest.onlyProviders.length ? new Set(rawRequest.onlyProviders) : null;
  const skipProviders = new Set(Array.isArray(rawRequest.excludeProviders) ? rawRequest.excludeProviders : []);
  const includePreview = rawRequest.includePreview !== false && kind === "music" && Boolean(query);

  const tried = [];
  let candidates = [];
  const youtubeConfig = youtube.isConfigured(ctx);

  // The 30-second preview search runs alongside the others so it adds no waiting; it is only used last.
  const previewPromise = includePreview && !skipProviders.has(itunes.id) && (!only || only.has(itunes.id))
    ? runProvider({ provider: itunes }, request, ctx) : null;

  if (rawRequest.handoff === true) {
    // "Open YouTube and play ...": find the exact video when a key is set, otherwise hand over a YouTube search page (no key needed).
    const handoffRequest = { ...request, kind: kind === "video" ? "video" : "music" };
    let handoffCandidates = [];
    if (youtubeConfig.configured && request.query) {
      const result = await runProvider({ provider: youtube }, handoffRequest, ctx);
      tried.push(result.tried);
      handoffCandidates = result.candidates;
    } else {
      tried.push({ provider: youtube.id, name: youtube.name, status: "skipped", count: 0, ms: 0,
        reason: request.query ? "not configured (YOUTUBE_API_KEY is not set); a YouTube search link is used instead" : "nothing to search for" });
    }
    const handoff = request.query ? youtube.handoffFor(handoffCandidates[0], request.query) : { provider: youtube.id, kind: "home", url: "https://www.youtube.com/", videoId: null, title: "YouTube", artist: "" };
    return finalize({ ok: true, mode: "handoff", handoff, candidates: handoffCandidates.slice(0, MAX_CANDIDATES) }, request, tried, ctx, youtubeConfig);
  }

  for (const entry of plan(kind, request, ctx)) {
    if (skipProviders.has(entry.provider.id) || (only && !only.has(entry.provider.id))) {
      tried.push({ provider: entry.provider.id, name: entry.provider.name, status: "skipped", count: 0, ms: 0, reason: "excluded for this request" });
      continue;
    }
    const result = await runProvider(entry, request, ctx);
    tried.push(result.tried);
    const fresh = result.candidates.filter(candidate => !request.excludeIds.includes(candidate.id));
    if (fresh.length) { candidates = fresh; break; }
  }
  const stoppedAfter = tried.length;
  for (const entry of plan(kind, request, ctx).slice(stoppedAfter)) {
    tried.push({ provider: entry.provider.id, name: entry.provider.name, status: "not-needed", count: 0, ms: 0, reason: "an earlier provider already had a playable match" });
  }

  if (previewPromise) {
    const preview = await withTimeout(previewPromise, PREVIEW_WAIT_MS, { tried: { provider: itunes.id, name: itunes.name, status: "error", count: 0, ms: PREVIEW_WAIT_MS, reason: "timed out" }, candidates: [] });
    tried.push(preview.tried);
    const fresh = preview.candidates.filter(candidate => !request.excludeIds.includes(candidate.id));
    candidates = candidates.concat(fresh);
  }

  return finalize({ ok: candidates.length > 0, candidates: candidates.slice(0, MAX_CANDIDATES) }, request, tried, ctx, youtubeConfig);
}

function honestReason(request, tried, youtubeConfig, quota) {
  const parts = [];
  const asked = request.query ? `"${request.query}"` : "that";
  parts.push(`Nothing playable was found for ${asked}.`);
  if (!youtubeConfig.configured && request.kind !== "radio") parts.push("YouTube is not set up on this server (no YOUTUBE_API_KEY), so it was not searched.");
  else if (quota?.exhausted) parts.push("The YouTube daily quota is used up for today, so YouTube was not searched.");
  const failed = tried.filter(item => item.status === "error").map(item => item.name);
  if (failed.length) parts.push(`These sources did not answer: ${failed.join(", ")}.`);
  return parts.join(" ");
}

function finalize(partial, request, tried, ctx, youtubeConfig) {
  const quota = ctx.state?.quota ? ctx.state.quota() : null;
  const result = {
    ok: partial.ok === true,
    kind: request.kind,
    requestedKind: request.originalKind,
    query: request.query,
    ...(partial.mode ? { mode: partial.mode } : {}),
    ...(partial.handoff ? { handoff: partial.handoff } : {}),
    candidates: partial.candidates,
    tried,
    youtube: { configured: youtubeConfig.configured, quota: quota ? { used: quota.used, remaining: quota.remaining, limit: quota.limit, exhausted: quota.exhausted } : null },
    ...(request.originalKind !== request.kind ? { note: "No song was named, so a popular radio station is offered." } : {})
  };
  if (!result.ok) result.reason = honestReason(request, tried, youtubeConfig, quota);
  return result;
}

module.exports = Object.freeze({ resolveMedia, cleanQuery, PROVIDERS, plan, MAX_CANDIDATES });
