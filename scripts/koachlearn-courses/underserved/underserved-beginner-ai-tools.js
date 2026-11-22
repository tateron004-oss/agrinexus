"use strict";

// Koach Learn course: Undeserved Community -> "Beginner-Friendly AI Tools". Skill-building course (shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js).
// Audience: adults in low-income and underserved communities, some new to technology. Free tools only.

module.exports = {
  id: "underserved-beginner-ai-tools",
  category: "Undeserved Community",
  name: "Beginner-Friendly AI Tools",
  skills: "Picking the right free AI tool, Talking to AI with your voice, Translating with your phone camera, Making a simple flyer with Canva, Writing short messages with an AI assistant",
  outcome: "pick the right free AI tool for an everyday task and use it: talk to an assistant with your voice, translate a sign or letter with your phone camera, and make a simple one-page flyer for a community event.",
  about: [
    "There are many free AI tools, and it is hard to know where to start. This course shows you a small set of beginner-friendly tools that cost nothing and work on a phone or a library computer.",
    "You will use your voice instead of typing, translate words with your phone camera, write short messages with an AI assistant, and design a simple flyer with the free version of Canva.",
    "Each lesson takes about five minutes. Do the \"Try it now\" task after each one. A knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Make a one-page flyer for a real or pretend community event, such as a food drive, a block clean-up or a school fundraiser. Use an AI assistant to write a short title and three lines of details, design the flyer in the free version of Canva, and use a translation tool to make the same words in a second language your neighbors speak.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in underserved communities who are new to AI tools: parents, older adults, community volunteers, people without a home computer, and people who speak a language other than English at home.",
    startingPoint: "Use a phone for calls, texts and maybe social media. Have heard of AI but do not know which free tools exist or what each one is for. Some find typing slow or hard.",
    gap: "Free tools can write messages, translate signs and letters, and design flyers, but learners do not know where to start. Matching the right free tool to a task saves time and money and helps them share news with neighbors in more than one language.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a smartphone or a library computer",
      "Cost: free versions of tools only",
      "Machine translation is not perfect: important medical or legal papers need an interpreter",
      "Privacy: sign out of shared computers and keep private details out of prompts"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and Digital Empowerment\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an everyday task", action: "choose the free tool that fits it: a chat assistant, a translation app or a design tool", standard: "matching at least 4 of 5 tasks to the right kind of tool" },
    { id: "O2", condition: "Using a phone or an AI assistant app", action: "ask a question by speaking and fix any words the voice typing got wrong", standard: "before you send it" },
    { id: "O3", condition: "Given a printed sign, label or notice in another language", action: "translate it with a phone camera and decide when to ask for an interpreter or a fluent reader", standard: "using an interpreter for medical or legal papers" },
    { id: "O4", condition: "Given a message you need to send", action: "ask an AI assistant for a short message with the reader, content, tone and length, then edit it and check every fact", standard: "so it sounds like you and every date and place is right" },
    { id: "O5", condition: "Using the free version of Canva", action: "create a one-page flyer from a template with a title, what, when and where, and one picture", standard: "downloaded or shared, and signed out on a shared computer" }
  ],
  chapters: [
    {
      name: "Chapter 1: Your free AI toolbox",
      lessons: [
        {
          objectives: ["O1"],
          title: "Picking the right free tool for the job",
          minutes: 4,
          goal: "Match an everyday task to the free AI tool that fits it.",
          text: [
            "Think of AI tools like tools in a kitchen drawer. Each one is good at a different job.",
            "An AI chat assistant (ChatGPT, Microsoft Copilot or Google Gemini) is good for writing, explaining and planning. A translation app (like Google Translate) is good for other languages. A design tool (like Canva, which has a free version) is good for flyers and cards.",
            "Start with the task, not the tool. Ask yourself: do I need words written, words translated, or something that looks nice to print or share?"
          ],
          steps: ["Write down the task you need to do.", "Decide: do you need words written, translated, or designed?", "Pick the tool that matches: chat assistant, translation app or design tool.", "Use the free version first."],
          words: [["Chat assistant", "an AI program you write or talk to, which writes answers back."], ["Free version", "the no-cost level of a tool; some tools also sell extra features."]],
          slides: [
            { title: "Tools are like a kitchen drawer", bullets: ["Each tool is good at a different job", "Start with the task, not the tool"] },
            { title: "Three free tools to start", bullets: ["Chat assistant: write, explain, plan", "Translation app: other languages", "Canva free: flyers and cards"] },
            { title: "Ask yourself", bullets: ["Do I need words written?", "Words translated?", "Something designed to print or share?"] }
          ],
          tryIt: "List three tasks you have this month. Next to each, write which kind of tool fits: chat assistant, translation app or design tool.",
          youCanNow: "match an everyday task to the right free AI tool.",
          quickCheck: [
            { objective: "O1", q: "Which kind of tool is best for putting a letter into another language?", options: ["A translation app", "A design tool", "A photo editor", "A calendar app"], answer: 0, why: "A translation app is made for changing words into another language." },
            { objective: "O1", q: "You need a thank-you card for volunteers that looks nice to print. What do you open first?", options: ["A translation app", "A design tool like Canva", "A calculator", "Voice typing"], answer: 1, why: "A design tool is made for cards and flyers that look nice to print or share." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Talking to AI with your voice",
          minutes: 5,
          goal: "Ask an AI assistant a question by speaking instead of typing.",
          text: [
            "If typing is slow or hard for you, you can talk instead. Most AI assistant apps have a microphone button. Tap it, speak your question, and the app turns your words into text.",
            "Phones also have voice typing built into the keyboard. Look for a small microphone on the keyboard when you are typing a message.",
            "Speak clearly and a little slower than normal. Say what you need, like: \"Help me write a short note to my son's teacher saying he will miss school on Friday for a doctor visit.\" Read the words before you send them, because voice typing can mishear."
          ],
          steps: ["Open the AI assistant app or a message on your phone.", "Find the microphone button.", "Tap it and speak your question clearly.", "Read the words it heard, fix any mistakes, then send."],
          words: [["Voice typing", "a phone feature that turns what you say into written words."], ["Microphone button", "a small button with a microphone picture that lets the device listen."]],
          slides: [
            { title: "Talk instead of type", bullets: ["Most AI apps have a microphone button", "Phones have voice typing on the keyboard"] },
            { title: "How to speak to it", bullets: ["Speak clearly, a little slower", "Say what you need and how you want it"] },
            { title: "Check before you send", bullets: ["Voice typing can mishear words", "Read it, fix it, then send"] }
          ],
          tryIt: "Use the microphone button to ask an AI assistant to write a two-sentence note to a teacher, boss or neighbor. Read it and fix any mistakes.",
          youCanNow: "ask an AI assistant for help using your voice and check what it heard.",
          quickCheck: [
            { objective: "O2", q: "Where do you often find voice typing on a phone?", options: ["In the camera settings", "In the battery menu", "A small microphone on the keyboard", "In the phone's contacts"], answer: 2, why: "Phone keyboards often have a small microphone button for voice typing." },
            { objective: "O2", q: "You spoke a note and the app wrote \"by bread\" instead of \"buy bread\". What do you do?", options: ["Send it anyway", "Delete the app", "Start over on paper", "Fix the words before you send"], answer: 3, why: "Voice typing can mishear, so you read and fix the words before sending." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Translating with your phone camera",
          minutes: 5,
          goal: "Translate a printed sign, label or letter by pointing your phone camera at it.",
          text: [
            "Free apps like Google Translate can read printed words through your phone camera and show them in another language. This helps with signs, medicine labels, school notices and forms written in a language you do not read well.",
            "In the app, pick the two languages (the one on the paper and the one you want), choose the camera option, and point your phone at the words.",
            "Machine translation is helpful but not perfect. For medicine, legal papers or anything important, ask for an interpreter. Many hospitals, clinics and government offices offer one at no cost; ask at the front desk."
          ],
          steps: ["Install a free translation app from the official app store.", "Pick the language on the paper and the language you want.", "Choose the camera option and point your phone at the words.", "For important papers, ask the office for an interpreter."],
          words: [["Translate", "to change words from one language into another."], ["Interpreter", "a trained person who translates speech between two languages."]],
          slides: [
            { title: "Your camera can translate", bullets: ["Signs, labels, school notices, forms", "Free apps like Google Translate"] },
            { title: "How to do it", bullets: ["Pick the two languages", "Choose the camera option", "Point your phone at the words"] },
            { title: "Important papers", bullets: ["Machine translation is not perfect", "Ask the office for an interpreter", "Many clinics and offices offer one for free"] }
          ],
          tryIt: "Point a translation app's camera at a printed label or sign in your home (a food box works). Translate it into another language and back.",
          youCanNow: "translate printed words with your phone camera, and know when to ask for a person instead.",
          quickCheck: [
            { objective: "O3", q: "What is true about machine translation?", options: ["It is helpful but not perfect", "It is always exactly right", "It only works for English", "It needs a paid account"], answer: 0, why: "Free translation is a strong help but can make mistakes." },
            { objective: "O3", q: "Your medicine label is in a language you do not read well. What is the safest step?", options: ["Guess from the pictures", "Ask the pharmacy or clinic for an interpreter", "Only use the camera translation", "Ask a stranger online"], answer: 1, why: "For medicine and legal papers, a trained interpreter is the safest help." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Your free AI toolbox",
        questions: [
          { objective: "O1", q: "You need a flyer for a school bake sale. Which kind of tool fits best?", options: ["A translation app", "A design tool like Canva", "A calculator", "A map app"], answer: 1, why: "Design tools are made for flyers and cards." },
          { objective: "O2", q: "Typing is hard for you. How can you still ask an AI assistant a question?", options: ["You cannot", "Pay for a keyboard class first", "Use the microphone button and speak", "Ask someone else to type your password"], answer: 2, why: "Voice input lets you speak instead of type." },
          { objective: "O2", q: "Why read what voice typing wrote before sending?", options: ["It can mishear words", "It always adds your address", "It charges money", "It deletes your message"], answer: 0, why: "Voice typing can get words wrong." },
          { objective: "O3", q: "You want to read a sign in another language. What do you use?", options: ["A design tool", "A music app", "A flashlight", "A translation app with the camera option"], answer: 3, why: "The camera option reads and translates printed words." },
          { objective: "O3", q: "You need to understand instructions from your doctor in another language. What is best?", options: ["Ask the clinic for an interpreter", "Guess", "Use only a phone translation", "Ignore the instructions"], answer: 0, why: "For medicine and important papers, a trained interpreter is safest." }
        ]
      }
    },
    {
      name: "Chapter 2: Making things with AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing short messages with an AI assistant",
          minutes: 4,
          goal: "Get an AI assistant to write a short, clear message in the tone you want.",
          text: [
            "An AI assistant can write short messages for you: a reminder to your community group, a note to a landlord, or a thank-you to a volunteer.",
            "Tell it who the message is for, what it must say, and the tone: friendly, polite, or firm. Tell it how long: \"three sentences\" or \"under 50 words\".",
            "Then make it yours. Change words that do not sound like you, and check names, dates and places yourself."
          ],
          steps: ["Say who the message is for.", "Say what it must include: date, time, place, what to bring.", "Say the tone and the length.", "Edit it so it sounds like you, and check every fact."],
          words: [["Tone", "how a message sounds: friendly, polite, serious or firm."]],
          slides: [
            { title: "Short messages AI can write", bullets: ["Reminders for your group", "Notes to a landlord or school", "Thank-yous to volunteers"] },
            { title: "Tell it four things", bullets: ["Who it is for", "What it must say", "The tone", "The length"] },
            { title: "Make it yours", bullets: ["Change words that do not sound like you", "Check names, dates and places"] }
          ],
          tryIt: "Ask an AI assistant: \"Write a friendly three-sentence reminder for my neighbors about a block clean-up on Saturday at 9 am. Bring gloves.\" Then change one line so it sounds like you.",
          youCanNow: "get an AI assistant to write a short message with the right tone and length, then make it your own.",
          quickCheck: [
            { objective: "O4", q: "What does \"tone\" mean in a message?", options: ["How long it is", "Who it is for", "How it sounds, like friendly or firm", "The date it is sent"], answer: 2, why: "Tone is how a message sounds to the reader." },
            { objective: "O4", q: "The AI's reminder says the clean-up is Sunday, but it is Saturday. What do you do?", options: ["Send it; the AI knows best", "Ask everyone to come both days", "Delete the whole message", "Change it to Saturday before sending"], answer: 3, why: "You check every fact yourself and fix it before you send." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Designing a simple flyer with Canva",
          minutes: 6,
          goal: "Make a one-page flyer in the free version of Canva.",
          text: [
            "Canva is a design website and app with a free version. It has ready-made templates, so you do not need to be an artist. You can use it at canva.com on a library computer or in its app on your phone.",
            "Search Canva for a template, such as \"flyer\" or \"event flyer\". Click one you like, then click on its words to replace them with yours. Keep it simple: a big title, three short lines (what, when, where), and one picture.",
            "When you finish, download it to print, or share it by text or email. Canva asks you to make a free account; on a shared computer, sign out when you finish."
          ],
          steps: ["Go to canva.com or open the Canva app and sign up for a free account.", "Search for a flyer template and pick one.", "Click each piece of text and type your own words.", "Keep it to a title, three short lines and one picture.", "Download or share it, then sign out on a shared computer."],
          words: [["Template", "a ready-made design you fill in with your own words and pictures."], ["Download", "to save a copy of a file onto your device."]],
          slides: [
            { title: "Canva: free design tool", bullets: ["Website canva.com or the Canva app", "Ready-made templates", "No art skills needed"] },
            { title: "Make your flyer", bullets: ["Search for a flyer template", "Click the words and type yours", "Title + what, when, where + one picture"] },
            { title: "Finish and share", bullets: ["Download to print", "Share by text or email", "Sign out on a shared computer"] }
          ],
          tryIt: "Open Canva, pick a flyer template, and replace the words with the reminder you wrote in Lesson 4. Download it or save it to your account.",
          youCanNow: "make a simple, clear flyer using a free Canva template.",
          quickCheck: [
            { objective: "O5", q: "What is a template in Canva?", options: ["A ready-made design you fill in with your words", "A paid add-on", "A type of printer", "A photo filter"], answer: 0, why: "A template is a ready-made design, so you only change the words and pictures." },
            { objective: "O5", q: "Your flyer has eight lines of small text. How do you make it easier to read?", options: ["Make the text smaller", "Cut it to a title and three short lines", "Add more pictures", "Use five colors"], answer: 1, why: "A big title and three short lines (what, when, where) are easiest to read." }
          ]
        },
        {
          objectives: ["O5","O3"],
          title: "Putting the tools together",
          minutes: 5,
          goal: "Use a chat assistant, a design tool and a translation tool together to make one finished flyer in two languages.",
          text: [
            "Real projects often use more than one tool. For a community flyer, you can use the chat assistant to write the words, Canva to design it, and a translation tool to make a second version.",
            "Ask the AI for a short title and three lines of details. Paste them into a Canva template. Then translate the same words into a second language your neighbors speak and make a copy of the flyer with them.",
            "Ask someone who speaks that language to read the translation if you can. Free tools are a strong start; a real reader makes it right."
          ],
          steps: ["Ask a chat assistant for a title and three lines of details.", "Put the words into a Canva flyer template.", "Translate the words into a second language.", "Make a copy of the flyer with the translation.", "Ask a fluent speaker to read it if you can."],
          words: [["Project", "a piece of work with a clear finished result, like a flyer."]],
          slides: [
            { title: "One project, three tools", bullets: ["Chat assistant: the words", "Canva: the design", "Translation app: a second language"] },
            { title: "The steps", bullets: ["Write the words with AI", "Put them in a Canva template", "Translate and make a second copy"] },
            { title: "Make it right", bullets: ["Check every date and place", "Ask a fluent speaker to read the translation"] }
          ],
          tryIt: "Final task: make a one-page flyer for a community event. Use an AI assistant to write a title and three lines, design it in Canva, and make a second copy translated into another language your neighbors speak.",
          youCanNow: "use several free AI tools together to finish a real project for your community.",
          quickCheck: [
            { objective: "O5", q: "In the combined project, what do you paste into the Canva template?", options: ["Your phone number", "The whole AI chat", "The title and three lines the AI wrote", "A link to the AI website"], answer: 2, why: "The chat assistant writes the words, and you put them into the Canva flyer." },
            { objective: "O3", q: "You translated your flyer into Spanish but do not speak Spanish. What do you do before sharing?", options: ["Share it right away", "Translate it a second time", "Remove the Spanish copy", "Ask a fluent Spanish speaker to read it"], answer: 3, why: "A real reader catches mistakes the free tool missed." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Making things with AI",
        questions: [
          { objective: "O4", q: "What four things should you tell an AI assistant when asking for a short message?", options: ["Your password, address, age and bank", "Who it is for, what it must say, the tone and the length", "Only the date", "Nothing; it will guess"], answer: 1, why: "These four details get a message that fits." },
          { objective: "O5", q: "What is a template?", options: ["A virus", "A password", "A ready-made design you fill in with your words", "A phone setting"], answer: 2, why: "Templates let beginners make good-looking designs." },
          { objective: "O5", q: "What should a simple flyer include?", options: ["A big title and what, when and where", "Ten paragraphs", "Your Social Security number", "Only pictures, no words"], answer: 0, why: "Simple flyers are easy to read: title, details and one picture." },
          { objective: "O5", q: "You used Canva on a library computer. What do you do at the end?", options: ["Leave your account open", "Save your password in the browser", "Write your password on the screen", "Sign out"], answer: 3, why: "Signing out protects your account on a shared computer." },
          { objective: "O3", q: "You translated your flyer with a free tool. How can you make sure it is right?", options: ["Ask a fluent speaker to read it", "Translate it ten more times", "Make the font bigger", "Add more pictures"], answer: 0, why: "A real reader catches mistakes machines make." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Beginner-Friendly AI Tools",
    questions: [
      { objective: "O1", q: "When choosing an AI tool, you should start with:", options: ["The most expensive tool", "The task you need to do", "The newest app", "Whatever a stranger suggests"], answer: 1, why: "Start with the task, then pick the tool that fits." },
      { objective: "O1", q: "Which tool is best for writing and explaining?", options: ["A camera app", "A flashlight app", "A chat assistant like Copilot, ChatGPT or Gemini", "A music player"], answer: 2, why: "Chat assistants are good at writing, explaining and planning." },
      { objective: "O1", q: "Canva is mainly used for:", options: ["Designing flyers and cards", "Banking", "Phone calls", "Weather"], answer: 0, why: "Canva is a design tool with a free version." },
      { objective: "O1", q: "Where should you try first when picking a tool?", options: ["The most expensive plan", "A paid course", "A pop-up ad", "The free version"], answer: 3, why: "Free versions are enough for most beginner tasks." },
      { objective: "O2", q: "How do you speak a question to most AI apps?", options: ["Shake the phone", "Tap the microphone button", "Turn the phone off", "Open the camera"], answer: 1, why: "The microphone button lets the app listen." },
      { objective: "O2", q: "When using voice typing, it helps to:", options: ["Speak clearly and a little slower", "Whisper", "Talk very fast", "Cover the microphone"], answer: 0, why: "Clear, slower speech is heard more accurately." },
      { objective: "O2", q: "Voice typing wrote \"Friday\" as \"fry day\". You should:", options: ["Send it anyway", "Delete the app", "Fix it before sending", "Start over on a new phone"], answer: 2, why: "Always read and fix what voice typing heard." },
      { objective: "O3", q: "To translate a printed school notice, you can:", options: ["Use a design tool", "Use a translation app's camera option", "Use the calculator", "Wait for someone to call"], answer: 1, why: "The camera option reads and translates printed words." },
      { objective: "O3", q: "In a translation app you first choose:", options: ["A password", "A font", "A color", "The language on the paper and the language you want"], answer: 3, why: "The app needs to know both languages." },
      { objective: "O3", q: "For a legal paper in a language you do not read well, the safest help is:", options: ["A trained interpreter", "Guessing", "A meme", "Skipping it"], answer: 0, why: "Important papers need a trained person, not only a machine." },
      { objective: "O4", q: "Which is a good request for a short message?", options: ["\"message\"", "\"Write a polite two-sentence note to my landlord asking when the heater will be fixed.\"", "\"write\"", "\"stuff for landlord\""], answer: 1, why: "It says who, what, tone and length." },
      { objective: "O4", q: "After an AI writes your message, you should:", options: ["Send it without reading", "Add your bank details", "Edit it to sound like you and check the facts", "Post it publicly"], answer: 2, why: "You make it yours and check names, dates and places." },
      { objective: "O4", q: "Tone means:", options: ["How a message sounds, like friendly or firm", "The message length", "The font size", "The phone volume"], answer: 0, why: "Tone is how the message feels to the reader." },
      { objective: "O5", q: "What does Canva ask you to make before you can design?", options: ["A payment", "A phone call", "A free account", "A printed form"], answer: 2, why: "Canva uses a free account to save your designs." },
      { objective: "O5", q: "Which flyer is easiest to read?", options: ["A full page of tiny text", "A title, three short lines and one picture", "Ten pictures and no words", "Only a phone number"], answer: 1, why: "Short and clear is best for a flyer." },
      { objective: "O5", q: "To get a copy of your flyer to print, you:", options: ["Take a photo of the screen", "Close the browser", "Email Canva", "Download it"], answer: 3, why: "Downloading saves a copy you can print." },
      { objective: "O1", q: "In the combined project, which tool writes the words?", options: ["The chat assistant", "The translation app", "The printer", "The camera"], answer: 0, why: "The chat assistant writes the title and details." },
      { objective: "O3", q: "Why make a second copy of the flyer in another language?", options: ["It looks nicer", "So more neighbors can read it", "Canva requires it", "To use more paper"], answer: 1, why: "A second language reaches more of your community." },
      { objective: "O4", q: "Before sharing the finished flyer, you should check:", options: ["The weather", "Your phone battery", "That every date and place is right", "The color of the printer"], answer: 2, why: "Wrong details on a flyer send people to the wrong place." },
      { objective: "O3", q: "In the final task, the last tool you use is:", options: ["A calculator", "A music app", "A map", "A translation tool for a second-language copy"], answer: 3, why: "The final step makes the flyer in a second language." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      6,
      7,
      9,
      10,
      13,
      14,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Words from the assistant",
        objective: "O4",
        notYet: "No title or details, or the words were not checked.",
        meets: "A short title and three lines from the AI, edited to sound right, with dates and places checked.",
        exceeds: "Asked the AI for a change, such as a friendlier tone or a shorter title."
      },
      {
        name: "Flyer design",
        objective: "O5",
        notYet: "No flyer, or it is crowded and hard to read.",
        meets: "A one-page Canva flyer with a big title, what, when and where, and one picture.",
        exceeds: "Downloaded or shared it, and it reads clearly from across a room."
      },
      {
        name: "Second language",
        objective: "O3",
        notYet: "No translated copy.",
        meets: "A second copy with the words translated into a language neighbors speak.",
        exceeds: "A fluent speaker read the translation and it was fixed if needed."
      },
      {
        name: "Right tool for each step",
        objective: "O1",
        notYet: "Cannot say which tool did which job.",
        meets: "Names the chat assistant, Canva and the translation tool for each step.",
        exceeds: "Explains why each tool fits its job."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who make a real flyer or message for a community group, school or business within 30 days (follow-up survey)",
      "Community partners report more events promoted in two or more languages",
      "Learners who start another Koach Learn course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet, or a library or community-center computer",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "A free translation app such as Google Translate, and a free Canva account",
      "A printed label or sign to practice camera translation",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Pair learners who speak different languages so they can read each other's translations.",
      "Help with Canva sign-up first; it takes the most time for beginners.",
      "Remind learners that medicine and legal papers need an interpreter, not only an app.",
      "Make sure learners sign out of Canva and AI tools on shared computers.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
