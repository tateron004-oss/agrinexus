// The phrase sweep: every phrase of section 14 ("What you can say") of the capabilities list, in English and Kiswahili, run through the REAL server on the three routes a person can reach it by:
//   orb    POST /api/voice/realtime/tool with the tool the orb's model would pick (nexus_everyday_records for everyday saving; nexus_weather, nexus_health_preparation ... for the rest)
//   typed  POST /api/nexus/runtime/behavior/turn (+ /confirm and /acknowledgements for a "yes")
//   cmd    POST /api/agent/command (conversational: true), the older route
// For each phrase and route it records the reply, what changed in the database (nexus_memory_items, nexus_notifications, nexus_schedules, nexus_records, nexus_documents, the legacy state document ...),
// and any swallowed SQL error in app.log, then judges it:
//   PASS    the right answer and the right thing stored
//   HONEST  a clear "I can't do that / nothing saved" (or a question for the missing detail), nothing stored
//   WRONG   an irrelevant answer, the wrong thing stored, the wrong language, a claim of "saved"/"done" with no row, another account's data
//   CRASH   HTTP 5xx, or a swallowed SQL error (a [pgerr] line in app.log)
//   MODEL   only a real AI model can answer (the stand-in model replied); not judged
//   PROVIDER the step needs a tool provider that this harness cannot reach (HTTP 503); not judged, except for an urgent phrase, which must be answered in words at once
// Then it asks the same read-backs as a second account and checks it sees nothing of the first account's data.
//
//   node phrases.mjs [--only <regex on phrase id>] [--route orb,typed,cmd] [--group <regex>]      (the harness must be up: node harness.mjs, or run.mjs)
// Writes phrases-result.json to RR_OUT and prints the table. Exit code 1 if anything is WRONG or CRASH.
import fs from "node:fs";
import path from "node:path";
import { OUT, ports, call as rawCall, adminCookie, makeUser, sql, sleep } from "./common.mjs";
import { PHRASES, GROUPS } from "./phrase-list.mjs";

const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : null; };
const only = opt("--only") ? new RegExp(opt("--only"), "i") : null;
const groupOnly = opt("--group") ? new RegExp(opt("--group"), "i") : null;
const ROUTES = (opt("--route") || "orb,typed,cmd").split(",");
const TZ = "Africa/Nairobi";

const withTimeout = (promise, ms, label) => Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error(`timeout after ${ms} ms: ${label}`)), ms))]);
const call = (...a) => withTimeout(rawCall(...a), 100000, a.slice(0, 2).join(" "));

// ------------------------------------------------------------------ the three routes
let counter = 0;
const pendingTyped = new Map();
const conversationOf = new Map(); // like the app, the typed route carries the conversation id of the last answer, so a follow-up ("9 am") continues the same conversation
async function settle(u, r) {
  const j = r.json || {};
  if (j.conversationId) conversationOf.set(u.email, j.conversationId);
  if (j.state === "confirmation_required") pendingTyped.set(u.email, j); else if (j.state !== "confirmation_required") pendingTyped.delete(u.email);
  if (j.state === "render_required" && j.render) await call("POST", "/api/nexus/runtime/behavior/acknowledgements", { taskId: j.taskId, commandId: j.commandId, correlationId: j.correlationId, workspace: j.render.workspace, rendered: true, visible: true, audible: false, evidence: {} }, u.cookie);
  // a workspace answer (reminder list, music, business ...) carries its words in render.data; render.response is only the generic "rendering the verified result"
  const rendered = j.render?.data?.summary || j.render?.data?.response || j.render?.response;
  const text = (j.state === "render_required" ? (j.render?.data?.summary || j.render?.data?.response ? rendered : rendered || j.response) : j.response) || j.clarification || j.message || j.error || ""; // (a refused step, like the business 422, says its words in "error")
  return { http: r.status, reply: String(text || (r.json ? "" : r.text.slice(0, 200))), state: j.state || j.code || "" };
}
const orbStamps = new Map();
const orbOnce = (u, text, lang, tool, extra = {}) => call("POST", "/api/voice/realtime/tool", { name: tool, correlationId: `ph-${Date.now()}-${counter++}`, arguments: { command: text, language: lang, ...extra }, language: lang, timeZone: TZ }, u.cookie);
const ROUTE = {
  async orb(u, text, lang, tool, extra) {
    // the tool door allows 90 calls a minute per person (server.js); stay under it, and wait out a refusal instead of judging it as an answer
    const stamps = (orbStamps.get(u.email) || []).filter(t => Date.now() - t < 60000); orbStamps.set(u.email, stamps);
    while (stamps.length >= 70) { await sleep(1500); while (stamps.length && Date.now() - stamps[0] >= 60000) stamps.shift(); }
    stamps.push(Date.now());
    let r;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      r = await orbOnce(u, text, lang, tool, extra);
      if (r.status !== 429) break;
      await sleep(31000);
    }
    return { http: r.status, reply: String(r.json?.response || r.json?.error || (r.json ? "" : r.text.slice(0, 200))), state: r.json?.status || "" };
  },
  async typed(u, text, lang) {
    const p = pendingTyped.get(u.email);
    if (p && /^(yes|no|ndiyo|hapana)\b/i.test(text)) {
      pendingTyped.delete(u.email);
      return settle(u, await call("POST", "/api/nexus/runtime/behavior/confirm", { taskId: p.taskId, stepId: p.outcome?.pendingStepId, approved: /^(yes|ndiyo)/i.test(text), text }, u.cookie));
    }
    return settle(u, await call("POST", "/api/nexus/runtime/behavior/turn", { text, channel: "typed", locale: lang, timeZone: TZ, ...(conversationOf.get(u.email) ? { conversationId: conversationOf.get(u.email) } : {}) }, u.cookie));
  },
  async cmd(u, text, lang) {
    const r = await call("POST", "/api/agent/command", { command: text, language: lang, conversational: true, timeZone: TZ }, u.cookie);
    return { http: r.status, reply: String(r.json?.commandResult?.response || r.json?.error || (r.json ? "" : r.text.slice(0, 200))), state: r.json?.commandResult?.status || "" };
  }
};

// ------------------------------------------------------------------ what changed in the database
const ids = new Map();
async function who(u) {
  if (!ids.has(u.email)) ids.set(u.email, (await sql("select id, tenant_id from users where lower(email)=lower($1)", [u.email]))[0]);
  return ids.get(u.email);
}
const NOISE = /(^|\/)(activity|activityBy|agentMemory|agentCommands|agentConversation|integrationEvents|actionReceipts|nexusHealthVoicePending|usageEvents|auditLog|audit|notifications|voiceSessions|autonomousOperatingLoops|realtimeSessions|voiceLogs|operationsLog|events)(\/|\[|$)/i;
function collectArrays(o, p, out) {
  if (Array.isArray(o)) { const s = out.get(p) || new Set(); for (const el of o) s.add(JSON.stringify(el)); out.set(p, s); o.forEach(el => collectArrays(el, p + "[]", out)); }
  else if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) { if (!NOISE.test(`${p}/${k}`)) collectArrays(v, `${p}/${k}`, out); }
  return out;
}
async function snapshot(u) {
  const me = await who(u); const out = { db: {}, legacy: new Map() };
  if (!me) return out;
  const add = rows => { for (const row of rows) out.db[row.k] = (out.db[row.k] || 0) + Number(row.n); };
  const q = async (text, params) => { try { add(await sql(text, params)); } catch (error) { out.db["snapshot-error"] = String(error.message).slice(0, 80); } };
  const T = [me.tenant_id, me.id];
  await q("select 'mem:'||purpose||':'||coalesce(content->>'collection', content->>'kind', content->>'list', '')||':'||case when deleted_at is null then 'live' else 'deleted' end k, count(*)::int n from nexus_memory_items where tenant_id=$1 and principal_id=$2 group by 1", T);
  await q("select 'notif:'||state k, count(*)::int n from nexus_notifications where tenant_id=$1 and user_id=$2 group by 1", T);
  await q("select 'sched:'||job_type||':'||state k, count(*)::int n from nexus_schedules where tenant_id=$1 and owner_id=$2 group by 1", T);
  await q("select 'rec:'||workspace_id||'/'||record_type||':'||state k, count(*)::int n from nexus_records where tenant_id=$1 and owner_id=$2 group by 1", T);
  await q("select 'doc:'||document_type||':'||state k, count(*)::int n from nexus_documents where tenant_id=$1 and owner_id=$2 group by 1", T);
  await q("select 'artifact:'||kind k, count(*)::int n from nexus_artifacts where tenant_id=$1 and owner_id=$2 group by 1", T);
  await q("select 'consent:'||scope||':'||state k, count(*)::int n from nexus_consents where tenant_id=$1 and subject_id::text=$2::text group by 1", T);
  // a row changed in place (for example "stock of flour is low" edits the stock row): same id, different content
  out.rows = new Map();
  const r = async (label, text) => { try { for (const row of await sql(text, T)) out.rows.set(`${label}:${row.id}`, { h: row.h, k: `${label}:${row.k || ""}` }); } catch { /* none */ } };
  await r("mem", "select memory_id id, md5(content::text||coalesce(deleted_at::text,'')) h, purpose||':'||coalesce(content->>'collection', content->>'kind', content->>'list','') k from nexus_memory_items where tenant_id=$1 and principal_id=$2");
  await r("notif", "select notification_id id, md5(content::text||state||coalesce(scheduled_at::text,'')) h, '' k from nexus_notifications where tenant_id=$1 and user_id=$2");
  await r("sched", "select schedule_id id, md5(payload::text||state||coalesce(next_run_at::text,'')) h, job_type k from nexus_schedules where tenant_id=$1 and owner_id=$2");
  await r("rec", "select record_id id, md5(data::text||state||version::text) h, workspace_id||'/'||record_type k from nexus_records where tenant_id=$1 and owner_id=$2");
  try { out.legacy = collectArrays((await sql("select state from agrinexus_app_state where id='default'"))[0].state, "", new Map()); } catch { /* none */ }
  return out;
}
function delta(before, after) {
  const d = {};
  for (const k of new Set([...Object.keys(before.db), ...Object.keys(after.db)])) { const n = (after.db[k] || 0) - (before.db[k] || 0); if (n) d[k] = n; }
  for (const [id, row] of after.rows || []) { const was = before.rows?.get(id); if (was && was.h !== row.h) d[`upd:${row.k}`] = (d[`upd:${row.k}`] || 0) + 1; }
  for (const [p, set] of after.legacy) {
    if (p.endsWith("[]")) continue;
    const had = before.legacy.get(p) || new Set(); const gained = [...set].filter(x => !had.has(x));
    if (gained.length) d[`legacy:${p}`] = gained.length;
  }
  return d;
}

// ------------------------------------------------------------------ reading the log
const LOG = path.join(OUT, "app.log");
const logSize = () => { try { return fs.statSync(LOG).size; } catch { return 0; } };
function logSince(from) {
  try {
    const fd = fs.openSync(LOG, "r"); const size = fs.fstatSync(fd).size; const buf = Buffer.alloc(Math.max(0, size - from)); fs.readSync(fd, buf, 0, buf.length, from); fs.closeSync(fd);
    return buf.toString("utf8").split("\n").filter(line => /\[pgerr\]|TypeError|ReferenceError|RangeError|unhandled|uncaught/i.test(line) && !line.includes("nexus_acceptance_fault")).map(line => line.slice(0, 220));
  } catch { return []; }
}

// ------------------------------------------------------------------ judging
const ASK = /(say\s+["“']?yes|say yes|yes to|shall i|do you want me|would you like me|want me to|is that (right|correct)|confirm|ndiyo|is this right|should i)/i;
const HONEST = /(\?|not switched on|can't|cannot|can not|could not|couldn't|don't have|do not have|not able|unable|not available|isn't available|is not available|not set up|not connected|not configured|nothing (was )?(saved|sent|changed|deleted)|no saved|no reminders|no readings|sorry|haven't|not yet|i didn't|i did not|tell me (which|what|more|the)|which one|what (should|would|is the|do you)|what's the|how much|who (is|should)|please (tell|say|give)|missing|need (a|an|the|to know)|only (staff|admins)|not allowed|staff|nimeshindwa|siwezi|sina |hakuna|tafadhali (niambie|sema)|niambie|sijui|samahani|haipatikani)/i;
const BLOCKED = /(provider_blocked|STUBMODEL|"error"|TypeError|undefined|\[object|NaN|internal error|something went wrong)/i;
const SW_WORDS = /\b(na|ya|kwa|ni|wa|la|yako|wako|yangu|umeweka|nimeweka|nimerekodi|kwenye|hakuna|tafadhali|nimeongeza|umeongeza|sasa|ndiyo|hapana|asante|samahani|siwezi|sina|nimeshindwa|orodha|kumbuka|nimehifadhi|umeuza|ulituma|umetumia|nikumbushe|nitakukumbusha|shamba|mahindi|mbolea|sukari|maziwa|unga|kilo)\b/gi;
const EN_WORDS = /\b(the|your|you|is|are|to|and|i|my|saved|added|noted|recorded|here|there|not|can|could|was|will|have|has|with|for|from)\b/gi;
function looksEnglish(text) { const sw = (text.match(SW_WORDS) || []).length; const en = (text.match(EN_WORDS) || []).length; return en >= 3 && en > sw * 2; }

function judge(item, run) {
  const reasons = []; const final = run.steps.filter(s => !s.cleanup);
  const last = final[final.length - 1] || { reply: "", http: 0 };
  const replyAll = final.map(s => s.reply).join(" | ");
  const first = final[0] || { reply: "" };
  const d = run.delta; const pos = Object.keys(d).filter(k => d[k] > 0); const any = Object.keys(d);
  // The stand-in tool provider (https://provider.example) cannot be reached from this harness, so a step that needs a provider answers 503 "provider_request_failed". That is the harness, not the product, except for a phrase that must be answered at once.
  if (!run.pgerr.length && final.some(s => s.http >= 500) && final.filter(s => s.http >= 500).every(s => s.state === "provider_request_failed")) return item.urgent ? { verdict: "WRONG", reasons: ["an urgent phrase got no words at all when its provider call failed (HTTP 503)"] } : { verdict: "PROVIDER", reasons: ["needs a tool provider; none is reachable from this harness (HTTP 503)"] };
  if (final.some(s => s.http >= 500) || run.pgerr.length) return { verdict: "CRASH", reasons: [final.some(s => s.http >= 500) ? `HTTP ${final.find(s => s.http >= 500).http}` : "", ...run.pgerr.slice(0, 2)].filter(Boolean) };
  if (final.some(s => s.http === 0)) return { verdict: "CRASH", reasons: ["no answer (timeout or dropped connection)"] };
  if (/STUBMODEL/.test(replyAll)) return { verdict: "MODEL", reasons: ["reached the AI model; only a real model can answer this"] };
  const empty = !replyAll.replace(/[|\s]/g, "");
  const honest = HONEST.test(replyAll);
  const re = (rx, text) => new RegExp(rx.source, rx.flags.replace("g", "")).test(text);
  if (empty) return { verdict: "WRONG", reasons: ["empty reply"] };
  if (/provider_blocked|"error"|TypeError|\[object|NaN\b|undefined/.test(replyAll)) return { verdict: "WRONG", reasons: ["reply shows an internal error or placeholder"] };
  // saying the same thing twice ("Add a cow called Bella" in English, then in Kiswahili) is answered "you already have ..." and stores nothing more: that is the right answer
  if (item.dup && re(item.dup, replyAll) && !(item.lang === "sw" && looksEnglish(last.reply))) return { verdict: "PASS", reasons: [] };
  if (item.lang === "sw" && looksEnglish(last.reply) && !/rendering the verified result/.test(last.reply)) reasons.push("reply is in English for a Kiswahili phrase");
  if (item.notreply && re(item.notreply, replyAll)) reasons.push(`reply must not match ${item.notreply}`);
  const claimsDone = /\b(saved|added|noted|recorded|done|deleted|removed|cleared|set|scheduled|logged|registered|created|nimeweka|nimehifadhi|nimerekodi|nimeongeza|nimefuta)\b/i.test(last.reply) && !/\b(not|n't|nothing|couldn't|cannot|can't|unable|haven't|no )\b/i.test(last.reply);
  if (item.ask) {
    if (!ASK.test(first.reply) && !/not switched on/.test(first.reply)) reasons.push("did not ask for a yes before acting");
    const afterAsk = run.deltaAfterFirst || {}; const savedEarly = Object.keys(afterAsk).filter(k => afterAsk[k] > 0 && !/^legacy:/.test(k) && !/health_readings_state|authoritative-workspace-state|farm_session/.test(k));
    if (savedEarly.length && item.steps.length) reasons.push(`stored ${savedEarly.join(",")} before the yes`);
  }
  if (item.save) {
    const hit = pos.some(k => re(item.save, k));
    if (!hit) { if (!honest || claimsDone) reasons.push(claimsDone ? `says it is done but nothing stored (expected ${item.save}); changed: ${any.join(",") || "nothing"}` : `nothing stored (expected ${item.save})`); else return { verdict: "HONEST", reasons: [`nothing stored: ${last.reply.slice(0, 120)}`] }; }
  }
  if (item.change) {
    const hit = any.some(k => re(item.change, k));
    if (!hit) { if (!honest || claimsDone) reasons.push(claimsDone ? `says it is done but nothing changed (expected ${item.change})` : `nothing changed (expected ${item.change})`); else return { verdict: "HONEST", reasons: [`nothing changed: ${last.reply.slice(0, 120)}`] }; }
  }
  if (item.none && !item.save) {
    const written = pos.filter(k => !/^legacy:/.test(k) && !/farm_session|authoritative-workspace-state|health_readings_state/.test(k));
    if (written.length) reasons.push(`a question stored ${written.join(",")}`);
  }
  if (item.reply && !re(item.reply, replyAll)) { if (honest && !reasons.length) return { verdict: "HONEST", reasons: [last.reply.slice(0, 140)] }; reasons.push(`reply does not match ${item.reply}`); }
  if (reasons.length) return { verdict: "WRONG", reasons };
  if (item.net && honest) return { verdict: "HONEST", reasons: [last.reply.slice(0, 140)] };
  if (item.net && !last.reply.trim()) return { verdict: "WRONG", reasons: ["empty"] };
  return { verdict: honest && !item.save && !item.change && !item.reply && !item.ask ? "HONEST" : "PASS", reasons: [] };
}

// ------------------------------------------------------------------ run
const admin = await adminCookie();
async function makeAdminUser(label) {
  const email = `rt-${label}-${Math.random().toString(16).slice(2, 8)}@example.com`; const password = `Rt-${Math.random().toString(16).slice(2)}-Aa1!x`;
  const made = await call("POST", "/api/admin/admin-user", { email, name: `RT ${label}`, password, country: "Kenya", language: "en" }, admin);
  if (made.status !== 200) throw new Error(`could not make staff ${email}: ${made.status} ${made.text.slice(0, 100)}`);
  const login = await call("POST", "/api/login", { email, password });
  if (login.status !== 200) throw new Error(`staff sign-in failed (${login.status})`);
  return { email, password, cookie: login.cookie };
}
const users = {};
for (const route of ROUTES) { users[route] = { a: await makeUser(admin, `ph-${route}`), staff: await makeAdminUser(`ph-staff-${route}`) }; }
const userB = await makeUser(admin, "ph-b");
for (const route of ROUTES) for (const u of [users[route].a, users[route].staff]) await ROUTE.typed(u, "good morning", "en");
await ROUTE.typed(userB, "good morning", "en");

const results = [];
async function runPhrase(phrase, route, u, labelSuffix = "") {
  const item = { ...phrase, steps: route === "typed" && phrase.tsteps ? phrase.tsteps : phrase.steps }; // tsteps: follow-ups only the typed route needs (its yes is a separate /confirm call)
  const run = { id: item.id + labelSuffix, group: item.g, lang: item.lang, text: item.t, route, tool: route === "orb" ? item.tool : "", setup: !!item.setup, steps: [], delta: {}, pgerr: [], note: item.note || "" };
  const log0 = logSize(); const before = await snapshot(u);
  const say = async (text, cleanup = false) => {
    let r;
    try { r = await ROUTE[route](u, text, item.lang, item.tool, item.args); } catch (error) { r = { http: 0, reply: `[no answer] ${error.message}`, state: "" }; }
    run.steps.push({ say: text, reply: r.reply.replace(/\s+/g, " ").trim(), http: r.http, state: r.state, ...(cleanup ? { cleanup: true } : {}) });
    return r;
  };
  const r0 = await say(item.t);
  if (item.ask || item.steps.length) run.deltaAfterFirst = delta(before, await snapshot(u));
  let lastReply = r0.reply;
  for (const step of item.steps) { const r = await say(step); lastReply = r.reply; }
  // a guided form ("Let's add a field. How big is it? ... (or say skip)"): answer "skip" until it finishes, so the record is really made and the next phrase starts clean
  if (item.wizard) for (let n = 0; n < 8 && /\bskip\b/i.test(lastReply); n += 1) { const r = await say(item.lang === "sw" ? "ruka" : "skip"); lastReply = r.reply; }
  if (item.end) await say(item.end, true);
  // left waiting for an answer: say no (or never mind, for a question) so the next phrase starts clean
  if (/\?\s*$/.test(lastReply) && !ASK.test(lastReply)) await say(item.lang === "sw" ? "usijali" : "never mind", true);
  else if (ASK.test(lastReply) && /yes/i.test(lastReply) && !(item.steps.length && /^(no|hapana)/i.test(item.steps[item.steps.length - 1]))) await say(item.lang === "sw" ? "hapana" : "no", true);
  run.delta = delta(before, await snapshot(u));
  run.pgerr = logSince(log0);
  Object.assign(run, judge(item, run));
  if (item.saveAfterSteps && run.verdict !== "CRASH") { const hit = Object.keys(run.delta).some(k => run.delta[k] > 0 && item.saveAfterSteps.test(k)); if (!hit) { run.verdict = "WRONG"; run.reasons.push("the follow-up answer did not complete the record"); } else if (run.verdict === "HONEST" || run.verdict === "WRONG" && run.reasons.length === 0) run.verdict = "PASS"; }
  delete run.deltaAfterFirst;
  return run;
}

for (const route of ROUTES) {
  console.log(`\n===== route: ${route}`);
  for (const item of PHRASES) {
    if (only && !only.test(item.id)) continue;
    if (groupOnly && !groupOnly.test(item.g)) continue;
    if (route === "orb" && item.noorb) { results.push({ id: item.id, group: item.g, lang: item.lang, text: item.t, route, verdict: "NOORB", reasons: ["the browser registers no tool for this"], steps: [], delta: {} }); continue; }
    const run = await runPhrase(item, route, users[route].a);
    results.push(run);
    if (route === "orb" && item.alt) for (const tool of item.alt) results.push(await runPhrase({ ...item, tool }, route, users[route].a, `:via-${tool.replace(/^nexus_/, "")}`)); // the model may pick a nearer tool than the everyday one
    if (item.staff) results.push(await runPhrase(item, route, users[route].staff, ":staff"));
  }
  fs.writeFileSync(path.join(OUT, `phrases-partial-${route}.json`), JSON.stringify(results.filter(x => x.route === route), null, 1));
  for (const r of results.filter(x => x.route === route && !x.setup)) {
    if (r.verdict === "PASS") continue;
    console.log(`${r.verdict.padEnd(6)} ${r.id.padEnd(18)} ${r.text.slice(0, 50).padEnd(50)} :: ${(r.steps.filter(s => !s.cleanup).map(s => s.reply).join(" | ") || "").slice(0, 110)}${r.reasons.length ? `\n         -> ${r.reasons.join("; ").slice(0, 200)}` : ""}`);
  }
}

// ------------------------------------------------------------------ two-account isolation: account B asks the read-backs of the saving phrases, and must see none of A's data
const readbacks = [
  ["what is on my shopping list", /milk|eggs|bread|seed|maziwa/i], ["what are my notes", /pump|vet|seal/i], ["what do you remember about me", /Amina|maize|Kisumu/i],
  ["what reminders do I have", /oven|school fees|stretch|tablets/i], ["show my repeating reminders", /tablets/i], ["who owes me", /John/i], ["what did I earn today", /4,?500|4,?000|3,?500|2,?000/],
  ["what did I spend this month", /5,?000|12,?000/], ["my summary for this month", /4,?500|John|12,?000/], ["how much stock do I have", /20 bags|flour/i], ["what is running low", /flour|seed/i],
  ["show my readings", /140|7\.2/], ["show my blood pressure readings", /140/], ["who are my donors", /Grace/i], ["what is the status of my reports", /borehole/i],
  ["call Otieno", /254 ?712 ?345 ?678/], ["text Amina hello", /amina@example/i], ["call John", /254 ?712/], ["list farm guides", /(?!)/], ["show my training log", /5 km|7 hours|68/i]
];
const leaks = [];
for (const route of ROUTES) {
  for (const [phrase, secret] of readbacks) {
    let r; try { r = await ROUTE[route](userB, phrase, "en", route === "orb" ? (/readings|training/.test(phrase) ? "nexus_health_preparation" : "nexus_everyday_records") : ""); } catch (error) { r = { reply: `[no answer] ${error.message}` }; }
    if (secret.test(r.reply.replace(/["“][^"”]*["”]/g, ""))) leaks.push({ route, phrase, reply: r.reply.slice(0, 200) });
    if (pendingTyped.has(userB.email)) await ROUTE.typed(userB, "no", "en");
  }
}
const meB = await who(userB); const theirs = [];
if (meB) for (const route of ROUTES) { const a = await who(users[route].a); if (a) { const rows = await sql("select count(*)::int c from nexus_memory_items where principal_id=$1 and tenant_id=$2", [meB.id, meB.tenant_id]); theirs.push(rows[0].c); } }
const snapB = await snapshot(userB); const bWrites = Object.entries(snapB.db).filter(([k]) => /^mem:/.test(k) && /live/.test(k));
console.log(`\n===== isolation: account B asked ${readbacks.length * ROUTES.length} read-backs; leaks: ${leaks.length}; rows B ended with (it only read): ${bWrites.map(([k, n]) => `${k}=${n}`).join(", ") || "none"}`);
for (const leak of leaks) console.log(`LEAK ${leak.route}: "${leak.phrase}" -> ${leak.reply}`);
for (const leak of leaks) results.push({ id: `isolation:${leak.phrase}`, group: "Isolation", lang: "en", text: leak.phrase, route: leak.route, verdict: "WRONG", reasons: ["another account's data shown to account B"], steps: [{ say: leak.phrase, reply: leak.reply }], delta: {}, pgerr: [] });

// ------------------------------------------------------------------ table
const counted = results.filter(r => !r.setup);
const verdicts = ["PASS", "HONEST", "WRONG", "CRASH", "MODEL", "PROVIDER", "NOORB"];
console.log("\n===== totals per route (phrases x routes; setup steps are not counted)");
console.log("route".padEnd(8) + verdicts.map(v => v.padStart(8)).join("") + "   total");
for (const route of ROUTES) { const rs = counted.filter(r => r.route === route); console.log(route.padEnd(8) + verdicts.map(v => String(rs.filter(r => r.verdict === v).length).padStart(8)).join("") + String(rs.length).padStart(8)); }
console.log("\n===== per group (all routes)");
for (const g of GROUPS) { const rs = counted.filter(r => r.group === g); if (!rs.length) continue; console.log(g.padEnd(40) + verdicts.map(v => `${v}:${rs.filter(r => r.verdict === v).length}`).join("  ")); }
const sqlErrors = [...new Set((fs.existsSync(LOG) ? fs.readFileSync(LOG, "utf8") : "").split("\n").filter(l => l.startsWith("[pgerr]") && !l.includes("nexus_acceptance_fault")))];
console.log(`\ndatabase errors the code swallowed during the whole run: ${sqlErrors.length}`);
for (const line of sqlErrors.slice(0, 10)) console.log(`  ${line.slice(0, 200)}`);
fs.writeFileSync(path.join(OUT, "phrases-result.json"), JSON.stringify({ at: new Date().toISOString(), routes: ROUTES, users: Object.fromEntries(Object.entries(users).map(([k, v]) => [k, v.a.email])), isolation: { readbacks: readbacks.length, leaks }, sqlErrors, results }, null, 1));
process.exitCode = counted.some(r => r.verdict === "WRONG" || r.verdict === "CRASH") ? 1 : 0;
