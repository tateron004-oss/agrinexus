const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = process.env.NEXUS_LIVE_BASE_URL || "https://nexus-genesis-certified.onrender.com";
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
  // Exercise the same trusted click path as an end user. Programmatic
  // requestSubmit() does not activate production's login transition reliably.
  const [loginResponse] = await Promise.all([
    page.waitForResponse(response => {
      const url = new URL(response.url());
      return url.pathname === "/api/login" && response.request().method() === "POST";
    }),
    page.getByRole("button", { name: "Enter platform", exact: true }).click()
  ]);
  const loginPayload = await loginResponse.json();
  expect(loginResponse.status()).toBe(200);
  expect({
    id: String(loginPayload?.user?.id || ""),
    email: String(loginPayload?.user?.email || "")
  }).toEqual({
    id: "u_standard",
    email: "user@agrinexus.org"
  });
  // Login is an in-page render transition, not a navigation. Prove both the
  // visible shell and both authentication cookies before opening any media stream.
  await expect(page.locator("#loginView")).toBeHidden({ timeout: 30000 });
  await expect(page.locator("#appView")).toBeVisible({ timeout: 30000 });
  const authCookieNames = (await page.context().cookies(BASE_URL)).map(cookie => cookie.name);
  expect(authCookieNames).toContain("agrinexus_sid");
  expect(authCookieNames).toContain("agrinexus_auth");
  // Require the authenticated application shell before opening any media stream.
  await expect(
    page.locator("#nexusPermanentMicrophoneBtn"),
    "Production login must render the authenticated Nexus application"
  ).toBeVisible({ timeout: 30000 });
  await expect(page.locator("#nexusPermanentMicrophoneBtn")).toBeEnabled();
  await page.waitForFunction(() => document.readyState === "complete"
    && typeof window.NexusGenesisRealtimeClientStatus === "function");
}

async function realtimeStatus(page) {
  return page.evaluate(() => {
    const status = window.NexusGenesisRealtimeClientStatus?.() || {};
    return {
      activeRuntime: String(status.activeRuntime || ""),
      connectionState: String(status.connectionState || ""),
      liveMicrophoneTrack: status.liveMicrophoneTrack === true
    };
  });
}

async function physicalVoiceFailureEvidence(page, browserConsole = []) {
  return page.evaluate(async consoleEntries => {
    let permissionState = "unsupported";
    try {
      permissionState = String((await navigator.permissions.query({ name: "microphone" })).state || "unknown");
    } catch (error) {
      permissionState = `query-failed:${error?.name || "Error"}`;
    }
    const button = document.querySelector("#nexusPermanentMicrophoneBtn");
    const status = document.querySelector("#nexusPermanentMicrophoneStatus");
    const output = document.querySelector("#globalVoiceOutputStatus");
    return {
      url: location.href,
      title: document.title,
      loginVisible: document.querySelector("#loginView")?.hidden === false,
      appVisible: document.querySelector("#appView")?.hidden === false,
      permissionState,
      button: {
        text: String(button?.textContent || "").trim(),
        disabled: Boolean(button?.disabled),
        state: String(button?.dataset?.nexusPermanentMicrophoneState || "")
      },
      visibleStatus: String(status?.textContent || "").trim(),
      outputStatus: String(output?.textContent || "").trim(),
      realtimeStatus: window.NexusGenesisRealtimeClientStatus?.() || {},
      lastRealtimeStatus: window.NexusGenesisRealtimeLastClientStatus || {},
      lifecycle: window.NexusGenesisVoiceLifecycleDiagnostics?.() || {},
      audioPipeline: window.nexusVoiceAudioPipeline?.snapshot?.() || {},
      browserConsole: consoleEntries
    };
  }, browserConsole);
}

async function connectRealtime(page, browserConsole = []) {
  const microphone = page.locator("#nexusPermanentMicrophoneBtn");
  let lastStatus;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    await microphone.click();
    try {
      await expect.poll(async () => {
        lastStatus = await realtimeStatus(page);
        return lastStatus;
      }, {
        timeout: 45000,
        message: `Physical microphone must establish OpenAI Realtime (attempt ${attempt})`
      }).toEqual({
        activeRuntime: "realtime",
        connectionState: "connected",
        liveMicrophoneTrack: true
      });
      return;
    } catch (error) {
      if (attempt === 3) {
        const evidence = await physicalVoiceFailureEvidence(page, browserConsole);
        fs.writeFileSync(
          path.join(OUTPUT, "microphone-startup-failure.json"),
          `${JSON.stringify(evidence, null, 2)}\n`
        );
        await page.screenshot({ path: path.join(OUTPUT, "microphone-startup-failure.png"), fullPage: true });
        throw new Error(
          `${error.message}\nLast Realtime status: ${JSON.stringify(lastStatus)}`
          + `\nPhysical voice failure evidence: ${JSON.stringify(evidence)}`
        );
      }
      await page.waitForTimeout(1000);
    }
  }
}

test.use({
  baseURL: BASE_URL,
  headless: false,
  // The self-hosted gate launches a disposable Chrome profile on every run.
  // Block first-install service-worker controller changes from reloading the
  // authenticated page while Nexus is acquiring the physical microphone.
  serviceWorkers: "block",
  launchOptions: {
    channel: "chrome",
    args: ["--autoplay-policy=no-user-gesture-required"]
  }
});

test("physical Windows microphone certifies the protected production release", async ({ page, context }, testInfo) => {
  test.setTimeout(20 * 60 * 1000);
  fs.mkdirSync(OUTPUT, { recursive: true });
  const browserConsole = [];
  page.on("console", message => {
    const text = String(message.text() || "");
    if (/\b(Nexus|microphone|media|realtime|permission|webrtc)\b/i.test(text)) {
      browserConsole.push({ type: message.type(), text: text.slice(0, 1000) });
      while (browserConsole.length > 200) browserConsole.shift();
    }
  });
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  await installObserver(page);
  await page.goto("/?voiceDebug=1&voiceAcceptance=real-device", { waitUntil: "domcontentloaded" });
  await login(page);

  // Preserve the production sequence that was proven with the real browser:
  // login -> Nexus microphone click -> live Realtime track -> spoken turn.
  // Do not open and stop a second probe stream before Nexus acquires the device.
  await connectRealtime(page, browserConsole);

  const deviceProof = await page.evaluate(async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const labels = devices.filter(item => item.kind === "audioinput" || item.kind === "audiooutput")
      .map(item => ({ kind: item.kind, label: item.label, deviceId: item.deviceId }));
    return {
      labels,
      status: window.NexusGenesisRealtimeClientStatus?.() || {}
    };
  });

  const physicalInputs = deviceProof.labels.filter(item => item.kind === "audioinput" && !VIRTUAL_DEVICE.test(item.label));
  const physicalOutputs = deviceProof.labels.filter(item => item.kind === "audiooutput" && !VIRTUAL_DEVICE.test(item.label));
  expect(physicalInputs.length, "Chrome must expose a physical microphone after Nexus connects").toBeGreaterThan(0);
  expect(physicalOutputs.length, "Chrome must expose a physical speaker after Nexus connects").toBeGreaterThan(0);
  expect(deviceProof.status.liveMicrophoneTrack).toBe(true);
  expect(deviceProof.status.connectionState).toBe("connected");
  expect(deviceProof.labels.some(item => item.kind === "audiooutput" && !VIRTUAL_DEVICE.test(item.label))).toBe(true);

  const calibrationStart = await page.evaluate(() => window.__NEXUS_REAL_DEVICE_EVIDENCE__.controllerCalls.length);
  await speak("Nexus physical microphone calibration.");
  await expect.poll(() => page.evaluate(start => {
    const calls = window.__NEXUS_REAL_DEVICE_EVIDENCE__.controllerCalls.slice(start);
    const status = window.NexusGenesisRealtimeClientStatus?.() || {};
    return {
      transcriptReceived: calls.some(item => /physical microphone calibration/i.test(item.transcript)),
      microphoneActive: status.liveMicrophoneTrack === true,
      connected: status.connectionState === "connected"
    };
  }, calibrationStart), {
    timeout: 60000,
    message: "The speaker calibration phrase must travel through the physical microphone into the live Realtime session"
  }).toEqual({
    transcriptReceived: true,
    microphoneActive: true,
    connected: true
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
      inputCount: physicalInputs.length,
      outputCount: physicalOutputs.length,
      inputLabelSha256: physicalInputs.map(item => hash(item.label)),
      inputDeviceIdSha256: physicalInputs.map(item => hash(item.deviceId || "")),
      outputLabelSha256: physicalOutputs.map(item => hash(item.label)),
      outputDeviceIdSha256: physicalOutputs.map(item => hash(item.deviceId || "")),
      calibrationTranscriptReceived: true
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
