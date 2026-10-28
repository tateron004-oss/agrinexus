"use strict";

// Koach Learn course: Seniors and Technology -> "AI for Memory Support" (bonus). Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Not medical advice: the course says worrying memory changes are for a doctor, and points to MedlinePlus (checked 27 October 2026) for trusted health information.

module.exports = {
  id: "seniors-ai-memory-support",
  category: "Seniors and Technology",
  name: "AI for Memory Support",
  skills: "Capturing reminders and notes by voice, Using photos as memory aids, Making checklists with AI, Summarizing appointments and calls, Building a daily memory routine",
  outcome: "set up a simple memory toolkit on your phone: voice reminders, a notes list, photo memory aids and an AI-made checklist, and use it in a daily routine.",
  about: [
    "Everyone forgets things: where the car is parked, whether the stove is off, what the doctor said. This course is for older adults, and the family members who help them, who want simple tools to remember the everyday things more easily.",
    "You will use your phone's voice assistant, notes, camera and a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini to capture reminders, keep lists, make checklists, and summarize what was said at appointments.",
    "These tools support memory; they do not diagnose or treat anything. If you or your family are worried about memory changes, talk with your doctor. Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build your memory toolkit: set two repeating voice reminders, start a \"Things to remember\" note, take one photo memory aid (such as where you parked or a label you need), ask AI for a \"before I leave the house\" checklist, and use all of it for one full day.",
  chapters: [
    {
      name: "Chapter 1: Capturing what you need to remember",
      lessons: [
        {
          title: "Voice reminders the moment you think of them",
          minutes: 5,
          goal: "Capture a reminder by voice before you forget it.",
          text: [
            "The best time to capture a reminder is the moment you think of it. Your phone's voice assistant (Siri on iPhone, Google Assistant or Gemini on Android) makes this quick: no typing, no searching for a pen.",
            "Say: \"Remind me to call the pharmacy tomorrow at 10 am.\" \"Remind me to water the plants every Monday.\" \"Remind me to take my umbrella when I leave home\" works on some phones, which can remind you by location.",
            "When the reminder appears, act on it or tap to snooze it. Mark it done when finished, so your list stays clear."
          ],
          steps: ["Wake your voice assistant.", "Say \"Remind me to...\" with what and when.", "Use \"every\" for repeating reminders.", "When it appears, do it or snooze it.", "Mark it done."],
          words: [["Snooze", "to delay a reminder so it comes back a little later."], ["Repeating reminder", "a reminder that comes back on a schedule, like every Monday."]],
          slides: [
            { title: "Capture it right away", bullets: ["The moment you think of it", "No typing, no pen"] },
            { title: "Say it", bullets: ["\"Remind me to call the pharmacy at 10 am.\"", "\"Remind me to water plants every Monday.\""] },
            { title: "When it appears", bullets: ["Do it, or snooze it", "Mark it done"] }
          ],
          tryIt: "Set two reminders by voice: one for tomorrow and one that repeats every week.",
          youCanNow: "capture one-time and repeating reminders by voice."
        },
        {
          title: "A notes list for things to remember",
          minutes: 5,
          goal: "Keep a \"Things to remember\" note on your phone and add to it by voice.",
          text: [
            "Some things are not tied to a time: the name of the new neighbor, the book a friend recommended, where you put the spare key. These belong in a note.",
            "Open the Notes app (or Google Keep on many Android phones) and create a note called \"Things to remember\". Pin it to the top if your app allows. You can add to it by typing or by tapping the microphone on the keyboard and speaking.",
            "Keep the note simple: one line per item, newest at the top. Never store passwords, bank numbers or Social Security numbers in a plain note."
          ],
          steps: ["Open Notes or Google Keep.", "Create a note named \"Things to remember\".", "Pin it to the top if you can.", "Add items by typing or with the keyboard microphone.", "Keep private numbers out of it."],
          words: [["Notes app", "an app for writing and saving notes on your phone."], ["Pin", "to keep an item at the top of a list so it is easy to find."]],
          slides: [
            { title: "Not tied to a time?", bullets: ["A neighbor's name", "A book to read", "Where the spare key is"] },
            { title: "Make your note", bullets: ["Notes or Google Keep", "Name it \"Things to remember\"", "Pin it to the top"] },
            { title: "Keep it simple and safe", bullets: ["One line per item", "Use the keyboard microphone", "No passwords or bank numbers"] }
          ],
          tryIt: "Create a \"Things to remember\" note and add three items, at least one by speaking with the keyboard microphone.",
          youCanNow: "keep a notes list for things you want to remember and add to it by voice."
        },
        {
          title: "Photos as memory aids",
          minutes: 4,
          goal: "Use your camera to remember where things are and what they say.",
          text: [
            "A quick photo can remember things for you. Take a picture of the parking spot sign or level number, the inside of the fridge before you shop, the label of a light bulb you need to replace, or the closed stove knobs before you leave.",
            "To find these later, create an album called \"Memory aids\" in your photos app, or just look at your most recent photos. Delete them when you no longer need them.",
            "Do not photograph private documents like bank cards or your Social Security card for this purpose; if your phone is lost, those photos could be misused."
          ],
          steps: ["Take a quick photo of the thing to remember.", "Look at recent photos, or keep a \"Memory aids\" album.", "Delete memory photos when done.", "Do not photograph private cards or documents."],
          words: [["Memory aid", "anything that helps you remember, like a note, alarm or photo."]],
          slides: [
            { title: "Let the camera remember", bullets: ["Parking spot", "Inside the fridge", "A label you need", "Stove knobs off"] },
            { title: "Find them later", bullets: ["Look at recent photos", "Or a \"Memory aids\" album", "Delete when done"] },
            { title: "Keep it safe", bullets: ["No photos of bank or ID cards"] }
          ],
          tryIt: "Take one photo memory aid today, such as the inside of your fridge or where you parked. Find it again in your photos an hour later.",
          youCanNow: "use photos to remember where things are and what they say."
        }
      ],
      check: {
        title: "Knowledge Check 1: Capturing what you need to remember",
        questions: [
          { q: "When is the best time to capture a reminder?", options: ["Only on Sundays", "Next week", "The moment you think of it", "Never"], answer: 2, why: "Capturing right away prevents forgetting." },
          { q: "Which voice request makes a weekly reminder?", options: ["\"Remind me to water the plants every Monday.\"", "\"Plants.\"", "\"Monday.\"", "\"Water.\""], answer: 0, why: "\"Every\" makes it repeat." },
          { q: "Where should a new neighbor's name go?", options: ["In a text to strangers", "In a password field", "Nowhere", "In your \"Things to remember\" note"], answer: 3, why: "Notes hold things not tied to a time." },
          { q: "What should NEVER go in a plain note?", options: ["A book title", "Passwords and bank numbers", "A neighbor's name", "A recipe"], answer: 1, why: "Plain notes are not safe for private numbers." },
          { q: "Which is a good photo memory aid?", options: ["Your bank card", "The parking level sign", "Your Social Security card", "Your password"], answer: 1, why: "Private cards should not be photographed for reminders." }
        ]
      }
    },
    {
      name: "Chapter 2: Routines and AI helpers",
      lessons: [
        {
          title: "Checklists made with AI",
          minutes: 5,
          goal: "Ask AI for a short checklist for a task you do often.",
          text: [
            "Checklists help everyone, from pilots to doctors. An AI assistant can make one for any routine task: leaving the house, getting ready for a trip, or the night before an appointment.",
            "Ask: \"Make me a short checklist for leaving the house: no more than eight items, in simple words.\" Then edit it to fit your home: \"Add: check the back door. Remove: feed the cat.\"",
            "Print it and tape it by the door, or save it in your Notes. A checklist only helps if it is where you will see it at the right moment."
          ],
          steps: ["Choose a task you do often.", "Ask AI for a short checklist in simple words.", "Add or remove items to fit your life.", "Put it where you will see it at the right moment."],
          words: [["Checklist", "a list of steps you tick off one by one."]],
          slides: [
            { title: "Checklists help everyone", bullets: ["Leaving the house", "Getting ready for a trip", "The night before an appointment"] },
            { title: "Ask AI", bullets: ["\"A short checklist, no more than eight items\"", "Then add or remove items"] },
            { title: "Put it in the right place", bullets: ["Tape it by the door", "Or save it in Notes"] }
          ],
          tryIt: "Ask an AI assistant for a \"before I leave the house\" checklist of no more than eight items. Change it to fit your home, and print it or save it.",
          youCanNow: "make a personal checklist with AI and put it where it helps."
        },
        {
          title: "Remembering what was said at appointments",
          minutes: 5,
          goal: "Capture the key points of an appointment or call and turn them into a clear summary.",
          text: [
            "It is easy to forget what the doctor, lawyer or repair person said. Bring a written list of questions, and write down the answers, or ask a family member to come along and take notes.",
            "Afterward, type your rough notes into an AI assistant, without names, birth dates or account numbers, and ask: \"Turn these notes into a short summary with a list of things I need to do.\" Save the summary in Notes.",
            "If something is unclear, call the office to confirm. Many doctor's offices also post a visit summary in their patient portal. Some people ask whether they may record a visit on their phone; always ask permission first."
          ],
          steps: ["Bring a list of questions and write down answers.", "Bring a family member if you can.", "Type rough notes into AI without private details.", "Ask for a summary and to-do list.", "Confirm anything unclear with the office."],
          words: [["Summary", "a short version of the main points."], ["Patient portal", "a website or app where your doctor's office shares visit notes and results."]],
          slides: [
            { title: "Capture it at the time", bullets: ["Bring questions, write answers", "Bring a family member"] },
            { title: "Let AI tidy it", bullets: ["Type notes without private details", "Ask for a summary and to-do list", "Save it in Notes"] },
            { title: "Confirm", bullets: ["Call the office if unclear", "Check the patient portal", "Ask before recording anyone"] }
          ],
          tryIt: "Write three rough notes from a recent call or appointment (leave out names and numbers). Ask an AI assistant to turn them into a short summary with a to-do list, and save it.",
          youCanNow: "capture and summarize what was said at an appointment or call."
        },
        {
          title: "A daily memory routine",
          minutes: 5,
          goal: "Put your memory tools together into a simple daily routine.",
          text: [
            "Tools work best as a habit. A simple daily routine: in the morning, look at today's reminders and calendar. During the day, capture reminders and notes the moment you think of them. Before bed, check tomorrow's reminders and your \"Things to remember\" note.",
            "Keep things in the same places every day: keys, glasses and phone in one bowl by the door. A tracking tag on your keys (such as Apple AirTag or a Tile) can help you find them with your phone.",
            "Be kind to yourself. Forgetting some things is normal. If you or your family notice memory changes that worry you, such as getting lost in familiar places or trouble with everyday tasks, talk with your doctor. MedlinePlus (medlineplus.gov) has trusted information about memory."
          ],
          steps: ["Morning: check reminders and calendar.", "Daytime: capture reminders and notes right away.", "Evening: check tomorrow and your note.", "Keep keys, glasses and phone in one place.", "Talk to your doctor about worrying changes."],
          words: [["Tracking tag", "a small device on keys or a bag that your phone can find."]],
          slides: [
            { title: "A simple daily routine", bullets: ["Morning: check reminders and calendar", "Daytime: capture right away", "Evening: check tomorrow"] },
            { title: "Same place every day", bullets: ["Keys, glasses, phone in one bowl", "A tracking tag can help find keys"] },
            { title: "Be kind to yourself", bullets: ["Some forgetting is normal", "Worried? Talk with your doctor", "MedlinePlus has trusted information"] }
          ],
          sources: [{ name: "MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/" }],
          tryIt: "Final task: build your memory toolkit (two repeating voice reminders, a \"Things to remember\" note, one photo memory aid, and an AI-made \"before I leave the house\" checklist) and use it all for one full day with the morning and evening check.",
          youCanNow: "use reminders, notes, photos, checklists and AI summaries in a daily routine that supports your memory."
        }
      ],
      check: {
        title: "Knowledge Check 2: Routines and AI helpers",
        questions: [
          { q: "Where should a \"leaving the house\" checklist go?", options: ["Nowhere", "In a drawer", "In the car trunk", "By the door where you will see it"], answer: 3, why: "Checklists help when seen at the right moment." },
          { q: "Before typing appointment notes into AI, remove:", options: ["Names, birth dates and account numbers", "The to-do items", "The word \"doctor\"", "Nothing"], answer: 0, why: "Private details stay out of AI." },
          { q: "Before recording a conversation at an appointment, you should:", options: ["Record secretly", "Hide the phone", "Ask permission", "Post it online"], answer: 2, why: "Always ask before recording someone." },
          { q: "A good evening habit is to:", options: ["Share your passwords", "Delete all reminders", "Turn off the phone for a week", "Check tomorrow's reminders and your note"], answer: 3, why: "It prepares you for the next day." },
          { q: "You notice you got lost in a familiar place. What should you do?", options: ["Ignore it", "Ask AI for a diagnosis", "Talk with your doctor", "Buy a supplement online"], answer: 2, why: "Worrying memory changes should be checked by a doctor." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Memory Support",
    questions: [
      { q: "Why capture a reminder right away?", options: ["It saves battery", "So you do not forget it", "It is required", "It costs less"], answer: 1, why: "The moment passes quickly." },
      { q: "\"Snooze\" means:", options: ["Delay the reminder a little", "Delete it", "Share it", "Print it"], answer: 0, why: "Snooze brings it back later." },
      { q: "Which word makes a reminder repeat?", options: ["\"every\"", "\"maybe\"", "\"once\"", "\"never\""], answer: 0, why: "\"Every Monday\" repeats weekly." },
      { q: "When you finish a reminder, you should:", options: ["Leave it forever", "Mark it done", "Set it again", "Delete the app"], answer: 1, why: "Marking done keeps your list clear." },
      { q: "A notes list is best for:", options: ["Bank numbers", "Passwords", "Things not tied to a time", "Social Security numbers"], answer: 2, why: "Notes hold names, ideas and locations." },
      { q: "Pinning a note:", options: ["Locks your phone", "Deletes it", "Shares it publicly", "Keeps it at the top"], answer: 3, why: "Pinned notes are easy to find." },
      { q: "To add to a note without typing, use:", options: ["The volume button", "The camera", "The keyboard microphone", "The flashlight"], answer: 2, why: "The microphone types what you say." },
      { q: "A good photo memory aid is:", options: ["The inside of your fridge before shopping", "Your bank card", "Your passport page", "Your PIN"], answer: 0, why: "Private documents should not be photographed for reminders." },
      { q: "When memory photos are no longer needed:", options: ["Email them to strangers", "Post them", "Print them all", "Delete them"], answer: 3, why: "Deleting keeps photos tidy and private." },
      { q: "A checklist is:", options: ["A bank statement", "A list of steps you tick off", "A password", "A phone"], answer: 1, why: "Checklists guide routines." },
      { q: "A good AI checklist request is:", options: ["\"list\"", "\"A short checklist for leaving the house, no more than eight items, simple words.\"", "\"stuff\"", "\"help\""], answer: 1, why: "It says the task, length and style." },
      { q: "After AI makes a checklist, you should:", options: ["Share your password", "Use it unchanged no matter what", "Delete it", "Edit it to fit your home"], answer: 3, why: "Your home is unique." },
      { q: "At a doctor's appointment, a family member can help by:", options: ["Taking notes", "Answering for you without asking", "Sharing your passwords", "Recording secretly"], answer: 0, why: "A second listener catches more." },
      { q: "AI can turn rough notes into:", options: ["A prescription", "A diagnosis", "A short summary with a to-do list", "A legal ruling"], answer: 2, why: "Summarizing is a strength; diagnosing is not." },
      { q: "A patient portal is:", options: ["A bank", "A hospital door", "A bus stop", "A website or app where your doctor shares visit notes"], answer: 3, why: "Portals share visit summaries and results." },
      { q: "If a summary is unclear, you should:", options: ["Ignore it", "Guess", "Call the office to confirm", "Ask a stranger online"], answer: 2, why: "The office is the reliable source." },
      { q: "A morning routine check includes:", options: ["Changing passwords", "Today's reminders and calendar", "Deleting notes", "Buying a new phone"], answer: 1, why: "It sets up your day." },
      { q: "Keeping keys, glasses and phone in one bowl helps because:", options: ["You always know where they are", "It looks nice", "It charges them", "It is required"], answer: 0, why: "Same place, less searching." },
      { q: "A tracking tag on keys lets you:", options: ["Find them with your phone", "Unlock any door", "Start the car remotely", "Pay bills"], answer: 0, why: "Your phone can locate the tag." },
      { q: "Where can you find trusted information about memory?", options: ["A pop-up ad", "MedlinePlus (medlineplus.gov) and your doctor", "A supplement seller", "A social media rumor"], answer: 1, why: "MedlinePlus is a free government health site." }
    ]
  }
};
