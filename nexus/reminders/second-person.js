"use strict";

// A reminder is asked for in the first person ("remind me to take my pills at 8 pm") and said back to the person in the second ("I will remind you to take your pills"), so the words
// the person used are turned round when they are read back: "my" is "your", "me" is "you", "I" is "you". (It used to say "I will remind you to take my pills", which sounds as if the pills were Kyro's.)
// Only what is said back changes; the reminder itself keeps the person's own words.
function toSecondPerson(text) {
  const keepCase = (match, lower, upper) => (match[0] === match[0].toUpperCase() ? upper : lower);
  return String(text ?? "")
    .replace(/\bmyself\b/gi, match => keepCase(match, "yourself", "Yourself"))
    .replace(/\bmine\b/gi, match => keepCase(match, "yours", "Yours"))
    .replace(/\bmy\b/gi, match => keepCase(match, "your", "Your"))
    .replace(/\bI['’]m\b/g, "you're").replace(/\bI['’]ll\b/g, "you'll").replace(/\bI['’]ve\b/g, "you've")
    .replace(/\bI am\b/g, "you are").replace(/\bI\b/g, "you")
    .replace(/\bme\b/gi, match => keepCase(match, "you", "You"));
}

module.exports = Object.freeze({ toSecondPerson });
