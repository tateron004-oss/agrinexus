"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { PATH2_LANES, evaluatePath2Certification } = require("../../nexus/path2/certification-contract.js");

const releaseSha = "1".repeat(40); const path1Baseline = "0".repeat(40);
function evidenceFor(lane, overrides = {}) {
  const contract = PATH2_LANES[lane];
  return { lane, releaseSha, path1Baseline, cases: contract.minimumCases, passed: contract.minimumCases,
    facts: Object.fromEntries(contract.requiredFacts.map(fact => [fact, true])), receipts: [`${lane}-receipt`],
    production: true, simulated: false, path1GuardPassed: true, falseSuccesses: 0, ...overrides };
}

test("Path 2 certifies only when every user-experience lane and stability pass is proven", () => {
  const report = evaluatePath2Certification({ releaseSha, path1Baseline,
    laneEvidence: Object.keys(PATH2_LANES).map(lane => evidenceFor(lane)), stabilityPasses: 3 });
  assert.equal(report.certified, true); assert.equal(report.path1Protected, true);
  assert.equal(Object.keys(report.lanes).length, 10);
});

test("Path 2 fails closed on a false success, missing lane, weak success rate, or Path 1 drift", () => {
  const complete = Object.keys(PATH2_LANES).map(lane => evidenceFor(lane));
  assert.equal(evaluatePath2Certification({ releaseSha, path1Baseline,
    laneEvidence: complete.filter(item => item.lane !== "usability"), stabilityPasses: 3 }).certified, false);
  assert.equal(evaluatePath2Certification({ releaseSha, path1Baseline,
    laneEvidence: complete.map(item => item.lane === "verification" ? { ...item, falseSuccesses: 1 } : item), stabilityPasses: 3 }).certified, false);
  assert.equal(evaluatePath2Certification({ releaseSha, path1Baseline,
    laneEvidence: complete.map(item => item.lane === "intelligence" ? { ...item, passed: 1 } : item), stabilityPasses: 3 }).certified, false);
  assert.equal(evaluatePath2Certification({ releaseSha, path1Baseline,
    laneEvidence: complete.map(item => ({ ...item, path1GuardPassed: item.lane !== "memory" })), stabilityPasses: 3 }).certified, false);
});
