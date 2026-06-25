const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  shell: path.join(root, "public", "nexus-voice-demo-shell.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js"),
  phase16aQa: path.join(root, "scripts", "nexus-voice-demo-shell-phase-16a-qa.js"),
  doc: path.join(root, "docs", "NEXUS_VOICE_DEMO_SHELL_PHASE_16A.md")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-voice-language-switch-phase-16a-hotfix-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const index = read(paths.index);
const app = read(paths.app);
const shell = read(paths.shell);
const server = read(paths.server);
const packageJson = read(paths.packageJson);
const qaSuite = read(paths.qaSuite);
const phase16aQa = read(paths.phase16aQa);
const doc = read(paths.doc);

const supportedLanguages = [
  ["en", "English", "Language changed to English. How can I help you?"],
  ["es", "Spanish", "Idioma cambiado a español. ¿Cómo puedo ayudarle?"],
  ["fr", "French", "Langue changée en français. Comment puis-je vous aider?"],
  ["ar", "Arabic", "تم تغيير اللغة إلى العربية. كيف يمكنني مساعدتك؟"],
  ["pt", "Portuguese", "Idioma alterado para português. Como posso ajudar?"],
  ["sw", "Swahili", "Lugha imebadilishwa kuwa Kiswahili. Ninawezaje kukusaidia?"]
];

assert(index.includes("id=\"nexusVoiceDemoLanguageSelect\""), "Standard User voice dock must include the demo language selector.");
assert(index.includes("data-nexus-voice-demo-language"), "Language selector must be explicitly scoped to the voice demo shell.");
supportedLanguages.forEach(([value, label]) => {
  assert(index.includes(`<option value="${value}">${label}</option>`), `Language selector must include ${label}.`);
  assert(shell.includes(`${value}: {`), `Shell DEMO_LANGUAGES must include ${label}.`);
  assert(doc.includes(label), `Phase 16A doc must list ${label}.`);
});

supportedLanguages.forEach(([, label, response]) => {
  assert(shell.includes(response), `Shell must include safe language switch response for ${label}.`);
  assert(doc.includes(response) || label !== "Spanish", "Meeting script must include the Spanish demo confirmation phrase.");
});

[
  "DEMO_LANGUAGES",
  "selectedLanguage",
  "languageSelector",
  "languageKeyFromText",
  "isLanguageSwitchCommand",
  "setDemoLanguage",
  "changeLanguageFromSelector"
].forEach(symbol => {
  assert(shell.includes(symbol), `Shell must include ${symbol}.`);
});

[
  "Nexus, switch to Spanish.",
  "Nexus, speak English.",
  "Nexus, change language to French.",
  "Nexus, switch to Arabic.",
  "Nexus, switch to Portuguese.",
  "Nexus, switch to Swahili."
].forEach(command => {
  assert(doc.includes(command), `Doc must include command example: ${command}`);
});

assert(shell.includes("selector?.addEventListener(\"change\", changeLanguageFromSelector)"), "Language selector must be user-initiated from a change event.");
assert(shell.includes("isLanguageSwitchCommand(transcript)"), "Voice transcript routing must explicitly detect language switch commands.");
assert(shell.includes("recognition.lang = currentLanguageConfig().speechLang"), "SpeechRecognition language must use selected demo language only when recognition is started.");
assert(shell.includes("choosePolishedVoice(selectedLanguage)"), "SpeechSynthesis voice selection must use the selected demo language.");
assert(shell.includes("choosePolishedEnglishVoice()"), "SpeechSynthesis voice selection must keep a safe English fallback.");
assert(shell.includes("return preferred || null"), "Voice selection must fall back safely when no matching voice exists.");
assert(shell.includes("utterance.lang = config.speechLang"), "SpeechSynthesis must set a guarded language when no voice is found.");

[
  "telehealth",
  "pharmacy",
  "mobileClinic",
  "transportation",
  "execution",
  "emergency"
].forEach(key => {
  assert(shell.includes(`${key}:`), `Translated health-access demo responses must include ${key}.`);
});

[
  "not a clinical interpretation service",
  "not certified medical translation",
  "not a provider communication tool",
  "No backend translation service",
  "third-party translation API",
  "does not translate or transmit medical records",
  "does not contact providers",
  "call, message, schedule, refill prescriptions, request location, dispatch services, process payments, or navigate externally"
].forEach(phrase => {
  assert(doc.includes(phrase), `Doc must include safety caveat: ${phrase}`);
});

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "XMLHttpRequest",
  "navigator.geolocation",
  "getUserMedia",
  "navigator.mediaDevices",
  "window.open",
  "location.href",
  "tel:",
  "whatsapp://",
  "tg://",
  "mailto:",
  "setInterval(",
  "always-on",
  "alwaysOn",
  "ACTION_CALL"
].forEach(forbidden => {
  assert(!shell.includes(forbidden), `Language switch shell must not introduce ${forbidden}.`);
});

[
  "Google Translate",
  "DeepL",
  "Azure Translator",
  "Amazon Translate",
  "OpenAI translation",
  "translate.googleapis",
  "/api/translate",
  "translation provider",
  "backend translation"
].forEach(forbidden => {
  assert(!shell.includes(forbidden), `Shell must not introduce a third-party/backend translation service: ${forbidden}`);
});

[
  "providerHandoff: false",
  "permissionRequested: false",
  "executionAllowed: false"
].forEach(phrase => {
  assert(app.includes(phrase), `Phase 16A bridge must preserve ${phrase}.`);
});

[
  "llamar",
  "appeler",
  "اتصل",
  "ligar",
  "piga",
  "emergencia",
  "urgence",
  "طوارئ",
  "emergência",
  "dharura"
].forEach(term => {
  assert(shell.includes(term), `High-risk multilingual guard must include ${term}.`);
});

const packageData = JSON.parse(packageJson);
assert(packageData.scripts["qa:nexus-voice-language-switch-phase-16a-hotfix"] === "node scripts/nexus-voice-language-switch-phase-16a-hotfix-qa.js", "package.json must include hotfix QA alias.");
assert(!Object.keys(packageData.dependencies || {}).some(name => /translate|speech|voice|tts/i.test(name)), "No translation/speech dependency should be added.");
assert(qaSuite.includes("scripts/nexus-voice-language-switch-phase-16a-hotfix-qa.js"), "nexus-workforce QA suite must include language switch hotfix QA.");
assert(phase16aQa.includes("nexusVoiceDemoLanguageSelect"), "Existing Phase 16A QA must cover the language selector.");

console.log("[nexus-voice-language-switch-phase-16a-hotfix-qa] passed");
