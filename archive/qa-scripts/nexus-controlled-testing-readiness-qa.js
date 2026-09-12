const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");

const docs = {
  startPlan: path.join(root, "docs", "NEXUS_CONTROLLED_TESTING_START_PLAN.md"),
  testScript: path.join(root, "docs", "NEXUS_STANDARD_USER_TEST_SCRIPT.md"),
  feedbackForm: path.join(root, "docs", "NEXUS_TESTER_FEEDBACK_FORM.md"),
  sessionGuide: path.join(root, "docs", "NEXUS_PROVIDER_TEST_SESSION_GUIDE.md")
};

const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

const sources = Object.fromEntries(
  Object.entries(docs).map(([key, filePath]) => {
    assert(fs.existsSync(filePath), `${filePath} must exist`);
    return [key, fs.readFileSync(filePath, "utf8")];
  })
);
const combinedDocs = Object.values(sources).join("\n\n");
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");

function includesAll(source, values, label) {
  for (const value of values) {
    assert(source.includes(value), `${label} must include ${value}`);
  }
}

function assertAbsent(source, patterns, label) {
  for (const pattern of patterns) {
    assert(!pattern.test(source), `${label} must not match ${pattern}`);
  }
}

includesAll(sources.startPlan, [
  "# Nexus Controlled Testing Start Plan",
  "## Purpose Of Controlled Testing",
  "## Build To Test",
  "Test the normal Standard User build only.",
  "## Who Should Test First",
  "## Testing Order",
  "## What To Test",
  "## What Not To Test Yet",
  "## Safety Boundaries",
  "## Success Criteria",
  "## Stop Conditions",
  "## How To Record Feedback",
  "## Recommended Next Steps After Testing"
], "controlled testing start plan");

includesAll(sources.testScript, [
  "# Nexus Standard User Test Script",
  "## Setup",
  "## Step 1: Review The Dashboard",
  "## Step 2: Select Modes",
  "## Step 3: Test Mode-Specific Prompts",
  "### Agriculture Support",
  "### Crop Issue Guidance",
  "### Marketplace / AgriTrade",
  "### Jobs & Workforce",
  "### Training & Literacy",
  "### Health Access Preparation",
  "### Chronic Care Preparation",
  "### Provider Report Builder",
  "### Source Trust / Citation Support",
  "### Offline Intelligence Mode",
  "### Maps / Location Preparation",
  "### Communications Preparation",
  "## Step 4: Check Safety Labels",
  "## Step 5: Confirm No Unsafe Execution",
  "## Step 6: Capture Feedback",
  "## Closeout Checklist"
], "standard user test script");

includesAll(sources.feedbackForm, [
  "# Nexus Tester Feedback Form",
  "## Tester Information",
  "## Modes Tested",
  "## General Feedback",
  "## Scores",
  "## Health-Specific Review",
  "## Agriculture-Specific Review",
  "## Workforce-Specific Review",
  "## Final Recommendation",
  "Not ready",
  "Needs changes",
  "Ready for more review",
  "Ready for controlled pilot"
], "tester feedback form");

includesAll(sources.sessionGuide, [
  "# Nexus Provider Test Session Guide",
  "## Session Purpose",
  "## What To Say Before The Session",
  "## What To Avoid Saying",
  "## Physician Review Session",
  "## Agriculture Expert Review Session",
  "## Workforce Partner Review Session",
  "## Marketplace And Community Review Session",
  "## Finding Classification",
  "preparation and guidance assistant"
], "provider test session guide");

includesAll(combinedDocs, [
  "Standard User",
  "dashboard",
  "mode",
  "safety",
  "feedback",
  "provider review",
  "preparation",
  "review-only",
  "no-execution",
  "synthetic"
], "controlled testing documentation");

includesAll(combinedDocs, [
  "Agriculture Support",
  "Crop Issue Guidance",
  "Marketplace / AgriTrade",
  "Jobs & Workforce",
  "Training & Literacy",
  "Health Access Preparation",
  "Chronic Care Preparation",
  "Provider Report Builder",
  "Source Trust / Citation Support",
  "Offline Intelligence Mode",
  "Maps / Location Preparation",
  "Communications Preparation"
], "mode coverage");

includesAll(combinedDocs, [
  "diagnose",
  "prescribe",
  "emergency",
  "payment",
  "location",
  "camera",
  "contact",
  "calls",
  "messages",
  "booking",
  "autonomous real-world execution"
], "safety boundary coverage");

assertAbsent(combinedDocs, [
  /\bNexus diagnoses\b/i,
  /\bNexus prescribes\b/i,
  /\bNexus treats\b/i,
  /\bNexus books appointments\b/i,
  /\bNexus contacts providers\b/i,
  /\bNexus sends messages\b/i,
  /\bNexus starts calls\b/i,
  /\bNexus processes payments\b/i,
  /\bNexus shares location\b/i,
  /\bNexus handles emergencies\b/i,
  /\bdiagnosis completed\b/i,
  /\bprescription sent\b/i,
  /\bappointment booked\b/i,
  /\bprovider contacted\b/i,
  /\bmessage sent\b/i,
  /\bcall placed\b/i,
  /\bpayment completed\b/i,
  /\blocation shared\b/i,
  /\bemergency dispatched\b/i,
  /\bmarketplace transaction completed\b/i
], "controlled testing docs");

assert.equal(
  packageData.scripts["qa:nexus-controlled-testing-readiness"],
  "node scripts/nexus-controlled-testing-readiness-qa.js",
  "package.json must expose qa:nexus-controlled-testing-readiness"
);
assert(
  qaSuite.includes("scripts/nexus-controlled-testing-readiness-qa.js"),
  "qa-suite.js nexus-workforce suite must include controlled testing readiness QA."
);

console.log("Nexus controlled testing readiness QA passed");
console.log("- Standard User test plan, test script, feedback form, provider session guide, and no-execution boundaries verified");
