const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4538;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-export-format-honesty-db.json");

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
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
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

test.after(() => {
  server.kill();
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
});

async function callExport(command) {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_document_export", arguments: { command, confirmed: true, content: "test data" } })
  });
  return res.json();
}

test("asking for an unsupported format (CSV) is honestly rejected instead of silently substituting a TXT file", async () => {
  const result = await callExport("Export this as a CSV.");
  assert.equal(result.status, "blocked");
  assert.match(result.response, /only json, txt, md, pdf, and docx/i);
});

test("other unsupported formats (xlsx, pptx, html) are also honestly rejected, not silently substituted", async () => {
  for (const phrase of ["Export this as an XLSX.", "Export this as a PPTX.", "Export this as HTML."]) {
    const result = await callExport(phrase);
    assert.equal(result.status, "blocked", `expected ${phrase} to be honestly rejected`);
  }
});

test("a genuinely supported format (PDF) still works exactly as before", async () => {
  const result = await callExport("Export this as a PDF titled Farm Notes.");
  assert.equal(result.status, "completed");
  assert.match(result.response, /real PDF file/i);
});

test("not naming any format at all still defaults to TXT, unaffected by the new format recognition", async () => {
  const result = await callExport("Export this.");
  assert.equal(result.status, "completed");
  assert.match(result.response, /real TXT file/i);
});
