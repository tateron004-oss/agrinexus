const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "..");
const port = Number(process.env.NEXUS_CONVERSATION_CERT_PORT || 4431);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-nexus-conversation-cert-db.json");
let cookie = "";

const staleFallbackPattern = /I may have heard only part of that|Say health, learning, work, trade, map, or AI help|would you like me to do that now|should I do that now|AI step is ready|I heard that would you like|I reset the voice route/i;
const weakResponsePattern = /^(ok|okay|yes|got it|done)\.?$/i;

const singleTurnCases = [
  // Core assistant behavior
  c("core", "Nexus, can you hear me?", ["conversation.hearing_check"], "dashboard", ["can hear"]),
  c("core", "hello nexus this is Ron", ["conversation.greeting"], "dashboard", ["Hello Ron"]),
  c("core", "good morning", ["conversation.greeting"], "dashboard", ["Good morning"]),
  c("core", "Nexus, explain AgriNexus.", ["conversation.platform_explained"], "agent", ["AgriNexus helps people"]),
  c("core", "explain agrinexus", ["conversation.platform_explained"], "agent", ["AgriNexus helps people"]),
  c("core", "what can you do", ["conversation.capability_summary"], "dashboard", ["agriculture"]),
  c("core", "what can do", ["conversation.capability_summary"], "dashboard", ["agriculture"]),
  c("core", "Nexus, explain your brain.", ["agent.brain_explained"], "agent", ["Nexus brain"]),
  c("core", "Nexus, stop.", ["conversation.paused"], "dashboard", ["Paused"]),
  c("core", "Nexus home", ["conversation.home"], "dashboard", ["Home is open"]),

  // Weather and everyday utility wording
  c("weather", "Nexus, what is the weather in Nairobi?", ["conversation.daily_life_advisor"], "health", ["Nairobi"]),
  c("weather", "Nexus, what's the weather like in Nairobi?", ["conversation.daily_life_advisor"], "health", ["Nairobi"]),
  c("weather", "What's the weather like in Nairobi?", ["conversation.daily_life_advisor"], "health", ["Nairobi"]),
  c("weather", "Weather in Nairobi.", ["conversation.daily_life_advisor"], "health", ["Nairobi"]),
  c("weather", "Nexus, is it too hot to walk in Nairobi?", ["conversation.daily_life_advisor"], "health", ["Nairobi"]),
  c("weather", "Nexus, weather like Addis Ababa", ["conversation.daily_life_advisor"], "health", ["Addis"]),
  c("weather", "Nexus, rain forecast in Lagos", ["conversation.daily_life_advisor"], "health", ["Lagos"]),

  // Health, telehealth, mobile clinic, pharmacy
  c("health", "Nexus, I need a doctor.", ["conversation.doctor_help"], "health", ["I heard you need a doctor"]),
  c("health", "doctor please", ["conversation.doctor_help"], "health", ["not a diagnosis"]),
  c("health", "daktari", ["conversation.doctor_help"], "health", ["not a diagnosis"]),
  c("health", "Nexus, I need medicine.", ["conversation.medicine_help"], "health", ["I heard you need medicine"]),
  c("health", "medicine need", ["conversation.medicine_help"], "health", ["I heard you need medicine"]),
  c("health", "dawa", ["conversation.medicine_help"], "health", ["I heard you need medicine"]),
  c("health", "necesito medicina", ["conversation.medicine_help"], "health", ["I heard you need medicine"]),
  c("health", "Nexus, find a clinic near me.", ["conversation.clinic_map_help"], "map", ["village"]),
  c("health", "clinic near", ["conversation.clinic_map_help"], "map", ["village"]),
  c("health", "clinica cerca", ["conversation.clinic_map_help"], "map", ["village"]),
  c("health", "kliniki karibu", ["conversation.clinic_map_help"], "map", ["village"]),
  c("health", "Nexus, show pharmacy on the map.", ["conversation.clinic_map_help"], "map", ["village"]),
  c("health", "Nexus, start health intake.", ["conversation.health_intake"], "health", ["cannot make medical decisions"]),
  c("health", "intake", ["conversation.health_intake"], "health", ["I heard intake"]),
  c("health", "Nexus, explain mobile clinic support.", ["conversation.mobile_clinic_help"], "health", ["Mobile clinic"]),
  c("health", "Nexus, build captions for telehealth.", ["conversation.telehealth_captions"], "health", ["captions"]),
  c("health", "Nexus, no English, baby sick, help.", ["conversation.health_urgent_safety"], "health", ["urgent"]),
  c("health", "Nexus, I cannot read. Help me with health intake.", ["conversation.health_intake"], "health", ["cannot make medical decisions"]),
  c("health", "Nexus, what can you do for a patient?", ["conversation.patient_help"], "health", ["For a patient"]),
  c("health", "Nexus, explain this to a healthcare partner.", ["conversation.healthcare_partner_explain"], "health", ["healthcare partner"]),

  // Learning
  c("learning", "Nexus, start my course.", ["conversation.learning_start"], "learning", ["course support"]),
  c("learning", "start a course", ["conversation.learning_start"], "learning", ["course support"]),
  c("learning", "course", ["conversation.learning_start"], "learning", ["I heard learning"]),
  c("learning", "want learn", ["conversation.learning_start"], "learning", ["help you learn"]),
  c("learning", "somo", ["conversation.learning_start"], "learning", ["help you learn"]),
  c("learning", "Nexus, read the lesson for me.", ["learning.lesson_read_aloud"], "learning", ["lesson reader"]),
  c("learning", "Nexus, build captions.", ["learning.caption_workflow"], "learning", ["Caption workflow"]),
  c("learning", "Nexus, complete my lesson.", ["learning.lesson_progress"], "learning", ["Lesson progress"]),
  c("learning", "Nexus, issue my certificate.", ["learning.certificate"], "learning", ["certificate"]),

  // Workforce
  c("workforce", "Nexus, I need work.", ["conversation.workforce_help"], "workforce", ["help with work"]),
  c("workforce", "I need work.", ["conversation.workforce_help"], "workforce", ["help with work"]),
  c("workforce", "job please", ["conversation.workforce_help"], "workforce", ["help with work"]),
  c("workforce", "kazi", ["conversation.workforce_help"], "workforce", ["help with work"]),
  c("workforce", "trabajo", ["conversation.workforce_help"], "workforce", ["help with work"]),
  c("workforce", "work needed", ["conversation.workforce_help"], "workforce", ["I heard work"]),
  c("workforce", "apply", ["workforce.application_help"], "workforce", ["I heard apply"]),
  c("workforce", "Nexus, help me apply for a job.", ["workforce.application_help"], "workforce", ["application support"]),
  c("workforce", "Nexus, prepare me for an interview.", ["workforce.interview_prep"], "workforce", ["Interview preparation"]),
  c("workforce", "Nexus, I graduated in biochemistry. What jobs can I apply for in Kenya or South Africa?", ["workforce.career_reasoning"], "workforce", ["biochemistry"]),

  // Trade, crop, drone, logistics
  c("trade", "Nexus, my crop is bad.", ["conversation.crop_help"], "trade", ["crop problem"]),
  c("trade", "crop bad", ["conversation.crop_help"], "trade", ["crop problem"]),
  c("trade", "shamba mbaya", ["conversation.crop_help"], "trade", ["crop problem"]),
  c("trade", "crop damage", ["conversation.crop_help"], "trade", ["I heard crop damage"]),
  c("trade", "Nexus, help me sell my crop.", ["conversation.crop_sale_help"], "trade", ["help sell the crop"]),
  c("trade", "Nexus, help me sell my maize.", ["conversation.crop_sale_help"], "trade", ["help sell the crop"]),
  c("trade", "sell crop", ["conversation.crop_sale_help"], "trade", ["help sell the crop"]),
  c("trade", "kuuza mazao", ["conversation.crop_sale_help"], "trade", ["help sell the crop"]),
  c("trade", "Nexus, contact the buyer.", ["trade.buyer_contact"], "trade", ["buyer contact"]),
  c("trade", "Nexus, send SMS to the buyer.", ["communications.sms_buyer_ready"], "trade", ["SMS to the buyer"]),
  c("trade", "Nexus, send WhatsApp to the seller.", ["communications.whatsapp_seller_ready"], "trade", ["WhatsApp to the seller"]),
  c("trade", "Nexus, track my shipment.", ["map.live_route_tracking"], "map", ["shipment tracking"]),
  c("trade", "Nexus, run drone scan.", ["drone.field_scan"], "trade", ["Drone scan"]),
  c("trade", "Nexus, explain the crop evidence in simple words.", ["conversation.crop_evidence_simple"], "trade", ["crop evidence"]),

  // Maps and routes
  c("map", "Nexus, open full scale map.", ["conversation.map_open"], "map", ["Full map is open"]),
  c("map", "open the map", ["conversation.map_open"], "map", ["Full map is open"]),
  c("map", "map please", ["conversation.map_open"], "map", ["Full map is open"]),
  c("map", "ramani", ["conversation.map_open"], "map", ["Full map is open"]),
  c("map", "Nexus, open map of Kenya.", ["map.country_open"], "map", ["map for Kenya"]),
  c("map", "Nexus, show Nigeria on the map.", ["map.country_open"], "map", ["map for Nigeria"]),
  c("map", "Nexus, open map of Ghana.", ["map.country_open"], "map", ["map for Ghana"]),
  c("map", "Nexus, show me the DRC map.", ["map.country_open"], "map", ["map for DRC"]),
  c("map", "Nexus, map of Egypt.", ["map.country_open"], "map", ["map for Egypt"]),
  c("map", "Nexus, show trade route from Kenya to Nigeria.", ["map.buyer_seller_location_route"], "map", ["Kenya to Nigeria"]),
  c("map", "Nexus, show me a trade route from Mombassa Kenya to Nairobi Kenya.", ["map.buyer_seller_location_route"], "map", ["Mombassa Kenya to Nairobi Kenya"]),
  c("map", "Nexus, track route from farm to market.", ["map.live_route_tracking"], "map", ["farm-to-market route"]),
  c("map", "Nexus, show clinic and pharmacy on the map.", ["conversation.clinic_map_help"], "map", ["village"]),
  c("map", "Nexus, use my location.", ["map.location_permission"], "map", ["location"]),

  // Languages
  c("language", "Nexus, switch to French.", ["conversation.language_changed"], "dashboard", ["French is selected"]),
  c("language", "Nexus, switch to Arabic.", ["conversation.language_changed"], "dashboard", ["Arabic is selected"]),
  c("language", "Nexus, switch to Spanish.", ["conversation.language_changed"], "dashboard", ["Spanish is selected"]),
  c("language", "Nexus, switch back to English.", ["conversation.language_changed"], "dashboard", ["English is selected"]),

  // Investor/admin proof that should not become placeholders
  c("proof", "Nexus, run live service check.", ["production.live_service_check"], "integrations", ["Live service check"]),
  c("proof", "Nexus, explain provider readiness.", ["production.provider_readiness"], "integrations", ["Provider readiness"]),
  c("proof", "Nexus, show production readiness.", ["production.readiness_summary"], "admin", ["Production readiness"]),
  c("proof", "Nexus, show reasoning proof.", ["conversation.reasoning_governance_status"], "agent", ["Reasoning proof"]),
  c("proof", "Nexus, what makes this different from a normal app?", ["conversation.platform_differentiator"], "agent", ["different"]),

  // Everyday/music behavior
  c("utility", "Nexus, play Congolese music.", ["utility.music"], "dashboard", ["Congolese music"]),
  c("utility", "Nexus, play Kenyan gospel music.", ["utility.music"], "dashboard", ["Kenyan gospel music"]),
  c("utility", "Nexus, play relaxing music.", ["utility.music"], "dashboard", ["relaxing music"]),
  c("utility", "Nexus, play 90s soul.", ["utility.music"], "dashboard", ["90s soul"]),
  c("utility", "Nexus, stop the music.", ["utility.music_stopped"], "dashboard", ["Music is stopped"])
];

const dialogueCases = [
  d("medicine location", "Nexus, I need medicine.", "Nairobi", ["conversation.location_captured"], "health", ["Nairobi"]),
  d("doctor clinic choice", "Nexus, I need a doctor.", "clinic", ["conversation.clinic_map_help"], "map", ["village"]),
  d("learning topic", "Nexus, start my course.", "farm safety", ["conversation.learning_topic_captured"], "learning", ["farm safety"]),
  d("work detail", "Nexus, I need work.", "Kenya farm work", ["conversation.work_detail_captured"], "workforce", ["Kenya farm work"]),
  d("crop detail", "Nexus, help me sell my crop.", "maize in Kisumu", ["conversation.crop_detail_captured"], "trade", ["maize in Kisumu"]),
  d("weather overrides medicine context", "Nexus, I need medicine.", "Weather in Nairobi.", ["conversation.daily_life_advisor"], "health", ["Nairobi"]),
  d("weather overrides doctor context", "Nexus, I need a doctor.", "What's the weather like in Nairobi?", ["conversation.daily_life_advisor"], "health", ["Nairobi"]),
  d("learning overrides doctor context", "Nexus, I need a doctor.", "start a course", ["conversation.learning_start"], "learning", ["course"]),
  d("work overrides medicine context", "Nexus, I need medicine.", "I need work", ["conversation.workforce_help"], "workforce", ["work"]),
  d("map overrides crop context", "Nexus, my crop is bad.", "open the map", ["conversation.map_open"], "map", ["Full map"]),
  d("language switch back", "Nexus, switch to French.", "Nexus, switch back to English.", ["conversation.language_changed"], "dashboard", ["English is selected"]),
  d("stop then new command", "Nexus, stop.", "Nexus, I need medicine.", ["conversation.medicine_help"], "health", ["medicine"])
];

function c(category, prompt, intents, section, includesAny, options = {}) {
  return { category, prompt, intents, section, includesAny, ...options };
}

function d(name, setup, answer, intents, section, includesAny, options = {}) {
  return { name, setup, answer, intents, section, includesAny, ...options };
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
  throw new Error("Nexus conversation certification server did not become reachable");
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

function assertResult(test, result, label) {
  const text = responseText(result);
  assert(test.intents.includes(result.intent), `${label} should route to ${test.intents.join(" or ")}, got ${result.intent}. Response: ${text}`);
  assert.equal(result.metadata?.redirectSection, test.section, `${label} should redirect to ${test.section}, got ${result.metadata?.redirectSection}. Response: ${text}`);
  assert(text.length > 16, `${label} response is too thin: "${text}"`);
  assert(!weakResponsePattern.test(text), `${label} produced weak one-word response: "${text}"`);
  assert(!staleFallbackPattern.test(text), `${label} fell back to old/stale language: "${text}"`);
  const includes = test.includesAny || [];
  assert(includes.some(needle => text.toLowerCase().includes(String(needle).toLowerCase())), `${label} should include one of ${includes.join(" | ")}, got "${text}"`);
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
  try {
    await waitForServer();
    await call("/api/login", { email: "user@agrinexus.org", password: "User2026!" });

    for (const test of singleTurnCases) {
      try {
        assertResult(test, await runCommand(test.prompt), `${test.category}: ${test.prompt}`);
      } catch (error) {
        failures.push({ type: "single", category: test.category, prompt: test.prompt, error: error.message });
      }
    }

    for (const test of dialogueCases) {
      try {
        await runCommand(test.setup);
        assertResult({ ...test, prompt: `${test.setup} + ${test.answer}` }, await runCommand(test.answer), `dialogue: ${test.name}`);
      } catch (error) {
        failures.push({ type: "dialogue", name: test.name, setup: test.setup, answer: test.answer, error: error.message });
      }
    }

    if (failures.length) {
      console.error(JSON.stringify({ passed: singleTurnCases.length + dialogueCases.length - failures.length, total: singleTurnCases.length + dialogueCases.length, failures }, null, 2));
      process.exitCode = 1;
      return;
    }

    const categoryCounts = singleTurnCases.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
    console.log(JSON.stringify({
      status: "passed",
      score: `${singleTurnCases.length + dialogueCases.length}/${singleTurnCases.length + dialogueCases.length}`,
      percent: 100,
      singleTurn: singleTurnCases.length,
      dialogue: dialogueCases.length,
      categories: categoryCounts
    }, null, 2));
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Windows may hold the temp DB briefly after server shutdown.
    }
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
