const { createModule } = require("../../module-factory");

const workforceModule = createModule({
  name: "workforce",
  owner: "workforce",
  responsibilities: [
    "Candidate profile",
    "Readiness gating",
    "Job applications",
    "Interview and shift workflow",
    "Mentor assignment"
  ],
  routes: [
    "GET /workforce/profile",
    "POST /workforce/profile/build",
    "GET /workforce/roles",
    "POST /workforce/applications",
    "POST /workforce/interviews",
    "POST /workforce/shifts"
  ],
  tables: ["workforce_roles", "candidate_profiles", "job_applications"],
  integrations: ["calendar provider", "notification provider", "HRIS provider"]
});

module.exports = { workforceModule };
