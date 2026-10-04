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
    async addReportUnlessCapped({ tenantId, userId, content, maxOpenPerPerson }) {
      const openCount = rows.filter(row => row.tenantId === tenantId && row.userId === userId && row.content.kind === "report" && ["open", "in_progress"].includes(row.content.status)).length;
      if (openCount >= maxOpenPerPerson) return { capped: true, openCount };
      const number = rows.filter(row => row.tenantId === tenantId && row.content.kind === "report").length + 1;
      rows.unshift({ memoryId: `r${++n}`, tenantId, userId, content: { ...content, number } });
      return { number };
    },
    async listReports({ tenantId, userId = null }) { return rows.filter(row => row.tenantId === tenantId && row.content.kind === "report" && (!userId || row.userId === userId)); },
    async getReport({ tenantId, number }) { return rows.find(row => row.tenantId === tenantId && row.content.kind === "report" && row.content.number === number) || null; },
    async updateReport({ tenantId, memoryId, content, expectedStatus }) { const row = rows.find(item => item.tenantId === tenantId && item.memoryId === memoryId); if (expectedStatus !== undefined && (row.content.status || "") !== expectedStatus) return false; row.content = content; return true; },
    async addAnnouncement({ tenantId, userId, content }) { const id = `a${++n}`; rows.unshift({ memoryId: id, tenantId, userId, content }); return id; },
    async addAnnouncementUnlessCapped({ tenantId, userId, content, today, maxPerDay }) {
      const sentToday = rows.filter(row => row.tenantId === tenantId && row.content.kind === "announcement" && row.content.day === today).length;
      if (sentToday >= maxPerDay) return { capped: true };
      const id = `a${++n}`; rows.unshift({ memoryId: id, tenantId, userId, content });
      return { announcementId: id };
    },
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

// Found live: "my reports" kept a closed report visible only if content.day
// (the report's CREATION day, never refreshed on close) was within the last
// 30 days -- a report open for more than 30 days vanished from the
// reporter's own list the instant staff closed it, even though they were
// just told "the person who reported it has been told" and pointed at this
// exact list.
test("a report open for more than 30 days is still visible to its reporter the moment it's closed", async () => {
  const d = desk();
  const openedLongAgo = new Date(NOW.getTime() - 40 * 86400000);
  await d.say("Report: the borehole in ward 3 is broken", { at: openedLongAgo });
  await d.say("Close report 1: pump repaired", { userId: "staff", roles: ["admin"] });
  assert.match(await d.say("What is the status of my reports?"), /#1 closed — the borehole in ward 3 is broken \(pump repaired\)/, "a report closed today must stay visible today, regardless of how long it was open");
});

// Found live (follow-up sweep of the CAS/lost-update bug class closed elsewhere tonight):
// updateReport() wrote unconditionally, with no guard that the report was still in the status the
// caller read. Two staff members updating the same report close together could both read "open" and
// each write their own status/note -- whichever landed last silently discarded the other's real work,
// while BOTH still sent a push worded from their own (possibly no-longer-true) status.
test("two concurrent staff updates to the same report only apply one, and the push always matches what's persisted", async () => {
  const d = desk();
  await d.say("Report: the borehole in ward 3 is broken");
  const staff = { userId: "staff", roles: ["admin"] };
  const staff2 = { userId: "staff2", roles: ["admin"] };

  // Force the exact race regardless of natural scheduling luck: freeze the report's read (still
  // "open") for both racing requests' own getReport() calls, so both compute the same expectedStatus,
  // exactly like two staff reading the report at the same moment before either writes. Any FURTHER
  // read (the fix's own re-read on a lost race) sees the real, current data.
  const realGetReport = d.store.getReport.bind(d.store);
  const openSnapshot = await realGetReport({ tenantId: "t1", number: 1 });
  let racingReadsLeft = 2;
  d.store.getReport = async args => { if (racingReadsLeft > 0) { racingReadsLeft -= 1; return { ...openSnapshot }; } return realGetReport(args); };

  const [first, second] = await Promise.all([
    d.say("Mark report 1 in progress: dispatched a technician", staff),
    d.say("Close report 1: pump repaired", staff2)
  ]);
  const outcomes = [first, second];
  assert.equal(outcomes.filter(text => /^Done\. Report #1 is now/.test(text)).length, 1, "exactly one concurrent update must have won the race");
  assert.equal(outcomes.filter(text => /was just updated.*by someone else/.test(text)).length, 1, "exactly one must have honestly reported the conflict, not silently overwrite the other's real update");

  const persisted = await d.store.getReport({ tenantId: "t1", number: 1 });
  const winnerPush = d.pushes.find(row => row.content.title === "Your report was updated");
  assert.ok(winnerPush, "the reporter must have been pushed exactly once, for the update that actually won");
  assert.match(winnerPush.content.body, new RegExp(`is now ${persisted.content.status === "in_progress" ? "in progress" : "closed"}`),
    "the push sent must describe the status that is ACTUALLY persisted, not a status a losing, overwritten update claimed");
});

test("a person cannot flood the desk", async () => {
  const d = desk();
  for (let i = 0; i < 10; i += 1) assert.match(await d.say(`Report: broken pipe number ${i} on the street`), /logged report/);
  assert.match(await d.say("Report: another broken pipe on the street"), /already have ten open reports/);
});

function cappedReportDb() {
  const rows = []; const locks = new Map(); let n = 0;
  const db = {
    rows,
    async transaction(fn) {
      // A real pg_advisory_xact_lock is transaction-scoped and releases automatically when the
      // transaction ends, however many distinct keys were locked -- this harness must release every
      // lock this transaction acquired, not just the last one, since addReportUnlessCapped acquires two.
      const releases = [];
      const trx = Object.create(db);
      trx.query = async (sql, params) => {
        if (/pg_advisory_xact_lock/.test(sql)) {
          const key = params[0];
          const ahead = locks.get(key) || Promise.resolve();
          let myRelease; const held = new Promise(resolve => { myRelease = resolve; });
          locks.set(key, ahead.then(() => held));
          await ahead;
          releases.push(myRelease);
          return { rows: [] };
        }
        return db.query(sql, params);
      };
      try { return await fn(trx); } finally { for (const release of releases) release(); }
    },
    async query(sql, params) {
      if (/select count\(\*\)::int as n from nexus_memory_items/.test(sql)) {
        const [tenantId, userId] = params;
        return { rows: [{ n: rows.filter(row => row.tenantId === tenantId && row.userId === userId && ["open", "in_progress"].includes(row.content.status)).length }] };
      }
      if (/select coalesce\(max/.test(sql)) {
        const [tenantId] = params;
        return { rows: [{ n: rows.filter(row => row.tenantId === tenantId).reduce((max, row) => Math.max(max, row.content.number || 0), 0) }] };
      }
      if (/insert into nexus_memory_items/.test(sql)) { rows.push({ memoryId: `r${++n}`, tenantId: params[1], userId: params[2], content: params[4] }); return { rows: [] }; }
      throw new Error(`unexpected SQL: ${sql.slice(0, 80)}`);
    }
  };
  return db;
}
// Found live: the MAX_OPEN_PER_PERSON cap was enforced by desk.js with a plain check-then-act read
// (listReports, then addReport if under the cap), with no lock -- a burst of concurrent report
// requests from the same person could all pass the check. addReportUnlessCapped() re-checks and
// inserts under one transaction-scoped advisory lock, the same pattern already proven above for the
// announcement cap.
test("two concurrent reports from the same person at the cap boundary cannot together exceed the open-report limit", async () => {
  const db = cappedReportDb();
  const repo = new CommunityRepository(db);
  for (let i = 0; i < 9; i += 1) {
    await repo.addReportUnlessCapped({ tenantId: "t1", userId: "u1", maxOpenPerPerson: 10, content: { kind: "report", status: "open", text: `n${i}` } });
  }
  const [a, b] = await Promise.all([
    repo.addReportUnlessCapped({ tenantId: "t1", userId: "u1", maxOpenPerPerson: 10, content: { kind: "report", status: "open", text: "race-a" } }),
    repo.addReportUnlessCapped({ tenantId: "t1", userId: "u1", maxOpenPerPerson: 10, content: { kind: "report", status: "open", text: "race-b" } })
  ]);
  const succeeded = [a, b].filter(r => !r.capped).length;
  assert.equal(succeeded, 1, "only one of the two concurrent reports may land once the cap is one report away");
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
  const db = { async query(sql, params) { calls.push({ sql, params }); if (/max\(\(content/.test(sql)) return { rows: [{ n: 4 }] }; if (/select distinct user_id/.test(sql)) return { rows: [{ user_id: "u1" }, { user_id: "u2" }] }; return { rows: [{ memory_id: "m1", principal_id: "u1", content: { kind: "report", number: 5 } }] }; }, async transaction(work) { return work(db); } };
  const repo = new CommunityRepository(db);
  assert.equal(await repo.addReport({ tenantId: "t1", userId: "u1", content: { kind: "report", text: "x", status: "open" } }), 5);
  const insert = calls.find(call => /insert into nexus_memory_items/.test(call.sql));
  assert.equal(insert.params[3], "community_reports"); assert.equal(insert.params[8], "sensitive"); assert.equal(insert.params[4].number, 5);
  assert.match(calls.find(call => /max\(\(content/.test(call.sql)).sql, /where tenant_id=\$1 and purpose='community_reports'/);
  assert.ok(calls.some(call => /pg_advisory_xact_lock/.test(call.sql)), "concurrent report numbering must be serialized per tenant with an advisory lock");
  assert.deepEqual(await repo.pushRecipients({ tenantId: "t1" }), ["u1", "u2"]);
  assert.match(calls.at(-1).sql, /from nexus_devices\s+where tenant_id=\$1/);
  await repo.listReports({ tenantId: "t1", userId: "u1" }); assert.equal(calls.at(-1).params[0], "t1"); assert.equal(calls.at(-1).params[1], "u1");
  await repo.setOptOut({ tenantId: "t1", userId: "u9", value: false }); assert.match(calls.at(-1).sql, /set deleted_at=now\(\)/);
  assert.ok(calls.every(call => !/delete from/i.test(call.sql)));
});

// Found live: the daily announcement cap was re-checked with a plain read, no lock -- two different staff
// members, each having independently prepared their own pending announcement (a realistic scenario, since
// setPending/getPending are keyed per staff userId, not shared), could both pass the "under the cap" check
// and both insert. This mirrors the exact promise-queue lock simulation this session already uses for
// other pg_advisory_xact_lock-guarded races: a held lock only releases when its own transaction's work
// finishes, so two concurrent callers racing for the same key are genuinely serialized.
function cappedAnnouncementDb() {
  const rows = []; const locks = new Map();
  const db = {
    rows,
    async transaction(fn) {
      let release = null;
      const trx = Object.create(db);
      trx.query = async (sql, params) => {
        if (/pg_advisory_xact_lock/.test(sql)) {
          const key = params[0];
          const ahead = locks.get(key) || Promise.resolve();
          let myRelease; const held = new Promise(resolve => { myRelease = resolve; });
          locks.set(key, ahead.then(() => held));
          await ahead;
          release = myRelease;
          return { rows: [] };
        }
        return db.query(sql, params);
      };
      try { return await fn(trx); } finally { if (release) release(); }
    },
    async query(sql, params) {
      if (/select count\(\*\)::int as n from nexus_memory_items/.test(sql)) {
        const [tenantId, day] = params;
        return { rows: [{ n: rows.filter(row => row.tenantId === tenantId && row.content.kind === "announcement" && row.content.day === day).length }] };
      }
      if (/insert into nexus_memory_items/.test(sql)) { rows.push({ tenantId: params[1], userId: params[2], content: params[4] }); return { rows: [] }; }
      throw new Error(`unexpected SQL: ${sql.slice(0, 80)}`);
    }
  };
  return db;
}
test("two staff members confirming their own independently prepared announcement at the same moment cannot together exceed the daily cap", async () => {
  const db = cappedAnnouncementDb();
  const repo = new CommunityRepository(db);
  for (let i = 0; i < MAX_ANNOUNCEMENTS_PER_DAY - 1; i += 1) {
    await repo.addAnnouncementUnlessCapped({ tenantId: "t1", userId: "staff", today: "2026-09-20", maxPerDay: MAX_ANNOUNCEMENTS_PER_DAY, content: { kind: "announcement", day: "2026-09-20", text: `n${i}` } });
  }
  const [a, b] = await Promise.all([
    repo.addAnnouncementUnlessCapped({ tenantId: "t1", userId: "staff1", today: "2026-09-20", maxPerDay: MAX_ANNOUNCEMENTS_PER_DAY, content: { kind: "announcement", day: "2026-09-20", text: "race-a" } }),
    repo.addAnnouncementUnlessCapped({ tenantId: "t1", userId: "staff2", today: "2026-09-20", maxPerDay: MAX_ANNOUNCEMENTS_PER_DAY, content: { kind: "announcement", day: "2026-09-20", text: "race-b" } })
  ]);
  const succeeded = [a, b].filter(r => !r.capped).length;
  assert.equal(succeeded, 1, "only one of the two concurrent confirmations may land once the cap is one announcement away");
});

// Found live: optOuts() used to be a single select() capped at 2000 rows (select()'s own hard ceiling) --
// a tenant with more than 2000 active opt-outs would have its EARLIEST opt-outs (the people who most
// plainly asked, first, to stop hearing from the community desk) silently fall off every read, and
// announce/confirm-announcement both push to every recipient not in this list. A fixed cap can never be
// the right fix for a consent list, so this now pages through in batches of 2000 via keyset pagination.
test("optOuts() pages through more than one batch instead of silently dropping the earliest opt-outs once a tenant passes the batch size", async () => {
  const rows = [];
  for (let i = 0; i < 2005; i += 1) rows.push({ memory_id: `m${i}`, principal_id: `u${i}`, created_at: new Date(2026, 0, 1, 0, 0, i).toISOString() });
  const db = {
    async query(sql, params) {
      if (/select memory_id,principal_id,created_at from nexus_memory_items/.test(sql)) {
        const [, cursorAt, cursorId] = params;
        let matches = cursorAt === null ? rows : rows.filter(row => row.created_at < cursorAt || (row.created_at === cursorAt && row.memory_id < cursorId));
        matches = matches.slice().sort((a, b) => (a.created_at < b.created_at ? 1 : a.created_at > b.created_at ? -1 : (a.memory_id < b.memory_id ? 1 : -1)));
        return { rows: matches.slice(0, 2000) };
      }
      throw new Error(`unexpected SQL: ${sql.slice(0, 80)}`);
    }
  };
  const repo = new CommunityRepository(db);
  const ids = await repo.optOuts({ tenantId: "t1" });
  assert.equal(ids.length, 2005, "every opt-out must be returned, not just the newest 2000");
  assert.ok(ids.includes("u0"), "the very first person to ever opt out must still be included");
  assert.ok(ids.includes("u2004"), "the most recent opt-out must also still be included");
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

// ---- "announce test:" -- a rehearsal that reaches only the sender ----
test("announce test: is read, and 'announce:' still means a real announcement", () => {
  assert.deepEqual(readDeskRequest("Announce test: Water off Thursday"), { action: "announce-test", text: "Water off Thursday" });
  assert.equal(readDeskRequest("broadcast test:   Clinic opens Monday").action, "announce-test");
  assert.equal(readDeskRequest("Announce: Water off Thursday").action, "announce");
  assert.equal(readDeskRequest("Announce testing the new borehole"), null);
});

test("a test announcement reaches only the staff member who sent it, is never recorded, and never uses up the daily limit", async () => {
  const d = desk(fakeStore({ recipients: ["u1", "u2", "u3", "staff"] }));
  const staff = { userId: "staff", roles: ["admin"] };
  assert.equal(await d.say("Announce test: Water off Thursday"), null, "a citizen cannot send one");
  const reply = await d.say("Announce test: Water off Thursday", staff);
  assert.match(reply, /^Test sent to you only\. Nobody else received it/);
  assert.deepEqual(d.pushes.map(push => push.userId), ["staff"], "only the sender got a push");
  assert.match(d.pushes[0].content.title, /only you got this/);
  assert.equal(d.store.rows.some(row => row.content.kind === "announcement" || row.content.kind === "pending"), false, "nothing is recorded and nothing is left waiting to confirm");
  // The three real announcements a day are all still available afterwards.
  for (let i = 0; i < MAX_ANNOUNCEMENTS_PER_DAY; i += 1) {
    await d.say("Announce test: Another rehearsal", staff);
    await d.say(`Announce: Real notice number ${i + 1}`, staff);
    assert.match(await d.say("Confirm announcement", staff), /^Sent to 4 people/);
  }
});

test("a test cannot be confirmed into a real announcement by accident", async () => {
  const d = desk(fakeStore({ recipients: ["u1", "staff"] }));
  const staff = { userId: "staff", roles: ["admin"] };
  await d.say("Announce test: Water off Thursday", staff);
  assert.match(await d.say("Confirm announcement", staff), /^There is no announcement waiting/);
  assert.equal(d.pushes.length, 1, "only the original test push exists");
});

test("if the sender's own device has no alerts on, the test says so instead of claiming it was sent", async () => {
  const d = desk(fakeStore({ recipients: ["u1", "u2"] }));
  const reply = await d.say("Announce test: Water off Thursday", { userId: "staff", roles: ["admin"] });
  assert.match(reply, /alerts are not turned on/);
  assert.match(reply, /Nothing was sent to anyone/);
  assert.equal(d.pushes.length, 0);
});

test("the exact per-person device check is used when the store has one (the capped recipient list is not trusted)", async () => {
  const store = fakeStore({ recipients: [] });
  store.hasPushDevice = async ({ userId }) => userId === "staff";
  const d = desk(store);
  assert.match(await d.say("Announce test: Water off Thursday", { userId: "staff", roles: ["admin"] }), /^Test sent to you only/);
});

test("CommunityRepository.hasPushDevice asks about exactly one person and one tenant", async () => {
  const seen = [];
  const repo = new CommunityRepository({ async query(sql, params) { seen.push({ sql, params }); return { rows: params[1] === "yes" ? [{ "?column?": 1 }] : [] }; } });
  assert.equal(await repo.hasPushDevice({ tenantId: "t1", userId: "yes" }), true);
  assert.equal(await repo.hasPushDevice({ tenantId: "t1", userId: "no" }), false);
  assert.deepEqual(seen[0].params, ["t1", "yes"]);
  assert.match(seen[0].sql, /tenant_id=\$1 and user_id=\$2 and state='active' and push_state='registered'/);
});
