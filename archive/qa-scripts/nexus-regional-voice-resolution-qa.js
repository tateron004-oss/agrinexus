const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exit(1);
  }
  console.log(`PASS ${message}`);
}

function includes(source, token, message) {
  assert(source.includes(token), message || `contains ${token}`);
}

function blockBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `block start exists: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `block end exists: ${end}`);
  return source.slice(startIndex, endIndex);
}

const contractBlock = blockBetween(app, "const NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT", "const NEXUS_CORE_STATE_CONTRACT");
[
  'schemaVersion: "nexus-regional-voice-resolution.v1"',
  'registryName: "NexusRegionalVoiceResolver"',
  'resolver: "resolveNexusRegionalVoice"',
  'voiceSelectionHelper: "chooseSpeechVoice"',
  '"en-US"',
  '"fr-FR"',
  '"sw-KE"',
  '"ar-EG"',
  '"es-ES"',
  '"pt-BR"',
  '"exact-locale-browser-voice"',
  '"language-family-browser-voice"',
  '"stored-browser-voice-preference"',
  '"browser-default-voice"',
  '"caption-and-typed-fallback"',
  "noFakeAccent: true",
  "noRegionalAccentClaimWithoutProvider: true",
  "noVoiceCloning: true",
  "noCharacterImitation: true",
  "discloseFallbackVoice: true",
  "captionsRemainAvailable: true"
].forEach(token => includes(contractBlock, token, `regional voice contract token ${token}`));

const resolverBlock = blockBetween(app, "function resolveNexusRegionalVoice", "function nexusRegionalVoiceSummary");
[
  "window.speechSynthesis && window.SpeechSynthesisUtterance",
  "window.speechSynthesis.getVoices",
  "browserVoiceStorageKey(requestedLocale)",
  "voiceMatchesLocale(voice, requestedLocale)",
  "scoreNexusRegionalVoiceCandidate",
  "exact-locale-browser-voice",
  "language-family-browser-voice",
  "browser-default-voice",
  "caption-and-typed-fallback",
  "providerSuppliedRegionalVoice",
  "No browser voice list is available yet; captions and typed fallback remain available.",
  "Speech synthesis is unsupported; captions and typed fallback remain available.",
  "noFakeAccent: true",
  "noRegionalAccentClaimWithoutProvider: true",
  "captionsRemainAvailable: true",
  "textFallbackAvailable: true",
  "options.persist !== false"
].forEach(token => includes(resolverBlock, token, `regional voice resolver token ${token}`));

const chooseBlock = blockBetween(app, "function chooseSpeechVoice", "function installStableSpeechVoicePreference");
[
  "resolveNexusRegionalVoice(locale)",
  "return resolved.voice || null"
].forEach(token => includes(chooseBlock, token, `chooseSpeechVoice delegates to resolver token ${token}`));

const badgeBlock = blockBetween(app, "function renderNexusPresenceRuntimeBadge", "if (typeof window !== \"undefined\")");
[
  "const regionalVoice = nexusRegionalVoiceSummary()",
  'data-nexus-regional-voice-resolution="${escapeHtml(regionalVoice.schemaVersion)}"',
  'data-nexus-regional-voice-locale="${escapeHtml(regionalVoice.requestedLocale)}"',
  'data-nexus-regional-voice-match="${escapeHtml(regionalVoice.matchType)}"',
  'data-nexus-regional-voice-provider-supplied="${regionalVoice.providerSuppliedRegionalVoice ? "true" : "false"}"',
  "regionalVoice.fallbackReason"
].forEach(token => includes(badgeBlock, token, `regional voice badge token ${token}`));

[
  "window.NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT = NEXUS_REGIONAL_VOICE_RESOLUTION_CONTRACT",
  "window.resolveNexusRegionalVoice = resolveNexusRegionalVoice",
  "window.nexusRegionalVoiceSummary = nexusRegionalVoiceSummary"
].forEach(token => includes(app, token, `regional voice API exposure ${token}`));

assert(!/fake accent available|imitates regional accent|voice clone|character imitation/i.test(contractBlock + resolverBlock + badgeBlock), "regional resolver avoids unsafe accent/clone claims");
assert(pkg.scripts["qa:nexus-regional-voice-resolution"] === "node scripts/nexus-regional-voice-resolution-qa.js", "package alias exists");
assert(qaSuite.includes("scripts/nexus-regional-voice-resolution-qa.js"), "safe QA suite includes regional voice resolution QA");

console.log("Nexus regional voice resolution QA passed.");
