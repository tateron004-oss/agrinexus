const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const { productionUrlFromEnv } = require("../../scripts/nexus-canonical-production-target");
const BASE_URL = productionUrlFromEnv();
const SESSION_ID = process.env.NEXUS_TRANSACTION_SESSION || "session-1";
const OUTPUT = path.resolve("output", "nexus-production-transactions", SESSION_ID);
const journeys = [
  { id: "nairobi-weather", workspace: "live-knowledge", command: "Nexus, show today's live weather in Nairobi, Kenya.", kind: "weather" },
  { id: "united-states-map", workspace: "maps", command: "Nexus, reset the map and show the United States on a fresh map.", kind: "map" },
  { id: "agriculture-images", workspace: "agriculture", command: "Nexus, show source-labeled pictures of possible maize diseases.", kind: "images" },
  { id: "internet-sources", workspace: "live-knowledge", command: "Nexus, search the internet for current soil restoration evidence in the Sahel.", kind: "search" },
  { id: "source-listings", workspace: "maps", command: "Nexus, show bicycle repair shops near Windhoek, Namibia, on the map.", kind: "listings" },
  { id: "playable-music", workspace: "music", command: "Nexus, play a public preview of Stevie Wonder music.", kind: "music" },
  { id: "agriculture-open", workspace: "agriculture", command: "Nexus, open Agriculture Help.", kind: "application", keepOpen: true },
  { id: "agriculture-reopen-visible", workspace: "agriculture", command: "Nexus, reopen Agriculture Help and keep the visible workspace synchronized.", kind: "application" }
];

function readWaveData(wav) {
  for (let offset = 12; offset + 8 <= wav.length;) {
    const id = wav.toString("ascii", offset, offset + 4);
    const size = wav.readUInt32LE(offset + 4);
    if (id === "data") return wav.subarray(offset + 8, offset + 8 + size);
    offset += 8 + size + (size % 2);
  }
  throw new Error("Synthesized WAV contains no PCM data.");
}

function synthesizePcm(text) {
  const wavPath = path.join(os.tmpdir(), `nexus-transaction-${process.pid}-${Date.now()}.wav`);
  const encodedText = Buffer.from(text, "utf16le").toString("base64");
  const encodedPath = Buffer.from(wavPath, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedText}'))`,
    `$p=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedPath}'))`,
    "$f=New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(24000,16,1)",
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.Rate=-1", "$v.SetOutputToWaveFile($p,$f)", "$v.Speak($t)", "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script], { windowsHide: true });
    let stderr = "";
    child.stderr.on("data", chunk => { stderr += chunk; });
    child.on("exit", code => {
      try {
        if (code !== 0) throw new Error(stderr || `Windows speech exited ${code}`);
        resolve(readWaveData(fs.readFileSync(wavPath)));
      } catch (error) { reject(error); }
      finally { try { fs.unlinkSync(wavPath); } catch {} }
    });
  });
}

async function injectSpokenCommand(page, text) {
  const pcm = await synthesizePcm(text);
  const chunks = [];
  for (let offset = 0; offset < pcm.length; offset += 16384) chunks.push(pcm.subarray(offset, offset + 16384).toString("base64"));
  await page.evaluate(audioChunks => window.NexusCleanRuntime.certificationAudio.send(audioChunks), chunks);
}

test.use({ baseURL: BASE_URL, headless: false, launchOptions: { channel: "chrome", args: ["--autoplay-policy=no-user-gesture-required"] } });

test(`production transaction receipts are visible and isolated (${SESSION_ID})`, async ({ page, context }) => {
  test.setTimeout(18 * 60 * 1000);
  fs.mkdirSync(OUTPUT, { recursive: true });
  const evidence = { schema: "nexus.production.transaction.physical.v1", sessionId: SESSION_ID, baseUrl: BASE_URL, startedAt: new Date().toISOString(), turns: [], passed: false };
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  await page.addInitScript(() => {
    window.__transactionEvidence = { receipts: [], errors: [] };
    window.addEventListener("nexus.clean.receipt", event => window.__transactionEvidence.receipts.push(event.detail));
    window.addEventListener("error", event => window.__transactionEvidence.errors.push(String(event.message || "error")));
    window.addEventListener("unhandledrejection", event => window.__transactionEvidence.errors.push(String(event.reason || "rejection")));
  });
  try {
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    const identity = await page.evaluate(async () => (await fetch("/api/certification/identity", { cache: "no-store" })).json());
    expect(identity.releaseSha).toBe(process.env.NEXUS_EXPECTED_DEPLOYMENT_SHA);
    await page.locator("#nexus-orb").click();
    await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime?.snapshot().state.state), { timeout: 60000 }).toBe("connected");
    await expect.poll(() => page.evaluate(() => Boolean(window.NEXUS_CLEAN_CONFIG?.certification)), { timeout: 10000 }).toBe(true);
    await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.begin());

    for (const journey of journeys) {
      const before = await page.evaluate(() => window.__transactionEvidence.receipts.length);
      await page.waitForTimeout(900);
      await injectSpokenCommand(page, journey.command);
      const transcriptMatched = async () => page.evaluate(({ before, command }) => {
        const tokens = value => new Set(String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter(token => token.length >= 3));
        const expected = tokens(command);
        return window.__transactionEvidence.receipts.slice(before).some(item => {
          if (item.type !== "transcript.final") return false;
          const actual = tokens(item.detail?.transcript);
          const overlap = [...expected].filter(token => actual.has(token)).length;
          return overlap / Math.max(1, Math.min(expected.size, actual.size)) >= 0.45;
        });
      }, { before, command: journey.command });
      let heard = false;
      try {
        await expect.poll(transcriptMatched, { timeout: 35000 }).toBe(true);
        heard = true;
      } catch {}
      if (!heard) {
        await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime?.snapshot().state.state), { timeout: 30000 }).toBe("connected");
        await injectSpokenCommand(page, journey.command);
        await expect.poll(transcriptMatched, { timeout: 45000 }).toBe(true);
      }
      const receipt = await expect.poll(() => page.evaluate(({ before, workspace }) => {
        return window.__transactionEvidence.receipts.slice(before).find(item => item.type === "workspace.visible" && item.detail?.workspace === workspace) || null;
      }, { before, workspace: journey.workspace }), { timeout: 90000 }).not.toBeNull().then(() => page.evaluate(({ before, workspace }) => window.__transactionEvidence.receipts.slice(before).find(item => item.type === "workspace.visible" && item.detail?.workspace === workspace), { before, workspace: journey.workspace }));
      expect(receipt.detail.outcomeVerified).toBe(true);
      expect(receipt.detail.transactionId).toBeTruthy();
      const falseSuccessReceipts = await page.evaluate(({ before }) => window.__transactionEvidence.receipts.slice(before).filter(item =>
        item.type === "workspace.visible"
        && item.detail?.outcomeVerified === true
        && item.detail?.outcomeKind === "source-directory"
        && (!item.detail?.evidenceLinksVisible || Number(item.detail?.evidenceSourceCount || 0) < 1)
      ), { before });
      expect(falseSuccessReceipts, "A zero-source directory must never be reported as a verified result.").toEqual([]);
      await expect(page.locator("#nexus-workspace")).toBeVisible();
      await expect(page.locator("#nexus-workspace")).toHaveAttribute("data-populated", "true");

      if (journey.kind === "weather") {
        await expect(page.locator('[data-nexus-visual="weather"]')).toBeVisible();
        await expect(page.locator("#nexus-app-surface")).toContainText(/Nairobi|°C|rain/i);
        await expect(page.locator("#nexus-workspace a[href^='http']").first()).toBeVisible();
      } else if (journey.kind === "map") {
        await expect(page.locator("#nexus-map-canvas")).toBeVisible();
        await expect(page.locator("#nexus-map-summary")).toContainText(/United States/i);
        await expect(page.locator("#nexus-map-link")).toHaveAttribute("href", /^https:\/\/www\.openstreetmap\.org\//);
      } else if (journey.kind === "images") {
        await expect(page.locator('[data-nexus-visual="agriculture-images"]')).toBeVisible();
        const image = page.locator("#nexus-app-surface img[src]").first();
        await expect(image).toBeVisible();
        await expect.poll(() => image.evaluate(node => node.naturalWidth >= 120 && node.naturalHeight >= 90), { timeout: 15000 }).toBe(true);
        await expect(page.locator("#nexus-workspace a[href^='http']").first()).toBeVisible();
      } else if (["search", "listings"].includes(journey.kind)) {
        const records = page.locator("#nexus-workspace [data-nexus-item], #nexus-evidence-surface article");
        await expect.poll(() => records.count(), { timeout: 20000 }).toBeGreaterThan(0);
        await expect(page.locator("#nexus-workspace a[href^='http']").first()).toBeVisible();
      } else if (journey.kind === "music") {
        const player = page.locator("#nexus-content-music-player[src], #nexus-content-music-frame[src], #nexus-music-frame[src]");
        await expect.poll(() => player.count(), { timeout: 20000 }).toBeGreaterThan(0);
        await expect(player.first()).toBeVisible();
        const audio = page.locator("#nexus-content-music-player[src]");
        if (await audio.count()) {
          await expect.poll(() => audio.evaluate(node => !node.error && node.readyState >= 1 && !node.paused), { timeout: 20000 }).toBe(true);
        }
        await expect(page.locator("#nexus-workspace a[href^='http']").first()).toBeVisible();
      } else {
        await expect(page.locator("#nexus-app-surface input, #nexus-app-surface textarea, #nexus-app-surface select").first()).toBeVisible();
      }

      await expect.poll(() => page.evaluate(({ before }) => window.__transactionEvidence.receipts.slice(before).some(item => item.type === "conversation.return-to-listening"), { before }), { timeout: 60000 }).toBe(true);
      const screenshot = path.join(OUTPUT, `${String(evidence.turns.length + 1).padStart(2, "0")}-${journey.id}.png`);
      await page.screenshot({ path: screenshot, fullPage: true });
      evidence.turns.push({ ...journey, requestId: receipt.detail.requestId || receipt.detail.transactionId, transactionId: receipt.detail.transactionId, screenshot, passed: true });
      if (!journey.keepOpen) {
        await page.locator("#nexus-workspace-close").click();
        await expect(page.locator("#nexus-workspace")).toBeHidden();
      }
    }

    expect(new Set(evidence.turns.map(turn => turn.transactionId)).size).toBe(evidence.turns.length);
    expect(await page.evaluate(() => window.__transactionEvidence.errors)).toEqual([]);
    evidence.passed = true;
  } catch (error) {
    evidence.failure = {
      name: error.name,
      message: error.message,
      receipts: await page.evaluate(() => window.__transactionEvidence?.receipts?.slice(-80) || []).catch(() => []),
      errors: await page.evaluate(() => window.__transactionEvidence?.errors || []).catch(() => [])
    };
    await page.screenshot({ path: path.join(OUTPUT, "failure.png"), fullPage: true }).catch(() => {});
    throw error;
  } finally {
    evidence.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(OUTPUT, "evidence.json"), `${JSON.stringify(evidence, null, 2)}\n`);
  }
});
