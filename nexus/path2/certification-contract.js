"use strict";

const PATH2_LANES = Object.freeze({
  intelligence: { minimumCases: 100, minimumSuccessRate: 0.95, requiredFacts: ["unseenRequests", "clarifications", "corrections"] },
  memory: { minimumCases: 40, minimumSuccessRate: 0.95, requiredFacts: ["multiTurn", "taskContinuation", "privacyIsolation", "userForgetting"] },
  planning: { minimumCases: 60, minimumSuccessRate: 0.95, requiredFacts: ["dependencyOrdering", "catalogGrounding", "safeRepair"] },
  toolUse: { minimumCases: 60, minimumSuccessRate: 0.95, requiredFacts: ["governedRegistry", "consent", "confirmation", "fallbacks"] },
  crossApplication: { minimumCases: 30, minimumSuccessRate: 0.95, requiredFacts: ["multiWorkspace", "sharedTaskContext", "visibleOutcomes"] },
  verification: { minimumCases: 60, minimumSuccessRate: 1, requiredFacts: ["noFalseSuccess", "visibleOrAudibleProof", "receipts"] },
  recovery: { minimumCases: 30, minimumSuccessRate: 0.95, requiredFacts: ["providerFailure", "networkFailure", "voiceRecovery", "noRefresh"] },
  multilingual: { minimumCases: 72, minimumSuccessRate: 0.95, requiredFacts: ["sixLanguages", "fullWorkflow", "safetyMeaning"] },
  accessibility: { minimumCases: 24, minimumSuccessRate: 0.95, requiredFacts: ["voiceOnly", "lowLiteracy", "keyboard", "screenReader"] },
  usability: { minimumCases: 30, minimumSuccessRate: 0.9, requiredFacts: ["humanUsers", "unpromptedLanguage", "effortSaved"] }
});

const PATH2_CERTIFICATION_LANES = Object.freeze(Object.keys(PATH2_LANES).filter(lane => lane !== "usability"));

function evaluatePath2Certification({ releaseSha, path1Baseline, laneEvidence = [], stabilityPasses = 0 }) {
  if (!/^[0-9a-f]{40}$/.test(String(releaseSha || ""))) throw new Error("Path 2 requires an exact release SHA.");
  if (!/^[0-9a-f]{40}$/.test(String(path1Baseline || ""))) throw new Error("Path 2 requires an exact Path 1 baseline SHA.");
  const evidence = new Map(laneEvidence.map(item => [item.lane, item]));
  const lanes = Object.fromEntries(Object.entries(PATH2_LANES).map(([lane, contract]) => {
    const item = evidence.get(lane); const facts = item?.facts || {};
    const exactRelease = item?.releaseSha === releaseSha && item?.path1Baseline === path1Baseline;
    const cases = Number(item?.cases || 0); const passed = Number(item?.passed || 0);
    const successRate = cases > 0 ? passed / cases : 0;
    const factsComplete = contract.requiredFacts.every(fact => facts[fact] === true);
    const receipts = Array.isArray(item?.receipts) ? item.receipts : [];
    const genuine = item?.production === true && item?.simulated !== true && receipts.length > 0;
    const certified = exactRelease && cases >= contract.minimumCases && successRate >= contract.minimumSuccessRate && factsComplete && genuine;
    return [lane, { certified, cases, passed, successRate, minimumCases: contract.minimumCases,
      minimumSuccessRate: contract.minimumSuccessRate, factsComplete, genuine, exactRelease }];
  }));
  const truthfulness = lanes.verification.certified && evidence.get("verification")?.falseSuccesses === 0;
  const requiredLanesCertified = PATH2_CERTIFICATION_LANES.every(lane => lanes[lane].certified);
  const requiredEvidence = laneEvidence.filter(item => PATH2_CERTIFICATION_LANES.includes(item.lane));
  const path1Protected = requiredEvidence.length === PATH2_CERTIFICATION_LANES.length &&
    requiredEvidence.every(item => item.path1GuardPassed === true);
  const certified = requiredLanesCertified && truthfulness && path1Protected && stabilityPasses >= 3;
  const fieldPilot = Object.freeze({ requiredForCertification: false,
    status: lanes.usability.certified ? "validated" : "pending-pilot",
    validated: lanes.usability.certified, cases: lanes.usability.cases, passed: lanes.usability.passed,
    minimumCases: PATH2_LANES.usability.minimumCases,
    note: "Multi-participant field-pilot validation begins when a pilot cohort is available." });
  return Object.freeze({ schema: "nexus.path2.certification.v2", certificationStage: "pilot-ready",
    certified, pilotReady: certified, releaseSha, path1Baseline, stabilityPasses, truthfulness,
    path1Protected, requiredLanes: PATH2_CERTIFICATION_LANES, lanes, fieldPilot });
}

module.exports = Object.freeze({ PATH2_LANES, PATH2_CERTIFICATION_LANES, evaluatePath2Certification });
