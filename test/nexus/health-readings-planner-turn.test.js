"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { createMemoryRecords } = require("../../nexus/health/memory-records.js");
const { createHealthRecordExecutor } = require("../../nexus/health/executor.js");

// The planner's own turn for readings saved through the planner (record store): shown, deleted and corrected with no AI model, scoped to the person asking. A fake store with the real store's scoping.

const TENANT = "tenant_a";
const ME = "00000000-0000-4000-8000-000000000001";

const save = (records, input) => createHealthRecordExecutor({ records })({ input, context: { tenantId: TENANT, userId: ME }, taskId: null });
const live = records => records.rows.filter(row => !row.deleted_at && row.record_type === "health_observation");
function planner(records) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked about readings"); } };
  return new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: null, healthReadings: { records } });
}
const ask = (thePlanner, text, extra = {}, context = {}) => thePlanner.plan({ command: { text, tenantId: TENANT, actorId: ME, ...extra }, context: { timeZone: "Africa/Nairobi", ...context } });

test("the planner answers 'show my blood pressure readings' and 'delete my last reading' from the record store, with no AI model", async () => {
  const records = createMemoryRecords();
  await save(records, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const p = planner(records);
  const shown = await ask(p, "show my blood pressure readings");
  assert.equal(shown.application, "conversation"); assert.deepEqual(shown.steps, []);
  assert.match(shown.response, /150 over 95/);
  const asked = await ask(p, "delete my last reading");
  assert.match(asked.response, /Shall I delete it\?/);
  assert.equal(live(records).length, 1);
  const done = await ask(p, "yes");
  assert.match(done.response, /Done\. I deleted your blood pressure reading 150 over 95/);
  assert.equal(live(records).length, 0);
  const whoSees = await ask(p, "who can see my health information");
  assert.match(whoSees.response, /saved under your own account/);
});

test("the planner leaves the spoken path to its own route, and an account that may not write health records cannot delete", async () => {
  const records = createMemoryRecords();
  await save(records, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const p = planner(records);
  const spoken = await ask(p, "show my blood pressure readings", {}, { deterministicOnly: true });
  assert.equal(spoken.deferred, true, "left to the spoken path, which sees both kinds of reading together");
  const refused = await ask(p, "delete my last reading", {}, { isRestrictedFrom: name => name === "health-record-write" });
  assert.match(refused.response, /cannot use that action here/);
  assert.equal(live(records).length, 1);
});

test("a planner with no record store behaves as it did, and an unreachable store is said plainly", async () => {
  const records = createMemoryRecords();
  await save(records, { readingType: "blood-pressure", systolic: 150, diastolic: 95 });
  const broken = { ...records, list: async () => { throw new Error("down"); } };
  const said = await ask(planner(broken), "delete all my health records");
  assert.match(said.response, /have not shown, changed or deleted anything/);
  assert.equal(live(records).length, 1);
  const noStore = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("model asked"); } }, tools: { list: async () => [] }, applications: { list: () => [] }, memory: null });
  await assert.rejects(ask(noStore, "show my blood pressure readings"), /model asked/);
});
