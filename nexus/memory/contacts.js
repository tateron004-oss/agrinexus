"use strict";

const { normalizeRecipient } = require("../communications/send-request.js");

// People the person has told Kyro about ("Save Otieno's number as +254712345678"), so "Text Otieno the delivery is ready" and "Call my
// brother" work by name. Only what the person plainly says; nothing is imported or guessed; only ever used when they name the person.
const NOT_A_NAME = new Set(["me", "my", "your", "his", "her", "their", "our", "the", "a", "an", "this", "that", "it", "number", "phone", "email", "contact", "anyone", "someone", "everyone",
  "whatever", "mine", "yours", "own", "new", "mobile", "cell", "address", "name", "who", "what", "which", "and", "or", "to", "from"]);
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();

// "otieno", "amina wanjiru", "brother" (from "my brother"): 1-3 short words, no digits or symbols, none of them filler.
function contactName(raw) {
  const words = clean(raw).replace(/^(?:my|our)\s+/i, "").replace(/[.,!?]+$/g, "").split(" ").filter(Boolean);
  if (!words.length || words.length > 3) return "";
  if (words.some(word => !/^[A-Za-z][A-Za-z'’-]{0,24}$/.test(word) || NOT_A_NAME.has(word.toLowerCase()))) return "";
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

function contactValue(raw) {
  const value = clean(raw).replace(/[.,;!?]+$/g, "");
  const email = normalizeRecipient("email", value); if (email) return { email };
  const phone = normalizeRecipient("sms", value); if (phone) return { phone };
  // Digits without a country code ("0712345678") cannot be dialled or texted reliably: say so instead of saving something unusable.
  return /^\+?[\d\s().-]{7,20}$/.test(value) ? { invalid: "number" } : null;
}

// { name, phone?, email? } for "Save Otieno's number as +254...", "Add contact Amina +254...", "Otieno's email is o@x.com"; else null.
function extractContactStatement(text) {
  const t = clean(text);
  if (!t || t.length > 140 || /[?]/.test(t)) return null;
  const forms = [
    /^(?:please )?(?:save|add|store|remember) (?:a |the )?(?:new )?contact:?\s+(.+?)[,:]?\s+(\+[\d\s().-]{6,18}\d|\S+)$/i,
    /^(?:please )?(?:save|add|store|remember|note)(?: down)? (.+?)['’]s (?:phone |mobile |cell )?(?:number|email|email address|e-mail) (?:as|is|:)\s*(\+[\d\s().-]{6,18}\d|\S+)$/i,
    /^(.+?)['’]s (?:phone |mobile |cell )?(?:number|email|email address|e-mail) is\s+(\+[\d\s().-]{6,18}\d|\S+)$/i
  ];
  for (const pattern of forms) {
    const match = pattern.exec(t);
    if (!match) continue;
    const name = contactName(match[1]); const value = contactValue(match[2]);
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
  const lookup = /^what(?:'s| is) (.+?)'s (?:phone |mobile |cell )?(?:number|email|email address|e-mail)$/.exec(t)?.[1];
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
