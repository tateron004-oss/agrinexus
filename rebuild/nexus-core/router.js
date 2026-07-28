"use strict";

const ROUTES = Object.freeze([
  ["maps", /\b(map|maps|route|directions|navigate|location)\b/i],
  ["reminders", /\b(remind|reminder)\b/i],
  ["telehealth", /\b(telehealth|doctor|clinician|video visit)\b/i],
  ["mobile-clinic", /\b(mobile clinic|clinic visit)\b/i],
  ["pharmacy", /\b(pharmacy|pharmacist|prescription)\b/i],
  ["workforce", /\b(job|jobs|work|career|employment|resume)\b/i],
  ["marketplace", /\b(sell|buy|buyer|market|marketplace|trade)\b/i],
  ["health", /\b(health|blood pressure|diabetes|hypertension|weight|medicine)\b/i],
  ["agriculture", /\b(farm|farmer|crop|maize|soil|weather for my field)\b/i],
  ["learning", /\b(learn|lesson|course|literacy|training)\b/i],
  ["music", /\b(play|music|song|songs)\b/i],
  ["offline", /\b(offline|sync|queue)\b/i],
  ["live-knowledge", /\b(search the (web|internet)|look up|latest|current news|live knowledge)\b/i]
]);

function routeCommand(command, connectionState) {
  if (connectionState !== "connected") {
    return Object.freeze({
      accepted: false,
      code: "realtime-not-connected",
      workspace: null
    });
  }
  const normalized = String(command || "").trim();
  const match = ROUTES.find(([, pattern]) => pattern.test(normalized));
  return Object.freeze({
    accepted: Boolean(match),
    code: match ? "workspace-route-resolved" : "conversation",
    workspace: match ? match[0] : null,
    command: normalized
  });
}

module.exports = { ROUTES, routeCommand };
