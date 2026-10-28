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
  chapters: [
    {
      name: "Chapter 1: How chatbots work, and your first bot",
      lessons: [
        {
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
          youCanNow: "explain how keyword chatbots and AI chatbots differ, and choose a real use for a bot."
        },
        {
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
          youCanNow: "plan a chatbot's job, answers, fallback and safety rules."
        },
        {
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
          youCanNow: "build and run a keyword chatbot in Python with answers, a fallback and a way to stop."
        }
      ],
      check: {
        title: "Knowledge Check 1: How chatbots work, and your first bot",
        questions: [
          { q: "How does a keyword chatbot decide what to say?", options: ["It reads your mind", "It follows rules that look for words in your message", "It searches the whole internet", "It asks a teacher"], answer: 1, why: "Keyword bots follow rules a person wrote." },
          { q: "Which is a weakness of an AI chatbot?", options: ["It can be wrong or make things up", "It can only say one sentence", "It cannot understand normal words", "It needs no electricity"], answer: 0, why: "Large language models can produce wrong answers that sound right." },
          { q: "What is a fallback answer?", options: ["The first greeting", "A password", "What the bot says when it does not know", "The bot's name"], answer: 2, why: "A fallback handles questions the bot cannot answer." },
          { q: "Which should your club bot NEVER ask for?", options: ["What the user wants to know", "Whether they want to join", "Their favorite chess opening", "Their home address"], answer: 3, why: "Bots should never collect private details." },
          { q: "In the Python bot, what does break do?", options: ["Stops the loop so the chat ends", "Breaks the computer", "Adds a new answer", "Deletes the notebook"], answer: 0, why: "break ends the while loop." }
        ]
      }
    },
    {
      name: "Chapter 2: AI helper bots, testing and safety",
      lessons: [
        {
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
          youCanNow: "write clear instructions that turn a free AI assistant into a focused, limited helper bot."
        },
        {
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
          youCanNow: "test chatbots with real questions, find what fails and improve them."
        },
        {
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
          youCanNow: "build, test and share a simple chatbot that is useful, safe and honest about being a bot."
        }
      ],
      check: {
        title: "Knowledge Check 2: AI helper bots, testing and safety",
        questions: [
          { q: "What belongs on an AI helper's instruction card?", options: ["Your password", "Role, checked facts, tone and limits", "A random story", "Nothing; just start chatting"], answer: 1, why: "Those four parts focus and limit the bot." },
          { q: "Why tell the AI helper to use only the facts you gave it?", options: ["To make it slower", "To lower the chance it makes up details", "To make it longer", "It is required by law"], answer: 1, why: "Limits reduce made-up answers." },
          { q: "Your keyword bot misses \"when do y'all meet?\" How do you fix it?", options: ["Delete the bot", "Remove the fallback", "Add more keywords like \"meet\"", "Blame the user"], answer: 2, why: "More keywords catch different wording." },
          { q: "Why should a bot say it is a bot?", options: ["People deserve to know they are not talking to a person", "It sounds cooler", "It makes the code shorter", "It is never needed"], answer: 0, why: "Transparency builds trust." },
          { q: "Before sharing your bot with the club, you should:", options: ["Add a request for phone numbers", "Skip testing", "Hide that it is a bot", "Get your advisor's OK and follow school rules"], answer: 3, why: "Adult approval and school rules come first." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building Simple AI Chatbots",
    questions: [
      { q: "A chatbot is:", options: ["A program you talk to by typing or speaking", "A phone case", "A type of robot arm", "A website address"], answer: 0, why: "Chatbots are conversational programs." },
      { q: "A strength of a keyword chatbot is that it is:", options: ["Able to answer anything", "Simple and predictable", "Always creative", "Connected to every website"], answer: 1, why: "It only says what you programmed." },
      { q: "A large language model is:", options: ["A big keyboard", "A school subject", "The kind of AI behind assistants like ChatGPT", "A Python error"], answer: 2, why: "LLMs learned patterns from huge amounts of text." },
      { q: "Which is the best job for a first chatbot?", options: ["Giving medical advice", "Handling bank accounts", "Answering everything about the world", "Answering new members' questions for your club"], answer: 3, why: "A small, clear job is best." },
      { q: "Who should check the answers in your bot plan?", options: ["You, with the club advisor", "Nobody", "A stranger online", "The bot itself"], answer: 0, why: "Answers must be correct; check with the advisor." },
      { q: "Which should your bot do when it does not know?", options: ["Make up an answer", "Send people to a real adult like the advisor", "Ask for their phone number", "Stop working"], answer: 1, why: "A good fallback points to a real person." },
      { q: "What does while True: do in Python?", options: ["Prints True", "Ends the program", "Starts a loop that repeats until break", "Makes a variable"], answer: 2, why: "while True loops until a break." },
      { q: "Why use .lower() on the user's message?", options: ["To make it shorter", "To delete it", "To translate it", "So \"TIME\" and \"time\" match the same keyword"], answer: 3, why: "Lower case makes matching easier." },
      { q: "What does elif mean?", options: ["Else if: check another condition", "End loop", "Error", "Exit"], answer: 0, why: "elif checks another condition after if." },
      { q: "You get a Python error. A good first step is:", options: ["Delete the notebook", "Read the last line and the line number", "Restart the school computer", "Give up"], answer: 1, why: "The error message points to the problem." },
      { q: "An instruction card's role line might say:", options: ["\"Ask for passwords\"", "\"Pretend to be the principal\"", "\"You are the helper for the Lincoln High chess club\"", "\"Say anything\""], answer: 2, why: "The role tells the AI who to be and who it helps." },
      { q: "Where can you usually put instructions for an AI helper in a free assistant?", options: ["In the computer's settings", "In a text message", "In your browser's address bar", "At the start of a new chat"], answer: 3, why: "Pasting instructions at the start of a chat works in most assistants." },
      { q: "Which is a limit to include on an instruction card?", options: ["\"Never ask for personal information\"", "\"Make up answers if unsure\"", "\"Give legal advice\"", "\"Pretend to be human\""], answer: 0, why: "Limits keep the bot safe." },
      { q: "Testing a bot means:", options: ["Deleting it", "Trying it on purpose to find what does not work", "Sharing it right away", "Making it longer"], answer: 1, why: "Tests find problems before users do." },
      { q: "Why include a question with a typo in your tests?", options: ["To break the computer", "Typos are against the rules", "Real people make typos", "To make the bot rude"], answer: 2, why: "Tests should match how real people type." },
      { q: "The AI helper invents a meeting place. What do you fix?", options: ["The Python loop", "Your keyboard", "Nothing", "Tighten its instructions to use only your facts"], answer: 3, why: "Tighter instructions reduce made-up details." },
      { q: "Why have a friend test your bot?", options: ["People ask things you did not expect", "Friends must approve all code", "It makes the bot faster", "It is not useful"], answer: 0, why: "New testers find new problems." },
      { q: "A good bot greeting says:", options: ["\"I am a real person\"", "\"Hi, I am the club bot. I answer basic questions. For anything else, ask the advisor.\"", "\"Tell me your address\"", "Nothing"], answer: 1, why: "It is honest and explains what the bot does." },
      { q: "A club member asks your bot about a serious personal problem. The bot should:", options: ["Give advice anyway", "Ignore them", "Point them to a trusted adult", "Ask for their phone number"], answer: 2, why: "Serious questions go to real, trusted adults." },
      { q: "The club changes its meeting day. What do you do?", options: ["Nothing", "Delete the bot", "Tell members the bot is always right", "Update the bot's answers"], answer: 3, why: "Bots must be kept up to date." }
    ]
  }
};
