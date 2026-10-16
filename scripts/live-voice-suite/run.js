#!/usr/bin/env node
"use strict";
// The live voice test: a real Chrome, a pretend microphone, real speech into the real voice session of the site named by --url, and a verdict for every case (what opened, what was said, what was drawn).
//
//   node scripts/live-voice-suite/run.js --url https://nexus-genesis-certified.onrender.com
//   options: --writes (also the cases that save something)  --risky (also the emergency words)  --only id,id  --area documents,lists  --no-sound  --show (a visible window)  --out report.json
//   sign-in: KYRO_TEST_EMAIL and KYRO_TEST_PASSWORD (a test account: never a real person's); with neither set it starts as a guest ("Start as User"), which some screens refuse
//   no password handy: open the site in your own browser, sign in, and paste the output of `node scripts/live-voice-suite/print-bundle.js` into the console (see docs/LIVE_VOICE_SUITE.md)
// Exit code: 0 all passed, 1 a case failed, 2 the voice session could not be started or sign-in failed.
const fs = require("node:fs");
const path = require("node:path");
const { CdpClient } = require("./cdp.js");
const { launchChrome } = require("./chrome.js");
const { buildInstallScript } = require("./rig-page.js");
const { select } = require("./cases/index.js");

const DEFAULT_URL = "https://nexus-genesis-certified.onrender.com";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function parseArgs(argv = []) {
  const options = { url: DEFAULT_URL, writes: false, risky: false, sound: true, show: false, only: "", area: "", out: "" };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]; const next = () => argv[++i];
    if (arg === "--url") options.url = String(next() || "").replace(/\/+$/, "");
    else if (arg === "--writes") options.writes = true;
    else if (arg === "--risky") options.risky = true;
    else if (arg === "--no-sound") options.sound = false;
    else if (arg === "--show") options.show = true;
    else if (arg === "--only") options.only = String(next() || "");
    else if (arg === "--area") options.area = String(next() || "");
    else if (arg === "--out") options.out = String(next() || "");
    else if (arg === "--help" || arg === "-h") options.help = true;
    else throw new Error(`Unknown option ${arg}`);
  }
  return options;
}

function summarise(results) {
  const passed = results.filter(r => r.status === "pass").length;
  const failed = results.filter(r => r.status === "fail").length;
  const errors = results.filter(r => r.status === "error").length;
  return { total: results.length, passed, failed, errors, warnings: results.reduce((n, r) => n + (r.warnings || []).length, 0) };
}

function formatResult(result) {
  const mark = result.status === "pass" ? "PASS" : result.status === "fail" ? "FAIL" : "ERR ";
  const lines = [`${mark}  ${result.id}  (${(result.ms / 1000).toFixed(1)}s)`];
  for (const failure of result.failures || []) lines.push(`        - ${failure}`);
  for (const warning of result.warnings || []) lines.push(`        ~ ${warning}`);
  if (result.detail) lines.push(`        . heard ${JSON.stringify(result.detail.heard)}; model said ${JSON.stringify(result.detail.modelSaid)}; tools ${JSON.stringify(result.detail.tools)}; page answered ${JSON.stringify(result.detail.typed)}`);
  return lines.join("\n");
}

async function waitForPage(client, timeoutMs = 45000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try { if (await client.evaluate("document.readyState === 'complete' && typeof realtimeVoiceActive === 'function' && typeof request === 'function'")) return true; } catch { /* still loading */ }
    await sleep(500);
  }
  throw new Error("The page did not finish loading.");
}

async function main(argv) {
  const options = parseArgs(argv);
  if (options.help) { console.log(fs.readFileSync(__filename, "utf8").split("\n").slice(2, 10).map(line => line.replace(/^\/\/ ?/, "")).join("\n")); return 0; }
  const email = process.env.KYRO_TEST_EMAIL; const password = process.env.KYRO_TEST_PASSWORD;
  const guest = !email || !password;
  if (guest) console.log("No KYRO_TEST_EMAIL / KYRO_TEST_PASSWORD: starting as a guest (some screens refuse guests). Use a test account for the full list.");
  const cases = select(options);
  if (!cases.length) { console.error("No cases match."); return 2; }
  console.log(`Live voice test of ${options.url}: ${cases.length} case(s)${options.writes ? ", including those that save things" : ""}${options.risky ? ", including emergency words" : ""}.`);
  const chrome = await launchChrome({ headless: !options.show });
  const client = await new CdpClient(chrome.target.webSocketDebuggerUrl).open();
  let results = []; let code = 0;
  try {
    await client.send("Page.enable"); await client.send("Runtime.enable");
    await client.send("Page.navigate", { url: options.url + "/" }); await waitForPage(client);
    if (!guest) {
      const login = await client.evaluate(`fetch('/api/login', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(${JSON.stringify({ email, password })}) }).then(r => r.status)`);
      if (login !== 200) { console.error(`Sign-in was refused (HTTP ${login}). Check KYRO_TEST_EMAIL and KYRO_TEST_PASSWORD.`); return 2; }
      await client.send("Page.navigate", { url: `${options.url}/?voice-suite=${Date.now()}#dashboard` }); await waitForPage(client); await sleep(3000);
    } else {
      await sleep(3000);
      // the guest start asks for a name first
      await client.evaluate("(() => { const f = [...document.querySelectorAll('input')].find(x => /your name|type your name/i.test(x.placeholder || x.getAttribute('aria-label') || '') && x.getBoundingClientRect().width > 0); if (f) { f.focus(); const set = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set; set.call(f, 'Voice Checker'); f.dispatchEvent(new Event('input', { bubbles: true })); } return !!f; })()");
      const started =await client.evaluate("(() => { const b = [...document.querySelectorAll('button')].find(x => /start as user/i.test(x.innerText) && x.getBoundingClientRect().width > 0); if (b) b.click(); return !!b; })()");
      if (!started) { console.error("There is no 'Start as User' button to start a guest session with."); return 2; }
      await sleep(6000); await waitForPage(client);
    }
    await client.evaluate(buildInstallScript());
    if (!(await client.evaluate("__kyroRig.startVoice()", 150000))) { console.error("The live voice session could not be started."); return 2; }
    await client.evaluate(`__kyroRig.runCases(${JSON.stringify(cases)})`);
    let printed = 0;
    for (;;) {
      await sleep(4000);
      const progress = await client.evaluate("({ results: __kyroRig.results, running: __kyroRig.running, finished: __kyroRig.finished, crash: __kyroRig.crash || '' })");
      for (; printed < progress.results.length; printed += 1) console.log(formatResult(progress.results[printed]));
      results = progress.results;
      if (progress.crash) console.error("The runner stopped: " + progress.crash);
      if (progress.finished) break;
    }
  } finally { client.close(); chrome.stop(); }
  const summary = summarise(results);
  console.log(`\n${summary.passed} passed, ${summary.failed} failed, ${summary.errors} errors, ${summary.warnings} warning(s) of ${cases.length} run.`);
  const outFile = options.out || path.join(process.env.TEMP || process.env.TMPDIR || ".", `kyro-live-voice-${Date.now()}.json`);
  try { fs.writeFileSync(outFile, JSON.stringify({ url: options.url, at: new Date().toISOString(), summary, results }, null, 2)); console.log(`Report: ${outFile}`); } catch { /* the console has it */ }
  code = summary.failed || summary.errors || results.length < cases.length ? 1 : 0;
  return code;
}

if (require.main === module) main(process.argv.slice(2)).then(code => process.exit(code), error => { console.error(error.message || error); process.exit(2); });

module.exports = { parseArgs, summarise, formatResult, main, DEFAULT_URL };
