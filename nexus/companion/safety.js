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

// Alerts everyone in the person's circle who has said yes. Returns the names alerted.
async function alertCircle({ circle, push, tenantId, userId, userName, now = new Date() }) {
  const members = circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }) : [];
  const bucket = Math.floor(now.getTime() / (5 * 60 * 1000)); // a second alert within five minutes is the same alert, not a second push
  const alerted = [];
  for (const member of members) {
    try {
      await push?.(member.otherId, "Emergency alert", `${userName || "Someone in your circle"} asked Kyro for urgent help just now. Please contact them right away, or call for help if you can't reach them.`, `emergency:${userId}:${member.otherId}:${bucket}`);
      alerted.push(member.otherName);
    } catch { /* keep going: one failed push must not stop the others */ }
  }
  return alerted;
}

// Returns the words to answer with, or null when this is not a safety moment.
async function safetyTurn({ text, circle, push, tenantId, userId, userName, now = new Date() }) {
  const kind = readSafety(text);
  if (!kind) return null;
  const members = circle?.activeMembers ? await circle.activeMembers({ tenantId, personId: userId }).catch(() => []) : [];
  if (kind === "emergency") {
    if (!members.length) return `I don't have anyone in your circle yet, so I couldn't alert anyone. ${NUMBER_LINE} Once you're safe, we can add people you trust: "add name@example.com to my circle".`;
    const alerted = await alertCircle({ circle, push, tenantId, userId, userName, now });
    if (!alerted.length) return `I tried to alert your circle but couldn't reach anyone just now. ${NUMBER_LINE}`;
    return `I've alerted ${alerted.join(", ")}. ${NUMBER_LINE} I'm here with you.`;
  }
  if (kind === "ask") {
    return members.length
      ? `I'm here. If this is urgent, say "alert my circle" and I'll message ${members.map(member => member.otherName).join(", ")} right away. ${NUMBER_LINE} Or tell me what's happening.`
      : `I'm here. ${NUMBER_LINE} Tell me what's happening and I'll do what I can.`;
  }
  return `I'm really sorry you're feeling this way, and I'm glad you told me. You matter, and you don't have to carry this alone. If you might act on these thoughts, or you're in danger right now, please call your local emergency number or a crisis line in your country, or go to someone who can be with you. ${members.length ? `I can alert ${members.map(member => member.otherName).join(", ")} right now — just say "alert my circle". ` : ""}I'm here, and I'm listening.`;
}

module.exports = Object.freeze({ safetyTurn, readSafety, alertCircle });
