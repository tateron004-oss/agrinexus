"use strict";
const test=require("node:test");const assert=require("node:assert/strict");
const {ObservabilityRepository}=require("../../nexus/observability/event-repository.js");
test("operational view covers release, workers, queues, errors, providers, traces, and costs",async()=>{const responses=[
 {rows:[{component:"provider",event_type:"request",outcome:"failed",provider:"search",cost_micros:"25"}]},
 {rows:[{worker_id:"worker-1",release_sha:"sha",status:"ready"}]},{rows:[{state:"queued",count:2}]},{rows:[{release_sha:"sha",state:"active"}]}];
 const db={query:async()=>responses.shift()};const view=await new ObservabilityRepository(db).operationalView({tenantId:"tenant",windowMinutes:15});
 assert.equal(view.ok,true);assert.equal(view.release.release_sha,"sha");assert.equal(view.services.length,1);assert.equal(view.queues[0].count,2);assert.equal(view.errors.length,1);assert.equal(view.providers.length,1);assert.equal(view.traces.length,1);assert.equal(view.costMicros,25);});
