"use strict";

const { normalizeRecipient } = require("../communications/send-request.js");
const { toAsciiDigits } = require("../speech/normalise.js");

// People the person has told Kyro about ("Save Otieno's number as +254712345678"), so "Text Otieno the delivery is ready" and "Call my
// brother" work by name. Only what the person plainly says; nothing is imported or guessed; only ever used when they name the person.
const NOT_A_NAME = new Set(["me", "my", "your", "his", "her", "their", "our", "the", "a", "an", "this", "that", "it", "number", "phone", "email", "contact", "anyone", "someone", "everyone",
  "whatever", "mine", "yours", "own", "new", "mobile", "cell", "address", "name", "who", "what", "which", "and", "or", "to", "from",
  // pronouns and loose words a request leaves behind ("Actually call him instead")
  "him", "them", "us", "you", "she", "he", "they", "we", "i", "instead", "too", "also", "again", "then", "there", "here", "back", "later", "now", "today", "tomorrow", "something", "somebody", "anybody", "nobody", "one", "ones", "these", "those", "as", "on", "at", "is", "for", "of", "in", "with", "by", "about", "please",
  // Found live (calendar/notes audit): contactName() gates every "forget X"
  // request, including the bare (no "contact" qualifier needed) form -- but
  // with no domain-noun exclusions, "forget my rent reminder"/"forget my vet
  // visit"/"forget my dentist appointment" all parsed as a plausible 1-3-word
  // name and were intercepted here, ahead of reminders' own "forget my ...
  // reminder" cancel matcher (nexus/brain/planner.js dispatches contacts
  // before reminders), replying "I don't have a contact called Rent
  // Reminder" instead of ever cancelling the reminder.
  "reminder", "reminders", "meeting", "meetings", "appointment", "appointments", "visit", "visits", "note", "notes",
  "event", "events", "list", "lists", "todo", "todos", "task", "tasks", "alarm", "alarms", "calendar", "schedule"]);
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();

// What a request leaves in front of or behind a name: the verb, politeness, a particle, "number"/"simu". ("Save Otieno's number as" -> Otieno, "Could You Save Otieno's" -> Otieno,
// "Abeg Save Otieno" -> Otieno, "Mama On" -> Mama, "Call Juma simu" -> Juma, "Actually call him instead" -> nothing.)
const LEADING_NOISE = /^(?:please|pls|kindly|tafadhali|abeg|biko|actually|then|so|just|ok|okay|and|oh|um|uh|hey|kyro|nexus|could you|can you|would you|will you|i want you to|i want to|i would like to|i'd like to|lets|let's|maybe|remember to|go ahead and|also|now)\b[\s,]*/i;
const LEADING_VERB = /^(?:call|phone|ring|dial|text|sms|whatsapp|message|e-?mail|tell|send|save|add|store|remember|note|forget|delete|remove|erase|contact|mpigie|piga|tuma|mtumie|nitumie|hifadhi|weka|andika|mwambie|niambie|ongeza)\b[\s,]*/i;
const LEADING_PARTICLE = /^(?:to|for|a|an|the|my|our|your|kwa|ya|za|namba ya|nambari ya|number for|number of|numbers? of|contact|contacts?)\b[\s,]*/i;
const TRAILING_NOISE = /[\s,]+(?:simu|namba|nambari|number|numbers|phone|mobile|cell|contact|please|pls|tafadhali|now|today|instead|too|also|again|then|as|on|at|is|for|to|from|with|and|that|kwa|na|ni|kama|the|a|an|my|saying|says|about)$/i;

// 1-3 plain words, none of them filler. Any alphabet (diacritics and decomposed forms included): "Adébáyọ̀ Ọláwálé", "Wanjiku Mũthoni", "Ɗanjuma".
function cleanContactName(raw, { maxWords = 3 } = {}) {
  let t = clean(toAsciiDigits(raw)).replace(/[’‘]/g, "'").replace(/[.,!?;:]+$/g, "");
  for (let pass = 0; pass < 6; pass += 1) {
    const before = t;
    t = t.replace(LEADING_NOISE, "").replace(LEADING_VERB, "").replace(LEADING_PARTICLE, "");
    if (t === before) break;
  }
  for (let pass = 0; pass < 6; pass += 1) {
    const before = t;
    t = t.replace(/[.,!?;:]+$/g, "").trim().replace(/['’]s?$/i, "").replace(TRAILING_NOISE, "").trim();
    if (t === before) break;
  }
  // a possessive in the middle of what is left ("Otieno's number" was cut above; "Mary's mother" stays two words and is rejected below only if a word is filler)
  t = t.split(" ").map(word => word.replace(/['’]s$/i, "")).join(" ");
  const words = t.split(" ").filter(Boolean);
  if (!words.length || words.length > maxWords) return "";
  if (words.some(word => !/^[\p{L}\p{M}][\p{L}\p{M}'’.-]{0,24}$/u.test(word) || NOT_A_NAME.has(word.toLowerCase()))) return "";
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}
// "otieno", "amina wanjiru", "brother" (from "my brother"): 1-3 short words, no digits or symbols, none of them filler.
const contactName = raw => cleanContactName(raw);

// A phone number as it is written every day, turned into the +country form that can be dialled or texted:
//   Kenya   0712345678, 0712 345 678, 0112345678, 254712345678, 712345678      -> +254712345678
//   Nigeria 08012345678, 0803 123 4567, 0701 234 5678, 0901..., 2348012345678    -> +2348012345678
//   United States / Canada   (404) 555-0123, 404-555-0123, 404 555 0123, 4045550123, 1-404-555-0123 -> +14045550123
// The three cannot be mistaken for each other (a Kenyan number has 9 digits after the 0, a Nigerian one 10 after the 0, a US/Canadian one 10 digits that start 2-9 with no 0), so this needs no guess about the
// country; the caller says the result back. Fullwidth and Arabic-Indic digits are read as the ordinary digits. null when it is not a number of any of these countries.
function localPhoneToE164(value) {
  const digits = toAsciiDigits(value).replace(/[\s().-]/g, "");
  let m;
  if ((m = /^(?:0|254)?([17]\d{8})$/.exec(digits))) return { phone: `+254${m[1]}`, country: "Kenya" };
  if ((m = /^(?:0|234)((?:70|80|81|90|91)\d{8})$/.exec(digits))) return { phone: `+234${m[1]}`, country: "Nigeria" };
  // North American numbers: area code and exchange never start with 0 or 1, so a 10-digit number written without a leading 0 is one (a leading 1 is the country code)
  if ((m = /^1?([2-9]\d{2}[2-9]\d{6})$/.exec(digits))) return { phone: `+1${m[1]}`, country: "United States" };
  return null;
}
// kept for the callers that only know Kenya
function kenyanLocalNumber(value) {
  const local = localPhoneToE164(value);
  return local && local.country === "Kenya" ? local.phone : null;
}
function contactValue(raw) {
  const value = clean(toAsciiDigits(raw)).replace(/[.,;!?]+$/g, "");
  const email = normalizeRecipient("email", value); if (email) return { email };
  const phone = normalizeRecipient("sms", value); if (phone) return { phone };
  const local = localPhoneToE164(value);
  const converted = local && normalizeRecipient("sms", local.phone);
  if (converted) return local.country === "Kenya" ? { phone: converted, assumedKenya: true } : { phone: converted, assumedCountry: local.country };
  // Digits without a country code ("0712345678") cannot be dialled or texted reliably: say so instead of saving something unusable.
  return /^\+?[\d\s().-]{7,20}$/.test(value) ? { invalid: "number" } : null;
}

// { name, phone?, email? } for "Save Otieno's number as +254...", "Add contact Amina +254...", "Otieno's email is o@x.com"; else null.
function extractContactStatement(text) {
  const t = clean(toAsciiDigits(text));
  if (!t || t.length > 140 || /[?]/.test(t)) return null;
  const NUM = "(\\+?\\d[\\d\\s().-]{5,18}\\d|\\S+)";
  const NUM_ONLY = "(\\+?\\d[\\d\\s().-]{5,18}\\d)";
  const forms = [
    new RegExp(`^(?:please )?(?:save|add|store|remember) (?:a |the )?(?:new )?contact:?\\s+(.+?)[,:]?\\s+${NUM}$`, "i"),
    new RegExp(`^(?:please )?(?:save|add|store|remember|note)(?: down)? (.+?)['’]s (?:phone |mobile |cell )?(?:number|email|email address|e-mail) (?:as|is|:)?\\s*${NUM}$`, "i"),
    new RegExp(`^(.+?)['’]s (?:phone |mobile |cell )?(?:number|email|email address|e-mail) is\\s+${NUM}$`, "i"),
    // "save number 0712345678 for Otieno" (the number comes first), and "Otieno number 0712345678" (no 's)
    new RegExp(`^(?:please )?(?:save|add|store) (?:the )?(?:phone )?number ${NUM_ONLY} for (.+)$`, "i"),
    new RegExp(`^(.+?) (?:phone |mobile |cell )?number (?:is |as |:)?\\s*${NUM_ONLY}$`, "i"),
    // Kiswahili: "hifadhi namba ya Otieno kama +254712345678", "weka namba ya Otieno ni 0712345678", "namba ya Otieno ni 0712345678"
    new RegExp(`^(?:(?:hifadhi|weka|andika|ongeza|save|add|store)\\s+)?(?:namba|nambari|simu|number)\\s+(?:ya|za|ta|wa|of|for)\\s+(.+?)\\s+(?:kama|ni|is|as|:)?\\s*${NUM_ONLY}$`, "i"),
    new RegExp(`^(?:hifadhi|weka|andika|ongeza)\\s+(.+?)\\s+(?:kama|ni|is|as|:)\\s*${NUM_ONLY}$`, "i")
  ];
  // "save Otieno 0712345678", "save Mary Wanjiku as 0712345678", "add Mary 0712345678 to my contacts": only with save or add, and only when the number is a real one, so "save maize 5000" is not a contact.
  const loose = new RegExp(`^(?:please )?(?:save|add|hifadhi|weka) (.+?)(?: as| at| is|:| kama| ni)? ${NUM_ONLY}(?: to my contacts| in my contacts| as a contact)?$`, "i").exec(t);
  if (loose) {
    const looseName = contactName(loose[1]); const looseValue = looseName && contactValue(loose[2]);
    if (looseValue && looseValue.phone) return { name: looseName, ...looseValue };
  }
  for (const [index, pattern] of forms.entries()) {
    const match = pattern.exec(t);
    if (!match) continue;
    // the "save number ... for Name" form has the number first
    const numberFirst = index === 3;
    const name = contactName(numberFirst ? match[2] : match[1]); const value = contactValue(numberFirst ? match[1] : match[2]);
    // The looser forms only ever save a real number: "gate number 12345678" is not asked about as a contact.
    if (index >= 3 && !(value && !value.invalid)) return null;
    return name && value ? { name, ...value } : null;
  }
  return null;
}

// { action: "list" } | { action: "forget", name } | { action: "lookup", name } | null
function extractContactRequest(text) {
  const t = clean(text).toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "");
  if (!t || t.length > 100) return null;
  if (/^(?:who are|what are|list|show|tell me) (?:all )?(?:of )?my contacts$/.test(t) || /^(?:show|list) (?:me )?my contacts$/.test(t) || /^who(?:'s| is) in my contacts$/.test(t)) return { action: "list" };
  // "Forget Otieno" is enough. "Delete/remove/erase X" must say it is a contact ("delete contact Otieno", "remove Otieno from my
  // contacts"), so "Delete my note about the pump" and "Remove milk from my shopping list" are left to notes and lists.
  const forget = /^(?:please )?forget (?:(?:the )?contact )?(?:for )?(.+?)(?: from my contacts)?$/.exec(t)?.[1]
    || /^(?:please )?(?:delete|remove|erase) (?:the )?contact (?:for )?(.+)$/.exec(t)?.[1]
    || /^(?:please )?(?:delete|remove|erase) (.+?) from my contacts$/.exec(t)?.[1];
  if (forget && !/^(?:that|this|it|everything|all|my (?:name|location|town|place|city|region|crops?|livestock|animals|language|farm|land|fields?|family|business|job|work|age|children|kids))/.test(forget)) {
    const name = contactName(forget.replace(/'s (?:phone |mobile |cell )?(?:number|email|email address|e-mail)$/, ""));
    if (name) return { action: "forget", name };
  }
  const lookup = /^(?:what(?:'s| is)|show|give me|find|get|read(?: me)?|tell me) (.+?)'s (?:phone |mobile |cell )?(?:number|email|email address|e-mail)$/.exec(t)?.[1]
    || /^(?:what(?:'s| is)|show|give me|find|get|tell me) (?:me )?(?:the )?(?:phone |mobile |cell )?(?:number|email|email address|e-mail) (?:for|of) (.+)$/.exec(t)?.[1];
  if (lookup) { const name = contactName(lookup); if (name) return { action: "lookup", name }; }
  return null;
}

// Find who is meant by a name: an exact match, else a first-name or single-word match. { contact } | { ambiguous: [contacts] } | null.
function resolveContact(list, query) {
  const wanted = contactName(query).toLowerCase();
  if (!wanted) return null;
  const all = (list || []).filter(item => item?.name);
  const exact = all.filter(item => item.name.toLowerCase() === wanted);
  if (exact.length === 1) return { contact: exact[0] };
  const loose = exact.length ? exact : all.filter(item => item.name.toLowerCase().split(" ").includes(wanted) || wanted.split(" ").every(word => item.name.toLowerCase().split(" ").includes(word)));
  if (loose.length === 1) return { contact: loose[0] };
  return loose.length > 1 ? { ambiguous: loose } : null;
}

function describeContact(contact) {
  return [contact.phone, contact.email].filter(Boolean).join(", ");
}

// "+254712345678" -> "+254 712 345 678": a number said back so the person can check it
function spokenPhone(phone) {
  const m = /^\+(254|255|256|250|234|233|27|1|44)(\d{6,12})$/.exec(String(phone || ""));
  if (!m) return String(phone || "");
  // Nigeria 803 123 4567 and the United States / Canada 555 123 4567 (3-3-4); the others in threes
  const rest = (m[1] === "234" || m[1] === "1") && m[2].length === 10 ? `${m[2].slice(0, 3)} ${m[2].slice(3, 6)} ${m[2].slice(6)}` : m[2].match(/.{1,3}/g).join(" ");
  return `+${m[1]} ${rest}`;
}

const isContact = content => Boolean(content && typeof content === "object" && content.kind === "contact" && typeof content.name === "string" && (content.phone || content.email));

module.exports = Object.freeze({ extractContactStatement, extractContactRequest, resolveContact, describeContact, contactName, cleanContactName, isContact, localPhoneToE164, kenyanLocalNumber, spokenPhone });
