const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const documents = require("../server/nexus-n100-document-form-assistant.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-document-form-assistant.js");
  const doc = read("docs", "NEXUS_N100_14_DOCUMENT_FORM_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-document-form-assistant.js"), "N100-14 document/form module must exist.");
  assert(exists("docs", "NEXUS_N100_14_DOCUMENT_FORM_ASSISTANT.md"), "N100-14 documentation must exist.");
  assert(exists("scripts", "nexus-n100-14-document-form-assistant-qa.js"), "N100-14 QA must exist.");

  [
    "SUPPORTED_DOCUMENT_ARTIFACTS",
    "BLOCKED_DOCUMENT_ACTIONS",
    "createN100DocumentFormArtifact",
    "noFileUploadAuthorized",
    "noFormSubmissionAuthorized",
    "noIdentityDocumentSharingAuthorized"
  ].forEach(term => assert(source.includes(term), `N100-14 source must include ${term}.`));

  [
    "preparing document and form guidance",
    "without uploading, submitting, signing, sending, storing, or sharing documents",
    "not loaded by `public/app.js`, `public/index.html`, or `server.js`"
  ].forEach(term => assert(doc.includes(term), `N100-14 documentation must include ${term}.`));

  [
    "nexus-n100-document-form-assistant",
    "createN100DocumentFormArtifact",
    "SUPPORTED_DOCUMENT_ARTIFACTS"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-14 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-14 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-14 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "FormData(",
    "input type=\"file\"",
    "submitForm(",
    "uploadFile(",
    "signDocument(",
    "sendDocument(",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-14 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-14-document-form-assistant"],
    "node scripts/nexus-n100-14-document-form-assistant-qa.js",
    "N100-14 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-14-document-form-assistant-qa.js"), "N100-14 QA must be wired into local-safe suites.");
}

function assertArtifact(prompt, expectedType) {
  const artifact = documents.createN100DocumentFormArtifact({
    prompt,
    topic: prompt,
    nowIso: "2026-06-28T20:00:00.000Z"
  });
  assert.equal(documents.isSafeN100DocumentFormArtifact(artifact), true, `${prompt} must be safe.`);
  assert.equal(artifact.artifactType, expectedType, `${prompt} artifact type mismatch.`);
  assert.equal(artifact.canExecute, false, `${prompt} must not execute.`);
  assert.equal(artifact.executionAuthority, "none", `${prompt} must have no execution authority.`);
  assert.equal(artifact.safetyPosture.noFileUploadAuthorized, true, `${prompt} must not upload files.`);
  assert.equal(artifact.safetyPosture.noFormSubmissionAuthorized, true, `${prompt} must not submit forms.`);
  documents.BLOCKED_DOCUMENT_ACTIONS.forEach(action => {
    assert(artifact.blockedActions.includes(action), `${prompt} must block ${action}.`);
  });
}

function assertSupportedArtifacts() {
  assertArtifact("Prepare a document checklist for my job application.", "application_draft");
  assertArtifact("Help me fill this training form.", "form_fill_guidance");
  assertArtifact("Prepare resume notes for farm work.", "resume_notes");
  assertArtifact("Draft a cover letter outline.", "cover_letter_outline");
  assertArtifact("Prepare an evidence packet outline.", "evidence_packet_outline");
  assertArtifact("Give me review questions before I submit.", "review_questions");
}

function assertBlockedDocumentExecution() {
  [
    "Upload my file.",
    "Submit the form now.",
    "Sign this document.",
    "Send the document to the provider.",
    "Create an account for me."
  ].forEach(prompt => {
    const artifact = documents.createN100DocumentFormArtifact({ prompt });
    assert.equal(documents.isSafeN100DocumentFormArtifact(artifact), true, `${prompt} blocked artifact must be safe.`);
    assert.equal(artifact.artifactType, "blocked_document_execution", `${prompt} must be blocked.`);
    assert.equal(artifact.status, "blocked_no_document_execution", `${prompt} must not execute.`);
  });
}

function runN100DocumentFormAssistantQa() {
  assertStaticSafety();
  assertSupportedArtifacts();
  assertBlockedDocumentExecution();

  console.log(JSON.stringify({
    phase: "N100-14",
    supportedDocumentArtifacts: documents.SUPPORTED_DOCUMENT_ARTIFACTS,
    blockedDocumentActions: documents.BLOCKED_DOCUMENT_ACTIONS,
    standardUserRuntimeActivated: false,
    noFileUploadAuthorized: true,
    noFormSubmissionAuthorized: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-14-document-form-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100DocumentFormAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100DocumentFormAssistantQa
});
