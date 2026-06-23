const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.VOICE_RESPONSE_CHECK_PORT || 4424);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-voice-response-check-db.json");
const appSource = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
let cookie = "";

const checks = [
  { prompt: "Goodmorning", intent: "conversation.greeting", section: "dashboard", includes: "Good morning" },
  { prompt: "Hello Nexus, my name is Ron.", intent: "conversation.greeting", section: "dashboard", includes: "Hello Ron, how can I assist you?" },
  { prompt: "Can you hear me?", intent: "conversation.hearing_check", section: "dashboard", includes: "I can hear you" },
  { prompt: "Nexus home", intent: "conversation.home", section: "dashboard", includes: "Home is open" },
  { prompt: "Nexus main menu home", intent: "conversation.home", section: "dashboard", includes: "Home is open" },
  { prompt: "What can you do?", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "What can do?", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "you can do what", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "que puedes hacer", intent: "conversation.capability_summary", section: "agent", includes: "listen in normal words" },
  { prompt: "Explain AgriNexus.", intent: "conversation.platform_explained", section: "agent", includes: "Nexus is the assistant inside Nexus Workforce AI" },
  { prompt: "explain agrinexus", intent: "conversation.platform_explained", section: "agent", includes: "Nexus is the assistant inside Nexus Workforce AI" },
  { prompt: "Nexus, explain AgriNexus.", intent: "conversation.platform_explained", section: "agent", includes: "Nexus is the assistant inside Nexus Workforce AI" },
  { prompt: "Can you explain AgriNexus?", intent: "conversation.platform_explained", section: "agent", includes: "Nexus is the assistant inside Nexus Workforce AI" },
  { prompt: "Tell me what AgriNexus is.", intent: "conversation.platform_explained", section: "agent", includes: "Nexus is the assistant inside Nexus Workforce AI" },
  { prompt: "What is AgriNexus?", intent: "conversation.platform_explained", section: "agent", includes: "Nexus is the assistant inside Nexus Workforce AI" },
  { prompt: "How is AgriNexus different?", intent: "conversation.platform_differentiator", section: "agent", includes: "risky actions behind confirmation" },
  { prompt: "What can you do for a farmer?", intent: "conversation.farmer_help", section: "trade", includes: "For a farmer" },
  { prompt: "What can you for the farmer?", intent: "conversation.farmer_help", section: "trade", includes: "For a farmer" },
  { prompt: "I need medicine.", intent: "conversation.medicine_help", section: "health", includes: "I heard you need medicine" },
  { prompt: "Nexus, I need medicine.", intent: "conversation.medicine_help", section: "health", includes: "I heard you need medicine" },
  { prompt: "I want medicine.", intent: "conversation.medicine_help", section: "health", includes: "I heard you need medicine" },
  { prompt: "medicine need", intent: "conversation.medicine_help", section: "health", includes: "I heard you need medicine" },
  { prompt: "dawa", intent: "conversation.medicine_help", section: "health", includes: "I heard you need medicine" },
  { prompt: "necesito medicina", intent: "conversation.medicine_help", section: "health", includes: "I heard you need medicine" },
  { prompt: "Medicine.", intent: "conversation.medicine_help", section: "health", includes: "I heard you need medicine" },
  { prompt: "Intake.", intent: "conversation.health_intake", section: "health", includes: "I heard intake" },
  { prompt: "Doctor.", intent: "conversation.doctor_help", section: "health", includes: "I heard doctor help" },
  { prompt: "Find a clinic near me.", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "Clinic.", intent: "conversation.clinic_map_help", section: "map", includes: "I heard clinic" },
  { prompt: "Nexus, find a clinic near me.", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "Nexus, show clinic on map.", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "Nexus, show Kenya medical transport townships and villages on the map.", intent: "map.kenya_medical_transport", section: "map", includes: "Kibera" },
  { prompt: "Nexus, find a clinic near Kibera Kenya.", intent: "map.kenya_medical_transport", section: "map", includes: "Kibera" },
  { prompt: "Nexus, show pharmacy on the map.", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "Find me a clinic.", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "clinic near", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "clinica cerca", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "kliniki karibu", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "I need a doctor.", intent: "conversation.doctor_help", section: "health", includes: "I heard you need a doctor" },
  { prompt: "Nexus, I need a doctor.", intent: "conversation.doctor_help", section: "health", includes: "I heard you need a doctor" },
  { prompt: "Nexus, call a provider.", intent: "call.number_needed", section: "agent", includes: "do not have a phone number yet" },
  { prompt: "Nexus, start intake.", intent: "conversation.health_intake", section: "health", includes: "cannot make medical decisions" },
  { prompt: "Nexus, start health intake.", intent: "conversation.health_intake", section: "health", includes: "cannot make medical decisions" },
  { prompt: "doctor please", intent: "conversation.doctor_help", section: "health", includes: "not a diagnosis" },
  { prompt: "daktari", intent: "conversation.doctor_help", section: "health", includes: "not a diagnosis" },
  { prompt: "Nexus, explain mobile clinic support.", intent: "conversation.mobile_clinic_help", section: "health", includes: "Mobile clinic" },
  { prompt: "Explain mobile clinics.", intent: "conversation.mobile_clinic_help", section: "health", includes: "does not dispatch" },
  { prompt: "Nexus, no English, baby sick, help.", intent: "conversation.health_urgent_safety", section: "health", includes: "Call emergency services now" },
  { prompt: "My baby is sick and not breathing.", intent: "conversation.health_urgent_safety", section: "health", includes: "Call emergency services now" },
  { prompt: "Nexus, I cannot read. Help me with health intake.", intent: "conversation.health_intake", section: "health", includes: "cannot make medical decisions" },
  { prompt: "Nexus, build captions for telehealth.", intent: "conversation.telehealth_captions", section: "health", includes: "captions" },
  { prompt: "Nexus, explain this to a healthcare partner.", intent: "conversation.healthcare_partner_explain", section: "health", includes: "healthcare partner" },
  { prompt: "My crop is bad.", intent: "conversation.crop_help", section: "trade", includes: "crop problem" },
  { prompt: "crop bad", intent: "conversation.crop_help", section: "trade", includes: "crop problem" },
  { prompt: "shamba mbaya", intent: "conversation.crop_help", section: "trade", includes: "crop problem" },
  { prompt: "Crop damage.", intent: "conversation.crop_help", section: "trade", includes: "I heard crop damage" },
  { prompt: "Help me sell my crop.", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { prompt: "Sell.", intent: "conversation.crop_sale_help", section: "trade", includes: "I heard crop sale" },
  { prompt: "sell crop", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { prompt: "kuuza mazao", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { prompt: "I need work.", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "job please", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "kazi", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "trabajo", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "Work needed.", intent: "conversation.workforce_help", section: "workforce", includes: "I heard work" },
  { prompt: "Apply.", intent: "workforce.application_help", section: "workforce", includes: "I heard apply" },
  { prompt: "Apply for this job.", intent: "workforce.application_help", section: "workforce", includes: "do not have a selected job" },
  { prompt: "Start a course.", intent: "conversation.learning_start", section: "learning", includes: "course support" },
  { prompt: "Course.", intent: "conversation.learning_start", section: "learning", includes: "I heard learning" },
  { prompt: "want learn", intent: "conversation.learning_start", section: "learning", includes: "help you learn" },
  { prompt: "somo", intent: "conversation.learning_start", section: "learning", includes: "help you learn" },
  { prompt: "Open the map.", intent: "conversation.map_open", section: "map", includes: "Full map is open" },
  { prompt: "map please", intent: "conversation.map_open", section: "map", includes: "Full map is open" },
  { prompt: "ramani", intent: "conversation.map_open", section: "map", includes: "Full map is open" },
  { prompt: "Map.", intent: "conversation.map_open", section: "map", includes: "I heard map" },
  { prompt: "Nexus, open map of Kenya.", intent: "map.country_open", section: "map", includes: "map for Kenya" },
  { prompt: "Nexus, show Nigeria on the map.", intent: "map.country_open", section: "map", includes: "map for Nigeria" },
  { prompt: "Nexus, open map of Ghana.", intent: "map.country_open", section: "map", includes: "map for Ghana" },
  { prompt: "Nexus, show me the DRC map.", intent: "map.country_open", section: "map", includes: "map for DRC" },
  { prompt: "Nexus, map of Egypt.", intent: "map.country_open", section: "map", includes: "map for Egypt" },
  { prompt: "Nexus, what can you do for a patient?", intent: "conversation.patient_help", section: "health", includes: "For a patient" },
  { prompt: "Nexus, help me sell my maize.", intent: "conversation.crop_sale_help", section: "trade", includes: "help sell the crop" },
  { prompt: "Nexus, contact the buyer.", intent: "trade.buyer_contact", section: "trade", includes: "buyer contact" },
  { prompt: "Nexus, track my shipment.", intent: "utility.shipment", section: "map", includes: "Estimated delivery" },
  { prompt: "Nexus, show trade route from Kenya to Nigeria.", intent: "map.buyer_seller_location_route", section: "map", includes: "Kenya to Nigeria" },
  { prompt: "Nexus, show me a trade route from Mombassa Kenya to Nairobi Kenya.", intent: "map.buyer_seller_location_route", section: "map", includes: "Mombassa Kenya to Nairobi Kenya" },
  { prompt: "Nexus, run drone scan.", intent: "drone.field_scan", section: "trade", includes: "Drone scan" },
  { prompt: "Nexus, explain the crop evidence in simple words.", intent: "conversation.crop_evidence_simple", section: "trade", includes: "crop evidence" },
  { prompt: "Nexus, start my course.", intent: "conversation.learning_start", section: "learning", includes: "course support" },
  { prompt: "Nexus, read the lesson for me.", intent: "learning.lesson_read_aloud", section: "learning", includes: "lesson reader" },
  { prompt: "Nexus, build captions.", intent: "learning.caption_workflow", section: "learning", includes: "Caption workflow" },
  { prompt: "Nexus, complete my lesson.", intent: "conversation.pending_action", section: "learning", includes: "Before I mark anything complete" },
  { prompt: "Nexus, issue my certificate.", intent: "conversation.pending_action", section: "learning", includes: "Before I issue it" },
  { prompt: "Nexus, I need work.", intent: "conversation.workforce_help", section: "workforce", includes: "help with work" },
  { prompt: "Nexus, help me apply for a job.", intent: "workforce.application_help", section: "workforce", includes: "application support" },
  { prompt: "Nexus, I graduated in biochemistry. What jobs can I apply for in Kenya or South Africa?", intent: "workforce.career_reasoning", section: "workforce", includes: "biochemistry" },
  { prompt: "Nexus, prepare me for an interview.", intent: "workforce.interview_prep", section: "workforce", includes: "Interview preparation" },
  { prompt: "Nexus, open full scale map.", intent: "conversation.map_open", section: "map", includes: "Full map is open" },
  { prompt: "Nexus, show clinic and pharmacy on the map.", intent: "conversation.clinic_map_help", section: "map", includes: "village" },
  { prompt: "Nexus, track route from farm to market.", intent: "map.live_route_tracking", section: "map", includes: "farm-to-market route" },
  { prompt: "Nexus, what is the weather in Nairobi?", intent: "utility.weather", section: "dashboard", includes: "Nairobi" },
  { prompt: "Nexus, what's the weather like in Nairobi?", intent: "utility.weather", section: "dashboard", includes: "Nairobi" },
  { prompt: "What's the weather like in Nairobi?", intent: "utility.weather", section: "dashboard", includes: "Nairobi" },
  { prompt: "Weather in Nairobi.", intent: "utility.weather", section: "dashboard", includes: "Nairobi" },
  { prompt: "Nexus, switch to French.", intent: "conversation.language_changed", section: "dashboard", includes: "French is selected" },
  { prompt: "Nexus, switch to Arabic.", intent: "conversation.language_changed", section: "dashboard", includes: "Arabic is selected" },
  { prompt: "Nexus, switch to Spanish.", intent: "conversation.language_changed", section: "dashboard", includes: "Spanish is selected" },
  { prompt: "Nexus, switch back to English.", intent: "conversation.language_changed", section: "dashboard", includes: "English is selected" },
  { prompt: "Nexus, run live service check.", intent: "conversation.pending_action", section: "integrations", includes: "run the provider test" },
  { prompt: "Nexus, explain provider readiness.", intent: "utility.pre-provider-readiness", section: "integrations", includes: "Until real providers arrive" },
  { prompt: "Nexus, show production readiness.", intent: "production.readiness_summary", section: "admin", includes: "Production readiness" },
  { prompt: "Nexus, explain your brain.", intent: "agent.brain_explained", section: "agent", includes: "Nexus brain" },
  { prompt: "Nexus, show reasoning proof.", intent: "conversation.reasoning_governance_status", section: "agent", includes: "Reasoning proof" },
  { prompt: "Nexus, what makes this different from a normal app?", intent: "conversation.platform_differentiator", section: "agent", includes: "different" },
  { prompt: "What is regenerative agriculture?", intent: "conversation.regenerative_agriculture_explained", section: "trade", includes: "rebuild soil health" },
  { prompt: "Nexus, send SMS to the buyer.", intent: "conversation.pending_action", section: "trade", includes: "Before I send anything" },
  { prompt: "Nexus, send WhatsApp to the seller.", intent: "conversation.pending_action", section: "trade", includes: "Before I send anything" },
  { prompt: "Nexus, use my location.", intent: "map.location_permission", section: "map", includes: "location" },
  { prompt: "Nexus, show route from Kenya to Nigeria.", intent: "map.buyer_seller_location_route", section: "map", includes: "Kenya to Nigeria" },
  { prompt: "Nexus, play Congolese music.", intent: "utility.music", section: "dashboard", includes: "Congolese music" },
  { prompt: "Nexus, play Kenyan gospel music.", intent: "utility.music", section: "dashboard", includes: "Kenyan gospel music" },
  { prompt: "Nexus, play relaxing music.", intent: "utility.music", section: "dashboard", includes: "relaxing music" },
  { prompt: "Nexus, play 90s soul.", intent: "utility.music", section: "dashboard", includes: "90s soul" },
  { prompt: "Nexus, stop the music.", intent: "utility.music_stopped", section: "dashboard", includes: "Music is stopped" },
  { prompt: "Nexus, pause.", intent: "conversation.paused", section: "dashboard", includes: "Paused" }
];

const dialogueChecks = [
  {
    setup: "Nexus, I need medicine.",
    answer: "Nairobi",
    intent: "conversation.location_captured",
    section: "health",
    includes: "Nairobi"
  },
  {
    setup: "Nexus, I need a doctor.",
    answer: "clinic",
    intent: "conversation.clinic_map_help",
    section: "map",
    includes: "village"
  },
  {
    setup: "Nexus, start my course.",
    answer: "farm safety",
    intent: "conversation.learning_topic_captured",
    section: "learning",
    includes: "farm safety"
  },
  {
    setup: "Nexus, I need work.",
    answer: "Kenya farm work",
    intent: "conversation.work_detail_captured",
    section: "workforce",
    includes: "Kenya farm work"
  },
  {
    setup: "Nexus, help me sell my crop.",
    answer: "maize in Kisumu",
    intent: "conversation.crop_detail_captured",
    section: "trade",
    includes: "maize in Kisumu"
  }
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
  assert(appSource.includes('const OPENAI_TTS_VOICE_FALLBACK = "verse"'), "Nexus web voice should default to the faster natural Verse profile");
  assert(appSource.includes('const NEXUS_TTS_PROFILE_VERSION = "natural-assistant-v2"'), "Nexus should migrate browsers to the natural assistant voice profile");
  assert(appSource.includes("I caught part of that") && appSource.includes("Press the main button") && appSource.includes("Say it in your own words and I'll continue"), "Nexus spoken responses should use natural conversation wording instead of stiff workflow/menu language");
  assert(appSource.includes("function freshLeafletCanvas") && appSource.includes("Workflow map failed to render") && appSource.includes("Health map failed to render"), "Clinic/map voice flows need safe Leaflet crash guards");
  assert(appSource.includes("function nexusPlatformDifferentiatorAnswer") && appSource.includes("risky actions behind confirmation"), "Typed/global platform differentiator prompts need a strong visible answer before clarification");
  assert(appSource.includes("function nexusMobileClinicExplainAnswer") && appSource.includes("does not dispatch or book a live mobile clinic"), "Typed/global mobile clinic explanation prompts must not imply live dispatch");
  assert(appSource.includes("function nexusRegenerativeAgricultureAnswer") && appSource.includes("rebuild soil health"), "Typed/global regenerative agriculture prompts need a visible educational answer");
  assert(appSource.includes("function nexusApplyJobBoundaryAnswer") && appSource.includes("do not have a selected job"), "Typed/global apply-this-job prompts need a no-selected-job boundary");
  assert(appSource.includes("function nexusUrgentChildBreathingAnswer") && appSource.includes("Call emergency services now"), "Typed/global urgent child breathing prompts need emergency-first wording");
  assert(appSource.includes("farmer capability before the generic capability summary"), "Typed/global farmer capability prompts must route before generic capability answers");
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
      assert(!/I may have heard only part of that|Say health, learning, work, trade, map, or AI help|would you like me to do that now|should I do that now|\d+\/7 engine groups are ready/i.test(response), `${check.prompt} must not fall back to old menu language`);
    }
    for (const check of dialogueChecks) {
      await call("/api/agent/command", {
        command: check.setup,
        inputMode: "voice",
        outputMode: "voice",
        conversational: true,
        mode: "user",
        targetLanguage: "en"
      });
      const state = await call("/api/agent/command", {
        command: check.answer,
        inputMode: "voice",
        outputMode: "voice",
        conversational: true,
        mode: "user",
        targetLanguage: "en"
      });
      const result = state.commandResult || {};
      const response = String(result.response || "").replace(/\s+/g, " ");
      assert.strictEqual(result.intent, check.intent, `${check.setup} then ${check.answer} should route to ${check.intent}, got ${result.intent}`);
      assert.strictEqual(result.metadata?.redirectSection, check.section, `${check.setup} then ${check.answer} should redirect to ${check.section}, got ${result.metadata?.redirectSection}`);
      assert(response.includes(check.includes), `${check.setup} then ${check.answer} response should include "${check.includes}", got "${response}"`);
      assert(!/Say health, learning, work, trade, map, or AI help|would you like me to do that now|should I do that now|\d+\/7 engine groups are ready/i.test(response), `${check.setup} then ${check.answer} must not fall back to menu language`);
    }
    console.log("Voice response regression passed");
    for (const check of checks) console.log(`- ${check.prompt} -> ${check.intent}`);
    for (const check of dialogueChecks) console.log(`- ${check.setup} + ${check.answer} -> ${check.intent}`);
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
