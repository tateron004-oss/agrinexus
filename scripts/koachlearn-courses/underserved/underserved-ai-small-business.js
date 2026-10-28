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
  chapters: [
    {
      name: "Chapter 1: From skill to business",
      lessons: [
        {
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
          youCanNow: "turn a skill into a clear, one-sentence business offer."
        },
        {
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
          youCanNow: "set a price that covers your costs and your time, and check the math yourself."
        },
        {
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
          youCanNow: "find free, official business help near you."
        }
      ],
      check: {
        title: "Knowledge Check 1: From skill to business",
        questions: [
          { q: "What does a clear offer say?", options: ["Your life story", "What you do, who it is for, and what makes you different", "Only your price", "Your home address"], answer: 1, why: "Those three parts tell customers why to choose you." },
          { q: "Which should you count when setting a price?", options: ["Only supplies", "Only your time", "Supplies, travel, fees and your time", "Nothing; guess"], answer: 2, why: "All costs, including your time, must be covered." },
          { q: "The AI works out a price for you. What next?", options: ["Check the math yourself and compare local prices", "Use it without checking", "Double it", "Never charge"], answer: 0, why: "AI can make math mistakes and does not know local prices." },
          { q: "SCORE offers:", options: ["Paid loans only", "Tax filing", "Licenses", "Volunteer business mentors at no cost"], answer: 3, why: "The SBA describes SCORE as volunteer mentors offering advice at no cost." },
          { q: "Where should you check which licenses you need?", options: ["The AI only", "Your city or county, your state, or a free business advisor", "A social media post", "A friend in another state"], answer: 1, why: "Licenses depend on where you are; official sources and advisors know." }
        ]
      }
    },
    {
      name: "Chapter 2: Running and growing",
      lessons: [
        {
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
          youCanNow: "write a short business description and a post that sound like you."
        },
        {
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
          youCanNow: "keep simple money records for a small business in a free spreadsheet."
        },
        {
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
          youCanNow: "plan, price and promote a small business and know where to get free expert help."
        }
      ],
      check: {
        title: "Knowledge Check 2: Running and growing",
        questions: [
          { q: "What should a short business description include?", options: ["Your Social Security number", "Who you are, what you do, and how to reach you", "Your home address", "Your bank balance"], answer: 1, why: "That tells customers what they need to know." },
          { q: "Which contact information is safest to share publicly?", options: ["Your home address", "Your bank account", "A business phone or email you are comfortable sharing", "Your ID number"], answer: 2, why: "Keep private details private." },
          { q: "Which columns belong in a simple money sheet?", options: ["Date, what it was, money in, money out, notes", "Only your name", "Your password", "Customer Social Security numbers"], answer: 0, why: "Those columns track money in and out." },
          { q: "When should you write down a sale?", options: ["At the end of the year", "Never", "Only big sales", "The same day"], answer: 3, why: "Same-day records are accurate." },
          { q: "A customer complains the food was late. A good reply:", options: ["Blames the customer", "Apologizes, says how you will fix it, and offers only what you can afford", "Ignores it", "Promises free food forever"], answer: 1, why: "Calm, honest replies keep customers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Entrepreneurship and Small Business",
    questions: [
      { q: "A good place to start a business idea is:", options: ["What people already ask you to do", "Whatever is popular online", "A random idea from AI", "Copying a big company"], answer: 0, why: "Things people already ask you for show real demand." },
      { q: "A customer is:", options: ["Your supplier", "A person who pays for what you sell", "Your mentor", "A bank"], answer: 1, why: "Customers buy from you." },
      { q: "Why ask the AI for three offers instead of one?", options: ["It costs less", "It is required", "So you can pick the one that fits you best", "To confuse customers"], answer: 2, why: "Choices help you find the best fit." },
      { q: "Many small businesses make which pricing mistake?", options: ["Charging too much", "Never charging", "Charging in other currencies", "Charging too little"], answer: 3, why: "Forgetting costs and time leads to low prices." },
      { q: "Profit is:", options: ["Money left after you pay all your costs", "All money you take in", "Your supplies", "A loan"], answer: 0, why: "Profit is what is left over." },
      { q: "When AI works out your price, you should:", options: ["Trust it fully", "Check the math yourself", "Ignore your costs", "Ask a stranger"], answer: 1, why: "AI can make math mistakes." },
      { q: "Where can you learn about business taxes?", options: ["A pop-up ad", "A video game", "irs.gov, a free advisor or a tax professional", "Only the AI"], answer: 2, why: "Official sources and professionals know tax rules." },
      { q: "The SBA is:", options: ["A bank", "A social media app", "A private club", "The U.S. Small Business Administration"], answer: 3, why: "It is the federal agency that helps small businesses." },
      { q: "Small Business Development Centers offer:", options: ["Counseling and training", "Free inventory", "Free buildings", "Paid ads"], answer: 0, why: "SBDCs help people start and grow businesses." },
      { q: "Women's Business Centers offer services that are:", options: ["Always expensive", "Free to low-cost", "Only for large companies", "Only online"], answer: 1, why: "The SBA describes them as free to low-cost." },
      { q: "What should you bring to a free advisor meeting?", options: ["Nothing", "Your bank PIN", "Your one-page plan and questions", "Your passwords"], answer: 2, why: "A plan and questions make the meeting useful." },
      { q: "A business description should:", options: ["Promise things you cannot do", "Include your home address", "Be ten pages", "Sound like you and be true"], answer: 3, why: "Honest and personal builds trust." },
      { q: "Your customers mostly speak Spanish. You can:", options: ["Ask the AI for a Spanish version of your post", "Only post in English", "Not post at all", "Use only pictures"], answer: 0, why: "A second language reaches your customers." },
      { q: "Before sharing a post, check that:", options: ["It is as long as possible", "Every promise is true and the contact info is safe", "It has your Social Security number", "It mentions every competitor"], answer: 1, why: "Promises must be real and contact info safe." },
      { q: "A spreadsheet is:", options: ["A bed sheet", "A tax form", "A grid of rows and columns", "A business license"], answer: 2, why: "Spreadsheets organize numbers and lists." },
      { q: "Which free tools can hold your money records?", options: ["A paid accounting firm only", "A text message", "A photo album", "Google Sheets or Excel on the web"], answer: 3, why: "Both are free spreadsheet tools." },
      { q: "What should you keep for each expense?", options: ["A receipt, a photo works", "Nothing", "A memory", "The AI's guess"], answer: 0, why: "Receipts prove what you spent." },
      { q: "Which should you never type into the AI?", options: ["\"Help me set up columns\"", "Your bank account number", "\"Write a friendly post\"", "Your business name"], answer: 1, why: "Bank numbers are private." },
      { q: "When offering a discount after a complaint, make sure:", options: ["It is as big as possible", "You promise free service forever", "It is one you can afford", "You never apologize"], answer: 2, why: "Only offer what your business can afford." },
      { q: "Your one-page plan includes:", options: ["Only your logo", "Your home address", "Your passwords", "Offer, price, description, post, records and a free advisor"], answer: 3, why: "Those parts make the final task." }
    ]
  }
};
