"use strict";

// Koach Learn course (shared): "Using a Telemedicine and Patient Portal". Goes in Seniors and Technology and Re-Entry, so the examples are everyday ones: a check-up, a refill, test results, a family caregiver.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js. Records-rights facts checked 27 October 2026 against HealthIT.gov (in `sources`).

module.exports = {
  id: "telemedicine-portal",
  category: "Seniors and Technology",
  name: "Using a Telemedicine and Patient Portal",
  skills: "Signing in to a patient portal, Reading test results and visit notes, Messaging your care team, Requesting refills and appointments, Joining a video visit",
  outcome: "sign in to your patient portal, find your test results and visit notes, send a clear message to your care team, request a refill or appointment, and join a video visit prepared with your questions.",
  about: [
    "Many clinics and hospitals now have a patient portal: a secure website or app where you can see your health information and talk to your care team. Many also offer video visits, sometimes called telemedicine or telehealth, so you can see a doctor or nurse without travelling.",
    "This course shows you how to get into your portal, read results, send messages, ask for refills and appointments, and get ready for and join a video visit.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end. This course teaches how to use the tools; for questions about your own health, always ask your doctor, nurse or pharmacist. In an emergency, call 911, not the portal."
  ],
  finalTask: "Sign in to your patient portal. Find one test result or visit summary, then write (and send, if you have a real question) a short, clear message to your care team with your question. Find where to request a refill or appointment. Finally, write a list of three questions and your current medicines for your next visit, and find where in the portal or email the video visit link will appear.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Patients and caregivers who use clinics, hospitals or health plans in the United States: seniors, people managing ongoing conditions, caregivers who help a relative, people returning to the community and anyone whose clinic now sends results and visit links online.",
    startingPoint: "Can use a phone or computer to open apps and websites and type short messages. Many have been given a portal activation code but never signed in, are worried by results they see online, and have not joined a video visit.",
    gap: "Clinics now share results, visit notes, refills, appointments and video visits through patient portals. Patients who cannot use them wait longer, miss results and messages, run out of medicine, or miss video visits, and some send private health details through unsafe channels.",
    constraints: [
      "Reading level: plain words and short sentences; words like reference range, activation code and eCheck-in are explained",
      "Devices: a phone, tablet or computer with a camera and microphone for video visits",
      "Time: about 5 minutes a lesson, about 60 minutes in total",
      "Not medical advice: health questions go to the learner's own doctor, nurse or pharmacist; emergencies go to 911",
      "Privacy: learners never type their name, birth date or record numbers into an AI tool, and do not send health details by regular email or text"
    ],
    prerequisites: "None. Email and Online Communication helps learners who do not have an email account yet."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an activation code or your clinic's official sign-up link", action: "create your patient portal account and sign in safely", standard: "using the official site or app, a password used nowhere else and two-step verification if offered" },
    { id: "O2", condition: "In your patient portal", action: "find a test result and a visit summary and write down any question about them", standard: "reading the result next to its reference range and taking questions to your care team instead of guessing" },
    { id: "O3", condition: "Given a non-urgent health question", action: "write a short, clear portal message to your care team", standard: "with your question and helpful details, and with anything urgent sent to 911 instead" },
    { id: "O4", condition: "In your patient portal", action: "request a medicine refill and find where to book or change an appointment", standard: "requesting the refill a few days before you run out and calling the clinic when the portal cannot do it" },
    { id: "O5", condition: "The day before a video visit", action: "prepare your device, space, questions and medicine list", standard: "with the device charged, camera and microphone tested, and a written list ready" },
    { id: "O6", condition: "On the day of a video visit", action: "join on time, talk clearly and repeat the plan back before you hang up", standard: "joining 10 to 15 minutes early and checking the visit summary afterwards" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your patient portal",
      lessons: [
        {
          objectives: ["O1"],
          title: "Getting into your patient portal",
          minutes: 5,
          goal: "Create your portal account and sign in safely.",
          text: [
            "A patient portal is a secure website or app from your clinic, hospital or health plan. Common ones include MyChart, used by many health systems, but your clinic's portal may have another name. Ask the front desk which portal they use.",
            "To join, you usually need an activation code from the clinic (printed on a visit summary or sent by text or email) or you sign up with your name, date of birth and a code sent to your phone. Use the link on your clinic's official website or the official app from the app store.",
            "Choose a strong password you do not use anywhere else, and turn on two-step verification if offered. Do not sign in on a shared computer unless you sign out and close the browser afterward."
          ],
          steps: ["Ask your clinic which portal it uses.", "Get your activation code or sign-up link from the clinic.", "Use the clinic's official website or the official app.", "Create a strong, unique password.", "Turn on two-step verification if offered.", "On a shared computer: sign out and close the browser."],
          words: [["Patient portal", "a secure website or app where you see your health information and contact your care team."], ["Activation code", "a one-time code from your clinic that links your portal account to your records."], ["Care team", "your doctor, nurses and other staff who look after your health."]],
          slides: [
            { title: "What a patient portal is", bullets: ["A secure site or app from your clinic or plan", "MyChart is common; ask your clinic which one"] },
            { title: "Signing up", bullets: ["Activation code from the clinic", "Official website or app only"] },
            { title: "Keep it secure", bullets: ["Strong, unique password", "Two-step verification", "Sign out on shared computers"] }
          ],
          tryIt: "Find your clinic's portal from its official website or ask the front desk. Create your account or sign in, then sign out and back in to be sure you can do it alone.",
          youCanNow: "find your clinic's patient portal, create your account and sign in safely.",
          quickCheck: [
            { objective: "O1", q: "Who can tell you which patient portal your clinic uses?", options: ["A search engine ad", "A stranger online", "Your bank", "The clinic's front desk"], answer: 3, why: "Ask the front desk which portal the clinic uses." },
            { objective: "O1", q: "You signed in to your portal on a library computer. What would you do when you finish?", options: ["Leave the page open for later", "Sign out and close the browser", "Save your password in the browser", "Write your password on the desk"], answer: 1, why: "On a shared computer, sign out and close the browser afterwards." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reading test results and visit notes",
          minutes: 5,
          goal: "Find a test result and a visit summary in your portal.",
          text: [
            "Portals have sections such as Test Results, Visits or Appointments, Medications and Health Summary. Results often show your number next to a normal or reference range. A result outside the range is often marked, but it does not always mean something is wrong.",
            "You may see a result before your doctor has talked to you about it. Do not panic, and do not guess. Write down your question and ask your care team. An AI tool can help explain a medical word in simple language, but never type your name, date of birth or record numbers into it, and check its answer with your care team.",
            "HealthIT.gov explains that, under the HIPAA Privacy Rule, you have the right to see and get a copy of your health record, including electronic copies, even if you have not paid your medical bills."
          ],
          steps: ["Open Test Results or Results.", "Tap a result to see your number and the normal range.", "Open Visits to read your visit summary.", "Write down any word or result you do not understand.", "Ask your care team; do not guess."],
          words: [["Reference range", "the usual range of results for healthy people."], ["Visit summary", "notes from your appointment, like your plan and medicines."], ["HIPAA", "a US law that protects your health information and gives you the right to see your records."]],
          slides: [
            { title: "Portal sections", bullets: ["Test Results", "Visits or Appointments", "Medications", "Health Summary"] },
            { title: "Reading a result", bullets: ["Your number next to a normal range", "Outside the range is not always a problem", "Ask; do not guess"] },
            { title: "Using AI to explain words", bullets: ["OK for a medical word in simple language", "Never type your name, birth date or record numbers", "Check with your care team"] },
            { title: "Your right to your records", bullets: ["See and get a copy, including electronic copies", "Even if you have unpaid medical bills"] }
          ],
          sources: [{ name: "HealthIT.gov: How to get your health record", url: "https://www.healthit.gov/how-to-get-your-health-record/" }],
          tryIt: "In your portal, open one test result or visit summary. Write down one word or number you would like explained, to ask your care team.",
          youCanNow: "find and read a test result and visit summary, and know when to ask your care team.",
          quickCheck: [
            { objective: "O2", q: "What does a result outside the reference range mean?", options: ["It is not always a problem; ask your care team", "You definitely have a serious illness", "The test was done wrong", "You should stop all your medicines"], answer: 0, why: "A marked result does not always mean something is wrong; ask your care team." },
            { objective: "O2", q: "Your doctor has not seen your new results yet and you are worried. What would you do?", options: ["Guess what it means from a forum", "Type your name and record number into an AI tool", "Write down your question and ask your care team", "Change your medicines yourself"], answer: 2, why: "Do not panic or guess; write down your question and ask your care team." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Messaging your care team",
          minutes: 5,
          goal: "Send a short, clear message to your care team through the portal.",
          text: [
            "Most portals have a Messages section for questions that are not urgent, like a question about a medicine, a form, or a result. Answers can take a day or more, so do not use messages for anything urgent. For an emergency, call 911.",
            "A good message is short. Say who it is for, your question, and any details that help: when it started, what you have tried, and what you need. For example: \"Since Monday I feel dizzy after my new blood pressure pill in the morning. Should I take it at night instead?\"",
            "Some clinics may bill your insurance for messages that need medical advice. Ask your clinic if you are not sure. Messages in the portal are secure; do not send health details by regular email or text instead."
          ],
          steps: ["Open Messages and choose New message.", "Pick who it is for or the topic.", "Write your question, when it started and what you need.", "Read it once and send.", "Check the portal or your email for the reply.", "Urgent? Call the clinic. Emergency? Call 911."],
          words: [["Secure message", "a private message sent inside the portal."], ["Non-urgent", "can safely wait a day or two for an answer."]],
          slides: [
            { title: "Messages are for non-urgent questions", bullets: ["Medicines, forms, results", "Replies can take a day or more", "Emergency: call 911"] },
            { title: "A clear message", bullets: ["Who it is for and your question", "When it started and what you tried", "What you need"] },
            { title: "Good to know", bullets: ["Some clinics may bill for advice messages", "Use the portal, not regular email or text"] }
          ],
          tryIt: "Open Messages in your portal and draft a short message using the three parts. If you have a real non-urgent question, send it; if not, delete the draft.",
          youCanNow: "write and send a clear, non-urgent message to your care team, and know when to call instead.",
          quickCheck: [
            { objective: "O3", q: "Why should portal messages not be used for urgent problems?", options: ["Messages are not secure", "Messages are always read by a robot", "Answers can take a day or more", "Messages cost money every time"], answer: 2, why: "Replies can take a day or more, so emergencies need 911." },
            { objective: "O3", q: "You have a question about a form your clinic gave you. What would you do?", options: ["Send a short portal message saying what the form is and what you need", "Send your health details by regular email", "Call 911", "Post the question on social media"], answer: 0, why: "Non-urgent questions go in a short, clear portal message." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your patient portal",
        questions: [
          { objective: "O1", q: "What is a patient portal?", options: ["A social media app", "A secure site or app to see your health information and contact your care team", "A pharmacy store", "A government benefits office"], answer: 1, why: "Portals give secure access to your records and care team." },
          { objective: "O1", q: "Where should you get the link to sign up for your portal?", options: ["A text from a stranger", "A search ad", "Your clinic's official website or front desk", "A social media post"], answer: 2, why: "Official sources keep you away from fake sites." },
          { objective: "O2", q: "A test result is outside the normal range and your doctor has not called yet. What do you do?", options: ["Write down your question and ask your care team", "Panic", "Stop all your medicines", "Post it on social media"], answer: 0, why: "A marked result is not always a problem; ask your care team." },
          { objective: "O2", q: "You want an AI tool to explain a medical word. What should you leave out?", options: ["The medical word", "The words \"explain simply\"", "A request for an example", "Your name, birth date and record numbers"], answer: 3, why: "Never put private health identifiers into AI tools." },
          { objective: "O3", q: "You have sudden chest pain. What do you do?", options: ["Send a portal message", "Call 911", "Wait for a video visit next week", "Read your old results"], answer: 1, why: "Portals are for non-urgent questions; emergencies need 911." }
        ]
      }
    },
    {
      name: "Chapter 2: Refills, appointments and video visits",
      lessons: [
        {
          objectives: ["O4"],
          title: "Requesting refills and booking appointments",
          minutes: 4,
          goal: "Request a medicine refill and find where to book or change an appointment.",
          text: [
            "In the Medications section, many portals show a Request refill button next to each medicine. Choose the medicine and your pharmacy, and send. Ask a few days before you run out, because the clinic and pharmacy need time.",
            "In the Appointments or Visits section, you can often see upcoming visits, book some kinds of visits, cancel, or get on a waitlist. Some appointments must be booked by phone; the portal will say so.",
            "Your pharmacy may have its own app that tells you when a refill is ready. If something does not work in the portal, call the clinic; that is always fine."
          ],
          steps: ["Open Medications.", "Tap Request refill next to the medicine.", "Choose your pharmacy and send.", "Ask a few days before you run out.", "Open Appointments to see, book, change or cancel visits."],
          words: [["Refill", "more of a medicine you already take."], ["Waitlist", "a list that offers you an earlier time if someone cancels."]],
          slides: [
            { title: "Refills", bullets: ["Medications section", "Request refill, choose pharmacy, send", "Ask a few days before you run out"] },
            { title: "Appointments", bullets: ["See upcoming visits", "Book, change or cancel some visits", "Some still need a phone call"] },
            { title: "When it does not work", bullets: ["Call the clinic", "That is always fine"] }
          ],
          tryIt: "Open the Medications section in your portal and find the refill button (send a request only if you need one). Then open Appointments and find your next visit or where to book one.",
          youCanNow: "request a refill and find, book or change an appointment in your portal.",
          quickCheck: [
            { objective: "O4", q: "Where do many portals show a Request refill button?", options: ["In the Test Results section", "Next to each medicine in the Medications section", "In the Messages inbox", "On the sign-in page"], answer: 1, why: "Many portals put a refill button next to each medicine." },
            { objective: "O4", q: "The portal's refill button does not work for one of your medicines. What would you do?", options: ["Stop taking the medicine", "Wait until you run out", "Order the medicine from a website ad", "Call the clinic"], answer: 3, why: "If something does not work in the portal, calling the clinic is always fine." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Getting ready for a video visit",
          minutes: 5,
          goal: "Prepare your device, space and questions before a video visit.",
          text: [
            "A video visit (also called telemedicine or telehealth) lets you see a doctor, nurse or counselor on your phone, tablet or computer. It works well for many follow-ups, medicine checks, mental health visits and simple problems. Some problems still need an in-person exam, and your care team will tell you.",
            "Get ready the day before: charge your device, make sure the portal app or video app is installed, and test your camera and microphone. Many portals have a test button or an eCheck-in you can do ahead of time.",
            "Find a quiet, private, well-lit spot. Write down your questions, your symptoms and when they started, and a list of your medicines. Have your glasses, pill bottles and, if helpful, a blood pressure reading or thermometer nearby. A family member or caregiver can join to help if you want."
          ],
          steps: ["Charge your device and check the app is installed.", "Test the camera and microphone.", "Do any eCheck-in in the portal.", "Choose a quiet, private, well-lit spot.", "Write your questions, symptoms and medicines.", "Keep pill bottles and glasses nearby."],
          words: [["Telemedicine or telehealth", "seeing your care team by video or phone instead of in person."], ["eCheck-in", "filling in forms in the portal before your visit."]],
          slides: [
            { title: "What a video visit is", bullets: ["See your care team on a screen", "Good for follow-ups, medicine checks, counseling", "Some problems still need an in-person visit"] },
            { title: "The day before", bullets: ["Charge your device", "Test camera and microphone", "Do the eCheck-in"] },
            { title: "Have ready", bullets: ["Quiet, private, well-lit spot", "Questions, symptoms and medicine list", "Pill bottles and glasses nearby"] }
          ],
          tryIt: "Write a list for your next visit: three questions, your symptoms and when they started, and every medicine you take with the dose. Keep it with your device.",
          youCanNow: "get your device, space and questions ready for a video visit.",
          quickCheck: [
            { objective: "O5", q: "Which kind of visit often works well by video?", options: ["A medicine check or follow-up", "An emergency", "A visit that needs an in-person exam", "Surgery"], answer: 0, why: "Video visits work well for many follow-ups, medicine checks and counseling." },
            { objective: "O5", q: "Your video visit is tomorrow and you are not sure your camera works. What would you do today?", options: ["Wait and see during the visit", "Cancel the visit", "Test the camera and microphone, using the portal's test button if it has one", "Ask the clinic to visit your home"], answer: 2, why: "Testing the day before gives you time to fix a problem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Joining and finishing a video visit",
          minutes: 5,
          goal: "Join a video visit on time, talk clearly and know the next steps.",
          text: [
            "Join 10 to 15 minutes early. Open the appointment in your portal and tap the button to begin the video visit, or use the link the clinic sent you. Allow the camera and microphone when asked. You may wait in a virtual waiting room until the clinician joins.",
            "During the visit, look at the screen, speak clearly and use your list. If the sound or video drops, stay calm; the clinician will usually call you back, so keep your phone nearby. It is fine to ask them to repeat or explain something simply.",
            "Before you hang up, repeat the plan back: \"So I will take the new pill at night, and come back in two weeks?\" Afterwards, check the portal for the visit summary and any new prescriptions or tests."
          ],
          steps: ["Join 10 to 15 minutes early from the portal or the clinic's link.", "Allow camera and microphone.", "Wait in the virtual waiting room.", "Use your list; ask them to explain simply if needed.", "Repeat the plan back before you hang up.", "Read the visit summary in the portal afterwards."],
          words: [["Virtual waiting room", "a screen where you wait until the clinician joins."], ["Clinician", "a doctor, nurse, physician assistant or counselor who treats you."]],
          slides: [
            { title: "Joining", bullets: ["10 to 15 minutes early", "From the portal or the clinic's link", "Allow camera and microphone"] },
            { title: "During the visit", bullets: ["Use your list", "Ask them to explain simply", "Dropped call? Keep your phone nearby"] },
            { title: "Before you hang up", bullets: ["Repeat the plan back", "Ask when to follow up"] },
            { title: "Afterwards", bullets: ["Read the visit summary in the portal", "Check new prescriptions and tests"] }
          ],
          tryIt: "Final task practice: in your portal, open an upcoming or past appointment and find where the video visit button or link appears. Then do the final task: a result, a message, refills and appointments, and your visit list.",
          youCanNow: "join a video visit on time, talk through your list, confirm the plan and find the summary afterwards.",
          quickCheck: [
            { objective: "O6", q: "Where can you usually start a video visit?", options: ["From a link in a random text", "From the appointment in your portal, or the link the clinic sent", "From a search engine ad", "From your bank's app"], answer: 1, why: "Open the appointment in your portal or use the clinic's link." },
            { objective: "O6", q: "The doctor explains a new plan quickly near the end of the visit. What would you do?", options: ["Hang up and guess later", "Ask a neighbor what the doctor meant", "Say nothing to save time", "Ask them to explain simply, then repeat the plan back"], answer: 3, why: "Repeating the plan back makes sure you understood the next steps." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Refills, appointments and video visits",
        questions: [
          { objective: "O4", q: "When is the best time to request a refill?", options: ["After you have run out for a week", "A few days before you run out", "Only at a video visit", "Never through the portal"], answer: 1, why: "The clinic and pharmacy need time to process it." },
          { objective: "O4", q: "The portal says an appointment type must be booked by phone. What do you do?", options: ["Give up", "Send ten messages", "Call the clinic", "Book a different doctor online"], answer: 2, why: "Some visits can only be booked by phone." },
          { objective: "O5", q: "What should you do the day before a video visit?", options: ["Charge your device and test the camera and microphone", "Delete the app", "Change your password", "Nothing"], answer: 0, why: "Testing ahead avoids problems at visit time." },
          { objective: "O6", q: "How early should you join a video visit?", options: ["30 minutes late", "Exactly on time", "Only when they call", "10 to 15 minutes early"], answer: 3, why: "Joining early leaves time for check-in and tech problems." },
          { objective: "O6", q: "Why repeat the plan back before you hang up?", options: ["To make the visit longer", "To make sure you understood what to do next", "It is required to get a refund", "To test the microphone"], answer: 1, why: "Repeating the plan catches misunderstandings." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Using a Telemedicine and Patient Portal",
    questions: [
      { objective: "O1", q: "A common patient portal used by many health systems is:", options: ["MyChart", "TikTok", "DoorDash", "Netflix"], answer: 0, why: "MyChart is widely used; your clinic may use another." },
      { objective: "O1", q: "An activation code comes from:", options: ["A social media friend", "Your clinic", "A pop-up ad", "Any website"], answer: 1, why: "Clinics give activation codes to link your account." },
      { objective: "O1", q: "On a library computer after using your portal, you should:", options: ["Leave it signed in", "Save your password", "Sign out and close the browser", "Write your password on a note"], answer: 2, why: "This keeps the next person out of your health records." },
      { objective: "O1", q: "Which adds the most protection to your portal account?", options: ["A short password", "Sharing your password with a friend", "Using the same password everywhere", "Two-step verification"], answer: 3, why: "Two-step verification needs a code from your phone." },
      { objective: "O2", q: "A reference range is:", options: ["The usual range of results for healthy people", "Your clinic's address", "Your insurance number", "A kind of medicine"], answer: 0, why: "Results are compared with the reference range." },
      { objective: "O2", q: "A result is marked outside the range. This means:", options: ["You must go to the emergency room", "It always means serious illness", "It is not always a problem; ask your care team", "The lab made a mistake"], answer: 2, why: "Marked results need your care team's explanation." },
      { objective: "O2", q: "According to HealthIT.gov, the HIPAA Privacy Rule gives you the right to:", options: ["Free medicine", "Choose your doctor's salary", "See and get a copy of your health record", "Skip all bills"], answer: 2, why: "You have a right to see and get a copy of your record." },
      { objective: "O2", q: "Can a provider refuse your records because you have unpaid medical bills?", options: ["Yes, always", "Only on weekends", "Only for paper copies", "No; HealthIT.gov says you can get them even with unpaid bills"], answer: 3, why: "Unpaid bills do not take away your right to your records." },
      { objective: "O3", q: "Portal messages are best for:", options: ["Emergencies", "Non-urgent questions", "Sending money", "Chatting with strangers"], answer: 1, why: "Replies can take a day or more." },
      { objective: "O3", q: "Which is the clearest portal message?", options: ["\"help\"", "\"?\"", "\"call me\"", "\"Since Monday I feel dizzy after my new morning pill. Should I take it at night?\""], answer: 3, why: "It says what, since when, and what you need." },
      { objective: "O3", q: "Some clinics may bill insurance for:", options: ["Signing in", "Reading results", "Messages that need medical advice", "Changing your password"], answer: 2, why: "Ask your clinic if you are unsure about message billing." },
      { objective: "O4", q: "Where do you usually request a refill in a portal?", options: ["The Medications section", "The Settings page", "The Messages trash", "The login screen"], answer: 0, why: "Refill buttons are next to your medicines." },
      { objective: "O4", q: "A waitlist lets you:", options: ["Change your doctor's notes", "Skip paying", "See other patients' results", "Get an earlier time if someone cancels"], answer: 3, why: "Waitlists offer cancelled slots." },
      { objective: "O5", q: "Video visits work well for:", options: ["Every problem, always", "Broken bones that need an x-ray", "Many follow-ups, medicine checks and counseling", "Emergencies"], answer: 2, why: "Some problems still need in-person care." },
      { objective: "O5", q: "An eCheck-in is:", options: ["A refill", "A bank check", "A video game", "Filling in forms in the portal before your visit"], answer: 3, why: "It saves time at the start of your visit." },
      { objective: "O5", q: "What should you have ready for a video visit?", options: ["Your questions and medicine list", "Loud music", "A busy public place", "Nothing"], answer: 0, why: "A list helps you use the visit well." },
      { objective: "O6", q: "A virtual waiting room is:", options: ["A real room at the clinic", "A chat with other patients", "A screen where you wait until the clinician joins", "A type of bill"], answer: 2, why: "You wait there until the visit starts." },
      { objective: "O6", q: "The video drops during your visit. What do you do?", options: ["Give up on care", "Book a new visit next year", "Post about it", "Stay calm and keep your phone nearby for a call back"], answer: 3, why: "Clinicians often call back if video fails." },
      { objective: "O6", q: "After a video visit, where can you check the plan?", options: ["A social media post", "The app store", "The visit summary in your portal", "A stranger's text"], answer: 2, why: "The summary lists the plan, prescriptions and tests." },
      { objective: "O6", q: "Who should you ask about your own health questions?", options: ["A random website", "Only an AI tool", "A social media comment", "Your doctor, nurse or pharmacist"], answer: 3, why: "Your care team knows your health history." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      5,
      6,
      8,
      9,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Signing in safely",
        objective: "O1",
        notYet: "Cannot sign in, or signed in from an unofficial link.",
        meets: "Signs in through the clinic's official site or app with a password used nowhere else.",
        exceeds: "Also turns on two-step verification if the portal offers it."
      },
      {
        name: "Finding a result or summary",
        objective: "O2",
        notYet: "Cannot find a test result or visit summary.",
        meets: "Finds one test result or visit summary and notes any question about it.",
        exceeds: "Also reads the result against its reference range without guessing what it means."
      },
      {
        name: "Clear message",
        objective: "O3",
        notYet: "The message is unclear, long, or about something urgent.",
        meets: "A short message with the question and helpful details, for a non-urgent need.",
        exceeds: "Includes when it started, what was tried and what is needed."
      },
      {
        name: "Refills and appointments",
        objective: "O4",
        notYet: "Cannot find where to request a refill or appointment.",
        meets: "Finds both the refill request and the appointment section.",
        exceeds: "Also knows which appointments must be booked by phone."
      },
      {
        name: "Ready for the video visit",
        objective: "O5",
        notYet: "No question list or medicine list, or cannot say where the link will appear.",
        meets: "Three questions and a current medicine list, and knows where the video link will appear.",
        exceeds: "Also tests the camera and microphone or completes eCheck-in ahead of time."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report signing in to their portal on their own 30 days later (follow-up survey)",
      "Learners who report requesting a refill or appointment, or sending a message, through the portal",
      "Learners who report joining a video visit on time without help"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer with a camera and microphone",
      "The clinic's activation code or official sign-up link (ask the front desk)",
      "Paper and pen for the question and medicine lists",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Never look at, read out or write down a learner's health information; learners do the portal steps privately on their own screens.",
      "Learners without a portal account can practise with a portal's demo or screenshots, and get an activation code from their clinic before the next session.",
      "Say clearly that the course is not medical advice: questions about results or medicines go to the learner's own care team, and emergencies go to 911.",
      "Do a practice video call in class so learners try allowing the camera and microphone and finding the mute button.",
      "Caregivers can attend with a patient; remind them that some portals offer proxy access the clinic must set up."
    ]
  }
};
