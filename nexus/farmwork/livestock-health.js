"use strict";

// A sick animal is not a sick person. Found by the user-journey sweep: "what do I do if a cow gets bloat" was answered with first aid for people kicked or crushed by an animal
// (the word "cow" matched that guide), and "one of my cows is sick" on the older command route was answered with "Is the person breathing, awake, and safe right now?".
//
// There is no veterinary guide in this app, so the only honest answer is that, and to call a vet or an animal health worker. This module only RECOGNISES a livestock health question
// (the words live in nexus/i18n as safety.livestock); it is read by the shared safety reader (nexus/companion/safety.js, so the planner, the phone line and the older command route all
// give the same answer) and by the farm library, which must never hand a person's first aid to an animal.
//
// Left alone on purpose: a person hurt by an animal ("what should I do if a cow kicks someone"), a record of care that was given ("my cow was treated for mastitis", "log that Daisy has a fever"),
// and a mixed sentence where a person is the one who is unwell.

const normalize = text => String(text ?? "").toLowerCase().replace(/[’‘`]/g, "'").replace(/\s+/g, " ").trim();

const LIVESTOCK = /\b(?:cow|cows|cattle|bull|bulls|calf|calves|heifer|heifers|ox|oxen|goat|goats|sheep|lamb|lambs|pig|pigs|piglets?|chicken|chickens|hen|hens|poultry|duck|ducks|turkeys?|donkeys?|camels?|livestock|ng'?ombe|ndama|mbuzi|kondoo|nguruwe|kuku|punda|ngamia|mifugo)\b/;
const ILLNESS = /\b(?:sick|ill|unwell|bloat\w*|not eating|stopped eating|won'?t eat|off (?:her|his|its|their) feed|fever|diarrh\w*|limp\w*|lame|cough\w*|dying|collapsed|swollen|(?:having )?(?:a )?(?:fit|fits|seizure)|mastitis|vomit\w*|weak|discharge|cannot stand|can'?t stand|not walking|foaming|drooling|bleeding|bitten by a snake|snake ?bite|foot and mouth|lumpy skin|east coast fever|newcastle|anthrax|poisoned|ate (?:something|poison)|died suddenly|anaumwa|wanaumwa|mgonjwa|wagonjwa|ana homa|hali chakula|haili|hawezi kusimama|amevimba|wamevimba|anaharisha|anakohoa|anatoka damu|anaugua|wanaugua)\b/;
// A person, not the animal, is the one hurt or unwell.
const PERSON_INJURED = /\b(?:kick(?:s|ed|ing)?|gore[ds]?|crush(?:ed|es)?|trampl\w+|attack\w*|charged|bit|bite[sn]?|bitten)\b[^.!?]{0,30}\b(?:me|him|her|us|them|someone|somebody|person|child|children|man|woman|farmer|boy|girl|son|daughter|wife|husband|brother|sister|father|mother)\b|\b(?:me|him|her|us|them|someone|somebody|child|children|man|woman|farmer|boy|girl|son|daughter|wife|husband|brother|sister|father|mother)\b[^.!?]{0,30}\b(?:kicked|gored|crushed|trampled|attacked|bitten)\b/;
const PERSON_UNWELL = /\bi (?:am|feel|felt|got|was) (?:sick|ill|dizzy|weak|feverish|unwell)\b|\bi have (?:a )?(?:fever|headache|pain|cough|diarrh\w+)\b|\bmy (?:child|children|son|daughter|baby|wife|husband|mother|father|brother|sister) (?:is|are|has|have) (?:sick|ill|unwell|a fever|fever)\b/;
// Something that is being recorded, not asked about: the farm log handles it.
const BEING_RECORDED = /\b(?:vaccinated|dewormed|drenched|dipped|treated|recorded|log|logged|record|note|add|remind|reminder)\b/;
const QUESTION_ONLY_ABOUT_MARKET = /\b(?:price|prices|sell|selling|buy|buying|bought|sold|market)\b/;

// true when the sentence is a health question or worry about an animal (never a person).
function isLivestockHealth(text) {
  const plain = normalize(text);
  if (!plain || plain.length > 400) return false;
  if (!LIVESTOCK.test(plain) || !ILLNESS.test(plain)) return false;
  if (PERSON_INJURED.test(plain) || PERSON_UNWELL.test(plain) || BEING_RECORDED.test(plain) || QUESTION_ONLY_ABOUT_MARKET.test(plain)) return false;
  return true;
}

// true when a livestock word is used and no person is the one hurt: the guide for people kicked or crushed by an animal is then the wrong answer.
const animalNotPerson = text => { const plain = normalize(text); return LIVESTOCK.test(plain) && !PERSON_INJURED.test(plain) && !/\b(?:kick(?:s|ed|ing)?|gore[ds]?|crush(?:ed|es)?|trampl\w+|charg(?:e|es|ed|ing)|attack\w*)\b/.test(plain); };

// Swahili or English, by the words used.
const SWAHILI = /\b(?:ng'?ombe|ndama|mbuzi|kondoo|nguruwe|kuku|punda|ngamia|mifugo|anaumwa|wanaumwa|mgonjwa|wagonjwa|hali chakula|haili|amevimba|wamevimba|anaharisha|anakohoa|wangu|yangu)\b/;
const isSwahili = text => SWAHILI.test(normalize(text));

module.exports = Object.freeze({ isLivestockHealth, animalNotPerson, isSwahili, LIVESTOCK });
