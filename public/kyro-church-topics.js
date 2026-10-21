// Which question about a CHURCH or other house of worship (a synagogue, temple, mosque) is this? The same words are used by the server (nexus/knowledge/church-guide.js answers it) and by the page (public/app.js), which takes such a question
// itself instead of leaving it to the voice model (which would answer from memory, with no sources, and could state a tax rule wrongly, or give a church leader the general nonprofit answer: apply for exemption, file a Form 990, neither
// of which a church must do). It is deliberately narrow: a topic is taken only when the question names a church word (church, congregation, parish, synagogue, mosque, pastor, clergy, parsonage, tithes ...) AND the thing asked
// (exempt status, setting one up, the annual return, a business's income, donation receipts, a pastor's pay or housing allowance, payroll taxes, political campaigns). A person's own records ("show my church donors"), the calendar, an order
// to do something ("send", "call my pastor"), a question that is about faith or belief rather than the organization, and anything about a personal emergency or wanting to die is never taken. "Ministry" and "minister" are not church words
// on their own (a government minister is not a pastor); "temple" is not either (a body part).
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroChurchTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // churchTopic(text) -> "church-overview" | "church-exempt-status" | "church-register" | "church-990" | "church-unrelated-income" | "church-donation-receipts" | "church-clergy-pay" | "church-payroll" | "church-politics" | null.
  // A pure text matcher: no sources, no answers, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|cancel|schedule|email|message|pray|read)\b/i;
  const CALENDAR_OR_RECORDS = /\b(?:my calendar|my schedule|my appointments?|my invoices?|my customers?|my leads?|on my list|my donors?|our donors?|show (?:me )?(?:my|our)|my notes?)\b/i;
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm|overdos\w+|911|ambulance|heart attack|can'?t breathe|i(?:'m| am) in (?:a )?crisis|domestic violence|abuse[ds]?|rape[d]?)\b/i;
  const CHURCH = /\b(?:churches|church|congregations?|parish(?:es)?|synagogues?|mosques?|masjids?|(?:house|houses|place|places) of worship|pastors?|clergy(?:man|men|woman|women)?|parsonages?|tith(?:e|es|ing)|faith[- ]based (?:organi[sz]ations?|groups?|nonprofits?)|ministers? of (?:a|the|our|my) (?:church|congregation)|priests?|rabbis?|imams?|reverends?|preachers?|pulpit|sermons?)\b/i;
  const CLERGY = /\b(?:pastors?|clergy(?:man|men|woman|women)?|ministers?|priests?|rabbis?|imams?|reverends?|preachers?|parsonages?)\b/i;

  const POSITIVE = [
    // a pastor's pay: the housing allowance, a parsonage, self-employment tax, whether pay is taxable
    ["church-clergy-pay", text => /\bhousing allowances?\b/i.test(text) && (CLERGY.test(text) || CHURCH.test(text) || /\bministry\b/i.test(text))
      || /\bparsonages?\b/i.test(text) && /\b(?:tax\w*|exclu\w+|allowance|income|rent\w*|utilit\w+|value)\b/i.test(text)
      || CLERGY.test(text) && /\b(?:self[- ]employ\w*|social security|medicare|housing|w-?2|1099|taxable|taxed|taxes|income tax|salary|pay|paid|compensation|how (?:is|are) (?:a |the |my |our )?(?:pastor|clergy|minister|priest|rabbi|imam)\w* (?:pay|paid|salary|compensation|income))\b/i.test(text)],
    // the payroll-tax choice for a church (Form 8274) and a church's employees
    ["church-payroll", text => /\b(?:form )?8274\b/i.test(text)
      || CHURCH.test(text) && /\b(?:fica|payroll tax(?:es)?|employment tax(?:es)?|withhold\w*|employer (?:tax|share)|church[- ]controlled)\b/i.test(text)
      || CHURCH.test(text) && /\bemployees?\b/i.test(text) && /\b(?:social security|medicare|taxes|taxed|exempt)\b/i.test(text)],
    // political campaigns and a church (the Johnson Amendment)
    ["church-politics", text => /\bjohnson amendment\b/i.test(text)
      || CHURCH.test(text) && /\b(?:endors\w+|political\w*|politics|campaign\w*|candidates?|election\w*|vot(?:e|ing|er|ers)|partisan|lobby\w*)\b/i.test(text)],
    // income from a business a church runs
    ["church-unrelated-income", text => /\bunrelated business\b|\bubi[ts]?\b|\b990[- ]?t\b/i.test(text) && (CHURCH.test(text) || /\bnonprofit|exempt\b/i.test(text))
      || CHURCH.test(text) && /\b(?:bookstores?|book store|coffee shops?|cafe|caf[eé]|thrift (?:store|shop)|gift shop|rent(?:ing)? out|rental income|business income|income from (?:a|the|our) business|run(?:s|ning)? a business|sell(?:s|ing)? (?:things|items|products|goods))\b/i.test(text) && /\b(?:tax\w*|taxable|owe|exempt|income|irs|report\w*)\b/i.test(text)],
    // the annual return
    ["church-990", text => CHURCH.test(text) && (/\b990(?:[- ]?(?:n|ez|t))?\b/i.test(text) && !/\b990[- ]?t\b/i.test(text)
      || /\b(?:annual (?:return|filing|report)|e-?postcard|(?:file|filing|files) (?:a |our |the |my )?(?:tax )?(?:return|taxes|tax return|with the irs)|information return|report to the irs|irs filings?|required to file)\b/i.test(text))],
    // receipts for gifts and tithes
    ["church-donation-receipts", text => (CHURCH.test(text) || /\b(?:donations?|gifts?|giving|contributions?|offerings?)\b/i.test(text) && /\b(?:members?|congregants?|parishioners?|tith\w+)\b/i.test(text))
      && /\b(?:receipts?|acknowledg\w+|giving statements?|contribution statements?|donation letters?|thank[- ]you letters?|substantiat\w+|deductible|deduct\w*|tax[- ]deduct\w+|written statement|quid pro quo)\b/i.test(text)],
    // whether a church is exempt or must apply (also "do churches pay taxes")
    ["church-exempt-status", text => CHURCH.test(text) && /\b(?:tax[- ]exempt\w*|exempt(?:ion)? (?:status|from)|exempt\b|501\s*\(?c\)?\s*\(?3\)?|1023|determination letter|irs recogni\w+|recogni(?:tion|zed|sed) (?:by|from) the irs|apply (?:for|to)|register(?:ed|ing)? with the irs|nonprofit status|non-profit status|charitable status|pay(?:s|ing)? (?:any )?(?:federal |income )?tax(?:es)?|have to pay (?:any )?tax(?:es)?|owe (?:any )?tax(?:es)?|tax[- ]free)\b/i.test(text)],
    // starting, forming and registering a church
    ["church-register", text => (/\b(?:start|starting|set up|setting up|form|forming|found|founding|incorporat\w+|register\w*|launch\w*|open\w*|creat\w+|build\w*|plant\w*)\s+(?:an?\s+|my\s+|our\s+|the\s+|new\s+)?(?:[a-z'-]+\s+){0,2}(?:church|churches|synagogue|mosque|masjid|congregation|parish|house of worship|place of worship|ministry)\b/i.test(text)
      || CHURCH.test(text) && /\b(?:ein|employer identification number|articles of incorporation|incorporat\w+|bylaws|state registration|charitable solicitation|property tax(?:es)?|register(?:ed|ing)? (?:with|in) (?:the |my |our )?state|nonprofit corporation|non-profit corporation|legal structure|how do i (?:start|set up|form|found|register))\b/i.test(text))],
    // what Kyro can do for a church
    ["church-overview", text => CHURCH.test(text) && /\b(?:what can you (?:do|help)|how can you help|can you help|help (?:me |us )?(?:with|run|start)|what (?:do|does|can) kyro|church (?:tools?|capabilit\w+|help|guide|information|resources?)|information (?:for|about) (?:a |our |my )?(?:church|churches|pastors?)|resources? for (?:a |our |my )?(?:church|churches|pastors?))\b/i.test(text)]
  ];

  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|i would like|i'd like|any|give me|show me|walk me|teach me|our church|my church|i am|i'm|we are|we're|we have|we run|the church)\b)/i;

  function churchTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (NOT_A_GUIDE_QUESTION.test(value) || CALENDAR_OR_RECORDS.test(value) || PERSONAL_EMERGENCY.test(value)) return null;
    if (!CHURCH.test(value) && !/\bhousing allowance\b|\bparsonage\b|\b8274\b|\bjohnson amendment\b/i.test(value)) return null;
    if (!ASKS.test(value)) return null;
    for (const [topic, test] of POSITIVE) if (test(value)) return topic;
    return null;
  }

  return Object.freeze({ churchTopic });
});
