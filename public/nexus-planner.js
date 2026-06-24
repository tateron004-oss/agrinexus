(function nexusPlannerFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    const classifier = require("./nexus-intent-classifier.js");
    const registry = require("./nexus-tool-registry.js");
    const policyEngine = require("./nexus-policy-engine.js");
    module.exports = factory(classifier, registry, policyEngine);
  } else {
    root.NexusPlanner = factory(root.NexusIntentClassifier, root.NexusToolRegistry, root.NexusPolicyEngine);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPlannerModule(intentClassifier, toolRegistry, policyEngine) {
  const PLANNING_STATUSES = Object.freeze([
    "informational",
    "preview_only",
    "needs_clarification",
    "permission_required",
    "confirmation_required",
    "blocked",
    "not_implemented",
    "future_pending_action",
    "complete_without_execution"
  ]);

  const PLANNER_SOURCE = "nexus-planner.v1";

  function clone(value) {
    return value && typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }

  function normalizeText(value = "") {
    if (intentClassifier?.normalizeIntentText) return intentClassifier.normalizeIntentText(value);
    return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function classify(input = {}) {
    const text = typeof input === "string" ? input : input.text || input.command || input.userMessage || "";
    if (input.intentClassification && typeof input.intentClassification === "object") return input.intentClassification;
    if (typeof intentClassifier?.classifyNexusIntent === "function") {
      return intentClassifier.classifyNexusIntent({ text, ...(typeof input === "object" ? input : {}) });
    }
    return {
      id: "unknown.unsupported",
      domain: "general",
      category: "unknown",
      risk: "controlled",
      actionType: "unsupported",
      selectedToolId: null,
      requiresConfirmation: false,
      requiresPermission: false,
      confidence: 0,
      source: "planner-fallback",
      normalizedText: normalizeText(text),
      entities: {},
      notes: ["Intent classifier unavailable."]
    };
  }

  function getTool(intent = {}, explicitTool = null) {
    if (explicitTool && typeof explicitTool === "object") return explicitTool;
    if (!toolRegistry) return null;
    if (intent.selectedToolId && typeof toolRegistry.getNexusToolById === "function") {
      const selected = toolRegistry.getNexusToolById(intent.selectedToolId);
      if (selected) return selected;
    }
    if (intent.id && typeof toolRegistry.findNexusToolsByIntent === "function") {
      const matches = toolRegistry.findNexusToolsByIntent(intent.id).filter(tool => tool.enabled !== false);
      if (matches.length) {
        const text = String(intent.normalizedText || "").toLowerCase();
        if (intent.id === "health.video_or_care.permissioned") {
          if (/\b(telehealth|video call|doctor|clinic|health|medical|medicine|patient)\b/.test(text)) {
            return matches.find(tool => tool.id === "health.telehealth_video") || matches[0];
          }
          if (/\b(injury|show injury|provider)\b/.test(text)) {
            return matches.find(tool => tool.id === "health.show_injury") || matches[0];
          }
          if (/\b(camera)\b/.test(text)) {
            return matches.find(tool => tool.id === "health.camera_preview") || matches[0];
          }
        }
        if (intent.id === "communications.outbound_contact.controlled") {
          if (/\b(provider|doctor|clinic|health worker)\b/.test(text)) {
            return matches.find(tool => tool.id === "communications.call_provider") || matches[0];
          }
          if (/\b(buyer|seller)\b/.test(text)) {
            return matches.find(tool => tool.id === "communications.contact_marketplace_party") || matches[0];
          }
          if (/\b(message|text|sms|email|whatsapp|telegram)\b/.test(text)) {
            return matches.find(tool => tool.id === "communications.message_contact") || matches[0];
          }
          return matches.find(tool => tool.id === "communications.call_contact") || matches[0];
        }
        return matches.find(tool => tool.risk === intent.risk) || matches[0];
      }
    }
    return null;
  }

  function decidePolicy(intent = {}, tool = null, context = {}) {
    if (context.policyDecision && typeof context.policyDecision === "object") return context.policyDecision;
    if (typeof policyEngine?.buildNexusPolicyDecision === "function") {
      return policyEngine.buildNexusPolicyDecision(intent, tool, context);
    }
    if (typeof policyEngine?.evaluateNexusPolicy === "function") {
      return policyEngine.evaluateNexusPolicy({
        text: context.text || context.command || "",
        intentClassification: intent,
        toolMetadata: tool,
        context
      });
    }
    return {
      decisionId: `policy.${intent.id || "unknown"}.${tool?.id || "no_tool"}`,
      intentId: intent.id || "unknown.unsupported",
      toolId: tool?.id || intent.selectedToolId || null,
      domain: tool?.domain || intent.domain || "general",
      risk: tool?.risk || intent.risk || "controlled",
      actionType: tool?.actionType || intent.actionType || "unsupported",
      status: "unsupported",
      allowed: false,
      requiresPermission: false,
      permissionType: "none",
      requiresConfirmation: false,
      confirmationType: "none",
      blocked: false,
      blockReason: "",
      clarificationRequired: true,
      clarificationPrompt: "Nexus needs more detail before planning safely.",
      previewOnly: false,
      canRoute: false,
      canExecute: false,
      executionStatus: "metadata_only",
      nextSafeStep: "Ask a clarifying question.",
      policySource: "planner-policy-fallback",
      notes: ["Policy engine unavailable; planner remains non-executing."]
    };
  }

  function statusFromPolicy(policy = {}) {
    if (policy.status === "allow_answer") return "informational";
    if (policy.status === "allow_preview" || policy.status === "allow_route") return "preview_only";
    if (policy.status === "require_permission") return "permission_required";
    if (policy.status === "require_confirmation") return "confirmation_required";
    if (policy.status === "clarify" || policy.clarificationRequired) return "needs_clarification";
    if (policy.status === "blocked") return "blocked";
    if (policy.status === "not_implemented") return "not_implemented";
    return "needs_clarification";
  }

  function summaryFor(status, intent = {}, tool = null, policy = {}) {
    const domain = tool?.domain || intent.domain || "general";
    if (status === "preview_only") return `Prepare safe ${domain} preview guidance without executing an action.`;
    if (status === "informational") return `Answer the ${domain} request with safe information only.`;
    if (status === "permission_required") return `Identify the required ${policy.permissionType || "user"} permission and wait for the existing router.`;
    if (status === "confirmation_required") return "Describe the controlled action and preserve the existing confirmation gate.";
    if (status === "needs_clarification") return policy.clarificationPrompt || "Ask for the missing detail before planning further.";
    if (status === "blocked") return policy.blockReason || "Explain that this action is blocked by policy.";
    if (status === "not_implemented") return policy.blockReason || "Explain that this capability is not implemented yet.";
    return "Clarify safely without execution.";
  }

  function step(stepId, order, label, description, intent, tool, status, options = {}) {
    return {
      stepId,
      order,
      label,
      description,
      intentId: intent.id || "unknown.unsupported",
      toolId: tool?.id || intent.selectedToolId || null,
      risk: tool?.risk || intent.risk || "controlled",
      status,
      requiresPermission: options.requiresPermission === true,
      requiresConfirmation: options.requiresConfirmation === true,
      canExecute: false,
      blockedReason: options.blockedReason || "",
      userVisible: options.userVisible !== false,
      notes: Array.isArray(options.notes) && options.notes.length
        ? options.notes.slice()
        : ["Planner step is advisory and non-executing."]
    };
  }

  function stepsForPlan(status, intent = {}, tool = null, policy = {}, context = {}) {
    const base = [
      step(
        "step.1.classify-intent",
        1,
        "Classify intent",
        `Use the classified intent ${intent.id || "unknown"} to frame a safe plan.`,
        intent,
        tool,
        "informational"
      ),
      step(
        "step.2.apply-policy",
        2,
        "Apply policy gate",
        `Honor policy status ${policy.status || "unsupported"} before any future action.`,
        intent,
        tool,
        status,
        {
          requiresPermission: policy.requiresPermission === true,
          requiresConfirmation: policy.requiresConfirmation === true,
          blockedReason: policy.blockReason || "",
          notes: ["Policy remains authoritative. The planner cannot override it."]
        }
      )
    ];

    if (status === "preview_only" || status === "informational") {
      base.push(step(
        "step.3.prepare-safe-preview",
        3,
        "Prepare safe guidance",
        "Describe the next safe option without opening a workflow or executing anything.",
        intent,
        tool,
        status,
        { notes: ["Low-risk guidance may be previewed by existing UI only."] }
      ));
    } else if (status === "needs_clarification") {
      base.push(step(
        "step.3.ask-clarifying-question",
        3,
        "Ask for missing detail",
        policy.clarificationPrompt || "Ask the user for the missing target, number, or context.",
        intent,
        tool,
        "needs_clarification",
        { notes: ["Clarification must happen before future staging or execution."] }
      ));
    } else if (status === "permission_required") {
      base.push(step(
        "step.3-wait-for-permission-path",
        3,
        "Wait for permission path",
        `Do not request ${policy.permissionType || "permission"} from planner metadata; existing UI must initiate permission when appropriate.`,
        intent,
        tool,
        "permission_required",
        {
          requiresPermission: true,
          blockedReason: "Planner cannot trigger browser or device permissions.",
          notes: ["Permission remains user-controlled and router-owned."]
        }
      ));
    } else if (status === "confirmation_required") {
      base.push(step(
        "step.3-preserve-confirmation-gate",
        3,
        "Preserve confirmation gate",
        "Do not stage or execute; future phases may prepare an explicit confirmation review.",
        intent,
        tool,
        "confirmation_required",
        {
          requiresConfirmation: true,
          blockedReason: "Planner cannot confirm or stage actions.",
          notes: ["High-impact actions require explicit confirmation in existing or future gates."]
        }
      ));
    } else {
      base.push(step(
        "step.3-safe-fallback",
        3,
        "Use safe fallback",
        policy.nextSafeStep || "Explain the limitation and offer a safe alternative.",
        intent,
        tool,
        status,
        {
          blockedReason: policy.blockReason || "Planner cannot proceed beyond metadata.",
          notes: ["Fallback remains non-executing."]
        }
      ));
    }

    return base.map(item => ({ ...item, canExecute: false }));
  }

  function gatesFromPolicy(policy = {}) {
    const permissionGates = policy.requiresPermission
      ? [{
          type: policy.permissionType || "permission",
          status: "required",
          source: policy.policySource || "policy",
          notes: ["Planner cannot request this permission."]
        }]
      : [];
    const confirmationGates = policy.requiresConfirmation
      ? [{
          type: policy.confirmationType || "explicit",
          status: "required",
          source: policy.policySource || "policy",
          notes: ["Planner cannot accept or trigger confirmation."]
        }]
      : [];
    return { permissionGates, confirmationGates };
  }

  function buildNexusPlan(intentClassification = {}, toolMetadata = null, policyDecision = null, context = {}) {
    const intent = intentClassification && typeof intentClassification === "object" ? intentClassification : {};
    const tool = getTool(intent, toolMetadata);
    const policy = decidePolicy(intent, tool, { ...context, policyDecision });
    const status = statusFromPolicy(policy);
    const text = context.sourceText || context.text || context.command || intent.normalizedText || "";
    const { permissionGates, confirmationGates } = gatesFromPolicy(policy);
    const requiredInputs = policy.clarificationRequired
      ? [{
          id: "clarification",
          label: policy.clarificationPrompt || "Clarification needed",
          required: true
        }]
      : [];
    const blockedActions = ["blocked", "not_implemented"].includes(status) || policy.canExecute === false
      ? [{
          actionType: policy.actionType || intent.actionType || "unknown",
          reason: policy.blockReason || "Execution is not available from planner metadata.",
          policyStatus: policy.status || "unsupported"
        }]
      : [];
    const planSteps = stepsForPlan(status, intent, tool, policy, context);
    return {
      planId: `plan.${intent.id || "unknown"}.${tool?.id || intent.selectedToolId || "no_tool"}`,
      sourceText: text,
      intentId: intent.id || "unknown.unsupported",
      toolId: tool?.id || intent.selectedToolId || null,
      domain: tool?.domain || intent.domain || "general",
      risk: tool?.risk || intent.risk || "controlled",
      policyStatus: policy.status || "unsupported",
      summary: summaryFor(status, intent, tool, policy),
      steps: planSteps,
      requiredInputs,
      permissionGates,
      confirmationGates,
      blockedActions,
      safeAlternatives: [
        "Answer with safe guidance.",
        "Ask for missing details.",
        "Use existing UI only when the user explicitly chooses it."
      ],
      nextSafeStep: policy.nextSafeStep || "Clarify safely without executing.",
      canExecute: false,
      executionMode: "plan_only",
      plannerSource: PLANNER_SOURCE,
      createdAt: context.createdAt || new Date().toISOString(),
      notes: [
        "Planner is advisory and non-executing.",
        "Existing routers remain authoritative.",
        "Phase 11F2 requires plan and step canExecute to remain false."
      ]
    };
  }

  function createNexusPlan(input = {}) {
    const text = typeof input === "string" ? input : input.text || input.command || input.userMessage || "";
    const intent = classify(input);
    const tool = getTool(intent, typeof input === "object" ? input.toolMetadata : null);
    const policy = typeof input === "object" && input.policyDecision
      ? input.policyDecision
      : decidePolicy(intent, tool, { ...(typeof input === "object" ? input.context || input : {}), text, sourceText: text });
    return buildNexusPlan(intent, tool, policy, { ...(typeof input === "object" ? input.context || input : {}), text, sourceText: text });
  }

  function validateNexusPlan(plan = {}) {
    const requiredPlanFields = [
      "planId",
      "sourceText",
      "intentId",
      "toolId",
      "domain",
      "risk",
      "policyStatus",
      "summary",
      "steps",
      "requiredInputs",
      "permissionGates",
      "confirmationGates",
      "blockedActions",
      "safeAlternatives",
      "nextSafeStep",
      "canExecute",
      "executionMode",
      "plannerSource",
      "createdAt",
      "notes"
    ];
    const requiredStepFields = [
      "stepId",
      "order",
      "label",
      "description",
      "intentId",
      "toolId",
      "risk",
      "status",
      "requiresPermission",
      "requiresConfirmation",
      "canExecute",
      "blockedReason",
      "userVisible",
      "notes"
    ];
    const errors = [];
    for (const field of requiredPlanFields) {
      if (!Object.prototype.hasOwnProperty.call(plan, field)) errors.push(`missing ${field}`);
    }
    if (plan.canExecute !== false) errors.push("plan canExecute must be false");
    if (plan.executionMode !== "plan_only") errors.push("executionMode must be plan_only");
    if (!Array.isArray(plan.steps) || !plan.steps.length) errors.push("steps must be a non-empty array");
    if (!Array.isArray(plan.notes) || !plan.notes.length) errors.push("notes must be a non-empty array");
    for (const item of Array.isArray(plan.steps) ? plan.steps : []) {
      for (const field of requiredStepFields) {
        if (!Object.prototype.hasOwnProperty.call(item, field)) errors.push(`${item.stepId || "step"} missing ${field}`);
      }
      if (!PLANNING_STATUSES.includes(item.status)) errors.push(`${item.stepId || "step"} invalid status ${item.status}`);
      if (item.canExecute !== false) errors.push(`${item.stepId || "step"} canExecute must be false`);
    }
    if (["sensitive", "high"].includes(plan.risk) && !["permission_required", "confirmation_required", "blocked", "not_implemented", "needs_clarification"].includes(statusFromPolicy({ status: plan.policyStatus }))) {
      errors.push("sensitive/high plans must remain gated, blocked, or clarified");
    }
    return {
      ok: errors.length === 0,
      errors
    };
  }

  function getNexusPlanningStatuses() {
    return PLANNING_STATUSES.slice();
  }

  return {
    buildNexusPlan,
    createNexusPlan,
    getNexusPlanningStatuses,
    validateNexusPlan
  };
});
