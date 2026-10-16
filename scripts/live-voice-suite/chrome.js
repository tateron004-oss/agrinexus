"use strict";
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const net = require("node:net");
const { spawn } = require("node:child_process");

// Starts a separate Chrome (its own empty profile, so the person's own browser is never touched) that allows sound to start without a tap and a pretend microphone, and returns the address to drive it by.
const CANDIDATES = [
  process.env.KYRO_CHROME,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  path.join(process.env.LOCALAPPDATA || "", "Google", "Chrome", "Application", "chrome.exe"),
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome", "/usr/bin/google-chrome-stable", "/usr/bin/chromium", "/usr/bin/chromium-browser"
].filter(Boolean);

function findChrome(exists = fs.existsSync) { return CANDIDATES.find(candidate => { try { return exists(candidate); } catch { return false; } }) || ""; }

function freePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => { const { port } = server.address(); server.close(() => resolve(port)); });
  });
}

function chromeArguments({ port, profileDir, headless = true, width = 1280, height = 800 }) {
  return [
    `--remote-debugging-port=${port}`, "--remote-allow-origins=*", `--user-data-dir=${profileDir}`,
    "--no-first-run", "--no-default-browser-check", "--disable-extensions", "--disable-background-timer-throttling", "--disable-renderer-backgrounding", "--disable-backgrounding-occluded-windows",
    "--autoplay-policy=no-user-gesture-required", "--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream", `--window-size=${width},${height}`,
    ...(headless ? ["--headless=new"] : []), "about:blank"
  ];
}

async function waitForDevTools(port, timeoutMs = 20000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try { const response = await fetch(`http://127.0.0.1:${port}/json/version`); if (response.ok) return await response.json(); } catch { /* not up yet */ }
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  throw new Error("Chrome did not start in time.");
}

async function launchChrome({ headless = true, chromePath = findChrome() } = {}) {
  if (!chromePath) throw new Error("Chrome was not found. Install Chrome or set KYRO_CHROME to its path.");
  const port = await freePort();
  const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), "kyro-voice-suite-"));
  const child = spawn(chromePath, chromeArguments({ port, profileDir, headless }), { stdio: "ignore", windowsHide: true });
  const stop = () => { try { child.kill(); } catch { /* gone */ } setTimeout(() => { try { fs.rmSync(profileDir, { recursive: true, force: true }); } catch { /* still in use: the temp folder is cleaned later */ } }, 1500); };
  try { await waitForDevTools(port); } catch (error) { stop(); throw error; }
  // a fresh page to drive
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
  return { port, target, stop };
}

module.exports = { findChrome, freePort, chromeArguments, waitForDevTools, launchChrome, CANDIDATES };
