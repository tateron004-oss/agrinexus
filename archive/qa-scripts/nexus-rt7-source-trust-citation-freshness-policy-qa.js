const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { normalizeSourceResult } = require("../public/nexus-live-source-result-contract.js");
const policy = require("../public/nexus-live-source-trust-freshness-policy.js");
const orchestrator = require("../server/nexus-live-source-orchestrator.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function runRt7SourceTrustCitationFreshnessPolicyQa() {
  const moduleSource = read("public", "nexus-live-source-trust-freshness-policy.js");
  const orchestratorSource = read("server", "nexus-live-source-orchestrator.js");
  const doc = read("docs", "NEXUS_RT7_SOURCE_TRUST_CITATION_FRESHNESS_POLICY.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  const freshResult = normalizeSourceResult({
    requestType: "weather",
    providerName: "weather",
    providerMode: "mock",
    sourceName: "Mock Weather",
    sourceCategory: "weather",
    sourceUrl: "provider:mock-weather",
    query: "weather Stockton",
    resultSummary: "Fresh weather mock.",
    rawResultAvailable: false,
    retrievedAt: "2026-06-28T12:00:00.000Z",
    lastUpdated: "2026-06-28T12:00:00.000Z",
    freshnessStatus: "fresh",
    confidenceLevel: "medium",
    limitationNotes: "Mock result.",
    evidenceStatus: "source-backed",
    sourceStatus: "source-result-available"
  });
  const fresh = policy.assessLiveSourceTrust({
    domain: "weather",
    sourceResult: freshResult,
    citations: [{ sourceName: "Mock Weather", sourceUrl: "provider:mock-weather" }]
  }, new Date("2026-06-28T12:30:00.000Z"));
  assert.equal(policy.isSafeLiveSourceTrustAssessment(fresh), true, "fresh assessment must be safe.");
  assert.equal(fresh.staleResultWarning, false, "fresh weather result must not be stale.");
  assert.equal(fresh.missingCitationWarning, false, "cited result must not warn for missing citation.");
  assert.equal(fresh.unsupportedCertaintyBlocked, false, "fresh cited medium confidence result may avoid certainty warning.");

  const stale = policy.assessLiveSourceTrust({
    domain: "weather",
    sourceResult: freshResult,
    citations: [{ sourceName: "Mock Weather", sourceUrl: "provider:mock-weather" }],
    confidence: "medium"
  }, new Date("2026-06-28T15:00:00.000Z"));
  assert.equal(stale.staleResultWarning, true, "old weather result must be stale.");
  assert.equal(stale.unsupportedCertaintyBlocked, true, "stale result must block certainty.");

  const missingCitation = policy.assessLiveSourceTrust({
    domain: "news-security",
    sourceResult: normalizeSourceResult(Object.assign({}, freshResult, {
      requestType: "news-security",
      sourceCategory: "conflict-security",
      evidenceStatus: "source-unavailable",
      confidenceLevel: "low"
    })),
    citations: []
  }, new Date("2026-06-28T12:30:00.000Z"));
  assert.equal(missingCitation.missingCitationWarning, true, "missing citation must warn.");
  assert.equal(missingCitation.lowConfidenceWarning, true, "low confidence must warn.");
  assert.equal(missingCitation.unsupportedCertaintyBlocked, true, "missing citation/low confidence must block certainty.");

  const orchestration = orchestrator.buildLiveSourceOrchestrationResult("What is the weather in Stockton, CA?", {}, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true"
  });
  assert(orchestration.trustAssessment, "orchestrator must attach trustAssessment.");
  assert.equal(policy.isSafeLiveSourceTrustAssessment(orchestration.trustAssessment), true, "orchestrator trustAssessment must be safe.");
  assert.equal(orchestration.trustAssessment.noExecutionAuthorized, true, "trust policy must not authorize execution.");

  [
    "FRESHNESS_WINDOWS_MINUTES",
    "TRUST_TIERS_BY_EVIDENCE",
    "staleResultWarning",
    "missingCitationWarning",
    "sourceTrustTier",
    "lowConfidenceWarning",
    "unsupportedCertaintyBlocked",
    "noExecutionAuthorized"
  ].forEach(term => assert(moduleSource.includes(term), `RT7 policy module must include ${term}.`));
  assert(orchestratorSource.includes("trustPolicy.assessLiveSourceTrust"), "RT7 policy must be applied by orchestrator.");

  [
    "source type classification",
    "retrievedAt required",
    "freshness window per provider/domain",
    "citation required",
    "confidence rules",
    "stale result warning",
    "missing citation warning",
    "source trust tier",
    "provider error handling",
    "safe user-facing summary when confidence is low"
  ].forEach(term => assert(doc.includes(term), `RT7 doc must include ${term}.`));

  [
    "fetch(",
    "XMLHttpRequest",
    "http.request",
    "https.request",
    "axios",
    "writeFile",
    "appendFile",
    "localStorage",
    "sessionStorage",
    "db.json",
    "window.open",
    "location.href",
    "sendBeacon",
    "navigator.geolocation",
    "mediaDevices",
    "document.",
    "addEventListener"
  ].forEach(term => assert(!moduleSource.includes(term), `RT7 policy must not include side-effect API: ${term}`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-live-source-trust-freshness-policy"), `${label} must not load RT7 policy.`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-rt7-source-trust-citation-freshness-policy"],
    "node scripts/nexus-rt7-source-trust-citation-freshness-policy-qa.js",
    "RT7 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt7-source-trust-citation-freshness-policy-qa.js"), "RT7 QA must be in safe suites.");

  console.log("[nexus-rt7-source-trust-citation-freshness-policy-qa] passed");
}

if (require.main === module) {
  try {
    runRt7SourceTrustCitationFreshnessPolicyQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt7SourceTrustCitationFreshnessPolicyQa
});
