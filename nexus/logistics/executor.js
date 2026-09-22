"use strict";

// Real executor for the "logistics.track" canonical tool -- closes item 12 of the 2026-09-22
// capability audit. Two real, distinct problems found there:
//   (1) production's configured "logistics provider" is AgriNexus's own self-hosted mock service
//       (render.yaml's TRADE_LOGISTICS_PROVIDER=webhook), which computes ETA as a fixed formula on a
//       route's checkpoint index -- not real carrier telemetry. Fixing that needs a real carrier
//       integration (DHL/Maersk/etc.) this project doesn't have credentials for -- a genuine
//       provider-access gap, not a wiring bug, and out of scope here (same class of gap as drones'
//       flight control and marketplace payments).
//   (2) separately, and this IS a wiring bug: the primary/authoritative runtime had NO logistics tool
//       at all in its catalog, so a typed "where's my shipment from Nairobi to Nakuru" request had
//       nowhere real to go -- only the older legacy voice-only path could reach the mock at all.
// This executor fixes (2) honestly: it computes a REAL route-distance/duration estimate (the exact
// same free OSRM/Google backend maps.view already uses -- real geocoding, real road-network routing),
// explicitly labeled as a route-based ETA estimate, never as live carrier tracking. This is a genuine
// improvement over today's decorative default, not a replacement for real carrier telemetry.
const googleMapsProvider = require("../../server/providers/googleMapsProvider.js");

function createLogisticsTrackExecutor({ env = process.env } = {}) {
  return async function execute({ input = {} }) {
    const origin = String(input.origin || "").trim();
    const destination = String(input.destination || "").trim();
    if (!origin || !destination) {
      return { ok: false, trackingMethod: null, reason: "origin_and_destination_required" };
    }
    const result = await googleMapsProvider.route({ origin, destination, waypoints: [] }, env);
    const data = result.body?.data || {};
    if (!Number.isFinite(Number(data.durationSeconds)) && !data.routeGeometry) {
      return { ok: false, trackingMethod: null, origin, destination, reason: "route_not_computed" };
    }
    const durationSeconds = Number(data.durationSeconds) || null;
    const estimatedArrival = durationSeconds ? new Date(Date.now() + durationSeconds * 1000).toISOString() : null;
    return {
      ok: true,
      origin, destination,
      distanceMeters: data.distanceMeters ?? null,
      durationSeconds,
      estimatedArrival,
      routeGeometry: data.routeGeometry || null,
      trackingMethod: "route_based_estimate",
      limitation: "This is a real road-route distance/time estimate, not live carrier tracking or a package scan -- no real shipment-tracking provider is connected."
    };
  };
}

function verifyLogisticsTrackOutcome({ result }) {
  const verified = result?.ok === true && result?.trackingMethod === "route_based_estimate"
    && (Number.isFinite(Number(result?.durationSeconds)) || Boolean(result?.routeGeometry));
  return { verified, method: "real_route_computation", reason: verified ? null : (result?.reason || "logistics_estimate_not_verified") };
}

module.exports = Object.freeze({ createLogisticsTrackExecutor, verifyLogisticsTrackOutcome });
