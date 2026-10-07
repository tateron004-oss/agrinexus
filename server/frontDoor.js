"use strict";

// Pieces of the spoken/typed "front door" that server.js uses (kept here so the very large server.js only gains a few clearly separated lines):
//   * a short-lived idempotency cache for tool calls, so a retried call with the same correlationId never repeats its side effects;
//   * reading a request to TEXT / WhatsApp / SMS somebody, which must stay a message and never turn into a phone call.

const { localPhoneToE164, cleanContactName, spokenPhone } = require("../nexus/memory/contacts.js"); // spokenPhone: "+254712345678" -> "+254 712 345 678", a number said back so it can be checked
const { toAsciiDigits } = require("../nexus/speech/normalise.js");

// ---- idempotency ----
const TTL_MS = 2 * 60 * 1000;
const MAX_ENTRIES = 500;
const cache = new Map(); // key -> { at, promise }
function sweep(now) {
  for (const [key, entry] of cache) if (now - entry.at > TTL_MS) cache.delete(key);
  while (cache.size > MAX_ENTRIES) cache.delete(cache.keys().next().value);
}
// The same (person, correlationId, request) inside two minutes returns the FIRST result and does nothing again. Only calls that carry a correlationId are remembered;
// a person saying the same thing twice with no correlationId is two requests. A failed first attempt is forgotten so a retry really retries.
function idempotencyKey(userKey, correlationId, args) {
  const id = String(correlationId || "").trim();
  if (!id || !userKey) return "";
  return JSON.stringify([String(userKey), id, args]);
}
async function runOnce(key, run, now = Date.now()) {
  if (!key) return run();
  sweep(now);
  const hit = cache.get(key);
  if (hit && now - hit.at <= TTL_MS) return hit.promise;
  const promise = Promise.resolve().then(run);
  cache.set(key, { at: now, promise });
  promise.catch(() => { if (cache.get(key)?.promise === promise) cache.delete(key); });
  return promise;
}
const clearIdempotencyCache = () => cache.clear();

// ---- a request to send a message ----
const NUMBER = "(\\+?\\d[\\d\\s().-]{5,18}\\d)";
const DELIM = "(?:(?:saying|says|that says|to say|and say|and tell (?:him|her|them)|with the message|kwamba|akisema)\\b[:,]?\\s*|:\\s*)";
const VERB = "(text|sms|whats ?app|message|e-?mail)";
// roles and organisations are the older "contact the buyer" workflows, not a person to text
const ROLE_WORDS = /^(?:buyer|buyers|seller|sellers|provider|providers|doctor|nurse|clinic|telehealth|recruiter|employer|instructor|teacher|support|caregiver|pharmacy|vendor|supplier|emergency|admin|team|everyone|all|them|him|her|me|us|you|us)$/i;

function channelOf(verb) { return /whats/i.test(verb) ? "whatsapp" : /e-?mail/i.test(verb) ? "email" : "sms"; }
const tidyMessage = value => String(value || "").replace(/^\s*(?:kwamba|that|saying|:)\s+/i, "").replace(/^["“']+|["”']+$/g, "").replace(/\s+/g, " ").trim();

// { channel, phone?, assumedCountry?, invalid?, words?, message, swahili } | null.
//   phone    the number in +country form (a local 07xx / 08xx number is converted)
//   invalid  digits were given that are not a usable number
//   words    a name was given instead of a number: the words after the verb, for the caller to match against saved people
function readMessageRequest(text) {
  const t = toAsciiDigits(String(text || "")).replace(/\s+/g, " ").trim().replace(/^(?:(?:please|kyro|nexus|can you|could you|would you)[, ]+)+/i, "");
  if (!t || t.length > 600) return null;
  let m; let channel; let rest; let swahili = false;
  if ((m = new RegExp(`^${VERB}\\s+(?:to\\s+)?(.+)$`, "i").exec(t))) { channel = channelOf(m[1]); rest = m[2]; }
  else if ((m = new RegExp(`^send\\s+(?:an?\\s+|the\\s+)?${VERB}(?:\\s+message)?\\s+to\\s+(.+)$`, "i").exec(t))) { channel = channelOf(m[1]); rest = m[2]; }
  else if ((m = /^tuma\s+(?:ujumbe|sms|text|message)\s+(?:kwa|to)\s+(.+)$/i.exec(t))) { channel = "sms"; rest = m[1]; swahili = true; }
  else if ((m = /^(?:mtumie|nitumie|mtumieni)\s+(.+)$/i.exec(t))) { channel = "sms"; rest = m[1].replace(/^(?:ujumbe|text|sms)\s+(?:kwa\s+)?/i, "").replace(/^(\S+(?:\s+\S+){0,2}?)\s+(?:ujumbe|text|sms)\b\s*/i, "$1 "); swahili = true; }
  else if ((m = /^(?:tell|mwambie|niambie)\s+(.+)$/i.exec(t))) { channel = "sms"; rest = m[1]; swahili = !/^tell\b/i.test(t); }
  else return null;
  // a number first: "+254712345678 saying hello", "0712 345 678: hello"
  const number = new RegExp(`^${NUMBER}\\s*(?:${DELIM})?(.*)$`, "i").exec(rest) || new RegExp(`^(\\+?\\d[\\d\\s().-]{3,}\\d)\\s*(?:${DELIM})?(.*)$`, "i").exec(rest);
  if (number && /^[+\d]/.test(rest)) {
    const raw = number[1].trim();
    const direct = raw.replace(/[\s().-]/g, "");
    let phone = /^\+[1-9]\d{7,14}$/.test(direct) ? direct : "";
    let assumedCountry = "";
    if (!phone && !/^\+/.test(direct)) { const local = localPhoneToE164(raw); if (local) { phone = local.phone; assumedCountry = local.country; } }
    return { channel, phone, assumedCountry, invalid: !phone, message: tidyMessage(number[2]), swahili };
  }
  if (/^tell\b/i.test(t) || /^(?:mwambie|niambie)\b/i.test(t)) {
    // "tell me ...", "tell them ..." are not messages; only a name that is clearly a person
    if (/^(?:me|us|you|them|him|her|everyone|people|anyone|us)\b/i.test(rest)) return null;
  }
  const words = rest.split(/\s+/).filter(Boolean);
  if (!words.length || ROLE_WORDS.test(words[0]) || /^[\d+@]/.test(words[0]) || /@/.test(rest)) return null;
  if (/^(?:from|about|of|the|a|an|my|your|our|this|that|it)$/i.test(words[0]) && !/^my$/i.test(words[0])) return null;
  // a message that names its words with a delimiter: "text Mama Njeri saying hello"
  const delimited = new RegExp(`^(.{1,60}?)\\s+${DELIM}(.+)$`, "i").exec(rest);
  if (delimited) return { channel, words: delimited[1].split(/\s+/).filter(Boolean), message: tidyMessage(delimited[2]), delimited: true, swahili };
  return { channel, words, message: "", delimited: false, swahili };
}

// Which of the first 1-3 words is a saved person, and what is left is the message. `lookup(name)` returns an array of candidates ({ displayName, phone }).
function matchRecipient(request, lookup) {
  const words = request.words;
  const tries = request.delimited ? [words.length] : [3, 2, 1].filter(n => n <= words.length);
  for (const take of tries) {
    const candidate = words.slice(0, take).join(" ").replace(/^my\s+/i, "");
    if (!candidate) continue;
    if (cleanContactName(candidate, { maxWords: 4 }).split(" ").length !== candidate.split(" ").length && !request.delimited) continue;
    const found = lookup(candidate);
    if (found && found.length) return { take, candidate, found, message: request.delimited ? request.message : tidyMessage(words.slice(take).join(" ")) };
  }
  return null;
}

module.exports = Object.freeze({ idempotencyKey, runOnce, clearIdempotencyCache, readMessageRequest, matchRecipient, spokenPhone, TTL_MS });
