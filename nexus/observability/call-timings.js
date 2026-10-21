"use strict";

// How long does Kyro wait for each outside service, and how long does each request of its own take? The measurements of 21 October showed the same question taking 6 to 30 seconds from one try to the next, and from outside there
// was no way to tell whether that was the AI model, a free map service, or Kyro's own code. This keeps a short, process-local record of both:
//   - every call out to another service (OpenAI answers, speech, transcription and realtime; OpenStreetMap's Nominatim and Overpass; the weather services; Twilio ...), how long it took to answer, whether it failed or timed out,
//     and for OpenAI the time OpenAI itself says it spent (the openai-processing-ms header), so network time and model time can be told apart;
//   - every request to Kyro's own /api routes, with how long the whole request took.
// Only the service name, the route, the time and the status are kept: never a web address with its query, a header, a key, a body or a person. Like the error log, it lives in memory and starts again empty on every restart.

const RING = 200;
const MAX_LABELS = 150;
const SLOWEST = 12;

// A web address -> the service it is for. Anything not known is "other:<host>" (host only).
function classifyOutbound(input) {
  let url;
  try { url = new URL(typeof input === "string" ? input : input && input.url ? input.url : String(input)); } catch { return null; }
  const host = url.hostname.toLowerCase();
  const path = url.pathname;
  if (host === "localhost" || host === "127.0.0.1" || host === "[::1]" || host.endsWith(".localhost")) return null;
  if (host === "api.openai.com") {
    if (/^\/v1\/responses/.test(path)) return "openai.responses";
    if (/^\/v1\/audio\/transcriptions/.test(path)) return "openai.transcribe";
    if (/^\/v1\/audio\/speech/.test(path)) return "openai.speech";
    if (/^\/v1\/realtime/.test(path)) return "openai.realtime";
    if (/^\/v1\/chat\/completions/.test(path)) return "openai.chat";
    return "openai.other";
  }
  if (host.endsWith("nominatim.openstreetmap.org")) return "map.nominatim";
  if (host.includes("overpass")) return "map.overpass";
  if (host.includes("osrm") || host.includes("openrouteservice") || host.includes("valhalla")) return "map.route";
  if (host.endsWith("open-meteo.com")) return host.startsWith("geocoding") ? "weather.open-meteo-geocoding" : "weather.open-meteo";
  if (host === "api.met.no") return "weather.met-norway";
  if (host.includes("tavily")) return "search.tavily";
  if (host === "www.googleapis.com" && /youtube/.test(path)) return "media.youtube";
  if (host.endsWith("wikimedia.org") || host.endsWith("wikipedia.org")) return "media.wikimedia";
  if (host.endsWith("twilio.com")) return "phone.twilio";
  if (host.endsWith("sendgrid.com")) return "email.sendgrid";
  if (host.endsWith("amazonaws.com")) return "storage.s3";
  // Kyro's own sibling service on Render: told apart by what it is asked (the first two parts of the path), so a slow or failing one can be named.
  if (host.includes("provider-engines")) return `engines:${path.split("/").filter(Boolean).slice(0, 2).join("/") || "root"}`;
  return `other:${host}`;
}

// A request path with the parts that differ from person to person or call to call taken out, so one route is one line.
function routeKey(method, pathname) {
  const path = String(pathname || "").split("?")[0]
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi, ":id")
    .replace(/\/[0-9a-f]{16,}(?=\/|$)/gi, "/:id")
    .replace(/\/\d{2,}(?=\/|$)/g, "/:id");
  return `${String(method || "GET").toUpperCase()} ${path}`;
}

function percentile(sorted, fraction) {
  if (!sorted.length) return null;
  return sorted[Math.min(sorted.length - 1, Math.max(0, Math.ceil(sorted.length * fraction) - 1))];
}

function createCallTimings({ ringSize = RING, now = () => Date.now() } = {}) {
  const startedAt = now();
  const outbound = new Map();
  const routes = new Map();
  const steps = new Map();
  const slowest = [];

  const bucket = (map, key) => {
    if (map.has(key)) return map.get(key);
    if (map.size >= MAX_LABELS) key = "other";
    if (!map.has(key)) map.set(key, { count: 0, errors: 0, timeouts: 0, times: [], processing: [], last: null });
    return map.get(key);
  };
  const add = (bucketEntry, ms, { ok = true, timeout = false, processingMs = null, status = null } = {}) => {
    bucketEntry.count += 1;
    if (!ok) bucketEntry.errors += 1;
    if (timeout) bucketEntry.timeouts += 1;
    bucketEntry.times.push(ms);
    if (bucketEntry.times.length > ringSize) bucketEntry.times.shift();
    if (processingMs !== null && Number.isFinite(processingMs)) { bucketEntry.processing.push(processingMs); if (bucketEntry.processing.length > ringSize) bucketEntry.processing.shift(); }
    bucketEntry.last = { at: new Date(now()).toISOString(), ms: Math.round(ms), status };
  };

  return {
    // one call out to another service
    recordOutbound(label, ms, details = {}) {
      if (!label || !Number.isFinite(ms)) return;
      add(bucket(outbound, label), ms, details);
      slowest.push({ at: new Date(now()).toISOString(), what: label, ms: Math.round(ms), status: details.status ?? null, ok: details.ok !== false });
      slowest.sort((a, b) => b.ms - a.ms);
      if (slowest.length > SLOWEST) slowest.length = SLOWEST;
    },
    // one request to Kyro's own routes
    recordRoute(method, pathname, ms, status) {
      if (!Number.isFinite(ms)) return;
      add(bucket(routes, routeKey(method, pathname)), ms, { ok: status < 500, status });
    },
    // one step of Kyro's own work inside a request (reading or saving the stored state, building the state sent back, the speech step of a spoken reply). `bytes` is how big the thing worked on was, when that is known.
    recordStep(name, ms, { bytes = null } = {}) {
      if (!name || !Number.isFinite(ms)) return;
      const entry = bucket(steps, name);
      add(entry, ms, { ok: true });
      if (Number.isFinite(bytes)) { entry.bytesLast = bytes; entry.bytesMax = Math.max(entry.bytesMax || 0, bytes); }
    },
    classify: classifyOutbound,
    snapshot() {
      const lines = map => [...map.entries()].map(([name, entry]) => {
        const sorted = [...entry.times].sort((a, b) => a - b);
        const mean = sorted.length ? sorted.reduce((sum, value) => sum + value, 0) / sorted.length : null;
        const processing = [...entry.processing].sort((a, b) => a - b);
        return { name, count: entry.count, errors: entry.errors, timeouts: entry.timeouts,
          ms: { mean: mean === null ? null : Math.round(mean), p50: percentile(sorted, 0.5), p90: percentile(sorted, 0.9), max: sorted.length ? sorted[sorted.length - 1] : null },
          ...(processing.length ? { serviceSaidMs: { p50: percentile(processing, 0.5), p90: percentile(processing, 0.9) } } : {}),
          ...(entry.bytesMax !== undefined ? { bytes: { last: entry.bytesLast, max: entry.bytesMax } } : {}),
          last: entry.last };
      }).sort((a, b) => (b.ms.p90 ?? 0) - (a.ms.p90 ?? 0));
      return { since: new Date(startedAt).toISOString(), upSeconds: Math.round((now() - startedAt) / 1000), keptPerLine: ringSize,
        outbound: lines(outbound), routes: lines(routes), steps: lines(steps), slowest: [...slowest] };
    }
  };
}

const INSTALLED = Symbol.for("kyro.callTimings.installed");

// Wraps fetch (once) so every call out is timed without touching the places that make the calls. The time is how long the other side took to start answering (for an AI answer that is the whole generation).
function installFetchTiming(timings, target = globalThis) {
  const original = target.fetch;
  if (typeof original !== "function" || original[INSTALLED]) return false;
  const timed = async function (input, init) {
    const label = timings.classify(input);
    if (!label) return original.apply(this, arguments);
    const started = performance.now();
    let response;
    try {
      response = await original.apply(this, arguments);
    } catch (error) {
      timings.recordOutbound(label, performance.now() - started, { ok: false, timeout: /abort|timeout/i.test(String(error && (error.name || error.message))) });
      throw error;
    }
    let processingMs = null;
    try { const header = response.headers && response.headers.get && response.headers.get("openai-processing-ms"); if (header) processingMs = Number(header); } catch { /* not every response has headers */ }
    timings.recordOutbound(label, performance.now() - started, { ok: response.ok !== false, status: response.status ?? null, processingMs });
    return response;
  };
  timed[INSTALLED] = true;
  target.fetch = timed;
  return true;
}

module.exports = Object.freeze({ createCallTimings, installFetchTiming, classifyOutbound, routeKey, percentile });
