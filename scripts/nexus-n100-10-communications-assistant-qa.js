const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const communications = require("../server/nexus-n100-communications-assistant.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-communications-assistant.js");
  const doc = read("docs", "NEXUS_N100_10_COMMUNICATIONS_ASSISTANT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-communications-assistant.js"), "N100-10 communications module must exist.");
  assert(exists("docs", "NEXUS_N100_10_COMMUNICATIONS_ASSISTANT.md"), "N100-10 documentation must exist.");
  assert(exists("scripts", "nexus-n100-10-communications-assistant-qa.js"), "N100-10 QA must exist.");

  [
    "SUPPORTED_DRAFT_TYPES",
    "BLOCKED_COMMUNICATION_ACTIONS",
    "createN100CommunicationDraft",
    "blockedCommunicationResponse",
    "sendSupported: false",
    "callSupported: false",
    "providerContactSupported: false"
  ].forEach(term => assert(source.includes(term), `N100-10 source must include ${term}.`));

  [
    "communication drafting assistant",
    "does not send",
    "blocked no-send",
    "no provider handoff"
  ].forEach(term => assert(doc.includes(term), `N100-10 documentation must include ${term}.`));

  [
    "nexus-n100-communications-assistant",
    "createN100CommunicationDraft",
    "blockedCommunicationResponse"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-10 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-10 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-10 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "setInterval",
    "setTimeout",
    "navigator.geolocation",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "sendMail(",
    "sendMessage(",
    "twilio",
    "whatsapp://",
    "mailto:",
    "tel:",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-10 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-10-communications-assistant"],
    "node scripts/nexus-n100-10-communications-assistant-qa.js",
    "N100-10 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-10-communications-assistant-qa.js"), "N100-10 QA must be wired into local-safe suites.");
}

function assertDraft(prompt, expectedType) {
  const draft = communications.createN100CommunicationDraft({
    prompt,
    topic: prompt,
    nowIso: "2026-06-28T15:00:00.000Z"
  });
  assert.equal(communications.isSafeN100CommunicationDraft(draft), true, `${prompt} must produce safe draft.`);
  assert.equal(draft.draftType, expectedType, `${prompt} draft type mismatch.`);
  assert.equal(draft.status, "draft_prepared_for_user_review", `${prompt} must prepare draft only.`);
  assert.equal(draft.sendSupported, false, `${prompt} must not support send.`);
  assert.equal(draft.callSupported, false, `${prompt} must not support calls.`);
  assert.equal(draft.providerContactSupported, false, `${prompt} must not support provider contact.`);
  assert.equal(draft.canExecute, false, `${prompt} must not execute.`);
  communications.BLOCKED_COMMUNICATION_ACTIONS.forEach(action => {
    assert(draft.blockedActions.includes(action), `${prompt} must block ${action}.`);
  });
}

function assertSupportedDrafts() {
  assertDraft("Draft a message to this training provider.", "training_inquiry_draft");
  assertDraft("Write questions I should ask.", "provider_questions");
  assertDraft("Make this sound professional.", "professional_rewrite");
  assertDraft("Prepare a call script.", "call_script");
  assertDraft("Create an email draft.", "email_draft");
  assertDraft("Draft a job inquiry to an employer.", "job_inquiry_draft");
}

function assertBlockedExecutionPrompts() {
  [
    "Send it.",
    "Call the provider.",
    "Send WhatsApp to the seller.",
    "Send the message now."
  ].forEach(prompt => {
    const blocked = communications.createN100CommunicationDraft({ prompt });
    assert.equal(blocked.status, "blocked_no_send", `${prompt} must be blocked.`);
    assert.equal(communications.isSafeN100CommunicationDraft(blocked), true, `${prompt} blocked payload must be safe.`);
    assert.equal(blocked.canExecute, false, `${prompt} must not execute.`);
    assert.equal(blocked.noProviderContactAuthorized, true, `${prompt} must not contact provider.`);
  });
}

function runN100CommunicationsAssistantQa() {
  assertStaticSafety();
  assertSupportedDrafts();
  assertBlockedExecutionPrompts();

  console.log(JSON.stringify({
    phase: "N100-10",
    supportedDraftTypes: communications.SUPPORTED_DRAFT_TYPES,
    blockedCommunicationActions: communications.BLOCKED_COMMUNICATION_ACTIONS,
    standardUserRuntimeActivated: false,
    noSendAuthorized: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-10-communications-assistant-qa] passed");
}

if (require.main === module) {
  try {
    runN100CommunicationsAssistantQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100CommunicationsAssistantQa
});
