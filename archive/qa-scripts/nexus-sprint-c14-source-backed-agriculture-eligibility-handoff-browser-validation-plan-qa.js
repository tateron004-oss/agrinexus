const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C14_SOURCE_BACKED_AGRICULTURE_ELIGIBILITY_HANDOFF_BROWSER_VALIDATION_PLAN.md"),
  c13Doc: path.join(root, "docs", "NEXUS_SPRINT_C13_SOURCE_BACKED_AGRICULTURE_ELIGIBILITY_HANDOFF_CONTRACT.md"),
  c13Module: path.join(root, "public", "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

const c13FileName = "nexus-sprint-c13-source-backed-agriculture-eligibility-handoff-contract.js";

function fail(message) {
  console.error(`[nexus-sprint-c14-source-backed-agriculture-eligibility-handoff-browser-validation-plan-qa] ${message}`);
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
const c13Doc = read(files.c13Doc);
const index = read(files.index);
const app = read(files.app);
const server = read(files.server);
const packageData = JSON.parse(read(files.packageJson));
const qaSuite = read(files.qaSuite);
const c13 = require(files.c13Module);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Future Bridge Preconditions",
  "Required Browser Setup",
  "Flag-Off Browser Expectations",
  "Flag-On Eligible Prompt Matrix",
  "Unsupported Safe Prompt Matrix",
  "Excluded And High-Risk Prompt Matrix",
  "Console, Network, And Storage Checks",
  "Runtime Mutation Restoration",
  "Required QA Before Future Runtime Commit",
  "Go/No-Go Rule",
  "Sprint C15 Recommendation",
  "inert documentation and QA only",
  "does not wire C13 into Standard User runtime",
  "does not load C13 in `public/index.html`",
  "does not import C13 in `public/app.js`",
  "does not render a visible card",
  "does not change backend behavior"
], "Sprint C14 browser validation plan");

includesAll(doc, [
  "C6 packet harness QA passes",
  "C8 mapper QA passes",
  "C12 flag resolver QA passes",
  "C13 eligibility handoff QA passes",
  "feature flag is explicit, boolean-only, and default-off",
  "Standard User flag-off behavior is validated as unchanged",
  "visible surface rendering is separately approved",
  "rollback steps and runtime mutation restoration"
], "future bridge preconditions");

includesAll(doc, [
  "`node server.js`",
  "`http://127.0.0.1:4182/`",
  "`Start as User`",
  "normal Standard User build",
  "no special test-candidate build",
  "clean `git status --short`"
], "required browser setup");

includesAll(doc, [
  "no C13 script loaded",
  "no C8 mapper loaded",
  "no C13 output visible",
  "no source-backed agriculture card created by C13",
  "no hidden executable metadata",
  "no new buttons, links, forms, route changes, modals, permission prompts, network requests, storage writes, backend writes, or pending actions"
], "flag-off browser expectations");

includesAll(doc, [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "I need help with crop issues",
  "What should I check in my farm soil?",
  "`Evidence & Verification`",
  "source contract ID",
  "verification status",
  "freshness label",
  "confidence label",
  "`No action has been taken.`",
  "disabled, inert, or review-only"
], "flag-on eligible prompt matrix");

includesAll(doc, [
  "How do I prepare for drought?",
  "no C13 source-backed card",
  "no claim that drought guidance is currently source-backed by C6",
  "no execution or permission prompt"
], "unsupported safe prompt matrix");

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
  "no provider handoff",
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
  "`git diff --check`",
  "`node --check server.js`",
  "`node --check public/app.js`",
  "C6 QA",
  "C8 QA",
  "C12 QA",
  "C13 QA",
  "source-backed response runtime contract QA",
  "provider handoff boundary QA",
  "confirmation UI contract QA",
  "communications no-execution regression QA",
  "`node scripts/qa-suite.js nexus-workforce`",
  "`node scripts/qa-suite.js all-safe`"
], "required QA before future runtime commit");

assert(c13Doc.includes("Sprint C14 should add a browser-validation readiness plan"), "C13 doc must recommend C14 browser validation readiness plan.");
assert(c13.HANDOFF_VERSION === "nexus.sprintC13.sourceBackedAgricultureEligibilityHandoffContract.v1", "C13 handoff contract must remain available.");
assert(c13.buildSourceBackedAgricultureEligibilityHandoff("Help me find agriculture training", { enableSourceBackedAgricultureRuntimeMapping: true }).handoffEligible === true, "C13 eligible prompt fixture must remain available.");
assert(c13.buildSourceBackedAgricultureEligibilityHandoff("How do I prepare for drought?", { enableSourceBackedAgricultureRuntimeMapping: true }).handoffEligible === false, "C13 drought prompt must remain unsupported until source family exists.");

assert(!index.includes(c13FileName), "public/index.html must not load C13 module.");
assert(!app.includes(c13FileName), "public/app.js must not reference C13 module.");
assert(!server.includes(c13FileName), "server.js must not explicitly inject or special-case C13 module.");

const alias = "qa:nexus-sprint-c14-source-backed-agriculture-eligibility-handoff-browser-validation-plan";
const command = "node scripts/nexus-sprint-c14-source-backed-agriculture-eligibility-handoff-browser-validation-plan-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c14-source-backed-agriculture-eligibility-handoff-browser-validation-plan-qa.js"), "qa-suite must include Sprint C14 QA.");

console.log("[nexus-sprint-c14-source-backed-agriculture-eligibility-handoff-browser-validation-plan-qa] passed");
