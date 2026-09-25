"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "..", "server.js"), "utf8");

function extractFunction(name) {
  const start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  const candidates = ["\nfunction ", "\nconst "]
    .map(marker => source.indexOf(marker, start + 10))
    .filter(index => index > start);
  const end = Math.min(...candidates);
  return source.slice(start, end);
}

function extractConst(name) {
  const start = source.indexOf(`const ${name} =`);
  assert.ok(start > 0, `could not locate const ${name} in server.js`);
  const end = source.indexOf(");", start) + 2;
  return source.slice(start, end);
}

// Found live (security audit): profileForUser's own outer gate was already
// patched to route a guest session through the same PHI-redaction
// machinery used for investors, but every single field-level redaction
// helper it calls (projectHealthRecordForUser, projectIntegrationEventForUser,
// etc.) still gated purely on isInvestorUser(user) -- so for a guest, each
// helper's own first check was true and returned the record COMPLETELY
// UNMODIFIED. The outer fix made the loop run for guests; it never made the
// loop actually redact anything for them. A real, unverified guest session
// (POST /api/auth/guest-session with just a free-text name, no verification
// of any kind) could read every patient's real chronic-care/telehealth
// record, including names and diagnoses, in this shared-workspace app.
test("projectHealthRecordForUser redacts real PHI for a guest session, not just for an Investor", () => {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(
    extractConst("INVESTOR_HEALTH_RECORD_FIELDS") + "\n" +
    extractFunction("isInvestorUser") + "\n" +
    extractFunction("isRestrictedHealthViewer") + "\n" +
    extractFunction("projectHealthRecordForUser") +
    "\nthis.projectHealthRecordForUser = projectHealthRecordForUser; this.isRestrictedHealthViewer = isRestrictedHealthViewer;",
    sandbox
  );
  // needSummary is deliberately NOT on the investor-safe field allowlist
  // (INVESTOR_HEALTH_RECORD_FIELDS) -- unlike patientRef/riskLevel, which
  // are intentionally kept for both investors and guests, needSummary is
  // exactly the kind of free-text clinical detail this allowlist exists to
  // strip.
  const realRecord = { patientRef: "case-4471", needSummary: "Patient reports HIV+ status, requesting confidential ARV refill", riskLevel: "high" };

  const forStandardUser = sandbox.projectHealthRecordForUser(realRecord, { role: "Standard User" }, "healthIntakes");
  assert.equal(forStandardUser.needSummary, realRecord.needSummary, "the actual patient/provider must still see the real record");

  const forInvestor = sandbox.projectHealthRecordForUser(realRecord, { role: "Investor" }, "healthIntakes");
  assert.equal(forInvestor.redacted, true, "an investor must not see real PHI");
  assert.equal(forInvestor.needSummary, undefined, "the free-text clinical detail must be stripped for an investor");

  const forGuest = sandbox.projectHealthRecordForUser(realRecord, { role: "Standard User", guest: true }, "healthIntakes");
  assert.equal(forGuest.redacted, true, "a guest session must not see real PHI either -- this is the exact bug that was found live");
  assert.equal(forGuest.needSummary, undefined, `a guest must never see the real free-text clinical detail, got: ${JSON.stringify(forGuest)}`);
});

// Found live: this function's own "redact" flag had the identical bug --
// gated on isInvestorUser(user) alone, so a guest's mission-timeline view
// still surfaced a real patient name and HIV status via item.detail/.evidence.
test("missionTimelineModel redacts Healthcare-module entries for a guest session, not just for an Investor", () => {
  const sandbox = { crypto: require("node:crypto") };
  vm.createContext(sandbox);
  vm.runInContext(
    extractFunction("isInvestorUser") + "\n" +
    extractFunction("isRestrictedHealthViewer") + "\n" +
    extractFunction("missionTimelineModel") +
    "\nthis.missionTimelineModel = missionTimelineModel;",
    sandbox
  );
  const db = { profile: { healthIntakes: [{ patientRef: "Jane Doe - HIV+ status, ARV refill needed", needSummary: "confidential", riskLevel: "high", createdAt: new Date().toISOString() }] } };

  const forStandardUser = sandbox.missionTimelineModel(db, { role: "Standard User" });
  assert.match(forStandardUser.items[0].detail, /Jane Doe/, "the actual patient/provider must still see the real detail");

  const forGuest = sandbox.missionTimelineModel(db, { role: "Standard User", guest: true });
  assert.doesNotMatch(forGuest.items[0].detail, /Jane Doe|HIV/i, `a guest must never see the real patient detail, got: ${forGuest.items[0].detail}`);
  assert.equal(forGuest.items[0].evidence, "", "risk-level evidence must also be redacted for a guest");
});
