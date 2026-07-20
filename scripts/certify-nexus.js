const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const evidenceDir = path.join(root, 'output', 'nexus-certification');
const checkpointPath = path.join(evidenceDir, 'checkpoint.json');
const reportPath = path.join(evidenceDir, 'report.json');
const certificationVersion = 'nexus-certification-v1';
const genesisSuccessStatement = 'The complete Nexus Genesis experience passed at 100% across voice, direct answers, clarification, workspace activation, context transfer, voice-assisted forms and intakes, cross-workspace missions, execution states, verification, receipts, recovery, Go Home, clean restart and post-test microphone availability.'
const stages = [
  { id: 'syntax', command: 'node --check server.js; if($LASTEXITCODE -ne 0){exit 1}; node --check public/app.js; if($LASTEXITCODE -ne 0){exit 1}; node --check scripts/nexus-genesis-live-provider-browser-smoke.js' },
  { id: 'voice-focused', command: 'npm.cmd run qa:nexus-genesis-persistent-voice-lifecycle; if($LASTEXITCODE -ne 0){exit 1}; npm.cmd run qa:nexus-genesis-realtime-repeated-turn-lifecycle; if($LASTEXITCODE -ne 0){exit 1}; npm.cmd run qa:nexus-openai-realtime-genesis; if($LASTEXITCODE -ne 0){exit 1}; npm.cmd run qa:nexus-realtime-microphone-visibility' },
  { id: 'language-and-provider', command: 'node scripts/voice-phase2-language-qa.js; if($LASTEXITCODE -ne 0){exit 1}; node scripts/voice-phase3-tts-qa.js; if($LASTEXITCODE -ne 0){exit 1}; node scripts/nexus-openai-native-genesis-qa.js; if($LASTEXITCODE -ne 0){exit 1}; node scripts/nexus-openai-native-tool-parity-qa.js' },
  { id: 'deterministic-lifecycle-50', command: 'node scripts/nexus-genesis-persistent-voice-lifecycle-qa.js' },
  { id: 'genesis-experience-confidence', command: 'npm.cmd run qa:nexus-genesis-experience-confidence-layer' },
  { id: 'integrated-safe', command: '$env:NEXUS_OPENAI_NATIVE_ENABLED="false"; $env:NEXUS_PRESERVE_EMPTY_ENV="1"; npm.cmd run qa:all-safe' }
];
function hashSource() {
  const hash = crypto.createHash('sha256');
  const files = ['server.js', 'public/app.js', 'public/sw.js', 'package.json', 'scripts/qa-suite.js', 'scripts/nexus-production-layer-activation-integration-qa.js', 'scripts/nexus-openai-native-genesis-qa.js', 'scripts/nexus-openai-native-tool-parity-qa.js', 'scripts/voice-phase2-language-qa.js', 'scripts/voice-phase3-tts-qa.js', 'scripts/phone-greeting-qa.js', 'scripts/nexus-genesis-experience-confidence-layer-qa.js', 'public/nexus-conversation-workflow-transition-engine.js'];
  for (const file of files) hash.update(fs.readFileSync(path.join(root, file)));
  return hash.digest('hex');
}
function run(stage) {
  const result = spawnSync('powershell.exe', ['-NoProfile', '-Command', stage.command], { cwd: root, encoding: 'utf8', timeout: 15 * 60 * 1000 });
  return { id: stage.id, ok: result.status === 0, exitCode: result.status, stdoutTail: String(result.stdout || '').slice(-4000), stderrTail: String(result.stderr || '').slice(-4000), completedAt: new Date().toISOString() };
}
(async () => {
  fs.mkdirSync(evidenceDir, { recursive: true });
  const sourceHash = hashSource();
  let checkpoint = fs.existsSync(checkpointPath) ? JSON.parse(fs.readFileSync(checkpointPath, 'utf8')) : {};
  const report = { certificationVersion, sourceHash, startedAt: new Date().toISOString(), stages: [] };
  for (const stage of stages) {
    const prior = checkpoint[stage.id];
    if (prior?.ok && prior.sourceHash === sourceHash) { report.stages.push({ ...prior, reused: true }); continue; }
    const result = run(stage); const entry = { ...result, sourceHash };
    report.stages.push(entry); checkpoint[stage.id] = entry;
    fs.writeFileSync(checkpointPath, JSON.stringify(checkpoint, null, 2));
    if (!result.ok) break;
  }
  report.ok = report.stages.length === stages.length && report.stages.every(stage => stage.ok);
  report.genesisExperienceStatement = report.ok ? genesisSuccessStatement : null;
  report.finishedAt = new Date().toISOString();
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ ok: report.ok, report: reportPath, completedStages: report.stages.length, requiredStages: stages.length }));
  process.exitCode = report.ok ? 0 : 1;
})();
