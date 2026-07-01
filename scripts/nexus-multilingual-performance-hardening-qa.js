const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relative => fs.readFileSync(path.join(root, relative), "utf8");
const app = read("public/app.js");
const server = read("server.js");
const voiceShell = read("public/nexus-voice-demo-shell.js");

[
  '"en"',
  '"es"',
  '"fr"',
  '"sw"',
  '"ar"',
  '"pt"'
].forEach(code => {
  assert(app.includes(code), `app must include supported language code ${code}`);
  assert(server.includes(code), `server must include supported language code ${code}`);
});

[
  "English",
  "Spanish",
  "French",
  "Arabic",
  "Portuguese",
  "Swahili",
  "Kiswahili"
].forEach(label => {
  assert(app.includes(label) || voiceShell.includes(label), `language label ${label} must be present`);
});

assert(app.includes("if (isUniversalLanguageCommand(command))"), "typed language commands must route before other assistant handlers");
assert(app.includes('document.documentElement.dir = language === "ar" ? "rtl" : "ltr";'), "Arabic direction must be guarded");
assert(!voiceShell.includes("localStorage"), "voice language switching must not persist to localStorage");
assert(!voiceShell.includes("sessionStorage"), "voice language switching must not persist to sessionStorage");

[
  "blood pressure",
  "glucose",
  "telehealth",
  "pharmacy",
  "mobile clinic",
  "agriculture",
  "digital literacy",
  "AI literacy"
].forEach(term => assert(app.toLowerCase().includes(term.toLowerCase()), `post-language routing should still include ${term}`));

console.log("Nexus multilingual performance hardening QA passed.");
