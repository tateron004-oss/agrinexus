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
  assert.ok(app.includes("return kyroRestartVoiceWithLiveMicrophone(session, { source: \"language-change\" });"), "the voice starts again in the new language");
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
    assert.ok(hint.includes("Koach Learn") && hint.includes("English: Switch to English. Close the screen."), `${code}: names and the English commands (without them "Close the screen" was written in ${code})`);
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
  const say = new Function(`${names}\n${set}\nconst canonicalVoiceLanguage = l => String(l || "en").split("-")[0];\n${grabFrom(server, "openAiRealtimeLanguageInstruction")}\nreturn openAiRealtimeLanguageInstruction;`)();
  for (const code of FOUR) {
    const line = say(code);
    assert.match(line, /Kyro's tools read English/);
    assert.match(line, /never their \S+ words as they are/);
    assert.ok(line.includes(`find Koach Learn courses about farming in ${({ ha: "Hausa", am: "Amharic", yo: "Yoruba", ig: "Igbo" })[code]}`));
  }
  for (const code of ["es", "fr", "sw", "ar", "pt"]) assert.doesNotMatch(say(code), /tools read English/, `${code}: the tools read it`);
  const matcher = require(path.join(ROOT, "public/kyro-koachlearn-courses.js"));
  // the voice model's own English requests in the offline check: the request words are not search words
  assert.deepEqual(matcher.courseRequest("find Koach Learn courses about farming in Hausa").terms, ["farming"]);
  assert.deepEqual(matcher.courseRequest("I want to learn about farming. Show available lessons or courses, ideally in Amharic.").terms, ["farming"]);
  assert.deepEqual(matcher.courseRequest("farming courses and lessons; include Yoruba options").terms, ["farming"]);
});

test("Amharic is answered from the transcript, the answers after it are tracked (no repeated answer), and only Amharic is cut off", () => {
  const app = read("public/app.js");
  assert.ok(app.includes('const KYRO_ANSWER_FROM_TRANSCRIPT_LANGUAGES = Object.freeze({ am: "Amharic" });'), "Hausa, Yoruba and Igbo are heard well enough by the model itself");
  const fn = grabFrom(app, "kyroAnswerFromTranscript");
  const sent = []; let interrupted = 0; let lang = "am";
  const run = new Function("voiceLanguageCode", "realtimeVoiceActive", "kyroTakeOverTurn", "injectKyroRealtimeContext", "sendKyroRealtimeEvent",
    `const KYRO_ANSWER_FROM_TRANSCRIPT_LANGUAGES = Object.freeze({ am: "Amharic" }); let kyroAnsweredFromTranscript = ""; let kyroAnsweredFromTranscriptAt = 0;\n${fn}\nreturn (t, id) => [kyroAnswerFromTranscript(t, id), kyroAnsweredFromTranscriptAt];`)(
    () => lang, () => true, () => { interrupted += 1; }, text => sent.push(["note", text]), event => sent.push(["event", event.type]));
  const [answered, at] = run("እባክህ የነገውን የአየር ሁኔታ በአዲስ አበባ አሳየኝ።", "item_1");
  assert.equal(answered, true); assert.ok(at > 0); assert.equal(interrupted, 1);
  assert.match(sent[0][1], /^The person just said this in Amharic, as the speech-to-text wrote it .*"እባክህ የነገውን የአየር ሁኔታ በአዲስ አበባ አሳየኝ።"\. Answer these words, in Amharic\.$/);
  assert.deepEqual(sent[1], ["event", "response.create"]);
  assert.equal(run("እባክህ የነገውን የአየር ሁኔታ በአዲስ አበባ አሳየኝ።", "item_1")[0], false, "the same words arriving again are not answered twice");
  lang = "ha"; assert.equal(run("Sannu Kyro", "item_2")[0], false, "Hausa is not cut off");
  // the transcript path calls it only for the finished transcript, after the page did not take the words itself
  assert.ok(app.includes('if (eventType === "conversation.item.input_audio_transcription.completed") { try { kyroAnswerFromTranscript(transcript, kyroUtteranceId); } catch { /* the model\'s own answer stands */ } }'));
  // the answers that follow are marked under way, so the stall watchdog does not ask for the same answer again
  assert.ok(app.includes('if (eventType === "response.created" && ((typeof kyroPageSpeaks === "function" && kyroPageSpeaks()) || (typeof kyroAnsweredFromTranscriptAt === "number" && Date.now() - kyroAnsweredFromTranscriptAt < 60000))) {'));
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

test("an Amharic session is text-only, told its words are read aloud, and every other language still speaks for itself", () => {
  const server = read("server.js");
  const set = /const OPENAI_PAGE_SPOKEN_LANGUAGES = new Set\(\[[^\]]+\]\);/.exec(server)[0];
  assert.equal(set, 'const OPENAI_PAGE_SPOKEN_LANGUAGES = new Set(["am"]);');
  const modal = new Function(`${set}\n${grabFrom(server, "openAiRealtimeTranscriptionCode")}\n${grabFrom(server, "openAiRealtimeOutputModalities")}\nreturn openAiRealtimeOutputModalities;`)();
  assert.deepEqual(modal("am"), ["text"]); assert.deepEqual(modal("am-ET"), ["text"]);
  for (const code of ["en", "es", "fr", "sw", "ar", "pt", "ha", "yo", "ig"]) assert.deepEqual(modal(code), ["audio"], code);
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
