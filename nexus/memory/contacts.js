"use strict";

const { normalizeRecipient } = require("../communications/send-request.js");

// People the person has told Kyro about ("Save Otieno's number as +254712345678"), so "Text Otieno the delivery is ready" and "Call my
// brother" work by name. Only what the person plainly says; nothing is imported or guessed; only ever used when they name the person.
const NOT_A_NAME = new Set(["me", "my", "your", "his", "her", "their", "our", "the", "a", "an", "this", "that", "it", "number", "phone", "email", "contact", "anyone", "someone", "everyone",
  "whatever", "mine", "yours", "own", "new", "mobile", "cell", "address", "name", "who", "what", "which", "and", "or", "to", "from",
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

// "otieno", "amina wanjiru", "brother" (from "my brother"): 1-3 short words, no digits or symbols, none of them filler.
function contactName(raw) {
  const words = clean(raw).replace(/^(?:my|our|the)\s+/i, "").replace(/[.,!?]+$/g, "").split(" ").filter(Boolean);
  if (!words.length || words.length > 3) return "";
  if (words.some(word => !/^[A-Za-z][A-Za-z'’-]{0,24}$/.test(word) || NOT_A_NAME.has(word.toLowerCase()))) return "";
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

// A Kenyan number as it is written every day: "0712345678", "0712 345 678", "0712-345-678", "254712345678", "712345678". It is saved as +254..., and the person is told so, because the
// same ten digits starting 07 could be a number in Uganda or Tanzania (said back: "I took it as a Kenyan number").
function kenyanLocalNumber(value) {
  const digits = value.replace(/[\s().-]/g, "");
  const match = /^(?:0|254)?([17]\d{8})$/.exec(digits);
  return match ? `+254${match[1]}` : null;
}
function contactValue(raw) {
  const value = clean(raw).replace(/[.,;!?]+$/g, "");
  const email = normalizeRecipient("email", value); if (email) return { email };
  const phone = normalizeRecipient("sms", value); if (phone) return { phone };
  const local = kenyanLocalNumber(value);
  const kenyan = local && normalizeRecipient("sms", local);
  if (kenyan) return { phone: kenyan, assumedKenya: true };
  // Digits without a country code ("0712345678") cannot be dialled or texted reliably: say so instead of saving something unusable.
  return /^\+?[\d\s().-]{7,20}$/.test(value) ? { invalid: "number" } : null;
}

// { name, phone?, email? } for "Save Otieno's number as +254...", "Add contact Amina +254...", "Otieno's email is o@x.com"; else null.
function extractContactStatement(text) {
  const t = clean(text);
  if (!t || t.length > 140 || /[?]/.test(t)) return null;
  const forms = [
    /^(?:please )?(?:save|add|store|remember) (?:a |the )?(?:new )?contact:?\s+(.+?)[,:]?\s+(\+?\d[\d\s().-]{5,18}\d|\S+)$/i,
    /^(?:please )?(?:save|add|store|remember|note)(?: down)? (.+?)['’]s (?:phone |mobile |cell )?(?:number|email|email address|e-mail) (?:as|is|:)?\s*(\+?\d[\d\s().-]{5,18}\d|\S+)$/i,
    /^(.+?)['’]s (?:phone |mobile |cell )?(?:number|email|email address|e-mail) is\s+(\+?\d[\d\s().-]{5,18}\d|\S+)$/i,
    // "save number 0712345678 for Otieno" (the number comes first), and "Otieno number 0712345678" (no 's)
    /^(?:please )?(?:save|add|store) (?:the )?(?:phone )?number (\+?\d[\d\s().-]{5,18}\d) for (.+)$/i,
    /^(.+?) (?:phone |mobile |cell )?number (?:is |as |:)?\s*(\+?\d[\d\s().-]{5,18}\d)$/i
  ];
  // "save Otieno 0712345678", "save Mary Wanjiku as 0712345678", "add Mary 0712345678 to my contacts": only with save or add, and only when the number is a real one, so "save maize 5000" is not a contact.
  const loose = /^(?:please )?(?:save|add) (.+?)(?: as| at| is|:)? (\+?\d[\d\s().-]{5,18}\d)(?: to my contacts| in my contacts| as a contact)?$/i.exec(t);
  if (loose) {
    const looseName = contactName(loose[1]); const looseValue = looseName && contactValue(loose[2]);
    if (looseValue && looseValue.phone) return { name: looseName, ...looseValue };
  }
  for (const [index, pattern] of forms.entries()) {
    const match = pattern.exec(t);
    if (!match) continue;
    // the "save number ... for Name" form has the number first
    const numberFirst = /^(?:please )?(?:save|add|store) (?:the )?(?:phone )?number /i.test(t);
    const name = contactName(numberFirst ? match[2] : match[1]); const value = contactValue(numberFirst ? match[1] : match[2]);
    // The two newer, looser forms only ever save a real number: "gate number 12345678" is not asked about as a contact.
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
  if (forget && !/^(?:that|this|it|everything|all|my (?:name|location|town|place|city|region|crops?|livestock|animals|language))/.test(forget)) {
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

const isContact = content => Boolean(content && typeof content === "object" && content.kind === "contact" && typeof content.name === "string" && (content.phone || content.email));

module.exports = Object.freeze({ extractContactStatement, extractContactRequest, resolveContact, describeContact, contactName, isContact });
