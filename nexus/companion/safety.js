"use strict";

const { t, both, languageOf } = require("../i18n/index.js");
// What people say when they may hurt themselves or someone else, or are being hurt: ONE list shared with the typed-chat, phone and voice readers (public/kyro-crisis-phrases.js).
const crisisPhrases = require("../../public/kyro-crisis-phrases.js");
const SWAHILI_WORDS = /\b(?:nimechoka|natamani|nataka|ninataka|napenda|ningependa|sina|nafikiria|ninafikiria|afadhali|heri|bora nife|maisha|bunduki|kisu|sumu|sitaki)\b/;

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
// Found live (safety-critical): every one of these used to be `^...$`-anchored
// AND gated behind a 70-char cap (see readSafetyDetailed below), so any real
// elaboration at all -- "I have fallen in the kitchen and cannot get up,
// please send help" -- failed the match entirely and got treated as ordinary
// chat, with no alert and no acknowledgment. The unambiguous, first-person
// declarations below (a fall, being unable to get up, being in danger, or
// asking to alert the circle) are now matched anywhere in the message, the
// same way SELF_HARM below already does -- a false trigger just costs a
// recoverable "false alarm" (see safeTurn), but a missed real one does not.
// "emergency" alone and "help ... now" alone stay tightly anchored, since
// unanchoring those specific short, generic phrases would trigger on
// unrelated mentions ("emergency contact list", "I need help with my maize").
// Found by testing real sentences (an alert is a REAL push to real people, so both directions matter):
//  * "I've fallen behind on my loan" and "tell my circle I'll be late" sent an emergency alert -- the fall pattern had no idea about the
//    ordinary meanings of "fallen", and every "tell/message/contact my circle" was read as an alert, whatever followed.
//  * "I fell and can't get up" (no "I" right before "can't get up"), "I slipped and hurt my back" and "call an ambulance" were missed.
// The rule kept from before: when it is ambiguous, ALERT. Only phrases that are plainly something else (a debt, a falling-in-love, an
// "I'll be late" message) are carved out.
const NOT_A_FALL = "(?!\\s+(?:behind|asleep|back asleep|in love|out with|out of|for\\b|short|apart|ill|sick|into debt|off the wagon|from grace|through|away|upon|on hard times|on)\\b)";
const IMMEDIATE = [
  /^(?:this is (?:an )?)?emergency$/,
  /^i need (?:urgent |emergency )?help (?:now|right now|immediately)$/,
  new RegExp(`\\bi(?:'ve| have) fallen\\b${NOT_A_FALL}`),
  new RegExp(`\\bi (?:just )?(?:fell|slipped|tripped|collapsed)\\b(?!\\s+(?:up|asleep|back asleep|in love|for\\b|behind|out with|short|apart|ill|sick|into debt|off the wagon)\\b)`),
  // "I've had a fall" / "I just had a bad fall" / "I had a fall just now": a fall that has just happened. A fall in sales or prices, or one long ago ("last year"), is not.
  /\bi(?:'ve| have) (?:just )?had a (?:bad |nasty |serious |terrible )?fall\b(?!\s+in\s+(?:sales|prices?|income|profits?|yields?|demand|temperature|grades|business|value|numbers|weight|crops?|harvest))(?!\s+(?:last|before|years?|months?|weeks?|ago)\b)/,
  /\bi just had a (?:bad |nasty |serious )?fall\b/,
  /\bi had a (?:bad |nasty |serious )?fall (?:just now|a (?:minute|moment|few minutes) ago|today|this morning|earlier)\b/,
  /\b(?:i )?(?:can'?t|cannot|can not|am unable to|am not able to) get up\b/,
  /\bi(?:'m| am) (?:in danger|badly hurt|hurt badly|seriously hurt|having a (?:heart attack|stroke)|bleeding (?:badly|heavily))\b/,
  /\bi (?:can'?t|cannot|can not) breathe\b/,
  // Someone else's life in danger ("my mother is not breathing", "my baby is choking", "she has collapsed and will not wake up"), and being attacked: the circle is
  // alerted and the number to call is given. Said by a person who is there and needs people to come; when it is ambiguous, ALERT.
  /\b(?:my|our|the|a)\s+(?:\w+\s+){0,2}?(?:mother|mom|mum|mama|father|dad|baba|baby|child|son|daughter|husband|wife|brother|sister|grandmother|grandfather|grandma|grandpa|friend|neighbou?r|boy|girl|man|woman|patient)\s+(?:is|was|has|had|just)\s+(?:\w+\s+){0,2}?(?:not breathing(?!\s+fire)|stopped breathing|unconscious|unresponsive|collapsed|choking(?!\s+(?:on|with|from)\s+laugh|\s+up\b)|having a (?:seizure|fit|heart attack|stroke)|bleeding (?:badly|heavily)|(?:won'?t|will not|not) wak(?:e|ing) up|not responding)\b/,
  /\b(?:he|she|they)\s+(?:is|was|has|have|just)\s+(?:\w+\s+){0,2}?(?:not breathing(?!\s+fire)|stopped breathing|unconscious|unresponsive|collapsed|choking(?!\s+(?:on|with|from)\s+laugh|\s+up\b)|having a (?:seizure|fit|heart attack|stroke))\b/,
  /\bi(?:'m| am) being (?:attacked|beaten|robbed|chased)\b|\b(?:someone|somebody|a man|men|they) (?:is|are) (?:attacking|beating|chasing|trying to (?:kill|hurt|rob)) me\b/,
  // Taking too much of a medicine or swallowing something poisonous ("I took too many tablets", "I have overdosed", "I drank pesticide"): not an everyday sentence.
  /\bi(?:'ve| have)? (?:just )?(?:taken|took|swallowed|drank) (?:too (?:many|much)|an overdose of|a whole (?:bottle|packet|box|strip) of|a handful of)\s+(?:my |the |some |these )?(?:\w+\s+){0,2}?(?:tablets?|pills?|medicine|medication|drugs?|paracetamol|insulin|painkillers?|panadol|ibuprofen|aspirin|antibiotics?|capsules?|metformin|diazepam)\b/,
  /\bi(?:'ve| have)? (?:just )?(?:taken|took) an overdose\b/,
  /\bi(?:'ve| have|'m| am)? (?:just )?overdos(?:e|ed|ing)\b/,
  /\bi(?:'ve| have)? (?:just )?(?:swallowed|drank|drunk|ate|eaten|taken) (?:some |a lot of |the )?(?:poison|pesticide|bleach|kerosene|paraffin|petrol|insecticide|rat poison|weedkiller|herbicide)\b/,
  /^(?:please )?(?:call|get|send|phone) (?:me )?(?:an |the )?(?:ambulance|paramedics?)\b/,
  /^(?:(?:please|help|quick|kyro)[, ]+)*i need (?:an |the )?ambulance\b/,
  /\b(?:please )?send (?:an )?(?:emergency )?alert to my (?:trusted )?circle\b/
];
// "alert my circle" and its relatives. The verb matters: "alert/notify" is an emergency word, "tell/message/contact/call/text" is just as often
// "tell my circle I'll be late". Whatever follows decides: nothing (or only "now/please") alerts; real emergency vocabulary alerts; with an
// alert verb anything not plainly calm alerts; with a talking verb anything else is a message, not an alert.
// The people named: the circle, or "my family" / "my people" for any verb; "my daughter/son/children" only with an alert verb ("tell my son I'll be home" is a message, not an alert).
const CIRCLE_REQUEST = /\b(?:please )?(alert|notify|call|tell|message|contact|text) (my (?:trusted )?circle|my family|my people|my (?:daughter|son|children|kids|wife|husband))\b(.*)$/;
const CIRCLE_TAIL_FILLER = /^[\s,.!]*(?:(?:right )?now|please|immediately|asap|quickly|thank you|thanks|that)?[\s,.!]*(?:(?:right )?now|please|immediately|asap)?[\s,.!]*$/;
const CIRCLE_EMERGENCY = /\b(?:help|emergency|danger|trouble|hurt|injured|bleeding|breath(?:e|ing)|unconscious|dying|dead|fire|attack|urgent(?:ly)?|fallen|fell|collapsed|ambulance|accident|stroke|attacked|robbed|kidnapped|unsafe|scared|afraid)\b/;
const CIRCLE_NOT_EMERGENCY = /\b(?:not|no|isn'?t|wasn'?t|false|just testing|testing)\b[^.]{0,14}\b(?:emergency|alarm|alert|danger)\b/;
const CIRCLE_CALM = /\b(?:late|delayed?|running behind|safe|ok(?:ay)?|fine|well|arrived?|arriving|home|birthday|dinner|lunch|meeting|tomorrow|tonight|later|thank(?:s| you)|good news|soon|visit|visiting|coming|on my way|party|wedding|funeral|market|church|headache|cold|cough|tired|hungry|sleepy|busy|cooking|working|bored|lonely)\b/;
function circleAlertRequested(lower) {
  const match = CIRCLE_REQUEST.exec(lower);
  if (!match) return false;
  const verb = match[1];
  const tail = match[3] || "";
  const group = /circle|family|people/.test(match[2]);
  if (!group && verb !== "alert" && verb !== "notify") return false;
  if (CIRCLE_TAIL_FILLER.test(tail)) return true;
  if (CIRCLE_NOT_EMERGENCY.test(tail)) return false;
  if (CIRCLE_EMERGENCY.test(tail)) return true;
  if (verb === "alert" || verb === "notify") return !CIRCLE_CALM.test(tail);
  return false;
}
const ASK_FIRST = /^(?:please )?(?:help|help me|i need help|i need some help)$/;
// Found live (companion audit): plain, first-person, unambiguous crisis statements were missed entirely --
// treated as ordinary chat with zero acknowledgment -- because the adjacent common wordings for phrasings
// already covered here were absent: self-cutting ("I've been cutting myself") next to the already-covered
// kill/hurt/harm; the contraction "isn't worth living" next to the literal substring "not worth living";
// "no point in living" next to the already-covered "no reason to live/go on"; and "wish I was never born"
// next to the already-covered "wish I was/were dead". Per this file's own established philosophy (see
// IMMEDIATE above): a false trigger costs a recoverable "false alarm", a missed real one does not -- so
// these widen recall the same way, with two narrow exclusions for common idioms that are not self-harm
// ("die laughing"; "cut myself a slice/break", "cut myself off [from someone]") so the widening doesn't
// trade a miss for alert-fatigue on everyday speech.
const SELF_HARM = [
  // First person only: "I want to die" is about the person; "how do I help a friend who is suicidal" is not, and is left to normal handling.
  /\bi(?:'m| am|'ve| have| just| really| sometimes| often)?\s+(?:\w+\s+){0,3}?(?:want(?:ed)? to (?:die(?!\s+laughing)|kill myself|end (?:it|my life))|kill(?:ing)? myself|end(?:ing)? my (?:own )?life|end it all|(?:don'?t|do not) want to (?:live|be alive|be here|go on)|want to disappear)\b/i,
  /\b(?:i'?m|i am|i keep|i have been|i've been|i sometimes|i often|i just|i can't stop)\s+(?:been )?think(?:ing)? (?:of|about) (?:suicide|dying|ending (?:it|it all|my life)|killing myself)\b/i,
  /\bi(?:'m| am| feel| have been|'ve been| am feeling)\s+(?:really |so |very |actually )?suicidal\b/i,
  /\b(?:kill|hurt|harm)(?:ing)? myself\b/i,
  /\bcut(?:ting)? myself(?!\s+(?:a|some|the|off)\b)\b/i,
  /\bbetter off (?:dead|without me)\b/i,
  /\bno reason to (?:live|go on)\b/i,
  /\bno point (?:in )?(?:living|going on)\b/i,
  /\b(?:is|was)?n'?t worth living\b/i,
  /\bnot worth living\b/i,
  /\bwish i (?:was|were) (?:dead|never born)\b/i
];

// Kiswahili. First person only, like the English ones ("nataka kufa" is about the person; a news story about "kujiua" is not).
// Same fix as IMMEDIATE above, mirrored onto the already-existing Swahili
// phrases (no new wording added -- just removing the same whole-string
// anchoring that broke on any elaboration).
const IMMEDIATE_SW = [
  /^(?:hii ni )?dharura$/,
  /^(?:nahitaji|ninahitaji) msaada (?:wa haraka )?(?:sasa|sasa hivi|mara moja|haraka|haraka sana)$/,
  /^(?:tafadhali )?(?:nisaidie|nisaidieni) (?:sasa|sasa hivi|haraka|mara moja)$/,
  /\bnimeanguka\b/,
  /\bsiwezi(?: tena)? kuamka\b/,
  /\bniko hatarini\b/,
  /\bnimejeruhiwa (?:vibaya|sana)\b/,
  /\bnina (?:shambulio la moyo|kiharusi)\b/,
  /\b(?:tafadhali )?tuma tahadhari (?:ya dharura )?kwa mzunguko wangu\b/
];
// Same idea as circleAlertRequested above, for Kiswahili ("mwambie mzunguko wangu nimechelewa" is "tell my circle I am late", not an alert).
const CIRCLE_REQUEST_SW = /\b(?:tafadhali )?(arifu|waarifu|mwambie|mjulishe|wajulishe|wasiliana na) (?:mzunguko wangu|watu wangu wa karibu)\b(.*)$/;
const CIRCLE_TAIL_FILLER_SW = /^[\s,.!]*(?:sasa(?: hivi)?|tafadhali|haraka|mara moja)?[\s,.!]*(?:sasa(?: hivi)?|tafadhali|haraka)?[\s,.!]*$/;
const CIRCLE_EMERGENCY_SW = /\b(?:msaada|dharura|hatari|hatarini|jeruhiwa|nimejeruhiwa|nimeanguka|ameanguka|moto|shambulio|wizi|ugonjwa mkali|siwezi kupumua|anakufa|amekufa|ajali)\b/;
const CIRCLE_CALM_SW = /\b(?:nimechelewa|chelewa|salama|sawa|nimefika|nafika|nyumbani|kesho|usiku|baadaye|asante|harusi|mkutano|sherehe|chakula|ziara)\b/;
function circleAlertRequestedSw(lower) {
  const match = CIRCLE_REQUEST_SW.exec(lower);
  if (!match) return false;
  const verb = match[1];
  const tail = match[2] || "";
  if (CIRCLE_TAIL_FILLER_SW.test(tail)) return true;
  if (CIRCLE_EMERGENCY_SW.test(tail)) return true;
  if (verb === "arifu" || verb === "waarifu") return !CIRCLE_CALM_SW.test(tail);
  return false;
}
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
  // Slang and typing slips brought to plain words for the emergency patterns ("i cant breath", "i faln", "heart atack").
  const lower = crisisPhrases.normalize(raw).replace(/[.!?]+$/g, "");
  // Found live (safety-critical): this 70-char cap, combined with the
  // whole-string-anchored patterns above, silently dropped any real
  // first-person emergency that included even a little elaboration -- see
  // the IMMEDIATE comment above. The patterns themselves are now the only
  // gate (still bounded by this function's own 400-char overall cap above).
  // An ordinary or past thing that only sounds like an emergency ("I cannot get up in the morning", "my friend was not breathing when we found him in the war") must not push a
  // real alert to someone's family.
  const notAnEmergency = crisisPhrases.notAnEmergency(raw);
  if (!notAnEmergency && (IMMEDIATE.some(pattern => pattern.test(lower)) || circleAlertRequested(lower))) return { kind: "emergency", language: "en" };
  if (IMMEDIATE_SW.some(pattern => pattern.test(lower)) || circleAlertRequestedSw(lower)) return { kind: "emergency", language: "sw" };
  if (ASK_FIRST.test(lower)) return { kind: "ask", language: "en" };
  if (ASK_FIRST_SW.test(lower)) return { kind: "ask", language: "sw" };
  // "I took all my pills" (most often just taking medicine) gets a calm check-in, not an alert.
  if (crisisPhrases.mightBeOverdose(raw)) return { kind: "ask", language: "en" };
  // Fainting, a face drooping, slurred speech, one side weak, shaking and sweating, a low sugar: the calm urgent reply with the number to call and the offer to alert the circle.
  if (crisisPhrases.medicalUrgent(raw)) return { kind: "ask", language: "en" };
  const weapon = crisisPhrases.mentionsMeans(raw) ? { weapon: true } : {};
  if (SELF_HARM.some(pattern => pattern.test(raw))) return { kind: "self_harm", language: "en", ...weapon };
  if (SELF_HARM_SW.some(pattern => pattern.test(lower))) return { kind: "self_harm", language: "sw", ...weapon };
  if (crisisPhrases.selfHarm(raw)) return { kind: "self_harm", language: SWAHILI_WORDS.test(lower) ? "sw" : "en", ...weapon };
  if (crisisPhrases.harmOthers(raw)) return { kind: "harm_others", language: "en" };
  if (crisisPhrases.abuse(raw)) return { kind: "abuse", language: "en" };
  // Someone asking for a PIN, a password or money by phone or message: said plainly, never to share it.
  if (crisisPhrases.scam(raw)) return { kind: "scam", language: "en" };
  // "remember that my mpesa pin is 4821": never saved as a note or a fact, and never read back.
  if (crisisPhrases.storesSecret(raw)) return { kind: "secret", language: "en" };
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
  if (kind === "scam") return t(language, "safety.scam");
  if (kind === "secret") return t(language, "safety.secretRefused");
  const circleOffer = members.length ? t(language, "safety.selfHarmCircle", { names: members.map(member => member.otherName).join(", ") }) : "";
  if (kind === "harm_others") return t(language, "safety.harmOthers", { circle: circleOffer });
  if (kind === "abuse") return t(language, "safety.abuse", { circle: circleOffer });
  return t(language, found.weapon ? "safety.selfHarmWeapon" : "safety.selfHarm", { circle: circleOffer });
}

module.exports = Object.freeze({ safetyTurn, safeTurn, readSafety, readSafetyDetailed, readSafe, safeLanguage, alertCircle });
