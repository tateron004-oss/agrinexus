"use strict";
const assert=require("node:assert/strict"); const test=require("node:test"); const fs=require("node:fs"); const path=require("node:path");
const {DataLifecycleRepository}=require("../../nexus/security/data-lifecycle-repository.js");
function db(results=[]){const calls=[];const runtime={calls,async query(sql,params){calls.push({sql,params});return results.shift()||{rows:[]};},async transaction(work){return work(runtime);}};return runtime;}
test("lifecycle migration creates deletion, legal-hold, and restore evidence controls",()=>{const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/009_nexus_data_lifecycle.sql"),"utf8");for(const table of ["nexus_legal_holds","nexus_deletion_requests","nexus_backup_evidence"])assert.match(sql,new RegExp(`create table if not exists ${table}`));assert.match(sql,/enable row level security/);});
test("legal hold blocks erasure before any protected data is changed",async()=>{const x=db([{rows:[{subject_id:"user"}]},{rows:[{hold_id:"hold"}]},{rows:[]}]);const result=await new DataLifecycleRepository(x).executeDeletion({tenantId:"tenant",requestId:"request"});assert.equal(result.state,"blocked");assert.equal(x.calls.some(call=>/update nexus_records/.test(call.sql)),false);});
test("verified deletion erases record content and object pointers transactionally",async()=>{const x=db([{rows:[{subject_id:"user"}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);const result=await new DataLifecycleRepository(x).executeDeletion({tenantId:"tenant",requestId:"request"});assert.equal(result.state,"verified");assert.match(x.calls[2].sql,/data='\{\}'::jsonb/);assert.match(x.calls[3].sql,/object_key=null/);});

test("verified deletion erases this subject's memory items too (farm, health, companion, navigation, reminders data all live there)",async()=>{
  const x=db([{rows:[{subject_id:"owner-a"}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[{memory_id:"m1"},{memory_id:"m2"}]}]);
  const result=await new DataLifecycleRepository(x).executeDeletion({tenantId:"tenant-a",requestId:"request-a"});
  const erase=x.calls.find(call=>/delete from nexus_memory_items/.test(call.sql));
  assert.ok(erase); assert.deepEqual(erase.params,["tenant-a","owner-a"]);
  assert.doesNotMatch(erase.sql,/purpose\s*=|purpose\s+in/i,"an account-level erasure has no per-purpose carve-out, unlike the health toolkit's own self-service erase");
  assert.equal(result.state,"verified");
  assert.equal(result.verification.memoryItemsErased,true);
  assert.equal(result.verification.memoryItemsCount,2);
});
test("a legal hold blocks the memory-items erasure too, not just nexus_records",async()=>{
  const held=db([{rows:[{subject_id:"owner-a"}]},{rows:[{hold_id:"hold"}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:"tenant-a",requestId:"request-a"});
  assert.equal(held.calls.some(call=>/delete from nexus_memory_items/.test(call.sql)),false);
});
test("retention sweeps skip legal holds and use locked bounded batches",async()=>{const x=db([{rows:[{artifact_id:"art"}]}]);const rows=await new DataLifecycleRepository(x).purgeExpired({limit:900});assert.equal(rows.length,1);assert.match(x.calls[0].sql,/not exists/);assert.match(x.calls[0].sql,/for update skip locked/);assert.equal(x.calls[0].params[0],500);});
// Found live: the legal-hold check only matched tenant_id, unlike executeDeletion()'s own hold check just above
// (which correctly scopes to "subject_id is null or subject_id=<the specific person>") -- a hold on ONE subject
// silently blocked retention purging of every OTHER subject's artifacts in the same tenant.
test("retention sweeps' legal-hold check is scoped to the held subject's own artifacts, not the whole tenant",async()=>{const x=db([{rows:[{artifact_id:"art"}]}]);await new DataLifecycleRepository(x).purgeExpired({limit:10});const sql=x.calls[0].sql;assert.match(sql,/h\.subject_id is null or h\.subject_id=nexus_artifacts\.owner_id/,"a per-subject hold must only block that subject's own artifacts, matching executeDeletion's own (subject_id is null or subject_id=$2) pattern");});
test("backup evidence rejects unverifiable claims",async()=>{const repo=new DataLifecycleRepository(db());await assert.rejects(repo.recordBackupEvidence({releaseSha:"sha",backupId:"id",state:"restore_verified"}),/Valid backup evidence/);});
test("listStaleQueued finds only requests still queued past the staleness cutoff, bounded and ordered",async()=>{
  const x=db([{rows:[{tenant_id:"t1",request_id:"req_1"}]}]);
  const cutoff=new Date("2026-01-01T00:00:00Z");
  const rows=await new DataLifecycleRepository(x).listStaleQueued({staleBefore:cutoff,limit:900});
  assert.deepEqual(rows,[{tenant_id:"t1",request_id:"req_1"}]);
  assert.match(x.calls[0].sql,/state='queued'/); assert.match(x.calls[0].sql,/order by requested_at/);
  assert.deepEqual(x.calls[0].params,[cutoff,500],"limit is bounded the same way purgeExpired bounds its own limit");
});

test("account deletion clears version history within the same tenant and subject boundary", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  const historical = x.calls.find(call => /update nexus_record_versions/.test(call.sql));
  assert.ok(historical); assert.deepEqual(historical.params,['tenant-a','owner-a']);
  assert.match(historical.sql,/v.record_id=r.record_id and r.tenant_id=\$1 and \(r.subject_id=\$2 or \(r.subject_id is null and r.owner_id=\$2\)\)/);
  assert.match(historical.sql,/provenance='\{\}'::jsonb/);
  assert.equal(result.verification.recordVersionsErased,true);
  const held = db([{rows:[{subject_id:'owner-a'}]},{rows:[{hold_id:'hold'}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:'tenant-a',requestId:'request-a'});
  assert.equal(held.calls.some(call=>/update nexus_record_versions/.test(call.sql)),false);
});

// The general AI-agent layer's own tables -- found still untouched by the capability audit after conversations,
// documents and notifications were shipped: account deletion erased companion/farm/health/navigation data
// (nexus_memory_items) and the older nexus_records world, but not what the general agent writes on its own.
test("account deletion also erases conversations, messages, documents, document versions, and notifications", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[{conversation_id:'c1'}]},{rows:[]},{rows:[{document_id:'d1'},{document_id:'d2'}]},{rows:[]},{rows:[{notification_id:'n1'}]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');

  const conversations = x.calls.find(call => /update nexus_conversations/.test(call.sql));
  assert.ok(conversations); assert.deepEqual(conversations.params,['tenant-a','owner-a']);
  assert.match(conversations.sql,/state='deleted'/); assert.match(conversations.sql,/title=null/); assert.match(conversations.sql,/summary=null/);
  assert.equal(result.verification.conversationsErased,true);
  assert.equal(result.verification.conversationsCount,1);

  const messages = x.calls.find(call => /update nexus_messages/.test(call.sql));
  assert.ok(messages); assert.deepEqual(messages.params,['tenant-a','owner-a']);
  assert.match(messages.sql,/content='\{\}'::jsonb/); assert.match(messages.sql,/provenance='\{\}'::jsonb/);
  // Erased by ownership of the conversation OR direct authorship, so a person's own words in someone
  // else's shared conversation are also wiped -- not just messages inside conversations they own.
  assert.match(messages.sql,/actor_id=\$2/); assert.match(messages.sql,/conversation_id in/);
  assert.equal(result.verification.messagesErased,true);

  const documents = x.calls.find(call => /update nexus_documents/.test(call.sql));
  assert.ok(documents); assert.deepEqual(documents.params,['tenant-a','owner-a']);
  assert.match(documents.sql,/state='deleted'/); assert.match(documents.sql,/title=''/); assert.match(documents.sql,/metadata='\{\}'::jsonb/);
  assert.equal(result.verification.documentsErased,true);
  assert.equal(result.verification.documentsCount,2);

  const documentVersions = x.calls.find(call => /update nexus_document_versions/.test(call.sql));
  assert.ok(documentVersions); assert.deepEqual(documentVersions.params,['tenant-a','owner-a']);
  assert.match(documentVersions.sql,/content='\{\}'::jsonb/); assert.match(documentVersions.sql,/object_key=null/);
  assert.equal(result.verification.documentVersionsErased,true);

  const notifications = x.calls.find(call => /delete from nexus_notifications/.test(call.sql));
  assert.ok(notifications); assert.deepEqual(notifications.params,['tenant-a','owner-a']);
  assert.equal(result.verification.notificationsErased,true);
  assert.equal(result.verification.notificationsCount,1);
});

test("a legal hold blocks conversations/messages/documents/notifications erasure too, not just the older tables", async () => {
  const held = db([{rows:[{subject_id:'owner-a'}]},{rows:[{hold_id:'hold'}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:'tenant-a',requestId:'request-a'});
  for (const pattern of [/update nexus_conversations/,/update nexus_messages/,/update nexus_documents/,/update nexus_document_versions/,/delete from nexus_notifications/]) {
    assert.equal(held.calls.some(call=>pattern.test(call.sql)),false);
  }
});

// Found live: WorkspaceStateRepository.stage() (nexus/apps/workspace-state-repository.js) used to create records
// with no subjectId at all, silently leaving subject_id=NULL for "standard"-classification rows -- and SQL's NULL
// never equals anything, including itself, so a subject-scoped erasure query never matched those rows. Now fixed
// at the source, plus this defense-in-depth broadening so any future writer with the same mistake is still caught.
test("record and record-version erasure also catches rows with a NULL subject_id owned by the erasing account", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);
  await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  const records = x.calls.find(call => /update nexus_records set state='deleted'/.test(call.sql));
  assert.match(records.sql, /\(subject_id=\$2 or \(subject_id is null and owner_id=\$2\)\)/);
  const versions = x.calls.find(call => /update nexus_record_versions/.test(call.sql));
  assert.match(versions.sql, /\(r\.subject_id=\$2 or \(r\.subject_id is null and r\.owner_id=\$2\)\)/);
});

// Found live: nexus_devices (a real push endpoint URL + encrypted push key per registered device) and
// nexus_device_events were entirely absent from account erasure -- the only path that ever cleared them was the
// person explicitly revoking one device at a time. An account erasure left every never-manually-revoked device
// fully wired to receive push forever.
test("account deletion also revokes every device and erases device events", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[{device_id:'dev1'},{device_id:'dev2'}]},{rows:[{event_id:'evt1'}]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');

  const devices = x.calls.find(call => /update nexus_devices/.test(call.sql));
  assert.ok(devices); assert.deepEqual(devices.params,['tenant-a','owner-a']);
  assert.match(devices.sql,/state='revoked'/); assert.match(devices.sql,/push_endpoint=null/); assert.match(devices.sql,/push_key_ciphertext=null/);
  assert.equal(result.verification.devicesErased,true);
  assert.equal(result.verification.devicesCount,2);

  const deviceEvents = x.calls.find(call => /delete from nexus_device_events/.test(call.sql));
  assert.ok(deviceEvents); assert.deepEqual(deviceEvents.params,['tenant-a','owner-a']);
  assert.equal(result.verification.deviceEventsErased,true);
  assert.equal(result.verification.deviceEventsCount,1);
});

test("a legal hold blocks device erasure too, not just the older tables", async () => {
  const held = db([{rows:[{subject_id:'owner-a'}]},{rows:[{hold_id:'hold'}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:'tenant-a',requestId:'request-a'});
  for (const pattern of [/update nexus_devices/,/delete from nexus_device_events/]) {
    assert.equal(held.calls.some(call=>pattern.test(call.sql)),false);
  }
});

// Found live (export/compliance follow-up audit): nexus_consents was entirely absent from account erasure --
// recordConfirmedConsent() (behavior-spine.js) stores the real recipient address (phone/email a message or
// call was actually sent to) and up to 200 characters of the person's own literal confirmation text (which
// routinely echoes the outbound message content itself, per the confirmation prompt's own design). An account
// erasure left every consent record's PII-bearing columns live indefinitely under a nominally "erased" subject.
test("account deletion also revokes consents and wipes the recipient address and confirmation text", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},
    {rows:[{consent_id:'con1'},{consent_id:'con2'}]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');

  const consents = x.calls.find(call => /update nexus_consents/.test(call.sql));
  assert.ok(consents); assert.deepEqual(consents.params,['tenant-a','owner-a']);
  assert.match(consents.sql,/state='revoked'/); assert.match(consents.sql,/revoked_at=now\(\)/);
  assert.match(consents.sql,/recipient=null/); assert.match(consents.sql,/receipt='\{\}'::jsonb/);
  assert.match(consents.sql,/state<>'revoked'/);
  assert.equal(result.verification.consentsErased,true);
  assert.equal(result.verification.consentsCount,2);
});

test("a legal hold blocks consent erasure too, not just the older tables", async () => {
  const held = db([{rows:[{subject_id:'owner-a'}]},{rows:[{hold_id:'hold'}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:'tenant-a',requestId:'request-a'});
  assert.equal(held.calls.some(call=>/update nexus_consents/.test(call.sql)),false);
});

// Found live (fresh-module audit): nexus_sync_operations (a real per-device offline-sync history -- whatever
// entity a person's device queued while offline, e.g. a health reading or business record) was entirely
// absent from account erasure, the same asymmetry already closed for every other table in this file.
test("account deletion also erases this subject's sync-operation history", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},
    {rows:[]},
    {rows:[{sync_id:'sync1'},{sync_id:'sync2'}]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');
  const syncOps = x.calls.find(call => /delete from nexus_sync_operations/.test(call.sql));
  assert.ok(syncOps); assert.deepEqual(syncOps.params,['tenant-a','owner-a']);
  assert.equal(result.verification.syncOperationsErased,true);
  assert.equal(result.verification.syncOperationsCount,2);
});

test("a legal hold blocks sync-operation erasure too, not just the older tables", async () => {
  const held = db([{rows:[{subject_id:'owner-a'}]},{rows:[{hold_id:'hold'}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:'tenant-a',requestId:'request-a'});
  assert.equal(held.calls.some(call=>/delete from nexus_sync_operations/.test(call.sql)),false);
});

// Found live: nexus_tasks/nexus_task_steps/nexus_tool_executions were entirely absent from account erasure --
// every task_document (a person's own goal text and outcome), step input/output, and raw tool-execution
// request/response (the real PII passed to and from every executor) survived a "verified" erasure in full.
test("account deletion also erases task content, step content, and tool-execution content", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[{task_id:'tsk1'},{task_id:'tsk2'}]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');

  const tasks = x.calls.find(call => /update nexus_tasks/.test(call.sql));
  assert.ok(tasks); assert.deepEqual(tasks.params,['tenant-a','owner-a']);
  assert.match(tasks.sql,/goal='\[erased\]'/); assert.match(tasks.sql,/task_document='\{\}'::jsonb/); assert.match(tasks.sql,/outcome=null/);
  assert.equal(result.verification.tasksErased,true);
  assert.equal(result.verification.tasksCount,2);

  const steps = x.calls.find(call => /update nexus_task_steps/.test(call.sql));
  assert.ok(steps); assert.deepEqual(steps.params,['tenant-a','owner-a']);
  assert.match(steps.sql,/title='\[erased\]'/); assert.match(steps.sql,/input='\{\}'::jsonb/); assert.match(steps.sql,/output=null/); assert.match(steps.sql,/error=null/);
  assert.match(steps.sql,/s\.task_id=t\.task_id and t\.tenant_id=\$1 and t\.owner_id=\$2/, "scoped through the parent task's own ownership, like record_versions is through nexus_records");
  assert.equal(result.verification.taskStepsErased,true);

  const executions = x.calls.find(call => /update nexus_tool_executions/.test(call.sql));
  assert.ok(executions); assert.deepEqual(executions.params,['tenant-a','owner-a']);
  assert.match(executions.sql,/request='\{\}'::jsonb/); assert.match(executions.sql,/response=null/); assert.match(executions.sql,/error=null/); assert.match(executions.sql,/receipt=null/); assert.match(executions.sql,/provider_request_id=null/);
  assert.match(executions.sql,/e\.task_id=t\.task_id and e\.tenant_id=\$1/);
  // Scoped by the task's owner OR the row's own actor_id, so a delegate's own submitted request/response
  // content on someone else's task is erased too, the same way nexus_messages already handles actor_id vs
  // conversation ownership above.
  assert.match(executions.sql,/t\.owner_id=\$2 or e\.actor_id=\$2/);
  assert.equal(result.verification.toolExecutionsErased,true);

  const evidence = x.calls.find(call => /update nexus_outcome_evidence/.test(call.sql));
  assert.ok(evidence); assert.deepEqual(evidence.params,['tenant-a','owner-a']);
  assert.match(evidence.sql,/observed='\{\}'::jsonb/); assert.match(evidence.sql,/locator=null/); assert.match(evidence.sql,/checksum=null/);
  assert.match(evidence.sql,/x\.task_id=t\.task_id and t\.tenant_id=\$1 and t\.owner_id=\$2/);
  assert.equal(result.verification.outcomeEvidenceErased,true);

  const verifications = x.calls.find(call => /update nexus_outcome_verifications/.test(call.sql));
  assert.ok(verifications); assert.deepEqual(verifications.params,['tenant-a','owner-a']);
  assert.match(verifications.sql,/details='\{\}'::jsonb/);
  assert.match(verifications.sql,/x\.task_id=t\.task_id and t\.tenant_id=\$1 and t\.owner_id=\$2/);
  assert.equal(result.verification.outcomeVerificationsErased,true);
});

// Found live (data-lifecycle full-file audit): nexus_predictions (real per-person ML prediction data,
// including the explicit "health"/"clinical" domain path) was never referenced anywhere in this file, and
// carries a direct subject_id column so no join is needed.
test("account deletion also erases model prediction content, scoped directly by subject_id", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[{prediction_id:'pred1'}]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');
  const predictions = x.calls.find(call => /update nexus_predictions/.test(call.sql));
  assert.ok(predictions); assert.deepEqual(predictions.params,['tenant-a','owner-a']);
  assert.match(predictions.sql,/input_provenance='\{\}'::jsonb/); assert.match(predictions.sql,/output='\{\}'::jsonb/);
  assert.match(predictions.sql,/where tenant_id=\$1 and subject_id=\$2/);
  assert.equal(result.verification.predictionsErased,true);
  assert.equal(result.verification.predictionsCount,1);
});

test("a legal hold blocks outcome-evidence, outcome-verification, and prediction erasure too", async () => {
  const held = db([{rows:[{subject_id:'owner-a'}]},{rows:[{hold_id:'hold'}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:'tenant-a',requestId:'request-a'});
  for (const pattern of [/update nexus_outcome_evidence/,/update nexus_outcome_verifications/,/update nexus_predictions/]) {
    assert.equal(held.calls.some(call=>pattern.test(call.sql)),false);
  }
});

test("a legal hold blocks task, step, and tool-execution erasure too, not just the older tables", async () => {
  const held = db([{rows:[{subject_id:'owner-a'}]},{rows:[{hold_id:'hold'}]}]);
  await new DataLifecycleRepository(held).executeDeletion({tenantId:'tenant-a',requestId:'request-a'});
  for (const pattern of [/update nexus_tasks/,/update nexus_task_steps/,/update nexus_tool_executions/,/update nexus_schedules/]) {
    assert.equal(held.calls.some(call=>pattern.test(call.sql)),false);
  }
});

// Found live: ScheduleRepository.dispatchDue only ever looks at state='active', and nothing in account erasure
// ever touched nexus_schedules -- a recurring alert/brief/reminder kept dispatching forever after "erasure."
test("account deletion also cancels this subject's recurring schedules and wipes their payload", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[{schedule_id:'sch1'}]},
    {rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');
  const schedules = x.calls.find(call => /update nexus_schedules/.test(call.sql));
  assert.ok(schedules); assert.deepEqual(schedules.params,['tenant-a','owner-a']);
  assert.match(schedules.sql,/state='cancelled'/); assert.match(schedules.sql,/payload='\{\}'::jsonb/); assert.match(schedules.sql,/state<>'cancelled'/);
  assert.equal(result.verification.schedulesCancelled,true);
  assert.equal(result.verification.schedulesCount,1);
});

test("artifact deletion wipes title and metadata, not just the object pointer", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);
  await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  const artifacts = x.calls.find(call => /update nexus_artifacts/.test(call.sql));
  assert.ok(artifacts);
  assert.match(artifacts.sql,/title=''/); assert.match(artifacts.sql,/metadata='\{\}'::jsonb/); assert.match(artifacts.sql,/object_key=null/);
});

// Found live (restriction-bypass follow-up audit): nulling object_key was the only thing that ever happened
// to a real artifact's bytes -- nothing ever told the actual S3 object to delete itself, so "erased" files
// stayed live in the bucket forever, orphaned but fully intact.
test("executeDeletion purges each artifact's real object bytes from object storage, not just the DB pointer", async () => {
  const removed = [];
  const objectStorage = { remove: async key => { removed.push(key); return true; } };
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[{object_key:'nexus/t/owner-a/art1/f'},{object_key:'nexus/t/owner-a/art2/f'}]}]);
  const result = await new DataLifecycleRepository(x, { objectStorage }).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');
  assert.deepEqual(removed.sort(), ['nexus/t/owner-a/art1/f','nexus/t/owner-a/art2/f']);
  assert.equal(result.verification.artifactObjectsPurged, 2);
  assert.equal(result.verification.artifactObjectPurgeFailures, undefined);
  // Purged after the transaction commits, so it's a separate patch call to the already-verified request row --
  // not the in-transaction "state='verified'" write, which happens before the purge can even run.
  const patch = x.calls.find(call => /update nexus_deletion_requests set verification=\$3/.test(call.sql) && !/state='verified'/.test(call.sql));
  assert.ok(patch, "the purge outcome must be recorded on the request, not silently dropped");
  assert.equal(patch.params[2].artifactObjectsPurged, 2);
});

test("a purge failure for one artifact's object bytes is recorded, not silently swallowed, and does not undo the DB erasure", async () => {
  const objectStorage = { remove: async key => { if (key.includes('art2')) throw new Error('S3 unavailable'); return true; } };
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[{object_key:'nexus/t/owner-a/art1/f'},{object_key:'nexus/t/owner-a/art2/f'}]}]);
  const result = await new DataLifecycleRepository(x, { objectStorage }).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified', "the DB erasure must still succeed even when the S3 cleanup partially fails");
  assert.equal(result.verification.artifactObjectsPurged, 1);
  assert.equal(result.verification.artifactObjectPurgeFailures, 1);
});

test("without object storage configured, no purge is attempted and nothing throws", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[{object_key:'nexus/t/owner-a/art1/f'}]}]);
  const result = await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  assert.equal(result.state,'verified');
  assert.equal(result.verification.artifactObjectsPurged, undefined);
  const extraPatch = x.calls.filter(call => /update nexus_deletion_requests set verification=\$3/.test(call.sql) && !/state='verified'/.test(call.sql));
  assert.equal(extraPatch.length, 0);
});

test("purgeExpired also purges the real object bytes of every artifact it marks deleted", async () => {
  const removed = [];
  const objectStorage = { remove: async key => { removed.push(key); return true; } };
  const x = db([{rows:[{artifact_id:'art1',object_key:'nexus/t/u/art1/f'},{artifact_id:'art2',object_key:'nexus/t/u/art2/f'}]}]);
  const rows = await new DataLifecycleRepository(x, { objectStorage }).purgeExpired({ limit: 10 });
  assert.equal(rows.length, 2);
  assert.deepEqual(removed.sort(), ['nexus/t/u/art1/f','nexus/t/u/art2/f']);
});

// Found live (job-queue/schedule-dispatch follow-up audit): a deletion
// request whose executeDeletion() deterministically fails never left
// state='queued', and deletion.sweep's own listStaleQueued has no way to
// tell "genuinely lost job" apart from "already tried and permanently
// fails" -- so the same request got re-enqueued forever with no terminal
// state ever reached, despite the schema reserving 'failed' for exactly
// this. markFailed() is the missing piece: called only once a job has
// exhausted its own retries (see the deletion.execute handler test below).
test("markFailed transitions a still-queued request to the schema's reserved failed state, recording why", async () => {
  const x = db([{rows:[{request_id:"req_1",state:"failed"}]}]);
  const result = await new DataLifecycleRepository(x).markFailed({ tenantId: "tenant-a", requestId: "req_1", error: "constraint violation" });
  assert.equal(result.state, "failed");
  assert.match(x.calls[0].sql, /state='failed'/);
  assert.match(x.calls[0].sql, /where tenant_id=\$1 and request_id=\$2 and state='queued'/);
  assert.deepEqual(x.calls[0].params, ["tenant-a", "req_1", { reason: "execution_failed", error: "constraint violation" }]);
});
test("markFailed requires a tenant and request id", async () => {
  await assert.rejects(new DataLifecycleRepository(db()).markFailed({ requestId: "req_1" }), /tenant and request/);
});
