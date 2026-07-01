const crypto = require("node:crypto");
const { clean } = require("./providers/providerUtils");
const { capabilitiesForIntent, getCapability } = require("./nexusCapabilityRegistry");

const EMERGENCY_PATTERN = /\b(chest pain|trouble breathing|cannot breathe|not breathing|severe bleeding|stroke|seizure|unconscious|suicidal|severe allergic|pregnancy bleeding|head injury|emergency|911|112|999)\b/i;

function normalizeGoal(goal = "") {
  return clean(goal).replace(/^nexus,\s*/i, "");
}

function hasAny(text, patterns = []) {
  return patterns.some(pattern => pattern.test(text));
}

function unique(values = []) {
  return [...new Set(values.filter(Boolean))];
}

function selectIntent(goal = "") {
  const text = normalizeGoal(goal).toLowerCase();
  if (!text) return { domain: "general", intent: "unknown", capabilityIds: [], missingInformation: ["user goal"], riskLevel: "low" };
  if (EMERGENCY_PATTERN.test(text)) return { domain: "medical", intent: "emergency_guidance", capabilityIds: ["medical.emergencyGuidance"], missingInformation: [], riskLevel: "restricted" };
  if (hasAny(text, [/blood pressure|bp\b|glucose|reading|rpm|remote patient/])) return { domain: "medical", intent: "chronic_care_provider_review", capabilityIds: ["medical.chronicCare", "medical.rpm", "medical.telehealthProvider"], missingInformation: /blood pressure|bp|glucose|reading/.test(text) && !/\d/.test(text) ? ["recent readings with date and time"] : [], riskLevel: "moderate" };
  if (hasAny(text, [/video doctor|video visit|telehealth|doctor visit/])) return { domain: "medical", intent: "video_visit_request", capabilityIds: ["medical.videoVisit", "medical.telehealthProvider"], missingInformation: /provider|doctor/.test(text) ? [] : ["provider or care team preference"], riskLevel: "moderate" };
  if (hasAny(text, [/doctor|provider.*review|review my symptoms|symptoms/])) return { domain: "medical", intent: "medical_provider_review", capabilityIds: ["medical.chronicCare", "medical.telehealthProvider", "medical.patientSupport"], missingInformation: /symptom|symptoms/.test(text) && !/fever|pain|cough|pressure|breath|reading|\d/.test(text) ? ["non-emergency symptom summary"] : [], riskLevel: "moderate" };
  if (hasAny(text, [/pharmacy|pharmacist|medication|medicine|prescription/])) return { domain: "medical", intent: "pharmacy_support_request", capabilityIds: ["medical.pharmacy"], missingInformation: /this medication|medication/.test(text) ? ["medication question topic without dosage change request"] : [], riskLevel: "moderate" };
  if (hasAny(text, [/mobile clinic|clinic van|community clinic/])) return { domain: "medical", intent: "mobile_clinic_request", capabilityIds: ["medical.mobileClinic", "medical.patientSupport"], missingInformation: /near me|my location/.test(text) ? ["typed location; browser geolocation is not used"] : [], riskLevel: "moderate" };
  if (hasAny(text, [/community health worker|chw|patient support|navigator/])) return { domain: "medical", intent: "patient_support_request", capabilityIds: ["medical.patientSupport"], missingInformation: [], riskLevel: "low" };
  if (hasAny(text, [/remind|reminder|check.*later/])) return { domain: "workflow", intent: "create_reminder", capabilityIds: ["workflow.reminder"], missingInformation: /tomorrow|later|today|next|at \d/i.test(text) ? [] : ["reminder timing"], riskLevel: "low" };
  if (hasAny(text, [/queue.*offline|offline|back online/])) return { domain: "workflow", intent: "queue_offline", capabilityIds: ["workflow.offlineQueue"], missingInformation: [], riskLevel: "low" };
  if (hasAny(text, [/send.*message|sms|whatsapp|email/])) return { domain: "communications", intent: "send_message", capabilityIds: ["communications.sms", "communications.whatsapp", "communications.email"], missingInformation: ["recipient", "message content"], riskLevel: "high" };
  if (hasAny(text, [/available.*actions|what.*can.*do|capabilities/])) return { domain: "workflow", intent: "capability_summary", capabilityIds: ["workflow.activityLog", "workflow.followUp"], missingInformation: [], riskLevel: "low" };
  if (hasAny(text, [/agriculture training|irrigation|crop|farmer training/])) return { domain: "agriculture", intent: "agriculture_learning", capabilityIds: ["agriculture.learning"], missingInformation: [], riskLevel: "low" };
  if (hasAny(text, [/farm jobs|job|workforce|training pathway/])) return { domain: "workforce", intent: "workforce_learning", capabilityIds: ["workforce.learning"], missingInformation: [], riskLevel: "low" };
  if (hasAny(text, [/agritrade|marketplace|market.*inquiry|buyer|seller/])) return { domain: "marketplace", intent: "marketplace_inquiry", capabilityIds: ["marketplace.inquiry"], missingInformation: /inquiry|buyer|seller/.test(text) ? [] : ["listing or marketplace topic"], riskLevel: "moderate" };
  if (hasAny(text, [/field visit|route|map|directions/])) return { domain: "maps", intent: "field_visit_plan", capabilityIds: ["maps.fieldVisit"], missingInformation: ["typed origin and destination"], riskLevel: "moderate" };
  if (hasAny(text, [/drone|scan field|drone service/])) return { domain: "drone", intent: "drone_service_request", capabilityIds: ["drone.serviceRequest"], missingInformation: ["field description and service purpose"], riskLevel: "high" };
  if (hasAny(text, [/enroll.*course|course enrollment|lms/])) return { domain: "learning", intent: "lms_enrollment", capabilityIds: ["lms.enrollment"], missingInformation: ["course identifier"], riskLevel: "moderate" };
  return { domain: "general", intent: "unknown", capabilityIds: ["workflow.followUp"], missingInformation: ["clearer goal or target capability"], riskLevel: "low" };
}

function combineRisk(capabilityIds = [], fallbackRisk = "low") {
  const order = ["low", "moderate", "high", "restricted"];
  return capabilityIds
    .map(id => getCapability(id)?.riskLevel || fallbackRisk)
    .reduce((highest, risk) => order.indexOf(risk) > order.indexOf(highest) ? risk : highest, fallbackRisk);
}

function buildActionPlan(selected, missingInformation = []) {
  return selected.map((capability, index) => ({
    step: index + 1,
    capability: capability.id,
    action: capability.supportedIntents[0] || "prepare",
    status: missingInformation.length && index === 0 ? "needs_information" : capability.requiresConfirmation ? "blocked_confirmation_required" : "ready_for_local_preview"
  }));
}

function userMessageForPlan({ userGoal, domain, intent, selectedCapabilities, missingInformation, riskLevel }) {
  if (intent === "emergency_guidance") {
    return "This sounds urgent. Seek local emergency help immediately. Nexus cannot dispatch emergency services in this build and will not route this as a routine action.";
  }
  if (missingInformation.length) {
    return `I can plan this ${domain} action, but I need ${missingInformation.join(", ")} before execution can be considered.`;
  }
  const labels = selectedCapabilities.map(capability => capability.id).join(", ");
  const confirmation = selectedCapabilities.some(capability => capability.requiresConfirmation) ? " I will require your confirmation before execution." : "";
  const risk = riskLevel === "low" ? "" : ` This is a ${riskLevel}-risk workflow.`;
  return `I selected ${labels || "a safe follow-up path"} for: "${userGoal}".${risk}${confirmation}`;
}

function planAction({ userGoal = "", context = {}, confirmed = false } = {}) {
  const normalizedGoal = normalizeGoal(userGoal);
  const selected = selectIntent(normalizedGoal);
  const selectedCapabilities = selected.capabilityIds.map(getCapability).filter(Boolean);
  const inferredCapabilities = selectedCapabilities.length ? selectedCapabilities : capabilitiesForIntent(selected.intent);
  const capabilityIds = inferredCapabilities.map(capability => capability.id);
  const riskLevel = combineRisk(capabilityIds, selected.riskLevel);
  const missingInformation = unique([...(selected.missingInformation || []), ...((context.missingInformation || []))]);
  const requiresConfirmation = inferredCapabilities.some(capability => capability.requiresConfirmation);
  const planId = `nexus-plan-${crypto.randomUUID()}`;
  const actionPlan = buildActionPlan(inferredCapabilities, missingInformation);
  const mode = selected.intent === "emergency_guidance"
    ? "blocked"
    : missingInformation.length
      ? "plan_only"
      : requiresConfirmation && !confirmed
        ? "plan_only"
        : "local_fallback";
  return {
    ok: true,
    runtime: "nexus_production_capability_runtime",
    planId,
    mode,
    userGoal: normalizedGoal,
    domain: selected.domain,
    intent: selected.intent,
    capabilities: capabilityIds,
    riskLevel,
    requiresConfirmation,
    confirmed: confirmed === true,
    executionAllowed: false,
    executionAttempted: false,
    missingInformation,
    actionPlan,
    connectorReadiness: {},
    executionResult: null,
    verification: null,
    userMessage: userMessageForPlan({
      userGoal: normalizedGoal,
      domain: selected.domain,
      intent: selected.intent,
      selectedCapabilities: inferredCapabilities,
      missingInformation,
      riskLevel
    })
  };
}

module.exports = {
  EMERGENCY_PATTERN,
  normalizeGoal,
  selectIntent,
  planAction
};
