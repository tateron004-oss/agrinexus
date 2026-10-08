"use strict";

// The ONE rule for which language Kyro answers in: the language of the words the person just typed or said wins; the language they asked for (the request's `language`) and then the account's language are only the
// default when the words do not settle it, and never the other way round. Found against the real runtime: a Kenyan account set to Kiswahili that typed an English danger sign with `language: "en"` was answered in
// Kiswahili, because the safety answer used "no Kiswahili word found" as if it meant "use the account language".
// Kiswahili lines are written elsewhere (nexus/i18n/sw.js); this only chooses between them.
const { languageOf } = require("./index.js");

// Common English function words and everyday words. Any one of them means the person is writing English (Kiswahili does not use them), so a Kiswahili default does not apply.
// Deliberately only words that are not Kiswahili: "no", "ok", "sasa", "mama" and the like are left out.
const ENGLISH_WORDS = /\b(?:i|i'm|im|i've|i'd|my|me|myself|we|our|you|your|he|she|his|her|him|they|their|them|it|its|the|a|an|is|am|are|was|were|be|been|has|have|had|do|does|did|not|cannot|can't|cant|don't|dont|won't|can|will|would|should|and|but|or|if|of|to|in|on|at|for|with|from|about|that|this|these|those|what|how|why|when|where|who|please|help|need|want|feel|feeling|there|got|get|so|too|very|just|still|again|baby|child|fever|pain|chest|blood|pressure|pregnant|sweating|bleeding|emergency|hospital|doctor|clinic)\b/i;

function writtenInEnglish(text) {
  return ENGLISH_WORDS.test(String(text ?? "").replace(/[’]/g, "'"));
}

// detected: what the safety/intent reader heard in the words ("sw" is a firm yes; "en" only means "no Kiswahili cue", so it is not enough on its own).
// defaults: the language the request asked for, then the account's, in that order (either may be empty).
function replyLanguage(text, { detected = "", requested = "", account = "" } = {}) {
  if (detected === "sw") return "sw";
  if (writtenInEnglish(text)) return "en";
  return languageOf(requested || account || "en");
}

module.exports = Object.freeze({ replyLanguage, writtenInEnglish });
