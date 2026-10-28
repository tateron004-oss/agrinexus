"use strict";

// Koach Learn course: Re-Entry -> "Introduction to AI and Digital Confidence" (the first course on the owner's list for the Re-Entry category, 27 October 2026). Written as a skill-building course: by the end the
// student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "reentry-ai-digital-confidence",
  category: "Re-Entry",
  name: "Introduction to AI and Digital Confidence",
  skills: "Opening a free AI assistant, Asking clear questions, Improving an answer, Checking an answer, Keeping private information safe",
  outcome: "use a free AI assistant on a phone or a library computer to get help with an everyday task: ask a clear question, improve the answer, check it before you trust it, and keep your private information out of it.",
  about: [
    "Technology may have changed a lot while you were away. This course starts from the beginning and goes one small step at a time.",
    "You will learn what an AI assistant is, how to open one for free, how to ask it for help, how to check what it tells you, and how to keep your private information safe.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Use an AI assistant to write a short, polite message asking a business whether it is hiring. Ask for it in simple words, ask for one change to make it better, check that it has no private information in it, and read it out loud to make sure it sounds like you.",
  chapters: [
    {
      name: "Chapter 1: Getting started with AI",
      lessons: [
        {
          title: "What an AI assistant is, and what it is not",
          minutes: 4,
          goal: "Explain in your own words what an AI assistant can and cannot do.",
          text: [
            "An AI assistant is a computer program you can type or talk to in everyday words. You ask a question, and it writes an answer. Well-known free ones include ChatGPT, Microsoft Copilot and Google Gemini.",
            "It learned from a huge amount of writing, so it is good at explaining things, writing drafts, making lists and plans, and putting hard words into simple words.",
            "It is not a person, a lawyer, a doctor or a government office. It does not know you, and it can be wrong, even when it sounds sure. You stay in charge: you decide what to ask, and you decide what to believe."
          ],
          words: [["AI", "short for artificial intelligence: computer programs that do tasks that usually need a person, like writing or answering questions."], ["AI assistant", "an AI program you chat with by typing or talking."]],
          slides: [
            { title: "An AI assistant is...", bullets: ["A computer program you chat with", "You type or say a question in everyday words", "It writes an answer back in seconds"] },
            { title: "It is good at", bullets: ["Explaining things in simple words", "Writing drafts: letters, messages, résumés", "Making lists, plans and schedules"] },
            { title: "It is NOT", bullets: ["A person, lawyer, doctor or government office", "Always right, even when it sounds sure", "The one in charge: you are"] }
          ],
          tryIt: "Write down three things in your own life an AI assistant could help with this week, for example a grocery list, a message to a family member, or explaining a letter you got.",
          youCanNow: "say what an AI assistant is, name three things it can help with, and say why you still check what it tells you."
        },
        {
          title: "Opening a free AI assistant on a phone or library computer",
          minutes: 5,
          goal: "Open a free AI assistant and find the box where you type.",
          text: [
            "You can use an AI assistant on a smartphone or on any computer with internet, such as one at a public library or a job center.",
            "On a phone: open the app store (Google Play on Android, the App Store on iPhone), search for the assistant's name, and install the app made by the real company (OpenAI for ChatGPT, Microsoft for Copilot, Google for Gemini). Only install from the official app store.",
            "On a computer: open the web browser and type the address: chatgpt.com, copilot.microsoft.com or gemini.google.com. Some let you chat without an account; some ask you to sign in.",
            "On a shared or library computer, do not let the browser save your password, and sign out and close the browser when you finish."
          ],
          steps: ["Choose a phone or a computer with internet.", "Phone: install the official app from the app store. Computer: type the web address in the browser.", "Look for the message box near the bottom of the screen. It often says \"Ask anything\" or \"Message\".", "On a shared computer: sign out and close the browser when you are done."],
          words: [["Web browser", "the program you use to visit websites, like Chrome, Edge or Safari."], ["App store", "the official place on a phone to get apps safely."]],
          slides: [
            { title: "Where you can use it", bullets: ["Your smartphone", "A public library computer", "A job center or reentry center computer"] },
            { title: "On a phone", bullets: ["Open the official app store", "Search the assistant's name", "Install the app from the real company"] },
            { title: "On a computer", bullets: ["Open the web browser", "Type chatgpt.com, copilot.microsoft.com or gemini.google.com", "Find the message box at the bottom"] },
            { title: "On a shared computer", bullets: ["Do not save your password", "Sign out when you finish", "Close the browser"] }
          ],
          tryIt: "Open one free AI assistant on a phone or computer. Find the message box and type: Hello, I am learning to use AI. Read what it says back.",
          youCanNow: "open a free AI assistant on a phone or a computer, find where to type, and leave a shared computer safely."
        },
        {
          title: "Asking a clear question",
          minutes: 5,
          goal: "Write a clear request that gets a useful answer the first time.",
          text: [
            "What you type to an AI assistant is called a prompt. A clear prompt gets a better answer.",
            "A good prompt has three parts: what you need, a little about your situation (without private details), and how you want the answer. For example: \"I start a new warehouse job Monday at 7 am. Make me a simple checklist for the night before. Use short sentences.\"",
            "A weak prompt is too short, like \"job tips\". The assistant has to guess what you mean, so the answer is general."
          ],
          steps: ["Say what you need.", "Add a little about your situation, with no private details.", "Say how you want the answer: short, simple words, steps, a list or a table."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."]],
          slides: [
            { title: "A prompt is what you type", bullets: ["Clear prompt = better answer", "Short, vague prompt = general answer"] },
            { title: "Three parts of a good prompt", bullets: ["1. What you need", "2. A little about your situation", "3. How you want the answer"] },
            { title: "Weak vs clear", bullets: ["Weak: \"job tips\"", "Clear: \"I start a warehouse job Monday at 7 am.", "Make me a checklist for the night before.", "Use short sentences.\""] }
          ],
          tryIt: "Pick one real task from your list in Lesson 1. Write a prompt with all three parts, send it, and read the answer.",
          youCanNow: "write a prompt with what you need, your situation and how you want the answer."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting started with AI",
        questions: [
          { q: "What is an AI assistant?", options: ["A person who answers your messages", "A computer program you chat with in everyday words", "A government website", "A type of phone"], answer: 1, why: "An AI assistant is a computer program you type or talk to; it writes answers back." },
          { q: "An AI assistant sounds very sure about an answer. What should you do?", options: ["Trust it, because it sounds sure", "Never use AI again", "Ask a friend to trust it for you", "Still check it, because it can be wrong"], answer: 3, why: "AI can be wrong even when it sounds sure. You stay in charge and check." },
          { q: "Where should you install an AI app on a phone?", options: ["From the official app store, made by the real company", "From any website", "From a link in a text message", "From a pop-up ad"], answer: 0, why: "The official app store and the real company's app are the safe choice." },
          { q: "You used AI on a library computer. What do you do when you finish?", options: ["Leave it open for the next person", "Save your password so it is faster next time", "Sign out and close the browser", "Turn off the library's internet"], answer: 2, why: "Signing out and closing the browser keeps the next person out of your account." },
          { q: "Which is the clearest prompt?", options: ["\"help\"", "\"job tips\"", "\"I start a warehouse job Monday at 7 am. Make a checklist for the night before in short sentences.\"", "\"tell me everything\""], answer: 2, why: "It says what you need, your situation, and how you want the answer." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI with confidence",
      lessons: [
        {
          title: "Making an answer better",
          minutes: 4,
          goal: "Ask follow-up questions to improve an answer.",
          text: [
            "You do not have to accept the first answer. An AI assistant remembers what you said earlier in the same chat, so you can ask it to change its answer.",
            "Useful follow-ups: \"Make it shorter.\" \"Use simpler words.\" \"Explain step 2 more.\" \"Give me an example.\" \"Put it in a list.\" \"Make it sound more polite.\"",
            "If the chat goes off track, start a new chat and write a clearer prompt."
          ],
          steps: ["Read the first answer.", "Decide what you want changed.", "Ask for that one change.", "Repeat until the answer works for you."],
          words: [["Follow-up", "a second question that builds on the answer you got."]],
          slides: [
            { title: "The first answer is a draft", bullets: ["You can ask for changes", "It remembers the same chat"] },
            { title: "Follow-ups that work", bullets: ["\"Make it shorter.\"", "\"Use simpler words.\"", "\"Explain step 2 more.\"", "\"Give me an example.\""] },
            { title: "Off track?", bullets: ["Start a new chat", "Write a clearer prompt"] }
          ],
          tryIt: "Take the answer from Lesson 3. Ask for two changes, one at a time, such as \"make it shorter\" and then \"use simpler words\". Compare the first and last answers.",
          youCanNow: "improve an AI answer by asking clear follow-up questions."
        },
        {
          title: "Checking the answer before you trust it",
          minutes: 5,
          goal: "Check an AI answer against a trusted source.",
          text: [
            "AI assistants sometimes make things up, such as a wrong phone number, an office that does not exist, an old rule or a wrong date. This is sometimes called a hallucination.",
            "Always check anything about money, the law, your health, government benefits, dates, addresses and phone numbers. Check with the official source: a government website (the address usually ends in .gov), the office itself, or a person you trust such as a case manager, reentry counselor or librarian.",
            "A good habit: ask the assistant \"Where can I check this?\" and then go to that official page yourself, instead of trusting a link without looking."
          ],
          steps: ["Find the facts in the answer: numbers, dates, names, rules.", "Look them up on the official site (often ending in .gov) or call the office.", "If they do not match, trust the official source.", "For big decisions, also ask a person you trust."],
          words: [["Hallucination", "when an AI writes something that sounds true but is made up."], [".gov", "the ending of official United States government website addresses."]],
          slides: [
            { title: "AI can make things up", bullets: ["Wrong phone numbers or addresses", "Old rules or wrong dates", "Offices that do not exist"] },
            { title: "Always check", bullets: ["Money and benefits", "Law and rules", "Health", "Dates, addresses, phone numbers"] },
            { title: "How to check", bullets: ["Official site, often ending in .gov", "Call the office", "Ask a case manager or librarian"] }
          ],
          tryIt: "Ask an AI assistant for the phone number or website of a real office near you (for example your state's motor vehicle office). Then find the office's official website yourself and see if the answer matches.",
          youCanNow: "spot facts that need checking and check them with an official source."
        },
        {
          title: "Keeping your private information safe",
          minutes: 5,
          goal: "Use AI without sharing private information, and spot AI-powered scams.",
          text: [
            "Do not type private information into an AI assistant: your Social Security number, ID numbers, case or inmate numbers, passwords, bank or card numbers, or full home address. You can get the help you need without them. Write \"[my number]\" instead.",
            "Scammers use AI too. They can write messages that look real and even copy a family member's voice on a phone call. Be careful with any message that rushes you, asks for money or gift cards, or asks for a code that was sent to your phone.",
            "If something feels wrong, stop. Hang up, and call the person or office back using a number you already know is real."
          ],
          steps: ["Before you send a prompt, read it for private information and take it out.", "Use a placeholder like \"[my number]\".", "Treat rushed messages, money requests and code requests as warning signs.", "Call back using a number you know is real."],
          words: [["Private information", "details that could let someone pretend to be you or take your money."], ["Scam", "a trick to steal money or information."]],
          slides: [
            { title: "Never type into AI", bullets: ["Social Security or ID numbers", "Case or inmate numbers", "Passwords, bank or card numbers"] },
            { title: "Use a placeholder", bullets: ["Write \"[my number]\" instead", "You still get the help you need"] },
            { title: "Scam warning signs", bullets: ["They rush you", "They ask for money or gift cards", "They ask for a code sent to your phone"] },
            { title: "When in doubt", bullets: ["Stop", "Hang up", "Call back on a number you know is real"] }
          ],
          tryIt: "Final task: use an AI assistant to write a short, polite message asking a business whether it is hiring. Ask for one change to make it better, check it has no private information, and read it out loud.",
          youCanNow: "use an AI assistant for a real task while keeping your private information safe, and spot the signs of a scam."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI with confidence",
        questions: [
          { q: "The first answer is too long. What is the best next step?", options: ["Ask: \"Make it shorter\"", "Give up", "Copy it anyway", "Turn off the phone"], answer: 0, why: "A follow-up asks the assistant to change its answer." },
          { q: "Which of these should you ALWAYS check with an official source?", options: ["A joke", "A grocery list", "A poem", "A government office phone number"], answer: 3, why: "Phone numbers, dates, money, law and benefits can be wrong and must be checked." },
          { q: "What does a \"hallucination\" mean when talking about AI?", options: ["The AI is tired", "The AI wrote something that sounds true but is made up", "The screen is broken", "A type of app"], answer: 1, why: "AI can make up facts that sound real." },
          { q: "What should you write instead of your Social Security number in a prompt?", options: ["The real number", "A placeholder like \"[my number]\"", "Half of the number", "Your bank number"], answer: 1, why: "A placeholder lets you get help without sharing private information." },
          { q: "You get a call in a family member's voice asking for gift cards right away. What do you do?", options: ["Buy the gift cards fast", "Give them the code from your phone", "Send your bank number", "Hang up and call them back on a number you know is real"], answer: 3, why: "Scammers can copy voices. Rushing and gift cards are warning signs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI and Digital Confidence",
    questions: [
      { q: "An AI assistant is best described as:", options: ["A computer program you chat with", "A government worker", "A phone company", "A website that only sells things"], answer: 0, why: "It is a program you type or talk to." },
      { q: "Which task is an AI assistant good at?", options: ["Making legal decisions for you", "Signing documents for you", "Explaining a hard letter in simple words", "Knowing your private history"], answer: 2, why: "Explaining in simple words is one of its strengths." },
      { q: "Who is in charge when you use an AI assistant?", options: ["The AI", "The app store", "You", "Nobody"], answer: 2, why: "You decide what to ask and what to believe." },
      { q: "Which is a well-known free AI assistant?", options: ["Microsoft Copilot", "A calculator", "A text message", "A printer"], answer: 0, why: "Copilot, ChatGPT and Gemini are well-known free assistants." },
      { q: "On a phone, the safe place to get an AI app is:", options: ["A link in a text from a stranger", "Any website", "A pop-up ad", "The official app store"], answer: 3, why: "Install only from the official app store." },
      { q: "Which web address opens an AI assistant on a computer?", options: ["myjob.gift", "copilot.microsoft.com", "freemoney.win", "none of these"], answer: 1, why: "copilot.microsoft.com is Microsoft's official address for Copilot." },
      { q: "Where do you usually type your question?", options: ["The address bar of the phone", "The message box near the bottom of the screen", "The battery icon", "The camera"], answer: 1, why: "The message box often says \"Ask anything\" or \"Message\"." },
      { q: "After using a library computer you should:", options: ["Save your password", "Write your password on a note", "Leave your account open", "Sign out and close the browser"], answer: 3, why: "This keeps your account safe from the next person." },
      { q: "What is a prompt?", options: ["What you type or say to an AI assistant", "A reminder alarm", "A type of phone charger", "A website ending"], answer: 0, why: "A prompt is your request to the AI." },
      { q: "A good prompt includes:", options: ["Only one word", "Your Social Security number", "What you need, your situation, and how you want the answer", "Your password"], answer: 2, why: "Those three parts get a useful answer." },
      { q: "Which prompt will probably get the most useful answer?", options: ["\"resume\"", "\"help me\"", "\"I worked 3 years in a kitchen. Help me list my skills for a cook job in short bullet points.\"", "\"stuff\""], answer: 2, why: "It gives the need, the situation and the format." },
      { q: "The first AI answer is not quite right. You can:", options: ["Ask a follow-up to change it", "Only accept it", "Pay to fix it", "Restart your phone"], answer: 0, why: "Follow-ups like \"use simpler words\" improve the answer." },
      { q: "Which is a good follow-up?", options: ["\"Send money.\"", "\"Here is my bank number.\"", "\"Delete my phone.\"", "\"Explain step 2 more.\""], answer: 3, why: "It asks for a clear change to the answer." },
      { q: "If a chat goes off track, a good move is to:", options: ["Type your password", "Start a new chat with a clearer prompt", "Keep repeating the same words", "Never use AI again"], answer: 1, why: "A fresh chat with a clearer prompt usually works better." },
      { q: "When the AI gives an office's phone number, you should:", options: ["Call it without checking", "Check it on the office's official website", "Post it online", "Give it your ID number"], answer: 1, why: "AI can give wrong numbers; check the official source." },
      { q: "Official United States government websites usually end in:", options: [".xyz", ".win", ".gift", ".gov"], answer: 3, why: ".gov is used by US government sites." },
      { q: "Which should you NEVER type into an AI assistant?", options: ["Your bank card number", "\"Make it shorter\"", "\"Give me an example\"", "\"Use simpler words\""], answer: 0, why: "Bank and card numbers are private information." },
      { q: "A message rushes you to pay with gift cards. This is:", options: ["A normal bill", "A job offer", "A warning sign of a scam", "A government rule"], answer: 2, why: "Rushing and gift cards are common scam signs." },
      { q: "Someone asks for the code that was just texted to your phone. You should:", options: ["Read it to them", "Post it online", "Never share it", "Text it to friends"], answer: 2, why: "That code protects your account. Real offices do not ask for it." },
      { q: "If something feels wrong on a call, the safest step is to:", options: ["Hang up and call back on a number you know is real", "Keep talking", "Give them your address", "Send a small payment"], answer: 0, why: "Calling back on a known number stops most scams." }
    ]
  }
};
