"use strict";

// Koach Learn course: Seniors and Technology -> "AI for Seniors: Using AI Assistants". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "seniors-ai-for-seniors",
  category: "Seniors and Technology",
  name: "AI for Seniors: Using AI Assistants",
  skills: "Opening a free AI assistant, Typing or speaking a question, Asking for simpler answers, Checking what it says, Keeping private details safe",
  outcome: "open a free AI assistant on your phone, tablet or computer, ask it a clear question by typing or speaking, ask it to explain more simply, and check the answer before you act on it.",
  about: [
    "This course is for older adults who have heard about AI assistants such as ChatGPT, Microsoft Copilot or Google Gemini and want to try one, slowly and safely. You do not need any experience.",
    "You will open an assistant, ask it real questions about things in your life, such as a recipe, a letter from the doctor's office or a birthday message for a grandchild, and learn to make its answers clearer.",
    "Each lesson takes about five minutes. Read the lesson, look at the slides, then do the \"Try it now\" task at your own pace. A short knowledge check closes each chapter, and a 20-question quiz closes the course. You can repeat any lesson as often as you like."
  ],
  finalTask: "Use an AI assistant to plan a simple family meal: ask for an easy recipe for four people, ask it to put the steps in short numbered lines, ask one follow-up question, and check one fact (such as a cooking temperature) on a trusted website or with a person you trust.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Older adults, often retired, who want to use the new AI assistants for everyday help: cards and letters to family, hobbies, explaining things and making lists. Some live alone; many have grandchildren who use these tools.",
    startingPoint: "Can make calls and send texts, and many use email or a tablet. Most have not used an AI assistant and some feel unsure about apps, small text or typing.",
    gap: "AI assistants can save time and help seniors stay connected and independent, but seniors are also targeted by scams and can be misled by wrong answers about health or money. They need to open an assistant, ask clearly, make answers easier to read, check facts and keep private information safe.",
    constraints: [
      "Reading level: plain words, short sentences and large, simple steps",
      "Devices: a phone, tablet or computer; small screens and small text can be hard to read",
      "Time: about 5 minutes per lesson at a relaxed pace, with time to practice",
      "Health, medicine and money answers must be checked with a doctor, pharmacist or official source",
      "High scam risk: no Social Security, Medicare, bank numbers or passwords in any prompt"
    ],
    prerequisites: "None. Learners new to touchscreens can ask a family member or library helper to sit with them the first time."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of everyday tasks", action: "identify which tasks an AI assistant can help with and which need a doctor, a bank or another person", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Using your phone, tablet or computer", action: "open a free AI assistant from its official app store or website and find the message box or microphone", standard: "without help" },
    { id: "O3", condition: "Given a real need from your own life", action: "write or say a prompt that gives what you need, your situation and how you want the answer", standard: "so the first answer is useful" },
    { id: "O4", condition: "Given an answer that is too long or hard to read", action: "ask follow-up requests, one at a time, to make it simpler or shorter", standard: "until it is easy for you to read and use" },
    { id: "O5", condition: "Given an AI answer about health, money, a phone number or a date", action: "check the fact with an official website, your doctor or pharmacist, or a person you trust", standard: "before you act on it" },
    { id: "O6", condition: "When you write a prompt or get an urgent call or message", action: "keep private information out and spot the warning signs of a scam", standard: "sharing no private numbers, passwords or codes" }
  ],
  chapters: [
    {
      name: "Chapter 1: Meeting your AI assistant",
      lessons: [
        {
          objectives: ["O1"],
          title: "What an AI assistant is",
          minutes: 4,
          goal: "Say in your own words what an AI assistant can and cannot do for you.",
          text: [
            "An AI assistant is a computer program you can talk to or type to in everyday words, as if you were writing a note to a helpful neighbor. You ask a question, and a few seconds later it writes an answer.",
            "Well-known free assistants include ChatGPT, Microsoft Copilot and Google Gemini. They are good at explaining things simply, writing a first draft of a card or letter, giving ideas for a hobby, and making lists.",
            "An assistant is not a person, and it is not your doctor, lawyer or bank. It does not know you, and it can be wrong even when it sounds very sure. You are in charge: you decide what to ask and what to believe."
          ],
          words: [["AI", "short for artificial intelligence: computer programs that can do tasks like writing or answering questions."], ["AI assistant", "an AI program you chat with by typing or speaking."]],
          slides: [
            { title: "An AI assistant is...", bullets: ["A computer program you chat with", "You ask in everyday words", "It writes an answer in seconds"] },
            { title: "It can help you", bullets: ["Explain a hard word or letter simply", "Draft a birthday card or thank-you note", "Give ideas for recipes, hobbies and trips"] },
            { title: "It is NOT", bullets: ["Your doctor, lawyer or bank", "Always right, even when it sounds sure", "In charge: you are"] }
          ],
          tryIt: "On a piece of paper, write three things an AI assistant could help you with this month, for example a card for a grandchild, a question about a garden plant, or a recipe.",
          youCanNow: "say what an AI assistant is, name three ways it could help you, and explain why you still check what it says.",
          quickCheck: [
            { objective: "O1", q: "Which task is an AI assistant good at?", options: ["Writing a first draft of a birthday card", "Giving you your blood test results", "Moving money from your bank", "Going to the doctor for you"], answer: 0, why: "Assistants are good at drafts, ideas and lists; they are not your doctor or bank." },
            { objective: "O1", q: "An AI assistant sounds very sure about a rule for your benefits. What do you do?", options: ["Trust it because it sounds sure", "Remember that it can be wrong, and check with the office", "Tell your friends right away", "Ask it to promise it is right"], answer: 1, why: "Assistants can be wrong even when they sound sure, and you decide what to believe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Opening an assistant on your phone, tablet or computer",
          minutes: 6,
          goal: "Open a free AI assistant and find the box where you type or speak.",
          text: [
            "You can use an assistant on a smartphone, a tablet or a computer. Choose the device you feel most comfortable with. A grandchild, friend or library helper can sit with you the first time.",
            "On a phone or tablet: open the app store (the Play Store on Android, the App Store on iPhone and iPad). Tap the search box, type the assistant's name, and install the app made by the real company: OpenAI for ChatGPT, Microsoft for Copilot, Google for Gemini.",
            "On a computer: open your web browser and type the address carefully, for example chatgpt.com, copilot.microsoft.com or gemini.google.com. Some let you start without an account; others ask you to sign in.",
            "Look for the message box, usually near the bottom of the screen. It often says \"Ask anything\" or \"Message\". Many apps also show a small microphone you can tap to speak instead of typing."
          ],
          steps: ["Pick your phone, tablet or computer.", "Phone or tablet: install the official app from the app store. Computer: type the web address in the browser.", "Find the message box near the bottom of the screen.", "Find the microphone button if you would rather speak."],
          words: [["App store", "the official place on a phone or tablet to get apps safely."], ["Web browser", "the program you use to visit websites, such as Chrome, Edge or Safari."], ["Microphone button", "a small picture of a microphone you tap to speak instead of type."]],
          slides: [
            { title: "Use what you are comfortable with", bullets: ["Smartphone, tablet or computer", "Ask a family member or librarian to sit with you"] },
            { title: "On a phone or tablet", bullets: ["Open the official app store", "Search for the assistant's name", "Install the app from the real company"] },
            { title: "On a computer", bullets: ["Open the web browser", "Type chatgpt.com, copilot.microsoft.com or gemini.google.com", "Type the address carefully"] },
            { title: "Find where to talk", bullets: ["Message box near the bottom", "It may say \"Ask anything\"", "Microphone button lets you speak"] }
          ],
          tryIt: "Open one free assistant. Find the message box and type, or say: Hello, I am new to this. Please answer in short, simple sentences. Read its reply.",
          youCanNow: "open a free AI assistant and find where to type or speak your question.",
          quickCheck: [
            { objective: "O2", q: "Who makes the real Microsoft Copilot app?", options: ["Any company with a similar name", "Google", "Microsoft", "OpenAI"], answer: 2, why: "Install the app made by the real company: Microsoft for Copilot." },
            { objective: "O2", q: "You find typing hard on your phone. What do you look for in the assistant app?", options: ["The battery icon", "The camera button", "The settings gear", "The small microphone you can tap to speak"], answer: 3, why: "Many apps show a microphone so you can speak instead of typing." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Asking a clear question",
          minutes: 5,
          goal: "Write or say a question that gets a useful answer the first time.",
          text: [
            "What you type or say to an assistant is called a prompt. The clearer the prompt, the better the answer.",
            "A good prompt has three parts: what you need, a little about your situation, and how you want the answer. For example: \"My granddaughter turns 8 on Saturday and loves horses. Write a short birthday message from Grandma. Use simple words.\"",
            "A prompt that is too short, like \"birthday\", makes the assistant guess, and you get a general answer. It is fine to write a few sentences. Take your time; the assistant waits for you."
          ],
          steps: ["Say what you need.", "Add a little about your situation, with no private details.", "Say how you want the answer: short, simple words, large steps, or a list."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."]],
          slides: [
            { title: "A prompt is your question", bullets: ["Clear prompt = better answer", "Too short = general answer"] },
            { title: "Three parts of a good prompt", bullets: ["1. What you need", "2. A little about your situation", "3. How you want the answer"] },
            { title: "An example", bullets: ["\"My granddaughter turns 8 and loves horses.", "Write a short birthday message from Grandma.", "Use simple words.\""] }
          ],
          tryIt: "Pick one item from your list in Lesson 1. Write a prompt with all three parts, send it, and read the answer slowly.",
          youCanNow: "ask an AI assistant a clear question with what you need, your situation and how you want the answer.",
          quickCheck: [
            { objective: "O3", q: "What is a prompt?", options: ["A reminder on your calendar", "What you type or say to the assistant", "The answer the assistant gives", "A password"], answer: 1, why: "A prompt is your request to the assistant, typed or spoken." },
            { objective: "O3", q: "You want a thank-you note for your neighbor who fixed your fence. Which prompt is best?", options: ["\"note\"", "\"thanks\"", "\"Write anything.\"", "\"My neighbor fixed my fence. Write a short, warm thank-you note in simple words.\""], answer: 3, why: "It says what you need, your situation and how you want the answer." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Meeting your AI assistant",
        questions: [
          { objective: "O1", q: "What is an AI assistant?", options: ["A person at a call center", "A type of television", "A computer program you chat with in everyday words", "A government office"], answer: 2, why: "An AI assistant is a program you type or speak to, and it writes answers back." },
          { objective: "O1", q: "The assistant sounds very sure about a medicine question. What should you do?", options: ["Check with your doctor or pharmacist", "Follow it right away", "Stop taking all medicine", "Tell your neighbor to follow it"], answer: 0, why: "AI can be wrong even when it sounds sure; health questions go to your doctor or pharmacist." },
          { objective: "O2", q: "Where is the safe place to get an AI app on a phone or tablet?", options: ["A link in a text from a stranger", "A pop-up ad", "Any website", "The official app store, from the real company"], answer: 3, why: "The official app store and the real company's app are the safe choice." },
          { objective: "O2", q: "You would rather speak than type. What do you look for?", options: ["The battery icon", "The microphone button", "The camera", "The volume button"], answer: 1, why: "The microphone button lets you speak your question." },
          { objective: "O3", q: "Which prompt is clearest?", options: ["\"birthday\"", "\"My granddaughter turns 8 and loves horses. Write a short birthday message from Grandma in simple words.\"", "\"help\"", "\"card\""], answer: 1, why: "It says what you need, your situation and how you want the answer." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting good answers safely",
      lessons: [
        {
          objectives: ["O4"],
          title: "Asking for a simpler or shorter answer",
          minutes: 4,
          goal: "Use follow-up questions to make an answer easier to read and use.",
          text: [
            "You never have to accept the first answer. The assistant remembers what you said earlier in the same chat, so you can ask it to change its answer.",
            "Helpful follow-ups: \"Please use simpler words.\" \"Make it shorter.\" \"Put it in numbered steps.\" \"Explain step 3 again.\" \"Give me an example.\" \"Make it sound warmer.\"",
            "If you have trouble reading small text, you can also make the text bigger on your device. Ask a family member to show you the text size setting, or ask the assistant: \"How do I make the text bigger on my iPhone?\""
          ],
          steps: ["Read the first answer slowly.", "Decide what would make it better.", "Ask for that one change.", "Repeat until the answer works for you."],
          words: [["Follow-up", "a second question that builds on the answer you got."]],
          slides: [
            { title: "The first answer is only a draft", bullets: ["You can ask for changes", "It remembers the same chat"] },
            { title: "Follow-ups that work", bullets: ["\"Please use simpler words.\"", "\"Make it shorter.\"", "\"Put it in numbered steps.\"", "\"Explain step 3 again.\""] },
            { title: "Hard to read?", bullets: ["Make the text bigger on your device", "Ask the assistant how to do it", "Ask a family member to show you"] }
          ],
          tryIt: "Take the answer from Lesson 3. Ask for two changes, one at a time, such as \"make it shorter\" and then \"make it sound warmer\". Compare the first and last answers.",
          youCanNow: "improve an AI answer by asking clear follow-up questions.",
          quickCheck: [
            { objective: "O4", q: "Why can you ask the assistant to change its answer?", options: ["It remembers what you said earlier in the same chat", "It has to start over each time", "It reads your mind", "It only answers once"], answer: 0, why: "In the same chat the assistant remembers earlier messages, so you can ask for changes." },
            { objective: "O4", q: "A recipe answer is one long paragraph. What do you send next?", options: ["\"Wrong.\"", "Nothing; close the app", "\"Put it in numbered steps.\"", "\"Make it longer.\""], answer: 2, why: "A clear follow-up that names the change makes the answer easier to use." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Checking an answer before you act on it",
          minutes: 5,
          goal: "Check an AI answer with a trusted source before you rely on it.",
          text: [
            "AI assistants sometimes make things up: a wrong phone number, a store hour, a medicine fact or a rule that has changed. This is called a hallucination.",
            "Always check anything about your health, medicines, money, benefits such as Social Security or Medicare, dates, addresses and phone numbers. Check with the official website, the office itself, your doctor or pharmacist, or a person you trust.",
            "A good habit is to ask: \"Where can I check this?\" Then find that official page yourself. Official United States government websites end in .gov."
          ],
          steps: ["Find the facts in the answer: numbers, dates, names, rules.", "Look them up on the official website or call the office.", "If they do not match, trust the official source.", "For health and money, also ask your doctor, pharmacist or a person you trust."],
          words: [["Hallucination", "when an AI writes something that sounds true but is made up."], [".gov", "the ending of official United States government website addresses."]],
          slides: [
            { title: "AI can make things up", bullets: ["Wrong phone numbers or hours", "Old rules", "Wrong medicine facts"] },
            { title: "Always check", bullets: ["Health and medicines", "Money and benefits", "Dates, addresses and phone numbers"] },
            { title: "How to check", bullets: ["Official website, often ending in .gov", "Call the office", "Ask your doctor, pharmacist or someone you trust"] }
          ],
          tryIt: "Ask an assistant for the opening hours of your local library. Then check the library's own website or call it. Did the answer match?",
          youCanNow: "spot facts that need checking and check them with a trusted source.",
          quickCheck: [
            { objective: "O5", q: "What is a hallucination in AI?", options: ["When the screen goes dark", "When the app is slow", "When the assistant speaks out loud", "When the assistant makes up something that sounds true"], answer: 3, why: "AI can make up a wrong phone number, store hour or rule that sounds real." },
            { objective: "O5", q: "The assistant tells you how much of a medicine to take. What do you do?", options: ["Take that amount right away", "Check with your doctor or pharmacist first", "Ask a different AI", "Share it with friends"], answer: 1, why: "Health and medicine answers must be checked with your doctor or pharmacist." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Keeping your private information safe",
          minutes: 5,
          goal: "Use an AI assistant without sharing private information.",
          text: [
            "Never type private information into an AI assistant: your Social Security number, Medicare number, bank or card numbers, passwords, or full home address. You can get the help you need without them. Write \"[my number]\" instead.",
            "Scammers use AI too. They can write convincing messages and can even copy the voice of a grandchild on the phone. Be careful with any call or message that rushes you, asks for money or gift cards, or asks for a code sent to your phone.",
            "If something feels wrong, stop. Hang up, and call the person back on a number you already know is real."
          ],
          steps: ["Before you send a prompt, read it for private information.", "Replace it with a placeholder like \"[my number]\".", "Treat rushing, gift cards and code requests as warning signs.", "Call back on a number you already know."],
          words: [["Private information", "details that could let someone pretend to be you or take your money."], ["Placeholder", "a stand-in word like \"[my number]\" used instead of the real detail."]],
          slides: [
            { title: "Never type into AI", bullets: ["Social Security or Medicare numbers", "Bank or card numbers", "Passwords"] },
            { title: "Use a placeholder", bullets: ["Write \"[my number]\" instead", "You still get the help you need"] },
            { title: "Scam warning signs", bullets: ["They rush you", "They want money or gift cards", "They ask for a code sent to your phone"] },
            { title: "When in doubt", bullets: ["Stop", "Hang up", "Call back on a number you know is real"] }
          ],
          tryIt: "Final task: ask an assistant for an easy recipe for four people, ask it to put the steps in short numbered lines, ask one follow-up question, and check one fact, such as a cooking temperature, on a trusted website or with someone you trust.",
          youCanNow: "use an AI assistant for a real task, check its answer, and keep your private information safe.",
          quickCheck: [
            { objective: "O6", q: "Which of these should you never type into an AI assistant?", options: ["Your Medicare number", "Your favorite recipe", "The name of a bird you saw", "A question about your garden"], answer: 0, why: "Medicare, Social Security and bank numbers are private; use a placeholder instead." },
            { objective: "O6", q: "A text says your account will close today unless you send the code you just got. What do you do?", options: ["Send the code quickly", "Reply with your bank number", "Do not share the code; call the company on a number you know", "Forward it to your grandchildren"], answer: 2, why: "Rushing you and asking for a code are warning signs of a scam." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting good answers safely",
        questions: [
          { objective: "O4", q: "The answer uses words you do not understand. What do you type?", options: ["\"Make it longer.\"", "Your Medicare number", "Nothing; close the app", "\"Please use simpler words.\""], answer: 3, why: "A follow-up asks the assistant to change its answer." },
          { objective: "O5", q: "Which of these should you ALWAYS check with a trusted source?", options: ["How much medicine to take", "A joke", "A birthday poem", "A list of flower names"], answer: 0, why: "Health and medicine facts must be checked with your doctor or pharmacist." },
          { objective: "O5", q: "What is a \"hallucination\" in AI?", options: ["The screen is too bright", "A kind of app", "The AI wrote something that sounds true but is made up", "A slow internet connection"], answer: 2, why: "AI can make up facts that sound real." },
          { objective: "O6", q: "What should you write instead of your Medicare number in a prompt?", options: ["The real number", "Half the number", "Your bank number", "A placeholder like \"[my number]\""], answer: 3, why: "A placeholder gets you help without sharing private information." },
          { objective: "O6", q: "A caller sounds like your grandson and asks for gift cards right away. What do you do?", options: ["Buy them quickly", "Give them the code on your phone", "Hang up and call your grandson on a number you know", "Send your bank details"], answer: 2, why: "Scammers can copy voices; rushing and gift cards are warning signs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Seniors: Using AI Assistants",
    questions: [
      { objective: "O1", q: "An AI assistant is best described as:", options: ["A person in a call center", "A computer program you chat with", "A phone company", "A store"], answer: 1, why: "It is a program you type or speak to." },
      { objective: "O1", q: "Which is a good use of an AI assistant?", options: ["Drafting a thank-you note to a friend", "Deciding your medicine dose", "Signing papers for you", "Knowing your bank balance"], answer: 0, why: "Drafting notes and cards is one of its strengths." },
      { objective: "O1", q: "Who is in charge when you use an AI assistant?", options: ["You", "The phone company", "The AI", "Nobody"], answer: 0, why: "You decide what to ask and what to believe." },
      { objective: "O2", q: "Which is a well-known free AI assistant?", options: ["A calculator", "Google Gemini", "A printer", "A remote control"], answer: 1, why: "Gemini, ChatGPT and Copilot are well-known free assistants." },
      { objective: "O2", q: "The safe place to get an AI app on a tablet is:", options: ["A link in an email from a stranger", "A pop-up ad", "The official app store", "Any website"], answer: 2, why: "Install only from the official app store." },
      { objective: "O2", q: "Which address opens ChatGPT on a computer?", options: ["chatgpt.gift", "chatgpt-prize.net", "free-chatgpt.win", "chatgpt.com"], answer: 3, why: "chatgpt.com is the official address." },
      { objective: "O2", q: "Where do you usually type your question?", options: ["On the battery icon", "On the clock", "In the message box near the bottom", "In the camera"], answer: 2, why: "The message box often says \"Ask anything\" or \"Message\"." },
      { objective: "O2", q: "You would like to speak your question. You tap:", options: ["The microphone button", "The camera", "The power button", "The volume button"], answer: 0, why: "The microphone button lets you speak instead of type." },
      { objective: "O3", q: "What is a prompt?", options: ["A reminder alarm", "A website ending", "A phone charger", "What you type or say to the assistant"], answer: 3, why: "A prompt is your request to the assistant." },
      { objective: "O3", q: "A good prompt includes:", options: ["One word only", "What you need, your situation, and how you want the answer", "Your password", "Your Social Security number"], answer: 1, why: "Those three parts get a useful answer." },
      { objective: "O3", q: "Which prompt will likely get the most useful answer?", options: ["\"garden\"", "\"My tomato leaves have yellow spots. What could cause it? Answer in short, simple steps.\"", "\"plants\"", "\"help\""], answer: 1, why: "It gives the need, the situation and the format." },
      { objective: "O4", q: "The first answer is too long. You can:", options: ["Turn the device off", "Only accept it", "Pay to fix it", "Ask: \"Make it shorter.\""], answer: 3, why: "Follow-ups change the answer." },
      { objective: "O4", q: "Which is a helpful follow-up?", options: ["\"Put it in numbered steps.\"", "\"Here is my card number.\"", "\"Delete my phone.\"", "\"Send money.\""], answer: 0, why: "It asks for a clear change to the answer." },
      { objective: "O4", q: "The text on screen is too small. What can you do?", options: ["Give up", "Buy a new phone today", "Make the text bigger in your device settings or ask someone to show you", "Type your password"], answer: 2, why: "Devices have a text size setting; a family member or the assistant can show you how." },
      { objective: "O5", q: "The assistant gives you a clinic's phone number. You should:", options: ["Give it your Medicare number", "Call it without checking", "Post it online", "Check it on the clinic's own website or a letter from the clinic"], answer: 3, why: "AI can give wrong numbers; check the official source." },
      { objective: "O5", q: "Official United States government websites end in:", options: [".win", ".gift", ".gov", ".xyz"], answer: 2, why: ".gov is used by US government sites." },
      { objective: "O5", q: "For a medicine question, the best person to confirm the answer is:", options: ["A stranger online", "Your doctor or pharmacist", "The AI itself", "A pop-up ad"], answer: 1, why: "Health facts must be checked with a professional." },
      { objective: "O6", q: "Which should you NEVER type into an AI assistant?", options: ["Your bank card number", "\"Give me an example.\"", "\"Use simpler words.\"", "\"Make it warmer.\""], answer: 0, why: "Bank and card numbers are private information." },
      { objective: "O6", q: "Someone asks for the code that was just texted to your phone. You should:", options: ["Never share it", "Post it", "Text it to them", "Read it to them"], answer: 0, why: "That code protects your account; real offices do not ask for it." },
      { objective: "O6", q: "If a call feels wrong, the safest step is to:", options: ["Keep talking", "Hang up and call back on a number you know is real", "Give them your address", "Send a small payment"], answer: 1, why: "Calling back on a known number stops most scams." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      9,
      11,
      14,
      16,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Opened the assistant",
        objective: "O2",
        notYet: "Needed someone else to open the assistant, or used an unofficial app or site.",
        meets: "Opened an official assistant and found the message box or microphone.",
        exceeds: "Can show a friend or family member how to open it."
      },
      {
        name: "Clear request",
        objective: "O3",
        notYet: "The prompt is vague, for example \"recipe\".",
        meets: "Asked for an easy recipe for four people, with the situation and how the answer should look.",
        exceeds: "Added a detail such as a food someone cannot eat, and the first answer was close to ready."
      },
      {
        name: "Made it easier",
        objective: "O4",
        notYet: "Used the first answer as it was, even if it was hard to read.",
        meets: "Asked for short numbered steps and one more follow-up question.",
        exceeds: "Asked for changes one at a time and can say what each one fixed."
      },
      {
        name: "Fact checked",
        objective: "O5",
        notYet: "Trusted a fact such as a cooking temperature without checking.",
        meets: "Checked one fact on a trusted website or with a person they trust.",
        exceeds: "Can say where they checked it and whether it matched."
      },
      {
        name: "Private information kept out",
        objective: "O6",
        notYet: "The prompt includes a private number, address or password.",
        meets: "No private information in any prompt.",
        exceeds: "Can name two scam warning signs."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using an AI assistant for a card, letter, recipe or question within 30 days (follow-up survey)",
      "Learners who report spotting and avoiding a scam call or message",
      "Learners who start another Seniors and Technology course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone, tablet or computer with internet",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini",
      "Reading glasses if needed, and paper and pen for notes",
      "About 60 minutes in total, in short, relaxed sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Go slowly, and pair learners with a helper or grandchild for the first time they open the app.",
      "Show how to make text bigger on each learner's device before starting.",
      "Never ask learners to type real private details; use placeholders like [my number].",
      "Remind learners that health, medicine and money answers must be checked with a doctor, pharmacist or official office.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
