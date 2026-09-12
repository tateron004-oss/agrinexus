const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const sourceTrust = require("../server/nexus-n100-source-trust-citation-assistant.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-source-trust-citation-assistant.js");
  const doc = read("docs", "NEXUS_N100_18_SOURCE_TRUST_CITATION_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-source-trust-citation-assistant.js"), "N100-18 source trust module must exist.");
  assert(exists("docs", "NEXUS_N100_18_SOURCE_TRUST_CITATION_ASSISTANT.md"), "N100-18 documentation must exist.");
  assert(exists("scripts", "nexus-n100-18-source-trust-citation-assistant-qa.js"), "N100-18 QA must exist.");

  [
    "SUPPORTED_SOURCE_TRUST_ARTIFACTS",
    "BLOCKED_SOURCE_TRUST_ACTIONS",
    "createN100SourceTrustCitationArtifact",
    "noLiveFetchAuthorized",
    "citationsRequiredForClaims",
    "noTruthCertificationAuthorized"
  ].forEach(term => assert(source.includes(term), `N100-18 source must include ${term}.`));

  [
    "review-only provenance, freshness, citation, and confidence notes",
    "without fetching live data, mutating sources, publishing claims",
    "not loaded by `public/app.js`, `public/index.html`, or `server.js`"
  ].forEach(term => assert(doc.includes(term), `N100-18 documentation must include ${term}.`));

  [
    "nexus-n100-source-trust-citation-assistant",
    "createN100SourceTrustCitationArtifact",
    "SUPPORTED_SOURCE_TRUST_ARTIFACTS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-18 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-18 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-18 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "httpRequest(",
    "updateSource(",
    "publishClaim(",
    "writeFileSync",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-18 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-18-source-trust-citation-assistant"],
    "node scripts/nexus-n100-18-source-trust-citation-assistant-qa.js",
    "N100-18 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-18-source-trust-citation-assistant-qa.js"), "N100-18 QA must be wired into local-safe suites.");
}

function assertArtifact(prompt, expectedType) {
  const artifact = sourceTrust.createN100SourceTrustCitationArtifact({
    prompt,
    topic: prompt,
    nowIso: "2026-06-28T23:30:00.000Z"
  });
  assert.equal(sourceTrust.isSafeN100SourceTrustCitationArtifact(artifact), true, `${prompt} must be safe.`);
  assert.equal(artifact.artifactType, expectedType, `${prompt} artifact type mismatch.`);
  assert.equal(artifact.canExecute, false, `${prompt} must not execute.`);
  assert.equal(artifact.executionAuthority, "none", `${prompt} must have no execution authority.`);
  assert.equal(artifact.safetyPosture.noLiveFetchAuthorized, true, `${prompt} must not authorize live fetch.`);
  assert.equal(artifact.safetyPosture.citationsRequiredForClaims, true, `${prompt} must require citations.`);
  sourceTrust.BLOCKED_SOURCE_TRUST_ACTIONS.forEach(action => {
    assert(artifact.blockedActions.includes(action), `${prompt} must block ${action}.`);
  });
}

function assertSupportedArtifacts() {
  assertArtifact("Prepare source trust summary.", "source_trust_summary");
  assertArtifact("Prepare citation review checklist.", "citation_review_checklist");
  assertArtifact("Prepare freshness notice.", "freshness_notice");
  assertArtifact("Explain confidence level.", "confidence_explanation");
  assertArtifact("Prepare conflicting sources questions.", "conflicting_sources_questions");
  assertArtifact("Prepare unsupported claim boundary.", "unsupported_claim_boundary");
}

function assertBlockedSourceTrustExecution() {
  [
    "Fetch live source now.",
    "Update source data.",
    "Publish this claim.",
    "Certify this is true.",
    "Ignore stale data.",
    "Remove citation.",
    "Write backend record."
  ].forEach(prompt => {
    const artifact = sourceTrust.createN100SourceTrustCitationArtifact({ prompt });
    assert.equal(sourceTrust.isSafeN100SourceTrustCitationArtifact(artifact), true, `${prompt} blocked artifact must be safe.`);
    assert.equal(artifact.artifactType, "blocked_source_trust_execution", `${prompt} must be blocked.`);
    assert.equal(artifact.status, "blocked_no_source_trust_execution", `${prompt} must not execute.`);
  });
}

function runN100SourceTrustCitationAssistantQa() {
  assertStaticSafety();
  assertSupportedArtifacts();
  assertBlockedSourceTrustExecution();

  console.log(JSON.stringify({
    phase: "N100-18",
    supportedSourceTrustArtifacts: sourceTrust.SUPPORTED_SOURCE_TRUST_ARTIFACTS,
    blockedSourceTrustActions: sourceTrust.BLOCKED_SOURCE_TRUST_ACTIONS,
    standardUserRuntimeActivated: false,
    noLiveFetchAuthorized: true,
    citationsRequiredForClaims: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-18-source-trust-citation-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100SourceTrustCitationAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100SourceTrustCitationAssistantQa
});
