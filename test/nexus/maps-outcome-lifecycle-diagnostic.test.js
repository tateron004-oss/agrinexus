"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { MAP_COMMAND, LIVE_KNOWLEDGE_COMMAND, clean, sameOriginPath, sanitizeTurnPayload } = require("../../scripts/nexus-diagnose-maps-outcome-lifecycle.js");

const source = fs.readFileSync("scripts/nexus-diagnose-maps-outcome-lifecycle.js", "utf8");
const workflow = fs.readFileSync(".github/workflows/nexus-maps-outcome-lifecycle-diagnostic.yml", "utf8");

test("maps lifecycle diagnostic uses the unchanged production command and authenticated shell gates", () => {
  assert.equal(MAP_COMMAND, "Show a route from Nairobi to Nakuru with route geometry.");
  assert.equal(LIVE_KNOWLEDGE_COMMAND, "Why do maize leaves turn yellow? Answer with current sources.");
  assert.match(source, /waitForCurrentLoginSubmitListener\(page\)/);
  assert.match(source, /waitForAuthenticatedStandardUserShell\(page, base\)/);
  assert.match(source, /requireVisibleAuthoritativeTypedIngress\(page\)/);
  assert.match(source, /Browser\.setPermission/);
  assert.match(source, /setting: "denied"/);
  assert.match(source, /data-nexus-authoritative-outcome/);
});

test("maps lifecycle diagnostic reproduces the production Live Knowledge to Maps sequence", () => {
  assert.match(source, /input\.fill\(LIVE_KNOWLEDGE_COMMAND\)/);
  assert.match(source, /turn\?\.application === "live-knowledge"/);
  assert.match(source, /sequentialPrelude/);
  assert.match(source, /state\.commandBinding = \{ turn: null, acknowledgement: null \}/);
  assert.ok(source.indexOf("input.fill(LIVE_KNOWLEDGE_COMMAND)") < source.indexOf("input.fill(MAP_COMMAND)"));
});

test("maps lifecycle diagnostic captures the full boot and login boundary before clicking", () => {
  assert.match(source, /installBootLoginBoundaryDiagnostics/);
  assert.match(source, /captureLoginLifecycleDiagnostics/);
  assert.match(source, /captureBootLoginBoundary/);
  assert.match(source, /script-load/);
  assert.match(source, /script-error/);
  assert.match(source, /dom-content-loaded/);
  assert.match(source, /window-load/);
  assert.match(source, /authorityFirewall/);
  assert.match(source, /brainBridgeBound/);
  assert.match(source, /functionWindowDelegateBound/);
  assert.match(source, /currentFormWasRegisteredTarget/);
  assert.match(source, /listenerRegistrations/);
  assert.match(source, /serviceWorker/);
  assert.match(source, /crypto\.subtle\.digest\("SHA-256", bytes\)/);
  assert.ok(source.indexOf("installBootLoginBoundaryDiagnostics(page)") < source.indexOf("page.goto"));
  assert.doesNotMatch(source, /document\.cookie|localStorage\.getItem|sessionStorage\.getItem|request\.headers\(/);
});

test("maps lifecycle diagnostic captures immutable pre-click, direct boot progression, and login handler decisions", () => {
  assert.match(source, /captureImmutablePreClickSnapshot/);
  assert.match(source, /Object\.freeze\(\{ \.\.\.browser/);
  assert.match(source, /installBootFunctionDebugger/);
  assert.match(source, /Debugger\.setBreakpointByUrl/);
  assert.match(source, /phase: "runtime-exception"/);
  assert.match(source, /"boot-entry"/);
  assert.match(source, /"bindStatic-entry"/);
  assert.match(source, /"bindStatic-completed"/);
  assert.match(source, /"boot-success-final-statement"/);
  assert.match(source, /"boot-catch-final-statement"/);
  assert.match(source, /phase: "entry"/);
  assert.match(source, /credentialGuardDecision/);
  assert.match(source, /early-return-missing-credential/);
  assert.match(source, /phase: "gateway-invocation"/);
  assert.match(source, /phase: "sync-return"/);
  assert.match(source, /phase: "fulfilled"/);
  assert.match(source, /phase: "rejected"/);
  assert.ok(source.indexOf("captureImmutablePreClickSnapshot(page") < source.indexOf("name: \"Enter platform\""));
});
test("maps lifecycle diagnostic records boundaries without secrets or response bodies", () => {
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/turn/);
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/acknowledgements/);
  assert.doesNotMatch(source, /postData\(|request\.headers\(|authorization|cookie/i);
  assert.ok(source.indexOf("fs.writeFileSync(outputFile") > source.indexOf("} catch (error)"));
  assert.equal(sameOriginPath("https://example.test/api/nexus/runtime/behavior/turn", "https://example.test"), "/api/nexus/runtime/behavior/turn");
  assert.equal(sameOriginPath("https://other.test/private", "https://example.test"), "cross-origin");
  assert.equal(clean("a\n\tb", 10), "a b");
});

test("maps lifecycle diagnostic captures the pre-turn submit and handler-routing boundary", () => {
  assert.match(source, /schema: "nexus\.maps-outcome-lifecycle-diagnostic\.v3"/);
  assert.match(source, /data-nexus-primary-typed-submit/);
  assert.match(source, /data-nexus-primary-typed-entry/);
  assert.match(source, /submitEvents/);
  assert.match(source, /handlerRouting/);
  assert.match(source, /gatewayInvocations/);
  assert.match(source, /defaultPrevented/);
  assert.match(source, /cancelBubble/);
  assert.match(source, /bodyAuthoritative/);
  assert.match(source, /returnedPromise/);
  assert.match(source, /phase: "fetch-before"/);
  assert.match(source, /phase: "fetch-response"/);
  assert.doesNotMatch(source, /localStorage\.getItem\(|sessionStorage\.getItem\(|document\.cookie|request\.headers\(/);
});

test("maps lifecycle diagnostic binds the turn, acknowledgement, and Leaflet route evidence", () => {
  assert.match(source, /commandBinding/);
  assert.match(source, /commandIdMatchesTurn/);
  assert.match(source, /correlationIdMatchesTurn/);
  assert.match(source, /taskIdMatchesTurn/);
  assert.match(source, /routeGeometryObserved/);
  assert.match(source, /routeEndpoints/);
  assert.match(source, /genesisWorkspaceRequestId/);
  assert.match(source, /requestIdMatchesTurn/);
  assert.match(source, /leaflet-marker-pane \.leaflet-marker-icon/);
  assert.match(source, /#14b8a6/);
  assert.match(source, /markerCount/);
  assert.match(source, /routePathCount/);
  assert.match(source, /acknowledgement\?\.response\?\.completed === true/);
});

test("maps lifecycle response sanitizer retains only structural outcome evidence", () => {
  assert.deepEqual(sanitizeTurnPayload({ result: { application: "maps", state: "render_required", commandId: "secret-id", correlationId: "trace", taskId: "task", render: { workspace: "maps", type: "show_map" } } }), {
    code: "", application: "maps", state: "render_required", renderPresent: true,
    renderWorkspace: "maps", renderType: "show_map", commandIdPresent: true,
    correlationIdPresent: true, taskIdPresent: true, error: ""
  });
  assert.equal(sanitizeTurnPayload({ application: "maps", state: "render_required", render: { workspace: "maps" } }).renderPresent, true);
});

test("maps lifecycle diagnostic captures a bounded browser error stack", () => {
  assert.match(source, /stack: clean\(error\?\.stack, 2000\)/);
});

test("maps diagnostic workflow is isolated, exact-SHA bound, and preserves evidence", () => {
  assert.match(workflow, /diag\/maps-outcome-lifecycle/);
  assert.match(workflow, /EXPECTED_RELEASE_SHA/);
  assert.match(workflow, /21ef8fc98c2d32f892b7ee48bd0f92da1dd1af35/);
  assert.match(workflow, /nexus-protected-foundation-guard\.js/);
  assert.match(workflow, /playwright@1\.55\.0/);
  assert.match(workflow, /playwright install --with-deps chromium/);
  assert.match(workflow, /nexus-maps-outcome-lifecycle\.json/);
  assert.doesNotMatch(workflow, /render_api_key|render-deploy|manual deploy|permissions:\s*write-all/i);
});
