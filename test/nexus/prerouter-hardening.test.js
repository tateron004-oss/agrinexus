"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const http = require("node:http");
const net = require("node:net");
const os = require("node:os");
const path = require("node:path");
const WebSocket = require("ws");

// What a stranger can do to the server before any route code runs: the request line, the Host header, a very large body, the static-file path, and the phone-call WebSocket. Each of the first,
// second and last used to stop the whole server for everyone (an unhandled rejection / an exception in an event handler), with no sign-in needed.

const root = path.resolve(__dirname, "..", "..");
const port = 15750;
const base = `http://127.0.0.1:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "prerouter-"));
const siblingName = `public_prerouter_probe_${process.pid}`;
const siblingDir = path.join(root, siblingName);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server;
let exitCode = null;
let ipCounter = 0;
const freshIp = () => `10.77.${Math.floor(++ipCounter / 250)}.${ipCounter % 250 + 1}`;

async function waitFor(url) { for (let i = 0; i < 100; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
const alive = async () => exitCode === null && (await fetch(`${base}/api/healthz`, { headers: { "x-forwarded-for": freshIp() } })).ok;

// Sends exactly these bytes and returns whatever comes back before the connection closes.
function rawRequest(text) {
  return new Promise(resolve => {
    const socket = net.connect(port, "127.0.0.1", () => socket.write(text));
    let received = "";
    socket.on("data", chunk => { received += chunk; });
    socket.on("close", () => resolve(received));
    socket.on("error", () => resolve(received));
    setTimeout(() => { socket.destroy(); resolve(received); }, 2500);
  });
}
const statusOf = reply => Number(/^HTTP\/1\.\d (\d{3})/.exec(reply)?.[1] || 0);

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  fs.mkdirSync(siblingDir, { recursive: true });
  fs.writeFileSync(path.join(siblingDir, "secret.txt"), "not for the public");
  server = spawn(process.execPath, ["server.js"], {
    cwd: root, stdio: "ignore", windowsHide: true,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"), NEXUS_DISABLE_LOCAL_ENV_FILES: "true",
      AGRINEXUS_TRUST_PROXY: "true", SESSION_SECRET: "prerouter-test-secret-value", PHONE_REALTIME_STREAMING_ENABLED: "true", PHONE_REALTIME_START_TIMEOUT_MS: "1500",
      // The phone stream only opens when a key is configured; nothing in these tests ever reaches OpenAI.
      OPENAI_API_KEY: "unit-test-dummy-credential" }
  });
  server.on("exit", code => { exitCode = code ?? -1; });
  await waitFor(`${base}/api/healthz`);
});
test.after(() => { try { server.kill(); } catch {} fs.rmSync(dir, { recursive: true, force: true }); fs.rmSync(siblingDir, { recursive: true, force: true }); });

test("a request line that is not a usable URL is answered 400 and the server stays up", async () => {
  const reply = await rawRequest("GET // HTTP/1.1\r\nHost: localhost\r\nx-forwarded-for: 10.1.1.1\r\nConnection: close\r\n\r\n");
  assert.equal(statusOf(reply), 400);
  assert.equal(await alive(), true);
});

test("a Host header that is not a valid host does not stop the server and the request is still answered", async () => {
  const reply = await rawRequest("GET /api/healthz HTTP/1.1\r\nHost: a b\r\nx-forwarded-for: 10.1.1.2\r\nConnection: close\r\n\r\n");
  assert.equal(statusOf(reply), 200);
  assert.equal(await alive(), true);
});

test("static paths: undecodable and NUL-byte paths are 404, and a sibling folder that merely starts with 'public' is not reachable", async () => {
  assert.equal(statusOf(await rawRequest("GET /%zz HTTP/1.1\r\nHost: x\r\nx-forwarded-for: 10.1.1.3\r\nConnection: close\r\n\r\n")), 404);
  assert.equal(statusOf(await rawRequest("GET /%00 HTTP/1.1\r\nHost: x\r\nx-forwarded-for: 10.1.1.4\r\nConnection: close\r\n\r\n")), 404);
  assert.equal(statusOf(await rawRequest("GET /exports/%zz HTTP/1.1\r\nHost: x\r\nx-forwarded-for: 10.1.1.5\r\nConnection: close\r\n\r\n")), 404);
  const sibling = await rawRequest(`GET /..%2f${siblingName}%2fsecret.txt HTTP/1.1\r\nHost: x\r\nx-forwarded-for: 10.1.1.6\r\nConnection: close\r\n\r\n`);
  assert.equal(statusOf(sibling), 403);
  assert.doesNotMatch(sibling, /not for the public/);
  const own = await rawRequest("GET /index.html HTTP/1.1\r\nHost: x\r\nx-forwarded-for: 10.1.1.7\r\nConnection: close\r\n\r\n");
  assert.equal(statusOf(own), 200, "ordinary files are still served");
  assert.equal(await alive(), true);
});

function streamBody(pathname, megabytes, headers = {}) {
  return new Promise((resolve, reject) => {
    const request = http.request({ host: "127.0.0.1", port, path: pathname, method: "POST", headers: { "content-type": "application/json", "transfer-encoding": "chunked", "x-forwarded-for": freshIp(), ...headers } }, response => { response.resume(); resolve(response.statusCode); });
    request.on("error", error => (error.code === "ECONNRESET" || error.code === "EPIPE" ? resolve(0) : reject(error)));
    const chunk = Buffer.alloc(1024 * 1024, 97);
    for (let i = 0; i < megabytes; i += 1) request.write(chunk);
    request.end();
  });
}

test("a large body to a sign-in or to any other signed-out POST is refused with 413 and the server stays up", async () => {
  // The sign-in route reads its body first to learn which business the email belongs to (limit 1 MB); the others use the general reader (limit 20 MB).
  assert.equal(await streamBody("/api/login", 3), 413);
  assert.equal(await streamBody("/api/auth/guest-session", 22), 413);
  const declared = await rawRequest(`POST /api/login HTTP/1.1\r\nHost: x\r\nx-forwarded-for: 10.1.1.8\r\ncontent-type: application/json\r\ncontent-length: 99999999\r\nConnection: close\r\n\r\n`);
  assert.equal(statusOf(declared), 413);
  assert.equal(await alive(), true);
});

test("an ordinary small sign-in body still works", async () => {
  const response = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json", "x-forwarded-for": freshIp() }, body: JSON.stringify({ email: "user@agrinexus.org", password: "User2026!" }) });
  assert.equal(response.status, 200);
});

function openStream() {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(`ws://127.0.0.1:${port}/api/voice/phone/stream`, { headers: { "x-forwarded-for": freshIp() } });
    socket.on("open", () => resolve(socket));
    socket.on("error", reject);
  });
}
const closedWith = (socket, ms = 4000) => new Promise(resolve => { socket.on("close", code => resolve(code)); setTimeout(() => resolve("still-open"), ms); });

test("phone stream: frames that are valid JSON but not objects do not stop the server", async () => {
  const socket = await openStream();
  for (const frame of ["null", "5", "[]", "\"x\"", "true", "{\"event\":null}", "not json"]) socket.send(frame);
  await sleep(500);
  assert.equal(await alive(), true);
  socket.close();
});

test("phone stream: a frame over the size limit closes the socket (1009)", async () => {
  const socket = await openStream();
  const closing = closedWith(socket);
  socket.send(Buffer.alloc(300 * 1024, 97));
  assert.equal(await closing, 1009);
  assert.equal(await alive(), true);
});

test("phone stream: a start frame with a bad token closes the socket, and a socket that never starts is closed", async () => {
  const bad = await openStream();
  const badClosed = closedWith(bad);
  bad.send(JSON.stringify({ event: "start", start: { streamSid: "MZ1", callSid: "CA1234567890", customParameters: { token: "nope" } } }));
  assert.notEqual(await badClosed, "still-open");
  const silent = await openStream();
  const started = Date.now();
  assert.notEqual(await closedWith(silent, 6000), "still-open", "closed by the start timeout");
  assert.ok(Date.now() - started < 5000);
  assert.equal(await alive(), true);
});

test("phone stream: an upgrade request with an unusable URL is dropped without stopping the server", async () => {
  await rawRequest("GET // HTTP/1.1\r\nHost: localhost\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==\r\nSec-WebSocket-Version: 13\r\n\r\n");
  assert.equal(await alive(), true);
});
