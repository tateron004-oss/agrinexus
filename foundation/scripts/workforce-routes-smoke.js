const { createFoundationRouter } = require("../src/app");
const { readConfig } = require("../src/config");
const { WorkforceRepository } = require("../src/modules/workforce/repository");
const { WorkforceService } = require("../src/modules/workforce/service");
const { WorkforceIntegrations } = require("../src/modules/workforce/integrations");
const { createDatabaseRuntime } = require("../src/runtime/database");
const { createRequestContext } = require("../src/runtime/request-context");
const { permissionsForRoles } = require("../src/runtime/permissions");

class FakeAdapter {
  constructor() {
    this.profile = {
      id: "candidate-1",
      user_id: "user-1",
      readiness_score: 60,
      eligibility: "Locked",
      career_track: "Foundation Pathway",
      pipeline_stage: "Profile Review",
      mentor_status: "Not yet",
      next_shift: "Awaiting scheduling",
      earnings_estimate: 180
    };
    this.roles = [
      { id: "role-1", tenant_id: "tenant-1", title: "Field Operations Agent", level: "Foundation", min_readiness: 45, status: "open" },
      { id: "role-2", tenant_id: "tenant-1", title: "Farmer Network Coordinator", level: "Advanced", min_readiness: 70, status: "open" }
    ];
    this.applications = [];
  }

  async query(sql, params) {
    if (sql.includes("from candidate_profiles")) return { rows: [this.profile] };
    if (sql.includes("update candidate_profiles")) {
      this.profile = {
        ...this.profile,
        eligibility: params[1] || this.profile.eligibility,
        career_track: params[2] || this.profile.career_track,
        pipeline_stage: params[3] || this.profile.pipeline_stage,
        mentor_status: params[4] || this.profile.mentor_status,
        next_shift: params[5] || this.profile.next_shift,
        earnings_estimate: params[6] ?? this.profile.earnings_estimate
      };
      return { rows: [this.profile] };
    }
    if (sql.includes("from workforce_roles") && sql.includes("order by wr.min_readiness")) return { rows: this.roles };
    if (sql.includes("from workforce_roles") && sql.includes("limit 1")) {
      return { rows: this.roles.filter(role => role.id === params[1]) };
    }
    if (sql.includes("insert into job_applications")) {
      const application = { id: `application-${this.applications.length + 1}`, candidate_profile_id: params[0], workforce_role_id: params[1], status: "submitted" };
      this.applications.push(application);
      return { rows: [application] };
    }
    if (sql.includes("insert into audit_events")) return { rows: [] };
    return { rows: [] };
  }
}

async function main() {
  const config = readConfig({ SESSION_SECRET: "test-secret" });
  const db = createDatabaseRuntime({ adapter: new FakeAdapter() });
  const workforceRepository = new WorkforceRepository(db);
  const integrations = new WorkforceIntegrations();
  const workforceService = new WorkforceService({ repository: workforceRepository, db, config, integrations });
  const router = createFoundationRouter({ workforceRepository, workforceService, config });
  const context = createRequestContext({
    tenantId: "tenant-1",
    userId: "user-1",
    roles: ["coordinator"],
    permissions: permissionsForRoles(["coordinator"])
  });

  const roles = await router.handle({ method: "GET", url: "/workforce/roles", headers: {}, context });
  if (roles.status !== 200 || roles.body.roles.length !== 2) throw new Error(`Expected two workforce roles, got status ${roles.status} count ${roles.body.roles && roles.body.roles.length}: ${JSON.stringify(roles.body)}`);

  const build = await router.handle({ method: "POST", url: "/workforce/profile/build", headers: {}, body: {}, context });
  if (build.status !== 200 || build.body.profile.eligibility !== "Eligible") throw new Error("Expected eligible profile.");

  const locked = await router.handle({ method: "POST", url: "/workforce/applications", headers: {}, body: { roleId: "role-2" }, context });
  if (locked.status !== 500 || !locked.body.error.includes("requires 70")) throw new Error("Expected readiness gate error.");

  const apply = await router.handle({ method: "POST", url: "/workforce/applications", headers: {}, body: { roleId: "role-1" }, context });
  if (apply.status !== 201 || apply.body.application.status !== "submitted") throw new Error("Expected submitted application.");
  if (apply.body.hrisRecord.provider !== "sandbox-hris") throw new Error("Expected HRIS sync.");
  if (integrations.notifications.messages.length < 1) throw new Error("Expected application notification.");

  const interview = await router.handle({ method: "POST", url: "/workforce/interviews", headers: {}, body: {}, context });
  if (interview.status !== 200 || interview.body.calendarEvent.provider !== "sandbox-calendar") throw new Error("Expected calendar interview event.");

  const shift = await router.handle({ method: "POST", url: "/workforce/shifts", headers: {}, body: { routeName: "West Africa Corridor", preferredStart: "Tomorrow 07:30" }, context });
  if (shift.status !== 200 || shift.body.shift.provider !== "sandbox-shift-scheduler") throw new Error("Expected shift scheduler update.");

  console.log("Workforce routes smoke passed");
}

main().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});
