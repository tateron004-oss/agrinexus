"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const care = require("../../public/kyro-care-phrases.js");
const { readSafetyDetailed } = require("../../nexus/companion/safety.js");
const en = require("../../nexus/i18n/en.js");
const sw = require("../../nexus/i18n/sw.js");
const { QUIET, ALARM } = require("../helpers/negated-symptom-phrases.js");

// Found by a user audit: "my baby has no fever" (and "mtoto wangu hana homa") was answered as a baby danger sign, because the shared care reader looked for the word "fever" and ignored the "no".
// A symptom whose ABSENCE is good news (fever, cough, vomiting, diarrhoea, rash, bleeding, pain) said to be absent no longer counts. A missing normal function ("not feeding", "not breathing",
// "not waking", "no urine", "haamki", "hapumui", "hanyonyi") is the danger and keeps alarming, and so does a sentence that has both ("no fever but she is not feeding"). When unsure, the reader alarms.
// The same table is run against the shared reader, the older command route (/api/agent/command) and the spoken tool route (/api/voice/realtime/tool, which the phone line uses).

test("the table is big enough to mean something, and has no phrase twice", () => {
  assert.ok(QUIET.length + ALARM.length >= 80, `${QUIET.length + ALARM.length} phrases`);
  assert.ok(QUIET.length >= 40 && ALARM.length >= 40);
  assert.ok(QUIET.some(text => /\bmtoto\b/.test(text)) && ALARM.some(text => /\bmtoto\b/.test(text)), "Kiswahili in both directions");
  const all = [...QUIET, ...ALARM].map(text => text.toLowerCase());
  assert.equal(new Set(all).size, all.length);
});

test("the shared reader: a symptom said NOT to be there is not read as the symptom", () => {
  for (const text of QUIET) assert.equal(readSafetyDetailed(text), null, text);
});

test("the shared reader: a missing function, a real symptom, and a reassuring 'no' next to a real danger sign all still alarm", () => {
  for (const text of ALARM) assert.ok(readSafetyDetailed(text), text);
});

test("any danger sign still alarms when a reassuring 'no ...' is put in front of it, in either language", () => {
  const dangers = ["my baby is not feeding", "my baby won't feed", "my baby is not breathing", "my baby is not waking", "my baby can't be woken", "my baby has not passed urine", "my baby is not drinking",
    "my baby is breathing very fast", "my baby has fits", "my child is unconscious", "my child cannot drink", "mtoto wangu hanyonyi", "mtoto wangu haamki", "mtoto wangu hapumui", "mtoto wangu hajakojoa", "mtoto wangu ana degedege"];
  const fronts = ["no fever, ", "no fever but ", "no cough or vomiting, ", "my baby has no rash and no diarrhoea. ", "without a fever, ", "she is not coughing and has no fever. ", "hana homa, ", "hakuna homa lakini ", "hatapiki wala hana homa. ", "hana kikohozi na hana vipele, "];
  for (const danger of dangers) for (const front of fronts) {
    // the front is a sentence of its own about the same baby, so "my baby" is said once and the danger sign follows
    const text = /\bmtoto\b/.test(danger) ? `mtoto wangu ${front}${danger.replace(/^mtoto wangu /, "")}` : `${front.replace(/^no /, "my baby has no ")}${danger}`;
    assert.ok(readSafetyDetailed(text), text);
  }
});

test("the reader alone: only the reassuring symptoms are removed, and words around them are left alone", () => {
  const strip = text => care.careSign(text);
  // not removed: a missing function, "no longer", a negation of something that is not a symptom, a list that may mean the second thing is there
  for (const text of ["my baby is no longer feeding", "my baby does not stop vomiting", "my baby has no fever and vomiting everything", "my baby cannot stop coughing and is breathing fast", "my baby is not feeding"]) assert.ok(strip(text), text);
  // the ones in the sentence "my toddler has a small cough, no fever, playing" are not an alarm (kept from the earlier fix)
  assert.equal(strip("my toddler has a small cough, no fever, playing"), null);
});

// ---- the real routes ----
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "negated-symptoms-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = "";
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
    const text = await res.text();
    if (res.status === 429) { await sleep(3000); continue; } // the per-minute limit on the spoken tool: wait it out
    let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
    return { status: res.status, json, text, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
  }
  throw new Error("still rate limited");
}
const languageOf = text => (/\b(?:mtoto|mwanangu|binti|hana|hakuna|hatapiki|hakohoi|haharishi|hatokwi|hanyonyi|haamki|hapumui|hajakojoa|nina|sina|ana|wangu|hawezi|amelala|mimba)\b/i.test(text) ? "sw" : "en");
const spoken = async command => (await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `neg-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language: languageOf(command) }, language: languageOf(command) })).json?.response || "";
const typed = async command => (await post("/api/agent/command", { command })).json?.commandResult?.response || "";

// The start of every existing danger-sign reply (the {go} / {circle} parts vary), plus the urgent-health line the older route gives, in both languages.
const markers = [...Object.entries(en), ...Object.entries(sw)]
  .filter(([key]) => /^safety\.(?:care\.(?:baby|baby_today|child|child_today|pregnancy|pregnancy_bp|postpartum|labour|poison|injury)|askNoCircle|noCircle)$/.test(key))
  .map(([, text]) => text.split("{")[0].trim().slice(0, 50))
  .concat(["Call emergency services now", "Call your local emergency number now if you can", "seek emergency help now", "Piga simu ya dharura", "namba ya dharura sasa hivi"]);
const alarmed = reply => markers.some(piece => piece && reply.includes(piece));

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "negated-symptoms-secret-for-the-test-0123", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", NEXUS_TEST_REMINDER_STORE: "memory", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200);
  cookie = login.setCookie;
});
test.after(() => { server?.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("the command route and the spoken tool route do not raise an alarm for a symptom that is not there", async () => {
  for (const text of QUIET) {
    const viaCommand = await typed(text);
    assert.ok(viaCommand, `command route answered: ${text}`);
    assert.ok(!alarmed(viaCommand), `command route alarmed: ${text} -> ${viaCommand.slice(0, 200)}`);
    const viaVoice = await spoken(text);
    assert.ok(viaVoice, `voice route answered: ${text}`);
    assert.ok(!alarmed(viaVoice), `voice route alarmed: ${text} -> ${viaVoice.slice(0, 200)}`);
  }
});

test("the command route and the spoken tool route still alarm for a missing function, a real symptom, and a mix", async () => {
  for (const text of ALARM) {
    const viaCommand = await typed(text);
    assert.ok(alarmed(viaCommand), `command route did not alarm: ${text} -> ${viaCommand.slice(0, 200)}`);
    const viaVoice = await spoken(text);
    assert.ok(alarmed(viaVoice), `voice route did not alarm: ${text} -> ${viaVoice.slice(0, 200)}`);
  }
});
