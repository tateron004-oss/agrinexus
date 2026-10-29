"use strict";

// Koach Learn course (shared): "Introduction to Artificial Intelligence". Goes in Seniors and Technology (first), Re-Entry, Non Profits, Youth, Workforce Development, Undeserved Community and
// Artificial Intelligence, so the examples are everyday ones: family, work, a club or nonprofit, school. Shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "intro-to-ai",
  category: "Seniors and Technology",
  name: "Introduction to Artificial Intelligence",
  skills: "Explaining what AI is, Spotting AI in daily life, Writing clear prompts, Improving and checking answers, Using AI fairly and safely",
  outcome: "explain in plain words what artificial intelligence is and how it learns, spot it in the tools you already use, and use a free AI assistant to finish a real everyday task: ask clearly, improve the answer, check it, and keep private information out.",
  about: [
    "Artificial intelligence, or AI, is in phones, maps, email, shopping sites and job websites. This course explains what it is in plain words and then shows you how to use it well. It is for anyone: grandparents, students, job seekers, volunteers and small teams.",
    "In Chapter 1 you learn what AI is, how it learns from examples, and where you already meet it. In Chapter 2 you use a free AI assistant to get real work done, check what it says, and use it fairly and safely.",
    "Each lesson takes about five minutes: read, watch the slides, then do the \"Try it now\" task. A short knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Pick one real task, such as planning a family dinner, a volunteer sign-up message or a weekly study plan. Use a free AI assistant to do it: write a clear prompt, ask for two improvements, check one fact in the answer on an official or trusted website, and make sure the prompt has no private information. Then explain to a friend in three sentences what AI is and why you checked the answer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults new to artificial intelligence: seniors, students, job seekers, volunteers, people returning from incarceration, nonprofit and small-team staff. Many have heard about AI in the news but have never used an AI assistant on purpose.",
    startingPoint: "Can use a phone or computer to open a web browser, type a short message and use common apps such as maps, email and video. Few can say what AI is, where it is in their apps, or how to ask an AI assistant for help and check what it says.",
    gap: "AI is now in phones, maps, email, shopping, banking and job websites, and free AI assistants can save real time. People who do not understand it either avoid a useful tool or trust it too much, share private information, or fall for AI-powered scams.",
    constraints: [
      "Reading level: plain words and short sentences; every new word, such as prompt, data and bias, is explained",
      "Devices: a phone, tablet or computer with internet and a web browser",
      "Time: 4 to 6 minute lessons, about 60 minutes in total",
      "Cost: only free AI assistants (ChatGPT, Microsoft Copilot or Google Gemini); no paid plan needed",
      "Privacy: learners never type ID numbers, passwords, bank details, medical numbers or a full address into an AI assistant"
    ],
    prerequisites: "None. Learners should be able to open a web browser and type a short message."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Without notes", action: "explain in plain words what artificial intelligence and generative AI are and why AI can sound sure and still be wrong", standard: "in two or three sentences that use the ideas of patterns and guesses" },
    { id: "O2", condition: "Given a simple example such as a spam filter", action: "describe how an AI learns from data and how poor or one-sided data leads to biased answers", standard: "naming the examples, the patterns and one way the guesses could be unfair" },
    { id: "O3", condition: "Using your own phone or computer", action: "identify at least five places where you already use AI and find one setting that controls it", standard: "with five correct examples and one setting opened" },
    { id: "O4", condition: "Using a free AI assistant", action: "write a clear prompt that says what you need, the situation and how you want the answer", standard: "with all three parts and no private information" },
    { id: "O5", condition: "Given a first answer from an AI assistant", action: "improve the answer with follow-up requests and check its facts on an official or trusted source", standard: "with at least two follow-ups and at least one fact checked" },
    { id: "O6", condition: "Before you send a prompt or use AI-written words", action: "check the prompt for private information, follow the rules on AI help and respond safely to AI-powered scams", standard: "with every private detail replaced by a placeholder and the right safe action chosen every time" }
  ],
  chapters: [
    {
      name: "Chapter 1: What AI is",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI in plain words",
          minutes: 4,
          goal: "Explain in two sentences what artificial intelligence is.",
          text: [
            "Artificial intelligence (AI) means computer programs that do tasks that usually need a person: understanding speech, recognizing a face in a photo, suggesting a song, translating a sentence, or writing an answer to a question.",
            "AI does not think or feel like a person. It is very good at finding patterns in huge amounts of examples and using those patterns to make a guess. A good guess can look smart; a bad guess can look just as confident.",
            "There are many kinds of AI. The kind people talk about most today is generative AI: tools like ChatGPT, Microsoft Copilot and Google Gemini that generate (make) new text, pictures or sound when you ask."
          ],
          words: [["Artificial intelligence (AI)", "computer programs that do tasks that usually need a person, like understanding speech or answering questions."], ["Pattern", "something that repeats in a way you can predict."], ["Generative AI", "AI that makes new text, pictures or sound when you ask it."]],
          slides: [
            { title: "AI is...", bullets: ["Computer programs doing tasks that usually need a person", "Speech, photos, suggestions, translation, writing"] },
            { title: "How it works, in one line", bullets: ["It finds patterns in many examples", "Then it makes a best guess"] },
            { title: "It is not a person", bullets: ["It does not think or feel", "A wrong guess can sound just as sure as a right one"] },
            { title: "Generative AI", bullets: ["Makes new text, pictures or sound", "Examples: ChatGPT, Microsoft Copilot, Google Gemini"] }
          ],
          tryIt: "Without looking back, say or write two sentences that explain AI to someone who has never heard of it. Use the words \"patterns\" and \"guess\".",
          youCanNow: "explain in plain words what AI is and why it can be wrong.",
          quickCheck: [
            { objective: "O1", q: "In this course, what does generative AI do?", options: ["It only sorts emails into folders", "It makes new text, pictures or sound when you ask", "It thinks and feels like a person", "It always knows the true answer"], answer: 1, why: "Generative AI tools like ChatGPT, Copilot and Gemini generate new text, pictures or sound." },
            { objective: "O1", q: "A friend says, \"The AI sounded so sure, so it must be right.\" What would you tell them?", options: ["That is true; AI is never wrong when it sounds sure", "Only paid AI tools can be wrong", "AI makes guesses from patterns, so a wrong guess can sound just as confident", "AI is only wrong when the internet is slow"], answer: 2, why: "AI uses patterns to make a guess, and a bad guess can look just as confident as a good one." }
          ]
        },
        {
          objectives: ["O2"],
          title: "How AI learns from examples",
          minutes: 5,
          goal: "Describe how an AI learns, using a simple example.",
          text: [
            "Most AI today learns from examples instead of from rules a person types in. To teach a program to spot spam email, people show it many emails that are marked \"spam\" or \"not spam\". The program finds the patterns, like certain words or strange links, and uses them on new emails.",
            "The examples it learns from are called data. Good, varied data makes better AI. If the data is old, one-sided or missing some groups of people, the AI's guesses will be old, one-sided or unfair too. This is called bias.",
            "Writing tools like ChatGPT learned from a huge amount of text, so they are good at predicting which words should come next. That is why they write smoothly, and also why they can write something that sounds right but is not true."
          ],
          steps: ["People collect many examples (data).", "The program looks for patterns in the examples.", "It uses the patterns to guess about something new.", "People check the guesses and give it better examples when it is wrong."],
          words: [["Data", "the examples, numbers, words or pictures an AI learns from."], ["Bias", "when the data leans one way, so the AI's guesses are unfair to some people."], ["Training", "the step where an AI learns patterns from data."]],
          slides: [
            { title: "Learning from examples", bullets: ["Show it many emails marked spam or not spam", "It finds the patterns", "It sorts new emails by those patterns"] },
            { title: "Data matters", bullets: ["Good, varied data = better guesses", "Old or one-sided data = old or unfair guesses"] },
            { title: "Why writing AI can be wrong", bullets: ["It predicts the next words from patterns", "It can sound right and still be untrue"] }
          ],
          tryIt: "Think of something you learned from examples, like telling ripe fruit from unripe fruit. Write how you would teach a computer the same thing: what examples would you show it, and what might it get wrong?",
          youCanNow: "describe how AI learns from data and why poor data leads to poor or unfair answers.",
          quickCheck: [
            { objective: "O2", q: "What is bias in AI?", options: ["Guesses that lean one way because the data was old, one-sided or missing some groups", "A setting that makes the AI faster", "A type of computer virus", "A way to make the screen brighter"], answer: 0, why: "When the examples are one-sided or missing groups of people, the AI's guesses become unfair too." },
            { objective: "O2", q: "You want to teach a program to tell ripe fruit from unripe fruit. What would you do first?", options: ["Type one rule and hope it works", "Show it a single photo of a banana", "Tell it to guess with no examples", "Show it many photos of fruit, each marked ripe or unripe"], answer: 3, why: "AI learns by finding patterns in many marked examples, called data." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Spotting AI in your day",
          minutes: 4,
          goal: "Find at least five places where you already use AI.",
          text: [
            "You probably use AI every day without calling it that. Your phone's map picks a faster route around traffic. Your email moves junk into a spam folder. Video and music apps suggest what to watch next. Your phone unlocks with your face. Your keyboard suggests the next word.",
            "Voice assistants such as Siri, Google Assistant and Alexa use AI to understand what you say. Banks use AI to spot card payments that look unusual. Job websites use it to match your résumé to openings.",
            "Knowing where AI is helps you ask good questions: why did the app suggest this? Can I turn it off? What does it know about me? Most apps have settings where you can see or change this."
          ],
          words: [["Voice assistant", "an AI you talk to out loud, like Siri, Google Assistant or Alexa."], ["Recommendation", "a suggestion an app makes based on what you or people like you chose before."]],
          slides: [
            { title: "AI you already use", bullets: ["Maps that avoid traffic", "Spam filters in email", "Suggested videos, songs and products"] },
            { title: "More everyday AI", bullets: ["Face unlock on a phone", "Voice assistants: Siri, Google Assistant, Alexa", "Bank alerts about unusual card use"] },
            { title: "Good questions to ask", bullets: ["Why did it suggest this?", "Can I turn it off?", "What does it know about me? Check the settings"] }
          ],
          tryIt: "Look through your phone or computer and list five places that use AI. For one of them, open its settings and find one choice you can change.",
          youCanNow: "spot AI in the tools you use every day and find settings that control it.",
          quickCheck: [
            { objective: "O3", q: "Which of these uses AI to understand what you say?", options: ["A paper calendar", "A desk lamp", "A voice assistant such as Siri or Alexa", "A printed bus timetable"], answer: 2, why: "Voice assistants use AI to understand speech." },
            { objective: "O3", q: "A music app keeps suggesting songs you do not like and you wonder what it knows about you. What would you do?", options: ["Delete your phone", "Open the app's settings to see or change what it uses", "Stop listening to music", "Type your password into the search box"], answer: 1, why: "Most apps have settings where you can see or change how suggestions work." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: What AI is",
        questions: [
          { objective: "O1", q: "Which is the best plain-words description of AI?", options: ["A robot that thinks and feels", "A website that is always right", "A type of internet cable", "Computer programs that find patterns and make guesses to do tasks people usually do"], answer: 3, why: "AI finds patterns in examples and uses them to make guesses." },
          { objective: "O1", q: "What does generative AI do?", options: ["Fixes broken phones", "Charges your battery", "Only stores files", "Makes new text, pictures or sound when you ask"], answer: 3, why: "Generative means it makes new content." },
          { objective: "O2", q: "An AI was trained only on photos of one group of people. What is the likely problem?", options: ["It will work the same for everyone", "It will run faster", "Its guesses may be unfair or wrong for other groups", "It will stop working"], answer: 2, why: "One-sided data causes bias." },
          { objective: "O2", q: "What is \"data\" in AI?", options: ["The examples the AI learns from", "The phone's screen", "A type of password", "The price of the app"], answer: 0, why: "Data is the examples, words, numbers or pictures an AI learns from." },
          { objective: "O3", q: "Which of these is an everyday use of AI?", options: ["A light switch", "A paper calendar", "A map app picking a route around traffic", "A wind-up clock"], answer: 2, why: "Map apps use AI to predict traffic and choose routes." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI well",
      lessons: [
        {
          objectives: ["O4"],
          title: "Asking an AI assistant for help",
          minutes: 5,
          goal: "Open a free AI assistant and write a clear, three-part prompt.",
          text: [
            "Free AI assistants include ChatGPT (chatgpt.com), Microsoft Copilot (copilot.microsoft.com) and Google Gemini (gemini.google.com). They work in a web browser or as an app from the official app store.",
            "What you type is called a prompt. A clear prompt has three parts: what you need, a little about the situation, and how you want the answer. For example: \"I run a small church food pantry. Write a friendly 4-line message asking for Saturday volunteers. Use simple words.\"",
            "A one-word prompt like \"volunteers\" makes the AI guess what you mean, so the answer is general and less useful."
          ],
          steps: ["Open an AI assistant in the browser or the official app.", "Say what you need.", "Add the situation, without private details.", "Say how you want the answer: length, list, steps, simple words.", "Send it and read the answer."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."], ["AI assistant", "an AI program you chat with by typing or talking, such as ChatGPT, Copilot or Gemini."]],
          slides: [
            { title: "Free AI assistants", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Three parts of a clear prompt", bullets: ["1. What you need", "2. The situation (no private details)", "3. How you want the answer"] },
            { title: "Example", bullets: ["\"I run a small food pantry. Write a friendly 4-line message", "asking for Saturday volunteers. Use simple words.\""] }
          ],
          tryIt: "Open one free AI assistant. Write a three-part prompt for a real task this week, such as a birthday message, a study plan or a shopping list, and send it.",
          youCanNow: "open a free AI assistant and write a clear prompt that gets a useful first answer.",
          quickCheck: [
            { objective: "O4", q: "What is a prompt?", options: ["What you type or say to an AI assistant", "A warning from your phone", "The AI's answer", "A type of password"], answer: 0, why: "The prompt is what you give the AI assistant to tell it what you need." },
            { objective: "O4", q: "You need a short birthday message for your aunt. Which prompt would you send?", options: ["\"Birthday\"", "\"Write something\"", "\"Message\"", "\"Write a warm 3-line birthday message for my aunt, who loves gardening. Use simple words.\""], answer: 3, why: "It says what you need, the situation and how you want the answer." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Improving and checking the answer",
          minutes: 5,
          goal: "Improve an answer with follow-ups and check its facts.",
          text: [
            "Treat the first answer as a draft. In the same chat you can ask: \"Make it shorter.\" \"Use simpler words.\" \"Give me three choices.\" \"Put it in a table.\" The assistant remembers the earlier messages in that chat.",
            "AI can make things up: a wrong date, a phone number that does not exist, an old rule. This is called a hallucination. Check any fact about money, health, law, benefits, dates, addresses or phone numbers on an official website (US government sites end in .gov) or with a person who knows, like a doctor, librarian or case manager.",
            "Ask the assistant \"Where can I check this?\" and then go to that site yourself."
          ],
          steps: ["Read the first answer.", "Ask for one change at a time.", "Underline the facts: numbers, dates, names, rules.", "Check each fact on an official or trusted source.", "If they differ, trust the official source."],
          words: [["Follow-up", "a second message that asks the AI to change or explain its answer."], ["Hallucination", "when an AI writes something that sounds true but is made up."]],
          slides: [
            { title: "The first answer is a draft", bullets: ["\"Make it shorter.\"", "\"Use simpler words.\"", "\"Give me three choices.\""] },
            { title: "AI can make things up", bullets: ["Wrong dates, numbers or rules", "Offices or books that do not exist"] },
            { title: "Check before you trust", bullets: ["Money, health, law, benefits, dates, phone numbers", "Official sites (.gov) or a person who knows"] }
          ],
          tryIt: "Take your answer from the last lesson. Ask for two changes, one at a time. Then pick one fact in it and check it on an official or trusted website.",
          youCanNow: "improve an AI answer with follow-ups and check its facts before you use it.",
          quickCheck: [
            { objective: "O5", q: "What is a hallucination in AI?", options: ["When the AI runs out of battery", "When the AI refuses to answer", "When the AI makes up something that sounds true", "When the AI answers in another language"], answer: 2, why: "AI can make up a wrong date, number or rule that sounds right; that is a hallucination." },
            { objective: "O5", q: "An AI answer gives the date a benefits form is due. What would you do before you rely on it?", options: ["Check the date on the official website or with a person who knows", "Trust it because it came from AI", "Ask the AI the same question again and use that", "Share it with friends first"], answer: 0, why: "Facts about dates, money, benefits and rules should be checked on an official source." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Using AI fairly and safely",
          minutes: 5,
          goal: "Use AI without sharing private information and in a fair, honest way.",
          text: [
            "Do not type private information into an AI assistant: Social Security or ID numbers, passwords, bank or card numbers, medical record numbers or a full home address. Write \"[my number]\" instead. Your chats may be stored by the company.",
            "Be honest about AI help. Many schools and jobs have rules about it, so ask before you hand in AI-written work. Read and change what it writes so it sounds like you and says what you mean.",
            "Remember bias: if an answer seems unfair to a group of people, question it. And watch for AI-powered scams, such as fake voices of family members asking for money. Stop, hang up, and call back on a number you know."
          ],
          steps: ["Read your prompt for private information before you send it.", "Replace private details with a placeholder.", "Check your school's or job's rules on AI help.", "Make the final words your own.", "Treat rushed money requests as a warning sign."],
          words: [["Private information", "details that could let someone pretend to be you or take your money."], ["Placeholder", "a stand-in like \"[my number]\" that you write instead of the real detail."]],
          slides: [
            { title: "Keep it out of AI", bullets: ["ID and Social Security numbers", "Passwords, bank and card numbers", "Medical record numbers, full home address"] },
            { title: "Be honest", bullets: ["Follow your school's or job's AI rules", "Edit the words so they are yours"] },
            { title: "Stay alert", bullets: ["Question answers that seem unfair", "Fake voices can ask for money: hang up and call back"] }
          ],
          tryIt: "Final task: pick a real task, write a clear prompt with no private information, ask for two improvements, check one fact on a trusted website, then explain AI to a friend in three sentences.",
          youCanNow: "use AI to finish a real task while keeping private information safe and using it honestly.",
          quickCheck: [
            { objective: "O6", q: "Why should you keep private information out of an AI chat?", options: ["It makes the answer longer", "AI assistants cannot read numbers", "It is against every school's rules", "Your chats may be stored by the company"], answer: 3, why: "The company may keep your chats, so ID, bank and medical numbers should never go in." },
            { objective: "O6", q: "You get a call in your grandson's voice asking you to send money right now. What would you do?", options: ["Send the money quickly", "Hang up and call him back on a number you know", "Give your bank card number to check it is him", "Ask the caller to send a text instead"], answer: 1, why: "AI can copy voices, so stop and call back on a number you already know." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI well",
        questions: [
          { objective: "O4", q: "Which prompt is clearest?", options: ["\"volunteers\"", "\"help\"", "\"stuff for Saturday\"", "\"I run a food pantry. Write a friendly 4-line message asking for Saturday volunteers. Use simple words.\""], answer: 3, why: "It gives the need, the situation and the format." },
          { objective: "O5", q: "The answer uses hard words. What do you type next?", options: ["\"Use simpler words.\"", "Your password", "Nothing; close the app", "\"Start over forever.\""], answer: 0, why: "A follow-up asks the AI to change its answer." },
          { objective: "O5", q: "The AI gives a phone number for a benefits office. What should you do?", options: ["Call it right away", "Share it on social media", "Check it on the office's official website", "Ask the AI if it is sure and trust it"], answer: 2, why: "AI can make up numbers; the official site is the trusted source." },
          { objective: "O6", q: "What should you write instead of your bank card number in a prompt?", options: ["The real number", "Your PIN", "The last 12 digits", "A placeholder like \"[my card]\""], answer: 3, why: "A placeholder lets you get help without sharing private information." },
          { objective: "O6", q: "You want to hand in homework an AI helped write. What should you do first?", options: ["Check your school's rules on AI help", "Hand it in without reading it", "Copy a friend's", "Delete it"], answer: 0, why: "Schools and jobs have rules about AI help; honesty comes first." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Artificial Intelligence",
    questions: [
      { objective: "O1", q: "AI is best described as:", options: ["A person inside the computer", "A brand of phone", "Programs that use patterns to do tasks people usually do", "A kind of email address"], answer: 2, why: "AI finds patterns and makes guesses to do tasks." },
      { objective: "O1", q: "Why can an AI sound sure and still be wrong?", options: ["It is joking", "It is never wrong", "Its battery is low", "It makes a best guess from patterns, not from knowing the truth"], answer: 3, why: "AI guesses from patterns, and a wrong guess can sound confident." },
      { objective: "O1", q: "Which tool is generative AI?", options: ["A calculator", "A paper map", "Google Gemini", "A light switch"], answer: 2, why: "Gemini makes new text when you ask, so it is generative AI." },
      { objective: "O2", q: "How do most AI programs learn today?", options: ["From many examples (data)", "From reading your mind", "By guessing with no examples", "From the phone's battery"], answer: 0, why: "They learn patterns from data." },
      { objective: "O2", q: "A spam filter was trained on thousands of emails marked spam or not spam. This is an example of:", options: ["Training on data", "Charging a phone", "Sending a text", "A password"], answer: 0, why: "Learning from labeled examples is training." },
      { objective: "O2", q: "What is bias in AI?", options: ["A fast computer", "Data that leans one way, making guesses unfair to some people", "A type of prompt", "A phone setting for brightness"], answer: 1, why: "One-sided data leads to unfair guesses." },
      { objective: "O3", q: "Which is an everyday example of AI?", options: ["A stapler", "A video app suggesting what to watch next", "A paper envelope", "A door key"], answer: 1, why: "Recommendations come from AI." },
      { objective: "O3", q: "Siri, Google Assistant and Alexa are:", options: ["Banks", "Voice assistants that use AI", "Email addresses", "Printers"], answer: 1, why: "They use AI to understand speech." },
      { objective: "O3", q: "An app keeps suggesting things you do not want. A good first step is to:", options: ["Throw away the phone", "Look in the app's settings for what you can change", "Give it your password", "Ignore all apps forever"], answer: 1, why: "Most apps have settings that control suggestions." },
      { objective: "O4", q: "What is a prompt?", options: ["A phone charger", "What you type or say to an AI assistant", "A website ending", "A type of virus"], answer: 1, why: "A prompt is your request to the AI." },
      { objective: "O4", q: "Which address opens Microsoft's AI assistant?", options: ["copilot.microsoft.com", "free-ai-prize.win", "microsoft-gift.xyz", "copilot.bank"], answer: 0, why: "copilot.microsoft.com is Microsoft's official address." },
      { objective: "O4", q: "A clear prompt has which three parts?", options: ["Name, password, address", "What you need, the situation, how you want the answer", "Color, size, price", "Hello, thanks, goodbye"], answer: 1, why: "Those three parts get a useful answer." },
      { objective: "O5", q: "The first answer is too long. You should:", options: ["Accept it anyway", "Pay for a new app", "Ask \"Make it shorter.\"", "Start typing private details"], answer: 2, why: "A follow-up changes the answer." },
      { objective: "O5", q: "A \"hallucination\" in AI means:", options: ["The AI made up something that sounds true", "The screen is blurry", "The app is free", "The AI is turned off"], answer: 0, why: "AI can invent facts that sound real." },
      { objective: "O5", q: "Which should you always check with an official source?", options: ["A birthday poem", "A joke", "A list of party colors", "A tax deadline"], answer: 3, why: "Dates, money and rules can be wrong and must be checked." },
      { objective: "O5", q: "US government websites usually end in:", options: [".win", ".shop", ".gov", ".xyz"], answer: 2, why: ".gov is used by US government sites." },
      { objective: "O6", q: "Which is safe to type into an AI assistant?", options: ["Your Social Security number", "\"[my number]\" as a placeholder", "Your bank password", "Your card's security code"], answer: 1, why: "A placeholder keeps private information out." },
      { objective: "O6", q: "Before using AI-written words for school or work, you should:", options: ["Check the rules and make the words your own", "Hand them in without reading", "Remove your name", "Post them online first"], answer: 0, why: "Honest use means following the rules and editing the work." },
      { objective: "O6", q: "An AI answer seems unfair to a group of people. What do you do?", options: ["Share it widely", "Question it and check other sources", "Assume it is true", "Change your password"], answer: 1, why: "Bias can show up in answers; question it." },
      { objective: "O6", q: "A call in a relative's voice asks you to send money right now. You should:", options: ["Send it quickly", "Read them your card number", "Give them a code from your phone", "Hang up and call the relative back on a number you know"], answer: 3, why: "AI can fake voices; calling back on a known number stops the scam." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      5,
      6,
      9,
      11,
      13,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Explaining AI",
        objective: "O1",
        notYet: "The explanation is missing, wrong, or does not say why the answer was checked.",
        meets: "Three plain sentences say what AI is, that it guesses from patterns, and why the answer was checked.",
        exceeds: "Also gives an everyday example and mentions that poor data can make answers unfair."
      },
      {
        name: "Clear prompt",
        objective: "O4",
        notYet: "The prompt is one or two words or misses what is needed.",
        meets: "The prompt says what you need, the situation and how you want the answer.",
        exceeds: "The prompt also sets a length or format and gets a useful first answer."
      },
      {
        name: "Improving the answer",
        objective: "O5",
        notYet: "No follow-up was asked, or the first answer was used as it was.",
        meets: "Two follow-ups were asked, one at a time, and the answer got better.",
        exceeds: "The final words were also changed so they sound like you."
      },
      {
        name: "Checking a fact",
        objective: "O5",
        notYet: "No fact was checked, or it was checked only by asking the AI again.",
        meets: "One fact was checked on an official or trusted website.",
        exceeds: "Every fact about dates, money, rules or phone numbers was checked, and any difference was fixed."
      },
      {
        name: "Privacy and honesty",
        objective: "O6",
        notYet: "The prompt contains a private detail such as an ID number, password or full address.",
        meets: "The prompt has no private information; any personal detail is a placeholder.",
        exceeds: "Also checked the school's or job's rules on AI help where they apply."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and score Meets or Exceeds on every rubric row of the final task",
      "Learners who report using a free AI assistant for a real task in the 30 days after the course (follow-up survey)",
      "Learners who report checking an AI answer on an official source, or spotting and avoiding a scam call or message",
      "Learners who go on to take a next course, such as Digital Literacy Basics or Intro to Cybersecurity"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, tablet or computer with internet and a web browser",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini (no payment needed)",
      "Paper and pen to note the prompt, follow-ups and the fact that was checked",
      "About 60 minutes in total, in short sessions"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then teach one chapter per session with the \"Try it now\" tasks done in pairs; pair learners who are new to devices with a more confident partner.",
      "Some free assistants ask learners to sign in; let each learner decide whether to make an account, and show the ones that work without signing in where available.",
      "Before anyone sends a prompt, ask them to read it aloud and replace any private detail with a placeholder such as \"[my number]\".",
      "Have one official website ready for each group's checking task (for example a .gov page or a local library site) so learners practise checking a real fact.",
      "Discuss voice-cloning scams openly; tell learners to hang up and call family back on a known number, and give the local fraud reporting contact if your program has one."
    ]
  }
};
