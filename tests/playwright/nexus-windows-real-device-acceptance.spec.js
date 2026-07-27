const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = process.env.NEXUS_LIVE_BASE_URL || "https://agrinexus-platform.onrender.com";
const OUTPUT = path.resolve("output/nexus-windows-real-device");
const VIRTUAL_DEVICE = /virtual|vb-audio|cable input|cable output|stereo mix|voicemeeter|blackhole|loopback|fake/i;

const journeys = [
  ["agriculture", "Nexus, open Agriculture support for a maize crop issue in Kenya."],
  ["health", "Nexus, open Health and record blood pressure 140 over 90."],
  ["telehealth", "Nexus, open Telehealth Intake in Kenya."],
  ["mobile-clinic", "Nexus, open Mobile Clinic support in Kenya."],
  ["pharmacy", "Nexus, open Pharmacy support for medication questions in Kenya."],
  ["learning", "Nexus, open Learning and start a digital literacy course."],
  ["workforce", "Nexus, open Workforce and search for farming jobs in Kenya."],
  ["trade", "Nexus, open Marketplace and sell 50 bags of maize."],
  ["map", "Nexus, show me the best route from Nairobi to Nakuru."],
  ["media", "Nexus, open Music and Media."],
  ["reminders", "Nexus, open Reminders."],
  ["offline", "Nexus, open the Offline Queue."],
  ["live-knowledge", "Nexus, use the internet to research climate smart agriculture and show sources."],
  ["map", "Nexus, show me a map of Nairobi Kenya."],
  ["workforce", "Nexus, search for farming jobs in Kenya."],
  ["trade", "Nexus, sell 50 bags of maize."],
  ["health", "Nexus, record blood pressure 140 over 90."],
  ["agriculture", "Nexus, help with my maize crop in Kenya."],
  ["learning", "Nexus, open digital literacy learning."],
  ["telehealth", "Nexus, begin a telehealth intake."]
];

function speak(text) {
  const encoded = Buffer.from(text, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$text=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encoded}'))`,
    "$voice=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$voice.Volume=90",
    "$voice.Rate=-1",
    "$voice.Speak($text)",
    "$voice.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script], {
      windowsHide: false,
      stdio: ["ignore", "pipe", "pipe"]
    });
    let error = "";
    child.stderr.on("data", chunk => { error += chunk; });
    child.on("exit", code => code === 0 ? resolve() : reject(new Error(`Windows speech failed (${code}): ${error}`)));
  });
}

async function installObserver(page) {
  await page.addInitScript(() => {
    const evidence = { controllerCalls: [], acknowledgements: [], browserErrors: [] };
    window.__NEXUS_REAL_DEVICE_EVIDENCE__ = evidence;
    window.addEventListener("genesis.workspace.acknowledged", event => {
      evidence.acknowledgements.push({ at: Date.now(), ...event.detail });
    });
    window.addEventListener("error", event => evidence.browserErrors.push(String(event.message || "browser-error")));
    window.addEventListener("unhandledrejection", event => evidence.browserErrors.push(String(event.reason || "unhandled-rejection")));
    let controller;
    Object.defineProperty(window, "NexusBrowserActionController", {
      configurable: true,
      enumerable: true,
      get: () => controller,
      set(value) {
        controller = {
          actionFor: typeof value.actionFor === "function" ? value.actionFor.bind(value) : undefined,
          handleFinalUserTranscript(input, actionBuilder) {
            const result = value.handleFinalUserTranscript(input, actionBuilder);
            evidence.controllerCalls.push({
              at: Date.now(),
              transcript: String(input?.transcript || ""),
              handled: result?.handled === true,
              duplicate: result?.duplicate === true,
              workspace: String(result?.workspace || result?.action?.workspace || "")
            });
            return result;
          }
        };
      }
    });
  });
}

async function login(page) {
  await page.waitForFunction(() => typeof window.NexusGenesisRealtimeClientStatus === "function");
  await page.locator("#email").fill(process.env.NEXUS_PLAYWRIGHT_EMAIL || "user@agrinexus.org");
  await page.locator("#password").fill(process.env.NEXUS_PLAYWRIGHT_PASSWORD || "User2026!");
  await page.locator("#loginForm").evaluate(form => form.requestSubmit());
  await expect(page.locator("#loginForm")).toBeHidden();
}

test.use({
  baseURL: BASE_URL,
  headless: false,
  launchOptions: {
    channel: "chrome",
    args: ["--autoplay-policy=no-user-gesture-required"]
  }
});

test("physical Windows microphone certifies the protected production release", async ({ page, context }, testInfo) => {
  test.setTimeout(20 * 60 * 1000);
  fs.mkdirSync(OUTPUT, { recursive: true });
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  await installObserver(page);
  await page.goto("/?voiceDebug=1&voiceAcceptance=real-device", { waitUntil: "domcontentloaded" });
  await login(page);

  const deviceProof = await page.evaluate(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
    });
    const devices = await navigator.mediaDevices.enumerateDevices();
    const track = stream.getAudioTracks()[0];
    const settings = track.getSettings();
    const labels = devices.filter(item => item.kind === "audioinput" || item.kind === "audiooutput")
      .map(item => ({ kind: item.kind, label: item.label, deviceId: item.deviceId }));
    const audio = new AudioContext();
    const source = audio.createMediaStreamSource(stream);
    const analyser = audio.createAnalyser();
    analyser.fftSize = 2048;
    source.connect(analyser);
    window.__NEXUS_PHYSICAL_PROBE__ = { stream, audio, analyser };
    return {
      labels,
      track: { label: track.label, readyState: track.readyState, enabled: track.enabled, settings }
    };
  });

  expect(deviceProof.track.readyState).toBe("live");
  expect(deviceProof.track.enabled).toBe(true);
  expect(deviceProof.track.label).not.toMatch(VIRTUAL_DEVICE);
  expect(deviceProof.labels.some(item => item.kind === "audiooutput" && !VIRTUAL_DEVICE.test(item.label))).toBe(true);

  const energyProbe = page.evaluate(async () => {
    const { stream, audio, analyser } = window.__NEXUS_PHYSICAL_PROBE__;
    const samples = new Uint8Array(analyser.fftSize);
    let peak = 0;
    const end = Date.now() + 5000;
    while (Date.now() < end) {
      analyser.getByteTimeDomainData(samples);
      const level = Math.max(...samples.map(value => Math.abs(value - 128)));
      peak = Math.max(peak, level);
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    stream.getTracks().forEach(track => track.stop());
    await audio.close();
    delete window.__NEXUS_PHYSICAL_PROBE__;
    return peak;
  });
  await page.waitForTimeout(500);
  await speak("Nexus physical microphone calibration.");
  const energy = await energyProbe;
  expect(energy, "The physical microphone must capture audible acoustic energy from the Windows speaker").toBeGreaterThan(3);

  await page.locator("#nexusPermanentMicrophoneBtn").click();
  await expect.poll(() => page.evaluate(() => {
    const status = window.NexusGenesisRealtimeClientStatus?.() || {};
    return {
      activeRuntime: String(status.activeRuntime || ""),
      connectionState: String(status.connectionState || ""),
      liveMicrophoneTrack: status.liveMicrophoneTrack === true
    };
  }), { timeout: 45000 }).toEqual({
    activeRuntime: "realtime",
    connectionState: "connected",
    liveMicrophoneTrack: true
  });

  const turns = [];
  for (let index = 0; index < journeys.length; index += 1) {
    const [workspace, command] = journeys[index];
    const before = await page.evaluate(() => ({
      calls: window.__NEXUS_REAL_DEVICE_EVIDENCE__.controllerCalls.length,
      acks: window.__NEXUS_REAL_DEVICE_EVIDENCE__.acknowledgements.length
    }));
    await speak(command);
    await expect.poll(() => page.evaluate(({ before, workspace }) => {
      const evidence = window.__NEXUS_REAL_DEVICE_EVIDENCE__;
      const calls = evidence.controllerCalls.slice(before.calls);
      const acks = evidence.acknowledgements.slice(before.acks);
      const call = calls.find(item => item.handled && !item.duplicate && item.workspace === workspace);
      const ack = acks.find(item => item.workspace === workspace && item.visible && item.opened);
      const status = window.NexusGenesisRealtimeClientStatus?.() || {};
      return {
        transcriptReceived: Boolean(call?.transcript),
        acknowledged: Boolean(ack),
        microphoneActive: status.liveMicrophoneTrack === true,
        connected: status.connectionState === "connected"
      };
    }, { before, workspace }), {
      timeout: 60000,
      message: `Turn ${index + 1} must travel speaker → physical microphone → Realtime transcript → ${workspace} workspace`
    }).toEqual({
      transcriptReceived: true,
      acknowledged: true,
      microphoneActive: true,
      connected: true
    });
    const turn = await page.evaluate(({ before, workspace }) => {
      const evidence = window.__NEXUS_REAL_DEVICE_EVIDENCE__;
      return {
        workspace,
        transcript: evidence.controllerCalls.slice(before.calls).find(item => item.workspace === workspace)?.transcript || "",
        acknowledgement: evidence.acknowledgements.slice(before.acks).find(item => item.workspace === workspace) || null,
        status: window.NexusGenesisRealtimeClientStatus?.() || {}
      };
    }, { before, workspace });
    turns.push({ index: index + 1, command, ...turn });
  }

  const finalStatus = await page.evaluate(() => window.NexusGenesisRealtimeClientStatus?.() || {});
  const browserEvidence = await page.evaluate(() => window.__NEXUS_REAL_DEVICE_EVIDENCE__);
  const hash = value => crypto.createHash("sha256").update(String(value)).digest("hex");
  const report = {
    schema: "nexus.windows-real-device-acceptance.v1",
    outcome: "success",
    testedUrl: BASE_URL,
    commit: process.env.GITHUB_SHA || "local",
    protectedBaseline: process.env.NEXUS_PROTECTED_BASELINE || "0e3ce5b6",
    runtime: process.env.NEXUS_EXPECTED_RUNTIME || "nexus-behavior-502",
    physicalDevice: {
      labelSha256: hash(deviceProof.track.label),
      deviceIdSha256: hash(deviceProof.track.settings.deviceId || ""),
      sampleRate: deviceProof.track.settings.sampleRate,
      channelCount: deviceProof.track.settings.channelCount,
      acousticPeak: energy
    },
    turnCount: turns.length,
    turns,
    finalStatus,
    browserErrors: browserEvidence.browserErrors,
    recordedAt: new Date().toISOString()
  };
  fs.writeFileSync(path.join(OUTPUT, "acceptance-report.json"), `${JSON.stringify(report, null, 2)}\n`);
  await page.screenshot({ path: path.join(OUTPUT, "final-workspace.png"), fullPage: true });
  await testInfo.attach("real-device-acceptance", {
    body: Buffer.from(JSON.stringify(report, null, 2)),
    contentType: "application/json"
  });
  expect(turns).toHaveLength(20);
  expect(finalStatus.liveMicrophoneTrack).toBe(true);
  expect(finalStatus.connectionState).toBe("connected");
});
