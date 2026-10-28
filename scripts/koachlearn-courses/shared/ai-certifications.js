"use strict";

// Koach Learn course (shared, bonus): "AI Certifications: Which to Get and How to Prepare". Categories: Re-Entry, Workforce Development. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Certification names, fees and formats were checked on the providers' official pages on 27 October 2026 (see each lesson's sources). They change: the course tells students to re-check before registering.

module.exports = {
  id: "ai-certifications",
  category: "Re-Entry",
  name: "AI Certifications: Which to Get and How to Prepare",
  skills: "Matching a certification to a job goal, Reading an official exam page, Comparing cost and time, Finding free training and practice tests, Making a study plan, Getting exam-day ready",
  outcome: "choose an AI certificate or certification that fits a real job goal, read its official exam page to find the cost, format and skills tested, build a study plan using free official training, and get ready for exam day.",
  about: [
    "Certificates and certifications show employers you have a skill, which can help a lot if you have gaps in your work history, no degree, or a record. In AI, big technology companies and training groups now offer beginner credentials.",
    "This course is for people coming home from prison, job seekers in workforce programs and career changers. It does not teach the exam content itself. It teaches you how to pick the right credential, avoid wasting money, and prepare in a smart way.",
    "Names, prices and exam details change often, so you will learn to check the official page every time. Each lesson is about five minutes with a \"Try it now\" task, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Pick one AI credential that fits a real job post you are interested in. From its official page, write down the exact name, provider, cost, exam length and format, skills tested, ID requirements and how long it stays valid. Then make a four-week study plan using free official training and at least one practice test, and book a practice session or exam date.",
  chapters: [
    {
      name: "Chapter 1: Choosing the right credential",
      lessons: [
        {
          title: "Certificates vs certifications, and why they matter",
          minutes: 4,
          goal: "Tell a course certificate from a proctored certification and explain what each shows an employer.",
          text: [
            "A certificate of completion shows you finished a course. A certification usually means you passed a supervised (proctored) exam that tests your skills. Employers often value certifications more, but a good certificate still shows effort and new skills.",
            "AI credentials range from beginner (\"what is AI and how do I use it at work\") to technical (\"build AI solutions in the cloud\"). Beginner ones help in office, customer service, sales and admin jobs. Technical ones help in IT and cloud jobs and often need some coding or cloud knowledge first.",
            "A credential is not a job guarantee. It works best with a résumé that shows how you used the skill, even in a small project. Pair it with real practice."
          ],
          words: [["Certificate", "proof you finished a course or program."], ["Certification", "a credential earned by passing an exam that tests your skills."], ["Proctored exam", "a test watched by a person or camera to prevent cheating."], ["Credential", "any certificate, certification or license that proves a skill."]],
          slides: [
            { title: "Certificate vs certification", bullets: ["Certificate: you finished a course", "Certification: you passed a proctored exam"] },
            { title: "Beginner vs technical", bullets: ["Beginner: using AI at work", "Technical: building AI solutions; may need coding"] },
            { title: "Not a job guarantee", bullets: ["Pair it with real practice", "Show how you used the skill"] }
          ],
          tryIt: "Write one job you want. Next to it, write whether a beginner AI credential or a technical one fits better, and why.",
          youCanNow: "tell a certificate from a certification and choose the right level for a job goal."
        },
        {
          title: "A tour of well-known beginner AI credentials",
          minutes: 6,
          goal: "Compare several beginner AI credentials by provider, cost, time and level.",
          text: [
            "These were checked on the official pages in October 2026; always re-check before you pay. Google AI Essentials is a self-paced course by Google on Coursera, under 5 hours, with a certificate; in the U.S. and Canada it is $49 a month after a 7-day free trial. It suits people who want to use AI tools at work.",
            "The AWS Certified AI Practitioner is a foundational Amazon Web Services certification: a 90-minute exam with 65 questions and a $100 fee. Google Cloud's Generative AI Leader certification has no prerequisites: 90 minutes, 50-60 questions, $99, valid for 3 years, taken online or at a test center.",
            "Microsoft Certified: Azure AI Fundamentals now uses exam AI-901, updated in April 2026. Its price depends on your country, the passing score is 700, and it now expects some Python and Azure knowledge, so it is more technical than before. Microsoft offers a free practice assessment once you sign in."
          ],
          words: [["Foundational", "the entry level of a certification track."], ["Prerequisite", "something you must have or know before you start."]],
          slides: [
            { title: "Google AI Essentials", bullets: ["Google course on Coursera, under 5 hours", "U.S./Canada: $49/month after 7-day trial", "Certificate; using AI at work"] },
            { title: "AWS Certified AI Practitioner", bullets: ["Foundational AWS certification", "90 minutes, 65 questions, $100"] },
            { title: "Google Cloud Generative AI Leader", bullets: ["No prerequisites", "90 minutes, 50-60 questions, $99", "Valid 3 years"] },
            { title: "Azure AI Fundamentals (AI-901)", bullets: ["Updated April 2026; price varies by country", "Passing score 700; expects some Python", "Free practice assessment after sign-in"] }
          ],
          sources: [{ name: "Grow with Google: Google AI Essentials", url: "https://grow.google/ai-essentials/" }, { name: "AWS Certified AI Practitioner", url: "https://aws.amazon.com/certification/certified-ai-practitioner/" }, { name: "Google Cloud: Generative AI Leader", url: "https://cloud.google.com/learn/certification/generative-ai-leader" }, { name: "Microsoft Learn: Exam AI-901", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/ai-901/" }],
          tryIt: "Open the official page for two of these credentials. For each, write the exact name, provider, cost, length and who it is for. Note anything that changed since this course was written.",
          youCanNow: "compare beginner AI credentials using their official pages."
        },
        {
          title: "Matching a credential to a job and a budget",
          minutes: 5,
          goal: "Pick one credential using real job posts, your budget and your time.",
          text: [
            "Start from jobs, not from credentials. Search for jobs you want and count which credentials and skills appear in the posts. If several mention a cloud platform, that platform's credential may be worth it.",
            "Then compare total cost (fee, retake fee, any training), time to prepare, and your current level. If you are brand new, a short beginner course first may save you a failed exam fee.",
            "Look for help paying. Workforce programs, American Job Centers, reentry programs, veterans benefits, libraries and some employers may pay for training or exams; some providers offer discounts or financial aid. Ask before you pay, and never pay someone who \"guarantees\" a pass or sells exam answers: that is a scam and can get your credential cancelled."
          ],
          steps: ["Find five job posts you want.", "Count which credentials and skills they mention.", "Compare total cost, time and level for your top two.", "Ask your workforce or reentry program about paying for it.", "Pick one."],
          words: [["Retake fee", "what you pay to take an exam again if you do not pass."], ["Financial aid", "help paying for education or training."]],
          slides: [
            { title: "Start from jobs", bullets: ["Find five job posts", "Count the credentials they mention"] },
            { title: "Compare total cost", bullets: ["Fee, retakes, training", "Time and your current level"] },
            { title: "Get help paying", bullets: ["Workforce, reentry, veterans programs", "Employers, libraries, provider discounts", "Never pay for \"guaranteed\" passes"] }
          ],
          tryIt: "Find five job posts you want and list the AI or tech credentials they mention. Pick one credential and write its total cost and who might help pay for it.",
          youCanNow: "choose a credential that fits real jobs, your budget and your time."
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing the right credential",
        questions: [
          { q: "What is the main difference between a certificate and a certification?", options: ["There is no difference", "A certificate is always more valuable", "A certification usually requires passing a proctored exam", "Certifications never have exams"], answer: 2, why: "Certifications test skills with a supervised exam." },
          { q: "According to AWS's page, the AWS Certified AI Practitioner exam fee is:", options: ["$100", "$1,000", "Free", "$10"], answer: 0, why: "AWS lists a $100 fee." },
          { q: "Which credential's page says it now expects some Python and Azure knowledge?", options: ["Google AI Essentials", "None of them have pages", "A food handler card", "Microsoft Azure AI Fundamentals (AI-901)"], answer: 3, why: "The AI-901 page lists Python and Azure familiarity." },
          { q: "Where should you start when picking a credential?", options: ["The most expensive one", "Real job posts you want", "Whatever a stranger recommends", "A random ad"], answer: 1, why: "Job posts show what employers want." },
          { q: "Someone offers to sell you exam answers that \"guarantee\" a pass. This is:", options: ["A smart shortcut", "A scam that can get your credential cancelled", "Allowed", "Free training"], answer: 1, why: "Buying answers is cheating and often a scam." }
        ]
      }
    },
    {
      name: "Chapter 2: Preparing and passing",
      lessons: [
        {
          title: "Reading the official exam page",
          minutes: 5,
          goal: "Pull the key facts from an official exam page into a one-page fact sheet.",
          text: [
            "The official exam page is the only source you should trust for exam facts. Look for: the exact name and exam code, price, length and number of questions, passing score, languages, how you can take it (online or test center), skills measured and their weight, and how long the credential is valid.",
            "The skills-measured list, sometimes called the exam guide or study guide, is your map. If a topic is 40% of the exam, it deserves about 40% of your study time.",
            "Check the rules too: ID required (often a current government-issued photo ID with a name that matches your registration), online testing room rules, rescheduling deadlines and retake policies. If your ID situation is complicated, solve it early."
          ],
          steps: ["Open the provider's official exam page.", "Write the name, code, price, length, questions and passing score.", "Copy the skills measured with their percentages.", "Note ID, testing and retake rules.", "Save the page link and the date you checked."],
          words: [["Exam code", "the short code for an exam, like AI-901."], ["Skills measured", "the list of topics an exam tests, often with percentages."], ["Passing score", "the score you need to pass."]],
          slides: [
            { title: "Trust the official page", bullets: ["Name, code, price", "Length, questions, passing score", "Online or test center"] },
            { title: "Skills measured = your map", bullets: ["Topics and their weight", "40% of the exam = 40% of study time"] },
            { title: "Check the rules early", bullets: ["Photo ID matching your name", "Online room rules", "Reschedule and retake policies"] }
          ],
          tryIt: "Make a one-page fact sheet for your chosen credential from its official page, including skills measured with percentages, ID rules and the date you checked.",
          youCanNow: "read an official exam page and turn it into a fact sheet."
        },
        {
          title: "Building a study plan with free training and AI",
          minutes: 6,
          goal: "Make a four-week study plan using free official training, AI tutoring and practice tests.",
          text: [
            "Most providers offer free training. Microsoft Learn has free learning paths and a free practice assessment for many exams; AWS Skill Builder and Google offer free learning too. Start there before paying for anything.",
            "Use AI as a tutor, not a cheat. Ask: \"Explain [topic from the skills list] in simple words with a real-world example. Then quiz me with five multiple-choice questions and explain my mistakes.\" Check anything that seems off against the official training, since AI can be wrong or out of date.",
            "Plan four weeks: weeks 1-3 cover topics in order of their exam weight, a little each day; week 4 is practice tests and reviewing weak areas. Aim to score well on the official practice test before booking the real exam."
          ],
          steps: ["List the skills measured and their weights.", "Find the free official training for each.", "Plan 30-60 minutes a day for weeks 1-3, heaviest topics first.", "Use AI to explain and quiz you; check against official training.", "Week 4: practice tests and weak spots."],
          words: [["Learning path", "a set of lessons in order on one topic."], ["Practice test", "a sample exam that shows what the real one is like."]],
          slides: [
            { title: "Free training first", bullets: ["Microsoft Learn, AWS Skill Builder, Google", "Free practice tests where offered"] },
            { title: "AI as a tutor", bullets: ["Explain in simple words with examples", "Quiz me and explain mistakes", "Check against official training"] },
            { title: "Four-week plan", bullets: ["Weeks 1-3: topics by weight", "Week 4: practice tests and weak spots", "Book when practice scores are strong"] }
          ],
          tryIt: "Write a four-week study plan for your credential. Then ask an AI assistant to explain one topic from the skills list and quiz you with five questions.",
          youCanNow: "build a study plan with free training, AI tutoring and practice tests."
        },
        {
          title: "Getting ready for exam day and using your credential",
          minutes: 5,
          goal: "Prepare for exam day and add your new credential to your résumé and profiles.",
          text: [
            "Before exam day, test your setup if you are taking it online: most providers have a system check. Clear your desk and room as the rules say. For a test center, plan your route and arrive early with the right ID.",
            "During the exam: read each question twice, answer the easy ones first, flag hard ones and come back, and do not leave any blank unless the rules say wrong answers cost points.",
            "After you pass, add it to your résumé under \"Certifications\" with the exact name, provider and date, and claim any digital badge the provider offers to share online. If you do not pass, read the score report, study the weak areas and use the retake policy. Many people pass on the second try."
          ],
          steps: ["Run the online system check or plan your route.", "Prepare your ID and room as the rules require.", "On the exam, read twice, do easy ones first, flag hard ones.", "After passing, add it to your résumé with exact name, provider and date.", "If not, study weak areas from the score report and retake."],
          words: [["System check", "a test that your computer, camera and internet work for an online exam."], ["Digital badge", "an online image that proves you earned a credential."], ["Score report", "the results showing how you did on each part of the exam."]],
          slides: [
            { title: "Before exam day", bullets: ["Online: run the system check", "Test center: plan route, arrive early", "Right ID, clear room"] },
            { title: "During the exam", bullets: ["Read each question twice", "Easy ones first; flag hard ones", "Do not leave blanks"] },
            { title: "After the exam", bullets: ["Passed: add it to your résumé and claim the badge", "Not yet: study weak areas and retake"] }
          ],
          tryIt: "Final task: complete your fact sheet and four-week study plan, take one official practice test or AI quiz, and book a study start date or exam date. Write how the credential will appear on your résumé.",
          youCanNow: "choose, prepare for and use an AI credential that fits your job goal."
        }
      ],
      check: {
        title: "Knowledge Check 2: Preparing and passing",
        questions: [
          { q: "What is the most reliable source for an exam's price and format?", options: ["A social media post", "An AI chat answer", "A friend's memory", "The provider's official exam page"], answer: 3, why: "Official pages have current facts." },
          { q: "A topic is 40% of the exam. How much study time should it get?", options: ["About 40%", "None", "5%", "All of it"], answer: 0, why: "Study time should follow exam weight." },
          { q: "How should you use AI while studying?", options: ["To take the exam for you", "To find leaked answers", "As a tutor that explains and quizzes you, checked against official training", "Not at all"], answer: 2, why: "AI can tutor, but you must check it and never cheat." },
          { q: "What should you do before an online proctored exam?", options: ["Nothing", "Invite friends to help", "Open notes on your desk", "Run the provider's system check"], answer: 3, why: "A system check prevents technical problems." },
          { q: "You did not pass. What is the best next step?", options: ["Give up forever", "Buy exam answers", "Study weak areas from the score report and retake", "Lie on your résumé"], answer: 2, why: "Many pass on the second try with focused study." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Certifications: Which to Get and How to Prepare",
    questions: [
      { q: "A certificate of completion shows:", options: ["You passed a proctored exam", "You finished a course", "You have a license to practice law", "Nothing"], answer: 1, why: "Certificates show course completion." },
      { q: "A proctored exam is:", options: ["Watched by a person or camera to prevent cheating", "An open-book quiz with friends", "A survey", "A job interview"], answer: 0, why: "Proctoring keeps the exam fair." },
      { q: "Does a credential guarantee a job?", options: ["Yes, always", "Only on Mondays", "No, pair it with real practice and a strong résumé", "Only if expensive"], answer: 2, why: "Credentials help but do not guarantee jobs." },
      { q: "Google AI Essentials is offered on which platform, per Google's page?", options: ["Coursera", "A bank", "A TV channel", "A phone carrier"], answer: 0, why: "Google offers it on Coursera." },
      { q: "How long is the Google AI Essentials course, per Google?", options: ["Four years", "Five minutes", "Two semesters", "Under 5 hours"], answer: 3, why: "Google lists it as under 5 hours, self-paced." },
      { q: "How long is the AWS Certified AI Practitioner exam?", options: ["3 days", "8 hours", "10 minutes", "90 minutes"], answer: 3, why: "AWS lists 90 minutes." },
      { q: "Google Cloud's Generative AI Leader certification lists which prerequisites?", options: ["A computer science degree", "None", "Five years of coding", "Another Google certification"], answer: 1, why: "Google lists no prerequisites." },
      { q: "How long is the Generative AI Leader certification valid, per Google Cloud?", options: ["Forever", "1 month", "10 years", "3 years"], answer: 3, why: "Google lists a 3-year validity." },
      { q: "The exam for Microsoft Certified: Azure AI Fundamentals is now:", options: ["AI-901", "AZ-104", "There is no exam", "PMP"], answer: 0, why: "Microsoft lists AI-901 as the required exam." },
      { q: "The Azure AI Fundamentals exam price:", options: ["Is always free", "Is $5 everywhere", "Depends on the country where you take it", "Is paid in gift cards"], answer: 2, why: "Microsoft prices exams by country or region." },
      { q: "Why re-check official pages before paying?", options: ["Pages never change", "To waste time", "It is not needed", "Names, prices and details change"], answer: 3, why: "Credentials are updated often." },
      { q: "When choosing a credential, start with:", options: ["The flashiest logo", "The longest exam", "Job posts for jobs you want", "A random pick"], answer: 2, why: "Employers' needs guide the choice." },
      { q: "Total cost of a credential includes:", options: ["Only the exam fee", "Exam fee, retakes and training", "Nothing", "Your rent"], answer: 1, why: "Plan for all costs." },
      { q: "Who might help pay for training or exams?", options: ["Workforce, reentry or veterans programs, or an employer", "Nobody ever", "Scammers", "A random caller"], answer: 0, why: "Many programs fund training." },
      { q: "The skills-measured list is:", options: ["A list of job openings", "The exam answers", "Your map for what to study", "Optional to read"], answer: 2, why: "It shows what the exam tests." },
      { q: "What ID problem should you solve early?", options: ["Making sure your photo ID matches your registration name", "Your favorite color", "Your phone case", "Your email font"], answer: 0, why: "ID mismatches can stop you from testing." },
      { q: "Where should you look first for training?", options: ["Expensive unofficial bootcamps only", "Leaked answer sites", "Nowhere", "Free official training from the provider"], answer: 3, why: "Free official training matches the exam." },
      { q: "AI explains a topic differently from the official training. You should:", options: ["Trust the AI", "Trust the official training", "Skip the topic", "Report the provider"], answer: 1, why: "AI can be wrong or out of date." },
      { q: "During the exam, a good strategy is:", options: ["Spend all your time on question 1", "Answer easy questions first and flag hard ones", "Leave many blank", "Guess without reading"], answer: 1, why: "This uses your time well." },
      { q: "After passing, list the credential on your résumé with:", options: ["A made-up score", "Only \"AI stuff\"", "Nothing", "Exact name, provider and date"], answer: 3, why: "Exact details are checkable and professional." }
    ]
  }
};
