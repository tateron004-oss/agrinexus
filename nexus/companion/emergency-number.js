"use strict";

// "What is the emergency number in Kenya?" (and "namba ya dharura Kenya ni ipi?"): a question with a plain answer, not a report of an emergency. Kenya 999 or 112, Nigeria 112; for any other country, or when the
// country is not known, no number is made up (never the U.S. one). Answered in the language the question was asked in. Used by the older command route and the spoken tool route (server.js).
const { t } = require("../i18n/index.js");
const { emergencyNumberForCountry } = require("./safety.js");
const normalizeSpeechForIntent = (value = "") => String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

// The same question in Kiswahili ("namba ya dharura Kenya ni ipi?", "nipigie nambari ya dharura Kenya", "namba ya polisi Kenya", "namba ya ambulansi Nigeria"). A number word ("namba", "nambari", "nomba") and a service word
// together; a country named after them that the platform has no number for is never answered with the asker's own country's number. null when it is not this question.
const SW_NUMBER_WORD = /\b(?:namba|nambari|nomba|number)\b/;
const SW_SERVICE_WORD = /\b(?:dharura|polisi|ambulansi|ambulensi|zimamoto|gari la wagonjwa|msaada wa dharura|huduma za dharura)\b/;
const SW_NOT_A_COUNTRY = /^(?:ni|ipi|ngapi|gani|ya|za|wa|la|nchini|kwa|kenya|nigeria|yangu|yako|hapa|wapi|tafadhali|nipe|niambie|nipigie|nini|na|au|pia|sasa|hivi|dharura|polisi|ambulansi|ambulensi|zimamoto|namba|nambari|nomba|number|huduma|msaada|gari|wagonjwa|moto|kuita|kupiga|simu|kituo|cha|mimi|nchi|nchi yangu|kwangu|ipo|iko|ilikuwa|inaitwa|unajua|najua|naomba|nataka)$/;
function swahiliEmergencyNumberQuestion(lower) {
  if (!SW_NUMBER_WORD.test(lower) || !SW_SERVICE_WORD.test(lower)) return null;
  // English sentences that use "number" and "emergency" are handled by the English reader; this one needs a Kiswahili word as well.
  if (!/\b(?:namba|nambari|nomba|ya|ni|ipi|ngapi|gani|nipe|niambie|nipigie|nchini|wapi)\b/.test(lower) || /\b(?:emergency|ambulance|police)\b/.test(lower)) return null;
  // Not the question: saving or changing the person's OWN emergency contact ("weka namba yangu ya dharura 0712...", "badilisha namba ya dharura"), or a phone number given.
  if (/\d{3,}/.test(lower) || /\b(?:namba|nambari|nomba) (?:yangu|yake|ya mama|ya baba)\b/.test(lower) || /\b(?:weka|hifadhi|ongeza|badilisha|futa|ondoa|sajili|andika|kumbuka)\b/.test(lower)) return null;
  const named = /\bkenya\b/.test(lower) ? "Kenya" : /\bnigeria\b/.test(lower) ? "Nigeria" : "";
  const tail = lower.replace(/^.*\b(?:dharura|polisi|ambulansi|ambulensi|zimamoto|wagonjwa)\b/, "").split(" ").filter(Boolean);
  const otherCountry = !named && tail.some(word => !SW_NOT_A_COUNTRY.test(word) && word.length >= 4);
  return { named, otherCountry };
}
function emergencyNumberAnswer(text, user) {
  const lower = normalizeSpeechForIntent(text);
  const swahili = swahiliEmergencyNumberQuestion(lower);
  if (swahili) {
    const known = emergencyNumberForCountry(swahili.named || (swahili.otherCountry ? "" : user?.country));
    return known ? t("sw", "safety.numberAnswer", { country: known.country, numbers: known.numbers.replace(" or ", " au ") }) : t("sw", "safety.numberUnknown");
  }
  const asksNumber = /\b(emergency|ambulance|police|fire brigade)\b.*\b(number|numbers|phone|hotline|line|contact)\b/.test(lower) || /\b(number|numbers|hotline)\b.*\b(for|to call|in an?)\b.*\b(emergency|ambulance|police)\b/.test(lower) || /\bwhat (?:do i|should i) (?:call|dial)\b.*\b(emergency|ambulance)\b/.test(lower);
  if (!asksNumber || !/\b(what|which|give|tell|do you know|know|how|number|dial)\b/.test(lower)) return null;
  const named = /\bkenya\b/.test(lower) ? "Kenya" : /\bnigeria\b/.test(lower) ? "Nigeria" : "";
  // "...in Chile": a country named in the question that the platform has no number for is not answered with the asker's own country's number.
  const askedAbout = (/\b(?:in|for|of)\s+([a-z]{3,}(?: [a-z]{3,})?)$/.exec(lower) || [])[1] || "";
  const otherCountry = askedAbout && !named && !/^(?:an|the|my|case|emergency|emergencies|here|area|village|town|this|our|your|health|medical|ambulance|police|fire|kenya|nigeria|english|swahili|use|need|fact|real)\b/.test(askedAbout);
  const known = emergencyNumberForCountry(named || (otherCountry ? "" : user?.country));
  return known
    ? t("en", "safety.numberAnswer", { country: known.country, numbers: known.numbers })
    : t("en", "safety.numberUnknown");
}

module.exports = Object.freeze({ emergencyNumberAnswer });
