"use strict";

// "Hello Nexus, this is Ron" was answered "Hello Standard. I am Nexus...": the greeting used the first word of the
// account's display name ("Standard User") and ignored the name the person actually said.

// Words that describe an account, not a person. A demo login called "Standard User" or "Platform Admin" should be
// greeted without a name rather than as "Standard".
const GENERIC_ACCOUNT_WORDS = new Set(["standard", "platform", "guest", "demo", "test", "user", "admin", "administrator", "account", "nexus", "kyro", "agrinexus"]);

function personalFirstName(user) {
  const first = String(user?.name || "").trim().split(/\s+/)[0] || "";
  return first && !GENERIC_ACCOUNT_WORDS.has(first.toLowerCase()) ? first : "";
}

// Words that are never a person's name: a health condition, a feeling, a state, a job or role, or a common word.
// "I am pregnant" / "I am diabetic" / "I am HIV positive" / "I am running out of pills" / "I am a farmer" are statements
// about a person, not introductions. They used to be saved as the person's display name and read back ("Hello Pregnant").
const NOT_A_NAME_WORDS = new Set((
  // conditions and body states
  "pregnant expecting pregnancy diabetic diabetes hypertensive hypertension asthmatic asthma epileptic epilepsy anaemic anemic hiv aids positive negative sick ill unwell injured injury hurt dying bleeding breastfeeding breastfeed nursing lactating "
  + "disabled deaf blind handicapped vomiting coughing dizzy weak feverish infected allergic malnourished depressed suicidal traumatised traumatized postpartum menopausal elderly old young cured healthy diseased paralysed paralyzed fainting faint "
  + "unconscious conscious dead alive well poorly pain painful swollen itchy burning shaking sweating choking breathing wheezing "
  // feelings and states
  + "tired sad scared afraid nervous hungry thirsty lost confused overwhelmed ready new fine okay ok good bad hot cold happy angry worried stressed anxious lonely hopeless upset sleepy exhausted busy free late early back here there home alone safe unsafe "
  + "sorry grateful thankful glad excited bored desperate broke poor rich drunk high starving hopeful frustrated annoyed jealous full empty fed done finished stuck trapped waiting leaving going coming trying looking wanting needing having getting running "
  + "very so not too just really also still only quite rather more most less much many some any all one two three four five six seven eight nine ten several few "
  // jobs, roles and relations
  + "farmer farmers trader teacher nurse doctor student driver vendor seller buyer miner fisherman herder shopkeeper mother father parent widow widower orphan grandmother grandma grandfather man woman girl boy child baby caregiver patient learner worker employee unemployed retired "
  + "chw midwife pharmacist manager owner businessman businesswoman entrepreneur cook tailor mechanic builder welder pastor cooperative member leader chairman secretary treasurer "
  // common words
  + "a an the this that it he she they we you who what when where why how from in on at with for to of about by as if or and but then than because while until after before into out up down over under again later tomorrow today tonight now soon please thanks thank "
  + "yes no maybe nothing something anything everything someone anyone nobody urgent emergency important serious "
  + "kenyan nigerian ghanaian ugandan tanzanian ethiopian african muslim christian catholic married single"
).split(/\s+/).filter(Boolean));
// Words that end a spoken name: "my name is Grace and I need a clinic".
const NAME_ENDERS = new Set(["and", "but", "or", "so", "because", "i", "im", "i'm", "ive", "my", "me", "we", "please", "how", "what", "can", "could", "would", "should", "need", "want", "have", "had", "do", "does", "is", "are", "was", "from", "in", "at", "on", "with", "who", "which", "that", "when", "where", "calling", "speaking"]);

function titleCase(word) {
  return word.split(/([-'])/).map(part => (/^[-']$/.test(part) ? part : part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())).join("");
}
// One word that could be a person's given name: letters only, not a word from the lists above, not an "-ing" word.
function plausibleNameWord(word, { explicit = false } = {}) {
  const w = String(word || "").trim();
  if (!/^[A-Za-z][A-Za-z'-]{1,29}$/.test(w)) return false;
  const lower = w.toLowerCase();
  if (NOT_A_NAME_WORDS.has(lower) || GENERIC_ACCOUNT_WORDS.has(lower)) return false;
  if (!explicit && /ing$/.test(lower) && lower.length > 4) return false;
  return true;
}
// A saved or newly spoken name as a clean display name, or "" when it is not one (so something saved before this check, like "Pregnant" or "Running Out Of", is never spoken back).
function usableDisplayName(value) {
  const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length || parts.length > 3) return "";
  if (parts.some(part => NAME_ENDERS.has(part.toLowerCase()) || !plausibleNameWord(part, { explicit: true }))) return "";
  return parts.map(titleCase).join(" ");
}

// Only a greeting that names the speaker, and only a capitalized name ("this is Ron"), so "hello, this is urgent" or
// "hi, I am hungry" are never taken for a name. Speech-to-text capitalizes proper names.
const GREETING_WITH_NAME = /^(?:hello|hi|hey|good (?:morning|afternoon|evening))[,!.\s]+(?:(?:nexus|kyro)[,!.\s]+)?(?:this is|my name is)\s+([A-Z][a-z'-]{1,30})\b/i;

function spokenNameFromGreeting(text) {
  const match = GREETING_WITH_NAME.exec(String(text || "").trim());
  const candidate = match?.[1] || "";
  // The prefix is matched case-insensitively; the name itself must be capitalized in the original text.
  if (!candidate || !/^[A-Z]/.test(candidate) || GENERIC_ACCOUNT_WORDS.has(candidate.toLowerCase()) || !usableDisplayName(candidate)) return "";
  return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
}

// A name the person says about themselves. Only two shapes count:
//   - an explicit name statement: "my name is Grace", "call me Grace", "I'm called Grace", "naitwa Grace", "jina langu ni Grace";
//   - "I am Grace" / "I'm Grace" / "this is Grace" when the name is a Capitalised proper name (up to two words) and nothing else in the sentence is a condition, feeling or role.
// "I am pregnant", "I'm very stressed", "I am HIV positive", "I am a farmer", "I am running out of pills", "call me later" are not names.
const EXPLICIT_NAME = /(?:\bmy name is|\bmy name's|\bi(?:'m| am) called|\bi(?:'m| am) named|\bcall me|\bpeople call me|\bnaitwa|\bninaitwa|\bjina langu ni)\s+([A-Za-z][A-Za-z'\s-]{1,50})/i;
const IMPLICIT_NAME = /(?:\b[Ii] am|\b[Ii]['’]m|\b[Ii]m|\b[Tt]his is|\b[Mm]imi ni)\s+([A-Z][A-Za-z'-]{1,29}(?:\s+[A-Z][A-Za-z'-]{1,29})?)\b(.*)$/;
const HARMLESS_AFTER_NAME = new Set(["a", "an", "the", "and", "from", "in", "at", "on", "with", "for", "to", "of", "how", "what", "who", "when", "where", "why", "this", "that", "it", "here", "there", "please", "thanks", "thank", "now", "again", "yes", "no", "you", "we", "they", "he", "she", "your"]);

function takeNameWords(raw, { explicit }) {
  const words = [];
  for (const word of String(raw || "").replace(/[,.!?;:].*$/, "").trim().split(/\s+/)) {
    if (!word || NAME_ENDERS.has(word.toLowerCase())) break;
    if (!plausibleNameWord(word, { explicit })) return [];
    words.push(word);
    if (words.length === 3) break;
  }
  return words;
}

function extractSpokenName(text) {
  const value = String(text || "").trim();
  if (!value) return "";
  const explicit = EXPLICIT_NAME.exec(value);
  if (explicit) {
    const words = takeNameWords(explicit[1], { explicit: true });
    return words.length ? words.map(titleCase).join(" ") : "";
  }
  // "I am <Name>" only as a plain introduction: nothing health-like or status-like may follow ("I am Grace and I am pregnant" is not an introduction we can trust).
  const implicit = IMPLICIT_NAME.exec(value);
  if (implicit) {
    const words = takeNameWords(implicit[1], { explicit: false });
    if (!words.length) return "";
    const rest = String(implicit[2] || "").toLowerCase().split(/[^a-z']+/).filter(Boolean);
    if (rest.some(word => NOT_A_NAME_WORDS.has(word) && !HARMLESS_AFTER_NAME.has(word))) return "";
    return words.map(titleCase).join(" ");
  }
  return "";
}

module.exports = Object.freeze({ personalFirstName, spokenNameFromGreeting, extractSpokenName, usableDisplayName, GENERIC_ACCOUNT_WORDS });
