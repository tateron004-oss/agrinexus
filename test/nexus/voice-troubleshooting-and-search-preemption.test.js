"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const appJsPath = path.join(__dirname, "..", "..", "public", "app.js");
const appSource = fs.readFileSync(appJsPath, "utf8");

function bodyOf(source, functionSignaturePrefix) {
  const start = source.indexOf(functionSignaturePrefix);
  assert.ok(start > 0, `could not locate ${functionSignaturePrefix}`);
  const nextFn = source.indexOf("\nfunction ", start + 10);
  const nextAsyncFn = source.indexOf("\nasync function ", start + 10);
  const candidates = [nextFn, nextAsyncFn].filter(index => index > 0);
  const end = candidates.length ? Math.min(...candidates) : source.length;
  return source.slice(start, end);
}

// Found live (dispatch-wiring audit): handleNexusUnifiedBrainRuntimeCommand
// is the ONLY thing handleVoiceCommand -- the real entry point for actual
// spoken voice -- delegates to, and it never checked voice troubleshooting
// at all, making "can you hear me" unreachable from real speech.
test("handleNexusUnifiedBrainRuntimeCommand checks voice troubleshooting", () => {
  const body = bodyOf(appSource, "async function handleNexusUnifiedBrainRuntimeCommand(");
  assert.match(body, /handleNexusVoiceTroubleshootingCommand\(text/);
});

// Found live: this dispatcher (global command box, caption-panel Send) had
// no path to voice troubleshooting at all, direct or indirect.
test("handleNexusStandardUserSafeTypedCommand checks voice troubleshooting", () => {
  const body = bodyOf(appSource, "function handleNexusStandardUserSafeTypedCommand(");
  assert.match(body, /handleNexusVoiceTroubleshootingCommand\(command/);
});

// Found live (maps/health audit): the same generic-classifier-preemption
// shape as the crisis-safety and farm/marketplace/workforce/trade bugs was
// also possible for maps.view/health.record/telehealth.prepare/clinic.find/
// pharmacy.find -- these real search-style handlers are only reachable
// through the authoritative runtime, which must run before the decorative
// generic classifier, not after it.
test("routeNexusCommandCenterCommunicationSubmit checks the authoritative runtime (maps/health/telehealth/clinic/pharmacy) before the generic intent-driven workflow router", () => {
  const body = bodyOf(appSource, "function routeNexusCommandCenterCommunicationSubmit(");
  const realHandlerIndex = body.indexOf("window.NexusUnifiedBrainRuntime?.shouldHandleBeforeLegacy?.(command");
  const genericClassifierIndex = body.indexOf("routeNexusIntentDrivenWorkflowCommand(command");
  assert.ok(realHandlerIndex > 0, "the authoritative runtime check is not present in this dispatcher");
  assert.ok(genericClassifierIndex > 0, "routeNexusIntentDrivenWorkflowCommand is not checked in this dispatcher");
  assert.ok(realHandlerIndex < genericClassifierIndex, "the authoritative runtime must run before the generic classifier");
});

const plannerJsPath = path.join(__dirname, "..", "..", "nexus", "brain", "planner.js");
const plannerSource = fs.readFileSync(plannerJsPath, "utf8");

// Found live: the server-side live-knowledge detector was narrower than the
// client's own definition -- "what's the market price for maize?" satisfies
// the client's definition but not the server's, so any caller relying on
// the server planner alone never resolved it to a real search.
test("completeLiveKnowledgePlan now recognizes 'market price'/'price for' phrasing, matching the client's own definition", () => {
  const fnStart = plannerSource.indexOf("function completeLiveKnowledgePlan(");
  const fnEnd = plannerSource.indexOf("\nfunction ", fnStart + 10);
  const fn = plannerSource.slice(fnStart, fnEnd);
  assert.match(fn, /market price\|price for/);
});

// Regression guard for the exact bug this same change caused and had to be
// reverted from once already tonight: a bare "today"/"now" weather question
// must never be swept into the live-knowledge planner.
test("completeLiveKnowledgePlan's widening does not swallow ordinary weather phrasing", () => {
  const fnStart = plannerSource.indexOf("function completeLiveKnowledgePlan(");
  const fnEnd = plannerSource.indexOf("\nfunction ", fnStart + 10);
  const fn = plannerSource.slice(fnStart, fnEnd);
  assert.doesNotMatch(fn, /\btoday\|now\|recent\b/, "today/now/recent must not be re-added -- they collide with the weather-forecast planner");
});
