const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const suite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${message}`);
  }
}

function includes(source, token, message) {
  assert(source.includes(token), message);
}

[
  "NEXUS_CONVERSATIONAL_INTERVIEW_FIELD_CATALOG",
  "function nexusGuidedFieldsForDefinition",
  "function nexusInterviewStateForWorkflow",
  "function validateNexusInterviewAnswer",
  "function nextNexusInterviewIndex",
  "function buildNexusInterviewStructuredData",
  "function renderNexusInterviewReviewSummary",
  "function renderNexusGuidedIntakePanel"
].forEach(token => includes(app, token, `contextual interview runtime ${token}`));

[
  "name",
  "contact",
  "location",
  "preferredLanguage",
  "crop",
  "quantity",
  "price",
  "farmSize",
  "healthMeasurement",
  "symptoms",
  "medicationInformation",
  "shipmentId",
  "jobPreference",
  "skills",
  "employerRequirement",
  "providerSelection",
  "paymentAmount",
  "transactionItem"
].forEach(field => includes(app, field, `common interview field supported: ${field}`));

[
  "data-nexus-contextual-interview-engine=\"true\"",
  "data-nexus-interview-current-field",
  "data-nexus-interview-resumable=\"true\"",
  "data-nexus-interview-voice-answer=\"true\"",
  "data-nexus-interview-typed-answer=\"true\"",
  "One question at a time",
  "Type or speak your answer here",
  "data-nexus-voice-control=\"listen\"",
  "data-nexus-interview-voice-button=\"true\""
].forEach(token => includes(app, token, `one-question voice/typed interview UI ${token}`));

[
  "validateNexusInterviewAnswer(field, value)",
  "This field",
  "Please include a number or amount",
  "Please include a reading",
  "nexus-interview-error",
  "Interview answer needs a simple correction."
].forEach(token => includes(app, token, `interview validation/error handling ${token}`));

[
  "data-nexus-interview-skip",
  "Skip optional",
  "required-field-cannot-skip",
  "Optional interview field skipped locally.",
  "data-nexus-interview-correct",
  "Correct previous",
  "user_requested_correction",
  "data-nexus-interview-review",
  "Review summary",
  "data-nexus-interview-cancel",
  "Cancel interview",
  "Interview cancelled locally before any packet or external action."
].forEach(token => includes(app, token, `skip/correction/review/cancel path ${token}`));

[
  "data-nexus-interview-review-summary=\"true\"",
  "data-nexus-interview-structured-data",
  "data-nexus-review-before-action=\"true\"",
  "Prepare local packet",
  "required-interview-fields-missing",
  "No external action has been executed."
].forEach(token => includes(app, token, `review summary before action ${token}`));

[
  "agriculture|crop|farm|field|drone",
  "marketplace|agritrade|buyer|seller|trade",
  "logistics|shipment|route|map|delivery|pickup",
  "learning|training|literacy|workforce|job|employment",
  "health|chronic|diabetes|hypertension|obesity|rpm|rtm|telehealth|mobile-clinic|pharmacy|provider",
  "payment|invoice|checkout|transaction"
].forEach(token => includes(app, token, `conditional interview branch exists ${token}`));

[
  "localStorage.setItem(\"nexusGuidedWorkflowAnswers\"",
  "nexusGuidedWorkflowAnswers = JSON.parse(localStorage.getItem(\"nexusGuidedWorkflowAnswers\"",
  "schemaVersion: \"nexus-contextual-interview.v1\"",
  "reviewReady",
  "currentIndex"
].forEach(token => includes(app, token, `resumable local interview state ${token}`));

const handlerSource = app.slice(
  app.indexOf("const guidedSave = target?.closest?.(\"[data-nexus-guided-save]\")"),
  app.indexOf("const guidedBack = target?.closest?.(\"[data-nexus-guided-back]\")")
);
[
  "validateNexusInterviewAnswer(field, value)",
  "data-nexus-interview-skip",
  "data-nexus-interview-correct",
  "data-nexus-interview-review",
  "data-nexus-interview-cancel",
  "guidedMode: true",
  "event.stopImmediatePropagation?.()",
  "saveNexusRuntimeMemory()",
  "renderUserWorkspace()"
].forEach(token => includes(handlerSource, token, `interview click handler includes ${token}`));

[
  "const interviewEventTarget = event.target?.closest ? event.target : event.target?.parentElement;",
  "[data-nexus-guided-save],[data-nexus-interview-skip],[data-nexus-interview-correct],[data-nexus-interview-review],[data-nexus-interview-cancel],[data-nexus-guided-back]",
  "return handleNexusUserExperienceMaximizationClick(event);"
].forEach(token => includes(app, token, `capture-phase interview control bridge ${token}`));

[
  ".nexus-contextual-interview-engine",
  ".nexus-interview-error",
  ".nexus-interview-helper",
  ".nexus-interview-review",
  ".nexus-interview-review dl",
  "@media (max-width: 780px)",
  "body.user-mode .nexus-interview-review dl {\n    grid-template-columns: 1fr;"
].forEach(token => includes(styles, token, `interview CSS ${token}`));

[
  "Send externally, contact a provider",
  "No external action has been executed.",
  "No external action is executed from this interview.",
  "without changing any dose",
  "without paying"
].forEach(token => includes(app, token, `interview safety boundary copy ${token}`));

assert(
  pkg.scripts["qa:nexus-os-contextual-interview-engine"] === "node scripts/nexus-os-contextual-interview-engine-qa.js",
  "package alias exists"
);
assert(suite.includes("scripts/nexus-os-contextual-interview-engine-qa.js"), "safe QA suite includes Rail 10 QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS contextual interview engine QA passed.");
