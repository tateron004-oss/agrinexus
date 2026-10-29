"use strict";

// Koach Learn course: Small Business -> "AI for Sales and Business Growth". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// CAN-SPAM requirements were checked on ftc.gov on 27 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "AI for Sales and Business Growth",
  skills: "Describing your ideal customer, Writing a clear offer, Keeping a simple customer list, Writing follow-up messages, Reading sales numbers, Planning a 30-day growth push",
  outcome: "use AI to plan and run a 30-day sales push for your business: describe your ideal customer, write one clear offer, set up a simple customer list, write a follow-up sequence that follows the email rules, and track the results in a spreadsheet.",
  about: [
    "This course is for small business owners who want more sales from the customers they already have and the ones nearby: shops, restaurants, salons, cleaning and repair services, caterers and food trucks. Many of our students are minority business owners growing without a big marketing budget.",
    "You will use a free AI assistant to think through who buys from you, shape an offer that makes sense, follow up with customers who said yes to hearing from you, and read your own numbers to see what works. AI helps you write and think; your judgment and your customer relationships do the selling.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. The tasks build into a 30-day sales plan."
  ],
  finalTask: "Write a one-page 30-day sales plan: your ideal customer in three sentences, one offer with a clear price and end date, where your customer list lives and how people joined it, a three-message follow-up sequence (with your address and an unsubscribe line on any marketing email), and a tracking table with the numbers you will check each week.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners who want more sales from current and nearby customers: shops, restaurants, salons, cleaning and repair services, caterers and food trucks. Many are minority owners growing without a big marketing budget.",
    startingPoint: "Know their regular customers and products well. Little use of written offers, customer lists with permission, email or text follow-ups, sales tracking or AI for planning.",
    gap: "Without a plan, sales pushes are random, discounts can wipe out profit, and marketing messages can break email and texting rules. Owners need a simple 30-day plan built with AI help that targets the right customers, makes a profitable offer, follows up legally and tracks what works.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a smartphone or computer; spreadsheets are easier on a computer",
      "Time: about 5-minute lessons that fit into a busy workday",
      "Rules: CAN-SPAM for marketing email and separate federal rules for marketing texts",
      "Privacy: customer lists stay protected and out of AI tools"
    ],
    prerequisites: "\"Introduction to AI for Small Business\" is helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given what you see with your best customers", action: "write a short, specific description of your ideal customer with AI help", standard: "in three sentences that say who they are, what they need and why they choose you" },
    { id: "O2", condition: "Given offer ideas from AI", action: "create one clear, honest offer", standard: "with what, price, reason to act and end date, and a profit worked out on paper" },
    { id: "O3", condition: "Using a spreadsheet", action: "set up a customer list that records permission to contact", standard: "with a column for agreement and date, a sign-up method, and no real customer data in AI" },
    { id: "O4", condition: "Given CAN-SPAM and the texting rules", action: "write a three-message follow-up sequence with AI help", standard: "with a postal address and unsubscribe line on any marketing email, and texts only with clear permission" },
    { id: "O5", condition: "Given four weeks of sales numbers", action: "track your sales numbers in a table and check AI's patterns", standard: "with formulas for totals, customer names removed and at least one pattern confirmed in the sheet" },
    { id: "O6", condition: "Given your customer, offer, list, follow-ups and tracking", action: "write a one-page 30-day sales plan", standard: "fitted to your real hours, with weekly numbers to check and a day-30 review" }
  ],
  chapters: [
    {
      name: "Chapter 1: Who buys and what you offer",
      lessons: [
        {
          objectives: ["O1"],
          title: "Describing your ideal customer",
          minutes: 5,
          goal: "Write a short, specific description of the customer you most want more of.",
          text: [
            "You cannot sell well to everyone. Think of your best customers: the ones who come back, spend well and send friends. What do they have in common?",
            "Write three sentences: who they are, what they need, and what makes them choose you. Example for a West African restaurant: \"Office workers within two miles who want a filling lunch under $15. They are busy and order on their phones. They choose us for big portions and fast pickup.\"",
            "AI can help you think: \"Here is what I know about my best customers. What questions should I ask myself to describe them better?\" Use what you see in your shop, not guesses about groups of people."
          ],
          steps: ["Picture your five best customers.", "Write what they have in common.", "Write three sentences: who, what they need, why you.", "Ask AI for questions that sharpen it."],
          words: [["Ideal customer", "the kind of customer who is the best fit for your business."], ["Repeat customer", "someone who buys from you more than once."]],
          slides: [
            { title: "Not everyone", bullets: ["Think of your best customers", "Who comes back, spends well, sends friends?"] },
            { title: "Three sentences", bullets: ["Who they are", "What they need", "Why they choose you"] },
            { title: "Example: lunch restaurant", bullets: ["Office workers within two miles", "Want a filling lunch under $15", "Choose us for big portions and fast pickup"] }
          ],
          tryIt: "Write your ideal customer in three sentences. Ask an AI assistant for five questions to make it sharper, answer them, and rewrite your three sentences.",
          youCanNow: "describe the customer you most want more of in three clear sentences.",
          quickCheck: [
            { objective: "O1", q: "Where should your ideal customer description come from?", options: ["What you see with your real best customers", "A guess about everyone in town", "Whatever AI says first", "Your competitor's website"], answer: 0, why: "Your real best customers show who to look for." },
            { objective: "O1", q: "Your description says \"everyone who likes food\". What would you do?", options: ["Keep it because it includes more people", "Ask AI for sharpening questions and make it specific", "Remove the description", "Copy a big chain's description"], answer: 1, why: "A specific description helps you reach the right people." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing an offer that makes sense",
          minutes: 5,
          goal: "Create one clear, honest offer with a price, a reason to act and an end date.",
          text: [
            "An offer is what you are selling, at what price, and why someone should buy now. Good offers are simple: \"Lunch combo: rice, stew and drink, $13, weekdays 11 to 2 through June 30.\"",
            "Ask AI to brainstorm, then you choose: \"I run a mobile detailing service. My ideal customer is busy parents. Give me five offer ideas for the spring that keep my profit.\" Check the math yourself: a discount that loses money on every sale is not growth.",
            "Keep it honest. Say the real price, the real end date and any limits. Do not call it a sale if it is your normal price."
          ],
          steps: ["Ask AI for five offer ideas for your ideal customer.", "Pick one and work out your cost and profit.", "Write it with what, price, reason to act and end date.", "Check it is honest and clear."],
          words: [["Offer", "what you sell, the price and the reason to buy now."], ["Profit", "money left after you pay your costs."], ["Margin", "the share of the price that is profit."]],
          slides: [
            { title: "A clear offer has", bullets: ["What you sell", "The price", "A reason to act and an end date"] },
            { title: "AI brainstorms, you choose", bullets: ["Ask for five ideas for your ideal customer", "Check the math: keep a profit"] },
            { title: "Keep it honest", bullets: ["Real price, real end date, real limits", "A \"sale\" must be lower than your normal price"] }
          ],
          tryIt: "Ask AI for five offer ideas for your ideal customer. Pick one, work out your cost and profit on paper, and write the offer in one sentence with an end date.",
          youCanNow: "write a clear, honest offer that still makes a profit.",
          quickCheck: [
            { objective: "O2", q: "What does a clear offer include?", options: ["Only a big discount", "A long list of products", "What, price, reason to act and end date", "A promise that it never ends"], answer: 2, why: "These parts make an offer easy to understand and act on." },
            { objective: "O2", q: "AI suggests half off everything for a month. What would you do first?", options: ["Post it today", "Make it 70% off instead", "Ask customers if they like it", "Work out on paper whether you still make a profit"], answer: 3, why: "An offer must still leave money after costs." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Starting a simple customer list",
          minutes: 5,
          goal: "Set up a simple customer list in a spreadsheet, with permission to contact.",
          text: [
            "Your customer list is your most valuable sales tool. It can be a spreadsheet with columns like First name, How to contact (email or phone), Agreed to messages (yes/no and date), Last visit, What they bought, and Notes.",
            "Only add people who gave you their details and agreed to hear from you: a sign-up sheet at the counter, a QR code to a form, or a checkbox in your booking tool. Write down when and how they agreed.",
            "Keep the list private and safe: a password on the file or account, shared only with staff who need it. Do not paste the list into AI tools. If you want AI help, describe the columns or use made-up sample rows."
          ],
          steps: ["Make a spreadsheet with the columns above.", "Add a sign-up method: counter sheet, QR form or booking checkbox.", "Record when and how each person agreed.", "Protect the file and keep it out of AI tools."],
          words: [["Customer list", "a record of customers who agreed to hear from you."], ["Opt in", "when a person agrees to receive your messages."], ["CRM", "customer relationship management: software or a sheet for tracking customers."]],
          slides: [
            { title: "Your most valuable sales tool", bullets: ["A simple spreadsheet works", "Name, contact, agreed (date), last visit, notes"] },
            { title: "Permission first", bullets: ["Counter sign-up, QR form or booking checkbox", "Record when and how they agreed"] },
            { title: "Keep it safe", bullets: ["Password on the file or account", "Share only with staff who need it", "Never paste the list into AI tools"] }
          ],
          tryIt: "Make your customer list sheet with the six columns. Add three made-up sample rows, then write how real customers will sign up (counter sheet, QR form or booking checkbox).",
          youCanNow: "set up a private customer list with a record of permission to contact.",
          quickCheck: [
            { objective: "O3", q: "Who belongs on your customer list?", options: ["People who agreed to hear from you", "Anyone whose number you can find", "Your competitors' customers", "Everyone in a phone book"], answer: 0, why: "Only people who said yes to hearing from you go on the list." },
            { objective: "O3", q: "You want AI to help design your customer list sheet. What would you share?", options: ["Your full real customer list", "Customers' phone numbers", "The column names or made-up sample rows", "Your password to the sheet"], answer: 2, why: "Column names or sample rows get help without sharing real customer data." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Who buys and what you offer",
        questions: [
          { objective: "O1", q: "What is an ideal customer?", options: ["Anyone with money", "The kind of customer who is the best fit for your business", "Only people who complain", "Your competitor's customers"], answer: 1, why: "It describes who you most want more of." },
          { objective: "O2", q: "Which is a clear offer?", options: ["\"Great deals!\"", "\"Cheap stuff\"", "\"Come in sometime\"", "\"Lunch combo: rice, stew and drink, $13, weekdays 11-2 through June 30\""], answer: 3, why: "It says what, the price, when and the end date." },
          { objective: "O2", q: "AI suggests a 60% discount. What do you check first?", options: ["Whether you still make a profit", "Whether it sounds exciting", "Nothing", "The font"], answer: 0, why: "A discount that loses money is not growth." },
          { objective: "O3", q: "Who belongs on your customer list?", options: ["Anyone whose number you find", "Competitors' customers", "People who agreed to hear from you", "Random phone numbers"], answer: 2, why: "Permission comes first." },
          { objective: "O3", q: "You want AI help organizing your customer list. What do you share?", options: ["The full list with phone numbers", "Customer card numbers", "The column names or made-up sample rows", "Your file password"], answer: 2, why: "Real customer data stays out of AI tools." }
        ]
      }
    },
    {
      name: "Chapter 2: Following up and growing",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing follow-ups that follow the rules",
          minutes: 6,
          goal: "Write a three-message follow-up sequence and make marketing emails follow CAN-SPAM.",
          text: [
            "Most sales come from following up. A simple sequence: (1) thank you after a visit, (2) a reminder or tip a week later, (3) your offer with its end date. Ask AI: \"Write three short follow-up emails for my salon in my brand voice. Use [first name].\"",
            "Marketing emails in the US must follow the CAN-SPAM Act. The FTC's guide says: use honest From and subject lines, make clear it is an ad, include a valid postal address, give a clear way to unsubscribe, and honor unsubscribe requests within 10 business days.",
            "Marketing texts have their own federal rules (the TCPA, enforced by the FCC), and they generally need the customer's clear permission. Before you send marketing texts, check the rules at fcc.gov or ask a professional, and use a texting tool that handles opt-outs."
          ],
          steps: ["Plan three messages: thanks, reminder or tip, offer.", "Ask AI to draft them with [first name] blanks.", "Add your postal address and an unsubscribe line to marketing emails.", "Honor unsubscribes quickly.", "Check texting rules before sending marketing texts."],
          words: [["Follow-up sequence", "a planned series of messages sent after a customer's visit or sign-up."], ["CAN-SPAM", "the US law with rules for commercial email."], ["Unsubscribe", "a way for people to stop getting your messages."]],
          slides: [
            { title: "A three-message sequence", bullets: ["1. Thank you after the visit", "2. Reminder or tip a week later", "3. Your offer with an end date"] },
            { title: "CAN-SPAM basics (FTC)", bullets: ["Honest From and subject lines; say it is an ad", "A valid postal address", "Clear unsubscribe, honored within 10 business days"] },
            { title: "Marketing texts", bullets: ["Separate federal rules (TCPA, FCC)", "Get clear permission first", "Check fcc.gov or ask a professional"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Ask AI to draft your three-message follow-up sequence with [first name]. Add your postal address and an unsubscribe line to the offer email.",
          youCanNow: "write a follow-up sequence and make marketing emails meet the CAN-SPAM basics.",
          quickCheck: [
            { objective: "O4", q: "What must every US marketing email include under CAN-SPAM?", options: ["A coupon", "A valid postal address and a way to unsubscribe", "A photo", "The customer's full name"], answer: 1, why: "CAN-SPAM requires a postal address and a way to unsubscribe." },
            { objective: "O4", q: "You want to send marketing texts about your offer. What would you do first?", options: ["Text everyone in your phone", "Send texts late at night", "Use a bought list of numbers", "Get clear permission and check the federal texting rules"], answer: 3, why: "Marketing texts have their own federal rules and need clear permission." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Reading your sales numbers with AI help",
          minutes: 5,
          goal: "Track a few sales numbers weekly and use AI to help spot patterns.",
          text: [
            "You only need a few numbers: sales per day, number of customers, average sale (sales divided by customers), your best-selling items, and how many people used your offer.",
            "Keep them in a spreadsheet by week. Let the spreadsheet do the math. Then you can paste the weekly totals (no customer names) into an AI assistant and ask: \"Here are 6 weeks of numbers for my bakery. What patterns do you see? What should I check?\"",
            "Treat AI's ideas as questions, not answers. If it says \"Saturdays are slow\", look at your own sheet to confirm, and think about why: weather, an event, a staff change."
          ],
          steps: ["Track sales, customers, average sale, best sellers and offer use each week.", "Let formulas do the totals.", "Paste weekly totals (no names) into AI and ask for patterns.", "Confirm each pattern in your sheet."],
          words: [["Average sale", "total sales divided by the number of customers."], ["Pattern", "something that happens again and again in your numbers."]],
          slides: [
            { title: "Five numbers to track", bullets: ["Sales per day and customers", "Average sale", "Best sellers and offer use"] },
            { title: "AI as a second pair of eyes", bullets: ["Paste weekly totals, not names", "Ask: \"What patterns do you see?\""] },
            { title: "Confirm before acting", bullets: ["AI ideas are questions", "Check your own sheet", "Ask why: weather, events, staff"] }
          ],
          tryIt: "Make a weekly tracking table with the five numbers. Fill in sample or real numbers for four weeks and ask AI what patterns it sees. Confirm one in your sheet.",
          youCanNow: "track key sales numbers and use AI to help spot patterns you then confirm.",
          quickCheck: [
            { objective: "O5", q: "How do you work out your average sale?", options: ["Sales divided by number of customers", "Customers divided by days", "Profit times two", "Number of items sold"], answer: 0, why: "Average sale is total sales divided by the number of customers." },
            { objective: "O5", q: "You want AI to look at your weekly sales table. What would you do first?", options: ["Add customer names so it knows more", "Paste it in as it is", "Remove customer names before pasting", "Add customers' card numbers"], answer: 2, why: "Customer names stay out of AI tools." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Your 30-day sales plan",
          minutes: 5,
          goal: "Put your customer, offer, list, follow-ups and tracking into one 30-day plan.",
          text: [
            "A plan turns ideas into action. Week 1: set up your customer list and sign-up. Week 2: launch your offer and send the thank-you message. Week 3: send the reminder and post the offer. Week 4: send the last call before the end date, then review your numbers.",
            "Ask AI to turn your notes into a calendar with tasks for each week. Keep it realistic for your hours.",
            "At the end, compare your numbers to the month before. Keep what worked, drop what did not, and plan the next 30 days."
          ],
          steps: ["Gather your ideal customer, offer, list setup, follow-ups and tracking table.", "Ask AI to make a four-week task calendar.", "Fit tasks to your real hours.", "Review results at day 30."],
          words: [["Sales plan", "a written plan of what you will do to sell more, and when."], ["Review", "looking back at results to decide what to keep or change."]],
          slides: [
            { title: "Four weeks", bullets: ["Week 1: list and sign-up", "Week 2: launch offer, send thank-you", "Week 3: reminder; Week 4: last call and review"] },
            { title: "AI makes the calendar", bullets: ["Paste your notes", "Ask for weekly tasks", "Fit it to your hours"] },
            { title: "Day 30", bullets: ["Compare to last month", "Keep what worked", "Plan the next 30 days"] }
          ],
          tryIt: "Final task: write your one-page 30-day sales plan with ideal customer, offer, list, three-message sequence and tracking table. Ask AI to turn it into a weekly task calendar.",
          youCanNow: "plan, run and review a 30-day sales push for your business.",
          quickCheck: [
            { objective: "O6", q: "What is Week 1 of the 30-day plan for?", options: ["Sending every message at once", "Setting up the list and sign-up", "Ending the offer", "Comparing results"], answer: 1, why: "The first week sets up the list and how people join it." },
            { objective: "O6", q: "Your 30-day plan needs more hours than you have. What would you do?", options: ["Keep it and work all night", "Give up on the plan", "Ask AI to do the selling", "Cut it back to fit your real hours"], answer: 3, why: "A plan that fits your hours is one you can actually do." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Following up and growing",
        questions: [
          { objective: "O4", q: "Which belongs in every US marketing email under CAN-SPAM?", options: ["A valid postal address and a way to unsubscribe", "The customer's card number", "A fake subject line", "No sender name"], answer: 0, why: "The FTC lists both as requirements." },
          { objective: "O4", q: "How soon must you honor an unsubscribe request, per the FTC guide?", options: ["Only if they call", "Within a year", "Never", "Within 10 business days"], answer: 3, why: "The FTC says within 10 business days." },
          { objective: "O4", q: "Before sending marketing texts you should:", options: ["Text every number you have", "Get clear permission and check the federal texting rules", "Buy a list", "Hide your business name"], answer: 1, why: "Marketing texts have separate federal rules and need permission." },
          { objective: "O5", q: "How do you work out average sale?", options: ["Sales divided by number of customers", "Sales times customers", "Profit minus rent", "Customers divided by days"], answer: 0, why: "Average sale = total sales / customers." },
          { objective: "O5", q: "AI says your Tuesdays are slow. What do you do?", options: ["Close on Tuesdays right away", "Ignore numbers", "Confirm it in your own numbers and think about why", "Ask a competitor"], answer: 2, why: "AI patterns are questions to check." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Sales and Business Growth",
    questions: [
      { objective: "O1", q: "Your ideal customer description should be:", options: ["\"Everyone\"", "Specific: who, what they need, why you", "Based on guesses about groups", "Very long"], answer: 1, why: "Specific descriptions guide better offers." },
      { objective: "O1", q: "Where should your ideal customer description come from?", options: ["Only AI", "Stereotypes", "A random website", "What you see with your real best customers"], answer: 3, why: "Use real observations, not guesses." },
      { objective: "O1", q: "How can AI help describe your ideal customer?", options: ["It cannot help", "By reading your bank account", "By calling customers", "By asking you sharpening questions"], answer: 3, why: "AI can suggest questions to think through." },
      { objective: "O2", q: "A clear offer includes:", options: ["Only a picture", "What, price, reason to act and end date", "No price", "A secret code"], answer: 1, why: "All four parts make it clear." },
      { objective: "O2", q: "What is profit?", options: ["A discount", "All money coming in", "Money left after costs", "A loan"], answer: 2, why: "Profit is revenue minus costs." },
      { objective: "O2", q: "Calling your normal price a \"sale\" is:", options: ["Misleading", "Smart", "Required", "Fine every day"], answer: 0, why: "Offers must be honest." },
      { objective: "O3", q: "Which column helps prove a customer agreed to messages?", options: ["Card number", "Favorite color", "Agreed to messages (yes/no and date)", "Password"], answer: 2, why: "Recording permission matters." },
      { objective: "O3", q: "A good way to collect sign-ups is:", options: ["A QR code to a sign-up form", "Copying numbers from receipts without asking", "Buying a list", "Guessing emails"], answer: 0, why: "People choose to join." },
      { objective: "O3", q: "Your customer list should be:", options: ["Posted online", "Protected and kept out of AI tools", "Shared with anyone", "Pasted into chats"], answer: 1, why: "Customer data is private." },
      { objective: "O4", q: "A simple follow-up sequence starts with:", options: ["Nothing", "A hard sell", "A complaint", "A thank-you after the visit"], answer: 3, why: "Thanks first builds the relationship." },
      { objective: "O4", q: "Under CAN-SPAM, a marketing email must:", options: ["Make clear it is an ad", "Hide the sender", "Use a fake subject", "Have no address"], answer: 0, why: "The FTC requires ads to be identified." },
      { objective: "O4", q: "Which agency's guide covers CAN-SPAM?", options: ["The IRS", "The DMV", "The post office", "The FTC"], answer: 3, why: "The FTC publishes the compliance guide." },
      { objective: "O4", q: "Marketing texts are covered by:", options: ["Only CAN-SPAM", "No rules at all", "Separate federal rules (TCPA) enforced by the FCC", "Only state parking rules"], answer: 2, why: "Texts have their own rules." },
      { objective: "O5", q: "Which is one of the five numbers to track?", options: ["Your favorite song", "Average sale", "Competitor's rent", "Your password"], answer: 1, why: "Average sale shows how much each customer spends." },
      { objective: "O5", q: "What should do totals in your tracking sheet?", options: ["Customers", "AI guesses", "Memory", "Spreadsheet formulas"], answer: 3, why: "Formulas calculate reliably." },
      { objective: "O5", q: "Before pasting numbers into AI, remove:", options: ["Totals", "Week dates", "Customer names", "Item names"], answer: 2, why: "Names are private." },
      { objective: "O6", q: "Week 1 of the 30-day plan is for:", options: ["Setting up the list and sign-up", "Closing the business", "Raising all prices", "Firing staff"], answer: 0, why: "The list comes first." },
      { objective: "O6", q: "Why fit the plan to your real hours?", options: ["To make it longer", "So you can actually do it", "It does not matter", "So AI is happy"], answer: 1, why: "Realistic plans get done." },
      { objective: "O6", q: "At day 30 you should:", options: ["Forget the numbers", "Compare results and keep what worked", "Start over blindly", "Delete the list"], answer: 1, why: "Review guides the next 30 days." },
      { objective: "O6", q: "In this course, who does the selling?", options: ["You and your customer relationships, with AI as a helper", "The AI alone", "Nobody", "A bot pretending to be you"], answer: 0, why: "AI helps you write and think; you sell." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      4,
      6,
      8,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Ideal customer",
        objective: "O1",
        notYet: "Vague, such as \"everyone\".",
        meets: "Three specific sentences: who, what they need and why you.",
        exceeds: "Based on real best customers and sharpened with AI's questions."
      },
      {
        name: "Offer",
        objective: "O2",
        notYet: "Missing a price or end date, or loses money.",
        meets: "One clear, honest offer with price, reason to act and end date.",
        exceeds: "Profit is worked out and written next to it."
      },
      {
        name: "Customer list",
        objective: "O3",
        notYet: "No permission column, or no sign-up method.",
        meets: "Says where the list lives and how people joined it, with permission recorded.",
        exceeds: "Notes how the list is protected and kept out of AI tools."
      },
      {
        name: "Follow-up sequence",
        objective: "O4",
        notYet: "Fewer than three messages, or a marketing email missing the address or unsubscribe line.",
        meets: "Three messages, with address and unsubscribe line on marketing email.",
        exceeds: "Notes the permission and rules needed before any marketing text."
      },
      {
        name: "Tracking table",
        objective: "O5",
        notYet: "No table or no weekly numbers.",
        meets: "A table with the numbers to check each week, using formulas.",
        exceeds: "Includes a day-30 review to keep what worked."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Owners who run their 30-day sales push (30-day follow-up survey)",
      "Owners who report higher sales or more repeat customers after 30 days, from their tracking table",
      "Owners who grow a permission-based customer list within 60 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or smartphone with internet",
      "A free AI assistant and a free spreadsheet (Google Sheets or Microsoft Excel)",
      "Paper and pen to work out cost and profit",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Use made-up sample rows in practice lists; never paste real customer lists into AI.",
      "Open the FTC's CAN-SPAM guide together and point out that texting has separate rules.",
      "Walk through one cost-and-profit example on paper before owners set their offer.",
      "Encourage owners to check their 30-day plan against their real weekly hours.",
      "Score the plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
