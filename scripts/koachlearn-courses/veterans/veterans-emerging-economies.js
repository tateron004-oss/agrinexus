"use strict";

// Koach Learn course: Veterans (military) -> "Entrepreneurship in Emerging Economies". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three
// micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Official pages checked 27 October 2026 (listed in each lesson's `sources`). See scripts/koachlearn-export.js.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "veterans-emerging-economies",
  category: "Veterans (military)",
  name: "Entrepreneurship in Emerging Economies",
  skills: "Explaining what an emerging economy is, Turning military skills into a business idea, Researching a market with AI and official guides, Writing a one-page business model, Planning for costs and risks, Finding official business help",
  outcome: "write a one-page business model for a small business in, or selling to, an emerging economy, built on your military skills, with a research plan that checks the market and the rules on official sources.",
  about: [
    "This course is for veterans who are curious about starting a business in a fast-growing economy, such as countries in Africa, South and Southeast Asia or Latin America, or about selling to customers there from the United States. Many veterans already know these places from deployments and understand logistics, security, training and working across cultures.",
    "You will learn what makes emerging economies different, turn your military skills into a business idea that solves a real problem, research the market with a free AI assistant and official government guides, and write a one-page business model. You will plan for money, risk and the law, and find free official help such as the SBA's Boots to Business.",
    "This course teaches you to plan and test an idea; it is not legal, tax or investment advice. Check rules with official sources and qualified local professionals. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write a one-page business model for one business idea in a named emerging economy: the customer, the problem, your solution and how your military skills fit, how you will reach customers, how you will earn money, your main costs and your top three risks. Add a research plan that names the official sources you will check (the country's Country Commercial Guide and its business registration agency) and one free official help program you will contact.",
  chapters: [
    {
      name: "Chapter 1: Finding the opportunity",
      lessons: [
        {
          title: "What an emerging economy is",
          minutes: 5,
          goal: "Explain what an emerging economy is and name two opportunities and two challenges.",
          text: [
            "An emerging economy is a country whose economy is growing and changing fast, moving from mostly farming or raw materials toward more industry, services and technology. Examples often named include Kenya, Nigeria, Ghana, India, Vietnam, Indonesia and Brazil.",
            "Opportunities: young, growing populations; fast phone and internet growth; mobile money, such as M-Pesa in Kenya, that lets people pay by phone; and real gaps in services such as power, transport, cold storage, training and security.",
            "Challenges: rules that change, slower paperwork, currency swings, weaker roads or power in some areas, and corruption risk. Success depends on local partners, patience and checking the facts on official sources."
          ],
          words: [["Emerging economy", "a country whose economy is growing and changing fast."], ["Mobile money", "a way to send, receive and store money on a phone, often without a bank account."], ["Currency swing", "when the value of a country's money rises or falls against other currencies."]],
          slides: [
            { title: "Emerging economy", bullets: ["Growing and changing fast", "Examples: Kenya, Nigeria, Ghana, India, Vietnam, Brazil"] },
            { title: "Opportunities", bullets: ["Young, growing populations", "Fast phone and mobile money growth", "Gaps in power, transport, storage, training"] },
            { title: "Challenges", bullets: ["Rules that change and slower paperwork", "Currency swings", "Corruption risk: local partners and facts matter"] }
          ],
          tryIt: "Pick one emerging economy you know or are curious about. Ask an AI assistant: \"In plain words, name three growing needs and three business challenges in [country].\" Mark each fact you will need to check.",
          youCanNow: "explain what an emerging economy is and name its opportunities and challenges."
        },
        {
          title: "Turning military skills into a business idea",
          minutes: 5,
          goal: "Match one of your military skills to a real local problem and write a one-sentence business idea.",
          text: [
            "The best ideas solve a real problem people will pay to fix. Start with what you know how to do. Military skills that fit emerging markets well include logistics and supply (moving and storing goods), power and generator maintenance, vehicle and equipment repair, security planning, communications and IT, medical support training, and teaching and training people.",
            "Then match a skill to a problem. Example: a former Army logistics NCO sees that small farmers lose produce before it reaches market. Idea: \"A shared cold-storage and pickup service for smallholder farmers near Nakuru, paid per crate by mobile money.\"",
            "Ask AI to brainstorm, but you choose. Prompt: \"I was a Navy electrician for 8 years. List 10 small business ideas in Ghana that use these skills to solve a local problem. One line each.\" Pick the one you can test cheaply."
          ],
          steps: ["List three military skills you are good at.", "List three real problems in your chosen country.", "Ask AI to brainstorm ideas that match them.", "Pick one idea you could test cheaply.", "Write it as one sentence: service, customer, place, how they pay."],
          words: [["Business idea", "a product or service that solves a problem for a customer who will pay."], ["Smallholder farmer", "a farmer with a small plot of land, common in many emerging economies."]],
          slides: [
            { title: "Military skills that fit", bullets: ["Logistics, supply and storage", "Power, generators, vehicles", "Security, communications, training"] },
            { title: "Skill + real problem = idea", bullets: ["Logistics NCO sees farmers losing produce", "Idea: shared cold storage, paid per crate"] },
            { title: "Write it in one sentence", bullets: ["Service", "Customer", "Place", "How they pay"] }
          ],
          tryIt: "Ask an AI assistant for ten business ideas that use your military skills in your chosen country. Pick one and write it as one sentence: service, customer, place, how they pay.",
          youCanNow: "turn a military skill into a one-sentence business idea that solves a local problem."
        },
        {
          title: "Researching the market with AI and official guides",
          minutes: 6,
          goal: "Use AI to plan market research and check key facts in the official Country Commercial Guide.",
          text: [
            "AI can help you plan research and list questions, but it can be wrong or out of date about foreign markets and laws. Use it to draft; use official sources to check.",
            "The U.S. Department of Commerce's International Trade Administration publishes Country Commercial Guides, prepared by U.S. Embassy staff, covering how a market works, opportunities, rules and business customs. Its U.S. Commercial Service also helps U.S. businesses that sell abroad with market research and contacts.",
            "To start a company in the country itself, find its official business registry. In Kenya it is the Business Registration Service (brs.go.ke); in Nigeria it is the Corporate Affairs Commission (cac.gov.ng). Read their current steps and fees yourself, and talk to five possible customers before you spend real money."
          ],
          steps: ["Ask AI: \"What 10 questions should I answer before starting [idea] in [country]?\"", "Read the country's Country Commercial Guide on trade.gov.", "Find the country's official business registry and read its current steps.", "Talk to five possible customers about the problem.", "Write down what you confirmed and what is still unknown."],
          words: [["Country Commercial Guide", "a U.S. government report on how business works in a foreign country."], ["Business registry", "the official government office where companies and business names are registered."], ["Market research", "finding out who your customers are, what they need and what they will pay."]],
          slides: [
            { title: "AI drafts, official sources check", bullets: ["AI: plan questions and research", "Official guides: confirm the facts"] },
            { title: "Country Commercial Guides", bullets: ["From the International Trade Administration", "Prepared by U.S. Embassy staff", "Market, rules, opportunities, customs"] },
            { title: "Starting in the country", bullets: ["Kenya: Business Registration Service", "Nigeria: Corporate Affairs Commission", "Read current steps and fees yourself"] },
            { title: "Talk to customers", bullets: ["Five real conversations first", "Before you spend real money"] }
          ],
          sources: [
            { name: "International Trade Administration: Country Commercial Guides", url: "https://www.trade.gov/country-commercial-guides" },
            { name: "International Trade Administration: Export solutions (U.S. Commercial Service)", url: "https://www.trade.gov/export-solutions" },
            { name: "Kenya Business Registration Service", url: "https://brs.go.ke/" },
            { name: "Nigeria Corporate Affairs Commission", url: "https://www.cac.gov.ng/" }
          ],
          tryIt: "Ask an AI assistant for the ten questions you must answer before starting your idea. Then open the Country Commercial Guide for your country on trade.gov and answer two of them from it.",
          youCanNow: "plan market research with AI and check key facts in official guides and registries."
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding the opportunity",
        questions: [
          { q: "An emerging economy is best described as:", options: ["A country whose economy is growing and changing fast", "A country with no businesses", "Any island nation", "A country with no phones"], answer: 0, why: "Emerging economies are growing and changing quickly." },
          { q: "What is mobile money?", options: ["Cash kept in a car", "Sending, receiving and storing money on a phone", "A type of credit card", "A U.S. government program"], answer: 1, why: "Services like M-Pesa let people pay by phone, often without a bank account." },
          { q: "A former logistics NCO wants a business idea. The best starting point is:", options: ["Whatever is trendy online", "The idea with the biggest price", "A skill they have matched to a real local problem", "Copying a friend's idea"], answer: 2, why: "Good ideas solve real problems people will pay to fix." },
          { q: "Who prepares the Country Commercial Guides?", options: ["An AI company", "A social media group", "Local newspapers", "U.S. Embassy staff, published by the International Trade Administration"], answer: 3, why: "The International Trade Administration publishes them, prepared by U.S. Embassy staff." },
          { q: "Where do you check the steps to register a company in Nigeria?", options: ["The Corporate Affairs Commission (CAC)", "A pop-up ad", "Only an AI chatbot", "A U.S. state website"], answer: 0, why: "The CAC is Nigeria's official company registry." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning the business",
      lessons: [
        {
          title: "Writing a one-page business model",
          minutes: 6,
          goal: "Write a one-page business model with AI help.",
          text: [
            "A one-page business model answers the key questions on one page: Who is the customer? What problem do they have? What is your solution? Why you (your skills and edge)? How will you reach customers? How will you earn money? What are your main costs?",
            "Give the AI your one-sentence idea and your notes, then ask: \"Turn this into a one-page business model with these headings: customer, problem, solution, why me, channels, revenue, costs. Keep each to two or three lines.\"",
            "Read it critically. If the AI says \"farmers will gladly pay\", ask yourself: did a farmer tell me that? Replace guesses with what you learned from real customers, and mark the rest as \"to test\"."
          ],
          steps: ["Give AI your one-sentence idea and research notes.", "Ask for a one-page model with customer, problem, solution, why me, channels, revenue and costs.", "Replace guesses with what real customers told you.", "Mark anything unproven as \"to test\"."],
          words: [["Business model", "how a business creates value for customers and earns money."], ["Revenue", "money that comes in from customers."], ["Channel", "the way you reach and sell to customers."]],
          slides: [
            { title: "One page, seven questions", bullets: ["Customer and problem", "Solution and why you", "Channels and revenue", "Costs"] },
            { title: "Let AI draft it", bullets: ["Give your idea and notes", "Ask for two or three lines per heading"] },
            { title: "Then challenge it", bullets: ["Did a real customer say that?", "Replace guesses with facts", "Mark the rest \"to test\""] }
          ],
          tryIt: "Ask an AI assistant to turn your one-sentence idea into a one-page business model with the seven headings. Mark every line that is a guess as \"to test\".",
          youCanNow: "write a one-page business model and separate facts from guesses."
        },
        {
          title: "Planning for money, risk and the law",
          minutes: 5,
          goal: "List your start-up costs, your top three risks and how you will reduce each.",
          text: [
            "List what you need to start: equipment, transport, space, registration and licenses, a local partner or staff, and enough money to run for several months before sales cover costs. Ask AI for a checklist, then get real prices locally. Do not trust AI price guesses.",
            "Common risks: currency swings (your costs and prices in different currencies), unreliable power or transport, payment delays, partners who do not deliver, theft, and changing rules. For each, write how you will reduce it: for example, price in local currency with a review every quarter, a backup generator, or a written agreement.",
            "Never pay a bribe. Beyond local laws, the U.S. Foreign Corrupt Practices Act makes it a crime for U.S. persons to offer or pay anything of value to a foreign official to win or keep business. For contracts, tax and registration, use a qualified local lawyer or accountant."
          ],
          steps: ["Ask AI for a start-up cost checklist for your idea.", "Get real local prices for each item.", "List your top three risks.", "Write one way to reduce each risk.", "Note which questions need a local lawyer or accountant."],
          words: [["Start-up costs", "the money you need before the business earns enough to pay for itself."], ["Bribe", "something of value given to an official to get an unfair advantage; illegal."], ["Foreign Corrupt Practices Act", "a U.S. law that makes bribing foreign officials to get business a crime."]],
          slides: [
            { title: "Start-up costs", bullets: ["Equipment, transport, space", "Registration, licenses, staff", "Months of running costs before sales cover them"] },
            { title: "Top risks and fixes", bullets: ["Currency swings: review prices often", "Power or transport: have a backup", "Partners: written agreements"] },
            { title: "Stay legal", bullets: ["Never pay a bribe", "U.S. FCPA makes foreign bribery a crime", "Use a qualified local lawyer or accountant"] }
          ],
          sources: [{ name: "U.S. Department of Justice: Foreign Corrupt Practices Act", url: "https://www.justice.gov/criminal/criminal-fraud/foreign-corrupt-practices-act" }],
          tryIt: "Ask an AI assistant for a start-up cost checklist for your idea. Then write your top three risks and one way to reduce each.",
          youCanNow: "plan start-up costs, name your top risks with fixes, and know the legal lines you must not cross."
        },
        {
          title: "Testing the idea and getting official help",
          minutes: 5,
          goal: "Plan a small, cheap test of your idea and choose one official help program to contact.",
          text: [
            "Before you move abroad or spend your savings, test small. Run a pilot: serve ten customers, sell a small batch, or partner with one local business for a month. Track what customers pay, what it costs you and what goes wrong. AI can help you design a simple tracking sheet.",
            "Free official help: the SBA's Boots to Business is an entrepreneurship course offered through the Transition Assistance Program for service members, National Guard, Reserve and military spouses; Boots to Business Reboot extends it to veterans of all eras. Veterans Business Outreach Centers offer workshops, mentoring and business plan help. The U.S. Commercial Service helps U.S. businesses that sell abroad.",
            "Bring your one-page model to them. A mentor who has done business abroad can save you from expensive mistakes."
          ],
          steps: ["Design a small pilot: how many customers, how long, what to measure.", "Ask AI to build a simple tracking sheet: sales, costs, problems.", "Pick one official help program.", "Contact it and bring your one-page model."],
          words: [["Pilot", "a small, short test of a business idea before you go all in."], ["Boots to Business", "a free SBA entrepreneurship course for service members, veterans and military spouses."], ["Veterans Business Outreach Center", "an SBA-supported center that gives veterans business training and mentoring."]],
          slides: [
            { title: "Test small first", bullets: ["Ten customers, one batch or one month", "Track sales, costs and problems", "AI can build the tracking sheet"] },
            { title: "Free official help", bullets: ["SBA Boots to Business and Reboot", "Veterans Business Outreach Centers", "U.S. Commercial Service for selling abroad"] },
            { title: "Bring your one-page model", bullets: ["Ask for a mentor who has done it", "Learn before you spend big"] }
          ],
          sources: [
            { name: "SBA: Boots to Business", url: "https://www.sba.gov/sba-learning-platform/boots-business" },
            { name: "SBA: Veteran-owned businesses (VBOCs, Boots to Business Reboot)", url: "https://www.sba.gov/business-guide/grow-your-business/veteran-owned-businesses" },
            { name: "International Trade Administration: Export solutions", url: "https://www.trade.gov/export-solutions" }
          ],
          tryIt: "Final task: finish your one-page business model with customer, problem, solution and military-skill fit, channels, revenue, costs and top three risks. Add a research plan naming the Country Commercial Guide, the country's business registry and one official help program you will contact.",
          youCanNow: "plan a small test of your business idea and get free official help to build it."
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning the business",
        questions: [
          { q: "Which is part of a one-page business model?", options: ["Your favorite color", "Customer, problem and how you earn money", "Your military awards list", "Your bank password"], answer: 1, why: "The model answers who, what problem, what solution and how you earn money." },
          { q: "The AI's model says customers \"will gladly pay\". No customer told you that. You:", options: ["Keep it as a fact", "Delete the whole model", "Mark it \"to test\" and ask real customers", "Double the price"], answer: 2, why: "Guesses must be tested with real customers." },
          { q: "Where should your start-up prices come from?", options: ["AI guesses", "A friend's guess", "Last year's news", "Real quotes from local suppliers"], answer: 3, why: "AI price guesses can be far off; get real local prices." },
          { q: "An official hints that a payment would speed up your license. You:", options: ["Refuse; bribery is illegal, including under the U.S. FCPA", "Pay a small amount", "Pay through a friend", "Ask AI how to hide it"], answer: 0, why: "The FCPA makes paying foreign officials for business a crime for U.S. persons." },
          { q: "Which free SBA program teaches entrepreneurship to transitioning service members?", options: ["VET TEC 2.0", "Boots to Business", "TRICARE", "The Military Crosswalk"], answer: 1, why: "Boots to Business is the SBA's entrepreneurship course in TAP." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Entrepreneurship in Emerging Economies",
    questions: [
      { q: "Which is an opportunity common in emerging economies?", options: ["Shrinking populations", "Fast phone and mobile money growth", "No need for services", "Fixed, unchanging rules"], answer: 1, why: "Phone and mobile money growth open new ways to reach customers." },
      { q: "Which is a common challenge in emerging economies?", options: ["Too few customers everywhere", "No phones at all", "Currency swings and changing rules", "No young people"], answer: 2, why: "Currency swings and changing rules are common risks." },
      { q: "M-Pesa in Kenya is an example of:", options: ["A bank robbery", "A government registry", "A military unit", "Mobile money"], answer: 3, why: "M-Pesa lets people pay and store money by phone." },
      { q: "A strong business idea:", options: ["Solves a real problem people will pay to fix", "Copies whatever is trending", "Has no customers", "Needs no testing"], answer: 0, why: "Customers pay to solve real problems." },
      { q: "Which military skill often fits emerging markets?", options: ["None of them", "Logistics, supply and storage", "Only marching", "Only paperwork"], answer: 1, why: "Moving and storing goods is a common gap." },
      { q: "A one-sentence business idea should include:", options: ["Your rank", "Your SSN", "Service, customer, place and how they pay", "Only the price"], answer: 2, why: "Those four parts make the idea clear." },
      { q: "When AI brainstorms business ideas for you, who chooses?", options: ["The AI", "A stranger online", "The first idea on the list", "You"], answer: 3, why: "AI suggests; you decide based on your skills and the market." },
      { q: "What should you use AI for in market research?", options: ["Planning questions and drafting, then checking facts on official sources", "Final legal answers", "Exact local prices", "Registering your company"], answer: 0, why: "AI drafts; official sources and real customers confirm." },
      { q: "Country Commercial Guides are published by:", options: ["A private blog", "The International Trade Administration", "The VA", "An AI company"], answer: 1, why: "They come from the U.S. Department of Commerce's International Trade Administration." },
      { q: "Kenya's official office for registering a business is:", options: ["The VA", "The SBA", "The Business Registration Service", "The Corporate Affairs Commission"], answer: 2, why: "Kenya's Business Registration Service handles company registration." },
      { q: "Before spending real money, you should talk to:", options: ["No one", "Only family", "Only the AI", "At least five possible customers"], answer: 3, why: "Real customers tell you whether the problem and price are real." },
      { q: "Revenue is:", options: ["Money that comes in from customers", "Money you spend on rent", "A type of loan", "A tax form"], answer: 0, why: "Revenue is income from sales." },
      { q: "A \"channel\" in a business model is:", options: ["A TV station", "The way you reach and sell to customers", "A river", "A bank account"], answer: 1, why: "Channels are how customers find and buy from you." },
      { q: "Lines in your model that no customer has confirmed should be:", options: ["Deleted", "Made bigger", "Marked \"to test\"", "Treated as facts"], answer: 2, why: "Unproven guesses need testing." },
      { q: "Start-up costs include:", options: ["Only the first sale", "Only your phone bill", "Nothing; businesses are free", "Equipment, registration, staff and months of running costs"], answer: 3, why: "You need money to run until sales cover costs." },
      { q: "One way to reduce currency risk is to:", options: ["Review your prices often", "Ignore exchange rates", "Keep all prices fixed forever", "Pay in gift cards"], answer: 0, why: "Regular price reviews help you keep up with currency swings." },
      { q: "The U.S. Foreign Corrupt Practices Act makes it a crime to:", options: ["Start a business abroad", "Pay a foreign official to win or keep business", "Use mobile money", "Hire local staff"], answer: 1, why: "The FCPA bans bribing foreign officials for business." },
      { q: "For contracts, tax and registration questions you should use:", options: ["Only AI", "A social media poll", "A qualified local lawyer or accountant", "Guesswork"], answer: 2, why: "Legal and tax rules need a qualified professional." },
      { q: "A pilot is:", options: ["Moving abroad with your savings", "A loan", "A government form", "A small, short test of your idea"], answer: 3, why: "A pilot tests the idea before you go all in." },
      { q: "Boots to Business Reboot extends the SBA course to:", options: ["Veterans of all eras", "Only active-duty officers", "Only foreign citizens", "No one"], answer: 0, why: "The SBA says Reboot extends Boots to Business to veterans of all eras." }
    ]
  }
};
