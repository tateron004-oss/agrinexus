"use strict";

// Koach Learn course: Veterans -> "From Military to Civilian Life" (one of the life-skills courses the owner asked for on 28 October 2026).
// Facts from dol.gov/agencies/vets (TAP and its workshops, veterans employment services, My Next Move for Veterans), O*NET's Military Crosswalk,
// the Veterans Crisis Line (988 then press 1, text 838255) and VA Vet Centers (1-877-927-8387), checked 28 October 2026.
// Shape: see scripts/koachlearn-courses/README.md and the model course re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "veterans-military-to-civilian",
  category: "Veterans (military)",
  name: "From Military to Civilian Life",
  skills: "Using the Transition Assistance Program, Translating military skills, Writing civilian resume bullets, Networking for a civilian job, Adjusting to civilian work culture, Finding support and mental health care",
  outcome: "make a 90-day transition plan: use the Transition Assistance Program and veterans job services, turn your military experience into civilian resume bullets for a real job, build a network, adjust to civilian work culture, and know where to get support, including the Veterans Crisis Line (988, then press 1).",
  about: [
    "This course is for service members getting ready to separate or retire, veterans who are already out and looking for their next step, and the spouses and families who make the move with them.",
    "You will learn what the Transition Assistance Program offers, how to describe your military work in words civilian employers understand, how to write and tailor resume bullets, how to build a network, what is different about civilian workplaces, and where to find support when the change is hard.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Programs and rules change, so confirm details at dol.gov/agencies/vets, va.gov or your installation's transition office. If you are in crisis, call 988 and press 1, or text 838255, any time."
  ],
  finalTask: "Write your 90-day transition plan: (1) the TAP workshops or veterans job services you will use; (2) five military duties rewritten as civilian resume bullets, tailored to one real job posting; (3) three people or events for networking; (4) two civilian workplace habits you will practice; (5) your support list, with the Veterans Crisis Line (988, then press 1, or text 838255), your nearest Vet Center and two people you trust.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Service members getting ready to separate or retire, veterans already out and looking for their next step, and the spouses and families who make the move with them.",
    startingPoint: "Have strong military skills, discipline and teamwork, and can use a phone or computer. Many describe their work in military terms, have a small civilian network, and are unsure what TAP offers or where to find support after service.",
    gap: "The move to civilian life changes work, culture and support all at once, and many veterans struggle to find work or reach out for help. Learners need a concrete 90-day plan: the right TAP and job services, tailored civilian résumé bullets, a network, civilian work habits and a support list that includes crisis help.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer with internet",
      "Wellbeing: the course covers mental health support; crisis help (Veterans Crisis Line: 988, then press 1, or text 838255) is shown clearly and is available any time",
      "Privacy: describe duties in general terms; no classified details or private numbers in AI tools",
      "Program details change, so learners confirm TAP and VA details with their TAP office, dol.gov and va.gov"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your main path (job, school, trade or business)", action: "choose the TAP workshops or veterans job services that fit your next step", standard: "naming at least two and how to reach them" },
    { id: "O2", condition: "Given your military job code or title", action: "find matching civilian jobs and describe your duties without military jargon", standard: "with three civilian job titles and three duties rewritten with no acronyms and at least one number" },
    { id: "O3", condition: "Given one real job posting", action: "write civilian résumé bullets tailored to the posting", standard: "with five bullets, each with an action word, what you did and a result, and every word true" },
    { id: "O4", condition: "Using people you know and veteran hiring programs", action: "write a short, polite request for an informational interview and the questions you would ask", standard: "with three networking contacts or events named" },
    { id: "O5", condition: "Given a direct order you once gave in service", action: "rewrite it as a polite civilian request and list the military strengths you will keep and habits you will adjust", standard: "with two of each" },
    { id: "O6", condition: "For yourself or a fellow veteran", action: "create a support list that includes how to reach the Veterans Crisis Line, your nearest Vet Center and two people you trust", standard: "with the crisis numbers saved in your phone" }
  ],
  chapters: [
    {
      name: "Chapter 1: Plan the move and translate your skills",
      lessons: [
        {
          objectives: ["O1"],
          title: "Using the Transition Assistance Program",
          minutes: 5,
          goal: "Choose the TAP workshops and services that fit your next step.",
          text: [
            "The Transition Assistance Program (TAP) helps service members and their spouses get ready for civilian life. It is a joint effort of the Departments of Labor, Defense, Veterans Affairs, Education and Homeland Security, the Small Business Administration and the Office of Personnel Management.",
            "The Department of Labor's part of TAP includes a one-day Employment Fundamentals of Career Transition workshop on job search tools, and a two-day Department of Labor Employment Workshop on resumes, networking, job searching, interviewing and negotiating. There is also an optional two-day Career and Credential Exploration track for choosing a career and planning how to get there.",
            "One-on-one help is offered too: the Employment Navigator and Partnership Program gives career help to transitioning service members and spouses at select installations. Spouses and caregivers have their own workshops. If you cannot attend in person, online learning may count, with approval from your TAP manager or counselor.",
            "Start early. Ask your installation's TAP office when you must begin and which workshops fit your plan: a job, school, a trade, or your own business. Already out? DOL's veterans employment services page lists resources in each state."
          ],
          steps: ["Contact your installation's TAP office and ask when you must start.", "Decide your main path: job, school, trade or business.", "Sign up for the workshops that fit, such as the DOL Employment Workshop.", "Ask about one-on-one help and spouse workshops.", "Already separated? Find your state's veterans resources on dol.gov/agencies/vets."],
          words: [["TAP", "Transition Assistance Program: classes and help for service members moving to civilian life."], ["Separation", "leaving active military service."], ["Credential", "a license or certificate that proves a skill."]],
          slides: [
            { title: "What TAP is", bullets: ["Help moving to civilian life", "For service members and spouses", "Run by DOL, DoD, VA and other agencies"] },
            { title: "DOL workshops", bullets: ["1 day: Employment Fundamentals", "2 days: resumes, networking, interviews", "Optional 2 days: career and credential track"] },
            { title: "More help", bullets: ["One-on-one career help at some bases", "Workshops for spouses and caregivers", "Online learning with approval"] },
            { title: "Start early", bullets: ["Ask your TAP office when to begin", "Pick workshops that fit your path", "Already out? Find your state's resources"] }
          ],
          sources: [
            { name: "DOL VETS: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" },
            { name: "DOL VETS: Veterans employment services", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Write your main path (job, school, trade or business) and the two TAP workshops or services that fit it best. If you are already out, find your state on DOL's veterans employment services page and write down one resource and how to contact it.",
          youCanNow: "choose the TAP workshops and veterans job services that fit your next step.",
          quickCheck: [
            { objective: "O1", q: "Who can take part in DOL's TAP services?", options: ["Only officers", "Transitioning service members and their spouses", "Only people who already have a job", "Only retirees"], answer: 1, why: "TAP services are for transitioning service members, and spouses can take part too." },
            { objective: "O1", q: "You plan to start a trade after you separate. What do you do first?", options: ["Skip TAP because it is only for office jobs", "Wait until after you separate to think about it", "Ask a friend to choose for you", "Write your path and pick the TAP workshops or services that fit it"], answer: 3, why: "Choosing workshops that fit your main path makes TAP useful for your next step." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Translating military skills into civilian words",
          minutes: 5,
          goal: "Find civilian jobs that match your military work and describe your skills without military jargon.",
          text: [
            "Civilian hiring managers often do not know what your job code, rank or unit means. Your skills are real, but they need to be said in their words.",
            "Start with free tools. O*NET's Military Crosswalk lets you search your branch's job code or title. My Next Move for Veterans, listed by the Department of Labor, has a military transition search that suggests civilian careers related to your military experience. Write down the civilian job titles they suggest.",
            "Then translate. Replace military words with plain ones: \"NCOIC\" becomes \"supervisor\" or \"team lead\"; \"PCS\" becomes \"relocation\"; \"mission\" may become \"project\" or \"operation\". Spell out or remove acronyms. Use numbers that show size and results: how many people you led, the value of equipment you were responsible for, or how many deliveries you managed.",
            "An AI assistant can help suggest civilian words for a duty. Describe the work in general terms only. Never paste classified, sensitive or personal information, and check that every word it suggests is true."
          ],
          steps: ["Search your job code or title in O*NET's Military Crosswalk or My Next Move for Veterans.", "Write three civilian job titles that match.", "List your main duties in plain words.", "Replace acronyms and military terms with civilian words.", "Add numbers: people led, equipment value, tasks completed."],
          words: [["Job code", "the code for your military job, such as an MOS, rating or AFSC."], ["Jargon", "special words only one group understands."], ["Transferable skill", "a skill you can use in many different jobs, like leading a team or planning."]],
          slides: [
            { title: "Say it in their words", bullets: ["Employers may not know your job code or rank", "Your skills are real; translate them"] },
            { title: "Free tools", bullets: ["O*NET Military Crosswalk", "My Next Move for Veterans", "Write down the civilian job titles"] },
            { title: "Translate", bullets: ["NCOIC -> supervisor or team lead", "Spell out or remove acronyms", "Add numbers: people, equipment, results"] },
            { title: "Using AI safely", bullets: ["General terms only", "Never paste classified or personal details", "Check every word is true"] }
          ],
          sources: [
            { name: "O*NET OnLine: Military Crosswalk", url: "https://www.onetonline.org/crosswalk/MOC/" },
            { name: "DOL VETS: Veterans employment services (My Next Move for Veterans)", url: "https://www.dol.gov/agencies/vets/veterans/veterans-employment-services" }
          ],
          tryIt: "Search your military job code or title in O*NET's Military Crosswalk or My Next Move for Veterans. Write three civilian job titles it suggests, then rewrite three of your duties with no acronyms and at least one number.",
          youCanNow: "find civilian jobs that match your military work and describe your skills in plain civilian words.",
          quickCheck: [
            { objective: "O2", q: "Why translate your military skills into civilian words?", options: ["Civilian hiring managers may not understand military terms", "Military terms are not allowed on résumés by law", "To make your résumé longer", "Civilian jobs do not need your skills"], answer: 0, why: "Hiring managers can only value skills they understand." },
            { objective: "O2", q: "Your duty reads \"Served as S-4 NCO for BN.\" What do you do?", options: ["Leave it as it is", "Add more acronyms", "Spell out or remove the acronyms and describe the work with a number", "Delete the duty"], answer: 2, why: "Civilian bullets spell out or drop acronyms and show the size of the work." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing resume bullets for a real job",
          minutes: 6,
          goal: "Write civilian resume bullets that match a real job posting.",
          text: [
            "A strong resume bullet starts with an action word, says what you did, and shows the result, ideally with a number. Pattern: action + what + result. Example: \"Led a team of 12 in maintaining 30 vehicles, keeping 95% ready on schedule.\"",
            "Tailor your resume to each job. Read the job posting and underline the skills and words it uses, such as \"inventory\", \"safety\", \"scheduling\" or \"customer service\". Then use those same words in your bullets, where they are true for you. Many employers use software that scans resumes for these words.",
            "Keep it short and civilian. Usually one or two pages. Put the job title you want at the top. Leave out things that do not help this job, and do not list classified details. Add licenses and certifications, and any credentials you earned in service.",
            "Example: a Navy logistics specialist applying for a warehouse supervisor job writes: \"Managed inventory of 4,000 parts worth $2 million with 99% accuracy\" and \"Trained 8 new team members on safety procedures\". Both use words from the posting."
          ],
          steps: ["Find one real job posting you want.", "Underline the skills and words it uses.", "Write five bullets: action word + what you did + result with a number.", "Use the posting's words where they are true for you.", "Remove acronyms and anything classified, and read it aloud."],
          words: [["Resume", "a short document that lists your work experience, skills and education for employers."], ["Tailor", "to change your resume to fit one job."], ["Keyword", "an important word from the job posting that employers look for."]],
          slides: [
            { title: "Strong bullet pattern", bullets: ["Action word + what you did + result", "\"Led a team of 12 in maintaining 30 vehicles\""] },
            { title: "Tailor to each job", bullets: ["Underline the posting's skills", "Use those words where true", "Software may scan for them"] },
            { title: "Keep it civilian", bullets: ["Usually one or two pages", "No acronyms, nothing classified", "Add licenses and certifications"] }
          ],
          tryIt: "Find one real job posting you want. Underline five skills it asks for. Write five resume bullets about your service, each with an action word, what you did and a result, using the posting's words where true.",
          youCanNow: "write resume bullets that turn your military experience into results a civilian employer wants.",
          quickCheck: [
            { objective: "O3", q: "What does it mean to tailor a résumé?", options: ["Use the same résumé for every job", "Add every job you ever had", "Make it as short as possible", "Use the job posting's words where they are true for you"], answer: 3, why: "Tailoring matches your true experience to the words in one posting." },
            { objective: "O3", q: "The posting asks for \"inventory management\". You tracked parts for a unit. What do you write?", options: ["\"Did supply stuff\"", "\"Managed inventory of 2,500 parts with no losses at audit\"", "\"Inventory management expert with 30 years\" (not true)", "Leave it off"], answer: 1, why: "It uses the posting's words, an action word, what you did and a true result." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Plan the move and translate your skills",
        questions: [
          { objective: "O1", q: "What is the Transition Assistance Program?", options: ["A loan program", "A medical clinic", "A recruiting office", "Classes and help for service members moving to civilian life"], answer: 3, why: "TAP helps service members and spouses prepare for civilian life." },
          { objective: "O1", q: "Which DOL workshop covers resumes, networking, job searching and interviewing over two days?", options: ["Basic training", "The Department of Labor Employment Workshop", "A VA exam", "The GI Bill"], answer: 1, why: "DOL describes the two-day DOLEW as covering these skills." },
          { objective: "O2", q: "Which free tool helps match a military job code to civilian jobs?", options: ["O*NET's Military Crosswalk", "A credit report", "A weather app", "A social media quiz"], answer: 0, why: "The Military Crosswalk searches military job codes and titles." },
          { objective: "O2", q: "How would you write \"NCOIC of motor pool\" for a civilian resume?", options: ["Leave it as it is", "Remove it entirely", "\"Supervised a vehicle maintenance team\"", "\"Did stuff with trucks\""], answer: 2, why: "Plain words and a clear job make the skill understood." },
          { objective: "O3", q: "Which is the strongest resume bullet?", options: ["\"Responsible for things\"", "\"Managed inventory of 4,000 parts with 99% accuracy\"", "\"Was in the Navy\"", "\"Did my job\""], answer: 1, why: "It has an action word, what was done and a result with a number." }
        ]
      }
    },
    {
      name: "Chapter 2: Build your civilian life",
      lessons: [
        {
          objectives: ["O4"],
          title: "Networking for a civilian job",
          minutes: 5,
          goal: "Write a short networking message that asks people and programs for help toward a job.",
          text: [
            "Many jobs are filled through people who know people. Networking is not begging for a job. It is making connections, asking for advice and helping others back.",
            "Start with who you know: fellow veterans already working in civilian jobs, former leaders, family, friends, your church or community groups. Make a professional profile online, such as on LinkedIn, with a civilian headline like \"Logistics supervisor, 8 years leading teams\".",
            "Ask for short informational interviews: 15 to 20 minutes to learn about someone's job and company. Prepare three questions, such as \"What does a normal day look like?\" and \"What skills matter most here?\" Thank them afterward.",
            "Use veterans programs too. DOL's VETS lists state resources for veterans and apprenticeships, and the HIRE Vets Medallion Program recognizes employers committed to hiring veterans. Veteran job fairs and veteran groups at companies are good places to meet people."
          ],
          steps: ["List ten people you know who work in civilian jobs.", "Make or update a professional online profile with a civilian headline.", "Ask two people for a 15-to-20-minute informational interview.", "Prepare three questions and send a thank-you afterward.", "Look up veteran job fairs and employers that hire veterans."],
          words: [["Networking", "building connections with people who can share advice, leads or introductions."], ["Informational interview", "a short talk to learn about someone's job, not to ask for a job."], ["Headline", "the short line under your name on a professional profile."]],
          slides: [
            { title: "People fill jobs", bullets: ["Networking = connections and advice", "Not begging; help others back"] },
            { title: "Start with who you know", bullets: ["Veterans in civilian jobs", "Former leaders, family, community", "A profile with a civilian headline"] },
            { title: "Informational interviews", bullets: ["15 to 20 minutes", "Three prepared questions", "Always say thank you"] },
            { title: "Veterans programs", bullets: ["State resources through DOL VETS", "HIRE Vets employers", "Veteran job fairs"] }
          ],
          sources: [
            { name: "DOL VETS: Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "HIRE Vets Medallion Program", url: "https://www.hirevets.gov/" }
          ],
          tryIt: "Write a list of ten people you know who work in civilian jobs. Pick two and write a short, polite message asking each for a 15-minute talk about their work. Write three questions you would ask.",
          youCanNow: "build a network, ask for informational interviews and use veterans hiring programs.",
          quickCheck: [
            { objective: "O4", q: "What is networking?", options: ["Asking strangers for a job right away", "Only using social media", "Building connections, asking for advice and helping others back", "Sending your résumé to everyone"], answer: 2, why: "Networking is a two-way relationship of advice and help." },
            { objective: "O4", q: "A friend works at a company you like. What do you send?", options: ["A short, polite request for a 15-minute talk about their work", "Your résumé with \"get me hired\"", "A two-page message about your career", "Nothing; it is awkward"], answer: 0, why: "A short, polite request for an informational interview is easy to say yes to." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Adjusting to civilian work culture",
          minutes: 5,
          goal: "Name key differences in civilian workplaces and plan how you will adapt.",
          text: [
            "Civilian workplaces run differently. There is often no clear chain of command, and decisions may be made by groups or after long discussion. Orders may come as suggestions: \"Could you take a look at this?\" usually means \"Please do this.\"",
            "Communication is often softer. Direct, short answers that worked in uniform can sound harsh to civilian coworkers. Try adding a little context and a friendly tone. Ask questions when things are unclear; in many companies, asking is expected, not a sign of weakness.",
            "Your strengths travel well: showing up early, finishing what you start, staying calm under pressure, and taking care of your team. Keep them. But expect less structure, less ceremony, more email and meetings, and coworkers who have never served.",
            "It can take time to feel at home. Find a mentor at work, such as a veteran coworker, or join a veterans group if the company has one. Talk with family about the changes too: they are adjusting as well."
          ],
          steps: ["Notice how decisions are made at your new job.", "Treat polite requests as real tasks.", "Add context and a friendly tone to direct messages.", "Ask questions when something is unclear.", "Find a mentor or a veterans group at work."],
          words: [["Chain of command", "the military order of who reports to whom."], ["Workplace culture", "the unwritten rules for how people work and talk at a job."], ["Mentor", "a more experienced person who gives you advice."]],
          slides: [
            { title: "What is different", bullets: ["Often no clear chain of command", "Decisions by groups or discussion", "Requests sound like suggestions"] },
            { title: "Communication", bullets: ["Add context and a friendly tone", "Asking questions is expected"] },
            { title: "Strengths that travel", bullets: ["On time, follow-through, calm", "Taking care of your team"] },
            { title: "Settling in", bullets: ["Find a mentor or veterans group", "Talk with family: they adjust too"] }
          ],
          tryIt: "Think of a time you gave a short, direct order in service. Rewrite it as a polite civilian request with a reason, as you would write it in a work email. Then write two military strengths you will keep and two habits you will adjust.",
          youCanNow: "name the main differences in civilian work culture and adjust how you communicate.",
          quickCheck: [
            { objective: "O5", q: "In many civilian jobs, asking questions is:", options: ["A sign of weakness", "Expected and normal", "Against the rules", "Only for new hires"], answer: 1, why: "Civilian workplaces usually expect people to ask questions." },
            { objective: "O5", q: "You want a coworker to send a report by Friday. How do you write it?", options: ["\"Report. Friday. Now.\"", "\"Do it or else.\"", "Say nothing and do it yourself", "\"Could you send the report by Friday? I need it for Monday's meeting. Thanks!\""], answer: 3, why: "A polite request with a reason fits civilian work culture." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Finding support and mental health care",
          minutes: 5,
          goal: "Build a support list and know how to reach crisis help any time.",
          text: [
            "Leaving the military is a big change: a new routine, a new identity, maybe a move, and less contact with the people you served with. Stress, poor sleep, anger or feeling low are common. Getting help is a strength, not a weakness.",
            "The Veterans Crisis Line is free, confidential and open 24 hours a day, 7 days a week. Call 988, then press 1. Text 838255. Or chat online at veteranscrisisline.net. It is for veterans, service members, Guard and Reserve members and the people who support them, and you do not have to be enrolled in VA benefits or health care to use it.",
            "For ongoing support, Vet Centers are community-based counseling centers that offer free, confidential counseling to eligible veterans, service members and families, including help adjusting after service. Call 1-877-927-8387 any time to talk and be connected to your nearest Vet Center. VA health care also offers mental health care for enrolled veterans.",
            "Build your own team too: two or three people you trust, a veterans group, faith or community groups, and a regular routine with exercise and sleep. If you are worried about a fellow veteran, you can call the Crisis Line for them."
          ],
          steps: ["Save 988 (then press 1) and the text number 838255 in your phone.", "Find your nearest Vet Center by calling 1-877-927-8387.", "Write the names and numbers of two or three people you trust.", "Add one group or routine that helps you, such as a veterans group or exercise.", "If you or a friend is in crisis, call 988 and press 1 now."],
          words: [["Veterans Crisis Line", "free, confidential, 24/7 crisis support for veterans, service members and those who support them: 988, then press 1."], ["Vet Center", "a community counseling center that offers free, confidential counseling to eligible veterans, service members and families."], ["Confidential", "kept private."]],
          slides: [
            { title: "Change is hard; help is strength", bullets: ["New routine, identity, maybe a move", "Stress, poor sleep, anger are common"] },
            { title: "Veterans Crisis Line: 24/7", bullets: ["Call 988, then press 1", "Text 838255", "Chat at veteranscrisisline.net"] },
            { title: "Ongoing support", bullets: ["Vet Centers: free, confidential counseling", "Call 1-877-927-8387, any time", "VA mental health care"] },
            { title: "Your own team", bullets: ["Two or three people you trust", "Veterans, faith or community groups", "Routine: exercise and sleep"] }
          ],
          sources: [
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "VA Vet Centers", url: "https://www.vetcenter.va.gov/" }
          ],
          tryIt: "Final task: save 988 (then press 1) and 838255 in your phone, and write your support list with your nearest Vet Center and two people you trust. Then finish your 90-day transition plan with your TAP or job services, five tailored resume bullets, three networking contacts or events, and two civilian work habits you will practice.",
          youCanNow: "reach crisis help any time, find ongoing support, and put your full 90-day transition plan on paper.",
          quickCheck: [
            { objective: "O6", q: "How do you reach the Veterans Crisis Line by phone?", options: ["Dial 988, then press 1", "Dial 911, then press 9", "Email your old unit", "Wait for a VA appointment"], answer: 0, why: "The Veterans Crisis Line is 988, then press 1, any time." },
            { objective: "O6", q: "You are worried about a fellow veteran who seems to be in crisis. What can you do?", options: ["Wait and see if it passes", "Post about it online", "Call the Veterans Crisis Line for them: 988, then press 1", "Tell them to handle it alone"], answer: 2, why: "You can call the Veterans Crisis Line on behalf of someone you are worried about." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Build your civilian life",
        questions: [
          { objective: "O4", q: "What is an informational interview?", options: ["A short talk to learn about someone's job", "A job interview with a contract", "A VA exam", "A security clearance check"], answer: 0, why: "It is for learning and advice, not asking for a job." },
          { objective: "O5", q: "A civilian manager says, \"Could you take a look at this report?\" What does it usually mean?", options: ["It is optional; ignore it", "Wait for a written order", "Please do this task", "You are in trouble"], answer: 2, why: "Civilian requests often sound like suggestions but are real tasks." },
          { objective: "O5", q: "Which military strength should you keep at a civilian job?", options: ["Using acronyms in every email", "Never asking questions", "Ignoring coworkers who never served", "Following through on what you start"], answer: 3, why: "Reliability and follow-through are valued everywhere." },
          { objective: "O6", q: "How do you reach the Veterans Crisis Line by phone?", options: ["Dial 911 and ask for VA", "Dial 988, then press 1", "Dial 411", "Call your recruiter"], answer: 1, why: "The Veterans Crisis Line is 988, then press 1, any time." },
          { objective: "O6", q: "Do you have to be enrolled in VA benefits to use the Veterans Crisis Line?", options: ["Yes", "Only if you served 20 years", "Only on weekdays", "No"], answer: 3, why: "You do not need to be enrolled in VA benefits or health care." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: From Military to Civilian Life",
    questions: [
      { objective: "O1", q: "Who can take part in DOL's TAP services?", options: ["Only officers", "Only retirees over 60", "Transitioning service members and their spouses", "Only civilians"], answer: 2, why: "DOL's part of TAP serves transitioning service members and spouses." },
      { objective: "O1", q: "When should you start TAP?", options: ["After you have been out for five years", "Never", "Only if you already have a job", "Early: ask your installation's TAP office when you must begin"], answer: 3, why: "Starting early gives you more time; your TAP office sets the timing." },
      { objective: "O1", q: "Which workshop is optional and helps you choose a career and plan how to reach it?", options: ["Basic training", "Career and Credential Exploration", "Physical training", "A VA claim exam"], answer: 1, why: "C2E is DOL's optional two-day career and credential track." },
      { objective: "O1", q: "You cannot attend TAP in person. What may count instead?", options: ["Online learning, with approval from your TAP manager or counselor", "Nothing", "Watching TV", "A friend's notes"], answer: 0, why: "DOL says online learning can count with approval." },
      { objective: "O2", q: "Why translate military skills?", options: ["Civilian hiring managers may not understand military terms", "It is required by law", "To hide your service", "To make the resume longer"], answer: 0, why: "Plain words help employers see your real skills." },
      { objective: "O2", q: "My Next Move for Veterans helps you:", options: ["File a VA claim", "Get a loan", "Find civilian careers related to your military experience", "Book a doctor"], answer: 2, why: "DOL lists its military transition search for civilian careers." },
      { objective: "O2", q: "What should you do with acronyms on a civilian resume?", options: ["Use as many as possible", "Put them in bold", "Make up new ones", "Spell them out or remove them"], answer: 3, why: "Acronyms confuse civilian readers." },
      { objective: "O2", q: "When using AI to help translate your duties, you should:", options: ["Paste classified details for accuracy", "Describe work in general terms and check every word is true", "Let it invent results", "Share your Social Security number"], answer: 1, why: "Never share sensitive details, and keep the resume true." },
      { objective: "O3", q: "A strong resume bullet follows the pattern:", options: ["Rank + unit + base", "Hobby + favorite food", "Job code only", "Action word + what you did + result"], answer: 3, why: "This shows what you did and why it mattered." },
      { objective: "O3", q: "How do you tailor a resume?", options: ["Use the job posting's words where they are true for you", "Send the same resume everywhere", "Add every job you ever had", "Make it ten pages long"], answer: 0, why: "Tailoring matches your real skills to that job." },
      { objective: "O3", q: "Which number makes a bullet stronger?", options: ["Your shoe size", "\"Trained 8 new team members\"", "Your unit's phone extension", "Your service number"], answer: 1, why: "Numbers show the size and results of your work." },
      { objective: "O4", q: "Networking is best described as:", options: ["Asking strangers for money", "Sending the same message to everyone", "Building connections, asking for advice and helping others back", "Only for people with degrees"], answer: 2, why: "Networking is about relationships and advice." },
      { objective: "O4", q: "How long should an informational interview usually be?", options: ["Three hours", "All day", "About 15 to 20 minutes", "One minute"], answer: 2, why: "Short requests respect the other person's time." },
      { objective: "O4", q: "What does the HIRE Vets Medallion Program do?", options: ["Recognizes employers committed to hiring veterans", "Pays veterans' rent", "Files VA claims", "Runs boot camp"], answer: 0, why: "DOL describes it as recognizing companies' commitment to veteran hiring." },
      { objective: "O5", q: "Your direct, short messages seem harsh to civilian coworkers. What helps?", options: ["Stop talking to them", "Use more acronyms", "Write in all capital letters", "Add context and a friendly tone"], answer: 3, why: "Softer, clearer messages fit civilian work culture." },
      { objective: "O5", q: "In many civilian jobs, asking questions is:", options: ["Not allowed", "Expected and normal", "A sign of weakness", "Only for managers"], answer: 1, why: "Asking when unclear is expected in many workplaces." },
      { objective: "O6", q: "Which phone number connects you to your nearest Vet Center, any time?", options: ["911", "411", "1-800-MEDICARE", "1-877-927-8387"], answer: 3, why: "VA lists 1-877-927-8387 as the Vet Center call center." },
      { objective: "O6", q: "You can text the Veterans Crisis Line at:", options: ["988", "411", "838255", "911"], answer: 2, why: "Text 838255 to reach the Veterans Crisis Line." },
      { objective: "O6", q: "You are worried about a fellow veteran. What can you do?", options: ["Call the Veterans Crisis Line for them: 988, then press 1", "Wait and hope", "Post about it online", "Tell nobody"], answer: 0, why: "The Crisis Line also supports people who are worried about a veteran." },
      { objective: "O6", q: "Vet Center counseling is:", options: ["Only for officers", "Free and confidential", "Only by court order", "Paid by the hour"], answer: 1, why: "VA says Vet Center counseling is free and confidential." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "TAP and job services",
        objective: "O1",
        notYet: "No workshops or services named.",
        meets: "The TAP workshops or veterans job services the learner will use, matched to their path.",
        exceeds: "Includes dates or how to sign up for each."
      },
      {
        name: "Tailored résumé bullets",
        objective: "O3",
        notYet: "Fewer than five bullets, or bullets with military jargon and no results.",
        meets: "Five bullets in civilian words, each with an action word, what was done and a result, matched to one real posting.",
        exceeds: "Each bullet uses a word from the posting and has a number."
      },
      {
        name: "Networking",
        objective: "O4",
        notYet: "No people or events named.",
        meets: "Three people or events for networking.",
        exceeds: "A message is drafted for at least one, with questions to ask."
      },
      {
        name: "Civilian work habits",
        objective: "O5",
        notYet: "No habits named.",
        meets: "Two civilian workplace habits the learner will practice.",
        exceeds: "Also names two military strengths they will keep."
      },
      {
        name: "Support list",
        objective: "O6",
        notYet: "No support list, or no crisis line.",
        meets: "The Veterans Crisis Line (988, then press 1, or text 838255), the nearest Vet Center and two trusted people.",
        exceeds: "The numbers are saved in the learner's phone."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who attend a TAP workshop or contact veterans job services within 30 days (follow-up survey)",
      "Learners who apply to a tailored job or hold an informational interview within 30 days",
      "Learners who get a civilian job, training or school place within 6 months"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "One real civilian job posting the learner wants",
      "The free O*NET Military Crosswalk or My Next Move for Veterans, dol.gov and va.gov websites",
      "Paper or a document for the 90-day transition plan",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Share the Veterans Crisis Line (988, then press 1, or text 838255) at the start of the course and know your local referral steps if a learner is in distress.",
      "Keep the support-list lesson private: learners do not have to share who is on their list.",
      "Invite spouses and family members; the move affects the whole household.",
      "Have learners practice the polite-request rewrite in pairs and read each other's résumé bullets.",
      "Score the 90-day plan with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
