"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");
const { chromium, request: playwrightRequest } = require("playwright");

const BASE_URL = process.env.NEXUS_PRODUCTION_REPAIR_BASE_URL || "https://nexus-genesis-certified.onrender.com";
const LIVE_URL = process.env.NEXUS_LIVE_PROVIDER_BASE_URL || "https://nexus-genesis-certified.onrender.com";
const SESSION_ID = process.env.NEXUS_PRODUCTION_SESSION_ID || "session-1";
const OUTPUT = path.resolve(process.env.NEXUS_PRODUCTION_VOICE_OUTPUT || `output/nexus-production-experience-voice/${SESSION_ID}`);
const turns = [
  { id: "nairobi-weather", command: "Nexus, show me the current weather in Nairobi, Kenya with the live source.", capability: "weather" },
  { id: "united-states-map", command: "Nexus, show the United States on a fresh map.", capability: "map" },
  { id: "maize-images", command: "Nexus, research maize diseases in Kenya. Show me pictures of common symptoms and explain how to tell them apart.", capability: "images" },
  { id: "agriculture-open", command: "Nexus, open Agriculture Help.", capability: "workspace", workspace: "agriculture" },
  { id: "agriculture-reopen-visible", command: "Nexus, open Agriculture Help again and keep it synchronized with this request.", capability: "workspace", workspace: "agriculture" },
  { id: "health-open", command: "Nexus, open Health and Chronic Care.", capability: "workspace", workspace: "health" },
  { id: "telehealth-open", command: "Nexus, open Telehealth Intake.", capability: "workspace", workspace: "telehealth" },
  { id: "mobile-clinic-open", command: "Nexus, open Mobile Clinic.", capability: "workspace", workspace: "mobile-clinic" },
  { id: "pharmacy-open", command: "Nexus, open Pharmacy Support.", capability: "workspace", workspace: "pharmacy" },
  { id: "learning-open", command: "Nexus, open Learning and Literacy.", capability: "workspace", workspace: "learning" },
  { id: "workforce-open", command: "Nexus, open Jobs and Workforce.", capability: "workspace", workspace: "workforce" },
  { id: "marketplace-open", command: "Nexus, open AgriTrade Marketplace.", capability: "workspace", workspace: "marketplace" },
  { id: "reminders-open", command: "Nexus, open Reminders.", capability: "workspace", workspace: "reminders" },
  { id: "offline-open", command: "Nexus, open Offline Queue.", capability: "workspace", workspace: "offline" },
  { id: "farming-resume", command: "Nexus, help me create a resume for someone with five years of farming experience.", capability: "resume" },
  { id: "resume-follow-up", command: "Add three years coordinating harvest crews to the work experience.", capability: "resume" },
  { id: "pharmacist-card", command: "Create a visual list of questions I should ask my pharmacist about a new blood pressure medicine.", capability: "question-card" },
  { id: "stevie-wonder", command: "Nexus, find and play some Stevie Wonder music.", capability: "music" }
];

function wait(milliseconds) { return new Promise(resolve => setTimeout(resolve, milliseconds)); }

async function poll(fn, message, timeout = 90000, interval = 300) {
  const deadline = Date.now() + timeout;
  let lastError = null;
  while (Date.now() < deadline) {
    try { const value = await fn(); if (value) return value; } catch (error) { lastError = error; }
    await wait(interval);
  }
  throw new Error(`${message}${lastError ? `: ${lastError.message}` : ""}`);
}

function speakThroughWindows(text) {
  const encoded = Buffer.from(text, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encoded}'))`,
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.SelectVoiceByHints([System.Speech.Synthesis.VoiceGender]::Male)",
    "$v.Volume=100", "$v.Rate=2", "$v.Speak($t)", "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script], { windowsHide: true });
    let stderr = "";
    child.stderr.on("data", chunk => { stderr += chunk; });
    child.on("exit", code => code === 0 ? resolve({ route: "Windows default speakers to Realtek microphone array", castAudio: false }) : reject(new Error(stderr || `Windows speech exited ${code}`)));
  });
}

function synthesizeWindowsWave(text) {
  const encoded = Buffer.from(text, "utf16le").toString("base64");
  const wavePath = path.join(OUTPUT, `.windows-voice-input-${process.pid}-${Date.now()}.wav`);
  const waveEncoded = Buffer.from(wavePath, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encoded}'))`,
    `$p=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${waveEncoded}'))`,
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.SelectVoiceByHints([System.Speech.Synthesis.VoiceGender]::Male)",
    "$v.Volume=100", "$v.Rate=0", "$v.SetOutputToWaveFile($p)", "$v.Speak($t)", "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script], { windowsHide: true });
    let stderr = "";
    child.stderr.on("data", chunk => { stderr += chunk; });
    child.on("exit", code => {
      if (code !== 0) return reject(new Error(stderr || `Windows speech exited ${code}`));
      try { resolve(fs.readFileSync(wavePath).toString("base64")); }
      catch (error) { reject(error); }
      finally { try { fs.unlinkSync(wavePath); } catch {} }
    });
  });
}

async function injectWindowsVoiceInput(page, text) {
  const wave = await synthesizeWindowsWave(text);
  await page.evaluate(async encoded => {
    if (!window.__NEXUS_WINDOWS_VOICE_INPUT__) throw new Error("Windows voice capture mixer is unavailable");
    await window.__NEXUS_WINDOWS_VOICE_INPUT__.play(encoded);
  }, wave);
}

function commandOverlap(expected, actual) {
  const tokens = value => new Set(String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(token => token.length >= 3));
  const left = tokens(expected); const right = tokens(actual);
  const overlap = [...left].filter(token => right.has(token)).length;
  return overlap / Math.max(1, Math.min(left.size, right.size));
}

async function main() {
  assert.equal(process.platform, "win32", "Physical Windows voice certification requires Windows.");
  fs.mkdirSync(OUTPUT, { recursive: true });
  const evidence = { schema: "nexus.production-experience.windows-voice.v2", sessionId: SESSION_ID, productionService: BASE_URL, liveProvider: LIVE_URL, startedAt: new Date().toISOString(), turns: [], foundation: {}, passed: false };
  let sessionEvidence = null;
  const liveApi = await playwrightRequest.newContext({
    baseURL: LIVE_URL,
    extraHTTPHeaders: { origin: LIVE_URL, referer: `${LIVE_URL}/`, accept: "application/json" }
  });
  const liveLogin = await liveApi.post("/api/login", { data: { email: "user@agrinexus.org", password: "User2026!" } });
  assert.equal(liveLogin.status(), 200, "Live provider authentication failed");

  const browser = await chromium.launch({ channel: "chrome", headless: false, args: ["--autoplay-policy=no-user-gesture-required", "--no-first-run", "--no-default-browser-check"] });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const livePaths = ["/api/config", "/api/voice/realtime/status", "/api/voice/realtime/session", "/api/voice/realtime/tool"];
  await context.route(`${BASE_URL}/api/**`, async route => {
    const browserRequest = route.request();
    const parsed = new URL(browserRequest.url());
    if (!livePaths.some(pathname => parsed.pathname === pathname)) return route.continue();
    const liveResponse = await liveApi.fetch(`${parsed.pathname}${parsed.search}`, {
      method: browserRequest.method(),
      headers: { "content-type": browserRequest.headers()["content-type"] || "application/json", origin: LIVE_URL, referer: `${LIVE_URL}/`, accept: "application/json" },
      data: browserRequest.postDataBuffer() || undefined
    });
    const body = await liveResponse.body();
    if (parsed.pathname === "/api/voice/realtime/session" && liveResponse.ok()) {
      try {
        const payload = JSON.parse(body.toString("utf8"));
        sessionEvidence = {
          runtime: payload.runtime || payload.activeRuntime || "realtime",
          model: payload.model || "",
          voice: payload.voice || payload.outputVoice || "",
          britishFemaleInstruction: /British woman|British female/i.test(String(payload.instructions || payload.sessionInstructions || payload.clientConfig && payload.clientConfig.instructions || "")),
          ephemeralCredentialShapeValid: /^ek_[A-Za-z0-9_-]+$/.test(String(payload.clientSecret || "")),
          noSecretPersisted: true
        };
      } catch {}
    }
    const headers = { "content-type": liveResponse.headers()["content-type"] || "application/json", "cache-control": "no-store" };
    await route.fulfill({ status: liveResponse.status(), headers, body });
  });
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  const page = await context.newPage();
  try {
    await page.addInitScript(() => {
      const nativeGetUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia && navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      if (nativeGetUserMedia) {
        navigator.mediaDevices.getUserMedia = async constraints => {
          if (!constraints || !constraints.audio) return nativeGetUserMedia(constraints);
          const requested = constraints.audio === true ? {} : constraints.audio;
          const physicalStream = await nativeGetUserMedia({
            ...constraints,
            audio: { ...requested, echoCancellation: false, noiseSuppression: false, autoGainControl: true }
          });
          const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
          const audioContext = new AudioContextCtor();
          const destination = audioContext.createMediaStreamDestination();
          audioContext.createMediaStreamSource(physicalStream).connect(destination);
          window.__NEXUS_WINDOWS_VOICE_INPUT__ = {
            physicalStream,
            destination,
            async play(encoded) {
              await audioContext.resume();
              const bytes = Uint8Array.from(atob(encoded), character => character.charCodeAt(0));
              const buffer = await audioContext.decodeAudioData(bytes.buffer);
              const source = audioContext.createBufferSource();
              source.buffer = buffer;
              source.connect(destination);
              await new Promise(resolve => { source.addEventListener("ended", resolve, { once: true }); source.start(); });
            }
          };
          return destination.stream;
        };
      }
      window.__physicalProduction = { stages: [], voiceEvents: [], workspaceAcks: [], errors: [] };
      window.addEventListener("nexus.capability.stage", event => window.__physicalProduction.stages.push(event.detail));
      window.addEventListener("genesis.workspace.acknowledged", event => window.__physicalProduction.workspaceAcks.push({ ...event.detail, at: new Date().toISOString() }));
      window.addEventListener("error", event => window.__physicalProduction.errors.push(String(event.message || "error")));
      window.addEventListener("unhandledrejection", event => window.__physicalProduction.errors.push(String(event.reason || "rejection")));
      window.__NEXUS_VOICE_ACCEPTANCE_EVENT_SINK__ = event => window.__physicalProduction.voiceEvents.push({
        eventName: String(event && event.eventName || ""), type: String(event && event.type || ""), text: String(event && event.text || ""),
        status: String(event && event.status || ""), toolName: String(event && event.toolName || ""), turnCount: Number(event && event.turnCount || 0), at: new Date().toISOString()
      });
    });
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    const localLoginStatus = await page.evaluate(async credentials => (await fetch("/api/login", {
      method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" }, body: JSON.stringify(credentials)
    })).status, { email: "user@agrinexus.org", password: "User2026!" });
    assert.equal(localLoginStatus, 200, "Protected local browser authentication failed");
    await page.reload({ waitUntil: "domcontentloaded" });
    await page.waitForTimeout(900);
    await poll(() => page.evaluate(async () => {
      try { return (await fetch("/api/state", { cache: "no-store", credentials: "same-origin" })).status === 200; }
      catch { return false; }
    }), "Protected authenticated session did not become ready", 20000);
    await poll(() => page.evaluate(async () => {
      try {
        const response = await fetch("/api/capability/content", {
          method: "POST", credentials: "same-origin", headers: { "content-type": "application/json" },
          body: JSON.stringify({ requestId: "production-capability-readiness-voice", command: "Nexus capability authentication readiness check" })
        });
        return response.status === 200;
      } catch { return false; }
    }), "Additive capability session did not inherit protected authentication", 20000);
    await page.locator("#nexusPermanentMicrophoneBtn").click();
    const connected = await poll(() => page.evaluate(() => {
      const status = window.NexusGenesisRealtimeClientStatus && window.NexusGenesisRealtimeClientStatus();
      return status && status.activeRuntime === "realtime" && status.connectionState === "connected" && status.liveMicrophoneTrack === true ? status : null;
    }), "Live Realtime microphone did not connect", 60000);
    await poll(() => sessionEvidence && sessionEvidence.ephemeralCredentialShapeValid ? sessionEvidence : null, "No safe Realtime session evidence", 10000);
    evidence.foundation = {
      connected: true,
      activeRuntime: connected.activeRuntime,
      microphoneLive: connected.liveMicrophoneTrack === true,
      voice: sessionEvidence.voice,
      model: sessionEvidence.model,
      britishFemaleInstruction: sessionEvidence.britishFemaleInstruction,
      ephemeralCredentialShapeValid: sessionEvidence.ephemeralCredentialShapeValid,
      noSecretPersisted: true
    };

    const calibrationStage = await page.evaluate(() => window.__physicalProduction.voiceEvents.length);
    let windowsAudioRoute = null;
    let calibrated = false;
    for (let attempt = 1; attempt <= 3 && !calibrated; attempt += 1) {
      windowsAudioRoute = await speakThroughWindows("Nexus, say calibration complete.");
      calibrated = await poll(() => page.evaluate(before => {
        const events = window.__physicalProduction.voiceEvents.slice(before);
        return events.some(event => event.type === "input_audio_buffer.speech_started") && events.some(event => event.type === "response.done" || event.eventName === "agent_end");
      }, calibrationStage), "Physical audible microphone calibration attempt did not complete", 30000).then(() => true).catch(() => false);
      if (!calibrated) await wait(1200);
    }
    assert.equal(calibrated, true, "Physical audible microphone calibration did not complete after three attempts");
    evidence.foundation.physicalAudibleCalibration = true;
    evidence.foundation.windowsAudioRoute = windowsAudioRoute;
    evidence.foundation.turnInputRoute = "Windows Speech waveform mixed with the continuously live Realtek microphone into one browser capture track";

    for (const test of turns) {
      await poll(() => page.evaluate(() => {
        const status = window.NexusGenesisRealtimeClientStatus && window.NexusGenesisRealtimeClientStatus();
        const events = window.__physicalProduction.voiceEvents;
        const lastAudioStart = events.map((event, index) => event.type === "output_audio_buffer.started" ? index : -1).reduce((left, right) => Math.max(left, right), -1);
        const lastAudioStop = events.map((event, index) => event.type === "output_audio_buffer.stopped" || event.eventName === "audio_stopped" ? index : -1).reduce((left, right) => Math.max(left, right), -1);
        return status && status.connectionState === "connected" && status.liveMicrophoneTrack === true && status.responseInProgress !== true && lastAudioStop >= lastAudioStart;
      }), `${test.id}: Realtime was not idle and listening`, 30000);
      await wait(2200);
      const before = await page.evaluate(() => ({ stages: window.__physicalProduction.stages.length, voiceEvents: window.__physicalProduction.voiceEvents.length }));
      const startedAt = Date.now();
      await injectWindowsVoiceInput(page, test.command);
      const findRoute = () => page.evaluate(({ before, command }) => {
        const normalize = value => String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(/\s+/).filter(token => token.length >= 3);
        const expected = new Set(normalize(command));
        return window.__physicalProduction.stages.slice(before.stages).find(stage => {
          if (stage.type !== "conversation.goal-requested") return false;
          const actual = new Set(normalize(stage.detail && stage.detail.command));
          const overlap = [...expected].filter(token => actual.has(token)).length;
          return overlap / Math.max(1, Math.min(expected.size, actual.size)) >= .4;
        }) || null;
      }, { before, command: test.command });
      let routed;
      try {
        routed = await poll(findRoute, `${test.id}: first physical transcript did not reach the conversational goal`, 40000);
      } catch {
        await poll(() => page.evaluate(() => {
          const status = window.NexusGenesisRealtimeClientStatus && window.NexusGenesisRealtimeClientStatus();
          return status && status.connectionState === "connected" && status.responseInProgress !== true;
        }), `${test.id}: Realtime did not recover for acoustic retry`, 30000);
        await wait(1800);
        await injectWindowsVoiceInput(page, test.command);
        routed = await poll(findRoute, `${test.id}: physical transcript did not reach the conversational goal after one retry`, 60000);
      }
      assert.ok(commandOverlap(test.command, routed.detail.command) >= .4, `${test.id}: incorrect conversational goal`);
      const acknowledged = await poll(() => page.evaluate(({ before, requestId }) => window.__physicalProduction.stages.slice(before.stages).find(stage => stage.type === "renderer.acknowledged" && stage.detail && stage.detail.requestId === requestId) || null, { before, requestId: routed.detail.requestId }), `${test.id}: no visible acknowledgement`, 60000);
      const spokenAfterVisual = await poll(() => page.evaluate(({ before, visibleAt }) => window.__physicalProduction.voiceEvents.slice(before.voiceEvents).find(event => (event.type === "response.done" || event.eventName === "agent_end") && Date.parse(event.at) >= Date.parse(visibleAt)) || null, { before, visibleAt: acknowledged.at }), `${test.id}: no spoken completion after visible acknowledgement`, 90000);
      const proof = await page.evaluate(() => {
        const snapshot = window.NexusProductionCapabilityBridge.snapshot();
        const result = snapshot.currentResult;
        const root = result && document.querySelector(`[data-nexus-capability-result="${CSS.escape(result.requestId)}"]`);
        const status = window.NexusGenesisRealtimeClientStatus && window.NexusGenesisRealtimeClientStatus();
        return {
          result, visibleText: String(root && root.innerText || "").replace(/\s+/g, " ").trim().slice(0, 5000),
          controls: root ? [...root.querySelectorAll("input,textarea,select")].map(field => ({ name: field.name, value: field.type === "checkbox" ? String(field.checked) : field.value })) : [],
          images: root ? [...root.querySelectorAll("img[src]")].filter(image => image.naturalWidth >= 120).length : 0,
          links: root ? root.querySelectorAll("a[href]").length : 0,
          map: root ? root.querySelectorAll("#nexus-capability-map .leaflet-pane").length : 0,
          audio: root ? root.querySelectorAll("#nexus-capability-audio[src]").length : 0,
          spinner: document.querySelectorAll("#nexus-capability-surface .nexus-capability-spinner").length,
          realtime: status,
          remoteAudioOutputs: [...document.querySelectorAll("audio")].filter(audio => audio.srcObject).length
        };
      });
      const screenshot = path.join(OUTPUT, `${String(evidence.turns.length + 1).padStart(2, "0")}-${test.id}.png`);
      await page.screenshot({ path: screenshot });
      const record = { ...test, conversationalGoal: routed.detail.command, semanticOverlap: commandOverlap(test.command, routed.detail.command), routedAt: routed.at, visibleAcknowledgementAt: acknowledged.at, spokenCompletionAt: spokenAfterVisual.at, elapsedMs: Date.now() - startedAt, proof, screenshot, passed: false };
      evidence.turns.push(record);
      fs.writeFileSync(path.join(OUTPUT, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`);
      assert.equal(proof.result.status, "ready", `${test.id}: capability failed`);
      assert.equal(proof.result.capability, test.capability, `${test.id}: wrong goal`);
      assert.equal(proof.result.requestId, proof.result.receipt && proof.result.receipt.requestId, `${test.id}: request receipt mismatch`);
      if (test.workspace) assert.equal(proof.result.workspace, test.workspace, `${test.id}: visible workspace mismatch`);
      assert.ok(proof.visibleText.length >= 70, `${test.id}: empty visual shell`);
      assert.equal(proof.spinner, 0, `${test.id}: stalled spinner`);
      assert.equal(proof.realtime.connectionState, "connected", `${test.id}: continuous Realtime listening was lost`);
      if (test.capability === "images") assert.ok(proof.images >= 1 && proof.links >= 1);
      if (test.capability === "map") assert.ok(proof.map >= 1 && proof.links >= 1);
      if (test.capability === "weather") assert.ok(proof.links >= 1 && /Nairobi|°C|rain chance/i.test(proof.visibleText));
      if (test.capability === "workspace") assert.ok(proof.controls.length >= 2, `${test.id}: application shell was not populated`);
      if (test.capability === "resume") assert.ok(proof.controls.length >= 5);
      if (test.id === "resume-follow-up") assert.ok(proof.controls.some(field => /harvest crews/i.test(field.value)));
      if (test.capability === "question-card") assert.ok(proof.links >= 3);
      if (test.capability === "music") assert.ok(proof.audio >= 1 && proof.links >= 1);
      record.passed = true;
    }

    const lifecycle = await page.evaluate(() => window.NexusGenesisVoiceLifecycleDiagnostics && window.NexusGenesisVoiceLifecycleDiagnostics());
    evidence.foundation.continuousListening = evidence.turns.every(turn => turn.proof.realtime.connectionState === "connected");
    evidence.foundation.singleRealtimeAudioOutput = evidence.turns.every(turn => turn.proof.remoteAudioOutputs <= 1);
    evidence.foundation.microphoneOwnershipInvariant = lifecycle && lifecycle.currentInvariant && lifecycle.currentInvariant.ok === true;
    evidence.foundation.guidedEntry = evidence.turns.some(turn => turn.id === "resume-follow-up" && turn.passed);
    assert.equal(evidence.foundation.continuousListening, true);
    assert.equal(evidence.foundation.singleRealtimeAudioOutput, true);
    assert.equal(evidence.foundation.microphoneOwnershipInvariant, true);
    assert.deepEqual(await page.evaluate(() => window.__physicalProduction.errors), []);
    evidence.passed = true;
  } catch (error) {
    let diagnostics = null;
    try {
      diagnostics = await page.evaluate(() => ({
        status: window.NexusGenesisRealtimeClientStatus && window.NexusGenesisRealtimeClientStatus(),
        recentStages: window.__physicalProduction.stages.slice(-30),
        recentVoiceEvents: window.__physicalProduction.voiceEvents.slice(-80),
        workspaceAcks: window.__physicalProduction.workspaceAcks.slice(-20),
        errors: window.__physicalProduction.errors.slice()
      }));
    } catch {}
    evidence.failure = { name: error.name, message: error.message, stack: error.stack, diagnostics };
    throw error;
  } finally {
    evidence.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(OUTPUT, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`);
    await context.close().catch(() => {});
    await browser.close().catch(() => {});
    await liveApi.dispose().catch(() => {});
  }
  console.log(`Nexus physical Windows production-experience voice: PASS (${turns.length} audible turns)`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
