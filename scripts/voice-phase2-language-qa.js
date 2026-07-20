const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.VOICE_PHASE2_QA_PORT || 4462);
const base = `http://127.0.0.1:${port}`;
const tempDb = path.join(root, "tmp-voice-phase2-qa-db.json");

const read = file => fs.readFileSync(path.join(root, file), "utf8");
const serverSource = read("server.js");
const appSource = read("public/app.js");
const bridge = JSON.parse(read("public/native-bridge.json"));
const androidService = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusVoiceService.kt");
const androidController = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusNativeController.kt");
const iosRuntime = read("native-mobile/ios/AgriNexus/NexusVoiceRuntime.swift");
const iosController = read("native-mobile/ios/AgriNexus/NexusWebViewController.swift");
let cookie = "";
const testCallSid = `CA-phase2-language-${process.pid}-${Date.now()}`;

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function waitForServer() {
  for (let index = 0; index < 80; index += 1) {
    try {
      const response = await fetch(`${base}/api/healthz`);
      if (response.ok) return;
    } catch {
      await wait(150);
    }
  }
  throw new Error("Voice phase 2 language QA server did not become reachable");
}

async function jsonCall(route, body, options = {}) {
  const response = await fetch(`${base}${route}`, {
    method: body ? "POST" : "GET",
    headers: { "content-type": "application/json", cookie },
    body: body ? JSON.stringify(body) : undefined
  });
  const setCookie = response.headers.get("set-cookie");
  if (setCookie) cookie = setCookie.split(";")[0];
  const json = await response.json().catch(() => ({}));
  if (!options.allowError && !response.ok) throw new Error(`${route}: ${json.error || response.statusText}`);
  return { status: response.status, json };
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
  assert(appSource.includes("const fullAppLanguageCodes = new Set"), "browser app should define full app language codes");
  assert(appSource.includes("const partialAppLanguageCodes = new Set"), "browser app should define partial language codes");
  assert(appSource.includes("function canonicalLanguageCode"), "browser app should canonicalize language codes");
  assert(appSource.includes("handleVoiceCommand(transcript, { source: \"native\", language, targetLanguage: language })"), "native transcript language should reach web command handling");
  assert(appSource.includes('"pt": {') || appSource.includes("pt: {"), "browser UI/voice copy should include Portuguese as a supported app language");

  assert(serverSource.includes("const FULL_APP_LANGUAGE_CODES = new Set"), "server should define full app language codes");
  assert(serverSource.includes("const PARTIAL_LANGUAGE_CODES = new Set"), "server should define partial language codes");
  assert(serverSource.includes("function canonicalVoiceLanguage"), "server should canonicalize voice language codes");
  assert(serverSource.includes("language: commandLanguage") && serverSource.includes("targetLanguage: commandLanguage"), "Companion-safe command metadata should carry canonical language");
  assert(serverSource.includes("English with Hausa fallback") && serverSource.includes("French with Lingala fallback"), "phone/Twilio fallback languages should be explicit");

  assert.deepStrictEqual(bridge.languageContract.fullAppLanguages, ["en", "es", "fr", "sw", "ar", "pt"], "native bridge should document Portuguese as a full app language");
  assert.deepStrictEqual(bridge.languageContract.partialLanguages, [], "native bridge should not document partial app languages for the current supported set");
  assert.equal(bridge.languageContract.fallback, "Missing, unsupported, or unknown language values fall back to English.");

  assert(androidController.includes("selectedLanguageTag") && androidController.includes("nativeLocaleTag"), "Android controller should remember selected app language");
  assert(androidService.includes("languageTag") && !androidService.includes("Locale.getDefault().toLanguageTag()"), "Android speech recognition should use selected language tag");
  assert(iosRuntime.includes("updateLanguage") && iosRuntime.includes("nativeLocaleIdentifier"), "iOS runtime should accept selected app language");
  assert(iosController.includes("case \"voice.state\"") && iosController.includes("voiceRuntime.updateLanguage"), "iOS controller should forward web voice language state");

  fs.copyFileSync(path.join(root, "db.json"), tempDb);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(port),
      AGRINEXUS_DB_PATH: tempDb,
      OPENAI_API_KEY: "",
      NEXUS_PRESERVE_EMPTY_ENV: "1",
      PUBLIC_BASE_URL: base
    },
    stdio: "ignore",
    windowsHide: true
  });

  try {
    await waitForServer();
    await jsonCall("/api/login", { email: "admin@agrinexus.org", password: "Admin2026!" });

    const portuguese = await jsonCall("/api/user/language", { language: "pt" }, { allowError: true });
    assert.equal(portuguese.status, 200, "Portuguese should be accepted as a full profile language");
    assert.equal(portuguese.json.user.language, "pt", "profile language should store Portuguese as a canonical full language code");

    const languageChange = await jsonCall("/api/user/language", { language: "es-MX" }, { allowError: true });
    assert.equal(languageChange.status, 200, "profile language should accept supported locale aliases");
    assert.equal(languageChange.json.user.language, "es", "profile language should store canonical language code");

    const stt = await jsonCall("/api/voice/transcribe", { transcript: "hola nexus", language: "es-MX" });
    assert.equal(stt.json.voiceResult.language, "es", "STT should return canonical language");
    assert.equal(stt.json.voiceResult.locale, "es-ES", "STT should return canonical locale");

    const tts = await jsonCall("/api/voice/speak", { text: "Ola, posso ajudar.", language: "pt-BR" });
    assert.equal(tts.json.voiceResult.language, "pt", "TTS should preserve partial Portuguese metadata");
    assert.equal(tts.json.voiceResult.locale, "pt-BR", "TTS should return Portuguese locale metadata");

    const typed = await jsonCall("/api/agent/command", {
      command: "What can you do?",
      inputMode: "typed",
      outputMode: "text",
      language: "zz-ZZ",
      targetLanguage: "zz-ZZ"
    });
    assert.equal(typed.json.commandResult.metadata.language, "en", "typed commands with unsupported language should fall back to English");
    assert.equal(typed.json.commandResult.metadata.inputMode, "typed", "typed input mode should be preserved");

    const native = await jsonCall("/api/agent/command", {
      command: "What can you do?",
      inputMode: "native",
      outputMode: "voice",
      language: "sw-KE",
      targetLanguage: "sw-KE"
    });
    assert.equal(native.json.commandResult.metadata.language, "sw", "native commands should preserve canonical transcript language");
    assert.equal(native.json.commandResult.metadata.targetLanguage, "sw", "native commands should preserve canonical targetLanguage");

    await twilioPost("/api/voice/phone/incoming", { From: "+15555550222", CallSid: testCallSid });
    await twilioPost("/api/voice/phone/gather?step=name", { SpeechResult: "Ron", From: "+15555550222", CallSid: testCallSid });
    const phonePrompt = await twilioPost("/api/voice/phone/gather?step=language", { SpeechResult: "Hausa", From: "+15555550222", CallSid: testCallSid });
    assert.match(phonePrompt, /English with Hausa fallback/i, "phone language prompt should describe unsupported language fallback");
    await twilioPost("/api/voice/phone/gather?step=command", { SpeechResult: "What can you do?", From: "+15555550222", CallSid: testCallSid });
    const state = await jsonCall("/api/state");
    const phoneSession = state.json.profile.phoneVoiceSessions.find(item => item.key === testCallSid);
    assert.equal(phoneSession.language, "en", "phone session should persist canonical fallback language");
    assert.equal(state.json.profile.agentCommands[0].metadata.inputMode, "phone", "phone command should preserve inputMode");
    assert.equal(state.json.profile.agentCommands[0].metadata.language, "en", "phone command should carry canonical language metadata");

    console.log("Voice phase 2 language QA passed");
  } finally {
    server.kill();
    if (fs.existsSync(tempDb)) {
      try {
        fs.unlinkSync(tempDb);
      } catch {
        // Best effort cleanup for Windows file locks.
      }
    }
  }
})().catch(error => {
  if (fs.existsSync(tempDb)) {
    try {
      fs.unlinkSync(tempDb);
    } catch {
      // Best effort cleanup for Windows file locks.
    }
  }
  console.error(error.message || error);
  process.exit(1);
});
