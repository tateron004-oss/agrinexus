(function nexusPolicyEngineFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    const classifier = require("./nexus-intent-classifier.js");
    const registry = require("./nexus-tool-registry.js");
    module.exports = factory(classifier, registry);
  } else {
    root.NexusPolicyEngine = factory(root.NexusIntentClassifier, root.NexusToolRegistry);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPolicyEngineModule(intentClassifier, toolRegistry) {
  const POLICY_STATUS_VALUES = Object.freeze([
    "allow_answer",
    "allow_preview",
    "allow_route",
    "require_permission",
    "require_confirmation",
    "clarify",
    "blocked",
    "unsupported",
    "not_implemented"
  ]);

  const POLICY_RULES = Object.freeze({
    phase: "11D",
    policySource: "nexus-policy-engine.v1",
    advisoryOnly: true,
    canExecuteAlwaysFalse: true,
    routersRemainAuthoritative: true,
    safeLowRiskStatuses: ["allow_answer", "allow_preview", "allow_route"],
    guardedStatuses: ["require_permission", "require_confirmation", "clarify", "blocked", "unsupported", "not_implemented"]
  });

  function clone(value) {
    return value && typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
  }

  function normalizeText(value = "") {
    if (intentClassifier?.normalizeIntentText) return intentClassifier.normalizeIntentText(value);
    return String(value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function getClassifier() {
    return intentClassifier?.classifyNexusIntent || null;
  }

  function getRegistry() {
    return toolRegistry || null;
  }

  function findToolForIntent(intent = {}, explicitTool = null) {
    if (explicitTool && typeof explicitTool === "object") return explicitTool;
    const registry = getRegistry();
    if (!registry) return null;
    if (intent.selectedToolId && typeof registry.getNexusToolById === "function") {
      const selectedTool = registry.getNexusToolById(intent.selectedToolId);
      if (selectedTool) return selectedTool;
    }
    if (intent.id && typeof registry.findNexusToolsByIntent === "function") {
      const matches = registry.findNexusToolsByIntent(intent.id);
      const selectableMatches = matches.filter(tool => tool.enabled !== false);
      if (selectableMatches.length) {
        const text = String(intent.normalizedText || "").toLowerCase();
        if (intent.id === "health.video_or_care.permissioned") {
          if (/\b(telehealth|video call|doctor|clinic|health|medical|medicine|patient)\b/.test(text)) {
            return selectableMatches.find(tool => tool.id === "health.telehealth_video") || selectableMatches[0];
          }
          if (/\b(injury|show injury|provider)\b/.test(text)) {
            return selectableMatches.find(tool => tool.id === "health.show_injury") || selectableMatches[0];
          }
          if (/\b(camera)\b/.test(text)) {
            return selectableMatches.find(tool => tool.id === "health.camera_preview") || selectableMatches[0];
          }
        }
        if (intent.id === "communications.outbound_contact.controlled") {
          if (/\b(provider|doctor|clinic|health worker)\b/.test(text)) {
            return selectableMatches.find(tool => tool.id === "communications.call_provider") || selectableMatches[0];
          }
          if (/\b(buyer|seller)\b/.test(text)) {
            return selectableMatches.find(tool => tool.id === "communications.contact_marketplace_party") || selectableMatches[0];
          }
          if (/\b(message|text|sms|email|whatsapp|telegram)\b/.test(text)) {
            return selectableMatches.find(tool => tool.id === "communications.message_contact") || selectableMatches[0];
          }
          return selectableMatches.find(tool => tool.id === "communications.call_contact") || selectableMatches[0];
        }
        return selectableMatches.find(tool => tool.risk === intent.risk) || selectableMatches[0];
      }
    }
    return null;
  }

  function baseDecision(intent = {}, tool = null, context = {}) {
    const normalizedText = intent.normalizedText || normalizeText(context.text || context.command || "");
    return {
      decisionId: `policy.${intent.id || "unknown"}.${tool?.id || "no_tool"}`,
      intentId: intent.id || "unknown.clarify_or_answer",
      toolId: tool?.id || intent.selectedToolId || null,
      domain: tool?.domain || intent.domain || "general",
      risk: tool?.risk || intent.risk || "controlled",
      actionType: tool?.actionType || intent.actionType || "unsupported",
      status: "unsupported",
      allowed: false,
      requiresPermission: Boolean(tool?.requiresPermission || intent.requiresPermission),
      permissionType: tool?.permissionType || (intent.requiresPermission ? "external_app" : "none"),
      requiresConfirmation: Boolean(tool?.requiresConfirmation || intent.requiresConfirmation),
      confirmationType: "none",
      blocked: false,
      blockReason: "",
      clarificationRequired: false,
      clarificationPrompt: "",
      previewOnly: false,
      canRoute: false,
      canExecute: false,
      executionStatus: tool?.executionStatus || "metadata_only",
      nextSafeStep: "Answer or clarify without executing.",
      policySource: POLICY_RULES.policySource,
      notes: [
        "Policy decision is advisory and non-executing.",
        "Existing routers, confirmations, and permissions remain authoritative.",
        "Phase 11D requires canExecute to remain false."
      ],
      metadata: {
        normalizedText,
        selectedToolId: intent.selectedToolId || tool?.selectedToolId || null,
        toolMetadataOnly: tool ? tool.metadataOnly === true : true,
        routerOwned: tool ? tool.routerOwned === true : true
      }
    };
  }

  function buildNexusPolicyDecision(intentClassification = {}, toolMetadata = null, context = {}) {
    const intent = intentClassification && typeof intentClassification === "object"
      ? intentClassification
      : {};
    const tool = findToolForIntent(intent, toolMetadata);
    const decision = baseDecision(intent, tool, context);

    if (tool && tool.executionStatus === "blocked") {
      return {
        ...decision,
        status: "blocked",
        blocked: true,
        blockReason: "This capability is blocked until a future safety phase.",
        nextSafeStep: "Explain that this capability is not available yet.",
        notes: [...decision.notes, "Blocked registry tools cannot be executed."]
      };
    }

    if (tool && tool.executionStatus === "not_implemented") {
      return {
        ...decision,
        status: "not_implemented",
        blocked: true,
        blockReason: "This provider or tool is not implemented yet.",
        nextSafeStep: "Offer a safe fallback or explain the future boundary.",
        notes: [...decision.notes, "Not-implemented tools stay metadata-only."]
      };
    }

    if (!intent.id || intent.actionType === "unsupported") {
      return {
        ...decision,
        status: intent.category === "clarification" ? "clarify" : "unsupported",
        clarificationRequired: true,
        clarificationPrompt: "Can you tell me what you want Nexus to help with?",
        nextSafeStep: "Ask a clarifying question.",
        notes: [...decision.notes, "Unsupported or unclear prompts should clarify, not execute."]
      };
    }

    if (tool?.id === "communications.call_contact" && context.contactResolved !== true && context.phoneNumberResolved !== true) {
      return {
        ...decision,
        status: "clarify",
        allowed: false,
        clarificationRequired: true,
        clarificationPrompt: "Which contact and phone number should Nexus prepare?",
        nextSafeStep: "Resolve the contact or ask for the phone number before any call can be staged.",
        notes: [...decision.notes, "Contact calls require contact/number resolution before permission or confirmation."]
      };
    }

    if (decision.requiresPermission) {
      return {
        ...decision,
        status: "require_permission",
        allowed: false,
        confirmationType: decision.requiresConfirmation ? "explicit_after_permission" : "none",
        blocked: false,
        nextSafeStep: `Request ${decision.permissionType} permission before proceeding.`,
        notes: [...decision.notes, "Permission-sensitive capability must not proceed from policy metadata."]
      };
    }

    if (decision.requiresConfirmation || ["controlled", "high"].includes(decision.risk)) {
      const missingContactTarget = intent.id === "communications.contact_target.missing";
      return {
        ...decision,
        status: missingContactTarget ? "clarify" : "require_confirmation",
        allowed: false,
        confirmationType: missingContactTarget ? "none" : "explicit",
        clarificationRequired: missingContactTarget,
        clarificationPrompt: missingContactTarget ? "Who should Nexus contact?" : "",
        nextSafeStep: missingContactTarget ? "Ask who to contact." : "Stage or review only after explicit confirmation.",
        notes: [...decision.notes, "Confirmation-gated capability must not execute from policy metadata."]
      };
    }

    if (decision.risk === "low" && decision.actionType === "answer") {
      return {
        ...decision,
        status: "allow_answer",
        allowed: true,
        previewOnly: true,
        canRoute: false,
        nextSafeStep: "Answer with safe guidance.",
        notes: [...decision.notes, "Low-risk answer can be composed without execution."]
      };
    }

    if (decision.risk === "low" && decision.actionType === "preview_or_route") {
      return {
        ...decision,
        status: tool?.executionStatus === "metadata_only" ? "allow_preview" : "allow_route",
        allowed: true,
        previewOnly: true,
        canRoute: tool?.executionStatus === "preview_only",
        nextSafeStep: tool?.executionStatus === "preview_only"
          ? "Existing safe UI may preview or route through current routers."
          : "Show safe preview guidance.",
        notes: [...decision.notes, "Low-risk routing remains preview-only and router-owned."]
      };
    }

    return {
      ...decision,
      status: "unsupported",
      clarificationRequired: true,
      clarificationPrompt: "Nexus needs more detail before helping safely.",
      nextSafeStep: "Clarify safely without executing.",
      notes: [...decision.notes, "Fallback policy is non-executing clarification."]
    };
  }

  function evaluateNexusPolicy(input = {}) {
    const text = typeof input === "string" ? input : input.text || input.command || input.userMessage || "";
    const classifier = getClassifier();
    const intentClassification = input.intentClassification || (classifier
      ? classifier({ text, ...(typeof input === "object" ? input : {}) })
      : {
          id: "unknown.clarify_or_answer",
          domain: "general",
          category: "clarification",
          risk: "controlled",
          actionType: "unsupported",
          selectedToolId: null,
          requiresConfirmation: false,
          requiresPermission: false,
          confidence: 0,
          source: "policy-fallback",
          normalizedText: normalizeText(text),
          entities: {},
          notes: ["Intent classifier unavailable."]
        });
    const toolMetadata = input.toolMetadata || findToolForIntent(intentClassification);
    return buildNexusPolicyDecision(intentClassification, toolMetadata, input.context || input);
  }

  function validateNexusPolicyDecision(decision = {}) {
    const requiredFields = [
      "decisionId",
      "intentId",
      "toolId",
      "domain",
      "risk",
      "actionType",
      "status",
      "allowed",
      "requiresPermission",
      "permissionType",
      "requiresConfirmation",
      "confirmationType",
      "blocked",
      "blockReason",
      "clarificationRequired",
      "clarificationPrompt",
      "previewOnly",
      "canRoute",
      "canExecute",
      "executionStatus",
      "nextSafeStep",
      "policySource",
      "notes"
    ];
    const errors = [];
    for (const field of requiredFields) {
      if (!Object.prototype.hasOwnProperty.call(decision, field)) errors.push(`missing ${field}`);
    }
    if (!POLICY_STATUS_VALUES.includes(decision.status)) errors.push(`invalid status ${decision.status}`);
    if (decision.canExecute !== false) errors.push("canExecute must be false in Phase 11D");
    if (["sensitive", "high"].includes(decision.risk) && decision.allowed === true && decision.canExecute === true) {
      errors.push("sensitive/high decisions cannot be allowed with execution");
    }
    if (["require_permission", "require_confirmation", "blocked", "not_implemented"].includes(decision.status) && decision.allowed === true) {
      errors.push(`${decision.status} decisions cannot be allowed`);
    }
    if (!Array.isArray(decision.notes) || !decision.notes.length) errors.push("notes must be a non-empty array");
    return {
      ok: errors.length === 0,
      errors
    };
  }

  function getNexusPolicyRules() {
    return clone(POLICY_RULES);
  }

  return {
    POLICY_STATUS_VALUES,
    buildNexusPolicyDecision,
    evaluateNexusPolicy,
    getNexusPolicyRules,
    validateNexusPolicyDecision
  };
});
