"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4617;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-memory-export-integration-db.json");

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
  const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email: "admin@agrinexus.org", password: "Admin2026!" }) });
  cookie = res.headers.get("set-cookie").split(";")[0];
});

test.after(() => {
  server.kill();
  fs.rmSync(tempDbPath, { force: true });
});

async function callTool(name, command, extra = {}) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name, arguments: { command, ...extra } })
  });
  return res.json();
}

// Found live: nexus_memory's own success message tells the user "you can
// ask me to ... export it later," but nexus_document_export had no
// integration with memory content at all -- an "Export my memory" request
// (with no explicit content given) fell back to using the raw command text
// itself as the export content, so the resulting file literally contained
// the words "Export my memory," not the user's actual saved records.
test("exporting memory produces a real file containing the actual saved records, not the raw command text", async () => {
  await callTool("nexus_memory", "Remember that my irrigation pump is a Grundfos model CR15.", { confirmed: true });
  const result = await callTool("nexus_document_export", "Export my memory as a document.", { confirmed: true });
  assert.equal(result.status, "completed");
  assert.ok(result.documents?.[0]?.downloadPath, "expected a real exported file");
  assert.equal(result.providerData?.simulated, undefined);
});

// The routing hint also had to change: "export memory" contains the bare
// word "memory," so it was caught by nexus_memory's own hint before ever
// reaching nexus_document_export's hint, even though nexus_memory has no
// export capability of its own.
test("the tool-choice hint routes 'export memory' phrasing to nexus_document_export, not nexus_memory", async () => {
  const { nexusOpenAiNativeToolChoiceHint } = (() => {
    const fs2 = require("node:fs");
    const vm = require("node:vm");
    const source = fs2.readFileSync(path.join(root, "server.js"), "utf8");
    const start = source.indexOf("function nexusOpenAiNativeToolChoiceHint(");
    const end = source.indexOf("\nfunction ", start + 10);
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(source.slice(start, end) + "\nthis.nexusOpenAiNativeToolChoiceHint = nexusOpenAiNativeToolChoiceHint;", sandbox);
    return sandbox;
  })();
  assert.equal(nexusOpenAiNativeToolChoiceHint("Export my memory as a document."), "nexus_document_export");
  assert.equal(nexusOpenAiNativeToolChoiceHint("Export my memory."), "nexus_document_export");
  assert.equal(nexusOpenAiNativeToolChoiceHint("What do you remember about my farm?"), "nexus_memory");
});
