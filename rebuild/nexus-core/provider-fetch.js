"use strict";

const TRANSIENT_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);

function retryAfterMilliseconds(response) {
  const value = response && response.headers && response.headers.get("retry-after");
  if (!value) return 0;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const at = Date.parse(value);
  return Number.isFinite(at) ? Math.max(0, at - Date.now()) : 0;
}

function createProviderFetch({
  fetchImpl = globalThis.fetch,
  maxAttempts = 4,
  baseDelayMs = 250,
  maxDelayMs = 2000,
  sleepImpl = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))
} = {}) {
  if (typeof fetchImpl !== "function") throw new TypeError("A provider fetch implementation is required.");
  return async function providerFetch(input, init = {}) {
    const method = String(init.method || "GET").toUpperCase();
    if (!["GET", "HEAD"].includes(method)) return fetchImpl(input, init);
    let lastError = null;
    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
      if (init.signal && init.signal.aborted) throw init.signal.reason || new Error("The provider request was aborted.");
      try {
        const response = await fetchImpl(input, init);
        if (!TRANSIENT_STATUS.has(Number(response && response.status)) || attempt === maxAttempts) return response;
        if (response.body && typeof response.body.cancel === "function") await response.body.cancel().catch(() => {});
        const backoff = Math.min(maxDelayMs, baseDelayMs * (2 ** (attempt - 1)));
        await sleepImpl(Math.max(backoff, Math.min(maxDelayMs, retryAfterMilliseconds(response))));
      } catch (error) {
        lastError = error;
        if (attempt === maxAttempts) throw error;
        await sleepImpl(Math.min(maxDelayMs, baseDelayMs * (2 ** (attempt - 1))));
      }
    }
    throw lastError || new Error("The provider request failed.");
  };
}

module.exports = { createProviderFetch, retryAfterMilliseconds, TRANSIENT_STATUS };
