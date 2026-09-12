const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..", "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function functionSource(name) {
  const start = app.indexOf(`function ${name}`);
  assert.notEqual(start, -1, `${name} exists`);
  const nextFunction = app.indexOf("\nfunction ", start + 1);
  const nextAsyncFunction = app.indexOf("\nasync function ", start + 1);
  const candidates = [nextFunction, nextAsyncFunction].filter(index => index > start);
  const end = Math.min(...candidates);
  assert.ok(Number.isFinite(end), `${name} has a source boundary`);
  return app.slice(start, end);
}

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext([
  functionSource("normalizedWakeText"),
  functionSource("isNexusVisualProviderQuestionReportCommand"),
  functionSource("nexusVisualProviderQuestionAudience"),
  functionSource("nexusVisualProviderQuestions")
].join("\n"), sandbox);

[
  ["show the questions I should ask my doctor", "doctor"],
  ["list questions I should ask my physician", "doctor"],
  ["show questions I should ask my nurse", "nurse"],
  ["list the questions I should ask my pharmacist", "pharmacist"],
  ["Nexus, show pharmacist questions", "pharmacist"]
].forEach(([command, audience]) => {
  assert.equal(sandbox.isNexusVisualProviderQuestionReportCommand(command), true, `${command} opens a report`);
  assert.equal(sandbox.nexusVisualProviderQuestionAudience(command), audience, `${command} selects ${audience}`);
});

[
  "tell me about doctors",
  "open pharmacy",
  "what is a medication allergy",
  "show my health readings"
].forEach(command => {
  assert.equal(sandbox.isNexusVisualProviderQuestionReportCommand(command), false, `${command} does not falsely open a report`);
});

const doctorQuestions = sandbox.nexusVisualProviderQuestions("doctor", {
  symptoms: "dizziness",
  medications: "lisinopril",
  allergies: "penicillin",
  readings: "BP 138/86"
});
assert.ok(doctorQuestions.some(question => question.includes("dizziness")), "doctor report personalizes symptoms");
assert.ok(doctorQuestions.some(question => question.includes("lisinopril")), "doctor report personalizes medications");
assert.ok(doctorQuestions.some(question => question.includes("penicillin")), "doctor report personalizes allergies");
assert.ok(doctorQuestions.some(question => question.includes("138/86")), "doctor report personalizes readings");
assert.ok(doctorQuestions.some(question => /urgent or emergency care/i.test(question)), "doctor set includes urgent warning-sign question");

const pharmacistQuestions = sandbox.nexusVisualProviderQuestions("pharmacist", {});
assert.ok(pharmacistQuestions.some(question => /interact/i.test(question)), "pharmacist set includes interaction question");
assert.ok(pharmacistQuestions.some(question => /miss a dose/i.test(question)), "pharmacist set safely redirects missed-dose decisions");
assert.ok(pharmacistQuestions.some(question => /side effects/i.test(question)), "pharmacist set includes side-effect warning question");

const renderer = functionSource("renderNexusVisualProviderQuestionReport");
[
  'role", "dialog"',
  'aria-modal", "true"',
  "Nexus Visual Provider Question Report",
  "data-nexus-provider-question-action=\"read\"",
  "data-nexus-provider-question-action=\"large-text\"",
  "data-nexus-provider-question-action=\"fullscreen\"",
  "data-nexus-provider-question-action=\"print\"",
  "data-nexus-provider-question-action=\"download\"",
  "data-nexus-provider-question-action=\"share\"",
  "data-nexus-provider-question-context=\"${name}\"",
  "translateText(question)",
  'lang="${escapeHtml(languageCode())}"',
  'tabindex="-1"',
  "nexus-provider-question-print-context",
  "Medical safety warning"
].forEach(token => assert.ok(renderer.includes(token), `visual report renderer includes ${token}`));

const clickHandler = functionSource("handleNexusVisualProviderQuestionReportClick");
[
  "setVoiceResponse(nexusVisualProviderQuestionReportText(), true",
  "allowLongResponse: true",
  "longForm: true",
  "requestFullscreen",
  "window.print()",
  "new Blob",
  "URL.createObjectURL",
  "navigator.share",
  "navigator.clipboard"
].forEach(token => assert.ok(clickHandler.includes(token), `report control wiring includes ${token}`));

const openHandler = functionSource("openNexusVisualProviderQuestionReport");
assert.ok(openHandler.includes("setVoiceResponse(response, true"), "voice report opening uses the existing response pipeline");
assert.ok(openHandler.includes("options.speak !== false"), "visual-only Realtime opening can suppress duplicate local speech");

const typedRoute = functionSource("routeNexusCommandCenterCommunicationSubmit");
assert.ok(
  typedRoute.indexOf("handleNexusVisualProviderQuestionReportCommand") < typedRoute.indexOf("handleNexusEnterpriseHealthEvidenceTrustCommand"),
  "typed report request routes before generic health explanation"
);

const voiceCore = app.slice(
  app.indexOf("async function handleVoiceCommandCore"),
  app.indexOf("async function handleVoiceCommand(")
);
assert.ok(
  voiceCore.indexOf("handleNexusVisualProviderQuestionReportCommand") < voiceCore.indexOf("handleNexusUnifiedBrainRuntimeCommand"),
  "voice report request routes before generic voice intelligence"
);

const finalTranscript = functionSource("processFinalVoiceCommand");
assert.ok(finalTranscript.includes("realtimeVoiceActive()"), "Realtime transcript path remains active");
assert.ok(finalTranscript.includes('source: "realtime-voice-provider-question-report"'), "Realtime transcript opens the visible report");
assert.ok(finalTranscript.includes("speak: false"), "Realtime visual report does not create overlapping local speech");
assert.ok(finalTranscript.includes("visualOnly: true"), "Realtime visual report does not alter the protected orb/voice response state");
assert.ok(
  finalTranscript.indexOf("handleNexusVisualProviderQuestionReportCommand") < finalTranscript.indexOf('legacy-transcript-ignored-realtime-active'),
  "Realtime visual report opens before legacy transcript duplicate suppression"
);

assert.ok(app.includes('data-nexus-provider-question-report-open="doctor"'), "Health workspace exposes the doctor/nurse report");
assert.ok(app.includes('data-nexus-provider-question-report-open="pharmacist"'), "Pharmacy workspace exposes the pharmacist report");
assert.ok(app.includes('{ label: "Doctor Questions", command: "show questions I should ask my doctor" }'), "Health preview exposes a visible report command");

[
  ".nexus-provider-question-report-shell",
  ".nexus-provider-question-report-large",
  ".nexus-provider-question-report-controls",
  ".nexus-provider-question-context-grid",
  ".nexus-provider-question-print-context",
  ".nexus-provider-question-safety",
  "@media (max-width: 700px)",
  "@media (prefers-reduced-motion: reduce)",
  "@media print",
  ":focus-visible"
].forEach(token => assert.ok(styles.includes(token), `accessible report styles include ${token}`));

const speechBlock = functionSource("speakVoiceResponse");
assert.ok(speechBlock.includes("resumeVoiceListeningAfterSpeech"), "read-aloud returns to the existing listening lifecycle");
const realtimeEvents = functionSource("handleOpenAiAgentsRealtimeEvent");
assert.ok(realtimeEvents.includes('eventName === "audio_stopped"'), "Realtime audio completion remains observable");
assert.ok(realtimeEvents.includes('updateRealtimeControllerState("listening"'), "Realtime returns to listening after audio");

assert.ok(/does not diagnose, prescribe, change medicines/i.test(functionSource("nexusVisualProviderQuestionSafetyWarning")), "report has medical scope warning");
assert.ok(/seek local emergency help now/i.test(functionSource("nexusVisualProviderQuestionSafetyWarning")), "report has urgent emergency warning");
assert.equal(pkg.scripts["qa:nexus-visual-provider-question-report"], "node archive/qa-scripts/nexus-visual-provider-question-report-qa.js", "package QA alias exists");
assert.ok(qaSuite.includes("archive/qa-scripts/nexus-visual-provider-question-report-qa.js"), "QA suite includes visual provider report regression");

console.log("Nexus visual provider question report QA passed.");
