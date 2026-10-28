"use strict";

// Koach Learn course: Re-Entry -> "How to Set Up and Start a Small Business". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// US facts checked 27 October 2026 on sba.gov and irs.gov: EIN is free from the IRS ("You never have to pay a fee for an EIN"), issued online right away, one session, one per responsible party per day;
// a sole proprietorship forms automatically; a DBA is usually registered with the state, county or city; licenses come from federal, state and local offices; SCORE mentoring is at no cost; Women's Business Centers
// are free to low cost; self-employed people file if net earnings are $400 or more and use Schedule C, Schedule SE and Form 1040-ES (quarterly estimated tax); SBA's lean startup plan has nine parts;
// banks commonly ask for an EIN (or SSN for a sole proprietor), formation documents and a business license. State and local rules differ: students are told where to check, not given fees.

module.exports = {
  id: "reentry-start-small-business",
  category: "Re-Entry",
  name: "How to Set Up and Start a Small Business",
  skills: "Choosing a business you can start now, Finding customers and setting a price, Writing a one-page business plan with AI, Choosing a business structure and name, Getting a free EIN and the right licenses, Keeping records and planning for taxes",
  outcome: "write a one-page business plan for a simple service business with AI help, and make a setup checklist with the official US steps: business structure and name, a free EIN from the IRS, the licenses your city, county and state require, a separate bank account, and records for taxes.",
  about: [
    "Many people coming home choose to work for themselves: cleaning, lawn care, moving help, detailing cars, barbering, cooking, painting, handyman work and more. Owning a business can give you income, independence and a future, even when some employers are slow to hire.",
    "In Chapter 1 you will pick a business idea that fits your skills, work out who your customers are and what to charge, and write a one-page plan with an AI assistant. In Chapter 2 you will learn the official setup steps in the United States: business structure, name, a free EIN from the IRS, licenses, a bank account, records and taxes, and where to get free help.",
    "Rules differ by state, county and city, and they change. This course gives you the steps and the official places to check, such as sba.gov and irs.gov; it is not legal or tax advice. Never type your Social Security number, case details or bank details into AI. Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page business plan for a simple service business with AI help (service, customers, price, how customers will find you, startup costs). Then make your setup checklist: your business structure, your business name and whether it needs a DBA, getting a free EIN at irs.gov, the licenses to check with your city, county and state, opening a separate bank account, and how you will keep records and set money aside for taxes. Include the official website for each step.",
  chapters: [
    {
      name: "Chapter 1: Planning your business",
      lessons: [
        {
          title: "Choosing a business you can start now",
          minutes: 5,
          goal: "Choose a business idea that fits your skills, money and situation.",
          text: [
            "The best first business is often simple: a service you already know how to do, that needs little money to start, and that people in your area pay for. Examples: house or office cleaning, lawn care, pressure washing, junk hauling, moving help, car detailing, painting, cooking, hair, sewing or repairs.",
            "Ask an AI assistant to help you think: \"I learned cooking and cleaning skills and I have about $300 to start. I do not have a car yet. Suggest five small service businesses I could start in my city, with what each needs to begin.\"",
            "Some jobs need a state license, such as barbering, cosmetology, electrical or contracting work, and some licensing boards have rules about people with records. Before you choose one of these, check your state licensing board's official website or ask a reentry program. Many states have changed these rules, so do not assume you are blocked."
          ],
          steps: ["List your skills and what you enjoy.", "Note your startup money and tools, such as a car.", "Ask AI for a few matching business ideas.", "Check whether an idea needs a state license.", "Pick one idea to plan."],
          words: [["Service business", "a business that does work for people, such as cleaning or repairs, instead of selling products."], ["Startup costs", "the money you need to begin, such as tools and supplies."], ["Licensing board", "the state office that gives licenses for some jobs."]],
          slides: [
            { title: "Start simple", bullets: ["A service you already know", "Little money to start", "People nearby pay for it"] },
            { title: "Ask AI for ideas", bullets: ["Your skills", "Your budget and tools", "\"Suggest five businesses I could start.\""] },
            { title: "Licensed work?", bullets: ["Barbering, electrical, contracting and more", "Check your state licensing board", "Rules have changed in many states"] }
          ],
          tryIt: "Write your top three skills and how much money you could start with. Ask an AI assistant for five matching small business ideas, then pick one.",
          youCanNow: "choose a small business idea that fits your skills and money."
        },
        {
          title: "Customers and pricing",
          minutes: 5,
          goal: "Describe your customers and set a starting price that covers your costs.",
          text: [
            "A business needs customers who will pay. Be specific about who they are: \"busy families in my neighborhood\", \"small offices downtown\", \"older homeowners who cannot mow\". Knowing them tells you where to find them.",
            "To set a price, add up your costs for one job (supplies, gas or bus fare, and your time), then look at what others nearby charge. Ask AI: \"I want to offer basic home cleaning in Atlanta. My supplies cost about $10 per job and a job takes 3 hours. How could I work out a fair starting price? What do I need to check about local prices?\" Then check real local prices by looking at local ads or calling a few businesses.",
            "Do not price so low that you lose money. A price should pay for your costs, your time, and a little extra for taxes and savings."
          ],
          steps: ["Describe your customers in one sentence.", "Add up your costs for one job.", "Decide what your time is worth per hour.", "Check what others nearby charge.", "Set a price that covers costs, time and taxes."],
          words: [["Customer", "a person or business that pays for your service."], ["Profit", "the money left after you pay your costs."]],
          slides: [
            { title: "Know your customers", bullets: ["Be specific", "\"Busy families in my neighborhood\"", "It tells you where to find them"] },
            { title: "Work out your price", bullets: ["Costs for one job", "Your time", "What others nearby charge"] },
            { title: "Don't price too low", bullets: ["Cover costs and time", "Leave room for taxes and savings"] }
          ],
          tryIt: "For your idea, write one sentence describing your customers. Ask AI to help you work out a starting price from your costs and time, then check two real local prices.",
          youCanNow: "describe your customers and set a starting price that covers your costs."
        },
        {
          title: "A one-page business plan with AI",
          minutes: 6,
          goal: "Write a one-page business plan with an AI assistant.",
          text: [
            "A business plan is your map. The SBA describes a short \"lean startup\" plan that fits on one page, covering things like your customers, the value you offer, how you reach customers, your costs and how you make money.",
            "Ask AI: \"Help me write a one-page business plan for a lawn care business in my town. Use these headings: what I offer, who my customers are, why they would choose me, how they will find me, startup costs, price, and my first-month goal. Ask me questions one at a time to fill it in.\" Answer in your own words.",
            "Read the finished plan carefully. Change anything that is not true or not realistic. You can show it to a mentor; SCORE offers free mentoring (see Lesson 6)."
          ],
          steps: ["Ask AI to interview you one question at a time.", "Use simple headings: offer, customers, why you, how they find you, costs, price, first goal.", "Answer in your own words.", "Fix anything unrealistic.", "Save it and share it with a mentor."],
          words: [["Business plan", "a written plan for how your business will work and make money."], ["Lean startup plan", "a short, one-page business plan."]],
          slides: [
            { title: "Your one-page map", bullets: ["SBA's lean startup plan fits on one page", "Customers, value, reach, costs, money"] },
            { title: "Let AI interview you", bullets: ["\"Ask me one question at a time.\"", "Answer in your own words"] },
            { title: "Make it real", bullets: ["Fix what is unrealistic", "Show it to a mentor"] }
          ],
          sources: [{ name: "SBA: Write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Ask an AI assistant to interview you one question at a time and write a one-page plan for your business idea. Save the plan.",
          youCanNow: "write a one-page business plan with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning your business",
        questions: [
          { q: "Which is usually the best first business?", options: ["One you know nothing about", "A business that needs $100,000 to start", "A simple service you already know, with low startup costs", "One with no customers nearby"], answer: 2, why: "Low cost and known skills reduce risk." },
          { q: "You want to be a barber. What should you check first?", options: ["Your state licensing board's rules", "Nothing", "A social media rumor", "Only AI"], answer: 0, why: "Barbering needs a state license, and boards set the rules." },
          { q: "Which customer description is most useful?", options: ["\"Anybody with money\"", "\"Everyone\"", "\"People\"", "\"Older homeowners in my neighborhood who cannot mow\""], answer: 3, why: "Specific customers tell you where to find them." },
          { q: "A good price covers:", options: ["Only supplies", "Your costs, your time and something for taxes", "Nothing; work for free", "Whatever the cheapest competitor charges, even at a loss"], answer: 1, why: "Prices must cover costs and pay you." },
          { q: "How can AI best help write a business plan?", options: ["Make up facts about your business", "Interview you one question at a time", "Sign legal papers", "Get your EIN for you"], answer: 1, why: "You supply the facts; AI organizes them." }
        ]
      }
    },
    {
      name: "Chapter 2: Setting it up the official way",
      lessons: [
        {
          title: "Business structure and business name",
          minutes: 6,
          goal: "Choose a business structure and find out whether your business name needs to be registered.",
          text: [
            "The SBA explains that if you start doing business without registering as another type, you are automatically a sole proprietorship. It is the simplest: you and the business are the same for taxes and debts, so you are personally responsible for the business's debts.",
            "A limited liability company (LLC) is registered with your state, usually through the Secretary of State, and generally protects your personal belongings if the business is sued or goes into debt, though that protection has limits. It costs money to form and may have yearly fees, which differ by state; check your Secretary of State's website for the current cost.",
            "If you use a business name that is not your own legal name, such as \"Fresh Start Cleaning\", most states require you to register it as a DBA (\"doing business as\") with the state, county or city. If you do business under your own legal name, the SBA says you may not need to register anywhere. Ask a tax professional or SBA partner which structure fits you."
          ],
          steps: ["Decide: sole proprietorship (automatic) or LLC (registered with the state).", "For an LLC, check costs on your Secretary of State's website.", "Choose a business name.", "If it is not your legal name, find out where to register a DBA in your state, county or city.", "Ask a tax professional or SBA partner if unsure."],
          words: [["Sole proprietorship", "a business owned by one person, with no separation between the owner and the business."], ["LLC", "limited liability company: a registered business that generally protects the owner's personal belongings."], ["DBA", "\"doing business as\": a registered business name that is not your legal name."]],
          slides: [
            { title: "Sole proprietorship", bullets: ["Automatic when you start doing business", "Simplest", "You are personally responsible for debts"] },
            { title: "LLC", bullets: ["Registered with your state", "Generally protects personal belongings", "Costs differ by state: check your Secretary of State"] },
            { title: "Your business name", bullets: ["Not your legal name? Usually register a DBA", "With your state, county or city", "Rules differ: check locally"] }
          ],
          sources: [{ name: "SBA: Choose a business structure", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }, { name: "SBA: Register your business", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" }],
          tryIt: "Decide whether you would start as a sole proprietorship or an LLC, and write why. Choose a business name, then search \"register DBA\" plus your county or state and find the official government page (often ending in .gov).",
          youCanNow: "choose a business structure and find out how to register your business name."
        },
        {
          title: "Your free EIN and the right licenses",
          minutes: 6,
          goal: "Know how to get a free EIN from the IRS and find the licenses and permits your business needs.",
          text: [
            "An EIN (Employer Identification Number) is a tax ID number for your business. The IRS says \"You never have to pay a fee for an EIN\", and warns about websites that charge for one. Apply directly on irs.gov. If approved, the number is issued right away online. You must finish in one session, so set aside time; the online tool is only open at certain hours, listed on irs.gov. Sole proprietors without employees can often use their Social Security number instead, but many open an EIN to keep business and personal separate.",
            "Licenses and permits come from different levels of government. The SBA explains that federal licenses are only for certain activities (such as alcohol or aviation); states license many trades; and cities and counties often require a general business license and permits for things like food, construction or vending.",
            "To find yours: check your city and county websites for a business license, your state's website for trade licenses and sales tax registration if you sell products, and ask your local Small Business Development Center. Type your real numbers only on the official .gov sites, never into AI."
          ],
          steps: ["Go to irs.gov and search \"apply for an EIN\"; never pay a website for one.", "Check the online hours and finish in one session.", "Print or save your EIN confirmation.", "Check your city and county for a business license and permits.", "Check your state for trade licenses and sales tax registration."],
          words: [["EIN", "Employer Identification Number: a free tax ID number for a business from the IRS."], ["License", "official permission from the government to run a business or do certain work."], ["Permit", "official permission for a specific activity, such as selling food."]],
          slides: [
            { title: "EIN: free from the IRS", bullets: ["\"You never have to pay a fee for an EIN\"", "Apply on irs.gov, issued right away online", "Finish in one session, during open hours"] },
            { title: "Licenses come from 3 levels", bullets: ["Federal: only certain activities", "State: many trades, sales tax", "City and county: business license, permits"] },
            { title: "Find yours", bullets: ["City and county websites", "State website", "Ask your local SBDC"] }
          ],
          sources: [{ name: "IRS: Get an employer identification number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Apply for licenses and permits", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" }],
          tryIt: "Open the IRS EIN page on irs.gov and write down the online hours and what you need to apply (do not apply yet unless you are ready). Then find your city or county's business license page and write down its web address.",
          youCanNow: "get a free EIN from the IRS and find the licenses and permits your business needs."
        },
        {
          title: "Bank account, records, taxes and free help",
          minutes: 6,
          goal: "Set up simple money records, plan for taxes, and find free business help.",
          text: [
            "Keep business money separate. The SBA recommends opening a business bank account once you start taking in or spending money for the business. Banks commonly ask for an EIN (or your Social Security number for a sole proprietorship), formation documents and a business license; ask your bank what it needs.",
            "Keep records of every dollar in and out: a simple spreadsheet or notebook with the date, who, what and how much, plus receipts. AI can design a simple record sheet for you: \"Make me a simple income and expense log for a cleaning business.\" Do not paste real bank details into it.",
            "Taxes: the IRS says self-employed people must file a tax return if net earnings are $400 or more, and generally pay self-employment tax (Social Security and Medicare) as well as income tax, often as quarterly estimated payments. Forms include Schedule C, Schedule SE and Form 1040-ES. Many owners set aside part of each payment for taxes; a tax professional or free tax help can tell you how much. Free business help: SCORE offers volunteer mentors at no cost, and Small Business Development Centers and Women's Business Centers offer counseling; find them on sba.gov."
          ],
          steps: ["Open a separate business bank account; ask the bank what it needs.", "Keep a log of every dollar in and out, with receipts.", "Set aside part of each payment for taxes.", "Learn the forms: Schedule C, Schedule SE, 1040-ES on irs.gov.", "Get free help from SCORE, an SBDC or a Women's Business Center."],
          words: [["Self-employment tax", "Social Security and Medicare tax that self-employed people pay."], ["Estimated tax", "tax paid during the year, usually every quarter, when no employer withholds it."], ["Expense", "money you spend to run the business."]],
          slides: [
            { title: "Keep business money separate", bullets: ["Open a business bank account", "Banks ask for EIN or SSN, documents, license"] },
            { title: "Keep records", bullets: ["Every dollar in and out", "Date, who, what, how much, receipts", "AI can design the log; no bank details"] },
            { title: "Plan for taxes", bullets: ["File if net earnings are $400 or more", "Self-employment tax plus income tax", "Schedule C, Schedule SE, 1040-ES"] },
            { title: "Free help", bullets: ["SCORE mentors at no cost", "Small Business Development Centers", "Find them on sba.gov"] }
          ],
          sources: [{ name: "SBA: Open a business bank account", url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account" }, { name: "IRS: Self-employed individuals tax center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "SBA: Resource partners", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          tryIt: "Final task: finish your one-page plan and make your setup checklist with an official website for each step: structure, name and DBA, free EIN on irs.gov, city, county and state licenses, a separate bank account, a record log made with AI, money set aside for taxes, and your nearest SCORE or SBDC.",
          youCanNow: "plan a small business and set it up the official way, with records, a tax plan and free help."
        }
      ],
      check: {
        title: "Knowledge Check 2: Setting it up the official way",
        questions: [
          { q: "You start cleaning houses without registering any business type. You are:", options: ["A nonprofit", "An LLC", "A corporation", "A sole proprietorship"], answer: 3, why: "The SBA says sole proprietorships form automatically." },
          { q: "Your business name is \"Fresh Start Cleaning\", not your legal name. Most states require:", options: ["Registering it as a DBA", "Nothing ever", "A federal license", "A trademark first"], answer: 0, why: "A trade name usually must be registered as a DBA." },
          { q: "How much does the IRS charge for an EIN?", options: ["$250", "$50", "Nothing; it is free", "It depends on the website"], answer: 2, why: "The IRS says you never have to pay a fee for an EIN." },
          { q: "Where does a general business license usually come from?", options: ["A private website", "The IRS", "The FAA", "Your city or county"], answer: 3, why: "Cities and counties issue general business licenses." },
          { q: "Self-employed people must file a tax return if net earnings are:", options: ["Never", "$40,000 or more", "$400 or more", "Only over $1 million"], answer: 2, why: "The IRS sets the filing point at $400 of net self-employment earnings." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: How to Set Up and Start a Small Business",
    questions: [
      { q: "A service business:", options: ["Only sells products", "Does work for people, like cleaning or repairs", "Is always online", "Needs a factory"], answer: 1, why: "Services are work done for customers." },
      { q: "Startup costs are:", options: ["The money needed to begin, such as tools and supplies", "Your profit", "Your taxes", "Your customers"], answer: 0, why: "They are what you spend to start." },
      { q: "If a job needs a state license, you should check:", options: ["Your state licensing board's official website", "Only AI", "A rumor", "Nothing"], answer: 0, why: "Licensing boards set the rules, which have changed in many states." },
      { q: "Why describe customers specifically?", options: ["It raises prices", "It tells you where to find them", "It is required by the IRS", "It replaces a license"], answer: 1, why: "Specific customers are easier to reach." },
      { q: "To set a price, start with:", options: ["The lowest price in town, even at a loss", "A random number", "Your costs for one job and your time", "Whatever a friend says"], answer: 2, why: "Prices must cover costs and time." },
      { q: "Profit is:", options: ["A loan", "All money coming in", "Your tax bill", "Money left after costs"], answer: 3, why: "Profit = income minus costs." },
      { q: "A lean startup business plan is:", options: ["A tax form", "A 100-page report", "A short, one-page plan", "A license"], answer: 2, why: "The SBA describes it as a one-page plan." },
      { q: "When AI helps write your plan, who supplies the facts?", options: ["You", "The AI", "A stranger", "The IRS"], answer: 0, why: "AI organizes; you know your business." },
      { q: "In a sole proprietorship, who is responsible for business debts?", options: ["Your customers", "Nobody", "The government", "You personally"], answer: 3, why: "There is no separation between owner and business." },
      { q: "An LLC is usually registered with:", options: ["The IRS only", "Your state, often the Secretary of State", "Your bank", "A social media site"], answer: 1, why: "States form LLCs." },
      { q: "Where do you check the current cost of forming an LLC?", options: ["AI only", "Your state's Secretary of State website", "A pop-up ad", "A friend"], answer: 1, why: "Costs differ by state and change." },
      { q: "DBA stands for:", options: ["Debt before assets", "Department of Business Affairs", "Daily bank account", "Doing business as"], answer: 3, why: "A DBA is a registered trade name." },
      { q: "A website charges $200 to get you an EIN. You should:", options: ["Apply free on irs.gov instead", "Pay it", "Give it your SSN", "Ask AI to pay it"], answer: 0, why: "The IRS warns about sites that charge for EINs." },
      { q: "The IRS online EIN application:", options: ["Is open 24 hours every day", "Can be saved and finished next week", "Must be finished in one session during its open hours", "Costs a fee"], answer: 2, why: "The IRS says you cannot save it and lists set hours." },
      { q: "Which level of government licenses many trades, like electrical work?", options: ["The post office", "Only the federal government", "Your bank", "The state"], answer: 3, why: "States license many trades." },
      { q: "Where should you type your real Social Security number when applying for an EIN?", options: ["In a text to a stranger", "Into an AI assistant", "Only on the official irs.gov site", "On any website"], answer: 2, why: "Private numbers go only on official sites." },
      { q: "Why open a separate business bank account?", options: ["To avoid all taxes", "To keep business and personal money apart", "It replaces a license", "To hide money"], answer: 1, why: "The SBA says separation protects you and helps records." },
      { q: "Good business records include:", options: ["Date, who, what and how much, with receipts", "Only big sales", "Nothing", "Your passwords"], answer: 0, why: "Complete records make taxes easier." },
      { q: "Which form reports income or loss from a sole proprietorship?", options: ["Schedule C", "Form W-2", "Form I-9", "Form DS-11"], answer: 0, why: "The IRS uses Schedule C for sole proprietors." },
      { q: "Which SBA partner offers volunteer business mentors at no cost?", options: ["The IRS", "SCORE", "A payday lender", "A credit bureau"], answer: 1, why: "SCORE mentors give advice at no cost." }
    ]
  }
};
