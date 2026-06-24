(function nexusActionDecisionMapperFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusActionDecisionMapper = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusActionDecisionMapperModule() {
  const SCHEMA_VERSION = "nexus-autonomous-action.v1";

  const ACTION_SAFETY_NOTES = Object.freeze([
    "planner metadata is not execution authority",
    "selectedToolId must not directly execute real actions",
    "agentAction must not directly execute real actions",
    "missingInputs must block execution",
    "restricted actions must not execute",
    "provider_handoff_only is a user-approved boundary, not proof of execution"
  ]);

  function normalizePrompt(value = "") {
    return String(value || "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s.+@_-]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function hasAny(text, patterns) {
    return patterns.some(pattern => pattern.test(text));
  }

  function baseDecision(input, overrides = {}) {
    const text = typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "";
    const normalizedText = normalizePrompt(text);
    const riskLevel = overrides.riskLevel || "restricted";
    const auditRequired = ["medium", "high", "restricted"].includes(riskLevel);
    const decision = {
      schemaVersion: SCHEMA_VERSION,
      actionId: overrides.actionId || "nexus.conversation.review",
      intent: overrides.intent || {
        rawText: text,
        normalizedIntent: "conversation_or_unknown",
        confidence: 0.35
      },
      selectedToolId: overrides.selectedToolId || null,
      executionLevel: Number.isInteger(overrides.executionLevel) ? overrides.executionLevel : 0,
      riskLevel,
      domain: overrides.domain || "general",
      userVisibleLabel: overrides.userVisibleLabel || "Review",
      summary: overrides.summary || "Nexus can answer or ask a clarifying question without taking action.",
      requiredInputs: Array.isArray(overrides.requiredInputs) ? overrides.requiredInputs.slice() : [],
      missingInputs: Array.isArray(overrides.missingInputs) ? overrides.missingInputs.slice() : [],
      requiredPermissions: Array.isArray(overrides.requiredPermissions) ? overrides.requiredPermissions.slice() : [],
      confirmationRequired: overrides.confirmationRequired === true,
      confirmationText: overrides.confirmationText || "",
      cancelPath: overrides.cancelPath || "not_now",
      providerCandidates: Array.isArray(overrides.providerCandidates) ? overrides.providerCandidates.map(candidate => ({ ...candidate })) : [],
      executionBoundary: overrides.executionBoundary || "conversation_only",
      auditPolicy: overrides.auditPolicy || {
        required: auditRequired,
        eventTypes: auditRequired ? ["action_reviewed"] : [],
        redaction: "standard"
      },
      safetyNotes: Array.isArray(overrides.safetyNotes)
        ? [...ACTION_SAFETY_NOTES, ...overrides.safetyNotes]
        : ACTION_SAFETY_NOTES.slice(),
      resultState: overrides.resultState || "proposed",
      failureReason: Object.prototype.hasOwnProperty.call(overrides, "failureReason") ? overrides.failureReason : null,
      mapperSource: "nexus-action-decision-mapper.v1",
      normalizedText
    };

    if (decision.missingInputs.length && !/^blocked_/.test(decision.resultState)) {
      decision.resultState = "blocked_missing_inputs";
      decision.failureReason = decision.failureReason || "missing_required_input";
    }
    if (decision.riskLevel === "restricted") {
      decision.executionBoundary = "blocked";
      if (!decision.failureReason) decision.failureReason = "restricted_action";
      if (decision.resultState === "proposed") decision.resultState = "execution_blocked";
    }
    return decision;
  }

  function mapLearning(text, input) {
    const isTraining = hasAny(text, [/\b(agriculture training|farm training|workforce training|find .*training|help me .*training|training)\b/]);
    return baseDecision(input, {
      actionId: isTraining ? "nexus.learning.training.review" : "nexus.learning.guidance.review",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: isTraining ? "learning.training_navigation" : "learning.irrigation_guidance",
        confidence: isTraining ? 0.86 : 0.88
      },
      selectedToolId: isTraining ? "workforce.training" : "learning.start",
      executionLevel: isTraining ? 2 : 1,
      riskLevel: "low",
      domain: "learning",
      userVisibleLabel: isTraining ? "Training" : "Learning",
      summary: isTraining
        ? "Nexus can help you review agriculture training options."
        : "Nexus can help you review safe irrigation learning guidance.",
      executionBoundary: isTraining ? "navigation_only" : "suggestion_only",
      auditPolicy: { required: false, eventTypes: [], redaction: "standard" },
      safetyNotes: [
        "No enrollment, lesson completion, certificate issuance, or training record mutation is authorized."
      ]
    });
  }

  function mapJobs(text, input) {
    return baseDecision(input, {
      actionId: "nexus.jobs.review",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "jobs_navigation",
        confidence: 0.87
      },
      selectedToolId: "workforce.job_pathways",
      executionLevel: 2,
      riskLevel: "low",
      domain: "jobs",
      userVisibleLabel: "Review farm jobs",
      summary: "Nexus can help you review farm job options.",
      executionBoundary: "navigation_only",
      auditPolicy: { required: false, eventTypes: [], redaction: "standard" },
      safetyNotes: [
        "No job application submission or user data sharing is authorized."
      ]
    });
  }

  function mapMarketplaceReview(text, input) {
    return baseDecision(input, {
      actionId: "nexus.marketplace.review",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "marketplace_review",
        confidence: 0.86
      },
      selectedToolId: "marketplace.agritrade",
      executionLevel: 2,
      riskLevel: "low",
      domain: "marketplace",
      userVisibleLabel: "Marketplace",
      summary: "Nexus can help you review AgriTrade marketplace options.",
      executionBoundary: "navigation_only",
      auditPolicy: { required: false, eventTypes: [], redaction: "standard" },
      safetyNotes: [
        "Browse-only marketplace review must not buy, sell, make offers, reserve items, disclose payment data, or contact sellers."
      ]
    });
  }

  function mapAgricultureSupport(text, input) {
    return baseDecision(input, {
      actionId: "nexus.agriculture.support.review",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "agriculture_support_review",
        confidence: 0.84
      },
      selectedToolId: "agriculture.help",
      executionLevel: 1,
      riskLevel: "low",
      domain: "agriculture",
      userVisibleLabel: "Agriculture Help",
      summary: "Nexus can review crop support guidance and safe field support options.",
      executionBoundary: "suggestion_only",
      auditPolicy: { required: false, eventTypes: [], redaction: "standard" },
      safetyNotes: [
        "No private farm data submission, image upload, camera use, or expert contact is authorized."
      ]
    });
  }

  function mapCall(text, input) {
    const hasTarget = !/\b(call someone|call them|^call$|^nexus call$)\b/.test(text);
    const provider = /\bwhatsapp\b/.test(text)
      ? "whatsapp"
      : /\btelegram\b/.test(text)
        ? "telegram"
        : /\b(phone|dialer|native)\b/.test(text)
          ? "native-phone"
          : null;
    const missingInputs = [];
    if (!hasTarget) missingInputs.push("contactName");
    missingInputs.push("phoneNumber");
    if (!provider) missingInputs.push("provider");
    return baseDecision(input, {
      actionId: "nexus.communications.call.stage",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "communications_call_staging",
        confidence: hasTarget ? 0.86 : 0.72
      },
      selectedToolId: "communications.phone",
      executionLevel: hasTarget ? 3 : 3,
      riskLevel: "high",
      domain: "communications",
      userVisibleLabel: "Call",
      summary: hasTarget
        ? "Nexus can resolve the contact and prepare a confirmed call handoff later."
        : "Nexus needs to know who to call before anything can be staged.",
      requiredInputs: ["contactName", "phoneNumber", "provider"],
      missingInputs,
      requiredPermissions: ["call_confirmation"],
      confirmationRequired: hasTarget,
      confirmationText: hasTarget ? "Confirm the resolved contact, number, and provider before call handoff." : "",
      cancelPath: "cancel_call",
      providerCandidates: provider ? [{ providerId: provider, boundary: "provider_handoff_only" }] : [],
      executionBoundary: missingInputs.length ? "staged_only" : "confirmation_required",
      auditPolicy: {
        required: true,
        eventTypes: ["call_resolution_started", "call_staged", "call_confirmation_required"],
        redaction: "contact"
      },
      safetyNotes: [
        "No call placement, native dialer launch, WhatsApp launch, Telegram launch, or browser tel handoff is authorized by this mapper."
      ]
    });
  }

  function mapMessage(text, input) {
    const hasRecipient = /\b(text|message|sms|email|whatsapp|telegram)\s+\w+/.test(text) && !/\b(send a message|send message|text someone|message someone)\b/.test(text);
    const provider = /\bwhatsapp\b/.test(text)
      ? "whatsapp"
      : /\btelegram\b/.test(text)
        ? "telegram"
        : /\bsms|text\b/.test(text)
          ? "sms"
          : /\bemail\b/.test(text)
            ? "email"
            : null;
    const missingInputs = [];
    if (!hasRecipient) missingInputs.push("recipient");
    missingInputs.push("messageBody");
    if (!provider) missingInputs.push("provider");
    return baseDecision(input, {
      actionId: "nexus.communications.message.stage",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "communications_message_staging",
        confidence: hasRecipient ? 0.82 : 0.72
      },
      selectedToolId: "communications.message",
      executionLevel: 3,
      riskLevel: "high",
      domain: "communications",
      userVisibleLabel: "Message",
      summary: "Nexus can prepare a message only after recipient, message body, provider, and confirmation are available.",
      requiredInputs: ["recipient", "messageBody", "provider"],
      missingInputs,
      requiredPermissions: ["message_confirmation"],
      confirmationRequired: true,
      confirmationText: "Confirm the recipient, message, and provider before any message handoff.",
      cancelPath: "cancel_message",
      providerCandidates: provider ? [{ providerId: provider, boundary: "provider_handoff_only" }] : [],
      executionBoundary: "staged_only",
      auditPolicy: {
        required: true,
        eventTypes: ["message_resolution_started", "message_staged", "message_confirmation_required"],
        redaction: "contact"
      },
      safetyNotes: [
        "No message sending, draft submission, provider opening, or recipient disclosure is authorized by this mapper."
      ]
    });
  }

  function mapLocation(text, input) {
    const isExactLocation = /\b(find my location|use my location|where am i|locate me)\b/.test(text);
    return baseDecision(input, {
      actionId: isExactLocation ? "nexus.location.permission.stage" : "nexus.maps.route.review",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: isExactLocation ? "maps_location_permission" : "maps_route_review",
        confidence: 0.82
      },
      selectedToolId: "maps.location",
      executionLevel: 4,
      riskLevel: "high",
      domain: "location",
      userVisibleLabel: "Location",
      summary: isExactLocation
        ? "Nexus must request permission before using current location."
        : "Nexus can review a route only after needed location details are clear.",
      requiredInputs: isExactLocation ? [] : ["startLocation", "destination"],
      missingInputs: isExactLocation ? [] : ["startLocation", "destination"],
      requiredPermissions: ["location"],
      confirmationRequired: true,
      confirmationText: "Allow Nexus to request location permission through the existing app flow?",
      cancelPath: "cancel_location",
      providerCandidates: [{ providerId: "browser-geolocation", boundary: "confirmation_required" }],
      executionBoundary: "confirmation_required",
      auditPolicy: {
        required: true,
        eventTypes: ["location_permission_required"],
        redaction: "location"
      },
      safetyNotes: [
        "The mapper must not request device location, share location, or open map permissions."
      ],
      resultState: "blocked_permission_required",
      failureReason: "permission_not_granted"
    });
  }

  function mapCamera(text, input) {
    return baseDecision(input, {
      actionId: "nexus.camera.permission.stage",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "camera_permission_boundary",
        confidence: 0.84
      },
      selectedToolId: "health.camera_preview",
      executionLevel: 4,
      riskLevel: "high",
      domain: "camera",
      userVisibleLabel: "Camera",
      summary: "Nexus must request explicit permission through the existing app flow before camera use.",
      requiredInputs: [],
      missingInputs: [],
      requiredPermissions: ["camera"],
      confirmationRequired: true,
      confirmationText: "Open the local camera permission flow?",
      cancelPath: "cancel_camera",
      providerCandidates: [{ providerId: "browser-camera", boundary: "confirmation_required" }],
      executionBoundary: "confirmation_required",
      auditPolicy: {
        required: true,
        eventTypes: ["camera_permission_required"],
        redaction: "media"
      },
      safetyNotes: [
        "The mapper must not open camera, capture media, upload media, or start telehealth video."
      ],
      resultState: "blocked_permission_required",
      failureReason: "permission_not_granted"
    });
  }

  function mapHealth(text, input) {
    const emergency = /\b(emergency|not breathing|severe bleeding|ambulance|dispatch)\b/.test(text);
    return baseDecision(input, {
      actionId: emergency ? "nexus.health.emergency.blocked" : "nexus.health.workflow.boundary",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: emergency ? "health_emergency_safety_boundary" : "health_help_boundary",
        confidence: emergency ? 0.9 : 0.82
      },
      selectedToolId: "health.telehealth",
      executionLevel: emergency ? 0 : 3,
      riskLevel: emergency ? "restricted" : "high",
      domain: "health",
      userVisibleLabel: emergency ? "Emergency Safety" : "Health",
      summary: emergency
        ? "Nexus should provide emergency safety guidance and avoid claiming dispatch."
        : "Nexus can offer a health workflow boundary only with confirmation and safety framing.",
      requiredInputs: emergency ? [] : ["healthConcern"],
      missingInputs: [],
      requiredPermissions: emergency ? [] : ["health_workflow_confirmation"],
      confirmationRequired: !emergency,
      confirmationText: emergency ? "" : "Start the local health intake workflow?",
      cancelPath: emergency ? "not_now" : "cancel_health_workflow",
      providerCandidates: [],
      executionBoundary: emergency ? "blocked" : "confirmation_required",
      auditPolicy: {
        required: true,
        eventTypes: emergency ? ["emergency_safety_boundary"] : ["health_workflow_boundary"],
        redaction: "health"
      },
      safetyNotes: [
        "Nexus must not diagnose, claim emergency dispatch, open camera, start telehealth, call providers, or alter health workflow state from this mapper."
      ],
      resultState: emergency ? "execution_blocked" : "confirmation_pending",
      failureReason: emergency ? "restricted_action" : null
    });
  }

  function mapMarketplaceTransaction(text, input) {
    return baseDecision(input, {
      actionId: "nexus.marketplace.transaction.blocked",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "marketplace_transaction_boundary",
        confidence: 0.88
      },
      selectedToolId: "marketplace.agritrade",
      executionLevel: 4,
      riskLevel: "restricted",
      domain: "marketplace",
      userVisibleLabel: "Marketplace Transaction",
      summary: "Marketplace transactions require future staging, confirmation, payment safety, and audit before any action.",
      requiredInputs: ["item", "party", "transactionType"],
      missingInputs: ["item", "party", "transactionType"],
      requiredPermissions: ["marketplace_transaction_confirmation"],
      confirmationRequired: true,
      confirmationText: "Marketplace transactions are not executable from this mapper.",
      cancelPath: "cancel_marketplace_transaction",
      providerCandidates: [],
      executionBoundary: "blocked",
      auditPolicy: {
        required: true,
        eventTypes: ["marketplace_transaction_blocked"],
        redaction: "marketplace"
      },
      safetyNotes: [
        "No buy, pay, reserve, offer submission, seller contact, or marketplace transaction is authorized."
      ],
      resultState: "execution_blocked",
      failureReason: "restricted_action"
    });
  }

  function mapNexusPromptToActionDecision(input = "", context = {}) {
    const text = normalizePrompt(typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "");
    if (!text) {
      return baseDecision(input, {
        actionId: "nexus.conversation.empty",
        intent: { rawText: "", normalizedIntent: "empty_prompt", confidence: 0.2 },
        resultState: "blocked_missing_inputs",
        missingInputs: ["prompt"],
        failureReason: "missing_required_input",
        safetyNotes: ["Ask for a user prompt before planning."]
      });
    }

    if (hasAny(text, [/\b(buy this item|buy|make an offer|reserve|checkout|pay|payment)\b/])) return mapMarketplaceTransaction(text, input, context);
    if (hasAny(text, [/\b(emergency|not breathing|severe bleeding|ambulance|dispatch)\b/])) return mapHealth(text, input, context);
    if (hasAny(text, [/\b(telehealth|medical help|health help|doctor|clinic|medicine|patient)\b/])) return mapHealth(text, input, context);
    if (hasAny(text, [/\b(use my camera|open camera|take a picture|take photo|camera)\b/])) return mapCamera(text, input, context);
    if (hasAny(text, [/\b(find my location|use my location|where am i|locate me|map a route|route)\b/])) return mapLocation(text, input, context);
    if (hasAny(text, [/\b(send a message|send message|message|text|sms|email)\b/])) return mapMessage(text, input, context);
    if (hasAny(text, [/\b(call|phone|dial)\b/])) return mapCall(text, input, context);
    if (hasAny(text, [/\b(browse agritrade|agritrade|marketplace options|open marketplace|browse marketplace)\b/])) return mapMarketplaceReview(text, input, context);
    if (hasAny(text, [/\b(farm jobs|agriculture jobs|show me .*jobs|find .*jobs|job pathways)\b/])) return mapJobs(text, input, context);
    if (hasAny(text, [/\b(crop issues|crops look sick|crop help|field support|farm support)\b/])) return mapAgricultureSupport(text, input, context);
    if (hasAny(text, [/\b(irrigation works|teach me|help me learn|agriculture training|farm training|workforce training|find .*training|training)\b/])) return mapLearning(text, input, context);

    return baseDecision(input, {
      actionId: "nexus.conversation.unknown",
      intent: {
        rawText: typeof input === "string" ? input : input?.text || input?.command || input?.userMessage || "",
        normalizedIntent: "unknown_or_conversation",
        confidence: 0.35
      },
      selectedToolId: null,
      executionLevel: 0,
      riskLevel: "medium",
      domain: "general",
      userVisibleLabel: "Clarify",
      summary: "Nexus should ask a clarifying question or answer conversationally without taking action.",
      executionBoundary: "conversation_only",
      auditPolicy: { required: true, eventTypes: ["unknown_intent_reviewed"], redaction: "standard" },
      resultState: "proposed",
      safetyNotes: ["Unknown prompts remain conversation-only until intent is clear."]
    });
  }

  return {
    ACTION_SAFETY_NOTES,
    SCHEMA_VERSION,
    mapNexusPromptToActionDecision,
    normalizePrompt
  };
});
