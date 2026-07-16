const { clean, envEnabled, missingEnv } = require("./providers/providerUtils");

const REQUIRED_FIELDS = [
  "id",
  "domain",
  "description",
  "supportedIntents",
  "riskLevel",
  "requiresConfirmation",
  "liveExecutionSupported",
  "connectorKey",
  "fallbackBehavior",
  "verifyBehavior",
  "safetyNotes"
];

const CAPABILITIES = [
  {
    id: "medical.telehealthProvider",
    domain: "medical",
    description: "Prepare or submit telehealth provider review requests when configured.",
    supportedIntents: ["medical_provider_review", "telehealth_provider_review"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "medical_provider_api",
    fallbackBehavior: "local_provider_review_packet",
    verifyBehavior: "provider_reference_or_local_only",
    safetyNotes: "No diagnosis, prescribing, booking, provider contact, or record exchange without configured connector, consent, approval, and audit."
  },
  {
    id: "medical.videoVisit",
    domain: "medical",
    description: "Prepare or launch a video visit through configured video providers.",
    supportedIntents: ["video_visit_request", "telehealth_video"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "telehealth_video",
    fallbackBehavior: "local_video_visit_preparation",
    verifyBehavior: "video_provider_reference_or_local_only",
    safetyNotes: "No video room or provider connection is created unless a provider is configured and the user confirms."
  },
  {
    id: "medical.chronicCare",
    domain: "medical",
    description: "Organize chronic disease context for DM/diabetes, obesity, and HTN/hypertension provider review with RPM/RTM support.",
    supportedIntents: ["chronic_care_provider_review", "symptom_review"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "medical_provider_api",
    fallbackBehavior: "local_chronic_care_report",
    verifyBehavior: "provider_reference_or_local_only",
    safetyNotes: "Provider review only. Nexus does not diagnose, prescribe, change medication, connect devices, or transmit RPM/RTM data without configured connector, consent, approval, and audit."
  },
  {
    id: "medical.rpm",
    domain: "medical",
    description: "Collect manual RPM readings for DM, obesity, and HTN programs and prepare provider-review summaries.",
    supportedIntents: ["rpm_reading_review", "blood_pressure_review"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "medical_provider_api",
    fallbackBehavior: "local_rpm_reading_summary",
    verifyBehavior: "provider_reference_or_local_only",
    safetyNotes: "Manual readings only unless a device connector is configured. No automated alerting."
  },
  {
    id: "medical.rtm",
    domain: "medical",
    description: "Collect RTM participation, therapy adherence, activity, nutrition, and behavior context for DM, obesity, and HTN programs.",
    supportedIntents: ["rtm_activity_review"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "medical_provider_api",
    fallbackBehavior: "local_rtm_activity_summary",
    verifyBehavior: "provider_reference_or_local_only",
    safetyNotes: "No therapeutic prescription or medication change."
  },
  {
    id: "medical.mobileClinic",
    domain: "medical",
    description: "Prepare mobile clinic requests using typed information.",
    supportedIntents: ["mobile_clinic_request"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "mobile_clinic_operator_api",
    fallbackBehavior: "local_mobile_clinic_visit_plan",
    verifyBehavior: "operator_reference_or_local_only",
    safetyNotes: "No geolocation, booking, clinic contact, or dispatch without configured connector and confirmation."
  },
  {
    id: "medical.pharmacy",
    domain: "medical",
    description: "Prepare pharmacy questions or pharmacy support requests.",
    supportedIntents: ["pharmacy_support_request"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "pharmacy_partner_api",
    fallbackBehavior: "local_pharmacist_question_draft",
    verifyBehavior: "pharmacy_reference_or_local_only",
    safetyNotes: "No refill, transfer, dispensing, dosage advice, payment, or pharmacy contact unless explicitly configured and confirmed."
  },
  {
    id: "medical.patientSupport",
    domain: "medical",
    description: "Find and organize patient support resources.",
    supportedIntents: ["patient_support_request", "community_health_worker"],
    riskLevel: "low",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "patient_support_api",
    fallbackBehavior: "local_patient_support_resource_search",
    verifyBehavior: "local_only",
    safetyNotes: "No eligibility determination, claim, referral, or automatic contact."
  },
  {
    id: "medical.emergencyGuidance",
    domain: "medical",
    description: "Recognize emergency language and block routine workflows.",
    supportedIntents: ["emergency_guidance"],
    riskLevel: "restricted",
    requiresConfirmation: false,
    liveExecutionSupported: false,
    connectorKey: "none",
    fallbackBehavior: "emergency_safety_message",
    verifyBehavior: "not_applicable",
    safetyNotes: "Nexus cannot dispatch emergency services in this build."
  },
  {
    id: "communications.sms",
    domain: "communications",
    description: "Send SMS through a configured provider after confirmation.",
    supportedIntents: ["send_message", "sms_send"],
    riskLevel: "high",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "twilio_sms",
    fallbackBehavior: "local_message_draft",
    verifyBehavior: "provider_reference_required",
    safetyNotes: "No silent send. Recipient, message, provider, and confirmation are required."
  },
  {
    id: "communications.whatsapp",
    domain: "communications",
    description: "Send WhatsApp through a configured provider after confirmation.",
    supportedIntents: ["whatsapp_send"],
    riskLevel: "high",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "twilio_whatsapp",
    fallbackBehavior: "local_message_draft",
    verifyBehavior: "provider_reference_required",
    safetyNotes: "No hidden WhatsApp handoff or silent send."
  },
  {
    id: "communications.email",
    domain: "communications",
    description: "Prepare email handoff through a configured provider.",
    supportedIntents: ["email_send"],
    riskLevel: "high",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "email_provider_api",
    fallbackBehavior: "local_email_draft",
    verifyBehavior: "provider_reference_required",
    safetyNotes: "No silent email send."
  },
  {
    id: "communications.callDraft",
    domain: "communications",
    description: "Prepare call intent and provider handoff requirements.",
    supportedIntents: ["call_prepare"],
    riskLevel: "high",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "twilio_voice",
    fallbackBehavior: "local_call_preparation",
    verifyBehavior: "provider_reference_required",
    safetyNotes: "No silent call, background call, or hidden provider handoff."
  },
  {
    id: "workflow.reminder",
    domain: "workflow",
    description: "Create in-app reminders after confirmation.",
    supportedIntents: ["create_reminder"],
    riskLevel: "low",
    requiresConfirmation: true,
    liveExecutionSupported: false,
    connectorKey: "local_reminders",
    fallbackBehavior: "local_reminder",
    verifyBehavior: "local_reference",
    safetyNotes: "No OS notification permission is requested."
  },
  {
    id: "workflow.offlineQueue",
    domain: "workflow",
    description: "Queue safe local follow-up metadata for offline review.",
    supportedIntents: ["queue_offline"],
    riskLevel: "low",
    requiresConfirmation: true,
    liveExecutionSupported: false,
    connectorKey: "local_offline_queue",
    fallbackBehavior: "local_offline_queue",
    verifyBehavior: "local_reference",
    safetyNotes: "High-risk, sensitive, or external-action queue items remain blocked."
  },
  {
    id: "workflow.activityLog",
    domain: "workflow",
    description: "Record runtime action outcomes to safe activity/audit history.",
    supportedIntents: ["activity_log"],
    riskLevel: "low",
    requiresConfirmation: false,
    liveExecutionSupported: false,
    connectorKey: "local_audit_log",
    fallbackBehavior: "local_audit_event",
    verifyBehavior: "local_reference",
    safetyNotes: "Secrets and unnecessary sensitive details are not stored."
  },
  {
    id: "workflow.followUp",
    domain: "workflow",
    description: "Prepare next-step follow-up after a runtime outcome.",
    supportedIntents: ["follow_up"],
    riskLevel: "low",
    requiresConfirmation: false,
    liveExecutionSupported: false,
    connectorKey: "local_follow_up",
    fallbackBehavior: "local_follow_up_prompt",
    verifyBehavior: "local_only",
    safetyNotes: "Follow-up suggestions do not create external actions automatically."
  },
  {
    id: "knowledge.weather",
    domain: "knowledge",
    description: "Retrieve read-only weather and forecast context from public Open-Meteo when enabled.",
    supportedIntents: ["weather_lookup", "forecast_lookup", "heat_risk_lookup"],
    riskLevel: "low",
    requiresConfirmation: false,
    liveExecutionSupported: false,
    connectorKey: "public_weather_open_meteo",
    fallbackBehavior: "ask_for_explicit_location_or_show_disabled_state",
    verifyBehavior: "source_citation",
    safetyNotes: "Uses typed or spoken location text only. No browser geolocation, dispatch, routing, or medical advice."
  },
  {
    id: "knowledge.liveWeb",
    domain: "knowledge",
    description: "Retrieve current internet information and citation-ready sources through configured live knowledge providers.",
    supportedIntents: ["current_information_lookup", "source_backed_research", "citation_lookup"],
    riskLevel: "low",
    requiresConfirmation: false,
    liveExecutionSupported: true,
    connectorKey: "live_knowledge_provider",
    fallbackBehavior: "truthful_missing_credentials_with_general_guidance",
    verifyBehavior: "source_citation",
    safetyNotes: "No fake citations. Sources are shown only when a configured provider returns them."
  },
  {
    id: "agriculture.learning",
    domain: "agriculture",
    description: "Find agriculture learning and source-backed support.",
    supportedIntents: ["agriculture_learning", "irrigation_help"],
    riskLevel: "low",
    requiresConfirmation: false,
    liveExecutionSupported: false,
    connectorKey: "agriculture_source_registry",
    fallbackBehavior: "source_backed_preview",
    verifyBehavior: "source_citation",
    safetyNotes: "Education and source-backed support only."
  },
  {
    id: "workforce.learning",
    domain: "workforce",
    description: "Find workforce learning, jobs, and training pathways.",
    supportedIntents: ["workforce_learning", "farm_jobs"],
    riskLevel: "low",
    requiresConfirmation: false,
    liveExecutionSupported: false,
    connectorKey: "learning_provider_bridge",
    fallbackBehavior: "local_learning_search",
    verifyBehavior: "local_or_lms_reference",
    safetyNotes: "Enrollment remains separately gated."
  },
  {
    id: "marketplace.inquiry",
    domain: "marketplace",
    description: "Prepare marketplace inquiry drafts.",
    supportedIntents: ["marketplace_inquiry", "agritrade_browse"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "marketplace_partner_api",
    fallbackBehavior: "local_marketplace_inquiry_draft",
    verifyBehavior: "marketplace_reference_or_local_only",
    safetyNotes: "No purchase, sale, payment, inventory change, or buyer/seller contact without configured provider and confirmation."
  },
  {
    id: "maps.fieldVisit",
    domain: "maps",
    description: "Prepare typed-location field visit plans and route fallback.",
    supportedIntents: ["field_visit_plan", "route_plan"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "maps_provider",
    fallbackBehavior: "typed_location_route_preview",
    verifyBehavior: "route_reference_or_fallback",
    safetyNotes: "No browser geolocation or external navigation without explicit permission and confirmation."
  },
  {
    id: "drone.serviceRequest",
    domain: "drone",
    description: "Prepare drone service requests.",
    supportedIntents: ["drone_service_request"],
    riskLevel: "high",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "drone_provider_api",
    fallbackBehavior: "local_drone_request_intake",
    verifyBehavior: "provider_reference_or_local_only",
    safetyNotes: "No drone flight control or dispatch from this runtime."
  },
  {
    id: "lms.enrollment",
    domain: "learning",
    description: "Prepare or perform LMS enrollment through a configured provider.",
    supportedIntents: ["lms_enrollment", "course_enrollment"],
    riskLevel: "moderate",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "moodle_lms",
    fallbackBehavior: "local_enrollment_preparation",
    verifyBehavior: "lms_reference_or_local_only",
    safetyNotes: "No enrollment without configured LMS and confirmation."
  },
  {
    id: "payment.readiness",
    domain: "payment",
    description: "Check payment readiness and sandbox gating.",
    supportedIntents: ["payment_readiness"],
    riskLevel: "high",
    requiresConfirmation: true,
    liveExecutionSupported: true,
    connectorKey: "stripe_payments",
    fallbackBehavior: "sandbox_readiness_only",
    verifyBehavior: "payment_reference_required",
    safetyNotes: "No live payments or money movement unless explicitly configured, sandbox/production-approved, confirmed, and audited."
  }
];

function listCapabilities() {
  return CAPABILITIES.map(capability => ({ ...capability }));
}

function requiredCapabilityFields() {
  return [...REQUIRED_FIELDS];
}

function getCapability(id) {
  return listCapabilities().find(capability => capability.id === id) || null;
}

function capabilitiesForIntent(intent) {
  const normalized = clean(intent);
  return listCapabilities().filter(capability => capability.supportedIntents.includes(normalized));
}

function safeCapabilityRecord(capability, connectorReadiness = {}) {
  return {
    id: capability.id,
    domain: capability.domain,
    description: capability.description,
    supportedIntents: capability.supportedIntents,
    riskLevel: capability.riskLevel,
    requiresConfirmation: capability.requiresConfirmation,
    liveExecutionSupported: capability.liveExecutionSupported,
    connectorKey: capability.connectorKey,
    connectorStatus: connectorReadiness.status || "unknown",
    missingConfig: connectorReadiness.missingConfig || [],
    executionEnabled: Boolean(connectorReadiness.executionEnabled),
    fallbackBehavior: capability.fallbackBehavior,
    verifyBehavior: capability.verifyBehavior,
    safetyNotes: capability.safetyNotes
  };
}

function registryStatus(env = process.env, connectorReadinessByKey = {}) {
  const liveExecutionEnabled = envEnabled("NEXUS_LIVE_EXECUTION_ENABLED", env, false);
  return {
    ok: true,
    runtime: "nexus_production_capability_runtime",
    capabilityCount: CAPABILITIES.length,
    liveExecutionEnabled,
    capabilities: listCapabilities().map(capability => safeCapabilityRecord(capability, connectorReadinessByKey[capability.connectorKey] || {}))
  };
}

function missingConfigForConnector(connectorKey, env = process.env) {
  if (connectorKey === "live_knowledge_provider") {
    const hasAnyProvider = Boolean(
      clean(env.TAVILY_API_KEY)
      || clean(env.BRAVE_SEARCH_API_KEY)
      || clean(env.EXA_API_KEY)
      || clean(env.NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT)
    );
    return hasAnyProvider ? [] : ["TAVILY_API_KEY", "BRAVE_SEARCH_API_KEY", "EXA_API_KEY", "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT"];
  }
  const config = {
    medical_provider_api: ["NEXUS_MEDICAL_PROVIDER_API_URL", "NEXUS_MEDICAL_PROVIDER_API_KEY"],
    telehealth_video: ["NEXUS_VIDEO_PROVIDER_API_URL", "NEXUS_VIDEO_PROVIDER_API_KEY"],
    mobile_clinic_operator_api: ["NEXUS_MOBILE_CLINIC_PROVIDER_API_URL", "NEXUS_MOBILE_CLINIC_PROVIDER_API_KEY"],
    pharmacy_partner_api: ["NEXUS_PHARMACY_PROVIDER_API_URL", "NEXUS_PHARMACY_PROVIDER_API_KEY"],
    patient_support_api: ["NEXUS_PATIENT_SUPPORT_PROVIDER_API_URL", "NEXUS_PATIENT_SUPPORT_PROVIDER_API_KEY"],
    twilio_sms: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER"],
    twilio_whatsapp: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_WHATSAPP_FROM"],
    twilio_voice: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN", "TWILIO_FROM_NUMBER"],
    email_provider_api: ["NEXUS_EMAIL_PROVIDER_API_URL", "NEXUS_EMAIL_PROVIDER_API_KEY"],
    marketplace_partner_api: ["NEXUS_MARKETPLACE_PROVIDER_API_URL", "NEXUS_MARKETPLACE_PROVIDER_API_KEY"],
    maps_provider: ["GOOGLE_MAPS_API_KEY"],
    drone_provider_api: ["NEXUS_DRONE_PROVIDER_API_URL", "NEXUS_DRONE_PROVIDER_API_KEY"],
    moodle_lms: ["MOODLE_BASE_URL", "MOODLE_TOKEN"],
    stripe_payments: ["STRIPE_SECRET_KEY"]
  };
  return missingEnv(config[connectorKey] || [], env);
}

module.exports = {
  listCapabilities,
  requiredCapabilityFields,
  getCapability,
  capabilitiesForIntent,
  safeCapabilityRecord,
  registryStatus,
  missingConfigForConnector
};
