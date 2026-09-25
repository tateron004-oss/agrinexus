"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..", "..");
const port = 4616;
const base = `http://localhost:${port}`;
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-visual-search-no-results-db.json");

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

// Found live: when both real image-search providers (Wikimedia Commons,
// Openverse) come up empty, this unconditionally fell through into the
// vision.analyze branch -- a completely different question ("analyze THIS
// image I gave you") -- producing the non-sequitur "A user-supplied image
// URL is required. Nexus will not open the camera." for a search request
// that never mentioned a camera or an upload. A deliberately nonsensical
// query is used so real search providers (or no network at all, in CI)
// both reliably produce zero results the same way.
test("an image search with zero real results is honestly reported as no results, not the unrelated camera/upload refusal", async () => {
  const res = await fetch(`${base}/api/nexus/openai-native/tool`, {
    method: "POST",
    headers: { "content-type": "application/json", cookie },
    body: JSON.stringify({ name: "nexus_visual_analysis", arguments: { command: "show me images of xyzzyqqqzznonexistentimagequery12345" } })
  });
  const result = await res.json();
  assert.equal(result.status, "no-image-results");
  assert.doesNotMatch(result.response, /open the camera/i);
  assert.match(result.response, /did not find any usable results/i);
});
