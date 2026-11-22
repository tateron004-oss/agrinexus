"use strict";

// Koach Learn course: Veterans (military) -> "AI Financial Technology" (on the owner's list, 27 October 2026). Written as a skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// Explains how financial technology works and its risks; it gives no investment advice (README rule 6).
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }
// Facts checked on the official pages on 27 October 2026 (fdic.gov deposit insurance; consumerfinance.gov military financial lifecycle; consumer.ftc.gov crypto scams).

module.exports = {
  id: "veterans-ai-fintech",
  category: "Veterans (military)",
  name: "AI Financial Technology",
  skills: "Explaining how fintech apps work, Knowing what is and is not insured, Checking an app before you trust it, Setting up account security, Spotting and reporting fintech scams",
  outcome: "explain how a money app uses AI, check whether it is legitimate and whether your money is insured, set up its security settings, and spot and report a fintech scam aimed at veterans.",
  about: [
    "Financial technology, or fintech, is the apps and websites people use to bank, pay, borrow, budget and invest. Most of them now use AI behind the scenes. Veterans are often targeted by scams because of steady pay and benefits, so knowing how these tools work protects you and your family.",
    "In this course you will learn how payment apps, digital banks, robo-advisors and crypto work, what deposit insurance does and does not cover, how to check an app before you trust it, how to lock down your accounts, and how to spot and report scams. These skills also help if you want a job in banking or fintech.",
    "Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course. This course explains how things work and their risks; it does not tell you what to buy or invest in. For personal money decisions, talk to a qualified, independent professional or a free military or VA financial counselor."
  ],
  finalTask: "Make a one-page Fintech Safety Card for one money app you use or are thinking about: what it does and how it uses AI, whether your money in it is FDIC-insured (and how you checked), the security settings you turned on, three scam warning signs, and where you would report a problem.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans, service members and their families who use or are thinking about money apps to bank, pay, borrow, budget or invest. Veterans are often targeted by scams because of steady pay and benefits.",
    startingPoint: "Use a smartphone and at least one money or payment app. Most do not know where an app holds their money, whether it is insured, or how the app uses AI, and few have turned on every security setting.",
    gap: "Money apps can look like banks without being banks, and scammers impersonate banks, agencies and investment offers. Learners need to check an app's legitimacy and insurance on official sources, lock down their accounts, and spot and report fintech scams before they lose money.",
    constraints: [
      "Reading level: plain words and short sentences; no finance background assumed",
      "Devices: a smartphone with the learner's own money app",
      "Privacy: no passwords, codes or full account numbers in any AI prompt or practice",
      "No investment advice: crypto and robo-advisors are explained with their risks, and decisions go to a qualified, independent professional",
      "Insurance rules and limits change, so learners check fdic.gov, the CFPB and the FTC directly"
    ],
    prerequisites: "None. \"AI for Financial and Personal Success\" is a helpful first course on budgets and scams."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the money apps on your phone", action: "identify four kinds of fintech and one way each uses AI", standard: "and name what you can do when an AI decision about your money is wrong" },
    { id: "O2", condition: "For one money app you use", action: "check whether money in the app is protected by FDIC deposit insurance", standard: "by finding its partner bank and confirming it on FDIC BankFind" },
    { id: "O3", condition: "When you hear about a robo-advisor or crypto", action: "explain how each works and list its main risks", standard: "checking the risk list against an official source such as the FTC" },
    { id: "O4", condition: "Before you put money into an app", action: "run a five-point check on the app", standard: "writing yes or no for every point" },
    { id: "O5", condition: "In one money app", action: "turn on two-step verification and payment alerts and remove unknown devices", standard: "without sharing any password or code" },
    { id: "O6", condition: "Given a message, call or offer about money", action: "identify the warning signs of a fintech scam and report it to the right place", standard: "sharing no codes and paying nothing" }
  ],
  chapters: [
    {
      name: "Chapter 1: How fintech works",
      lessons: [
        {
          objectives: ["O1"],
          title: "What fintech is and where AI fits",
          minutes: 4,
          goal: "Name four kinds of fintech and one way each uses AI.",
          text: [
            "Fintech means financial technology: apps and websites for money. Common kinds are mobile banking, payment apps for sending money to people, budgeting apps, online lenders and investing apps.",
            "AI is used behind the scenes: to spot fraud (a card used in two countries in an hour), to answer questions in chatbots, to sort your spending into categories, and to help decide who gets a loan.",
            "AI decisions can be wrong. A real purchase can be blocked, or a loan turned down because of bad data. You have rights to ask why and to dispute mistakes; the Consumer Financial Protection Bureau (CFPB) explains them."
          ],
          words: [["Fintech", "financial technology: apps and websites for banking, paying, borrowing, budgeting and investing."], ["Fraud detection", "tools that watch for payments that look stolen or fake."], ["Chatbot", "an AI program that answers questions by chat."]],
          slides: [
            { title: "Fintech = money apps", bullets: ["Mobile banking and payment apps", "Budgeting apps and online lenders", "Investing apps"] },
            { title: "AI behind the scenes", bullets: ["Spots fraud", "Answers questions in chatbots", "Sorts spending and helps decide loans"] },
            { title: "AI can be wrong", bullets: ["Real purchases blocked", "Loans turned down on bad data", "You can ask why and dispute mistakes"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (service members and veterans)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "List every money app on your phone. Next to each, write which kind of fintech it is and one way it might use AI.",
          youCanNow: "describe the main kinds of fintech and how they use AI.",
          quickCheck: [
            { objective: "O1", q: "Which is a kind of fintech?", options: ["A paper checkbook", "A cash jar at home", "A payment app on your phone", "A printed bank statement"], answer: 2, why: "Fintech means apps and websites for money, such as payment, banking, budgeting and investing apps." },
            { objective: "O1", q: "Your money app's AI flags your normal rent payment as fraud and blocks it. What do you do?", options: ["Contact the company, ask why and dispute the mistake", "Delete the app and never pay rent online", "Share your password so they can fix it", "Wait and hope it clears"], answer: 0, why: "When an AI decision about your money is wrong, you can ask why and dispute it." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Where your money really sits: banks, apps and insurance",
          minutes: 5,
          goal: "Check whether money in an app is protected by FDIC deposit insurance.",
          text: [
            "FDIC deposit insurance protects money in deposit accounts (checking, savings, money market deposit accounts and CDs) at an FDIC-insured bank. When we checked fdic.gov in October 2026, the standard amount was at least $250,000 per depositor at each insured bank.",
            "FDIC insurance does not cover stocks, bonds, mutual funds, annuities, life insurance or crypto assets. Many payment apps are not banks. A balance left in the app may not be insured unless the app places it in an insured bank account for you.",
            "To check: read the app's own help page for the name of its partner bank, then look that bank up with the FDIC's BankFind tool on fdic.gov."
          ],
          steps: ["Open the app's help or legal page and look for \"FDIC\" and a bank name.", "Look up that bank name with FDIC BankFind on fdic.gov.", "Check whether your type of money (deposit, stock, crypto) is covered.", "If you are unsure, move spending money to an insured bank account."],
          words: [["FDIC", "Federal Deposit Insurance Corporation: protects deposits at insured banks if the bank fails."], ["Deposit account", "a checking, savings, money market deposit account or CD at a bank."], ["BankFind", "the FDIC's free tool to check whether a bank is FDIC-insured."]],
          slides: [
            { title: "FDIC covers deposits", bullets: ["Checking, savings, money market deposits, CDs", "At least $250,000 per depositor, each bank (Oct 2026)"] },
            { title: "FDIC does NOT cover", bullets: ["Stocks, bonds and mutual funds", "Annuities and life insurance", "Crypto assets"] },
            { title: "Check your app", bullets: ["Find its partner bank in the help pages", "Look it up with FDIC BankFind", "Unsure? Keep money in an insured bank"] }
          ],
          sources: [{ name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Pick one money app you use. Find its partner bank in the app's help pages and check that bank on FDIC BankFind. Write down whether your balance is insured.",
          youCanNow: "check whether money in an app is protected by FDIC deposit insurance.",
          quickCheck: [
            { objective: "O2", q: "What is FDIC BankFind?", options: ["A loan app", "A crypto exchange", "A credit score tool", "The FDIC's tool to check whether a bank is insured"], answer: 3, why: "BankFind lets you confirm that a bank is FDIC-insured." },
            { objective: "O2", q: "A payment app says your money is \"safe\". How do you check whether it is insured?", options: ["Trust the app's ad", "Find its partner bank in the help pages and look it up on BankFind", "Ask the AI assistant", "Assume all apps are banks"], answer: 1, why: "Insurance depends on whether the app holds your money at an insured bank, which you confirm on BankFind." }
          ]
        },
        {
          objectives: ["O3"],
          title: "How robo-advisors and crypto work, and their risks",
          minutes: 5,
          goal: "Explain how a robo-advisor and crypto work and name their main risks.",
          text: [
            "A robo-advisor is an app that uses computer rules to put your money into investments based on answers you give, such as your goals and how long until you need the money. It charges a fee. Investments can lose value, and they are not FDIC-insured.",
            "Crypto (cryptocurrency) is digital money recorded on a shared online ledger called a blockchain. Prices can rise and fall sharply. The FTC warns that crypto payments usually cannot be reversed and crypto is not insured by the government the way bank deposits are.",
            "This course does not tell you whether to use either one. Before any investing decision, learn the fees and risks on official pages and talk to a qualified, independent professional or a free military or VA financial counselor."
          ],
          words: [["Robo-advisor", "an app that invests money using computer rules based on your answers."], ["Cryptocurrency", "digital money recorded on a blockchain."], ["Blockchain", "a shared online record of transactions that is very hard to change."], ["Volatile", "a price that can go up and down a lot, fast."]],
          slides: [
            { title: "Robo-advisors", bullets: ["Invest using computer rules and your answers", "Charge a fee", "Can lose value; not FDIC-insured"] },
            { title: "Crypto", bullets: ["Digital money on a blockchain", "Prices can swing sharply", "Payments usually cannot be reversed"] },
            { title: "Before any decision", bullets: ["Learn fees and risks on official pages", "Talk to a qualified, independent professional", "This course gives no investment advice"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "FDIC: Deposit insurance", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Ask an AI assistant: \"Explain how a robo-advisor works and how crypto works, in simple words, with the main risks of each.\" Check its risk list against the FTC crypto page and write down anything it missed.",
          youCanNow: "explain how robo-advisors and crypto work and name their main risks.",
          quickCheck: [
            { objective: "O3", q: "How does a robo-advisor work?", options: ["It invests using computer rules based on your answers", "A person at the bank picks stocks for free", "It guarantees your money grows", "It is the same as a savings account"], answer: 0, why: "A robo-advisor uses computer rules and your answers to invest; it carries market risk." },
            { objective: "O3", q: "A friend says crypto is \"insured like a bank account\". What do you tell them?", options: ["That is right", "Only on weekends", "Crypto is not insured like bank deposits and prices can swing sharply", "Crypto payments can always be reversed"], answer: 2, why: "Crypto is not insured like bank deposits, its prices can swing, and payments usually cannot be reversed." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How fintech works",
        questions: [
          { objective: "O1", q: "Which is an example of AI in fintech?", options: ["A bank's front door", "Printing paper checks", "Spotting a card used in two countries in an hour", "A paper receipt"], answer: 2, why: "Fraud detection is a common AI use." },
          { objective: "O1", q: "An AI wrongly blocks your real purchase. What can you do?", options: ["Ask why and dispute the mistake", "Nothing, AI is final", "Close all your accounts", "Post your card number online"], answer: 0, why: "You have the right to question and dispute mistakes." },
          { objective: "O2", q: "Per fdic.gov in October 2026, which is FDIC-insured at an insured bank?", options: ["A mutual fund", "Crypto", "Stocks", "A savings account"], answer: 3, why: "Deposit accounts like savings are covered." },
          { objective: "O2", q: "How do you check an app's partner bank is FDIC-insured?", options: ["Trust the app's ads", "Look the bank up with FDIC BankFind", "Ask a stranger", "Check social media"], answer: 1, why: "BankFind is the FDIC's official tool." },
          { objective: "O3", q: "What does the FTC say about crypto payments?", options: ["They are always insured", "They usually cannot be reversed", "Banks guarantee them", "They are risk-free"], answer: 1, why: "The FTC warns crypto payments are usually irreversible." }
        ]
      }
    },
    {
      name: "Chapter 2: Using fintech safely",
      lessons: [
        {
          objectives: ["O4"],
          title: "Checking an app before you trust it",
          minutes: 5,
          goal: "Run a five-point check on a money app before you put money in it.",
          text: [
            "Scammers build fake money apps and websites that look real. Before you download or deposit, check who runs the app and whether it is real.",
            "Get the app only from the official app store and check the developer name matches the real company. Read the company's own website for its full name and its partner bank. Check FDIC BankFind for the bank. Search the company name plus \"complaints\" and look in the CFPB complaint information.",
            "You can ask an AI assistant to explain what an app's terms mean, but do not trust AI to tell you an app is safe. Check the official sources yourself."
          ],
          steps: ["Download only from the official app store.", "Check the developer name matches the real company.", "Find the company's full name and partner bank on its own website.", "Check the bank on FDIC BankFind.", "Search for complaints, including on consumerfinance.gov."],
          words: [["Developer", "the company that made an app, shown in the app store listing."], ["Terms of service", "the rules and fees you agree to when you use an app."]],
          slides: [
            { title: "Fake apps look real", bullets: ["Check before you download or deposit"] },
            { title: "Five-point check", bullets: ["Official app store, right developer", "Company's full name and partner bank", "FDIC BankFind for the bank", "Search for complaints"] },
            { title: "AI can explain, not approve", bullets: ["Ask AI what the terms mean", "Check safety on official sources yourself"] }
          ],
          sources: [{ name: "CFPB: Military financial lifecycle (complaints and rights)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }, { name: "FDIC: Deposit insurance (BankFind)", url: "https://www.fdic.gov/resources/deposit-insurance/" }],
          tryIt: "Run the five-point check on one money app you use or are thinking about. Write a yes or no next to each point.",
          youCanNow: "check whether a money app is real before you trust it with money.",
          quickCheck: [
            { objective: "O4", q: "What is the first point of the five-point app check?", options: ["Read online reviews only", "Download only from the official app store, from the right developer", "Check how pretty the app looks", "Ask the app's chat bot if it is safe"], answer: 1, why: "Fake apps copy real ones, so you start by getting the real app from the official store." },
            { objective: "O4", q: "An AI assistant says a new money app is \"definitely safe\". What do you do?", options: ["Put all your savings in it", "Share the app with friends", "Skip the other checks", "Run the five-point check yourself on official sources"], answer: 3, why: "AI cannot confirm an app is safe for sure; you check official sources yourself." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Locking down your money accounts",
          minutes: 5,
          goal: "Turn on the main security settings in a money app.",
          text: [
            "Treat your money accounts like a secure area: layers of protection. Use a strong, unique password for each money account, and turn on two-step verification so a code or app is needed to log in.",
            "Turn on alerts so the app tells you about every payment, login or change to your details. Fast alerts let you stop fraud early.",
            "Never share a login code with anyone, even someone who says they are from the bank, VA or the app. Real companies do not ask for it. Never type passwords or full account numbers into an AI assistant."
          ],
          steps: ["Set a strong, unique password.", "Turn on two-step verification in the app's security settings.", "Turn on alerts for payments, logins and changes.", "Check your linked devices and remove any you do not know.", "Promise yourself: never share a login code."],
          words: [["Two-step verification", "a second check, like a code or app approval, needed to log in."], ["Alert", "a message the app sends when something happens in your account."]],
          slides: [
            { title: "Layers of protection", bullets: ["Strong, unique password", "Two-step verification on"] },
            { title: "Turn on alerts", bullets: ["Every payment", "Every login", "Every change to your details"] },
            { title: "Never share", bullets: ["Login codes, with anyone", "Passwords or account numbers with AI tools"] }
          ],
          tryIt: "Open the security settings in one money app. Turn on two-step verification and payment alerts, and remove any device you do not recognize.",
          youCanNow: "set up the main security settings that protect a money account.",
          quickCheck: [
            { objective: "O5", q: "Why turn on payment alerts?", options: ["To get advertising", "To share your balance with friends", "To spot and stop fraud early", "To make the app faster"], answer: 2, why: "Alerts tell you about each payment so you can catch fraud quickly." },
            { objective: "O5", q: "In your app's security settings you see a device you do not recognize. What do you do?", options: ["Remove it and change your password", "Leave it; it is probably fine", "Turn off two-step verification", "Post a screenshot online"], answer: 0, why: "An unknown device could be someone else in your account, so you remove it and secure the account." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Spotting and reporting fintech scams",
          minutes: 5,
          goal: "Spot the warning signs of a fintech scam and know where to report it.",
          text: [
            "The FTC warns that only scammers demand payment in crypto, only scammers guarantee profits or big returns, and a job that asks you to pay a crypto fee upfront is a scam. Romance contacts who offer investing tips are also a warning sign.",
            "Scammers also pretend to be the bank, a government agency or the VA and say your money is at risk. AI lets them write perfect messages and even copy voices. Do not click their links or call back numbers they give you; use the number on the official website or your card.",
            "To report: file a complaint about a financial product with the CFPB at consumerfinance.gov or by phone, and report fraud to the FTC at ReportFraud.ftc.gov. Tell your bank right away if money left your account."
          ],
          steps: ["Watch for: crypto payment demands, guaranteed returns, upfront fees, urgent \"your money is at risk\" calls.", "Stop. Do not click, pay or share codes.", "Call the company on a number from its official website or your card.", "Tell your bank at once if money moved.", "Report to the CFPB or ReportFraud.ftc.gov."],
          words: [["Impostor scam", "when a scammer pretends to be a company, agency or person you trust."], ["Guaranteed returns", "a promise of profit with no risk; real investments never promise this."]],
          slides: [
            { title: "FTC red flags", bullets: ["Payment demanded in crypto", "Guaranteed profits or big returns", "Upfront crypto fee for a job"] },
            { title: "Impostors use AI", bullets: ["Perfect messages and copied voices", "Don't click their links or call their numbers", "Use the official number"] },
            { title: "Report it", bullets: ["Tell your bank at once", "CFPB complaint: consumerfinance.gov", "FTC: ReportFraud.ftc.gov"] }
          ],
          sources: [{ name: "FTC: What to know about cryptocurrency and scams", url: "https://consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams" }, { name: "CFPB: Military financial lifecycle (submit a complaint)", url: "https://www.consumerfinance.gov/consumer-tools/military-financial-lifecycle/" }],
          tryIt: "Final task: make your one-page Fintech Safety Card for one app: what it does and how it uses AI, whether your money is insured and how you checked, the security settings you turned on, three scam warning signs, and where you would report a problem.",
          youCanNow: "understand how a money app works, check and secure it, and spot and report fintech scams.",
          quickCheck: [
            { objective: "O6", q: "Which is a fintech scam warning sign?", options: ["A monthly statement you expected", "A bank branch's posted hours", "A receipt for something you bought", "Pressure to move your money fast to a \"safe\" account"], answer: 3, why: "Rushing you to move money to a \"safe\" account is a classic impostor scam." },
            { objective: "O6", q: "You get a text from \"your bank\" with a link to fix a problem. What do you do?", options: ["Tap the link and log in", "Do not tap it; call the bank on the number on its official website or your card", "Reply with your account number", "Forward it to friends"], answer: 1, why: "You contact the company yourself using a number you trust, not one in the message." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using fintech safely",
        questions: [
          { objective: "O4", q: "Where should you download a money app?", options: ["Any website", "A link in a text from a stranger", "A pop-up ad", "The official app store, from the real company"], answer: 3, why: "Official stores and the right developer reduce fake apps." },
          { objective: "O4", q: "Can an AI assistant tell you for sure that an app is safe?", options: ["No; check official sources yourself", "Yes, always", "Only on weekends", "Only for crypto apps"], answer: 0, why: "AI can explain terms but cannot verify safety." },
          { objective: "O5", q: "What does two-step verification do?", options: ["Removes your password", "Doubles your money", "Requires a second check, like a code, to log in", "Shares your account"], answer: 2, why: "A second check blocks people who steal your password." },
          { objective: "O6", q: "Someone says they are from your bank and asks for the login code sent to your phone. You:", options: ["Post it online", "Read it to them", "Text it to them", "Never share it; call the bank on the official number"], answer: 3, why: "Real companies never ask for your login code." },
          { objective: "O6", q: "According to the FTC, which is a scam sign?", options: ["A receipt from a store", "A monthly bank statement", "A promise of guaranteed big returns", "An alert you set up"], answer: 2, why: "Only scammers guarantee profits." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Financial Technology",
    questions: [
      { objective: "O1", q: "Fintech means:", options: ["Fine technology", "Financial technology: apps and websites for money", "Fitness tech", "A type of bank vault"], answer: 1, why: "It covers banking, paying, borrowing, budgeting and investing tech." },
      { objective: "O1", q: "Which is a common AI use in money apps?", options: ["Sorting your spending into categories", "Printing cash", "Opening bank doors", "Mailing statements"], answer: 0, why: "AI categorizes spending in budgeting apps." },
      { objective: "O1", q: "A loan is turned down because of wrong data. You can:", options: ["Pay a stranger to fix it", "Do nothing", "Ask why and dispute the mistake", "Give your password to a chatbot"], answer: 2, why: "You have rights to dispute errors." },
      { objective: "O1", q: "Which agency explains your rights with financial products and takes complaints?", options: ["The Consumer Financial Protection Bureau (CFPB)", "The Postal Service", "NASA", "The National Park Service"], answer: 0, why: "The CFPB handles consumer finance complaints." },
      { objective: "O2", q: "FDIC insurance protects:", options: ["Any app balance", "All crypto", "All stocks", "Deposits at FDIC-insured banks"], answer: 3, why: "It covers deposit accounts at insured banks." },
      { objective: "O2", q: "Per fdic.gov in October 2026, the standard insured amount is at least:", options: ["$2,500", "$250,000 per depositor, per insured bank", "$25,000", "Unlimited"], answer: 1, why: "The FDIC page states at least $250,000 at each insured bank." },
      { objective: "O2", q: "Is a balance in a payment app always FDIC-insured?", options: ["Yes, always", "No; it depends on whether the app holds it at an insured bank", "Only on Fridays", "Only if it is crypto"], answer: 1, why: "Many payment apps are not banks." },
      { objective: "O2", q: "BankFind is:", options: ["A job board", "A crypto wallet", "A loan app", "The FDIC's tool to check whether a bank is insured"], answer: 3, why: "BankFind is on fdic.gov." },
      { objective: "O3", q: "A robo-advisor is:", options: ["An app that invests using computer rules based on your answers", "A bank robot that hands out cash", "A free government loan", "An insurance policy"], answer: 0, why: "It automates investing for a fee." },
      { objective: "O3", q: "Which is true about crypto?", options: ["The FDIC insures it", "It is guaranteed to rise", "Prices can swing sharply and it is not insured like bank deposits", "Payments are easy to reverse"], answer: 2, why: "Crypto is volatile and not deposit-insured." },
      { objective: "O3", q: "Before any investing decision, this course says to:", options: ["Invest everything at once", "Do what an AI says", "Follow a social media tip", "Learn fees and risks and talk to a qualified, independent professional"], answer: 3, why: "The course explains, it does not advise." },
      { objective: "O4", q: "The first point of the app check is:", options: ["Share it with friends", "Deposit money first", "Download only from the official app store, from the right developer", "Turn off alerts"], answer: 2, why: "Fake apps are common outside official stores." },
      { objective: "O4", q: "Where do you find an app's partner bank?", options: ["A random ad", "The company's own website or help pages", "A text message", "An AI guess"], answer: 1, why: "Official company pages name the bank." },
      { objective: "O5", q: "Which is a strong security step?", options: ["Turning on two-step verification", "Using the same password everywhere", "Sharing codes with support", "Turning off alerts"], answer: 0, why: "A second step blocks stolen-password logins." },
      { objective: "O5", q: "Why turn on payment alerts?", options: ["To slow your phone", "To get more ads", "To spot and stop fraud early", "To share your balance"], answer: 2, why: "Fast alerts let you act quickly." },
      { objective: "O5", q: "What should you NEVER type into an AI assistant?", options: ["Your password or full account number", "\"Explain FDIC insurance\"", "\"What is a robo-advisor?\"", "\"List scam warning signs\""], answer: 0, why: "Private financial details must stay out of AI tools." },
      { objective: "O6", q: "A caller says your money is at risk and you must move it to a \"safe\" crypto account. This is:", options: ["A security update", "Normal bank practice", "A VA benefit", "An impostor scam"], answer: 3, why: "The FTC warns these are scams." },
      { objective: "O6", q: "A job asks you to pay a crypto fee upfront. This is:", options: ["A normal hiring step", "A scam, per the FTC", "A training cost VA pays", "A tax"], answer: 1, why: "The FTC says upfront crypto fees for jobs are scams." },
      { objective: "O6", q: "How should you call back a company about a suspicious message?", options: ["Use the number in the message", "Use the number on its official website or your card", "Reply to the text", "Ask the caller for a number"], answer: 1, why: "Scammers give fake numbers." },
      { objective: "O6", q: "Where can you report fraud to the FTC?", options: ["An AI chatbot", "A social media comment", "The scammer's website", "ReportFraud.ftc.gov"], answer: 3, why: "ReportFraud.ftc.gov is the FTC's reporting site." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      6,
      7,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "What it does and how it uses AI",
        objective: "O1",
        notYet: "The card does not say what the app does or how it uses AI.",
        meets: "The card names the kind of fintech and one way the app uses AI.",
        exceeds: "It also says what to do if the app's AI makes a wrong decision."
      },
      {
        name: "Insurance checked",
        objective: "O2",
        notYet: "Says the money is insured with no check, or guesses.",
        meets: "Names the partner bank and whether it is FDIC-insured, checked on BankFind.",
        exceeds: "Notes which parts of the balance are or are not covered and where that was confirmed."
      },
      {
        name: "Security settings",
        objective: "O5",
        notYet: "No security settings turned on.",
        meets: "Two-step verification and payment alerts on, and unknown devices removed.",
        exceeds: "Also lists one more setting turned on, such as a card lock or spending limit."
      },
      {
        name: "Scam signs and reporting",
        objective: "O6",
        notYet: "Fewer than three warning signs, or no place to report.",
        meets: "Three scam warning signs and where to report a problem.",
        exceeds: "Includes how to call the company back on a trusted number."
      },
      {
        name: "App checked",
        objective: "O4",
        notYet: "The app was not checked before use.",
        meets: "The five-point check was done with yes or no for each point.",
        exceeds: "The learner explains what they would do if any point was a no."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report turning on two-step verification and alerts in their money apps within 30 days (follow-up survey)",
      "Learners who report spotting and avoiding a fintech scam",
      "Learners who start another Koach Learn money or safety course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with the learner's own money app",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "The free FDIC BankFind, CFPB and FTC websites",
      "Paper or a document for the one-page Fintech Safety Card",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Learners change settings on their own phones; never ask to see balances, passwords or codes.",
      "Do not recommend apps, investments or crypto; send investing questions to a qualified, independent professional.",
      "Show a made-up scam text in class, then practice calling back on an official number.",
      "Score the Fintech Safety Card with the rubric, and give feedback on one Not yet row at a time.",
      "Family members may join, since scams often target spouses and parents too."
    ]
  }
};
