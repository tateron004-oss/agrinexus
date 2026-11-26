"use strict";
// Hausa, Amharic, Yoruba and Igbo as full languages (25 Nov 2026, owner: "we need all the languages to work ... this is the first iteration"): the screen, the voice and the forms follow them.
// Their words are a machine-drafted first version; these tests check they are wired in and complete, not how good the wording is.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "..");
const read = rel => fs.readFileSync(path.join(ROOT, rel), "utf8");
const FOUR = ["ha", "am", "yo", "ig"];
const sameKeys = (a, b) => assert.deepEqual(Object.keys(a).sort(), Object.keys(b).sort());

test("the four are full languages on the page and the server, and the phone line keeps its six", () => {
  const app = read("public/app.js");
  const server = read("server.js");
  assert.ok(app.includes('const fullAppLanguageCodes = new Set(["en", "fr", "sw", "ar", "es", "pt", "ha", "am", "yo", "ig"]);'));
  assert.ok(app.includes("const partialAppLanguageCodes = new Set([]);"));
  assert.ok(server.includes('const FULL_APP_LANGUAGE_CODES = new Set(["en", "es", "fr", "sw", "ar", "pt", "ha", "am", "yo", "ig"]);'));
  assert.ok(server.includes('const PHONE_LANGUAGE_CODES = new Set(["en", "es", "fr", "sw", "ar", "pt"]);'));
  assert.ok(server.includes("return process.env.TWILIO_GATHER_LANGUAGE || voiceLocaleForLanguage(canonicalPhoneLanguage(language));"), "Twilio has no Hausa, Amharic, Yoruba or Igbo speech");
  for (const code of FOUR) assert.ok(app.includes(`{ value: "${code}", label: "`), `${code} is in the language pickers`);
  const bridge = JSON.parse(read("public/native-bridge.json"));
  assert.deepEqual(bridge.languageContract.fullAppLanguages, ["en", "es", "fr", "sw", "ar", "pt", "ha", "am", "yo", "ig"]);
});

test("the voice is told the chosen language by name and never to say it is unsupported", () => {
  const server = read("server.js");
  assert.ok(server.includes("function openAiRealtimeLanguageInstruction(language = \"en\")"));
  assert.ok(server.includes("Always speak and reply in ${name}, from your first word"));
  assert.ok(server.includes("Never say ${name} is not supported"));
  assert.ok(server.includes('typeof openAiRealtimeLanguageInstruction === "function" ? openAiRealtimeLanguageInstruction(language) : "",'), "it is part of the voice's instructions");
  assert.ok(server.includes("if (process.env.OPENAI_REALTIME_INSTRUCTIONS) return `${process.env.OPENAI_REALTIME_INSTRUCTIONS} ${typeof openAiRealtimeLanguageInstruction"), "even when the instructions are replaced");
  assert.ok(!server.includes("otherwise say plainly that voice/language support is limited"), "the old line let the voice decline");
  assert.ok(server.includes('VOICE_LANGUAGE_NAMES = { en: "English", es: "Spanish", fr: "French", sw: "Kiswahili", ar: "Arabic", pt: "Portuguese", ha: "Hausa", am: "Amharic", yo: "Yoruba", ig: "Igbo" }'));
});

test("Kyro's own answers keep the language (it used to become English before the answer was written)", () => {
  const { normalizeLocale } = require("../../nexus/experience/interaction-profile.js");
  for (const code of FOUR) assert.equal(normalizeLocale(code), code);
  assert.equal(normalizeLocale("ha-NG"), "ha");
});

test("every translated screen table has all four languages with the same keys as English", () => {
  const { TEXT } = require("../../public/page-text.js");
  for (const code of FOUR) sameKeys(TEXT[code], TEXT.en);
  const { STRINGS } = require("../../public/kyro-media-player.js");
  for (const code of FOUR) sameKeys(STRINGS[code], STRINGS.en);
  for (const file of ["kyro-walkthrough", "kyro-capture", "kyro-accessibility-commands"]) {
    const { TEXT: table } = require(`../../public/${file}.js`);
    for (const code of FOUR) sameKeys(table[code], table.en);
  }
  const { languageOf, tx } = require("../../public/page-text.js");
  assert.equal(languageOf("ha-NG"), "ha");
  assert.equal(languageOf("am"), "am");
  assert.equal(languageOf("de"), "en");
  assert.notEqual(tx("yo", "team.h1"), tx("en", "team.h1"));
});

test("the screen pieces use the person's language, not just Kiswahili or English", () => {
  const app = read("public/app.js");
  assert.ok(app.includes("function kyroModuleLanguage() {"));
  assert.ok(!app.includes('languageCode() === "sw" ? "sw" : "en"'), "no piece is squeezed to Kiswahili-or-English any more");
  const { reply } = require("../../public/kyro-accessibility-commands.js");
  assert.equal(typeof reply, "function");
  const { mediaControlWithoutPlayer } = require("../../nexus/media/command-route-controls.js");
  const paused = mediaControlWithoutPlayer("pause the music", { language: "ha" });
  if (paused) assert.equal(paused.lang, "ha");
  const swahili = mediaControlWithoutPlayer("pause the music", { language: "sw" });
  if (swahili) assert.equal(swahili.lang, "sw");
});

test("the forms understand the command words their prompts tell people to say", () => {
  const { classifyControl, isDoneCollecting } = require("../../public/kyro-voice-intake.js");
  assert.equal(classifyControl("tsallake"), "skip");
  assert.equal(classifyControl("Soke."), "cancel");
  assert.equal(classifyControl("ሰርዝ"), "cancel");
  assert.equal(classifyControl("fò ó"), "skip");
  assert.equal(classifyControl("fo o"), "skip", "without tone marks too");
  assert.equal(classifyControl("kagbuo"), "cancel");
  assert.equal(classifyControl("maimaita"), "repeat");
  assert.equal(classifyControl("Ee", { inConfirm: true }), "yes");
  assert.equal(isDoneCollecting("shi ke nan"), true);
  assert.equal(classifyControl("Ina noma masara"), null, "an answer is still an answer");
  assert.equal(classifyControl("skip"), "skip", "English is unchanged");
  assert.equal(classifyControl("ruka"), "skip", "Kiswahili is unchanged");
  const { parseControl } = require("../../public/kyro-walkthrough.js");
  assert.equal(parseControl("na gaba"), "next");
  assert.equal(parseControl("ቀጣይ"), "next");
  assert.equal(parseControl("laghachi"), "back");
  assert.equal(parseControl("next"), "next");
  assert.equal(parseControl("I grow maize"), null);
});

test("speech shows the language only by a greeting or name phrase, never by a language's name in English", () => {
  const app = read("public/app.js");
  assert.ok(app.includes('if (/[\\u1200-\\u137f]/.test(raw)) return { language: "am", label: "Amharic", evidence: "Ge\'ez script" };'));
  assert.ok(app.includes('{ language: "ha", label: "Hausa", tests: [/\\bsannu\\b/'));
  assert.ok(!/language: "ha", label: "Hausa", tests: \[[^\]]*\\bhausa\\b/.test(app), "\"Show me Hausa courses\" must not switch the language");
});

test("the live voice test can speak the four and has a case for each", () => {
  const rig = read("scripts/live-voice-suite/rig-page.js");
  assert.ok(rig.includes('ha: "ha-NG", am: "am-ET", yo: "yo-NG", ig: "ig-NG"'));
  assert.ok(rig.includes("mark = (await rig.say(step.say, step.lang)).index;"));
  const cases = require("../../scripts/live-voice-suite/cases/languages.js");
  assert.deepEqual(cases.map(c => c.id), ["lang-ha", "lang-am", "lang-yo", "lang-ig"]);
  for (const c of cases) {
    assert.equal(c.writes, true, "they change the account's language");
    assert.equal(typeof c.expect.notSaid, "string", "patterns travel as text");
    assert.ok(c.then.some(step => step.say === "Switch to English."), "each puts English back");
  }
  const { ALL } = require("../../scripts/live-voice-suite/cases/index.js");
  assert.ok(ALL.some(c => c.id === "lang-yo"));
});

test("a language change said aloud in the live voice is done by the page, which starts the voice again in that language", () => {
  const app = read("public/app.js");
  const route = app.slice(app.indexOf("function routeKyroVoiceIntakeTranscript("), app.indexOf("function routeKyroVoiceIntakeTranscript(") + 12000);
  assert.ok(route.includes("!/\\btranslat/i.test(trimmed) && typeof isUniversalLanguageCommand === \"function\" && isUniversalLanguageCommand(trimmed)"), "the spoken turn is claimed (a translation is not)");
  assert.ok(route.includes("void kyroSwitchLanguageBySpeech(trimmed);"));
  assert.ok(route.indexOf("kyroSwitchLanguageBySpeech") < route.indexOf("KyroDismissCommands"), "before anything else can answer it");
  assert.ok(app.includes("async function kyroSwitchLanguageBySpeech(command) {"));
  assert.ok(app.includes("const started = await kyroRestartVoiceWithLiveMicrophone(session, { source: \"language-change\" });"), "the voice starts again in the new language");
  const grab = name => { const i = app.indexOf(`function ${name}(`); let depth = 0; for (let k = app.indexOf("{", i); k < app.length; k += 1) { if (app[k] === "{") depth += 1; else if (app[k] === "}") { depth -= 1; if (!depth) return app.slice(i, k + 1); } } return ""; };
  const sandbox = new Function(`${grab("languageFromVoiceCommand")}
${grab("isUniversalLanguageCommand")}
return { isUniversalLanguageCommand, languageFromVoiceCommand };`)();
  for (const [said, code] of [["Switch to Hausa.", "ha"], ["Change the language to Igbo", "ig"], ["Speak Yoruba", "yo"], ["Switch to Amharic.", "am"], ["Switch to English.", "en"]]) {
    assert.equal(sandbox.isUniversalLanguageCommand(said), true, said);
    assert.equal(sandbox.languageFromVoiceCommand(said), code, said);
  }
  for (const said of ["Show me Hausa courses about farming.", "Find Yoruba courses about small business.", "What Koach Learn courses are there in Amharic?"]) assert.equal(sandbox.isUniversalLanguageCommand(said), false, said);
});

test("the voice starts in every language: the speech-to-text is told the language only where OpenAI accepts it", () => {
  // (live, 25 Nov 2026: OpenAI refused the whole voice session as invalid for "ha", so Hausa, Amharic and Yoruba speakers had no voice; Igbo, sent without one, worked)
  const server = read("server.js");
  const grab = name => { const i = server.indexOf(`function ${name}(`); let depth = 0; for (let k = server.indexOf("{", i); k < server.length; k += 1) { if (server[k] === "{") depth += 1; else if (server[k] === "}") { depth -= 1; if (!depth) return server.slice(i, k + 1); } } return ""; };
  const set = /const OPENAI_TRANSCRIPTION_LANGUAGES = new Set\(\[[^\]]+\]\);/.exec(server)[0];
  const pick = new Function(`${set}\n${grab("openAiRealtimeTranscriptionLanguage")}\nreturn openAiRealtimeTranscriptionLanguage;`)();
  for (const code of ["en", "es", "fr", "sw", "ar", "pt"]) assert.equal(pick(code), code);
  assert.equal(pick("sw-KE"), "sw");
  for (const code of FOUR) assert.equal(pick(code), undefined, `${code} is found from the speech`);
  assert.ok(server.includes("language: openAiRealtimeTranscriptionLanguage(language),"));
});

test("a guest's failed voice start does not write the whole stored document (the retries took the site down)", () => {
  const server = read("server.js");
  const failed = server.slice(server.indexOf('action: "voice.openai_agents_realtime_session_failed"') - 1200, server.indexOf('error: "OpenAI Agents Realtime session failed truthfully."'));
  assert.ok(failed.includes('if (authContext.authMechanism !== "bounded_genesis_voice_guest_cookie") {'));
  assert.ok(failed.indexOf("await writeDb(db);") > failed.indexOf('if (authContext.authMechanism !== "bounded_genesis_voice_guest_cookie") {'), "the write is inside the signed-in branch");
  assert.ok(failed.includes('console.warn("[voice-session-failed]"'));
});

test("the four new languages never get English sentences with single words swapped in", () => {
  const app = read("public/app.js");
  assert.ok(app.includes('const KYRO_NO_WORD_SWAP_LANGUAGES = new Set(["ha", "am", "yo", "ig"]);'));
  const grab = name => { const i = app.indexOf(`function ${name}(`); let depth = 0; for (let k = app.indexOf("{", i); k < app.length; k += 1) { if (app[k] === "{") depth += 1; else if (app[k] === "}") { depth -= 1; if (!depth) return app.slice(i, k + 1); } } return ""; };
  const swap = new Function(`const KYRO_NO_WORD_SWAP_LANGUAGES = new Set(["ha", "am", "yo", "ig"]);\nconst wordTranslations = { ha: { voice: "murya" }, es: { voice: "voz" } };\n${grab("translateByWordMap")}\nreturn translateByWordMap;`)();
  assert.equal(swap("Voice transcript appears here", "ha"), "Voice transcript appears here");
  assert.equal(swap("Voice transcript appears here", "es"), "Voz transcript appears here", "the other languages are as before");
});

test("the live voice rig waits for the voice to come back after a spoken language switch restarts it", () => {
  const rig = read("scripts/live-voice-suite/rig-page.js");
  const until = rig.slice(rig.indexOf("rig.until = async"), rig.indexOf("rig.cleanup = async"));
  assert.ok(rig.includes("rig.waitForVoiceBack = async (maxMs = 30000) => {"));
  assert.ok(until.includes("if (!voiceUp()) await rig.waitForVoiceBack();"), "the second look waits out the restart");
  assert.ok(until.indexOf("waitForVoiceBack") < until.indexOf("return { state, outcome: evaluate(expect, state, { requireVoiceActive: true }) }"));
});

// Quality, not only wiring (owner, 25 Nov 2026: "the quality can not be compromised"). Found on the live voice run that day: Amharic speech was written as Latin letters
// ("Stalam Kyro, delag gubernamemath"), and a Hausa sentence about learning farming was answered about a disease and a restaurant ("noma" searched as it was said).
const grabFrom = (source, name) => { const i = source.indexOf(`function ${name}(`); let depth = 0; for (let k = source.indexOf("{", i); k < source.length; k += 1) { if (source[k] === "{") depth += 1; else if (source[k] === "}") { depth -= 1; if (!depth) return source.slice(i, k + 1); } } return ""; };

test("the speech-to-text for the four uses the larger model and a hint in their own language, and keeps English commands English", () => {
  const server = read("server.js");
  const hints = /const OPENAI_NATIVE_TRANSCRIPTION_HINTS = \{[\s\S]*?\n\};/.exec(server)[0];
  const english = /const OPENAI_REALTIME_TRANSCRIPTION_HINT = "[^"]+";/.exec(server)[0];
  const make = new Function(`${hints}\n${english}\n${grabFrom(server, "openAiRealtimeTranscriptionCode")}\n${grabFrom(server, "openAiRealtimeTranscriptionModel")}\n${grabFrom(server, "openAiRealtimeTranscriptionHint")}\nreturn { model: openAiRealtimeTranscriptionModel, hint: openAiRealtimeTranscriptionHint, english: OPENAI_REALTIME_TRANSCRIPTION_HINT };`)();
  for (const code of FOUR) {
    assert.equal(make.model(code, {}), "gpt-4o-transcribe", code);
    assert.equal(make.model(`${code}-NG`, { OPENAI_REALTIME_NATIVE_TRANSCRIBE_MODEL: "gpt-x" }), "gpt-x", "it can be changed without a release");
    const hint = make.hint(code);
    assert.notEqual(hint, make.english, `${code} has its own hint`);
    assert.ok(hint.includes("Koach Learn") && hint.includes("English: Switch to English, Hausa, Amharic, Yoruba, Igbo, Kiswahili, French, Arabic, Spanish or Portuguese. Close the screen."), `${code}: names and the English commands (without them "Close the screen" was written in ${code})`);
    assert.ok(hint.length < 220, "short: a long list can be echoed back on silence");
  }
  assert.match(make.hint("am"), /[ሀ-፿]/, "the Amharic hint is in Ethiopic letters");
  for (const code of ["en", "es", "fr", "sw", "ar", "pt"]) {
    assert.equal(make.model(code, {}), "gpt-4o-mini-transcribe", `${code} is as before`);
    assert.equal(make.hint(code), make.english);
  }
  const config = server.slice(server.indexOf("function openAiRealtimeSessionConfig("), server.indexOf("function openAiAgentsRealtimeClientConfig("));
  assert.ok(config.includes("model: openAiRealtimeTranscriptionModel(language, env),"));
  assert.ok(config.includes("prompt: openAiRealtimeTranscriptionHint(language)"));
});

test("for the four, the voice sends its tools the request in English and asks for Koach Learn courses in their language", () => {
  const server = read("server.js");
  const names = /const VOICE_LANGUAGE_NAMES = \{[^}]+\};/.exec(server)[0];
  const set = /const OPENAI_NATIVE_TOOL_ENGLISH_LANGUAGES = new Set\(\[[^\]]+\]\);/.exec(server)[0];
  const notes = /const OPENAI_NATIVE_MEANING_NOTES = Object\.freeze\(\{[\s\S]*?\n\}\);/.exec(server)[0];
  const say = new Function(`${names}\n${set}\n${notes}\nconst canonicalVoiceLanguage = l => String(l || "en").split("-")[0];\n${grabFrom(server, "openAiRealtimeLanguageInstruction")}\nreturn openAiRealtimeLanguageInstruction;`)();
  for (const code of FOUR) {
    const line = say(code);
    assert.match(line, /Kyro's tools read English/);
    assert.match(line, /never their \S+ words as they are/);
    assert.match(line, /everyday sayings by their meaning, never word by word: "[^"]+" means "I am tired"/, `${code}: sayings by their meaning`);
    assert.ok(line.includes(`find Koach Learn courses about farming in ${({ ha: "Hausa", am: "Amharic", yo: "Yoruba", ig: "Igbo" })[code]}`));
  }
  for (const code of ["es", "fr", "sw", "ar", "pt"]) assert.doesNotMatch(say(code), /tools read English/, `${code}: the tools read it`);
  const matcher = require(path.join(ROOT, "public/kyro-koachlearn-courses.js"));
  // the voice model's own English requests in the offline check: the request words are not search words
  assert.deepEqual(matcher.courseRequest("find Koach Learn courses about farming in Hausa").terms, ["farming"]);
  assert.deepEqual(matcher.courseRequest("I want to learn about farming. Show available lessons or courses, ideally in Amharic.").terms, ["farming"]);
  assert.deepEqual(matcher.courseRequest("farming courses and lessons; include Yoruba options").terms, ["farming"]);
});

test("Amharic, Yoruba and Igbo are answered from the transcript, the answers after it are tracked (no repeated answer), and Hausa is not cut off", () => {
  const app = read("public/app.js");
  assert.ok(app.includes('const KYRO_ANSWER_FROM_TRANSCRIPT_LANGUAGES = Object.freeze({ am: "Amharic", yo: "Yoruba", ig: "Igbo" });'), "Hausa is heard well enough by the model itself");
  const fn = grabFrom(app, "kyroAnswerFromTranscript");
  const sent = []; let interrupted = 0; let lang = "am";
  const run = new Function("voiceLanguageCode", "realtimeVoiceActive", "kyroTakeOverTurn", "injectKyroRealtimeContext", "sendKyroRealtimeEvent",
    `const KYRO_ANSWER_FROM_TRANSCRIPT_LANGUAGES = Object.freeze({ am: "Amharic", yo: "Yoruba", ig: "Igbo" }); let kyroAnsweredFromTranscript = ""; let kyroAnsweredFromTranscriptAt = 0;\n${fn}\nreturn (t, id) => [kyroAnswerFromTranscript(t, id), kyroAnsweredFromTranscriptAt];`)(
    () => lang, () => true, () => { interrupted += 1; }, text => sent.push(["note", text]), event => sent.push(["event", event.type]));
  const [answered, at] = run("እባክህ የነገውን የአየር ሁኔታ በአዲስ አበባ አሳየኝ።", "item_1");
  assert.equal(answered, true); assert.ok(at > 0); assert.equal(interrupted, 1);
  assert.match(sent[0][1], /^The person just said this in Amharic, as the speech-to-text wrote it .*"እባክህ የነገውን የአየር ሁኔታ በአዲስ አበባ አሳየኝ።"\. Understand them the way a speaker of Amharic means them \(everyday sayings by their meaning, not word by word\), and answer, in Amharic\.$/);
  assert.deepEqual(sent[1], ["event", "response.create"]);
  assert.equal(run("እባክህ የነገውን የአየር ሁኔታ በአዲስ አበባ አሳየኝ።", "item_1")[0], false, "the same words arriving again are not answered twice");
  lang = "ha"; assert.equal(run("Sannu Kyro", "item_2")[0], false, "Hausa is not cut off");
  // the transcript path calls it only for the finished transcript, after the page did not take the words itself
  assert.ok(app.includes('if (eventType === "conversation.item.input_audio_transcription.completed") { try { kyroAnswerFromTranscript(transcript, kyroUtteranceId); } catch { /* the model\'s own answer stands */ } }'));
  // the answers that follow are marked under way, so the stall watchdog does not ask for the same answer again
  assert.ok(app.includes('if (eventType === "response.created" && ((typeof kyroPageSpeaks === "function" && kyroPageSpeaks()) || (typeof kyroAnsweredFromTranscriptAt === "number" && Date.now() - kyroAnsweredFromTranscriptAt < 60000)\n      || (typeof voiceLanguageCode === "function" && KYRO_SLOW_VOICE_LANGUAGES.has(voiceLanguageCode())))) {'), "and in the four, whose voice is slow to start (the watchdog asked again: every Hausa answer twice)");
  assert.ok(app.includes('const KYRO_SLOW_VOICE_LANGUAGES = new Set(["ha", "am", "yo", "ig"]);'));
  assert.ok(app.includes('markRealtimeResponseStarted(payload, "response-created-after-transcript-answer");'));
});

test("the four wait longer before a pause ends the turn; the others are as before", () => {
  const server = read("server.js");
  const config = server.slice(server.indexOf("function openAiRealtimeSessionConfig("), server.indexOf("function openAiAgentsRealtimeClientConfig("));
  assert.ok(config.includes('eagerness: OPENAI_NATIVE_TRANSCRIPTION_HINTS[openAiRealtimeTranscriptionCode(language)]\n          ? (String(env.OPENAI_REALTIME_NATIVE_VAD_EAGERNESS || "low").trim() || "low")\n          : (String(env.OPENAI_REALTIME_VAD_EAGERNESS || "auto").trim() || "auto"),'));
});

test('"Switch to Igbo" heard as "Switch to ego" still switches to Igbo, but "my ego" or "Lego" is never a language', () => {
  const app = read("public/app.js");
  const pick = new Function(`${grabFrom(app, "languageFromVoiceCommand")}\n${grabFrom(app, "isUniversalLanguageCommand")}\nreturn { lang: languageFromVoiceCommand, command: isUniversalLanguageCommand };`)();
  for (const said of ["Switch to ego.", "Switch to Igbo.", "speak Ibo"]) { assert.equal(pick.lang(said), "ig", said); assert.equal(pick.command(said), true, said); }
  for (const said of ["I have a big ego", "Change my Lego set", "tell me about my ego"]) assert.equal(pick.command(said), false, said);
});

test("Amharic, Yoruba and Igbo sessions are text-only, told their words are read aloud, and every other language still speaks for itself", () => {
  const server = read("server.js");
  const set = /const OPENAI_PAGE_SPOKEN_LANGUAGES = new Set\(\[[^\]]+\]\);/.exec(server)[0];
  assert.equal(set, 'const OPENAI_PAGE_SPOKEN_LANGUAGES = new Set(["am", "yo", "ig"]);');
  const modal = new Function(`${set}\n${grabFrom(server, "openAiRealtimeTranscriptionCode")}\n${grabFrom(server, "openAiRealtimeOutputModalities")}\nreturn openAiRealtimeOutputModalities;`)();
  for (const code of ["am", "am-ET", "yo", "ig-NG"]) assert.deepEqual(modal(code), ["text"], code);
  for (const code of ["en", "es", "fr", "sw", "ar", "pt", "ha"]) assert.deepEqual(modal(code), ["audio"], code);
  const config = server.slice(server.indexOf("function openAiRealtimeSessionConfig("), server.indexOf("function openAiAgentsRealtimeClientConfig("));
  assert.ok(config.includes("output_modalities: openAiRealtimeOutputModalities(language),"));
  const client = grabFrom(server, "openAiAgentsRealtimeClientConfig");
  assert.ok(client.includes("outputModalities: session.output_modalities,"), "the browser session gets the same");
  assert.match(grabFrom(server, "openAiRealtimeLanguageInstruction"), /Your answers are written down and then read aloud to the person/);
});

test("in a text-only session the page says Kyro's answers, never an answer to misheard words, and stops when the person speaks", async () => {
  const app = read("public/app.js");
  const said = []; const stops = [];
  const src = `${/const kyroPageVoice = \{[^\n]+\};/.exec(app)[0]}\n${grabFrom(app, "kyroPageSpeaks")}\n${grabFrom(app, "kyroPageVoiceStop")}\n${grabFrom(app, "kyroPageVoiceEvent")}\n`
    + "return { event: kyroPageVoiceEvent, voice: kyroPageVoice };";
  const env = new Function("realtimeVoiceSession", "realtimeVoiceActive", "kyroPageSay", "updateNexusVoiceSession", "setTimeout", "clearTimeout", src);
  const timers = [];
  const page = env({ pageSpeaks: true }, () => true, text => said.push(text), () => stops.push(1), (fn, ms) => { timers.push(fn); return timers.length; }, () => {});
  // (the events as the voice SDK wrapper hands them over: the words in acceptanceText, no response id or status)
  const answer = (id, text) => { page.event("response.output_text.done", { acceptanceText: text }); page.event("response.done", {}); };
  // a turn: the model answers what it heard before the transcript is in -> held; the transcript comes -> dropped; the answer to the transcript is said
  page.event("input_audio_buffer.committed");
  page.event("response.created", {});
  answer("r1", "answer to misheard words");
  assert.deepEqual(said, [], "held while the transcript is not in");
  page.event("conversation.item.input_audio_transcription.completed", { transcript: "ልጆቼን እንዴት ማስተማር እችላለሁ?" });
  page.voice.staleBefore = Date.now(); // (kyroAnswerFromTranscript)
  await new Promise(r => setTimeout(r, 5));
  page.event("response.created", {});
  answer("r2", "ልጆችን በጨዋታ ማስተማር ይቻላል።");
  assert.deepEqual(said, ["ልጆችን በጨዋታ ማስተማር ይቻላል።"]);
  // an answer started before Kyro turned to the transcript is never said, even if it was not cut off in time
  page.event("input_audio_buffer.committed");
  page.event("response.created", {});
  page.event("conversation.item.input_audio_transcription.completed", { transcript: "ሰላም" });
  page.voice.staleBefore = Date.now() + 1;
  answer("r3", "stale");
  assert.ok(!said.includes("stale"));
  // an answer with no words (a tool call only): nothing said
  page.event("response.created", {}); page.event("response.done", {});
  assert.equal(said.length, 1);
  // no transcript ever comes: the held answer is said after a while
  await new Promise(r => setTimeout(r, 5));
  page.event("input_audio_buffer.committed");
  page.event("response.created", {});
  answer("r6", "held then said");
  timers.at(-1)();
  assert.equal(said.at(-1), "held then said");
  // the person speaks: the page's voice stops
  page.event("input_audio_buffer.speech_started");
  assert.equal(page.voice.held, null);
  // an audio session: nothing to do with the page
  const audioPage = env({ pageSpeaks: false }, () => true, text => said.push(`AUDIO ${text}`), () => {}, setTimeout, clearTimeout);
  audioPage.event("response.created", {}); audioPage.event("response.output_text.done", { acceptanceText: "x" }); audioPage.event("response.done", {});
  assert.ok(!said.some(line => line.startsWith("AUDIO")));
  // the screen's lines and the form's questions are said by the page too, in a text-only session
  assert.ok(grabFrom(app, "kyroSpeakPageLine").includes('if (typeof kyroPageSpeaks === "function" && kyroPageSpeaks()) {'));
  assert.ok(app.includes('if (realtimeVoiceActive() && typeof kyroPageSpeaks === "function" && kyroPageSpeaks()) { kyroPageVoiceStop(); kyroPageSay(safeText); return; }'));
  assert.ok(app.includes('realtimeVoiceSession.pageSpeaks = Array.isArray(modalities) && modalities.includes("text") && !modalities.includes("audio");'));
  const parts = new Function(`${grabFrom(app, "kyroPageVoiceParts")}\nreturn kyroPageVoiceParts;`)();
  assert.deepEqual(parts("ሰላም። እንዴት ነህ? ደህና ነኝ።"), ["ሰላም። እንዴት ነህ? ደህና ነኝ።"]);
  assert.ok(parts(("አንድ ሁለት ሶስት። ").repeat(60)).every(part => part.length <= 280), "short parts, so the first is heard soon");
});

test("Hausa, Amharic, Yoruba and Igbo sessions use the full voice model (the smaller one muddled Amharic, Yoruba and Igbo on the live site); every other language keeps the site's model", () => {
  const server = read("server.js");
  const allowed = /const NEXUS_REALTIME_ALLOWED_MODELS = new Set\(\[[^\]]+\]\);/.exec(server)[0];
  const set = /const OPENAI_NATIVE_TOOL_ENGLISH_LANGUAGES = new Set\(\[[^\]]+\]\);/.exec(server)[0];
  const pick = new Function(`${allowed}\n${set}\n${grabFrom(server, "openAiRealtimeModel")}\n${grabFrom(server, "openAiRealtimeTranscriptionCode")}\n${grabFrom(server, "openAiRealtimeSessionModel")}\nreturn openAiRealtimeSessionModel;`)();
  const site = { OPENAI_REALTIME_MODEL: "gpt-realtime-2.1-mini" };
  for (const code of ["ha", "am", "yo", "ig"]) assert.equal(pick(code, site), "gpt-realtime-2.1", code);
  assert.equal(pick("yo", { ...site, OPENAI_REALTIME_NATIVE_MODEL: "gpt-realtime" }), "gpt-realtime", "it can be changed without a release");
  assert.equal(pick("ig", { ...site, OPENAI_REALTIME_NATIVE_MODEL: "not-a-model" }), "gpt-realtime-2.1");
  for (const code of ["en", "es", "sw", "fr", "ar", "pt"]) assert.equal(pick(code, site), "gpt-realtime-2.1-mini", code);
  const config = server.slice(server.indexOf("function openAiRealtimeSessionConfig("), server.indexOf("function openAiAgentsRealtimeClientConfig("));
  assert.ok(config.includes("model: openAiRealtimeSessionModel(language, env),"));
});

test("the page's own voice and the test rig ask for speech without saving the whole store (several at once took the live site down)", () => {
  const server = read("server.js");
  const speak = server.slice(server.indexOf('if (url.pathname === "/api/voice/speak" && req.method === "POST") {'));
  const lite = speak.indexOf("if (body.pageVoice === true) {");
  assert.ok(lite > 0 && lite < speak.indexOf("await writeDb(db);"), "returned before the save");
  assert.match(speak.slice(lite, lite + 400), /return send\(res, 200, \{ voiceResult: \{ correlationId, text, provider, audioDataUrl:/);
  const app = read("public/app.js");
  const say = grabFrom(app, "kyroPageSay");
  assert.ok(say.includes("forceOpenAi: true, pageVoice: true"));
  assert.ok(say.includes("let next = fetchPart(parts[0]);") && !say.includes("parts.map(fetchPart)"), "one part at a time, the next fetched while this one plays");
  assert.ok(read("scripts/live-voice-suite/rig-page.js").includes("forceOpenAi: true, pageVoice: true"));
});

test("a spoken language change: the old voice says nothing, the new one says a short line in the new language (the old one said things that were not on the screen)", async () => {
  const app = read("public/app.js");
  const grab = name => { const i = app.indexOf(`function ${name}(`); let depth = 0; for (let k = app.indexOf("{", i); k < app.length; k += 1) { if (app[k] === "{") depth += 1; else if (app[k] === "}") { depth -= 1; if (!depth) return app.slice(i, k + 1); } } return ""; };
  const lines = app.slice(app.indexOf("const KYRO_LANGUAGE_NOW_LINES = Object.freeze({"), app.indexOf("});", app.indexOf("const KYRO_LANGUAGE_NOW_LINES")) + 3);
  const run = async ({ from, said, to, restarts = true }) => {
    const calls = [];
    const env = { language: from, kyroPageSpeaksUntil: Date.now() + 15000 };
    const fn = new Function("env", "calls", `
      let kyroPageSpeaksUntil = env.kyroPageSpeaksUntil;
      let realtimeVoiceSession = { active: true };
      const voiceLanguageCode = () => env.language;
      const languageCode = () => env.language;
      ${grab("languageFromVoiceCommand")}
      const changeLanguageByVoice = async () => { calls.push(["line-spoken-by-old-voice", Date.now() < kyroPageSpeaksUntil]); env.language = ${JSON.stringify(to)}; };
      const stopRealtimeVoiceSession = () => { calls.push(["stop"]); realtimeVoiceSession = null; };
      const kyroRestartVoiceWithLiveMicrophone = async () => { calls.push(["restart"]); realtimeVoiceSession = { active: true }; return ${restarts}; };
      const kyroSayLanguageNowLine = line => calls.push(["new-voice", line]);
      ${lines}
      async ${grab("kyroSwitchLanguageBySpeech")}
      return kyroSwitchLanguageBySpeech;`)(env, calls);
    await fn(said);
    return calls;
  };
  const yo = await run({ from: "en", said: "Switch to Yoruba.", to: "yo" });
  assert.deepEqual(yo.map(c => c[0]), ["line-spoken-by-old-voice", "stop", "restart", "new-voice"]);
  assert.equal(yo[0][1], false, "the old voice is not asked to say it");
  assert.match(yo[3][1], /Yorùbá/);
  const en = await run({ from: "ig", said: "Switch to English.", to: "en" });
  assert.equal(en[3][1], "I'm speaking English again. How can I help?");
  const same = await run({ from: "en", said: "Switch to English.", to: "en" });
  assert.deepEqual(same, [["line-spoken-by-old-voice", true]], "already that language: the page's line is still said, nothing restarts");
  const failed = await run({ from: "en", said: "Switch to Igbo.", to: "ig", restarts: false });
  assert.ok(!failed.some(c => c[0] === "new-voice"), "no line when the voice did not come back");
  for (const code of ["en", "fr", "sw", "ar", "pt", "es", "ha", "am", "yo", "ig"]) assert.ok(new RegExp(`\\b${code}: "`).test(lines), code);
});

test("a spoken language change is saved once, and the captions' translations save nothing (several at once took the live site down)", async () => {
  const app = read("public/app.js");
  const grab = name => { const i = app.indexOf(`function ${name}(`); let depth = 0; for (let k = app.indexOf("{", i); k < app.length; k += 1) { if (app[k] === "{") depth += 1; else if (app[k] === "}") { depth -= 1; if (!depth) return app.slice(i, k + 1); } } return ""; };
  const saves = [];
  const change = new Function("saves", `
    ${grab("languageFromVoiceCommand")}
    let kyroLanguageChangeInFlight = null;
    const kyroChangeLanguageByVoiceOnce = async command => { saves.push(command); await new Promise(r => setTimeout(r, 20)); };
    ${grab("changeLanguageByVoice")}
    return changeLanguageByVoice;`)(saves);
  await Promise.all([change("Switch to Hausa."), change("switch to hausa")]);
  assert.equal(saves.length, 1, "two parts of the page hearing it: one save");
  await change("Switch to English.");
  assert.equal(saves.length, 2, "another language is its own change");
  const server = read("server.js");
  const route = server.slice(server.indexOf('if (url.pathname === "/api/translate" && req.method === "POST") {'));
  const lite = route.indexOf("if (body.captionOnly === true) return send(res, 200, { translationResult: result });");
  assert.ok(lite > 0 && lite < route.indexOf("await writeDb(db);"), "returned before the save");
  assert.ok(app.includes('context: "voice-response", captionOnly: true }'), "the captions ask for the light reply");
});

test("consent prompts are in the person's language, and the yes and no they name are taken (an Amharic speaker was asked in English)", () => {
  const consents = require("../../nexus/consent/user-confirmable-consents.js");
  const { LANGUAGES } = require("../../nexus/consent/consent-words.js");
  const steps = {
    "health:telehealth-intake:write": { input: { concern: "በጣም ደክሞኛል" } },
    "health:record:write": { input: { systolic: 190, diastolic: 125 } },
    "communications:send:write": { input: { channel: "sms", to: "+254700000000", message: "I am on my way" } },
    "automations:trigger:write": { input: { connection: "farm log", text: "Maize planted" } }
  };
  const english = consents.informedConfirmationPrompt({ scope: "health:telehealth-intake:write", step: steps["health:telehealth-intake:write"] });
  assert.equal(english, 'I can save this telehealth intake to your own health records: "በጣም ደክሞኛል". It is not shared with or sent to any provider. Say yes to consent and save it, or no to cancel.', "English as before");
  assert.equal(consents.genericConfirmationPrompt(), "I have that ready. Should I go ahead with it? Just say yes or no.");
  const app = read("public/app.js");
  const words = new Function(`${app.slice(app.indexOf("const KYRO_CONFIRMATION_WORDS = Object.freeze({"), app.indexOf("function detectNexusPendingConfirmationReply("))}\nreturn { KYRO_CONFIRMATION_WORDS, kyroConfirmationWordKey };`)();
  const yesWord = { en: "yes", sw: "ndiyo", fr: "oui", es: "sí", pt: "sim", ar: "نعم", ha: "eh", am: "አዎ", yo: "bẹ́ẹ̀ni", ig: "ee" };
  const noWord = { en: "no", sw: "hapana", fr: "non", es: "no", pt: "não", ar: "لا", ha: "a'a", am: "አይ", yo: "rárá", ig: "mba" };
  for (const language of LANGUAGES) {
    for (const [scope, step] of Object.entries(steps)) {
      const prompt = consents.informedConfirmationPrompt({ scope, step, language });
      assert.ok(prompt && prompt.length > 40, `${language} ${scope}`);
      if (language !== "en") assert.notEqual(prompt, consents.informedConfirmationPrompt({ scope, step }), `${language} ${scope} is not the English`);
      for (const kept of Object.values(step.input).filter(v => typeof v === "string" && v !== "sms")) assert.ok(prompt.includes(kept), `${language} ${scope} keeps "${kept}" exactly`);
      assert.ok(prompt.toLowerCase().includes(yesWord[language].toLowerCase()) && prompt.toLowerCase().includes(noWord[language].toLowerCase()), `${language} ${scope} names yes and no`);
    }
    assert.ok(consents.informedConfirmationPrompt({ scope: "health:record:write", step: steps["health:record:write"], language }).includes("190"), `${language}: the reading itself`);
    if (language === "en") continue;
    const set = words.KYRO_CONFIRMATION_WORDS[language];
    assert.ok(set.yes.includes(words.kyroConfirmationWordKey(yesWord[language])), `${language}: "${yesWord[language]}" is taken as yes`);
    assert.ok(set.no.includes(words.kyroConfirmationWordKey(noWord[language] + ".")), `${language}: "${noWord[language]}." is taken as no`);
  }
  assert.ok(words.KYRO_CONFIRMATION_WORDS.am.yes.includes(words.kyroConfirmationWordKey("አዎ።")), "Amharic full stop");
  assert.ok(words.KYRO_CONFIRMATION_WORDS.ha.no.includes(words.kyroConfirmationWordKey("Aʼa")), "Hausa a'a however the apostrophe is written");
  const spine = read("nexus/runtime/behavior-spine.js");
  assert.ok(spine.includes("response: await this.confirmationPrompt({ task, pendingStepId: execution.pendingStepId, context, language: command?.locale }),"));
});

test("an English answer on the screen is drawn again in the person's language (the health check's refusal was English on an Amharic screen)", async () => {
  const app = read("public/app.js");
  const start = app.indexOf("let kyroScreenTranslationToken = 0;");
  const code = app.slice(start, app.indexOf("return true;\n}", app.indexOf("function kyroTranslateScreenAfter(")) + "return true;\n}".length);
  const shown = []; const asked = [];
  const run = (language, reply) => new Function("env", `
    let languageCode = () => env.language;
    const request = async (url, options) => { env.asked.push(options.body); return env.reply; };
    const document = { querySelector: () => ({}) };
    const kyroShowResultScreen = (tool, command, result) => { env.shown.push(result); };
    ${code}
    return { go: (result) => { kyroScreenTranslationToken += 1; return kyroTranslateScreenAfter("t", "c", result); }, bump: () => { kyroScreenTranslationToken += 1; }, looks: kyroLooksEnglish };`)({ language, reply, shown, asked });
  const english = { response: "I heard 11 over 5, but that does not sound like a real blood-pressure reading, so I did not save it. Please check the numbers on your monitor and say them again." };
  const am = run("am", { translationResult: { translatedText: "11 በ5 ሰማሁ፣ ግን ይህ እውነተኛ የደም ግፊት ንባብ አይመስልም፤ ስለዚህ አላስቀመጥኩትም።" } });
  assert.equal(am.go(english), true);
  await new Promise(r => setTimeout(r, 5));
  assert.equal(shown.length, 1); assert.equal(shown[0].kyroTranslated, true); assert.match(shown[0].response, /የደም ግፊት/);
  assert.equal(asked[0].captionOnly, true, "the light translation, nothing saved");
  assert.equal(run("en", {}).go(english), false, "English: left alone");
  assert.equal(run("ha", {}).go({ response: "Ga kwasa-kwasai 5 na Koach Learn da Hausa: 1. Kasuwancin Noma da Sarrafa Gona" }), false, "already in Hausa: left alone");
  assert.equal(run("am", {}).go({ response: "በአማርኛ የሚገኙ 5 የKoach Learn ኮርሶች እነሆ" }), false, "already in Amharic: left alone");
  shown.length = 0;
  const stale = run("yo", { translationResult: { translatedText: "Mo gbọ́ 11 lórí 5, ṣùgbọ́n èyí kò dà bí ìwọ̀n ìfúnpá gidi." } });
  stale.go(english); stale.bump();
  await new Promise(r => setTimeout(r, 5));
  assert.equal(shown.length, 0, "a newer screen meanwhile wins");
  const standIn = run("ig", { translationResult: { translatedText: "[IG] " + english.response } });
  standIn.go(english); await new Promise(r => setTimeout(r, 5));
  assert.equal(shown.length, 0, "no translation service: the English stays");
  assert.ok(read("server.js").includes("max_output_tokens: Math.min(2400, 600 + String(text || \"\").length * 2)"));
});

test("a translation into these languages is given time to finish, and the English stand-in is never shown as a caption", () => {
  const server = read("server.js");
  assert.ok(server.includes("const OPENAI_TRANSLATION_TIMEOUT_MS = Number(process.env.OPENAI_TRANSLATION_TIMEOUT_MS || 15000);"), "Amharic took 3 to 5 seconds; 3 gave up every time");
  const call = server.slice(server.indexOf('"Use plain language suitable for rural, low-tech users."'), server.indexOf('provider = "openai-translation";'));
  assert.ok(call.includes("}, OPENAI_TRANSLATION_TIMEOUT_MS);"));
  const app = read("public/app.js");
  assert.ok(app.includes('const translated = offered && !/^\[[A-Z]{2}\]\s/.test(offered) ? offered : responseMessage;'), "a caption keeps its words when no translation happened");
});

test("the sweep's fixes: the four keep the semantic turn detector, the line after a switch is said by the page, a no is answered in the person's language, and a translation is plain text", () => {
  const server = read("server.js");
  const config = server.slice(server.indexOf("function openAiRealtimeSessionConfig("), server.indexOf("function openAiAgentsRealtimeClientConfig("));
  assert.ok(config.includes('const native = Boolean(OPENAI_NATIVE_TRANSCRIPTION_HINTS[openAiRealtimeTranscriptionCode(language)]);'));
  assert.ok(config.includes('? (String(env.OPENAI_REALTIME_NATIVE_TURN_DETECTION || "semantic_vad").trim() || "semantic_vad")'), "the four keep the semantic detector (silence lost the second sentence live)");
  assert.ok(read("public/app.js").includes('locale: typeof languageCode === "function" ? languageCode() : "en",\n        timeZone: kyroDeviceTimeZone(),'), "a yes or no carries the person's language");
  assert.ok(config.includes("silence_duration_ms: native ? Number(env.OPENAI_REALTIME_NATIVE_SILENCE_DURATION_MS || 1100) : Number(env.OPENAI_REALTIME_SILENCE_DURATION_MS || 700),"));
  const app = read("public/app.js");
  const say = grabFrom(app, "kyroSayLanguageNowLine");
  assert.ok(say.includes("kyroPageSay(line);") && !say.includes("kyroSpeakPageLine"), "the page says it, not the model (which answered it)");
  const speak = grabFrom(app, "kyroPageSay");
  assert.ok(speak.includes("KYRO_PAGE_VOICE_LOCALES[spoken]"), "read in the person's language");
  const consents = require("../../nexus/consent/user-confirmable-consents.js");
  assert.equal(consents.declinedReply(), "No problem, I have left that as it was.");
  for (const code of ["ha", "am", "yo", "ig", "sw", "fr", "es", "pt", "ar"]) assert.notEqual(consents.declinedReply(code), consents.declinedReply(), code);
  assert.ok(read("nexus/runtime/behavior-spine.js").includes('const declined = declinedReply(command?.locale || context?.locale || "en");'));
  const unwrap = new Function(`${grabFrom(server, "unwrapTranslationText")}\nreturn unwrapTranslationText;`)();
  assert.equal(unwrap('{"text":"ችግር የለም"}'), "ችግር የለም"); assert.equal(unwrap('{"translatedText":"Ba matsala"}'), "Ba matsala"); assert.equal(unwrap("Ba matsala"), "Ba matsala");
  assert.ok(server.includes("content: String(text || \"\")"), "plain text in");
  assert.match(server, /Translate from \$\{translationLanguageName\(sourceLanguage\)\} into \$\{translationLanguageName\(targetLanguage\)\}\./);
  assert.ok(/ig: "Kyro na-asụ Igbo\. Koach Learn\. Ee, mba, ndewo, kedu, biko, daalụ, ọrụ ugbo, mmụta\./.test(server), "Igbo names ugbo (farm), heard as ụgbọ (a vehicle)");
});

test("the reply after a no is in the language the page sends with it (the confirmation route used to drop it)", () => {
  assert.ok(read("nexus/compat/server-runtime-adapter.js").includes("channel: request.channel, locale: request.locale, text: body.text }, context: confirmContext });"));
  assert.ok(read("nexus/runtime/behavior-spine.js").includes('channel: input.channel || "api", locale: input.locale, correlationId:'));
});

// Live sweep, 26 Nov 2026: Igbo "Ike gwụrụ m" (I am tired) was written down right, but the model read it word by word and talked about a battery running out.
test("the four are understood by meaning, not word by word (Igbo \"Ike gwụrụ m\" is being tired, not a battery)", () => {
  const server = read("server.js");
  const notes = /const OPENAI_NATIVE_MEANING_NOTES = Object\.freeze\(\{[\s\S]*?\n\}\);/.exec(server)[0];
  const NOTES = new Function(`${notes}\nreturn OPENAI_NATIVE_MEANING_NOTES;`)();
  sameKeys(NOTES, { ha: 1, am: 1, yo: 1, ig: 1 });
  assert.ok(NOTES.ig.includes('"Ike gwụrụ m" means "I am tired" (it is about the person, not power or a battery)'));
  assert.ok(read("public/app.js").includes("Understand them the way a speaker of ${name} means them (everyday sayings by their meaning, not word by word), and answer, in ${name}."), "the transcript turn says it too");
});

// Live sweep, 26 Nov 2026: the business and reminder confirmations were still English for every other language.
test("business and reminder confirmations are asked in the person's language, and never fall back to English", async () => {
  const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
  const consents = require("../../nexus/consent/user-confirmable-consents.js");
  const english = { "business.manage": "I can add Grace Otieno as a lead in your business workspace. Say yes to save it, or no to cancel.", "reminders.cancel": "I can cancel your reminder \"water the maize\" at 6 PM. Say yes to cancel it, or no to keep it." };
  const asked = [];
  const make = translatePrompt => new BehaviorSpine({
    agent: { command: async () => null }, engine: { executeTask: async () => null, tools: { get: async () => ({}) } }, tasks: { get: async () => null },
    workspaceStates: { stage: async () => null, acknowledge: async () => null },
    businessPreview: async () => english["business.manage"], reminderCancelPreview: async () => english["reminders.cancel"], translatePrompt
  });
  const task = toolId => ({ steps: [{ step_id: "s1", tool_id: toolId, input: { command: "add a lead named Grace Otieno" } }] });
  const context = { tenantId: "t", userId: "u" };
  const translated = make(async (text, language) => { asked.push([text, language]); return `[${language}] ${text}`; });
  for (const toolId of Object.keys(english)) {
    assert.equal(await translated.confirmationPrompt({ task: task(toolId), pendingStepId: "s1", context, language: "en" }), english[toolId], "English stays as it is");
    for (const code of [...FOUR, "sw", "fr"]) {
      assert.equal(await translated.confirmationPrompt({ task: task(toolId), pendingStepId: "s1", context, language: `${code}-XX` }), `[${code}] ${english[toolId]}`, `${toolId} in ${code}`);
    }
  }
  assert.ok(asked.length > 0 && asked.every(([, language]) => language !== "en"), "English is never sent to be translated");
  // no translator, a failure, or nothing back: the generic question in their language, never the English sentence
  for (const translatePrompt of [undefined, async () => { throw new Error("down"); }, async () => null, async () => "  "]) {
    const spine = make(translatePrompt);
    for (const code of FOUR) {
      const prompt = await spine.confirmationPrompt({ task: task("reminders.cancel"), pendingStepId: "s1", context, language: code });
      assert.equal(prompt, consents.genericConfirmationPrompt(code));
      assert.notEqual(prompt, english["reminders.cancel"]);
    }
  }
});

test("the confirmation translator asks once, plainly, and gives nothing back rather than English or JSON", async () => {
  const { createPromptTranslator } = require("../../nexus/i18n/translate-prompt.js");
  assert.equal(createPromptTranslator({ env: {} }), null, "no key, no translator");
  const sent = [];
  const reply = text => async (url, options) => { sent.push(JSON.parse(options.body)); return { ok: true, json: async () => ({ output_text: text }) }; };
  const source = "I can log KES 500 as income for seeds in your business workspace. Say yes to save it, or no to cancel.";
  const ig = createPromptTranslator({ env: { OPENAI_API_KEY: "test-key" }, fetchFn: reply("Enwere m ike idekọ KES 500 ...") });
  assert.equal(await ig(source, "ig"), "Enwere m ike idekọ KES 500 ...");
  assert.match(sent[0].input[0].content, /into Igbo \(with its dots and tone marks\)/);
  assert.match(sent[0].input[0].content, /every name, amount, currency, date and time/);
  assert.equal(sent[0].input[1].content, source);
  assert.equal(await ig(source, "en"), null, "nothing to translate into English");
  assert.equal(await createPromptTranslator({ env: { OPENAI_API_KEY: "k" }, fetchFn: reply(source) })(source, "ha"), null, "English handed back");
  assert.equal(await createPromptTranslator({ env: { OPENAI_API_KEY: "k" }, fetchFn: reply('{"text":"x"}') })(source, "ha"), null, "JSON");
  assert.equal(await createPromptTranslator({ env: { OPENAI_API_KEY: "k" }, fetchFn: async () => ({ ok: false, json: async () => ({}) }) })(source, "am"), null, "an error");
  assert.equal(await createPromptTranslator({ env: { OPENAI_API_KEY: "k" }, fetchFn: async () => { throw new Error("offline"); } })(source, "yo"), null, "offline");
  const slow = createPromptTranslator({ env: { OPENAI_API_KEY: "k" }, timeoutMs: 20, fetchFn: (url, options) => new Promise((resolve, reject) => options.signal.addEventListener("abort", () => reject(new Error("aborted")))) });
  assert.equal(await slow(source, "am"), null, "too slow");
  assert.ok(read("nexus/runtime/create-runtime.js").includes("translatePrompt: createPromptTranslator({ env, fetchFn: fetchFn || globalThis.fetch })"), "the live spine has it");
});

// Live voice run, 26 Nov 2026 (Igbo): "Okay. I will remind you to water the maize at 6:00 pm tomorrow." and "Cancelled your reminder ..." were read aloud in English, the short one stayed
// English on the screen too, and the confirmation screen had English Yes and No buttons.
const spokenLineKit = () => {
  const app = read("public/app.js");
  const words = /const KYRO_ENGLISH_WORDS = [^\n]+/.exec(app)[0];
  const resultWords = /const KYRO_ENGLISH_RESULT_WORDS = [^\n]+/.exec(app)[0];
  return { app, defs: `${words}\n${resultWords}\n${grabFrom(app, "kyroLooksEnglish")}\n${grabFrom(app, "kyroLineLooksEnglish")}` };
};

test("a short English result counts as English, and the other languages' own sentences do not", () => {
  const { defs } = spokenLineKit();
  const looks = new Function(`${defs}\nreturn kyroLineLooksEnglish;`)();
  for (const line of ['Cancelled your reminder "water the maize (due Fri 27 Nov, 6:00 pm)".', "Okay. I will remind you to water the maize at 6:00 pm tomorrow.", "Saved your note.", "Nothing was found for that."]) assert.equal(looks(line), true, line);
  for (const line of ["Ọ dị mma. Aga m echeta gị ka ị gbaa mmiri n’ọka echi.", "To, zan tunatar da kai gobe da karfe shida.", "Sawa, nimeghairi kikumbusho chako.", "D'accord, j'ai annulé ton rappel.", "Listo, cancelé tu recordatorio.", "ተሰርዟል።", "Ó dáa, mo ti fagilé ìránnilétí rẹ."]) assert.equal(looks(line), false, line);
});

test("an English result is said in the person's language, once, and still said when the translation fails", async () => {
  const { app, defs } = spokenLineKit();
  const run = async ({ language, reply, line }) => {
    const said = []; const asked = []; let interrupted = 0;
    const api = new Function("languageCode", "request", "kyroSpeakPageLine", "realtimeVoiceSession",
      `${defs}\nlet kyroSpokenTranslation = { source: "", at: 0, token: 0, asIs: "" };\n${grabFrom(app, "kyroSpokenLineTranslated")}\nreturn kyroSpokenLineTranslated;`)(
      () => language, async (url, options) => { asked.push(options.body); if (reply instanceof Error) throw reply; return reply; }, text => { said.push(text); }, { sdkController: { interrupt: () => { interrupted += 1; } } });
    const first = api(line);
    const again = api(line);
    await new Promise(resolve => setTimeout(resolve, 5));
    return { first, again, said, asked, interrupted };
  };
  const english = 'Cancelled your reminder "water the maize (due Fri 27 Nov, 6:00 pm)".';
  const igbo = 'Akagbuola m ncheta gị "ịgbanye mmiri n’ọka (echi, 6:00 nke mgbede)".';
  const ok = await run({ language: "ig", line: english, reply: { translationResult: { translatedText: igbo } } });
  assert.deepEqual([ok.first, ok.again], [true, true]);
  assert.deepEqual(ok.said, [igbo], "said in Igbo, once");
  assert.equal(ok.asked.length, 1);
  assert.deepEqual({ ...ok.asked[0], text: undefined }, { text: undefined, sourceLanguage: "en", targetLanguage: "ig", context: "spoken-result", captionOnly: true }, "the light translation: nothing saved");
  assert.equal(ok.interrupted, 1);
  for (const reply of [new Error("offline"), { translationResult: { translatedText: `[IG] ${english}` } }, { translationResult: { translatedText: english } }, {}]) {
    const failed = await run({ language: "ig", line: english, reply });
    assert.deepEqual(failed.said, [english], "said as it is rather than not at all");
  }
  const en = await run({ language: "en", line: english, reply: {} });
  assert.deepEqual([en.first, en.asked.length, en.said.length], [false, 0, 0], "English is said as it is, straight away");
  const already = await run({ language: "ig", line: igbo, reply: {} });
  assert.deepEqual([already.first, already.asked.length], [false, 0], "a line already in Igbo is not translated");
  assert.ok(grabFrom(app, "kyroSpeakPageLine").includes('if (typeof kyroSpokenLineTranslated === "function" && kyroSpokenLineTranslated(line)) return true;'));
  assert.ok(grabFrom(app, "kyroTranslateScreenAfter").includes("!kyroLineLooksEnglish(text)"), "the screen uses the same test");
});

test("the Yes and No buttons, and the lines around them, are in all ten languages; a translated question uses the language's own yes and no", () => {
  const app = read("public/app.js");
  const block = /const KYRO_CONFIRM_BUTTON_WORDS = Object\.freeze\(\{[\s\S]*?\n\}\);/.exec(app)[0];
  const WORDS = new Function(`${block}\nreturn KYRO_CONFIRM_BUTTON_WORDS;`)();
  assert.deepEqual(Object.keys(WORDS).sort(), ["am", "ar", "en", "es", "fr", "ha", "ig", "pt", "sw", "yo"]);
  for (const [code, words] of Object.entries(WORDS)) {
    sameKeys(words, { yes: 1, no: 1, wait: 1, notDone: 1 });
    if (code !== "en") assert.notEqual(words.yes, "Yes", code);
  }
  assert.deepEqual([WORDS.ig.yes, WORDS.ig.no, WORDS.ha.no, WORDS.am.yes], ["Ee", "Mba", "A'a", "አዎ"]);
  const buttons = grabFrom(app, "kyroAddConfirmButtons");
  assert.ok(buttons.includes("row.append(make(words.yes, true, \"#06a77d\"), make(words.no, false, \"#9b2c2c\"));"));
  assert.doesNotMatch(buttons, /\bsw\b/);
  assert.match(read("nexus/i18n/translate-prompt.js"), /the everyday words for yes and no in that language \(never the English words yes and no\)/);
});
