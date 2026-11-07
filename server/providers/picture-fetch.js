"use strict";

// Getting a picture from the public web for a flyer, newsletter, invitation or email, SAFELY. The person says "add a picture of fresh bread"; the app finds pictures (Pexels first when the server has a PEXELS_API_KEY, then the open-licence Wikimedia Commons and Openverse), downloads one on the SERVER and puts it
// in the file. Nothing a web page says is trusted:
//   - https only, no user name, no port, no number address, no private or internal name (checkLink), and every address the name resolves to must be public (assertPublicHost); the connection is then made to the address that was checked,
//     so the name cannot be pointed somewhere else between the check and the download (DNS rebinding)
//   - a redirect is followed at most 3 times and every step is checked again from the start
//   - at most 4 MB, 10 seconds in all; the bytes must really start like a PNG or JPEG (the content type the server sent is not believed)
//   - a picture the Word/PDF libraries cannot hold is passed over, and the next result is tried
// The credit that goes with a found picture (where it came from, who made it, the licence) is kept and printed in the file, and the card says plainly that found pictures belong to their owners.
//
// fetchPublicImage(url, options) -> { buffer, mime, ext, width, height, url }   (throws an Error with a .code)
// searchPictureCandidates(query, options) -> [{ title, imageUrl, sourceUrl, creator, license, sourceName }]
// findPicture(query, options) -> { buffer, mime, ext, width, height, title, sourceUrl, imageUrl, creator, license, credit } | null

const dns = require("node:dns").promises;
const https = require("node:https");
const { checkLink, assertPublicHost } = require("../../nexus/automations/connection.js");
const { sniffImage, assertDrawable } = require("./image-info.js");

const MAX_BYTES = 4 * 1024 * 1024;
const TIMEOUT_MS = 10000;
const MAX_REDIRECTS = 3;
const USER_AGENT = "AgriNexus/1.0 (document pictures; contact via the site)";
const IMAGE_TYPES = /^image\/(?:png|jpe?g)\b/i;

const fail = (code, message) => Object.assign(new Error(message), { code });

function requestOnce(url, address, { requester = https.request, timeoutMs, maxBytes }) {
  return new Promise((resolve, reject) => {
    const target = new URL(url);
    const family = address.includes(":") ? 6 : 4;
    // the connection goes to the address that was checked, whatever the name would resolve to now
    const lookup = (hostname, options, callback) => {
      const done = typeof options === "function" ? options : callback;
      const wantsAll = typeof options === "object" && options && options.all;
      if (wantsAll) done(null, [{ address, family }]); else done(null, address, family);
    };
    let settled = false; let timer = null;
    const finish = (error, value) => { if (settled) return; settled = true; clearTimeout(timer); if (error) reject(error); else resolve(value); };
    const request = requester({ protocol: "https:", hostname: target.hostname, port: 443, path: `${target.pathname}${target.search}`, method: "GET", lookup,
      headers: { "user-agent": USER_AGENT, accept: "image/png,image/jpeg;q=0.9,*/*;q=0.1", "accept-encoding": "identity" }, timeout: timeoutMs }, response => {
      const status = Number(response.statusCode) || 0;
      if (status >= 300 && status < 400 && response.headers?.location) { response.resume?.(); finish(null, { redirect: String(response.headers.location) }); return; }
      if (status !== 200) { response.resume?.(); finish(fail("picture_http", `The picture site answered ${status}.`)); return; }
      const declared = Number(response.headers?.["content-length"]);
      if (Number.isFinite(declared) && declared > maxBytes) { response.destroy?.(); finish(fail("picture_too_big", "That picture is bigger than 4 MB.")); return; }
      const chunks = []; let total = 0;
      response.on("data", chunk => {
        total += chunk.length;
        if (total > maxBytes) { response.destroy?.(); finish(fail("picture_too_big", "That picture is bigger than 4 MB.")); return; }
        chunks.push(chunk);
      });
      response.on("end", () => finish(null, { buffer: Buffer.concat(chunks), contentType: String(response.headers?.["content-type"] || "") }));
      response.on("error", error => finish(fail("picture_network", error.message || "The picture could not be downloaded.")));
    });
    timer = setTimeout(() => { try { request.destroy(); } catch { /* already gone */ } finish(fail("picture_timeout", "The picture site took too long.")); }, timeoutMs);
    request.on("timeout", () => { try { request.destroy(); } catch { /* already gone */ } finish(fail("picture_timeout", "The picture site took too long.")); });
    request.on("error", error => finish(fail("picture_network", error.message || "The picture could not be downloaded.")));
    request.end();
  });
}

async function fetchPublicImage(rawUrl, { lookup = hostname => dns.lookup(hostname, { all: true, verbatim: true }), requester = https.request, maxBytes = MAX_BYTES, timeoutMs = TIMEOUT_MS, maxRedirects = MAX_REDIRECTS } = {}) {
  const startedAt = Date.now();
  let current = String(rawUrl || "");
  for (let hop = 0; hop <= maxRedirects; hop += 1) {
    const link = checkLink(current);
    if (!link.ok) throw fail("picture_link", link.message || "That picture address cannot be used.");
    let addresses;
    try { addresses = await assertPublicHost(link.host, { lookup }); } catch (error) { throw fail("picture_blocked", error?.message || "That picture address cannot be used."); }
    const remaining = timeoutMs - (Date.now() - startedAt);
    if (remaining <= 0) throw fail("picture_timeout", "The picture site took too long.");
    const result = await requestOnce(link.url, addresses[0], { requester, timeoutMs: remaining, maxBytes });
    if (result.redirect) {
      try { current = new URL(result.redirect, link.url).toString(); } catch { throw fail("picture_link", "The picture site sent a bad redirect."); }
      continue;
    }
    const info = sniffImage(result.buffer);
    if (!info) throw fail("picture_type", "That was not a PNG or JPEG picture.");
    return { buffer: result.buffer, mime: info.mime, ext: info.ext, width: info.width, height: info.height, url: link.url };
  }
  throw fail("picture_redirects", "The picture address redirected too many times.");
}

// ---------- finding candidates ----------
const clean = (value, limit = 200) => String(value || "").replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#0?39;/g, "'").replace(/\s+/g, " ").trim().slice(0, limit);
const FILLER = /\b(?:show|find|search|display|open|me|my|our|your|real|current|today|now|of|for|about|some|any|the|a|an|to|with|and|also|please|images?|photos?|pictures?|photographs?)\b/gi;
function cleanQuery(query) { return clean(query, 120).replace(FILLER, " ").replace(/[^\p{L}\p{N}\s'-]/gu, " ").replace(/\s+/g, " ").trim(); }

async function searchCommons(query, { fetchFn = globalThis.fetch } = {}) {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.searchParams.set("action", "query"); url.searchParams.set("generator", "search"); url.searchParams.set("gsrsearch", `filetype:bitmap ${query}`); url.searchParams.set("gsrnamespace", "6"); url.searchParams.set("gsrlimit", "10");
  url.searchParams.set("prop", "imageinfo"); url.searchParams.set("iiprop", "url|extmetadata|mime"); url.searchParams.set("iiurlwidth", "1100"); url.searchParams.set("format", "json"); url.searchParams.set("origin", "*");
  const response = await fetchFn(url, { headers: { "user-agent": USER_AGENT, accept: "application/json" }, redirect: "error", signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw fail("picture_search", `Wikimedia Commons answered ${response.status}.`);
  const payload = await response.json();
  return Object.values(payload?.query?.pages || {}).map(page => {
    const info = page.imageinfo?.[0] || {}; const meta = info.extmetadata || {};
    // a small PNG or JPEG copy of the picture (the thumbnail is at most 1100 px wide), never the original that may be tens of megabytes
    if (!/^image\/(?:png|jpe?g)$/i.test(String(info.mime || ""))) return null;
    const imageUrl = info.thumburl || info.url || "";
    // the words the picture is described with (its description and its categories) are kept: they are what a picture is checked against (see rankCandidates)
    return imageUrl ? { title: clean(String(page.title || "").replace(/^File:/i, "").replace(/\.[a-z]{3,4}$/i, ""), 160), imageUrl, sourceUrl: info.descriptionurl || "", creator: clean(meta.Artist?.value, 120), license: clean(meta.LicenseShortName?.value || meta.UsageTerms?.value, 80), sourceName: "Wikimedia Commons",
      description: clean(meta.ImageDescription?.value, 300), categories: clean(String(meta.Categories?.value || "").replace(/\|/g, " . "), 400) } : null;
  }).filter(Boolean);
}

// Openverse gives the licence as a short code ("by", "by-sa", "cc0"): the credit printed in a document must read as a licence ("CC BY"), not as a stray word (found live on 5 November 2026: "Picture: flickr, striatic, by").
function readableLicense(value) {
  const code = String(value || "").trim();
  if (!code) return "";
  if (/^cc0$/i.test(code)) return "CC0";
  if (/^pdm$/i.test(code)) return "Public domain";
  if (/^by(?:-(?:nc|nd|sa))*$/i.test(code)) return `CC ${code.toUpperCase()}`;
  return code;
}

// Pexels (free photographs, free to use with credit to the photographer): used first when PEXELS_API_KEY is set, because its pictures are made to look good on a flyer. The key is the server's own and is never sent anywhere but api.pexels.com.
// Pexels allows 200 requests an hour, so an answer is kept for ten minutes and an hour's worth of requests is counted; past the allowance (or on any error) the open sources below are used as before.
const PEXELS_CACHE_MS = 10 * 60 * 1000;
const PEXELS_HOURLY_LIMIT = 150;
const pexelsCache = new Map();
const pexelsCalls = [];
async function searchPexels(query, { fetchFn = globalThis.fetch, apiKey = process.env.PEXELS_API_KEY, now = () => Date.now() } = {}) {
  const key = String(apiKey || "").trim();
  if (!key || !/^[A-Za-z0-9_-]{20,120}$/.test(key)) return [];
  const asked = now();
  const kept = pexelsCache.get(query);
  if (kept && asked - kept.at < PEXELS_CACHE_MS) return kept.items;
  while (pexelsCalls.length && asked - pexelsCalls[0] > 3600 * 1000) pexelsCalls.shift();
  if (pexelsCalls.length >= PEXELS_HOURLY_LIMIT) return [];
  pexelsCalls.push(asked);
  const url = new URL("https://api.pexels.com/v1/search");
  url.searchParams.set("query", query); url.searchParams.set("per_page", "10"); url.searchParams.set("orientation", "landscape");
  const response = await fetchFn(url, { headers: { authorization: key, "user-agent": USER_AGENT, accept: "application/json" }, redirect: "error", signal: AbortSignal.timeout(8000) });
  if (!response.ok) throw fail("picture_search", `Pexels answered ${response.status}.`);
  const payload = await response.json();
  const items = (Array.isArray(payload?.photos) ? payload.photos : []).map(photo => {
    const imageUrl = String(photo?.src?.large || photo?.src?.medium || "");
    if (!/^https:\/\/images\.pexels\.com\//i.test(imageUrl)) return null;
    // Pexels ranks by meaning, and its short description ("alt") is what the picture is checked against; a picture with no description is trusted to be about the search
    const alt = clean(photo.alt, 300);
    return { title: alt || query, imageUrl, sourceUrl: String(photo.url || ""), creator: clean(photo.photographer, 120), license: "Pexels License", sourceName: "Pexels", description: alt || query, categories: "", preferred: true };
  }).filter(Boolean);
  pexelsCache.set(query, { at: asked, items });
  if (pexelsCache.size > 200) pexelsCache.delete(pexelsCache.keys().next().value);
  return items;
}

async function searchPictureCandidates(query, { fetchFn = globalThis.fetch, openImages, pexelsKey } = {}) {
  const text = cleanQuery(query);
  if (!text) return [];
  const out = [];
  try { out.push(...await searchPexels(text, pexelsKey === undefined ? { fetchFn } : { fetchFn, apiKey: pexelsKey })); } catch { /* the open sources are used */ }
  try { out.push(...await searchCommons(text, { fetchFn })); } catch { /* the next source is tried */ }
  try {
    const search = openImages || require("../nexus-open-image-fallback.js").searchOpenImages;
    for (const item of await search(text, { fetchFn })) out.push({ title: clean(item.title, 160), imageUrl: item.imageUrl, sourceUrl: item.sourceUrl, creator: clean(item.creator, 120), license: clean(readableLicense(item.license), 80), sourceName: clean(item.sourceName, 60) || "Openverse" });
  } catch { /* what was found so far is used */ }
  return out;
}

// ---------- does the picture match what was asked for? ----------
// Found live on 5 November 2026: "a picture of a broom" put a Wikimedia picture of a BROMINE chemistry sample on a clean-up poster (the search matches word beginnings and near words), and "the church building" returned a night view of a ruin.
// So a candidate must really be about the words asked for: every significant word of the request (after folding a plural to its singular) must appear as a WHOLE WORD in the picture's title, description or categories. "broom" is not "bromine" and
// "church" is not "Churchill". The candidates are put in order: all the words in the TITLE first, then the title's share of the words, then the order the source gave them. Nothing that does not match is ever used: no picture is better than a wrong one.
const STOP_WORDS = new Set(["a", "an", "the", "of", "for", "and", "or", "in", "on", "at", "to", "with", "from", "by", "my", "our", "your", "some", "any", "very", "good", "nice", "great", "real", "new", "old", "big", "small", "picture", "pictures", "photo", "photos", "image", "images", "photograph", "photographs"]);
// words that only say what KIND of thing it is: they help rank a picture but are not required when another word of the request is ("the church building": it is about a church)
const KIND_WORDS = new Set(["building", "buildings", "exterior", "outside", "inside", "interior", "view", "views", "scene", "scenes", "sample", "samples", "type", "types", "kind"]);
function foldWord(raw) {
  const word = String(raw || "").toLowerCase().replace(/['’]s$/, "");
  if (word.length > 4 && word.endsWith("ies")) return `${word.slice(0, -3)}y`;
  if (word.length > 4 && /(?:ss|x|z|ch|sh)es$/.test(word)) return word.slice(0, -2);
  if (word.length > 3 && word.endsWith("s") && !word.endsWith("ss") && !word.endsWith("us") && !word.endsWith("is")) return word.slice(0, -1);
  return word;
}
const wordsOf = text => (String(text || "").toLowerCase().match(/[\p{L}\p{N}]+(?:['’][\p{L}]+)?/gu) || []).map(foldWord).filter(Boolean);
function queryWords(query) {
  const all = [...new Set(wordsOf(cleanQuery(query)).filter(word => word.length >= 2 && !STOP_WORDS.has(word)))];
  const needed = all.filter(word => !KIND_WORDS.has(word));
  return { all, needed: needed.length ? needed : all };
}
function rankCandidates(query, candidates) {
  const { all, needed } = queryWords(query);
  if (!needed.length) return [];
  const scored = [];
  (Array.isArray(candidates) ? candidates : []).forEach((item, order) => {
    if (!item || !item.imageUrl) return;
    const inTitle = new Set(wordsOf(item.title)); const inText = new Set([...inTitle, ...wordsOf(item.description), ...wordsOf(item.categories)]);
    if (!needed.every(word => inText.has(word))) return; // a whole word, every one of them
    // a category that is just the thing asked for ("Brooms", "Church buildings") says the picture IS one; "Robert Broom" or "Broom Lane" are a person and a road with the same word in their names
    const exactCategory = String(item.categories || "").split(" . ").some(category => { const words = new Set(wordsOf(category)); return words.size > 0 && needed.every(word => words.has(word)) && [...words].every(word => all.includes(word) || KIND_WORDS.has(word)); });
    // a night view or a silhouette prints as a dark smudge on a flyer: it is used only when nothing better matches (unless it is what was asked for)
    const dark = ["night", "dark", "evening", "dusk", "silhouette"].some(word => inTitle.has(word) && !all.includes(word)) ? 1 : 0;
    // (a Pexels photograph is made to look good on a flyer: it goes before an equally good open picture)
    scored.push({ item, order, points: (item.preferred ? 3 : 0) + (exactCategory ? 2 : 0) + (needed.every(word => inTitle.has(word)) ? 1 : 0) - dark, titleShare: all.filter(word => inTitle.has(word)).length });
  });
  return scored.sort((a, b) => b.points - a.points || b.titleShare - a.titleShare || a.order - b.order).map(entry => entry.item);
}

const creditLine = item => {
  const parts = [clean(item.sourceName, 60), clean(item.creator, 100), clean(item.license, 60)].filter(Boolean);
  return `Picture: ${parts.length ? parts.join(", ") : "from the web"}`.slice(0, 200);
};

// The first candidate that downloads, is a real PNG/JPEG within the limits, and can be held by both the Word and the PDF file. null when none does (the document is then made without it, and the person is told).
async function findPicture(query, { candidates, fetchOptions = {}, searchOptions = {}, limit = 6 } = {}) {
  // only pictures that are really about the words asked for are ever tried (the source's own order is kept among equals, Wikimedia Commons before Openverse, so the next source is used when the first has nothing that matches)
  const found = rankCandidates(query, candidates || await searchPictureCandidates(query, searchOptions));
  let tried = 0;
  for (const item of found) {
    if (tried >= limit) break;
    tried += 1;
    try {
      const image = await fetchPublicImage(item.imageUrl, fetchOptions);
      assertDrawable(image.buffer);
      if (image.width < 200 || image.height < 120) continue; // too small to look good printed
      return { buffer: image.buffer, mime: image.mime, ext: image.ext, width: image.width, height: image.height, title: clean(item.title, 160), sourceUrl: item.sourceUrl || "", imageUrl: image.url, creator: item.creator || "", license: item.license || "", credit: creditLine(item) };
    } catch { /* the next result is tried */ }
  }
  return null;
}

module.exports = Object.freeze({ MAX_BYTES, TIMEOUT_MS, fetchPublicImage, searchPexels, searchPictureCandidates, findPicture, cleanQuery, creditLine, rankCandidates, queryWords, readableLicense });
