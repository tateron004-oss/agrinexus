"use strict";

// The meter for live web lookups (the searches that cost money each time): a cache so the hundredth person asking the same thing costs nothing, a daily cap per person and a daily cap for everyone so a bill cannot run away,
// and counters so the owner can see the numbers (GET /api/admin/system/lookups). It is in memory: a restart empties the cache and the day's counts, which only ever lets a few more lookups through, never fewer.
//
//   const meter = createLookupMeter({ env, now })
//   meter.cacheKey(query) -> a normalized key, or "" when the query looks personal (an e-mail address, a phone or ID number) and must never be kept or shared
//   meter.cached(key) -> the saved result or null        meter.save(key, result)
//   meter.allow(person) -> { allowed, reason, remaining }        meter.record(person)       meter.hit()   meter.blocked(reason)
//   meter.snapshot() -> the numbers for the owner (no names: people are counted, not listed)
//
// Settings (all optional): NEXUS_LIVE_LOOKUPS_PER_USER_PER_DAY (default 40), NEXUS_LIVE_LOOKUPS_PER_DAY_TOTAL (default 1500), NEXUS_LIVE_LOOKUP_CACHE_MINUTES (default 360), 0 or "off" turns a cap off.

const DEFAULTS = Object.freeze({ perUser: 40, total: 1500, cacheMinutes: 360, maxEntries: 500 });

function setting(env, name, fallback) {
  const raw = env && env[name];
  if (raw === undefined || raw === null || String(raw).trim() === "") return fallback;
  if (/^(?:off|none|unlimited)$/i.test(String(raw).trim())) return 0;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? Math.floor(value) : fallback;
}

const PERSONAL = /[\w.+-]+@[\w-]+\.[\w.]+|\b\d{7,}\b|\b\d{3}[ -]\d{2}[ -]\d{4}\b|\b(?:\d[ -]?){9,}\b/;

function createLookupMeter({ env = process.env, now = () => Date.now() } = {}) {
  const perUser = setting(env, "NEXUS_LIVE_LOOKUPS_PER_USER_PER_DAY", DEFAULTS.perUser);
  const total = setting(env, "NEXUS_LIVE_LOOKUPS_PER_DAY_TOTAL", DEFAULTS.total);
  const ttlMs = setting(env, "NEXUS_LIVE_LOOKUP_CACHE_MINUTES", DEFAULTS.cacheMinutes) * 60000;
  const cache = new Map();
  let day = ""; let today = { calls: 0, cacheHits: 0, blockedPerUser: 0, blockedTotal: 0, people: new Map() };
  const history = [];
  const dayOf = () => new Date(now()).toISOString().slice(0, 10);
  function roll() {
    const current = dayOf();
    if (day && day !== current) {
      history.push({ day, calls: today.calls, cacheHits: today.cacheHits, blocked: today.blockedPerUser + today.blockedTotal, people: today.people.size });
      while (history.length > 14) history.shift();
      today = { calls: 0, cacheHits: 0, blockedPerUser: 0, blockedTotal: 0, people: new Map() };
    }
    day = current;
  }

  return {
    settings: Object.freeze({ perUser, total, cacheMinutes: ttlMs / 60000 }),
    cacheKey(query) {
      const text = String(query || "").trim();
      if (!text || PERSONAL.test(text)) return "";
      return text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim().slice(0, 300);
    },
    cached(key) {
      if (!key || !ttlMs) return null;
      const entry = cache.get(key);
      if (!entry) return null;
      if (now() - entry.at > ttlMs) { cache.delete(key); return null; }
      return entry.result;
    },
    save(key, result) {
      if (!key || !ttlMs || !result) return;
      cache.delete(key);
      cache.set(key, { at: now(), result });
      while (cache.size > DEFAULTS.maxEntries) cache.delete(cache.keys().next().value);
    },
    allow(person) {
      roll();
      if (total && today.calls >= total) return { allowed: false, reason: "total", remaining: 0 };
      // (nobody in particular, for example a lookup a background flow makes: only the all-people limit applies)
      if (!person) return { allowed: true, reason: "", remaining: Infinity };
      const used = today.people.get(String(person)) || 0;
      if (perUser && used >= perUser) return { allowed: false, reason: "person", remaining: 0 };
      return { allowed: true, reason: "", remaining: perUser ? perUser - used : Infinity };
    },
    record(person) {
      roll();
      today.calls += 1;
      if (person) today.people.set(String(person), (today.people.get(String(person)) || 0) + 1);
    },
    hit() { roll(); today.cacheHits += 1; },
    blocked(reason) { roll(); if (reason === "total") today.blockedTotal += 1; else today.blockedPerUser += 1; },
    snapshot() {
      roll();
      const counts = [...today.people.values()].sort((a, b) => b - a);
      return {
        day, limits: { perPersonPerDay: perUser || "off", allPeoplePerDay: total || "off", cacheMinutes: ttlMs / 60000 },
        today: { lookups: today.calls, answeredFromSaved: today.cacheHits, stoppedByPersonLimit: today.blockedPerUser, stoppedByDailyTotal: today.blockedTotal, people: today.people.size, busiestPersonLookups: counts[0] || 0 },
        saved: { entries: cache.size },
        recentDays: history.slice()
      };
    }
  };
}

module.exports = Object.freeze({ createLookupMeter, DEFAULTS });
