const { json } = require("../../runtime/http");
const { requirePermission } = require("../../runtime/permissions");

function registerWorkforceRoutes(router, { workforceRepository, workforceService }) {
  router.add("GET /workforce/profile", requirePermission("workforce:read", async request => {
    const profile = await workforceRepository.getCandidateProfile(request.context.userId);
    if (!profile) return json(404, { error: "Candidate profile not found" });
    return json(200, { profile });
  }));

  router.add("GET /workforce/roles", requirePermission("workforce:read", async request => {
    const roles = await workforceRepository.listRoles(request.context.tenantId);
    return json(200, { roles });
  }));

  router.add("POST /workforce/profile/build", requirePermission("workforce:write", async request => {
    return json(200, await workforceService.buildProfile({ context: request.context }));
  }));

  router.add("POST /workforce/interviews", requirePermission("workforce:write", async request => {
    return json(200, await workforceService.scheduleInterview({ context: request.context }));
  }));

  router.add("POST /workforce/shifts", requirePermission("workforce:write", async request => {
    return json(200, await workforceService.startShift({
      context: request.context,
      routeName: request.body.routeName,
      preferredStart: request.body.preferredStart
    }));
  }));

  router.add("POST /workforce/mentors", requirePermission("workforce:write", async request => {
    return json(200, await workforceService.assignMentor({ context: request.context }));
  }));

  router.add("POST /workforce/earnings-estimate", requirePermission("workforce:write", async request => {
    return json(200, await workforceService.estimateEarnings({ context: request.context }));
  }));

  router.add("POST /workforce/applications", requirePermission("workforce:write", async request => {
    return json(201, await workforceService.applyToRole({
      context: request.context,
      roleId: request.body.roleId
    }));
  }));
}

module.exports = { registerWorkforceRoutes };
