"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { DELIVERY_STYLE } = require("../../nexus/brain/delivery-style.js");
const { CRISIS_RULE } = require("../../nexus/brain/crisis-rule.js");

// Kyro answers like a calm, capable assistant: result first, short, composed, then stop. These tests pin what the style says, that it never loosens a rule, and that every AI prompt that speaks to the person carries it.

const root = path.join(__dirname, "../..");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const planning = fs.readFileSync(path.join(root, "nexus/brain/openai-planning-model.js"), "utf8");

test("the style leads with the answer, stops when done, and changes how Kyro sounds, never what is true", () => {
  assert.match(DELIVERY_STYLE, /Lead with the answer or the result in your first sentence/);
  assert.match(DELIVERY_STYLE, /never repeat the request back/);
  assert.match(DELIVERY_STYLE, /No 'anything else\?', no menu of options/);
  assert.match(DELIVERY_STYLE, /say the part that matters in a sentence or two/, "while the screen shows the answer");
  assert.match(DELIVERY_STYLE, /when a tool's words must be said exactly or in full, say them as given/, "the instructions that say 'say what it returns in full' still win");
  assert.match(DELIVERY_STYLE, /safety rules and the honesty about what was and was not done come first/);
  assert.match(DELIVERY_STYLE, /upset, confused or in danger gets a slower, warmer answer/, "a person in distress is not answered curtly");
  assert.doesNotMatch(DELIVERY_STYLE, /jarvis|stark|iron man/i, "the style is a manner, not an impersonation of a character");
  assert.match(DELIVERY_STYLE, /never call the person sir or madam/);
  assert.ok(DELIVERY_STYLE.length < 1600, "short enough not to crowd the prompt");
});

test("the voice session, the typed native prompt and the plain-answer prompt all carry it, ahead of nothing that weakens the safety rule", () => {
  const realtime = server.slice(server.indexOf("function openAiRealtimeInstructions("), server.indexOf("function ", server.indexOf("function openAiRealtimeInstructions(") + 10));
  assert.match(realtime, /CRISIS_RULE,[\s\S]*DELIVERY_STYLE,/, "the voice session: the safety rule is still there");
  const native = server.slice(server.indexOf("function nexusOpenAiNativeSystemPrompt()"), server.indexOf("function nexusOpenAiNativeSystemPrompt()") + 1200);
  assert.match(native, /DELIVERY_STYLE,/);
  assert.match(planning, /DELIVERY_STYLE \+ " " \+ CRISIS_RULE;/, "the plain-answer prompt ends with the style and then the safety rule");
  assert.match(server, /const \{ DELIVERY_STYLE \} = require\("\.\/nexus\/brain\/delivery-style\.js"\);/);
  assert.match(planning, /const \{ DELIVERY_STYLE \} = require\("\.\/delivery-style\.js"\);/);
  assert.ok(CRISIS_RULE.length > 500, "the safety rule is unchanged and still full");
});
