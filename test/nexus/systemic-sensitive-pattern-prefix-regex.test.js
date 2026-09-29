"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const communicationsBridge = require("../../server/providers/communicationsBridgeProvider.js");
const learningBridge = require("../../server/providers/learningBridgeProvider.js");
const mapsFieldVisitBridge = require("../../server/providers/mapsFieldVisitBridgeProvider.js");
const marketplaceBridge = require("../../server/providers/marketplaceBridgeProvider.js");
const sessionBridge = require("../../server/providers/sessionBridgeProvider.js");
const workflowOrchestratorBridge = require("../../server/providers/workflowOrchestratorBridgeProvider.js");
const medicalBridgeUtils = require("../../server/providers/medicalBridgeUtils.js");

// Found live (a stray test-writing observation on providerContactBridgeProvider.js widened into a
// systemic audit): 7 of the 8 sensitive-content-filter regexes in server/providers/ shared the exact
// same defect -- "diagnos"/"prescri"/"pregnan" were written as bare word-FRAGMENTS wrapped in
// \b(...)\b. \b requires a boundary immediately after the fragment, but none of "diagnosis"/
// "diagnosed"/"diagnosing", "prescribe"/"prescribing"/"prescription", or "pregnant"/"pregnancy" have a
// boundary right after "diagnos"/"prescri"/"pregnan" -- so every one of these filters matched NONE of
// the natural forms of its own most important trigger words, only the literal fragments themselves as
// standalone words (essentially never typed by a real user). The 8th pattern (medicalBridgeUtils.js's
// FORBIDDEN_MEDICAL_EXECUTION, used by 8 different medical-bridge providers via guardMedicalText) had
// a narrower version of the same defect: diagnos(?:e|is) missed "diagnosed"/"diagnosing", and
// prescrib\w* missed "prescription" (branches off "prescri", not "prescrib"). Fixed every instance by
// widening the fragment with \w* (diagnos\w*/prescri\w*/pregnan\w*), matching the one pattern in the
// codebase that already had this right for part of its own vocabulary. providerContactBridgeProvider.js
// (also affected) has its own dedicated test file.
test("communicationsBridgeProvider blocks a natural 'prescribing' sentence, not just the literal word 'prescribe'", () => {
  const env = { NEXUS_COMMUNICATIONS_BRIDGE_ENABLED: "true" };
  const result = communicationsBridge.draft({ message: "Please confirm the prescribing schedule for this order." }, env);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
  const ok = communicationsBridge.draft({ message: "Confirming pickup time for tomorrow." }, env);
  assert.equal(ok.body.status, "prepared", JSON.stringify(ok.body));
});

test("learningBridgeProvider blocks a natural 'diagnosis' sentence in a saved resource", () => {
  const db = { profile: {} };
  const env = { NEXUS_LEARNING_BRIDGE_ENABLED: "true" };
  const result = learningBridge.saveResource({ confirmed: true, title: "Course notes", category: "Health", source: "Contains a patient diagnosis example" }, db, env);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("mapsFieldVisitBridgeProvider blocks a natural 'prescription' mention in a visit plan", () => {
  const db = { profile: {} };
  const env = { NEXUS_MAPS_FIELD_VISIT_BRIDGE_ENABLED: "true" };
  const result = mapsFieldVisitBridge.createVisitPlan({ confirmed: true, title: "Field visit", origin: "Farm gate", destinations: [{ addressText: "Prescription pickup point" }] }, db, env);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("marketplaceBridgeProvider blocks a natural 'pregnant'/'diagnosed' sentence in a listing", () => {
  const db = { profile: {} };
  const env = { NEXUS_MARKETPLACE_BRIDGE_ENABLED: "true" };
  const result = marketplaceBridge.createListing({ confirmed: true, title: "Livestock", category: "Animals", description: "Seller was recently diagnosed and unavailable" }, db, env);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("sessionBridgeProvider blocks a natural 'diagnosing'/'prescribing' sentence in a session plan", () => {
  const env = { NEXUS_SESSION_BRIDGE_ENABLED: "true" };
  const result = sessionBridge.prepare({ title: "Weekly session", topic: "Diagnosing common issues" }, {}, env);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("workflowOrchestratorBridgeProvider blocks a natural 'prescribing' sentence in workflow context", () => {
  const env = { NEXUS_WORKFLOW_ORCHESTRATOR_ENABLED: "true" };
  const result = workflowOrchestratorBridge.plan({ context: "Coordinate the prescribing follow-up." }, {}, env);
  assert.equal(result.body.status, "blocked", JSON.stringify(result.body));
});

test("medicalBridgeUtils.guardMedicalText (shared by 8 medical-bridge providers) blocks 'diagnosed'/'diagnosing' and 'prescription', not just 'diagnose'/'diagnosis'/matching-prescrib-forms", () => {
  assert.equal(medicalBridgeUtils.guardMedicalText("p", "a", ["was diagnosed yesterday"], false)?.body.status, "blocked");
  assert.equal(medicalBridgeUtils.guardMedicalText("p", "a", ["diagnosing the issue"], false)?.body.status, "blocked");
  assert.equal(medicalBridgeUtils.guardMedicalText("p", "a", ["need a prescription refill"], false)?.body.status, "blocked");
  assert.equal(medicalBridgeUtils.guardMedicalText("p", "a", ["ordinary non-sensitive text"], false), null);
});
