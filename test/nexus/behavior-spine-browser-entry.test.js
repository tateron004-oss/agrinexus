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
  // The render/renderer-acknowledgement handling lives in
  // processNexusAuthoritativeBehaviorResult, a shared helper both the normal
  // turn() gateway and the confirm-and-resume gateway call into -- start the
  // slice there so this whitebox check covers both entrypoints.
  const start = source.indexOf("async function processNexusAuthoritativeBehaviorResult");
  const end = source.indexOf("async function handleNexusHealthcareCollaborationRuntimeCommand", start);
  const gateway = source.slice(start, end);
  assert.match(gateway, /validateNexusPassivePresentation\(result\.render\)/);
  assert.match(gateway, /renderer\.render\(result\.render\)/);
  // Confirmed live: rendering was attempted unconditionally for every
  // state, including confirmation_required/clarification_required -- those
  // always throw ("outcome was not visibly or audibly verified") since
  // nothing was actually staged to render yet, and the caller's catch
  // silently fell through to legacy routing. Only render_required has a
  // real render/acknowledge round trip staged server-side.
  assert.match(gateway, /result\.render\s*&&\s*result\.state === "render_required"/);
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/acknowledgements/);
  assert.doesNotMatch(gateway, /genesisWorkspaceActionFromFinalTranscript\(text\)/);
  assert.doesNotMatch(gateway, /runMusicAssistantCommand\(text/);
});

test("media completion requires observed player state instead of a provider playing assertion", () => {
  const start = source.indexOf("async function renderNexusPassiveWorkspace");
  const end = source.indexOf("// Production certification invokes this", start);
  const renderer = source.slice(start, end);
  assert.match(renderer, /verifyNexusYouTubePlaybackStarted/);
  assert.match(renderer, /playNexusProviderNeutralMusic/);
  assert.match(renderer, /if \(!audible\)/);
  assert.match(renderer, /genuine provider-owned audible progress/);
  assert.match(renderer, /advancedSeconds \|\| 0\) >= 3/);
  assert.match(renderer, /playback\?\.telemetry\?\.playerState === 1/);
  assert.match(renderer, /playbackStarted: outcome\.workspace === "media" \? audible/);
  assert.match(source, /playerState === 1\) \{[\s\S]{0,100}finish\(true, "playing"/);
});

test("map and document completion require complete user-observable outcomes", () => {
  assert.match(source, /function nexusMapOutcomeVerified/);
  assert.match(source, /userMapLayers\.route\?\.getLayers\?\.\(\)\.length > 0/);
  assert.match(source, /userMapLayers\.markers\?\.getLayers\?\.\(\)\.length >= 2/);
  assert.match(source, /function renderNexusAuthoritativeDocument/);
  assert.match(source, /data\.reopenVerified !== true/);
  assert.match(source, /nexusDocumentLifecycle = "reopened"/);
  assert.match(source, /created_saved_closed_reopened/);
});

test("signed-in render restores authoritative conversation and database readiness", () => {
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/readiness/);
  assert.match(source, /\/api\/nexus\/runtime\/behavior\/conversation\?conversationId=/);
  assert.match(source, /Production database connected\. Authoritative conversation recovery is active\./);
  assert.match(source, /void restoreNexusAuthoritativeRuntime\(\)/);
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
