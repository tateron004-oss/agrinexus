"use strict";
// Found in a real browser: the Accessibility Tools buttons (Large text, High contrast, Reduce motion, Screen reader mode) did
// nothing in Admin/Investor mode. A per-button onclick AND the delegated document handler both toggled the preference, so every
// click switched it on and straight back off.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("accessibility preference buttons are toggled by exactly one handler", () => {
  assert.doesNotMatch(app, /\$\$\("\[data-accessibility\]"\)\.forEach\(button => \{\s*button\.onclick/, "no per-button onclick next to the delegated handler");
  const delegated = app.match(/event\.target\.closest\("\[data-accessibility\]"\)/g) || [];
  assert.equal(delegated.length, 1, "the delegated handler must stay (it serves every mode)");
  const calls = app.match(/toggleAccessibilityPref\(/g) || [];
  assert.equal(calls.length, 2, "one definition and one call");
});
