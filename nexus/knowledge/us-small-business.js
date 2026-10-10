"use strict";

// A checked guide for small and minority-owned business owners in the United States: free help, certifications, loans, grants, taxes, licences and selling to the government.
//
// Every statement below was read from an official page on CHECKED_ON (listed in each topic's `sources`). Programmes change, so each answer carries its sources and the date it was checked, says it is general
// information and not legal, tax or financial advice, and tells the person to confirm on the official site. Nothing here is invented; where the official pages did not say something (for example whether every SBA
// certification is free), the answer does not say it either. To update an answer, read the official page again, change the text and CHECKED_ON, and run the tests.
//
// usSmallBusinessTopic(text) -> a topic id, or null. Only a QUESTION or a request for help is taken; a record ("log a tax payment of $300"), a draft ("draft a grant proposal") or other talk is not.
// usSmallBusinessAnswer(id) -> { text, sources: [{ name, url }], topic } or null.

const CHECKED_ON = "9 October 2026";

const SOURCES = Object.freeze({
  localAssistance: { name: "SBA Local Assistance", url: "https://www.sba.gov/local-assistance" },
  scoreFaq: { name: "SCORE FAQs", url: "https://www.score.org/score-faqs" },
  gaoMbda: { name: "U.S. GAO report GAO-26-107718 on MBDA Business Centers (27 March 2026)", url: "https://www.gao.gov/products/gao-26-107718" },
  nmsdcMbda: { name: "NMSDC statement on the MBDA termination letters", url: "https://nmsdc.org/news/statement-from-nmsdc-ceo-and-president-ying-mcguire-regarding-the-mbda-termination-letters" },
  sba8a: { name: "SBA 8(a) Business Development program", url: "https://www.sba.gov/federal-contracting/contracting-assistance-programs/8a-business-development-program" },
  fr8a: { name: "Federal Register, SBA final rule on 8(a) social disadvantage (11 August 2026)", url: "https://www.federalregister.gov/documents/2026/08/11/2026-16370/reforms-to-13-cfr-124103-to-remove-sbas-8a-programs-rebuttable-presumption-of-social-disadvantage" },
  nmsdc: { name: "NMSDC (National Minority Supplier Development Council)", url: "https://www.nmsdc.org/" },
  sbaCerts: { name: "SBA certifications", url: "https://www.sba.gov/certifications/" },
  sbaLoans: { name: "SBA loans", url: "https://www.sba.gov/funding-programs/loans" },
  cdfi: { name: "CDFI Fund", url: "https://www.cdfifund.gov/" },
  grants: { name: "Grants.gov", url: "https://www.grants.gov/" },
  irsEstimated: { name: "IRS estimated taxes", url: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes" },
  irsSelfEmployed: { name: "IRS self-employed individuals tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" },
  irs1040es: { name: "IRS Form 1040-ES (2026)", url: "https://www.irs.gov/pub/irs-pdf/f1040es.pdf" },
  sbaLicenses: { name: "SBA: apply for licenses and permits", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" }
});

const TOPICS = Object.freeze({
  "free-help": {
    title: "Free business help",
    text: "There is free or low-cost help for small business owners in the United States. SBA and its partners offer free or low-cost counselling and training through Small Business Development Centers (SBDCs), SCORE business mentors, Women's Business Centers and Veterans Business Outreach Centers. To find the one near you, search by ZIP code at sba.gov/local-assistance. SCORE mentoring is free: request a mentor at score.org (you do not need a business plan or an established business first) and expect a reply within about two days.",
    sources: ["localAssistance", "scoreFaq"]
  },
  mbda: {
    title: "MBDA Business Centers",
    text: "The Minority Business Development Agency (MBDA) has funded Business Centers for minority-owned businesses: the U.S. Government Accountability Office counted 39 active centers in 2024. Since 2025 the agency and its centers have been through termination notices, court orders, staffing cuts and proposed budget cuts, and I could not confirm which centers are open today. Before you rely on an MBDA center, contact it or the national MBDA office to confirm it is open. SBDCs, SCORE mentors and Women's Business Centers are the dependable free help; search by ZIP code at sba.gov/local-assistance.",
    sources: ["gaoMbda", "nmsdcMbda", "localAssistance"]
  },
  "8a": {
    title: "SBA 8(a) Business Development program",
    text: "The 8(a) program helps small businesses owned by socially and economically disadvantaged people compete for federal contracts; it does not guarantee any contract. To qualify you generally must be a small business, at least 51% owned and controlled by U.S. citizens who are socially and economically disadvantaged, with personal net worth of $850,000 or less, adjusted gross income of $400,000 or less, total assets of $6.5 million or less, and usually two years in business. Important change: since 10 September 2026, an individually owned applicant is no longer presumed socially disadvantaged because of race or ethnicity and must show it with verifiable evidence; firms already admitted are not affected. To apply: identify your main NAICS code, register in SAM.gov, then apply through SBA Certifications; SBA has 90 days to decide a complete application. The program lasts at most nine years, and a person can take part only once.",
    sources: ["sba8a", "fr8a", "sbaCerts"]
  },
  nmsdc: {
    title: "NMSDC Minority Business Enterprise (MBE) certification",
    text: "NMSDC, the National Minority Supplier Development Council, certifies Minority Business Enterprises (MBEs) through 23 regional councils. NMSDC describes MBE certification as ownership-based: the business is generally at least 51% owned, operated and controlled by U.S. citizens who belong to the minority groups NMSDC lists. It is a private programme, not a government one: it helps corporate buyers find qualified suppliers and does not award contracts, guarantee business or control any company's buying. Start with your regional council through nmsdc.org and ask it for the exact requirements, documents and any fees.",
    sources: ["nmsdc"]
  },
  certification: {
    title: "Certifications for minority-owned, women-owned, veteran-owned and other small businesses",
    text: "There are several different certifications, and calling your business minority-owned is not one of them. (1) SBA programmes, applied for through certifications.sba.gov: 8(a) for socially and economically disadvantaged owners, Women-Owned Small Business (WOSB), HUBZone, and veteran-owned and service-disabled veteran-owned. Share sensitive information only on official, secure sites. (2) NMSDC Minority Business Enterprise (MBE) certification, a private programme that corporate buyers use for supplier diversity. (3) State, city and transportation (DBE) certifications, which differ by place, so check your state's business or transportation office. Rules for showing disadvantage have changed recently, so check each programme's current requirements before you apply.",
    sources: ["sbaCerts", "nmsdc", "fr8a"]
  },
  loans: {
    title: "Small business loans",
    text: "SBA does not lend directly; its loans come through lenders. 7(a) loans are SBA's main programme for long-term financing for many business purposes. 504 loans give long-term, fixed-rate financing for growth through community Certified Development Companies. Microloans are small loans of up to $50,000 through nonprofit microlenders. Use SBA's Lender Match to be matched with lenders, or find a community lender (a CDFI) through the CDFI Fund at cdfifund.gov. A Small Business Development Center or a SCORE mentor can help you prepare your plan and records for free.",
    sources: ["sbaLoans", "cdfi", "localAssistance"]
  },
  grants: {
    title: "Grants",
    text: "Federal agencies post their grant and cooperative agreement opportunities at Grants.gov. Whether a business can apply depends on each opportunity's own eligibility section, so read it before you spend time on an application. Be careful with anyone who charges a fee to find you a grant or to guarantee one.",
    sources: ["grants"]
  },
  "estimated-tax": {
    title: "Estimated taxes for the self-employed",
    text: "If you are self-employed (a sole proprietor, partner or S corporation shareholder) and expect to owe $1,000 or more in tax when you file, the IRS generally expects you to pay estimated tax during the year with Form 1040-ES. For 2026 the payment dates are 15 April, 15 June, 15 September and 15 January 2027; when a date falls on a weekend or legal holiday, the next business day counts. To avoid an underpayment penalty you generally must have paid the smaller of 90% of this year's tax or 100% of last year's. You also pay self-employment tax (Social Security and Medicare) and report your business income on Schedule C. You can pay online, by phone, through the IRS app or your IRS online account, and in smaller instalments as long as enough is paid by each date. Farmers and fishers and higher earners have special rules.",
    sources: ["irsEstimated", "irsSelfEmployed", "irs1040es"]
  },
  "1099": {
    title: "Form 1099 for payments you make",
    text: "If you pay contractors or others for your business, you are most likely required to file an information return (a Form 1099). The IRS instructions for Forms 1099-MISC and 1099-NEC give the current thresholds and due dates, which have changed over the years, and the due date for payments to non-employees has generally been 31 January. A tax preparer can tell you what applies to you.",
    sources: ["irsSelfEmployed"]
  },
  licenses: {
    title: "Business licences and permits",
    text: "Most businesses need some licences or permits, and which ones depend on what you do and where. Federal licences apply to a few activities, for example alcohol, firearms, aviation, broadcasting and some agriculture. States regulate more, for example restaurants, construction and retail, and cities and counties set their own rules. To find yours: list what your business does and where, check the federal list, then look up your state, county and city (SBA suggests your Secretary of State's website and local government websites), apply, and put renewal dates in your calendar. A Small Business Development Center can help you find them for free.",
    sources: ["sbaLicenses", "localAssistance"]
  },
  "local-help": {
    title: "Finding free business help near you",
    text: "I cannot look up addresses myself, but the official finders do it by ZIP code. At sba.gov/local-assistance, enter your ZIP code to find your nearest Small Business Development Center, Women's Business Center, Veterans Business Outreach Center and SCORE chapter. At score.org, enter your ZIP code under Find a Mentor to request a free mentor. For community lenders (CDFIs), use the Awards Database at cdfifund.gov and choose your state. Your city or county's small business or economic development office and your local chamber of commerce can also point you to local programmes and lenders.",
    sources: ["localAssistance", "scoreFaq", "cdfi"]
  },
  contracting: {
    title: "Selling to the government",
    text: "To sell to the federal government you generally register in SAM.gov, the System for Award Management; SBA's 8(a) steps include it, and its certifications need your SAM registration to be current. SBA warns that look-alike sites such as samregistration.com are not affiliated with SBA, so use the official sites only. Certifications like 8(a), Women-Owned Small Business, HUBZone and veteran-owned are applied for through certifications.sba.gov, and a Small Business Development Center can help you get ready for free.",
    sources: ["sba8a", "sbaCerts", "localAssistance"]
  }
});

// A question, or a request for help: "how do I", "what is", "where can I", "I need a loan", "tell me about", "help me get certified"
const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find (?:me|a|an|the|my)|show me|look(?:ing)? for|search for)\b)/i;
const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert)\b/i;

// first match wins, most specific first
const MATCHERS = [
  // "Where is the nearest SBDC", "find a SCORE mentor near 30303", "business counselling in my area": the official finders, by ZIP code (this assistant cannot look up addresses)
  ["local-help", /(?=.*\b(?:near me|nearby|nearest|closest|near (?:us|my)|in my (?:area|city|town|county)|zip(?: code)?|\d{5}(?:-\d{4})?)\b)(?=.*\b(?:sbdc|small business development center|score (?:mentor|mentors|chapter)|women'?s business center|veterans? business outreach|business (?:counsel(?:ing|ling|or|ors)|help|center|mentor|mentors|advisor|advisors)|chamber of commerce|cdfi|community lender)\b)/i],
  ["mbda", /\b(mbda|minority business development agency)\b/i],
  ["8a", /\b8\s?\(\s?a\s?\)|\b8a\b/i],
  ["nmsdc", /\b(nmsdc|supplier diversity|minority supplier|minority business enterprise|\bmbe\b)\b/i],
  ["certification", /\b(certif(?:y|ied|ication|ications)|wosb|edwosb|hubzone|sdvosb|vosb|women[- ]owned small business|veteran[- ]owned small business|\bdbe\b)\b/i],
  ["contracting", /\b(sam\.gov|sam registration|register(?:ing)? in sam|government contract(?:s|ing)?|federal contract(?:s|ing)?|sell(?:ing)? to the government|bid(?:ding)? on (?:government |federal )?contracts?)\b/i],
  ["loans", /\b(sba loans?|7\s?\(a\)|7a loans?|504 loans?|micro-?loans?|small business loans?|business loans?|loan for my business|lender match|cdfi|community development financial|line of credit|start-?up (?:loan|funding|capital)|(?:get|find|apply for|need|want)(?: me)? (?:a )?(?:loan|funding|financing|capital))\b/i],
  ["grants", /\bgrants?\b/i],
  ["estimated-tax", /\b(estimated tax(?:es)?|quarterly tax(?:es)?|1040-?es|self[- ]employment tax|pay (?:my )?taxes (?:on|for) my (?:business|income)|schedule c)\b/i],
  ["1099", /\b1099\b/i],
  ["licenses", /\b(business licen[cs]es?|permits?|licen[cs]e (?:to|for) (?:sell|operate|open|run)|do i need a licen[cs]e)\b/i],
  ["free-help", /\b(free (?:business )?(?:help|counsel(?:ing|ling|or|ors)|mentor(?:ing|s)?|advice|training)|sbdc|small business development center|score (?:mentor|mentors|chapter|business mentoring)|score\.org|women'?s business center|veterans? business outreach|business mentor|business mentoring|where can i get help (?:with|for) (?:my |a )?business|help (?:with|for) my (?:small )?business)\b/i]
];

function usSmallBusinessTopic(text) {
  const value = String(text || "").replace(/\s+/g, " ").trim();
  if (!value || value.length > 300) return null;
  if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value)) return null;
  for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
  return null;
}

// When is this United States guide the right one? A person's time zone is the best signal the page and the phone line give; the words of the question can also say so ("SBA", "IRS", "8(a)", "NMSDC", "SBDC",
// "SAM.gov", "United States"). Without either, the question is left to the general guardrail, which names no country-specific agency.
const US_TIME_ZONES = /^(?:America\/(?:New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Juneau|Sitka|Nome|Adak|Metlakatla|Yakutat|Menominee|North_Dakota\/.+|Indiana\/.+|Kentucky\/.+)|Pacific\/Honolulu|US\/.+)$/;
const US_WORDS = /\b(?:sba|irs|mbda|nmsdc|sbdc|8a|hubzone|wosb|sdvosb|sam\.gov|cdfi|1099|1040|schedule c|united states|usa)\b|\b8\s?\(\s?a\s?\)|\bu\.s\./i;
function isUsContext({ timeZone = "", text = "" } = {}) {
  return US_TIME_ZONES.test(String(timeZone || "")) || US_WORDS.test(String(text || ""));
}

const CLOSING = `This is general information, not legal, tax or financial advice, and rules change, so confirm on the official site. I cannot file or apply for anything for you.`;

function usSmallBusinessAnswer(id, { question = "" } = {}) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  const zip = id === "local-help" ? /\b(\d{5})(?:-\d{4})?\b/.exec(String(question || ""))?.[1] : "";
  const lead = zip ? `For ZIP code ${zip}: ` : "";
  const text = `${lead}${topic.text} Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}). ${CLOSING}`;
  return { topic: id, title: topic.title, text, sources };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, usSmallBusinessTopic, usSmallBusinessAnswer, isUsContext });
