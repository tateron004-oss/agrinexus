"use strict";

// Koach Learn course (Seniors and Technology): "Caregiving: Caring for a Loved One". Asked for by the owner on 28 October 2026 (life skills beyond AI).
// Category: Seniors and Technology. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Phone numbers, programs and caregiver-stress signs checked on eldercare.acl.gov, acl.gov, caregiver.va.gov, medicare.gov, medlineplus.gov and cdc.gov on 28 October 2026.

module.exports = {
  id: "seniors-caregiving",
  category: "Seniors and Technology",
  name: "Caregiving: Caring for a Loved One",
  skills: "Understanding your loved one's needs, Building a care notebook, Managing medicines and appointments, Finding local caregiver help, Sharing the load with family, Caring for yourself as a caregiver",
  outcome: "organize care for a loved one with a care notebook and medicine list, handle appointments and medicines safely with their doctor and pharmacist, find local help through the Eldercare Locator, share tasks with family, and protect your own health with a self-care plan.",
  about: [
    "Many people become caregivers without planning to: a wife helping her husband after a stroke, a man driving his mother to her appointments, a grandmother raising grandchildren while caring for her sister, a neighbor checking in every day. Caregiving can be meaningful, and it can also be tiring and lonely.",
    "This course is for older adults caring for a spouse, partner, friend or relative, and for adult children and grandchildren caring for an older family member. You will get organized, handle medicines and appointments safely, find help in your community, share the work and look after yourself.",
    "This course teaches skills, not medical or legal advice. Check health questions with your loved one's doctor, nurse or pharmacist, and legal or money questions with a qualified professional. Each lesson takes about five minutes with a \"Try it now\" task, a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a starter care notebook for your loved one (real or practice): their key contacts, medicine list, upcoming appointments and the questions for the next one. Then add a one-page help plan: one local resource you contacted or will contact (such as the Eldercare Locator), two specific tasks you will ask family or friends to take on, and your own self-care plan with one weekly break.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in the United States caring for an aging parent, spouse or relative, often older adults themselves, and some grandparents or family members who share the care. Many also work or have health needs of their own.",
    startingPoint: "Already help with rides, meals or medicines, often without a plan. Many keep information in their head or on scraps of paper, do not know about local caregiver services, and do most of the work alone.",
    gap: "Caregivers who are disorganized or alone risk medicine mix-ups, missed appointments and burnout. A care notebook, safe medicine and appointment habits, local services, shared tasks and a self-care plan make care safer for the loved one and sustainable for the caregiver.",
    constraints: [
      "Reading level: plain words, short sentences and large, simple steps",
      "Devices: paper and a binder are enough; a phone or computer helps for shared calendars and finding services",
      "Time: caregivers are busy; about 5 minutes per lesson, fitted around care",
      "Health: medicine changes only through the doctor or pharmacist; the loved one's permission is needed to share health information",
      "Privacy and wellbeing: no full Medicare, Social Security or bank numbers in AI or email; crisis help through 988"
    ],
    prerequisites: "None. \"Medicare Basics\" is a helpful companion course."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a normal day with your loved one", action: "list what they can do on their own and where they need help, in three groups: daily care, health care, and money and paperwork", standard: "after asking what matters most to them" },
    { id: "O2", condition: "Using a binder or a private file on your phone or computer", action: "start a care notebook with contacts, conditions, allergies, insurance and where legal papers are kept", standard: "with no full private numbers typed into AI tools or emails" },
    { id: "O3", condition: "Given your loved one's medicines and next appointment", action: "keep a complete medicine list and write questions for the doctor or pharmacist", standard: "never stopping, starting or changing a medicine without asking them" },
    { id: "O4", condition: "When you need local help", action: "contact the Eldercare Locator or another service to find caregiver support near you", standard: "writing what you learn in the care notebook" },
    { id: "O5", condition: "Given your list of needs", action: "ask family and friends for specific tasks with a time and put them on a shared calendar", standard: "with at least two tasks taken on by others" },
    { id: "O6", condition: "As a caregiver", action: "check yourself for signs of caregiver stress and plan a regular break", standard: "with one weekly break and someone to cover for you" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting organized",
      lessons: [
        {
          objectives: ["O1"],
          title: "Understanding your loved one's needs",
          minutes: 5,
          goal: "List what your loved one can do on their own and where they need help.",
          text: [
            "Caregivers help with many things. MedlinePlus lists washing, meals and medicines; housework, cooking and errands; rides to appointments; company and emotional support; coordinating medical care; and help with health and money decisions.",
            "Start by looking at a normal day. What can your loved one do on their own? What do they find hard: bathing, dressing, cooking, remembering medicines, managing bills, getting to the doctor? Ask them, and listen. People want to keep as much independence and say over their own life as they can.",
            "Write needs down in three groups: daily care, health care, and money and paperwork. This list shows you where help is needed most and what to ask others to do. Needs change over time, so look at it again every few months or after a hospital stay."
          ],
          steps: ["Walk through a normal day with your loved one.", "List what they can do on their own.", "List where they need help: daily care, health care, money and paperwork.", "Ask what matters most to them.", "Review the list every few months or after a hospital stay."],
          words: [["Caregiver", "a person who helps someone who needs support because of age, illness or disability; often family or a friend."], ["Independence", "being able to do things and make choices for yourself."]],
          slides: [
            { title: "What caregivers help with", bullets: ["Washing, meals and medicines", "Housework, errands and rides", "Company, care coordination and decisions"] },
            { title: "Look at a normal day", bullets: ["What can they do on their own?", "What is hard for them?", "Ask them and listen"] },
            { title: "Three groups of needs", bullets: ["Daily care", "Health care", "Money and paperwork"] }
          ],
          sources: [{ name: "MedlinePlus: Caregivers", url: "https://medlineplus.gov/caregivers.html" }],
          tryIt: "Write a needs list for your loved one (or someone you might care for one day) in three columns: daily care, health care, money and paperwork. Circle the two biggest needs.",
          youCanNow: "list your loved one's needs in daily care, health care and paperwork while respecting their independence.",
          quickCheck: [
            { objective: "O1", q: "Which three groups does the course use to sort a loved one's needs?", options: ["Morning, afternoon and night", "Daily care, health care, and money and paperwork", "Family, friends and neighbors", "Food, clothes and housing"], answer: 1, why: "Sorting needs into daily care, health care, and money and paperwork shows where help is needed most." },
            { objective: "O1", q: "Your father can still cook simple meals but forgets his pills. How do you plan help?", options: ["Take over all his cooking too", "Do nothing until there is a problem", "Help with medicines and let him keep cooking, as he wants", "Move him out right away"], answer: 2, why: "People want to keep as much independence as they can, so focus help where it is needed." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building a care notebook",
          minutes: 5,
          goal: "Start a care notebook that keeps key information in one place.",
          text: [
            "The CDC notes that a care plan can help caregivers keep important information in one place. Call it a care notebook: a binder, a folder or a document on your phone or computer that you, family helpers and a substitute caregiver can use.",
            "What goes in it: contacts (doctors, pharmacy, family, neighbors, emergency contacts); a medicine list; health conditions and allergies; insurance information (Medicare, Medicaid, VA or private plan); an appointment calendar; and notes from each visit. Add a copy of any legal papers they have, such as a power of attorney or advance directive, and where the originals are kept.",
            "Keep it safe and private. If you keep it on a computer or phone, use a password. Don't type full Medicare, Social Security or bank numbers into AI tools or emails. A grandchild who is good with technology can help set up a shared calendar or a simple document, with your loved one's permission."
          ],
          steps: ["Choose paper (binder) or digital (phone or computer document).", "Add contacts, conditions, allergies and insurance.", "Add the medicine list and the appointment calendar.", "Note where legal papers are kept.", "Show one backup person where it is."],
          words: [["Care plan", "a written record of a person's needs, care and important information."], ["Power of attorney", "a legal paper that lets someone act for another person, for example with money or health decisions."], ["Advance directive", "a legal paper that says what medical care a person wants if they can't speak for themselves."]],
          slides: [
            { title: "One place for everything", bullets: ["Binder, folder or phone document", "Easy for helpers and backup caregivers"] },
            { title: "What goes in it", bullets: ["Contacts and emergency numbers", "Conditions, allergies, insurance", "Medicine list and appointments", "Where legal papers are kept"] },
            { title: "Keep it safe", bullets: ["Password on digital copies", "No full ID or bank numbers in AI or email", "Show one backup person where it is"] }
          ],
          sources: [{ name: "CDC: Caregiving", url: "https://www.cdc.gov/caregiving/index.html" }],
          tryIt: "Start your care notebook today: on paper or on your phone, write the contacts page (doctor, pharmacy, two family members, emergency contact) and the allergies and conditions page.",
          youCanNow: "set up a care notebook that keeps contacts, health information and appointments in one place.",
          quickCheck: [
            { objective: "O2", q: "What is a care notebook?", options: ["A diary of your feelings", "A medical textbook", "A bill from the doctor", "One place for key care information that you and helpers can use"], answer: 3, why: "A care notebook keeps contacts, medicines, insurance and appointments in one place." },
            { objective: "O2", q: "You keep the care notebook on your phone. What do you do to keep it private?", options: ["Use a password and keep full Medicare and bank numbers out of AI tools and emails", "Post it to social media for family", "Email it to everyone you know", "Paste it all into an AI assistant"], answer: 0, why: "Keep it safe with a password and do not type full private numbers into AI tools or emails." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Managing medicines and appointments",
          minutes: 6,
          goal: "Keep a medicine list and prepare questions for your loved one's next appointment.",
          text: [
            "Medicine mix-ups are common when someone takes several medicines. MedlinePlus advises keeping a list of every medicine with its dose and when it's taken, including over-the-counter medicines, vitamins, supplements and herbs, plus allergies, and bringing it to every visit. Read the label before every dose. A weekly pill organizer can help. Never stop, start or change a medicine without asking the doctor or pharmacist.",
            "The pharmacist is a free expert. Ask: Why is this needed? What side effects should I watch for? Is it safe with the other medicines? Any foods or alcohol to avoid? Using one pharmacy for everything helps them catch problems.",
            "For appointments, bring the care notebook, write questions ahead, take notes, and repeat the plan back to check you understood. Doctors' offices usually need your loved one's permission before sharing their health information with you; ask the office what form they use. For Medicare questions, call 1-800-MEDICARE (1-800-633-4227) and ask how your loved one can let you speak for them, or get free one-on-one help from your state's SHIP (shiphelp.org)."
          ],
          steps: ["Update the medicine list: name, dose, time, what it is for.", "Use one pharmacy and ask the pharmacist your questions.", "Use a pill organizer if it helps; read labels every time.", "Before a visit, write questions; during it, take notes and repeat the plan back.", "Ask the office what permission form lets you get information."],
          words: [["Pill organizer", "a box with spaces for each day (and time) to sort pills ahead."], ["SHIP", "State Health Insurance Assistance Program: free, local help with Medicare questions."]],
          slides: [
            { title: "Medicine list", bullets: ["Every medicine, vitamin, supplement, herb", "Dose, time and what it is for", "Allergies; bring it to every visit"] },
            { title: "Safe habits", bullets: ["Read the label every time", "Pill organizer if it helps", "Never change a medicine without asking"] },
            { title: "Ask the pharmacist", bullets: ["Why is this needed? Side effects?", "Safe with the other medicines?", "Use one pharmacy for everything"] },
            { title: "Appointments", bullets: ["Bring the notebook and questions", "Take notes, repeat the plan back", "Ask what permission form the office uses"] }
          ],
          sources: [
            { name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "SHIP: State Health Insurance Assistance Programs", url: "https://www.shiphelp.org/" }
          ],
          tryIt: "Add the medicine list to your care notebook: name, dose, time, what it is for. Then write three questions for your loved one's next appointment or for the pharmacist.",
          youCanNow: "keep an accurate medicine list, work with the pharmacist and prepare for appointments as a caregiver.",
          quickCheck: [
            { objective: "O3", q: "What belongs on a medicine list?", options: ["Only prescription pills", "Only the medicines taken in the morning", "Every medicine, vitamin, supplement and herb, with dose and time, plus allergies", "Only the most costly ones"], answer: 2, why: "A complete list helps the doctor and pharmacist catch problems." },
            { objective: "O3", q: "The doctor explains a new plan quickly. How do you make sure you understood?", options: ["Nod and leave", "Repeat the plan back in your own words and take notes", "Ask an AI later instead", "Guess at home"], answer: 1, why: "Repeating the plan back checks that you understood it correctly." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting organized",
        questions: [
          { objective: "O1", q: "What is a good first step in understanding your loved one's needs?", options: ["Take over everything right away", "Decide without asking them", "Walk through a normal day and ask them what is hard", "Wait for a crisis"], answer: 2, why: "Looking at a normal day and listening shows where help is really needed." },
          { objective: "O2", q: "What is a care notebook for?", options: ["Keeping key information in one place", "Writing a diary only you can read", "Storing passwords for every account", "Sharing on social media"], answer: 0, why: "A care plan or notebook keeps contacts, medicines and appointments together." },
          { objective: "O2", q: "Which belongs in a care notebook?", options: ["Bank PIN numbers", "The medicine list and doctors' contacts", "Every receipt ever", "Nothing digital or paper"], answer: 1, why: "Contacts, medicines, conditions, insurance and appointments belong there." },
          { objective: "O3", q: "Your loved one wants to stop a medicine because it upsets their stomach. What do you do?", options: ["Stop it right away", "Double the next dose", "Give half to someone else", "Ask the doctor or pharmacist first"], answer: 3, why: "Never stop or change a medicine without asking first." },
          { objective: "O3", q: "The doctor's office won't share information with you. What should you ask?", options: ["What permission form your loved one can sign", "For the doctor's home address", "To see other patients' files", "Nothing; give up"], answer: 0, why: "Offices usually need the patient's permission; ask what form they use." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting help and caring for yourself",
      lessons: [
        {
          objectives: ["O4"],
          title: "Finding help in your community",
          minutes: 5,
          goal: "Find local caregiver services using the Eldercare Locator.",
          text: [
            "You don't have to find everything yourself. The Eldercare Locator, a public service of the Administration for Community Living (ACL), connects older adults and caregivers to local services. Call or text 1-800-677-1116, chat online, or search by location at eldercare.acl.gov. It can connect you to your local Area Agency on Aging.",
            "Through the National Family Caregiver Support Program, states and local agencies offer: information about services, help getting those services, counseling, support groups and caregiver training, respite care (a break for you), and some extra services. It covers adult family caregivers of people 60 and older, of people of any age with Alzheimer's disease or related conditions, and some older relatives raising children or caring for adults with disabilities. Ask what is available near you.",
            "Caring for a veteran? The VA Caregiver Support Program helps caregivers of veterans enrolled in VA health care. Call the Caregiver Support Line at 1-855-260-3274, Monday to Friday, 8 am to 8 pm Eastern. For Medicare questions, your state's SHIP gives free local help."
          ],
          steps: ["Call or text the Eldercare Locator: 1-800-677-1116, or search eldercare.acl.gov.", "Ask for your local Area Agency on Aging.", "Ask about caregiver training, support groups, respite care and meals.", "Caring for a veteran: call 1-855-260-3274.", "Write what you learn in your care notebook."],
          words: [["Area Agency on Aging", "a local office that helps older adults and caregivers find services."], ["Respite care", "short-term care for your loved one so you can take a break."], ["ACL", "Administration for Community Living, part of the US Department of Health and Human Services."]],
          slides: [
            { title: "Eldercare Locator", bullets: ["Call or text 1-800-677-1116", "Or search eldercare.acl.gov", "Connects you to your Area Agency on Aging"] },
            { title: "Help for family caregivers", bullets: ["Information and help getting services", "Counseling, support groups, training", "Respite care: a break for you"] },
            { title: "Caring for a veteran", bullets: ["VA Caregiver Support Line: 1-855-260-3274", "Monday to Friday, 8 am to 8 pm Eastern"] }
          ],
          sources: [
            { name: "Eldercare Locator (ACL)", url: "https://eldercare.acl.gov/" },
            { name: "ACL: National Family Caregiver Support Program", url: "https://www.acl.gov/programs/support-caregivers/national-family-caregiver-support-program" },
            { name: "VA Caregiver Support Program", url: "https://www.caregiver.va.gov/" }
          ],
          tryIt: "Go to eldercare.acl.gov (or call or text 1-800-677-1116) and find your local Area Agency on Aging. Write its name, phone number and one service you want to ask about in your care notebook.",
          youCanNow: "find local caregiver help through the Eldercare Locator and your Area Agency on Aging, and know where veteran caregivers can call.",
          quickCheck: [
            { objective: "O4", q: "What is respite care?", options: ["Short-term care so the caregiver can take a break", "A type of medicine", "A hospital stay", "A legal form"], answer: 0, why: "Respite care gives the caregiver a break, and local agencies may offer it." },
            { objective: "O4", q: "You need meals and a support group near you but do not know where to start. What do you do?", options: ["Search social media", "Wait until a crisis", "Ask the doctor to find everything", "Call or text the Eldercare Locator at 1-800-677-1116"], answer: 3, why: "The Eldercare Locator connects you to local services, including your Area Agency on Aging." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sharing the load with family and friends",
          minutes: 5,
          goal: "Ask family and friends for specific help and set up a shared schedule.",
          text: [
            "Many caregivers do everything alone because they don't want to bother anyone. People often want to help but don't know how. \"Let me know if you need anything\" rarely turns into help; a specific request does.",
            "The CDC suggests naming a specific task or block of time you want help with and using a shared online calendar for regular help. MedlinePlus suggests letting helpers choose tasks they are comfortable with. Examples: \"Can you drive Mom to her Thursday appointment?\" \"Can you call Dad every Sunday evening?\" \"Can you pick up groceries on Saturdays?\" Family who live far away can handle bills, phone calls to insurance, research or video calls.",
            "A short family meeting, in person or by video, helps everyone see the needs list and pick tasks. Include your loved one if they are able. If you work, ask your employer's human resources office about leave: under the federal Family and Medical Leave Act, eligible employees can take up to 12 weeks of unpaid leave a year to care for certain family members."
          ],
          steps: ["Take your needs list from Lesson 1.", "Turn needs into specific tasks with a time.", "Hold a short family meeting (in person or video).", "Let each helper choose tasks; put them on a shared calendar.", "Working? Ask HR about family leave."],
          words: [["Shared calendar", "an online calendar several people can see and add to."], ["FMLA", "the federal Family and Medical Leave Act, which lets eligible workers take unpaid leave to care for family."]],
          slides: [
            { title: "Ask for something specific", bullets: ["Not \"let me know if you need anything\"", "\"Can you drive Mom on Thursday?\""] },
            { title: "Ways people can help", bullets: ["Rides, meals, groceries, visits", "Far away: bills, calls, research, video chats"] },
            { title: "Get everyone together", bullets: ["Short family meeting, in person or video", "Helpers choose tasks", "Put it on a shared calendar"] },
            { title: "If you work", bullets: ["Ask HR about family leave (FMLA)", "Up to 12 weeks unpaid for eligible employees"] }
          ],
          sources: [
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" }
          ],
          tryIt: "Write two specific requests (task, day and time) and send them to two people, or write who you would ask. Example: \"Could you take Dad to his eye appointment on the 14th at 10 am?\"",
          youCanNow: "turn needs into specific requests and share caregiving tasks with family and friends.",
          quickCheck: [
            { objective: "O5", q: "Why use a shared calendar for family help?", options: ["Everyone can see and sign up for tasks", "It replaces the care notebook", "It pays helpers", "It sends medicines"], answer: 0, why: "A shared calendar lets helpers see needs and pick tasks." },
            { objective: "O5", q: "Your brother says, \"Let me know if you need anything.\" What is the best reply?", options: ["\"I'm fine.\"", "\"Everything.\"", "\"Could you take Mom grocery shopping every Saturday morning?\"", "Say nothing"], answer: 2, why: "A specific task with a time is much more likely to turn into real help." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Caring for yourself as a caregiver",
          minutes: 5,
          goal: "Spot signs of caregiver stress and plan regular breaks.",
          text: [
            "The CDC puts it simply: to be an effective caregiver, you must take care of yourself. MedlinePlus lists signs of caregiver stress: feeling overwhelmed or alone, sleeping too much or too little, big weight changes, constant tiredness, losing interest in things you enjoyed, irritability or anger, frequent worry or sadness, frequent headaches or body aches, and smoking or drinking more.",
            "What helps: regular breaks (even a few hours of respite a week can help), asking others for help, a caregiver support group (in person or online), staying in touch with friends, and looking after your own health with activity, healthy meals, sleep and your own checkups. Tell your own doctor you are a caregiver; they may know of support groups.",
            "If you feel hopeless or overwhelmed and it doesn't get better, talk to your doctor or a counselor. In a crisis in the US, call or text 988; veterans and their families can press 1. Now you are ready to finish your care notebook and help plan."
          ],
          steps: ["Check yourself against the signs of caregiver stress.", "Plan one regular break each week, and who covers for you.", "Find a caregiver support group (ask your Area Agency on Aging).", "Keep your own doctor visits and tell your doctor you are a caregiver.", "Crisis: call or text 988."],
          words: [["Caregiver stress", "the physical and emotional strain of caring for someone."], ["Support group", "a group of people in a similar situation who meet to share experiences and tips."]],
          slides: [
            { title: "Signs of caregiver stress", bullets: ["Overwhelmed, alone, always tired", "Sleep or weight changes", "Irritable, sad, worried, aches", "Losing interest; smoking or drinking more"] },
            { title: "What helps", bullets: ["Regular breaks; even a few hours a week", "Ask for help; join a support group", "Your own sleep, meals, activity, checkups"] },
            { title: "Get support", bullets: ["Tell your doctor you are a caregiver", "Crisis: call or text 988; veterans press 1"] }
          ],
          sources: [
            { name: "MedlinePlus: Caregiver Health", url: "https://medlineplus.gov/caregiverhealth.html" },
            { name: "CDC: Caring for Yourself When Caring for Another", url: "https://www.cdc.gov/caregiving/caring-for-yourself/index.html" },
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" }
          ],
          tryIt: "Final task: finish your starter care notebook (contacts, medicine list, appointments and questions) and add a one-page help plan: one local resource you contacted or will contact, two specific tasks for family or friends, and your self-care plan with one weekly break.",
          youCanNow: "spot caregiver stress, plan regular breaks and keep caring for your loved one without losing your own health.",
          quickCheck: [
            { objective: "O6", q: "Which is a sign of caregiver stress?", options: ["Sleeping well and feeling rested", "Feeling overwhelmed, alone or constantly tired", "Enjoying your hobbies", "Seeing friends often"], answer: 1, why: "Feeling overwhelmed or alone and constant tiredness are signs of caregiver stress." },
            { objective: "O6", q: "You have not had a break in months. What is a good first step?", options: ["Keep going until you get sick", "Stop caring for your loved one", "Hide how you feel", "Plan one regular weekly break and ask someone to cover for you"], answer: 3, why: "Even a few hours of respite a week can help, with someone covering for you." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting help and caring for yourself",
        questions: [
          { objective: "O4", q: "What is the Eldercare Locator's phone number (call or text)?", options: ["911", "1-800-677-1116", "411", "988"], answer: 1, why: "The Eldercare Locator connects you to local services at 1-800-677-1116." },
          { objective: "O4", q: "What is respite care?", options: ["A type of medicine", "A hospital bill", "Short-term care so the caregiver can take a break", "A legal paper"], answer: 2, why: "Respite care gives the caregiver time off." },
          { objective: "O5", q: "Which request is most likely to get real help?", options: ["\"Let me know if you need anything.\"", "\"Help sometime.\"", "Saying nothing", "\"Can you drive Mom to her Thursday 2 pm appointment?\""], answer: 3, why: "Specific tasks with a time are easy to say yes to." },
          { objective: "O6", q: "Which is a sign of caregiver stress?", options: ["Constant tiredness and losing interest in things you enjoyed", "Sleeping well", "Laughing with friends", "Keeping your own checkups"], answer: 0, why: "MedlinePlus lists tiredness and losing interest as signs." },
          { objective: "O4", q: "Who can a caregiver of a veteran call for support?", options: ["The VA Caregiver Support Line at 1-855-260-3274", "A random online ad", "Only the hospital billing office", "Nobody"], answer: 0, why: "The VA Caregiver Support Line helps caregivers of enrolled veterans." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Caregiving: Caring for a Loved One",
    questions: [
      { objective: "O1", q: "Which is a common caregiving task?", options: ["Writing the doctor's prescriptions", "Changing laws", "Rides to appointments and help with meals", "Running the hospital"], answer: 2, why: "Rides, meals, medicines and company are common tasks." },
      { objective: "O1", q: "Why ask your loved one what they find hard?", options: ["To respect their independence and focus help where it's needed", "To embarrass them", "Because it's required by law", "It doesn't matter"], answer: 0, why: "Listening keeps them in charge of their life and shows real needs." },
      { objective: "O1", q: "The three groups of needs in this course are:", options: ["Food, TV and phone", "Daily care, health care, and money and paperwork", "Morning, noon and night", "Family, friends and neighbors"], answer: 1, why: "Sorting needs this way shows where help is needed most." },
      { objective: "O1", q: "When should you review the needs list?", options: ["Never", "Only once", "Only if they ask", "Every few months or after a hospital stay"], answer: 3, why: "Needs change over time." },
      { objective: "O2", q: "A care notebook can be:", options: ["Only a paper binder", "A binder, folder or a document on a phone or computer", "Only a social media post", "Only in your memory"], answer: 1, why: "Any format works if it keeps information in one place." },
      { objective: "O2", q: "What is an advance directive?", options: ["A bus schedule", "A pharmacy receipt", "A legal paper saying what medical care someone wants if they can't speak", "A medicine label"], answer: 2, why: "It records the person's wishes for medical care." },
      { objective: "O2", q: "Which should you NOT type into an AI tool or email?", options: ["Full Medicare, Social Security or bank numbers", "A grocery list", "A question about a pill organizer", "The time of an appointment"], answer: 0, why: "Private numbers should stay out of AI tools and email." },
      { objective: "O3", q: "What belongs on a medicine list?", options: ["Only the newest prescription", "Only pills taken in the morning", "Only expensive medicines", "Every medicine, vitamin, supplement and herb, with dose and time"], answer: 3, why: "Everything taken can interact, so list it all." },
      { objective: "O3", q: "Why use one pharmacy for all medicines?", options: ["It is always cheaper", "It is required by law", "The pharmacist can catch problems between medicines", "It has better parking"], answer: 2, why: "One pharmacy sees the full list and can spot problems." },
      { objective: "O3", q: "At an appointment, a good way to check you understood is to:", options: ["Nod and leave", "Repeat the plan back in your own words", "Ask about the weather", "Skip taking notes"], answer: 1, why: "Repeating the plan back catches mistakes early." },
      { objective: "O3", q: "For free, local one-on-one help with Medicare questions, you can contact:", options: ["Your state's SHIP (shiphelp.org)", "A pop-up ad", "A stranger online", "The bank"], answer: 0, why: "SHIPs give free local Medicare counseling." },
      { objective: "O4", q: "Which agency runs the Eldercare Locator?", options: ["The IRS", "A private insurance company", "The post office", "The Administration for Community Living (ACL)"], answer: 3, why: "The Eldercare Locator is a public service of ACL." },
      { objective: "O4", q: "Your local Area Agency on Aging can help you:", options: ["Find caregiver services like training, support groups and respite", "Buy stocks", "Fix your car", "Get a passport"], answer: 0, why: "Area Agencies on Aging connect older adults and caregivers to services." },
      { objective: "O4", q: "The VA Caregiver Support Line is open:", options: ["Only on weekends", "Monday to Friday, 8 am to 8 pm Eastern", "Only at midnight", "One day a year"], answer: 1, why: "The VA lists Monday to Friday, 8 am to 8 pm ET." },
      { objective: "O5", q: "Which is a good way for far-away family to help?", options: ["Do nothing because they're far", "Only send advice", "Handle bills, insurance calls or regular video chats", "Visit once every ten years"], answer: 2, why: "Long-distance helpers can take on calls, bills and check-ins." },
      { objective: "O5", q: "A shared calendar helps because:", options: ["It replaces the doctor", "It is required by Medicare", "It hides tasks from family", "Everyone can see and sign up for tasks"], answer: 3, why: "Helpers can see what is needed and when." },
      { objective: "O5", q: "Under the federal FMLA, eligible employees can take up to:", options: ["1 day of paid leave", "12 weeks of unpaid leave a year to care for certain family", "1 year of paid leave", "No leave at all"], answer: 1, why: "MedlinePlus notes up to 12 weeks of unpaid leave for eligible employees; check with HR." },
      { objective: "O6", q: "According to the CDC, why should caregivers take care of themselves?", options: ["To be an effective caregiver", "Because it is selfish not to", "To avoid all family", "It doesn't matter"], answer: 0, why: "The CDC says you must take care of yourself to be an effective caregiver." },
      { objective: "O6", q: "Which is a helpful step for caregiver stress?", options: ["Never take a break", "Stop seeing your own doctor", "Hide how you feel from everyone", "Join a caregiver support group"], answer: 3, why: "Support groups share experiences and tips." },
      { objective: "O6", q: "A caregiver feels hopeless and overwhelmed. In the US, in a crisis they can:", options: ["Wait it out alone", "Post about it and log off", "Call or text 988", "Call 411"], answer: 2, why: "988 is free and open 24/7; veterans and their families can press 1." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
      9,
      12,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Care notebook",
        objective: "O2",
        notYet: "Key contacts are missing, or full private numbers are written where others can see them.",
        meets: "Key contacts, upcoming appointments and where legal papers are kept, all in one place.",
        exceeds: "A backup person knows where the notebook is and how to use it."
      },
      {
        name: "Medicines and next visit",
        objective: "O3",
        notYet: "The medicine list is incomplete, or there are no questions for the next visit.",
        meets: "A complete medicine list with dose and time, and written questions for the next appointment.",
        exceeds: "Includes vitamins, supplements and allergies, and questions for the pharmacist."
      },
      {
        name: "Local help",
        objective: "O4",
        notYet: "No local resource named.",
        meets: "One local resource contacted or planned, such as the Eldercare Locator.",
        exceeds: "Wrote in the notebook what services are available and next steps."
      },
      {
        name: "Shared tasks",
        objective: "O5",
        notYet: "Tasks are vague, such as \"help out\", or fewer than two.",
        meets: "Two specific tasks with a time, to ask family or friends to take on.",
        exceeds: "Helpers have agreed and the tasks are on a shared calendar."
      },
      {
        name: "Self-care plan",
        objective: "O6",
        notYet: "No break planned.",
        meets: "A self-care plan with one weekly break and someone to cover.",
        exceeds: "Also names a support group or tells their own doctor they are a caregiver."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who contact the Eldercare Locator, an Area Agency on Aging or the VA Caregiver Support Program within 30 days (follow-up survey)",
      "Learners who report family or friends taking on regular care tasks",
      "Learners who report taking a regular break or joining a caregiver support group"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A binder or folder, or a private document on a phone or computer, for the care notebook",
      "The loved one's medicine bottles or current list, and appointment letters (kept private)",
      "A phone to call or text the Eldercare Locator",
      "About 60 minutes in total, in short sessions that fit around care, plus time to fill in the notebook"
    ],
    facilitatorNotes: [
      "Caregivers are often exhausted; offer short sessions and let them do practice tasks at home.",
      "Do not give medical advice; send medicine questions to the loved one's doctor or pharmacist.",
      "Have local Area Agency on Aging and support group contacts ready to hand out.",
      "Watch for signs of caregiver stress in the group, and share 988 for anyone in crisis.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
