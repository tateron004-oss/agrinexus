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
  chapters: [
    {
      name: "Chapter 1: Your money plan",
      lessons: [
        {
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
          youCanNow: "list your income and sort expenses into needs and wants."
        },
        {
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
          youCanNow: "use AI to organize a budget without sharing private information, and check its math."
        },
        {
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
          youCanNow: "set a clear savings goal and choose a safe, insured place to keep it."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your money plan",
        questions: [
          { q: "Which is a need?", options: ["Streaming service", "Rent", "Eating out", "A new game"], answer: 1, why: "Rent is a must-pay cost to live." },
          { q: "What is safe to type into an AI assistant for budget help?", options: ["Your bank account number", "Your card number", "Rounded amounts like \"rent about $1,400\"", "Your online banking password"], answer: 2, why: "Rounded amounts and categories give the help you need without private details." },
          { q: "The AI adds your budget and gets a total that looks off. What do you do?", options: ["Trust it", "Delete your budget", "Ask a stranger online", "Check the total with a calculator"], answer: 3, why: "AI can make math mistakes; check it yourself." },
          { q: "Which is a clear savings goal?", options: ["\"Save $300 for emergencies by June 1\"", "\"Save some\"", "\"Be rich\"", "\"Money later\""], answer: 0, why: "It has a purpose, an amount and a date." },
          { q: "What does FDIC insurance cover?", options: ["Stocks", "Deposits in an insured bank, up to the limit", "Crypto", "Cash under your mattress"], answer: 1, why: "FDIC protects deposits at insured banks; not stocks or crypto." }
        ]
      }
    },
    {
      name: "Chapter 2: Credit, help and staying safe",
      lessons: [
        {
          title: "Checking your credit report for free",
          minutes: 5,
          goal: "Know how to get your free credit report and what to look for.",
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
          youCanNow: "get your free credit reports from the official site and spot mistakes to dispute."
        },
        {
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
          youCanNow: "find free tax help and trusted money information."
        },
        {
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
          youCanNow: "make a household budget, plan savings, find free help and avoid money scams."
        }
      ],
      check: {
        title: "Knowledge Check 2: Credit, help and staying safe",
        questions: [
          { q: "What is the official site for free credit reports?", options: ["Any site that says \"free\"", "A text message link", "A social media ad", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com is the official site for free reports." },
          { q: "You find an account on your credit report that is not yours. You should:", options: ["Dispute it with the credit bureau", "Ignore it", "Pay it right away", "Post it online"], answer: 0, why: "Disputing fixes mistakes on your report." },
          { q: "What is VITA?", options: ["A payday loan", "Free IRS-backed tax help", "A credit bureau", "A savings account"], answer: 1, why: "VITA offers free tax preparation through trained volunteers." },
          { q: "A caller says they are from the government and you must pay a fine today with gift cards. This is:", options: ["Normal", "A tax refund", "A scam", "A VITA service"], answer: 2, why: "Government agencies do not demand gift-card payments." },
          { q: "Where can you report a scam?", options: ["To the scammer", "Nowhere", "In a group chat only", "ReportFraud.ftc.gov"], answer: 3, why: "The Federal Trade Commission takes scam reports." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Financial Literacy",
    questions: [
      { q: "A budget is:", options: ["A plan for your money", "A type of loan", "A credit card", "A bank fee"], answer: 0, why: "A budget plans income and spending." },
      { q: "Which is income?", options: ["Rent", "A paycheck", "Groceries", "A phone bill"], answer: 1, why: "Income is money coming in." },
      { q: "Which is a want?", options: ["Child care for work", "Electricity", "Eating out", "Medicine"], answer: 2, why: "Eating out is nice to have, not a must." },
      { q: "When starting a budget, it is okay to:", options: ["Skip income", "Use your password", "Guess wildly", "Round amounts to the nearest dollar or five"], answer: 3, why: "Close, rounded amounts are good enough to start." },
      { q: "Which should you NEVER type into an AI assistant?", options: ["Your card number", "\"Food about $600\"", "\"Family of 4\"", "\"Suggest two cuts\""], answer: 0, why: "Card numbers are private information." },
      { q: "AI suggests cutting your child's bus pass. You:", options: ["Must do it", "Decide what fits your family; that tip may not", "Ask a stranger", "Give AI your bank login"], answer: 1, why: "AI tips are ideas; you choose what fits." },
      { q: "Why check AI's budget totals?", options: ["AI is never wrong", "It is the law", "AI can make math mistakes", "It changes your bank balance"], answer: 2, why: "Always check the math yourself." },
      { q: "An emergency fund is:", options: ["Money for wants", "A loan", "A credit report", "Money saved only for surprise costs"], answer: 3, why: "It covers surprises like a car repair." },
      { q: "You want $260 in 26 weeks. How much each week?", options: ["$5", "$10", "$26", "$100"], answer: 1, why: "$260 divided by 26 weeks is $10." },
      { q: "FDIC insurance protects deposits up to:", options: ["$1,000", "$250,000 per depositor, per insured bank, per ownership category", "Any amount", "Only crypto"], answer: 1, why: "That is the FDIC standard amount." },
      { q: "Which is NOT covered by FDIC insurance?", options: ["A savings account at an insured bank", "A checking account at an insured bank", "Crypto", "A certificate of deposit at an insured bank"], answer: 2, why: "FDIC does not cover crypto or stocks." },
      { q: "A credit report is:", options: ["Your paycheck", "Your tax return", "Your budget", "A record of your loans, cards and bill payments"], answer: 3, why: "Lenders and landlords may look at it." },
      { q: "The three big credit bureaus are:", options: ["Equifax, Experian and TransUnion", "Google, Bing and Yahoo", "FDIC, IRS and FTC", "Visa, Mastercard and Discover"], answer: 0, why: "These three keep credit reports." },
      { q: "How often can you get free reports at AnnualCreditReport.com?", options: ["Once every ten years", "Every week", "Never", "Only if you pay"], answer: 1, why: "The bureaus offer free weekly reports there." },
      { q: "Where can you find free guides on debt collection and payday loans?", options: ["A pop-up ad", "A scammer's text", "consumerfinance.gov", "A gift card store"], answer: 2, why: "The Consumer Financial Protection Bureau publishes free guides." },
      { q: "How do you find a free VITA tax site?", options: ["Ask a stranger", "Pay a fee first", "Wait for a call", "Use the IRS VITA/TCE Locator or call 800-906-9887"], answer: 3, why: "Those are the IRS's official ways to find a site." },
      { q: "Before taking a payday loan or quick-cash app, you should:", options: ["Ask for the full cost in dollars", "Sign fast", "Give your bank login", "Skip reading"], answer: 0, why: "These loans can cost far more than they seem." },
      { q: "Someone promises \"guaranteed\" crypto profits. This is:", options: ["A safe deal", "A common scam warning sign", "FDIC insured", "Free tax help"], answer: 1, why: "Guaranteed money is a classic scam line." },
      { q: "A message asks for the code sent to your phone to \"verify your bank\". You:", options: ["Send it", "Post it", "Never share it and call your bank on a number you know", "Read it out loud"], answer: 2, why: "That code protects your account." },
      { q: "For a big money decision, the best step is:", options: ["Trust any AI answer", "Follow a social media post", "Ask the person selling it", "Check official sources or talk to a free nonprofit counselor"], answer: 3, why: "Official sources and real counselors protect you." }
    ]
  }
};
