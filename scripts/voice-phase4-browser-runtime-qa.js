const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const serverSource = fs.readFileSync(path.join(root, "server.js"), "utf8");

function sourceBetween(source, startNeedle, endNeedle) {
  const start = source.indexOf(startNeedle);
  assert.notEqual(start, -1, `Missing source start: ${startNeedle}`);
  const end = source.indexOf(endNeedle, start + startNeedle.length);
  assert.notEqual(end, -1, `Missing source end after ${startNeedle}: ${endNeedle}`);
  return source.slice(start, end);
}

const setVoiceResponseSource = sourceBetween(appSource, "function setVoiceResponse", "function stripStandaloneVoiceAcknowledgement");
const stopPlaybackSource = sourceBetween(appSource, "function stopVoicePlayback", "function beginNexusVoiceTurn");
const speakSource = sourceBetween(appSource, "function speakVoiceResponse", "function realtimeVoiceSupported");
const elevenLabsEnabledSource = sourceBetween(appSource, "function elevenLabsVoiceEnabled", "function elevenLabsVoiceActive");
const realtimeStartSource = sourceBetween(appSource, "async function startRealtimeVoiceSession", "function browserVoiceRuntimeProfile");
const refreshMicSource = sourceBetween(appSource, "function refreshMicSupport", "function normalizedWakeText");
const finalCommandSource = sourceBetween(appSource, "function processFinalVoiceCommand", "function scheduleFinalVoiceCommand");
const scheduleFinalSource = sourceBetween(appSource, "function scheduleFinalVoiceCommand", "async function startVoiceRuntimeTransport");
const voiceTransportSource = sourceBetween(appSource, "async function startVoiceRuntimeTransport", "async function startVoiceListening");
const startListeningSource = sourceBetween(appSource, "async function startVoiceListening", "async function sendModuleNotification");
const handleCoreSource = sourceBetween(appSource, "async function handleVoiceCommandCore", "async function handleVoiceCommand");

const requirements = [
  [
    "Web Speech final transcript enters debounced Companion-safe command path",
    voiceTransportSource.includes("voiceRecognition.onresult") &&
      voiceTransportSource.includes("if (finalTranscript) scheduleFinalVoiceCommand(finalTranscript, { source: \"voice\" });") &&
      scheduleFinalSource.includes("processFinalVoiceCommand(finalCommand, options)")
  ],
  [
    "Voice command turn starts before platform command handling",
    finalCommandSource.includes("const turnToken = beginNexusVoiceTurn(cleanedCommand || localizedCommand || finalCommand)") &&
      finalCommandSource.includes("handleVoiceCommand(finalCommand, { source: \"voice\", turnToken })")
  ],
  [
    "Browser voice command path records STT language metadata",
    finalCommandSource.includes('request("/api/voice/transcribe"') &&
      finalCommandSource.includes("language: languageCode()") &&
      finalCommandSource.includes("locale: voiceLocale()")
  ],
  [
    "Companion Understanding still wraps voice command core",
    handleCoreSource.includes("rememberCompanionUnderstanding(rawCommand") &&
      handleCoreSource.includes('source: options.source || "voice"')
  ],
  [
    "ElevenLabs follows server-selected runtime and cannot run beside legacy recognition",
    elevenLabsEnabledSource.includes('status?.runtime === "elevenlabs"') &&
      startListeningSource.includes("supervisor.start(options.source || \"start-voice-listening\")") &&
      voiceTransportSource.includes("const elevenLabsStarted = options.runtimeOnly === \"legacy\" ? false : await startElevenLabsVoiceSession") &&
      appSource.includes('if (status.runtime !== "elevenlabs") return false;') &&
      appSource.includes("stopNexusAudioFallbackRecorder(\"elevenlabs-selected\")")
  ],
  [
    "ElevenLabs UI is voice-first and workflow-scoped",
    refreshMicSource.includes("Nexus ElevenLabs Agents voice is live") &&
      refreshMicSource.includes("Workflow fields appear only after Nexus opens a workflow")
  ],
  [
    "Realtime server contract remains rollback-only while ElevenLabs exposes gated tool routing",
    serverSource.includes("OpenAI Realtime is disabled after the production gate failure") &&
      serverSource.includes("/api/voice/elevenlabs/tool") &&
      serverSource.includes("nexus_capability_router") &&
      serverSource.includes("Never claim an action completed")
  ],
  [
    "OpenAI TTS remains primary with Phase 2 language metadata",
    speakSource.includes('request("/api/voice/speak"') &&
      speakSource.includes("language: languageCode()") &&
      speakSource.includes("locale: voiceLocale()") &&
      speakSource.includes("forceOpenAi: true")
  ],
  [
    "Phase 3 provider failure recovery remains represented",
    speakSource.includes("browserSpeak(`OpenAI voice error:") &&
      speakSource.includes("browserSpeak(`OpenAI voice unavailable:") &&
      speakSource.includes("Browser speech fallback is off by default.") &&
      speakSource.includes("finishSpeaking();")
  ],
  [
    "Abort/interruption remains distinct from provider failure",
    speakSource.includes('if (error.name === "AbortError")') &&
      speakSource.includes('updateVoiceOutputStatus("Voice playback interrupted.")') &&
      !sourceBetween(speakSource, 'if (error.name === "AbortError")', "if (/sign in required/i").includes("browserSpeak(")
  ],
  [
    "Browser speech fallback remains off by default and opt-in only",
    appSource.includes('const BROWSER_SPEECH_FALLBACK_STORAGE_KEY = "agrinexusBrowserSpeechFallback"') &&
      appSource.includes("function browserSpeechFallbackEnabled()") &&
      appSource.includes('localStorage.getItem(BROWSER_SPEECH_FALLBACK_STORAGE_KEY) === "on"') &&
      !appSource.includes('localStorage.setItem(BROWSER_SPEECH_FALLBACK_STORAGE_KEY, "on")') &&
      speakSource.includes("Using opt-in browser speech fallback.")
  ],
  [
    "Voice-first restart after success or failure remains represented",
    speakSource.includes("resumeVoiceListeningAfterSpeech(playbackToken, interruptToken)") &&
      appSource.includes("function resumeVoiceListeningAfterSpeech") &&
      appSource.includes("const shouldResume = voiceFirstMode || voiceResumeAfterSpeech") &&
      appSource.includes("VOICE_RESTART_DELAY_MS")
  ],
  [
    "Turn-token and stale-response protection remain present",
    appSource.includes("let nexusVoiceTurnToken = 0") &&
      appSource.includes("function beginNexusVoiceTurn") &&
      appSource.includes("function isCurrentNexusVoiceTurn") &&
      setVoiceResponseSource.includes("if (options.turnToken && !isCurrentNexusVoiceTurn(options.turnToken)) return") &&
      speakSource.includes("if (playbackToken !== voicePlaybackToken || interruptToken !== voiceInterruptToken) return") &&
      appSource.includes("ignoreStaleNexusTurn(turnToken")
  ],
  [
    "Stop/interruption cancels active TTS requests and audio playback",
    stopPlaybackSource.includes("activeVoiceRequestController.abort()") &&
      stopPlaybackSource.includes("activeVoiceAudio.pause()") &&
      stopPlaybackSource.includes("speechSynthesis.cancel()")
  ],
  [
    "Voice runtime carries locale to native bridge state",
    voiceTransportSource.includes("updateNativeVoiceBridgeState(\"listening\", { locale: voiceLocale()") &&
      appSource.includes("language: languageCode()") &&
      appSource.includes("locale: voiceLocale()")
  ]
];

const missing = requirements.filter(([, passed]) => !passed).map(([name]) => name);
assert.deepEqual(missing, [], `Missing browser voice runtime requirements: ${missing.join(", ")}`);

console.log("Voice phase 4 browser runtime QA passed");
for (const [name] of requirements) console.log(`- ${name}`);
