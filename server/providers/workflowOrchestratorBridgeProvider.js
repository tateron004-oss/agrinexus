const { clean, envEnabled, providerResponse, disabledResponse, requireConfirmation, blockedResponse } = require("./providerUtils");
const remindersProvider = require("./reminderProvider");
const offlineSyncProvider = require("./offlineSyncProvider");

const TEMPLATES = {
  "provider-visit": ["search provider", "save provider", "create route", "prepare questions", "add reminder", "optional communication draft"],
  "agriculture-support": ["crop observation", "learning resource", "marketplace input search", "field visit plan", "offline queue", "optional drone request"],
  "workforce-learning": ["learning resource", "save course", "reminder", "session preparation", "offline queue"],
  "marketplace-inquiry": ["listing search", "inquiry draft", "reminder", "route or field visit if safe location text exists", "offline queue"],
  "drone-service-request": ["mission request", "field visit plan", "reminder", "offline queue"],
  "health-access": ["medical support intake", "provider search", "telehealth session prep", "mobile clinic option", "pharmacy question draft", "patient support resource", "reminder", "offline queue"],
  "chronic-care-preparation": ["chronic disease intake", "DM/HTN/obesity focus", "RPM/RTM data capture option", "provider review report", "telehealth session prep", "mobile clinic screening option", "pharmacy question draft", "patient support resource", "reminder", "offline queue"],
  "telehealth-visit": ["telehealth intake", "select video provider", "prepare session", "create video session only if configured and confirmed", "prepare invite draft only", "reminder", "offline queue"],
  "mobile-clinic-visit": ["mobile clinic intake", "search mobile clinic", "prepare visit plan", "route by typed origin", "reminder", "offline queue"],
  "pharmacy-question": ["pharmacy intake", "search pharmacy", "prepare pharmacist question draft", "route by typed origin", "reminder", "offline queue"],
  "patient-navigation": ["patient support intake", "resource selection", "provider/clinic/pharmacy suggestions", "route by typed origin", "reminder", "offline queue"],
  "rpm-monitoring-preparation": ["RPM intake", "manual reading entry", "trend summary", "provider report", "reminder", "offline queue"],
  "rtm-participation": ["RTM intake", "activity/adherence entry", "participation summary", "provider report", "learning resource", "reminder", "offline queue"],
  "africa-rural-chronic-care": ["community health worker intake", "DM/HTN/obesity screening preparation", "manual RPM/RTM entry", "mobile clinic option", "telehealth provider review", "pharmacy question draft", "offline queue", "reminder"]
};

const BLOCKED_WORKFLOW_TEXT = /\b(send now|call now|pay now|book now|dispatch|use my location|camera|diagnos|prescri|medical record|secret|token|password)\b/i;

function status(env = process.env) {
  return { provider: "nexus-workflow-orchestrator-bridge", enabled: envEnabled("NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED", env, true), templates: Object.keys(TEMPLATES), planningOnly: true, noSilentExecution: true };
}

function workflowPlan(body = {}) {
  const type = clean(body.workflowType || body.type || "provider-visit").toLowerCase();
  const templateKey = TEMPLATES[type] ? type : "provider-visit";
  const title = clean(body.title || `${templateKey.replace(/-/g, " ")} workflow`).slice(0, 180);
  const context = clean(body.context || body.summary || "").slice(0, 500);
  const steps = TEMPLATES[templateKey].map((label, index) => ({
    id: `${templateKey}-step-${index + 1}`,
    label,
    state: /optional/i.test(label) ? "available_optional" : "available",
    requiresBridgeConfirmation: true,
    executionAuthorized: false
  }));
  return { id: clean(body.id || `workflow-${Date.now()}`), workflowType: templateKey, title, context, steps, executionAuthorized: false, createdAt: clean(body.createdAt) || new Date().toISOString() };
}

function validate(plan) {
  if (!plan.title) return "Workflow title is required.";
  if (BLOCKED_WORKFLOW_TEXT.test(`${plan.title} ${plan.context}`)) return "Workflow blocked because it asks for direct execution, payment, booking, dispatch, health execution, permission use, credential, or secret handling.";
  return "";
}

function plan(body = {}, db, env = process.env) {
  const provider = "nexus-workflow-orchestrator-bridge";
  const action = "workflows.plan";
  if (!envEnabled("NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED");
  const record = workflowPlan(body);
  const error = validate(record);
  if (error) return blockedResponse(provider, action, error);
  return providerResponse({ provider, action, status: "prepared", message: "Workflow plan prepared. The orchestrator coordinates steps but does not silently execute calls, messages, payments, bookings, drone actions, or location sharing.", data: { plan: record } });
}

function ensurePlans(db) {
  db.profile = db.profile || {};
  db.profile.nexusWorkflowPlans = db.profile.nexusWorkflowPlans || [];
  return db.profile.nexusWorkflowPlans;
}

function save(body = {}, db, env = process.env) {
  const provider = "nexus-workflow-orchestrator-bridge";
  const action = "workflows.save";
  if (!envEnabled("NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const record = workflowPlan(body);
  const error = validate(record);
  if (error) return blockedResponse(provider, action, error);
  ensurePlans(db).unshift(record);
  db.profile.nexusWorkflowPlans = db.profile.nexusWorkflowPlans.slice(0, 50);
  return providerResponse({ provider, action, status: "completed", message: "Workflow plan saved locally after explicit confirmation. No workflow step was executed.", data: { plan: record } });
}

function reminder(body = {}, db, env = process.env) {
  const provider = "nexus-workflow-orchestrator-bridge";
  const action = "workflows.reminder";
  if (!envEnabled("NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const record = workflowPlan(body);
  const error = validate(record);
  if (error) return blockedResponse(provider, action, error);
  const result = remindersProvider.create({ confirmed: true, title: `Workflow review: ${record.title}`, dueAt: clean(body.dueAt || "next workflow review"), note: "Workflow reminder only; no bridge action was executed." }, db, env);
  if (result.body?.status !== "completed") return result;
  return providerResponse({ provider, action, status: "completed", message: "Workflow reminder created after explicit confirmation.", data: { reminder: result.body.data.reminder } });
}

function offline(body = {}, db, env = process.env) {
  const provider = "nexus-workflow-orchestrator-bridge";
  const action = "workflows.offline";
  if (!envEnabled("NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const record = workflowPlan(body);
  const error = validate(record);
  if (error) return blockedResponse(provider, action, error);
  const queued = offlineSyncProvider.queueItem({ confirmed: true, type: "workflow_plan", content: JSON.stringify({ workflowType: record.workflowType, title: record.title, stepLabels: record.steps.map(step => step.label), noExecution: true }) }, db, env);
  if (queued.body?.status !== "completed") return queued;
  return providerResponse({ provider, action, status: "completed", message: "Workflow metadata queued locally for offline review. No workflow step was queued for execution.", data: { item: queued.body.data.item } });
}

module.exports = { status, plan, save, reminder, offline, workflowPlan };
