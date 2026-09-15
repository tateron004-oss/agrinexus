const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const port = 4506;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-agent-command-rate-limit-smoke-db.json");

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

async function login(email, password) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login ${email} failed: ${res.status}`);
  return setCookie.split(";")[0];
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "", NEXUS_PRESERVE_EMPTY_ENV: "1" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await login("user@agrinexus.org", "User2026!");

    // Real bug fix: /api/agent/command, /plan, /execute, /briefing,
    // /reasoning-language, and /conversation-core had no endpoint-specific
    // rate limiting -- only the generic 180/min-per-IP blanket check, which
    // is far too permissive for a route that ends every call in a full
    // writeDb() of the single shared application-state blob. A self-service
    // guest account (which is granted the "ai" permission) could keep that
    // shared write path busy well within the blanket budget. This asserts
    // the endpoint-specific budget actually trips before the blanket one.
    let statuses = [];
    for (let i = 0; i < 65; i += 1) {
      const res = await fetch(`${base}/api/agent/command`, {
        method: "POST",
        headers: { "content-type": "application/json", cookie },
        body: JSON.stringify({ command: `rate limit smoke test ${i}`, conversational: true })
      });
      statuses.push(res.status);
      if (res.status === 429) break;
    }
    const rateLimited = statuses.some(status => status === 429);
    assert(rateLimited, "repeated /api/agent/command requests from one IP must eventually be rate limited");
    assert(statuses.length <= 61, `the AI-agent rate limit must trip at or before the 61st request in a window, tripped at request ${statuses.length}`);
    const rejected = await fetch(`${base}/api/agent/command`, {
      method: "POST",
      headers: { "content-type": "application/json", cookie },
      body: JSON.stringify({ command: "should still be limited", conversational: true })
    });
    assert.equal(rejected.status, 429, "the limit should continue to apply for the rest of the window");
    const rejectedBody = await rejected.json();
    assert.match(rejectedBody.error, /too many/i);

    console.log("Agent command rate limit smoke test passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
