const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const dialogue = require("../public/nexus-open-dialogue-runtime.js");
const voice = require("../public/nexus-conversational-voice-runtime.js");
const navigation = require("../public/nexus-universal-navigation-runtime.js");

function assertIncludes(text, expected, label) {
  assert.ok(String(text).includes(expected), `${label} should include ${expected}`);
}

function assertNotIncludes(text, rejected, label) {
  assert.ok(!String(text).includes(rejected), `${label} should not include ${rejected}`);
}

const requiredStates = ["unavailable", "idle", "listening", "processing", "reasoning", "routing", "speaking", "paused", "error"];
for (const state of requiredStates) {
  assert.ok(voice.VOICE_STATES.includes(state), `voice state ${state} should exist`);
}

assert.equal(voice.localeForLanguage("en"), "en-US");
assert.equal(voice.localeForLanguage("es"), "es-ES");
assert.equal(voice.localeForLanguage("fr"), "fr-FR");
assert.equal(voice.localeForLanguage("sw"), "sw-KE");
assert.equal(voice.localeForLanguage("ar"), "ar");
assert.equal(voice.localeForLanguage("pt"), "pt-BR");

assert.equal(voice.FALLBACKS.voiceInputUnavailable, "Voice input is unavailable in this browser. You can type the same command in Ask Nexus.");
assert.equal(voice.FALLBACKS.voiceOutputUnavailable, "Voice output is unavailable in this browser. Nexus response is shown on screen.");
assert.equal(voice.FALLBACKS.selectedLanguageInputUnsupported, "Voice input may not be supported for the selected language in this browser. You can type the command instead.");
assert.equal(voice.FALLBACKS.selectedLanguageOutputUnsupported, "Voice output may not be available for the selected language in this browser. Nexus will show the response on screen.");

const noVoiceSupport = voice.detectSupport({});
assert.equal(noVoiceSupport.speechRecognition, false);
assert.equal(noVoiceSupport.speechSynthesis, false);

const health = dialogue.respond("How do I know if heat illness is serious?", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(health.domain, "health");
assert.equal(health.noExecutionAuthorized, true);
assert.equal(health.requiresConfirmation, false);
assert.ok(/not a (medical )?diagnosis/i.test(health.answer), "health answer should include diagnosis boundary");
assert.ok(health.safetyNotes.some(note => /not a diagnosis|emergency/i.test(note)), "health answer should include clinical safety notes");

const crop = dialogue.respond("What should I do if my crop leaves are turning yellow?", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(crop.domain, "agriculture");
assert.equal(crop.noExecutionAuthorized, true);
assert.equal(crop.suggestedWorkspace.id, "crop-support");
assertIncludes(crop.answer, "crop", "crop answer");
assert.ok(/observe/i.test(crop.answer), "crop answer should include observe guidance");

const marketplace = dialogue.respond("What is the best way to sell produce to buyers?", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(marketplace.domain, "marketplace");
assert.equal(marketplace.noExecutionAuthorized, true);
assert.ok(marketplace.blockedActions.some(action => /payment|buyer|contact/i.test(action)), "marketplace blocked actions should mention payment/contact safety");

const logistics = dialogue.respond("Why is my shipment delayed?", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(logistics.domain, "logistics");
assert.ok(logistics.blockedActions.some(action => /GPS|dispatch|route/i.test(action)), "logistics blocked actions should preserve no-execution safety");

const drone = dialogue.respond("Can Nexus start a drone mission for field survey?", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(drone.domain, "drone");
assert.ok(drone.blockedActions.some(action => /drone|flight/i.test(action)), "drone answer should block launch/flight execution");

const workforce = dialogue.respond("What training should I take to get a farm logistics job?", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(workforce.domain, "learning_workforce");
assert.equal(workforce.suggestedWorkspace.id, "workforce-home");

const provider = dialogue.respond("What is connected and why is this blocked?", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(provider.domain, "provider_activation");
assertIncludes(provider.answer, "credentials", "provider readiness answer");
assert.equal(provider.noExecutionAuthorized, true);

const thanks = dialogue.respond("Thank you", { language: "en", navigationRuntime: navigation });
assert.equal(thanks.intentType, "polite_social");
assertIncludes(thanks.answer, "welcome", "thank-you answer");

const spanish = dialogue.respond("Que puede hacer Nexus?", { language: "es", navigationRuntime: navigation });
assert.equal(spanish.language, "es");
assert.equal(spanish.intentType, "global_capability_question");

const directCommand = dialogue.shouldHandleBeforeLegacy("Nexus, open agriculture help.", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(directCommand, false, "direct navigation commands should remain with universal routing");

const liveFallback = dialogue.respond("Find current sources about tomato blight best practices", {
  language: "en",
  navigationRuntime: navigation
});
assert.equal(liveFallback.liveKnowledgeUsed, false);
assert.equal(liveFallback.sources.length, 0);
assert.ok(liveFallback.providerRequirements.length >= 1, "unconfigured source-backed request should explain missing live retrieval");

const index = read("public/index.html");
const styles = read("public/styles.css");
assertIncludes(index, "/nexus-open-dialogue-runtime.js", "index scripts");
assertIncludes(index, "/nexus-conversational-voice-runtime.js", "index scripts");
assertIncludes(index, "id=\"nexusMultilingualVoiceRuntime\"", "voice UI");
assertIncludes(index, "data-nexus-conversation-action=\"listen\"", "voice UI");
assertIncludes(index, "data-nexus-conversation-action=\"repeat\"", "voice UI");
assertIncludes(index, "data-nexus-conversation-action=\"mute\"", "voice UI");
assertIncludes(index, "data-nexus-conversation-response", "voice UI");
assertIncludes(styles, "body.user-mode .user-voice-dock", "voice dock styles");
assertIncludes(styles, "display: grid !important", "voice dock final visibility override");
assertIncludes(styles, ".nexus-conversation-runtime", "conversational runtime styles");

const app = read("public/app.js");
assertIncludes(app, "handleNexusMultilingualOpenDialogueRuntimeCommand", "app bridge");
assertIncludes(app, "window.NexusOpenDialogueRuntime", "app bridge");
assertIncludes(app, "window.NexusConversationalVoiceRuntime.renderDialogueResult", "app bridge");
assertIncludes(app, "source: \"multilingual-open-dialogue-runtime\"", "app bridge metadata");

const voiceSource = read("public/nexus-conversational-voice-runtime.js");
assertIncludes(voiceSource, "SpeechRecognition", "voice runtime");
assertIncludes(voiceSource, "webkitSpeechRecognition", "voice runtime");
assertIncludes(voiceSource, "speechSynthesis", "voice runtime");
assertIncludes(voiceSource, "SpeechSynthesisUtterance", "voice runtime");
assertIncludes(voiceSource, "recognition.continuous = false", "no always-on listening");
assertIncludes(voiceSource, "meta.source !== \"typed\"", "typed fallback should not force browser speech output");
assertIncludes(voiceSource, "utterance.rate = 0.92", "conservative voice rate");
assertIncludes(voiceSource, "utterance.pitch = 0.9", "conservative voice pitch");
assertIncludes(voiceSource, "utterance.volume = 1", "conservative voice volume");

const dialogueSource = read("public/nexus-open-dialogue-runtime.js");
assertIncludes(dialogueSource, "noExecutionAuthorized", "open dialogue no-execution field");
assertIncludes(dialogueSource, "No fake citations were generated", "source honesty");
assertNotIncludes(dialogueSource, "SMS sent", "dialogue runtime");
assertNotIncludes(dialogueSource, "payment completed", "dialogue runtime");
assertNotIncludes(dialogueSource, "appointment booked", "dialogue runtime");

const pkg = JSON.parse(read("package.json"));
assert.equal(pkg.scripts["qa:nexus-voice-open-dialogue-runtime"], "node scripts/nexus-voice-open-dialogue-runtime-qa.js");

const qaSuite = read("scripts/qa-suite.js");
assertIncludes(qaSuite, "scripts/nexus-voice-open-dialogue-runtime-qa.js", "qa-suite voice wiring");

console.log("Nexus voice/open-dialogue runtime QA passed.");
