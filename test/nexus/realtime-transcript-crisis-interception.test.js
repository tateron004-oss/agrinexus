"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const appSource = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function loadExecuteGenesisWorkspaceFromFinalTranscript({ mentalHealthHandled }) {
  const start = appSource.indexOf("async function executeGenesisWorkspaceFromFinalTranscript(");
  const end = appSource.indexOf("\nasync function startOpenAiAgentsRealtimeVoiceSession(", start);
  assert.ok(start > 0 && end > start, "could not locate executeGenesisWorkspaceFromFinalTranscript in app.js");

  const calls = { mentalHealth: [], genesisAction: 0, bridge: 0 };
  const sandbox = {
    lastGenesisTranscriptWorkspaceExecution: { command: "", at: 0 },
    nexusGenesisExperienceActivated: false,
    nexusTrueExperienceSessionStarted: false,
    handleNexusMentalHealthBehavioralWellnessCommand: (command, options) => {
      calls.mentalHealth.push({ command, options });
      return mentalHealthHandled;
    },
    genesisWorkspaceActionFromFinalTranscript: () => { calls.genesisAction += 1; return { requestId: "req1", workspace: "agriculture" }; },
    rememberAuthoritativeGenesisTranscriptRoute: () => {},
    runAuthoritativeGenesisWorkspaceBridge: async () => { calls.bridge += 1; return { verified: true }; },
    nexusGenesisVoiceDebugLog: () => {}
  };
  vm.createContext(sandbox);
  vm.runInContext(appSource.slice(start, end) + "\nthis.run = executeGenesisWorkspaceFromFinalTranscript;", sandbox);
  return { run: sandbox.run, calls };
}

test("a crisis statement in the OpenAI Realtime raw transcript is intercepted before any workspace action executes", async () => {
  // This is the only point in the live Realtime voice pathway where the
  // server-side tool-call-argument paraphrase problem cannot reach: the
  // browser sees the user's actual spoken words here, before the model
  // rewrites them into its own tool-call arguments. Confirmed live that a
  // direct crisis statement reached ordinary tool execution because nothing
  // upstream of the tool call ever classified the raw transcript.
  const { run, calls } = loadExecuteGenesisWorkspaceFromFinalTranscript({ mentalHealthHandled: true });
  const handled = await run("I want to end my life, I don't see the point anymore.");
  assert.equal(handled, true);
  assert.equal(calls.mentalHealth.length, 1);
  assert.equal(calls.mentalHealth[0].command, "I want to end my life, I don't see the point anymore.");
  assert.equal(calls.mentalHealth[0].options.source, "openai-realtime-final-transcript");
  assert.equal(calls.genesisAction, 0, "no workspace action may be computed once the safety net has handled the transcript");
  assert.equal(calls.bridge, 0, "no workspace bridge call may execute once the safety net has handled the transcript");
});

test("an ordinary transcript is not intercepted and still executes its workspace action", async () => {
  const { run, calls } = loadExecuteGenesisWorkspaceFromFinalTranscript({ mentalHealthHandled: false });
  const handled = await run("Show a route from Nairobi to Nakuru.");
  assert.equal(handled, true);
  assert.equal(calls.mentalHealth.length, 1);
  assert.equal(calls.genesisAction, 1);
  assert.equal(calls.bridge, 1);
});
