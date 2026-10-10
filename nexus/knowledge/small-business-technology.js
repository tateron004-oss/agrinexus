"use strict";

// A checked, vendor-neutral guide to technology and AI for small and minority-owned business owners: using AI tools safely, AI scams and "AI income" offers, fake and AI-written reviews, advertising claims about AI,
// cybersecurity basics, phishing and ransomware, email and domain protection, hiring a web host or designer, a data breach, cyber insurance, what Kyro can automate, and getting online.
//
// Every statement from an outside source was read on that source's page on CHECKED_ON and is listed in the topic's `sources`. Nothing here recommends or sells a product. Two topics are NOT from an outside source and say
// so in their own words: what Kyro can automate (it describes Kyro's own tools) and the order for getting online (common practical advice, labelled as not an official rule). To update an answer, read the page again,
// change the text and CHECKED_ON, and run the tests.
//
// technologyTopic(text) -> a topic id, or null. Only a QUESTION or a request for help is taken (a record, a draft or other talk is not).
// technologyAnswer(id) -> { text, sources: [{ name, url }], topic } or null.

const CHECKED_ON = "9 October 2026";

const SOURCES = Object.freeze({
  ftcCyber: { name: "FTC: Cybersecurity for Small Business (September 2025)", url: "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity" },
  ftcAi: { name: "FTC: Artificial Intelligence", url: "https://www.ftc.gov/industry/technology/artificial-intelligence" },
  ftcReviews: { name: "FTC: The Consumer Reviews and Testimonials Rule, Questions and Answers", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" },
  ftcDeepfakes: { name: "FTC business blog: Chatbots, deepfakes, and voice clones: AI deception for sale (20 March 2023)", url: "https://www.ftc.gov/business-guidance/blog/2023/03/chatbots-deepfakes-voice-clones-ai-deception-sale" },
  ftcPrivacyAi: { name: "FTC: AI Companies: Uphold Your Privacy and Confidentiality Commitments (January 2024)", url: "https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2024/01/ai-companies-uphold-your-privacy-confidentiality-commitments" },
  nistQuick: { name: "NIST SP 1300: Cybersecurity Framework 2.0 Small Business Quick-Start Guide (February 2024)", url: "https://csrc.nist.gov/pubs/sp/1300/final" }
});

const TOPICS = Object.freeze({
  "ai-safe-use": {
    title: "Using AI tools safely",
    text: "AI tools can save a small business time, but use them with care. Check the tool's privacy terms before you type in customer, employee or payment information, and never type in passwords; treat anything you enter as something you may not be able to take back. AI answers can be wrong or made up, so check names, numbers, prices and any legal, tax or medical statement yourself, and keep a person in charge of what gets sent to customers. The FTC has said that companies offering AI tools must keep the privacy and confidentiality promises they make, and that AI is not exempt from the laws that already apply to businesses.",
    sources: ["ftcPrivacyAi", "ftcAi"]
  },
  "ai-scams": {
    title: "AI scams and \"AI income\" offers",
    text: "Be careful with \"AI\" offers and AI-made messages. The FTC has taken action against sellers of \"AI-powered\" business opportunities that promised big earnings or passive income to small businesses and entrepreneurs: Air AI and its owners agreed in March 2026 to be banned from marketing business opportunities, and other operators of AI-linked online store schemes have been banned too. Warning signs are guaranteed earnings, passive income from a tool, pressure to pay up front, and refund promises that are hard to use. The FTC also warns that AI can make scams more convincing, including fake voices and fake messages: if someone asks for money, a wire transfer or account details, verify the request through a phone number or contact you already know before you act. Report scams at ReportFraud.ftc.gov.",
    sources: ["ftcAi", "ftcDeepfakes", "ftcCyber"]
  },
  "fake-reviews": {
    title: "Reviews, testimonials and AI",
    text: "Do not use AI, or anyone else, to write fake reviews or testimonials for your business. The FTC's Consumer Reviews and Testimonials Rule covers fake reviews, including AI-generated ones that claim to come from people who do not exist or who never used your product. It also bans buying or selling fake reviews and giving rewards only for positive reviews (for example, a gift card only for five-star reviews). Courts can impose civil penalties for knowing violations; late-2025 materials cited up to $53,088 per violation, and that amount changes, so check the FTC site. Showing real customers' reviews that you simply host is treated differently from posting testimonials yourself: if you post a testimonial on your own site, you can be responsible if it is fake.",
    sources: ["ftcReviews"]
  },
  "ai-claims": {
    title: "Advertising claims about AI",
    text: "If you advertise that your product or service uses AI, or that an AI tool gets a result, you need evidence for what you say. The FTC has ordered a company to stop making accuracy claims about its AI content detection product without evidence (Workado, final order August 2025), and three firms agreed to pay $930,000 over false claims about an \"AI-powered\" marketing service (announced May 2026, finalized August 2026). Say plainly what the tool does, avoid promising results, and keep the proof.",
    sources: ["ftcAi"]
  },
  "cybersecurity-basics": {
    title: "Cybersecurity basics",
    text: "The FTC's small business guide and NIST's quick-start guide agree on the basics: keep software and devices updated, back up your data and test the backups, use strong passwords with multi-factor authentication (NIST calls it one of the fastest, cheapest ways to protect your data), encrypt sensitive data, secure your Wi-Fi, and train the people who work for you. NIST's Cybersecurity Framework 2.0 groups the work into six areas, Govern, Identify, Protect, Detect, Respond and Recover, and its Small Business Quick-Start Guide, also available in Spanish, French and Portuguese, walks through each one. A good first week: turn on multi-factor authentication for email and banking, list your business accounts and devices, and test restoring one backup.",
    sources: ["ftcCyber", "nistQuick"]
  },
  "phishing-ransomware": {
    title: "Phishing, fake invoices, ransomware and tech support scams",
    text: "The FTC describes four common attacks. Phishing: messages that look real; check the sender and verify any request through a contact you already know. Business email imposters: someone pretending to be a boss, customer or vendor asks you to pay or to change bank details; set a verification step, such as a call back to a known number, for any wire transfer or change. Ransomware: criminals lock your files; keep offline backups and a plan for how the business keeps running, and contain an infection quickly. Tech support scams: an unexpected call or pop-up says your computer has a problem; do not give anyone remote access. You can report these at ReportFraud.ftc.gov, IC3.gov (internet crime) or reportphishing@apwg.org.",
    sources: ["ftcCyber"]
  },
  "email-domain": {
    title: "Protecting your business email and domain",
    text: "Scammers can send emails that look as if they come from your own business domain. The FTC explains three settings that make this harder: SPF, DKIM and DMARC, together called email authentication. Ask whoever manages your domain or email to set them up and to confirm they are working. The FTC page also lists what to do if your email has been spoofed.",
    sources: ["ftcCyber"]
  },
  "web-host-designer": {
    title: "Hiring a web host, web designer or other technology vendor",
    text: "Before you hire a web host, the FTC suggests asking about security: Do they use TLS (the encryption behind the browser's lock)? Do they support email authentication? Do they keep their software updated? And who can change your website? For any technology vendor, the FTC advises putting security terms in the contract, checking that the vendor meets them, limiting what data the vendor can reach, and having a plan if the vendor is breached. Also keep the logins for your domain, website and email in your own name, so you are never locked out of your own business.",
    sources: ["ftcCyber"]
  },
  "data-breach": {
    title: "If your business is hacked or customer data is exposed",
    text: "The FTC's \"Data Breach Response: A Guide for Business\" gives the steps for responding to a breach and notifying the people affected. Customers whose information was stolen can use IdentityTheft.gov to report it and get a recovery plan. Cybercrime can be reported at IC3.gov. Ask a lawyer about your state's notification rules, which differ by state.",
    sources: ["ftcCyber"]
  },
  "cyber-insurance": {
    title: "Cyber insurance",
    text: "The FTC's small business guide says to look at both first-party coverage (your own losses) and third-party coverage (claims against you) in a cyber insurance policy, and to match the cover to the risks your business really has. A licensed insurance agent or broker can compare policies; I cannot recommend one.",
    sources: ["ftcCyber"]
  },
  automation: {
    title: "What Kyro can automate for you",
    text: "This part describes Kyro's own tools, not an outside source. Today Kyro can set reminders and repeating reminders (for example, every Monday at 8, check the register); keep follow-up days for customers and leads (follow up with Grace on Friday); keep customer, invoice and expense records in your business workspace, with drafts for you to review; keep shopping, to-do and stock lists; and give you a morning or weekly summary. It can prepare a text or a call, but only sends after reading back who and what and getting your yes. Kyro does not take payments, send anything on its own, or connect to your bank or accounting software. A good start: pick one task you repeat every week and ask Kyro to remind you.",
    sources: []
  },
  "ai-getting-started": {
    title: "Getting started with AI in a small business",
    text: "Start small. Choose one task that takes your time and carries little risk, such as drafting a first version of an email, summarising your notes, or listing the questions customers ask most. Keep a person in charge: read and correct everything before it reaches a customer. Keep sensitive information out of the tool (see using AI tools safely). Be honest with customers: if a chatbot answers them, say so, and do not claim it can do more than it can. Write down what you use each tool for, so you can review it later. These steps are practical advice; the points about safety, claims and reviews come from the FTC.",
    sources: ["ftcAi", "ftcPrivacyAi"]
  },
  "online-presence": {
    title: "Getting your business online",
    text: "A simple order of steps many advisors use, from most to least important. One, register a business email and a domain name in your own name. Two, turn on multi-factor authentication for them. Three, make a one-page website that says what you do, where, your hours and how to reach you. Four, claim your business listing on the main search and map services so customers see the right hours and phone number. Five, collect real customer reviews and never fake ones. Six, back up the site and know who can change it. This order is common practical advice, not an official rule; the security points come from the FTC and NIST.",
    sources: ["ftcCyber", "ftcReviews"]
  }
});

// A question, or a request for help
const ASKS = /(?:[?]|^(?:please\s+|kyro,?\s+)?(?:how|what|which|when|where|why|who|should|can|could|do|does|is|are|am|will|would|tell me|explain|help me|i need|i want|i('| a)m looking for|any|give me (?:info|information|advice)|find me|find (?:a|an|the|my)|show me|look(?:ing)? for|search for)\b)/i;
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

const CLOSING = "This is general information, not legal, tax, financial or security-audit advice, and things change, so confirm on the official site. I cannot buy, publish, file or change anything for you.";

function technologyAnswer(id) {
  const topic = TOPICS[id];
  if (!topic) return null;
  const sources = topic.sources.map(key => SOURCES[key]);
  const where = sources.length ? ` Sources: ${sources.map(source => source.name).join("; ")} (checked ${CHECKED_ON}).` : "";
  return { topic: id, title: topic.title, text: `${topic.text}${where} ${CLOSING}`, sources };
}

module.exports = Object.freeze({ CHECKED_ON, TOPICS, SOURCES, technologyTopic, technologyAnswer });
