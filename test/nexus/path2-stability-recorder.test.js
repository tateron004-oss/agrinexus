"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { buildStabilityEvidence, run } = require("../../scripts/nexus-record-path2-stability-pass.js");

const releaseSha = "a".repeat(40);
const report = { passed: true, releaseSha, requiredComponents: 14, recordedComponents: 14, checkedAt: "2026-08-09T12:00:00.000Z" };

test("stability evidence is bound to one exact production pass and Path 1 guard", () => {
  const evidence = buildStabilityEvidence({ releaseSha, passNumber: 2, report, observedAt: "2026-08-09T12:01:00.000Z" });
  assert.equal(evidence.passNumber, 2); assert.equal(evidence.production, true); assert.equal(evidence.simulated, false);
  assert.equal(evidence.receipt.releaseSha, releaseSha); assert.equal(evidence.receipt.path1GuardPassed, true);
  assert.match(evidence.receipt.receiptId, /^path2-stability-2-/);
  assert.throws(() => buildStabilityEvidence({ releaseSha, passNumber: 4, report }), /1, 2, or 3/);
  assert.throws(() => buildStabilityEvidence({ releaseSha, passNumber: 1, report: { ...report, passed: false } }), /did not prove/);
});

test("recorder submits authenticated evidence produced from the release report", async () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "path2-stability-"));
  const reportPath = path.join(directory, "pass.json"); fs.writeFileSync(reportPath, JSON.stringify(report));
  let request;
  const response = await run({ NEXUS_BASE_URL: "https://nexus.example/", NEXUS_ACCEPTANCE_TOKEN: "secret",
    EXPECTED_RELEASE_SHA: releaseSha, NEXUS_PASS_NUMBER: "1", NEXUS_RELEASE_READINESS_OUTPUT: reportPath }, async (url, init) => {
      request = { url, init, body: JSON.parse(init.body) };
      return { ok: true, status: 201, text: async () => JSON.stringify({ ok: true, stabilityPass: { pass_number: 1 } }) };
    });
  assert.equal(response.ok, true); assert.equal(request.url, "https://nexus.example/api/nexus/runtime/path2/stability-passes");
  assert.equal(request.init.headers.authorization, "Bearer secret"); assert.equal(request.body.releaseSha, releaseSha);
});

test("unified release inherits the masked acceptance token exported by deployment control", () => {
  const workflow = fs.readFileSync(".github/workflows/nexus-unified-production-release.yml", "utf8");
  const controller = fs.readFileSync("scripts/nexus-render-release-controller.js", "utf8");
  assert.match(controller, /GITHUB_ENV.*NEXUS_ACCEPTANCE_TOKEN/s);
  assert.match(controller, /::add-mask::/);
  assert.doesNotMatch(workflow, /NEXUS_ACCEPTANCE_TOKEN:\s*\$\{\{\s*secrets\./,
    "an absent repository secret must not override the token exported through GITHUB_ENV");
  assert.ok(workflow.indexOf("Deploy exact SHA to the canonical Render topology") <
    workflow.indexOf("Produce, compile, and record exact-release production probes"));
});
