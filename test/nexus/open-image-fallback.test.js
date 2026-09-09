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

test('native visual tool keeps primary search and uses fallback only after no usable primary result',async()=>{
 const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
 const source=fs.readFileSync(path.join(__dirname,'../../server.js'),'utf8');
 const begin=source.indexOf('async function executeNexusOpenAiNativeTool('),end=source.indexOf('\nfunction nexusGenesisWorkspaceAction(',begin);
 assert.ok(begin>=0&&end>begin);let primary=true,fallback=true,fallbackCalls=0,visionCalls=0;
 const sandbox={URL,process:{env:{}},sanitizePilotText:value=>String(value||''),
 fetchWithTimeout:async()=>({ok:true,json:async()=>({query:{pages:primary?{one:{title:'Maize',imageinfo:[{url:'https://images.example/primary',descriptionurl:'https://source.example/primary'}]}}:{}}})}),
 require:name=>{assert.equal(name,'./server/nexus-open-image-fallback');return {searchOpenImages:async()=>{fallbackCalls++;return fallback?[{title:'Maize',imageUrl:'https://images.example/fallback',sourceUrl:'https://source.example/fallback'}]:[]}}},
 nexusOpenAiNativeToolReceipt:()=>({testReceipt:true}),nexusRealProviders:{vision:{analyze:async()=>{visionCalls++;return {status:'blocked'}}}},
 nexusOpenAiNativeProviderToolResult:(_db,_common,result)=>result};
 vm.createContext(sandbox);vm.runInContext(source.slice(begin,end)+'\nthis.run=executeNexusOpenAiNativeTool;',sandbox);
 const invoke=()=>sandbox.run({}, {}, 'nexus_visual_analysis',{command:'show images of maize',capability:'visual-search'});
 assert.match((await invoke()).images[0].imageUrl,/primary/);assert.equal(fallbackCalls,0);
 primary=false;assert.match((await invoke()).images[0].imageUrl,/fallback/);assert.equal(fallbackCalls,1);assert.equal(visionCalls,0);
 fallback=false;assert.equal((await invoke()).status,'blocked');assert.equal(visionCalls,1);
});
