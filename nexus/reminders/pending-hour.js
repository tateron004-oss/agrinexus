"use strict";

// "Remind me tomorrow at 9 to pay the school fees" is answered "At 9 in the morning or in the evening? Say, for example, "9 in the evening" or "9 am". Nothing was set yet." The typed route kept no state for that
// question, so the answer ("9 am") was planned on its own and no reminder was made (found by the phrase sweep, scripts/dev/real-runtime/phrases.mjs). This joins the answer to the sentence it answers, using only the
// conversation history: the last thing Kyro said must be that question, and the sentence before it a reminder with a bare hour.

const clean = text => String(text || "").replace(/\s+/g, " ").trim();
const ASKED = /Nothing was set yet\.?$/i;
const ASKED_HOUR = /\bin the morning or in the (?:evening|afternoon)\?/i;
const ANSWER = /^(?:at\s+)?(\d{1,2}(?::\d{2})?)\s*(am|pm|a\.m\.|p\.m\.|in the morning|in the afternoon|in the evening|at night)\.?$/i;

function suffixOf(word) {
  const lower = String(word || "").toLowerCase().replace(/\./g, "");
  return lower === "am" || lower === "in the morning" ? "am" : "pm";
}

// -> the reminder sentence with the hour made clear ("Remind me tomorrow at 9 am to pay the school fees"), or null when this is not that answer.
function completeAmbiguousHour(text, history = []) {
  const answer = ANSWER.exec(clean(text));
  if (!answer) return null;
  const turns = (Array.isArray(history) ? history : []).filter(turn => turn && String(turn.content || "").trim());
  const lastKyro = [...turns].reverse().find(turn => turn.role === "assistant");
  if (!lastKyro || !ASKED.test(clean(lastKyro.content)) || !ASKED_HOUR.test(clean(lastKyro.content))) return null;
  const asked = turns.lastIndexOf(lastKyro);
  const earlier = turns.slice(0, asked).reverse().find(turn => turn.role === "user");
  if (!earlier) return null;
  const sentence = clean(earlier.content);
  if (!/\b(remind|reminder)\b/i.test(sentence)) return null;
  const bare = /\bat\s+(\d{1,2}(?::\d{2})?)(?!\s*(?:am|pm|a\.m\.|p\.m\.|o'clock|:))\b/i.exec(sentence);
  if (!bare) return null;
  // the answer must be about the same hour that was asked about
  if (Number(String(bare[1]).split(":")[0]) !== Number(String(answer[1]).split(":")[0])) return null;
  return `${sentence.slice(0, bare.index)}at ${answer[1]} ${suffixOf(answer[2])}${sentence.slice(bare.index + bare[0].length)}`;
}

module.exports = Object.freeze({ completeAmbiguousHour });
