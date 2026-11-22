"use strict";

// Koach Learn course (wave 3, abroad): "Choosing a Vocational Training (TVET) Program". Global examples (Kenya, Nigeria, Ghana, the Philippines, India, Mexico,
// Colombia, Morocco, Egypt, Senegal, and the US) because it is translated into ten languages. ADDIE shape as in re-entry/reentry-ai-digital-confidence.js.
// The course teaches how to choose and check a program; it does not grant any certificate or recommend a particular school.

module.exports = {
  id: "tvet-choosing-a-program",
  category: "Workforce Development",
  name: "Choosing a Vocational Training (TVET) Program",
  skills: "Matching a trade to you and local jobs, Comparing types of programs, Checking accreditation on official registers, Asking a school the right questions, Spotting fake schools and training scams, Writing a program decision plan",
  outcome: "choose a vocational training (TVET) program that fits you and the jobs near you: compare the options, check on the official register that the school and program are accredited, ask the school the right questions, avoid fake schools, and write a decision plan with costs and dates.",
  about: [
    "This course is for young people and adults anywhere in the world who want to learn a trade or a technical skill: electrician, plumber, tailor, welder, motor mechanic, hairdresser, cook, solar technician, nursing assistant, computer technician and many more. It uses examples from Kenya, Nigeria, Ghana, Senegal, Morocco, Egypt, India, the Philippines, Mexico, Colombia and the United States.",
    "Choosing a program is a big decision. It costs money and months or years of your life. Some programs lead to good jobs. Others are old, poorly equipped, not recognized, or fake. You will learn to choose a trade that fits you and the job market, compare program types, check a school on the official government register, ask the school hard questions, and spot scams.",
    "This course does not give you a certificate in a trade and does not recommend any school. It teaches you how to choose well. Each lesson takes about five minutes, with a \"Try it now\" task, a short quick check, a knowledge check after each chapter and a 20-question quiz at the end. You finish with your own program decision plan."
  ],
  finalTask: "Write a one-page program decision plan for yourself: the trade you chose and why (your interests and the local jobs you found), two programs compared side by side (type, length, entry requirements, full cost and the credential you earn), proof that each one is accredited (the official register you checked and what it showed), the answers the school gave to your questions, any warning signs you found, and your next steps with dates and how you will pay.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Young people finishing primary or secondary school and adults who want a new trade or a first qualification, in Africa, Asia, Latin America, the Middle East and the US. Many are the first in their family to choose a training program. Some speak English or French as a second language; the course is translated into ten languages.",
    startingPoint: "Know a few trades by name, often from family or friends. Most have never checked whether a school is accredited, compared the full cost of programs, or looked at which jobs are in demand where they live. Many get advice from advertisements or social media.",
    gap: "Learners need to choose a program that is recognized, teaches real hands-on skills and leads to work, and avoid fake schools and scams that take fees and give worthless certificates. A careful choice saves money and years, and makes a job or business more likely.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6); many second-language readers",
      "Devices: often a basic smartphone with limited data; some use a cyber cafe or school computer",
      "Rules differ by country: each country has its own TVET authority and register, so lessons teach how to find and check them, not one country's rules",
      "Cost: learners may have little money; never pay a fee to a person or agent before checking the school",
      "Time: 4 to 6 minute lessons; about 60 to 75 minutes in total"
    ],
    prerequisites: "None. Learners who are still deciding on a trade can also take \"Skilled Trades Careers\"; learners new to the internet can take \"Internet Basics\" first."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given your own interests and what you can find out about jobs where you live", action: "list three trades that fit you and are in demand locally", standard: "with at least one piece of job-market evidence for each, such as job ads or an employer you asked" },
    { id: "O2", condition: "Given two or more training options", action: "compare programs by type, length, entry requirements, full cost and the credential earned", standard: "in a written table with no empty boxes" },
    { id: "O3", condition: "Given the name of a school and a program", action: "check on the national TVET authority's official register that the school and program are accredited", standard: "and write down where you checked and what it showed" },
    { id: "O4", condition: "Before you enrol", action: "ask a school about hands-on practice, equipment, trainers, the final exam, job results and the full cost", standard: "and write down the answer to every question" },
    { id: "O5", condition: "Given an advertisement, message or offer about training", action: "spot the warning signs of a fake school or training scam", standard: "naming at least two signs when they are present and not paying before you check" },
    { id: "O6", condition: "Using your comparison and checks", action: "write a program decision plan with your choice, costs, funding and dates", standard: "that another person could follow" }
  ],
  chapters: [
    {
      name: "Chapter 1: Finding the right trade and the right kind of program",
      lessons: [
        {
          title: "What TVET is and where it can lead",
          objectives: ["O1"],
          minutes: 4,
          goal: "Name five trades or technical jobs that TVET programs prepare people for.",
          text: [
            "TVET stands for Technical and Vocational Education and Training. UNESCO describes it as education, training and skills development for a wide range of jobs and ways of earning a living. In plain words: TVET teaches you to do a job with your hands, tools and know-how.",
            "TVET happens in many places: technical and vocational colleges, polytechnics, training centres, apprenticeships with an employer or master craftsperson, and some secondary schools. Names differ: a polytechnic in Ghana or Nigeria, a TVET college in Kenya, a TESDA-registered training centre in the Philippines, a CONALEP school in Mexico, a SENA centre in Colombia, a community college in the US.",
            "Trades include building (electrician, plumber, mason, carpenter, welder), machines and vehicles (motor mechanic, motorcycle repair, refrigeration and air conditioning), services (hairdressing, beauty, tailoring, catering and cooking, hotel work), care (nursing assistant, caregiver), farming and food processing, and technology (computer repair, networking, solar installation, phone repair).",
            "A good TVET program can lead to a job, an apprenticeship, your own small business, or further study. A poor one leads nowhere, so the rest of this course is about choosing well."
          ],
          words: [["TVET", "Technical and Vocational Education and Training: learning a job skill through practice, not only books."], ["Trade", "a skilled job you learn by training and practice, such as plumbing or tailoring."], ["Polytechnic", "a college that teaches technical and practical subjects, often up to diploma level."]],
          slides: [
            { title: "TVET in plain words", bullets: ["Technical and Vocational Education and Training", "Learning a job skill with tools and practice"] },
            { title: "Where TVET happens", bullets: ["TVET colleges, polytechnics, training centres", "Apprenticeships with an employer or master", "Community colleges in the US"] },
            { title: "Some trades", bullets: ["Electrician, plumber, welder, mason", "Mechanic, tailor, hairdresser, cook", "Solar, computer and phone repair, caregiving"] },
            { title: "Where it leads", bullets: ["A job or an apprenticeship", "Your own small business", "Further study"] }
          ],
          sources: [{ name: "UNESCO-UNEVOC TVETipedia: Technical and vocational education and training", url: "https://connect.unevoc.unesco.org/home/TVETipedia+Glossary/show=term/term=Technical+and+vocational+education+and+training" }],
          tryIt: "On paper, write the five trades from this lesson that interest you most. Next to each, write one person you know who does that work or something close to it.",
          youCanNow: "say what TVET is, where it is taught, and name five trades it can lead to.",
          quickCheck: [
            { objective: "O1", q: "What does a TVET program mainly teach?", options: ["Only theory from books", "How to pass any university exam", "A job skill through practice with tools", "How to get a visa"], answer: 2, why: "TVET is training for a job or trade, with hands-on practice." },
            { objective: "O1", q: "Which of these is a TVET path?", options: ["A two-year electrical installation course at a technical college", "A lottery ticket", "A social media page about fashion", "A loan from a moneylender"], answer: 0, why: "A technical college course in a trade is a TVET program." }
          ]
        },
        {
          title: "Choosing a trade that fits you and the local jobs",
          objectives: ["O1"],
          minutes: 5,
          goal: "List three trades that fit your interests and show evidence that each is in demand where you live.",
          text: [
            "Start with you. Do you like working indoors or outdoors? With people, machines, food, fabric or computers? Are you good with numbers, careful with details, strong, patient? Do you want a job with a company or your own business?",
            "Then look at the jobs. A trade you love is hard to live from if nobody near you is hiring or buying. Find evidence: count job ads for the trade on job boards, in newspapers and on notice boards; ask two or three employers or business owners what skills they cannot find; ask people working in the trade how easy it was to find work and customers.",
            "Some governments publish labour market information, such as lists of skills in demand. Look for it on your labour ministry's website. Be careful with lists you see in advertisements or social media posts: a school selling a course will always say its trade is in demand.",
            "Pick three trades that fit you and have some evidence of demand. You will compare programs for them in the next lessons."
          ],
          steps: ["Write what you like and what you are good at.", "List trades that match.", "For each, find evidence of jobs: ads, employers, people in the trade.", "Keep the three trades with the best fit and the best evidence."],
          words: [["Demand", "how many employers or customers want a skill."], ["Labour market information", "facts about jobs: which are growing, what they pay and what skills they need."]],
          slides: [
            { title: "Start with you", bullets: ["Indoors or outdoors? People or machines?", "What are you good at?", "A company job or your own business?"] },
            { title: "Then look at the jobs", bullets: ["Count job ads for the trade", "Ask 2 or 3 employers what skills they need", "Ask people who work in the trade"] },
            { title: "Careful with ads", bullets: ["A school selling a course always says \"high demand\"", "Look for the labour ministry's own information"] },
            { title: "Your shortlist", bullets: ["Three trades that fit you", "Some evidence of demand for each"] }
          ],
          tryIt: "Make a table with three rows, one per trade. Columns: why it fits me, evidence of jobs (for example \"5 ads this week\" or \"the garage owner said he needs a trained mechanic\"), and where I found it. Fill every box.",
          youCanNow: "choose three trades that fit you and back each one with real evidence of local demand.",
          quickCheck: [
            { objective: "O1", q: "Which is the best evidence that a trade is in demand where you live?", options: ["A school's advertisement says so", "You counted many job ads and two employers said they need it", "A friend online said it pays well everywhere", "It is popular in another country"], answer: 1, why: "Job ads and employers near you are real evidence; ads from a school selling the course are not." },
            { objective: "O1", q: "You love fashion design, but you found no jobs nearby. What is a sensible next step?", options: ["Give up on any training", "Enrol in the first course you see", "Look for customers and related trades, like tailoring, and check demand for those", "Pay an agent to find you a job abroad"], answer: 2, why: "Related trades with local demand can use the same interest and give you a way to earn." }
          ]
        },
        {
          title: "Types of programs and the credential you earn",
          objectives: ["O2"],
          minutes: 6,
          goal: "Compare program types by length, entry requirements, cost and the credential you earn.",
          text: [
            "TVET comes in several kinds. Short courses last days to a few months and teach one skill. Certificate and diploma programs at colleges and polytechnics last longer and usually mix classroom theory with workshop practice. National certificates, such as those issued through TESDA in the Philippines, are based on national standards and an assessment. Apprenticeships put you to work with an employer or master craftsperson while you learn; in the US, Registered Apprenticeships are listed on apprenticeship.gov. Dual training splits your time between a school and a company.",
            "In many countries, especially in West Africa, many young people learn through informal apprenticeships with a master craftsperson. These can teach real skills, but the certificate may not be recognized. Ask if you can also sit a national trade test or assessment to get a recognized credential.",
            "Compare each option on the same five points: type of program, length, entry requirements (for example a school certificate or a minimum age), full cost, and the credential you get at the end and who issues it. A credential issued by or recognized by the national authority is worth more to employers than a certificate printed by the school alone."
          ],
          steps: ["Write the options for one trade.", "For each one, note the type and the length.", "Note the entry requirements.", "Note the full cost (fees, tools, uniform, exam, transport).", "Note the credential and who issues or recognizes it."],
          words: [["Credential", "a certificate, diploma or licence that proves your skill."], ["Apprenticeship", "learning a trade by working with a skilled person or employer, often with pay."], ["Assessment", "a test where you show your skill, often by doing a real task."]],
          slides: [
            { title: "Kinds of programs", bullets: ["Short course: days to months, one skill", "Certificate or diploma at a college or polytechnic", "Apprenticeship or dual training with an employer"] },
            { title: "Informal apprenticeship", bullets: ["Learn with a master craftsperson", "Real skills, but the certificate may not count", "Ask about a national trade test"] },
            { title: "Compare five points", bullets: ["Type and length", "Entry requirements", "Full cost", "Credential and who issues it"] },
            { title: "Which credential counts?", bullets: ["Issued or recognized by the national authority: stronger", "Printed only by the school: weaker"] }
          ],
          sources: [{ name: "TESDA (Philippines)", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (US Department of Labor)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "For your top trade, find two different kinds of program (for example a college certificate and an apprenticeship). Make a table with the five points: type, length, entry requirements, full cost and credential. Write \"unknown\" where you still need to ask.",
          youCanNow: "compare training programs on type, length, entry requirements, full cost and the credential they give.",
          quickCheck: [
            { objective: "O2", q: "Which credential is usually worth the most to employers?", options: ["A certificate the school printed itself", "A certificate from a social media course", "A letter from a friend", "A credential issued or recognized by the national TVET authority"], answer: 3, why: "National recognition tells employers the training met an official standard." },
            { objective: "O2", q: "What should \"full cost\" include?", options: ["Only the first month's fee", "Fees, tools, uniform, exam fees and transport", "Only the price on the poster", "Nothing; good programs are always free"], answer: 1, why: "Hidden costs like tools, exams and transport can double what you pay." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding the right trade and program",
        questions: [
          { objective: "O1", q: "What does TVET stand for?", options: ["Technical and Vocational Education and Training", "Travel Visa and Employment Test", "Teacher Validation and Exam Tool", "Trade Value Exchange Tax"], answer: 0, why: "TVET is Technical and Vocational Education and Training." },
          { objective: "O1", q: "You want to check demand for plumbing in your town. Which step is best?", options: ["Trust the poster from a training school", "Ask a plumbing contractor and count local job ads", "Search for plumbing jobs in another continent", "Guess"], answer: 1, why: "Local employers and job ads are real evidence of demand where you live." },
          { objective: "O2", q: "Which program puts you to work with an employer while you learn?", options: ["A short online video", "A one-day seminar", "An apprenticeship", "A textbook"], answer: 2, why: "An apprenticeship means learning on the job with a skilled person or employer." },
          { objective: "O2", q: "You learned welding from a master in a workshop, but your certificate is not recognized. What could help?", options: ["Buy a certificate online", "Stop welding", "Print your own certificate", "Ask about sitting the national trade test or assessment"], answer: 3, why: "A national trade test or assessment can give a recognized credential for skills you already have." },
          { objective: "O2", q: "Two programs look alike. Which detail matters most when you compare them?", options: ["The colour of the uniform", "Who issues or recognizes the credential", "How many photos are on their website", "How big their sign is"], answer: 1, why: "A credential recognized by the national authority is worth far more to employers." }
        ]
      }
    },
    {
      name: "Chapter 2: Checking the school and making your choice",
      lessons: [
        {
          title: "Is it accredited? Checking the official register",
          objectives: ["O3"],
          minutes: 6,
          goal: "Check on the national TVET authority's official website that a school and its program are registered or accredited.",
          text: [
            "Most countries have a government body that registers or accredits TVET schools and programs. Accredited means the authority checked that the school meets its standards. A certificate from an unaccredited school may not be accepted by employers, by other schools, or for a job abroad.",
            "Examples: in Kenya, the TVET Authority (TVETA) licenses, registers and accredits institutions and publishes a list of accredited institutions at tveta.go.ke. In Nigeria, the National Board for Technical Education (NBTE) regulates TVET institutions such as polytechnics and technical colleges. In the Philippines, TESDA lists training institutions with registered programs. In Ghana, look for the Commission for TVET (CTVET); in India, the National Council for Vocational Education and Training (NCVET) and Skill India; in Morocco, the OFPPT is a large public provider; in Mexico, CONALEP is a public technical school system; in Colombia, SENA is the public training service. In Senegal, Egypt and other countries, start with the ministry in charge of vocational or technical education. In the US, check Registered Apprenticeships on apprenticeship.gov and ask your state about licensed schools.",
            "Check the name of the school AND the program. A school can be registered while one of its courses is not. Use the official website (often ending in .gov, .go.ke, .gov.ng, .gov.ph or your country's government ending), not a link sent by the school or an agent. If you cannot find the school, call or visit the authority's office and ask."
          ],
          steps: ["Find your country's TVET authority from the ministry of education or labour website.", "Open its official website yourself; do not use a link from the school.", "Search the register for the exact school name and branch.", "Check that your program is listed too.", "Write down the website, the date and what it showed. If it is not there, ask the authority directly."],
          words: [["Accredited", "checked and approved by an official body as meeting its standards."], ["Register", "an official list, here of approved schools and programs."], ["Authority", "the government body in charge of something, here of TVET."]],
          slides: [
            { title: "Why accreditation matters", bullets: ["The authority checked the school's standards", "Unaccredited certificates may not be accepted"] },
            { title: "Some national authorities", bullets: ["Kenya: TVETA. Nigeria: NBTE", "Philippines: TESDA. Ghana: CTVET. India: NCVET", "Mexico: CONALEP. Colombia: SENA. Morocco: OFPPT"] },
            { title: "Check both", bullets: ["The exact school and branch", "The exact program you want"] },
            { title: "Check safely", bullets: ["Open the official site yourself", "Not a link from the school or an agent", "Write down where and when you checked"] }
          ],
          sources: [{ name: "TVETA Kenya: accredited TVET institutions", url: "https://www.tveta.go.ke/accredited-tvet-institutions/" }, { name: "National Board for Technical Education (Nigeria)", url: "https://web.nbte.gov.ng/" }, { name: "TESDA (Philippines): registered programs", url: "https://www.tesda.gov.ph/" }, { name: "Apprenticeship.gov (US)", url: "https://www.apprenticeship.gov/" }],
          tryIt: "Find the official TVET authority for your country. Open its website yourself and look up one school near you and the program you want. Write down the website address, today's date and what you found. If you could not find the school, write the phone number or office you will ask.",
          youCanNow: "find your country's TVET authority and check on its official register that a school and its program are accredited.",
          quickCheck: [
            { objective: "O3", q: "A school sends you a link to \"prove\" it is accredited. What do you do?", options: ["Trust the link because it looks official", "Open the authority's official website yourself and search for the school", "Pay the fee first and check later", "Ask the school's agent if it is true"], answer: 1, why: "A link from the school could lead to a fake page; go to the official site yourself." },
            { objective: "O3", q: "The school is on the register, but your course is not listed. What is true?", options: ["The course is surely fine", "Only the building needs to be registered", "The course may not be accredited; ask the authority before you enrol", "It does not matter for employers"], answer: 2, why: "Schools and programs are often checked separately; check the program too." }
          ]
        },
        {
          title: "Questions to ask, and how to spot a fake school",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Ask a school six key questions and name the warning signs of a training scam.",
          text: [
            "Visit the school if you can, and ask: How many hours of hands-on practice will I have? Can I see the workshop and the equipment? Who are the trainers, and have they worked in the trade? What exam or assessment is at the end, and who gives the certificate? How many past students found work or started a business, and can I talk to one? What is the full cost, including tools, exams and uniforms, and what is the refund rule? Write down every answer.",
            "Good schools answer clearly and let you see the workshop. Be careful if they only show a classroom, cannot name an employer who hires their graduates, or will not put fees in writing.",
            "Warning signs of a fake school or scam: a promised or \"guaranteed\" job, especially abroad; pressure to pay today; fees paid to a person's phone or account instead of the school's official account with a receipt; no real address; a full certificate in a few days with no practice; asking to keep your passport or ID card. Never pay to get a job, keep your own documents, and check the school on the official register first.",
            "If you think it is a scam, do not pay. Report it to the TVET authority or the police, and warn friends."
          ],
          steps: ["Ask about hands-on hours, the workshop and equipment.", "Ask who the trainers are and what experience they have.", "Ask about the final exam and who issues the certificate.", "Ask about past students' jobs and the full cost and refunds.", "Write down every answer and compare with the warning signs."],
          words: [["Refund", "money paid back to you if you leave or the course is cancelled."], ["Receipt", "a written or printed record that you paid, with the school's name."]],
          slides: [
            { title: "Six questions to ask", bullets: ["Hands-on hours? Workshop and equipment?", "Trainers' experience? Final exam and certificate?", "Past students' jobs? Full cost and refunds?"] },
            { title: "Good signs", bullets: ["Clear answers, fees in writing", "You can see a working workshop", "You can talk to past students"] },
            { title: "Warning signs", bullets: ["\"Guaranteed job\", especially abroad", "Pay today, to a personal phone or account", "No address; certificate in days; keeps your passport"] },
            { title: "If it looks like a scam", bullets: ["Do not pay", "Report to the TVET authority or police", "Warn your friends"] }
          ],
          tryIt: "Write the six questions on a page. Ask them to one school, by visit or phone, or ask someone who studied there. Write every answer. Then circle any warning sign you heard.",
          youCanNow: "ask a school the questions that matter, record the answers and spot the warning signs of a fake school.",
          quickCheck: [
            { objective: "O4", q: "Which question best tells you how much real practice you will get?", options: ["\"Is the uniform nice?\"", "\"Do you have a website?\"", "\"Is the school near a bus stop?\"", "\"How many hours will I work in the workshop with real equipment?\""], answer: 3, why: "Hands-on hours and real equipment are how you learn a trade." },
            { objective: "O5", q: "A recruiter says: \"Pay today to my phone and you get a guaranteed job abroad after the course.\" What is this?", options: ["A scam warning sign; do not pay", "A normal school offer", "A government scholarship", "A good deal if it is cheap"], answer: 0, why: "Guaranteed jobs, pressure to pay now and paying to a personal phone are classic scam signs." }
          ]
        },
        {
          title: "Comparing and deciding: your program decision plan",
          objectives: ["O2", "O6"],
          minutes: 6,
          goal: "Write a one-page program decision plan with your choice, costs, funding and dates.",
          text: [
            "Put your two best programs side by side in one table: type, length, entry requirements, full cost, credential and who issues it, accreditation (where you checked), answers to your six questions, and any warning signs. The best choice is not always the cheapest: it is the accredited program with the most practice and the best evidence that graduates find work.",
            "Plan how you will pay. Write the full cost and when each payment is due. Look for help from official sources only: government bursaries, loans or free public training in some countries, scholarships from employers or community groups, or an apprenticeship that pays you while you learn. Check any funding offer on the official website of the agency that gives it, and never pay a fee to get a scholarship.",
            "Write the dates: when applications open and close, what documents you need (keep the originals yourself and give copies), the start date, and the date of the final exam. Show your plan to a parent, teacher, counsellor or someone in the trade, and ask what you missed."
          ],
          steps: ["Make a table comparing your two best programs.", "Choose one and write why.", "Write the full cost, payment dates and how you will pay.", "Write the documents, application deadline, start date and exam date.", "Show the plan to someone you trust and fix what they find."],
          words: [["Bursary", "money given to help a student pay for school, which you do not pay back."], ["Deadline", "the last day to do something, such as apply."]],
          slides: [
            { title: "Side by side", bullets: ["Type, length, entry, full cost, credential", "Accreditation and where you checked", "School's answers and any warning signs"] },
            { title: "Best is not always cheapest", bullets: ["Accredited", "Most hands-on practice", "Best evidence that graduates find work"] },
            { title: "Paying for it", bullets: ["Full cost and payment dates", "Bursaries, loans, scholarships, paid apprenticeships", "Check on official sites; never pay for a scholarship"] },
            { title: "Dates and documents", bullets: ["Application deadline and start date", "Keep originals; give copies", "Show the plan to someone you trust"] }
          ],
          tryIt: "Final task: write your one-page program decision plan: your trade and why, two programs compared, where you checked accreditation, the school's answers, warning signs, your choice, how you will pay, and dates for applying, starting and the final exam. Show it to one person you trust.",
          youCanNow: "compare two programs and write a decision plan with your choice, costs, funding, documents and dates.",
          quickCheck: [
            { objective: "O6", q: "Someone offers you a scholarship if you first pay a \"processing fee\". What do you do?", options: ["Pay quickly before it closes", "Send a copy of your passport to hold the place", "Do not pay; check the scholarship on the official agency's website", "Borrow money to pay the fee"], answer: 2, why: "Real scholarships do not charge you to receive them; check them on the official site." },
            { objective: "O2", q: "Program A is cheaper but not accredited. Program B costs more, is accredited and has a full workshop. Which is usually the better choice?", options: ["Program A, because it is cheaper", "Neither; never train", "Whichever finishes fastest", "Program B, if you can find a way to pay"], answer: 3, why: "An accredited program with real practice is worth more to employers than a cheap unrecognized one." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Checking the school and making your choice",
        questions: [
          { objective: "O3", q: "In Kenya, which body publishes the list of accredited TVET institutions?", options: ["The TVET Authority (TVETA)", "A private advertising company", "Any recruitment agent", "The school's own Facebook page"], answer: 0, why: "TVETA licenses, registers and accredits TVET institutions in Kenya and lists them on its website." },
          { objective: "O3", q: "What should you write down after checking a register?", options: ["Nothing", "Only the school's slogan", "The website, the date and what it showed", "The agent's phone number"], answer: 2, why: "A record of where and when you checked is your proof." },
          { objective: "O4", q: "The school will not let you see its workshop. What does this tell you?", options: ["Nothing important", "It is a warning sign; ask more questions or look elsewhere", "The school must be excellent", "Workshops do not matter in TVET"], answer: 1, why: "Hands-on practice is the heart of TVET; a school that hides its workshop may not have one." },
          { objective: "O5", q: "Which is a warning sign of a fake school?", options: ["Fees written on an official receipt", "A visit to a working workshop", "Trainers who have worked in the trade", "A full certificate in three days with no practice"], answer: 3, why: "Real trade skills take practice; a quick certificate with no practice is a sign of a fake." },
          { objective: "O6", q: "What belongs in your program decision plan?", options: ["Your chosen program, full cost, how you will pay and key dates", "Only the school's name", "Your passwords", "A list of your friends"], answer: 0, why: "A useful plan says what you chose, what it costs, how you will pay and when things happen." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Choosing a Vocational Training (TVET) Program",
    questions: [
      { objective: "O1", q: "Which is an example of a TVET program?", options: ["A certificate course in motor vehicle mechanics", "A lottery", "A savings app", "A music streaming service"], answer: 0, why: "Motor mechanics is a trade taught in TVET programs." },
      { objective: "O1", q: "Before choosing a trade, what should you look at besides your interests?", options: ["Your favourite colour", "Evidence of jobs or customers where you live", "What is popular on social media this week", "The trade with the shortest name"], answer: 1, why: "A trade fits best when you like it and people near you are hiring or buying." },
      { objective: "O1", q: "Which source of job information should you be most careful with?", options: ["An employer you asked", "Counting job ads in your town", "An advertisement from a school selling the course", "People who already work in the trade"], answer: 2, why: "A school selling a course has a reason to say its trade is in demand." },
      { objective: "O2", q: "What is an apprenticeship?", options: ["A short online quiz", "A type of loan", "A school uniform", "Learning a trade by working with a skilled person or employer"], answer: 3, why: "Apprentices learn on the job, often with pay." },
      { objective: "O2", q: "Which five points should you compare between programs?", options: ["Type, length, entry requirements, full cost and credential", "Logo, colours, website, slogan and music", "Only the price", "Only how close it is"], answer: 0, why: "These five points show what you get, what it takes and what it costs." },
      { objective: "O2", q: "Which cost is often forgotten when comparing programs?", options: ["Nothing; the poster price is always complete", "Tools, exam fees and transport", "The school's electricity bill", "The trainer's salary"], answer: 1, why: "Tools, exams and transport can add a lot to the real cost." },
      { objective: "O2", q: "Who should issue or recognize your credential for it to carry the most weight?", options: ["Only the school", "A friend", "The national TVET authority or a recognized awarding body", "An online forum"], answer: 2, why: "National recognition tells employers the training met an official standard." },
      { objective: "O3", q: "What does \"accredited\" mean?", options: ["The school has a big sign", "The school is expensive", "The school is popular online", "An official body checked and approved it as meeting standards"], answer: 3, why: "Accreditation is an official check against standards." },
      { objective: "O3", q: "In the Philippines, which agency lists training institutions with registered programs?", options: ["TESDA", "A travel agency", "A bank", "A phone company"], answer: 0, why: "TESDA registers programs and lists the institutions that offer them." },
      { objective: "O3", q: "Where should you check whether a school is accredited?", options: ["On a link the school sends you", "On the national TVET authority's official website, opened yourself", "On the school's poster", "By asking the agent who sells the course"], answer: 1, why: "Only the authority's own website, opened by you, is a trustworthy check." },
      { objective: "O3", q: "The school is accredited but your program is not on the register. You should:", options: ["Enrol anyway", "Ignore it", "Ask the authority before you enrol", "Pay a fee to fix it"], answer: 2, why: "Programs can be accredited separately from the school, so ask the authority." },
      { objective: "O4", q: "Which question helps you see if graduates find work?", options: ["\"What colour are the walls?\"", "\"Do you have parking?\"", "\"Is there a canteen?\"", "\"How many past students found work, and can I talk to one?\""], answer: 3, why: "Talking to past students shows real results." },
      { objective: "O4", q: "Why write down every answer the school gives?", options: ["So you can compare schools and hold them to what they said", "To make the visit longer", "Because schools require it", "It is not useful"], answer: 0, why: "Written answers let you compare fairly and remember promises." },
      { objective: "O4", q: "Which answer from a school is a good sign?", options: ["\"We cannot put the fees in writing.\"", "\"Come and see the workshop, and here is the full fee list.\"", "\"You do not need practice to get our certificate.\"", "\"Pay today or lose your place.\""], answer: 1, why: "Openness about the workshop and fees in writing are signs of a real school." },
      { objective: "O5", q: "Which is a warning sign of a training scam?", options: ["An official receipt", "A clear refund rule", "A \"guaranteed\" job abroad if you pay now", "A visit to the workshop"], answer: 2, why: "Guaranteed jobs and pressure to pay are classic scam signs." },
      { objective: "O5", q: "A school asks to keep your passport until you finish the course. You should:", options: ["Hand it over", "Send a photo of it to the agent", "Leave it with them to save time", "Keep your own passport and documents; give copies only"], answer: 3, why: "Never give up your passport or ID; keeping someone's documents is a warning sign of abuse." },
      { objective: "O5", q: "You think a training offer is a scam. What do you do?", options: ["Do not pay, and report it to the TVET authority or the police", "Pay a small amount to test it", "Share your bank details to check", "Tell nobody"], answer: 0, why: "Not paying and reporting it protects you and others." },
      { objective: "O6", q: "What should your program decision plan include about money?", options: ["Nothing", "The full cost, payment dates and how you will pay", "Only the first fee", "Your bank password"], answer: 1, why: "Knowing the full cost and how you will pay stops surprises halfway through." },
      { objective: "O6", q: "Which funding should you check on an official website before trusting it?", options: ["None", "Only loans", "Any bursary, loan or scholarship offer", "Only offers from friends"], answer: 2, why: "Fake scholarships exist; check every offer with the agency that gives it." },
      { objective: "O6", q: "Before you send your application, what is a good last step?", options: ["Give your original documents to an agent", "Delete your comparison table", "Pay an extra fee to go faster", "Show your plan to a teacher, counsellor or someone in the trade"], answer: 3, why: "Another person can spot what you missed." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 4, 7, 9, 12, 14, 15, 17] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Trade fits you and local jobs", objective: "O1", notYet: "The trade is chosen with no reason or no evidence of demand.", meets: "Says why the trade fits and gives at least one piece of local job evidence.", exceeds: "Gives evidence from two or more sources, such as job ads and an employer conversation." },
      { name: "Programs compared", objective: "O2", notYet: "Only one program, or the table has empty boxes.", meets: "Two programs compared on type, length, entry requirements, full cost and credential.", exceeds: "Also includes hidden costs and who issues or recognizes each credential." },
      { name: "Accreditation checked", objective: "O3", notYet: "No check, or the check used a link from the school.", meets: "School and program checked on the national authority's official site, with where and when.", exceeds: "Also contacted the authority to confirm anything unclear." },
      { name: "Questions asked and scams screened", objective: "O4", notYet: "No answers from the school recorded, or warning signs ignored.", meets: "Answers to the six questions recorded and any warning signs named.", exceeds: "Also talked to a past student or an employer about the school." },
      { name: "Decision plan", objective: "O6", notYet: "No choice, cost or dates.", meets: "A clear choice with full cost, how to pay, documents and dates.", exceeds: "Reviewed by a trusted person, with their feedback added." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and complete the decision plan (rubric)",
      "Learners who enrol in an accredited TVET program or apprenticeship within 3 months",
      "Learners who report checking a school on an official register before paying (30-day follow-up)",
      "Learners who report avoiding or reporting a fake school or training scam",
      "Partner programs report fewer learners lost to unaccredited schools or training scams"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to open official registers (a shared or cyber cafe computer is fine)",
      "Paper and pen for tables and the decision plan",
      "The name and website of your country's TVET authority (found in Lesson 4)",
      "About 60 to 75 minutes in total, plus time to visit or call one school"
    ],
    facilitatorNotes: [
      "Before the session, find your country's TVET authority and its register page, and test that it opens; registers move and some sites are slow.",
      "Invite a local employer or a graduate of a TVET program to answer questions in Lesson 2 or Lesson 5.",
      "Do not recommend specific schools; teach learners to check and compare for themselves.",
      "Remind learners never to pay an agent or hand over passports or ID; report suspected scams to the TVET authority or police.",
      "Score the decision plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
