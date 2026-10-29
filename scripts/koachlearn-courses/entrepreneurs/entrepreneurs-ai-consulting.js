"use strict";

// Koach Learn course: Entrepreneurs (bonus) -> "Starting an AI Consulting Business". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-consulting",
  category: "Entrepreneurs",
  name: "Starting an AI Consulting Business",
  skills: "Choosing a consulting niche, Building proof with a pilot, Packaging and pricing services, Running an AI audit for a client, Writing a proposal, Handling client data and agreements",
  outcome: "set up a small AI consulting practice: choose a niche, package three services with prices, run an AI audit for a real small business, and turn it into a one-page proposal with clear rules for handling the client's data.",
  about: [
    "Many small businesses know they should use AI but do not know where to start. An AI consultant helps them find the right uses, set up tools, train staff and stay safe. You do not need to be a programmer; you need to understand business problems, know the main AI tools well, and be honest about what AI can and cannot do.",
    "This course is for people with business or work experience who want to offer AI help to small businesses, nonprofits or local organizations. You will choose a niche, build proof through a pilot, package and price your services, find clients, run an AI audit, write a proposal, and set rules for client data and agreements.",
    "Each lesson takes about five minutes with a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end. Tax and legal points link to official sources; talk to an accountant and a lawyer about your own setup."
  ],
  finalTask: "Create your AI consulting starter kit: a one-sentence niche and offer, three service packages with prices, a 10-question AI audit questionnaire, the results of an audit for one real business (with private details removed), a one-page proposal for that business, and your written client data rules.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People with business or work experience who want to offer AI help to small businesses, nonprofits or local organizations. Most are not programmers.",
    startingPoint: "Use the main AI tools well and know at least one industry or type of business. Few have packaged or priced a service, run an audit, written a proposal or set rules for client data.",
    gap: "Small businesses need honest, practical AI help, but new consultants often sell vague services, underprice their time, overpromise results or mishandle client data. Learners need a focused offer, real proof, clear packages, a repeatable audit and written data rules to win and keep clients.",
    constraints: [
      "Plain words; no programming needed",
      "Devices: a computer with a free AI assistant, a spreadsheet and email",
      "Time: about five minutes per lesson plus tasks with a real or practice client",
      "Outreach email rules apply; tax and legal setup checked with official sources, an accountant and a lawyer",
      "Client names and private details removed before any notes go into AI"
    ],
    prerequisites: "\"AI Tools Every Entrepreneur Should Know\" and \"AI Ethics, Risks and Legal Considerations\" are recommended."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the industries and businesses you know", action: "write a one-sentence consulting offer for a specific type of client", standard: "naming who you help, the result and how" },
    { id: "O2", condition: "Given one business willing to try your help", action: "plan a pilot with one measurable result and before-and-after numbers", standard: "with the client's written permission before any result is shared" },
    { id: "O3", condition: "Given your offer and hourly costs", action: "create three service packages with deliverables, time, client inputs and prices", standard: "with the hourly math checked in a spreadsheet, including checking and follow-up time" },
    { id: "O4", condition: "Given your network and niche", action: "plan outreach to ten possible clients and outline a short talk for owners", standard: "with personal messages that include your address and an opt-out" },
    { id: "O5", condition: "Given a 10-question audit questionnaire and one business owner", action: "run an AI audit and recommend the top three AI uses", standard: "scoring ideas on time saved, cost, ease and risk, with a safeguard for each" },
    { id: "O6", condition: "For the business you audited", action: "write a one-page proposal and your client data rules", standard: "with the client's situation in their own words and data deleted or returned at the end" }
  ],
  chapters: [
    {
      name: "Chapter 1: Set up your practice",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choosing your niche and offer",
          minutes: 5,
          goal: "Write a one-sentence offer for a specific type of client.",
          text: [
            "\"I help businesses with AI\" is hard to sell. \"I help independent restaurants save 5 hours a week on ordering, scheduling and social media with simple AI tools\" is easy to understand and easy to refer.",
            "Choose a niche where you already have experience or contacts: an industry you worked in, a community you belong to, or a type of organization (salons, churches, contractors, clinics' front offices, nonprofits). Your past experience is your advantage over general tech people.",
            "Ask AI to help: \"I worked 8 years in [field]. List the repeated tasks small businesses in this field do that AI tools could speed up.\" Then write your offer: who you help, what result, and how."
          ],
          steps: ["List industries or communities you know well.", "Ask AI for repeated tasks in those fields that AI could speed up.", "Pick one niche.", "Write your offer: who you help, what result, how."],
          words: [["Consultant", "an expert who advises a business and helps it make changes."], ["Niche", "a specific type of client you focus on."], ["Offer", "a clear statement of who you help, the result and how."]],
          slides: [
            { title: "Specific sells", bullets: ["Not \"I help businesses with AI\"", "\"I help independent restaurants save 5 hours a week\""] },
            { title: "Use what you know", bullets: ["An industry you worked in", "A community you belong to", "Your experience is your edge"] },
            { title: "Write your offer", bullets: ["Who you help", "What result", "How"] }
          ],
          tryIt: "Choose your niche with AI's help and write your one-sentence offer: who, what result, how.",
          youCanNow: "describe a focused AI consulting offer that clients understand quickly.",
          quickCheck: [
            { objective: "O1", q: "What is a niche in consulting?", options: ["A specific type of client you focus on", "Every business in the country", "A type of AI tool", "Your hourly rate"], answer: 0, why: "A niche lets you understand clients' problems deeply." },
            { objective: "O1", q: "Your offer reads \"I help businesses with AI\". What do you do?", options: ["Keep it broad", "Name who you help, the result and how", "Add a list of every AI tool", "Remove the offer"], answer: 1, why: "A strong offer is specific so clients understand it quickly." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building proof with a pilot",
          minutes: 5,
          goal: "Plan a small pilot project that gives you a real result to show.",
          text: [
            "Clients want proof you can help. If you are new, run a pilot: a small, short project for one business (a friend's shop, a local nonprofit) at a low or no fee, in exchange for permission to share the results and a testimonial.",
            "Pick a pilot with a measurable result: \"Set up AI reply templates and cut email time from 6 to 3 hours a week.\" Measure before and after.",
            "Write it up as a short case study: the problem, what you did, the result in numbers, and a quote from the owner. Get written permission before sharing, and remove anything private. Never make up results or testimonials."
          ],
          steps: ["Find one business willing to try a pilot.", "Agree on one measurable result.", "Measure before you start.", "Do the work and measure after.", "Write a short case study with permission."],
          words: [["Pilot", "a small trial project to show something works."], ["Case study", "a short story of a real project: problem, work, result."], ["Testimonial", "a client's statement about your work, used with their permission."]],
          slides: [
            { title: "New? Run a pilot", bullets: ["One business, short and small", "Low or no fee", "In return: permission to share results"] },
            { title: "Measure it", bullets: ["One clear result", "Before and after numbers"] },
            { title: "Write a case study", bullets: ["Problem, work, result, quote", "Written permission", "Never invent results"] }
          ],
          tryIt: "Write a pilot plan: which business, one measurable result, how you will measure before and after, and what you ask in return.",
          youCanNow: "plan a pilot that turns into honest proof for your consulting business.",
          quickCheck: [
            { objective: "O2", q: "What should a pilot measure?", options: ["How many tools you used", "How long your emails were", "One result with before and after numbers", "Nothing; it is free"], answer: 2, why: "A measurable result turns a pilot into honest proof." },
            { objective: "O2", q: "Your pilot saved the client 2 hours a week, not the 5 you hoped. What do you share?", options: ["Say it saved 5 hours", "Hide the pilot", "Round it up to 4 hours", "The real result, with the client's permission"], answer: 3, why: "Never invent results; share only what really happened." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Packaging and pricing your services",
          minutes: 6,
          goal: "Create three service packages with clear deliverables and prices.",
          text: [
            "Packages are easier to buy than open-ended hours. A common set: an AI Audit (review the business and recommend the top three AI uses), an AI Setup (set up tools, templates and simple automations), and AI Training (teach the owner and staff, with written guides). Some consultants add a monthly support plan.",
            "For each package write: what the client gets, how long it takes, what you need from them, and the price. Price from value and from your time: estimate your hours, include time for checking and follow-up, and compare with what similar local services charge.",
            "Get an EIN from the IRS if you need one (the IRS says it is free and warns about sites that charge). As a self-employed person you generally pay self-employment tax and may need quarterly estimated taxes; see irs.gov and talk to an accountant."
          ],
          steps: ["Write three packages: Audit, Setup, Training.", "For each: deliverables, time, what you need from the client, price.", "Estimate your hours including checking and follow-up.", "Compare with local rates and check your math.", "Look up tax basics on irs.gov and ask an accountant."],
          words: [["Package", "a defined service with set deliverables and a set price."], ["Retainer", "a monthly fee for ongoing help."], ["EIN", "Employer Identification Number: a free federal tax ID for a business from the IRS."]],
          slides: [
            { title: "Three packages", bullets: ["AI Audit: top three AI uses", "AI Setup: tools, templates, automations", "AI Training: owner and staff, with guides"] },
            { title: "Each package says", bullets: ["What the client gets", "How long, what you need from them", "The price"] },
            { title: "Set up properly", bullets: ["IRS: an EIN is free; beware paid sites", "Self-employment and estimated taxes", "Ask an accountant"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }],
          tryIt: "Write your three packages with deliverables, time, client inputs and a price for each, and check your hourly math in a spreadsheet.",
          youCanNow: "package and price AI consulting services clearly.",
          quickCheck: [
            { objective: "O3", q: "Why sell packages instead of open-ended hours?", options: ["They are easier for clients to understand and buy", "They hide your price", "They remove the need for deliverables", "They mean less work"], answer: 0, why: "Clear packages make buying simple for clients." },
            { objective: "O3", q: "Your package price leaves no time for follow-up questions. What do you do?", options: ["Ignore follow-up", "Add follow-up time to your hours and reset the price", "Charge extra later without telling the client", "Remove the deliverables"], answer: 1, why: "Pricing must include checking and follow-up time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Set up your practice",
        questions: [
          { objective: "O1", q: "Which consulting offer is strongest?", options: ["\"I do AI stuff\"", "\"I help independent restaurants save 5 hours a week with simple AI tools\"", "\"I help everyone with everything\"", "\"AI expert, call me\""], answer: 1, why: "It names who, what result and how." },
          { objective: "O1", q: "What is the main advantage of choosing a niche you know?", options: ["It avoids taxes", "It is always the most profitable", "You do not need to learn AI", "You understand clients' problems better than general tech people"], answer: 3, why: "Experience in the field is your edge." },
          { objective: "O2", q: "A pilot client agrees to a low fee. What do you ask for in return?", options: ["Permission to share results and a testimonial", "Their bank password", "Fake reviews", "Nothing"], answer: 0, why: "A pilot builds honest proof." },
          { objective: "O2", q: "Can you make up results for a case study if the pilot went badly?", options: ["Yes, if no one checks", "Yes, if small", "No, never invent results", "Only on social media"], answer: 2, why: "Invented results are dishonest and misleading." },
          { objective: "O3", q: "What does the IRS say about getting an EIN?", options: ["Only lawyers can get one", "It costs $500", "It is free; beware of sites that charge", "You must pay monthly"], answer: 2, why: "The IRS issues EINs at no cost." }
        ]
      }
    },
    {
      name: "Chapter 2: Win and serve clients",
      lessons: [
        {
          objectives: ["O4"],
          title: "Finding your first clients",
          minutes: 5,
          goal: "Plan outreach to your first ten possible clients.",
          text: [
            "Your first clients usually come from people who already know you: past co-workers, local business groups, your church or community, and referrals from your pilot. A free short talk or workshop (\"5 ways AI can save your salon time\") is a strong way to meet owners.",
            "Write personal messages, not mass emails. AI can draft them: \"Write a 70-word message to a salon owner I met at a chamber event, offering a free 20-minute AI check-up. Friendly, no hype.\" Add a real detail.",
            "If you email people for business, follow CAN-SPAM basics: honest From and subject lines, your physical address and a clear opt-out, honored within 10 business days. Do not promise results you cannot prove."
          ],
          steps: ["List ten owners or organizations in your niche you can reach.", "Plan one free talk or workshop.", "Draft personal messages with AI and add a real detail to each.", "Include your address and an opt-out in business emails.", "Track who you contacted and their reply."],
          words: [["Referral", "a recommendation from someone who knows your work."], ["Workshop", "a short session where you teach a group something useful."]],
          slides: [
            { title: "Start with people who know you", bullets: ["Past co-workers and community", "Local business groups", "Referrals from your pilot"] },
            { title: "Teach to meet owners", bullets: ["A free short talk or workshop", "\"5 ways AI can save your salon time\""] },
            { title: "Personal outreach, by the rules", bullets: ["AI drafts; you add a real detail", "CAN-SPAM: honest lines, address, opt-out", "No promises you cannot prove"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }],
          tryIt: "List ten possible clients, write three personal outreach messages with AI's help, and outline a 20-minute talk you could give to owners in your niche.",
          youCanNow: "reach your first clients through people you know, talks and honest outreach.",
          quickCheck: [
            { objective: "O4", q: "Where do first consulting clients usually come from?", options: ["Bought email lists", "Random cold calls abroad", "People who already know you and referrals", "Paid ads on day one"], answer: 2, why: "Your network and referrals trust you first." },
            { objective: "O4", q: "AI drafts an outreach email with no address or opt-out. What do you do?", options: ["Send it", "Send it to a bought list", "Make it longer", "Add your physical address and an opt-out line"], answer: 3, why: "Business outreach emails must include an address and an opt-out." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Running an AI audit",
          minutes: 6,
          goal: "Interview a business owner and recommend their top three AI uses.",
          text: [
            "An AI audit is a structured look at how a business works and where AI could help. Use a short questionnaire: What tasks take the most time each week? What do customers ask most? Where do mistakes happen? What tools do you already use? What worries you about AI?",
            "From the answers, score each possible AI use on time saved, cost, ease and risk. AI can help you sort and score (with the business's name and private details removed), but your judgment matters most. Pick the top three: quick wins first.",
            "Include risks and safeguards for each recommendation: who checks AI output, what data must stay out of AI tools, and anything that needs a lawyer or accountant. Honest limits make clients trust you more."
          ],
          steps: ["Use a 10-question audit questionnaire with the owner.", "List every possible AI use you heard.", "Score each on time saved, cost, ease and risk.", "Pick the top three, quick wins first.", "Add a safeguard for each: human check, data rule, expert if needed."],
          words: [["AI audit", "a structured review of a business to find where AI can help safely."], ["Quick win", "a change that is easy to make and helps right away."], ["Safeguard", "a step that prevents harm, like a human check."]],
          slides: [
            { title: "The audit questions", bullets: ["What takes the most time?", "What do customers ask most?", "Where do mistakes happen? What worries you?"] },
            { title: "Score and pick", bullets: ["Time saved, cost, ease, risk", "Top three, quick wins first", "AI helps sort; you judge"] },
            { title: "Add safeguards", bullets: ["Who checks AI output", "What data stays out of AI tools", "When to involve a lawyer or accountant"] }
          ],
          tryIt: "Write your 10-question audit questionnaire and run it with one real business owner (or a friend acting as one). Score the ideas and write the top three with safeguards.",
          youCanNow: "run an AI audit and give a business three safe, practical recommendations.",
          quickCheck: [
            { objective: "O5", q: "Which audit recommendations should come first?", options: ["Quick wins that are easy and help right away", "The most expensive tools", "Ideas with the highest risk", "Anything the AI suggests"], answer: 0, why: "Quick wins build trust and show value early." },
            { objective: "O5", q: "You want AI to help sort your audit notes. What do you do first?", options: ["Paste them as they are", "Remove the business's name and private details", "Email them to a friend", "Post them online"], answer: 1, why: "Client details stay out of AI tools." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proposals, agreements and client data",
          minutes: 6,
          goal: "Write a one-page proposal and your rules for handling client data.",
          text: [
            "A proposal turns your audit into a decision. One page: the client's situation in their words, the three recommendations, the package you suggest, what you will deliver and when, the price, and what you need from them. AI can draft it from your notes; edit it so every promise is one you can keep.",
            "Get a written agreement before starting paid work: scope, price, payment terms, timeline, who owns what you create, and confidentiality. Templates exist, but have a lawyer review yours.",
            "Write client data rules and follow them: never put a client's customer lists, financial records, passwords or private information into AI tools without their written permission and a tool whose data terms fit; use their accounts, not yours, for tools that hold their data; and delete or return their data when the project ends. The FTC's guide on protecting personal information is a good base."
          ],
          steps: ["Draft a one-page proposal from your audit notes with AI.", "Check every promise and price.", "Prepare a written agreement and have a lawyer review it.", "Write your client data rules.", "Share the rules with clients before you start."],
          words: [["Proposal", "a short document offering specific work at a specific price."], ["Confidentiality", "keeping a client's information private."], ["Scope", "exactly what work is included."]],
          slides: [
            { title: "One-page proposal", bullets: ["Their situation in their words", "Three recommendations and a package", "Deliverables, timeline, price"] },
            { title: "Written agreement", bullets: ["Scope, price, payment, timeline", "Ownership and confidentiality", "Have a lawyer review it"] },
            { title: "Client data rules", bullets: ["No private client data in AI without written OK", "Use the client's own accounts", "Delete or return data at the end"] }
          ],
          sources: [{ name: "FTC: Protecting Personal Information, A Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business" }],
          tryIt: "Final task: write the one-page proposal for the business you audited and your client data rules, then assemble your consulting starter kit: offer, packages, questionnaire, audit results, proposal and data rules.",
          youCanNow: "win and serve AI consulting clients with clear proposals, agreements and data rules.",
          quickCheck: [
            { objective: "O6", q: "What does a written consulting agreement cover?", options: ["Only the price", "Your favorite tools", "Scope, price, payment, timeline, ownership and confidentiality", "The client's personal life"], answer: 2, why: "A clear agreement avoids misunderstandings." },
            { objective: "O6", q: "The project is over and you still hold the client's files. What do you do?", options: ["Keep them forever", "Use them for another client", "Share them as an example", "Delete or return them as your data rules say"], answer: 3, why: "Client data should be deleted or returned at the end of a project." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Win and serve clients",
        questions: [
          { objective: "O4", q: "Where do first consulting clients usually come from?", options: ["People who already know you and referrals", "Bought email lists", "Random cold calls with AI voices", "Fake reviews"], answer: 0, why: "Trust and referrals win first clients." },
          { objective: "O5", q: "Which is a good AI audit question?", options: ["\"Can I have your customer list?\"", "\"What is your bank password?\"", "\"Do you like robots?\"", "\"What tasks take the most time each week?\""], answer: 3, why: "It finds where AI can save time." },
          { objective: "O5", q: "Which recommendations should come first?", options: ["The most expensive projects", "Quick wins that are easy and help right away", "The riskiest ideas", "Whatever AI says"], answer: 1, why: "Quick wins build trust and results." },
          { objective: "O6", q: "Before starting paid work, you should have:", options: ["A written agreement, reviewed by a lawyer", "Only a handshake", "Nothing", "A social media post"], answer: 0, why: "Agreements prevent misunderstandings." },
          { objective: "O6", q: "Can you paste a client's customer list into an AI tool?", options: ["Yes, if it is a free tool", "Yes, any time", "Only with their written permission and a tool whose data terms fit", "Only at night"], answer: 2, why: "Client data needs permission and protection." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Starting an AI Consulting Business",
    questions: [
      { objective: "O1", q: "An AI consultant mainly needs to:", options: ["Be a full-time programmer", "Understand business problems and know AI tools well", "Own a data center", "Have a big social following"], answer: 1, why: "Business understanding plus tool knowledge is the core." },
      { objective: "O1", q: "A strong offer includes:", options: ["Your hourly rate only", "Only your name", "A long list of every tool", "Who you help, the result and how"], answer: 3, why: "Those three make it clear." },
      { objective: "O1", q: "A niche is:", options: ["A price", "A type of AI model", "A legal form", "A specific type of client you focus on"], answer: 3, why: "Focus makes marketing easier." },
      { objective: "O2", q: "A pilot is:", options: ["An airline job", "A small trial project to show something works", "A long contract", "A tax form"], answer: 1, why: "Pilots build proof." },
      { objective: "O2", q: "A pilot should have:", options: ["Ten goals", "No goal", "One measurable result with before and after numbers", "Only a logo"], answer: 2, why: "Numbers make proof convincing." },
      { objective: "O2", q: "Before sharing a case study, you need:", options: ["The client's written permission", "Nothing", "AI approval", "A competitor's OK"], answer: 0, why: "Respect client privacy and trust." },
      { objective: "O3", q: "Packages are better than open-ended hours because:", options: ["They avoid taxes", "They are always cheaper", "They are easier for clients to understand and buy", "They need no work"], answer: 2, why: "Clear deliverables and prices help clients decide." },
      { objective: "O3", q: "An AI Audit package delivers:", options: ["A review of the business and the top AI recommendations", "A new website", "Tax filing", "Legal advice"], answer: 0, why: "That is the audit's purpose." },
      { objective: "O3", q: "When pricing, include time for:", options: ["Nothing extra", "Checking and follow-up", "Only travel", "Coffee breaks only"], answer: 1, why: "Hidden time eats profit." },
      { objective: "O3", q: "Self-employed consultants generally pay:", options: ["Only a license fee", "No tax", "Only sales tax", "Self-employment tax and often quarterly estimated taxes"], answer: 3, why: "The IRS self-employed tax center explains this." },
      { objective: "O4", q: "A free short workshop helps you:", options: ["Meet owners and show what you know", "Avoid clients", "Collect passwords", "Skip proposals"], answer: 0, why: "Teaching builds trust." },
      { objective: "O4", q: "Business outreach emails must include:", options: ["A guarantee", "The client's password", "A fake deadline", "Your physical address and an opt-out"], answer: 3, why: "These are CAN-SPAM basics." },
      { objective: "O5", q: "In an AI audit, you score ideas on:", options: ["How trendy they are", "Color and font", "Time saved, cost, ease and risk", "Your favorite tool"], answer: 2, why: "These show which ideas are worth doing." },
      { objective: "O5", q: "Before asking AI to help sort audit notes, you should:", options: ["Add their bank records", "Remove the business's name and private details", "Post them online", "Email them to everyone"], answer: 1, why: "Protect the client's information." },
      { objective: "O5", q: "Each recommendation should include:", options: ["Nothing else", "A guarantee of results", "A fake testimonial", "A safeguard, such as who checks AI output"], answer: 3, why: "Safeguards make AI use safe." },
      { objective: "O6", q: "A proposal should describe the client's situation:", options: ["Not at all", "In jargon", "In their own words", "Using a competitor's story"], answer: 2, why: "Their words show you listened." },
      { objective: "O6", q: "A written agreement covers:", options: ["Scope, price, payment, timeline, ownership and confidentiality", "Only your logo", "Only the start date", "Nothing"], answer: 0, why: "These prevent disputes." },
      { objective: "O6", q: "Who should review your agreement template?", options: ["Only AI", "A lawyer", "Your client's customers", "Nobody"], answer: 1, why: "Legal documents need professional review." },
      { objective: "O6", q: "For tools that hold a client's data, it is best to use:", options: ["Your personal accounts", "The client's own accounts", "A shared public account", "Any free tool"], answer: 1, why: "The client keeps control of their data." },
      { objective: "O6", q: "At the end of a project, client data should be:", options: ["Deleted or returned", "Kept forever", "Shared with other clients", "Posted online"], answer: 0, why: "Do not keep data you no longer need." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      4,
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Niche and offer",
        objective: "O1",
        notYet: "The offer is vague or has no clear client.",
        meets: "One sentence naming who, the result and how.",
        exceeds: "Uses words that clients in the niche actually use."
      },
      {
        name: "Service packages",
        objective: "O3",
        notYet: "Fewer than three packages, or prices with no math behind them.",
        meets: "Three packages with deliverables, time, client inputs and prices, math checked.",
        exceeds: "Includes checking and follow-up time and explains the value to the client."
      },
      {
        name: "AI audit",
        objective: "O5",
        notYet: "No questionnaire, or recommendations without scores or safeguards.",
        meets: "10-question questionnaire, one real audit, top three uses scored with safeguards.",
        exceeds: "Recommendations start with quick wins and show expected time saved."
      },
      {
        name: "Proposal",
        objective: "O6",
        notYet: "The proposal is generic or missing scope or price.",
        meets: "One page with the client's situation in their words, scope, price and timeline.",
        exceeds: "Includes a measurable result and how it will be checked."
      },
      {
        name: "Client data rules",
        objective: "O6",
        notYet: "No written rules, or private details went into AI.",
        meets: "Written rules: permission, client's own accounts, data deleted or returned at the end.",
        exceeds: "Also covers which AI tools may hold client data and checking their terms."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who run a pilot or paid audit with a real business within 60 days (follow-up survey)",
      "First paying consulting clients and repeat or referral clients",
      "Learners who start another Koach Learn entrepreneur course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a free AI assistant, a spreadsheet and email",
      "One real business owner (or a friend acting as one) for the audit",
      "A one-page proposal template",
      "About 60 to 75 minutes for lessons and checks, plus the audit meeting"
    ],
    facilitatorNotes: [
      "Pair learners to role-play audit interviews before they meet a real owner.",
      "Stress that pilot results and case studies must be real and shared only with written permission.",
      "Check that client names and private details are removed before notes go into AI.",
      "Point tax and agreement questions to official sources, an accountant and a lawyer.",
      "Score the starter kit with the rubric, one Not yet row at a time."
    ]
  }
};
