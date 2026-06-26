const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C9_SOURCE_BACKED_AGRICULTURE_RUNTIME_MAPPING_BROWSER_VALIDATION_PLAN.md"),
  c8Doc: path.join(root, "docs", "NEXUS_SPRINT_C8_SOURCE_BACKED_AGRICULTURE_VISIBLE_PREVIEW_MAPPER.md"),
  c6Harness: path.join(root, "public", "nexus-sprint-c6-source-backed-agriculture-packet-harness.js"),
  c8Mapper: path.join(root, "public", "nexus-sprint-c8-source-backed-agriculture-visible-preview-mapper.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c9-source-backed-agriculture-runtime-mapping-browser-validation-plan-qa] ${message}`);
    process.exit(1);
  }
}

function includesAll(source, fragments, label) {
  fragments.forEach(fragment => {
    assert(source.toLowerCase().includes(fragment.toLowerCase()), `${label} must include: ${fragment}`);
  });
}

Object.entries(files).forEach(([name, filePath]) => {
  assert(fs.existsSync(filePath), `${name} must exist at ${path.relative(root, filePath)}.`);
});

const doc = fs.readFileSync(files.doc, "utf8");
const c8Doc = fs.readFileSync(files.c8Doc, "utf8");
const activeRuntime = [files.index, files.app, files.server].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const c8Mapper = require(files.c8Mapper);
const c6Harness = require(files.c6Harness);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Browser Validation Prerequisites",
  "Required Standard User Setup",
  "Safe Low-Risk Prompt Matrix",
  "Excluded And High-Risk Prompt Matrix",
  "Console, Network, And Storage Checks",
  "Runtime Mutation Restoration",
  "Required QA Before Commit",
  "Go/No-Go Rule",
  "Sprint C10 Recommendation",
  "inert documentation and QA only",
  "does not change runtime behavior"
], "Sprint C9 browser validation plan doc");

includesAll(doc, [
  "`node server.js`",
  "`http://127.0.0.1:4182/`",
  "`Start as User`",
  "normal Standard User build",
  "no special test-candidate build",
  "clean `git status --short`"
], "Standard User setup");

includesAll(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?",
  "How do I prepare for drought?",
  "`Evidence & Verification`",
  "source contract ID",
  "verification status",
  "freshness label",
  "confidence label",
  "`No action has been taken.`"
], "safe low-risk prompt matrix");

includesAll(doc, [
  "Call an extension worker",
  "Message the seller",
  "Buy seeds",
  "Pay for fertilizer",
  "Use my location to find farms near me",
  "Open my camera for crop diagnosis",
  "Schedule an appointment",
  "Emergency pesticide poisoning",
  "Tell me the pesticide dose to spray",
  "Sell my crop",
  "no source-backed agriculture card",
  "no provider handoff",
  "no calls, messages, WhatsApp, Telegram, SMS, or email",
  "no marketplace transaction",
  "no payment",
  "no location permission prompt",
  "no camera or microphone permission prompt",
  "no pending action"
], "excluded and high-risk prompt matrix");

includesAll(doc, [
  "console warnings",
  "console errors",
  "unexpected network requests",
  "localStorage/sessionStorage writes",
  "`db.json` mutations",
  "route changes",
  "modal openings",
  "permission prompts",
  "demo blocker",
  "safety blocker",
  "functional defect"
], "console network storage checks");

includesAll(doc, [
  "`db.json`",
  "temporary databases",
  "local fixture files",
  "screenshots or logs not intended for commit",
  "browser-created debug artifacts",
  "No commit may include unrelated runtime data"
], "runtime mutation restoration");

includesAll(doc, [
  "`git diff --check`",
  "`node --check server.js`",
  "`node --check public/app.js`",
  "C6 QA",
  "C8 QA",
  "source-backed response runtime contract QA",
  "provider handoff boundary QA",
  "confirmation UI contract QA",
  "communications no-execution regression QA",
  "`node scripts/qa-suite.js nexus-workforce`",
  "`node scripts/qa-suite.js all-safe`"
], "required QA before commit");

assert(c8Doc.includes("Sprint C9 should add a browser-validation plan"), "Sprint C8 must recommend C9 browser validation plan.");
assert(c8Mapper.MAPPER_VERSION === "nexus.sprintC8.sourceBackedAgricultureVisiblePreviewMapper.v1", "C8 mapper must remain available.");
assert(c8Mapper.buildFixtureVisiblePreviewModel("I need help with crop issues").visiblePreviewAllowed === true, "C8 mapper fixture preview must remain available for future validation planning.");
assert(c6Harness.buildFixtureSourceBackedAgriculturePacket("Call an extension worker").sourceBacked === false, "C6 excluded prompt must remain not source-backed.");

[
  "nexus-sprint-c9-source-backed-agriculture-runtime-mapping-browser-validation",
  "NexusSprintC9",
  "sourceBackedAgricultureRuntimeMappingBrowserValidation"
].forEach(fragment => {
  assert(!activeRuntime.includes(fragment), `active runtime must not include C9 validation-only fragment: ${fragment}`);
});

const alias = "qa:nexus-sprint-c9-source-backed-agriculture-runtime-mapping-browser-validation-plan";
const command = "node scripts/nexus-sprint-c9-source-backed-agriculture-runtime-mapping-browser-validation-plan-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c9-source-backed-agriculture-runtime-mapping-browser-validation-plan-qa.js"), "qa-suite must include Sprint C9 QA.");

console.log("[nexus-sprint-c9-source-backed-agriculture-runtime-mapping-browser-validation-plan-qa] passed");
