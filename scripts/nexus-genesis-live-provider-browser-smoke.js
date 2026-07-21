const assert = require("assert");
const fs = require("fs");
const path = require("path");
const { spawn, spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const outputDir = path.join(root, "output", "nexus-live-voice-acceptance");
const fixturePath = path.resolve(process.env.NEXUS_LIVE_FIXTURE || path.join(outputDir, "smoke.wav"));
const expectedTurns = Number(process.env.NEXUS_LIVE_EXPECTED_TURNS || 1);
const requiredInterruptions = Number(process.env.NEXUS_LIVE_REQUIRED_INTERRUPTION_COUNT || 0);
const requireWorkspaces = process.env.NEXUS_LIVE_REQUIRE_WORKSPACES === "1";
const spokenJourneys = [
  { workspace: "workforce", words: ["farming", "Nairobi"], command: "Nexus, help me find a farming job in Nairobi." },
  { workspace: "map", words: ["Nairobi", "Nakuru"], command: "Nexus, show me the best route from Nairobi to Nakuru." },
  { workspace: "trade", words: ["maize"], command: "Nexus, help me sell maize." },
  { workspace: "health", words: ["intake"], command: "Nexus, start a healthcare intake." }
];
const browserCandidates = process.platform === "win32"
  ? ["C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"]
  : ["/tmp/chromium", "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser", "/opt/google/chrome/chrome"];
const browserPath = process.env.CHROME_PATH || browserCandidates.find(candidate => fs.existsSync(candidate)) || browserCandidates[0];
const baseUrl = process.env.NEXUS_LIVE_BASE_URL || "http://127.0.0.1:4182";
const cdpPort = Number(process.env.NEXUS_LIVE_CDP_PORT || (9332 + (process.pid % 500)));
const profilePath = path.join(outputDir, `chrome-smoke-profile-${cdpPort}-${process.pid}`);
let acceptanceStage = "launch";
let acceptanceFailureReason = "";
let acceptanceProgress = { speechStartedCount: 0, responseDoneCount: 0, eventCount: 0 };
let failureDiagnostics = null;
let browserDiagnostics = { exceptions: [], console: [], failedRequests: [], responses: [] };

function ensureSyntheticFixture() {
  if (fs.existsSync(fixturePath) || process.env.NEXUS_LIVE_FIXTURE) return;
  fs.mkdirSync(outputDir, { recursive: true });
  const parts = [];
  spokenJourneys.forEach((journey, index) => {
    const speech = path.join(outputDir, `journey-${index}.wav`);
    const silence = path.join(outputDir, `silence-${index}.wav`);
    const spoken = spawnSync("ffmpeg", ["-y", "-f", "lavfi", "-i", `flite=text='${journey.command.replace(/'/g, "")}'`, "-ar", "48000", "-ac", "1", speech], { encoding: "utf8" });
    assert.equal(spoken.status, 0, `Could not synthesize journey ${index + 1}: ${spoken.stderr}`);
    const quiet = spawnSync("ffmpeg", ["-y", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", "5", silence], { encoding: "utf8" });
    assert.equal(quiet.status, 0, `Could not synthesize silence ${index + 1}: ${quiet.stderr}`);
    parts.push(speech, silence);
  });
  const concatPath = path.join(outputDir, "fixture-concat.txt");
  fs.writeFileSync(concatPath, parts.map(file => `file '${file.replace(/'/g, "'\\''")}'`).join("\n"));
  const joined = spawnSync("ffmpeg", ["-y", "-f", "concat", "-safe", "0", "-i", concatPath, "-c:a", "pcm_s16le", fixturePath], { encoding: "utf8" });
  assert.equal(joined.status, 0, `Could not assemble synthetic microphone fixture: ${joined.stderr}`);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitFor(check, timeoutMs, label) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const value = await check();
      if (value) return value;
    } catch {}
    await wait(250);
  }
  throw new Error(`Timed out waiting for ${label}`);
}

async function cdpConnect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  let id = 0;
  const pending = new Map();
  const listeners = new Set();
  ws.onmessage = event => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const request = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result || {});
      return;
    }
    listeners.forEach(listener => listener(message));
  };
  return {
    send(method, params = {}) {
      id += 1;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    onEvent(listener) {
      listeners.add(listener);
    },
    close() {
      ws.close();
    }
  };
}

async function evaluate(cdp, expression) {
  const result = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true
  });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || "Browser evaluation failed");
  return result.result?.value;
}

async function pageWebSocket() {
  const targets = await fetch(`http://127.0.0.1:${cdpPort}/json/list`).then(response => response.json());
  const page = targets.find(target => target.type === "page" && target.webSocketDebuggerUrl);
  if (!page) throw new Error("No browser page target was available.");
  return page.webSocketDebuggerUrl;
}

async function main() {
  assert(fs.existsSync(browserPath), "Chrome is required for virtual microphone acceptance");
  ensureSyntheticFixture();
  assert(fs.existsSync(fixturePath), "Synthetic microphone fixture is missing");
  fs.rmSync(profilePath, { recursive: true, force: true });

  const browserArgs = [
    "--headless=new",
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${profilePath}`,
    "--use-fake-device-for-media-stream",
    "--use-fake-ui-for-media-stream",
    `--use-file-for-fake-audio-capture=${fixturePath}`,
    "--autoplay-policy=no-user-gesture-required",
    "--mute-audio",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    `${baseUrl}/?voiceDebug=1&voiceAcceptance=1`
  ];
  const browserProxy = process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy;
  if (browserProxy) browserArgs.unshift(`--proxy-server=${browserProxy}`);
  if (process.env.NEXUS_LIVE_IGNORE_CERT_ERRORS === "1") browserArgs.unshift("--ignore-certificate-errors");
  if (process.platform !== "win32") browserArgs.unshift("--no-sandbox", "--disable-dev-shm-usage");
  const browser = spawn(browserPath, browserArgs, { stdio: "ignore", windowsHide: true });

  let cdp;
  let permanentCredentialObserved = false;
  let ephemeralCredentialLogged = false;
  try {
    acceptanceStage = "cdp-ready";
    await waitFor(async () => {
      const response = await fetch(`http://127.0.0.1:${cdpPort}/json/list`);
      return response.ok;
    }, 15000, "Chrome debugging endpoint");
    cdp = await cdpConnect(await pageWebSocket());
    acceptanceStage = "cdp-enable";
    await cdp.send("Page.enable");
    await cdp.send("Runtime.enable");
    await cdp.send("Network.enable");
    cdp.onEvent(message => {
      if (message.method === "Runtime.exceptionThrown") { browserDiagnostics.exceptions.push(String(message.params?.exceptionDetails?.text || "exception")); return; }
      if (message.method === "Network.loadingFailed") { browserDiagnostics.failedRequests.push(String(message.params?.errorText || "network-failure")); return; }
      if (message.method === "Network.responseReceived") {
        const response = message.params?.response || {};
        const responseUrl = String(response.url || "");
        if (responseUrl.startsWith(baseUrl)) browserDiagnostics.responses.push({ status: Number(response.status || 0), url: responseUrl.slice(baseUrl.length) || "/" });
        return;
      }
      if (message.method !== "Runtime.consoleAPICalled") return;
      const safeConsoleValues = [];
      for (const arg of message.params?.args || []) {
        const value = typeof arg.value === "string" ? arg.value : "";
        if (/sk-(?:proj-)?[A-Za-z0-9_-]{16,}/.test(value)) permanentCredentialObserved = true;
        if (/ek_[A-Za-z0-9_-]{16,}/.test(value)) ephemeralCredentialLogged = true;
        if (value && !/sk-(?:proj-)?[A-Za-z0-9_-]{16,}|ek_[A-Za-z0-9_-]{16,}/.test(value)) safeConsoleValues.push(value.slice(0, 500));
      }
      if (safeConsoleValues.length) browserDiagnostics.console.push({ type: String(message.params?.type || "log"), values: safeConsoleValues });
    });
    await cdp.send("Page.addScriptToEvaluateOnNewDocument", {
      source: `
        const nexusOriginalAddEventListener = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function(type, listener, options) { if (type === "click" && this.id === "nexusPermanentMicrophoneBtn") this.dataset.nexusMicBound = "true"; return nexusOriginalAddEventListener.call(this, type, listener, options); };
        window.__NEXUS_VOICE_ACCEPTANCE_EVENTS__ = [];
        window.__NEXUS_WORKSPACE_ACKS__ = [];
        window.addEventListener('genesis.workspace.acknowledged', event => window.__NEXUS_WORKSPACE_ACKS__.push({ ...event.detail, visibleText: document.body?.innerText || '' }));
        window.__NEXUS_RESOURCE_TRACKER__ = { streams: new Set(), tracks: new Set(), audioContexts: new Set(), peers: new Set() };
        window.__NEXUS_RESOURCE_COUNTS__ = () => ({
          streams: [...window.__NEXUS_RESOURCE_TRACKER__.streams].filter(stream => stream && stream.active !== false).length,
          tracks: [...window.__NEXUS_RESOURCE_TRACKER__.tracks].filter(track => track && track.readyState !== 'ended').length,
          audioContexts: [...window.__NEXUS_RESOURCE_TRACKER__.audioContexts].filter(context => context && context.state !== 'closed').length,
          peerConnections: [...window.__NEXUS_RESOURCE_TRACKER__.peers].filter(peer => peer && !['closed','failed'].includes(peer.connectionState)).length
        });
        const originalGetUserMedia = navigator.mediaDevices?.getUserMedia?.bind(navigator.mediaDevices);
        if (originalGetUserMedia) navigator.mediaDevices.getUserMedia = async (...args) => {
          const stream = await originalGetUserMedia(...args);
          window.__NEXUS_RESOURCE_TRACKER__.streams.add(stream);
          stream.getTracks().forEach(track => {
            window.__NEXUS_RESOURCE_TRACKER__.tracks.add(track);
            const originalStop = track.stop.bind(track);
            track.stop = (...stopArgs) => { try { return originalStop(...stopArgs); } finally { window.__NEXUS_RESOURCE_COUNTS__(); } };
          });
          return stream;
        };
        const OriginalAudioContext = window.AudioContext || window.webkitAudioContext;
        if (OriginalAudioContext) {
          const WrappedAudioContext = function(...args) { const context = new OriginalAudioContext(...args); window.__NEXUS_RESOURCE_TRACKER__.audioContexts.add(context); return context; };
          WrappedAudioContext.prototype = OriginalAudioContext.prototype;
          window.AudioContext = WrappedAudioContext;
          if (window.webkitAudioContext) window.webkitAudioContext = WrappedAudioContext;
        }
        const OriginalPeerConnection = window.RTCPeerConnection;
        if (OriginalPeerConnection) {
          const WrappedPeerConnection = function(...args) { const peer = new OriginalPeerConnection(...args); window.__NEXUS_RESOURCE_TRACKER__.peers.add(peer); return peer; };
          WrappedPeerConnection.prototype = OriginalPeerConnection.prototype;
          window.RTCPeerConnection = WrappedPeerConnection;
        }
        window.__NEXUS_VOICE_ACCEPTANCE_EVENT_SINK__ = event => {
          const safe = {
            eventName: String(event?.eventName || ""),
            type: String(event?.type || ""),
            text: String(event?.text || ""),
            status: String(event?.status || ""),
            toolName: String(event?.toolName || ""),
            turnCount: Number(event?.turnCount || 0)
          };
          window.__NEXUS_VOICE_ACCEPTANCE_EVENTS__.push(safe);
        };
      `
    });
    acceptanceStage = "page-load";
    await cdp.send("Page.navigate", { url: `${baseUrl}/?voiceDebug=1&voiceAcceptance=1` });
    await waitFor(() => evaluate(cdp, "document.readyState === 'complete'"), 15000, "Nexus page load");
    acceptanceStage = "login";
    const login = await evaluate(cdp, `fetch('/api/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({email:'demo@agrinexus.org',password:'Prototype2026!'})
    }).then(response => ({ok:response.ok,status:response.status}))`);
    assert.equal(login.ok, true, `Login failed with ${login.status}`);
    acceptanceStage = "post-login-reload";
    await cdp.send("Page.navigate", { url: `${baseUrl}/?voiceDebug=1&voiceAcceptance=1` });
    await waitFor(() => evaluate(cdp, `Boolean(document.querySelector("#nexusPermanentMicrophoneBtn")?.dataset.nexusMicBound === "true")`), 20000, "bound microphone control");
    acceptanceStage = "mic-click";
    await evaluate(cdp, "document.querySelector('#nexusPermanentMicrophoneBtn').click(); true");

    acceptanceStage = "realtime-connect";
    const connected = await waitFor(() => evaluate(cdp, `(() => {
      const status = window.NexusGenesisRealtimeClientStatus?.() || {};
      return status.activeRuntime === 'realtime' && status.connectionState === 'connected' && status.liveMicrophoneTrack === true ? status : null;
    })()`), 45000, "live Realtime connection");

    acceptanceStage = "synthetic-turn";
    const evidence = await waitFor(() => evaluate(cdp, `(() => {
      const events = window.__NEXUS_VOICE_ACCEPTANCE_EVENTS__ || [];
      const types = events.map(event => event.type);
      const text = events.map(event => event.text).join(' ');
      const speechStartedCount = types.filter(type => type === 'input_audio_buffer.speech_started').length;
      const responseDoneCount = types.filter(type => type === 'response.done').length;
      acceptanceProgress = { speechStartedCount, responseDoneCount, eventCount: events.length };
      const speechStarted = speechStartedCount >= ${expectedTurns};
      const responseDone = responseDoneCount >= ${expectedTurns};
      const modelAudio = events.some(event => event.eventName === 'audio_start') || types.some(type => /output_audio|response\.audio/.test(type));
      const interruptionCount = events.filter(event => event.eventName === 'audio_interrupted').length + types.filter(type => /conversation\.item\.truncated|output_audio_buffer\.cleared/.test(type)).length;
      const responseCancelCount = types.filter(type => /response\.cancel|output_audio_buffer\.cleared|conversation\.item\.truncated/.test(type)).length;
      const lifecycleEvents = window.NexusGenesisVoiceLifecycleDiagnostics?.().events || [];
      const workspaceAcks = window.__NEXUS_WORKSPACE_ACKS__ || [];
      const requiredJourneys = ${JSON.stringify(spokenJourneys)};
      const workspaceResults = requiredJourneys.map(journey => {
        const ack = [...workspaceAcks].reverse().find(item => item.workspace === journey.workspace && item.opened === true && item.visible === true && item.verified === true);
        const visibleText = ack?.visibleText || '';
        const visibleValues = JSON.stringify(ack?.populatedValues || {});
        return { workspace: journey.workspace, acknowledged: Boolean(ack), requestId: ack?.requestId || '', populatedFields: ack?.populatedFields || [], microphoneActive: ack?.microphoneActive === true, realtimeConnected: ack?.realtimeConnected === true, wordsVisible: journey.words.every(word => (visibleText + ' ' + visibleValues).toLowerCase().includes(word.toLowerCase())) };
      });
      const workspacesSatisfied = !${requireWorkspaces} || workspaceResults.every(item => item.acknowledged && item.requestId && item.populatedFields.length && item.microphoneActive && item.realtimeConnected && item.wordsVisible);
      const lifecycleInterruptionCount = lifecycleEvents.filter(event => /interrupt|cancel-requested/.test(String(event.eventName || ''))).length;
      const interruptionSatisfied = interruptionCount + lifecycleInterruptionCount >= ${requiredInterruptions};
      window.__NEXUS_ACCEPTANCE_SNAPSHOT__ = {
        speechStarted,
        responseDone,
        modelAudio,
        speechStartedCount,
        responseDoneCount,
        eventCount: events.length,
        interruptionCount,
        lifecycleInterruptionCount,
        interruptionSatisfied,
        workspacesSatisfied,
        workspaceAckCount: workspaceAcks.length,
        workspaceResults
      };
      if (!speechStarted || !responseDone || !modelAudio || !interruptionSatisfied || !workspacesSatisfied) return null;
      return {
        speechStarted,
        responseDone,
        modelAudio,
        outputTranscriptObserved: text.trim().length > 0,
        expectedWordObserved: /sunrise/i.test(text),
        toolEvents: events.filter(event => /tool/.test(event.eventName)).length,
        eventCount: events.length,
        speechStartedCount,
        responseDoneCount,
        interruptionCount,
        responseCancelCount,
        lifecycleInterruptionCount,
        expectedTurns: ${expectedTurns},
        requiredInterruptions: ${requiredInterruptions},
        lifecycle: window.NexusGenesisVoiceLifecycleDiagnostics?.().currentInvariant || null,
        workspaceResults
      };
    })()`), Math.max(90000, expectedTurns * 18000), "synthetic spoken turn and model response");

    acceptanceStage = "cleanup";
    await evaluate(cdp, "stopRealtimeVoiceSession('explicit-stop-live-acceptance'); true");
    await wait(1000);
    const resources = await evaluate(cdp, "window.__NEXUS_RESOURCE_COUNTS__ ? window.__NEXUS_RESOURCE_COUNTS__() : null");
    if (connected.liveMicrophoneTrack !== true) acceptanceFailureReason = "live-track-false";
    else if (evidence.speechStarted !== true) acceptanceFailureReason = "speech-not-detected";
    else if (evidence.responseDone !== true) acceptanceFailureReason = "response-not-completed";
    else if (evidence.modelAudio !== true) acceptanceFailureReason = "model-audio-not-observed";
    else if (evidence.lifecycle?.ok !== true) acceptanceFailureReason = "lifecycle-invariant-failed";
    else if (permanentCredentialObserved) acceptanceFailureReason = "permanent-credential-console-observed";
    else if (ephemeralCredentialLogged) acceptanceFailureReason = "ephemeral-credential-console-observed";
    assert.equal(acceptanceFailureReason, "", acceptanceFailureReason);

    console.log(JSON.stringify({
      ok: true,
      suite: "nexus-genesis-live-provider-browser-smoke",
      virtualMicrophone: true,
      realRealtimeConnected: true,
      liveMicrophoneTrack: true,
      syntheticSpeechDetected: true,
      modelResponseCompleted: true,
      modelAudioObserved: true,
      outputTranscriptObserved: evidence.outputTranscriptObserved,
      expectedWordObserved: evidence.expectedWordObserved,
      lifecycleInvariant: evidence.lifecycle?.ok === true,
      workspaceResults: evidence.workspaceResults,
      browserSecretLoggingDetected: false,
      eventCount: evidence.eventCount
      ,expectedTurns: evidence.expectedTurns,
      speechStartedCount: evidence.speechStartedCount,
      responseDoneCount: evidence.responseDoneCount
      ,interruptionCount: evidence.interruptionCount,
      responseCancelCount: evidence.responseCancelCount
      ,lifecycleInterruptionCount: evidence.lifecycleInterruptionCount
      ,resources
    }));
  } finally {
    if (acceptanceStage !== "cleanup" && cdp) {
      try {
        failureDiagnostics = await evaluate(cdp, ` (async () => {
          const status = window.NexusGenesisRealtimeClientStatus?.() || {};
          const lifecycle = window.NexusGenesisVoiceLifecycleDiagnostics?.() || {};
          const events = window.__NEXUS_VOICE_ACCEPTANCE_EVENTS__ || [];
          const track = [...(window.__NEXUS_RESOURCE_TRACKER__?.tracks || [])][0];
          let audioLevel = { sampled: false, rms: 0, max: 0 };
          if (track) { try { const context = new AudioContext(); const source = context.createMediaStreamSource(new MediaStream([track])); const analyser = context.createAnalyser(); analyser.fftSize = 1024; source.connect(analyser); const data = new Uint8Array(analyser.fftSize); let max = 0; let sum = 0; let samples = 0; const started = performance.now(); while (performance.now() - started < 900) { analyser.getByteTimeDomainData(data); let local = 0; for (const value of data) { const normalized = (value - 128) / 128; local += normalized * normalized; } const rms = Math.sqrt(local / data.length); sum += rms; max = Math.max(max, rms); samples += 1; await new Promise(resolve => setTimeout(resolve, 50)); } audioLevel = { sampled: true, rms: samples ? sum / samples : 0, max }; await context.close(); } catch (error) { audioLevel = { sampled: false, errorCategory: String(error?.name || 'unknown') }; } }
          return { page: { url: location.href, title: document.title, readyState: document.readyState }, realtime: { connectionState: status.connectionState || null, activeRuntime: status.activeRuntime || null, liveMicrophoneTrack: status.liveMicrophoneTrack === true, responseInProgress: status.responseInProgress === true }, lifecycle: lifecycle.currentInvariant || null, acceptanceSnapshot: window.__NEXUS_ACCEPTANCE_SNAPSHOT__ || null, workspaceAcks: window.__NEXUS_WORKSPACE_ACKS__ || [], eventCount: events.length, transportEventTypes: events.map(event => event.type).filter(Boolean).slice(-40), inputTrackState: track?.readyState || null, audioLevel, audioContextStates: [...(window.__NEXUS_RESOURCE_TRACKER__?.audioContexts || [])].map(context => context.state), peerConnectionStates: [...(window.__NEXUS_RESOURCE_TRACKER__?.peers || [])].map(peer => ({ connectionState: peer.connectionState, iceGatheringState: peer.iceGatheringState, iceConnectionState: peer.iceConnectionState, signalingState: peer.signalingState })) };
        })()`);
      } catch {}
    }
    try {
      cdp?.close();
    } catch {}
    try {
      if (process.platform === 'win32' && browser?.pid) require('child_process').spawnSync('taskkill', ['/pid', String(browser.pid), '/T', '/F'], { stdio: 'ignore', windowsHide: true });
      else browser.kill();
    } catch {}
  }
}

main().catch(error => {
  const finish = async () => {
    let diagnostics = null;
    try {
      if (cdp) diagnostics = await evaluate(cdp, `(() => {
        const status = window.NexusGenesisRealtimeClientStatus?.() || {};
        const lifecycle = window.NexusGenesisVoiceLifecycleDiagnostics?.() || {};
        const events = window.__NEXUS_VOICE_ACCEPTANCE_EVENTS__ || [];
        const types = events.map(event => event.type).filter(Boolean);
        const track = [...(window.__NEXUS_RESOURCE_TRACKER__?.tracks || [])][0];
        return {
          realtime: { connectionState: status.connectionState || null, activeRuntime: status.activeRuntime || null, liveMicrophoneTrack: status.liveMicrophoneTrack === true, responseInProgress: status.responseInProgress === true, activeResponseId: Boolean(status.activeResponseId) },
          lifecycle: { currentInvariant: lifecycle.currentInvariant || null, current: lifecycle.current || null },
          transportEventTypes: types.slice(-40),
          eventCount: events.length,
          inputTrackState: track?.readyState || null,
          audioContextState: [...(window.__NEXUS_RESOURCE_TRACKER__?.audioContexts || [])].map(context => context.state),
          peerConnectionStates: [...(window.__NEXUS_RESOURCE_TRACKER__?.peers || [])].map(peer => ({ connectionState: peer.connectionState, iceGatheringState: peer.iceGatheringState, iceConnectionState: peer.iceConnectionState, signalingState: peer.signalingState }))
        };
      })()`);
    } catch {}
    console.error(JSON.stringify({
    ok: false,
    suite: "nexus-genesis-live-provider-browser-smoke",
    errorName: error.name || "Error",
    errorMessage: String(error.message || ""),
    errorCategory: /timed out/i.test(error.message || "") ? "timeout" : "acceptance-failure",
    stage: acceptanceStage,
    failureReason: acceptanceFailureReason || "unclassified",
    progress: acceptanceProgress,
    secretValuesReturned: false,
    diagnostics: failureDiagnostics,
    browserDiagnostics
    }));
    process.exitCode = 1;
  };
  finish();
});
