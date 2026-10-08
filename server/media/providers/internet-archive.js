"use strict";

// Internet Archive (archive.org): public-domain and Creative Commons audio and moving images, played straight from archive.org's own
// download URLs. No key. Only items that carry a Creative Commons / public-domain licence (or sit in a public-domain film collection)
// are offered, so this is safe teaching and listening material, not copyrighted commercial music.

const { fetchJson, normalizeText, relevance } = require("../util.js");
const { buildCandidate } = require("../candidate.js");
const { preflightStream } = require("../preflight.js");

const ID = "internet-archive";
const NAME = "Internet Archive";
const SEARCH_URL = "https://archive.org/advancedsearch.php";
const METADATA_URL = "https://archive.org/metadata/";
const AUDIO_FORMATS = Object.freeze(["VBR MP3", "MP3", "128Kbps MP3", "64Kbps MP3", "Ogg Vorbis"]);
const VIDEO_FORMATS = Object.freeze(["h.264", "MPEG4", "512Kb MPEG4", "h.264 HD", "Ogg Video"]);
const FILM_COLLECTIONS = "prelinger OR feature_films OR fedflix OR nasa OR publicdomainmovies";

function cleanQuery(query) {
  return normalizeText(query).replace(/[^\p{L}\p{N}\s'-]/gu, " ").replace(/\s+/g, " ").trim().slice(0, 120);
}

function downloadUrl(identifier, fileName) {
  return `https://archive.org/download/${encodeURIComponent(identifier)}/${String(fileName).split("/").map(encodeURIComponent).join("/")}`;
}

function pickFile(files, formats, { smallest = false } = {}) {
  if (smallest) {
    // Moving images: the smallest playable derivative across the mp4 formats (kinder to a slow phone connection); Ogg only when nothing else exists.
    const mp4 = (files || []).filter(file => formats.includes(file?.format) && file.format !== "Ogg Video" && file.name && Number(file.size || 0) > 100000);
    if (mp4.length) return mp4.sort((a, b) => Number(a.size) - Number(b.size))[0];
  }
  for (const format of formats) {
    const matches = (files || []).filter(file => file?.format === format && file.name && Number(file.size || 1) > 0);
    if (matches.length) {
      // Smaller first: kinder to a phone on a slow connection.
      matches.sort((a, b) => Number(a.size || 0) - Number(b.size || 0));
      return matches[0];
    }
  }
  return null;
}

function parseLength(value) {
  const text = String(value || "");
  if (/^\d+(\.\d+)?$/.test(text)) return Math.round(Number(text));
  const parts = text.split(":").map(Number);
  if (parts.length >= 2 && parts.every(Number.isFinite)) return parts.reduce((total, part) => total * 60 + part, 0);
  return null;
}

async function search(ctx, request) {
  const wantVideo = request.kind === "video";
  const words = cleanQuery(request.query);
  if (!words) return { candidates: [], note: "empty query" };
  const license = "(licenseurl:*creativecommons* OR licenseurl:*publicdomain*)";
  const q = wantVideo
    ? `(${words}) AND mediatype:movies AND (collection:(${FILM_COLLECTIONS}) OR ${license})`
    : `(${words}) AND mediatype:audio AND ${license}`;
  const url = new URL(SEARCH_URL);
  url.searchParams.set("q", q);
  for (const field of ["identifier", "title", "creator", "licenseurl", "downloads"]) url.searchParams.append("fl[]", field);
  url.searchParams.append("sort[]", "downloads desc");
  url.searchParams.set("rows", "8");
  url.searchParams.set("output", "json");
  const payload = await fetchJson(ctx, url, { timeoutMs: 6000 });
  const exclude = new Set(request.excludeIds || []);
  const docs = (Array.isArray(payload?.response?.docs) ? payload.response.docs : [])
    .filter(doc => doc?.identifier && normalizeText(doc.title) && !exclude.has(`${ID}:${doc.identifier}`))
    .map(doc => ({ doc, score: relevance(request.query, `${doc.title} ${Array.isArray(doc.creator) ? doc.creator.join(" ") : doc.creator || ""}`) }))
    .filter(item => item.score >= 0.5)
    .sort((a, b) => b.score - a.score);

  const candidates = [];
  for (const { doc, score } of docs.slice(0, 4)) {
    if (candidates.length >= 3) break;
    let meta;
    try { meta = await fetchJson(ctx, `${METADATA_URL}${encodeURIComponent(doc.identifier)}`, { timeoutMs: 6000 }); } catch (_) { continue; }
    const file = pickFile(meta?.files, wantVideo ? VIDEO_FORMATS : AUDIO_FORMATS, { smallest: wantVideo });
    if (!file) continue;
    const url = downloadUrl(doc.identifier, file.name);
    const check = await preflightStream(ctx, url, { wantVideo, timeoutMs: 6000 });
    if (!check.ok) continue;
    const creator = Array.isArray(doc.creator) ? doc.creator.join(", ") : normalizeText(doc.creator);
    const licenseUrl = normalizeText(Array.isArray(doc.licenseurl) ? doc.licenseurl[0] : doc.licenseurl);
    candidates.push(buildCandidate({
      provider: ID, providerName: NAME, nativeId: `${doc.identifier}/${file.name}`, playbackClass: wantVideo ? "video" : "audio", delivery: "stream", url,
      title: normalizeText(Array.isArray(doc.title) ? doc.title[0] : doc.title), artist: creator, durationSec: parseLength(file.length), live: false, isPreview: false,
      attribution: `${normalizeText(doc.title)}${creator ? ` — ${creator}` : ""} · archive.org/details/${doc.identifier}`,
      license: licenseUrl || "Public domain collection", verified: true, mimeType: check.contentType,
      sourceUrl: `https://archive.org/details/${encodeURIComponent(doc.identifier)}`, score
    }));
  }
  return { candidates, note: candidates.length ? "public-domain / Creative Commons item" : "no licensed item matched" };
}

module.exports = Object.freeze({ id: ID, name: NAME, search, pickFile, downloadUrl, isConfigured: () => ({ configured: true, requires: [] }) });
