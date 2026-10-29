"use strict";

// Koach Learn course: Seniors and Technology -> "AI for Daily Life". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "seniors-ai-daily-life",
  category: "Seniors and Technology",
  name: "AI for Daily Life",
  skills: "Making a shopping list with AI, Planning simple meals, Setting reminders by voice, Adding appointments to a calendar, Understanding a confusing letter",
  outcome: "use an AI assistant and your phone's voice assistant to plan a week of simple meals, turn it into a shopping list, set a reminder, and get a confusing letter explained in plain words.",
  about: [
    "This course is for older adults who want technology to make everyday jobs a little easier: shopping, cooking, remembering appointments and making sense of the mail.",
    "You will use a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini, and the voice assistant already on your phone (Siri on iPhone, or Google Assistant or Gemini on Android), to plan meals, make lists, set reminders and understand letters.",
    "Each lesson takes about five minutes. Go slowly, repeat what you need, and do the \"Try it now\" task each time. A short knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Plan three simple dinners for the coming week with an AI assistant, ask it for one shopping list for all three, set a phone reminder to go shopping, and add one real appointment to your phone's calendar.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Older adults, many living alone or as a couple, who manage their own meals, shopping, appointments and mail and want everyday tasks to take less effort.",
    startingPoint: "Own a smartphone and can make calls and send texts. Most have not used an AI assistant or their phone's voice assistant, calendar alerts or the Notes app.",
    gap: "Planning meals, remembering appointments and understanding letters from insurers or offices can be tiring and stressful. Using an AI assistant and the phone's built-in tools for these tasks saves effort and helps seniors stay independent, as long as private details stay out and important letters are confirmed with the sender.",
    constraints: [
      "Reading level: plain words, short sentences and large, simple steps",
      "Devices: a smartphone with a voice assistant and Calendar app; iPhone and Android menus differ",
      "Time: about 5 minutes per lesson at a relaxed pace, with time to practice",
      "Special diets come from the learner's doctor, not the AI",
      "Privacy: no names, account, Medicare or Social Security numbers in prompts or photos of letters"
    ],
    prerequisites: "\"AI for Seniors: Using AI Assistants\" is helpful first, but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using a free AI assistant", action: "ask for easy meal ideas that say how many people you cook for, your time, what you like and what to avoid", standard: "getting three ideas that fit your needs and your doctor's advice" },
    { id: "O2", condition: "Given a few meal ideas", action: "get one shopping list grouped by store section, leaving off what you already have", standard: "saved in Notes, printed or written down" },
    { id: "O3", condition: "Using your phone's voice assistant", action: "set a reminder or timer by speaking, with a day and time", standard: "and check on the screen that it is set" },
    { id: "O4", condition: "Given a real appointment", action: "add it to your phone's calendar with an alert", standard: "with the right name, date, time and an alert before it" },
    { id: "O5", condition: "Given a confusing letter from an insurer, utility or office", action: "get it explained in plain words with all private details left out", standard: "and confirm what to do by calling the number printed on the letter" }
  ],
  chapters: [
    {
      name: "Chapter 1: Lists, meals and shopping",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planning simple meals with AI",
          minutes: 5,
          goal: "Ask an AI assistant for a few easy meal ideas that fit your needs.",
          text: [
            "Deciding what to cook every day can be tiring, especially when cooking for one or two. An AI assistant can suggest ideas in seconds.",
            "Tell it what you like, how many people you cook for, how much time and effort you want to spend, and anything you must avoid. For example: \"I cook for one. Suggest three easy dinners that take under 30 minutes, use a few ingredients, and are low in salt.\"",
            "If your doctor has given you a special diet, follow your doctor's advice. The assistant can give ideas, but it does not know your health."
          ],
          steps: ["Open your AI assistant.", "Say how many people you cook for.", "Say how much time you have and what you like.", "Say anything to avoid, such as too much salt or sugar.", "Ask for three ideas."],
          words: [["Ingredient", "one of the foods that go into a recipe."]],
          slides: [
            { title: "Let AI suggest meals", bullets: ["Ideas in seconds", "Good when cooking for one or two"] },
            { title: "Tell it", bullets: ["How many people", "How much time", "What you like and what to avoid"] },
            { title: "Your doctor comes first", bullets: ["Follow any diet your doctor gave you", "AI does not know your health"] }
          ],
          tryIt: "Ask an AI assistant for three easy dinners for the coming week that fit how you like to eat. Write down the three you like best.",
          youCanNow: "ask an AI assistant for meal ideas that fit your needs.",
          quickCheck: [
            { objective: "O1", q: "Who decides your special diet if you have one?", options: ["The AI assistant", "Your doctor", "The grocery store", "A cooking show"], answer: 1, why: "The assistant gives ideas but does not know your health; follow your doctor's advice." },
            { objective: "O1", q: "You cook for two and have little energy in the evening. What do you add to your meal request?", options: ["\"Make it quick and easy, for two people.\"", "Nothing; just say \"food\"", "Your Medicare number", "\"Make it fancy.\""], answer: 0, why: "Saying how many people and how much time and effort you want gets ideas that fit." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Turning meals into a shopping list",
          minutes: 4,
          goal: "Get one tidy shopping list for several meals.",
          text: [
            "Once you have meal ideas, ask the assistant to make one shopping list for all of them. This saves you from writing out each recipe.",
            "Ask it to group the list by the parts of the store, such as fruit and vegetables, dairy and canned goods, so you walk through the store once. Then tell it what you already have at home so it leaves those off.",
            "You can print the list, copy it into your phone's Notes app, or simply write it on paper. Use whatever is easiest for you."
          ],
          steps: ["Ask: \"Make one shopping list for these three dinners.\"", "Ask it to group the list by store section.", "Tell it what you already have.", "Copy the list into Notes, print it, or write it down."],
          words: [["Notes app", "an app on your phone for writing and saving short notes and lists."]],
          slides: [
            { title: "One list for all meals", bullets: ["\"Make one shopping list for these three dinners.\""] },
            { title: "Make it easy to shop", bullets: ["Group by store section", "Leave off what you already have"] },
            { title: "Keep your list", bullets: ["Copy into the Notes app", "Print it", "Or write it on paper"] }
          ],
          tryIt: "Ask the assistant for one shopping list for your three dinners, grouped by store section. Tell it two things you already have, and keep the final list.",
          youCanNow: "turn meal ideas into one shopping list that fits your kitchen.",
          quickCheck: [
            { objective: "O2", q: "What does grouping a list by store section mean?", options: ["Sorting items from cheapest to most costly", "Writing the list twice", "Putting items together by where they are, such as dairy or canned goods", "Listing only one meal"], answer: 2, why: "Grouping by section lets you walk through the store once." },
            { objective: "O2", q: "You already have rice and eggs at home. What do you tell the assistant?", options: ["Nothing", "To add more rice and eggs", "To make a new meal plan", "That you already have rice and eggs, so it leaves them off"], answer: 3, why: "Telling it what you have keeps those items off the list." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Using your phone's voice assistant for reminders",
          minutes: 6,
          goal: "Set a reminder or timer by speaking to your phone.",
          text: [
            "Most phones have a voice assistant built in: Siri on iPhone, and Google Assistant or Gemini on many Android phones. You speak, and the phone does a simple job, such as setting a reminder, a timer or an alarm.",
            "To start it, you can usually say \"Hey Siri\" or \"Hey Google\", or press and hold the side or home button. If it is not set up, ask a family member to help you turn it on in Settings.",
            "Then speak clearly: \"Remind me to go grocery shopping on Thursday at 10 am.\" \"Set a timer for 20 minutes.\" \"Remind me to call Ruth tomorrow at 5 pm.\" The phone will tell you or show you that it is set."
          ],
          steps: ["Say \"Hey Siri\" or \"Hey Google\", or press and hold the side or home button.", "Wait for the sound or the light on screen.", "Say what you want, with the day and time.", "Check the screen to see that it is set."],
          words: [["Voice assistant", "a helper built into your phone that does simple jobs when you speak to it."], ["Reminder", "a message your phone shows you at a time you choose."]],
          slides: [
            { title: "Your phone can listen", bullets: ["Siri on iPhone", "Google Assistant or Gemini on Android"] },
            { title: "Wake it up", bullets: ["Say \"Hey Siri\" or \"Hey Google\"", "Or press and hold the side or home button"] },
            { title: "Say what you need", bullets: ["\"Remind me to shop Thursday at 10 am.\"", "\"Set a timer for 20 minutes.\"", "Check the screen to see it is set"] }
          ],
          tryIt: "Use your phone's voice assistant to set a reminder to go grocery shopping on a day and time that works for you. Check that it appears on the screen.",
          youCanNow: "set a reminder or timer by speaking to your phone.",
          quickCheck: [
            { objective: "O3", q: "What is a voice assistant on a phone?", options: ["A person who calls you back", "A built-in helper you speak to, like Siri or Google Assistant", "A hearing aid", "A text message app"], answer: 1, why: "Siri and Google Assistant do simple jobs, like reminders and timers, when you speak." },
            { objective: "O3", q: "You want to remember to call your sister tomorrow evening. What do you say?", options: ["\"Call.\"", "\"Sister.\"", "\"Remind me to call my sister tomorrow at 6 pm.\"", "\"Tomorrow.\""], answer: 2, why: "A clear request with the task, day and time sets a useful reminder." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Lists, meals and shopping",
        questions: [
          { objective: "O1", q: "What should you tell an AI assistant when asking for meal ideas?", options: ["Your bank number", "Only \"food\"", "How many people, your time, what you like and what to avoid", "Your doctor's password"], answer: 2, why: "Those details help it suggest meals that fit you." },
          { objective: "O1", q: "Your doctor gave you a low-salt diet, but AI suggests a salty dish. What do you do?", options: ["Follow your doctor's advice", "Follow the AI", "Stop eating", "Ignore both"], answer: 0, why: "Your doctor knows your health; AI does not." },
          { objective: "O2", q: "Why ask the assistant to group your shopping list by store section?", options: ["It makes the food cheaper", "It is required", "So it prints in color", "So you walk through the store once"], answer: 3, why: "Grouping by section makes shopping quicker." },
          { objective: "O3", q: "Which is a voice assistant built into many phones?", options: ["Calculator", "Siri", "Camera", "Flashlight"], answer: 1, why: "Siri on iPhone and Google Assistant or Gemini on Android listen to spoken requests." },
          { objective: "O3", q: "Which voice request will set a useful reminder?", options: ["\"Shopping.\"", "\"Remind me to go shopping Thursday at 10 am.\"", "\"Hello.\"", "\"Phone.\""], answer: 1, why: "It says what to remember, the day and the time." }
        ]
      }
    },
    {
      name: "Chapter 2: Appointments and paperwork",
      lessons: [
        {
          objectives: ["O4"],
          title: "Adding appointments to your phone's calendar",
          minutes: 6,
          goal: "Add a doctor's appointment to your phone's calendar with an alert.",
          text: [
            "Your phone has a Calendar app that can hold all your appointments and warn you before each one. This is handy for doctor's visits, haircuts and family birthdays.",
            "The easiest way is to ask your voice assistant: \"Add an appointment with Dr. Lee on May 12 at 2 pm.\" You can also open the Calendar app, tap the plus sign (+), type the name, choose the date and time, and tap Add or Save.",
            "Set an alert so the phone reminds you ahead of time, such as one day before and one hour before. Look for a choice called Alert or Notification when you add the event."
          ],
          steps: ["Open the Calendar app, or ask your voice assistant.", "Tap the plus sign (+) to add an event.", "Type the name, such as \"Dr. Lee checkup\".", "Choose the date and the time.", "Choose an alert, such as 1 day before.", "Tap Add or Save."],
          words: [["Calendar app", "the app on your phone that keeps your appointments by date."], ["Alert", "a sound or message the phone gives you before an appointment."]],
          slides: [
            { title: "Your phone's calendar", bullets: ["Keeps all your appointments", "Warns you before each one"] },
            { title: "Two ways to add", bullets: ["Ask your voice assistant", "Or open Calendar and tap +"] },
            { title: "Fill it in", bullets: ["Name, date and time", "Choose an alert, such as 1 day before", "Tap Add or Save"] }
          ],
          tryIt: "Add one real appointment or family birthday to your phone's calendar with an alert one day before. Check that it shows on the right date.",
          youCanNow: "add an appointment to your phone's calendar and get a reminder before it.",
          quickCheck: [
            { objective: "O4", q: "What does an alert on a calendar appointment do?", options: ["Makes the phone remind you before the appointment", "Cancels the appointment", "Calls the doctor for you", "Shares it with strangers"], answer: 0, why: "An alert warns you ahead of time, such as one day or one hour before." },
            { objective: "O4", q: "You just booked a checkup for next Tuesday. What is the first step to add it in the Calendar app?", options: ["Turn off your phone", "Delete old appointments", "Write it in a text to yourself", "Tap the plus sign (+) to add an event"], answer: 3, why: "Tap the plus sign, then type the name and choose the date, time and an alert." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Getting a confusing letter explained",
          minutes: 5,
          goal: "Ask an AI assistant to explain a confusing letter in plain words, without sharing private details.",
          text: [
            "Letters from insurance companies, utility companies or offices can be full of hard words. An AI assistant can explain them in plain language.",
            "First, cover or leave out private details: names, account numbers, Medicare or Social Security numbers, and your address. Then type in the confusing part, or describe it, and ask: \"Explain this in simple words. What, if anything, do I need to do?\"",
            "Some assistants let you take a photo of a page. If you do this, cover the private details before you take the picture. For anything about money, benefits or health, confirm what to do by calling the number printed on the letter itself, or ask a trusted family member."
          ],
          steps: ["Cover or leave out names, numbers and your address.", "Type or describe only the confusing part.", "Ask: \"Explain this in simple words. What do I need to do?\"", "Confirm by calling the number printed on the letter."],
          words: [["Plain language", "simple, everyday words that are easy to understand."], ["Account number", "a private number a company uses for your account; never share it with AI."]],
          slides: [
            { title: "Hard letters, plain words", bullets: ["Insurance, utilities, offices", "AI can explain them simply"] },
            { title: "Protect yourself first", bullets: ["Cover names and account numbers", "Leave out Medicare and Social Security numbers", "Leave out your address"] },
            { title: "Ask and confirm", bullets: ["\"Explain in simple words. What do I need to do?\"", "Call the number printed on the letter to confirm"] }
          ],
          tryIt: "Find a letter or bill with a sentence you do not fully understand. Leave out all private details, type only that sentence into an assistant, and ask it to explain it in simple words.",
          youCanNow: "get a confusing letter explained in plain words while keeping your private details safe.",
          quickCheck: [
            { objective: "O5", q: "What is plain language?", options: ["Simple, everyday words", "Legal words", "A foreign language", "Very short codes"], answer: 0, why: "Plain language means simple, everyday words that are easy to understand." },
            { objective: "O5", q: "You want to photograph an insurance letter for the AI. What do you do first?", options: ["Make the photo bigger", "Cover your name, address and account numbers", "Add your Medicare number so it can check", "Send it to a friend"], answer: 1, why: "Cover private details before you take the picture." }
          ]
        },
        {
          objectives: ["O1","O2","O3"],
          title: "Putting it together: your week, made easier",
          minutes: 5,
          goal: "Use AI and your phone together to plan a week.",
          text: [
            "You now have several small skills: asking for meal ideas, making a list, setting reminders and adding appointments. Used together, they can organize a whole week.",
            "A simple routine: on Sunday, ask the assistant for three dinners and one shopping list. Set a reminder for your shopping day. Look at your calendar to see the week's appointments, and add anything new.",
            "Keep it simple. Use the tools that help you and skip the ones that do not. Paper lists still work well, and asking a family member for help is always fine."
          ],
          steps: ["Ask an AI assistant for three dinners.", "Ask for one shopping list.", "Set a reminder for your shopping day.", "Check your calendar and add new appointments."],
          words: [["Routine", "a set of steps you do the same way each time."]],
          slides: [
            { title: "A simple Sunday routine", bullets: ["Three dinners from AI", "One shopping list", "A shopping reminder"] },
            { title: "Check your week", bullets: ["Look at your calendar", "Add anything new with an alert"] },
            { title: "Keep it simple", bullets: ["Use what helps you", "Paper lists still work", "Ask family for help anytime"] }
          ],
          tryIt: "Final task: plan three simple dinners for next week with an AI assistant, ask for one shopping list, set a phone reminder for your shopping day, and add one real appointment to your calendar.",
          youCanNow: "use AI and your phone together to plan meals, shop and keep track of appointments.",
          quickCheck: [
            { objective: "O1", q: "Which tools together can organize your week?", options: ["Only a paper calendar", "Only an AI assistant", "Meal ideas, a shopping list, reminders and your calendar", "None; it is too hard"], answer: 2, why: "The small skills from this course work together to plan a whole week." },
            { objective: "O1", q: "It is Sunday. What is a simple first step for planning your week?", options: ["Buy everything in the store", "Turn off all reminders", "Read old letters", "Ask the assistant for three dinners and one shopping list"], answer: 3, why: "The routine starts with three dinners and one list, then a reminder and a calendar check." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Appointments and paperwork",
        questions: [
          { objective: "O4", q: "In the Calendar app, what do you tap to add an appointment?", options: ["The volume button", "The camera", "The battery icon", "The plus sign (+)"], answer: 3, why: "The plus sign adds a new event." },
          { objective: "O4", q: "Why set an alert on an appointment?", options: ["So the phone reminds you before it", "So it costs less", "So the doctor calls you", "It deletes the event"], answer: 0, why: "An alert warns you ahead of time." },
          { objective: "O5", q: "Before asking AI about a letter, you should:", options: ["Type in your account number", "Send the whole letter with your name", "Cover or leave out private details", "Share your Medicare number"], answer: 2, why: "Private details should never go into an AI assistant." },
          { objective: "O5", q: "The AI explains a letter about your benefits. How do you confirm what to do?", options: ["Trust the AI completely", "Do nothing", "Ask a stranger online", "Call the number printed on the letter"], answer: 3, why: "The office that sent the letter is the official source." },
          { objective: "O2", q: "What is a good Sunday routine from this course?", options: ["Delete your calendar", "Share your passwords", "Plan dinners, make a list, set a shopping reminder, check your calendar", "Buy a new phone"], answer: 2, why: "It combines the skills from every lesson." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Daily Life",
    questions: [
      { objective: "O1", q: "An AI assistant can help with meals by:", options: ["Cooking them", "Suggesting easy ideas that fit you", "Buying groceries for you", "Knowing your diet from your doctor"], answer: 1, why: "It suggests ideas when you tell it what you need." },
      { objective: "O1", q: "Which meal request is clearest?", options: ["\"I cook for one. Suggest three easy, low-salt dinners under 30 minutes.\"", "\"food\"", "\"dinner?\"", "\"eat\""], answer: 0, why: "It gives people, time, and what to avoid." },
      { objective: "O1", q: "If your doctor's diet and the AI's idea disagree, follow:", options: ["Your doctor", "The AI", "Whichever is easier", "Neither"], answer: 0, why: "Your doctor knows your health." },
      { objective: "O2", q: "An ingredient is:", options: ["A kitchen tool", "One of the foods in a recipe", "A store", "An app"], answer: 1, why: "Ingredients are the foods that go into a recipe." },
      { objective: "O2", q: "To get one list for three meals, you ask:", options: ["\"What is my password?\"", "\"Delete the meals.\"", "\"Make one shopping list for these three dinners.\"", "\"Call the store.\""], answer: 2, why: "The assistant combines the ingredients into one list." },
      { objective: "O2", q: "Telling the assistant what you already have at home helps it:", options: ["Print in color", "Charge you less", "Call your family", "Leave those items off the list"], answer: 3, why: "It removes things you do not need to buy." },
      { objective: "O2", q: "The Notes app is used for:", options: ["Taking photos", "Making calls", "Writing and saving short notes and lists", "Playing music"], answer: 2, why: "Notes keeps lists on your phone." },
      { objective: "O3", q: "Siri and Google Assistant are:", options: ["Voice assistants built into phones", "Grocery stores", "Doctors", "Email addresses"], answer: 0, why: "They do simple jobs when you speak." },
      { objective: "O3", q: "One way to wake up a voice assistant is to:", options: ["Shake the phone", "Open the camera", "Turn off the phone", "Say \"Hey Siri\" or \"Hey Google\""], answer: 3, why: "A wake phrase or holding the side or home button starts it." },
      { objective: "O3", q: "Which spoken request sets a timer?", options: ["\"Timer.\"", "\"Set a timer for 20 minutes.\"", "\"Hello phone.\"", "\"Cooking.\""], answer: 1, why: "It says what to do and for how long." },
      { objective: "O3", q: "After setting a reminder by voice, you should:", options: ["Turn off the phone", "Check the screen to see it is set", "Delete the app", "Nothing"], answer: 1, why: "Checking confirms it was set correctly." },
      { objective: "O4", q: "The Calendar app helps you:", options: ["Play games", "Take photos", "Send money", "Keep appointments and get reminders"], answer: 3, why: "It stores events by date and can alert you." },
      { objective: "O4", q: "When adding an appointment, which do you fill in?", options: ["Name, date and time", "Your bank number", "Your password", "Your Medicare number"], answer: 0, why: "Name, date and time are what the calendar needs." },
      { objective: "O4", q: "An alert one day before an appointment means:", options: ["The appointment is canceled", "The doctor will call", "Your phone reminds you the day before", "The appointment moves"], answer: 2, why: "Alerts warn you ahead of time." },
      { objective: "O4", q: "You can also add an appointment by:", options: ["Opening the camera", "Mailing a letter", "Turning off the phone", "Asking your voice assistant"], answer: 3, why: "Voice assistants can add calendar events." },
      { objective: "O5", q: "Before typing part of a letter into AI, remove:", options: ["Hard words", "The date", "Names, account numbers and your address", "Nothing"], answer: 2, why: "Private details never go into AI." },
      { objective: "O5", q: "If you photograph a letter for AI, you should first:", options: ["Turn on the flash", "Cover the private details", "Add your password", "Write your Social Security number on it"], answer: 1, why: "Covering details protects your privacy." },
      { objective: "O5", q: "\"Plain language\" means:", options: ["Simple, everyday words", "A foreign language", "Legal words", "Computer code"], answer: 0, why: "Plain language is easy to understand." },
      { objective: "O5", q: "To confirm what a benefits letter wants you to do, you:", options: ["Call the number printed on the letter", "Trust the AI", "Post it online", "Ignore it"], answer: 0, why: "The sender is the official source." },
      { objective: "O2", q: "If a tool does not help you, the course suggests:", options: ["Buy a newer phone", "Skip it and use what works, even paper", "Stop planning", "Share your password"], answer: 1, why: "Keep it simple and use what helps." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      2,
      4,
      8,
      10,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Meal ideas that fit",
        objective: "O1",
        notYet: "The request is vague or the meals do not fit your needs.",
        meets: "Three dinners that fit how many people, your time, what you like and what to avoid.",
        exceeds: "The meals also follow any diet your doctor gave you."
      },
      {
        name: "One shopping list",
        objective: "O2",
        notYet: "No list, or separate lists for each meal.",
        meets: "One list for all three dinners, saved in Notes, printed or written down.",
        exceeds: "Grouped by store section, with items you already have left off."
      },
      {
        name: "Shopping reminder",
        objective: "O3",
        notYet: "No reminder, or it has no day or time.",
        meets: "A reminder set with a day and time, checked on the screen.",
        exceeds: "Set it by speaking to the voice assistant."
      },
      {
        name: "Appointment in the calendar",
        objective: "O4",
        notYet: "No appointment, or the date or time is wrong.",
        meets: "One real appointment with the right name, date and time.",
        exceeds: "Includes an alert, such as one day before."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using reminders or calendar alerts for appointments within 30 days (follow-up survey)",
      "Learners who report fewer missed appointments or less stress about meals and shopping",
      "Learners who start another Seniors and Technology course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with a voice assistant (Siri, Google Assistant or Gemini) and a Calendar app",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "A sample letter with no real private details, for the letter practice",
      "About 60 minutes in total, in short, relaxed sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Help learners turn on their voice assistant in Settings before Lesson 3; it is often switched off.",
      "Group learners by phone type (iPhone or Android) so steps on screen match.",
      "Use a sample letter for practice; never ask learners to share real account or Medicare numbers.",
      "Remind learners that special diets come from their doctor, and benefits questions go to the number on the letter.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
