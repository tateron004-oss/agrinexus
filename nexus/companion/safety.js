"use strict";

const { t, both, languageOf } = require("../i18n/index.js");

// Emergencies and moments of crisis. Two things happen here and they are deliberately different:
//
//  * The person says, plainly, that they need help NOW ("this is an emergency", "I've fallen", "alert my circle"): every member of their
//    circle who has said yes is alerted by push, immediately, and the person is told exactly who. This is the one thing a circle member is
//    told without the person choosing anything else, and it is only ever triggered by the person's own words. Autonomy pause does not stop
//    it, because the person asked for it.
//  * The person says something that suggests they may harm themselves: Kyro answers with care, points to real people and their local
//    emergency number, and OFFERS to alert the circle (say "alert my circle"). It never claims to be a crisis service, never acts on the
//    person's behalf without their word, and never argues.
//
// The wording of the crisis reply must be reviewed by a clinician and a veterans' or crisis organisation before this is relied on live. The same is true
// of the Swahili wording (see i18n/sw.js), which also needs a fluent speaker.
//
// Languages: English and Swahili. A person is answered in the language they spoke (a Swahili trigger gets a Swahili reply even if the app is in English),
// else in the app's language. An alert goes to another person's phone, whose language Kyro does not know, so it is sent in both languages.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const IMMEDIATE = [
  /^(?:this is (?:an )?)?emergency$/,
  /^i need (?:urgent |emergency )?help (?:now|right now|immediately)$/,
  /^i(?:'ve| have) fallen(?: and (?:i )?can'?t get up)?$/,
  /^i (?:fell|have fallen) and (?:i )?can'?t get up$/,
  /^i can'?t get up$/,
  /^i(?:'m| am) (?:in danger|badly hurt|hurt badly|seriously hurt|having a (?:heart attack|stroke))$/,
  /^(?:please )?(?:alert|call|tell|notify|message|contact) my (?:trusted )?circle$/,
  /^(?:please )?send (?:an )?(?:emergency )?alert to my (?:trusted )?circle$/
];
const ASK_FIRST = /^(?:please )?(?:help|help me|i need help|i need some help)$/;
const SELF_HARM = [
  // First person only: "I want to die" is about the person; "how do I help a friend who is suicidal" is not, and is left to normal handling.
  /\bi(?:'m| am|'ve| have| just| really| sometimes| often)?\s+(?:\w+\s+){0,3}?(?:want(?:ed)? to (?:die|kill myself|end (?:it|my life))|kill(?:ing)? myself|end(?:ing)? my (?:own )?life|end it all|(?:don'?t|do not) want to (?:live|be alive|be here|go on)|want to disappear)\b/i,
  /\b(?:i'?m|i am|i keep|i have been|i've been|i sometimes|i often|i just|i can't stop)\s+(?:been )?think(?:ing)? (?:of|about) (?:suicide|dying|ending (?:it|it all|my life)|killing myself)\b/i,
  /\bi(?:'m| am| feel| have been|'ve been| am feeling)\s+(?:really |so |very |actually )?suicidal\b/i,
  /\b(?:kill|hurt|harm) myself\b/i,
  /\bbetter off (?:dead|without me)\b/i,
  /\bno reason to (?:live|go on)\b/i,
  /\bnot worth living\b/i,
  /\bwish i (?:was|were) dead\b/i
];

// Kiswahili. First person only, like the English ones ("nataka kufa" is about the person; a news story about "kujiua" is not).
const IMMEDIATE_SW = [
  /^(?:hii ni )?dharura$/,
  /^(?:nahitaji|ninahitaji) msaada (?:wa haraka )?(?:sasa|sasa hivi|mara moja|haraka|haraka sana)$/,
  /^(?:tafadhali )?(?:nisaidie|nisaidieni) (?:sasa|sasa hivi|haraka|mara moja)$/,
  /^nimeanguka(?: na (?:siwezi|siwezi tena) kuamka)?$/,
  /^siwezi kuamka$/,
  /^niko hatarini$/,
  /^nimejeruhiwa (?:vibaya|sana)$/,
  /^nina (?:shambulio la moyo|kiharusi)$/,
  /^(?:tafadhali )?(?:arifu|mwambie|wasiliana na|mjulishe|waarifu|wajulishe) (?:mzunguko wangu|watu wangu wa karibu)$/,
  /^(?:tafadhali )?tuma tahadhari (?:ya dharura )?kwa mzunguko wangu$/
];
const ASK_FIRST_SW = /^(?:tafadhali )?(?:msaada|nisaidie|naomba msaada|nahitaji msaada|ninahitaji msaada)$/;
const SELF_HARM_SW = [
  /\b(?:nataka|ninataka|ningependa|nimeamua) kufa\b/,
  /\b(?:nataka|ninataka|nafikiria|ninafikiria|nimeamua|nimefikiria) kujiua\b/,
  /\b(?:nataka|ninataka) kujidhuru\b/,
  /\b(?:sitaki|sitamani) (?:tena )?kuishi\b/,
  /\bnimechoka kuishi\b/,
  /\bmaisha yangu hayana maana\b/
];

// -> { kind: "emergency" | "ask" | "self_harm", language: "sw" | "en" } or null. `language` is the language the person spoke.
function readSafetyDetailed(text) {
  const raw = clean(text);
  if (!raw || raw.length > 400) return null;
  const lower = raw.toLowerCase().replace(/[.!?]+$/g, "");
  if (lower.length <= 70 && IMMEDIATE.some(pattern => pattern.test(lower))) return { kind: "emergency", language: "en" };
  if (lower.length <= 70 && IMMEDIATE_SW.some(pattern => pattern.test(lower))) return { kind: "emergency", language: "sw" };
  if (ASK_FIRST.test(lower)) return { kind: "ask", language: "en" };
  if (ASK_FIRST_SW.test(lower)) return { kind: "ask", language: "sw" };
  if (SELF_HARM.some(pattern => pattern.test(raw))) return { kind: "self_harm", language: "en" };
  if (SELF_HARM_SW.some(pattern => pattern.test(lower))) return { kind: "self_harm", language: "sw" };
  return null;
}
// "emergency" | "ask" | "self_harm" | null
const readSafety = text => readSafetyDetailed(text)?.kind || null;

// Alerts everyone in the person's circle who has said yes. Returns the members reached (with what each has chosen to share).
async function alertMembers({ circle, push, tenantId, userId, userName, now = new Date(), language = "en" }) {
  const members = circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }) : [];
  const bucket = Math.floor(now.getTime() / (5 * 60 * 1000)); // a second alert within five minutes is the same alert, not a second push
  const delivered = [];
  const name = userName || t(language, "safety.someone");
  for (const member of members) {
    try {
      await push?.(member.otherId, both(language, "safety.pushTitle", {}, " / "), both(language, "safety.pushBody", { name }), `emergency:${userId}:${member.otherId}:${bucket}`);
      delivered.push(member);
    } catch { /* keep going: one failed push must not stop the others */ }
  }
  return delivered;
}
// The names alerted.
async function alertCircle(args) { return (await alertMembers(args)).map(member => member.otherName); }

// "I'm safe" / "false alarm" / "cancel the alert": only meaningful right after an alert, so it is only ever acted on when one is still open (see safeTurn).
// Deliberately strict: a bare "ok" or "fine" (the person answering Kyro) must never end an alert and tell the circle they are safe.
const SAFE = [
  /^(?:i(?:'m| am) )?safe(?: now)?$/,
  /^i(?:'m| am) (?:ok|okay|fine|alright|all right) now$/,
  /^(?:it(?:'s| is) )?(?:a )?false alarm$/,
  /^(?:please )?(?:cancel|stop|end|call off) (?:the |my )?(?:emergency )?alert$/,
  /^everything(?:'s| is) (?:ok|okay|fine|alright) now$/
];
const SAFE_SW = [
  /^niko salama(?: sasa)?$/,
  /^nimesalama$/,
  /^(?:ni |ilikuwa )?kengele ya uongo$/,
  /^(?:tafadhali )?(?:ghairi|futa|acha|maliza) (?:tahadhari|dharura)(?: hiyo| yangu)?$/,
  /^kila kitu kiko sawa sasa$/,
  /^niko sawa sasa$/
];
const safeLanguage = text => {
  const lower = clean(text).toLowerCase().replace(/[.!?]+$/g, "");
  if (!lower || lower.length > 60) return null;
  if (SAFE.some(pattern => pattern.test(lower))) return "en";
  if (SAFE_SW.some(pattern => pattern.test(lower))) return "sw";
  return null;
};
const readSafe = text => safeLanguage(text) !== null;

// The person says they are safe while an alert of theirs is still open: the circle is told, and no more location is sent. Otherwise null (an ordinary "I'm fine").
async function safeTurn({ text, circle, push, tenantId, userId, userName, now = new Date(), outcome = null, locale = "en" }) {
  const spoken = safeLanguage(text);
  if (!spoken || !circle?.latestAlert) return null;
  const language = spoken === "sw" ? "sw" : languageOf(locale);
  const alert = await circle.latestAlert({ tenantId, userId, now }).catch(() => null);
  if (!alert || alert.ended) return null;
  await circle.updateAlert({ tenantId, userId, memoryId: alert.memoryId, change: content => ({ ...content, ended: true, endedAt: now.toISOString() }) }).catch(() => false);
  const active = circle.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }).catch(() => []) : [];
  const told = [];
  const name = userName || t(language, "safety.someone");
  for (const member of active.filter(item => (alert.alerted || []).some(entry => entry.id === item.otherId))) {
    try { await push?.(member.otherId, both(language, "safety.clearTitle", {}, " / "), both(language, "safety.clearBody", { name }), `emergency-clear:${alert.alertId}:${member.otherId}`); told.push(member.otherName); } catch { /* one failed push must not stop the others */ }
  }
  if (outcome) outcome.emergency = { alertId: alert.alertId, ended: true };
  return told.length ? t(language, "safety.allClearTold", { names: told.join(", ") }) : t(language, "safety.allClearClosed");
}

// Returns the words to answer with, or null when this is not a safety moment. `recordAlert` remembers an alert so the person's location can follow it, and
// `outcome` (optional) receives { emergency: { alertId, shareLocation, ... } } so the phone knows to send it; both are optional.
async function safetyTurn({ text, circle, push, tenantId, userId, userName, now = new Date(), recordAlert = null, outcome = null, locale = "en" }) {
  const found = readSafetyDetailed(text);
  if (!found) return null;
  const kind = found.kind; const language = found.language === "sw" ? "sw" : languageOf(locale);
  const number = t(language, "safety.number");
  const members = circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }).catch(() => []) : [];
  if (kind === "emergency") {
    if (!members.length) return t(language, "safety.noCircle", { number });
    const delivered = await alertMembers({ circle, push, tenantId, userId, userName, now, language });
    if (!delivered.length) return t(language, "safety.alertFailed", { number });
    const names = delivered.map(member => member.otherName);
    // Location follows only for members the person has chosen to share it with, and only when this alert could be remembered.
    let extra = "";
    if (recordAlert) {
      try {
        const sharers = delivered.filter(member => member.shares?.emergencyLocation);
        const remembered = await recordAlert({ tenantId, userId, alerted: delivered, now, language });
        if (outcome) outcome.emergency = { alertId: remembered.alertId, alerted: names, shareLocation: sharers.length > 0, locationTo: sharers.map(member => member.otherName), language };
        if (sharers.length) extra = t(language, "safety.locationSoon", { names: sharers.map(member => member.otherName).join(", ") });
      } catch { /* the alert itself already went; location is a bonus */ }
    }
    return t(language, "safety.alerted", { names: names.join(", "), extra, number });
  }
  if (kind === "ask") {
    return members.length
      ? t(language, "safety.askWithCircle", { names: members.map(member => member.otherName).join(", "), number })
      : t(language, "safety.askNoCircle", { number });
  }
  return t(language, "safety.selfHarm", { circle: members.length ? t(language, "safety.selfHarmCircle", { names: members.map(member => member.otherName).join(", ") }) : "" });
}

module.exports = Object.freeze({ safetyTurn, safeTurn, readSafety, readSafetyDetailed, readSafe, safeLanguage, alertCircle });
