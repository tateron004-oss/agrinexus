const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C16_SOURCE_BACKED_AGRICULTURE_VISIBLE_SURFACE_COPY_LAYOUT_REVIEW_PLAN.md"),
  c15Doc: path.join(root, "docs", "NEXUS_SPRINT_C15_SOURCE_BACKED_AGRICULTURE_VISIBLE_SURFACE_READINESS_CONTRACT.md"),
  c15Module: path.join(root, "public", "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const blockedRuntimeFragments = [
  "nexus-sprint-c16-source-backed-agriculture-visible-surface-copy-layout-review-plan",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

function fail(message) {
  console.error(`[nexus-sprint-c16-source-backed-agriculture-visible-surface-copy-layout-review-plan-qa] ${message}`);
  process.exit(1);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function includesAll(source, fragments, label) {
  fragments.forEach(fragment => {
    assert(source.toLowerCase().includes(fragment.toLowerCase()), `${label} must include: ${fragment}`);
  });
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const doc = read(files.doc);
const c15Doc = read(files.c15Doc);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c15 = require(files.c15Module);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Future Surface Copy Structure",
  "Future Layout Guidance",
  "Accessibility Requirements",
  "Review-Only Control Language",
  "Eligible Copy Review Prompts",
  "Unsupported Copy Review Prompt",
  "Excluded And High-Risk Copy Review Prompts",
  "Standard User Boundary",
  "Browser Validation Preparation",
  "Sprint C16 QA Expectations",
  "Sprint C17 Recommendation",
  "inert documentation and QA only",
  "does not render DOM",
  "does not load C15 in `public/index.html`",
  "does not import C15 in `public/app.js`",
  "does not add CSS",
  "does not change backend behavior"
], "Sprint C16 copy/layout plan");

includesAll(doc, [
  "`Agriculture Source Review`",
  "`Evidence & Verification`",
  "Source: {sourceName}",
  "Type: {sourceType}",
  "Source contract: {contractId}",
  "Verification: {verificationStatus}",
  "Freshness: {freshnessLabel}",
  "Confidence: {confidenceLabel}",
  "{localApplicabilityWarning}",
  "`No action has been taken.`"
], "future surface copy structure");

includesAll(doc, [
  "one concise source-backed review card",
  "no nested cards",
  "evidence and verification fields grouped together",
  "local applicability warning visible",
  "no hidden executable metadata",
  "no auto-opening route or modal"
], "future layout guidance");

includesAll(doc, [
  "readable text contrast",
  "source and verification fields visible as text",
  "no text overlap at mobile widths",
  "disabled review-only controls",
  "screen-reader text must not claim execution",
  "keyboard focus must not land on inert fake controls"
], "accessibility requirements");

includesAll(doc, [
  "`Review source details`",
  "`Not now`",
  "`Close review`",
  "`Learn what this source means`"
], "allowed review-only control language");

[
  "`Apply now`",
  "`Contact provider`",
  "`Buy`",
  "`Pay`",
  "`Share location`",
  "`Open camera`",
  "`Diagnose`",
  "`Schedule`",
  "`Dispatch`",
  "`Send message`",
  "`Call now`",
  "`Execute`"
].forEach(fragment => {
  assert(doc.includes(fragment), `forbidden control language must document ${fragment}.`);
});

includesAll(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?",
  "How do I prepare for drought?",
  "Call an extension worker",
  "Message the seller",
  "Buy seeds",
  "Pay for fertilizer",
  "Use my location to find farms near me",
  "Open my camera for crop diagnosis",
  "Schedule an appointment",
  "Emergency pesticide poisoning",
  "Tell me the pesticide dose to spray",
  "Sell my crop"
], "prompt matrix");

includesAll(doc, [
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "Standard User startup",
  "controlled renderer runtime",
  "planner",
  "policy engine",
  "provider registry",
  "native bridge",
  "confirmation paths",
  "dynamic imports",
  "DOM creation",
  "event handlers",
  "permission prompts",
  "network calls",
  "storage reads/writes",
  "backend writes",
  "provider handoff",
  "pending actions",
  "execution behavior"
], "Standard User boundary");

assert(c15Doc.includes("Sprint C16 should add a fixture-only source-backed agriculture visible-surface copy and layout review plan"), "C15 doc must recommend C16 copy/layout review plan.");
assert(c15.SURFACE_CONTRACT_VERSION === "nexus.sprintC15.sourceBackedAgricultureVisibleSurfaceReadinessContract.v1", "C15 surface readiness contract must remain available.");
assert(c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel("Help me find agriculture training", { enableSourceBackedAgricultureRuntimeMapping: true }).surfaceReady === true, "C15 eligible prompt fixture must remain available.");
assert(c15.buildSourceBackedAgricultureVisibleSurfaceReadinessModel("How do I prepare for drought?", { enableSourceBackedAgricultureRuntimeMapping: true }).surfaceReady === false, "C15 drought prompt must remain unsupported until source family exists.");

blockedRuntimeFragments.forEach(fragment => {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
});

const alias = "qa:nexus-sprint-c16-source-backed-agriculture-visible-surface-copy-layout-review-plan";
const command = "node scripts/nexus-sprint-c16-source-backed-agriculture-visible-surface-copy-layout-review-plan-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c16-source-backed-agriculture-visible-surface-copy-layout-review-plan-qa.js"), "qa-suite must include Sprint C16 QA.");

console.log("[nexus-sprint-c16-source-backed-agriculture-visible-surface-copy-layout-review-plan-qa] passed");
