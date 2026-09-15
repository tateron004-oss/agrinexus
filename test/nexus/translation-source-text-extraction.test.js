const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4557;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-translation-source-text-extraction-db.json");

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
let mockProviderEngines;
let receivedText;

test.before(async () => {
  // Echoes back exactly what our server sent as the text to translate, so
  // these tests can inspect the extracted sourceText directly.
  mockProviderEngines = http.createServer((req, res) => {
    let raw = "";
    req.on("data", chunk => { raw += String(chunk); });
    req.on("end", () => {
      const payload = JSON.parse(raw || "{}");
      // The same webhook host also receives unrelated receipt/audit POSTs
      // (no "text" field) -- only capture the actual /translate request.
      if (req.url === "/translate" && typeof payload.text === "string") receivedText = payload.text;
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify({ ok: true, translatedText: payload.text, provider: "local-translation" }));
    });
  });
  const mockPort = await new Promise(resolve => mockProviderEngines.listen(0, "127.0.0.1", () => resolve(mockProviderEngines.address().port)));

  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "",
      NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
      TRANSLATION_WEBHOOK_URL: `http://127.0.0.1:${mockPort}/translate`,
      TRANSLATION_PROVIDER_API_KEY: "test-only-translation-key",
      TRANSLATION_PROVIDER: "generic"
    },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" })
  });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(async () => {
  server.kill();
  await new Promise(resolve => server.once("exit", resolve));
  mockProviderEngines.close();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callTranslate(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_translation", arguments: { command } })
  });
  return res.json();
}

test("'Translate this in French' -- 'in' as the lead-in -- strips the trailing language clause from the text sent to the translator", async () => {
  await callTranslate("Translate this in French");
  assert.equal(receivedText, "this");
});

test("'into'/'to' lead-ins are unaffected by the 'in' fix", async () => {
  await callTranslate("Translate hello into Spanish");
  assert.equal(receivedText, "hello");
  await callTranslate("Translate the harvest schedule to Swahili.");
  assert.equal(receivedText, "the harvest schedule");
});

test("a real mid-sentence 'in' (not the target-language lead-in) is preserved in the translated text", async () => {
  await callTranslate("Translate: I am walking in the rain into French");
  assert.equal(receivedText, "I am walking in the rain");
});
