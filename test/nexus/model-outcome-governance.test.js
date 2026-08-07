"use strict";
const assert=require("node:assert/strict");
const test=require("node:test");
const fs=require("node:fs");
const path=require("node:path");
const {ModelGovernanceRepository}=require("../../nexus/models/repository.js");
const {OutcomeRepository}=require("../../nexus/verification/outcome-repository.js");

function fakeDb(results=[]){const calls=[];const db={calls,async query(sql,params){calls.push({sql,params});return results.shift()||{rows:[],rowCount:1};},async transaction(work){calls.push({transaction:"begin"});return work(db);}};return db;}

test("migration persists governed models, predictions, evidence, and verification",()=>{
  const sql=fs.readFileSync(path.join(__dirname,"../../foundation/migrations/005_nexus_model_governance.sql"),"utf8");
  for(const table of ["nexus_model_versions","nexus_predictions","nexus_outcome_evidence","nexus_outcome_verifications"])
    assert.match(sql,new RegExp(`create table if not exists ${table}`));
  assert.match(sql,/unique index if not exists nexus_active_model_version_idx/);
  assert.equal((sql.match(/enable row level security/g)||[]).length,4);
});

test("model activation requires expert approval and retires the prior active version",async()=>{
  const db=fakeDb([{rows:[{state:"approved",model_key:"bp-risk"}]},{rows:[]},{rows:[{state:"active"}]}]);
  const models=new ModelGovernanceRepository(db);
  const active=await models.activate({tenantId:"tenant",modelVersionId:"model_2"});
  assert.equal(active.state,"active");
  assert.match(db.calls[2].sql,/state='retired'/);
  assert.match(db.calls[3].sql,/state='active'/);
  await assert.rejects(new ModelGovernanceRepository(fakeDb([{rows:[{state:"draft"}]}])).activate({tenantId:"tenant",modelVersionId:"draft"}),/Expert-approved/);
});

test("health predictions always enter expert review with provenance and confidence",async()=>{
  const db=fakeDb([{rows:[{domain:"health",confidence_policy:{expertReviewBelow:0.8}}]},{rows:[{disposition:"expert_review",review_state:"pending"}]}]);
  const result=await new ModelGovernanceRepository(db).recordPrediction({tenantId:"tenant",subjectId:"patient",modelVersionId:"model_2",
    inputProvenance:{sources:["rpm-reading"]},output:{risk:"elevated"},confidence:0.93});
  assert.equal(result.review_state,"pending");
  assert.equal(db.calls[1].params[8],"expert_review");
  assert.equal(db.calls[1].params[9],"pending");
});

test("outcome verification is transactional and cannot pass without evidence",async()=>{
  const outcomes=new OutcomeRepository(fakeDb());
  await assert.rejects(outcomes.verify({tenantId:"tenant",taskId:"task_1",policyKey:"visible_document",verifier:"document-probe",verified:true,evidence:[]}),/evidence/i);
  const db=fakeDb([{rows:[]},{rows:[{state:"verified",evidence_ids:["evidence_1"]}]}]);
  const verified=await new OutcomeRepository(db).verify({tenantId:"tenant",taskId:"task_1",stepId:"step_1",policyKey:"visible_document",
    verifier:"document-probe",verified:true,evidence:[{evidenceId:"evidence_1",type:"render",source:"browser",observed:{pages:2,visible:true}}]});
  assert.equal(verified.state,"verified");
  assert.deepEqual(db.calls[2].params[8],["evidence_1"]);
});
