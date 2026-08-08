"use strict";
const {REQUIRED_PROOFS,storedProofs}=require("./workspace-evidence-contract.js");
class WorkspaceMigrationRepository {
  constructor(db){if(!db?.query)throw new Error("A database runtime is required.");this.db=db;}
  async activate({workspaceId,proofs,releaseSha,rollbackRef}){
    const persistedProofs=storedProofs({workspaceId,proofs,releaseSha,rollbackRef});
    const result=await this.db.query(`insert into nexus_workspace_migrations(workspace_id,state,proofs,release_sha,activated_at)
      values ($1,'authoritative',$2,$3,now()) on conflict (workspace_id) do update set state='authoritative',proofs=excluded.proofs,
      release_sha=excluded.release_sha,activated_at=now(),updated_at=now() returning *`,[workspaceId,persistedProofs,releaseSha]);
    return (result.rows||result)[0];
  }
  async status(workspaceId){const result=await this.db.query("select * from nexus_workspace_migrations where workspace_id=$1",[workspaceId]);return (result.rows||result)[0]||{workspace_id:workspaceId,state:"legacy"};}
}
module.exports=Object.freeze({WorkspaceMigrationRepository,REQUIRED_PROOFS});
