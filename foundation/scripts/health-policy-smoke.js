const {
  loadCarePolicy,
  assessEscalation,
  validateCarePlanInput,
  safetyReviewGuidance,
  buildCarePlanPrompt
} = require("../src/modules/health/care-policy");

const policy = loadCarePolicy();

if (!policy.disclaimer || !policy.redFlags.length) throw new Error("Expected configured health care policy.");
if (!policy.standardCarePlanSteps.length) throw new Error("Expected standard care plan steps.");

const escalation = assessEscalation({
  policy,
  country: { risk_level: "High", heat_index_c: 39, queue_status: "2 callers ahead" },
  intake: { risk_level: "Routine" }
});
if (!escalation.shouldEscalate || escalation.reasons.length < 3) throw new Error("Expected policy escalation reasons.");

validateCarePlanInput({
  patientRef: "AN-PAT-001",
  needSummary: "Heat exposure review",
  countryName: "Nigeria",
  riskLevel: "Moderate"
}, policy);

let rejectedMissingInput = false;
try {
  validateCarePlanInput({
    patientRef: "AN-PAT-001",
    needSummary: "",
    countryName: "Nigeria",
    riskLevel: "Moderate"
  }, policy);
} catch {
  rejectedMissingInput = true;
}
if (!rejectedMissingInput) throw new Error("Expected care plan validation to reject missing fields.");

const guidance = safetyReviewGuidance({
  policy,
  country: { risk_level: "High", heat_index_c: 39, data_quality_rate: 80 }
});
if (!guidance.includes("prioritize representative escalation")) throw new Error("Expected representative escalation guidance.");

const prompt = buildCarePlanPrompt({
  policy,
  country: { name: "Nigeria", heat_index_c: 39, queue_status: "2 callers ahead" },
  intake: {
    patient_ref: "AN-PAT-001",
    need_summary: "Heat exposure and triage review",
    risk_level: "High"
  }
});
if (!prompt.disclaimer || !prompt.redFlags.length || !prompt.standardSteps.length) throw new Error("Expected complete care plan prompt.");

console.log("Health policy smoke passed");
