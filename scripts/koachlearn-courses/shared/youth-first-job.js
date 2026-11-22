"use strict";

// Koach Learn course (wave 3, workforce development): "Your First Job: Work Permits, Paychecks and What Bosses Expect".
// For teens and young adults starting their first US job. ADDIE parts follow the pilot, re-entry/reentry-ai-digital-confidence.js.
// Facts checked 30 October 2026 on dol.gov (child labor fact sheet 43, minimum wage page, YouthRules) and irs.gov (Topic 751).

const SRC = {
  youthRules: { name: "US Department of Labor: YouthRules!", url: "https://www.dol.gov/agencies/whd/youthrules" },
  fs43: { name: "US Department of Labor: Fact Sheet 43, child labor rules for non-farm jobs", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" },
  childLabor: { name: "US Department of Labor: Child labor", url: "https://www.dol.gov/agencies/whd/child-labor" },
  stateChildLabor: { name: "US Department of Labor: State child labor laws", url: "https://www.dol.gov/agencies/whd/state/child-labor" },
  minWage: { name: "US Department of Labor: Minimum wage", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
  stateMinWage: { name: "US Department of Labor: State minimum wage laws", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
  i9: { name: "USCIS: Form I-9, Employment Eligibility Verification", url: "https://www.uscis.gov/i-9" },
  w4: { name: "IRS: About Form W-4", url: "https://www.irs.gov/forms-pubs/about-form-w-4" },
  irs751: { name: "IRS: Topic 751, Social Security and Medicare withholding rates", url: "https://www.irs.gov/taxtopics/tc751" },
  oshaYoung: { name: "OSHA: Young workers", url: "https://www.osha.gov/young-workers" },
  ftcJobScams: { name: "FTC: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }
};

module.exports = {
  id: "youth-first-job",
  category: "Workforce Development",
  name: "Your First Job: Work Permits, Paychecks and What Bosses Expect",
  skills: "Checking youth work rules, Getting work papers ready, Reading a paystub, Tracking your hours, Meeting a boss's expectations, Speaking up about safety",
  outcome: "start your first job ready: check that the job and hours are legal for your age, gather your work papers, read and check your paystub, act the way a boss expects, and speak up if something is unsafe or unfair.",
  about: [
    "This course is for young people getting ready for a first job, such as at a store, a restaurant, a summer camp, a movie theater or an office. It also helps parents, mentors and youth job programs.",
    "You will check the rules for your age, get your papers ready, read a paycheck and check it against your hours, learn what bosses expect in the first weeks, and learn your rights and what to do if a job is unsafe.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task on paper or a phone. At the end you make your own First Job Starter Sheet. This course teaches the rules; it does not replace your state's labor office. Always check your state's own page."
  ],
  finalTask: "Make a one-page First Job Starter Sheet for a real or planned job: (1) your age, the job, and the hours you may work under federal and your state's rules, with the official page you checked; (2) a checklist of the papers you need (work permit if your state requires one, ID documents for the Form I-9, Form W-4) and where to get each; (3) a practice paystub check: from a made-up stub, write gross pay, each deduction and net pay, and confirm the math; (4) three habits you will show your boss in your first two weeks; (5) your plan if something is unsafe: who you tell first and the official phone number to call.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens (about 14 to 19) and young adults looking for a first job, including students in summer youth employment programs, foster youth and young people in job training programs. Some are the first in their family to work in a US workplace.",
    startingPoint: "Can use a phone and fill in simple forms. Most have never seen a paystub, a Form W-4 or a work permit, and do not know the child labor rules or their rights at work.",
    gap: "Young workers are often scheduled for hours or tasks that the law does not allow for their age, are unsure what papers they need, cannot tell whether their pay is right, and are afraid to speak up about safety. Knowing the rules and the habits bosses expect helps them get hired, keep the job and stay safe.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 8)",
      "Devices: a phone or a school or library computer; paper and pen work for every task",
      "Time: 4 to 6 minute lessons",
      "Rules differ by state; federal law sets a floor and the stricter rule applies, so every lesson points to the official page",
      "Privacy: no real Social Security numbers, bank details or real paystubs are shared in class; practice uses made-up numbers"
    ],
    prerequisites: "None. Learners who want help with a résumé and interviews can also take \"Resumes, LinkedIn and Interviews\"."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given your age and a job offer with a schedule", action: "check whether the job tasks and hours are allowed for your age under federal and state rules", standard: "naming the official page you used" },
    { id: "O2", condition: "For a job in your state", action: "list the papers you need to start work and where to get each one", standard: "including a work permit if your state requires one, ID for the Form I-9 and the Form W-4" },
    { id: "O3", condition: "Given a paystub and your own record of hours", action: "find the gross pay, each deduction and the net pay, and check them against your hours", standard: "with the math correct to the cent" },
    { id: "O4", condition: "Given a workplace situation in your first weeks", action: "choose and describe the professional action a boss expects", standard: "getting at least 4 of 5 situations right" },
    { id: "O5", condition: "Given an unsafe or unfair situation at work", action: "describe the steps to speak up and report it", standard: "naming who you tell first and the official agency to call if it is not fixed" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting ready to work",
      lessons: [
        {
          title: "Which jobs and hours are legal at your age",
          objectives: ["O1"],
          minutes: 6,
          goal: "Check whether a job's tasks and hours are allowed for your age.",
          text: [
            "In the US, the federal law on child labor is the Fair Labor Standards Act (FLSA). States have their own child labor laws too. When the two are different, the stricter rule is the one that applies.",
            "Under federal rules for most non-farm jobs: under 14 you generally cannot work (with a few exceptions on the official page). At 14 and 15 you can work outside school hours, but only up to 3 hours on a school day (Fridays too), 18 hours in a school week, 8 hours on a non-school day and 40 hours in a week with no school, and only between 7 a.m. and 7 p.m. From June 1 to Labor Day the evening limit moves to 9 p.m.",
            "At 16 and 17, federal law does not limit your hours, but you may not do jobs the Department of Labor calls hazardous. Examples: driving on public roads as part of the job (17-year-olds have a narrow exception), running a forklift or other power-driven hoisting equipment, and most power-driven woodworking machines. Your state may add more limits.",
            "Under 18, if a schedule or task looks against these rules, you are not in trouble: the rules are there to protect you, and the employer is the one who must follow them."
          ],
          steps: ["Write your age and the job's tasks and hours.", "Read the federal rules on the Department of Labor's YouthRules or Fact Sheet 43.", "Open your state's child labor page (the Department of Labor lists every state).", "Use the stricter rule. Circle any hour or task that is not allowed."],
          words: [["FLSA", "the Fair Labor Standards Act, the federal law on minimum wage, overtime and child labor."], ["Child labor law", "rules about which jobs and hours are allowed for workers under 18."], ["Hazardous job", "a task the Department of Labor says is too dangerous for workers under 18, such as driving or running a forklift."], ["School week", "a week when school is in session for at least one day."]],
          slides: [
            { title: "Two sets of rules", bullets: ["Federal law (the FLSA) and your state's law", "When they differ, the stricter rule applies"] },
            { title: "Ages 14 and 15 (federal)", bullets: ["3 hours on a school day, 18 hours in a school week", "8 hours on a non-school day, 40 in a no-school week", "7 a.m. to 7 p.m.; 9 p.m. from June 1 to Labor Day"] },
            { title: "Ages 16 and 17 (federal)", bullets: ["No federal limit on hours", "No hazardous jobs: driving, forklifts, many power machines", "Your state may add limits"] },
            { title: "How to check", bullets: ["Write your age, tasks and hours", "Read YouthRules and your state's page", "Circle anything not allowed"] }
          ],
          sources: [SRC.youthRules, SRC.fs43, SRC.stateChildLabor],
          tryIt: "A 15-year-old is offered a grocery job on Tuesday and Thursday from 4 to 8 p.m. in October, and Saturday from 9 a.m. to 3 p.m. On paper, check each shift against the federal rules. Then open your own state's child labor page and write one rule it adds.",
          youCanNow: "check whether a job's tasks and hours are legal for your age, using federal rules and your state's page.",
          quickCheck: [
            { objective: "O1", q: "You are 15. It is October. Your boss schedules you until 8 p.m. on a school night. What is true under federal rules?", options: ["It is fine because it is under 3 hours", "It is too late: 14- and 15-year-olds stop at 7 p.m. outside summer", "It is fine if your parents agree", "Only the state can decide"], answer: 1, why: "Outside June 1 to Labor Day, 14- and 15-year-olds may work only between 7 a.m. and 7 p.m." },
            { objective: "O1", q: "Your state's rule is stricter than the federal rule. Which one do you follow?", options: ["The federal rule, always", "Whichever your boss picks", "Neither; they cancel out", "The stricter state rule"], answer: 3, why: "When federal and state child labor laws differ, the stricter rule applies." }
          ]
        },
        {
          title: "Work permits and first-day papers",
          objectives: ["O2"],
          minutes: 5,
          goal: "List the papers you need to start your job and where to get each one.",
          text: [
            "Federal law does not require a work permit, but many states do for workers under 18. A work permit is sometimes called working papers or an employment certificate. Depending on the state, you may get it from your school, the state labor office or online, and it may need a parent's signature. Check your state's page to see if you need one and how to get it.",
            "On or before your first day, every US employer has you fill in Form I-9. It shows you are allowed to work in the US. You show original ID documents from the list on the form, for example a US passport, or a school ID or state ID together with a Social Security card or birth certificate.",
            "You also fill in Form W-4. It tells your employer how much federal income tax to take out of each paycheck. Your state may have its own tax form too. Ask your boss or a parent if a question confuses you.",
            "Keep it safe: give your Social Security number only on real hiring papers, after you are hired. A real employer never asks you to pay money to get a job or to buy gift cards. That is a scam."
          ],
          steps: ["Check your state's child labor page: do you need a work permit? Who gives it out?", "Find your original ID documents for the Form I-9 (look at the list on the form).", "Read Form W-4 before your first day so you know what it asks.", "Put copies of your papers in one folder. Keep the originals safe at home."],
          words: [["Work permit", "a paper some states require before a person under 18 can work; also called working papers or an employment certificate."], ["Form I-9", "the federal form that shows you are allowed to work in the US; you show ID documents for it."], ["Form W-4", "the federal form that tells your employer how much income tax to hold back from your pay."], ["Original document", "the real paper or card, not a photo or a copy."]],
          slides: [
            { title: "Work permit", bullets: ["Not required by federal law", "Many states require one under 18", "Your state page says who gives it out"] },
            { title: "Form I-9", bullets: ["Shows you can work in the US", "Bring original ID documents from the form's list"] },
            { title: "Form W-4", bullets: ["Tells your employer how much tax to hold back", "Your state may have its own form"] },
            { title: "Stay safe", bullets: ["Share your Social Security number only on real hiring papers", "Never pay money to get a job"] }
          ],
          sources: [SRC.fs43, SRC.stateChildLabor, SRC.i9, SRC.w4, SRC.ftcJobScams],
          tryIt: "Make a \"First Day Papers\" checklist on paper. For your state, write: do I need a work permit, and where do I get it? Which two ID documents will I bring for the Form I-9? Who can help me with the Form W-4?",
          youCanNow: "list the papers you need to start a job, where to get each one, and how to keep your private numbers safe.",
          quickCheck: [
            { objective: "O2", q: "Which form shows your employer you are allowed to work in the US?", options: ["Form I-9", "Form W-4", "A report card", "A paystub"], answer: 0, why: "Form I-9 checks that you are allowed to work in the US; you show original ID documents for it." },
            { objective: "O2", q: "Someone offers you a job if you first pay $50 for \"training materials\". What is this most likely?", options: ["A normal first-day cost", "A Form W-4 fee", "A scam: real employers do not charge you to get a job", "A work permit fee from your state"], answer: 2, why: "Asking you to pay to get a job is a common job-scam sign." }
          ]
        },
        {
          title: "What bosses expect in your first weeks",
          objectives: ["O4"],
          minutes: 5,
          goal: "Choose the professional action a boss expects in common first-job situations.",
          text: [
            "Most first-job bosses care less about experience and more about habits: showing up on time, being ready to work, following instructions, being polite with customers and coworkers, and telling them early when something comes up.",
            "Be on time means ready to work at the start of your shift, not walking in the door. If you are sick or will be late, tell your boss as early as you can, in the way your workplace asks (often a call, not just a text). Do not simply skip a shift.",
            "Keep your phone away while working unless your job allows it. When you do not know how to do something, ask. Repeat back instructions to make sure you understood. Take feedback calmly and say thank you; it means your boss wants you to do well.",
            "Read your schedule every week, and ask for time off early. Being dependable is what gets you more hours, a good reference and your next job."
          ],
          steps: ["Arrive a few minutes early, ready to work.", "If you will be late or sick, tell your boss as early as you can, the way they asked.", "Put your phone away unless the job allows it.", "Ask when you are not sure; repeat back instructions.", "Take feedback calmly and use it."],
          words: [["Shift", "the block of time you are scheduled to work."], ["Call out", "telling your boss ahead of time that you cannot come to a shift."], ["Reference", "a person, often a past boss, who tells a new employer what kind of worker you are."], ["Feedback", "comments on how you are doing and how to do better."]],
          slides: [
            { title: "Habits bosses look for", bullets: ["On time and ready to work", "Following instructions", "Polite to customers and coworkers"] },
            { title: "Late or sick?", bullets: ["Tell your boss as early as you can", "Use the way your workplace asks", "Never just skip a shift"] },
            { title: "On the job", bullets: ["Phone away unless allowed", "Ask when unsure; repeat back instructions", "Take feedback calmly"] },
            { title: "Why it matters", bullets: ["More hours", "A good reference", "Your next job"] }
          ],
          tryIt: "Write what you would say in two situations: (1) you wake up sick two hours before your shift; (2) your manager tells you that you stocked a shelf wrong. Say both out loud as if talking to your boss.",
          youCanNow: "choose and describe what a boss expects when you are late or sick, unsure what to do, or getting feedback.",
          quickCheck: [
            { objective: "O4", q: "Your shift starts at 4 p.m. What does \"on time\" mean?", options: ["Walking in the door at 4:00", "Arriving by 4:15", "Ready to work at 4:00, so arriving a few minutes early", "Any time before your break"], answer: 2, why: "On time means ready to start work when the shift begins." },
            { objective: "O4", q: "You are not sure how to use the cash register. What is the best move?", options: ["Guess and hope it works", "Wait until a customer complains", "Look it up on your phone during the shift", "Ask your supervisor to show you, then repeat it back"], answer: 3, why: "Asking and repeating back instructions shows care and prevents mistakes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready to work",
        questions: [
          { objective: "O1", q: "You are 14. It is a school week. How many hours may you work in total that week under federal rules?", options: ["18", "40", "No limit", "8"], answer: 0, why: "Federal rules allow 14- and 15-year-olds up to 18 hours in a week when school is in session." },
          { objective: "O1", q: "You are 16. Your boss asks you to drive the store van to deliver orders. What is true under federal rules?", options: ["Anyone with a license may do it", "Driving on public roads as part of the job is a hazardous job banned under 17, with only a narrow exception at 17", "It is fine on weekends", "It is fine if you are paid more"], answer: 1, why: "Federal hazardous-occupation rules ban driving on the job under 17, and only allow narrow driving at 17." },
          { objective: "O2", q: "Does federal law require a work permit for a 15-year-old?", options: ["Yes, always", "Only in summer", "No, but many states do, so check your state's page", "Only for restaurant jobs"], answer: 2, why: "The federal rules do not require work permits, but many states do." },
          { objective: "O2", q: "What does Form W-4 do?", options: ["Shows you are allowed to work in the US", "Gives you a work permit", "Lists your hours", "Tells your employer how much federal income tax to hold back"], answer: 3, why: "Form W-4 sets how much federal income tax is withheld from your pay." },
          { objective: "O4", q: "You will be 20 minutes late because the bus broke down. What do you do?", options: ["Tell your boss right away, the way your workplace asks", "Say nothing and walk in late", "Skip the shift", "Post about it online"], answer: 0, why: "Telling your boss early, the way they asked, shows you are dependable." }
        ]
      }
    },
    {
      name: "Chapter 2: Your pay, your rights and your safety",
      lessons: [
        {
          title: "Reading your first paystub",
          objectives: ["O3"],
          minutes: 6,
          goal: "Find the gross pay, each deduction and the net pay on a paystub.",
          text: [
            "A paystub (or pay statement) comes with each paycheck or direct deposit. It shows the pay period, your hours, your pay rate, your gross pay, each deduction and your net pay.",
            "Gross pay is hours times your hourly rate, before anything is taken out. Deductions are amounts taken out. Common ones: federal income tax (based on your Form W-4), Social Security (6.2 percent of your pay) and Medicare (1.45 percent), often shown together as FICA, and in many states a state income tax. Net pay, or take-home pay, is what is left.",
            "Practice only, made-up numbers: 20 hours at $12.00 an hour = $240.00 gross. Social Security: 240 x 0.062 = $14.88. Medicare: 240 x 0.0145 = $3.48. Federal income tax: $6.00. State tax: $3.00. Deductions total $27.36, so net pay = $240.00 - $27.36 = $212.64.",
            "The federal minimum wage is $7.25 an hour. Many states and cities set a higher one, and the higher one applies to you. Check your state's page so you know your rate is legal."
          ],
          steps: ["Find the pay period dates and your hours.", "Check gross pay: hours x rate.", "List each deduction and add them up.", "Check net pay: gross pay minus total deductions.", "If something does not match, ask payroll or your boss politely."],
          words: [["Gross pay", "your pay before anything is taken out: hours x rate."], ["Deduction", "an amount taken out of your pay, such as taxes."], ["Net pay", "take-home pay: gross pay minus deductions."], ["FICA", "the Social Security and Medicare taxes taken from your pay."], ["Pay period", "the dates of work a paycheck covers."]],
          slides: [
            { title: "What is on a paystub", bullets: ["Pay period, hours and pay rate", "Gross pay and each deduction", "Net pay (take-home)"] },
            { title: "Common deductions", bullets: ["Federal income tax (from your W-4)", "Social Security 6.2% and Medicare 1.45% (FICA)", "State income tax in many states"] },
            { title: "Practice: made-up numbers", bullets: ["20 hours x $12.00 = $240.00 gross", "Deductions: $14.88 + $3.48 + $6.00 + $3.00 = $27.36", "Net pay: $240.00 - $27.36 = $212.64"] },
            { title: "Minimum wage", bullets: ["Federal: $7.25 an hour", "Many states and cities pay more; the higher one applies"] }
          ],
          sources: [SRC.irs751, SRC.minWage, SRC.stateMinWage, SRC.w4],
          tryIt: "Practice only: you worked 15 hours at $13.00 an hour. Federal income tax is $5.00 and state tax is $2.00. On paper, work out gross pay, Social Security, Medicare, total deductions and net pay. (Answer: $195.00 gross, $12.09, $2.83, $21.92 total, $173.08 net.)",
          youCanNow: "read a paystub, find the gross pay, each deduction and the net pay, and check the math.",
          quickCheck: [
            { objective: "O3", q: "You worked 10 hours at $14.00 an hour. What is your gross pay?", options: ["$14.00", "$124.00", "$104.00", "$140.00"], answer: 3, why: "Gross pay is hours times rate: 10 x $14.00 = $140.00." },
            { objective: "O3", q: "Gross pay is $300.00 and deductions total $35.00. What is net pay?", options: ["$265.00", "$335.00", "$300.00", "$35.00"], answer: 0, why: "Net pay is gross pay minus deductions: $300.00 - $35.00 = $265.00." }
          ]
        },
        {
          title: "Tracking your hours so your pay is right",
          objectives: ["O3"],
          minutes: 5,
          goal: "Keep your own record of hours and compare it with your paystub.",
          text: [
            "Mistakes happen with pay. The best protection is your own record. Each shift, write the date, the time you started, when your break started and ended, and the time you finished. The Department of Labor has a free timesheet app, or you can use a notebook or your phone's notes.",
            "Add up the hours for the pay period. Remember to take out unpaid meal breaks. Then compare your total with the hours on your paystub.",
            "If the numbers do not match, do not panic and do not accuse. Bring your record to your boss or payroll and ask: \"My notes show 22 hours, and my paystub shows 19. Can you help me check?\" Most mistakes are fixed this way.",
            "If you are not paid for hours you worked and it is not fixed, the Department of Labor's Wage and Hour Division takes complaints. It is free and confidential."
          ],
          steps: ["Each shift: write the date, start time, break times and end time.", "At the end of the pay period, add up your hours (minus unpaid breaks).", "Compare your total with the hours on your paystub.", "If they differ, bring your record and ask politely to check.", "If it is not fixed, contact the Wage and Hour Division."],
          words: [["Timesheet", "a record of the days and hours you worked."], ["Unpaid break", "a meal break when you are fully off duty and not paid."], ["Payroll", "the person or team that pays workers."], ["Wage and Hour Division", "the part of the US Department of Labor that enforces pay and child labor rules."]],
          slides: [
            { title: "Keep your own record", bullets: ["Date, start, break and end times", "Notebook, phone notes or the free DOL timesheet app"] },
            { title: "Compare each pay period", bullets: ["Add your hours, minus unpaid breaks", "Match against the paystub"] },
            { title: "If it does not match", bullets: ["Bring your record and ask politely", "\"Can you help me check?\""] },
            { title: "Still not fixed?", bullets: ["Wage and Hour Division: free and confidential", "1-866-487-9243 (1-866-4-US-WAGE)"] }
          ],
          sources: [SRC.youthRules, SRC.childLabor],
          tryIt: "Practice only: Monday 3:30 to 7:00 p.m., Wednesday 3:30 to 7:00 p.m., Saturday 9:00 a.m. to 3:00 p.m. with a 30-minute unpaid lunch. Add up the hours. Your paystub says 11 hours. Write what you would say to your boss. (Answer: 3.5 + 3.5 + 5.5 = 12.5 hours.)",
          youCanNow: "keep a record of your hours, compare it with your paystub, and ask politely to fix a mistake.",
          quickCheck: [
            { objective: "O3", q: "You worked 9 a.m. to 2 p.m. with a 30-minute unpaid lunch. How many paid hours?", options: ["5", "5.5", "4.5", "4"], answer: 2, why: "9 a.m. to 2 p.m. is 5 hours; minus a 30-minute unpaid break is 4.5 hours." },
            { objective: "O3", q: "Your notes show 22 hours, but your paystub shows 19. What do you do first?", options: ["Quit right away", "Bring your record to your boss or payroll and ask politely to check", "Say nothing", "Post the paystub online"], answer: 1, why: "Most pay mistakes are fixed by showing your record and asking politely." }
          ]
        },
        {
          title: "Your rights and safety: speaking up",
          objectives: ["O5"],
          minutes: 6,
          goal: "Describe the steps to speak up and report an unsafe or unfair situation.",
          text: [
            "Every worker, including teens, has rights. Your employer must give you a safe workplace and pay you at least the legal minimum wage for every hour you work. You should get training before you do a task, and you can ask questions. Your employer cannot punish you for asking about your rights or for making a complaint.",
            "Young workers get hurt more often when they are new, rushed or untrained. Warning signs: being told to use a machine you were not trained on, a task that is banned for your age, no protective gear, slippery floors, hot oil, or being left alone late at night.",
            "Steps to speak up: stop if you are in danger. Tell your supervisor calmly what the problem is. If they do not fix it, tell another manager and a parent, teacher or job-program staff. If it is still not fixed, contact the government: OSHA (1-800-321-6742) for safety, or the Wage and Hour Division (1-866-487-9243) for pay, hours or child labor problems.",
            "If someone is badly hurt, call 911 (or your local emergency number) first."
          ],
          steps: ["If you are in danger, stop and move away.", "Tell your supervisor calmly what is wrong.", "If it is not fixed, tell another manager and a trusted adult.", "Still not fixed: call OSHA for safety or the Wage and Hour Division for pay, hours or child labor.", "Emergency: call 911 first."],
          words: [["OSHA", "the Occupational Safety and Health Administration, the federal agency for workplace safety."], ["Retaliation", "punishing a worker for speaking up or making a complaint; it is not allowed."], ["Protective gear", "items like gloves, goggles or non-slip shoes that keep you safe."]],
          slides: [
            { title: "Your rights", bullets: ["A safe workplace", "At least the legal minimum wage for every hour", "Training, questions, and no punishment for speaking up"] },
            { title: "Warning signs", bullets: ["A machine you were not trained on", "A task banned for your age", "No protective gear, hot oil, slippery floors"] },
            { title: "Speak up in steps", bullets: ["Stop if in danger", "Tell your supervisor, then another manager and a trusted adult", "Not fixed: OSHA or the Wage and Hour Division"] },
            { title: "Numbers to know", bullets: ["Emergency: 911 first", "OSHA: 1-800-321-6742", "Wage and Hour: 1-866-487-9243"] }
          ],
          sources: [SRC.oshaYoung, SRC.youthRules, SRC.fs43],
          tryIt: "You are 16. Your manager tells you to use the meat slicer at a deli, and you have had no training. Write the words you would say to your manager, and who you would tell next if they insist. Save the OSHA and Wage and Hour numbers in your phone.",
          youCanNow: "spot an unsafe or unfair situation and speak up in steps: your supervisor, a trusted adult, then the official agency.",
          quickCheck: [
            { objective: "O5", q: "Your boss tells you to clean a fryer with hot oil and gives you no gloves or training. What do you do first?", options: ["Tell your supervisor calmly that you need training and gear before you do it", "Do it fast so you do not get in trouble", "Call 911", "Quit without saying why"], answer: 0, why: "Speaking up to your supervisor first is the usual first step when no one is hurt yet." },
            { objective: "O5", q: "You told two managers about a pay problem and nothing changed. Who can you contact?", options: ["Nobody; you must accept it", "A stranger online", "The US Department of Labor's Wage and Hour Division", "Your school's sports coach only"], answer: 2, why: "The Wage and Hour Division takes free, confidential complaints about pay, hours and child labor." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Your pay, your rights and your safety",
        questions: [
          { objective: "O3", q: "On a paystub, what is net pay?", options: ["Pay before taxes", "Your hourly rate", "Take-home pay after deductions", "The total tax taken out"], answer: 2, why: "Net pay is what is left after all deductions are taken from gross pay." },
          { objective: "O3", q: "Practice only: gross pay is $200.00. What is the Social Security deduction at 6.2 percent?", options: ["$6.20", "$2.90", "$15.30", "$12.40"], answer: 3, why: "$200.00 x 0.062 = $12.40." },
          { objective: "O3", q: "Why keep your own record of your hours?", options: ["So you can compare it with your paystub and catch mistakes", "Because the law says only you may track hours", "So you can skip breaks", "So you do not need a paystub"], answer: 0, why: "Your own record lets you check that you were paid for every hour you worked." },
          { objective: "O5", q: "A coworker is badly burned. What do you do first?", options: ["Finish your task", "Call 911 (or your local emergency number)", "Call OSHA", "Text your friends"], answer: 1, why: "In an emergency, call 911 first; reports to agencies come later." },
          { objective: "O5", q: "Can your employer punish you for making a safety or pay complaint?", options: ["Yes, if you are under 18", "Yes, if the complaint is wrong", "No, retaliation for speaking up is not allowed", "Only during your first month"], answer: 2, why: "The law protects workers from retaliation for asking about their rights or making a complaint." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Your First Job: Work Permits, Paychecks and What Bosses Expect",
    questions: [
      { objective: "O1", q: "You are 15 and school is out for the summer in July. How late may you work under federal rules?", options: ["7 p.m.", "9 p.m.", "11 p.m.", "Any time"], answer: 1, why: "From June 1 to Labor Day, the evening limit for 14- and 15-year-olds moves to 9 p.m." },
      { objective: "O2", q: "Which papers does every new employee fill in, at any age?", options: ["Form I-9 and Form W-4", "A work permit and a report card", "A paystub and a timesheet", "A driver's license test"], answer: 0, why: "Every new employee fills in Form I-9 and Form W-4; work permits depend on age and state." },
      { objective: "O3", q: "Practice only: 18 hours at $12.50 an hour. What is gross pay?", options: ["$215.00", "$250.00", "$225.00", "$180.00"], answer: 2, why: "18 x $12.50 = $225.00." },
      { objective: "O4", q: "You wake up sick two hours before your shift. What is the professional move?", options: ["Go in sick and say nothing", "Skip the shift and explain next week", "Ask a friend to go instead without telling anyone", "Tell your boss right away, the way your workplace asks"], answer: 3, why: "Telling your boss early, the way they asked, lets them cover the shift and shows you are dependable." },
      { objective: "O5", q: "Which agency handles workplace safety complaints?", options: ["The IRS", "OSHA", "The post office", "Your school district"], answer: 1, why: "OSHA is the federal agency for workplace safety and health." },
      { objective: "O1", q: "You are 14. On a school day, how many hours may you work under federal rules?", options: ["3", "5", "8", "No limit"], answer: 0, why: "14- and 15-year-olds may work up to 3 hours on a school day, including Fridays." },
      { objective: "O1", q: "You are 17. Which job task is banned for you under federal hazardous-job rules?", options: ["Bagging groceries", "Answering phones", "Stocking shelves by hand", "Running a forklift"], answer: 3, why: "Operating power-driven hoisting equipment such as a forklift is a hazardous job banned under 18." },
      { objective: "O2", q: "Where do you find out whether your state requires a work permit?", options: ["Your state's official child labor page (the Department of Labor lists them)", "A social media post", "Any job website", "The back of a paystub"], answer: 0, why: "Work permits are a state rule, so the state's official page is the place to check." },
      { objective: "O2", q: "A new boss texts you before any interview asking for your bank login \"to set up pay\". What is this?", options: ["Normal for direct deposit", "Part of Form W-4", "A warning sign of a scam; never share logins", "Part of Form I-9"], answer: 2, why: "Real employers never need your bank login; asking for it is a scam sign." },
      { objective: "O3", q: "Which deduction is based on what you wrote on Form W-4?", options: ["Medicare", "Social Security", "Your hourly rate", "Federal income tax"], answer: 3, why: "Form W-4 tells your employer how much federal income tax to withhold." },
      { objective: "O3", q: "Practice only: gross pay $240.00, deductions $27.36. What is net pay?", options: ["$212.64", "$267.36", "$222.64", "$213.64"], answer: 0, why: "$240.00 - $27.36 = $212.64." },
      { objective: "O3", q: "Your federal minimum wage is $7.25, but your city's is higher. Which applies to you?", options: ["The federal $7.25", "Whichever your boss chooses", "The higher one", "The lower one"], answer: 2, why: "When state or city minimum wages are higher than the federal rate, the higher one applies." },
      { objective: "O4", q: "Your manager says you stocked a shelf wrong. What is the best response?", options: ["Argue that it is fine", "Say \"Thanks for telling me. Can you show me the right way?\"", "Ignore it", "Complain to customers"], answer: 1, why: "Taking feedback calmly and asking how to fix it is what bosses expect." },
      { objective: "O4", q: "When is it OK to use your phone during your shift?", options: ["Whenever things are slow", "Only when the job allows it", "Whenever customers are not looking", "Any time if you keep working"], answer: 1, why: "Keep your phone away while working unless your workplace allows it." },
      { objective: "O4", q: "You need a Saturday off for a family event next month. What do you do?", options: ["Ask your boss early, the way your workplace asks", "Just do not show up", "Tell a coworker only", "Ask the night before"], answer: 0, why: "Asking for time off early gives your boss time to plan." },
      { objective: "O5", q: "You are 16 and told to use a meat slicer. What should you know?", options: ["It is fine after one try", "It is fine if no customers see", "It is your choice", "Power-driven meat slicers are a hazardous job banned under 18, so speak up"], answer: 3, why: "Federal hazardous-job rules ban workers under 18 from operating power-driven meat slicers." },
      { objective: "O5", q: "What is the usual first step when something at work is unsafe but no one is hurt?", options: ["Call the news", "Post it online", "Tell your supervisor calmly", "Quit without saying anything"], answer: 2, why: "Telling your supervisor gives them a chance to fix it; then go higher if it is not fixed." },
      { objective: "O1", q: "You are 16. How many hours a week may you work under federal law?", options: ["18", "40", "No federal limit, but check your state", "8"], answer: 2, why: "Federal law does not limit hours at 16 and 17, but your state may." },
      { objective: "O4", q: "What does a boss usually care about most in a first-job worker?", options: ["Expensive clothes", "Years of experience", "Knowing the owner", "Showing up on time and being dependable"], answer: 3, why: "First-job bosses look most for dependable habits like being on time and following instructions." },
      { objective: "O5", q: "Your pay is wrong and two managers did not fix it. Which number can you call?", options: ["The Wage and Hour Division, 1-866-487-9243", "OSHA only", "911", "The IRS"], answer: 0, why: "The Wage and Hour Division handles pay, hours and child labor complaints." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 1, 2, 3, 4, 6, 9, 15] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      { name: "Hours and tasks checked", objective: "O1", notYet: "No age rules written, or a shift or task that breaks the rules is not noticed.", meets: "Each shift and task is checked against federal and state rules, with the official page named.", exceeds: "Also notes a state rule that is stricter than the federal rule and how it changes the schedule." },
      { name: "Papers ready", objective: "O2", notYet: "The checklist is missing the Form I-9, Form W-4 or the state work permit question.", meets: "Lists the work permit (if needed), ID for the Form I-9 and Form W-4, and where to get each.", exceeds: "Also lists how to keep private numbers safe and one job-scam sign." },
      { name: "Paystub checked", objective: "O3", notYet: "Gross pay, deductions or net pay are missing or the math is wrong.", meets: "Gross pay, each deduction and net pay are written and the math is right to the cent.", exceeds: "Also compares the paystub hours with a written timesheet and says what to do if they differ." },
      { name: "Boss expectations", objective: "O4", notYet: "Habits are vague, like \"be good\".", meets: "Three clear habits, such as arriving early, calling out early and asking when unsure.", exceeds: "Each habit has a short script of what the learner would say." },
      { name: "Safety plan", objective: "O5", notYet: "No plan, or the plan skips telling a supervisor or naming an agency.", meets: "Names who to tell first, a trusted adult, and OSHA or the Wage and Hour Division with the phone number.", exceeds: "Also says to call 911 first in an emergency and lists warning signs for the learner's own job." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who start a job, internship or summer youth employment placement within 90 days (follow-up survey or program records)",
      "Learners still in that job after 60 days, and the share who get a good reference",
      "Learners who report checking a paystub against their own hours at least once (30-day follow-up)",
      "Youth programs and employers report fewer schedule or task problems that break child labor rules"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to open the Department of Labor and state pages, or printed copies of the state's child labor page",
      "Paper, pen and a calculator (a phone calculator works)",
      "Blank Form W-4 and Form I-9 printouts from irs.gov and uscis.gov to look at (do not fill in real numbers in class)",
      "A made-up sample paystub for practice",
      "About 60 to 75 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Before the course, look up your state's child labor and minimum wage pages and print the key rules; they differ by state and change.",
      "In a summer youth program: take the pre-test together, then do one chapter per session with the \"Try it now\" tasks done in pairs.",
      "Never collect real Social Security numbers, ID copies or real paystubs; use made-up examples.",
      "Role-play the calling-out and feedback scripts in Lesson 3 and the speak-up steps in Lesson 6.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "If a learner describes a real unsafe or illegal job, help them follow the steps in Lesson 6 and involve a parent or guardian."
    ]
  }
};
