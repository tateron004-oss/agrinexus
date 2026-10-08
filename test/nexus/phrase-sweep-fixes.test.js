"use strict";
// Regression tests for what the phrase sweep (scripts/dev/real-runtime/phrases.mjs) found by running every phrase of the capabilities list's "What you can say" on the real server.
// No database, no internet, no port: pure readings, and server.js functions evaluated alone (the established pattern, see account-export-nexus-memory-records.test.js).
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const spoken = require("../../nexus/voice/spoken-requests.js");
const care = require("../../public/kyro-care-phrases.js");
const source = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function extractFunction(name) {
  let start = source.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in server.js`);
  if (source.slice(Math.max(0, start - 6), start) === "async ") start -= 6;
  const parenStart = source.indexOf("(", start);
  let parenDepth = 0; let parenEnd = parenStart;
  for (; parenEnd < source.length; parenEnd += 1) {
    if (source[parenEnd] === "(") parenDepth += 1;
    else if (source[parenEnd] === ")") { parenDepth -= 1; if (parenDepth === 0) break; }
  }
  const bodyStart = source.indexOf("{", parenEnd);
  let depth = 0; let i = bodyStart;
  for (; i < source.length; i += 1) {
    if (source[i] === "{") depth += 1;
    else if (source[i] === "}") { depth -= 1; if (depth === 0) break; }
  }
  return source.slice(start, i + 1);
}
function load(names, context = {}) {
  const sandbox = { console, ...context };
  vm.createContext(sandbox);
  vm.runInContext(`${names.map(extractFunction).join("\n")}\nglobalThis.__exports = { ${names.join(", ")} };`, sandbox);
  return sandbox.__exports;
}

test("the Kiswahili weather phrase names its place", () => {
  assert.equal(spoken.swahiliWeatherLocation("Hali ya hewa Kisumu ikoje?"), "Kisumu");
  assert.equal(spoken.swahiliWeatherLocation("hali ya hewa ya Nairobi leo"), "Nairobi");
  assert.equal(spoken.swahiliWeatherLocation("Hali ya hewa kesho Mombasa"), "Mombasa");
  // no place named: nothing invented
  assert.equal(spoken.swahiliWeatherLocation("Hali ya hewa ikoje?"), "");
  assert.equal(spoken.swahiliWeatherLocation("hali ya hewa leo"), "");
  assert.equal(spoken.swahiliWeatherLocation("nimeuza mahindi"), "");
  // wired into both weather readers
  assert.match(source, /locationMatch\?\.\[1\] \|\| args\.query \|\| spokenRequests\.swahiliWeatherLocation\(command\)/);
  assert.match(source, /return spokenRequests\.swahiliWeatherLocation\(compact\);/);
});

test("a body temperature in a visit note is not a weather question", () => {
  assert.equal(spoken.isBodyTemperatureReport("Visit Mary: temperature 38.5, cough"), true);
  assert.equal(spoken.isBodyTemperatureReport("her temperature is 39"), true);
  assert.equal(spoken.isBodyTemperatureReport("What is the temperature in Kisumu?"), false);
  assert.equal(spoken.isBodyTemperatureReport("weather temperature 30 in Nakuru"), false);
  assert.equal(spoken.isBodyTemperatureReport("temperature 30"), false);
  assert.match(source, /if \(spokenRequests\.isBodyTemperatureReport\(raw\)\) return "";/);
});

test("'blood pressure fine, baby moving' is a reading, not bleeding; real bleeding still counts", () => {
  assert.equal(spoken.bloodMeansDanger("antenatal visit mary blood pressure fine baby moving"), false);
  assert.equal(spoken.bloodMeansDanger("my blood sugar is high"), false);
  assert.equal(spoken.bloodMeansDanger("she is vomiting blood"), true);
  assert.equal(spoken.bloodMeansDanger("there is blood on the floor"), true);
  // the real urgent-answer function: the visit note gets no emergency script, a baby with blood does
  const { urgentHealthSafetyResponse } = load(["normalizeSpeechForIntent", "emergencyCallLead", "emergencyNumberFor", "urgentHealthSafetyResponse"], {
    withoutNegatedSymptoms: care.withoutNegatedSymptoms, spokenRequests: spoken, ownPendingAction: () => null, rememberAgentMemory: () => {}
  });
  const db = { profile: { agentMemory: {} } };
  assert.equal(urgentHealthSafetyResponse(db, { country: "Kenya" }, "Antenatal visit Mary: blood pressure fine, baby moving"), null);
  const urgent = urgentHealthSafetyResponse(db, { country: "Kenya" }, "my baby is sick and there is blood in the nappy");
  assert.ok(urgent && /999 or 112/.test(urgent.response));
});

test("asking to play an artist whose name starts like 'burn' is not first aid for a burn", () => {
  assert.equal(care.careSign("Play Burna Boy Last Last"), null);
  assert.equal(care.careSign("Hey Kyro, please play Burna Boy"), null);
  assert.equal(care.careSign("Cheza Burna Boy"), null);
  // a child who is really burnt still is
  assert.equal(care.careSign("my son burnt his hand in hot water")?.category, "burn");
});

test("the Kiswahili way to post a listing is a listing, and browsing questions stay browsing", () => {
  assert.equal(spoken.wantsListingCreate("Weka tangazo: ninauza kilo 500 za mahindi kwa shilingi 40 kwa kilo"), true);
  assert.equal(spoken.wantsListingCreate("Post for sale: 500 kg maize at 40 per kg"), true);
  assert.equal(spoken.wantsListingCreate("What is for sale on AgriTrade?"), false);
  assert.equal(spoken.wantsListingCreate("Did you sell my tomatoes yet?"), false);
  assert.equal(spoken.wantsListingCreate("show me what is available"), false);
  assert.match(source, /spokenRequests\.wantsListingCreate\(command\)\) \{/);
});

test("a provider's internal 'requires explicit confirmed: true' sentence is never what the person hears", () => {
  assert.equal(spoken.isInternalConfirmationMessage("nexus-marketplace-bridge marketplace.listing requires explicit confirmed: true before controlled testing can run."), true);
  assert.equal(spoken.isInternalConfirmationMessage("Listing created."), false);
  const sentence = spoken.plainConfirmationSentence("Post for sale: 500 kg maize at 40 per kg");
  assert.match(sentence, /Say yes to do it, or no to cancel/);
  assert.ok(!/confirmed|controlled testing|nexus-|marketplace\./i.test(sentence));
  const { nexusOpenAiNativeProviderToolResult } = load(["nexusOpenAiNativeProviderToolResult"], { spokenRequests: spoken, nexusOpenAiNativeToolReceipt: () => ({}) });
  const result = nexusOpenAiNativeProviderToolResult({}, { toolName: "nexus_marketplace_logistics", command: "Post for sale: 500 kg maize at 40 per kg" }, {
    body: { ok: false, provider: "nexus-marketplace-bridge", action: "marketplace.listing", status: "confirmation_required", requiresConfirmation: true, message: "nexus-marketplace-bridge marketplace.listing requires explicit confirmed: true before controlled testing can run." }
  });
  assert.equal(result.requiresConfirmation, true);
  assert.match(result.response, /Say yes to do it/);
  assert.ok(!/confirmed: true/.test(result.response));
  // any other provider message is passed through untouched
  const other = nexusOpenAiNativeProviderToolResult({}, { toolName: "x", command: "c" }, { body: { ok: true, status: "completed", message: "Listing created." } });
  assert.equal(other.response, "Listing created.");
});

test("a Kiswahili answer from the older route gets no English 'Got it.' in front and no English hint behind", () => {
  const behavior = { id: "b", tone: "t", audience: "a", currentPersona: "learner", communicationStyle: "c", accessibilityMode: "standard", interactionStyle: "i", turnPattern: [] };
  const { humanizeAgentResult } = load(["humanizeAgentResult"], {
    updateConversationUserModel: () => {}, assistantBehaviorModel: () => behavior,
    adaptiveBehaviorNudge: () => "You can ask me to contact the buyer, check the field, plan the route, or explain the crop evidence.",
    suggestedRepliesForResult: () => []
  });
  const db = { profile: {} };
  const sw = humanizeAgentResult(db, {}, { response: "Sawa. Nitakukumbusha kuangalia jiko baada ya nusu saa." }, "nikumbushe baada ya nusu saa kuangalia jiko", { language: "sw" });
  assert.equal(sw.response, "Sawa. Nitakukumbusha kuangalia jiko baada ya nusu saa.");
  const swKe = humanizeAgentResult(db, {}, { response: "Samahani, sikuweza kufanya hilo." }, "acha", { language: "sw-KE" });
  assert.ok(!/Got it|You can ask me/.test(swKe.response));
  // English is unchanged: the prefix and the hint stay
  const en = humanizeAgentResult(db, {}, { response: "Noted: pump needs a new seal." }, "note that the pump needs a new seal", { language: "en" });
  assert.match(en.response, /^Got it\. Noted: pump needs a new seal\. You can ask me/);
  assert.match(source, /humanizeAgentResult\(db, user, ensureSpeakableAgentResult\(rawResult\), command, \{ language: commandLanguage \}\)/);
});

test("the wellness log's sentences are recognised, and the health tool hands them to the planner", () => {
  for (const phrase of ["I ran 5 km in 30 minutes", "I slept 7 hours", "I drank 2 litres of water", "My goal is 4 workouts a week", "How many workouts this week?", "How did I sleep this week?", "Show my training log", "Undo my last workout"]) {
    assert.equal(spoken.isWellnessLogRequest(phrase), true, phrase);
  }
  for (const phrase of ["my weight is 68 kilos", "my blood pressure is 140 over 90", "I ran out of seed", "Find a clinic near Kisumu", "Create a training plan"]) {
    assert.equal(spoken.isWellnessLogRequest(phrase), false, phrase);
  }
  // the planner bridge set itself is unchanged (the marketplace, health and other tools keep their own routes, see orb-catchall-tool.test.js); this is a separate, narrow hand-over
  assert.match(source, /toolName === "nexus_health_preparation" && typeof spokenRequests !== "undefined" && spokenRequests\.isWellnessLogRequest\(command\)/);
});

test("danger signs said to the health or farm tool get the safety answer, and a sick animal is never given a person's first aid", async () => {
  const calls = [];
  const { toolUrgentSafetyAnswer } = load(["toolUrgentSafetyAnswer"], {
    careSafetyReply: async text => { calls.push(["care", text]); return /fitting/.test(text) ? { kind: "care", reply: "A child with these signs needs a health worker now." } : null; },
    urgentHealthSafetyResponse: (db, user, text) => { calls.push(["urgent", text]); return /heavy bleeding/.test(text) ? { intent: "conversation.health_urgent_safety", response: "Call emergency services now if available (999 or 112 in Kenya)." } : null; }
  });
  const fit = await toolUrgentSafetyAnswer({}, {}, "nexus_health_preparation", "My child is fitting");
  assert.match(fit.response, /health worker now/);
  const bleed = await toolUrgentSafetyAnswer({}, {}, "nexus_health_preparation", "She has heavy bleeding");
  assert.match(bleed.response, /999 or 112/);
  // the farm tool only gets the companion reader (which keeps the animal rule), never the person-only urgent reader
  calls.length = 0;
  assert.equal(await toolUrgentSafetyAnswer({}, {}, "nexus_agriculture", "my cow has heavy bleeding"), null);
  assert.deepEqual(calls.map(call => call[0]), ["care"]);
  // other tools are untouched
  assert.equal(await toolUrgentSafetyAnswer({}, {}, "nexus_weather", "My child is fitting"), null);
  assert.match(source, /const urgent = await toolUrgentSafetyAnswer\(db, user, toolName, rawCallerText \|\| command\);/);
});
