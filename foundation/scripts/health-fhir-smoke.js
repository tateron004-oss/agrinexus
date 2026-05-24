const { loadCarePolicy } = require("../src/modules/health/care-policy");
const { intakeToFhirBundle, intakeToProviderPayload } = require("../src/modules/health/fhir-mapper");

const policy = loadCarePolicy();
const intake = {
  id: "intake-1",
  patient_ref: "AN-PAT-001",
  country_id: "country-1",
  need_summary: "Heat exposure and triage review",
  risk_level: "High",
  queue_status: "Care plan generated",
  representative_status: "Connected",
  created_at: "2026-05-05T12:00:00.000Z"
};
const country = {
  id: "country-1",
  name: "Nigeria",
  risk_level: "High",
  heat_index_c: 39,
  queue_status: "2 callers ahead"
};

const bundle = intakeToFhirBundle({
  intake,
  country,
  carePlanText: "Escalate to representative and document hydration guidance."
});

if (bundle.resourceType !== "Bundle") throw new Error("Expected FHIR bundle.");
const resourceTypes = bundle.entry.map(entry => entry.resource.resourceType);
for (const expected of ["Patient", "Encounter", "Observation", "ServiceRequest", "CarePlan"]) {
  if (!resourceTypes.includes(expected)) throw new Error(`Expected ${expected} resource.`);
}

const payload = intakeToProviderPayload({
  intake,
  country,
  carePlanText: "Escalate to representative and document hydration guidance.",
  policy
});

if (payload.patientRef !== intake.patient_ref) throw new Error("Expected provider payload patient ref.");
if (!payload.policyDisclaimer) throw new Error("Expected provider payload disclaimer.");
if (payload.fhir.resourceType !== "Bundle") throw new Error("Expected provider payload FHIR bundle.");
if (payload.country.heatIndexC !== 39) throw new Error("Expected country risk data in provider payload.");

console.log("Health FHIR smoke passed");
