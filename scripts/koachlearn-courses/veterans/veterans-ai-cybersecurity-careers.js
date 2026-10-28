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
  chapters: [
    {
      name: "Chapter 1: Your path into cybersecurity",
      lessons: [
        {
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
          youCanNow: "name three entry-level cyber jobs and explain what each one does."
        },
        {
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
          youCanNow: "describe your military security experience as cyber skills an employer recognizes."
        },
        {
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
          youCanNow: "find an official cyber training path and check what VA may help pay for."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your path into cybersecurity",
        questions: [
          { q: "What does a SOC analyst mainly do?", options: ["Sells computers", "Writes laws", "Checks security alerts to see if they are real attacks", "Fixes printers only"], answer: 2, why: "The SOC watches for and responds to attacks." },
          { q: "How are attackers using AI?", options: ["To write convincing scam emails", "They are not", "Only to play games", "To fix your network for free"], answer: 0, why: "AI helps attackers write believable scams." },
          { q: "OPSEC in the military is closest to which cyber skill?", options: ["Painting", "Cooking", "Driving", "Protecting information"], answer: 3, why: "OPSEC is keeping information away from opponents." },
          { q: "Which official site has a Cyber Career Pathways Tool?", options: ["A gaming forum", "NICCS from CISA", "A shopping site", "A music app"], answer: 1, why: "NICCS is CISA's cyber careers and training site." },
          { q: "The VET TEC 2.0 page did not list cybersecurity by name. What should you do?", options: ["Assume it is covered", "Check whether the program qualifies before you start", "Give up on cyber", "Ask a stranger online"], answer: 1, why: "Always confirm a program qualifies on the official page." }
        ]
      }
    },
    {
      name: "Chapter 2: Practicing like an analyst",
      lessons: [
        {
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
          youCanNow: "use AI to learn a security idea and prove you understand it with a teach-back."
        },
        {
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
          youCanNow: "spot the warning signs of a phishing email and check it safely with AI help."
        },
        {
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
          youCanNow: "check a suspicious email like a junior analyst, report it clearly, and present your service as cyber experience."
        }
      ],
      check: {
        title: "Knowledge Check 2: Practicing like an analyst",
        questions: [
          { q: "In the CIA triad, \"integrity\" means:", options: ["Data is free", "Systems are always fast", "Only managers can log in", "Information is not changed without permission"], answer: 3, why: "Integrity is about information staying correct and unchanged." },
          { q: "What should you NEVER paste into a public AI tool?", options: ["A real company log or a password", "A made-up example", "A general question", "The words \"CIA triad\""], answer: 0, why: "Real data and passwords must stay private." },
          { q: "An email rushes you and asks for a code sent to your phone. This is:", options: ["Normal", "A job offer", "A phishing warning sign", "A system update"], answer: 2, why: "Rushing and code requests are classic phishing signs." },
          { q: "What is the safe first step with a suspicious link?", options: ["Click it to see", "Reply and ask", "Forward it to everyone", "Do not click; check the real address"], answer: 3, why: "Clicking can infect the device or steal details." },
          { q: "A good incident note is:", options: ["Long and emotional", "Only a guess", "Short, clear and factual", "Sent to the attacker"], answer: 2, why: "Others need to act on clear facts." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Cybersecurity Careers",
    questions: [
      { q: "Cybersecurity is about:", options: ["Building video games", "Protecting computers, networks and information", "Selling phones", "Designing logos"], answer: 1, why: "It protects systems and information from attackers." },
      { q: "A GRC analyst mainly:", options: ["Checks that an organization follows its security rules", "Repairs cars", "Writes music", "Delivers packages"], answer: 0, why: "Governance, risk and compliance is about rules being followed." },
      { q: "How do defenders use AI?", options: ["To replace all people", "To send scam emails", "To sort alerts and summarize logs", "They never use it"], answer: 2, why: "AI helps defenders handle large amounts of data." },
      { q: "Why do employers want people who can judge AI output?", options: ["AI can be wrong and attackers use it too", "AI is never wrong", "It is the law", "AI cannot read"], answer: 0, why: "Human judgment catches AI mistakes and AI-made scams." },
      { q: "Standing watch in the military is most like which cyber task?", options: ["Coding games", "Selling", "Painting", "Monitoring"], answer: 3, why: "Watching for anything unusual is monitoring." },
      { q: "Reporting a problem up the chain of command is like:", options: ["Marketing", "Incident response", "Shipping", "Hiring"], answer: 1, why: "Incident response starts with reporting what happened." },
      { q: "How should you list a security clearance on a résumé?", options: ["Post all the details online", "The way your security office allows, usually level and status", "Never mention it", "Make one up"], answer: 1, why: "Follow your security office's guidance." },
      { q: "NICCS is run by:", options: ["A phone carrier", "A video game company", "A bank", "CISA, the Cybersecurity and Infrastructure Security Agency"], answer: 3, why: "NICCS is CISA's cyber career and training site." },
      { q: "Where do you find which entry certification employers want most?", options: ["Real job posts in your area", "A random ad", "A coin flip", "An old textbook"], answer: 0, why: "Job posts list what employers ask for." },
      { q: "Per va.gov in October 2026, VA test fee repayment is up to:", options: ["Unlimited", "$50 per test", "$2,000 per test", "$10,000 per test"], answer: 2, why: "The page said no more than $2,000 per test." },
      { q: "Which Department of Labor agency helps veterans with jobs?", options: ["The Census", "The Postal Service", "NASA", "VETS, the Veterans' Employment and Training Service"], answer: 3, why: "VETS runs veteran employment programs, including TAP." },
      { q: "In the CIA triad, \"availability\" means:", options: ["Data is changed often", "Data is secret", "Systems work when people need them", "Anyone can log in"], answer: 2, why: "Availability is about systems being up when needed." },
      { q: "What is a teach-back?", options: ["Copying an answer", "Explaining an idea in your own words to prove you understand it", "Asking someone else to study", "Skipping a lesson"], answer: 1, why: "Explaining it back shows real understanding." },
      { q: "Which is safe to use when practicing with AI?", options: ["A made-up example", "Your employer's real logs", "Customer records", "Your password"], answer: 0, why: "Made-up examples protect real data." },
      { q: "Phishing is:", options: ["A type of firewall", "A security tool", "A fake message that tricks you into clicking or sharing", "A job title"], answer: 2, why: "Phishing tricks people into giving access or money." },
      { q: "Which is a phishing warning sign?", options: ["Sender address does not match the company", "A message from your known coworker about lunch", "A newsletter you signed up for", "A calendar reminder you set"], answer: 0, why: "A mismatched sender address is a common sign." },
      { q: "Before pasting an email into AI, you should:", options: ["Open the attachment", "Add your password", "Click all the links", "Replace names, emails and numbers with placeholders"], answer: 3, why: "Placeholders keep private details out of the AI." },
      { q: "How do you see where a link really goes on a computer?", options: ["Click it", "Hover over it without clicking", "Reply to the sender", "Print the email"], answer: 1, why: "Hovering shows the real address safely." },
      { q: "A five-line incident note ends with:", options: ["A joke", "What you recommend", "Your password", "A link to click"], answer: 1, why: "The recommendation tells others what to do next." },
      { q: "Which résumé line is strongest?", options: ["\"Hard worker.\"", "\"Good with computers.\"", "\"I like cyber.\"", "\"Enforced OPSEC and access control for a 120-person unit; completed a network security course, 2026.\""], answer: 3, why: "It shows action, scale and training." }
    ]
  }
};
