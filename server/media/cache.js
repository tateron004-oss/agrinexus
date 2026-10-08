"use strict";

// Small in-memory TTL cache. Used so a repeated request ("play Sir Duke" twice, or once by the server tool path and once by the phone)
// costs a provider search only once. Memory only: nothing is written to disk and nothing is tied to a person.

function createTtlCache({ ttlMs = 4 * 60 * 60 * 1000, max = 200, now = () => Date.now() } = {}) {
  const entries = new Map();
  return {
    get(key) {
      const hit = entries.get(key);
      if (!hit) return undefined;
      if (now() > hit.expiresAt) { entries.delete(key); return undefined; }
      return hit.value;
    },
    set(key, value, customTtlMs) {
      if (entries.size >= max) {
        const oldest = entries.keys().next().value;
        entries.delete(oldest);
      }
      entries.set(key, { value, expiresAt: now() + (customTtlMs || ttlMs) });
    },
    delete(key) { entries.delete(key); },
    clear() { entries.clear(); },
    get size() { return entries.size; }
  };
}

module.exports = Object.freeze({ createTtlCache });
