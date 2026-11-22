"use strict";

// Koach Learn course (shared): "Health Literacy: Understanding Your Health Care". Asked for by the owner on 28 October 2026 (life skills beyond AI).
// Categories: Seniors and Technology, Re-Entry, Youth, Veterans (military), Workforce Development, Undeserved Community. Shape and rules: ../README.md;
// model: ../re-entry/reentry-ai-digital-confidence.js. Teaches how to find, understand and use health information; always says to check with a doctor or pharmacist.
// Phone numbers and definitions checked on official pages 28 October 2026.

module.exports = {
  id: "health-literacy",
  category: "Seniors and Technology",
  name: "Health Literacy: Understanding Your Health Care",
  skills: "Finding trustworthy health information, Preparing for a medical visit, Asking questions and checking you understood, Reading medicine labels and keeping a medicine list, Using test results and patient portals, Understanding health coverage words",
  outcome: "prepare for a doctor's visit with a symptom note, a question list and a medicine list, ask questions until you understand, repeat the plan back in your own words, and find trustworthy answers and the right person to ask about medicines, test results and costs.",
  about: [
    "Health literacy means being able to find, understand and use health information to make decisions for yourself and the people you care for. It is a skill anyone can learn. Even doctors get confused by medical words outside their own field.",
    "This course is for everyone: older adults managing several medicines, young people going to the doctor on their own for the first time, veterans using VA care, workers choosing a health plan, people coming home from prison who need to restart care, and anyone who has left a visit thinking \"What did they just say?\"",
    "You will learn how to spot trustworthy health information, prepare for a visit, ask good questions, read a medicine label, use a patient portal and understand insurance words. This course teaches skills; it does not give medical advice. Always check decisions about your health with your doctor, nurse or pharmacist.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Make a one-page visit sheet for a real or practice appointment: a short note about your symptom or concern (when it started, what makes it better or worse), your top three questions, and a full medicine list (prescriptions, over-the-counter medicines, vitamins, supplements and allergies). After the visit (or a practice run with a friend), write the plan in your own words: what the problem is, what you need to do, and why.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Older adults managing several medicines, young people going to the doctor alone for the first time, veterans using VA care, workers choosing a health plan, people coming home from prison who need to restart care, and caregivers.",
    startingPoint: "Go to the doctor and take medicines, but often leave visits unsure what was said, do not keep a full medicine list, have not used a patient portal and find insurance words confusing.",
    gap: "Not understanding health information leads to medicine mistakes, missed care and surprise costs. Learners need to find trustworthy information, prepare for visits, ask until they understand and know who to ask about medicines, results and costs, so they can take part in decisions about their own and their family's health.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Not medical advice; every health decision is checked with a doctor, nurse or pharmacist",
      "Privacy: no health details or portal passwords shared in class or typed into AI tools",
      "Devices: a phone or computer; some learners have no patient portal yet",
      "Language: some learners need an interpreter at visits"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a health website or post", action: "check whether the source is trustworthy and look up a health word on a trusted site such as medlineplus.gov", standard: "writing the meaning in your own words" },
    { id: "O2", condition: "Before a medical visit", action: "write a visit sheet with your concern, your top three questions and a full medicine list", standard: "with when the symptom started and what makes it better or worse" },
    { id: "O3", condition: "During a visit or role-play", action: "ask questions until you understand and repeat the plan back in your own words", standard: "covering what the problem is, what to do and why" },
    { id: "O4", condition: "Given a medicine, vitamin or supplement", action: "read the label and add it to your medicine list with name, dose, how often, what it is for and a warning", standard: "with one question written for a pharmacist" },
    { id: "O5", condition: "Using a patient portal or your clinic", action: "find a test result or visit note and write questions about it", standard: "with at least two questions for your provider" },
    { id: "O6", condition: "Given common health coverage words", action: "explain words such as deductible, copay and in-network and name who to ask about costs", standard: "in your own words without help" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting ready and talking with your provider",
      lessons: [
        {
          objectives: ["O1"],
          title: "Finding health information you can trust",
          minutes: 5,
          goal: "Tell a trustworthy health source from an untrustworthy one.",
          text: [
            "Health information is everywhere: websites, social media, TV ads, friends and AI chatbots. Some of it is excellent. Some is old, wrong or trying to sell you something.",
            "Good free places to start in the US: MedlinePlus (medlineplus.gov) from the National Library of Medicine, the CDC (cdc.gov), and the National Institutes of Health (nih.gov). Official US government sites end in .gov. Hospitals, universities and well-known medical groups are often good too.",
            "Ask four questions about any source: Who wrote it? When was it updated? Is it trying to sell me something? Does it match what other trusted sources say? An AI assistant can explain a hard medical word in simple language, but it can be wrong. Check what it says on a trusted site, and never type your full name, ID or insurance numbers into it. Your doctor or pharmacist has the final word for you."
          ],
          steps: ["Find who made the page.", "Look for the date it was updated.", "Check if it is selling something.", "Compare with MedlinePlus or another .gov site.", "Bring your questions to your doctor or pharmacist."],
          words: [["Health literacy", "being able to find, understand and use health information to make decisions."], ["MedlinePlus", "a free US government health information website from the National Library of Medicine."]],
          slides: [
            { title: "Health literacy is a skill", bullets: ["Find health information", "Understand it", "Use it to make decisions"] },
            { title: "Trusted places to start", bullets: ["medlineplus.gov", "cdc.gov and nih.gov", "Official US sites end in .gov"] },
            { title: "Four questions for any source", bullets: ["Who wrote it?", "When was it updated?", "Is it selling something?", "Does it match other trusted sources?"] },
            { title: "AI can explain, not decide", bullets: ["Use it to explain hard words", "Check it on a trusted site", "Your doctor or pharmacist has the final word"] }
          ],
          sources: [
            { name: "MedlinePlus: Health Literacy", url: "https://medlineplus.gov/healthliteracy.html" },
            { name: "CDC: What Is Health Literacy?", url: "https://www.cdc.gov/health-literacy/php/about/index.html" }
          ],
          tryIt: "Pick a health word you have heard but do not fully understand (for example blood pressure, cholesterol or asthma). Look it up on medlineplus.gov and write a one-sentence meaning in your own words.",
          youCanNow: "find health information on trusted sites and check any source with four simple questions.",
          quickCheck: [
            { objective: "O1", q: "Which detail makes a health website more trustworthy?", options: ["It sells a product on every page", "It has lots of exclamation marks", "It shows who wrote it and when it was last updated", "It promises a cure"], answer: 2, why: "Knowing who wrote it and when helps you judge the information." },
            { objective: "O1", q: "A friend shares a post saying a tea cures high blood pressure. What would you do?", options: ["Stop your blood pressure medicine", "Share it with family", "Buy the tea right away", "Check a trusted site and ask your doctor"], answer: 3, why: "Health claims are checked on trusted sites and with your provider." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Preparing for a medical visit",
          minutes: 5,
          goal: "Make a visit sheet with your concern, questions and medicine list.",
          text: [
            "Visits are often short. Preparing ahead helps you remember everything and helps the provider understand you. MedlinePlus suggests writing down your questions, describing your symptoms in writing, and listing your allergies and every medicine, herb, vitamin and supplement you take.",
            "For a symptom, write: what it is, when it started, how often it happens, what makes it better or worse, and what you have tried. Put your top three questions first, so the most important ones get answered.",
            "You can bring a trusted friend or family member to listen and take notes. If you need an interpreter, ask the office ahead of time to arrange one. Bring your insurance or Medicare card, a photo ID and your medicine list or the bottles themselves."
          ],
          steps: ["Write your concern: what, when it started, how often, what helps or hurts.", "Write your top three questions.", "List every medicine, vitamin, supplement and allergy.", "Ask someone to come with you if it helps.", "Ask for an interpreter ahead of time if you need one."],
          words: [["Provider", "a doctor, nurse practitioner, physician assistant or other professional who gives health care."], ["Symptom", "a change in your body or mind that you notice, like pain, a cough or tiredness."], ["Supplement", "a vitamin, mineral, herb or other product you take to add to your diet."]],
          slides: [
            { title: "Why prepare", bullets: ["Visits are short", "You remember everything", "The provider understands you better"] },
            { title: "Describe your symptom", bullets: ["What it is and when it started", "How often it happens", "What makes it better or worse"] },
            { title: "Bring with you", bullets: ["Top three questions", "Medicine list or the bottles", "Insurance or Medicare card and ID"] },
            { title: "You don't have to go alone", bullets: ["Bring someone to take notes", "Ask ahead for an interpreter"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Start your visit sheet. Write one real or practice concern with when it started and what makes it better or worse, then your top three questions.",
          youCanNow: "prepare a visit sheet with your concern, your top questions and what to bring.",
          quickCheck: [
            { objective: "O2", q: "Why bring a full medicine list to a visit?", options: ["So the doctor can check everything you take works safely together", "Because it is required to get in", "So you do not need to talk", "To show you take a lot"], answer: 0, why: "A full list helps your provider avoid harmful mixes and mistakes." },
            { objective: "O2", q: "You have five worries but a short appointment. What would you do?", options: ["Bring none of them up", "Write your top three questions and ask the most important first", "Talk very fast about all five", "Save them all for next year"], answer: 1, why: "Putting your top questions first makes sure the most important ones are answered." }
          ]
        },
        {
          objectives: ["O3"],
          title: "During the visit: asking questions and checking you understood",
          minutes: 5,
          goal: "Ask questions until you understand and repeat the plan back in your own words.",
          text: [
            "You have the right to understand your care. If the provider uses a word you do not know, say: \"Can you explain that in simpler words?\" If they go too fast, say: \"Can you slow down?\" You can ask them to write instructions down.",
            "Three questions cover most visits: What is my main problem? What do I need to do? Why is it important for me to do this? Keep asking until you can answer all three.",
            "Before you leave, use teach-back: say the plan back in your own words. \"So I take one pill each morning with food, and I come back in two weeks. If my ankle swells, I call you.\" If you missed something, the provider can fix it right then. Also ask how to reach the office later and what to do if things get worse."
          ],
          steps: ["Ask what any unknown word means.", "Ask the three questions: main problem, what to do, why.", "Take notes or have your helper take them.", "Say the plan back in your own words (teach-back).", "Ask how to reach the office and what to do if things get worse."],
          words: [["Teach-back", "saying the plan back in your own words to check you understood it."], ["Follow-up", "a later visit or call to check how you are doing."]],
          slides: [
            { title: "It's okay to ask", bullets: ["\"Can you explain that in simpler words?\"", "\"Can you slow down?\"", "\"Can you write that down?\""] },
            { title: "Three key questions", bullets: ["What is my main problem?", "What do I need to do?", "Why is it important?"] },
            { title: "Teach-back", bullets: ["Say the plan in your own words", "The provider fixes anything you missed"] },
            { title: "Before you leave", bullets: ["How do I reach the office?", "What if things get worse?"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "Role-play with a friend or say it out loud: your friend reads a short doctor's instruction (for example \"Take this twice a day for 10 days and finish it all\"). Ask one question about it, then teach it back in your own words.",
          youCanNow: "ask clear questions during a visit and use teach-back to check you understood the plan.",
          quickCheck: [
            { objective: "O3", q: "Which is one of the three key questions to ask at a visit?", options: ["How much does the doctor earn?", "Why is it important for me to do this?", "Can I skip my medicine?", "How long is the wait?"], answer: 1, why: "The three key questions are: what is my main problem, what do I need to do, and why is it important." },
            { objective: "O3", q: "The doctor says to take a pill \"twice daily with food.\" What would you do before leaving?", options: ["Nod and leave", "Ask a stranger in the waiting room", "Say it back: \"So I take it at breakfast and dinner with food, right?\"", "Guess later at home"], answer: 2, why: "Teach-back checks that you understood the plan correctly." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting ready and talking with your provider",
        questions: [
          { objective: "O1", q: "Which website is a trustworthy place to start for health information?", options: ["A social media post from a stranger", "An ad for a miracle pill", "medlineplus.gov", "A random forum comment"], answer: 2, why: "MedlinePlus is a free US government health site from the National Library of Medicine." },
          { objective: "O2", q: "What should you write about a symptom before a visit?", options: ["When it started and what makes it better or worse", "Nothing; the doctor will guess", "Only your favorite color", "Your bank account number"], answer: 0, why: "Clear details about the symptom help the provider understand you." },
          { objective: "O2", q: "What belongs on your medicine list?", options: ["Only prescriptions", "Only pills you took today", "Nothing; the pharmacy knows", "Prescriptions, over-the-counter medicines, vitamins, supplements and allergies"], answer: 3, why: "Everything you take can matter, including vitamins and supplements." },
          { objective: "O3", q: "The doctor uses a word you don't understand. What do you do?", options: ["Nod and pretend", "Ask them to explain it in simpler words", "Leave the visit", "Look it up next year"], answer: 1, why: "You have the right to understand your care; asking is normal." },
          { objective: "O3", q: "What is teach-back?", options: ["Teaching the doctor medicine", "Asking for a refund", "Saying the plan back in your own words", "Reading the plan silently"], answer: 2, why: "Teach-back checks that you understood, so mistakes can be fixed right away." }
        ]
      }
    },
    {
      name: "Chapter 2: Using your health information",
      lessons: [
        {
          objectives: ["O4"],
          title: "Medicines: reading the label and keeping a list",
          minutes: 5,
          goal: "Read a medicine label and keep an up-to-date medicine list.",
          text: [
            "Medicine mistakes are common and often preventable. MedlinePlus advises keeping a list of every medicine with its dose and when you take it, including over-the-counter products, vitamins, supplements and herbs, plus any allergies, and bringing it to every visit.",
            "Read the label every time, not from memory. Look for: the medicine name, how much to take (the dose), how often and when, how long, warnings (for example \"may cause drowsiness\" or \"take with food\"), and the refill and expiration information. Over-the-counter medicines have a Drug Facts label with uses, warnings and directions.",
            "Your pharmacist is a free expert. Ask: Why am I taking this? What side effects are common and what should I do? When should I stop? Is it safe with my other medicines and supplements? Do I need to avoid any foods or alcohol? Never stop or change a prescribed medicine without asking your doctor or pharmacist first."
          ],
          steps: ["Read the name, dose, how often and how long.", "Read the warnings.", "Add it to your medicine list with the dose and time.", "Ask the pharmacist your questions.", "Bring the list to every visit and update it when anything changes."],
          words: [["Dose", "how much of a medicine to take at one time."], ["Over-the-counter (OTC)", "medicine you can buy without a prescription."], ["Side effect", "an extra effect of a medicine that you did not want, like an upset stomach."]],
          slides: [
            { title: "Read the label every time", bullets: ["Name and dose", "How often, when and how long", "Warnings: drowsiness, take with food"] },
            { title: "Keep a medicine list", bullets: ["Every medicine, vitamin, supplement, herb", "Dose and time of day", "Allergies; bring it to every visit"] },
            { title: "Ask your pharmacist", bullets: ["Why am I taking this? What side effects?", "Safe with my other medicines?", "Any foods or alcohol to avoid?"] },
            { title: "Never change on your own", bullets: ["Ask your doctor or pharmacist before you stop or change"] }
          ],
          sources: [{ name: "MedlinePlus: Medication Errors", url: "https://medlineplus.gov/medicationerrors.html" }],
          tryIt: "Take one medicine, vitamin or supplement you (or a family member) use. Read the label and add it to your medicine list: name, dose, how often, what it is for and one warning. Write one question to ask a pharmacist.",
          youCanNow: "read a medicine label, keep a complete medicine list and ask a pharmacist the right questions.",
          quickCheck: [
            { objective: "O4", q: "What does \"dose\" mean on a medicine label?", options: ["How much medicine to take at one time", "The price of the medicine", "The date it was made", "The name of the pharmacy"], answer: 0, why: "The dose is the amount you take at one time." },
            { objective: "O4", q: "You start a new vitamin. What would you do with your medicine list?", options: ["Leave it off because vitamins do not count", "Wait until your next birthday", "Only tell your friends", "Add it to the list and ask the pharmacist if it is safe with your other medicines"], answer: 3, why: "Vitamins and supplements belong on the list and can mix with medicines." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Test results, patient portals and your records",
          minutes: 5,
          goal: "Find a test result in a patient portal and write questions about it.",
          text: [
            "Many clinics and hospitals have a patient portal: a secure website or app where you can see test results, visit notes and upcoming appointments, request refills, and message your care team. MedlinePlus recommends learning how to access your records so you can keep track of results, treatment plans and medicines. Veterans can use VA's online tools; ask your VA team how to sign up.",
            "Test results often show your number next to a \"normal\" or reference range. A result marked high or low is not always a problem; it depends on you, your history and other results. Do not panic and do not change your treatment on your own. Write down questions and ask your provider what the result means for you.",
            "Keep your portal safe: use a strong password, never share it, and sign out on shared or library computers. If you need help signing up, call the clinic's front desk. A family member or caregiver can often get access with your permission; ask the office how."
          ],
          steps: ["Ask your clinic how to sign up for the patient portal.", "Find your latest test result.", "Look at your number and the reference range.", "Write questions: What does this mean for me? Do I need to do anything?", "Send the question through the portal or ask at your next visit."],
          words: [["Patient portal", "a secure website or app where you see your health records and message your care team."], ["Reference range", "the range of results that is usual for most healthy people."]],
          slides: [
            { title: "What a patient portal does", bullets: ["See test results and visit notes", "Request refills and see appointments", "Message your care team"] },
            { title: "Reading a result", bullets: ["Your number and a reference range", "High or low is not always a problem", "Ask what it means for you"] },
            { title: "Keep it safe", bullets: ["Strong password, never shared", "Sign out on shared computers", "Ask the clinic about caregiver access"] }
          ],
          sources: [{ name: "MedlinePlus: Talking With Your Doctor", url: "https://medlineplus.gov/talkingwithyourdoctor.html" }],
          tryIt: "If you have a patient portal, sign in and find one recent result or visit note. If you don't, call or ask your clinic how to sign up. Either way, write two questions you would ask about a test result.",
          youCanNow: "use a patient portal safely, read a result next to its reference range and ask your provider what it means for you.",
          quickCheck: [
            { objective: "O5", q: "What can you usually do in a patient portal?", options: ["Change your own prescriptions", "See your records and message your care team", "Order medicine without a prescription", "Read other patients' results"], answer: 1, why: "A portal is a secure place to see your records and message your care team." },
            { objective: "O5", q: "You used a library computer to check your portal. What would you do when you finish?", options: ["Leave it open for next time", "Write your password on a note by the computer", "Sign out and close the browser", "Turn off the screen only"], answer: 2, why: "Signing out on shared computers keeps your health records private." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Health coverage words and your visit kit",
          minutes: 6,
          goal: "Explain common health coverage words and know who to ask about costs.",
          text: [
            "Cost words confuse almost everyone. HealthCare.gov defines them. A premium is what you pay for your plan, usually each month. A deductible is the amount you pay for covered care before your plan starts to pay. A copayment (copay) is a set dollar amount you pay for a covered service, such as a visit. In-network providers have a contract with your plan and usually cost you less.",
            "Before a test or visit, you can ask: \"Is this provider in my network?\" \"About how much will I pay?\" Call the number on your insurance card. Medicare: call 1-800-MEDICARE (1-800-633-4227), open 24 hours a day, 7 days a week except some federal holidays. Veterans can ask the VA about their benefits. Many community health centers offer care on a sliding scale based on income; search findahealthcenter.hrsa.gov and ask the center about fees.",
            "Now put it together. Your visit kit is your visit sheet (concern and top questions), your medicine list, your insurance card and ID, and a pen or phone for notes. After the visit, write the plan in your own words."
          ],
          steps: ["Learn four words: premium, deductible, copay, in-network.", "Before care, ask if the provider is in your network and what you may pay.", "Call the number on your card, or 1-800-MEDICARE for Medicare.", "Pack your visit kit: visit sheet, medicine list, card, ID, notes.", "After the visit, write the plan in your own words."],
          words: [["Premium", "what you pay for your health plan, usually every month."], ["Deductible", "what you pay for covered care before your plan starts to pay."], ["Copay", "a set dollar amount you pay for a covered service."], ["In-network", "providers that have a contract with your plan; they usually cost you less."]],
          slides: [
            { title: "Four coverage words", bullets: ["Premium: what you pay for the plan, often monthly", "Deductible: what you pay before the plan pays", "Copay: a set amount per service", "In-network: contracted providers, usually cheaper"] },
            { title: "Ask before you go", bullets: ["\"Is this provider in my network?\"", "\"About how much will I pay?\"", "Call the number on your card"] },
            { title: "Where to ask", bullets: ["Medicare: 1-800-633-4227, 24/7", "Veterans: ask the VA", "Community health centers: findahealthcenter.hrsa.gov"] },
            { title: "Your visit kit", bullets: ["Visit sheet and medicine list", "Insurance card and ID", "Notes; write the plan after"] }
          ],
          sources: [
            { name: "HealthCare.gov Glossary: Deductible", url: "https://www.healthcare.gov/glossary/deductible/" },
            { name: "HealthCare.gov Glossary: Copayment", url: "https://www.healthcare.gov/glossary/co-payment/" },
            { name: "Medicare.gov: Talk to Someone", url: "https://www.medicare.gov/talk-to-someone" },
            { name: "HRSA: Find a Health Center", url: "https://findahealthcenter.hrsa.gov/" }
          ],
          tryIt: "Final task: finish your one-page visit sheet with your concern, your top three questions and your full medicine list. After a real visit, or a practice run with a friend playing the doctor, write the plan in your own words: the main problem, what to do, and why.",
          youCanNow: "explain common coverage words, ask about costs before care, and bring a complete visit kit to every appointment.",
          quickCheck: [
            { objective: "O6", q: "What does \"in-network\" mean?", options: ["The provider is on social media", "The provider is in your neighborhood", "The provider is free", "The provider has a contract with your plan and usually costs you less"], answer: 3, why: "In-network providers have a contract with your plan." },
            { objective: "O6", q: "You are unsure what a visit will cost you. What would you do?", options: ["Ask your plan or the office about costs before the visit", "Skip the visit", "Guess and hope", "Ask a stranger online"], answer: 0, why: "Your plan or the office can tell you about costs ahead of time." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using your health information",
        questions: [
          { objective: "O4", q: "Before taking a dose of medicine, you should:", options: ["Rely on memory", "Read the label every time", "Guess the dose", "Take a friend's pill"], answer: 1, why: "Reading the label each time prevents mistakes." },
          { objective: "O4", q: "You want to stop a prescribed medicine because of a side effect. What do you do first?", options: ["Stop it right away", "Double the dose", "Give it to a friend", "Ask your doctor or pharmacist"], answer: 3, why: "Never stop or change a prescribed medicine without checking first." },
          { objective: "O5", q: "What is a patient portal?", options: ["A secure website or app to see your records and message your care team", "A hospital door", "A social media group", "A pharmacy coupon"], answer: 0, why: "Portals show results and let you message your team." },
          { objective: "O5", q: "A test result is marked \"high\" in your portal. What is the best next step?", options: ["Panic", "Change your medicine yourself", "Write your questions and ask your provider what it means for you", "Ignore it forever"], answer: 2, why: "High or low is not always a problem; your provider explains what it means for you." },
          { objective: "O6", q: "What is a deductible?", options: ["A set amount for each visit", "The monthly cost of your plan", "A discount coupon", "What you pay for covered care before your plan starts to pay"], answer: 3, why: "HealthCare.gov defines the deductible as what you pay before your plan starts to pay." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Health Literacy: Understanding Your Health Care",
    questions: [
      { objective: "O1", q: "Health literacy means:", options: ["Being a doctor", "Being able to find, understand and use health information", "Reading fast", "Knowing every medical word"], answer: 1, why: "It is the skill of finding, understanding and using health information." },
      { objective: "O1", q: "Official US government websites end in:", options: [".gov", ".shop", ".win", ".xyz"], answer: 0, why: ".gov sites like medlineplus.gov and cdc.gov are official." },
      { objective: "O1", q: "Which question helps you judge a health website?", options: ["Is it colorful?", "Does it have many ads?", "When was it last updated?", "Is it long?"], answer: 2, why: "Old information can be wrong; check the update date." },
      { objective: "O1", q: "An AI assistant explains a medical word. What should you do?", options: ["Type your insurance number to get a better answer", "Change your treatment based on it", "Share it as fact", "Check it on a trusted site and ask your provider"], answer: 3, why: "AI can be wrong; check it and let your provider have the final word." },
      { objective: "O2", q: "Which belongs on a visit sheet?", options: ["Your top three questions", "Your bank password", "A shopping list", "Nothing"], answer: 0, why: "Writing questions first makes sure the most important ones get answered." },
      { objective: "O2", q: "You need an interpreter for a visit. When should you ask?", options: ["Never", "After the visit", "Ahead of time, when you book", "Only if the doctor offers"], answer: 2, why: "Asking ahead lets the office arrange one." },
      { objective: "O2", q: "Which describes a symptom well?", options: ["\"I feel bad.\"", "\"Sharp knee pain for 2 weeks, worse on stairs, better with rest.\"", "\"Something is wrong.\"", "\"Same as always.\""], answer: 1, why: "It says what, how long, and what makes it better or worse." },
      { objective: "O2", q: "Who can you bring to a visit to help?", options: ["Nobody is ever allowed", "Only a lawyer", "Only a child under 5", "A trusted friend or family member to take notes"], answer: 3, why: "A helper can listen and take notes." },
      { objective: "O3", q: "Which is one of the three key questions to ask at a visit?", options: ["What do I need to do?", "What car do you drive?", "How old is this building?", "Can I skip my follow-up?"], answer: 0, why: "Main problem, what to do and why: these three cover most visits." },
      { objective: "O3", q: "The doctor is talking too fast. You can say:", options: ["Nothing", "\"I'll figure it out later.\"", "\"Can you slow down and write that down?\"", "\"Never mind.\""], answer: 2, why: "Asking them to slow down or write it down is your right." },
      { objective: "O3", q: "Saying the plan back in your own words is called:", options: ["A refill", "Teach-back", "A deductible", "A copay"], answer: 1, why: "Teach-back checks your understanding before you leave." },
      { objective: "O3", q: "Before leaving a visit you should also ask:", options: ["Nothing", "Where the cafeteria is", "For free samples only", "How to reach the office and what to do if things get worse"], answer: 3, why: "Knowing how to reach them and when to call keeps you safe." },
      { objective: "O4", q: "Which is a free expert on your medicines?", options: ["A social media influencer", "An online ad", "Your pharmacist", "A stranger at the bus stop"], answer: 2, why: "Pharmacists answer medicine questions at no charge." },
      { objective: "O4", q: "\"Dose\" means:", options: ["How much medicine to take at one time", "The price of a medicine", "The pharmacy's name", "The expiration date"], answer: 0, why: "The dose is the amount per time." },
      { objective: "O4", q: "Which question should you ask a pharmacist about a new medicine?", options: ["What color is the bottle?", "Can I share it with my family?", "Can I stop whenever I want?", "Is it safe with my other medicines and supplements?"], answer: 3, why: "Medicines and supplements can affect each other." },
      { objective: "O5", q: "A \"reference range\" on a test result is:", options: ["Your doctor's phone number", "The range of results usual for most healthy people", "The price of the test", "A type of insurance"], answer: 1, why: "Your number is shown next to the usual range." },
      { objective: "O5", q: "How do you keep your patient portal safe?", options: ["Use a strong password and sign out on shared computers", "Share your password with friends", "Write the password on the screen", "Stay signed in at the library"], answer: 0, why: "A strong private password and signing out protect your records." },
      { objective: "O6", q: "What is a copay?", options: ["The monthly cost of your plan", "A free visit", "A set dollar amount you pay for a covered service", "A medicine label"], answer: 2, why: "HealthCare.gov defines a copay as a set amount for a covered service." },
      { objective: "O6", q: "Where can someone with Medicare call with questions?", options: ["911", "411", "Any number from a text message", "1-800-MEDICARE (1-800-633-4227)"], answer: 3, why: "1-800-MEDICARE is Medicare's official number." },
      { objective: "O6", q: "\"In-network\" providers:", options: ["Never accept insurance", "Have a contract with your plan and usually cost you less", "Only work online", "Are always free"], answer: 1, why: "In-network providers are contracted with your plan, which usually lowers your cost." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      2,
      4,
      6,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Symptom note",
        objective: "O2",
        notYet: "The concern is vague, or it is missing when it started.",
        meets: "Says what the concern is, when it started and what makes it better or worse.",
        exceeds: "Also notes how it affects daily life."
      },
      {
        name: "Top three questions",
        objective: "O3",
        notYet: "Fewer than three questions, or they are unclear.",
        meets: "Three clear questions with the most important first.",
        exceeds: "Includes the three key questions: the problem, what to do and why."
      },
      {
        name: "Medicine list",
        objective: "O4",
        notYet: "Missing over-the-counter medicines, vitamins, supplements or allergies.",
        meets: "Every prescription, over-the-counter medicine, vitamin, supplement and allergy, with dose and how often.",
        exceeds: "Also lists what each one is for and a question for the pharmacist."
      },
      {
        name: "Plan in your own words",
        objective: "O3",
        notYet: "The plan is missing, or copies the doctor's words without understanding.",
        meets: "Says the main problem, what to do and why, in the learner's own words.",
        exceeds: "Also notes how to reach the office and what to do if things get worse."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who bring a visit sheet or medicine list to a real appointment within 60 days (follow-up survey)",
      "Learners who report using teach-back or asking a question they would not have asked before",
      "Learners who sign up for or use a patient portal within 60 days",
      "Learners who start another Koach Learn health or life-skills course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen or a phone note for the visit sheet",
      "Labels from one medicine, vitamin or supplement",
      "A phone or computer with internet for medlineplus.gov and a patient portal, if the learner has one",
      "About 60 minutes in total"
    ],
    facilitatorNotes: [
      "Remind learners at the start that this course teaches skills and does not give medical advice.",
      "Use practice concerns and sample medicine labels in class; learners never have to share their own health details.",
      "Practice teach-back in pairs, with one learner reading a sample instruction as the doctor.",
      "Help learners who need an interpreter learn how to ask for one when they book a visit.",
      "Score the visit sheet and plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
