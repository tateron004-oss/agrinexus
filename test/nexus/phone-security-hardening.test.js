"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function gatherRouteBody() {
  const start = source.indexOf('url.pathname === "/api/voice/phone/gather" && req.method === "POST"');
  assert.notEqual(start, -1, "could not locate the phone gather route");
  const end = source.indexOf('url.pathname === "/api/nexus/provider-abstraction/status"', start);
  assert.notEqual(end, -1);
  return source.slice(start, end);
}

function incomingRouteBody() {
  const start = source.indexOf('url.pathname === "/api/voice/phone/incoming" && req.method === "POST"');
  assert.notEqual(start, -1, "could not locate the phone incoming route");
  const end = source.indexOf('url.pathname === "/api/voice/phone/gather" && req.method === "POST"', start);
  assert.notEqual(end, -1);
  return source.slice(start, end);
}

function outboundRouteBody() {
  const start = source.indexOf('url.pathname === "/api/voice/phone/outbound-twiml"');
  assert.notEqual(start, -1, "could not locate the phone outbound-twiml route");
  const end = source.indexOf('url.pathname === "/api/voice/phone/incoming"', start);
  assert.notEqual(end, -1);
  return source.slice(start, end);
}

// --- Critical fix 1: real caller authorization, wired into every route that can reach it ---

test("the gather route refuses an unauthorized caller before any command execution, never falling back to a default identity", () => {
  const body = gatherRouteBody();
  assert.match(body, /const phoneUser = resolveAuthorizedPhoneCaller\(db, body\);/);
  const guardIndex = body.indexOf("if (!phoneUser) {");
  assert.notEqual(guardIndex, -1, "an unauthorized caller must be explicitly refused");
  const dispatchIndex = body.indexOf("runNexusOpenAiNativeAgentCommand(db, phoneUser,");
  assert.ok(guardIndex < dispatchIndex, "the authorization refusal must happen before real command dispatch");
  const guardBlock = body.slice(guardIndex, dispatchIndex);
  assert.match(guardBlock, /<Hangup\/>/, "an unauthorized caller must be declined and the call ended, not silently continued");
  assert.doesNotMatch(guardBlock, /phoneVoiceUser/);
});

test("the incoming route also refuses an unauthorized caller immediately, not just at gather", () => {
  const body = incomingRouteBody();
  assert.match(body, /resolveAuthorizedPhoneCaller\(db, body\)/);
  assert.match(body, /<Hangup\/>/);
});

test("phoneVoiceUser (the old unconditional-Admin-access function) no longer exists anywhere", () => {
  assert.doesNotMatch(source, /function phoneVoiceUser\(/);
});

test("phone call logging redacts the caller's number instead of writing it in the clear", () => {
  const body = gatherRouteBody();
  assert.match(body, /redactPhoneNumber\(phoneExternalPartyNumber\(body\)\)/);
});

// --- Critical fix 2: a phone "yes" cannot confirm a pending action from another context ---

test("runAgentCommand only honors a pending action for a phone turn when it was staged no earlier than this call session started", () => {
  const start = source.indexOf("const topPendingAction = (() => {");
  assert.notEqual(start, -1, "the pending-action channel/timing guard must exist");
  const end = source.indexOf("if (topPendingAction?.phase4HighRisk && isVagueConfirmationCommand(lower)) {", start);
  const guardBlock = source.slice(start, end);
  assert.match(guardBlock, /options\.inputMode === "phone"/);
  assert.match(guardBlock, /options\.sessionStartedAt/);
  assert.match(guardBlock, /stagedAt < sessionStart/, "a pending action staged before this call started must be treated as not applicable");
});

test("the phone gather route threads its own session start time into the dispatcher chain", () => {
  const body = gatherRouteBody();
  assert.match(body, /sessionStartedAt: session\.createdAt/);
});

test("runCompanionSafeAgentCommand forwards inputMode and sessionStartedAt into runAgentCommand's options", () => {
  const start = source.indexOf("const rawResult = await runAgentCommand(db, user, command, {");
  assert.notEqual(start, -1);
  const end = source.indexOf("});", start);
  const block = source.slice(start, end);
  assert.match(block, /inputMode,/);
  assert.match(block, /sessionStartedAt: body\.sessionStartedAt \|\| null/);
});

// --- Cost/DoS: a real maximum-turn cap ---

test("a phone call has a real, enforced maximum turn count before real command dispatch", () => {
  assert.match(source, /const PHONE_CALL_MAX_TURNS = Number\(process\.env\.PHONE_CALL_MAX_TURNS \|\| 40\);/);
  const body = gatherRouteBody();
  const capIndex = body.indexOf("if (turnCount > PHONE_CALL_MAX_TURNS)");
  assert.notEqual(capIndex, -1);
  const dispatchIndex = body.indexOf("runNexusOpenAiNativeAgentCommand(db, phoneUser,");
  assert.ok(capIndex < dispatchIndex, "the turn cap must be checked before dispatching another real command");
  assert.match(body.slice(capIndex, dispatchIndex), /<Hangup\/>/, "exceeding the cap must end the call, not loop forever");
});

// Found live (phone bridge correctness audit): the turn cap above is only
// ever reached when Twilio recognized speech/digits (the `command` branch).
// The `!command` branch -- hit on background noise, a bad line, or a caller
// who says nothing -- returned a fresh <Gather> immediately without ever
// touching session.turnCount, so it could loop forever with no cap at all,
// keeping a real Twilio call open indefinitely and billing a real OpenAI
// TTS retry-prompt call every turn.
test("the empty-speech/no-command retry branch also increments and checks the same turn cap, not just the recognized-command branch", () => {
  const body = gatherRouteBody();
  const emptyBranchStart = body.indexOf("if (!command) {");
  assert.notEqual(emptyBranchStart, -1, "could not find the empty-command retry branch");
  const emptyBranchEnd = body.indexOf('if (step === "name" && !skippedNameWithCommand) {', emptyBranchStart);
  assert.notEqual(emptyBranchEnd, -1);
  const emptyBranch = body.slice(emptyBranchStart, emptyBranchEnd);
  assert.match(emptyBranch, /silentTurnCount = Number\(session\.turnCount \|\| 0\) \+ 1/, "the empty-command branch must track its own turn count");
  assert.match(emptyBranch, /if \(silentTurnCount > PHONE_CALL_MAX_TURNS\)/, "the empty-command branch must check the same cap");
  assert.match(emptyBranch, /<Hangup\/>/, "exceeding the cap on silent turns must end the call, not loop forever");
  assert.match(emptyBranch, /updatePhoneVoiceSession\(db, session, \{ turnCount: silentTurnCount \}\)/, "a silent turn under the cap must still persist its incremented count for the next request");
});

// --- The unauthenticated call-screening flow had no cap at all ---

test("the unauthenticated call-screening flow's empty-speech retry also has a real turn cap, not an unbounded loop", () => {
  const start = source.indexOf('url.pathname === "/api/voice/phone/screening-gather" && req.method === "POST"');
  assert.notEqual(start, -1, "could not locate the screening-gather route");
  const end = source.indexOf('url.pathname === "/api/voice/phone/screening-dial-result"', start);
  assert.notEqual(end, -1);
  const body = source.slice(start, end);
  const emptyBranchStart = body.indexOf("if (!statement) {");
  assert.notEqual(emptyBranchStart, -1);
  const emptyBranchEnd = body.indexOf("const callSid = String(body.CallSid", emptyBranchStart);
  assert.notEqual(emptyBranchEnd, -1);
  const emptyBranch = body.slice(emptyBranchStart, emptyBranchEnd);
  assert.match(emptyBranch, /getPhoneVoiceSession\(db, phoneSessionKey\(body, "screening"\)\)/, "the screening flow must track turns per call, like the authorized gather flow does");
  assert.match(emptyBranch, /if \(silentTurnCount > PHONE_CALL_MAX_TURNS\)/, "must check the same cap");
  assert.match(emptyBranch, /<Hangup\/>/, "exceeding the cap must end the call, not loop forever");
});

// --- A dispatcher exception must produce valid TwiML, never the generic JSON 500 ---

test("an exception from either dispatcher is caught locally and answered with real TwiML, not left to the global JSON error handler", () => {
  const body = gatherRouteBody();
  const tryIndex = body.indexOf("try {");
  const catchIndex = body.indexOf("} catch (error) {", tryIndex);
  assert.ok(tryIndex > 0 && catchIndex > tryIndex, "the dispatch calls must be wrapped in their own try/catch");
  const catchBlock = body.slice(catchIndex, body.indexOf("}\n    if (!result", catchIndex) + 1);
  assert.match(catchBlock, /twimlResponse\(res,/, "the catch block must still answer with valid TwiML");
  assert.match(catchBlock, /<Response>/);
  assert.doesNotMatch(catchBlock, /send\(res, 500,/, "a phone-call failure must not fall through to the generic JSON error response");
});

test("a malformed dispatcher result (missing .response) cannot throw before a safe default is applied", () => {
  const body = gatherRouteBody();
  assert.match(body, /if \(!result \|\| typeof result\.response !== "string"\) result = \{ response: "Command completed\." \};/);
});

// --- Caller-facing error text must not read out internal jargon ---

test("a provider-error result is spoken as a generic apology, not the raw internal error category", () => {
  const body = gatherRouteBody();
  const spokenTextIndex = body.indexOf("const spokenText =");
  assert.notEqual(spokenTextIndex, -1);
  const block = body.slice(spokenTextIndex, body.indexOf(";", body.indexOf("phoneVoicePrompt(spokenText", spokenTextIndex)));
  assert.match(block, /provider-error/);
  assert.match(block, /Sorry, I could not complete that/);
});

// --- Session eviction must be recency-based, not creation-position-based ---

test("updatePhoneVoiceSession re-positions the session to the front on every update, so an active call is never evicted mid-conversation", () => {
  const start = source.indexOf("function updatePhoneVoiceSession(db, session, patch = {}) {");
  assert.notEqual(start, -1);
  const end = source.indexOf("\nfunction ", start + 10);
  const block = source.slice(start, end);
  assert.match(block, /filter\(item => item !== session\)/, "the session must be removed from its old position");
  assert.match(block, /sessions\.unshift\(session\)/, "and re-inserted at the front, marking it as most-recently-active");
});

// --- Lazy TTS: the rarely-heard silence-fallback lines must not cost a real TTS call on every request ---

test("the outbound-twiml and incoming routes use Twilio's own voice for their rarely-heard silence fallback, not a real OpenAI TTS call every time", () => {
  const outbound = outboundRouteBody();
  assert.match(outbound, /const noResponsePrompt = twilioSay\(/);
  assert.doesNotMatch(outbound, /await phoneVoicePrompt\("I did not hear a response/);

  const incoming = incomingRouteBody();
  assert.match(incoming, /const noCommand = twilioSay\(/);
  assert.doesNotMatch(incoming, /await phoneVoicePrompt\("I did not hear your name/);
});
