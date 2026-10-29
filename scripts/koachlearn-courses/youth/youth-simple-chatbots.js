"use strict";

// Koach Learn course: Youth -> "Building Simple AI Chatbots" (bonus). Skill-building: by the end the student can build a simple keyword chatbot in Python and an instruction-based helper bot in a free AI assistant for a school club, then test and improve both.
// Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "youth-simple-chatbots",
  category: "Youth",
  name: "Building Simple AI Chatbots",
  skills: "Planning what a chatbot should do, Building a keyword chatbot in Python, Writing bot instructions for an AI assistant, Testing with real questions, Making a bot safe and honest",
  outcome: "build a simple question-and-answer chatbot for a school club: a keyword bot in Python that answers at least five common questions, and a set of instructions that turns a free AI assistant into a helper for the club, both tested with real questions and kept safe and honest.",
  about: [
    "This course is for teens who want to know how chatbots work by building one. You do not need coding experience; you will copy small patterns and change them.",
    "You will plan a chatbot for something real, like your robotics club, band or sports team. First you will build a simple keyword bot in Python in Google Colab, a free notebook that runs in a web browser. Then you will write instructions that make a free AI assistant like ChatGPT, Microsoft Copilot or Google Gemini act as a club helper, and compare the two. Finally you will test both and make them safe and honest.",
    "Google Colab and AI assistants need accounts and have minimum ages. Read each tool's terms, follow your school's AI rules, and involve a parent or guardian when you sign up. Each lesson ends with a \"Try it now\" task, a knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Build a chatbot for a school club or team. Part 1: a Python keyword bot in Google Colab that greets the user, answers at least five common questions (like meeting time, place and how to join), says \"I don't know, please ask the club advisor\" for anything else, and stops when the user types bye. Part 2: an instruction card that makes a free AI assistant act as the club's helper. Test both with 10 real questions, write down what each got right and wrong, and make one improvement to each.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens who want to understand how chatbots work by building one for a real group such as a club, band or sports team, with or without coding experience.",
    startingPoint: "Have used chatbots on websites, games or AI assistants. Most have never written code, planned a bot's job, or tested a bot and fixed what failed.",
    gap: "Chatbots are everywhere, but most teens only use them. Building a simple keyword bot and an AI helper shows how both work, where each fails, and why bots must be honest and protect privacy. These are real skills for coding, tech careers and serving their own groups.",
    constraints: [
      "Age limits: Google Colab and AI assistants need accounts and have minimum ages; a parent or guardian is involved in sign-ups",
      "School AI and technology rules; the club advisor approves sharing the bot",
      "Beginners: small code patterns to copy and change; about five minutes per lesson",
      "Devices: a computer with a web browser; nothing to install",
      "Privacy: bots never ask for or store passwords, phone numbers, addresses or ID numbers"
    ],
    prerequisites: "None. \"Intro to Coding with AI\" helps but is not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given examples of chatbots", action: "explain how a keyword chatbot and an AI chatbot work, with a strength and a limit of each", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "For a real club, team or group", action: "write a bot plan with who it helps, five or more checked answers, a fallback answer and what it must never do", standard: "with every answer checked with the club advisor" },
    { id: "O3", condition: "Using Google Colab", action: "build a Python keyword chatbot with a loop, keyword answers, a fallback and a goodbye", standard: "so it runs and answers at least five questions" },
    { id: "O4", condition: "Using a free AI assistant", action: "write an instruction card with the role, checked facts, tone and limits that makes the assistant act as a club helper", standard: "so it sends unknown questions to the advisor and asks for no personal information" },
    { id: "O5", condition: "Given 10 realistic test questions", action: "test both bots, mark each answer right, wrong or made up, and fix what fails", standard: "making at least one fix to each bot and testing again" },
    { id: "O6", condition: "Before you share your bot", action: "add a greeting that says it is a bot, privacy and safety limits, and get your advisor's OK", standard: "with serious or unknown questions sent to a trusted adult" }
  ],
  chapters: [
    {
      name: "Chapter 1: How chatbots work, and your first bot",
      lessons: [
        {
          objectives: ["O1"],
          title: "What a chatbot is, and two ways to build one",
          minutes: 4,
          goal: "Explain the difference between a keyword chatbot and an AI chatbot.",
          text: [
            "A chatbot is a program you talk to by typing or speaking. You see them on websites (\"How can I help?\"), in games and in apps.",
            "There are two main kinds. A keyword chatbot follows rules a person wrote: if the message contains \"time\", answer with the meeting time. It is simple and predictable, but it only knows what you taught it. An AI chatbot uses a large language model, which learned from huge amounts of text. It can answer almost anything in natural words, but it can also be wrong or make things up.",
            "In this course you will build both for a real use, like answering new members' questions for your club, so you can see the strengths and limits of each."
          ],
          words: [["Chatbot", "a program you talk to by typing or speaking."], ["Keyword", "a word the bot looks for to decide how to answer."], ["Large language model", "the kind of AI behind assistants like ChatGPT; it learned patterns from huge amounts of text."]],
          slides: [
            { title: "A chatbot is...", bullets: ["A program you talk to", "On websites, games and apps"] },
            { title: "Keyword chatbot", bullets: ["Follows rules a person wrote", "Simple and predictable", "Only knows what you taught it"] },
            { title: "AI chatbot", bullets: ["Uses a large language model", "Answers in natural words", "Can be wrong or make things up"] }
          ],
          tryIt: "Pick a club, team or group you belong to. Write down five questions new members always ask, like when you meet, where, and how to join.",
          youCanNow: "explain how keyword chatbots and AI chatbots differ, and choose a real use for a bot.",
          quickCheck: [
            { objective: "O1", q: "What is a limit of a keyword chatbot?", options: ["It is unpredictable", "It only knows what you taught it", "It makes up facts often", "It needs a large language model"], answer: 1, why: "A keyword bot follows rules a person wrote, so it only knows what it was taught." },
            { objective: "O1", q: "You need a bot that always gives the exact same, checked meeting time. Which kind is safer?", options: ["An AI chatbot with no instructions", "Neither kind can do this", "A random website bot", "A keyword chatbot with the checked answer"], answer: 3, why: "Keyword bots are simple and predictable; AI bots can be wrong or make things up." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Planning your bot's job",
          minutes: 5,
          goal: "Write a simple plan: who the bot helps, what it answers and what it should never do.",
          text: [
            "Good bots have a small, clear job. Write a bot plan with four parts: who it helps (for example, new members of the chess club), the questions it answers, the answers (checked with your advisor), and what it should say when it does not know.",
            "Also decide what the bot must never do: never ask for passwords, phone numbers or home addresses, never pretend to be a real person, and never give advice about health, money or law. When in doubt, it sends people to a real adult, such as the club advisor.",
            "An AI assistant can help you brainstorm more questions: \"New members of a high school chess club might ask what? List 10.\" Then check the answers yourself."
          ],
          steps: ["Write who the bot helps.", "List 5 to 10 questions it will answer.", "Write a short, checked answer for each.", "Write the \"I don't know\" answer that sends people to a real adult.", "List what the bot must never do."],
          words: [["Bot plan", "a short description of what a bot does and does not do."], ["Fallback answer", "what a bot says when it does not know."]],
          slides: [
            { title: "A small, clear job", bullets: ["Who it helps", "Questions and checked answers", "What it says when it does not know"] },
            { title: "Never", bullets: ["Ask for passwords, phone numbers or addresses", "Pretend to be a real person", "Give health, money or legal advice"] },
            { title: "Brainstorm with AI", bullets: ["Ask for more likely questions", "Check every answer yourself"] }
          ],
          tryIt: "Write your bot plan: who it helps, your five questions with checked answers, your fallback answer, and three things it must never do. Ask an AI assistant for five more questions you might have missed.",
          youCanNow: "plan a chatbot's job, answers, fallback and safety rules.",
          quickCheck: [
            { objective: "O2", q: "What makes a good job for a bot?", options: ["A small, clear job, like answering new members' questions", "Answering every question in the world", "Giving health advice", "Pretending to be the club president"], answer: 0, why: "Good bots have a small, clear job." },
            { objective: "O2", q: "AI suggests an answer about club dues for your bot plan. What do you do?", options: ["Use it as is", "Leave dues out of the plan forever", "Check it with the club advisor before adding it", "Make up a different number"], answer: 2, why: "Bot answers must be checked with the advisor, not taken from AI." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Building a keyword chatbot in Python",
          minutes: 6,
          goal: "Build and run a keyword chatbot in Google Colab.",
          text: [
            "Open Google Colab at colab.research.google.com, sign in with an account you are allowed to use, and start a new notebook. The bot uses a loop that keeps asking for messages, and if statements that look for keywords.",
            "Here is the pattern, line by line: while True: starts a loop that repeats. Inside it, msg = input(\"You: \").lower() reads the message in lower case. if \"bye\" in msg: print(\"Bot: See you!\") then break stops the loop. elif \"time\" in msg: print(\"Bot: We meet Tuesdays at 3:30.\") answers one question. else: print(\"Bot: I don't know. Please ask the club advisor.\") is the fallback. Indent the lines inside the loop and inside each if.",
            "Add one elif for each question in your plan. If you get an error, read the last line and the line number, check for a missing colon, quote or indent, and if you are stuck, paste the code and error into an AI assistant and ask it to explain."
          ],
          steps: ["Open a new Colab notebook.", "Type while True: and indent the next lines.", "Read the message: msg = input(\"You: \").lower()", "Add if \"bye\" in msg: with a goodbye print and break.", "Add one elif per question, and an else fallback. Run it and chat with your bot."],
          words: [["Loop", "code that repeats; while True repeats until break."], ["elif", "short for else if: check another condition."], ["break", "stops a loop."], [".lower()", "changes text to lower case so \"TIME\" and \"time\" match."]],
          slides: [
            { title: "The pattern", bullets: ["while True: keeps the chat going", "msg = input(\"You: \").lower()", "if \"bye\" in msg: say goodbye, then break"] },
            { title: "Answers", bullets: ["elif \"time\" in msg: print the time", "One elif per question", "else: the fallback answer"] },
            { title: "If it breaks", bullets: ["Read the last line of the error", "Check colons, quotes and indents", "Ask AI to explain the error"] }
          ],
          tryIt: "Build your keyword bot in Colab with a goodbye, at least three answers from your plan, and a fallback. Chat with it and try one question it should not know.",
          youCanNow: "build and run a keyword chatbot in Python with answers, a fallback and a way to stop.",
          quickCheck: [
            { objective: "O3", q: "In the Python bot, what does the else line do?", options: ["Ends the program", "Gives the fallback answer when no keyword matches", "Reads the user's message", "Starts the loop"], answer: 1, why: "else catches anything the other checks did not match." },
            { objective: "O3", q: "Your bot answers \"time\" but not \"TIME\". What do you add?", options: [".lower() when reading the message", "Another break", "A second while True:", "Nothing; it cannot be fixed"], answer: 0, why: ".lower() turns the message into lower case so both spellings match." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: How chatbots work, and your first bot",
        questions: [
          { objective: "O1", q: "How does a keyword chatbot decide what to say?", options: ["It reads your mind", "It follows rules that look for words in your message", "It searches the whole internet", "It asks a teacher"], answer: 1, why: "Keyword bots follow rules a person wrote." },
          { objective: "O1", q: "Which is a weakness of an AI chatbot?", options: ["It can be wrong or make things up", "It can only say one sentence", "It cannot understand normal words", "It needs no electricity"], answer: 0, why: "Large language models can produce wrong answers that sound right." },
          { objective: "O2", q: "What is a fallback answer?", options: ["The first greeting", "A password", "What the bot says when it does not know", "The bot's name"], answer: 2, why: "A fallback handles questions the bot cannot answer." },
          { objective: "O2", q: "Which should your club bot NEVER ask for?", options: ["What the user wants to know", "Whether they want to join", "Their favorite chess opening", "Their home address"], answer: 3, why: "Bots should never collect private details." },
          { objective: "O3", q: "In the Python bot, what does break do?", options: ["Stops the loop so the chat ends", "Breaks the computer", "Adds a new answer", "Deletes the notebook"], answer: 0, why: "break ends the while loop." }
        ]
      }
    },
    {
      name: "Chapter 2: AI helper bots, testing and safety",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing instructions for an AI helper bot",
          minutes: 5,
          goal: "Write an instruction card that makes a free AI assistant act as your club's helper.",
          text: [
            "You can turn a general AI assistant into a helper for one job by starting a chat with clear instructions. Some tools also let you save instructions as a custom bot; menus and age rules vary, so check your tool. Pasting instructions at the start of a new chat works in most assistants.",
            "A good instruction card has: the bot's role (\"You are the helper for the Lincoln High chess club\"), the facts it may use (your checked answers), its tone (friendly, short answers), and its limits (\"If you do not know, say: please ask Ms. Rivera, the club advisor. Never ask for personal information.\").",
            "Tell it to use only the facts you gave it. This lowers the chance it makes up meeting times or rules."
          ],
          steps: ["Write the role: who the bot is and who it helps.", "Paste your checked facts and answers.", "Set the tone: friendly, short answers.", "Add limits: use only these facts; send unknowns to the advisor; never ask for personal information.", "Start a new chat, paste the card, then ask a test question."],
          words: [["Instruction card", "the written rules you give an AI assistant at the start of a chat."], ["Role", "who the bot should act as."], ["Tone", "how the bot sounds: friendly, formal, short."]],
          slides: [
            { title: "Turn an assistant into a helper", bullets: ["Paste instructions at the start of a chat", "Some tools save custom bots; check yours"] },
            { title: "The instruction card", bullets: ["Role", "Checked facts", "Tone", "Limits"] },
            { title: "Use only these facts", bullets: ["Lowers made-up answers", "Unknowns go to the advisor", "Never asks for personal info"] }
          ],
          tryIt: "Write an instruction card for your club helper bot. Start a new chat in a free AI assistant, paste it, and ask three questions from your plan and one it should not know.",
          youCanNow: "write clear instructions that turn a free AI assistant into a focused, limited helper bot.",
          quickCheck: [
            { objective: "O4", q: "What does the \"role\" line on an instruction card do?", options: ["Lists the test questions", "Sets the font", "Tells the AI who it is and who it helps", "Stores passwords"], answer: 2, why: "The role line, like \"You are the helper for the chess club\", sets the bot's job." },
            { objective: "O4", q: "Your AI helper answers questions about homework too. What do you add to the card?", options: ["More facts about homework", "A rule to use only the club facts and send other questions to the advisor", "A longer greeting", "Nothing; more answers is better"], answer: 1, why: "Limits keep the helper in its lane and lower the chance it makes things up." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Testing and improving your bots",
          minutes: 5,
          goal: "Test both bots with real questions and fix what fails.",
          text: [
            "Testing means trying your bot the way real people would. Write 10 test questions: the five from your plan, a few asked in different words (\"when do y'all meet?\"), one with a typo, and one it should not answer.",
            "Ask both bots each question and mark each answer right, wrong or made up. The keyword bot may miss questions asked in different words; fix that by adding more keywords. The AI helper may sound right but invent details; fix that by tightening its instructions.",
            "Ask a friend or club member to try your bot too. People always ask things you did not expect."
          ],
          steps: ["Write 10 test questions, including different wording and a typo.", "Ask both bots each question.", "Mark each answer right, wrong or made up.", "Keyword bot: add keywords. AI helper: tighten instructions.", "Have someone else test it."],
          words: [["Testing", "trying a program on purpose to find what does not work."], ["Test case", "one question or input you use to test a program."]],
          slides: [
            { title: "10 test questions", bullets: ["Your planned questions", "Different wording and a typo", "One it should not answer"] },
            { title: "Mark each answer", bullets: ["Right", "Wrong", "Made up"] },
            { title: "Fix and retest", bullets: ["Keyword bot: add keywords", "AI helper: tighten instructions", "Let a friend try it"] }
          ],
          tryIt: "Run your 10 test questions on both bots, mark each answer, and make one fix to each bot. Test again to see if the fixes worked.",
          youCanNow: "test chatbots with real questions, find what fails and improve them.",
          quickCheck: [
            { objective: "O5", q: "Which belongs in a good set of test questions?", options: ["Only questions copied word for word from your plan", "Only one question", "Questions you know will work", "The same question asked in different words"], answer: 3, why: "Real people ask in different words and make typos, so tests should too." },
            { objective: "O5", q: "The AI helper gave a confident but made-up meeting room. How do you mark it?", options: ["Right, because it sounded sure", "Made up, then tighten its instructions", "Skip it", "Right, if it was close"], answer: 1, why: "Mark invented details as made up and fix the instructions." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Making your bot safe and honest",
          minutes: 5,
          goal: "Add safety and honesty rules, then finish your club chatbot.",
          text: [
            "A bot should say it is a bot. People deserve to know they are not talking to a real person. Start with a greeting like \"Hi, I am the chess club bot. I answer basic questions. For anything else, ask Ms. Rivera.\"",
            "It should protect privacy: never ask for or store passwords, phone numbers, addresses or school ID numbers. It should stay in its lane: no health, money, legal or personal advice, and it should point to a trusted adult for anything serious.",
            "Before sharing a bot with your club, get your advisor's OK, follow your school's rules about AI and technology, and keep the answers up to date when meeting times change."
          ],
          steps: ["Add a greeting that says it is a bot and what it does.", "Check it never asks for private information.", "Make it send serious or unknown questions to a trusted adult.", "Get your advisor's OK before sharing it.", "Update the answers when facts change."],
          words: [["Transparency", "being open and honest, such as saying a bot is a bot."], ["Privacy", "keeping personal information safe."]],
          slides: [
            { title: "Say it is a bot", bullets: ["Clear greeting", "What it can and cannot do", "Who to ask for more"] },
            { title: "Protect privacy", bullets: ["No passwords, phone numbers or addresses", "No school ID numbers"] },
            { title: "Stay in its lane", bullets: ["No health, money or legal advice", "Serious questions go to a trusted adult", "Advisor's OK before sharing"] }
          ],
          tryIt: "Final task: finish your Python keyword bot (five answers, fallback, bye) and your AI helper instruction card. Add a greeting that says it is a bot, test both with 10 questions, write what each got right and wrong, and make one improvement to each.",
          youCanNow: "build, test and share a simple chatbot that is useful, safe and honest about being a bot.",
          quickCheck: [
            { objective: "O6", q: "Which of these should your bot never ask for?", options: ["Which question they have", "Whether they want the meeting time", "If they want to say bye", "Their school ID number"], answer: 3, why: "Bots should never ask for or store passwords, phone numbers, addresses or ID numbers." },
            { objective: "O6", q: "Your bot is ready. What do you do before sharing it with the club?", options: ["Get the advisor's OK and follow school rules", "Post it publicly right away", "Remove the greeting", "Let it ask for phone numbers to follow up"], answer: 0, why: "Get your advisor's OK and follow school rules before sharing." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: AI helper bots, testing and safety",
        questions: [
          { objective: "O4", q: "What belongs on an AI helper's instruction card?", options: ["Your password", "Role, checked facts, tone and limits", "A random story", "Nothing; just start chatting"], answer: 1, why: "Those four parts focus and limit the bot." },
          { objective: "O4", q: "Why tell the AI helper to use only the facts you gave it?", options: ["To make it slower", "To lower the chance it makes up details", "To make it longer", "It is required by law"], answer: 1, why: "Limits reduce made-up answers." },
          { objective: "O5", q: "Your keyword bot misses \"when do y'all meet?\" How do you fix it?", options: ["Delete the bot", "Remove the fallback", "Add more keywords like \"meet\"", "Blame the user"], answer: 2, why: "More keywords catch different wording." },
          { objective: "O6", q: "Why should a bot say it is a bot?", options: ["People deserve to know they are not talking to a person", "It sounds cooler", "It makes the code shorter", "It is never needed"], answer: 0, why: "Transparency builds trust." },
          { objective: "O6", q: "Before sharing your bot with the club, you should:", options: ["Add a request for phone numbers", "Skip testing", "Hide that it is a bot", "Get your advisor's OK and follow school rules"], answer: 3, why: "Adult approval and school rules come first." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building Simple AI Chatbots",
    questions: [
      { objective: "O1", q: "A chatbot is:", options: ["A program you talk to by typing or speaking", "A phone case", "A type of robot arm", "A website address"], answer: 0, why: "Chatbots are conversational programs." },
      { objective: "O1", q: "A strength of a keyword chatbot is that it is:", options: ["Able to answer anything", "Simple and predictable", "Always creative", "Connected to every website"], answer: 1, why: "It only says what you programmed." },
      { objective: "O1", q: "A large language model is:", options: ["A big keyboard", "A school subject", "The kind of AI behind assistants like ChatGPT", "A Python error"], answer: 2, why: "LLMs learned patterns from huge amounts of text." },
      { objective: "O2", q: "Which is the best job for a first chatbot?", options: ["Giving medical advice", "Handling bank accounts", "Answering everything about the world", "Answering new members' questions for your club"], answer: 3, why: "A small, clear job is best." },
      { objective: "O2", q: "Who should check the answers in your bot plan?", options: ["You, with the club advisor", "Nobody", "A stranger online", "The bot itself"], answer: 0, why: "Answers must be correct; check with the advisor." },
      { objective: "O2", q: "Which should your bot do when it does not know?", options: ["Make up an answer", "Send people to a real adult like the advisor", "Ask for their phone number", "Stop working"], answer: 1, why: "A good fallback points to a real person." },
      { objective: "O3", q: "What does while True: do in Python?", options: ["Prints True", "Ends the program", "Starts a loop that repeats until break", "Makes a variable"], answer: 2, why: "while True loops until a break." },
      { objective: "O3", q: "Why use .lower() on the user's message?", options: ["To make it shorter", "To delete it", "To translate it", "So \"TIME\" and \"time\" match the same keyword"], answer: 3, why: "Lower case makes matching easier." },
      { objective: "O3", q: "What does elif mean?", options: ["Else if: check another condition", "End loop", "Error", "Exit"], answer: 0, why: "elif checks another condition after if." },
      { objective: "O3", q: "You get a Python error. A good first step is:", options: ["Delete the notebook", "Read the last line and the line number", "Restart the school computer", "Give up"], answer: 1, why: "The error message points to the problem." },
      { objective: "O4", q: "An instruction card's role line might say:", options: ["\"Ask for passwords\"", "\"Pretend to be the principal\"", "\"You are the helper for the Lincoln High chess club\"", "\"Say anything\""], answer: 2, why: "The role tells the AI who to be and who it helps." },
      { objective: "O4", q: "Where can you usually put instructions for an AI helper in a free assistant?", options: ["In the computer's settings", "In a text message", "In your browser's address bar", "At the start of a new chat"], answer: 3, why: "Pasting instructions at the start of a chat works in most assistants." },
      { objective: "O4", q: "Which is a limit to include on an instruction card?", options: ["\"Never ask for personal information\"", "\"Make up answers if unsure\"", "\"Give legal advice\"", "\"Pretend to be human\""], answer: 0, why: "Limits keep the bot safe." },
      { objective: "O5", q: "Testing a bot means:", options: ["Deleting it", "Trying it on purpose to find what does not work", "Sharing it right away", "Making it longer"], answer: 1, why: "Tests find problems before users do." },
      { objective: "O5", q: "Why include a question with a typo in your tests?", options: ["To break the computer", "Typos are against the rules", "Real people make typos", "To make the bot rude"], answer: 2, why: "Tests should match how real people type." },
      { objective: "O5", q: "The AI helper invents a meeting place. What do you fix?", options: ["The Python loop", "Your keyboard", "Nothing", "Tighten its instructions to use only your facts"], answer: 3, why: "Tighter instructions reduce made-up details." },
      { objective: "O5", q: "Why have a friend test your bot?", options: ["People ask things you did not expect", "Friends must approve all code", "It makes the bot faster", "It is not useful"], answer: 0, why: "New testers find new problems." },
      { objective: "O6", q: "A good bot greeting says:", options: ["\"I am a real person\"", "\"Hi, I am the club bot. I answer basic questions. For anything else, ask the advisor.\"", "\"Tell me your address\"", "Nothing"], answer: 1, why: "It is honest and explains what the bot does." },
      { objective: "O6", q: "A club member asks your bot about a serious personal problem. The bot should:", options: ["Give advice anyway", "Ignore them", "Point them to a trusted adult", "Ask for their phone number"], answer: 2, why: "Serious questions go to real, trusted adults." },
      { objective: "O6", q: "The club changes its meeting day. What do you do?", options: ["Nothing", "Delete the bot", "Tell members the bot is always right", "Update the bot's answers"], answer: 3, why: "Bots must be kept up to date." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      6,
      9,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Keyword bot works",
        objective: "O3",
        notYet: "The bot does not run, or has fewer than five answers.",
        meets: "Runs in Colab, greets the user, answers at least five questions, has a fallback and stops at bye.",
        exceeds: "Also matches questions asked in different words with extra keywords."
      },
      {
        name: "AI helper card",
        objective: "O4",
        notYet: "The card is missing the role, facts or limits.",
        meets: "Role, checked facts, tone and limits, and it sends unknown questions to the advisor.",
        exceeds: "The helper stayed in its lane on a tricky test question."
      },
      {
        name: "Checked answers",
        objective: "O2",
        notYet: "Answers are unchecked or taken from AI.",
        meets: "Every answer in both bots is checked with the club advisor.",
        exceeds: "Includes a plan for updating answers when facts change."
      },
      {
        name: "Testing and fixes",
        objective: "O5",
        notYet: "Fewer than 10 tests, or no fixes.",
        meets: "10 tests on both bots, each marked right, wrong or made up, and one fix to each bot.",
        exceeds: "Retested after the fixes and someone else also tested the bots."
      },
      {
        name: "Safe and honest",
        objective: "O6",
        notYet: "The bot does not say it is a bot, or asks for private information.",
        meets: "The greeting says it is a bot, it asks for no private information, and serious questions go to a trusted adult.",
        exceeds: "The advisor has approved it for sharing."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Clubs or teams that use the learner's bot with the advisor's OK within 60 days",
      "Learners who build another program or bot on their own within 30 days (follow-up survey)",
      "Learners who start another Koach Learn coding or AI course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a web browser and internet",
      "Google Colab and a free AI assistant, with accounts the learner is allowed to use",
      "The bot plan on paper or in a document",
      "About 60 minutes in total, plus testing time"
    ],
    facilitatorNotes: [
      "Check Colab and AI tool age rules before class; have a demo account so under-age learners can still follow along.",
      "Code the keyword bot live, line by line, and plant a missing colon so learners practice reading errors.",
      "Have learners swap bots and test each other's with tricky questions.",
      "Make sure no bot asks for or stores private information, and that each one says it is a bot.",
      "Score both bots with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
