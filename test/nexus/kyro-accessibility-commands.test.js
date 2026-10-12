"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const A = require("../../public/kyro-accessibility-commands.js");

// Large text, high contrast, reduced motion and screen reader mode were buttons only. Said or typed, they now work: "make the text bigger", "turn on high contrast", "stop the animations".

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");

test("each of the four options can be asked for, on or off, in plain words and in Kiswahili", () => {
  const expected = {
    "make the text bigger": ["largeText", true], "Bigger text please": ["largeText", true], "can you make the letters larger": ["largeText", true], "make the text smaller": ["largeText", false],
    "turn off large text": ["largeText", false], "Nataka maandishi makubwa": ["largeText", true],
    "turn on high contrast": ["highContrast", true], "high contrast": ["highContrast", null], "turn off high contrast": ["highContrast", false],
    "reduce motion": ["reducedMotion", true], "stop the animations": ["reducedMotion", true], "I want less motion": ["reducedMotion", true], "turn off reduced motion": ["reducedMotion", false],
    "screen reader mode on": ["screenReader", true], "turn off the screen reader": ["screenReader", false], "screen reader mode": ["screenReader", null]
  };
  for (const [text, [key, on]] of Object.entries(expected)) assert.deepEqual(A.parse(text), { key, on }, text);
});

test("a question, a mention or an unrelated request is not a request to change the display", () => {
  for (const text of ["", "what is a screen reader", "I use a screen reader at work every day", "what is the weather", "show high contrast photos of maize leaves for me", "I can not read this letter", "read my notes", "find a clinic near me",
    "why is the text so small", "x".repeat(120)]) assert.equal(A.parse(text), null, text);
});

test("Kyro says which is on, in English and Kiswahili", () => {
  assert.equal(A.reply("largeText", true, "en"), "Large text is on.");
  assert.equal(A.reply("reducedMotion", false, "en"), "Reduced motion is off.");
  assert.equal(A.reply("highContrast", true, "sw"), "Utofautishaji wa juu imewashwa.");
});

test("it is wired where 'close it' and 'I'm done' are already caught (typed and spoken), loaded before app.js, cached, and the voice model is told to say only 'Okay.'", () => {
  const fn = app.slice(app.indexOf("function handleKyroAccessibilityCommand("), app.indexOf("function handleKyroDismissCommand("));
  assert.match(fn, /const wanted = request\.on === null \? !accessibilityPrefs\[request\.key\] : request\.on;/);
  assert.ok(fn.includes("accessibilityPrefs[request.key] = wanted;") && !fn.includes("toggleAccessibilityPref("), "set as asked (an option already as asked stays), and the page's own buttons keep the one toggle handler");
  assert.match(fn, /window\.KyroAccessibilityCommands\.reply\(request\.key, wanted, lang\)/);
  assert.match(app, /function handleKyroDismissCommand\(command = "", options = \{\}\) \{\s*if \(handleKyroAccessibilityCommand\(command\)\) return true;/);
  // every entry point that already asks handleKyroDismissCommand: the unified typed route, the realtime final transcript, the two older typed routes
  assert.ok((app.match(/handleKyroDismissCommand\(/g) || []).length >= 6);
  const tag = html.indexOf("/kyro-accessibility-commands.js"); assert.ok(tag > 0 && tag < html.indexOf("/app.js")); assert.ok(sw.includes("/kyro-accessibility-commands.js"));
  assert.ok(server.includes("larger or smaller text, high contrast, less motion or fewer animations, or the screen reader mode"));
  assert.ok(server.includes('do not call any tool: say \\"Okay.\\" and nothing more. The display changes by itself'));
});

test("the four keys are the ones the page's own buttons use", () => {
  for (const key of ["largeText", "highContrast", "reducedMotion", "screenReader"]) assert.match(html, new RegExp(`data-accessibility="${key}"`), key);
  const classMap = app.slice(app.indexOf("function applyAccessibilityPrefs()"), app.indexOf("function toggleAccessibilityPref("));
  for (const key of ["largeText", "highContrast", "reducedMotion", "screenReader"]) assert.ok(classMap.includes(`${key}:`), key);
});
