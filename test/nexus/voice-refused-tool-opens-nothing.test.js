"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found testing the live site: a health request by voice from an account that may not use health ("Sign in with a full account to continue") still carried a workspace to open; the page tried to open it, could not, and the
// tool call ended in an exception ("Nexus workspace verification failed for health"). The model never heard the real reason. A refused action opens nothing, and a workspace that will not open never replaces what the server said.

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("  const answerOnScreen = kyroShowResultScreen(toolName, command, result);");
const end = app.indexOf('  nexusGenesisVoiceDebugLog("openai-agents-tool-http-result"', start);
assert.ok(start > 0 && end > start);
const segment = app.slice(start, end);

async function run(result, { bridgeThrows = false } = {}) {
  const calls = { bridge: 0, logs: [] };
  const sandbox = { toolName: "nexus_health_preparation", command: "I missed my medicine this morning", correlationId: "c1", result,
    kyroShowResultScreen: () => false, genesisWorkspaceActionFromFinalTranscript: () => null, executeGenesisWorkspaceFromFinalTranscript: async () => false,
    runAuthoritativeGenesisWorkspaceBridge: async () => { calls.bridge += 1; if (bridgeThrows) throw new Error("Nexus workspace verification failed for health (x)."); },
    nexusGenesisVoiceDebugLog: (name) => calls.logs.push(name) };
  vm.createContext(sandbox);
  await vm.runInContext(`(async () => {\n${segment}\n})()`, sandbox);
  return { result: sandbox.result, calls };
}

test("a refused action opens no workspace and keeps the server's own sentence", async () => {
  for (const status of ["restricted", "denied", "blocked"]) {
    const { result, calls } = await run({ ok: true, status, response: "This account type cannot use that action here. Sign in with a full account to continue.", genesisAction: { type: "genesis.workspace.open", workspace: "health" } });
    assert.equal(calls.bridge, 0, status);
    assert.equal(result.response, "This account type cannot use that action here. Sign in with a full account to continue.");
  }
});

test("a workspace that will not open does not turn the answer into an exception: the server's sentence stays, and it is marked not opened", async () => {
  const { result, calls } = await run({ ok: true, status: "completed", response: "Here is what I found.", genesisAction: { type: "genesis.workspace.open", workspace: "health" } }, { bridgeThrows: true });
  assert.equal(calls.bridge, 1);
  assert.equal(result.response, "Here is what I found."); assert.equal(result.workspaceOpened, false); assert.equal(result.executionVerified, false);
  assert.deepEqual(calls.logs, ["openai-agents-workspace-bridge-failed"]);
});

test("an ordinary result still opens its workspace", async () => {
  const { calls } = await run({ ok: true, status: "completed", response: "ok", genesisAction: { type: "genesis.workspace.open", workspace: "trade" } });
  assert.equal(calls.bridge, 1);
});
