"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fields = require("../../nexus/farmwork/fields.js");
const { fakeFarmStore } = require("./farmwork-fake.js");

// Found by an independent capability audit: "I planted maize in North on Friday", said on Monday 5 October 2026, was saved as 9 October 2025 (the coming Friday, then moved back a year) and
// "I planted maize in East shamba last week" was saved as today. A past planting named by a weekday is the one that has passed, a week back at most.

async function plant(text, today = "2026-10-05") {
  const store = fakeFarmStore();
  await store.add({ tenantId: "t1", userId: "u1", collection: "field", data: { name: "North" } });
  const reply = await fields.handle({ store, tenantId: "t1", userId: "u1", today, text, farmEntries: async () => [] });
  const field = (await store.list({ tenantId: "t1", userId: "u1", collection: "field" }))[0];
  return { reply, planted: field.data.planted };
}

test("a planting on a weekday that is still ahead this week is last week's, not a year ago", async () => {
  assert.equal((await plant("I planted maize in North on Friday")).planted, "2026-10-02", "Monday 5 October: Friday was the 2nd");
});

test("'last week' with no day is a week ago, and 'today' stays today", async () => {
  assert.equal((await plant("I planted maize in North last week")).planted, "2026-09-28");
  assert.equal((await plant("I planted maize in North today")).planted, "2026-10-05");
  assert.equal((await plant("I planted maize in North yesterday")).planted, "2026-10-04");
});

test("a date said with a month still means the one that has passed, and a plan stays a plan", async () => {
  assert.equal((await plant("I planted maize in North on 12 March")).planted, "2026-03-12");
  assert.equal((await plant("I planted maize in North on 12 March 2025")).planted, "2025-03-12");
  assert.equal((await plant("plant maize in North on 12 March")).planted, "2027-03-12", "a plan for next March is kept as said");
});
