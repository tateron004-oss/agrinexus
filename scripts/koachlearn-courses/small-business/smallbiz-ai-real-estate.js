"use strict";

// Koach Learn course: Small Business -> "AI for Real Estate Agents" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Fair Housing Act classes and the advertising rule were checked on hud.gov and 24 CFR 100.75 on 27 October 2026; California DRE named as an example state regulator.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const HUD_FHA = { name: "HUD: Fair Housing Act overview", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75: Discriminatory advertisements, statements and notices", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "California Department of Real Estate (example state regulator)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "AI for Real Estate Agents",
  skills: "Writing fair-housing-safe listing descriptions, Turning notes into client updates, Building a follow-up plan, Summarizing market data you supply, Preparing for showings and open houses, Protecting client information",
  outcome: "use AI in your real estate business to write accurate listing descriptions that follow fair housing rules, keep buyers and sellers updated, run a follow-up plan for your leads, and turn market numbers you pulled from your MLS into a clear client summary, without putting client private information into AI tools.",
  about: [
    "This course is for real estate agents, brokers and assistants, especially independent and newer agents building a business, including many minority agents serving their own communities and first-time buyers.",
    "You will use a free AI assistant to write listings faster, keep clients informed, follow up with leads consistently and explain market numbers clearly. You will also learn where AI creates risk in real estate: fair housing language, wrong facts in listings, and client privacy.",
    "This course is not legal advice. Fair housing law, advertising rules and licensing rules apply to you; check HUD, your state's real estate regulator (in California, the Department of Real Estate) and your broker. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build an agent AI kit: one listing description checked line by line for facts and fair housing language, a seller weekly update template, a buyer search update template, a 30-day lead follow-up plan with four messages, a one-page market summary built from numbers you pulled yourself, and an open-house checklist. No client private information goes into the AI tool.",
  chapters: [
    {
      name: "Chapter 1: Listings and fair housing",
      lessons: [
        {
          title: "Writing listing descriptions from your facts",
          minutes: 5,
          goal: "Write an accurate, appealing listing description from verified property facts.",
          text: [
            "A listing description sells the home's features: layout, updates, light, outdoor space, location features like nearby parks or transit. AI writes fast, but it only knows what you tell it.",
            "Give it verified facts only: \"3 bed, 2 bath, 1,450 sq ft per county records, built 1962, kitchen remodeled 2021, new roof 2023, fenced backyard with lemon tree, 0.3 miles to light rail.\" Ask for a 120-word description in a warm, professional tone, and a short version for social media.",
            "Then check every fact: square footage source, year of updates, school names, distances. AI may add things that are not there (\"granite counters\", \"ocean view\"). Misstatements in a listing can lead to complaints and legal trouble."
          ],
          steps: ["Gather verified facts from records, the seller and your own visit.", "Ask AI for a long and a short description.", "Check every fact line by line.", "Remove anything you cannot verify."],
          words: [["Listing description", "the written text that describes a property for sale or rent."], ["MLS", "Multiple Listing Service: the database agents use to share listings."], ["Verified fact", "something you have confirmed from records, the seller or your own visit."]],
          slides: [
            { title: "Sell the features", bullets: ["Layout, updates, light, outdoor space", "Nearby parks and transit"] },
            { title: "Facts in, words out", bullets: ["Give AI verified facts only", "Ask for long and short versions"] },
            { title: "Check line by line", bullets: ["Square footage source, update years, distances", "AI may invent features", "Misstatements can bring complaints"] }
          ],
          tryIt: "Pick a property you know (or a sample). Write ten verified facts, ask AI for a 120-word description, and check every line, deleting anything not in your facts.",
          youCanNow: "write a listing description from verified facts and catch AI's made-up details."
        },
        {
          title: "Fair housing language: what AI must not write",
          minutes: 6,
          goal: "Spot and fix listing language that shows a preference based on a protected class.",
          text: [
            "The federal Fair Housing Act prohibits housing discrimination because of race, color, national origin, religion, sex, familial status and disability. HUD's rule at 24 CFR 100.75 bans ads, statements and notices that show a preference, limitation or discrimination based on these, including through words, photos or where you choose to advertise. Many states, including California, protect more groups; check your state.",
            "Describe the property, not the people you want to live there. Risky phrases: \"perfect for young professionals\", \"ideal for a couple\", \"no kids\", \"great Christian neighborhood\", \"bachelor pad\", \"walking distance to [a house of worship] for families of that faith\", \"able-bodied\". Better: \"three bedrooms\", \"quiet street\", \"0.3 miles to transit\", \"single-level layout\".",
            "AI can copy biased patterns from what it learned. Always read its output for fair housing problems, and ask it: \"Rewrite to describe only the property and its features.\" When unsure, ask your broker or a fair housing resource."
          ],
          steps: ["Read every line asking: does this describe the property or the people?", "Remove words about who should live there.", "Replace with property features.", "Check photos and ad placement too.", "Ask your broker when unsure."],
          words: [["Fair Housing Act", "the federal law that bans housing discrimination based on protected classes."], ["Protected class", "a group the law protects from discrimination, such as race or familial status."], ["Familial status", "having children under 18 in the household, or being pregnant."], ["HUD", "the US Department of Housing and Urban Development."]],
          slides: [
            { title: "Federal protected classes", bullets: ["Race, color, national origin, religion", "Sex, familial status, disability", "Many states, like California, protect more"] },
            { title: "Ads must not show a preference", bullets: ["24 CFR 100.75: words, photos, ad placement", "Describe the property, not the people"] },
            { title: "Fix risky phrases", bullets: ["\"Perfect for young professionals\" -> remove", "\"No kids\" -> remove", "Use features: \"3 bedrooms\", \"near transit\""] },
            { title: "AI can copy bias", bullets: ["Read every output for fair housing problems", "Ask: \"Describe only the property\"", "Unsure? Ask your broker"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Ask AI for a listing description of a family-sized home. Mark every phrase that describes people instead of the property, then rewrite them as features.",
          youCanNow: "spot and fix fair housing problems in listing language, including AI-written text."
        },
        {
          title: "Marketing your listings and yourself, by the rules",
          minutes: 5,
          goal: "Create social posts and emails for a listing that follow advertising and email rules.",
          text: [
            "AI can turn your checked listing into posts, an email to your sphere, flyer text and a short video script. Use the same verified facts and the same fair housing check for every piece.",
            "Your state regulator and your broker have advertising rules for licensees, often including showing your license number and brokerage name. In California, that regulator is the Department of Real Estate (DRE); check your own state's rules and your brokerage policy.",
            "Marketing emails must follow CAN-SPAM: honest sender and subject, identify it as an ad, include a postal address and an unsubscribe option, and honor opt-outs within 10 business days."
          ],
          steps: ["Turn the checked listing into a post, an email and a flyer with AI.", "Run the fair housing check on each.", "Add license and brokerage details as your state and broker require.", "Add a postal address and unsubscribe to marketing emails."],
          words: [["Sphere", "the people you know who might buy, sell or refer: past clients, friends, family."], ["Licensee", "a person holding a real estate license."]],
          slides: [
            { title: "One listing, many pieces", bullets: ["Posts, email, flyer, video script", "Same facts, same fair housing check"] },
            { title: "Licensee advertising rules", bullets: ["Often: license number and brokerage name", "California: Department of Real Estate", "Check your state and broker policy"] },
            { title: "Marketing email basics", bullets: ["Honest sender and subject; say it is an ad", "Postal address and unsubscribe", "Honor opt-outs within 10 business days"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Turn your checked listing into a social post and a short email. Run the fair housing check, and add the license and brokerage details your state and broker require.",
          youCanNow: "market a listing across channels while following fair housing, licensee and email rules."
        }
      ],
      check: {
        title: "Knowledge Check 1: Listings and fair housing",
        questions: [
          { q: "AI's listing says \"ocean view\" but the home has none. What do you do?", options: ["Keep it; buyers like it", "Delete it", "Add a photo of the ocean", "Ask the AI if it is true"], answer: 1, why: "Only verified facts belong in a listing." },
          { q: "Which is a federal Fair Housing Act protected class?", options: ["Hair color", "Favorite sports team", "Car brand", "Familial status"], answer: 3, why: "Familial status is one of the seven federal classes." },
          { q: "Which phrase is a fair housing risk?", options: ["\"Perfect for young professionals\"", "\"Three bedrooms\"", "\"New roof 2023\"", "\"0.3 miles to light rail\""], answer: 0, why: "It shows a preference about who should live there." },
          { q: "Fair housing advertising rules can cover:", options: ["Only billboards", "Only words", "Words, photos and where you place ads", "Nothing online"], answer: 2, why: "24 CFR 100.75 covers words, images and media choices." },
          { q: "Where do you check licensee advertising rules in California?", options: ["A buyer", "An AI chat", "The Department of Real Estate and your broker", "A social media group"], answer: 2, why: "The DRE regulates California licensees." }
        ]
      }
    },
    {
      name: "Chapter 2: Clients, leads and market data",
      lessons: [
        {
          title: "Client updates without sharing private information",
          minutes: 5,
          goal: "Turn your notes into clear seller and buyer updates using placeholders.",
          text: [
            "Clients want to hear from you often. A weekly seller update covers showings, feedback, online views and next steps. A buyer update covers new matches, scheduled showings and what is happening in their price range.",
            "Use AI to turn rough notes into a clear update, with placeholders: \"Turn these notes into a friendly weekly update for [seller name]: 6 showings, 2 second showings, feedback says kitchen is great but backyard needs cleanup, 1,200 online views. Suggest one next step.\"",
            "Never put client private details into AI tools: full names with addresses, financial information, pre-approval amounts, Social Security numbers, offer terms or negotiation strategy. Fill those in yourself in your email or CRM. Follow your brokerage's rules on AI tools."
          ],
          steps: ["Write rough notes after the week.", "Replace names and private details with placeholders.", "Ask AI for a clear update with a next step.", "Fill in the real details yourself and send."],
          words: [["CRM", "customer relationship management: software for tracking clients and leads."], ["Placeholder", "a blank like [seller name] used instead of real private details."]],
          slides: [
            { title: "Clients want updates", bullets: ["Seller: showings, feedback, views, next step", "Buyer: new matches, showings, market moves"] },
            { title: "Notes in, update out", bullets: ["Rough notes with placeholders", "Ask for a friendly update and next step"] },
            { title: "Never put into AI", bullets: ["Names with addresses, finances, SSNs", "Pre-approval amounts and offer terms", "Negotiation strategy"] }
          ],
          tryIt: "Write rough notes for a sample seller's week. Use placeholders, ask AI for a weekly update with a next step, and check it has no private details.",
          youCanNow: "send clear client updates made with AI while keeping client information private."
        },
        {
          title: "A follow-up plan for leads",
          minutes: 5,
          goal: "Build a 30-day follow-up plan with four messages for new leads.",
          text: [
            "Most leads are not ready today. A steady, helpful follow-up plan keeps you in mind. Example 30-day plan: day 1 thank-you and one question; day 7 useful tip (first-time buyer programs to look into); day 14 market snapshot for their area; day 30 check-in.",
            "Ask AI to write each message in your voice with [first name] and [area] blanks. Keep them helpful, not pushy. Give links only to official program pages you have checked.",
            "Track leads in your CRM or a spreadsheet: name, source, date, stage, next follow-up date. Only email or text people who agreed to hear from you, and follow email and texting rules."
          ],
          steps: ["Plan four touches over 30 days.", "Ask AI to draft each with blanks.", "Make them helpful and check any program details on official pages.", "Track each lead's next follow-up date.", "Contact only people who agreed."],
          words: [["Lead", "a person who might buy, sell or rent but has not signed with you."], ["Touch", "one contact with a lead: a call, text or email."]],
          slides: [
            { title: "A 30-day plan", bullets: ["Day 1: thank-you and one question", "Day 7: useful tip; Day 14: market snapshot", "Day 30: check-in"] },
            { title: "Helpful, not pushy", bullets: ["AI drafts with [first name] and [area]", "Link only to official pages you checked"] },
            { title: "Track and respect", bullets: ["Name, source, stage, next date", "Only contact people who agreed"] }
          ],
          tryIt: "Ask AI to draft your four-message, 30-day follow-up plan. Edit each into your voice and set up a lead tracking sheet with a next-follow-up column.",
          youCanNow: "run a consistent, helpful follow-up plan for new leads."
        },
        {
          title: "Market summaries and showing prep",
          minutes: 5,
          goal: "Turn market numbers you pulled into a clear client summary, and prep an open house.",
          text: [
            "Clients ask, \"What is the market doing?\" Pull the numbers yourself from your MLS or another reliable source: median price, days on market, number of active listings, sale-to-list price ratio, for the last few months.",
            "Paste the numbers (no client data) into AI and ask: \"Explain these market numbers for a first-time buyer in plain words, in 150 words. Do not add numbers I did not give you.\" Check that it did not invent statistics, and add your source and date. AI does not have reliable live market data; you do.",
            "For showings and open houses, ask AI for a checklist: before (lights, temperature, flyers, sign-in), during (safety, greeting, notes), after (follow-up within 24 hours). Add your brokerage's safety practices."
          ],
          steps: ["Pull current numbers from your MLS or a reliable source.", "Ask AI to explain them in plain words without adding numbers.", "Check every number and add source and date.", "Ask AI for an open-house checklist and add safety steps."],
          words: [["Median price", "the middle price: half of homes sold for more, half for less."], ["Days on market", "how long homes take to sell."], ["Sale-to-list ratio", "sale price divided by list price, shown as a percent."]],
          slides: [
            { title: "You pull the numbers", bullets: ["Median price and days on market", "Active listings and sale-to-list ratio", "From your MLS or a reliable source"] },
            { title: "AI explains", bullets: ["\"Explain in plain words; add no numbers\"", "Check every number; add source and date"] },
            { title: "Open house checklist", bullets: ["Before: lights, flyers, sign-in", "During: safety and notes", "After: follow up within 24 hours"] }
          ],
          tryIt: "Final task: build your agent AI kit: a checked listing description, seller and buyer update templates, the 30-day follow-up plan, a market summary from numbers you pulled, and an open-house checklist.",
          youCanNow: "explain market numbers clearly and prepare showings with AI help, using your own data."
        }
      ],
      check: {
        title: "Knowledge Check 2: Clients, leads and market data",
        questions: [
          { q: "Which should never go into an AI tool?", options: ["A buyer's pre-approval amount and name", "\"6 showings this week\"", "\"Kitchen got good feedback\"", "\"[seller name]\""], answer: 0, why: "Client financial details are private." },
          { q: "What is a good day-7 follow-up?", options: ["Nothing", "A pushy \"Sign now!\"", "Their credit score", "A useful tip for their situation"], answer: 3, why: "Helpful touches build trust." },
          { q: "Where should market numbers come from?", options: ["AI's memory", "Your MLS or another reliable source you pulled", "A guess", "A neighbor"], answer: 1, why: "AI does not have reliable live market data." },
          { q: "AI adds \"prices rose 12% this year\" but you never gave that number. You:", options: ["Remove it", "Keep it", "Round it up", "Post it"], answer: 0, why: "Do not use numbers you did not supply and check." },
          { q: "What is the median price?", options: ["The average rent", "The highest price", "The middle price: half sold for more, half for less", "The list price"], answer: 2, why: "Median is the middle value." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Real Estate Agents",
    questions: [
      { q: "What should you give AI to write a listing?", options: ["The seller's SSN", "Verified facts only", "Guesses", "A competitor's listing"], answer: 1, why: "Facts in, accurate words out." },
      { q: "MLS stands for:", options: ["My Listing Site", "Main Loan System", "Market Law Statute", "Multiple Listing Service"], answer: 3, why: "Agents share listings on the MLS." },
      { q: "Why check square footage in an AI listing?", options: ["It is not needed", "To make it longer", "For fun", "Misstatements can lead to complaints and legal trouble"], answer: 3, why: "Wrong facts cause problems." },
      { q: "How many federal Fair Housing Act protected classes are there?", options: ["Three", "Seven", "Ten", "Two"], answer: 1, why: "Race, color, national origin, religion, sex, familial status, disability." },
      { q: "Which is a property feature, not a preference about people?", options: ["\"No kids\"", "\"Ideal for a couple\"", "\"Single-level layout\"", "\"Great for young professionals\""], answer: 2, why: "It describes the home." },
      { q: "Why can AI write fair housing problems?", options: ["It can copy biased patterns from what it learned", "It knows fair housing law perfectly", "It never makes mistakes", "It is a lawyer"], answer: 0, why: "Always review AI output." },
      { q: "Does California protect more groups than federal law?", options: ["Only on weekends", "No, never", "Yes; check your state's rules", "Only for rentals"], answer: 2, why: "Many states, including California, protect more groups." },
      { q: "Licensee ads often must include:", options: ["License number and brokerage name, per state and broker rules", "Your home address", "Client names", "Nothing"], answer: 0, why: "Check your state's advertising rules." },
      { q: "A marketing email to your sphere must include:", options: ["Clients' offer terms", "A postal address and unsubscribe option", "A fake sender", "Nothing"], answer: 1, why: "CAN-SPAM requires both." },
      { q: "What is your sphere?", options: ["A lender", "A round object", "The MLS", "People you know who might buy, sell or refer"], answer: 3, why: "Past clients, friends and family." },
      { q: "A weekly seller update includes:", options: ["Showings, feedback, views and a next step", "Other clients' finances", "Your password", "Nothing"], answer: 0, why: "Those keep sellers informed." },
      { q: "Which is a placeholder?", options: ["A Social Security number", "The seller's full name and address", "A bank account number", "[seller name]"], answer: 3, why: "Placeholders keep private details out." },
      { q: "Negotiation strategy should be:", options: ["Posted online", "Pasted into chats", "Kept out of AI tools", "Shared with all buyers"], answer: 2, why: "It is confidential client information." },
      { q: "A 30-day follow-up plan has about:", options: ["One hundred calls", "Four helpful touches", "None", "Daily pushy texts"], answer: 1, why: "Steady and helpful works best." },
      { q: "Who should you email or text with marketing?", options: ["Strangers", "Anyone whose number you find", "Bought lists", "People who agreed to hear from you"], answer: 3, why: "Permission comes first." },
      { q: "Before linking to a first-time buyer program, you:", options: ["Guess the rules", "Trust AI's link", "Check its official page", "Skip checking"], answer: 2, why: "Program details change." },
      { q: "Days on market measures:", options: ["How long homes take to sell", "Open house hours", "Commission days", "Holidays"], answer: 0, why: "It shows market speed." },
      { q: "When AI explains market numbers you should tell it:", options: ["Make up more numbers", "Do not add numbers I did not give you", "Guess the future", "Use any website"], answer: 1, why: "This reduces invented statistics." },
      { q: "When should you follow up after an open house?", options: ["Next year", "Within 24 hours", "Never", "Only if they call"], answer: 1, why: "Fast follow-up wins clients." },
      { q: "This course is:", options: ["Not legal advice; check HUD, your state regulator and broker", "Legal advice", "A license", "A contract"], answer: 0, why: "Official sources and your broker have the final word." }
    ]
  }
};
