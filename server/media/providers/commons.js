"use strict";

// Wikimedia Commons video (freely licensed), played from upload.wikimedia.org by the phone's own <video> element. No key.

const { fetchJson, normalizeText, relevance, httpsOnly } = require("../util.js");
const { buildCandidate } = require("../candidate.js");
const { preflightStream } = require("../preflight.js");

const ID = "wikimedia-commons";
const NAME = "Wikimedia Commons";
const API_URL = "https://commons.wikimedia.org/w/api.php";

function stripHtml(value) {
  return normalizeText(String(value || "").replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#0?39;/g, "'"));
}

async function search(ctx, request) {
  const url = new URL(API_URL);
  url.searchParams.set("action", "query");
  url.searchParams.set("generator", "search");
  url.searchParams.set("gsrsearch", `filetype:video ${request.query}`);
  url.searchParams.set("gsrnamespace", "6");
  url.searchParams.set("gsrlimit", "8");
  url.searchParams.set("prop", "imageinfo");
  url.searchParams.set("iiprop", "url|extmetadata|mime|size");
  url.searchParams.set("format", "json");
  url.searchParams.set("origin", "*");
  const payload = await fetchJson(ctx, url, { timeoutMs: 7000 });
  const exclude = new Set(request.excludeIds || []);
  const pages = Object.values(payload?.query?.pages || {})
    .map(page => ({ page, info: page.imageinfo?.[0] || {} }))
    .filter(({ info }) => httpsOnly(info.url) && /^video\//.test(info.mime || ""))
    .map(({ page, info }) => ({ page, info, score: relevance(request.query, `${page.title} ${stripHtml(info.extmetadata?.ImageDescription?.value)}`) }))
    .filter(item => item.score >= 0.5 && !exclude.has(`${ID}:${item.info.url}`))
    .sort((a, b) => b.score - a.score);
  const candidates = [];
  for (const { page, info, score } of pages.slice(0, 4)) {
    if (candidates.length >= 3) break;
    const check = await preflightStream(ctx, info.url, { wantVideo: true, timeoutMs: 6000 });
    if (!check.ok) continue;
    const meta = info.extmetadata || {};
    const artist = stripHtml(meta.Artist?.value);
    candidates.push(buildCandidate({
      provider: ID, providerName: NAME, nativeId: info.url, playbackClass: "video", delivery: "stream", url: info.url,
      title: normalizeText(String(page.title || "").replace(/^File:/, "").replace(/\.[a-z0-9]{3,4}$/i, "")), artist, live: false, isPreview: false,
      attribution: `${normalizeText(page.title)}${artist ? ` — ${artist}` : ""} · Wikimedia Commons`,
      license: stripHtml(meta.LicenseShortName?.value || meta.UsageTerms?.value) || "See source", verified: true, mimeType: info.mime,
      sourceUrl: info.descriptionurl, score
    }));
  }
  return { candidates, note: candidates.length ? "freely licensed video" : "no freely licensed video matched" };
}

module.exports = Object.freeze({ id: ID, name: NAME, search, isConfigured: () => ({ configured: true, requires: [] }) });
