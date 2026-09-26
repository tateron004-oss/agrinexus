"use strict";
const assert=require("node:assert/strict");const test=require("node:test");const fs=require("node:fs");const path=require("node:path");
const {RecordRepository}=require("../../nexus/data/record-repository.js");
const {WorkspaceMigrationRepository,REQUIRED_PROOFS}=require("../../nexus/apps/migration-repository.js");
function fakeDb(results=[]){const calls=[];const db={calls,async query(sql,params){calls.push({sql,params});return results.shift()||{rows:[]};},async transaction(work){return work(db);}};return db;}
test("migration supplies versioned tenant records and durable workspace cutover",()=>{const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/007_nexus_workspace_records.sql"),"utf8");for(const table of ["nexus_records","nexus_record_versions","nexus_workspace_migrations"])assert.match(sql,new RegExp(`create table if not exists ${table}`));assert.match(sql,/enable row level security/);});
test("regulated records require a subject and retain immutable versions",async()=>{const db=fakeDb([{rows:[{record_id:"rec_1",version:1}]}]);const repo=new RecordRepository(db);await assert.rejects(repo.create({tenantId:"t",ownerId:"u",workspaceId:"health",recordType:"observation",classification:"health",data:{}}),/subject/);await repo.create({tenantId:"t",ownerId:"u",subjectId:"p",workspaceId:"health",recordType:"observation",classification:"health",data:{bp:"140/90"},provenance:{source:"patient"}});assert.match(db.calls[0].sql,/insert into nexus_records/);assert.match(db.calls[1].sql,/nexus_record_versions/);});
test("record updates enforce optimistic concurrency and tenant scope",async()=>{const db=fakeDb([{rows:[{record_id:"rec_1",version:2}]}]);const repo=new RecordRepository(db);await repo.update({tenantId:"t",recordId:"rec_1",expectedVersion:1,actorId:"u",data:{value:2}});assert.match(db.calls[0].sql,/tenant_id=\$1 and record_id=\$2 and version=\$3/);assert.equal(db.calls[1].params[2],2);});

// Found live: every proactive-nudge worker sweep re-checked its own cooldown with a plain list() and only wrote
// its marker via create() AFTER independently creating a real autonomous task -- two concurrent sweeps racing for
// the same subject could both pass that check before either had written a marker. claimCooldown() closes that by
// re-checking and reserving under one advisory lock, in a single transaction.
test("claimCooldown reserves the window under an advisory lock when nothing recent exists, and returns the reserved record",async()=>{
  const db=fakeDb([{rows:[]},{rows:[]},{rows:[{record_id:"rec_1",tenant_id:"t",subject_id:"p",owner_id:"p",workspace_id:"w",record_type:"nudge",classification:"standard",data:{reason:"stale"},provenance:{}}]},{rows:[]}]);
  const repo=new RecordRepository(db);
  const result=await repo.claimCooldown({tenantId:"t",ownerId:"p",subjectId:"p",workspaceId:"w",recordType:"nudge",cooldownMs:1000,data:{reason:"stale"}});
  assert.equal(result.record_id,"rec_1");
  assert.match(db.calls[0].sql,/pg_advisory_xact_lock/);
  assert.deepEqual(db.calls[0].params,["record-cooldown:t:w:nudge:p"]);
  assert.match(db.calls[1].sql,/select updated_at from nexus_records where/);
  assert.match(db.calls[2].sql,/insert into nexus_records/);
  assert.match(db.calls[3].sql,/insert into nexus_record_versions/);
});

test("claimCooldown refuses the window and inserts nothing when a recent marker is still within the cooldown",async()=>{
  const db=fakeDb([{rows:[]},{rows:[{updated_at:new Date().toISOString()}]}]);
  const repo=new RecordRepository(db);
  const result=await repo.claimCooldown({tenantId:"t",ownerId:"p",subjectId:"p",workspaceId:"w",recordType:"nudge",cooldownMs:7*24*60*60*1000,data:{}});
  assert.equal(result,null);
  assert.equal(db.calls.filter(call=>/insert/.test(call.sql)).length,0,"a refused claim must never write anything");
});

test("attachTask fills in the real task once claimCooldown has already reserved the window",async()=>{
  const db=fakeDb([{rows:[]}]);
  const repo=new RecordRepository(db);
  await repo.attachTask({tenantId:"t",recordId:"rec_1",taskId:"tsk_1"});
  assert.match(db.calls[0].sql,/update nexus_records set task_id=\$3/);
  assert.deepEqual(db.calls[0].params,["t","rec_1","tsk_1"]);
});

// A fake db whose advisory lock genuinely serializes concurrent transactions (a held lock only releases when its
// OWN transaction's work finishes, matching real Postgres blocking behavior), and whose nexus_records table is a
// real in-memory array evaluated against claimCooldown()'s actual WHERE clause -- not just a canned response
// queue -- so this proves the real repository method, not a mock of it, closes the race.
function lockingRecordsDb(){
  const rows=[]; const locks=new Map();
  const db={rows,
    async transaction(fn){
      let release=null;
      const trx=Object.create(db);
      trx.query=async(sql,params)=>{
        if(/pg_advisory_xact_lock/.test(sql)){
          const key=params[0]; const ahead=locks.get(key)||Promise.resolve();
          let myRelease; const held=new Promise(resolve=>{myRelease=resolve;});
          locks.set(key,ahead.then(()=>held)); await ahead; release=myRelease; return {rows:[]};
        }
        return db.query(sql,params);
      };
      try{ return await fn(trx); } finally{ if(release) release(); }
    },
    async query(sql,params){
      if(/select updated_at from nexus_records/.test(sql)){
        // The real WHERE clause appends subject_id/owner_id/workspace_id/record_type in that fixed order, only
        // when the corresponding value was truthy -- so which columns are present in the SQL text tells us,
        // positionally, which column each param after tenantId belongs to.
        const columns=["subject_id","owner_id","workspace_id","record_type"].filter(col=>new RegExp(`${col}=\\$`).test(sql));
        const [tenantId,...rest]=params;
        const match=rows.filter(row=>row.tenant_id===tenantId&&columns.every((col,i)=>row[col]===rest[i]));
        match.sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at));
        return {rows:match[0]?[{updated_at:match[0].updated_at}]:[]};
      }
      if(/insert into nexus_records/.test(sql)){
        const row={record_id:params[0],tenant_id:params[1],subject_id:params[2],owner_id:params[3],workspace_id:params[4],record_type:params[5],classification:params[6],data:params[7],provenance:params[8],updated_at:new Date().toISOString()};
        rows.push(row); return {rows:[row]};
      }
      if(/insert into nexus_record_versions/.test(sql)) return {rows:[]};
      throw new Error("unexpected SQL: "+sql.slice(0,80));
    }};
  return db;
}

test("two concurrent claimCooldown calls for the same subject only reserve the window once, not twice",async()=>{
  const db=lockingRecordsDb();
  const repo=new RecordRepository(db);
  const claim=()=>repo.claimCooldown({tenantId:"t",ownerId:"p",subjectId:"p",workspaceId:"w",recordType:"nudge",cooldownMs:7*24*60*60*1000,data:{}});
  const [first,second]=await Promise.all([claim(),claim()]);
  const outcomes=[first,second];
  assert.equal(outcomes.filter(Boolean).length,1,"exactly one of the two racing claims may succeed");
  assert.equal(outcomes.filter(result=>result===null).length,1,"the loser must see the window as already taken, not also reserve it");
  assert.equal(db.rows.length,1,"only one marker record may exist, not two");
});
test("workspace cannot cut over without exact-release proofs and rollback",async()=>{const db=fakeDb([{rows:[{workspace_id:"health",state:"authoritative"}]}]);const repo=new WorkspaceMigrationRepository(db);const releaseSha="a".repeat(40);await assert.rejects(repo.activate({workspaceId:"health",proofs:{contract:true},releaseSha}),/rollback|proof/i);const proofs=Object.fromEntries(REQUIRED_PROOFS.map(k=>[k,{state:"verified",evidenceId:k,releaseSha}]));const result=await repo.activate({workspaceId:"health",proofs,releaseSha,rollbackRef:"refs/tags/nexus-before-health"});assert.equal(result.state,"authoritative");assert.match(db.calls[0].sql,/state='authoritative'/);assert.equal(db.calls[0].params[1].rollback.ref,"refs/tags/nexus-before-health");});
