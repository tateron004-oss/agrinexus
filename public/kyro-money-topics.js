// Which question about a PERSON'S OWN MONEY is this? The same words are used by the server (nexus/knowledge/money-guide.js answers it) and by the page (public/app.js), which takes such a question itself instead of leaving it to the voice
// model (which would answer from memory, with no sources, and could state a rule wrongly: what FDIC insurance covers, what a collector may do, what an IRA allows, how fees add up).
// It is deliberately narrow: a topic is taken only when the question names the thing (a budget, an emergency fund, a credit report, a payday loan, a 401(k), an index fund ...), AND is a question or a request to learn. An order to record or
// do something ("log an expense of 500", "set a budget of 200 for fuel"), a person's own records, a business's money (the business guides and the workspace answer those), buying or trading coins, forex and the like (the investing guard
// answers those first), the calendar, and anything that sounds like a personal emergency is never taken. The one open question that used to be refused, "what should I invest in?", is taken here: it is answered by teaching how to choose
// (goal, time horizon, ability to handle losses), never by naming a stock, fund, coin, broker or app (see nexus/brain/investment-guard.js).
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroMoneyTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // moneyTopic(text) -> "money-overview" | "money-spending-plan" | "money-irregular-income" | "money-bank-account" | "money-savings" | "money-free-help" | "money-tax-help" | "money-credit" | "money-debt-plan" | "money-costly-borrowing"
  //   | "money-overdraft-bnpl" | "money-debt-collectors" | "money-student-loans" | "money-homeownership" | "money-housing-trouble" | "money-investing-basics" | "money-investment-types" | "money-cash-like" | "money-what-to-invest"
  //   | "money-fees" | "money-retirement-accounts" | "money-ira" | "money-brokerage-and-kids" | "money-scams" | "money-account-security" | null
  // A pure text matcher: no sources, no answers, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|cancel|schedule|email|message|read|make|build|create|write|draft|generate|design|show|list|undo|transfer|pay|deposit|withdraw|buy|sell|lend|borrow|invoice)\b/i;
  const CALENDAR_OR_RECORDS = /\b(?:my calendar|my schedule|my appointments?|my invoices?|my customers?|my clients?|my leads?|my donors?|on my list|my notes?|how much (?:did|have) i (?:spend|spent|earn|earned|make|made|owe)|what do i owe)\b/i;
  // an amount of money in the sentence is a record or a sum, not a question about how things work
  const AN_AMOUNT = /(?:[$£€]\s?\d|\b\d[\d,.]*\s?(?:dollars?|bucks|usd|ksh|kes|shillings?|naira|ngn|cedis?|rand|euros?|pounds?|percent|%)\b)/i;
  // a business's money is answered by the business guides and the workspace
  const BUSINESS_MONEY = /\b(?:my (?:business|company|shop|store|farm|nonprofit|non-profit|church|restaurant|salon|startup)|our (?:business|company|shop|store|farm|nonprofit|church)|business (?:loan|credit|plan|account|owner|expenses?|taxes|tax|finances?)|small business|an? llc|\bsba\b|invoices?|payroll|grant proposal)\b/i;
  // buying or trading coins, forex and the like: the investing guard answers those first (only the scam topic may mention them)
  const TRADING = /\b(?:bitcoin|btc|ethereum|crypto(?:currency|currencies|s)?|altcoins?|dogecoin|stablecoins?|nfts?|binance|coinbase|forex|day ?trading|swing ?trading|trading (?:bot|bots|signals?|app|platform)|copy ?trading|options trading|margin trading|memecoins?)\b/i;
  // public money is not a person's own
  const NOT_PERSONAL = /\b(?:national debt|federal budget|state budget|city budget|county budget|government budget|school budget|debt ceiling|trade deficit|budget (?:bill|vote|cuts? in congress))\b/i;
  // asking for a named pick (the best stock, which fund to buy) stays with the investing guard
  const PICK_REQUEST = /\b(?:best|top|good|safest|hottest|right|winning)\b[^.!?]{0,15}\b(?:stocks?|shares|funds?|etfs?)\b|\b(?:which|what)\s+(?:stocks?|shares|funds?|etfs?|bonds?)\b[^.!?]{0,30}\b(?:buy|invest|pick|choose|own|hold)\b/i;
  const PERSONAL_EMERGENCY =/\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm|overdos\w+|911|ambulance|heart attack|can'?t breathe|cannot breathe|chest pain|domestic violence|rape[d]?|abus(?:e[ds]?|ing) me|touched me|molest\w*|i(?:'m| am) in (?:a )?crisis|don'?t want to (?:live|be here)|no reason to live)\b/i;
  // a pick: a named kind of thing to buy, or a company to use. These keep the open question a request for a pick, which stays with the investing guard.
  const A_PICK = /\b(?:stocks?|shares?|funds?|etfs?|companies|company|coins?|tokens?|brokers?|apps?|platforms?|exchanges?|banks?|picks?|tips?|tickers?)\b/i;

  const POSITIVE = [
    // fraud, scams and keeping accounts and identity safe (the only topic that may mention coins and trading, to warn about them)
    ["money-scams", text => /\b(?:investment (?:scams?|fraud\w*)|ponzi|pyramid scheme|affinity fraud|guaranteed returns?|too good to be true|romance scams?|pig butchering|check (?:out )?(?:an? )?(?:financial )?(?:adviser|advisor|broker|investment professional)|brokercheck|is (?:this|that|it) (?:investment|company|firm|offer|opportunity) (?:legit|legitimate|real|a scam|safe)|report (?:an? )?(?:investment )?(?:scam|fraud)|fake checks?|money scams?|(?:spot|avoid|recogni[sz]e) (?:an? )?(?:investment |money |crypto |romance |online )?(?:scam|fraud))/i.test(text)],
    // keeping accounts and identity safe, and beneficiaries
    ["money-account-security", text => /\b(?:identity theft|stolen identity|identity stolen|(?:stole|stolen|steal\w*|used) my (?:identity|social security number|ssn|personal information)|protect my (?:accounts?|money|identity|bank|savings|retirement)|two[- ]?(?:factor|step)|strong passwords?|password manager|beneficiar(?:y|ies))\b/i.test(text)],
    // federal student loans
    ["money-student-loans", text => /\b(?:student loans?|studentaid|income[- ]driven repayment|loan servicer|student debt|federal student aid|public service loan forgiveness|pslf)\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    // debt collectors and what they may and may not do
    ["money-debt-collectors", text => /\b(?:debt collect\w+|collection agenc\w+|collections? (?:call|calls|letter|account|notice)|fdcpa|fair debt|garnish\w*|time[- ]barred|statute of limitations on (?:a )?debt|stop (?:the )?(?:collectors?|collection)|collectors? (?:keep )?(?:calling|harass\w+)|calling me about (?:a |my )?debt|sued over (?:a |my )?debt|sent (?:me )?to collections?)\b/i.test(text)],
    // payday, title and pawn loans, cash advances, buy now pay later
    ["money-overdraft-bnpl", text => /\b(?:overdraft (?:fees?|protection|loans?)?|overdrafts?|buy now,? pay later|bnpl|cash advances?|afterpay|klarna)\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    ["money-costly-borrowing", text => /\b(?:payday loans?|pay day loans?|title loans?|car title|pawn (?:loan|shop)|pawnshop|loan sharks?|predatory (?:loans?|lend\w+)|high[- ]interest loans?|check cashing)\b/i.test(text)],
    // buying a home, a mortgage, falling behind on a mortgage or rent
    ["money-housing-trouble", text => /\b(?:foreclos\w+|evict\w+|behind on (?:my |the )?(?:mortgage|rent)|can'?t pay (?:my |the )?(?:mortgage|rent)|missed (?:my |a )?(?:mortgage|rent)|contract for deed|rent[- ]to[- ](?:own|buy)|help (?:paying|with) (?:my )?(?:rent|utilit\w+))\b/i.test(text)],
    ["money-homeownership", text => /\b(?:buy(?:ing)? (?:a )?(?:home|house|condo)|mortgages?|down payments?|closing costs?|first[- ]time (?:home ?)?buyers?|pre-?approv\w+|fha loans?|homeownership|own(?:ing)? a home|loan estimate|closing disclosure)\b/i.test(text)],
    // workplace retirement plans and IRAs
    ["money-retirement-accounts", text => /\b(?:401\s?\(?k\)?|403\s?\(?b\)?|457\s?\(?b\)?|employer match\w*|matching contribution|vesting|vested|retirement (?:plan|plans|account|accounts|savings|saving|fund|funds)|rollover|roll over (?:my )?(?:401|ira|retirement)|save (?:enough )?for retirement|(?:plan|planning|prepare|preparing) for retirement|how much (?:do i|should i) (?:need|save) (?:for retirement|to retire)|workplace (?:plan|retirement))\b/i.test(text)],
    ["money-ira", text => /\b(?:ira|iras|roth|individual retirement|saver'?s credit|catch[- ]up contribution)\b/i.test(text)],
    // brokerage accounts, SIPC, saving and investing for children
    ["money-brokerage-and-kids", text => /\b(?:brokerage accounts?|sipc|529|college savings|custodial accounts?|utma|ugma|coverdell|open (?:an? )?(?:investment|brokerage) account|(?:invest|investing|save|saving) for (?:my |our )?(?:kids?|child|children|son|daughter|grandchild\w*|grandkids?|baby)|(?:kids?|child|children)'?s? (?:college|education) (?:fund|savings|saving)|teach(?:ing)? (?:my |our )?(?:kids?|children|child|teens?|teenagers?) about money)\b/i.test(text)],
    // fees and expenses that eat returns
    ["money-fees", text => /\b(?:(?:investment|fund|mutual fund|etf|401\s?\(?k\)?|advis[eo]r|adviser|broker\w*|account|management) fees?|expense ratios?|sales loads?|12b-1|hidden fees|how much does (?:investing|an advis[eo]r|a broker) cost|fees (?:on|for|in) (?:my )?(?:investments?|funds?|401|retirement))\b/i.test(text)],
    // the open question that used to be refused: how to choose (never a named pick)
    ["money-what-to-invest", text => !A_PICK.test(text) && !TRADING.test(text) && /\b(?:what|where|which)\b[^.!?]{0,30}\binvest(?:ing|ments?)?\b|\b(?:safest|best|good|right|smart)\b[^.!?]{0,25}\b(?:investments?|way to invest|place to put (?:my )?(?:money|savings))\b|\bhow (?:do|should|can) i (?:choose|pick|decide|select) (?:my |an? |the )?(?:right )?investments?\b|\bhow (?:do|should|can) i (?:choose|decide) what to invest\b|\bwhere (?:do|should|can) i put (?:my )?(?:money|savings) (?:to grow|so it grows)\b|\bshould i invest\b/i.test(text)],
    // what stocks, bonds, funds, ETFs, index funds and target-date funds are
    ["money-cash-like", text => /\b(?:certificates? of deposit|cds?|money market (?:fund|funds|account|accounts)|treasury (?:bills?|bonds?|notes?|securities)|t-?bills?)\b/i.test(text) && !TRADING.test(text)],
    ["money-investment-types", text => /\b(?:stocks? (?:and|vs\.?|versus|or) bonds?|(?:what|how)\b[^.!?]{0,20}\b(?:is|are|does|do|work|works)\b[^.!?]{0,15}\b(?:an? |the )?(?:stocks?|bonds?|mutual funds?|etfs?|index funds?|target[- ]date funds?)\b|index funds?|target[- ]date|mutual funds?|\betfs?\b|bond funds?)\b/i.test(text) && !TRADING.test(text)],
    // saving vs investing, compound growth, inflation, risk, diversification
    ["money-investing-basics", text => !TRADING.test(text) && /\b(?:(?:what is|how does|how do|explain|teach me|learn(?:ing)?|understand(?:ing)?) (?:about )?investing|invest(?:ing)? for beginners|how (?:do|can) i (?:start|begin|get started) (?:with )?investing|(?:saving|savings) (?:vs\.?|versus|or|and) invest\w*|difference between (?:saving|savings) and investing|compound(?:ing)? (?:interest|growth|returns?|earnings)|inflation|risk (?:and|vs\.?|versus) return|investment risk|diversif\w+|asset allocation|time horizon|risk tolerance|rebalanc\w+|why (?:should|do) i invest|is investing (?:safe|risky)|can i lose money (?:investing|in (?:stocks|the stock market|funds)))\b/i.test(text)],
    // credit reports and scores
    ["money-credit", text => /\b(?:credit (?:scores?|reports?|history|file|bureaus?|freeze|repair|building|builder)|fico|annualcreditreport|build(?:ing)? (?:my )?credit|rebuild(?:ing)? (?:my )?credit|(?:improve|raise|fix|boost) (?:my )?(?:credit|score)|dispute\w* .{0,25}\b(?:credit|report)|fraud alert|equifax|experian|transunion|no credit history|thin credit file)\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    // taking stock of debts and choosing what to pay first
    ["money-debt-plan", text => /\b(?:pay(?:ing)? (?:off|down)|get(?:ting)? out of|reduce|reducing|manage|managing|consolidat\w+|deal with|tackle)\b[^.!?]{0,20}\b(?:debts?|credit cards?|credit card (?:debt|balances?)|loans?)\b|\bdebts?\b[^.!?]{0,15}\b(?:plan|list|inventory|payoff|pay[- ]off|free|relief|priorit\w+)|\b(?:which|what) (?:debt|loan|bill|card)s? (?:should i|to|do i) pay (?:off )?first|\bminimum payments?\b|\bapr\b|\binterest rates?\b|\bbehind on (?:my )?(?:bills|payments|loans?|credit cards?)|\bcan'?t (?:afford to )?pay (?:my )?(?:bills|debts?|loans?|credit cards?)|\bin debt\b|\bdebt\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    // free and low-cost help with money
    ["money-tax-help", text => /\b(?:\bvita\b|volunteer income tax|tax counseling for the elderly|earned income (?:tax )?credit|\beitc\b|free file|free (?:tax (?:help|prep\w*|preparation|filing)|tax return)|where (?:can|do) i (?:get|find) (?:free )?help with (?:my )?taxes)\b/i.test(text)],
    ["money-free-help", text => /\b(?:nonprofit credit counsel\w+|credit counsel(?:or|ors|ing)|financial (?:coach|coaching|counsel\w+)|free (?:financial (?:help|advice|coaching|counseling)|money (?:help|coaching))|housing counsel\w+|benefit finder|where (?:can|do) i (?:get|find) (?:free )?(?:help|advice) with (?:my )?(?:money|finances|budget|debt)|who can help me with (?:my )?(?:money|finances|debt))\b/i.test(text)],
    // income that changes from week to week
    ["money-irregular-income", text => /\b(?:(?:irregular|unpredictable|uneven|variable|seasonal|inconsistent|fluctuating|unstable|changing) (?:income|pay|paychecks?|wages|earnings|hours|work)|income (?:that|which) (?:changes|varies|goes up and down)|(?:my |our )?(?:income|pay|paycheck|paychecks|hours|earnings) (?:changes|change|varies|vary|is different|are different|goes up and down|is not (?:steady|the same|regular)|isn'?t (?:steady|the same|regular))|(?:gig|freelance|self[- ]employed|tip(?:ped)?) (?:work|income|worker|workers|pay|earnings)|paid (?:by the day|per job|per gig|in cash)|slow (?:months?|season)|lean (?:months?|season)|don'?t know (?:what|how much) i(?:'ll| will) (?:make|earn))\b/i.test(text) && !BUSINESS_MONEY.test(text)
      // estimated tax is taken only for a person's gig, tipped or irregular pay; "estimated taxes on my catering income" is a business owner's tax question, answered by the professional-advice route
      || /\b(?:estimated (?:tax|taxes|tax payments?)|quarterly (?:tax|taxes)|1040-?es)\b/i.test(text) && /\b(?:gig|freelanc\w*|tips?|tipped|self[- ]employed|irregular|seasonal|uneven|variable|unpredictable|side (?:job|hustle)|uber|lyft|doordash|instacart)\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    // an emergency fund, saving regularly, saving goals
    ["money-savings", text => /\b(?:emergency (?:fund|savings|money)|rainy[- ]day|how much (?:should|do) i (?:save|put away|set aside)|start(?:ing)? (?:to )?sav(?:e|ing)|sav(?:e|ing) (?:more )?money|saving (?:goals?|plan|tips?)|savings (?:goals?|plan|tips?|habit)|automatic (?:transfers?|savings|saving)|pay yourself first|can'?t (?:seem to )?save|hard to save|how (?:do|can) i (?:save (?:more )?(?:money|up|for)|build (?:up )?(?:my )?savings))\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    // choosing and keeping a bank or credit union account
    ["money-bank-account", text => /\b(?:fdic|ncua|federally insured|share insurance|credit unions?|(?:open|get|need|choose|find|pick|compare)(?:ing)? (?:a |an |the )?(?:free |cheap |low[- ]cost |safe |basic |good )?(?:bank |checking |savings )?(?:account|bank)|(?:no|without a|don'?t have a|do not have a) bank account|unbanked|underbanked|bank (?:fees?|charges?)|monthly (?:maintenance |account )?fees?|minimum balance|direct deposit|prepaid (?:debit )?cards?|is my (?:money|bank|savings|deposit)s? (?:safe|insured|protected)|checking account|savings account|how (?:safe|insured) (?:is|are) my (?:money|bank|savings|deposits?))\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    // making a budget, a spending plan, a bill calendar
    ["money-spending-plan", text => /\b(?:budget\w*|spending plan|bill calendar|track(?:ing)? (?:my )?(?:spending|expenses|bills)|where (?:does|did) my money (?:go|went)|paycheck to paycheck|needs (?:vs\.?|versus|and) wants|pay my bills|stretch my (?:paycheck|money)|make ends meet|cut (?:my )?(?:spending|expenses|costs)|stop overspending|spend less|manage (?:my )?(?:monthly )?(?:bills|expenses)|financial goals?|money goals?)\b/i.test(text) && !BUSINESS_MONEY.test(text)],
    // what Kyro can do for a person's money
    ["money-overview", text => /\b(?:financial (?:education|literacy|planning|wellness|health|coaching|basics|help)|money (?:management|skills|help|education|basics|coaching|lessons?|classes?)|personal finances?|learn (?:about |how to manage )?(?:money|finances?|finance)|teach me (?:about )?(?:money|finances?|managing money)|(?:manage|managing|handle|handling) (?:my )?(?:money|finances)|how (?:does|do) money work|how is money made|how (?:do|can) i (?:make|earn|grow|keep) (?:my )?money|where (?:do|should) i (?:start|begin) with (?:my )?(?:money|finances)|what can you (?:do|help)[^.!?]{0,20}\b(?:money|finances?)|help (?:me )?with (?:my )?(?:money|finances))\b/i.test(text) && !BUSINESS_MONEY.test(text)]
  ];

  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|i would like|i'd like|any|give me|walk me|teach me|my|our|i am|i'm|we are|we're|we have|i have|i just|i was|i had|i can'?t|i don'?t|i do not|learn)\b)/i;

  function moneyTopic(text) {
    const value = String(text || "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (NOT_A_GUIDE_QUESTION.test(value) || NOT_PERSONAL.test(value) || PICK_REQUEST.test(value) || CALENDAR_OR_RECORDS.test(value) || PERSONAL_EMERGENCY.test(value) || AN_AMOUNT.test(value)) return null;
    if (!ASKS.test(value)) return null;
    for (const [topic, test] of POSITIVE) {
      // only the scam topics may mention coins and trading (to warn about them) or a business
      const scamTopic = topic === "money-scams" || topic === "money-account-security";
      if (TRADING.test(value) && !scamTopic) continue;
      if (BUSINESS_MONEY.test(value) && !scamTopic) continue;
      if (test(value)) return topic;
    }
    return null;
  }

  return Object.freeze({ moneyTopic });
});
