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
  const contracts = require("../../nexus/path2/certification-contract.js").PATH2_LANES;
  const usabilityRows = Array.from({ length: 30 }, (_, index) => ({ completed: true, unprompted_language: true,
    effort_saved: true, false_successes: 0, receipt: session(index).receipt }));
  const report = await new Path2EvidenceRepository({ query: async (sql, params) => {
    if (sql.includes("nexus_path2_machine_cases")) { const lane = params[2]; const contract = contracts[lane];
      return { rows: Array.from({ length: contract.minimumCases }, (_, index) => ({ passed: true, false_successes: 0,
        facts: Object.fromEntries(contract.requiredFacts.map(key => [key, true])),
        receipt: { receiptId: `${lane}-${index}`, releaseSha, path1GuardPassed: true } })) }; }
    if (sql.includes("nexus_path2_stability_passes")) return { rows: [{ pass_number: 1 }, { pass_number: 2 }, { pass_number: 3 }] };
    return { rows: usabilityRows };
  } }).durableReport({ releaseSha, path1Baseline });
  assert.equal(report.certified, true); assert.equal(report.stabilityPasses, 3);
});

test("machine evidence is aggregated only from distinct durable exact-release case receipts", async () => {
  const releaseSha = "a".repeat(40); const path1Baseline = "b".repeat(40);
  const rows = [{ case_id: "p2c_plan_0001", passed: true, false_successes: 0,
    facts: { dependencyOrdering: true, catalogGrounding: true, safeRepair: true },
    receipt: { receiptId: "receipt-1", releaseSha, path1GuardPassed: true } }];
  const repo = new Path2EvidenceRepository({ query: async () => ({ rows }) });
  const evidence = await repo.machineLaneEvidence({ releaseSha, path1Baseline, lane: "planning" });
  assert.equal(evidence.cases, 1); assert.equal(evidence.passed, 1); assert.equal(evidence.path1GuardPassed, true);
  assert.deepEqual(evidence.receipts, ["receipt-1"]); assert.equal(evidence.facts.safeRepair, true);
});

test("machine case storage rejects duplicate receipts instead of inflating totals", async () => {
  const releaseSha = "c".repeat(40); const path1Baseline = "d".repeat(40);
  const repo = new Path2EvidenceRepository({ query: async () => ({ rows: [] }) });
  await assert.rejects(() => repo.recordMachineCase({ caseId: "p2c_memory_0001", releaseSha, path1Baseline,
    lane: "memory", passed: true, production: true, simulated: false, facts: { multiTurn: true },
    falseSuccesses: 0, observedAt: new Date().toISOString(),
    receipt: { receiptId: "receipt-duplicate", releaseSha, path1GuardPassed: true } }), /only once/);
});
