"use strict";

const { buildRoute, haversine } = require("./directions.js");
const { languageOf } = require("../i18n/index.js");

// The server half of Kyro's GPS: find a place by name, say what is at a position, and plan a route with turn-by-turn steps. The phone follows the route
// itself (see public/kyro-navigation.js); this only answers when asked, and does not keep or log anyone's position.
//
// It uses the free public OpenStreetMap services today (Nominatim to find places, OSRM to route). Those are shared and rate-limited, fine for a pilot
// and not for wide use, so the provider sits behind this one file: point NEXUS_ROUTING_DRIVE_URL / NEXUS_ROUTING_WALK_URL / NEXUS_GEOCODER_URL at your own
// server (or swap the calls for Google) without touching the phone. Each person is also limited in how often they can ask.
const DEFAULTS = Object.freeze({
  geocoder: "https://nominatim.openstreetmap.org",
  drive: "https://router.project-osrm.org/route/v1/driving",
  walk: "https://routing.openstreetmap.de/routed-foot/route/v1/driving" // this service names every profile "driving"
});
const USER_AGENT = "Kyro/1.0 (navigation; contact via the site owner)";
const PER_MINUTE = 40;
// Found live (navigation correctness audit): limit() above only ever capped
// ONE user's own request rate -- there was no cache of identical/near-
// identical lookups and no cross-user throttle at all. Nominatim's usage
// policy caps a whole app's shared IP at roughly one request/second; a
// handful of people in the same place asking "where am I" or searching for
// the same popular destination within a minute of each other could
// plausibly get this deployment's shared Nominatim IP rate-limited or
// banned by the free service, breaking navigation for every user, not just
// the ones who asked. Caching identical search/reverse lookups for a short
// window costs nothing in correctness (an address doesn't change minute to
// minute) and directly cuts the redundant real network calls that class of
// scenario would otherwise generate.
const CACHE_TTL_MS = 60_000;
const CACHE_MAX_ENTRIES = 500;
const fail = (status, code, message) => Object.assign(new Error(message), { status, code });

const lat = value => { const n = Number(value); if (!Number.isFinite(n) || n < -90 || n > 90) throw fail(400, "invalid_position", "A latitude between -90 and 90 is required."); return n; };
const lng = value => { const n = Number(value); if (!Number.isFinite(n) || n < -180 || n > 180) throw fail(400, "invalid_position", "A longitude between -180 and 180 is required."); return n; };
const point = (value, name) => { if (!value || typeof value !== "object") throw fail(400, "invalid_position", `${name} needs a position.`); return { lat: lat(value.lat), lng: lng(value.lng) }; };
const text = (value, max = 120) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
const clampLat = value => Math.max(-90, Math.min(90, value));
// Places this far apart (or with no road between them) are shown as a straight line over the earth's surface, a flight path: the direction and the distance, not a booked flight or a schedule.
// Found on 26 October 2026: "Show me the route from Atlanta to Nairobi" had no road to draw, so the map showed the whole continent and no route.
const AIR_ONLY_METERS = 2_500_000;
const ROAD_TRIP_LEG_METERS = 800_000;
const MAX_TRIP_STOPS = 8;
function greatCircle(a, b, points = 64) {
  const rad = degrees => degrees * Math.PI / 180; const deg = radians => radians * 180 / Math.PI;
  const lat1 = rad(a.lat); const lon1 = rad(a.lng); const lat2 = rad(b.lat); const lon2 = rad(b.lng);
  const d = 2 * Math.asin(Math.sqrt(Math.sin((lat2 - lat1) / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2));
  if (!Number.isFinite(d) || d < 1e-9) return [[a.lng, a.lat], [b.lng, b.lat]];
  const line = [];
  for (let i = 0; i <= points; i += 1) {
    const f = i / points; const A = Math.sin((1 - f) * d) / Math.sin(d); const B = Math.sin(f * d) / Math.sin(d);
    const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2); const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2); const z = A * Math.sin(lat1) + B * Math.sin(lat2);
    line.push([Number(deg(Math.atan2(y, x)).toFixed(5)), Number(deg(Math.atan2(z, Math.sqrt(x * x + y * y))).toFixed(5))]);
  }
  return line;
}
const kilometers = meters => Math.round(meters / 1000).toLocaleString("en-US");
const clampLng = value => Math.max(-180, Math.min(180, value));

function createNavigationService({ env = process.env, fetchImpl = globalThis.fetch, now = () => Date.now() } = {}) {
  const urls = { geocoder: (env.NEXUS_GEOCODER_URL || DEFAULTS.geocoder).replace(/\/$/, ""), drive: (env.NEXUS_ROUTING_DRIVE_URL || DEFAULTS.drive).replace(/\/$/, ""), walk: (env.NEXUS_ROUTING_WALK_URL || DEFAULTS.walk).replace(/\/$/, "") };
  const enabled = String(env.NEXUS_MAPS_PUBLIC_OSM_ENABLED ?? "true").toLowerCase() !== "false" || Boolean(env.NEXUS_ROUTING_DRIVE_URL);
  const recent = new Map();
  const searchCache = new Map();
  const reverseCache = new Map();

  function fromCache(cache, key) {
    const hit = cache.get(key);
    return hit && hit.expiresAt > now() ? hit.value : null;
  }

  function toCache(cache, key, value) {
    if (cache.size > CACHE_MAX_ENTRIES) for (const [existingKey, entry] of cache) if (entry.expiresAt <= now()) cache.delete(existingKey);
    cache.set(key, { value, expiresAt: now() + CACHE_TTL_MS });
  }

  function limit(userId) {
    const cutoff = now() - 60000; const list = (recent.get(userId) || []).filter(time => time > cutoff);
    if (list.length >= PER_MINUTE) throw fail(429, "navigation_rate_limited", "That's a lot of location requests. Please wait a moment and try again.");
    list.push(now()); recent.set(userId, list);
    if (recent.size > 5000) for (const [key, times] of recent) if (!times.some(time => time > cutoff)) recent.delete(key);
  }

  async function getJson(url) {
    if (!enabled) throw fail(503, "navigation_unavailable", "Directions are switched off on this server.");
    if (typeof fetchImpl !== "function") throw fail(503, "navigation_unavailable", "Directions are unavailable.");
    let response;
    try { response = await fetchImpl(url, { method: "GET", headers: { accept: "application/json", "user-agent": USER_AGENT }, signal: AbortSignal.timeout(12000) }); }
    catch { throw fail(502, "navigation_provider_unreachable", "I couldn't reach the directions service."); }
    if (response.status === 429) throw fail(503, "navigation_provider_busy", "The directions service is busy. Please try again in a minute.");
    if (!response.ok) throw fail(502, "navigation_provider_error", "The directions service couldn't answer.");
    try { return await response.json(); } catch { throw fail(502, "navigation_provider_error", "The directions service gave an answer I couldn't read."); }
  }

  // A short readable name for a place from Nominatim's address parts.
  function label(place) {
    const a = place.address || {};
    const parts = [place.name || a.amenity || a.building || a.shop, a.road, a.neighbourhood || a.suburb || a.hamlet || a.village, a.town || a.city || a.county || a.state_district, a.state].filter(Boolean);
    const unique = parts.filter((part, index) => parts.indexOf(part) === index).slice(0, 4);
    return unique.length ? unique.join(", ") : text(place.display_name, 90);
  }

  async function search({ query, near }) {
    const q = text(query, 120); if (!q) throw fail(400, "invalid_query", "Say where you want to go.");
    const origin = near ? point(near, "near") : null;
    const cacheKey = `${q.toLowerCase()}|${origin ? `${origin.lat.toFixed(3)},${origin.lng.toFixed(3)}` : ""}`;
    const cachedPlaces = fromCache(searchCache, cacheKey);
    if (cachedPlaces) return cachedPlaces;
    const url = new URL(`${urls.geocoder}/search`); url.searchParams.set("q", q); url.searchParams.set("format", "jsonv2"); url.searchParams.set("limit", "5"); url.searchParams.set("addressdetails", "1");
    // Prefer what is close to the person (about 1 degree, roughly 110 km), without excluding the rest of the world.
    // Found live (navigation correctness audit): unclamped, this could send
    // a longitude past +/-180 near the antimeridian or a latitude past
    // +/-90 near a pole -- Nominatim treats an out-of-range viewbox as a
    // malformed ranking hint rather than a hard filter (bounded=1 is never
    // set), so it silently degrades relevance for a real nearby place just
    // across that boundary instead of erroring.
    if (origin) url.searchParams.set("viewbox", [clampLng(origin.lng - 1), clampLat(origin.lat + 1), clampLng(origin.lng + 1), clampLat(origin.lat - 1)].map(value => value.toFixed(4)).join(","));
    const payload = await getJson(url.toString());
    const places = (Array.isArray(payload) ? payload : []).filter(item => Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lon)))
      .map(item => ({ label: label(item), lat: Number(item.lat), lng: Number(item.lon), distanceMeters: origin ? Math.round(haversine([origin.lng, origin.lat], [Number(item.lon), Number(item.lat)])) : null }));
    if (origin) places.sort((a, b) => a.distanceMeters - b.distanceMeters);
    const result = places.slice(0, 3);
    toCache(searchCache, cacheKey, result);
    return result;
  }

  async function reverse({ position }) {
    const at = point(position, "position");
    // Rounded to ~100m (3 decimal places) rather than exact GPS precision --
    // reverse()'s label describes the road/neighbourhood a position is in,
    // not the exact point, so a cache hit at this granularity is still an
    // honest answer, and it meaningfully raises the hit rate for repeated
    // "where am I" calls made while roughly stationary despite GPS jitter.
    const cacheKey = `${at.lat.toFixed(3)},${at.lng.toFixed(3)}`;
    const cachedPlace = fromCache(reverseCache, cacheKey);
    if (cachedPlace) return cachedPlace;
    const url = new URL(`${urls.geocoder}/reverse`); url.searchParams.set("lat", at.lat); url.searchParams.set("lon", at.lng); url.searchParams.set("format", "jsonv2"); url.searchParams.set("zoom", "16"); url.searchParams.set("addressdetails", "1");
    const payload = await getJson(url.toString());
    const result = (!payload || payload.error) ? { label: "" } : { label: label(payload) };
    toCache(reverseCache, cacheKey, result);
    return result;
  }

  // A straight-line (flight) leg between two points, in the same shape as a road route. No duration is given: a flight takes whatever the airline's schedule says.
  function airRoute(start, end, startLabel, endLabel) {
    const meters = Math.round(haversine([start.lng, start.lat], [end.lng, end.lat]));
    const instruction = `${startLabel || "The start"} to ${endLabel || "the destination"}: about ${kilometers(meters)} kilometers in a straight line. This shows the direction and the distance, not a booked flight or a schedule.`;
    return { distanceMeters: meters, durationSeconds: 0, geometry: greatCircle(start, end), steps: [{ instruction, distanceMeters: meters, alongMeters: meters, name: "", type: "air" }], mode: "air", straightLine: true };
  }

  // A trip through several named places (an itinerary's route): each place is found by name, then each leg is drawn, as a road where the places are near and a road exists, otherwise as a straight line.
  async function trip({ stops }) {
    const names = (Array.isArray(stops) ? stops : []).map(item => text(item, 80)).filter(Boolean).slice(0, MAX_TRIP_STOPS);
    if (names.length < 2) throw fail(400, "invalid_query", "A trip needs a start and a destination.");
    const found = [];
    for (const [index, name] of names.entries()) {
      if (index > 0 && fetchImpl === globalThis.fetch) await new Promise(resolve => setTimeout(resolve, 1100));
      const places = await search({ query: name });
      if (!places.length) throw fail(404, "place_not_found", `I couldn't find ${name}.`);
      found.push({ name, label: name, lat: places[0].lat, lng: places[0].lng });
    }
    const geometry = []; const steps = []; let total = 0; let drove = 0;
    for (let i = 0; i < found.length - 1; i += 1) {
      const a = found[i]; const b = found[i + 1];
      const meters = haversine([a.lng, a.lat], [b.lng, b.lat]);
      let leg = null;
      if (meters < ROAD_TRIP_LEG_METERS && meters >= 30) {
        try {
          const payload = await getJson(`${urls.drive}/${a.lng},${a.lat};${b.lng},${b.lat}?overview=full&geometries=geojson&steps=false&alternatives=false`);
          const best = Array.isArray(payload.routes) ? payload.routes[0] : null;
          const raw = (best?.geometry?.coordinates || []).filter(pair => Array.isArray(pair) && Number.isFinite(pair[0]) && Number.isFinite(pair[1]));
          if (best && raw.length > 1) { leg = { geometry: raw.length > 400 ? raw.filter((_, index) => index % Math.ceil(raw.length / 400) === 0 || index === raw.length - 1) : raw, distanceMeters: Math.round(best.distance || meters), road: true }; drove += 1; }
        } catch { leg = null; }
      }
      if (!leg) leg = { geometry: greatCircle(a, b), distanceMeters: Math.round(meters), road: false };
      geometry.push(...(geometry.length ? leg.geometry.slice(1) : leg.geometry));
      total += leg.distanceMeters;
      steps.push({ instruction: `${a.label} to ${b.label}: about ${kilometers(leg.distanceMeters)} kilometers${leg.road ? " by road" : " in a straight line (a flight path, not a booked flight)"}.`, distanceMeters: leg.distanceMeters, alongMeters: total, name: "", type: leg.road ? "road" : "air" });
    }
    return { distanceMeters: Math.round(total), durationSeconds: 0, geometry, steps, mode: "trip", straightLine: drove < found.length - 1, stops: found.map(item => ({ label: item.label, lat: item.lat, lng: item.lng })) };
  }

  // (a straight line is only drawn when the caller asks for it, to SHOW a route: turn-by-turn guidance must never follow a line across an ocean)
  async function route({ from, to, mode, language, allowStraightLine }) {
    const start = point(from, "Where you are"); const profile = mode === "walk" ? "walk" : "drive";
    let end; let destinationLabel = "";
    if (to && Number.isFinite(Number(to.lat)) && Number.isFinite(Number(to.lng))) { end = point(to, "The destination"); destinationLabel = text(to.label, 120); }
    else {
      const found = await search({ query: to?.query, near: start });
      if (!found.length) throw fail(404, "place_not_found", `I couldn't find ${text(to?.query, 60) || "that place"}.`);
      end = { lat: found[0].lat, lng: found[0].lng }; destinationLabel = found[0].label;
    }
    if (haversine([start.lng, start.lat], [end.lng, end.lat]) < 30) throw fail(400, "already_there", "You are already there.");
    const apart = haversine([start.lng, start.lat], [end.lng, end.lat]);
    const startLabel = text(from?.label, 80) || "The start";
    const airFor = () => ({ ...airRoute(start, end, startLabel, destinationLabel), destination: { label: destinationLabel, lat: end.lat, lng: end.lng }, provider: "great-circle" });
    if (allowStraightLine === true && apart >= AIR_ONLY_METERS) return airFor();
    const url = `${urls[profile]}/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&steps=true&alternatives=false`;
    const payload = await getJson(url);
    if (payload.code === "NoRoute" || !Array.isArray(payload.routes) || !payload.routes[0]) { if (allowStraightLine === true && profile === "drive") return airFor(); throw fail(404, "no_route", "I couldn't find a way there by that route."); }
    let built; try { built = buildRoute(payload.routes[0], { language: languageOf(language) }); } catch { throw fail(502, "navigation_provider_error", "The directions service gave me a route I couldn't follow."); }
    return { ...built, mode: profile, destination: { label: destinationLabel, lat: end.lat, lng: end.lng }, provider: profile === "walk" && urls.walk === DEFAULTS.walk ? "openstreetmap-foot" : urls.drive === DEFAULTS.drive ? "openstreetmap-osrm" : "custom" };
  }

  return Object.freeze({
    // { context: { userId }, body: { action, ... } } -> { status, body }
    async handle({ context, body }) {
      limit(context?.userId || "anonymous");
      const action = body?.action;
      if (action === "search") return { status: 200, body: { authoritative: true, places: await search(body) } };
      if (action === "reverse") return { status: 200, body: { authoritative: true, place: await reverse(body) } };
      if (action === "route") return { status: 200, body: { authoritative: true, route: await route(body) } };
      if (action === "trip") return { status: 200, body: { authoritative: true, route: await trip(body) } };
      throw fail(400, "invalid_action", "Unknown navigation action.");
    },
    search, reverse, route, trip
  });
}

module.exports = Object.freeze({ createNavigationService, DEFAULTS, PER_MINUTE, greatCircle, AIR_ONLY_METERS });
