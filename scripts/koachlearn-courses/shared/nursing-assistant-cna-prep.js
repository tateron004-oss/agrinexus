"use strict";

// Koach Learn course (wave 1, job certifications): "Certified Nursing Assistant (CNA) Preparation". Prepares learners for a state-approved nurse aide program and the state competency test.
// It does not grant a certificate. Hands-on skills are learned in a supervised, state-approved program. Shape and ADDIE parts: see scripts/koachlearn-courses/README.md.

module.exports = {
  id: "nursing-assistant-cna-prep",
  category: "Workforce Development",
  name: "Certified Nursing Assistant (CNA) Preparation",
  skills: "Mapping your state's CNA path, Cleaning hands and using gloves safely, Protecting resident rights and privacy, Giving safe daily care, Observing and reporting changes, Planning for the state test",
  outcome: "make a personal plan to become a certified nursing assistant in your state, and explain the core safety, privacy, care and reporting knowledge the state test checks.",
  about: [
    "A certified nursing assistant (CNA) helps people with daily care in nursing homes, hospitals and other care settings. It is one of the fastest ways into a health care career, and many nurses started as CNAs.",
    "This course prepares you. It does not make you a CNA. To get certified, you finish a state-approved training program, pass your state's competency test and get listed on your state's nurse aide registry. Each state sets its own rules, so you will learn where to check yours.",
    "You will learn the knowledge the job and the test are built on: clean hands, resident rights and privacy, safe daily care, and how to observe and report. Hands-on skills like moving a person or taking a blood pressure are practiced in your supervised program, not at home on a real patient.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task and a two-question quick check. At the end you make your own study and test plan with real dates."
  ],
  finalTask: "Make a one-page CNA study and test plan for your state: the official registry or health department page you checked, two approved programs near you with what they cost and when they start (from their own pages), the parts of your state's test, a weekly study schedule with dates, the five skills you will practice most in class, and one person you will report to if you have a question.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults who want an entry-level health care job: job seekers, young adults, people coming home from prison, immigrants and adults returning to learning. Many are caring people with family caregiving experience but no health care training.",
    startingPoint: "Can read short instructions and use a phone or computer to look things up. Most have not taken a health care class. Some have cared for a relative at home.",
    gap: "Nurse aide jobs need a state-approved program and a passed state test. Learners often do not know the steps, which official page to trust, or the safety and privacy basics the test expects. Knowing the path and the basics helps them choose a real program and finish it.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 7)",
      "Devices: a phone or a library computer; paper is fine for every task",
      "Rules differ by state; the course points to the state registry instead of stating hours or fees",
      "No clinical practice on real people at home; hands-on skills are learned in a supervised program",
      "A past conviction can affect registry listing in some states; learners check their own state's rules"
    ],
    prerequisites: "None. \"Health Literacy: Understanding Your Health Care\" is a helpful first course."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using your state's official nurse aide registry or health department page", action: "list the steps to become a certified nursing assistant in your state", standard: "naming the approved program, the competency test and the registry, with the page you checked" },
    { id: "O2", condition: "Given a care situation", action: "choose when and how to clean your hands and use gloves", standard: "getting at least 4 of 5 situations right" },
    { id: "O3", condition: "Given a short story about a resident", action: "identify whether a resident's rights or privacy are being protected and say what to do if not", standard: "including who you would report to" },
    { id: "O4", condition: "Given a daily care task such as repositioning, helping to walk or serving a meal", action: "put the safety steps in the right order", standard: "with no step that puts the resident or you at risk" },
    { id: "O5", condition: "Given a made-up resident's chart and a change you notice", action: "write a short factual note and report it to the nurse", standard: "using what you saw or measured, not guesses" },
    { id: "O6", condition: "Using your own calendar", action: "build a study and test plan with dates", standard: "covering every part of your state's test" }
  ],
  chapters: [
    {
      name: "Chapter 1: The CNA path and the basics of safe care",
      lessons: [
        {
          title: "What a CNA does and how to get certified",
          objectives: ["O1"],
          minutes: 5,
          goal: "List the steps to become a CNA in your state and find your state's official page.",
          text: [
            "Nursing assistants give basic care and help people with daily living: bathing, dressing, using the toilet, eating, moving and turning. They take vital signs, watch for changes and report them to the nurse. They work under the nurse's direction.",
            "In most states the path has three steps. First, finish a state-approved nurse aide training program. It mixes classroom learning with supervised practice. Second, pass your state's competency test. Third, get listed on your state's nurse aide registry. You must be on the registry to work as a nurse aide in a nursing home.",
            "This course prepares you. It does not give you a certificate. Hours, fees, background checks and test rules differ by state and can change. Check your state's nurse aide registry or health department page, and ask any program you look at whether it is state-approved.",
            "Some programs are free or paid for by an employer, such as a nursing home that hires you while you train. An American Job Center may also help pay for training. Ask before you pay."
          ],
          steps: ["Search the web for your state's name plus \"nurse aide registry\".", "Open the result from your state's government site (often ending in .gov).", "Write down the steps, the test and any background check rules.", "Write down two state-approved programs near you, and check each one's own page."],
          words: [["CNA", "certified nursing assistant: a nurse aide who passed the state test and is on the state registry."], ["Nurse aide registry", "the state's official list of nurse aides who may work in nursing homes."], ["State-approved program", "a training program the state has checked and allowed to train nurse aides."], ["Competency test", "the state test that checks what you know and what you can do."]],
          slides: [
            { title: "What a CNA does", bullets: ["Helps with bathing, dressing, eating and moving", "Takes vital signs and watches for changes", "Reports to the nurse"] },
            { title: "Three steps in most states", bullets: ["1. Finish a state-approved training program", "2. Pass the state competency test", "3. Get listed on the nurse aide registry"] },
            { title: "This course prepares you", bullets: ["It does not give a certificate", "Rules, hours and fees differ by state", "Check your state's registry page"] },
            { title: "Paying for training", bullets: ["Some employers pay while you train", "An American Job Center may help", "Ask before you pay"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Nursing Assistants and Orderlies", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Find your state's nurse aide registry or health department page. On paper, write the three steps for your state, the page address, and one rule you did not know (for example about background checks).",
          youCanNow: "list the steps to become a CNA in your state and find the official page that sets the rules.",
          quickCheck: [
            { objective: "O1", q: "Which step comes after you finish a state-approved training program?", options: ["Start giving medicines", "Pass the state competency test", "Open your own clinic", "Buy a certificate online"], answer: 1, why: "After the program, you pass the state test and then get listed on the registry." },
            { objective: "O1", q: "Where do you check your state's CNA rules?", options: ["A social media post", "A friend who did it years ago", "Your state's nurse aide registry or health department page", "Any ad that says \"get certified fast\""], answer: 2, why: "The state sets the rules, so its official page is the one to trust." }
          ]
        },
        {
          title: "Clean hands and gloves: stopping the spread of germs",
          objectives: ["O2"],
          minutes: 5,
          goal: "Choose when to clean your hands and which way to clean them.",
          text: [
            "Clean hands are the most important way to stop germs from spreading in a care setting. The people you care for are often older or sick, so germs can hurt them more.",
            "The CDC says health care workers should clean their hands right before touching a patient, after touching a patient or their things, after contact with blood or body fluids, and right after taking off gloves.",
            "Alcohol-based hand sanitizer is the usual choice when your hands do not look dirty. Rub it on all surfaces until your hands are dry, which takes about 20 seconds. Use soap and water when your hands look dirty, before eating and after using the restroom. Scrub every part of your hands and fingers.",
            "Gloves help, but they do not replace clean hands. Use a new pair for each resident, never wash and reuse them, and clean your hands as soon as you take them off. Your program will teach you how to put on and take off gloves, gowns and masks in the right order."
          ],
          steps: ["Clean hands right before you touch a resident.", "Put on gloves if you may touch blood, body fluids or broken skin.", "Take gloves off without touching the outside with bare skin.", "Clean hands right after you take gloves off and before you leave the room."],
          words: [["Hand hygiene", "cleaning your hands with hand sanitizer or soap and water."], ["Infection control", "the steps health workers take to stop germs from spreading."], ["PPE", "personal protective equipment: gloves, gowns, masks and eye protection."]],
          slides: [
            { title: "When to clean your hands", bullets: ["Right before touching a resident", "After touching a resident or their things", "After blood or body fluids", "Right after taking off gloves"] },
            { title: "Which way", bullets: ["Hands not dirty: hand sanitizer, rub until dry", "Hands look dirty: soap and water", "Soap and water before eating and after the restroom"] },
            { title: "Gloves", bullets: ["They do not replace clean hands", "New pair for each resident", "Clean hands as soon as they come off"] }
          ],
          sources: [{ name: "CDC: Clinical Safety: Hand Hygiene for Healthcare Workers", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }],
          tryIt: "Practice at your own sink. Wash with soap and water, scrubbing palms, backs, between fingers, thumbs, fingertips and wrists. Then write the four times a CNA must clean hands on a card and keep it for study.",
          youCanNow: "say when a CNA cleans their hands, choose sanitizer or soap and water, and use gloves without skipping clean hands.",
          quickCheck: [
            { objective: "O2", q: "Your hands look dirty after helping a resident. What do you use?", options: ["Hand sanitizer only", "A dry paper towel", "Nothing until your break", "Soap and water"], answer: 3, why: "Soap and water is the choice when hands look dirty." },
            { objective: "O2", q: "You just took off your gloves. What do you do next?", options: ["Clean your hands", "Put the gloves in your pocket to reuse", "Touch the next resident", "Nothing, because you wore gloves"], answer: 0, why: "Gloves do not replace clean hands; clean them right after taking gloves off." }
          ]
        },
        {
          title: "Resident rights, privacy and reporting abuse",
          objectives: ["O3"],
          minutes: 5,
          goal: "Identify when a resident's rights or privacy are not respected and say who you report to.",
          text: [
            "The people you care for have rights. They choose what to wear and when to rest when they can. They have privacy when they bathe or use the toilet. They are spoken to with respect and called by the name they prefer. Knock, say who you are and explain what you are about to do.",
            "Health information is private. A federal law called HIPAA protects it. Share a resident's information only with the care team who need it for their work. Do not talk about residents in the hallway, at home or on social media, and never post photos of them.",
            "Abuse and neglect can be physical, emotional, sexual or financial, such as taking money. Warning signs include bruises nobody can explain, bed sores, poor hygiene, a person who seems afraid or withdrawn, or a sudden change with their money.",
            "If you see or suspect abuse, tell your nurse or supervisor right away. In many states, nurse aides must report suspected abuse. If someone is in danger right now, call 911. The Long-Term Care Ombudsman in your state also helps residents of nursing homes."
          ],
          steps: ["Knock, say your name and explain what you will do.", "Close the curtain or door for private care.", "Share information only with the care team.", "Report signs of abuse or neglect to the nurse right away."],
          words: [["HIPAA", "a federal law that protects the privacy of people's health information."], ["Neglect", "not giving a person the care they need, such as food, cleaning or turning."], ["Ombudsman", "a person who speaks up for residents of nursing homes and helps solve problems."], ["Mandated reporter", "a worker the law requires to report suspected abuse."]],
          slides: [
            { title: "Respect every time", bullets: ["Knock and say who you are", "Explain before you start", "Offer choices when you can", "Close the curtain for private care"] },
            { title: "Privacy (HIPAA)", bullets: ["Share only with the care team", "No talk in hallways or at home", "No photos or social media posts"] },
            { title: "Signs of abuse or neglect", bullets: ["Bruises nobody can explain", "Bed sores or poor hygiene", "Fear, withdrawal, or sudden money changes"] },
            { title: "What you do", bullets: ["Tell your nurse or supervisor right away", "Danger now: call 911", "The ombudsman also helps residents"] }
          ],
          sources: [
            { name: "MedlinePlus: Elder Abuse", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "MedlinePlus: Patient Rights", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Read this made-up story: \"A coworker posts a funny photo of Mr. Lee, a resident, on social media, and tells you Mr. Lee's family never visits.\" Write two problems you see, and what you would do about each.",
          youCanNow: "spot when a resident's rights or privacy are not respected and report it to the right person.",
          quickCheck: [
            { objective: "O3", q: "A friend asks how a resident they know is doing. What do you say?", options: ["Share the resident's health details", "Show them the chart", "Say you cannot share residents' information", "Send them a photo"], answer: 2, why: "Health information is private and goes only to the care team." },
            { objective: "O3", q: "You see bruises on a resident that nobody can explain. What do you do?", options: ["Wait a week to see if they fade", "Tell your nurse or supervisor right away", "Ask the resident to keep it secret", "Post about it online"], answer: 1, why: "Possible abuse is reported to the nurse or supervisor right away." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The CNA path and the basics of safe care",
        questions: [
          { objective: "O1", q: "What must a nurse aide be on to work in a nursing home?", options: ["A social media group", "The state nurse aide registry", "A gym membership list", "A private job board"], answer: 1, why: "Nurse aides must be on the state registry to work in a nursing home." },
          { objective: "O1", q: "A website says \"Get your CNA certificate online in one day.\" What is true?", options: ["It is the fastest real path", "It replaces the state test", "Check the state's list of approved programs first", "Every state accepts it"], answer: 2, why: "Only a state-approved program and the state test lead to the registry; check the state's own page." },
          { objective: "O2", q: "When should a CNA clean their hands?", options: ["Right before touching a resident", "Only at the start of the shift", "Only when hands look dirty", "Only when gloves are torn"], answer: 0, why: "The CDC says clean hands right before touching a patient, among other times." },
          { objective: "O2", q: "Why do you still clean your hands after wearing gloves?", options: ["Gloves make hands cleaner", "It is only for show", "Gloves are reused, so it does not matter", "Gloves can have tiny holes and germs get on hands when you take them off"], answer: 3, why: "Gloves do not replace clean hands; germs can reach your hands." },
          { objective: "O3", q: "Before you help a resident bathe, what do you do?", options: ["Start quickly without talking", "Knock, say who you are, explain and close the curtain", "Leave the door open so others can help", "Ask the resident's roommate to watch"], answer: 1, why: "Knocking, explaining and closing the curtain protect dignity and privacy." }
        ]
      }
    },
    {
      name: "Chapter 2: Daily care, reporting and your test plan",
      lessons: [
        {
          title: "Safe daily care: moving, walking and meals",
          objectives: ["O4"],
          minutes: 6,
          goal: "Put the safety steps for daily care tasks in the right order.",
          text: [
            "Every care task starts the same way: clean your hands, say who you are, explain what you will do, give privacy, and check the care plan. Every task ends the same way too: leave the call light in reach, the bed low and locked, and clean your hands.",
            "People who stay in one position too long can get pressure sores, also called bed sores, over bony places like hips, heels and the back. MedlinePlus says to change position about every two hours and keep skin clean and dry. Follow the turning schedule in the care plan.",
            "Falls are a big risk. Keep floors clear, the call light close and the bed low. Make sure the resident has non-slip footwear. Lock wheelchair and bed wheels before a transfer. Use the gait belt and the number of helpers the care plan says.",
            "Protect your own back. Bend your knees, keep the person or object close, and turn with your feet instead of twisting. Never lift a person alone if the plan says two people or a lift. You will practice transfers only in your supervised program."
          ],
          steps: ["Clean hands, say who you are and explain the task.", "Check the care plan and give privacy.", "Lock wheels and lower or raise the bed to a safe height.", "Do the task the way the care plan says, with help if needed.", "Leave the bed low, the call light in reach and clean your hands."],
          words: [["Activities of daily living (ADLs)", "everyday self-care: bathing, dressing, eating, using the toilet and moving."], ["Care plan", "the written plan from the nurse that says what care each resident gets."], ["Pressure sore", "damaged skin from staying in one position too long, also called a bed sore."], ["Gait belt", "a strong belt put around a person's waist so a helper can hold on while they walk or move."], ["Body mechanics", "using your body in safe ways so you do not hurt your back."]],
          slides: [
            { title: "Start every task", bullets: ["Clean hands and say who you are", "Explain what you will do", "Give privacy and check the care plan"] },
            { title: "Prevent pressure sores", bullets: ["Change position about every 2 hours", "Keep skin clean and dry", "Follow the turning schedule"] },
            { title: "Prevent falls", bullets: ["Clear floors, bed low, call light close", "Non-slip footwear", "Lock wheels before a transfer"] },
            { title: "Protect your back", bullets: ["Bend your knees, keep the load close", "Turn with your feet, do not twist", "Get help when the plan says two"] },
            { title: "End every task", bullets: ["Bed low and locked", "Call light in reach", "Clean your hands"] }
          ],
          sources: [
            { name: "MedlinePlus: Pressure Sores", url: "https://medlineplus.gov/pressuresores.html" },
            { name: "MedlinePlus: Falls", url: "https://medlineplus.gov/falls.html" }
          ],
          tryIt: "Write these steps on cards, mix them up, then put them in order: \"Lock the wheelchair wheels\", \"Clean your hands\", \"Explain what you will do\", \"Leave the call light in reach\", \"Check the care plan\". Then check your order against the lesson.",
          youCanNow: "put the safety steps for daily care in the right order and explain how they prevent falls, sores and back injuries.",
          quickCheck: [
            { objective: "O4", q: "What do you do before helping a resident move from the bed to a wheelchair?", options: ["Take off the resident's shoes", "Raise the bed as high as it goes", "Lock the wheelchair and bed wheels", "Turn off the lights"], answer: 2, why: "Locked wheels stop the chair or bed from rolling during a transfer." },
            { objective: "O4", q: "The care plan says two people for a transfer, but you are alone. What do you do?", options: ["Do it alone to save time", "Wait for help or ask the nurse", "Ask the resident to try alone", "Skip the transfer for the day without telling anyone"], answer: 1, why: "Following the plan protects the resident and you; get help or ask the nurse." }
          ]
        },
        {
          title: "Observing, measuring and reporting",
          objectives: ["O5"],
          minutes: 5,
          goal: "Write a short factual note about a change and report it to the nurse.",
          text: [
            "You see residents more than anyone else, so you are often the first to notice a change. Your job is to observe, record and report. The nurse decides what it means.",
            "The four main vital signs are blood pressure, pulse (heart rate), breathing rate and temperature. You will learn to measure them in your program and practice on classmates under supervision.",
            "Write what you saw, heard or measured, not what you think it means. \"Ate half of lunch. Said, 'My stomach hurts.' Holding her stomach.\" is better than \"She seems sick.\" Write the time and sign your name.",
            "Some changes must be reported right away: new pain, trouble breathing, a fall, a change in how awake or confused someone is, or a big change in a vital sign. When in doubt, tell the nurse."
          ],
          steps: ["Notice the change: what you see, hear or measure.", "Write the facts, the time and your name.", "Report to the nurse right away if it is new or serious.", "Write down that you reported it and to whom."],
          words: [["Vital signs", "measurements of basic body functions: blood pressure, pulse, breathing rate and temperature."], ["Objective", "facts you can see, hear, measure or count."], ["Subjective", "what the resident tells you they feel, written in their words."], ["Chart", "the resident's care record."]],
          slides: [
            { title: "Observe, record, report", bullets: ["You notice changes first", "You record the facts", "The nurse decides what they mean"] },
            { title: "Four vital signs", bullets: ["Blood pressure", "Pulse (heart rate)", "Breathing rate", "Temperature"] },
            { title: "Write facts, not guesses", bullets: ["Good: \"Ate half of lunch. Said 'My stomach hurts.'\"", "Not: \"She seems sick.\"", "Add the time and your name"] },
            { title: "Report right away", bullets: ["New pain or trouble breathing", "A fall", "More confused or sleepy than usual"] }
          ],
          sources: [{ name: "MedlinePlus: Vital Signs", url: "https://medlineplus.gov/vitalsigns.html" }],
          tryIt: "Practice only, with a made-up resident: \"Ms. Rivera usually walks to breakfast. Today at 8:15 she stayed in bed, said 'I feel dizzy,' and did not eat.\" Write a three-line factual note and one sentence you would say to the nurse.",
          youCanNow: "write a short factual note about a change you notice and report it to the nurse.",
          quickCheck: [
            { objective: "O5", q: "Which note is written the right way?", options: ["\"He is being difficult.\"", "\"He is probably getting sick.\"", "\"He looks fine I guess.\"", "\"10:30. Refused lunch. Said, 'My chest feels tight.'\""], answer: 3, why: "It gives the time, what happened and the resident's own words." },
            { objective: "O5", q: "A resident is suddenly much more confused than usual. What do you do?", options: ["Tell the nurse right away", "Wait until the end of your shift", "Give them a medicine from the cart", "Tell only their roommate"], answer: 0, why: "A sudden change in alertness or confusion is reported to the nurse right away." }
          ]
        },
        {
          title: "Getting ready for the state test: your study plan",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Build a study and test plan with real dates for your state's CNA test.",
          text: [
            "In most states the CNA test has two parts: a written test (some states offer it read aloud) and a skills test where you show a few care skills to an evaluator. Your state's registry page or test company page says the exact parts, the skills list and how to sign up.",
            "Use the official candidate handbook if your state has one. It lists the skills, the steps the evaluator watches for and what to bring on test day. Free practice questions from your program help too.",
            "Study a little every day. Practice the skills in class or open lab, where an instructor can watch you. Say each step out loud, including the ones people forget: cleaning hands, giving privacy and leaving the call light in reach.",
            "Plan the practical parts: your ID, how you will get to the test site, child care, and time off work. Write the dates on a calendar."
          ],
          steps: ["Find your state's test parts and candidate handbook on the official page.", "List the skills you need to practice most.", "Set a daily study time and two practice-test dates.", "Write the test date, what to bring and how you will get there."],
          words: [["Candidate handbook", "the official guide from the state or test company that explains the test."], ["Evaluator", "the person who watches and scores your skills test."], ["Skills test", "the part of the test where you show care skills step by step."]],
          slides: [
            { title: "Two parts in most states", bullets: ["A written test (some states offer it read aloud)", "A skills test watched by an evaluator", "Your state's page has the details"] },
            { title: "Use official materials", bullets: ["The candidate handbook and skills list", "Practice questions from your program", "Practice skills where an instructor can watch"] },
            { title: "Steps people forget", bullets: ["Clean hands", "Give privacy", "Call light in reach, bed low"] },
            { title: "Plan test day", bullets: ["ID and what to bring", "Transportation and child care", "Time off work"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Nursing Assistants and Orderlies (How to Become One)", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm#tab-4" }
          ],
          tryIt: "Final task: make your one-page CNA study and test plan. Include your state's official page, two approved programs with their cost and start date from their own pages, the test parts, a weekly study schedule with dates, the five skills you will practice most, and one person you will ask when you have a question.",
          youCanNow: "build a study and test plan with dates that covers every part of your state's CNA test.",
          quickCheck: [
            { objective: "O6", q: "Where do you find the exact skills on your state's test?", options: ["A random video comment", "The official candidate handbook or registry page", "A guess from a friend", "The test does not say"], answer: 1, why: "The official handbook or registry page lists the skills and what the evaluator checks." },
            { objective: "O6", q: "Which study plan is strongest?", options: ["Study the night before the test", "Study only the written part", "Daily study, skills practice in class, practice tests with dates", "Skip practice and hope"], answer: 2, why: "Regular study, supervised skills practice and dated practice tests cover every part." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Daily care, reporting and your test plan",
        questions: [
          { objective: "O4", q: "About how often should a person who cannot move be repositioned, unless the care plan says otherwise?", options: ["Once a day", "Once a week", "Only when they ask", "About every two hours"], answer: 3, why: "MedlinePlus says to change position about every two hours to help prevent pressure sores." },
          { objective: "O4", q: "Which is safe body mechanics?", options: ["Bend at the waist and twist", "Bend your knees and keep the load close", "Lift with your arms straight out", "Lift a heavy person alone fast"], answer: 1, why: "Bending your knees and keeping the load close protects your back." },
          { objective: "O5", q: "Which of these is a vital sign?", options: ["Pulse", "Favorite food", "Shoe size", "Room number"], answer: 0, why: "Pulse, blood pressure, breathing rate and temperature are the main vital signs." },
          { objective: "O5", q: "Who decides what a change in a resident means?", options: ["The CNA alone", "The resident's roommate", "The nurse, after the CNA reports it", "Nobody"], answer: 2, why: "The CNA observes and reports; the nurse decides what it means." },
          { objective: "O6", q: "What should a CNA test plan include?", options: ["Only the test date", "Study times, practice tests, the test date and what to bring", "Only the program's address", "A list of TV shows"], answer: 1, why: "A complete plan covers study, practice and test-day details." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Certified Nursing Assistant (CNA) Preparation",
    questions: [
      { objective: "O1", q: "Which is a main job of a nursing assistant?", options: ["Helping people bathe, dress, eat and move", "Writing prescriptions", "Doing surgery", "Deciding a diagnosis"], answer: 0, why: "CNAs help with daily living and report to the nurse." },
      { objective: "O1", q: "What does this course do?", options: ["Gives you a CNA certificate", "Puts you on the registry", "Prepares you for a state-approved program and the state test", "Replaces the skills test"], answer: 2, why: "The course prepares you; the state program, test and registry make you a CNA." },
      { objective: "O1", q: "What are the three steps in most states?", options: ["Buy a uniform, apply, start work", "Approved program, state test, registry listing", "Online quiz, interview, badge", "Watch videos, sign a form, work"], answer: 1, why: "Most states require an approved program, the competency test and the registry." },
      { objective: "O1", q: "Rules about background checks for nurse aides:", options: ["Are the same everywhere", "Do not exist", "Are only for nurses", "Differ by state, so check your state's page"], answer: 3, why: "Each state sets its own rules, so check the official page." },
      { objective: "O2", q: "Your hands do not look dirty and you are about to touch a resident. What do you use?", options: ["Nothing", "Alcohol-based hand sanitizer, rubbed until dry", "Lotion", "A wet wipe from your bag"], answer: 1, why: "Hand sanitizer is the usual choice when hands do not look dirty." },
      { objective: "O2", q: "How do you use gloves the right way?", options: ["A new pair for each resident, then clean hands", "One pair for the whole shift", "Wash and reuse them", "Wear them instead of cleaning hands"], answer: 0, why: "New gloves for each resident, and clean hands after taking them off." },
      { objective: "O2", q: "When should you use soap and water instead of hand sanitizer?", options: ["Never", "Only on weekends", "When hands look dirty and after using the restroom", "Only before leaving work"], answer: 2, why: "The CDC says soap and water when hands look dirty, before eating and after the restroom." },
      { objective: "O3", q: "Which law protects the privacy of health information?", options: ["OSHA", "HIPAA", "FMLA", "ADA"], answer: 1, why: "HIPAA protects the privacy of health information." },
      { objective: "O3", q: "A coworker posts a photo of a resident online. This is:", options: ["Fine if it is funny", "Fine if the face is blurry", "Good for the facility", "A privacy problem to report"], answer: 3, why: "Photos of residents on social media break their privacy; report it." },
      { objective: "O3", q: "Which is a possible sign of neglect?", options: ["Clean clothes", "A resident who smiles", "Bed sores and poor hygiene", "A visit from family"], answer: 2, why: "Bed sores and poor hygiene can be signs that care is not being given." },
      { objective: "O3", q: "A resident wants to wear a red shirt today, not the blue one you picked. What do you do?", options: ["Help them wear the red shirt", "Insist on the blue one", "Tell them they cannot choose", "Skip dressing them"], answer: 0, why: "Residents have the right to make choices about their own care when they can." },
      { objective: "O4", q: "What do you do at the end of every care task?", options: ["Leave the bed high", "Take the call light away", "Leave the bed low, call light in reach, and clean hands", "Leave the door open for checks"], answer: 2, why: "A low bed, a call light in reach and clean hands keep the resident safe." },
      { objective: "O4", q: "Pressure sores often form over:", options: ["Bony places like hips and heels", "Hair", "Fingernails", "Eyelids"], answer: 0, why: "They form where bone is close to the skin and pressure stays too long." },
      { objective: "O4", q: "To prevent falls, a resident should wear:", options: ["Socks only", "No footwear", "High heels", "Non-slip footwear"], answer: 3, why: "Non-slip footwear helps prevent falls." },
      { objective: "O4", q: "Where are hands-on transfers practiced?", options: ["At home on a family member, alone", "In a supervised, state-approved program", "Only on test day", "From a video only"], answer: 1, why: "Hands-on skills are learned in a supervised program, where an instructor can correct you." },
      { objective: "O5", q: "Which note is factual?", options: ["\"She is lazy today.\"", "\"Probably the flu.\"", "\"2:00. Drank one cup of water. Said, 'I'm cold.'\"", "\"Seems off.\""], answer: 2, why: "It records the time, a measured amount and the resident's own words." },
      { objective: "O5", q: "A resident falls but says they feel fine. What do you do?", options: ["Report the fall to the nurse right away", "Help them up and say nothing", "Write it next week", "Ask them not to tell anyone"], answer: 0, why: "Every fall is reported right away so the nurse can check the resident." },
      { objective: "O5", q: "Which is NOT one of the four main vital signs?", options: ["Temperature", "Breathing rate", "Blood pressure", "Weight of their shoes"], answer: 3, why: "The four main vital signs are blood pressure, pulse, breathing rate and temperature." },
      { objective: "O6", q: "In most states, the CNA test has:", options: ["Only an essay", "A written part and a skills part", "Only an interview", "No test at all"], answer: 1, why: "Most states use a written (or read-aloud) test and a skills test; check your state's page." },
      { objective: "O6", q: "On the skills test, which step do people often forget?", options: ["Saying hello to the evaluator's family", "Bringing snacks", "Cleaning hands and leaving the call light in reach", "Wearing jewelry"], answer: 2, why: "Cleaning hands, privacy and the call light are steps that are easy to skip." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [2, 4, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Official state path", objective: "O1", notYet: "No official page, or the steps came from an ad or a friend.", meets: "Lists the program, test and registry steps from the state's official page, with its address.", exceeds: "Also notes the state's background check rules and who to call with questions." },
      { name: "Approved programs", objective: "O1", notYet: "Programs are missing, or it is not clear they are state-approved.", meets: "Two programs with cost and start date taken from their own pages, and approval checked.", exceeds: "Also lists a free or employer-paid option or help from an American Job Center." },
      { name: "Test parts covered", objective: "O6", notYet: "Only the written part, or no test parts listed.", meets: "Lists every part of the state's test and the five skills to practice most.", exceeds: "Links each skill to the steps people often forget, like clean hands and privacy." },
      { name: "Dated schedule", objective: "O6", notYet: "No dates, or one cram session.", meets: "Weekly study times, two practice-test dates and the test date on a calendar.", exceeds: "Also plans test-day needs: ID, transportation, child care and time off." },
      { name: "Safety and reporting", objective: "O5", notYet: "No person named to report to or ask questions.", meets: "Names the person to ask or report to, such as the instructor or the nurse.", exceeds: "Adds a short practice note written as facts, not guesses." }
    ]
  },
  evaluation: {
    results: [
      "Learners who enroll in a state-approved nurse aide program within 60 days",
      "Learners who pass their state's CNA competency test and are listed on the registry",
      "Learners hired as nurse aides within 6 months (follow-up survey)",
      "Partner programs report fewer students dropping out in the first weeks"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to find the state registry page",
      "Paper, pen and index cards for the \"Try it now\" tasks",
      "A sink with soap for the handwashing practice",
      "A calendar (paper or phone) for the study plan",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Before the course, find your state's nurse aide registry page and a list of local approved programs, and share the links.",
      "Never let learners practice transfers or lifting on each other without a trained instructor and the right equipment.",
      "Say plainly that this course does not certify anyone, and that rules, hours and fees come from the state.",
      "If a learner worries about a past conviction, point them to the state's own rules and to a re-entry or legal aid counselor.",
      "Score the final plan with the rubric and help each learner contact one approved program before they leave."
    ]
  }
};
