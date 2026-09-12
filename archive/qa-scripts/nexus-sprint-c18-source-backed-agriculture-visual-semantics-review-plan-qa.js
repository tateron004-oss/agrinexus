const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C18_SOURCE_BACKED_AGRICULTURE_VISUAL_SEMANTICS_REVIEW_PLAN.md"),
  c17Doc: path.join(root, "docs", "NEXUS_SPRINT_C17_SOURCE_BACKED_AGRICULTURE_SURFACE_COPY_MODEL.md"),
  c17Module: path.join(root, "public", "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const blockedRuntimeFragments = [
  "nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan",
  "nexus-sprint-c17-source-backed-agriculture-surface-copy-model.js",
  "nexus-sprint-c15-source-backed-agriculture-visible-surface-readiness-contract.js",
  "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js",
  "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"
];

function fail(message) {
  console.error(`[nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan-qa] ${message}`);
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
const c17Doc = read(files.c17Doc);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c17 = require(files.c17Module);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Visual Semantics Goals",
  "Visual Hierarchy Requirements",
  "Color And Badge Semantics",
  "Layout Semantics",
  "Interaction Semantics",
  "Eligible Visual Review Prompts",
  "Unsupported And Excluded Visual Review Prompts",
  "Accessibility Review Expectations",
  "Standard User Boundary",
  "Sprint C18 QA Expectations",
  "Sprint C19 Recommendation",
  "inert documentation and QA only",
  "does not render DOM",
  "does not load C17 in `public/index.html`",
  "does not import C17 in `public/app.js`",
  "does not add CSS",
  "does not change backend behavior"
], "Sprint C18 visual semantics plan");

includesAll(doc, [
  "review, not execution",
  "evidence, not authority",
  "source transparency, not certainty",
  "local verification, not automatic action",
  "calm guidance, not emergency or transaction urgency"
], "visual semantics goals");

includesAll(doc, [
  "`Agriculture Source Review`",
  "`Evidence & Verification`",
  "source name",
  "source type",
  "contract ID",
  "verification",
  "freshness",
  "confidence",
  "`No action has been taken.`"
], "visual hierarchy requirements");

includesAll(doc, [
  "disabled review-only controls must look disabled",
  "no badge may imply provider connection",
  "payment",
  "purchase",
  "diagnosis",
  "prescription",
  "dispatch",
  "completed execution",
  "`Sent`",
  "`Paid`",
  "`Scheduled`",
  "`Connected`",
  "`Dispatched`",
  "`Diagnosed`",
  "`Purchased`"
], "color and badge semantics");

includesAll(doc, [
  "compact",
  "readable on mobile",
  "one card, not nested cards",
  "no hero treatment",
  "no overlapping text",
  "no fake clickable controls"
], "layout semantics");

[
  "`Review source details`",
  "`Not now`",
  "`Close review`",
  "`Learn what this source means`",
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
  assert(doc.includes(fragment), `interaction semantics must document ${fragment}.`);
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
], "visual prompt matrices");

includesAll(doc, [
  "text contrast",
  "readable typography",
  "no viewport-scaled font sizing",
  "no overlapping fields",
  "no clipped source contract ID",
  "not keyboard traps",
  "screen-reader copy does not imply execution",
  "mobile width remains readable"
], "accessibility expectations");

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
  "CSS",
  "event handlers",
  "permission prompts",
  "network calls",
  "storage reads/writes",
  "backend writes",
  "provider handoff",
  "pending actions",
  "execution behavior"
], "Standard User boundary");

assert(c17Doc.includes("Sprint C18 should add a fixture-only visual semantics review plan for the C17 copy model"), "C17 doc must recommend C18 visual semantics review plan.");
assert(c17.COPY_MODEL_VERSION === "nexus.sprintC17.sourceBackedAgricultureSurfaceCopyModel.v1", "C17 copy model must remain available.");
assert(c17.buildSourceBackedAgricultureSurfaceCopyModel("Help me find agriculture training", { enableSourceBackedAgricultureRuntimeMapping: true }).copyReady === true, "C17 eligible prompt fixture must remain available.");
assert(c17.buildSourceBackedAgricultureSurfaceCopyModel("Buy seeds", { enableSourceBackedAgricultureRuntimeMapping: true }).copyReady === false, "C17 excluded prompt fixture must remain blocked.");

blockedRuntimeFragments.forEach(fragment => {
  assert(!index.includes(fragment), `public/index.html must not load runtime fragment: ${fragment}`);
  assert(!app.includes(fragment), `public/app.js must not reference runtime fragment: ${fragment}`);
  assert(!server.includes(fragment), `server.js must not special-case runtime fragment: ${fragment}`);
});

const alias = "qa:nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan";
const command = "node scripts/nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan-qa.js"), "qa-suite must include Sprint C18 QA.");

console.log("[nexus-sprint-c18-source-backed-agriculture-visual-semantics-review-plan-qa] passed");
