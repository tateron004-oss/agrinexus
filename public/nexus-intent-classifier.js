(function nexusIntentClassifierFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusIntentClassifier = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusIntentClassifierModule() {
  const RISK_TIERS = Object.freeze(["low", "controlled", "sensitive", "high"]);
  const ACTION_TYPES = Object.freeze([
    "answer",
    "preview_or_route",
    "open_workflow",
    "request_permission",
    "request_confirmation",
    "provider_handoff",
    "external_execution",
    "unsupported"
  ]);

  const LOW_RISK_SELECTED_TOOL_IDS = Object.freeze({
    training: "workforce.training",
    jobs: "workforce.job_pathways",
    fieldSupport: "workforce.field_support",
    learning: "learning.start",
    marketplace: "marketplace.agritrade",
    agriculture: "agriculture.help"
  });

  function normalizeIntentText(value = "") {
    return String(value || "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s.+@_-]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function baseIntent(text, overrides = {}) {
    const normalizedText = normalizeIntentText(text);
    return {
      id: "unknown.unsupported",
      domain: "general",
      category: "unknown",
      risk: "controlled",
      actionType: "unsupported",
      selectedToolId: null,
      requiresConfirmation: false,
      requiresPermission: false,
      confidence: 0.35,
      source: "rule",
      normalizedText,
      entities: {},
      notes: ["No executable action is authorized by intent classification."],
      ...overrides
    };
  }

  function withProviderEntity(intent, text) {
    const normalizedText = normalizeIntentText(text);
    const provider = /\bwhatsapp\b/.test(normalizedText)
      ? "whatsapp"
      : /\btelegram\b/.test(normalizedText)
        ? "telegram"
        : /\b(phone|native phone|dialer)\b/.test(normalizedText)
          ? "native-phone"
          : null;
    return provider ? { ...intent, entities: { ...intent.entities, provider } } : intent;
  }

  function classifyNexusIntent(input = {}) {
    const text = typeof input === "string" ? input : input.text || input.command || input.userMessage || "";
    const normalizedText = normalizeIntentText(text);
    const routeContext = normalizeIntentText(typeof input === "object" ? input.routeContext || input.normalizedIntent || "" : "");
    const combined = `${normalizedText} ${routeContext}`.trim();

    if (!normalizedText) {
      return baseIntent(text, {
        id: "unknown.empty",
        category: "clarification",
        notes: ["No user text was provided."]
      });
    }

    if (/\b(payment|pay the buyer|pay buyer|pay the seller|pay seller|buyer payment|marketplace payment|wallet|checkout|process payment)\b/.test(combined)) {
      return baseIntent(text, {
        id: "marketplace.payment.controlled",
        domain: "marketplace",
        category: "payment",
        risk: "high",
        actionType: "request_confirmation",
        requiresConfirmation: true,
        confidence: 0.92,
        notes: ["Marketplace payment intent is high-risk and must not execute from classification."]
      });
    }

    if (/\b(buy fertilizer|buy|sell my produce|sell my crop|sell produce|create order|submit order)\b/.test(combined)) {
      return baseIntent(text, {
        id: "marketplace.transaction.controlled",
        domain: "marketplace",
        category: "transaction",
        risk: "high",
        actionType: "request_confirmation",
        requiresConfirmation: true,
        confidence: 0.88,
        notes: ["Marketplace transaction intent requires review and confirmation before any execution."]
      });
    }

    if (/\b(emergency|not breathing|severe bleeding|ambulance|dispatch)\b/.test(combined)) {
      return baseIntent(text, {
        id: "safety.emergency.escalation",
        domain: "safety",
        category: "emergency",
        risk: "high",
        actionType: "request_confirmation",
        requiresConfirmation: true,
        confidence: 0.9,
        notes: ["Emergency prompts require safety guidance; Nexus must not dispatch automatically."]
      });
    }

    if (/\b(telehealth|video for provider|show injury|injury to provider|open camera|camera|use my camera|provider video|video call|doctor|clinic|health|medical|medicine|patient)\b/.test(combined)) {
      return baseIntent(text, {
        id: "health.video_or_care.permissioned",
        domain: "health",
        category: "telehealth_or_camera",
        risk: "sensitive",
        actionType: "request_permission",
        requiresConfirmation: true,
        requiresPermission: true,
        confidence: 0.9,
        notes: ["Health, camera, and provider video flows remain permissioned and confirmation-gated."]
      });
    }

    if (/\b(call|phone|dial|message|text|sms|email|whatsapp|telegram|contact)\b/.test(combined)) {
      const isMissingTarget = /^(call|phone|dial|message|text|sms|email|contact)( them| someone)?$/.test(normalizedText);
      const intent = baseIntent(text, {
        id: isMissingTarget ? "communications.contact_target.missing" : "communications.outbound_contact.controlled",
        domain: "communications",
        category: isMissingTarget ? "missing_contact_target" : "contact_resolution",
        risk: "high",
        actionType: "request_confirmation",
        requiresConfirmation: true,
        confidence: isMissingTarget ? 0.82 : 0.9,
        entities: {
          targetHint: isMissingTarget ? null : normalizedText.replace(/\b(call|phone|dial|message|text|sms|email|send|whatsapp|telegram|to|using|on)\b/g, " ").replace(/\s+/g, " ").trim() || null
        },
        notes: [
          isMissingTarget
            ? "Nexus must ask who to contact before staging anything."
            : "Contact and provider resolution must happen before any provider handoff.",
          "No first-utterance communication execution is allowed."
        ]
      });
      return withProviderEntity(intent, text);
    }

    if (/\b(use my location|find my location|where am i|locate me|nearby providers|nearby clinics|nearby|open map|show map|map)\b/.test(combined)) {
      return baseIntent(text, {
        id: "maps.location.permissioned",
        domain: "maps",
        category: "location",
        risk: "sensitive",
        actionType: "request_permission",
        requiresPermission: true,
        confidence: 0.84,
        notes: ["Map and location flows must request permission before using precise location."]
      });
    }

    if (/\b(login|log in|account|profile change|change my profile|verify identity|identity|password)\b/.test(combined)) {
      return baseIntent(text, {
        id: "account.identity.controlled",
        domain: "account",
        category: "identity",
        risk: "high",
        actionType: "request_confirmation",
        requiresConfirmation: true,
        requiresPermission: true,
        confidence: 0.86,
        notes: ["Account and identity changes require explicit authorization."]
      });
    }

    if (/\b(agriculture training|farm training|workforce training|help me (find|with) .*training|help me with training|find .*training|start training|show training|open training)\b/.test(combined)) {
      return baseIntent(text, {
        id: "learning.training.find",
        domain: "learning",
        category: "training",
        risk: "low",
        actionType: "preview_or_route",
        selectedToolId: LOW_RISK_SELECTED_TOOL_IDS.training,
        confidence: 0.88,
        notes: ["Low-risk training guidance can preview or route through existing safe UI."]
      });
    }

    if (/\b(teach me|help me learn|irrigation works|how .* works|start a course|resume lesson|open learning|learning)\b/.test(combined)) {
      return baseIntent(text, {
        id: "learning.guidance.answer",
        domain: "learning",
        category: "lesson_guidance",
        risk: "low",
        actionType: "preview_or_route",
        selectedToolId: LOW_RISK_SELECTED_TOOL_IDS.learning,
        confidence: 0.86,
        notes: ["Learning prompts are low-risk unless they request sensitive execution."]
      });
    }

    if (/\b(farm jobs|show .*jobs|job pathways|career pathways|find work|job readiness|work readiness)\b/.test(combined)) {
      return baseIntent(text, {
        id: "workforce.jobs.find",
        domain: "workforce",
        category: "job_pathways",
        risk: "low",
        actionType: "preview_or_route",
        selectedToolId: LOW_RISK_SELECTED_TOOL_IDS.jobs,
        confidence: 0.86,
        notes: ["Job pathway browsing is low-risk; applications remain controlled separately."]
      });
    }

    if (/\b(field support|field help|field issue|farm support|help in the field|support for my farm)\b/.test(combined)) {
      return baseIntent(text, {
        id: "workforce.field_support.preview",
        domain: "workforce",
        category: "field_support",
        risk: "low",
        actionType: "preview_or_route",
        selectedToolId: LOW_RISK_SELECTED_TOOL_IDS.fieldSupport,
        confidence: 0.82,
        notes: ["Field support guidance is low-risk unless it requests dispatch, contact, camera, or location."]
      });
    }

    if (/\b(browse agritrade|open agritrade|view agritrade|browse marketplace|open marketplace|marketplace browse)\b/.test(combined)) {
      return baseIntent(text, {
        id: "marketplace.agritrade.browse",
        domain: "marketplace",
        category: "browse",
        risk: "low",
        actionType: "preview_or_route",
        selectedToolId: LOW_RISK_SELECTED_TOOL_IDS.marketplace,
        confidence: 0.88,
        notes: ["AgriTrade browse remains low-risk; buy, sell, payment, and account actions do not."]
      });
    }

    if (/\b(crop issue|crop issues|crop problem|crop problems|crop stress|pest issue|pest problem|agriculture help|crop help|farmer help|farm help|what can you do for a farmer)\b/.test(combined)) {
      return baseIntent(text, {
        id: "agriculture.help.guidance",
        domain: "agriculture",
        category: "help",
        risk: "low",
        actionType: "preview_or_route",
        selectedToolId: LOW_RISK_SELECTED_TOOL_IDS.agriculture,
        confidence: 0.84,
        notes: ["Agriculture help is low-risk unless it asks for camera, location, dispatch, or transaction behavior."]
      });
    }

    return baseIntent(text, {
      id: "unknown.clarify_or_answer",
      category: "clarification",
      risk: "controlled",
      actionType: "unsupported",
      confidence: 0.4,
      notes: ["Nexus should clarify or answer without executing an action."]
    });
  }

  return {
    ACTION_TYPES,
    RISK_TIERS,
    LOW_RISK_SELECTED_TOOL_IDS,
    normalizeIntentText,
    classifyNexusIntent
  };
});
