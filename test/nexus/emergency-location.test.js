"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { CircleRepository } = require("../../nexus/companion/circle-repository.js");
const { createCompanion } = require("../../nexus/companion/index.js");
const { readCircleRequest } = require("../../nexus/companion/circle.js");
const { readSafe, safeTurn } = require("../../nexus/companion/safety.js");
const { MIN_GAP_MS, MAX_UPDATES, mapLink } = require("../../nexus/companion/emergency-location.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const emergency = require("../../public/kyro-emergency.js");
const { encodePlusCode } = require("../../public/kyro-navigation.js");

const ROOT = path.resolve(__dirname, "..", "..");
const USERS = [
  { id: "u-baba", tenant_id: "t1", email: "baba@example.com", display_name: "Baba Kamau", status: "active" },
  { id: "u-amina", tenant_id: "t1", email: "amina@example.com", display_name: "Amina Wanjiru", status: "active" },
  { id: "u-joseph", tenant_id: "t1", email: "joseph@example.com", display_name: "Joseph Otieno", status: "active" },
  { id: "u-late", tenant_id: "t1", email: "late@example.com", display_name: "Late Joiner", status: "active" }
];

// An in-memory database that understands exactly the statements the circle repository issues.
function circleDb() {
  const rows = []; const db = {
    rows, async transaction(fn) { return fn(db); },
    async query(sql, params) {
      if (/from users where tenant_id=\$1 and lower\(email\)/.test(sql)) return { rows: USERS.filter(user => user.tenant_id === params[0] && user.email === String(params[1]).toLowerCase()).map(user => ({ id: user.id, display_name: user.display_name })) };
      if (/from users where tenant_id=\$1 and id=\$2/.test(sql)) return { rows: USERS.filter(user => user.tenant_id === params[0] && user.id === params[1]).map(user => ({ display_name: user.display_name })) };
      if (/select memory_id,principal_id,content from nexus_memory_items/.test(sql)) return { rows: rows.filter(row => row.tenant_id === params[0] && row.purpose === "circle" && !row.deleted && (params[1] === null || row.principal_id === params[1]) && (params[2] === null || row.content.linkId === params[2])).map(row => ({ memory_id: row.memory_id, principal_id: row.principal_id, content: row.content })) };
      if (/insert into nexus_memory_items/.test(sql) && /'circle'/.test(sql)) { rows.push({ memory_id: params[0], tenant_id: params[1], principal_id: params[2], purpose: "circle", content: params[3] }); return { rows: [] }; }
      if (/update nexus_memory_items set content=\$3/.test(sql) && /purpose='circle'/.test(sql)) { const row = rows.find(item => item.tenant_id === params[0] && item.memory_id === params[1]); if (row) row.content = params[2]; return { rows: [] }; }
      throw new Error(`unexpected SQL: ${sql.slice(0, 80)}`);
    }
  };
  return db;
}

// Baba has two people in his circle: Amina and Joseph. `optIn` says who he has chosen to receive his location.
async function world({ optIn = [] } = {}) {
  const db = circleDb(); const circle = new CircleRepository(db); const pushes = []; let clock = new Date("2026-09-20T05:00:00Z");
  const notifications = { async enqueue(row) { pushes.push(row); }, async existsByKey() { return false; } };
  const companion = createCompanion({ circle, checkinSettings: { get: async () => null }, checkinState: { get: async () => null, hasActivitySince: async () => false }, memory: null, notifications, devices: { async listPushable() { return [{ id: 1 }]; } }, now: () => clock });
  const join = async (memberId, relationship) => { const link = await circle.invite({ tenantId: "t1", person: { id: "u-baba", name: "Baba Kamau" }, member: { id: memberId, name: USERS.find(user => user.id === memberId).display_name }, relationship }); await circle.respond({ tenantId: "t1", memberId, linkId: link.link.linkId, accept: true }); };
  await join("u-amina", "daughter"); await join("u-joseph", "son");
  const w = { db, circle, pushes, companion, join, tick: ms => { clock = new Date(clock.getTime() + ms); }, get now() { return clock; } };
  w.say = async (text, userId = "u-baba") => companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: {} });
  w.handle = async (text, userId = "u-baba") => companion.handle({ command: { text, tenantId: "t1", actorId: userId }, context: {} });
  w.locate = (alertId, extra = {}) => companion.shareEmergencyLocation({ tenantId: "t1", userId: "u-baba", alertId, position: { lat: -1.2921, lng: 36.8219, accuracy: 12, ...extra } });
  for (const name of optIn) await w.say(`share my location in emergencies with ${name}`);
  return w;
}
const where = w => w.pushes.filter(push => /location/i.test(push.content.title));

// ---------- consent: chosen by the person, per member or for everyone ----------
test("a person chooses who may receive their location in an emergency, one member or everyone, and can take it back", async () => {
  const w = await world();
  assert.match(await w.say("share my location in emergencies with Amina"), /^Done\. If you ask me for urgent help, I'll also send your location to Amina Wanjiru.*Only then, never otherwise\. Say "stop sharing my location in emergencies with Amina" to undo\.$/s);
  assert.match(await w.say("Who is in my circle"), /Amina Wanjiru \(daughter\) — may be told your location if you ask for urgent help; Joseph Otieno \(son\) — told nothing except an emergency/);
  assert.match(await w.say("share my location in emergencies"), /send your location to Amina Wanjiru, Joseph Otieno, as soon as your phone tells me/);
  assert.match(await w.say("stop sharing my location in emergencies with Joseph"), /Joseph Otieno will not be sent your location in an emergency\. Alerts still reach everyone/);
  assert.match(await w.say("Who is in my circle"), /Joseph Otieno \(son\) — told nothing except an emergency/);
  assert.match(await w.say("stop sharing my location in emergencies"), /Amina Wanjiru, Joseph Otieno will not be sent your location/);
  assert.match(await w.say("share my location in emergencies with Nobody"), /I don't see Nobody in your circle/);
  assert.match(await w.say("do I share my location in emergencies"), /Your circle: /);
  for (const text of ["share my location", "share my location with everyone", "where am I", "send location"]) assert.equal(readCircleRequest(text), null, text);
});

test("the circle listing tells a person the option exists, until they have chosen someone", async () => {
  const w = await world(); const before = await w.say("Who is in my circle");
  assert.match(before, /told nothing except an emergency\. If you want them to be able to find you in an emergency, say "share my location in emergencies"\.$/);
  await w.say("share my location in emergencies with Amina"); assert.doesNotMatch(await w.say("Who is in my circle"), /If you want them to be able to find you/);
});

test("nobody in the circle yet means nothing to share, and an invitation not yet accepted does not count", async () => {
  const db = circleDb(); const circle = new CircleRepository(db);
  const companion = createCompanion({ circle, checkinSettings: {}, checkinState: {}, notifications: { async enqueue() {} }, now: () => new Date("2026-09-20T05:00:00Z") });
  const say = text => companion.turn({ command: { text, tenantId: "t1", actorId: "u-baba" }, context: {} });
  assert.match(await say("share my location in emergencies"), /Nobody in your circle has said yes/);
  await circle.invite({ tenantId: "t1", person: { id: "u-baba", name: "Baba Kamau" }, member: { id: "u-amina", name: "Amina Wanjiru" } });
  assert.match(await say("share my location in emergencies"), /Nobody in your circle has said yes/); assert.match(await say("share my location in emergencies with Amina"), /hasn't said yes to your invitation yet/);
});

// ---------- the alert itself never waits for a location, and says so honestly ----------
test("an alert goes to everyone at once; the reply promises a location only to those who were chosen", async () => {
  const none = await world(); const plain = await none.handle("I need help now");
  assert.equal(plain.response, "I've alerted Amina Wanjiru, Joseph Otieno. If you might be in danger, please call your local emergency number now. I'm here with you.", "unchanged when nobody was chosen");
  assert.equal(plain.emergency.shareLocation, false); assert.match(plain.emergency.alertId, /^alt_/); assert.deepEqual(plain.emergency.locationTo, []);
  assert.equal(none.pushes.filter(push => push.content.title === "Emergency alert").length, 2); assert.equal(where(none).length, 0);

  const chosen = await world({ optIn: ["Amina"] }); const before = chosen.pushes.length; const result = await chosen.handle("This is an emergency");
  assert.match(result.response, /^I've alerted Amina Wanjiru, Joseph Otieno\. I'll send your location to Amina Wanjiru as soon as your phone tells me where you are\. If you might be in danger/);
  assert.equal(result.emergency.shareLocation, true); assert.deepEqual(result.emergency.locationTo, ["Amina Wanjiru"]);
  assert.equal(chosen.pushes.length - before, 2, "both were alerted immediately, with no location yet"); assert.equal(where(chosen).length, 0);
  assert.equal((await chosen.say("I need help now")).startsWith("I've alerted"), true);
  assert.equal((await chosen.handle("I need help now")).emergency.alertId, result.emergency.alertId, "the same alert within five minutes is one alert");
  assert.equal(await chosen.say("I had lunch"), null); assert.equal((await chosen.handle("hello")), null, "ordinary talk has no alert flag");
});

// ---------- the location follows, and goes only where it was chosen ----------
test("the location goes only to members who were alerted, are still in the circle, and were chosen; and it opens a map", async () => {
  const w = await world({ optIn: ["Amina"] }); const { emergency: alert } = await w.handle("I need help now"); const before = w.pushes.length;
  const done = await w.locate(alert.alertId, { accuracy: 12.4 });
  assert.equal(done.status, 200); assert.deepEqual(done.body, { shared: ["Amina Wanjiru"], updates: 1, done: false });
  const sent = where(w); assert.equal(sent.length, 1); assert.equal(sent[0].userId, "u-amina"); assert.equal(sent[0].content.title, "Emergency: Baba Kamau's location"); assert.equal(sent[0].channel, "push");
  const code = encodePlusCode(-1.2921, 36.8219);
  assert.equal(sent[0].content.body, `Baba Kamau asked Kyro for urgent help, and their phone says they are at ${code} (-1.29210, 36.82190), within about 12 meters. Tap to open the map. If you can't reach them, call for help.`);
  assert.equal(sent[0].content.url, "https://www.google.com/maps?q=-1.292100,36.821900"); assert.equal(sent[0].content.url, mapLink(-1.2921, 36.8219)); assert.match(sent[0].idempotencyKey, /^emergency-location:alt_[0-9a-f-]+:u-amina:1$/);
  assert.equal(w.pushes.length - before, 1, "Joseph, who was not chosen, received nothing");
  assert.doesNotMatch(JSON.stringify(w.db.rows.filter(row => row.content.kind === "alert")), /-1\.29|36\.82/, "the position is not kept on the alert");
  assert.equal(w.db.rows.find(row => row.content.kind === "alert").content.updates, 1);
});

test("updates are spaced out, numbered, worded as updates, and stop after thirty", async () => {
  const w = await world({ optIn: ["Amina", "Joseph"] }); const { emergency: alert } = await w.handle("I need help now");
  assert.deepEqual((await w.locate(alert.alertId)).body.shared, ["Amina Wanjiru", "Joseph Otieno"]);
  w.tick(10000); assert.deepEqual(await w.locate(alert.alertId), { status: 200, body: { shared: [], updates: 1, throttled: true, done: false } }); assert.equal(where(w).length, 2);
  w.tick(MIN_GAP_MS); const second = await w.locate(alert.alertId, { lat: -1.3, lng: 36.85, ageSeconds: 150 });
  assert.equal(second.body.updates, 2); assert.match(where(w).at(-1).content.body, /^Baba Kamau's location has been updated: they are now at .*\(-1\.30000, 36\.85000\), within about 12 meters, from about 3 minutes ago\./);
  assert.match(where(w).at(-1).idempotencyKey, /:2$/);
  const row = w.db.rows.find(item => item.content.kind === "alert"); row.content.updates = MAX_UPDATES; w.tick(MIN_GAP_MS);
  assert.deepEqual((await w.locate(alert.alertId)).body, { shared: [], updates: MAX_UPDATES, done: true }); assert.equal(where(w).length, 4, "two members, twice; nothing after thirty");
});

test("bad or out-of-place locations are refused plainly and never sent", async () => {
  const w = await world({ optIn: ["Amina"] }); const { emergency: alert } = await w.handle("I need help now");
  const refused = async (alertId, position, code, status) => { const before = where(w).length; await assert.rejects(w.companion.shareEmergencyLocation({ tenantId: "t1", userId: "u-baba", alertId, position }), error => error.code === code && error.status === status); assert.equal(where(w).length, before); };
  await refused(alert.alertId, { lat: 95, lng: 0 }, "invalid_position", 400); await refused(alert.alertId, { lat: "x", lng: 1 }, "invalid_position", 400); await refused(alert.alertId, undefined, "invalid_position", 400);
  await refused(alert.alertId, { lat: 1, lng: 1, ageSeconds: 3600 }, "stale_position", 400); await refused("alt_wrong", { lat: 1, lng: 1 }, "no_active_alert", 409); await refused(undefined, { lat: 1, lng: 1 }, "no_active_alert", 409);
  const stranger = world(); await assert.rejects((await stranger).companion.shareEmergencyLocation({ tenantId: "t1", userId: "u-baba", alertId: "alt_x", position: { lat: 1, lng: 1 } }), { code: "no_active_alert" });
  w.tick(61 * 60 * 1000); await refused(alert.alertId, { lat: 1, lng: 1 }, "no_active_alert", 409);
});

test("a member who leaves, or is not chosen any more, stops receiving it at once; someone added later never does", async () => {
  const w = await world({ optIn: ["Amina", "Joseph"] }); const { emergency: alert } = await w.handle("I need help now");
  assert.equal((await w.locate(alert.alertId)).body.shared.length, 2); w.tick(MIN_GAP_MS);
  await w.say("stop sharing my location in emergencies with Joseph"); assert.deepEqual((await w.locate(alert.alertId)).body.shared, ["Amina Wanjiru"]); w.tick(MIN_GAP_MS);
  const link = (await w.circle.listFor({ tenantId: "t1", userId: "u-baba" })).find(item => item.otherId === "u-amina"); await w.circle.end({ tenantId: "t1", userId: "u-amina", linkId: link.linkId });
  assert.deepEqual((await w.locate(alert.alertId)).body, { shared: [], updates: 2, done: true, reason: "nobody_chose_to_receive_it" }); w.tick(MIN_GAP_MS);
  await w.join("u-late", "friend"); await w.say("share my location in emergencies"); assert.deepEqual((await w.locate(alert.alertId)).body.shared, ["Joseph Otieno"], "choosing everyone again includes Joseph, but not the person who joined after the alert");
});

// ---------- "I'm safe" ----------
test("saying they are safe closes the alert, tells everyone who was alerted, and stops the location; an ordinary 'fine' does nothing", async () => {
  const w = await world({ optIn: ["Amina"] }); const { emergency: alert } = await w.handle("I need help now");
  for (const text of ["ok", "okay", "fine", "I'm fine", "yes", "thanks", "I am okay"]) assert.equal(await w.say(text), null, text);
  assert.equal(w.db.rows.find(row => row.content.kind === "alert").content.ended, false, "an ordinary reply never closes the alert"); await w.locate(alert.alertId); w.tick(MIN_GAP_MS);
  const done = await w.handle("I'm safe now"); assert.equal(done.response, "I'm glad you're safe. I've told Amina Wanjiru, Joseph Otieno that you're okay, and I've stopped sharing your location."); assert.deepEqual(done.emergency, { alertId: alert.alertId, ended: true });
  const clear = w.pushes.filter(push => push.content.title === "Emergency over"); assert.deepEqual(clear.map(push => push.userId).sort(), ["u-amina", "u-joseph"]); assert.match(clear[0].content.body, /^Baba Kamau says they are safe now\. No more location will be sent\.$/);
  await assert.rejects(w.locate(alert.alertId), error => error.code === "alert_ended" && error.ended === true && error.status === 409); assert.equal(where(w).length, 1);
  assert.equal(await w.say("I'm safe now"), null, "nothing left to close"); assert.equal(await w.say("false alarm"), null);
  const fresh = await world(); assert.equal(await fresh.say("I'm safe"), null, "no alert, so it is an ordinary sentence");
  const again = await world(); await again.say("I need help now"); assert.match(await again.say("false alarm"), /^I'm glad you're safe/); const second = await again.handle("This is an emergency");
  assert.notEqual(second.emergency.alertId, undefined, "a new emergency after closing starts a new alert"); assert.equal(again.db.rows.filter(row => row.content.kind === "alert").length, 2);
});

test("the words that close an alert are strict: only clear statements, never a bare ok", () => {
  for (const text of ["I'm safe", "I am safe now", "safe", "false alarm", "It's a false alarm", "cancel the alert", "call off the emergency alert", "I'm fine now", "everything is ok now"]) assert.equal(readSafe(text), true, text);
  for (const text of ["ok", "okay", "fine", "I'm fine", "I am okay", "yes", "no", "thanks", "stop", "cancel", "everything is fine", "I'm not safe", "is it safe?", "safe travels", "x".repeat(80), ""]) assert.equal(readSafe(text), false, text);
});

test("a companion or circle without alert storage still alerts, and an alert that cannot be remembered still goes", async () => {
  const w = await world({ optIn: ["Amina"] });
  const failing = new Proxy(w.circle, { get(target, prop) { if (prop === "recordAlert") return async () => { throw new Error("db down"); }; const value = target[prop]; return typeof value === "function" ? value.bind(target) : value; } });
  const companion = createCompanion({ circle: failing, checkinSettings: {}, checkinState: {}, notifications: { async enqueue(row) { w.pushes.push(row); } }, now: () => w.now });
  const result = await companion.handle({ command: { text: "I need help now", tenantId: "t1", actorId: "u-baba" }, context: {} });
  assert.match(result.response, /^I've alerted Amina Wanjiru, Joseph Otieno\. If you might be in danger/); assert.equal(result.emergency, undefined, "no location promised when the alert could not be remembered");
  assert.equal(await safeTurn({ text: "I'm safe", circle: { activeMembers: async () => [] }, tenantId: "t1", userId: "u" }), null);
});

// ---------- the planner carries the flag to the phone ----------
test("the planner puts the alert flag on the plan, and a companion that only has turn() still works", async () => {
  const w = await world({ optIn: ["Amina"] });
  const planner = companion => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("no model"); } }, tools: { list: async () => [] }, applications: { list: () => [] }, memory: {}, companion });
  const plan = await planner(w.companion).plan({ command: { text: "I need help now", tenantId: "t1", actorId: "u-baba" }, context: {} });
  assert.equal(plan.application, "conversation"); assert.match(plan.response, /^I've alerted/); assert.equal(plan.emergency.shareLocation, true); assert.match(plan.emergency.alertId, /^alt_/); assert.equal(Object.isFrozen(plan.emergency), true);
  const ordinary = await planner(w.companion).plan({ command: { text: "who is in my circle", tenantId: "t1", actorId: "u-baba" }, context: {} }); assert.equal(ordinary.emergency, undefined);
  const old = await planner({ turn: async () => "Only words." }).plan({ command: { text: "anything", tenantId: "t1", actorId: "u1" }, context: {} }); assert.equal(old.response, "Only words."); assert.equal(old.emergency, undefined);
});

// ---------- the phone ----------
function phone({ positions = [{ lat: -1.2921, lng: 36.8219, accuracy: 15, timestamp: 1000000 }], failFirst = 0 } = {}) {
  const calls = []; let index = 0; let failed = 0;
  return { calls, geolocation: { getCurrentPosition(ok, err, options) { calls.push(options); if (failed < failFirst) { failed += 1; return err({ code: 3 }); } const p = positions[Math.min(index, positions.length - 1)]; index += 1; ok({ coords: { latitude: p.lat, longitude: p.lng, accuracy: p.accuracy }, timestamp: p.timestamp }); } } };
}
function sharer({ handler, ...options } = {}) {
  const p = phone(options); const posted = []; const spoken = []; const timers = []; let clock = 1000000;
  const api = async body => { posted.push(body); if (handler) return handler(body, posted.length); return { shared: ["Amina Wanjiru"], updates: posted.length, done: false }; };
  const s = emergency.createEmergencySharer({ geolocation: p.geolocation, api, say: (text, opts) => spoken.push({ text, ...opts }), setTimer: (fn, ms) => { const timer = { fn, ms, cleared: false }; timers.push(timer); return timer; }, clearTimer: timer => { if (timer) timer.cleared = true; }, now: () => clock });
  return { s, p, posted, spoken, timers, advance: ms => { clock += ms; }, fire: async () => { const timer = timers.filter(item => !item.cleared).at(-1); timer.cleared = true; timer.fn(); await new Promise(resolve => setImmediate(resolve)); await new Promise(resolve => setImmediate(resolve)); }, settle: async () => { await new Promise(resolve => setImmediate(resolve)); await new Promise(resolve => setImmediate(resolve)); } };
}

test("the phone reads its location only when the server says someone chose to receive it, and never for anything else", async () => {
  const t = sharer();
  for (const flag of [undefined, null, {}, { alertId: "alt_1", shareLocation: false }, { shareLocation: true }, { ended: false }]) { t.s.handle(flag); await t.settle(); }
  assert.equal(t.p.calls.length, 0, "the location was never read"); assert.equal(t.posted.length, 0); assert.equal(t.s.running, false);
  t.s.handle({ alertId: "alt_1", shareLocation: true, alerted: ["Amina Wanjiru"] }); await t.settle();
  assert.equal(t.p.calls.length, 1); assert.deepEqual(t.p.calls[0], { enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 });
  assert.deepEqual(t.posted, [{ alertId: "alt_1", position: { lat: -1.2921, lng: 36.8219, accuracy: 15, ageSeconds: 0 } }]);
  assert.deepEqual(t.spoken, [{ text: "I've sent your location to Amina Wanjiru, and I'll keep it updated. Say \"I'm safe\" when you are.", interrupt: false }]); assert.equal(t.s.running, true);
});

test("the first fix is as fast as possible: a rough one is used if the precise one is slow", async () => {
  const t = sharer({ failFirst: 1 }); t.s.handle({ alertId: "alt_1", shareLocation: true }); await t.settle();
  assert.equal(t.p.calls.length, 2); assert.deepEqual(t.p.calls[1], { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 }); assert.equal(t.posted.length, 1);
  const stale = sharer({ positions: [{ lat: 1, lng: 2, accuracy: 30, timestamp: 1000000 - 90000 }] }); stale.s.handle({ alertId: "alt_2", shareLocation: true }); await stale.settle(); assert.equal(stale.posted[0].position.ageSeconds, 90, "the age of the fix is reported honestly");
});

test("updates every two minutes for half an hour, then stops; an ended or closed emergency stops it at once", async () => {
  const t = sharer(); t.s.handle({ alertId: "alt_1", shareLocation: true }); await t.settle(); assert.equal(t.timers.at(-1).ms, emergency.EVERY_MS);
  for (let i = 0; i < 3; i += 1) { t.advance(emergency.EVERY_MS); await t.fire(); } assert.equal(t.posted.length, 4); assert.equal(t.spoken.length, 1, "told once, not every update");
  assert.deepEqual(t.p.calls.at(-1), { enableHighAccuracy: true, timeout: 10000, maximumAge: 30000 });
  t.advance(emergency.MAX_MS); await t.fire(); assert.equal(t.posted.length, 4, "nothing after thirty minutes"); assert.equal(t.s.running, false);
  const safe = sharer(); safe.s.handle({ alertId: "alt_1", shareLocation: true }); await safe.settle(); safe.s.handle({ alertId: "alt_1", ended: true }); assert.equal(safe.s.running, false); assert.equal(safe.timers.at(-1).cleared, true);
  const closed = sharer({ handler: async () => { throw new Error("That emergency has been closed."); } }); closed.s.handle({ alertId: "alt_1", shareLocation: true }); await closed.settle(); assert.equal(closed.s.running, false); assert.equal(closed.spoken.length, 0);
  const done = sharer({ handler: async () => ({ shared: ["A"], updates: 30, done: true }) }); done.s.handle({ alertId: "alt_1", shareLocation: true }); await done.settle(); assert.equal(done.s.running, false);
});

test("trouble is said once, retried, and then said plainly; the circle was alerted either way", async () => {
  const noFix = sharer({ failFirst: 100 }); noFix.s.handle({ alertId: "alt_1", shareLocation: true }); await noFix.settle();
  assert.equal(noFix.spoken.length, 1); assert.match(noFix.spoken[0].text, /couldn't get your location yet\. Your circle has still been alerted\. I'll keep trying\./); assert.equal(noFix.timers.at(-1).ms, 20000);
  for (let i = 0; i < 3; i += 1) await noFix.fire(); assert.equal(noFix.s.running, false); assert.match(noFix.spoken.at(-1).text, /Your circle was alerted without it, so please tell them where you are\./); assert.equal(noFix.posted.length, 0);
  const server = sharer({ handler: async () => { throw new Error("Request failed"); } }); server.s.handle({ alertId: "alt_1", shareLocation: true }); await server.settle(); for (let i = 0; i < 3; i += 1) await server.fire();
  assert.equal(server.s.running, false); assert.equal(server.posted.length, 4); assert.equal(sharer({ handler: async () => ({ shared: [], reason: "nobody_chose_to_receive_it", done: true }) }).s.running, false);
  const none = emergency.createEmergencySharer({ geolocation: null, api: async () => ({}), say: () => {} }); none.handle({ alertId: "alt_1", shareLocation: true }); assert.equal(none.running, true);
});

test("the same alert is not restarted, a new alert replaces the old one, and the throttled reply is not an error", async () => {
  const t = sharer(); t.s.handle({ alertId: "alt_1", shareLocation: true }); await t.settle(); t.s.handle({ alertId: "alt_1", shareLocation: true }); await t.settle(); assert.equal(t.posted.length, 1);
  t.s.handle({ alertId: "alt_2", shareLocation: true }); await t.settle(); assert.equal(t.posted.length, 2); assert.equal(t.posted[1].alertId, "alt_2");
  const throttled = sharer({ handler: async () => ({ shared: [], updates: 1, throttled: true, done: false }) }); throttled.s.handle({ alertId: "alt_1", shareLocation: true }); await throttled.settle(); assert.equal(throttled.spoken.length, 0); assert.equal(throttled.s.running, true);
  t.s.stop(); assert.equal(t.s.running, false);
});

// ---------- wiring ----------
test("the endpoint sits behind sign-in, the page loads and caches the sharer, and the flag is read after the reply is validated", () => {
  const adapter = fs.readFileSync(path.join(ROOT, "nexus", "compat", "server-runtime-adapter.js"), "utf8");
  assert.match(adapter, /"\/api\/nexus\/runtime\/companion\/emergency-location" && req\.method === "POST"/); assert.match(adapter, /active\.companion\.shareEmergencyLocation\(\{ tenantId: context\.tenantId, userId: context\.userId, alertId: body\.alertId, position: body\.position \}\)/);
  assert.ok(adapter.indexOf("Authentication is required for authoritative Nexus tasks") < adapter.indexOf("companion/emergency-location\" && req.method"), "sign-in first");
  const html = fs.readFileSync(path.join(ROOT, "public", "index.html"), "utf8"); assert.match(html, /<script src="\/kyro-emergency\.js\?v=kyro-emergency-1"><\/script>/); assert.ok(html.indexOf("kyro-emergency.js") < html.indexOf('src="/app.js'));
  assert.match(fs.readFileSync(path.join(ROOT, "public", "sw.js"), "utf8"), /kyro-emergency\.js/);
  const app = fs.readFileSync(path.join(ROOT, "public", "app.js"), "utf8"); const routed = app.slice(app.indexOf("async function handleNexusUnifiedBrainRuntimeCommand("), app.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand("));
  assert.ok(routed.indexOf("nexus.behavior-turn.v1") < routed.indexOf("handleKyroEmergencyResult(result.plan.emergency)"), "after the reply was validated"); assert.ok(routed.indexOf("handleKyroEmergencyResult(result.plan.emergency)") < routed.indexOf("processNexusAuthoritativeBehaviorResult(result, text, options)"));
  assert.match(app, /\/api\/nexus\/runtime\/companion\/emergency-location/); assert.equal(typeof emergency.forBrowser({ api: async () => ({}) }).handle, "function");
  const service = fs.readFileSync(path.join(ROOT, "nexus", "companion", "emergency-location.js"), "utf8"); assert.doesNotMatch(service, /console\.|logger|writeFile|insert into|localStorage/, "no logging or storage of anyone's position");
});
