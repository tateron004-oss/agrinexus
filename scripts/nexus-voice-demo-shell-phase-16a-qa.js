const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  shell: path.join(root, "public", "nexus-voice-demo-shell.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  doc: path.join(root, "docs", "NEXUS_VOICE_DEMO_SHELL_PHASE_16A.md"),
  phase14h: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14h-adapter-chain-test-harness-qa.js"),
  phase14i: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14i-eligibility-candidate-source-audit-qa.js"),
  phase14j: path.join(root, "scripts", "nexus-controlled-low-risk-renderer-phase-14j-candidate-payload-contract-qa.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-voice-demo-shell-phase-16a-qa] ${message}`);
    process.exit(1);
  }
}

function assertExists(filePath, label) {
  assert(fs.existsSync(filePath), `${label} must exist.`);
}

Object.entries(paths).forEach(([label, filePath]) => assertExists(filePath, label));

const index = read(paths.index);
const app = read(paths.app);
const shell = read(paths.shell);
const packageJson = read(paths.packageJson);
const qaSuite = read(paths.qaSuite);
const doc = read(paths.doc);

assert(index.includes("id=\"nexusVoiceDemoTalkBtn\""), "Standard User UI must include Talk to Nexus control.");
assert(index.includes("Talk to Nexus"), "Voice control must use the Talk to Nexus label.");
assert(index.includes("id=\"nexusVoiceDemoIntroBtn\""), "Standard User UI must include Introduce Nexus control.");
assert(index.includes("Introduce Nexus"), "Voice dock must include the Introduce Nexus label.");
assert(index.includes("id=\"nexusVoiceDemoStatus\""), "Voice demo status must be present.");
assert(index.includes("id=\"nexusVoiceDemoTranscript\""), "Voice demo transcript preview must be present.");
assert(index.includes("/nexus-voice-demo-shell.js"), "Voice demo shell module must be loaded by index.html.");
assert(index.includes("Nexus Voice Demo"), "Standard User voice dock must include the Nexus Voice Demo label.");
assert(index.includes("Push-to-talk access assistant. Demo-safe."), "Voice demo label must explain the demo-safe push-to-talk boundary.");
assert(index.includes("No provider contact, calls, prescriptions, payments, or location sharing."), "Voice demo label must state no provider contact, calls, prescriptions, payments, or location sharing.");
assert(index.includes("Browser speech recognition support varies. You can type the same Nexus command, and the safety behavior remains the same."), "Voice demo UI must include browser speech-recognition fallback copy.");
[
  "Nexus, I need telehealth",
  "Nexus, help me find a mobile clinic",
  "Nexus, I need pharmacy support",
  "Nexus, I need transportation to care",
  "Nexus, call my doctor"
].forEach(prompt => {
  assert(index.includes(`data-nexus-voice-demo-prompt="${prompt}"`), `Meeting-safe quick prompt must exist: ${prompt}`);
});

assert(app.includes("NexusVoiceDemoShellBridge"), "app.js must expose a narrow NexusVoiceDemoShellBridge.");
assert(app.includes("isNexusVoiceDemoHighRiskPrompt"), "app.js must classify high-risk voice demo prompts.");
assert(app.includes("isNexusVoiceDemoHealthAccessPrompt"), "app.js must classify safe health-access voice demo prompts.");
assert(app.includes("isNexusVoiceDemoHealthExecutionPrompt"), "app.js must classify healthcare execution prompts as guarded.");
assert(app.includes("isNexusVoiceDemoEmergencyPrompt"), "app.js must classify emergency prompts.");
assert(app.includes("nexusVoiceDemoHealthAccessResponse"), "app.js must include safe health-access voice responses.");
assert(app.includes("nexusVoiceDemoIntroResponse"), "app.js must include the Healthcare Demo Mode intro response.");
assert(app.includes("nexusVoiceDemoShellResponse"), "app.js must provide safe voice demo responses.");
assert(app.includes("executionAllowed: false"), "Voice demo bridge must explicitly report no execution authority.");
assert(app.includes("providerHandoff: false"), "Voice demo bridge must explicitly report no provider handoff.");
assert(app.includes("permissionRequested: false"), "Voice demo bridge must explicitly report no permission request.");

assert(shell.includes("window.SpeechRecognition || window.webkitSpeechRecognition"), "Shell must use browser-native speech recognition feature detection.");
assert(shell.includes("window.speechSynthesis"), "Shell must feature-detect browser speech synthesis.");
assert(shell.includes("SpeechSynthesisUtterance"), "Shell must use browser-native SpeechSynthesisUtterance.");
assert(shell.includes("addEventListener(\"click\", startPushToTalk)"), "Speech recognition must start only from explicit user click.");
assert(shell.includes("continuous = false"), "Speech recognition must be one-shot, not continuous.");
assert(shell.includes("interimResults = false"), "Shell must avoid continuous/interim background transcription.");
assert(shell.includes("isHighRiskPrompt"), "Shell must classify high-risk prompts before routing.");
assert(shell.includes("isHealthAccessPrompt"), "Shell must classify health-access prompts separately from healthcare execution.");
assert(shell.includes("isHealthExecutionPrompt"), "Shell must guard healthcare execution prompts.");
assert(shell.includes("isEmergencyPrompt"), "Shell must guard emergency prompts.");
assert(shell.includes("healthAccessResponse"), "Shell must provide health-access voice responses.");
assert(shell.includes("introResponse"), "Shell must provide the Healthcare Demo Mode intro response.");
assert(shell.includes("introduceNexus"), "Shell must provide user-initiated spoken introduction behavior.");
assert(shell.includes("intro?.addEventListener(\"click\", introduceNexus)"), "Introduce Nexus must be user-initiated from a click.");
assert(shell.includes("runQuickPrompt"), "Shell must include quick-prompt handling for meeting fallback.");
assert(shell.includes("data-nexus-voice-demo-prompt"), "Shell must bind only explicit quick-prompt controls.");
assert(shell.includes("bridge?.submitSafeTranscript"), "Low-risk prompts must route through the safe frontend bridge.");
assert(shell.includes("bridge?.showResponse"), "High-risk prompts must render safe response without execution.");

const introCorpus = `${app}\n${shell}\n${doc}`;
const introductionText = "Hello, I am Nexus, your voice-operated access assistant. I can help guide you through telehealth, pharmacy support, mobile clinic access, transportation-to-care, workforce resources, and agriculture services. How can I help you today?";
assert(introCorpus.includes(introductionText), "Preferred Nexus spoken introduction text must exist.");
[
  "Hello, I am Nexus",
  "voice-operated access assistant",
  "telehealth",
  "pharmacy support",
  "mobile clinic access",
  "transportation-to-care",
  "workforce resources",
  "agriculture services",
  "How can I help you today?"
].forEach(phrase => {
  assert(introCorpus.includes(phrase), `Healthcare Demo Mode intro must mention: ${phrase}`);
});
[
  "I called",
  "I scheduled",
  "I refilled",
  "I sent",
  "I contacted",
  "I dispatched",
  "I shared your location",
  "payment complete",
  "provider is live",
  "live provider connection"
].forEach(claim => {
  assert(!introductionText.toLowerCase().includes(claim.toLowerCase()), `Introduction must not contain unsafe execution claim: ${claim}`);
});

const introMatch = shell.match(/function introduceNexus[\s\S]*?\n  }\n(?=\n  function startPushToTalk)/);
assert(introMatch, "Shell must keep introduction handling in a small explicit function.");
const introBlock = introMatch[0];
assert(introBlock.includes("introResponse()"), "Introduce Nexus must use the guarded intro response helper.");
assert(introBlock.includes("setTranscript(response)"), "Introduce Nexus must show text even if speech synthesis is unsupported.");
assert(introBlock.includes("speechSynthesisSupported()"), "Introduce Nexus must guard speech synthesis with feature detection.");
assert(introBlock.includes("if (speechSynthesisSupported()) speak(response);"), "Introduce Nexus must speak only when speech synthesis is supported.");
[
  "SpeechRecognition",
  "webkitSpeechRecognition",
  "startPushToTalk",
  "recognition.start",
  "getUserMedia",
  "navigator.mediaDevices",
  "navigator.geolocation",
  "submitSafeTranscript",
  "fetch(",
  "window.open",
  "location.href",
  "tel:",
  "whatsapp://",
  "tg://",
  "mailto:"
].forEach(forbidden => {
  assert(!introBlock.includes(forbidden), `Introduce Nexus must not introduce ${forbidden}.`);
});

const quickPromptMatch = shell.match(/function runQuickPrompt[\s\S]*?\n  }\n\n  function startPushToTalk/);
assert(quickPromptMatch, "Shell must keep quick-prompt handling in a small explicit function.");
const quickPromptBlock = quickPromptMatch[0];
[
  "submitSafeTranscript",
  "goSection",
  "click(",
  "fetch(",
  "navigator.geolocation",
  "getUserMedia",
  "window.open",
  "location.href",
  "tel:",
  "whatsapp://",
  "tg://",
  "mailto:",
  "ACTION_CALL"
].forEach(forbidden => {
  assert(!quickPromptBlock.includes(forbidden), `Quick prompt handler must not introduce ${forbidden}.`);
});
assert(quickPromptBlock.includes("safeFallbackResponse(prompt)"), "Quick prompts must use the safe voice demo response handler.");
assert(quickPromptBlock.includes("bridge?.showResponse"), "Quick prompts may only show a safe response.");
assert(shell.includes("Browser speech recognition support varies. You can type the same Nexus command, and the safety behavior remains the same."), "Shell must expose browser speech-recognition fallback copy.");

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "getUserMedia",
  "window.open",
  "location.href",
  "ACTION_CALL",
  "whatsapp://",
  "tg://",
  "tel:",
  "mailto:",
  "setInterval(",
  "wake word",
  "wakeWord",
  "always-on",
  "alwaysOn"
].forEach(forbidden => {
  assert(!shell.includes(forbidden), `Shell must not introduce ${forbidden}.`);
});

[
  "call",
  "message",
  "whatsapp",
  "telegram",
  "location",
  "camera",
  "payment",
  "emergency",
  "provider"
].forEach(term => {
  assert(new RegExp(`\\b${term}\\b`, "i").test(shell), `Shell high-risk guard must mention ${term}.`);
});

[
  "agriculture training",
  "irrigation",
  "farm jobs",
  "AgriTrade",
  "crop"
].forEach(term => {
  assert(shell.includes(term) || app.includes(term) || doc.includes(term), `Low-risk demo prompt coverage must include ${term}.`);
});

[
  "telehealth access",
  "mobile clinic",
  "pharmacy access",
  "medication",
  "transportation",
  "rural health",
  "care access",
  "community health"
].forEach(term => {
  assert(new RegExp(term.replace(/\s+/g, "\\s+"), "i").test(`${app}\n${shell}\n${doc}`), `Health-access demo coverage must include ${term}.`);
});

[
  "I have not scheduled an appointment or contacted a provider",
  "I will not request your location, contact a clinic, or dispatch services",
  "I have not submitted a refill",
  "I have not shared your location, contacted anyone, scheduled an appointment, or scheduled a ride",
  "I cannot complete that healthcare action automatically",
  "call local emergency services now",
  "I cannot dispatch emergency help in this demo"
].forEach(phrase => {
  assert(`${app}\n${shell}\n${doc}`.includes(phrase), `Health-access safety copy must include: ${phrase}`);
});

[
  "call my doctor",
  "refill my prescription",
  "send my medical",
  "schedule \\(my \\)\\?\\(appointment\\|visit\\)",
  "send my location",
  "telehealth video",
  "video call",
  "camera preview",
  "diagnose",
  "dispatch"
].forEach(term => {
  assert(new RegExp(term, "i").test(`${app}\n${shell}`), `Healthcare execution guard must include ${term}.`);
});

assert(doc.includes("No always-on wake word"), "Doc must state no always-on wake word.");
assert(doc.includes("No automatic call"), "Doc must state no automatic high-risk execution.");
assert(doc.includes("## Safety Confirmation"), "Doc must include safety confirmation section.");
assert(doc.includes("## Health Access Voice Demo Layer"), "Doc must include Health Access Voice Demo Layer section.");
assert(doc.includes("No real healthcare action is executed"), "Doc must state no real healthcare action is executed.");
assert(doc.includes("## Tomorrow Meeting Demo Script"), "Doc must include Tomorrow Meeting Demo Script section.");
assert(doc.includes("What you're seeing today is not a chatbot alone."), "Doc must include the meeting opening line.");
assert(doc.includes("This demo is intentionally safety-controlled."), "Doc must include the meeting safety line.");
assert(doc.includes("Today Nexus is voice-capable and safety-controlled."), "Doc must include the meeting closing line.");

assert(packageJson.includes("\"qa:nexus-voice-demo-shell-phase-16a\""), "package.json must include Phase 16A QA alias.");
assert(qaSuite.includes("scripts/nexus-voice-demo-shell-phase-16a-qa.js"), "qa-suite nexus-workforce must include Phase 16A QA.");

console.log("[nexus-voice-demo-shell-phase-16a-qa] passed");
