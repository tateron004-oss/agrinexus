(function nexusPlatformActionPlannerFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPlatformActionPlanner = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPlatformActionPlannerModule() {
  const planSeeds = [
    ["farmer_help", "farmer", "controlled", "I can prepare farmer support using verified agriculture sources."],
    ["crop_issue", "crop_issue", "controlled", "I can prepare crop issue guidance and source requirements."],
    ["irrigation", "irrigation", "controlled", "I can prepare irrigation guidance with verified local sources."],
    ["market_price", "market_price", "controlled", "I can prepare market price source requirements."],
    ["agritrade", "agritrade_marketplace", "high", "I can prepare AgriTrade review steps, but marketplace actions require approval."],
    ["workforce", "workforce", "controlled", "I can prepare workforce pathway guidance."],
    ["education", "education_training", "low", "I can prepare training and education steps."],
    ["telehealth", "telehealth", "high", "I can prepare a telehealth next step; live provider connection requires a configured connector."],
    ["pharmacy", "pharmacy", "restricted", "I can prepare pharmacy support; refill actions require regulated approval."],
    ["mobile_clinic", "mobile_clinic", "high", "I can prepare mobile clinic schedule requirements."],
    ["transportation", "transportation_to_care", "high", "I can prepare transportation options; booking requires approval."],
    ["provider_contact", "provider", "high", "I can prepare provider contact steps; contacting requires confirmation."],
    ["appointment_scheduling", "provider", "high", "I can prepare scheduling requirements; scheduling is disabled until connector approval."],
    ["payment", "payment", "restricted", "I can prepare payment review requirements; payment execution is disabled."],
    ["prescription_refill", "pharmacy", "restricted", "I can prepare refill-support requirements; submission is disabled."],
    ["medical_records", "medical_records_fhir", "restricted", "I can explain FHIR requirements; record access is disabled."],
    ["location_sharing", "location_access", "sensitive", "I can explain location-sharing permissions; sharing is disabled until approved."],
    ["emergency", "emergency_boundary_partner", "restricted", "Please contact local emergency services now. Nexus cannot dispatch emergency help until an approved connector exists."],
    ["communication_message_call", "core_assistant", "high", "I can prepare communication steps; calls and messages require explicit approval."],
    ["community_services", "community_services", "controlled", "I can prepare community-service options with verified sources."],
    ["unsupported", "core_assistant", "controlled", "I need a clearer request or verified source before preparing next steps."]
  ];

  const PLATFORM_ACTION_PLANS = Object.freeze(planSeeds.map(([intent, mode, riskTier, safeResponse]) => {
    const highRisk = ["high", "restricted", "sensitive"].includes(riskTier);
    return Object.freeze({
      intent,
      mode,
      riskTier,
      safeResponse,
      sourceNeeded: true,
      connectorNeeded: highRisk,
      providerNeeded: highRisk,
      approvalNeeded: highRisk,
      consentNeeded: highRisk,
      auditNeeded: true,
      blockedActions: ["execution", "provider contact", "payment", "location sharing", "medical record access", "emergency dispatch"].filter(action => highRisk || action === "execution"),
      nextSafeStep: highRisk ? "prepare requirements and ask for explicit approval when a connector exists" : "prepare source-backed guidance",
      executionAllowed: false,
      disabledReason: "Execution remains disabled until the required source, connector, approval, consent where applicable, and audit controls are active."
    });
  }));

  function planNexusPlatformAction(intent) {
    return PLATFORM_ACTION_PLANS.find(plan => plan.intent === intent) || PLATFORM_ACTION_PLANS.find(plan => plan.intent === "unsupported");
  }

  return Object.freeze({
    PLATFORM_ACTION_PLANS,
    planNexusPlatformAction
  });
});
