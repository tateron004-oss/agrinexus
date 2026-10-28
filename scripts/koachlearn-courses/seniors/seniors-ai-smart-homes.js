"use strict";

// Koach Learn course: Seniors and Technology -> "AI and Smart Homes" (bonus). Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// No prices or exact menu names are given: they change often. Students are told to check the product's own app and help pages.

module.exports = {
  id: "seniors-ai-smart-homes",
  category: "Seniors and Technology",
  name: "AI and Smart Homes",
  skills: "Understanding smart home devices, Giving clear voice commands to a smart speaker, Setting up a simple routine, Choosing devices for safety and comfort, Protecting your privacy at home",
  outcome: "use a smart speaker or your phone's voice assistant to give clear spoken commands, plan or set up one simple daily routine (such as a morning reminder and the weather), and protect your privacy by muting the microphone and reviewing settings.",
  about: [
    "A smart home is a home with devices you can control by voice or from your phone: speakers that answer questions, lights that turn on by themselves, plugs that switch lamps on and off, and doorbells with cameras. For older adults, these can make daily life easier and safer, especially for anyone living alone.",
    "You will learn what the most common devices do, how to talk to a smart speaker such as Amazon Echo (Alexa) or Google Nest (Google Assistant), how to set up a simple routine, and how to keep your home and privacy safe.",
    "You do not need to own any smart devices to take this course: you can practice the voice skills with the assistant already on your phone. Each lesson takes about five minutes. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Plan one daily routine for your home, such as \"Good morning\": the speaker or phone tells you the weather, reminds you of your morning medicine and turns on a lamp. Write it out, set up as much of it as your devices allow, and practice it by voice. Then find and use the microphone mute button or setting.",
  chapters: [
    {
      name: "Chapter 1: Meeting the smart home",
      lessons: [
        {
          title: "What smart home devices do",
          minutes: 5,
          goal: "Name the common smart home devices and what each one can do for you.",
          text: [
            "Smart home devices connect to your home Wi-Fi so you can control them by voice or with an app on your phone.",
            "Common ones: a smart speaker, such as Amazon Echo with Alexa or Google Nest with Google Assistant, answers questions, plays music and radio, sets timers and reminders, and makes calls. A smart plug lets you turn a lamp or fan on and off by voice or on a schedule. Smart bulbs change brightness. A video doorbell lets you see who is at the door on your phone before you open it.",
            "For older adults living alone, the most useful are often a speaker for reminders and calls, smart lights so you never walk into a dark room, and a video doorbell for safety."
          ],
          words: [["Smart device", "a device that connects to the internet so you can control it by voice or phone."], ["Wi-Fi", "the wireless internet in your home."], ["Smart plug", "a plug adapter that lets you switch a lamp or appliance on and off by voice or app."]],
          slides: [
            { title: "Smart devices connect to Wi-Fi", bullets: ["Control them by voice", "Or with an app on your phone"] },
            { title: "Common devices", bullets: ["Smart speaker: questions, music, reminders, calls", "Smart plug and bulbs: lights on and off", "Video doorbell: see who is at the door"] },
            { title: "Most useful when living alone", bullets: ["Reminders and calls by voice", "No more dark rooms", "See visitors before you open"] }
          ],
          tryIt: "Walk through your home and write down two daily jobs a smart device could make easier, such as turning on a hard-to-reach lamp or seeing who is at the door.",
          youCanNow: "name common smart home devices and how they could help you."
        },
        {
          title: "Talking to a smart speaker",
          minutes: 5,
          goal: "Give clear spoken commands to a smart speaker or your phone's assistant.",
          text: [
            "You start a smart speaker with its wake word: \"Alexa\" for Amazon Echo, or \"Hey Google\" for Google Nest. A light shows that it is listening. Your phone's voice assistant works the same way with \"Hey Siri\" or \"Hey Google\".",
            "Speak clearly, at a normal pace, and say exactly what you want: \"Alexa, what is the weather today?\" \"Hey Google, set a timer for 15 minutes.\" \"Alexa, play the classical music station.\" \"Hey Google, call Margaret.\"",
            "If it does not understand, say it again with simpler words. Newer speakers use AI to understand more natural questions, but short, clear commands still work best."
          ],
          steps: ["Say the wake word: \"Alexa\" or \"Hey Google\".", "Wait for the light.", "Say exactly what you want, clearly.", "If it misunderstands, try again with simpler words."],
          words: [["Wake word", "the word that tells a smart speaker to start listening, like \"Alexa\"."], ["Command", "a short spoken instruction, like \"set a timer for 15 minutes\"."]],
          slides: [
            { title: "Wake it up", bullets: ["\"Alexa\" for Amazon Echo", "\"Hey Google\" for Google Nest", "A light shows it is listening"] },
            { title: "Clear commands", bullets: ["\"What is the weather today?\"", "\"Set a timer for 15 minutes.\"", "\"Call Margaret.\""] },
            { title: "Not understood?", bullets: ["Say it again with simpler words", "Short commands work best"] }
          ],
          tryIt: "Using a smart speaker or your phone's assistant, give three commands: ask for today's weather, set a 5-minute timer, and ask for a reminder tomorrow at 9 am.",
          youCanNow: "give clear spoken commands to a smart speaker or voice assistant."
        },
        {
          title: "Setting up a simple routine",
          minutes: 6,
          goal: "Plan a routine that does several things with one phrase.",
          text: [
            "A routine lets one phrase do several things. For example, saying \"Good morning\" could turn on a lamp, tell you the weather and remind you to take your medicine.",
            "Routines are set up in the device's phone app: the Alexa app for Echo, or the Google Home app for Nest. Look for a section called Routines, tap to add a new one, choose the phrase that starts it, then add the actions. Menus change from time to time, so if you cannot find it, check the app's help pages or ask a family member.",
            "Start with one simple routine. You can ask an AI assistant to help you plan it: \"Help me plan a morning routine for my smart speaker. I want the weather, a medicine reminder and my lamp turned on.\""
          ],
          steps: ["Plan the phrase and the actions on paper.", "Open the Alexa app or Google Home app.", "Find Routines and add a new one.", "Choose the starting phrase.", "Add each action, save, and try it by voice."],
          words: [["Routine", "one phrase or time that makes a device do several things in a row."], ["Companion app", "the phone app that sets up and controls a smart device."]],
          slides: [
            { title: "One phrase, many actions", bullets: ["\"Good morning\" could...", "Turn on a lamp", "Tell the weather and remind you of medicine"] },
            { title: "Where to set it up", bullets: ["Alexa app or Google Home app", "Find Routines, add a new one", "Choose the phrase, add actions, save"] },
            { title: "Start simple", bullets: ["Plan on paper first", "Ask AI to help you plan", "Ask family if a menu is hard to find"] }
          ],
          tryIt: "Write down a \"Good morning\" or \"Good night\" routine with a phrase and two or three actions. Ask an AI assistant to check your plan and suggest one improvement.",
          youCanNow: "plan a simple smart home routine and know where to set it up."
        }
      ],
      check: {
        title: "Knowledge Check 1: Meeting the smart home",
        questions: [
          { q: "What do smart home devices connect to?", options: ["The mailbox", "The water pipes", "Your home Wi-Fi", "A battery charger only"], answer: 2, why: "They use Wi-Fi so you can control them." },
          { q: "Which device lets you see who is at the door on your phone?", options: ["A video doorbell", "A smart plug", "A smart bulb", "A toaster"], answer: 0, why: "Video doorbells show visitors on your phone." },
          { q: "What is a wake word?", options: ["A morning greeting card", "An alarm clock sound", "A password", "A word that starts the speaker listening"], answer: 3, why: "\"Alexa\" or \"Hey Google\" wakes the speaker." },
          { q: "The speaker did not understand you. What should you try?", options: ["Shout", "Say it again with simpler words", "Unplug it forever", "Give it your password"], answer: 1, why: "Short, clear commands work best." },
          { q: "Where do you set up a routine for a Google Nest speaker?", options: ["In the Calculator", "In the Google Home app", "On the TV remote", "In the Camera app"], answer: 1, why: "The companion app holds Routines." }
        ]
      }
    },
    {
      name: "Chapter 2: Safety, comfort and privacy",
      lessons: [
        {
          title: "Smart devices for safety",
          minutes: 5,
          goal: "Choose smart home features that make living alone safer.",
          text: [
            "Smart devices can help you feel safer at home. Lights on a schedule or motion sensor mean you never walk into a dark room at night, which can help prevent falls. A video doorbell lets you see and talk to visitors without opening the door.",
            "A smart speaker can call a family member by voice if you cannot reach your phone. Some speakers and services offer emergency features, but these vary by product and country, and not all can call 911. Check the product's own help pages to know exactly what yours can and cannot do. Medical alert devices made for emergencies are a separate choice to discuss with your family.",
            "Before buying, make a list of the problems you want to solve, and ask a family member or a store helper which device fits. You do not need everything."
          ],
          steps: ["List the safety problems you want to solve.", "Match each one to a device: lights, doorbell or speaker.", "Check the product's help pages for what it can and cannot do.", "Ask family or a store helper before buying."],
          words: [["Motion sensor", "a device that notices movement and can turn on a light."], ["Medical alert device", "a wearable button made to call for help in an emergency."]],
          slides: [
            { title: "Safer at home", bullets: ["Scheduled or motion lights help prevent falls", "Video doorbell: see visitors first", "Call family by voice"] },
            { title: "Know your device", bullets: ["Emergency features vary", "Not all can call 911", "Check the product's help pages"] },
            { title: "Buy with a plan", bullets: ["List the problems first", "Match a device to each", "You do not need everything"] }
          ],
          tryIt: "Write down one safety worry you have at home, such as dark hallways at night, and the smart device that could help. Ask an AI assistant what questions to ask before buying it.",
          youCanNow: "choose smart home features that fit your safety needs."
        },
        {
          title: "Protecting your privacy at home",
          minutes: 5,
          goal: "Use the mute button and privacy settings on a smart device.",
          text: [
            "Smart speakers listen for their wake word. They may sometimes mistake another word for it and record a little. Cameras record video. So it is wise to know how to control them.",
            "Every smart speaker has a microphone mute button; when muted, a light (often red) shows it is not listening. Use it during private conversations. Cameras often have a privacy mode or a cover. In the device's app, look for Privacy settings, where you can usually review and delete voice recordings.",
            "Use a strong password for your Wi-Fi and for the device accounts, and never share the codes texted to you with anyone who calls about your devices."
          ],
          steps: ["Find the microphone mute button on your speaker.", "Press it during private conversations; look for the colored light.", "Open the device app and find Privacy settings.", "Review and delete voice recordings if you wish.", "Use strong passwords and never share texted codes."],
          words: [["Mute", "to turn off a microphone so it cannot hear."], ["Privacy settings", "choices in an app about what is recorded, saved and shared."]],
          slides: [
            { title: "Speakers and cameras listen and see", bullets: ["Speakers wait for the wake word", "They may sometimes mishear", "Cameras record video"] },
            { title: "Take control", bullets: ["Mute button: light shows it is off", "Camera privacy mode or cover", "Review and delete recordings in the app"] },
            { title: "Keep accounts safe", bullets: ["Strong Wi-Fi and account passwords", "Never share texted codes"] }
          ],
          tryIt: "Find the mute button or setting on a smart speaker, or the microphone setting on your phone's assistant. Turn it off and on again, and notice how you can tell it is muted.",
          youCanNow: "mute a smart device and find its privacy settings."
        },
        {
          title: "Putting your smart home to work",
          minutes: 5,
          goal: "Plan and practice a complete daily routine.",
          text: [
            "Now put the pieces together. A good first routine is simple, useful every day, and easy to say.",
            "Example: \"Good morning\" turns on the bedroom lamp, tells you the weather and your calendar, and reminds you to take your morning medicine. \"Good night\" turns off the lamps and sets your alarm.",
            "Practice saying your routine a few times. If something does not work, check one action at a time in the app, or ask a family member to look with you. Keep a written note of your commands near the speaker until they become habit."
          ],
          steps: ["Choose a phrase you will remember.", "Pick two or three useful actions.", "Set it up in the app, as far as your devices allow.", "Practice it by voice several times.", "Keep a note of your commands near the speaker."],
          words: [["Habit", "something you do so often it becomes automatic."]],
          slides: [
            { title: "A good first routine", bullets: ["Simple", "Useful every day", "Easy to say"] },
            { title: "Example", bullets: ["\"Good morning\": lamp on, weather, calendar, medicine reminder", "\"Good night\": lamps off, alarm set"] },
            { title: "Make it stick", bullets: ["Practice a few times", "Fix one action at a time", "Keep a note near the speaker"] }
          ],
          tryIt: "Final task: write out your \"Good morning\" routine, set up as much of it as your devices allow, and practice it by voice. Then find and use the microphone mute button or setting.",
          youCanNow: "use voice commands and a simple routine to make your home easier and safer, while protecting your privacy."
        }
      ],
      check: {
        title: "Knowledge Check 2: Safety, comfort and privacy",
        questions: [
          { q: "How can smart lights help prevent falls?", options: ["They lock doors", "They are heavier", "They call the doctor", "They turn on so you do not walk into dark rooms"], answer: 3, why: "Lit rooms at night help prevent falls." },
          { q: "Can every smart speaker call 911?", options: ["No; check what your product can and cannot do", "Yes, all of them", "Only red ones", "Only on weekends"], answer: 0, why: "Emergency features vary by product and country." },
          { q: "The speaker's light turns red after you press the mute button. This means:", options: ["It is calling 911", "It is broken", "The microphone is off", "It is recording more"], answer: 2, why: "The colored light shows it is muted." },
          { q: "Where can you usually review and delete voice recordings?", options: ["A pop-up ad", "The microwave", "The TV guide", "Privacy settings in the device's app"], answer: 3, why: "The app's privacy settings manage recordings." },
          { q: "A caller says they are from the speaker company and asks for the code texted to you. You:", options: ["Text it to them", "Read it to them", "Never share it and hang up", "Post it online"], answer: 2, why: "Texted codes protect your account." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Smart Homes",
    questions: [
      { q: "A smart device is:", options: ["Any old lamp", "A device you can control by voice or phone over the internet", "A paper calendar", "A landline phone"], answer: 1, why: "Smart devices connect to the internet." },
      { q: "Amazon Echo uses which voice assistant?", options: ["Alexa", "Siri", "Cortana", "Bixby"], answer: 0, why: "Echo speakers use Alexa." },
      { q: "A smart plug lets you:", options: ["Turn a lamp on and off by voice or schedule", "Charge a car", "Make phone calls", "Lock doors"], answer: 0, why: "It switches what is plugged into it." },
      { q: "Which word wakes a Google Nest speaker?", options: ["\"Hello phone\"", "\"Hey Google\"", "\"Computer\"", "\"Start\""], answer: 1, why: "\"Hey Google\" is its wake word." },
      { q: "Which is a clear command?", options: ["\"Timer stuff.\"", "\"Um, maybe, the thing?\"", "\"Set a timer for 15 minutes.\"", "\"You know.\""], answer: 2, why: "Clear commands say exactly what you want." },
      { q: "A light on the speaker usually shows:", options: ["It is off forever", "It is broken", "It needs paint", "It is listening"], answer: 3, why: "The light shows it heard the wake word." },
      { q: "A routine is:", options: ["A password", "A type of plug", "One phrase that makes a device do several things", "A TV show"], answer: 2, why: "Routines combine actions." },
      { q: "Routines for Amazon Echo are set up in:", options: ["The Alexa app", "The Calculator", "The Camera", "The TV"], answer: 0, why: "The Alexa app manages Echo routines." },
      { q: "A good way to plan a routine before setting it up:", options: ["Skip planning", "Guess", "Buy many devices first", "Write it on paper or ask AI to check your plan"], answer: 3, why: "Planning makes setup easier." },
      { q: "If a menu in the app is hard to find, you can:", options: ["Give up", "Check the app's help pages or ask family", "Give a stranger your password", "Delete your Wi-Fi"], answer: 1, why: "Menus change; help pages and family can guide you." },
      { q: "A video doorbell helps you:", options: ["Cook dinner", "See visitors before opening the door", "Wash clothes", "Pay bills"], answer: 1, why: "It shows who is at the door." },
      { q: "A motion sensor light:", options: ["Locks the door", "Plays music", "Calls family", "Turns on when it notices movement"], answer: 3, why: "It reacts to movement." },
      { q: "Before buying a smart device, you should:", options: ["List the problems you want to solve", "Buy everything", "Share your passwords", "Ignore reviews and help pages"], answer: 0, why: "A list helps you buy only what you need." },
      { q: "A medical alert device is:", options: ["A music speaker", "A smart bulb", "A wearable button made to call for help", "A TV remote"], answer: 2, why: "It is built for emergencies." },
      { q: "During a private conversation, you can:", options: ["Open the camera", "Turn up the volume", "Say the wake word", "Press the speaker's mute button"], answer: 3, why: "Muting stops the microphone." },
      { q: "Privacy settings let you:", options: ["Order food", "Change the weather", "Review and delete recordings", "Speed up Wi-Fi"], answer: 2, why: "They control what is saved." },
      { q: "Camera privacy can be protected by:", options: ["Shining a light", "Privacy mode or a cover", "Moving it closer", "Turning up the volume"], answer: 1, why: "Privacy mode or a cover stops recording." },
      { q: "Strong passwords should be used for:", options: ["Your Wi-Fi and device accounts", "Nothing", "Only email", "Only your TV"], answer: 0, why: "They keep others out of your devices." },
      { q: "A good first routine is:", options: ["Simple, useful daily and easy to say", "Long and complicated", "Used once a year", "Hard to remember"], answer: 0, why: "Simple routines become habits." },
      { q: "Keeping a note of your commands near the speaker helps you:", options: ["Hide them", "Remember them until they become habit", "Share passwords", "Mute the speaker"], answer: 1, why: "A note is a handy reminder." }
    ]
  }
};
