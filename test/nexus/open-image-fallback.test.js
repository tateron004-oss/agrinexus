"use strict";
const test=require('node:test'),assert=require('node:assert/strict');
const {searchOpenImages,publicUrl}=require('../../server/nexus-open-image-fallback');
test('recovered image fallback keeps subject, source and license and rejects unrelated results',async()=>{
 let calls=0;const result=await searchOpenImages('maize disease',{fetchFn:async(url,init)=>{calls++;assert.equal(url.hostname,'api.openverse.org');assert.equal(init.redirect,'error');return {ok:true,json:async()=>({results:[
 {title:'Maize leaf blight',thumbnail:'https://images.example/1.jpg',foreign_landing_url:'https://source.example/1',license:'cc-by',creator:'Test artist'},
 {title:'Corn rust',thumbnail:'https://images.example/2.jpg',foreign_landing_url:'https://source.example/2'},
 {title:'Maize field',thumbnail:'https://images.example/3.jpg',foreign_landing_url:'https://source.example/3'},
 {title:'Wheat blight',thumbnail:'https://images.example/4.jpg',foreign_landing_url:'https://source.example/4'},
 {title:'Maize smut',thumbnail:'javascript:bad()',foreign_landing_url:'https://source.example/5'}]})}}});
 assert.equal(calls,1);assert.equal(result.length,2);assert.equal(result[0].license,'cc-by');assert.equal(result[0].creator,'Test artist');
});
test('image fallback does not turn empty or failed retrieval into success',async()=>{
 let calls=0;assert.deepEqual(await searchOpenImages('',{fetchFn:async()=>{calls++}}),[]);assert.equal(calls,0);
 await assert.rejects(()=>searchOpenImages('maize',{fetchFn:async()=>({ok:false})}),/unavailable/);
 assert.deepEqual(await searchOpenImages('maize',{fetchFn:async()=>({ok:true,json:async()=>({results:[]})})}),[]);
 for(const url of ['file:///private','http://images.example/x','https://127.0.0.1/x','https://10.0.0.1/x','https://user:pass@images.example/x'])assert.equal(publicUrl(url),'');
});
test('Openverse requests identify themselves with a real User-Agent, not an anonymous default',async()=>{
 // Confirmed live in production: this request had no User-Agent at all --
 // Wikimedia/Openverse-style API etiquette policies throttle or reject
 // anonymous requests, especially from cloud/datacenter IP ranges, which is
 // consistent with this call consistently failing from Render while an
 // identical request from a real browser succeeded every time.
 let capturedHeaders=null;
 await searchOpenImages('maize disease',{fetchFn:async(url,init)=>{capturedHeaders=init.headers;return {ok:true,json:async()=>({results:[]})};}});
 assert.equal(capturedHeaders['user-agent'],'AgriNexus/1.0 rural-health-agritech-investor-platform');
});

test('native visual tool keeps primary search and uses fallback only after no usable primary result',async()=>{
 const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
 const source=fs.readFileSync(path.join(__dirname,'../../server.js'),'utf8');
 const begin=source.indexOf('async function executeNexusOpenAiNativeTool('),end=source.indexOf('\nfunction nexusGenesisWorkspaceAction(',begin);
 assert.ok(begin>=0&&end>begin);let primary=true,fallback=true,fallbackCalls=0,visionCalls=0;
 const sandbox={URL,process:{env:{}},sanitizePilotText:value=>String(value||''),
 publicProviderHeaders:()=>({'user-agent':'AgriNexus/1.0 rural-health-agritech-investor-platform',accept:'application/json'}),
 fetchWithTimeout:async()=>({ok:true,json:async()=>({query:{pages:primary?{one:{title:'Maize',imageinfo:[{url:'https://images.example/primary',descriptionurl:'https://source.example/primary'}]}}:{}}})}),
 require:name=>{assert.equal(name,'./server/nexus-open-image-fallback');return {searchOpenImages:async()=>{fallbackCalls++;return fallback?[{title:'Maize',imageUrl:'https://images.example/fallback',sourceUrl:'https://source.example/fallback'}]:[]}}},
 nexusOpenAiNativeToolReceipt:()=>({testReceipt:true}),nexusRealProviders:{vision:{analyze:async()=>{visionCalls++;return {status:'blocked'}}}},
 nexusOpenAiNativeProviderToolResult:(_db,_common,result)=>result,
 nexusMentalHealthBehavioralWellness:require('../../public/nexus-mental-health-behavioral-wellness.js')};
 vm.createContext(sandbox);vm.runInContext(source.slice(begin,end)+'\nthis.run=executeNexusOpenAiNativeTool;',sandbox);
 const invoke=()=>sandbox.run({}, {}, 'nexus_visual_analysis',{command:'show images of maize',capability:'visual-search'});
 assert.match((await invoke()).images[0].imageUrl,/primary/);assert.equal(fallbackCalls,0);
 primary=false;assert.match((await invoke()).images[0].imageUrl,/fallback/);assert.equal(fallbackCalls,1);assert.equal(visionCalls,0);
 // Found live: when both primary and fallback search find nothing, this
 // used to fall through unconditionally into vision.analyze -- a totally
 // different question ("analyze THIS image I gave you") -- producing the
 // non-sequitur "A user-supplied image URL is required" for a search
 // request. Now honestly reports no results instead, and never calls vision.analyze.
 fallback=false;assert.equal((await invoke()).status,'no-image-results');assert.equal(visionCalls,0);
});

test('a real image search still runs when the tool-calling model paraphrases away the show/find verb the wantsImages check needs', async () => {
 // Confirmed live in production: "Show me current images of healthy maize
 // leaves." over real voice reached nexus_visual_analysis, but the model's
 // own "command" tool-call argument dropped the leading verb (show/find/
 // search/display/open) that wantsImages' regex requires, so it fell
 // through to nexusRealProviders.vision.analyze (an unconfigured, separate
 // "configured visual provider" feature) instead of the real, keyless
 // Wikimedia/Openverse search -- producing a "visual search tool is
 // disabled" response even though real search code exists and works.
 const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
 const source=fs.readFileSync(path.join(__dirname,'../../server.js'),'utf8');
 const begin=source.indexOf('async function executeNexusOpenAiNativeTool('),end=source.indexOf('\nfunction nexusGenesisWorkspaceAction(',begin);
 assert.ok(begin>=0&&end>begin); let visionCalls=0;
 const sandbox={URL,process:{env:{}},sanitizePilotText:value=>String(value||''),
 publicProviderHeaders:()=>({'user-agent':'AgriNexus/1.0 rural-health-agritech-investor-platform',accept:'application/json'}),
 fetchWithTimeout:async()=>({ok:true,json:async()=>({query:{pages:{one:{title:'Maize',imageinfo:[{url:'https://images.example/primary',descriptionurl:'https://source.example/primary'}]}}}})}),
 require:name=>{assert.equal(name,'./server/nexus-open-image-fallback');return {searchOpenImages:async()=>[]}},
 nexusOpenAiNativeToolReceipt:()=>({testReceipt:true}),nexusRealProviders:{vision:{analyze:async()=>{visionCalls++;return {status:'blocked'}}}},
 nexusOpenAiNativeProviderToolResult:(_db,_common,result)=>result,
 nexusOpenAiNativeToolChoiceHint:()=>'nexus_visual_analysis',
 nexusMentalHealthBehavioralWellness:require('../../public/nexus-mental-health-behavioral-wellness.js')};
 vm.createContext(sandbox);vm.runInContext(source.slice(begin,end)+'\nthis.run=executeNexusOpenAiNativeTool;',sandbox);
 const result = await sandbox.run({}, {}, 'nexus_visual_analysis',
   { command: 'healthy maize leaves' },
   { command: 'Show me current images of healthy maize leaves.' });
 assert.equal(visionCalls, 0, 'the real Wikimedia search must be used, not the unconfigured vision provider fallback');
 assert.match(result.images[0].imageUrl, /primary/);
});

test('the Wikimedia search query strips filler words and trailing punctuation instead of sending a near-unmatchable phrase', async () => {
 // Confirmed live in production, and directly against the real Wikimedia
 // API: "Show me current images of healthy maize leaves." reduced to
 // "current of healthy maize leaves." (filler words "current"/"of" left in,
 // trailing period left in) -- zero real search results. The clean
 // "healthy maize leaves" query returns real results every time. This was
 // the actual, confirmed root cause of the production "images disabled"
 // symptom -- not a missing User-Agent, which real network testing
 // (browser, curl, and Node fetch, all from the production container)
 // ruled out.
 const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
 const source=fs.readFileSync(path.join(__dirname,'../../server.js'),'utf8');
 const begin=source.indexOf('async function executeNexusOpenAiNativeTool('),end=source.indexOf('\nfunction nexusGenesisWorkspaceAction(',begin);
 assert.ok(begin>=0&&end>begin);
 let capturedSearchTerm=null;
 const sandbox={URL,process:{env:{}},sanitizePilotText:value=>String(value||''),
 publicProviderHeaders:()=>({'user-agent':'AgriNexus/1.0 rural-health-agritech-investor-platform',accept:'application/json'}),
 fetchWithTimeout:async(url)=>{capturedSearchTerm=url.searchParams.get('gsrsearch');return {ok:true,json:async()=>({query:{pages:{}}})};},
 require:name=>{assert.equal(name,'./server/nexus-open-image-fallback');return {searchOpenImages:async()=>[]}},
 nexusOpenAiNativeToolReceipt:()=>({testReceipt:true}),nexusRealProviders:{vision:{analyze:async()=>({status:'blocked'})}},
 nexusOpenAiNativeProviderToolResult:(_db,_common,result)=>result,
 nexusMentalHealthBehavioralWellness:require('../../public/nexus-mental-health-behavioral-wellness.js')};
 vm.createContext(sandbox);vm.runInContext(source.slice(begin,end)+'\nthis.run=executeNexusOpenAiNativeTool;',sandbox);
 await sandbox.run({}, {}, 'nexus_visual_analysis', { command: 'Show me current images of healthy maize leaves.', capability: 'visual-search' });
 assert.equal(capturedSearchTerm, 'filetype:bitmap healthy maize leaves');
});

test('the server-side Wikimedia image search identifies itself with a real User-Agent, not an anonymous default', async () => {
 // Same missing-User-Agent issue as the Openverse fallback -- confirmed
 // live that this exact request consistently failed from production
 // (falling through to the vision.analyze refusal) while an identical
 // request from a real browser succeeded every time.
 const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
 const source=fs.readFileSync(path.join(__dirname,'../../server.js'),'utf8');
 const begin=source.indexOf('async function executeNexusOpenAiNativeTool('),end=source.indexOf('\nfunction nexusGenesisWorkspaceAction(',begin);
 assert.ok(begin>=0&&end>begin);
 let capturedHeaders=null;
 const sandbox={URL,process:{env:{}},sanitizePilotText:value=>String(value||''),
 publicProviderHeaders:()=>({'user-agent':'AgriNexus/1.0 rural-health-agritech-investor-platform',accept:'application/json'}),
 fetchWithTimeout:async(_url,options)=>{capturedHeaders=options.headers;return {ok:true,json:async()=>({query:{pages:{}}})};},
 require:name=>{assert.equal(name,'./server/nexus-open-image-fallback');return {searchOpenImages:async()=>[]}},
 nexusOpenAiNativeToolReceipt:()=>({testReceipt:true}),nexusRealProviders:{vision:{analyze:async()=>({status:'blocked'})}},
 nexusOpenAiNativeProviderToolResult:(_db,_common,result)=>result,
 nexusMentalHealthBehavioralWellness:require('../../public/nexus-mental-health-behavioral-wellness.js')};
 vm.createContext(sandbox);vm.runInContext(source.slice(begin,end)+'\nthis.run=executeNexusOpenAiNativeTool;',sandbox);
 await sandbox.run({}, {}, 'nexus_visual_analysis', { command: 'show images of maize', capability: 'visual-search' });
 assert.equal(capturedHeaders['user-agent'], 'AgriNexus/1.0 rural-health-agritech-investor-platform');
});
