(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.KyroCrisisLines = api;
})(typeof window !== "undefined" ? window : globalThis, function () {
  "use strict";

  // Who a person in Kenya or Nigeria can talk to when they are thinking of hurting themselves, in the words of the caring crisis reply. Read from the pages named below on CHECKED_ON. No government-run suicide
  // crisis line could be confirmed in either country, so none is named: these are charities, and what each page said about hours is said here too. The emergency numbers (Kenya 999 or 112, Nigeria 112) are in
  // nexus/companion/safety.js and are not repeated. Numbers that were seen only in a search result, that two pages disagreed on, or that looked old, are NOT used (see docs/CRISIS_LINES_CHECK.md).
  //
  // linesFor(country, language) -> a sentence to add to the reply, or "" when no line was confirmed for that country.   countryFromTimeZone(zone) -> "Kenya" | "Nigeria" | "".
  // The Kiswahili is a first draft and needs a fluent speaker. The wording of the whole reply is under clinician review.

  const CHECKED_ON = "13 October 2026";

  const SOURCES = Object.freeze({
    Kenya: [
      { name: "Lifeline International: Befrienders Kenya", url: "https://www.lifeline-international.com/member/kenya/" },
      { name: "findahelpline: Kenya, suicidal thoughts", url: "https://findahelpline.com/countries/ke/topics/suicidal-thoughts" },
      { name: "Kenya Red Cross: contact us (toll-free 1199)", url: "https://www.redcross.or.ke/contact-us/" }
    ],
    Nigeria: [
      { name: "Lifeline International: SURPIN", url: "https://www.lifeline-international.com/member/nigeria-surpin/" },
      { name: "SURPIN", url: "https://surpinng.com/" },
      { name: "findahelpline: Nigeria", url: "https://findahelpline.com/countries/ng" }
    ],
    // (the 988 Suicide and Crisis Lifeline: its own page says call or text 988, or chat, free, available 24/7/365)
    "United States": [
      { name: "988 Suicide & Crisis Lifeline", url: "https://988lifeline.org/" }
    ]
  });

  // When each country's numbers were last read from the pages above.
  const CHECKED_ON_BY_COUNTRY = Object.freeze({ Kenya: CHECKED_ON, Nigeria: CHECKED_ON, "United States": "15 October 2026" });

  const LINES = Object.freeze({
    Kenya: {
      en: " You can also talk to a person: Befrienders Kenya, on +254 722 178 177, weekdays from 9 am to 5 pm, or the Kenya Red Cross toll-free line, 1199, where you can ask for counselling.",
      sw: " Unaweza pia kuzungumza na mtu: Befrienders Kenya, kwa +254 722 178 177, siku za wiki kuanzia saa tatu asubuhi hadi saa kumi na moja jioni, au laini ya bure ya Kenya Red Cross, 1199, ambapo unaweza kuomba ushauri."
    },
    Nigeria: {
      en: " You can also talk to a person: SURPIN, a free helpline, on 0800 078 7746, open 24 hours.",
      sw: " Unaweza pia kuzungumza na mtu: SURPIN, laini ya bure, kwa 0800 078 7746, inayopatikana saa 24."
    },
    "United States": {
      en: " You can also talk to a person: call or text 988, the Suicide and Crisis Lifeline, free, at any time of day or night.",
      sw: " Unaweza pia kuzungumza na mtu: piga simu au tuma ujumbe kwa 988, Suicide and Crisis Lifeline, bila malipo, saa 24 kila siku."
    }
  });

  function placeOf(country) {
    const value = String(country || "");
    return /kenya/i.test(value) ? "Kenya" : /nigeria/i.test(value) ? "Nigeria" : /\b(?:united states|usa|u\.s\.a?\.?)\b/i.test(value) || /^us$/i.test(value.trim()) ? "United States" : "";
  }

  function linesFor(country, language) {
    const place = placeOf(country);
    if (!place) return "";
    return LINES[place][/^sw/i.test(String(language || "")) ? "sw" : "en"];
  }

  function countryFromTimeZone(zone) {
    const value = String(zone || "");
    if (/^Africa\/Nairobi$/i.test(value)) return "Kenya";
    if (/^Africa\/Lagos$/i.test(value)) return "Nigeria";
    // (zones that are only in the United States: not America/Toronto, Mexico_City or Sao_Paulo)
    if (/^America\/(?:New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Adak|Boise|Detroit|Juneau|Sitka|Nome|Yakutat|Metlakatla|Menominee)$|^America\/(?:Indiana|Kentucky|North_Dakota)\/|^Pacific\/Honolulu$/i.test(value)) return "United States";
    return "";
  }

  return Object.freeze({ CHECKED_ON, CHECKED_ON_BY_COUNTRY, SOURCES, linesFor, countryFromTimeZone });
});
