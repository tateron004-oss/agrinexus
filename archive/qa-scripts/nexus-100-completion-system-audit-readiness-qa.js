const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  audit: path.join(root, "docs", "NEXUS_100_COMPLETION_SYSTEM_AUDIT_AND_RUNTIME_READINESS.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  phase100Doc: path.join(root, "docs", "NEXUS_PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT_PHASE_100.md"),
  phase100Contract: path.join(root, "public", "nexus-production-readiness-go-live-readiness-contract.js"),
  answerContract: path.join(root, "public", "nexus-source-backed-answer-contract.js"),
  actionPlanner: path.join(root, "public", "nexus-platform-action-planner.js"),
  realDataRegistry: path.join(root, "public", "nexus-real-data-source-registry.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-100-completion-system-audit-readiness-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const audit = read(paths.audit);
const auditLower = audit.toLowerCase();
const roadmap = read(paths.roadmap);
const phase100Doc = read(paths.phase100Doc);
const phase100Contract = require(paths.phase100Contract);
const answerContract = require(paths.answerContract);
const actionPlanner = require(paths.actionPlanner);
const realDataRegistry = require(paths.realDataRegistry);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const phaseRows = roadmap.match(/^\| Phase \d+ \|/gm) || [];
assert(phaseRows.length === 100, `roadmap must still include exactly 100 phase rows; found ${phaseRows.length}.`);

[
  "Final pushed HEAD: `ff6effbb52e360fdda867b1b2c149bb3bc022361`",
  "Nexus 100 roadmap completed",
  "active Standard User runtime behavior preserved",
  "high-risk execution kept disabled by default",
  "Source-Backed Agriculture Support Response Cards",
  "source-backed agriculture support response cards",
  "Citation, freshness, and confidence labels required",
  "What Should Not Be Activated Yet",
  "Production Readiness Limitations",
  "Standard User Safety Posture",
  "No-Execution Guarantees",
  "Provider Connector Readiness",
  "Source-Backed Answer Readiness",
  "Audit And Approval Readiness",
  "Multilingual And Local Language Readiness",
  "Africa Deployment Readiness",
  "Offline And Low-Bandwidth Readiness",
  "Security, Compliance, And Deployment Readiness"
].forEach(term => {
  assert(audit.includes(term), `audit report must include: ${term}`);
});

[
  "no provider execution",
  "no payment",
  "no calls or messages",
  "no location sharing",
  "no medical, pharmacy, telehealth, or emergency execution",
  "public-source-backed first"
].forEach(term => {
  assert(auditLower.includes(term), `audit report must include activation boundary: ${term}`);
});

[
  "Calls or messages through communications providers",
  "Provider contact",
  "Appointment scheduling",
  "Telehealth live room creation",
  "Pharmacy refill or prescription workflows",
  "Transportation dispatch or booking",
  "Location sharing",
  "Payments",
  "Marketplace buy/sell or order execution",
  "Medical record/FHIR access",
  "Emergency dispatch"
].forEach(term => {
  assert(audit.includes(term), `audit report must explicitly list deferred activation: ${term}`);
});

[
  "No live connector activation by default.",
  "No provider execution by default.",
  "No silent calls, messages, WhatsApp, Telegram, SMS, email, or native phone execution.",
  "No payments or marketplace buy/sell transactions.",
  "No pharmacy refill or prescription execution.",
  "No medical diagnosis or medical record/FHIR access.",
  "No emergency dispatch.",
  "No transportation dispatch or booking execution."
].forEach(term => {
  assert(audit.includes(term), `audit report must preserve no-execution guarantee: ${term}`);
});

[
  "Phases 1-18",
  "Phases 19-30",
  "Phases 31-45",
  "Phases 46-60",
  "Phases 61-75",
  "Phases 76-90",
  "Phases 91-100"
].forEach(term => {
  assert(audit.includes(term), `audit report must summarize phase group: ${term}`);
});

assert(phase100Doc.includes("Phase: 100"), "Phase 100 readiness document must identify Phase 100.");
assert(phase100Doc.includes("inert readiness contract"), "Phase 100 must remain an inert readiness contract.");
assert(phase100Contract.PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT.executionAllowed === false, "Phase 100 contract must keep execution disabled.");
assert(phase100Contract.PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT.liveConnectorEnabled === false, "Phase 100 contract must keep live connectors disabled.");
assert(phase100Contract.PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT.providerExecutionEnabled === false, "Phase 100 contract must keep provider execution disabled.");
assert(phase100Contract.PRODUCTION_READINESS_GO_LIVE_READINESS_CONTRACT.regulatedActionEnabled === false, "Phase 100 contract must keep regulated actions disabled.");

Object.entries(answerContract.DANGEROUS_DEFAULTS).forEach(([key, value]) => {
  assert(value === false, `source-backed answer dangerous default ${key} must remain false.`);
});

actionPlanner.PLATFORM_ACTION_PLANS.forEach(plan => {
  assert(plan.executionAllowed === false, `${plan.intent} must remain non-executing.`);
  if (["high", "restricted", "sensitive"].includes(plan.riskTier)) {
    assert(plan.approvalNeeded === true, `${plan.intent} must require approval.`);
    assert(plan.auditNeeded === true, `${plan.intent} must require audit.`);
  }
});

realDataRegistry.getRealTimeConnectorRegistry().forEach(connector => {
  assert(connector.executionCurrentlyEnabled === false, `${connector.id} must keep execution disabled.`);
  assert(connector.userApprovalRequired === true, `${connector.id} must require user approval.`);
});

realDataRegistry.getRealDataSourceRegistry().forEach(source => {
  assert(source.liveActionEnabled === false, `${source.id} must keep live action disabled.`);
});

assert(packageData.scripts["qa:nexus-100-completion-system-audit-readiness"] === "node scripts/nexus-100-completion-system-audit-readiness-qa.js", "package.json must expose completion audit QA alias.");
assert(qaSuite.includes("scripts/nexus-100-completion-system-audit-readiness-qa.js"), "qa-suite.js must include completion audit QA.");

console.log("[nexus-100-completion-system-audit-readiness-qa] passed");
