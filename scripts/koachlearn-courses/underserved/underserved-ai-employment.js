"use strict";

// Koach Learn course: Undeserved Community -> "AI for Employment and Workforce Readiness". Skill-building course (shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js).
// Audience: adults in low-income and underserved communities, some new to technology, looking for work or a better job. Free tools; American Job Centers.

module.exports = {
  id: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "AI for Employment and Workforce Readiness",
  skills: "Finding free job help, Naming your skills, Writing a one-page résumé with AI, Matching a résumé to a job posting, Practicing interview answers, Spotting job scams",
  outcome: "use a free AI assistant to write a one-page résumé matched to a real job posting, practice answers to common interview questions, and spot the signs of a job scam.",
  about: [
    "Looking for work is hard, especially if you have gaps in your work history, have mostly done cash jobs, or have been caring for family. You have more skills than you think, and free tools can help you show them.",
    "You will find free job help near you, turn your experience (paid and unpaid) into a skills list, write a one-page résumé with AI, match it to a real job posting, practice for the interview, and learn to spot job scams.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Find a real job posting you could apply for. Use an AI assistant to write a one-page résumé matched to that posting, with no private numbers in it. Then have the AI ask you three common interview questions, answer each one out loud, and ask for one tip to improve each answer.",
  chapters: [
    {
      name: "Chapter 1: Getting ready",
      lessons: [
        {
          title: "Finding free job help near you",
          minutes: 4,
          goal: "Find your nearest American Job Center and one other free place to get job help.",
          text: [
            "American Job Centers are public job centers across the country. They help job seekers with job searches, referrals and placement, and many also offer computers, workshops and training information. Some services have rules about who qualifies and can vary by state.",
            "You can find your nearest center with the American Job Center Finder on CareerOneStop, a U.S. Department of Labor website, or by calling 1-877-US-2JOBS.",
            "Public libraries also help with job searches, résumé printing and free computer time. Real job help never asks you to pay to get a job."
          ],
          steps: ["Open the American Job Center Finder on careeronestop.org, or call 1-877-US-2JOBS.", "Type your ZIP code or city.", "Write down the nearest center's address, phone and hours.", "Ask your library what job-search help it offers."],
          words: [["American Job Center", "a public center that helps people find work and training."], ["Referral", "when a center sends you to a job or a program that may fit you."]],
          sources: [
            { name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "American Job Centers", bullets: ["Public job centers across the country", "Job search, referrals and placement", "Some services vary by state"] },
            { title: "Find yours", bullets: ["American Job Center Finder on careeronestop.org", "Or call 1-877-US-2JOBS"] },
            { title: "More free help", bullets: ["Public libraries: computers, printing, job help", "Real job help never charges you to get a job"] }
          ],
          tryIt: "Find the American Job Center nearest you and write down its address, phone number and hours.",
          youCanNow: "find free, official job help near you."
        },
        {
          title: "Naming your skills, paid and unpaid",
          minutes: 5,
          goal: "Turn your work and life experience into a list of job skills.",
          text: [
            "Many people say \"I don't have skills\" when they really do. Caring for children or an older parent, running a household budget, cooking for a church event, fixing cars for neighbors or doing cash jobs all build real skills.",
            "Tell an AI assistant what you have done, in plain words, and ask it to turn that into job skills. For example: \"For five years I cared for my grandmother, managed her medicines and appointments, and kept the household budget. What job skills does this show?\"",
            "Pick the skills that are true and that you can give an example of. Do not keep anything you cannot back up in an interview."
          ],
          steps: ["Write down everything you have done: paid jobs, cash jobs, caregiving, volunteering, school.", "Ask the AI to list the job skills each one shows.", "Keep only skills you can give a real example of.", "Save the list for your résumé."],
          words: [["Skill", "something you know how to do well, like scheduling, customer service or using a cash register."], ["Transferable skill", "a skill from one part of life that helps in a different job."]],
          slides: [
            { title: "You have more skills than you think", bullets: ["Caregiving, budgeting, cooking for events", "Cash jobs, volunteering, fixing things"] },
            { title: "Ask AI to name them", bullets: ["Describe what you did in plain words", "\"What job skills does this show?\""] },
            { title: "Keep it true", bullets: ["Keep skills you can give an example of", "Drop anything you cannot back up"] }
          ],
          tryIt: "Write down three things you have done (paid or unpaid). Ask an AI assistant to name the job skills each one shows. Keep the ones you can give a real example for.",
          youCanNow: "turn your paid and unpaid experience into an honest list of job skills."
        },
        {
          title: "Writing a one-page résumé with AI",
          minutes: 6,
          goal: "Write a simple one-page résumé with an AI assistant and a free document tool.",
          text: [
            "A résumé is a one-page summary of your skills and experience. A simple, clean résumé is better than a fancy one.",
            "Give the AI your skills list, your jobs or activities with dates, and any training or school. Ask for a one-page résumé with these parts: contact line, short summary, skills, experience, and education or training.",
            "Do not put your Social Security number, birth date or full ID numbers on a résumé or in the AI. Type your phone and email into the final document yourself. Copy the result into a free tool like Google Docs or Microsoft Word on the web, and save it as a PDF to send."
          ],
          steps: ["Give the AI your skills, jobs or activities with dates, and training.", "Ask for a one-page résumé: contact line, summary, skills, experience, education.", "Copy it into Google Docs or Word on the web.", "Add your phone and email yourself; leave out Social Security number and birth date.", "Read it out loud, fix mistakes, and save it as a PDF."],
          words: [["Résumé", "a one-page summary of your skills, work and training for employers."], ["PDF", "a file type that keeps your document looking the same on any device."]],
          slides: [
            { title: "Simple and clean wins", bullets: ["One page", "Easy to read"] },
            { title: "Five parts", bullets: ["Contact line and short summary", "Skills", "Experience", "Education or training"] },
            { title: "Keep it safe", bullets: ["No Social Security number or birth date", "Add phone and email yourself", "Save as a PDF to send"] }
          ],
          tryIt: "Use your skills list from Lesson 2 to ask an AI assistant for a one-page résumé. Copy it into Google Docs or Word on the web and read it out loud.",
          youCanNow: "write a simple one-page résumé with AI and a free document tool."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready",
        questions: [
          { q: "How can you find your nearest American Job Center?", options: ["A stranger's text message", "The American Job Center Finder on CareerOneStop, or 1-877-US-2JOBS", "A pop-up ad", "A paid website"], answer: 1, why: "These are the official ways to find a center." },
          { q: "A website says you must pay a fee to get a job. This is:", options: ["Normal", "Required by law", "A warning sign; real job help does not charge you to get a job", "A good deal"], answer: 2, why: "Honest employers and job centers do not charge you to get a job." },
          { q: "You cared for your grandmother for five years. On a résumé this shows:", options: ["Real skills like scheduling and managing medicines", "Nothing useful", "A gap you must hide", "Only cooking"], answer: 0, why: "Caregiving builds real, transferable skills." },
          { q: "The AI lists a skill you do not really have. You should:", options: ["Keep it", "Make up an example", "Add two more", "Remove it"], answer: 3, why: "Keep only what you can back up in an interview." },
          { q: "Which should NOT go on your résumé or into the AI?", options: ["Your skills", "Your Social Security number", "Your job titles", "Your training"], answer: 1, why: "Social Security numbers and birth dates do not belong on a résumé." }
        ]
      }
    },
    {
      name: "Chapter 2: Applying and interviewing",
      lessons: [
        {
          title: "Matching your résumé to a job posting",
          minutes: 5,
          goal: "Change your résumé so it matches what a real job posting asks for.",
          text: [
            "Employers want to see that you fit their job. A job posting lists what they need. When your résumé uses the same skills and words, it is easier to see the match.",
            "Paste the job posting and your résumé into the AI and ask: \"Which skills in this posting do I already show? Suggest changes to my résumé so it matches better, using only true information.\"",
            "Keep it honest. Matching means showing your real skills in the employer's words, not adding things you have not done."
          ],
          steps: ["Find a real job posting you could apply for.", "Paste the posting and your résumé into the AI (no private numbers).", "Ask which skills match and what to change, using only true information.", "Update your résumé and save a new copy named for that job."],
          words: [["Job posting", "a notice from an employer describing a job and what they need."], ["Keywords", "important words from the job posting, like \"customer service\" or \"forklift\"."]],
          slides: [
            { title: "Show the match", bullets: ["The posting lists what they need", "Use the same skills and words"] },
            { title: "Ask the AI", bullets: ["Paste the posting and your résumé", "\"Which skills do I already show?\"", "\"Suggest true changes so it matches better.\""] },
            { title: "Stay honest", bullets: ["Your real skills, their words", "Save a copy named for each job"] }
          ],
          tryIt: "Find one real job posting near you. Ask an AI assistant to compare it to your résumé and suggest honest changes. Save a new copy for that job.",
          youCanNow: "match your résumé to a real job posting honestly."
        },
        {
          title: "Practicing for the interview",
          minutes: 5,
          goal: "Practice answering common interview questions with an AI assistant.",
          text: [
            "Interviews feel easier with practice. An AI assistant can play the interviewer. Ask: \"Act as an interviewer for this job. Ask me one common question at a time and wait for my answer. After each answer, give me one tip.\"",
            "Common questions include: \"Tell me about yourself.\" \"Why do you want this job?\" \"Tell me about a time you solved a problem.\" Use a short real story: what happened, what you did, and how it turned out.",
            "Say your answers out loud, not just in your head. If you have a gap in work history, practice one honest, short sentence about it and then talk about what you are ready to do now."
          ],
          steps: ["Ask the AI to act as the interviewer for your job posting.", "Answer one question at a time, out loud, then type it in.", "Use a short real story: what happened, what you did, the result.", "Ask for one tip after each answer and try again."],
          words: [["Interview", "a meeting where an employer asks you questions to decide whether to hire you."], ["Work gap", "a time when you were not in a paid job."]],
          slides: [
            { title: "AI can play the interviewer", bullets: ["One question at a time", "One tip after each answer"] },
            { title: "Common questions", bullets: ["\"Tell me about yourself.\"", "\"Why do you want this job?\"", "\"Tell me about a time you solved a problem.\""] },
            { title: "Answer with a short story", bullets: ["What happened", "What you did", "How it turned out"] },
            { title: "Practice out loud", bullets: ["Say it, do not just think it", "Work gap: one honest sentence, then move on"] }
          ],
          tryIt: "Ask an AI assistant to interview you for the job from Lesson 4. Answer two questions out loud, type your answers, and ask for one tip each.",
          youCanNow: "practice interview answers with AI and improve them with feedback."
        },
        {
          title: "Spotting job scams",
          minutes: 5,
          goal: "Recognize the warning signs of a job scam and know what to do.",
          text: [
            "Job scams target people who need work. The Federal Trade Commission (FTC) warns that honest employers will never ask you to pay to get a job.",
            "Other warning signs: they send you a check and ask you to send part of the money back or buy gift cards; they promise big pay for little work; the job is receiving and reshipping packages; or the offer comes out of nowhere.",
            "If an offer looks too good, stop. Look up the company yourself, call its real phone number, or ask at your American Job Center. Never give your bank or Social Security number before you have confirmed a real job."
          ],
          steps: ["Never pay to get a job.", "Never deposit a check and send money back.", "Look up the company yourself and call its real number.", "Ask your American Job Center if you are unsure."],
          words: [["Fake check scam", "a scammer sends a check, asks you to send part back, then the check bounces and you owe the bank."], ["FTC", "the Federal Trade Commission, the U.S. agency that protects consumers from scams."]],
          sources: [{ name: "FTC: Job Scams", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Never pay to get a job", bullets: ["The FTC: honest employers never ask you to pay", "No fees for kits, training or guarantees"] },
            { title: "Other warning signs", bullets: ["Send money back from a check", "Big pay for little work", "Reshipping packages", "Offers out of nowhere"] },
            { title: "Protect yourself", bullets: ["Look up the company yourself", "Call its real number", "Ask your American Job Center"] }
          ],
          tryIt: "Final task: with your résumé matched to a real posting, have the AI ask you three interview questions, answer each out loud, and ask for one tip to improve each answer. Check the posting for any scam warning signs.",
          youCanNow: "apply for a real job with a matched résumé, practice the interview, and spot job scams."
        }
      ],
      check: {
        title: "Knowledge Check 2: Applying and interviewing",
        questions: [
          { q: "Why match your résumé to a job posting?", options: ["So the employer can see you fit the job", "To make it longer", "To add skills you do not have", "It is not useful"], answer: 0, why: "Matching shows your real fit in the employer's words." },
          { q: "When matching, you should:", options: ["Add jobs you never had", "Copy the posting word for word", "Use your real skills in the employer's words", "Remove all your experience"], answer: 2, why: "Honest matching is the goal." },
          { q: "What is a good way to answer \"Tell me about a time you solved a problem\"?", options: ["\"I never have problems.\"", "A long list of jobs", "\"I don't know.\"", "A short real story: what happened, what you did, how it turned out"], answer: 3, why: "A short story shows your skill clearly." },
          { q: "A \"company\" sends you a check and asks you to buy gift cards with part of it. This is:", options: ["A normal first-day task", "A fake check scam", "A bonus", "Training"], answer: 1, why: "The FTC lists this as a common job scam." },
          { q: "You are unsure if a job offer is real. What do you do?", options: ["Look up the company yourself and call its real number", "Send your bank number to check", "Pay the fee to find out", "Accept right away"], answer: 0, why: "Checking on your own protects you." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Employment and Workforce Readiness",
    questions: [
      { q: "American Job Centers help with:", options: ["Car loans", "Job searches, referrals and placement", "Tax filing only", "Buying homes"], answer: 1, why: "They are public job centers." },
      { q: "CareerOneStop is run with:", options: ["A video game company", "A bank", "The U.S. Department of Labor", "A social media site"], answer: 2, why: "It is a Department of Labor website." },
      { q: "Which phone number helps you find job centers?", options: ["1-877-US-2JOBS", "911", "A number from a pop-up", "Your bank's number"], answer: 0, why: "1-877-US-2JOBS is the Labor Department's job help line." },
      { q: "Which experience can count as job skills?", options: ["Only office jobs", "Only jobs with a diploma", "Nothing unpaid", "Caregiving, volunteering, cash jobs and paid jobs"], answer: 3, why: "Unpaid and informal work builds real skills." },
      { q: "A transferable skill is:", options: ["A skill that moves money", "A skill from one part of life that helps in another job", "A bus pass", "A type of résumé"], answer: 1, why: "It transfers from one setting to another." },
      { q: "Which skills should stay on your list?", options: ["Ones you can give a real example of", "All the AI suggests", "Ones that sound impressive", "Ones from a friend's résumé"], answer: 0, why: "You must be able to back them up." },
      { q: "A good résumé is:", options: ["Five pages", "Full of pictures", "One page, simple and clean", "Handwritten"], answer: 2, why: "Short and clear is easiest for employers." },
      { q: "Which should never go on a résumé?", options: ["Skills", "Experience", "Training", "Social Security number"], answer: 3, why: "Private numbers stay off résumés." },
      { q: "Why save your résumé as a PDF?", options: ["It keeps it looking the same on any device", "It makes it longer", "It adds color", "Employers pay for it"], answer: 0, why: "PDFs keep the layout fixed." },
      { q: "Where can you write a résumé for free?", options: ["A paid design studio", "Google Docs or Word on the web", "A text message", "A calculator"], answer: 1, why: "Both are free document tools." },
      { q: "Keywords are:", options: ["Passwords", "Your house keys", "Important words from the job posting", "Bank codes"], answer: 2, why: "Using them shows the match." },
      { q: "A good matching prompt asks the AI to:", options: ["Invent experience", "Write a new name for you", "Make the résumé three pages", "Suggest true changes so it matches better"], answer: 3, why: "Honest matching is the skill." },
      { q: "You apply to two different jobs. You should:", options: ["Save a résumé copy named for each job", "Use one résumé for every job without changes", "Not apply", "Copy each posting into your résumé"], answer: 0, why: "Each job gets its own matched copy." },
      { q: "How can AI help you prepare for an interview?", options: ["It goes to the interview for you", "It acts as the interviewer and gives tips", "It guarantees the job", "It calls the employer"], answer: 1, why: "Practice with feedback builds confidence." },
      { q: "Practice interview answers:", options: ["Only in your head", "Never", "Out loud", "Only in writing"], answer: 2, why: "Saying them out loud prepares you for the real thing." },
      { q: "A strong answer story includes:", options: ["Only the problem", "Someone else's story", "Nothing specific", "What happened, what you did, and how it turned out"], answer: 3, why: "That shape shows your skill." },
      { q: "If you have a work gap, practice:", options: ["One honest, short sentence, then what you are ready to do now", "Hiding it", "A long apology", "A made-up job"], answer: 0, why: "Honest and short, then focus forward." },
      { q: "According to the FTC, honest employers:", options: ["Charge a small fee", "Never ask you to pay to get a job", "Want gift cards", "Pay with checks you must partly return"], answer: 1, why: "Paying to get a job is a scam sign." },
      { q: "Which job is a common scam?", options: ["Cashier at a known store", "Library aide", "Receiving and reshipping packages from home", "School bus driver"], answer: 2, why: "Reshipping jobs are a known scam." },
      { q: "When should you give a new employer your bank number?", options: ["In the first text", "To get the interview", "Before you see a job posting", "Only after you have confirmed it is a real job"], answer: 3, why: "Confirm the job is real first." }
    ]
  }
};
