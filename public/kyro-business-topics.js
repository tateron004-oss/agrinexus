// Which questions are about starting or running a small business in the United States (minority-owned, startups, loans, grants, certification, taxes ...). The same words decide in two places:
//   * the server's checked guide (nexus/knowledge/us-small-business.js) picks the topic and gives the answer with its official sources;
//   * the page (public/app.js) uses it to answer a SPOKEN question of this kind through that guide, because the voice model sometimes answered such a question from memory, with no source (found by the live voice test).
// topic(text) -> a topic id or null (only a QUESTION or request for help; a record, reminder or draft is not taken).  isUsContext({ timeZone, text }) -> a US time zone, or the words name a US programme.
// isBusinessQuestion(text) -> the words are about a business at all, so a plain "how do I grow a garden" or "a permit for fishing" is left to the voice model.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroBusinessTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

// A question, or a request for help: "how do I", "what is", "where can I", "I need a loan", "tell me about", "help me get certified"
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find (?:me|a|an|the|my)|show me|look(?:ing)? for|search for)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert)\b/i;
  
  const STRUCTURE_TERMS = [/\bllc\b/i, /\bs[- ]?corp/i, /\bc[- ]?corp/i, /\bnon-?profit/i, /\bfor[- ]profit/i, /\bsole proprietor/i, /\bpartnership/i];
  
  // first match wins, most specific first
  const MATCHERS = [
    // "Where is the nearest SBDC", "find a SCORE mentor near 30303", "business counselling in my area": the official finders, by ZIP code (this assistant cannot look up addresses)
    ["local-help", /(?=.*\b(?:near me|nearby|nearest|closest|near (?:us|my)|in my (?:area|city|town|county)|zip(?: code)?|\d{5}(?:-\d{4})?)\b)(?=.*\b(?:sbdc|small business development center|score (?:mentor|mentors|chapter)|women'?s business center|veterans? business outreach|business (?:counsel(?:ing|ling|or|ors)|help|center|mentor|mentors|advisor|advisors)|chamber of commerce|cdfi|community lender)\b)/i],
    ["mbda", /\b(mbda|minority business development agency)\b/i],
    ["8a", /\b8\s?\(\s?a\s?\)|\b8a\b/i],
    ["nmsdc", /\b(nmsdc|supplier diversity|minority supplier|minority business enterprise|\bmbe\b)\b/i],
    ["certification", /\b(certif(?:y|ied|ication|ications)|wosb|edwosb|hubzone|sdvosb|vosb|women[- ]owned small business|veteran[- ]owned small business|\bdbe\b)\b/i],
    ["contracting", /\b(sam\.gov|sam registration|register(?:ing)? in sam|government contract(?:s|ing)?|federal contract(?:s|ing)?|sell(?:ing)? to the government|bid(?:ding)? on (?:government |federal )?contracts?)\b/i],
    // investors, crowdfunding and "how do I fund a startup" come before the plain loan answer; "an SBA loan" and "a business loan" still go to loans
    ["startup-funding", /\b(investors?|venture capital|vc funding|angel investors?|crowd-?funding|equity (?:funding|financing|investment)|raise (?:money|capital|funds)|raising (?:money|capital|funds)|funding options|ways to (?:fund|finance)|(?:fund|finance) (?:my|a|our) (?:start-?up|new business)|seed (?:funding|round|money)|(?:start-?up|early[- ]stage) (?:funding|capital|financing|investment)|looking for (?:funding|investment|investors|capital)|investment capital|sell(?:ing)? (?:shares|stock|equity))\b/i],
    ["loans", /\b(sba loans?|7\s?\(a\)|7a loans?|504 loans?|micro-?loans?|small business loans?|business loans?|loan for my business|lender match|cdfi|community development financial|line of credit|start-?up (?:loan|funding|capital)|(?:get|find|apply for|need|want)(?: me)? (?:a )?(?:loan|funding|financing|capital))\b/i],
    ["grants", /\bgrants?\b/i],
    ["estimated-tax", /\b(estimated tax(?:es)?|quarterly tax(?:es)?|1040-?es|self[- ]employment tax|pay (?:my )?taxes (?:on|for) my (?:business|income)|schedule c)\b/i],
    ["1099", /\b1099\b/i],
    ["licenses", /\b(business licen[cs]es?|permits?|licen[cs]e (?:to|for) (?:sell|operate|open|run)|do i need a licen[cs]e)\b/i],
    // the startup library. "What type of business should I have: LLC, S corp, C corp, for-profit, nonprofit?" gets the overview; one named structure gets its own answer. Specific questions about taxes, 1099s and licences above still win.
    ["business-structure", /\b(?:what|which) (?:type|kind|form|structure)s? of (?:business|company|entity)\b|\b(?:type|kind|form|structure) of (?:business|company|entity) (?:should|to|do|is)\b|\bbusiness (?:structures?|entit(?:y|ies))\b/i],
    // two structures compared: "LLC or S corp", "LLC vs corporation", "difference between an S corp and a C corp"
    ["llc-vs-corp", /\bllc\b.{0,40}\b(?:or|vs\.?|versus|and)\b.{0,40}\b(?:s[- ]?corp\w*|c[- ]?corp\w*|corporations?)\b|\b(?:s[- ]?corp\w*|c[- ]?corp\w*|corporations?)\b.{0,40}\b(?:or|vs\.?|versus|and)\b.{0,40}\bllc\b|\bdifference between\b.{0,60}\b(?:llc|corporation|c[- ]?corp|s[- ]?corp)\b/i],
    ["s-corp", /\b(s[- ]?corp(?:oration)?s?|subchapter s|form 2553|2553)\b/i],
    ["for-profit-nonprofit", /\b(non-?profits?|501\s?\(?c\)?\s?\(?3\)?|for[- ]profit|tax[- ]exempt|benefit corporation|b[- ]corp)\b/i],
    ["llc-vs-corp", /\b(llc|limited liability compan(?:y|ies)|c[- ]?corp(?:oration)?s?|corporations?|incorporat(?:e|ing|ion)|articles of (?:organization|incorporation)|operating agreement)\b/i],
    ["business-structure", /\b(sole proprietor(?:ship)?|partnerships?|business structure)\b/i],
    ["business-plan", /\b(business plans?|lean (?:start-?up )?plan|executive summary|financial projections?)\b/i],
    ["name-trademark", /\b(business name|company name|trade ?marks?|dba|doing business as|assumed name|trade name|domain name|brand name|name (?:my|a|the|our) (?:business|company))\b/i],
    ["ein-registration", /\b(ein|employer identification number|register(?:ing)? (?:my|a|the|our) (?:business|company|llc|corporation)|registered agent|tax id(?: number)?s?|secretary of state)\b/i],
    // the rest of the SBA's startup steps. These come before "startup-steps" so that "how much does it cost to start a business" is about costs and "franchise" is not "growth".
    ["startup-costs", /\b(start-?up costs?|how much (?:does|will|do|would) it cost to (?:start|open|launch)|cost(?:s)? (?:of|to) (?:start|starting|open|opening|launch|launching)|break-?even|how much money (?:do i|will i) need to (?:start|open|launch))\b/i],
    ["business-credit", /\b(business credit|build(?:ing)? credit for my (?:business|company)|d-?u-?n-?s|dun (?:&|and) bradstreet|credit (?:score|report) for my (?:business|company))\b/i],
    ["buy-business-franchise", /\b(franchis(?:e|es|ing|or)|buy(?:ing)? (?:an? )?(?:existing )?(?:business|company)|purchas(?:e|ing) (?:an? )?(?:existing )?(?:business|company))\b/i],
    ["business-insurance", /\b(business insurance|insurance for my (?:business|company|shop|store|restaurant)|what insurance (?:does|do|should) (?:my|a|an) (?:small |new )?(?:business|company|shop|store|restaurant|startup|llc)|(?:general |product |professional )?liability insurance|workers'? comp\w*|business owner'?s policy|commercial (?:property )?insurance)\b/i],
    ["business-location", /\b(zoning|business location|location for my (?:business|company|shop|store)|where (?:should|do) i (?:open|locate|set up|put) (?:my|a) (?:business|shop|store)|pick(?:ing)? (?:a )?(?:business )?location|home-?based business|run(?:ning)? (?:a )?business (?:from|out of) (?:my )?home)\b/i],
    ["business-bank-account", /\b(business bank account|business checking|(?:open|opening) (?:a )?(?:business )?bank account|merchant services?|payment processors?|separate (?:my )?(?:business|personal) (?:and|from) (?:my )?(?:personal|business)|accept (?:credit |debit )?cards?)\b/i],
    ["hiring-employees", /\b(hir(?:e|ing) (?:my |our |a |an |the )?(?:first |new )?(?:employees?|workers?|staff)|first employee|payroll|w-?4|i-?9|independent contractors?|employee or (?:an )?(?:independent )?contractor|contractor or (?:an )?employee|become an employer|new hires?)\b/i],
    ["bookkeeping-accounting", /\b(bookkeep\w*|accountants?|accounting (?:software|method|system)|cash (?:vs\.?|versus|or) accrual|accrual|balance sheet|cpa|keep(?:ing)? (?:track of )?(?:my )?(?:books|records)|track(?:ing)? (?:my )?(?:income|expenses|revenue))\b/i],
    ["business-taxes", /\b(business taxes|taxes (?:for|on|does|do|should) (?:my|a|an) (?:small |new )?(?:business|llc|company)|what taxes|sales tax|tax year|fiscal year|state (?:income |employment )?taxes|pay(?:ing)? (?:my )?business taxes)\b/i],
    ["startup-steps", /\b((?:start|starting|launch|launching|open|opening) (?:a |my |our )?(?:new |own )?(?:small )?(?:business|company|start-?up)|steps to (?:start|launch)|start-?up checklist|i(?:'m| am) (?:starting )?(?:a )?start-?up|i(?:'m| am) a (?:new|first[- ]time) (?:business )?owner|first steps (?:for|in|of) (?:my|a) business)\b/i],
    ["growth-scaling", /\b(grow(?:ing|th)? (?:my|our|the|a) (?:small )?(?:business|company|revenue|sales)|growth (?:strategy|plan)|scal(?:e|ing|ability)|expand(?:ing)? (?:my|our|the) (?:business|company)|expansion|new (?:locations?|markets?)|exporting|franchis(?:e|ing)|roadmap|merg(?:e|ing)|acqui(?:re|ring|sition))\b/i],
    ["marketing-visibility", /\b(market(?:ing)? (?:my|our|the|a) (?:small |new )?(?:business|company|plan|strategy)|marketing (?:plan|strategy)|get (?:more )?customers|find (?:more |new )?customers|visibility|more visible|get noticed|be seen|stand out|branding)\b/i],
    ["free-help", /\b(free (?:business )?(?:help|counsel(?:ing|ling|or|ors)|mentor(?:ing|s)?|advice|training)|sbdc|small business development center|score (?:mentor|mentors|chapter|business mentoring)|score\.org|women'?s business center|veterans? business outreach|business mentor|business mentoring|where can i get help (?:with|for) (?:my |a )?business|help (?:with|for) my (?:small )?business)\b/i]
  ];
  
  function usSmallBusinessTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value)) return null;
    // three or more kinds of business named at once ("LLC, S corp or C corp? for-profit or nonprofit?") is the question "what type of business should I be": the overview answers it
    if (STRUCTURE_TERMS.filter(pattern => pattern.test(value)).length >= 3) return "business-structure";
    for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
    return null;
  }
  
  // When is this United States guide the right one? A person's time zone is the best signal the page and the phone line give; the words of the question can also say so ("SBA", "IRS", "8(a)", "NMSDC", "SBDC",
  // "SAM.gov", "United States"). Without either, the question is left to the general guardrail, which names no country-specific agency.
  const US_TIME_ZONES = /^(?:America\/(?:New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Boise|Juneau|Sitka|Nome|Adak|Metlakatla|Yakutat|Menominee|North_Dakota\/.+|Indiana\/.+|Kentucky\/.+)|Pacific\/Honolulu|US\/.+)$/;
  const US_WORDS = /\b(?:sba|irs|ftc|nist|cisa|mbda|nmsdc|sbdc|8a|hubzone|wosb|sdvosb|sam\.gov|cdfi|1099|1040|schedule c|united states|usa|llc|s[- ]?corp|c[- ]?corp|ein|uspto|secretary of state|form 2553)\b|\b8\s?\(\s?a\s?\)|\b501\s?\(\s?c\s?\)|\bu\.s\./i;
  function isUsContext({ timeZone = "", text = "" } = {}) {
    return US_TIME_ZONES.test(String(timeZone || "")) || US_WORDS.test(String(text || ""));
  }

  const BUSINESS_WORDS = /\b8\s?\(\s?a\s?\)|\b(?:bookkeep\w*|accountants?|accounting|business(?:es)?|compan(?:y|ies)|start-?ups?|llc|s[- ]?corp|c[- ]?corp|non-?profits?|self[- ]employed|entrepreneur\w*|sba|sbdc|score|mbda|nmsdc|8a|mbe|wosb|edwosb|hubzone|sdvosb|vosb|sam\.gov|ein|1099|investors?|franchis\w*|payroll|employees?|customers|contractors?|catering|restaurant|shop|store|sell(?:ing)?|cdfi|grants?|loans?)\b/i;
  function isBusinessQuestion(text) { return BUSINESS_WORDS.test(String(text || "")); }

  return Object.freeze({ topic: usSmallBusinessTopic, isUsContext, isBusinessQuestion });
});
