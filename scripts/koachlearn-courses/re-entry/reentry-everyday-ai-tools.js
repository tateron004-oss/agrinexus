"use strict";

// Koach Learn course: Re-Entry -> "Everyday AI Tools". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Facts checked 27 October 2026: 211 connects people to local help (housing, food, transportation, health care); calls are confidential and can be anonymous; dial 211 or search 211.org.

module.exports = {
  id: "reentry-everyday-ai-tools",
  category: "Re-Entry",
  name: "Everyday AI Tools",
  skills: "Setting reminders by voice, Getting transit directions, Reading and translating with the camera, Finding local help, Writing everyday messages with AI, Making a document checklist",
  outcome: "use the free AI tools on a smartphone to get to an appointment on time: get bus or train directions, set a reminder, make a checklist of what to bring, and write a short message if you are running late.",
  about: [
    "This course is for people coming home who want to use a smartphone to handle everyday life: appointments, getting around, reading forms, finding help and keeping in touch.",
    "You will use tools that are free and already on most phones: the voice assistant, maps, the camera's reading tools, and an AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini. Every example comes from real life after release: job interviews, ID offices, housing appointments and family.",
    "Each lesson takes about five minutes. Read it, look at the slides, and do the \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course. You never need to type a case number, ID number or any private detail to do these tasks."
  ],
  finalTask: "Plan getting to a real appointment (a job interview, an ID office or a housing visit): get transit or walking directions, set a reminder for when to leave, ask AI for a checklist of what to bring, and have AI help you write a short, polite text to send if you are running late.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults coming home from prison (re-entry) who have a smartphone and need to handle appointments, travel, forms and messages on their own. Many were away while phones and AI tools changed.",
    startingPoint: "Can make calls and send texts. Little use of voice assistants, maps, camera reading tools or AI assistants. Some have low confidence with reading or technology.",
    gap: "Missing a job interview, ID appointment or housing visit can set back a whole re-entry plan. Learners need to use free phone tools to get places on time, read printed papers, find local help and send polite messages, without sharing private details.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a smartphone, sometimes with limited data or an older model",
      "Time: about 5-minute lessons that fit around appointments and work",
      "Some parole or probation terms limit internet use; learners follow their own conditions",
      "Privacy: no case numbers, ID numbers or other private details in any AI tool or reminder"
    ],
    prerequisites: "\"Introduction to AI and Digital Confidence\" is helpful but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using your phone's voice assistant", action: "set a reminder for an appointment and a second reminder for when to leave", standard: "by voice, with a general title and no private details" },
    { id: "O2", condition: "Given the address of a real place", action: "get bus, train or walking directions in a maps app and find when to leave", standard: "with an arrival time set to 10 to 15 minutes early" },
    { id: "O3", condition: "Given a printed flyer, sign or job posting", action: "use your phone's camera to read, copy or translate its text", standard: "copying a phone number or address into a note or contact without retyping it" },
    { id: "O4", condition: "Using an AI assistant and 211", action: "find a local service for housing, food, jobs or transportation", standard: "with one program written down and its details confirmed through 211 or an official site" },
    { id: "O5", condition: "Given a real everyday situation", action: "write a short, polite message with AI help", standard: "that is honest, has no private details and sounds like you" },
    { id: "O6", condition: "Given a real appointment", action: "make a checklist of what to bring with AI help and confirm it with the office", standard: "listing document names only, checked on the official site or by phone" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your phone as a helper",
      lessons: [
        {
          objectives: ["O1"],
          title: "Reminders and alarms by voice",
          minutes: 5,
          goal: "Set a reminder for an appointment by speaking to your phone.",
          text: [
            "Missing an appointment can cost you a job interview, a housing spot or a check-in. Your phone can remember for you.",
            "Most phones have a voice assistant: Siri on iPhone, and Google Assistant or Gemini on Android. Wake it by saying \"Hey Siri\" or \"Hey Google\", or by pressing and holding the side or home button. Then say: \"Remind me about my interview at Fresh Foods on Tuesday at 9 am.\" \"Set an alarm for 6:30 am tomorrow.\"",
            "Set two reminders for anything important: one the day before, and one when it is time to leave. Keep reminder titles general; you do not need to put private details in them."
          ],
          steps: ["Wake the voice assistant.", "Say what, the day and the time.", "Add a second reminder for when to leave.", "Check the screen to make sure it is set."],
          words: [["Voice assistant", "a helper built into your phone that does simple tasks when you speak."], ["Reminder", "a message your phone shows you at a time you choose."]],
          slides: [
            { title: "Your phone can remember for you", bullets: ["Interviews, ID office, housing visits", "Siri, Google Assistant or Gemini"] },
            { title: "Say it", bullets: ["\"Remind me about my interview Tuesday at 9 am.\"", "\"Set an alarm for 6:30 am tomorrow.\""] },
            { title: "Two reminders for big things", bullets: ["One the day before", "One when it is time to leave", "Keep titles general"] }
          ],
          tryIt: "Set a reminder by voice for a real appointment, or a practice one, and a second reminder for when you need to leave.",
          youCanNow: "set appointment reminders and alarms by voice.",
          quickCheck: [
            { objective: "O1", q: "What is a good title for a reminder about a job interview?", options: ["Your full name and date of birth", "Interview at 9 am", "Your case number", "Your home address"], answer: 1, why: "Reminder titles should be general, without private details." },
            { objective: "O1", q: "Your interview is tomorrow at 9 am and the bus takes 40 minutes. What would you do?", options: ["Set one reminder for 9 am", "Hope you remember in the morning", "Set a reminder for tonight and one for when to leave", "Write it on your hand"], answer: 2, why: "Two reminders, the day before and when to leave, help you arrive on time." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Getting around with maps and transit",
          minutes: 6,
          goal: "Get bus, train or walking directions and know when to leave.",
          text: [
            "Maps apps such as Google Maps and Apple Maps show how to get anywhere by bus, train, walking or car, and how long it will take.",
            "Open the maps app, type the address in the search box, and tap Directions. Choose the bus or train symbol for transit, or the walking person. You will see which bus to take, where to catch it, and when it comes. You can also set the time you need to arrive, and the app shows when to leave.",
            "Plan to arrive 10 to 15 minutes early. Buses can run late. Save addresses you visit often, such as your home or work, so they are one tap away. Some transit agencies also have their own apps with live bus times."
          ],
          steps: ["Open your maps app.", "Type the address and tap Directions.", "Choose transit (bus or train) or walking.", "Set your arrival time to see when to leave.", "Plan to arrive 10 to 15 minutes early."],
          words: [["Transit", "public transportation such as buses and trains."], ["Arrival time", "the time you need to be there."]],
          slides: [
            { title: "Maps know the way", bullets: ["Google Maps or Apple Maps", "Bus, train, walking or car"] },
            { title: "Get directions", bullets: ["Type the address, tap Directions", "Choose transit or walking", "See which bus and when"] },
            { title: "Be on time", bullets: ["Set your arrival time", "Arrive 10 to 15 minutes early", "Save addresses you use often"] }
          ],
          tryIt: "Get transit or walking directions to a real place you need to go, such as an American Job Center, the DMV or a library. Set the arrival time and note when you must leave.",
          youCanNow: "get transit and walking directions and work out when to leave.",
          quickCheck: [
            { objective: "O2", q: "What does setting your arrival time in a maps app show you?", options: ["When you need to leave", "How much the bus costs", "Who else is going", "The weather tomorrow"], answer: 0, why: "With an arrival time set, the app works out when you need to leave." },
            { objective: "O2", q: "You need to reach the DMV by bus for a 10 am visit. What would you do?", options: ["Leave at 10 am", "Get transit directions and set arrival for about 9:45", "Pick the walking route only", "Ask a stranger at the stop"], answer: 1, why: "Transit directions with an early arrival time help you get there 10 to 15 minutes early." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reading and translating with your camera",
          minutes: 5,
          goal: "Use your phone's camera to read, copy or translate printed text.",
          text: [
            "Your phone's camera can read printed words. With Google Lens (in the Google app and on many Android phones) or the iPhone camera's text feature, you can point at a flyer, a sign or a form and copy the text, look it up, or translate it.",
            "Open the camera or Google Lens and point at the words. Tap the text button or the highlighted text, then choose Copy, Listen, Translate or Search. This is helpful for copying a phone number from a flyer or reading instructions in another language.",
            "Do not scan documents with private numbers into AI tools, such as your Social Security card or court papers. Use these tools for public things like flyers, signs and job postings."
          ],
          steps: ["Open the camera or Google Lens.", "Point at the printed words.", "Tap the text button or the highlighted words.", "Choose Copy, Listen, Translate or Search.", "Do not scan private documents."],
          words: [["Google Lens", "a free Google tool that uses your camera to read, translate and search what it sees."], ["Translate", "change words from one language into another."]],
          slides: [
            { title: "The camera can read", bullets: ["Google Lens or the iPhone camera", "Flyers, signs, job postings"] },
            { title: "What you can do", bullets: ["Copy a phone number", "Hear the words read aloud", "Translate or search"] },
            { title: "Keep it public", bullets: ["No Social Security cards", "No court papers or private forms"] }
          ],
          tryIt: "Point your camera or Google Lens at a flyer, sign or job posting. Copy a phone number or address from it into a note or your contacts.",
          youCanNow: "use your camera to copy, hear or translate printed text.",
          quickCheck: [
            { objective: "O3", q: "What can your phone's camera text tool do with a printed job flyer?", options: ["Apply for the job for you", "Print a new copy", "Call the employer by itself", "Read, copy or translate the text"], answer: 3, why: "The camera text tool can read, copy and translate printed words." },
            { objective: "O3", q: "You want to scan a paper with your Social Security number into an AI tool. What would you do?", options: ["Scan it so the AI can explain it", "Do not scan it; keep private numbers out of AI tools", "Scan only half of it", "Post it online for help"], answer: 1, why: "Private numbers like your Social Security number should never go into AI tools." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your phone as a helper",
        questions: [
          { objective: "O1", q: "What is the best way to not miss a job interview?", options: ["Write it on your hand", "Hope you remember", "Set a reminder the day before and one for when to leave", "Ask a stranger to remind you"], answer: 2, why: "Two reminders cover planning and leaving on time." },
          { objective: "O2", q: "In a maps app, which choice shows bus and train routes?", options: ["Transit", "Satellite", "Traffic", "Settings"], answer: 0, why: "Transit shows public transportation." },
          { objective: "O2", q: "How early should you plan to arrive at an appointment?", options: ["An hour late", "Exactly on time", "5 minutes late", "10 to 15 minutes early"], answer: 3, why: "Buses can run late; arriving early is safer." },
          { objective: "O3", q: "What can Google Lens do with a flyer?", options: ["Print money", "Copy, read aloud or translate its text", "Call your family", "Sign forms for you"], answer: 1, why: "Lens reads text the camera sees." },
          { objective: "O3", q: "Which should you NOT scan into an AI tool?", options: ["A job flyer", "Your Social Security card", "A street sign", "A bus schedule"], answer: 1, why: "Private documents stay out of AI tools." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting things done",
      lessons: [
        {
          objectives: ["O4"],
          title: "Finding local help",
          minutes: 5,
          goal: "Find local services for housing, food, jobs or transportation.",
          text: [
            "There is help available, but finding it can be hard. 211 is a service across the United States that connects you with local help for housing, food, transportation, health care and more. Call 211, or search for your local 211 at 211.org. Calls are confidential and you can stay anonymous.",
            "An AI assistant can help you prepare: \"I just came home and live in Columbus, Ohio. What kinds of local services might help with housing, food, and job training? What questions should I ask when I call 211?\"",
            "AI may list programs that closed or give wrong phone numbers. Always confirm with 211, the program's official website, or your reentry case manager before you go."
          ],
          steps: ["Ask AI what kinds of help to look for and what to ask.", "Call 211 or search 211.org.", "Write down the programs, numbers and hours.", "Confirm on the official website or by phone before you go."],
          words: [["211", "a phone number and website that connect you with local help."], ["Case manager", "a person who helps you plan and find services."]],
          slides: [
            { title: "Help is out there", bullets: ["Housing, food, transportation, health care", "Call 211 or visit 211.org", "Confidential; you can stay anonymous"] },
            { title: "Prepare with AI", bullets: ["What kinds of help to look for", "What questions to ask"] },
            { title: "Confirm before you go", bullets: ["AI may list closed programs", "Check with 211 or the official site", "Ask your case manager"] }
          ],
          sources: [{ name: "211: About us", url: "https://www.211.org/about-us" }],
          tryIt: "Ask an AI assistant what kinds of local services could help you right now and what to ask when you call. Then look up your local 211 at 211.org and write down one program to contact.",
          youCanNow: "find local help and confirm it before you go.",
          quickCheck: [
            { objective: "O4", q: "What can 211 help you find?", options: ["Only emergency police help", "Only job openings at big companies", "Local help for housing, food and more", "Your criminal record"], answer: 2, why: "211 connects people to local services like housing and food help." },
            { objective: "O4", q: "An AI assistant gives you the phone number of a food bank. What would you do?", options: ["Confirm the number with 211 or the official site", "Drive there right away", "Share it with friends without checking", "Ask AI if it is sure"], answer: 0, why: "AI can be wrong, so you confirm details with 211 or an official source." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Writing everyday messages with AI",
          minutes: 5,
          goal: "Use AI to write a short, polite message for a real situation.",
          text: [
            "Many everyday situations need a message: telling an employer you will be late, asking a landlord about an apartment, thanking someone for an interview, or reaching out to family.",
            "Tell the AI who it is for, what you need to say, and how it should sound: \"Write a short, polite text to a hiring manager. My bus is running 10 minutes late for my 9 am interview. I am sorry and still very interested.\"",
            "Read it out loud and change anything that does not sound like you. Keep it short and honest. You do not need to explain your past in everyday messages."
          ],
          steps: ["Say who it is for.", "Say what you need to say.", "Say how it should sound: polite, short, friendly.", "Read it aloud and make it sound like you."],
          words: [["Polite", "respectful and courteous."], ["Draft", "a first version you can change."]],
          slides: [
            { title: "Everyday messages", bullets: ["Running late", "Asking about an apartment", "Thanking an interviewer"] },
            { title: "Tell AI three things", bullets: ["Who it is for", "What you need to say", "How it should sound"] },
            { title: "Make it yours", bullets: ["Read it aloud", "Short and honest", "No need to explain your past"] }
          ],
          tryIt: "Ask an AI assistant to write a short, polite text telling an interviewer your bus is running late. Change one thing so it sounds like you.",
          youCanNow: "write clear, polite everyday messages with AI help.",
          quickCheck: [
            { objective: "O5", q: "What makes an everyday message good?", options: ["Long and full of details about your past", "Short, polite and honest", "Written in all capital letters", "Sent without reading it first"], answer: 1, why: "A short, polite, honest message is easy to read and respectful." },
            { objective: "O5", q: "AI wrote a late text that uses words you would never say. What would you do?", options: ["Send it anyway", "Ask AI to make it longer", "Delete it and not send anything", "Change the words so it sounds like you, then send it"], answer: 3, why: "You read AI drafts and change them so they sound like you." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Checklists for appointments and documents",
          minutes: 5,
          goal: "Ask AI for a checklist of what to bring, then confirm it with the office.",
          text: [
            "Showing up without the right papers can mean a second trip. Ask AI for a checklist: \"I am going to my state's DMV to get a state ID. What documents do people usually need to bring? Make a short checklist.\"",
            "Then confirm with the office itself. Rules differ by state and change over time, so the official website (often ending in .gov) or a phone call is the final word. Your reentry program or case manager may also help you get documents such as a birth certificate.",
            "Keep the checklist in your phone's notes or on paper. Never type your actual ID numbers, case numbers or Social Security number into AI; the checklist only needs the names of documents."
          ],
          steps: ["Ask AI what is usually needed.", "Ask for a short checklist.", "Confirm on the office's official website or by phone.", "Gather the papers and check them off.", "Never type your real numbers into AI."],
          words: [["Checklist", "a list of items you tick off one by one."], ["State ID", "an official photo ID card from your state, for people who do not drive."]],
          slides: [
            { title: "Avoid a second trip", bullets: ["Ask AI for a checklist", "\"What do people usually bring to get a state ID?\""] },
            { title: "Confirm with the office", bullets: ["Rules differ by state", "Official site, often .gov, or call", "Ask your case manager for help"] },
            { title: "Keep numbers private", bullets: ["The checklist needs document names only", "Never type ID or case numbers into AI"] }
          ],
          tryIt: "Final task: pick a real appointment. Get transit or walking directions, set a reminder for when to leave, ask AI for a checklist of what to bring (then confirm it on the official site), and have AI help you write a short text to send if you are running late.",
          youCanNow: "use everyday AI tools to plan, prepare for and get to an appointment on time.",
          quickCheck: [
            { objective: "O6", q: "What should a document checklist list?", options: ["The names of the documents you need", "Your ID and Social Security numbers", "Your passwords", "Your parole officer's home address"], answer: 0, why: "A checklist needs document names, not your private numbers." },
            { objective: "O6", q: "AI's checklist for a state ID visit looks complete. What would you do next?", options: ["Trust it and go", "Bring nothing extra", "Confirm the list on the office's official site or by phone", "Ask a friend what they brought years ago"], answer: 2, why: "The office has the final word on what to bring." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting things done",
        questions: [
          { objective: "O4", q: "What number connects you to local help for housing, food and more?", options: ["611", "411", "311 everywhere", "211"], answer: 3, why: "211 connects people to local services." },
          { objective: "O4", q: "AI gives you a program's phone number. What do you do?", options: ["Confirm it with 211 or the official site", "Trust it completely", "Post it online", "Give it your case number"], answer: 0, why: "AI can list closed programs or wrong numbers." },
          { objective: "O5", q: "Which prompt will get a good \"running late\" text?", options: ["\"late\"", "\"text\"", "\"Write a short, polite text to a hiring manager. My bus is 10 minutes late for my 9 am interview.\"", "\"bus\""], answer: 2, why: "It says who, what and how it should sound." },
          { objective: "O5", q: "Do you need to explain your past in an everyday message?", options: ["Only by email", "Yes, always", "Only to landlords", "No; keep it short and honest"], answer: 3, why: "Everyday messages only need the point." },
          { objective: "O6", q: "Who has the final word on which documents to bring?", options: ["A friend", "AI", "The office itself", "A social media post"], answer: 2, why: "Rules differ by state; the office decides." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Everyday AI Tools",
    questions: [
      { objective: "O1", q: "Siri and Google Assistant are:", options: ["Job websites", "Voice assistants on phones", "Bus companies", "Banks"], answer: 1, why: "They do simple tasks when you speak." },
      { objective: "O1", q: "Which voice request sets a useful reminder?", options: ["\"Remind me about my interview Tuesday at 9 am.\"", "\"Interview.\"", "\"Tuesday.\"", "\"Hi.\""], answer: 0, why: "It says what, the day and the time." },
      { objective: "O1", q: "For important appointments, set:", options: ["Two reminders: the day before and when to leave", "None", "One a month later", "Ten random alarms"], answer: 0, why: "Two reminders cover planning and leaving." },
      { objective: "O1", q: "Reminder titles should be:", options: ["Full of ID numbers", "General, without private details", "Your case number", "Your password"], answer: 1, why: "You do not need private details in reminders." },
      { objective: "O2", q: "In a maps app, after typing the address you tap:", options: ["Camera", "Delete", "Directions", "Share password"], answer: 2, why: "Directions shows how to get there." },
      { objective: "O2", q: "\"Transit\" means:", options: ["Flying", "Walking only", "Taxis only", "Buses and trains"], answer: 3, why: "Transit is public transportation." },
      { objective: "O2", q: "Setting your arrival time in a maps app shows:", options: ["Your ID number", "Your bank balance", "When you need to leave", "The weather only"], answer: 2, why: "It works backward from your arrival." },
      { objective: "O2", q: "Saving addresses you use often makes them:", options: ["One tap away", "Private numbers", "Disappear", "Expensive"], answer: 0, why: "Saved places are quick to reach." },
      { objective: "O3", q: "Google Lens can:", options: ["Call your parole officer", "Replace your ID", "Pay your rent", "Read, copy and translate printed text"], answer: 3, why: "Lens reads what the camera sees." },
      { objective: "O3", q: "A good use of the camera's text tool is:", options: ["Scanning your Social Security card into AI", "Copying a phone number from a job flyer", "Scanning court papers into AI", "Photographing your bank card for AI"], answer: 1, why: "Public text only; keep private documents out." },
      { objective: "O4", q: "211 calls are:", options: ["Recorded for the public", "Confidential, and you can stay anonymous", "Only for emergencies", "Only for businesses"], answer: 1, why: "211 calls are confidential." },
      { objective: "O4", q: "AI can help before you call 211 by:", options: ["Guaranteeing a bed", "Knowing your case history", "Signing you up automatically", "Suggesting what kinds of help to ask about"], answer: 3, why: "It helps you prepare questions." },
      { objective: "O4", q: "A case manager is:", options: ["A person who helps you plan and find services", "A phone app", "A bus driver", "A website"], answer: 0, why: "Case managers help with reentry plans." },
      { objective: "O5", q: "When AI writes a message for you, you should:", options: ["Add your Social Security number", "Send it without reading", "Read it aloud and make it sound like you", "Make it very long"], answer: 2, why: "Your message should sound like you." },
      { objective: "O5", q: "A good everyday message is:", options: ["Full of private details", "Long and full of excuses", "Rude", "Short, polite and honest"], answer: 3, why: "Short and honest works best." },
      { objective: "O5", q: "A \"draft\" is:", options: ["A bus pass", "The final copy", "A first version you can change", "An ID"], answer: 2, why: "You improve drafts before sending." },
      { objective: "O6", q: "Before going to get a state ID, you should:", options: ["Trust AI only", "Confirm the document list on the official site or by phone", "Bring nothing", "Ask a stranger"], answer: 1, why: "Rules differ by state." },
      { objective: "O6", q: "Official US government websites often end in:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: ".gov is used by government offices." },
      { objective: "O6", q: "What does a document checklist need?", options: ["The names of documents, not your numbers", "Your actual ID numbers", "Your case number", "Your Social Security number"], answer: 0, why: "Names of documents are enough." },
      { objective: "O6", q: "A state ID is:", options: ["A bus ticket", "An official photo ID card from your state", "A library card", "A phone app"], answer: 1, why: "It is official photo ID for non-drivers and others." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      4,
      6,
      8,
      10,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Directions",
        objective: "O2",
        notYet: "No directions, or no idea when to leave.",
        meets: "Transit or walking directions with an arrival time set early, and the leave time written down.",
        exceeds: "Also has a backup route or the address saved for one-tap use."
      },
      {
        name: "Reminder to leave",
        objective: "O1",
        notYet: "No reminder, or a reminder with private details in the title.",
        meets: "A reminder set for when to leave, with a general title.",
        exceeds: "Also set a reminder the day before."
      },
      {
        name: "Checklist confirmed",
        objective: "O6",
        notYet: "No checklist, or a checklist with private numbers, or not confirmed.",
        meets: "A checklist of document names, confirmed on the official site or by phone.",
        exceeds: "Can say where they confirmed it and what changed from AI's list."
      },
      {
        name: "Running-late text",
        objective: "O5",
        notYet: "No text, or a text that is long, rude or has private details.",
        meets: "A short, polite, honest text ready to send.",
        exceeds: "The learner changed some words so it sounds like them."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report getting to an appointment on time using these tools within 30 days (follow-up survey)",
      "Learners who contact a local service found through 211 within 30 days",
      "Re-entry partners report fewer missed appointments"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet and a maps app",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "A printed flyer or job posting to practice with the camera",
      "About 60 minutes in total, in short sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask learners to bring a real upcoming appointment so the final task is useful right away.",
      "Never ask learners to type or scan real ID, case or Social Security numbers; use document names only.",
      "Walk through 211.org together so everyone can find their local 211.",
      "Remind learners on parole or probation to follow any conditions about internet or phone use.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
