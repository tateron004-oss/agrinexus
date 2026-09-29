"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const runtime = require("../../public/nexus-full-communication-runtime.js");

// Found live: detectChannel()'s sms regex required the literal two-word phrase "text the", so
// natural phrasings like "text John", "send a text to Sarah", or "text him the update" all fell
// through to the default "notification" channel instead of "sms". Since "notification" is not in
// isSensitive()'s sensitive-channel list, this could also silently drop a requiresConfirmation flag
// that a real SMS-intent message should carry, on top of mislabeling the channel shown to the user.
// This runtime is wired into real typed/voice command handling in app.js
// (handleNexusFullCommunicationRuntimeCommand, reached from typed-command-submit/keyboard and voice
// paths) via shouldHandleBeforeLegacy(), so this is genuinely reachable, not dead code.

test("a natural 'text <name>' phrasing is classified as sms, not the default notification channel", () => {
  const request = runtime.buildCommunicationRequest("text John the delivery update");
  assert.equal(request.communicationChannel, "sms");
});

test("'send a text to Sarah' is also classified as sms", () => {
  const request = runtime.buildCommunicationRequest("send a text to Sarah about the shipment");
  assert.equal(request.communicationChannel, "sms");
});

test("the original 'text message'/'text the' phrasings still classify as sms, unaffected by the fix", () => {
  assert.equal(runtime.buildCommunicationRequest("send a text message to the driver").communicationChannel, "sms");
  assert.equal(runtime.buildCommunicationRequest("text the clinic about my appointment").communicationChannel, "sms");
});

test("bare 'sms' still classifies as sms, unaffected by the fix", () => {
  assert.equal(runtime.buildCommunicationRequest("sms my supplier").communicationChannel, "sms");
});
