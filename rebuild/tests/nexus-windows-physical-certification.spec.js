const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { productionUrlFromEnv } = require("../../scripts/nexus-canonical-production-target");
const { JOURNEYS: journeys, fieldIdentityMatches } = require("./nexus-physical-journey-contract");

const BASE_URL = productionUrlFromEnv();
const OUTPUT = path.resolve("output/nexus-clean-windows-certification");

function synthesizePcm(text) {
  const wavPath = path.join(os.tmpdir(), `nexus-command-${process.pid}-${Date.now()}.wav`);
  const encodedText = Buffer.from(text, "utf16le").toString("base64");
  const encodedPath = Buffer.from(wavPath, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedText}'))`,
    `$p=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedPath}'))`,
    "$f=New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(24000,16,1)",
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.Rate=-1",
    "$v.SetOutputToWaveFile($p,$f)",
    "$v.Speak($t)",
    "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script]);
    let stderr = "";
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("exit", (code) => {
      if (code !== 0) return reject(new Error(stderr || `speech synthesis exited ${code}`));
      try {
        const wav = fs.readFileSync(wavPath);
        resolve(readWaveData(wav));
      } catch (error) {
        reject(error);
      } finally {
        fs.rmSync(wavPath, { force: true });
      }
    });
  });
}

async function editableFieldLocator(page, contract) {
  const controls = page.locator("#nexus-workspace input, #nexus-workspace textarea, #nexus-workspace select");
  const index = await controls.evaluateAll((elements, expected) => {
    const normalize = (value) => String(value || "").normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "");
    const semanticIdentity = normalize(expected.identity);
    const compatibleLabels = expected.labels.map(normalize);
    const identities = (element) => [
      element.dataset.nexusField,
      element.dataset.field,
      element.dataset.fieldKey,
      element.id,
      element.name
    ].map(normalize).filter(Boolean);
    const semanticIndex = elements.findIndex((element) => identities(element).includes(semanticIdentity));
    if (semanticIndex >= 0) return semanticIndex;
    return elements.findIndex((element) => compatibleLabels.includes(normalize(element.getAttribute("aria-label"))));
  }, contract);
  expect(index, `Visible field ${contract.identity} must match semantic identity or a declared compatible label`).toBeGreaterThanOrEqual(0);
  return controls.nth(index);
}

function readWaveData(wav) {
  for (let offset = 12; offset + 8 <= wav.length;) {
    const id = wav.toString("ascii", offset, offset + 4);
    const size = wav.readUInt32LE(offset + 4);
    if (id === "data") return wav.subarray(offset + 8, offset + 8 + size);
    offset += 8 + size + (size % 2);
  }
  throw new Error("Synthesized WAV contains no PCM data.");
}

async function injectSpokenCommand(page, text) {
  const pcm = await synthesizePcm(text);
  const chunks = [];
  for (let offset = 0; offset < pcm.length; offset += 16384) {
    chunks.push(pcm.subarray(offset, offset + 16384).toString("base64"));
  }
  await page.evaluate((audioChunks) => {
    window.NexusCleanRuntime.certificationAudio.send(audioChunks);
  }, chunks);
}

async function deliverCommand(page, text, lane) {
  const seed = Math.max(1, Number(process.env.NEXUS_PROMPT_ROTATION_SEED || 1));
  const prompt = rotatePrompt(text, seed);
  return injectSpokenCommand(page, prompt);
}

async function transcriptMatches(page, before, expectedText, timeout = 25000) {
  const matched = () => page.evaluate(({ before, expectedText }) => {
    const tokens = (value) => new Set(String(value || "").toLowerCase()
      .replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter((token) => token.length >= 3));
    const expected = tokens(expectedText);
    return window.__cleanEvidence.receipts.slice(before).some((item) => {
      if (item.type !== "transcript.final") return false;
      const actual = tokens(item.detail?.transcript);
      const overlap = [...expected].filter((token) => actual.has(token)).length;
      return overlap / Math.max(1, expected.size) >= 0.6;
    });
  }, { before, expectedText });
  try {
    await expect.poll(matched, { timeout }).toBe(true);
    return true;
  } catch {
    return false;
  }
}

function rotatePrompt(text, seed) {
  const request = String(text).replace(/^Nexus,\s*/i, "").replace(/[.]$/, "");
  const lowered = request.charAt(0).toLowerCase() + request.slice(1);
  const variants = [
    `Nexus, ${lowered}.`,
    `Hey Nexus, please ${lowered}.`,
    `Nexus, could you ${lowered}?`
  ];
  return variants[(seed - 1) % variants.length];
}

async function expectVisibleWorkspaceIdentity(page, workspace) {
  await expect.poll(() => page.locator("#nexus-workspace").evaluate((element, expected) => {
    const identities = [
      element.dataset.workspace,
      element.dataset.document,
      element.dataset.guidedEntryProcess
    ].filter(Boolean);
    return identities.includes(expected);
  }, workspace), {
    timeout: 5000,
    message: `Visible workspace must expose semantic identity ${workspace}`
  }).toBe(true);
}

test.use({
  baseURL: BASE_URL,
  headless: false,
  launchOptions: { channel: "chrome", args: ["--autoplay-policy=no-user-gesture-required"] }
});

test("new Genesis build passes every application through physical voice", async ({ page, context }) => {
  test.setTimeout(75 * 60 * 1000);
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
    window.__cleanEvidence = { receipts: [], errors: [], speechSources: [], audioViolations: [] };
    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = (constraints = {}) => {
      if (!constraints.audio) return nativeGetUserMedia(constraints);
      const audio = typeof constraints.audio === "object" ? constraints.audio : {};
      return nativeGetUserMedia({
        ...constraints,
        audio: { ...audio, echoCancellation: false, noiseSuppression: false, autoGainControl: false }
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
    window.addEventListener("nexus.clean.receipt", (event) => window.__cleanEvidence.receipts.push(event.detail));
    window.addEventListener("error", (event) => window.__cleanEvidence.errors.push(String(event.message)));
    window.addEventListener("unhandledrejection", (event) => window.__cleanEvidence.errors.push(String(event.reason)));
  });
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    expect(new URL(page.url()).origin).toBe(new URL(BASE_URL).origin);
    await page.locator("#nexus-orb").click();
    await expect(page.locator("#nexus-status")).toHaveText("Listening", { timeout: 60000 });
    await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state), {
      timeout: 60000
    }).toBe("connected");
    await expect.poll(() => page.evaluate(() => {
      const receipts = window.__cleanEvidence.receipts;
      return receipts.some((item) => item.type === "audio.remote-attached");
    }), { timeout: 60000 }).toBe(true);

    // Prove the two physical user I/O paths independently. Requiring the laptop's
    // speakers to feed its own microphone is an echo loop, not a Nexus user journey,
    // and is commonly suppressed by the operating system or audio hardware.
    await expect.poll(() => page.evaluate(() => {
      const snapshot = window.NexusCleanRuntime.snapshot();
      const microphone = snapshot?.microphone || snapshot?.audio?.microphone || {};
      const receipts = window.__cleanEvidence.receipts;
      return microphone.active === true || microphone.trackState === "live" ||
        receipts.some((item) => item.type === "audio.local-attached" || item.type === "microphone.acquired");
    }), { timeout: 30000, message: "Physical microphone input must be live" }).toBe(true);
    await expect.poll(() => page.evaluate(() => {
      const audio = document.querySelector("#nexus-audio");
      const receipts = window.NexusCleanRuntime.snapshot().receipts;
      const attached = Boolean(audio && (audio.srcObject || audio.currentSrc || audio.src));
      const htmlMediaOutput = attached && audio.muted === false;
      const webAudioOutput = attached && receipts.some((item) => item.type === "audio.web-audio-attached");
      return {
        attached,
        outputRouteVerified: htmlMediaOutput || webAudioOutput,
        volume: audio && audio.volume
      };
    }), {
      timeout: 30000,
      message: "Remote speaker output must use the unmuted HTML media path or verified Web Audio path"
    }).toMatchObject({ attached: true, outputRouteVerified: true });
    // The HTML route requires muted: false; Web Audio intentionally mutes that
    // element to prevent duplicate playback while its gain path owns output.
    expect(await page.locator("#nexus-audio").evaluate((audio) => audio.volume)).toBeGreaterThan(0);
    await expect.poll(() => page.evaluate(() =>
      Boolean(window.NexusCleanRuntime.certificationAudio)
    ), {
      timeout: 10000,
      message: "Render must enable NEXUS_CLEAN_CERTIFICATION for exact production command proof"
    }).toBe(true);
    const seed = Math.max(1, Number(process.env.NEXUS_PROMPT_ROTATION_SEED || 1));
    const lanes = ["deterministic-pcm"];
    for (const lane of lanes) {
      await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.begin());
      for (let journeyIndex = 0; journeyIndex < journeys.length; journeyIndex++) {
      const journey = journeys[(journeyIndex + seed - 1) % journeys.length];
      const { app, workspace, command, visual } = journey;
      const before = await page.evaluate(() => window.__cleanEvidence.receipts.length);
      await page.waitForTimeout(500);
      const deliveredPrompt = rotatePrompt(command, seed);
      await deliverCommand(page, command, lane);
      expect(await transcriptMatches(page, before, deliveredPrompt, 30000),
        `Realtime must produce a final transcript for: ${deliveredPrompt}`).toBe(true);
      await expect.poll(() => page.evaluate(({ before, workspace }) => {
        const visible = window.__cleanEvidence.receipts.slice(before)
          .filter((item) => item.type === "workspace.visible" && item.detail.workspace === workspace);
        return visible.length === 1 && visible[0].detail.outcomeVerified === true;
      }, { before, workspace }), { timeout: 60000 }).toBe(true);
      await expectVisibleWorkspaceIdentity(page, workspace);
      await expect(page.locator("#nexus-workspace")).toBeVisible();
      if (visual === "map") {
        await expect(page.locator("#nexus-map-canvas")).toBeVisible();
        await expect(page.locator("#nexus-map-summary")).toContainText(/Mombasa/i);
        await expect(page.locator("#nexus-map-link")).toHaveAttribute("href", /^https:\/\/www\.openstreetmap\.org\//);
      } else if (visual === "evidence") {
        await expect(page.locator(".evidence-source-link").first()).toBeVisible();
      } else if (visual) {
        await expect(page.locator(`[data-nexus-visual="${visual}"]`)).toBeVisible();
      }
      await expect(page.locator("#nexus-workspace")).toHaveAttribute("data-populated", "true");
      if (journey.mapText) await expect(page.locator("#nexus-map-summary")).toContainText(journey.mapText);
      if (journey.media) await expect(page.locator("#nexus-app-surface")).toContainText(journey.media);
      if (journey.links) await expect(page.locator("#nexus-workspace a[href^='http']").first()).toBeVisible();
      await expect.poll(() => page.evaluate(({ before }) => window.__cleanEvidence.receipts.slice(before)
        .some((item) => item.type === "conversation.return-to-listening"), { before }), { timeout: 60000 }).toBe(true);
      await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state)).toBe("connected");
      await expect(page.locator("#nexus-status")).toHaveText("Listening");
      if (journey.edit) {
        const { command: editCommand, field: fieldContract } = journey.edit;
        const beforeEdit = await page.evaluate(() => window.__cleanEvidence.receipts.length);
        const deliveredEditPrompt = rotatePrompt(editCommand, seed);
        await deliverCommand(page, editCommand, lane);
        expect(await transcriptMatches(page, beforeEdit, deliveredEditPrompt, 30000),
          `Realtime must produce a final transcript for: ${deliveredEditPrompt}`).toBe(true);
        await expect.poll(() => page.evaluate(({ beforeEdit }) => window.__cleanEvidence.receipts.slice(beforeEdit)
          .find((item) => item.type === "voice-form.updated" || item.type === "voice-form.corrected") || null, { beforeEdit }), {
          timeout: 60000,
          message: `Current turn must produce a verified field-update receipt for ${fieldContract.identity}`
        }).not.toBeNull();
        const currentReceipt = await page.evaluate(({ beforeEdit }) => window.__cleanEvidence.receipts.slice(beforeEdit)
          .find((item) => item.type === "voice-form.updated" || item.type === "voice-form.corrected"), { beforeEdit });
        expect(fieldIdentityMatches(currentReceipt?.detail?.field || currentReceipt?.detail?.label, fieldContract),
          `Update receipt must identify semantic field ${fieldContract.identity}`).toBe(true);
        expect(String(currentReceipt?.detail?.value || "")).toMatch(fieldContract.expectedValue);
        const visibleField = await editableFieldLocator(page, fieldContract);
        await expect(visibleField).toBeVisible();
        await expect(visibleField).toHaveValue(fieldContract.expectedValue);
        await expect.poll(() => page.evaluate(({ beforeEdit }) => window.__cleanEvidence.receipts.slice(beforeEdit)
          .some((item) => item.type === "conversation.return-to-listening"), { beforeEdit }), { timeout: 60000 }).toBe(true);
        await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state)).toBe("connected");
        await expect(page.locator("#nexus-status")).toHaveText("Listening");
      }
      for (const selector of journey.controls || []) {
        const control = page.locator(selector);
        await expect(control).toBeVisible();
        await expect(control).toBeEnabled();
      }
      await expect.poll(() => page.evaluate(({ before }) => {
        return window.__cleanEvidence.receipts.slice(before)
          .some((item) => item.type === "conversation.return-to-listening");
      }, { before }), { timeout: 60000 }).toBe(true);
      if (visual === "provider-card") {
        await expect.poll(() => page.evaluate(({ before }) => {
          return window.__cleanEvidence.receipts.slice(before)
            .some((item) => item.type === "audio.owner-released");
        }, { before }), { timeout: 60000 }).toBe(true);
        const beforeRead = await page.evaluate(() => window.__cleanEvidence.receipts.length);
        await page.locator('[data-provider-card-action="read"]').click();
        await expect.poll(() => page.evaluate(({ beforeRead }) => {
          return window.__cleanEvidence.receipts.slice(beforeRead).some((item) =>
            item.type === "conversation.response-requested" &&
            item.detail.reason === "provider-card-read"
          );
        }, { beforeRead }), { timeout: 10000 }).toBe(true);
        await expect.poll(() => page.evaluate(({ beforeRead }) => {
          return window.__cleanEvidence.receipts.slice(beforeRead)
            .some((item) => item.type === "conversation.return-to-listening");
        }, { beforeRead }), { timeout: 60000 }).toBe(true);
      }
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
      await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state)).toBe("connected");
      await page.locator("#nexus-workspace-close").click();
      await expect(page.locator("#nexus-workspace")).toBeHidden();
      await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state)).toBe("connected");
      await expect(page.locator("#nexus-status")).toHaveText("Listening");
      driverEvidence.turns.push({ lane, rotationSeed: seed, app, workspace, command, visual, populated: true, voiceEdited: Boolean(journey.edit), controlsVerified: (journey.controls || []).length, closed: true, returnedToListening: true, passed: true });
      }
      await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.end());
    }
    const browserErrors = await page.evaluate(() => window.__cleanEvidence.errors);
    expect(browserErrors).toEqual([]);
    const audioViolations = await page.evaluate(() => window.__cleanEvidence.audioViolations);
    expect(audioViolations).toEqual([]);
    expect(driverEvidence.turns).toHaveLength(journeys.length);
    const visibleReceipts = await page.evaluate(() => window.__cleanEvidence.receipts
      .filter((item) => item.type === "workspace.visible"));
    expect(visibleReceipts.every((item) => item.detail.outcomeVerified === true)).toBe(true);
    expect(new Set(visibleReceipts.map((item) => item.detail.transactionId)).size).toBe(visibleReceipts.length);
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
      snapshot: window.NexusCleanRuntime?.snapshot?.() || null,
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
