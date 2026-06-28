(function initNexusAssistantDialogueEngineContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusAssistantDialogueEngineContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusAssistantDialogueEngineContract() {
  "use strict";

  const INTENT_TYPES = Object.freeze([
    "general-question",
    "weather",
    "current-events-news",
    "conflict-security",
    "shipment-tracking",
    "job-search",
    "job-application-preparation",
    "resume-cover-letter-preparation",
    "agriculture-context",
    "music-media",
    "provider-status",
    "agriculture-help",
    "contact-provider-identity",
    "calls-messaging-intent",
    "appointment-service-request",
    "marketplace-request",
    "payment-mobile-money-intent",
    "location-dispatch-intent",
    "camera-image-intent",
    "emergency-intent",
    "medical-pharmacy-intent",
    "general-assistant-conversation",
    "clarification-required",
    "unsupported-request"
  ]);

  const HIGH_RISK_INTENTS = Object.freeze([
    "conflict-security",
    "calls-messaging-intent",
    "appointment-service-request",
    "payment-mobile-money-intent",
    "location-dispatch-intent",
    "camera-image-intent",
    "emergency-intent",
    "medical-pharmacy-intent"
  ]);

  const BLOCKED_EXECUTION_CHANNELS = Object.freeze([
    "provider-dispatch",
    "call",
    "message",
    "SMS",
    "WhatsApp",
    "Telegram",
    "email",
    "payment",
    "checkout",
    "marketplace-transaction",
    "appointment-booking",
    "location-sharing",
    "geolocation",
    "camera",
    "image-capture",
    "medical",
    "pharmacy",
    "emergency",
    "backend-write",
    "storage-write",
    "network-call",
    "pending-action"
  ]);

  const CLARIFICATION_QUESTIONS = Object.freeze({
    weather: "Which city or country should I check?",
    "conflict-security": "Which area should I check?",
    "shipment-tracking": "What tracking number should I check?",
    "job-search": "What kind of job and which city or country should I search?",
    "job-application-preparation": "Which job should I help you prepare for?",
    "music-media": "Which music provider should I use?",
    "contact-provider-identity": "Which person do you mean?",
    "appointment-service-request": "Which provider and time window should I prepare?",
    "payment-mobile-money-intent": "Who is the payee and what amount? I will not send money.",
    "medical-pharmacy-intent": "I can give safety information, but I cannot diagnose, prescribe, or dispatch emergency help.",
    "emergency-intent": "I can share safety guidance, but I cannot dispatch emergency help.",
    "clarification-required": "What would you like Nexus to help with?"
  });

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function normalizeInput(input) {
    return String(input || "").trim();
  }

  function stripWakePhrase(input) {
    return normalizeInput(input).replace(/^(hey\s+)?nexus[,:\s]+/i, "").trim();
  }

  function includesAny(text, terms) {
    return terms.some(term => text.includes(term));
  }

  function stableId(prefix, value) {
    return `${prefix}-${String(value || "dialogue").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 54) || "dialogue"}`;
  }

  function detectLanguage(input, context) {
    const lower = input.toLowerCase();
    if (lower.includes("swahili") || lower.includes("kiswahili")) return "Swahili";
    if (lower.includes("spanish")) return "Spanish";
    if (lower.includes("french")) return "French";
    if (context && hasText(context.lastLanguagePreference)) return context.lastLanguagePreference;
    return "English";
  }

  function detectSimplicity(input, context) {
    const lower = input.toLowerCase();
    if (lower.includes("simply") || lower.includes("simple")) return "simple";
    if (lower.includes("new to this") || lower.includes("low literacy")) return "low-literacy";
    if (context && hasText(context.lastSimplicityLevel)) return context.lastSimplicityLevel;
    return "standard";
  }

  function extractLocation(input, context) {
    const lower = input.toLowerCase();
    const knownLocations = ["nairobi", "kinshasa", "goma", "congo", "sudan", "kenya", "ghana", "uganda"];
    const found = knownLocations.find(location => lower.includes(location));
    if (found) return found;
    if (resolveAssistantFollowUp(input, context).isFollowUp && context && hasText(context.lastLocation)) return context.lastLocation;
    if (includesAny(lower, ["there", "that area", "nearby"]) && context && hasText(context.lastLocation)) return context.lastLocation;
    return "";
  }

  function resolveAssistantFollowUp(input, context) {
    const text = stripWakePhrase(input);
    const lower = text.toLowerCase();
    const isFollowUp = /^(what about|how about|there|that|it|tell me more|explain that|say it|use that|apply to that|draft it)/.test(lower);
    if (!isFollowUp) {
      return Object.freeze({ isFollowUp: false, resolvedIntentType: "", contextConfidence: "none", resolvedTopic: "" });
    }

    const resolvedIntentType = context && hasText(context.lastIntentType) ? context.lastIntentType : "clarification-required";
    const resolvedTopic = context && hasText(context.lastTopic) ? context.lastTopic : "previous topic";
    const contextConfidence = context && hasText(context.contextConfidence) ? context.contextConfidence : "medium";

    return Object.freeze({ isFollowUp: true, resolvedIntentType, contextConfidence, resolvedTopic });
  }

  function classifyAssistantDialogueIntent(input, context) {
    const text = stripWakePhrase(input);
    const lower = text.toLowerCase();
    const followUp = resolveAssistantFollowUp(text, context);
    let intentType = followUp.isFollowUp && followUp.resolvedIntentType !== "clarification-required" ? followUp.resolvedIntentType : "general-question";

    if (!hasText(text)) intentType = "clarification-required";
    else if (followUp.isFollowUp && followUp.resolvedIntentType === "clarification-required") intentType = "clarification-required";
    else if (!(followUp.isFollowUp && followUp.resolvedIntentType !== "clarification-required")) {
      if (includesAny(lower, ["weather", "rain", "forecast", "temperature"])) intentType = "weather";
      else if (includesAny(lower, ["fighting", "conflict", "security", "safe to travel", "war", "goma", "congo", "sudan"])) intentType = "conflict-security";
      else if (includesAny(lower, ["current events", "news"])) intentType = "current-events-news";
      else if (includesAny(lower, ["track", "shipment", "delivery", "parcel", "in transit"])) intentType = "shipment-tracking";
      else if (includesAny(lower, ["apply for this job", "help me apply", "submit the application"])) intentType = "job-application-preparation";
      else if (includesAny(lower, ["resume", "cover letter", "cv"])) intentType = "resume-cover-letter-preparation";
      else if (includesAny(lower, ["jobs", "job", "career", "employment", "hiring"])) intentType = "job-search";
      else if (includesAny(lower, ["crop", "farm", "soil", "irrigation", "agriculture", "market price"])) intentType = "agriculture-context";
      else if (includesAny(lower, ["music", "spotify", "radio", "playlist", "song"])) intentType = "music-media";
      else if (includesAny(lower, ["provider status", "connected provider", "available provider"])) intentType = "provider-status";
      else if (includesAny(lower, ["emergency", "ambulance", "police"])) intentType = "emergency-intent";
      else if (includesAny(lower, ["message", "call", "whatsapp", "telegram", "text "])) intentType = "calls-messaging-intent";
      else if (includesAny(lower, ["book appointment", "schedule appointment", "appointment"])) intentType = "appointment-service-request";
      else if (includesAny(lower, ["buy", "sell", "marketplace", "agritrade"])) intentType = "marketplace-request";
      else if (includesAny(lower, ["pay", "payment", "mobile money", "send money"])) intentType = "payment-mobile-money-intent";
      else if (includesAny(lower, ["share my location", "find my location", "dispatch", "transportation"])) intentType = "location-dispatch-intent";
      else if (includesAny(lower, ["camera", "photo", "image", "picture"])) intentType = "camera-image-intent";
      else if (includesAny(lower, ["medicine", "medical", "pharmacy", "prescription", "diagnose"])) intentType = "medical-pharmacy-intent";
      else if (includesAny(lower, ["explain", "tell me", "what is", "can you"])) intentType = "general-question";
    }

    const requestedLanguage = detectLanguage(text, context);
    const simplicityLevel = detectSimplicity(text, context);
    const location = extractLocation(text, context);
    const riskCautionRequired = HIGH_RISK_INTENTS.includes(intentType);

    return Object.freeze({
      input: text,
      intentType: INTENT_TYPES.includes(intentType) ? intentType : "unsupported-request",
      isFollowUp: followUp.isFollowUp,
      resolvedTopic: followUp.resolvedTopic,
      requestedLanguage,
      simplicityLevel,
      location,
      riskCautionRequired,
      sourceRequired: ["weather", "current-events-news", "conflict-security", "shipment-tracking", "job-search", "agriculture-context", "music-media", "provider-status", "general-question"].includes(intentType),
      noExecutionRequired: true,
      executionAuthority: false
    });
  }

  function requiresAssistantClarification(classification) {
    if (!classification || classification.intentType === "clarification-required") return true;
    const input = classification.input || "";
    const lower = input.toLowerCase();
    if (classification.intentType === "weather" && !hasText(classification.location)) return true;
    if (classification.intentType === "conflict-security" && !hasText(classification.location)) return true;
    if (classification.intentType === "shipment-tracking" && !/\b[A-Z]{2,}[- ]?\d{4,}\b/i.test(input) && !/\b\d{8,}\b/.test(input) && !lower.includes("in transit")) return true;
    if (classification.intentType === "job-search" && !(includesAny(lower, ["farm", "technology", "solar", "electrical", "agriculture"]) && hasText(classification.location))) return true;
    if (classification.intentType === "music-media" && !includesAny(lower, ["spotify", "radio", "local", "provider"])) return true;
    if (classification.intentType === "calls-messaging-intent" && includesAny(lower, ["john", "someone", "them", "provider"]) === false) return true;
    if (classification.intentType === "payment-mobile-money-intent" && !includesAny(lower, ["payee", "amount"])) return true;
    return false;
  }

  function buildAssistantClarificationQuestion(classification) {
    if (!classification) return CLARIFICATION_QUESTIONS["clarification-required"];
    return CLARIFICATION_QUESTIONS[classification.intentType] || CLARIFICATION_QUESTIONS["clarification-required"];
  }

  function buildAssistantDialoguePreview(input, context) {
    const classification = classifyAssistantDialogueIntent(input, context);
    const clarificationNeeded = requiresAssistantClarification(classification);
    const highRisk = classification.riskCautionRequired === true;
    const sourceRequired = classification.sourceRequired === true;

    const spokenSummary = clarificationNeeded
      ? buildAssistantClarificationQuestion(classification)
      : highRisk
        ? "I can help prepare safe information, but I cannot execute that action."
        : "I can prepare a source-backed answer preview for that request.";

    const preview = {
      dialoguePreviewId: stableId("dialogue-preview", `${classification.intentType}-${classification.input}`),
      intentType: classification.intentType,
      spokenSummary,
      detailedAnswerAvailable: !clarificationNeeded,
      displayDetails: clarificationNeeded ? "Nexus needs one more detail before preparing a safe answer." : "Nexus can prepare a read-only assistant preview with evidence and limitations.",
      evidenceSummary: sourceRequired ? "A verified source or configured provider is required for a current factual answer." : "No external source is required for this dialogue preview.",
      clarificationQuestion: clarificationNeeded ? buildAssistantClarificationQuestion(classification) : "",
      safetyNotice: highRisk ? "This request is high-risk or real-world-impacting. Nexus will not execute it without a later approved execution lane." : "Preview only. No real-world action is taken.",
      nextSafeOptions: highRisk ? ["review safety information", "prepare draft only", "cancel"] : ["show details", "ask a follow-up", "explain simply"],
      sourceRequirement: sourceRequired ? "source-required" : "source-not-required",
      sourceStatus: sourceRequired ? "provider-required" : "not-source-backed",
      freshnessStatus: sourceRequired ? "unavailable" : "unknown",
      confidenceLevel: clarificationNeeded ? "low" : "medium",
      limitationNotes: sourceRequired ? "No live source lookup occurs in this contract phase." : "Dialogue preview only.",
      requestedLanguage: classification.requestedLanguage,
      responseLanguage: classification.requestedLanguage,
      translationRequired: classification.requestedLanguage !== "English",
      simplicityLevel: classification.simplicityLevel,
      lowLiteracyMode: classification.simplicityLevel === "low-literacy",
      readAloudMode: false,
      riskCautionRequired: highRisk,
      blockedExecutionChannels: BLOCKED_EXECUTION_CHANNELS,
      noExecutionRequired: true,
      executionAuthority: false
    };

    return Object.freeze(preview);
  }

  function isSafeAssistantDialoguePreview(preview) {
    if (!preview || typeof preview !== "object" || Array.isArray(preview)) return false;
    if (!INTENT_TYPES.includes(preview.intentType)) return false;
    if (!hasText(preview.spokenSummary)) return false;
    if (preview.noExecutionRequired !== true) return false;
    if (preview.executionAuthority !== false) return false;
    if (!Array.isArray(preview.blockedExecutionChannels)) return false;
    return BLOCKED_EXECUTION_CHANNELS.every(channel => preview.blockedExecutionChannels.includes(channel));
  }

  return Object.freeze({
    INTENT_TYPES,
    HIGH_RISK_INTENTS,
    BLOCKED_EXECUTION_CHANNELS,
    CLARIFICATION_QUESTIONS,
    classifyAssistantDialogueIntent,
    resolveAssistantFollowUp,
    requiresAssistantClarification,
    buildAssistantClarificationQuestion,
    buildAssistantDialoguePreview,
    isSafeAssistantDialoguePreview
  });
});
