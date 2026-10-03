const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const test = require('node:test');
const assert = require('node:assert/strict');

const app = fs.readFileSync(path.join(__dirname, '../../public/app.js'), 'utf8');
const start = app.indexOf('async function handleNexusOsVoiceControlAction(');
const end = app.indexOf('function userIsActivelySpeaking(', start);

function controller(overrides = {}) {
  const calls = { cancelActiveRealtimeResponse: [] };
  const box = {
    nexusVoicePermissionDeniedThisSession: false,
    nexusOsVoiceRuntimeState: { permissionState: 'granted' },
    nexusOsConversationMuted: false,
    voiceFirstMode: false,
    voiceAutoRestart: false,
    voiceStopRequested: false,
    voiceDemoQuietMode: false,
    voiceRecognition: null,
    lastVoiceResponse: '',
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    recordNexusOsConversationTurn() {},
    showNexusVoiceFallbackMessage() {},
    renderUserWorkspace() {},
    async startVoiceListening() {},
    updateNexusOsVoiceRuntimeState() {},
    setVoiceResponse() {},
    stopVoicePlayback() {},
    speakVoiceResponse() {},
    disableNexusVoiceForDemo() {},
    saveNexusOsConversationTurns() {},
    nexusTrueExperienceHasActiveWorkflow: () => false,
    openAskNexus() {},
    $: () => null,
    updateUserCaptionPanel() {},
    cancelActiveRealtimeResponse(reason) {
      calls.cancelActiveRealtimeResponse.push(reason);
    },
    ...overrides
  };
  vm.createContext(box);
  vm.runInContext(app.slice(start, end), box);
  return { run: box.handleNexusOsVoiceControlAction, calls };
}

test('stop-speaking interrupts an in-progress OpenAI Realtime response, not just browser TTS', async () => {
  const x = controller();
  await x.run('stop-speaking', { source: 'user-click' });
  assert.equal(x.calls.cancelActiveRealtimeResponse.length, 1, 'stop-speaking must ask the Realtime session to cancel its current response');
});

test('mute interrupts an in-progress OpenAI Realtime response, not just browser TTS', async () => {
  const x = controller();
  await x.run('mute', { source: 'user-click' });
  assert.equal(x.calls.cancelActiveRealtimeResponse.length, 1, 'mute must ask the Realtime session to cancel its current response');
});

test('stop-listening does not need to cancel a Realtime response (it only stops the microphone)', async () => {
  const x = controller();
  await x.run('stop-listening', { source: 'user-click' });
  assert.equal(x.calls.cancelActiveRealtimeResponse.length, 0);
});
