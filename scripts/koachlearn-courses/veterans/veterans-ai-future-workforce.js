"use strict";

// Koach Learn course: Veterans (military) -> "Introduction to AI and the Future Workforce". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three
// micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Official pages checked 27 October 2026 (listed in each lesson's `sources`). See scripts/koachlearn-export.js.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "veterans-ai-future-workforce",
  category: "Veterans (military)",
  name: "Introduction to AI and the Future Workforce",
  skills: "Explaining what AI is, Opening a free AI assistant, Writing a clear prompt, Translating military duties into civilian words, Checking AI answers, Protecting private and sensitive information",
  outcome: "use a free AI assistant to turn one of your military duties into civilian job language, check the result against an official job source, and keep private and sensitive information out of it.",
  about: [
    "This course is for veterans and transitioning service members who want to understand how artificial intelligence (AI) is changing civilian work, and how to use it to their advantage. No technical background is needed.",
    "You will learn what AI is, how to open a free AI assistant, how to give it clear instructions (much like a clear order: task, conditions, standard), and how to keep private and sensitive information out of it. Then you will use it to translate your military experience into words civilian employers understand, and check the result.",
    "Each lesson takes about five minutes: read, watch the slides, then do the \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Pick one duty you performed in the military. Use an AI assistant to rewrite it as three civilian résumé bullets, ask for one improvement, look up your military job in the O*NET Military Crosswalk to check the civilian job titles it suggests, and remove any private or sensitive details before you save the bullets.",
  chapters: [
    {
      name: "Chapter 1: AI basics for the mission ahead",
      lessons: [
        {
          title: "What AI is and how it is changing work",
          minutes: 4,
          goal: "Explain in your own words what AI is and name two ways it is changing civilian jobs.",
          text: [
            "AI, or artificial intelligence, means computer programs that do tasks that usually need a person, such as writing, summarizing, sorting information or spotting patterns. An AI assistant is one you chat with in everyday words. Well-known free ones include ChatGPT, Microsoft Copilot and Google Gemini.",
            "In civilian work, AI is now used to draft emails and reports, summarize long documents, plan schedules and routes, answer customer questions, and find problems in data. In logistics it helps forecast supplies; in maintenance it helps spot parts likely to fail; in offices it writes first drafts.",
            "AI does not replace judgment, leadership or responsibility. Those are skills you built in uniform. Employers want people who can use AI as a tool and still make the call, check the work and lead the team."
          ],
          words: [["AI", "short for artificial intelligence: computer programs that do tasks that usually need a person."], ["AI assistant", "an AI program you chat with by typing or talking."]],
          slides: [
            { title: "AI is...", bullets: ["Programs that write, summarize, sort and spot patterns", "Assistants you chat with: ChatGPT, Copilot, Gemini"] },
            { title: "How AI is changing work", bullets: ["Drafting emails and reports", "Forecasting supplies and planning routes", "Spotting equipment likely to fail"] },
            { title: "What AI does not replace", bullets: ["Judgment and responsibility", "Leadership", "Checking the work: you still make the call"] }
          ],
          tryIt: "Write down two tasks from your military job and two tasks from a civilian job you want. Next to each, write one way AI could help with it.",
          youCanNow: "explain what AI is, name ways it is changing work, and say which skills AI does not replace."
        },
        {
          title: "Opening an assistant and giving a clear order",
          minutes: 5,
          goal: "Open a free AI assistant and write a prompt with a task, conditions and a standard.",
          text: [
            "On a phone, install the official app from the app store (OpenAI for ChatGPT, Microsoft for Copilot, Google for Gemini). On a computer, type chatgpt.com, copilot.microsoft.com or gemini.google.com in the browser.",
            "What you type is called a prompt. You already know how to give a clear order. Use the same idea: the task (what you need), the conditions (your situation), and the standard (what a good answer looks like: length, format, tone).",
            "Example: \"Task: list civilian jobs that use vehicle maintenance skills. Conditions: I was an Army light-wheel vehicle mechanic for 6 years. Standard: 5 job titles, one line each, plain words.\""
          ],
          steps: ["Open the official app or website.", "Write the task: what you need.", "Add the conditions: your situation, without private details.", "Add the standard: length, format and tone.", "Send it and read the answer."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."], ["Format", "the shape of the answer, such as a list, a table or a short paragraph."]],
          slides: [
            { title: "Where to open it", bullets: ["Phone: official app from the app store", "Computer: chatgpt.com, copilot.microsoft.com, gemini.google.com"] },
            { title: "A prompt is a clear order", bullets: ["Task: what you need", "Conditions: your situation", "Standard: what a good answer looks like"] },
            { title: "Example", bullets: ["Task: civilian jobs using vehicle maintenance skills", "Conditions: 6 years as a light-wheel mechanic", "Standard: 5 titles, one line each, plain words"] }
          ],
          tryIt: "Open a free AI assistant. Write a prompt with task, conditions and standard asking for five civilian job titles that use the skills from your military job. Read the answer.",
          youCanNow: "open a free AI assistant and write a prompt with a task, conditions and a standard."
        },
        {
          title: "Keeping private and sensitive information out",
          minutes: 5,
          goal: "Check a prompt for private or sensitive information and remove it before you send it.",
          text: [
            "Public AI assistants may store what you type. Never type your Social Security number, the numbers on your DD-214, VA file or claim numbers, bank or card numbers, passwords, or medical details you would not want shared.",
            "The same discipline you used for operational security (OPSEC) applies. Do not type classified or controlled information, unit locations, mission details, or anything you were told not to share. Describe your work in general terms: \"supervised a 12-person maintenance team\" is fine; unit names and missions are not needed.",
            "If you need a number in a document, write a placeholder like \"[my number]\" and fill it in yourself later, offline."
          ],
          steps: ["Read your prompt before you send it.", "Remove personal numbers, account details and passwords.", "Remove classified, controlled or mission-specific details.", "Use a placeholder like \"[my number]\" where needed."],
          words: [["OPSEC", "operational security: protecting information an adversary could use."], ["Placeholder", "a stand-in like \"[my number]\" that you replace later yourself."], ["DD-214", "the document that records your service and discharge."]],
          slides: [
            { title: "Never type into a public AI", bullets: ["Social Security, DD-214 or VA file numbers", "Bank or card numbers and passwords", "Private medical details"] },
            { title: "OPSEC still applies", bullets: ["No classified or controlled information", "No unit locations or mission details", "Describe your work in general terms"] },
            { title: "Use a placeholder", bullets: ["Write \"[my number]\" instead", "Fill it in yourself later, offline"] }
          ],
          tryIt: "Write a prompt describing your last military job in a way you could share with any employer. Read it line by line and remove anything private or sensitive before sending.",
          youCanNow: "check a prompt for private and sensitive information and remove it before you send it."
        }
      ],
      check: {
        title: "Knowledge Check 1: AI basics for the mission ahead",
        questions: [
          { q: "Which best describes an AI assistant?", options: ["A recruiter who reads your messages", "A computer program you chat with in everyday words", "A government benefits office", "A secure military network"], answer: 1, why: "An AI assistant is a program you type or talk to that writes answers back." },
          { q: "Which skill does AI NOT replace at work?", options: ["Drafting a first email", "Summarizing a long report", "Judgment and responsibility for the decision", "Sorting a list"], answer: 2, why: "AI can draft and sort, but a person still makes the call and owns the result." },
          { q: "In the \"clear order\" prompt, what are the conditions?", options: ["Your situation, without private details", "The answer's length and format", "The app's name", "Your password"], answer: 0, why: "Conditions describe your situation so the assistant can fit its answer to you." },
          { q: "Which detail is fine to type into a public AI assistant?", options: ["The number on your DD-214", "Your unit's current location", "\"Supervised a 12-person maintenance team\"", "Your VA claim number"], answer: 2, why: "A general description of your work is safe; numbers and mission details are not." },
          { q: "You need your VA file number in a letter you are drafting with AI. What do you do?", options: ["Type the real number", "Type half of it", "Ask the AI to guess it", "Write \"[my number]\" and fill it in yourself later"], answer: 3, why: "A placeholder lets you get help without sharing a private number." }
        ]
      }
    },
    {
      name: "Chapter 2: Translating your service into civilian work",
      lessons: [
        {
          title: "Finding the civilian jobs that match your service",
          minutes: 5,
          goal: "Look up your military job in the O*NET Military Crosswalk and list matching civilian jobs.",
          text: [
            "The U.S. Department of Labor's O*NET OnLine has a Military Crosswalk Search. You choose your branch (Army or Marine Corps MOS, Navy or Coast Guard rating, Air Force AFSC, Space Force SFSC), type your code or job title, and it shows civilian occupations that match.",
            "Each civilian occupation on O*NET lists its tasks, tools and skills. That is the language employers use. You can then ask an AI assistant to explain those jobs in plain words, but the list itself comes from the official source.",
            "CareerOneStop, also sponsored by the Department of Labor, has a Veterans Job Matcher that does a similar match. Try both and compare."
          ],
          steps: ["Go to onetonline.org and open the Military Crosswalk Search.", "Choose your branch.", "Type your code (for example 88M or a Navy rating) or job title.", "Open two or three matching civilian occupations and read their tasks.", "Write down the job titles that interest you."],
          words: [["MOS / rating / AFSC", "the code for your military job in the Army and Marines, Navy and Coast Guard, and Air Force."], ["Crosswalk", "a tool that matches a military job to civilian jobs."], ["O*NET", "the Department of Labor's database of civilian jobs and the skills they need."]],
          slides: [
            { title: "O*NET Military Crosswalk", bullets: ["Run by the U.S. Department of Labor", "Pick your branch, type your code or title", "See matching civilian occupations"] },
            { title: "Read the civilian tasks", bullets: ["Each occupation lists tasks, tools and skills", "That is the language employers use"] },
            { title: "Also try", bullets: ["CareerOneStop Veterans Job Matcher", "Compare both lists"] }
          ],
          sources: [{ name: "O*NET OnLine: Military Crosswalk Search", url: "https://www.onetonline.org/crosswalk/MOC" }, { name: "U.S. Department of Labor VETS: Find a job", url: "https://www.dol.gov/agencies/vets/veterans/findajob" }],
          tryIt: "Look up your MOS, rating or AFSC in the O*NET Military Crosswalk. Write down three civilian job titles it suggests and two tasks from each.",
          youCanNow: "use the O*NET Military Crosswalk to find civilian jobs that match your military job."
        },
        {
          title: "Rewriting a military duty in civilian words",
          minutes: 5,
          goal: "Use AI to rewrite one military duty as a civilian résumé bullet with a result.",
          text: [
            "Civilian hiring managers may not know what a platoon sergeant, a PMCS or a CONEX is. Your job is to say the same thing in their words: what you did, how big it was, and what result it got.",
            "Give the AI your duty in plain terms and the civilian job you are aiming for. Example prompt: \"Rewrite this for a warehouse supervisor résumé: I was responsible for a supply room, 300 line items, issued gear to 120 soldiers, zero losses on 2 inventories. Give me 3 bullets that start with a strong verb and include numbers.\"",
            "Then improve it with follow-ups: \"Remove military slang.\" \"Use the words from this job posting.\" \"Make it shorter.\" The first answer is a draft; you are the editor."
          ],
          steps: ["Write the duty in plain words: what, how big, what result.", "Name the civilian job you are aiming for.", "Ask for 3 bullets with strong verbs and numbers.", "Ask for one change, like \"remove military slang\".", "Read it and make sure every word is true."],
          words: [["Résumé bullet", "one short line on a résumé that shows something you did and its result."], ["Acronym", "a word made from first letters, like PMCS; civilians often do not know military ones."]],
          slides: [
            { title: "Say it in their words", bullets: ["What you did", "How big it was: people, money, equipment", "What result it got"] },
            { title: "Example prompt", bullets: ["\"Rewrite for a warehouse supervisor résumé\"", "Supply room, 300 line items, 120 soldiers, zero losses", "\"3 bullets, strong verbs, numbers\""] },
            { title: "Then edit", bullets: ["\"Remove military slang.\"", "\"Use the words from this job posting.\"", "Check every word is true"] }
          ],
          tryIt: "Pick one duty from your service. Ask an AI assistant to rewrite it as three civilian résumé bullets for one job title from Lesson 4. Ask it to remove military slang.",
          youCanNow: "rewrite a military duty as clear, civilian résumé bullets with numbers and results."
        },
        {
          title: "Checking the answer and planning your next skill",
          minutes: 5,
          goal: "Check an AI answer against official sources and choose one skill to build next.",
          text: [
            "AI can make things up: a job title that does not fit, a certification that does not exist, or a wrong pay figure. This is called a hallucination. Check job titles against O*NET, and check pay and job outlook in the Bureau of Labor Statistics Occupational Outlook Handbook (bls.gov/ooh).",
            "Make sure your bullets are true. Never let AI inflate your rank, numbers or awards. An employer may check, and trust is hard to win back.",
            "Then plan one skill to build. Free official help includes the VA's Personalized Career Planning and Guidance program (free career counseling for eligible veterans and service members) and the Department of Labor's Transition Assistance Program. For high-tech training, the VA's VET TEC 2.0 program pays for certain non-degree tech courses for eligible veterans. Check current eligibility on va.gov."
          ],
          steps: ["Check every job title against O*NET.", "Check pay and outlook in the Occupational Outlook Handbook.", "Make sure every number and claim in your bullets is true.", "Pick one skill to build and one official program that can help."],
          words: [["Hallucination", "when an AI writes something that sounds true but is made up."], ["Occupational Outlook Handbook", "a free Bureau of Labor Statistics guide to pay, job growth and how to enter each job."]],
          slides: [
            { title: "Check AI answers", bullets: ["Job titles: O*NET", "Pay and outlook: bls.gov/ooh", "Never inflate rank, numbers or awards"] },
            { title: "Free official help", bullets: ["VA Personalized Career Planning and Guidance", "DOL Transition Assistance Program (TAP)", "VA VET TEC 2.0 for high-tech training"] },
            { title: "Your next move", bullets: ["Pick one skill to build", "Pick one program that can help", "Check eligibility on va.gov"] }
          ],
          sources: [
            { name: "Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "VA: Personalized Career Planning and Guidance", url: "https://www.va.gov/careers-employment/education-and-career-counseling/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" },
            { name: "U.S. Department of Labor: Transition Assistance Program", url: "https://www.dol.gov/agencies/vets/programs/tap" }
          ],
          tryIt: "Final task: take your three bullets from Lesson 5. Check the job titles in the O*NET Military Crosswalk, ask the AI for one improvement, remove any private or sensitive details, and save the final bullets.",
          youCanNow: "check AI career answers against official sources and pick one skill and one program for your next step."
        }
      ],
      check: {
        title: "Knowledge Check 2: Translating your service into civilian work",
        questions: [
          { q: "What does the O*NET Military Crosswalk do?", options: ["Matches your military job code to civilian occupations", "Files your VA claim", "Posts your résumé to employers", "Pays for training"], answer: 0, why: "You enter your MOS, rating or AFSC and it shows matching civilian jobs." },
          { q: "Which résumé bullet is best for a civilian employer?", options: ["\"Did PMCS on MTVs\"", "\"Maintained 40 trucks with preventive checks; cut breakdowns by 30%\"", "\"Was in the motor pool\"", "\"Hooah\""], answer: 1, why: "It uses civilian words, numbers and a result." },
          { q: "The AI's draft adds an award you did not earn. What do you do?", options: ["Keep it, it sounds good", "Make the award bigger", "Remove it; every claim must be true", "Ask a friend if it is fine"], answer: 2, why: "Inflated claims can be checked and can cost you the job." },
          { q: "Where do you check pay and job outlook for a civilian job?", options: ["A social media post", "The AI's first answer", "A pop-up ad", "The Bureau of Labor Statistics Occupational Outlook Handbook"], answer: 3, why: "The Occupational Outlook Handbook is the official source for pay and outlook." },
          { q: "Which VA program offers free career counseling to eligible veterans?", options: ["Personalized Career Planning and Guidance", "The Military Crosswalk", "Google Gemini", "The Occupational Outlook Handbook"], answer: 0, why: "The VA lists Personalized Career Planning and Guidance as free career and education counseling." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI and the Future Workforce",
    questions: [
      { q: "AI is best described as:", options: ["Computer programs that do tasks that usually need a person", "A new branch of the military", "A type of phone", "A government job board"], answer: 0, why: "AI programs write, summarize, sort and spot patterns." },
      { q: "Which is a way AI is used in civilian logistics?", options: ["Signing contracts for the company", "Forecasting supplies", "Hiring managers", "Driving every truck"], answer: 1, why: "AI helps forecast what supplies will be needed." },
      { q: "When AI is used at work, who is responsible for the decision?", options: ["The AI", "The software company", "The person using it", "No one"], answer: 2, why: "AI is a tool; the person still makes the call." },
      { q: "Which web address opens a free AI assistant?", options: ["vetjobs.win", "freecash.gift", "army.xyz", "gemini.google.com"], answer: 3, why: "gemini.google.com is Google's official address for Gemini." },
      { q: "In a \"clear order\" prompt, the standard is:", options: ["What a good answer looks like: length, format, tone", "Your rank", "Your password", "The app store"], answer: 0, why: "The standard tells the assistant how the answer should look." },
      { q: "Which prompt will get the most useful answer?", options: ["\"jobs\"", "\"Task: civilian jobs using my skills. Conditions: 6 years as a vehicle mechanic. Standard: 5 titles, one line each.\"", "\"help me\"", "\"military stuff\""], answer: 1, why: "It gives the task, conditions and standard." },
      { q: "Which should you NEVER type into a public AI assistant?", options: ["\"Make it shorter\"", "\"Led a team of 8\"", "Your Social Security number", "\"Warehouse supervisor\""], answer: 2, why: "Social Security numbers are private and should never go into a public AI." },
      { q: "OPSEC in a civilian AI chat means:", options: ["Sharing mission details to get better answers", "Typing your unit's location", "Using your rank as a password", "Keeping classified, controlled and mission details out"], answer: 3, why: "The same discipline protects sensitive information outside the service." },
      { q: "A placeholder like \"[my number]\" lets you:", options: ["Get help without typing the real number", "Hide the AI from your employer", "Get paid faster", "Skip the check step"], answer: 0, why: "You fill the real number in yourself later, offline." },
      { q: "The O*NET Military Crosswalk is run by:", options: ["A private recruiter", "The U.S. Department of Labor", "Your old unit", "An AI company"], answer: 1, why: "O*NET OnLine is a Department of Labor site." },
      { q: "In the Military Crosswalk, a Navy veteran would search by:", options: ["Zip code", "Social Security number", "Rating code or job title", "Discharge date"], answer: 2, why: "You choose the branch and type your rating or job title." },
      { q: "Another Department of Labor-sponsored tool that matches military jobs to civilian careers is:", options: ["A lottery website", "A credit card app", "A video game", "CareerOneStop's Veterans Job Matcher"], answer: 3, why: "CareerOneStop's Veterans Job Matcher connects military occupations to civilian careers." },
      { q: "A strong civilian résumé bullet includes:", options: ["What you did, how big it was and the result", "Only military acronyms", "Your unit's mission", "Your home address"], answer: 0, why: "Civilian employers look for action, scale and results." },
      { q: "Which follow-up helps translate a draft for civilians?", options: ["\"Add more acronyms.\"", "\"Remove military slang.\"", "\"Add my DD-214 number.\"", "\"Make up an award.\""], answer: 1, why: "Removing slang makes your experience clear to civilian readers." },
      { q: "The first AI draft of your bullets is:", options: ["Final and perfect", "Something to send without reading", "A draft you edit and check", "Always wrong"], answer: 2, why: "You are the editor; the first answer is a draft." },
      { q: "When AI writes something that sounds true but is made up, it is called:", options: ["A briefing", "A crosswalk", "A placeholder", "A hallucination"], answer: 3, why: "That is the common name for made-up AI answers." },
      { q: "Where should you check a job's pay before trusting an AI's number?", options: ["The Bureau of Labor Statistics Occupational Outlook Handbook", "A text from a stranger", "The AI's second answer", "A meme"], answer: 0, why: "The Occupational Outlook Handbook gives official pay and outlook figures." },
      { q: "The VA's VET TEC 2.0 program helps eligible veterans with:", options: ["Home loans", "Non-degree high-tech training", "Medical care", "Car repair"], answer: 1, why: "VET TEC 2.0 pays for certain non-degree high-tech training programs." },
      { q: "Which Department of Labor program helps service members move to civilian work?", options: ["The O*NET Crosswalk only", "Google Gemini", "The Transition Assistance Program (TAP)", "A private bootcamp"], answer: 2, why: "TAP gives transitioning service members information, tools and training." },
      { q: "Before saving your final résumé bullets, you should:", options: ["Add your bank number", "Inflate your numbers", "Skip the check", "Check the job titles, make sure every claim is true and remove private details"], answer: 3, why: "That is the full check: accurate, true and safe." }
    ]
  }
};
