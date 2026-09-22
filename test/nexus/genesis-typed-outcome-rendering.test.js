"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

// Confirmed live in production (2026-09-17): a real, verified typed-command
// outcome for ANY workspace using the generic outcome renderer (reminders,
// business, communications, operations, and more) never became visible to
// the user. Traced to three separate, stacked bugs, all in public/app.js:
// (1) renderNexusPassiveWorkspace never set nexusTrueExperienceSessionStarted,
// so nexusTrueExperienceMode() never returned "mission" -- the one mode
// whose markup includes the #nexus-workspace outcome host at all; (2) even
// in "mission" mode, renderNexusAgenticMissionWorkspace only recognized the
// real-voice bridge's "openai-realtime" source, never the typed-outcome
// path's own "nexus-authoritative-typed-outcome" source, so it rendered a
// generic mission-snapshot panel instead of the real active-workflow
// surface; (3) even past both of those, nexusAdapterTypeForLane(lane = {})
// crashed on an explicitly-passed `lane: null` (a real, valid "no provider
// lane" case from buildNexusVerifiedExecutionAttemptRecord's own default),
// since a default parameter only substitutes for `undefined`, not `null`.
// Verified live end-to-end against production after all three fixes: a real
// typed "remind me..." command correctly showed the real Reminders
// active-workflow surface with no crash and no stale-workflow fallback.

function extractFunction(name, nextMarker) {
  const start = appSource.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate ${name} in app.js`);
  const end = appSource.indexOf(nextMarker, start);
  assert.ok(end > start, `could not find the end marker for ${name} in app.js`);
  return appSource.slice(start, end);
}

test("nexusAdapterTypeForLane tolerates an explicitly-null lane and packet instead of crashing", () => {
  const source = extractFunction("nexusAdapterTypeForLane", "\nfunction ");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(source + "\nthis.run = nexusAdapterTypeForLane;", sandbox);
  // The real, reachable case: buildNexusVerifiedExecutionAttemptRecord's own
  // signature defaults lane to `null`, not `{}` -- must not throw.
  assert.doesNotThrow(() => sandbox.run(null, null));
  assert.doesNotThrow(() => sandbox.run(null, { packetType: "email" }));
  assert.equal(sandbox.run(null, { packetType: "email" }), "email");
  assert.doesNotThrow(() => sandbox.run(undefined, undefined));
});

test("renderNexusPassiveWorkspace marks the true-experience session started for every real outcome", () => {
  const start = appSource.indexOf("async function renderNexusPassiveWorkspace(");
  const end = appSource.indexOf("\nfunction verifyNexusYouTubePlaybackStarted(", start);
  assert.ok(start > 0 && end > start, "could not locate renderNexusPassiveWorkspace in app.js");
  const body = appSource.slice(start, end);
  const flagIndex = body.indexOf("nexusTrueExperienceSessionStarted = true;");
  const branchIndex = body.indexOf('if (presentation.kind === "map")');
  assert.ok(flagIndex > 0, "renderNexusPassiveWorkspace must set nexusTrueExperienceSessionStarted");
  assert.ok(flagIndex < branchIndex, "the session-started flag must be set before any presentation-kind branch, so it applies to every workspace, not just some");
});

test("renderNexusAgenticMissionWorkspace recognizes the typed authoritative-outcome source, not just real voice", () => {
  const declStart = appSource.indexOf("const NEXUS_ACTIVE_WORKFLOW_SOURCES");
  assert.ok(declStart > 0, "could not locate NEXUS_ACTIVE_WORKFLOW_SOURCES in app.js");
  const declEnd = appSource.indexOf(";", declStart);
  const decl = appSource.slice(declStart, declEnd);
  assert.match(decl, /"openai-realtime"/);
  assert.match(decl, /"nexus-authoritative-typed-outcome"/);

  const fnStart = appSource.indexOf("function renderNexusAgenticMissionWorkspace(");
  assert.ok(fnStart > declEnd, "renderNexusAgenticMissionWorkspace must be defined after the sources set");
  const fnSnippet = appSource.slice(fnStart, fnStart + 400);
  assert.match(fnSnippet, /NEXUS_ACTIVE_WORKFLOW_SOURCES\.has\(/, "the function must actually consult the widened source set, not just define it nearby");
});

test("documents outcomes without a create/save/reopen lifecycle still render as a plain card, without a false editor", () => {
  // documents.read (listing/fetching saved documents) and a create whose
  // indexing step failed carry no documentId/savedVersion/reopenVerified.
  // renderNexusAuthoritativeDocument used to return null for them, so a real
  // result rendered as nothing. It must fall back to the generic data card,
  // and must NOT add the "saved and reopened" editor/status that only a real
  // lifecycle earns.
  const source = extractFunction("nexusDocumentLifecycleComplete", "\nfunction renderNexusAuthoritativeDocument(")
    + extractFunction("renderNexusAuthoritativeDocument", "\nfunction nexusMapOutcomeVerified(");
  const created = [];
  const sandbox = {
    renderNexusAuthoritativeData: () => { const s = { dataset: {}, children: [], append(...n) { this.children.push(...n); } }; created.push(s); return s; },
    document: { createElement: () => ({ dataset: {}, setAttribute() {}, addEventListener() {} }) }
  };
  vm.createContext(sandbox);
  vm.runInContext(source + "\nthis.run = renderNexusAuthoritativeDocument;", sandbox);

  const readResult = sandbox.run({ data: { request: "Show my saved documents", found: true, documents: [] } });
  assert.ok(readResult, "a documents.read result must still produce a visible surface");
  assert.equal(readResult.children.length, 0, "no editor or false lifecycle status for a read result");
  assert.equal(readResult.dataset.nexusDocumentLifecycle, undefined);

  const lifecycle = sandbox.run({ data: { documentId: "doc_1", savedVersion: 1, reopenVerified: true, content: "x" }, originalText: "x" });
  assert.equal(lifecycle.dataset.nexusDocumentLifecycle, "reopened");
  // Editor, status, and (added 2026-09-22, closing the "real file, no way to download it" gap on
  // this exact lifecycle-complete path) a real Download button wired to the owner-scoped
  // GET /api/nexus/runtime/documents/:id route.
  assert.equal(lifecycle.children.length, 3, "a real lifecycle gets the editor, status, and download button");
});
