// Which question is about technology for a small business (safe use of AI, AI scams, fake reviews, cybersecurity, a business email and domain, a web host or designer, going online, automation) or about choosing and using AI tools for a job? The same
// words are used by the server (nexus/knowledge/small-business-technology.js and ai-tools-for-business.js answer them) and by the page (public/app.js takes a request to be WALKED THROUGH one of them itself, so the voice model does not
// explain it from memory and the steps open on the screen). A pure text matcher: no sources, no answers, no records.
//   technologyTopic(text) -> a topic of the technology guide | null        aiToolsTopic(text) -> a topic of the AI tools guide | null        isWalkRequest(text) -> true for "walk me through ...", "take me through ...", "step by step ..."
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.KyroTechnologyTopics = factory();
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  const technology = (function () {
  // A question, or a request for help
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|walk me|take me through|guide me through|talk me through|step by step|what are the steps|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find me|find (?:a|an|the|my)|show me|look(?:ing)? for|search for)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert|build)\b/i;

  const AI = "(?:ai|a\\.i\\.|artificial intelligence|chat ?gpt|gpt|claude|gemini|copilot|chatbots?|ai tools?)";
  const matcher = source => new RegExp(source, "i");

  // first match wins, most specific first
  const MATCHERS = [
    ["cyber-insurance", matcher("\\bcyber ?insurance\\b")],
    ["email-domain", matcher("\\b(?:spf|dkim|dmarc|spoof\\w*|email authentication|someone (?:is )?(?:using|sending) (?:my|our) (?:email|domain))\\b")],
    ["data-breach", matcher("\\b(?:data breach|breach(?:ed)?|identity theft|leaked|customer data (?:was |got |is )?(?:stolen|leaked|exposed)|got hacked|been hacked)\\b")],
    ["phishing-ransomware", matcher("\\b(?:phishing|ransomware|business email (?:imposter|imposters|compromise)|email imposters?|tech support scams?|scam emails?|suspicious (?:email|emails|text|texts|call|calls|link|links)|fake invoices?|wire transfer scams?)\\b")],
    ["fake-reviews", matcher(`(?:\\b(?:fake|bought|paid|purchased) (?:reviews?|testimonials?)\\b|\\b(?:write|writing|generate|generating|buy|buying|post|posting) (?:my |our |some )?(?:reviews?|testimonials?)\\b|\\breviews?\\b.*\\b${AI}\\b|\\b${AI}\\b.*\\breviews?\\b)`)],
    ["ai-scams", matcher(`(?:(?=.*\\b(?:${AI}|deepfakes?|voice clon\\w*)\\b)(?=.*\\b(?:scams?|scammers?|fraud|fooled|tricked|con|conned)\\b)|\\b${AI} (?:income|business opportunit\\w+|side hustle|money|passive income)\\b|\\bpassive income\\b.*\\b${AI}\\b|\\b(?:deepfakes?|voice clon\\w*)\\b)`)],
    ["ai-claims", matcher(`(?:\\b(?:advertis\\w*|market\\w*|promot\\w*|claim\\w*|say(?:ing)?|call(?:ing)?|label\\w*) (?:my|our|the|a|that)?.{0,40}\\b${AI}(?:[- ]powered)?\\b|\\b${AI}[- ]powered\\b)`)],
    ["ai-safe-use", matcher(`(?:(?=.*\\b${AI}\\b)(?=.*\\b(?:safe|safely|safety|privacy|private|confidential|secure|risks?|risky|careful|trust|paste|type in|put in|put into|enter|share|customer data|data)\\b)|\\b(?:is|are) ${AI} (?:safe|secure|private)\\b)`)],
    ["ai-getting-started", matcher(`(?=.*\\b${AI}\\b)(?=.*\\b(?:use|using|grow|help|helps|answer|answering|customers?|marketing|start|started|beginner|business|small business)\\b)`)],
    ["web-host-designer", matcher("\\b(?:web ?hosts?|web hosting|hosting company|web designers?|website designers?|web developers?|app developers?|hire (?:a )?(?:web|website|app)\\b|vendor (?:contract|security))\\b")],
    ["cybersecurity-basics", matcher("\\b(?:cyber ?security|hackers?|hacked|hacking|protect (?:my |our )?(?:business|data|computers?|website|accounts?)|nist|multi-?factor|two-?step|2fa|\\bmfa\\b|back ?ups?|strong passwords?|secure (?:my|our) )\\b")],
    ["automation", matcher("(?:\\bautomat\\w+\\b.{0,60}\\b(?:business|invoices?|follow-?ups?|reminders?|customers?|tasks?)\\b|\\bwhat can (?:kyro|you) automate\\b|\\bbusiness automation\\b|\\bsave (?:me )?time\\b.{0,40}\\b(?:business|kyro)\\b)")],
    ["online-presence", matcher("\\b(?:(?:get|put|take) (?:my |our )?business online|online presence|(?:start|build|make|set up|create) (?:a |my |our )?(?:website|web site)|domain names?|business emails?|google business|business listings?)\\b")]
  ];

  function technologyTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value)) return null;
    for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
    return null;
  }


    return { technologyTopic };
  })();

  const aiTools = (function () {
  const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|walk me|take me through|guide me through|talk me through|step by step|what are the steps|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice|ideas)|find (?:me|a|an|the|my)|show me|recommend|suggest)\b)/i;
  const RECORD_OR_DRAFT = /^(?:please\s+)?(?:sold|bought|log|record|add|save|remind|set|create|draft|write|make|mark|list|delete|forget|call|text|send|play|open|start|translate|export|convert|build)\b/i;
  const AI = "(?:ai|a\\.i\\.|artificial intelligence|chat ?gpt|gpt|claude|gemini|copilot|chatbots?|ai tools?)";
  const re = source => new RegExp(source, "i");
  const either = (job) => `(?:\\b${AI}\\b.{0,60}\\b(?:${job})\\b|\\b(?:${job})\\b.{0,60}\\b${AI}\\b)`;

  // first match wins; a question about being safe with AI, AI scams, fake reviews or advertising claims belongs to the technology guide (the planner looks there first)
  const MATCHERS = [
    ["ai-tools-choose", re(`(?:\\b(?:choose|choosing|pick|picking|select|selecting|evaluate|evaluating|compare|comparing|vet|vetting|decide on)\\b.{0,40}\\b${AI}\\b|\\b(?:look for|check|ask)\\b.{0,30}\\b${AI}\\b.{0,12}\\b(?:tool|app|software|vendor|product)s?\\b|\\b(?:free|paid)\\b.{0,15}\\b${AI}\\b.{0,15}\\b(?:tools?|apps?)\\b|\\bhow (?:do|can|should) (?:i|we) (?:know|tell|check) (?:which|if|whether) .{0,40}\\b${AI}\\b|(?=.*\\b${AI}\\b)(?=.*\\b(?:safe|safely|privacy|private|confidential|risks?|risky|trust\\w*|legit(?:imate)?|secure)\\b))`)],
    ["ai-for-planning", re(either("business plans?|roadmap|road map|funding|investors?|pitch(?:es| deck)?|grant (?:applications?|proposals?|writing)|financial projections?|start-?ups?|business model|market research|fundrais\\w+"))],
    ["ai-for-customers", re(either("customer (?:service|support|questions|messages|emails?)|chatbots? for (?:my|our|the)? ?(?:website|business|customers)|answer(?:ing)? (?:my |our |the )?(?:customers?'?s?|calls|phones?|questions)|call routing|(?:reply|replies|respond(?:ing)?|responding) to (?:customers?|reviews?)|review (?:replies|responses)"))],
    ["ai-for-marketing", re(either("market(?:ing)?|social media|content|logos?|branding|ads?|advertising|blogs?|product descriptions?|posts?|promot\\w+|photos?|videos?|visibility|find (?:more )?customers|get (?:more )?customers"))],
    ["ai-for-operations", re(either("schedul\\w+|reminders?|inventory|restock\\w*|bookkeeping|accounting|invoices?|payroll|email (?:sorting|triage)|sort(?:ing)? (?:my )?email|summar\\w+|meeting notes|spreadsheets?|my (?:business )?data|analy[sz]\\w+|operations|hiring|job postings?|to-?do|productivity|automat\\w+|save (?:me )?time|saving time|time-?saving|efficien\\w+"))],
    ["ai-tools-overview", re(`(?:\\b${AI}\\b.{0,25}\\b(?:tools?|apps?|software|assistants?|platforms?)\\b|\\b(?:which|what|best|good|top|recommend\\w*)\\b.{0,12}\\b${AI}\\b.{0,25}\\b(?:should|do|can|to use|would)\\b.{0,12}\\b(?:i|we|use|help)\\b)`)]
  ];

  function aiToolsTopic(text) {
    const value = String(text || "").replace(/\s+/g, " ").trim();
    if (!value || value.length > 300) return null;
    if (RECORD_OR_DRAFT.test(value) || !ASKS.test(value)) return null;
    for (const [topic, pattern] of MATCHERS) if (pattern.test(value)) return topic;
    return null;
  }


    return { aiToolsTopic };
  })();

  const WALK = /^(?:(?:hey|hi|hello|ok|okay)[,.!]?\s+)?(?:(?:kyro|nexus)[,.:!]?\s+)?(?:please\s+)?(?:(?:walk|guide|talk|take|lead) (?:me|us) through|step[- ]by[- ]step|what are the steps)\b/i;
  const isWalkRequest = text => WALK.test(String(text == null ? "" : text).replace(/\s+/g, " ").trim());

  return Object.freeze({ technologyTopic: technology.technologyTopic, aiToolsTopic: aiTools.aiToolsTopic, isWalkRequest });
});
