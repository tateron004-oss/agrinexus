const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const planPath = path.join(root, "docs", "NEXUS_PROVIDER_TESTING_READINESS_PLAN.md");
const reviewPackagePath = path.join(root, "docs", "NEXUS_PROVIDER_REVIEW_PACKAGE.md");
const physicianNotePath = path.join(root, "docs", "NEXUS_PHYSICIAN_REVIEW_CONCEPT_NOTE.md");
const agricultureGuidePath = path.join(root, "docs", "NEXUS_AGRICULTURE_EXPERT_REVIEW_GUIDE.md");
const workforceGuidePath = path.join(root, "docs", "NEXUS_WORKFORCE_PARTNER_REVIEW_GUIDE.md");
const feedbackRubricPath = path.join(root, "docs", "NEXUS_PROVIDER_FEEDBACK_RUBRIC.md");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");

const app = fs.readFileSync(appPath, "utf8");
const plan = fs.readFileSync(planPath, "utf8");
const reviewPackage = fs.readFileSync(reviewPackagePath, "utf8");
const physicianNote = fs.readFileSync(physicianNotePath, "utf8");
const agricultureGuide = fs.readFileSync(agricultureGuidePath, "utf8");
const workforceGuide = fs.readFileSync(workforceGuidePath, "utf8");
const feedbackRubric = fs.readFileSync(feedbackRubricPath, "utf8");
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

includesAll(plan, [
  "# Nexus Provider Testing Readiness Plan",
  "## Purpose",
  "## Provider Types",
  "## Safe Test Scope",
  "## Excluded Actions",
  "## Synthetic Test Scenarios",
  "## Physician Review Scenarios",
  "## Agriculture Expert Scenarios",
  "## Workforce Partner Scenarios",
  "## Marketplace / Community Partner Scenarios",
  "## Feedback Rubric",
  "## Recommended Pilot Order",
  "## Privacy And Data Handling Warning",
  "## Readiness Checklist"
], "Provider testing readiness plan");

includesAll(plan, [
  "Physicians and care teams",
  "Agriculture experts and extension officers",
  "Workforce and training partners",
  "Marketplace and community partners",
  "Service organizations",
  "Provider testing is limited to preparation, summarization, guidance, review-only workflows, source-backed education, and provider-ready report generation."
], "Provider reviewer coverage");

includesAll(plan, [
  "medical diagnosis, treatment decisions, medication changes, or prescribing",
  "emergency dispatch or replacement for emergency services",
  "provider contact, phone calls, SMS, WhatsApp, Telegram, or email sending",
  "appointment booking, scheduling, or live telehealth session creation",
  "payment processing, checkout, purchases, refunds, money movement, or marketplace transactions",
  "location tracking, location sharing, browser geolocation permission, or navigation handoff",
  "camera activation, image capture, or image-based diagnosis",
  "backend writes that create real pending actions",
  "autonomous real-world execution"
], "Provider testing excluded actions");

includesAll(reviewPackage, [
  "# Nexus Provider Review Package",
  "## Purpose Of Provider Review",
  "## What AgriNexus / Nexus Is",
  "## What Providers Are Being Asked To Evaluate",
  "## What Nexus Can Safely Do",
  "## What Nexus Cannot Do",
  "## Provider Categories",
  "## Review Process",
  "## Recommended Demo Flow",
  "## Feedback Collection Process",
  "## Safety And Privacy Reminders"
], "Provider review package");

includesAll(physicianNote, [
  "# Nexus Physician Review Concept Note",
  "## Health Access Preparation Overview",
  "## Chronic Care Preparation Overview",
  "## Provider Report Builder Overview",
  "## Physician Review Goals",
  "## Synthetic Test Scenarios",
  "## Clinical Safety Boundaries",
  "## Questions For Physician Reviewers",
  "Nexus does not diagnose, prescribe, change treatment, book appointments, contact providers, start calls, send messages, or handle emergencies."
], "Physician review concept note");

includesAll(agricultureGuide, [
  "# Nexus Agriculture Expert Review Guide",
  "## Agriculture Support Overview",
  "## Crop Issue Guidance Review",
  "## Source-Backed Guidance Review",
  "## Local Expert Confirmation Expectations",
  "## Synthetic Farmer Scenarios",
  "## Questions For Agriculture Reviewers",
  "Agriculture support is guidance and preparation only."
], "Agriculture expert review guide");

includesAll(workforceGuide, [
  "# Nexus Workforce Partner Review Guide",
  "## Jobs And Workforce Overview",
  "## Training And Literacy Support Overview",
  "## Youth And Rural Workforce Pathway Review",
  "## Skills Checklist Review",
  "## Questions For Workforce And Training Partners",
  "Nexus does not submit applications, contact employers, guarantee jobs, issue credentials, or replace partner review."
], "Workforce partner review guide");

includesAll(feedbackRubric, [
  "# Nexus Provider Feedback Rubric",
  "## Core Review Rubric",
  "## Health-Specific Rubric",
  "## Safety Flag Checklist",
  "## Pilot Readiness Recommendation",
  "Usefulness",
  "Clarity",
  "Safety",
  "Accuracy",
  "Local relevance",
  "Provider workflow fit",
  "Risk of misunderstanding",
  "Readiness for pilot users",
  "Avoids diagnosis",
  "Avoids prescribing",
  "Encourages provider review",
  "Handles emergency language safely",
  "Protects sensitive information"
], "Provider feedback rubric");

const providerDocs = [
  ["provider review package", reviewPackage],
  ["physician review concept note", physicianNote],
  ["agriculture expert review guide", agricultureGuide],
  ["workforce partner review guide", workforceGuide],
  ["provider feedback rubric", feedbackRubric]
];

for (const [label, source] of providerDocs) {
  includesAll(source, [
    "preparation",
    "review",
    "Nexus"
  ], label);
  assertAbsent(source, [
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
    /\bemergency dispatched\b/i
  ], label);
}

includesAll(app, [
  "Agriculture Support",
  "Crop Issue Guidance",
  "Marketplace / AgriTrade",
  "Jobs & Workforce",
  "Training & Literacy",
  "Health Access Preparation",
  "Chronic Care Preparation",
  "Provider Report Builder",
  "Offline Intelligence Mode",
  "Source Trust / Citation Support",
  "Maps / Location Preparation",
  "Communications Preparation",
  "Community Services",
  "Admin / Testing Tools"
], "Standard User dashboard provider-test mode coverage");

includesAll(app, [
  "Preparation Only",
  "Review Only",
  "Provider Review Required",
  "Source-Backed Guidance",
  "Preview",
  "Nexus may prepare, summarize, guide, organize, and suggest next steps.",
  "Nexus will not diagnose, prescribe, replace physicians, contact providers, book appointments, send messages, make calls, complete payments, share location, or trigger emergency services from this dashboard.",
  "Health and chronic care outputs are for provider review. Agriculture guidance should be confirmed with local experts where needed."
], "Dashboard readiness labels");

includesAll(app, [
  "No medical diagnosis, prescription, scheduling, provider contact, or emergency dispatch.",
  "Does not diagnose, prescribe, change treatment, refill medicine, schedule care, or contact a provider.",
  "Review-only report draft. No records are sent, no diagnosis is made, and no provider is contacted from the dashboard.",
  "Guidance only; confirm local decisions with agriculture experts where needed. No spraying, purchase, or dispatch.",
  "Does not diagnose crop disease, activate camera, prescribe treatment, or replace local expert review.",
  "No buying, selling, buyer contact, checkout, or payment from this dashboard.",
  "No calls, messages, provider handoff, or external app opens automatically.",
  "No browser location permission, live sharing, dispatch, or navigation handoff starts here.",
  "No transportation dispatch, emergency routing, or service request is submitted.",
  "Citations inform review; they do not authorize execution."
], "Provider testing safety copy");

const dashboardBlockStart = app.indexOf("const NEXUS_PLATFORM_DASHBOARD_MODES");
const dashboardBlockEnd = app.indexOf("function renderUserWorkspace");
assert(dashboardBlockStart >= 0, "Dashboard modes block must exist.");
assert(dashboardBlockEnd > dashboardBlockStart, "Dashboard renderer block must be bounded before renderUserWorkspace.");
const dashboardBlock = app.slice(dashboardBlockStart, dashboardBlockEnd);

assertAbsent(dashboardBlock, [
  /window\.open/,
  /navigator\.geolocation/,
  /location\.href/,
  /fetch\(/,
  /mutate\(/,
  /openWorkflowModal\(/,
  /workflowConfig\(/
], "Dashboard provider-testing surface");

assertAbsent(dashboardBlock, [
  /\bdiagnosis completed\b/i,
  /\bprescription sent\b/i,
  /\bprovider contacted successfully\b/i,
  /\bappointment booked\b/i,
  /\bpayment completed\b/i,
  /\bemergency dispatched\b/i,
  /\blocation shared\b/i,
  /\bcall placed\b/i,
  /\bmessage sent\b/i
], "Dashboard provider-testing copy");

assert.equal(
  packageData.scripts["qa:nexus-provider-testing-readiness"],
  "node scripts/nexus-provider-testing-readiness-qa.js",
  "package.json must expose qa:nexus-provider-testing-readiness"
);
assert(
  qaSuite.includes("scripts/nexus-provider-testing-readiness-qa.js"),
  "qa-suite.js nexus-workforce suite must include provider testing readiness QA."
);

console.log("Nexus provider testing readiness QA passed");
console.log("- provider plan, Standard User dashboard labels, provider-review scope, and no-execution boundaries verified");
