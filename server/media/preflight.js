"use strict";

// Server-side preflight: before a candidate is offered to the phone, check that it is reachable and really is audio/video.
// This only reads the first bytes' headers and then drops the connection -- the server never relays or stores the media itself.

const { normalizeText, ProviderError, fetchJson } = require("./util.js");

const HLS_TYPES = ["application/vnd.apple.mpegurl", "application/x-mpegurl", "audio/mpegurl", "audio/x-mpegurl"];

function classifyContentType(contentType, wantVideo) {
  const type = normalizeText(contentType).toLowerCase().split(";")[0];
  if (!type) return { playable: false, hls: false, type };
  if (HLS_TYPES.includes(type)) return { playable: true, hls: true, type };
  if (type.startsWith("audio/")) return { playable: true, hls: false, type };
  if (type === "application/ogg" || type === "application/x-mpegurl") return { playable: true, hls: false, type };
  if (wantVideo && (type.startsWith("video/") || type === "application/mp4")) return { playable: true, hls: false, type };
  if (type.startsWith("video/") && !wantVideo) return { playable: true, hls: false, type };
  return { playable: false, hls: false, type };
}

// Resolves { ok, status, contentType, hls, rangeSupported, reason }. Never throws.
async function preflightStream(ctx, url, { wantVideo = false, timeoutMs = 5000 } = {}) {
  if (typeof ctx.fetch !== "function") return { ok: false, reason: "fetch-unavailable" };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await ctx.fetch(String(url), {
      method: "GET",
      headers: { "user-agent": ctx.userAgent, range: "bytes=0-1", accept: wantVideo ? "video/*,*/*;q=0.5" : "audio/*,*/*;q=0.5", "icy-metadata": "0" },
      redirect: "follow",
      signal: controller.signal
    });
    const status = response?.status;
    const contentType = response?.headers?.get?.("content-type") || "";
    const acceptRanges = normalizeText(response?.headers?.get?.("accept-ranges") || "").toLowerCase();
    const rangeSupported = status === 206 || acceptRanges === "bytes";
    // Headers are enough: stop reading so a live radio stream does not keep the connection open.
    try { await response?.body?.cancel?.(); } catch (_) { /* already closed */ }
    try { controller.abort(); } catch (_) { /* already closed */ }
    if (!response || !(response.ok === true || status === 206)) return { ok: false, status, reason: `http-${status ?? "error"}` };
    const kind = classifyContentType(contentType, wantVideo);
    if (!kind.playable) return { ok: false, status, contentType: kind.type, reason: `not-media-${kind.type || "unknown"}` };
    return { ok: true, status, contentType: kind.type, hls: kind.hls, rangeSupported };
  } catch (error) {
    const timedOut = error?.name === "AbortError" || error?.name === "TimeoutError";
    return { ok: false, reason: timedOut ? "timeout" : normalizeText(error?.message || "network-error").slice(0, 80) };
  } finally {
    clearTimeout(timer);
  }
}

// YouTube embeddability without a key: the public oEmbed endpoint answers 200 for a video that may be embedded and 401/404 otherwise.
async function checkYoutubeEmbeddable(ctx, videoId) {
  if (!/^[A-Za-z0-9_-]{6,}$/.test(String(videoId || ""))) return false;
  try {
    const url = new URL("https://www.youtube.com/oembed");
    url.searchParams.set("url", `https://www.youtube.com/watch?v=${videoId}`);
    url.searchParams.set("format", "json");
    const metadata = await fetchJson(ctx, url, { timeoutMs: 5000 });
    return metadata?.type === "video" && Boolean(metadata?.html);
  } catch (error) {
    if (error instanceof ProviderError) return false;
    return false;
  }
}

module.exports = Object.freeze({ preflightStream, checkYoutubeEmbeddable, classifyContentType });
