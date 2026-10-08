"use strict";
// Shared by the bookkeeping-round-two tests: one fresh person talking to the farm toolkit over the in-memory store. Not a test file itself.
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-10-05T09:00:00Z"); // Monday 5 October 2026, noon in Nairobi
function person({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory(), country = "" } = {}) {
  const say = async text => {
    const reply = await farmWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, country, notifications: { enqueue: async () => {}, existsByKey: async () => false }, nameOf: async () => "A trader" });
    return typeof reply === "string" ? reply : reply ? JSON.stringify(reply) : null;
  };
  const rows = collection => store.rows.filter(row => row.collection === collection && !row.deleted).map(row => row.data).reverse(); // oldest first
  return { say, store, memory, rows, money: () => rows("money"), stock: () => rows("stock") };
}
const run = async (who, lines) => { const out = []; for (const line of lines) out.push(await who.say(line)); return out; };
// every key in `wanted` must equal the stored value
const matches = (actual, wanted) => Object.entries(wanted).every(([key, value]) => actual && actual[key] === value);
const describe = actual => JSON.stringify(actual);

// Runs a table of [lines, expect]: `lines` is one sentence or several said in turn to a fresh person (`seed` first adds a field).
//   expect.money: records that must exist (each a subset of the stored data); the count must match unless `more`
//   expect.stock: stock records that must exist (same rule); expect.reply: pattern for the LAST reply; expect.replies: a pattern (or null) per turn
//   expect.check: an async function (person, replies) for anything else
async function runTable(table, { country = "" } = {}) {
  const failures = [];
  for (const [lines, expect = {}] of table) {
    const label = [].concat(lines).join(" / ");
    try {
      const who = person({ country });
      if (expect.seed) await who.store.add({ tenantId: "t1", userId: "u1", collection: "field", data: { name: "Home", status: "active" } });
      for (const row of expect.before || []) await who.store.add({ tenantId: "t1", userId: "u1", collection: row[0], data: row[1] });
      const replies = await run(who, [].concat(lines));
      if (expect.reply && !expect.reply.test(String(replies[replies.length - 1]))) throw new Error(`reply ${JSON.stringify(replies[replies.length - 1])} does not match ${expect.reply}`);
      if (expect.replies) expect.replies.forEach((pattern, i) => { if (pattern === null ? replies[i] !== null : !pattern.test(String(replies[i]))) throw new Error(`reply ${i} was ${JSON.stringify(replies[i])}, wanted ${pattern}`); });
      for (const [kind, rows] of [["money", who.money()], ["stock", who.stock()]]) {
        if (!expect[kind]) continue;
        for (const want of expect[kind]) if (!rows.some(row => matches(row, want))) throw new Error(`no ${kind} record like ${describe(want)} in ${describe(rows)}`);
        if (!expect.more && rows.length !== expect[kind].length) throw new Error(`${kind} records: ${describe(rows)}`);
      }
      if (expect.check) await expect.check(who, replies);
    } catch (error) { failures.push(`${label}\n    ${String(error.message).split("\n")[0]}`); }
  }
  return failures;
}
module.exports = { NOW, person, run, runTable, matches };
