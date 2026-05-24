const fs = require("fs");
const path = require("path");

const defaultCarePolicy = {
  escalationRiskLevels: ["High", "Critical"],
  heatEscalationThresholdC: 38,
  representativeQueueStatuses: ["2 callers ahead", "Intake session in progress"],
  safetyReviewMinimumQuality: 90,
  carePlanRequiredFields: ["patientRef", "needSummary", "countryName", "riskLevel"],
  standardCarePlanSteps: [
    "Confirm patient identity and location.",
    "Review symptoms and intake need summary.",
    "Check heat exposure and nearest active facility.",
    "Escalate high-risk cases to a representative.",
    "Record guidance and follow-up requirements."
  ],
  redFlags: [],
  disclaimer: "AgriNexus AI guidance supports trained operators and does not replace licensed clinical judgment or emergency care."
};

function loadCarePolicy(filePath = path.join(__dirname, "..", "..", "..", "config", "health-policy.json")) {
  try {
    return {
      ...defaultCarePolicy,
      ...JSON.parse(fs.readFileSync(filePath, "utf8"))
    };
  } catch {
    return { ...defaultCarePolicy };
  }
}

function assessEscalation({ country, intake, policy = defaultCarePolicy }) {
  const reasons = [];
  if (policy.escalationRiskLevels.includes(intake.risk_level)) reasons.push(`intake risk ${intake.risk_level}`);
  if (policy.escalationRiskLevels.includes(country.risk_level)) reasons.push(`country risk ${country.risk_level}`);
  if (Number(country.heat_index_c || 0) >= policy.heatEscalationThresholdC) reasons.push(`heat index ${country.heat_index_c}C`);
  if (policy.representativeQueueStatuses.includes(country.queue_status)) reasons.push(`queue ${country.queue_status}`);
  return {
    shouldEscalate: reasons.length > 0,
    reasons
  };
}

function validateCarePlanInput({ patientRef, needSummary, countryName, riskLevel }, policy = defaultCarePolicy) {
  const values = { patientRef, needSummary, countryName, riskLevel };
  const missing = policy.carePlanRequiredFields.filter(field => !values[field]);
  if (missing.length) {
    throw new Error(`Care plan missing required fields: ${missing.join(", ")}`);
  }
  return true;
}

function safetyReviewGuidance({ country, policy = defaultCarePolicy }) {
  const dataQuality = Number(country.data_quality_rate || 0);
  const guidance = [];
  if (dataQuality < policy.safetyReviewMinimumQuality) guidance.push("increase data quality review before autonomous recommendations");
  if (Number(country.heat_index_c || 0) >= policy.heatEscalationThresholdC) guidance.push("monitor heat exposure and hydration guidance");
  if (policy.escalationRiskLevels.includes(country.risk_level)) guidance.push("prioritize representative escalation");
  if (!guidance.length) guidance.push("continue standard supervised triage");
  return guidance;
}

function buildCarePlanPrompt({ country, intake, policy = defaultCarePolicy }) {
  validateCarePlanInput({
    patientRef: intake.patient_ref,
    needSummary: intake.need_summary,
    countryName: country.name,
    riskLevel: intake.risk_level
  }, policy);

  return {
    patientRef: intake.patient_ref,
    countryName: country.name,
    needSummary: intake.need_summary,
    riskLevel: intake.risk_level,
    heatIndexC: country.heat_index_c,
    queueStatus: country.queue_status,
    standardSteps: policy.standardCarePlanSteps,
    redFlags: policy.redFlags,
    disclaimer: policy.disclaimer
  };
}

module.exports = {
  defaultCarePolicy,
  loadCarePolicy,
  assessEscalation,
  validateCarePlanInput,
  safetyReviewGuidance,
  buildCarePlanPrompt
};
