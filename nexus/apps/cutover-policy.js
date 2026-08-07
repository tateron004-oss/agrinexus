"use strict";

class WorkspaceCutoverPolicy {
  constructor({migrations,applications}) { this.migrations=migrations; this.applications=applications; }
  async requireAuthoritative(workspaceId) {
    if(!workspaceId || !this.applications.get(workspaceId)) { const error=new Error("A recognized workspace is required."); error.code="workspace_required"; error.status=400; throw error; }
    const migration=await this.migrations.status(workspaceId);
    if(migration.state!=="authoritative") { const error=new Error(`Workspace ${workspaceId} has not passed authoritative cutover.`); error.code="workspace_not_cut_over"; error.status=503; error.details={workspaceId,state:migration.state,legacyWriteFallback:false}; throw error; }
    return migration;
  }
}
module.exports=Object.freeze({WorkspaceCutoverPolicy});
