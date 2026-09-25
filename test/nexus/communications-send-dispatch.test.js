"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { isUnifiedBrainCommand, shouldHandleBeforeLegacy } = require("../../public/nexus-unified-brain-runtime.js");

// Found live: "Text +254712345678 saying I'm on my way" and "Email
// jane@example.com saying the delivery is ready" only ever matched ONE
// domain here ("communication"), since a genuine send request has no second
// classifyDomains keyword unless the message body happens to mention one.
// The >=2-domain requirement then rejected it, so it fell through past this
// runtime entirely into the client-side draft-preparation runtimes
// (NexusMessagePreparationRuntime/NexusFullCommunicationRuntime, which only
// ever draft a message locally and never send anything) instead of reaching
// this runtime's real, governed communications.send executor
// (nexus/communications/executor.js, which calls the real
// twilioProvider/emailProvider). Mirrors nexus/brain/planner.js's own
// sendMessagePlan/callPlan matchers (SEND_OPENER/SEND_PHONE/SEND_EMAIL/
// CALL_OPENER), so client and server agree on what counts as a genuine send.
test("genuine send/call commands with a real recipient are recognized even though they only match one classifyDomains domain", () => {
  for (const command of [
    "Text +254712345678 saying I'm on my way",
    "Send a text to +15105019401 saying the delivery is ready",
    "Email jane@example.com saying the shipment left today",
    "WhatsApp amina@example.com saying the order shipped",
    "Call +15105019401 and say I am on my way"
  ]) {
    assert.equal(isUnifiedBrainCommand(command), true, command);
    assert.equal(shouldHandleBeforeLegacy(command), true, command);
  }
});

// A vague, no-recipient message-preparation request must still fall through
// to the local draft-preparation runtimes exactly as before -- that is
// legitimate behavior (mirrors the server's own completeCommunicationPlan
// draft-with-consent path), not something this bypass should widen.
test("a vague message request with no real recipient is unaffected by the new bypass", () => {
  assert.equal(isUnifiedBrainCommand("Draft a message to send later"), false);
  assert.equal(isUnifiedBrainCommand("Prepare a follow-up email"), false);
});

// "Call it a day" / "call me a taxi" style phrases must not be mistaken for
// a real phone call just because they start with "call" -- only a real
// phone number in the text qualifies, matching planner.js's own callPlan.
test("a 'call' phrase with no phone number is unaffected by the new bypass", () => {
  assert.equal(isUnifiedBrainCommand("Call it a day"), false);
  assert.equal(isUnifiedBrainCommand("Can you call me a taxi"), false);
});
