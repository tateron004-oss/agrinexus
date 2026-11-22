"use strict";

// Koach Learn course: shared -> "Personal Finance Basics: Budgeting, Credit and Saving" (one of the life-skills courses the owner asked for on 28 October 2026).
// Listed for Seniors and Technology, Athletes, Entrepreneurs, Re-Entry, Youth, Veterans, Workforce Development, Undeserved Community and Agriculture (Africa),
// so the examples are mixed and everyday, and Lesson 5 covers mobile money and savings groups for students outside the United States. No investment advice.
// Shape: see scripts/koachlearn-courses/README.md and the model course re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "personal-finance-basics",
  category: "Seniors and Technology",
  name: "Personal Finance Basics: Budgeting, Credit and Saving",
  skills: "Making a monthly budget, Reading your credit report, Planning to pay down debt, Building emergency savings, Saving with a bank or mobile money, Spotting predatory loans and scams",
  outcome: "make a one-page money plan: a monthly budget, a plan to pay down debt, an emergency savings goal and a date to check your credit reports, and spot a loan or offer that could trap you.",
  about: [
    "This course is for anyone who wants more control over their money: a grandparent on a fixed income, a young person with a first paycheck, a farmer who is paid at harvest, an athlete with a new sponsor, a veteran starting a civilian job, or someone coming home and starting over.",
    "You will write a simple budget, read your own credit report, choose which debt to pay first, start an emergency fund, learn safe ways to save with a bank, a credit union or mobile money, and learn the warning signs of payday-style loans and money scams.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task that you do with your own numbers on paper or in a spreadsheet. There is a knowledge check after each chapter and a 20-question quiz at the end. This course teaches money skills; it does not give investment advice. For big decisions, talk to a trusted, qualified person such as a nonprofit credit counselor."
  ],
  finalTask: "Write a one-page money plan: (1) a monthly budget with your income, needs, wants and savings; (2) a list of your debts and the one you will pay extra on; (3) an emergency savings goal and how much you will put away each week or month, and where; (4) the date you will check your credit reports. Then read one loan or money offer you have seen and write down any warning signs.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Anyone who wants more control over their money: seniors on a fixed income, young people with a first paycheck, farmers paid at harvest, athletes with a new sponsor, veterans starting civilian jobs and people coming home and starting over.",
    startingPoint: "Earn or receive some money and pay bills, but many do not write a budget, have never read their credit report, carry debt without a payoff plan, have little emergency savings, or struggle to spot a predatory loan or scam.",
    gap: "Without a plan, small surprises turn into debt, missed payments and scams that cost families money and stress. Learners need a simple one-page money plan and the habit of checking offers, so they can stay in control and build savings.",
    constraints: [
      "Reading level: plain words and short sentences, with simple math",
      "Not investment advice; big decisions go to a trusted, qualified person such as a nonprofit credit counselor",
      "Privacy: no bank account numbers, card numbers or passwords in AI tools or class sharing",
      "Rules and fees differ by country and provider; learners check official fee tables and sources",
      "Devices: paper or a free spreadsheet; some learners use mobile money"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using last month's income and costs", action: "write a monthly budget that sorts costs into needs, wants and savings", standard: "with a savings line and the total checked above or below zero" },
    { id: "O2", condition: "Using a free credit report (AnnualCreditReport.com in the US)", action: "check every account on your credit report and dispute any mistakes", standard: "keeping copies of anything you send" },
    { id: "O3", condition: "Given a list of debts", action: "choose which debt to pay extra on using the highest-rate way or the smallest-balance way", standard: "while paying at least the minimum on every debt on time" },
    { id: "O4", condition: "Using your budget", action: "set an emergency savings goal with an amount, a day and an automatic way to save", standard: "added as a line in your budget" },
    { id: "O5", condition: "Given a bank, credit union, mobile money service or savings group", action: "check the fees and rules before choosing a safe place to save", standard: "writing down what it costs to put money in and take it out" },
    { id: "O6", condition: "Given a loan or money offer", action: "identify the warning signs of a predatory loan or scam before saying yes", standard: "finding every warning sign in the offer" }
  ],
  chapters: [
    {
      name: "Chapter 1: Know where your money goes",
      lessons: [
        {
          objectives: ["O1"],
          title: "Making a simple monthly budget",
          minutes: 5,
          goal: "Write a monthly budget that shows your income, needs, wants and savings.",
          text: [
            "A budget is a plan for your money. It answers two questions: how much money comes in each month, and where it goes. Without a plan, money tends to disappear on small things and the big bills feel like a surprise.",
            "Start with income: pay after taxes, benefits such as Social Security or a pension, money from selling crops or goods, tips, or a sponsor payment. If your income changes from month to month, use the lowest normal month, so the plan still works in a slow month.",
            "Then list your spending in three groups. Needs are what you must pay: housing, food, utilities, transport, medicine, minimum debt payments. Wants are nice but not required: eating out, new clothes, streaming services. Savings is money you set aside on purpose. Put savings in the plan like a bill, even if it is small.",
            "If spending is bigger than income, cut wants first, then look for cheaper ways to meet needs. An AI assistant can help you make a blank budget table or suggest ways to cut costs, but type only rough amounts, never account numbers or passwords."
          ],
          steps: ["Write your total monthly income after taxes. If it changes, use a low month.", "List your needs and what each costs a month.", "List your wants and what each costs a month.", "Choose a savings amount, even a small one.", "Subtract needs, wants and savings from income. If the answer is below zero, cut wants first.", "Check the plan at the end of the month and adjust."],
          words: [["Budget", "a plan for how you will use the money you get each month."], ["Income", "money that comes in: pay, benefits, sales, tips."], ["Needs", "costs you must pay to live and work, like rent, food and medicine."], ["Wants", "things that are nice to have but you could live without."]],
          slides: [
            { title: "A budget is a plan for your money", bullets: ["How much comes in", "Where it goes", "No more surprise bills"] },
            { title: "Start with income", bullets: ["Pay after taxes, benefits, sales, tips", "If it changes, plan with a low month"] },
            { title: "Three groups of spending", bullets: ["Needs: housing, food, transport, medicine", "Wants: eating out, extras, subscriptions", "Savings: set aside like a bill"] },
            { title: "If it does not add up", bullets: ["Cut wants first", "Find cheaper ways to meet needs", "AI can draw a table; never type account numbers"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Consumer tools and money guides", url: "https://www.consumerfinance.gov/consumer-tools/" }],
          tryIt: "On paper or in a free spreadsheet (Google Sheets or Excel), write last month's income and every cost you remember. Mark each cost N for need or W for want, add a savings line, and subtract. Is your answer above or below zero?",
          youCanNow: "write a monthly budget with income, needs, wants and savings, and see whether it adds up.",
          quickCheck: [
            { objective: "O1", q: "Which of these is a want, not a need?", options: ["Rent", "Daily medicine", "A new streaming service", "Bus fare to work"], answer: 2, why: "A streaming service is nice to have; rent, medicine and transport to work are needs." },
            { objective: "O1", q: "Your budget shows you spend more than you earn. What would you do first?", options: ["Cut some wants", "Stop paying rent", "Take a payday loan", "Throw the budget away"], answer: 0, why: "When a budget is below zero, wants are the first place to cut." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reading your credit report and score",
          minutes: 5,
          goal: "Get your free credit reports and check them for mistakes.",
          text: [
            "In the United States, a credit report is a record of how you have borrowed and paid: loans, credit cards, some bills, and accounts sent to collections. Lenders, landlords and some employers look at it. A credit score is a number made from that report that tries to predict whether you will pay on time.",
            "You can get your credit reports free from the three nationwide companies, Equifax, Experian and TransUnion, at AnnualCreditReport.com or by calling (877) 322-8228. The Consumer Financial Protection Bureau says you can now get them free once a week. Checking your own report does not hurt your score.",
            "Be careful: some websites say \"free credit report\" but then sign you up for paid products. Use AnnualCreditReport.com.",
            "Read each report and look for anything that is not yours: an account you never opened, a late payment you did make on time, a debt listed twice, or a wrong name or address. You have the right to dispute mistakes with the credit company and the business that reported them. Paying on time, keeping card balances low and not opening many new accounts at once all help your score over time."
          ],
          steps: ["Go to AnnualCreditReport.com (type the address yourself) or call (877) 322-8228.", "Request your reports from Equifax, Experian and TransUnion.", "Check your name, addresses and every account.", "Circle anything you do not recognize or that is wrong.", "Dispute errors with the credit company, and keep copies of what you send."],
          words: [["Credit report", "a record of how you have borrowed money and paid it back."], ["Credit score", "a number made from your credit report that lenders use to judge risk."], ["Dispute", "to tell the credit company that something on your report is wrong and ask them to fix it."], ["Collections", "when a debt is sent to a company that tries to collect unpaid money."]],
          slides: [
            { title: "Report and score", bullets: ["Report: your borrowing and paying history", "Score: a number made from the report", "Lenders, landlords and some employers look"] },
            { title: "Get your reports free", bullets: ["AnnualCreditReport.com or (877) 322-8228", "Equifax, Experian and TransUnion", "Checking your own report does not hurt your score"] },
            { title: "Look for mistakes", bullets: ["Accounts you never opened", "Wrong late payments or duplicates", "Wrong name or address"] },
            { title: "Help your score over time", bullets: ["Pay every bill on time", "Keep card balances low", "Dispute errors and keep copies"] }
          ],
          sources: [
            { name: "CFPB: How do I get a free copy of my credit reports?", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-free-copy-of-my-credit-reports-en-5/" },
            { name: "CFPB: Credit reports and scores", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            { name: "AnnualCreditReport.com", url: "https://www.annualcreditreport.com/" }
          ],
          tryIt: "If you live in the US, request at least one free credit report at AnnualCreditReport.com and check every account on it. If you are outside the US, find out whether your country has a credit bureau and how to request your report from it. Write down one thing you checked and what you found.",
          youCanNow: "get your free credit reports, read them for mistakes, and know how to dispute an error.",
          quickCheck: [
            { objective: "O2", q: "What is a credit report?", options: ["A list of your bank passwords", "Your monthly budget", "A record of your loans, cards and payment history", "Your tax return"], answer: 2, why: "A credit report lists your credit accounts and how you have paid them." },
            { objective: "O2", q: "Your credit report shows an address where you never lived. What would you do?", options: ["Ignore it", "Dispute it with the credit company and keep copies", "Close all your accounts", "Pay a stranger to fix it"], answer: 1, why: "Mistakes on a credit report should be disputed, with copies kept." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Making a plan to pay down debt",
          minutes: 5,
          goal: "List your debts and choose which one to pay extra on first.",
          text: [
            "Debt is easier to beat when you can see all of it. Make a list of every debt: who you owe, how much, the interest rate, the minimum payment and the due date. Include credit cards, store cards, car loans, medical bills, loans from family, and any loan taken through a phone app.",
            "Always pay at least the minimum on every debt, on time. Late payments add fees and can hurt your credit. Then put any extra money on just one debt at a time.",
            "There are two common ways to choose. The highest-rate first way pays extra on the debt with the highest interest rate, which usually saves the most money. The smallest-balance first way pays off the smallest debt first, which gives a quick win and keeps many people going. Both work if you stick with them. When one debt is paid off, move its payment to the next one.",
            "If you cannot make a payment, call the lender before the due date and ask about options. A nonprofit credit counselor can also help you make a plan. Be careful of companies that ask for big fees up front to \"erase\" your debt."
          ],
          steps: ["List every debt: who, how much, interest rate, minimum, due date.", "Set up a way to pay every minimum on time, such as reminders.", "Choose one debt for extra payments: highest rate or smallest balance.", "When it is paid off, add its payment to the next debt.", "If you are going to miss a payment, call the lender before the due date."],
          words: [["Interest rate", "the price of borrowing, shown as a percent of what you owe."], ["Minimum payment", "the smallest amount you must pay each month to stay on time."], ["Balance", "how much you still owe."]],
          slides: [
            { title: "See all your debt", bullets: ["Who you owe and how much", "Interest rate, minimum and due date", "Include phone-app loans and family loans"] },
            { title: "Two rules", bullets: ["Pay every minimum on time", "Put extra money on one debt at a time"] },
            { title: "Which debt first?", bullets: ["Highest rate first: usually saves the most", "Smallest balance first: quick wins", "Paid off? Roll its payment to the next"] },
            { title: "Stuck?", bullets: ["Call the lender before the due date", "Ask a nonprofit credit counselor", "Beware of big up-front fees to erase debt"] }
          ],
          sources: [{ name: "CFPB: Debt collection and managing debt", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" }],
          tryIt: "Make a table of your debts (or a made-up example if you have none) with who, balance, rate, minimum and due date. Circle the debt you would pay extra on using the highest-rate way, and the one using the smallest-balance way.",
          youCanNow: "list your debts, pay the minimums on time, and choose which debt to pay extra on first.",
          quickCheck: [
            { objective: "O3", q: "What does the smallest-balance way of paying debt mean?", options: ["Pay only the smallest debt and skip the others", "Pay extra on the debt with the smallest balance while paying minimums on the rest", "Pay the same extra amount on every debt", "Pay nothing until you have more money"], answer: 1, why: "You pay minimums on all and put extra on the smallest balance for a quick win." },
            { objective: "O3", q: "You know you will miss a loan payment next week. What would you do?", options: ["Hide from the lender", "Wait until they call you", "Take a new loan to pay it", "Call the lender before the due date and ask about options"], answer: 3, why: "Calling early gives you the most options." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Know where your money goes",
        questions: [
          { objective: "O1", q: "Your income changes from month to month. Which amount should you plan your budget with?", options: ["Your best month", "Your average hope for next year", "A low, normal month", "Whatever your friends earn"], answer: 2, why: "Planning with a low month means the budget still works when money is slow." },
          { objective: "O1", q: "Which of these is a need, not a want?", options: ["Medicine you take every day", "A streaming service", "Eating out on Fridays", "A new phone case"], answer: 0, why: "Medicine is something you must pay for to stay healthy." },
          { objective: "O2", q: "Where can people in the US get their credit reports free?", options: ["Any site that shows an ad for free reports", "A link in a text message", "A debt collector's website", "AnnualCreditReport.com"], answer: 3, why: "AnnualCreditReport.com is the official free source for reports from the three companies." },
          { objective: "O2", q: "You find a credit card on your report that you never opened. What do you do?", options: ["Ignore it", "Dispute it with the credit company and keep copies", "Pay it off to make it go away", "Close your bank account"], answer: 1, why: "You have the right to dispute mistakes; an account you did not open could also be identity theft." },
          { objective: "O3", q: "You can pay a little extra on one debt. Using the highest-rate way, which one gets the extra?", options: ["The one with the smallest balance", "The one with the latest due date", "The one with the highest interest rate", "The newest one"], answer: 2, why: "Paying the highest rate first usually saves the most interest." }
        ]
      }
    },
    {
      name: "Chapter 2: Build your safety net",
      lessons: [
        {
          objectives: ["O4"],
          title: "Starting an emergency fund",
          minutes: 4,
          goal: "Set an emergency savings goal and an automatic way to reach it.",
          text: [
            "An emergency fund is money set aside only for surprises: a car repair, a doctor bill, a broken water pump, a lost shift or a slow sales month. Without it, a small problem can push you into expensive debt.",
            "Start small. The Consumer Financial Protection Bureau says even a small amount gives some security. One way to pick a goal: think about surprise costs you had in the past year and what they cost. Then choose a first goal you can reach, and a bigger goal after that.",
            "Make saving automatic. Set a regular transfer to savings on payday, or ask your employer to split your direct deposit if they allow it. Put tax refunds, cash gifts or part of a harvest payment straight into savings.",
            "Keep the money somewhere safe but separate from spending money, such as a savings account at a bank or credit union. Cash at home can be lost or stolen. Decide in advance what counts as an emergency, use the fund when you need it, and then build it back up."
          ],
          steps: ["Write down surprise costs you had in the last year.", "Choose a first goal you can reach and a bigger goal for later.", "Set an automatic transfer or a fixed amount you save every payday.", "Keep the fund separate from everyday spending money.", "Write what counts as an emergency. After you use it, rebuild it."],
          words: [["Emergency fund", "money kept only for unexpected costs or lost income."], ["Automatic transfer", "a payment your bank moves for you on a set day, without you doing it each time."], ["Credit union", "a not-for-profit bank owned by its members."]],
          slides: [
            { title: "What it is for", bullets: ["Repairs, doctor bills, lost income", "Keeps small problems from becoming big debt"] },
            { title: "Pick a goal", bullets: ["Look at last year's surprise costs", "Start small, then grow it", "Even a little helps"] },
            { title: "Make it automatic", bullets: ["Transfer on payday", "Split direct deposit if allowed", "Save refunds, gifts and part of harvest money"] },
            { title: "Keep it safe and separate", bullets: ["Bank or credit union savings", "Cash at home can be lost or stolen", "Use it, then rebuild it"] }
          ],
          sources: [{ name: "CFPB: An essential guide to building an emergency fund", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }],
          tryIt: "Write your first emergency savings goal, the amount you will save each week or month, the day you will save it, and where you will keep it. Add it as a line in your Lesson 1 budget.",
          youCanNow: "set an emergency savings goal, save toward it automatically, and keep it safe and separate.",
          quickCheck: [
            { objective: "O4", q: "Which is an emergency an emergency fund is meant for?", options: ["A car repair you did not expect", "A holiday sale", "A new phone you want", "A night out"], answer: 0, why: "Emergency funds cover unexpected costs, not planned wants." },
            { objective: "O4", q: "You keep forgetting to save. What would you do?", options: ["Save only what is left at the end of the month", "Give up on saving", "Set an automatic transfer on payday", "Keep savings in your wallet"], answer: 2, why: "Automatic saving on payday happens before the money is spent." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Saving with a bank, mobile money or a savings group",
          minutes: 5,
          goal: "Choose a safe place to save and check its fees and rules before you use it.",
          text: [
            "Where you save matters. In the US, a savings account at a bank or credit union that is federally insured is one of the safest places for money. In many countries, especially in Africa, people save with mobile money on their phone, at a bank or SACCO, or in a savings group.",
            "Mobile money services such as M-Pesa let you keep money on your phone, send it and pay bills. Many also have a separate savings or locked-savings option, which helps keep savings apart from spending money. Fees and interest are different for each service and change over time, so read the official fee table in the app or on the provider's website, or ask at an official agent, before you move money.",
            "Example: a farmer in Kenya is paid for maize at harvest. She sends part of the payment into a separate savings option the same day, before she spends any, and leaves the rest for seeds, school fees and food. She checks the fee for each transfer in the official fee table first.",
            "In a savings group, often called a chama, members each pay a set amount on a schedule. Write down every payment, keep a copy of the group's rules, and only join groups whose members you know and trust. Whatever you use: never share your PIN, and be careful of anyone who calls asking you to send money back after a \"wrong\" transfer. Check your balance first."
          ],
          steps: ["Choose where to save: bank, credit union, SACCO, mobile money savings or a trusted savings group.", "Find the official fee table and rules, in the app, on the official website or from an official agent.", "Move savings on payday or harvest day, before spending.", "Keep a written record of every deposit.", "Never share your PIN, and check your balance before sending money back to anyone."],
          words: [["Mobile money", "a service that lets you store, send and receive money with a phone."], ["SACCO", "a savings and credit cooperative, a member-owned group that saves and lends, common in East Africa."], ["Chama", "a savings group, often in Kenya, where members save together on a schedule."], ["PIN", "a secret number that protects your account. Never share it."]],
          slides: [
            { title: "Choose a safe place to save", bullets: ["US: insured bank or credit union savings", "Africa: bank, SACCO, mobile money or savings group"] },
            { title: "Mobile money savings", bullets: ["Use a separate savings option if there is one", "Read the official fee table first", "Fees change: check in the app or with an agent"] },
            { title: "Save first, then spend", bullets: ["Move savings on payday or harvest day", "Then pay for seeds, school fees, food"] },
            { title: "Stay safe", bullets: ["Never share your PIN", "Check your balance before sending money back", "Join only groups you know and trust"] }
          ],
          sources: [
            { name: "CFPB: An essential guide to building an emergency fund (where to keep savings)", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" }
          ],
          tryIt: "Pick the place you will keep your emergency savings. Find its official fee table or account rules and write down what it costs to put money in and take it out. If you use mobile money, find the savings option in the app menu without moving any money yet.",
          youCanNow: "choose a safe place to save, check its fees and rules first, and protect your account.",
          quickCheck: [
            { objective: "O5", q: "Why keep emergency savings in a bank or credit union instead of cash at home?", options: ["It is safer from theft and loss", "It is easier to spend", "Banks pay you to take money out", "Cash at home earns more"], answer: 0, why: "An account keeps savings safer than cash at home." },
            { objective: "O5", q: "You plan to use a mobile money savings option. What would you do first?", options: ["Move all your money right away", "Ask a stranger online what it costs", "Assume it is free", "Read the official fee table and rules"], answer: 3, why: "Fees differ and change, so check the official fee table first." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Spotting predatory loans and money scams",
          minutes: 5,
          goal: "Read a loan or money offer and find the warning signs before you say yes.",
          text: [
            "A predatory loan is a loan built to keep you paying. Payday loans, some car-title loans and some phone-app loans are short and very expensive. The fee may look small, but as an annual percentage rate (APR) the cost can be very high, and many people roll the loan over again and again. Before you borrow, look at the APR and every fee, and ask yourself how you will repay it.",
            "Know your rights in the US: the Consumer Financial Protection Bureau says you cannot be arrested for not paying a payday loan, and a lender can take part of your pay only with a court order. Service members have extra protection under the Military Lending Act. You can also check whether a lender is licensed in your state.",
            "Scams have warning signs. They rush you. They ask you to pay with gift cards, a wire transfer, cryptocurrency or a mobile money transfer to a stranger. They promise a loan or grant if you pay a fee first. They say you won a prize you never entered. They ask for your PIN, password or a code sent to your phone.",
            "When you see a sign: stop, do not pay, and check with the real company using a number you find yourself. Talk to someone you trust. Cheaper options than a predatory loan can include asking the creditor for more time, a small loan from a credit union, or help from a local nonprofit."
          ],
          steps: ["Find the APR and every fee in the offer.", "Ask: how and when will I repay this, and what if I cannot?", "Look for scam signs: rush, gift cards or wire, fee first, prize, PIN or code requests.", "Stop and check with the real company using a number you find yourself.", "Look for cheaper options: more time from the creditor, a credit union loan, a nonprofit."],
          words: [["APR", "annual percentage rate: the yearly cost of a loan, including fees, shown as a percent. It lets you compare loans."], ["Payday loan", "a small, short loan, often due on your next payday, that can be very expensive."], ["Rollover", "taking a new loan to pay off the old one, adding more fees."], ["Predatory loan", "a loan with unfair or very high costs that traps the borrower."]],
          slides: [
            { title: "Loans that trap you", bullets: ["Payday, some car-title and app loans", "Small fee, very high APR", "Rollovers add more fees"] },
            { title: "Before you borrow", bullets: ["Find the APR and all fees", "Know how you will repay", "US: check the lender is licensed in your state"] },
            { title: "Scam warning signs", bullets: ["They rush you", "Gift cards, wire, crypto or transfer to a stranger", "A fee first for a loan or prize", "They ask for your PIN or a code"] },
            { title: "Better choices", bullets: ["Ask the creditor for more time", "Credit union small loan", "Local nonprofit help"] }
          ],
          sources: [
            { name: "CFPB: Payday loans", url: "https://www.consumerfinance.gov/consumer-tools/payday-loans/" },
            { name: "CFPB: Fraud and scams", url: "https://www.consumerfinance.gov/consumer-tools/fraud/" }
          ],
          tryIt: "Final task: finish your one-page money plan: your Lesson 1 budget, your debt list with the debt you will pay extra on, your emergency savings goal and where you keep it, and the date you will check your credit reports. Then read one loan or money offer you have seen (a text, an ad or a letter) and write down every warning sign you find.",
          youCanNow: "read a loan or money offer, find the APR and the warning signs, and choose a safer option.",
          quickCheck: [
            { objective: "O6", q: "What is a warning sign in a loan offer?", options: ["It shows the APR clearly", "It asks you to pay a fee with a gift card to get the loan", "It gives you time to read the terms", "It comes from your credit union"], answer: 1, why: "Up-front fees paid with gift cards are a common scam sign." },
            { objective: "O6", q: "A text says \"You are pre-approved! Reply now or lose this offer today.\" What would you do?", options: ["Reply right away", "Send your bank details to hold the offer", "Forward it to friends", "Slow down and check the lender through an official source before replying"], answer: 3, why: "Pressure to act now is a warning sign; check before you respond." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Build your safety net",
        questions: [
          { objective: "O4", q: "What is an emergency fund for?", options: ["Holiday shopping", "Unexpected costs like a repair or lost income", "Buying lottery tickets", "Lending to friends"], answer: 1, why: "An emergency fund is kept only for surprises and lost income." },
          { objective: "O4", q: "Which is the best way to keep saving every month?", options: ["Save whatever is left at the end of the month", "Keep the money in your wallet", "Wait for a big raise first", "Set an automatic transfer on payday"], answer: 3, why: "Automatic saving happens before the money gets spent." },
          { objective: "O5", q: "Before you use a mobile money savings option, what should you check?", options: ["The official fee table and rules", "What a stranger on social media says", "Nothing; it is always free", "Your neighbor's PIN"], answer: 0, why: "Fees and rules differ by service and change, so check the official source first." },
          { objective: "O6", q: "Someone texts that they sent you money by mistake and asks you to send it back now. What do you do first?", options: ["Send it back right away", "Share your PIN so they can fix it", "Check your real balance yourself before doing anything", "Send double to be nice"], answer: 2, why: "This is a common scam; check your own balance and ask your provider." },
          { objective: "O6", q: "A lender says you will get a loan as soon as you pay a fee with a gift card. This is:", options: ["A normal bank loan", "A warning sign of a scam", "A government grant", "A credit report"], answer: 1, why: "Paying a fee first, especially with a gift card, is a scam sign." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Personal Finance Basics: Budgeting, Credit and Saving",
    questions: [
      { objective: "O1", q: "A budget is:", options: ["A plan for the money you get each month", "A type of loan", "A credit score", "A bank fee"], answer: 0, why: "A budget plans where your money goes." },
      { objective: "O1", q: "Which belongs in the savings group of a budget?", options: ["Rent", "A weekly takeout dinner", "Money set aside for your emergency fund", "Your phone bill"], answer: 2, why: "Savings is money you set aside on purpose." },
      { objective: "O1", q: "Your budget comes out below zero. What should you cut first?", options: ["Medicine", "Wants", "Rent", "Minimum debt payments"], answer: 1, why: "Cut wants before needs." },
      { objective: "O1", q: "What should you NOT type into an AI assistant when making a budget?", options: ["Rough monthly costs", "\"Make me a budget table\"", "\"Suggest ways to cut costs\"", "Your bank account number"], answer: 3, why: "Never share account numbers or passwords with AI tools." },
      { objective: "O2", q: "What is a credit score?", options: ["Your bank balance", "A number made from your credit report", "Your income", "A loan fee"], answer: 1, why: "A credit score is based on the information in your credit report." },
      { objective: "O2", q: "Does checking your own credit report lower your score?", options: ["No", "Yes, a lot", "Yes, a little each time", "Only on weekends"], answer: 0, why: "The CFPB says requesting your own reports does not hurt your score." },
      { objective: "O2", q: "Which three companies give nationwide US credit reports?", options: ["Visa, Mastercard, Discover", "Social Security, IRS, Medicare", "Chase, Wells Fargo, Citi", "Equifax, Experian, TransUnion"], answer: 3, why: "These are the three nationwide credit reporting companies." },
      { objective: "O2", q: "A website offers a \"free credit report\" but asks for a card to start a trial. What is the safer choice?", options: ["Sign up anyway", "Give your card number", "Use AnnualCreditReport.com instead", "Share the link with friends"], answer: 2, why: "Some sites sign you up for paid products; AnnualCreditReport.com is the official free source." },
      { objective: "O2", q: "Your report shows a late payment you know you paid on time. You should:", options: ["Wait for it to go away", "Open a new card", "Dispute the error and keep copies", "Stop paying all bills"], answer: 2, why: "You can dispute mistakes with the credit company and the business." },
      { objective: "O3", q: "On your debt list, what should you always pay on every debt?", options: ["Nothing until you can pay all of it", "At least the minimum, on time", "Only the biggest one", "Double the balance"], answer: 1, why: "Missing minimums adds fees and hurts your credit." },
      { objective: "O3", q: "Why might someone choose to pay the smallest balance first?", options: ["A quick win keeps them motivated", "It always saves the most money", "Lenders require it", "It removes all interest"], answer: 0, why: "Paying off a small debt fast gives a quick win; the highest-rate way usually saves more." },
      { objective: "O3", q: "You will miss a car payment next week. What is the best move?", options: ["Say nothing and hope", "Take a payday loan", "Change your phone number", "Call the lender before the due date and ask about options"], answer: 3, why: "Lenders may offer options if you call early." },
      { objective: "O4", q: "A good first emergency savings goal is:", options: ["A huge amount you cannot reach", "A small amount you can reach, then a bigger one", "Zero until you are rich", "Whatever your neighbor has"], answer: 1, why: "Start small and grow it; even a little helps." },
      { objective: "O5", q: "Where is a safer place to keep emergency savings than cash at home?", options: ["Under the mattress", "With a stranger online", "A savings account at a bank or credit union", "In your everyday wallet"], answer: 2, why: "Cash can be lost or stolen; insured accounts are safer." },
      { objective: "O4", q: "A farmer is paid at harvest. What is a good saving habit?", options: ["Spend first and save what is left", "Lend it all to a cousin", "Keep it all in cash at home", "Move part into savings the same day, before spending"], answer: 3, why: "Saving first, before spending, makes the plan work." },
      { objective: "O5", q: "Mobile money fees:", options: ["Differ by service and change, so check the official fee table", "Are always zero", "Are the same in every country", "Never matter"], answer: 0, why: "Check current fees in the app, on the official site or with an official agent." },
      { objective: "O5", q: "In a savings group (chama), what protects you best?", options: ["Paying without records", "Joining any group online", "Written records of every payment and a copy of the rules", "Sharing your PIN with the group"], answer: 2, why: "Records and written rules protect every member." },
      { objective: "O6", q: "What does APR tell you?", options: ["Your credit score", "The yearly cost of a loan, including fees, as a percent", "How much you earn", "Your bank's address"], answer: 1, why: "APR lets you compare the true cost of loans." },
      { objective: "O6", q: "In the US, can you be arrested for not paying a payday loan?", options: ["Yes, always", "Yes, after one day", "Only on the weekend", "No"], answer: 3, why: "The CFPB says you cannot be arrested for defaulting on a payday loan." },
      { objective: "O6", q: "Which is a cheaper option than a payday loan?", options: ["A small loan from a credit union", "Rolling over a payday loan", "Paying a stranger with gift cards", "A loan that needs a fee first"], answer: 0, why: "Credit union loans and asking for more time usually cost far less." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      2,
      5,
      7,
      9,
      12,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Monthly budget",
        objective: "O1",
        notYet: "Income or costs are missing, or there is no savings line.",
        meets: "Income, needs, wants and savings are listed and the total is checked.",
        exceeds: "Uses a low, normal month and shows which wants were cut."
      },
      {
        name: "Debt plan",
        objective: "O3",
        notYet: "Debts are missing, or no debt is chosen for extra payments.",
        meets: "All debts listed with balance, rate, minimum and due date, and one chosen for extra payments.",
        exceeds: "Explains why they chose the highest-rate or smallest-balance way."
      },
      {
        name: "Emergency savings",
        objective: "O4",
        notYet: "No goal, or no amount and day.",
        meets: "A goal, an amount, a day and a place to save, added to the budget.",
        exceeds: "The saving is set up to happen automatically."
      },
      {
        name: "Safe place to save",
        objective: "O5",
        notYet: "Place chosen without checking fees or rules.",
        meets: "Fees to put money in and take it out are written down from the official source.",
        exceeds: "Compared two options before choosing."
      },
      {
        name: "Credit report date",
        objective: "O2",
        notYet: "No date to check credit reports.",
        meets: "A date to check credit reports from the official free source.",
        exceeds: "Has already checked one report and noted what they found."
      },
      {
        name: "Offer warning signs",
        objective: "O6",
        notYet: "Missed clear warning signs in the offer.",
        meets: "Lists the warning signs in a real offer.",
        exceeds: "Also names a safer option, such as a credit union loan."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who are using a written budget at 30 days (follow-up survey)",
      "Learners who started or added to an emergency fund within 30 days",
      "Learners who checked their credit report within 60 days",
      "Learners who report avoiding a predatory loan or money scam"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen, or a free spreadsheet such as Google Sheets or Excel",
      "Last month's income and bills (kept private)",
      "Internet access for AnnualCreditReport.com (US) or the local credit bureau and fee tables",
      "About 60 minutes in total, plus time to gather your own numbers"
    ],
    facilitatorNotes: [
      "Let learners use made-up numbers in class; never ask anyone to share real balances, account numbers or credit reports.",
      "Remind learners this is not investment advice and point them to a nonprofit credit counselor for big decisions.",
      "For learners outside the US, help them find their country's credit bureau and official mobile money fee tables.",
      "Bring real examples of loan and scam offers for the warning-sign practice.",
      "Score the money plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
