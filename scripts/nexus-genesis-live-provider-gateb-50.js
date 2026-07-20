/* Deterministic Gate B runner: bounded, per-cycle evidence and resource leak audit. */
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const root = path.resolve(__dirname, '..');
const harness = path.join(__dirname, 'nexus-genesis-live-provider-browser-smoke.js');
const cycles = Number(process.env.NEXUS_GATEB_CYCLES || 50);
const cycleTimeoutMs = Number(process.env.NEXUS_GATEB_CYCLE_TIMEOUT_MS || 120000);
const retryCooldownMs = Number(process.env.NEXUS_GATEB_RETRY_COOLDOWN_MS || 65000);
const results = [];

function runCycle(index) {
  return new Promise(resolve => {
    const startedAt = new Date().toISOString();
    const cdpPort = 9400 + index;
    const child = spawn(process.execPath, [harness], {
      cwd: root,
      env: { ...process.env, NEXUS_LIVE_CDP_PORT: String(cdpPort), NEXUS_LIVE_EXPECTED_TURNS: '1' },
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true
    });
    let stdout = '', stderr = '', timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      if (process.platform === 'win32' && child.pid) require('child_process').spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
      else child.kill();
    }, cycleTimeoutMs);
    child.stdout.on('data', chunk => { stdout += chunk.toString(); });
    child.stderr.on('data', chunk => { stderr += chunk.toString(); });
    child.on('close', code => {
      clearTimeout(timer);
      const lines = stdout.trim().split(/\r?\n/).filter(Boolean);
      let evidence = null;
      for (const line of lines.reverse()) { try { const parsed = JSON.parse(line); if (parsed.suite) { evidence = parsed; break; } } catch {} }
      const endedAt = new Date().toISOString();
      const resources = evidence?.resources || null;
      const pass = !timedOut && code === 0 && evidence?.ok === true && resources && Object.values(resources).every(value => value === 0);
      resolve({ index, startedAt, endedAt, durationMs: Date.parse(endedAt) - Date.parse(startedAt), code, timedOut, pass, resources, stage: evidence?.stage, progress: evidence?.progress, error: evidence?.error, stderrTail: stderr.slice(-500) });
    });
  });
}

(async () => {
  for (let index = 1; index <= cycles; index += 1) {
    const result = await runCycle(index);
    results.push(result);
    console.log(JSON.stringify({ gate: 'B', cycle: index, ...result }));
    if (!result.pass) {
      if (process.env.NEXUS_GATEB_CONTINUE_ON_FAILURE !== '1') break;
      await new Promise(resolve => setTimeout(resolve, retryCooldownMs));
    }
  }
  const completed = results.filter(result => !result.timedOut).length;
  const passed = results.filter(result => result.pass).length;
  const leaks = results.filter(result => result.resources && Object.values(result.resources).some(value => value !== 0));
  const summary = { gate: 'B', requiredCycles: cycles, completed, passed, failed: results.length - passed, timedOut: results.filter(result => result.timedOut).length, leakedCycles: leaks.length, allPassed: completed === cycles && passed === cycles && leaks.length === 0, results };
  fs.mkdirSync(path.join(root, 'output', 'nexus-live-voice-acceptance'), { recursive: true });
  fs.writeFileSync(path.join(root, 'output', 'nexus-live-voice-acceptance', 'gateb-50-evidence.json'), JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary));
  process.exitCode = summary.allPassed ? 0 : 1;
})();
