"use strict";

// Koach Learn course: Re-Entry -> "AI and Continuing Education" (bonus). Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Facts checked 27 October 2026: CareerOneStop (US Department of Labor) American Job Center Finder, helpline 1-877-872-5627; the FAFSA is the Free Application for Federal Student Aid at studentaid.gov.
// NOT confirmed: the current studentaid.gov wording on criminal convictions and aid (page timed out), so the course tells students to check studentaid.gov or a school's financial aid office.

module.exports = {
  id: "reentry-ai-continuing-education",
  category: "Re-Entry",
  name: "AI and Continuing Education",
  skills: "Setting a learning goal tied to a job, Finding free and low-cost programs, Using AI as a study tutor, Making a study plan, Checking a program before you sign up, Preparing to apply for financial aid",
  outcome: "choose a learning goal that leads to a job, find a real program (a high school equivalency class, a certificate or a college course) and check it before you sign up, and use an AI assistant as a tutor with a weekly study plan.",
  about: [
    "Many people come home ready to learn: finish a high school equivalency, earn a trade certificate, start community college, or learn computer skills. Education can open doors to better jobs.",
    "You will set a goal that leads to a job, find free and low-cost programs, check a program before you sign up, prepare for financial aid, and use a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini as a patient study tutor.",
    "Each lesson takes about five minutes. AI is a study helper, not a way to do your assignments for you; schools have rules about that. Never type private numbers or case details into AI. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Choose one learning goal tied to a job. Find one real program for it and check it with five questions (cost, length, schedule, what you earn at the end, and how it helps you get hired). Then ask an AI assistant for a four-week study plan, use it to teach and quiz you on the first topic, and put your first two study sessions in your calendar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults coming home from prison (re-entry) who want to keep learning: finish a high school equivalency, earn a trade certificate, start community college or learn computer skills to get a better job.",
    startingPoint: "Can use a basic phone and some apps. Many have not been in school for years, do not know how to check a program or apply for aid, and have little experience using AI as a study helper.",
    gap: "Education can open doors to better jobs, but people coming home can waste time and money on programs that do not lead to work, or on scams with big loans. Learners need to set a job-linked goal, find and check real programs, study with AI honestly and prepare for financial aid.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a smartphone or library computer with internet",
      "Time: about 5-minute lessons that fit around work and appointments",
      "School rules: AI is a study helper, not a way to do assignments",
      "Privacy: never type private numbers, tax details or case details into AI; aid forms only on studentaid.gov"
    ],
    prerequisites: "\"Introduction to AI and Digital Confidence\" is helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a job you want", action: "write a learning goal connected to that job", standard: "in one sentence, with any licensing rules checked with the state board" },
    { id: "O2", condition: "Using careeronestop.org, libraries, adult schools or community colleges", action: "find at least two real programs that match your goal", standard: "with phone numbers taken from their official sites" },
    { id: "O3", condition: "Given one program", action: "check it with five questions on cost, length, schedule, what you earn and how it helps you get hired", standard: "with answers from the program itself and any pressure to sign a big loan treated as a red flag" },
    { id: "O4", condition: "Given a topic from your goal", action: "ask an AI assistant to explain it, give an example and quiz you", standard: "without having AI do your assignments, and checking mistakes with your teacher or textbook" },
    { id: "O5", condition: "Given your work and appointments", action: "make a four-week study plan with AI help", standard: "with short, regular sessions and the first two in your calendar" },
    { id: "O6", condition: "Using studentaid.gov", action: "list where to apply for federal student aid and what to prepare", standard: "with three questions for a financial aid office and private details typed only on studentaid.gov" }
  ],
  chapters: [
    {
      name: "Chapter 1: Choosing your path",
      lessons: [
        {
          objectives: ["O1"],
          title: "Setting a learning goal that leads to a job",
          minutes: 5,
          goal: "Choose a learning goal connected to a real job.",
          text: [
            "Learning is most useful when it leads somewhere. Start with the job you want, then work backward to what you need to learn.",
            "Ask AI: \"I want to work as a forklift operator or in a warehouse lead role. What training or certificates do people usually get for that? Which ones are short and low-cost?\" Or: \"I want to be an electrician. What are the usual steps?\"",
            "Some jobs need a license, and some licensing rules consider a person's record. Check with your state's licensing board or a reentry program before you invest time and money. AI can give you a starting list, but the official board has the final word."
          ],
          steps: ["Name the job you want.", "Ask AI what training people usually get for it.", "Pick the shortest useful next step.", "If it needs a license, check your state licensing board.", "Write your goal in one sentence."],
          words: [["Certificate", "proof you finished a training program in a specific skill."], ["High school equivalency", "a test, such as the GED, that shows high school level skills."]],
          slides: [
            { title: "Start with the job", bullets: ["Then work backward", "What do I need to learn?"] },
            { title: "Ask AI", bullets: ["\"What training do people get for this job?\"", "\"Which options are short and low-cost?\""] },
            { title: "Check licensing", bullets: ["Some jobs need a license", "Rules may consider records", "Ask your state board or a reentry program"] }
          ],
          tryIt: "Write the job you want. Ask an AI assistant what training people usually get for it, and write your learning goal in one sentence.",
          youCanNow: "set a learning goal that leads to a job.",
          quickCheck: [
            { objective: "O1", q: "What is a certificate?", options: ["A college degree", "Proof you finished training in a skill", "A job offer", "A loan"], answer: 1, why: "A certificate shows you finished training in a specific skill." },
            { objective: "O1", q: "You want to become an electrician. How would you start your learning goal?", options: ["Sign up for the first class you see", "Ask a friend which class is easiest", "Start with the job, then find the training it needs and check the state licensing board", "Wait until someone offers you training"], answer: 2, why: "Starting from the job and checking the licensing board leads to the right training." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Finding free and low-cost programs",
          minutes: 5,
          goal: "Find at least two real programs that match your goal.",
          text: [
            "There are many places to learn for little or no money: adult education centers (often for high school equivalency and English), public libraries, community colleges, reentry programs, and American Job Centers, which can offer career counseling and training referrals.",
            "Find your nearest American Job Center with the CareerOneStop finder at careeronestop.org, a US Department of Labor site, or call its helpline at 1-877-872-5627. Services differ by center, so call or visit to confirm what yours offers.",
            "Online, many respected sites offer free lessons, such as Khan Academy for math and reading and free courses from community colleges. Ask AI for ideas, then go to each program's own website to confirm it exists and what it costs."
          ],
          steps: ["Ask AI where people in your area can learn your skill.", "Look up your nearest American Job Center on careeronestop.org.", "Check your library, adult school and community college.", "Write down two programs.", "Confirm each on its own website or by phone."],
          words: [["American Job Center", "a US Department of Labor-funded office that helps with jobs and training."], ["Community college", "a local, lower-cost college with certificates and two-year degrees."]],
          slides: [
            { title: "Low-cost places to learn", bullets: ["Adult education and libraries", "Community colleges", "Reentry programs and American Job Centers"] },
            { title: "American Job Centers", bullets: ["Find one at careeronestop.org", "Helpline: 1-877-872-5627", "Services vary: call to confirm"] },
            { title: "Online", bullets: ["Free lessons like Khan Academy", "Confirm programs on their own sites"] }
          ],
          sources: [{ name: "CareerOneStop: American Job Center Finder (US Department of Labor)", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/american-job-centers.aspx" }],
          tryIt: "Find your nearest American Job Center on careeronestop.org and one other program (library, adult school or community college) for your goal. Write down both, with phone numbers from their official sites.",
          youCanNow: "find free and low-cost programs for your learning goal.",
          quickCheck: [
            { objective: "O2", q: "What is a community college?", options: ["A local, lower-cost college", "An online-only school", "A private job agency", "A high school for adults only"], answer: 0, why: "Community colleges are local and usually cost less than other colleges." },
            { objective: "O2", q: "AI suggests a training program near you. What would you do?", options: ["Sign up right away", "Pay a deposit to hold a seat", "Share it without checking", "Confirm it on the program's own website"], answer: 3, why: "AI can be wrong, so you confirm programs on their official site." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Checking a program before you sign up",
          minutes: 5,
          goal: "Ask five questions to check whether a program is real and worth it.",
          text: [
            "Some programs are excellent. Some cost a lot and lead nowhere, and a few are scams that target people who want a fresh start. Check before you sign or pay.",
            "Ask five questions: What is the total cost, including books and fees? How long does it take, and what is the schedule? What do I earn at the end (a certificate, license or credits)? Is the school accredited or the certificate recognized by employers? How many graduates get jobs, and does it help with job placement?",
            "AI can help you prepare the questions and explain words like \"accredited\". But the answers must come from the program itself, in writing, and from your own checks. Be wary of pressure to sign today or to take a big loan."
          ],
          steps: ["Ask about total cost.", "Ask about length and schedule.", "Ask what you earn at the end.", "Ask if it is accredited or recognized by employers.", "Ask about job results and placement help."],
          words: [["Accredited", "approved by an official group that checks a school's quality."], ["Job placement", "help finding a job after you finish."]],
          slides: [
            { title: "Check before you sign", bullets: ["Some programs lead nowhere", "Some are scams"] },
            { title: "Five questions", bullets: ["Total cost? Length and schedule?", "What do I earn at the end?", "Accredited or recognized?", "Job results and placement?"] },
            { title: "Red flags", bullets: ["Pressure to sign today", "Big loans for a short course", "No answers in writing"] }
          ],
          tryIt: "Pick one program from Lesson 2. Ask an AI assistant to help you turn the five questions into a short phone script, then call or check the program's website and write down the answers.",
          youCanNow: "check a program with five questions before you sign up.",
          quickCheck: [
            { objective: "O3", q: "What does \"accredited\" mean?", options: ["Approved by an official quality group", "Free of charge", "Online only", "Run by the government"], answer: 0, why: "Accreditation means an official group checked the program's quality." },
            { objective: "O3", q: "A school says you must sign a big loan today to keep your spot. What would you do?", options: ["Sign so you do not lose the spot", "Sign but plan not to pay", "Treat it as a red flag and take time to check", "Ask AI to sign for you"], answer: 2, why: "Pressure to sign a big loan right away is a red flag." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing your path",
        questions: [
          { objective: "O1", q: "Where is the best place to start a learning goal?", options: ["A random class", "Whatever course is advertised most", "The job you want, then work backward", "The longest program"], answer: 2, why: "A job goal keeps learning useful." },
          { objective: "O1", q: "AI says a job needs a license. Who has the final word on the rules?", options: ["Your state licensing board", "AI", "A friend", "A social media post"], answer: 0, why: "Official boards set licensing rules." },
          { objective: "O2", q: "Where can you find your nearest American Job Center?", options: ["A gift card site", "A pop-up ad", "Any text message", "careeronestop.org"], answer: 3, why: "CareerOneStop is the Department of Labor's finder." },
          { objective: "O3", q: "Which question checks a program's value?", options: ["\"What color is the building?\"", "\"How many graduates get jobs?\"", "\"Can I sign today without reading?\"", "\"Do you have a parking lot?\""], answer: 1, why: "Job results show whether it leads somewhere." },
          { objective: "O3", q: "A program pressures you to sign a big loan today. This is:", options: ["A great deal", "A red flag", "Required", "Normal for all schools"], answer: 1, why: "Pressure and big loans are warning signs." }
        ]
      }
    },
    {
      name: "Chapter 2: Learning with AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Using AI as a study tutor",
          minutes: 5,
          goal: "Ask AI to explain, give examples and quiz you, without doing your work for you.",
          text: [
            "An AI assistant can be a patient tutor, any time of day. Ask it to explain a topic simply, give an example, and quiz you: \"I am studying fractions for my high school equivalency test. Explain how to add fractions in simple steps, give me one example, then give me three practice problems one at a time.\"",
            "If you do not understand, say so: \"Explain it a different way.\" \"Use money as an example.\" The more you try problems yourself, the more you learn.",
            "Do not have AI write your assignments or take your tests. Schools treat that as cheating, and you miss the learning. Also check facts: AI can make mistakes, even in math. Your textbook and teacher are the final word."
          ],
          steps: ["Say what you are studying and your level.", "Ask for a simple explanation and one example.", "Ask for practice problems one at a time.", "Ask for a different explanation if stuck.", "Do your own assignments; check facts with your teacher or book."],
          words: [["Tutor", "a teacher who helps one person learn at their own pace."], ["Academic honesty", "doing your own work and following your school's rules."]],
          slides: [
            { title: "A tutor any time", bullets: ["Explain simply", "Give an example", "Quiz you one question at a time"] },
            { title: "Stuck?", bullets: ["\"Explain it a different way.\"", "\"Use money as an example.\""] },
            { title: "Learn, don't cheat", bullets: ["Do your own assignments and tests", "AI can make mistakes", "Teacher and textbook are the final word"] }
          ],
          tryIt: "Pick one topic from your goal. Ask an AI assistant to explain it simply, give one example and quiz you with three questions one at a time.",
          youCanNow: "use AI as a study tutor in an honest way.",
          quickCheck: [
            { objective: "O4", q: "What should a good tutoring prompt include?", options: ["Only the word \"help\"", "Your assignment so AI can finish it", "Your student ID number", "What you are studying and your level"], answer: 3, why: "Telling AI the topic and your level gets explanations that fit you." },
            { objective: "O4", q: "You have an essay due and are tempted to let AI write it. What would you do?", options: ["Let AI write it and hand it in", "Ask AI to explain the topic and quiz you, then write it yourself", "Copy a classmate's essay", "Skip the assignment"], answer: 1, why: "Having AI write assignments breaks school rules and skips the learning." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making a study plan that fits your life",
          minutes: 5,
          goal: "Make a weekly study plan around work and other commitments.",
          text: [
            "When you are working, attending appointments and caring for family, study time has to be planned. Short, regular sessions work better than cramming.",
            "Ask AI: \"I work 7 am to 3:30 pm on weekdays and have appointments on Tuesday afternoons. Make a four-week study plan for my high school equivalency math, with 30-minute sessions four times a week and a short review each weekend.\"",
            "Put the sessions in your phone's calendar with reminders. Study somewhere quiet, such as a library, and use free library Wi-Fi and computers if you need them. If you miss a session, do not give up; just do the next one."
          ],
          steps: ["List your work hours and fixed appointments.", "Ask AI for a four-week plan with short sessions.", "Put sessions in your calendar with reminders.", "Find a quiet place to study.", "If you miss one, just do the next."],
          words: [["Study session", "a set time you spend learning."], ["Cramming", "trying to learn a lot at the last minute."]],
          slides: [
            { title: "Plan your study time", bullets: ["Short and regular beats cramming"] },
            { title: "Ask AI for a plan", bullets: ["Your work hours and appointments", "Short sessions, a few times a week", "A weekend review"] },
            { title: "Stick with it", bullets: ["Calendar reminders", "A quiet place, like the library", "Missed one? Do the next"] }
          ],
          tryIt: "Ask an AI assistant for a four-week study plan that fits your work and appointments. Put your first two sessions in your phone's calendar.",
          youCanNow: "make and keep a study plan that fits your life.",
          quickCheck: [
            { objective: "O5", q: "What is cramming?", options: ["Studying a little every day", "Taking notes in class", "Learning a lot at the last minute", "Asking a tutor for help"], answer: 2, why: "Cramming means trying to learn a lot right before a test." },
            { objective: "O5", q: "You missed Tuesday's study session because of work. What would you do?", options: ["Just do the next session", "Quit the plan", "Study for six hours on Wednesday", "Start the whole plan over"], answer: 0, why: "Missing one session is fine; getting back on track is what matters." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Getting ready to apply for financial aid",
          minutes: 5,
          goal: "Find where to apply for federal student aid and list what to prepare.",
          text: [
            "For college and many career schools in the United States, the first step for financial aid is the FAFSA, the Free Application for Federal Student Aid. As the name says, it is free. Apply only at the official site, studentaid.gov; do not pay any website to fill it out.",
            "Rules about criminal convictions and student aid have changed in recent years. Do not assume you cannot get aid. Check the current rules on studentaid.gov, or ask the school's financial aid office; they help students with these questions every day.",
            "AI can help you understand terms (\"What is a Pell Grant?\" \"What is the difference between a grant and a loan?\") and make a list of questions for the financial aid office. Type your personal and tax information only on studentaid.gov, never into AI. Grants do not have to be repaid; loans do."
          ],
          steps: ["Go only to studentaid.gov for the FAFSA; it is free.", "Check current rules on convictions there or with the school's financial aid office.", "Use AI to explain terms and plan questions.", "Type personal information only on the official site.", "Know the difference: grants are not repaid, loans are."],
          words: [["FAFSA", "the Free Application for Federal Student Aid, at studentaid.gov."], ["Grant", "money for school that usually does not have to be paid back."], ["Financial aid office", "the office at a school that helps students pay for it."]],
          slides: [
            { title: "Start with the FAFSA", bullets: ["Free Application for Federal Student Aid", "Only at studentaid.gov", "Never pay a site to fill it out"] },
            { title: "Convictions and aid", bullets: ["Rules have changed in recent years", "Don't assume you can't get aid", "Check studentaid.gov or the aid office"] },
            { title: "Use AI wisely", bullets: ["Explain terms like Pell Grant", "Plan questions for the aid office", "Personal info only on the official site"] }
          ],
          sources: [{ name: "Federal Student Aid: studentaid.gov", url: "https://studentaid.gov/" }],
          tryIt: "Final task: write your job-linked learning goal, check one real program with the five questions, ask AI for a four-week study plan, let it teach and quiz you on the first topic, and put your first two sessions in your calendar. If the program is college or career school, add three questions for its financial aid office.",
          youCanNow: "plan, find, check and pay for continuing education, and study with AI as your tutor.",
          quickCheck: [
            { objective: "O6", q: "What does FAFSA stand for?", options: ["Federal Aid for Students and Adults", "Free Application for Federal Student Aid", "First Approved Funding for School Admission", "Financial Account for Student Assistance"], answer: 1, why: "FAFSA is the Free Application for Federal Student Aid." },
            { objective: "O6", q: "A website asks for a fee to fill out your FAFSA. What would you do?", options: ["Pay it to save time", "Give them your tax details", "Ask AI to fill it out with your Social Security number", "Fill it out free on studentaid.gov"], answer: 3, why: "The FAFSA is free on studentaid.gov, and private details go only there." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Learning with AI",
        questions: [
          { objective: "O4", q: "Which is an honest use of AI for school?", options: ["Copying its answers into homework", "Having it write your essay to hand in", "Having it take your test", "Asking it to explain a topic and quiz you"], answer: 3, why: "Explaining and quizzing help you learn." },
          { objective: "O4", q: "You do not understand an explanation. What do you ask?", options: ["\"Explain it a different way.\"", "\"Do my homework.\"", "\"What is my password?\"", "Nothing; quit"], answer: 0, why: "A new explanation often helps." },
          { objective: "O5", q: "Which study plan works best?", options: ["Study only when you feel like it", "One long night before the test", "Short, regular sessions", "No plan"], answer: 2, why: "Regular sessions beat cramming." },
          { objective: "O6", q: "Where do you fill out the FAFSA?", options: ["A text message link", "Any site that charges a fee", "Inside an AI chat", "studentaid.gov, for free"], answer: 3, why: "The FAFSA is free on the official site." },
          { objective: "O6", q: "You have a conviction and want aid. What do you do?", options: ["Ask a stranger", "Assume you cannot get aid", "Check current rules on studentaid.gov or ask the financial aid office", "Skip school"], answer: 2, why: "Rules have changed; official sources know the current rules." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Continuing Education",
    questions: [
      { objective: "O1", q: "A good learning goal is:", options: ["Random", "Tied to a job you want", "Whatever is most advertised", "As long as possible"], answer: 1, why: "Job goals keep learning useful." },
      { objective: "O1", q: "A certificate is:", options: ["Proof you finished training in a skill", "A loan", "A job offer", "A license plate"], answer: 0, why: "Certificates show skills to employers." },
      { objective: "O1", q: "A high school equivalency test, such as the GED:", options: ["Shows high school level skills", "Is a driver's test", "Is a job application", "Is a loan"], answer: 0, why: "It is an alternative to a diploma." },
      { objective: "O1", q: "For a licensed job, check:", options: ["Only AI", "Your state licensing board", "A rumor", "Nothing"], answer: 1, why: "Boards set and explain the rules." },
      { objective: "O2", q: "American Job Centers are funded by:", options: ["A social media company", "A private bank", "The US Department of Labor", "A payday lender"], answer: 2, why: "They are part of the Department of Labor's network." },
      { objective: "O2", q: "Services at American Job Centers:", options: ["Are only online", "Are the same everywhere", "Cost a lot", "Vary, so call or visit to confirm"], answer: 3, why: "Each center offers different services." },
      { objective: "O2", q: "A community college is:", options: ["A bank", "A prison program only", "A local, lower-cost college", "A job agency"], answer: 2, why: "Community colleges offer certificates and degrees." },
      { objective: "O2", q: "After AI suggests a program, you should:", options: ["Confirm it on the program's own website", "Sign up immediately", "Pay a stranger", "Ignore it"], answer: 0, why: "AI can list programs that do not exist." },
      { objective: "O3", q: "\"Accredited\" means:", options: ["Free", "Expensive", "Online only", "Approved by an official quality group"], answer: 3, why: "Accreditation checks quality." },
      { objective: "O3", q: "Job placement means:", options: ["A desk", "Help finding a job after you finish", "A test", "A loan"], answer: 1, why: "It connects graduates to jobs." },
      { objective: "O3", q: "Answers about a program's cost should come from:", options: ["AI only", "The program, in writing", "A rumor", "A pop-up"], answer: 1, why: "Written answers from the program are reliable." },
      { objective: "O4", q: "A good tutoring prompt says:", options: ["Your case number", "Your Social Security number", "Only \"help\"", "What you are studying and your level"], answer: 3, why: "Topic and level help AI teach well." },
      { objective: "O4", q: "AI made a mistake in a math answer. Who has the final word?", options: ["Your teacher and textbook", "The AI", "A stranger online", "Nobody"], answer: 0, why: "AI can be wrong, even in math." },
      { objective: "O4", q: "Having AI write your assignment is:", options: ["Required", "Always allowed", "Against school rules and you miss the learning", "Good practice"], answer: 2, why: "Academic honesty means doing your own work." },
      { objective: "O5", q: "Cramming means:", options: ["A library", "Short regular study", "A study group", "Learning a lot at the last minute"], answer: 3, why: "Cramming is less effective than regular study." },
      { objective: "O5", q: "To keep a study plan, you can:", options: ["Skip planning", "Rely on memory only", "Put sessions in your calendar with reminders", "Study only on test day"], answer: 2, why: "Reminders keep you on track." },
      { objective: "O5", q: "If you miss a study session, you should:", options: ["Quit the program", "Just do the next one", "Start over from zero", "Feel it is hopeless"], answer: 1, why: "One missed session does not end your progress." },
      { objective: "O6", q: "FAFSA stands for:", options: ["Free Application for Federal Student Aid", "Fast Application for Student Accounts", "Federal Account for Savings", "Financial Aid Service Agency"], answer: 0, why: "It is the free federal aid application." },
      { objective: "O6", q: "A grant usually:", options: ["Does not have to be paid back", "Must be paid back with interest", "Is a type of credit card", "Is a fee"], answer: 0, why: "Grants are not repaid; loans are." },
      { objective: "O6", q: "Personal and tax information for the FAFSA should be typed:", options: ["Into AI", "Only on studentaid.gov", "In a text to a stranger", "On any website"], answer: 1, why: "Private information goes only on the official site." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      7,
      8,
      10,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Job-linked goal",
        objective: "O1",
        notYet: "The goal is vague or not tied to a job.",
        meets: "One sentence naming the job and the training it needs.",
        exceeds: "Notes whether the job needs a state license and where to check."
      },
      {
        name: "Program checked",
        objective: "O3",
        notYet: "No program, or fewer than five questions answered.",
        meets: "One real program checked with all five questions, answered by the program.",
        exceeds: "Answers about cost are in writing, and a second program was compared."
      },
      {
        name: "AI as tutor",
        objective: "O4",
        notYet: "AI did the work, or no quiz was done.",
        meets: "AI explained the first topic, gave an example and quizzed the learner.",
        exceeds: "The learner asked AI to explain a different way when stuck."
      },
      {
        name: "Study plan in calendar",
        objective: "O5",
        notYet: "No plan, or no sessions in the calendar.",
        meets: "A four-week plan with short, regular sessions, and the first two sessions in the calendar.",
        exceeds: "Sessions have reminders and fit around work and appointments."
      },
      {
        name: "Financial aid questions",
        objective: "O6",
        notYet: "Missing when the program is college or career school.",
        meets: "Three questions for the financial aid office.",
        exceeds: "Also notes where to fill out the FAFSA for free."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in a high school equivalency, certificate or college program within 90 days (follow-up survey)",
      "Learners who complete a FAFSA or apply for other aid within 90 days",
      "Learners who report using AI as a study tutor each week (follow-up survey)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer with internet and a calendar app",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "Paper and pen for the goal and program questions",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Have your nearest American Job Center, adult school and community college contacts ready.",
      "Explain that AI is a study helper only; using it to do assignments breaks school rules.",
      "Never ask learners to type Social Security numbers, tax details or case details into AI; FAFSA work happens only on studentaid.gov, privately.",
      "Send questions about convictions and aid to studentaid.gov or a financial aid office, since rules change.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
