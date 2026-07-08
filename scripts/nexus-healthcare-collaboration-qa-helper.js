const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const includes = (haystack, needle, label) => assert(haystack.includes(needle), `${label} must include ${needle}`);
const excludes = (haystack, needle, label) => assert(!haystack.includes(needle), `${label} must not include ${needle}`);
const runtime = require("../public/nexus-healthcare-collaboration-runtime.js");

function assertCommonRuntime() {
  assert(runtime, "healthcare collaboration runtime should load");
  [
    "providerRegistry",
    "sourceReadinessMatrix",
    "providerEvidence",
    "fhirSandboxSummary",
    "prepareAction",
    "attemptExecution",
    "isHealthcareCollaborationCommand",
    "shouldHandleBeforeLegacy",
    "process"
  ].forEach(name => assert.equal(typeof runtime[name], "function", `${name} should be a function`));

  [
    "ehr_fhir",
    "hie_exchange",
    "telehealth_video",
    "secure_messaging",
    "care_coordination",
    "rpm_patient_generated_data",
    "pharmacy_medication",
    "forms_consent_intake",
    "labs_diagnostics_imaging",
    "population_health_analytics"
  ].forEach(source => assert(runtime.SOURCE_TYPES.includes(source), `source ${source} should exist`));

  [
    "Epic FHIR",
    "Oracle Health / Cerner FHIR",
    "HIE / National Exchange",
    "Zoom Healthcare",
    "Twilio HIPAA-eligible messaging",
    "Surescripts / DrFirst / Medication Network",
    "HIPAA-capable Forms / Consent"
  ].forEach(label => assert(runtime.PROVIDERS.some(provider => provider.name === label), `provider ${label} should exist`));

  assert(runtime.RUNTIME_CARDS.length >= 15, "runtime should expose healthcare workflow cards");
  [
    "Telehealth Visit",
    "Patient Message",
    "Provider Message",
    "Care-Team Message",
    "Referral Packet",
    "Chronic Care Escalation",
    "RPM Summary",
    "Pharmacy Handoff",
    "Consent / Intake",
    "Clinical Records / FHIR",
    "HIE Record Request",
    "Labs / Diagnostics",
    "Imaging Report",
    "Mobile Clinic Coordination",
    "Visit Summary Share"
  ].forEach(title => assert(runtime.RUNTIME_CARDS.some(card => card.title === title), `card ${title} should exist`));
}

function assertRegistryAndSources() {
  const emptyRegistry = runtime.providerRegistry({});
  assert.equal(emptyRegistry.noSecretValues, true, "registry should not expose secrets");
  assert.equal(emptyRegistry.noDiagnosis, true, "registry should keep diagnostic boundary");
  assert(emptyRegistry.providers.some(provider => provider.providerId === "epic_fhir" && provider.missingEnvNames.includes("NEXUS_FHIR_BASE_URL")), "Epic FHIR missing env should be reported");
  assert(emptyRegistry.providers.some(provider => provider.providerId === "twilio_hipaa_messaging" && provider.missingEnvNames.includes("TWILIO_ACCOUNT_SID")), "Twilio missing env should be reported");

  const configured = runtime.providerRegistry({
    NEXUS_HEALTHCARE_COLLAB_ENABLED: "true",
    NEXUS_HEALTHCARE_PHI_ALLOWED: "true",
    NEXUS_HEALTHCARE_BAA_CONFIRMED: "true",
    NEXUS_FHIR_BASE_URL: "https://sandbox.fhir.local/fhir",
    NEXUS_FHIR_CLIENT_ID: "configured-client-id",
    NEXUS_FHIR_CLIENT_SECRET: "configured-client-credential",
    NEXUS_FHIR_TOKEN_URL: "https://sandbox.fhir.local/token"
  });
  const json = JSON.stringify(configured);
  excludes(json, "configured-client-id", "configured registry");
  excludes(json, "configured-client-credential", "configured registry");
  assert(configured.providers.some(provider => provider.providerId === "generic_fhir" && provider.liveConnectionStatus === "live_ready"), "generic FHIR should become live ready when gates are set");

  const matrix = runtime.sourceReadinessMatrix({});
  assert.equal(matrix.rows.length, runtime.SOURCE_TYPES.length, "source matrix should include every source type");
  assert(matrix.rows.some(row => row.sourceType === "pharmacy_medication"), "pharmacy source row should exist");
}

function assertActionsAndSafety() {
  const referral = runtime.prepareAction("Prepare a referral packet for provider review.", {});
  assert.equal(referral.noExecutionAuthorized, true, "referral prepare should not execute");
  assert.equal(referral.packet.clinicianReviewRequired, true, "referral should require clinician review");
  includes(referral.message, "No external healthcare action was executed", "referral message");

  const chronic = runtime.prepareAction("Prepare a blood pressure escalation with RPM readings for hypertension.", {});
  assert.equal(chronic.action.actionType, "prepare_chronic_care_escalation", "chronic action should route");
  assert(chronic.packet.dataNeeded.includes("reading value"), "RPM summary should request reading value");
  assert.equal(chronic.noDiagnosis, true, "chronic lane should not diagnose");

  const pharmacy = runtime.prepareAction("Prepare a pharmacy handoff for medication reconciliation.", {});
  assert.equal(pharmacy.action.actionType, "prepare_pharmacy_handoff", "pharmacy action should route");
  assert.equal(pharmacy.noPrescribing, true, "pharmacy lane should not prescribe");

  const fhir = runtime.prepareAction("Pull FHIR chart summary from Epic.", {});
  assert.equal(fhir.action.actionType, "prepare_fhir_chart_summary", "FHIR action should route");
  assert(fhir.fhirSandboxSummary, "FHIR summary should be attached");
  assert.equal(fhir.fhirSandboxSummary.noPhiSent, true, "FHIR sandbox should not send PHI");

  const emergency = runtime.prepareAction("I have chest pain and trouble breathing.", {});
  assert.equal(runtime.shouldHandleBeforeLegacy("I have chest pain and trouble breathing."), true, "emergency healthcare phrase should route to runtime");
  assert.equal(emergency.status, "blocked_emergency_escalation", "emergency should block routine handling");
  assert.equal(emergency.noEmergencyDispatch, true, "emergency should not dispatch");

  const blockedExecution = runtime.attemptExecution("Schedule a telehealth visit.", { confirmed: false, clinicianReviewed: false });
  assert(["blocked_clinician_review_required", "blocked_confirmation_required", "requires_confirmation"].includes(blockedExecution.status), "execution should be blocked without gates");
  assert.equal(blockedExecution.noExecutionAuthorized, true, "blocked execution should preserve no-execution flag");
}

function assertAdaptersAndReceipts() {
  assert(runtime.adapters.epic_fhir, "Epic adapter should exist");
  assert.equal(typeof runtime.adapters.epic_fhir.getStatus, "function", "Epic adapter should provide status");
  assert.equal(typeof runtime.adapters.twilio_hipaa_messaging.execute, "function", "Twilio adapter should provide execute");
  const before = runtime.getReceipts().length;
  runtime.prepareAction("Prepare a provider message.", {});
  assert(runtime.getReceipts().length >= before, "receipt list should be readable");
  assert(Array.isArray(runtime.getClinicianReviewQueue()), "clinician queue should be readable");
}

function assertAppWiring() {
  const index = read("public/index.html");
  const app = read("public/app.js");
  const server = read("server.js");
  includes(index, "id=\"nexusHealthcareCollaborationRuntime\"", "index");
  includes(index, "data-nexus-healthcare-cards", "index");
  includes(index, "/nexus-healthcare-collaboration-runtime.js", "index");
  includes(app, "handleNexusHealthcareCollaborationRuntimeCommand", "app");
  includes(app, "NexusHealthcareCollaborationRuntime?.mount", "app");
  includes(server, "nexusHealthcareCollaborationRuntime", "server");
  includes(server, "/api/healthcare-collaboration/status", "server");
  includes(server, "/api/healthcare-collaboration/action", "server");
  includes(server, "/api/healthcare-collaboration/execute", "server");
}

function assertNoUnsafeClaims() {
  const files = [
    "public/nexus-healthcare-collaboration-runtime.js",
    "public/index.html",
    "server.js",
    "docs/NEXUS_HEALTHCARE_COLLABORATION_RUNTIME.md"
  ].filter(file => fs.existsSync(path.join(root, file))).map(read).join("\n");
  [
    "HIPAA approved",
    "diagnoses patients",
    "prescribes medication",
    "refill approved",
    "emergency dispatched",
    "appointment booked automatically",
    "PHI sent automatically"
  ].forEach(unsafe => excludes(files.toLowerCase(), unsafe.toLowerCase(), "healthcare collaboration files"));
  includes(files, "No external healthcare action was executed", "runtime safety copy");
}

function run(section = "all") {
  assertCommonRuntime();
  const checks = {
    registry: assertRegistryAndSources,
    runtime: assertActionsAndSafety,
    fhir: () => {
      const summary = runtime.fhirSandboxSummary({ env: {} });
      assert.equal(summary.noLiveRecordPulled, true, "FHIR should default to sandbox/local fixture");
      assert.equal(summary.noClinicalWrite, true, "FHIR should not write clinically");
    },
    telehealth: assertActionsAndSafety,
    safety: assertNoUnsafeClaims,
    ui: assertAppWiring,
    evidence: assertRegistryAndSources,
    rpm: assertActionsAndSafety,
    receipts: assertAdaptersAndReceipts
  };
  if (section === "all") {
    Object.values(checks).forEach(check => check());
  } else {
    assert(checks[section], `Unknown healthcare QA section: ${section}`);
    checks[section]();
  }
  console.log(`[nexus-healthcare-collaboration-${section}-qa] passed`);
}

module.exports = { run };
