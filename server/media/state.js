"use strict";

// Quota guard + provider health for the media resolver.
//
// YouTube Data API: search.list costs 100 units of the default 10,000 per day (the day resets at midnight Pacific time). This keeps a
// counter that survives a restart when a state file is writable, refuses a search that would go past the limit (the resolver then
// uses the other providers), and treats a real "quotaExceeded" answer from Google as "exhausted until the next Pacific day".
//
// Nothing personal is stored: only counts, timestamps and short error codes per provider -- never a query, a user, or a listening history.

const fs = require("node:fs");
const path = require("node:path");

const SEARCH_COST = 100;
const LIST_COST = 1;

function pacificDay(ms) {
  try {
    return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Los_Angeles", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(ms));
  } catch (_) {
    return new Date(ms).toISOString().slice(0, 10);
  }
}

function createMediaState({ filePath = "", now = () => Date.now(), env = process.env } = {}) {
  const limit = Math.max(100, Number(env.NEXUS_YOUTUBE_DAILY_QUOTA || 10000) || 10000);
  // Units kept back for other uses of the same key (the older "show me videos" search shares it).
  const reserve = Math.max(0, Number(env.NEXUS_YOUTUBE_QUOTA_RESERVE ?? 300) || 0);
  let youtube = { day: pacificDay(now()), used: 0, exhausted: false };
  const providers = {};
  let writeTimer = null;

  if (filePath) {
    try {
      const saved = JSON.parse(fs.readFileSync(filePath, "utf8"));
      if (saved && saved.youtube && saved.youtube.day === youtube.day) {
        youtube = { day: saved.youtube.day, used: Math.max(0, Number(saved.youtube.used) || 0), exhausted: saved.youtube.exhausted === true };
      }
    } catch (_) { /* no saved state yet */ }
  }

  function rollDay() {
    const today = pacificDay(now());
    if (youtube.day !== today) youtube = { day: today, used: 0, exhausted: false };
  }

  function persist() {
    if (!filePath || writeTimer) return;
    writeTimer = setTimeout(() => {
      writeTimer = null;
      try {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify({ youtube }), "utf8");
      } catch (_) { /* a read-only disk only means the counter restarts with the process */ }
    }, 250);
    writeTimer.unref?.();
  }

  function health(id) {
    if (!providers[id]) providers[id] = { ok: 0, failed: 0, lastOkAt: null, lastErrorAt: null, lastError: null, lastLatencyMs: null };
    return providers[id];
  }

  return {
    limit,
    reserve,
    quota() {
      rollDay();
      const remaining = youtube.exhausted ? 0 : Math.max(0, limit - youtube.used);
      return { day: youtube.day, limit, used: youtube.used, remaining, reserve, exhausted: youtube.exhausted || remaining <= reserve };
    },
    // Is there room for a request costing `units`, keeping the reserve?
    canSpendYoutube(units = SEARCH_COST) {
      rollDay();
      return !youtube.exhausted && youtube.used + units + reserve <= limit;
    },
    spendYoutube(units = SEARCH_COST) {
      rollDay();
      youtube.used += units;
      persist();
    },
    markYoutubeExhausted() {
      rollDay();
      youtube.exhausted = true;
      persist();
    },
    recordOk(id, latencyMs) {
      const entry = health(id);
      entry.ok += 1;
      entry.lastOkAt = new Date(now()).toISOString();
      entry.lastLatencyMs = Number.isFinite(latencyMs) ? Math.round(latencyMs) : null;
    },
    recordError(id, code, latencyMs) {
      const entry = health(id);
      entry.failed += 1;
      entry.lastErrorAt = new Date(now()).toISOString();
      entry.lastError = String(code || "error").slice(0, 120);
      entry.lastLatencyMs = Number.isFinite(latencyMs) ? Math.round(latencyMs) : entry.lastLatencyMs;
    },
    health() {
      return JSON.parse(JSON.stringify(providers));
    },
    flush() {
      if (writeTimer) { clearTimeout(writeTimer); writeTimer = null; }
      if (!filePath) return;
      try {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, JSON.stringify({ youtube }), "utf8");
      } catch (_) { /* see persist() */ }
    }
  };
}

module.exports = Object.freeze({ createMediaState, pacificDay, SEARCH_COST, LIST_COST });
