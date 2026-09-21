"use strict";

// Emergencies and moments of crisis. Two things happen here and they are deliberately different:
//
//  * The person says, plainly, that they need help NOW ("this is an emergency", "I've fallen", "alert my circle"): every member of their
//    circle who has said yes is alerted by push, immediately, and the person is told exactly who. This is the one thing a circle member is
//    told without the person choosing anything else, and it is only ever triggered by the person's own words. Autonomy pause does not stop
//    it, because the person asked for it.
//  * The person says something that suggests they may harm themselves: Kyro answers with care, points to real people and their local
//    emergency number, and OFFERS to alert the circle ("say 'alert my circle'"). It never claims to be a crisis service, never acts on the
//    person's behalf without their word, and never argues.
//
// The wording of the crisis reply must be reviewed by a clinician and a veterans' or crisis organisation before this is relied on live.
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

// "emergency" | "ask" | "self_harm" | null
function readSafety(text) {
  const t = clean(text);
  if (!t || t.length > 400) return null;
  const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  if (lower.length <= 70 && IMMEDIATE.some(pattern => pattern.test(lower))) return "emergency";
  if (ASK_FIRST.test(lower)) return "ask";
  if (SELF_HARM.some(pattern => pattern.test(t))) return "self_harm";
  return null;
}

const NUMBER_LINE = "If you might be in danger, please call your local emergency number now.";

// Alerts everyone in the person's circle who has said yes. Returns the members reached (with what each has chosen to share).
async function alertMembers({ circle, push, tenantId, userId, userName, now = new Date() }) {
  const members = circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }) : [];
  const bucket = Math.floor(now.getTime() / (5 * 60 * 1000)); // a second alert within five minutes is the same alert, not a second push
  const delivered = [];
  for (const member of members) {
    try {
      await push?.(member.otherId, "Emergency alert", `${userName || "Someone in your circle"} asked Kyro for urgent help just now. Please contact them right away, or call for help if you can't reach them.`, `emergency:${userId}:${member.otherId}:${bucket}`);
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
const readSafe = text => { const t = clean(text).toLowerCase().replace(/[.!?]+$/g, ""); return t.length > 0 && t.length <= 60 && SAFE.some(pattern => pattern.test(t)); };

// The person says they are safe while an alert of theirs is still open: the circle is told, and no more location is sent. Otherwise null (an ordinary "I'm fine").
async function safeTurn({ text, circle, push, tenantId, userId, userName, now = new Date(), outcome = null }) {
  if (!readSafe(text) || !circle?.latestAlert) return null;
  const alert = await circle.latestAlert({ tenantId, userId, now }).catch(() => null);
  if (!alert || alert.ended) return null;
  await circle.updateAlert({ tenantId, userId, memoryId: alert.memoryId, change: content => ({ ...content, ended: true, endedAt: now.toISOString() }) }).catch(() => false);
  const active = circle.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }).catch(() => []) : [];
  const told = [];
  for (const member of active.filter(item => (alert.alerted || []).some(entry => entry.id === item.otherId))) {
    try { await push?.(member.otherId, "Emergency over", `${userName || "Someone in your circle"} says they are safe now. No more location will be sent.`, `emergency-clear:${alert.alertId}:${member.otherId}`); told.push(member.otherName); } catch { /* one failed push must not stop the others */ }
  }
  if (outcome) outcome.emergency = { alertId: alert.alertId, ended: true };
  return told.length ? `I'm glad you're safe. I've told ${told.join(", ")} that you're okay, and I've stopped sharing your location.` : "I'm glad you're safe. I've closed the alert.";
}

// Returns the words to answer with, or null when this is not a safety moment. `recordAlert` remembers an alert so the person's location can follow it, and
// `outcome` (optional) receives { emergency: { alertId, shareLocation, ... } } so the phone knows to send it; both are optional.
async function safetyTurn({ text, circle, push, tenantId, userId, userName, now = new Date(), recordAlert = null, outcome = null }) {
  const kind = readSafety(text);
  if (!kind) return null;
  const members = circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }).catch(() => []) : [];
  if (kind === "emergency") {
    if (!members.length) return `I don't have anyone in your circle yet, so I couldn't alert anyone. ${NUMBER_LINE} Once you're safe, we can add people you trust: "add name@example.com to my circle".`;
    const delivered = await alertMembers({ circle, push, tenantId, userId, userName, now });
    if (!delivered.length) return `I tried to alert your circle but couldn't reach anyone just now. ${NUMBER_LINE}`;
    const names = delivered.map(member => member.otherName);
    // Location follows only for members the person has chosen to share it with, and only when this alert could be remembered.
    let extra = "";
    if (recordAlert) {
      try {
        const sharers = delivered.filter(member => member.shares?.emergencyLocation);
        const remembered = await recordAlert({ tenantId, userId, alerted: delivered, now });
        if (outcome) outcome.emergency = { alertId: remembered.alertId, alerted: names, shareLocation: sharers.length > 0, locationTo: sharers.map(member => member.otherName) };
        if (sharers.length) extra = ` I'll send your location to ${sharers.map(member => member.otherName).join(", ")} as soon as your phone tells me where you are.`;
      } catch { /* the alert itself already went; location is a bonus */ }
    }
    return `I've alerted ${names.join(", ")}.${extra} ${NUMBER_LINE} I'm here with you.`;
  }
  if (kind === "ask") {
    return members.length
      ? `I'm here. If this is urgent, say "alert my circle" and I'll message ${members.map(member => member.otherName).join(", ")} right away. ${NUMBER_LINE} Or tell me what's happening.`
      : `I'm here. ${NUMBER_LINE} Tell me what's happening and I'll do what I can.`;
  }
  return `I'm really sorry you're feeling this way, and I'm glad you told me. You matter, and you don't have to carry this alone. If you might act on these thoughts, or you're in danger right now, please call your local emergency number or a crisis line in your country, or go to someone who can be with you. ${members.length ? `I can alert ${members.map(member => member.otherName).join(", ")} right now — just say "alert my circle". ` : ""}I'm here, and I'm listening.`;
}

module.exports = Object.freeze({ safetyTurn, safeTurn, readSafety, readSafe, alertCircle });
