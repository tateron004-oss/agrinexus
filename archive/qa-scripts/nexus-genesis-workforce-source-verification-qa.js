const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-genesis-predictive-workforce.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

assert(Array.isArray(runtime.WORKFORCE_VERIFICATION_RECORDS), "verification records must be exported");
assert(runtime.WORKFORCE_VERIFICATION_RECORDS.length >= 3, "verification records must cover sample jobs");
assert.strictEqual(typeof runtime.buildWorkforceSourceVerificationPacket, "function", "verification packet builder must exist");

[
  "Is this job still open?",
  "Is this employer verified?",
  "Show the source.",
  "Check scam risk for this job listing."
].forEach(command => {
  assert.strictEqual(runtime.shouldHandle(command), true, `runtime should route verification command: ${command}`);
});

const packet = runtime.buildWorkforceSourceVerificationPacket("Is this employer verified for the EV charging technician job?");
assert.strictEqual(packet.packetType, "genesis_workforce_source_verification_packet");
assert.strictEqual(packet.noClaimOfOpenJobWithoutVerification, true, "packet must forbid unverified open-job claims");
assert.strictEqual(packet.noRecruiterTrustWithoutEvidence, true, "packet must forbid recruiter trust without evidence");
assert.strictEqual(packet.noEmployerContacted, true, "verification must not contact employers");
assert.strictEqual(packet.noApplicationSubmitted, true, "verification must not submit applications");
assert.strictEqual(packet.noExternalExecutionAuthorized, true, "verification must not authorize external execution");
assert(packet.selectedVerification, "packet must include selected verification");
assert(["not_verified_current", "verified_current_or_employer_confirmed"].includes(packet.selectedVerification.listingAvailability), "listing availability must be explicit");
assert.strictEqual(packet.selectedVerification.canClaimOpen, false, "fixture records must not claim current openings without live verification");
assert(packet.selectedVerification.scamRiskSignals.includes("cannot_claim_open_without_current_verification"), "unverified source must expose scam/currentness risk signal");
assert(packet.audit.auditId.startsWith("workforce-source-audit-"), "verification packet must include audit ID");

runtime.WORKFORCE_VERIFICATION_RECORDS.forEach(record => {
  assert.strictEqual(record.noFakeAvailabilityClaim, true, `record must forbid fake availability: ${record.jobId}`);
  assert.strictEqual(record.noFakeEmployerTrustClaim, true, `record must forbid fake employer trust: ${record.jobId}`);
  assert.strictEqual(record.applicationSubmissionEnabled, false, `record must not enable application submission: ${record.jobId}`);
  assert.strictEqual(record.employerContactEnabled, false, `record must not enable employer contact: ${record.jobId}`);
});

[
  "Workforce Source Verification",
  "sourceVerificationIntent",
  "buildWorkforceSourceVerificationPacket",
  "Open-job claim allowed",
  "Listing availability"
].forEach(token => includes(app, token, `frontend verification token ${token}`));

[
  "/api/nexus/workforce-genesis/source-verification",
  "buildWorkforceSourceVerificationPacket"
].forEach(token => includes(server, token, `server verification token ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-genesis-workforce-source-verification"],
  "node scripts/nexus-genesis-workforce-source-verification-qa.js",
  "package alias must run source verification QA"
);
includes(qaSuite, "scripts/nexus-genesis-workforce-source-verification-qa.js", "qa-suite wiring");

assert.notStrictEqual(packet.selectedVerification.listingAvailability, "verified_current_or_employer_confirmed", "fixture verification must not affirm current listing availability");
assert.notStrictEqual(packet.selectedVerification.employerVerificationState, "verified_current", "fixture verification must not affirm current employer trust");
assert.strictEqual(packet.selectedVerification.recruiterVerified, false, "fixture verification must not affirm recruiter legitimacy");

console.log("Nexus Genesis workforce source verification QA passed.");
