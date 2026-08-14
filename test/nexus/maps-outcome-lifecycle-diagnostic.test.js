"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { MAP_COMMAND, clean, sameOriginPath, sanitizedResourcePath, sanitizeTurnPayload } = require("../../scripts/nexus-diagnose-maps-outcome-lifecycle.js");

const source = fs.readFileSync("scripts/nexus-diagnose-maps-outcome-lifecycle.js", "utf8");
const workflow = fs.readFileSync(".github/workflows/nexus-maps-outcome-lifecycle-diagnostic.yml", "utf8");

test("maps lifecycle diagnostic uses the unchanged production command and authenticated shell gates", () => {
  assert.equal(MAP_COMMAND, "Show a route from Nairobi to Nakuru with route geometry.");
  assert.match(source, /waitForCurrentLoginSubmitListener\(page\)/);
  assert.match(source, /waitForAuthenticatedStandardUserShell\(page, base\)/);
  assert.match(source, /requireVisibleAuthoritativeTypedIngress\(page\)/);
  assert.match(source, /Browser\.setPermission/);
  assert.match(source, /setting: "denied"/);
  assert.match(source, /data-nexus-authoritative-outcome/);
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

test("maps lifecycle response sanitizer retains only structural outcome evidence", () => {
  assert.deepEqual(sanitizeTurnPayload({ result: { application: "maps", state: "render_required", commandId: "secret-id", correlationId: "trace", taskId: "task", render: { workspace: "maps", type: "show_map" } } }), {
    code: "", application: "maps", state: "render_required", renderPresent: true,
    renderWorkspace: "maps", renderType: "show_map", commandIdPresent: true,
    correlationIdPresent: true, taskIdPresent: true, origin: "", destination: "", routeGeometryPointCount: 0, error: ""
  });
  assert.equal(sanitizeTurnPayload({ application: "maps", state: "render_required", render: { workspace: "maps" } }).renderPresent, true);
  const route = sanitizeTurnPayload({ result: { render: { data: {
    origin: "Nairobi", destination: "Nakuru", routeGeometry: [[-1.28, 36.82], [-0.30, 36.08]]
  } } } });
  assert.equal(route.origin, "Nairobi");
  assert.equal(route.destination, "Nakuru");
  assert.equal(route.routeGeometryPointCount, 2);
});

test("maps lifecycle diagnostic captures a bounded browser error stack", () => {
  assert.match(source, /stack: clean\(error\?\.stack, 2000\)/);
});

test("maps lifecycle diagnostic tolerates pre-body mutations and identifies failed resources without query data", () => {
  assert.match(source, /body\?\.dataset\?\.genesisWorkspaceRequestId/);
  assert.match(source, /failedResources/);
  assert.match(source, /phase: lifecycle\.phase/);
  assert.match(source, /lifecycle\.phase = "login-submit"/);
  assert.match(source, /lifecycle\.phase = "authenticated-shell"/);
  assert.match(source, /lifecycle\.phase = "map-command"/);
  assert.equal(sanitizedResourcePath("https://example.test/api/state?token=secret", "https://example.test"), "/api/state");
  assert.equal(sanitizedResourcePath("https://tiles.example.net/private?token=secret", "https://example.test"), "cross-origin:tiles.example.net");
});

test("maps lifecycle diagnostic binds completion to the command-owned Leaflet route surface", () => {
  assert.match(source, /data-genesis-workspace-request-id/);
  assert.match(source, /leaflet-marker-pane \.leaflet-marker-icon/);
  assert.match(source, /leaflet-overlay-pane svg path/);
  assert.match(source, /markers\.length >= 2/);
  assert.match(source, /getAttribute\("d"\)/);
  assert.match(source, /page\.screenshot/);
});

test("maps diagnostic workflow is isolated, exact-SHA bound, and preserves evidence", () => {
  assert.match(workflow, /diag\/maps-outcome-lifecycle/);
  assert.match(workflow, /EXPECTED_RELEASE_SHA/);
  assert.match(workflow, /18e65aa2ca8ec12de1ef81634367c339dd72b5c8/);
  assert.match(workflow, /nexus-protected-foundation-guard\.js/);
  assert.match(workflow, /playwright@1\.55\.0/);
  assert.match(workflow, /playwright install --with-deps chromium/);
  assert.match(workflow, /nexus-maps-outcome-lifecycle\.json/);
  assert.doesNotMatch(workflow, /render_api_key|render-deploy|manual deploy|permissions:\s*write-all/i);
});
