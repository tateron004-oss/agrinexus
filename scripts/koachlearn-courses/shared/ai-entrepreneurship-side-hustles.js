"use strict";

// Koach Learn course (shared): "Entrepreneurship and Side Hustles with AI". Categories: Re-Entry. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Quick-start course: earn a first dollar from a small side hustle. The longer business-building path is ai-entrepreneurship-pathways.

module.exports = {
  id: "ai-entrepreneurship-side-hustles",
  category: "Re-Entry",
  name: "Entrepreneurship and Side Hustles with AI",
  skills: "Matching a side hustle to your skills, Checking rules and licenses, Testing demand cheaply, Pricing your service, Writing an offer and flyer with AI, Tracking money and taxes",
  outcome: "choose a side hustle that fits your skills and rules, test whether people will pay, set a price, use AI to write your offer and a flyer or post, and track every dollar in and out so you are ready at tax time.",
  about: [
    "A side hustle is a small way to earn extra money on your own: cutting hair, cleaning, lawn care, moving help, cooking, detailing cars, tutoring, selling crafts or doing small repairs. Many people coming home use one to build income and confidence while they look for work, or as a step toward their own business.",
    "AI assistants such as ChatGPT, Microsoft Copilot and Google Gemini can help you pick an idea, figure out a price, write your offer and make simple marketing, for free.",
    "This course is short and practical: the goal is your first paying customer. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course. Check your parole or probation conditions before starting any business, and ask your officer if you are not sure."
  ],
  finalTask: "Choose one side hustle and create a one-page launch sheet: the service and who it is for, any rules or licenses you checked (and where), your price with how you figured it, a short offer written with AI help, a flyer or social post, a list of five people or places to tell, and a simple money log ready for your first sale.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults coming home from prison (re-entry) who want to earn extra money on their own, often while looking for a job or working part time. Many have practical skills from prison jobs, the trades, cooking, cleaning or caring for others.",
    startingPoint: "Have real skills and may have done informal jobs for family or neighbors. Most have not priced a service, made a flyer, tracked business money or thought about taxes, and some have little money, no car and a basic phone.",
    gap: "A side hustle can bring in income quickly and build a work record, but many people underprice, skip rules or licenses, fall for payment scams or face a surprise tax bill. Learners need to choose a hustle that fits their skills and conditions, test demand, price fairly, market honestly with AI help and track every dollar.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: may only have a basic phone or a time-limited library computer",
      "Money: less than about $100 to start; no paid tools needed",
      "Rules: parole or probation conditions and state licensing apply; learners check their own conditions and the state licensing board",
      "No tax or legal advice: learners check irs.gov, a free tax help program such as VITA, or a professional"
    ],
    prerequisites: "None. \"Introduction to AI and Digital Confidence\" is a helpful first course for learners new to AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your skills, time, starting money and rules", action: "choose a side hustle and check whether it needs a license or is limited by your conditions", standard: "naming where you checked" },
    { id: "O2", condition: "Before you spend money on supplies", action: "test whether people will pay by talking to ten possible customers and checking others nearby", standard: "within one week, spending nothing" },
    { id: "O3", condition: "Given your costs per job, the hours it takes and local prices", action: "calculate a price that covers costs, your time and a little extra", standard: "with the math checked by hand" },
    { id: "O4", condition: "Using an AI assistant and a free design tool", action: "write a clear offer and make a flyer or social post", standard: "saying what, who, price and how to book, with nothing untrue and no home address" },
    { id: "O5", condition: "When you look for your first customers", action: "plan who and where to tell and how you will work safely", standard: "with a list of five people or places and the job agreed in writing" },
    { id: "O6", condition: "From your first sale", action: "keep a money log and save receipts, and name where to get tax help", standard: "recording every dollar in and out" }
  ],
  chapters: [
    {
      name: "Chapter 1: Picking and testing your hustle",
      lessons: [
        {
          objectives: ["O1"],
          title: "Matching a side hustle to your skills",
          minutes: 5,
          goal: "List side hustle ideas that fit your skills, time and money.",
          text: [
            "The best first side hustle uses skills you already have, needs little money to start, and fits your schedule. If you cooked inside, think meal prep or catering help. If you did maintenance, think small repairs or yard work. If people always ask you to fix their hair, start there.",
            "Ask AI for ideas: \"I am good at cooking and cleaning, I have about 10 hours a week, no car, and less than $100 to start. Suggest 10 side hustles I could start in my neighborhood.\" Then cross out any that do not fit you.",
            "Check your rules first. Parole or probation conditions may limit some work, travel or handling cash. Some trades, like barbering, cosmetology, electrical or contracting, need a state license. Some licenses consider criminal records; your state licensing board's website explains its rules."
          ],
          steps: ["List your skills, time per week and starting money.", "Ask AI for ten ideas that fit.", "Cross out ideas that do not fit your life.", "Check parole or probation conditions.", "Check whether the work needs a state license."],
          words: [["Side hustle", "a small way to earn money on your own, often part time."], ["License", "official permission from the state or city to do certain work."]],
          slides: [
            { title: "A good first hustle", bullets: ["Uses skills you already have", "Little money to start", "Fits your schedule"] },
            { title: "Ask AI for ideas", bullets: ["Share your skills, time, money, transport", "Ask for ten ideas", "Cross out what does not fit"] },
            { title: "Check the rules first", bullets: ["Parole or probation conditions", "State licenses for some trades", "Your state licensing board's website"] }
          ],
          tryIt: "Ask AI for ten side hustle ideas using your real skills, time and budget. Pick your top two and write what rules or licenses you need to check for each.",
          youCanNow: "pick side hustle ideas that fit your skills and know which rules to check.",
          quickCheck: [
            { objective: "O1", q: "What three things should a good first side hustle fit?", options: ["Your car, your house and your credit score", "The newest trend, a big loan and a website", "Your skills, your time and the money you have to start", "Your friends' jobs, a license and an office"], answer: 2, why: "A first side hustle uses skills you already have, needs little money and fits your schedule." },
            { objective: "O1", q: "You want to cut hair for money. What do you check first?", options: ["Whether your state requires a barbering or cosmetology license, and your conditions", "Nothing; it is just a side hustle", "Only what your friends think", "Which clippers are most expensive"], answer: 0, why: "Some trades, like barbering, need a state license, and parole or probation conditions may apply." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Testing if people will pay",
          minutes: 5,
          goal: "Test demand for your idea in a week without spending money.",
          text: [
            "Before buying supplies, find out if people want it. Talk to ten people who could be customers: neighbors, church members, family friends, people at your reentry center. Ask: \"Would you pay someone to [service]? How often? What would you expect to pay?\"",
            "Look around: are others already doing it nearby? That is good news; it means people pay for it. Ask AI: \"What do customers usually complain about with [service]?\" Fixing those complaints can be your edge.",
            "Offer one or two jobs at a fair starter price to people you know, and ask them for honest feedback and, if they are happy, a short review or referral."
          ],
          steps: ["Talk to ten possible customers.", "Ask if they would pay, how often and how much.", "Look for others doing it nearby.", "Ask AI what customers usually complain about.", "Do one or two starter jobs and ask for feedback."],
          words: [["Demand", "how many people want something and will pay for it."], ["Referral", "when a happy customer sends you a new customer."]],
          slides: [
            { title: "Ask before you buy", bullets: ["Talk to ten possible customers", "Would they pay? How often? How much?"] },
            { title: "Look around", bullets: ["Others doing it = people pay for it", "Ask AI about common complaints", "Fix those to stand out"] },
            { title: "Starter jobs", bullets: ["One or two jobs at a fair price", "Ask for feedback", "Ask happy customers for referrals"] }
          ],
          tryIt: "Write the three questions you will ask, then talk to at least five possible customers this week. Write down what they said.",
          youCanNow: "test whether people will pay before you spend money.",
          quickCheck: [
            { objective: "O2", q: "What does demand mean?", options: ["The price of your supplies", "The number of hours you work", "Your license number", "How many people want something and will pay for it"], answer: 3, why: "Demand is how many people want your service and will pay." },
            { objective: "O2", q: "You want to start a yard work hustle. What is the best first step?", options: ["Buy a new lawn mower", "Ask ten neighbors if they would pay, how often and how much", "Print 500 flyers", "Set up a website"], answer: 1, why: "Test demand by talking to possible customers before spending money." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Setting your price",
          minutes: 5,
          goal: "Set a price that covers costs, pays you fairly and fits the market.",
          text: [
            "A price has to cover three things: your costs (supplies, bus fare or gas, phone), your time, and a little extra to save or grow. Underpricing feels safe, but it can leave you working for almost nothing.",
            "Example: cleaning an apartment takes 3 hours and $10 in supplies. If you want $20 an hour for your time, that is $60 plus $10, so about $70. Then check: what do others nearby charge? Adjust up or down.",
            "Ask AI to check your math and suggest packages: \"I clean apartments. My costs are $10 per job, I want $20 per hour, a job takes 3 hours. Suggest a basic price, a deep-clean price and a weekly discount.\" Double-check its math yourself."
          ],
          steps: ["Add up costs per job.", "Decide what your hour is worth and multiply by hours.", "Add costs plus time.", "Compare with others nearby.", "Ask AI to suggest packages, then check the math."],
          words: [["Cost", "money you spend to do the job."], ["Package", "a set of services sold together at one price."]],
          slides: [
            { title: "A price covers", bullets: ["Costs: supplies, travel, phone", "Your time", "A little extra to save"] },
            { title: "Do the math", bullets: ["3 hours x $20 = $60", "+ $10 supplies = about $70", "Compare with others nearby"] },
            { title: "Use AI for packages", bullets: ["Basic, deluxe, regular discount", "Double-check AI's math"] }
          ],
          tryIt: "Figure your price for one job of your side hustle: costs, time and market check. Ask AI to suggest two packages and check the math.",
          youCanNow: "set a fair price based on costs, time and the market.",
          quickCheck: [
            { objective: "O3", q: "A job takes 4 hours, you want $15 an hour, and supplies cost $8. What is the base price?", options: ["$68", "$60", "$23", "$15"], answer: 0, why: "4 hours times $15 is $60, plus $8 in supplies, which is $68." },
            { objective: "O3", q: "Your base price is $70, but everyone nearby charges about $90 for the same job. What do you do?", options: ["Drop to $30 to win every job", "Keep $70 no matter what", "Adjust your price after comparing, since you may be underpricing", "Refuse to set a price"], answer: 2, why: "Compare with others nearby and adjust; underpricing can leave you working for almost nothing." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Picking and testing your hustle",
        questions: [
          { objective: "O1", q: "What makes a good first side hustle?", options: ["Costs thousands to start", "Needs a skill you do not have", "Uses your skills, needs little money and fits your time", "Requires a big office"], answer: 2, why: "Low cost and your skills make it easier to start." },
          { objective: "O1", q: "Before starting, someone on parole should:", options: ["Check their conditions and ask their officer if unsure", "Ignore their conditions", "Start anything right away", "Only ask a friend"], answer: 0, why: "Conditions may limit some work." },
          { objective: "O1", q: "Where do you check if a trade like barbering needs a license?", options: ["A random video", "An AI guess", "A neighbor", "Your state licensing board's website"], answer: 3, why: "State boards set licensing rules." },
          { objective: "O2", q: "Others in your area already offer your service. This means:", options: ["You must quit", "People pay for it, so there is demand", "It is illegal", "Nobody wants it"], answer: 1, why: "Existing businesses show customers pay." },
          { objective: "O3", q: "A job takes 2 hours, you want $25 an hour, and supplies cost $5. A fair base price is about:", options: ["$5", "$27", "$55", "$250"], answer: 2, why: "2 x $25 + $5 = $55." }
        ]
      }
    },
    {
      name: "Chapter 2: Launching and running it",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing your offer and a flyer with AI",
          minutes: 5,
          goal: "Write a clear offer and make a flyer or social post with AI help.",
          text: [
            "An offer says what you do, who it is for, the price and how to book. Example: \"Apartment cleaning in Eastside. Basic clean $70, deep clean $110. Reliable, careful, references available. Text [phone] to book.\"",
            "Ask AI: \"Write three short versions of an offer for my [service] in [area] at [price]. Friendly and trustworthy. Under 40 words.\" Pick the one that sounds most like you, and remove anything not true, like \"licensed and insured\" if you are not.",
            "Make a flyer or post in Canva's free plan or Google Docs. Use a clear headline, two or three benefits, the price and how to contact you. Use a separate business phone number or a free texting number if you can, and never post your home address."
          ],
          steps: ["Write what, who, price and how to book.", "Ask AI for three short versions.", "Pick one and remove anything not true.", "Make a flyer or post with a headline, benefits, price and contact.", "Keep your home address private."],
          words: [["Offer", "a clear statement of what you sell, for whom, at what price."], ["Flyer", "a one-page printed or digital ad."]],
          slides: [
            { title: "A clear offer", bullets: ["What you do and who it is for", "Price", "How to book"] },
            { title: "Let AI help", bullets: ["Ask for three short versions", "Pick the one that sounds like you", "Remove anything not true"] },
            { title: "Flyer or post", bullets: ["Headline, benefits, price, contact", "Canva or Google Docs", "Never post your home address"] }
          ],
          tryIt: "Use AI to write three versions of your offer, pick one, and make a flyer or social post with it.",
          youCanNow: "write an honest offer and make a simple flyer or post with AI help.",
          quickCheck: [
            { objective: "O4", q: "What four things does a clear offer say?", options: ["Your name, age, address and story", "What you do, who it is for, the price and how to book", "Your skills, school, hobbies and goals", "Only the price"], answer: 1, why: "A clear offer says what, for whom, the price and how to book." },
            { objective: "O4", q: "You are making a flyer for your cleaning service. Which contact detail do you leave off?", options: ["Your business phone number", "A free texting number", "Your first name", "Your home address"], answer: 3, why: "Never post your home address; use a business or free texting number." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Getting your first customers safely",
          minutes: 5,
          goal: "Find first customers through people and places you trust, and work safely.",
          text: [
            "Your first customers usually come from people who know you: family, friends, church, your reentry program, past co-workers. Tell five people a day what you do and hand them a flyer or send your post.",
            "Post on community boards: libraries, laundromats, community centers and local online groups, following each place's rules. Ask every happy customer for a review or to tell a friend.",
            "Stay safe. Meet new customers in public first or bring someone with you. Get paid the way you agreed, and be careful with apps: never accept an overpayment and send money back, which is a common scam. Write down what each job includes before you start so there is no confusion."
          ],
          steps: ["Tell five people a day about your service.", "Post on community boards and local groups.", "Ask happy customers for reviews and referrals.", "Agree in writing what each job includes and the price.", "Watch for overpayment scams."],
          words: [["Word of mouth", "customers telling other people about you."], ["Overpayment scam", "a trick where someone pays too much and asks you to send the difference back, then their payment bounces."]],
          slides: [
            { title: "First customers", bullets: ["Family, friends, church, programs", "Tell five people a day"] },
            { title: "Spread the word", bullets: ["Library, laundromat, community boards", "Local online groups", "Reviews and referrals"] },
            { title: "Stay safe", bullets: ["Meet new people in public or bring someone", "Agree on the job and price in writing", "Never send back an overpayment"] }
          ],
          sources: [{ name: "FTC: Fake check scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-fake-check-scams" }],
          tryIt: "Write a list of 15 people or places to tell about your hustle. Contact five of them today with your flyer or post.",
          youCanNow: "find first customers through trusted people and places while staying safe.",
          quickCheck: [
            { objective: "O5", q: "Where do most first customers come from?", options: ["Paid online ads", "Strangers in other cities", "People who know you, like family, friends and church", "Big companies"], answer: 2, why: "First customers usually come from people who already know and trust you." },
            { objective: "O5", q: "A new customer you have never met wants you to come to their home. What is safer?", options: ["Meet in public first or bring someone with you", "Go alone and tell no one", "Ask for full payment in gift cards", "Share your home address"], answer: 0, why: "Meet in public first or bring someone, and agree on the job in writing." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Tracking money and getting ready for taxes",
          minutes: 6,
          goal: "Keep a simple money log and know the basics of side hustle taxes.",
          text: [
            "Track every dollar from day one. A simple money log in Google Sheets or a notebook: date, customer (first name or label), job, money in, money out, and what the money out was for. Keep receipts for supplies, in a folder or as phone photos.",
            "In the U.S., side hustle income is taxable, even cash and even small amounts. Self-employed people may owe self-employment tax and may need to pay estimated taxes during the year. The rules and thresholds change, so check irs.gov or a free tax help program such as VITA before tax time.",
            "If you grow, you may want a business bank account, a business name registration with your city or state, or an EIN. The IRS says an EIN is free from the IRS; beware of websites that charge for one. AI can help you make the money log and explain tax words, but for your actual taxes, use irs.gov or a tax professional."
          ],
          steps: ["Make a money log: date, customer label, job, in, out, what for.", "Save every receipt.", "Add up your income and costs each month.", "Set aside part of each payment for taxes.", "Check irs.gov or a free tax help program before tax time."],
          words: [["Self-employment tax", "U.S. Social Security and Medicare tax for people who work for themselves."], ["EIN", "Employer Identification Number: a federal tax ID number for a business."], ["VITA", "Volunteer Income Tax Assistance: free IRS-supported tax help for people who qualify."]],
          slides: [
            { title: "Track every dollar", bullets: ["Date, customer label, job", "Money in and money out", "Save every receipt"] },
            { title: "Taxes (U.S.)", bullets: ["Side hustle income is taxable, cash too", "Self-employment and estimated taxes may apply", "Check irs.gov or free VITA help"] },
            { title: "As you grow", bullets: ["Business bank account", "Name registration with city or state", "EIN is free from the IRS"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Manage taxes for your gig work", url: "https://www.irs.gov/businesses/gig-economy-tax-center" }, { name: "IRS: Free tax return preparation (VITA)", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }],
          tryIt: "Final task: make your money log and finish your one-page launch sheet: service, rules checked, price, offer, flyer or post, five people or places to tell, and the money log ready for your first sale.",
          youCanNow: "start a side hustle with AI help, find customers safely and track your money for taxes.",
          quickCheck: [
            { objective: "O6", q: "What goes in a side hustle money log?", options: ["Customers' full names and phone numbers", "Only the money you earned", "Your bank password", "Date, customer label, job, money in, money out and what it was for"], answer: 3, why: "A money log tracks every dollar in and out from day one." },
            { objective: "O6", q: "You earned $300 cash this month from small jobs. What do you do about taxes?", options: ["Nothing; cash is not taxable", "Record it, set part aside, and check irs.gov or VITA before tax time", "Spend it before anyone knows", "Ask a customer to file for you"], answer: 1, why: "Side hustle income is taxable even in cash, so track it and get trusted tax help." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Launching and running it",
        questions: [
          { objective: "O4", q: "Which belongs in a clear offer?", options: ["Your home address", "Your Social Security number", "A fake license claim", "What you do, for whom, the price and how to book"], answer: 3, why: "Those four parts make an offer clear." },
          { objective: "O4", q: "AI writes \"licensed and insured\" but you are not. What do you do?", options: ["Remove it", "Keep it", "Make it bigger", "Add \"award-winning\""], answer: 0, why: "Never claim what is not true." },
          { objective: "O5", q: "A customer pays you $200 for a $70 job and asks you to send back $130. This is likely:", options: ["A generous tip", "Normal banking", "An overpayment scam", "A tax refund"], answer: 2, why: "Overpayment requests are a common scam." },
          { objective: "O6", q: "Is cash side hustle income taxable in the U.S.?", options: ["No, cash is never taxed", "Only over $1 million", "Only in some months", "Yes"], answer: 3, why: "All income, including cash, is taxable." },
          { objective: "O6", q: "How much does the IRS charge for an EIN?", options: ["$500", "$50 a month", "Nothing; it is free from the IRS", "It depends on the website"], answer: 2, why: "The IRS says EINs are free; beware of sites that charge." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Entrepreneurship and Side Hustles with AI",
    questions: [
      { objective: "O1", q: "A side hustle is:", options: ["A full-time government job", "A small way to earn money on your own, often part time", "A loan", "A scam"], answer: 1, why: "It is small, self-run work." },
      { objective: "O1", q: "Which is a good side hustle for someone who cooked in a large kitchen?", options: ["Meal prep for neighbors", "Electrical contracting without a license", "Day trading", "Selling medicine"], answer: 0, why: "It uses existing skills and needs little money." },
      { objective: "O1", q: "When asking AI for side hustle ideas, tell it:", options: ["Your case number", "Your bank login", "Your skills, time, money and transport", "Nothing"], answer: 2, why: "Real limits get realistic ideas." },
      { objective: "O1", q: "Some state licenses consider criminal records. Where are the rules?", options: ["The state licensing board's website", "A social media group", "A flyer", "An AI chat alone"], answer: 0, why: "Licensing boards publish their rules." },
      { objective: "O2", q: "How many possible customers does the course suggest talking to?", options: ["One", "Zero", "A thousand", "Ten"], answer: 3, why: "Ten conversations show real demand." },
      { objective: "O2", q: "Demand means:", options: ["How much you want to earn", "How many people want something and will pay", "A legal order", "A price"], answer: 1, why: "Demand is about customers willing to pay." },
      { objective: "O2", q: "Asking AI what customers complain about helps you:", options: ["Copy competitors' prices", "Find ways to stand out", "Avoid customers", "Skip testing"], answer: 1, why: "Fixing common complaints is an edge." },
      { objective: "O3", q: "A price should cover:", options: ["Only supplies", "Only what friends want to pay", "Nothing", "Costs, your time and a little extra"], answer: 3, why: "All three keep you in business." },
      { objective: "O3", q: "3 hours at $20 plus $10 in supplies is:", options: ["$33", "$60", "$70", "$200"], answer: 2, why: "3 x 20 = 60, plus 10 = 70." },
      { objective: "O3", q: "A package is:", options: ["A box in the mail", "A tax form", "A set of services sold together at one price", "A loan"], answer: 2, why: "Packages make choosing easy." },
      { objective: "O3", q: "After AI suggests prices, you should:", options: ["Accept it blindly", "Triple all prices", "Ignore the market", "Double-check the math yourself"], answer: 3, why: "AI can make math mistakes." },
      { objective: "O4", q: "Where should you never post on a flyer?", options: ["Your price", "Your service", "Your home address", "How to book"], answer: 2, why: "Keep your home address private." },
      { objective: "O4", q: "Which free tool can you use to make a flyer?", options: ["A paid printing press only", "Canva's free plan or Google Docs", "A tax form", "A bank app"], answer: 1, why: "Both are free and easy." },
      { objective: "O5", q: "Your first customers usually come from:", options: ["People who know you", "Paid TV ads", "Random strangers overseas", "Nowhere"], answer: 0, why: "Trust starts with your network." },
      { objective: "O5", q: "When meeting a new customer for the first time, it is safer to:", options: ["Go alone to an unknown place at night", "Share your address first", "Meet in public or bring someone", "Skip agreeing on the job"], answer: 2, why: "Safety first with new people." },
      { objective: "O5", q: "Writing down what each job includes helps:", options: ["Avoid confusion about the work and price", "Make jobs longer", "Avoid paying taxes", "Nothing"], answer: 0, why: "Clear agreements prevent disputes." },
      { objective: "O6", q: "A money log includes:", options: ["Customer passwords", "Your SSN", "Only money in", "Date, customer label, job, money in, money out"], answer: 3, why: "Both in and out are needed." },
      { objective: "O6", q: "Why keep receipts for supplies?", options: ["To throw away later", "To track costs and support tax records", "For decoration", "They are not useful"], answer: 1, why: "Receipts back up your costs." },
      { objective: "O6", q: "Where can you get free tax help if you qualify?", options: ["A random website that charges for EINs", "VITA, through the IRS", "A scammer", "Nowhere"], answer: 1, why: "VITA offers free tax help to qualifying people." },
      { objective: "O6", q: "AI explains self-employment tax. For your actual taxes you should:", options: ["Trust the AI fully", "Skip filing", "Ask a stranger online", "Check irs.gov or a tax professional"], answer: 3, why: "Tax rules change and depend on your situation." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      5,
      8,
      10,
      11,
      14,
      15,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Service and rules",
        objective: "O1",
        notYet: "The service is unclear, or rules and licenses were not checked.",
        meets: "Names the service and who it is for, and says which rules or licenses were checked and where.",
        exceeds: "Also notes how the learner confirmed it fits their parole or probation conditions, if they apply."
      },
      {
        name: "Price",
        objective: "O3",
        notYet: "No price, or the price does not cover costs.",
        meets: "A price that covers costs, time and a little extra, with the math shown.",
        exceeds: "Compared with others nearby and offers a package or two."
      },
      {
        name: "Offer and flyer",
        objective: "O4",
        notYet: "Missing price or contact, has untrue claims, or shows a home address.",
        meets: "Says what, who, price and how to book, with nothing untrue and no home address.",
        exceeds: "The flyer has a clear headline and two or three benefits and sounds like the learner."
      },
      {
        name: "First customers",
        objective: "O5",
        notYet: "Fewer than five people or places listed.",
        meets: "Five people or places to tell, and a plan to agree on each job in writing.",
        exceeds: "Includes a safety plan for meeting new customers and avoiding overpayment scams."
      },
      {
        name: "Money log",
        objective: "O6",
        notYet: "No money log.",
        meets: "A money log ready with date, customer label, job, in, out and what for.",
        exceeds: "Includes a receipts folder and where to get free tax help."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who make a first sale within 30 days (follow-up survey)",
      "Learners still earning from a side hustle and keeping a money log after 90 days",
      "Learners who report filing taxes on side hustle income with help from irs.gov, VITA or a professional"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet, or a library or program computer",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini) and Canva's free plan or Google Docs",
      "Google Sheets or a notebook for the money log",
      "Paper and pen for the launch sheet",
      "About 60 minutes in total, in short sessions, plus a week to test demand"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session with the \"Try it now\" tasks done live.",
      "Remind learners on parole or probation to check their conditions, and ask their officer if unsure, before starting any work.",
      "Work through one pricing example together on the board so learners can see the math.",
      "Do not give tax or legal advice; point learners to irs.gov, VITA or a tax professional.",
      "Score the launch sheet with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
