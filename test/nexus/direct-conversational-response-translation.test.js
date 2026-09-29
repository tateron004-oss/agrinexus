"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

// Found live (translation/upload audit): when
// nexusGenesisConversationalModeOrchestrator picks the
// "direct_conversational_response" strategy (fires for plain greetings,
// "are you there?", casual chat, status checks, etc.), runCompanionSafeAgentCommand
// returned conversationalModeOrchestrator.response -- a hardcoded English
// string -- completely untranslated, while metadata.language/targetLanguage
// were still stamped with the real requested target language. A Spanish-
// speaking caller saying "hola"/"are you there?" got an English answer (read
// aloud with a Spanish Twilio voice on a real phone call) while every
// metadata field falsely claimed the response was already in Spanish.
const root = path.resolve(__dirname, "..", "..");
const port = 4719;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-direct-conversational-response-translation-db.json");

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(url) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error(`${url} did not become reachable`);
}

let server;
let cookie;

test.before(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const loginRes = await fetch(`${base}/api/login`, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  assert.equal(loginRes.status, 200);
  cookie = loginRes.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function cmd(command, targetLanguage, confirm) {
  const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command, targetLanguage, confirm }) });
  const body = await res.json();
  return body.commandResult || {};
}

test("a plain greeting is actually translated, not left in English while metadata falsely claims it's already in the target language", async () => {
  const result = await cmd("hello", "es");
  assert.equal(result.intent, "conversation.greeting");
  assert.match(result.response, /^\[ES\]/, "the response must actually be translated (or at minimum, honestly marked as such), not silently left in English");
  assert.equal(result.metadata.translatedResponse, true);
  assert.equal(result.metadata.translation.targetLanguage, "es");
});

test("'are you there' (hearing-check) is also actually translated", async () => {
  const result = await cmd("are you there", "es");
  assert.equal(result.intent, "conversation.hearing_check");
  assert.match(result.response, /^\[ES\]/);
  assert.equal(result.metadata.translatedResponse, true);
});

test("English requests are unaffected by the fix -- no translation call, no [EN] marker", async () => {
  const result = await cmd("hello", "en");
  assert.equal(result.intent, "conversation.greeting");
  assert.doesNotMatch(result.response, /^\[EN\]/);
  assert.match(result.response, /^Hello/);
});

// Found live (translation/upload audit, same sweep): translateAgentDisplayBundle
// (called from translateAgentCommandResult, used by the runAgentCommand branch
// below the direct_conversational_response one) re-fed the ALREADY-translated
// response back through translateDisplayValue a second time, with
// sourceLanguage hardcoded to "en" even though the text was no longer
// English -- doubling the real provider translation cost on every translated
// turn and mislabeling metadata.localized.response's provenance.
test("a translated response is not translated a second time inside metadata.localized", async () => {
  const result = await cmd("run a safety review", "es", true);
  assert.equal(result.intent, "health.safety");
  assert.ok(result.response, `expected a real translated response: ${JSON.stringify(result)}`);
  assert.equal(result.metadata.localized.response, result.response,
    "metadata.localized.response must be the SAME already-translated text as the top-level response, not a second, independently re-translated copy");
  assert.doesNotMatch(result.metadata.localized.response, /^\[ES\] \[ES\]/, "the response must never be translated twice");
});
