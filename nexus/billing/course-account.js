"use strict";
// What a learner has bought for Koach Learn courses with Kyro, kept in the record store (one record per person: workspace koachlearn-account:<userId>).
//   purchases  { [reference]: { plan, courses, voiceMinutes, amount, currency, provider, at, until } }   one per paid checkout; the provider's reference makes a grant happen once
//   chosen     { [course slug]: { at, until, reference } }                                             the courses picked with the course slots bought (a slot is used the first
//                                                                                                       time a course is studied, and lasts as long as the purchase it came from)
//   voiceUsed  minutes of voice tutoring used so far
//   pending    { [reference]: { provider, plan, at } }                                                  checkouts started and not yet confirmed paid (checked again later)
// Courses bought with "every course for a year" are not picked one by one: any course may be studied until that year ends.

const ACCOUNT = Object.freeze({ workspace: userId => `koachlearn-account:${userId}`, recordType: "koachlearn-account" });
const EMPTY = Object.freeze({ purchases: {}, chosen: {}, voiceUsed: 0, pending: {} });
const YEAR_MS = 365 * 24 * 60 * 60 * 1000;

function normal(data) {
  const d = data && typeof data === "object" ? data : {};
  return { purchases: { ...(d.purchases || {}) }, chosen: { ...(d.chosen || {}) }, voiceUsed: Number(d.voiceUsed) || 0, pending: { ...(d.pending || {}) } };
}
const active = (purchase, now) => !purchase.until || Date.parse(purchase.until) > now;

// { coursesLeft, allCoursesUntil, chosen: [slug], voiceLeft, voiceTotal, purchases: n }
function summary(data, now = Date.now()) {
  const d = normal(data);
  const live = Object.entries(d.purchases).filter(([, p]) => active(p, now));
  let allCoursesUntil = null; let slots = 0; let voiceTotal = 0;
  for (const [, p] of live) {
    if (p.courses === "all") { if (!allCoursesUntil || Date.parse(p.until) > Date.parse(allCoursesUntil)) allCoursesUntil = p.until; }
    else slots += Number(p.courses) || 0;
    voiceTotal += Number(p.voiceMinutes) || 0;
  }
  const usedSlots = Object.values(d.chosen).filter(c => live.some(([ref]) => ref === c.reference)).length;
  const chosen = Object.entries(d.chosen).filter(([, c]) => !c.until || Date.parse(c.until) > now).map(([slug]) => slug);
  const latest = live.slice().sort((a, b) => Date.parse(b[1].at) - Date.parse(a[1].at))[0];
  return Object.freeze({ coursesLeft: Math.max(slots - usedSlots, 0), allCoursesUntil, chosen, voiceTotal, voiceLeft: Math.max(voiceTotal - d.voiceUsed, 0), purchases: live.length,
    latestPlan: latest ? latest[1].plan : null, latestAt: latest ? latest[1].at : null, pending: Object.keys(d.pending).length });
}

// A paid checkout becomes a purchase, once (the same reference again changes nothing).
function grant(data, { reference, plan, courses, voiceMinutes, amount, currency, provider }, now = Date.now()) {
  const d = normal(data);
  if (!reference || d.purchases[reference]) { delete d.pending[reference]; return { data: d, granted: false }; }
  const until = plan === "voice" ? null : new Date(now + YEAR_MS).toISOString();
  d.purchases[reference] = { plan, courses: courses === Infinity ? "all" : Number(courses) || 0, voiceMinutes: Number(voiceMinutes) || 0, amount, currency, provider, at: new Date(now).toISOString(), until };
  delete d.pending[reference];
  return { data: d, granted: true };
}

// May this person study this course? Uses a course slot the first time. -> { ok, data, changed, why: "chosen" | "all" | "slot" | "none" }
function choose(data, slug, now = Date.now()) {
  const d = normal(data);
  const have = d.chosen[slug];
  if (have && (!have.until || Date.parse(have.until) > now)) return { ok: true, data: d, changed: false, why: "chosen" };
  const s = summary(d, now);
  if (s.allCoursesUntil) return { ok: true, data: d, changed: false, why: "all" };
  if (s.coursesLeft <= 0) return { ok: false, data: d, changed: false, why: "none" };
  // the slot comes from the purchase that ends first, so none is left unused
  const used = ref => Object.values(d.chosen).filter(c => c.reference === ref).length;
  const from = Object.entries(d.purchases).filter(([ref, p]) => active(p, now) && p.courses !== "all" && used(ref) < (Number(p.courses) || 0))
    .sort((a, b) => Date.parse(a[1].until || "9999") - Date.parse(b[1].until || "9999"))[0];
  if (!from) return { ok: false, data: d, changed: false, why: "none" };
  d.chosen[slug] = { at: new Date(now).toISOString(), until: from[1].until, reference: from[0] };
  return { ok: true, data: d, changed: true, why: "slot" };
}

function useVoice(data, minutes) {
  const d = normal(data);
  d.voiceUsed = Math.round((d.voiceUsed + Math.max(Number(minutes) || 0, 0)) * 100) / 100;
  return d;
}
function addPending(data, { reference, provider, plan }, now = Date.now()) {
  const d = normal(data);
  // (only the last 20 checkouts started are kept to check)
  d.pending[reference] = { provider, plan, at: new Date(now).toISOString() };
  const keys = Object.keys(d.pending).sort((a, b) => Date.parse(d.pending[a].at) - Date.parse(d.pending[b].at));
  for (const key of keys.slice(0, Math.max(keys.length - 20, 0))) delete d.pending[key];
  return d;
}

// ---- the record ----
async function read(records, { tenantId, userId }) {
  if (!records?.list || !tenantId || !userId) return { data: normal(null), row: null };
  const rows = await records.list({ tenantId, ownerId: userId, workspaceId: ACCOUNT.workspace(userId), recordType: ACCOUNT.recordType, limit: 1 });
  const row = rows && rows[0] ? rows[0] : null;
  return { data: normal(row && row.data), row };
}
// Changes the record with `change(data) -> data`, safely when two changes come at once (version check, a few tries).
async function update(records, { tenantId, userId }, change) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const { data, row } = await read(records, { tenantId, userId });
    const next = change(data);
    if (!next) return data;
    try {
      if (row && typeof records.update === "function" && row.record_id && Number.isInteger(row.version)) {
        await records.update({ tenantId, recordId: row.record_id, expectedVersion: row.version, actorId: userId, data: next, provenance: { source: "koachlearn-course-account" } });
      } else {
        await records.upsertSingleton({ tenantId, ownerId: userId, workspaceId: ACCOUNT.workspace(userId), recordType: ACCOUNT.recordType, classification: "standard",
          data: next, provenance: { source: "koachlearn-course-account" }, actorId: userId });
      }
      return next;
    } catch (error) {
      if (!/version conflict/i.test(String(error && error.message)) || attempt === 3) throw error;
    }
  }
  return null;
}

module.exports = Object.freeze({ summary, grant, choose, useVoice, addPending, read, update, ACCOUNT, EMPTY });
