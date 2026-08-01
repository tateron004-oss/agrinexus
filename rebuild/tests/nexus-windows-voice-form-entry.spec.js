const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const BASE_URL = process.env.NEXUS_CLEAN_BASE_URL || "http://127.0.0.1:4317";
const OUTPUT = path.resolve("output/nexus-voice-form-certification");

function experienceField(page) {
  return page.getByRole("textbox", { name: /^(Résumé experience|Work experience)$/i }).first();
}

function skillsField(page) {
  return page.getByRole("textbox", { name: /^(Résumé skills|Skills)$/i }).first();
}

function waveData(wav) {
  for (let offset = 12; offset + 8 <= wav.length;) {
    const id = wav.toString("ascii", offset, offset + 4);
    const size = wav.readUInt32LE(offset + 4);
    if (id === "data") return wav.subarray(offset + 8, offset + 8 + size);
    offset += 8 + size + (size % 2);
  }
  throw new Error("Synthesized WAV contains no PCM data.");
}

function synthesize(text) {
  const wavPath = path.join(os.tmpdir(), `nexus-form-${process.pid}-${Date.now()}.wav`);
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
      try {
        if (code !== 0) throw new Error(stderr || `speech synthesis exited ${code}`);
        resolve(waveData(fs.readFileSync(wavPath)));
      } catch (error) {
        reject(error);
      } finally {
        fs.rmSync(wavPath, { force: true });
      }
    });
  });
}

async function speakExact(page, text) {
  // Match the certified physical-command driver: allow the prior Realtime
  // response cleanup to settle after return-to-listening before committing
  // the next physical utterance.
  await page.waitForTimeout(500);
  const pcm = await synthesize(text);
  const chunks = [];
  for (let offset = 0; offset < pcm.length; offset += 16384) {
    chunks.push(pcm.subarray(offset, offset + 16384).toString("base64"));
  }
  await page.evaluate((audio) => window.NexusCleanRuntime.certificationAudio.send(audio), chunks);
}

async function expectReceipt(page, type, before) {
  await expect.poll(() => page.evaluate(({ type, before }) =>
    window.__voiceFormReceipts.slice(before).some((receipt) => receipt.type === type)
  , { type, before }), { timeout: 60000 }).toBe(true);
}

async function hasReceipt(page, type, before, timeout = 45000) {
  return page.waitForFunction(({ type, before }) =>
    window.__voiceFormReceipts.slice(before).some((receipt) => receipt.type === type)
  , { type, before }, { timeout }).then(() => true).catch(() => false);
}

async function expectReturnToListening(page, before) {
  await expectReceipt(page, "conversation.return-to-listening", before);
  await expect.poll(() => page.evaluate(() =>
    window.NexusCleanRuntime.snapshot().state.state
  ), { timeout: 60000 }).toBe("connected");
}

async function speakForReceipt(page, commands, receipt, evidence) {
  const attempts = [];
  for (const [index, command] of commands.entries()) {
    const before = await page.evaluate(() => window.__voiceFormReceipts.length);
    await speakExact(page, command);
    const passed = await hasReceipt(page, receipt, before);
    const returnedToListening = await hasReceipt(
      page,
      "conversation.return-to-listening",
      before,
      60000
    );
    const transcripts = await page.evaluate(({ before }) =>
      window.__voiceFormReceipts.slice(before)
        .filter((item) => item.type === "transcript.final")
        .map((item) => item.detail?.transcript || "")
    , { before });
    attempts.push({ command, transcripts, passed, returnedToListening });
    if (passed) {
      expect(returnedToListening).toBe(true);
      await expectReturnToListening(page, before);
      evidence.commands.push({
        command,
        receipt,
        attempts,
        returnToListening: true,
        passed: true
      });
      return;
    }
    if (index < commands.length - 1) {
      expect(returnedToListening).toBe(true);
      await expectReturnToListening(page, before);
    }
  }
  evidence.commands.push({ receipt, attempts, passed: false });
  throw new Error(
    `Physical voice did not produce ${receipt}. ` +
    `Transcripts: ${JSON.stringify(attempts.map((attempt) => attempt.transcripts))}`
  );
}

test.use({
  baseURL: BASE_URL,
  headless: false,
  launchOptions: { channel: "chrome", args: ["--autoplay-policy=no-user-gesture-required"] }
});

test("voice fills, corrects, reads, saves, reopens, and guards a production form", async ({ page, context }) => {
  test.setTimeout(15 * 60 * 1000);
  fs.mkdirSync(OUTPUT, { recursive: true });
  const evidence = { startedAt: new Date().toISOString(), commands: [], failure: null };
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  await page.addInitScript(() => {
    window.__voiceFormReceipts = [];
    window.addEventListener("nexus.clean.receipt", (event) => window.__voiceFormReceipts.push(event.detail));
  });
  try {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.locator("#nexus-orb").click();
    await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state), { timeout: 60000 }).toBe("connected");
    await page.locator("#nexus-audio").evaluate((audio) => { audio.muted = true; });
    await expect.poll(() => page.evaluate(() => Boolean(window.NexusCleanRuntime.certificationAudio)), { timeout: 10000 }).toBe(true);
    await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.begin());

    const steps = [
      [["Nexus, help me create a resume."], "workspace.visible"],
      [[
        "Nexus, add supervised a team of eight employees to experience.",
        "Nexus, add team leadership to experience."
      ], "voice-form.updated"],
      [[
        "Nexus, change experience to supervised a team of twelve employees.",
        "Nexus, change experience to team leadership and twelve employees."
      ], "voice-form.corrected"],
      [[
        "Nexus, add forklift operation and inventory control to skills.",
        "Nexus, add forklift operation to skills."
      ], "voice-form.updated"],
      [["Nexus, read my resume back."], "voice-form.readback"],
      [["Nexus, save this resume draft."], "voice-form.saved"]
    ];
    for (const [commands, receipt] of steps) {
      await speakForReceipt(page, commands, receipt, evidence);
    }

    await expect(experienceField(page)).toBeVisible({ timeout: 10000 });
    await expect(skillsField(page)).toBeVisible({ timeout: 10000 });
    await experienceField(page).fill("");
    await skillsField(page).fill("");
    let before = await page.evaluate(() => window.__voiceFormReceipts.length);
    await speakExact(page, "Nexus, reopen this resume draft.");
    await expectReceipt(page, "voice-form.reopened", before);
    await expectReturnToListening(page, before);
    await expect(experienceField(page)).toHaveValue(/twelve employees/i);
    await expect(skillsField(page)).toHaveValue(/forklift operation/i);
    await page.waitForTimeout(1500);
    const visibleExperience = await experienceField(page).inputValue();
    const visibleSkills = await skillsField(page).inputValue();
    const reopenProof = await page.evaluate(({ before, visibleExperience, visibleSkills }) => {
      const receipts = window.__voiceFormReceipts.slice(before);
      const receipt = receipts.findLast((item) => item.type === "voice-form.reopened");
      return {
        receipt,
        experience: visibleExperience,
        skills: visibleSkills,
        laterReplacement: receipt
          ? receipts.slice(receipts.lastIndexOf(receipt) + 1).some((item) =>
            item.type === "voice-form.reopened"
          )
          : true,
        rejectedTransactions: receipts
          .filter((item) => item.type === "guided-entry.transaction-rejected")
          .map((item) => item.detail)
      };
    }, { before, visibleExperience, visibleSkills });
    expect(reopenProof.receipt?.detail?.requestId).toBeTruthy();
    expect(reopenProof.receipt?.detail?.committedFormVersion).toBeGreaterThan(0);
    expect(reopenProof.receipt?.detail?.visibleValuesVerified).toBe(true);
    expect(reopenProof.receipt?.detail?.verifiedRestoredFields).toEqual(expect.arrayContaining([
      expect.objectContaining({ field: "experience", value: reopenProof.experience }),
      expect.objectContaining({ field: "skills", value: reopenProof.skills })
    ]));
    expect(reopenProof.laterReplacement).toBe(false);
    evidence.reopenProof = reopenProof;

    before = await page.evaluate(() => window.__voiceFormReceipts.length);
    await speakExact(page, "Nexus, submit this application.");
    await expectReceipt(page, "voice-form.confirmation-required", before);
    await expectReturnToListening(page, before);
    await expect(page.locator("#nexus-workspace")).toContainText(/Confirmation required|Application Submission Check/i);
    await expect(page.locator("#nexus-workspace")).toContainText(/required fields|confirmation/i);

    before = await page.evaluate(() => window.__voiceFormReceipts.length);
    await speakExact(page, "Nexus, confirm.");
    await expectReceipt(page, "voice-form.confirmed", before);
    await expectReturnToListening(page, before);
    const confirmation = await page.evaluate(() =>
      window.__voiceFormReceipts.findLast((receipt) => receipt.type === "voice-form.confirmed")
    );
    expect(confirmation.detail.externalExecution).toBe(false);
    await page.evaluate(() => window.NexusCleanRuntime.certificationAudio.end());
  } catch (error) {
    evidence.failure = { name: error.name, message: error.message, stack: error.stack };
    throw error;
  } finally {
    await page.evaluate(() => {
      try { window.NexusCleanRuntime?.certificationAudio?.end(); } catch {}
      try { window.NexusCleanRuntime?.stop("certification-complete"); } catch {}
    }).catch(() => {});
    evidence.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(OUTPUT, "certification.json"), `${JSON.stringify(evidence, null, 2)}\n`);
    await page.screenshot({ path: path.join(OUTPUT, evidence.failure ? "failure.png" : "passed.png"), fullPage: true }).catch(() => {});
    await context.close().catch(() => {});
  }
});
