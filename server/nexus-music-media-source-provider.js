const {
  normalizeSourceResult,
  buildProviderUnavailableResult,
  getConfiguredProviderMode
} = require("../public/nexus-live-source-result-contract.js");

const MUSIC_MEDIA_PROVIDER_NAME = "music-media";
const MUSIC_MEDIA_PROVIDER_CANDIDATES = Object.freeze([
  "YouTube Data API v3",
  "Internet Archive public search",
  "Spotify",
  "local media provider",
  "radio stream provider"
]);

const INTERNET_ARCHIVE_SEARCH_URL = "https://archive.org/advancedsearch.php";
const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const YOUTUBE_VIDEOS_URL = "https://www.googleapis.com/youtube/v3/videos";
const YOUTUBE_OEMBED_URL = "https://www.youtube.com/oembed";

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function classifyMusicMediaIntent(input) {
  const lower = String(input || "").toLowerCase();
  if (/\b(playlist|genre|r&b|music|song|radio|spotify|media|youtube|video|videos)\b/.test(lower)) return "music-media";
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
  const youtubeApiKey = normalizeText(env.YOUTUBE_API_KEY || env.NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY || "");
  const providerMode = hasText(youtubeApiKey) ? "live" : getConfiguredProviderMode(MUSIC_MEDIA_PROVIDER_NAME, env);
  return Object.freeze({
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode,
    liveSourceEnabled: env.NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED === "true",
    musicMediaProviderEnabled: env.NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED === "true",
    publicProviderEnabled: env.NEXUS_MUSIC_MEDIA_PUBLIC_PROVIDER_ENABLED === "true",
    hasProviderKey: hasText(youtubeApiKey),
    youtubeApiKey,
    hasProviderEndpoint: hasText(env.NEXUS_MUSIC_MEDIA_PROVIDER_ENDPOINT),
    providerCandidates: MUSIC_MEDIA_PROVIDER_CANDIDATES
  });
}

function isYouTubeProviderConfigured(env = process.env) {
  return hasText(env.YOUTUBE_API_KEY || env.NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY);
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

function buildYouTubeProviderErrorResult(query, errorType) {
  return normalizeSourceResult({
    sourceResultId: `music-media-youtube-error-${String(query.mediaRequest || "media").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "media"}`,
    requestType: "music-media",
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "YouTube Data API v3",
    sourceCategory: "music-media",
    sourceUrl: "https://www.youtube.com/",
    query: query.mediaRequest || query.providerPreference || "media request",
    resultSummary: "YouTube video search failed safely. Nexus did not play, download, authenticate, or change a YouTube account.",
    rawResultAvailable: false,
    freshnessStatus: "unavailable",
    confidenceLevel: "low",
    limitationNotes: `${errorType || "source-error"}; open YouTube directly to verify availability and suitability.`,
    evidenceStatus: "source-unavailable",
    sourceStatus: "source-error"
  });
}

function normalizeYouTubePayload(query, payload, options = {}) {
  const excludedVideoIds = new Set((options.excludeVideoIds || [])
    .map(normalizeText)
    .filter(Boolean));
  const items = payload && Array.isArray(payload.items) ? payload.items : [];
  const first = items.find(item => item
    && item.id
    && hasText(item.id.videoId)
    && !excludedVideoIds.has(normalizeText(item.id.videoId))
    && item.snippet
    && hasText(item.snippet.title));
  if (!first) return buildYouTubeProviderErrorResult(query, "source-result-empty");
  const videoId = normalizeText(first.id.videoId);
  const title = normalizeText(first.snippet.title);
  const channel = normalizeText(first.snippet.channelTitle || "");
  return normalizeSourceResult({
    sourceResultId: `music-media-youtube-${videoId}`,
    requestType: "music-media",
    providerName: MUSIC_MEDIA_PROVIDER_NAME,
    providerMode: "live",
    sourceName: "YouTube Data API v3",
    sourceCategory: "music-media",
    sourceUrl: `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`,
    query: query.mediaRequest || query.providerPreference,
    resultSummary: `YouTube video found: ${title}${channel ? ` — ${channel}` : ""}.`,
    rawResultAvailable: true,
    freshnessStatus: "fresh",
    confidenceLevel: "high",
    limitationNotes: "Read-only public video discovery. Nexus did not play, download, authenticate, upload, or change a YouTube account.",
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

async function runYouTubeReadOnlyLookup(request = {}, env = process.env) {
  const query = buildMusicMediaQuery(request);
  if (!hasText(query.mediaRequest) && !hasText(query.providerPreference)) return getMusicMediaSourceResult(request, env);
  const config = resolveMusicMediaProviderConfig(env);
  if (!isYouTubeProviderConfigured(env)) return getMusicMediaSourceResult(request, env);
  const fetchImpl = typeof env.NEXUS_MUSIC_MEDIA_FETCH_IMPL === "function" ? env.NEXUS_MUSIC_MEDIA_FETCH_IMPL : globalThis.fetch;
  if (typeof fetchImpl !== "function") return buildYouTubeProviderErrorResult(query, "fetch-unavailable");
  try {
    const url = new URL(YOUTUBE_SEARCH_URL);
    url.searchParams.set("part", "snippet");
    url.searchParams.set("type", "video");
    url.searchParams.set("videoEmbeddable", "true");
    url.searchParams.set("videoSyndicated", "true");
    if (request.creativeCommonsOnly === true) url.searchParams.set("videoLicense", "creativeCommon");
    url.searchParams.set("maxResults", "25");
    url.searchParams.set("safeSearch", "moderate");
    url.searchParams.set("q", `${query.mediaRequest || query.providerPreference} lyrics audio`);
    url.searchParams.set("key", config.youtubeApiKey);
    const payload = await fetchJson(fetchImpl, url);
    const candidateIds = Array.isArray(payload?.items)
      ? payload.items.map(item => normalizeText(item?.id?.videoId)).filter(Boolean)
      : [];
    if (!candidateIds.length) return buildYouTubeProviderErrorResult(query, "source-result-empty");
    const statusUrl = new URL(YOUTUBE_VIDEOS_URL);
    statusUrl.searchParams.set("part", "status,contentDetails");
    statusUrl.searchParams.set("id", candidateIds.join(","));
    statusUrl.searchParams.set("key", config.youtubeApiKey);
    const statusPayload = await fetchJson(fetchImpl, statusUrl);
    const apiEmbeddableIds = (statusPayload?.items || [])
      .filter(item => {
        const blocked = item?.contentDetails?.regionRestriction?.blocked || [];
        const allowed = item?.contentDetails?.regionRestriction?.allowed || [];
        return item?.status?.embeddable === true && item?.status?.privacyStatus === "public"
          && !blocked.includes("US") && (!allowed.length || allowed.includes("US"));
      })
      .map(item => normalizeText(item.id))
      .filter(Boolean);
    const oembedResults = await Promise.all(apiEmbeddableIds.slice(0, 20).map(async videoId => {
      try {
        const oembedUrl = new URL(YOUTUBE_OEMBED_URL);
        oembedUrl.searchParams.set("url", `https://www.youtube.com/watch?v=${videoId}`);
        oembedUrl.searchParams.set("format", "json");
        const metadata = await fetchJson(fetchImpl, oembedUrl);
        return metadata?.type === "video" && hasText(metadata?.html) ? videoId : "";
      } catch (_) {
        return "";
      }
    }));
    const embedQualifiedIds = new Set(oembedResults.filter(Boolean));
    return normalizeYouTubePayload(query, {
      ...payload,
      items: (payload.items || [])
        .filter(item => embedQualifiedIds.has(normalizeText(item?.id?.videoId)))
        .sort((left, right) => {
          const requestText = normalizeText(query.mediaRequest || query.providerPreference);
          const preferredPattern = /\bcover\b/i.test(requestText)
            ? /\bcover\b/i
            : /\blive(?:\s+performance)?\b/i.test(requestText)
              ? /\blive\b/i
              : /\b(lyrics?|audio)\b/i;
          const playableRank = item => preferredPattern.test(normalizeText(item?.snippet?.title)) ? 0 : 1;
          return playableRank(left) - playableRank(right);
        })
    }, {
      excludeVideoIds: Array.isArray(request.excludeVideoIds)
        ? request.excludeVideoIds.slice(0, 20)
        : []
    });
  } catch (error) {
    return buildYouTubeProviderErrorResult(query, error && error.message ? error.message : "source-error");
  }
}

async function getMusicMediaSourceResultAsync(request = {}, env = process.env) {
  if (isYouTubeProviderConfigured(env)) return runYouTubeReadOnlyLookup(request, env);
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
  YOUTUBE_SEARCH_URL,
  YOUTUBE_VIDEOS_URL,
  YOUTUBE_OEMBED_URL,
  classifyMusicMediaIntent,
  buildMusicMediaQuery,
  resolveMusicMediaProviderConfig,
  isYouTubeProviderConfigured,
  isInternetArchivePublicProviderConfigured,
  buildMockMusicMediaAvailabilityResult,
  buildMusicMediaProviderUnavailableResult,
  buildInternetArchiveProviderErrorResult,
  normalizeInternetArchivePayload,
  buildYouTubeProviderErrorResult,
  normalizeYouTubePayload,
  runYouTubeReadOnlyLookup,
  runInternetArchiveReadOnlyLookup,
  getMusicMediaSourceResult,
  getMusicMediaSourceResultAsync
});
