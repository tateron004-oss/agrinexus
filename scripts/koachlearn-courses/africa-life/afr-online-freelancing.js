"use strict";

// Koach Learn course: Africa: Life and Work -> "Online Freelancing and Remote Work from Africa" (Africa life brief, 30 October 2026).
// For young people and adults across Africa who want to earn online: choosing a service from skills they already have, a profile and
// portfolio built on a phone with costly data, finding jobs and writing a proposal, agreeing scope and delivering across time zones
// with unreliable power, getting paid and keeping records (tax: ask the national tax authority), and fake job and payment scams.
// Platform fees and payment methods change and differ by country: learners read them on each platform's own help pages. No figures invented.

const THREE_MTT = { name: "3MTT (3 Million Technical Talent), Nigeria: Federal Ministry of Communications, Innovation and Digital Economy with NITDA", url: "https://3mtt.nitda.gov.ng/" };
const AJIRA = { name: "Kenya News Agency: youth urged to embrace the Ajira Digital Program (government programme for online work)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };
const KRA = { name: "Kenya Revenue Authority (income tax, including income earned online)", url: "https://www.kra.go.ke" };
const GRA = { name: "Ghana Revenue Authority", url: "https://gra.gov.gh" };
const SEC_NG = { name: "Nairametrics (14 May 2026): SEC Nigeria warns against schemes promoted on WhatsApp, TikTok and Instagram", url: "https://nairametrics.com/2026/05/14/sec-warns-nigerians-against-rising-ponzi-schemes-on-whatsapp-tiktok-instagram/" };

module.exports = {
  id: "afr-online-freelancing",
  category: "Africa: Life and Work",
  name: "Online Freelancing and Remote Work from Africa",
  skills: "Choosing a service you can sell online, Writing a profile and building a small portfolio, Writing a proposal to a job post, Agreeing the work and delivering on time, Getting paid and keeping records, Spotting fake jobs and payment scams",
  outcome: "turn a skill you already have into an online service: write a profile with work samples, write a proposal to a real job post, agree the work in writing, get paid safely, keep records, and refuse fake jobs.",
  about: [
    "Young people and adults across Africa earn online by writing, translating, designing, doing data entry, customer support, transcription, bookkeeping, social media and virtual assistance for clients in their own country and abroad. Some work through platforms such as Upwork, Fiverr and LinkedIn; others find clients through WhatsApp, Facebook and people they know.",
    "This course is for job seekers, students, graduates, mothers and fathers at home, and anyone with a phone or computer and a skill. You will pick one service, write a profile, collect small work samples, write a proposal, agree the work, get paid and spot the many fake jobs that target new freelancers. Governments also run free training, such as Ajira Digital in Kenya and 3MTT in Nigeria.",
    "Each lesson takes about five minutes, with a \"Try it now\" task you can do on a phone. There is a short check after each lesson and chapter, and a 20-question quiz at the end. Platform fees and payment methods differ by country and change, so you will learn to read them on each platform's own help pages."
  ],
  finalTask: "Make your freelance starter pack: a one-line service offer, a profile (headline and a short overview), two or three small work samples, one proposal written to a real or sample job post, and a safety and payment checklist (how you will be paid, records you will keep, where to ask about tax, and the fake-job warning signs).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people and adults across Africa, in cities and towns: graduates and school leavers looking for work, people with jobs who want extra income, parents working from home, and artisans and small business owners with skills to sell. Examples from Kenya, Nigeria, Ghana, Senegal, Côte d'Ivoire, Cameroon, Egypt and Morocco; many speak English, French or Arabic, which is itself a skill to sell.",
    startingPoint: "Can use a smartphone, WhatsApp and social media; some have a laptop or use a cyber café. Most have a skill (writing, languages, design, typing, accounts, sales) but have never described it as a service, written a proposal or been paid by a foreign client. Many have seen \"work from home\" adverts that turned out to be scams.",
    gap: "Learners need to present one clear service, write proposals that win work, agree terms in writing, get paid safely and avoid fake jobs that ask for fees, so online work becomes a real income instead of lost data and lost money.",
    constraints: [
      "Reading level: plain words and short sentences; translated into French and Arabic",
      "Devices: often a smartphone only; data is costly; power can be unreliable",
      "Time: 4 to 6 minute lessons",
      "Platform fees, rules and payment methods differ by country and change; tax rules differ by country",
      "Never share passwords, PINs, one-time codes or ID documents with a client or recruiter"
    ],
    prerequisites: "Basic phone skills and one skill you can do for others. An email address."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using a list of your own skills", action: "choose one service you can sell online and write it as a one-line offer", standard: "saying what you do, for whom and what the client gets" },
    { id: "O2", condition: "On a platform or a simple online page", action: "write a profile headline and overview and add two or three small work samples", standard: "with no private details and samples you made yourself" },
    { id: "O3", condition: "Given a job post", action: "write a short proposal that answers the client's need, shows a related sample and asks one question", standard: "in under 150 words, written for that post, not copied" },
    { id: "O4", condition: "Before you start a job", action: "agree the scope, price, deadline and number of changes in writing and deliver on time", standard: "with a backup plan for power or data cuts" },
    { id: "O5", condition: "After you agree a job", action: "choose a safe way to be paid and keep a record of every payment", standard: "keeping work and payment inside the platform when you use one, and recording each payment within a week" },
    { id: "O6", condition: "Given five job offers or messages", action: "identify the fake ones and name the warning sign in each", standard: "getting at least 4 of 5 right, before you pay or share any details" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting ready to work online",
      lessons: [
        {
          title: "Choosing a service you can sell",
          objectives: ["O1"],
          minutes: 5,
          goal: "Choose one service and write it as a one-line offer.",
          text: [
            "Freelancing means doing paid work for clients, one job at a time, instead of working for one employer. Remote work means a job, full-time or part-time, done from home or anywhere online. Both start with a skill clients need.",
            "List what you can already do: writing, translating between English, French, Arabic or a local language, typing and data entry, using Excel or Google Sheets, graphic design on Canva, social media, customer support, bookkeeping, transcription, tutoring. Choose ONE to start; clients hire specialists.",
            "Write a one-line offer: what you do, for whom, and what they get. Example: \"I translate business documents from English to French for small companies, accurately and within 48 hours.\" Example: Kofi in Accra: \"I design simple Canva flyers and social media posts for shops and churches.\"",
            "If you need more skills, use free training. Kenya's government runs Ajira Digital for online work, and Nigeria's 3MTT programme trains young people in skills such as data, design and software."
          ],
          steps: ["List five things you can do for others.", "Circle the one you do best and enjoy.", "Ask: who pays for this?", "Write: I do [what] for [whom] so they get [result].", "If you need more skill, look for free training."],
          words: [["Freelancer", "a person who does paid work for clients one job at a time."], ["Remote work", "a job done online from home or anywhere."], ["Service offer", "one sentence saying what you do, for whom and what they get."]],
          slides: [
            { title: "Start with what you can do", bullets: ["Writing, translating, typing, spreadsheets", "Design, social media, customer support", "Bookkeeping, transcription, tutoring"] },
            { title: "Choose ONE service", bullets: ["Clients hire specialists", "Pick the one you do best and enjoy"] },
            { title: "Your one-line offer", bullets: ["I do [what] for [whom] so they get [result]", "\"I translate English to French for small firms, in 48 hours\""] },
            { title: "Free training", bullets: ["Kenya: Ajira Digital", "Nigeria: 3MTT", "Check current intake on official sites"] }
          ],
          sources: [AJIRA, THREE_MTT],
          tryIt: "List five things you can do for others. Choose one and write your one-line offer: I do [what] for [whom] so they get [result].",
          youCanNow: "choose one service and describe it in a clear one-line offer.",
          quickCheck: [
            { objective: "O1", q: "Which is the clearest one-line offer?", options: ["\"I can do anything online\"", "\"Hire me please\"", "\"I type handwritten forms into Excel for clinics, accurately and fast\"", "\"Freelancer, all skills\""], answer: 2, why: "It says what, for whom and what the client gets." },
            { objective: "O1", q: "Why choose ONE service to start?", options: ["Clients look for specialists", "Platforms allow only one word", "It is the law", "It costs less data"], answer: 0, why: "A clear specialty is easier for clients to trust and hire." }
          ]
        },
        {
          title: "Your profile and a small portfolio",
          objectives: ["O2"],
          minutes: 5,
          goal: "Write a profile headline and overview and add two or three work samples.",
          text: [
            "Your profile is your shop window. A headline says your service in a few words: \"English-French Translator for Business Documents\". The overview, a few short paragraphs, says who you help, what you do, how you work and one proof such as a past job or training.",
            "Clients want proof. A portfolio is a few samples of your work. If you have no clients yet, make samples yourself: translate a short public notice, design a flyer for an imaginary shop, clean a small example spreadsheet. Never use another person's work, and never share real client information without permission.",
            "Keep private details off your profile: no home address, ID number or bank details. Use a clear, friendly photo if the platform asks for one.",
            "Save data: write your profile in a notes app first, then paste it in once. Compress images before uploading. Example: Mariam in Casablanca writes her Arabic-French profile offline, then uploads it at a cyber café in ten minutes."
          ],
          steps: ["Write a headline: your service in a few words.", "Write the overview: who you help, what you do, how you work, one proof.", "Make two or three small samples yourself.", "Check: no private details, no one else's work.", "Write it offline first, then paste it in."],
          words: [["Profile", "your page on a platform that tells clients who you are and what you do."], ["Portfolio", "a few samples of your work that prove your skill."], ["Headline", "a short line under your name that says your service."]],
          slides: [
            { title: "Headline and overview", bullets: ["Headline: your service in a few words", "Overview: who you help, what you do, how, one proof"] },
            { title: "Portfolio: show proof", bullets: ["Two or three small samples", "No clients yet? Make samples yourself", "Never use other people's work"] },
            { title: "Keep it safe and light", bullets: ["No address, ID or bank details", "Write offline, paste once", "Compress images to save data"] }
          ],
          tryIt: "Write your headline and a short overview in a notes app. Then make one small work sample for your service, for example a translated paragraph, a flyer or a cleaned spreadsheet.",
          youCanNow: "write a clear profile and show your skill with small work samples.",
          quickCheck: [
            { objective: "O2", q: "You have no clients yet. How can you build a portfolio?", options: ["Copy a famous designer's work", "Make small samples yourself", "Use a friend's work with your name", "Wait until a client hires you"], answer: 1, why: "Samples you make yourself are honest proof of your skill." },
            { objective: "O2", q: "What should NOT go on your profile?", options: ["Your headline", "Your service", "A sample of your work", "Your home address and ID number"], answer: 3, why: "Private details can be misused; your profile needs only your skills and proof." }
          ]
        },
        {
          title: "Finding jobs and writing a proposal",
          objectives: ["O3"],
          minutes: 6,
          goal: "Write a short proposal that answers a client's need.",
          text: [
            "Places to find work: freelance platforms (such as Upwork and Fiverr), LinkedIn, job boards, and people you know, such as local businesses, churches, NGOs and schools that need help online. Your first clients are often near you.",
            "Read the job post twice. Find the client's need, the deadline and any question they ask. Skip posts that are vague, pay nothing or ask you to pay.",
            "A proposal is your short reply. Keep it under 150 words: 1. Show you understood the need in one sentence. 2. Say how you will do it. 3. Point to one related sample. 4. Ask one useful question. Write it for that post; clients can spot a copied message.",
            "Example: a client needs 200 product names typed into a spreadsheet. Ngozi in Lagos writes: \"You need 200 product names and prices typed into a spreadsheet by Friday. I will type and double-check each row. Here is a sample sheet I made. Should prices be in naira or dollars?\""
          ],
          steps: ["Read the post twice; note the need, deadline and any question.", "Skip vague posts or any that ask you to pay.", "Sentence 1: the client's need in your words.", "Sentence 2: how you will do it.", "Add one related sample.", "Ask one useful question.", "Keep it under 150 words."],
          words: [["Job post", "a client's description of the work they need."], ["Proposal", "your short reply to a job post, saying how you will do the work."]],
          slides: [
            { title: "Where to find work", bullets: ["Platforms such as Upwork and Fiverr", "LinkedIn and job boards", "Local businesses, NGOs, churches, schools"] },
            { title: "Read the post twice", bullets: ["The need, the deadline, any question", "Skip vague posts and any that ask you to pay"] },
            { title: "Proposal in four parts", bullets: ["1. The need in your words  2. How you will do it", "3. One related sample  4. One useful question", "Under 150 words, written for this post"] }
          ],
          tryIt: "Find one real job post for your service (or use the spreadsheet example). Write a proposal of under 150 words with the four parts.",
          youCanNow: "write a short proposal that shows a client you understood their need.",
          quickCheck: [
            { objective: "O3", q: "What should the first sentence of a proposal do?", options: ["Show you understood the client's need", "Tell your life story", "Ask for payment first", "List every skill you have"], answer: 0, why: "Showing you understood the need gets the client's attention." },
            { objective: "O3", q: "Why write each proposal for that job post?", options: ["Platforms require long proposals", "Clients can spot a copied message and skip it", "It uses less data", "Copied proposals are illegal"], answer: 1, why: "A proposal written for the post shows care and understanding." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready to work online",
        questions: [
          { objective: "O1", q: "Which three things does a one-line offer say?", options: ["Your age, town and school", "Your rate, your phone and your bank", "What you do, for whom and what they get", "Your hobbies, your family and your goals"], answer: 2, why: "What, for whom and the result make an offer clear." },
          { objective: "O1", q: "You speak Arabic and French well. Which service could you offer?", options: ["Translation between Arabic and French", "Fixing cars online", "Selling other people's accounts", "Nothing; languages are not a skill"], answer: 0, why: "Languages are a skill many clients pay for." },
          { objective: "O2", q: "What is a portfolio?", options: ["Your bank statement", "A few samples of your work that prove your skill", "Your ID card", "A list of clients' passwords"], answer: 1, why: "A portfolio shows clients what you can do." },
          { objective: "O3", q: "A good proposal is:", options: ["Long, with every skill you have", "The same message sent to every post", "A request for an advance fee", "Short, written for the post, with one sample and one question"], answer: 3, why: "Short, specific proposals with proof win more work." },
          { objective: "O3", q: "A job post asks you to pay a fee to apply. What do you do?", options: ["Pay quickly", "Pay half", "Skip it", "Send your ID instead"], answer: 2, why: "Real clients pay you; they do not ask you to pay to apply." }
        ]
      }
    },
    {
      name: "Chapter 2: Doing the work and getting paid",
      lessons: [
        {
          title: "Agreeing the work and delivering on time",
          objectives: ["O4"],
          minutes: 5,
          goal: "Agree the scope, price, deadline and changes in writing before you start.",
          text: [
            "Before you start, agree in writing (in the platform's messages or a short email) four things: the scope (exactly what you will deliver), the price, the deadline (with the time zone), and how many rounds of changes are included.",
            "Example: \"Scope: design 3 social media posts for your bakery. Price: as agreed in the contract. Deadline: Thursday 5 pm your time (London). Changes: up to 2 rounds.\" If the client later asks for more, politely offer a new price for the extra work.",
            "Plan for power and data cuts. Charge your phone and a power bank, save work often to cloud storage, know a backup place to work (cyber café, hub, library), and do not leave work to the last day. If something goes wrong, tell the client early and honestly; most clients accept a short delay they hear about in advance.",
            "Example: Ibrahima in Thiès works from 6 am, before the power cuts usually start, and keeps a copy of every file in Google Drive."
          ],
          steps: ["Write the scope: exactly what you will deliver.", "Write the price and deadline, with the time zone.", "Write how many rounds of changes are included.", "Get the client's yes in writing.", "Save work often; keep a power and data backup.", "If you will be late, tell the client early."],
          words: [["Scope", "exactly what work you will deliver."], ["Time zone", "the local time in a place; London, Lagos and Nairobi can differ by hours."], ["Revision", "a change the client asks for after seeing your work."]],
          slides: [
            { title: "Agree four things in writing", bullets: ["Scope: exactly what you deliver", "Price", "Deadline, with time zone", "Rounds of changes included"] },
            { title: "More work = new price", bullets: ["Extra requests are new work", "Offer a new price politely"] },
            { title: "Plan for cuts", bullets: ["Power bank; save to the cloud often", "Backup place to work", "Late? Tell the client early"] }
          ],
          tryIt: "Write a short scope message for a job in your service: scope, price (as an example), deadline with time zone, and rounds of changes. Then write your backup plan for a power or data cut.",
          youCanNow: "agree a job's scope, price, deadline and changes in writing, and deliver on time with a backup plan.",
          quickCheck: [
            { objective: "O4", q: "Which is NOT one of the four things to agree before starting?", options: ["Scope", "Price", "Deadline", "Your favourite music"], answer: 3, why: "Scope, price, deadline and changes are the four." },
            { objective: "O4", q: "The power is out and you may miss tomorrow's deadline. What do you do?", options: ["Say nothing and hope", "Tell the client early and give a new time", "Delete the job", "Ask the client for more money"], answer: 1, why: "Early, honest news keeps the client's trust." }
          ]
        },
        {
          title: "Getting paid and keeping records",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choose a safe way to be paid and record every payment.",
          text: [
            "On a platform, keep the work, the messages and the payment inside the platform. Its payment protection only works there. Clients who ask you to move off the platform to pay you \"directly\" are often scammers, and it can break the platform's rules.",
            "Platforms pay out in different ways: to a bank account, to services such as Payoneer, or by other methods. What works depends on the platform and your country, and fees change. Read the payment and fees pages in the platform's own help centre before you take your first job.",
            "With direct clients you know, agree how they pay before you start: bank transfer or mobile money, and when (for example half before and half on delivery). Deliver a sample or preview first if you are unsure.",
            "Record every payment: date, client, job, amount and currency (USD, EUR, KES, NGN, GHS, XOF, MAD), fees and the amount you received. Online income can be taxed. Ask your national tax authority, for example the Kenya Revenue Authority or the Ghana Revenue Authority, or a tax adviser, what you must register and pay."
          ],
          steps: ["On a platform, keep work and payment inside it.", "Read the platform's own payment and fees pages.", "With direct clients, agree how and when they pay before you start.", "Record each payment within a week: date, client, job, amount, currency, fees, received.", "Ask the national tax authority what applies to you."],
          words: [["Payment protection", "a platform's system that holds or guarantees payment for work done inside it."], ["Currency", "the type of money: US dollars, euros, naira, cedis, shillings, CFA francs, dirhams."], ["Tax authority", "the government office that collects tax, such as KRA in Kenya or GRA in Ghana."]],
          slides: [
            { title: "Stay on the platform", bullets: ["Work, messages and payment inside it", "Protection only works there", "\"Pay you directly off-platform\" = warning sign"] },
            { title: "Payout methods", bullets: ["Bank, Payoneer or others: depends on country", "Read the platform's own help pages", "Fees change: check before your first job"] },
            { title: "Records and tax", bullets: ["Date, client, job, amount, currency, fees", "Record each payment within a week", "Ask KRA, GRA or your tax authority"] }
          ],
          sources: [KRA, GRA],
          tryIt: "Make a payment record table with these columns: date, client, job, amount, currency, fees, amount received. Add one example row. Then find the payment help page of one platform you might use.",
          youCanNow: "choose a safe way to be paid, keep a record of every payment, and know where to ask about tax.",
          quickCheck: [
            { objective: "O5", q: "A new client on a platform asks you to move to WhatsApp and be paid \"directly\". What is the risk?", options: ["You lose the platform's payment protection, and it is often a scam", "None; it is faster", "You will be paid double", "The platform will pay the fee"], answer: 0, why: "Payment protection only works inside the platform; off-platform requests are a common scam sign." },
            { objective: "O5", q: "Who can tell you what tax you owe on online income?", options: ["Your client", "A WhatsApp group", "Your national tax authority or a tax adviser", "Nobody; online income is never taxed"], answer: 2, why: "Tax rules differ by country; the tax authority or an adviser can tell you." }
          ]
        },
        {
          title: "Fake jobs and payment scams",
          objectives: ["O6"],
          minutes: 6,
          goal: "Identify fake job offers and name the warning sign in each.",
          text: [
            "New freelancers are a big target. Warning signs: 1. They ask YOU to pay: for registration, training, a \"starter kit\" or software. 2. Pay that is too high for easy work, like \"earn USD 500 a day liking videos\". 3. They ask for your passwords, PIN, one-time codes or ID documents. 4. They want to move you off the platform at once. 5. They \"overpay\" by cheque or transfer and ask you to send the extra back. 6. \"Task\" or \"investment\" jobs where you deposit money to unlock tasks or earnings, often pushed on WhatsApp, Telegram and TikTok.",
            "Nigeria's SEC has warned about schemes promoted on social media that promise high returns. Real clients pay you for work; they never ask you to pay to work.",
            "Protect your accounts: a strong, different password for your email and each platform, two-step verification turned on, and never share codes. Do not let anyone \"rent\" or use your verified account; it can be used for fraud in your name.",
            "Then put your starter pack together: your offer, profile, samples, one proposal, and your safety and payment checklist."
          ],
          steps: ["Ask: do they want me to pay?", "Ask: is the pay too good for the work?", "Ask: do they want passwords, codes or ID?", "Ask: are they rushing me off the platform?", "Any yes: stop, do not pay, report it to the platform.", "Turn on two-step verification and never share codes."],
          words: [["Overpayment scam", "a fake payment of too much money, then a request to send the extra back before the fake payment bounces."], ["Two-step verification", "a second check, such as a code to your phone, when you log in."], ["Task scam", "a fake job where you must deposit money to unlock tasks or earnings."]],
          slides: [
            { title: "Fake job warning signs", bullets: ["They ask you to pay to work", "Pay far too high for easy work", "They want passwords, codes or ID"] },
            { title: "More tricks", bullets: ["Rushing you off the platform", "Overpaying, then \"send back the extra\"", "Deposit to unlock tasks or earnings"] },
            { title: "Protect your accounts", bullets: ["Strong, different passwords", "Two-step verification on", "Never rent out your verified account"] },
            { title: "Your starter pack", bullets: ["Offer, profile, samples", "One proposal", "Safety and payment checklist"] }
          ],
          sources: [SEC_NG],
          tryIt: "Final task: put together your freelance starter pack: one-line offer, profile headline and overview, two or three samples, one proposal to a real or sample job post, and a checklist with your payment method, your record table, where you will ask about tax and the six fake-job warning signs.",
          youCanNow: "spot fake jobs and payment scams and present yourself as a ready-to-hire freelancer.",
          quickCheck: [
            { objective: "O6", q: "A \"recruiter\" offers a data entry job but asks for USD 20 for a starter kit. What is the warning sign?", options: ["The job is data entry", "The recruiter is polite", "The job is part-time", "They ask you to pay to work"], answer: 3, why: "Real clients pay you; asking you to pay is the classic fake-job sign." },
            { objective: "O6", q: "A client sends more than the agreed amount and asks you to send the extra back quickly. What is this?", options: ["A generous client", "An overpayment scam", "A platform bonus", "A tax refund"], answer: 1, why: "The first payment is often fake and bounces after you send your own money back." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Doing the work and getting paid",
        questions: [
          { objective: "O4", q: "Why agree the number of changes before you start?", options: ["So endless changes do not eat your time without pay", "So the client pays less", "Because platforms require five changes", "It is not important"], answer: 0, why: "Agreed changes protect your time; extra work gets a new price." },
          { objective: "O4", q: "Your client is in London and you are in Nairobi. Why write the time zone with the deadline?", options: ["It is polite", "The time differs, so both of you know exactly when it is due", "It makes the job cost more", "Platforms ban deadlines without it"], answer: 1, why: "Times differ between countries; a time zone removes confusion." },
          { objective: "O5", q: "Which belongs in your payment record?", options: ["Your password", "Your PIN", "Date, client, job, amount, currency and fees", "The client's private address"], answer: 2, why: "These details track your income and help with tax." },
          { objective: "O6", q: "Which offer is most likely real?", options: ["\"Pay USD 30 to unlock tasks\"", "\"Send your login code so we can set up your account\"", "\"Earn USD 500 a day liking videos\"", "A client on the platform who agrees scope and price and pays through the platform"], answer: 3, why: "Real work has clear scope and price and is paid through safe channels." },
          { objective: "O6", q: "Someone wants to \"rent\" your verified freelancer account. What do you do?", options: ["Refuse; it can be used for fraud in your name", "Agree for a small fee", "Share the password only", "Share it with a friend first"], answer: 0, why: "Your account is tied to your identity; others can misuse it." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Online Freelancing and Remote Work from Africa",
    questions: [
      { objective: "O1", q: "What is a freelancer?", options: ["A person who works for free", "A person who does paid work for clients one job at a time", "A government worker", "A platform owner"], answer: 1, why: "Freelancers sell their services job by job to different clients." },
      { objective: "O1", q: "Which is a strong one-line offer?", options: ["\"I do everything\"", "\"Good worker, hire me\"", "\"Online jobs\"", "\"I write product descriptions for online shops that help them sell\""], answer: 3, why: "It says what, for whom and the result." },
      { objective: "O1", q: "You need more skills before you start. What is a good free option in Nigeria?", options: ["The 3MTT programme", "A paid WhatsApp \"academy\" that promises jobs", "Buying a verified account", "A task app that asks for a deposit"], answer: 0, why: "3MTT is a government training programme; the others are warning signs." },
      { objective: "O2", q: "A profile headline should:", options: ["List your phone number", "Say your service in a few words", "Tell your full life story", "Show your ID number"], answer: 1, why: "A short headline tells clients what you do at a glance." },
      { objective: "O2", q: "Which is an honest work sample?", options: ["A flyer you designed for an imaginary shop", "A famous designer's work", "A friend's essay", "A client's private file shared without permission"], answer: 0, why: "Samples you make yourself are honest proof." },
      { objective: "O2", q: "How can you save data when making your profile?", options: ["Upload huge photos", "Rewrite it online many times", "Write it offline first, then paste it in once", "Use video calls only"], answer: 2, why: "Writing offline and compressing images saves costly data." },
      { objective: "O3", q: "How long should a first proposal usually be?", options: ["Two pages", "One word", "As long as possible", "Under about 150 words"], answer: 3, why: "Short proposals are read; long ones are skipped." },
      { objective: "O3", q: "Which belongs in a proposal?", options: ["A related sample and one useful question", "Your bank PIN", "A request for an advance fee", "A copy of your ID"], answer: 0, why: "Proof and a good question show you can do the job." },
      { objective: "O3", q: "Where can first clients often be found?", options: ["Only abroad", "Only on one website", "Local businesses, NGOs, schools and churches, as well as platforms", "Nowhere without paying a recruiter"], answer: 2, why: "Many freelancers start with people and businesses near them." },
      { objective: "O4", q: "What does \"scope\" mean?", options: ["The client's country", "Exactly what you will deliver", "Your price", "The platform's fee"], answer: 1, why: "Scope is the exact work agreed." },
      { objective: "O4", q: "The client asks for a new design that was not in the agreed scope. What do you do?", options: ["Do it free, many times", "Ignore the message", "Cancel the job", "Politely offer a new price for the extra work"], answer: 3, why: "Extra work outside the scope is new work with a new price." },
      { objective: "O4", q: "Which is a good backup plan for power cuts?", options: ["Charge a power bank and save work to the cloud often", "Hope the power stays on", "Work only the night before", "Tell the client nothing"], answer: 0, why: "A power bank, cloud saves and a backup place keep you on time." },
      { objective: "O5", q: "Why keep work and payment inside a platform?", options: ["It is slower", "Its payment protection only works there", "It is free of all fees", "The client prefers it"], answer: 1, why: "Leaving the platform removes its protection and is a common scam path." },
      { objective: "O5", q: "Where do you learn a platform's current payout methods and fees?", options: ["A YouTube comment", "A friend's guess", "The platform's own help centre", "The client"], answer: 2, why: "Methods and fees differ by country and change; the platform's own pages are current." },
      { objective: "O5", q: "How soon should you record a payment?", options: ["Within a week", "At the end of the year", "Never", "Only big payments"], answer: 0, why: "Recording soon keeps your records complete for planning and tax." },
      { objective: "O5", q: "In Ghana, who can tell you about tax on your online income?", options: ["Your client", "A TikTok video", "The Ghana Revenue Authority or a tax adviser", "The platform's chat bot"], answer: 2, why: "The national tax authority sets and explains tax rules." },
      { objective: "O6", q: "Which is a fake-job warning sign?", options: ["Clear scope and price", "They ask you to pay for registration or a starter kit", "Payment through the platform", "A deadline with a time zone"], answer: 1, why: "Real clients never ask you to pay to work." },
      { objective: "O6", q: "A \"job\" asks you to deposit money to unlock tasks that pay more. This is:", options: ["A normal job", "A training fee", "A tax", "A task scam"], answer: 3, why: "Deposits to unlock tasks or earnings are a common scam." },
      { objective: "O6", q: "What protects your freelancer and email accounts?", options: ["One password for everything", "Sharing codes with clients", "Strong, different passwords and two-step verification", "Renting your account to others"], answer: 2, why: "Different passwords and a second login check stop most takeovers." },
      { objective: "O6", q: "A recruiter asks for a photo of your ID and your email password \"to verify you\". What do you do?", options: ["Refuse and report it", "Send both", "Send only the password", "Send only the ID"], answer: 0, why: "Real clients never need your password; ID requests from strangers are a fraud risk." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 9, 12, 14, 16, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Clear offer", objective: "O1", notYet: "The offer is vague (\"I do everything online\").", meets: "One service, saying what you do, for whom and what the client gets.", exceeds: "The offer names a specific type of client and a clear result or turnaround time." },
      { name: "Profile and samples", objective: "O2", notYet: "No headline or overview, no samples, or private details shown.", meets: "Headline, short overview and two or three samples the learner made, with no private details.", exceeds: "Samples match the offer closely and the overview includes one proof (training or a past job)." },
      { name: "Proposal", objective: "O3", notYet: "Long, copied or does not mention the client's need.", meets: "Under 150 words, written for the post: the need, how, one sample, one question.", exceeds: "The question shows real thought about the job, and the proposal fits the client's tone." },
      { name: "Agreeing the work", objective: "O4", notYet: "No written scope or deadline.", meets: "A scope message with scope, price, deadline with time zone and changes, plus a power or data backup plan.", exceeds: "Also includes how extra work will be priced." },
      { name: "Payment and records", objective: "O5", notYet: "No payment method or record table.", meets: "A safe payment method (inside the platform, or agreed in advance with a known client), a record table, and where to ask about tax.", exceeds: "The payment method was checked on the platform's own help page." },
      { name: "Scam awareness", objective: "O6", notYet: "Fewer than four warning signs, or plans to pay a fee to get work.", meets: "Lists the six fake-job warning signs and says two-step verification is on.", exceeds: "Adds a real fake offer the learner saw and how they spotted it." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who send at least three proposals within 30 days",
      "Learners who report a first paid online job within 90 days",
      "Learners who report refusing a fake job or payment scam within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer with some data, and an email address",
      "A notes app or paper to draft the profile and proposal",
      "Free tools for samples, such as Google Docs or Sheets, Canva or Microsoft 365",
      "About 75 minutes in total, in short sessions, plus time to make samples"
    ],
    facilitatorNotes: [
      "Works well in youth hubs, Ajira centres, 3MTT clusters, libraries and church or mosque youth groups: take the pre-test together, then one chapter per session.",
      "Bring printed sample job posts so learners can practise proposals without using data.",
      "Do not recommend paid \"freelance academies\" or account sellers; point to free, official training.",
      "Never ask learners to share passwords, codes, ID documents or payout details in class.",
      "Pair learners to review each other's proposals with the rubric before they send them.",
      "Before the session, check each platform's current help pages on payments for your country; they change."
    ]
  }
};
