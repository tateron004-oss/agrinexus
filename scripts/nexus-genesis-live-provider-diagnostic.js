const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'output', 'nexus-live-voice-acceptance', 'live-provider-diagnostic.json');
const chrome = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const port = Number(process.env.NEXUS_DIAGNOSTIC_CDP_PORT || (9700 + (process.pid % 200)));
const profile = path.join(root, 'output', 'nexus-live-voice-acceptance', `chrome-diagnostic-${port}-${process.pid}`);
const base = process.env.NEXUS_LIVE_BASE_URL || 'http://127.0.0.1:4182';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function waitFor(fn, timeout = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try { const value = await fn(); if (value) return value; } catch {}
    await sleep(250);
  }
  throw new Error('diagnostic deadline expired');
}
async function cdpConnect(url) {
  const ws = new WebSocket(url); await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
  let id = 0; const pending = new Map();
  ws.onmessage = event => { const message = JSON.parse(event.data); if (message.id && pending.has(message.id)) { const p = pending.get(message.id); pending.delete(message.id); message.error ? p.reject(new Error(message.error.message)) : p.resolve(message.result || {}); } };
  return { send(method, params = {}) { const requestId = ++id; ws.send(JSON.stringify({ id: requestId, method, params })); return new Promise((resolve, reject) => pending.set(requestId, { resolve, reject })); }, close() { ws.close(); } };
}
async function main() {
  fs.rmSync(profile, { recursive: true, force: true });
  const browser = spawn(chrome, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`, '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--autoplay-policy=no-user-gesture-required', '--mute-audio', '--disable-gpu', '--no-first-run', `${base}/?voiceDebug=1&voiceAcceptance=1`], { stdio: 'ignore', windowsHide: true });
  let cdp; const evidence = { attempt: process.pid, baseUrl: base, startedAt: new Date().toISOString(), controls: {}, clientSecretCreated: false, clientSecretAgeMs: null, transport: {}, cleanup: {} };
  try {
    await waitFor(async () => (await fetch(`http://127.0.0.1:${port}/json/list`)).ok);
    const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then(r => r.json());
    cdp = await cdpConnect(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
    await cdp.send('Runtime.enable');
    await cdp.send('Page.navigate', { url: `${base}/?voiceDebug=1&voiceAcceptance=1` });
    await waitFor(() => cdp.send('Runtime.evaluate', { expression: 'document.readyState === "complete"', returnByValue: true }).then(r => r.result?.value));
    const result = await cdp.send('Runtime.evaluate', { awaitPromise: true, returnByValue: true, expression: `(async () => {
      const out = { controls: {}, transport: {}, cleanup: {} };
      const t = async (name, fn) => { const started = performance.now(); try { const value = await fn(); out.controls[name] = { ok: true, durationMs: Math.round(performance.now() - started), value }; return value; } catch (error) { out.controls[name] = { ok: false, durationMs: Math.round(performance.now() - started), errorCategory: String(error?.name || 'unknown') }; return null; } };
      await t('status', () => fetch('/api/voice/realtime/status?language=en').then(async response => ({ httpStatus: response.status, body: await response.json() })));
      await t('login', () => fetch('/api/login', { method: 'POST', credentials: 'same-origin', headers: {'content-type':'application/json'}, body: JSON.stringify({email:'demo@agrinexus.org',password:'Prototype2026!'}) }).then(async response => ({ httpStatus: response.status, body: await response.json().catch(() => ({})) })));
      const sessionStarted = performance.now();
      const session = await t('sessionAuthorization', () => fetch('/api/voice/realtime/session?language=en', { method: 'POST', credentials: 'same-origin', headers: {'content-type':'application/json'}, body: JSON.stringify({ language: 'en' }) }).then(async response => ({ httpStatus: response.status, body: await response.json().catch(() => ({})) })));
      if (session?.body?.clientSecret) { out.clientSecretCreated = true; out.clientSecretIssuedAt = Date.now(); out.clientSecretAgeMsAtUse = 0; }
      const statusBefore = await t('statusAfterAuthorization', () => fetch('/api/voice/realtime/status?language=en').then(async response => ({ httpStatus: response.status, body: await response.json() })));
      out.transport.statusBefore = statusBefore;
      out.inputTrackState = document.querySelector('#nexusPermanentMicrophoneBtn') ? 'control-present' : 'control-missing';
      return out;
    })()` });
    Object.assign(evidence, result.result?.value || {});
    evidence.clientSecretAgeMs = evidence.clientSecretIssuedAt ? Date.now() - evidence.clientSecretIssuedAt : null;
    evidence.finishedAt = new Date().toISOString();
    fs.mkdirSync(path.dirname(out), { recursive: true }); fs.writeFileSync(out, JSON.stringify(evidence, null, 2));
    console.log(JSON.stringify({ ok: true, ...evidence, noSecretValues: true }));
  } finally { try { cdp?.close(); } catch {} try { require('child_process').spawnSync('taskkill', ['/pid', String(browser.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true }); } catch {} }
}
main().catch(error => { console.error(JSON.stringify({ ok: false, errorCategory: error.name || 'unknown', message: 'diagnostic failed', noSecretValues: true })); process.exitCode = 1; });
