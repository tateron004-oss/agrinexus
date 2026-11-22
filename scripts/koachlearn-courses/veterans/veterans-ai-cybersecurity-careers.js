"use strict";

// Koach Learn course: Veterans (military) -> "AI and Cybersecurity Careers" (bonus course on the owner's list, 27 October 2026). Written as a skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }
// Facts checked on the official pages on 27 October 2026 (niccs.cisa.gov; va.gov test fees and VET TEC 2.0; mynextmove.org/vets; dol.gov/agencies/vets).

module.exports = {
  id: "veterans-ai-cybersecurity-careers",
  category: "Veterans (military)",
  name: "AI and Cybersecurity Careers",
  skills: "Naming entry-level cyber jobs, Translating military security experience, Finding official cyber training, Studying security with AI, Analyzing a suspicious email",
  outcome: "pick an entry-level cybersecurity job that fits your military experience, use an AI assistant safely to study and to check a suspicious email, and write a short incident note and résumé lines that prove it.",
  about: [
    "Many veterans already think like security professionals: you protected information, followed access rules, stood watch and reported anything odd. Cybersecurity employers need exactly that mindset.",
    "In this course you will learn the main entry-level cyber jobs, how AI is changing them, how to translate your service into cyber words, where to find official training, and how to use AI as a study partner. You will finish by checking a suspicious email the way a junior analyst would.",
    "Each lesson takes about five minutes. Read, watch the slides, then do the \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course. No hacking is involved: you only practice on safe, made-up examples."
  ],
  finalTask: "Take a suspicious email (a real one from your own spam folder with personal details removed, or a made-up example), use an AI assistant to help list its warning signs without clicking anything, and write a five-line incident note: what arrived, the warning signs, the risk, what you did, and what you recommend. Then write two résumé lines that connect your military experience to a cyber job.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans and transitioning service members interested in an entry-level cybersecurity job. Many protected information, followed access rules, stood watch or worked in communications or IT in service.",
    startingPoint: "Bring a security mindset (OPSEC, access control, reporting) and can use a computer and email. Most do not know civilian cyber job titles, training paths or how to describe their service in cyber words, and few have used AI as a study partner.",
    gap: "Cyber employers need people who can protect information and judge AI output, while attackers now use AI to write convincing scams. Learners need to choose an entry role, find official training, study safely with AI, check a suspicious email without clicking, and show their skills in an incident note and résumé lines.",
    constraints: [
      "Reading level: plain words and short sentences; cyber terms are explained",
      "Devices: a computer is best for hovering over links; a smartphone works for most lessons",
      "Safety: never click suspicious links; never paste real company logs, passwords or private details into a public AI tool",
      "Clearances are listed only the way the security office allows",
      "Benefit amounts and program lists change, so learners check va.gov and NICCS directly"
    ],
    prerequisites: "None. \"Introduction to AI and the Future Workforce\" helps learners new to AI assistants."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given real job posts in your area", action: "describe three entry-level cybersecurity jobs and how AI is changing them", standard: "in one sentence each, using the posts" },
    { id: "O2", condition: "Given security duties from your service", action: "write three cyber skills you already have in civilian words and match them to a NICCS Cyber Career Pathways role", standard: "with clearance details listed only as your security office allows" },
    { id: "O3", condition: "For your target cyber role", action: "find one training path and check on official pages what VA may pay", standard: "confirming the program qualifies before you start" },
    { id: "O4", condition: "Given one security idea such as the CIA triad", action: "use an AI assistant to learn the idea and explain it back in your own words", standard: "using only made-up examples, with the AI confirming your explanation" },
    { id: "O5", condition: "Given a suspicious email", action: "list its warning signs and choose a safe response", standard: "without clicking anything and with private details replaced by placeholders before using AI" },
    { id: "O6", condition: "For the email you checked and your service", action: "write a five-line incident note and two résumé lines that connect your service to cyber work", standard: "short, clear and factual, ending with what you recommend" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your path into cybersecurity",
      lessons: [
        {
          objectives: ["O1"],
          title: "Cyber jobs and how AI is changing them",
          minutes: 5,
          goal: "Name three entry-level cybersecurity jobs and say what each one does day to day.",
          text: [
            "Cybersecurity means protecting computers, networks and information from people who want to steal, change or break them.",
            "Common starting jobs include: security operations center (SOC) analyst, who watches alerts and checks if they are real attacks; IT support with security duties, who sets up accounts and fixes access problems; and governance, risk and compliance (GRC) analyst, who checks that an organization follows its security rules.",
            "AI now helps sort alerts, summarize logs and spot unusual activity. Attackers use AI too, for example to write convincing scam emails. That means employers want people who can use AI tools and still judge what is real."
          ],
          words: [["SOC", "security operations center: the team that watches for and responds to attacks."], ["Alert", "a warning a security tool raises when it sees something unusual."], ["GRC", "governance, risk and compliance: making sure an organization follows its security rules and laws."]],
          slides: [
            { title: "What cybersecurity is", bullets: ["Protecting computers, networks and information", "From people who steal, change or break them"] },
            { title: "Three starting jobs", bullets: ["SOC analyst: checks alerts", "IT support with security duties: accounts and access", "GRC analyst: checks the rules are followed"] },
            { title: "AI on both sides", bullets: ["Defenders: sort alerts, summarize logs", "Attackers: write convincing scam emails", "Employers need people who use AI and judge it"] }
          ],
          tryIt: "Search a job site for \"SOC analyst\", \"IT support\" and \"GRC analyst\" in your area. For each, write one sentence about what the job does, using the posts.",
          youCanNow: "name three entry-level cyber jobs and explain what each one does.",
          quickCheck: [
            { objective: "O1", q: "What is cybersecurity about?", options: ["Building video games", "Selling computers", "Fixing printers only", "Protecting computers, networks and information"], answer: 3, why: "Cybersecurity protects computers, networks and information from attacks and mistakes." },
            { objective: "O1", q: "You read three SOC analyst posts. What do you write down?", options: ["Only the highest salary", "One sentence on what the job does day to day, from the posts", "The names of the recruiters", "Nothing; posts are all the same"], answer: 1, why: "Describing the daily work from real posts shows you what the job really is." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Translating your service into cyber skills",
          minutes: 5,
          goal: "Write three cyber skills you already have from military service, in civilian words.",
          text: [
            "You may not have worked in cyber, but you probably practiced its basics. OPSEC (operations security) is protecting information from the enemy. Standing watch is monitoring. Reporting a security incident up the chain is incident response. Controlling who enters a building is access control.",
            "If you held a security clearance, say so on your résumé in the way your security office allows (usually the level and whether it is active). Many cyber employers value it.",
            "The NICCS website from the Cybersecurity and Infrastructure Security Agency (CISA) has a section for veterans and a Cyber Career Pathways Tool that shows cyber roles and the skills each needs. Use it with My Next Move for Veterans to match your job code."
          ],
          steps: ["List three security habits from your service (OPSEC, watch, access control, reporting).", "Ask an AI assistant: \"Translate these military security duties into cybersecurity skills employers use.\"", "Compare with the roles on the NICCS Cyber Career Pathways Tool.", "Keep the three skills that are true and easy to explain."],
          words: [["OPSEC", "operations security: keeping useful information away from an opponent."], ["Access control", "deciding who is allowed into a place, system or file."], ["Incident response", "what a team does when something bad or suspicious happens."], ["NICCS", "National Initiative for Cybersecurity Careers and Studies, CISA's cyber career and training website."]],
          slides: [
            { title: "You already practiced the basics", bullets: ["OPSEC = protecting information", "Standing watch = monitoring", "Reporting up the chain = incident response"] },
            { title: "Security clearance", bullets: ["Many cyber employers value it", "List it the way your security office allows"] },
            { title: "Official help: NICCS (CISA)", bullets: ["A section for veterans", "Cyber Career Pathways Tool", "Match it with My Next Move for Veterans"] }
          ],
          sources: [{ name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }, { name: "My Next Move for Veterans (U.S. Department of Labor)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Write three security duties from your own service. Ask an AI assistant to put them in cyber words, then check them against one role in the NICCS Cyber Career Pathways Tool.",
          youCanNow: "describe your military security experience as cyber skills an employer recognizes.",
          quickCheck: [
            { objective: "O2", q: "Standing watch in the military is most like which cyber task?", options: ["Monitoring", "Selling software", "Graphic design", "Writing ads"], answer: 0, why: "Watching for anything unusual and reporting it is what cyber monitoring does." },
            { objective: "O2", q: "You want to put your clearance on a résumé. What do you do?", options: ["Describe the classified programs you worked on", "Leave out all of your service", "List it only the way your security office allows, usually level and status", "Ask the AI to guess how to list it"], answer: 2, why: "Clearances are listed only as the security office allows, never with classified details." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Finding official training and help paying for it",
          minutes: 5,
          goal: "Find one training path and check on official pages what VA may pay.",
          text: [
            "NICCS has an Education and Training Catalog where you can search cyber courses. Job posts will tell you which entry certification employers want; CompTIA Security+ is one that appears often in entry-level posts, but read posts in your own area.",
            "VA can repay licensing and certification test fees if you have a qualifying GI Bill benefit. When we checked va.gov in October 2026, the limit was no more than $2,000 per test, and it uses some of your entitlement. VA's VET TEC 2.0 program funds non-degree high-tech training such as computer programming, software and information sciences, with a limited number of places each year. The VET TEC page did not list cybersecurity by name, so check whether a program qualifies.",
            "The Department of Labor's Veterans' Employment and Training Service (VETS) runs the Transition Assistance Program and points veterans to employment help and apprenticeships."
          ],
          steps: ["Search the NICCS Education and Training Catalog for an entry course.", "Check five job posts for the most-requested certification.", "Read the va.gov test fee page and the VET TEC 2.0 page.", "Check dol.gov/agencies/vets for job help and apprenticeships."],
          words: [["Entry-level", "a job for people starting out in a field."], ["Apprenticeship", "a paid job where you learn on the job while you work."]],
          slides: [
            { title: "Find training", bullets: ["NICCS Education and Training Catalog", "Job posts show which certification is wanted"] },
            { title: "Help paying (check va.gov)", bullets: ["Test fees: up to $2,000 per test (Oct 2026)", "VET TEC 2.0: high-tech training, limited places", "Check the program qualifies before you start"] },
            { title: "Job help", bullets: ["Department of Labor VETS", "Transition Assistance Program", "Apprenticeships"] }
          ],
          sources: [
            { name: "VA: Licensing and certification test fees", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "NICCS, Cybersecurity and Infrastructure Security Agency", url: "https://niccs.cisa.gov/" }
          ],
          tryIt: "Find one entry cyber course in the NICCS catalog and the certification most asked for in local job posts. Then open the va.gov test fee page and note whether your benefit qualifies.",
          youCanNow: "find an official cyber training path and check what VA may help pay for.",
          quickCheck: [
            { objective: "O3", q: "What is NICCS?", options: ["A paid bootcamp", "A free cyber training and career site run by CISA", "A job scam", "A VA form"], answer: 1, why: "NICCS is CISA's site with a training catalog and career pathways tool." },
            { objective: "O3", q: "You found a cyber course you like. What do you check before counting on VA to pay?", options: ["Nothing; VA pays everything", "Only what the AI says", "Only what a friend says", "Whether the program qualifies, on the official va.gov page"], answer: 3, why: "Eligibility and program lists change, so you confirm on va.gov before you start." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your path into cybersecurity",
        questions: [
          { objective: "O1", q: "What does a SOC analyst mainly do?", options: ["Sells computers", "Writes laws", "Checks security alerts to see if they are real attacks", "Fixes printers only"], answer: 2, why: "The SOC watches for and responds to attacks." },
          { objective: "O1", q: "How are attackers using AI?", options: ["To write convincing scam emails", "They are not", "Only to play games", "To fix your network for free"], answer: 0, why: "AI helps attackers write believable scams." },
          { objective: "O2", q: "OPSEC in the military is closest to which cyber skill?", options: ["Painting", "Cooking", "Driving", "Protecting information"], answer: 3, why: "OPSEC is keeping information away from opponents." },
          { objective: "O2", q: "Which official site has a Cyber Career Pathways Tool?", options: ["A gaming forum", "NICCS from CISA", "A shopping site", "A music app"], answer: 1, why: "NICCS is CISA's cyber careers and training site." },
          { objective: "O3", q: "The VET TEC 2.0 page did not list cybersecurity by name. What should you do?", options: ["Assume it is covered", "Check whether the program qualifies before you start", "Give up on cyber", "Ask a stranger online"], answer: 1, why: "Always confirm a program qualifies on the official page." }
        ]
      }
    },
    {
      name: "Chapter 2: Practicing like an analyst",
      lessons: [
        {
          objectives: ["O4"],
          title: "Using AI as a security study partner",
          minutes: 5,
          goal: "Use an AI assistant to learn one security idea and explain it back in your own words.",
          text: [
            "A key idea in security is the CIA triad: confidentiality (only the right people see information), integrity (information is not changed without permission) and availability (systems work when people need them).",
            "Ask an AI assistant to explain one idea with a military example, then explain it back in your own words and ask the AI to check you. This \"teach-back\" is how you know you really understand.",
            "Never paste passwords, real company logs, customer data or anything from a work system into a public AI tool. Use made-up or cleaned examples. Many employers have rules about which AI tools are allowed."
          ],
          steps: ["Pick one idea, such as the CIA triad.", "Ask: \"Explain this in simple words with a military example.\"", "Explain it back in your own words.", "Ask the AI: \"Is my explanation right? What did I miss?\"", "Use only made-up examples, never real data."],
          words: [["CIA triad", "confidentiality, integrity and availability: the three goals of security."], ["Teach-back", "explaining something back in your own words to prove you understand it."], ["Log", "a computer's record of what happened and when."]],
          slides: [
            { title: "The CIA triad", bullets: ["Confidentiality: only the right people see it", "Integrity: not changed without permission", "Availability: works when needed"] },
            { title: "Teach-back", bullets: ["AI explains with a military example", "You explain it back", "AI checks what you missed"] },
            { title: "Keep real data out", bullets: ["No passwords, real logs or customer data", "Use made-up examples", "Follow your employer's AI rules"] }
          ],
          tryIt: "Ask an AI assistant to explain the CIA triad using a military example. Then write your own two-sentence explanation and ask it to check you.",
          youCanNow: "use AI to learn a security idea and prove you understand it with a teach-back.",
          quickCheck: [
            { objective: "O4", q: "In the CIA triad, what does confidentiality mean?", options: ["Systems are always on", "Data cannot be changed", "Only the right people can see the information", "Everyone can see the data"], answer: 2, why: "Confidentiality means information is seen only by people allowed to see it." },
            { objective: "O4", q: "You want to practice a security idea with AI. Which example do you use?", options: ["A made-up example", "A real log from your job", "Your work password", "A real customer's email"], answer: 0, why: "Made-up examples let you practice without sharing real company or personal information." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Checking a suspicious email",
          minutes: 6,
          goal: "List the warning signs in a suspicious email and decide what to do, without clicking anything.",
          text: [
            "Phishing is a fake message that tries to make you click a link, open a file, or give up a password or money. Checking reported emails is a common first task for junior analysts.",
            "Warning signs: the sender's address does not match the company, the message rushes or threatens you, it asks for a password, code, payment or gift cards, the link text and real address are different, or there is an unexpected attachment.",
            "To use AI safely, copy only the text of the message, and replace names, email addresses and account numbers with placeholders like [name]. Ask the AI to list warning signs. Do not click links or open attachments. Hover over a link (on a computer) to see its real address."
          ],
          steps: ["Do not click links or open attachments.", "Look at the sender's real address and the link addresses.", "Copy only the message text and replace private details with placeholders.", "Ask an AI assistant: \"List the phishing warning signs in this email.\"", "Decide: report it, delete it, or confirm with the company using a number you know is real."],
          words: [["Phishing", "a fake message that tries to trick you into clicking, sharing a password or sending money."], ["Attachment", "a file sent with an email."], ["Placeholder", "a stand-in like [name] used instead of real private details."]],
          slides: [
            { title: "Phishing", bullets: ["A fake message that tricks you", "Wants a click, a password or money"] },
            { title: "Warning signs", bullets: ["Sender address does not match", "Rushes or threatens you", "Asks for a password, code or payment", "Odd link or unexpected attachment"] },
            { title: "Check safely with AI", bullets: ["Never click links or open files", "Paste text only, with placeholders", "Ask the AI to list warning signs"] }
          ],
          tryIt: "Find a suspicious email in your spam folder (or ask an AI to write a made-up one). Without clicking anything, list its warning signs yourself, then ask the AI and compare lists.",
          youCanNow: "spot the warning signs of a phishing email and check it safely with AI help.",
          quickCheck: [
            { objective: "O5", q: "What is phishing?", options: ["A safe way to share files", "A type of antivirus", "A security update", "A fake message that tricks you into clicking or sharing"], answer: 3, why: "Phishing messages pretend to be real to get you to click or share information." },
            { objective: "O5", q: "An email says \"Your account is locked, click here now\". What is your safe first step?", options: ["Click to see if it is real", "Do not click; check the sender and hover to see the real address", "Reply with your password", "Forward it to everyone"], answer: 1, why: "You check without clicking: the sender, the real link address and the pressure to act fast." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Writing an incident note and telling your story",
          minutes: 5,
          goal: "Write a five-line incident note and two résumé lines that connect your service to cyber work.",
          text: [
            "Analysts write short notes so others can act. A simple five-line incident note covers: what arrived, the warning signs, the risk, what you did, and what you recommend. It is like a SALUTE or spot report: clear, short and factual.",
            "Your résumé should connect your service to cyber work with action and results, for example: \"Enforced OPSEC and access control for a 120-person unit; completed [course] in network security, 2026.\"",
            "Use AI to tighten your wording, but every line must be true. In interviews, tell one short story about a time you noticed something wrong and reported it."
          ],
          steps: ["Write the five lines: what arrived, warning signs, risk, action, recommendation.", "Keep each line short and factual.", "Write two résumé lines linking your service to cyber skills.", "Ask an AI assistant to make them clearer, then check every word is true."],
          words: [["Incident note", "a short written report of a security event and what was done."], ["Recommendation", "what you suggest should happen next."]],
          slides: [
            { title: "Five-line incident note", bullets: ["What arrived", "Warning signs and risk", "What you did", "What you recommend"] },
            { title: "Like a spot report", bullets: ["Clear, short, factual", "Others can act on it"] },
            { title: "Your résumé story", bullets: ["Service action + cyber skill + result", "AI can tighten it; every word must be true"] }
          ],
          tryIt: "Final task: write the five-line incident note for the email you checked in Lesson 5, then write two résumé lines that connect your military experience to a cyber job.",
          youCanNow: "check a suspicious email like a junior analyst, report it clearly, and present your service as cyber experience.",
          quickCheck: [
            { objective: "O6", q: "What does a five-line incident note end with?", options: ["What you recommend", "Your opinion of the sender", "A joke", "The email's full text"], answer: 0, why: "The note ends with your recommendation so a reader knows what to do next." },
            { objective: "O6", q: "Which résumé line connects service to cyber work best?", options: ["\"Did security stuff in the Army\"", "\"Worked hard\"", "\"Enforced access control for a 90-person unit; completed a network security course, 2026\"", "\"Have a clearance; ask me about missions\""], answer: 2, why: "It shows a real security duty, a size and training, in civilian words." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Practicing like an analyst",
        questions: [
          { objective: "O4", q: "In the CIA triad, \"integrity\" means:", options: ["Data is free", "Systems are always fast", "Only managers can log in", "Information is not changed without permission"], answer: 3, why: "Integrity is about information staying correct and unchanged." },
          { objective: "O5", q: "What should you NEVER paste into a public AI tool?", options: ["A real company log or a password", "A made-up example", "A general question", "The words \"CIA triad\""], answer: 0, why: "Real data and passwords must stay private." },
          { objective: "O5", q: "An email rushes you and asks for a code sent to your phone. This is:", options: ["Normal", "A job offer", "A phishing warning sign", "A system update"], answer: 2, why: "Rushing and code requests are classic phishing signs." },
          { objective: "O5", q: "What is the safe first step with a suspicious link?", options: ["Click it to see", "Reply and ask", "Forward it to everyone", "Do not click; check the real address"], answer: 3, why: "Clicking can infect the device or steal details." },
          { objective: "O6", q: "A good incident note is:", options: ["Long and emotional", "Only a guess", "Short, clear and factual", "Sent to the attacker"], answer: 2, why: "Others need to act on clear facts." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Cybersecurity Careers",
    questions: [
      { objective: "O1", q: "Cybersecurity is about:", options: ["Building video games", "Protecting computers, networks and information", "Selling phones", "Designing logos"], answer: 1, why: "It protects systems and information from attackers." },
      { objective: "O1", q: "A GRC analyst mainly:", options: ["Checks that an organization follows its security rules", "Repairs cars", "Writes music", "Delivers packages"], answer: 0, why: "Governance, risk and compliance is about rules being followed." },
      { objective: "O1", q: "How do defenders use AI?", options: ["To replace all people", "To send scam emails", "To sort alerts and summarize logs", "They never use it"], answer: 2, why: "AI helps defenders handle large amounts of data." },
      { objective: "O1", q: "Why do employers want people who can judge AI output?", options: ["AI can be wrong and attackers use it too", "AI is never wrong", "It is the law", "AI cannot read"], answer: 0, why: "Human judgment catches AI mistakes and AI-made scams." },
      { objective: "O2", q: "Standing watch in the military is most like which cyber task?", options: ["Coding games", "Selling", "Painting", "Monitoring"], answer: 3, why: "Watching for anything unusual is monitoring." },
      { objective: "O2", q: "Reporting a problem up the chain of command is like:", options: ["Marketing", "Incident response", "Shipping", "Hiring"], answer: 1, why: "Incident response starts with reporting what happened." },
      { objective: "O2", q: "How should you list a security clearance on a résumé?", options: ["Post all the details online", "The way your security office allows, usually level and status", "Never mention it", "Make one up"], answer: 1, why: "Follow your security office's guidance." },
      { objective: "O3", q: "NICCS is run by:", options: ["A phone carrier", "A video game company", "A bank", "CISA, the Cybersecurity and Infrastructure Security Agency"], answer: 3, why: "NICCS is CISA's cyber career and training site." },
      { objective: "O3", q: "Where do you find which entry certification employers want most?", options: ["Real job posts in your area", "A random ad", "A coin flip", "An old textbook"], answer: 0, why: "Job posts list what employers ask for." },
      { objective: "O3", q: "Per va.gov in October 2026, VA test fee repayment is up to:", options: ["Unlimited", "$50 per test", "$2,000 per test", "$10,000 per test"], answer: 2, why: "The page said no more than $2,000 per test." },
      { objective: "O3", q: "Which Department of Labor agency helps veterans with jobs?", options: ["The Census", "The Postal Service", "NASA", "VETS, the Veterans' Employment and Training Service"], answer: 3, why: "VETS runs veteran employment programs, including TAP." },
      { objective: "O4", q: "In the CIA triad, \"availability\" means:", options: ["Data is changed often", "Data is secret", "Systems work when people need them", "Anyone can log in"], answer: 2, why: "Availability is about systems being up when needed." },
      { objective: "O4", q: "What is a teach-back?", options: ["Copying an answer", "Explaining an idea in your own words to prove you understand it", "Asking someone else to study", "Skipping a lesson"], answer: 1, why: "Explaining it back shows real understanding." },
      { objective: "O4", q: "Which is safe to use when practicing with AI?", options: ["A made-up example", "Your employer's real logs", "Customer records", "Your password"], answer: 0, why: "Made-up examples protect real data." },
      { objective: "O5", q: "Phishing is:", options: ["A type of firewall", "A security tool", "A fake message that tricks you into clicking or sharing", "A job title"], answer: 2, why: "Phishing tricks people into giving access or money." },
      { objective: "O5", q: "Which is a phishing warning sign?", options: ["Sender address does not match the company", "A message from your known coworker about lunch", "A newsletter you signed up for", "A calendar reminder you set"], answer: 0, why: "A mismatched sender address is a common sign." },
      { objective: "O5", q: "Before pasting an email into AI, you should:", options: ["Open the attachment", "Add your password", "Click all the links", "Replace names, emails and numbers with placeholders"], answer: 3, why: "Placeholders keep private details out of the AI." },
      { objective: "O5", q: "How do you see where a link really goes on a computer?", options: ["Click it", "Hover over it without clicking", "Reply to the sender", "Print the email"], answer: 1, why: "Hovering shows the real address safely." },
      { objective: "O6", q: "A five-line incident note ends with:", options: ["A joke", "What you recommend", "Your password", "A link to click"], answer: 1, why: "The recommendation tells others what to do next." },
      { objective: "O6", q: "Which résumé line is strongest?", options: ["\"Hard worker.\"", "\"Good with computers.\"", "\"I like cyber.\"", "\"Enforced OPSEC and access control for a 120-person unit; completed a network security course, 2026.\""], answer: 3, why: "It shows action, scale and training." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      8,
      11,
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
        name: "Warning signs found",
        objective: "O5",
        notYet: "Fewer than three warning signs, or the learner clicked the link.",
        meets: "At least three warning signs listed without clicking anything.",
        exceeds: "The learner found a sign the AI missed, or the AI found one they missed, and they can explain it."
      },
      {
        name: "Safe use of AI",
        objective: "O4",
        notYet: "Real names, emails or numbers were pasted into the AI.",
        meets: "Private details were replaced with placeholders, or a made-up example was used.",
        exceeds: "The learner explains which details they removed and why."
      },
      {
        name: "Incident note",
        objective: "O6",
        notYet: "Missing lines, or opinions instead of facts.",
        meets: "Five short, factual lines: what arrived, warning signs, risk, what you did, what you recommend.",
        exceeds: "The recommendation names a clear next step for the team, such as reporting or blocking the sender."
      },
      {
        name: "Résumé lines",
        objective: "O2",
        notYet: "Lines are vague or include classified details.",
        meets: "Two lines that connect a real military security duty to a cyber job in civilian words.",
        exceeds: "The lines use words from a NICCS pathway role or real job posts."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who enroll in a cyber course or certification within 60 days (follow-up survey)",
      "Learners who apply for an entry-level cyber or IT support job within 90 days",
      "Learners who report spotting and reporting a phishing email at home or work"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet (to hover over links), or a smartphone",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "The free NICCS (CISA) and va.gov websites, and local cyber job posts",
      "A made-up suspicious email, or one from the learner's own spam folder with personal details removed",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Provide made-up phishing emails for class so no one needs to open real suspicious messages.",
      "Repeat the rule: never click a suspicious link, and never paste real logs, passwords or private details into a public AI.",
      "Remind learners with clearances to follow their security office's guidance on how to list them.",
      "Score the incident note and résumé lines with the rubric, and give feedback on one Not yet row at a time.",
      "Point learners to VETS, American Job Centers and NICCS for next steps."
    ]
  }
};
