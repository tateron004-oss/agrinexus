"use strict";

// Koach Learn course: Veterans (military) -> "AI for Career Transition and Employment". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three
// micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Official pages checked 27 October 2026 (listed in each lesson's `sources`). See scripts/koachlearn-export.js.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "veterans-ai-career-transition",
  category: "Veterans (military)",
  name: "AI for Career Transition and Employment",
  skills: "Finding official transition help, Reading a job posting for keywords, Writing a civilian résumé tailored to a job, Writing a short cover letter and profile, Practicing interviews with AI, Spotting job scams",
  outcome: "use an AI assistant to write a one-page civilian résumé tailored to one real job posting and a 60-second \"tell me about yourself\" answer, check both for accuracy and private details, and know where to get free official help.",
  about: [
    "This course is for veterans and transitioning service members who are applying for civilian jobs. You have the experience; the job now is to show it in words a civilian hiring manager understands, and to be ready for the interview.",
    "You will find free official help, read a job posting like a hiring manager, use a free AI assistant to build a tailored résumé, a short cover letter and an online profile summary, and practice interview answers. You will also learn to spot job scams.",
    "Each lesson takes about five minutes: read, watch the slides, then do the \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Choose one real civilian job posting. Use an AI assistant to write a one-page résumé tailored to it (at least five bullets with civilian words and numbers) and a 60-second \"tell me about yourself\" answer. Check that every claim is true, that it has no Social Security, DD-214 or other private numbers, and practice the answer out loud twice.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans and transitioning service members applying for civilian jobs, from first-term enlisted to retirees.",
    startingPoint: "Have real experience, discipline and leadership, and can use a computer or smartphone. Most have not written a civilian résumé tailored to a posting or practiced a civilian interview, and few have used an AI assistant to help.",
    gap: "Civilian hiring managers and résumé-scanning software look for the posting's own words and clear results, and job scams target people in transition. Learners need to use AI to tailor a true, private résumé and interview answer to one real posting, and to know where to get free official help.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a computer is easiest for résumé work; a smartphone works for practice",
      "Privacy: no Social Security, DD-214 or other private numbers in any AI prompt or résumé",
      "Honesty: every claim and number on the résumé must be true",
      "Time: about 5-minute lessons that fit around transition appointments and work"
    ],
    prerequisites: "None. \"Introduction to AI and the Future Workforce\" helps learners turn duties into civilian bullets first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your stage of transition", action: "identify free official sources of job help and choose one to contact", standard: "with a contact method or appointment written down" },
    { id: "O2", condition: "Given one real job posting", action: "list its must-haves, nice-to-haves and keywords with AI help and match them to your skills", standard: "with at least 10 keywords from the posting" },
    { id: "O3", condition: "Using your keyword list", action: "write a one-page civilian résumé tailored to the posting with AI help", standard: "with at least five bullets in civilian words and numbers, every claim true and no private numbers" },
    { id: "O4", condition: "For the same job", action: "write a short cover letter and an online profile summary with AI help", standard: "edited so they sound like you" },
    { id: "O5", condition: "With an AI acting as a hiring manager", action: "practice a 60-second \"tell me about yourself\" answer and STAR answers out loud", standard: "at least twice, writing down one strength and one fix" },
    { id: "O6", condition: "When you search for jobs", action: "search official job sources and identify the warning signs of a job scam", standard: "paying nothing and sharing no private numbers before a real offer" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building your civilian résumé",
      lessons: [
        {
          objectives: ["O1"],
          title: "Free official transition and job help",
          minutes: 5,
          goal: "Name three free official sources of job help and choose one to contact.",
          text: [
            "You do not have to do this alone. The Transition Assistance Program (TAP) is run by several agencies, including the Department of Labor, the Department of Defense and the VA. The Department of Labor's part includes employment workshops and one-on-one help through its Employment Navigator and Partnership Program at select installations. Find class schedules through your installation's transition office.",
            "After you leave, American Job Centers (nearly 2,400 nationwide, found through CareerOneStop) help with job searches and training, and veterans get priority of service. The VA's Personalized Career Planning and Guidance program gives free career and education counseling, including résumé help, to eligible veterans and service members.",
            "AI is a great writing partner, but a trained counselor knows your local job market and your benefits. Use both."
          ],
          steps: ["Still serving: contact your installation's transition office about TAP.", "Out of service: find your nearest American Job Center on CareerOneStop.", "Read the VA's Personalized Career Planning and Guidance page and check eligibility.", "Book one appointment this week."],
          words: [["TAP", "Transition Assistance Program: training and help for service members moving to civilian life."], ["American Job Center", "a free Department of Labor-funded center for job search and training help."], ["Priority of service", "veterans are served first for many Department of Labor job and training programs."]],
          slides: [
            { title: "Still serving", bullets: ["Transition Assistance Program (TAP)", "DOL employment workshops", "One-on-one help at select installations"] },
            { title: "After you leave", bullets: ["American Job Centers, found on CareerOneStop", "Veterans get priority of service", "VA free career counseling"] },
            { title: "Use both", bullets: ["AI for writing help", "A counselor for local jobs and benefits"] }
          ],
          sources: [
            { name: "U.S. Department of Labor: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "Pick the one official source from this lesson that fits you now. Find its page or nearest office and write down how to contact it. Book or plan one appointment.",
          youCanNow: "name free official sources of job help and choose the right one to contact.",
          quickCheck: [
            { objective: "O1", q: "Which of these is a free official source of job help for transitioning service members?", options: ["A paid résumé site from an ad", "A stranger on social media", "TAP at your installation's transition office", "A text offering guaranteed jobs"], answer: 2, why: "TAP is the official, free transition program for service members." },
            { objective: "O1", q: "You have used AI to draft your résumé. What else do you do?", options: ["Ask a TAP, American Job Center or VA counselor to review it", "Send it to every job without reading it", "Skip counselors because AI is enough", "Post it publicly with your phone number"], answer: 0, why: "AI helps you write, but a counselor knows local jobs and benefits and can catch mistakes." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reading a job posting like a hiring manager",
          minutes: 5,
          goal: "Pull the key requirements and keywords out of a job posting with AI help.",
          text: [
            "Every job posting tells you what the employer wants to hear. Many companies use an applicant tracking system (ATS) that scans résumés for words that match the posting, so using the posting's own words matters.",
            "Copy a real posting into an AI assistant and ask: \"List the must-have requirements, the nice-to-have skills, and the 10 most important keywords from this posting. Then tell me which of my skills match: I was a Marine Corps supply chief for 7 years, led 10 Marines, managed $2 million in equipment.\"",
            "Check the AI's list against the posting yourself. If you meet most of the must-haves, apply. Many people apply without meeting every nice-to-have."
          ],
          steps: ["Choose one real job posting.", "Paste the posting (not your private details) into an AI assistant.", "Ask for must-haves, nice-to-haves and top keywords.", "Ask which of your skills match.", "Check the list against the posting yourself."],
          words: [["Applicant tracking system (ATS)", "software employers use to collect and scan résumés for matching words."], ["Keyword", "an important word or phrase from the posting, like \"inventory control\"."], ["Must-have", "a requirement you need to be considered."]],
          slides: [
            { title: "The posting tells you what to say", bullets: ["Employers scan for matching words", "Use the posting's own words"] },
            { title: "Ask AI to pull out", bullets: ["Must-have requirements", "Nice-to-have skills", "Top 10 keywords", "Which of your skills match"] },
            { title: "Then decide", bullets: ["Check the list yourself", "Meet most must-haves? Apply"] }
          ],
          tryIt: "Find one real job posting you would want. Ask an AI assistant to list its must-haves, nice-to-haves and top 10 keywords, and which of your skills match.",
          youCanNow: "pull the requirements and keywords out of a job posting and match them to your experience.",
          quickCheck: [
            { objective: "O2", q: "What is a nice-to-have in a job posting?", options: ["A requirement you must meet to apply", "The salary", "The company's address", "A skill that helps but is not required"], answer: 3, why: "Nice-to-haves are extras; you can still apply if you meet most must-haves." },
            { objective: "O2", q: "You paste a job posting into an AI. What do you ask for?", options: ["\"Is this job good?\"", "\"List the must-haves, nice-to-haves and top 10 keywords, and which of my skills match.\"", "\"Apply for me.\"", "\"Write my Social Security number on it.\""], answer: 1, why: "A clear request pulls out the requirements and keywords you need to tailor your résumé." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing a tailored civilian résumé",
          minutes: 6,
          goal: "Use AI to draft a one-page résumé tailored to one posting, with civilian words and numbers.",
          text: [
            "A civilian résumé is usually one or two pages, not a full service record. It has a short summary at the top, your experience with bullets, your skills, your education and certifications. Use civilian job titles where they fit (\"supply chain supervisor\" rather than \"supply chief\") and explain what you did, how big it was, and the result.",
            "Give the AI your experience in plain words and the keywords from Lesson 2: \"Write a one-page résumé for this logistics coordinator posting. Use these keywords. My experience: [plain description]. Use strong verbs and numbers, no military acronyms.\"",
            "Leave out your Social Security number, DD-214 details, full birth date and security clearance details beyond what the posting asks for. Never let AI add things you did not do. Then ask a TAP, American Job Center or VA counselor to look at it."
          ],
          steps: ["Write your experience in plain words: what, how big, what result.", "Give AI the keywords from the posting.", "Ask for a one-page résumé with a summary, experience bullets and skills.", "Replace military terms and check every claim is true.", "Remove private details and ask a counselor to review it."],
          words: [["Summary", "two or three lines at the top of a résumé saying who you are and what you offer."], ["Tailor", "change your résumé to match one specific job."]],
          slides: [
            { title: "Civilian résumé shape", bullets: ["Short summary", "Experience bullets with results", "Skills, education, certifications"] },
            { title: "Say it their way", bullets: ["Civilian titles where they fit", "What, how big, what result", "Use the posting's keywords"] },
            { title: "Keep it true and safe", bullets: ["No SSN, DD-214 details or full birth date", "Never let AI add what you did not do", "Have a counselor review it"] }
          ],
          tryIt: "Use your keyword list from Lesson 2. Ask an AI assistant to draft a one-page résumé for that posting. Change any line that is not exactly true.",
          youCanNow: "write a one-page civilian résumé tailored to a specific job posting with AI help.",
          quickCheck: [
            { objective: "O3", q: "Why does a tailored résumé use the posting's own words?", options: ["So scanning software and the hiring manager see the match", "So it is longer", "So it uses military terms", "So you can skip the cover letter"], answer: 0, why: "Applicant tracking systems and hiring managers look for the posting's keywords." },
            { objective: "O3", q: "The AI's draft says you earned a certification you do not have. What do you do?", options: ["Leave it; no one checks", "Say you are earning it soon", "Remove it so every claim is true", "Add two more certifications"], answer: 2, why: "Every claim on your résumé must be true." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building your civilian résumé",
        questions: [
          { objective: "O1", q: "You leave service next month and want one-on-one job help. A good first stop is:", options: ["Your installation's transition office and TAP", "A random job website", "A social media influencer", "A pay-to-apply service"], answer: 0, why: "TAP and the Department of Labor offer workshops and one-on-one help." },
          { objective: "O2", q: "What is an applicant tracking system?", options: ["A GPS for job interviews", "Software that scans résumés for matching words", "A VA benefit", "A military database"], answer: 1, why: "Many employers use it to sort résumés." },
          { objective: "O2", q: "Why use the job posting's own words on your résumé?", options: ["To copy the employer", "To make it longer", "So scanning software and hiring managers see the match", "It is required by law"], answer: 2, why: "Matching keywords show you fit the job." },
          { objective: "O3", q: "Which résumé bullet works best for a civilian logistics job?", options: ["\"S4 shop NCOIC\"", "\"Did supply stuff\"", "\"Hooah\"", "\"Managed $2 million in equipment with zero losses across 3 inventories\""], answer: 3, why: "Civilian words, numbers and a result." },
          { objective: "O3", q: "Which should you leave OFF a civilian résumé?", options: ["Your Social Security number", "Your skills", "A short summary", "Your certifications"], answer: 0, why: "Private numbers do not belong on a résumé." }
        ]
      }
    },
    {
      name: "Chapter 2: Applying and interviewing",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing a short cover letter and profile summary",
          minutes: 5,
          goal: "Use AI to write a short cover letter and an online profile summary in your own voice.",
          text: [
            "A cover letter is a short letter that says why you want this job and why you fit. Keep it to three short paragraphs: why this job, your two or three best matches with proof, and a polite close.",
            "Ask the AI: \"Write a 3-paragraph cover letter for this posting, using my résumé. Sound confident but not stiff, no military jargon.\" Then make it sound like you: change words you would never say.",
            "An online profile summary, for example on LinkedIn, is two to four sentences about who you are and what work you want. Ask the AI for three versions, pick one and edit it."
          ],
          steps: ["Give AI the posting and your résumé.", "Ask for a three-paragraph cover letter.", "Edit it so it sounds like you.", "Ask for three versions of a two-to-four-sentence profile summary.", "Pick one, edit it and use it."],
          words: [["Cover letter", "a short letter sent with a résumé saying why you want and fit the job."], ["Profile summary", "a few sentences about you at the top of an online career profile."]],
          slides: [
            { title: "Cover letter: three paragraphs", bullets: ["Why this job", "Your best matches, with proof", "A polite close"] },
            { title: "Make it yours", bullets: ["Confident, not stiff", "No military jargon", "Change words you would never say"] },
            { title: "Profile summary", bullets: ["Two to four sentences", "Who you are and what work you want", "Ask AI for three versions"] }
          ],
          tryIt: "Ask an AI assistant for a three-paragraph cover letter for the job from Lesson 2. Change at least three phrases so it sounds like you.",
          youCanNow: "write a short cover letter and a profile summary with AI help, in your own voice.",
          quickCheck: [
            { objective: "O4", q: "How long is a good cover letter?", options: ["One sentence", "Three short paragraphs", "Three full pages", "As long as your résumé"], answer: 1, why: "Three short paragraphs cover why this job, your best matches and a polite close." },
            { objective: "O4", q: "The AI's cover letter uses words you would never say. What do you do?", options: ["Send it as it is", "Ask for a longer version", "Copy a friend's letter instead", "Change at least three phrases so it sounds like you"], answer: 3, why: "Your cover letter should sound like you, so the interview matches the letter." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Practicing interviews with AI",
          minutes: 6,
          goal: "Practice a 60-second introduction and two STAR answers with an AI interviewer.",
          text: [
            "Most interviews start with \"Tell me about yourself.\" A good answer takes about 60 seconds: who you are now, your most relevant experience, and why you want this job. Do not tell your whole service history.",
            "For \"Tell me about a time...\" questions, use STAR: situation, task, action, result. Example: \"Our unit's vehicle readiness was at 70% (situation). I was asked to raise it before an inspection (task). I set up a daily parts tracker and a two-shift schedule (action). Readiness hit 92% in six weeks (result).\"",
            "Ask the AI to act as an interviewer: \"Act as a hiring manager for this job. Ask me one question at a time. After each answer, give me one thing I did well and one thing to improve.\" Practice out loud. If you use voice mode, speak naturally."
          ],
          steps: ["Write a 60-second \"tell me about yourself\" answer.", "Write two STAR stories from your service.", "Ask AI to act as the interviewer, one question at a time.", "Answer out loud and ask for one strength and one fix each time.", "Practice until it feels natural."],
          words: [["STAR", "situation, task, action, result: a way to tell a short story about your work."], ["Behavioral question", "an interview question that asks about a time you did something."]],
          slides: [
            { title: "\"Tell me about yourself\"", bullets: ["About 60 seconds", "Who you are now", "Most relevant experience", "Why this job"] },
            { title: "STAR answers", bullets: ["Situation", "Task", "Action", "Result, with a number if you can"] },
            { title: "AI as interviewer", bullets: ["One question at a time", "One strength, one fix after each", "Practice out loud"] }
          ],
          tryIt: "Ask an AI assistant to act as a hiring manager for your chosen job. Answer three questions out loud, including \"Tell me about yourself\", and write down the feedback.",
          youCanNow: "give a 60-second introduction and answer behavioral questions using STAR.",
          quickCheck: [
            { objective: "O5", q: "What does the A in a STAR answer stand for?", options: ["Award", "Attitude", "Action", "Answer"], answer: 2, why: "STAR is situation, task, action, result; the action is what you did." },
            { objective: "O5", q: "You want to practice with an AI interviewer. Which request do you use?", options: ["\"Ask one question at a time and give me one strength and one fix.\"", "\"Give me all the answers to memorize.\"", "\"Ask me 30 questions at once.\"", "\"Tell me I am perfect.\""], answer: 0, why: "One question at a time with feedback lets you practice and improve each answer." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Searching smart and spotting job scams",
          minutes: 5,
          goal: "Search official job sources and spot the warning signs of a job scam.",
          text: [
            "Search where real jobs are posted: company websites, the CareerOneStop Job Finder, American Job Centers, and for federal jobs USAJOBS and the Office of Personnel Management's FedsHireVets site, which explains federal hiring for veterans, including veterans' preference.",
            "Scammers target job seekers. Warning signs: a job offer without an interview, a request to pay for training or equipment, a check to deposit and send money back, interviews only by text chat, or a request for your Social Security number or bank details before a real offer.",
            "Ask an AI to point out warning signs in a suspicious posting, after removing your details. Then check the company yourself on its official website. Only give private details for real paperwork, after a real offer, through the employer's official process."
          ],
          steps: ["Search company sites, CareerOneStop, American Job Centers and USAJOBS.", "Look for warning signs: no interview, upfront payment, check-and-send-back, text-only interviews.", "Do not give SSN or bank details before a real offer.", "Check the company on its official website.", "Ask AI to list warning signs in a suspicious posting."],
          words: [["Veterans' preference", "rules that give eligible veterans an advantage in federal hiring."], ["Job scam", "a fake job offer meant to steal money or personal information."]],
          slides: [
            { title: "Search where real jobs are", bullets: ["Company websites", "CareerOneStop and American Job Centers", "USAJOBS and FedsHireVets for federal jobs"] },
            { title: "Job scam warning signs", bullets: ["Offer without an interview", "Pay for training or equipment", "Deposit a check and send money back", "Text-only interviews"] },
            { title: "Protect yourself", bullets: ["No SSN or bank details before a real offer", "Check the company yourself", "Ask AI to spot warning signs"] }
          ],
          sources: [
            { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "Office of Personnel Management: FedsHireVets", url: "https://www.opm.gov/fedshirevets/" }
          ],
          tryIt: "Final task: finish your one-page résumé tailored to your chosen posting and your 60-second \"tell me about yourself\" answer. Check every claim is true and there are no private numbers, then say the answer out loud twice.",
          youCanNow: "search official job sources, avoid job scams, and apply with a tailored résumé and a practiced introduction.",
          quickCheck: [
            { objective: "O6", q: "Where are U.S. federal jobs posted?", options: ["Only on social media", "In text messages from strangers", "On paid résumé sites", "USAJOBS"], answer: 3, why: "USAJOBS is the official site for federal job postings." },
            { objective: "O6", q: "A recruiter asks for your Social Security number before any interview. What do you do?", options: ["Send it so you do not lose the job", "Do not send it; give it only for real paperwork after a real offer", "Send half of it", "Send your DD-214 instead"], answer: 1, why: "Asking for private numbers before any interview or offer is a scam warning sign." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Applying and interviewing",
        questions: [
          { objective: "O4", q: "A good cover letter is:", options: ["Five pages long", "Three short paragraphs: why this job, your best matches, a polite close", "A copy of your résumé", "Full of military acronyms"], answer: 1, why: "Short, focused and matched to the job." },
          { objective: "O5", q: "A \"tell me about yourself\" answer should be about:", options: ["10 minutes", "Your whole service history", "60 seconds: who you are, relevant experience, why this job", "Your family history"], answer: 2, why: "Short and focused on the job." },
          { objective: "O5", q: "What does the R in STAR stand for?", options: ["Rank", "Reason", "Report", "Result"], answer: 3, why: "End with the result, ideally with a number." },
          { objective: "O6", q: "A \"company\" offers you a job without an interview and asks you to pay for training. This is:", options: ["A warning sign of a job scam", "A normal job offer", "A veterans' benefit", "Veterans' preference"], answer: 0, why: "No interview and upfront payment are classic job scam signs." },
          { objective: "O6", q: "Which site explains federal hiring for veterans, including veterans' preference?", options: ["A pop-up ad", "OPM's FedsHireVets", "A text message link", "Any AI chatbot"], answer: 1, why: "FedsHireVets is OPM's resource for veterans seeking federal careers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Career Transition and Employment",
    questions: [
      { objective: "O1", q: "TAP stands for:", options: ["Transition Assistance Program", "Training and Pay", "Total Army Program", "Tech Apprentice Plan"], answer: 0, why: "TAP helps service members move to civilian life." },
      { objective: "O1", q: "Which agencies are part of TAP?", options: ["Only private companies", "Several, including the Department of Labor, DoD and the VA", "Only the Army", "Only the VA"], answer: 1, why: "TAP is an interagency effort." },
      { objective: "O1", q: "Where can veterans get priority of service for job search and training help?", options: ["A car dealer", "A social media group", "American Job Centers", "A pay-to-apply website"], answer: 2, why: "The Department of Labor gives veterans priority of service there." },
      { objective: "O1", q: "Which VA program gives free career counseling, including résumé help, to eligible veterans?", options: ["VA home loans", "TRICARE", "The GI Bill Comparison Tool", "Personalized Career Planning and Guidance"], answer: 3, why: "The VA lists it as free career and education counseling." },
      { objective: "O1", q: "Why use both AI and a counselor?", options: ["AI helps you write; a counselor knows local jobs and benefits", "AI is always wrong", "Counselors write everything for you", "You only need one"], answer: 0, why: "Each does something the other cannot." },
      { objective: "O2", q: "A \"must-have\" in a job posting is:", options: ["A nice extra", "A requirement you need to be considered", "The salary", "The office address"], answer: 1, why: "Must-haves are the core requirements." },
      { objective: "O3", q: "When you paste a job posting into AI, you should NOT also paste:", options: ["The job title", "The requirements", "Your Social Security number", "The keywords"], answer: 2, why: "Private numbers never go into AI." },
      { objective: "O2", q: "You meet most must-haves but not every nice-to-have. You should:", options: ["Never apply", "Lie about the rest", "Wait five years", "Apply"], answer: 3, why: "Many people apply without every nice-to-have." },
      { objective: "O3", q: "To tailor a résumé means to:", options: ["Change it to match one specific job", "Make it longer", "Add every job you ever had", "Print it in color"], answer: 0, why: "Tailoring matches your résumé to the posting." },
      { objective: "O3", q: "Which is a better civilian title for a supply chief?", options: ["S4 NCOIC", "Supply chain supervisor", "Gunny", "Chief of Stuff"], answer: 1, why: "Civilian titles help hiring managers understand your role." },
      { objective: "O3", q: "The AI's résumé draft says you led 50 people; you led 10. You:", options: ["Keep 50, it sounds better", "Change it to 100", "Change it to the true number, 10", "Remove all numbers"], answer: 2, why: "Every claim must be true." },
      { objective: "O3", q: "Who should review your résumé before you send it?", options: ["A stranger online", "Nobody", "Only the AI", "A TAP, American Job Center or VA counselor"], answer: 3, why: "A trained counselor can spot problems AI misses." },
      { objective: "O4", q: "A profile summary is:", options: ["Two to four sentences about who you are and the work you want", "Your full service record", "Your home address", "A list of passwords"], answer: 0, why: "It is a short introduction at the top of an online profile." },
      { objective: "O4", q: "After AI writes your cover letter, you should:", options: ["Send it unread", "Edit it so it sounds like you", "Add military jargon", "Make it five pages"], answer: 1, why: "Your letter should sound like you." },
      { objective: "O5", q: "STAR stands for:", options: ["Skills, training, awards, rank", "Start, try, answer, repeat", "Situation, task, action, result", "Speak, think, act, rest"], answer: 2, why: "STAR is a way to tell a short work story." },
      { objective: "O5", q: "When AI acts as your interviewer, a good request is:", options: ["\"Ask all questions at once\"", "\"Answer for me\"", "\"Tell me I am perfect\"", "\"Ask one question at a time and give one strength and one fix\""], answer: 3, why: "One at a time with feedback builds real skill." },
      { objective: "O5", q: "Practicing interview answers out loud helps because:", options: ["Speaking is different from reading; it makes answers natural", "It is required", "AI cannot read text", "It is faster than typing"], answer: 0, why: "Saying it out loud prepares you for the real interview." },
      { objective: "O6", q: "Where are federal jobs posted?", options: ["Only on social media", "USAJOBS", "In text messages", "Only at bases"], answer: 1, why: "USAJOBS is the federal government's job site." },
      { objective: "O6", q: "A recruiter sends you a check to deposit and asks you to send part back. This is:", options: ["A signing bonus", "A VA benefit", "A job scam warning sign", "Normal onboarding"], answer: 2, why: "Check-and-send-back is a common scam." },
      { objective: "O6", q: "When is it OK to give your Social Security number to an employer?", options: ["In the first text chat", "To get an interview", "Before any offer", "For real paperwork after a real offer, through the official process"], answer: 3, why: "Real employers need it only for hiring paperwork after an offer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      5,
      7,
      8,
      10,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Tailored to the posting",
        objective: "O2",
        notYet: "The résumé could be for any job; few of the posting's keywords appear.",
        meets: "The résumé uses the posting's keywords and shows the must-haves the learner meets.",
        exceeds: "The learner can point to where each must-have is shown."
      },
      {
        name: "Civilian bullets with numbers",
        objective: "O3",
        notYet: "Fewer than five bullets, or bullets with military slang and no numbers.",
        meets: "At least five bullets in civilian words, with numbers or results, on one page.",
        exceeds: "Every bullet shows what was done, how big it was and the result."
      },
      {
        name: "True and private",
        objective: "O6",
        notYet: "A claim is not true, or a Social Security, DD-214 or other private number appears.",
        meets: "Every claim is true, and no private numbers appear.",
        exceeds: "A counselor or trusted reader has checked it."
      },
      {
        name: "60-second answer",
        objective: "O5",
        notYet: "The answer is much longer than 60 seconds or not about this job.",
        meets: "About 60 seconds: who you are, relevant experience and why this job, said out loud twice.",
        exceeds: "The learner used AI feedback to improve one part between the two tries."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply to at least one job with their tailored résumé within 30 days (follow-up survey)",
      "Learners who get an interview or job offer within 90 days",
      "Learners who contact TAP, an American Job Center or VA career counseling within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet (a smartphone works for interview practice)",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "One real civilian job posting the learner wants",
      "A word processor such as Google Docs or Microsoft Word for the résumé",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Have each learner bring one real job posting to the first session.",
      "Remind learners that Social Security, DD-214 and other private numbers never go into an AI prompt or onto a résumé.",
      "Run interview practice in pairs after the AI practice: one asks, one answers out loud, then switch.",
      "Score the final résumé and answer with the rubric, and give feedback on one Not yet row at a time.",
      "Connect learners with TAP, an American Job Center or VA career counseling for review after the course."
    ]
  }
};
