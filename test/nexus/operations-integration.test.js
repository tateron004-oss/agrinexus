const test=require('node:test'),assert=require('node:assert/strict');
const {DeviceRepository}=require('../../nexus/devices/repository.js');
const {DeviceTokenVault}=require('../../nexus/security/device-token-vault.js');
const {createControlApi}=require('../../nexus/compat/control-api.js');
const {createServerRuntimeAdapter}=require('../../nexus/compat/server-runtime-adapter.js');
const {ObservabilityRepository}=require('../../nexus/observability/operations-repository.js');
const context={tenantId:'tenant',userId:'owner',can:()=>true,hasRole:()=>false};
test('device registration rejects cross-owner conflicts and keeps token material out of responses',async()=>{
 let call; const repo=new DeviceRepository({query:async(sql,params)=>{call={sql,params};return{rows:[]};}});
 const api=createControlApi({devices:repo});
 await assert.rejects(()=>api.registerDevice({context,body:{deviceId:'phone',platform:'pwa',tenantId:'forged',userId:'forged',capabilities:{gps:true,camera:false}}}),{code:'device_not_found'});
 assert.deepEqual(call.params.slice(0,5),['phone','tenant','owner','web',['gps']]);
 assert.match(call.sql,/where nexus_devices.tenant_id=excluded.tenant_id and nexus_devices.user_id=excluded.user_id/);
 assert.match(call.sql,/nexus_devices.state='active'/);
 assert.doesNotMatch(call.sql.split('returning')[1],/ciphertext|push_endpoint/);
});
test('push and lifecycle APIs require permission, ownership and encrypted token storage',async()=>{
 let observed; const devices={registerPush:async input=>{observed=input;return{device_id:'phone'};},lifecycle:async()=>null};
 const request={context,params:{deviceId:'phone'},body:{token:'synthetic-device-token',provider:'apns',tenantId:'forged'}};
 await assert.rejects(()=>createControlApi({devices}).registerPush(request),{code:'device_token_key_missing'});
 const api=createControlApi({devices,deviceTokens:new DeviceTokenVault('synthetic-test-key')});
 await assert.rejects(()=>api.registerPush({...request,context:{...context,can:()=>false}}),{code:'permission_denied'});
 await api.registerPush(request); assert.equal(observed.tenantId,'tenant');assert.equal(observed.userId,'owner');
 assert.match(observed.pushKeyCiphertext,/^v1\./);assert.ok(!JSON.stringify(observed).includes('synthetic-device-token'));
 await assert.rejects(()=>api.deviceLifecycle({...request,body:{state:'background'}}),{code:'device_not_found'});
});
async function request(path,user,runtime,body={}){
 const out={}; const adapter=createServerRuntimeAdapter({resolveUser:async()=>user,readJson:async()=>body,createRuntimeFn:()=>runtime,logger:{error(){}}});
 await adapter.handle({method:'GET',headers:{}},{},new URL('http://local'+path),(_r,status,data)=>Object.assign(out,{status,data}));return out;
}
test('recovered observability and task progress routes retain authorization boundaries',async()=>{
 let calls=0;const runtime={ready:Promise.resolve(),engine:{tasks:{}},tasks:{get:async()=>({ownerId:'other'})},observability:{snapshot:async()=>{calls++;return{progress:{state:'running'},alerts:['private']};}}};
 const user={id:'owner',tenantId:'tenant',permissions:[],role:'Standard User'};
 assert.equal((await request('/api/nexus/runtime/observability',user,runtime)).status,403);
 assert.equal((await request('/api/nexus/runtime/tasks/task/progress',user,runtime)).status,403);assert.equal(calls,0);
 assert.equal((await request('/api/nexus/runtime/devices',null,runtime)).status,401);
 runtime.tasks.get=async()=>({ownerId:'owner'});
 const allowed=await request('/api/nexus/runtime/tasks/task/progress',user,runtime);
 assert.equal(allowed.status,200);assert.deepEqual(Object.keys(allowed.data).sort(),['authoritative','progress']);
});
test('operations retain canonical event methods and tenant-isolate provider snapshots',async()=>{
 const calls=[];const repo=new ObservabilityRepository({query:async(sql,params)=>{calls.push({sql,params});return{rows:[]};}});
 assert.equal(typeof repo.record,'function');assert.equal(typeof repo.summary,'function');assert.equal(typeof repo.operationalView,'function');
 await repo.snapshot({tenantId:'tenant'});const provider=calls.find(c=>c.sql.includes('from nexus_provider_health'));
 assert.match(provider.sql,/where tenant_id=\$1/);assert.deepEqual(provider.params,['tenant']);
});
