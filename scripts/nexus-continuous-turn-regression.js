const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const port = Number(process.env.NEXUS_CONTINUOUS_TURN_PORT || 4432);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-continuous-turn-db.json");
let cookie = "";

const stalePattern = /AI step is ready|I may have heard only part|would you like me to do that now|should I do that now|I reset the voice route|say health, learning, work, trade, map/i;
const weakPattern = /^(ok|okay|yes|got it|done|ready)\.?$/i;

const sequences = [
  seq("core conversation survives five turns", [
    step("hello nexus this is Ron", "conversation.greeting", "dashboard", "Hello Ron"),
    step("Nexus, explain AgriNexus.", "conversation.platform_explained", "agent", "AgriNexus helps people"),
    step("what can you do", "conversation.capability_summary", "agent", "listen in normal words"),
    step("Nexus, stop.", "conversation.paused", "dashboard", "Paused"),
    step("Nexus, I need medicine.", "conversation.medicine_help", "health", "medicine")
  ]),
  seq("health does not trap later work learning or crop requests", [
    step("Nexus, I need a doctor.", "conversation.doctor_help", "health", "doctor"),
    step("clinic", "conversation.clinic_map_help", "map", "village"),
    step("I need work", "conversation.workforce_help", "workforce", "work"),
    step("start a course", "conversation.learning_start", "learning", "course"),
    step("crop bad", "conversation.crop_help", "trade", "crop problem")
  ]),
  seq("medicine context allows weather clinic intake and captions", [
    step("Nexus, I need medicine.", "conversation.medicine_help", "health", "medicine"),
    step("Weather in Nairobi.", "conversation.daily_life_advisor", "health", "Nairobi"),
    step("find a clinic near me", "conversation.clinic_map_help", "map", "village"),
    step("start health intake", "conversation.health_intake", "health", "intake"),
    step("build captions for telehealth", "conversation.telehealth_captions", "health", "captions")
  ]),
  seq("trade context allows detail route and drone turns", [
    step("Nexus, help me sell my crop.", "conversation.crop_sale_help", "trade", "sell the crop"),
    step("maize in Kisumu", "conversation.crop_detail_captured", "trade", "maize in Kisumu"),
    step("track my shipment", "map.live_route_tracking", "map", "shipment"),
    step("show trade route from Kenya to Nigeria", "map.buyer_seller_location_route", "map", "Kenya to Nigeria"),
    step("run drone scan", "drone.field_scan", "trade", "Drone")
  ]),
  seq("learning context allows workforce override", [
    step("Nexus, start my course.", "conversation.learning_start", "learning", "course"),
    step("farm safety", "conversation.learning_topic_captured", "learning", "farm safety"),
    step("I need work", "conversation.workforce_help", "workforce", "work"),
    step("Kenya farm work", "conversation.work_detail_captured", "workforce", "Kenya farm work"),
    step("apply", "workforce.application_help", "workforce", "apply")
  ]),
  seq("language switching does not poison later commands", [
    step("Nexus, switch to French.", "conversation.language_changed", "dashboard", "French"),
    step("Nexus, switch back to English.", "conversation.language_changed", "dashboard", "English"),
    step("what is the weather in Nairobi", "conversation.daily_life_advisor", "health", "Nairobi"),
    step("open full scale map", "conversation.map_open", "map", "Full map"),
    step("I need a doctor", "conversation.doctor_help", "health", "doctor")
  ]),
  seq("rural short phrases stay useful", [
    step("daktari", "conversation.doctor_help", "health", "not a diagnosis"),
    step("dawa", "conversation.medicine_help", "health", "medicine"),
    step("kliniki karibu", "conversation.clinic_map_help", "map", "village"),
    step("shamba mbaya", "conversation.crop_help", "trade", "crop problem"),
    step("kazi", "conversation.workforce_help", "workforce", "work")
  ]),
  seq("investor proof and brain commands survive after user tasks", [
    step("Nexus, what makes this different from a normal app?", "conversation.platform_differentiator", "agent", "different"),
    step("Nexus, explain your brain.", "agent.brain_explained", "agent", "Nexus brain"),
    step("Nexus, run live service check.", "production.live_service_check", "integrations", "Live service check"),
    step("Nexus, show production readiness.", "production.readiness_summary", "admin", "Production readiness"),
    step("Nexus, what can you do for a patient?", "conversation.patient_help", "health", "patient")
  ])
];

function seq(name, steps) {
  return { name, steps };
}

function step(prompt, intent, section, includes) {
  return { prompt, intent, section, includes };
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let index = 0; index < 90; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Continuous turn regression server did not become reachable");
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

async function runCommand(prompt) {
  const state = await call("/api/agent/command", {
    command: prompt,
    inputMode: "voice",
    outputMode: "voice",
    conversational: true,
    mode: "user",
    targetLanguage: "en"
  });
  return state.commandResult || {};
}

function responseText(result) {
  return String(result.response || "").replace(/\s+/g, " ").trim();
}

function assertStep(sequenceName, stepIndex, expected, result) {
  const text = responseText(result);
  const label = `${sequenceName} #${stepIndex + 1}: ${expected.prompt}`;
  assert.equal(result.intent, expected.intent, `${label} routed to ${result.intent}, expected ${expected.intent}. Response: ${text}`);
  assert.equal(result.metadata?.redirectSection, expected.section, `${label} redirected to ${result.metadata?.redirectSection}, expected ${expected.section}. Response: ${text}`);
  assert(text.length > 16, `${label} gave too little guidance: "${text}"`);
  assert(!weakPattern.test(text), `${label} collapsed into a one-word response: "${text}"`);
  assert(!stalePattern.test(text), `${label} used stale fallback text: "${text}"`);
  assert(text.toLowerCase().includes(String(expected.includes).toLowerCase()), `${label} should include "${expected.includes}", got "${text}"`);
}

(async () => {
  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: tempDb, OPENAI_API_KEY: "" },
    stdio: "ignore",
    windowsHide: true
  });

  const failures = [];
  const results = [];
  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });

    for (const sequence of sequences) {
      for (const [index, expected] of sequence.steps.entries()) {
        try {
          const result = await runCommand(expected.prompt);
          assertStep(sequence.name, index, expected, result);
          results.push({ sequence: sequence.name, prompt: expected.prompt, intent: result.intent, section: result.metadata?.redirectSection });
        } catch (error) {
          failures.push({ sequence: sequence.name, index: index + 1, prompt: expected.prompt, error: error.message });
        }
      }
    }

    if (failures.length) {
      console.error(JSON.stringify({ status: "failed", passed: results.length, total: sequences.reduce((sum, item) => sum + item.steps.length, 0), failures }, null, 2));
      process.exitCode = 1;
      return;
    }

    console.log(JSON.stringify({
      status: "passed",
      score: `${results.length}/${results.length}`,
      sequences: sequences.length,
      turns: results.length
    }, null, 2));
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Windows may hold the temp DB briefly after shutdown.
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
