"use strict";
const { createId } = require("../contracts/identifiers.js");

class ArtifactRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  async create(item) {
    if (!item.tenantId || !item.ownerId || !item.checksum || !item.kind || !item.title) throw new Error("Artifact tenant, owner, kind, title, and checksum are required.");
    const id = item.artifactId || createId("artifact");
    const result = await this.db.query(`insert into nexus_artifacts
      (artifact_id,tenant_id,owner_id,task_id,kind,title,content_type,object_key,checksum,size_bytes,metadata,retention_until)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) returning *`,
    [id,item.tenantId,item.ownerId,item.taskId||null,item.kind,item.title,item.contentType||null,item.objectKey||null,
      item.checksum,item.sizeBytes??null,item.metadata||{},item.retentionUntil||null]);
    return (result.rows || result)[0];
  }
  async list({ tenantId, ownerId, taskId, limit = 100 }) {
    const values=[tenantId,ownerId]; let where="tenant_id=$1 and owner_id=$2 and deleted_at is null";
    if(taskId){values.push(taskId);where+=` and task_id=$${values.length}`;} values.push(Math.min(Math.max(limit,1),200));
    const result=await this.db.query(`select * from nexus_artifacts where ${where} order by updated_at desc limit $${values.length}`,values);
    return result.rows || result;
  }
  async remove({ tenantId, ownerId, artifactId }) {
    const result=await this.db.query(`update nexus_artifacts set state='deleted',deleted_at=now(),object_key=null,updated_at=now()
      where tenant_id=$1 and owner_id=$2 and artifact_id=$3 and deleted_at is null returning artifact_id`,[tenantId,ownerId,artifactId]);
    return Boolean((result.rows || result)[0]);
  }
}
module.exports=Object.freeze({ArtifactRepository});

