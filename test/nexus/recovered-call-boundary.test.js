'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
test('recovered owner-recipient call coverage preserves explicit identity and confirmation at native provider boundary',async()=>{
 const source=fs.readFileSync(path.join(__dirname,'../../server.js'),'utf8');
 const a=source.indexOf('function nexusOpenAiNativeExtractContactArgs('),b=source.indexOf('\nfunction ',source.indexOf('function nexusOpenAiNativeOwnerTestRecipient(')+10);
 const start=source.indexOf('async function executeNexusOpenAiNativeTool('),end=source.indexOf('\nfunction nexusGenesisWorkspaceAction(',start);
 assert.ok(a>=0&&b>a&&start>0&&end>start);const calls=[];
 const env={OWNER_TEST_RECIPIENT_NUMBER:'+15555550123'};
 const context={process:{env},sanitizePilotText:v=>String(v||''),firstPresentEnvValue:(e,keys)=>keys.map(k=>e[k]).find(Boolean)||'',
 nexusRealProviders:{twilio:{startCall:async args=>{calls.push(args);return {status:args.confirmed===true?'mock-confirmed':'needs-confirmation'};}}},
 nexusOpenAiNativeProviderToolResult:(_db,_common,result)=>result};
 vm.createContext(context);vm.runInContext(source.slice(a,b)+'\n'+source.slice(start,end)+'\nthis.run=executeNexusOpenAiNativeTool;this.owner=nexusOpenAiNativeOwnerTestRecipient;',context);
 assert.equal(context.owner('call someone',{},env),'');assert.equal(context.owner('call my owner test recipient',{},env),env.OWNER_TEST_RECIPIENT_NUMBER);
 assert.equal((await context.run({}, {}, 'nexus_communications',{command:'call my owner test recipient',capability:'communications',channel:'call',confirmed:false})).status,'needs-confirmation');
 assert.equal(calls[0].confirmed,false);assert.equal(calls[0].to,env.OWNER_TEST_RECIPIENT_NUMBER);
 await context.run({}, {}, 'nexus_communications',{command:'call my owner test recipient',capability:'communications',channel:'call',confirmed:true});assert.equal(calls[1].confirmed,true);
 await context.run({}, {}, 'nexus_communications',{command:'call this number',capability:'communications',channel:'call',to:'+15555550456',confirmed:false});assert.equal(calls[2].to,'+15555550456');
});
