const assert = require("assert");
const fs = require("fs");
const path = require("path");

const appJs = fs.readFileSync(path.join(__dirname, "..", "public", "app.js"), "utf8");

const expected = [
  "Bases numeriques",
  "Misingi ya kidijitali",
  "\\u0623\\u0633\\u0627\\u0633\\u064a\\u0627\\u062a \\u0631\\u0642\\u0645\\u064a\\u0629",
  "Studio d'apprentissage",
  "Kituo cha kujifunza",
  "arabicLearningCopy",
  "function captureOriginalText",
  "captureOriginalText();",
  "\"#loginView\", \".topbar\", \".sidebar\"",
  "translatedCourse(course)",
  "translatedDuration(course.duration)",
  "setAttribute(\"dir\", languageCode() === \"ar\" ? \"rtl\" : \"ltr\")"
];

for (const text of expected) {
  assert(appJs.includes(text), `Missing learning translation coverage: ${text}`);
}

console.log("Learning translation smoke test passed");
