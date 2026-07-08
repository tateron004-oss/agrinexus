const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function includes(source, value, label) {
  assert(source.includes(value), `${label} must include: ${value}`);
}

function excludes(source, value, label) {
  assert(!source.includes(value), `${label} must not include: ${value}`);
}

function loadRuntime() {
  delete require.cache[require.resolve("../public/nexus-unified-brain-runtime.js")];
  return require("../public/nexus-unified-brain-runtime.js");
}

function assertUiHardening() {
  const html = read("public/index.html");
  const runtime = read("public/nexus-unified-brain-runtime.js");
  includes(html, "Nexus Mission Workspace", "Unified Brain workspace");
  includes(html, "data-nexus-brain-response", "Unified Brain workspace");
  includes(html, "Mission Summary", "Unified Brain workspace");
  includes(html, "Next Best Step", "Unified Brain workspace");
  includes(html, "What Nexus Can Do Now", "Unified Brain workspace");
  includes(html, "What Nexus Needs From You", "Unified Brain workspace");
  includes(html, "What Is Blocked", "Unified Brain workspace");
  includes(runtime, "conversationalSummary", "Unified Brain runtime");
  includes(runtime, "nextBestStep", "Unified Brain runtime");
}

function assertCopy() {
  const runtime = loadRuntime();
  const farm = runtime.createMissionPlan("Help me with my farm. The tomatoes are sick and I need to sell what I can.");
  const health = runtime.createMissionPlan("My blood pressure is high and I need the clinic and pharmacy.");
  const job = runtime.createMissionPlan("I need a job and training.");
  assert(/I can help with that/.test(farm.conversationalResponse), "farm mission should have warm conversational response");
  assert(/clinic message/.test(health.conversationalResponse), "health mission should explain clinic/pharmacy prep");
  assert(/learning-to-employment/.test(job.conversationalResponse), "job mission should explain workforce plan");
  const html = read("public/index.html");
  includes(html, "I did not send anything", "Standard User safe copy");
}

function assertMobileLayout() {
  const css = read("public/styles.css");
  includes(css, "@media (max-width: 900px)", "Unified Brain CSS");
  includes(css, "nexus-brain-summary-card", "Unified Brain CSS");
  includes(css, "nexus-brain-next-step", "Unified Brain CSS");
  includes(css, "overflow-wrap: anywhere", "Unified Brain CSS");
  includes(css, "min-height: 40px", "Unified Brain CSS");
  includes(css, "width: 100%", "Unified Brain mobile buttons");
}

function assertReceiptReadability() {
  const runtime = loadRuntime();
  const mission = runtime.createMissionPlan("Help me with my farm and prepare a buyer message.");
  assert(mission.receipt.missionReceiptId, "mission receipt should exist");
  assert.equal(mission.receipt.noFakeExecution, true, "receipt should preserve no fake execution");
  const source = read("public/nexus-unified-brain-runtime.js");
  includes(source, "Local Draft", "receipt labels");
  includes(source, "Safety Gate Triggered", "receipt labels");
  includes(source, "Nexus prepared the mission locally", "receipt outcome");
  excludes(JSON.stringify(mission), "[object Object]", "mission receipt data");
}

function assertBlockedStateCopy() {
  const runtime = loadRuntime();
  const mission = runtime.createMissionPlan("My blood pressure is high and I need the clinic and pharmacy.");
  assert(mission.blockedItems.length, "mission should include gated items");
  const blockedText = JSON.stringify(mission.blockedItems);
  includes(read("public/nexus-unified-brain-runtime.js"), "Prepared instead:", "blocked copy");
  includes(read("public/nexus-unified-brain-runtime.js"), "What unlocks this:", "blocked copy");
  for (const raw of ["missingEnv", "executionMode", "clinicianReviewRequired", "expertReviewRequired", "communicationReceiptId", "[object Object]"]) {
    excludes(blockedText, raw, "Standard User blocked response");
  }
  const source = read("public/nexus-unified-brain-runtime.js");
  excludes(source, "${escapeHtml(item.sourceMode)}", "Standard User plan render");
  includes(source, "sourceLabel(item.sourceMode)", "Standard User plan render should translate source mode");
}

function assertNoUnsafeClaims() {
  const combined = [
    read("public/index.html"),
    read("public/nexus-unified-brain-runtime.js"),
    read("public/app.js"),
    read("public/nexus-conversational-voice-runtime.js")
  ].join("\n").toLowerCase();
  for (const unsafe of [
    "message was sent successfully",
    "call was placed",
    "telehealth visit was scheduled",
    "payment completed",
    "buyer was contacted",
    "diagnosis completed",
    "prescription sent"
  ]) {
    excludes(combined, unsafe, "Unified Brain hardening files");
  }
}

function run(section = "all") {
  const checks = {
    ui: assertUiHardening,
    copy: assertCopy,
    mobile: assertMobileLayout,
    receipts: assertReceiptReadability,
    blocked: assertBlockedStateCopy,
    all: () => {
      assertUiHardening();
      assertCopy();
      assertMobileLayout();
      assertReceiptReadability();
      assertBlockedStateCopy();
      assertNoUnsafeClaims();
    }
  };
  assert(checks[section], `Unknown Unified Brain UI hardening section: ${section}`);
  checks[section]();
  console.log(`[nexus-unified-brain-${section}-hardening-qa] passed`);
}

module.exports = { run };

if (require.main === module) {
  run(process.argv[2] || "all");
}
