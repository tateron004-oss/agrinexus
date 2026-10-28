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
  chapters: [
    {
      name: "Chapter 1: Who buys and what you offer",
      lessons: [
        {
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
          youCanNow: "describe the customer you most want more of in three clear sentences."
        },
        {
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
          youCanNow: "write a clear, honest offer that still makes a profit."
        },
        {
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
          youCanNow: "set up a private customer list with a record of permission to contact."
        }
      ],
      check: {
        title: "Knowledge Check 1: Who buys and what you offer",
        questions: [
          { q: "What is an ideal customer?", options: ["Anyone with money", "The kind of customer who is the best fit for your business", "Only people who complain", "Your competitor's customers"], answer: 1, why: "It describes who you most want more of." },
          { q: "Which is a clear offer?", options: ["\"Great deals!\"", "\"Cheap stuff\"", "\"Come in sometime\"", "\"Lunch combo: rice, stew and drink, $13, weekdays 11-2 through June 30\""], answer: 3, why: "It says what, the price, when and the end date." },
          { q: "AI suggests a 60% discount. What do you check first?", options: ["Whether you still make a profit", "Whether it sounds exciting", "Nothing", "The font"], answer: 0, why: "A discount that loses money is not growth." },
          { q: "Who belongs on your customer list?", options: ["Anyone whose number you find", "Competitors' customers", "People who agreed to hear from you", "Random phone numbers"], answer: 2, why: "Permission comes first." },
          { q: "You want AI help organizing your customer list. What do you share?", options: ["The full list with phone numbers", "Customer card numbers", "The column names or made-up sample rows", "Your file password"], answer: 2, why: "Real customer data stays out of AI tools." }
        ]
      }
    },
    {
      name: "Chapter 2: Following up and growing",
      lessons: [
        {
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
          youCanNow: "write a follow-up sequence and make marketing emails meet the CAN-SPAM basics."
        },
        {
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
          youCanNow: "track key sales numbers and use AI to help spot patterns you then confirm."
        },
        {
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
          youCanNow: "plan, run and review a 30-day sales push for your business."
        }
      ],
      check: {
        title: "Knowledge Check 2: Following up and growing",
        questions: [
          { q: "Which belongs in every US marketing email under CAN-SPAM?", options: ["A valid postal address and a way to unsubscribe", "The customer's card number", "A fake subject line", "No sender name"], answer: 0, why: "The FTC lists both as requirements." },
          { q: "How soon must you honor an unsubscribe request, per the FTC guide?", options: ["Only if they call", "Within a year", "Never", "Within 10 business days"], answer: 3, why: "The FTC says within 10 business days." },
          { q: "Before sending marketing texts you should:", options: ["Text every number you have", "Get clear permission and check the federal texting rules", "Buy a list", "Hide your business name"], answer: 1, why: "Marketing texts have separate federal rules and need permission." },
          { q: "How do you work out average sale?", options: ["Sales divided by number of customers", "Sales times customers", "Profit minus rent", "Customers divided by days"], answer: 0, why: "Average sale = total sales / customers." },
          { q: "AI says your Tuesdays are slow. What do you do?", options: ["Close on Tuesdays right away", "Ignore numbers", "Confirm it in your own numbers and think about why", "Ask a competitor"], answer: 2, why: "AI patterns are questions to check." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Sales and Business Growth",
    questions: [
      { q: "Your ideal customer description should be:", options: ["\"Everyone\"", "Specific: who, what they need, why you", "Based on guesses about groups", "Very long"], answer: 1, why: "Specific descriptions guide better offers." },
      { q: "Where should your ideal customer description come from?", options: ["Only AI", "Stereotypes", "A random website", "What you see with your real best customers"], answer: 3, why: "Use real observations, not guesses." },
      { q: "How can AI help describe your ideal customer?", options: ["It cannot help", "By reading your bank account", "By calling customers", "By asking you sharpening questions"], answer: 3, why: "AI can suggest questions to think through." },
      { q: "A clear offer includes:", options: ["Only a picture", "What, price, reason to act and end date", "No price", "A secret code"], answer: 1, why: "All four parts make it clear." },
      { q: "What is profit?", options: ["A discount", "All money coming in", "Money left after costs", "A loan"], answer: 2, why: "Profit is revenue minus costs." },
      { q: "Calling your normal price a \"sale\" is:", options: ["Misleading", "Smart", "Required", "Fine every day"], answer: 0, why: "Offers must be honest." },
      { q: "Which column helps prove a customer agreed to messages?", options: ["Card number", "Favorite color", "Agreed to messages (yes/no and date)", "Password"], answer: 2, why: "Recording permission matters." },
      { q: "A good way to collect sign-ups is:", options: ["A QR code to a sign-up form", "Copying numbers from receipts without asking", "Buying a list", "Guessing emails"], answer: 0, why: "People choose to join." },
      { q: "Your customer list should be:", options: ["Posted online", "Protected and kept out of AI tools", "Shared with anyone", "Pasted into chats"], answer: 1, why: "Customer data is private." },
      { q: "A simple follow-up sequence starts with:", options: ["Nothing", "A hard sell", "A complaint", "A thank-you after the visit"], answer: 3, why: "Thanks first builds the relationship." },
      { q: "Under CAN-SPAM, a marketing email must:", options: ["Make clear it is an ad", "Hide the sender", "Use a fake subject", "Have no address"], answer: 0, why: "The FTC requires ads to be identified." },
      { q: "Which agency's guide covers CAN-SPAM?", options: ["The IRS", "The DMV", "The post office", "The FTC"], answer: 3, why: "The FTC publishes the compliance guide." },
      { q: "Marketing texts are covered by:", options: ["Only CAN-SPAM", "No rules at all", "Separate federal rules (TCPA) enforced by the FCC", "Only state parking rules"], answer: 2, why: "Texts have their own rules." },
      { q: "Which is one of the five numbers to track?", options: ["Your favorite song", "Average sale", "Competitor's rent", "Your password"], answer: 1, why: "Average sale shows how much each customer spends." },
      { q: "What should do totals in your tracking sheet?", options: ["Customers", "AI guesses", "Memory", "Spreadsheet formulas"], answer: 3, why: "Formulas calculate reliably." },
      { q: "Before pasting numbers into AI, remove:", options: ["Totals", "Week dates", "Customer names", "Item names"], answer: 2, why: "Names are private." },
      { q: "Week 1 of the 30-day plan is for:", options: ["Setting up the list and sign-up", "Closing the business", "Raising all prices", "Firing staff"], answer: 0, why: "The list comes first." },
      { q: "Why fit the plan to your real hours?", options: ["To make it longer", "So you can actually do it", "It does not matter", "So AI is happy"], answer: 1, why: "Realistic plans get done." },
      { q: "At day 30 you should:", options: ["Forget the numbers", "Compare results and keep what worked", "Start over blindly", "Delete the list"], answer: 1, why: "Review guides the next 30 days." },
      { q: "In this course, who does the selling?", options: ["You and your customer relationships, with AI as a helper", "The AI alone", "Nobody", "A bot pretending to be you"], answer: 0, why: "AI helps you write and think; you sell." }
    ]
  }
};
