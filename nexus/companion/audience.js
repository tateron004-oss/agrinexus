"use strict";

// Confirmed MISSING: nothing in the companion module said anything different
// to a veteran or an elderly person -- the same generic chat either way, and
// no discovery path telling either of them what real, already-built support
// exists (daily check-ins, medication reminders, a trusted circle that can be
// alerted). This module adds exactly that: an honest description of real
// features, never a fabricated persona, clinical claim, or crisis-specific
// script. The wording of the actual crisis reply lives in safety.js and is
// explicitly gated on a clinician/veterans'-organisation review before it can
// be relied on live -- this module does not touch that wording at all.
//
// First person only, like the self-harm/safety patterns elsewhere in this
// tier ("my grandfather is a veteran" is not about the speaker). "veteran"
// also has a common idiomatic sense ("a veteran teacher") this regex cannot
// fully rule out -- kept low-risk because the reply is always the same
// harmless, relevant information regardless of which sense was meant, never
// a presumptuous "thank you for your service" that would be an odd or
// upsetting reply to a false match.
const VETERAN = /\bi(?:'m| am) (?:a |an )?(?:military |army |navy |air force |marine corps |combat |former )?veteran\b/i;
const ELDERLY_WORDS = /\bi(?:'m| am) (?:elderly|a senior citizen|an older (?:person|adult)|getting (?:up there|older)|a senior)\b/i;
const ELDERLY_AGE = /\bi(?:'m| am) (\d{2,3})(?: years? old)?\b/i;

// -> "veteran" | "elderly" | null
function readAudienceIntro(text) {
  const t = String(text || "").trim();
  if (!t || t.length > 200) return null;
  if (VETERAN.test(t)) return "veteran";
  if (ELDERLY_WORDS.test(t)) return "elderly";
  const ageMatch = t.match(ELDERLY_AGE);
  if (ageMatch && Number(ageMatch[1]) >= 65 && Number(ageMatch[1]) <= 130) return "elderly";
  return null;
}

// hasMedications: whether this tenant has a real medication store configured (medications is null otherwise, see index.js).
function audienceIntroReply(kind, { hasMedications = false } = {}) {
  const shared = 'I can check in on you every day ("check in on me every morning at 8"), and if you don\'t answer for a while I can quietly let someone you trust know -- only that, never what you told me. Say "add name@example.com to my circle" to bring someone in, or "alert my circle" any time you need help right now.';
  const medicationLine = hasMedications ? ' I can also remind you to take medication ("add medication metformin 500mg at 8am and 8pm") and let you confirm each dose.' : "";
  if (kind === "veteran") return `Thank you for telling me. ${shared}${medicationLine} I'm not a counselor or a veterans' service -- if you ever need to talk to one, please call your local emergency number or a crisis line in your country.`;
  return `Good to know. ${shared}${medicationLine}`;
}

module.exports = Object.freeze({ readAudienceIntro, audienceIntroReply });
