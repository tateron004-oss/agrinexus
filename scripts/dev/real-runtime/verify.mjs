// Journeys against the REAL runtime on a real PostgreSQL parser, each ending in a look at what was STORED in the tables (or, for answers, what the person was told). Two dedicated ordinary test
// accounts; nothing touches a demo account. Prints PASS/FAIL per journey and writes verify-result.json to the output folder. Run by run.mjs, or alone while the harness is up.
import fs from "node:fs";
import path from "node:path";
import { OUT, call, adminCookie, makeUser, sql } from "./common.mjs";
const results = [];
const rec = (id, name, ok, evidence) => { results.push({ id, name, status: ok ? "PASS" : "FAIL", evidence: String(evidence).replace(/\s+/g, " ").slice(0, 600) }); console.log(`${ok ? "PASS" : "FAIL"}  ${id}  ${name}\n        ${String(evidence).replace(/\s+/g, " ").slice(0, 420)}`); };
let n = 0;
const V = (u, t, lang = "en") => call("POST", "/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `v-${Date.now()}-${n++}`, arguments: { command: t, language: lang }, language: lang, timeZone: "Africa/Nairobi" }, u.cookie).then(r => r.json?.response || r.text);
const C = (u, t, lang = "en") => call("POST", "/api/agent/command", { command: t, language: lang, conversational: true, timeZone: "Africa/Nairobi" }, u.cookie).then(r => r.json?.commandResult?.response || r.json?.error || r.text.slice(0, 200));
const Tpending = new Map();
async function T(u, t, lang = "en") {
  const p = Tpending.get(u.email);
  if (p && /^(yes|no)\b/i.test(t)) { Tpending.delete(u.email); const r = await call("POST", "/api/nexus/runtime/behavior/confirm", { taskId: p.taskId, stepId: p.outcome?.pendingStepId, approved: /^yes/i.test(t), text: t }, u.cookie); return settle(u, r); }
  const r = await call("POST", "/api/nexus/runtime/behavior/turn", { text: t, channel: "typed", locale: lang, timeZone: "Africa/Nairobi" }, u.cookie); return settle(u, r);
}
async function settle(u, r) {
  const j = r.json || {};
  if (j.state === "confirmation_required") Tpending.set(u.email, j);
  if (j.state === "render_required" && j.render) await call("POST", "/api/nexus/runtime/behavior/acknowledgements", { taskId: j.taskId, commandId: j.commandId, correlationId: j.correlationId, workspace: j.render.workspace, rendered: true, visible: true, audible: false, evidence: {} }, u.cookie);
  return (j.state === "render_required" ? j.render?.response || j.response : j.response) || r.text.slice(0, 200);
}
const uid = async email => (await sql("select id, tenant_id from users where lower(email)=lower($1)", [email]))[0];
const mem = async (u, purpose, extra = "") => sql(`select content, (deleted_at is not null) as deleted from nexus_memory_items where tenant_id=$1 and principal_id=$2 and purpose=$3 ${extra} order by created_at`, [u.tenant_id, u.id, purpose]);
const money = async u => (await mem(u, "farm_records")).filter(r => !r.deleted && r.content.collection === "money").map(r => r.content);

const a = await adminCookie(); const A = await makeUser(a, "ver-a"); const B = await makeUser(a, "ver-b");
await T(A, "good morning"); await T(B, "good morning"); const dbA = await uid(A.email); const dbB = await uid(B.email);
const M = "VERIFYMARK" + Math.random().toString(36).slice(2, 6);

// ---------- lists / notes / memory
let r1 = await V(A, `add milk, eggs and bread to my shopping list`);
let rows = (await mem(dbA, "personal_items")).filter(r => r.content.list === "shopping");
rec("J01a", "shopping list: add three (voice tool, nexus_general_conversation)", /Added milk, eggs and bread/.test(r1) && rows.length === 3 && rows.every(r => !r.deleted), `reply: ${r1} | rows: ${rows.map(r => r.content.text + (r.deleted ? "(deleted)" : "")).join(",")}`);
let r2 = await V(A, "remove milk from my shopping list"); rows = (await mem(dbA, "personal_items")).filter(r => r.content.list === "shopping");
let r3 = await V(A, "what is on my shopping list");
rec("J01b", "shopping list: remove milk, read back", /Removed milk/.test(r2) && rows.filter(r => r.deleted).length === 1 && /eggs/.test(r3) && !/milk/.test(r3), `${r2} | ${r3} | deleted rows: ${rows.filter(r => r.deleted).map(r => r.content.text)}`);
let r4 = await V(A, `make a note: ${M} buy seed on friday`); let r5 = await V(A, "show my notes");
rows = (await mem(dbA, "personal_items")).filter(r => r.content.kind === "note");
rec("J02", "note: save and recall", /Noted/.test(r4) && rows.some(r => r.content.text.includes(M) && !r.deleted) && r5.includes(M), `${r4} | ${r5} | rows: ${rows.length}`);
let r6 = await V(A, "remember that I grow maize"); let r7 = await V(A, "what do you remember about me");
rows = await mem(dbA, "task_planning");
rec("J03a", "remember that / what do you remember (profile fact, spoken path)", /remember that you grow maize/i.test(r6) && rows.some(r => r.content.kind === "crops" && r.content.value === "maize") && /maize/.test(r7), `${r6} | ${r7} | rows: ${JSON.stringify(rows.map(r => r.content))}`);
const before = (await mem(dbA, "task_planning")).length + (await mem(dbA, "personal_items")).length;
let r8 = await V(A, "remember that my PIN is 4821"); let r8b = await T(A, "remember that my M-Pesa PIN is 4821");
const after = (await mem(dbA, "task_planning")).length + (await mem(dbA, "personal_items")).length;
const everything = JSON.stringify(await sql("select content from nexus_memory_items where tenant_id=$1 and principal_id=$2", [dbA.tenant_id, dbA.id]));
rec("J03b", "privacy: a PIN is refused and not stored (voice tool and planner)", before === after && !everything.includes("4821"), `voice: ${r8} | planner: ${r8b} | rows before/after ${before}/${after}`);

// ---------- bookkeeping
let s1 = await V(A, "sold 3 sacks of maize 4500"); let m = await money(dbA);
rec("J04", "sale English 'sold 3 sacks of maize 4500'", /Recorded: sold 3 sacks of maize for KSh 4,500/.test(s1) && m.some(x => x.data.amount === 4500 && x.data.qty === 3 && x.data.unit === "sack" && x.data.type === "income"), `${s1} | row: ${JSON.stringify(m.find(x => x.data.amount === 4500)?.data)}`);
let s2 = await V(A, "nimeuza mahindi elfu nne", "sw"); m = await money(dbA);
rec("J05", "sale Kiswahili 'nimeuza mahindi elfu nne' = 4,000", /Nimerekodi: umeuza mahindi kwa KSh 4,000/.test(s2) && m.some(x => x.data.amount === 4000 && x.data.type === "income"), `${s2} | row: ${JSON.stringify(m.find(x => x.data.amount === 4000)?.data)}`);
let earn0 = await V(A, "what did I earn today");
let c1 = await V(A, "John owes me 800"); let c2 = await V(A, "who owes me"); let earn1 = await V(A, "what did I earn today");
m = await money(dbA); const debt = m.find(x => x.data.party === "John" && x.data.debt);
const incomeOf = text => Number((text.match(/KSh ([\d,]+)/) || [])[1]?.replace(/,/g, "") || 0);
rec("J06a", "credit: 'John owes me 800' + 'who owes me' (not income)", /John owes you KSh 800/.test(c1) && /John KSh 800/.test(c2) && debt?.data.amount === 800 && debt.data.unpaid === true && incomeOf(earn0) === 8500 && incomeOf(earn1) === 8500, `${c1} | ${c2} | income before/after: ${earn0} / ${earn1} | row: ${JSON.stringify(debt?.data)}`);
let p1 = await V(A, "John paid 500"); let p2 = await V(A, "who owes me"); let earn2 = await V(A, "what did I earn today"); m = await money(dbA);
rec("J06b", "credit: 'John paid 500' counts income, leaves 300 owed", /John paid KSh 500, now counted as income. John still owes KSh 300/.test(p1) && /John KSh 300/.test(p2) && /KSh 9,000/.test(earn2) && m.find(x => x.data.party === "John" && x.data.debt && x.data.unpaid)?.data.amount === 300, `${p1} | ${p2} | ${earn2}`);
let u0 = await V(A, "sold 1 bag of beans 100"); const nBefore = (await money(dbA)).length; let u1 = await V(A, "undo"); const nAfter = (await money(dbA)).length;
rec("J06c", "'undo' removes exactly the last entry", /^Removed: income of KSh 100/.test(u1) && nAfter === nBefore - 1 && !(await money(dbA)).some(x => x.data.item === "beans"), `${u0} | ${u1} | money rows ${nBefore} -> ${nAfter}`);
let g1 = await V(A, "nimeuza sukari kilo mbili 400", "sw"); m = await money(dbA);
rec("J07", "shop goods Kiswahili 'nimeuza sukari kilo mbili 400'", /kilo 2 za sukari kwa KSh 400/.test(g1) && m.some(x => x.data.item === "sugar" && x.data.qty === 2 && x.data.unit === "kg" && x.data.amount === 400), `${g1} | row: ${JSON.stringify(m.find(x => x.data.item === "sugar")?.data)}`);
let k1 = await V(A, "I have 20 bags of flour"); let k2 = await V(A, "how much flour do I have"); const stock = (await mem(dbA, "farm_records")).filter(r => !r.deleted && r.content.collection === "stock");
rec("J08", "stock 'I have 20 bags of flour'", /20 bags of flour/.test(k1) && /You have 20 bags of flour/.test(k2) && stock.some(r => r.content.data.name === "flour" && r.content.data.qty === 20), `${k1} | ${k2} | rows: ${JSON.stringify(stock.map(r => r.content.data))}`);
const profitBefore = await V(A, "monthly summary");
let l1 = await V(A, "I borrowed 5000 from Mama Njeri"); m = await money(dbA); const loan = m.find(x => x.data.loan);
rec("J09", "loan 'I borrowed 5000 from Mama Njeri' (not income)", /you borrowed KSh 5,000 from Mama Njeri. It is not income/.test(l1) && loan?.data.amount === 5000 && loan.data.type === "expense" && loan.data.category === "loan", `${l1} | row: ${JSON.stringify(loan?.data)}`);
let h1 = await V(A, "chama contribution 500"); let h2 = await V(A, "chama balance"); m = await money(dbA);
rec("J10", "chama contribution and balance", /chama contribution of KSh 500/.test(h1) && /you have put in KSh 500/.test(h2) && m.some(x => x.data.category === "chama" && x.data.amount === 500 && x.data.type === "saving"), `${h1} | ${h2}`);
let sm = await V(A, "monthly summary");
rec("J11", "monthly summary (income, costs, profit, owed, loans, chama)", /Income KSh 9,\d00 .*Profit KSh 9,\d00.*Owed to you: John KSh 300.*Loans you owe: KSh 5,000.*Chama: you have put in KSh 500/.test(sm), sm.slice(0, 380));

// ---------- health readings
let b1 = await V(A, "my blood pressure is one forty three over eighty seven"); let b2 = await V(A, "yes"); let b3 = await V(A, "show my blood pressure readings");
const legacyHas = async needle => (await sql("select position($1 in state::text) > 0 as has from agrinexus_app_state where id='default'", [needle]))[0].has;
rec("J12a", "BP spoken 'one forty three over eighty seven' -> asked -> 'yes' saved -> show", /143 over 87/.test(b1) && /Shall I save it/.test(b1) && /saved the blood-pressure reading 143 over 87/.test(b2) && /143 over 87/.test(b3), `${b1} | ${b2.slice(0, 90)} | ${b3.slice(0, 120)}`);
rec("J12a-store", "  where the older-path reading is stored", await legacyHas('"systolic": 143') || (await sql("select count(*)::int c from nexus_records where tenant_id=$1 and owner_id=$2", [dbA.tenant_id, dbA.id]))[0].c > 0, `in the legacy state document: ${await legacyHas('"systolic": 143')}; nexus_records rows for this person: ${(await sql("select count(*)::int c from nexus_records where tenant_id=$1 and owner_id=$2", [dbA.tenant_id, dbA.id]))[0].c}`);
let d1 = await V(A, "delete my last reading"); let d2 = await V(A, "yes"); let d3 = await V(A, "show my blood pressure readings");
rec("J12b", "older-path reading: 'delete my last reading' -> asked -> 'yes' deleted", /Shall I delete it/.test(d1) && /deleted your blood pressure reading 143 over 87/.test(d2) && /don't have any saved blood pressure readings/.test(d3), `${d1} | ${d2} | ${d3}`);
let q1 = await T(A, "my blood pressure is 151 over 97"); let q2 = await T(A, "yes");
const recs = await sql("select record_type, workspace_id, state, data from nexus_records where tenant_id=$1 and owner_id=$2 and deleted_at is null", [dbA.tenant_id, dbA.id]);
rec("J13a", "BP via the planner (typed route): asked -> 'yes' -> stored in nexus_records", /blood pressure 151 over 97.*Say yes/.test(q1) && recs.some(x => x.record_type === "health_observation" && x.data?.systolic === 151 && x.data?.diastolic === 97 && x.state === "active"), `${q1.slice(0, 110)} | rows: ${JSON.stringify(recs.map(x => [x.record_type, x.workspace_id, x.state, x.data]))}`);
let q3 = await V(A, "show my blood pressure readings");
rec("J13b", "planner-saved reading is shown on the voice route (both stores read together)", /151 over 97/.test(q3), q3);
let q4 = await V(A, "delete my last reading"); let q5 = await V(A, "yes"); let q6 = await T(A, "show my blood pressure readings");
const gone = await sql("select state, data from nexus_records where tenant_id=$1 and owner_id=$2 and record_type='health_observation' order by created_at desc limit 1", [dbA.tenant_id, dbA.id]);
rec("J13c", "planner-saved reading deleted from the voice route: row soft-deleted in Postgres", /Shall I delete it/.test(q4) && /deleted your blood pressure reading 151 over 97/.test(q5) && gone[0]?.state === "deleted" && /don't have any saved blood pressure/.test(q6), `${q4} | ${q5} | row now: ${JSON.stringify(gone[0])} | ${q6}`);
let q7 = await T(A, "my blood pressure is 152 over 98"); let q8 = await T(A, "yes"); let q9 = await T(A, "delete my last reading"); let q10 = await T(A, "yes");
const gone2 = await sql("select state from nexus_records where tenant_id=$1 and owner_id=$2 and record_type='health_observation' order by created_at desc limit 1", [dbA.tenant_id, dbA.id]);
rec("J13d", "planner-saved reading deleted from the typed route (needs RecordRepository.remove to work on Postgres)", /Shall I delete it/.test(q9) && /deleted your blood pressure reading 152 over 98/.test(q10) && gone2[0]?.state === "deleted", `${q9} | ${q10} | row: ${gone2[0]?.state}`);
let bs = await V(A, "my blood sugar is 8,5"); await V(A, "yes"); let bs2 = await V(A, "show my blood sugar readings");
rec("J13e", "'my blood sugar is 8,5' stored as exactly 8.5 mmol/L", /blood sugar as 8\.5/.test(bs) && /8\.5 mmol\/L/.test(bs2), `${bs.slice(0, 120)} | ${bs2.slice(0, 100)}`);
await V(A, "delete my last reading"); await V(A, "yes");

// ---------- reminders
const t0 = Date.now();
let e1 = await V(A, `remind me in 20 minutes to ${M} take my medicine`); let e2 = await V(A, "show my reminders");
let notifs = await sql("select state, scheduled_at, content from nexus_notifications where tenant_id=$1 and user_id=$2 order by created_at", [dbA.tenant_id, dbA.id]);
let mine = notifs.find(x => x.content.reminderText?.includes(M));
const minutes = mine ? (Date.parse(mine.scheduled_at) - t0) / 60000 : NaN;
rec("J14a", "reminder 'in 20 minutes' stored in the DELIVERY store with the right UTC time", /Done. I will remind you/.test(e1) && mine && ["queued", "pending"].includes(mine.state) && minutes > 19 && minutes < 21.5 && /take my medicine/.test(e2), `${e1.slice(0, 120)} | row: state=${mine?.state} scheduled_at=${mine ? new Date(mine.scheduled_at).toISOString() : null} (${minutes.toFixed(2)} min from now) | list: ${e2.slice(0, 100)}`);
let e3 = await V(A, `remind me tomorrow at 9am to ${M} call the vet`); notifs = await sql("select scheduled_at, content from nexus_notifications where tenant_id=$1 and user_id=$2 order by created_at", [dbA.tenant_id, dbA.id]);
const vet = notifs.find(x => x.content.reminderText?.includes("call the vet"));
const tomorrow = new Date(Date.now() + 86400000).toLocaleDateString("sv-SE", { timeZone: "Africa/Nairobi" });
rec("J14b", "reminder 'tomorrow at 9am' is 06:00 UTC (09:00 Africa/Nairobi)", vet && new Date(vet.scheduled_at).toISOString().slice(11, 16) === "06:00" && new Date(vet.scheduled_at).toLocaleDateString("sv-SE", { timeZone: "Africa/Nairobi" }) === tomorrow, `${e3.slice(0, 100)} | scheduled_at=${vet && new Date(vet.scheduled_at).toISOString()}`);
let e4 = await V(A, `change my reminder to ${M} call the vet to 5pm`); notifs = await sql("select state, scheduled_at, content from nexus_notifications where tenant_id=$1 and user_id=$2 order by created_at", [dbA.tenant_id, dbA.id]);
const vet2 = notifs.filter(x => x.content.reminderText?.includes("call the vet") && ["queued", "pending"].includes(x.state));
rec("J14c", "change a reminder ('change my reminder ... to 5pm')", /5:00 pm|5 pm|changed|moved/i.test(e4) && vet2.length >= 1 && new Date(vet2[vet2.length - 1].scheduled_at).toISOString().slice(11, 16) === "14:00", `${e4.slice(0, 160)} | pending rows: ${vet2.map(x => new Date(x.scheduled_at).toISOString())}`);
let e5 = await V(A, `cancel my reminder to ${M} call the vet`); let e5b = await V(A, `cancel my reminder to ${M} take my medicine`); notifs = await sql("select state, content from nexus_notifications where tenant_id=$1 and user_id=$2", [dbA.tenant_id, dbA.id]);
rec("J14d", "cancel reminders (rows marked cancelled, none pending)", /Canceled/.test(e5) && /Canceled/.test(e5b) && notifs.filter(x => x.content.reminderText?.includes(M)).every(x => x.state === "cancelled"), `${e5.slice(0, 80)} | ${e5b.slice(0, 80)} | states: ${notifs.map(x => x.state)}`);
let rr = await V(A, `remind me every day at 8am and 8pm to ${M} drink water`); let rrl = await V(A, "show my repeating reminders");
let sched = await sql("select state, timezone, payload from nexus_schedules where tenant_id=$1 and owner_id=$2 and job_type='reminder.repeat' order by created_at", [dbA.tenant_id, dbA.id]);
rec("J15a", "'every day at 8am and 8pm' -> two repeat rules in nexus_schedules", /every day at 8:00 am and 8:00 pm/.test(rr) && sched.filter(x => x.payload.task?.includes("drink water") && x.state === "active").length === 2 && sched.every(x => x.timezone === "Africa/Nairobi") && /8:00 am/.test(rrl) && /8:00 pm/.test(rrl), `${rr.slice(0, 120)} | rows: ${JSON.stringify(sched.map(x => [x.state, x.payload.timeOfDay, x.payload.days]))}`);
let rs1 = await V(A, "stop repeating reminder 1"); let rs2 = await V(A, "stop repeating reminder 1"); sched = await sql("select state, payload from nexus_schedules where tenant_id=$1 and owner_id=$2 and job_type='reminder.repeat'", [dbA.tenant_id, dbA.id]);
rec("J15b", "stop both repeat rules", sched.filter(x => x.state === "active").length === 0, `${rs1.slice(0, 80)} | ${rs2.slice(0, 80)} | states: ${sched.map(x => x.state)}`);
// the same through the planner (typed) route with the stand-in model's plan: reminders.schedule executor
let tp = await T(A, `remind me in 30 minutes to ${M} check the tank`); notifs = await sql("select state, scheduled_at, content from nexus_notifications where tenant_id=$1 and user_id=$2", [dbA.tenant_id, dbA.id]);
const tank = notifs.find(x => x.content.reminderText?.includes("check the tank"));
rec("J16", "reminder via the planner (typed route, reminders.schedule tool): stored in the delivery store", tank && ["queued", "pending"].includes(tank.state) && Math.abs((Date.parse(tank.scheduled_at) - Date.now()) / 60000 - 30) < 2, `${tp.slice(0, 100)} | row: ${tank && tank.state} ${tank && new Date(tank.scheduled_at).toISOString()}`);

// ---------- contacts
let ct1 = await V(A, "save John 0712345678"); let ct = await mem(dbA, "contacts");
rec("J17a", "contacts: 'save John 0712345678' -> +254712345678 in the planner's contact store", /Saved John: \+254712345678/.test(ct1) && ct.some(x => x.content.name === "John" && x.content.phone === "+254712345678"), `${ct1.slice(0, 100)} | rows: ${JSON.stringify(ct.map(x => x.content))}`);
const logBefore = fs.readFileSync(path.join(OUT, "stub.log"), "utf8").split("\n").filter(l => l.includes('"network"')).length;
let ct2 = await V(A, "text John I am late"); let ct3 = await V(A, "no");
let ct4 = await V(A, "call +254712345678"); let ct5 = await V(A, "no");
let ct6 = await T(A, "text John I am late"); let ct7 = await T(A, "no");
const logAfter = fs.readFileSync(path.join(OUT, "stub.log"), "utf8").split("\n").filter(l => l.includes('"network"')).length;
rec("J17b", "'text John I am late' / 'call +254712345678' are only STAGED (asks yes), 'no' cancels, nothing sent", /Send "I am late" to John \(\+254 712 345 678\) as a text\? Say yes/.test(ct2) && /Canceled/.test(ct3) && /Do you want me to call \+254 712 345 678 now/.test(ct4) && /Canceled/.test(ct5) && /I can send this text message to John \(\+254712345678\)/.test(ct6) && /did not proceed/.test(ct7) && logAfter === logBefore, `${ct2.slice(0, 90)} | ${ct3.slice(0, 40)} | ${ct4.slice(0, 90)} | ${ct5.slice(0, 40)} | planner: ${ct6.slice(0, 90)} | ${ct7} | outbound network calls during this step: ${logAfter - logBefore}`);

// ---------- two-account isolation (B against A's data)
const iso = [];
const check = async (label, fn) => { const out = await fn(); iso.push([label, out]); return out; };
const aSecrets = [M, "4,500", "John", "Mama Njeri", "eggs", "KSh 9", "KSh 8"];
const leak = text => aSecrets.some(s => text.includes(s));
const outs = {};
for (const [label, phrase] of [["list", "what is on my shopping list"], ["notes", "show my notes"], ["memory", "what do you remember about me"], ["reminders", "show my reminders"], ["repeat", "show my repeating reminders"], ["owes", "who owes me"], ["earn", "what did I earn today"], ["stock", "how much flour do I have"], ["summary", "monthly summary"], ["contacts", "who are my contacts"], ["bp", "show my blood pressure readings"]]) {
  outs[label] = [await V(B, phrase), await T(B, phrase)];
}
const bLeaks = Object.entries(outs).filter(([, v]) => v.some(leak)).map(([k]) => k);
if (bLeaks.length) console.log(JSON.stringify(Object.fromEntries(bLeaks.map(k => [k, outs[k]]))));
rec("J18a", "isolation: account B reads none of A's list/notes/memory/reminders/repeat rules/money/stock/summary/contacts/readings (voice tool AND planner routes)", bLeaks.length === 0, bLeaks.length ? `LEAKED via: ${bLeaks.join(",")} :: ${JSON.stringify(outs)}`.slice(0, 500) : `B saw: ${Object.entries(outs).map(([k, v]) => `${k}=[${v[0].slice(0, 40)} | ${v[1].slice(0, 40)}]`).join("; ")}`);
let bt = await V(B, "text John I am late");
rec("J18b", "isolation: B cannot text 'John' (A's contact)", /don't have a number for John/.test(bt), bt.slice(0, 140));
// B tries to cancel A's reminder; make A a fresh one first
await V(A, `remind me tomorrow at 7am to ${M} secret errand`);
let bc = await V(B, `cancel my reminder to ${M} secret errand`); let bcT = await T(B, `cancel my reminder to ${M} secret errand`); const bcT2 = await T(B, "yes");
const still = await sql("select state from nexus_notifications where tenant_id=$1 and user_id=$2 and content->>'reminderText' like $3", [dbA.tenant_id, dbA.id, `%${M} secret errand%`]);
rec("J18c", "isolation: B cannot cancel A's reminder (voice tool and planner), A's row stays pending", still.length === 1 && ["queued", "pending"].includes(still[0].state) && !/Canceled/i.test(bc), `voice: ${bc.slice(0, 100)} | planner: ${bcT.slice(0, 80)} then yes: ${bcT2.slice(0, 80)} | A's row: ${still[0]?.state}`);
let bstop = await V(B, "stop repeating reminder 1");
const moneyBefore = (await money(dbA)).length; const bUndo = await V(B, "undo"); const bUndoT = await T(B, "undo"); const bDel = await V(B, "delete my last reading"); const bDel2 = await V(B, "yes");
sched = await sql("select state from nexus_schedules where tenant_id=$1 and owner_id=$2 and job_type='reminder.repeat'", [dbA.tenant_id, dbA.id]);
rec("J18d", "isolation: B's \"stop repeating reminder 1\" / \"undo\" / \"delete my last reading\" change none of A's rows", (await money(dbA)).length === moneyBefore && !/Removed/.test(bUndo + bUndoT), `stop: ${bstop.slice(0, 60)} | undo: ${bUndo.slice(0, 60)} / ${bUndoT.slice(0, 60)} | delete: ${bDel.slice(0, 60)} / ${bDel2.slice(0, 50)} | A money rows ${moneyBefore} -> ${(await money(dbA)).length}`);
const stateB = await call("GET", "/api/state", null, B.cookie);
rec("J18e", "isolation: /api/state for B holds none of A's words", ["Mama Njeri", "buy seed", "take my medicine", "call the vet", "drink water", "check the tank", "143 over 87"].every(w => !stateB.text.includes(w)), `A-only words found in B's state: ${JSON.stringify(["Mama Njeri", "buy seed", "take my medicine", "call the vet", "drink water", "check the tank", "143 over 87"].filter(w => stateB.text.includes(w)))}`);
const rowsB = await sql("select count(*)::int c from nexus_memory_items where tenant_id=$1 and principal_id=$2", [dbB.tenant_id, dbB.id]);
rec("J18f", "isolation: Postgres rows written for B are B's own (A's rows untouched)", (await money(dbA)).length > 0, `B's memory rows: ${rowsB[0].c}; A's money rows still: ${(await money(dbA)).length}`);

fs.writeFileSync(path.join(OUT, "verify-result.json"), JSON.stringify({ at: new Date().toISOString(), users: { a: A.email, b: B.email }, results }, null, 1));
console.log(`\n${results.filter(r => r.status === "PASS").length} PASS, ${results.filter(r => r.status === "FAIL").length} FAIL of ${results.length}`);
