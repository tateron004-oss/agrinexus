"use strict";
const assert=require("node:assert/strict"); const test=require("node:test"); const fs=require("node:fs"); const path=require("node:path");
const {DataLifecycleRepository}=require("../../nexus/security/data-lifecycle-repository.js");
function db(results=[]){const calls=[];const runtime={calls,async query(sql,params){calls.push({sql,params});return results.shift()||{rows:[]};},async transaction(work){return work(runtime);}};return runtime;}
test("lifecycle migration creates deletion, legal-hold, and restore evidence controls",()=>{const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/009_nexus_data_lifecycle.sql"),"utf8");for(const table of ["nexus_legal_holds","nexus_deletion_requests","nexus_backup_evidence"])assert.match(sql,new RegExp(`create table if not exists ${table}`));assert.match(sql,/enable row level security/);});
test("legal hold blocks erasure before any protected data is changed",async()=>{const x=db([{rows:[{subject_id:"user"}]},{rows:[{hold_id:"hold"}]},{rows:[]}]);const result=await new DataLifecycleRepository(x).executeDeletion({tenantId:"tenant",requestId:"request"});assert.equal(result.state,"blocked");assert.equal(x.calls.some(call=>/update nexus_records/.test(call.sql)),false);});
test("verified deletion erases record content and object pointers transactionally",async()=>{const x=db([{rows:[{subject_id:"user"}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);const result=await new DataLifecycleRepository(x).executeDeletion({tenantId:"tenant",requestId:"request"});assert.equal(result.state,"verified");assert.match(x.calls[2].sql,/data='\{\}'::jsonb/);assert.match(x.calls[3].sql,/object_key=null/);});

test("verified deletion erases this subject's memory items too (farm, health, companion, navigation, reminders data all live there)",async()=>{
  const x=db([{rows:[{subject_id:"owner-a"}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[{memory_id:"m1"},{memory_id:"m2"}]}]);
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
  assert.match(historical.sql,/v.record_id=r.record_id and r.tenant_id=\$1 and r.subject_id=\$2/);
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
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},
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

test("artifact deletion wipes title and metadata, not just the object pointer", async () => {
  const x = db([{rows:[{subject_id:'owner-a'}]},{rows:[]},{rows:[]},{rows:[]},{rows:[]},{rows:[]}]);
  await new DataLifecycleRepository(x).executeDeletion({ tenantId:'tenant-a', requestId:'request-a' });
  const artifacts = x.calls.find(call => /update nexus_artifacts/.test(call.sql));
  assert.ok(artifacts);
  assert.match(artifacts.sql,/title=''/); assert.match(artifacts.sql,/metadata='\{\}'::jsonb/); assert.match(artifacts.sql,/object_key=null/);
});
