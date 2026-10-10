"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found on production: "Translate good morning to Kiswahili." was answered "Twende hatua moja." (a greeting) and nothing else: the word Kiswahili made it a rural-Kenya conversation, a greeting was put
// in front of the answer, and the one-sentence limit then kept only the greeting. The answer to a translation is the translation.
const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
const start = app.indexOf("function ruralCommunicationResponseTuning(");
const end = app.indexOf("\nfunction nexusCommandCenterHumanize(", start);
assert.ok(start > 0 && end > start, "could not find ruralCommunicationResponseTuning in app.js");

function load() {
  const sandbox = {
    experienceMode: "user", voiceFirstMode: false, agentPerformanceState: { lastCommand: "" }, conversationModeState: { lastQuestion: "" },
    ruralAfricaConversationStyle: () => ({ active: false }),
    ruralKenyaCommunicationStyle: command => ({ active: /\b(kenya|kiswahili|swahili|shamba|dawa)\b/i.test(command) }),
    ruralSpeechProfile: () => ({ lowLiteracy: false, imperfectEnglish: false, mixedLanguage: false })
  };
  vm.createContext(sandbox);
  vm.runInContext(`${app.slice(start, end)}\nthis.run = ruralCommunicationResponseTuning;`, sandbox);
  return sandbox.run;
}

test("a translation into Kiswahili is returned word for word, with no greeting in front", () => {
  const run = load();
  for (const command of ["Translate good morning to Kiswahili.", "translate good morning into Swahili", "Tafsiri habari za asubuhi kwa Kiingereza"]) {
    assert.equal(run("Habari ya asubuhi.", { speak: true, command }), "Habari ya asubuhi.", command);
  }
});

test("the plain-language rewrites are not applied to a translation either", () => {
  const run = load();
  assert.equal(run("The workflow module is ready.", { speak: true, command: "Translate this to French" }), "The workflow module is ready.");
});

test("other Kiswahili conversations still get the friendly opener", () => {
  const run = load();
  assert.match(run("Maize sells at 40 shillings.", { speak: true, command: "Bei ya mahindi Kisumu kiswahili" }), /^Twende hatua moja\./);
});
