const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.VOICE_RESPONSE_CHECK_PORT || 4424);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-voice-response-check-db.json");
let cookie = "";

const checks = [
  { prompt: "Goodmorning", intent: "conversation.greeting", section: "dashboard", includes: "Good morning" },
  { prompt: "Can you hear me?", intent: "conversation.hearing_check", section: "dashboard", includes: "I can hear you" },
  { prompt: "Nexus home", intent: "conversation.home", section: "dashboard", includes: "Home is open" },
  { prompt: "Nexus main menu home", intent: "conversation.home", section: "dashboard", includes: "Home is open" },
  { prompt: "What can you do?", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "What can do?", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "you can do what", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "que puedes hacer", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "Explain AgriNexus.", intent: "conversation.platform_explained", section: "agent", includes: "AgriNexus helps people" },
  { prompt: "What can you do for a farmer?", intent: "conversation.farmer_help", section: "trade", includes: "For a farmer" },
  { prompt: "What can you for the farmer?", intent: "conversation.farmer_help", section: "trade", includes: "For a farmer" },
  { prompt: "I need medicine.", intent: "conversation.medicine_help", section: "health", includes: "I cannot prescribe" },
  { prompt: "Nexus, I need medicine.", intent: "conversation.medicine_help", section: "health", includes: "I cannot prescribe" },
  { prompt: "I want medicine.", intent: "conversation.medicine_help", section: "health", includes: "I cannot prescribe" },
  { prompt: "medicine need", intent: "conversation.medicine_help", section: "health", includes: "I cannot prescribe" },
  { prompt: "dawa", intent: "conversation.medicine_help", section: "health", includes: "I cannot prescribe" },
  { prompt: "necesito medicina", intent: "conversation.medicine_help", section: "health", includes: "I cannot prescribe" },
  { prompt: "Find a clinic near me.", intent: "conversation.clinic_map_help", section: "map", includes: "clinic or pharmacy support on the map" },
  { prompt: "Nexus, find a clinic near me.", intent: "conversation.clinic_map_help", section: "map", includes: "clinic or pharmacy support on the map" },
  { prompt: "Nexus, show pharmacy on the map.", intent: "conversation.clinic_map_help", section: "map", includes: "clinic or pharmacy support on the map" },
  { prompt: "Find me a clinic.", intent: "conversation.clinic_map_help", section: "map", includes: "clinic or pharmacy support on the map" },
  { prompt: "clinic near", intent: "conversation.clinic_map_help", section: "map", includes: "clinic or pharmacy support on the map" },
  { prompt: "clinica cerca", intent: "conversation.clinic_map_help", section: "map", includes: "clinic or pharmacy support on the map" },
  { prompt: "kliniki karibu", intent: "conversation.clinic_map_help", section: "map", includes: "clinic or pharmacy support on the map" },
  { prompt: "I need a doctor.", intent: "conversation.doctor_help", section: "health", includes: "This is not a diagnosis" },
  { prompt: "Nexus, I need a doctor.", intent: "conversation.doctor_help", section: "health", includes: "This is not a diagnosis" },
  { prompt: "Nexus, call a provider.", intent: "conversation.doctor_help", section: "health", includes: "This is not a diagnosis" },
  { prompt: "Nexus, start intake.", intent: "conversation.health_intake", section: "health", includes: "This is not a diagnosis" },
  { prompt: "Nexus, start health intake.", intent: "conversation.health_intake", section: "health", includes: "This is not a diagnosis" },
  { prompt: "doctor please", intent: "conversation.doctor_help", section: "health", includes: "This is not a diagnosis" },
  { prompt: "daktari", intent: "conversation.doctor_help", section: "health", includes: "This is not a diagnosis" },
  { prompt: "Nexus, explain mobile clinic support.", intent: "conversation.mobile_clinic_help", section: "health", includes: "Mobile clinic" },
  { prompt: "Nexus, no English, baby sick, help.", intent: "conversation.health_intake", section: "health", includes: "This is not a diagnosis" },
  { prompt: "Nexus, I cannot read. Help me with health intake.", intent: "conversation.health_intake", section: "health", includes: "This is not a diagnosis" },
  { prompt: "Nexus, build captions for telehealth.", intent: "conversation.telehealth_captions", section: "health", includes: "captions" },
  { prompt: "Nexus, explain this to a healthcare partner.", intent: "conversation.healthcare_partner_explain", section: "health", includes: "healthcare partner" },
  { prompt: "My crop is bad.", intent: "conversation.crop_help", section: "trade", includes: "crop problem" },
  { prompt: "crop bad", intent: "conversation.crop_help", section: "trade", includes: "crop problem" },
  { prompt: "shamba mbaya", intent: "conversation.crop_help", section: "trade", includes: "crop problem" },
  { prompt: "Help me sell my crop.", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { prompt: "sell crop", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { prompt: "kuuza mazao", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { prompt: "I need work.", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "job please", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "kazi", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "trabajo", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "Start a course.", intent: "conversation.learning_start", section: "learning", includes: "help you learn" },
  { prompt: "want learn", intent: "conversation.learning_start", section: "learning", includes: "help you learn" },
  { prompt: "somo", intent: "conversation.learning_start", section: "learning", includes: "help you learn" },
  { prompt: "Open the map.", intent: "conversation.map_open", section: "map", includes: "Full map is open" },
  { prompt: "map please", intent: "conversation.map_open", section: "map", includes: "Full map is open" },
  { prompt: "ramani", intent: "conversation.map_open", section: "map", includes: "Full map is open" }
];

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Voice response regression server did not become reachable");
}

async function call(route, body) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json();
  if (!response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return json;
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
    for (const check of checks) {
      const state = await call("/api/agent/command", {
        command: check.prompt,
        inputMode: "voice",
        outputMode: "voice",
        conversational: true,
        mode: "user",
        targetLanguage: "en"
      });
      const result = state.commandResult || {};
      const response = String(result.response || "").replace(/\s+/g, " ");
      assert.strictEqual(result.intent, check.intent, `${check.prompt} should route to ${check.intent}, got ${result.intent}`);
      assert.strictEqual(result.metadata?.redirectSection, check.section, `${check.prompt} should redirect to ${check.section}, got ${result.metadata?.redirectSection}`);
      assert(response.includes(check.includes), `${check.prompt} response should include "${check.includes}", got "${response}"`);
      assert(!/I may have heard only part of that|Say health, learning, work, trade, map, or AI help/i.test(response), `${check.prompt} must not fall back to old menu language`);
    }
    console.log("Voice response regression passed");
    for (const check of checks) console.log(`- ${check.prompt} -> ${check.intent}`);
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
