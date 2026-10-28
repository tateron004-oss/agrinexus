"use strict";

// Koach Learn course: Veterans (military) -> "AI Certifications for Veterans" (bonus course on the owner's list, 27 October 2026). Written as a skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }
// Facts checked on the official pages on 27 October 2026 (va.gov test fees, VET TEC 2.0, how to use GI Bill benefits; mynextmove.org/vets; dol.gov/agencies/vets).

module.exports = {
  id: "veterans-ai-certifications",
  category: "Veterans (military)",
  name: "AI Certifications for Veterans",
  skills: "Translating a military job into civilian job titles, Finding the certification employers ask for, Checking what the GI Bill pays, Building a study plan with AI, Showing a certification on a résumé",
  outcome: "pick a civilian job that fits your military experience, find the certification employers ask for, check whether VA can pay the test fee, and build a week-by-week study plan with an AI assistant.",
  about: [
    "You already earned qualifications in uniform: schools, badges, licenses and on-the-job training. Civilian employers often want to see the same skills as a named certification. This course helps you pick the right one and plan how to earn it.",
    "You will translate your military job into civilian job titles, read real job posts to see which certification they ask for, check the official VA pages on what the GI Bill can pay, and use an AI assistant to build a study plan and practice questions.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. A short knowledge check closes each chapter and a 20-question quiz closes the course. Benefits rules change, so every money fact points to the official VA page to check."
  ],
  finalTask: "Make a one-page Certification Plan: your military job and two matching civilian job titles, the one certification that appears most in real job posts, whether VA can pay the test fee (with the official page you checked), a week-by-week study plan made with an AI assistant, and the résumé line you will add when you pass.",
  chapters: [
    {
      name: "Chapter 1: Picking the right certification",
      lessons: [
        {
          title: "Translating your military job into civilian job titles",
          minutes: 5,
          goal: "Turn your military job code into two or three civilian job titles.",
          text: [
            "Civilian hiring managers rarely know what an MOS, rating or AFSC means. Your first job is to translate it into the job titles they use, such as \"IT support specialist\", \"logistics coordinator\" or \"maintenance technician\".",
            "My Next Move for Veterans (mynextmove.org/vets), run for the U.S. Department of Labor, lets you type your branch and military job code or title and see civilian careers with similar work.",
            "An AI assistant can help too. Ask it to explain your duties in civilian words, then compare its answer with My Next Move. Do not paste classified details, unit names or anything you were told not to share."
          ],
          steps: ["Open mynextmove.org/vets.", "Under the military section, choose your branch and type your job code or title.", "Write down two or three civilian careers it suggests.", "Ask an AI assistant: \"I was an Army 25B (IT specialist). Describe my duties in civilian words for a job post.\"", "Keep the job titles that appear in both places."],
          words: [["MOS / rating / AFSC", "the codes the services use for military jobs (Army and Marine Corps MOS, Navy and Coast Guard ratings, Air Force AFSC)."], ["Job title", "the name an employer gives a job in a job post."]],
          slides: [
            { title: "Employers don't speak MOS", bullets: ["Translate your job code into civilian job titles", "Use the words a job post would use"] },
            { title: "My Next Move for Veterans", bullets: ["mynextmove.org/vets, for the Department of Labor", "Enter your branch and job code", "See civilian careers with similar work"] },
            { title: "Ask AI to translate", bullets: ["\"Describe my 25B duties in civilian words\"", "Compare with My Next Move", "Never paste classified or unit details"] }
          ],
          sources: [{ name: "My Next Move for Veterans (U.S. Department of Labor)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Look up your own military job on mynextmove.org/vets and ask an AI assistant to describe your duties in civilian words. Write down the two civilian job titles that appear in both.",
          youCanNow: "turn your military job code into civilian job titles an employer will recognize."
        },
        {
          title: "Finding the certification employers ask for",
          minutes: 5,
          goal: "Find the one certification that shows up most in real job posts for your target job.",
          text: [
            "A certification is proof from an outside organization that you passed a test on a skill. Employers list the ones they want in their job posts, so job posts are the best guide.",
            "Search a job site for your target job title and your area. Read five to ten posts and tally every certification named. The one that appears most is usually your first target.",
            "Each service runs a Credentialing Opportunities On-Line (COOL) website that links military jobs to related certifications. Ask your education office or search \"COOL\" with your branch name. Always check the certification body's own website for the current test, rules and price.",
            "AI can help you compare two certifications, but it can be out of date. Use it to explain, not to decide prices or rules."
          ],
          steps: ["Search a job site for your target job title.", "Read five to ten posts and list every certification named.", "Tally them; circle the most common one.", "Check your branch's COOL site for how it links to your military job.", "Open the certification body's own website for the current exam details."],
          words: [["Certification", "proof from an outside organization that you passed a test on a skill."], ["Certification body", "the organization that writes the test and gives the certification."], ["COOL", "Credentialing Opportunities On-Line, the services' websites that link military jobs to civilian credentials."]],
          slides: [
            { title: "Let job posts decide", bullets: ["Read 5-10 posts for your target job", "Tally every certification named", "The most common one is your first target"] },
            { title: "Use your branch's COOL site", bullets: ["Links your military job to related certifications", "Ask your education office for the link"] },
            { title: "Check the source", bullets: ["The certification body's own website has the current test", "AI can explain, but it can be out of date"] }
          ],
          tryIt: "Read at least five real job posts for one of your civilian job titles. Make a tally of the certifications they name and circle the most common one.",
          youCanNow: "use real job posts to choose the certification employers want most."
        },
        {
          title: "Checking what the GI Bill can pay",
          minutes: 5,
          goal: "Check on va.gov whether VA can repay your certification test fee and how to ask for it.",
          text: [
            "VA can pay you back for licensing and certification test fees, including registration and administrative fees. When we checked va.gov in October 2026, the limit was no more than $2,000 per test, and VA takes the amount it repays out of your GI Bill entitlement. It does not pay for the certificate itself.",
            "You must already have one of these benefits: the Post-9/11 GI Bill, the Montgomery GI Bill Active Duty or Selected Reserve, or Survivors' and Dependents' Educational Assistance. To ask for the money, send VA Form 22-0803 with the fee receipt and your test results or certificate.",
            "VA also lists other ways to use benefits, such as prep courses, non-college degree programs and the VET TEC 2.0 high-tech training program, which has a limited number of places each year. Rules and amounts change, so open the official page before you spend money."
          ],
          steps: ["Open va.gov and find the licensing and certification test fee page.", "Check you have one of the listed GI Bill benefits.", "Note the current limit and that it uses some of your entitlement.", "Keep your test receipt and your results.", "Submit VA Form 22-0803 as the page explains."],
          words: [["Entitlement", "the amount of GI Bill benefit you have left to use."], ["Reimbursement", "being paid back for money you already spent."]],
          slides: [
            { title: "VA can repay test fees", bullets: ["Licensing and certification test fees", "No more than $2,000 per test (va.gov, Oct 2026)", "Comes out of your GI Bill entitlement"] },
            { title: "How to ask", bullets: ["Keep the fee receipt and your results", "Send VA Form 22-0803", "Check va.gov for where to submit"] },
            { title: "Other options", bullets: ["Prep courses and non-college programs", "VET TEC 2.0 for high-tech training (limited places)", "Always check the official page first"] }
          ],
          sources: [
            { name: "VA: Licensing and certification test fees", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" },
            { name: "VA: How to use your GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/" },
            { name: "VA: VET TEC 2.0", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/vettec-high-tech-program/" }
          ],
          tryIt: "Open the va.gov test fee page. Write down the current limit, which benefits qualify, and the form number. Then check whether you have one of those benefits.",
          youCanNow: "check on va.gov whether VA can repay a certification test fee and what you need to send."
        }
      ],
      check: {
        title: "Knowledge Check 1: Picking the right certification",
        questions: [
          { q: "A hiring manager does not know what your MOS means. What should you do?", options: ["Write the code in larger letters", "Leave the job off your résumé", "Translate it into civilian job titles and duties", "Ask them to look it up"], answer: 2, why: "Civilian job titles and duties are words the employer already understands." },
          { q: "Which free site lets you enter a military job code and see civilian careers?", options: ["My Next Move for Veterans", "A social media app", "A video game store", "A weather site"], answer: 0, why: "mynextmove.org/vets is the Department of Labor tool for this." },
          { q: "How do you find which certification employers want most?", options: ["Pick the most expensive one", "Ask a random friend", "Take every test at once", "Tally the certifications named in real job posts"], answer: 3, why: "Job posts show what employers ask for." },
          { q: "Where do you check a certification's current test rules and price?", options: ["Only an AI chat", "The certification body's own website", "An old forum post", "A pop-up ad"], answer: 1, why: "The organization that gives the test has the current details." },
          { q: "According to va.gov in October 2026, what is true about VA paying certification test fees?", options: ["VA pays for the certificate document", "VA can repay up to $2,000 per test and it uses entitlement", "There is no limit", "Anyone can claim it without a GI Bill benefit"], answer: 1, why: "The page said no more than $2,000 per test, charged against entitlement." }
        ]
      }
    },
    {
      name: "Chapter 2: Earning the certification",
      lessons: [
        {
          title: "Building a study plan with AI",
          minutes: 5,
          goal: "Use an AI assistant to turn the official exam outline into a week-by-week study plan.",
          text: [
            "Most certification bodies publish an exam outline, sometimes called exam objectives. It lists every topic the test covers. This is your mission brief.",
            "Copy the main topics (not the whole document if it is long) into an AI assistant and give it your situation: how many weeks you have, how many hours a week, and what you already know from the military.",
            "Ask for a plan with a goal for each week, a review week before the test, and a practice test date. Then put the sessions on your calendar like duty times."
          ],
          steps: ["Download the official exam outline from the certification body.", "Tell the AI your weeks, hours per week and what you already know.", "Paste the main topics and ask for a week-by-week plan.", "Ask it to add a review week and a practice test.", "Put each study session on your calendar."],
          words: [["Exam outline (objectives)", "the official list of topics a certification test covers."], ["Study plan", "a schedule saying what you will study and when."]],
          slides: [
            { title: "The exam outline is your mission brief", bullets: ["Lists every topic the test covers", "Get it from the certification body"] },
            { title: "Tell the AI your situation", bullets: ["Weeks until the test", "Hours you can study each week", "What you already know from service"] },
            { title: "Ask for a real plan", bullets: ["A goal for each week", "A review week and a practice test", "Then put it on your calendar"] }
          ],
          tryIt: "Get the exam outline for your target certification. Ask an AI assistant: \"I have 8 weeks and 6 hours a week. I already know [what you know]. Make a week-by-week study plan for these topics: [topics].\"",
          youCanNow: "turn an official exam outline into a week-by-week study plan with an AI assistant."
        },
        {
          title: "Practicing with AI the right way",
          minutes: 5,
          goal: "Use AI to quiz you and explain mistakes, while checking it against official material.",
          text: [
            "AI is a good study partner. It can quiz you on one topic, explain a wrong answer in simpler words, or give you a real-world example from your military job.",
            "It can also be wrong or out of date. If its answer disagrees with the official study guide or exam outline, trust the official material.",
            "Never use \"brain dumps\" (copies of real test questions). They break the certification body's rules and can cost you the certification. Practice to understand, not to memorize answers."
          ],
          steps: ["Ask: \"Quiz me with 5 questions on [one topic]. Wait for my answer each time.\"", "When you miss one, ask it to explain in simple words.", "Ask for an example from your military job.", "Check any answer you doubt in the official study guide.", "Track your weak topics and study them again."],
          words: [["Brain dump", "a copy of real test questions shared against the rules; using one can cost you the certification."], ["Practice test", "a test made for practice that is like the real one but not copied from it."]],
          slides: [
            { title: "AI as a study partner", bullets: ["Quizzes you on one topic", "Explains wrong answers simply", "Gives examples from your military job"] },
            { title: "Check against official material", bullets: ["AI can be wrong or out of date", "The official study guide wins"] },
            { title: "No brain dumps", bullets: ["Copied test questions break the rules", "They can cost you the certification", "Practice to understand"] }
          ],
          tryIt: "Pick the first topic in your study plan. Ask an AI assistant to quiz you with five questions, one at a time. For every miss, ask for a simple explanation and check it in the official material.",
          youCanNow: "use AI to quiz yourself and explain mistakes, while checking it against official material."
        },
        {
          title: "Showing your certification to employers",
          minutes: 4,
          goal: "Write the résumé line and a short story that show your certification and your service together.",
          text: [
            "Once you pass, put the certification where employers look: a \"Certifications\" section on your résumé with the full name, the certification body and the year, plus your online profile.",
            "Connect it to your service. For example: \"Managed network access for 300 users as an Army IT specialist; earned [certification name] in 2026.\" The certification proves the skill; your service proves you used it under pressure.",
            "Still studying? You can write \"[certification name], in progress, test date [month year]\". Ask an AI assistant to help with wording, then make sure every word is true."
          ],
          steps: ["Add a Certifications section to your résumé.", "Write the full certification name, the body and the year.", "Add one résumé line that links it to something you did in service.", "If still studying, write \"in progress\" with your test month.", "Read it out loud and check every word is true."],
          words: [["Résumé", "a one- or two-page summary of your work, training and skills for employers."]],
          slides: [
            { title: "Put it where employers look", bullets: ["A Certifications section on your résumé", "Full name, the certification body, the year"] },
            { title: "Link it to your service", bullets: ["Certification proves the skill", "Service shows you used it under pressure"] },
            { title: "Still studying?", bullets: ["\"[Name], in progress, test date [month year]\"", "Every word must be true"] }
          ],
          tryIt: "Final task: make your one-page Certification Plan with your job titles, target certification, the VA page you checked, your AI study plan, and the résumé line you will add when you pass.",
          youCanNow: "plan, fund, study for and show off a certification that fits your military experience."
        }
      ],
      check: {
        title: "Knowledge Check 2: Earning the certification",
        questions: [
          { q: "What should you give an AI assistant to make a good study plan?", options: ["Your Social Security number", "Your bank details", "Only the certification name", "The exam topics, your weeks and your hours per week"], answer: 3, why: "Topics plus your time give the AI what it needs to plan." },
          { q: "What is an exam outline?", options: ["The official list of topics the test covers", "A list of answers", "A practice test", "A job post"], answer: 0, why: "The certification body publishes it so you know what to study." },
          { q: "The AI's explanation disagrees with the official study guide. What do you do?", options: ["Trust the AI", "Skip the topic", "Trust the official study guide", "Ask the AI to argue"], answer: 2, why: "Official material is the standard the test uses." },
          { q: "Someone offers you a \"brain dump\" of real test questions. What should you do?", options: ["Use it the night before", "Share it with friends", "Pay extra for a newer one", "Refuse it: it breaks the rules and can cost you the certification"], answer: 3, why: "Brain dumps break certification rules." },
          { q: "Which résumé line best links a certification to your service?", options: ["\"I am certified.\"", "\"Good with computers.\"", "\"Managed network access for 300 users as an Army IT specialist; earned [certification] in 2026.\"", "\"See attached.\""], answer: 2, why: "It shows the skill in action plus the proof." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Certifications for Veterans",
    questions: [
      { q: "Why translate your military job into civilian job titles?", options: ["To hide your service", "So employers understand your skills", "Because codes are secret", "To make your résumé longer"], answer: 1, why: "Civilian titles use words employers know." },
      { q: "On My Next Move for Veterans you can:", options: ["Enter your military job and see similar civilian careers", "Apply for VA disability", "Buy test vouchers", "Download your DD-214"], answer: 0, why: "It matches military jobs to civilian careers." },
      { q: "What should you NOT paste into an AI assistant when translating your duties?", options: ["Your job title", "General duties", "Classified details or unit information", "The word \"leadership\""], answer: 2, why: "Classified and unit details must stay private." },
      { q: "A certification is:", options: ["Proof from an outside organization that you passed a skill test", "A college degree", "A military rank", "A job offer"], answer: 0, why: "It proves you passed a skill test." },
      { q: "The best first guide to which certification to get is:", options: ["The longest exam", "The cheapest test", "A random video", "Real job posts for your target job"], answer: 3, why: "Employers name what they want in job posts." },
      { q: "What does COOL stand for?", options: ["Civilian Office of Online Learning", "Credentialing Opportunities On-Line", "Certified Officer Operations List", "Career Options Over Lunch"], answer: 1, why: "COOL links military jobs to civilian credentials." },
      { q: "Where should you confirm the current exam price and rules?", options: ["An AI chat", "The certification body's website", "A friend's memory", "A social media comment"], answer: 1, why: "The certification body has current details." },
      { q: "Per va.gov in October 2026, VA test fee repayment is limited to:", options: ["$200 per test", "$20,000 per year", "No limit", "$2,000 per test"], answer: 3, why: "The page said no more than $2,000 per test." },
      { q: "When VA repays a test fee, what happens to your GI Bill?", options: ["The amount is taken from your entitlement", "Nothing", "It doubles", "It ends"], answer: 0, why: "VA deducts the repaid amount from your entitlement." },
      { q: "Which form do you send to ask VA to repay a test fee?", options: ["W-2", "DD-214", "VA Form 22-0803", "SF-86"], answer: 2, why: "va.gov names VA Form 22-0803 for test fee reimbursement." },
      { q: "VA test fee repayment covers:", options: ["The fee for the certificate document", "Your study snacks", "Your travel to the test", "Test fees, including registration and administrative fees"], answer: 3, why: "It covers test fees, not the certificate itself." },
      { q: "VET TEC 2.0 is best described as:", options: ["A disability claim", "A home loan", "A VA program for high-tech training with limited places", "A military rank"], answer: 2, why: "It funds non-college high-tech training, with a yearly cap." },
      { q: "Benefit amounts can change. Before spending money you should:", options: ["Trust an old blog post", "Check the official va.gov page", "Ask the AI only", "Guess"], answer: 1, why: "The official page has the current rules." },
      { q: "The first thing to collect for an AI study plan is:", options: ["The official exam outline", "A brain dump", "Your password", "Someone else's notes"], answer: 0, why: "The outline lists what the test covers." },
      { q: "A good study plan includes:", options: ["Only the test date", "Studying everything the night before", "A goal each week, a review week and a practice test", "No calendar"], answer: 2, why: "Weekly goals and review lead to readiness." },
      { q: "Which prompt is best for practice?", options: ["\"Quiz me with 5 questions on this topic, one at a time.\"", "\"Give me the real test answers.\"", "\"Pass the test for me.\"", "\"Tell me a joke.\""], answer: 0, why: "It makes you practice and wait for your answer." },
      { q: "Why avoid brain dumps?", options: ["They are too long", "They are boring", "They are free", "They break the rules and can cost you the certification"], answer: 3, why: "Certification bodies ban them." },
      { q: "You missed a practice question. A good next step is:", options: ["Quit studying", "Ask the AI to explain it simply and check the official guide", "Skip the whole topic", "Change your test date to tomorrow"], answer: 1, why: "Understanding the miss fixes the weak spot." },
      { q: "Your résumé Certifications section should show:", options: ["Only a logo", "The full name, the certification body and the year", "Your test score sheet", "Your study hours"], answer: 1, why: "Full name, body and year are what employers check." },
      { q: "You have not passed yet. How can you list the certification?", options: ["Say you passed", "List a different one", "Leave a blank line", "\"[Name], in progress, test date [month year]\""], answer: 3, why: "\"In progress\" with a date is honest and useful." }
    ]
  }
};
