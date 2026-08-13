"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const { MAP_COMMAND, clean, sameOriginPath, sanitizeTurnPayload } = require("../../scripts/nexus-diagnose-maps-outcome-lifecycle.js");

const source = fs.readFileSync("scripts/nexus-diagnose-maps-outcome-lifecycle.js", "utf8");
const workflow = fs.readFileSync(".github/workflows/nexus-maps-outcome-lifecycle-diagnostic.yml", "utf8");

test("maps lifecycle diagnostic uses the unchanged production command and authenticated shell gates", () => {
  assert.equal(MAP_COMMAND, "Show a route from Nairobi to Nakuru with route geometry.");
  assert.match(source, /waitForCurrentLoginSubmitListener\(page\)/);
  assert.match(source, /waitForAuthenticatedStandardUserShell\(page, base\)/);
  assert.match(source, /requireVisibleAuthoritativeTypedIngress\(page\)/);
  assert.match(source, /data-nexus-authoritative-outcome/);
});

test("maps lifecycle diagnostic records boundaries without secrets or response bodies", () => {
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/turn/);
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/acknowledgements/);
  assert.doesNotMatch(source, /postData\(|request\.headers\(|authorization|cookie/i);
  assert.equal(sameOriginPath("https://example.test/api/nexus/runtime/behavior/turn", "https://example.test"), "/api/nexus/runtime/behavior/turn");
  assert.equal(sameOriginPath("https://other.test/private", "https://example.test"), "cross-origin");
  assert.equal(clean("a\n\tb", 10), "a b");
});

test("maps lifecycle response sanitizer retains only structural outcome evidence", () => {
  assert.deepEqual(sanitizeTurnPayload({ result: { application: "maps", state: "render_required", commandId: "secret-id", correlationId: "trace", taskId: "task", render: { workspace: "maps", type: "show_map" } } }), {
    code: "", application: "maps", state: "render_required", renderPresent: true,
    renderWorkspace: "maps", renderType: "show_map", commandIdPresent: true,
    correlationIdPresent: true, taskIdPresent: true, error: ""
  });
});

test("maps diagnostic workflow is isolated, exact-SHA bound, and preserves evidence", () => {
  assert.match(workflow, /diag\/maps-outcome-lifecycle/);
  assert.match(workflow, /EXPECTED_RELEASE_SHA/);
  assert.match(workflow, /c0c47ad49e8fa52f525255e809148f5c49173c72/);
  assert.match(workflow, /nexus-protected-foundation-guard\.js/);
  assert.match(workflow, /nexus-maps-outcome-lifecycle\.json/);
  assert.doesNotMatch(workflow, /render_api_key|render-deploy|manual deploy|permissions:\s*write-all/i);
});
