"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");
const { CASES } = require("./swahili-bookkeeping-cases.js");

const NOW = new Date("2026-10-07T09:00:00Z"); // Wednesday 7 October 2026 in Nairobi

// Runs one case: each sentence is said in turn to a fresh person. Returns the replies, the money records and the farm log.
async function runCase(say, { seed = false } = {}) {
  const store = fakeFarmStore(); const memory = fakeMemory();
  if (seed) await store.add({ tenantId: "t1", userId: "u1", collection: "field", data: { name: "Home", status: "active" } });
  const replies = [];
  for (const text of [].concat(say)) replies.push(await farmWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory, nameOf: async () => "Amina" }));
  const rows = store.rows.filter(row => !row.deleted && row.collection === "money").map(row => row.data);
  // The shared fake keeps its own farm log (it returns a copy each time), so what was written is read back from it.
  return { replies, rows, log: (await memory.listFarmEntries()).map(entry => entry.content) };
}
const subset = (actual, expected) => Object.entries(expected).every(([key, value]) => actual[key] === value);

test(`the Swahili bookkeeping phrases (${CASES.length}) save what was said and answer in Swahili`, async () => {
  assert.ok(CASES.length >= 120, `table size ${CASES.length}`);
  const failures = [];
  for (const [say, expect] of CASES) {
    const label = [].concat(say).join(" / ");
    try {
      const { replies, rows, log } = await runCase(say, { seed: expect.seed });
      if (expect.reply) assert.match(String(replies[replies.length - 1]), expect.reply, "reply");
      if (expect.replies) expect.replies.forEach((pattern, i) => (pattern === null ? assert.equal(replies[i], null, `reply ${i} is left to normal planning`) : assert.match(String(replies[i]), pattern)));
      if (expect.rows) {
        for (const want of expect.rows) assert.ok(rows.some(row => subset(row, want)), `no record like ${JSON.stringify(want)} in ${JSON.stringify(rows)}`);
        if (!expect.more) assert.equal(rows.length, expect.rows.length, `records: ${JSON.stringify(rows)}`);
      }
      if (expect.log) for (const want of expect.log) assert.ok(log.some(entry => subset(entry, want)), `no farm-log reading like ${JSON.stringify(want)} in ${JSON.stringify(log)}`);
    } catch (error) { failures.push(`${label}\n    ${String(error.message).split("\n")[0]}`); }
  }
  assert.equal(failures.length, 0, `\n${failures.join("\n")}`);
});

test("a Swahili reply never carries English record-keeping words, and a credit sale is the same record the English tool keeps", async () => {
  const swahili = await runCase(["nimemuuzia Mama Njeri mahindi elfu mbili kwa mkopo", "Mama Njeri amelipa 500", "nani ananidai"]);
  const english = await runCase(["sold maize to Mama Njeri for 2000 on credit", "Mama Njeri paid 500", "who owes me"]);
  const strip = row => { const { note, field, ...rest } = row; void note; void field; return rest; };
  assert.deepEqual(swahili.rows.map(strip), english.rows.map(strip), "the money records are the same in either language");
  for (const reply of swahili.replies) assert.doesNotMatch(String(reply), /Recorded|Owed to you|paid|credit/);
  const owed = await runCase(["nadaiwa 5000 na msambazaji", "nina deni la nani", "nimemlipa msambazaji 2000"]);
  const englishOwed = await runCase(["bought fertiliser from Msambazaji for 5000 on credit", "who do I owe", "I paid Msambazaji 2000"]);
  assert.equal(owed.rows[0].owing, englishOwed.rows[0].owing, "paying part of a debt lowers what is owed, exactly as in English");
});

test("every Swahili yes and no word is understood by the shared matchers", () => {
  const { YES_SW, NO_SW } = require("../../nexus/i18n/swahili-words.js");
  for (const word of ["ndiyo", "ndio", "sawa", "naam", "Ndiyo", "sawa kabisa", "endelea"]) assert.ok(YES_SW.test(word), word);
  for (const word of ["hapana", "la", "siyo", "sitaki", "Hapana", "acha", "usifanye"]) assert.ok(NO_SW.test(word), word);
  for (const word of ["hapana ndiyo", "nimeuza", "laki"]) { assert.ok(!YES_SW.test(word), word); assert.ok(!NO_SW.test(word), word); }
});
