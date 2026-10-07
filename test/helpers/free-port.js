"use strict";
// Free-port helper for tests that start a real server.js.
//
// node --test runs test files in parallel, and two people, CI jobs or agents can run suites on one machine at once.
// A hard-coded port then collides and produces false failures. These helpers ask the operating system for a port that
// nothing is using right now (listen on port 0), so two runs never fight over a number.
//
//   freePort()            async, returns a free port.
//   freePortSync()        a port nobody else has been given, for files that need the port while the file is being read
//                         (`const port = freePortSync(); const base = ...;`). See the note above the function.
//   startServer({ env })  spawns server.js on a fresh port, waits for /api/healthz, returns { port, base, child, stop() }.
//                         If the server does not come up (the small gap between "port was free" and "server bound it"
//                         can lose to another process), it tries once more on a new port.
const crypto = require("node:crypto");
const fs = require("node:fs");
const net = require("node:net");
const os = require("node:os");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..", "..");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const handedOut = new Set();

function freePort() {
  return new Promise((resolve, reject) => {
    const probe = net.createServer();
    probe.unref();
    probe.on("error", reject);
    probe.listen(0, "127.0.0.1", () => {
      const { port } = probe.address();
      probe.close(() => {
        if (handedOut.has(port)) { freePort().then(resolve, reject); return; }
        handedOut.add(port);
        resolve(port);
      });
    });
  });
}

// A port picked at once (before any asynchronous work can run), for test files that need the port while the file is being read.
//
// Asking the operating system synchronously needs a child process or a worker thread; both were tried and both now and then crashed the
// whole test process on Windows while a file was loading (exit code 0xC0000409, shown as a test file failing with no message).
// So this takes no operating-system handle at all. It picks a number at random from a range the operating system never uses for its own
// outgoing connections (20000-29999), and CLAIMS it by creating a directory named after it in the temp folder: creating a directory is
// atomic, so two test files, two runs, two people or two agents on one machine can never be given the same number. A claim is given back
// when the test process ends, and a claim older than half an hour (a crashed run) is taken over.
const CLAIM_DIR = path.join(os.tmpdir(), "kyro-test-ports");
const CLAIM_FROM = 20000;
const CLAIM_COUNT = 10000;
const CLAIM_STALE_MS = 30 * 60 * 1000;
const claimed = new Set();

function freePortSync() {
  fs.mkdirSync(CLAIM_DIR, { recursive: true });
  for (let attempt = 0; attempt < 500; attempt += 1) {
    const port = CLAIM_FROM + crypto.randomInt(CLAIM_COUNT);
    const claim = path.join(CLAIM_DIR, String(port));
    try { fs.mkdirSync(claim); } catch (error) {
      if (error.code !== "EEXIST") throw error;
      let stale = false;
      try { stale = Date.now() - fs.statSync(claim).mtimeMs > CLAIM_STALE_MS; } catch { /* just released by its owner: try the next number */ }
      if (!stale) continue;
      try { fs.rmdirSync(claim); fs.mkdirSync(claim); } catch { continue; }
    }
    claimed.add(claim);
    return port;
  }
  throw new Error("could not find a free port");
}
process.on("exit", () => { for (const claim of claimed) { try { fs.rmdirSync(claim); } catch { /* already gone */ } } });

async function reachable(url) {
  try { return (await fetch(url, { signal: AbortSignal.timeout(2000) })).ok; } catch { return false; }
}

// Resolves "up" when /api/healthz answers, or "exited" if the process ended first (for example, the port was taken).
async function waitUntilUp(base, child, timeoutMs) {
  let exited = child.exitCode !== null;
  child.once("exit", () => { exited = true; });
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (exited) return "exited";
    if (await reachable(`${base}/api/healthz`)) return "up";
    await sleep(150);
  }
  return exited ? "exited" : "timeout";
}

async function startServer({ env = {}, cwd = root, host = "localhost", timeoutMs = 30000, stdio = "ignore", portEnv = "PORT", envFor } = {}) {
  let lastReason = "";
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const port = await freePort();
    const base = `http://${host}:${port}`;
    // envFor lets a test build values that contain the port (for example PUBLIC_BASE_URL) once the port is known.
    const extra = typeof envFor === "function" ? envFor({ port, base }) : {};
    const child = spawn(process.execPath, ["server.js"], { cwd, env: { ...process.env, ...env, ...extra, [portEnv]: String(port) }, stdio, windowsHide: true });
    const outcome = await waitUntilUp(base, child, timeoutMs);
    if (outcome === "up") {
      return {
        port, base, child,
        stop() { try { child.kill(); } catch { /* already gone */ } }
      };
    }
    lastReason = outcome;
    try { child.kill(); } catch { /* already gone */ }
    if (outcome === "timeout") break; // slow rather than bind-failed: a second port would not help
  }
  throw new Error(`server did not start (${lastReason})`);
}

module.exports = { freePort, freePortSync, startServer };
