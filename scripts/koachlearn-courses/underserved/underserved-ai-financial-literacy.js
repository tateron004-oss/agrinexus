"use strict";

// Koach Learn course: Undeserved Community -> "AI for Financial Literacy" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.
// Money lessons: no investment advice; students are pointed to official sources (consumerfinance.gov, FDIC, IRS VITA) and free counselors.

module.exports = {
  id: "underserved-ai-financial-literacy",
  category: "Undeserved Community",
  name: "AI for Financial Literacy",
  skills: "Making a monthly budget, Using AI to organize money without sharing private data, Setting a savings goal, Checking your credit report for free, Finding free tax and money help, Spotting money scams",
  outcome: "build a simple monthly budget for your household with help from a free AI assistant (without sharing any private numbers), set one savings goal, and know where to get your free credit report and free tax help.",
  about: [
    "Money stress is real, especially when every dollar has a job. This course gives you simple tools to see where your money goes, plan for what matters to your family and avoid costly traps.",
    "You will build a monthly budget, use a free AI assistant to help sort and explain it without typing any private numbers, set a savings goal, check your credit report for free, find free tax and money help, and spot money scams.",
    "This course teaches skills, not investment advice. For big money decisions, talk with a free nonprofit counselor or check official sources like consumerfinance.gov, fdic.gov and irs.gov. Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build a one-month household budget: list income, needs and wants with rounded amounts, use an AI assistant to sort it and suggest one place to save (with no account numbers or private details), set one savings goal with an amount and a date, and write down where you will get your free credit report and free tax help.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in underserved communities managing a household on a tight budget: working parents, caregivers, people on benefits, older adults and young adults living on their own for the first time.",
    startingPoint: "Pay bills and track money in their heads or on paper. Few have a written budget, a savings goal or have checked their credit report, and many have not used AI for money tasks. Some have been targeted by money scams.",
    gap: "Without a plan, small costs add up, savings never start, credit mistakes go unfixed, and families pay for tax help or fall for scams. Learners need a simple budget, a savings goal and trusted free help, and must use AI without sharing private numbers.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a smartphone or a library computer; paper works for the budget",
      "Privacy: rounded amounts only, never account, card or Social Security numbers or passwords in AI",
      "General money education only: no investment advice, and big decisions go to official sources or a free nonprofit counselor",
      "Amounts and rules (FDIC, VITA, Lifeline) change: learners check the official sites"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and Digital Empowerment\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given one month of pay stubs, statements or receipts", action: "list your income and sort your expenses into needs and wants", standard: "with at least ten expenses, rounded amounts and totals" },
    { id: "O2", condition: "Using a free AI assistant", action: "organize your budget into a table and choose which of its suggestions fit your family", standard: "sharing only rounded categories and checking the totals with a calculator" },
    { id: "O3", condition: "Given something you want to save for", action: "set a savings goal with an amount and a date, calculate the weekly amount and choose a safe place to keep it", standard: "with the math checked and an FDIC-insured bank or federally insured credit union" },
    { id: "O4", condition: "Using AnnualCreditReport.com", action: "explain how to get your free credit reports and check them for mistakes", standard: "naming the three bureaus and what to dispute" },
    { id: "O5", condition: "When you need tax or money help", action: "find a free VITA or TCE tax site and a trusted source for money questions", standard: "writing down the site's address and what to bring" },
    { id: "O6", condition: "Given a money offer or urgent message", action: "spot the warning signs of a money scam and choose the safe next step", standard: "sharing no logins or codes and reporting scams to the FTC" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your money plan",
      lessons: [
        {
          objectives: ["O1"],
          title: "Budget basics: income, needs and wants",
          minutes: 5,
          goal: "List your monthly income and sort your spending into needs and wants.",
          text: [
            "A budget is a plan for your money. It shows what comes in each month and where it goes. A budget does not mean you can never have fun; it means you decide on purpose.",
            "Income is money coming in: paychecks, benefits, child support, side jobs. Needs are things you must pay to live and work: rent, food, utilities, transportation, child care, medicine. Wants are nice to have: eating out, streaming, new clothes you do not need yet.",
            "Start with one month. Look at pay stubs, bank or card statements and receipts. Round amounts to the nearest dollar or five dollars; close is good enough to start."
          ],
          steps: ["Write every source of income for one month.", "List every expense you can remember or find.", "Mark each expense as a need or a want.", "Add up income, needs and wants."],
          words: [["Budget", "a plan for how you will use your money each month."], ["Income", "money coming in."], ["Expense", "money going out."]],
          slides: [
            { title: "A budget is a plan", bullets: ["What comes in", "Where it goes", "You decide on purpose"] },
            { title: "Needs vs wants", bullets: ["Needs: rent, food, utilities, rides, child care", "Wants: eating out, streaming, extras"] },
            { title: "Start simple", bullets: ["One month", "Use pay stubs, statements, receipts", "Round the amounts"] }
          ],
          tryIt: "On paper or in a free spreadsheet, write your monthly income and at least ten expenses. Mark each one N for need or W for want.",
          youCanNow: "list your income and sort expenses into needs and wants.",
          quickCheck: [
            { objective: "O1", q: "What is income?", options: ["Money coming in, like paychecks and benefits", "Money you spend on rent", "Money you owe", "A bill you pay"], answer: 0, why: "Income is money coming in, such as paychecks, benefits or side jobs." },
            { objective: "O1", q: "You are listing expenses and pay about $87.60 for phone. What do you write to start?", options: ["Leave it out", "About $90", "$870", "Nothing until you find the exact cents"], answer: 1, why: "Rounding to the nearest dollar or five is good enough to start a budget." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Using AI to organize your budget safely",
          minutes: 5,
          goal: "Ask a free AI assistant to sort and explain your budget without sharing private information.",
          text: [
            "A free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini can turn your list into a neat table, add it up, and point out where money is going. You stay in charge of every decision.",
            "Share only rounded amounts and categories. Never type account numbers, card numbers, your Social Security number, passwords, or your bank's login. Example prompt: \"My family of 4 brings in about $3,200 a month. Rent $1,400, food $650, phone $90, bus passes $100, eating out $200, streaming $40. Put this in a table, total it, and suggest two places we could cut back.\"",
            "AI can make math mistakes. Add the totals yourself or with a calculator to check. Its tips are ideas, not rules; pick what fits your family."
          ],
          steps: ["Write your categories and rounded amounts.", "Remove any account numbers or private details.", "Ask AI to make a table, total it and suggest cuts.", "Check the totals yourself.", "Choose which suggestions fit your family."],
          words: [["Category", "a group of spending, like food or transportation."], ["Placeholder", "a stand-in like \"[my bank]\" used instead of private details."]],
          slides: [
            { title: "AI can help you organize", bullets: ["Make a table", "Add it up", "Suggest places to cut back"] },
            { title: "Share only this", bullets: ["Rounded amounts", "Categories like rent and food", "Never account, card or Social Security numbers"] },
            { title: "Check and choose", bullets: ["Check the math yourself", "Tips are ideas, not rules", "Pick what fits your family"] }
          ],
          tryIt: "Give an AI assistant your rounded categories and amounts (no private details). Ask for a table, a total and two ideas to cut back. Check the total with a calculator.",
          youCanNow: "use AI to organize a budget without sharing private information, and check its math.",
          quickCheck: [
            { objective: "O2", q: "Who makes the final choices about your budget when you use AI?", options: ["The AI", "Your bank", "You", "The app store"], answer: 2, why: "AI gives ideas, but you stay in charge of every decision." },
            { objective: "O2", q: "You want AI to sort your budget. What do you type?", options: ["Your bank login", "Your card number and its code", "Your Social Security number", "Rounded categories like \"food about $650\""], answer: 3, why: "Only rounded amounts and categories go into the AI, never private numbers." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Setting a savings goal and keeping money safe",
          minutes: 5,
          goal: "Set one savings goal with an amount and a date, and know how bank deposits are protected.",
          text: [
            "Even a small amount saved each week can help when a car breaks down or hours get cut. Many people start with an emergency fund: money set aside only for surprises.",
            "Make the goal clear: \"Save $300 for emergencies by June 1.\" Divide by the number of weeks to see how much to set aside each week. Ask AI to do the math, then check it.",
            "Where you keep savings matters. Money in a bank insured by the FDIC is protected up to $250,000 per depositor, per bank, for each account ownership category. FDIC insurance does not cover stocks or crypto. Check that a bank is FDIC-insured on fdic.gov before you open an account."
          ],
          steps: ["Choose what you are saving for.", "Pick an amount and a date.", "Divide the amount by the number of weeks.", "Keep savings in a federally insured bank or credit union."],
          words: [["Emergency fund", "money saved only for surprise costs."], ["FDIC", "the Federal Deposit Insurance Corporation, which protects money in insured banks."], ["Credit union", "a member-owned, not-for-profit financial institution."]],
          sources: [{ name: "FDIC: Understanding Deposit Insurance", url: "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance" }],
          slides: [
            { title: "Start an emergency fund", bullets: ["Money only for surprises", "Small amounts add up"] },
            { title: "A clear goal", bullets: ["Example: $300 by June 1", "Amount divided by weeks = weekly savings", "Check the math yourself"] },
            { title: "Keep savings safe", bullets: ["FDIC-insured bank: up to $250,000 per depositor, per bank, per category", "Not stocks or crypto", "Check a bank on fdic.gov"] }
          ],
          tryIt: "Write one savings goal with an amount and a date. Work out how much to save each week, then ask AI to check your math.",
          youCanNow: "set a clear savings goal and choose a safe, insured place to keep it.",
          quickCheck: [
            { objective: "O3", q: "What makes a savings goal clear?", options: ["An amount and a date", "A nice name", "A big number", "Telling no one"], answer: 0, why: "A clear goal says how much and by when, like $300 by June 1." },
            { objective: "O3", q: "You want to save $200 in 20 weeks. How much do you set aside each week?", options: ["$20", "$10", "$4", "$100"], answer: 1, why: "$200 divided by 20 weeks is $10 a week." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your money plan",
        questions: [
          { objective: "O1", q: "Which is a need?", options: ["Streaming service", "Rent", "Eating out", "A new game"], answer: 1, why: "Rent is a must-pay cost to live." },
          { objective: "O2", q: "What is safe to type into an AI assistant for budget help?", options: ["Your bank account number", "Your card number", "Rounded amounts like \"rent about $1,400\"", "Your online banking password"], answer: 2, why: "Rounded amounts and categories give the help you need without private details." },
          { objective: "O2", q: "The AI adds your budget and gets a total that looks off. What do you do?", options: ["Trust it", "Delete your budget", "Ask a stranger online", "Check the total with a calculator"], answer: 3, why: "AI can make math mistakes; check it yourself." },
          { objective: "O3", q: "Which is a clear savings goal?", options: ["\"Save $300 for emergencies by June 1\"", "\"Save some\"", "\"Be rich\"", "\"Money later\""], answer: 0, why: "It has a purpose, an amount and a date." },
          { objective: "O3", q: "What does FDIC insurance cover?", options: ["Stocks", "Deposits in an insured bank, up to the limit", "Crypto", "Cash under your mattress"], answer: 1, why: "FDIC protects deposits at insured banks; not stocks or crypto." }
        ]
      }
    },
    {
      name: "Chapter 2: Credit, help and staying safe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Checking your credit report for free",
          minutes: 5,
          goal: "Find the official site for free credit reports and check a report for mistakes.",
          text: [
            "A credit report is a record of your loans, cards and bills. Landlords, lenders and some employers may look at it. Mistakes happen, and a mistake can cost you an apartment or a loan.",
            "You can get free credit reports from the three big credit bureaus, Equifax, Experian and TransUnion, every week at AnnualCreditReport.com. That is the official site. Other sites that promise \"free\" reports may try to sell you something.",
            "Look for accounts you do not recognize, wrong addresses and late payments you did make on time. If something is wrong, you can dispute it with the credit bureau. The Consumer Financial Protection Bureau at consumerfinance.gov explains how."
          ],
          steps: ["Type AnnualCreditReport.com yourself in the browser.", "Request your reports from Equifax, Experian and TransUnion.", "Look for accounts you do not know, wrong details and wrong late payments.", "If something is wrong, follow the dispute steps on consumerfinance.gov."],
          words: [["Credit report", "a record of your loans, credit cards and bill payments."], ["Credit bureau", "a company that keeps credit reports: Equifax, Experian, TransUnion."], ["Dispute", "officially ask to fix a mistake."]],
          sources: [{ name: "FTC: Free Credit Reports", url: "https://consumer.ftc.gov/articles/free-credit-reports" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Your credit report", bullets: ["Record of loans, cards and bills", "Landlords and lenders may check it", "Mistakes happen"] },
            { title: "Get it free", bullets: ["AnnualCreditReport.com is the official site", "Equifax, Experian, TransUnion", "Free every week"] },
            { title: "What to look for", bullets: ["Accounts you do not know", "Wrong addresses or late payments", "Dispute mistakes: see consumerfinance.gov"] }
          ],
          tryIt: "Write down the official site for free credit reports and the three bureau names. If you are ready and on a private device, request one report and look for anything you do not recognize.",
          youCanNow: "get your free credit reports from the official site and spot mistakes to dispute.",
          quickCheck: [
            { objective: "O4", q: "Who may look at your credit report?", options: ["Only you", "Only your family", "Landlords, lenders and some employers", "Nobody"], answer: 2, why: "Landlords, lenders and some employers may check your credit report." },
            { objective: "O4", q: "An ad offers a \"free\" credit report on a site you do not know. What do you do?", options: ["Sign up and enter your card", "Click the ad", "Ignore credit reports", "Type AnnualCreditReport.com yourself"], answer: 3, why: "AnnualCreditReport.com is the official site; others may try to sell you something." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Free tax and money help",
          minutes: 5,
          goal: "Find a free tax help site and a trusted source for money questions.",
          text: [
            "You do not need to pay a lot to get your taxes done. The IRS Volunteer Income Tax Assistance program, VITA, gives free tax help, mostly to people who meet the Earned Income Tax Credit income guidelines. Many sites also help people who make about $70,244 or less, people with disabilities and people with limited English. Each site can set its own rules, so check with the site.",
            "Find a VITA site with the IRS VITA/TCE Locator at freetaxassistance.for.irs.gov or by calling 800-906-9887. TCE gives similar free help, mainly to people 60 and older.",
            "For other money questions, the Consumer Financial Protection Bureau at consumerfinance.gov has free guides on bank accounts, debt collection, payday loans and more, and a way to submit a complaint about a company. Payday loans and quick-cash apps can cost far more than they seem; read the full cost before you sign."
          ],
          steps: ["Search the IRS VITA/TCE Locator or call 800-906-9887.", "Ask the site what to bring.", "Use consumerfinance.gov for money questions.", "Before any loan, ask for the full cost in dollars."],
          words: [["VITA", "Volunteer Income Tax Assistance: free IRS-backed tax help."], ["Payday loan", "a small, short-term loan that can be very expensive."]],
          sources: [{ name: "IRS: Free tax return preparation for qualifying taxpayers", url: "https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers" }, { name: "Consumer Financial Protection Bureau: Consumer tools", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          slides: [
            { title: "Free tax help: VITA", bullets: ["IRS-backed, run by trained volunteers", "Many sites help people earning about $70,244 or less", "Sites may set their own rules"] },
            { title: "Find a site", bullets: ["freetaxassistance.for.irs.gov", "Or call 800-906-9887", "TCE: free help mainly for ages 60+"] },
            { title: "Trusted money help", bullets: ["consumerfinance.gov guides and complaints", "Payday loans can cost a lot", "Ask for the full cost before you sign"] }
          ],
          tryIt: "Use the IRS VITA/TCE Locator to find the free tax help site nearest you. Write down its address and what it says to bring.",
          youCanNow: "find free tax help and trusted money information.",
          quickCheck: [
            { objective: "O5", q: "What does TCE mainly offer?", options: ["Free tax help, mainly for people 60 and older", "Paid loans", "Credit cards", "Job training"], answer: 0, why: "TCE gives free tax help like VITA, mainly to people 60 and older." },
            { objective: "O5", q: "A quick-cash app offers you $200 today. What do you ask first?", options: ["How fast you can get more", "The full cost in dollars", "If your friends use it", "Nothing; just sign"], answer: 1, why: "Payday loans and quick-cash apps can cost far more than they seem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Spotting money scams, and your final plan",
          minutes: 5,
          goal: "Spot common money scams and finish your budget plan.",
          text: [
            "Scammers go after people who are short on money with fake loans, fake debt relief, fake government grants and \"get rich quick\" offers, including crypto schemes. Some now use AI to write real-looking messages or copy a family member's voice.",
            "Warning signs: they rush you, ask you to pay with gift cards, wire transfers, payment apps or crypto, promise guaranteed money, or ask for your bank login or the code sent to your phone. A real government agency will not call and demand payment that way.",
            "If something feels wrong, stop, hang up and call back using a number you know is real. You can report scams to the Federal Trade Commission at ReportFraud.ftc.gov."
          ],
          steps: ["Watch for rushing, gift cards, crypto and guaranteed money.", "Never share bank logins or phone codes.", "Hang up and call back on a number you know.", "Report scams to the FTC."],
          words: [["Scam", "a trick to steal money or information."], ["Guaranteed returns", "a promise that you will surely make money; a common scam line."]],
          sources: [{ name: "Federal Trade Commission: ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          slides: [
            { title: "Common money scams", bullets: ["Fake loans and debt relief", "Fake government grants", "\"Get rich quick\" and crypto schemes"] },
            { title: "Warning signs", bullets: ["They rush you", "Gift cards, wires, payment apps or crypto", "Guaranteed money; asks for your code"] },
            { title: "What to do", bullets: ["Stop and hang up", "Call back on a number you know", "Report at ReportFraud.ftc.gov"] }
          ],
          tryIt: "Final task: finish your one-month budget with AI help (no private numbers), check the totals, write one savings goal with an amount and date, and write where you will get your free credit report and free tax help.",
          youCanNow: "make a household budget, plan savings, find free help and avoid money scams.",
          quickCheck: [
            { objective: "O6", q: "Which payment request is a scam warning sign?", options: ["A bill from your known utility at its usual address", "Paying rent to your landlord by check", "Being told to pay with gift cards", "Paying at the store counter"], answer: 2, why: "Scammers ask for gift cards, wire transfers, payment apps or crypto." },
            { objective: "O6", q: "You get a call in your cousin's voice asking for money right now. What do you do?", options: ["Send it right away", "Give them your bank login", "Pay with gift cards", "Hang up and call your cousin on a number you know"], answer: 3, why: "Scammers can copy voices with AI, so you call back on a known number." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Credit, help and staying safe",
        questions: [
          { objective: "O4", q: "What is the official site for free credit reports?", options: ["Any site that says \"free\"", "A text message link", "A social media ad", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com is the official site for free reports." },
          { objective: "O4", q: "You find an account on your credit report that is not yours. You should:", options: ["Dispute it with the credit bureau", "Ignore it", "Pay it right away", "Post it online"], answer: 0, why: "Disputing fixes mistakes on your report." },
          { objective: "O5", q: "What is VITA?", options: ["A payday loan", "Free IRS-backed tax help", "A credit bureau", "A savings account"], answer: 1, why: "VITA offers free tax preparation through trained volunteers." },
          { objective: "O6", q: "A caller says they are from the government and you must pay a fine today with gift cards. This is:", options: ["Normal", "A tax refund", "A scam", "A VITA service"], answer: 2, why: "Government agencies do not demand gift-card payments." },
          { objective: "O6", q: "Where can you report a scam?", options: ["To the scammer", "Nowhere", "In a group chat only", "ReportFraud.ftc.gov"], answer: 3, why: "The Federal Trade Commission takes scam reports." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Financial Literacy",
    questions: [
      { objective: "O1", q: "A budget is:", options: ["A plan for your money", "A type of loan", "A credit card", "A bank fee"], answer: 0, why: "A budget plans income and spending." },
      { objective: "O1", q: "Which is income?", options: ["Rent", "A paycheck", "Groceries", "A phone bill"], answer: 1, why: "Income is money coming in." },
      { objective: "O1", q: "Which is a want?", options: ["Child care for work", "Electricity", "Eating out", "Medicine"], answer: 2, why: "Eating out is nice to have, not a must." },
      { objective: "O1", q: "When starting a budget, it is okay to:", options: ["Skip income", "Use your password", "Guess wildly", "Round amounts to the nearest dollar or five"], answer: 3, why: "Close, rounded amounts are good enough to start." },
      { objective: "O2", q: "Which should you NEVER type into an AI assistant?", options: ["Your card number", "\"Food about $600\"", "\"Family of 4\"", "\"Suggest two cuts\""], answer: 0, why: "Card numbers are private information." },
      { objective: "O2", q: "AI suggests cutting your child's bus pass. You:", options: ["Must do it", "Decide what fits your family; that tip may not", "Ask a stranger", "Give AI your bank login"], answer: 1, why: "AI tips are ideas; you choose what fits." },
      { objective: "O2", q: "Why check AI's budget totals?", options: ["AI is never wrong", "It is the law", "AI can make math mistakes", "It changes your bank balance"], answer: 2, why: "Always check the math yourself." },
      { objective: "O3", q: "An emergency fund is:", options: ["Money for wants", "A loan", "A credit report", "Money saved only for surprise costs"], answer: 3, why: "It covers surprises like a car repair." },
      { objective: "O3", q: "You want $260 in 26 weeks. How much each week?", options: ["$5", "$10", "$26", "$100"], answer: 1, why: "$260 divided by 26 weeks is $10." },
      { objective: "O3", q: "FDIC insurance protects deposits up to:", options: ["$1,000", "$250,000 per depositor, per insured bank, per ownership category", "Any amount", "Only crypto"], answer: 1, why: "That is the FDIC standard amount." },
      { objective: "O3", q: "Which is NOT covered by FDIC insurance?", options: ["A savings account at an insured bank", "A checking account at an insured bank", "Crypto", "A certificate of deposit at an insured bank"], answer: 2, why: "FDIC does not cover crypto or stocks." },
      { objective: "O4", q: "A credit report is:", options: ["Your paycheck", "Your tax return", "Your budget", "A record of your loans, cards and bill payments"], answer: 3, why: "Lenders and landlords may look at it." },
      { objective: "O4", q: "The three big credit bureaus are:", options: ["Equifax, Experian and TransUnion", "Google, Bing and Yahoo", "FDIC, IRS and FTC", "Visa, Mastercard and Discover"], answer: 0, why: "These three keep credit reports." },
      { objective: "O4", q: "How often can you get free reports at AnnualCreditReport.com?", options: ["Once every ten years", "Every week", "Never", "Only if you pay"], answer: 1, why: "The bureaus offer free weekly reports there." },
      { objective: "O5", q: "Where can you find free guides on debt collection and payday loans?", options: ["A pop-up ad", "A scammer's text", "consumerfinance.gov", "A gift card store"], answer: 2, why: "The Consumer Financial Protection Bureau publishes free guides." },
      { objective: "O5", q: "How do you find a free VITA tax site?", options: ["Ask a stranger", "Pay a fee first", "Wait for a call", "Use the IRS VITA/TCE Locator or call 800-906-9887"], answer: 3, why: "Those are the IRS's official ways to find a site." },
      { objective: "O5", q: "Before taking a payday loan or quick-cash app, you should:", options: ["Ask for the full cost in dollars", "Sign fast", "Give your bank login", "Skip reading"], answer: 0, why: "These loans can cost far more than they seem." },
      { objective: "O6", q: "Someone promises \"guaranteed\" crypto profits. This is:", options: ["A safe deal", "A common scam warning sign", "FDIC insured", "Free tax help"], answer: 1, why: "Guaranteed money is a classic scam line." },
      { objective: "O6", q: "A message asks for the code sent to your phone to \"verify your bank\". You:", options: ["Send it", "Post it", "Never share it and call your bank on a number you know", "Read it out loud"], answer: 2, why: "That code protects your account." },
      { objective: "O6", q: "For a big money decision, the best step is:", options: ["Trust any AI answer", "Follow a social media post", "Ask the person selling it", "Check official sources or talk to a free nonprofit counselor"], answer: 3, why: "Official sources and real counselors protect you." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Budget",
        objective: "O1",
        notYet: "Income or expenses missing, or needs and wants not marked.",
        meets: "One month of income and expenses with rounded amounts, each marked need or want, and totals.",
        exceeds: "Uses pay stubs, statements or receipts to make the amounts close."
      },
      {
        name: "AI used safely",
        objective: "O2",
        notYet: "The prompt has an account, card or Social Security number, or totals were not checked.",
        meets: "Only rounded categories shared, totals checked, and one place to save chosen.",
        exceeds: "Explains why they kept or rejected each AI suggestion."
      },
      {
        name: "Savings goal",
        objective: "O3",
        notYet: "No amount or date.",
        meets: "One goal with an amount, a date and a checked weekly amount.",
        exceeds: "Names where the money will be kept and that it is federally insured."
      },
      {
        name: "Credit report and tax help",
        objective: "O5",
        notYet: "Does not say where to get the report or tax help.",
        meets: "Names AnnualCreditReport.com and a VITA or TCE site to use.",
        exceeds: "Has the tax site's address and what to bring."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who follow their budget and start saving within 30 days (follow-up survey)",
      "Learners who check their credit report or use free VITA tax help within 6 months",
      "Learners who report avoiding a money scam or a costly loan"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or a library computer, and a calculator (the phone has one)",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "Pay stubs, statements or receipts for one month (kept private)",
      "Paper or a free spreadsheet for the budget",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Learners keep their real numbers private; offer a practice budget for anyone who prefers not to use their own.",
      "Check prompts for account, card or Social Security numbers before they are sent.",
      "Give no investment, tax or legal advice; point learners to official sites, VITA or a free nonprofit counselor.",
      "Show AnnualCreditReport.com and the VITA/TCE Locator live, and have learners request reports only on a private device.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
