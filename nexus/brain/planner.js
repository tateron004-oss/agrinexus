"use strict";

const { NexusRuntimeError } = require("../runtime/authoritative-task-engine.js");
const { createInteractionProfile } = require("../experience/interaction-profile.js");

class OpenEndedPlanner {
  constructor({ model, tools, applications, memory, maxRepairAttempts = 2 }) {
    if (!model?.plan) throw new Error("A planning model is required.");
    Object.assign(this, { model, tools, applications, memory, maxRepairAttempts });
  }

  async plan({ command, context, priorTask = null, conversationHistory = [] }) {
    const memories = this.memory ? await this.memory.search({ tenantId: command.tenantId, userId: command.actorId,
      purpose: "task_planning", query: command.text, roles: context.roles || [], limit: 8 }) : [];
    const catalog = await this.catalog();
    const interactionProfile = createInteractionProfile({ locale: command.locale,
      userPreferences: context.userPreferences || {}, channel: command.channel });
    const completeHealthRecord = completeHealthRecordPlan(command.text, catalog);
    if (completeHealthRecord) return Object.freeze({ ...completeHealthRecord, planningAttempts: 1 });
    const request = { schema: "nexus.planning-request.v1", goal: command.text, locale: interactionProfile.locale,
      channel: command.channel, priorTask: summarizeTask(priorTask),
      interactionProfile,
      conversationHistory: conversationHistory.slice(-24).map(safeTurn),
      memories: memories.map(safeMemory), catalog };
    let feedback = [];
    for (let attempt = 0; attempt <= this.maxRepairAttempts; attempt += 1) {
      const candidate = await this.model.plan({ ...request, feedback, attempt });
      const validation = validatePlan(candidate, catalog, context);
      if (validation.valid) return Object.freeze({ ...validation.plan, planningAttempts: attempt + 1 });
      feedback = validation.errors;
    }
    throw new NexusRuntimeError("plan_invalid", "Nexus could not produce a safe executable plan.", 422, { feedback });
  }

  async catalog() {
    const [tools, applications] = await Promise.all([this.tools.list(), Promise.resolve(this.applications.list())]);
    return { tools: tools.filter(tool => tool.availability !== "unavailable").map(tool => ({ toolId: tool.tool_id,
      domain: tool.domain, description: tool.description, riskTier: tool.risk_tier,
      requiredPermission: tool.required_permission || null,
      confirmationRequired: tool.confirmation_required, consentScope: tool.consent_scope })),
    applications: applications.map(app => ({ applicationId: app.applicationId, capabilities: app.capabilities, riskTiers: app.riskTiers })) };
  }
}

function completeHealthRecordPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(record|log|save|add|capture)\b/i.test(goal) || !/\b(blood\s*pressure|bp)\b/i.test(goal)) return null;
  const match = goal.match(/\b(?:blood\s*pressure|bp)\b[^\d]{0,40}(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b/i) ||
    goal.match(/\b(\d{2,3})\s*(?:over|\/)\s*(\d{2,3})\b[^.]{0,40}\b(?:blood\s*pressure|bp)\b/i);
  if (!match || !catalog.tools.some(tool => tool.toolId === "health.record") ||
      !catalog.applications.some(app => app.applicationId === "health")) return null;
  const systolic = Number(match[1]); const diastolic = Number(match[2]);
  if (systolic < 40 || systolic > 300 || diastolic < 20 || diastolic > 200) return null;
  return { goal, application: "health", riskTier: "regulated", clarification: null, steps: [{ clientStepId: "record-reading",
    title: "Record blood pressure reading", toolId: "health.record",
    input: { intakeType: "blood-pressure", readingType: "blood-pressure", systolic, diastolic },
    dependsOn: [], fallbackToolIds: [] }] };
}

function validatePlan(candidate, catalog, context) {
  const errors = []; const toolIds = new Set(catalog.tools.map(tool => tool.toolId));
  const applicationIds = new Set(catalog.applications.map(app => app.applicationId));
  if (!candidate || typeof candidate !== "object") errors.push("Plan must be an object.");
  if (!String(candidate?.goal || "").trim()) errors.push("Plan goal is required.");
  if (!applicationIds.has(candidate?.application)) errors.push(`Unknown application: ${candidate?.application || "missing"}.`);
  const clarification = String(candidate?.clarification || "").trim();
  if (!Array.isArray(candidate?.steps) || (!candidate.steps.length && !clarification)) errors.push("At least one plan step or a clarification is required.");
  const ids = new Set();
  for (const [index, step] of (candidate?.steps || []).entries()) {
    const id = String(step.id || `step_${index + 1}`); if (ids.has(id)) errors.push(`Duplicate step id: ${id}.`); ids.add(id);
    if (!String(step.title || "").trim()) errors.push(`Step ${id} requires a title.`);
    if (!clarification && !step.toolId) errors.push(`Step ${id} requires an executable tool.`);
    if (step.toolId && !toolIds.has(step.toolId)) errors.push(`Step ${id} references unavailable tool ${step.toolId}.`);
    if (step.requiredPermission && !context.can(step.requiredPermission)) errors.push(`Step ${id} requires unavailable permission ${step.requiredPermission}.`);
  }
  for (const step of candidate?.steps || []) for (const dependency of step.dependsOn || []) if (!ids.has(String(dependency))) errors.push(`Unknown dependency ${dependency}.`);
  if (hasCycle(candidate?.steps || [])) errors.push("Plan dependencies contain a cycle.");
  if (errors.length) return { valid: false, errors };
  return { valid: true, plan: { goal: candidate.goal.trim(), application: candidate.application,
    riskTier: candidate.riskTier || "low", clarification: clarification || null,
    steps: candidate.steps.map((step, index) => ({ clientStepId: String(step.id || `step_${index + 1}`), title: step.title.trim(),
      toolId: step.toolId || null, input: step.input || {}, dependsOn: step.dependsOn || [], fallbackToolIds: step.fallbackToolIds || [] })) } };
}

function hasCycle(steps) {
  const graph = new Map(steps.map((step, index) => [String(step.id || `step_${index + 1}`), (step.dependsOn || []).map(String)]));
  const active = new Set(); const done = new Set();
  function visit(id) { if (active.has(id)) return true; if (done.has(id)) return false; active.add(id); for (const dep of graph.get(id) || []) if (visit(dep)) return true; active.delete(id); done.add(id); return false; }
  return [...graph.keys()].some(visit);
}
function summarizeTask(task) { return task ? { taskId: task.taskId, goal: task.goal, application: task.application, state: task.state, outcome: task.outcome || null } : null; }
function safeMemory(item) { return { kind: item.kind, content: item.content, confidence: item.confidence, provenance: item.provenance, occurredAt: item.occurred_at || item.occurredAt }; }
function safeTurn(item) { return { role: item.role, content: item.content, occurredAt: item.created_at || item.occurredAt }; }

module.exports = Object.freeze({ OpenEndedPlanner, completeHealthRecordPlan, validatePlan });
