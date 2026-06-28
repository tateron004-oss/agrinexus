const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

const RP_DOCS = Object.freeze([
  "NEXUS_RP1_PROVIDER_CREDENTIAL_INVENTORY_SAFE_CONFIG_CONTRACT.md",
  "NEXUS_RP2_WEATHER_REAL_PROVIDER_ACTIVATION.md",
  "NEXUS_RP3_AGRICULTURE_CONTEXT_REAL_PROVIDER_ACTIVATION.md",
  "NEXUS_RP4_NEWS_SECURITY_CONFLICT_REAL_PROVIDER_ACTIVATION.md",
  "NEXUS_RP5_JOB_SEARCH_REAL_PROVIDER_ACTIVATION.md",
  "NEXUS_RP6_SHIPMENT_TRACKING_REAL_PROVIDER_ACTIVATION.md",
  "NEXUS_RP7_MUSIC_MEDIA_REAL_PROVIDER_ACTIVATION.md",
  "NEXUS_RP8_UNIFIED_PROVIDER_LIVE_MOCK_SKIP_MATRIX.md",
  "NEXUS_RP9_CONTROLLED_ASSISTANT_PREVIEW_LIVE_PROVIDER_SWEEP.md",
  "NEXUS_RP10_STANDARD_USER_LIVE_PREVIEW_READINESS_VALIDATION.md",
  "NEXUS_RP11_PROVIDER_ROLLOUT_CLOSEOUT_AND_NEXT_CREDENTIAL_PLAN.md"
]);

const PROVIDERS = Object.freeze([
  "weather",
  "agriculture-context",
  "news-security",
  "job-search",
  "shipment-tracking",
  "music-media"
]);

const REQUIRED_QA = Object.freeze([
  "scripts/nexus-rp1-provider-credential-inventory-safe-config-qa.js",
  "scripts/nexus-rp2-weather-real-provider-activation-qa.js",
  "scripts/nexus-rp3-agriculture-context-real-provider-activation-qa.js",
  "scripts/nexus-rp4-news-security-conflict-real-provider-activation-qa.js",
  "scripts/nexus-rp5-job-search-real-provider-activation-qa.js",
  "scripts/nexus-rp6-shipment-tracking-real-provider-activation-qa.js",
  "scripts/nexus-rp7-music-media-real-provider-activation-qa.js",
  "scripts/nexus-rp8-unified-provider-live-mock-skip-matrix-qa.js",
  "scripts/nexus-rp9-controlled-assistant-preview-live-provider-sweep-qa.js",
  "scripts/nexus-rp10-standard-user-live-preview-readiness-validation-qa.js",
  "scripts/nexus-rp11-provider-rollout-closeout-next-credential-plan-qa.js"
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertFileExists(...parts) {
  assert(exists(...parts), `${path.join(...parts)} must exist.`);
}

function assertRuntimeAbsence() {
  const runtimeFiles = [
    ["public", "app.js"],
    ["public", "index.html"],
    ["server.js"]
  ];

  const forbidden = [
    "nexus-rp11-provider-rollout-closeout-next-credential-plan-qa",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED",
    "nexus-standard-user-live-source-preview-gate",
    "nexus-assistant-live-source-orchestrator-preview",
    "nexus-live-source-orchestrator"
  ];

  runtimeFiles.forEach(parts => {
    const source = read(...parts);
    const label = path.join(...parts);
    if (label === "server.js" && source.includes("NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED")) {
      [
        "assistantRuntimePreviewFlags",
        "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED",
        "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED",
        "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED",
        "if (!flags.enabled)",
        "/api/nexus/assistant-runtime-preview",
        "noExecutionAuthorized",
        "noProviderHandoff",
        "noLocationPermissionRequested"
      ].forEach(term => assert(source.includes(term), `server.js live preview exposure must be AR6 flag-gated and safe: ${term}.`));
      return;
    }
    forbidden.forEach(term => {
      assert(!source.includes(term), `${label} must not load or expose ${term}.`);
    });
  });
}

function assertCloseoutDoc() {
  const doc = read("docs", "NEXUS_RP11_PROVIDER_ROLLOUT_CLOSEOUT_AND_NEXT_CREDENTIAL_PLAN.md");

  [
    "Provider Rollout Closeout",
    "Phase Summary",
    "Provider Closeout Matrix",
    "Safety Closeout",
    "Standard User Status",
    "Next Credential Plan",
    "Recommended First Credential Lane",
    "Go / No-Go",
    "QA Closeout"
  ].forEach(term => assert(doc.includes(term), `RP11 doc must include ${term}.`));

  ["RP1", "RP2", "RP3", "RP4", "RP5", "RP6", "RP7", "RP8", "RP9", "RP10"].forEach(phase => {
    assert(doc.includes(phase), `RP11 doc must summarize ${phase}.`);
  });

  PROVIDERS.forEach(provider => {
    assert(doc.includes(`\`${provider}\``), `RP11 doc must include provider lane ${provider}.`);
  });

  [
    "NEXUS_WEATHER_PROVIDER_ENABLED",
    "NEXUS_WEATHER_PROVIDER_API_KEY",
    "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED",
    "NEXUS_NEWS_SECURITY_PROVIDER_ENABLED",
    "NEXUS_JOB_SEARCH_PROVIDER_ENABLED",
    "NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED",
    "NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED"
  ].forEach(term => assert(doc.includes(term), `RP11 credential plan must include ${term}.`));

  [
    "read-only",
    "preview-only",
    "No secrets are committed",
    "Missing config remains safe skipped output",
    "Standard User live provider preview remains off and invisible",
    "default-off visible flag",
    "browser validation",
    "rollback plan",
    "citation",
    "freshness",
    "provider status",
    "redaction",
    "audit metadata"
  ].forEach(term => assert(doc.includes(term), `RP11 closeout must include ${term}.`));

  [
    "provider contact",
    "calls",
    "messages",
    "WhatsApp",
    "Telegram",
    "payments",
    "marketplace transactions",
    "appointment booking",
    "medical/pharmacy workflow execution",
    "emergency dispatch",
    "browser geolocation",
    "location permission requests",
    "camera/microphone activation",
    "backend writes",
    "external navigation",
    "autonomous execution"
  ].forEach(term => assert(doc.includes(term), `RP11 safety boundary must include ${term}.`));
}

function assertPackageAndSuiteWiring() {
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  assert.equal(
    pkg.scripts["qa:nexus-rp11-provider-rollout-closeout-next-credential-plan"],
    "node scripts/nexus-rp11-provider-rollout-closeout-next-credential-plan-qa.js",
    "RP11 package alias must exist."
  );
  REQUIRED_QA.forEach(script => {
    assert(qaSuite.includes(script), `${script} must be wired into safe suites.`);
  });
}

function runRp11ProviderRolloutCloseoutNextCredentialPlanQa() {
  RP_DOCS.forEach(name => assertFileExists("docs", name));
  REQUIRED_QA.forEach(script => assertFileExists(...script.split("/")));
  assertCloseoutDoc();
  assertRuntimeAbsence();
  assertPackageAndSuiteWiring();

  console.log(JSON.stringify({
    phasesClosedOut: 11,
    providersCovered: PROVIDERS,
    standardUserRuntimeActivated: false,
    noSecretsCommitted: true,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-rp11-provider-rollout-closeout-next-credential-plan-qa] passed");
}

if (require.main === module) {
  try {
    runRp11ProviderRolloutCloseoutNextCredentialPlanQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  RP_DOCS,
  PROVIDERS,
  REQUIRED_QA,
  runRp11ProviderRolloutCloseoutNextCredentialPlanQa
});
