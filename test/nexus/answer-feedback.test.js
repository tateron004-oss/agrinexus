"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { MemoryRepository } = require("../../nexus/memory/repository.js");
const { feedbackTurn, readFeedback, lastExchange, redact } = require("../../nexus/quality/feedback.js");

test("feedback phrases are told apart from ordinary talk", () => {
  assert.deepEqual(readFeedback("That was wrong"), { action: "rate", rating: "down", note: "" });
  assert.deepEqual(readFeedback("That's not right, maize costs 50 per kg"), { action: "rate", rating: "down", note: "maize costs 50 per kg" });
  assert.deepEqual(readFeedback("Wrong."), { action: "rate", rating: "down", note: "" });
  assert.deepEqual(readFeedback("No, that is incorrect"), { action: "rate", rating: "down", note: "" });
  assert.deepEqual(readFeedback("That was helpful"), { action: "rate", rating: "up" });
  assert.deepEqual(readFeedback("Thanks, that helped"), { action: "rate", rating: "up" });
  assert.deepEqual(readFeedback("The correct answer is 50 shillings"), { action: "correct", note: "50 shillings" });
  assert.deepEqual(readFeedback("Show me the feedback report"), { action: "report" });
  for (const text of ["Thanks", "What is wrong with my maize leaves?", "Why is that wrong?", "That is a good question", "Is that right?", "The tank is wrong side up", ""]) assert.equal(readFeedback(text), null, text);
});

test("the last exchange is the last answer and the question before it", () => {
  const history = [{ role: "user", content: "How deep do I plant maize?" }, { role: "assistant", content: "About 5 cm." }, { role: "user", content: "and beans?" }, { role: "assistant", content: "3 to 5 cm." }];
  assert.deepEqual(lastExchange(history), { answer: "3 to 5 cm.", question: "and beans?" });
  assert.equal(lastExchange([{ role: "user", content: "hi" }]), null);
  assert.equal(lastExchange([]), null);
  assert.equal(redact("call me on +254 712 345 678 or a@b.co"), "call me on [number removed] or [email removed]");
});

function fakeMemory() {
  const rows = []; let n = 0;
  return { rows,
    async addFeedback({ tenantId, userId, content }) { rows.unshift({ memory_id: `f${++n}`, tenantId, userId, content }); return { memoryId: `f${n}` }; },
    async listFeedback({ tenantId, userId = null, limit = 200 }) { return rows.filter(row => row.tenantId === tenantId && (!userId || row.userId === userId)).slice(0, limit).map(row => ({ memory_id: row.memory_id, content: row.content })); },
    async updateFeedback({ userId, memoryId, content }) { const row = rows.find(item => item.memory_id === memoryId && item.userId === userId); if (row) row.content = content; return Boolean(row); }
  };
}
const HISTORY = [{ role: "user", content: "How much is maize per kg? Call me on +254712345678" }, { role: "assistant", content: "Maize is about 50 shillings per kg in Kisumu." }];
const say = (memory, text, extra = {}) => feedbackTurn({ text, memory, tenantId: "t1", userId: "u1", history: HISTORY, roles: [], ...extra });

test("thumbs down keeps the question and answer for the team, minus phone numbers, and says so", async () => {
  const memory = fakeMemory();
  const reply = await say(memory, "That was wrong");
  assert.match(reply, /sent that answer to the team so it can be fixed \(phone numbers and emails removed\)/);
  assert.match(reply, /the correct answer is/);
  assert.deepEqual(memory.rows[0].content, { kind: "feedback", rating: "down", question: "How much is maize per kg? Call me on [number removed]", answer: "Maize is about 50 shillings per kg in Kisumu.", note: "", day: memory.rows[0].content.day });
  assert.match(await say(memory, "That's not right, it is 40 shillings"), /I included what you said/);
  assert.equal(memory.rows[0].content.note, "it is 40 shillings");
});

test("the correct answer is attached to the flagged answer, or saved with it when nothing was flagged", async () => {
  const memory = fakeMemory();
  await say(memory, "That was wrong");
  assert.equal(await say(memory, "The correct answer is 40 shillings"), "Thank you. I've added the correct answer for the team.");
  assert.equal(memory.rows.length, 1); assert.equal(memory.rows[0].content.note, "40 shillings");
  const fresh = fakeMemory();
  assert.match(await say(fresh, "The correct answer is 40 shillings"), /sent that answer and the correct one to the team/);
  assert.equal(fresh.rows[0].content.rating, "down");
  assert.match(await feedbackTurn({ text: "The correct answer is 40", memory: fakeMemory(), tenantId: "t1", userId: "u1", history: [] }), /Tell me which answer/);
});

test("thumbs up keeps no words at all", async () => {
  const memory = fakeMemory();
  assert.equal(await say(memory, "That helped"), "Glad that helped. I've noted it.");
  assert.deepEqual(Object.keys(memory.rows[0].content).sort(), ["day", "kind", "rating"]);
});

test("with nothing yet answered there is nothing to mark", async () => {
  const memory = fakeMemory();
  assert.equal(await feedbackTurn({ text: "That was wrong", memory, tenantId: "t1", userId: "u1", history: [] }), "I haven't answered anything yet that I could mark as wrong.");
  assert.equal(memory.rows.length, 0);
});

test("only an administrator gets the report, and a non-admin's request is ordinary talk", async () => {
  const memory = fakeMemory();
  await say(memory, "That was wrong"); await feedbackTurn({ text: "that helped", memory, tenantId: "t1", userId: "u2", history: HISTORY });
  assert.equal(await say(memory, "Show me the feedback report"), null);
  const report = await say(memory, "Show me the feedback report", { roles: ["admin"] });
  assert.match(report, /^Last 30 days: 1 helpful, 1 flagged wrong\. Latest flagged: "How much is maize per kg\?/);
  assert.equal(await feedbackTurn({ text: "Show me the feedback report", memory: fakeMemory(), tenantId: "t1", userId: "a", history: [], roles: ["admin"] }), "No feedback in the last 30 days.");
  const other = fakeMemory(); other.rows.push({ memory_id: "x", tenantId: "t2", userId: "z", content: { rating: "down", question: "secret", answer: "x" } });
  assert.equal(await feedbackTurn({ text: "Show me the feedback report", memory: other, tenantId: "t1", userId: "a", history: [], roles: ["admin"] }), "No feedback in the last 30 days.", "another tenant's feedback is never listed");
});

test("the repository stores feedback under its own purpose, lists by person or tenant, and never hard-deletes", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ memory_id: "m1", content: { rating: "down" } }] }; } };
  const repo = new MemoryRepository(db);
  await repo.addFeedback({ tenantId: "t1", userId: "u1", content: { kind: "feedback", rating: "down", day: "2026-09-20" } });
  assert.match(calls[0].sql, /'domain','feedback'/);
  assert.equal((await repo.listFeedback({ tenantId: "t1" })).length, 1);
  assert.equal(calls[1].params[1], null, "no user means the whole tenant"); assert.match(calls[1].sql, /tenant_id=\$1/);
  await repo.listFeedback({ tenantId: "t1", userId: "u1", sinceDays: 9999 });
  assert.equal(calls[2].params[1], "u1"); assert.equal(calls[2].params[2], 365);
  await repo.updateFeedback({ tenantId: "t1", userId: "u1", memoryId: "m1", content: { rating: "down", note: "x" } });
  assert.match(calls[3].sql, /purpose='feedback'/);
  assert.ok(calls.every(call => !/delete from/i.test(call.sql)));
});

// Found live (quality/feedback follow-up audit): unlike personal-items' addPersonalItemUnlessFull,
// addFeedback had no cap at all -- every "that was wrong"/"that helped" turn is reachable with no
// confirmation gate or throttle anywhere in the call chain, so a buggy client retry loop or a misfiring
// voice intent had an open path to unbounded row growth. Same advisory-lock-guarded count-then-insert
// pattern as the personal-items cap.
test("MemoryRepository.addFeedbackUnlessFull refuses to insert once the cap is reached, inside one transaction", async () => {
  const queries = [];
  const trx = { query: async (sql, params) => { queries.push(sql.trim().split("\n")[0]); if (/select count/i.test(sql)) return { rows: [{ n: 2000 }] }; return { rows: [{ memory_id: "should-not-be-reached" }] }; } };
  const db = { query: async () => { throw new Error("must run inside a transaction"); }, transaction: async fn => fn(trx) };
  const repo = new MemoryRepository(db);
  const result = await repo.addFeedbackUnlessFull({ tenantId: "t1", userId: "u1", content: { kind: "feedback", rating: "down" }, maxItems: 2000 });
  assert.equal(result.full, true, "must refuse the insert once the count is already at the cap");
  assert.ok(queries.some(q => /pg_advisory_xact_lock/i.test(q)), "must take an advisory lock before checking the count");
  assert.ok(!queries.some(q => /^insert/i.test(q)), "must never reach the insert once the cap check fails");
});

test("MemoryRepository.addFeedbackUnlessFull inserts when genuinely under the cap", async () => {
  const trx = { query: async sql => { if (/select count/i.test(sql)) return { rows: [{ n: 1999 }] }; return { rows: [{ memory_id: "f-new" }] }; } };
  const db = { query: async () => { throw new Error("must run inside a transaction"); }, transaction: async fn => fn(trx) };
  const repo = new MemoryRepository(db);
  const result = await repo.addFeedbackUnlessFull({ tenantId: "t1", userId: "u1", content: { kind: "feedback", rating: "up" }, maxItems: 2000 });
  assert.equal(result.full, false);
  assert.equal(result.memoryId, "f-new");
});

// A fake db whose advisory lock genuinely serializes concurrent transactions (matching real Postgres
// blocking behavior), proving the check-then-act race for the feedback cap is actually closed.
function lockingFeedbackDb() {
  const rows = []; const locks = new Map();
  const db = { rows,
    async transaction(fn) {
      let release = null; const trx = Object.create(db);
      trx.query = async (sql, params) => {
        if (/pg_advisory_xact_lock/.test(sql)) {
          const key = params[0]; const ahead = locks.get(key) || Promise.resolve();
          let myRelease; const held = new Promise(resolve => { myRelease = resolve; });
          locks.set(key, ahead.then(() => held)); await ahead; release = myRelease; return { rows: [] };
        }
        return db.query(sql, params);
      };
      try { return await fn(trx); } finally { if (release) release(); }
    },
    async query(sql) {
      if (/select count/i.test(sql)) return { rows: [{ n: rows.length }] };
      if (/^insert into nexus_memory_items/.test(sql)) { rows.push({}); return { rows: [{ memory_id: `f${rows.length}` }] }; }
      return { rows: [] };
    } };
  return db;
}

test("two concurrent feedback submissions racing the last slot under the cap don't both insert", async () => {
  const repo = new MemoryRepository(lockingFeedbackDb());
  const args = { tenantId: "t1", userId: "u1", content: { kind: "feedback", rating: "down" }, maxItems: 1 };
  const results = await Promise.allSettled([repo.addFeedbackUnlessFull(args), repo.addFeedbackUnlessFull(args)]);
  const inserted = results.filter(result => result.status === "fulfilled" && result.value?.memoryId).length;
  assert.equal(inserted, 1, "only one of the two racing submissions may claim the last cap slot");
});

// Found live: the admin report derived "N helpful, M flagged wrong" from however many rows listFeedback's
// own cap (500) happened to return -- silently wrong counts once a tenant's 30-day feedback volume passed
// that cap. countFeedback() is a real aggregate, exact regardless of volume.
test("MemoryRepository.countFeedback returns exact up/down counts via a real aggregate, not a capped list length", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ down: 640, up: 210 }] }; } };
  const repo = new MemoryRepository(db);
  const counts = await repo.countFeedback({ tenantId: "t1", sinceDays: 30 });
  assert.deepEqual(counts, { down: 640, up: 210 });
  assert.match(calls[0].sql, /count\(\*\) filter \(where content->>'rating'='down'\)/);
  assert.equal(calls[0].params[1], 30);
});

test("the admin report's counts stay accurate past listFeedback's own row cap, when the memory implementation provides countFeedback", async () => {
  const memory = fakeMemory();
  memory.countFeedback = async () => ({ down: 640, up: 210 });
  const report = await feedbackTurn({ text: "Show me the feedback report", memory, tenantId: "t1", userId: "a", history: [], roles: ["admin"] });
  assert.match(report, /^Last 30 days: 210 helpful, 640 flagged wrong\./, "the report must use the real aggregate count, not rows.length from a capped list");
});

test("through the planner the last answer in the conversation is the one flagged, and no model is asked", async () => {
  const memory = Object.assign(fakeMemory(), { async saveProfileFact() { return { fact: {}, replaced: [] }; }, async profile() { return []; }, async forgetProfile() { return []; }, async search() { return []; }, async recent() { return []; } });
  const p = new OpenEndedPlanner({ memory, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const plan = await p.plan({ command: { text: "That was wrong", channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles: [] }, conversationHistory: HISTORY });
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []); assert.match(plan.response, /sent that answer to the team/);
  assert.equal(memory.rows[0].content.answer, "Maize is about 50 shillings per kg in Kisumu.");
});
