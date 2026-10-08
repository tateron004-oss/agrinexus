"use strict";

// Health readings saved through the AI planner (the "health.record" and "health.chronic-reading" tools) live in the Postgres record store (nexus_records, workspace "health-records"),
// not in the older per-person lists inside db.profile. The conversation that shows, deletes and corrects readings by voice or chat (readings-conversation.js) only looked at db.profile, so
// a reading saved the planner way could be neither shown, deleted nor corrected, and "delete all my health records" left it behind.
//
// This lays the person's stored readings over that conversation for the length of ONE turn, so the conversation itself (its wording, its Kiswahili, its thresholds and guidance, its asking before
// every change and its counted "yes, delete all N" safeguard) is the very same code, unchanged, for readings kept either way:
//   1. the person's own stored readings are read (tenant + person scoped, never anyone else's) and shown to the conversation in the shape it already understands;
//   2. the conversation runs;
//   3. whatever it removed or corrected is written back to the store, and only then is the answer given. If the write fails the answer says so plainly instead of claiming it was done.
// If the store cannot be reached, the answer says that readings could not be read and nothing was changed.
//
// Two entry points: mergedHealthReadingsTurn() for the older routes that already hold db.profile (readings kept both ways are shown and changed together), and storeReadingsTurn() for the planner,
// which has no db.profile (what was asked is kept in the store as a small "health_readings_state" record, for a few minutes).
//
// The Kiswahili added here (the two failure sentences) is a first draft and must be checked by a fluent speaker.

const crypto = require("node:crypto");
const { healthReadingsTurn, peekPending, sentenceLanguage, ownerOf, STORE_KEY, CHRONIC, RPM, CONTEXT_MS } = require("./readings-conversation.js");
const { parseHealthIntent, isYes, isNo, isDeleteConfirmed } = require("./vitals-speech.js");
const { invalidReadingReason } = require("./executor.js");
const { toMgdl } = require("../../server/providers/bloodGlucose.js");
const { DEFAULT_TIME_ZONE } = require("../brief/compose.js");

const WORKSPACE_ID = "health-records";
const READING_TYPES = Object.freeze(["health_observation", "chronic_disease_reading"]);
const STATE_TYPE = "health_readings_state";
const ORIGIN = "store";
const READING_KEYS = Object.freeze(["systolic", "diastolic", "glucose", "pulse", "oxygenSaturation", "temperature", "weight"]);
const MANAGE_INTENTS = new Set(["show", "delete-last", "delete-all", "correct", "wrong"]);
const STATIC_INTENTS = new Set(["who-can-see", "share"]);
const PENDING_KINDS = new Set(["delete-last", "delete-all", "correct"]);
// Answers of the conversation that belong to it when it runs on its own for the planner. A reading said in full is saved by the planner's own recording step, with its own confirmation.
const OWN_KINDS = new Set(["show", "delete-last", "delete-none", "delete-all", "correct", "correct-ask", "correct-none", "correct-invalid", "wrong-ask", "who-can-see", "share",
  "delete-last-declined", "delete-all-declined", "correct-declined"]);

const SAY = {
  en: {
    unreachable: "I could not reach your saved health readings just now, so I have not shown, changed or deleted anything. Please try again in a moment.",
    writeFailed: "I could not finish that, because your saved readings could not be updated just now. Please say \"show my readings\" to see what is saved."
  },
  sw: {
    unreachable: "Sikuweza kufikia vipimo vyako vya afya vilivyohifadhiwa kwa sasa, kwa hivyo sijaonyesha, kubadilisha wala kufuta chochote. Tafadhali jaribu tena baada ya muda mfupi.",
    writeFailed: "Sikuweza kumaliza hilo, kwa sababu vipimo vyako vilivyohifadhiwa havikuweza kusasishwa kwa sasa. Tafadhali sema \"nionyeshe vipimo vyangu\" uone kilichohifadhiwa."
  }
};
const say = lang => SAY[lang] || SAY.en;

// A store that hangs is treated like one that cannot be reached.
const STORE_TIMEOUT_MS = 6000;
function withTimeout(promise, ms = STORE_TIMEOUT_MS) {
  let timer;
  return Promise.race([Promise.resolve(promise), new Promise((_, reject) => { timer = setTimeout(() => reject(new Error("health readings store timed out")), ms); })]).finally(() => clearTimeout(timer));
}

// ---------------------------------------------------------------- what was asked

function manageIntent(text) {
  try { const intent = parseHealthIntent(text, { context: true }); return intent && MANAGE_INTENTS.has(intent.intent) ? intent : null; } catch { return null; }
}
function staticIntent(text) {
  try { const intent = parseHealthIntent(text, { context: true }); return intent && STATIC_INTENTS.has(intent.intent) ? intent : null; } catch { return null; }
}
const isAnswer = text => isYes(text) || isNo(text) || isDeleteConfirmed(text);

// ---------------------------------------------------------------- the stored readings, as the conversation sees them

const num = value => { if (value === null || value === undefined || value === "") return null; const n = Number(value); return Number.isFinite(n) ? n : null; };
const isoOf = value => { const t = value instanceof Date ? value : new Date(value); return Number.isNaN(t.getTime()) ? new Date(0).toISOString() : t.toISOString(); };
function dayLabel(iso, timeZone) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  try { return new Date(iso).toLocaleDateString("en-GB", { ...options, timeZone: timeZone || DEFAULT_TIME_ZONE }); }
  catch { return new Date(iso).toLocaleDateString("en-GB", { ...options, timeZone: DEFAULT_TIME_ZONE }); }
}

// One stored row -> the records the conversation reads: one that holds blood pressure and/or blood sugar, and one each for pulse, oxygen, temperature and weight.
function mapRow(row, owner, timeZone) {
  const data = row.data && typeof row.data === "object" ? row.data : {};
  const rid = row.record_id; const createdAt = isoOf(row.created_at);
  const base = { ownerId: owner, origin: ORIGIN, createdAt, dateTimeText: dayLabel(createdAt, timeZone), sourceRecordId: rid };
  const isChronic = row.record_type === "chronic_disease_reading";
  const out = [];
  const sys = num(data.systolic); const dia = num(data.diastolic); const glu = num(data.glucose);
  if ((sys !== null && dia !== null) || glu !== null) {
    const rec = { ...base, id: rid, part: "chronic" };
    if (sys !== null && dia !== null) { rec.systolic = sys; rec.diastolic = dia; }
    // The planner stores a blood sugar in mg/dL whatever unit it was said in; the chronic-reading tool stores the unit it was given.
    if (glu !== null) { rec.glucose = glu; rec.glucoseUnit = isChronic ? String(data.glucoseUnit || "unknown") : "mg/dL"; }
    out.push({ store: CHRONIC, rec });
  }
  const pulse = num(data.pulse); if (pulse !== null) out.push({ store: RPM, rec: { ...base, id: `${rid}#pulse`, part: "pulse", metric: "pulse", value: String(pulse) } });
  const oxygen = num(data.oxygenSaturation); if (oxygen !== null) out.push({ store: RPM, rec: { ...base, id: `${rid}#oxygen`, part: "oxygen", metric: "oxygen_saturation", value: String(oxygen) } });
  const temperature = num(data.temperature); if (temperature !== null) out.push({ store: RPM, rec: { ...base, id: `${rid}#temperature`, part: "temperature", metric: "temperature", value: String(temperature), unit: data.temperatureUnit === "F" ? "F" : data.temperatureUnit === "C" ? "C" : "" } });
  const weight = num(data.weight); if (weight !== null) out.push({ store: RPM, rec: { ...base, id: `${rid}#weight`, part: "weight", metric: "weight", value: String(weight), unit: data.weightUnit && data.weightUnit !== "unknown" ? String(data.weightUnit) : "" } });
  return out;
}

// Reads this person's stored readings. Throws when the store cannot be read. Only rows that are this tenant's, this person's and live are used, whatever the store hands back.
async function loadStored({ records, tenantId, userId, timeZone, owner: ownerGiven }) {
  const owner = ownerGiven || ownerOf({ id: userId });
  const rows = new Map(); const chronic = []; const rpm = []; const index = new Map();
  for (const recordType of READING_TYPES) {
    const list = await records.list({ tenantId, ownerId: userId, subjectId: userId, workspaceId: WORKSPACE_ID, recordType, limit: 200 });
    for (const row of Array.isArray(list) ? list : []) {
      if (!row || !row.record_id || row.state === "deleted" || row.deleted_at) continue;
      if ((row.tenant_id && row.tenant_id !== tenantId) || (row.owner_id && String(row.owner_id) !== String(userId)) || (row.subject_id && String(row.subject_id) !== String(userId))) continue;
      rows.set(row.record_id, row);
      for (const { store, rec } of mapRow(row, owner, timeZone)) {
        (store === CHRONIC ? chronic : rpm).push(rec);
        index.set(rec.id, { rid: row.record_id, part: rec.part, original: { ...rec } });
      }
    }
  }
  return { tenantId, userId, owner, rows, chronic, rpm, index };
}

// Puts the stored readings in front of the conversation's own lists for the length of one turn, and takes them out again. Nothing in between waits, so nothing else can see them.
function lay(db, loaded) {
  db.profile = db.profile && typeof db.profile === "object" ? db.profile : {};
  const existed = { [CHRONIC]: Array.isArray(db.profile[CHRONIC]), [RPM]: Array.isArray(db.profile[RPM]) };
  db.profile[CHRONIC] = [...loaded.chronic.map(rec => ({ ...rec })), ...(existed[CHRONIC] ? db.profile[CHRONIC] : [])];
  db.profile[RPM] = [...loaded.rpm.map(rec => ({ ...rec })), ...(existed[RPM] ? db.profile[RPM] : [])];
  return existed;
}
function lift(db, existed) {
  const survivors = new Map();
  for (const key of [CHRONIC, RPM]) {
    const all = Array.isArray(db.profile[key]) ? db.profile[key] : [];
    for (const rec of all) if (rec && rec.origin === ORIGIN) survivors.set(rec.id, rec);
    const rest = all.filter(rec => !(rec && rec.origin === ORIGIN));
    if (existed[key] || rest.length) db.profile[key] = rest; else delete db.profile[key];
  }
  return survivors;
}

// ---------------------------------------------------------------- writing back what the conversation removed or corrected

function applyRemoval(data, part) {
  if (part === "chronic") { delete data.systolic; delete data.diastolic; delete data.glucose; delete data.glucoseUnit; }
  else if (part === "pulse") delete data.pulse;
  else if (part === "oxygen") delete data.oxygenSaturation;
  else if (part === "temperature") { delete data.temperature; delete data.temperatureUnit; }
  else if (part === "weight") { delete data.weight; delete data.weightUnit; delete data.bmiInformational; }
}
function applyChange(data, row, meta, after) {
  if (meta.part === "chronic") {
    if (num(after.systolic) !== null && num(after.diastolic) !== null) { data.systolic = Number(after.systolic); data.diastolic = Number(after.diastolic); }
    if (num(after.glucose) !== null) {
      if (row.record_type === "chronic_disease_reading") { data.glucose = Number(after.glucose); data.glucoseUnit = String(after.glucoseUnit || "unknown"); }
      else data.glucose = Math.round(after.glucoseUnit === "mmol/L" ? toMgdl({ unit: "mmol/L", value: Number(after.glucose) }) : Number(after.glucose));
    }
  } else if (meta.part === "pulse") data.pulse = Number(after.value);
  else if (meta.part === "oxygen") data.oxygenSaturation = Number(after.value);
  else if (meta.part === "temperature") { data.temperature = Number(after.value); if (after.unit === "C" || after.unit === "F") data.temperatureUnit = after.unit; }
  else if (meta.part === "weight") { data.weight = Number(after.value); if (after.unit) data.weightUnit = String(after.unit); delete data.bmiInformational; }
}

// Writes the difference between what the conversation was shown and what is left. Returns { ok, removed, changed }; ok is false if any single write failed.
async function settle({ records }, loaded, survivors) {
  const jobs = new Map();
  for (const [tmpId, meta] of loaded.index) {
    const after = survivors.get(tmpId);
    const job = jobs.get(meta.rid) || { removed: [], changed: [] };
    if (!after) job.removed.push(meta);
    else if ((after.correctedAt || "") !== (meta.original.correctedAt || "")) job.changed.push({ meta, after });
    if (job.removed.length || job.changed.length) jobs.set(meta.rid, job);
  }
  let ok = true; let removed = 0; let changed = 0;
  for (const [rid, job] of jobs) {
    const row = loaded.rows.get(rid);
    try {
      if (!row) throw new Error("unknown row");
      const data = { ...(row.data || {}) };
      for (const { part } of job.removed) applyRemoval(data, part);
      for (const { meta, after } of job.changed) applyChange(data, row, meta, after);
      const anyLeft = READING_KEYS.some(key => num(data[key]) !== null);
      if (!anyLeft) {
        await records.remove({ tenantId: loaded.tenantId, recordId: rid, actorId: loaded.userId });
        removed += 1;
      } else {
        if (row.record_type === "health_observation") { const impossible = invalidReadingReason(data); if (impossible) throw new Error(impossible); }
        await records.update({ tenantId: loaded.tenantId, recordId: rid, expectedVersion: row.version, actorId: loaded.userId, data,
          provenance: { ...(row.provenance || {}), via: "health-readings-conversation", editedAt: new Date().toISOString() } });
        if (job.changed.length) changed += 1; else removed += 1;
      }
    } catch { ok = false; }
  }
  return { ok, removed, changed };
}

// ---------------------------------------------------------------- one turn on top of the older routes (readings kept either way, together)

const unreachableTurn = lang => ({ response: say(lang).unreachable, status: "completed", saved: false, wrote: false, requiresConfirmation: false, lang, kind: "store-unreachable" });

/**
 * healthReadingsTurn() for a caller that holds db.profile, with the person's stored (planner-saved) readings laid over it for this turn.
 * `storeFor(user)` resolves { records, tenantId, userId, timeZone }, or null when there is no record store at all (then this is exactly healthReadingsTurn()), or throws when it cannot be reached.
 */
async function mergedHealthReadingsTurn(options = {}) {
  const { db, user, text, language, confirmedByCaller, canWrite, storeFor } = options;
  const now = options.now instanceof Date ? options.now : new Date();
  const plain = () => healthReadingsTurn({ db, user, text, language, confirmedByCaller, canWrite, now });
  if (typeof storeFor !== "function" || !db || !user || !String(text || "").trim()) return plain();
  const answering = isAnswer(text) ? peekPending(db, user, now) : null;
  const wanted = Boolean(manageIntent(text)) || Boolean(answering && PENDING_KINDS.has(answering.kind));
  if (!wanted) return plain();
  const lang = answering ? answering.lang : sentenceLanguage(text, language);
  let store;
  try { store = await storeFor(user); } catch { return unreachableTurn(lang); }
  if (!store) return plain();
  let loaded;
  try { loaded = await withTimeout(loadStored({ ...store, owner: ownerOf(user) })); } catch { return unreachableTurn(lang); }
  const existed = lay(db, loaded);
  let turn; let survivors;
  try { turn = plain(); } finally { survivors = lift(db, existed); }
  if (!turn) return turn;
  const written = await withTimeout(settle(store, loaded, survivors)).catch(() => ({ ok: false }));
  if (!written.ok) return { ...turn, response: say(turn.lang || lang).writeFailed, saved: false, wrote: false, requiresConfirmation: false, status: "completed", kind: "store-write-failed" };
  return turn;
}

// ---------------------------------------------------------------- the planner's turn (no db.profile: what was asked is kept in the store for a few minutes)

async function loadState({ records, tenantId, userId }) {
  const list = await records.list({ tenantId, ownerId: userId, subjectId: userId, workspaceId: WORKSPACE_ID, recordType: STATE_TYPE, limit: 5 });
  return (Array.isArray(list) ? list : []).filter(row => row && row.data && row.data.entry && !row.deleted_at && row.state !== "deleted");
}
async function saveState({ records, tenantId, userId }, rows, entry) {
  const [current, ...extra] = rows;
  for (const row of extra) { try { await records.remove({ tenantId, recordId: row.record_id, actorId: userId }); } catch { /* an old leftover; it expires on its own */ } }
  if (!entry) { if (current) await records.remove({ tenantId, recordId: current.record_id, actorId: userId }); return; }
  if (current && current.data.entry.id === entry.id) return;
  if (current) { await records.update({ tenantId, recordId: current.record_id, expectedVersion: current.version, actorId: userId, data: { entry }, provenance: { source: "nexus-agent" } }); return; }
  await records.create({ tenantId, ownerId: userId, subjectId: userId, workspaceId: WORKSPACE_ID, recordType: STATE_TYPE, classification: "health", data: { entry }, provenance: { source: "nexus-agent" } });
}

/**
 * The planner's turn for showing, deleting and correcting readings kept in the record store, and for "who can see my health information".
 * @returns null when this sentence is not about that (the planner carries on), or { response, kind, wrote, requiresConfirmation, lang, status }.
 */
async function storeReadingsTurn(options = {}) {
  const { records, tenantId, userId, text, language, timeZone } = options;
  const now = options.now instanceof Date ? options.now : new Date();
  if (!records || !tenantId || !userId || !String(text || "").trim()) return null;
  const canWrite = options.canWrite !== false;
  const owner = ownerOf({ id: userId });
  const user = { id: userId };

  // Who can see them, and sharing: the same fixed answers, nothing stored to read.
  if (staticIntent(text)) {
    const turn = healthReadingsTurn({ db: { profile: {} }, user, text, language, canWrite, now });
    return turn && OWN_KINDS.has(turn.kind) ? turn : null;
  }
  const intent = manageIntent(text);
  const answering = !intent && isAnswer(text);
  if (!intent && !answering) return null;
  const lang = sentenceLanguage(text, language);

  let loaded; let stateRows;
  try {
    stateRows = await withTimeout(loadState({ records, tenantId, userId }));
    if (answering && !stateRows.some(row => PENDING_KINDS.has(row.data.entry.kind) && (Date.parse(row.data.entry.expiresAt || "") || 0) > now.getTime())) return null;
    loaded = await withTimeout(loadStored({ records, tenantId, userId, timeZone }));
  } catch { return unreachableTurn(lang); }

  // What was last talked about, so "that was wrong, it was 133/78" is understood right after a reading was saved: the newest stored reading, if it is recent.
  const db = { profile: {} };
  const kept = stateRows[0]?.data?.entry || null;
  const keptFresh = kept && now.getTime() - (Date.parse(kept.at || "") || 0) < CONTEXT_MS;
  if (keptFresh) db.profile[STORE_KEY] = [{ ...kept, ownerId: owner }];
  else {
    const newest = [...loaded.chronic, ...loaded.rpm].sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))[0];
    if (newest && now.getTime() - Date.parse(newest.createdAt) < CONTEXT_MS && Date.parse(newest.createdAt) <= now.getTime()) {
      const lastType = newest.part === "chronic" ? (newest.systolic !== undefined ? "bp" : "glucose") : newest.part === "oxygen" ? "oxygen" : newest.part;
      db.profile[STORE_KEY] = [{ id: `ctx_${newest.sourceRecordId}`, kind: "context", payload: null, lang: "en", lastType, at: newest.createdAt, expiresAt: newest.createdAt, ownerId: owner }];
    }
  }
  const existed = lay(db, loaded);
  let turn; let survivors;
  try { turn = healthReadingsTurn({ db, user, text, language, canWrite, now }); } finally { survivors = lift(db, existed); }
  if (!turn || !(OWN_KINDS.has(turn.kind) || turn.status === "restricted")) return null;
  const written = await withTimeout(settle({ records }, loaded, survivors)).catch(() => ({ ok: false }));
  if (!written.ok) return { ...turn, response: say(turn.lang || lang).writeFailed, saved: false, wrote: false, requiresConfirmation: false, status: "completed", kind: "store-write-failed" };
  const next = Array.isArray(db.profile[STORE_KEY]) && db.profile[STORE_KEY][0] ? (({ ownerId, ...entry }) => entry)(db.profile[STORE_KEY][0]) : null;
  // A context worked out from the newest stored reading is not kept; what the conversation itself asked or noted is.
  if (next && !String(next.id).startsWith("ctx_")) {
    try { await withTimeout(saveState({ records, tenantId, userId }, stateRows, next)); }
    catch { /* the answer was already worked out; a question that could not be kept is simply asked again by the person */ }
  }
  return turn;
}

module.exports = Object.freeze({ mergedHealthReadingsTurn, storeReadingsTurn, manageIntent, loadStored, settle, lay, lift, mapRow,
  WORKSPACE_ID, READING_TYPES, STATE_TYPE, ORIGIN, PENDING_KINDS, MANAGE_INTENTS });
