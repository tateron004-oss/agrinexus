"use strict";

const crypto = require("node:crypto");
const { PATH2_LANES, evaluatePath2Certification } = require("./certification-contract.js");

const EXACT_SHA = /^[0-9a-f]{40}$/;
const LOCALES = new Set(["en", "es", "fr", "sw", "ar", "pt"]);

class Path2EvidenceRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }

  async recordUsabilitySession(input) {
    validateSession(input);
    const sessionId = input.sessionId || `p2u_${crypto.randomUUID()}`;
    const result = await this.db.query(`insert into nexus_path2_usability_sessions
      (session_id,release_sha,path1_baseline,participant_id,observer_id,locale,completed,
       unprompted_language,effort_saved,false_successes,receipt,observed_at)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      on conflict (release_sha,participant_id) do nothing returning *`, [sessionId, input.releaseSha,
      input.path1Baseline, input.participantId, input.observerId, input.locale, input.completed,
      input.unpromptedLanguage, input.effortSaved, input.falseSuccesses || 0, input.receipt, input.observedAt]);
    const row = (result.rows || result)[0];
    if (!row) throw Object.assign(new Error("A participant may contribute only one usability case per release."), { code: "duplicate_participant" });
    return row;
  }

  async usabilityEvidence({ releaseSha, path1Baseline }) {
    requireSha(releaseSha, "release"); requireSha(path1Baseline, "Path 1 baseline");
    const result = await this.db.query(`select * from nexus_path2_usability_sessions
      where release_sha=$1 and path1_baseline=$2 order by observed_at`, [releaseSha, path1Baseline]);
    const rows = result.rows || result; const passed = rows.filter(row => row.completed === true).length;
    return { lane: "usability", releaseSha, path1Baseline, cases: rows.length, passed,
      facts: { humanUsers: rows.length >= PATH2_LANES.usability.minimumCases,
        unpromptedLanguage: rows.length > 0 && rows.every(row => row.unprompted_language === true),
        effortSaved: rows.length > 0 && rows.every(row => row.effort_saved === true) },
      receipts: rows.map(row => row.receipt?.receiptId).filter(Boolean), production: true, simulated: false,
      path1GuardPassed: rows.length > 0 && rows.every(row => row.receipt?.path1GuardPassed === true),
      falseSuccesses: rows.reduce((total, row) => total + Number(row.false_successes || 0), 0) };
  }

  async recordLaneEvidence(input) {
    requireSha(input.releaseSha, "release"); requireSha(input.path1Baseline, "Path 1 baseline");
    if (!PATH2_LANES[input.lane] || input.lane === "usability") throw new Error("A non-usability Path 2 lane is required.");
    validateLaneEvidence(input);
    const result = await this.db.query(`insert into nexus_path2_lane_evidence
      (release_sha,path1_baseline,lane,evidence,observed_at) values ($1,$2,$3,$4,$5)
      on conflict (release_sha,lane) do update set path1_baseline=excluded.path1_baseline,
      evidence=excluded.evidence,observed_at=excluded.observed_at returning *`,
    [input.releaseSha, input.path1Baseline, input.lane, input, input.observedAt]);
    return (result.rows || result)[0];
  }

  async recordMachineCase(input) {
    validateMachineCase(input);
    const result = await this.db.query(`insert into nexus_path2_machine_cases
      (case_id,release_sha,path1_baseline,lane,passed,facts,false_successes,receipt,observed_at)
      values ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      on conflict (case_id) do nothing returning *`, [input.caseId, input.releaseSha, input.path1Baseline,
      input.lane, input.passed, input.facts, input.falseSuccesses || 0, input.receipt, input.observedAt]);
    const row = (result.rows || result)[0];
    if (!row) throw Object.assign(new Error("A machine case receipt may be recorded only once."), { code: "duplicate_machine_case" });
    return row;
  }

  async machineLaneEvidence({ releaseSha, path1Baseline, lane }) {
    requireSha(releaseSha, "release"); requireSha(path1Baseline, "Path 1 baseline");
    const contract = PATH2_LANES[lane];
    if (!contract || lane === "usability") throw new Error("A non-usability Path 2 lane is required.");
    const result = await this.db.query(`select * from nexus_path2_machine_cases
      where release_sha=$1 and path1_baseline=$2 and lane=$3 order by observed_at,case_id`,
    [releaseSha, path1Baseline, lane]);
    const rows = result.rows || result; const facts = Object.fromEntries(contract.requiredFacts.map(fact =>
      [fact, rows.some(row => row.facts?.[fact] === true)]));
    return { lane, releaseSha, path1Baseline, cases: rows.length, passed: rows.filter(row => row.passed === true).length,
      facts, receipts: rows.map(row => row.receipt?.receiptId).filter(Boolean), production: true, simulated: false,
      path1GuardPassed: rows.length > 0 && rows.every(row => row.receipt?.path1GuardPassed === true),
      falseSuccesses: rows.reduce((total, row) => total + Number(row.false_successes || 0), 0) };
  }

  async recordStabilityPass(input) {
    requireSha(input.releaseSha, "release");
    if (![1, 2, 3].includes(input.passNumber)) throw new Error("Stability pass number must be 1, 2, or 3.");
    if (input.production !== true || input.simulated === true || input.receipt?.releaseSha !== input.releaseSha ||
      input.receipt?.path1GuardPassed !== true || !input.receipt?.receiptId) throw new Error("A genuine exact-release stability receipt is required.");
    const result = await this.db.query(`insert into nexus_path2_stability_passes
      (release_sha,pass_number,receipt,observed_at) values ($1,$2,$3,$4)
      on conflict (release_sha,pass_number) do update set receipt=excluded.receipt,observed_at=excluded.observed_at returning *`,
    [input.releaseSha, input.passNumber, input.receipt, input.observedAt]);
    return (result.rows || result)[0];
  }

  async durableReport({ releaseSha, path1Baseline }) {
    const [laneEvidence, stabilityResult] = await Promise.all([
      Promise.all(Object.keys(PATH2_LANES).filter(lane => lane !== "usability")
        .map(lane => this.machineLaneEvidence({ releaseSha, path1Baseline, lane }))),
      this.db.query(`select * from nexus_path2_stability_passes where release_sha=$1 order by pass_number`, [releaseSha])
    ]);
    return this.report({ releaseSha, path1Baseline, laneEvidence, stabilityPasses: (stabilityResult.rows || stabilityResult).length });
  }

  async report({ releaseSha, path1Baseline, laneEvidence = [], stabilityPasses = 0 }) {
    const usability = await this.usabilityEvidence({ releaseSha, path1Baseline });
    const evidence = laneEvidence.filter(item => item.lane !== "usability").concat(usability);
    return evaluatePath2Certification({ releaseSha, path1Baseline, laneEvidence: evidence, stabilityPasses });
  }
}

function validateSession(input = {}) {
  requireSha(input.releaseSha, "release"); requireSha(input.path1Baseline, "Path 1 baseline");
  if (!input.participantId || !input.observerId || input.participantId === input.observerId) throw new Error("Distinct participant and observer identities are required.");
  if (!LOCALES.has(input.locale)) throw new Error("A supported full-workflow locale is required.");
  for (const key of ["completed", "unpromptedLanguage", "effortSaved"]) if (typeof input[key] !== "boolean") throw new Error(`${key} must be observed explicitly.`);
  if (input.simulated === true || input.production !== true) throw new Error("Usability evidence must come from a genuine production session.");
  if (!input.observedAt || !Number.isFinite(Date.parse(input.observedAt))) throw new Error("A valid observation time is required.");
  if (!input.receipt?.receiptId || input.receipt.releaseSha !== input.releaseSha || input.receipt.path1GuardPassed !== true) throw new Error("An exact-release receipt with a passing Path 1 guard is required.");
  if (!Array.isArray(input.receipt.outcomes) || input.receipt.outcomes.length === 0) throw new Error("The receipt must contain observed user outcomes.");
}

function validateLaneEvidence(input) {
  const contract = PATH2_LANES[input.lane]; const facts = input.facts || {};
  if (input.production !== true || input.simulated === true || input.path1GuardPassed !== true) throw new Error("Lane evidence must be genuine production evidence with Path 1 protected.");
  if (!Number.isInteger(input.cases) || !Number.isInteger(input.passed) || input.passed > input.cases || input.passed < 0) throw new Error("Valid case totals are required.");
  if (!Array.isArray(input.receipts) || input.receipts.length === 0 || !contract.requiredFacts.every(key => facts[key] === true)) throw new Error("Required facts and production receipts are incomplete.");
  if (!input.observedAt || !Number.isFinite(Date.parse(input.observedAt))) throw new Error("A valid observation time is required.");
}

function validateMachineCase(input = {}) {
  requireSha(input.releaseSha, "release"); requireSha(input.path1Baseline, "Path 1 baseline");
  if (!PATH2_LANES[input.lane] || input.lane === "usability") throw new Error("A non-usability Path 2 lane is required.");
  if (!/^p2c_[a-z0-9_-]{8,160}$/i.test(String(input.caseId || ""))) throw new Error("A stable Path 2 machine case id is required.");
  if (typeof input.passed !== "boolean") throw new Error("The machine case outcome must be explicit.");
  if (input.production !== true || input.simulated === true) throw new Error("Machine cases must execute against the exact production release.");
  if (!input.observedAt || !Number.isFinite(Date.parse(input.observedAt))) throw new Error("A valid observation time is required.");
  if (!input.receipt?.receiptId || input.receipt.releaseSha !== input.releaseSha || input.receipt.path1GuardPassed !== true)
    throw new Error("An exact-release machine receipt with a passing Path 1 guard is required.");
  if (input.falseSuccesses != null && (!Number.isInteger(input.falseSuccesses) || input.falseSuccesses < 0))
    throw new Error("falseSuccesses must be a non-negative integer.");
}

function requireSha(value, label) { if (!EXACT_SHA.test(String(value || ""))) throw new Error(`An exact ${label} SHA is required.`); }

module.exports = Object.freeze({ Path2EvidenceRepository, validateSession, validateLaneEvidence, validateMachineCase, LOCALES });
