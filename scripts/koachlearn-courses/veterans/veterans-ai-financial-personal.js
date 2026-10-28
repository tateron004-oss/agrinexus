"use strict";

// Koach Learn course: Veterans (military) -> "AI for Financial and Personal Success". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three
// micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Official pages checked 27 October 2026 (listed in each lesson's `sources`). No investment advice.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "veterans-ai-financial-personal",
  category: "Veterans (military)",
  name: "AI for Financial and Personal Success",
  skills: "Using AI safely with money questions, Building a civilian monthly budget, Planning for pay changes after service, Spotting money scams aimed at veterans, Setting goals and a weekly routine, Finding free official money help",
  outcome: "build a simple monthly civilian budget and a weekly routine with an AI assistant's help, using rounded numbers and no private account details, and check money questions with an official source.",
  about: [
    "This course is for veterans and transitioning service members who want to take charge of money and daily life after service. Pay, housing and routine all change when you leave the military, and a plan makes that change easier.",
    "You will use a free AI assistant as a planning helper: to build a budget, plan for the pay you will lose and gain, spot scams, set goals and build a weekly routine. You will learn exactly what never to type into an AI, and where to get free, official money help.",
    "This course does not give investment advice. AI is a helper, not a financial advisor: always check money decisions with an official source or a qualified professional. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Use an AI assistant to build a one-page monthly civilian budget with rounded numbers (income, needs, wants, savings and debt payments), including one line for a pay change after service, and a weekly routine with three goal blocks. Check that it contains no account numbers or private details, and write one money question you will take to an official source or counselor.",
  chapters: [
    {
      name: "Chapter 1: Money after service",
      lessons: [
        {
          title: "Using AI safely for money questions",
          minutes: 4,
          goal: "Ask an AI assistant a money question safely, with no private details.",
          text: [
            "An AI assistant can explain money words, build a budget table, compare options you give it, and turn a messy list of bills into a plan. It is a fast, patient helper.",
            "It is not a financial advisor. It does not know your full situation, it can be wrong about rules and numbers, and it can be out of date. Use it to understand and organize; check decisions with an official source or a qualified counselor.",
            "Never type your Social Security number, your DD-214 or VA file numbers, bank or card numbers, account logins or passwords into an AI. Use rounded numbers instead: \"rent about $1,200\" is all it needs."
          ],
          steps: ["Decide what you want: an explanation, a table or a plan.", "Use rounded numbers, no account details.", "Ask the question.", "Mark any rule, rate or deadline to check with an official source."],
          words: [["Budget", "a plan for how your money comes in and goes out each month."], ["Rounded number", "a close, simple number like $1,200 instead of an exact figure tied to an account."]],
          slides: [
            { title: "AI can help you", bullets: ["Explain money words", "Build a budget table", "Turn a list of bills into a plan"] },
            { title: "AI is not", bullets: ["A financial advisor", "Always right or up to date", "The one who decides: you are"] },
            { title: "Never type", bullets: ["SSN, DD-214 or VA file numbers", "Bank or card numbers, logins, passwords", "Use rounded numbers instead"] }
          ],
          tryIt: "Ask an AI assistant: \"Explain the difference between a need and a want in a monthly budget, with three examples each.\" Check your prompt has no private details before you send it.",
          youCanNow: "ask an AI assistant money questions safely and know what to check elsewhere."
        },
        {
          title: "Building a civilian monthly budget",
          minutes: 6,
          goal: "Build a monthly budget table with an AI assistant using rounded numbers.",
          text: [
            "In uniform, some costs may have been covered or paid as allowances, such as housing and food allowances, and health care through TRICARE. When you leave service, many of these change or stop. Your civilian budget must cover them from your pay or benefits. Check your own final pay and benefits with your finance office, DFAS or the VA rather than guessing.",
            "Start with four groups: income (pay, benefits), needs (rent, utilities, food, transport, insurance, health), wants (eating out, subscriptions), and savings and debt payments. Ask the AI to build the table and add up each group.",
            "Example prompt: \"Make a monthly budget table. Income about $3,800. Rent $1,200, utilities $200, groceries $450, car payment $350, gas $160, phone $70, insurance $150, eating out $200, subscriptions $40. Show totals and what is left.\""
          ],
          steps: ["List your monthly income with rounded numbers.", "List needs, wants, savings and debt payments.", "Ask the AI to build a table with totals and what is left.", "Add any costs that were covered in service and now are not.", "Check the math yourself with a calculator."],
          words: [["Allowance", "money paid in service for a cost like housing or food."], ["Need", "a cost you must pay to live and work, like rent."], ["Want", "a cost you can cut, like eating out."]],
          slides: [
            { title: "What changes after service", bullets: ["Allowances such as housing and food may stop", "Health coverage may change", "Check your own pay and benefits officially"] },
            { title: "Four budget groups", bullets: ["Income", "Needs", "Wants", "Savings and debt payments"] },
            { title: "Let AI build the table", bullets: ["Give rounded numbers", "Ask for totals and what is left", "Check the math yourself"] }
          ],
          tryIt: "Ask an AI assistant to build your monthly budget table with rounded numbers. Add one line for a cost that was covered while you served. Check the totals with a calculator.",
          youCanNow: "build a monthly civilian budget table with rounded numbers and check its totals."
        },
        {
          title: "Spotting money scams aimed at veterans",
          minutes: 5,
          goal: "Spot the warning signs of a money scam and know what to do.",
          text: [
            "Scammers target veterans because of benefits and pensions. Common traps include offers to \"buy\" your future pension or benefit payments for a lump sum now (pension advances), people charging to file VA claims or \"increase\" your rating, fake job offers, and calls pretending to be the VA.",
            "The Consumer Financial Protection Bureau warns service members and veterans about pension advances and explains your money rights. Scammers now use AI too, to write real-looking messages and even copy voices.",
            "Warning signs: they rush you, ask for an upfront fee, ask for gift cards or a wire transfer, or ask for a code sent to your phone. Stop, hang up, and call back on a number you find yourself on va.gov or the official site. You can also paste a suspicious message into an AI and ask \"What are the warning signs in this?\", after removing your private details."
          ],
          steps: ["Notice pressure, upfront fees, gift cards, wire transfers or code requests.", "Stop and do not pay or share anything.", "Find the official number yourself and call back.", "Remove private details, then ask AI to point out the warning signs.", "Report it if you lost money."],
          words: [["Pension advance", "an offer to pay you a lump sum now in exchange for your future pension or benefit payments, often at a very high cost."], ["Scam", "a trick to steal money or information."]],
          slides: [
            { title: "Common traps", bullets: ["Pension advance offers", "Fees to file or \"increase\" a VA claim", "Fake job offers and fake VA calls"] },
            { title: "Warning signs", bullets: ["They rush you", "Upfront fee, gift cards or wire transfer", "They ask for a code sent to your phone"] },
            { title: "What to do", bullets: ["Stop. Do not pay or share", "Call back on a number you found yourself", "Ask AI to point out warning signs"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Write a short example of a scam text offering to \"increase your VA rating for a fee\". Ask an AI assistant to list its warning signs. Then write what you would do if you got it.",
          youCanNow: "spot the warning signs of money scams aimed at veterans and respond safely."
        }
      ],
      check: {
        title: "Knowledge Check 1: Money after service",
        questions: [
          { q: "Which should you type into an AI when asking for budget help?", options: ["Your bank account number", "\"Rent about $1,200\"", "Your Social Security number", "Your online banking password"], answer: 1, why: "Rounded numbers give the AI what it needs without private details." },
          { q: "An AI is best used with money to:", options: ["Make final decisions for you", "Pick investments for you", "Explain, organize and build a plan you then check", "Hold your passwords"], answer: 2, why: "AI helps you understand and organize; you check decisions with official sources." },
          { q: "Why does a civilian budget need lines that a military budget may not?", options: ["Civilians pay no rent", "Taxes are lower", "AI says so", "Some allowances and covered costs change or stop after service"], answer: 3, why: "Costs like housing may have been covered or paid as allowances in service." },
          { q: "Someone offers cash now for your future pension payments. This is:", options: ["A pension advance, which the CFPB warns about", "A normal paycheck", "A VA benefit", "A tax refund"], answer: 0, why: "The CFPB warns service members and veterans about pension advance offers." },
          { q: "A caller says they are from the VA and asks for the code sent to your phone. You:", options: ["Read them the code", "Hang up and call the VA on a number you find yourself", "Give them your SSN instead", "Send a gift card"], answer: 1, why: "Real offices do not ask for that code; call back on a number you know is real." }
        ]
      }
    },
    {
      name: "Chapter 2: Goals, routine and real help",
      lessons: [
        {
          title: "Setting money and life goals",
          minutes: 5,
          goal: "Write three clear goals with a number and a date, and break one into steps with AI.",
          text: [
            "A goal works when it is specific, measurable and has a date: \"Save $1,000 for emergencies by 31 March\" beats \"save more\". The same is true for life goals: \"finish my certification course by June\" or \"run three times a week\".",
            "Write three goals: one money goal, one career or learning goal, and one health or family goal. Then ask an AI to break one into weekly steps: \"Break this goal into weekly steps: save $1,000 by 31 March. I can cut about $60 a week from eating out and subscriptions.\"",
            "The Consumer Financial Protection Bureau has free tools for service members, including a goal-setting worksheet. Use it with your AI plan."
          ],
          steps: ["Write one money goal, one career goal and one health or family goal.", "Give each a number and a date.", "Ask AI to break one goal into weekly steps.", "Put the first step on your calendar."],
          words: [["Emergency fund", "money saved for surprise costs like a car repair."], ["Measurable", "you can count it, so you know when it is done."]],
          slides: [
            { title: "A goal that works", bullets: ["Specific", "Measurable: a number", "A date"] },
            { title: "Three goals", bullets: ["Money", "Career or learning", "Health or family"] },
            { title: "Break it down", bullets: ["Ask AI for weekly steps", "Put step one on your calendar", "CFPB has a free goal-setting worksheet"] }
          ],
          sources: [{ name: "Consumer Financial Protection Bureau: Military financial lifecycle (goal-setting worksheet)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Write your three goals with a number and a date. Ask an AI assistant to break your money goal into weekly steps.",
          youCanNow: "write clear goals and break one into weekly steps with AI help."
        },
        {
          title: "Building a weekly routine",
          minutes: 5,
          goal: "Build a weekly routine with three goal blocks using an AI assistant.",
          text: [
            "Military life ran on a schedule. Civilian life often does not, and many veterans say losing that structure is one of the hardest parts of transition. You can build your own.",
            "Give the AI your fixed times and your goals: \"I work 8 to 5 Monday to Friday. My goals: study for my certification 4 hours a week, exercise 3 times a week, review my budget once a week. Make a simple weekly schedule as a table.\"",
            "Keep it realistic. Leave free time and family time. Review the routine each Sunday and adjust it; a plan is a plan until the first contact, and you adapt."
          ],
          steps: ["List your fixed times: work, school, family.", "List your three goals from Lesson 4.", "Ask AI for a weekly schedule table.", "Add free time and family time.", "Review and adjust it each week."],
          words: [["Routine", "things you do at regular times each week."], ["Time block", "a set time on your calendar for one task."]],
          slides: [
            { title: "Rebuild your structure", bullets: ["Military life had a schedule", "Civilian life often does not", "You can build your own"] },
            { title: "Ask AI for a weekly table", bullets: ["Your fixed times", "Your three goal blocks", "Free and family time"] },
            { title: "Review weekly", bullets: ["Check it each Sunday", "Adjust what did not work", "Adapt, as in any plan"] }
          ],
          tryIt: "Ask an AI assistant to make your weekly schedule with three goal blocks, including one weekly budget review. Put it on your phone calendar or print it.",
          youCanNow: "build a realistic weekly routine that makes time for your goals."
        },
        {
          title: "Getting free, official money help",
          minutes: 5,
          goal: "Choose the right official source for a money question and write the question down.",
          text: [
            "Some money questions need a person or an official answer: VA benefits and pay, debts, taxes, credit problems, retirement choices, or anything legal. AI can help you write the question clearly, but it should not be the final answer.",
            "Free official help includes: the VA (va.gov) for VA benefits and payments; Military OneSource, which offers free financial counseling to service members and eligible family members (check its eligibility guide to see whether you still qualify after separation); and the Consumer Financial Protection Bureau (consumerfinance.gov) for your money rights and complaints.",
            "Investments and retirement accounts are personal decisions. This course does not recommend any. Talk to a qualified, trustworthy professional, and be careful with anyone who promises big, fast returns."
          ],
          steps: ["Write your money question in one or two sentences.", "Ask AI to help make it clear, with no private details.", "Choose the right source: VA, Military OneSource or CFPB.", "Contact them using the number or site you found yourself."],
          words: [["Financial counseling", "free or low-cost help from a trained counselor to plan and fix money problems."], ["CFPB", "Consumer Financial Protection Bureau: the U.S. agency that protects people in money matters."]],
          slides: [
            { title: "Some questions need an official answer", bullets: ["VA benefits and payments", "Debts, taxes and credit problems", "Retirement and legal questions"] },
            { title: "Free official help", bullets: ["va.gov for VA benefits", "Military OneSource financial counseling", "consumerfinance.gov for money rights"] },
            { title: "No investment tips here", bullets: ["Investments are personal decisions", "Talk to a qualified professional", "Beware of big, fast promises"] }
          ],
          sources: [
            { name: "Military OneSource: Financial counseling", url: "https://www.militaryonesource.mil/benefits/financial-counseling/" },
            { name: "Consumer Financial Protection Bureau: Military financial lifecycle", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" },
            { name: "VA: Careers and employment (VA benefits and counseling)", url: "https://www.va.gov/careers-employment/" }
          ],
          tryIt: "Final task: finish your one-page plan: your monthly budget from Lesson 2 with a pay-change line, your weekly routine with three goal blocks, and one money question with the official source you will take it to. Check it has no account numbers or private details.",
          youCanNow: "choose the right free official source for a money question and bring a clear question to it."
        }
      ],
      check: {
        title: "Knowledge Check 2: Goals, routine and real help",
        questions: [
          { q: "Which is the best goal?", options: ["\"Save more\"", "\"Be better with money\"", "\"Save $1,000 for emergencies by 31 March\"", "\"Someday buy a house\""], answer: 2, why: "It is specific, measurable and has a date." },
          { q: "Many veterans miss structure after service. What helps?", options: ["Never planning", "Letting AI run your life", "Working every hour", "Building a weekly routine and reviewing it"], answer: 3, why: "A realistic routine you review each week restores structure." },
          { q: "Your weekly routine did not work this week. You:", options: ["Review it and adjust it", "Give up on routines", "Add more hours of work", "Delete your calendar"], answer: 0, why: "Plans get adjusted as you learn what works." },
          { q: "Which source offers free financial counseling to service members?", options: ["A pop-up ad", "Military OneSource", "A pension advance company", "Any AI chatbot"], answer: 1, why: "Military OneSource offers free financial counseling to service members and eligible family members." },
          { q: "An AI suggests a specific investment. What should you do?", options: ["Buy it now", "Tell friends to buy it", "Treat it as unchecked and talk to a qualified professional", "Put your whole savings in it"], answer: 2, why: "Investments are personal decisions; AI is not a financial advisor." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Financial and Personal Success",
    questions: [
      { q: "An AI assistant can help with money by:", options: ["Holding your passwords", "Explaining terms and building a budget table", "Guaranteeing returns", "Filing your VA claim for you"], answer: 1, why: "Explaining and organizing are safe, useful jobs for AI." },
      { q: "Which is safe to type into an AI?", options: ["Your DD-214 number", "Your card number", "Your password", "\"Groceries about $450 a month\""], answer: 3, why: "Rounded numbers without account details are safe." },
      { q: "AI money answers about rules and rates should be:", options: ["Checked with an official source", "Trusted because they sound sure", "Posted online", "Ignored completely"], answer: 0, why: "AI can be wrong or out of date about rules and rates." },
      { q: "A budget is:", options: ["A loan", "A tax form", "A plan for money coming in and going out each month", "A bank account"], answer: 2, why: "A budget plans income and spending." },
      { q: "Which is a need?", options: ["Streaming subscription", "Rent", "Eating out", "New video game"], answer: 1, why: "Rent is a cost you must pay to live." },
      { q: "After leaving service, which costs might you now pay yourself?", options: ["None", "Only movie tickets", "Only gifts", "Costs once covered or paid as allowances, like housing"], answer: 3, why: "Allowances and covered costs may change or stop after service." },
      { q: "Where should you confirm your own final pay and benefits?", options: ["Your finance office, DFAS or the VA", "A social media post", "An AI guess", "A stranger's text"], answer: 0, why: "Official offices have your real numbers." },
      { q: "After the AI builds your budget table, you should:", options: ["Trust the totals", "Check the math yourself", "Send it to strangers", "Add your bank login"], answer: 1, why: "AI can make math mistakes; check with a calculator." },
      { q: "A \"pension advance\" offer is:", options: ["A VA program", "A tax refund", "A lump sum now for your future payments, often very costly", "Free money"], answer: 2, why: "The CFPB warns about these offers." },
      { q: "Someone charges an upfront fee to \"increase your VA rating\". This is:", options: ["Normal", "Required", "A VA rule", "A warning sign of a scam"], answer: 3, why: "Upfront fees and promises are common scam signs." },
      { q: "A message rushes you to pay with gift cards. You:", options: ["Stop and do not pay", "Pay fast", "Share your SSN", "Give them a code"], answer: 0, why: "Rushing and gift cards are classic scam signs." },
      { q: "Before pasting a suspicious message into AI, you should:", options: ["Add your account number", "Remove your private details", "Forward it to friends", "Reply to the sender"], answer: 1, why: "Remove private details, then ask AI to spot warning signs." },
      { q: "A good goal has:", options: ["No date", "No number", "A number and a date", "Only feelings"], answer: 2, why: "Specific, measurable and dated goals get done." },
      { q: "Which agency offers a free goal-setting worksheet for service members?", options: ["A pension advance company", "A car dealer", "A crypto app", "The Consumer Financial Protection Bureau"], answer: 3, why: "The CFPB's military money page links to a goal-setting worksheet." },
      { q: "When asking AI to break a goal into steps, include:", options: ["The goal, the date and what you can realistically put toward it", "Your bank password", "Your Social Security number", "Nothing"], answer: 0, why: "Clear details get a realistic plan." },
      { q: "A weekly routine should include:", options: ["Only work", "Goal blocks plus free and family time", "No rest", "Only screen time"], answer: 1, why: "A realistic routine balances goals and rest." },
      { q: "How often should you review your routine?", options: ["Never", "Once a year", "Each week", "Only when things go wrong"], answer: 2, why: "A weekly review lets you adjust what is not working." },
      { q: "Which is the right place for a question about your VA payments?", options: ["A pop-up ad", "A random forum", "An AI chatbot only", "The VA at va.gov"], answer: 3, why: "The VA is the official source for VA benefits." },
      { q: "Does this course recommend investments?", options: ["No; talk to a qualified professional", "Yes, crypto", "Yes, any stock", "Yes, pension advances"], answer: 0, why: "This course gives no investment advice." },
      { q: "Someone promises big, fast investment returns. You should:", options: ["Invest right away", "Be careful and check with a qualified professional", "Give them your account login", "Borrow money to invest"], answer: 1, why: "Big, fast promises are a warning sign." }
    ]
  }
};
