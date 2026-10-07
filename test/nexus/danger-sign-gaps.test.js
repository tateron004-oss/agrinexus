"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { readSafetyDetailed } = require("../../nexus/companion/safety.js");
const library = require("../../nexus/farmwork/library.js");
const en = require("../../nexus/i18n/en.js");
const sw = require("../../nexus/i18n/sw.js");

// Found by the user-journey sweep: the shared danger-sign reader missed real emergencies, which then fell to the wrong handlers (a lesson offer, the weather, "what crop?", a postnatal low-mood reply).
// One table of what people actually said, English and Kiswahili, is checked three ways: the shared reader directly, the older command route (/api/agent/command) and the spoken tool route
// (/api/voice/realtime/tool, which is what the phone line uses). The wording of the replies is NOT changed here; each phrase must reach an EXISTING reply. Every mapping needs clinician review.

// phrase -> "kind[:category][/sw]". "ask" is the calm urgent reply with the emergency number; "emergency" is the alert reply (with nobody in the circle it gives the number).
const MUST_ALARM = {
  // a child or baby: a fit, fast breathing with the chest pulling in, cannot be woken, limp
  "my child is shaking all over and eyes rolled back": "care:child",
  "my baby has his eyes rolled back and is shaking": "care:baby",
  "baby is breathing very fast and her chest is pulling in": "care:baby",
  "my child cannot be woken": "care:child",
  "my child had a fit and now he is unresponsive": "emergency",
  "mtoto ana degedege na macho yamegeuka": "care:baby/sw",
  "mtoto wangu anapumua haraka na kifua kinavuta ndani": "care:baby/sw",
  "mtoto hawezi kuamshwa": "care:baby/sw",
  "mtoto wangu hajibu na amelegea": "care:baby/sw",
  // an adult who had a fit and will not wake, who collapsed, or who is unresponsive
  "my mother had a fit and won't wake": "emergency",
  "my mother has had a fit and is now unresponsive": "emergency",
  "elderly man collapsed after farm work in the heat": "emergency",
  "mama amepata kifafa na sasa haamki": "emergency/sw",
  "bibi yangu amezimia hajibu": "emergency/sw",
  "mtu huyu amepoteza fahamu": "emergency/sw",
  "siwezi kupumua": "emergency/sw",
  // diabetes, a very low sugar
  "my diabetic father is very drowsy and his breath smells fruity": "ask",
  "my father has diabetes, he is very drowsy and his breath smells like fruit": "ask",
  "my sugar is 2.1 and I am shaking and sweating and confused": "ask",
  "baba ana kisukari amelala sana na pumzi inanuka matunda": "ask/sw",
  "sukari yangu ni 2.1 na natetemeka na nimechanganyikiwa": "ask/sw",
  // chest pain with sweating or breathlessness, stroke signs
  "my chest is paining and I am sweating and short of breath": "ask",
  "I have a pain in my chest and my left arm and I am sweating": "ask",
  "kifua kinaniuma sana na napumua kwa shida": "ask/sw",
  "kifua kinauma na natoka jasho": "ask/sw",
  "my father suddenly cannot speak well and one side of his face is drooping": "ask",
  "mzee wangu hawezi kuongea na mkono mmoja umelemaa": "ask/sw",
  "uso wake umeinama na hasemi vizuri": "ask/sw",
  // pregnancy and labour
  "i am 6 weeks pregnant and have sharp pain on one side of my belly": "care:pregnancy",
  "i have a bad headache and my vision is blurry, am 36 weeks": "care:pregnancy",
  "I am 9 months pregnant and have severe belly pain": "care:pregnancy",
  "mke wangu ana uchungu wa kujifungua na mtoto hajatoka": "care:labour/sw",
  "mke wangu yuko na uchungu": "care:labour/sw",
  "mimba yangu ina miezi tisa na ninaumwa tumbo sana": "care:pregnancy/sw",
  "maji yamenitoka na sijisikii mtoto akicheza tumboni": "care:pregnancy/sw",
  "nina mimba na mtoto hasogei tumboni": "care:pregnancy/sw",
  // poison: swallowed, sprayed with symptoms, cassava
  "nimekunywa dawa ya kuua wadudu kwa makosa": "care:poison/sw",
  "my grandfather drank pesticide": "care:poison",
  "I sprayed pesticide and now I have a headache and I feel dizzy and vomiting": "care:poison",
  "I was spraying the farm this morning and now I am dizzy and vomiting": "care:poison",
  "nimepulizia dawa na sasa nina kizunguzungu na kichwa kinauma": "care:poison/sw",
  "nilipulizia dawa na ninatapika": "care:poison/sw",
  "a child ate cassava and is vomiting and dizzy": "care:poison",
  // someone raped, thoughts of hurting the baby (Kiswahili)
  "my girl was raped": "abuse_other",
  "binti yangu amebakwa": "abuse_other/sw",
  "ninahisi kumdhuru mtoto wangu": "baby_at_risk/sw",
  // animals: never a person's first aid
  "what do I do if a cow gets bloat": "livestock",
  "one of my cows is sick, not eating, has fever": "livestock",
  "my goats are bloated and coughing after eating wet grass": "livestock",
  "ng'ombe wangu anaumwa, hali chakula, ana homa": "livestock/sw"
};

// Ordinary talk that shares words with the above must stay quiet.
const MUST_STAY_QUIET = [
  "I burnt the beans while cooking", "my toddler has a small cough, no fever, playing normally", "mtoto ana kikohozi kidogo", "my husband won't wake up for work",
  "I sprayed the tomatoes this morning for blight", "remind me tomorrow at 6am to spray the beans", "how do I spray maize against stalk borer", "what is the best pesticide for aphids",
  "what are the symptoms of pesticide poisoning", "nimepulizia mahindi leo", "nikumbushe kesho kupulizia maharagwe", "my chest hurts when I cough", "my chest is sore after the gym",
  "I am sweating because it is hot", "my cow gave 18 litres of milk today", "my cow gave birth to a female calf this morning", "my goat ate the maize", "a dog bit the chicken",
  "my child ate cassava for lunch", "we ate mushrooms with rice, they were delicious", "log that my cow has a fever", "Daisy was treated for mastitis", "what is the price of a sick cow",
  "I want to buy a cow", "he is 36 weeks into the course", "I am 9 months into this business", "the loan is 36 weeks", "my father is diabetic", "my father has diabetes and takes his tablets",
  "sugar is expensive in the market", "my brother collapsed with laughter", "I fell behind on my loan", "I was dizzy yesterday", "she can speak three languages", "his speech at the wedding was great",
  "mtoto anacheza vizuri", "naumwa kichwa kidogo", "mimba yangu inaendelea vizuri", "mke wangu anapika", "how do I know if a baby is breathing too fast", "what is a fit in children",
  "a cow kicked me and I am bleeding", "what should I do if a cow kicks someone"
];

const describe = text => {
  const found = readSafetyDetailed(text);
  return found ? `${found.kind}${found.category ? ":" + found.category : ""}${found.language === "sw" ? "/sw" : ""}` : null;
};

test("the shared reader recognises every missed phrase, English and Kiswahili", () => {
  for (const [text, expected] of Object.entries(MUST_ALARM)) assert.equal(describe(text), expected, text);
});

test("ordinary sentences with the same words are not read as an emergency", () => {
  for (const text of MUST_STAY_QUIET) {
    const found = describe(text);
    // the two cow sentences with a person hurt are for the farm guide on people (not an alarm from the reader); everything else is nothing at all
    assert.equal(found, null, `${text} -> ${found}`);
  }
});

test("the waters-broke / cannot-feel-the-baby phrase is no longer read as postnatal low mood, but low mood about a baby still is", () => {
  assert.equal(describe("maji yamenitoka na sijisikii mtoto akicheza tumboni"), "care:pregnancy/sw");
  assert.equal(describe("sihisi mtoto akicheza tangu jana"), "care:pregnancy/sw");
  assert.equal(describe("siwezi kuhisi mtoto akisogea"), "care:pregnancy/sw");
  assert.equal(describe("sijisikii kumtunza mtoto wangu"), "postnatal/sw");
  assert.equal(describe("sipendi mtoto huyu"), "postnatal/sw");
});

test("the farm library never answers a sick animal with a person's first aid, and still answers a person hurt by an animal", async () => {
  const vet = en["safety.livestock"];
  for (const text of ["what do I do if a cow gets bloat", "guide on cow bloat", "what do I do if my cow is bitten by a snake"]) {
    assert.equal(await library.handle({ text }), vet, text);
  }
  for (const text of ["what should I do if a cow kicks someone", "what do I do if a cow charges at me", "a snake bit my brother in the field"]) {
    const reply = String(await library.handle({ text }));
    assert.doesNotMatch(reply, /veterinary guide/, text);
    assert.match(reply, /First response/, text);
  }
  assert.doesNotMatch(vet, /\b\d+\s?(?:mg|ml)\b|\bgive (?:it|the animal) (?:a |some )?(?:medicine|drug)/i, "no dose and no treatment is invented");
  assert.match(vet, /call a vet or your animal health worker now/);
});

test("the planner's reply (with a circle) uses the same reader: urgent care offers to alert, an emergency alerts, a sick animal offers nothing", async () => {
  const { safetyTurn } = require("../../nexus/companion/safety.js");
  const pushes = [];
  const circle = { activeMembers: async () => [{ otherId: "u2", otherName: "Grace", shares: {} }] };
  const reply = text => safetyTurn({ text, circle, push: async (...args) => { pushes.push(args[0]); }, tenantId: "t", userId: "u1", userName: "Amina", locale: "en" });
  const chest = await reply("my chest is paining and I am sweating and short of breath");
  assert.match(chest, /Do you want me to alert Grace right now\?$/);
  assert.equal(pushes.length, 0, "an offer alerts nobody until the person says yes");
  assert.match(await reply("a child ate cassava and is vomiting and dizzy"), /Do not make them vomit[\s\S]*Do you want me to alert Grace right now\?$/);
  assert.match(await reply("maji yamenitoka na sijisikii mtoto akicheza tumboni"), /^Unachoeleza ukiwa mjamzito[\s\S]*Unataka nitume tahadhari kwa Grace sasa hivi\?$/);
  assert.match(await reply("my mother had a fit and won't wake"), /I've alerted Grace/);
  assert.deepEqual(pushes, ["u2"]);
  const animal = await reply("what do I do if a cow gets bloat");
  assert.equal(animal, en["safety.livestock"]);
  assert.doesNotMatch(animal, /alert|person|breathing/i);
});

// ---- the real routes ----
const root = path.resolve(__dirname, "..", "..");
const { freePortSync } = require("../helpers/free-port.js");
const port = freePortSync();
const base = `http://localhost:${port}`;
const dir = fs.mkdtempSync(path.join(os.tmpdir(), "danger-gaps-"));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let server; let cookie = "";
async function waitFor(url) { for (let i = 0; i < 80; i += 1) { try { if ((await fetch(url)).ok) return; } catch { await sleep(150); } } throw new Error(`${url} did not become reachable`); }
async function post(route, body) {
  const res = await fetch(`${base}${route}`, { method: "POST", headers: { "content-type": "application/json", ...(cookie ? { cookie } : {}) }, body: JSON.stringify(body) });
  const text = await res.text();
  let json = null; try { json = JSON.parse(text); } catch { /* not JSON */ }
  return { status: res.status, json, text, setCookie: (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; ") };
}
const spoken = async (command, language = "en") => (await post("/api/voice/realtime/tool", { name: "nexus_general_conversation", correlationId: `gap-${Math.random().toString(36).slice(2, 8)}`, arguments: { command, language }, language })).json?.response || "";
const typed = async command => (await post("/api/agent/command", { command })).json?.commandResult?.response || "";

// The beginning of the existing reply for a kind, in the language it is said in (so the check follows the wording, whatever it is later changed to).
function marker(expected) {
  const language = expected.endsWith("/sw") ? "sw" : "en";
  const catalog = language === "sw" ? sw : en;
  const [kind, category] = expected.replace(/\/sw$/, "").split(":");
  const key = kind === "care" ? `safety.care.${category}` : kind === "ask" ? "safety.askNoCircle" : kind === "emergency" ? "safety.noCircle" : kind === "abuse_other" ? "safety.abuseOther"
    : kind === "baby_at_risk" ? "safety.babyAtRisk" : kind === "livestock" ? "safety.livestock" : null;
  assert.ok(key && catalog[key], `no catalog key for ${expected}`);
  return catalog[key].split("{")[0].trim().slice(0, 60);
}

test.before(async () => {
  fs.copyFileSync(path.join(root, "db.json"), path.join(dir, "db.json"));
  server = spawn(process.execPath, ["server.js"], { cwd: root, env: { ...process.env, PORT: String(port), SESSION_SECRET: "danger-gaps-secret-for-the-test-0123456", AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "dir.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", AGRINEXUS_STATE_STORE: "json", NEXUS_DISABLE_LOCAL_ENV_FILES: "true" }, stdio: "ignore", windowsHide: true });
  await waitFor(`${base}/api/healthz`);
  const login = await post("/api/login", { email: "user@agrinexus.org", password: "User2026!" });
  assert.equal(login.status, 200);
  cookie = login.setCookie;
});
test.after(() => { server?.kill(); fs.rmSync(dir, { recursive: true, force: true }); });

test("the older command route and the spoken tool route (phone line) give each missed phrase its existing reply", async () => {
  for (const [text, expected] of Object.entries(MUST_ALARM)) {
    const want = marker(expected);
    const language = expected.endsWith("/sw") ? "sw" : "en";
    const viaCommand = await typed(text);
    assert.ok(viaCommand.includes(want), `command route: ${text} -> ${viaCommand.slice(0, 160)}`);
    const viaVoice = await spoken(text, language);
    assert.ok(viaVoice.includes(want), `voice route: ${text} -> ${viaVoice.slice(0, 160)}`);
  }
});

test("ordinary sentences are not answered with a safety reply on either route", async () => {
  const markers = [en["safety.askNoCircle"], en["safety.noCircle"], en["safety.livestock"], en["safety.care.child"], en["safety.care.baby"], en["safety.care.pregnancy"], en["safety.care.poison"], en["safety.care.labour"]]
    .map(text => text.split("{")[0].trim().slice(0, 50));
  for (const text of ["I burnt the beans while cooking", "my toddler has a small cough, no fever, playing normally", "I sprayed the tomatoes this morning for blight", "my cow gave 18 litres of milk today", "my father has diabetes and takes his tablets"]) {
    for (const reply of [await typed(text), await spoken(text)]) for (const piece of markers) assert.ok(!reply.includes(piece), `${text} -> ${reply.slice(0, 160)}`);
  }
});
