"use strict";

// Which language a person is speaking, for the work-and-learning replies. A reply is given in the language the words were said in; when the words say nothing
// (a bare "next", "ndiyo") the language of the conversation so far wins, and after that the language the app is set to. First draft of the Kiswahili word list:
// a fluent speaker must review it.
const SWAHILI = /\b(?:nifundishe|nitafutie|nipangie|nisaidie|nianzie|nataka|ninataka|naomba|nipe|nionyeshe|ninahitaji|nahitaji|natafuta|ninatafuta|kazi|ajira|mafunzo|mahojiano|kusoma|kuandika|hesabu|herufi|kujumlisha|kuhesabu|kujiandaa|karibu nami|ndiyo|ndio|hapana|endelea|rudia|acha|sijui|sina|tafadhali|asante|mtoto|mwanangu|binti|miaka|cheti|kozi|wasifu|ufundi|ufadhili|masomo|shule|habari|jambo|twende|baadaye|ruka|pita|maliza|nianze|anza|tuanze|msichana|mvulana|mfanyakazi|tosha|basi|sawa|nimefika|nimemaliza)\b/;
const ENGLISH = /\b(?:the|me|my|to|is|are|you|can|how|what|near|find|jobs?|teach|practice|practise|please|want|need|any|with|for|and|about|do|does|i|am|it|this|that|where|work|interview|letters|maths|math|read)\b/g;
const ENGLISH_CONTROL = /^(?:next|again|stop|start|repeat|continue|done|skip)$/;

const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const looksSwahili = text => SWAHILI.test(clean(text).toLowerCase());
const looksEnglish = text => {
  const lower = clean(text).toLowerCase().replace(/[.!?,]+$/g, "");
  if (ENGLISH_CONTROL.test(lower)) return true;
  return (lower.match(ENGLISH) || []).length >= 2;
};
const normalizeLanguage = value => (String(value ?? "").trim().toLowerCase().startsWith("sw") ? "sw" : "en");

// requested: the language the app asked for; sticky: the language the practice session has been in so far (or null).
function pickLanguage(text, requested, sticky = null) {
  if (looksSwahili(text)) return "sw";
  if (looksEnglish(text) && !sticky) return "en";
  if (looksEnglish(text) && sticky && !ENGLISH_CONTROL.test(clean(text).toLowerCase().replace(/[.!?,]+$/g, ""))) return "en";
  if (sticky) return sticky;
  return normalizeLanguage(requested);
}

module.exports = Object.freeze({ looksSwahili, looksEnglish, pickLanguage, normalizeLanguage, clean });
