"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const medicalSupportBridge = require("../../server/providers/medicalSupportBridgeProvider.js");
const telehealthBridge = require("../../server/providers/telehealthBridgeProvider.js");

const medicalSupportEnv = { NEXUS_MEDICAL_SUPPORT_BRIDGE_ENABLED: "true" };
const telehealthEnv = { NEXUS_TELEHEALTH_BRIDGE_ENABLED: "true" };

function freshDb() {
  return { profile: {} };
}

// Found live (bridge-provider case-sensitivity sweep): the same recurring
// shape already found and fixed in chronicDiseaseBridgeProvider.js/
// rpmBridgeProvider.js/rtmBridgeProvider.js this session -- comparing the
// raw supportType against SUPPORT_TYPES meant a differently-cased value
// (e.g. "Mobile_Clinic_Visit") failed the membership check and was
// silently RELABELED as "health_access" (itself a valid member), so a real
// mobile-clinic intake vanished from any mobile_clinic_visit-filtered view.
test("medicalSupportBridge recognizes a differently-cased supportType, not silently relabeling it health_access", () => {
  const db = freshDb();
  medicalSupportBridge.intake({ confirmed: true, supportType: "mobile_clinic_visit", concern: "correctly-cased" }, db, medicalSupportEnv);
  medicalSupportBridge.intake({ confirmed: true, supportType: "Mobile_Clinic_Visit", concern: "differently-cased, same real category" }, db, medicalSupportEnv);
  const all = medicalSupportBridge.intakes(db).body.data.intakes;
  assert.equal(all.filter(item => item.supportType === "mobile_clinic_visit").length, 2, "both intakes must count as the same real category");
  assert.equal(all.filter(item => item.supportType === "health_access").length, 0, "neither must be silently dropped into the unrelated default category");
});

test("medicalSupportBridge still falls back to health_access for a genuinely unrecognized supportType, unaffected by the fix", () => {
  const db = freshDb();
  const result = medicalSupportBridge.intake({ confirmed: true, supportType: "not_a_real_support_type", concern: "x" }, db, medicalSupportEnv);
  assert.equal(result.body.data.intake.supportType, "health_access");
});

// Found live: the identical shape in telehealthBridgeProvider.js's
// SESSION_TYPES -- but SESSION_TYPES itself mixes case ("RPM_review",
// "RTM_review" keep their abbreviation uppercase), so the fix has to
// canonicalize both sides of the comparison, not just lowercase the input.
test("telehealthBridge recognizes a differently-cased sessionType and preserves the canonical stored casing, including mixed-case abbreviations", () => {
  const db = freshDb();
  const chronicCare = telehealthBridge.intake({ confirmed: true, sessionType: "Chronic_Care_Review", reason: "x" }, db, telehealthEnv);
  assert.equal(chronicCare.body.data.intake.sessionType, "chronic_care_review");

  const rpmLower = telehealthBridge.intake({ confirmed: true, sessionType: "rpm_review", reason: "y" }, db, telehealthEnv);
  assert.equal(rpmLower.body.data.intake.sessionType, "RPM_review", "must resolve to the canonical mixed-case member, not the lowercased input verbatim");
});

test("telehealthBridge still falls back to health_access_preparation for a genuinely unrecognized sessionType, unaffected by the fix", () => {
  const db = freshDb();
  const result = telehealthBridge.intake({ confirmed: true, sessionType: "not_a_real_session_type", reason: "x" }, db, telehealthEnv);
  assert.equal(result.body.data.intake.sessionType, "health_access_preparation");
});
