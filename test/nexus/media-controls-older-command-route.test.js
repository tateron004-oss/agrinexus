"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { mediaControlWithoutPlayer } = require("../../nexus/media/command-route-controls.js");

// Found by the phrase sweep: "Pause", "Resume", "Next song", "Volume up", "Mute", "Stop the music" and the Kiswahili forms ("Sitisha", "Endelea", "Wimbo unaofuata", "Ongeza sauti") had no handling on the older
// command route (POST /api/agent/command, the phone line and the desktop listener). "Resume" and "Endelea" were answered with made-up work ("Done. Prepared gap review ..."), "Next song" with "I couldn't do
// that one just now". This route has no player, so it must not guess: a control that names music/volume returns the media.control instruction the typed route returns, with an honest short line; a bare one
// asks what to resume or says nothing is playing here.

const NONSENSE = /Prepared gap review|Done\.|manageable step|couldn.t do that one|Spotify is not connected|Samahani, sikuweza/i;

test("a control that names music or volume returns the media.control instruction and an honest line, never a made-up success", () => {
  const cases = [
    ["Pause the music", "pause"], ["Stop the music", "stop"], ["Next song", "next"], ["Previous song", "previous"], ["Volume up", "volume-up"], ["Volume down", "volume-down"],
    ["Mute", "mute"], ["Unmute", "unmute"], ["Resume the music", "resume"], ["Kyro, please pause the music.", "pause"]
  ];
  for (const [text, control] of cases) {
    const answer = mediaControlWithoutPlayer(text, { language: "en" });
    assert.ok(answer, text);
    assert.equal(answer.explicit, true, text);
    assert.deepEqual(answer.instruction, { type: "media.control", control }, text);
    assert.equal(answer.lang, "en");
    assert.match(answer.response, /^I've sent "[a-z ]+" to your music player\. I can't see from here whether anything is playing\.$/, text);
    assert.doesNotMatch(answer.response, /\b(?:paused|stopped|resumed|now playing)\b/i, `${text} must not claim it was done`);
  }
});

test("the Kiswahili forms answer in Kiswahili (draft wording: a fluent speaker must review it)", () => {
  const cases = [["Sitisha muziki", "pause"], ["Endelea na muziki", "resume"], ["Wimbo unaofuata", "next"], ["Wimbo uliopita", "previous"], ["Ongeza sauti", "volume-up"], ["Punguza sauti", "volume-down"],
    ["Nyamazisha muziki", "mute"], ["Simamisha muziki", "stop"]];
  for (const [text, control] of cases) {
    const answer = mediaControlWithoutPlayer(text, { language: "sw" });
    assert.ok(answer, text);
    assert.equal(answer.lang, "sw", text);
    assert.deepEqual(answer.instruction, { type: "media.control", control }, text);
    assert.match(answer.response, /^Nimeomba kicheza muziki chako .*Siwezi kuona kutoka hapa kama kuna kinachochezwa\.$/, text);
  }
});

test("a bare 'resume' asks what to resume; a bare 'pause' or 'next' says nothing is playing here; neither carries an instruction", () => {
  for (const [text, lang] of [["Resume", "en"], ["resume", "en"], ["Endelea", "sw"]]) {
    const answer = mediaControlWithoutPlayer(text, { language: lang });
    assert.equal(answer.instruction, null, text);
    assert.equal(answer.status, "awaiting-information", text);
    assert.match(answer.response, lang === "sw" ? /^Niendelee na nini\? Hakuna kinachochezwa hapa\./ : /^What should I resume\? Nothing is playing from here\./, text);
  }
  for (const [text, lang, pattern] of [["Pause", "en", /^Nothing is playing from here, so there is nothing to pause\./], ["Next", "en", /nothing to skip/], ["Sitisha", "sw", /^Hakuna kinachochezwa hapa/]]) {
    const answer = mediaControlWithoutPlayer(text, { language: lang });
    assert.equal(answer.instruction, null, text);
    assert.equal(answer.status, "completed");
    assert.match(answer.response, pattern, text);
  }
});

test("a bare word is left to an open lesson or pending question, but a control that names music is still passed on", () => {
  for (const text of ["next", "Endelea", "pause", "Resume"]) assert.equal(mediaControlWithoutPlayer(text, { language: "en", inConversation: true }), null, text);
  assert.equal(mediaControlWithoutPlayer("next song", { language: "en", inConversation: true }).instruction.control, "next");
  assert.equal(mediaControlWithoutPlayer("Mute", { language: "en", inConversation: true }).instruction.control, "mute");
});

test("the person's profile language is used for an English-looking control, and sentences that are not controls are left alone", () => {
  assert.equal(mediaControlWithoutPlayer("Pause the music", { language: "sw" }).lang, "sw");
  // play paths stay with their own handlers, and ordinary words that merely sound like controls are not taken
  for (const text of ["Play Burna Boy Last Last", "Play radio Citizen", "Cheza Sauti Sol Melanin", "Weka redio Citizen", "Open YouTube and play Last Last", "Play music in YouTube from now on",
    "skip", "hold on", "continue", "Continue my course", "Add milk to my shopping list", "remind me to pause at noon", "Play it safe", "what is the weather"]) {
    assert.equal(mediaControlWithoutPlayer(text, { language: "en" }), null, text);
  }
});

// ---- the real older route, no AI key, no database
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "media-older-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = "";
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const command = async (text, language = "en") => (await post("/api/agent/command", { command: text, language, conversational: true })).json?.commandResult || {};

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "media-older-secret-for-the-test-0123456", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200);
  cookie = login.setCookie;
});
test.after(() => { server.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("POST /api/agent/command: an explicit control carries the media.control instruction the typed route returns", async () => {
  for (const [text, control] of [["Pause the music", "pause"], ["Volume up", "volume-up"], ["Next song", "next"], ["Stop the music", "stop"], ["Mute", "mute"]]) {
    const result = await command(text);
    assert.equal(result.intent, "media.control", text);
    assert.match(result.response, /^I've sent "/, text);
    assert.doesNotMatch(result.response, NONSENSE, text);
    assert.deepEqual(result.metadata.mediaControl, { type: "media.control", control, playbackState: "instructed", executedBy: "client-player" }, text);
    assert.equal(result.metadata.genesisAction.workspace, "media");
    assert.equal(result.metadata.genesisAction.payload.action, "control");
    assert.equal(result.metadata.genesisAction.payload.control, control);
  }
});

test("POST /api/agent/command: bare 'Resume' and 'Endelea' ask what to resume instead of inventing work", async () => {
  const english = await command("Resume");
  assert.match(english.response, /^What should I resume\?/);
  assert.doesNotMatch(english.response, NONSENSE);
  assert.equal(english.metadata.mediaControl, undefined);
  const swahili = await command("Endelea", "sw");
  assert.match(swahili.response, /^Niendelee na nini\?/);
  const pause = await command("Sitisha", "sw");
  assert.match(pause.response, /^Hakuna kinachochezwa hapa/);
  const kiswahiliControl = await command("Ongeza sauti", "sw");
  assert.match(kiswahiliControl.response, /^Nimeomba kicheza muziki chako kiongeze sauti\./);
  assert.equal(kiswahiliControl.metadata.mediaControl.control, "volume-up");
});

test("the phone line asks the same helper before the AI model", () => {
  const source = fs.readFileSync(path.join(root, "server.js"), "utf8");
  assert.match(source, /await answerMediaControlWithoutPlayer\(db, phoneUser, phoneCommandBody\) \|\| await runNexusOpenAiNativeAgentCommand\(db, phoneUser, phoneCommandBody\)/);
  assert.match(source, /await answerMediaControlWithoutPlayer\(db, user, \{ \.\.\.body, correlationId, inputMode: body\.inputMode \|\| "api" \}\) \|\| await runNexusOpenAiNativeAgentCommand\(db, user,/);
});
