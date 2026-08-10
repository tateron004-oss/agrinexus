"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { Path2EvidenceRepository, validateSession } = require("../../nexus/path2/evidence-repository.js");

const releaseSha = "a".repeat(40); const path1Baseline = "0".repeat(40);
function session(index, overrides = {}) { return { releaseSha, path1Baseline, participantId: `person-${index}`,
  observerId: `observer-${index}`, locale: ["en", "es", "fr", "sw", "ar", "pt"][index % 6], completed: true,
  unpromptedLanguage: true, effortSaved: true, falseSuccesses: 0, production: true, simulated: false,
  observedAt: new Date(1700000000000 + index * 1000).toISOString(), receipt: { receiptId: `receipt-${index}`,
    releaseSha, path1GuardPassed: true, outcomes: [{ kind: "visible", verified: true }] }, ...overrides }; }

test("human usability sessions reject simulation, self-observation, stale SHA, and missing outcomes", () => {
  assert.throws(() => validateSession(session(1, { simulated: true })), /genuine production/);
  assert.throws(() => validateSession(session(1, { observerId: "person-1" })), /Distinct/);
  assert.throws(() => validateSession(session(1, { receipt: { receiptId: "x", releaseSha: "b".repeat(40), path1GuardPassed: true, outcomes: [{}] } })), /exact-release/);
  assert.throws(() => validateSession(session(1, { receipt: { receiptId: "x", releaseSha, path1GuardPassed: true, outcomes: [] } })), /observed user outcomes/);
});

test("usability lane requires thirty distinct successful human production sessions", async () => {
  const rows = Array.from({ length: 30 }, (_, index) => ({ session_id: `s-${index}`, release_sha: releaseSha,
    path1_baseline: path1Baseline, participant_id: `p-${index}`, completed: true, unprompted_language: true,
    effort_saved: true, false_successes: 0, receipt: session(index).receipt }));
  const repo = new Path2EvidenceRepository({ query: async () => ({ rows }) });
  const evidence = await repo.usabilityEvidence({ releaseSha, path1Baseline });
  assert.equal(evidence.cases, 30); assert.equal(evidence.passed, 30); assert.equal(evidence.facts.humanUsers, true);
  assert.equal(evidence.receipts.length, 30); assert.equal(evidence.path1GuardPassed, true);
});

test("a failed observation stays visible and prevents usability certification", async () => {
  const rows = Array.from({ length: 30 }, (_, index) => ({ completed: index !== 0, unprompted_language: index !== 1,
    effort_saved: true, false_successes: index === 2 ? 1 : 0, receipt: session(index).receipt }));
  const evidence = await new Path2EvidenceRepository({ query: async () => ({ rows }) }).usabilityEvidence({ releaseSha, path1Baseline });
  assert.equal(evidence.passed, 29); assert.equal(evidence.facts.unpromptedLanguage, false); assert.equal(evidence.falseSuccesses, 1);
});

test("duplicate participant evidence fails closed", async () => {
  const repo = new Path2EvidenceRepository({ query: async () => ({ rows: [] }) });
  await assert.rejects(() => repo.recordUsabilitySession(session(1)), error => error.code === "duplicate_participant");
});

test("durable report counts only stored exact-release lanes and stability passes", async () => {
  const laneRows = Object.keys(require("../../nexus/path2/certification-contract.js").PATH2_LANES)
    .filter(lane => lane !== "usability").map(lane => { const contract = require("../../nexus/path2/certification-contract.js").PATH2_LANES[lane];
      return { evidence: { lane, releaseSha, path1Baseline, cases: contract.minimumCases, passed: contract.minimumCases,
        facts: Object.fromEntries(contract.requiredFacts.map(key => [key, true])), receipts: [`${lane}-receipt`],
        production: true, simulated: false, path1GuardPassed: true, falseSuccesses: 0 } }; });
  const usabilityRows = Array.from({ length: 30 }, (_, index) => ({ completed: true, unprompted_language: true,
    effort_saved: true, false_successes: 0, receipt: session(index).receipt }));
  const responses = [{ rows: laneRows }, { rows: [{ pass_number: 1 }, { pass_number: 2 }, { pass_number: 3 }] }, { rows: usabilityRows }];
  const report = await new Path2EvidenceRepository({ query: async () => responses.shift() }).durableReport({ releaseSha, path1Baseline });
  assert.equal(report.certified, true); assert.equal(report.stabilityPasses, 3);
});
