// Which question is about STAYING SAFE ONLINE and on the phone, for a person with little or no technical skill? Fake messages, calls and links, passwords and two-step sign-in, a hijacked account, identity theft, locked files, a swapped SIM card,
// where to report, and what to do right now. The same words are used by the server (nexus/knowledge/safety-guide.js answers it from the official pages of the United States, Kenya and Nigeria) and by the page (public/app.js), which takes such a question
// itself instead of leaving it to the voice model (which would answer from memory, with no sources, and could give a wrong number or step in the very moment a person is in trouble).
// It is deliberately narrow. It is a question or a request to learn, never an order or a record ("remind me to change my password", "show my notes"). Money questions about investments, loans, banks and mobile money stay with the money guide; a
// business's own cybersecurity (its website, domain, customers, staff) stays with the business technology guide; a worry about an older person being scammed stays with the older-adults guide; a child's safety stays with the parents' guide; a personal
// emergency is never taken (the safety layer answers it). A question that names Kenya or Nigeria, or one of their agencies, is that country's.
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroSafetyTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // safetyTopic(text) -> "safe-overview" | "safe-passwords" | "safe-two-step" | "safe-updates-backups" | "safe-phishing" | "safe-phone-scams" | "safe-payment-scams" | "safe-hacked-account" | "safe-identity-theft" | "safe-ransomware" | "safe-sim"
  //   | "safe-report" | "safe-public-wifi" | "ke-safe-fake-messages-calls" | "ke-safe-sim" | "ke-safe-hacked-defrauded" | "ke-safe-report-complain" | "ke-safe-data-rights" | "ke-safe-cybercrime-law" | "ke-safe-basics"
  //   | "ng-safe-dnd-spam" | "ng-safe-sim-nin" | "ng-safe-scam-types" | "ng-safe-report-cybercrime" | "ng-safe-bank-fraud" | "ng-safe-data-rights" | "ng-safe-children" | "ng-safe-basics" | "ng-safe-phishing" | null
  // A pure text matcher: no sources, no answers, no records.
  const NOT_A_GUIDE_QUESTION = /^(?:please\s+)?(?:log|record|add|save|remind|set|mark|delete|remove|forget|call|text|send|play|open|translate|export|cancel|schedule|email|message|read|make me|build|create|write|draft|generate|block|unblock|change|reset|update|install|download|scan|check my|show (?:me )?my)\b(?!\s+(?:me|us)\s+(?:how|through)\b)/i;
  const CALENDAR_OR_RECORDS = /\b(?:my calendar|my schedule|my appointments?|my notes?|on my list|my reminders?|my invoices?|my customers?|my clients?)\b/i;
  const PERSONAL_EMERGENCY = /\b(?:suicid\w*|kill myself|end my life|hurt myself|self[- ]harm|overdos\w+|911|ambulance|heart attack|can'?t breathe|cannot breathe|chest pain|domestic violence|rape[d]?|abus(?:e[ds]?|ing) me|touched me|being (?:hurt|attacked|threatened)|in danger right now|i am in (?:a )?crisis|i'?m in (?:a )?crisis)\b/i;
  // a request to DO the harm (hack or spy on someone, make or send a scam, clone another person's SIM, guess or steal another person's password) is not a request for protection: it is left to the refusal, never answered as a safety topic
  const ATTACKING = /\bhow (?:do|can|could|to|would)\b\s*(?:i |we |you |one )?(?:hack|crack|break into|spy on|get into (?:someone|somebody|his|her|their|my (?:friend|wife|husband|girlfriend|boyfriend|ex)))|\b(?:hack|crack|spy on|break into)\b[^.!?]{0,25}\b(?:friend|someone|somebody|girlfriend|boyfriend|wife|husband|ex|neighbou?r|his|her|their|another|other people)\b|\bhow (?:do|can|could|to|would)\b[^.!?]{0,12}\b(?:make|create|write|build|send|launch|set up)\b[^.!?]{0,15}\b(?:phishing|ransomware|malware|a virus|spam (?:texts?|messages?|emails?)|a scam|scams|fake (?:email|text|website|site|message|alert)s?)\b|\b(?:clone|swap)\b[^.!?]{0,10}\b(?:someone'?s?|a person'?s?|his|her|their|another) sim\b|\b(?:steal|crack|guess|find out|get)\b[^.!?]{0,15}\b(?:someone'?s?|somebody'?s?|his|her|their|another person'?s?|my (?:friend|wife|husband|girlfriend|boyfriend|ex)'?s?) (?:password|account|number|identity)\b/i;
  // a business's own cybersecurity is the business technology guide's
  const BUSINESS = /\b(?:my|our) (?:business|company|shop|store|website|web ?site|domain|customers?|employees?|staff|workers|nonprofit|non-profit|church|organi[sz]ation|team)\b|\bbusiness (?:email|owner|account|website|network)\b|\bsmall business\b|\bcustomer data\b/i;
  // money: investments, loans, banks and mobile money are the money guide's (a scam that is about them too)
  const MONEY = /\b(?:invest\w*|stocks?|crypto\w*|bitcoin|forex|ponzi|pyramid|loans?|mortgage|payday|credit (?:card|score|report|repair|freeze)|debt\w*|bank (?:account|app|alert|transfer)|banking|retirement|401|savings? account|m-?pesa|mpesa|mobile money|fuliza|opay|palmpay|moniepoint|kuda|ussd|atm|pos agent)\b/i;
  // an older person being scammed is the older-adults guide's; a child's safety is the parents' guide's
  const OLDER = /\b(?:grand(?:ma|mother|pa|father|parent|parents)|my (?:mom|mother|dad|father|aunt|uncle)|elderly|seniors?|older (?:person|adult|people|relative|parent)|retired)\b[^.!?]{0,40}\b(?:scam\w*|defraud\w*|fraud\w*|conned|cheated|tricked|hacked|phishing)\b|\b(?:scam\w*|fraud\w*)\b[^.!?]{0,40}\b(?:grand(?:ma|mother|pa|father|parent|parents)|my (?:mom|mother|dad|father)|elderly|seniors?|older (?:person|adult|people))\b/i;
  const ELDER = /\belder(?:ly)? (?:fraud|abuse|scams?|financial)\b/i;
  const CHILD = /\b(?:my (?:child|children|kids?|son|daughter|teen\w*|toddler|baby)|(?:child|children|kids?|teen\w*)(?:'s)? (?:online|on the internet|safe|safety|phone|screen|social media))\b/i;

  // places and agencies that name a country
  const KENYA_ANY = /\b(?:kenya\w*|ksh|kes|safaricom|airtel kenya|ke-?cirt|\bca\.go\.ke|communications authority|odpc|data protection commissioner|dci|directorate of criminal investigations|cak|competition authority|cbk|nairobi|mombasa|kisumu|nakuru|eldoret|computer misuse and cybercrimes)\b/i;
  const NIGERIA_ANY = /\b(?:nigeria\w*|naira|ncc|nigerian communications|dnd|do[- ]not[- ]disturb|nin|nimc|ngcert|csirt|nccc|npf|efcc|cbn|ndpc|nitda|fccpc|lagos|abuja|2442)\b/i;
  const US_ANY = /\b(?:united states|america\w*|u\.?s\.?a?|ftc|fcc|fbi|ic3|irs|social security|ssa|medicare|cisa|identitytheft\.gov|reportfraud|medicaid|dmv|usps)\b/i;

  // (the country of the device, set for the length of one call: a question that names no country, and none of the other countries' agencies, is the device's country's)
  let HINT = null;
  const UNNAMED = text => !KENYA_ANY.test(text) && !NIGERIA_ANY.test(text) && !US_ANY.test(text);
  const ONLY_KENYA = text => (KENYA_ANY.test(text) && !NIGERIA_ANY.test(text)) || (HINT === "ke" && UNNAMED(text));
  const ONLY_NIGERIA = text => (NIGERIA_ANY.test(text) && !KENYA_ANY.test(text)) || (HINT === "ng" && UNNAMED(text));
  // the sentences themselves: what each topic is about
  const T = {
    sim: /\bsim\b[^.!?]{0,25}\b(?:swap\w*|clon\w*|card|registration|replacement|lock|pin|hijack\w*)\b|\b(?:swap\w*|clon\w*|hijack\w*|replac\w*)\b[^.!?]{0,20}\bsim\b|\bsim[- ]swap\b|\bnin[- ]?sim\b|\b(?:chang\w+|new|lost|replaced?) (?:my |a |the )?sim\b|(?:lost|no|suddenly lost) (?:phone )?(?:service|signal)\b[^.!?]{0,60}\b(?:number|someone|took|stole)\b|\b(?:steal\w*|stole|took|taken|hijack\w*|port\w*)\b[^.!?]{0,20}\b(?:my )?(?:phone|cell|mobile) number\b|\b(?:took|stole|taken|hijacked) my number\b|(?:phone|cell|mobile) number (?:was |got |has been )?(?:stolen|taken|hijacked|ported)/i,
    phishing: /\b(?:phish\w*|smish\w*|vish\w*|fake (?:text|email|e-mail|message|link|website|web ?site|site|notification|alert|login|sms|whatsapp)s?|scam(?:my)? (?:text|email|e-mail|message|link|website|site|sms)s?|suspicious (?:text|email|e-mail|message|link|attachment|sms|website|site)s?|spoofed (?:email|website|site)|(?:spot|recogni[sz]e|identify|tell|know|detect)\b[^.!?]{0,30}\b(?:scam|fake|phishing)|is (?:this|that|it) (?:a |an )?(?:email|e-mail|text|message|link|website|site|sms|call|number|offer)\b[^.!?]{0,15}\b(?:a )?(?:scam|real|fake|safe|legit\w*|genuine|trustworthy)|(?:click|clicked|clicking|tap|tapped)\b[^.!?]{0,15}\b(?:link|attachment)|opened (?:a |an |the )?(?:link|attachment))\b/i,
    phone: /\b(?:robocalls?|robo-?calls?|spoof\w*|spam (?:calls?|texts?|messages?|sms)|scam calls?|unwanted (?:calls?|texts?|messages?)|unsolicited (?:calls?|texts?|messages?|sms)|caller id|(?:pretend\w*|claim\w*|impersonat\w*|posing|posed) (?:to be|as)\b|calls? (?:me )?(?:saying|claiming|threatening)|(?:irs|social security|medicare|police|sheriff|bank|microsoft|amazon|apple)\b[^.!?]{0,30}\b(?:calls?|called|calling|phoned)\b|(?:calls?|called|calling|phoned)\b[^.!?]{0,30}\b(?:irs|social security|medicare|police|sheriff|bank|microsoft|amazon)\b|family emergency|(?:grand(?:son|daughter|child)|relative|son|daughter)\b[^.!?]{0,30}\b(?:jail|arrested|accident|hospital|bail|needs money|in trouble)\b|(?:call|caller|voice|someone)\b[^.!?]{0,30}\bsound(?:ed|s)? like\b|(?:call|caller|phone call|number)\b[^.!?]{0,15}\b(?:is|was|sounds?|seems?) (?:a |an )?(?:scam|fake|real|legit\w*|spam)|(?:called|calls?|texted|messaged|phoned)\b[^.!?]{0,25}\b(?:asking|asked|wants?|wanted) (?:for )?(?:my |the |a )?(?:pin|password|code|otp|details|bank details)|asking for my (?:pin|password|code|otp)|voice clon\w*|deepfake|ai voice|do not call|do-not-call|stop (?:the )?(?:calls|spam|robocalls))\b/i,
    payment: /\b(?:gift ?cards?|wire (?:transfer|money)|western union|moneygram|crypto(?:currency)? atm|bitcoin atm|pay(?:ing)? (?:with|by|in) (?:gift|crypto|bitcoin|prepaid|a wire|a payment app)|asked (?:me )?to (?:pay|send|wire|buy)|told me to (?:pay|send|wire|buy)|romance scams?|catfish\w*|online (?:dating|love) scam\w*|tech(?:nical)? support scams?|pop-?up (?:says|warning|alert)|virus (?:warning|alert)|cash ?app|zelle|venmo|lottery|sweepstakes|you(?:'ve| have) won|overpay\w*|fake check|fake cheque|advance[- ]fee|(?:get|getting|recover) (?:my )?money back|\b(?:i |we )?met\b[^.!?]{0,20}\bonline\b|\bonline (?:boyfriend|girlfriend|lover))\b/i,
    hacked: /\b(?:hack(?:ed|ing)?|taken over|took over|account (?:was |got |has been )?(?:compromised|stolen|taken|hijacked|broken into)|(?:compromised|hijacked|stolen) (?:my )?account|someone (?:is |has )?(?:using|logged (?:in|into)|got into|broke into|accessed|posting (?:as|from))\b[^.!?]{0,25}\b(?:my|me)\b|posting (?:things|spam) (?:as|from) me|lost access to my (?:account|email|facebook|instagram|whatsapp|gmail)|can'?t (?:log|sign) (?:in|into)[^.!?]{0,20}\bsomeone|(?:sending|sent|posting|posted)\b[^.!?]{0,20}\b(?:from|as) (?:my|me)\b|can'?t (?:log|sign) ?in(?:to)?\b[^.!?]{0,25}\b(?:account|email|facebook|instagram|whatsapp|gmail)|password (?:no longer|doesn'?t|does not|isn'?t|is not) work\w*|password (?:was )?changed without|(?:email|facebook|instagram|whatsapp|gmail|tiktok|snapchat|twitter|x) (?:account )?(?:was |got |has been )?(?:hacked|taken over|hijacked))\b/i,
    identity: /\b(?:identity (?:was |has been |got |is )?(?:theft|thief|stolen|fraud|compromised|used)|stole my identity|stolen (?:my )?identity|someone (?:is )?(?:using|uses)\b[^.!?]{0,15}\bmy (?:social security|ssn|identity|name)\b|someone (?:opened|used|took out|applied)\b[^.!?]{0,30}\b(?:in my name|with my (?:name|social security|ssn|information|identity))|used my (?:name|social security number|ssn|identity)|identitytheft\.gov|recover from identity)\b/i,
    ransom: /\b(?:ransomware|ransom ?ware|(?:my |the )?(?:files|photos|computer|laptop|pc|phone|data) (?:are|is|were|got|has been|have been) (?:locked|encrypted|held)|locked (?:out of )?(?:my )?(?:files|computer|laptop|pc|phone)|encrypted (?:my )?files|(?:wants?|demand\w*|asking for|asked for) (?:a )?(?:ransom|money|bitcoin|payment) (?:to|so) (?:unlock|decrypt|get my|restore|give back)|pay\w*\b[^.!?]{0,30}\bget (?:my |the |all )?(?:files|data|photos|pictures|computer|laptop|phone) back|(?:files|photos|data|computer)\b[^.!?]{0,30}\blocked\b[^.!?]{0,40}\b(?:money|bitcoin|pay|ransom)\b)\b/i,
    report: /\b(?:report(?:ing)?|who (?:do|can|should) (?:i|we) (?:tell|call|contact|report)|where (?:do|can|should) (?:i|we) (?:report|complain|go)|file a (?:report|complaint)|complain(?:t)? about)\b[^.!?]{0,40}\b(?:scams?|scammers?|fraud\w*|cyber ?crimes?|cyber ?attacks?|phishing|hack\w*|identity theft|robocalls?|spam|online (?:crime|abuse|harassment|threats?)|blackmail|sextortion|a fake)\b|\b(?:scams?|fraud\w*|cyber ?crimes?|phishing|hack\w*|identity theft)\b[^.!?]{0,40}\b(?:report(?:ing)?|who do i (?:tell|call)|where (?:do|can) i (?:report|complain))\b/i,
    passwords: /\b(?:passwords?|pass ?phrases?|password managers?|passcodes?|pin codes?|reuse(?:d|ing)? (?:my )?passwords?)\b/i,
    twoStep: /\b(?:two[- ]?(?:step|factor)|2[- ]?(?:step|fa)|\b2fa\b|multi[- ]?factor|\bmfa\b|verification codes?|authenticator|one[- ]time (?:codes?|passcodes?|pins?)|\botp\b|security codes?)\b/i,
    updates: /\b(?:(?:software|system|security|phone|computer|app|browser|windows|android|iphone|ios) updates?|updates?\b[^.!?]{0,15}\b(?:my )?(?:phone|computer|laptop|software|apps?|device)|back ?ups?|back (?:it|my \w+) up|backing up|update my (?:phone|computer|software|apps?)|automatic updates?|auto-?updates?|turn(?:ing)? on (?:automatic )?updates)\b/i,
    wifi: /\b(?:public wi-?fi|free wi-?fi|open wi-?fi|wi-?fi (?:hotspot|network) (?:at|in)|cafe wi-?fi|airport wi-?fi|hotel wi-?fi|public (?:network|hotspot)|vpn|(?:secure|protect|lock down|set up|safe)\w*\b[^.!?]{0,15}\b(?:home |my |the )?(?:wi-?fi|router)|(?:wi-?fi|router)\b[^.!?]{0,30}\b(?:at|in) (?:the )?(?:airport|hotel|cafe|coffee shop|library|mall|station)|safe to use\b[^.!?]{0,30}\bwi-?fi)\b/i,
    overview: /\b(?:protect(?:ing)? (?:myself|me|my (?:family|phone|computer|accounts?|information|data|privacy|identity)) (?:online|on the internet|from (?:hackers?|scammers?|cyber ?attacks?|online (?:crime|scams?)))|(?:stay|staying|be|being|keep|keeping) (?:myself |me |us )?safe (?:online|on the internet|on my phone|from (?:scams?|scammers?|hackers?))|online safety|internet safety|cyber ?security (?:for (?:me|myself|beginners|seniors|everyone)|basics|tips|101)|safe online|(?:basic|simple) (?:cyber ?)?security|how (?:do|can) i (?:not )?(?:get|be|become) (?:hacked|scammed|a victim)|avoid (?:getting )?(?:hacked|scammed)|(?:what|which) (?:should|can) i do to (?:stay|be|keep) safe|what (?:should|must|can) i (?:never|not) (?:give|share|tell)\b|\b(?:think|believe|feel|worried) (?:i'?m|i am|i might be|i may be|that i'?m) being (?:scammed|hacked|targeted|tricked|defrauded)|where (?:do|should) i start\b[^.!?]{0,30}\b(?:scam\w*|hack\w*|safe\w*|secur\w*)|(?:keep|make|get)\w* (?:my )?(?:phone|computer|laptop|accounts?|passwords?|email|information|data)\b[^.!?]{0,10}\b(?:safe|safer|secure|more secure|protected)|hackers? (?:and|or) scammers?)\b/i,
    // Kenya and Nigeria
    dataRights: /\b(?:data protection|my data|personal data|privacy rights?|data rights?|data breach\w*|odpc|ndpc|data protection commissioner|data controller|data processor|my (?:rights|information) (?:online|under)|complain\w* (?:about|to)[^.!?]{0,25}\b(?:data|privacy|odpc|ndpc))|misus\w+ my (?:personal )?(?:data|information|details)|personal (?:information|details) (?:was|were|got|has been) (?:leaked|stolen|shared|sold)\b/i,
    law: /\b(?:computer misuse|cyber ?crimes? act|cyber ?crimes? law|(?:is|are) it (?:a )?crime|what (?:is|are) (?:the )?(?:cyber ?crimes?|offences?|offenses?)|offence|penalt\w+ for|(?:is|are)\b[^.!?]{0,30}\b(?:a crime|illegal|against the law|an offen[cs]e)|jail for)\b/i,
    kids: /\b(?:child (?:online|safety|protection)|children online|kids online|online child|cyber ?bullying|grooming|(?:protect|keep)\w* (?:my )?(?:child|children|kids)\w* (?:safe )?online|bull(?:y|ied|ying)\b[^.!?]{0,20}\bonline|online\b[^.!?]{0,20}\bbull\w+|(?:child|children|kids?)\b[^.!?]{0,30}\b(?:online|internet)\b)\b/i,
    dnd: /\b(?:dnd|do[- ]not[- ]disturb|2442|spam|unsolicited|stop (?:the )?(?:messages|calls|sms)|promotional (?:messages|sms|calls)|ncc complaints?|keeps? (?:calling|texting|messaging|sending)|hang(?:s|ing)? up|missed calls?)\b/i,
    scamTypes: /\b(?:types? of (?:scams?|fraud)|kinds? of (?:scams?|fraud)|yahoo|romance|red alert|efcc booklet|how (?:do|does) scammers?|common scams?|scam (?:tricks?|types?|list)|419|advance[- ]fee|lottery|inheritance)\b/i,
    bankFraud: /\b(?:bank (?:fraud|alert|transfer)|fake (?:bank|transfer|credit) alerts?|pos fraud|atm fraud|ussd fraud|card fraud|debit card fraud|unauthori[sz]ed (?:transfer|transaction|debit)|cbn (?:complaint|consumer)|complain\w*[^.!?]{0,40}\bbank|reverse a transfer|(?:money|funds?|naira) (?:was |were |has been |got )?(?:taken|stolen|debited|deducted|missing|removed)\b[^.!?]{0,30}\b(?:bank|account|card)|debited (?:me )?(?:twice|wrongly|without)|central bank|bank\b[^.!?]{0,30}\b(?:has not|hasn'?t|did not|didn'?t|won'?t|refus\w+)\b[^.!?]{0,30}\b(?:fix|solve|resolve|refund|reverse|respond|reply)\w*)\b/i,
    scammed: /\b(?:(?:i|we)(?:'ve| have)? (?:been|got|was|were) (?:just )?(?:scammed|defrauded|conned|tricked|cheated|ripped off)|(?:got|been|was) scammed|scammed me|fell for (?:a |an )?(?:scam|trick))\b/i
  };
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+|nexus,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do(?! not\b)|does|is|are|will|would|am|tell me|explain|help me|i need|i want|i('| a)m (?:looking|worried|scared|afraid|not sure|being|getting)|i (?:think|got|received|get|clicked|opened|gave|shared|sent|lost|was|have been|am|can'?t|cannot|noticed|found|keep|just)|all (?:my|the) (?:files|photos|data)|someone|somebody|my (?:account|email|phone|computer|laptop|files|facebook|whatsapp|instagram|sim|identity)|(?:a|an|the) (?:man|woman|person|caller|stranger|guy|lady|company|website|text|email|message|call|friend|scammer)|i would like|i'd like|any|give me|walk me|walk us|take me through|guide me through|talk me through|step[- ]by[- ]step|what are the steps|teach me|learn)\b)/i;

  const POSITIVE = [
    // Kenya (named, or one of its agencies)
    ["ke-safe-sim", text => ONLY_KENYA(text) && T.sim.test(text)],
    ["ke-safe-data-rights", text => ONLY_KENYA(text) && T.dataRights.test(text)],
    ["ke-safe-cybercrime-law", text => ONLY_KENYA(text) && T.law.test(text)],
    ["ke-safe-hacked-defrauded", text => ONLY_KENYA(text) && (T.hacked.test(text) || T.identity.test(text) || /\b(?:defrauded|conned|scammed|cheated|lost (?:my )?money|took money|(?:stole|stolen)\b[^.!?]{0,10}money|money (?:was |has been |got )?(?:taken|stolen|missing)|what (?:do|should) i do (?:now|next|first)|what now)\b/i.test(text))],
    ["ke-safe-report-complain", text => ONLY_KENYA(text) && (T.report.test(text) || /\b(?:ke-?cirt|communications authority|ca complaint|complain\w*|competition authority|cak)\b/i.test(text))],
    ["ke-safe-fake-messages-calls", text => ONLY_KENYA(text) && (T.phishing.test(text) || T.phone.test(text) || T.payment.test(text))],
    ["ke-safe-basics", text => ONLY_KENYA(text) && (T.passwords.test(text) || T.twoStep.test(text) || T.updates.test(text) || T.overview.test(text))],
    // Nigeria
    ["ng-safe-sim-nin", text => ONLY_NIGERIA(text) && (T.sim.test(text) || /\b(?:nin|nimc|nin[- ]sim|sim (?:linkage|link)|link(?:ing)? (?:my )?(?:nin|sim))\b/i.test(text))],
    ["ng-safe-dnd-spam", text => ONLY_NIGERIA(text) && T.dnd.test(text)],
    ["ng-safe-data-rights", text => ONLY_NIGERIA(text) && T.dataRights.test(text)],
    ["ng-safe-children", text => ONLY_NIGERIA(text) && T.kids.test(text)],
    ["ng-safe-bank-fraud", text => ONLY_NIGERIA(text) && T.bankFraud.test(text)],
    ["ng-safe-scam-types", text => ONLY_NIGERIA(text) && T.scamTypes.test(text)],
    ["ng-safe-report-cybercrime", text => ONLY_NIGERIA(text) && (T.report.test(text) || T.hacked.test(text) || T.identity.test(text) || /\b(?:npf|nccc|efcc|ngcert|csirt|petition|cyber ?crimes?|defrauded|scammed|conned|what (?:do|should) i do (?:now|next|first)|what now)\b/i.test(text))],
    ["ng-safe-phishing", text => ONLY_NIGERIA(text) && (T.phishing.test(text) || /\b(?:free data|airtime|fake offer|fake promo\w*)\b/i.test(text))],
    ["ng-safe-basics", text => ONLY_NIGERIA(text) && (T.passwords.test(text) || T.twoStep.test(text) || T.updates.test(text) || T.overview.test(text) || T.phone.test(text))],
    // everyone else: the United States' pages, and a device in Kenya or Nigeria is given its own country's topic (the server maps it)
    ["safe-ransomware", text => T.ransom.test(text)],
    ["safe-identity-theft", text => T.identity.test(text) && !/\b(?:bank|retirement|savings|401|investment) accounts?\b/i.test(text)],
    ["safe-hacked-account", text => T.hacked.test(text)],
    ["safe-sim", text => T.sim.test(text)],
    ["safe-report", text => T.report.test(text) || T.scammed.test(text)],
    ["safe-payment-scams", text => T.payment.test(text)],
    ["safe-phone-scams", text => T.phone.test(text)],
    ["safe-phishing", text => T.phishing.test(text)],
    ["safe-public-wifi", text => T.wifi.test(text)],
    ["safe-two-step", text => T.twoStep.test(text) && !/\b(?:bank|retirement|savings|investment|401|brokerage)\b/i.test(text)],
    ["safe-passwords", text => T.passwords.test(text) && !/\b(?:bank|retirement|savings|investment|401|brokerage)\b/i.test(text)],
    ["safe-updates-backups", text => T.updates.test(text)],
    ["safe-overview", text => T.overview.test(text)]
  ];

  function safetyTopic(text, options) {
    HINT = options && (options.country === "ke" || options.country === "ng") ? options.country : null;
    try { return pick(text); } finally { HINT = null; }
  }

  function pick(text) {
    const value = String(text || "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (NOT_A_GUIDE_QUESTION.test(value) || CALENDAR_OR_RECORDS.test(value) || PERSONAL_EMERGENCY.test(value) || BUSINESS.test(value) || ATTACKING.test(value) || OLDER.test(value) || ELDER.test(value) || (CHILD.test(value) && !(T.kids.test(value) && ONLY_NIGERIA(value)))) return null;
    if (!ASKS.test(value)) return null;
    for (const [topic, test] of POSITIVE) {
      // a question about investments, loans, banks or mobile money is the money guide's (the local topics may name the bank or mobile-money scam they warn about)
      if (MONEY.test(value) && !/^(?:ke|ng)-safe-/.test(topic) && !/\b(?:hack\w*|phish\w*|sim\b|identity theft)\b/i.test(value)) continue;
      if (MONEY.test(value) && /^(?:ke|ng)-safe-/.test(topic) && /\b(?:invest\w*|loans?|mortgage|ponzi|pyramid|crypto\w*|bitcoin|m-?pesa|mpesa|mobile money|fuliza|opay|palmpay|moniepoint|kuda|debts?|collectors?|credit)\b/i.test(value) && !/\b(?:hack\w*|phish\w*|sim\b|identity theft|data|ke-?cirt|ngcert|nccc|npf)\b/i.test(value)) continue;
      if (test(value)) return topic;
    }
    return null;
  }

  return Object.freeze({ safetyTopic, KENYA_ANY, NIGERIA_ANY, US_ANY });
});
