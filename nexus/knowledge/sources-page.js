"use strict";

// The source page for the business guides: "show me your sources for small business", "where does your business information come from". Every checked guide (small and minority-owned business, start-ups, nonprofits,
// community support, technology and AI, Kenya and Nigeria, forming a business in a state) lists the official pages it was read from; this gathers them in one place, with the date each guide was checked, so a person can
// see where the information comes from and open the page to read further. Nothing is added here: each page is taken from the guide that uses it.
//
// sourcesPageRequest(text) -> true when the sentence asks for the sources (not for "sources of funding", which is a question about money)
// sourcesPageAnswer(text) -> { text, sources: [{ name, url, group }], topic: "sources-page" }  (the veterans, older adults, young people and community guides are added when the request names them or asks for everything)

const business = require("./us-small-business.js");
const community = require("./us-community-support.js");
const technology = require("./small-business-technology.js");
const africa = require("./africa-small-business.js");
const states = require("./state-entities.js");
const california = require("./california-business.js");

// "your sources", "the sources you use", "the small business sources", "your sources for nonprofits", "the source page", "where does your information come from"; not "sources of funding" or "sources for my report".
// (the words are shared with the page, public/kyro-business-topics.js, which takes such a request itself instead of leaving it to the voice model)
const { sourcesRequest: sourcesPageRequest } = require("../../public/kyro-business-topics.js");

function group(label, checked, sources) {
  return { label, checked, sources: Object.values(sources || {}).filter(item => item && /^https:\/\//.test(item.url || "") && item.name) };
}

const COMMUNITY_ASKED = /\b(?:veterans?|older adults?|seniors?|elder(?:ly|care)?|young people|youth|community|everything|all (?:of )?(?:your|the) (?:sources|guides))\b/i;

function groups(withCommunity = false) {
  return [
    group("Small business, minority-owned business, start-ups and nonprofits (United States)", business.CHECKED_ON, business.SOURCES),
    group("California: state certification, selling to the state, the seller's permit, nonprofits, free help and the 2028 Games", california.CHECKED_ON, california.SOURCES),
    group("Forming a business or nonprofit in a state", "", states.SOURCES),
    ...(withCommunity ? [group("Help for veterans, older adults, young people and community groups", community.CHECKED_ON, community.SOURCES)] : []),
    group("Technology and AI for a business", technology.CHECKED_ON, technology.SOURCES),
    group("Kenya and Nigeria", africa.CHECKED_ON, africa.SOURCES)
  ];
}

function sourcesPageAnswer(request = "") {
  const withCommunity = COMMUNITY_ASKED.test(String(request || ""));
  const seen = new Set(); const sources = [];
  for (const entry of groups(withCommunity)) {
    for (const source of entry.sources) {
      if (seen.has(source.url)) continue;
      seen.add(source.url);
      sources.push({ name: source.name, url: source.url, group: entry.label });
    }
  }
  const dates = [...new Set(groups(withCommunity).map(entry => entry.checked).filter(Boolean))];
  const text = `These are the official pages my business, start-up and nonprofit guides are built from. Each guide was read from them and checked on ${dates.length ? dates.join(", ") : "the dates shown in its answers"}, and each of my answers names the pages it used. The buttons are on the screen: open any of them to read further or to check what I said. This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site.${withCommunity ? "" : " Ask for the veterans, older adult or community sources and I will show those."}`;
  return { text, sources, topic: "sources-page" };
}

module.exports = Object.freeze({ sourcesPageRequest, sourcesPageAnswer });
