"use strict";

// Koach Learn course: shared -> "Resumes, LinkedIn and Job Interviews" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Categories: Athletes, Re-Entry, Youth, Veterans (military), Workforce Development, Undeserved Community. Mixed everyday examples.
// Shape: see scripts/koachlearn-courses/README.md and re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "resume-linkedin-interviews",
  category: "Athletes",
  name: "Resumes, LinkedIn and Job Interviews",
  skills: "Writing a one-page resume, Writing accomplishment bullets, Building a LinkedIn profile, Answering with the STAR method, Answering honestly about a gap or a record, Following up after an interview",
  outcome: "write a one-page resume with strong accomplishment bullets, set up a simple LinkedIn profile, and answer common interview questions out loud using the STAR method, including an honest, short answer about a gap or a record.",
  about: [
    "This course is for anyone getting ready for a job search: a student looking for a first job, an athlete moving into a career after sport, a veteran moving into civilian work, a person coming home from prison, or someone changing jobs after years in the same place.",
    "You will build three things you can use right away: a one-page resume, a LinkedIn profile, and a set of interview answers you have practiced out loud. You will also learn what to ask the employer and how to follow up.",
    "Each lesson takes about five minutes. Read the lesson, look over the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end. AI tools such as ChatGPT or Microsoft Copilot can help you with wording, but the facts and the voice must be yours."
  ],
  finalTask: "Pick one real job posting. Write a one-page resume for it with at least four accomplishment bullets, update your LinkedIn headline and About section to match, then record yourself answering three interview questions out loud using the STAR method, including one honest answer about a gap or a record if that applies to you. Finish by writing a short thank-you note you could send after the interview.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Anyone getting ready for a job search: students looking for a first job, athletes moving into a career after sport, veterans moving into civilian work, people coming home from prison and people changing jobs after years in one place.",
    startingPoint: "Have work, school, sport, service or life experience, and can use a phone or computer. Many have an old or no resume, no LinkedIn profile, and have not practiced interview answers out loud, especially about a gap or a record.",
    gap: "Employers decide quickly from a resume, a profile and a short interview. Learners need a clear one-page resume, a simple LinkedIn profile and practiced, honest answers, so their real skills are seen and they get interviews and offers.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer with a free document tool and a voice recorder",
      "Honesty: everything on a resume, profile or AI rewrite must be true",
      "Privacy: no home address or ID numbers on LinkedIn or in AI tools",
      "Record and fair chance rules differ by place; learners check their own local rules"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a real job posting", action: "lay out a one-page resume with contact details, a summary, matching skills and dated experience", standard: "on one page, matched to the posting" },
    { id: "O2", condition: "Given plain job duties", action: "write accomplishment bullets using an action verb, what you did and a result or number", standard: "with at least four bullets that are all true" },
    { id: "O3", condition: "Using your resume", action: "set up a LinkedIn profile with a photo, headline, About section and experience", standard: "with no home address or ID numbers and three connection requests sent" },
    { id: "O4", condition: "Given a behavior interview question", action: "answer with a STAR story: Situation, Task, Action and Result", standard: "in one to two minutes with most of the time on Action" },
    { id: "O5", condition: "When asked a hard question about a gap or a record", action: "give a short, honest answer out loud that says what you have done since", standard: "recorded, listened to and improved at least once" },
    { id: "O6", condition: "At the end of an interview", action: "ask good questions and write a thank-you note", standard: "with the note sent within 24 hours" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your resume and LinkedIn",
      lessons: [
        {
          objectives: ["O1"],
          title: "Building a one-page resume",
          minutes: 5,
          goal: "Lay out a clean, one-page resume with the right sections in the right order.",
          text: [
            "A resume is a one-page summary of what you can do for an employer. Most hiring managers spend less than a minute on the first look, so the page must be easy to scan: clear headings, plenty of white space, and one simple font such as Calibri or Arial in size 10 to 12.",
            "Use these sections, top to bottom: your name and contact details (phone, a professional email, city and state, and your LinkedIn link if you have one); a two-line summary; skills; work experience, with the newest job first; then education, training and certificates.",
            "Experience is more than paid jobs. Count volunteer work, military service, team captain or coaching roles, church or community work, and jobs or training you did while incarcerated, such as kitchen, maintenance or a trade program. Describe what you did, not where it was, if you prefer.",
            "Change your resume a little for each job. Read the posting, find the skills it asks for, and make sure the words you use match the skills you really have. Many employers use software that searches resumes for those words."
          ],
          steps: ["Open a free word processor such as Google Docs or Microsoft Word, or use a simple resume template.", "Add your name and contact details at the top. Use a professional email, such as one built from your first and last name.", "Write a two-line summary: who you are and what you offer.", "List 6 to 10 skills that match the job posting.", "List experience, newest first: job title, organization, city, dates and 3 to 4 bullets each.", "Add education, training and certificates. Keep it all on one page."],
          words: [["Resume", "a one-page summary of your skills, experience and training that you send when you apply for a job."], ["Job posting", "the advert that describes a job and what the employer is looking for."], ["Applicant tracking system", "software many employers use to collect resumes and search them for key words."]],
          slides: [
            { title: "A resume is your one-page pitch", bullets: ["Easy to scan in under a minute", "One simple font, size 10 to 12", "Clear headings and white space"] },
            { title: "Sections, top to bottom", bullets: ["Name and contact details", "Two-line summary and skills", "Experience, newest first", "Education, training and certificates"] },
            { title: "All experience counts", bullets: ["Volunteer work and military service", "Team captain, coaching, community roles", "Work and training programs while incarcerated"] },
            { title: "Match each posting", bullets: ["Find the skills the posting asks for", "Use the same words for skills you really have"] }
          ],
          tryIt: "Find one real job posting you would apply for. Start a new document and build the resume outline for it: your contact details, a two-line summary, six skills that match the posting, and your experience with dates. Leave the bullets for the next lesson.",
          youCanNow: "lay out a one-page resume with the right sections and match it to a job posting.",
          quickCheck: [
            { objective: "O1", q: "What is a resume summary?", options: ["Two lines at the top saying who you are and what you offer", "A list of every job you ever had", "Your references' phone numbers", "Your salary history"], answer: 0, why: "A short summary tells the employer quickly what you bring." },
            { objective: "O1", q: "A job posting asks for forklift and inventory skills, which you have. What would you do with your resume?", options: ["Leave it the same for every job", "Add your full life story", "Add those skills to your skills section and experience", "Make it three pages long"], answer: 2, why: "Matching your resume to the posting shows you fit the job." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing accomplishment bullets",
          minutes: 5,
          goal: "Turn plain duties into bullets that show what you achieved.",
          text: [
            "Weak bullets list duties: \"Responsible for cleaning.\" Strong bullets show results: \"Cleaned and restocked 12 rooms per shift and passed every weekly inspection.\" The employer can picture you doing the job well.",
            "A simple formula: action verb + what you did + a result or number. Start with a strong verb such as led, built, trained, fixed, served, organized, reduced or improved. Then add a number if you can: how many people, how much money, how often, or how much faster.",
            "Examples from different lives: \"Trained 4 new team members on the store's opening checklist.\" (retail) \"Led a squad of 9 soldiers through daily equipment checks with zero losses.\" (military) \"Captained a varsity team of 22 and organized weekly film study.\" (athlete) \"Prepared meals for 300 people a day in a facility kitchen, meeting every food safety check.\" (re-entry)",
            "Be truthful. Never make up numbers or job titles. If you are not sure of a number, use a fair estimate with the word \"about\", or describe the result in words."
          ],
          steps: ["Write down one task you did in a job, team or program.", "Start with an action verb.", "Add what you did and for whom.", "Add a number or a result.", "Read it aloud: does it sound like something you really did?"],
          words: [["Accomplishment bullet", "one short line on a resume that shows a result you achieved, not just a duty."], ["Action verb", "a doing word such as led, built, trained or fixed."]],
          slides: [
            { title: "Duties vs results", bullets: ["Weak: \"Responsible for cleaning\"", "Strong: \"Cleaned 12 rooms per shift and passed every inspection\""] },
            { title: "The bullet formula", bullets: ["Action verb", "+ what you did", "+ a number or a result"] },
            { title: "Examples from many lives", bullets: ["\"Trained 4 new team members on opening checks\"", "\"Captained a team of 22 and organized film study\"", "\"Prepared 300 meals a day, meeting every safety check\""] },
            { title: "Stay truthful", bullets: ["Never invent numbers or titles", "Use \"about\" for a fair estimate", "Describe the result in words if you have no number"] }
          ],
          tryIt: "Write four accomplishment bullets for your resume using the formula. You can ask an AI assistant: \"Make this resume bullet stronger without adding anything that is not true: [your bullet].\" Check every word it gives you is true before you keep it.",
          youCanNow: "write accomplishment bullets that start with an action verb and show a result.",
          quickCheck: [
            { objective: "O2", q: "Which is an action verb that starts a strong bullet?", options: ["Responsible for", "Trained", "Duties included", "Was in charge"], answer: 1, why: "Bullets start with an action verb that shows what you did." },
            { objective: "O2", q: "Your bullet says \"Did customer service.\" What would you write instead?", options: ["\"Did a lot of customer service\"", "\"Customer service, cash, phones\"", "\"Was the best at customer service\"", "\"Helped about 50 customers a day and handled returns calmly\""], answer: 3, why: "Strong bullets show what you did with a result or number." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Building a LinkedIn profile",
          minutes: 5,
          goal: "Set up a LinkedIn profile with a photo, headline, About section and experience.",
          text: [
            "LinkedIn is a free professional networking website and app. Employers and recruiters search it for people to hire, and many jobs are posted there. Your profile works like an online resume that people can find.",
            "The most important parts: a clear photo of your face with a plain background; a headline (the line under your name) that says what you do or want to do, such as \"Forklift operator | OSHA 10 | Reliable on early shifts\"; an About section of three to five sentences in your own voice; and your experience, using the bullets from your resume.",
            "Then build your network. Connect with people you know: former coaches, supervisors, teachers, case managers, people you served with, classmates. Send a short note when you connect. Follow companies you want to work for so you see their job posts.",
            "Keep it professional and safe. Do not post your home address, date of birth or ID numbers. Your profile does not have to mention a record or a gap; it shows your skills."
          ],
          steps: ["Go to linkedin.com or install the official LinkedIn app, and create a free account with a professional email.", "Add a clear, friendly photo.", "Write a headline that says what you do or the job you want.", "Write an About section of three to five sentences.", "Add your experience and skills from your resume.", "Connect with five people you know, with a short note."],
          words: [["LinkedIn", "a free professional networking website and app where people show their work history and employers post jobs."], ["Headline", "the short line under your name on LinkedIn that says what you do."], ["Network", "the people you know who can share job leads or speak for your work."]],
          slides: [
            { title: "Why LinkedIn", bullets: ["Recruiters search it for people to hire", "Many jobs are posted there", "Your online resume that people can find"] },
            { title: "The key parts", bullets: ["Clear photo with a plain background", "Headline: what you do or want to do", "About: 3 to 5 sentences in your voice", "Experience bullets from your resume"] },
            { title: "Build your network", bullets: ["Coaches, supervisors, teachers, case managers", "Send a short note with each request", "Follow companies you want to work for"] },
            { title: "Stay safe", bullets: ["No home address, birth date or ID numbers", "Show your skills; you choose what to share"] }
          ],
          tryIt: "Create or update your LinkedIn profile. Write your headline and About section, add one job with your new bullets, and send connection requests with a short note to three people you know.",
          youCanNow: "set up a LinkedIn profile with a photo, headline, About section and experience, and start building your network.",
          quickCheck: [
            { objective: "O3", q: "What does the About section on LinkedIn do?", options: ["Lists your home address", "Tells your work story and what you are looking for in a few short lines", "Shows your passwords", "Lists your social media friends"], answer: 1, why: "The About section is a short story of your skills and goals." },
            { objective: "O3", q: "You want to connect with a former supervisor on LinkedIn. What would you do?", options: ["Send a request with a short, friendly note", "Send a request with no note and your phone number", "Message them asking for a job right away", "Wait for them to find you"], answer: 0, why: "A short note reminds them who you are and starts a good connection." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your resume and LinkedIn",
        questions: [
          { objective: "O1", q: "How long should a resume for most entry-level and mid-level jobs be?", options: ["Three pages", "One page", "Half a page", "As long as possible"], answer: 1, why: "One page is easy to scan and is the standard for most jobs." },
          { objective: "O2", q: "Which bullet is the strongest?", options: ["\"Responsible for the stockroom\"", "\"Did various tasks\"", "\"Hard worker\"", "\"Organized the stockroom and cut search time for parts by about half\""], answer: 3, why: "It starts with an action verb and shows a result." },
          { objective: "O1", q: "You ran the kitchen line in a facility program while incarcerated. Should it go on your resume?", options: ["Yes, as experience, describing the skills you used", "No, it never counts", "Only if you were paid a lot", "Only on LinkedIn"], answer: 0, why: "Work and training programs are real experience; describe what you did." },
          { objective: "O3", q: "What is a good LinkedIn headline?", options: ["\"Looking\"", "Your home address", "\"Certified welder | Safety-first | Open to apprenticeships\"", "Your date of birth"], answer: 2, why: "A headline says what you do or want to do and shows your strengths." },
          { objective: "O2", q: "An AI tool rewrote your bullet and added a manager title you never had. What do you do?", options: ["Keep it, it sounds better", "Remove it, because everything on a resume must be true", "Add another title", "Put it only on LinkedIn"], answer: 1, why: "A resume must be truthful; you check every word an AI writes." }
        ]
      }
    },
    {
      name: "Chapter 2: Interviews and follow-up",
      lessons: [
        {
          objectives: ["O4"],
          title: "Answering with the STAR method",
          minutes: 5,
          goal: "Answer a behavior interview question with a short STAR story.",
          text: [
            "Many interview questions start with \"Tell me about a time when...\". The employer wants a real example of how you act. The STAR method keeps your answer clear and short.",
            "S is the Situation: where you were and what was going on. T is the Task: what you had to do. A is the Action: what YOU did, step by step. R is the Result: how it ended, with a number if you can, and what you learned.",
            "Example: \"Tell me about a time you handled a problem.\" S: \"At my warehouse job, a delivery came in two hours late on a busy day.\" T: \"I had to get it shelved before the store opened.\" A: \"I asked my lead if I could split the team, set up two unloading lines, and checked the labels myself.\" R: \"We finished 15 minutes before opening and nothing was missing.\"",
            "Prepare five stories before any interview: a time you solved a problem, worked on a team, handled a mistake, dealt with a hard person, and learned something fast. Sports, the military, school, family and programs all give good stories."
          ],
          steps: ["Read the question and pick a real story.", "Situation: one sentence on where and when.", "Task: one sentence on what you had to do.", "Action: two or three sentences on what you did.", "Result: one sentence on how it ended and what you learned.", "Keep the whole answer to about one to two minutes."],
          words: [["Behavior question", "an interview question that asks about a time you did something, to see how you act at work."], ["STAR method", "a way to answer: Situation, Task, Action, Result."]],
          slides: [
            { title: "\"Tell me about a time when...\"", bullets: ["The employer wants a real example", "STAR keeps it clear and short"] },
            { title: "STAR", bullets: ["Situation: where and when", "Task: what you had to do", "Action: what YOU did", "Result: how it ended and what you learned"] },
            { title: "Prepare five stories", bullets: ["Solved a problem; worked on a team", "Handled a mistake; dealt with a hard person", "Learned something fast"] },
            { title: "Keep it tight", bullets: ["About one to two minutes", "Use \"I\" for your actions", "End with a result"] }
          ],
          tryIt: "Write one STAR story for \"Tell me about a time you worked on a team.\" Use one sentence each for Situation and Task, two or three for Action, and one for Result.",
          youCanNow: "answer a \"tell me about a time\" question with a clear STAR story.",
          quickCheck: [
            { objective: "O4", q: "What does the S in STAR stand for?", options: ["Skill", "Strength", "Situation", "Summary"], answer: 2, why: "STAR is Situation, Task, Action and Result." },
            { objective: "O4", q: "You are asked, \"Tell me about a time you solved a problem.\" What would you do?", options: ["Say \"I'm good at solving problems\" and stop", "Talk for ten minutes about many problems", "Say you have never had a problem", "Tell one short story: situation, task, what you did and the result"], answer: 3, why: "One short STAR story proves your skill with a real example." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Practicing out loud and answering honestly about a gap or a record",
          minutes: 6,
          goal: "Practice answers out loud, including a short, honest answer about a gap or a conviction record.",
          text: [
            "Answers you have only read in your head come out messy. Say them out loud, record yourself on a phone, and listen back. Practice common questions: \"Tell me about yourself\", \"Why do you want this job?\", \"What are your strengths?\", and \"Tell me about a time when...\". You can ask an AI assistant to play the interviewer and ask you one question at a time.",
            "A gap in work history is common: school, sport, military service, caring for family, health, or incarceration. Keep the answer short and move forward: what the gap was, what you did or learned, and why you are ready now. Example: \"I spent two years caring for my mother. I kept my skills up with an online course, and I'm ready to work full time.\"",
            "If you have a conviction record, do not lie on an application or in an interview. When it is asked about, use a short, honest answer: own it, say what you have done since, and turn to the job. Example: \"I made a serious mistake in 2019 and served my time. Since then I finished a forklift certificate and worked 18 months with no missed shifts. I'm ready to bring that reliability here.\" Do not give long details unless asked.",
            "Know your rights. Under EEOC guidance, an arrest alone is not proof of a crime, and employers should look at the offense, how long ago it was and the job. Many states and cities have \"ban the box\" or fair chance laws that delay questions about records. Some records can be sealed or expunged; check with a legal aid office or your reentry program. Check the official pages below."
          ],
          steps: ["Write your answer to \"Tell me about yourself\" in four sentences: now, past, strengths, why this job.", "Record yourself on a phone answering three questions and listen back.", "Write a three-part answer for any gap: what it was, what you did, why you are ready.", "If you have a record: own it, show what you have done since, turn to the job.", "Practice the hard answer out loud until it sounds calm and short."],
          words: [["Employment gap", "a time when you were not working, shown by missing dates on a resume."], ["Ban the box", "laws in many states and cities that stop employers asking about records on the first job application."], ["Expungement", "a court process that can clear or seal some records; rules differ by state."]],
          slides: [
            { title: "Practice out loud", bullets: ["Record yourself on your phone", "Listen back and tighten the answer", "Ask an AI assistant to play the interviewer"] },
            { title: "Answering about a gap", bullets: ["What the gap was", "What you did or learned", "Why you are ready now"] },
            { title: "Answering about a record", bullets: ["Never lie on an application", "Own it in one sentence", "Show what you have done since", "Turn to the job"] },
            { title: "Know your rights", bullets: ["An arrest alone is not proof of a crime", "Many places have ban-the-box or fair chance laws", "Ask legal aid about sealing or expungement"] }
          ],
          sources: [
            { name: "EEOC: Arrest and conviction records, what job seekers and workers should know", url: "https://www.eeoc.gov/arrestandconviction" }
          ],
          tryIt: "Record yourself answering \"Tell me about yourself\" and one hard question (a gap, a record, or \"Why did you leave your last job?\"). Listen back. Cut anything that is not needed, then record it again.",
          youCanNow: "practice answers out loud and give a short, honest, forward-looking answer about a gap or a record.",
          quickCheck: [
            { objective: "O5", q: "Why record yourself answering interview questions?", options: ["So you can hear what to cut and improve", "To post it online", "To send it to the employer", "Because interviews are always recorded"], answer: 0, why: "Listening back shows you what to shorten and fix." },
            { objective: "O5", q: "An interviewer asks about a two-year gap when you were incarcerated. What would you say?", options: ["Make up a different job", "Refuse to answer and leave", "Give a long story about the case", "Give a short, honest answer and say what you have done since"], answer: 3, why: "Short and honest, then focus on what you have done since." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Asking questions and following up",
          minutes: 4,
          goal: "Ask good questions at the end of an interview and send a thank-you note.",
          text: [
            "Near the end, most interviewers ask, \"Do you have any questions for us?\" Always have two or three ready. It shows interest. Good questions: \"What does a great first month look like in this job?\", \"What do the best people on this team do differently?\", \"What are the next steps, and when should I expect to hear back?\"",
            "Save questions about pay and benefits for when they bring it up or make an offer, unless the posting did not list pay and you need to know. Ask politely.",
            "Within 24 hours, send a short thank-you note by email (or a card for a small local business). Thank them for their time, mention one thing you talked about, and say again why you want the job. Keep it to four or five sentences.",
            "If you do not hear back by the date they gave, send one polite follow-up a few days later. Keep applying to other jobs in the meantime."
          ],
          steps: ["Prepare two or three questions before the interview.", "Ask about the next steps and the timeline.", "Write down the interviewer's name and email.", "Send a short thank-you note within 24 hours.", "Follow up once if you pass the date they gave."],
          words: [["Follow-up", "a short, polite message after an interview to thank the employer or ask about next steps."]],
          slides: [
            { title: "Always have questions", bullets: ["\"What does a great first month look like?\"", "\"What do the best people here do differently?\"", "\"What are the next steps?\""] },
            { title: "Pay and benefits", bullets: ["Usually wait until they raise it or offer", "Ask politely if pay was not listed"] },
            { title: "Thank-you note", bullets: ["Send within 24 hours", "Mention one thing you talked about", "Four or five sentences"] },
            { title: "No answer yet?", bullets: ["Follow up once after their date passes", "Keep applying elsewhere"] }
          ],
          tryIt: "Final task: write a short thank-you note for the interview you practiced for. Then put it all together: your one-page resume, your updated LinkedIn headline and About section, and three recorded STAR answers.",
          youCanNow: "ask good questions at the end of an interview and follow up with a short thank-you note.",
          quickCheck: [
            { objective: "O6", q: "What does a good thank-you note include?", options: ["Thanks, one thing you discussed and why you want the job", "Only the word thanks", "A request for higher pay", "Your full resume again"], answer: 0, why: "Mentioning something you discussed shows real interest." },
            { objective: "O6", q: "At the end of the interview they ask if you have questions. What would you ask?", options: ["\"How soon can I take vacation?\"", "\"No, I'm good.\"", "\"What are the next steps, and when should I expect to hear back?\"", "\"Did I get the job?\""], answer: 2, why: "Asking about next steps shows interest and tells you when to follow up." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Interviews and follow-up",
        questions: [
          { objective: "O4", q: "What does the A in STAR stand for?", options: ["Answer", "Attitude", "Action", "Award"], answer: 2, why: "STAR is Situation, Task, Action, Result." },
          { objective: "O5", q: "What is the best way to practice interview answers?", options: ["Read them silently once", "Memorise a script word for word and never say it aloud", "Skip practice so you sound natural", "Say them out loud and record yourself"], answer: 3, why: "Speaking and listening back shows you what to fix." },
          { objective: "O5", q: "You were out of work for a year caring for a parent. Which answer is best?", options: ["\"I cared for my mother for a year, kept my skills up with a course, and I'm ready to work full time.\"", "\"I'd rather not say.\"", "Make up a job to fill the gap", "A ten-minute story about family problems"], answer: 0, why: "It is short, honest and moves forward to why you are ready." },
          { objective: "O5", q: "An interviewer asks about your conviction record. What should you do?", options: ["Deny it", "Give a short, honest answer and say what you have done since", "Walk out", "Tell every detail for ten minutes"], answer: 1, why: "Honesty plus what you have done since builds trust; lying can cost you the job later." },
          { objective: "O6", q: "When should you send a thank-you note?", options: ["Within 24 hours", "After a month", "Only if you get the job", "Never"], answer: 0, why: "A quick note shows interest while you are still fresh in their mind." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Resumes, LinkedIn and Job Interviews",
    questions: [
      { objective: "O1", q: "Which belongs at the very top of a resume?", options: ["Your hobbies", "Your references", "Your name and contact details", "Your date of birth"], answer: 2, why: "Name and contact details come first so the employer can reach you." },
      { objective: "O1", q: "Why change your resume a little for each job?", options: ["To match the skills the posting asks for", "Because the law requires it", "To make it longer", "To add jobs you did not have"], answer: 0, why: "Matching real skills to the posting helps people and software find you." },
      { objective: "O1", q: "Which email address is best on a resume?", options: ["partyking99@example.com", "jordan.smith@example.com", "No email at all", "Your old school email you cannot open"], answer: 1, why: "A simple, professional address you check often is best." },
      { objective: "O2", q: "A veteran led a team of 9 on daily equipment checks. Which bullet is strongest?", options: ["\"Was in the army\"", "\"Did checks\"", "\"Various duties\"", "\"Led 9 soldiers through daily equipment checks with zero losses\""], answer: 3, why: "Action verb, what was done, and a result." },
      { objective: "O2", q: "What is the bullet formula?", options: ["Job title + salary", "Action verb + what you did + a result or number", "Adjective + adjective + adjective", "Date + place"], answer: 1, why: "That formula turns duties into accomplishments." },
      { objective: "O2", q: "You are not sure of an exact number for a bullet. What do you do?", options: ["Use a fair estimate with \"about\" or describe the result in words", "Make up a big number", "Leave the whole job off", "Copy a number from a friend's resume"], answer: 0, why: "Stay truthful; estimates must be fair and labeled." },
      { objective: "O3", q: "What is a LinkedIn headline?", options: ["Your home address", "A news story", "The short line under your name saying what you do", "Your password"], answer: 2, why: "The headline tells recruiters what you do or want to do." },
      { objective: "O3", q: "Which photo is best for LinkedIn?", options: ["A group photo from a party", "A photo of your car", "No face, just a logo", "A clear photo of your face with a plain background"], answer: 3, why: "A clear, friendly face photo looks professional." },
      { objective: "O3", q: "Which should you NOT put on your LinkedIn profile?", options: ["Your skills", "Your home address and ID numbers", "Your work experience", "Your certificates"], answer: 1, why: "Private details can be misused; keep them off." },
      { objective: "O3", q: "Who is a good person to connect with on LinkedIn first?", options: ["A former coach or supervisor who knows your work", "A random celebrity", "Nobody", "Only people you have never met"], answer: 0, why: "People who know your work can share leads and speak for you." },
      { objective: "O4", q: "\"Tell me about a time you made a mistake.\" What kind of question is this?", options: ["A trick question to skip", "A pay question", "A behavior question, good for a STAR answer", "A yes or no question"], answer: 2, why: "It asks for a real example, which STAR answers well." },
      { objective: "O4", q: "In a STAR answer, which part should take the most time?", options: ["Situation", "Task", "Result", "Action: what you did"], answer: 3, why: "The employer most wants to hear what you did." },
      { objective: "O4", q: "About how long should a STAR answer be?", options: ["One to two minutes", "Ten seconds", "Ten minutes", "Half an hour"], answer: 0, why: "Short and clear keeps the interviewer with you." },
      { objective: "O5", q: "How can an AI assistant help you practice?", options: ["By going to the interview for you", "By playing the interviewer and asking one question at a time", "By inventing your work history", "By storing your ID number"], answer: 1, why: "AI can run practice questions; the answers must still be yours." },
      { objective: "O5", q: "Which is a strong, honest answer about a record?", options: ["\"I don't have one\" when you do", "\"That's none of your business\"", "\"I made a mistake in 2019 and served my time. Since then I earned a certificate and kept a perfect attendance record.\"", "A long story blaming others"], answer: 2, why: "Own it, show what you have done since, and turn to the job." },
      { objective: "O5", q: "According to EEOC guidance, an arrest by itself:", options: ["Is proof of a crime", "Is not proof of a crime", "Must be listed on every resume", "Can never be asked about"], answer: 1, why: "An arrest alone does not prove someone committed a crime." },
      { objective: "O5", q: "What are \"ban the box\" or fair chance laws?", options: ["Rules about shipping boxes", "Laws that stop all background checks forever", "Laws that ban resumes", "Laws in many places that delay questions about records on the first application"], answer: 3, why: "They give applicants a chance to be judged on skills first; rules differ by place." },
      { objective: "O6", q: "At the end of the interview they ask, \"Any questions for us?\" You say:", options: ["\"What are the next steps, and when should I expect to hear back?\"", "\"No.\"", "\"How soon can I take a vacation?\"", "\"What does this company do?\""], answer: 0, why: "A prepared, useful question shows interest." },
      { objective: "O6", q: "A good thank-you note:", options: ["Is three pages long", "Asks again for a higher wage", "Thanks them, mentions one thing you discussed, and says why you want the job", "Is sent a month later"], answer: 2, why: "Short, specific and quick works best." },
      { objective: "O6", q: "The employer said they would call by Friday. It is now Wednesday of the next week. You:", options: ["Call ten times a day", "Send one polite follow-up and keep applying elsewhere", "Give up on all job searching", "Show up at their office uninvited every day"], answer: 1, why: "One polite follow-up is professional; keep your search going." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      6,
      8,
      11,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "One-page resume",
        objective: "O1",
        notYet: "Over one page, missing sections, or not matched to the posting.",
        meets: "One page with contact details, summary, matching skills and dated experience.",
        exceeds: "Skills and summary use words from the job posting."
      },
      {
        name: "Accomplishment bullets",
        objective: "O2",
        notYet: "Bullets list duties only, or anything is not true.",
        meets: "At least four true bullets with an action verb and a result or number.",
        exceeds: "Every bullet shows a clear result."
      },
      {
        name: "LinkedIn profile",
        objective: "O3",
        notYet: "No headline or About section, or private details shown.",
        meets: "Headline and About section match the resume, with no private details.",
        exceeds: "Photo added and three connection requests sent with notes."
      },
      {
        name: "STAR answers",
        objective: "O4",
        notYet: "Answers are vague or missing a STAR part.",
        meets: "Three recorded STAR answers with all four parts, each one to two minutes.",
        exceeds: "Answers end with a clear result, and most time is on Action."
      },
      {
        name: "Honest hard answer",
        objective: "O5",
        notYet: "No answer prepared, or it is long, defensive or untrue.",
        meets: "A short, honest answer about a gap or record that turns to what they have done since.",
        exceeds: "Recorded, improved and delivered calmly."
      },
      {
        name: "Thank-you note",
        objective: "O6",
        notYet: "No note, or a generic one-word note.",
        meets: "A short note with thanks, one thing discussed and why they want the job.",
        exceeds: "Ready to send within 24 hours and has a polite follow-up plan."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who apply for at least one job with the new resume within 30 days (follow-up survey)",
      "Learners who get an interview within 60 days",
      "Learners who get a job offer within 90 days",
      "Learners who start another Koach Learn career course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free document tool such as Google Docs or Microsoft Word",
      "A free LinkedIn account",
      "A voice or video recorder on a phone",
      "One real job posting",
      "About 60 minutes for lessons and checks, plus time to finish the resume and recordings"
    ],
    facilitatorNotes: [
      "Run mock interviews in pairs so every learner answers out loud at least three times.",
      "Help learners turn sport, military, caregiving and work done while incarcerated into honest resume experience.",
      "Check that any AI rewrites stay true; remove anything the learner did not do.",
      "Remind learners not to put home addresses or ID numbers on LinkedIn or into AI tools.",
      "Score the final package with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
