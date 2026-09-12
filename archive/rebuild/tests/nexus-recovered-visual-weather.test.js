'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {createVisualDataService}=require('../nexus-core/visual-data-service');
const ok=body=>({ok:true,json:async()=>body});
test('weather shares in-flight requests, caches valid observations and discloses stale fallback',async()=>{
 let calls=0,clock=1000,broken=false;
 const s=createVisualDataService({now:()=>clock,wait:async()=>{},weatherCacheTtlMs:100,weatherStaleTtlMs:500,fetchImpl:async u=>{calls++;if(broken)throw Error('offline');return String(u).includes('geocoding-api')?ok({results:[{name:'Nairobi',latitude:-1.3,longitude:36.8}]}):ok({current:{temperature_2m:22,time:'2026-09-08T12:00'}});}});
 const [a,b]=await Promise.all([s.weather('weather in Nairobi'),s.weather('weather in Nairobi')]);assert.equal(calls,2);assert.deepEqual(a,b);await s.weather('weather in Nairobi');assert.equal(calls,2);
 clock+=200;broken=true;const stale=await s.weather('weather in Nairobi');assert.equal(stale.status,'live-weather-cached');assert.equal(stale.cacheAgeMs,200);clock+=600;await assert.rejects(s.weather('weather in Nairobi'),/offline/);
});
test('independent MET fallback preserves unknown daily values and rejects missing observations',async()=>{
 let invalid=false,calls=[];const s=createVisualDataService({weatherRetryAttempts:999,wait:async()=>{},weatherCacheTtlMs:0,fetchImpl:async u=>{const url=new URL(u);calls.push(url.hostname);if(url.hostname.includes('open-meteo'))return {ok:false,status:503};if(url.hostname==='nominatim.openstreetmap.org')return ok([{lat:'-1.3',lon:'36.8',display_name:'Nairobi'}]);return ok(invalid?{}:{properties:{timeseries:[{time:'2026-09-08T12:00Z',data:{instant:{details:{air_temperature:20,wind_speed:2}}}}]}});}});
 const r=await s.weather('weather in Nairobi');assert.equal(r.status,'live-weather-fallback-ready');assert.equal(r.highC,null);assert.equal(r.rainChance,null);assert.equal(r.windKph,7);assert.equal(calls.filter(x=>x.includes('open-meteo')).length,3);
 invalid=true;await assert.rejects(s.weather('weather in Kampala'),/no current observation/);
});
