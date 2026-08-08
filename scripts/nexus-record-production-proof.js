#!/usr/bin/env node
"use strict";
const fs=require("node:fs");
function required(value,label){if(!value)throw new Error(`${label} is required`);return value;}
async function post(url,token,body){const response=await fetch(url,{method:"POST",headers:{authorization:`Bearer ${token}`,"content-type":"application/json",accept:"application/json"},body:JSON.stringify(body)});const text=await response.text();let parsed;try{parsed=JSON.parse(text);}catch{parsed={raw:text.slice(0,500)}}if(!response.ok)throw new Error(`${url} returned ${response.status}: ${JSON.stringify(parsed)}`);return parsed;}
async function run(env=process.env){const base=required(env.NEXUS_BASE_URL,"NEXUS_BASE_URL").replace(/\/$/,"");const token=required(env.NEXUS_ACCEPTANCE_TOKEN,"NEXUS_ACCEPTANCE_TOKEN");const releaseSha=required(env.EXPECTED_RELEASE_SHA,"EXPECTED_RELEASE_SHA");const proof=JSON.parse(fs.readFileSync(required(env.NEXUS_PROOF_FILE,"NEXUS_PROOF_FILE"),"utf8"));
 if(proof.ok!==true||proof.releaseSha!==releaseSha)throw new Error("Proof is not a successful result for the exact release SHA.");
 const results=[];for(const component of proof.components||[])results.push(await post(`${base}/api/nexus/runtime/production-acceptance/evidence`,token,{releaseSha,component:component.name,status:"passed",evidence:component.evidence,source:proof.source}));
 for(const workspace of proof.workspaces||[])results.push(await post(`${base}/api/nexus/runtime/production-acceptance/workspaces/${encodeURIComponent(workspace.workspaceId)}`,token,{releaseSha,proofs:workspace.proofs}));
 console.log(JSON.stringify({ok:true,releaseSha,recorded:results.length},null,2));return results;}
if(require.main===module)run().catch(error=>{console.error(error.message);process.exit(1)});module.exports={run};
