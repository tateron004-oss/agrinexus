"use strict";
const assert=require("node:assert/strict");const test=require("node:test");const {createControlApi}=require("../../nexus/compat/control-api.js");
function context(p=[]){return{tenantId:"tenant",userId:"user",can:x=>p.includes(x)};}function runtime(){const calls=[];return{calls,devices:{register:async x=>(calls.push(["register",x]),x),revoke:async x=>(calls.push(["revoke",x]),true)},schedules:{create:async x=>(calls.push(["schedule",x]),x)},notifications:{enqueue:async x=>(calls.push(["notification",x]),x)},dataLifecycle:{requestDeletion:async x=>(calls.push(["deletion",x]),{request_id:`req_${x.subjectId}`,...x})},jobs:{enqueue:async x=>(calls.push(["job",x]),x)}};}
test("device controls remain bound to authenticated tenant and user",async()=>{const r=runtime(),api=createControlApi(r),q={context:context(["devices:write"]),body:{deviceId:"phone",platform:"android",capabilities:["push"]},params:{}};assert.equal((await api.registerDevice(q)).status,201);q.params.deviceId="phone";assert.equal((await api.revokeDevice(q)).body.revoked,true);assert.equal(r.calls[0][1].tenantId,"tenant");assert.equal(r.calls[1][1].userId,"user");});
test("durable reminders and notifications require permissions and idempotency",async()=>{const r=runtime(),api=createControlApi(r);await assert.rejects(api.createSchedule({context:context(),body:{timezone:"UTC",nextRunAt:new Date()}}),e=>e.code==="permission_denied");assert.equal((await api.createSchedule({context:context(["reminders:write"]),body:{timezone:"Africa/Nairobi",nextRunAt:"2026-09-01T08:00:00Z"}})).status,201);await assert.rejects(api.createNotification({context:context(["notifications:write"]),body:{channel:"push"}}),/Idempotency key/);});
// Confirmed: createSchedule accepted an arbitrary caller-supplied jobType
// with only "reminders:write" required -- the worker (nexus/workers/worker.js)
// dispatches purely by that string with no re-check of who created the
// schedule, so an ordinary reminders:write-only caller could inject
// "deletion.execute"/"retention.sweep" (privileged, internal-only job types)
// into their own schedule and have the worker actually run them later.
test("createSchedule rejects a jobType outside the user-schedulable allowlist, even with reminders:write",async()=>{const r=runtime(),api=createControlApi(r);await assert.rejects(api.createSchedule({context:context(["reminders:write"]),body:{jobType:"deletion.execute",timezone:"UTC",nextRunAt:new Date(),payload:{requestId:"del_1"}}}),e=>e.code==="invalid_input");await assert.rejects(api.createSchedule({context:context(["reminders:write"]),body:{jobType:"retention.sweep",timezone:"UTC",nextRunAt:new Date()}}),e=>e.code==="invalid_input");assert.equal(r.calls.length,0,"no schedule row must be created for a disallowed jobType");});
test("createSchedule still allows the one legitimate user-facing jobType, explicit or defaulted",async()=>{const r=runtime(),api=createControlApi(r);assert.equal((await api.createSchedule({context:context(["reminders:write"]),body:{jobType:"notifications.deliver",timezone:"UTC",nextRunAt:new Date()}})).status,201);assert.equal((await api.createSchedule({context:context(["reminders:write"]),body:{timezone:"UTC",nextRunAt:new Date()}})).status,201);assert.equal(r.calls.length,2);});
test("self deletion is allowed but cross-subject deletion requires elevation",async()=>{const r=runtime(),api=createControlApi(r);assert.equal((await api.requestDeletion({context:context(["privacy:delete"]),body:{}})).status,202);await assert.rejects(api.requestDeletion({context:context(["privacy:delete"]),body:{subjectId:"other"}}),e=>e.code==="permission_denied");const elevated={tenantId:"tenant",userId:"admin",can:()=>true};assert.equal((await api.requestDeletion({context:elevated,body:{subjectId:"other"}})).body.subjectId,"other");});
// Confirmed: "deletion.execute" is an internal-only job type that nothing else ever enqueues (see the createSchedule allowlist test above),
// so a queued deletion request would sit forever unless something kicks it off right here, the one moment nothing else will re-trigger it.
test("requesting a deletion immediately enqueues its execution, keyed to that request",async()=>{
  const r=runtime(),api=createControlApi(r);
  await api.requestDeletion({context:context(["privacy:delete"]),body:{}});
  const job=r.calls.find(call=>call[0]==="job")?.[1];
  assert.ok(job,"no job was enqueued");
  assert.equal(job.tenantId,"tenant"); assert.equal(job.jobType,"deletion.execute");
  assert.equal(job.payload.requestId,"req_user"); assert.equal(job.idempotencyKey,"deletion-execute:req_user");
});
test("a runtime with no job queue still records the deletion request (no crash)",async()=>{
  const r=runtime(); delete r.jobs; const api=createControlApi(r);
  assert.equal((await api.requestDeletion({context:context(["privacy:delete"]),body:{}})).status,202);
});
