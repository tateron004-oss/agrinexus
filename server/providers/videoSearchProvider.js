"use strict";

// Real video search, extracted from server.js's nexusRealYouTubeVideoSearch/nexusRealCommonsVideoSearch
// (both already real, already production-proven -- confirmed live in the 2026-09-22 capability audit)
// so nexus/media/video-search-executor.js can reuse the exact same logic instead of duplicating it.
// server.js's own functions now delegate here.
//
// Two real providers, tried in order: real YouTube Data API v3 search (needs YOUTUBE_API_KEY, filtered
// to embeddable/public/syndicated results with a real oEmbed preflight check), falling back to real
// Wikimedia Commons video search (no key needed at all, filtered to actual video/* MIME results). The
// Commons fallback is why "view videos" should never be fully unreachable just because YOUTUBE_API_KEY
// isn't configured.

async function fetchWithTimeout(url, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function sanitizeText(value = "", maxLength = 480) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function publicHeaders() {
  return {
    "user-agent": "AgriNexus/1.0 rural-health-agritech-investor-platform",
    "accept": "application/json,text/plain,*/*"
  };
}

async function searchYouTubeVideos(query, env = process.env) {
  const apiKey = String(env.YOUTUBE_API_KEY || env.NEXUS_MEDIA_PROVIDER_API_KEY || "").trim();
  if (!apiKey) return null;
  const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
  searchUrl.searchParams.set("part", "snippet");
  searchUrl.searchParams.set("type", "video");
  searchUrl.searchParams.set("videoEmbeddable", "true");
  searchUrl.searchParams.set("videoSyndicated", "true");
  searchUrl.searchParams.set("maxResults", "8");
  searchUrl.searchParams.set("safeSearch", "moderate");
  searchUrl.searchParams.set("q", query);
  searchUrl.searchParams.set("key", apiKey);
  const searchResponse = await fetchWithTimeout(searchUrl, { headers: { accept: "application/json" } }, 9000);
  const searchPayload = await searchResponse.json().catch(() => ({}));
  if (!searchResponse.ok) throw new Error(searchPayload.error?.message || `youtube-search-http-${searchResponse.status}`);
  const candidates = (searchPayload.items || [])
    .map(item => ({
      videoId: item.id?.videoId || "",
      title: item.snippet?.title || "",
      channelTitle: item.snippet?.channelTitle || "",
      thumbnailUrl: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url || "",
      publishedAt: item.snippet?.publishedAt || ""
    }))
    .filter(item => item.videoId);
  if (!candidates.length) return [];
  const statusUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
  statusUrl.searchParams.set("part", "status");
  statusUrl.searchParams.set("id", candidates.map(item => item.videoId).join(","));
  statusUrl.searchParams.set("key", apiKey);
  const statusResponse = await fetchWithTimeout(statusUrl, { headers: { accept: "application/json" } }, 9000);
  const statusPayload = await statusResponse.json().catch(() => ({}));
  const embeddableIds = new Set(
    (statusPayload.items || [])
      .filter(item => item.status?.embeddable === true && item.status?.privacyStatus === "public")
      .map(item => item.id)
  );
  const eligible = candidates.filter(item => embeddableIds.has(item.videoId)).slice(0, 6);
  const oembedChecked = await Promise.all(eligible.map(async item => {
    try {
      const oembedUrl = new URL("https://www.youtube.com/oembed");
      oembedUrl.searchParams.set("url", `https://www.youtube.com/watch?v=${item.videoId}`);
      oembedUrl.searchParams.set("format", "json");
      const response = await fetchWithTimeout(oembedUrl, { headers: { accept: "application/json" } }, 6000);
      if (!response.ok) return null;
      const metadata = await response.json().catch(() => ({}));
      return metadata?.type === "video" && metadata?.html ? item : null;
    } catch {
      return null;
    }
  }));
  return oembedChecked.filter(Boolean).map(item => ({
    title: sanitizeText(item.title || "YouTube video", 180),
    videoId: item.videoId,
    embedUrl: `https://www.youtube.com/embed/${item.videoId}`,
    thumbnailUrl: item.thumbnailUrl,
    channelTitle: sanitizeText(item.channelTitle || "", 120),
    sourceUrl: `https://www.youtube.com/watch?v=${item.videoId}`,
    provider: "youtube"
  }));
}

async function searchCommonsVideos(query) {
  const commonsUrl = new URL("https://commons.wikimedia.org/w/api.php");
  commonsUrl.searchParams.set("action", "query");
  commonsUrl.searchParams.set("generator", "search");
  commonsUrl.searchParams.set("gsrsearch", `filetype:video ${query}`);
  commonsUrl.searchParams.set("gsrnamespace", "6");
  commonsUrl.searchParams.set("gsrlimit", "6");
  commonsUrl.searchParams.set("prop", "imageinfo");
  commonsUrl.searchParams.set("iiprop", "url|extmetadata|mime");
  commonsUrl.searchParams.set("format", "json");
  commonsUrl.searchParams.set("origin", "*");
  const response = await fetchWithTimeout(commonsUrl, { headers: publicHeaders() }, 10000);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(`Wikimedia Commons returned ${response.status}`);
  return Object.values(payload.query?.pages || {})
    .map(page => {
      const info = page.imageinfo?.[0] || {};
      const metadata = info.extmetadata || {};
      return {
        title: sanitizeText(page.title || "Wikimedia Commons video", 180),
        videoUrl: info.url || "",
        mimeType: info.mime || "",
        sourceUrl: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(String(page.title || "").replace(/ /g, "_"))}`,
        creator: sanitizeText(metadata.Artist?.value || "", 180),
        license: sanitizeText(metadata.LicenseShortName?.value || metadata.UsageTerms?.value || "See source", 120),
        description: sanitizeText(metadata.ImageDescription?.value || metadata.ObjectName?.value || "", 260),
        provider: "wikimedia-commons"
      };
    })
    .filter(item => item.videoUrl && /^video\//.test(item.mimeType || ""))
    .slice(0, 4);
}

// Tries YouTube first (richer results, needs a key), falls back to the always-available Commons search.
// Never throws for "no key"/"no results" -- only for a genuine provider-call failure, which the caller
// (the nexus executor) turns into an honest, non-fabricated refusal rather than a crash.
async function searchVideos(query, env = process.env) {
  const youtube = await searchYouTubeVideos(query, env).catch(error => { throw Object.assign(error, { provider: "youtube" }); });
  if (youtube && youtube.length) return { provider: "youtube", results: youtube };
  const commons = await searchCommonsVideos(query).catch(error => { throw Object.assign(error, { provider: "wikimedia-commons" }); });
  return { provider: "wikimedia-commons", results: commons };
}

module.exports = Object.freeze({ searchYouTubeVideos, searchCommonsVideos, searchVideos });
