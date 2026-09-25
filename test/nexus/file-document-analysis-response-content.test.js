"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4610;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-file-document-analysis-response-db.json");

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
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_FILE_UPLOAD_ENABLED: "true" },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

// Found live: the real extracted content (a PDF's excerpt, an image's vision
// description) lived only in providerData.data.excerpt/.description --
// nexusOpenAiNativeProviderToolResult's generic fallback response is just a
// fixed confirmation sentence, so only that sentence -- never the real
// content -- would ever reach a user. This exercises the exact same
// data.excerpt code path a real uploaded-PDF analysis takes, using the
// simpler user-supplied-text branch (same provider function, no PDF fixture
// or OpenAI vision call needed to prove the response-text fix).
test("nexus_file_document_analysis's response includes the real analyzed text, not just a generic confirmation sentence", async () => {
  const realText = "The maize field showed early signs of fall armyworm damage near the eastern edge, roughly two acres affected.";
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_file_document_analysis", arguments: { command: "analyze this document", text: realText } })
  });
  const result = await res.json();
  assert.equal(result.status, "completed");
  assert.match(result.response, /fall armyworm damage near the eastern edge/, "the real analyzed text must appear in the response, not just a generic confirmation");
  assert.equal(result.providerData?.excerpt, realText.slice(0, 500));
});
