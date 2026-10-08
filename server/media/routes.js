"use strict";

// HTTP behaviour for the media routes, kept free of server.js internals so it can be tested directly:
// each function takes plain input and returns { status, body }. server.js only does the sign-in / role / rate-limit checks and calls these.

const { normalizeText } = require("./util.js");
const itunes = require("./providers/itunes.js");
const youtube = require("./providers/youtube.js");

const MAX_QUERY = 200;

function cleanBody(body = {}) {
  const query = normalizeText(body.query || body.command || "").slice(0, MAX_QUERY);
  const kind = ["music", "radio", "video"].includes(body.kind) ? body.kind : "music";
  return {
    query,
    kind,
    country: normalizeText(body.country).slice(0, 60),
    language: normalizeText(body.language).slice(0, 12),
    excludeIds: (Array.isArray(body.excludeIds) ? body.excludeIds : []).map(value => String(value).slice(0, 220)).slice(0, 60),
    audioOnly: body.audioOnly === true,
    handoff: body.handoff === true,
    includePreview: body.includePreview !== false
  };
}

async function handleResolve({ body, runtime }) {
  const request = cleanBody(body);
  if (!request.query && request.kind === "video") return { status: 400, body: { ok: false, error: "Tell me what to watch." } };
  const result = await runtime.resolve(request);
  return { status: 200, body: result };
}

function handleAdminProviders({ runtime }) {
  return { status: 200, body: { ok: true, ...runtime.report() } };
}

async function handleAdminProbe({ runtime }) {
  const probes = await runtime.probe();
  return { status: 200, body: { ok: true, probes, ...runtime.report() } };
}

async function handlePlayed({ body, runtime }) {
  const provider = normalizeText(body?.provider).slice(0, 40);
  const id = normalizeText(body?.id).slice(0, 80).replace(/^radio-browser:/, "");
  if (!provider || !id) return { status: 400, body: { ok: false, error: "provider and id are required" } };
  return { status: 200, body: { ok: true, ...(await runtime.reportPlayed({ provider, id })) } };
}

// ---- Compatibility routes (response shapes pinned by existing clients and tests) -----------------------------------------------------------

function videoIdsToExclude(list) {
  return Array.isArray(list)
    ? [...new Set(list.map(value => String(value || "").trim()).filter(value => /^[A-Za-z0-9_-]{6,}$/.test(value)))].slice(0, 20)
    : [];
}

// POST /api/music/providers/playback: the preview-first behaviour older clients rely on (iTunes 30-second preview, then one YouTube candidate),
// now using the shared providers, quota guard and cache. Full-length playback goes through /api/media/resolve.
async function handleLegacyPlayback({ body, runtime }) {
  const query = String(body.query || body.command || "").trim();
  if (!query) return { status: 400, body: { ok: false, error: "Music search query is required" } };
  const attempts = [];
  const excluded = new Set(Array.isArray(body.excludeProviders) ? body.excludeProviders.map(value => String(value || "").trim()).filter(Boolean) : []);
  let preview = { ok: false, provider: itunes.id, status: "provider-excluded", error: "provider-excluded" };
  if (!excluded.has(itunes.id)) {
    const found = await itunes.search(runtime.ctx, { query, countryCode: String(body.country || "US").slice(0, 2).toUpperCase() });
    preview = found.raw || { ok: false, provider: itunes.id, status: "source-error", error: found.note || "source-error" };
  }
  attempts.push({ provider: itunes.id, status: preview.status || (preview.ok ? "candidate-ready" : "source-error"), error: preview.error || null, preflightVerified: preview.preflightVerified === true });
  if (preview.ok === true && preview.preflightVerified === true && /^https:\/\//i.test(String(preview.audioUrl || ""))) {
    return { status: 200, body: { ...preview, attempts, fallbackAvailable: true } };
  }

  const excludeIds = videoIdsToExclude(body.excludeVideoIds).map(id => `youtube:${id}`);
  const found = await runtime.resolve({ query, kind: "music", onlyProviders: [youtube.id], excludeIds, includePreview: false });
  const candidate = found.candidates.find(item => item.provider === youtube.id && item.videoId);
  const youtubeTried = found.tried.find(item => item.provider === youtube.id);
  attempts.push({ provider: "youtube", status: candidate ? "source-result-available" : "source-unavailable", error: candidate ? null : (youtubeTried?.reason || found.reason || "No eligible YouTube candidate") });
  if (candidate) {
    return { status: 200, body: { ok: true, provider: "youtube", providerName: "YouTube", playbackClass: "video", status: "candidate-ready", query, videoId: candidate.videoId, title: candidate.title, playbackVerified: false, attempts } };
  }
  return { status: 503, body: { ok: false, status: "all-providers-unavailable", error: "No provider returned a preflight-qualified playback candidate.", attempts } };
}

// POST /api/music/youtube/search
async function handleLegacyYoutubeSearch({ body, runtime }) {
  const query = String(body.query || body.command || "").trim();
  if (!query) return { status: 400, body: { ok: false, error: "Music search query is required" } };
  const excludeVideoIds = videoIdsToExclude(body.excludeVideoIds);
  const found = await runtime.resolve({
    query, kind: "music", onlyProviders: [youtube.id], excludeIds: excludeVideoIds.map(id => `youtube:${id}`),
    includePreview: false, creativeCommonsOnly: body.creativeCommonsOnly === true
  });
  const candidate = found.candidates.find(item => item.provider === youtube.id && item.videoId);
  if (!candidate) {
    const tried = found.tried.find(item => item.provider === youtube.id);
    return { status: 503, body: { ok: false, provider: "youtube", status: tried?.status === "skipped" ? "source-unavailable" : "source-error",
      error: tried?.reason ? `YouTube did not return a playable result (${tried.reason})` : (found.reason || "YouTube did not return a playable result") } };
  }
  return { status: 200, body: { ok: true, provider: "youtube", status: "candidate-ready", query, videoId: candidate.videoId,
    excludedCandidateCount: excludeVideoIds.length, licenseFilter: body.creativeCommonsOnly === true ? "creativeCommon" : "any", playbackVerified: false, title: candidate.title } };
}

module.exports = Object.freeze({ handleResolve, handleAdminProviders, handleAdminProbe, handlePlayed, handleLegacyPlayback, handleLegacyYoutubeSearch, cleanBody });
