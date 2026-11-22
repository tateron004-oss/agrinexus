"use strict";

// Koach Learn course: Undeserved Community -> "AI for Entrepreneurship and Small Business". Skill-building course (shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js).
// Audience: adults in low-income and underserved communities starting or growing a small or side business. Free tools; SBA resource partners.

module.exports = {
  id: "underserved-ai-small-business",
  category: "Undeserved Community",
  name: "AI for Entrepreneurship and Small Business",
  skills: "Turning a skill into a business offer, Pricing with real costs, Finding free business help, Writing a business description and post, Keeping simple money records, Answering customers",
  outcome: "use a free AI assistant to plan a small business on one page: a clear offer, a price that covers your costs, a short business description and post, a simple money record, and a free mentor or advisor to talk to next.",
  about: [
    "Many people already run small businesses: braiding hair, catering, cleaning houses, lawn care, tutoring, fixing phones or selling crafts. Others have a skill and want to start. This course is for both.",
    "You will use a free AI assistant to turn your skill into a clear offer, work out a price that covers your costs, find free business help, write a short description and a social media post, keep simple money records, and answer customers well.",
    "AI helps you think and write. It does not replace real advice about taxes, licenses or the law. Each lesson points you to free official help. Lessons are about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page plan for a small business you run or want to start: your offer and who it is for, a price that covers your costs (with your own math checked), a three-sentence business description, one social media post, and the name and contact of a free business advisor near you (SCORE, a Small Business Development Center or a Women's Business Center).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "People in underserved communities who run or want to start a small business: hair braiders, caterers, house cleaners, lawn care workers, tutors, phone repairers and craft sellers, many working for cash or part time.",
    startingPoint: "Have a skill people pay for, and some already have customers. Few have a written offer, a price based on costs, money records or a business advisor, and most have not used AI for business tasks.",
    gap: "Many small businesses charge too little, keep no records and never get free advice, so they lose money or stay stuck. Learners need a simple one-page plan, checked math and a free advisor to grow safely.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a smartphone or a library computer",
      "Cost: free tools and free or low-cost advisors only",
      "AI does not know local prices, taxes or license rules: learners check the math and ask official sources or an advisor",
      "Privacy: no bank account numbers in the AI, and no home address in public posts"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and Digital Empowerment\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a skill people already ask you for", action: "write a one-sentence offer that says what you do, who it is for and what makes you different", standard: "in words that sound like you" },
    { id: "O2", condition: "Given the costs and hours for one job", action: "calculate a price that covers your costs and pays you for your time", standard: "checking the AI's math yourself with a calculator and comparing local prices" },
    { id: "O3", condition: "Using the SBA's resource partners page", action: "find a free business advisor near you and plan what to ask", standard: "writing down their name, contact and three questions" },
    { id: "O4", condition: "Given your offer", action: "write a three-sentence business description and one social media post with an AI assistant", standard: "with every promise true and only safe contact details" },
    { id: "O5", condition: "Using Google Sheets or Excel on the web", action: "create a simple money sheet and record sales and expenses", standard: "with all five columns, totals, and entries made the same day" },
    { id: "O6", condition: "Given a customer message or complaint", action: "write a polite reply and put your work together into a one-page business plan", standard: "offering only what you can afford and including every part of the plan" }
  ],
  chapters: [
    {
      name: "Chapter 1: From skill to business",
      lessons: [
        {
          objectives: ["O1"],
          title: "Turning a skill into a clear offer",
          minutes: 5,
          goal: "Write a one-sentence offer that says what you sell, to whom, and why they should choose you.",
          text: [
            "A business starts with something people need and will pay for. Think about what neighbors already ask you to do: cook for parties, braid hair, fix things, watch kids, cut grass.",
            "A clear offer says what you do, who it is for, and what makes you different. For example: \"Weekend meal prep for busy working families on the east side, with home-style food at a fair price.\"",
            "Ask the AI to help: \"I am good at cooking Caribbean food and people ask me to cater parties. Help me write three one-sentence offers for a small catering business, each for a different kind of customer.\" Then pick the one that sounds most like you."
          ],
          steps: ["List what people already ask you to do.", "Pick one skill people would pay for.", "Ask the AI for three one-sentence offers for different customers.", "Choose and edit the one that fits you best."],
          words: [["Offer", "a short statement of what you sell and who it is for."], ["Customer", "a person who pays for what you sell."]],
          slides: [
            { title: "Start with what people ask you for", bullets: ["Cooking, braiding, cleaning, repairs", "Child care, tutoring, lawn care"] },
            { title: "A clear offer says", bullets: ["What you do", "Who it is for", "What makes you different"] },
            { title: "Ask AI for options", bullets: ["Three offers for three kinds of customers", "Pick the one that sounds like you"] }
          ],
          tryIt: "Ask an AI assistant to write three one-sentence offers for a skill you have. Pick one and change it so it sounds like you.",
          youCanNow: "turn a skill into a clear, one-sentence business offer.",
          quickCheck: [
            { objective: "O1", q: "Which is a clear offer?", options: ["Weekend meal prep for busy families on the east side, home-style at a fair price", "I cook stuff", "Food for sale", "The best business ever"], answer: 0, why: "It says what you do, who it is for and what makes you different." },
            { objective: "O1", q: "The AI gives you three offers, but none sound like you. What do you do?", options: ["Use the first one anyway", "Pick one and change the words so it sounds like you", "Give up on the business", "Copy a competitor's offer"], answer: 1, why: "The offer should be yours, so you edit the best one to fit you." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pricing so you do not lose money",
          minutes: 6,
          goal: "Work out a price that covers your costs and pays you for your time.",
          text: [
            "Many small businesses charge too little. To set a fair price, add up your costs: supplies, gas or bus fare, any fees, and your time.",
            "Ask the AI to set up the math with you, using your own numbers: \"I cater a party for 20 people. Food costs $120, containers $15, gas $10, and it takes me 8 hours. I want to earn $18 an hour. What price covers it?\" Then check the math yourself with a calculator.",
            "AI does not know local prices. Look at what others near you charge, and ask a free business advisor. Taxes and licenses are real costs too: check with your city or county, your state, and the IRS (irs.gov) about what applies to you."
          ],
          steps: ["List every cost for one job: supplies, travel, fees.", "Decide what you want to earn per hour, and count your hours.", "Ask the AI to add it up using your numbers.", "Check the math yourself with a calculator.", "Compare with local prices and ask an advisor."],
          words: [["Cost", "money you spend to do the work."], ["Profit", "the money left after you pay all your costs."]],
          slides: [
            { title: "Many small businesses charge too little", bullets: ["Count every cost", "Count your time"] },
            { title: "Costs to add up", bullets: ["Supplies", "Gas or bus fare", "Fees", "Your hours"] },
            { title: "Use AI, then check", bullets: ["Give it your real numbers", "Check the math with a calculator", "Compare local prices and ask an advisor"] }
          ],
          sources: [{ name: "IRS: Small business and self-employed", url: "https://www.irs.gov/businesses/small-businesses-self-employed" }],
          tryIt: "Pick one job your business would do. List the costs and hours, ask an AI assistant to work out a price that covers them, then check the math yourself.",
          youCanNow: "set a price that covers your costs and your time, and check the math yourself.",
          quickCheck: [
            { objective: "O2", q: "Which cost do many small business owners forget to count?", options: ["Supplies", "Fees", "Their own time", "Gas"], answer: 2, why: "Your time is a cost too, so the price must pay you for your hours." },
            { objective: "O2", q: "The AI says your price should be $150, but your own costs add up to $160. What do you do?", options: ["Charge $150", "Charge less to win customers", "Ignore your costs", "Recheck the math with a calculator and fix the price"], answer: 3, why: "AI can make math mistakes, and a price below your costs loses money." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Finding free business help",
          minutes: 4,
          goal: "Find a free business advisor near you.",
          text: [
            "You do not have to figure it all out alone. The U.S. Small Business Administration (SBA) works with resource partners that help people start and grow businesses.",
            "SCORE is a network of volunteer business mentors who give advice at no cost. Small Business Development Centers (SBDCs) offer counseling and training. Women's Business Centers offer free to low-cost help for women starting or growing a business. Veterans Business Outreach Centers serve veterans and military families.",
            "These advisors can help with licenses, taxes, loans and plans for your area. Bring your questions and your one-page plan."
          ],
          steps: ["Open the SBA's resource partners page.", "Find SCORE, an SBDC or a Women's Business Center near you.", "Write down the name and how to contact them.", "Write three questions to ask, such as which licenses you need."],
          words: [["Mentor", "an experienced person who gives you advice."], ["SBA", "the U.S. Small Business Administration, the federal agency that helps small businesses."]],
          sources: [{ name: "SBA: Resource partners", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          slides: [
            { title: "You are not alone", bullets: ["The SBA works with free and low-cost helpers"] },
            { title: "Who can help", bullets: ["SCORE: volunteer mentors at no cost", "SBDCs: counseling and training", "Women's Business Centers: free to low-cost"] },
            { title: "Come prepared", bullets: ["Bring your one-page plan", "Ask about licenses, taxes and loans for your area"] }
          ],
          tryIt: "Find one free business advisor near you through the SBA's resource partners page. Write down their name, contact and three questions to ask.",
          youCanNow: "find free, official business help near you.",
          quickCheck: [
            { objective: "O3", q: "What is SCORE?", options: ["A network of volunteer business mentors who advise at no cost", "A credit score company", "A paid loan service", "A state tax office"], answer: 0, why: "SCORE is an SBA resource partner with volunteer mentors at no cost." },
            { objective: "O3", q: "You are not sure which licenses your catering business needs. What do you do?", options: ["Skip licenses", "Ask a free business advisor and check your city, county and state", "Trust the first AI answer", "Ask a customer"], answer: 1, why: "Advisors and your local and state offices know the rules for your area." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: From skill to business",
        questions: [
          { objective: "O1", q: "What does a clear offer say?", options: ["Your life story", "What you do, who it is for, and what makes you different", "Only your price", "Your home address"], answer: 1, why: "Those three parts tell customers why to choose you." },
          { objective: "O2", q: "Which should you count when setting a price?", options: ["Only supplies", "Only your time", "Supplies, travel, fees and your time", "Nothing; guess"], answer: 2, why: "All costs, including your time, must be covered." },
          { objective: "O2", q: "The AI works out a price for you. What next?", options: ["Check the math yourself and compare local prices", "Use it without checking", "Double it", "Never charge"], answer: 0, why: "AI can make math mistakes and does not know local prices." },
          { objective: "O3", q: "SCORE offers:", options: ["Paid loans only", "Tax filing", "Licenses", "Volunteer business mentors at no cost"], answer: 3, why: "The SBA describes SCORE as volunteer mentors offering advice at no cost." },
          { objective: "O3", q: "Where should you check which licenses you need?", options: ["The AI only", "Your city or county, your state, or a free business advisor", "A social media post", "A friend in another state"], answer: 1, why: "Licenses depend on where you are; official sources and advisors know." }
        ]
      }
    },
    {
      name: "Chapter 2: Running and growing",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing your business description and a post",
          minutes: 5,
          goal: "Write a three-sentence business description and one social media post.",
          text: [
            "A short description tells people who you are, what you do and how to reach you. You can use it on a flyer, a business card, or a free business page.",
            "Ask the AI: \"Write a warm three-sentence description for my weekend meal-prep business for busy families. Then write one short Facebook post announcing my first menu.\" Ask for a version in another language if your customers need it.",
            "Edit so it sounds like you. Only promise what you can deliver. Use a business phone or email you are comfortable sharing publicly, not your home address."
          ],
          steps: ["Ask the AI for a three-sentence description using your offer.", "Ask for one short social media post.", "Edit both so they sound like you.", "Check that every promise is true and the contact info is safe to share."],
          words: [["Social media post", "a short message with words and maybe a picture, shared on apps like Facebook or Instagram."]],
          slides: [
            { title: "A short description", bullets: ["Who you are", "What you do", "How to reach you"] },
            { title: "Ask AI for both", bullets: ["Three-sentence description", "One short post", "Another language if needed"] },
            { title: "Before you share", bullets: ["Make it sound like you", "Only promise what you can deliver", "No home address"] }
          ],
          tryIt: "Ask an AI assistant to write a three-sentence description of your business and one short social media post. Edit both to sound like you.",
          youCanNow: "write a short business description and a post that sound like you.",
          quickCheck: [
            { objective: "O4", q: "What three things does a short business description tell people?", options: ["Your prices, your bank and your age", "Your competitors, your fears and your goals", "Who you are, what you do and how to reach you", "Your home address, your hours and your family"], answer: 2, why: "A description says who you are, what you do and how to reach you." },
            { objective: "O4", q: "The AI's post promises \"same-day delivery\" but you cannot do that. What do you do?", options: ["Post it; it sounds good", "Add it to every post", "Post it and hope", "Remove the promise before posting"], answer: 3, why: "Only promise what you can deliver." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Keeping simple money records",
          minutes: 5,
          goal: "Set up a simple free sheet to track money in and money out.",
          text: [
            "Keeping records helps you see if you are making money, and you will need them at tax time. You can start with a free spreadsheet like Google Sheets or Excel on the web.",
            "Ask the AI: \"Help me set up a simple sheet for my small business with columns for date, what it was, money in, money out, and notes. Show me how to add up each column.\" Then make it yourself.",
            "Write down every sale and every expense the same day, and keep receipts (a photo works). Ask a free business advisor or a tax professional what records you need for taxes. Do not type bank account numbers into the AI."
          ],
          steps: ["Open Google Sheets or Excel on the web.", "Make columns: date, what it was, money in, money out, notes.", "Ask the AI how to add up each column.", "Write down every sale and expense the same day.", "Keep a photo of each receipt."],
          words: [["Spreadsheet", "a grid of rows and columns for numbers and lists."], ["Expense", "money you spend for the business."], ["Receipt", "proof of a purchase or payment."]],
          slides: [
            { title: "Why keep records", bullets: ["See if you are making money", "You need them at tax time"] },
            { title: "A simple sheet", bullets: ["Date, what it was", "Money in, money out", "Notes"] },
            { title: "Good habits", bullets: ["Write it down the same day", "Photo of each receipt", "No bank numbers in the AI"] }
          ],
          tryIt: "Make a simple sheet in Google Sheets or Excel on the web with the five columns. Add three pretend sales and two expenses, and add up money in and money out.",
          youCanNow: "keep simple money records for a small business in a free spreadsheet.",
          quickCheck: [
            { objective: "O5", q: "Why keep simple money records?", options: ["To see if you are making money and be ready at tax time", "Because AI needs them", "To share with customers", "To post online"], answer: 0, why: "Records show if you make money and you need them for taxes." },
            { objective: "O5", q: "You bought $30 of supplies but lost the paper receipt. What could you have done?", options: ["Nothing; receipts do not matter", "Taken a photo of the receipt the same day", "Typed your bank number into the AI", "Guessed the amount at tax time"], answer: 1, why: "A photo of each receipt keeps a record even if the paper is lost." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Answering customers and putting it all together",
          minutes: 5,
          goal: "Write polite customer replies and finish your one-page business plan.",
          text: [
            "Good service brings customers back. AI can help you write polite replies fast: confirming an order, saying you are fully booked, or handling a complaint calmly.",
            "For a complaint, ask: \"Write a calm, kind reply to a customer who says the food arrived late. Apologize, explain we will fix it, and offer a small discount next time.\" Read it and make sure the offer is one you can afford.",
            "Now put your work together on one page: your offer, your price and costs, your description and post, a note about your records, and the free advisor you found. That page is the start of your business plan."
          ],
          steps: ["Ask the AI for a polite reply for a common customer message.", "Check every promise before you send it.", "Put your offer, price, description, post, records note and advisor on one page.", "Bring the page to your free advisor meeting."],
          words: [["Business plan", "a written plan for what your business sells, to whom, and how it will make money."]],
          slides: [
            { title: "Good service brings customers back", bullets: ["Confirm orders", "Say \"fully booked\" kindly", "Handle complaints calmly"] },
            { title: "Complaint replies", bullets: ["Apologize", "Say how you will fix it", "Only offer what you can afford"] },
            { title: "Your one-page plan", bullets: ["Offer and price", "Description and post", "Records and your free advisor"] }
          ],
          tryIt: "Final task: make a one-page plan with your offer, a checked price that covers your costs, a three-sentence description, one social media post, and the contact of a free business advisor near you.",
          youCanNow: "plan, price and promote a small business and know where to get free expert help.",
          quickCheck: [
            { objective: "O6", q: "What goes on your one-page business plan?", options: ["Only your price", "Only your social media post", "Offer, price and costs, description and post, records note and a free advisor", "Your customers' phone numbers"], answer: 2, why: "The one-page plan puts all your work together in one place." },
            { objective: "O6", q: "You are fully booked this weekend and a customer asks for an order. What do you send?", options: ["No reply", "A yes, then cancel later", "A rude reply", "A polite reply that you are booked and offering another date"], answer: 3, why: "A polite, honest reply keeps the customer coming back." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running and growing",
        questions: [
          { objective: "O4", q: "What should a short business description include?", options: ["Your Social Security number", "Who you are, what you do, and how to reach you", "Your home address", "Your bank balance"], answer: 1, why: "That tells customers what they need to know." },
          { objective: "O4", q: "Which contact information is safest to share publicly?", options: ["Your home address", "Your bank account", "A business phone or email you are comfortable sharing", "Your ID number"], answer: 2, why: "Keep private details private." },
          { objective: "O5", q: "Which columns belong in a simple money sheet?", options: ["Date, what it was, money in, money out, notes", "Only your name", "Your password", "Customer Social Security numbers"], answer: 0, why: "Those columns track money in and out." },
          { objective: "O5", q: "When should you write down a sale?", options: ["At the end of the year", "Never", "Only big sales", "The same day"], answer: 3, why: "Same-day records are accurate." },
          { objective: "O6", q: "A customer complains the food was late. A good reply:", options: ["Blames the customer", "Apologizes, says how you will fix it, and offers only what you can afford", "Ignores it", "Promises free food forever"], answer: 1, why: "Calm, honest replies keep customers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Entrepreneurship and Small Business",
    questions: [
      { objective: "O1", q: "A good place to start a business idea is:", options: ["What people already ask you to do", "Whatever is popular online", "A random idea from AI", "Copying a big company"], answer: 0, why: "Things people already ask you for show real demand." },
      { objective: "O1", q: "A customer is:", options: ["Your supplier", "A person who pays for what you sell", "Your mentor", "A bank"], answer: 1, why: "Customers buy from you." },
      { objective: "O1", q: "Why ask the AI for three offers instead of one?", options: ["It costs less", "It is required", "So you can pick the one that fits you best", "To confuse customers"], answer: 2, why: "Choices help you find the best fit." },
      { objective: "O2", q: "Many small businesses make which pricing mistake?", options: ["Charging too much", "Never charging", "Charging in other currencies", "Charging too little"], answer: 3, why: "Forgetting costs and time leads to low prices." },
      { objective: "O2", q: "Profit is:", options: ["Money left after you pay all your costs", "All money you take in", "Your supplies", "A loan"], answer: 0, why: "Profit is what is left over." },
      { objective: "O2", q: "When AI works out your price, you should:", options: ["Trust it fully", "Check the math yourself", "Ignore your costs", "Ask a stranger"], answer: 1, why: "AI can make math mistakes." },
      { objective: "O2", q: "Where can you learn about business taxes?", options: ["A pop-up ad", "A video game", "irs.gov, a free advisor or a tax professional", "Only the AI"], answer: 2, why: "Official sources and professionals know tax rules." },
      { objective: "O3", q: "The SBA is:", options: ["A bank", "A social media app", "A private club", "The U.S. Small Business Administration"], answer: 3, why: "It is the federal agency that helps small businesses." },
      { objective: "O3", q: "Small Business Development Centers offer:", options: ["Counseling and training", "Free inventory", "Free buildings", "Paid ads"], answer: 0, why: "SBDCs help people start and grow businesses." },
      { objective: "O3", q: "Women's Business Centers offer services that are:", options: ["Always expensive", "Free to low-cost", "Only for large companies", "Only online"], answer: 1, why: "The SBA describes them as free to low-cost." },
      { objective: "O3", q: "What should you bring to a free advisor meeting?", options: ["Nothing", "Your bank PIN", "Your one-page plan and questions", "Your passwords"], answer: 2, why: "A plan and questions make the meeting useful." },
      { objective: "O4", q: "A business description should:", options: ["Promise things you cannot do", "Include your home address", "Be ten pages", "Sound like you and be true"], answer: 3, why: "Honest and personal builds trust." },
      { objective: "O4", q: "Your customers mostly speak Spanish. You can:", options: ["Ask the AI for a Spanish version of your post", "Only post in English", "Not post at all", "Use only pictures"], answer: 0, why: "A second language reaches your customers." },
      { objective: "O4", q: "Before sharing a post, check that:", options: ["It is as long as possible", "Every promise is true and the contact info is safe", "It has your Social Security number", "It mentions every competitor"], answer: 1, why: "Promises must be real and contact info safe." },
      { objective: "O5", q: "A spreadsheet is:", options: ["A bed sheet", "A tax form", "A grid of rows and columns", "A business license"], answer: 2, why: "Spreadsheets organize numbers and lists." },
      { objective: "O5", q: "Which free tools can hold your money records?", options: ["A paid accounting firm only", "A text message", "A photo album", "Google Sheets or Excel on the web"], answer: 3, why: "Both are free spreadsheet tools." },
      { objective: "O5", q: "What should you keep for each expense?", options: ["A receipt, a photo works", "Nothing", "A memory", "The AI's guess"], answer: 0, why: "Receipts prove what you spent." },
      { objective: "O5", q: "Which should you never type into the AI?", options: ["\"Help me set up columns\"", "Your bank account number", "\"Write a friendly post\"", "Your business name"], answer: 1, why: "Bank numbers are private." },
      { objective: "O6", q: "When offering a discount after a complaint, make sure:", options: ["It is as big as possible", "You promise free service forever", "It is one you can afford", "You never apologize"], answer: 2, why: "Only offer what your business can afford." },
      { objective: "O6", q: "Your one-page plan includes:", options: ["Only your logo", "Your home address", "Your passwords", "Offer, price, description, post, records and a free advisor"], answer: 3, why: "Those parts make the final task." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      7,
      10,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Offer",
        objective: "O1",
        notYet: "No offer, or it does not say what, who for, or why you.",
        meets: "One sentence with what you do, who it is for and what makes you different.",
        exceeds: "Edited so it clearly sounds like the learner."
      },
      {
        name: "Price covers costs",
        objective: "O2",
        notYet: "Price below costs, or the math was not checked.",
        meets: "Lists costs and hours, and the price covers them with the math checked by hand.",
        exceeds: "Compared with local prices and noted taxes and licenses to ask about."
      },
      {
        name: "Description and post",
        objective: "O4",
        notYet: "Missing, or makes promises the business cannot keep.",
        meets: "Three-sentence description and one post, true and with safe contact info.",
        exceeds: "Includes a second-language version for customers who need it."
      },
      {
        name: "Free advisor",
        objective: "O3",
        notYet: "No advisor named.",
        meets: "Names a SCORE, SBDC or Women's Business Center advisor with contact details.",
        exceeds: "Lists three questions to ask at the meeting."
      },
      {
        name: "One-page plan",
        objective: "O6",
        notYet: "Parts are missing or spread across pages.",
        meets: "All parts are on one page, including a note about money records.",
        exceeds: "Ready to bring to an advisor meeting, with a sample customer reply."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who meet with a free business advisor within 60 days (follow-up survey)",
      "Learners who raise prices to cover costs or start keeping money records",
      "Learners who start or register a small business within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet, or a library computer",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "Google Sheets or Excel on the web (free) and a calculator",
      "Paper for the one-page plan",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask each learner to use their own real or planned business in every task.",
      "Do the pricing math together with calculators; many learners find they have been charging too little.",
      "Invite a SCORE mentor or SBDC advisor to the last session if you can.",
      "Remind learners that taxes and licenses differ by place and to check official sources or an advisor; give no tax advice.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
