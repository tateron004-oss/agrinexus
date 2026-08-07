"use strict";
const { createId } = require("../contracts/identifiers.js");

class OutcomeRepository {
  constructor(db) { if(!db?.query||!db?.transaction) throw new Error("A transactional database runtime is required."); this.db=db; }

  async verify(input) {
    if(!input.tenantId||!input.taskId||!input.policyKey||!input.verifier) throw new Error("Tenant, task, policy, and verifier are required.");
    if(!Array.isArray(input.evidence)||!input.evidence.length) throw new Error("Outcome evidence is required.");
    return this.db.transaction(async trx=>{
      const evidenceIds=[];
      for(const item of input.evidence){
        if(!item.type||!item.source||item.observed===undefined) throw new Error("Evidence type, source, and observation are required.");
        const id=item.evidenceId||createId("evidence"); evidenceIds.push(id);
        await trx.query(`insert into nexus_outcome_evidence
          (evidence_id,tenant_id,task_id,step_id,execution_id,evidence_type,source,locator,checksum,observed,expires_at)
          values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
        [id,input.tenantId,input.taskId,input.stepId||null,input.executionId||null,item.type,item.source,item.locator||null,item.checksum||null,item.observed,item.expiresAt||null]);
      }
      const state=input.verified===true?"verified":input.verified===false?"failed":"inconclusive";
      const result=await trx.query(`insert into nexus_outcome_verifications
        (verification_id,tenant_id,task_id,step_id,execution_id,policy_key,state,verifier,evidence_ids,details)
        values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *`,
      [input.verificationId||createId("verification"),input.tenantId,input.taskId,input.stepId||null,input.executionId||null,
        input.policyKey,state,input.verifier,evidenceIds,input.details||{}]);
      return rows(result)[0];
    });
  }
}
function rows(result){return result.rows||result;}
module.exports=Object.freeze({OutcomeRepository});
