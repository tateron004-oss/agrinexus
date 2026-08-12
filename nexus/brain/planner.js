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
    const completeTelehealthIntake = completeTelehealthIntakePlan(command.text, catalog);
    if (completeTelehealthIntake) return Object.freeze({ ...completeTelehealthIntake, planningAttempts: 1 });
    const completeMarketplaceSearch = completeMarketplaceSearchPlan(command.text, catalog);
    if (completeMarketplaceSearch) return Object.freeze({ ...completeMarketplaceSearch, planningAttempts: 1 });
    const completeLiveKnowledge = completeLiveKnowledgePlan(command.text, catalog);
    if (completeLiveKnowledge) return Object.freeze({ ...completeLiveKnowledge, planningAttempts: 1 });
    const completeMobileClinic = completeMobileClinicPlan(command.text, catalog);
    if (completeMobileClinic) return Object.freeze({ ...completeMobileClinic, planningAttempts: 1 });
    const completeMediaPlayback = completeMediaPlaybackPlan(command.text, catalog);
    if (completeMediaPlayback) return Object.freeze({ ...completeMediaPlayback, planningAttempts: 1 });
    const completeDocument = completeDocumentPlan(command.text, catalog);
    if (completeDocument) return Object.freeze({ ...completeDocument, planningAttempts: 1 });
    const request = { schema: "nexus.planning-request.v1", goal: command.text, locale: interactionProfile.locale,
      channel: command.channel, priorTask: summarizeTask(priorTask),
      interactionProfile,
      conversationHistory: conversationHistory.slice(-24).map(safeTurn),
      memories: memories.map(safeMemory), catalog };
    let feedback = [];
    for (let attempt = 0; attempt <= this.maxRepairAttempts; attempt += 1) {
      const candidate = canonicalizeExplicitApplication(await this.model.plan({ ...request, feedback, attempt }), command.text, catalog);
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

function canonicalizeExplicitApplication(candidate, text, catalog) {
  if (!candidate || typeof candidate !== "object") return candidate;
  const goal = String(text || "").toLowerCase();
  const explicit = catalog.applications.slice().sort((a, b) => b.applicationId.length - a.applicationId.length).find(app => {
    const phrase = app.applicationId.replace(/-/g, " ").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`\\b${phrase.replace(/\s+/g, "\\s+(?:and\\s+)?")}\\b`, "i").test(goal);
  });
  if (!explicit || candidate.application === explicit.applicationId) return candidate;
  const capabilities = new Set(explicit.capabilities || []);
  const toolsCompatible = (candidate.steps || []).every(step => !step.toolId || capabilities.has(step.toolId));
  return toolsCompatible ? { ...candidate, application: explicit.applicationId } : candidate;
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

function completeTelehealthIntakePlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\btelehealth\b/i.test(goal) || !/\b(save|prepare|create|start|record)\b/i.test(goal) ||
      !/\b(intake|concern|visit|consultation|appointment)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "telehealth.prepare") ||
      !catalog.applications.some(app => app.applicationId === "telehealth")) return null;
  return { goal, application: "telehealth", riskTier: "regulated", clarification: null,
    steps: [{ clientStepId: "prepare-telehealth-intake", title: "Save telehealth intake",
      toolId: "telehealth.prepare", input: { concern: goal, requestedNextStep: true },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeMarketplaceSearchPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\bmarketplace\b/i.test(goal) || !/\b(find|search|show|browse)\b/i.test(goal) ||
      !/\b(listing|listings|product|products|offer|offers)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "marketplace.search") ||
      !catalog.applications.some(app => app.applicationId === "marketplace")) return null;
  const crop = goal.match(/\b(maize|corn|cassava|rice|wheat|sorghum|millet|beans?)\b/i)?.[1] || "agriculture";
  return { goal, application: "marketplace", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "search-marketplace", title: "Search marketplace listings",
      toolId: "marketplace.search", input: { query: crop, selectListing: /\bselect\b/i.test(goal) },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeLiveKnowledgePlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/[?]|\b(why|what|how|when|where|who)\b/i.test(goal) || !/\b(current|latest|live|sources?)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "knowledge.search") ||
      !catalog.applications.some(app => app.applicationId === "live-knowledge")) return null;
  return { goal, application: "live-knowledge", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "search-live-knowledge", title: "Search current governed sources",
      toolId: "knowledge.search", input: { query: goal, requireCurrentSources: true }, dependsOn: [], fallbackToolIds: [] }] };
}

function completeMobileClinicPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\bmobile\s+clinic\b/i.test(goal) || !/\b(find|search|show|locate)\b/i.test(goal) ||
      !/\b(location|locations|near|nearest|closest)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "clinic.find") ||
      !catalog.applications.some(app => app.applicationId === "mobile-clinic")) return null;
  const location = goal.match(/\b(?:near|in|around)\s+([a-z][a-z .'-]*?)(?=\s+(?:and|then|with)\b|[,.]|$)/i)?.[1]?.trim() || "current location";
  return { goal, application: "mobile-clinic", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "find-mobile-clinic", title: "Find mobile clinic locations",
      toolId: "clinic.find", input: { location, selectClosest: /\b(nearest|closest|select)\b/i.test(goal) },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeMediaPlaybackPlan(text, catalog) {
  const goal = String(text || "").trim();
  const requestedMedia = goal.replace(/^\s*(?:nexus[,:]?\s*)?play\s+/i, "").replace(/\s+and\s+confirm\b.*$/i, "").trim();
  if (!/^\s*(?:nexus[,:]?\s*)?play\b/i.test(goal) || !requestedMedia) return null;
  if (!catalog.tools.some(tool => tool.toolId === "media.play") ||
      !catalog.applications.some(app => app.applicationId === "music-media")) return null;
  return { goal, application: "music-media", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "play-media", title: "Play requested media", toolId: "media.play",
      input: { action: "play", requestedMedia, resolvedMedia: requestedMedia, playbackState: "playing" },
      dependsOn: [], fallbackToolIds: [] }] };
}

function completeDocumentPlan(text, catalog) {
  const goal = String(text || "").trim();
  if (!/\b(create|write|draft|make)\b/i.test(goal) || !/\b(document|plan|report|resume|résumé)\b/i.test(goal) ||
      !/\b(save|reopen|open again|persist)\b/i.test(goal)) return null;
  if (!catalog.tools.some(tool => tool.toolId === "documents.create") ||
      !catalog.applications.some(app => app.applicationId === "documents")) return null;
  return { goal, application: "documents", riskTier: "low", clarification: null,
    steps: [{ clientStepId: "create-document", title: "Create, save, and verify document",
      toolId: "documents.create", input: { title: "Farming plan", content: goal, reopenAfterSave: true },
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

module.exports = Object.freeze({ OpenEndedPlanner, canonicalizeExplicitApplication, completeHealthRecordPlan,
  completeTelehealthIntakePlan, completeMarketplaceSearchPlan, completeLiveKnowledgePlan,
  completeMobileClinicPlan, completeMediaPlaybackPlan, completeDocumentPlan, validatePlan });
