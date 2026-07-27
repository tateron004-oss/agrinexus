"use strict";

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  SUITE,
  validateEvidence,
  writeEvidenceAtomic,
  readAndValidateEvidence
} = require("./nexus-live-voice-evidence");

const expectedTurns = 18;
const workspaceResults = Array.from({ length: 13 }, (_, index) => ({
  workspace: `workspace-${index}`,
  acknowledged: true,
  requestId: `request-${index}`,
  populatedFields: ["field"],
  microphoneActive: true,
  realtimeConnected: true,
  wordsVisible: true
}));
const valid = {
  ok: true,
  suite: SUITE,
  virtualMicrophone: true,
  realRealtimeConnected: true,
  liveMicrophoneTrack: true,
  modelResponseCompleted: true,
  modelAudioObserved: true,
  lifecycleInvariant: true,
  expectedTurns,
  speechStartedCount: expectedTurns,
  responseDoneCount: expectedTurns,
  workspaceResults,
  translationResults: [{ provider: "google-cloud-translation" }],
  twilioCallResults: [{
    provider: "twilio",
    action: "call.start",
    succeeded: true,
    verified: true,
    sid: "CA0123456789abcdef"
  }]
};

assert.deepStrictEqual(validateEvidence(valid, expectedTurns), []);
assert(validateEvidence({ ...valid, workspaceResults: workspaceResults.slice(1) }, expectedTurns).length > 0);
assert(validateEvidence({ ...valid, twilioCallResults: [] }, expectedTurns).length > 0);

const temporaryDir = fs.mkdtempSync(path.join(os.tmpdir(), "nexus-voice-evidence-"));
const evidencePath = path.join(temporaryDir, "evidence.json");
assert.throws(() => readAndValidateEvidence(evidencePath, expectedTurns), /missing/);
writeEvidenceAtomic(evidencePath, valid);
assert.deepStrictEqual(readAndValidateEvidence(evidencePath, expectedTurns), valid);
fs.writeFileSync(evidencePath, JSON.stringify({ ...valid, responseDoneCount: 17 }));
assert.throws(() => readAndValidateEvidence(evidencePath, expectedTurns), /Invalid voice evidence/);
fs.rmSync(temporaryDir, { recursive: true, force: true });

const browserHarness = fs.readFileSync(path.join(__dirname, "nexus-genesis-live-provider-browser-smoke.js"), "utf8");
const productionWorkflow = fs.readFileSync(path.join(__dirname, "..", ".github", "workflows", "nexus-production-voice-certification.yml"), "utf8");
const workspaceWorkflow = fs.readFileSync(path.join(__dirname, "..", ".github", "workflows", "nexus-workspace-playwright-proof.yml"), "utf8");

assert(browserHarness.includes("writeEvidenceAtomic(evidencePath, finalEvidence)"));
assert(browserHarness.includes("readAndValidateEvidence(evidencePath, expectedTurns)"));
assert(browserHarness.includes("return finish();"));
assert(browserHarness.includes("preliminary: true"));
assert(browserHarness.includes("live-provider-browser-failure.json"));
assert(browserHarness.includes("diagnostics: failureDiagnostics"));
assert(browserHarness.includes("show provider readiness for YouTube, Translation, Cloudinary, and Twilio"));
assert(!browserHarness.includes("send a production test SMS to my owner test recipient"));
assert(browserHarness.includes("prepare a Twilio test call to my configured owner test recipient"));
assert(browserHarness.includes("explicitly confirm that Twilio test call"));
assert(productionWorkflow.includes("Require complete structured voice evidence"));
assert(productionWorkflow.includes("steps.voice_evidence.outcome != 'success'"));
assert(productionWorkflow.includes("if-no-files-found: error"));
assert(workspaceWorkflow.includes("Require complete structured voice evidence"));
assert(workspaceWorkflow.includes("Publish workspace voice evidence"));
assert(productionWorkflow.includes("group: nexus-production-realtime-owner"));
assert(workspaceWorkflow.includes("group: nexus-production-realtime-owner"));
assert(productionWorkflow.includes("cancel-in-progress: false"));
assert(workspaceWorkflow.includes("cancel-in-progress: false"));

console.log("Nexus live voice evidence fail-closed QA passed.");
