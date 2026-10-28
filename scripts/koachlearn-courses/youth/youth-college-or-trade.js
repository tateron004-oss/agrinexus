"use strict";

// Koach Learn course: Youth -> "Choosing College, a Trade or Work After School" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Skill-building: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course.
// Facts checked 28 Oct 2026: apprenticeship.gov (Apprenticeship Job Finder), consumer.ftc.gov (scholarship and financial aid scams: FAFSA is free, never share your FSA ID),
// consumerfinance.gov (student loans: federal first, compare offers). studentaid.gov timed out on every fetch and todaysmilitary.com did not resolve, so the lessons send students
// to studentaid.gov for this year's FAFSA dates and to official recruiters and branch websites for military rules instead of giving dates or requirements.

module.exports = {
  id: "youth-college-or-trade",
  category: "Youth",
  name: "Choosing College, a Trade or Work After School",
  skills: "Knowing your interests and needs, Comparing college paths, Comparing trades, apprenticeships, the military and work, Applying for financial aid, Avoiding debt traps and scams, Making a two-year plan",
  outcome: "compare college, a trade, the military and work side by side, figure out how to pay for your choice without falling into debt traps or scams, and write a two-year plan with a backup.",
  about: [
    "After high school there is no single right path. Some people go to a four-year college, some start at community college, some learn a trade through an apprenticeship, some join the military, and some go straight to work and keep learning on the job. Many people mix these over time.",
    "In this course you will look at what you like and what you need, compare the main paths using the same questions, learn how the FAFSA and other financial aid work, spot debt traps and scams, and write your own two-year plan with a backup.",
    "Money rules, dates and programs change every year. Each lesson shows you where to check the current details, and you should talk your plan over with a school counselor, a parent or another adult you trust.",
    "Each lesson takes about five minutes and ends with a task you do right away. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write a one-page two-year plan: your main path and a backup, a comparison of at least two paths using the same five questions (cost, time, pay while learning, likely jobs, what you need to get in), how you will pay for it, what you will do each six months, and the people who will help you.",
  chapters: [
    {
      name: "Chapter 1: Comparing your paths",
      lessons: [
        {
          title: "Know yourself before you choose",
          minutes: 5,
          goal: "Write down your interests, strengths, learning style and money needs so you can judge each path.",
          text: [
            "Before you compare schools or jobs, look at yourself. The best path fits what you enjoy, what you are good at, how you like to learn, and what you need right now.",
            "Ask yourself: What subjects or activities make time fly? Do I learn best by reading and writing, or by doing things with my hands? Do I need to earn money soon, to help my family or pay my own way? Do I want to stay close to home or move?",
            "There are five main paths: a four-year college, a community college, a trade school or apprenticeship, the military, and going to work. None is better for everyone. A path that is great for a friend might not fit you.",
            "An AI assistant can help you brainstorm careers that match your answers. Treat its ideas as a starting list, then check real facts with a counselor and official websites."
          ],
          steps: ["Write three things you enjoy and three things you are good at.", "Write how you learn best: reading, listening or doing.", "Write your money needs: do you need to earn soon?", "Write where you want to live for the next two years.", "List the five paths and circle the two or three that fit best so far."],
          words: [["Interest", "something you enjoy doing or learning about."], ["Strength", "something you do well."], ["Path", "the route you take after school toward a career."]],
          slides: [
            { title: "Start with you", bullets: ["What you enjoy", "What you are good at", "How you learn and what you need"] },
            { title: "Questions to ask yourself", bullets: ["What makes time fly?", "Hands-on or reading and writing?", "Do I need to earn money soon?"] },
            { title: "Five main paths", bullets: ["Four-year college or community college", "Trade school or apprenticeship", "The military or going to work"] },
            { title: "Using AI to brainstorm", bullets: ["Ask for careers that match your answers", "Treat it as a starting list", "Check facts with a counselor"] }
          ],
          tryIt: "Answer the four questions in this lesson on paper. Then ask an AI assistant: Here are my interests and strengths. Suggest five careers and the training each needs. Circle the two or three paths that fit you best.",
          youCanNow: "describe your interests, strengths, learning style and money needs, and pick the paths worth comparing."
        },
        {
          title: "Community college and four-year college",
          minutes: 5,
          goal: "Compare a community college and a four-year college using the same five questions.",
          text: [
            "A community college is a public, two-year college close to home. It offers certificates (often a year or less), associate degrees (about two years), and classes you can transfer to a four-year college. It usually costs much less and lets you live at home.",
            "A four-year college or university offers bachelor's degrees. Some careers, such as teaching, nursing with a bachelor's degree, engineering and accounting, usually need one. Costs vary a lot between public and private schools and between living at home and in a dorm.",
            "Use the same five questions for every option: What will it cost in total, after aid? How long will it take? Can I earn money while I learn? What jobs do graduates get, and what do they earn? What do I need to get in?",
            "A smart route for many students is to start at community college and transfer. Ask the community college which four-year schools accept its credits before you sign up for classes."
          ],
          steps: ["Pick one community college and one four-year college to compare.", "Look up each school's total yearly cost and its net price calculator.", "Write the time to finish, the jobs graduates get and what you need to get in.", "Ask a counselor about transfer agreements.", "Put the answers side by side in a table."],
          words: [["Certificate", "a short program that trains you for a specific job."], ["Associate degree", "a degree that usually takes about two years."], ["Bachelor's degree", "a degree that usually takes about four years."], ["Transfer", "moving your college credits to another school."], ["Net price", "what college costs after grants and scholarships are taken off."]],
          slides: [
            { title: "Community college", bullets: ["Close to home, lower cost", "Certificates and associate degrees", "Credits you can transfer"] },
            { title: "Four-year college", bullets: ["Bachelor's degrees", "Needed for some careers", "Cost varies a lot by school"] },
            { title: "Five questions for every option", bullets: ["Total cost after aid? How long?", "Earn while you learn?", "Jobs and pay after? What to get in?"] },
            { title: "Start local, then transfer", bullets: ["Saves money for many students", "Check which schools accept the credits first"] }
          ],
          tryIt: "Make a table with the five questions down the side and two schools across the top: one community college and one four-year college. Fill in what you can find on their websites and mark what you still need to ask.",
          youCanNow: "compare a community college and a four-year college with the same five questions and spot a start-and-transfer route."
        },
        {
          title: "Trades, apprenticeships, the military and work",
          minutes: 6,
          goal: "Compare an apprenticeship, the military and a job with training using the same five questions.",
          text: [
            "A Registered Apprenticeship is a job where you are paid while you learn a skilled trade or occupation from experienced workers, with classes on the side. Trades include electrician, plumber, carpenter and welder, and there are apprenticeships in health care, IT and more. Search the Apprenticeship Job Finder on apprenticeship.gov.",
            "Trade schools teach a skill in months instead of years, but you usually pay. Before you sign, ask how many students finish, how many get jobs in the field, and whether the school is accredited. Be careful of high-pressure sales.",
            "The military offers job training, pay, and education benefits, in exchange for a service commitment of several years. You take a test called the ASVAB, which helps decide which jobs you qualify for. Talk to recruiters from more than one branch, read everything before you sign, and check the branch's official website.",
            "Going straight to work is a real path too. Look for employers that train you, promote from within, or help pay for classes later. Use the same five questions to compare these paths to college."
          ],
          steps: ["Search apprenticeship.gov's Apprenticeship Job Finder for programs near you.", "For any trade school, ask about finish rates, job placement and accreditation.", "If you are thinking about the military, talk to more than one branch and read before signing.", "For jobs, look for training, promotion and tuition help.", "Answer the five questions for each option."],
          words: [["Registered Apprenticeship", "a paid job with structured training that leads to a recognized credential."], ["Trade", "a skilled job you learn by training, like electrician or welder."], ["Accredited", "checked and approved by an official group that reviews schools."], ["ASVAB", "the test used to see which military jobs you qualify for."]],
          slides: [
            { title: "Apprenticeships", bullets: ["Paid job while you learn a trade", "Electrician, plumber, health care, IT and more", "Search apprenticeship.gov"] },
            { title: "Trade schools", bullets: ["Months, not years, but you usually pay", "Ask: finish rate, job placement, accreditation", "Walk away from high-pressure sales"] },
            { title: "The military", bullets: ["Training, pay and education benefits", "Several years of service; ASVAB test", "Talk to more than one branch; read before signing"] },
            { title: "Going to work", bullets: ["Look for training and promotion", "Some employers help pay for classes later"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "Apprenticeship.gov", url: "https://www.apprenticeship.gov/" }
          ],
          tryIt: "Find one apprenticeship near you on apprenticeship.gov and one job that offers training. Add them to your table from the last lesson and answer the five questions for each.",
          youCanNow: "compare apprenticeships, trade schools, the military and work with the same five questions you used for college."
        }
      ],
      check: {
        title: "Knowledge Check 1: Comparing your paths",
        questions: [
          { q: "What should you look at first before comparing schools or jobs?", options: ["What your friends are doing", "Your interests, strengths, learning style and needs", "Which school has the best sports team", "Only the cheapest option"], answer: 1, why: "The best path fits you, so start by knowing yourself." },
          { q: "Which is usually true about community college?", options: ["It costs much more than a private university", "It only offers four-year degrees", "You can never transfer", "It is close to home and usually costs less"], answer: 3, why: "Community colleges are local and usually much cheaper." },
          { q: "You want to start at community college and transfer later. What should you check first?", options: ["Which four-year schools accept its credits", "The cafeteria menu", "The parking lot size", "Nothing; all credits always transfer"], answer: 0, why: "Checking transfer agreements first keeps your credits from being wasted." },
          { q: "What is a Registered Apprenticeship?", options: ["An unpaid internship", "A paid job where you learn a skilled trade with training", "A video game", "A four-year degree"], answer: 1, why: "Apprentices are paid while they learn from experienced workers." },
          { q: "A trade school salesperson says you must sign today. What do you do?", options: ["Sign right away", "Give them your bank card", "Ask about finish rates, job placement and accreditation, and take time to decide", "Borrow as much as possible"], answer: 2, why: "Pressure to sign today is a warning sign; good schools give you facts and time." }
        ]
      }
    },
    {
      name: "Chapter 2: Paying for it and planning",
      lessons: [
        {
          title: "The FAFSA and financial aid",
          minutes: 6,
          goal: "Explain the kinds of financial aid and get ready to fill out the FAFSA for free on studentaid.gov.",
          text: [
            "Financial aid is money to help pay for college, community college and many trade schools. It comes in four kinds: grants and scholarships (you do not pay them back), work-study (a part-time job), and loans (you pay them back with interest).",
            "The FAFSA (Free Application for Federal Student Aid) is the form that opens the door to federal aid, and many states and colleges use it for their own aid too. It is free and you fill it out at studentaid.gov. You will need a StudentAid.gov account, and so may a parent or other contributor whose information is on the form.",
            "A new FAFSA opens each year for the next school year. Check studentaid.gov for the date it opens and check your state's and colleges' deadlines; some aid runs out early, so file as soon as you can.",
            "Never pay anyone to fill out the FAFSA, and never share your StudentAid.gov username and password (your FSA ID) with anyone, including a consultant. Your school counselor or a college financial aid office can help you for free."
          ],
          steps: ["Go to studentaid.gov (check the address carefully).", "Create your StudentAid.gov account; a parent or contributor may need one too.", "Gather what the form asks for, such as tax information.", "Look up this year's FAFSA opening date and your state and college deadlines.", "Fill it out early, or with a counselor's free help; never pay a company to do it."],
          words: [["FAFSA", "the Free Application for Federal Student Aid."], ["Grant", "money for school you do not pay back."], ["Work-study", "a part-time job that helps pay for school."], ["Loan", "borrowed money you must pay back, usually with interest."], ["FSA ID", "your StudentAid.gov username and password; never share it."]],
          slides: [
            { title: "Four kinds of aid", bullets: ["Grants and scholarships: no payback", "Work-study: a part-time job", "Loans: you pay them back with interest"] },
            { title: "The FAFSA", bullets: ["Free, at studentaid.gov", "Opens the door to federal, state and college aid", "A parent or contributor may need an account too"] },
            { title: "Timing", bullets: ["A new FAFSA opens each year", "Check dates on studentaid.gov", "File early: some aid runs out"] },
            { title: "Stay safe", bullets: ["Never pay anyone to fill it out", "Never share your FSA ID", "Counselors help for free"] }
          ],
          sources: [
            { name: "Federal Student Aid: Apply for aid with the FAFSA", url: "https://studentaid.gov/h/apply-for-aid/fafsa" },
            { name: "FTC: How to avoid scholarship and financial aid scams", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Go to studentaid.gov and find this year's FAFSA opening date. Then find the financial aid deadline for one school and your state. Write both dates down, and write who will help you fill out the form.",
          youCanNow: "explain grants, scholarships, work-study and loans, and get ready to file the free FAFSA safely and on time."
        },
        {
          title: "Avoiding debt traps and scams",
          minutes: 5,
          goal: "Compare aid offers and spot the warning signs of debt traps and scams.",
          text: [
            "Debt is not always bad, but too much can follow you for years. Borrow only what you need after grants and scholarships. The Consumer Financial Protection Bureau says to use federal student loans before private ones, because federal loans usually have more protections.",
            "When you get aid offers, check each line: is it a grant, a scholarship, work-study or a loan? Some offers mix them together so loans look like free money. Compare the cost left over at each school, not just the size of the offer.",
            "Scam warning signs, from the Federal Trade Commission: a scholarship that is guaranteed; a fee to apply or to hold a scholarship; asking for your bank or card number; telling you that you won a contest you never entered; and pressure to pay right now. Real scholarships do not charge you to apply.",
            "Watch for schools that push you to sign up and borrow fast, promise jobs they cannot prove, or will not tell you their graduation and job numbers. If you are scammed, report it at ReportFraud.ftc.gov."
          ],
          steps: ["Sort each aid offer into grants, scholarships, work-study and loans.", "Work out what is left to pay at each school.", "Use federal loans before private loans, and borrow only what you need.", "Check every scholarship offer against the scam signs.", "Report scams at ReportFraud.ftc.gov."],
          words: [["Interest", "the extra money you pay for borrowing."], ["Federal student loan", "a loan from the US government with set protections."], ["Private loan", "a loan from a bank or company, often with fewer protections."], ["Debt trap", "debt that grows faster than you can pay it off."]],
          slides: [
            { title: "Borrow carefully", bullets: ["Only what you need after free money", "Federal loans before private loans"] },
            { title: "Read every aid offer", bullets: ["Grant, scholarship, work-study or loan?", "Loans can look like free money", "Compare what is left to pay"] },
            { title: "Scam warning signs", bullets: ["Guaranteed scholarship or fee to apply", "Asks for your bank or card number", "You won a contest you never entered; pay now"] },
            { title: "Pushy schools", bullets: ["Sign and borrow fast", "Job promises they cannot prove", "Report scams at ReportFraud.ftc.gov"] }
          ],
          sources: [
            { name: "Consumer Financial Protection Bureau: Student loans", url: "https://www.consumerfinance.gov/consumer-tools/student-loans/" },
            { name: "FTC: How to avoid scholarship and financial aid scams", url: "https://consumer.ftc.gov/articles/how-avoid-scholarship-and-financial-aid-scams" }
          ],
          tryIt: "Look at this example offer: $3,000 grant, $2,000 scholarship, $2,500 work-study, $5,500 loan, for a school that costs $14,000 a year. Write how much is free money, how much must be earned or paid back, and how much is still left to pay. (Free: $5,000. Earned: $2,500. Loan: $5,500. Still left: $1,000.)",
          youCanNow: "read an aid offer line by line, borrow carefully, and spot financial aid scams and pushy schools."
        },
        {
          title: "Making your two-year plan",
          minutes: 6,
          goal: "Write a two-year plan with a main path, a backup, money and milestones.",
          text: [
            "A plan turns your choice into steps. Two years is long enough to make real progress and short enough to see clearly.",
            "Choose a main path and a backup. For example: main path, an electrician apprenticeship; backup, a one-year certificate at community college while working. The backup keeps you moving if the main path is delayed.",
            "Break the two years into six-month steps, with one or two milestones each: apply, take a test, finish a class, save a certain amount, get a first job in the field. Write how you will pay for each step and who will help you, such as a counselor, a parent, a coach, a mentor or a boss.",
            "Look at your plan every few months. Plans change, and that is fine. Updating it is part of the skill."
          ],
          steps: ["Write your main path and a backup.", "Copy in your five-question comparison for both.", "Split two years into four six-month steps, each with one or two milestones.", "Write how you will pay for each step.", "List the people who will help you.", "Set a date to review the plan every few months."],
          words: [["Milestone", "a clear step that shows progress, like finishing a class."], ["Backup plan", "a second path you can use if the first one is delayed."]],
          slides: [
            { title: "Why two years", bullets: ["Long enough for real progress", "Short enough to see clearly"] },
            { title: "Main path and backup", bullets: ["Main: the path you want most", "Backup: keeps you moving if delayed"] },
            { title: "Six-month steps", bullets: ["One or two milestones each", "How you will pay", "Who will help"] },
            { title: "Keep it alive", bullets: ["Review every few months", "Change it when life changes"] }
          ],
          tryIt: "Final task: write your one-page two-year plan with a main path and backup, your five-question comparison of at least two paths, how you will pay, your six-month milestones and the people who will help. Show it to a counselor or adult you trust.",
          youCanNow: "write a two-year plan with a main path, a backup, milestones, a way to pay and people to help, and update it as life changes."
        }
      ],
      check: {
        title: "Knowledge Check 2: Paying for it and planning",
        questions: [
          { q: "Which kind of aid do you have to pay back?", options: ["A grant", "A scholarship", "Work-study pay", "A loan"], answer: 3, why: "Loans must be paid back with interest; grants and scholarships do not." },
          { q: "How much does it cost to file the FAFSA on studentaid.gov?", options: ["Nothing; it is free", "$25", "$100", "It depends on your school"], answer: 0, why: "The FAFSA is free; never pay anyone to file it." },
          { q: "A company offers to fill out your FAFSA if you give them your FSA ID. What do you do?", options: ["Give it to them", "Say no and ask a school counselor for free help", "Text it to them", "Post it online"], answer: 1, why: "Never share your FSA ID; counselors help for free." },
          { q: "Which is a scholarship scam sign?", options: ["A free application", "An essay question", "A guaranteed award if you pay a fee", "A deadline"], answer: 2, why: "Real scholarships do not charge fees or guarantee awards." },
          { q: "Why does a two-year plan need a backup?", options: ["To keep you moving if the main path is delayed", "Because the law requires it", "To impress friends", "It does not need one"], answer: 0, why: "A backup keeps you making progress when plans change." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Choosing College, a Trade or Work After School",
    questions: [
      { q: "Which is the right path for everyone after high school?", options: ["A four-year college", "There is no single right path; it depends on you", "The military", "Working right away"], answer: 1, why: "The best path fits your interests, strengths and needs." },
      { q: "You learn best by doing things with your hands. Which path might fit well?", options: ["Only online lectures", "Nothing fits", "An apprenticeship in a trade", "Reading textbooks all day"], answer: 2, why: "Apprenticeships teach skills through hands-on work." },
      { q: "How should you use an AI assistant when choosing a path?", options: ["Let it decide for you", "Trust every number it gives", "Never use it", "Use it to brainstorm, then check facts with a counselor and official sites"], answer: 3, why: "AI can suggest ideas, but facts need checking." },
      { q: "An associate degree usually takes about:", options: ["Two years", "Six months", "Eight years", "One week"], answer: 0, why: "Associate degrees usually take about two years." },
      { q: "What is net price?", options: ["The cost of a laptop", "What college costs after grants and scholarships", "The cost of one class", "A tax"], answer: 1, why: "Net price is the cost after free aid is taken off." },
      { q: "Which careers usually need a bachelor's degree?", options: ["None", "Only sports", "Teaching and engineering", "Only retail"], answer: 2, why: "Teaching and engineering usually need a bachelor's degree." },
      { q: "Which is one of the five questions to ask about every path?", options: ["Do my friends go there?", "Is the logo nice?", "Is it on TV?", "How long will it take?"], answer: 3, why: "Time to finish is one of the five comparison questions." },
      { q: "Where can you search for apprenticeships?", options: ["apprenticeship.gov's Apprenticeship Job Finder", "A random social media post", "A text from a stranger", "Nowhere"], answer: 0, why: "Apprenticeship.gov has an official job finder." },
      { q: "Before signing with a trade school, ask:", options: ["What color the building is", "How many students finish and get jobs in the field", "Whether they have a pool", "Nothing"], answer: 1, why: "Finish and job placement rates show if the school delivers." },
      { q: "The ASVAB is:", options: ["A college loan", "A trade school", "A test that helps decide which military jobs you qualify for", "A tax form"], answer: 2, why: "The ASVAB is used by the military to match people to jobs." },
      { q: "A smart step if you are thinking about the military is to:", options: ["Sign the first paper you see", "Skip reading the contract", "Talk to only one friend", "Talk to recruiters from more than one branch and read before signing"], answer: 3, why: "Comparing branches and reading carefully protects you." },
      { q: "Going straight to work can be a good path when the employer:", options: ["Offers training and helps pay for classes", "Never trains anyone", "Pays in gift cards", "Has no future roles"], answer: 0, why: "Training, promotion and tuition help make a job a real path." },
      { q: "Which aid is a part-time job that helps pay for school?", options: ["Grant", "Work-study", "Loan", "Scholarship"], answer: 1, why: "Work-study pays you for part-time work." },
      { q: "Where do you fill out the FAFSA?", options: ["fafsa-help.win", "A paid website", "studentaid.gov", "Your bank's app"], answer: 2, why: "The official, free FAFSA is on studentaid.gov." },
      { q: "Why file the FAFSA as early as you can?", options: ["Late forms get more money", "It is only open one day", "There is no reason", "Some aid runs out, and states and colleges have deadlines"], answer: 3, why: "Filing early helps you get aid before it runs out." },
      { q: "Which loans should you usually use first?", options: ["Federal student loans", "Private loans", "Credit cards", "Payday loans"], answer: 0, why: "Federal loans usually have more protections than private ones." },
      { q: "An aid offer lists a $5,500 loan with grants. The loan is:", options: ["Free money", "Money you must pay back", "A scholarship", "A gift"], answer: 1, why: "Loans must be repaid even when listed next to grants." },
      { q: "Where do you report a financial aid scam?", options: ["The school cafeteria", "A social media comment", "ReportFraud.ftc.gov", "Nowhere"], answer: 2, why: "The FTC collects scam reports at ReportFraud.ftc.gov." },
      { q: "Which is a good milestone in a two-year plan?", options: ["Be famous", "Feel better someday", "Get rich", "Finish the first certificate class by June"], answer: 3, why: "A milestone is a clear, checkable step." },
      { q: "How often should you look at your plan?", options: ["Every few months", "Never", "Only once", "Only if you fail"], answer: 0, why: "Regular reviews let you update the plan as life changes." }
    ]
  }
};
