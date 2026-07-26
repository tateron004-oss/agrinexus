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
  { workspace: "agriculture", words: ["maize", "Kenya"], command: "Nexus, open Agriculture support for a maize crop issue in Kenya." },
  { workspace: "health", words: ["140", "90"], command: "Nexus, open Health and record blood pressure 140 over 90." },
  { workspace: "telehealth", words: ["Kenya"], command: "Nexus, open tele health intake in Kenya." },
  { workspace: "mobile-clinic", words: ["Kenya"], command: "Nexus, open Mobile Clinic support in Kenya." },
  { workspace: "pharmacy", words: ["medication", "Kenya"], command: "Nexus, open Pharmacy support for medication questions in Kenya." },
  { workspace: "learning", words: ["digital literacy"], command: "Nexus, open Learning and start a digital literacy course." },
  { workspace: "workforce", words: ["farming", "Kenya"], command: "Nexus, open Workforce and search for farming jobs in Kenya." },
  { workspace: "trade", words: ["50", "maize"], command: "Nexus, open Marketplace and sell 50 bags of maize." },
  { workspace: "map", words: ["Nairobi", "Nakuru"], command: "Nexus, show me the best route from Nairobi to Nakuru." },
  { workspace: "media", words: ["YouTube video found", "maize"], command: "Nexus, use YouTube to show me how to plant maize." },
  { workspace: "reminders", words: ["Reminders"], command: "Nexus, open Reminders." },
  { workspace: "offline", words: ["Offline", "Queue"], command: "Nexus, open the Offline Queue." },
  { workspace: "live-knowledge", words: ["climate-smart", "sources"], command: "Nexus, use the internet to research current climate-smart agriculture information and show sources." },
  { workspace: null, words: [], provider: "google-cloud-translation", command: "Nexus, change language to Swahili and tell me good morning farmer." }
  ,{ workspace: null, words: [], cloudinaryProvider: "cloudinary", command: "Nexus, upload and verify the Cloudinary certification image." }
];
const browserCandidates = process.platform === "win32"
  ? ["C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"]
  : ["/tmp/chromium", "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser", "/opt/google/chrome/chrome"];
const browserPath = process.env.CHROME_PATH || browserCandidates.find(candidate => fs.existsSync(candidate)) || browserCandidates[0];
const baseUrl = process.env.NEXUS_LIVE_BASE_URL || "http://127.0.0.1:4182";
const cdpPort = Number(process.env.NEXUS_LIVE_CDP_PORT || (9332 + (process.pid % 500)));
let acceptanceStage = "launch";
let acceptanceFailureReason = "";
let acceptanceProgress = { speechStartedCount: 0, responseDoneCount: 0, eventCount: 0 };
let failureDiagnostics = null;
let browserDiagnostics = { exceptions: [], console: [], failedRequests: [], responses: [] };
let activeCdpPort = cdpPort;
let activeProfilePath = "";
let browser = null;
let cdp = null;

function ensureSyntheticFixture() {
  if (process.env.NEXUS_LIVE_FIXTURE) return;
  fs.mkdirSync(outputDir, { recursive: true });
  const startupSilence = path.join(outputDir, "startup-silence.wav");
  const startupQuiet = spawnSync("ffmpeg", ["-y", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", "60", startupSilence], { encoding: "utf8" });
  assert.equal(startupQuiet.status, 0, `Could not synthesize startup silence: ${startupQuiet.stderr}`);
  const parts = [startupSilence];
  spokenJourneys.forEach((journey, index) => {
    const speech = path.join(outputDir, `journey-${index}.wav`);
    const silence = path.join(outputDir, `silence-${index}.wav`);
    const spoken = spawnSync("ffmpeg", ["-y", "-f", "lavfi", "-i", `flite=text='${journey.command.replace(/'/g, "")}'`, "-ar", "48000", "-ac", "1", speech], { encoding: "utf8" });
    assert.equal(spoken.status, 0, `Could not synthesize journey ${index + 1}: ${spoken.stderr}`);
    const silenceSeconds = ["health", "telehealth", "mobile-clinic"].includes(journey.workspace) ? "12" : "7";
    const quiet = spawnSync("ffmpeg", ["-y", "-f", "lavfi", "-i", "anullsrc=r=48000:cl=mono", "-t", silenceSeconds, silence], { encoding: "utf8" });
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
  const targets = await fetch(`http://127.0.0.1:${activeCdpPort}/json/list`).then(response => response.json());
  const page = targets.find(target => target.type === "page" && target.webSocketDebuggerUrl);
  if (!page) throw new Error("No browser page target was available.");
  return page.webSocketDebuggerUrl;
}

async function launchBrowserWithRetry(commonArgs) {
  const attempts = [];
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    activeCdpPort = cdpPort + attempt - 1;
    activeProfilePath = path.join(outputDir, `chrome-smoke-profile-${activeCdpPort}-${process.pid}-${attempt}`);
    fs.rmSync(activeProfilePath, { recursive: true, force: true });
    const stderrChunks = [];
    const args = [
      `--remote-debugging-port=${activeCdpPort}`,
      `--user-data-dir=${activeProfilePath}`,
      ...commonArgs
    ];
    browser = spawn(browserPath, args, { stdio: ["ignore", "ignore", "pipe"], windowsHide: true });
    browser.stderr.on("data", chunk => {
      stderrChunks.push(String(chunk));
      if (stderrChunks.join("").length > 12000) stderrChunks.shift();
    });
    let exitState = null;
    browser.once("exit", (code, signal) => {
      exitState = { code, signal };
    });
    try {
      const version = await waitFor(async () => {
        if (exitState) throw new Error(`Chrome exited with code ${exitState.code} and signal ${exitState.signal || "none"}`);
        const response = await fetch(`http://127.0.0.1:${activeCdpPort}/json/version`);
        if (!response.ok) return null;
        const data = await response.json();
        return data.webSocketDebuggerUrl ? data : null;
      }, 20000, `Chrome debugging endpoint attempt ${attempt}`);
      browserDiagnostics.chromeLaunch = {
        attempt,
        port: activeCdpPort,
        browser: String(version.Browser || ""),
        protocolVersion: String(version["Protocol-Version"] || "")
      };
      return browser;
    } catch (error) {
      attempts.push({
        attempt,
        port: activeCdpPort,
        exitState,
        error: String(error.message || error),
        stderr: stderrChunks.join("").slice(-4000)
      });
      try {
        if (process.platform === "win32" && browser?.pid) {
          spawnSync("taskkill", ["/pid", String(browser.pid), "/T", "/F"], { stdio: "ignore", windowsHide: true });
        } else {
          browser?.kill();
        }
      } catch {}
      await wait(500);
    }
  }
  browserDiagnostics.chromeLaunchAttempts = attempts;
  throw new Error(`Chrome failed to expose a debugging endpoint after ${attempts.length} attempts`);
}

async function main() {
  assert(fs.existsSync(browserPath), "Chrome is required for virtual microphone acceptance");
  ensureSyntheticFixture();
  assert(fs.existsSync(fixturePath), "Synthetic microphone fixture is missing");

  const browserArgs = [
    "--headless=new",
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

  let permanentCredentialObserved = false;
  let ephemeralCredentialLogged = false;
  try {
    acceptanceStage = "cdp-ready";
    await launchBrowserWithRetry(browserArgs);
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
        window.__NEXUS_TRANSLATION_TOOL_RESULTS__ = [];
        window.__NEXUS_CLOUDINARY_TOOL_RESULTS__ = [];
        const nexusOriginalFetch = window.fetch.bind(window);
        window.fetch = async (...args) => {
          const response = await nexusOriginalFetch(...args);
          const requestUrl = String(args[0]?.url || args[0] || '');
          if (requestUrl.includes('/api/voice/realtime/tool')) {
            response.clone().json().then(payload => {
              if (payload?.translationProvider) window.__NEXUS_TRANSLATION_TOOL_RESULTS__.push({
                provider: String(payload.translationProvider),
                response: String(payload.response || '')
              });
              if (payload?.cloudinaryProvider) window.__NEXUS_CLOUDINARY_TOOL_RESULTS__.push({
                provider: String(payload.cloudinaryProvider),
                verified: payload?.cloudinaryReceipt?.verified === true,
                secureDelivery: payload?.cloudinaryReceipt?.secureDelivery === true,
                publicId: String(payload?.cloudinaryReceipt?.publicId || ''),
                response: String(payload.response || '')
              });
            }).catch(() => {});
          }
          return response;
        };
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
    await waitFor(() => evaluate(cdp, `(() => {
      const app = document.querySelector('#appView');
      if (app && !app.classList.contains('hidden')) return true;
      const form = document.querySelector('#loginForm');
      const email = document.querySelector('#email');
      const password = document.querySelector('#password');
      if (!form || !email || !password) return false;
      if (document.readyState !== 'complete'
        || typeof window.NexusGenesisRealtimeClientStatus !== 'function') return false;
      const now = Date.now();
      if (!window.__NEXUS_ACCEPTANCE_LOGIN_SUBMITTED_AT__
        || now - window.__NEXUS_ACCEPTANCE_LOGIN_SUBMITTED_AT__ > 5000) {
        window.__NEXUS_ACCEPTANCE_LOGIN_SUBMITTED_AT__ = now;
        email.value = 'user@agrinexus.org';
        password.value = 'User2026!';
        form.requestSubmit();
      }
      return false;
    })()`), 45000, "authenticated Nexus application");
    acceptanceStage = "post-login-ready";
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
      const workspaceResults = requiredJourneys.filter(journey => journey.workspace).map(journey => {
        const normalizeVisibleWords = value => String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
        const candidates = workspaceAcks.filter(item => item.workspace === journey.workspace && item.opened === true && item.visible === true && item.verified === true);
        const wordsVisibleForAck = item => {
          const visibleText = item?.visibleText || '';
          const visibleValues = JSON.stringify(item?.populatedValues || {});
          const normalizedVisible = normalizeVisibleWords(visibleText + ' ' + visibleValues);
          return journey.words.every(word => normalizedVisible.includes(normalizeVisibleWords(word)));
        };
        const ack = [...candidates].reverse().find(wordsVisibleForAck) || [...candidates].reverse()[0] || null;
        return { workspace: journey.workspace, acknowledged: Boolean(ack), requestId: ack?.requestId || '', populatedFields: ack?.populatedFields || [], microphoneActive: ack?.microphoneActive === true, realtimeConnected: ack?.realtimeConnected === true, wordsVisible: Boolean(ack && wordsVisibleForAck(ack)) };
      });
      const workspacesSatisfied = !${requireWorkspaces} || workspaceResults.every(item => item.acknowledged && item.requestId && item.populatedFields.length && item.microphoneActive && item.realtimeConnected && item.wordsVisible);
      const translationResults = window.__NEXUS_TRANSLATION_TOOL_RESULTS__ || [];
      const translationSatisfied = translationResults.some(item => item.provider === 'google-cloud-translation' && item.response.trim());
      const cloudinaryResults = window.__NEXUS_CLOUDINARY_TOOL_RESULTS__ || [];
      const cloudinarySatisfied = cloudinaryResults.some(item => item.provider === 'cloudinary' && item.verified && item.secureDelivery && item.publicId && item.response.trim());
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
        translationSatisfied,
        translationResults,
        cloudinarySatisfied,
        cloudinaryResults,
        workspaceAckCount: workspaceAcks.length,
        workspaceResults
      };
      if (!speechStarted || !responseDone || !modelAudio || !interruptionSatisfied || !workspacesSatisfied || !translationSatisfied || !cloudinarySatisfied) return null;
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
        workspaceResults,
        translationResults
        ,cloudinaryResults
      };
    })()`), Math.max(180000, expectedTurns * 30000), "synthetic spoken turn and model response");

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
      translationResults: evidence.translationResults,
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
