const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-enterprise-health-evidence-trust.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8").replace(/\r\n/g, "\n");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8").replace(/\r\n/g, "\n");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8").replace(/\r\n/g, "\n");

function includes(source, needle, label) {
  assert(source.includes(needle), label);
}

assert(runtime.SOURCE_VERIFICATION_STATES.includes("verified_current"), "verified current state exists");
assert(runtime.SOURCE_VERIFICATION_STATES.includes("withdrawn"), "withdrawn state exists");
assert(runtime.SOURCE_VERIFICATION_STATES.includes("superseded"), "superseded state exists");
assert(runtime.SOURCE_VERIFICATION_STATES.includes("redirect_changed"), "redirect-changed state exists");
assert(runtime.SOURCE_VERIFICATION_STATES.includes("provider_verification_expired"), "provider expired state exists");
assert(runtime.BLOCKED_SOURCE_STATES.includes("withdrawn"), "withdrawn source is blocked");
assert(runtime.BLOCKED_SOURCE_STATES.includes("superseded"), "superseded source is blocked");
assert(runtime.FEEDBACK_TYPES.includes("incorrect_citation"), "feedback type coverage exists");
assert(runtime.FEEDBACK_TYPES.includes("laboratory_concern"), "laboratory feedback type coverage exists");

const verified = runtime.verifySource("cdc", { liveChecked: true });
assert.strictEqual(verified.verificationState, "verified_current", "live checked canonical source can verify current");
assert.strictEqual(verified.allowedForClinicalUse, true, "verified current source can be clinically usable after gates");
assert.strictEqual(verified.blocked, false, "verified current source is not blocked");
assert.strictEqual(verified.noSilentUse, false, "verified current source is not silently blocked");

const redirected = runtime.verifySource("cdc", {
  liveChecked: true,
  observedUrl: "https://malicious.example.org/cdc",
  redirectDetected: true
});
assert.strictEqual(redirected.verificationState, "redirect_changed", "untrusted redirect is blocked");
assert.strictEqual(redirected.blocked, true, "redirect_changed source is blocked");
assert(redirected.blockers.includes("redirect_destination_untrusted"), "untrusted redirect blocker is recorded");

const withdrawn = runtime.verifySource("who", { withdrawn: true });
assert.strictEqual(withdrawn.verificationState, "withdrawn", "withdrawn option changes state");
assert.strictEqual(withdrawn.blocked, true, "withdrawn source is blocked");
assert.strictEqual(withdrawn.noSilentUse, true, "withdrawn source must not be silently used");

const superseded = runtime.verifySource("nih", { supersededBy: "new-guideline" });
assert.strictEqual(superseded.verificationState, "superseded", "superseded source is detected");
assert.strictEqual(superseded.blocked, true, "superseded source is blocked");

const standard = runtime.inspect("Is this source current for diabetes?");
assert.strictEqual(standard.inspectorView.role, "standard_user", "standard view is default");
assert(standard.inspectorView.fields.sourceOrganization, "standard view has source organization");
assert(standard.inspectorView.fields.professionalReviewNotice, "standard view has professional-review notice");
assert(standard.sourceReceipts[0].verification, "source receipts include verification");
assert.strictEqual(standard.conflictReview.falseConsensusAvoided, true, "conflict review avoids false consensus");

const professional = runtime.inspect("Show the professional version for hypertension evidence.", { role: "professional" });
assert.strictEqual(professional.inspectorView.role, "professional", "professional view is available");
assert(professional.inspectorView.fields.completeCitation, "professional view has complete citation field");
assert(professional.inspectorView.fields.recommendationStrength, "professional view has recommendation strength field");
assert(Array.isArray(professional.inspectorView.fields.professionalReviewRequirements), "professional review requirements exist");

const feedback = runtime.buildFeedbackRecord({
  feedbackType: "wrong_jurisdiction",
  sourceId: "cdc",
  domainId: "diabetes",
  note: "Needs California source review."
});
assert.strictEqual(feedback.status, "queued_for_governance_review", "feedback queues for governance review");
assert.strictEqual(feedback.professionalReviewed, false, "feedback does not claim professional review");
assert(/No qualified professional review is claimed/i.test(feedback.reviewerClaim), "reviewer claim is truthful");

assert(runtime.shouldHandle("Show the source."), "show source command is handled");
assert(runtime.shouldHandle("Who published this?"), "publisher command is handled");
assert(runtime.shouldHandle("Is this source current?"), "source-current command is handled");
assert(runtime.shouldHandle("Are there conflicting guidelines?"), "conflict command is handled");
assert(runtime.shouldHandle("Show the professional version."), "professional-version command is handled");

includes(server, "/api/nexus/health-evidence/source/verify", "source verification endpoint exists");
includes(server, "/api/nexus/health-evidence/feedback", "governance feedback endpoint exists");
includes(server, "NEXUS_HEALTH_SOURCE_LIVE_VERIFICATION_ENABLED", "live verification is explicitly env gated");
includes(server, "redirect: \"manual\"", "redirect detection is implemented");
includes(server, "noProfessionalReviewClaimed", "feedback endpoint avoids fake review claims");

includes(app, "sourceVerificationIntent", "frontend detects source-verification commands");
includes(app, "professionalRole", "frontend detects professional view commands");
includes(app, "isNexusEnterpriseHealthEvidenceTrustCommand(command)", "brain bridge exempts enterprise health evidence commands");
includes(app, "const isExplicitBrainLaneCommand = command => !isNexusEnterpriseHealthEvidenceTrustCommand(command)", "explicit brain lane commands exclude evidence inspector commands");
includes(app, "function routeNexusCommandCenterCommunicationSubmit", "communication submit bridge exists");
includes(app, "if (handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source })) {\n    event?.preventDefault?.();", "communication bridge routes evidence commands before mission advancement");
includes(app, "if (handleNexusEnterpriseHealthEvidenceTrustCommand(command, { source: \"typed-command-submit\" })) {\n        event.preventDefault();", "early submit routes evidence commands before workflow routing");
includes(app, "advanceNexusOsMissionForCommand(command, { source: \"typed-command-keyboard\" });\n    if (await handleNexusUnifiedBrainRuntimeCommand", "keyboard mission advancement waits until after evidence command handling");
includes(app, "typed-command-keyboard", "keyboard command route remains covered");

assert(packageJson.scripts["qa:nexus-enterprise-health-source-verification"], "package alias exists");
includes(qaSuite, "scripts/nexus-enterprise-health-source-verification-qa.js", "safe suites include source verification QA");

console.log("Nexus enterprise health source verification QA passed.");
