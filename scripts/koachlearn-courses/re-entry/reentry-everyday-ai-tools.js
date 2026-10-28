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
  chapters: [
    {
      name: "Chapter 1: Your phone as a helper",
      lessons: [
        {
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
          youCanNow: "set appointment reminders and alarms by voice."
        },
        {
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
          youCanNow: "get transit and walking directions and work out when to leave."
        },
        {
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
          youCanNow: "use your camera to copy, hear or translate printed text."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your phone as a helper",
        questions: [
          { q: "What is the best way to not miss a job interview?", options: ["Write it on your hand", "Hope you remember", "Set a reminder the day before and one for when to leave", "Ask a stranger to remind you"], answer: 2, why: "Two reminders cover planning and leaving on time." },
          { q: "In a maps app, which choice shows bus and train routes?", options: ["Transit", "Satellite", "Traffic", "Settings"], answer: 0, why: "Transit shows public transportation." },
          { q: "How early should you plan to arrive at an appointment?", options: ["An hour late", "Exactly on time", "5 minutes late", "10 to 15 minutes early"], answer: 3, why: "Buses can run late; arriving early is safer." },
          { q: "What can Google Lens do with a flyer?", options: ["Print money", "Copy, read aloud or translate its text", "Call your family", "Sign forms for you"], answer: 1, why: "Lens reads text the camera sees." },
          { q: "Which should you NOT scan into an AI tool?", options: ["A job flyer", "Your Social Security card", "A street sign", "A bus schedule"], answer: 1, why: "Private documents stay out of AI tools." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting things done",
      lessons: [
        {
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
          youCanNow: "find local help and confirm it before you go."
        },
        {
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
          youCanNow: "write clear, polite everyday messages with AI help."
        },
        {
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
          youCanNow: "use everyday AI tools to plan, prepare for and get to an appointment on time."
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting things done",
        questions: [
          { q: "What number connects you to local help for housing, food and more?", options: ["611", "411", "311 everywhere", "211"], answer: 3, why: "211 connects people to local services." },
          { q: "AI gives you a program's phone number. What do you do?", options: ["Confirm it with 211 or the official site", "Trust it completely", "Post it online", "Give it your case number"], answer: 0, why: "AI can list closed programs or wrong numbers." },
          { q: "Which prompt will get a good \"running late\" text?", options: ["\"late\"", "\"text\"", "\"Write a short, polite text to a hiring manager. My bus is 10 minutes late for my 9 am interview.\"", "\"bus\""], answer: 2, why: "It says who, what and how it should sound." },
          { q: "Do you need to explain your past in an everyday message?", options: ["Only by email", "Yes, always", "Only to landlords", "No; keep it short and honest"], answer: 3, why: "Everyday messages only need the point." },
          { q: "Who has the final word on which documents to bring?", options: ["A friend", "AI", "The office itself", "A social media post"], answer: 2, why: "Rules differ by state; the office decides." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Everyday AI Tools",
    questions: [
      { q: "Siri and Google Assistant are:", options: ["Job websites", "Voice assistants on phones", "Bus companies", "Banks"], answer: 1, why: "They do simple tasks when you speak." },
      { q: "Which voice request sets a useful reminder?", options: ["\"Remind me about my interview Tuesday at 9 am.\"", "\"Interview.\"", "\"Tuesday.\"", "\"Hi.\""], answer: 0, why: "It says what, the day and the time." },
      { q: "For important appointments, set:", options: ["Two reminders: the day before and when to leave", "None", "One a month later", "Ten random alarms"], answer: 0, why: "Two reminders cover planning and leaving." },
      { q: "Reminder titles should be:", options: ["Full of ID numbers", "General, without private details", "Your case number", "Your password"], answer: 1, why: "You do not need private details in reminders." },
      { q: "In a maps app, after typing the address you tap:", options: ["Camera", "Delete", "Directions", "Share password"], answer: 2, why: "Directions shows how to get there." },
      { q: "\"Transit\" means:", options: ["Flying", "Walking only", "Taxis only", "Buses and trains"], answer: 3, why: "Transit is public transportation." },
      { q: "Setting your arrival time in a maps app shows:", options: ["Your ID number", "Your bank balance", "When you need to leave", "The weather only"], answer: 2, why: "It works backward from your arrival." },
      { q: "Saving addresses you use often makes them:", options: ["One tap away", "Private numbers", "Disappear", "Expensive"], answer: 0, why: "Saved places are quick to reach." },
      { q: "Google Lens can:", options: ["Call your parole officer", "Replace your ID", "Pay your rent", "Read, copy and translate printed text"], answer: 3, why: "Lens reads what the camera sees." },
      { q: "A good use of the camera's text tool is:", options: ["Scanning your Social Security card into AI", "Copying a phone number from a job flyer", "Scanning court papers into AI", "Photographing your bank card for AI"], answer: 1, why: "Public text only; keep private documents out." },
      { q: "211 calls are:", options: ["Recorded for the public", "Confidential, and you can stay anonymous", "Only for emergencies", "Only for businesses"], answer: 1, why: "211 calls are confidential." },
      { q: "AI can help before you call 211 by:", options: ["Guaranteeing a bed", "Knowing your case history", "Signing you up automatically", "Suggesting what kinds of help to ask about"], answer: 3, why: "It helps you prepare questions." },
      { q: "A case manager is:", options: ["A person who helps you plan and find services", "A phone app", "A bus driver", "A website"], answer: 0, why: "Case managers help with reentry plans." },
      { q: "When AI writes a message for you, you should:", options: ["Add your Social Security number", "Send it without reading", "Read it aloud and make it sound like you", "Make it very long"], answer: 2, why: "Your message should sound like you." },
      { q: "A good everyday message is:", options: ["Full of private details", "Long and full of excuses", "Rude", "Short, polite and honest"], answer: 3, why: "Short and honest works best." },
      { q: "A \"draft\" is:", options: ["A bus pass", "The final copy", "A first version you can change", "An ID"], answer: 2, why: "You improve drafts before sending." },
      { q: "Before going to get a state ID, you should:", options: ["Trust AI only", "Confirm the document list on the official site or by phone", "Bring nothing", "Ask a stranger"], answer: 1, why: "Rules differ by state." },
      { q: "Official US government websites often end in:", options: [".gov", ".win", ".gift", ".xyz"], answer: 0, why: ".gov is used by government offices." },
      { q: "What does a document checklist need?", options: ["The names of documents, not your numbers", "Your actual ID numbers", "Your case number", "Your Social Security number"], answer: 0, why: "Names of documents are enough." },
      { q: "A state ID is:", options: ["A bus ticket", "An official photo ID card from your state", "A library card", "A phone app"], answer: 1, why: "It is official photo ID for non-drivers and others." }
    ]
  }
};
