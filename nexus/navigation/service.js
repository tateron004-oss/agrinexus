"use strict";

const { buildRoute, haversine } = require("./directions.js");

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
const fail = (status, code, message) => Object.assign(new Error(message), { status, code });

const lat = value => { const n = Number(value); if (!Number.isFinite(n) || n < -90 || n > 90) throw fail(400, "invalid_position", "A latitude between -90 and 90 is required."); return n; };
const lng = value => { const n = Number(value); if (!Number.isFinite(n) || n < -180 || n > 180) throw fail(400, "invalid_position", "A longitude between -180 and 180 is required."); return n; };
const point = (value, name) => { if (!value || typeof value !== "object") throw fail(400, "invalid_position", `${name} needs a position.`); return { lat: lat(value.lat), lng: lng(value.lng) }; };
const text = (value, max = 120) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);

function createNavigationService({ env = process.env, fetchImpl = globalThis.fetch, now = () => Date.now() } = {}) {
  const urls = { geocoder: (env.NEXUS_GEOCODER_URL || DEFAULTS.geocoder).replace(/\/$/, ""), drive: (env.NEXUS_ROUTING_DRIVE_URL || DEFAULTS.drive).replace(/\/$/, ""), walk: (env.NEXUS_ROUTING_WALK_URL || DEFAULTS.walk).replace(/\/$/, "") };
  const enabled = String(env.NEXUS_MAPS_PUBLIC_OSM_ENABLED ?? "true").toLowerCase() !== "false" || Boolean(env.NEXUS_ROUTING_DRIVE_URL);
  const recent = new Map();

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
    const url = new URL(`${urls.geocoder}/search`); url.searchParams.set("q", q); url.searchParams.set("format", "jsonv2"); url.searchParams.set("limit", "5"); url.searchParams.set("addressdetails", "1");
    const origin = near ? point(near, "near") : null;
    // Prefer what is close to the person (about 1 degree, roughly 110 km), without excluding the rest of the world.
    if (origin) url.searchParams.set("viewbox", [origin.lng - 1, origin.lat + 1, origin.lng + 1, origin.lat - 1].map(value => value.toFixed(4)).join(","));
    const payload = await getJson(url.toString());
    const places = (Array.isArray(payload) ? payload : []).filter(item => Number.isFinite(Number(item.lat)) && Number.isFinite(Number(item.lon)))
      .map(item => ({ label: label(item), lat: Number(item.lat), lng: Number(item.lon), distanceMeters: origin ? Math.round(haversine([origin.lng, origin.lat], [Number(item.lon), Number(item.lat)])) : null }));
    if (origin) places.sort((a, b) => a.distanceMeters - b.distanceMeters);
    return places.slice(0, 3);
  }

  async function reverse({ position }) {
    const at = point(position, "position");
    const url = new URL(`${urls.geocoder}/reverse`); url.searchParams.set("lat", at.lat); url.searchParams.set("lon", at.lng); url.searchParams.set("format", "jsonv2"); url.searchParams.set("zoom", "16"); url.searchParams.set("addressdetails", "1");
    const payload = await getJson(url.toString());
    if (!payload || payload.error) return { label: "" };
    return { label: label(payload) };
  }

  async function route({ from, to, mode }) {
    const start = point(from, "Where you are"); const profile = mode === "walk" ? "walk" : "drive";
    let end; let destinationLabel = "";
    if (to && Number.isFinite(Number(to.lat)) && Number.isFinite(Number(to.lng))) { end = point(to, "The destination"); destinationLabel = text(to.label, 120); }
    else {
      const found = await search({ query: to?.query, near: start });
      if (!found.length) throw fail(404, "place_not_found", `I couldn't find ${text(to?.query, 60) || "that place"}.`);
      end = { lat: found[0].lat, lng: found[0].lng }; destinationLabel = found[0].label;
    }
    if (haversine([start.lng, start.lat], [end.lng, end.lat]) < 30) throw fail(400, "already_there", "You are already there.");
    const url = `${urls[profile]}/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson&steps=true&alternatives=false`;
    const payload = await getJson(url);
    if (payload.code === "NoRoute" || !Array.isArray(payload.routes) || !payload.routes[0]) throw fail(404, "no_route", "I couldn't find a way there by that route.");
    let built; try { built = buildRoute(payload.routes[0]); } catch { throw fail(502, "navigation_provider_error", "The directions service gave me a route I couldn't follow."); }
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
      throw fail(400, "invalid_action", "Unknown navigation action.");
    },
    search, reverse, route
  });
}

module.exports = Object.freeze({ createNavigationService, DEFAULTS, PER_MINUTE });
