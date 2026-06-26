const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

const suites = {
  provider: [
    "scripts/call-provider-registry-qa.js",
    "scripts/call-provider-drift-qa.js"
  ],
  call: [
    "scripts/call-provider-registry-qa.js",
    "scripts/call-provider-drift-qa.js",
    "scripts/call-intent-smoke.js",
    "scripts/pending-call-ui-qa.js",
    "scripts/confirmed-call-handoff-qa.js",
    "scripts/native-call-bridge-dispatch-qa.js",
    "scripts/android-call-launch-qa.js",
    "scripts/ios-call-launch-qa.js",
    "scripts/companion-confirmation-gate-smoke.js"
  ],
  native: [
    "scripts/native-mobile-runtime-qa.js",
    "scripts/native-voice-infrastructure-qa.js",
    "scripts/mobile-native-qa.js",
    "scripts/android-call-launch-qa.js",
    "scripts/ios-call-launch-qa.js",
    "scripts/native-call-bridge-dispatch-qa.js",
    "scripts/call-provider-drift-qa.js"
  ],
  voice: [
    "scripts/voice-browser-policy-regression.js",
    "scripts/realtime-voice-provider-qa.js",
    "scripts/voice-phase1-alignment-qa.js",
    "scripts/voice-phase2-language-qa.js",
    "scripts/voice-phase3-tts-qa.js",
    "scripts/voice-phase4-browser-runtime-qa.js",
    "scripts/phone-greeting-qa.js"
  ],
  core: [
    "scripts/app-behavior-audit.js",
    "scripts/utility-assistant-smoke.js",
    "scripts/conversation-core-architecture-qa.js",
    "scripts/companion-understanding-smoke.js",
    "scripts/companion-route-mismatch-smoke.js",
    "scripts/companion-confirmation-gate-smoke.js",
    "scripts/companion-response-quality-smoke.js"
  ],
  app: [
    "scripts/app-behavior-audit.js",
    "scripts/workflow-button-audit.js",
    "scripts/cross-platform-functions-qa.js",
    "scripts/auth-login-gate-qa.js"
  ],
  "nexus-workforce": [
    "scripts/nexus-workforce-branding-qa.js",
    "scripts/nexus-workforce-standard-user-qa.js",
    "scripts/nexus-workforce-alias-qa.js",
    "scripts/nexus-workforce-metadata-qa.js",
    "scripts/nexus-jarvis-style-standard-user-experience-qa.js",
    "scripts/nexus-autonomous-execution-architecture-qa.js",
    "scripts/nexus-autonomous-action-schema-qa.js",
    "scripts/nexus-planner-action-decision-mapper-qa.js",
    "scripts/nexus-action-decision-observation-qa.js",
    "scripts/nexus-action-decision-staging-ui-contract-qa.js",
    "scripts/nexus-staged-action-state-qa.js",
    "scripts/nexus-staged-action-ui-observation-qa.js",
    "scripts/nexus-staged-action-inert-renderer-qa.js",
    "scripts/nexus-staged-action-inert-renderer-observation-qa.js",
    "scripts/nexus-staged-action-renderer-readiness-audit-qa.js",
    "scripts/nexus-low-risk-inert-renderer-prototype-plan-qa.js",
    "scripts/nexus-low-risk-inert-renderer-flag-guard-qa.js",
    "scripts/nexus-low-risk-inert-renderer-eligibility-guard-qa.js",
    "scripts/nexus-low-risk-inert-renderer-flag-off-regression-qa.js",
    "scripts/nexus-low-risk-inert-renderer-prototype-implementation-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-wiring-plan-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-wiring-static-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-wiring-readiness-review-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-flag-off-harness-qa.js",
    "scripts/nexus-low-risk-renderer-flag-off-harness-browser-regression-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-plan-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-static-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-readiness-review-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-test-harness-implementation-qa.js",
    "scripts/nexus-low-risk-renderer-controlled-runtime-flag-on-browser-regression-validation-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-visible-ui-design-contract-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-inert-dom-prototype-test-fixture-only-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-inert-dom-browser-regression-contract-enforcement-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-test-only-visual-snapshot-fixture-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-standard-user-readiness-review-before-visible-activation-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-default-off-visible-feature-flag-design-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-hidden-standard-user-mount-point-contract-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-hidden-mount-point-test-only-fixture-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-hidden-mount-point-browser-regression-standard-user-absence-enforcement-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-mount-point-readiness-review-before-runtime-wiring-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-actual-hidden-mount-point-default-empty-implementation-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-default-off-wiring-contract-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-static-harness-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-non-runtime-shell-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-runtime-adapter-contract-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-non-runtime-adapter-fixture-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-adapter-to-shell-fixture-integration-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-runtime-adjacent-adapter-stub-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-default-off-runtime-flag-plumbing-audit-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-hidden-mount-preflight-guard-contract-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-final-standard-user-browser-validation-default-off-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-phase-13-closeout-readiness-qa.js",
    "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14a-qa.js",
    "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14b-load-boundary-qa.js",
    "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14c-test-harness-qa.js",
    "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14d-runtime-loader-stub-qa.js",
    "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14e-import-boundary-qa.js",
    "scripts/nexus-controlled-low-risk-text-only-renderer-phase-14f-loader-test-harness-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-phase-14g-eligibility-adapter-stub-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js",
    "scripts/nexus-controlled-low-risk-renderer-phase-14k-candidate-contract-chain-harness-qa.js",
    "scripts/nexus-voice-demo-shell-phase-16a-qa.js",
    "scripts/nexus-voice-language-switch-phase-16a-hotfix-qa.js",
    "scripts/nexus-cultural-music-demo-shell-qa.js",
    "scripts/nexus-real-data-regulated-action-roadmap-qa.js",
    "scripts/nexus-100-full-platform-roadmap-qa.js",
    "scripts/nexus-source-backed-response-runtime-contract-qa.js",
    "scripts/nexus-public-data-connector-baseline-qa.js",
    "scripts/nexus-agriculture-public-source-contracts-qa.js",
    "scripts/nexus-provider-clinic-public-directory-contracts-qa.js",
    "scripts/nexus-workforce-public-source-contracts-qa.js",
    "scripts/nexus-community-service-public-source-contracts-qa.js",
    "scripts/nexus-source-backed-answer-engine-contract-qa.js",
    "scripts/nexus-citation-freshness-confidence-contract-qa.js",
    "scripts/nexus-data-quality-monitoring-contract-qa.js",
    "scripts/nexus-partner-data-intake-contract-qa.js",
    "scripts/nexus-provider-onboarding-portal-contract-qa.js",
    "scripts/nexus-source-verification-contract-qa.js",
    "scripts/nexus-multilingual-data-labeling-contract-qa.js",
    "scripts/nexus-agriculture-extension-connector-contract-qa.js",
    "scripts/nexus-farmer-advisory-connector-contract-qa.js",
    "scripts/nexus-crop-pest-disease-source-connector-contract-qa.js",
    "scripts/nexus-market-price-source-connector-contract-qa.js",
    "scripts/nexus-agritrade-partner-connector-contract-qa.js",
    "scripts/nexus-clinic-provider-connector-contract-qa.js",
    "scripts/nexus-telehealth-provider-connector-contract-qa.js",
    "scripts/nexus-mobile-clinic-operator-connector-contract-qa.js",
    "scripts/nexus-pharmacy-provider-connector-contract-qa.js",
    "scripts/nexus-transportation-provider-connector-contract-qa.js",
    "scripts/nexus-workforce-training-provider-connector-contract-qa.js",
    "scripts/nexus-certification-provider-connector-contract-qa.js",
    "scripts/nexus-education-content-provider-connector-contract-qa.js",
    "scripts/nexus-community-service-org-connector-contract-qa.js",
    "scripts/nexus-high-risk-provider-boundary-contract-qa.js",
    "scripts/nexus-identity-foundation-contract-qa.js",
    "scripts/nexus-consent-center-contract-qa.js",
    "scripts/nexus-audit-log-runtime-contract-qa.js",
    "scripts/nexus-approval-center-contract-qa.js",
    "scripts/nexus-provider-contact-preparation-contract-qa.js",
    "scripts/nexus-communications-provider-execution-readiness-gate-qa.js",
    "scripts/nexus-communications-prepared-action-preview-contract-qa.js",
    "scripts/nexus-communications-no-execution-regression-contract-qa.js",
    "scripts/nexus-communications-approval-audit-handoff-contract-qa.js",
    "scripts/nexus-communications-provider-availability-fallback-contract-qa.js",
    "scripts/nexus-communications-standard-user-validation-plan-qa.js",
    "scripts/nexus-tool-registry-runtime-qa.js",
    "scripts/nexus-intent-classifier-qa.js",
    "scripts/nexus-policy-engine-qa.js",
    "scripts/nexus-policy-observation-qa.js",
    "scripts/nexus-planner-qa.js",
    "scripts/nexus-plan-observation-qa.js",
    "scripts/nexus-planner-safety-hardening-qa.js",
    "scripts/nexus-session-memory-qa.js",
    "scripts/nexus-session-memory-observation-qa.js",
    "scripts/nexus-session-memory-ui-readiness-qa.js",
    "scripts/nexus-session-memory-reset-consent-qa.js",
    "scripts/nexus-session-memory-standard-user-demo-qa.js",
    "scripts/nexus-standard-user-demo-final-safety-qa.js",
    "scripts/nexus-controlled-action-metadata-schema-qa.js",
    "scripts/nexus-controlled-action-preview-readiness-qa.js",
    "scripts/nexus-controlled-action-preview-ui-qa.js",
    "scripts/nexus-controlled-action-preview-clear-qa.js",
    "scripts/nexus-controlled-action-confirmation-readiness-qa.js",
    "scripts/nexus-controlled-action-confirmation-ui-prototype-qa.js",
    "scripts/nexus-controlled-action-navigation-readiness-qa.js",
    "scripts/nexus-controlled-action-navigation-behavior-qa.js"
  ]
};

suites["all-safe"] = unique([
  ...suites.provider,
  ...suites.call,
  ...suites.native,
  ...suites.voice,
  ...suites.core,
  ...suites.app,
  "scripts/nexus-100-full-platform-roadmap-qa.js",
  "scripts/nexus-source-backed-response-runtime-contract-qa.js",
  "scripts/nexus-public-data-connector-baseline-qa.js",
  "scripts/nexus-agriculture-public-source-contracts-qa.js",
  "scripts/nexus-provider-clinic-public-directory-contracts-qa.js",
  "scripts/nexus-workforce-public-source-contracts-qa.js",
  "scripts/nexus-community-service-public-source-contracts-qa.js",
  "scripts/nexus-source-backed-answer-engine-contract-qa.js",
  "scripts/nexus-citation-freshness-confidence-contract-qa.js",
  "scripts/nexus-data-quality-monitoring-contract-qa.js",
  "scripts/nexus-partner-data-intake-contract-qa.js",
  "scripts/nexus-provider-onboarding-portal-contract-qa.js",
  "scripts/nexus-source-verification-contract-qa.js",
  "scripts/nexus-multilingual-data-labeling-contract-qa.js",
  "scripts/nexus-agriculture-extension-connector-contract-qa.js",
  "scripts/nexus-farmer-advisory-connector-contract-qa.js",
  "scripts/nexus-crop-pest-disease-source-connector-contract-qa.js",
  "scripts/nexus-market-price-source-connector-contract-qa.js",
  "scripts/nexus-agritrade-partner-connector-contract-qa.js",
  "scripts/nexus-clinic-provider-connector-contract-qa.js",
  "scripts/nexus-telehealth-provider-connector-contract-qa.js",
  "scripts/nexus-mobile-clinic-operator-connector-contract-qa.js",
  "scripts/nexus-pharmacy-provider-connector-contract-qa.js",
  "scripts/nexus-transportation-provider-connector-contract-qa.js",
  "scripts/nexus-workforce-training-provider-connector-contract-qa.js",
  "scripts/nexus-certification-provider-connector-contract-qa.js",
  "scripts/nexus-education-content-provider-connector-contract-qa.js",
  "scripts/nexus-community-service-org-connector-contract-qa.js",
  "scripts/nexus-high-risk-provider-boundary-contract-qa.js",
  "scripts/nexus-identity-foundation-contract-qa.js",
  "scripts/nexus-consent-center-contract-qa.js",
  "scripts/nexus-audit-log-runtime-contract-qa.js",
  "scripts/nexus-approval-center-contract-qa.js",
  "scripts/nexus-provider-contact-preparation-contract-qa.js",
  "scripts/nexus-communications-provider-execution-readiness-gate-qa.js",
  "scripts/nexus-communications-prepared-action-preview-contract-qa.js",
  "scripts/nexus-communications-no-execution-regression-contract-qa.js",
  "scripts/nexus-communications-approval-audit-handoff-contract-qa.js",
  "scripts/nexus-communications-provider-availability-fallback-contract-qa.js",
  "scripts/nexus-communications-standard-user-validation-plan-qa.js"
]);

function unique(items) {
  return [...new Set(items)];
}

function formatCommand(script) {
  return `${path.basename(process.execPath)} ${script}`;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

const suiteName = process.argv[2];
const suiteNames = Object.keys(suites).sort();

if (!suiteName || suiteName === "--help" || suiteName === "-h") {
  console.log("Usage: node scripts/qa-suite.js <suite>");
  console.log(`Available suites: ${suiteNames.join(", ")}`);
  process.exit(suiteName ? 0 : 1);
}

const scripts = suites[suiteName];
if (!scripts) {
  fail(`Unknown QA suite "${suiteName}". Available suites: ${suiteNames.join(", ")}`);
}

const missing = scripts.filter(script => !fs.existsSync(path.join(root, script)));
if (missing.length) {
  fail(`QA suite "${suiteName}" references missing script(s): ${missing.join(", ")}`);
}

const passed = [];
console.log(`[qa-suite] Running "${suiteName}" (${scripts.length} command${scripts.length === 1 ? "" : "s"})`);

for (const script of scripts) {
  console.log(`\n[qa-suite] ${formatCommand(script)}`);
  const result = spawnSync(process.execPath, [script], {
    cwd: root,
    env: process.env,
    stdio: "inherit",
    windowsHide: true
  });

  if (result.error) fail(`[qa-suite] ${script} failed to start: ${result.error.message}`);
  if (result.signal) fail(`[qa-suite] ${script} terminated by signal ${result.signal}`);
  if (result.status !== 0) fail(`[qa-suite] ${script} failed with exit code ${result.status}`);
  passed.push(script);
}

console.log(`\n[qa-suite] "${suiteName}" passed.`);
passed.forEach(script => console.log(`- ${formatCommand(script)}`));
