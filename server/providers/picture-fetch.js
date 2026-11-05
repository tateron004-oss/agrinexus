"use strict";

// Getting a picture from the public web for a flyer, newsletter, invitation or email, SAFELY. The person says "add a picture of fresh bread"; the app finds open-licence pictures (Wikimedia Commons, then Openverse), downloads one on the SERVER and puts it
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
    return imageUrl ? { title: clean(String(page.title || "").replace(/^File:/i, "").replace(/\.[a-z]{3,4}$/i, ""), 160), imageUrl, sourceUrl: info.descriptionurl || "", creator: clean(meta.Artist?.value, 120), license: clean(meta.LicenseShortName?.value || meta.UsageTerms?.value, 80), sourceName: "Wikimedia Commons" } : null;
  }).filter(Boolean);
}

async function searchPictureCandidates(query, { fetchFn = globalThis.fetch, openImages } = {}) {
  const text = cleanQuery(query);
  if (!text) return [];
  const out = [];
  try { out.push(...await searchCommons(text, { fetchFn })); } catch { /* the next source is tried */ }
  try {
    const search = openImages || require("../nexus-open-image-fallback.js").searchOpenImages;
    for (const item of await search(text, { fetchFn })) out.push({ title: clean(item.title, 160), imageUrl: item.imageUrl, sourceUrl: item.sourceUrl, creator: clean(item.creator, 120), license: clean(item.license, 80), sourceName: clean(item.sourceName, 60) || "Openverse" });
  } catch { /* what was found so far is used */ }
  return out;
}

const creditLine = item => {
  const parts = [clean(item.sourceName, 60), clean(item.creator, 100), clean(item.license, 60)].filter(Boolean);
  return `Picture: ${parts.length ? parts.join(", ") : "from the web"}`.slice(0, 200);
};

// The first candidate that downloads, is a real PNG/JPEG within the limits, and can be held by both the Word and the PDF file. null when none does (the document is then made without it, and the person is told).
async function findPicture(query, { candidates, fetchOptions = {}, searchOptions = {}, limit = 6 } = {}) {
  const found = candidates || await searchPictureCandidates(query, searchOptions);
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

module.exports = Object.freeze({ MAX_BYTES, TIMEOUT_MS, fetchPublicImage, searchPictureCandidates, findPicture, cleanQuery, creditLine });
