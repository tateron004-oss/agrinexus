"use strict";

// Koach Learn course: Workforce Development -> "Security Officer (Guard Card) Preparation" (wave 3, 30 October 2026).
// Prepares learners for a state security guard license ("guard card") and the first weeks on the job. It does not grant a
// license: each state's agency does. California is the worked example because its rules were confirmed on the official
// BSIS fact sheet (Rev. October 2025) and training page on 30 October 2026: at least 18, DOJ and FBI background check
// (Live Scan), Power to Arrest training before the registration is issued, 32 hours of security officer skills training
// within the first 6 months, 8 hours of continuing training each year, card carried on duty, renewal rules.
// Other states (New York, Florida, Texas) are named with their agencies only; their hours were NOT confirmed, so the course
// sends learners to the official page. The general pattern is from the BLS Occupational Outlook Handbook.

const BSIS_GUARD = { name: "California BSIS: Security guards (applications, training syllabus, Power to Arrest manual)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "California BSIS: Security Guard Registration fact sheet", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "California BSIS: Security guard training syllabus (courses and hours)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "California BSIS: Power to Arrest training manual", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "California Department of Consumer Affairs: Verify a license", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "New York Department of State: Security guard licensing", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Texas Department of Public Safety: Private Security Program", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Florida Department of Agriculture and Consumer Services: Division of Licensing (Class D security officer)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "U.S. Bureau of Labor Statistics: Security guards and gambling surveillance officers (how to become one)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };

module.exports = {
  id: "security-officer-prep",
  category: "Workforce Development",
  name: "Security Officer (Guard Card) Preparation",
  skills: "Finding your state's guard card rules, Patrolling and controlling access from post orders, Observing and reporting within your authority, Calming conflict and responding to emergencies, Writing a clear incident report, Planning your license and job search",
  outcome: "find your state's guard card requirements and write the steps to get one, follow post orders on patrol and at an entrance, choose the observe-and-report action that stays within a guard's authority, write a clear, factual incident report, and make a dated plan to get licensed and hired.",
  about: [
    "Security officers protect people and property in offices, stores, hospitals, schools, warehouses, events and apartment buildings. Many jobs need no college degree, and employers hire all year. This course is for job seekers, people coming home from prison, veterans and young adults who want to start that work.",
    "You will learn what a security officer does and does not do, how the state guard card works, how to patrol and control an entrance from post orders, how to stay calm and safe when there is conflict or an emergency, and how to write an incident report a supervisor, lawyer or police officer can trust.",
    "Important: this course prepares you; it does not give you a license. In most states a state agency licenses security guards, and you must be at least 18, pass a background check and finish the state's required training with an approved school or employer. Rules differ by state, so you will look up your own state's official page. California is our worked example because we checked its rules on the official page.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task on paper or in a free document app. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a guard card readiness packet: your state's requirements written as steps with the official page, a patrol and access checklist for one practice post, one complete practice incident report, a pocket card of your observe-and-report and emergency steps, and a dated plan to finish training, apply and get hired, with an honest résumé line.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults aged 18 and over looking for unarmed security officer jobs: job seekers, people coming home from prison, veterans and young adults. Some have military police, corrections or retail loss-prevention experience; most are new to the work.",
    startingPoint: "Can read a short form, follow instructions and use a phone. Few know how guard licensing works in their state, what a guard's legal limits are, or how to write a factual report. Some picture the job as police work.",
    gap: "Security is a large hiring sector with a fast route in, but people lose jobs and get hurt when they go beyond their authority, use force they should not, or write vague reports. Learners need a true picture of the license steps in their state, the observe-and-report habits employers want, and a clear report-writing skill, so they get licensed, hired and kept on.",
    constraints: [
      "Reading level: plain words and short sentences; every term explained",
      "Licensing is by state: the course teaches the pattern and how to find the official page, with California as the checked example",
      "Unarmed work only: firearms, batons, tear gas and other weapons need separate permits and in-person training",
      "Hands-on skills such as first aid, CPR and defensive tactics are learned in person with a qualified instructor",
      "Background checks: learners with a record are told to answer honestly and check their state's rules or a reentry legal aid program",
      "Devices: a phone or library computer for the state pages; paper for the checklists and report"
    ],
    prerequisites: "None. \"Customer Service Excellence\" and \"Résumés, LinkedIn and Interviews\" are helpful companions."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using your state's official licensing page", action: "list the steps to get a guard card in your state", standard: "naming the agency, the age rule, the background check and the training required before and after you are licensed" },
    { id: "O2", condition: "Given a set of post orders", action: "carry out a patrol and an access-control check", standard: "covering every point in the post orders and logging what you saw and did with the time" },
    { id: "O3", condition: "Given a conflict, theft or emergency situation", action: "choose the observe-and-report action that stays within a guard's authority", standard: "getting at least 4 of 5 situations right, with emergency calls made first" },
    { id: "O4", condition: "After watching or reading about an incident", action: "write a factual incident report", standard: "answering who, what, when, where and how, using facts, not opinions, in time order" },
    { id: "O5", condition: "Using your state's rules and local job listings", action: "write a dated plan to get licensed and hired", standard: "with dates for training, fingerprints, application and job applications, and an honest résumé line" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job, the guard card and the post",
      lessons: [
        {
          title: "What a security officer does, and does not do",
          objectives: ["O3"],
          minutes: 5,
          goal: "Explain the main duties of a security officer and the limits of a guard's authority.",
          text: [
            "A security officer protects people and property. The everyday work is to be seen, watch, control who comes in, patrol, help people, answer alarms, and write down what happens. Being visible and alert prevents many problems before they start.",
            "A security officer is not a police officer. In most states a guard has the same power to arrest as any private person, and no more. Most employers tell officers to \"observe and report\": watch carefully, call the police or a supervisor, and write it down, instead of chasing or grabbing people.",
            "Your employer's rules (the post orders) can be stricter than the law. If the post orders say \"do not detain\", you do not detain, even if the law would allow it. Going beyond your orders can get you fired, sued or hurt.",
            "Customer service is half the job. You give directions, help lost visitors and stay polite with angry people. Officers who are calm, on time and good at writing reports are the ones who get promoted."
          ],
          words: [["Security officer", "a person paid to protect people and property; also called a security guard."], ["Observe and report", "watch, call for help and write it down, without getting physically involved."], ["Post orders", "the written instructions for one site: what to check, when, and what to do."], ["Detain", "to stop someone from leaving. Guards should only do it if the law and their post orders allow it."], ["Deter", "to stop a problem before it starts, for example by being seen."]],
          slides: [
            { title: "The everyday job", bullets: ["Be seen and stay alert", "Control who comes in and patrol", "Help people and answer alarms", "Write down what happens"] },
            { title: "Not a police officer", bullets: ["Usually the same arrest power as any private person", "Most employers: observe and report", "Call the police; don't chase or grab"] },
            { title: "Post orders come first", bullets: ["They can be stricter than the law", "If they say do not detain, you do not detain"] },
            { title: "What gets you promoted", bullets: ["Calm, polite customer service", "On time, every shift", "Clear, honest reports"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "Draw two columns on paper: \"A guard does\" and \"A guard does not\". Put each of these in a column: patrol the parking lot, search a person's bag by force, give a visitor directions, chase a shoplifter into the street, call 911 for a fight, write a report, handcuff someone because the post orders say observe and report. Then write one sentence on why.",
          youCanNow: "explain what a security officer does and the limits of a guard's authority.",
          quickCheck: [
            { objective: "O3", q: "What do most employers mean by \"observe and report\"?", options: ["Chase anyone who runs", "Watch, call for help and write it down", "Search everyone's bags", "Arrest people for any rule broken"], answer: 1, why: "Observe and report means you watch, call the police or a supervisor, and document, without physical involvement." },
            { objective: "O3", q: "The law might allow a private arrest, but your post orders say \"do not detain\". What do you do?", options: ["Detain anyway", "Ask the suspect what they prefer", "Follow the post orders: observe, call and report", "Quit your post"], answer: 2, why: "Post orders can be stricter than the law, and you must follow them." }
          ]
        },
        {
          title: "Getting your guard card: how state licensing works",
          objectives: ["O1"],
          minutes: 6,
          goal: "Find your state's licensing agency and list the steps to get a guard card.",
          text: [
            "Most states license security guards through a state agency. The common pattern: be at least 18, pass a criminal background check with fingerprints, and finish training with an approved school or employer. Many states also need training every year. The names differ: a \"guard card\", \"registration\" or \"Class D license\".",
            "California is our checked example. The agency is the Bureau of Security and Investigative Services (BSIS). You must be at least 18, pass a Department of Justice and FBI background check through Live Scan fingerprints, and finish the Power to Arrest training before the registration is issued. Then you finish 32 hours of security officer skills training within the first 6 months, and 8 hours of continuing training every year. You apply online in BreEZe or by mail, and you carry your card on duty.",
            "Other states have their own agency, for example the New York Department of State, the Texas Department of Public Safety's Private Security Program, and Florida's Department of Agriculture and Consumer Services, Division of Licensing. Look up your own state's official page for the current training hours, fees and forms. Do not trust a training ad for the rules.",
            "If you have a criminal record: each state decides which records matter. Answer every question honestly, because a false answer can itself lead to a denial. A reentry program or legal aid office can help you read your state's rules."
          ],
          steps: ["Search for your state's security guard licensing agency and open the official .gov page.", "Write down: minimum age, background check and fingerprint steps.", "Write the training required before you are licensed and after (first months, every year).", "Find the application (online or paper) and the fee page; don't guess the fee.", "Note how to renew and how long the license lasts."],
          words: [["Guard card", "the everyday name for a state security guard license or registration."], ["BSIS", "California's Bureau of Security and Investigative Services, which registers guards in California."], ["Live Scan", "electronic fingerprinting used for background checks in California and other states."], ["Background check", "a search of criminal records, often by the state and the FBI, before a license is issued."], ["Continuing training", "training you must keep doing after you are licensed, often every year."]],
          slides: [
            { title: "The common pattern", bullets: ["At least 18", "Background check with fingerprints", "Approved training; many states also every year"] },
            { title: "California example (BSIS)", bullets: ["Power to Arrest training before the card is issued", "32 hours of skills training within 6 months", "8 hours of continuing training every year"] },
            { title: "Other states", bullets: ["NY: Department of State", "TX: DPS Private Security Program", "FL: FDACS Division of Licensing (Class D)", "Check the official page, not an ad"] },
            { title: "If you have a record", bullets: ["Each state decides which records matter", "Answer every question honestly", "Ask a reentry or legal aid program"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Open your state's official licensing page (or California's BSIS fact sheet if you are practicing). On paper, write your state's guard card steps in order: agency, age, background check, training before the card, training after, how to apply, and the page address.",
          youCanNow: "find your state's licensing agency and list the steps to get a guard card.",
          quickCheck: [
            { objective: "O1", q: "In California, which training must be finished before the guard registration is issued?", options: ["Firearms training", "Power to Arrest training", "Baton training", "No training at all"], answer: 1, why: "BSIS says Power to Arrest training must be completed before the registration is issued." },
            { objective: "O1", q: "A training ad says your state needs only a 2-hour online class. What do you do?", options: ["Believe the ad", "Ask a friend", "Pay and hope", "Check the state agency's official page"], answer: 3, why: "Rules change and differ by state; only the official agency page is reliable." }
          ]
        },
        {
          title: "Post orders, patrol and access control",
          objectives: ["O2"],
          minutes: 5,
          goal: "Carry out a patrol and an entrance check by following written post orders.",
          text: [
            "Every site has post orders. They tell you your hours, where to patrol and how often, which doors to check, who may come in, what to do in an alarm, and who to call. Read them at the start of every shift, and ask your supervisor about anything unclear.",
            "On patrol, vary your timing so nobody can predict you. Use your senses: look for open doors, broken locks, leaks, smoke, blocked fire exits, lights out and people where they should not be. Write each check in your daily activity log with the time.",
            "Access control means only the right people get in. Check badges or ID the way the post orders say, sign visitors in and out, give visitor passes, and never let someone follow you through a locked door (tailgating). Be polite and firm: \"I'm sorry, I need to see your badge.\"",
            "Use your radio or phone the way the site says: short, clear messages with your location. At shift change, tell the next officer what is open and pass on the log."
          ],
          steps: ["Read the post orders and the last shift's log.", "Check your radio or phone and keys.", "Patrol every point in the post orders, at varied times.", "At the entrance: check ID or badge, sign visitors in, stop tailgating.", "Log each check and anything unusual with the time.", "Brief the next officer at shift change."],
          words: [["Patrol", "walking or driving around a site on a route to look for problems."], ["Access control", "making sure only allowed people and vehicles get in."], ["Tailgating", "someone following an allowed person through a locked door without showing ID."], ["Daily activity log", "the officer's written record of each check and event during a shift, with times."]],
          slides: [
            { title: "Start of shift", bullets: ["Read post orders and the last log", "Check radio, phone and keys", "Ask about anything unclear"] },
            { title: "On patrol", bullets: ["Vary your timing", "Doors, locks, leaks, smoke, fire exits, lights", "Log each check with the time"] },
            { title: "At the entrance", bullets: ["Check badges or ID as the orders say", "Sign visitors in and out", "Stop tailgating: polite and firm"] },
            { title: "End of shift", bullets: ["Brief the next officer", "Hand over the log"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Pick a practice post: your apartment building, a library or a store you know. Write five lines of post orders for it (hours, patrol points, entrance rule, who to call). Then write a one-hour daily activity log for that post with at least four timed entries, including one problem you found and what you did.",
          youCanNow: "carry out a patrol and an entrance check from written post orders and log them.",
          quickCheck: [
            { objective: "O2", q: "Why should you vary the time of your patrols?", options: ["So nobody can predict when you will come by", "To finish early", "Because the radio says so", "To skip some checks"], answer: 0, why: "Predictable patrols are easy for a wrongdoer to avoid; varied times deter problems." },
            { objective: "O2", q: "A person without a badge walks in right behind an employee. What is this?", options: ["Patrolling", "Tailgating", "Observing", "Logging"], answer: 1, why: "Tailgating is following someone through a controlled door without showing ID." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job, the guard card and the post",
        questions: [
          { objective: "O3", q: "In most states, how does a security guard's arrest power compare with a private person's?", options: ["Much greater, like a police officer", "Zero in all cases", "Only on weekends", "About the same as any private person"], answer: 3, why: "In most states a guard has a private person's arrest power, no more." },
          { objective: "O1", q: "Which is part of the common guard card pattern in most states?", options: ["A college degree", "Owning a car", "A background check with fingerprints", "A firearms permit"], answer: 2, why: "Most states require a fingerprint background check, age 18 and approved training." },
          { objective: "O1", q: "In California, how much continuing training must a guard complete each year?", options: ["8 hours", "No training", "40 hours", "1 hour"], answer: 0, why: "BSIS requires 8 hours of continuing training every year." },
          { objective: "O2", q: "Where do you find which doors to check and who to call at your site?", options: ["On a training ad", "In the post orders", "From a visitor", "On social media"], answer: 1, why: "Post orders are the written instructions for that site." },
          { objective: "O2", q: "During patrol you find a fire exit blocked by boxes. What do you do?", options: ["Ignore it; it is not your job", "Leave a note on the boxes", "Wait for the next shift", "Report it and log it with the time, as the post orders say"], answer: 3, why: "A blocked exit is a safety hazard to report and log right away." }
        ]
      }
    },
    {
      name: "Chapter 2: Conflict, emergencies, reports and getting hired",
      lessons: [
        {
          title: "Calming conflict, use of force and emergencies",
          objectives: ["O3"],
          minutes: 6,
          goal: "Choose a calm, safe response to a conflict, a theft or an emergency.",
          text: [
            "Most conflict can be calmed with words. Keep a safe distance, stand at an angle, keep your hands open and visible, and speak slowly and quietly. Listen, use the person's name if you know it, and offer a choice: \"You can wait here or I can call your manager.\" Do not argue, touch or block someone in.",
            "Use of force is the most serious part of the job. States teach it in their training (California requires Appropriate Use of Force and Power to Arrest courses). The rule to remember: only the force the law and your post orders allow, only when needed, and stop as soon as it is not. Most unarmed officers are told to leave and call the police instead.",
            "Theft: watch, remember the description, call the police or your supervisor as your orders say, and do not chase into the street or a parking lot. Your safety and others' matter more than goods.",
            "Emergencies: for fire, medical emergencies, fights or weapons, call 911 (or your local emergency number) first, then follow the site's emergency plan: alert people, guide them to exits, meet the responders and tell them what you saw. First aid and CPR are learned and certified in person with a qualified instructor, for example from the American Red Cross or the American Heart Association."
          ],
          steps: ["Check: is anyone in danger? If yes, call 911 first.", "Keep a safe distance and an escape route.", "Speak calmly; listen; offer a choice.", "If it is not calming down, step back and call police or your supervisor.", "Follow the site's emergency plan; guide people out; meet responders.", "Write it down as soon as it is safe."],
          words: [["De-escalation", "using calm words and body language to lower someone's anger."], ["Use of force", "any physical action to control a person; guards may only use what the law and their orders allow."], ["Emergency plan", "the site's written steps for fire, medical events, weapons and evacuation."], ["Evacuation", "getting everyone out of a building safely."]],
          slides: [
            { title: "Calm it with words", bullets: ["Safe distance, open hands, stand at an angle", "Speak slowly; listen; offer a choice", "Don't argue, touch or block someone in"] },
            { title: "Use of force", bullets: ["Only what the law and your orders allow", "Only when needed; stop when it is not", "Most unarmed officers: step back and call"] },
            { title: "Theft", bullets: ["Watch and remember the description", "Call police or your supervisor", "Don't chase; people matter more than goods"] },
            { title: "Emergencies", bullets: ["Call 911 (or local number) first", "Follow the emergency plan; guide people out", "Meet responders and tell them what you saw"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Practice with a friend or in a mirror. Scene: a visitor is shouting at the front desk because they cannot go up without a badge. Say out loud three calm sentences, including one choice you offer. Then write the point at which you would step back and call your supervisor or the police.",
          youCanNow: "choose a calm, safe response to a conflict, a theft or an emergency, staying within your authority.",
          quickCheck: [
            { objective: "O3", q: "A person collapses in the lobby and is not breathing normally. What do you do first?", options: ["Write the report", "Call your supervisor and wait", "Call 911, then follow the emergency plan", "Look for their ID"], answer: 2, why: "In a medical emergency you call 911 (or your local number) first." },
            { objective: "O3", q: "A shoplifter runs out to the parking lot with goods. Your orders say observe and report. What do you do?", options: ["Note the description and direction and call as your orders say", "Chase them into traffic", "Grab their bag", "Block their car with yours"], answer: 0, why: "You stay safe, gather facts and call; goods are not worth a life." }
          ]
        },
        {
          title: "Observe, describe and write the incident report",
          objectives: ["O4"],
          minutes: 6,
          goal: "Write a factual incident report that answers who, what, when, where and how.",
          text: [
            "Your report may be read by your supervisor, the client, an insurance company, the police or a court, sometimes months later. A good report lets a stranger see exactly what happened. Many officers lose credibility because their reports are vague.",
            "Write facts, not opinions. Not \"he was drunk\" but \"he smelled of alcohol, swayed and slurred his words\". Not \"a suspicious guy\" but \"a man about 30, about 6 feet, red hooded jacket, black backpack, walked around the parked cars and tried two door handles\".",
            "Answer who, what, when, where and how, in time order. Give the date and exact times, the exact place, the people involved and witnesses, what you saw and heard yourself, what you did, and who you called and when. Write the exact words people said in quotes.",
            "Write it as soon as it is safe, while you remember. Use first person (\"I saw\"), short sentences and correct names. Do not guess, add or leave things out. If you make a mistake, correct it the way your employer says; never change a report later to make it look better."
          ],
          steps: ["Date, time and exact place.", "Who: you, the people involved, witnesses (names and descriptions).", "What happened, in time order, with what you saw and heard yourself.", "What you did and who you called, with times.", "Exact words in quotes; facts, not opinions.", "Read it again; sign it as your employer requires."],
          words: [["Incident report", "a written, factual record of an event such as a theft, injury, fight or alarm."], ["Witness", "a person who saw or heard what happened."], ["Fact", "something you saw, heard or measured yourself."], ["Opinion", "what you think or guess, such as \"he looked guilty\"."]],
          slides: [
            { title: "Who reads your report?", bullets: ["Supervisor, client, insurer, police, a court", "It must make sense to a stranger, months later"] },
            { title: "Facts, not opinions", bullets: ["Not \"drunk\": smelled of alcohol, swayed, slurred", "Describe people: age, height, clothes, bag"] },
            { title: "Who, what, when, where, how", bullets: ["Date, exact times, exact place", "People and witnesses", "What you saw, did and who you called"] },
            { title: "Write it right", bullets: ["As soon as it is safe", "First person, short sentences, exact quotes", "Never change it later to look better"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Watch any 2-minute public scene (a busy street, a store entrance or a short video with no sound). Then write a practice incident report: date, time, place, people described by facts, what happened in time order, and what you would have done and who you would have called. Underline any opinion words and rewrite them as facts.",
          youCanNow: "write a factual incident report that answers who, what, when, where and how.",
          quickCheck: [
            { objective: "O4", q: "Which sentence belongs in an incident report?", options: ["The man looked like a thief.", "He was obviously drunk.", "At 9:42 p.m. a man in a red jacket tried two car door handles in Row C.", "Something bad was going on."], answer: 2, why: "It gives time, place, description and action as facts, not opinions." },
            { objective: "O4", q: "When should you write the report?", options: ["Next week", "As soon as it is safe, while you remember", "Only if the police ask", "After talking to everyone to agree on a story"], answer: 1, why: "Writing soon keeps the details accurate." }
          ]
        },
        {
          title: "Your guard card plan and getting hired",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Write a dated plan to finish training, apply for the guard card and get hired.",
          text: [
            "Turn your state's steps into dates. For example: week 1, find an approved training school or an employer that trains new officers; week 2, finish the training required before the card; week 3, get fingerprinted and apply; then apply for jobs while the agency processes your application. In California, BSIS says to allow about 4 to 6 weeks for processing, and it can take longer.",
            "Many security companies hire people and help them through the training. Look on job boards, at your local American Job Center or workforce center, and on company websites. Check that a training school is approved by your state (California lets you verify a license online). Be wary of anyone who promises a \"guaranteed\" license.",
            "Your résumé: be honest. Before you are licensed, write \"Completed security officer preparation course; guard card application in progress\". Name the skills: report writing, customer service, patrol, staying calm under pressure. Veterans: describe military police, guard duty or watch-standing in everyday words.",
            "Practice interview answers: \"How would you handle an angry visitor?\" and \"What would you do if you saw a theft?\" Use what you learned: stay calm, observe and report, call for help, write it down."
          ],
          steps: ["Copy your state's guard card steps from Lesson 2.", "Put a date next to each step.", "List three employers or approved schools near you.", "Write an honest résumé line and three skills.", "Practice two interview answers out loud."],
          words: [["Approved school", "a training provider your state allows to give the required guard training."], ["American Job Center", "a free U.S. public office that helps with job search and training."], ["Processing time", "how long the agency takes to review your application and background check."]],
          slides: [
            { title: "Steps into dates", bullets: ["Find training; finish what is needed before the card", "Fingerprints and application", "Apply for jobs while you wait"] },
            { title: "Where to look", bullets: ["Security companies that train new officers", "American Job Centers and workforce centers", "Check the school is state-approved"] },
            { title: "An honest résumé", bullets: ["\"Guard card application in progress\" until it is issued", "Report writing, customer service, patrol, calm"] },
            { title: "Interview practice", bullets: ["Angry visitor: calm words, offer a choice", "Theft: observe, call, write it down"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Make your guard card plan on one page: each step from your state's page with a date, three local employers or approved schools, an honest résumé line, and your answers to the two interview questions. Put it with your checklist and practice report: that is your readiness packet.",
          youCanNow: "write a dated plan to get your guard card and a job, with an honest résumé line.",
          quickCheck: [
            { objective: "O5", q: "You have finished this course but your guard card has not been issued. Which résumé line is honest?", options: ["\"Licensed security officer\"", "\"Completed security officer preparation course; guard card application in progress\"", "\"Armed guard\"", "\"State certified instructor\""], answer: 1, why: "It says exactly what you have done without claiming a license you do not hold." },
            { objective: "O1", q: "How can you check that a training school or license is real in California?", options: ["Trust the school's ad", "Ask on social media", "Use the state's online license verification", "Look at their logo"], answer: 2, why: "California's Department of Consumer Affairs lets you verify licenses online." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Conflict, emergencies, reports and getting hired",
        questions: [
          { objective: "O3", q: "An angry visitor is shouting. Which is the best first move?", options: ["Shout back so they listen", "Stand very close", "Grab their arm", "Keep a safe distance and speak slowly and calmly"], answer: 3, why: "Distance and calm words lower anger and keep you safe." },
          { objective: "O3", q: "You smell smoke and see flames in a storage room. What comes first?", options: ["Call 911 (or the local number) and start the site's emergency plan", "Write the report", "Finish your patrol", "Take a photo for social media"], answer: 0, why: "In an emergency you call 911 first, then follow the emergency plan." },
          { objective: "O4", q: "Which is a fact, not an opinion?", options: ["He seemed guilty", "She was crazy", "He said, \"Get out of my way\"", "They were up to no good"], answer: 2, why: "Exact words you heard are a fact; the others are opinions." },
          { objective: "O4", q: "You notice a mistake in yesterday's report after your supervisor read it. What do you do?", options: ["Quietly rewrite it to look better", "Correct it the way your employer says, openly", "Throw it away", "Ask a coworker to sign it"], answer: 1, why: "Corrections are made openly by the employer's method; secretly changing a report destroys trust." },
          { objective: "O5", q: "What should a guard card plan include?", options: ["Dates for training, fingerprints, application and job applications", "Only the job you want", "A promise of a guaranteed license", "Nothing until you are hired"], answer: 0, why: "A dated plan turns your state's steps into actions you can finish." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Security Officer (Guard Card) Preparation",
    questions: [
      { objective: "O3", q: "What does a security officer mainly do?", options: ["Arrest people for any rule broken", "Protect people and property by being seen, watching and reporting", "Investigate crimes in court", "Write traffic tickets"], answer: 1, why: "The core of the job is visible protection, observing and reporting." },
      { objective: "O3", q: "Your post orders are stricter than the law. Which do you follow?", options: ["The law only", "Whatever you feel is right", "The visitor's request", "The post orders"], answer: 3, why: "Employers can set stricter rules, and you must follow your post orders." },
      { objective: "O1", q: "Who issues a guard card in most states?", options: ["A state agency", "Any training school", "The local mall", "The FBI"], answer: 0, why: "A state agency licenses guards; schools only give training." },
      { objective: "O1", q: "In California, how many hours of security officer skills training must be finished within the first 6 months?", options: ["8 hours", "4 hours", "32 hours", "100 hours"], answer: 2, why: "BSIS requires 32 hours of skills training within the first 6 months." },
      { objective: "O1", q: "What is the minimum age for a California guard registration?", options: ["16", "21", "25", "18"], answer: 3, why: "BSIS says applicants must be at least 18." },
      { objective: "O1", q: "You have a criminal record and are filling in a guard card application. What should you do?", options: ["Answer every question honestly and check your state's rules", "Leave the record out", "Use a friend's name", "Give up without checking"], answer: 0, why: "False answers can cause a denial; each state decides which records matter." },
      { objective: "O2", q: "What is in post orders?", options: ["The company's profits", "Site instructions: hours, patrol points, entry rules, who to call", "Your personal schedule for the week", "A list of suspects"], answer: 1, why: "Post orders are the written instructions for a specific site." },
      { objective: "O2", q: "What should each daily activity log entry include?", options: ["Your opinion of coworkers", "Only problems, no times", "The time and what you checked or saw", "Nothing until the end of the shift"], answer: 2, why: "Logs record each check and event with the time." },
      { objective: "O2", q: "A visitor without a badge says, \"I'm with him,\" and walks in behind an employee. What do you do?", options: ["Let them in; they seem nice", "Shout at them", "Leave your post to follow them", "Politely stop them and check ID as the post orders say"], answer: 3, why: "Stopping tailgating politely and firmly is the core of access control." },
      { objective: "O2", q: "Why tell the next officer what happened at shift change?", options: ["So they know what is open and what to watch", "To end your shift early", "It is not needed", "To share gossip"], answer: 0, why: "A good handover keeps the site covered with no gaps." },
      { objective: "O3", q: "Which helps calm an angry person?", options: ["Standing toe to toe", "Speaking slowly and offering a choice", "Pointing your finger", "Blocking the exit"], answer: 1, why: "Calm speech and a choice lower tension; blocking and pointing raise it." },
      { objective: "O3", q: "When may a guard use force?", options: ["Whenever someone is rude", "To get back any item", "Only as the law and post orders allow, only when needed", "Whenever a supervisor is not looking"], answer: 2, why: "Force is limited by law and post orders and stops when no longer needed." },
      { objective: "O3", q: "You see a fight with a weapon in the parking lot. What do you do first?", options: ["Step in and separate them", "Call 911 from a safe place", "Write the report first", "Film it for social media"], answer: 1, why: "Weapons mean a 911 call first, from a safe place." },
      { objective: "O4", q: "Who might read your incident report?", options: ["Only you", "Nobody", "Only your family", "Supervisor, client, insurer, police or a court"], answer: 3, why: "Reports can be used by many people, sometimes months later." },
      { objective: "O4", q: "Which is the best description of a person in a report?", options: ["Woman, about 40, about 5 feet 5, blue coat, grey backpack", "A shady person", "Someone strange", "A troublemaker"], answer: 0, why: "Age, height and clothing are facts that help others identify the person." },
      { objective: "O4", q: "Which questions must a report answer?", options: ["Why the person is bad", "Your opinion of the client", "Who, what, when, where and how", "Only what the police said"], answer: 2, why: "Who, what, when, where and how make a complete, factual report." },
      { objective: "O4", q: "How do you write what someone said?", options: ["Summarize it in your own opinion", "Leave it out", "Make it sound more serious", "Write their exact words in quotes"], answer: 3, why: "Exact quotes are facts that others can rely on." },
      { objective: "O5", q: "Which résumé line is honest before your license is issued?", options: ["\"Guard card application in progress\"", "\"Licensed security professional\"", "\"Armed officer\"", "\"Police officer\""], answer: 0, why: "It describes your real status without claiming a license." },
      { objective: "O5", q: "A school promises a \"guaranteed\" guard license in one day. What should you do?", options: ["Pay right away", "Check the state agency's page and whether the school is approved", "Give them your Social Security number by text", "Tell your friends to sign up"], answer: 1, why: "Only the state issues licenses; check the official page and the school's approval." },
      { objective: "O5", q: "While the agency processes your application, what is a smart step in your plan?", options: ["Do nothing", "Stop studying", "Apply for jobs and practice interview answers", "Start working unlicensed"], answer: 2, why: "Using the wait to apply and practice gets you hired faster." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check again.",
    criteria: [
      { name: "State guard card steps", objective: "O1", notYet: "Missing the agency, the background check or the training, or uses a training ad instead of the official page.", meets: "Lists the agency, age, background check, training before and after licensing, how to apply, and the official page address.", exceeds: "Adds renewal rules and how to verify a school or license." },
      { name: "Patrol and access checklist", objective: "O2", notYet: "Missing patrol points, the entrance rule or the log.", meets: "Covers every point in the practice post orders and includes a timed log with at least four entries.", exceeds: "Adds the shift handover and a plan for tailgating." },
      { name: "Observe-and-report pocket card", objective: "O3", notYet: "Includes chasing, force beyond the orders, or no 911-first step.", meets: "Shows calm words, when to step back and call, no chasing, and 911 first in emergencies.", exceeds: "Adds the site's emergency plan steps and what to tell responders." },
      { name: "Practice incident report", objective: "O4", notYet: "Vague, has opinions, or missing times or place.", meets: "Answers who, what, when, where and how in time order with facts and exact quotes.", exceeds: "Descriptions are detailed enough for a stranger to identify people and places." },
      { name: "Dated plan and résumé line", objective: "O5", notYet: "No dates, or claims a license not yet held.", meets: "Dates for each step, three local employers or approved schools, an honest résumé line.", exceeds: "Includes practiced answers to two interview questions." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and a readiness packet that meets the rubric",
      "Learners who apply for a state guard card within 60 days (follow-up survey)",
      "Learners who receive a guard card and are hired as security officers (follow-up and partner reports)",
      "Partner employers report new officers whose incident reports need no rewrite in the first 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet for the state licensing page",
      "Paper and pen, or a free document app, for the checklist, log, report and plan",
      "Optional: a printed copy of your state's fact sheet and a sample post order",
      "About 60 minutes in total"
    ],
    facilitatorNotes: [
      "Say early and often: this course prepares learners; the state agency issues the license, after approved training.",
      "Before class, open your own state's official page and bring the current training hours, fees and forms; rules change.",
      "Do not teach physical restraint, handcuffing or weapons in this course; those need approved, in-person training.",
      "For learners with a record, keep it private and point to the state's rules and a reentry legal aid program; never promise approval.",
      "Use role plays for de-escalation with a clear stop word, and score the readiness packet with the rubric one row at a time."
    ]
  }
};
