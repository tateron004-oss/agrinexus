'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const {routeCommand}=require('../nexus-core/router');
const {extractIntentAndParameters:extract}=require('../nexus-core/intent-parameter-extractor');
const {normalizeGuidedEntryTranscript:normalize}=require('../nexus-core/guided-entry-transcript-normalizer');
test('explicit workspace selection overrides a prior map even with again',()=>{
 const ctx={activeWorkspace:'maps',parameters:{place:'Nairobi'},transactionId:'previous'};
 for(const [text,workspace] of [['Open pharmacy support again','pharmacy'],['Open reminders again','reminders'],['Open telehealth intake again','telehealth']]){const r=routeCommand(text,'connected',ctx);assert.equal(r.workspace,workspace);assert.equal(r.contextual,false);}
 assert.equal(routeCommand('Open pharmacy support','listening',ctx).accepted,false);
});
test('recovered domain vocabulary preserves clinical and agricultural context',()=>{
 for(const [text,workspace] of [['Find pharmacies near: Nairobi','pharmacy'],['Open RPM','health'],['Open video-visit','telehealth'],['Create a health form','health'],['Find maize disease images','agriculture'],['Show offline queue','offline']])assert.equal(extract(text).workflow,workspace,text);
 assert.equal(extract('Find pharmacies near: Nairobi').parameters.location,'Nairobi');
 assert.equal(extract("Nexus, show today's live weather in: Nairobi, Kenya.").parameters.location,'Nairobi, Kenya');
 assert.equal(extract('Nexus, show source-labeled pictures of possible maize diseases.').workflow,'agriculture');
 const r=routeCommand('Explain their requirements','connected',{activeWorkspace:'workforce',parameters:{location:'Nairobi'}});assert.equal(r.workspace,'workforce');assert.equal(r.contextual,true);
});
test('wake spelling recovery requires a known field and preserves clinical values',()=>{
 const fields=[{key:'notes',label:'Notes'}];
 for(const wake of ['Nextus','Nextis']){const r=normalize(wake+' add notes chest pain present',{fields});assert.equal(r.normalized,'Nexus add notes chest pain present');assert.ok(r.rules.includes('wake-alias-to-nexus'));assert.equal(normalize(wake+' add unknown chest pain',{fields}).changed,false);}
});
