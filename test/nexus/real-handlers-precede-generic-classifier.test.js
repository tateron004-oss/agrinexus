"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const appJsPath = path.join(__dirname, "..", "..", "public", "app.js");
const source = fs.readFileSync(appJsPath, "utf8");

function bodyOf(functionSignaturePrefix) {
  const start = source.indexOf(functionSignaturePrefix);
  assert.ok(start > 0, `could not locate ${functionSignaturePrefix}`);
  const nextFn = source.indexOf("\nfunction ", start + 10);
  const nextAsyncFn = source.indexOf("\nasync function ", start + 10);
  const candidates = [nextFn, nextAsyncFn].filter(index => index > 0);
  const end = candidates.length ? Math.min(...candidates) : source.length;
  return source.slice(start, end);
}

// Found live: a farm/marketplace/workforce/trade command matching
// routeNexusIntentDrivenWorkflowCommand's generic keyword classifier (e.g.
// "add job opportunity", "create transaction") was intercepted into a
// decorative workflow card instead of ever reaching the real action --
// isNexusPersistentOperationsCommand/runNexusPersistentOperationsCommand,
// the real dispatcher, must run first. Same failure shape as the
// already-fixed crisis-safety bug (routeNexusIntentDrivenWorkflowCommand
// winning before a real handler), just for these four areas.
test("routeNexusCommandCenterCommunicationSubmit checks the real operations dispatcher before the generic intent-driven workflow router", () => {
  const body = bodyOf("function routeNexusCommandCenterCommunicationSubmit(");
  const realHandlerIndex = body.indexOf("isNexusPersistentOperationsCommand(command)");
  const genericClassifierIndex = body.indexOf("routeNexusIntentDrivenWorkflowCommand(command");
  assert.ok(realHandlerIndex > 0, "isNexusPersistentOperationsCommand is not checked in this dispatcher");
  assert.ok(genericClassifierIndex > 0, "routeNexusIntentDrivenWorkflowCommand is not checked in this dispatcher");
  assert.ok(realHandlerIndex < genericClassifierIndex, "the real operations dispatcher must run before the generic classifier");
});

// Found live: this is the flagship home-screen composer -- the primary
// typed fallback whenever voice is unavailable -- and it had three separate
// gaps: no path to the real operations dispatcher, no path to the real
// knowledge-search handler, and the one real handler it DID have
// (handleNexusUnifiedBrainRuntimeCommand) ran AFTER the decorative generic
// classifier instead of before it.
test("handleNexusPresenceCommandSendSubmit checks all three real handlers (operations, knowledge search, unified brain runtime) before the generic intent-driven workflow router", () => {
  const body = bodyOf("async function handleNexusPresenceCommandSendSubmit(");
  const operationsIndex = body.indexOf("isNexusPersistentOperationsCommand(command)");
  const knowledgeIndex = body.indexOf("isNexusLiveKnowledgeQuestion(command)");
  const unifiedBrainIndex = body.indexOf("await handleNexusUnifiedBrainRuntimeCommand(command");
  const genericClassifierIndex = body.indexOf("routeNexusIntentDrivenWorkflowCommand(command");
  assert.ok(operationsIndex > 0, "isNexusPersistentOperationsCommand is not checked in this dispatcher");
  assert.ok(knowledgeIndex > 0, "isNexusLiveKnowledgeQuestion is not checked in this dispatcher");
  assert.ok(unifiedBrainIndex > 0, "handleNexusUnifiedBrainRuntimeCommand is not checked in this dispatcher");
  assert.ok(genericClassifierIndex > 0, "routeNexusIntentDrivenWorkflowCommand is not checked in this dispatcher");
  assert.ok(operationsIndex < genericClassifierIndex, "the real operations dispatcher must run before the generic classifier");
  assert.ok(knowledgeIndex < genericClassifierIndex, "the real knowledge-search handler must run before the generic classifier");
  assert.ok(unifiedBrainIndex < genericClassifierIndex, "the real authoritative backend must run before the generic classifier");
});

// isNexusPersistentOperationsCommand's own keyword list -- confirms the
// exact real-world phrases from the audit ("add job opportunity", "create
// transaction") really are covered by the check just wired in above, not
// just a check that exists but never actually matches these phrases.
test("isNexusPersistentOperationsCommand recognizes the real-world farm/marketplace/workforce/trade phrases found live", () => {
  const fnBody = bodyOf("function isNexusPersistentOperationsCommand(");
  const regexMatch = fnBody.match(/return (\/\\b\(.*\)\\b\/i)\.test/);
  assert.ok(regexMatch, "could not extract isNexusPersistentOperationsCommand's regex");
  // eslint-disable-next-line no-eval -- reconstructing the real, already-reviewed regex literal from source, not arbitrary input
  const pattern = eval(regexMatch[1]);
  for (const phrase of ["add job opportunity, warehouse worker in Lagos", "create transaction for 200kg maize", "add buyer for maize", "add seller for tomatoes"]) {
    assert.ok(pattern.test(phrase), `expected isNexusPersistentOperationsCommand to match: ${phrase}`);
  }
});
