'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {NexusBrowserRuntime}=require('../nexus-core/browser-runtime');
function setup(){const sent=[],timers=new Map(),receipts=[];let id=0;const runtime=new NexusBrowserRuntime({foundation:{start:async()=>{},stop(){},machine:{snapshot:()=>({state:'connected'})}},realtime:{send:e=>sent.push(e)},audioElement:{},openWorkspace:async()=>{},realtimeRetryLimit:999,realtimeRetryDelayMs:0,schedule:fn=>{timers.set(++id,fn);return id;},cancelSchedule:key=>timers.delete(key),onReceipt:r=>receipts.push(r)});runtime.started=true;return{runtime,sent,timers,receipts,fire(){const [key,fn]=timers.entries().next().value;timers.delete(key);fn();}};}
test('unaccepted transient response failures retry at most twice and release pending state',async()=>{
 const x=setup();x.runtime.requestResponse({},'user');for(let i=0;i<3;i++){await x.runtime.handleRealtimeEvent({type:'error',error:{code:'server_error'}});if(i<2)x.fire();}assert.equal(x.sent.length,3);assert.equal(x.timers.size,0);assert.equal(x.runtime.responseRequestPending,false);assert.ok(x.receipts.some(r=>r.type==='realtime.response-retry-exhausted'));x.runtime.stop();
});
test('accepted responses never replay and stopped or replaced requests cancel pending retries',async()=>{
 const x=setup();x.runtime.requestResponse({},'user');await x.runtime.handleRealtimeEvent({type:'response.created',response:{id:'accepted'}});await x.runtime.handleRealtimeEvent({type:'error',error:{code:'server_error'}});assert.equal(x.timers.size,0);assert.equal(x.sent.length,1);x.runtime.stop();
 for(const action of ['stop','replace','barge-in']){const y=setup();y.runtime.requestResponse({},'first');await y.runtime.handleRealtimeEvent({type:'error',error:{code:'timeout'}});assert.equal(y.timers.size,1);if(action==='stop')y.runtime.stop();else if(action==='replace')y.runtime.requestResponse({},'new-turn');else y.runtime.cancelActiveResponse();assert.equal(y.timers.size,0);y.runtime.stop();}
});
