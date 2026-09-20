"use strict";

// "Hello Nexus, this is Ron" was answered "Hello Standard. I am Nexus...": the greeting used the first word of the
// account's display name ("Standard User") and ignored the name the person actually said.

// Words that describe an account, not a person. A demo login called "Standard User" or "Platform Admin" should be
// greeted without a name rather than as "Standard".
const GENERIC_ACCOUNT_WORDS = new Set(["standard", "platform", "guest", "demo", "test", "user", "admin", "administrator", "account", "nexus", "kyro"]);

function personalFirstName(user) {
  const first = String(user?.name || "").trim().split(/\s+/)[0] || "";
  return first && !GENERIC_ACCOUNT_WORDS.has(first.toLowerCase()) ? first : "";
}

// Only a greeting that names the speaker, and only a capitalized name ("this is Ron"), so "hello, this is urgent" or
// "hi, I am hungry" are never taken for a name. Speech-to-text capitalizes proper names.
const GREETING_WITH_NAME = /^(?:hello|hi|hey|good (?:morning|afternoon|evening))[,!.\s]+(?:(?:nexus|kyro)[,!.\s]+)?(?:this is|my name is)\s+([A-Z][a-z'-]{1,30})\b/i;

function spokenNameFromGreeting(text) {
  const match = GREETING_WITH_NAME.exec(String(text || "").trim());
  const candidate = match?.[1] || "";
  // The prefix is matched case-insensitively; the name itself must be capitalized in the original text.
  if (!candidate || !/^[A-Z]/.test(candidate) || GENERIC_ACCOUNT_WORDS.has(candidate.toLowerCase())) return "";
  return candidate.charAt(0).toUpperCase() + candidate.slice(1).toLowerCase();
}

module.exports = Object.freeze({ personalFirstName, spokenNameFromGreeting, GENERIC_ACCOUNT_WORDS });
