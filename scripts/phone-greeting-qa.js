const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PHONE_GREETING_QA_PORT || 4413);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-phone-greeting-qa-db.json");

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Phone greeting QA server did not become reachable");
}

async function twilioPost(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body)
  });
  const text = await response.text();
  if (!response.ok) throw new Error(`${route}: ${text}`);
  return text;
}

(async () => {
  fs.copyFileSync(sourceDb, tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      PUBLIC_BASE_URL: base
    },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true
  });

  try {
    await waitForServer();
    const incoming = await twilioPost("/api/voice/phone/incoming", { From: "+15555550123", CallSid: "CA-phone-greeting" });
    assert(incoming.includes("Hi, I am AgriNexus"), "incoming call should use short AgriNexus greeting");
    assert(incoming.includes("Who am I speaking with"), "incoming call should ask for caller name first");
    assert(incoming.includes("step=name"), "incoming gather should route to name step");

    const name = await twilioPost("/api/voice/phone/gather?step=name", { SpeechResult: "my name is Ron", From: "+15555550123", CallSid: "CA-phone-greeting" });
    assert(name.includes("Thank you, Ron"), "name step should greet caller by extracted name");
    assert(name.includes("What language should I use"), "name step should ask for language");
    assert(name.includes("step=language"), "name step should route to language step");

    const language = await twilioPost("/api/voice/phone/gather?step=language", { SpeechResult: "Spanish", From: "+15555550123", CallSid: "CA-phone-greeting" });
    assert(language.includes("Hello Ron"), "language step should keep caller name");
    assert(language.includes("I will use Spanish"), "language step should confirm selected language");
    assert(language.includes("language=\"es-ES\""), "language step should switch Twilio gather language");
    assert(language.includes("step=command"), "language step should route to command mode");

    const command = await twilioPost("/api/voice/phone/gather?step=command", { SpeechResult: "start telehealth intake", From: "+15555550123", CallSid: "CA-phone-greeting" });
    assert(command.includes("Ron"), "command response should continue personalized phone session");
    assert(command.includes("step=command"), "command response should keep phone in command mode");

    console.log("Phone greeting QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) fs.unlinkSync(tempDb);
  console.error(error.message || error);
  process.exit(1);
});
