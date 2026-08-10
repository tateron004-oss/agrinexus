const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = process.env.NEXUS_CLEAN_BASE_URL || "http://127.0.0.1:4317";
const OUTPUT = path.resolve("output/nexus-clean-windows-certification");
const commands = [
  ["agriculture", "Nexus, help with my maize crop in Kenya.", null],
  ["health", "Nexus, record my blood pressure 140 over 90."],
  ["telehealth", "Nexus, begin a telehealth intake."],
  ["mobile-clinic", "Nexus, find a mobile clinic in Kenya."],
  ["pharmacy", "Nexus, open pharmacy support."],
  ["learning", "Nexus, start a digital literacy course."],
  ["workforce", "Nexus, search for farming jobs in Kenya."],
  ["marketplace", "Nexus, sell 50 bags of maize."],
  ["maps", "Nexus, plan a route from Nairobi to Nakuru."],
  ["music", "Nexus, play Kenyan music."],
  ["reminders", "Nexus, remind me to take my medicine."],
  ["offline", "Nexus, show my offline queue."],
  ["live-knowledge", "Nexus, show today's weather in Nairobi, Kenya.", "weather"],
  ["maps", "Nexus, reset the map and show Mombasa, Kenya.", "map"],
  ["agriculture", "Nexus, show me pictures of possible maize diseases.", "agriculture-images"],
  ["workforce", "Nexus, help me create a résumé.", "resume"],
  ["live-knowledge", "Nexus, show me the websites and sources.", "evidence"],
  ["health", "Nexus, create a provider card for my doctor.", "provider-card"],
  ["live-knowledge", "Nexus, open the pilot evidence dashboard.", "pilot-dashboard"]
];

function pcmDataFromWave(wave) {
  if (wave.toString("ascii", 0, 4) !== "RIFF" || wave.toString("ascii", 8, 12) !== "WAVE") {
    throw new Error("Windows speech synthesis did not produce a PCM WAV file.");
  }
  let offset = 12;
  while (offset + 8 <= wave.length) {
    const chunkId = wave.toString("ascii", offset, offset + 4);
    const chunkLength = wave.readUInt32LE(offset + 4);
    const dataStart = offset + 8;
    if (chunkId === "data") return wave.subarray(dataStart, dataStart + chunkLength);
    offset = dataStart + chunkLength + (chunkLength % 2);
  }
  throw new Error("Windows speech synthesis WAV file has no data chunk.");
}

function synthesizePcm16(text) {
  const encoded = Buffer.from(text, "utf16le").toString("base64");
  const wavePath = path.join(OUTPUT, `stimulus-${Date.now()}-${Math.random().toString(36).slice(2)}.wav`);
  const encodedPath = Buffer.from(wavePath, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encoded}'))`,
    `$p=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedPath}'))`,
    "$f=[System.Speech.AudioFormat.SpeechAudioFormatInfo]::new(24000,[System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen,[System.Speech.AudioFormat.AudioChannel]::Mono)",
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.Volume=100",
    "$v.Rate=-2",
    "$v.SetOutputToWaveFile($p,$f)",
    "$v.Speak($t)",
    "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script]);
    let stderr = "";
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("exit", (code) => {
      if (code !== 0) return reject(new Error(stderr || `speech exited ${code}`));
      try {
        const pcm = pcmDataFromWave(fs.readFileSync(wavePath));
        fs.unlinkSync(wavePath);
        resolve(pcm.toString("base64"));
      } catch (error) {
        reject(error);
      }
    });
  });
}

async function speak(page, text) {
  const pcm16 = await synthesizePcm16(text);
  const injected = await page.evaluate((audio) => window.NexusPath1Certification?.injectPcm16?.(audio) === true, pcm16);
  if (!injected) throw new Error("Connected Realtime transport rejected the PCM16 certification stimulus.");
}

test.use({
  baseURL: BASE_URL,
  headless: false,
  launchOptions: { channel: "chrome", args: ["--autoplay-policy=no-user-gesture-required"] }
});

test("new Genesis build passes physical voice and every command", async ({ page, context }) => {
  test.setTimeout(25 * 60 * 1000);
  fs.mkdirSync(OUTPUT, { recursive: true });
  const driverEvidence = {
    startedAt: new Date().toISOString(),
    console: [],
    failedRequests: [],
    httpFailures: [],
    turns: [],
    failure: null
  };
  page.on("console", (message) => {
    driverEvidence.console.push({ type: message.type(), text: message.text() });
  });
  page.on("requestfailed", (request) => {
    driverEvidence.failedRequests.push({
      method: request.method(),
      url: request.url(),
      failure: request.failure()?.errorText || "unknown"
    });
  });
  page.on("response", (response) => {
    if (response.status() >= 400) {
      driverEvidence.httpFailures.push({
        method: response.request().method(),
        url: response.url(),
        status: response.status()
      });
    }
  });
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  await page.addInitScript(() => {
    localStorage.setItem("agrinexusLoginLanguage", "en");
    window.__cleanEvidence = { receipts: [], errors: [], speechSources: [], audioViolations: [] };
    window.__NEXUS_VOICE_ACCEPTANCE_EVENT_SINK__ = (event) => {
      window.__cleanEvidence.receipts.push({
        schema: "nexus.path1.certification.receipt.v1",
        type: "realtime.acceptance-event",
        detail: { ...(event || {}) },
        at: new Date().toISOString()
      });
    };
    const recordSpeechSource = (source, detail = {}) => {
      window.__cleanEvidence.speechSources.push({ source, detail, at: Date.now() });
      if (source === "browser-speech-synthesis") {
        window.__cleanEvidence.audioViolations.push({
          reason: "browser-speech-started-during-realtime-certification",
          source,
          detail,
          at: Date.now()
        });
      }
    };
    if (window.speechSynthesis) {
      const originalSpeak = window.speechSynthesis.speak.bind(window.speechSynthesis);
      window.speechSynthesis.speak = (utterance) => {
        recordSpeechSource("browser-speech-synthesis", { text: String(utterance?.text || "") });
        return originalSpeak(utterance);
      };
    }
    window.addEventListener("nexus.path1.certification.receipt", (event) => window.__cleanEvidence.receipts.push(event.detail));
    window.addEventListener("error", (event) => window.__cleanEvidence.errors.push(String(event.message)));
    window.addEventListener("unhandledrejection", (event) => window.__cleanEvidence.errors.push(String(event.reason)));
  });
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() =>
      !("serviceWorker" in navigator) || Boolean(navigator.serviceWorker.controller)
    , null, { timeout: 30000 });
    await page.waitForTimeout(2000);
    const standardUserEntry = page.getByRole("button", { name: "Start as User", exact: true });
    const enterStandardUser = async () => {
      const submitEntry = async () => {
        await page.locator("#loginLanguageSelect").selectOption("en");
        await page.getByRole("textbox", { name: "Your name" }).fill("Ron");
        await standardUserEntry.click();
      };
      if (await standardUserEntry.isVisible().catch(() => false)) await submitEntry();
      await expect(page.locator("#appView"), "Standard User entry must reveal the production application").toBeVisible({ timeout: 15000 });
      await page.waitForTimeout(3000);
      if (await standardUserEntry.isVisible().catch(() => false)) await submitEntry();
      await expect(page.locator("#appView"), "Application must remain visible after one bounded Standard User re-entry").toBeVisible({ timeout: 15000 });
      await expect(page.locator("#loginView"), "Sign-in must close after one bounded Standard User re-entry").toBeHidden({ timeout: 15000 });
    };
    await enterStandardUser();
    await page.waitForTimeout(3000);
    if (await standardUserEntry.isVisible().catch(() => false)) {
      await enterStandardUser();
    }
    await expect(page.locator("html"), "English physical commands require the English Realtime profile").toHaveAttribute("lang", "en");
    const primaryVoiceEntry = page.locator('[data-nexus-permanent-microphone-control="true"]');
    await expect(page.locator("#appView"), "Application must remain visible before microphone activation").toBeVisible({ timeout: 15000 });
    await expect(page.locator("#loginView"), "Sign-in must remain closed before microphone activation").toBeHidden({ timeout: 15000 });
    await expect(primaryVoiceEntry, "Primary microphone button must be visible after Standard User entry").toBeVisible({ timeout: 15000 });
    await primaryVoiceEntry.click();
    await page.waitForFunction(() => {
      const entry = Array.from(document.querySelectorAll("button"))
        .find((button) => button.textContent?.trim() === "Start as User");
      const signInReturned = Boolean(entry && entry.getClientRects().length);
      const microphone = document.querySelector('[data-nexus-permanent-microphone-control="true"]');
      const listening = microphone?.getAttribute("data-nexus-permanent-microphone-state") === "connected"
        && /Realtime voice is connected and listening/i.test(
          document.getElementById("nexusPermanentMicrophoneStatus")?.textContent || ""
        );
      const retryAvailable = Boolean(
        microphone
        && microphone.getClientRects().length
        && /voice connection unavailable.*retry/i.test(microphone.textContent || "")
      );
      return signInReturned || listening || retryAvailable;
    }, null, { timeout: 60000 });
    const signInReturned = await standardUserEntry.isVisible().catch(() => false);
    const retryAvailable = await primaryVoiceEntry
      .filter({ hasText: /voice connection unavailable.*retry/i })
      .isVisible()
      .catch(() => false);
    if (signInReturned || retryAvailable) {
      if (signInReturned) await enterStandardUser();
      await expect(page.locator("#appView"), "Application must be restored before the single microphone retry").toBeVisible({ timeout: 15000 });
      await expect(page.locator("#loginView"), "Sign-in must close before bounded microphone recovery").toBeHidden({ timeout: 15000 });
      await expect(primaryVoiceEntry, "Permanent microphone must be restored before the single retry").toBeVisible({ timeout: 15000 });
      if (retryAvailable) {
        await page.waitForFunction(() => {
          const microphone = document.querySelector('[data-nexus-permanent-microphone-control="true"]');
          const retryReady = Boolean(
            microphone
            && microphone.getClientRects().length
            && /voice connection unavailable.*retry/i.test(microphone.textContent || "")
          );
          const runtimeState = window.NexusPath1Certification?.snapshot?.().state || null;
          const connected = microphone?.getAttribute("data-nexus-permanent-microphone-state") === "connected"
            && runtimeState === "connected";
          if (connected) return true;
          if (!retryReady || runtimeState === "connecting") {
            window.__nexusPhysicalReconnectStableAt = 0;
            return false;
          }
          window.__nexusPhysicalReconnectStableAt ||= Date.now();
          return Date.now() - window.__nexusPhysicalReconnectStableAt >= 3000;
        }, null, { timeout: 60000 });
        const internallyConnected = await page.evaluate(() => {
          const microphone = document.querySelector('[data-nexus-permanent-microphone-control="true"]');
          return microphone?.getAttribute("data-nexus-permanent-microphone-state") === "connected"
            && window.NexusPath1Certification?.snapshot?.().state === "connected";
        }).catch(() => false);
        if (!internallyConnected) await primaryVoiceEntry.click();
      } else {
        await primaryVoiceEntry.click();
      }
    }
    await expect(page.locator("#appView"), "Application must remain visible after microphone activation").toBeVisible({ timeout: 15000 });
    await expect(primaryVoiceEntry, "Permanent microphone must remain visible after activation").toBeVisible({ timeout: 15000 });
    await expect(primaryVoiceEntry, "Permanent microphone must report the connected state").toHaveAttribute("data-nexus-permanent-microphone-state", "connected", { timeout: 60000 });
    await expect(page.locator("#nexusPermanentMicrophoneStatus"), "Permanent microphone status must confirm Realtime listening").toContainText(/Realtime voice is connected and listening/i, { timeout: 60000 });
    await expect.poll(() => page.evaluate(() => window.NexusPath1Certification?.snapshot?.().state), {
      timeout: 60000
    }).toBe("connected");
    await page.waitForTimeout(1500);
    const calibrationBefore = await page.evaluate(() => window.__cleanEvidence.receipts.length);
    await speak(page, "Nexus, say physical voice calibration complete.");
    await expect.poll(() => page.evaluate((before) => {
      const receipts = window.__cleanEvidence.receipts;
      return receipts.slice(before).some((item) => item.type === "audio.remote-attached");
    }, calibrationBefore), { timeout: 60000 }).toBe(true);
    await expect.poll(() => page.evaluate((before) => {
      const receipts = window.__cleanEvidence.receipts;
      return receipts.slice(before).some((item) =>
        item.type === "conversation.return-to-listening"
        && ["output-audio-buffer-stopped", "output-audio-buffer-cleared"].includes(item.detail.eventType)
      );
    }, calibrationBefore), { timeout: 60000 }).toBe(true);

    for (const [workspace, command, visual] of commands) {
      const nativeWorkspace = { maps: "map", marketplace: "trade", music: "media" }[workspace] || workspace;
      const before = await page.evaluate(() => window.__cleanEvidence.receipts.length);
      await page.waitForTimeout(500);
      await speak(page, command);
      await expect.poll(() => page.evaluate(({ before, nativeWorkspace }) => {
        return window.__cleanEvidence.receipts.slice(before)
          .some((item) => item.type === "workspace.visible" && item.detail.workspace === nativeWorkspace && item.detail.verified === true);
      }, { before, nativeWorkspace }), { timeout: 60000 }).toBe(true);
      if (nativeWorkspace === "map") {
        await expect(page.locator("#userMapCanvas.leaflet-container")).toBeVisible();
      } else {
        await expect(page.locator('#nexus-workspace[data-nexus-workspace="true"]')).toBeVisible();
      }
      await expect.poll(() => page.evaluate((expected) => document.body.dataset.genesisWorkspace === expected, nativeWorkspace)).toBe(true);
      if (visual === "map") {
        await expect(page.locator("#userMapCanvas.leaflet-container")).toBeVisible();
        await expect.poll(() => page.evaluate(() => document.body.dataset.genesisMapLocation)).toBe("Mombasa");
      } else if (visual === "evidence") {
        await expect(page.locator('#nexus-workspace[data-nexus-workspace="true"] a[href^="http"]').first()).toBeVisible();
      } else if (visual) {
        await expect(page.locator('#nexus-workspace[data-nexus-workspace="true"]')).not.toBeEmpty();
      }
      await expect.poll(() => page.evaluate(({ before }) => {
        return window.__cleanEvidence.receipts.slice(before)
          .some((item) => item.type === "conversation.return-to-listening"
            && ["output-audio-buffer-stopped", "output-audio-buffer-cleared"].includes(item.detail.eventType));
      }, { before }), { timeout: 60000 }).toBe(true);
      const turnAudioViolations = await page.evaluate(({ before }) => {
        const receipts = window.__cleanEvidence.receipts.slice(before);
        return [
          ...window.__cleanEvidence.audioViolations,
          ...receipts.filter((item) =>
            item.type === "audio.exclusive-owner-violation" ||
            item.type === "audio.exclusive-response-blocked"
          )
        ];
      }, { before });
      expect(turnAudioViolations, `More than one speech source or response activated for: ${command}`).toEqual([]);
      await expect.poll(() => page.evaluate(() => window.NexusPath1Certification?.snapshot?.().state)).toBe("connected");
      driverEvidence.turns.push({ workspace, command, visual, passed: true });
    }
    const browserErrors = await page.evaluate(() => window.__cleanEvidence.errors);
    expect(browserErrors).toEqual([]);
    const audioViolations = await page.evaluate(() => window.__cleanEvidence.audioViolations);
    expect(audioViolations).toEqual([]);
    expect(driverEvidence.turns).toHaveLength(commands.length);
  } catch (error) {
    driverEvidence.failure = {
      name: error.name,
      message: error.message,
      stack: error.stack
    };
    throw error;
  } finally {
    driverEvidence.finishedAt = new Date().toISOString();
    driverEvidence.page = await page.evaluate(() => ({
      url: location.href,
      status: document.getElementById("nexus-status")?.textContent || null,
      microphonePermission: null,
      snapshot: window.NexusPath1Certification?.snapshot?.() || null,
      cleanEvidence: window.__cleanEvidence || null,
      browserErrors: window.__cleanEvidence?.errors || []
    })).catch((error) => ({ unavailable: error.message }));
    if (driverEvidence.page && !driverEvidence.page.unavailable) {
      driverEvidence.page.microphonePermission = await page.evaluate(async () => {
        try {
          return (await navigator.permissions.query({ name: "microphone" })).state;
        } catch (error) {
          return `unavailable:${error.message}`;
        }
      });
    }
    fs.writeFileSync(
      path.join(OUTPUT, "certification.json"),
      `${JSON.stringify(driverEvidence, null, 2)}\n`
    );
    await page.screenshot({
      path: path.join(OUTPUT, driverEvidence.failure ? "failure.png" : "final.png"),
      fullPage: true
    }).catch(() => {});
  }
});
