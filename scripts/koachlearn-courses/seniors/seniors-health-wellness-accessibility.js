"use strict";

// Koach Learn course: Seniors and Technology -> "Health, Wellness and Accessibility with Technology". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.
// Facts checked 27 October 2026: MedlinePlus is a free, ad-free service of the National Library of Medicine (NIH). Menu names differ by phone, so lessons tell students to search Settings instead of naming exact menus.

module.exports = {
  id: "seniors-health-wellness-accessibility",
  category: "Seniors and Technology",
  name: "Health, Wellness and Accessibility with Technology",
  skills: "Making text bigger, Using the magnifier and read-aloud, Turning on captions, Setting medicine reminders, Preparing questions for the doctor with AI, Finding trusted health information",
  outcome: "set up your phone or tablet so it is easier to see and hear, set a daily medicine reminder, and use an AI assistant to prepare a clear list of questions for your next doctor's visit.",
  about: [
    "This course is for older adults who want technology to work for their eyes, ears and health, not against them. You do not need to buy anything new; most of these tools are already on your phone or tablet.",
    "In Chapter 1 you will make text bigger, use your phone as a magnifying glass, have it read text aloud, and turn on captions. In Chapter 2 you will set medicine reminders, use AI to prepare for a doctor's visit, and learn where to find trusted health information.",
    "Each lesson takes about five minutes. A family member can help with settings the first time. This course does not give medical advice: always follow your doctor's and pharmacist's instructions. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make your phone easier to use by changing one setting for seeing or hearing, set a daily reminder for a medicine or a short walk, and use an AI assistant to turn your health concerns into a short, clear list of questions to bring to your next doctor's appointment, with no private numbers in it.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Older adults who manage their own health and medicines and may have changes in eyesight or hearing. Many see more than one doctor and take several medicines.",
    startingPoint: "Own a smartphone or tablet and use it for calls and texts. Many find the text small or voices hard to hear, and have not explored accessibility settings, repeating reminders or AI assistants.",
    gap: "Small text and hard-to-hear audio make people give up on phones that could help them stay healthy. Making the phone easier to see and hear, using reminders for medicines, preparing clear questions for the doctor and checking health facts on a trusted site support independence and better visits, without letting AI replace the doctor.",
    constraints: [
      "Reading level: plain words, short sentences and large, simple steps",
      "Devices: iPhone, Android phones and tablets; menu names differ, so learners search Settings",
      "Time: about 5 minutes per lesson at a relaxed pace",
      "Health: AI is for preparing, never diagnosing; medicines follow the doctor and pharmacist",
      "Privacy: no name, birth date or insurance numbers in AI prompts"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using the Settings app on your phone or tablet", action: "make the text larger and bolder and zoom in on a screen", standard: "until text is comfortable to read" },
    { id: "O2", condition: "Given small print such as a medicine label", action: "use the phone as a magnifier and turn on read-aloud", standard: "so you can read or hear the print" },
    { id: "O3", condition: "When voices on videos or calls are hard to hear", action: "turn on captions and find your phone's hearing options", standard: "so the words show on screen" },
    { id: "O4", condition: "Given a medicine or healthy habit", action: "set a daily repeating reminder on your phone", standard: "at the time your doctor or pharmacist said, checked that it is set" },
    { id: "O5", condition: "Before a doctor's visit", action: "use an AI assistant to turn your concerns into a short list of clear questions", standard: "with no private numbers and no medicine changes because of AI" },
    { id: "O6", condition: "Given health information from AI or a website", action: "check it on a trusted source such as MedlinePlus, your doctor or your pharmacist", standard: "before you act on it" }
  ],
  chapters: [
    {
      name: "Chapter 1: Making your device easier to see and hear",
      lessons: [
        {
          objectives: ["O1"],
          title: "Making text bigger and easier to read",
          minutes: 5,
          goal: "Make the text on your phone or tablet larger and bolder.",
          text: [
            "Small text is one of the most common reasons people give up on a phone. The good news: every smartphone and tablet lets you make text larger, and many let you make it bold too.",
            "Menu names differ from phone to phone, so the easiest way is to search. Open the Settings app (often a gray gear), tap the search bar at the top, and type \"text size\" or \"font size\". Tap the result and slide the bar to the right until the text is comfortable. Look for a \"bold text\" switch nearby as well.",
            "Some apps also let you zoom in by placing two fingers on the screen and spreading them apart. Pinch them together to zoom back out."
          ],
          steps: ["Open the Settings app.", "Tap the search bar at the top.", "Type \"text size\" or \"font size\".", "Slide the bar to the right until text is comfortable.", "Turn on \"bold text\" if you like."],
          words: [["Settings", "the app where you change how your phone looks and works, usually a gear picture."], ["Font", "the style and size of letters on the screen."], ["Zoom", "making what is on the screen look bigger."]],
          slides: [
            { title: "Small text? You can fix it", bullets: ["Every phone and tablet can make text bigger", "Many can make it bold too"] },
            { title: "Search your Settings", bullets: ["Open Settings (the gear)", "Search \"text size\" or \"font size\"", "Slide the bar to the right"] },
            { title: "Zoom with two fingers", bullets: ["Spread two fingers apart to zoom in", "Pinch them together to zoom out"] }
          ],
          tryIt: "Open Settings, search for \"text size\", and make your text one or two steps larger. Open your messages or email to see the difference.",
          youCanNow: "make the text on your device larger and bolder.",
          quickCheck: [
            { objective: "O1", q: "What does spreading two fingers apart on the screen do in many apps?", options: ["Zooms in", "Turns off the phone", "Makes a call", "Deletes the page"], answer: 0, why: "Spreading two fingers apart zooms in; pinching them together zooms back out." },
            { objective: "O1", q: "You cannot find the text size menu on your new phone. What do you do?", options: ["Buy a new phone", "Give up", "Open Settings, tap the search bar and type \"text size\"", "Turn the phone off and on"], answer: 2, why: "Menu names differ, so searching Settings is the easiest way to find the setting." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Your phone as a magnifier and reader",
          minutes: 5,
          goal: "Use your phone to magnify small print and to read text aloud.",
          text: [
            "Your phone's camera can work as a magnifying glass for medicine labels, menus and receipts. iPhones have an app called Magnifier. On many Android phones you can use the Camera app's zoom, or search Settings for \"magnif\".",
            "Phones can also read text aloud. Search Settings for \"spoken content\" or \"select to speak\", and turn it on. Then you can select text and choose Speak. Google Lens and some AI assistants can also read a photographed page aloud.",
            "Turn on the flashlight if the light is dim, and hold the phone steady a few inches above the page."
          ],
          steps: ["Open Magnifier, or the Camera app and zoom in.", "Hold the phone a few inches above the small print.", "Turn on the light if needed.", "To hear text, search Settings for \"spoken content\" or \"select to speak\" and turn it on.", "Select text and choose Speak."],
          words: [["Magnifier", "a tool that makes small things look bigger on your screen."], ["Read aloud", "when the phone speaks written words out loud."]],
          slides: [
            { title: "A magnifying glass in your pocket", bullets: ["Medicine labels, menus, receipts", "iPhone: the Magnifier app", "Android: Camera zoom or search \"magnif\""] },
            { title: "Let the phone read to you", bullets: ["Search \"spoken content\" or \"select to speak\"", "Select text, then choose Speak"] },
            { title: "Tips", bullets: ["Turn on the light in dim rooms", "Hold the phone steady above the page"] }
          ],
          tryIt: "Use your phone to magnify the small print on a food or medicine label. Then turn on the read-aloud setting and have your phone read one message to you.",
          youCanNow: "magnify small print and have your phone read text aloud.",
          quickCheck: [
            { objective: "O2", q: "What is the Magnifier app on an iPhone for?", options: ["Taking selfies", "Making calls louder", "Sending photos", "Using the camera as a magnifying glass"], answer: 3, why: "Magnifier turns the camera into a magnifying glass for small print." },
            { objective: "O2", q: "You want your phone to read a long article aloud. What do you search for in Settings?", options: ["\"Wallpaper\"", "\"Spoken content\" or \"select to speak\"", "\"Battery\"", "\"Ringtone\""], answer: 1, why: "Turning on spoken content or select to speak lets you select text and choose Speak." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Captions and hearing help",
          minutes: 5,
          goal: "Turn on captions so you can read what is being said.",
          text: [
            "If voices on videos or calls are hard to hear, captions show the words on screen as they are spoken.",
            "Many phones have a feature that adds captions to almost any video or audio, called Live Captions. Search Settings for \"caption\" to find it and turn it on. In YouTube, tap the CC button on a video. Many video call apps also have a captions button.",
            "Phones can also connect to many modern hearing aids by Bluetooth. Search Settings for \"hearing\" to see what your phone offers, and ask your hearing care professional which settings fit your hearing aids."
          ],
          steps: ["Open Settings and search \"caption\".", "Turn on Live Captions or captions.", "On YouTube, tap CC on the video.", "On video calls, look for a captions button.", "Search Settings for \"hearing\" for hearing aid options."],
          words: [["Captions", "words shown on the screen as people speak."], ["Bluetooth", "a wireless way to connect your phone to things like hearing aids or speakers."]],
          slides: [
            { title: "Read what is said", bullets: ["Captions show spoken words on screen"] },
            { title: "Turn captions on", bullets: ["Search Settings for \"caption\"", "YouTube: tap CC", "Video calls: look for a captions button"] },
            { title: "Hearing aids", bullets: ["Many connect by Bluetooth", "Search Settings for \"hearing\"", "Ask your hearing care professional"] }
          ],
          tryIt: "Search your Settings for \"caption\" and turn captions on, or open any YouTube video and tap CC. Watch one minute with captions.",
          youCanNow: "turn on captions on your device and find hearing settings.",
          quickCheck: [
            { objective: "O3", q: "What does Live Captions do?", options: ["Adds captions to almost any video or audio on the phone", "Records your calls", "Takes photos", "Turns up the volume"], answer: 0, why: "Live Captions shows the words of videos and audio on screen." },
            { objective: "O3", q: "You want to connect your hearing aids to your phone. What is a good first step?", options: ["Turn off Bluetooth", "Buy new hearing aids", "Search Settings for \"hearing\" and ask your hearing care professional", "Turn the ringer off"], answer: 2, why: "Settings shows hearing options, and your hearing care professional knows which fit your aids." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Making your device easier to see and hear",
        questions: [
          { objective: "O1", q: "Menu names differ between phones. What is the easiest way to find the text size setting?", options: ["Restart the phone", "Buy a new phone", "Open Settings and search \"text size\"", "Call a stranger"], answer: 2, why: "The search bar in Settings finds it on any phone." },
          { objective: "O1", q: "How do you zoom in on many screens?", options: ["Spread two fingers apart on the screen", "Shake the phone", "Press the power button", "Turn the phone over"], answer: 0, why: "Spreading two fingers makes things bigger." },
          { objective: "O2", q: "You cannot read the tiny print on a medicine bottle. What can help?", options: ["The music app", "The calculator", "The clock", "The phone's magnifier or camera zoom"], answer: 3, why: "The magnifier makes small print bigger." },
          { objective: "O3", q: "What are captions?", options: ["Photos of food", "Words shown on screen as people speak", "A kind of alarm", "Phone numbers"], answer: 1, why: "Captions help when voices are hard to hear." },
          { objective: "O3", q: "On YouTube, which button turns on captions?", options: ["Share", "CC", "Like", "Subscribe"], answer: 1, why: "CC stands for closed captions." }
        ]
      }
    },
    {
      name: "Chapter 2: Technology for your health",
      lessons: [
        {
          objectives: ["O4"],
          title: "Setting medicine and wellness reminders",
          minutes: 5,
          goal: "Set a daily repeating reminder for a medicine or healthy habit.",
          text: [
            "A daily reminder on your phone can help you take medicines on time, drink water, or take a short walk.",
            "The easiest way is to ask your phone's voice assistant: \"Remind me to take my morning pill every day at 8 am.\" You can also open the Clock or Reminders app, add an alarm or reminder, and choose that it repeats every day.",
            "A reminder only helps you remember; it does not tell you what to take. Always follow the instructions from your doctor and pharmacist, and ask your pharmacist if you are unsure about timing. Some pharmacies also offer free refill reminders by text or app."
          ],
          steps: ["Ask your voice assistant, or open the Clock or Reminders app.", "Say or type what to remember and the time.", "Choose that it repeats every day.", "Check that it is set.", "Follow your doctor's and pharmacist's instructions."],
          words: [["Repeating reminder", "a reminder that comes back every day or week without setting it again."], ["Refill", "getting more of a medicine you already take."]],
          slides: [
            { title: "Daily reminders help", bullets: ["Medicines on time", "Drinking water", "A short walk"] },
            { title: "Set one", bullets: ["\"Remind me to take my pill every day at 8 am.\"", "Or use the Clock or Reminders app", "Choose \"every day\""] },
            { title: "Remember", bullets: ["The reminder does not tell you what to take", "Follow your doctor and pharmacist", "Ask your pharmacy about refill reminders"] }
          ],
          tryIt: "Set one daily repeating reminder for a medicine you already take, or for a healthy habit such as a 10-minute walk.",
          youCanNow: "set a daily repeating reminder for a medicine or healthy habit.",
          quickCheck: [
            { objective: "O4", q: "What does a repeating reminder do?", options: ["Rings only once", "Tells you which medicine to take", "Orders your refills", "Comes back every day at the time you chose"], answer: 3, why: "A repeating reminder returns daily; it helps you remember but does not tell you what to take." },
            { objective: "O4", q: "You are not sure whether to take a pill before or after breakfast. Who do you ask?", options: ["The reminder app", "Your pharmacist", "A friend", "A website selling vitamins"], answer: 1, why: "Follow your doctor's and pharmacist's instructions, and ask your pharmacist about timing." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Preparing for a doctor's visit with AI",
          minutes: 5,
          goal: "Use an AI assistant to turn your concerns into a clear list of questions for your doctor.",
          text: [
            "Doctor's visits can feel rushed, and it is easy to forget what you meant to ask. An AI assistant can help you organize your thoughts before you go.",
            "Describe your concerns in general words, without your name, birth date or insurance numbers: \"I have a checkup next week. I have been more tired than usual, my knees ache on stairs, and I want to ask about my blood pressure medicine. Help me make a short list of clear questions to ask my doctor.\"",
            "AI is for preparing, not for diagnosing. Do not change or stop any medicine because of what an AI says. Bring your list to the visit, write the doctor's answers down, or bring a family member to help."
          ],
          steps: ["Write your concerns in general words, with no private numbers.", "Ask AI for a short list of clear questions.", "Put the most important question first.", "Bring the list, and write down the answers.", "Never change medicine because of AI; ask your doctor."],
          words: [["Diagnose", "to decide what illness or problem someone has; only a medical professional can do this."]],
          slides: [
            { title: "Visits feel rushed", bullets: ["Easy to forget questions", "AI can help you prepare"] },
            { title: "Ask for a question list", bullets: ["Describe concerns in general words", "No name, birth date or insurance numbers", "Most important question first"] },
            { title: "Prepare, don't diagnose", bullets: ["AI does not replace your doctor", "Never change medicine because of AI", "Write down the doctor's answers"] }
          ],
          tryIt: "Think of your next appointment. Ask an AI assistant to turn two or three of your concerns into a short list of questions. Check that it has no private numbers, then save or print it.",
          youCanNow: "prepare a clear list of questions for your doctor with AI, safely.",
          quickCheck: [
            { objective: "O5", q: "What is AI useful for before a doctor's visit?", options: ["Diagnosing your illness", "Changing your medicine", "Organizing your concerns into clear questions", "Booking surgery"], answer: 2, why: "AI is for preparing your questions, not for diagnosing." },
            { objective: "O5", q: "You are writing your concerns for the AI. What do you leave out?", options: ["How you have been feeling", "Your name, birth date and insurance numbers", "That you have a checkup next week", "That your knees ache"], answer: 1, why: "Describe concerns in general words, without private numbers." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Finding trusted health information",
          minutes: 5,
          goal: "Check health information on a trusted, free source.",
          text: [
            "Health information online ranges from excellent to dangerous. AI assistants can also be wrong about health. So check what you read with a trusted source.",
            "MedlinePlus (medlineplus.gov) is a free health information site from the National Library of Medicine, part of the US National Institutes of Health. It has no advertising and explains conditions, tests and medicines in plain language. Your doctor's office and your pharmacist are also trusted sources.",
            "Be wary of sites that sell a cure, promise miracle results, or tell you to stop your medicine. When something you read worries you, write it down and ask your doctor or pharmacist."
          ],
          steps: ["Notice health claims from AI or websites.", "Look them up on medlineplus.gov.", "Ask your doctor or pharmacist about anything that worries you.", "Avoid sites that sell cures or promise miracles."],
          words: [["Trusted source", "a reliable place for information, such as a government health site or your own doctor."], ["MedlinePlus", "a free, ad-free health information website from the US National Library of Medicine."]],
          slides: [
            { title: "Not all health information is good", bullets: ["Websites can be wrong", "AI can be wrong too"] },
            { title: "MedlinePlus: medlineplus.gov", bullets: ["Free and ad-free", "From the National Library of Medicine", "Plain-language explanations"] },
            { title: "Red flags", bullets: ["Selling a cure", "Miracle promises", "\"Stop your medicine\""] }
          ],
          sources: [{ name: "About MedlinePlus (National Library of Medicine)", url: "https://medlineplus.gov/about/general/aboutmedlineplus/" }],
          tryIt: "Final task: change one setting to make your phone easier to see or hear, set a daily reminder for a medicine or a walk, and use AI to make a short, private-number-free list of questions for your next doctor's visit. Look up one topic from your list on medlineplus.gov.",
          youCanNow: "make your device easier to use, keep up with daily health habits, prepare for appointments, and find trusted health information.",
          quickCheck: [
            { objective: "O6", q: "What is MedlinePlus?", options: ["A store that sells medicine", "A paid health app", "An AI assistant", "A free, ad-free health information site from the National Library of Medicine"], answer: 3, why: "MedlinePlus explains conditions, tests and medicines in plain language, with no ads." },
            { objective: "O6", q: "A website says a tea will cure your blood pressure and you can stop your medicine. What do you do?", options: ["Treat it as a red flag, write it down and ask your doctor", "Stop your medicine and try the tea", "Buy a year's supply", "Share it with friends"], answer: 0, why: "Sites that promise cures or say to stop medicine are red flags; ask your doctor or pharmacist." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Technology for your health",
        questions: [
          { objective: "O4", q: "How do you make a reminder come back every day?", options: ["Delete the app", "Set it once and hope", "Turn off the phone", "Choose that it repeats every day"], answer: 3, why: "A repeating reminder comes back daily." },
          { objective: "O4", q: "Does a phone reminder tell you what medicine to take?", options: ["No, follow your doctor and pharmacist", "Yes, always", "Only on weekends", "Yes, if it is loud"], answer: 0, why: "It only helps you remember." },
          { objective: "O5", q: "What should you leave out when asking AI to help prepare for a visit?", options: ["Your concerns", "The word \"doctor\"", "Your name, birth date and insurance numbers", "The date of the visit"], answer: 2, why: "Private numbers should never go into AI." },
          { objective: "O5", q: "The AI suggests you might not need a medicine. What do you do?", options: ["Stop taking it", "Ask a stranger", "Double the dose", "Ask your doctor; never change medicine because of AI"], answer: 3, why: "Only your doctor should change your medicine." },
          { objective: "O6", q: "Which is a free, ad-free health information site from the US government?", options: ["A pop-up ad", "A site selling a miracle cure", "MedlinePlus", "A social media post"], answer: 2, why: "MedlinePlus is from the National Library of Medicine." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Health, Wellness and Accessibility with Technology",
    questions: [
      { objective: "O1", q: "The Settings app is usually shown as:", options: ["A camera", "A gear", "A phone", "A clock"], answer: 1, why: "Settings usually uses a gear picture." },
      { objective: "O1", q: "To find the text size setting quickly, you:", options: ["Search \"text size\" in Settings", "Restart the phone", "Open the camera", "Call your bank"], answer: 0, why: "Searching works on any phone." },
      { objective: "O1", q: "Sliding the text size bar to the right makes text:", options: ["Bigger", "Smaller", "Disappear", "Red"], answer: 0, why: "Right is larger." },
      { objective: "O1", q: "Pinching two fingers together on the screen:", options: ["Zooms in", "Zooms out", "Turns off the phone", "Takes a photo"], answer: 1, why: "Pinch together to zoom out; spread apart to zoom in." },
      { objective: "O2", q: "The iPhone app that turns the camera into a magnifying glass is:", options: ["Weather", "Calculator", "Magnifier", "Music"], answer: 2, why: "Magnifier enlarges small print." },
      { objective: "O2", q: "In a dim room, magnifying works better if you:", options: ["Shake the phone", "Cover the camera", "Move the phone far away", "Turn on the light"], answer: 3, why: "Light helps the camera see clearly." },
      { objective: "O2", q: "Having the phone read text aloud is found by searching Settings for:", options: ["\"ringtone\"", "\"wallpaper\"", "\"spoken content\" or \"select to speak\"", "\"battery\""], answer: 2, why: "Those are the usual read-aloud setting names." },
      { objective: "O3", q: "Captions are:", options: ["Words on screen as people speak", "Pictures", "Phone numbers", "Passwords"], answer: 0, why: "Captions show spoken words." },
      { objective: "O3", q: "Live Captions can be found by searching Settings for:", options: ["\"contacts\"", "\"camera\"", "\"clock\"", "\"caption\""], answer: 3, why: "Searching \"caption\" finds caption settings." },
      { objective: "O3", q: "Many modern hearing aids connect to phones using:", options: ["A paper clip", "Bluetooth", "A landline", "A charger"], answer: 1, why: "Bluetooth is a wireless connection." },
      { objective: "O3", q: "Who should help you choose hearing aid settings?", options: ["A pop-up ad", "Your hearing care professional", "A stranger online", "Nobody"], answer: 1, why: "They know your hearing aids and hearing." },
      { objective: "O4", q: "Which spoken request sets a daily medicine reminder?", options: ["\"Medicine?\"", "\"Pill.\"", "\"Hello.\"", "\"Remind me to take my pill every day at 8 am.\""], answer: 3, why: "It says what, when and how often." },
      { objective: "O4", q: "If you are unsure when to take a medicine, ask:", options: ["Your pharmacist", "An AI only", "A neighbor", "A pop-up"], answer: 0, why: "Pharmacists are medicine experts." },
      { objective: "O5", q: "AI is useful before a doctor's visit for:", options: ["Changing your medicine", "Diagnosing you", "Organizing your questions", "Writing prescriptions"], answer: 2, why: "AI helps you prepare, not diagnose." },
      { objective: "O5", q: "\"Diagnose\" means:", options: ["Making text bigger", "Writing a list", "Setting a reminder", "Deciding what illness someone has"], answer: 3, why: "Only a medical professional can diagnose." },
      { objective: "O5", q: "Which should NOT be in your AI prompt about health?", options: ["\"My knees ache\"", "\"I feel tired\"", "Your insurance number", "\"I have a checkup next week\""], answer: 2, why: "Insurance numbers are private." },
      { objective: "O5", q: "At the visit, a good habit is to:", options: ["Leave your list at home", "Write down the doctor's answers", "Ask nothing", "Rely on memory only"], answer: 1, why: "Writing answers helps you remember them." },
      { objective: "O6", q: "MedlinePlus is run by:", options: ["The National Library of Medicine", "A supplement company", "A social media site", "A phone company"], answer: 0, why: "It is a service of the NLM at NIH." },
      { objective: "O6", q: "A website promising a miracle cure is:", options: ["A red flag", "Always trustworthy", "Run by your doctor", "Free medical care"], answer: 0, why: "Miracle claims are warning signs." },
      { objective: "O6", q: "Something you read about your health worries you. Best step?", options: ["Stop all medicine", "Write it down and ask your doctor or pharmacist", "Ignore your doctor", "Buy the product"], answer: 1, why: "Your doctor or pharmacist can explain safely." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
      11,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Easier to see or hear",
        objective: "O1",
        notYet: "No setting changed.",
        meets: "Changed one setting for seeing or hearing, such as bigger text or captions.",
        exceeds: "Changed two or more settings and can show someone else how."
      },
      {
        name: "Daily reminder",
        objective: "O4",
        notYet: "No reminder, or it does not repeat.",
        meets: "A daily repeating reminder for a medicine or walk, checked that it is set.",
        exceeds: "The time matches what the doctor or pharmacist said."
      },
      {
        name: "Clear questions",
        objective: "O5",
        notYet: "No list, or the questions are vague.",
        meets: "A short, clear list of questions made with AI help, most important first.",
        exceeds: "Has space to write down the doctor's answers."
      },
      {
        name: "Private numbers kept out",
        objective: "O5",
        notYet: "The prompt or list has a name, birth date or insurance number.",
        meets: "No private numbers in the prompt or the list.",
        exceeds: "Concerns are described in general words that still give the doctor a clear picture."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who still use their medicine or wellness reminder at the 30-day follow-up",
      "Learners who bring a written list of questions to a doctor's visit within 30 days (follow-up survey)",
      "Learners who start another Seniors and Technology course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or tablet with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "Something with small print to practice on, such as a menu or an empty medicine box",
      "About 60 minutes in total, in short, relaxed sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Group learners by phone type so settings on screen match, and help each one search Settings.",
      "Never give medical advice; send medicine and health questions to the learner's doctor or pharmacist.",
      "Remind learners to keep names, birth dates and insurance numbers out of AI prompts.",
      "Some learners may feel embarrassed about eyesight or hearing; keep the tone practical and private.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
