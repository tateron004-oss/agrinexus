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
  chapters: [
    {
      name: "Chapter 1: Your patient portal",
      lessons: [
        {
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
          youCanNow: "find your clinic's patient portal, create your account and sign in safely."
        },
        {
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
          youCanNow: "find and read a test result and visit summary, and know when to ask your care team."
        },
        {
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
          youCanNow: "write and send a clear, non-urgent message to your care team, and know when to call instead."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your patient portal",
        questions: [
          { q: "What is a patient portal?", options: ["A social media app", "A secure site or app to see your health information and contact your care team", "A pharmacy store", "A government benefits office"], answer: 1, why: "Portals give secure access to your records and care team." },
          { q: "Where should you get the link to sign up for your portal?", options: ["A text from a stranger", "A search ad", "Your clinic's official website or front desk", "A social media post"], answer: 2, why: "Official sources keep you away from fake sites." },
          { q: "A test result is outside the normal range and your doctor has not called yet. What do you do?", options: ["Write down your question and ask your care team", "Panic", "Stop all your medicines", "Post it on social media"], answer: 0, why: "A marked result is not always a problem; ask your care team." },
          { q: "You want an AI tool to explain a medical word. What should you leave out?", options: ["The medical word", "The words \"explain simply\"", "A request for an example", "Your name, birth date and record numbers"], answer: 3, why: "Never put private health identifiers into AI tools." },
          { q: "You have sudden chest pain. What do you do?", options: ["Send a portal message", "Call 911", "Wait for a video visit next week", "Read your old results"], answer: 1, why: "Portals are for non-urgent questions; emergencies need 911." }
        ]
      }
    },
    {
      name: "Chapter 2: Refills, appointments and video visits",
      lessons: [
        {
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
          youCanNow: "request a refill and find, book or change an appointment in your portal."
        },
        {
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
          youCanNow: "get your device, space and questions ready for a video visit."
        },
        {
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
          youCanNow: "join a video visit on time, talk through your list, confirm the plan and find the summary afterwards."
        }
      ],
      check: {
        title: "Knowledge Check 2: Refills, appointments and video visits",
        questions: [
          { q: "When is the best time to request a refill?", options: ["After you have run out for a week", "A few days before you run out", "Only at a video visit", "Never through the portal"], answer: 1, why: "The clinic and pharmacy need time to process it." },
          { q: "The portal says an appointment type must be booked by phone. What do you do?", options: ["Give up", "Send ten messages", "Call the clinic", "Book a different doctor online"], answer: 2, why: "Some visits can only be booked by phone." },
          { q: "What should you do the day before a video visit?", options: ["Charge your device and test the camera and microphone", "Delete the app", "Change your password", "Nothing"], answer: 0, why: "Testing ahead avoids problems at visit time." },
          { q: "How early should you join a video visit?", options: ["30 minutes late", "Exactly on time", "Only when they call", "10 to 15 minutes early"], answer: 3, why: "Joining early leaves time for check-in and tech problems." },
          { q: "Why repeat the plan back before you hang up?", options: ["To make the visit longer", "To make sure you understood what to do next", "It is required to get a refund", "To test the microphone"], answer: 1, why: "Repeating the plan catches misunderstandings." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Using a Telemedicine and Patient Portal",
    questions: [
      { q: "A common patient portal used by many health systems is:", options: ["MyChart", "TikTok", "DoorDash", "Netflix"], answer: 0, why: "MyChart is widely used; your clinic may use another." },
      { q: "An activation code comes from:", options: ["A social media friend", "Your clinic", "A pop-up ad", "Any website"], answer: 1, why: "Clinics give activation codes to link your account." },
      { q: "On a library computer after using your portal, you should:", options: ["Leave it signed in", "Save your password", "Sign out and close the browser", "Write your password on a note"], answer: 2, why: "This keeps the next person out of your health records." },
      { q: "Which adds the most protection to your portal account?", options: ["A short password", "Sharing your password with a friend", "Using the same password everywhere", "Two-step verification"], answer: 3, why: "Two-step verification needs a code from your phone." },
      { q: "A reference range is:", options: ["The usual range of results for healthy people", "Your clinic's address", "Your insurance number", "A kind of medicine"], answer: 0, why: "Results are compared with the reference range." },
      { q: "A result is marked outside the range. This means:", options: ["You must go to the emergency room", "It always means serious illness", "It is not always a problem; ask your care team", "The lab made a mistake"], answer: 2, why: "Marked results need your care team's explanation." },
      { q: "According to HealthIT.gov, the HIPAA Privacy Rule gives you the right to:", options: ["Free medicine", "Choose your doctor's salary", "See and get a copy of your health record", "Skip all bills"], answer: 2, why: "You have a right to see and get a copy of your record." },
      { q: "Can a provider refuse your records because you have unpaid medical bills?", options: ["Yes, always", "Only on weekends", "Only for paper copies", "No; HealthIT.gov says you can get them even with unpaid bills"], answer: 3, why: "Unpaid bills do not take away your right to your records." },
      { q: "Portal messages are best for:", options: ["Emergencies", "Non-urgent questions", "Sending money", "Chatting with strangers"], answer: 1, why: "Replies can take a day or more." },
      { q: "Which is the clearest portal message?", options: ["\"help\"", "\"?\"", "\"call me\"", "\"Since Monday I feel dizzy after my new morning pill. Should I take it at night?\""], answer: 3, why: "It says what, since when, and what you need." },
      { q: "Some clinics may bill insurance for:", options: ["Signing in", "Reading results", "Messages that need medical advice", "Changing your password"], answer: 2, why: "Ask your clinic if you are unsure about message billing." },
      { q: "Where do you usually request a refill in a portal?", options: ["The Medications section", "The Settings page", "The Messages trash", "The login screen"], answer: 0, why: "Refill buttons are next to your medicines." },
      { q: "A waitlist lets you:", options: ["Change your doctor's notes", "Skip paying", "See other patients' results", "Get an earlier time if someone cancels"], answer: 3, why: "Waitlists offer cancelled slots." },
      { q: "Video visits work well for:", options: ["Every problem, always", "Broken bones that need an x-ray", "Many follow-ups, medicine checks and counseling", "Emergencies"], answer: 2, why: "Some problems still need in-person care." },
      { q: "An eCheck-in is:", options: ["A refill", "A bank check", "A video game", "Filling in forms in the portal before your visit"], answer: 3, why: "It saves time at the start of your visit." },
      { q: "What should you have ready for a video visit?", options: ["Your questions and medicine list", "Loud music", "A busy public place", "Nothing"], answer: 0, why: "A list helps you use the visit well." },
      { q: "A virtual waiting room is:", options: ["A real room at the clinic", "A chat with other patients", "A screen where you wait until the clinician joins", "A type of bill"], answer: 2, why: "You wait there until the visit starts." },
      { q: "The video drops during your visit. What do you do?", options: ["Give up on care", "Book a new visit next year", "Post about it", "Stay calm and keep your phone nearby for a call back"], answer: 3, why: "Clinicians often call back if video fails." },
      { q: "After a video visit, where can you check the plan?", options: ["A social media post", "The app store", "The visit summary in your portal", "A stranger's text"], answer: 2, why: "The summary lists the plan, prescriptions and tests." },
      { q: "Who should you ask about your own health questions?", options: ["A random website", "Only an AI tool", "A social media comment", "Your doctor, nurse or pharmacist"], answer: 3, why: "Your care team knows your health history." }
    ]
  }
};
