"use strict";

// Koach Learn course (shared, bonus): "AI Entrepreneurship Pathways". Categories: Re-Entry, Undeserved Community. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// From idea to a launch-ready business plan. The quick first-dollar course is ai-entrepreneurship-side-hustles.

module.exports = {
  id: "ai-entrepreneurship-pathways",
  category: "Re-Entry",
  name: "AI Entrepreneurship Pathways",
  skills: "Choosing a business path, Building a lean business plan with AI, Testing the idea with customers, Understanding business structures and registration, Finding funding and avoiding grant scams, Building a 90-day launch roadmap",
  outcome: "turn a business idea into a launch-ready plan with AI help: a one-page lean business plan, evidence from real customers, a list of the registrations and licenses to check, a realistic funding and free-help list, and a 90-day launch roadmap.",
  about: [
    "Owning a business can build income, independence and wealth for your family and community. It can also be a path when job doors are hard to open, for example after prison or in a neighborhood with few employers. It takes planning, and AI tools can make planning faster and less lonely.",
    "This course is for people coming home and for members of underserved communities who want to go beyond a side hustle: a food business, a cleaning or landscaping company, a barbershop, an online store, a trucking company or a community service.",
    "You will use free AI assistants such as ChatGPT, Microsoft Copilot or Google Gemini, and official free resources from the U.S. Small Business Administration (SBA) and the IRS. Each lesson is about five minutes with a \"Try it now\" task, a knowledge check after each chapter and a 20-question quiz at the end. This course is not legal or tax advice; check official sources and free business counselors."
  ],
  finalTask: "Create a business launch packet for your idea: a one-page lean business plan covering all nine parts, notes from at least ten customer conversations, a list of the business structure, registrations, licenses and tax ID steps you will check (with the official websites), a funding and free-help list with at least three real local or national options, and a 90-day launch roadmap with dates.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People coming home from prison and members of underserved communities who want to start a real business: a food business, cleaning or landscaping company, barbershop, online store, trucking company or community service.",
    startingPoint: "Have a business idea, a skill or a side hustle, and can use a phone. Most have not written a business plan, talked to customers in a structured way, registered a business or looked for startup funding.",
    gap: "Many new businesses fail from weak planning, untested ideas, missed registrations or funding scams. Learners need a launch-ready plan built with AI help and checked against official sources, so they can start legally, avoid scams and build income for their families.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or a library or program computer",
      "Rules, fees and licenses differ by state and city; learners confirm them on official sites (SBA, IRS, state and local)",
      "Not legal or tax advice; learners use free business counselors and official sources",
      "People on parole or probation check their conditions before choosing a business"
    ],
    prerequisites: "None. Learners new to AI tools can take \"Introduction to AI and Digital Confidence\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your money, hours, skills and limits", action: "compare two or three business paths and choose the one that fits", standard: "writing at least one reason for your choice" },
    { id: "O2", condition: "With AI interviewing you", action: "write a one-page lean business plan that covers all nine parts", standard: "with every guessed number marked to check" },
    { id: "O3", condition: "With a list of three customer questions", action: "interview possible customers and use what they say to change your plan", standard: "talking to at least ten people and changing at least one part of the plan" },
    { id: "O4", condition: "For your business", action: "list the structure, name registration, licenses, permits and tax ID steps, with the official website for each", standard: "with every step linked to an official source" },
    { id: "O5", condition: "Given your startup costs", action: "build a funding plan and a free-help list, and spot funding scams", standard: "with at least three real options and no up-front-fee offers" },
    { id: "O6", condition: "Using your plan and checklist", action: "create a 90-day launch roadmap with dates for setup, testing and launch", standard: "with a date for every step and an accountability partner named" }
  ],
  chapters: [
    {
      name: "Chapter 1: From idea to plan",
      lessons: [
        {
          objectives: ["O1"],
          title: "Choosing your business path",
          minutes: 5,
          goal: "Compare business paths and choose the one that fits your goals and situation.",
          text: [
            "There is more than one road to owning a business. A side hustle earns extra money with little setup. A small service business (cleaning, lawn care, hauling) grows with customers and crews. A product business (food, crafts, clothing) needs supplies and selling space. An online business sells through a website or marketplace. Some people buy into a franchise or join with others in a cooperative.",
            "Match the path to your life: how much money you can risk, how many hours you have, your skills, transportation, any licensing rules, and for people on supervision, your parole or probation conditions.",
            "Ask AI to compare: \"I have $500, 20 hours a week, cooking skills and no car. Compare a meal-prep business, catering help and selling baked goods at markets: startup cost, time to first sale, licenses to check and risks.\" Then verify the license and cost parts with official sources."
          ],
          steps: ["List your money, hours, skills and limits.", "List two or three business ideas.", "Ask AI to compare startup cost, time to first sale, licenses and risks.", "Verify licenses and costs with official sources.", "Pick one path to plan."],
          words: [["Entrepreneur", "a person who starts and runs a business."], ["Franchise", "a business you buy into that uses another company's brand and system."], ["Cooperative", "a business owned and run by its members."]],
          slides: [
            { title: "Many paths", bullets: ["Side hustle or service business", "Product or online business", "Franchise or cooperative"] },
            { title: "Match it to your life", bullets: ["Money, hours, skills, transport", "Licenses and supervision conditions"] },
            { title: "Compare with AI", bullets: ["Startup cost and time to first sale", "Licenses and risks", "Verify with official sources"] }
          ],
          tryIt: "Write your money, hours, skills and limits. Ask AI to compare two or three ideas, then choose one path and write why.",
          youCanNow: "compare business paths and choose one that fits your life.",
          quickCheck: [
            { objective: "O1", q: "What is a franchise?", options: ["A business owned by its members", "A business you buy into that uses another company's brand and system", "A loan for small businesses", "A free business counselor"], answer: 1, why: "A franchise uses another company's brand and system for a fee." },
            { objective: "O1", q: "You have little money and evenings free. AI suggests opening a restaurant. What would you do?", options: ["Open the restaurant because AI said so", "Give up on business", "Compare it with lower-cost paths that fit your money and hours", "Borrow as much as you can"], answer: 2, why: "Choose the path that fits your real money, time and skills." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building a lean business plan with AI",
          minutes: 6,
          goal: "Write a one-page lean business plan covering all nine parts.",
          text: [
            "The SBA describes two kinds of business plans: a long traditional plan that lenders often ask for, and a lean startup plan that fits on one page. Start lean.",
            "The SBA's lean plan has nine parts: key partnerships, key activities, key resources, value proposition (why customers choose you), customer relationships, customer segments (who your customers are), channels (how you reach them), cost structure and revenue streams.",
            "Ask AI to help: \"Help me fill out a lean business plan with these nine parts for my mobile car detailing business in [city]. Ask me questions one at a time.\" Answer with real facts. Then check AI's cost guesses against real prices you look up."
          ],
          steps: ["Open a one-page template with nine boxes.", "Ask AI to interview you one question at a time for each part.", "Fill in each box with real facts.", "Check costs and prices against real quotes.", "Keep it to one page."],
          words: [["Lean business plan", "a one-page plan covering the key parts of a business."], ["Value proposition", "why customers should choose you."], ["Revenue stream", "a way the business earns money."]],
          slides: [
            { title: "Two kinds of plans (SBA)", bullets: ["Traditional: long, for lenders", "Lean: one page; start here"] },
            { title: "Nine parts", bullets: ["Partnerships, activities, resources", "Value proposition, relationships, segments", "Channels, costs, revenue"] },
            { title: "AI as your interviewer", bullets: ["One question at a time", "Answer with real facts", "Check costs against real prices"] }
          ],
          sources: [{ name: "SBA: Write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Fill out a one-page lean plan for your chosen business with AI interviewing you. Mark any part where you need to look up real numbers.",
          youCanNow: "write a one-page lean business plan with AI help.",
          quickCheck: [
            { objective: "O2", q: "What does \"revenue streams\" mean in a lean plan?", options: ["How the business makes money", "Who your customers are", "How you reach customers", "Your business name"], answer: 0, why: "Revenue streams are the ways money comes in." },
            { objective: "O2", q: "AI fills in your monthly rent cost with a guess. What would you do?", options: ["Leave it; AI is usually right", "Delete the cost line", "Double the number to be safe", "Mark it and look up the real price"], answer: 3, why: "Guessed numbers must be checked against real prices." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Testing the idea with real customers",
          minutes: 5,
          goal: "Talk to ten possible customers and use what they say to improve the plan.",
          text: [
            "A plan is a guess until customers prove it. Talk to at least ten people who match your customer segment. Ask about their problem, not your idea: \"How do you get your car cleaned now? What do you pay? What annoys you about it?\"",
            "Then test buying: offer a pre-order, a starter price or a sign-up list. People saying \"great idea\" is nice; people paying or signing up is proof.",
            "Paste your notes (no names or phone numbers) into AI and ask: \"Summarize what these ten customers said. What patterns do you see, and what should I change in my plan?\" Update the lean plan with what you learned."
          ],
          steps: ["Write three questions about the customer's problem.", "Talk to at least ten possible customers.", "Offer a pre-order, starter price or sign-up list.", "Ask AI to find patterns in your notes, with names removed.", "Update the lean plan."],
          words: [["Customer segment", "a group of customers with similar needs."], ["Validate", "prove with real evidence that customers want something."], ["Pre-order", "a customer agrees to buy before the product or service is ready."]],
          slides: [
            { title: "Ask about their problem", bullets: ["How do they solve it now?", "What do they pay?", "What annoys them?"] },
            { title: "Test buying", bullets: ["Pre-orders or sign-ups", "Paying beats \"great idea\""] },
            { title: "Learn and adjust", bullets: ["AI finds patterns in notes", "Remove names first", "Update your plan"] }
          ],
          tryIt: "Talk to at least five possible customers this week using your three questions. Have AI summarize the patterns and change one part of your lean plan.",
          youCanNow: "test a business idea with real customers and improve the plan.",
          quickCheck: [
            { objective: "O3", q: "What is the best question for a customer interview?", options: ["\"Would you buy my great product?\"", "\"How do you handle this problem now?\"", "\"Do you like my logo?\"", "\"Can you lend me money?\""], answer: 1, why: "Asking about their problem and what they do now gives honest evidence." },
            { objective: "O3", q: "Eight of ten people say they would never pay for your service. What would you do?", options: ["Ignore them and launch anyway", "Ask AI to say they are wrong", "Stop talking to customers", "Change the plan, such as the price, the service or the customer"], answer: 3, why: "Customer evidence is meant to change the plan before you spend money." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: From idea to plan",
        questions: [
          { objective: "O1", q: "What is a cooperative?", options: ["A government office", "A loan", "A business owned and run by its members", "A type of license"], answer: 2, why: "Members own and run cooperatives." },
          { objective: "O4", q: "AI says your food business needs no permits. What should you do?", options: ["Verify with official city, county or state sources", "Trust it and start", "Ask a friend only", "Ignore permits"], answer: 0, why: "Licensing rules must be checked with official sources." },
          { objective: "O2", q: "How many parts does the SBA's lean startup plan have?", options: ["Two", "Fifty", "One", "Nine"], answer: 3, why: "The SBA lists nine components." },
          { objective: "O2", q: "What is a value proposition?", options: ["Your bank balance", "Why customers should choose you", "Your tax ID", "Your address"], answer: 1, why: "It explains your unique value." },
          { objective: "O3", q: "Which is the strongest proof customers want your idea?", options: ["They say \"great idea\"", "They pre-order or sign up", "Your family likes it", "AI likes it"], answer: 1, why: "Action is stronger than compliments." }
        ]
      }
    },
    {
      name: "Chapter 2: Setting up, funding and launching",
      lessons: [
        {
          objectives: ["O4"],
          title: "Business structure, registration and tax ID basics",
          minutes: 6,
          goal: "List the setup steps your business needs and the official places to check them.",
          text: [
            "Common U.S. business structures: a sole proprietorship (you and the business are the same; simplest), an LLC (limited liability company; can separate business debts from personal ones, with state fees and paperwork), and corporations. Nonprofits are a separate path. Ask AI to explain the differences, then choose with help from a free business counselor or professional.",
            "Setup often includes: registering a business name with your state or county, getting city or county business licenses, special permits (food, childcare, trucking, cosmetology and others), and a tax ID. The IRS says an Employer Identification Number (EIN) is free when you apply with the IRS; beware of websites that charge for it.",
            "Rules and fees differ by state and city, so make a checklist and confirm each item on official sites: your Secretary of State, your city or county, your state tax agency and irs.gov. Some licenses consider criminal records; the licensing agency explains its rules."
          ],
          steps: ["Ask AI to explain sole proprietorship vs LLC for your situation.", "Confirm your choice with a free counselor or professional.", "List name registration, licenses and permits to check.", "Find each on official state, county and city sites.", "Apply for an EIN for free at irs.gov if you need one."],
          words: [["Sole proprietorship", "a business owned by one person with no separate legal entity."], ["LLC", "limited liability company: a business structure that can separate business and personal debts."], ["Secretary of State", "the state office that often handles business registrations."]],
          slides: [
            { title: "Common structures", bullets: ["Sole proprietorship: simplest", "LLC: separates business debts; fees and paperwork", "Get help choosing"] },
            { title: "Setup checklist", bullets: ["Business name registration", "City or county license; special permits", "Tax ID (EIN)"] },
            { title: "Check official sites", bullets: ["Secretary of State, city, county", "State tax agency and irs.gov", "EIN is free from the IRS"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }],
          tryIt: "Make a setup checklist for your business: structure, name registration, licenses, permits and EIN. Next to each, write the official website where you will confirm it.",
          youCanNow: "list the setup steps a business needs and where to confirm each one.",
          quickCheck: [
            { objective: "O4", q: "What is an EIN?", options: ["A business license from the city", "A type of business loan", "A tax ID number for a business from the IRS", "A business bank account"], answer: 2, why: "An EIN is the IRS tax ID number for a business." },
            { objective: "O4", q: "A friend says you do not need a permit for a home food business. What would you do?", options: ["Check with your city, county or state health office", "Trust your friend", "Ask AI and trust its answer", "Start selling and wait to see"], answer: 0, why: "Permit rules differ by place, so confirm with the official office." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Funding your start and finding free help",
          minutes: 6,
          goal: "Build a realistic funding plan and a list of free help, and avoid funding scams.",
          text: [
            "Most small businesses start with personal savings, early sales and help from family or community. Start as small as you can and grow with sales. Ask AI to help you list startup costs and find ways to cut them, such as renting equipment or using a shared kitchen.",
            "If you need a loan, look at mission lenders. The SBA's microloan program provides loans up to $50,000 through nonprofit, community-based lenders; the SBA says the average is about $13,000 and the longest term is seven years. Community development financial institutions (CDFIs) and local loan funds also serve people banks often turn away. Grants exist but are usually competitive and specific.",
            "Free help: the SBA points to Small Business Development Centers, SCORE mentors, Women's Business Centers and Veterans Business Outreach Centers for free or low-cost counseling. Beware of anyone who promises guaranteed grants or loans for an upfront fee: that is a common scam."
          ],
          steps: ["List startup costs and cut where you can.", "Plan to start small and grow with sales.", "Look up SBA microloan lenders and CDFIs near you.", "Find your nearest SBDC, SCORE or other SBA partner.", "Never pay upfront fees for \"guaranteed\" grants or loans."],
          words: [["Microloan", "a small business loan, often from a community lender."], ["CDFI", "community development financial institution: a lender focused on underserved communities."], ["Grant", "money you do not pay back, usually given for a specific purpose."]],
          slides: [
            { title: "Start small", bullets: ["Savings and early sales", "Cut costs: rent, share, borrow equipment"] },
            { title: "Mission lenders", bullets: ["SBA microloans: up to $50,000, avg about $13,000", "Through nonprofit community lenders", "CDFIs and local loan funds"] },
            { title: "Free help and scams", bullets: ["SBDC, SCORE, Women's Business Centers, VBOCs", "No upfront fees for \"guaranteed\" grants"] }
          ],
          sources: [{ name: "SBA: Microloans", url: "https://www.sba.gov/funding-programs/loans/microloans" }, { name: "SBA: Local assistance", url: "https://www.sba.gov/local-assistance" }],
          tryIt: "List your startup costs and cut at least one. Then find two real funding options and one free counseling center near you (or online) and write how to contact them.",
          youCanNow: "make a realistic funding plan, find free help and spot funding scams.",
          quickCheck: [
            { objective: "O5", q: "What is a CDFI?", options: ["A government tax form", "A lender focused on underserved communities", "A type of franchise", "A business license"], answer: 1, why: "CDFIs are lenders that focus on underserved communities." },
            { objective: "O5", q: "An online ad promises a guaranteed grant if you pay a fee first. What would you do?", options: ["Pay the fee quickly before it is gone", "Send your bank details to check", "Treat it as a likely scam and do not pay", "Ask for a smaller fee"], answer: 2, why: "Real grants do not ask for an up-front fee to guarantee money." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Building your 90-day launch roadmap",
          minutes: 5,
          goal: "Turn your plan into a 90-day launch roadmap with dates.",
          text: [
            "A roadmap turns the plan into action. Split 90 days into three parts. Days 1-30: set up (structure, registrations, licenses, bank account, basic tools). Days 31-60: prepare and pre-sell (supplies, pricing, marketing, first customers lined up). Days 61-90: launch and learn (first sales, customer feedback, money tracking, adjust).",
            "Ask AI: \"Turn my lean plan and setup checklist into a 90-day launch roadmap table with week, task and done-by date. I have 20 hours a week.\" Then make it real: move dates to fit your life and add buffer time for slow government offices.",
            "Pick one weekly check-in time to review the roadmap, and share it with someone who will hold you accountable, like a mentor, counselor or friend. Celebrate the first sale."
          ],
          steps: ["Days 1-30: setup tasks.", "Days 31-60: prepare and pre-sell.", "Days 61-90: launch, track money and learn.", "Ask AI to draft the table, then adjust the dates.", "Set a weekly check-in and an accountability partner."],
          words: [["Roadmap", "a plan that shows steps in order with dates."], ["Accountability partner", "someone who checks on your progress and encourages you."]],
          slides: [
            { title: "Three 30-day parts", bullets: ["1-30: set up", "31-60: prepare and pre-sell", "61-90: launch and learn"] },
            { title: "AI drafts, you adjust", bullets: ["Week, task, done-by date", "Fit your real hours", "Add buffer for slow offices"] },
            { title: "Stay on track", bullets: ["Weekly check-in", "An accountability partner", "Celebrate the first sale"] }
          ],
          tryIt: "Final task: build your 90-day launch roadmap with AI and adjust it. Add it to your lean plan, customer notes, setup checklist and funding and help list to complete your business launch packet.",
          youCanNow: "turn a business idea into a launch-ready plan and a 90-day roadmap.",
          quickCheck: [
            { objective: "O6", q: "What is the focus of days 31 to 60 in a 90-day roadmap?", options: ["Retiring from the business", "Selling the business", "Only paperwork", "Testing with first customers and improving"], answer: 3, why: "The middle month is for testing and improving before full launch." },
            { objective: "O6", q: "You keep missing roadmap dates. What would you do?", options: ["Ask an accountability partner to check your progress each week", "Delete the roadmap", "Remove all the dates", "Start a different business"], answer: 0, why: "An accountability partner helps you keep going and adjust the plan." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Setting up, funding and launching",
        questions: [
          { objective: "O4", q: "A website charges $250 to get you an EIN. According to the IRS:", options: ["That is the official fee", "EINs cost $1,000", "Only lawyers can get them", "EINs are free from the IRS; beware of sites that charge"], answer: 3, why: "The IRS says an EIN is free." },
          { objective: "O5", q: "What is the maximum SBA microloan, per the SBA?", options: ["$50,000", "$5 million", "$500", "There is no maximum"], answer: 0, why: "The SBA says microloans go up to $50,000." },
          { objective: "O5", q: "A caller promises you a guaranteed business grant if you pay a $300 fee first. This is:", options: ["A normal grant process", "An SBA requirement", "A common scam", "A tax"], answer: 2, why: "Real grants do not require upfront fees for a guarantee." },
          { objective: "O5", q: "Which offers free or low-cost business counseling, per the SBA?", options: ["Payday lenders", "Social media ads", "Pawn shops", "Small Business Development Centers and SCORE"], answer: 3, why: "They are SBA resource partners." },
          { objective: "O6", q: "In the 90-day roadmap, what happens in days 1-30?", options: ["Launch party only", "Nothing", "Setup: registrations, licenses, bank account, tools", "Selling the business"], answer: 2, why: "Setup comes first." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Entrepreneurship Pathways",
    questions: [
      { objective: "O1", q: "An entrepreneur is:", options: ["A government worker", "A person who starts and runs a business", "A bank", "A type of loan"], answer: 1, why: "Entrepreneurs start businesses." },
      { objective: "O1", q: "A franchise is:", options: ["A business you buy into that uses another company's brand and system", "A free grant", "A tax form", "A cooperative"], answer: 0, why: "Franchises use an existing brand." },
      { objective: "O1", q: "When choosing a path, people on supervision should also check:", options: ["Their favorite color", "Nothing else", "Their parole or probation conditions", "A competitor's prices only"], answer: 2, why: "Conditions can limit some business activities." },
      { objective: "O2", q: "Which kind of plan does the SBA describe as one page?", options: ["Lean startup plan", "Traditional plan", "Tax return", "Loan application"], answer: 0, why: "The lean plan is a one-page chart." },
      { objective: "O2", q: "\"Customer segments\" in a lean plan means:", options: ["Your costs", "Your partners", "Your bank", "Who your customers are"], answer: 3, why: "Segments are groups of customers." },
      { objective: "O2", q: "\"Channels\" in a lean plan means:", options: ["TV stations only", "How you reach customers", "Your suppliers", "Your taxes"], answer: 1, why: "Channels are how you reach and sell to customers." },
      { objective: "O2", q: "AI guesses your equipment will cost $200. You should:", options: ["Use the guess", "Check real prices before trusting it", "Double it without checking", "Skip the cost"], answer: 1, why: "Real quotes beat AI guesses." },
      { objective: "O3", q: "When interviewing customers, ask about:", options: ["Whether they love your idea", "Their passwords", "Their income tax", "Their problem and how they solve it now"], answer: 3, why: "Problem questions give honest answers." },
      { objective: "O3", q: "Before pasting customer notes into AI, remove:", options: ["Names and phone numbers", "The patterns", "Your questions", "Nothing"], answer: 0, why: "Protect customers' privacy." },
      { objective: "O3", q: "To validate an idea means to:", options: ["Get a parking ticket stamped", "Register with the state", "Prove with real evidence that customers want it", "Pay taxes"], answer: 2, why: "Validation is evidence from customers." },
      { objective: "O4", q: "A sole proprietorship is:", options: ["A large corporation", "A nonprofit", "A government agency", "A business owned by one person with no separate legal entity"], answer: 3, why: "It is the simplest structure." },
      { objective: "O4", q: "An LLC can help:", options: ["Avoid all taxes", "Skip licenses", "Separate business debts from personal ones", "Guarantee profit"], answer: 2, why: "Limited liability is the main feature." },
      { objective: "O4", q: "Where do you often register a business name?", options: ["A social media page", "Your state, often the Secretary of State, or your county", "A bank only", "Nowhere"], answer: 1, why: "Registration is handled by state or local offices." },
      { objective: "O4", q: "Rules and fees for business setup:", options: ["Differ by state and city, so confirm on official sites", "Are the same everywhere", "Never change", "Are set by AI"], answer: 0, why: "Local rules vary." },
      { objective: "O5", q: "The SBA says microloans are made through:", options: ["Payday lenders", "Social media", "Nonprofit, community-based intermediary lenders", "The IRS"], answer: 2, why: "SBA funds intermediaries who make the loans." },
      { objective: "O5", q: "A CDFI is:", options: ["A lender focused on underserved communities", "A tax form", "A business license", "A credit card"], answer: 0, why: "CDFIs serve people banks often miss." },
      { objective: "O5", q: "Most small businesses start with:", options: ["Large guaranteed grants", "Venture capital", "Lottery wins", "Savings, early sales and community help"], answer: 3, why: "Starting small with sales is most common." },
      { objective: "O5", q: "SCORE offers:", options: ["Payday loans", "Mentoring for small business owners", "Business licenses", "Tax IDs"], answer: 1, why: "SCORE is an SBA mentoring partner." },
      { objective: "O6", q: "Days 61-90 of the roadmap focus on:", options: ["Choosing a path", "Launch, first sales, feedback and money tracking", "Setup paperwork", "Closing the business"], answer: 1, why: "The last part is launch and learn." },
      { objective: "O6", q: "An accountability partner:", options: ["Does your work for you", "Lends you money", "Files your taxes", "Checks on your progress and encourages you"], answer: 3, why: "Accountability helps you follow through." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      2,
      4,
      6,
      9,
      11,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Lean business plan",
        objective: "O2",
        notYet: "Parts are missing, or guessed numbers are treated as facts.",
        meets: "One page covering all nine parts, with guessed numbers marked or checked.",
        exceeds: "Real prices are filled in and the plan reflects customer feedback."
      },
      {
        name: "Customer evidence",
        objective: "O3",
        notYet: "Fewer than ten conversations, or no change to the plan.",
        meets: "Notes from at least ten conversations and at least one change to the plan.",
        exceeds: "Has stronger proof such as pre-orders or sign-ups."
      },
      {
        name: "Setup checklist",
        objective: "O4",
        notYet: "Steps are missing or have no official source.",
        meets: "Structure, registrations, licenses, permits and EIN listed, each with an official website.",
        exceeds: "Notes which steps cost money and which office to call with questions."
      },
      {
        name: "Funding and free help",
        objective: "O5",
        notYet: "Fewer than three real options, or includes an up-front-fee offer.",
        meets: "At least three real funding or free-help options with how to contact them.",
        exceeds: "Startup costs are cut and an appointment with a counselor is booked."
      },
      {
        name: "90-day roadmap",
        objective: "O6",
        notYet: "No dates, or steps are out of order.",
        meets: "Setup, testing and launch steps with a date for each.",
        exceeds: "Names an accountability partner and weekly check-ins."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who register a business or get an EIN within 90 days (follow-up survey)",
      "Learners who make their first sale within 90 days",
      "Learners who meet with SCORE, a Small Business Development Center or another free counselor within 30 days",
      "Learners who report avoiding a funding or grant scam"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini",
      "Official sites: sba.gov, irs.gov and your state and city business pages",
      "Paper, a notebook or a free document for the launch packet",
      "About 60 minutes for lessons and checks, plus a week to talk with customers"
    ],
    facilitatorNotes: [
      "Give learners a week between Chapter 1 and Chapter 2 to hold their customer conversations.",
      "Remind learners this is not legal or tax advice; connect them with SCORE, a Small Business Development Center or a local business center.",
      "Warn about funding scams: real grants and EINs never require an up-front fee to a third party.",
      "Remind learners on parole or probation to check their conditions before choosing a business.",
      "Score the launch packet with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
