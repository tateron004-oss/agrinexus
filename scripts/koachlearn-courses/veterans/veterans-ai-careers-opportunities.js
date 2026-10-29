"use strict";

// Koach Learn course: Veterans (military) -> "Future Careers and AI Opportunities". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three
// micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Official pages checked 27 October 2026 (listed in each lesson's `sources`). See scripts/koachlearn-export.js.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "veterans-ai-careers-opportunities",
  category: "Veterans (military)",
  name: "Future Careers and AI Opportunities",
  skills: "Matching military jobs to civilian careers, Spotting growing AI-related careers, Comparing careers with official data, Finding training and benefits, Building a 90-day career plan",
  outcome: "build a short list of three civilian careers that fit your military experience, compare their pay, growth and training with official data, and write a 90-day plan to start on the best one.",
  about: [
    "This course is for veterans and transitioning service members choosing what comes next. Many careers are growing because of AI, and many of them need exactly what you learned in service: discipline, technical skill, leadership and working under pressure.",
    "You will match your military job to civilian careers with official Department of Labor tools, use an AI assistant to explore and compare them, check every number against official data, and find training you may be able to get paid for through your benefits.",
    "Each lesson takes about five minutes: read, watch the slides, then do the \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page career plan: three civilian careers that match your military job (from the O*NET Military Crosswalk or CareerOneStop), each with its median pay and job outlook from the Occupational Outlook Handbook and the skill gap you need to close, then pick one career and list three dated steps for the next 90 days, including one training or benefit option.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans and transitioning service members deciding which civilian career to pursue. Many have technical, logistics or leadership experience but are unsure which careers are growing and how their service fits.",
    startingPoint: "Can use a smartphone or computer and search the web. May have tried an AI assistant. Have not yet compared careers with official data or written a dated plan.",
    gap: "Choosing a career from guesses or AI answers alone can waste months and benefits. Learners need to match their military job to civilian careers with official tools, compare pay, outlook and training with official data, and commit to a short, dated plan.",
    constraints: [
      "Reading level: plain words and short sentences; no technical background assumed",
      "Devices: a smartphone or computer with internet, sometimes a shared base or library computer",
      "Time: about 5-minute lessons that fit around transition appointments and work",
      "Pay, eligibility and program rules change, so learners check bls.gov/ooh, va.gov and dol.gov instead of trusting AI numbers",
      "Privacy: no Social Security, VA file or service numbers in any AI prompt"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and the Future Workforce\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given the fields that are growing with AI", action: "identify which growing fields fit your military experience", standard: "naming at least two with a reason from your service" },
    { id: "O2", condition: "Given your MOS, rating or AFSC", action: "use the O*NET Military Crosswalk and CareerOneStop to list civilian jobs that match your military job", standard: "with at least five matching jobs" },
    { id: "O3", condition: "Given one career from your list", action: "use an AI assistant to describe the career's daily work, skills and entry path, and mark every fact that needs checking", standard: "marking every number, certification and requirement" },
    { id: "O4", condition: "Given three careers", action: "compare their median pay, job outlook and entry education using the Occupational Outlook Handbook", standard: "with every number taken from bls.gov/ooh, not from the AI" },
    { id: "O5", condition: "For the career you choose", action: "find one training option and one official program that may help pay for it", standard: "with one eligibility rule copied from the program's official page" },
    { id: "O6", condition: "Using your comparison and training choice", action: "write a 90-day career plan with three dated steps", standard: "with every step specific, dated and including one training or benefit option" }
  ],
  chapters: [
    {
      name: "Chapter 1: Where the opportunities are",
      lessons: [
        {
          objectives: ["O1"],
          title: "Careers that are growing with AI",
          minutes: 5,
          goal: "Name four kinds of careers growing with AI and say which fit your experience.",
          text: [
            "AI is not only creating jobs for programmers. It is changing work in many fields, and it creates demand for people who can run, protect, fix and supervise the systems around it.",
            "Fields where veterans often fit: cybersecurity (protecting networks and data), data and IT support (keeping systems and data running), logistics and supply chain (planning, forecasting, moving goods), skilled maintenance and technician work (equipment, energy, aviation, electronics), and project and operations management (leading people and plans).",
            "Many of these jobs still need hands, judgment and trust. A logistics specialist who can read an AI forecast and then decide what to order is worth more than one who cannot."
          ],
          words: [["Cybersecurity", "protecting computers, networks and data from attacks."], ["Supply chain", "all the steps that get goods from a maker to the user."]],
          slides: [
            { title: "AI creates demand beyond programmers", bullets: ["People who run, protect, fix and supervise systems", "People who can use AI and still decide"] },
            { title: "Fields where veterans fit", bullets: ["Cybersecurity and IT support", "Logistics and supply chain", "Skilled maintenance and technicians", "Project and operations management"] },
            { title: "Your edge", bullets: ["Discipline and technical skill", "Leadership under pressure", "Judgment: reading the data, then deciding"] }
          ],
          tryIt: "Write the five fields from this lesson. Next to each, write one thing you did in service that fits it, or \"none yet\".",
          youCanNow: "name careers growing with AI and say which fit your military experience.",
          quickCheck: [
            { objective: "O1", q: "Why is AI creating demand for people in some fields?", options: ["AI runs itself and needs no one", "Only robots work in those fields now", "Someone has to run, protect, fix and supervise AI systems", "AI has replaced all technical jobs"], answer: 2, why: "As AI spreads, people are needed to run, protect, fix and supervise the systems." },
            { objective: "O1", q: "You managed radio and network equipment in service. Which growing field do you write next to it?", options: ["Cybersecurity or IT support", "None, because radio skills do not transfer", "Only farming", "Only jobs that need no experience"], answer: 0, why: "Network and equipment experience fits growing fields like IT support and cybersecurity." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Matching your MOS, rating or AFSC to civilian jobs",
          minutes: 5,
          goal: "Use official crosswalk tools to list civilian jobs that match your military job.",
          text: [
            "Do not start with a guess. Start with the official match. The Department of Labor's O*NET OnLine has a Military Crosswalk Search: choose your branch, type your code or title (for example an Army or Marine MOS, a Navy or Coast Guard rating, an Air Force AFSC or a Space Force SFSC), and see matching civilian occupations.",
            "The Department of Labor's Find a Job page for veterans also links to CareerOneStop's Veterans Job Matcher, which connects military occupations to civilian careers. Use both and keep the jobs that show up more than once.",
            "Then use an AI assistant to understand the list: \"Explain these three jobs in plain words, what a normal day looks like, and which of my skills transfer. I was a Navy logistics specialist for 8 years.\""
          ],
          steps: ["Open the O*NET Military Crosswalk Search.", "Choose your branch and type your code or title.", "Write down the matching civilian jobs.", "Repeat in CareerOneStop's Veterans Job Matcher.", "Ask an AI assistant to explain the jobs that appear on both lists."],
          words: [["Crosswalk", "a tool that matches a military job to civilian jobs."], ["Occupation", "a type of job, such as logistician or network administrator."]],
          slides: [
            { title: "Start with the official match", bullets: ["O*NET Military Crosswalk Search", "Choose branch, type code or title", "See matching civilian occupations"] },
            { title: "Cross-check", bullets: ["CareerOneStop Veterans Job Matcher", "Keep jobs that show up on both lists"] },
            { title: "Then ask AI to explain", bullets: ["What the job is in plain words", "What a normal day looks like", "Which of your skills transfer"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Look up your military job in the O*NET Military Crosswalk. Pick five matching civilian jobs, then ask an AI assistant to explain each in two plain sentences.",
          youCanNow: "use official crosswalk tools and an AI assistant to list and understand civilian jobs that match your service.",
          quickCheck: [
            { objective: "O2", q: "What does the O*NET Military Crosswalk give you?", options: ["Your VA disability rating", "Civilian jobs that match your military job code or title", "A list of open job ads near you", "Your GI Bill balance"], answer: 1, why: "The crosswalk matches military job codes and titles to civilian occupations." },
            { objective: "O2", q: "You found five matching jobs but some names are unclear. What do you do?", options: ["Drop every job with an unclear name", "Pick the one with the longest name", "Guess what each job is", "Ask an AI assistant to explain each one in two plain sentences"], answer: 3, why: "AI is good at explaining a job in plain words once official tools gave you the list." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Exploring a career with an AI assistant",
          minutes: 5,
          goal: "Use AI to describe a career's daily work, skills and entry path, and mark what needs checking.",
          text: [
            "An AI assistant is a good research partner for the first look. Ask it to describe a day in the job, the top skills, the usual tools, common entry-level titles, and the questions you should ask someone who does the job.",
            "Use a clear prompt. Example: \"I am an Air Force veteran with 6 years in aircraft maintenance. Explain the job of wind turbine technician: a typical day, top 5 skills, which of my skills transfer, and the usual entry path. Use short bullets.\"",
            "Mark every fact that can change, such as pay, certification names and requirements, with a question mark. You will check those in the next chapter."
          ],
          steps: ["Pick one job from your list.", "Ask for a typical day, top skills, transferable skills and entry path.", "Ask: \"What questions should I ask someone who does this job?\"", "Put a question mark next to pay, certifications and requirements."],
          words: [["Entry path", "the usual way people get into a job: training, certification, apprenticeship or degree."], ["Transferable skill", "a skill from one job that is useful in another."]],
          slides: [
            { title: "Ask AI for the first look", bullets: ["A typical day", "Top skills and tools", "Which of your skills transfer", "The usual entry path"] },
            { title: "Example prompt", bullets: ["Air Force aircraft maintenance, 6 years", "Explain wind turbine technician", "Day, top 5 skills, transfers, entry path"] },
            { title: "Mark what can change", bullets: ["Pay", "Certification names and rules", "Put a ? next to them to check later"] }
          ],
          tryIt: "Ask an AI assistant to describe one career from your list using the example prompt. Put a question mark next to every number, certification or requirement in the answer.",
          youCanNow: "use an AI assistant to explore a career and mark which facts you must check.",
          quickCheck: [
            { objective: "O3", q: "What is an entry path?", options: ["The usual way people get into a job", "The front door of a company", "The pay for a first-year worker", "The last step before retiring"], answer: 0, why: "An entry path is the usual route into a job, such as training, a certification or an apprenticeship." },
            { objective: "O3", q: "The AI says a career \"requires a Security+ certification\". What do you do?", options: ["Sign up for the test right away", "Ignore the whole answer", "Put a question mark next to it and check it with an official source", "Copy it into your plan as fact"], answer: 2, why: "Certifications and requirements are facts to check, not to trust from the AI." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Where the opportunities are",
        questions: [
          { objective: "O1", q: "Which of these is a field where AI is increasing demand for people?", options: ["Cybersecurity", "Only video games", "Only programming", "None, AI removes all jobs"], answer: 0, why: "AI creates demand for people who protect, run and supervise systems, such as in cybersecurity." },
          { objective: "O2", q: "What is the best place to START matching your MOS to civilian jobs?", options: ["A friend's guess", "The O*NET Military Crosswalk", "A random job ad", "A social media post"], answer: 1, why: "The official crosswalk matches your military code to civilian occupations." },
          { objective: "O2", q: "You get different lists from O*NET and CareerOneStop. What is a smart move?", options: ["Ignore both", "Pick the shortest list", "Keep the jobs that appear on both", "Ask the AI to pick one for you"], answer: 2, why: "Jobs that appear on both official lists are strong matches." },
          { objective: "O3", q: "An AI answer says a job pays $95,000. What do you do?", options: ["Quit your search; you found it", "Post it online", "Trust it because it is specific", "Put a question mark next to it and check it with official data"], answer: 3, why: "Pay can be wrong or out of date, so it must be checked." },
          { objective: "O3", q: "What is a transferable skill?", options: ["A skill from one job that is useful in another", "A skill you can sell", "A skill only for officers", "A skill AI does for you"], answer: 0, why: "Transferable skills carry over, like leading a team or keeping inventory." }
        ]
      }
    },
    {
      name: "Chapter 2: Choosing and planning your path",
      lessons: [
        {
          objectives: ["O4"],
          title: "Comparing careers with official data",
          minutes: 5,
          goal: "Compare three careers' pay, outlook and entry education using the Occupational Outlook Handbook.",
          text: [
            "The Bureau of Labor Statistics Occupational Outlook Handbook (bls.gov/ooh) is free and official. For each occupation it gives median pay, the education usually needed to enter, the on-the-job training, and the job outlook: how fast the number of jobs is expected to grow or shrink.",
            "Make a simple table with your three careers in rows and these columns: median pay, entry education, training, job outlook, and your skill gap. An AI assistant can build the empty table for you; you fill in the numbers from the Handbook.",
            "Median pay is the middle point: half of workers earn more, half earn less. Pay also changes by location, so use it to compare careers, not as a promise."
          ],
          steps: ["Go to bls.gov/ooh and search each career.", "Write down median pay, entry education, training and job outlook.", "Write your skill gap: what you still need.", "Put it all in one table."],
          words: [["Median pay", "the middle pay: half of workers earn more and half earn less."], ["Job outlook", "how much the number of jobs is expected to grow or shrink."], ["Skill gap", "the skills or credentials you still need for a job."]],
          slides: [
            { title: "The official source", bullets: ["Occupational Outlook Handbook: bls.gov/ooh", "Free, from the Bureau of Labor Statistics"] },
            { title: "What to write down", bullets: ["Median pay", "Entry education and training", "Job outlook", "Your skill gap"] },
            { title: "Read it right", bullets: ["Median = middle point", "Pay changes by location", "Use it to compare, not as a promise"] }
          ],
          sources: [{ name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" }],
          tryIt: "Ask an AI assistant for an empty comparison table with your three careers and the columns from this lesson. Fill in the numbers yourself from bls.gov/ooh.",
          youCanNow: "compare careers using official pay, education and outlook data.",
          quickCheck: [
            { objective: "O4", q: "Where do the numbers in your comparison table come from?", options: ["The AI assistant's answer", "A friend's guess", "A job ad from one company", "The Occupational Outlook Handbook at bls.gov/ooh"], answer: 3, why: "The AI can build the empty table, but the pay and outlook numbers come from official data." },
            { objective: "O4", q: "One career pays more but has slow growth; another pays a bit less and is growing fast. What do you do?", options: ["Always choose the higher pay", "Compare pay, outlook and training together with your own fit", "Choose the one with the shorter name", "Let the AI choose for you"], answer: 1, why: "Comparing several columns together, plus your fit, gives a better choice than one number." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Finding training and benefits that pay for it",
          minutes: 5,
          goal: "Find one training option for your chosen career and one official program that may help pay for it.",
          text: [
            "Several official programs can help. The GI Bill can pay for many schools and training programs; the VA's GI Bill Comparison Tool helps you compare them. VET TEC 2.0 pays for certain non-degree high-tech training (programming, data, information science) for eligible veterans and service members, with a limited number of places each year.",
            "Still in uniform? DoD SkillBridge lets service members train with an industry partner during their last 180 days of service, with command approval. Apprenticeships let you earn while you learn. The Department of Labor's American Job Centers (find one on CareerOneStop) give veterans priority of service for job training.",
            "Eligibility rules change. Ask the AI to list options, then confirm every one on va.gov, dol.gov or with a counselor before you count on it. The VA's Personalized Career Planning and Guidance program gives free counseling to eligible veterans."
          ],
          steps: ["Name the training your career needs (certification, course, apprenticeship).", "Check GI Bill options with the GI Bill Comparison Tool.", "If it is a tech career, read the VET TEC 2.0 page.", "Still serving? Ask your transition office about SkillBridge.", "Confirm eligibility on va.gov or with a counselor."],
          words: [["GI Bill", "VA education benefits for veterans and service members."], ["SkillBridge", "a DoD program to train with an industry partner during your last 180 days of service."], ["Apprenticeship", "a paid job with structured training, so you earn while you learn."]],
          slides: [
            { title: "Programs that can help", bullets: ["GI Bill and the GI Bill Comparison Tool", "VET TEC 2.0 for high-tech training", "Apprenticeships: earn while you learn"] },
            { title: "Still serving?", bullets: ["DoD SkillBridge: last 180 days of service", "Needs command approval"] },
            { title: "Confirm before you count on it", bullets: ["Rules and places change", "Check va.gov and dol.gov", "Free VA career counseling can help"] }
          ],
          sources: [
            { name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor VETS: Find a job (SkillBridge, American Job Centers)", url: "https://www.dol.gov/agencies/vets/veterans/findajob" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" }
          ],
          tryIt: "For your top career, write one training option and one program that may help pay for it. Open that program's official page and write down one eligibility rule.",
          youCanNow: "find training for a career and an official program that may help pay for it, and confirm the rules.",
          quickCheck: [
            { objective: "O5", q: "What is an apprenticeship?", options: ["A school that only teaches online", "A loan you must pay back", "A paid job where you train and earn at the same time", "A test you take once"], answer: 2, why: "An apprenticeship lets you earn while you learn." },
            { objective: "O5", q: "You found a program that may pay for your training. What do you check before counting on it?", options: ["One eligibility rule on the program's official page", "Whether a friend used it", "Whether the AI said you qualify", "Nothing; all veterans qualify"], answer: 0, why: "Eligibility rules are on the official page; AI and friends can be wrong." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Writing your 90-day career plan",
          minutes: 5,
          goal: "Write a 90-day plan with three dated steps toward one chosen career.",
          text: [
            "You know how to plan a mission backward from the objective. Do the same here. Choose one career from your table, then plan backward: what must be true in 90 days, 60 days and 30 days?",
            "Good steps are specific and dated: \"By 15 November: talk to one person who works as a logistician.\" \"By 1 December: apply for the training program.\" \"By 15 January: apply to five jobs.\" Vague steps like \"look into it\" do not get done.",
            "An AI assistant can turn your notes into a clean plan and suggest steps you missed. You decide the dates and you own the plan. Share it with a mentor, counselor or a TAP or American Job Center staff member who can hold you to it."
          ],
          steps: ["Choose one career from your comparison table.", "Write what must be true in 90 days.", "Plan backward: 60-day and 30-day steps.", "Make each step specific and dated.", "Ask AI to format it and suggest anything missing.", "Share it with someone who will check on you."],
          words: [["Backward planning", "starting from the goal and working back to today."], ["Milestone", "a checkpoint that shows you are on track."]],
          slides: [
            { title: "Plan backward from the objective", bullets: ["90 days: the goal", "60 and 30 days: milestones", "Today: the first step"] },
            { title: "Specific and dated", bullets: ["\"By 15 Nov: talk to one logistician\"", "\"By 1 Dec: apply for training\"", "Not: \"look into it\""] },
            { title: "Own the plan", bullets: ["AI formats and suggests", "You set the dates", "Share it with a mentor or counselor"] }
          ],
          tryIt: "Final task: write your one-page career plan with three careers, their pay and outlook from bls.gov/ooh, your skill gaps, your chosen career, and three dated steps for the next 90 days including one training or benefit option.",
          youCanNow: "turn career research into a dated 90-day plan you can act on.",
          quickCheck: [
            { objective: "O6", q: "What does backward planning mean?", options: ["Doing your steps in random order", "Starting from your goal and working back to today", "Planning only for the past", "Letting someone else set your dates"], answer: 1, why: "Backward planning starts with the goal and works back to the steps you take now." },
            { objective: "O6", q: "Which is the best step for your 90-day plan?", options: ["\"Think about IT someday\"", "\"Look into stuff\"", "\"Get a good job\"", "\"By 15 Jan: finish the free IT support course module 1\""], answer: 3, why: "A good step is specific and has a date you set." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Choosing and planning your path",
        questions: [
          { objective: "O4", q: "Which official source gives median pay and job outlook for civilian occupations?", options: ["A job ad", "The Occupational Outlook Handbook", "Your AI's first answer", "A news headline"], answer: 1, why: "The Bureau of Labor Statistics Occupational Outlook Handbook gives official pay and outlook." },
          { objective: "O4", q: "What does median pay mean?", options: ["The highest pay", "The starting pay", "The middle point: half earn more, half earn less", "The pay after taxes"], answer: 2, why: "Median is the middle of all workers' pay." },
          { objective: "O5", q: "You are still on active duty with 5 months left. Which program could let you train with a company?", options: ["The Occupational Outlook Handbook", "The Military Crosswalk", "Google Gemini", "DoD SkillBridge"], answer: 3, why: "SkillBridge lets service members train with an industry partner during their last 180 days." },
          { objective: "O5", q: "An AI says you qualify for a training benefit. What should you do?", options: ["Confirm it on va.gov or with a counselor", "Enroll right away", "Ignore all benefits", "Pay a website to check"], answer: 0, why: "Eligibility rules change; confirm with the official source." },
          { objective: "O6", q: "Which is the best 90-day plan step?", options: ["\"Look into jobs\"", "\"Think about training\"", "\"By 1 Dec: apply for the IT support training program\"", "\"Someday get certified\""], answer: 2, why: "Good steps are specific and dated." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Future Careers and AI Opportunities",
    questions: [
      { objective: "O1", q: "AI is increasing demand for people who can:", options: ["Run, protect, fix and supervise systems", "Avoid computers", "Only write code", "Do nothing"], answer: 0, why: "Many AI-related jobs need people around the systems, not only programmers." },
      { objective: "O1", q: "Which field protects networks and data from attacks?", options: ["Supply chain", "Cybersecurity", "Retail", "Food service"], answer: 1, why: "Cybersecurity protects computers, networks and data." },
      { objective: "O1", q: "A logistics specialist who can read an AI forecast and then decide is:", options: ["Not needed anymore", "Replaced by the forecast", "More valuable", "Only useful in the military"], answer: 2, why: "Judgment on top of AI output is what employers want." },
      { objective: "O2", q: "The O*NET Military Crosswalk lets you search by:", options: ["Your Social Security number", "Your bank", "Your home address", "Branch and military job code or title"], answer: 3, why: "You choose your branch and enter your MOS, rating, AFSC or SFSC." },
      { objective: "O2", q: "CareerOneStop's Veterans Job Matcher is linked from:", options: ["The Department of Labor's Find a Job page for veterans", "A pop-up ad", "A social media group", "Your old unit's newsletter"], answer: 0, why: "The DOL VETS Find a Job page links to it." },
      { objective: "O2", q: "When two official lists disagree, a good choice is to:", options: ["Use neither", "Keep the jobs that appear on both", "Choose the first job alphabetically", "Ask a stranger"], answer: 1, why: "Overlap shows a strong match." },
      { objective: "O3", q: "A good AI prompt to explore a career asks for:", options: ["Your password", "Only the salary", "A typical day, top skills, transferable skills and entry path", "One word"], answer: 2, why: "Those details help you judge whether the career fits you." },
      { objective: "O3", q: "Which facts in an AI career answer should you mark for checking?", options: ["The job's name only", "The greeting", "Nothing", "Pay, certifications and requirements"], answer: 3, why: "Those facts change and AI can get them wrong." },
      { objective: "O3", q: "An \"entry path\" is:", options: ["The usual way people get into a job", "A building entrance", "A website login", "A military rank"], answer: 0, why: "It is the training, certification, apprenticeship or degree route into a job." },
      { objective: "O4", q: "The Occupational Outlook Handbook is published by:", options: ["An AI company", "The Bureau of Labor Statistics", "A private job board", "The VA"], answer: 1, why: "It is a Bureau of Labor Statistics resource." },
      { objective: "O4", q: "Job outlook tells you:", options: ["Your exact salary", "Where the office is", "How much the number of jobs is expected to grow or shrink", "Who will hire you"], answer: 2, why: "Outlook is the projected change in jobs." },
      { objective: "O4", q: "Why use median pay to compare, not as a promise?", options: ["It is always too high", "It is made up", "It only counts officers", "Pay changes by location and person"], answer: 3, why: "Median is a middle point; your pay depends on location and experience." },
      { objective: "O5", q: "A skill gap is:", options: ["The skills or credentials you still need for a job", "A gap in your résumé dates", "A break between jobs", "A military rank"], answer: 0, why: "It shows what you still need to learn or earn." },
      { objective: "O5", q: "Which VA tool helps you compare schools and programs for GI Bill use?", options: ["The O*NET Crosswalk", "The GI Bill Comparison Tool", "SkillBridge", "TAP"], answer: 1, why: "The VA's GI Bill Comparison Tool helps compare options." },
      { objective: "O5", q: "VET TEC 2.0 pays for:", options: ["Home repairs", "Car loans", "Certain non-degree high-tech training for eligible veterans", "Any college degree"], answer: 2, why: "VET TEC 2.0 covers certain non-degree tech programs." },
      { objective: "O5", q: "An apprenticeship lets you:", options: ["Skip all training", "Avoid working", "Get a degree overnight", "Earn while you learn"], answer: 3, why: "Apprentices are paid while they train." },
      { objective: "O5", q: "Where can veterans get priority of service for job training?", options: ["American Job Centers", "Social media", "A car dealership", "A video game store"], answer: 0, why: "The Department of Labor gives veterans priority of service at American Job Centers." },
      { objective: "O6", q: "Backward planning means:", options: ["Doing tasks in random order", "Starting from the goal and working back to today", "Planning only for today", "Never setting dates"], answer: 1, why: "You plan from the objective back, as in mission planning." },
      { objective: "O6", q: "In your 90-day plan, who sets the dates?", options: ["The AI", "The employer", "You", "No one"], answer: 2, why: "AI can format and suggest; you own the plan." },
      { objective: "O6", q: "Why share your plan with a mentor or counselor?", options: ["So they do it for you", "To get money", "It is required by law", "So someone can check on you and keep you on track"], answer: 3, why: "Accountability helps you finish what you plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      7,
      9,
      11,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Matching careers",
        objective: "O2",
        notYet: "The careers were guessed or came only from an AI answer.",
        meets: "Three careers that match the military job, found in the O*NET Military Crosswalk or CareerOneStop.",
        exceeds: "The learner can say which skill from service fits each career."
      },
      {
        name: "Official data",
        objective: "O4",
        notYet: "Pay or outlook is missing or was copied from the AI.",
        meets: "Each career has median pay and job outlook from bls.gov/ooh.",
        exceeds: "Entry education is also listed, and the learner explains which career wins and why."
      },
      {
        name: "Skill gaps",
        objective: "O3",
        notYet: "No skill gap is listed, or it is vague.",
        meets: "Each career lists the skill or credential still needed.",
        exceeds: "Each gap is checked against an official or employer source."
      },
      {
        name: "Training or benefit",
        objective: "O5",
        notYet: "No training or benefit option, or one taken only from AI.",
        meets: "One training option and one program that may help pay, with one eligibility rule from its official page.",
        exceeds: "The learner also names who to ask to confirm eligibility, such as a VA counselor."
      },
      {
        name: "90-day plan",
        objective: "O6",
        notYet: "Steps are vague or have no dates.",
        meets: "Three specific, dated steps toward one chosen career.",
        exceeds: "The plan names a mentor or counselor who will check progress."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who complete at least one step of their 90-day plan within 30 days (follow-up survey)",
      "Learners who enroll in training, an apprenticeship or SkillBridge within 90 days",
      "Learners who start another Koach Learn veterans course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer with internet",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "The free O*NET Military Crosswalk, CareerOneStop, bls.gov/ooh and va.gov websites",
      "Paper, a notes app or a spreadsheet for the comparison table and the one-page plan",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "In a transition class or veterans center: take the pre-test together, then do one chapter per session with the \"Try it now\" tasks done live.",
      "Have learners fill in the comparison table numbers themselves from bls.gov/ooh; do not accept AI numbers.",
      "Invite a VA, American Job Center or TAP counselor to the last session to review plans and eligibility questions.",
      "Score the final plan with the rubric, and give feedback on one Not yet row at a time.",
      "Remind learners to keep Social Security, VA file and service numbers out of every AI prompt."
    ]
  }
};
