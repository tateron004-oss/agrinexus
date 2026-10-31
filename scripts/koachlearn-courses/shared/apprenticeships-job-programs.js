"use strict";

// Koach Learn course: Workforce Development -> "Finding Apprenticeships and Job Training Programs" (wave 3, 30 October 2026).
// Facts checked 30 Oct 2026 on apprenticeship.gov (career seekers, Job Finder, pre-apprenticeship), dol.gov (YouthBuild, WIOA Adult, youth programs),
// jobcorps.gov, va.gov (OJT and apprenticeships) and consumer.ftc.gov (job scams). careeronestop.org blocked the check (403); the course points to it
// and to the DOL phone line 1-877-US-2JOBS, which dol.gov lists. Program status, ages and rules can change: learners confirm on the official page.
// No pay figures, fees or program lengths beyond what the official pages state.

module.exports = {
  id: "apprenticeships-job-programs",
  category: "Workforce Development",
  name: "Finding Apprenticeships and Job Training Programs",
  skills: "Telling program types apart, Searching apprenticeship.gov, Using an American Job Center, Checking a program is real, Gathering application documents, Making an application plan",
  outcome: "find real apprenticeships and free or low-cost job training programs near you, check that they are real and fit you, gather what you need to apply, and make a dated plan to apply to two of them.",
  about: [
    "This course is for anyone who wants to be paid while they learn a trade or get free training for a better job: young people leaving school, adults changing careers, veterans, and people coming home from prison.",
    "You will learn the difference between an apprenticeship, a pre-apprenticeship and a job training program; search the official apprenticeship.gov Job Finder; use your local American Job Center; spot fake programs and job scams; and gather the papers programs ask for.",
    "This course PREPARES you to find and apply. It does not enroll you in any program or promise a place. Rules, ages and openings change, so every lesson shows you the official page to check.",
    "Each lesson takes about five minutes. Read, look at the slides, then do the \"Try it now\" task on paper or a phone. There is a quick check after each lesson, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page \"Program Application Plan\": your goal job; two real programs you found (from apprenticeship.gov, an American Job Center, Job Corps, YouthBuild, a union or a college), with each one's sponsor, location, requirements and how to apply; the checks you did to make sure each is real; a list of documents you have and still need; and five next steps, each with a date.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Job seekers 16 and up in the US: young people leaving high school or without a diploma, adults changing careers, veterans and people coming home from prison. Many live in lower-income or rural communities and need to earn money while they train.",
    startingPoint: "Can use a phone or library computer to search the web. Most have heard of apprenticeships or training but do not know how to find a real program, who pays for it, or what they need to apply. Some have been targeted by pay-to-train scams.",
    gap: "Paid apprenticeships and free training exist in every state, but people miss them because they do not know where to look or what to ask. Learners need to find real programs on official sites, check them, and apply on time, so they can move into a better-paying job without debt.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6)",
      "Devices: a phone or a time-limited library or job center computer",
      "Time: 4 to 6 minute lessons that fit around work and school",
      "Programs, ages and rules differ by state and change; learners check official pages (apprenticeship.gov, dol.gov, jobcorps.gov, va.gov)",
      "Scam risk: never pay to get a job and never share private numbers in practice tasks"
    ],
    prerequisites: "None. Learners who have not chosen a field yet can take \"Skilled Trades Careers\" first; learners who need a résumé can take \"Résumé, LinkedIn and Interviews\"."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given short descriptions of five programs", action: "identify each one as an apprenticeship, a pre-apprenticeship or a job training program", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Using the apprenticeship.gov Job Finder on a phone or computer", action: "search for apprenticeships in your field and area and write down two listings", standard: "with the sponsor, location and how to apply for each" },
    { id: "O3", condition: "Using CareerOneStop or the DOL phone line", action: "find your nearest American Job Center and write questions to ask about free training", standard: "with at least four questions, including one about training funds" },
    { id: "O4", condition: "Given a program ad or offer", action: "check whether the program is real and worth your time", standard: "using at least three checks, including the warning signs of a pay-to-get-a-job scam" },
    { id: "O5", condition: "For one program you want", action: "list its requirements and the documents you need to apply", standard: "marking which ones you already have and where to get the rest" },
    { id: "O6", condition: "For two programs you found", action: "write an application plan with dated next steps", standard: "with at least five steps, deadlines and a follow-up date" }
  ],
  chapters: [
    {
      name: "Chapter 1: Know your options and where to find them",
      lessons: [
        {
          title: "Apprenticeship, pre-apprenticeship or training program?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify the three main kinds of programs and which one fits you now.",
          text: [
            "A Registered Apprenticeship is a job. The US Department of Labor's apprenticeship.gov says apprentices earn a wage from day one, get raises as their skills grow, learn on the job with classroom training, and finish with a credential recognized across their industry. You apply to the employer or program sponsor, much like a job.",
            "A pre-apprenticeship gets you ready for an apprenticeship. Apprenticeship.gov says it can last a few weeks to a few months, and pay or a stipend is optional. It often covers basic math, safety and job readiness. YouthBuild is one example for young people.",
            "A job training program teaches skills for a job, often in a classroom, and helps you find work at the end. Examples are Job Corps, community college certificates, and training paid for through your local American Job Center. Some are free; some help with costs; you are usually not paid a wage while you learn.",
            "Ask yourself: do I need to earn money now (apprenticeship), do I need to get ready first (pre-apprenticeship), or do I need a short course to qualify for a job (training program)?"
          ],
          words: [["Registered Apprenticeship", "a paid job with training, approved by the Department of Labor or a state, that ends with a recognized credential."], ["Pre-apprenticeship", "a short program that prepares you to get into an apprenticeship."], ["Sponsor", "the employer, union or group that runs an apprenticeship and hires the apprentices."], ["Stipend", "a small payment to help with costs while you train; it is not a full wage."], ["Credential", "proof of a skill, such as a certificate or license."]],
          slides: [
            { title: "Registered Apprenticeship", bullets: ["A paid job with training", "Wage from day one, raises as skills grow", "Ends with an industry-recognized credential"] },
            { title: "Pre-apprenticeship", bullets: ["Gets you ready for an apprenticeship", "A few weeks to a few months", "Pay or a stipend is optional"] },
            { title: "Job training program", bullets: ["Teaches skills for a job, often in class", "Examples: Job Corps, college certificates, AJC training", "Usually no wage while you learn"] },
            { title: "Which fits you now?", bullets: ["Need to earn now: apprenticeship", "Need to get ready: pre-apprenticeship", "Need a short course: training program"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Career seekers", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: What is a pre-apprenticeship?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "US Department of Labor: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" }
          ],
          tryIt: "On paper, make three columns: Apprenticeship, Pre-apprenticeship, Training program. Write two good things and one hard thing about each for YOUR life right now. Circle the one that fits you best today.",
          youCanNow: "tell an apprenticeship, a pre-apprenticeship and a job training program apart and pick the kind that fits you now.",
          quickCheck: [
            { objective: "O1", q: "Which program pays you a wage while you learn on the job?", options: ["A free online video course", "A Registered Apprenticeship", "A library workshop", "A practice test website"], answer: 1, why: "A Registered Apprenticeship is a paid job with training." },
            { objective: "O1", q: "A 10-week program teaches construction math and safety to help you get into an apprenticeship. What is it?", options: ["A pre-apprenticeship", "A college degree", "A Registered Apprenticeship", "A temp job"], answer: 0, why: "A pre-apprenticeship prepares you to enter an apprenticeship and can last weeks to months." }
          ]
        },
        {
          title: "Searching the apprenticeship.gov Job Finder",
          objectives: ["O2"],
          minutes: 5,
          goal: "Search the official Job Finder and write down two apprenticeship listings near you.",
          text: [
            "Apprenticeship.gov is the US Department of Labor's official apprenticeship site. Its Apprenticeship Job Finder lets you type a career path or a location to find openings near you.",
            "The Job Finder pulls listings from several sources. Each listing has a tag such as \"Registered Occupation\" or \"Registered Partner\". You apply directly with the employer or sponsor, not through apprenticeship.gov.",
            "Try more than one word: \"electrician\", \"plumber\", \"IT support\", \"medical assistant\", \"truck driver\". Apprenticeships are not only in construction; they are also in health care, IT, manufacturing and more. If you find nothing nearby, try a bigger city near you or a different job title.",
            "Write down what you find before you close the page. Listings change, so the date you saw it matters."
          ],
          steps: ["Go to apprenticeship.gov and open the Apprenticeship Job Finder.", "Type a career path, your city or ZIP code, or both.", "Open a listing and read who the sponsor is, where it is and how to apply.", "Write down the sponsor, job title, location, how to apply and today's date.", "Repeat with another job title until you have two listings."],
          words: [["Listing", "one job or program opening posted on a website."], ["Career path", "the kind of work you want to do over time, such as electrician or IT support."], ["ZIP code", "the five-digit number for your area in a US address."]],
          slides: [
            { title: "The official place to search", bullets: ["apprenticeship.gov, from the US Department of Labor", "Use the Apprenticeship Job Finder", "Search by career path, location or both"] },
            { title: "Reading a listing", bullets: ["Who the sponsor or employer is", "Where the job is", "How to apply: you apply to the sponsor directly"] },
            { title: "Search tips", bullets: ["Try several job titles", "Not only construction: health, IT, manufacturing", "Nothing nearby? Try a bigger city near you"] },
            { title: "Write it down", bullets: ["Sponsor, job title, location", "How to apply and the date you saw it"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov: Career seekers", url: "https://www.apprenticeship.gov/career-seekers" }
          ],
          tryIt: "Open the Apprenticeship Job Finder. Search for one career you like near your ZIP code. Write down two listings: sponsor, job title, location, how to apply and today's date. If you find none, try two other job titles or a nearby city.",
          youCanNow: "search the apprenticeship.gov Job Finder and write down two real listings with how to apply.",
          quickCheck: [
            { objective: "O2", q: "You found an apprenticeship on the Job Finder. Who do you apply to?", options: ["The White House", "Apprenticeship.gov staff", "Any website that copies the listing", "The employer or sponsor in the listing"], answer: 3, why: "Apprenticeship.gov says you apply directly with the employer or sponsor." },
            { objective: "O2", q: "Your search for \"electrician\" in your small town shows nothing. What is a good next step?", options: ["Give up on apprenticeships", "Pay a website to find one for you", "Try a nearby bigger city or another job title", "Search only once a year"], answer: 2, why: "Trying a wider area or other titles often finds listings a first search missed." }
          ]
        },
        {
          title: "Your American Job Center and free training programs",
          objectives: ["O3"],
          minutes: 6,
          goal: "Find your nearest American Job Center and write the questions you will ask about free training.",
          text: [
            "American Job Centers (AJCs) are free public offices, run with US Department of Labor funds, that help people find jobs and training. Find one on CareerOneStop.org (from the Labor Department) or call the DOL line at 1-877-US-2JOBS (1-877-872-5627). Some states call them by a local name, such as a WorkSource or career center.",
            "Through the Workforce Innovation and Opportunity Act (WIOA), AJC staff can offer career services and help paying for training if you are eligible. The Labor Department says priority goes to people on public assistance, other low-income people and people who need basic skills help, and veterans get priority of service in all DOL-funded job programs. Services vary by state, so ask.",
            "Other programs to ask about: Job Corps (free training and housing for young adults, generally ages 16 to 24; check jobcorps.gov or call 800-733-5627 for current openings); YouthBuild (ages 16 to 24 who left school without a diploma: construction and other skills while finishing school); Reentry Employment Opportunities for people coming home from prison; and, for veterans, the GI Bill, which the VA says can be used for many apprenticeships and on-the-job training.",
            "Go in with questions written down. You will get more from one visit."
          ],
          steps: ["Search CareerOneStop for American Job Center and your ZIP code, or call 1-877-US-2JOBS.", "Write down the center's address, hours and phone number.", "Write your questions: training funds, programs near you, apprenticeships, help for your situation.", "Call or visit and take notes, including the name of the person you talk to."],
          words: [["American Job Center (AJC)", "a free public office that helps people find jobs and training."], ["WIOA", "the Workforce Innovation and Opportunity Act, the US law that funds job centers and training help."], ["Eligible", "meeting the rules to get a service."], ["Priority of service", "being served first; veterans get it in DOL-funded job programs."], ["GI Bill", "VA education benefits for veterans and some family members."]],
          slides: [
            { title: "American Job Centers", bullets: ["Free public offices for jobs and training", "Find one: CareerOneStop.org or 1-877-US-2JOBS", "May have a local name in your state"] },
            { title: "Help paying for training (WIOA)", bullets: ["Career services and training funds if eligible", "Priority: public assistance, low income, basic skills", "Veterans get priority of service"] },
            { title: "More programs to ask about", bullets: ["Job Corps: generally ages 16-24, free, check status", "YouthBuild: ages 16-24 without a diploma", "Reentry programs; GI Bill for veterans' apprenticeships"] },
            { title: "Go in prepared", bullets: ["Write your questions first", "Take notes and the staff person's name"] }
          ],
          sources: [
            { name: "US Department of Labor: WIOA Adult program", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" },
            { name: "Job Corps", url: "https://www.jobcorps.gov/" },
            { name: "US Department of Labor: YouthBuild", url: "https://www.dol.gov/agencies/eta/youth/youthbuild" },
            { name: "US Department of Labor: Youth and reentry programs", url: "https://www.dol.gov/agencies/eta/youth" },
            { name: "VA: On-the-job training and apprenticeships", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Find your nearest American Job Center and write its address, hours and phone. Then write four questions to ask, for example: \"Can WIOA help pay for training in my field?\", \"Which apprenticeships or pre-apprenticeships are near here?\", \"Is there help for young adults, veterans or people with a record?\", \"What do I bring to my first visit?\"",
          youCanNow: "find your American Job Center and go in with questions about free training and programs.",
          quickCheck: [
            { objective: "O3", q: "Where can you get free help finding training money and programs near you?", options: ["An American Job Center", "A stranger's social media post", "A company that charges to place you", "Only a private college"], answer: 0, why: "American Job Centers are free public offices that help with jobs and training, including WIOA funds." },
            { objective: "O3", q: "Which question is best to ask at an American Job Center?", options: ["\"Can you do my job for me?\"", "\"Do you sell gift cards?\"", "\"What is your home address?\"", "\"Can WIOA help pay for training in my field?\""], answer: 3, why: "Asking about WIOA training funds can open free training if you are eligible." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Know your options and where to find them",
        questions: [
          { objective: "O1", q: "What is true about a Registered Apprenticeship?", options: ["You pay a big fee to join", "You earn a wage and learn on the job", "It is only a classroom course", "It never ends with a credential"], answer: 1, why: "Apprentices earn a wage from day one and finish with a recognized credential." },
          { objective: "O1", q: "Maya, 19, has no diploma and wants construction skills while she finishes school. Which program fits?", options: ["A four-year university", "A private loan", "YouthBuild", "An unpaid internship abroad"], answer: 2, why: "YouthBuild serves ages 16-24 who left school without a diploma, mixing job skills and school." },
          { objective: "O2", q: "What is the official US site to search for apprenticeships?", options: ["apprenticeship.gov", "Any site with \"jobs\" in its name", "A social media group", "A text message link"], answer: 0, why: "Apprenticeship.gov is the US Department of Labor's official apprenticeship site with the Job Finder." },
          { objective: "O2", q: "What should you write down from each listing?", options: ["Only the color of the logo", "Nothing; you can find it later", "Your password for the site", "Sponsor, job title, location, how to apply and the date"], answer: 3, why: "Listings change, so you note the key details and the date you saw them." },
          { objective: "O3", q: "Darnell is a veteran. What does the Labor Department say he gets in DOL-funded job programs?", options: ["Nothing extra", "A free car", "Priority of service", "A guaranteed job"], answer: 2, why: "Veterans get priority of service in all DOL-funded employment programs." }
        ]
      }
    },
    {
      name: "Chapter 2: Choose well and apply",
      lessons: [
        {
          title: "Is the program real and worth it?",
          objectives: ["O4"],
          minutes: 5,
          goal: "Check a program ad for the signs that it is real, and for the signs of a scam.",
          text: [
            "Some ads promise \"guaranteed jobs\" if you pay for training or a certificate. The FTC says honest employers, including the federal government, will never ask you to pay to get a job, and paying for useless \"training\" or certifications is a common scam.",
            "Other FTC warning signs: a check you must deposit and then send part of the money back, an upfront fee from a placement firm, a stranger who contacts you out of the blue with a job, and big pay for little work.",
            "Signs a program is real: it is listed on apprenticeship.gov, your American Job Center, a state .gov site, a union or a community college; you can find its address and phone on its own; and it tells you clearly what it costs, how long it takes, what credential you get, and how many people finish and get jobs.",
            "A real program can still be a poor fit. Check the schedule, the location and travel, and whether the credential is one employers in your area ask for."
          ],
          steps: ["Look for the program on an official site (apprenticeship.gov, your AJC, a state .gov site, a union or college).", "Find its address and phone yourself; do not use only the number in the ad.", "Check for scam signs: paying to get the job, upfront fees, check-and-send-back, too-good pay.", "Ask: cost, length, credential, schedule, and how many finish and get jobs.", "Not sure? Ask your American Job Center before you sign or pay anything."],
          words: [["Scam", "a trick to take your money or personal information."], ["Upfront fee", "money you must pay before you get anything."], ["FTC", "the Federal Trade Commission, the US agency that warns about and fights scams."], ["Completion rate", "how many people who start a program finish it."]],
          slides: [
            { title: "Never pay to get a job", bullets: ["FTC: honest employers never ask you to pay to get hired", "Be wary of paid \"training\" that promises a job"] },
            { title: "Scam warning signs", bullets: ["Upfront fees to place you", "Deposit a check, send money back", "A stranger offers a job; big pay for little work"] },
            { title: "Signs it is real", bullets: ["Listed on apprenticeship.gov, an AJC, .gov, union or college", "You can find its address and phone yourself", "Clear cost, length, credential and job results"] },
            { title: "Real, but right for you?", bullets: ["Schedule and travel", "A credential local employers want"] }
          ],
          sources: [
            { name: "FTC: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" }
          ],
          tryIt: "Take one program you found in Lesson 2 or 3. Do three checks: is it on an official list, can you find its address and phone yourself, and does it show any scam sign? Write \"real\", \"not sure\" or \"scam\" and why. Then read this made-up ad and list its warning signs: \"Get a guaranteed $40/hour job! Pay $300 today for your certificate. Text us now.\"",
          youCanNow: "check whether a program is real and worth your time, and spot the signs of a pay-to-get-a-job scam.",
          quickCheck: [
            { objective: "O4", q: "An ad says: \"Pay $250 for your certificate and get a guaranteed job.\" What do you do?", options: ["Pay quickly before it fills up", "Send your bank details to hold a spot", "Treat it as a likely scam and check with your AJC", "Share it with friends so they pay too"], answer: 2, why: "The FTC says honest employers never ask you to pay to get a job." },
            { objective: "O4", q: "Which is a sign a program is real?", options: ["It is listed on apprenticeship.gov or a state .gov site", "It only has a phone number in a text", "It asks you to deposit a check and send money back", "It will not tell you what it costs"], answer: 0, why: "Being listed on an official site and being open about costs are signs of a real program." }
          ]
        },
        {
          title: "Requirements and documents",
          objectives: ["O5"],
          minutes: 5,
          goal: "List a program's requirements and the documents you need, and mark which you have.",
          text: [
            "Every program sets its own requirements, and they are in the listing or on the sponsor's site. Common ones are a minimum age, a high school diploma or equivalency (GED or HiSET), a basic math or reading test, being able to do the physical work, a valid driver's license for some trades, and a drug test.",
            "Common documents: a photo ID, proof of your diploma or equivalency, school transcripts, a résumé, and sometimes a Social Security card or proof you can work in the US. Veterans may need their DD-214 to show their service, and GI Bill users apply for VA education benefits.",
            "Do not have one yet? You can still plan. A state ID comes from your state's DMV. A diploma copy comes from your old school or state education office. The American Job Center can help with many of these, and reentry programs often help people coming home get ID.",
            "Keep copies, not originals, in one folder. Never send private numbers to anyone you have not checked is real."
          ],
          steps: ["Open the listing or the sponsor's page and find the requirements.", "Write each requirement and each document on a checklist.", "Mark each one: Have it, Need it, or Not sure.", "Next to each Need it, write where you will get it.", "Put copies in one folder or a safe place on your phone."],
          words: [["Requirement", "something you must have or do to apply, such as a minimum age or a diploma."], ["Equivalency", "a test, such as the GED or HiSET, that counts like a high school diploma."], ["Transcript", "the official list of classes and grades from a school."], ["DD-214", "the military paper that shows a veteran's service and discharge."]],
          slides: [
            { title: "Common requirements", bullets: ["Minimum age; diploma, GED or HiSET", "A basic math or reading test", "Driver's license or drug test for some trades"] },
            { title: "Common documents", bullets: ["Photo ID; diploma or equivalency; transcripts", "Résumé; proof you can work in the US", "Veterans: DD-214"] },
            { title: "Missing something?", bullets: ["State ID: your state's DMV", "Diploma copy: your old school or state office", "Ask your AJC or reentry program for help"] },
            { title: "Keep it safe", bullets: ["Copies, not originals, in one folder", "Send private numbers only to checked programs"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Career seekers", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "VA: On-the-job training and apprenticeships", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "For one program you want, make a checklist of every requirement and document from its listing. Mark each one Have it, Need it or Not sure, and write where you will get each Need it. Do not write any real ID numbers on the list.",
          youCanNow: "list a program's requirements and documents, see what you are missing and know where to get it.",
          quickCheck: [
            { objective: "O5", q: "Where do you find a program's exact requirements?", options: ["A friend's guess", "The program's listing or the sponsor's own site", "Any social media comment", "They are the same for every program"], answer: 1, why: "Each program sets its own requirements, so you read its listing or official page." },
            { objective: "O5", q: "Luis, a veteran, wants to use the GI Bill for an apprenticeship. Which document will likely help show his service?", options: ["A gym card", "A library card", "A store receipt", "His DD-214"], answer: 3, why: "The DD-214 shows a veteran's service and discharge." }
          ]
        },
        {
          title: "Making your application plan",
          objectives: ["O6"],
          minutes: 5,
          goal: "Write an application plan for two programs with dated steps and a follow-up date.",
          text: [
            "Apprenticeships and training programs often open applications only at certain times, and some fill fast. A written plan with dates keeps you from missing a window.",
            "For each program, write the deadline or the next open date, how to apply (online, in person, or at an information session), and any test date. If you cannot find a date, your first step is to call or email and ask.",
            "Then write your next steps, each with a date: get a missing document, update your résumé, practice for the math test, go to an information session, submit the application, follow up. A good follow-up is a short, polite call or email about one to two weeks after you apply, unless the program tells you a different time.",
            "Apply to more than one program. If one says no or puts you on a waiting list, you still have another path, and you can ask what would make you a stronger applicant next time."
          ],
          steps: ["Choose two programs you checked are real.", "Write each one's deadline or next open date and how to apply.", "List your next steps, with a date for each.", "Put the dates in your phone calendar or on paper you see every day.", "Set a follow-up date after you apply."],
          words: [["Deadline", "the last day you can apply."], ["Information session", "a meeting where a program explains how it works and how to apply."], ["Waiting list", "a list of people who will get a place if one opens."], ["Follow up", "contact a program after you apply to check on your application."]],
          slides: [
            { title: "Why a plan with dates", bullets: ["Many programs open only at certain times", "Some fill fast", "Dates keep you from missing a window"] },
            { title: "For each program, write", bullets: ["Deadline or next open date", "How to apply and any test date", "No date found? Call or email and ask"] },
            { title: "Steps, each with a date", bullets: ["Get documents; update your résumé", "Practice for the test; attend a session", "Apply, then follow up"] },
            { title: "Always have a second path", bullets: ["Apply to two programs", "A no or a waiting list is not the end", "Ask how to be stronger next time"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "US Department of Labor: WIOA Adult program", url: "https://www.dol.gov/agencies/eta/workforce-investment/adult" }
          ],
          tryIt: "Make your Program Application Plan: your goal job, two checked programs with deadlines and how to apply, your document checklist, and five next steps with dates, ending with a follow-up date. Put the first step's date in your phone or calendar today.",
          youCanNow: "write an application plan with dated steps for two programs and follow up after you apply.",
          quickCheck: [
            { objective: "O6", q: "You cannot find a program's application deadline. What is your first step?", options: ["Call or email the program and ask", "Assume there is no deadline", "Wait until next year", "Apply to a random program instead"], answer: 0, why: "Asking the program directly gets you the real date for your plan." },
            { objective: "O6", q: "Why apply to two programs instead of one?", options: ["Programs require it", "It costs less", "So you still have a path if one says no or waitlists you", "So you can skip the deadlines"], answer: 2, why: "A second program keeps you moving if the first does not work out." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Choose well and apply",
        questions: [
          { objective: "O4", q: "Which is a warning sign of a job scam, according to the FTC?", options: ["The program is on apprenticeship.gov", "You must pay to get the job", "The program lists its address", "The program explains how long it takes"], answer: 1, why: "The FTC says honest employers never ask you to pay to get a job." },
          { objective: "O4", q: "You got a check from a \"new employer\" and must send part of it back by gift card. What is it?", options: ["A normal hiring step", "A training bonus", "A likely scam", "A tax refund"], answer: 2, why: "The FTC says no honest employer sends a check and asks you to send part back." },
          { objective: "O5", q: "A listing needs a high school diploma, and Tasha passed the GED. What is true?", options: ["The GED is often accepted as a high school equivalency; she checks the listing", "She can never apply", "She must pay to replace it", "She should leave it off"], answer: 0, why: "The GED is a high school equivalency many programs accept; the listing says what it takes." },
          { objective: "O5", q: "You need a state ID to apply. Where do you usually get one?", options: ["A social media group", "Your state's DMV", "The apprenticeship sponsor", "Any website that sells IDs"], answer: 1, why: "State IDs come from your state's DMV; your AJC or a reentry program can help." },
          { objective: "O6", q: "Which plan step is best written?", options: ["\"Apply sometime\"", "\"Think about it\"", "\"Maybe next month\"", "\"Submit the ACME electrical application online by March 3\""], answer: 3, why: "A good step says what, how and when." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Finding Apprenticeships and Job Training Programs",
    questions: [
      { objective: "O1", q: "What is a Registered Apprenticeship?", options: ["A paid job with training that ends with a recognized credential", "A free video course", "A one-day job fair", "A college loan"], answer: 0, why: "Apprentices earn a wage, learn on the job and in class, and finish with a credential." },
      { objective: "O1", q: "What is a pre-apprenticeship for?", options: ["Replacing a high school diploma", "Getting you ready to enter an apprenticeship", "Paying off debt", "Finishing a four-year degree"], answer: 1, why: "A pre-apprenticeship prepares people to enter a Registered Apprenticeship." },
      { objective: "O1", q: "Jamal needs to earn money right away and wants to learn a trade. Which fits best?", options: ["An unpaid online course", "A long-term university program", "A Registered Apprenticeship", "Waiting a year"], answer: 2, why: "An apprenticeship pays a wage while you learn." },
      { objective: "O2", q: "What can you type into the apprenticeship.gov Job Finder?", options: ["Your Social Security number", "Your bank PIN", "Your password", "A career path or a location"], answer: 3, why: "The Job Finder searches by career path, location or both." },
      { objective: "O2", q: "Apprenticeships are found in which fields?", options: ["Only construction", "Many fields, including health care, IT and manufacturing", "Only the military", "Only farming"], answer: 1, why: "Apprenticeships exist in many industries, not just construction." },
      { objective: "O2", q: "Why write the date you saw a listing?", options: ["Listings change, so the date shows how current it is", "The site requires it", "To get a discount", "It is not useful"], answer: 0, why: "Openings change, so noting the date helps you know when to act or recheck." },
      { objective: "O3", q: "How can you find your nearest American Job Center?", options: ["Ask a stranger online", "Pay a placement firm", "Search CareerOneStop or call 1-877-US-2JOBS", "Wait for a letter"], answer: 2, why: "CareerOneStop and the DOL toll-free line help you find your local AJC." },
      { objective: "O3", q: "Which US law funds job centers and can help eligible people pay for training?", options: ["WIOA", "HIPAA", "OSHA", "FAFSA"], answer: 0, why: "The Workforce Innovation and Opportunity Act funds American Job Centers and training help." },
      { objective: "O3", q: "Kayla is 20 and wants free career training with housing. Which program should she check, including its current status?", options: ["A payday loan", "A private boot camp ad", "A gift card offer", "Job Corps"], answer: 3, why: "Job Corps is a free program for young adults, generally 16-24; she checks jobcorps.gov for current openings." },
      { objective: "O3", q: "Which veteran benefit does the VA say can be used for many apprenticeships and on-the-job training?", options: ["Medicare", "The GI Bill", "Unemployment insurance", "Social Security"], answer: 1, why: "The VA says GI Bill benefits can be used for many apprenticeships and on-the-job training." },
      { objective: "O4", q: "A website asks for a fee to give you a \"federal job\" application. What is true?", options: ["You must pay to apply", "It is a discount", "Federal job applications are free, so it is a warning sign", "Only veterans pay"], answer: 2, why: "The FTC says official federal and postal job applications are always free." },
      { objective: "O4", q: "How should you get a program's phone number to check it?", options: ["Find it yourself on an official site", "Only use the number in the ad", "Ask the person who texted you", "You do not need to check"], answer: 0, why: "Finding contact details yourself avoids a scammer's fake number." },
      { objective: "O4", q: "A program is real but meets only during your work hours, two hours away. What do you do?", options: ["Sign up anyway and quit your job", "Pay extra to hold a seat", "Ignore the schedule", "Weigh the fit and look for a closer or better-timed program"], answer: 3, why: "A real program still has to fit your schedule and travel." },
      { objective: "O4", q: "Which is NOT a sign of a job scam?", options: ["A stranger offers big pay for little work", "The program is listed on your state's .gov site", "An upfront placement fee", "A check you must partly send back"], answer: 1, why: "Being listed on an official .gov site is a sign of a real program." },
      { objective: "O5", q: "What should you do with the documents you need to apply?", options: ["Keep copies in one safe folder", "Post them on social media", "Send originals to anyone who asks", "Throw them out after one use"], answer: 0, why: "Copies in one safe place keep you ready and protect your originals." },
      { objective: "O5", q: "Your checklist shows \"Transcript: Need it\". What do you write next to it?", options: ["Nothing", "\"Skip this program\"", "Where you will get it, such as your old school", "Your password"], answer: 2, why: "Writing where to get each missing item turns the checklist into a plan." },
      { objective: "O5", q: "Which is a common requirement for an apprenticeship?", options: ["Owning a house", "A college degree for every trade", "A paid membership in a website", "A diploma or equivalency and a basic math test"], answer: 3, why: "Many programs ask for a diploma or equivalency and a basic skills test; the listing says which." },
      { objective: "O6", q: "When is a good time to follow up after you apply, unless the program says otherwise?", options: ["The same hour", "About one to two weeks later", "Never", "Every day"], answer: 1, why: "A short, polite follow-up after one to two weeks shows interest without pressure." },
      { objective: "O6", q: "What makes a next step useful in your plan?", options: ["It has an action and a date", "It is very long", "It has no date so it is flexible", "It is kept only in your head"], answer: 0, why: "Steps with an action and a date are the ones you actually do." },
      { objective: "O6", q: "A program puts you on a waiting list. What is your best move?", options: ["Stop looking for programs", "Pay to move up the list", "Never contact them again", "Keep your other application going and ask how to be stronger"], answer: 3, why: "A second path and asking for feedback keep you moving forward." }
    ]
  },
  // ---- ADDIE: Evaluation (pre-test) ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 3, 6, 7, 10, 13, 14, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Right kind of program", objective: "O1", notYet: "The plan does not say whether each program is an apprenticeship, a pre-apprenticeship or a training program.", meets: "Each program is named as the right kind, and the learner can say why it fits now.", exceeds: "The plan also says what the learner would do next after finishing it (for example, pre-apprenticeship then apprenticeship)." },
      { name: "Two real programs found", objective: "O2", notYet: "Fewer than two programs, or a program with no sponsor, location or way to apply.", meets: "Two programs with sponsor, location and how to apply, from apprenticeship.gov, an AJC or another official source.", exceeds: "Also notes the date each was found and a backup program." },
      { name: "Job center questions", objective: "O3", notYet: "No American Job Center or questions listed.", meets: "The nearest AJC and at least four questions, including one about training funds.", exceeds: "The learner called or visited and wrote down the answers and the staff person's name." },
      { name: "Programs checked", objective: "O4", notYet: "No checks shown, or a program that asks for a fee to get the job.", meets: "At least three checks per program, including scam warning signs, with a result.", exceeds: "Also compares cost, length, credential and job results for the two programs." },
      { name: "Documents ready", objective: "O5", notYet: "No document list, or real ID numbers written on it.", meets: "Requirements and documents marked Have it / Need it, with where to get each missing item.", exceeds: "All missing items have a date to get them." },
      { name: "Dated plan", objective: "O6", notYet: "Steps have no dates, or there are fewer than five.", meets: "Five or more steps with dates, deadlines and a follow-up date.", exceeds: "The first step is already done or on the learner's calendar." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who submit at least one apprenticeship or training application within 30 days (follow-up survey)",
      "Learners who visit or call an American Job Center within 30 days",
      "Learners accepted into an apprenticeship, pre-apprenticeship or training program within 6 months, as reported by learners or partner programs",
      "Learners who report avoiding a pay-to-get-a-job offer"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet (a library or American Job Center computer works)",
      "Free sites: apprenticeship.gov, careeronestop.org, dol.gov, jobcorps.gov, va.gov",
      "Paper and pen, or a notes app, for the checklists and plan",
      "A calendar (phone or paper)",
      "About 60 to 75 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session with the \"Try it now\" searches done live; pair learners who are less confident online.",
      "Before the session, look up your local American Job Center, YouthBuild and pre-apprenticeship programs so you can point to real local options.",
      "Program status changes: check jobcorps.gov and apprenticeship.gov the week you teach and correct anything out of date.",
      "Never ask learners to write real ID, Social Security or bank numbers on practice sheets.",
      "For re-entry learners, have the contacts of local reentry and ID help programs ready; for veterans, the VA GI Bill page and the GI Bill Comparison Tool.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
