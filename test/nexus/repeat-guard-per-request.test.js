"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// Found by testing the business prompts: every save that needs a yes answers with the same sentence, so two DIFFERENT requests inside 45 seconds counted as Kyro repeating itself and the
// second answer became "I hear you. I will stop repeating. Say it again slowly, or say one word: health, medicine, crop...". A reply is only a repeat when it answers the same request again.
const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");

function load() {
  const slice = name => {
    const start = app.indexOf(`function ${name}(`);
    assert.ok(start >= 0, `could not find ${name} in app.js`);
    const next = [...app.slice(start + 10).matchAll(/\n(?:async )?function [A-Za-z0-9_]+\(/g)][0];
    return app.slice(start, next ? start + 10 + next.index : undefined);
  };
  const sandbox = {
    normalizeToolText: text => String(text || "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim(),
    conciseVoiceResponse: message => String(message || ""),
    lastVoiceResponseSignature: "", lastVoiceResponseAt: Date.now(), lastVoiceResponseRepeatCount: 0
  };
  vm.createContext(sandbox);
  vm.runInContext(`${slice("voiceResponseSignature")}\n${slice("repeatSafeVoiceResponse")}\nthis.run = repeatSafeVoiceResponse;`, sandbox);
  return sandbox.run;
}

const CONFIRM = "I opened the request and need your confirmation before the next governed action.";

test("the same sentence answering two different requests is not a repeat", () => {
  const run = load();
  assert.equal(run(CONFIRM, { speak: true, command: "Mark invoice INV-1001 as paid" }), CONFIRM);
  assert.equal(run(CONFIRM, { speak: true, command: "Draft a grant proposal" }), CONFIRM);
  assert.equal(run(CONFIRM, { speak: true, command: "Draft a marketing strategy" }), CONFIRM);
});

test("the same sentence answering the same request again within 45 seconds is still caught", () => {
  const run = load();
  assert.equal(run(CONFIRM, { speak: true, command: "Set a follow-up with Grace next Tuesday" }), CONFIRM);
  assert.match(run(CONFIRM, { speak: true, command: "Set a follow-up with Grace next Tuesday" }), /^I hear you\. I will stop repeating\./);
});

test("with no request known the old behaviour holds, and the speak path hands the request to the check", () => {
  const run = load();
  assert.equal(run("Hello there.", { speak: true }), "Hello there.");
  assert.match(run("Hello there.", { speak: true }), /^I hear you\./);
  assert.match(app, /responseMessage = repeatSafeVoiceResponse\(responseMessage, \{ \.\.\.options, speak, command: options\.command \|\| agentPerformanceState\.lastCommand \|\| conversationModeState\.lastQuestion \|\| "" \}\);/);
});
