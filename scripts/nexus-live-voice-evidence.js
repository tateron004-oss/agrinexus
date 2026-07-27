"use strict";

const fs = require("fs");
const path = require("path");

const SUITE = "nexus-genesis-live-provider-browser-smoke";

function validateEvidence(evidence, expectedTurns) {
  const failures = [];
  if (!evidence || typeof evidence !== "object") failures.push("evidence must be an object");
  if (evidence?.ok !== true) failures.push("ok must be true");
  if (evidence?.suite !== SUITE) failures.push(`suite must be ${SUITE}`);
  if (evidence?.virtualMicrophone !== true) failures.push("virtualMicrophone must be true");
  if (evidence?.realRealtimeConnected !== true) failures.push("realRealtimeConnected must be true");
  if (evidence?.liveMicrophoneTrack !== true) failures.push("liveMicrophoneTrack must be true");
  if (evidence?.modelResponseCompleted !== true) failures.push("modelResponseCompleted must be true");
  if (evidence?.modelAudioObserved !== true) failures.push("modelAudioObserved must be true");
  if (evidence?.lifecycleInvariant !== true) failures.push("lifecycleInvariant must be true");
  if (!Number.isInteger(evidence?.expectedTurns) || evidence.expectedTurns !== expectedTurns) {
    failures.push(`expectedTurns must equal ${expectedTurns}`);
  }
  if (!Number.isInteger(evidence?.speechStartedCount) || evidence.speechStartedCount < expectedTurns) {
    failures.push(`speechStartedCount must be at least ${expectedTurns}`);
  }
  if (!Number.isInteger(evidence?.responseDoneCount) || evidence.responseDoneCount < expectedTurns) {
    failures.push(`responseDoneCount must be at least ${expectedTurns}`);
  }
  if (!Array.isArray(evidence?.workspaceResults) || evidence.workspaceResults.length !== 13) {
    failures.push("workspaceResults must contain all 13 application workspaces");
  } else if (evidence.workspaceResults.some(result =>
    result?.acknowledged !== true ||
    !result?.requestId ||
    !Array.isArray(result?.populatedFields) ||
    result.populatedFields.length === 0 ||
    result?.microphoneActive !== true ||
    result?.realtimeConnected !== true ||
    result?.wordsVisible !== true
  )) {
    failures.push("every workspace must be acknowledged, populated, visible, and voice-connected");
  }
  if (!Array.isArray(evidence?.translationResults) || evidence.translationResults.length === 0) {
    failures.push("translationResults must contain verified provider evidence");
  }
  if (!Array.isArray(evidence?.twilioCallResults) || !evidence.twilioCallResults.some(result =>
    result?.provider === "twilio" &&
    result?.action === "call.start" &&
    result?.succeeded === true &&
    result?.verified === true &&
    /^CA[A-Za-z0-9]+$/.test(String(result?.sid || ""))
  )) {
    failures.push("twilioCallResults must contain a verified CA receipt");
  }
  return failures;
}

function writeEvidenceAtomic(filePath, evidence) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const temporaryPath = `${filePath}.${process.pid}.tmp`;
  fs.writeFileSync(temporaryPath, `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
  fs.renameSync(temporaryPath, filePath);
}

function readAndValidateEvidence(filePath, expectedTurns) {
  if (!fs.existsSync(filePath)) throw new Error(`Required voice evidence file is missing: ${filePath}`);
  const evidence = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const failures = validateEvidence(evidence, expectedTurns);
  if (failures.length) throw new Error(`Invalid voice evidence: ${failures.join("; ")}`);
  return evidence;
}

module.exports = {
  SUITE,
  validateEvidence,
  writeEvidenceAtomic,
  readAndValidateEvidence
};
