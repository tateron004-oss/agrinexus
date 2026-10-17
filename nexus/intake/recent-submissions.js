"use strict";

// The same person sending the same finished interview twice in a short while (the page gave up waiting after 30 seconds and the person said yes again, or a button was tapped twice) must save it once.
// The first answer is kept for a few minutes and handed back to the repeat; one still being worked on is shared, not started again. An answer that did not complete, or a failure, is never kept, so a real retry still works.
// (In memory: one server process answers these requests, and a restart only means a repeat after it is treated as new, which is the behaviour before this existed.)
const crypto = require("node:crypto");

const WINDOW_MS = 3 * 60 * 1000;
const MAX_KEPT = 500;

const canonical = value => {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") return Object.keys(value).sort().reduce((out, key) => { out[key] = canonical(value[key]); return out; }, {});
  return typeof value === "string" ? value.trim() : value;
};

function createRecentSubmissions({ windowMs = WINDOW_MS, now = () => Date.now() } = {}) {
  const kept = new Map();
  const keyFor = ({ tenantId, userId, intakeId, values }) => crypto.createHash("sha256").update(JSON.stringify([tenantId, userId, intakeId, canonical(values || {})])).digest("hex");

  function prune() {
    const cutoff = now() - windowMs;
    for (const [key, entry] of kept) if (entry.settledAt && entry.settledAt < cutoff) kept.delete(key);
    while (kept.size > MAX_KEPT) kept.delete(kept.keys().next().value);
  }

  // run() does the real work; the same submission inside the window gets the first run's result.
  async function once(identity, run) {
    prune();
    const key = keyFor(identity);
    const existing = kept.get(key);
    if (existing) return existing.promise;
    const entry = { settledAt: 0, promise: null };
    entry.promise = Promise.resolve().then(run).then(result => {
      if (result && result.completed === true) entry.settledAt = now(); else kept.delete(key);
      return result;
    }, error => { kept.delete(key); throw error; });
    kept.set(key, entry);
    return entry.promise;
  }

  return Object.freeze({ once, size: () => kept.size });
}

module.exports = Object.freeze({ createRecentSubmissions, WINDOW_MS });
