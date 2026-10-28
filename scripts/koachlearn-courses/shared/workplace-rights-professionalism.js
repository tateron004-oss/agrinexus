"use strict";

// Koach Learn course: shared -> "Workplace Rights and Professionalism" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Categories: Re-Entry, Youth, Veterans (military), Workforce Development, Undeserved Community. Mixed everyday examples.
// Facts checked 28 Oct 2026 on dol.gov and eeoc.gov (osha.gov blocked automated reading; its pages are linked for students to read).

module.exports = {
  id: "workplace-rights-professionalism",
  category: "Re-Entry",
  name: "Workplace Rights and Professionalism",
  skills: "Showing up on time and ready, Communicating professionally at work, Using your phone the right way at work, Checking your pay and pay stub, Knowing your US worker rights, Reporting a problem the right way",
  outcome: "show up to a new job ready and professional, communicate with a supervisor clearly, check your pay stub against your hours, and know where and how to report unpaid wages, discrimination, harassment or a safety problem.",
  about: [
    "This course is for anyone starting or restarting work in the United States: a young person in a first job, a veteran moving into a civilian workplace, a person coming home from prison, or anyone who wants to feel more sure of themselves at work.",
    "The first chapter is about being someone a supervisor can count on: arriving on time, dressing for the job, speaking and writing clearly, and handling your phone. The second chapter is about your rights: fair pay and overtime, freedom from discrimination and harassment, a safe workplace, and how to read a pay stub.",
    "Each lesson takes about five minutes. Read the lesson, look over the slides, then do the \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. This course explains federal rules in plain words; it is not legal advice. State and city laws can give you more protection, and each lesson shows where to check."
  ],
  finalTask: "Make a one-page \"Work Ready\" plan for a real or practice job: your plan to arrive 10 minutes early (route, backup ride, alarm), what you will wear, a short message to send if you are running late or sick, your phone rule for the shift, a pay check routine (hours log and pay stub check), and the official place you would go to report unpaid wages, discrimination or harassment, and a safety hazard, plus your state's labor office.",
  chapters: [
    {
      name: "Chapter 1: Being professional at work",
      lessons: [
        {
          title: "Being on time and ready to work",
          minutes: 5,
          goal: "Plan your trip and your morning so you arrive early and ready.",
          text: [
            "Being on time is the first thing most supervisors notice. In many jobs, \"on time\" means at your station and ready to start when the shift begins, not walking in the door. Aim to arrive 10 minutes early.",
            "Plan the trip before your first day. Check the bus or train times, or drive the route at the same time of day. Have a backup: a second bus, a ride from a friend, or money for a ride app. Set two alarms.",
            "If you will be late or sick, tell your supervisor BEFORE the shift starts, using the way they asked you to (call, text or an app). Say when you will arrive or when you will be back. Not calling and not showing up (a \"no call, no show\") can cost you the job quickly.",
            "Ready also means rested and prepared: the night before, lay out your clothes, ID, keys, lunch, and any tools or safety gear."
          ],
          steps: ["Find out your exact start time and where to report.", "Plan the route and a backup route.", "Set two alarms and aim to arrive 10 minutes early.", "Save your supervisor's number and the call-out rules.", "Lay out clothes, ID, lunch and gear the night before."],
          words: [["Shift", "the set hours you are scheduled to work."], ["Call out", "telling your supervisor before your shift that you cannot come in or will be late."], ["No call, no show", "missing a shift without telling anyone; often a reason to be let go."]],
          slides: [
            { title: "On time means ready to start", bullets: ["At your station when the shift begins", "Aim to arrive 10 minutes early"] },
            { title: "Plan the trip", bullets: ["Check the route at the same time of day", "Have a backup ride or route", "Set two alarms"] },
            { title: "Running late or sick?", bullets: ["Tell your supervisor before the shift", "Use the way they asked: call, text or app", "Never \"no call, no show\""] },
            { title: "The night before", bullets: ["Clothes, ID, keys and lunch ready", "Tools and safety gear packed", "Get some rest"] }
          ],
          tryIt: "Pick a real or practice job address. Plan your route there for a 7 am start, choose a backup way to get there, and write the exact text you would send your supervisor if your bus broke down.",
          youCanNow: "plan to arrive early and ready, and tell your supervisor the right way if you will be late or sick."
        },
        {
          title: "Dress and communication at work",
          minutes: 5,
          goal: "Dress for the job and speak and write to a supervisor clearly and politely.",
          text: [
            "Dress for the job you have. Ask before your first day: \"Is there a uniform or dress code?\" A warehouse may need steel-toe boots; an office may want business casual; a kitchen needs closed shoes and hair tied back. Clean, neat and safe is always right.",
            "Talk with respect to everyone: supervisors, coworkers and customers. Listen to the whole instruction, repeat it back if it is long (\"So you want the pallets moved to bay 3 before lunch?\"), and ask when you are not sure. Asking is better than guessing and doing it wrong.",
            "If you disagree or make a mistake, stay calm and speak privately. Own a mistake quickly: say what happened, what you did to fix it, and what you will do next time. This builds trust.",
            "Written messages at work should be short and clear: a greeting, what you need, and your name. Avoid slang, all capitals and emojis with a supervisor until you know what is normal there."
          ],
          steps: ["Ask about the dress code before day one.", "Listen to the whole instruction.", "Repeat long instructions back to check.", "Ask when you are not sure.", "Own mistakes quickly and privately.", "Keep work messages short: greeting, need, name."],
          words: [["Dress code", "the rules for what to wear at a job."], ["Business casual", "neat clothes that are less formal than a suit, such as slacks and a collared shirt."]],
          slides: [
            { title: "Dress for the job", bullets: ["Ask about the uniform or dress code", "Clean, neat and safe is always right", "Some jobs need boots or hair tied back"] },
            { title: "Listen and check", bullets: ["Hear the whole instruction", "Repeat it back if it is long", "Ask instead of guessing"] },
            { title: "Mistakes and disagreements", bullets: ["Stay calm and speak privately", "Say what happened and how you fixed it", "Say what you will do next time"] },
            { title: "Work messages", bullets: ["Greeting, what you need, your name", "No slang, all capitals or emojis at first"] }
          ],
          tryIt: "Write a short text to a supervisor asking a question about tomorrow's shift. Then write a two-sentence message owning a small mistake, such as putting stock in the wrong aisle, and saying how you fixed it.",
          youCanNow: "dress for the job and communicate with a supervisor clearly and respectfully, including owning a mistake."
        },
        {
          title: "Phone use at work",
          minutes: 4,
          goal: "Follow a simple phone rule that keeps you safe and focused at work.",
          text: [
            "Many people lose jobs over phones. Learn your workplace's phone policy on day one. Some jobs let you keep it in a pocket on silent; some ask you to leave it in a locker; some ban phones on the floor because they are a safety risk near machines, vehicles or food.",
            "A simple rule that works almost everywhere: phone on silent and away while you work; check it only on breaks and in break areas. Never use it while driving a forklift, using a machine, or serving a customer.",
            "If you are waiting for an important call, such as a family emergency or a call from your parole officer, a doctor or your child's school, tell your supervisor at the start of the shift and ask how they want you to handle it.",
            "Be careful what you post. Do not post photos of the workplace, customers or coworkers, or complaints about them, without knowing the rules. It can break company policy and privacy rules."
          ],
          steps: ["Ask about the phone policy on your first day.", "Set your phone to silent and put it away while working.", "Check it on breaks in break areas.", "Tell your supervisor ahead if you must take an important call.", "Do not post photos of the workplace or people without permission."],
          words: [["Phone policy", "the workplace's rules for when and where you can use a phone."], ["Break", "a set rest time during a shift."]],
          slides: [
            { title: "Know the phone policy", bullets: ["Ask on day one", "Pocket, locker, or not on the floor at all"] },
            { title: "A rule that works", bullets: ["Silent and away while working", "Check it on breaks only", "Never near machines, vehicles or while serving"] },
            { title: "Expecting an important call?", bullets: ["Tell your supervisor at the start", "Ask how they want you to handle it"] },
            { title: "Careful what you post", bullets: ["No photos of customers or coworkers", "No posting work problems without knowing the rules"] }
          ],
          tryIt: "Write your personal phone rule for your next shift in one sentence. Then write what you would say to a supervisor if you are waiting for an important call from your child's school.",
          youCanNow: "follow a phone rule that keeps you safe and focused, and handle an important call the right way."
        }
      ],
      check: {
        title: "Knowledge Check 1: Being professional at work",
        questions: [
          { q: "Your shift starts at 7:00. When should you plan to arrive?", options: ["At 7:00 exactly", "At 7:10", "About 6:50, ready to start at 7:00", "Whenever the bus comes"], answer: 2, why: "Arriving about 10 minutes early lets you be ready at your station on time." },
          { q: "You wake up sick. What do you do?", options: ["Tell your supervisor before the shift, the way they asked you to", "Do not go and do not call", "Text a coworker and hope they pass it on", "Call after the shift is over"], answer: 0, why: "Telling your supervisor before the shift is professional; a no call, no show can cost you the job." },
          { q: "Your supervisor gives you a long instruction. What is a good move?", options: ["Nod and guess later", "Ask a coworker to do it", "Ignore it", "Repeat it back to check you understood"], answer: 3, why: "Repeating it back catches mistakes before they happen." },
          { q: "You put stock on the wrong shelf. What do you do?", options: ["Hide it", "Tell your supervisor what happened and how you fixed it", "Blame a coworker", "Quit"], answer: 1, why: "Owning a mistake quickly builds trust." },
          { q: "Which is the best phone habit at most jobs?", options: ["Phone on loud in your hand", "Answer calls while driving a forklift", "Silent and away while working, check on breaks", "Post photos of customers"], answer: 2, why: "This keeps you focused and safe and fits most phone policies." }
        ]
      }
    },
    {
      name: "Chapter 2: Your rights at work in the US",
      lessons: [
        {
          title: "Minimum wage, overtime and your pay stub",
          minutes: 6,
          goal: "Check that your pay is right by comparing your hours to your pay stub.",
          text: [
            "The federal Fair Labor Standards Act (FLSA) sets a minimum wage and overtime pay for most workers. The US Department of Labor's Wage and Hour Division says the federal minimum wage is $7.25 an hour. Many states and cities set a higher minimum. When they do, the employer must pay the higher one. Check your state on dol.gov.",
            "Overtime: unless your job is exempt, you must get at least one and a half times your regular rate for hours over 40 in a workweek. A workweek is a fixed seven-day period, and hours cannot be averaged across two weeks. Weekend or holiday work is not overtime by itself under federal law. Some states have extra overtime rules.",
            "Your pay stub shows your hours, pay rate, gross pay (before deductions), deductions such as taxes, and net pay (what you take home). Federal law requires employers to keep accurate records of hours and pay, but it does not require pay stubs; many states do. Keep your own log of the days and hours you work and compare it with every stub.",
            "If your pay is wrong, ask payroll or your supervisor politely first, with your hours log. If it is not fixed, you can contact the Wage and Hour Division or your state labor office. The FLSA makes it illegal to fire or punish you for filing a wage complaint, spoken or written."
          ],
          steps: ["Write down the time you start and stop each day, and your breaks.", "When you get paid, find the hours, rate, gross pay, deductions and net pay on the stub.", "Check the hours match your log and the rate is what you were promised.", "Check overtime: hours over 40 in the week paid at 1.5 times your rate (unless exempt).", "If something is wrong, ask payroll with your log; if not fixed, contact the Wage and Hour Division or your state labor office."],
          words: [["Minimum wage", "the lowest hourly pay the law allows."], ["Overtime", "extra pay, at least 1.5 times your rate, for hours over 40 in a workweek for most hourly workers."], ["Exempt", "a job, often salaried and managerial, that the law does not require to get overtime."], ["Gross pay", "your pay before taxes and deductions."], ["Net pay", "what you take home after deductions."]],
          slides: [
            { title: "Minimum wage", bullets: ["Federal minimum: $7.25 an hour (dol.gov)", "Many states and cities set more", "The employer must pay the higher one"] },
            { title: "Overtime", bullets: ["Over 40 hours in a workweek", "At least 1.5 times your regular rate", "Unless your job is exempt"] },
            { title: "Read your pay stub", bullets: ["Hours and rate", "Gross pay, deductions, net pay", "Compare with your own hours log"] },
            { title: "Pay is wrong?", bullets: ["Ask payroll first, with your log", "Then the Wage and Hour Division or state labor office", "Firing or punishing you for a wage complaint is illegal"] }
          ],
          sources: [
            { name: "US Department of Labor: Minimum wage", url: "https://www.dol.gov/agencies/whd/minimum-wage" },
            { name: "US Department of Labor: State minimum wage laws", url: "https://www.dol.gov/agencies/whd/minimum-wage/state" },
            { name: "US Department of Labor: Overtime pay", url: "https://www.dol.gov/agencies/whd/overtime" },
            { name: "US Department of Labor: FLSA questions and answers (pay stubs and records)", url: "https://www.dol.gov/agencies/whd/flsa/faq" },
            { name: "US Department of Labor: Fact Sheet 77A, retaliation under the FLSA", url: "https://www.dol.gov/agencies/whd/fact-sheets/77a-flsa-prohibiting-retaliation" }
          ],
          tryIt: "Practice: you earn $16 an hour and worked 44 hours this week (not exempt). Work out the pay: 40 x $16, plus 4 hours x $24. Then look up your state's minimum wage on the dol.gov state page and write it down.",
          youCanNow: "check your hours and pay against your pay stub, spot missing overtime, and know where to go if your pay is wrong."
        },
        {
          title: "Discrimination and harassment, and how to report them",
          minutes: 5,
          goal: "Recognize workplace discrimination and harassment and know the steps to report it.",
          text: [
            "Federal law, enforced by the US Equal Employment Opportunity Commission (EEOC), makes it illegal to treat workers or applicants worse because of race, color, religion, sex (including sexual orientation, transgender status and pregnancy), national origin, age (40 or older), disability or genetic information.",
            "Harassment is unwelcome conduct based on one of these traits. It is illegal when putting up with it becomes a condition of keeping the job, or when it is severe or frequent enough to make the workplace hostile or abusive. Examples: repeated slurs, unwanted touching, or threats.",
            "How to report: write down what happened, when, where, who was there, and save messages. Report it using your employer's complaint process (a supervisor, manager or HR). You can also file a charge with the EEOC: online through the EEOC Public Portal, in person at an EEOC office, or start by calling 1-800-669-4000. In most cases you must file within 180 calendar days, or 300 days if a state or local agency enforces a similar law. Filing is free and you do not need a lawyer.",
            "It is illegal for an employer to punish you (retaliate) for reporting discrimination, filing a charge, or helping in an investigation. Your state may have its own fair employment agency and extra protections."
          ],
          steps: ["Write down what happened: date, time, place, people, words or actions.", "Save texts, emails and photos.", "Report through your employer's process: supervisor, manager or HR.", "If it is not fixed, contact the EEOC (online portal, an office, or 1-800-669-4000) or your state agency.", "Act quickly: the deadline is usually 180 days, or 300 in many states."],
          words: [["Discrimination", "treating someone worse because of a protected trait such as race, sex, age or disability."], ["Harassment", "unwelcome conduct based on a protected trait that is severe or frequent, or that you must accept to keep your job."], ["Retaliation", "punishing someone for reporting a problem or taking part in an investigation."], ["EEOC", "the US Equal Employment Opportunity Commission, the federal agency that enforces laws against job discrimination."]],
          slides: [
            { title: "Protected traits (federal)", bullets: ["Race, color, religion, national origin", "Sex, including pregnancy, sexual orientation, gender identity", "Age 40+, disability, genetic information"] },
            { title: "What harassment is", bullets: ["Unwelcome conduct based on a protected trait", "Severe or frequent, or a condition of the job", "Slurs, unwanted touching, threats"] },
            { title: "How to report", bullets: ["Write it down and save messages", "Use your employer's complaint process", "EEOC: online portal, an office, or 1-800-669-4000"] },
            { title: "Deadlines and protection", bullets: ["Usually 180 days, or 300 in many states", "Filing is free; no lawyer needed", "Retaliation is illegal"] }
          ],
          sources: [
            { name: "EEOC: How to file a charge of employment discrimination", url: "https://www.eeoc.gov/how-file-charge-employment-discrimination" },
            { name: "EEOC: Harassment", url: "https://www.eeoc.gov/harassment" }
          ],
          tryIt: "Read this case: a coworker makes jokes about a new employee's religion every day, and the supervisor laughs. Write the first three things the new employee should do, in order, and where they could go if the company does nothing.",
          youCanNow: "recognize discrimination and harassment, write down what happened, and report it inside the company or to the EEOC."
        },
        {
          title: "A safe workplace and where to check your state's rules",
          minutes: 5,
          goal: "Know your right to a safe job and find your state's labor office.",
          text: [
            "The Occupational Safety and Health Administration (OSHA) is the federal agency for workplace safety. Employers must provide a workplace free of serious known hazards, follow safety rules, provide required safety gear, and train you about hazards in a way you understand.",
            "You have the right to report a hazard or an injury, to ask OSHA to inspect your workplace, and to see records of work injuries. You can file a safety complaint with OSHA online, by phone at 1-800-321-OSHA (6742), by mail, or at an OSHA office, and you can ask that your name not be shared with your employer.",
            "It is illegal to punish you for raising a safety concern or reporting an injury. If you are punished, file a retaliation (whistleblower) complaint with OSHA quickly: under federal law you have only 30 days.",
            "State laws can add more: a higher minimum wage, paid sick leave, meal and rest breaks, pay stub rules and more. Many states run their own OSHA-approved safety plans. Find your state labor office through the Department of Labor's list of state labor offices, and check your state's own pages."
          ],
          steps: ["Report a hazard to your supervisor first, if it is safe to do so.", "Write down what you saw and when.", "If it is not fixed, file a complaint with OSHA online or at 1-800-321-6742.", "If you are punished for reporting, file a whistleblower complaint within 30 days.", "Look up your state labor office for extra state rights."],
          words: [["OSHA", "the Occupational Safety and Health Administration, the federal agency that sets and enforces workplace safety rules."], ["Hazard", "something at work that could hurt you, such as a wet floor, loud noise or an unguarded machine."], ["Whistleblower complaint", "a complaint that you were punished for reporting a problem."]],
          slides: [
            { title: "Your employer must", bullets: ["Keep the workplace free of serious known hazards", "Provide required safety gear", "Train you in a way you understand"] },
            { title: "Your safety rights", bullets: ["Report hazards and injuries", "Ask OSHA to inspect; ask to keep your name private", "OSHA: osha.gov or 1-800-321-6742"] },
            { title: "Punished for speaking up?", bullets: ["Retaliation is illegal", "File a whistleblower complaint within 30 days"] },
            { title: "Your state may add more", bullets: ["Higher minimum wage, sick leave, breaks", "Pay stub rules and state safety plans", "Find your state labor office on dol.gov"] }
          ],
          sources: [
            { name: "OSHA: File a safety and health complaint", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Workers' rights", url: "https://www.osha.gov/workers" },
            { name: "OSHA Whistleblower Protection Program: file a retaliation complaint", url: "https://www.whistleblowers.gov/complaint_page.html" },
            { name: "US Department of Labor: State labor offices", url: "https://www.dol.gov/agencies/whd/state/contacts" }
          ],
          tryIt: "Final task: make your one-page \"Work Ready\" plan. Include your arrival plan, clothes, late or sick message, phone rule, pay check routine, and where you would report unpaid wages (dol.gov), discrimination or harassment (eeoc.gov), and a safety hazard (osha.gov), plus your own state labor office's website.",
          youCanNow: "name your right to a safe workplace, report a hazard the right way, and find your state's extra rules."
        }
      ],
      check: {
        title: "Knowledge Check 2: Your rights at work in the US",
        questions: [
          { q: "Your state's minimum wage is higher than the federal $7.25. Which must your employer pay?", options: ["The federal $7.25", "The higher state rate", "Whatever they choose", "The average of the two"], answer: 1, why: "Employers must follow both laws, so the higher rate applies." },
          { q: "You are an hourly, non-exempt worker and worked 45 hours this week. What should you see?", options: ["5 hours of overtime at least 1.5 times your rate", "No overtime because it was one week", "Overtime only if you worked on Sunday", "A day off instead of pay"], answer: 0, why: "Hours over 40 in a workweek earn at least time and a half." },
          { q: "Which agency enforces federal laws against job discrimination?", options: ["OSHA", "The IRS", "The DMV", "The EEOC"], answer: 3, why: "The US Equal Employment Opportunity Commission handles discrimination charges." },
          { q: "What should you do FIRST if you are being harassed at work?", options: ["Post about it online", "Quit with no notice", "Write down what happened and save messages", "Wait a year"], answer: 2, why: "A written record helps every next step, inside or outside the company." },
          { q: "You reported a broken guard on a machine and were cut from the schedule the next week. What can you do?", options: ["Nothing", "File a whistleblower complaint with OSHA, within 30 days", "Wait six months, then complain", "Only post about it"], answer: 1, why: "Punishing you for a safety report is illegal, and the federal deadline is short." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Workplace Rights and Professionalism",
    questions: [
      { q: "In many jobs, \"on time\" means:", options: ["Walking in the door at the start time", "At your station and ready when the shift begins", "Within 15 minutes of the start time", "Whenever your ride arrives"], answer: 1, why: "Be ready to work when the shift starts, so plan to arrive early." },
      { q: "What is a \"no call, no show\"?", options: ["Missing a shift without telling anyone", "A day off you asked for", "A phone policy", "A paid holiday"], answer: 0, why: "It is one of the fastest ways to lose a job." },
      { q: "A good backup plan for getting to work is:", options: ["Hoping for the best", "Leaving later", "A second bus or a friend who can give you a ride", "Calling in every time the bus is late"], answer: 2, why: "A backup route keeps you on time when something goes wrong." },
      { q: "You are not sure what to wear on day one. You:", options: ["Wear whatever is comfortable", "Copy what you see on TV", "Wear sandals to be safe", "Ask about the uniform or dress code"], answer: 3, why: "Asking avoids mistakes, and some jobs need safety shoes." },
      { q: "Which work message to a supervisor is best?", options: ["\"YO WHERE DO I GO\"", "\"Hi Ms. Lee, which entrance should I use tomorrow? Thanks, Sam\"", "A row of emojis", "No message; just guess"], answer: 1, why: "A greeting, the need and your name is clear and polite." },
      { q: "A coworker disagrees with you loudly in front of customers. You:", options: ["Stay calm and talk privately later", "Shout back", "Post about it", "Walk off the job"], answer: 0, why: "Calm, private talk solves problems without making them worse." },
      { q: "When is it NEVER OK to use your phone at work?", options: ["On your break", "In the break room", "Before your shift", "While driving a forklift or using a machine"], answer: 3, why: "Phones near vehicles and machines cause serious injuries." },
      { q: "You expect an important call from your child's school. You:", options: ["Keep the phone in your hand all shift", "Tell your supervisor at the start and ask how to handle it", "Leave without saying anything", "Ignore it"], answer: 1, why: "Telling your supervisor ahead shows respect and avoids trouble." },
      { q: "What is the federal minimum wage according to the Department of Labor?", options: ["$5.15 an hour", "$10.00 an hour", "$7.25 an hour", "$15.00 an hour"], answer: 2, why: "The federal minimum is $7.25; many states and cities set more." },
      { q: "Federal overtime starts after how many hours in a workweek?", options: ["40", "35", "45", "50"], answer: 0, why: "Covered, non-exempt workers get overtime for hours over 40 in a workweek." },
      { q: "You worked 30 hours one week and 50 the next. Under federal law:", options: ["They average out, so no overtime", "You get 10 hours of overtime for the second week", "You get 20 hours of overtime", "Overtime only counts on holidays"], answer: 1, why: "Each workweek stands alone; hours cannot be averaged across weeks." },
      { q: "On a pay stub, \"net pay\" is:", options: ["Pay before taxes", "The tax amount", "Your hourly rate", "What you take home after deductions"], answer: 3, why: "Net pay is what is left after taxes and other deductions." },
      { q: "Your pay stub shows 32 hours but your log says 38. What is the best first step?", options: ["Ask payroll politely and show your hours log", "Say nothing", "Quit", "Take items from the store to make up for it"], answer: 0, why: "Most errors are fixed fastest by asking payroll with your record." },
      { q: "Which is a protected trait under federal job discrimination law?", options: ["Favorite sports team", "Disability", "Shoe size", "Music taste"], answer: 1, why: "Disability is protected, along with race, color, religion, sex, national origin, age 40+ and genetic information." },
      { q: "How can you start an EEOC charge?", options: ["Only by hiring a lawyer", "Only by fax", "Online through the EEOC Public Portal, at an office, or by calling 1-800-669-4000", "By posting on social media"], answer: 2, why: "Filing is free and can be started online, in person or by phone." },
      { q: "In most cases, how long do you have to file an EEOC charge?", options: ["7 days", "Five years", "There is no deadline", "180 days, or 300 days if a state or local agency enforces a similar law"], answer: 3, why: "Those are the EEOC's standard time limits; act quickly." },
      { q: "Your boss cuts your hours after you report harassment. This may be:", options: ["Normal", "Retaliation, which is illegal", "A promotion", "Required by law"], answer: 1, why: "Punishing someone for reporting is retaliation." },
      { q: "Which agency handles workplace safety complaints?", options: ["OSHA", "The EEOC", "The Post Office", "The FCC"], answer: 0, why: "The Occupational Safety and Health Administration handles safety." },
      { q: "When you file a safety complaint with OSHA, you can:", options: ["Only file if your boss agrees", "Never stay anonymous", "Ask that your name not be shared with your employer", "Only file in English"], answer: 2, why: "OSHA lets workers ask for their name to be kept private." },
      { q: "Where can you find extra rights your state gives, like paid sick leave or pay stub rules?", options: ["A social media post", "Your state labor office, found on the Department of Labor's list", "A coworker's guess", "Nowhere; only federal rules exist"], answer: 1, why: "State laws can add protections; the state labor office is the official place to check." }
    ]
  }
};
