"use strict";

// Small, pure readings of what a person said, found by the phrase sweep (scripts/dev/real-runtime/phrases.mjs) on the real server. Each one is a rule that was missing or too wide.
// No state, no database, no network, so each can be tested alone (test/nexus/spoken-requests.test.js).

const clean = text => String(text || "").replace(/\s+/g, " ").trim();

// Found by the sweep: "Hali ya hewa Kisumu ikoje?" (the documented Kiswahili weather phrase) reached the weather tool with no place, because only English lead-ins ("in", "for", "near") were looked for,
// and Kyro asked in English which place was meant. Returns the place, or "" when none is named ("Hali ya hewa ikoje?", "hali ya hewa leo").
function swahiliWeatherLocation(text) {
  const spoken = clean(text).replace(/[?!.]+$/g, "");
  const match = spoken.match(/\bhali ya hewa(?:\s+ya)?\s+(?:(?:leo|kesho|sasa|wiki hii)\s+)?(?:(?:huko|kule|pale|hapa)\s+)?(.+)$/i);
  if (!match) return "";
  const place = match[1]
    .replace(/\s+(?:ikoje|iko aje|ni vipi|ni ipi|vipi|inaonekanaje|itakuwaje|ikoje leo|leo|kesho|sasa|hivi sasa)$/i, "")
    .replace(/^(?:ya|katika|mjini|kwa)\s+/i, "")
    .trim();
  if (!place || /^(?:ikoje|iko aje|vipi|leo|kesho|sasa|hapa|yangu|huku|nje)$/i.test(place)) return "";
  return place.slice(0, 80);
}

// Found by the sweep: "Visit Mary: temperature 38.5, cough" (a health worker's note) was answered with "Which city or country should I check for weather?", because the word temperature alone means weather.
// A number a person can have (35 to 42, one decimal) straight after the word is a body temperature unless the weather is named.
function isBodyTemperatureReport(text) {
  const spoken = clean(text).toLowerCase();
  if (/\b(?:weather|forecast|outside|rain|hali ya hewa|joto la hewa)\b/.test(spoken)) return false;
  return /\b(?:temperature|temp|joto)\s*(?:is|was|of|at|ni|la mwili|:|=)?\s*(?:3[5-9]|4[0-2])(?:[.,]\d)?\b/.test(spoken);
}

// Found by the sweep: "Antenatal visit Mary: blood pressure fine, baby moving" was answered with the emergency script, because the single word "blood" counted as a danger sign next to the word "baby".
// "blood pressure", "blood sugar", "blood test" and the like are readings and tests, not bleeding.
function bloodMeansDanger(text) {
  const spoken = clean(text).toLowerCase();
  return /\bblood\b(?!\s+(?:pressure|sugar|glucose|test|tests|group|type|count|reading|readings|oxygen|donation|work|results?|thinner|thinners|bp))/.test(spoken);
}

// Found by the sweep: "Weka tangazo: ninauza kilo 500 za mahindi kwa shilingi 40 kwa kilo" (the documented Kiswahili way to post a listing) was treated as browsing, and answered with eight sample listings.
const LISTING_CREATE_EN = /\b(create|post|publish|list|sell)\b/i;
const LISTING_CREATE_SW = /\b(weka tangazo|tangaza|ninauza|nauza|nataka kuuza|andika tangazo|weka (?:mazao|mahindi|bidhaa) (?:sokoni|kuuzwa))\b/i;
function wantsListingCreate(command) {
  const spoken = clean(command);
  if (/\bwhat('?s| is)\b.*\b(available|listed|for sale|on agritrade)\b/i.test(spoken) || /\b(browse|see what|show me what)\b/i.test(spoken)) return false;
  if (/\b(do|did|does|have|has)\s+you\s+(sell|sold|list(?:ed)?|post(?:ed)?|publish(?:ed)?|creat(?:e|ed))\b/i.test(spoken)) return false;
  return LISTING_CREATE_EN.test(spoken) || LISTING_CREATE_SW.test(spoken);
}

// Found by the sweep: "Post for sale: 500 kg maize at 40 per kg" was answered with the provider's internal sentence ("nexus-marketplace-bridge marketplace.listing requires explicit confirmed: true before controlled
// testing can run"). The person is told what is about to happen and asked for a yes, in plain words.
const INTERNAL_CONFIRMATION = /requires explicit confirmed:\s*true|before controlled testing/i;
function plainConfirmationSentence(command) {
  const what = clean(command).replace(/[.!?]+$/g, "").slice(0, 160);
  return what ? `Before I go ahead with "${what}", I need your yes. Say yes to do it, or no to cancel.` : "I need your yes before I go ahead. Say yes to do it, or no to cancel.";
}
function isInternalConfirmationMessage(message) { return INTERNAL_CONFIRMATION.test(String(message || "")); }

// Found by the sweep: "She has heavy bleeding" (a danger sign the capabilities list promises an urgent reply for) got "I opened Health and Chronic Care" from the health tool and nothing from the older route.
function isHeavyBleeding(text) {
  const spoken = clean(text).toLowerCase();
  return /\b(?:heavy|severe|serious|massive|profuse) bleeding\b|\bbleeding (?:heavily|profusely)\b|\b(?:losing|lost) (?:a lot of|so much|too much) blood\b/.test(spoken);
}

// Found by the sweep: the voice instructions send "I ran 5 km in 30 minutes", "I slept 7 hours", "My goal is 4 workouts a week" and "Undo my last workout" to the health tool, which only knew "log a 30 minute run";
// it answered "I opened Health and Chronic Care" and logged nothing, while the typed route logs all of them in the wellness log. These are the sentences the wellness log understands, so the health tool can hand them to it.
// (A reading of weight, blood pressure or sugar is not here: those have their own read-back-and-yes route.)
const WELLNESS_LOG = [
  /\bi\s+(?:ran|walked|jogged|cycled|biked|swam|hiked|rowed)\b.*\b(?:km|kms|kilomet\w*|miles?|minutes?|mins?|hours?|laps?|steps)\b/i,
  /\bi\s+(?:slept|sleep)\b.*\bhours?\b/i,
  /\bi\s+(?:drank|had)\b.*\b(?:litres?|liters?|cups?|glass(?:es)?|ml)\b.*\bwater\b|\bi\s+drank\b.*\bwater\b/i,
  /\bmy\s+(?:weekly\s+)?goal\s+is\b.*\b(?:workouts?|sessions?|runs?|steps|hours|litres?|liters?)\b/i,
  /\b(?:how many|how (?:did|am) i)\b.*\b(?:workouts?|sleep|slept|training|exercise)\b/i,
  /\bshow\s+my\s+(?:training|workout|exercise|sleep)\s+(?:log|history)\b/i,
  /\bundo\s+my\s+last\s+(?:workout|run|walk|session)\b/i
];
function isWellnessLogRequest(text) {
  const spoken = clean(text);
  return spoken.length > 0 && spoken.length <= 200 && WELLNESS_LOG.some(pattern => pattern.test(spoken));
}

// Found by the sweep: "Visit Mary: temperature 38.5, cough" sent to the health tool was taken for the person's OWN temperature reading ("I noted the temperature reading 38.5, but saving it to your monitoring record is
// unavailable"). A note about a patient (visit, follow-up, registering a patient) is a health worker's record, never the speaker's own reading.
function isPatientNote(text) {
  return /^\s*(?:please\s+)?(?:(?:antenatal |anc |postnatal |pnc |home |clinic )?visit(?: note)?|ziara ya|register (?:a )?patient|follow[- ]?up|add (?:a )?visit|record (?:a )?visit)\b/i.test(clean(text));
}

// Found by the sweep: "Text John I am late" through the communications tool answered "twilio sms.send is disabled. Enable NEXUS_SMS_ENABLED=true for controlled testing." (and the same for a call, naming sms). A person is not told
// environment variable names; they are told it is not switched on and that nothing happened.
const SWITCHED_OFF = /\b(?:is disabled|is not configured|not configured\b.*\bbefore live testing|Enable NEXUS_[A-Z_]+)/i;
function isInternalSwitchedOffMessage(message) { return /NEXUS_[A-Z0-9_]{3,}|before live testing/.test(String(message || "")) && SWITCHED_OFF.test(String(message || "")); }
function plainSwitchedOffSentence(body = {}) {
  const text = `${body.provider || ""} ${body.action || ""}`;
  const what = /sms|text|twilio/i.test(text) ? "Sending texts is" : /call|voice|phone/i.test(text) ? "Phone calls are" : /email|mail/i.test(text) ? "Sending email is" : "That is";
  return `${what} not switched on for this account yet, so nothing was sent or changed.`;
}

module.exports = Object.freeze({ isPatientNote, isInternalSwitchedOffMessage, plainSwitchedOffSentence, isHeavyBleeding, isWellnessLogRequest, swahiliWeatherLocation, isBodyTemperatureReport, bloodMeansDanger, wantsListingCreate, plainConfirmationSentence, isInternalConfirmationMessage });
