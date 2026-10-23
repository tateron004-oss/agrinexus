"use strict";

// Staying safe online and on the phone, for a person with little or no technical skill: how to spot a fake message or call, passwords and two-step sign-in, what to do if an account was taken over or an identity stolen, locked files, a swapped SIM
// card, and where to report (asked for on 23 October 2026: "do we have in Kyro the ability for the user to protect themselves from attacks, especially those who have little to no technical skills"). Written only from official pages that were read on
// the date below: for the United States CISA, the FTC (including IdentityTheft.gov and ReportFraud), the FCC, the Social Security Administration and its Inspector General, the IRS, the CFPB, the FBI's IC3 and the Justice Department's Office for Victims of Crime; for
// Kenya the Central Bank, the Communications Authority and its KE-CIRT/CC reports, the Data Protection Commissioner, the Competition Authority, the Capital Markets Authority and the Computer Misuse and Cybercrimes Act; for Nigeria the Nigerian Communications
// Commission and its CSIRT, the Police's National Cybercrime Centre, the EFCC, the Central Bank, the Data Protection Commission and the Securities and Exchange Commission. Each answer names its pages and the date they were read, says what the pages do not cover,
// and ends by saying Kyro cannot check whether a particular message, call, site or person is real. What could not be read (the FBI, the FCC and annualcreditreport.com pages for the United States; the Kenyan police, the Directorate of Criminal Investigations and the
// Communications Authority's SIM-swap advisory; ngCERT's own site and the Central Bank of Nigeria's PDFs) is not here, and no number or step that was not on a page that was read is stated. Where two official pages differ (a password length of 15 or 16 characters)
// both are said and neither is picked.
//
// safetyAnswer(id, { us, country }) -> { topic, title, text, sources } | null     (a person outside the United States whose country is Kenya or Nigeria is given that country's own topic for the same question where there is one; otherwise the United States' answer,
// with a first sentence saying that these are American pages)

const CHECKED_ON = "23 October 2026";

const US = require("./safety-guide-us.js");
const KENYA = require("./safety-guide-kenya.js");
const NIGERIA = require("./safety-guide-nigeria.js");

const SOURCES = Object.freeze({ ...US.SOURCES, ...KENYA.SOURCES, ...NIGERIA.SOURCES });
const TOPICS = Object.freeze({ ...US.TOPICS, ...KENYA.TOPICS, ...NIGERIA.TOPICS });
// what a person asks in their own words (three for each topic), the short phrase each answer starts with (for the live checks), used by the tests and the rig
const PHRASES = Object.freeze({ ...US.PHRASES, ...KENYA.PHRASES, ...NIGERIA.PHRASES });
const KEYS = Object.freeze({ ...US.KEYS, ...KENYA.KEYS, ...NIGERIA.KEYS });

const LOCAL_TOPICS = new Set(Object.keys(TOPICS).filter(id => /^(?:ke|ng)-safe-/.test(id)));
// a device in Nairobi or Lagos that asks in general words is given its own country's topic for the same question
const LOCAL_OF = Object.freeze({
  ke: { "safe-overview": "ke-safe-basics", "safe-passwords": "ke-safe-basics", "safe-two-step": "ke-safe-basics", "safe-updates-backups": "ke-safe-basics", "safe-public-wifi": "ke-safe-basics",
    "safe-phishing": "ke-safe-fake-messages-calls", "safe-phone-scams": "ke-safe-fake-messages-calls", "safe-payment-scams": "ke-safe-fake-messages-calls", "safe-sim": "ke-safe-sim",
    "safe-hacked-account": "ke-safe-hacked-defrauded", "safe-identity-theft": "ke-safe-hacked-defrauded", "safe-report": "ke-safe-report-complain" },
  ng: { "safe-overview": "ng-safe-basics", "safe-passwords": "ng-safe-basics", "safe-two-step": "ng-safe-basics", "safe-updates-backups": "ng-safe-basics", "safe-public-wifi": "ng-safe-basics",
    "safe-phishing": "ng-safe-phishing", "safe-phone-scams": "ng-safe-dnd-spam", "safe-payment-scams": "ng-safe-scam-types", "safe-sim": "ng-safe-sim-nin",
    "safe-hacked-account": "ng-safe-report-cybercrime", "safe-identity-theft": "ng-safe-report-cybercrime", "safe-report": "ng-safe-report-cybercrime" }
});

// (every topic already ends by saying that Kyro cannot check a particular message, call, website or person and that a password, PIN or code is never to be given to someone who makes contact; a test checks)
const CANNOT_CHECK = "I cannot check whether a particular message, call, website, file or person is real.";
const NEVER_GIVE = "Never give a password, PIN or one-time code to anyone who contacts you, and I will never ask for one.";
const DANGER = "If you are in danger, call your local emergency number.";
const CHANGE = "This is general information from official pages, not legal or technical advice. Rules, numbers and websites change, so confirm on the official page.";
const OUTSIDE = "These come from United States government pages. The general steps may help anywhere, but the agencies and phone numbers are American; for your own country, ask your police cybercrime unit or your telephone regulator.";

function safetyAnswer(id, { us = true, country = null } = {}) {
  let topicId = id;
  if (!us && country && LOCAL_OF[country] && LOCAL_OF[country][id]) topicId = LOCAL_OF[country][id];
  const topic = TOPICS[topicId];
  if (!topic) return null;
  const lead = !us && !LOCAL_TOPICS.has(topicId) ? `${OUTSIDE} ` : "";
  const sources = topic.sources.map(key => SOURCES[key]);
  const cited = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  const body = topic.text;
  const closing = [/(?:cannot|can't|could not) (?:check|tell|say|verify)/i.test(body) ? "" : CANNOT_CHECK, /(?:never|do not|don't) (?:share|give|tell)|will never ask/i.test(body) ? "" : NEVER_GIVE, /emergency number|\b911\b/i.test(body) ? "" : DANGER, CHANGE].filter(Boolean).join(" ");
  return { topic: topicId, title: topic.title, text: `${lead}${body}${cited} ${closing}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, SOURCES, TOPICS, PHRASES, KEYS, LOCAL_OF, safetyAnswer });
