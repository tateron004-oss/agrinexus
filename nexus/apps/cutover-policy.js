"use strict";

class WorkspaceCutoverPolicy {
  constructor({ migrations, applications, authorityCoverage }) {
    if (!migrations?.status || !applications?.get || !authorityCoverage?.requireApplication) {
      throw new Error("Workspace migrations, applications, and authority coverage are required.");
    }
    Object.assign(this, { migrations, applications, authorityCoverage });
  }

  async requireAuthoritative(workspaceId) {
    if (!workspaceId || !this.applications.get(workspaceId)) {
      const error = new Error("A recognized workspace is required.");
      error.code = "workspace_required"; error.status = 400; throw error;
    }
    const ownership = await this.authorityCoverage.requireApplication(workspaceId);
    const migration = await this.migrations.status(workspaceId);
    if (migration.state !== "authoritative") {
      const error = new Error(`Workspace ${workspaceId} has not passed authoritative cutover.`);
      error.code = "workspace_not_cut_over"; error.status = 503;
      error.details = { workspaceId, state: migration.state, authorityComplete: ownership.authoritative,
        legacyWriteFallback: false };
      throw error;
    }
    return Object.freeze({ ...migration, authorityComplete: true, ownership });
  }
}

module.exports = Object.freeze({ WorkspaceCutoverPolicy });
