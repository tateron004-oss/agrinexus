const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const MUSIC_MEDIA_PROVIDER_NAME = "music-media";
const MUSIC_MEDIA_PROVIDER_CANDIDATES = Object.freeze([
  "Internet Archive public search",
  "Spotify",
  "local media provider",
  "radio stream provider"
]);

const INTERNET_ARCHIVE_SEARCH_URL = "https://archive.org/advancedsearch.php";

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function classifyMusicMediaIntent(input) {
  const lower = String(input || "").toLowerCase();
  if (/\b(playlist|genre|r&b|music|song|radio|spotify|media)\b/.test(lower)) return "music-media";
  return "unsupported";
}

function buildMusicMediaQuery(request = {}) {
  const mediaRequest = normalizeText(request.mediaRequest || request.query || "");
  const providerPreference = normalizeText(request.providerPreference || request.provider || "");
  return Object.freeze({
    requestType: classifyMusicMediaIntent(mediaRequest || providerPreference),
    mediaRequest,
    providerPreference,
    providerCandidates: MUSIC_MEDIA_PROVIDER_CANDIDATES,
    playbackAllowed: false,
    streamingAllowed: false,
    authenticationAllowed: false,
    playlistCreationAllowed: false,
    accountStateChangeAllowed: false,
    tokenStorageAllowed: false,
    readOnly: true,
    noExecutionRequired: true,
    executionAuthority: false
  });
}

function resolveMusicMediaProviderConfig(env = process.env) {
  const providerMode = getConfiguredProviderMode(MUSIC_MEDIA_PROVIDER_NAME, env);
  return Object.freeze({
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true",
    musicMediaProviderEnabled: env.NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED === "true",
    publicProviderEnabled: env.NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(env.NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY),
    hasProviderEndpoint: hasText(env.NEXUS_MUSIC_MEDIA_PROVIDER_ENDPOINT),
    providerCandidates: MUSIC_MEDIA_PROVIDER_CANDIDATES
  });
}

function isInternetArchivePublicProviderConfigured(env = process.env) {
  return env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true"
    && env.NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED === "true"
    && env.NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED === "true";
}

function buildMockMusicMediaAvailabilityResult(request = {}) {
  const query = buildMusicMediaQuery(request);
  const mediaRequest = hasText(query.mediaRequest) ? query.mediaRequest : "music/media";
  return normalizeSourceResult({
    sourceResultId: "music-media-mock-availability",
    requestType: "music-media",
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode: "mock",
    sourceName: "Mock Music/Media Provider",
    sourceCategory: "music-media",
    sourceUrl: "provider:mock-music-media",
    query: mediaRequest,
    resultSummary: "Mock music/media provider availability result. Nexus can prepare options but will not play, stream, authenticate, or create playlists.",
    rawResultAvailable: false,
    freshnessStatus: "recent",
    confidenceLevel: "medium",
    limitationNotes: "Mock music/media readiness only; no playback, streaming, authentication, account change, or token storage occurred.",
    evidenceStatus: "mock-backed",
    sourceStatus: "source-result-available"
  });
}

function buildMusicMediaProviderUnavailableResult(reason) {
  return buildProviderUnavailableResult("music-media", reason || "music/media provider flags or config are missing");
}

function buildInternetArchiveProviderErrorResult(query, errorType) {
  return normalizeSourceResult({
    sourceResultId: `music-media-internet-archive-error-${String(query.mediaRequest || "media").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "media"}`,
    requestType: "music-media",
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Internet Archive public search",
    sourceCategory: "music-media",
    sourceUrl: "https://archive.org/",
    query: query.mediaRequest || query.providerPreference || "media request",
    resultSummary: "Internet Archive public media lookup failed safely. No playback, streaming, authentication, or account action occurred.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: `${errorType || "source-error"}; verify media licensing and relevance directly before use.`,
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-error"
  });
}

function normalizeInternetArchivePayload(query, payload) {
  const first = payload && payload.response && Array.isArray(payload.response.docs) ? payload.response.docs[0] : null;
  if (!first || !hasText(first.title)) return buildInternetArchiveProviderErrorResult(query, "source-result-empty");
  const title = normalizeText(first.title);
  const identifier = hasText(first.identifier) ? first.identifier : "";
  const sourceUrl = identifier ? `https://archive.org/details/${encodeURIComponent(identifier)}` : "https://archive.org/";
  return normalizeSourceResult({
    sourceResultId: `music-media-internet-archive-${(identifier || title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "media"}`,
    requestType: "music-media",
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Internet Archive public search",
    sourceCategory: "music-media",
    sourceUrl,
    query: query.mediaRequest || query.providerPreference,
    resultSummary: `Public media/training result found: ${title}.`,
    rawResultAvailable: true,
    freshnessStatus: "recent",
    confidenceLevel: "medium",
    limitationNotes: "Read-only public media discovery. Nexus did not play, stream, authenticate, create playlists, or open external services.",
    evidenceStatus: "source-backed",
    sourceStatus: "source-result-available"
  });
}

async function fetchJson(fetchImpl, url) {
  const response = await fetchImpl(url, { method: "GET", signal: AbortSignal.timeout(8000) });
  if (!response || response.ok !== true) {
    const status = response && typeof response.status !== "undefined" ? `http-${response.status}` : "http-error";
    throw new Error(status);
  }
  return response.json();
}

async function runInternetArchiveReadOnlyLookup(request = {}, env = process.env) {
  const query = buildMusicMediaQuery(request);
  if (!hasText(query.mediaRequest) && !hasText(query.providerPreference)) return getMusicMediaSourceResult(request, env);
  if (!isInternetArchivePublicProviderConfigured(env)) return getMusicMediaSourceResult(request, env);
  const fetchImpl = typeof env.NEXUS_MUSIC_MEDIA_FETCH_IMPL === "function" ? env.NEXUS_MUSIC_MEDIA_FETCH_IMPL : globalThis.fetch;
  if (typeof fetchImpl !== "function") return buildInternetArchiveProviderErrorResult(query, "fetch-unavailable");
  try {
    const url = new URL(INTERNET_ARCHIVE_SEARCH_URL);
    url.searchParams.set("q", `${query.mediaRequest || query.providerPreference} agriculture training`);
    url.searchParams.set("fl[]", "title");
    url.searchParams.append("fl[]", "identifier");
    url.searchParams.set("rows", "1");
    url.searchParams.set("output", "json");
    const payload = await fetchJson(fetchImpl, url);
    return normalizeInternetArchivePayload(query, payload);
  } catch (error) {
    return buildInternetArchiveProviderErrorResult(query, error && error.message ? error.message : "source-error");
  }
}

async function getMusicMediaSourceResultAsync(request = {}, env = process.env) {
  if (isInternetArchivePublicProviderConfigured(env)) return runInternetArchiveReadOnlyLookup(request, env);
  return getMusicMediaSourceResult(request, env);
}

function getMusicMediaSourceResult(request = {}, env = process.env) {
  const query = buildMusicMediaQuery(request);
  if (!hasText(query.mediaRequest) && !hasText(query.providerPreference)) {
    return normalizeSourceResult({
      sourceResultId: "music-media-request-required",
      requestType: "music-media",
      providerName: MUSIC_MEDIA_PROVIDER_NAME,
      providerMode: "fixture",
      sourceName: "Music/Media Provider Required",
      sourceCategory: "music-media",
      sourceUrl: "provider-required",
      query: "music/media request missing",
      resultSummary: "Which music provider or media request should I prepare?",
      rawResultAvailable: false,
      freshnessStatus: "unavailable",
      confidenceLevel: "low",
      limitationNotes: "Music/media readiness needs a provider or media request. No playback or streaming occurred.",
      evidenceStatus: "source-unavailable",
      sourceStatus: "provider-required"
    });
  }

  const config = resolveMusicMediaProviderConfig(env);
  if (config.providerMode === "fixture") {
    return buildMusicMediaProviderUnavailableResult("music/media provider is disabled or not configured");
  }

  if (config.providerMode === "mock") {
    return buildMockMusicMediaAvailabilityResult(request);
  }

  return normalizeSourceResult({
    sourceResultId: "music-media-live-query-ready",
    requestType: "music-media",
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "Configured Music/Media Provider",
    sourceCategory: "music-media",
    sourceUrl: "provider:music-media",
    query: query.mediaRequest || query.providerPreference,
    resultSummary: "Music/media provider is configured for a future read-only availability query. No playback, streaming, authentication, or network request is made in this readiness phase.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "medium",
    limitationNotes: "Live media config is present, but this readiness module does not play audio, stream media, or alter accounts.",
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-query-ready"
  });
}

module.exports = Object.freeze({
  MUSIC_MEDIA_PROVIDER_NAME,
  MUSIC_MEDIA_PROVIDER_CANDIDATES,
  INTERNET_ARCHIVE_SEARCH_URL,
  classifyMusicMediaIntent,
  buildMusicMediaQuery,
  resolveMusicMediaProviderConfig,
  isInternetArchivePublicProviderConfigured,
  buildMockMusicMediaAvailabilityResult,
  buildMusicMediaProviderUnavailableResult,
  buildInternetArchiveProviderErrorResult,
  normalizeInternetArchivePayload,
  runInternetArchiveReadOnlyLookup,
  getMusicMediaSourceResult,
  getMusicMediaSourceResultAsync
});
