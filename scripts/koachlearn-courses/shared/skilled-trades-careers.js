"use strict";

// Koach Learn course: shared -> "Starting a Career in the Skilled Trades" (owner's request, 28 October 2026: life, people and career skills beyond AI).
// Categories: Re-Entry, Youth, Veterans (military), Workforce Development, Undeserved Community. Mixed everyday examples.
// Facts checked 28 Oct 2026 on apprenticeship.gov, bls.gov/ooh, epa.gov, tpr.fmcsa.dot.gov, va.gov, eeoc.gov and irs.gov. No pay figures are given; students look them up on bls.gov/ooh.

module.exports = {
  id: "skilled-trades-careers",
  category: "Re-Entry",
  name: "Starting a Career in the Skilled Trades",
  skills: "Comparing skilled trades, Looking up pay and training on official sites, Understanding apprenticeships and pre-apprenticeships, Knowing license and certification steps, Working safely with tools, Finding and applying to a program",
  outcome: "choose a skilled trade that fits you, look up its real pay and training path on official sites, find an apprenticeship or pre-apprenticeship near you, and make a step-by-step plan to apply, including second-chance options if you have a record.",
  about: [
    "Skilled trades are hands-on careers such as electrician, plumber, HVAC technician, welder, solar installer, carpenter and truck driver. Many let you earn money while you learn, without a four-year college degree.",
    "This course is for young people choosing a path, veterans moving into civilian work, people coming home from prison, and anyone ready to work with their hands. You will compare trades, learn how apprenticeships and licenses work, learn basic tool and safety habits, and build a plan to get into a program.",
    "Each lesson takes about five minutes. Read the lesson, look over the slides, then do the \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Rules, pay and licenses differ by state and change over time, so every lesson shows you the official place to check."
  ],
  finalTask: "Make a one-page \"Trade Start Plan\" for one trade: what the work is like, its median pay and job outlook from bls.gov/ooh, the license or certification it needs in your state, two apprenticeship or pre-apprenticeship programs near you from apprenticeship.gov or a local job center, the safety gear and basic tools you will need, any second-chance resources that apply to you, and your first three steps with dates.",
  chapters: [
    {
      name: "Chapter 1: Choosing a trade",
      lessons: [
        {
          title: "What the skilled trades are",
          minutes: 5,
          goal: "Describe seven common trades and pick two that fit you.",
          text: [
            "Electricians install and repair wiring, lights and power in homes and buildings. Plumbers install and fix pipes, water heaters and drains. HVAC technicians work on heating, ventilation, air conditioning and refrigeration. Welders join metal with heat for buildings, ships, pipelines and factories.",
            "Solar installers put solar panels on roofs and on the ground and connect them. Carpenters build and repair frames, floors, stairs and cabinets. CDL truck drivers move goods across town or across the country with a commercial driver's license.",
            "Think about what fits you. Do you like working outside or inside? High up, or on the ground? Do you like math and figuring out problems? Can you be away from home for days, as long-haul drivers often are? Do you like fixing things for customers or building new things? Your answers point to a trade.",
            "Many skills carry over. Military mechanics and logistics, sports discipline and teamwork, and work or training programs done while incarcerated (maintenance, kitchen, building trades) all count."
          ],
          words: [["Skilled trade", "a job that needs special hands-on training, such as electrician or welder."], ["HVAC", "heating, ventilation and air conditioning."], ["CDL", "commercial driver's license, needed to drive large trucks and buses."]],
          slides: [
            { title: "Inside buildings", bullets: ["Electrician: wiring, lights and power", "Plumber: pipes, water heaters, drains", "HVAC: heating, cooling, refrigeration"] },
            { title: "Building and moving", bullets: ["Welder: joins metal with heat", "Solar installer: puts in and connects panels", "Carpenter: frames, floors, stairs, cabinets", "CDL driver: moves goods by truck"] },
            { title: "What fits you?", bullets: ["Inside or outside? High up or on the ground?", "Math and problem solving?", "Home every night, or away for days?"] },
            { title: "Your skills carry over", bullets: ["Military mechanics and logistics", "Sports discipline and teamwork", "Work and training programs while incarcerated"] }
          ],
          tryIt: "Answer the \"What fits you?\" questions in writing. Then pick the two trades that match your answers best and write one sentence for each saying why.",
          youCanNow: "describe common skilled trades and pick two that fit how you like to work."
        },
        {
          title: "Checking pay and training on official sites",
          minutes: 5,
          goal: "Look up a trade's pay, training and job outlook in the Occupational Outlook Handbook.",
          text: [
            "Do not trust pay numbers from ads or social media. The US Bureau of Labor Statistics publishes the Occupational Outlook Handbook at bls.gov/ooh. It is free and is updated regularly.",
            "Each job has a profile with tabs. \"Pay\" shows the median pay, meaning half of workers earn more and half earn less. \"How to Become One\" shows the training, such as an apprenticeship, and whether a license is needed. \"Job Outlook\" shows whether the number of jobs is expected to grow. \"State and Area Data\" shows pay where you live.",
            "For example, the electricians profile says most electricians learn in a 4- or 5-year apprenticeship, and most states require electricians to be licensed. Starting pay as an apprentice is lower than the median and usually rises as you gain skills.",
            "AI assistants can help explain the words on these pages, but take the numbers from the official page, not from the AI."
          ],
          steps: ["Go to bls.gov/ooh.", "Search for the trade, for example \"electricians\" or \"plumbers\".", "Open the profile and read the Pay tab: write down the median pay and the year.", "Read How to Become One: write down the training and license.", "Read Job Outlook and State and Area Data."],
          words: [["Median pay", "the middle pay: half of workers earn more and half earn less."], ["Job outlook", "whether the number of jobs in a field is expected to grow or shrink."], ["BLS", "the US Bureau of Labor Statistics, the government office that collects job and pay data."]],
          slides: [
            { title: "Use the official handbook", bullets: ["bls.gov/ooh: free and updated regularly", "Not ads or social media posts"] },
            { title: "Read each profile", bullets: ["Pay: the median pay", "How to Become One: training and license", "Job Outlook and State and Area Data"] },
            { title: "Example: electricians", bullets: ["Most learn in a 4- or 5-year apprenticeship", "Most states require a license", "Apprentice pay usually rises with skill"] },
            { title: "AI can explain, not supply numbers", bullets: ["Ask AI to explain hard words", "Take numbers from the official page"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Occupational Outlook Handbook", url: "https://www.bls.gov/ooh/" },
            { name: "Occupational Outlook Handbook: Electricians", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Look up your two trades from Lesson 1 on bls.gov/ooh. For each, write the median pay and the year it is for, the usual training, whether a license is needed, and the job outlook.",
          youCanNow: "find a trade's real median pay, training path and job outlook on the official handbook."
        },
        {
          title: "Apprenticeships, pre-apprenticeships and licenses",
          minutes: 6,
          goal: "Explain how apprenticeships, pre-apprenticeships and licenses work for your trade.",
          text: [
            "A Registered Apprenticeship is a paid job with training. The US Department of Labor's apprenticeship.gov says apprentices get paid work experience with a mentor, a wage that goes up as their skills grow, and a nationally recognized credential at the end. You learn on the job and in classes.",
            "A pre-apprenticeship gets you ready to enter an apprenticeship. It can last a few weeks to a few months and may or may not pay. It often covers basic math, tool use, safety, and job readiness, and it can help you get accepted. Many reentry programs and community colleges run them.",
            "Licenses and certificates differ by trade and state. Electricians and plumbers usually need a state or local license after their training. HVAC technicians who handle refrigerants must have EPA Section 608 certification. New truck drivers must finish entry-level driver training with a provider on the federal Training Provider Registry before taking the CDL tests. Welders and solar installers often earn industry certifications that employers ask for.",
            "Veterans: the VA says GI Bill benefits can be used for many apprenticeships and on-the-job training, and Helmets to Hardhats connects veterans with construction apprenticeships."
          ],
          words: [["Registered Apprenticeship", "a paid job with training, approved by the Department of Labor or a state, that ends with a recognized credential."], ["Pre-apprenticeship", "a short program that prepares you to get into an apprenticeship."], ["License", "official permission from a state or city to do certain work, such as electrical work."], ["Certification", "proof that you passed a test or training for a skill."]],
          slides: [
            { title: "Registered Apprenticeship", bullets: ["A paid job with a mentor", "Wages rise as your skills grow", "A nationally recognized credential"] },
            { title: "Pre-apprenticeship", bullets: ["A few weeks to a few months", "Math, tools, safety, job readiness", "Helps you get into an apprenticeship"] },
            { title: "Licenses and certificates", bullets: ["Electricians, plumbers: state or local license", "HVAC: EPA Section 608 for refrigerants", "CDL: entry-level training with a registered provider"] },
            { title: "For veterans", bullets: ["GI Bill can pay for many apprenticeships", "Helmets to Hardhats: construction careers"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Career seekers", url: "https://www.apprenticeship.gov/career-seekers" },
            { name: "Apprenticeship.gov: What is a pre-apprenticeship?", url: "https://www.apprenticeship.gov/help/what-pre-apprenticeship" },
            { name: "EPA: Section 608 technician certification", url: "https://www.epa.gov/section608/section-608-technician-certification-0" },
            { name: "FMCSA Training Provider Registry: who needs entry-level driver training", url: "https://tpr.fmcsa.dot.gov/Drivers/Applicability" },
            { name: "VA: On-the-job training and apprenticeships", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "For your top trade, write down: is it usually learned through an apprenticeship? What license or certification does it need? Then search \"[your state] [trade] license\" and find the official state board page (look for an address ending in .gov).",
          youCanNow: "explain how apprenticeships, pre-apprenticeships and licenses work and find your state's license page."
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing a trade",
        questions: [
          { q: "Which trade works on heating, cooling and refrigeration?", options: ["Carpenter", "Welder", "HVAC technician", "Solar installer"], answer: 2, why: "HVAC stands for heating, ventilation and air conditioning." },
          { q: "Where is the best place to look up a trade's real pay?", options: ["A social media ad", "bls.gov/ooh", "A friend's guess", "Any AI chat answer"], answer: 1, why: "The Occupational Outlook Handbook is the official, free source." },
          { q: "What does \"median pay\" mean?", options: ["The highest pay in the trade", "Starting pay on day one", "The pay after taxes", "The middle: half earn more and half earn less"], answer: 3, why: "Median is the middle value." },
          { q: "What is a Registered Apprenticeship?", options: ["A paid job with training that ends with a recognized credential", "An unpaid internship", "A four-year college degree", "A single safety class"], answer: 0, why: "Apprentices earn while they learn and get a credential." },
          { q: "An HVAC technician will handle refrigerants. What do they need?", options: ["A CDL", "EPA Section 608 certification", "A welding certificate", "Nothing"], answer: 1, why: "The EPA requires technicians who could release refrigerants to be certified." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting in and staying safe",
      lessons: [
        {
          title: "Tools and safety on the job",
          minutes: 5,
          goal: "Name the basic safety gear and habits every trade expects.",
          text: [
            "Every trade expects you to work safely from day one. Common personal protective equipment (PPE) includes safety glasses, a hard hat, gloves, steel-toe or safety-toe boots, hearing protection and high-visibility vests. Welders also need a welding helmet and flame-resistant clothing. Workers on roofs need fall protection.",
            "Basic habits: inspect your tools before use; keep your area clean; never remove a guard from a machine; use the right ladder and keep three points of contact; and lift with your legs, not your back. Electricians and maintenance workers must follow lockout/tagout rules, which keep machines and power off while someone works on them.",
            "Many employers and unions ask new workers to take an OSHA 10-hour safety course. It is a training card, not a license, but it shows you know the basics.",
            "Your employer must provide required safety gear and training. Ask your program which tools you must buy yourself; apprentices often start with a small set of hand tools, such as a tape measure, a utility knife, pliers, screwdrivers and a tool bag."
          ],
          steps: ["Wear the PPE the job requires before you start.", "Inspect tools and cords for damage.", "Keep guards on machines and the work area clean.", "Use ladders with three points of contact.", "Ask before you do anything you were not trained to do."],
          words: [["PPE", "personal protective equipment: gear like glasses, gloves and hard hats that protects you."], ["Lockout/tagout", "steps that keep a machine or power switched off and locked while someone works on it."], ["OSHA 10", "a 10-hour basic safety training course for workers, with a completion card."]],
          slides: [
            { title: "Common PPE", bullets: ["Safety glasses, hard hat, gloves", "Safety-toe boots, hearing protection", "Welding helmet; fall protection up high"] },
            { title: "Safe habits", bullets: ["Inspect tools before use", "Never remove machine guards", "Three points of contact on ladders", "Lift with your legs"] },
            { title: "Lockout/tagout and OSHA 10", bullets: ["Power off and locked before work", "OSHA 10: a basic safety card many employers ask for"] },
            { title: "Your starter kit", bullets: ["Employer provides required safety gear", "Ask which hand tools you must bring"] }
          ],
          tryIt: "For your top trade, list the PPE you would wear and five hand tools you would likely need. Then ask a program near you, or check its website, for its official tool list.",
          youCanNow: "name the safety gear and habits your trade expects and prepare a starter tool list."
        },
        {
          title: "Second-chance options if you have a record",
          minutes: 5,
          goal: "Find second-chance programs and incentives and plan how to handle a record in the trades.",
          text: [
            "A record does not have to block a trades career. Many apprenticeship programs, unions and employers hire people with records, and many reentry organizations run pre-apprenticeship programs aimed at people coming home.",
            "Two federal tools help employers say yes. The Federal Bonding Program can give the employer a free bond for the first six months of a job, at no cost to you or the employer, as the EEOC notes. The Work Opportunity Tax Credit gives employers a tax credit for hiring certain people, including a \"qualified ex-felon\" hired within a year of a felony conviction or release. The employer and the applicant complete IRS Form 8850 on or before the day of the job offer, so tell employers you may qualify.",
            "Licenses and some jobs check records. Many state licensing boards look at records case by case. Before you spend money on training, contact the board for your trade and ask how they review records. Some CDL endorsements, such as hazardous materials, need a federal background check.",
            "Ask a legal aid office or your reentry program whether your record can be sealed or expunged in your state, and practice a short, honest answer about your record for interviews."
          ],
          steps: ["Search for reentry or second-chance pre-apprenticeship programs near you.", "Ask employers if they use the Federal Bonding Program or the Work Opportunity Tax Credit.", "Contact your trade's state licensing board and ask how it reviews records.", "Ask legal aid about sealing or expungement.", "Practice a short, honest answer about your record."],
          words: [["Federal Bonding Program", "a free US Department of Labor program that insures employers for the first months when they hire people with records or other barriers."], ["Work Opportunity Tax Credit", "a federal tax credit employers can get for hiring people from certain groups, including some people with felony convictions."], ["Licensing board", "the state office that issues and reviews trade licenses."]],
          slides: [
            { title: "A record is not the end", bullets: ["Many programs, unions and employers hire people with records", "Look for reentry pre-apprenticeship programs"] },
            { title: "Tools that help employers say yes", bullets: ["Federal Bonding Program: free bond for 6 months", "Work Opportunity Tax Credit: tax credit for employers", "Form 8850 is done by the day of the job offer"] },
            { title: "Check before you pay for training", bullets: ["Ask the licensing board how it reviews records", "Some CDL endorsements need a background check"] },
            { title: "Next steps", bullets: ["Ask legal aid about sealing or expungement", "Practice a short, honest answer"] }
          ],
          sources: [
            { name: "EEOC: Arrest and conviction records (mentions the Federal Bonding Program)", url: "https://www.eeoc.gov/arrestandconviction" },
            { name: "IRS: Work Opportunity Tax Credit", url: "https://www.irs.gov/businesses/small-businesses-self-employed/work-opportunity-tax-credit" },
            { name: "US Department of Labor: Work Opportunity Tax Credit", url: "https://www.dol.gov/agencies/eta/wotc" }
          ],
          tryIt: "Write three questions to ask your trade's state licensing board about how it reviews records. Then write two sentences you could say to an employer about the Federal Bonding Program and the Work Opportunity Tax Credit. (If you do not have a record, do this for a friend or as practice.)",
          youCanNow: "name second-chance tools for the trades and check how a licensing board reviews records before you pay for training."
        },
        {
          title: "Finding and applying to a program",
          minutes: 5,
          goal: "Find two programs near you and make a plan to apply.",
          text: [
            "Start at apprenticeship.gov. Its Apprenticeship Job Finder lets you search by career and location and apply directly with the employer or program. If you cannot find a match, its Partner Finder shows organizations that accept new apprentice applications.",
            "Other places to look: your local American Job Center (free job search help and sometimes training money), community colleges, union training centers for each trade, reentry programs, and veterans' programs.",
            "Programs often ask for a high school diploma or GED, a valid ID, a driver's license for some trades, a basic math test, a drug test, and an interview. Find out the steps and the application dates, because some apprenticeships only take applications at certain times of year.",
            "Get ready: brush up on basic math (fractions, measuring, simple algebra), get your documents together, and practice interview answers about safety, reliability and why you want the trade."
          ],
          steps: ["Search apprenticeship.gov by trade and location.", "Write down two programs, their requirements and their application dates.", "Contact your local American Job Center or a union training center.", "Gather your documents: ID, diploma or GED, driver's license if needed.", "Practice basic math and your interview answers.", "Apply, and put the follow-up date on your calendar."],
          words: [["American Job Center", "a free government-funded office that helps people find jobs and training."], ["GED", "a test that gives you a high school equivalency credential."], ["Union training center", "a school run by a trade union and employers to train apprentices."]],
          slides: [
            { title: "Start at apprenticeship.gov", bullets: ["Apprenticeship Job Finder: search by career and place", "Partner Finder: programs taking applications"] },
            { title: "Other places to look", bullets: ["American Job Centers", "Community colleges and union training centers", "Reentry and veterans' programs"] },
            { title: "What programs often ask for", bullets: ["Diploma or GED, ID, sometimes a driver's license", "Math test, drug test, interview", "Application dates: some only open at times"] },
            { title: "Get ready", bullets: ["Practice fractions and measuring", "Gather documents", "Practice interview answers"] }
          ],
          sources: [
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Final task: make your one-page Trade Start Plan. Include the trade, its median pay and outlook from bls.gov/ooh, the license or certification, two programs near you, your safety gear and starter tools, any second-chance resources, and your first three steps with dates.",
          youCanNow: "find apprenticeship and pre-apprenticeship programs near you and make a dated plan to apply."
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting in and staying safe",
        questions: [
          { q: "What does PPE stand for?", options: ["Paid Program for Electricians", "Personal protective equipment", "Public plumbing exam", "Power plant engineering"], answer: 1, why: "PPE is gear like glasses, gloves and hard hats that protects you." },
          { q: "What is lockout/tagout?", options: ["Locking the toolbox at night", "A union vote", "Keeping a machine or power off and locked while someone works on it", "A way to clock out"], answer: 2, why: "It stops a machine starting while someone is working on it." },
          { q: "What can the Federal Bonding Program give an employer who hires someone with a record?", options: ["A free bond for the first six months", "A free truck", "A license for the worker", "Nothing"], answer: 0, why: "The bond is free to the worker and the employer and covers the first six months." },
          { q: "You have a record and want an electrician license. What should you do before paying for training?", options: ["Hide the record", "Give up", "Pay first and ask later", "Ask the state licensing board how it reviews records"], answer: 3, why: "Boards often review case by case; asking first protects your time and money." },
          { q: "Where can you search for apprenticeships by career and location?", options: ["A social media group only", "The Apprenticeship Job Finder on apprenticeship.gov", "The IRS website", "A TV ad"], answer: 1, why: "It is the official search tool from the Department of Labor." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Starting a Career in the Skilled Trades",
    questions: [
      { q: "Which trade joins metal using heat?", options: ["Plumber", "Welder", "Carpenter", "HVAC technician"], answer: 1, why: "Welders join metal with heat." },
      { q: "What does a CDL let you do?", options: ["Install wiring", "Fix pipes", "Drive large trucks and buses", "Weld steel"], answer: 2, why: "A commercial driver's license is needed for large trucks and buses." },
      { q: "You hate heights and want to be home every night. Which is probably a poor fit?", options: ["Long-haul truck driving and roofing solar work", "Indoor plumbing repair", "Shop welding", "Cabinet carpentry"], answer: 0, why: "Long-haul driving keeps you away for days, and roof work is high up." },
      { q: "Which experience can count toward a trades career?", options: ["Only paid civilian jobs", "Nothing before age 25", "Only college classes", "Military mechanics, teamwork in sport, and training programs done while incarcerated"], answer: 3, why: "Hands-on skills and discipline carry over from many places." },
      { q: "Which site is the official, free source for trade pay and outlook?", options: ["bls.gov/ooh", "A jobs ad", "A video comment", "A chat with a friend"], answer: 0, why: "The Bureau of Labor Statistics runs the Occupational Outlook Handbook." },
      { q: "On a handbook profile, which tab shows the training you need?", options: ["Pay", "Job Outlook", "How to Become One", "Similar Occupations"], answer: 2, why: "How to Become One describes education, training and licenses." },
      { q: "An AI assistant gives you a pay figure for welders. What should you do?", options: ["Trust it", "Post it online", "Use it on your plan as is", "Check the number on bls.gov/ooh"], answer: 3, why: "Take numbers from the official page; AI can be wrong or out of date." },
      { q: "According to the handbook, most electricians learn the trade through:", options: ["A weekend class", "A 4- or 5-year apprenticeship", "Online videos only", "A four-year college degree"], answer: 1, why: "The BLS profile says most learn in a 4- or 5-year apprenticeship." },
      { q: "How do apprentices usually get paid?", options: ["They pay to work", "Never", "With a wage that rises as their skills grow", "Only after they finish"], answer: 2, why: "Apprentices earn while they learn, with pay increases." },
      { q: "What is a pre-apprenticeship?", options: ["A short program that helps you get into an apprenticeship", "A license", "A tax form", "A union fee"], answer: 0, why: "It prepares you with basics like math, tools and safety." },
      { q: "A new truck driver wants a Class A CDL. Before the tests they must:", options: ["Buy a truck", "Finish entry-level driver training with a registered provider", "Get an EPA 608 card", "Take a welding test"], answer: 1, why: "Federal rules require training with a provider on the Training Provider Registry." },
      { q: "Who can often use GI Bill benefits for apprenticeships?", options: ["Only active-duty troops", "Nobody", "Only people over 65", "Many veterans"], answer: 3, why: "The VA says GI Bill benefits can pay for many apprenticeships and on-the-job training." },
      { q: "Which is PPE?", options: ["A tape measure", "Safety glasses", "A pay stub", "A resume"], answer: 1, why: "Safety glasses protect your eyes; they are personal protective equipment." },
      { q: "A grinder's guard is in your way. You should:", options: ["Keep the guard on and ask for help if the job needs a different tool", "Take the guard off", "Use your hand to steady the blade", "Work faster"], answer: 0, why: "Removing guards causes serious injuries." },
      { q: "What is OSHA 10?", options: ["A license to work as an electrician", "A CDL endorsement", "A 10-hour basic safety course with a completion card", "A tax credit"], answer: 2, why: "It is safety training, not a license." },
      { q: "Who completes IRS Form 8850 for the Work Opportunity Tax Credit, and when?", options: ["Only the worker, after a year", "The state, at the end of the year", "Nobody; it is automatic", "The employer and the applicant, on or before the day of the job offer"], answer: 3, why: "The IRS says the form is completed on or before the job offer day." },
      { q: "Many state licensing boards review records:", options: ["Never", "Case by case", "Only for plumbers", "Only online"], answer: 1, why: "Ask the board how it reviews records before you pay for training." },
      { q: "Which places can help you find a trades program?", options: ["Only private ads", "Only a lottery", "American Job Centers, community colleges, union training centers and reentry programs", "None; you must wait to be called"], answer: 2, why: "These are common free or low-cost places to start." },
      { q: "Some apprenticeships only take applications at certain times. So you should:", options: ["Write down each program's application dates", "Apply whenever you remember", "Skip programs with dates", "Only apply in summer"], answer: 0, why: "Knowing the dates keeps you from missing the window." },
      { q: "Which math is most worth practicing before a trades entry test?", options: ["Calculus", "Fractions, measuring and simple algebra", "Statistics theory", "No math is ever used"], answer: 1, why: "Trades use fractions, measuring and basic algebra every day." }
    ]
  }
};
