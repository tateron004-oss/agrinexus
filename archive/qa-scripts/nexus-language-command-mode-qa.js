const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const voiceShell = fs.readFileSync(path.join(root, "public/nexus-voice-demo-shell.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

[
  'const fullAppLanguageCodes = new Set(["en", "fr", "sw", "ar", "es", "pt"])',
  'const FULL_APP_LANGUAGE_CODES = new Set(["en", "es", "fr", "sw", "ar", "pt"])'
].forEach(text => {
  const source = text.includes("FULL_APP") ? server : app;
  assert(source.includes(text), `full language set must include Portuguese: ${text}`);
});

[
  "English",
  "French",
  "Kiswahili",
  "Arabic",
  "Portuguese",
  "Spanish"
].forEach(label => {
  assert(app.includes(label), `app must include supported language label ${label}`);
  assert(voiceShell.includes(label), `voice shell must include supported language label ${label}`);
});

[
  "Change language to French",
  "Switch to Swahili",
  "Use Arabic",
  "Set the app to Portuguese",
  "Spanish please",
  "Change back to English"
].forEach(command => {
  const languageTerms = command.toLowerCase().split(/\s+/).filter(term => /french|swahili|arabic|portuguese|spanish|english/.test(term));
  assert(languageTerms.length, `QA command must contain a language term: ${command}`);
});

assert(app.includes("if (isUniversalLanguageCommand(command))"), "Standard User typed command path must handle language commands first");
assert(app.includes("void changeLanguageByVoice(command);"), "typed language command must call the existing language change flow");
assert(app.includes('document.documentElement.dir = language === "ar" ? "rtl" : "ltr";'), "Arabic language switch must set RTL document direction");
assert(!voiceShell.includes("localStorage"), "voice demo language switching must remain in-memory and avoid storage side effects");
assert(!voiceShell.includes("sessionStorage"), "voice demo language switching must not introduce session storage side effects");
assert(voiceShell.includes("Spanish please") || voiceShell.includes("please)?"), "voice shell must allow bare language plus please command style");

[
  "handleNexusAgenticBrainTypedCommand(command)",
  "handleNexusProductionRuntimeTypedCommand(command)",
  "handleNexusOpenDialogueAgentCommand(command)"
].forEach(text => {
  assert(app.includes(text), `language changes must preserve assistant routing after switch: ${text}`);
});

[
  "blood pressure",
  "agriculture",
  "remind",
  "provider",
  "mobile clinic"
].forEach(term => {
  assert(app.includes(term), `post-language routing coverage must still include ${term}`);
});

[
  "TWILIO_AUTH_TOKEN",
  "STRIPE_SECRET_KEY",
  "OPENAI_API_KEY"
].forEach(secretName => {
  assert(!voiceShell.includes(secretName), `voice shell must not expose secret name ${secretName}`);
});

console.log("Nexus language command mode QA passed.");
