"use strict";
const assert=require("node:assert/strict");
const test=require("node:test");
const fs=require("node:fs");
const path=require("node:path");
const {AccessControl}=require("../../nexus/identity/access-control.js");
const {ArtifactRepository}=require("../../nexus/storage/artifact-repository.js");
const {SyncRepository}=require("../../nexus/sync/repository.js");
const {ObservabilityRepository}=require("../../nexus/observability/event-repository.js");

function fakeDb(results=[]){const calls=[];const db={calls,async query(sql,params){calls.push({sql,params});return results.shift()||{rows:[],rowCount:1};},async transaction(work){calls.push({transaction:"begin"});return work(db);}};return db;}

test("production migration adds tenant identity, artifacts, schedules, and telemetry",()=>{
  const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/004_nexus_production_controls.sql"),"utf8");
  for(const table of ["nexus_organization_memberships","nexus_delegations","nexus_artifacts","nexus_schedules","nexus_observability_events"])
    assert.match(sql,new RegExp(`create table if not exists ${table}`));
  assert.match(sql,/enable row level security/g);
});

test("access control requires tenant membership, permission, and delegation",async()=>{
  const db=fakeDb([{rows:[{role:"caregiver",permissions:["health:read"]}]},{rows:[{delegation_id:"del_1"}]}]);
  const access=new AccessControl(db);
  const result=await access.authorize({tenantId:"tenant",actorId:"caregiver",subjectId:"patient",permission:"health:read",purpose:"care coordination"});
  assert.equal(result.authorized,true);assert.match(db.calls[0].sql,/tenant_id=\$1 and user_id=\$2/);assert.match(db.calls[1].sql,/subject_id=\$2 and delegate_id=\$3/);
  await assert.rejects(new AccessControl(fakeDb([{rows:[]}])).authorize({tenantId:"tenant",actorId:"outsider",permission:"tasks:read",purpose:"assist"}),/membership/i);
});

test("artifacts are tenant and owner scoped and deletion removes object reachability",async()=>{
  const db=fakeDb([{rows:[{artifact_id:"artifact_1"}]},{rows:[]}]);const repo=new ArtifactRepository(db);
  await repo.create({tenantId:"tenant",ownerId:"user",kind:"document",title:"Care plan",checksum:"sha256:x"});
  await repo.remove({tenantId:"tenant",ownerId:"user",artifactId:"artifact_1"});
  assert.match(db.calls[0].sql,/tenant_id,owner_id/);assert.match(db.calls[1].sql,/object_key=null/);
});

test("offline operations are idempotent and surface version conflicts",async()=>{
  const db=fakeDb([{rows:[]},{rows:[{sync_id:"sync_1",state:"conflict"}]}]);const sync=new SyncRepository(db);
  const result=await sync.apply({tenantId:"tenant",userId:"user",deviceId:"phone",operationId:"op_1",entityType:"form",entityId:"form_1",baseVersion:2,payload:{}},async()=>({version:3}));
  assert.equal(result.state,"conflict");assert.match(db.calls[1].sql,/tenant_id=\$1 and device_id=\$2 and operation_id=\$3/);assert.equal(db.calls[2].params[9],"conflict");
});

test("observability persists release identity and redacts sensitive metadata",async()=>{
  const db=fakeDb();const events=new ObservabilityRepository(db);
  await events.record({traceId:"trace",correlationId:"correlation",component:"tools",eventType:"tool.completed",outcome:"verified",metadata:{token:"secret",safe:"ok"}});
  assert.equal(db.calls[0].params[13].token,"[REDACTED]");assert.equal(db.calls[0].params[13].safe,"ok");assert.ok(db.calls[0].params[12]);
});
