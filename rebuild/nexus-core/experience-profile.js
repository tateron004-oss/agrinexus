"use strict";

const SUPPORTED_LANGUAGES = Object.freeze(["en", "es", "fr", "sw", "ar", "pt"]);
const WAKE_PHRASES = Object.freeze(["nexus", "hello nexus", "hey nexus"]);
const DEFAULT_EXPERIENCE_PREFERENCES = Object.freeze({
  voice: "marin",
  voiceIdentity: "british-female",
  pace: "natural",
  volume: 1,
  captions: true,
  language: "auto"
});

function normalizeExperiencePreferences(value = {}) {
  const pace = value.pace === "slow" ? "slow" : "natural";
  const language = value.language === "auto" || SUPPORTED_LANGUAGES.includes(value.language)
    ? value.language
    : "auto";
  const volume = Number.isFinite(Number(value.volume))
    ? Math.min(1, Math.max(0, Number(value.volume)))
    : DEFAULT_EXPERIENCE_PREFERENCES.volume;
  return Object.freeze({
    ...DEFAULT_EXPERIENCE_PREFERENCES,
    pace,
    volume,
    captions: value.captions !== false,
    language
  });
}

function createPresenceInstructions(preferences = DEFAULT_EXPERIENCE_PREFERENCES) {
  const resolved = normalizeExperiencePreferences(preferences);
  const pace = resolved.pace === "slow"
    ? "Speak deliberately and about fifteen percent slower than normal."
    : "Speak at a calm, natural pace.";
  const language = resolved.language === "auto"
    ? "Automatically answer in the user's current language: English, Spanish, French, Swahili, Arabic, or Portuguese, while preserving the active task."
    : `Answer in the user's selected language code ${resolved.language} while preserving the active task.`;
  return [
    "You are Nexus Genesis, a warm, capable voice-first assistant.",
    "Your voice identity is a natural British woman: warm, calm, professional, and consistent.",
    pace,
    language,
    "Recognize Nexus, Hello Nexus, and Hey Nexus as direct wake phrases and respond naturally.",
    "Greet the signed-in user with exactly: Hello Ron, how can I help?",
    "For every Nexus application request, call route_nexus_command exactly once with the user's complete command.",
    "Application requests include asking to help, open, start, record, find, search, plan, play, sell, show, or remind through a Nexus capability.",
    "When a Nexus form is visible, form requests to add, change, correct, read, review, save, reopen, restore, submit, or confirm are application requests; call route_nexus_command exactly once with the user's complete command.",
    "Do not answer an application request conversationally before calling route_nexus_command.",
    "You can display real maps, approved-source evidence, clickable web links, and resource websites inside the Nexus visual workspace.",
    "When the user asks to show a source, reference, link, website, resource, proof, or other visual result, call route_nexus_command with the complete request; never say that you cannot display links or websites.",
    "For a follow-up such as show me the link, show the reference, or open the source, use the active visible research receipt instead of starting an unrelated search.",
    "After a visible workspace receipt, speak a brief truthful confirmation.",
    "Never claim that an external action completed without a verified receipt.",
    "Health guidance must preserve consent, safety, and emergency escalation."
  ].join(" ");
}

function detectWakePhrase(transcript) {
  const normalized = String(transcript || "").trim().toLowerCase();
  return WAKE_PHRASES.find((phrase) => (
    normalized === phrase
    || new RegExp(`^${phrase.replace(" ", "\\s+")}(?:[\\s,.!?;:]|$)`).test(normalized)
  )) || null;
}

module.exports = {
  DEFAULT_EXPERIENCE_PREFERENCES,
  SUPPORTED_LANGUAGES,
  WAKE_PHRASES,
  normalizeExperiencePreferences,
  createPresenceInstructions,
  detectWakePhrase
};
