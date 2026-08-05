const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const { productionUrlFromEnv } = require("../../scripts/nexus-canonical-production-target");
const BASE_URL = productionUrlFromEnv();
const OUTPUT = path.resolve("output/nexus-general-questions-voice");
const ROTATION_SEED = Math.max(1, Number(process.env.NEXUS_PROMPT_ROTATION_SEED || 1));

const turns = [
  ["Explain how solar panels generate electricity.", "answer"],
  ["What causes inflation, and how does it affect a household?", "answer"],
  ["Explain artificial intelligence in simple language.", "answer"],
  ["What is the difference between weather and climate?", "answer"],
  ["How does a vaccine help the immune system?", "answer"],
  ["What is the weather forecast for Nairobi this week? Show your sources.", "sources"],
  ["What are today's major agriculture stories in Kenya?", "sources"],
  ["Find the latest information about maize prices in Kenya and tell me when each source was published.", "sources"],
  ["What technology news was announced this week?", "sources"],
  ["Find current training opportunities for smallholder farmers in Kenya.", "list"],
  ["Show five current agricultural jobs in Nairobi as a numbered list with employer, role, location, date, and source link.", "list"],
  ["List five organizations supporting Kenyan farmers, explain their services, and show sources.", "list"],
  ["Find four current technology-training programs in California and display their requirements and links.", "list"],
  ["Show five affordable foods that contain protein and iron.", "list"],
  ["Compare three reputable online learning platforms in a table.", "list"],
  ["Show me four sourced images of healthy maize plants.", "images"],
  ["Show sourced images comparing healthy maize with fall-armyworm damage.", "images"],
  ["Show me a labeled visual explaining the parts of a plant.", "images"],
  ["Find images of drip-irrigation systems and identify the source of every image.", "images"],
  ["Show me a map of Kenya and identify its neighboring countries.", "map"],
  ["Compare drip irrigation and sprinkler irrigation for a two-acre farm.", "answer"],
  ["What are the advantages and disadvantages of electric and gasoline vehicles?", "answer"],
  ["Help me compare Nairobi and Nakuru for starting a small agricultural business.", "answer"],
  ["If I have a 500 dollar monthly food budget, how much can I spend each week?", "answer"],
  ["Explain the difference between a resume and a curriculum vitae.", "answer"],
  ["Explain crop rotation.", "answer"],
  ["Give me a practical example for a maize farmer.", "followup"],
  ["Turn that into a five-step plan.", "followup"],
  ["Show supporting sources.", "sources"],
  ["Save the plan in Agriculture Help.", "saved"],
  ["Close Agriculture Help.", "close"],
  ["Open Agriculture Help again and show the saved plan.", "reopen"],
  ["My maize leaves have yellow streaks. Help me understand possible causes and show visual examples.", "images"],
  ["I want to learn computer skills but do not know where to begin. Find current options and organize them for me.", "list"],
  ["Help me understand what I should investigate before starting a poultry business near Nairobi.", "answer"],
  ["I need trustworthy information about lowering household energy costs. Research it and show me the evidence.", "sources"],
  ["Teach me something useful about managing high blood pressure, using reputable medical sources.", "sources"]
];

function wavData(wav) {
  for (let offset = 12; offset + 8 <= wav.length;) {
    const id = wav.toString("ascii", offset, offset + 4);
    const size = wav.readUInt32LE(offset + 4);
    if (id === "data") return wav.subarray(offset + 8, offset + 8 + size);
    offset += 8 + size + (size % 2);
  }
  throw new Error("Synthesized WAV contains no PCM data.");
}

function synthesize(text) {
  const wavPath = path.join(os.tmpdir(), `nexus-general-${process.pid}-${Date.now()}.wav`);
  const variants = [`Nexus, ${text}`, `Hey Nexus, please ${text}`, `Nexus, could you ${text}`];
  const encodedText = Buffer.from(variants[(ROTATION_SEED - 1) % variants.length], "utf16le").toString("base64");
  const encodedPath = Buffer.from(wavPath, "utf16le").toString("base64");
  const script = ["Add-Type -AssemblyName System.Speech", `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedText}'))`, `$p=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encodedPath}'))`, "$f=New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(24000,16,1)", "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer", "$v.Rate=-1", "$v.SetOutputToWaveFile($p,$f)", "$v.Speak($t)", "$v.Dispose()"].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script]);
    let stderr = "";
    child.stderr.on("data", chunk => { stderr += chunk; });
    child.on("exit", code => {
      if (code) return reject(new Error(stderr || `speech synthesis exited ${code}`));
      try { resolve(wavData(fs.readFileSync(wavPath))); } catch (error) { reject(error); }
      finally { fs.rmSync(wavPath, { force: true }); }
    });
  });
}

async function inject(page, text) {
  const pcm = await synthesize(text);
  const chunks = [];
  for (let offset = 0; offset < pcm.length; offset += 16384) chunks.push(pcm.subarray(offset, offset + 16384).toString("base64"));
  await page.evaluate(audioChunks => window.NexusCleanRuntime.certificationAudio.send(audioChunks), chunks);
}

test.use({ baseURL: BASE_URL, headless: false, launchOptions: { channel: "chrome", args: ["--autoplay-policy=no-user-gesture-required"] } });

test("general questions deliver verified voice-first results", async ({ page, context }) => {
  test.setTimeout(85 * 60 * 1000);
  fs.mkdirSync(OUTPUT, { recursive: true });
  const evidence = { startedAt: new Date().toISOString(), release: process.env.NEXUS_EXPECTED_RELEASE_SHA, turns: [], failure: null };
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  await page.addInitScript(() => {
    window.__generalEvidence = { receipts: [], errors: [] };
    window.addEventListener("nexus.clean.receipt", event => window.__generalEvidence.receipts.push(event.detail));
    window.addEventListener("error", event => window.__generalEvidence.errors.push(String(event.message)));
    window.addEventListener("unhandledrejection", event => window.__generalEvidence.errors.push(String(event.reason)));
  });
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.locator("#nexus-orb").click();
    await expect(page.locator("#nexus-status")).toHaveText("Listening", { timeout: 60000 });
    await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state), { timeout: 60000 }).toBe("connected");
    await page.locator("#nexus-audio").evaluate(audio => { audio.muted = true; });
    await expect.poll(() => page.evaluate(() => Boolean(window.NexusCleanRuntime.certificationAudio)), { timeout: 10000 }).toBe(true);
    await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.begin());

    for (const [prompt, kind] of turns) {
      const before = await page.evaluate(() => window.__generalEvidence.receipts.length);
      await inject(page, prompt);
      await expect.poll(() => page.evaluate(({ before }) => window.__generalEvidence.receipts.slice(before).some(item => item.type === "conversation.return-to-listening"), { before }), { timeout: 90000, message: prompt }).toBe(true);
      await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state)).toBe("connected");
      await expect(page.locator("#nexus-status")).toHaveText("Listening");
      if (kind === "close") {
        await expect(page.locator("#nexus-workspace")).toBeHidden();
      } else {
        await expect(page.locator("#nexus-workspace")).toBeVisible();
        await expect(page.locator("#nexus-workspace")).toHaveAttribute("data-populated", "true");
        const visibleText = (await page.locator("#nexus-workspace").innerText()).trim();
        expect(visibleText.length, `Readable result missing for: ${prompt}`).toBeGreaterThan(80);
      }
      if (["sources", "list", "images"].includes(kind)) await expect(page.locator("#nexus-workspace a[href^='http']").first()).toBeVisible();
      if (kind === "list") await expect(page.locator("#nexus-workspace [data-nexus-item]").first()).toBeVisible();
      if (kind === "images") {
        const images = page.locator("#nexus-workspace img[src]");
        await expect(images.first()).toBeVisible();
        expect(await images.count()).toBeGreaterThanOrEqual(1);
        await expect.poll(async () => images.evaluateAll(nodes => nodes.every(image => image.complete && image.naturalWidth >= 120 && image.naturalHeight >= 90)), { timeout: 30000 }).toBe(true);
      }
      if (kind === "map") {
        await expect(page.locator("#nexus-map-canvas")).toBeVisible();
        await expect(page.locator("#nexus-map-link")).toHaveAttribute("href", /^https:\/\/www\.openstreetmap\.org\//);
      }
      if (kind !== "close") {
        await expect.poll(() => page.evaluate(({ before }) => window.__generalEvidence.receipts
          .slice(before)
          .some(item => item.type === "workspace.visible" && item.detail.outcomeVerified === true), { before }), {
          timeout: 30000,
          message: `No verified outcome for: ${prompt}`
        }).toBe(true);
      }
      const receipts = await page.evaluate(({ before }) => window.__generalEvidence.receipts.slice(before), { before });
      evidence.turns.push({ prompt, kind, passed: true, receiptTypes: receipts.map(item => item.type) });
    }
    await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.end());
    expect(await page.evaluate(() => window.__generalEvidence.errors)).toEqual([]);
  } catch (error) {
    evidence.failure = { name: error.name, message: error.message, stack: error.stack };
    throw error;
  } finally {
    evidence.finishedAt = new Date().toISOString();
    evidence.passed = !evidence.failure && evidence.turns.length === turns.length;
    fs.writeFileSync(path.join(OUTPUT, "general-questions.json"), `${JSON.stringify(evidence, null, 2)}\n`);
    await page.screenshot({ path: path.join(OUTPUT, evidence.failure ? "failure.png" : "final.png"), fullPage: true }).catch(() => {});
  }
});
