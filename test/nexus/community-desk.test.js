"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { communityTurn, readDeskRequest, category, MAX_ANNOUNCEMENTS_PER_DAY } = require("../../nexus/community/desk.js");
const { CommunityRepository } = require("../../nexus/community/store.js");

test("desk requests are read exactly, and requests for other kinds of reports are not taken", () => {
  assert.deepEqual(readDeskRequest("Report: the borehole in ward 3 is broken"), { action: "report", text: "the borehole in ward 3 is broken" });
  assert.equal(readDeskRequest("I want to report a broken streetlight near the market").text, "broken streetlight near the market");
  assert.equal(readDeskRequest("Report the burst pipe on Moi road").text, "burst pipe on Moi road");
  assert.deepEqual(readDeskRequest("Close report 12: pump repaired"), { action: "update", number: 12, status: "closed", note: "pump repaired" });
  assert.equal(readDeskRequest("Mark report 7 in progress").status, "in_progress");
  assert.equal(readDeskRequest("Announce: Water will be off Thursday").action, "announce");
  for (const text of ["Report on maize prices", "report about the weather", "Report generation failed", "Give me the weekly report", "I need a report for my bank", "Announce yourself", "What is the announcement rule?"]) assert.equal(readDeskRequest(text), null, text);
  assert.equal(category("the borehole pump is broken"), "water"); assert.equal(category("big pothole on the road"), "roads"); assert.equal(category("the moon is nice"), "other");
});

// ---- an in-memory store with the contract of CommunityRepository, per tenant ----
function fakeStore({ recipients = ["u1", "u2", "u3"] } = {}) {
  const rows = []; let n = 0; const optouts = new Set();
  const store = {
    rows, optouts,
    async addReport({ tenantId, userId, content }) { const number = rows.filter(row => row.tenantId === tenantId && row.content.kind === "report").length + 1; rows.unshift({ memoryId: `r${++n}`, tenantId, userId, content: { ...content, number } }); return number; },
    async listReports({ tenantId, userId = null }) { return rows.filter(row => row.tenantId === tenantId && row.content.kind === "report" && (!userId || row.userId === userId)); },
    async getReport({ tenantId, number }) { return rows.find(row => row.tenantId === tenantId && row.content.kind === "report" && row.content.number === number) || null; },
    async updateReport({ tenantId, memoryId, content }) { rows.find(row => row.tenantId === tenantId && row.memoryId === memoryId).content = content; return true; },
    async addAnnouncement({ tenantId, userId, content }) { const id = `a${++n}`; rows.unshift({ memoryId: id, tenantId, userId, content }); return id; },
    async listAnnouncements({ tenantId, limit = 20 }) { return rows.filter(row => row.tenantId === tenantId && row.content.kind === "announcement").slice(0, limit); },
    async setPending({ tenantId, userId, content }) { await store.clearPending({ tenantId, userId }); rows.unshift({ memoryId: `p${++n}`, tenantId, userId, content }); },
    async getPending({ tenantId, userId }) { return rows.find(row => row.tenantId === tenantId && row.userId === userId && row.content.kind === "pending") || null; },
    async clearPending({ tenantId, userId }) { const i = rows.findIndex(row => row.tenantId === tenantId && row.userId === userId && row.content.kind === "pending"); if (i < 0) return false; rows.splice(i, 1); return true; },
    async pushRecipients() { return recipients.slice(); },
    async optOuts() { return [...optouts]; },
    async setOptOut({ userId, value }) { if (value) optouts.add(userId); else optouts.delete(userId); }
  };
  return store;
}
const NOW = new Date("2026-09-20T09:00:00Z");
function desk(store = fakeStore()) {
  const pushes = []; const notifications = { async enqueue(row) { pushes.push(row); } };
  const say = (text, { userId = "u1", tenantId = "t1", roles = [], at = NOW } = {}) => communityTurn({ text, store, notifications, tenantId, userId, nameOf: async ({ userId: id }) => ({ u1: "Amina Wanjiru", u2: "Joseph Otieno", staff: "Ward Officer", staff2: "Second Officer" }[id] || ""), roles, timeZone: "Africa/Nairobi", now: at });
  return { store, pushes, say };
}

test("a citizen reports a problem, is told who can see it, and can follow its status", async () => {
  const d = desk();
  assert.equal(await d.say("Report: the borehole in ward 3 is broken"), 'Thank you. I\'ve logged report #1: "the borehole in ward 3 is broken". The community team can see it, along with your name. I\'ll tell you when it\'s updated, or ask "what is the status of my reports?".');
  assert.match(await d.say("I want to report a broken streetlight near the market", { userId: "u2" }), /logged report #2/);
  assert.match(await d.say("What is the status of my reports?"), /^Your reports: #1 open — the borehole in ward 3 is broken\.$/);
  assert.match(await d.say("What is the status of my reports?", { userId: "u2" }), /#2 open — broken streetlight/);
  assert.equal(d.store.rows[1].content.category, "water"); assert.equal(d.store.rows[0].content.category, "power");
  assert.equal(await d.say("Report on maize prices"), null);
  assert.match(await d.say("What is the status of my reports?", { userId: "u9" }), /^You have no reports\./);
});

test("staff triage: only the admin role can list, summarise and update, and the reporter is told", async () => {
  const d = desk();
  await d.say("Report: the borehole in ward 3 is broken"); await d.say("Report: pothole on Moi road", { userId: "u2" });
  for (const text of ["Show open reports", "Give me the report summary", "Close report 1: pump repaired"]) assert.equal(await d.say(text), null, `${text} is ordinary talk for a citizen`);
  const staff = { userId: "staff", roles: ["admin"] };
  assert.equal(await d.say("Show open reports", staff), "2 open: #2 (roads, open) pothole on Moi road — Joseph; #1 (water, open) the borehole in ward 3 is broken — Amina.");
  d.pushes.length = 0;
  assert.equal(await d.say("Mark report 1 in progress", staff), "Done. Report #1 is now in progress, and the person who reported it has been told.");
  assert.equal(await d.say("Close report 1: pump repaired", staff), "Done. Report #1 is now closed, and the person who reported it has been told.");
  assert.equal(d.pushes.length, 2); assert.equal(d.pushes[0].userId, "u1"); assert.equal(d.pushes[1].content.body, "Report #1 is now closed: pump repaired");
  assert.equal(d.pushes[1].content.title, "Your report was updated"); assert.equal(d.pushes[1].tenantId, "t1");
  assert.match(await d.say("What is the status of my reports?"), /#1 closed — the borehole in ward 3 is broken \(pump repaired\)/);
  assert.equal(await d.say("Close report 99", staff), "I can't find report #99.");
  assert.match(await d.say("Give me the report summary", staff), /^Last 30 days: 2 reports — 1 open, 1 closed\. By kind: /);
  assert.equal(await d.say("Show open reports", { userId: "staff", roles: ["admin"], tenantId: "t2" }), "There are no open reports.", "another community sees nothing");
});

test("a person cannot flood the desk", async () => {
  const d = desk();
  for (let i = 0; i < 10; i += 1) assert.match(await d.say(`Report: broken pipe number ${i} on the street`), /logged report/);
  assert.match(await d.say("Report: another broken pipe on the street"), /already have ten open reports/);
});

test("an announcement is prepared first, sent only when confirmed, only to those with alerts on who have not opted out, and recorded", async () => {
  const d = desk(fakeStore({ recipients: ["u1", "u2", "u3", "staff"] }));
  const staff = { userId: "staff", roles: ["admin"] };
  assert.equal(await d.say("Announce: Water will be off Thursday 8am to noon"), null, "a citizen cannot announce");
  await d.say("Stop community announcements", { userId: "u3" });
  const prepared = await d.say("Announce: Water will be off Thursday 8am to noon", staff);
  assert.equal(prepared, 'Ready to send to 3 people with alerts on (anyone who opted out is left out): "Water will be off Thursday 8am to noon". Say "confirm announcement" within 10 minutes to send it, or "cancel announcement".');
  assert.equal(d.pushes.length, 0, "nothing is sent until confirmed");
  assert.equal(await d.say("Confirm announcement"), null, "a citizen cannot confirm");
  const sent = await d.say("Confirm announcement", staff);
  assert.equal(sent, 'Sent to 3 people. It\'s recorded, and anyone can read it later by asking "what\'s new from the community?".');
  assert.deepEqual(d.pushes.map(push => push.userId).sort(), ["staff", "u1", "u2"]);
  assert.ok(d.pushes.every(push => push.content.title === "Community announcement" && push.content.body === "Water will be off Thursday 8am to noon" && push.tenantId === "t1" && /^announce:a\d+:/.test(push.idempotencyKey)));
  assert.equal(d.store.rows.find(row => row.content.kind === "announcement").content.recipients, 3);
  assert.match(await d.say("What is new from the community?"), /^Latest from the community: 2026-09-20: Water will be off Thursday/);
  assert.equal(await d.say("Confirm announcement", staff), "There is no announcement waiting (they expire after ten minutes). Say \"announce: …\" to prepare one.", "confirming twice sends nothing more");
  assert.equal(d.pushes.length, 3);
  assert.match(await d.say("Start community announcements", { userId: "u3" }), /get community announcements again/);
});

test("a prepared announcement can be cancelled and expires, and three a day is the limit", async () => {
  const d = desk(); const staff = { userId: "staff", roles: ["admin"] };
  await d.say("Announce: First one goes out", staff);
  assert.equal(await d.say("Cancel announcement", staff), "Cancelled. Nothing was sent.");
  assert.equal(await d.say("Cancel announcement", staff), "There is no announcement waiting.");
  await d.say("Announce: This one expires soon", staff);
  assert.match(await d.say("Confirm announcement", { ...staff, at: new Date(NOW.getTime() + 11 * 60000) }), /no announcement waiting/);
  assert.equal(d.pushes.length, 0);
  for (let i = 0; i < MAX_ANNOUNCEMENTS_PER_DAY; i += 1) { await d.say(`Announce: Notice number ${i} for everyone`, staff); assert.match(await d.say("Confirm announcement", staff), /^Sent to 3 people/); }
  assert.match(await d.say("Announce: A fourth notice for everyone", staff), /Three announcements have already gone out today/);
  const tomorrow = new Date(NOW.getTime() + 24 * 3600 * 1000);
  assert.match(await d.say("Announce: A notice on the next day", { ...staff, at: tomorrow }), /^Ready to send to 3 people/);
});

test("the repository keeps reports and notices inside one tenant, numbers reports per community, and only soft-deletes", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); if (/max\(\(content/.test(sql)) return { rows: [{ n: 4 }] }; if (/select distinct user_id/.test(sql)) return { rows: [{ user_id: "u1" }, { user_id: "u2" }] }; return { rows: [{ memory_id: "m1", principal_id: "u1", content: { kind: "report", number: 5 } }] }; } };
  const repo = new CommunityRepository(db);
  assert.equal(await repo.addReport({ tenantId: "t1", userId: "u1", content: { kind: "report", text: "x", status: "open" } }), 5);
  const insert = calls.find(call => /insert into nexus_memory_items/.test(call.sql));
  assert.equal(insert.params[3], "community_reports"); assert.equal(insert.params[8], "sensitive"); assert.equal(insert.params[4].number, 5);
  assert.match(calls[0].sql, /where tenant_id=\$1 and purpose='community_reports'/);
  assert.deepEqual(await repo.pushRecipients({ tenantId: "t1" }), ["u1", "u2"]);
  assert.match(calls.at(-1).sql, /from nexus_devices\s+where tenant_id=\$1/);
  await repo.listReports({ tenantId: "t1", userId: "u1" }); assert.equal(calls.at(-1).params[0], "t1"); assert.equal(calls.at(-1).params[1], "u1");
  await repo.setOptOut({ tenantId: "t1", userId: "u9", value: false }); assert.match(calls.at(-1).sql, /set deleted_at=now\(\)/);
  assert.ok(calls.every(call => !/delete from/i.test(call.sql)));
});

test("through the planner these are conversational answers with no tool, and staff rights come from the admin role only", async () => {
  const store = fakeStore(); const pushes = [];
  const p = new OpenEndedPlanner({ community: { store, notifications: { enqueue: async row => { pushes.push(row); } }, nameOf: async () => "Amina" }, memory: null, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const plan = (text, roles = []) => p.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles, timeZone: "Africa/Nairobi" } });
  const reported = await plan("Report: the borehole in ward 3 is broken");
  assert.equal(reported.application, "conversation"); assert.deepEqual(reported.steps, []); assert.match(reported.response, /^Thank you\. I've logged report #1/);
  assert.match((await plan("Show open reports", ["admin"])).response, /^1 open: #1 \(water, open\)/);
  await assert.rejects(plan("Show open reports", []), /no model/, "without the admin role it is ordinary talk and reaches the model");
});
