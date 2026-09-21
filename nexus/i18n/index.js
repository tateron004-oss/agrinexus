"use strict";

const en = require("./en.js");
const sw = require("./sw.js");

// Kyro's own words, in the languages people speak. English is the source of truth and the fallback: a message that has no translation yet is said in
// English, never left blank. Each language is one flat file of `key: "text with {placeholders}"`, so a translator reads the two files side by side.
// Swahili is first (see sw.js: the wording of the safety messages must be reviewed by a fluent speaker before it is relied on).
const CATALOGS = Object.freeze({ en, sw });
const SUPPORTED = Object.freeze(Object.keys(CATALOGS));

// "sw", "sw-KE", "SW_ke" -> "sw"; anything Kyro has no words for -> "en".
const languageOf = value => {
  const language = String(value ?? "").trim().toLowerCase().replace(/_/g, "-").split("-")[0];
  return SUPPORTED.includes(language) ? language : "en";
};

function t(language, key, params = {}) {
  const template = CATALOGS[languageOf(language)][key] ?? en[key];
  if (template === undefined) throw new Error(`Missing message: ${key}`);
  // A function replacer, so a name containing "$&" or similar can never be read as a pattern.
  return template.replace(/\{(\w+)\}/g, (whole, name) => (params[name] === undefined ? whole : String(params[name])));
}

// A message for someone whose own language Kyro does not know (another person's phone): the sender's language first, then English, so that nobody is
// sent words they cannot read. Same language as English means just the one.
function both(language, key, params, separator = "\n") {
  const chosen = languageOf(language);
  return chosen === "en" ? t("en", key, params) : `${t(chosen, key, params)}${separator}${t("en", key, params)}`;
}

module.exports = Object.freeze({ t, both, languageOf, SUPPORTED, CATALOGS });
