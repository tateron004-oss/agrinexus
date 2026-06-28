const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const MUSIC_MEDIA_PROVIDER_NAME = "music-media";
const MUSIC_MEDIA_PROVIDER_CANDIDATES = Object.freeze([
  "Spotify",
  "local media provider",
  "radio stream provider"
]);

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
    hasProviderKey: hasText(env.NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY),
    hasProviderEndpoint: hasText(env.NEXUS_MUSIC_MEDIA_PROVIDER_ENDPOINT),
    providerCandidates: MUSIC_MEDIA_PROVIDER_CANDIDATES
  });
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
  classifyMusicMediaIntent,
  buildMusicMediaQuery,
  resolveMusicMediaProviderConfig,
  buildMockMusicMediaAvailabilityResult,
  buildMusicMediaProviderUnavailableResult,
  getMusicMediaSourceResult
});
