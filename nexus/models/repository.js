"use strict";
const { createId } = require("../contracts/identifiers.js");

class ModelGovernanceRepository {
  constructor(db) { if (!db?.query || !db?.transaction) throw new Error("A transactional database runtime is required."); this.db = db; }

  async register(model) {
    requireFields(model, ["modelKey","version","domain","artifactChecksum","trainingProvenance","confidencePolicy","intendedUse","createdBy"]);
    const result = await this.db.query(`insert into nexus_model_versions
      (model_version_id,tenant_id,model_key,version,domain,artifact_checksum,training_provenance,confidence_policy,intended_use,limitations,created_by)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) returning *`,
    [model.modelVersionId||createId("modelVersion"),model.tenantId||null,model.modelKey,model.version,model.domain,
      model.artifactChecksum,model.trainingProvenance,model.confidencePolicy,model.intendedUse,model.limitations||[],model.createdBy]);
    return rows(result)[0];
  }

  async approve({ tenantId=null, modelVersionId, reviewerId, validationSummary }) {
    if (!reviewerId || !validationSummary) throw new Error("Reviewer and validation summary are required.");
    return this.db.transaction(async trx => {
      const current = rows(await trx.query(`select * from nexus_model_versions where tenant_id is not distinct from $1
        and model_version_id=$2 for update`,[tenantId,modelVersionId]))[0];
      if (!current || !["draft","validation"].includes(current.state)) throw new Error("Only a draft or validating model can be approved.");
      const result = await trx.query(`update nexus_model_versions set state='approved',reviewed_by=$3,reviewed_at=now(),
        validation_summary=$4,updated_at=now() where tenant_id is not distinct from $1 and model_version_id=$2 returning *`,
      [tenantId,modelVersionId,reviewerId,validationSummary]);
      return rows(result)[0];
    });
  }

  async activate({ tenantId=null, modelVersionId }) {
    return this.db.transaction(async trx => {
      const current = rows(await trx.query(`select * from nexus_model_versions where tenant_id is not distinct from $1
        and model_version_id=$2 for update`,[tenantId,modelVersionId]))[0];
      if (!current || current.state !== "approved") throw new Error("Expert-approved model version is required for activation.");
      await trx.query(`update nexus_model_versions set state='retired',updated_at=now()
        where tenant_id is not distinct from $1 and model_key=$2 and state='active'`,[tenantId,current.model_key]);
      const result=await trx.query(`update nexus_model_versions set state='active',activated_at=now(),updated_at=now()
        where tenant_id is not distinct from $1 and model_version_id=$2 returning *`,[tenantId,modelVersionId]);
      return rows(result)[0];
    });
  }

  async recordPrediction(input) {
    requireFields(input,["tenantId","modelVersionId","inputProvenance","output"]);
    const confidence=Number(input.confidence);
    if (!Number.isFinite(confidence)||confidence<0||confidence>1) throw new Error("Prediction confidence must be between 0 and 1.");
    const model=rows(await this.db.query(`select confidence_policy,domain from nexus_model_versions
      where tenant_id is not distinct from $1 and model_version_id=$2 and state='active'`,[input.tenantId,input.modelVersionId]))[0];
    if(!model) throw new Error("An active governed model version is required.");
    const threshold=Number(model.confidence_policy?.expertReviewBelow??1);
    const highRisk=["health","clinical"].includes(model.domain);
    const reviewRequired=highRisk || confidence < threshold;
    const disposition=reviewRequired ? "expert_review" : "informational";
    const result=await this.db.query(`insert into nexus_predictions
      (prediction_id,tenant_id,subject_id,task_id,model_version_id,input_provenance,output,confidence,disposition,review_state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *`,
    [input.predictionId||createId("prediction"),input.tenantId,input.subjectId||null,input.taskId||null,input.modelVersionId,
      input.inputProvenance,input.output,confidence,disposition,reviewRequired?"pending":"not_required"]);
    return rows(result)[0];
  }
}
function rows(result){return result.rows||result;}
function requireFields(value,fields){for(const field of fields) if(value?.[field]===undefined||value[field]===null||value[field]==="") throw new Error(`${field} is required.`);}
module.exports=Object.freeze({ModelGovernanceRepository});
