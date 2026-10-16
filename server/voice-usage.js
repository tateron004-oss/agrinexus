"use strict";

// How often spoken requests go smoothly, from counts only. The browser adds up, per voice session, how many spoken requests it heard and how many of them hit a
// problem (the voice model began to refuse something the page then did; the page could not answer; the session stalled; the voice was slow to connect), and sends
// the totals now and then (public/app.js kyroNoteVoice / kyroFlushVoiceUsage). Nothing here is speech, a name or an id: five small numbers and a build, added into a
// per-day total (GET /api/admin/voice/usage-summary, owner only).

const FIELDS = Object.freeze(["requests", "refused", "notUnderstood", "stalls", "slowStarts"]);
const KEEP_DAYS = 45;
const MAX_PER_REPORT = 500;

const count = value => { const n = Math.floor(Number(value)); return Number.isFinite(n) && n > 0 ? Math.min(n, MAX_PER_REPORT) : 0; };
const dayOf = (now = new Date()) => now.toISOString().slice(0, 10);

function sanitiseUsage(body = {}) {
  const input = body && typeof body === "object" ? body : {};
  const usage = {}; for (const field of FIELDS) usage[field] = count(input[field]);
  usage.build = String(input.build ?? "").replace(/[^a-zA-Z0-9._-]/g, "").slice(0, 40);
  return usage;
}

function addUsage(daily, usage, { now = new Date() } = {}) {
  const next = daily && typeof daily === "object" && !Array.isArray(daily) ? { ...daily } : {};
  const day = dayOf(now);
  const current = { requests: 0, refused: 0, notUnderstood: 0, stalls: 0, slowStarts: 0, reports: 0, ...(next[day] || {}) };
  for (const field of FIELDS) current[field] = Math.min(current[field] + (usage[field] || 0), 10_000_000);
  current.reports += 1;
  next[day] = current;
  const days = Object.keys(next).sort();
  for (const old of days.slice(0, Math.max(0, days.length - KEEP_DAYS))) delete next[old];
  return next;
}

// "Smooth" is a request that was heard and had none of the problems above counted against it. A request with two problems counts once against, never below zero.
function smoothPercent(row) {
  if (!row.requests) return null;
  const problems = Math.min(row.requests, (row.refused || 0) + (row.notUnderstood || 0) + (row.stalls || 0));
  return Math.round(((row.requests - problems) / row.requests) * 1000) / 10;
}

function summariseUsage(daily, { days = 14 } = {}) {
  const rows = Object.keys(daily && typeof daily === "object" ? daily : {}).sort().slice(-Math.max(1, days)).map(day => ({ day, ...daily[day], smoothPercent: smoothPercent(daily[day]) }));
  const total = { requests: 0, refused: 0, notUnderstood: 0, stalls: 0, slowStarts: 0 };
  for (const row of rows) for (const field of FIELDS) total[field] += row[field] || 0;
  return { days: rows, total: { ...total, smoothPercent: smoothPercent(total) } };
}

module.exports = Object.freeze({ FIELDS, sanitiseUsage, addUsage, summariseUsage, smoothPercent, dayOf });
