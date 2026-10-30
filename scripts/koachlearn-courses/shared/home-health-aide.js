"use strict";

// Koach Learn course (wave 1, job certifications): "Home Health Aide Skills". Prepares learners for home health aide training and work. It does not certify anyone; training and testing come from
// an agency or approved program under federal and state rules. Hands-on care is learned under supervision. Shape and ADDIE parts: see scripts/koachlearn-courses/README.md.

module.exports = {
  id: "home-health-aide",
  category: "Workforce Development",
  name: "Home Health Aide Skills",
  skills: "Knowing the home health aide role and path, Checking a home for safety, Following a care plan with dignity, Writing a visit note and reporting changes, Keeping privacy and boundaries",
  outcome: "explain what a home health aide does and how to get trained in your state, and put together a practice visit kit: a home safety checklist, a care-plan task list and a factual visit note.",
  about: [
    "Home health aides help people live safely at home: older adults, people with disabilities and people getting better after a hospital stay. They help with bathing, dressing, meals and moving around, and they watch for changes and report them to a nurse.",
    "This course prepares you for training and for the job. It does not certify you. Aides who work for home health or hospice agencies paid by Medicare must finish formal training and pass a test, and many states add their own rules. You will learn where to check yours.",
    "You will practice the thinking the job needs: checking a home for safety, following a care plan, writing what you see and keeping a client's information and money safe. Hands-on care like transfers is learned under a nurse's supervision, not on a real person at home.",
    "This is a good path for people coming home from prison too. Rules about background checks differ by state and by agency, so the course shows you how to ask."
  ],
  finalTask: "Make a practice visit kit for a made-up client (practice only): a one-page home safety checklist, a list of the care-plan tasks you would do on one visit in order, a factual visit note with one change you would report, and the name of your state's official page for home health aide rules.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults looking for steady care work: job seekers, people coming home from prison, immigrants, family caregivers who want to be paid for the skills they have, and adults returning to work.",
    startingPoint: "Many have cared for a family member. Few know the difference between a home health aide and a personal care aide, the training rules, or how to write a visit note.",
    gap: "Agencies need aides who are trained, follow the care plan, stay safe in a client's home, report changes and protect privacy. Learners need to know the training path and these habits to get hired and keep clients safe.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 6 to 7)",
      "Devices: a phone or library computer; every task works on paper",
      "Training and testing rules come from federal law, the state and the agency; the course points to official pages and does not state hours or fees",
      "No medication advice or dosing; no hands-on practice on real clients at home",
      "Some learners have records; background-check rules differ by state and agency"
    ],
    prerequisites: "None. \"Caregiving: Caring for a Loved One\" and \"Health Literacy\" are helpful but not required."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Using your state's official page and an agency's job post", action: "describe what a home health aide does and the steps to get trained in your state", standard: "naming the training, the test or competency check, and the page you checked" },
    { id: "O2", condition: "Given a picture or description of a client's home", action: "list the safety hazards and what you would do about each", standard: "finding at least 4 hazards, including one for your own safety" },
    { id: "O3", condition: "Given a care plan for a made-up client", action: "put the visit tasks in order and do each in a way that protects the client's dignity and choices", standard: "staying inside the care plan" },
    { id: "O4", condition: "Given a change you notice on a visit", action: "write a factual visit note and choose whether to call the nurse or 911", standard: "with the time, what you saw or heard, and who you told" },
    { id: "O5", condition: "Given a situation about privacy, money, gifts or possible abuse", action: "choose the action that protects the client and follows the rules", standard: "getting at least 4 of 5 situations right" }
  ],
  chapters: [
    {
      name: "Chapter 1: The job and the home",
      lessons: [
        {
          title: "What a home health aide does and how to get trained",
          objectives: ["O1"],
          minutes: 5,
          goal: "Describe the home health aide role and list the steps to get trained in your state.",
          text: [
            "Home health aides and personal care aides both help people at home with daily tasks like bathing, dressing, meals and laundry. Home health aides may also do basic health tasks, such as checking pulse, temperature and breathing, depending on the state. They are supervised by nurses or other medical staff.",
            "Personal care aides usually give non-medical help, such as companionship, cleaning, cooking and driving. Job posts often use both titles, so read the duties.",
            "Home health and hospice agencies that are paid by Medicare must follow federal rules about their aides. The US Bureau of Labor Statistics says aides at these agencies must finish formal training and pass a standardized test. Some states also require a license or certification, a background check or a competency exam.",
            "This course prepares you. Your training and test come from an agency or approved program. To check your state's rules, go to your state's board or department of health. Many agencies train new aides, sometimes for free, so ask."
          ],
          steps: ["Search for your state's name plus \"home health aide training requirements\" and open the state health department page.", "Write down the training, test and background check rules.", "Look at two job posts from home health agencies near you and list the duties and requirements.", "Ask each agency whether it trains new aides."],
          words: [["Home health aide (HHA)", "a trained aide who gives personal care and some basic health tasks in a client's home, supervised by a nurse."], ["Personal care aide", "an aide who gives non-medical help at home, like cleaning, cooking and companionship."], ["Agency", "a company that sends aides and nurses to clients' homes."], ["Competency test", "a test that checks you know and can do the job's skills."]],
          slides: [
            { title: "Two kinds of aides", bullets: ["Home health aide: personal care plus some basic health tasks", "Personal care aide: non-medical help", "Read the duties in each job post"] },
            { title: "Who supervises", bullets: ["Home health aides work under a nurse", "The nurse writes the care plan", "You follow it and report changes"] },
            { title: "Training rules", bullets: ["Medicare-paid agencies: formal training and a test", "States may add a license, exam or background check", "Check your state's health department page"] },
            { title: "This course prepares you", bullets: ["It does not certify you", "Many agencies train new aides", "Ask before you pay"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Home Health and Personal Care Aides", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Find your state's official page on home health aide rules. Then find one home health agency job post near you. On paper, write the training rule from the state page, three duties from the job post, and one question you would ask the agency.",
          youCanNow: "explain what a home health aide does and find your state's training rules on an official page.",
          quickCheck: [
            { objective: "O1", q: "Who supervises a home health aide?", options: ["The client's neighbor", "Nobody", "A nurse or other medical staff", "The aide's friends"], answer: 2, why: "Home health aides are supervised by nurses or other medical staff." },
            { objective: "O1", q: "Where do you check training rules for home health aides in your state?", options: ["Your state's board or department of health", "An online ad", "A social media comment", "A chain text message"], answer: 0, why: "The state's official health page sets and explains the rules." }
          ]
        },
        {
          title: "Checking a client's home for safety",
          objectives: ["O2"],
          minutes: 5,
          goal: "List the safety hazards in a home and what to do about each.",
          text: [
            "A home is not a hospital. Every home is different, so look around each time you arrive. Falls are one of the biggest dangers for older adults. MedlinePlus lists ways to lower the risk: remove tripping hazards, have rails on stairs and in the tub or shower, and keep eyes checked.",
            "Look for loose rugs, cords across the floor, clutter on stairs, poor lighting, a wet bathroom floor and things the client must reach up high for. Tell your supervisor about hazards you cannot fix, and never move furniture or throw things away without asking the client.",
            "Germs matter at home too. Clean your hands before and after care, wear gloves when you may touch body fluids, and clean your hands right after you take gloves off. Use soap and water when your hands look dirty.",
            "Keep yourself safe. Know the address and your agency's phone number. Ask that pets be put away if they make you uneasy. If you ever feel unsafe, leave and call your supervisor. You are not expected to stay in danger."
          ],
          steps: ["Look around as you arrive: floors, stairs, lighting, bathroom.", "Fix small hazards with the client's OK, like a cord across the path.", "Write down and report hazards you cannot fix.", "If you feel unsafe, leave and call your supervisor."],
          words: [["Hazard", "something that could cause an injury, like a loose rug."], ["Fall risk", "how likely a person is to fall."], ["Grab bar", "a strong bar fixed to the wall to hold on to, often by the toilet or tub."]],
          slides: [
            { title: "Look around every visit", bullets: ["Floors: rugs, cords, clutter", "Stairs and lighting", "Bathroom: wet floors, no rails"] },
            { title: "Lower fall risk", bullets: ["Remove tripping hazards, with the client's OK", "Rails on stairs and in the tub or shower", "Report what you cannot fix"] },
            { title: "Germs at home", bullets: ["Clean hands before and after care", "Gloves for body fluids", "Clean hands after gloves come off"] },
            { title: "Your own safety", bullets: ["Know the address and agency number", "Ask for pets to be put away", "Feel unsafe? Leave and call your supervisor"] }
          ],
          sources: [
            { name: "MedlinePlus: Falls", url: "https://medlineplus.gov/falls.html" },
            { name: "CDC: Clinical Safety: Hand Hygiene for Healthcare Workers", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }
          ],
          tryIt: "Walk through your own home as if you were a home health aide. List at least four hazards you find (for example a loose rug or a dark hallway), what you would do about each, and one thing you would do to stay safe yourself.",
          youCanNow: "check a home for hazards, fix or report them, and protect your own safety on a visit.",
          quickCheck: [
            { objective: "O2", q: "You see a lamp cord across the path to the bathroom. What do you do?", options: ["Ignore it", "With the client's OK, move it out of the path", "Cut the cord", "Throw the lamp away"], answer: 1, why: "Moving a tripping hazard with the client's OK lowers the fall risk." },
            { objective: "O2", q: "A visitor at the client's home makes threats and you feel unsafe. What do you do?", options: ["Stay and finish all tasks first", "Argue with the visitor", "Hide in the bathroom", "Leave and call your supervisor"], answer: 3, why: "Your safety comes first; leave and call your supervisor." }
          ]
        },
        {
          title: "Following the care plan with dignity",
          objectives: ["O3"],
          minutes: 5,
          goal: "Put a visit's care-plan tasks in order and do them in a way that respects the client.",
          text: [
            "The nurse writes a care plan for each client. It says what you do on each visit: for example help with a shower, help getting dressed, make lunch, a short walk, and laundry. Do what the plan says. If the client asks for something that is not on the plan, call your supervisor.",
            "Aides do not change the care plan and do not give medical advice. Depending on the state and the plan, you may remind a client that it is time for their medicine, but you do not decide doses or change medicines. Questions about medicines go to the nurse.",
            "Dignity means treating the client as an adult in charge of their own life. Knock, greet them by the name they prefer, explain what you will do and ask before you start. Offer choices, like which shirt to wear. Let them do what they can for themselves, even if it takes longer. Keep them covered during bathing.",
            "Hands-on tasks such as transfers and bathing someone who cannot stand are learned and checked in your training, under a nurse's supervision."
          ],
          steps: ["Read the care plan before you start.", "Greet the client, explain the plan for today and ask about their wishes.", "Do the tasks in a sensible order, for example bathe before dressing, and meals on time.", "Let the client do what they can and offer choices.", "Call your supervisor about anything not on the plan."],
          words: [["Care plan", "the nurse's written list of what care the client gets and how."], ["Dignity", "treating a person with respect, as an adult who makes their own choices."], ["Scope", "the tasks you are trained and allowed to do in your job."]],
          slides: [
            { title: "The care plan is your guide", bullets: ["Written by the nurse", "Do what it says", "Not on the plan? Call your supervisor"] },
            { title: "Stay in your role", bullets: ["No medical advice", "No changing medicines or doses", "Medicine questions go to the nurse"] },
            { title: "Dignity", bullets: ["Knock, greet, explain, ask", "Offer choices", "Let them do what they can", "Keep them covered"] }
          ],
          tryIt: "Practice only, made-up client: Mrs. Okafor's care plan says \"laundry, help with shower, help with dressing, lunch at noon, 10-minute walk after lunch\". You arrive at 10:30. Write the tasks in the order you would do them and one way you would offer her a choice in each.",
          youCanNow: "follow a care plan in a sensible order, stay inside your role and respect the client's dignity and choices.",
          quickCheck: [
            { objective: "O3", q: "A client asks you to clean their gutters, which is not on the care plan. What do you do?", options: ["Do it to be nice", "Call your supervisor about the request", "Refuse rudely", "Ask a friend to do it for money"], answer: 1, why: "Tasks not on the care plan go to your supervisor." },
            { objective: "O3", q: "A client wants to button their own shirt but is slow. What do you do?", options: ["Do it for them to save time", "Tell them to hurry", "Let them do it and help only if they ask", "Skip the shirt"], answer: 2, why: "Letting clients do what they can protects their dignity and independence." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: The job and the home",
        questions: [
          { objective: "O1", q: "What is a key difference between a home health aide and a personal care aide?", options: ["Home health aides may do some basic health tasks under a nurse", "Personal care aides do surgery", "There is no difference at all", "Home health aides never help with bathing"], answer: 0, why: "Home health aides may check vital signs and similar tasks, depending on the state; personal care aides usually give non-medical help." },
          { objective: "O2", q: "Which is a fall hazard?", options: ["A night light in the hallway", "A rail on the stairs", "A grab bar by the tub", "A loose rug at the top of the stairs"], answer: 3, why: "Loose rugs can cause trips; the others lower the risk." },
          { objective: "O2", q: "You find a hazard you cannot fix, like a broken stair rail. What do you do?", options: ["Fix it with tape", "Write it down and report it to your supervisor", "Say nothing", "Tell the client to stop using the stairs forever"], answer: 1, why: "Hazards you cannot fix are reported so the agency can act." },
          { objective: "O3", q: "The client asks how much of a medicine to take. What do you say?", options: ["Give your best guess", "Tell them to double it", "Say you will ask the nurse", "Look it up and decide for them"], answer: 2, why: "Aides do not give medicine advice or doses; the nurse answers medicine questions." },
          { objective: "O3", q: "Who writes the client's care plan?", options: ["The nurse", "The aide", "The client's neighbor", "Nobody"], answer: 0, why: "The nurse writes the care plan; the aide follows it." }
        ]
      }
    },
    {
      name: "Chapter 2: Reporting, privacy and your visit kit",
      lessons: [
        {
          title: "Watching for changes and writing a visit note",
          objectives: ["O4"],
          minutes: 5,
          goal: "Write a factual visit note and choose whether to call the nurse or 911.",
          text: [
            "You may be the only person who sees the client today. Watch for changes: eating or drinking less, new pain, a new sore or bruise, more confusion, trouble breathing, a fall, or a change in mood.",
            "Write your visit note with facts: what you did, what you saw and heard, and the time. Use the client's own words in quotes. \"11:00. Helped with shower. Red area on right heel, size of a coin. Client said, 'My heel hurts.'\" is a good note. \"Seemed off\" is not.",
            "Call your supervisor or nurse about any change. Call 911 first for an emergency: trouble breathing, chest pain, a person who will not wake up, heavy bleeding, or signs of a stroke. Then call your agency.",
            "Your agency will tell you how it wants notes written, on paper or in an app. Never write private details anywhere else, like your own phone's notes."
          ],
          steps: ["Notice the change.", "Emergency? Call 911 first, then your agency.", "Not an emergency? Call your nurse or supervisor.", "Write the facts, the time, the client's words and who you told."],
          words: [["Visit note", "the record an aide writes about each visit."], ["Emergency", "a sudden, serious danger to life or health that needs 911."], ["Pressure sore", "damaged skin from staying in one position too long; often starts as a red area over a bone."]],
          slides: [
            { title: "Watch for changes", bullets: ["Eating or drinking less", "New pain, sore or bruise", "More confused, a fall, or trouble breathing"] },
            { title: "Write facts", bullets: ["What you did, saw and heard", "The time and the client's own words", "Not: \"Seemed off\""] },
            { title: "Who to call", bullets: ["Emergency: 911 first, then your agency", "Any other change: your nurse or supervisor", "Write down who you told"] }
          ],
          sources: [{ name: "MedlinePlus: Pressure Sores", url: "https://medlineplus.gov/pressuresores.html" }],
          tryIt: "Practice only, made-up client: \"Mr. Diaz usually eats all his lunch. Today he ate two bites, said 'I don't feel like eating,' and his left ankle looks more swollen than last week.\" Write a three-line visit note and decide: call the nurse, or call 911? Write why.",
          youCanNow: "write a factual visit note and choose whether a change needs the nurse or 911.",
          quickCheck: [
            { objective: "O4", q: "Your client has sudden trouble breathing. What do you do first?", options: ["Write a note", "Call 911", "Wait to see if it passes", "Text a friend"], answer: 1, why: "Trouble breathing is an emergency; call 911 first, then the agency." },
            { objective: "O4", q: "Which visit note is best?", options: ["\"Client was weird today.\"", "\"Everything fine I think.\"", "\"Probably a bad day.\"", "\"1:15. Ate 2 bites of lunch. Said, 'I'm not hungry.'\""], answer: 3, why: "It gives the time, what was measured and the client's words." }
          ]
        },
        {
          title: "Privacy, money and boundaries",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choose the action that protects a client's privacy, money and safety.",
          text: [
            "A client's health information is private. HIPAA, a federal law, protects it. Share it only with your care team. Do not talk about clients with friends, post about them or take photos in their home.",
            "Keep clear boundaries about money and gifts. Never borrow money, lend money, take gifts of value or use a client's card unless your agency's rules and the care plan allow a task like shopping with receipts. Follow your agency's rules exactly, and keep receipts.",
            "Older and disabled adults can be victims of abuse, neglect and money theft, sometimes by people close to them. Warning signs include bruises nobody can explain, poor hygiene, bed sores, fear or withdrawal, and sudden changes with money.",
            "If you suspect abuse, tell your supervisor right away. You can also contact Adult Protective Services in your state. If the client is in danger now, call 911. Some states require aides to report; your agency will tell you how."
          ],
          steps: ["Share client information only with the care team.", "Follow agency rules about money, keep receipts, and refuse gifts of value.", "Watch for signs of abuse, neglect or money theft.", "Report concerns to your supervisor, or Adult Protective Services; call 911 for danger."],
          words: [["HIPAA", "a federal law that protects the privacy of health information."], ["Boundary", "a clear limit on what you do in a work relationship."], ["Financial exploitation", "taking or misusing someone's money or belongings."], ["Adult Protective Services (APS)", "the state or county office that looks into abuse and neglect of older or disabled adults."]],
          slides: [
            { title: "Privacy", bullets: ["Share only with the care team", "No talk, posts or photos", "HIPAA protects health information"] },
            { title: "Money and gifts", bullets: ["No borrowing, lending or gifts of value", "Shopping only if the plan allows it, with receipts", "Follow agency rules exactly"] },
            { title: "Signs of abuse", bullets: ["Bruises nobody can explain", "Poor hygiene or bed sores", "Fear, withdrawal or sudden money changes"] },
            { title: "Report it", bullets: ["Tell your supervisor right away", "Adult Protective Services", "Danger now: 911"] }
          ],
          sources: [
            { name: "MedlinePlus: Elder Abuse", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" }
          ],
          tryIt: "Read these three made-up situations and write what you would do: 1) The client offers you $200 \"for being so kind.\" 2) The client's nephew asks for the client's bank card PIN. 3) Your friend asks which famous person you care for. Then write one boundary sentence you could say kindly.",
          youCanNow: "protect a client's privacy, money and safety and report concerns to the right person.",
          quickCheck: [
            { objective: "O5", q: "A client offers you an expensive watch as a thank-you. What do you do?", options: ["Kindly say no and tell your supervisor", "Take it quietly", "Sell it and split the money", "Ask for cash instead"], answer: 0, why: "Gifts of value cross a boundary; refuse kindly and follow agency rules." },
            { objective: "O5", q: "You notice the client's money keeps disappearing after a relative visits. What do you do?", options: ["Confront the relative", "Ignore it, it is family business", "Report it to your supervisor", "Hide the client's wallet in your bag"], answer: 2, why: "Possible financial exploitation is reported to your supervisor or Adult Protective Services." }
          ]
        },
        {
          title: "Your practice visit kit and next steps",
          objectives: ["O2", "O3", "O4", "O1"],
          minutes: 6,
          goal: "Build a practice visit kit for a made-up client and plan your next step toward training.",
          text: [
            "Now you will put the course together. A visit kit is what a prepared aide carries in their head and on paper: a quick home safety check, the care-plan tasks in order, and a clear visit note.",
            "Use a made-up client, for example \"Mr. Johnson, 78, lives alone, uses a walker, care plan: help with shower, dress, make breakfast, short walk, laundry.\" Never use a real person's name or details for practice.",
            "Then take one real step toward the job. Find a home health agency or approved program near you that trains new aides. Ask about training, the test, the background check, pay during training and the schedule. An American Job Center can help you find and pay for training.",
            "On a résumé, list caregiving you have done, such as caring for a family member, in plain words: \"Helped a family member with meals, bathing and appointments for 2 years.\""
          ],
          steps: ["Write a home safety checklist with at least 6 items.", "List the made-up client's care-plan tasks in the order you would do them.", "Write a factual visit note with one change you would report, and who you would tell.", "Write your state's official page and one agency or program you will contact this week."],
          words: [["Visit kit", "your checklist, task list and note format for each visit."], ["Approved program", "a training program your state or a certified agency accepts."]],
          slides: [
            { title: "Your visit kit", bullets: ["Home safety checklist", "Care-plan tasks in order", "A factual visit note"] },
            { title: "Practice only", bullets: ["Use a made-up client", "Never real names or details"] },
            { title: "Your next real step", bullets: ["Find an agency or program that trains aides", "Ask about training, test, background check and pay", "An American Job Center can help"] },
            { title: "Résumé line", bullets: ["List family caregiving in plain words", "Say what you did and for how long"] }
          ],
          sources: [{ name: "US Bureau of Labor Statistics: Home Health and Personal Care Aides (How to Become One)", url: "https://www.bls.gov/ooh/healthcare/home-health-aides-and-personal-care-aides.htm#tab-4" }],
          tryIt: "Final task: make your practice visit kit for a made-up client: a home safety checklist, the care-plan tasks in order, a factual visit note with one change you would report and to whom, and your state's official page plus one agency or program you will contact.",
          youCanNow: "put together a practice visit kit and take a real next step toward home health aide training.",
          quickCheck: [
            { objective: "O1", q: "What is a good question to ask a home health agency?", options: ["\"Can I skip the training?\"", "\"Do you train new aides, and is there a test?\"", "\"Can I give medicines my own way?\"", "\"Can I bring my friends to clients' homes?\""], answer: 1, why: "Asking about training and testing tells you the real path at that agency." },
            { objective: "O3", q: "Your made-up care plan says shower, dress and breakfast. Which order makes sense?", options: ["Shower, dress, then breakfast", "Breakfast in the shower", "Dress, shower, then dress again", "Skip the shower"], answer: 0, why: "Bathing before dressing, then a meal, is a sensible order for these tasks." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Reporting, privacy and your visit kit",
        questions: [
          { objective: "O4", q: "Which change should you report to the nurse?", options: ["The client watched TV", "The client wore a blue shirt", "A new red area on the client's heel", "The client had a visitor"], answer: 2, why: "A new red area can be the start of a pressure sore and must be reported." },
          { objective: "O4", q: "Your client will not wake up. What do you do first?", options: ["Call 911", "Let them sleep", "Write a note and leave", "Call their friend"], answer: 0, why: "A person who will not wake up is an emergency; call 911 first." },
          { objective: "O5", q: "A neighbor asks what is wrong with your client. What do you say?", options: ["Tell them the diagnosis", "Show them the visit notes", "Say you cannot share information about clients", "Post an update online"], answer: 2, why: "Client health information is private and goes only to the care team." },
          { objective: "O5", q: "Who looks into abuse or neglect of older or disabled adults?", options: ["The post office", "Adult Protective Services", "A bank teller", "The client's gym"], answer: 1, why: "Adult Protective Services looks into abuse and neglect; call 911 for immediate danger." },
          { objective: "O5", q: "The client asks to borrow $50 from you. What do you do?", options: ["Lend it quietly", "Lend it and charge interest", "Give them your card", "Kindly say no and tell your supervisor"], answer: 3, why: "Lending money crosses a work boundary; follow agency rules." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Home Health Aide Skills",
    questions: [
      { objective: "O1", q: "Where does a home health aide usually work?", options: ["In clients' homes", "Only in operating rooms", "In a bank", "In a pharmacy lab"], answer: 0, why: "Home health aides help people in their own homes." },
      { objective: "O1", q: "What does this course do?", options: ["Certifies you as an aide", "Replaces your agency's training", "Prepares you for training and the job", "Gives you a state license"], answer: 2, why: "The course prepares you; training and testing come from an agency or approved program." },
      { objective: "O1", q: "Aides at agencies paid by Medicare must:", options: ["Have a nursing degree", "Finish formal training and pass a test", "Work without any training", "Only work at night"], answer: 1, why: "BLS says aides at certified agencies must complete formal training and pass a standardized test." },
      { objective: "O1", q: "To learn your state's rules for home health aides, check:", options: ["A video comment", "A chain text", "A stranger's advice", "Your state's board or department of health"], answer: 3, why: "The state's official health page explains its rules." },
      { objective: "O2", q: "Which is the best way to lower fall risk at home?", options: ["Remove tripping hazards with the client's OK", "Add more rugs", "Turn off hallway lights", "Put things on high shelves"], answer: 0, why: "Removing tripping hazards is one of the main ways to prevent falls." },
      { objective: "O2", q: "When should you clean your hands on a visit?", options: ["Only when you leave", "Before and after care, and after taking off gloves", "Only if the client asks", "Never, gloves are enough"], answer: 1, why: "Clean hands before and after care and right after removing gloves." },
      { objective: "O2", q: "You feel unsafe at a client's home. What do you do?", options: ["Stay until the visit ends", "Lock yourself in a room", "Leave and call your supervisor", "Post about it online"], answer: 2, why: "Your safety comes first; leave and call your supervisor." },
      { objective: "O2", q: "Which helps prevent falls in the bathroom?", options: ["A wet floor", "A loose bath mat", "Dim lights", "Rails or grab bars in the tub or shower"], answer: 3, why: "Rails in the tub or shower help prevent falls." },
      { objective: "O3", q: "A client asks for a task that is not on the care plan. You:", options: ["Call your supervisor", "Do it anyway", "Say no and leave", "Ask another client"], answer: 0, why: "Changes to the plan go through your supervisor." },
      { objective: "O3", q: "Which shows respect for a client's dignity?", options: ["Deciding everything for them", "Offering choices, like which shirt to wear", "Talking about them as if they are not there", "Leaving them uncovered during a bath"], answer: 1, why: "Offering choices treats the client as an adult in charge of their life." },
      { objective: "O3", q: "Who answers questions about a client's medicines?", options: ["The aide", "The client's neighbor", "The nurse", "A website forum"], answer: 2, why: "Aides do not give medicine advice; the nurse answers medicine questions." },
      { objective: "O3", q: "Before starting care, what do you do?", options: ["Start without talking", "Read the care plan, greet the client and explain", "Rearrange the furniture", "Change the care plan"], answer: 1, why: "Reading the plan, greeting and explaining comes first." },
      { objective: "O4", q: "Which is an emergency that needs 911 first?", options: ["The client wants a snack", "The client is bored", "The laundry is late", "Chest pain or trouble breathing"], answer: 3, why: "Chest pain and trouble breathing need 911 first, then the agency." },
      { objective: "O4", q: "A good visit note includes:", options: ["The time, what you saw and the client's words", "Your opinion of the client's family", "Guesses about what is wrong", "Private details on your own phone"], answer: 0, why: "Notes are facts with the time and the client's own words." },
      { objective: "O4", q: "The client is eating much less than usual this week. You:", options: ["Say nothing", "Report it to the nurse and write it in your note", "Make them eat everything", "Throw away their food"], answer: 1, why: "A change in eating is reported and written down." },
      { objective: "O4", q: "After calling 911 for an emergency, you also:", options: ["Go home", "Delete your notes", "Call your agency", "Wait a day to tell anyone"], answer: 2, why: "After 911, call your agency so the nurse and supervisor know." },
      { objective: "O5", q: "Which law protects clients' health information?", options: ["HIPAA", "The speed limit", "The minimum wage law", "Copyright law"], answer: 0, why: "HIPAA protects the privacy of health information." },
      { objective: "O5", q: "Which is a warning sign of financial exploitation?", options: ["The client pays a bill on time", "The client buys groceries", "The client has a library card", "Sudden, unexplained changes with the client's money"], answer: 3, why: "Sudden money changes can mean someone is taking the client's money." },
      { objective: "O5", q: "Taking photos of a client in their home to share with friends is:", options: ["Fine if they look happy", "A privacy problem; do not do it", "Required by the agency", "Fine if you blur the house"], answer: 1, why: "Photos and posts about clients break their privacy." },
      { objective: "O5", q: "You suspect a client is being neglected by a family member. You:", options: ["Tell the client's neighbors", "Wait until it gets worse", "Report it to your supervisor or Adult Protective Services", "Do nothing because it is family"], answer: 2, why: "Suspected neglect is reported; call 911 if there is danger now." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [1, 2, 4, 6, 9, 10, 13, 17, 19] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and check it again.",
    criteria: [
      { name: "Home safety checklist", objective: "O2", notYet: "Fewer than 4 items, or no item for the aide's own safety.", meets: "At least 6 items covering floors, stairs, lighting, bathroom, germs and the aide's safety.", exceeds: "Says what to do about each item: fix with the client's OK, or report." },
      { name: "Care-plan tasks", objective: "O3", notYet: "Tasks are missing, out of a sensible order, or outside the plan.", meets: "All plan tasks in a sensible order, with one way to offer a choice.", exceeds: "Notes which tasks the client can do part of themselves." },
      { name: "Visit note", objective: "O4", notYet: "The note has guesses or opinions, or no time.", meets: "Facts, the time, the client's own words and who was told.", exceeds: "Correctly says whether the change needs the nurse or 911, and why." },
      { name: "Privacy kept", objective: "O5", notYet: "The kit uses a real person's name or private details.", meets: "Uses a made-up client and no private details.", exceeds: "Adds one boundary sentence about money or gifts." },
      { name: "Next step", objective: "O1", notYet: "No official page or agency listed.", meets: "Lists the state's official page and one agency or program to contact.", exceeds: "Lists the questions to ask about training, test, background check and pay." }
    ]
  },
  evaluation: {
    results: [
      "Learners who contact a home health agency or approved training program within 30 days",
      "Learners who finish home health aide training and pass the competency test",
      "Learners hired as home health or personal care aides within 6 months (follow-up survey)",
      "Partner agencies report new aides who report changes and follow care plans from their first weeks"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet to find the state health department page and local agencies",
      "Paper and pen for the checklist, task list and visit note",
      "Your own home for the safety walk-through",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Before the course, find your state's home health aide rules and two local agencies that train new aides, and share them.",
      "Use made-up clients only; remind learners never to use a real person's name or details in practice.",
      "Do not let learners practice transfers or bathing on each other without a trained instructor.",
      "Say plainly that the course prepares learners and does not certify them; rules come from federal law, the state and the agency.",
      "For learners with a record, point them to the state's rules and a re-entry or legal aid counselor before they apply."
    ]
  }
};
