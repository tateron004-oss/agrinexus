const fs = require("node:fs");
const assert = require("node:assert/strict");
const provider = require("../server/providers/workflowOrchestratorBridgeProvider");

const server = fs.readFileSync("server.js", "utf8");
const app = fs.readFileSync("public/app.js", "utf8");

(() => {
  assert(server.includes("/api/nexus/tools/workflows/plan"));
  assert(server.includes("/api/nexus/tools/workflows/offline"));
  assert(app.includes("Unified Workflow Orchestrator Bridge"));
  const db = { profile: {} };
  const plan = provider.plan({ workflowType: "provider-visit", title: "Provider visit workflow" }, db, {});
  assert.equal(plan.body.status, "prepared");
  assert.equal(plan.body.data.plan.executionAuthorized, false);
  assert(plan.body.data.plan.steps.every(step => step.executionAuthorized === false));
  [
    "health-access",
    "chronic-care-preparation",
    "telehealth-visit",
    "mobile-clinic-visit",
    "pharmacy-question",
    "patient-navigation",
    "rpm-monitoring-preparation",
    "rtm-participation",
    "africa-rural-chronic-care"
  ].forEach(workflowType => {
    const medicalPlan = provider.plan({ workflowType, title: `${workflowType} workflow`, context: "prepare for provider review" }, db, {});
    assert.equal(medicalPlan.body.status, "prepared", `${workflowType} should prepare`);
    assert.equal(medicalPlan.body.data.plan.executionAuthorized, false, `${workflowType} must not execute`);
    assert(medicalPlan.body.data.plan.steps.every(step => step.executionAuthorized === false), `${workflowType} steps must be non-executing`);
  });
  assert.equal(provider.plan({ title: "call now and pay now" }, db, {}).body.status, "blocked");
  assert.equal(provider.save({ title: "Provider visit workflow" }, db, {}).body.status, "confirmation_required");
  assert.equal(provider.save({ confirmed: true, title: "Provider visit workflow" }, db, {}).body.status, "completed");
  assert.equal(provider.reminder({ confirmed: true, title: "Provider visit workflow" }, db, {}).body.status, "completed");
  assert.equal(provider.offline({ confirmed: true, title: "Provider visit workflow" }, db, {}).body.status, "completed");
  console.log("PASS workflow orchestrator creates plans without silent execution");
})();
