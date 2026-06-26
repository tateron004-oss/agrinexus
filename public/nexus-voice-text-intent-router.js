(function nexusVoiceTextIntentRouterModule(globalScope) {
  "use strict";

  const INTENT_DOMAIN = Object.freeze({
    AGRICULTURE_SUPPORT: "agriculture-support",
    SOURCE_REVIEW: "source-review",
    GENERAL_ASSISTANT: "general-assistant",
    COMMUNICATION_REQUEST: "communication-request",
    APPOINTMENT_REQUEST: "appointment-request",
    MARKETPLACE_REQUEST: "marketplace-request",
    PAYMENT_REQUEST: "payment-request",
    LOCATION_REQUEST: "location-request",
    CAMERA_MEDIA_REQUEST: "camera-media-request",
    HEALTH_MEDICAL_REQUEST: "health-medical-request",
    EMERGENCY_REQUEST: "emergency-request"
  });

  const ROUTE_STATUS = Object.freeze({
    INFORMATIONAL: "informational",
    REVIEW_ONLY: "review-only",
    PERMISSION_REQUIRED: "permission-required",
    BLOCKED: "blocked"
  });

  const RISK_LEVEL = Object.freeze({
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    EXCLUDED: "excluded"
  });

  const RULES = Object.freeze([
    {
      domain: INTENT_DOMAIN.EMERGENCY_REQUEST,
      status: ROUTE_STATUS.BLOCKED,
      riskLevel: RISK_LEVEL.EXCLUDED,
      patterns: [
        /\bemergency\b/i,
        /\bdispatch\b/i,
        /\bambulance\b/i,
        /\bnot breathing\b/i,
        /\bunconscious\b/i
      ],
      disclosure: "Emergency requests require local emergency services. No emergency dispatch has started and no action has been taken."
    },
    {
      domain: INTENT_DOMAIN.PAYMENT_REQUEST,
      status: ROUTE_STATUS.BLOCKED,
      riskLevel: RISK_LEVEL.EXCLUDED,
      patterns: [
        /\bpay(ment)?\b/i,
        /\bprocess my payment\b/i,
        /\bcharge\b/i,
        /\bcredit card\b/i,
        /\bbank\b/i
      ],
      disclosure: "Payments are blocked in the current Nexus safety mode. No payment has started."
    },
    {
      domain: INTENT_DOMAIN.HEALTH_MEDICAL_REQUEST,
      status: ROUTE_STATUS.PERMISSION_REQUIRED,
      riskLevel: RISK_LEVEL.HIGH,
      patterns: [
        /\bdiagnos(e|is)\b/i,
        /\bprescription\b/i,
        /\brefill\b/i,
        /\bmedical record\b/i,
        /\bFHIR\b/i,
        /\bdoctor\b/i,
        /\btelehealth\b/i,
        /\bpharmacy\b/i,
        /\bclinic\b/i
      ],
      disclosure: "Health and medical actions require verified integrations, consent, and audit controls. No medical action has been taken."
    },
    {
      domain: INTENT_DOMAIN.COMMUNICATION_REQUEST,
      status: ROUTE_STATUS.PERMISSION_REQUIRED,
      riskLevel: RISK_LEVEL.HIGH,
      patterns: [
        /\bcall\b/i,
        /\bmessage\b/i,
        /\btext\b/i,
        /\bemail\b/i,
        /\bwhatsapp\b/i,
        /\btelegram\b/i,
        /\bcontact\b/i
      ],
      disclosure: "Communication requests require explicit approval and provider readiness. No message or call has been sent."
    },
    {
      domain: INTENT_DOMAIN.APPOINTMENT_REQUEST,
      status: ROUTE_STATUS.PERMISSION_REQUIRED,
      riskLevel: RISK_LEVEL.HIGH,
      patterns: [
        /\bappointment\b/i,
        /\bschedule\b/i,
        /\bbook\b/i,
        /\breserve\b/i
      ],
      disclosure: "Scheduling requires verified provider integration and explicit approval. No appointment has been scheduled."
    },
    {
      domain: INTENT_DOMAIN.LOCATION_REQUEST,
      status: ROUTE_STATUS.PERMISSION_REQUIRED,
      riskLevel: RISK_LEVEL.HIGH,
      patterns: [
        /\blocation\b/i,
        /\bnear me\b/i,
        /\bfind me\b/i,
        /\bwhere am i\b/i,
        /\bshare my location\b/i
      ],
      disclosure: "Location use requires explicit permission. No location has been requested or shared."
    },
    {
      domain: INTENT_DOMAIN.CAMERA_MEDIA_REQUEST,
      status: ROUTE_STATUS.PERMISSION_REQUIRED,
      riskLevel: RISK_LEVEL.HIGH,
      patterns: [
        /\bcamera\b/i,
        /\bphoto\b/i,
        /\bpicture\b/i,
        /\bupload\b/i,
        /\bvideo\b/i,
        /\bscan\b/i
      ],
      disclosure: "Camera and media use require explicit permission. No camera or media capture has started."
    },
    {
      domain: INTENT_DOMAIN.MARKETPLACE_REQUEST,
      status: ROUTE_STATUS.PERMISSION_REQUIRED,
      riskLevel: RISK_LEVEL.HIGH,
      patterns: [
        /\bbuy\b/i,
        /\bsell\b/i,
        /\border\b/i,
        /\btransaction\b/i,
        /\bcheckout\b/i,
        /\bmarketplace\b/i
      ],
      disclosure: "Marketplace actions require review, permission, and transaction controls. No marketplace transaction has started."
    },
    {
      domain: INTENT_DOMAIN.SOURCE_REVIEW,
      status: ROUTE_STATUS.REVIEW_ONLY,
      riskLevel: RISK_LEVEL.LOW,
      patterns: [
        /\bsource\b/i,
        /\bcitation\b/i,
        /\bfresh(ness)?\b/i,
        /\bverified\b/i,
        /\bconfidence\b/i
      ],
      disclosure: "Nexus can review source and freshness requirements. No live source lookup has been performed."
    },
    {
      domain: INTENT_DOMAIN.AGRICULTURE_SUPPORT,
      status: ROUTE_STATUS.REVIEW_ONLY,
      riskLevel: RISK_LEVEL.LOW,
      patterns: [
        /\bcrop(s)?\b/i,
        /\bfarm(ing|er)?\b/i,
        /\bagriculture\b/i,
        /\birrigation\b/i,
        /\bpest\b/i,
        /\bdisease\b/i,
        /\bsoil\b/i,
        /\bfertilizer\b/i,
        /\byellow leaves\b/i,
        /\bfield support\b/i
      ],
      disclosure: "Nexus can prepare agriculture support guidance for review. No live lookup, provider contact, or transaction has started."
    }
  ]);

  function normalizePrompt(prompt) {
    return typeof prompt === "string" ? prompt.trim() : "";
  }

  function firstMatchingRule(prompt) {
    const normalized = normalizePrompt(prompt);
    if (!normalized) {
      return null;
    }
    return RULES.find(rule => rule.patterns.some(pattern => pattern.test(normalized))) || null;
  }

  function buildBaseRoute(prompt, rule) {
    const normalized = normalizePrompt(prompt);
    const selectedRule = rule || {
      domain: INTENT_DOMAIN.GENERAL_ASSISTANT,
      status: ROUTE_STATUS.INFORMATIONAL,
      riskLevel: RISK_LEVEL.LOW,
      disclosure: "Nexus can answer or prepare safe review-only next steps. No action has been taken."
    };

    return {
      routerVersion: "nexus.voiceTextIntentRouter.v1",
      prompt: normalized,
      intentDomain: selectedRule.domain,
      routeStatus: selectedRule.status,
      riskLevel: selectedRule.riskLevel,
      informationalAllowed: selectedRule.status === ROUTE_STATUS.INFORMATIONAL,
      reviewOnlyAllowed: selectedRule.status === ROUTE_STATUS.REVIEW_ONLY,
      permissionRequired: selectedRule.status === ROUTE_STATUS.PERMISSION_REQUIRED,
      blocked: selectedRule.status === ROUTE_STATUS.BLOCKED,
      executionAllowed: false,
      sideEffectsAllowed: false,
      liveLookupAllowed: false,
      providerContactAllowed: false,
      messageAllowed: false,
      callAllowed: false,
      appointmentAllowed: false,
      marketplaceTransactionAllowed: false,
      paymentAllowed: false,
      locationAllowed: false,
      cameraMediaAllowed: false,
      medicalActionAllowed: false,
      emergencyDispatchAllowed: false,
      storageMutationAllowed: false,
      backendMutationAllowed: false,
      hiddenStagedActionAllowed: false,
      userVisibleDisclosure: selectedRule.disclosure,
      auditRequiredBeforeFutureExecution: selectedRule.status === ROUTE_STATUS.PERMISSION_REQUIRED || selectedRule.status === ROUTE_STATUS.BLOCKED
    };
  }

  function classifyVoiceTextIntent(prompt) {
    return buildBaseRoute(prompt, firstMatchingRule(prompt));
  }

  function summarizeIntentRoute(route) {
    const safeRoute = route && typeof route === "object" ? route : classifyVoiceTextIntent("");
    return [
      safeRoute.userVisibleDisclosure || "No action has been taken.",
      `Intent domain: ${safeRoute.intentDomain || INTENT_DOMAIN.GENERAL_ASSISTANT}`,
      `Risk level: ${safeRoute.riskLevel || RISK_LEVEL.LOW}`,
      "No action has been taken.",
      "No provider has been contacted.",
      "No message has been sent.",
      "No call has been placed.",
      "No appointment, payment, marketplace transaction, location share, camera/media capture, medical action, or emergency dispatch has started."
    ];
  }

  const api = Object.freeze({
    INTENT_DOMAIN,
    ROUTE_STATUS,
    RISK_LEVEL,
    classifyVoiceTextIntent,
    summarizeIntentRoute
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusVoiceTextIntentRouter = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
