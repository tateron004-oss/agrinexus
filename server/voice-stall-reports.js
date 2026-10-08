"use strict";

// Voice stall reports: what the browser says when a voice session went quiet (see public/kyro-stall-watchdog.js and reportKyroVoiceStall in public/app.js).
//   * sanitiseStallReport(body)   keeps only a fixed set of short, known fields. No speech, no names, no keys: types, states and numbers only.
//   * summariseStallReports(list) turns many reports into counts by phase / kind / tool / event, so the real cause can be read from production
//                                 (GET /api/admin/voice/stall-summary, and `node scripts/voice-stall-summary.js <server log>`).

const watchdog = require("../public/kyro-stall-watchdog.js");

const KINDS = Object.freeze(["no-response", "tool-stuck", "auto-response-stuck", "mic-lost", "disconnected", "restart-failed"]);
const PHASES = Object.freeze([...watchdog.PHASES]);
const STORE_CAP = 300;

const text = (value, max = 80) => String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").slice(0, max);
const clampNumber = (value, max = 3_600_000) => (Number.isFinite(Number(value)) ? Math.max(0, Math.min(Number(value), max)) : 0);
const signedNumber = (value, max = 86_400_000) => (Number.isFinite(Number(value)) ? Math.max(-max, Math.min(Number(value), max)) : 0);
const eventType = value => String(value ?? "").toLowerCase().replace(/[^a-z0-9_.:-]/g, "").slice(0, 60);

function sanitiseStallReport(body = {}) {
  const input = body && typeof body === "object" ? body : {};
  const lastEvents = (Array.isArray(input.lastEvents) ? input.lastEvents : []).slice(-10)
    .map(item => ({ type: eventType(item?.type), ageMs: clampNumber(item?.ageMs), count: Math.max(1, Math.min(clampNumber(item?.count, 100000), 100000)) }))
    .filter(item => item.type);
  return {
    kind: KINDS.includes(input.kind) ? input.kind : "unknown",
    phase: PHASES.includes(input.phase) ? input.phase : "unknown",
    build: text(input.build, 40), sessionId: text(input.sessionId), turnIndex: clampNumber(input.turnIndex),
    controllerState: text(input.controllerState), lastModelEvent: text(input.lastModelEvent), lastToolEvent: text(input.lastToolEvent), inboundAudioState: text(input.inboundAudioState),
    responseInProgress: input.responseInProgress === true, connectionState: text(input.connectionState), peerState: text(input.peerState), iceState: text(input.iceState),
    dataChannelState: text(input.dataChannelState), micTrack: text(input.micTrack),
    micMuted: input.micMuted === true, online: input.online !== false, tabVisible: text(input.tabVisible, 20), intakeActive: input.intakeActive === true,
    autoResponseOn: input.autoResponseOn !== false,
    sessionAgeMs: clampNumber(input.sessionAgeMs, 86_400_000), keyRemainingMs: signedNumber(input.keyRemainingMs), keyKnown: input.keyKnown === true, hiddenForMs: clampNumber(input.hiddenForMs, 86_400_000),
    lastEvents,
    waitedMs: clampNumber(input.waitedMs), nudges: clampNumber(input.nudges), restarts: clampNumber(input.restarts), toolName: text(input.toolName), toolRunningMs: clampNumber(input.toolRunningMs),
    sinceLastActivityMs: clampNumber(input.sinceLastActivityMs), lastActivity: text(input.lastActivity), userAgent: text(input.userAgent, 160)
  };
}

// Adds a report to the list the server keeps (newest first, capped).
function storeStallReport(list, report, { now = new Date() } = {}) {
  const entry = { id: `${now.getTime().toString(36)}-${Math.random().toString(36).slice(2, 7)}`, receivedAt: now.toISOString(), ...report };
  const next = [entry, ...(Array.isArray(list) ? list : [])];
  return next.slice(0, STORE_CAP);
}

function percentile(sorted, p) {
  if (!sorted.length) return 0;
  return sorted[Math.min(sorted.length - 1, Math.max(0, Math.ceil((p / 100) * sorted.length) - 1))];
}
function counts(items, pick, top = 12) {
  const map = new Map();
  for (const item of items) { const key = pick(item) || "(none)"; map.set(key, (map.get(key) || 0) + 1); }
  return [...map.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0]))).slice(0, top).map(([name, count]) => ({ name, count }));
}

const PHASE_MEANING = Object.freeze({
  "waiting-for-tool": "A tool (weather, search, maps, a record) was running and did not finish. Look at tool latency in the server log ([voice-slow-tool]).",
  "waiting-for-response": "The person finished speaking and the model never started answering, with the connection looking healthy. Look at lastEvents for the last thing the session heard.",
  "audio-suspended": "The browser's audio output was suspended. The model may have answered but nothing was heard.",
  disconnected: "The connection to the voice service was down (network change, phone backgrounded, or the session's time limit).",
  "mic-lost": "The phone's microphone stopped (another app or a call took it, or the browser ended it).",
  offline: "The phone had no internet connection.",
  backgrounded: "The page was in the background; phones pause its connections.",
  "auto-response-stuck": "The automatic reply was left switched off after a guided form. The model heard people and was told not to answer.",
  idle: "Nothing looked wrong at report time. The delay may have been the model or the network.",
  unknown: "The report did not say."
});

function summariseStallReports(reports = [], { limit = 10 } = {}) {
  const list = (Array.isArray(reports) ? reports : []).filter(item => item && typeof item === "object");
  const waits = list.map(item => Number(item.waitedMs) || 0).filter(value => value > 0).sort((a, b) => a - b);
  const ages = list.map(item => Number(item.sessionAgeMs) || 0).filter(value => value > 0).sort((a, b) => a - b);
  const times = list.map(item => item.receivedAt).filter(Boolean).sort();
  const byPhase = counts(list, item => item.phase || "unknown");
  const dominant = byPhase[0];
  const keyKnown = list.filter(item => item.keyKnown === true);
  return {
    ok: true,
    total: list.length,
    distinctSessions: new Set(list.map(item => item.sessionId).filter(Boolean)).size,
    first: times[0] || null,
    last: times[times.length - 1] || null,
    byPhase,
    byKind: counts(list, item => item.kind || "unknown"),
    byTool: counts(list.filter(item => item.toolName), item => item.toolName),
    byLastModelEvent: counts(list, item => item.lastModelEvent),
    byLastEventInRing: counts(list.filter(item => Array.isArray(item.lastEvents) && item.lastEvents.length), item => item.lastEvents[item.lastEvents.length - 1].type),
    byConnection: counts(list, item => `${item.peerState || "?"}/${item.iceState || "?"}/${item.dataChannelState || "?"}`),
    byTabVisible: counts(list, item => item.tabVisible),
    byBuild: counts(list, item => item.build, 5),
    offline: list.filter(item => item.online === false).length,
    autoResponseOff: list.filter(item => item.autoResponseOn === false).length,
    intakeActive: list.filter(item => item.intakeActive === true).length,
    afterBackground: list.filter(item => Number(item.hiddenForMs) > 5000).length,
    waitedMs: { median: percentile(waits, 50), p90: percentile(waits, 90), max: waits[waits.length - 1] || 0 },
    sessionAgeMs: { median: percentile(ages, 50), p90: percentile(ages, 90), max: ages[ages.length - 1] || 0 },
    keyExpiredBeforeStall: keyKnown.filter(item => Number(item.keyRemainingMs) < 0).length,
    keyKnownReports: keyKnown.length,
    readout: dominant
      ? `${dominant.count} of ${list.length} reports are "${dominant.name}": ${PHASE_MEANING[dominant.name] || PHASE_MEANING.unknown}`
      : "No stall reports yet.",
    recent: list.slice(0, Math.max(1, Math.min(Number(limit) || 10, 50))).map(item => ({
      receivedAt: item.receivedAt || null, kind: item.kind, phase: item.phase, toolName: item.toolName || "", waitedMs: item.waitedMs, sessionAgeMs: item.sessionAgeMs,
      tabVisible: item.tabVisible, online: item.online, autoResponseOn: item.autoResponseOn, lastModelEvent: item.lastModelEvent,
      lastEvents: Array.isArray(item.lastEvents) ? item.lastEvents.slice(-6) : [], build: item.build
    }))
  };
}

// For scripts/voice-stall-summary.js: pulls the reports out of a server log (one `[voice-stall] {json}` line each).
function parseStallLogLines(textBlock = "") {
  const reports = [];
  for (const line of String(textBlock).split(/\r?\n/)) {
    const at = line.indexOf("[voice-stall]");
    if (at < 0) continue;
    const start = line.indexOf("{", at);
    if (start < 0) continue;
    try { reports.push({ ...sanitiseStallReport(JSON.parse(line.slice(start))), receivedAt: (line.match(/^\s*(\d{4}-\d{2}-\d{2}T[\d:.]+Z)/) || [])[1] || null }); } catch { /* a cut-off line is skipped */ }
  }
  return reports.reverse(); // newest first, like the stored list
}

module.exports = Object.freeze({ KINDS, PHASES, STORE_CAP, PHASE_MEANING, sanitiseStallReport, storeStallReport, summariseStallReports, parseStallLogLines });
