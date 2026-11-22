"use strict";

// Koach Learn course: Workforce Development (also Africa: Life and Work, Undeserved Community) -> "Call Center and Outsourcing (BPO) Careers".
// Wave 3 (30 October 2026). An abroad course: global examples, because it is translated into ten languages.
// Goes deeper than shared/ai-customer-service-careers.js and shared/customer-service-excellence.js: the BPO industry, fake recruiters,
// the hiring tests, the QA scorecard, the numbers agents are measured on, shift and home-based work, and the career ladder.

const BLS_CSR = { name: "US Bureau of Labor Statistics: Customer Service Representatives (education, training, schedules, work environment)", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" };
const IBPAP = { name: "IBPAP: IT and Business Process Association Philippines (the Philippine IT-BPM industry association)", url: "https://www.ibpap.org/" };
const FTC_JOBS = { name: "US Federal Trade Commission: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" };
const FTC_REPORT = { name: "US Federal Trade Commission: report a scam (US)", url: "https://reportfraud.ftc.gov/" };
const IOM_IRIS = { name: "IOM IRIS: ethical recruitment and the Employer Pays Principle", url: "https://iris.iom.int/" };
const ILO_FAIR = { name: "International Labour Organization (ILO): fair recruitment", url: "https://www.ilo.org/topics/fair-recruitment" };
const TESDA = { name: "TESDA, Philippines: Technical Education and Skills Development Authority (training and certification; TESDA Online Program)", url: "https://www.tesda.gov.ph/" };
const AJIRA = { name: "Kenya News Agency: youth urged to embrace the Ajira Digital Program (government programme for online work)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };

module.exports = {
  id: "call-center-bpo-careers",
  category: "Workforce Development",
  name: "Call Center and Outsourcing (BPO) Careers",
  skills: "Knowing the kinds of BPO jobs, Spotting fake recruiters, Passing the hiring tests, Handling a call to a QA scorecard, Meeting call center numbers, Planning shifts and a career path",
  outcome: "go after a call center or outsourcing (BPO) job with a plan: pick the kind of BPO work that fits you, check that an employer is real, practise the typing, voice and mock-call tests, handle a call the way a quality scorecard expects, explain the numbers you will be measured on, and plan your shifts and your next step up.",
  about: [
    "Call centers and outsourcing companies (BPO) hire many people with a secondary school diploma and good communication skills, in places like the Philippines, India, Kenya, Nigeria, Ghana, Egypt, Morocco, Senegal, Mexico, Colombia and the United States. Many offer paid training, and some let people work from home.",
    "This course is for job seekers, young people, people changing careers and anyone who wants to know what this work is really like before they apply. You will learn the kinds of BPO jobs, how to spot a fake recruiter, how the hiring tests work, how calls are scored, and how people move up.",
    "The course prepares you to apply; it does not give you a job or a certificate. Every company runs its own hiring tests. Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a quick check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write your own 90-day BPO job plan: the kind of BPO work you want and why, three real employers you checked on their official websites, your scam checklist, a practice schedule with dates for typing, reading aloud and mock calls, one recorded practice call scored with the sample QA scorecard, your shift or home-work setup plan, and one step up you want within a year.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Job seekers aged about 18 and up in Africa, Asia, Latin America and the US: school leavers, graduates without work, adults changing careers, returning workers and people with a second language. Many will take the course in their own language and apply for jobs in English, French or Spanish.",
    startingPoint: "Can hold a conversation and use a phone; most can use a computer a little. Few know how BPO hiring works, what the tests are, or how call center work is measured. Many have seen job ads on social media and cannot tell real ones from fake ones.",
    gap: "BPO jobs are a common first formal job, but applicants fail tests they did not know about, lose money to fake recruiters who ask for fees, or quit in the first months because shifts and targets surprised them. Learners need to know the work, check the employer, practise the tests and plan for the schedule.",
    constraints: [
      "Reading level: plain words and short sentences; translated into ten languages",
      "Devices: often a phone only; some lessons are better on a computer, but every task can be done on paper",
      "Time: 4 to 6 minute lessons",
      "Hiring tests, pay, shifts and labour laws differ by country and company; learners check the employer and the national labour ministry",
      "High scam risk: no real ID numbers, passwords or bank details in any practice task"
    ],
    prerequisites: "None. \"Customer Service Excellence\" and \"AI for Customer Service Careers\" are good next or side courses; ESL learners can take \"English for the Workplace (ESL)\" alongside."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given five BPO job descriptions", action: "sort each job as voice or non-voice and inbound or outbound, and name the main skill it needs", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a job ad or a recruiter's message", action: "check the job for the warning signs of a fake recruiter and say what to do next", standard: "naming at least four warning signs and never paying a fee or handing over original documents" },
    { id: "O3", condition: "Using a practice script and a phone or paper", action: "complete a mock customer call that opens, verifies, solves, recaps and closes", standard: "scoring Meets on every row of the sample QA scorecard" },
    { id: "O4", condition: "Given a sample agent report", action: "explain what handle time, first contact resolution, customer satisfaction, QA score and schedule adherence measure", standard: "with one honest way to improve each" },
    { id: "O5", condition: "For the shift or home-based job you want", action: "write a setup plan for sleep, travel, equipment and breaks", standard: "covering at least five items, including a backup for power or internet" },
    { id: "O6", condition: "Using your own goals and real employer websites", action: "write a 90-day plan to get hired and a next step up the BPO career ladder", standard: "with dates, three checked employers and one growth goal" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting into BPO work",
      lessons: [
        {
          title: "What BPO work is and the kinds of jobs",
          objectives: ["O1"],
          minutes: 5,
          goal: "Sort BPO jobs into voice or non-voice and inbound or outbound, and name the skill each one needs.",
          text: [
            "BPO means business process outsourcing: a company pays another company to do part of its work, such as answering customers, processing forms or checking content. The company that pays is the client, and the work for one client is called an account or a campaign.",
            "Voice jobs are on the phone. Inbound means customers call you (help with a bill, a delivery, a phone plan). Outbound means you call them (sales, surveys, reminders, collections). Non-voice jobs are chat, email, social media replies, data entry, back-office processing and content moderation; they need strong writing and typing more than speaking.",
            "BPO is a big employer in many countries. The Philippines and India serve many English-speaking clients. Kenya, Nigeria, Ghana, Egypt and South Africa are growing. Morocco, Tunisia, Senegal, Côte d'Ivoire, Madagascar and Mauritius serve French-speaking clients. Mexico and Colombia serve US and Spanish-speaking clients. In the US, call centers hire in nearly every industry.",
            "Language is often the key skill. An account may need clear English, French, Spanish, Arabic or another language, plus patience, listening and basic computer skills. Many jobs ask for a secondary school diploma, not a degree."
          ],
          words: [
            ["BPO", "business process outsourcing: one company doing part of another company's work for it."],
            ["Client and account", "the client is the company that pays the BPO; the account (or campaign) is the work for that client."],
            ["Voice and non-voice", "voice jobs are phone calls; non-voice jobs are chat, email, data and back-office work."],
            ["Inbound and outbound", "inbound: customers contact you. Outbound: you contact customers."],
            ["Content moderation", "checking posts, pictures or videos against a platform's rules."]
          ],
          slides: [
            { title: "BPO in one sentence", bullets: ["A company pays another company to do part of its work", "The paying company is the client", "The work for one client is the account"] },
            { title: "Voice jobs", bullets: ["Inbound: customers call you for help", "Outbound: you call them for sales, surveys or reminders", "Main skills: clear speech, listening, patience"] },
            { title: "Non-voice jobs", bullets: ["Chat, email, social media replies", "Data entry, back office, content moderation", "Main skills: writing, typing, accuracy"] },
            { title: "Where BPO hires", bullets: ["Philippines, India, Kenya, Nigeria, Ghana, Egypt", "French accounts: Morocco, Tunisia, Senegal, Côte d'Ivoire", "Nearshore for the US: Mexico, Colombia"] }
          ],
          sources: [IBPAP, BLS_CSR],
          tryIt: "On paper, make a table with four boxes: inbound voice, outbound voice, chat or email, back office. Put one job you have seen advertised in each box, write the main skill it needs, and circle the box that fits you best.",
          youCanNow: "tell voice from non-voice and inbound from outbound BPO jobs, and choose the kind that fits your skills.",
          quickCheck: [
            { objective: "O1", q: "Customers call you to fix problems with their phone bills. What kind of job is this?", options: ["Outbound voice", "Back-office data entry", "Inbound voice", "Content moderation"], answer: 2, why: "Customers call in, and the work is on the phone: inbound voice." },
            { objective: "O1", q: "Which job needs strong writing and typing more than speaking?", options: ["Email and chat support", "Outbound sales calls", "Inbound phone support", "Phone surveys"], answer: 0, why: "Email and chat are non-voice jobs: customers read your words, so writing and typing matter most." }
          ]
        },
        {
          title: "Spotting fake recruiters and job scams",
          objectives: ["O2"],
          minutes: 5,
          goal: "Check a job ad or recruiter message for the warning signs of a scam and decide what to do.",
          text: [
            "Real employers do not charge you to get a job. Fake recruiters ask for a \"processing fee\", \"training fee\", \"medical fee\", \"uniform fee\" or money for a \"starter kit\" or equipment. The US Federal Trade Commission says honest employers will never ask you to pay to get a job, and international fair-recruitment work by the ILO and IOM pushes for employers, not workers, to pay recruitment costs.",
            "Other warning signs: high pay for little work; an interview only by text on WhatsApp or Telegram; a free email address instead of the company's own; pressure to decide today; a check you must deposit and send part of back; and a request for your passport, national ID card or school certificates to \"keep\". Keep your original documents yourself. Give copies only, and only to an employer you have checked.",
            "To check an employer: find the company's official website yourself (do not use the link in the message), look for the same job on its careers page, and apply there. For jobs abroad, check that the agency is licensed with your country's labour ministry or migrant workers' agency. If something is wrong, stop, keep the messages, and report it to the police or the national consumer or labour office (in the US: reportfraud.ftc.gov)."
          ],
          steps: [
            "Read the ad and list anything that asks for money or original documents.",
            "Find the company's official website yourself, not from the link in the message.",
            "Look for the same job on the official careers page and apply there.",
            "For jobs abroad, check that the recruitment agency is licensed by your government.",
            "If anything is wrong, stop, keep screenshots, and report it."
          ],
          words: [
            ["Recruiter", "a person or agency that finds workers for an employer."],
            ["Recruitment fee", "money charged to a worker to get a job; fair recruitment says workers should not pay it."],
            ["Careers page", "the part of a company's own website where it lists its real jobs."],
            ["Licensed agency", "a recruitment agency registered with the government, which you can look up on the official list."]
          ],
          slides: [
            { title: "Real employers do not charge you", bullets: ["No processing, training, medical or uniform fee to get hired", "No paying for a starter kit or equipment", "No check to deposit and send money back"] },
            { title: "More warning signs", bullets: ["High pay for little work", "Interview only by text on WhatsApp or Telegram", "Free email address, pressure to decide today"] },
            { title: "Keep your documents", bullets: ["Never hand over your original passport, ID or certificates", "Give copies only, to an employer you checked"] },
            { title: "Check, then apply", bullets: ["Find the official website yourself", "Apply on the official careers page", "Jobs abroad: check the agency's license", "Something wrong: stop, keep proof, report"] }
          ],
          sources: [FTC_JOBS, FTC_REPORT, ILO_FAIR, IOM_IRIS],
          tryIt: "Read this practice message: \"Congratulations! You are hired for a home-based call center job at 900 dollars a week. Send 50 dollars for training materials and a photo of your ID card on WhatsApp today.\" Write down every warning sign you find (there are at least five) and what you would do.",
          youCanNow: "spot a fake recruiter, keep your documents safe, and check a job on the employer's own website before you apply.",
          quickCheck: [
            { objective: "O2", q: "A recruiter says you got the job but must pay a training fee first. What do you do?", options: ["Pay it, because training is useful", "Pay half now and half later", "Ask a friend to pay it for you", "Stop: real employers do not charge you to get hired"], answer: 3, why: "Asking you to pay to get a job is a main sign of a scam." },
            { objective: "O2", q: "A recruiter for a job abroad asks to keep your passport. What is the safe answer?", options: ["Give the original so they can process it faster", "Keep your original passport and give a copy only to a checked employer", "Mail it to the address in the message", "Leave it with the recruiter's friend"], answer: 1, why: "Keeping your own documents protects you; giving them away can trap you in unfair work." }
          ]
        },
        {
          title: "Passing the hiring steps and tests",
          objectives: ["O3"],
          minutes: 6,
          goal: "Practise the typing, reading-aloud and mock-call parts of a BPO hiring process.",
          text: [
            "Hiring steps differ by company, but many BPOs use a similar path: an online application; an assessment with typing, grammar, reading or listening questions; a voice or language test where you read aloud or answer recorded questions; an interview; and a mock call, a short role play where a recruiter acts as a customer. Then come the job offer, background or document checks, and paid training.",
            "The voice test checks that people can understand you easily: clear words, a steady pace, good grammar and a friendly tone. You do not need to change your accent. Speak slowly enough, finish your words and smile while you talk; people can hear it.",
            "Practise at home for free. Type a page from a book or newspaper into any text editor for five minutes and count the words. Read a short news story aloud and record it on your phone, then listen back. Do a mock call with a friend acting as a customer. After you are hired, there is usually classroom training on the client's products and then nesting: your first weeks on real calls with extra support."
          ],
          steps: [
            "Typing: type for 5 minutes from a printed page, count the words, divide by 5, and repeat every day.",
            "Reading aloud: record a 1-minute news story, listen, and fix words you rushed or dropped.",
            "Listening: have a friend read a short message, then write it down and check it.",
            "Mock call: a friend plays a customer with a simple problem; you open, ask, solve and close."
          ],
          words: [
            ["Assessment", "a test that checks skills such as typing, grammar, reading and listening."],
            ["Words per minute", "how many words you type in one minute; one way to measure typing speed."],
            ["Mock call", "a practice call where someone plays the customer, used in hiring and training."],
            ["Nesting", "the first weeks on real calls after training, with extra help from a coach."]
          ],
          slides: [
            { title: "A common BPO hiring path", bullets: ["Application, then an online assessment", "Voice or language test, then an interview", "Mock call, offer, document checks, paid training"] },
            { title: "The voice test", bullets: ["Can people understand you easily?", "Clear words, steady pace, good grammar, friendly tone", "You do not need to change your accent"] },
            { title: "Practise free at home", bullets: ["Type from a printed page for 5 minutes a day", "Record yourself reading aloud and listen back", "Mock call with a friend as the customer"] },
            { title: "After you are hired", bullets: ["Classroom training on the client's products", "Nesting: first weeks on real calls with a coach"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Do three short practices today and write down the results: type for 5 minutes and work out your words per minute; record yourself reading a 1-minute story and note two words to say more clearly; and write a 3-line opening you would use in a mock call.",
          youCanNow: "describe the usual BPO hiring steps and practise the typing, voice and mock-call tests at home.",
          quickCheck: [
            { objective: "O3", q: "What does a BPO voice test mainly check?", options: ["That people can understand you clearly", "That you have a foreign accent", "That you speak as fast as possible", "That you know the client's prices"], answer: 0, why: "The voice test checks clear speech, pace, grammar and tone, not a particular accent." },
            { objective: "O3", q: "In 5 minutes you type 150 words. About what is your typing speed?", options: ["15 words per minute", "75 words per minute", "150 words per minute", "30 words per minute"], answer: 3, why: "150 words divided by 5 minutes is 30 words per minute." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting into BPO work",
        questions: [
          { objective: "O1", q: "You call people to remind them of unpaid bills. What kind of job is this?", options: ["Inbound voice", "Outbound voice", "Chat support", "Back office"], answer: 1, why: "You make the calls, so it is outbound voice." },
          { objective: "O1", q: "In BPO, what is the client?", options: ["The company that pays the BPO to do its work", "The customer who calls in", "The team leader", "The recruitment agency"], answer: 0, why: "The client pays the BPO; its customers are the people agents help." },
          { objective: "O2", q: "Which message is most likely a scam?", options: ["An email from the company's own address inviting you to an online test", "A job on the company's official careers page", "A WhatsApp message offering high pay if you send a fee today", "A phone interview set up through the official site"], answer: 2, why: "High pay, contact only by WhatsApp, a fee and pressure today are all warning signs." },
          { objective: "O2", q: "How should you find a company's real job listings?", options: ["Click the link in the recruiter's message", "Search the company's official website yourself and use its careers page", "Ask the recruiter to send a screenshot", "Trust any page with the company's logo"], answer: 1, why: "Finding the official site yourself avoids fake pages copied with the company's logo." },
          { objective: "O3", q: "What is a mock call?", options: ["A real call with an angry customer", "A call you make to your manager", "A recorded song", "A practice role play where someone acts as the customer"], answer: 3, why: "A mock call is a practice call used in hiring and training." }
        ]
      }
    },
    {
      name: "Chapter 2: Doing the job and moving up",
      lessons: [
        {
          title: "The call flow and the QA scorecard",
          objectives: ["O3"],
          minutes: 6,
          goal: "Handle a practice call that opens, verifies, solves, recaps and closes, and score it with a QA scorecard.",
          text: [
            "Every account has a call flow: the steps an agent follows on each call. A common flow is: open (greet, your name, the company, offer help); verify (confirm who the customer is with the account's security questions); probe (ask questions to find the real problem); resolve (fix it or explain the next step); recap (repeat what was done); and close (ask if there is anything else, thank them).",
            "A quality assurance (QA) team listens to recorded calls and scores them on a QA scorecard. Rows often include the opening, verification, listening and empathy, correct information, the notes you wrote, and the close. Some rows are compliance rows: skipping verification or sharing private data can fail the whole call.",
            "Verify only the way your account trains you. Never ask a customer for a full password or a one-time code they did not need to give, and never read private data to someone you have not verified. If you do not know an answer, put the customer on hold politely and check the knowledge base or ask a team leader."
          ],
          steps: [
            "Open: \"Thank you for calling [company], this is [name]. How may I help you today?\"",
            "Verify: ask the account's security questions before you discuss the account.",
            "Probe: ask open questions, then confirm the problem in one sentence.",
            "Resolve: fix it, or explain the next step and when it will happen.",
            "Recap and close: say what was done, ask if there is anything else, and thank them."
          ],
          words: [
            ["Call flow", "the set steps an agent follows on every call."],
            ["Verification", "checking the caller is the account owner before discussing the account."],
            ["QA (quality assurance)", "the team that listens to calls and scores them against a scorecard."],
            ["Compliance", "following the rules of the law and the client, such as privacy and verification rules."],
            ["Knowledge base", "the account's library of approved answers and steps."]
          ],
          slides: [
            { title: "A common call flow", bullets: ["Open, verify, probe", "Resolve, recap, close"] },
            { title: "The QA scorecard", bullets: ["QA listens to recorded calls", "Rows: opening, verification, empathy, accuracy, notes, close", "Compliance mistakes can fail the whole call"] },
            { title: "Protect the customer", bullets: ["Verify before you discuss the account", "Never ask for a password you do not need", "Unsure? Hold politely and check the knowledge base"] }
          ],
          tryIt: "Write a short script for a practice call: a customer's internet has been slow for two days. Use all six steps. Then do the call with a friend or record yourself playing both parts, and score it: for each step write Meets or Not yet.",
          youCanNow: "follow a call flow from opening to close and check your own call against a QA scorecard.",
          quickCheck: [
            { objective: "O3", q: "A caller asks about their account balance. What comes first?", options: ["Read the balance right away", "Ask for their full password", "Verify who they are with the account's security questions", "Transfer them to another team"], answer: 2, why: "Verification protects the customer's private data and is usually a compliance row on the scorecard." },
            { objective: "O3", q: "Which step comes just before the close?", options: ["The recap: saying what was done", "The opening", "Verification", "The greeting"], answer: 0, why: "The recap confirms what was done, so the customer leaves sure of the result." }
          ]
        },
        {
          title: "The numbers, the schedule and looking after yourself",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Explain the five main call center numbers and write a setup plan for shifts or home-based work.",
          text: [
            "Agents are measured with numbers, often called KPIs. Average handle time (AHT) is the average length of a contact, including hold and after-call notes. First contact resolution (FCR) is how often the problem is solved on the first contact. Customer satisfaction (CSAT) comes from short surveys after the contact. The QA score comes from the scorecard. Schedule adherence is how closely you follow your schedule: logging in on time and taking breaks at the planned times.",
            "The numbers pull against each other. Rushing lowers handle time but can hurt FCR and CSAT when customers call back. The honest way up is to know the knowledge base well, listen carefully, and write good notes so the next agent does not start again.",
            "Many accounts run 24 hours a day, so shifts can be at night, on weekends and on holidays, often matching the client's time zone. Plan your sleep (dark, quiet room, same hours each day), safe travel at night, meals and water. For home-based work: a quiet space, a headset, a fast enough connection, and a backup for power or internet, plus the company's rules for privacy at home."
          ],
          words: [
            ["KPI", "key performance indicator: a number used to measure how well work is done."],
            ["AHT (average handle time)", "the average length of a contact, including hold and after-call work."],
            ["FCR (first contact resolution)", "how often the problem is solved on the first call or chat."],
            ["CSAT (customer satisfaction)", "a score from short customer surveys after a contact."],
            ["Schedule adherence", "how closely an agent follows the planned schedule for login, breaks and logout."]
          ],
          slides: [
            { title: "Five numbers agents meet", bullets: ["AHT: average handle time", "FCR: solved on the first contact", "CSAT: customer survey score", "QA score and schedule adherence"] },
            { title: "Numbers pull against each other", bullets: ["Rushing lowers AHT but can hurt FCR and CSAT", "Know the knowledge base, listen, write good notes"] },
            { title: "Shift work", bullets: ["Nights, weekends and holidays in the client's time zone", "Same sleep hours in a dark, quiet room", "Plan safe travel at night, meals and water"] },
            { title: "Working from home", bullets: ["Quiet space and a headset", "Fast enough internet and a power or data backup", "Follow the company's privacy rules at home"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Practice report: Ama's AHT is 4 minutes (the team's is 6), her FCR is 55 percent (team 75 percent) and her CSAT is low. In two sentences, explain what is happening and one honest fix. Then write your own setup plan with at least five items: sleep, travel, meals, equipment and a power or internet backup.",
          youCanNow: "explain AHT, FCR, CSAT, QA score and schedule adherence, and plan your sleep, travel and setup for shift or home-based work.",
          quickCheck: [
            { objective: "O4", q: "An agent has a very short handle time but many customers call back. Which number is likely low?", options: ["Schedule adherence", "Typing speed", "Number of breaks", "First contact resolution"], answer: 3, why: "Customers calling back means problems were not solved the first time, so FCR is low." },
            { objective: "O5", q: "You work from home and your area has power cuts. What belongs in your setup plan?", options: ["Nothing; call in sick when the power goes", "A backup for power or internet and telling your team leader early", "Working in a busy cafe without asking", "Using a speakerphone in a shared room"], answer: 1, why: "A backup and early notice keep you working and keep the company's rules." }
          ]
        },
        {
          title: "Moving up and your 90-day plan",
          objectives: ["O6"],
          minutes: 5,
          goal: "Write a 90-day plan to get hired and name your next step up the BPO career ladder.",
          text: [
            "BPO has a ladder. Agents can become senior agents or subject matter experts (SMEs), then team leaders, then operations managers. Side paths include QA analyst, trainer, workforce management (planning schedules and staffing), recruiting, reporting and data, and IT support. Many companies prefer to promote people who already know the account.",
            "What helps you move up: steady numbers, good attendance, coaching others, a second language, and short courses. Some governments run training: the Philippines' TESDA sets standards and offers training and certification, and Kenya's Ajira Digital Program promotes online work. Check the official pages for what is offered now.",
            "Your 90-day plan puts it together. Weeks 1 to 2: choose the job type and check three employers on their official websites. Weeks 3 to 8: practise typing, reading aloud and mock calls on set days, and apply on official careers pages. Weeks 9 to 12: keep applying, follow up politely, and prepare for training. Then write one step up you want within a year."
          ],
          steps: [
            "Write the job type you want (voice or non-voice, inbound or outbound) and why.",
            "Check three real employers on their official websites and write the links.",
            "Add your scam checklist from Lesson 2.",
            "Put practice dates in a calendar: typing, reading aloud, mock calls.",
            "Write your shift or home setup plan from Lesson 5.",
            "Name one step up for the next year and one thing you will do toward it."
          ],
          words: [
            ["SME (subject matter expert)", "an experienced agent other agents ask for help on hard cases."],
            ["Team leader", "the supervisor who coaches a team of agents and watches their numbers."],
            ["Workforce management (WFM)", "the team that forecasts call volume and plans schedules and staffing."],
            ["TESDA", "the Philippine government agency for technical education and skills training."]
          ],
          slides: [
            { title: "The BPO ladder", bullets: ["Agent, senior agent or SME, team leader, operations manager", "Side paths: QA, trainer, workforce management, recruiting, IT"] },
            { title: "What helps you move up", bullets: ["Steady numbers and good attendance", "Coaching others and a second language", "Short courses and official training programs"] },
            { title: "Your 90-day plan", bullets: ["Weeks 1-2: job type and three checked employers", "Weeks 3-8: practise and apply on official sites", "Weeks 9-12: follow up and get ready for training"] }
          ],
          sources: [TESDA, AJIRA, IBPAP],
          tryIt: "Start your 90-day plan now. On paper or in a document, write today's date, the job type you want, the names and official website addresses of three employers you checked, and the dates of your first three practice sessions.",
          youCanNow: "write a dated 90-day plan to get hired in BPO and name your next step up.",
          quickCheck: [
            { objective: "O6", q: "Which is a real step up from agent in many BPOs?", options: ["Customer", "Client", "Team leader", "Recruitment fee"], answer: 2, why: "Agents often move to SME, then team leader, then operations manager." },
            { objective: "O6", q: "Where should the employers in your plan come from?", options: ["Their official websites, which you found yourself", "A WhatsApp group that sells job lists", "Any ad that promises high pay", "A recruiter who asks for a fee"], answer: 0, why: "Official websites you found yourself are the safest way to check an employer is real." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Doing the job and moving up",
        questions: [
          { objective: "O3", q: "On many QA scorecards, which mistake can fail the whole call?", options: ["Saying thank you twice", "A short pause before answering", "Smiling while you talk", "Skipping verification before sharing account details"], answer: 3, why: "Verification is a compliance row; skipping it puts the customer's data at risk." },
          { objective: "O4", q: "What does CSAT measure?", options: ["How long the call lasted", "How satisfied customers say they were in a survey", "How often you logged in on time", "How fast you type"], answer: 1, why: "CSAT is the customer satisfaction score from short surveys after a contact." },
          { objective: "O4", q: "You keep coming back from break 10 minutes late. Which number drops?", options: ["Schedule adherence", "First contact resolution", "Typing speed", "QA verification score"], answer: 0, why: "Schedule adherence measures how closely you follow your login and break times." },
          { objective: "O5", q: "You start night shifts next week. Which is a good plan?", options: ["Sleep at different times every day", "Drink energy drinks instead of sleeping", "Same sleep hours in a dark, quiet room and a safe way home", "Walk home alone on unlit roads"], answer: 2, why: "Regular sleep in a dark room and safe travel protect your health and safety on night shifts." },
          { objective: "O6", q: "What does workforce management (WFM) do?", options: ["Takes customer calls only", "Forecasts call volume and plans schedules and staffing", "Sells products to clients", "Checks your passport"], answer: 1, why: "WFM plans how many agents are needed and when." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Call Center and Outsourcing (BPO) Careers",
    questions: [
      { objective: "O1", q: "What does BPO stand for?", options: ["Business process outsourcing", "Basic phone operations", "Bank payment office", "Business product order"], answer: 0, why: "BPO is business process outsourcing: one company doing part of another company's work." },
      { objective: "O1", q: "You answer customer emails and chats for an online shop. What kind of job is this?", options: ["Outbound voice", "Inbound voice", "Non-voice support", "Field sales"], answer: 2, why: "Email and chat are non-voice work." },
      { objective: "O1", q: "An account serves French-speaking customers. Which skill matters most for its agents?", options: ["Driving a car", "Clear spoken and written French", "Fast handwriting", "Knowing many phone models"], answer: 1, why: "The account's language is often the key skill BPOs hire for." },
      { objective: "O2", q: "Which is a warning sign of a fake job?", options: ["An online test from the company's own website", "A job listed on the official careers page", "An interview set up by the company's own email", "A fee you must pay before you start"], answer: 3, why: "Real employers do not charge you to get hired." },
      { objective: "O2", q: "A \"recruiter\" sends you a check to deposit and asks you to send part back for equipment. What is this?", options: ["A common fake-check scam", "A normal way to buy a headset", "A signing bonus", "A training allowance"], answer: 0, why: "The check bounces later and you owe the bank the money you sent." },
      { objective: "O2", q: "An agency offers you a call center job abroad. What do you check first?", options: ["How many followers it has on social media", "Whether it promises high pay", "Whether it is licensed by your government's labour or migrant workers' office", "Whether it wants your original passport"], answer: 2, why: "A licensed agency can be checked on the official list; unlicensed ones are a major risk." },
      { objective: "O3", q: "Which is the best way to prepare for a BPO voice test?", options: ["Try to copy a different accent", "Record yourself reading aloud and fix unclear words", "Speak as fast as you can", "Memorise the client's prices"], answer: 1, why: "Recording and listening back helps you speak clearly at a steady pace." },
      { objective: "O3", q: "What is nesting?", options: ["Your first weeks on real calls with extra support", "A break room", "A kind of hiring fee", "A night shift bonus"], answer: 0, why: "Nesting comes after classroom training: real calls with coaching." },
      { objective: "O3", q: "In the call flow, what does the probe step do?", options: ["Thanks the customer", "Ends the call", "Puts the customer on hold", "Asks questions to find the real problem"], answer: 3, why: "Probing finds the real problem before you try to solve it." },
      { objective: "O3", q: "You do not know the answer to a customer's question. What do you do?", options: ["Guess so the call is shorter", "Hang up", "Hold politely and check the knowledge base or a team leader", "Tell them to call another company"], answer: 2, why: "Checking the approved answer keeps the information correct and the call professional." },
      { objective: "O4", q: "What does AHT include?", options: ["Only the time you talk", "Talk time, hold time and after-call notes", "Only your break time", "The time between shifts"], answer: 1, why: "Average handle time counts the whole contact, including hold and after-call work." },
      { objective: "O4", q: "Which is an honest way to raise first contact resolution?", options: ["Hang up on hard calls", "Tell customers to call back later", "Mark calls as solved when they are not", "Learn the knowledge base and confirm the fix before closing"], answer: 3, why: "Knowing the answers and confirming the fix solves more problems on the first contact." },
      { objective: "O4", q: "Who usually gives the QA score?", options: ["The quality team, using a scorecard on recorded calls", "The customer, in a survey", "The client's lawyer", "The recruitment agency"], answer: 0, why: "QA analysts listen to calls and score them on the scorecard; CSAT comes from customers." },
      { objective: "O5", q: "Why do many BPO jobs have night shifts?", options: ["Night calls pay no tax", "Offices are cheaper at night", "Accounts often follow the client's time zone and run 24 hours", "Customers only call at night"], answer: 2, why: "Many accounts serve customers in other time zones or run all day and night." },
      { objective: "O5", q: "Which item belongs in a home-based work setup plan?", options: ["A loud shared room", "A headset and a backup for power or internet", "A personal email for customer data", "A TV on during calls"], answer: 1, why: "A headset and a backup keep calls clear and keep you working during outages." },
      { objective: "O5", q: "Which is the safest plan for getting home after a late shift?", options: ["Plan a safe ride or company transport before the shift", "Accept a ride from any stranger", "Walk alone through unlit streets", "Decide when the shift ends"], answer: 0, why: "Planning safe travel in advance protects you at night." },
      { objective: "O6", q: "Which is a side path in a BPO career?", options: ["Customer", "Recruitment fee", "Caller", "Quality assurance analyst"], answer: 3, why: "QA, training, workforce management and recruiting are common side paths." },
      { objective: "O6", q: "What goes in weeks 3 to 8 of your 90-day plan?", options: ["Nothing; wait for a call", "Paying a recruiter to find you a job", "Practice on set days and applying on official careers pages", "Giving your passport to an agency"], answer: 2, why: "Steady practice and applying on official pages is the core of the plan." },
      { objective: "O6", q: "Which helps an agent get promoted to team leader?", options: ["Steady numbers, good attendance and helping others", "Coming back late from breaks", "Avoiding coaching", "Changing accounts every month"], answer: 0, why: "Reliable numbers, attendance and coaching others show leadership." },
      { objective: "O2", q: "You find out a job offer was fake after sending your ID photo. What do you do?", options: ["Send more documents to prove yourself", "Pay the fee so they return your photo", "Delete the messages and forget it", "Stop contact, keep screenshots and report it to the police or the official fraud office"], answer: 3, why: "Keeping proof and reporting it helps protect you and others from identity misuse." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 4, 6, 10, 13, 16, 8] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Job type chosen", objective: "O1", notYet: "No job type, or voice and non-voice are mixed up.", meets: "Names voice or non-voice and inbound or outbound, with the main skill it needs.", exceeds: "Also explains why it fits their own skills and languages." },
      { name: "Employers checked and scams avoided", objective: "O2", notYet: "Employers come from ads or messages, or the plan includes paying a fee.", meets: "Three employers with official website links, and a scam checklist of at least four signs.", exceeds: "Also notes how to check an agency's license for jobs abroad and where to report a scam." },
      { name: "Practice call", objective: "O3", notYet: "The recorded call skips steps, or skips verification.", meets: "Opens, verifies, probes, resolves, recaps and closes; Meets on every scorecard row.", exceeds: "The learner names one thing to improve and records a better second try." },
      { name: "Knows the numbers", objective: "O4", notYet: "Cannot say what AHT, FCR, CSAT, QA score and adherence measure.", meets: "Explains all five, each with one honest way to improve.", exceeds: "Explains how rushing can lower AHT but hurt FCR and CSAT." },
      { name: "Setup plan", objective: "O5", notYet: "Fewer than five items, or no backup plan.", meets: "At least five items: sleep, travel, meals, equipment and a power or internet backup.", exceeds: "Adds the employer's privacy rules for home work and a plan to tell the team leader early about problems." },
      { name: "90-day plan", objective: "O6", notYet: "No dates, or no step up named.", meets: "Dated practice and application steps over 90 days and one step up within a year.", exceeds: "Names a specific skill or course for the step up and when they will start it." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply to at least three checked BPO employers within 30 days (follow-up survey)",
      "Learners who are invited to a hiring test or interview, and who are hired, within 90 days",
      "Learners who report a scam attempt they recognised and did not pay",
      "Hired learners still working after 90 days (the first months are when many people leave)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet; paper and pen for every task",
      "A phone that records audio for the reading-aloud and mock-call practice",
      "A partner for mock calls (a friend, family member or classmate), or the learner playing both parts",
      "A printed page from a book or newspaper for typing practice, and any text editor",
      "About 70 minutes in total, in short sessions, plus practice over the 90-day plan"
    ],
    facilitatorNotes: [
      "Take the pre-test together. Then do one chapter per session, with mock calls in pairs during Chapter 2.",
      "Bring real local job ads, with company names removed, and have learners sort them by job type and check them for scam signs.",
      "If you can, invite a team leader, recruiter or trainer from a local BPO to explain their real hiring steps; hiring tests differ by company.",
      "Never ask learners to share real ID numbers, passwords or bank details in practice; use made-up account details.",
      "For jobs abroad, show learners the official list of licensed recruitment agencies in your country and where to report illegal recruitment.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
