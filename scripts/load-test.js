// Real concurrent load test against a locally spawned server.js instance.
// No mocks: fires genuine concurrent HTTP requests and measures real
// latency distribution and error rate, to answer Phase 11's "load testing"
// item honestly (Node is currently a single process; this quantifies what
// that actually costs under concurrency, especially for requests that read
// or write the JSON blob state file on every call).
//
// Usage: node scripts/load-test.js [concurrency] [totalRequests]
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const concurrency = Number(process.argv[2] || 50);
const totalRequests = Number(process.argv[3] || 300);
const port = 4490;
const base = `http://localhost:${port}`;
const root = path.join(__dirname, "..");
const dbPath = process.argv[4] ? path.join(root, process.argv[4]) : path.join(root, "db.json");
const tempDbPath = path.join(root, "tmp-load-test-db.json");

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

async function login(cookieless = false) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" })
  });
  if (cookieless) return "";
  const setCookie = res.headers.get("set-cookie");
  if (!res.ok) throw new Error(`login failed: ${res.status}`);
  return setCookie.split(";")[0];
}

function percentile(sorted, p) {
  const idx = Math.min(sorted.length - 1, Math.floor((p / 100) * sorted.length));
  return sorted[idx];
}

// A representative mix: a cheap GET (no state read at all), a GET that reads
// the blob, and a POST that reads + writes it -- roughly matching real
// traffic shape rather than hammering one single endpoint.
function buildRequest(i, cookie) {
  const kind = i % 3;
  if (kind === 0) return { path: "/api/healthz", method: "GET" };
  if (kind === 1) return { path: "/api/nexus/live-knowledge/status", method: "GET", cookie };
  return {
    path: "/api/nexus/operations/command",
    method: "POST",
    cookie,
    body: { action: "show_action_receipts" }
  };
}

async function timedRequest(req) {
  const start = process.hrtime.bigint();
  let ok = false;
  let status = 0;
  try {
    const res = await fetch(`${base}${req.path}`, {
      method: req.method,
      headers: { "content-type": "application/json", ...(req.cookie ? { cookie: req.cookie } : {}) },
      body: req.body ? JSON.stringify(req.body) : undefined
    });
    status = res.status;
    ok = res.ok;
    await res.text();
  } catch (error) {
    ok = false;
  }
  const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6;
  return { ok, status, elapsedMs };
}

async function runBatch(cookie) {
  const results = [];
  let launched = 0;
  async function worker() {
    while (launched < totalRequests) {
      const i = launched;
      launched += 1;
      results.push(await timedRequest(buildRequest(i, cookie)));
    }
  }
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  return results;
}

(async () => {
  fs.copyFileSync(dbPath, tempDbPath);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDbPath, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });
  try {
    await waitFor(`${base}/api/healthz`);
    const cookie = await login();

    console.log(`Running ${totalRequests} requests at concurrency ${concurrency}...`);
    const wallStart = Date.now();
    const results = await runBatch(cookie);
    const wallMs = Date.now() - wallStart;

    const latencies = results.map(r => r.elapsedMs).sort((a, b) => a - b);
    const errors = results.filter(r => !r.ok);
    const throughput = (results.length / (wallMs / 1000)).toFixed(1);

    console.log(`\nTotal wall time: ${wallMs}ms for ${results.length} requests (${throughput} req/s)`);
    console.log(`Errors: ${errors.length}/${results.length}`);
    console.log(`Latency (ms) -- p50: ${percentile(latencies, 50).toFixed(1)}, p90: ${percentile(latencies, 90).toFixed(1)}, p99: ${percentile(latencies, 99).toFixed(1)}, max: ${latencies[latencies.length - 1].toFixed(1)}`);

    if (errors.length) {
      const sample = errors.slice(0, 3).map(e => e.status).join(", ");
      console.log(`Sample error statuses: ${sample}`);
    }
  } finally {
    server.kill();
    if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  }
})().catch(error => {
  if (fs.existsSync(tempDbPath)) fs.unlinkSync(tempDbPath);
  console.error(error.stack || error.message);
  process.exit(1);
});
