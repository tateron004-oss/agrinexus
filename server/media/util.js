"use strict";

// Shared helpers for the media resolver (server/media/*). Everything here is pure or takes its dependencies through a
// "context" object, so each provider can be tested with a fake fetch and no network.
//
// ctx = { env, fetch, now(), state, cache, userAgent, timeoutMs }
//   - fetch     the fetch implementation (tests pass a fake; production uses the global one)
//   - state     quota counters + per-provider health (server/media/state.js)
//   - cache     short-lived result cache (server/media/cache.js)

const APP_NAME = "KyroAgriNexus";
const USER_AGENT = "Kyro-AgriNexus/1.0 (voice assistant; media resolver; plays directly from each provider's own URL)";

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function clip(value, max = 200) {
  return normalizeText(value).slice(0, max);
}

// Lower-case, strip accents and punctuation: used for matching a request against titles, artists and station names.
function fold(value) {
  return normalizeText(value)
    .normalize("NFKD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const STOP_WORDS = new Set(["the", "a", "an", "of", "by", "and", "feat", "ft", "featuring", "official", "audio", "video", "music", "song", "songs",
  "play", "radio", "station", "fm", "live", "lyrics", "ya", "wa", "za", "na", "wimbo", "redio", "muziki"]);

function significantTokens(value) {
  return fold(value).split(" ").filter(token => token.length > 1 && !STOP_WORDS.has(token));
}

// 0..1: how much of the request's meaningful words appear in the candidate text.
function relevance(request, candidateText) {
  const tokens = significantTokens(request);
  if (!tokens.length) return 0;
  const haystack = ` ${fold(candidateText)} `;
  let hits = 0;
  for (const token of tokens) if (haystack.includes(` ${token} `) || haystack.includes(token)) hits += 1;
  return hits / tokens.length;
}

// 0..1: how much of the candidate's own title is explained by the request. A mashup called "TLC x Burna Boy Last Last - remix" has low
// precision for the request "Burna Boy Last Last", so a loose match is not played as if it were the song asked for.
function precision(request, candidateTitle) {
  const wanted = new Set(significantTokens(request));
  const own = significantTokens(String(candidateTitle || "").replace(/\([^)]*\)|\[[^\]]*\]/g, " "));
  if (!own.length) return 0;
  return own.filter(token => wanted.has(token)).length / own.length;
}

function resolveFetch(env, override) {
  if (typeof override === "function") return override;
  if (env && typeof env.NEXUS_MUSIC_MEDIA_FETCH_IMPL === "function") return env.NEXUS_MUSIC_MEDIA_FETCH_IMPL;
  return typeof globalThis.fetch === "function" ? globalThis.fetch.bind(globalThis) : null;
}

function createContext(overrides = {}) {
  const env = overrides.env || process.env;
  return {
    env,
    fetch: resolveFetch(env, overrides.fetch),
    now: overrides.now || (() => Date.now()),
    state: overrides.state || null,
    cache: overrides.cache || null,
    userAgent: overrides.userAgent || USER_AGENT,
    timeoutMs: Number(overrides.timeoutMs || 6000),
    random: overrides.random || Math.random,
    // Test hooks for the resolver's time budgets (production uses the defaults in resolver.js).
    providerBudgetMs: overrides.providerBudgetMs || 0,
    totalBudgetMs: overrides.totalBudgetMs || 0
  };
}

class ProviderError extends Error {
  constructor(code, message, details = {}) {
    super(message || code);
    this.code = code;
    Object.assign(this, details);
  }
}

// GET + parse JSON with a timeout. Never throws anything but ProviderError so callers can report an honest reason.
async function fetchJson(ctx, url, { headers = {}, timeoutMs, method = "GET" } = {}) {
  if (typeof ctx.fetch !== "function") throw new ProviderError("fetch-unavailable", "fetch is not available");
  let response;
  try {
    response = await ctx.fetch(String(url), {
      method,
      headers: { "user-agent": ctx.userAgent, accept: "application/json", ...headers },
      signal: AbortSignal.timeout(timeoutMs || ctx.timeoutMs)
    });
  } catch (error) {
    const timedOut = error?.name === "TimeoutError" || error?.name === "AbortError";
    throw new ProviderError(timedOut ? "timeout" : "network-error", timedOut ? "request timed out" : clip(error?.message || "network error", 120));
  }
  if (!response || response.ok !== true) {
    let body = null;
    try { body = await response?.json?.(); } catch (_) { body = null; }
    throw new ProviderError(`http-${response?.status ?? "error"}`, `HTTP ${response?.status ?? "error"}`, { status: response?.status, body });
  }
  try {
    return await response.json();
  } catch (_) {
    throw new ProviderError("bad-json", "response was not valid JSON");
  }
}

// Runs the checks at the same time and returns the ones that passed, in the original (ranked) order, as soon as there are `want` of them or
// `graceMs` after the first pass: a dead stream costs its timeout once, in the background, instead of holding everybody up.
async function collectVerified(tasks, { want = 3, graceMs = 700 } = {}) {
  const results = new Array(tasks.length).fill(null);
  let passed = 0;
  let pending = tasks.length;
  return new Promise(resolve => {
    let timer = null;
    let done = false;
    const finish = () => { if (done) return; done = true; if (timer) clearTimeout(timer); resolve(results.filter(Boolean)); };
    if (!tasks.length) return finish();
    tasks.forEach((task, index) => {
      Promise.resolve().then(task).catch(() => null).then(value => {
        pending -= 1;
        if (value) {
          results[index] = value;
          passed += 1;
          if (passed >= want) return finish();
          if (passed === 1 && !timer) timer = setTimeout(finish, graceMs);
        }
        if (pending === 0) finish();
      });
    });
  });
}

function shuffled(list, random = Math.random) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1));
    [copy[index], copy[swap]] = [copy[swap], copy[index]];
  }
  return copy;
}

function httpsOnly(url) {
  return typeof url === "string" && /^https:\/\//i.test(url.trim());
}

// Country name or ISO code -> ISO 3166 alpha-2. Kyro is used mostly in East and West Africa.
const COUNTRY_CODES = Object.freeze({
  kenya: "KE", drc: "CD", nigeria: "NG", tanzania: "TZ", uganda: "UG", ghana: "GH", rwanda: "RW", ethiopia: "ET", "south africa": "ZA", zambia: "ZM",
  zimbabwe: "ZW", malawi: "MW", mozambique: "MZ", senegal: "SN", "cote d ivoire": "CI", "ivory coast": "CI", cameroon: "CM",
  "dr congo": "CD", "democratic republic of the congo": "CD", congo: "CD", burundi: "BI", somalia: "SO", "south sudan": "SS", sudan: "SD",
  egypt: "EG", morocco: "MA", "united states": "US", usa: "US", "united kingdom": "GB", uk: "GB", india: "IN", france: "FR", germany: "DE"
});

function countryCode(value) {
  const raw = normalizeText(value);
  if (!raw) return "";
  if (/^[A-Za-z]{2}$/.test(raw)) return raw.toUpperCase();
  return COUNTRY_CODES[fold(raw)] || "";
}

module.exports = Object.freeze({
  APP_NAME, USER_AGENT, hasText, normalizeText, clip, fold, significantTokens, relevance, precision, resolveFetch, createContext, ProviderError,
  fetchJson, collectVerified, shuffled, httpsOnly, countryCode, COUNTRY_CODES
});
