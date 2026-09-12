const test = require('node:test');
const assert = require('node:assert/strict');
const { createOpenMapProvider, parseMapRequest } = require('../nexus-core/map-service');

test('recovered map parser handles bare routes and map-plus-route context', () => {
  assert.deepEqual(parseMapRequest('Nairobi to Nakuru'), { type: 'route', origin: 'Nairobi', destination: 'Nakuru' });
  assert.deepEqual(parseMapRequest('show a map of Kigali Rwanda and directions to Butare'), { type: 'route', origin: 'Kigali Rwanda', destination: 'Butare, Rwanda' });
});

test('recovered map provider refuses invalid coordinates and wrong-country matches', async () => {
  for (const location of [{ lat: '999', lon: '2', address: { country_code: 'ke' } }, { lat: '1', lon: '2', address: { country_code: 'us' } }]) {
    const provider = createOpenMapProvider({ fetchImpl: async () => ({ ok: true, json: async () => [{ ...location, addresstype: 'city', category: 'place' }] }) });
    await assert.rejects(() => provider({ action: 'place', place: 'Kenya' }), /invalid coordinates|requested country/);
  }
});

test('recovered map provider uses secondary geometry only after primary failure', async () => {
  const urls = [];
  const geometry = { type: 'LineString', coordinates: [[36.8, -1.2], [36.0, -0.3]] };
  const provider = createOpenMapProvider({ sleepImpl: async () => {}, fetchImpl: async input => {
    const url = String(input); urls.push(url);
    if (url.includes('nominatim')) return { ok: true, json: async () => [{ lat: '-1.2', lon: '36.8', addresstype: 'city', category: 'place' }] };
    if (url.includes('router.project-osrm')) return { ok: false, status: 503 };
    assert.ok(url.includes('routing.openstreetmap.de'));
    return { ok: true, json: async () => ({ code: 'Ok', routes: [{ geometry, distance: 100, duration: 10 }] }) };
  } });
  const result = await provider({ action: 'route', origin: 'Nairobi', destination: 'Nakuru' });
  assert.deepEqual(result.geometry, geometry);
  assert.equal(urls.length, 6);
  assert.equal(urls.filter(url => url.includes("router.project-osrm")).length, 3);
});

test('map fallback keeps country selection and recognizes literal US aliases',async()=>{
 const urls=[];
 const provider=createOpenMapProvider({sleepImpl:async()=>{},fetchImpl:async input=>{
  const url=String(input);urls.push(url);
  if(url.includes('nominatim'))return {ok:false,status:503};
  assert.ok(url.includes('photon.komoot.io'));
  return {ok:true,json:async()=>({features:[
   {geometry:{coordinates:[36,-1]},properties:{name:'Wrong country',countrycode:'KE'}},
   {geometry:{coordinates:[-77,38]},properties:{name:'Washington',countrycode:'US'}}]})};
 }});
 const result=await provider({action:'place',place:'Washington U.S.'});
 assert.equal(result.location.lon,-77);assert.equal(urls.length,4);assert.ok(urls[0].includes('countrycodes=us'));
});

test('provider retries are bounded and do not repeat non-idempotent or aborted requests',async()=>{
 const {createProviderFetch}=require('../nexus-core/provider-fetch');let calls=0;const delays=[];
 const fetch=createProviderFetch({maxAttempts:999,sleepImpl:async ms=>delays.push(ms),fetchImpl:async()=>{calls++;return {status:429,headers:{get:()=> '999'}}}});
 await fetch('https://provider.test');assert.equal(calls,3);assert.ok(delays.every(ms=>ms<=2000));
 calls=0;await fetch('https://provider.test',{method:'POST'});assert.equal(calls,1);
 const controller=new AbortController();calls=0;const aborted=createProviderFetch({sleepImpl:async()=>{throw Error('must not sleep after abort')},fetchImpl:async()=>{calls++;controller.abort();throw Error('interrupted')}});
 await assert.rejects(()=>aborted('https://provider.test',{signal:controller.signal}));assert.equal(calls,1);
});
