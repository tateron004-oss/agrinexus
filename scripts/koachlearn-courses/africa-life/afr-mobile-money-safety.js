"use strict";

// Koach Learn course: Africa: Life and Work -> "Using Mobile Money Safely (M-Pesa, MTN MoMo, Orange Money, Wave)" (Africa life brief, 30 October 2026).
// Everyday mobile money for people across Africa: how a wallet, PIN and agent work, sending and paying with the name check, agents and
// fees, the common scams (fake reversal, "wrong number" sends, PIN and code requests, fake prizes and fake staff), what to do after a
// wrong send or fraud, and a one-page personal safety plan. Fees and help numbers change: learners read them on their own provider's
// official channels. No investment advice. Figures are examples only.

const SAF_FRAUD = { name: "The Star, Kenya (27 March 2025): common fraud schemes targeting M-Pesa users; report on 333, Zuri or the app; Safaricom never asks for your PIN", url: "https://www.the-star.co.ke/news/infographics/2025-03-27-common-fraud-schemes-targeting-m-pesa-users" };
const SAF_REV = { name: "Citizen Digital, Kenya: how to reverse an M-Pesa payment (forward the confirmation SMS to 456; wrong till or Paybill: call 100)", url: "https://citizen.digital/news/how-to-easily-reverse-money-on-m-pesa-n295204" };
const MTN_GH = { name: "Ghana News Agency (October 2026): MTN cautions customers not to share their MoMo PIN", url: "https://gna.org.gh/2026/10/mtn-cautions-customers-not-to-share-momo-pin/" };
const CBK = { name: "Central Bank of Kenya (regulates mobile money and lists licensed payment service providers)", url: "https://www.centralbank.go.ke" };
const CBN_CP = { name: "Central Bank of Nigeria: consumer protection", url: "https://www.cbn.gov.ng/supervision/cpd.html" };
const BOG = { name: "Bank of Ghana: complaints procedures and the list of licensed institutions", url: "https://www.bog.gov.gh" };
const BCEAO_EME = { name: "BCEAO, Central Bank of West African States: electronic money institutions (XOF countries such as Senegal and Côte d'Ivoire)", url: "https://www.bceao.int/fr/content/monnaie-electronique" };

module.exports = {
  id: "afr-mobile-money-safety",
  category: "Africa: Life and Work",
  name: "Using Mobile Money Safely (M-Pesa, MTN MoMo, Orange Money, Wave)",
  skills: "Protecting your PIN and phone, Checking the name before you send, Using agents and fees safely, Spotting mobile money scams, Acting fast after a wrong send or fraud, Writing a personal safety plan",
  outcome: "send, receive and pay with mobile money safely: protect your PIN, check the name before you confirm, spot the common scams, act fast after a wrong send or fraud, and keep a one-page safety plan for you and your family.",
  about: [
    "Mobile money is how millions of people across Africa send, save and pay every day: M-Pesa in Kenya, MTN MoMo in Ghana and Nigeria, Orange Money in Côte d'Ivoire and Cameroon, Wave in Senegal, and mobile wallets in Egypt and Morocco. It is fast and useful, and scammers know it too.",
    "This course is for traders, parents, students, workers and anyone who uses a basic phone or a smartphone for money. You will learn how your wallet, PIN and agent work, how to check every payment before you confirm, the tricks scammers use, and exactly what to do if money goes to the wrong person.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task on your own phone, without ever typing your real PIN for practice. There is a short check after each lesson and chapter, and a 20-question quiz at the end. Fees, limits and help numbers change, so you will learn to read them on your own provider's official channels."
  ],
  finalTask: "Write a one-page mobile money safety plan for yourself or your family: your PIN and phone-lock rules, how you check a name before you send, your provider's official help and fraud channels (copied from its official website, app or SIM pack), the six scam warning signs, what you do in the first hour after a wrong send or fraud, and a monthly check of your statement.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young people across Africa, in towns and villages: market traders, boda boda and okada riders, parents, students, workers and small business owners who send, receive and pay with mobile money. Examples from Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Egypt and Morocco.",
    startingPoint: "Most already send and receive money with a USSD menu (*xxx#) or an app. Many have never read the fee table, do not know how to reverse a wrong send, share a phone or PIN with family, or have been targeted by a scam call or SMS.",
    gap: "People lose money to fake reversal messages, PIN and code requests, fake agents and \"wrong number\" tricks, and many do not know the fast, official steps after a wrong send. Learners need habits and a written plan that protect their money and their family's.",
    constraints: [
      "Reading level: plain words and short sentences; translated into French and Arabic",
      "Devices: many use a basic phone with USSD menus; data is costly",
      "Time: 4 to 6 minute lessons that fit around work and market days",
      "Fees, limits and help numbers differ by country and change: always read them on the provider's official channels",
      "Never type a real PIN, password or one-time code in any practice task"
    ],
    prerequisites: "A mobile money account, or a family member's phone to look at the menu together (without the PIN)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using your own phone and mobile money account", action: "set a PIN that is hard to guess, lock your phone and keep the PIN to yourself", standard: "sharing the PIN with no one, not even family or someone who says they are staff" },
    { id: "O2", condition: "When you send money, pay a merchant or use an agent", action: "check the recipient's name, the number and the amount on the confirmation screen before you enter your PIN, and keep the confirmation message", standard: "every time, and stopping if anything does not match" },
    { id: "O3", condition: "Given six calls or messages about mobile money", action: "identify which ones are scams and name the warning sign in each", standard: "getting at least 5 of 6 right" },
    { id: "O4", condition: "After money goes to the wrong number or you suspect fraud", action: "report it through your provider's official channels and follow the reversal steps", standard: "the same day, keeping the original confirmation message and using no number given by a stranger" },
    { id: "O5", condition: "Using what you learned and your provider's official website or SIM pack", action: "write a one-page mobile money safety plan for you or your family", standard: "covering PIN rules, the name check, official help channels, scam signs, first-hour steps and a monthly statement check" }
  ],
  chapters: [
    {
      name: "Chapter 1: How mobile money works, and using it safely",
      lessons: [
        {
          title: "Your wallet, your PIN and your phone",
          objectives: ["O1"],
          minutes: 5,
          goal: "Set a strong PIN, lock your phone and name the people who must never get your PIN.",
          text: [
            "A mobile money wallet is an account linked to your SIM card. You put cash in at an agent, send it, pay with it, and take it out again. Your PIN (personal identification number) is the key to the wallet. Anyone who has your phone and your PIN can empty it.",
            "Choose a PIN that is hard to guess: not your birth year, not 1234 or 0000, not the last digits of your phone number. Cover the keypad when you type it at an agent or in a crowded matatu or market. Lock the phone itself with a PIN, pattern or fingerprint, and if your phone allows it, set a SIM PIN too, so a thief cannot put your SIM in another phone.",
            "Never share your mobile money PIN or a one-time code with anyone: not a friend, not a child, not an agent, and not a caller who says they are from Safaricom, MTN, Orange or Wave. The providers say clearly that their staff will never ask for your PIN. If someone asks, it is a scam.",
            "If your phone is lost or stolen, or your line suddenly stops working, call your provider at once from another phone to block the SIM and wallet. A line that dies without reason can be a SIM swap, where a criminal moves your number to their SIM."
          ],
          steps: ["Change your PIN from the menu if it is easy to guess (birth year, 1234, repeated numbers).", "Set a screen lock on your phone.", "Turn on a SIM PIN if your phone offers it.", "Cover the keypad when you type your PIN.", "Write your provider's official help number on paper, not in a message from a stranger.", "If the phone is lost or the line dies, call the provider from another phone to block it."],
          words: [["Wallet", "your mobile money account, linked to your SIM card."], ["PIN", "personal identification number: the secret number that lets you use your wallet."], ["SIM swap", "when your phone number is moved to a new SIM card; criminals try this to take over your wallet."]],
          slides: [
            { title: "Your PIN is the key", bullets: ["Phone + PIN = access to all your money", "Not your birth year, 1234 or 0000", "Cover the keypad when you type it"] },
            { title: "Lock the phone and the SIM", bullets: ["Screen lock: PIN, pattern or fingerprint", "SIM PIN if your phone offers it", "Thieves then cannot use your SIM elsewhere"] },
            { title: "Never share it", bullets: ["Not friends, children, agents or callers", "Real staff never ask for your PIN", "Anyone who asks is a scammer"] },
            { title: "Lost phone or dead line?", bullets: ["Call the provider from another phone at once", "Block the SIM and the wallet", "A line that dies for no reason can be a SIM swap"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Look at your own PIN in your head (do not write it down or tell anyone). Is it your birth year, 1234 or a repeated number? If yes, change it from the menu today. Then check that your phone has a screen lock.",
          youCanNow: "set a PIN that is hard to guess, lock your phone and SIM, and refuse anyone who asks for your PIN.",
          quickCheck: [
            { objective: "O1", q: "Which PIN is safest?", options: ["1990, your birth year", "1234", "A number with no link to your birthday or phone number", "The last four digits of your phone number"], answer: 2, why: "A PIN with no link to facts about you is hard for others to guess." },
            { objective: "O1", q: "A caller says he is from your mobile money provider and needs your PIN to fix your account. What do you do?", options: ["Hang up; real staff never ask for your PIN", "Give the PIN, then change it later", "Give only the first two digits", "Send him the code from your phone instead"], answer: 0, why: "Providers never ask for your PIN or codes; anyone who does is a scammer." }
          ]
        },
        {
          title: "Sending and paying: check the name before the PIN",
          objectives: ["O2"],
          minutes: 5,
          goal: "Check the name, number and amount on the confirmation screen before you enter your PIN.",
          text: [
            "Most mistakes and many scams can be stopped in one place: the confirmation screen. Before you type your PIN, your phone shows who you are paying and how much. In Kenya, M-Pesa shows the name for a number, till or Paybill; other providers show a name or merchant name too.",
            "Read it slowly. Is it the right person or shop? Is the amount right? 5,000 is not 50,000. When paying a shop, check the till, merchant or Paybill number from a sign or receipt in the shop, not from a number someone sends you.",
            "If the name is wrong or strange, cancel. Do not enter your PIN \"to see what happens\". After you pay, keep the confirmation message (SMS) until you are sure the person or shop got the money. It is your proof.",
            "Example: Ama in Kumasi pays a supplier GHS 600 with MTN MoMo. The screen shows a different name from the supplier's. She cancels, calls the supplier on the number she already has, and finds she typed one digit wrong."
          ],
          steps: ["Type the number, merchant code or till.", "Type the amount and read it twice.", "On the confirmation screen, read the name, number and amount.", "If anything does not match, cancel.", "If it all matches, cover the keypad and type your PIN.", "Keep the confirmation SMS as proof."],
          words: [["Confirmation screen", "the screen that shows who you are paying and how much, before you enter your PIN."], ["Till / merchant code / Paybill", "numbers that shops and companies use to receive payments."], ["Confirmation SMS", "the message your provider sends after a payment; your proof."]],
          slides: [
            { title: "Stop at the confirmation screen", bullets: ["It shows the name, number and amount", "Read it slowly, before the PIN", "5,000 is not 50,000"] },
            { title: "Paying a shop", bullets: ["Take the till or merchant code from the shop's sign", "Not from a number someone sends you", "Check the shop name on screen"] },
            { title: "Anything wrong? Cancel", bullets: ["Do not enter the PIN to see what happens", "Call the person on a number you already have", "Then try again carefully"] },
            { title: "Keep your proof", bullets: ["Save the confirmation SMS", "Until the money is safely received", "You need it for any reversal"] }
          ],
          sources: [SAF_REV],
          tryIt: "Next time you send money or pay, stop on the confirmation screen and say the name, number and amount out loud before you type your PIN. Then find the confirmation SMS and do not delete it.",
          youCanNow: "check the name, number and amount before you enter your PIN, and keep the confirmation message as proof.",
          quickCheck: [
            { objective: "O2", q: "The confirmation screen shows a name you do not know. What do you do?", options: ["Enter the PIN; names are often wrong", "Enter the PIN and ask later", "Send a smaller amount first", "Cancel and check the number with the person"], answer: 3, why: "A strange name means a wrong number or a trick; cancel before the PIN." },
            { objective: "O2", q: "Why keep the confirmation SMS after paying?", options: ["It is your proof if something goes wrong", "It earns you points", "The law says delete it", "It makes the next payment cheaper"], answer: 0, why: "The confirmation message proves the payment and is needed for a reversal or complaint." }
          ]
        },
        {
          title: "Agents, fees and your records",
          objectives: ["O2", "O5"],
          minutes: 5,
          goal: "Read the fee for a transaction from your provider's official tariff and do a safe cash-out at an agent.",
          text: [
            "An agent is a shop where you put cash into your wallet (cash in, or deposit) or take cash out (withdraw). Use a registered agent with the provider's sign and agent number. Do the transaction yourself on your own phone when you can, and count the cash before you leave.",
            "Fees depend on the provider, the country, the amount and the type of transaction. Do not guess and do not trust a fee someone tells you. Read the official tariff on the provider's website or app, in the shop, or by dialing the menu. Many apps also show the fee before you confirm. Sending to someone on another network or to a bank may cost more.",
            "A fake agent may say \"give me your phone, I will do it for you\", or ask for your PIN. Never hand over your phone with the PIN. Real agents do not need it.",
            "Once a month, read your mini statement or full statement from the menu or app. Look for payments you do not recognise. Example: Moussa, a tailor in Dakar, checks his Wave history every month-end and writes his total sent and total received in a notebook. Figures in this course are examples only."
          ],
          steps: ["Find the official fee table on the provider's website, app or shop poster.", "Look up the fee for the amount you want to send or withdraw.", "At the agent, check the sign and agent number.", "Start the withdrawal on your own phone; check the agent's name on screen.", "Count the cash before you leave.", "Read your statement once a month."],
          words: [["Agent", "a registered shop that does cash in and cash out for a mobile money provider."], ["Tariff", "the official table of fees for each type and size of transaction."], ["Mini statement", "a short list of your last few transactions, from the menu or app."]],
          slides: [
            { title: "Using an agent", bullets: ["Registered agent: provider sign and agent number", "Start it on your own phone; check the name", "Count the cash before you leave"] },
            { title: "Fees: read, do not guess", bullets: ["Depend on provider, country, amount and type", "Official tariff: website, app, shop poster", "Other networks or banks may cost more"] },
            { title: "Fake agent signs", bullets: ["\"Give me your phone, I will do it\"", "Asks for your PIN", "No sign or agent number"] },
            { title: "Monthly check", bullets: ["Read your statement from the menu or app", "Look for payments you do not know", "Write totals sent and received"] }
          ],
          sources: [CBK, BCEAO_EME],
          tryIt: "Find your provider's official fee table (website, app or shop poster). Write down the fee for sending one amount you often send, for example KES 1,000, NGN 5,000, GHS 100 or XOF 10,000. Then open your mini statement and check every line.",
          youCanNow: "read the real fee from the official tariff, use an agent safely and check your statement for strange payments.",
          quickCheck: [
            { objective: "O2", q: "At the agent, the agent asks for your phone and PIN to \"make it faster\". What do you do?", options: ["Give them; agents are trusted", "Give the phone but not the PIN", "Do it yourself and keep your PIN private", "Write the PIN on paper for the agent"], answer: 2, why: "Real agents never need your PIN; you start and confirm the transaction yourself." },
            { objective: "O5", q: "Where do you find the real fee for a transfer?", options: ["What a stranger tells you", "The provider's official tariff, app or shop poster", "A WhatsApp forward", "Your neighbour's guess"], answer: 1, why: "Fees change and differ by country, so read them on official channels." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How mobile money works, and using it safely",
        questions: [
          { objective: "O1", q: "Who should know your mobile money PIN?", options: ["You and the agent", "Your whole family", "Only you", "You and customer care"], answer: 2, why: "Only you; staff, agents and family never need it." },
          { objective: "O1", q: "Your line stops working suddenly and you did not change anything. What could it be, and what do you do?", options: ["A SIM swap; call the provider from another phone to block it", "Low battery; charge the phone", "A holiday; wait a week", "Nothing; it will come back"], answer: 0, why: "A dead line can mean a criminal moved your number; blocking fast protects your wallet." },
          { objective: "O2", q: "When is the right moment to check who you are paying?", options: ["After you enter the PIN", "On the confirmation screen, before the PIN", "The next day", "Only for big amounts"], answer: 1, why: "Once the PIN is entered the money moves; the check must come first." },
          { objective: "O2", q: "You pay a shop. Where should the till or merchant code come from?", options: ["A text from an unknown number", "A caller who says the shop changed its number", "A WhatsApp status", "The sign or receipt in the shop"], answer: 3, why: "Scammers send fake payment numbers; take it from the shop itself and check the name on screen." },
          { objective: "O5", q: "Why read your statement once a month?", options: ["To find payments you do not recognise", "To lower your fees", "To change your number", "Because the provider pays you to"], answer: 0, why: "A monthly check spots fraud and mistakes early." }
        ]
      }
    },
    {
      name: "Chapter 2: Scams, mistakes and your safety plan",
      lessons: [
        {
          title: "Spotting mobile money scams",
          objectives: ["O3"],
          minutes: 6,
          goal: "Identify the six common mobile money scams and the warning sign in each.",
          text: [
            "Scammers use calls, SMS, WhatsApp and social media. They pretend to be your provider, a relative, an agent, a buyer or a company with a job. The tricks change, but the warning signs stay the same.",
            "1. Fake reversal: you get an SMS that looks like a payment to you, then a call: \"I sent you money by mistake, please send it back.\" Check your real balance first. Often no money arrived; the SMS came from an ordinary phone number, not the provider. 2. PIN or code request: anyone who asks for your PIN or a one-time code. 3. Fake staff: \"Your account will be blocked unless you dial this code or tell us your details.\" 4. Prize or promotion: \"You won, send a fee to receive your prize.\" 5. Fake job or loan: an offer that asks you to pay a fee first. 6. Urgent family message: \"Mum, I am in trouble, send money to this new number.\"",
            "Real messages from the provider come from its official name or short code, not an ordinary mobile number. Providers do not ask you to dial codes to fix your account or win a prize. If something feels urgent, stop. Call the person or the provider back on a number you already know.",
            "Example: Chinedu in Enugu gets an SMS saying NGN 20,000 arrived, then a call asking him to send it back. He checks his balance in the app: nothing arrived. He hangs up and reports the number."
          ],
          steps: ["Check the sender: official name or short code, or an ordinary number?", "Check your real balance in the menu or app.", "Ask: are they asking for my PIN, a code, a fee, or speed?", "Stop and call back on a number you already know.", "Report the scam number to your provider."],
          words: [["Fake reversal", "a trick where someone pretends they sent you money by mistake and asks you to send it back."], ["One-time code (OTP)", "a short code sent to your phone to confirm an action; never share it."], ["Short code", "the short official number a provider sends messages from."]],
          slides: [
            { title: "Six common scams", bullets: ["Fake reversal; PIN or code request; fake staff", "Prize that needs a fee; job or loan that needs a fee", "Urgent family message from a new number"] },
            { title: "Fake reversal", bullets: ["SMS looks like money arrived", "Call: \"I sent by mistake, send it back\"", "Check your real balance: often nothing came"] },
            { title: "Warning signs", bullets: ["Asks for PIN or code", "Asks for a fee first", "Rushes you; comes from an ordinary number"] },
            { title: "What to do", bullets: ["Stop. Check your balance", "Call back on a number you already know", "Report the number to your provider"] }
          ],
          sources: [SAF_FRAUD, MTN_GH],
          tryIt: "Look through your SMS inbox for messages about money. For each one, decide: official short code or ordinary number? Does it ask for a PIN, code, fee or speed? Write down any scam signs you find.",
          youCanNow: "spot the six common mobile money scams and say the warning sign in each.",
          quickCheck: [
            { objective: "O3", q: "An SMS from an ordinary mobile number says you received XAF 25,000. Then a caller asks you to send it back. What do you do first?", options: ["Send it back quickly to be honest", "Check your real balance in the menu or app", "Give the caller your PIN to reverse it", "Forward the SMS to friends"], answer: 1, why: "Fake reversal SMS come from ordinary numbers; your real balance shows the truth." },
            { objective: "O3", q: "A message says you won a phone and must pay a delivery fee first. What is the warning sign?", options: ["It mentions a phone", "It came in the evening", "It asks you to pay a fee to get a prize", "It uses your first name"], answer: 2, why: "Real prizes do not need a fee first; paying to receive is a classic scam." }
          ]
        },
        {
          title: "Wrong send or fraud: the first hour",
          objectives: ["O4"],
          minutes: 5,
          goal: "Report a wrong send or a fraud through your provider's official channels the same day.",
          text: [
            "Act fast. A reversal is easier while the money is still in the other wallet. Keep the original confirmation SMS; do not delete or edit it.",
            "Use only official channels: the help line printed on your SIM pack or the provider's website, the official app, the official short code, or a provider shop. Never use a number from a stranger or a social media comment, and never pay anyone who offers to \"recover\" your money for a fee.",
            "Example from Kenya: Safaricom's published channels include forwarding the M-Pesa confirmation SMS to 456 to ask for a reversal to the wrong person, calling 100 for a wrong till or Paybill, and forwarding a fraud number or message to 333. Other providers have their own steps; read them on the provider's official website or app, because numbers and steps change.",
            "A reversal is not guaranteed. If the person has already withdrawn the money and refuses to return it, the provider may tell you to go to the police. If your PIN or line was stolen, report to the provider first, then the police. If the provider does not solve it, the central bank has a consumer complaints process (for example the Central Bank of Nigeria or the Bank of Ghana)."
          ],
          steps: ["Do not delete the confirmation SMS.", "Within the hour, use your provider's official reversal or fraud channel.", "Note the date, time, amount, transaction ID and who you spoke to.", "If the PIN or line was stolen, block the SIM and wallet first.", "If needed, report to the police with the SMS.", "If the provider does not solve it, use the central bank's complaints process."],
          words: [["Reversal", "when the provider returns money sent to the wrong number, if it is still there."], ["Transaction ID", "the code in the confirmation SMS that identifies one payment."], ["Recovery scam", "a fake offer to get your lost money back if you pay a fee."]],
          slides: [
            { title: "Act in the first hour", bullets: ["Reversal is easier while money is still there", "Keep the original confirmation SMS", "Note date, time, amount, transaction ID"] },
            { title: "Official channels only", bullets: ["Help line on the SIM pack or official website", "Official app, short code or provider shop", "Never a number from a stranger"] },
            { title: "Example: Kenya (Safaricom)", bullets: ["Wrong person: forward the SMS to 456", "Wrong till or Paybill: call 100", "Fraud number or message: forward to 333"] },
            { title: "If it is not solved", bullets: ["Police report with the SMS", "Central bank complaints process", "Never pay a \"recovery\" fee"] }
          ],
          sources: [SAF_REV, SAF_FRAUD, CBN_CP, BOG],
          tryIt: "Find your own provider's official reversal and fraud steps on its website, app or SIM pack. Write them on paper: the number or code, and what to send. Do not copy them from a WhatsApp forward.",
          youCanNow: "act within the first hour after a wrong send or fraud, using only your provider's official channels.",
          quickCheck: [
            { objective: "O4", q: "You sent money to the wrong number. What do you keep?", options: ["Nothing; delete the SMS", "Only the amount in your head", "A screenshot from a stranger", "The original confirmation SMS"], answer: 3, why: "The original confirmation message has the transaction ID the provider needs." },
            { objective: "O4", q: "Someone on Facebook offers to recover your lost money for a small fee. What is this?", options: ["A recovery scam; use only official channels", "A helpful service", "The central bank's process", "A provider shop"], answer: 0, why: "Paying a stranger to recover money is a second scam; official channels are free." }
          ]
        },
        {
          title: "Your mobile money safety plan",
          objectives: ["O5"],
          minutes: 5,
          goal: "Write a one-page mobile money safety plan for you or your family.",
          text: [
            "A safety plan puts everything from this course on one page, so you and your family know what to do before something goes wrong. Keep it on paper at home, not only on the phone.",
            "It has six parts: 1. PIN and phone rules (hard PIN, screen lock, SIM PIN, never share). 2. The name check before every PIN. 3. Your provider's official help and fraud channels, copied from its website, app or SIM pack. 4. The six scam warning signs. 5. The first-hour steps after a wrong send or fraud. 6. A monthly statement check, with a date.",
            "Talk it through with older parents and teenagers, who are often targeted. Agree a family rule: \"We never send money to a new number because of an urgent message. We call back on the old number first.\"",
            "Example: Fatima, a trader in Casablanca, keeps her plan inside her cash book. Each month-end she checks her wallet history and ticks the date on the plan."
          ],
          steps: ["Write your PIN and phone-lock rules.", "Write the name-check rule.", "Copy your provider's official help and fraud channels from an official source.", "List the six scam warning signs.", "Write your first-hour steps.", "Set a monthly date to check your statement.", "Read it with your family."],
          words: [["Safety plan", "a short written list of rules and steps that protect your money."]],
          slides: [
            { title: "One page, six parts", bullets: ["PIN and phone rules; the name check", "Official help and fraud channels", "Scam signs; first-hour steps; monthly check"] },
            { title: "Official channels only", bullets: ["Copy them from the website, app or SIM pack", "Not from a forward or a stranger"] },
            { title: "Share it at home", bullets: ["Parents and teenagers are often targeted", "Family rule: call back on the old number first", "Keep the plan on paper"] }
          ],
          sources: [CBK, BOG, BCEAO_EME],
          tryIt: "Final task: write your one-page mobile money safety plan with all six parts. Copy your provider's help and fraud channels from its official website, app or SIM pack. Read it with one family member.",
          youCanNow: "write and share a mobile money safety plan that protects you and your family.",
          quickCheck: [
            { objective: "O5", q: "Where should the help numbers in your plan come from?", options: ["A WhatsApp forward", "The provider's official website, app or SIM pack", "A caller who says he is staff", "A social media comment"], answer: 1, why: "Scammers spread fake help numbers; copy them from official sources only." },
            { objective: "O5", q: "Which family rule protects against the urgent-message scam?", options: ["Always send fast in an emergency", "Share one PIN for the whole family", "Reply with your PIN to prove it is you", "Call back on the person's old number before sending"], answer: 3, why: "Calling back on a known number shows whether the urgent message is real." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Scams, mistakes and your safety plan",
        questions: [
          { objective: "O3", q: "\"Your account will be blocked today. Dial this code and enter your PIN to keep it.\" This is:", options: ["A normal provider message", "A scam: it rushes you and asks for your PIN", "A reversal", "A promotion"], answer: 1, why: "Providers never ask you to dial a code with your PIN; rushing is a warning sign." },
          { objective: "O3", q: "Which message is most likely real?", options: ["From an ordinary number: \"Send back the money I sent by mistake\"", "\"You won! Pay a fee to claim\"", "A payment confirmation from the provider's official name, matching your balance", "\"Mum, new number, send money now\""], answer: 2, why: "Real confirmations come from the official name or short code and match your real balance." },
          { objective: "O4", q: "When should you report a wrong send?", options: ["Next month", "Only if it is a large amount", "After the other person spends it", "The same day, as fast as possible"], answer: 3, why: "A reversal is easier while the money is still in the other wallet." },
          { objective: "O4", q: "The person who got your money by mistake has withdrawn it and refuses to return it. What next?", options: ["Follow the provider's advice and report to the police with your SMS", "Pay a stranger to get it back", "Delete the SMS", "Send them more money"], answer: 0, why: "Once withdrawn, it may become a police matter; your SMS is your evidence." },
          { objective: "O5", q: "How often does the safety plan say to check your statement?", options: ["Never", "Once a month", "Once every five years", "Only when the phone is lost"], answer: 1, why: "A regular monthly check spots strange payments early." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Using Mobile Money Safely (M-Pesa, MTN MoMo, Orange Money, Wave)",
    questions: [
      { objective: "O1", q: "Which is the weakest PIN?", options: ["A random four digits", "A number only you know", "A PIN you changed recently", "Your birth year"], answer: 3, why: "Your birth year is easy for others to find and guess." },
      { objective: "O1", q: "Who can safely ask for your mobile money PIN?", options: ["No one", "Customer care", "A registered agent", "Your bank"], answer: 0, why: "No one needs your PIN; real staff and agents never ask." },
      { objective: "O1", q: "Your phone is stolen. What is the first step?", options: ["Buy a new phone next month", "Call the provider from another phone to block the SIM and wallet", "Send a message to the thief", "Wait to see if it comes back"], answer: 1, why: "Blocking fast stops the thief from using your wallet." },
      { objective: "O1", q: "Why set a screen lock and a SIM PIN?", options: ["To make the phone faster", "To lower fees", "So a thief cannot easily use your phone or SIM", "Because agents need it"], answer: 2, why: "Locks slow down anyone who gets your phone or SIM." },
      { objective: "O2", q: "What three things do you check on the confirmation screen?", options: ["Time, weather and battery", "Name, number and amount", "Agent, colour and date", "Fee, network and signal"], answer: 1, why: "The name, number and amount tell you the money is going to the right place." },
      { objective: "O2", q: "You meant to send GHS 50 and the screen shows GHS 500. What do you do?", options: ["Cancel and type it again", "Enter the PIN and ask for change", "Send it and reverse later", "Enter half the PIN"], answer: 0, why: "Cancel before the PIN; fixing it afterwards is hard." },
      { objective: "O2", q: "A message says your supplier has \"a new payment number\". What do you do?", options: ["Pay the new number at once", "Forward it to other customers", "Call the supplier on the number you already have to check", "Pay half to each number"], answer: 2, why: "Fake payment numbers are a common trick; check with the person on a known number." },
      { objective: "O2", q: "At an agent, which is safe?", options: ["Giving the agent your phone and PIN", "Leaving before counting the cash", "Using an agent with no sign", "Starting the withdrawal on your own phone and counting the cash"], answer: 3, why: "You keep control of your PIN and check the cash before you leave." },
      { objective: "O3", q: "In a fake reversal scam, what usually happened?", options: ["Real money arrived by mistake", "A fake SMS from an ordinary number pretended money arrived", "The provider made an error", "The agent lost the money"], answer: 1, why: "The fake SMS looks like a payment, but your real balance shows nothing came." },
      { objective: "O3", q: "Which is a warning sign of a scam?", options: ["They ask for a fee before giving a prize, job or loan", "The message comes from the official short code", "The amount matches your balance", "You started the payment yourself"], answer: 0, why: "Paying first to receive is a classic scam sign." },
      { objective: "O3", q: "A WhatsApp message from a new number: \"Dad, I lost my phone, send XOF 30,000 to this number now.\" What do you do?", options: ["Send it fast", "Send half", "Call your child on the old number first", "Reply with your PIN"], answer: 2, why: "Calling the old number checks whether the urgent message is real." },
      { objective: "O3", q: "How do real provider messages usually arrive?", options: ["From an ordinary mobile number", "From the provider's official name or short code", "Through a stranger's WhatsApp", "From a social media page asking for your PIN"], answer: 1, why: "Providers send from official names or short codes; ordinary numbers are a warning sign." },
      { objective: "O4", q: "In Kenya, Safaricom's published step to ask for a reversal to the wrong person is to:", options: ["Post on Facebook", "Call any number online", "Forward the confirmation SMS to 456", "Send your PIN to 100"], answer: 2, why: "Forwarding the original M-Pesa confirmation to 456 starts a reversal request (check Safaricom's site for current steps)." },
      { objective: "O4", q: "What details do you write down when you report a problem?", options: ["Date, time, amount and transaction ID", "Your PIN", "Your one-time code", "Your password"], answer: 0, why: "These details help the provider find the payment; never share your PIN or codes." },
      { objective: "O4", q: "Where do you find your provider's official help number?", options: ["A comment under a Facebook post", "A caller who says he is staff", "A text from an ordinary number", "The SIM pack, official website or official app"], answer: 3, why: "Official sources give real numbers; scammers spread fake ones." },
      { objective: "O4", q: "The provider has not solved your complaint. What else can you use?", options: ["A stranger who charges a recovery fee", "The central bank's consumer complaints process", "Nothing more", "A new PIN for the other person"], answer: 1, why: "Central banks such as the CBN and the Bank of Ghana have complaints processes." },
      { objective: "O5", q: "Which belongs in your mobile money safety plan?", options: ["Your PIN written in full", "Your one-time codes", "Your provider's official fraud channel", "Your neighbour's PIN"], answer: 2, why: "The plan lists rules and official channels, never secret numbers." },
      { objective: "O5", q: "Why keep the safety plan on paper at home?", options: ["So the family can use it even if the phone is lost", "Because phones cannot store notes", "To show agents", "To post online"], answer: 0, why: "If the phone is stolen, the paper plan still tells you what to do." },
      { objective: "O5", q: "Who should you go through the safety plan with?", options: ["Strangers in the market", "A caller who says he is from the provider", "No one", "Family members such as older parents and teenagers"], answer: 3, why: "Family members are often targeted; sharing the plan protects them too." },
      { objective: "O5", q: "Where do you read the real fee for a transaction?", options: ["A WhatsApp forward", "The provider's official tariff, app or shop poster", "A friend's guess", "A social media comment"], answer: 1, why: "Fees differ by country and change; official channels show the current fee." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 2, 4, 6, 8, 10, 12, 14, 16] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "PIN and phone rules", objective: "O1", notYet: "No PIN rules, or the plan contains a real PIN or code.", meets: "Says: hard-to-guess PIN, screen lock, never share the PIN or codes, block at once if the phone is lost.", exceeds: "Also includes a SIM PIN and what to do if the line suddenly dies (possible SIM swap)." },
      { name: "Name check", objective: "O2", notYet: "No step to check before the PIN.", meets: "Says to check the name, number and amount on the confirmation screen and keep the confirmation SMS.", exceeds: "Adds taking till or merchant codes only from the shop itself and calling back on a known number about \"new\" payment numbers." },
      { name: "Scam warning signs", objective: "O3", notYet: "Fewer than four scam signs, or vague ones.", meets: "Lists the six common scams with a warning sign for each.", exceeds: "Adds a real example the learner or family has seen and how they spotted it." },
      { name: "Official channels and first hour", objective: "O4", notYet: "Help numbers missing, or copied from an unofficial source.", meets: "Gives the provider's official help, reversal and fraud channels (from the website, app or SIM pack) and first-hour steps.", exceeds: "Also names the central bank complaints route and the police step, and says where each channel was copied from." },
      { name: "Monthly check and sharing", objective: "O5", notYet: "No regular check, and the plan is not shared.", meets: "Sets a monthly statement check and the plan was read with one family member.", exceeds: "Includes a family call-back rule and a first check already done and dated." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report, at 30 days, checking the name before every PIN and reading their statement monthly",
      "Learners who report recognising and refusing a scam call or message within 30 days",
      "Fewer mobile money losses reported by members of a partner savings group, market association or community group"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone with a mobile money account (basic phone or smartphone)",
      "The provider's official fee table and help channels (website, app, shop poster or SIM pack)",
      "Paper and pen for the safety plan",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Good for market associations, savings groups, churches, mosques, youth groups and women's groups: take the pre-test together and do one chapter per meeting.",
      "Never ask learners to type or say a real PIN or code in practice. Show menus on a demo phone or by drawing the screens.",
      "Before the session, look up the official reversal and fraud steps for the providers your group uses in your country, from the providers' own websites or shops, and check they are current.",
      "Invite members to share scam messages they received (with personal numbers hidden) and sort them by warning sign.",
      "Score the final task with the rubric; never collect the plans if learners added personal details."
    ]
  }
};
