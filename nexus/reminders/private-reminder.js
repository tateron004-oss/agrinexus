"use strict";

// A reminder about something private (a Pap smear, a mammogram, birth control, a prenatal visit, a period, menopause, an STI or HIV test) must not show its words on a phone's lock screen, where anyone nearby can read it,
// or in a morning brief read out loud. The person's own words are kept (the reminder list in Kyro, and what Kyro says back to her, show them); only the notification that appears on the device says that she has a
// private reminder and to open Kyro. It is decided by the words of the reminder alone, never by guessing who the person is.
//
// isPrivateReminder(text) -> boolean.   reminderContent(task, extra) -> the notification content for a one-time reminder.   pushBodyFor(task, language) -> what the device shows.   briefTextFor(task, language).
// The Kiswahili is a first draft and needs a fluent speaker.

const PRIVATE_WORDS = /\b(?:pap(?:\s+(?:smear|test))?|smear\s+test|cervical|hpv|mammogram\w*|breast\s+(?:exam|check|screening|lump|scan)|birth\s+control|contracepti\w*|the\s+pill|my\s+pill|iuds?|depo[- ]?provera|morning[- ]after|family\s+planning|pre-?natal|ante-?natal|pregnan\w*|post-?partum|post-?natal|maternity|midwi\w+|gyn(?:a)?ecolog\w*|ob-?gyn|women'?s\s+(?:health|clinic)|well[- ]woman|(?:my|next|the)\s+periods?|menstrua\w*|menopaus\w*|fertility|sti\s+(?:test|check|screening)|std\s+(?:test|check|screening)|hiv\s+(?:test|testing)|sexual\s+health)\b/i;

const PRIVATE_BODY = Object.freeze({
  en: "You have a private reminder. Open Kyro to read it.",
  sw: "Una ukumbusho wa faragha. Fungua Kyro uusome."
});
const PRIVATE_BRIEF = Object.freeze({ en: "a private reminder", sw: "ukumbusho wa faragha" });

function isPrivateReminder(text) {
  return PRIVATE_WORDS.test(String(text || ""));
}

const lang = language => (/^sw/i.test(String(language || "")) ? "sw" : "en");

function pushBodyFor(task, language) {
  return isPrivateReminder(task) ? PRIVATE_BODY[lang(language)] : String(task || "");
}

function briefTextFor(task, language) {
  return isPrivateReminder(task) ? PRIVATE_BRIEF[lang(language)] : String(task || "");
}

// The content stored with a reminder notification: the words as the person said them (reminderText, for the list and for reading back), and what the device is allowed to show (title and body).
function reminderContent(task, extra = {}) {
  const hidden = isPrivateReminder(task);
  return { title: hidden ? "Kyro reminder" : "Nexus reminder", body: pushBodyFor(task, extra.language), reminderText: task, ...extra, ...(hidden ? { private: true } : {}) };
}

module.exports = Object.freeze({ isPrivateReminder, pushBodyFor, briefTextFor, reminderContent, PRIVATE_BODY });
