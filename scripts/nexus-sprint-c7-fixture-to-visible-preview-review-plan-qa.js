const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const files = {
  doc: path.join(root, "docs", "NEXUS_SPRINT_C7_FIXTURE_TO_VISIBLE_PREVIEW_REVIEW_PLAN.md"),
  c6Doc: path.join(root, "docs", "NEXUS_SPRINT_C6_SOURCE_BACKED_AGRICULTURE_PACKET_HARNESS.md"),
  c6Harness: path.join(root, "public", "nexus-sprint-c6-source-backed-agriculture-packet-harness.js"),
  responseCard: path.join(root, "public", "nexus-agriculture-support-response-card.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-sprint-c7-fixture-to-visible-preview-review-plan-qa] ${message}`);
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
const c6Doc = fs.readFileSync(files.c6Doc, "utf8");
const c6Source = fs.readFileSync(files.c6Harness, "utf8");
const responseCardSource = fs.readFileSync(files.responseCard, "utf8");
const activeRuntime = [files.index, files.app, files.server].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");
const packageData = JSON.parse(fs.readFileSync(files.packageJson, "utf8"));
const qaSuite = fs.readFileSync(files.qaSuite, "utf8");
const harness = require(files.c6Harness);

includesAll(doc, [
  "Purpose",
  "Starting Checkpoint",
  "Readiness Decision",
  "Fixture-To-Preview Mapping Contract",
  "Visible Preview Requirements",
  "Rejection And Fallback Rules",
  "Standard User Runtime Boundary",
  "Future Browser Validation Gate",
  "Sprint C8 Recommendation",
  "documentation and QA only",
  "does not add runtime mapping",
  "does not render new UI"
], "Sprint C7 review plan doc");

includesAll(doc, [
  "`eligible` is `true`",
  "`sourceBacked` is `true`",
  "`sourceStatus` is `source-backed`",
  "`Evidence & Verification`",
  "source contract ID",
  "verification status is `verified`",
  "freshness label",
  "confidence label",
  "source-supported claim",
  "Nexus inferences",
  "local applicability warning",
  "claims Nexus is not making",
  "`No action has been taken.`",
  "every execution authority flag remains `false`"
], "fixture-to-preview mapping contract");

includesAll(doc, [
  "provider contact",
  "calls, messages, WhatsApp, Telegram, SMS, or email",
  "marketplace transaction",
  "payment",
  "location sharing",
  "camera or microphone activation",
  "medical, pharmacy, telehealth, or emergency execution",
  "backend writes",
  "storage writes",
  "pending action creation",
  "hidden staged action"
], "readiness no-execution decision");

includesAll(doc, [
  "active buttons that execute an action",
  "provider handoff controls",
  "contact/call/message controls",
  "buy, sell, checkout, order, quote, or payment controls",
  "location, map, GPS, camera, microphone, or upload controls",
  "appointment, medical, pharmacy, telehealth, hospital, doctor, or emergency execution controls",
  "hidden metadata that looks like an executable queue"
], "visible preview exclusions");

includesAll(doc, [
  "ineligible C6 packets",
  "non-source-backed packets",
  "unverified source packets",
  "missing source contract ID",
  "missing freshness or confidence",
  "forbidden claims",
  "chemical dose",
  "pesticide application",
  "diagnosis",
  "emergency",
  "marketplace",
  "provider contact",
  "payment",
  "location",
  "camera",
  "medical",
  "pharmacy",
  "telehealth",
  "scheduling",
  "execution authority flag is not exactly `false`"
], "rejection and fallback rules");

includesAll(doc, [
  "`public/index.html`",
  "`public/app.js`",
  "`server.js`",
  "Standard User startup",
  "planner, policy, provider, native bridge, confirmation, marketplace, health, map, camera, location, call, message, payment, or emergency flows"
], "Standard User runtime boundary");

includesAll(doc, [
  "safe low-risk prompts render a visible source-backed review card only when a verified fixture/source packet is available",
  "excluded prompts render no source-backed card",
  "no provider/call/message/payment/marketplace/location/camera/medical/pharmacy/emergency action executes",
  "console has no new warnings/errors",
  "`db.json` and runtime mutations are restored before commit",
  "`nexus-workforce` and `all-safe` pass"
], "future browser validation gate");

assert(c6Doc.includes("fixture-to-visible-preview review plan"), "Sprint C6 must recommend the C7 review plan.");
assert(c6Source.includes("buildFixtureSourceBackedAgriculturePacket"), "C6 harness must remain available for future mapping.");
assert(responseCardSource.includes("renderAgricultureSupportCard") && responseCardSource.includes("sourceStatus"), "agriculture response card source-status surface must remain available.");

const packet = harness.buildFixtureSourceBackedAgriculturePacket("I need help with crop issues");
assert(packet.eligible === true && packet.sourceBacked === true, "C6 safe packet must remain source-backed for future mapping review.");
assert(packet.evidenceTitle === "Evidence & Verification", "C6 safe packet must carry Evidence & Verification title.");
Object.keys(harness.NO_EXECUTION_AUTHORITY).forEach(flag => {
  assert(packet[flag] === false, `C6 safe packet ${flag} must remain false for C7 mapping review.`);
});

[
  "nexus-sprint-c7-fixture-to-visible-preview",
  "NexusSprintC7",
  "fixtureToVisiblePreview"
].forEach(fragment => {
  assert(!activeRuntime.includes(fragment), `active runtime must not include C7 mapping/wiring fragment: ${fragment}`);
});

const alias = "qa:nexus-sprint-c7-fixture-to-visible-preview-review-plan";
const command = "node scripts/nexus-sprint-c7-fixture-to-visible-preview-review-plan-qa.js";
assert(packageData.scripts && packageData.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes("scripts/nexus-sprint-c7-fixture-to-visible-preview-review-plan-qa.js"), "qa-suite must include Sprint C7 QA.");

console.log("[nexus-sprint-c7-fixture-to-visible-preview-review-plan-qa] passed");
