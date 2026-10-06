"use strict";

// Kyro's offer to alert the trusted circle ("Do you want me to alert Grace right now?") and a plain "yes" to it.
//
// An alert is a real push to real people, so this is strict on both sides:
//  * The offer is only ever the LAST sentence of what Kyro said, as a question. Kyro's other questions ("Or tell me what's happening?") are never read as it,
//    so a "yes" to those cannot alert anyone.
//  * The "yes" has to be the person's very next message: nothing said in between (history is oldest first and does not yet hold this message).
// The wording is in nexus/i18n (safety.selfHarmCircle, safety.askWithCircle), English and Kiswahili; both are matched here.
const OFFER = /(?:do you want me to alert|unataka nitume tahadhari kwa)\b[^?]*\?\s*$/i;
const YES = /^(?:yes|yeah|yep|yup|ok(?:ay)?|sure|please|yes,? please|please do|do it|go ahead|yes,? do it|yes,? go ahead|alert them|yes,? alert them|yes,? alert (?:my )?circle|ndiyo|ndio|ndiyo tafadhali|tafadhali|sawa|fanya hivyo)[.!\s]*$/i;

const isOffer = text => OFFER.test(String(text || "").trim());
function accepted(text, history = []) {
  if (!YES.test(String(text || "").trim())) return false;
  const turns = (history || []).filter(turn => turn && String(turn.content || "").trim());
  const last = turns[turns.length - 1];
  return Boolean(last && last.role === "assistant" && isOffer(last.content));
}

module.exports = Object.freeze({ isOffer, accepted });
