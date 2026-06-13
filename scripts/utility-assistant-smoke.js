const assert = require("assert");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const port = Number(process.env.UTILITY_ASSISTANT_SMOKE_PORT || 4404);
const base = `http://127.0.0.1:${port}`;
const sourceDb = path.join(root, "db.json");
const tempDb = path.join(root, "tmp-utility-assistant-smoke-db.json");
let cookie = "";

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForServer() {
  for (let i = 0; i < 80; i += 1) {
    try {
      const res = await fetch(`${base}/api/healthz`);
      if (res.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Utility assistant smoke server did not become reachable");
}

async function call(route, body) {
  const res = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await res.json();
  if (!res.ok) throw new Error(`${route}: ${json.error || res.statusText}`);
  return json;
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
      TWILIO_ACCOUNT_SID: "",
      TWILIO_AUTH_TOKEN: "",
      TWILIO_PHONE_NUMBER: "",
      PUBLIC_BASE_URL: "",
      DEMO_CALL_TO: ""
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await call("/api/login", { email: "demo@agrinexus.org", password: "Prototype2026!" });
    const communicationsReadiness = await call("/api/communications/execution-readiness");
    assert.strictEqual(communicationsReadiness.total, 3, "Communications readiness should cover phone, SMS, and WhatsApp");
    assert(communicationsReadiness.channels.some(item => item.id === "phone" && item.endpoint === "/api/voice/phone/outbound-call"), "Phone readiness should point to outbound call execution");
    assert(communicationsReadiness.channels.some(item => item.id === "sms" && item.endpoint === "/api/notifications/send"), "SMS readiness should point to notification execution");
    assert(communicationsReadiness.channels.some(item => item.id === "whatsapp" && item.endpoint === "/api/notifications/send"), "WhatsApp readiness should point to notification execution");
    const nativeSession = await call("/api/native/voice-runtime", {
      device: { platform: "android", appVersion: "1.2.0", deviceId: "smoke-device" },
      wakeMode: "always-on",
      permissions: {
        microphone: "granted",
        speechRecognition: "granted",
        backgroundAudio: "granted",
        notifications: "granted",
        geolocation: "background",
        camera: "granted",
        secureStorage: "granted"
      },
      pushToken: "smoke-token",
      visibleListeningIndicator: true,
      oneTapOff: true,
      wakeAuditEnabled: true
    });
    assert.strictEqual(nativeSession.nativePermissionSession.status, "native-always-on-ready", "Native permission registration should report always-on ready");
    assert.strictEqual(nativeSession.nativeVoiceRuntime.latestNativeSession.status, "native-always-on-ready", "Native runtime should expose the latest permission session");
    assert(nativeSession.nativeVoiceRuntime.items.some(item => item.id === "always-on-wake" && item.ready), "Always-on wake should become ready after native permission registration");
    const musicStatus = await call("/api/music/spotify/status");
    assert.strictEqual(musicStatus.provider, "spotify", "Music status should expose Spotify as the music provider");
    assert.strictEqual(musicStatus.loginUrl, "/api/music/spotify/login", "Music status should expose the Spotify connection route");
    const utilityBodies = [
      ["utility.time", "Nexus, what time is it?"],
      ["utility.weather", "Nexus, what is the weather for the farmer today?"],
      ["utility.crop-timing", "Nexus, when should I harvest this crop?"],
      ["utility.appointment-reminder", "Nexus, remind me about my telehealth appointment"],
      ["utility.route-delay", "Nexus, are there route delays for my shipment?"],
      ["utility.buyer-message", "Nexus, prepare a buyer message"],
      ["utility.field-alert", "Nexus, give me a field alert"],
      ["utility.health-safety", "Nexus, give me a health safety reminder"],
      ["utility.music", "Nexus, can you play some 90s soul music?"],
      ["utility.situation-agent", "Nexus, manage this situation"],
      ["utility.pre-provider-readiness", "Nexus, what works without providers?"],
      ["utility.shipment", "Nexus, how long until my shipment arrives?"],
      ["utility.appointment", "Nexus, what time is my appointment?"],
      ["utility.daily-plan", "Nexus, what is next today?"],
      ["utility.next-step", "Nexus, what should I do next?"]
    ];
    for (const [intent, command] of utilityBodies) {
      const state = await call("/api/agent/command", {
        command,
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        timeZone: "America/Los_Angeles"
      });
      assert.strictEqual(state.commandResult.intent, intent, `${command} should return ${intent}`);
      assert.strictEqual(state.commandResult.metadata.utilityAssistant, true, `${intent} should be utility-backed`);
      assert.strictEqual(state.commandResult.metadata.situationAgent.mode, "nexus-situation-agent", `${intent} should include Situation Agent mode`);
      assert.strictEqual(state.commandResult.metadata.situationAgent.eightPointModel.length, 8, `${intent} should include all eight Situation Agent elements`);
      if (intent === "utility.pre-provider-readiness") {
        assert.strictEqual(state.commandResult.metadata.preProviderHardening.mode, "nexus-pre-provider-hardening", "pre-provider command should include hardening model");
        assert(state.commandResult.metadata.preProviderHardening.guardrails.length >= 5, "pre-provider hardening should include guardrails");
        assert(state.commandResult.metadata.preProviderHardening.modules.length >= 6, "pre-provider hardening should cover all core modules");
      }
      assert(state.commandResult.response.length > 20, `${intent} should produce a useful spoken answer`);
      assert((state.profile.agentMemory.rememberedContexts || []).some(item => item.intent === intent), `${intent} should be remembered as command evidence`);
    }
    const scheduledReminder = await call("/api/agent/command", {
      command: "Nexus, remind me to call Ron tomorrow at 9 am",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      timeZone: "America/Los_Angeles"
    });
    assert.strictEqual(scheduledReminder.commandResult.intent, "assistant.reminder_scheduled", "Nexus should schedule a personal assistant reminder");
    assert.strictEqual(scheduledReminder.profile.assistantReminders[0].task, "call Ron", "Reminder task should be saved in plain language");
    assert.strictEqual(scheduledReminder.profile.assistantReminders[0].contactName, "Ron", "Reminder should recognize the named contact");
    assert(scheduledReminder.profile.notifications.some(item => item.reminderId === scheduledReminder.profile.assistantReminders[0].id), "Reminder should create an in-app notification");
    const reminderList = await call("/api/agent/command", {
      command: "Nexus, list my reminders",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(reminderList.commandResult.intent, "assistant.reminders_listed", "Nexus should list active reminders");
    assert(reminderList.commandResult.response.includes("call Ron"), "Reminder list should include the saved task");
    const canceledReminder = await call("/api/agent/command", {
      command: "Nexus, cancel reminder",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(canceledReminder.commandResult.intent, "assistant.reminder_canceled", "Nexus should cancel the latest reminder");
    assert.strictEqual(canceledReminder.profile.assistantReminders[0].status, "canceled", "Canceled reminder should remain in history with canceled status");
    const morningBrief = await call("/api/agent/command", {
      command: "Good morning Nexus",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(morningBrief.commandResult.intent, "conversation.personal_assistant_briefing", "Good morning should return a personal assistant briefing");
    assert.strictEqual(morningBrief.commandResult.metadata.briefing.mode, "nexus-personal-assistant-briefing", "Briefing should expose the personal assistant mode");
    assert(morningBrief.commandResult.response.includes("Here is what matters"), "Briefing should use human assistant language");
    const attentionBrief = await call("/api/agent/command", {
      command: "Nexus, what needs my attention today?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(attentionBrief.commandResult.intent, "conversation.personal_assistant_briefing", "Attention checks should route to the personal assistant briefing");
    assert(attentionBrief.commandResult.metadata.briefing.predictive.scoring.score >= 0, "Attention briefing should include predictive intelligence");
    for (const targetLanguage of ["es", "fr", "sw", "ar"]) {
      const state = await call("/api/agent/command", {
        command: "Nexus, what works without providers?",
        conversational: true,
        inputMode: "voice",
        outputMode: "voice",
        targetLanguage,
        timeZone: "America/Los_Angeles"
      });
      assert.strictEqual(state.commandResult.intent, "utility.pre-provider-readiness", `${targetLanguage} should keep the pre-provider intent`);
      assert.strictEqual(state.commandResult.metadata.translatedResponse, true, `${targetLanguage} should return a translated command response`);
      assert.strictEqual(state.commandResult.metadata.translation.targetLanguage, targetLanguage, `${targetLanguage} should be the response target language`);
      assert.notStrictEqual(state.commandResult.response, state.commandResult.metadata.originalResponse, `${targetLanguage} response should not remain English-only`);
      assert.strictEqual(state.commandResult.metadata.preProviderHardening.mode, "nexus-pre-provider-hardening", `${targetLanguage} should preserve the hardening model metadata`);
    }
    const locatedWeather = await call("/api/agent/command", {
      command: "Nexus, what's the temp like?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      location: { latitude: 6.5244, longitude: 3.3792, label: "Lagos", source: "smoke-test" },
      timeZone: "Africa/Lagos"
    });
    assert.strictEqual(locatedWeather.commandResult.intent, "utility.weather", "weather question with coordinates should stay utility.weather");
    assert.strictEqual(locatedWeather.commandResult.metadata.location.label, "Lagos", "weather command should preserve supplied location");
    assert(/current browser location|Lagos|location/i.test(locatedWeather.commandResult.response), "weather response should reference location context");
    const cityWeather = await call("/api/agent/command", {
      command: "Nexus, hows the weather today in Nairobi?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      timeZone: "Africa/Nairobi"
    });
    assert.strictEqual(cityWeather.commandResult.intent, "utility.weather", "city weather should stay utility.weather");
    assert.strictEqual(cityWeather.commandResult.metadata.location.label, "Nairobi, Kenya", "city weather should resolve Nairobi coordinates");
    assert(/Nairobi|weather|degrees/i.test(cityWeather.commandResult.response), "city weather should speak the requested city");
    const music = await call("/api/agent/command", {
      command: "Nexus, can you play some soul music from the 90s?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(music.commandResult.intent, "utility.music", "music requests should be utility-backed");
    assert.strictEqual(music.commandResult.metadata.music.provider, "spotify", "music request should use the Spotify provider contract");
    assert(["needs-spotify-credentials", "needs-spotify-user-auth", "playback-started"].includes(music.commandResult.metadata.music.status), "music request should report Spotify execution state");
    if (music.commandResult.metadata.music.status !== "playback-started") {
      assert.strictEqual(music.commandResult.metadata.testPlayback.type, "browser-web-audio", "music request should expose browser test playback when Spotify is not live");
    }
    assert(/Spotify|music provider|play/i.test(music.commandResult.response), "music request should be honest about Spotify execution or setup");
    const encyclopediaCrop = await call("/api/agent/command", {
      command: "Nexus, what is photosynthesis and why does it matter for maize?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(encyclopediaCrop.commandResult.intent, "conversation.encyclopedia_answered", "farming knowledge should use Encyclopedia Brain");
    assert.strictEqual(encyclopediaCrop.commandResult.metadata.encyclopediaBrain, true, "encyclopedia response should expose brain metadata");
    assert(/sunlight|plant|maize|food/i.test(encyclopediaCrop.commandResult.response), "photosynthesis answer should be useful for a farmer");
    const encyclopediaHealth = await call("/api/agent/command", {
      command: "Nexus, what causes malaria and what should a family know?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(encyclopediaHealth.commandResult.intent, "conversation.encyclopedia_answered", "health education should use Encyclopedia Brain");
    assert(/not diagnose|cannot diagnose|emergency|clinic|mosquito/i.test(encyclopediaHealth.commandResult.response), "health encyclopedia answer should include safety boundaries");
    const translatedEncyclopedia = await call("/api/agent/command", {
      command: "Nexus, what is photosynthesis and why does it matter for maize?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      targetLanguage: "fr"
    });
    assert.strictEqual(translatedEncyclopedia.commandResult.intent, "conversation.encyclopedia_answered", "translated encyclopedia should preserve intent");
    assert.strictEqual(translatedEncyclopedia.commandResult.metadata.translatedResponse, true, "translated encyclopedia response should use translation pipeline");
    assert.notStrictEqual(translatedEncyclopedia.commandResult.response, translatedEncyclopedia.commandResult.metadata.originalResponse, "translated encyclopedia response should not remain English-only");
    const buyerRoute = await call("/api/agent/command", {
      command: "Nexus, a buyer purchased my products in Lagos and I am in Kenya. Track the delivery location.",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(buyerRoute.commandResult.intent, "map.buyer_seller_location_route", "buyer/seller location command should create route packet");
    assert.strictEqual(buyerRoute.commandResult.metadata.redirectSection, "map", "buyer/seller route should open map");
    assert(buyerRoute.commandResult.metadata.packet.destination.label.includes("Lagos"), "route packet should detect Lagos buyer destination");
    assert(buyerRoute.commandResult.metadata.packet.origin.label.includes("Kenya"), "route packet should detect Kenya seller origin");
    assert((buyerRoute.profile.locationRoutePackets || []).length >= 1, "profile should store location route packets");
    assert(buyerRoute.profile.integrationEvents.some(event => event.action === "map.buyer_seller_location_route"), "buyer route should log map evidence");
    const missionBrain = await call("/api/agent/command", {
      command: "Nexus, activate the new mission brain to help sell crops, track route, and message buyer",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(missionBrain.commandResult.intent, "agent.mission_brain", "Mission Brain command should return agent.mission_brain");
    assert.strictEqual(missionBrain.commandResult.metadata.missionBrain.mode, "nexus-mission-brain", "Mission Brain metadata should include the model");
    assert.strictEqual(missionBrain.commandResult.metadata.missionBrain.layers.length, 10, "Mission Brain should include all 10 intelligence layers");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "context-awareness"), "Mission Brain should include context awareness");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "live-provider-reasoning"), "Mission Brain should include live provider reasoning");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "multi-step-mission-planning"), "Mission Brain should include mission planning");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "proactive-alerts"), "Mission Brain should include proactive alerts");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "personal-memory"), "Mission Brain should include personal memory");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "voice-clarification"), "Mission Brain should include voice clarification");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "decision-scoring"), "Mission Brain should include decision scoring");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "real-time-map-intelligence"), "Mission Brain should include map intelligence");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "role-based-intelligence"), "Mission Brain should include role intelligence");
    assert(missionBrain.commandResult.metadata.missionBrain.layers.some(layer => layer.id === "safety-compliance-brain"), "Mission Brain should include safety compliance");
    assert((missionBrain.profile.missionBrainRuns || []).length >= 1, "Mission Brain should persist mission brain runs");
    assert(missionBrain.profile.integrationEvents.some(event => event.action === "agent.mission_brain_planned"), "Mission Brain should log audit evidence");
    const translatedMissionBrain = await call("/api/agent/command", {
      command: "Nexus, activate the new mission brain to help sell crops, track route, and message buyer",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      targetLanguage: "fr"
    });
    assert.strictEqual(translatedMissionBrain.commandResult.metadata.translatedDisplay, true, "Mission Brain should translate display metadata");
    assert.strictEqual(translatedMissionBrain.commandResult.metadata.localized.missionBrain.layers.length, 10, "Localized Mission Brain should include all 10 translated layers");
    assert.notStrictEqual(translatedMissionBrain.commandResult.metadata.localized.missionBrain.layers[0].title, translatedMissionBrain.commandResult.metadata.missionBrain.layers[0].title, "Localized Mission Brain layer title should change from English");
    const trustedOs = await call("/api/agent/command", {
      command: "Nexus, run a trusted operating system review people can rely on",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(trustedOs.commandResult.intent, "agent.trusted_operating_system", "Trusted OS command should return agent.trusted_operating_system");
    assert.strictEqual(trustedOs.commandResult.metadata.trustedOperatingSystem.mode, "nexus-trusted-operating-system", "Trusted OS metadata should include the model");
    assert.strictEqual(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.length, 10, "Trusted OS should include all 10 trust pillars");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "reliable-workflows"), "Trusted OS should include reliable workflows");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "provider-truth"), "Trusted OS should include provider truth");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "safety-guardrails"), "Trusted OS should include safety guardrails");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "role-permissions"), "Trusted OS should include role permissions");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "memory-and-context"), "Trusted OS should include memory and context");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "multilingual-voice"), "Trusted OS should include multilingual voice");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "map-location-intelligence"), "Trusted OS should include map/location intelligence");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "auditability"), "Trusted OS should include auditability");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "failure-recovery"), "Trusted OS should include failure recovery");
    assert(trustedOs.commandResult.metadata.trustedOperatingSystem.pillars.some(pillar => pillar.id === "production-hardening"), "Trusted OS should include production hardening");
    assert((trustedOs.profile.trustedOsReviews || []).length >= 1, "Trusted OS should persist reviews");
    assert(trustedOs.profile.integrationEvents.some(event => event.action === "agent.trusted_os_reviewed"), "Trusted OS should log audit evidence");
    const translatedTrustedOs = await call("/api/agent/command", {
      command: "Nexus, run a trusted operating system review people can rely on",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      targetLanguage: "sw"
    });
    assert.strictEqual(translatedTrustedOs.commandResult.metadata.translatedDisplay, true, "Trusted OS should translate display metadata");
    assert.strictEqual(translatedTrustedOs.commandResult.metadata.localized.trustedOperatingSystem.pillars.length, 10, "Localized Trusted OS should include all 10 translated pillars");
    assert.notStrictEqual(translatedTrustedOs.commandResult.metadata.localized.trustedOperatingSystem.pillars[0].title, translatedTrustedOs.commandResult.metadata.trustedOperatingSystem.pillars[0].title, "Localized Trusted OS pillar title should change from English");
    const translatedBuyerRoute = await call("/api/agent/command", {
      command: "Nexus, a buyer purchased my products in Lagos and I am in Kenya. Track the delivery location.",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice",
      targetLanguage: "es"
    });
    assert.strictEqual(translatedBuyerRoute.commandResult.metadata.translatedDisplay, true, "Buyer route should translate display metadata");
    assert.strictEqual(translatedBuyerRoute.commandResult.metadata.localized.packet.nextSteps.length, translatedBuyerRoute.commandResult.metadata.packet.nextSteps.length, "Localized buyer route should translate packet next steps");
    assert.notStrictEqual(translatedBuyerRoute.commandResult.metadata.localized.packet.nextSteps[0], translatedBuyerRoute.commandResult.metadata.packet.nextSteps[0], "Localized buyer route next step should change from English");
    const missingRon = await call("/api/agent/command", {
      command: "Nexus, call Ron",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(missingRon.commandResult.intent, "phone.contact_number_needed", "Named contact call should ask for a missing phone number");
    assert.strictEqual(missingRon.profile.agentMemory.pendingContactCall.name, "Ron", "Missing contact call should remember the requested name");
    const savedRon = await call("/api/agent/command", {
      command: "Ron is +15555550100",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(savedRon.commandResult.intent, "phone.contact_saved_call_ready", "Providing a number should save contact and stage a call");
    assert.strictEqual(savedRon.profile.phoneContacts.find(contact => contact.name === "Ron")?.phone, "+15555550100", "Saved contact should retain the normalized phone number");
    assert.strictEqual(savedRon.profile.agentPendingAction.recipientPhone, "+15555550100", "Staged call should carry the saved phone number");
    const confirmedRon = await call("/api/agent/command", {
      command: "yes",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(confirmedRon.commandResult.intent, "conversation.confirmed", "Confirmed named contact call should run through confirmation");
    assert.strictEqual((confirmedRon.profile.outboundCalls || [])[0].to, "+15555550100", "Confirmed named contact call should dial the saved phone number");
    const rememberedRon = await call("/api/agent/command", {
      command: "Nexus, call Ron",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(rememberedRon.commandResult.intent, "phone.contact_call_ready", "Saved contact call should be ready from memory");
    assert.strictEqual(rememberedRon.profile.agentPendingAction.recipientPhone, "+15555550100", "Saved contact memory should stage the saved number");
    await call("/api/agent/command", {
      command: "no",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    const actionReminder = await call("/api/agent/command", {
      command: "Nexus, remind me to call Ron in 2 hours",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(actionReminder.commandResult.intent, "assistant.reminder_scheduled", "Action memory reminder should be scheduled");
    assert.strictEqual(actionReminder.profile.assistantReminders[0].contactPhone, "+15555550100", "Action memory reminder should attach saved contact phone");
    const actionSummary = await call("/api/agent/command", {
      command: "Nexus, what did you promise me?",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(actionSummary.commandResult.intent, "assistant.action_memory_summary", "Nexus should summarize open promises");
    assert(actionSummary.commandResult.metadata.actionMemory.some(item => item.title.includes("call Ron")), "Action memory should include the Ron follow-up");
    const followUpNow = await call("/api/agent/command", {
      command: "Nexus, follow up now",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(followUpNow.commandResult.intent, "phone.contact_call_ready", "Follow up now should stage the saved contact call");
    assert.strictEqual(followUpNow.profile.agentPendingAction.recipientPhone, "+15555550100", "Follow-up call should carry the saved contact number");
    await call("/api/agent/command", {
      command: "no",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    const stagedCall = await call("/api/agent/command", {
      command: "Nexus, call the buyer",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(stagedCall.commandResult.status, "needs-confirmation", "Outbound call voice command should require confirmation first");
    assert.strictEqual(stagedCall.profile.agentPendingAction.tool, "communications.outbound_call", "Outbound call should stage the outbound call tool");
    const confirmedCall = await call("/api/agent/command", {
      command: "yes",
      conversational: true,
      inputMode: "voice",
      outputMode: "voice"
    });
    assert.strictEqual(confirmedCall.commandResult.intent, "conversation.confirmed", "Confirmed outbound call should run through confirmation");
    assert((confirmedCall.profile.outboundCalls || []).length >= 1, "Confirmed outbound call should create an outbound call record");
    assert(confirmedCall.profile.integrationEvents.some(event => event.action === "phone.outbound_call_requested"), "Outbound call should create provider audit evidence");
  } finally {
    server.kill();
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Ignore cleanup race on Windows.
    }
  }

  console.log("Utility assistant smoke passed");
  console.log("- Ask Nexus communications execution readiness");
  console.log("- Ask Nexus native always-on permission session");
  console.log("- Ask Nexus backend time answer");
  console.log("- Ask Nexus backend weather answer");
  console.log("- Ask Nexus backend crop timing answer");
  console.log("- Ask Nexus backend appointment reminder answer");
  console.log("- Ask Nexus backend route delay answer");
  console.log("- Ask Nexus backend buyer message answer");
  console.log("- Ask Nexus backend field alert answer");
  console.log("- Ask Nexus backend health safety answer");
  console.log("- Ask Nexus backend music handoff");
  console.log("- Ask Nexus Spotify music provider contract");
  console.log("- Ask Nexus Encyclopedia Brain farming answer");
  console.log("- Ask Nexus Encyclopedia Brain health education boundary");
  console.log("- Ask Nexus translated Encyclopedia Brain answer");
  console.log("- Ask Nexus backend Situation Agent eight-point model");
  console.log("- Ask Nexus pre-provider hardening model");
  console.log("- Ask Nexus backend shipment answer");
  console.log("- Ask Nexus translated Mission Brain display metadata");
  console.log("- Ask Nexus translated Trusted OS display metadata");
  console.log("- Ask Nexus translated buyer route packet metadata");
  console.log("- Ask Nexus phone contact memory and confirmed named calling");
  console.log("- Ask Nexus action memory and proactive follow-up");
  console.log("- Ask Nexus outbound call staging and confirmation");
  console.log("- Ask Nexus backend appointment answer");
  console.log("- Ask Nexus backend daily plan answer");
  console.log("- Ask Nexus backend next-step answer");
  console.log("- Ask Nexus personal assistant reminders");
  console.log("- Ask Nexus personal assistant daily briefing");
  console.log("- Ask Nexus pre-provider multilingual responses: es, fr, sw, ar");
  console.log("- Ask Nexus weather location handoff");
  console.log("- Ask Nexus city weather lookup");
  console.log("- Ask Nexus buyer-to-seller map route packet");
  console.log("- Nexus Mission Brain all 10 intelligence layers");
  console.log("- Nexus Trusted OS all 10 trust pillars");
})().catch(error => {
  console.error(error);
  process.exit(1);
});
