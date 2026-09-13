'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),test=require('node:test'),assert=require('node:assert/strict');
test('presence wake recognition accepts punctuation without consuming commands',()=>{const app=fs.readFileSync(path.join(__dirname,'../../public/app.js'),'utf8');const source=name=>{const start=app.indexOf('function '+name+'(');assert.ok(start>=0);return app.slice(start,app.indexOf('\nfunction ',start+1));};const context=vm.createContext({});vm.runInContext(source('normalizedWakeText')+'\n'+source('isNexusPresenceWakePhrase'),context);for(const phrase of ['Hello Nexus,','Hey Nexus!','Nexus.','Hello Nexus;','Nexus:'])assert.equal(context.isNexusPresenceWakePhrase(phrase),true,phrase);for(const phrase of ['Nexus, open a map of Kenya','Hello Nexus, find farming jobs','Hey Nexus, open workforce','notes chest pain present'])assert.equal(context.isNexusPresenceWakePhrase(phrase),false,phrase);});

test('Arabic Kyro wake phrase is recognized alongside the existing Arabic Nexus phrase',()=>{
  const app=fs.readFileSync(path.join(__dirname,'../../public/app.js'),'utf8');
  const source=name=>{const start=app.indexOf('function '+name+'(');assert.ok(start>=0,name);return app.slice(start,app.indexOf('\nfunction ',start+1));};
  const context=vm.createContext({});
  vm.runInContext(source('normalizedWakeText')+'\n'+source('isWakePhraseOnly')+'\n'+source('isNexusGreetingOnly')+'\n'+source('isNexusGreetingPrefix'),context);
  const kiro=String.fromCharCode(0x0643,0x064a,0x0631,0x0648); // كيرو -- deliberately distinct from the common transliteration of "Cairo" (كايرو)
  const nexus=String.fromCharCode(0x0646,0x0643,0x0633,0x0633); // نكسس
  const marhaba=String.fromCharCode(0x0645,0x0631,0x062d,0x0628,0x0627); // مرحبا
  const ya=String.fromCharCode(0x064a,0x0627); // يا
  for(const phrase of [kiro, marhaba+' '+kiro, ya+' '+kiro]) assert.equal(context.isWakePhraseOnly(phrase),true,phrase);
  assert.equal(context.isNexusGreetingOnly(marhaba+' '+kiro),true,'Marhaba Kiro greeting');
  // existing Arabic Nexus wake phrase must still work unchanged
  assert.equal(context.isWakePhraseOnly(nexus),true,'existing Arabic Nexus phrase regression');
  assert.equal(context.isWakePhraseOnly('kyro'),true,'existing English kyro phrase regression');
});
