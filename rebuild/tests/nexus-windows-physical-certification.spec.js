const { test, expect } = require("@playwright/test");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const BASE_URL = process.env.NEXUS_CLEAN_BASE_URL || "http://127.0.0.1:4317";
const OUTPUT = path.resolve("output/nexus-clean-windows-certification");
const commands = [
  ["agriculture", "Nexus, help with my maize crop in Kenya."],
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
  ["live-knowledge", "Nexus, search the internet for today's Kenya weather."]
];

function speak(text) {
  const encoded = Buffer.from(text, "utf16le").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$t=[Text.Encoding]::Unicode.GetString([Convert]::FromBase64String('${encoded}'))`,
    "$v=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    "$v.Volume=90",
    "$v.Rate=-1",
    "$v.Speak($t)",
    "$v.Dispose()"
  ].join(";");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script]);
    let stderr = "";
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("exit", (code) => code === 0 ? resolve() : reject(new Error(stderr || `speech exited ${code}`)));
  });
}

test.use({
  baseURL: BASE_URL,
  headless: false,
  launchOptions: { channel: "chrome", args: ["--autoplay-policy=no-user-gesture-required"] }
});

test("new Genesis build passes physical voice and every command", async ({ page, context }) => {
  test.setTimeout(25 * 60 * 1000);
  fs.mkdirSync(OUTPUT, { recursive: true });
  await context.grantPermissions(["microphone"], { origin: new URL(BASE_URL).origin });
  await page.addInitScript(() => {
    window.__cleanEvidence = { receipts: [], errors: [] };
    window.addEventListener("nexus.clean.receipt", (event) => window.__cleanEvidence.receipts.push(event.detail));
    window.addEventListener("error", (event) => window.__cleanEvidence.errors.push(String(event.message)));
    window.addEventListener("unhandledrejection", (event) => window.__cleanEvidence.errors.push(String(event.reason)));
  });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.locator("#nexus-orb").click();
  await expect(page.locator("#nexus-status")).toHaveText("Listening", { timeout: 60000 });
  await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state), {
    timeout: 60000
  }).toBe("connected");
  await expect.poll(() => page.evaluate(() => {
    const receipts = window.__cleanEvidence.receipts;
    return receipts.some((item) => item.type === "audio.remote-attached");
  }), { timeout: 60000 }).toBe(true);

  await speak("Nexus, say physical voice calibration complete.");
  await expect.poll(() => page.evaluate(() => {
    const receipts = window.__cleanEvidence.receipts;
    return receipts.some((item) => item.type === "conversation.return-to-listening");
  }), { timeout: 60000 }).toBe(true);

  const turns = [];
  for (const [workspace, command] of commands) {
    const before = await page.evaluate(() => window.__cleanEvidence.receipts.length);
    await speak(command);
    await expect.poll(() => page.evaluate(({ before, workspace }) => {
      return window.__cleanEvidence.receipts.slice(before)
        .some((item) => item.type === "workspace.visible" && item.detail.workspace === workspace);
    }, { before, workspace }), { timeout: 60000 }).toBe(true);
    await expect(page.locator("#nexus-workspace")).toHaveAttribute("data-workspace", workspace);
    await expect(page.locator("#nexus-workspace")).toBeVisible();
    await expect.poll(() => page.evaluate(() => window.NexusCleanRuntime.snapshot().state.state)).toBe("connected");
    turns.push({ workspace, command, passed: true });
  }
  const evidence = await page.evaluate((turns) => ({
    turns,
    snapshot: window.NexusCleanRuntime.snapshot(),
    browserErrors: window.__cleanEvidence.errors
  }), turns);
  fs.writeFileSync(path.join(OUTPUT, "certification.json"), `${JSON.stringify(evidence, null, 2)}\n`);
  await page.screenshot({ path: path.join(OUTPUT, "final.png"), fullPage: true });
  expect(evidence.browserErrors).toEqual([]);
  expect(turns).toHaveLength(13);
});
