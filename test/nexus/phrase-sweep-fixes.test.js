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

test("'She has heavy bleeding' gets the urgent answer from the older route and the tools; a cow with heavy bleeding does not get a person's script", () => {
  assert.equal(spoken.isHeavyBleeding("She has heavy bleeding"), true);
  assert.equal(spoken.isHeavyBleeding("he is losing a lot of blood"), true);
  assert.equal(spoken.isHeavyBleeding("a little bleeding from a scratch"), false);
  const { urgentHealthSafetyResponse } = load(["normalizeSpeechForIntent", "emergencyCallLead", "emergencyNumberFor", "urgentHealthSafetyResponse"], {
    withoutNegatedSymptoms: care.withoutNegatedSymptoms, spokenRequests: spoken, ownPendingAction: () => null, rememberAgentMemory: () => {}
  });
  const db = { profile: { agentMemory: {} } };
  const urgent = urgentHealthSafetyResponse(db, { country: "Kenya" }, "She has heavy bleeding");
  assert.ok(urgent && /999 or 112/.test(urgent.response));
  assert.equal(urgentHealthSafetyResponse(db, { country: "Kenya" }, "my cow has heavy bleeding"), null);
  // the provider-free fallback of the typed route uses these same readers: the capabilities list's danger signs are all caught without a provider
  assert.match(urgentHealthSafetyResponse(db, { country: "Kenya" }, "I have chest pain").response, /999 or 112/);
  const { urgentWordsWithoutProvider } = load(["urgentWordsWithoutProvider"], { careSafetyReply: async text => /fitting/.test(text) ? { reply: "A child with these signs needs a health worker now." } : null, urgentHealthSafetyResponse: (d, u, text) => urgentHealthSafetyResponse({ profile: { agentMemory: {} } }, u, text) });
  return Promise.all([urgentWordsWithoutProvider("My child is fitting", {}), urgentWordsWithoutProvider("She has heavy bleeding", { country: "Kenya" }), urgentWordsWithoutProvider("what is the maize price", {})]).then(([fit, bleed, none]) => {
    assert.match(fit, /health worker now/); assert.match(bleed, /999 or 112/); assert.equal(none, null);
  });
});

test("the tool hint the model is given does not call a body temperature in a visit note a weather question", () => {
  const { nexusOpenAiNativeToolChoiceHint } = load(["nexusOpenAiNativeToolChoiceHint"], { spokenRequests: spoken });
  assert.notEqual(nexusOpenAiNativeToolChoiceHint("Visit Mary: temperature 38.5, cough"), "nexus_weather");
  assert.equal(nexusOpenAiNativeToolChoiceHint("What is the weather in Kisumu?"), "nexus_weather");
  assert.equal(nexusOpenAiNativeToolChoiceHint("What is the temperature in Kisumu?"), "nexus_weather");
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

test("the Kiswahili music preference 'kuanzia sasa' (from now on) keeps its last word, so it sets the preference and does not try to play a song", () => {
  const media = require("../../public/kyro-media-commands.js");
  assert.deepEqual({ ...media.parse("Cheza muziki kwenye YouTube kuanzia sasa") }, { type: "preference", key: "playIn", value: "youtube", lang: "sw" });
  assert.deepEqual({ ...media.parse("Cheza muziki kwenye Kyro daima") }, { type: "preference", key: "playIn", value: "kyro", lang: "sw" });
  // a trailing 'sasa' (now) elsewhere is still politeness and still dropped
  assert.equal(media.parse("Cheza Sauti Sol Melanin sasa").query, "Sauti Sol Melanin");
  assert.equal(media.parse("Ongeza sauti sasa").control, "volume-up");
  assert.equal(media.parse("Play music in YouTube from now on").type, "preference");
});

test("'Antenatal visit Mary: ...' (the phrase the pregnancy reply itself suggests) records a visit", async () => {
  const { healthWorkTurn } = require("../../nexus/healthwork/index.js");
  const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");
  const store = fakeFarmStore(); const memory = fakeMemory();
  const say = text => healthWorkTurn({ text, store, tenantId: "t1", userId: "u1", now: new Date("2026-09-20T05:00:00Z"), timeZone: "Africa/Nairobi", memory, nameOf: async () => "Amina Wanjiru" });
  await say("Register a patient called Mary Akinyi, 34, female, Kibera"); await say("skip");
  assert.match(await say("Mary is pregnant, due 12 March"), /Recorded: Mary Akinyi/);
  assert.match(await say("Antenatal visit Mary: blood pressure fine, baby moving"), /Recorded visit 1 for Mary Akinyi/);
  assert.match(await say("Postnatal visit Mary: feeding well"), /Recorded visit 2 for Mary Akinyi/);
  // a name that is not a patient is still not taken for a visit unless the words are explicit, as before
  assert.equal(await say("Visit Nairobi: nice city"), null);
});

test("a patient note sent to the health tool is not read as the speaker's own temperature, and the planner is asked only when no health branch understood the sentence", () => {
  assert.equal(spoken.isPatientNote("Visit Mary: temperature 38.5, cough"), true);
  assert.equal(spoken.isPatientNote("Antenatal visit Mary: temperature 38"), true);
  assert.equal(spoken.isPatientNote("Ziara ya Mary: homa, kikohozi"), true);
  assert.equal(spoken.isPatientNote("my temperature is 38.5"), false);
  assert.match(source, /!spokenRequests\.isPatientNote\(command\) && command\.match\(/);
  assert.match(source, /response = chronicConditionEducationResponse\(command\);\n[\s\S]{0,900}if \(!response && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
});

test("a danger sign whose tool provider is down is still answered in words (typed route), and anything else keeps its error", async () => {
  const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
  const providerDown = () => { const error = new Error("Provider request could not be completed."); error.code = "provider_request_failed"; error.status = 503; throw error; };
  const make = (text, urgentFallback) => createServerRuntimeAdapter({
    resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1", role: "Standard User", permissions: ["tasks:execute"] }),
    readJson: async () => ({ text, channel: "typed" }),
    createRuntimeFn: () => ({ ready: Promise.resolve(), engine: { tasks: {} }, behavior: { turn: async () => providerDown() } }),
    urgentFallback
  });
  const send = capture => (_res, status, body) => { capture.status = status; capture.body = body; };
  const urgent = {};
  await make("I have chest pain", async text => /chest pain/.test(text) ? "Call emergency services now if available (999 or 112 in Kenya)." : null).handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/behavior/turn"), send(urgent));
  assert.equal(urgent.status, 200);
  assert.equal(urgent.body.state, "completed");
  assert.match(urgent.body.response, /999 or 112/);
  assert.equal(urgent.body.outcome.verified, false, "an answer given without the provider is not claimed as a verified outcome");
  // a sentence that is not urgent keeps the 503 exactly as before
  const plain = {};
  await make("what is the maize price", async () => null).handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/behavior/turn"), send(plain));
  assert.equal(plain.status, 503);
  // and with no fallback wired, nothing changes
  const none = {};
  await make("I have chest pain", null).handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/behavior/turn"), send(none));
  assert.equal(none.status, 503);
  assert.match(source, /urgentFallback: async \(text, authUser\) => urgentWordsWithoutProvider\(text, authUser\)/);
});

test("'9 am' answering 'At 9 in the morning or in the evening?' finishes the reminder it answers (typed and spoken routes keep no other state)", () => {
  const { completeAmbiguousHour } = require("../../nexus/reminders/pending-hour.js");
  const asked = 'At 9 in the morning or in the evening? Say, for example, "9 in the evening" or "9 am". Nothing was set yet.';
  const history = [{ role: "user", content: "Remind me tomorrow at 9 to pay the school fees" }, { role: "assistant", content: asked }];
  assert.equal(completeAmbiguousHour("9 am", history), "Remind me tomorrow at 9 am to pay the school fees");
  assert.equal(completeAmbiguousHour("9 in the evening", history), "Remind me tomorrow at 9 pm to pay the school fees");
  assert.equal(completeAmbiguousHour("at 9 pm", history), "Remind me tomorrow at 9 pm to pay the school fees");
  assert.equal(completeAmbiguousHour("9:30 am", [{ role: "user", content: "remind me at 9:30 to call" }, { role: "assistant", content: "At 9:30 in the morning or in the evening? Nothing was set yet." }]), "remind me at 9:30 am to call");
  // not that answer: a different hour, no question just asked, an ordinary sentence
  assert.equal(completeAmbiguousHour("5 pm", history), null);
  assert.equal(completeAmbiguousHour("9 am", [{ role: "user", content: "hello" }, { role: "assistant", content: "Hello, how can I help?" }]), null);
  assert.equal(completeAmbiguousHour("what is the weather", history), null);
  assert.equal(completeAmbiguousHour("9 am", []), null);
  const planner = fs.readFileSync(path.join(__dirname, "../../nexus/brain/planner.js"), "utf8");
  assert.match(planner, /const hourCompleted = completeAmbiguousHour\(command\?\.text, conversationHistory\);\n\s+if \(hourCompleted\) command = \{ \.\.\.command, text: hourCompleted \};/);
});

test("a provider that is switched off is described in plain words, never with an environment variable name", () => {
  assert.equal(spoken.isInternalSwitchedOffMessage("twilio sms.send is disabled. Enable NEXUS_SMS_ENABLED=true for controlled testing."), true);
  assert.equal(spoken.isInternalSwitchedOffMessage("generic email.send is disabled. Enable NEXUS_EMAIL_ENABLED=true for controlled testing."), true);
  assert.equal(spoken.isInternalSwitchedOffMessage("Listing created."), false);
  assert.equal(spoken.isInternalSwitchedOffMessage("Sent."), false);
  const { nexusOpenAiNativeProviderToolResult } = load(["nexusOpenAiNativeProviderToolResult"], { spokenRequests: spoken, nexusOpenAiNativeToolReceipt: () => ({}) });
  const off = nexusOpenAiNativeProviderToolResult({}, { toolName: "nexus_communications", command: "Text John I am late" }, { body: { ok: false, provider: "twilio", action: "sms.send", status: "disabled", disabled: true, message: "twilio sms.send is disabled. Enable NEXUS_SMS_ENABLED=true for controlled testing." } });
  assert.equal(off.response, "Sending texts is not switched on for this account yet, so nothing was sent or changed.");
  assert.ok(!/NEXUS_|twilio|sms\.send/.test(off.response));
  assert.equal(off.executionAttempted, false);
  assert.equal(spoken.plainSwitchedOffSentence({ provider: "x", action: "call.start" }), "Phone calls are not switched on for this account yet, so nothing was sent or changed.");
});
