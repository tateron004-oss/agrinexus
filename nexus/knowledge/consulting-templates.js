"use strict";

// Starter documents for a technology and business-automation consultant, or an owner doing it for themselves: a technology roadmap, an automation audit, a website brief, an app brief, vendor questions and a
// one-page AI use policy. Each is a FIXED template with blanks to complete: Kyro does not invent anything about the client and does not pretend to have written the answers. The security points come from the FTC
// and NIST guidance in small-business-technology.js (read 9 October 2026); the rest is plain working practice and is labelled as such inside the document.
//
// templateRequest(text) -> { kind, client, format } | null    for "Draft a website brief for Grace's Bakery", "Create a technology roadmap", "Make an automation audit for Marcus as a PDF"
// consultingTemplate(kind, { client }) -> { title, content }

const KINDS = Object.freeze({
  "technology-roadmap": "Technology roadmap",
  "automation-audit": "Automation audit",
  "website-brief": "Website brief",
  "app-brief": "App brief",
  "vendor-questions": "Questions for a web host, designer or developer",
  "ai-use-policy": "AI use policy",
  "business-plan": "Business plan",
  "growth-roadmap": "Growth roadmap",
  "funding-checklist": "Funding readiness checklist"
});

const ALIASES = [
  ["technology-roadmap", /^(?:technology|tech|it|digital) (?:road ?map|plan)$/i],
  ["automation-audit", /^(?:business )?automation (?:audit|review|assessment)$/i],
  ["website-brief", /^(?:web ?site|website|web) (?:brief|plan|requirements)$/i],
  ["app-brief", /^(?:mobile |phone )?app (?:brief|plan|requirements)$/i],
  ["vendor-questions", /^(?:vendor|developer|designer|web host|hosting) questions$|^questions (?:for|to ask) (?:a |the |my )?(?:vendor|web designer|designer|developer|web host|host|web developer)s?$/i],
  ["ai-use-policy", /^ai (?:use |usage )?(?:policy|rules|guidelines)$|^(?:an? )?(?:artificial intelligence) (?:use )?policy$/i],
  ["business-plan", /^(?:(?:lean|simple|start-?up|new|traditional) )?business plan(?: template| outline)?$|^lean (?:start-?up )?plan$|^start-?up plan$/i],
  ["growth-roadmap", /^(?:business )?(?:growth|scaling|scale-?up|expansion) (?:road ?map|plan)$|^(?:road ?map|plan) for (?:growth|scaling|growing my business)$/i],
  ["funding-checklist", /^(?:funding|investor|loan) (?:readiness )?(?:checklist|prep(?:aration)? list)$|^funding readiness (?:checklist|list)?$/i]
];
const FORMAT_WORDS = Object.freeze({ pdf: "pdf", docx: "docx", word: "docx", "word document": "docx", markdown: "md", md: "md", "text file": "txt", txt: "txt" });

const REQUEST = /^\s*(?:please\s+|can you\s+|could you\s+)?(?:draft|create|make|write|prepare|give me|start)\s+(?:me\s+)?(?:an?\s+|the\s+|my\s+)?(.+?)(?:\s+(?:for|about|on)\s+(.+?))?(?:\s+as\s+(?:an?\s+)?(pdf|word document|word|docx|markdown|md|text file|txt))?\s*[.!]?\s*$/i;

function templateRequest(text) {
  const match = REQUEST.exec(String(text || "").trim());
  if (!match) return null;
  const phrase = match[1].trim().replace(/\s+/g, " ");
  let hit = ALIASES.find(([, pattern]) => pattern.test(phrase));
  let clientText = match[2] || "";
  // "questions for a web designer": the "for" belongs to the name of the document, not to a client
  if (!hit && match[2]) {
    const whole = `${phrase} for ${match[2].trim()}`;
    hit = ALIASES.find(([, pattern]) => pattern.test(whole));
    if (hit) clientText = "";
  }
  if (!hit) return null;
  const client = clientText.trim().replace(/^["'“”]+|["'“”.]+$/g, "").slice(0, 80);
  return { kind: hit[0], client, format: match[3] ? FORMAT_WORDS[match[3].toLowerCase()] : "docx" };
}

const BLANK = "________________";
const note = "Drafted by Kyro from a fixed template for you to complete and review. It is general information, not legal, tax or security advice.";

function lines(...parts) { return parts.flat().join("\n"); }

const BODIES = {
  "technology-roadmap": client => lines(
    `Technology roadmap${client ? ` for ${client}` : ""}`, "",
    "1. Business snapshot", `What the business does: ${BLANK}`, `Who the customers are: ${BLANK}`, `Team size and who handles technology today: ${BLANK}`, `Goals for the next 12 months: ${BLANK}`, "",
    "2. What is used today (note the tool, who owns the account and who can sign in)",
    `Email and domain name: ${BLANK}`, `Website: ${BLANK}`, `Taking payments: ${BLANK}`, `Bookkeeping and invoices: ${BLANK}`, `Scheduling and customer messages: ${BLANK}`, `Social media and online listings: ${BLANK}`, `Files, phones and computers: ${BLANK}`, "",
    "3. Security basics (from the NIST Cybersecurity Framework 2.0 Small Business Quick-Start Guide and the FTC small business guide)",
    "[ ] Multi-factor authentication is on for email and banking", "[ ] A list of business accounts and devices exists and is kept up to date", "[ ] Data is backed up and a restore has been tested",
    "[ ] Software and devices are kept updated", "[ ] Everyone who works here knows how to spot phishing and fake invoices", "[ ] The domain, website and email logins are in the business owner's name", "",
    "4. Quick wins for the next 30 days (three at most)", `1. ${BLANK}`, `2. ${BLANK}`, `3. ${BLANK}`, "",
    "5. The next 90 days", `${BLANK}`, "", "6. Later this year", `${BLANK}`, "",
    "7. Who does what, and the budget", `Owner of each item: ${BLANK}`, `Money set aside: ${BLANK}`, "", "8. Review date", `${BLANK}`, "", note),
  "automation-audit": client => lines(
    `Automation audit${client ? ` for ${client}` : ""}`, "",
    "List every task that repeats. For each one, fill in a row.", "",
    "Task | How often | Minutes each time | Who does it | Tool used today | Touches money or customer data? (yes/no) | Could a reminder, template or tool do it? | A person must still check it? (yes/no)",
    `${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK}`, `${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK}`,
    `${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK} | ${BLANK}`, "",
    "Questions to ask about each task", "What starts it?", "What does it produce?", "What could go wrong, and how would we notice?", "Who checks the result before it reaches a customer or moves money?", "",
    "Choosing what to automate first", "Start with a task that repeats every week, takes real time and carries little risk (a reminder, a follow-up message you review, a list). Leave anything that moves money or sends to customers on its own until a person checks it.", "",
    "What Kyro can do for the owner today", "Reminders and repeating reminders; follow-up days for customers; customer, invoice and expense records with drafts to review; lists; a morning or weekly summary; and a prepared text or call that is only sent after the owner says yes. Kyro does not take payments or connect to a bank or accounting software.", "",
    `First task to automate: ${BLANK}`, `Owner and start date: ${BLANK}`, "", note),
  "website-brief": client => lines(
    `Website brief${client ? ` for ${client}` : ""}`, "",
    "1. Purpose and audience", `What the website must do (get calls, bookings, orders, trust): ${BLANK}`, `Who visits it and what they need first: ${BLANK}`, "",
    "2. Pages", "[ ] Home  [ ] What we do / products  [ ] About  [ ] Contact, hours and location  [ ] Other: " + BLANK, "",
    "3. What to gather before building", `Business name, logo and colours: ${BLANK}`, `Photos: ${BLANK}`, `Prices or a price range: ${BLANK}`, `Phone, email and address exactly as customers should see them: ${BLANK}`, `Real customer reviews or testimonials you have permission to show: ${BLANK}`, "",
    "4. Domain, email and accounts", "[ ] The domain name is registered in the business owner's name", "[ ] A business email on that domain", "[ ] Multi-factor authentication is on for both", "",
    "5. Ask the web host (from the FTC small business guide)", "[ ] Do they use TLS?", "[ ] Do they support email authentication (SPF, DKIM, DMARC)?", "[ ] Do they keep their software updated?", "[ ] Who can change the website?", "",
    "6. Reviews and claims", "Show only real reviews and testimonials. Do not claim results or AI features you cannot prove (FTC Consumer Reviews and Testimonials Rule; FTC guidance on AI claims).", "",
    "7. Launch and keeping it running", `Who updates the site: ${BLANK}`, `Backups: ${BLANK}`, `Business listing claimed and checked: ${BLANK}`, `Review date: ${BLANK}`, "", note),
  "app-brief": client => lines(
    `App brief${client ? ` for ${client}` : ""}`, "",
    "1. The problem", `Who has it and what happens today: ${BLANK}`, `How often it happens and what it costs in time or money: ${BLANK}`, "",
    "2. The users", `Who will use the app (customers, staff, the owner): ${BLANK}`, `Phone, computer or both: ${BLANK}`, "",
    "3. Must have, nice to have", `Must have (the smallest version that is useful): ${BLANK}`, `Nice to have, later: ${BLANK}`, "",
    "4. Data and privacy", `What information the app collects: ${BLANK}`, `Why each item is needed: ${BLANK}`, `Who can see it and where it is stored: ${BLANK}`, "[ ] Passwords and payment details are never stored by the app itself", "",
    "5. Build or buy", `Could an existing tool do this? ${BLANK}`, `If it is built: who builds it, who owns the code and accounts, and what happens if we change builders: ${BLANK}`, "",
    "6. Money and time", `Budget: ${BLANK}`, `First version needed by: ${BLANK}`, `How we will know it worked: ${BLANK}`, "",
    "7. Risks", `What could go wrong and who checks: ${BLANK}`, "", note),
  "vendor-questions": client => lines(
    `Questions for a web host, designer or developer${client ? ` (for ${client})` : ""}`, "",
    "About security (from the FTC small business guide)", "[ ] Do you use TLS?", "[ ] Do you support email authentication (SPF, DKIM and DMARC)?", "[ ] Do you keep your software updated, and how?", "[ ] Who can change my website or app?",
    "[ ] Will the contract include security terms, and how will you show that you meet them?", "[ ] What data of mine can you or your staff reach, and can that be limited?", "[ ] What is your plan if you are breached, and how fast will you tell me?", "",
    "About ownership and leaving (plain working practice)", "[ ] Are the domain, hosting and accounts in my name?", "[ ] Who owns the design, content and code?", "[ ] If I leave, how do I get my files and data, and in what format?", "",
    "About the work and the price", "[ ] What exactly is included, and what costs extra?", "[ ] What are the renewal dates and prices?", "[ ] How do I reach you for problems, and how fast do you reply?", "[ ] Can I see work you have done for similar businesses?", "",
    `Notes and answers: ${BLANK}`, "", note),
  "ai-use-policy": client => lines(
    `AI use policy${client ? ` for ${client}` : ""}`, "",
    `Purpose: why we use AI tools and what we want from them: ${BLANK}`, "",
    "1. Tools we have approved", `${BLANK}`, "",
    "2. What we use them for", `${BLANK}`, "",
    "3. What we never type into an AI tool", "Passwords. Customer, employee or payment information, unless the tool's privacy terms have been read and the owner has agreed.", "",
    "4. A person checks first", "Anything an AI tool produces is read and corrected by a person before it goes to a customer. Numbers, prices and any legal, tax or medical statement are checked.", "",
    "5. Being honest with customers", "If a chatbot or AI tool answers customers, we say so. We do not claim an AI feature does more than it does, and we keep the proof for any claim (FTC guidance on AI claims).", "",
    "6. Reviews", "We never use AI, or anyone else, to write fake reviews or testimonials (FTC Consumer Reviews and Testimonials Rule).", "",
    "7. If something goes wrong", `Who we tell and how: ${BLANK}`, "", `Owner: ${BLANK}    Date: ${BLANK}    Review again on: ${BLANK}`, "", note),
  "business-plan": client => lines(
    `Business plan${client ? ` for ${client}` : ""}`, "",
    "Two common types (SBA): a lean startup plan is high level, quick to write and typically one page; a traditional plan is detailed and comprehensive, and lenders and investors commonly ask for it. Fill in the one you need, or both. You do not have to follow the outline exactly.", "",
    "LEAN STARTUP PLAN (one page)",
    `Key partnerships: ${BLANK}`, `Key activities: ${BLANK}`, `Key resources: ${BLANK}`, `Value proposition (why customers choose you): ${BLANK}`, `Customer relationships: ${BLANK}`, `Customer segments (who they are): ${BLANK}`, `Channels (how you reach them): ${BLANK}`, `Cost structure: ${BLANK}`, `Revenue streams: ${BLANK}`, "",
    "TRADITIONAL PLAN",
    "1. Executive summary", `${BLANK}`, "2. Company description", `What the business is, its structure and its competitive advantages: ${BLANK}`, "3. Market analysis", `Industry outlook, target market, demand and market size, where customers are, how crowded the market is, who your competitors are and what they do well: ${BLANK}`,
    "4. Organization and management", `Who runs it and who does what: ${BLANK}`, "5. Service or product line", `${BLANK}`, "6. Marketing and sales", `${BLANK}`, "7. Funding request (if you are asking for money)", `How much, for what, and for how long: ${BLANK}`,
    "8. Financial projections", `Expense sheet and projections (the SBA suggests five years for a loan application): ${BLANK}`, "", note),
  "growth-roadmap": client => lines(
    `Growth roadmap${client ? ` for ${client}` : ""}`, "",
    "The sections follow the SBA's guidance on business plans, market research and marketing plans. The quarter-by-quarter layout is plain working practice, not an SBA template.", "",
    "1. Where the business is today", `What we sell, to whom, and what it earns: ${BLANK}`, `What is working: ${BLANK}`, `What is not: ${BLANK}`, "",
    "2. Goals for the next 12 months", `1. ${BLANK}`, `2. ${BLANK}`, `3. ${BLANK}`, "",
    "3. Customers and competitors (market research)", `Who our customers are and where they are: ${BLANK}`, `How big the market is and whether demand is growing: ${BLANK}`, `Who our competitors are, their strengths and weaknesses, and our competitive advantage: ${BLANK}`, "",
    "4. Marketing plan", `Target market: ${BLANK}`, `Sales plan (how customers buy): ${BLANK}`, `Marketing and sales goals for the next year: ${BLANK}`, `Action plan (channels, pricing, promotions, after-sale support): ${BLANK}`, `Budget: ${BLANK}`, `How we will compare marketing cost with the revenue it brings: ${BLANK}`, "",
    "5. Money", `What we need to grow (funding request): ${BLANK}`, `Where it could come from (savings, investors, crowdfunding, loans, grants): ${BLANK}`, `Financial projections: ${BLANK}`, "",
    "6. Operations and people", `Hiring: ${BLANK}`, `Systems and technology: ${BLANK}`, `Licences, registrations and insurance to update: ${BLANK}`, "",
    "7. Milestones by quarter", `Quarter 1: ${BLANK}`, `Quarter 2: ${BLANK}`, `Quarter 3: ${BLANK}`, `Quarter 4: ${BLANK}`, "",
    "8. Risks and what we will do about them", `${BLANK}`, "", "9. Review", "The SBA says marketing plans should be reviewed at least once a year.", `Review dates: ${BLANK}`, "", note),
  "funding-checklist": client => lines(
    `Funding readiness checklist${client ? ` for ${client}` : ""}`, "",
    "Based on the SBA's guidance on funding a business and the SEC's rules on raising money. It is a list of questions to answer before you ask anyone for money.", "",
    "1. The basics", "[ ] The business structure is chosen (ask an attorney or tax professional)", "[ ] The business is registered, with its EIN", "[ ] A business bank account is open", "",
    "2. The papers lenders and investors ask for", "[ ] A business plan (traditional or lean)", "[ ] An expense sheet", "[ ] Financial projections (the SBA suggests five years for a loan)", "",
    "3. Which kind of money, and why", `Self-funding (savings, family, a 401(k): the risk is all yours): ${BLANK}`, `Investors (they take an ownership share and usually a say): ${BLANK}`, `Crowdfunding (perks, or equity through an SEC-registered platform): ${BLANK}`, `A bank or credit union loan: ${BLANK}`, `An SBA-guaranteed loan (use SBA Lender Match): ${BLANK}`, `Grants (Grants.gov; read each opportunity's eligibility): ${BLANK}`, "",
    "4. If you will sell ownership to investors", "[ ] A securities attorney has told us whether the offer must be registered or qualifies for an exemption (the SEC names Regulation D, Regulation Crowdfunding and Regulation A)", "[ ] We checked that each investor is reputable and has startup experience", "",
    "5. Help", "[ ] I have contacted an SBDC or SCORE counselor (free or low-cost) (search by ZIP code at sba.gov/local-assistance)", `Questions I want to ask them: ${BLANK}`, "", note)
};

function consultingTemplate(kind, { client = "" } = {}) {
  const make = BODIES[kind];
  if (!make) return null;
  const who = String(client || "").trim();
  return { title: `${KINDS[kind]}${who ? ` - ${who}` : ""}`.slice(0, 120), content: make(who) };
}

module.exports = Object.freeze({ KINDS, templateRequest, consultingTemplate });
