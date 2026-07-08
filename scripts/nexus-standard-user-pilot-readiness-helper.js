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

function assertNoUnsafeClaims(source, label) {
  const lower = String(source || "").toLowerCase();
  for (const unsafe of [
    "message was sent successfully",
    "call was placed",
    "payment completed",
    "appointment booked",
    "provider accepted",
    "shipment tracking created",
    "refill approved",
    "diagnosis completed",
    "prescription sent",
    "[object object]"
  ]) {
    excludes(lower, unsafe, label);
  }
}

function assertPilotReadiness() {
  const html = read("public/index.html");
  const runtime = read("public/nexus-unified-brain-runtime.js");
  includes(html, "Standard User Pilot Readiness", "pilot readiness dashboard");
  includes(html, "data-nexus-pilot-readiness", "pilot readiness dashboard");
  includes(html, "data-nexus-pilot-status", "pilot readiness dashboard");
  includes(html, "data-nexus-pilot-can-test", "pilot readiness dashboard");
  includes(html, "data-nexus-pilot-activation-matrix", "pilot readiness dashboard");
  includes(html, "data-nexus-pilot-recommendation", "pilot readiness dashboard");
  includes(runtime, "pilotReadinessStatus", "pilot readiness runtime");
  const readiness = loadRuntime().pilotReadinessStatus({});
  assert(readiness.status.includes("Ready for local Standard User testing"), "readiness should report local testing readiness");
  assert(readiness.canTestNow.includes("Mission planning"), "readiness should include mission planning");
  assert(readiness.canTestNow.includes("Readable receipts"), "readiness should include readable receipts");
  assert.equal(readiness.noFakeExecution, true, "readiness should preserve no-fake-execution");
}

function assertScenarios() {
  const runtime = loadRuntime();
  assert.equal(runtime.PILOT_SCENARIOS.length, 8, "pilot harness should include eight scenarios");
  for (const expected of [
    "Farmer Crop-to-Market",
    "Patient Clinic + Pharmacy",
    "Job Seeker Learning-to-Employment",
    "Mobile Health Access",
    "Agriculture Logistics",
    "Blocked Items",
    "Missing Info",
    "Multi-Domain Life Services"
  ]) {
    assert(runtime.PILOT_SCENARIOS.some(item => item.label === expected), `missing pilot scenario: ${expected}`);
  }
  const harness = runtime.runPilotScenarioHarness();
  assert.equal(harness.scenarioCount, 8, "harness should run all scenarios");
  assert(harness.passCount >= 8, "all deterministic pilot scenarios should pass");
  for (const item of harness.results) {
    assert(item.mission?.steps?.length, `${item.scenario.label} should create a mission plan`);
    assert.equal(item.pilotReceipt.fakeExecutionDetected, false, `${item.scenario.label} must not fake execution`);
    assert(["pass", "warn", "fail"].includes(item.pilotReceipt.result), "receipt should include result metadata");
  }
}

function assertProviderActivation() {
  const runtime = loadRuntime();
  const matrix = runtime.providerActivationMatrix({});
  assert.equal(matrix.length, 7, "provider activation matrix should include seven categories");
  for (const category of ["Communication", "Healthcare", "Agriculture", "Marketplace", "Logistics", "Learning/Workforce", "Drone"]) {
    const item = matrix.find(row => row.category === category);
    assert(item, `missing provider category: ${category}`);
    assert(Array.isArray(item.missingEnvVars), `${category} should expose missing env var names`);
    assert.equal(item.liveExecutionAllowed, false, `${category} live execution should be disabled by default`);
    assert.equal(item.noSecretValues, true, `${category} should guarantee no secret values`);
    assert(item.blockedReason && !/secret|token value|password value/i.test(item.blockedReason), `${category} blocked reason should be safe`);
  }
  const html = read("public/index.html");
  includes(html, "Provider Activation Readiness Matrix", "provider activation dashboard");
}

function assertRecommendation() {
  const runtime = loadRuntime();
  const rec = runtime.firstActivationRecommendation({});
  assert.equal(rec.recommended, "Communication", "communication should be default first activation");
  assert(/communication provider first/i.test(rec.title), "recommendation title should name communication first");
  assert(/prepared local drafts to confirmed real sends/i.test(rec.userExplanation), "recommendation should explain user value");
  assert(rec.adminDetail.requiredEnvVars.includes("TWILIO_ACCOUNT_SID"), "recommendation should include SMS env names");
  assert(rec.adminDetail.safetyGates.includes("explicit user confirmation"), "recommendation should include confirmation gate");
}

function assertPilotReceipts() {
  const runtime = loadRuntime();
  const result = runtime.runPilotScenario("farmer-crop-to-market");
  const receipt = result.pilotReceipt;
  for (const field of ["pilotReceiptId", "scenario", "input", "domainsDetected", "missionPlanCreated", "preparedItems", "blockedItems", "missingInfo", "receiptsCreated", "fakeExecutionDetected", "userComprehensionNotes", "testerNotes", "timestamp", "result"]) {
    assert(Object.prototype.hasOwnProperty.call(receipt, field), `pilot receipt missing ${field}`);
  }
  assert.equal(receipt.fakeExecutionDetected, false, "pilot receipt should detect no fake execution");
  assert.equal(receipt.result, "pass", "safe local pilot receipt should pass");
}

function assertTestingGuide() {
  const html = read("public/index.html");
  const doc = read("docs/NEXUS_STANDARD_USER_PILOT_READINESS.md");
  const guide = loadRuntime().testingGuideItems();
  includes(html, "Test Nexus Guide", "testing guide UI");
  assert(guide.commands.length >= 8, "testing guide should expose scenario commands");
  assert(guide.lookFor.some(item => /Did Nexus understand/.test(item)), "guide should include comprehension question");
  includes(doc, "Did Nexus avoid claiming", "testing guide doc");
  includes(doc, "No-Fake-Execution Policy", "testing guide doc");
  assertNoUnsafeClaims(html + doc, "testing guide");
}

function assertMobileLayout() {
  const css = read("public/styles.css");
  includes(css, ".nexus-pilot-readiness", "pilot mobile CSS");
  includes(css, ".nexus-pilot-readiness-grid", "pilot mobile CSS");
  includes(css, ".nexus-pilot-scenario-grid", "pilot mobile CSS");
  includes(css, ".nexus-pilot-matrix-grid", "pilot mobile CSS");
  includes(css, "@media (max-width: 900px)", "pilot mobile CSS");
  includes(css, "overflow-wrap: anywhere", "pilot mobile CSS");
  includes(css, "min-height: 40px", "pilot tappable buttons");
  includes(css, "width: 100%", "pilot mobile buttons");
}

function assertDocs() {
  const doc = read("docs/NEXUS_STANDARD_USER_PILOT_READINESS.md");
  includes(doc, "Communication is the best first activation", "pilot readiness doc");
  includes(doc, "Provider Activation Matrix", "pilot readiness doc");
  includes(doc, "Pilot Scenarios", "pilot readiness doc");
  includes(doc, "No-Fake-Execution Policy", "pilot readiness doc");
  assertNoUnsafeClaims(doc, "pilot readiness doc");
}

function run(section = "all") {
  const checks = {
    readiness: assertPilotReadiness,
    scenarios: assertScenarios,
    provider: assertProviderActivation,
    recommendation: assertRecommendation,
    receipts: assertPilotReceipts,
    guide: assertTestingGuide,
    mobile: assertMobileLayout,
    all: () => {
      assertPilotReadiness();
      assertScenarios();
      assertProviderActivation();
      assertRecommendation();
      assertPilotReceipts();
      assertTestingGuide();
      assertMobileLayout();
      assertDocs();
    }
  };
  assert(checks[section], `Unknown pilot readiness QA section: ${section}`);
  checks[section]();
  console.log(`[nexus-standard-user-pilot-${section}-qa] passed`);
}

module.exports = { run };

if (require.main === module) {
  run(process.argv[2] || "all");
}
