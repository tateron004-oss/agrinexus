#!/usr/bin/env node
"use strict";

const { spawn, spawnSync } = require("node:child_process");

const hardTimeoutMs = Number(process.env.NEXUS_PLAYWRIGHT_HARD_TIMEOUT_MS || 300_000);
const command = process.platform === "win32" ? "npx.cmd" : "npx";
const child = spawn(command, [
  "playwright",
  "test",
  "--config=playwright.workflow.config.js"
], {
  stdio: "inherit",
  windowsHide: false
});

let settled = false;
const watchdog = setTimeout(() => {
  if (settled) return;
  console.error(`Nexus workspace proof exceeded hard timeout of ${hardTimeoutMs}ms.`);
  if (process.platform === "win32" && child.pid) {
    spawnSync("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
      stdio: "inherit",
      windowsHide: true
    });
  } else {
    child.kill("SIGKILL");
  }
  process.exitCode = 124;
}, hardTimeoutMs);
watchdog.unref();

child.once("error", error => {
  settled = true;
  clearTimeout(watchdog);
  console.error(error);
  process.exitCode = 1;
});

child.once("exit", (code, signal) => {
  settled = true;
  clearTimeout(watchdog);
  if (signal) {
    console.error(`Nexus workspace proof terminated by ${signal}.`);
    process.exitCode = 1;
    return;
  }
  process.exitCode = Number.isInteger(code) ? code : 1;
});
