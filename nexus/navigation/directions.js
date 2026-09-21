"use strict";

// Turns a routing engine's answer into what a person following it needs: plain spoken instructions, and for every turn how far along the route it
// is, measured on the same line the phone follows, so the phone can say "in 150 meters, turn left" without asking the server again.
// Written against OSRM's route response (the free OpenStreetMap service today); another engine only has to be mapped into the same shape.
const COMPASS = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];
const compass = bearing => COMPASS[Math.round((((Number(bearing) % 360) + 360) % 360) / 45) % 8];
const MODIFIER = { uturn: "make a U-turn", "sharp right": "turn sharply right", right: "turn right", "slight right": "bear right", straight: "continue straight", "slight left": "bear left", left: "turn left", "sharp left": "turn sharply left" };
const SIDE = { left: "on your left", right: "on your right" };
const ordinal = n => { const v = Number(n); return v === 1 ? "first" : v === 2 ? "second" : v === 3 ? "third" : v === 4 ? "fourth" : v === 5 ? "fifth" : `${v}th`; };
const onto = name => (name ? ` onto ${name}` : "");

// One spoken instruction for one OSRM step.
function describeStep(step) {
  const m = step?.maneuver || {}; const name = String(step?.name || step?.ref || "").trim(); const modifier = m.modifier;
  switch (m.type) {
    case "depart": return `Head ${compass(m.bearing_after)}${name ? ` on ${name}` : ""}`;
    case "arrive": return `You have arrived${SIDE[modifier] ? `, ${SIDE[modifier]}` : ""}`;
    case "turn": return sentence(MODIFIER[modifier] || "turn", onto(name));
    case "end of road": return `At the end of the road, ${MODIFIER[modifier] || "turn"}${onto(name)}`;
    case "fork": return `Keep ${modifier && /left/.test(modifier) ? "left" : modifier && /right/.test(modifier) ? "right" : "straight"} at the fork${onto(name)}`;
    case "merge": return `Merge${modifier && /left|right/.test(modifier) ? ` ${/left/.test(modifier) ? "left" : "right"}` : ""}${onto(name)}`;
    case "on ramp": return `Take the ramp${onto(name)}`;
    case "off ramp": return `Take the exit${onto(name)}`;
    case "roundabout": case "rotary": case "roundabout turn": return `At the roundabout, take the ${m.exit ? ordinal(m.exit) : "next"} exit${onto(name)}`;
    case "exit roundabout": case "exit rotary": return `Leave the roundabout${onto(name)}`;
    case "new name": case "continue": return modifier && modifier !== "straight" ? sentence(MODIFIER[modifier] || "continue", onto(name)) : `Continue${onto(name)}`;
    default: return `Continue${onto(name)}`;
  }
}
const sentence = (verb, tail) => `${verb.charAt(0).toUpperCase()}${verb.slice(1)}${tail}`;

const EARTH = 6371000;
const rad = value => (value * Math.PI) / 180;
function haversine(a, b) { // points are [lng, lat]
  const dLat = rad(b[1] - a[1]); const dLng = rad(b[0] - a[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a[1])) * Math.cos(rad(b[1])) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH * Math.asin(Math.min(1, Math.sqrt(h)));
}

// Keep the line dense enough to follow, but never huge: at most `limit` points, always keeping the first and last.
function thin(points, limit) {
  if (points.length <= limit) return points;
  const stride = Math.ceil(points.length / limit); const out = points.filter((_, index) => index % stride === 0);
  if (out[out.length - 1] !== points[points.length - 1]) out.push(points[points.length - 1]);
  return out;
}

// OSRM route -> { distanceMeters, durationSeconds, geometry: [[lng,lat]...], steps: [{ instruction, alongMeters, distanceMeters, name, type, modifier }] }
function buildRoute(osrmRoute, { maxPoints = 6000 } = {}) {
  const leg = osrmRoute?.legs || []; const raw = (osrmRoute?.geometry?.coordinates || []).filter(pair => Array.isArray(pair) && Number.isFinite(pair[0]) && Number.isFinite(pair[1]));
  if (raw.length < 2) throw new Error("route-geometry-missing");
  const geometry = thin(raw, maxPoints);
  const cumulative = [0]; for (let i = 1; i < geometry.length; i += 1) cumulative.push(cumulative[i - 1] + haversine(geometry[i - 1], geometry[i]));
  // Place each turn on the line: the nearest point at or after the previous turn, so a route that loops back on itself is not confused.
  let from = 0; const steps = [];
  for (const step of leg.flatMap(item => item.steps || [])) {
    const at = step.maneuver?.location; let best = from; let bestDistance = Infinity;
    if (Array.isArray(at)) for (let i = from; i < geometry.length; i += 1) { const d = haversine(at, geometry[i]); if (d < bestDistance) { bestDistance = d; best = i; } if (d > bestDistance + 400 && bestDistance < 60) break; }
    from = best;
    steps.push({ instruction: describeStep(step), alongMeters: Math.round(cumulative[best]), distanceMeters: Math.round(step.distance || 0), name: String(step.name || ""), type: step.maneuver?.type || "", modifier: step.maneuver?.modifier || "" });
  }
  if (!steps.length) throw new Error("route-steps-missing");
  const total = Math.round(cumulative[cumulative.length - 1]);
  steps[steps.length - 1].alongMeters = total; // arriving is at the end of the line
  return { distanceMeters: total, durationSeconds: Math.round(osrmRoute.duration || 0), geometry, steps };
}

module.exports = Object.freeze({ describeStep, buildRoute, haversine, compass });
