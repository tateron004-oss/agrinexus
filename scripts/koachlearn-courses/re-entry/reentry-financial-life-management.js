"use strict";

// Koach Learn course: Re-Entry -> "Financial and Life Management with AI". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Facts checked 27 October 2026: free weekly credit reports from all three bureaus at AnnualCreditReport.com (FTC), phone 1-877-322-8228; FTC scam payment red flags; IdentityTheft.gov. No investment advice.

module.exports = {
  id: "reentry-financial-life-management",
  category: "Re-Entry",
  name: "Financial and Life Management with AI",
  skills: "Making a simple monthly budget with AI, Tracking spending, Setting bill reminders, Choosing safer ways to bank and borrow, Checking your credit report for free, Planning goals week by week",
  outcome: "make a simple monthly budget with an AI assistant using rough numbers, set reminders for your bills, know how to get your free credit report, and turn one money or life goal into weekly steps.",
  about: [
    "This course is for people coming home who want to get their money and their week under control. Starting over can mean a first paycheck, new bills, maybe old debts, and many appointments at once. A plan makes it feel manageable.",
    "You will use a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini to build a budget, plan your week and set goals, and you will learn safer choices for banking and borrowing and how to check your credit for free.",
    "You never type real account numbers, your Social Security number or case details into AI; rough amounts are enough. This course does not give financial or legal advice; for debts, fines or child support, talk to the office involved, a legal aid office or a nonprofit credit counselor. Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Use an AI assistant to build a simple monthly budget from rough numbers (income, rent, phone, transportation, food, other bills and a small savings amount). Set a phone reminder for each bill's due date, write down how you will get your free credit report, and turn one goal into steps for the next four weeks.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults coming home from prison (re-entry) facing a first paycheck, new bills, possibly old debts and many appointments at once.",
    startingPoint: "Can make calls and send texts, and handle cash. Little experience with budgets, bank accounts, credit reports, calendar apps or AI assistants. Some have had bank account or credit trouble before.",
    gap: "Without a plan, new bills, fees and appointments pile up fast and can lead to late fees, costly loans or missed obligations. Learners need to build a simple budget, track bills, choose safer banking, check their credit and plan their weeks, so starting over feels manageable.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a smartphone, sometimes a library computer",
      "Time: about 5-minute lessons that fit around work and appointments",
      "No financial or legal advice: debts, fines and child support go to the office involved, legal aid or a nonprofit credit counselor",
      "Privacy: rough amounts only; never real account numbers, Social Security numbers or case details in AI"
    ],
    prerequisites: "\"Introduction to AI and Digital Confidence\" is helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your take-home pay and bills as rough numbers", action: "build a one-month budget with an AI assistant", standard: "with needs listed first and a small savings line, using no real account numbers" },
    { id: "O2", condition: "Using a note and your phone's reminders", action: "track your spending for a week and set a reminder for each bill's due date", standard: "with each reminder set a few days before the due date" },
    { id: "O3", condition: "Given banking and borrowing choices", action: "compare them and identify costly or risky ones", standard: "naming the total to pay back before any loan and spotting upfront-fee scams" },
    { id: "O4", condition: "Using the official free credit report site", action: "explain how to get your free credit report and what to look for in it", standard: "planning to request it on a private device and knowing where to report an account you never opened" },
    { id: "O5", condition: "Given a busy week and one money or life goal", action: "plan your week and break the goal into weekly steps with AI help", standard: "with any schedule conflict fixed and four doable weekly steps" }
  ],
  chapters: [
    {
      name: "Chapter 1: Money basics with AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Making a simple budget with AI",
          minutes: 6,
          goal: "Build a one-month budget from rough numbers with an AI assistant.",
          text: [
            "A budget is a plan for your money: what comes in, and where it goes. It helps you pay what matters first and avoid running out before payday.",
            "Write rough numbers, no account details: \"I take home about $1,800 a month. Rent is $700, phone $40, bus pass $60, food about $300. I owe a $50 monthly payment. Help me make a simple monthly budget in a table, with a little savings, and tell me how much is left for other things.\"",
            "Put needs first: housing, food, transportation to work, phone, and required payments. Then savings, even $10 a week; it adds up and helps with emergencies. Then wants. If the numbers do not work, ask AI: \"Where could I cut back?\" and decide what is right for you."
          ],
          steps: ["Write your take-home pay and main bills as rough numbers.", "Ask AI for a simple monthly budget table.", "Put needs first, then savings, then wants.", "Ask where you could cut back if it does not balance.", "Save the budget."],
          words: [["Budget", "a plan for how you will use your money each month."], ["Take-home pay", "the money you actually receive after taxes and deductions."], ["Needs and wants", "needs are things you must pay for; wants are nice to have."]],
          slides: [
            { title: "A budget is a plan", bullets: ["What comes in", "Where it goes", "Pay what matters first"] },
            { title: "Ask AI with rough numbers", bullets: ["Take-home pay and main bills", "No account numbers", "\"Make a simple budget table.\""] },
            { title: "Order matters", bullets: ["Needs first", "Then savings, even $10 a week", "Then wants"] }
          ],
          tryIt: "Write your real or estimated take-home pay and five bills as rough numbers. Ask an AI assistant to make a simple monthly budget table with a small savings line.",
          youCanNow: "make a simple monthly budget with AI help, without sharing private details.",
          quickCheck: [
            { objective: "O1", q: "What is take-home pay?", options: ["Your pay before taxes", "What you receive after taxes and deductions", "Money you borrow", "Your savings"], answer: 1, why: "Take-home pay is the money you actually receive to budget with." },
            { objective: "O1", q: "You want AI to help with a budget. What would you type?", options: ["Your bank account number", "Your Social Security number", "Rough amounts like \"rent about $800\"", "Your online banking password"], answer: 2, why: "Rough amounts are enough, and private numbers stay out of AI." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Tracking spending and bills",
          minutes: 5,
          goal: "Track what you spend for a week and set reminders for bill due dates.",
          text: [
            "A budget only works if you know where money actually goes. For one week, write down everything you spend in a note on your phone: the item and the amount. Small things like snacks and rideshares add up.",
            "At the end of the week, paste the list (no card numbers) into AI and ask: \"Group my spending into categories and total each one. Where did most of my money go?\"",
            "Late fees waste money. Set a phone reminder a few days before each bill is due: \"Remind me to pay my phone bill on the 12th of every month.\" Pay bills only through the company's official app or website, or in person."
          ],
          steps: ["Write every purchase in a phone note for one week.", "Ask AI to group and total it.", "Compare with your budget.", "Set a monthly reminder before each bill's due date.", "Pay only through official apps, websites or in person."],
          words: [["Category", "a group of similar spending, like food or transportation."], ["Late fee", "extra money charged when a bill is paid after its due date."], ["Due date", "the last day to pay a bill on time."]],
          slides: [
            { title: "Know where it goes", bullets: ["Write every purchase for a week", "Small things add up"] },
            { title: "Let AI sort it", bullets: ["Paste the list, no card numbers", "\"Group and total by category.\""] },
            { title: "Beat late fees", bullets: ["Reminder a few days before each due date", "Pay only through official channels"] }
          ],
          tryIt: "Start a spending note today. Then set a repeating monthly reminder for one bill a few days before it is due.",
          youCanNow: "track your spending and set reminders so bills are paid on time.",
          quickCheck: [
            { objective: "O2", q: "What is a due date?", options: ["The last day to pay a bill on time", "The day you get paid", "The day a bill is mailed", "Any day you choose"], answer: 0, why: "A due date is the last day to pay without being late." },
            { objective: "O2", q: "Your phone bill is due on the 15th each month. What would you do?", options: ["Pay whenever you remember", "Wait for a late notice", "Pay it twice to be safe", "Set a repeating reminder a few days before the 15th"], answer: 3, why: "A reminder before the due date helps you avoid late fees." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Safer ways to bank and borrow",
          minutes: 5,
          goal: "Compare banking and borrowing choices and spot costly or risky ones.",
          text: [
            "A bank or credit union account is usually cheaper and safer than cashing checks at a check-cashing store, which charges a fee every time. If you had trouble with a bank account in the past, ask banks and credit unions whether they offer \"second chance\" or low-fee accounts.",
            "Be careful with fast cash. Payday loans, title loans and some cash advance apps can cost far more than you borrow once fees and interest are added. Before borrowing, ask: \"What is the total I will pay back, and when?\" You can ask AI to explain the terms of an offer in plain words, but not to decide for you.",
            "Scam warning: no real lender asks you to pay a fee upfront in gift cards or by wire transfer. For help with debts, look for a nonprofit credit counselor or legal aid office; avoid companies that promise to erase debt for a big upfront fee."
          ],
          steps: ["Ask banks and credit unions about low-fee or second chance accounts.", "Avoid paying check-cashing fees every payday if you can.", "Before borrowing, ask for the total cost and dates.", "Ask AI to explain terms in plain words.", "Never pay an upfront fee by gift card or wire."],
          words: [["Credit union", "a not-for-profit bank owned by its members."], ["Interest", "the extra money you pay for borrowing."], ["Payday loan", "a small, short loan that usually has very high fees."]],
          slides: [
            { title: "Bank, don't pay to cash", bullets: ["Check-cashing fees add up", "Ask about second chance or low-fee accounts", "Credit unions are worth a look"] },
            { title: "Careful with fast cash", bullets: ["Payday and title loans cost a lot", "Ask: total to pay back, and when?", "AI can explain terms; you decide"] },
            { title: "Scam warning", bullets: ["No upfront fees by gift card or wire", "Use nonprofit credit counselors or legal aid"] }
          ],
          sources: [{ name: "FTC: How to avoid a scam (payment red flags)", url: "https://consumer.ftc.gov/articles/how-avoid-scam" }],
          tryIt: "Ask an AI assistant: \"Explain in simple words the difference between a credit union, a bank and a check-cashing store, and what questions I should ask before opening an account.\" Write down three questions to ask.",
          youCanNow: "choose safer ways to bank and spot costly or risky borrowing.",
          quickCheck: [
            { objective: "O3", q: "What is interest on a loan?", options: ["A free gift from the lender", "The extra money you pay for borrowing", "A type of savings account", "A fee for cashing a check"], answer: 1, why: "Interest is what borrowing costs you on top of the amount you borrowed." },
            { objective: "O3", q: "A lender says you must pay a fee in gift cards before getting a loan. What would you do?", options: ["Pay it quickly", "Pay half now", "Walk away; it is a scam", "Ask AI to send the gift cards"], answer: 2, why: "Upfront fees paid in gift cards are a sign of a scam." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Money basics with AI",
        questions: [
          { objective: "O1", q: "What should you type into AI to build a budget?", options: ["Your Social Security number", "Your bank account number", "Rough amounts only", "Your card PIN"], answer: 2, why: "Rough numbers are enough and keep you safe." },
          { objective: "O1", q: "In a budget, what comes first?", options: ["Needs like housing, food and transportation", "Wants", "Gifts", "Entertainment"], answer: 0, why: "Needs keep you housed, fed and working." },
          { objective: "O2", q: "Why track spending for a week?", options: ["It is required by law", "To impress others", "To raise your pay", "To see where your money really goes"], answer: 3, why: "Tracking shows what to change." },
          { objective: "O2", q: "How can you avoid late fees?", options: ["Pay whenever you remember", "Set a reminder a few days before each due date", "Ignore bills", "Pay strangers"], answer: 1, why: "Reminders help you pay on time." },
          { objective: "O3", q: "A lender asks for an upfront fee in gift cards. This is:", options: ["Normal", "A scam", "Required by banks", "A good deal"], answer: 1, why: "Real lenders do not take gift card fees." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning your life",
      lessons: [
        {
          objectives: ["O4"],
          title: "Checking your credit report for free",
          minutes: 5,
          goal: "Explain how to get your free credit report and what to look for in it.",
          text: [
            "A credit report is a record of your borrowing and bills. Landlords, some employers and lenders may look at it. After time away, it may be thin, out of date, or have mistakes, or even accounts someone opened in your name.",
            "You can get your credit reports free from the three nationwide credit bureaus (Equifax, Experian and TransUnion) once a week at AnnualCreditReport.com, the official site. You can also call 1-877-322-8228. Do this on a private device, not a shared computer, because you will enter personal details there, not into AI.",
            "Look for accounts you do not recognize and wrong information. If someone used your identity, go to IdentityTheft.gov for a free recovery plan. You can ask AI to explain credit report words, but never paste your report into it."
          ],
          steps: ["Go to AnnualCreditReport.com on a private device, or call 1-877-322-8228.", "Request reports from all three bureaus.", "Look for accounts you do not recognize and mistakes.", "If your identity was used, go to IdentityTheft.gov.", "Ask AI to explain terms, but never paste the report."],
          words: [["Credit report", "a record of your loans, credit cards and bill payments."], ["Credit bureau", "a company that keeps credit reports: Equifax, Experian or TransUnion."]],
          slides: [
            { title: "Your credit report", bullets: ["A record of borrowing and bills", "Landlords and lenders may check it", "May have mistakes after time away"] },
            { title: "Free, from the official site", bullets: ["AnnualCreditReport.com, weekly", "Or call 1-877-322-8228", "Use a private device"] },
            { title: "What to look for", bullets: ["Accounts you don't recognize", "Wrong information", "Identity used? IdentityTheft.gov"] }
          ],
          sources: [{ name: "FTC: Free credit reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "FTC: What to know about identity theft", url: "https://consumer.ftc.gov/articles/what-know-about-identity-theft" }],
          tryIt: "Ask an AI assistant to explain these credit report words in simple terms: \"collection account\", \"hard inquiry\" and \"payment history\". Then write down when you will request your free report on a private device.",
          youCanNow: "get your free credit report and know what to look for.",
          quickCheck: [
            { objective: "O4", q: "Which are the three nationwide credit bureaus?", options: ["Visa, Mastercard and Discover", "The IRS, the DMV and the courts", "Your bank, a credit union and a check-cashing store", "Equifax, Experian and TransUnion"], answer: 3, why: "Equifax, Experian and TransUnion are the three nationwide credit bureaus." },
            { objective: "O4", q: "You want AI to help you read your credit report. What would you do?", options: ["Ask AI only to explain the words you do not understand", "Paste the whole report into the AI", "Send the report to a stranger online", "Skip reading the report"], answer: 0, why: "AI can explain terms without you sharing your private report." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planning your week",
          minutes: 5,
          goal: "Use AI to turn a busy week of appointments, work and errands into a simple plan.",
          text: [
            "Coming home can mean many things at once: work shifts, check-ins, job applications, ID offices, family time, maybe classes. A weekly plan keeps them from colliding.",
            "List everything for the week with days and times, in general words. Ask AI: \"Here are my work shifts, appointments and errands. Make a simple weekly plan, flag any conflicts, and leave travel time between things.\" You do not need to say what kind of check-in it is.",
            "Put the fixed things in your phone's calendar with reminders. Leave some free time. If two things clash, call early to reschedule; offices usually respond better to early calls than to no-shows."
          ],
          steps: ["List the week's shifts, appointments and errands in general words.", "Ask AI for a weekly plan with travel time, and to flag conflicts.", "Add fixed items to your calendar with reminders.", "Leave some free time.", "Call early to reschedule any conflicts."],
          words: [["Conflict", "two things scheduled at the same time."], ["Calendar", "the app on your phone that keeps appointments by date."]],
          slides: [
            { title: "Many things at once", bullets: ["Shifts, appointments, errands, family", "A weekly plan keeps them from colliding"] },
            { title: "Ask AI for a plan", bullets: ["List items in general words", "Add travel time", "Flag conflicts"] },
            { title: "Make it real", bullets: ["Put fixed items in your calendar", "Leave free time", "Call early to reschedule"] }
          ],
          tryIt: "List your real or practice commitments for next week in general words. Ask AI for a weekly plan with travel time, and fix one conflict it finds.",
          youCanNow: "turn a busy week into a simple plan without conflicts.",
          quickCheck: [
            { objective: "O5", q: "What is a conflict in a schedule?", options: ["An argument at work", "A free afternoon", "Two things at the same time", "A bill that is late"], answer: 2, why: "A schedule conflict means two commitments overlap." },
            { objective: "O5", q: "AI's weekly plan shows no travel time between two appointments across town. What would you do?", options: ["Add travel time and move one if needed", "Trust the plan", "Skip both appointments", "Delete the plan"], answer: 0, why: "A real plan needs travel time so you arrive on time." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Turning goals into weekly steps",
          minutes: 5,
          goal: "Break one money or life goal into small steps for the next four weeks.",
          text: [
            "Big goals, like saving for a deposit on an apartment, getting a driver's license, or paying down a debt, can feel far away. Breaking them into weekly steps makes them doable.",
            "Ask AI: \"My goal is to save $600 for an apartment deposit in four months. I take home about $1,800 a month. Break it into weekly steps and small actions.\" Or: \"Help me plan the steps to get my driver's license back in my state. Tell me what to check with the DMV.\"",
            "Pick one goal, write the four weekly steps, and put the first one in your calendar. Check in each week: what did I do, what is next? For legal steps such as license reinstatement, fines or record questions, confirm with the official office or a legal aid program; AI can only give a starting list."
          ],
          steps: ["Pick one goal.", "Ask AI to break it into weekly steps.", "Write the first four weeks.", "Put week one in your calendar.", "Check in weekly and confirm legal steps with the official office."],
          words: [["Goal", "something you want to achieve."], ["Legal aid", "free or low-cost legal help for people who qualify."]],
          slides: [
            { title: "Big goals, small steps", bullets: ["Save for a deposit", "Get a license back", "Pay down a debt"] },
            { title: "Ask AI to break it down", bullets: ["Your goal and timeline", "Weekly steps and actions"] },
            { title: "Follow through", bullets: ["First step in your calendar", "Check in every week", "Confirm legal steps with the office or legal aid"] }
          ],
          tryIt: "Final task: build your monthly budget with AI from rough numbers, set a reminder for each bill's due date, write down when and how you will get your free credit report, and turn one goal into four weekly steps.",
          youCanNow: "manage your money and your week with AI help, and turn goals into steps you can take.",
          quickCheck: [
            { objective: "O5", q: "How do you make a big goal doable?", options: ["Wait until you have more time", "Do it all in one day", "Keep it in your head", "Break it into small weekly steps"], answer: 3, why: "Small weekly steps turn a big goal into something you can start now." },
            { objective: "O5", q: "AI gives you steps to get your driver's license back. What would you do next?", options: ["Follow them without checking", "Ignore all the steps", "Confirm the steps with the DMV or legal aid", "Post them online"], answer: 2, why: "Official offices have the final word on legal steps, so you confirm with them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning your life",
        questions: [
          { objective: "O4", q: "Where do you get free credit reports from the official source?", options: ["Any website that asks for a fee", "A pop-up ad", "A text link", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com is the official free source." },
          { objective: "O4", q: "Should you paste your credit report into an AI assistant?", options: ["No; ask AI only to explain terms", "Yes, always", "Only half of it", "Only on a library computer"], answer: 0, why: "Credit reports contain private details." },
          { objective: "O4", q: "You find an account you never opened. What do you do?", options: ["Pay it right away", "Ignore it", "Go to IdentityTheft.gov for a recovery plan", "Post it online"], answer: 2, why: "IdentityTheft.gov guides the recovery steps." },
          { objective: "O5", q: "Two appointments are at the same time next week. Best step?", options: ["Hope it works out", "Skip both", "Go to neither and say nothing", "Call early to reschedule one"], answer: 3, why: "Early calls work better than no-shows." },
          { objective: "O5", q: "AI gives you steps to get a license back. What next?", options: ["Do nothing", "Trust it fully", "Confirm with the DMV or legal aid", "Pay a stranger"], answer: 2, why: "Legal steps must be confirmed with official offices." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Financial and Life Management with AI",
    questions: [
      { objective: "O1", q: "A budget is:", options: ["A type of loan", "A plan for your money", "A bank card", "A bill"], answer: 1, why: "It plans what comes in and goes out." },
      { objective: "O1", q: "Take-home pay is:", options: ["What you receive after taxes and deductions", "Your hourly rate before taxes", "A bonus", "A loan"], answer: 0, why: "It is the money you actually get." },
      { objective: "O1", q: "Which is a need?", options: ["Rent", "A new video game", "Eating out every day", "A second streaming service"], answer: 0, why: "Housing is a basic need." },
      { objective: "O1", q: "Even small savings, like $10 a week, help because:", options: ["They raise your pay", "They add up and help with emergencies", "They are required", "They stop all bills"], answer: 1, why: "Small amounts grow into a cushion." },
      { objective: "O1", q: "If your budget does not balance, you can ask AI:", options: ["\"Pay my bills.\"", "\"What is my PIN?\"", "\"Where could I cut back?\"", "\"Take a loan for me.\""], answer: 2, why: "AI can suggest options; you decide." },
      { objective: "O2", q: "A spending category is:", options: ["A due date", "A bank", "A loan", "A group of similar spending, like food"], answer: 3, why: "Categories show where money goes." },
      { objective: "O2", q: "A due date is:", options: ["A holiday", "Payday", "The last day to pay a bill on time", "A birthday"], answer: 2, why: "Paying after it can bring late fees." },
      { objective: "O2", q: "The safest way to pay a bill is:", options: ["Through the company's official app, website or in person", "Through a link in a text", "By gift card to a caller", "By wire to a stranger"], answer: 0, why: "Official channels avoid scams." },
      { objective: "O3", q: "Check-cashing stores usually:", options: ["Are run by the government", "Are free", "Pay you interest", "Charge a fee every time"], answer: 3, why: "Fees add up each payday." },
      { objective: "O3", q: "A credit union is:", options: ["A payday lender", "A not-for-profit bank owned by members", "A credit bureau", "A check-cashing store"], answer: 1, why: "Credit unions are member-owned." },
      { objective: "O3", q: "If you had bank account trouble before, ask about:", options: ["Gift card accounts", "Second chance or low-fee accounts", "Crypto only", "Nothing"], answer: 1, why: "Many banks and credit unions offer them." },
      { objective: "O3", q: "Before taking any loan, ask:", options: ["The lender's favorite color", "Only the monthly payment", "Nothing", "The total amount you will pay back, and when"], answer: 3, why: "The total cost shows what you really pay." },
      { objective: "O3", q: "Interest is:", options: ["The extra money you pay for borrowing", "A free gift", "Your pay", "A bill reminder"], answer: 0, why: "Borrowing costs interest." },
      { objective: "O3", q: "For help with debts, a safe choice is:", options: ["A stranger online", "A company charging a big upfront fee to erase debt", "A nonprofit credit counselor or legal aid", "A gift card offer"], answer: 2, why: "Nonprofits and legal aid avoid debt-relief scams." },
      { objective: "O4", q: "How often can you get free credit reports from each bureau at the official site?", options: ["Only for a fee", "Once every ten years", "Never", "Once a week"], answer: 3, why: "The bureaus extended free weekly reports." },
      { objective: "O4", q: "The three nationwide credit bureaus are:", options: ["Google, Apple and Microsoft", "Visa, Mastercard and Discover", "Equifax, Experian and TransUnion", "The DMV, IRS and SSA"], answer: 2, why: "Those three keep credit reports." },
      { objective: "O4", q: "Request your credit report on:", options: ["A shared library computer while signed in to everything", "A private device", "A stranger's phone", "An AI chat"], answer: 1, why: "You enter personal details there." },
      { objective: "O5", q: "When asking AI to plan your week, describe commitments:", options: ["In general words", "With your case number", "With your ID number", "With your Social Security number"], answer: 0, why: "General words are enough." },
      { objective: "O5", q: "A \"conflict\" in a schedule means:", options: ["Two things at the same time", "An argument", "A free day", "A bill"], answer: 0, why: "Conflicts need rescheduling." },
      { objective: "O5", q: "To make a big goal doable, you:", options: ["Wait for luck", "Break it into weekly steps", "Do it all in one day", "Keep it secret from yourself"], answer: 1, why: "Small steps add up to big results." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      6,
      7,
      8,
      11,
      14,
      16,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Monthly budget",
        objective: "O1",
        notYet: "No budget, or it uses real account numbers or leaves out needs.",
        meets: "A one-month budget from rough numbers with needs first and a small savings line.",
        exceeds: "It balances, and the learner asked AI where to cut back if needed."
      },
      {
        name: "Bill reminders",
        objective: "O2",
        notYet: "Some bills have no reminder.",
        meets: "A reminder for each bill a few days before its due date.",
        exceeds: "Reminders repeat monthly and the learner started a spending note."
      },
      {
        name: "Credit report plan",
        objective: "O4",
        notYet: "No plan, or plans to use an unofficial site.",
        meets: "Writes down when they will request the free report from the official site on a private device.",
        exceeds: "Also writes what to look for and what to do about an account they never opened."
      },
      {
        name: "Goal in weekly steps",
        objective: "O5",
        notYet: "The goal is vague or has no steps.",
        meets: "One goal broken into four small weekly steps.",
        exceeds: "Each step has a day and fits around the learner's week."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report following a budget and paying bills on time for 30 days (follow-up survey)",
      "Learners who request their free credit report or open a low-fee bank or credit union account within 60 days",
      "Learners who start another Koach Learn course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet and a reminder or calendar app",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "Paper and pen for rough numbers and the spending note",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Learners may use practice numbers instead of their real pay and bills if they prefer.",
      "Never ask learners to type real account numbers, Social Security numbers or case details; rough amounts are enough.",
      "This course does not give financial or legal advice; have local legal aid and a nonprofit credit counselor's contact ready for questions about debts, fines or child support.",
      "Credit reports should be requested on a private device, not a shared lab computer.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
