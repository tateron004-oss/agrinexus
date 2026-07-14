"use strict";

const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { TRUST_CHAIN_RAILS } = require("./lib/nexus-genesis-trust-chain-shared-qa");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const guide = fs.readFileSync(path.join(root, "docs", "NEXUS_E2E_TESTING_AND_TRAINING_GUIDE.md"), "utf8");
const railMap = fs.readFileSync(path.join(root, "docs", "NEXUS_GENESIS_FULL_RAIL_COMPLETION_MAP.md"), "utf8");
const reportPath = path.join(root, "docs", "NEXUS_GENESIS_STANDARD_USER_FIELD_TEST_REPORT.md");
const report = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : "";

function includesAll(source, values, label) {
  const normalizedSource = String(source).toLowerCase();
  values.forEach(value => assert(
    normalizedSource.includes(String(value).toLowerCase()),
    `${label} must include ${value}`
  ));
}

function matchesAll(source, patterns, label) {
  patterns.forEach(pattern => assert(
    pattern.test(source),
    `${label} must match ${pattern}`
  ));
}

function forbidden(source, patterns, label) {
  patterns.forEach(pattern => assert(
    !pattern.test(source),
    `${label} must not match unsafe pattern ${pattern}`
  ));
}

assert.strictEqual(TRUST_CHAIN_RAILS.length, 25, "field test expects all 25 Genesis rails");
assert.deepStrictEqual(
  TRUST_CHAIN_RAILS.map(rail => rail.railNumber),
  Array.from({ length: 25 }, (_, index) => index + 1),
  "Genesis rails must be registered consecutively from 1 to 25"
);

TRUST_CHAIN_RAILS.forEach(rail => {
  assert(app.includes(rail.suiteId) || railMap.includes(rail.suiteId), `rail ${rail.railNumber} ${rail.suiteId} must be covered`);
});

includesAll(app, [
  "NEXUS_GENESIS_FULL_RAIL_CONTRACT",
  "window.NEXUS_GENESIS_FULL_RAIL_CONTRACT",
  "runNexusStandardUserHomeLocalCommand",
  "handleVoiceCommand",
  "openWorkflowByVoice",
  "setVoiceResponse",
  "data-nexus-mode-shortcut",
  "data-nexus-command",
  "nexus-mode-launcher",
  "nexus-workflow-window",
  "nexus-workflow-landing",
  "data-nexus-mode-field",
  "data-nexus-mode-summary",
  "data-nexus-knowledge-action",
  "data-nexus-global-offline-action",
  "data-nexus-provider-coordination-action",
  "data-real-provider-test",
  "nexusProviderActivationStatusLabel",
  "data-nexus-approved-memory-action",
  "deleteNexusMemoryWithConfirmation",
  "nexusPersistentTaskMemoryLoad",
  "nexusPersistentTaskMemorySave"
], "Standard User runtime");

includesAll(app, [
  "Agriculture Help",
  "Health & Chronic Care",
  "Telehealth Intake",
  "Mobile Clinic",
  "Pharmacy Support",
  "Learning & Literacy",
  "Jobs & Workforce",
  "AgriTrade Marketplace",
  "Maps / Field Visit",
  "Music / Media",
  "Reminders",
  "Offline Queue"
], "Standard User mode launcher");

matchesAll(app, [
  /\b(diabetes|blood pressure|hypertension|obesity|rpm|rtm|chronic)\b/i,
  /\b(crop|agriculture|farm|irrigation|soil|pest|harvest)\b/i,
  /\b(marketplace|agritrade|buyer|seller|payment|checkout|settlement)\b/i,
  /\b(logistics|shipment|delivery|route|tracking)\b/i,
  /\b(learning|literacy|course|lesson|training)\b/i,
  /\b(workforce|jobs|interview|mentor|skills)\b/i,
  /\b(drone|field scan|flight plan|intervention)\b/i,
  /\b(sms|whatsapp|email|phone|telegram|message|call)\b/i,
  /\b(provider|telehealth|pharmacy|mobile clinic|clinic)\b/i,
  /\b(receipt|audit|outcome|evidence)\b/i,
  /\b(consent|confirmation|permission|approval)\b/i,
  /\b(offline|low bandwidth|recovery|fallback)\b/i
], "major platform modes");

matchesAll(app, [
  /\bEnglish\b/,
  /\bSpanish\b|\bespañol\b/i,
  /\bFrench\b|\bfrançais\b/i,
  /\bSwahili\b|\bKiswahili\b/i,
  /change language to Spanish/i,
  /change language to French/i,
  /change language to Kiswahili|Switch to Swahili/i
], "multilingual runtime");

matchesAll(`${app}\n${guide}\n${report}`, [
  /No diagnosis/i,
  /No prescription/i,
  /No emergency dispatch/i,
  /No payment/i,
  /No provider handoff/i,
  /No drone launch|No drone dispatch|no flight control/i,
  /No browser location automatically|No browser geolocation|no browser geolocation|No browser geolocation, location permission/i,
  /missing.*env|missing.*config|provider.*required|credentials/i,
  /executionAuthority.*false|data-execution-authority="false"|noExecutionAuthorized/i
], "safety and provider-blocked states");

includesAll(`${guide}\n${report}`, [
  "Companion greeting",
  "typed",
  "voice",
  "memory",
  "agriculture",
  "chronic",
  "marketplace",
  "logistics",
  "learning",
  "workforce",
  "drone",
  "communications",
  "provider",
  "consent",
  "receipts",
  "privacy",
  "safety",
  "accessibility",
  "offline",
  "recovery"
].filter(Boolean), "E2E guide and field-test report");

includesAll(report, [
  "Prompt Used",
  "Expected Result",
  "Actual Result",
  "Provider State",
  "Receipt Result",
  "Memory Result",
  "Console Result",
  "Physical Voice Status",
  "English",
  "Spanish",
  "French",
  "Swahili"
], "field-test report");

forbidden(`${guide}\n${report}`, [
  /live action succeeded/i,
  /actual audible output was heard/i,
  /provider returned success/i,
  /payment completed/i,
  /appointment booked/i,
  /message sent/i,
  /drone launched/i,
  /emergency dispatched/i
], "field-test safety language");

console.log(JSON.stringify({
  ok: true,
  suite: "nexus-genesis-standard-user-field-test",
  rails: TRUST_CHAIN_RAILS.length,
  modes: [
    "companion",
    "typed",
    "voice-fallback",
    "multilingual",
    "mission",
    "memory",
    "agriculture",
    "chronic-health",
    "marketplace",
    "logistics",
    "learning",
    "workforce",
    "drone",
    "communications",
    "provider-activation",
    "consent",
    "receipts",
    "privacy",
    "safety",
    "accessibility",
    "offline",
    "recovery",
    "mobile",
    "adversarial"
  ]
}, null, 2));
