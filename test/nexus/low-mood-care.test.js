"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const feelings = require("../../public/kyro-feelings.js");
const lines = require("../../public/kyro-crisis-lines.js");
const { safetyTurn, readSafetyDetailed } = require("../../nexus/companion/safety.js");

// Found testing the live site: "I feel hopeless", "I feel anxious all the time", "I feel lonely", "everything feels pointless" and "I feel depressed" were answered "I'm not sure what you'd like me to do. You can say things like:
// find a clinic near me ...", "I'm so stressed" with "I have not saved this as your name or in your health records", and on the typed route five different feelings got the same line about what Kyro can do. Each everyday feeling now
// gets a short warm reply about that feeling; hopelessness gets the caring crisis reply. And a person in Kenya or Nigeria is given who to talk to (charities confirmed on 13 October 2026; no government line was found).

const MENU = /I'm not sure what you'd like me to do|find a clinic near me|not saved this as your name|I can listen, help you name what is happening|I cannot diagnose/i;
const push = async () => {};
const turn = (text, country = "", circle = null) => safetyTurn({ text, circle, push, tenantId: "t", userId: "u", country });

test("an everyday feeling is read, and a question, a third person or a business worry is not", () => {
  const feel = [["I feel sad today", "sad"], ["I'm so stressed", "stressed"], ["I feel anxious all the time", "anxious"], ["I feel lonely", "lonely"], ["I'm overwhelmed and can't cope", "overwhelmed"], ["I feel depressed", "depressed"],
    ["I can't stop worrying", "anxious"], ["I feel so alone", "lonely"], ["I've been crying all day", "sad"], ["I'm burnt out", "stressed"], ["I'm stressed about the harvest", "stressed"]];
  for (const [text, name] of feel) assert.equal(feelings.read(text)?.feeling, name, text);
  for (const text of ["What is anxiety?", "How do I deal with stress?", "My friend is depressed", "she feels lonely", "I'm worried about the maize price", "I'm alone at the farm today", "I feel fine", "tell me about depression", "Can you help with stress?", "The market is stressed", ""])
    assert.equal(feelings.read(text), null, text);
});

test("hopelessness is a risk marker, not everyday low mood", () => {
  for (const text of ["I feel hopeless", "everything feels pointless", "nothing matters anymore", "I feel worthless", "what's the point", "I feel like a burden", "life feels meaningless"]) assert.equal(feelings.hopeless(text), true, text);
  for (const text of ["I feel sad today", "what's the point of a business plan", "tell me about hope", "I feel fine", ""]) assert.equal(feelings.hopeless(text), false, text);
});

test("on the server, each feeling is answered about that feeling, never with a menu; hopelessness gets the caring crisis reply", async () => {
  for (const [text, kind] of [["I feel sad today", "low_mood"], ["I feel lonely", "low_mood"], ["I feel anxious all the time", "low_mood"], ["I'm so stressed", "low_mood"], ["I feel depressed", "low_mood"], ["I feel hopeless", "self_harm"], ["everything feels pointless", "self_harm"], ["nothing matters anymore", "self_harm"]])
    assert.equal(readSafetyDetailed(text)?.kind, kind, text);
  const replies = new Set();
  for (const text of ["I feel sad today", "I feel lonely", "I feel anxious all the time", "I'm so stressed", "I'm overwhelmed and can't cope", "I feel depressed"]) {
    const said = await turn(text); replies.add(said);
    assert.doesNotMatch(said, MENU, text); assert.ok(said.split(/\s+/).length <= 60, `${text}: short enough to listen to`); assert.ok(said.includes("?") || /tell me/i.test(said), `${text}: asks a gentle question or invites her to say more`);
  }
  assert.equal(replies.size, 6, "six feelings, six different replies");
  assert.match(await turn("I feel lonely"), /^I'm sorry you're feeling lonely\./);
  assert.match(await turn("I feel depressed"), /doctor, nurse or counsellor[^]*If you ever think about hurting yourself, tell me, and call your local emergency number\.$/);
  const hopeless = await turn("I feel hopeless"); assert.match(hopeless, /I'm really sorry you're feeling this way/); assert.doesNotMatch(hopeless, MENU);
  assert.equal(readSafetyDetailed("I feel hopeless after giving birth")?.kind, "postnatal", "a mother after a birth is answered by the postnatal reader first");
  for (const text of ["What is anxiety?", "I'm worried about the maize price", "I feel fine"]) assert.equal(readSafetyDetailed(text), null, text);
});

test("a person in Kenya or Nigeria is told who to talk to, the circle offer stays the last sentence, and another country gets nothing made up", async () => {
  const circle = { activeMembers: async () => [{ otherName: "Amina", otherId: "a" }] };
  const ke = await turn("I feel hopeless", "Kenya");
  assert.match(ke, /Befrienders Kenya, on \+254 722 178 177, weekdays from 9 am to 5 pm/); assert.match(ke, /Kenya Red Cross toll-free line, 1199, where you can ask for counselling\.$/);
  const ng = await turn("I want to die", "Nigeria", circle);
  assert.match(ng, /SURPIN, a free helpline, on 0800 078 7746, open 24 hours\. Do you want me to alert Amina right now\?$/);
  for (const country of ["", "Uganda", "Ghana"]) assert.doesNotMatch(await turn("I feel hopeless", country), /\+254|0800|1199|Befrienders|SURPIN/, `country "${country}"`);
  assert.doesNotMatch(await turn("I feel sad today", "Kenya"), /\+254|1199/, "everyday sadness is not sent a crisis line");
});

test("only the numbers the pages gave are used", () => {
  const all = [lines.linesFor("Kenya", "en"), lines.linesFor("Kenya", "sw"), lines.linesFor("Nigeria", "en"), lines.linesFor("Nigeria", "sw")].join(" ");
  for (const number of ["+254 722 178 177", "1199", "0800 078 7746"]) assert.ok(all.includes(number), number);
  // seen only in a search result, disagreed on by two pages, or old: never used
  for (const unused of ["0800 723 253", "0809 210 6493", "0809 111 6264", "07000006463", "0776543099", "1190", "793594849", "0206814666", "999 or 112"]) assert.ok(!all.includes(unused), unused);
  assert.doesNotMatch(lines.linesFor("Kenya", "en"), /24/, "Befrienders Kenya is weekdays only, never described as 24 hours");
  assert.equal(lines.linesFor("Chile", "en"), ""); assert.equal(lines.linesFor("", "en"), "");
  assert.equal(lines.countryFromTimeZone("Africa/Nairobi"), "Kenya"); assert.equal(lines.countryFromTimeZone("Africa/Lagos"), "Nigeria"); assert.equal(lines.countryFromTimeZone("America/Chicago"), ""); assert.equal(lines.countryFromTimeZone(""), "");
  assert.equal(lines.CHECKED_ON, "13 October 2026"); for (const list of Object.values(lines.SOURCES)) for (const source of list) assert.match(source.url, /^https:\/\//);
});

test("on the typed route the page's own reply is about the feeling too, hopelessness is a risk marker, and the Kenya line follows a crisis reply on a Kenyan device or a named place", () => {
  global.window = global; // the page script reads window; the shared lists load the way they do in the browser
  delete require.cache[require.resolve("../../public/nexus-mental-health-behavioral-wellness.js")];
  const mh = require("../../public/nexus-mental-health-behavioral-wellness.js");
  const said = (text, context = {}) => mh.buildSupportPacket(text, { language: "en", ...context }).userVisibleStatus;
  for (const text of ["I feel hopeless", "everything feels pointless"]) assert.equal(mh.shouldHandle(text), true, text);
  assert.match(said("I feel lonely"), /^I'm sorry you're feeling lonely\./); assert.match(said("I feel anxious all the time"), /^That sounds really uncomfortable\./);
  for (const text of ["I feel lonely", "I feel anxious all the time", "I'm so stressed", "I feel sad today", "I feel depressed"]) assert.doesNotMatch(said(text), MENU, text);
  for (const text of ["I feel hopeless", "everything feels pointless"]) assert.match(said(text), /serious sign worth taking seriously/, text);
  assert.match(said("I feel hopeless", { country: "Kenya" }), /Befrienders Kenya, on \+254 722 178 177/);
  assert.match(said("I feel hopeless", { country: "Nigeria" }), /SURPIN, a free helpline, on 0800 078 7746/);
  assert.match(said("I feel hopeless in Nairobi"), /Befrienders Kenya/);
  assert.doesNotMatch(said("I feel hopeless"), /Befrienders|SURPIN/);
  assert.match(said("I feel hopeless", { country: "Kenya", language: "sw" }), /Unaweza pia kuzungumza na mtu: Befrienders Kenya/);
  assert.match(said("I feel hopeless in California"), /988/);
});

test("it is wired: the scripts load before the mental health script and are cached for offline, and the page tells the runtime the country", () => {
  const root = path.join(__dirname, "../..");
  const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8"); const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8"); const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
  for (const file of ["kyro-feelings.js", "kyro-crisis-lines.js"]) {
    const at = html.indexOf(`/${file}`); assert.ok(at > 0 && at < html.indexOf("/nexus-mental-health-behavioral-wellness.js"), file); assert.ok(sw.includes(`/${file}`), `${file} in the service worker`);
  }
  assert.ok(app.includes("window.KyroCrisisLines?.countryFromTimeZone?.("));
});
