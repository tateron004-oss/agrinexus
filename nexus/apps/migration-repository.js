"use strict";
const REQUIRED_PROOFS=Object.freeze(["contract","tenant-isolation","durable-write","receipt","browser-outcome"]);
class WorkspaceMigrationRepository {
  constructor(db){if(!db?.query)throw new Error("A database runtime is required.");this.db=db;}
  async activate({workspaceId,proofs,releaseSha}){
    if(!workspaceId||!releaseSha)throw new Error("Workspace and release SHA are required.");
    const missing=REQUIRED_PROOFS.filter(key=>!proofs?.[key]);
    if(missing.length)throw new Error(`Workspace ${workspaceId} is missing migration proofs: ${missing.join(", ")}`);
    const result=await this.db.query(`insert into nexus_workspace_migrations(workspace_id,state,proofs,release_sha,activated_at)
      values ($1,'authoritative',$2,$3,now()) on conflict (workspace_id) do update set state='authoritative',proofs=excluded.proofs,
      release_sha=excluded.release_sha,activated_at=now(),updated_at=now() returning *`,[workspaceId,proofs,releaseSha]);
    return (result.rows||result)[0];
  }
  async status(workspaceId){const result=await this.db.query("select * from nexus_workspace_migrations where workspace_id=$1",[workspaceId]);return (result.rows||result)[0]||{workspace_id:workspaceId,state:"legacy"};}
}
module.exports=Object.freeze({WorkspaceMigrationRepository,REQUIRED_PROOFS});

