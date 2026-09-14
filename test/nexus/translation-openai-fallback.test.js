const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4523;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-translation-openai-fallback-db.json");

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

test("when the configured provider-engines stand-in honestly reports 'local-translation' (a non-real passthrough), a configured OPENAI_API_KEY is still tried instead of being silently skipped", async () => {
  // Mimics scripts/provider-engines.js's own /translate handler exactly:
  // always the same "[LANG] text" passthrough, always labeled
  // "local-translation" -- this never represents a real translation.
  const mockProviderEngines = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => { raw += String(chunk); });
    req.on("end", () => {
      const payload = JSON.parse(raw || "{}");
      const language = payload.targetLanguage || "en";
      const translatedText = language === "en" ? payload.text : `[${language.toUpperCase()}] ${payload.text}`;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ ok: true, translatedText, provider: "local-translation" }));
    });
  });
  const mockPort = await new Promise(resolve => mockProviderEngines.listen(0, "127.0.0.1", () => resolve(mockProviderEngines.address().port)));

  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDbPath,
      // A syntactically-plausible but fake key: real translation can't
      // succeed, but this proves whether the OpenAI branch was even
      // attempted -- if it was skipped (the bug), the final provider stays
      // "local-translation"; if it was attempted (the fix) it fails with an
      // auth error and the provider becomes "local-after-openai-translation-error".
      OPENAI_API_KEY: "sk-test-fake-key-not-real",
      TRANSLATION_WEBHOOK_URL: `http://127.0.0.1:${mockPort}/translate`,
      TRANSLATION_PROVIDER_API_KEY: "test-only-translation-key",
      TRANSLATION_PROVIDER: "generic"
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitFor(`${base}/api/healthz`);
    const login = await fetch(`${base}/api/login`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
    });
    const cookie = login.headers.get("set-cookie").split(";")[0];

    const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
      method: "POST",
      headers: { "content-type": "application/json", cookie },
      body: JSON.stringify({ name: "nexus_translation", arguments: { command: 'Translate "Good morning, how are you?" into Swahili.', language: "Swahili" } })
    });
    const body = await res.json();
    assert.notEqual(body.translation.provider, "local-translation", "the OpenAI fallback must be attempted, not silently skipped, when the stand-in reports a non-real passthrough");
    assert.equal(body.translation.provider, "local-after-openai-translation-error", "with a fake key this proves the real OpenAI branch was reached and failed on auth, not skipped entirely");
  } finally {
    server.kill();
    await new Promise(resolve => server.once("exit", resolve));
    mockProviderEngines.close();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
});
