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
  chapters: [
    {
      name: "Chapter 1: Your free AI toolbox",
      lessons: [
        {
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
          youCanNow: "match an everyday task to the right free AI tool."
        },
        {
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
          youCanNow: "ask an AI assistant for help using your voice and check what it heard."
        },
        {
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
          youCanNow: "translate printed words with your phone camera, and know when to ask for a person instead."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your free AI toolbox",
        questions: [
          { q: "You need a flyer for a school bake sale. Which kind of tool fits best?", options: ["A translation app", "A design tool like Canva", "A calculator", "A map app"], answer: 1, why: "Design tools are made for flyers and cards." },
          { q: "Typing is hard for you. How can you still ask an AI assistant a question?", options: ["You cannot", "Pay for a keyboard class first", "Use the microphone button and speak", "Ask someone else to type your password"], answer: 2, why: "Voice input lets you speak instead of type." },
          { q: "Why read what voice typing wrote before sending?", options: ["It can mishear words", "It always adds your address", "It charges money", "It deletes your message"], answer: 0, why: "Voice typing can get words wrong." },
          { q: "You want to read a sign in another language. What do you use?", options: ["A design tool", "A music app", "A flashlight", "A translation app with the camera option"], answer: 3, why: "The camera option reads and translates printed words." },
          { q: "You need to understand instructions from your doctor in another language. What is best?", options: ["Ask the clinic for an interpreter", "Guess", "Use only a phone translation", "Ignore the instructions"], answer: 0, why: "For medicine and important papers, a trained interpreter is safest." }
        ]
      }
    },
    {
      name: "Chapter 2: Making things with AI",
      lessons: [
        {
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
          youCanNow: "get an AI assistant to write a short message with the right tone and length, then make it your own."
        },
        {
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
          youCanNow: "make a simple, clear flyer using a free Canva template."
        },
        {
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
          youCanNow: "use several free AI tools together to finish a real project for your community."
        }
      ],
      check: {
        title: "Knowledge Check 2: Making things with AI",
        questions: [
          { q: "What four things should you tell an AI assistant when asking for a short message?", options: ["Your password, address, age and bank", "Who it is for, what it must say, the tone and the length", "Only the date", "Nothing; it will guess"], answer: 1, why: "These four details get a message that fits." },
          { q: "What is a template?", options: ["A virus", "A password", "A ready-made design you fill in with your words", "A phone setting"], answer: 2, why: "Templates let beginners make good-looking designs." },
          { q: "What should a simple flyer include?", options: ["A big title and what, when and where", "Ten paragraphs", "Your Social Security number", "Only pictures, no words"], answer: 0, why: "Simple flyers are easy to read: title, details and one picture." },
          { q: "You used Canva on a library computer. What do you do at the end?", options: ["Leave your account open", "Save your password in the browser", "Write your password on the screen", "Sign out"], answer: 3, why: "Signing out protects your account on a shared computer." },
          { q: "You translated your flyer with a free tool. How can you make sure it is right?", options: ["Ask a fluent speaker to read it", "Translate it ten more times", "Make the font bigger", "Add more pictures"], answer: 0, why: "A real reader catches mistakes machines make." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Beginner-Friendly AI Tools",
    questions: [
      { q: "When choosing an AI tool, you should start with:", options: ["The most expensive tool", "The task you need to do", "The newest app", "Whatever a stranger suggests"], answer: 1, why: "Start with the task, then pick the tool that fits." },
      { q: "Which tool is best for writing and explaining?", options: ["A camera app", "A flashlight app", "A chat assistant like Copilot, ChatGPT or Gemini", "A music player"], answer: 2, why: "Chat assistants are good at writing, explaining and planning." },
      { q: "Canva is mainly used for:", options: ["Designing flyers and cards", "Banking", "Phone calls", "Weather"], answer: 0, why: "Canva is a design tool with a free version." },
      { q: "Where should you try first when picking a tool?", options: ["The most expensive plan", "A paid course", "A pop-up ad", "The free version"], answer: 3, why: "Free versions are enough for most beginner tasks." },
      { q: "How do you speak a question to most AI apps?", options: ["Shake the phone", "Tap the microphone button", "Turn the phone off", "Open the camera"], answer: 1, why: "The microphone button lets the app listen." },
      { q: "When using voice typing, it helps to:", options: ["Speak clearly and a little slower", "Whisper", "Talk very fast", "Cover the microphone"], answer: 0, why: "Clear, slower speech is heard more accurately." },
      { q: "Voice typing wrote \"Friday\" as \"fry day\". You should:", options: ["Send it anyway", "Delete the app", "Fix it before sending", "Start over on a new phone"], answer: 2, why: "Always read and fix what voice typing heard." },
      { q: "To translate a printed school notice, you can:", options: ["Use a design tool", "Use a translation app's camera option", "Use the calculator", "Wait for someone to call"], answer: 1, why: "The camera option reads and translates printed words." },
      { q: "In a translation app you first choose:", options: ["A password", "A font", "A color", "The language on the paper and the language you want"], answer: 3, why: "The app needs to know both languages." },
      { q: "For a legal paper in a language you do not read well, the safest help is:", options: ["A trained interpreter", "Guessing", "A meme", "Skipping it"], answer: 0, why: "Important papers need a trained person, not only a machine." },
      { q: "Which is a good request for a short message?", options: ["\"message\"", "\"Write a polite two-sentence note to my landlord asking when the heater will be fixed.\"", "\"write\"", "\"stuff for landlord\""], answer: 1, why: "It says who, what, tone and length." },
      { q: "After an AI writes your message, you should:", options: ["Send it without reading", "Add your bank details", "Edit it to sound like you and check the facts", "Post it publicly"], answer: 2, why: "You make it yours and check names, dates and places." },
      { q: "Tone means:", options: ["How a message sounds, like friendly or firm", "The message length", "The font size", "The phone volume"], answer: 0, why: "Tone is how the message feels to the reader." },
      { q: "What does Canva ask you to make before you can design?", options: ["A payment", "A phone call", "A free account", "A printed form"], answer: 2, why: "Canva uses a free account to save your designs." },
      { q: "Which flyer is easiest to read?", options: ["A full page of tiny text", "A title, three short lines and one picture", "Ten pictures and no words", "Only a phone number"], answer: 1, why: "Short and clear is best for a flyer." },
      { q: "To get a copy of your flyer to print, you:", options: ["Take a photo of the screen", "Close the browser", "Email Canva", "Download it"], answer: 3, why: "Downloading saves a copy you can print." },
      { q: "In the combined project, which tool writes the words?", options: ["The chat assistant", "The translation app", "The printer", "The camera"], answer: 0, why: "The chat assistant writes the title and details." },
      { q: "Why make a second copy of the flyer in another language?", options: ["It looks nicer", "So more neighbors can read it", "Canva requires it", "To use more paper"], answer: 1, why: "A second language reaches more of your community." },
      { q: "Before sharing the finished flyer, you should check:", options: ["The weather", "Your phone battery", "That every date and place is right", "The color of the printer"], answer: 2, why: "Wrong details on a flyer send people to the wrong place." },
      { q: "In the final task, the last tool you use is:", options: ["A calculator", "A music app", "A map", "A translation tool for a second-language copy"], answer: 3, why: "The final step makes the flyer in a second language." }
    ]
  }
};
