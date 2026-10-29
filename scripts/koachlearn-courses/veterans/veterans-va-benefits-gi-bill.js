"use strict";

// Koach Learn course: Veterans -> "VA Benefits and the GI Bill" (one of the life-skills courses the owner asked for on 28 October 2026).
// Facts from va.gov (disability claims, health care application, GI Bill programs and how to apply, accredited representatives), checked 28 October 2026.
// Teaches how to apply, how the GI Bill works, and how to get free help from accredited Veterans Service Officers; warns about people who charge to file.
// Shape: see scripts/koachlearn-courses/README.md and the model course re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "VA Benefits and the GI Bill",
  skills: "Getting your documents ready, Filing a disability claim, Applying for VA health care, Understanding the GI Bill, Applying for education benefits, Getting free help from an accredited VSO",
  outcome: "make and start a VA benefits action plan: gather your documents, apply for disability compensation, health care or the GI Bill the right way, and get free help from a VA-accredited Veterans Service Officer instead of paying someone to file.",
  about: [
    "This course is for veterans, service members getting ready to separate, and family members who help them. Many veterans never apply for benefits they earned, or wait years, because the process looks confusing.",
    "You will gather the papers VA asks for, learn the ways to file a disability claim and apply for health care, learn what the GI Bill can pay for and how to apply, and find a free, VA-accredited representative to help you. You will also learn the warning signs of people who charge to file claims.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. VA rules, forms and processing times change, so confirm details on va.gov or with an accredited representative before you file."
  ],
  finalTask: "Make your VA benefits action plan: (1) a checklist of your documents, starting with your DD214; (2) each benefit you will apply for (disability compensation, health care, education) and how you will apply; (3) if you will use the GI Bill, which program, which school or training, and what you need for it; (4) the name and contact details of a VA-accredited representative or VSO you found with VA's search tool; (5) three warning signs of someone who should not be paid to file your claim. Then take the first step on one benefit.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans, service members getting ready to separate, and family members who help them. Many have never applied for benefits they earned, or have waited years because the process looks confusing.",
    startingPoint: "Can use a phone or computer and have, or can request, their DD214. Most do not know which forms to use, how to protect a claim's start date, how GI Bill programs differ, or that accredited help is free.",
    gap: "Veterans lose money and care by not applying, by missing deadlines, or by paying people who should not charge to file. Learners need a clear action plan: documents ready, the right way to apply for each benefit, a GI Bill plan, and a free VA-accredited representative.",
    constraints: [
      "Reading level: plain words and short sentences; VA terms are explained",
      "Devices: a phone or computer; paper applications are also covered",
      "Privacy: no Social Security numbers, medical details or va.gov sign-ins in AI chatbots or with unaccredited helpers",
      "Forms, rules and phone numbers change, so learners confirm them on va.gov before acting",
      "Health and legal decisions go to VA or an accredited representative, not the course"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Before you apply for any VA benefit", action: "gather the documents VA asks for, starting with your DD214, and list the benefits you may apply for", standard: "with missing documents marked and copies kept in a safe place" },
    { id: "O2", condition: "For conditions you think are connected to your service", action: "choose how you will file a disability claim and list evidence for each condition", standard: "using an official way to file and protecting your start date" },
    { id: "O3", condition: "Using a practice checklist", action: "prepare the information for a VA health care application (10-10EZ) and choose how you will apply", standard: "with your service history, exposures, insurance and income marked as ready or still needed" },
    { id: "O4", condition: "Given your career goal", action: "describe the main GI Bill programs and two kinds of training they could pay for", standard: "naming training that fits your goal" },
    { id: "O5", condition: "Given two schools or training programs", action: "compare them in the GI Bill Comparison Tool and plan your education benefit application", standard: "with two facts about each and your application checked before you submit" },
    { id: "O6", condition: "When you want help with a claim", action: "find a free VA-accredited representative and identify the warning signs of someone who should not be paid", standard: "with a representative's name and contact and three warning signs written down" }
  ],
  chapters: [
    {
      name: "Chapter 1: Applying for VA benefits",
      lessons: [
        {
          objectives: ["O1"],
          title: "Getting ready: your documents and your benefits list",
          minutes: 5,
          goal: "Gather the documents VA asks for and list the benefits you may apply for.",
          text: [
            "VA benefits are things you earned through your service. Common ones include disability compensation (monthly payments for conditions caused or made worse by service), VA health care, education benefits such as the GI Bill, and Veteran Readiness and Employment. There are others, such as home loan help, pension and burial benefits. Each has its own rules.",
            "The most important paper is your DD214 or other separation documents. VA uses it to confirm your service. Keep copies in a safe place. If you cannot find yours, va.gov explains how to request your military records.",
            "Other things VA may ask for: your Social Security number, bank details for direct deposit, your medical records and the names of your doctors, information about your spouse and dependents, insurance cards, and your income from last year for some health care decisions.",
            "Make a sign-in account on va.gov so you can apply online, upload documents and check status. Use the official site only. Do not share your sign-in with anyone, and never type your Social Security number or medical details into an AI chatbot."
          ],
          steps: ["Find your DD214 or other separation papers and make copies.", "Gather medical records and a list of your doctors.", "Write down which benefits you want to look at: disability, health care, education, others.", "Create a sign-in account on va.gov.", "Keep everything in one folder."],
          words: [["DD214", "the document that shows your military service and how you separated."], ["Disability compensation", "monthly, tax-free payments for conditions caused or made worse by military service."], ["Dependent", "a spouse, child or other family member who relies on you."]],
          slides: [
            { title: "Benefits you earned", bullets: ["Disability compensation", "VA health care", "Education: the GI Bill", "Veteran Readiness and Employment, and more"] },
            { title: "Your most important paper", bullets: ["DD214 or other separation papers", "Keep copies safe", "Lost it? va.gov explains how to request records"] },
            { title: "Other things VA may ask for", bullets: ["Medical records and doctors", "Spouse and dependent details", "Bank details for direct deposit"] },
            { title: "Your va.gov account", bullets: ["Apply, upload and check status online", "Use the official site only", "Never share your sign-in"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Make a folder (paper or a secure folder on your own computer) and put in it, or list what is missing: your DD214, medical records, a list of your doctors and your dependents' details. Write down the benefits you want to look at.",
          youCanNow: "gather the documents VA asks for and list the benefits you may apply for.",
          quickCheck: [
            { objective: "O1", q: "Why keep copies of your DD214 in a safe place?", options: ["So you can post it online", "So an AI can read it", "VA uses it to confirm your service, and you will need it again", "It expires after one year"], answer: 2, why: "Your DD214 confirms your service for many benefits, so keep copies safe." },
            { objective: "O1", q: "You want an AI chatbot to help you understand your benefits. What do you leave out?", options: ["Your Social Security number and medical details", "The name of the benefit", "The word \"veteran\"", "Your question"], answer: 0, why: "Private numbers and medical details never go into an AI chatbot." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Filing a disability compensation claim",
          minutes: 6,
          goal: "Choose how you will file a disability claim and protect your start date.",
          text: [
            "You can file a disability claim online on va.gov, by mail using VA Form 21-526EZ, in person at a VA regional office, or with help from an accredited representative. VA says that starting the online form sets your effective date automatically.",
            "Your effective date matters because it can decide when payments start counting from. If you start online, VA will use the date you started as your date of claim as long as you finish within 365 days. If you file on paper, you can submit an intent to file first to hold a possible effective date while you gather evidence.",
            "Evidence makes or breaks a claim. VA reviews your DD214 or separation papers and your service treatment records. Add what you have: private doctor records, and statements from you or people who saw how the condition affects you. List every condition you believe is connected to your service.",
            "After you file, VA may schedule an exam. Go to it. Check your claim status on va.gov. VA publishes its average processing time, which changes, so check va.gov for the current number. If you disagree with a decision, there are ways to ask for a review; an accredited representative can help."
          ],
          steps: ["Decide how to file: online, by mail (VA Form 21-526EZ), in person, or with an accredited representative.", "If filing online, start the form to set your date, and finish within 365 days.", "If filing on paper, think about submitting an intent to file first.", "List every condition and gather your evidence.", "Go to any VA exam and check your status on va.gov."],
          words: [["Effective date", "the date VA uses to decide when your benefit payments start counting from."], ["Intent to file", "a notice to VA that you plan to file, which can hold your effective date while you gather evidence."], ["Evidence", "records and statements that support your claim."], ["Service connection", "a link between a health condition and your military service."]],
          slides: [
            { title: "Four ways to file", bullets: ["Online at va.gov", "By mail: VA Form 21-526EZ", "In person at a VA regional office", "With an accredited representative"] },
            { title: "Protect your start date", bullets: ["Online: start date counts if done in 365 days", "Paper: consider an intent to file first"] },
            { title: "Evidence wins claims", bullets: ["DD214 and service treatment records", "Private doctor records", "Statements from you and witnesses"] },
            { title: "After you file", bullets: ["Go to your VA exam", "Check status on va.gov", "Disagree? Ask an accredited rep about a review"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Write down every health condition you think may be connected to your service. Next to each, write one piece of evidence you have or could get. Then decide which way you will file and write it at the top.",
          youCanNow: "choose how to file a disability claim, protect your effective date and gather evidence for each condition.",
          quickCheck: [
            { objective: "O2", q: "Which is an official way to file a disability claim?", options: ["Texting a stranger who offers help", "Posting in a social media group", "Emailing a company that charges a percentage", "Online at va.gov"], answer: 3, why: "Filing online at va.gov is one of VA's official ways to file." },
            { objective: "O2", q: "You listed a knee condition from service. What do you write next to it?", options: ["Nothing; VA will find everything", "One piece of evidence, such as service treatment or doctor records", "A guess at your rating", "Your va.gov password"], answer: 1, why: "Each condition needs evidence, such as service treatment or doctor records." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Applying for VA health care",
          minutes: 4,
          goal: "Apply for VA health care with the right information ready.",
          text: [
            "VA health care is a separate application from disability compensation. You apply with VA Form 10-10EZ, the Application for Health Benefits.",
            "You can apply online on va.gov, by phone through the VA health benefits hotline at 877-222-8387 (VA lists it as Monday to Friday, 8:00 a.m. to 8:00 p.m. Eastern time), by mail, or in person at a VA medical center or clinic. An accredited representative can also help.",
            "Have ready: your DD214 and service history, including any toxic or hazardous exposures; Social Security numbers for you, your spouse and qualified dependents; your insurance cards, including Medicare or a job plan; and your household income from last year. VA says you may leave income out, but it may need it to decide your application.",
            "Example: a Marine who served overseas has asthma and wants a primary care doctor. He applies online for health care the same week he files his disability claim, lists his exposure history, and books his first appointment once he is enrolled."
          ],
          steps: ["Gather your DD214, exposure history, Social Security numbers and insurance cards.", "Write down last year's household income.", "Apply online at va.gov, by phone at 877-222-8387, by mail, or in person.", "Watch for VA's decision and book your first appointment."],
          words: [["VA Form 10-10EZ", "the application for VA health benefits."], ["Toxic exposure", "contact during service with harmful things like burn pits, chemicals or radiation."]],
          slides: [
            { title: "A separate application", bullets: ["Health care is not the same as a disability claim", "Form: VA Form 10-10EZ"] },
            { title: "Ways to apply", bullets: ["Online at va.gov", "Phone: 877-222-8387", "Mail, or in person at a VA facility"] },
            { title: "Have ready", bullets: ["DD214 and exposure history", "Social Security numbers and insurance cards", "Last year's household income"] }
          ],
          sources: [{ name: "VA: How to apply for VA health care", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Fill in a practice checklist for the 10-10EZ: DD214 (have it or not), exposure history, insurance cards, last year's household income. Mark what you have and what you still need, and choose how you will apply.",
          youCanNow: "apply for VA health care with the right information and know the ways to apply.",
          quickCheck: [
            { objective: "O3", q: "What is VA Form 10-10EZ for?", options: ["Filing a disability claim", "Applying for VA health care", "Applying for the GI Bill", "Choosing a VSO"], answer: 1, why: "The 10-10EZ is the application for VA health care." },
            { objective: "O3", q: "You are filling in your health care checklist. What do you include about your service?", options: ["Nothing about your service", "Only your rank", "Only your favorite base", "Your service history, including any toxic or hazardous exposures"], answer: 3, why: "VA asks about your service history and exposures when you apply for health care." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Applying for VA benefits",
        questions: [
          { objective: "O1", q: "Which document does VA use to confirm your service?", options: ["Your driver's license", "A pay stub from a civilian job", "Your DD214 or other separation papers", "A gym membership card"], answer: 2, why: "VA reviews your DD214 or separation documents." },
          { objective: "O2", q: "You started an online disability claim but need time to get records. How long do you have to finish and keep your start date?", options: ["365 days", "7 days", "30 days", "There is no start date"], answer: 0, why: "VA says the date you started counts if you finish within 365 days." },
          { objective: "O2", q: "What is VA Form 21-526EZ for?", options: ["Applying for the GI Bill", "Applying for VA health care", "Changing your address", "Applying for disability compensation by mail"], answer: 3, why: "It is the Application for Disability Compensation." },
          { objective: "O3", q: "Which form is used to apply for VA health care?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "A W-2"], answer: 1, why: "The 10-10EZ is the Application for Health Benefits." },
          { objective: "O2", q: "You file a disability claim. What should you also do?", options: ["Go to any VA exam scheduled for you", "Ignore VA letters", "Pay someone to speed it up", "File the same claim many times"], answer: 0, why: "The exam is part of the decision; missing it can hurt your claim." }
        ]
      }
    },
    {
      name: "Chapter 2: The GI Bill and free help",
      lessons: [
        {
          objectives: ["O4"],
          title: "Understanding the GI Bill",
          minutes: 5,
          goal: "Name the main GI Bill programs and list what they can pay for.",
          text: [
            "The GI Bill helps pay for school and training. The main program today is the Post-9/11 GI Bill (Chapter 33), for people who served on active duty after September 10, 2001. It can help pay for school and cover costs while you train for a job.",
            "Other programs include the Montgomery GI Bill Active Duty (Chapter 30) and the Montgomery GI Bill Selected Reserve (Chapter 1606) for members of the Reserve and National Guard. Which one you can use depends on your service.",
            "The GI Bill is not only for four-year college. VA lists uses such as undergraduate and graduate degrees, non-college degree programs, on-the-job training and apprenticeships, licensing and certification tests, flight training, online learning and more. The Yellow Ribbon Program can help cover tuition the Post-9/11 GI Bill does not, at schools that take part.",
            "Some service members can transfer unused Post-9/11 benefits to a spouse or children. If you already have Post-9/11 benefits, check how much you have left on your GI Bill Statement of Benefits on va.gov."
          ],
          words: [["GI Bill", "VA education benefits that help pay for school or training."], ["Post-9/11 GI Bill", "the GI Bill for people who served on active duty after September 10, 2001 (Chapter 33)."], ["Yellow Ribbon Program", "a program that can cover tuition the Post-9/11 GI Bill does not, at schools that take part."], ["Apprenticeship", "paid on-the-job training for a skilled trade."]],
          slides: [
            { title: "Main GI Bill programs", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "Not just college", bullets: ["Degrees and non-college programs", "Apprenticeships and on-the-job training", "Licensing and certification tests"] },
            { title: "Extra help", bullets: ["Yellow Ribbon: tuition the GI Bill does not cover", "Transfer to a spouse or children, for some"] },
            { title: "Check what you have left", bullets: ["GI Bill Statement of Benefits on va.gov"] }
          ],
          sources: [{ name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Write down the career you want. Then write two kinds of GI Bill-eligible training that could get you there, for example an electrician apprenticeship and a certificate program, or a degree and a licensing test.",
          youCanNow: "name the main GI Bill programs and match GI Bill-eligible training to a career goal.",
          quickCheck: [
            { objective: "O4", q: "What is the Post-9/11 GI Bill also called?", options: ["Chapter 33", "Form 10-10EZ", "VetCert", "Chapter 1"], answer: 0, why: "The Post-9/11 GI Bill is Chapter 33." },
            { objective: "O4", q: "You want to become an electrician without a four-year degree. What do you write in your plan?", options: ["The GI Bill only pays for degrees", "Give up on the GI Bill", "An apprenticeship or on-the-job training the GI Bill can help with", "Pay for everything yourself"], answer: 2, why: "The GI Bill can help with apprenticeships and on-the-job training, not only degrees." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Applying for the GI Bill and choosing a school",
          minutes: 5,
          goal: "Apply for education benefits and compare schools before you enroll.",
          text: [
            "Apply for education benefits online at va.gov. If you apply by mail, use VA Form 22-1990, the Application for VA Education Benefits, for the Post-9/11 GI Bill and the Montgomery GI Bill programs. Family members using transferred benefits use a different form, VA Form 22-1990e.",
            "Have ready: your Social Security number, bank details for direct deposit, your education and military history, and basic details about the school or training program. VA says you cannot change the application after you submit it, so check it first.",
            "VA says it takes about 30 days on average to process education claims, but check va.gov for current times. When you are approved, VA sends a Certificate of Eligibility. Give a copy to your school's certifying official, often found in the veterans or military services office.",
            "Before you enroll, compare schools with VA's GI Bill Comparison Tool on va.gov, and ask the school about costs, job results and whether it takes part in Yellow Ribbon. Be careful of schools that pressure you to sign up fast."
          ],
          steps: ["Choose your program and school or training.", "Compare it with the GI Bill Comparison Tool on va.gov.", "Gather your Social Security number, bank details, education and military history.", "Apply online, or by mail with VA Form 22-1990.", "Give your Certificate of Eligibility to the school's certifying official."],
          words: [["Certificate of Eligibility (COE)", "VA's letter that shows which education benefit you have and how much."], ["School certifying official", "the person at a school who tells VA you are enrolled."], ["VA Form 22-1990", "the Application for VA Education Benefits."]],
          slides: [
            { title: "How to apply", bullets: ["Online at va.gov", "By mail: VA Form 22-1990", "Family using transferred benefits: 22-1990e"] },
            { title: "Have ready", bullets: ["Social Security number and bank details", "Education and military history", "School or program details"] },
            { title: "After you apply", bullets: ["About 30 days on average; check va.gov", "You get a Certificate of Eligibility", "Give it to the school's certifying official"] },
            { title: "Compare before you enroll", bullets: ["GI Bill Comparison Tool on va.gov", "Ask about costs, job results, Yellow Ribbon", "Walk away from pressure to sign fast"] }
          ],
          sources: [
            { name: "VA: How to apply for the GI Bill and related benefits", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA: GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Pick two schools or training programs for your career goal. Look each one up in the GI Bill Comparison Tool on va.gov, and write down two facts about each and one question you would ask its veterans office.",
          youCanNow: "apply for GI Bill benefits, compare schools before enrolling and use your Certificate of Eligibility.",
          quickCheck: [
            { objective: "O5", q: "What does the GI Bill Comparison Tool help you do?", options: ["File a disability claim", "Find a VSO", "Compare schools and training programs before you enroll", "Change your GI Bill after you submit"], answer: 2, why: "The Comparison Tool shows facts about schools and programs so you can compare them." },
            { objective: "O5", q: "You finished your GI Bill application. What do you do before you submit?", options: ["Check it carefully, because you cannot change it after you submit", "Submit it fast and fix it later", "Ask a stranger to submit it", "Leave fields blank"], answer: 0, why: "You cannot change the application after you submit it, so check it first." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Getting free help, and avoiding people who charge to file",
          minutes: 5,
          goal: "Find a free, VA-accredited representative and spot people who should not be paid.",
          text: [
            "You do not have to file alone. VA accredits three kinds of representatives: Veterans Service Organization (VSO) representatives, attorneys and claims agents. VA says the services of an accredited VSO representative on your claim are always free. They can help gather evidence, file a claim, ask for a decision review and talk with VA for you. Many states and counties also have veterans service officers.",
            "Find one with VA's tool, \"Find a VA-accredited representative or VSO\", on va.gov. VA says to make sure anyone helping with your claim is accredited before you choose them.",
            "Attorneys and claims agents may charge fees, but VA says only after VA has decided your initial claim, and only with a signed fee agreement. That means anyone who charges you to file your first claim, or promises a higher rating for a fee, is a warning sign. Some unaccredited people, sometimes called \"claim sharks\", ask for a share of your future back pay, sign-in details or upfront fees.",
            "Never give anyone your va.gov sign-in. If you believe a representative acted wrongly or charged an unfair fee, you can contact VA's Office of General Counsel, and you must act quickly on fee disputes."
          ],
          steps: ["Open VA's \"Find a VA-accredited representative or VSO\" tool on va.gov.", "Search near you and choose a VSO representative (free).", "Confirm they are accredited before you share anything.", "Never pay to file an initial claim, and never share your va.gov sign-in.", "Report problems to VA's Office of General Counsel."],
          words: [["VSO", "Veterans Service Organization: a group whose accredited representatives help veterans with claims for free."], ["Accredited", "approved by VA to help with VA claims."], ["Claim shark", "an unaccredited person or company that charges veterans to file claims."]],
          slides: [
            { title: "Free help exists", bullets: ["Accredited VSO representatives are always free", "They gather evidence, file and talk with VA"] },
            { title: "Find one", bullets: ["VA's Find a VA-accredited representative tool", "Check accreditation before you choose"] },
            { title: "Warning signs", bullets: ["Charges to file your first claim", "Promises a higher rating for a fee", "Wants your va.gov sign-in or a share of back pay"] },
            { title: "Protect yourself", bullets: ["Never share your va.gov sign-in", "Report problems to VA's Office of General Counsel"] }
          ],
          sources: [
            { name: "VA: Accredited representative FAQs", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA: Find a VA-accredited representative or VSO", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Final task: use VA's \"Find a VA-accredited representative or VSO\" tool to find one free representative near you and write down their name and how to reach them. Then finish your VA benefits action plan with your document checklist, the benefits you will apply for and how, your GI Bill plan if you have one, and three warning signs of claim sharks. Take the first step on one benefit.",
          youCanNow: "find a free, accredited VSO, spot people who should not be paid to file, and start your VA benefits action plan.",
          quickCheck: [
            { objective: "O6", q: "Who does VA accredit to help with claims?", options: ["Anyone with a website", "Any company that advertises to veterans", "Friends who filed before", "VSO representatives, attorneys and claims agents"], answer: 3, why: "VA accredits VSO representatives, attorneys and claims agents." },
            { objective: "O6", q: "A helper says they will file your first claim fast if you share your va.gov sign-in. What do you do?", options: ["Share it to save time", "Refuse, and find a free accredited representative with VA's search tool", "Share only your password", "Pay them first"], answer: 1, why: "Never share your sign-in; free accredited help is available through VA's search tool." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: The GI Bill and free help",
        questions: [
          { objective: "O4", q: "Who is the Post-9/11 GI Bill for?", options: ["Anyone who lives in the US", "Only officers", "Only spouses", "People who served on active duty after September 10, 2001"], answer: 3, why: "VA says the Post-9/11 GI Bill is for active-duty service after September 10, 2001." },
          { objective: "O4", q: "Which of these can the GI Bill help pay for?", options: ["A car loan", "An apprenticeship or a licensing test", "Rent at your parents' house", "Your phone bill"], answer: 1, why: "VA lists apprenticeships, on-the-job training and licensing tests among GI Bill uses." },
          { objective: "O5", q: "After you are approved for the GI Bill, who gets a copy of your Certificate of Eligibility?", options: ["A recruiter", "Your landlord", "Your school's certifying official", "Nobody"], answer: 2, why: "The school's certifying official uses it to report your enrollment to VA." },
          { objective: "O6", q: "How much does an accredited VSO representative charge to help with your claim?", options: ["Nothing; it is always free", "A share of your back pay", "A fee before filing", "One month of payments"], answer: 0, why: "VA says accredited VSO representatives' services are always free." },
          { objective: "O6", q: "A company offers to file your first disability claim for 20% of your back pay. What is this?", options: ["A normal VA fee", "A VA program", "A warning sign; use a free accredited VSO instead", "Required by law"], answer: 2, why: "Fees are allowed only after VA decides the initial claim, with a signed agreement, and only by accredited attorneys or agents." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: VA Benefits and the GI Bill",
    questions: [
      { objective: "O2", q: "What is disability compensation?", options: ["A one-time gift card", "Monthly payments for conditions caused or made worse by service", "A school loan", "A job offer"], answer: 1, why: "It pays veterans for service-connected conditions." },
      { objective: "O1", q: "What should you do with your DD214?", options: ["Keep copies in a safe place", "Throw it away after you separate", "Post it online", "Give the original to anyone who asks"], answer: 0, why: "VA uses it to confirm your service, so keep it safe." },
      { objective: "O1", q: "Where should you apply for VA benefits online?", options: ["Any site with a flag on it", "A link in a text message", "The official site va.gov", "A social media page"], answer: 2, why: "Use only the official VA site." },
      { objective: "O1", q: "What should you NEVER type into an AI chatbot?", options: ["\"Explain what an effective date is\"", "\"Help me list questions for my VSO\"", "\"What is the GI Bill?\"", "Your Social Security number or medical details"], answer: 3, why: "Keep private information out of AI tools." },
      { objective: "O2", q: "Which is NOT one of the ways to file a disability claim?", options: ["Online at va.gov", "By mail with VA Form 21-526EZ", "In person at a VA regional office", "By texting a stranger who offers help"], answer: 3, why: "File online, by mail, in person or with an accredited representative." },
      { objective: "O2", q: "You plan to file on paper but need time to gather evidence. What can help protect your effective date?", options: ["An intent to file", "Waiting a few years", "Filing nothing", "Calling a claim shark"], answer: 0, why: "An intent to file can hold a possible effective date." },
      { objective: "O2", q: "Which is good evidence for a disability claim?", options: ["A guess about what VA wants", "Service treatment records and doctor records", "A social media post", "A friend's claim decision"], answer: 1, why: "Records and witness statements support your claim." },
      { objective: "O2", q: "VA schedules an exam for your claim. You should:", options: ["Skip it", "Send someone else", "Go to it", "Ask a claim shark to go"], answer: 2, why: "The exam is part of the decision." },
      { objective: "O3", q: "VA health care uses which application?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "A DD214"], answer: 0, why: "The 10-10EZ is the Application for Health Benefits." },
      { objective: "O3", q: "When applying for VA health care, what should you include about your service?", options: ["Only your rank", "Nothing at all", "Your favorite base", "Your service history, including any toxic or hazardous exposures"], answer: 3, why: "VA asks for service history and exposures." },
      { objective: "O3", q: "What phone number does VA list for help applying for health care?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "VA lists 877-222-8387 for the health benefits hotline." },
      { objective: "O4", q: "The Post-9/11 GI Bill is also called:", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "The DD214"], answer: 1, why: "The Post-9/11 GI Bill is Chapter 33." },
      { objective: "O4", q: "A veteran wants to become an electrician without a four-year degree. Can the GI Bill help?", options: ["No, it only pays for four-year college", "Yes, it can help with apprenticeships and on-the-job training", "Only if she moves abroad", "Only for officers"], answer: 1, why: "VA lists apprenticeships and on-the-job training among GI Bill uses." },
      { objective: "O4", q: "The Yellow Ribbon Program can:", options: ["Pay your rent", "Replace your DD214", "Speed up disability claims", "Help cover tuition the Post-9/11 GI Bill does not, at schools that take part"], answer: 3, why: "Yellow Ribbon helps with tuition above the GI Bill's coverage." },
      { objective: "O5", q: "If you apply for the GI Bill by mail, which form do you use?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "A tax form"], answer: 0, why: "VA Form 22-1990 is the Application for VA Education Benefits." },
      { objective: "O5", q: "Before you enroll in a school with the GI Bill, you should:", options: ["Sign up the same day the recruiter calls", "Skip comparing", "Compare it with the GI Bill Comparison Tool and ask about costs and job results", "Pay a deposit before reading anything"], answer: 2, why: "Comparing first protects your benefits." },
      { objective: "O5", q: "Can you change your GI Bill application after you submit it?", options: ["Yes, any time", "Yes, by calling a school", "Only on weekends", "No, so check it before you submit"], answer: 3, why: "VA says you cannot make changes after submitting." },
      { objective: "O6", q: "Which of these is accredited by VA to help with claims?", options: ["VSO representatives, attorneys and claims agents", "Any website", "Any person who served", "Car dealers"], answer: 0, why: "VA's Office of General Counsel accredits these three types." },
      { objective: "O6", q: "When may an accredited attorney or claims agent charge a fee?", options: ["Before filing your first claim", "Only after VA has decided your initial claim and with a signed fee agreement", "Any time they want", "Never under any rule"], answer: 1, why: "VA says fees can come only after the initial decision, with a signed agreement." },
      { objective: "O6", q: "Someone helping with your claim asks for your va.gov sign-in. You should:", options: ["Share it so they can work faster", "Write it on a sticky note for them", "Refuse; never share your sign-in", "Change it to something simpler"], answer: 2, why: "Never give anyone your va.gov sign-in." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      5,
      8,
      9,
      12,
      15,
      18,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Document checklist",
        objective: "O1",
        notYet: "No checklist, or the DD214 is not on it.",
        meets: "A checklist starting with the DD214, with missing documents marked.",
        exceeds: "Notes where each document is kept and how to get any that are missing."
      },
      {
        name: "Benefits and how to apply",
        objective: "O2",
        notYet: "Benefits are listed without how to apply.",
        meets: "Each benefit (disability compensation, health care, education) with an official way to apply.",
        exceeds: "Includes how the learner will protect the start date or which form they will use."
      },
      {
        name: "GI Bill plan",
        objective: "O5",
        notYet: "No program or school named, if the learner will use the GI Bill.",
        meets: "The program, the school or training, and what is needed for it.",
        exceeds: "Two options compared in the GI Bill Comparison Tool."
      },
      {
        name: "Free accredited help",
        objective: "O6",
        notYet: "No representative, or a paid company that is not accredited.",
        meets: "The name and contact details of a VA-accredited representative or VSO from VA's search tool.",
        exceeds: "The learner has contacted them or booked an appointment."
      },
      {
        name: "Claim shark warning signs",
        objective: "O6",
        notYet: "Fewer than three warning signs.",
        meets: "Three warning signs of someone who should not be paid to file.",
        exceeds: "The learner explains when an accredited attorney or claims agent may charge."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who submit at least one VA application or intent to file within 30 days (follow-up survey)",
      "Learners who contact a free accredited representative or VSO within 30 days",
      "Learners who enroll in GI Bill-funded training within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A folder (paper, or a secure folder on the learner's own computer) for documents",
      "The learner's DD214 or other separation papers, if they have them",
      "The free va.gov website, including the GI Bill Comparison Tool and the accredited representative search",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Never collect or look at learners' DD214s, medical records or Social Security numbers; learners keep their own folders.",
      "Invite a VA-accredited VSO to the last session so learners can meet free help in person.",
      "Confirm forms, phone numbers and rules on va.gov during the session, since they can change.",
      "Do not advise on medical or legal questions; send them to VA or an accredited representative.",
      "Score the action plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
