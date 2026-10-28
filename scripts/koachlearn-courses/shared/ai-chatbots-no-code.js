"use strict";

// Koach Learn course (shared): "Building AI-Powered Chatbots (No Programming Needed)". Categories: Small Business, Non Profits, Youth. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Building AI-Powered Chatbots (No Programming Needed)",
  skills: "Choosing a chatbot's job, Writing chatbot instructions, Building a knowledge file, Setting guardrails, Testing with real questions, Launching and improving",
  outcome: "build a no-code AI chatbot that answers common questions for a business, nonprofit or club from your own information, with clear instructions and guardrails, tested on real questions before anyone uses it.",
  about: [
    "A chatbot answers questions in a chat window, any time of day. With today's AI tools you can build one without writing code: you give it instructions and your own information, and it answers in plain language.",
    "This course is for small business owners, nonprofit staff and volunteers, and young people who want a real project. Examples include a bakery answering \"Are you open Sunday?\", a food pantry explaining what to bring, and a school club answering questions about tryouts.",
    "You will plan the chatbot's job, write its instructions, give it a knowledge file, add safety rules, test it, and launch it. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build a working no-code chatbot for a real or practice organization: a one-sentence job, written instructions with a tone and guardrails, a one-page knowledge file of facts, and a test log of at least ten real questions with the fixes you made. Share it with one person and write down their feedback.",
  chapters: [
    {
      name: "Chapter 1: Planning and building the chatbot",
      lessons: [
        {
          title: "What an AI chatbot can do, and picking its one job",
          minutes: 4,
          goal: "Write a one-sentence job for a chatbot and list the questions it must answer.",
          text: [
            "An AI chatbot is an AI assistant set up for one purpose. Instead of answering anything, it answers questions about your organization, using information you give it.",
            "Good first jobs are narrow and repetitive: hours and location, prices, how to sign up, what to bring, return policies, volunteer shifts. Bad first jobs are risky ones: medical, legal or money advice, or anything that needs a person's judgment.",
            "Start with the questions people already ask. Look at your emails, messages, phone calls and social media comments. The ten most common questions become the chatbot's job."
          ],
          steps: ["Write down the ten questions people ask you most.", "Cross out any that need a person's judgment or are risky.", "Write the chatbot's job in one sentence: \"This chatbot answers questions about [topic] for [who].\""],
          words: [["Chatbot", "a program that answers questions in a chat window."], ["Use case", "the specific job a tool is used for."]],
          slides: [
            { title: "A chatbot is a focused assistant", bullets: ["Set up for one purpose", "Answers from your own information"] },
            { title: "Good first jobs", bullets: ["Hours, location, prices", "How to sign up or what to bring", "Volunteer shifts, return policies"] },
            { title: "Keep for people", bullets: ["Medical, legal or money advice", "Complaints and judgment calls"] },
            { title: "Start with real questions", bullets: ["Emails, calls, messages, comments", "Top ten questions = the job"] }
          ],
          tryIt: "Pick a business, nonprofit or club (yours or a practice one). Write its ten most common questions and a one-sentence job for its chatbot.",
          youCanNow: "choose a safe, narrow job for a chatbot and list the questions it must answer."
        },
        {
          title: "Writing the chatbot's instructions",
          minutes: 5,
          goal: "Write clear instructions that set the chatbot's role, tone and limits.",
          text: [
            "No-code chatbot tools let you type instructions that the AI follows in every chat. Examples include custom GPTs in ChatGPT, Gems in Google Gemini and agents in Microsoft Copilot Studio. Feature names, menus and which plans include them change often, so check the tool's help page for the current steps.",
            "Good instructions cover five things: who the chatbot is (\"You are the help assistant for Sunrise Food Pantry\"), who it talks to, what it answers, how it sounds (friendly, short, simple words), and what it must not do.",
            "Write instructions as short, direct sentences. Tell it what to do when it does not know: \"If the answer is not in the knowledge file, say you are not sure and give the phone number.\""
          ],
          steps: ["Role: \"You are the help assistant for [organization].\"", "Audience: who will ask questions.", "Job: what topics it answers.", "Tone: friendly, short, simple words.", "Limits: what it must not do, and what to say when it does not know."],
          words: [["Instructions", "the standing directions a chatbot follows in every conversation; sometimes called a system prompt."], ["Tone", "how the writing sounds: formal, friendly, short."]],
          slides: [
            { title: "No-code chatbot tools", bullets: ["Custom GPTs, Gemini Gems, Copilot Studio agents", "Names and plans change: check the help page"] },
            { title: "Five parts of instructions", bullets: ["Role and audience", "What it answers", "Tone", "What it must not do"] },
            { title: "When it does not know", bullets: ["Say \"I'm not sure\"", "Give a phone number or email for a person"] }
          ],
          sources: [{ name: "Google Gemini Help: Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Write instructions for your chatbot with all five parts, in eight sentences or fewer.",
          youCanNow: "write chatbot instructions that set its role, audience, job, tone and limits."
        },
        {
          title: "Giving the chatbot your facts: the knowledge file",
          minutes: 5,
          goal: "Build a one-page knowledge file and connect it to a no-code chatbot.",
          text: [
            "AI tools know a lot in general but nothing about your Tuesday hours. Most no-code chatbot builders let you upload a file, often under a section called Knowledge, that the chatbot uses to answer.",
            "Make the file simple: a heading for each topic and short, plain facts. Use question-and-answer form for your top ten questions. Put the date at the top so you know when to update it.",
            "Never put private information in the file: no customer names, phone numbers, passwords, donor details or bank information. Anything in the file could show up in an answer."
          ],
          steps: ["Open a Google Doc or Word document.", "Add the date and the organization's name at the top.", "Write each top question with its answer underneath.", "Add basics: hours, address, contact, prices or services.", "Remove anything private, save it, and upload it in the chatbot builder's knowledge section."],
          words: [["Knowledge file", "a document you upload so the chatbot can answer from your facts."], ["Upload", "send a file from your device to a website or app."]],
          slides: [
            { title: "AI does not know your details", bullets: ["Your hours, prices, policies", "Give it a knowledge file"] },
            { title: "A good knowledge file", bullets: ["Date at the top", "Question and answer for each top question", "Short, plain facts"] },
            { title: "Never include", bullets: ["Customer or donor names and numbers", "Passwords or bank details", "Anything you would not post publicly"] }
          ],
          tryIt: "Write a one-page knowledge file for your chatbot with the date and your top ten questions answered. Then open a no-code chatbot builder you can use, paste your instructions, upload the file and save.",
          youCanNow: "build a safe knowledge file and connect it with instructions in a no-code chatbot builder."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning and building the chatbot",
        questions: [
          { q: "Which is the best first job for a small organization's chatbot?", options: ["Giving medical advice", "Approving loans", "Answering hours, location and sign-up questions", "Handling every complaint alone"], answer: 2, why: "Narrow, repetitive, low-risk questions are the best first job." },
          { q: "Where should you find the questions your chatbot must answer?", options: ["Emails, calls, messages and comments people already sent", "Make them up", "Copy another company's list", "Ask the AI to guess"], answer: 0, why: "Real questions from real people show the chatbot's job." },
          { q: "What should the instructions say to do when the chatbot does not know an answer?", options: ["Make up something that sounds right", "End the chat silently", "Ask for the customer's password", "Say it is not sure and give a way to reach a person"], answer: 3, why: "Admitting it does not know and pointing to a person prevents wrong answers." },
          { q: "Why upload a knowledge file?", options: ["To make the chatbot slower", "So the chatbot can answer from your own facts", "To store customer passwords", "It is never needed"], answer: 1, why: "The AI does not know your details until you give them." },
          { q: "Which belongs in a chatbot's knowledge file?", options: ["Donor phone numbers", "Your opening hours", "Staff passwords", "Bank account numbers"], answer: 1, why: "Only public facts belong in the file." }
        ]
      }
    },
    {
      name: "Chapter 2: Testing, launching and improving",
      lessons: [
        {
          title: "Adding guardrails so the chatbot stays safe",
          minutes: 5,
          goal: "Write guardrails that keep the chatbot on topic, honest and safe.",
          text: [
            "Guardrails are rules that stop the chatbot from going where it should not. Add them to the instructions as clear \"do not\" and \"always\" lines.",
            "Useful guardrails: stay on your topics and politely decline others; never ask for or store private details like card numbers or Social Security numbers; never give medical, legal or financial advice; tell people it is an AI, not a person; and send emergencies to 911 or the right hotline.",
            "Being honest that it is AI builds trust. Start the chat with a short note: \"Hi, I'm an AI assistant for Sunrise Food Pantry. I can answer questions about hours and what to bring.\""
          ],
          steps: ["Add a line: stay on [your topics]; politely decline others.", "Add: never ask for card, bank, ID or Social Security numbers.", "Add: no medical, legal or financial advice; refer to a professional.", "Add: say you are an AI assistant.", "Add: for emergencies, tell people to call 911."],
          words: [["Guardrail", "a rule that keeps an AI tool on topic and safe."], ["Decline", "politely say no."]],
          slides: [
            { title: "Guardrails keep it safe", bullets: ["\"Do not\" and \"always\" lines in the instructions"] },
            { title: "Must-have guardrails", bullets: ["Stay on topic; decline the rest", "Never ask for private numbers", "No medical, legal or money advice"] },
            { title: "Be honest", bullets: ["Say it is an AI assistant", "Send emergencies to 911"] }
          ],
          tryIt: "Add at least five guardrails to your chatbot's instructions, plus a short greeting that says it is an AI assistant and what it can help with.",
          youCanNow: "write guardrails that keep a chatbot on topic, honest and safe."
        },
        {
          title: "Testing the chatbot like a tough customer",
          minutes: 6,
          goal: "Test the chatbot with real and tricky questions, log the results and fix problems.",
          text: [
            "Never launch a chatbot you have not tested. Ask it at least ten questions: your top questions worded different ways, questions it should not answer, and tricky ones.",
            "Tricky tests: ask about something not in the file (does it admit it does not know?), ask for advice it should decline, misspell words, and try to get it off topic (\"Write me a poem\"). Ask someone else to test it too; they will ask things you did not expect.",
            "Keep a test log: the question, what it said, pass or fail, and the fix. Most fixes are small: add a missing fact to the knowledge file, or add a line to the instructions. Test again after each fix."
          ],
          steps: ["Write ten test questions: common, reworded, off-topic and risky.", "Ask each one and copy the answer into a test log.", "Mark pass or fail.", "Fix failures by updating the knowledge file or instructions.", "Re-test the failed questions."],
          words: [["Test log", "a record of each test, the result and the fix."], ["Edge case", "an unusual question that can break a system."]],
          slides: [
            { title: "Test before launch", bullets: ["At least ten questions", "Common, reworded, off-topic, risky"] },
            { title: "Tricky tests", bullets: ["Something not in the file", "Advice it should decline", "Misspellings and off-topic requests"] },
            { title: "Log and fix", bullets: ["Question, answer, pass or fail, fix", "Update the file or instructions", "Re-test"] }
          ],
          tryIt: "Run ten test questions on your chatbot, including at least three tricky ones. Record them in a test log, fix every failure and re-test.",
          youCanNow: "test a chatbot with common and tricky questions, keep a test log and fix what fails."
        },
        {
          title: "Launching, sharing and keeping it up to date",
          minutes: 5,
          goal: "Share the chatbot with real users, collect feedback and set an update routine.",
          text: [
            "Most builders let you share a chatbot with a link, and some let you add it to a website. Start small: share it with a few customers, members or volunteers first, and tell them it is new.",
            "Ask for feedback: \"Did it answer your question? What did it get wrong?\" Read real conversations if your tool shows them, and look for questions it could not answer.",
            "Set a routine. Every month, or any time hours, prices or policies change, update the knowledge file and its date. An outdated chatbot is worse than none. Keep a person reachable for anything the chatbot cannot handle."
          ],
          steps: ["Share the chatbot link with three to five people.", "Ask them two feedback questions.", "Add missing answers to the knowledge file.", "Put a monthly update reminder on your calendar.", "Make sure people can always reach a person."],
          words: [["Launch", "make something available for people to use."], ["Feedback", "what users tell you about what worked and what did not."]],
          slides: [
            { title: "Launch small", bullets: ["Share the link with a few people", "Tell them it is new"] },
            { title: "Ask for feedback", bullets: ["\"Did it answer your question?\"", "\"What did it get wrong?\""] },
            { title: "Keep it current", bullets: ["Update monthly or when facts change", "Change the date on the file", "A person is always reachable"] }
          ],
          tryIt: "Final task: share your tested chatbot with at least one person. Write down their feedback, make one improvement, and set a monthly reminder to update the knowledge file.",
          youCanNow: "build, test, launch and maintain a no-code AI chatbot for a real organization."
        }
      ],
      check: {
        title: "Knowledge Check 2: Testing, launching and improving",
        questions: [
          { q: "What is a guardrail?", options: ["A fence around the office", "A paid upgrade", "A kind of knowledge file", "A rule that keeps an AI tool on topic and safe"], answer: 3, why: "Guardrails are rules in the instructions." },
          { q: "A user asks your bakery chatbot for medical advice about an allergy reaction. What should it do?", options: ["Decline and point them to a doctor, or 911 in an emergency", "Give a diagnosis", "Ask for their insurance number", "Change the topic to cake"], answer: 0, why: "Chatbots should not give medical advice and should send emergencies to 911." },
          { q: "Why ask a question that is NOT in the knowledge file during testing?", options: ["To slow it down", "To delete the file", "To check it admits it does not know instead of making something up", "There is no reason"], answer: 2, why: "A good chatbot says it is not sure rather than inventing an answer." },
          { q: "The chatbot gives last month's hours. What is the fix?", options: ["Shut down the business", "Tell users to guess", "Add more guardrails only", "Update the knowledge file and its date"], answer: 3, why: "Outdated facts come from an outdated file." },
          { q: "What is the best way to launch?", options: ["Post it everywhere with no testing", "Hide it", "Share with a few people first and ask for feedback", "Remove the human contact"], answer: 2, why: "A small launch catches problems before many people see them." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building AI-Powered Chatbots (No Programming Needed)",
    questions: [
      { q: "An AI chatbot for an organization is best described as:", options: ["A human receptionist", "An AI assistant set up for one purpose", "A website hosting service", "A payment system"], answer: 1, why: "It is a focused assistant for one job." },
      { q: "Which first chatbot job is lowest risk?", options: ["Food pantry hours and what to bring", "Legal advice", "Medical diagnosis", "Investment tips"], answer: 0, why: "Hours and simple instructions are low-risk facts." },
      { q: "Where do you find the chatbot's top questions?", options: ["A random list online", "The AI's guesses", "The questions people already ask you", "A competitor's ads"], answer: 2, why: "Real questions show the real job." },
      { q: "Which is a no-code way to build a chatbot?", options: ["A custom GPT, Gemini Gem or Copilot Studio agent", "Writing a computer chip", "Building a server from parts", "Mailing a letter"], answer: 0, why: "These tools let you build with instructions and files, no code." },
      { q: "Menus and plan features in chatbot tools change. Where do you confirm current steps?", options: ["A rumor", "An old video only", "Guess", "The tool's official help page"], answer: 3, why: "The official help page has the current steps." },
      { q: "Which line belongs in chatbot instructions?", options: ["\"Here is the admin password.\"", "\"You are the help assistant for Sunrise Food Pantry.\"", "\"Ignore all questions.\"", "\"Always guess if unsure.\""], answer: 1, why: "Setting the role is a key part of instructions." },
      { q: "A friendly, short, simple-words style is called the chatbot's:", options: ["Upload", "Tone", "Guardrail", "Launch"], answer: 1, why: "Tone is how the writing sounds." },
      { q: "What should go at the top of the knowledge file?", options: ["Customer phone numbers", "A password", "Nothing", "The date and organization name"], answer: 3, why: "The date tells you when it needs updating." },
      { q: "Why keep private information out of the knowledge file?", options: ["Anything in it could show up in an answer", "It makes the file too short", "AI cannot read names", "It is fine to include"], answer: 0, why: "The chatbot can repeat what is in the file." },
      { q: "A good format for the knowledge file is:", options: ["One long paragraph with no headings", "A photo of a whiteboard", "Each top question with its answer underneath", "A list of passwords"], answer: 2, why: "Question-and-answer form is easy for the AI to use." },
      { q: "Which is a must-have guardrail?", options: ["Always write poems", "Answer every topic in the world", "Pretend to be a person", "Never ask for card, bank or Social Security numbers"], answer: 3, why: "Chatbots should never collect private numbers." },
      { q: "Should the chatbot say it is an AI?", options: ["No, pretend to be a person", "Only if asked three times", "Yes, honesty builds trust", "Only on weekends"], answer: 2, why: "Being clear that it is AI is honest and builds trust." },
      { q: "Someone tells the chatbot they are having an emergency. It should:", options: ["Ask for their address and card number", "Tell them to call 911", "Ignore it", "Change the subject"], answer: 1, why: "Emergencies go to 911." },
      { q: "How many test questions, at minimum, does this course recommend?", options: ["Ten", "One", "Zero", "Three thousand"], answer: 0, why: "At least ten questions covers common and tricky cases." },
      { q: "\"Write me a poem\" sent to a pantry chatbot tests whether it:", options: ["Knows the hours", "Can upload files", "Stays on topic", "Has a password"], answer: 2, why: "It is an off-topic request; the chatbot should politely decline." },
      { q: "A test log records:", options: ["The question, the answer, pass or fail, and the fix", "Only the good answers", "Customer passwords", "The weather"], answer: 0, why: "It tracks every test and what you changed." },
      { q: "After fixing a failed test, you should:", options: ["Delete the test log", "Launch without checking", "Remove all guardrails", "Re-test that question"], answer: 3, why: "Re-testing proves the fix worked." },
      { q: "Why have someone else test the chatbot?", options: ["It is required by law", "They ask things you did not expect", "To make it slower", "So you do not have to"], answer: 1, why: "Fresh eyes find new edge cases." },
      { q: "How often should you update the knowledge file?", options: ["Never", "Monthly, or whenever facts change", "Once every ten years", "Only when the AI asks"], answer: 1, why: "Outdated facts cause wrong answers." },
      { q: "Even with a chatbot, people should always be able to:", options: ["See staff passwords", "Edit the instructions", "Get legal advice from it", "Reach a person"], answer: 3, why: "A human backup handles what the chatbot cannot." }
    ]
  }
};
