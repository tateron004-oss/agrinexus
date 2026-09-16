"use strict";

// Real executor for the "maps.view" canonical tool, wiring the authoritative
// task engine to server/providers/googleMapsProvider.js's route() instead of
// the scripts/provider-engines.js mock. Unlike the other Phase-1 tools, this
// one is real with zero configuration: without GOOGLE_MAPS_API_KEY it falls
// back to a genuinely real public OpenStreetMap/Nominatim + OSRM route
// (publicOsmRoute), not a simulation -- so this executor never needs a
// "was this simulated" check the way communications.send does.
const googleMapsProvider = require("../../server/providers/googleMapsProvider.js");

function createMapsViewExecutor({ env = process.env } = {}) {
  return async function execute({ input = {} }) {
    const body = {
      origin: input.origin || "",
      destination: input.destination || "",
      waypoints: Array.isArray(input.waypoints) ? input.waypoints : []
    };
    const result = await googleMapsProvider.route(body, env);
    return { ...result.body };
  };
}

function verifyMapsViewOutcome({ result }) {
  const data = result?.data || {};
  const verified = result?.status === "completed" && result?.ok !== false
    && (Number.isFinite(Number(data.distanceMeters)) || Boolean(data.routeGeometry));
  return { verified, method: "real_route_computation", reason: verified ? null : "route_not_computed" };
}

module.exports = Object.freeze({ createMapsViewExecutor, verifyMapsViewOutcome });
