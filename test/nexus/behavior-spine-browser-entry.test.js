"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const source = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("browser gateway sends requests to the authoritative behavior turn and fails closed", () => {
  const start = source.indexOf("async function handleNexusUnifiedBrainRuntimeCommand");
  const end = source.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand", start);
  const gateway = source.slice(start, end);
  assert.match(gateway, /requestWithTimeout\("\/api\/nexus\/runtime\/behavior\/turn"/);
  assert.match(gateway, /result\.authoritative !== true/);
  assert.match(gateway, /result\.legacyFallbackUsed !== false/);
  assert.match(gateway, /No legacy route was used/);
  assert.match(gateway, /return true;/);
  assert.doesNotMatch(gateway, /shouldHandleBeforeLegacy/);
  assert.doesNotMatch(gateway, /routeNexusIntentDrivenWorkflowCommand/);
});

test("voice enters the authoritative gateway before legacy behavior handlers", () => {
  const start = source.indexOf("async function handleVoiceCommandCore");
  const end = source.indexOf("function voiceCrashRecoveryMessage", start);
  const voice = source.slice(start, end);
  const gateway = voice.indexOf("handleNexusUnifiedBrainRuntimeCommand(trustChainInput");
  assert.ok(gateway > -1);
  [
    "handleNexusDailyCompanionCommand(trustChainInput",
    "runNexusNormalConversationPreflight(trustChainInput",
    "handleNexusAgricultureCollaborationRuntimeCommand(",
    "launchCapabilityFromVoice(standardUserVoiceCommand)"
  ].forEach(marker => assert.ok(gateway < voice.indexOf(marker), `${marker} must follow the gateway`));
});

test("the live voice and typed entrypoint cannot enter the legacy command core", () => {
  const start = source.indexOf("async function handleVoiceCommand(rawCommand");
  const end = source.indexOf("async function runBackendAgentCommand", start);
  const liveGateway = source.slice(start, end);
  assert.match(liveGateway, /handleNexusUnifiedBrainRuntimeCommand\(command/);
  assert.doesNotMatch(liveGateway, /handleVoiceCommandCore\(/);
});

test("authoritative browser completion requires typed rendering and server acknowledgement", () => {
  const start = source.indexOf("async function handleNexusUnifiedBrainRuntimeCommand");
  const end = source.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand", start);
  const gateway = source.slice(start, end);
  assert.match(gateway, /result\.render\?\.schema === "nexus\.workspace-outcome\.v1"/);
  assert.match(gateway, /renderer\.render\(result\.render\)/);
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/acknowledgements/);
  assert.doesNotMatch(gateway, /genesisWorkspaceActionFromFinalTranscript\(text\)/);
  assert.doesNotMatch(gateway, /runMusicAssistantCommand\(text/);
});

test("each command-center submit gateway precedes legacy intent routing", () => {
  const eventHandlers = source.slice(source.indexOf("function bindStatic()"));
  const lines = eventHandlers.split("\n");
  const gatewayLines = [];
  const legacyLines = [];
  lines.forEach((line, index) => {
    if (line.includes("handleNexusUnifiedBrainRuntimeCommand(command, { source: \"typed-command-submit\" })")) gatewayLines.push(index);
    if (line.includes("routeNexusIntentDrivenWorkflowCommand(command, { source: \"typed-command-submit\" })")) legacyLines.push(index);
  });
  assert.ok(gatewayLines.length >= 3, "all command-center submit paths need the gateway");
  legacyLines.forEach(legacy => {
    const gateway = gatewayLines.filter(line => line < legacy).at(-1);
    assert.ok(Number.isInteger(gateway) && legacy - gateway < 80, `legacy route at ${legacy + 1} lacks an authoritative gateway`);
  });
});
