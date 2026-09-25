"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4615;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-visual-analysis-response-db.json");

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
let mockVisionServer;
let mockVisionPort;

test.before(async () => {
  // A small local HTTP server standing in for a real vision provider
  // endpoint, so this test proves the real response-text fix without a real
  // OpenAI vision call -- matching the established local-mock-HTTP-server
  // pattern already used elsewhere in this suite.
  const realAnalysis = "The maize leaf shows chlorotic streaking consistent with early fall armyworm feeding damage near the leaf margin.";
  mockVisionServer = http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => { body += chunk; });
    req.on("end", () => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ analysis: realAnalysis }));
    });
  });
  await new Promise(resolve => mockVisionServer.listen(0, resolve));
  mockVisionPort = mockVisionServer.address().port;

  fs.copyFileSync(dbPath, tempDbPath);
  server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
      NEXUS_VISION_ENABLED: "true", NEXUS_VISION_PROVIDER: "generic",
      NEXUS_VISION_PROVIDER_ENDPOINT: `http://127.0.0.1:${mockVisionPort}/analyze`, NEXUS_VISION_API_KEY: "test-key"
    },
    stdio: "ignore",
    windowsHide: true
  });
  await waitFor(`${base}/api/healthz`);
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  mockVisionServer.close();
  fs.rmSync(tempDbPath, { force: true });
});

// Found live: the real vision-model description lives only in
// body.data.analysis -- nexusOpenAiNativeProviderToolResult's generic
// fallback response is just the fixed confirmation sentence "Vision
// provider analyzed the user-supplied image with safety limits." Without
// this fix, only that sentence -- never the real description -- would ever
// reach the user. Mirrors the identical, already-fixed pattern for
// nexus_file_document_analysis.
test("nexus_visual_analysis's response includes the real analyzed description, not just a generic confirmation sentence", async () => {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_visual_analysis", arguments: { command: "what's wrong with this maize leaf?", imageUrl: "https://example.com/leaf.jpg" } })
  });
  const result = await res.json();
  assert.equal(result.status, "completed");
  assert.match(result.response, /fall armyworm feeding damage near the leaf margin/, "the real vision description must appear in the response, not just a generic confirmation");
  assert.match(result.response, /Vision provider analyzed/, "the real content is appended after the confirmation sentence, not replacing it");
});
