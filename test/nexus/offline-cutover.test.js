"use strict";
const test=require("node:test");const assert=require("node:assert/strict");
const {SyncRepository}=require("../../nexus/sync/repository.js");
const {WorkspaceCutoverPolicy}=require("../../nexus/apps/cutover-policy.js");
const {createSyncApi,applyRecord}=require("../../nexus/compat/sync-api.js");
const {registerLegacyTools}=require("../../nexus/compat/legacy-provider-adapter.js");
function db(results=[]){const calls=[];const value={calls,async query(sql,params){calls.push({sql,params});return results.shift()||{rows:[]};},async transaction(work){return work(value);}};return value;}
const context={tenantId:"tenant-1",userId:"user-1",can:p=>["sync:write","sync:read"].includes(p),hasRole:()=>false};
test("offline sync is idempotent and records version conflicts without overwriting server state",async()=>{const store=db([{rows:[]},{rows:[{record_id:"rec-1",version:3}]},{rows:[{sync_id:"syn-1",state:"conflict"}]}]);const repo=new SyncRepository(store);let applied=false;const result=await repo.apply({tenantId:"tenant-1",userId:"user-1",deviceId:"device-1",operationId:"op-1",entityType:"record",entityId:"rec-1",baseVersion:2,payload:{}},async({trx,phase})=>{if(phase==="apply")applied=true;return phase==="inspect"?(await trx.query("record",[])).rows[0]:null;});assert.equal(result.state,"conflict");assert.equal(applied,false);assert.equal(store.calls.some(call=>/insert into nexus_sync_operations/.test(call.sql)),true);});
// Confirmed: a missing baseVersion on an update/delete against an existing
// record used to skip the conflict check entirely (current?.version!=null &&
// operation.baseVersion!=null && ... short-circuited to false whenever
// baseVersion was omitted), so a stale/buggy client could silently overwrite
// a server record that had changed since it was last seen.
test("a missing baseVersion against an existing record is treated as a conflict, not silently applied",async()=>{const store=db([{rows:[]},{rows:[{record_id:"rec-1",version:3}]},{rows:[{sync_id:"syn-2",state:"conflict"}]}]);const repo=new SyncRepository(store);let applied=false;const result=await repo.apply({tenantId:"tenant-1",userId:"user-1",deviceId:"device-1",operationId:"op-2",entityType:"record",entityId:"rec-1",action:"update",payload:{}},async({trx,phase})=>{if(phase==="apply")applied=true;return phase==="inspect"?(await trx.query("record",[])).rows[0]:null;});assert.equal(result.state,"conflict");assert.equal(applied,false);});
// Found live (cross-user IDOR audit): applyRecord's inspect/update/delete
// queries were scoped only by tenant_id + record_id, never by owner -- a
// tenant member who knew or guessed another member's record_id could
// sync-delete or sync-update it via /api/nexus/runtime/sync/push with no
// relationship to that record at all. (This route is currently unreachable
// in production -- sync:write/sync:read are not granted to any role today
// -- so hardening it now is defense-in-depth for whenever that's enabled,
// not a currently-live exploit.)
function fakeRecordsTrx(row) {
  return { async query(sql, params) {
    if (/select .* from nexus_records/i.test(sql)) {
      const [tenantId, entityId, ownerId] = params;
      return row && row.tenant_id === tenantId && row.record_id === entityId && row.owner_id === ownerId ? { rows: [row] } : { rows: [] };
    }
    if (/update nexus_records set state='deleted'/i.test(sql)) {
      const [tenantId, entityId, ownerId] = params;
      if (row && row.tenant_id === tenantId && row.record_id === entityId && row.owner_id === ownerId) { row.state = "deleted"; row.version += 1; return { rows: [row] }; }
      return { rows: [] };
    }
    if (/update nexus_records set data=/i.test(sql)) {
      const [tenantId, entityId, data, , ownerId] = params;
      if (row && row.tenant_id === tenantId && row.record_id === entityId && row.owner_id === ownerId) { row.data = data; row.version += 1; return { rows: [row] }; }
      return { rows: [] };
    }
    return { rows: [] };
  } };
}
test("applyRecord (offline sync) never inspects, updates, or deletes a record owned by a different user", async () => {
  const row = { tenant_id: "t1", record_id: "rec-x", owner_id: "owner-a", version: 1, data: {} };
  const asOwner = await applyRecord({ trx: fakeRecordsTrx({ ...row }), phase: "inspect", operation: { tenantId: "t1", entityId: "rec-x", userId: "owner-a", entityType: "record" } });
  assert.ok(asOwner, "the real owner must still be able to inspect their own record");

  const asAttacker = await applyRecord({ trx: fakeRecordsTrx({ ...row }), phase: "inspect", operation: { tenantId: "t1", entityId: "rec-x", userId: "owner-b", entityType: "record" } });
  assert.equal(asAttacker, null, "a different tenant member must never be able to inspect someone else's record via sync");

  await assert.rejects(() => applyRecord({ trx: fakeRecordsTrx({ ...row }), phase: "apply", current: null,
    operation: { tenantId: "t1", entityId: "rec-x", userId: "owner-b", entityType: "record", action: "delete" } }), /does not exist/,
    "a non-owner's delete must be refused as 'does not exist', not silently applied to someone else's record");
});

test("a create action with no baseVersion (there is nothing prior to base it on) is unaffected and still applies",async()=>{const store=db([{rows:[]},{rows:[{sync_id:"syn-3",state:"applied"}]}]);const repo=new SyncRepository(store);let applied=false;const result=await repo.apply({tenantId:"tenant-1",userId:"user-1",deviceId:"device-1",operationId:"op-3",entityType:"record",action:"create",payload:{}},async({trx,phase})=>{if(phase==="apply"){applied=true;return{version:1};}return null;});assert.equal(result.state,"applied");assert.equal(applied,true);});
test("pull and conflict resolution remain tenant user and device scoped",async()=>{const store=db([{rows:[{sync_id:"syn-1"}]},{rows:[{sync_id:"syn-1",state:"pending"}]}]);const repo=new SyncRepository(store);assert.equal((await repo.changes({tenantId:"t",userId:"u",deviceId:"d"})).length,1);await repo.resolve({tenantId:"t",userId:"u",deviceId:"d",syncId:"syn-1",resolution:"retry-client",expectedServerVersion:4});assert.match(store.calls[1].sql,/tenant_id=\$1 and user_id=\$2 and device_id=\$3/);});

test("conflict resolution casts optional parameters for PostgreSQL type inference",async()=>{const store=db([{rows:[{sync_id:"syn-1",state:"rejected"}]}]);await new SyncRepository(store).resolve({tenantId:"t",userId:"u",deviceId:"d",syncId:"syn-1",resolution:"accept-server",expectedServerVersion:2});assert.match(store.calls[0].sql,/\$5::text/);assert.match(store.calls[0].sql,/\$6::integer/);});
test("workspace writes require complete ownership and authoritative cutover",async()=>{const applications={get:id=>id==="maps"?{applicationId:id}:null};const incomplete=new WorkspaceCutoverPolicy({applications,authorityCoverage:{requireApplication:async()=>{const error=new Error("incomplete");error.code="application_authority_incomplete";throw error;}},migrations:{status:async()=>({state:"authoritative"})}});await assert.rejects(incomplete.requireAuthoritative("maps"),error=>error.code==="application_authority_incomplete");const coverage={requireApplication:async()=>({applicationId:"maps",authoritative:true})};const legacy=new WorkspaceCutoverPolicy({applications,authorityCoverage:coverage,migrations:{status:async()=>({state:"legacy"})}});await assert.rejects(legacy.requireAuthoritative("maps"),error=>error.code==="workspace_not_cut_over"&&error.details.authorityComplete===true&&error.details.legacyWriteFallback===false);const active=new WorkspaceCutoverPolicy({applications,authorityCoverage:coverage,migrations:{status:async()=>({state:"authoritative"})}});const admitted=await active.requireAuthoritative("maps");assert.equal(admitted.state,"authoritative");assert.equal(admitted.authorityComplete,true);await assert.rejects(active.requireAuthoritative("unknown"),error=>error.code==="workspace_required");});
test("sync push requires cutover and never offers a legacy write fallback",async()=>{const applied=[];const runtime={cutover:{requireAuthoritative:async id=>assert.equal(id,"maps")},sync:{apply:async operation=>{applied.push(operation);return{state:"applied"};}}};const api=createSyncApi(runtime);const result=await api.push({context,body:{deviceId:"device-1",operations:[{workspaceId:"maps",operationId:"op-1",entityType:"record",action:"create",payload:{recordType:"route"}}]}});assert.equal(result.body.legacyWriteFallback,false);assert.equal(applied[0].tenantId,"tenant-1");});
test("authoritative workspace retirement makes compatibility tools unavailable",async()=>{const rows=[];await registerLegacyTools({registry:{register:async row=>(rows.push(row),row)},env:{NEXUS_FILE_UPLOAD_ENABLED:"true"},migrationStatus:async()=>({state:"authoritative"})});assert.equal(rows.every(row=>row.availability==="unavailable"),true);assert.equal(rows.every(row=>row.metadata.migrationState==="retired"),true);assert.equal(rows.every(row=>row.metadata.legacyWriteAllowed===false),true);});
