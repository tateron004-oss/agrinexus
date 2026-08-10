"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { PATH2_LANES } = require("../../nexus/path2/certification-contract.js");
const { RUNNERS, run } = require("../../scripts/nexus-run-path2-production-matrix.js");

test("every machine lane reaches its exact case threshold with every required fact exercised", async () => {
  for (const [lane, runner] of Object.entries(RUNNERS)) {
    const outcomes = await Promise.all(Array.from({ length: PATH2_LANES[lane].minimumCases }, (_, index) => runner(index)));
    assert.equal(outcomes.length, PATH2_LANES[lane].minimumCases); assert.ok(outcomes.every(item => item.passed));
    for (const fact of PATH2_LANES[lane].requiredFacts) assert.ok(outcomes.some(item => item.facts[fact] === true), `${lane}.${fact}`);
  }
});

test("matrix binds and submits every case to one live exact release", async () => {
  const releaseSha = "a".repeat(40); const output = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "path2-matrix-")), "matrix.json");
  const submissions = []; const fetchFn = async (url, init = {}) => {
    if (url.endsWith("/api/nexus/runtime/status")) return { ok: true, text: async () => JSON.stringify({ ok: true, releaseSha }) };
    const descriptor = JSON.parse(init.body); submissions.push(descriptor);
    return { ok: true, status: 201, text: async () => JSON.stringify({ ok: true, evidence: { ...descriptor, passed: true,
      receipt: { receiptId: `receipt-${descriptor.caseId}`, releaseSha, path1GuardPassed: true } } }) };
  };
  const cases = await run({ NEXUS_BASE_URL: "https://nexus.example", NEXUS_ACCEPTANCE_TOKEN: "token",
    EXPECTED_RELEASE_SHA: releaseSha, NEXUS_PATH2_MATRIX_OUTPUT: output }, fetchFn);
  const expected = Object.keys(RUNNERS).reduce((total, lane) => total + PATH2_LANES[lane].minimumCases, 0);
  assert.equal(cases.length, expected); assert.equal(submissions.length, expected); assert.ok(submissions.every(item => item.releaseSha === releaseSha));
  assert.equal(JSON.parse(fs.readFileSync(output)).passed, expected);
});
