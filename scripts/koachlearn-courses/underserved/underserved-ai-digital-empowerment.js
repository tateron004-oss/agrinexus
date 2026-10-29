"use strict";

// Koach Learn course: Undeserved Community -> "Introduction to AI and Digital Empowerment". Skill-building course (shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js).
// Audience: adults in low-income and underserved communities, some new to technology. Free tools, library and community-center access.

module.exports = {
  id: "underserved-ai-digital-empowerment",
  category: "Undeserved Community",
  name: "Introduction to AI and Digital Empowerment",
  skills: "Getting online for free or low cost, Opening a free AI assistant, Asking for help in plain words, Turning a hard letter into a to-do list, Checking answers and protecting your information",
  outcome: "get online at a library, community center or on your phone, and use a free AI assistant to turn a confusing letter or notice into plain words and a short to-do list, without sharing private information.",
  about: [
    "This course is for anyone who feels left behind by technology, or who has been told that computers and AI are \"not for people like us\". They are for you, and many of the best tools are free.",
    "You will find free or low-cost ways to get online, open a free AI assistant, and use it for real family tasks: reading a hard letter, planning a busy week, or writing a message to a school or landlord.",
    "Each lesson takes about five minutes. Read it, look at the slides, then do the \"Try it now\" task. A short knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Take a real letter or notice you received (from a school, clinic, landlord or utility company). Cover or leave out every private number and name. Ask a free AI assistant to explain it in plain words and make a short to-do list with dates. Then check one date or phone number on the official website or by calling the office.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in underserved communities who feel left behind by technology: low-income families, older adults, parents, people without a home computer, and second-language speakers.",
    startingPoint: "Can make calls and send texts on a phone. Little or no use of computers, web browsers or AI assistants, and some have been told technology is \"not for people like us\".",
    gap: "Schools, clinics, landlords and agencies send letters and expect people to act online. Learners need a free place to get online and a safe way to use a free AI assistant to understand letters and plan what to do, without being misled by wrong answers or scams.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: may only have a basic phone or a time-limited library computer",
      "Cost: only free tools and free places to get online",
      "High scam and privacy risk: no real private numbers or names in any practice task",
      "Time: short lessons that fit around work, family and appointments"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Where you live", action: "name free places to get online and one program that can lower your phone or internet bill", standard: "naming at least two places with their hours" },
    { id: "O2", condition: "Given a list of everyday tasks", action: "identify which ones an AI assistant can help with and who decides what to do with its answer", standard: "getting at least 4 of 5 right" },
    { id: "O3", condition: "Using a library computer or a phone", action: "open a free AI assistant from its official app or website and ask a question with what you need, your situation and how you want the answer", standard: "without help" },
    { id: "O4", condition: "Given a confusing letter or notice", action: "ask an AI assistant to explain it in plain words and make a to-do list with dates, using placeholders for private details", standard: "with no real names or numbers in the prompt" },
    { id: "O5", condition: "Given an AI answer with a date, phone number or rule", action: "check it against the letter, the official .gov website, the office or 211", standard: "before you act on it" },
    { id: "O6", condition: "When you write a prompt or get an urgent message", action: "keep private information out and spot the warning signs of a scam", standard: "sharing no private numbers and contacting agencies only through a number or site you found yourself" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting connected",
      lessons: [
        {
          objectives: ["O1"],
          title: "Free and low-cost ways to get online",
          minutes: 5,
          goal: "Name two places near you where you can use the internet for free, and one program that can lower your phone or internet bill.",
          text: [
            "You do not need to own a computer to use technology. Public libraries have free computers and free Wi-Fi, and many also lend laptops or hotspots. Community centers, job centers and some churches have computers you can use too.",
            "Lifeline is a federal program that lowers the monthly cost of phone or internet service for people with low income or who take part in programs like SNAP or Medicaid. You apply online, then pick a phone or internet company that takes part.",
            "Library staff can help you get started. Asking for help is normal; helping people with computers is part of their job."
          ],
          steps: ["Look up your nearest public library and its hours.", "Ask if it lends laptops or hotspots, and if it offers free computer classes.", "If money is tight, read about Lifeline on the official site and see if you qualify.", "Write down the place and time you will go online this week."],
          words: [["Wi-Fi", "a way to connect to the internet without a cable."], ["Hotspot", "a small device (or a phone setting) that shares an internet connection with other devices."], ["Lifeline", "a federal program that gives a monthly discount on phone or internet service to people who qualify."]],
          sources: [{ name: "Lifeline Support (USAC, the official Lifeline site)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "You can get online without owning a computer", bullets: ["Public libraries: free computers and Wi-Fi", "Community centers and job centers", "Some libraries lend laptops and hotspots"] },
            { title: "Lower your phone or internet bill", bullets: ["Lifeline gives a monthly discount to people who qualify", "You may qualify through income, SNAP or Medicaid", "Apply on the official Lifeline site"] },
            { title: "Ask for help", bullets: ["Library staff help people with computers every day", "Ask about free computer classes", "Asking is a smart move, not a weakness"] }
          ],
          tryIt: "Write down two places near you where you can use the internet for free, with their hours. If your phone or internet bill is hard to pay, open lifelinesupport.org and read who qualifies.",
          youCanNow: "name free places to get online and know where to learn about Lifeline.",
          quickCheck: [
            { objective: "O1", q: "What is a hotspot that some libraries lend?", options: ["A small device that lets you get on the internet", "A heater for cold rooms", "A free phone plan", "A computer class"], answer: 0, why: "A hotspot is a small device that gives you internet so you can get online away from the library." },
            { objective: "O1", q: "Your internet bill is hard to pay and you get SNAP. What do you do?", options: ["Cancel the internet for good", "Read about Lifeline on the official site to see if you qualify", "Ask a stranger online to pay it", "Wait for the company to call you"], answer: 1, why: "Lifeline lowers the monthly cost for people with low income or in programs like SNAP." }
          ]
        },
        {
          objectives: ["O2"],
          title: "What AI is, in everyday words",
          minutes: 4,
          goal: "Explain what an AI assistant is and name three ways it could help your family.",
          text: [
            "AI stands for artificial intelligence. An AI assistant is a program you can write to, or talk to, in your own words. It writes back an answer in seconds. Free ones include ChatGPT, Microsoft Copilot and Google Gemini.",
            "It can explain a hard letter, write a short message, plan meals on a budget, help a child understand homework, or translate between languages.",
            "It is a helper, not a boss. It does not know your life, and it sometimes gets facts wrong. You decide what to ask and what to use."
          ],
          words: [["AI", "artificial intelligence: computer programs that do tasks like writing and answering questions."], ["AI assistant", "an AI program you chat with by typing or talking."]],
          slides: [
            { title: "An AI assistant is a helper", bullets: ["You write or talk in your own words", "It writes an answer in seconds", "Free ones: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Ways it can help your family", bullets: ["Explain a hard letter", "Plan meals on a budget", "Help with homework questions", "Translate a message"] },
            { title: "You are the boss", bullets: ["It does not know your life", "It can get facts wrong", "You decide what to ask and what to use"] }
          ],
          tryIt: "Write down three tasks from your own week where an AI assistant could help you, your family or your community group.",
          youCanNow: "say what an AI assistant is and name three ways it could help you.",
          quickCheck: [
            { objective: "O2", q: "What is an AI assistant?", options: ["A person who reads your mail", "A government office", "A program you write or talk to in your own words", "A phone company"], answer: 2, why: "An AI assistant is a program that writes back an answer when you ask in your own words." },
            { objective: "O2", q: "Your child is stuck on homework. How could an AI assistant help?", options: ["Do the whole test for them", "Sign the school forms", "Call the teacher for you", "Explain the topic in simpler words"], answer: 3, why: "AI can explain things in simpler words; you and your child stay in charge." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Opening a free AI assistant and asking your first question",
          minutes: 5,
          goal: "Open a free AI assistant and ask it a clear question about a real task.",
          text: [
            "On a library or community-center computer, open the web browser and go to copilot.microsoft.com, chatgpt.com or gemini.google.com. On a phone, install the official app from the app store.",
            "Look for the box where you type. Ask your question the way you would ask a helpful neighbor: say what you need, a little about your situation, and how you want the answer.",
            "For example: \"I have $60 for groceries this week for a family of four. Give me five cheap dinner ideas with a shopping list. Use simple words.\""
          ],
          steps: ["Open the browser or the official app.", "Find the message box.", "Type what you need, your situation (no private details), and how you want the answer.", "Press Enter or tap the send arrow, then read the answer."],
          words: [["Browser", "the program you use to visit websites, like Chrome, Edge or Safari."], ["Prompt", "the question or request you type to an AI assistant."]],
          slides: [
            { title: "Open it", bullets: ["Computer: copilot.microsoft.com, chatgpt.com or gemini.google.com", "Phone: the official app from the app store"] },
            { title: "Ask like you ask a neighbor", bullets: ["What you need", "A little about your situation", "How you want the answer"] },
            { title: "Example", bullets: ["\"I have $60 for groceries for a family of four.", "Give me five cheap dinners and a shopping list.", "Use simple words.\""] }
          ],
          tryIt: "Open a free AI assistant. Ask it for help with one task from your list in Lesson 2, using all three parts of a good question. Read the answer.",
          youCanNow: "open a free AI assistant and ask a clear question that gets a useful answer.",
          quickCheck: [
            { objective: "O3", q: "On a library computer, where do you type copilot.microsoft.com?", options: ["In the web browser's address bar", "In a text message", "In the printer menu", "In an email to the library"], answer: 0, why: "You open the web browser and type the address to reach the AI assistant." },
            { objective: "O3", q: "You want help planning a birthday party on a small budget. Which question is best?", options: ["\"Party.\"", "\"Help me plan a party for 8 kids with $50. Give me a simple list.\"", "\"Tell me everything.\"", "\"What is a party?\""], answer: 1, why: "It says what you need, your situation and how you want the answer." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting connected",
        questions: [
          { objective: "O1", q: "You do not own a computer. Where can you usually use one for free?", options: ["A public library", "A car dealership", "A bank vault", "A gas station"], answer: 0, why: "Public libraries offer free computers and Wi-Fi." },
          { objective: "O1", q: "What does Lifeline do?", options: ["Gives you a free car", "Lowers the monthly cost of phone or internet service for people who qualify", "Pays your rent", "Gives you a new computer every year"], answer: 1, why: "Lifeline is a federal discount on phone or internet service." },
          { objective: "O2", q: "Which is a free AI assistant?", options: ["A calculator app", "A printer", "Microsoft Copilot", "A text message"], answer: 2, why: "Copilot, ChatGPT and Gemini are well-known free AI assistants." },
          { objective: "O2", q: "Who decides what to do with an AI assistant's answer?", options: ["The AI", "The app store", "The library", "You"], answer: 3, why: "The AI is a helper; you stay in charge." },
          { objective: "O3", q: "Which question will get the most useful answer?", options: ["\"food\"", "\"I have $60 for groceries for four people. Give me five cheap dinners and a list in simple words.\"", "\"help\"", "\"tell me stuff\""], answer: 1, why: "It says what you need, your situation and how you want the answer." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI for real life, safely",
      lessons: [
        {
          objectives: ["O4"],
          title: "Turning a hard letter into plain words",
          minutes: 5,
          goal: "Use an AI assistant to explain a confusing letter and make a to-do list.",
          text: [
            "Letters from schools, clinics, landlords and agencies can be full of hard words. An AI assistant can put them into plain words and pull out what you need to do and by when.",
            "First, take out private details. Type or paste only the words that explain what the letter is about, and replace names and numbers with placeholders like [my name] or [account number].",
            "Then ask: \"Explain this letter in plain words. What do I need to do, and by what date? Make a short to-do list.\""
          ],
          steps: ["Read the letter once and circle the parts you do not understand.", "Copy or type those parts, replacing names and numbers with placeholders.", "Ask the AI to explain it in plain words and make a to-do list with dates.", "Ask a follow-up if anything is still unclear, like \"What does 'recertification' mean?\""],
          words: [["Placeholder", "a stand-in like [my name] that you type instead of real private details."], ["Follow-up", "a second question that builds on the first answer."]],
          slides: [
            { title: "Hard letters, plain words", bullets: ["School, clinic, landlord or agency letters", "AI can explain hard words", "It can list what to do and by when"] },
            { title: "Take out private details first", bullets: ["Replace names with [my name]", "Replace numbers with [account number]", "Keep only the words that explain the letter"] },
            { title: "What to ask", bullets: ["\"Explain this in plain words.\"", "\"What do I need to do, and by when?\"", "\"Make a short to-do list.\""] }
          ],
          tryIt: "Choose a letter or notice you have (or a sample from a school website). Remove private details, then ask an AI assistant to explain it and make a to-do list.",
          youCanNow: "turn a confusing letter into plain words and a to-do list, with your private details left out.",
          quickCheck: [
            { objective: "O4", q: "Which is a good placeholder in a prompt?", options: ["Your real account number", "Your child's full name", "[account number]", "Your home address"], answer: 2, why: "A placeholder like [account number] stands in for the real detail so it stays private." },
            { objective: "O4", q: "The AI's explanation still uses the word \"recertification\" and you do not know it. What do you do?", options: ["Give up on the letter", "Guess what it means", "Paste in your case number", "Ask: \"What does recertification mean?\""], answer: 3, why: "A follow-up question asks the AI to explain the hard word." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Checking what AI tells you",
          minutes: 4,
          goal: "Check a date, phone number or rule from an AI answer with the official source.",
          text: [
            "AI assistants can be wrong. They might give an old phone number, the wrong deadline, or a rule from a different state.",
            "Before you act on anything about money, benefits, health, school, housing or the law, check it. Look at the letter itself, the official website (government sites in the United States usually end in .gov), or call the office.",
            "If you cannot find the answer, call 211. It is a free, confidential line that connects you to local help with food, housing, utilities and more."
          ],
          steps: ["Circle every date, number and rule in the AI answer.", "Compare each one with the original letter.", "Check the official website or call the office.", "If you are stuck, call 211 or ask a librarian."],
          words: [[".gov", "the ending of official United States government website addresses."], ["211", "a free, confidential phone line that connects people to local help."]],
          sources: [{ name: "211.org: About 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "AI can be wrong", bullets: ["Old phone numbers", "Wrong deadlines", "Rules from a different state"] },
            { title: "Always check these", bullets: ["Money and benefits", "Health and school", "Housing and the law"] },
            { title: "Where to check", bullets: ["The original letter", "The official website, often ending in .gov", "Call the office, or call 211 for local help"] }
          ],
          tryIt: "Take the to-do list from Lesson 4. Check one date or phone number against the original letter or the official website.",
          youCanNow: "check an AI answer against the official source before you act on it.",
          quickCheck: [
            { objective: "O5", q: "What is 211?", options: ["A free, confidential line that connects you to local help", "The police emergency number", "A paid legal service", "A shopping website"], answer: 0, why: "211 is free and confidential and connects people to local help like food and utilities." },
            { objective: "O5", q: "The AI gives a phone number for the housing office. What do you do before calling?", options: ["Call it right away", "Check it on the office's official website or on your letter", "Post it on social media", "Ask the AI if it is sure"], answer: 1, why: "AI can give old or wrong numbers, so you check the official source first." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Protecting your information and your family",
          minutes: 5,
          goal: "Keep private information out of AI tools and spot a scam message.",
          text: [
            "Never type these into an AI assistant: Social Security numbers, case or benefit numbers, bank or card numbers, passwords, or your children's full names with their school.",
            "Scammers target families who are struggling. Watch out for messages that promise free money or government grants, say your benefits will stop unless you act right now, or ask you to pay with gift cards.",
            "Real agencies do not ask for payment in gift cards. If a message worries you, do not click its links. Go to the official website yourself or call a number you already know."
          ],
          steps: ["Read every prompt before you send it and remove private details.", "Be suspicious of messages that rush you or promise free money.", "Never pay with gift cards because a message told you to.", "Contact the agency using a number or website you found yourself."],
          words: [["Scam", "a trick to steal money or information."], ["Phishing", "a fake message that tries to get you to click a link or share private details."]],
          slides: [
            { title: "Never type into AI", bullets: ["Social Security, case or benefit numbers", "Bank or card numbers, passwords", "Your children's full names and school"] },
            { title: "Scam warning signs", bullets: ["Promises of free money or grants", "\"Your benefits will stop today\"", "Pay with gift cards"] },
            { title: "Stay safe", bullets: ["Do not click links in worrying messages", "Go to the official site yourself", "Call a number you already know is real"] }
          ],
          tryIt: "Final task: take a real letter or notice, remove all private details, ask an AI assistant to explain it and make a to-do list with dates, then check one date or phone number with the official source.",
          youCanNow: "use AI for a real family task while keeping your information safe and spotting scams.",
          quickCheck: [
            { objective: "O6", q: "Which is a warning sign of a scam?", options: ["A letter that matches the agency's website", "A reminder from your child's school office", "A message that rushes you to pay with gift cards", "A bill with the right amount"], answer: 2, why: "Real agencies do not ask for gift cards or rush you to pay right now." },
            { objective: "O6", q: "A text says you won a government grant and has a link. What do you do?", options: ["Click the link to claim it", "Reply with your bank number", "Forward it to friends", "Do not click; look up the agency yourself"], answer: 3, why: "Going to the official site or a number you found yourself keeps you safe from fake links." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI for real life, safely",
        questions: [
          { objective: "O4", q: "Before pasting a letter into an AI assistant, what should you do?", options: ["Add your Social Security number", "Replace names and numbers with placeholders", "Add your bank details so it can help more", "Nothing"], answer: 1, why: "Placeholders let you get help without sharing private details." },
          { objective: "O5", q: "The AI says your deadline is June 5, but the letter says June 1. Which do you trust?", options: ["The AI", "Neither", "Whichever is later", "The letter or the official office"], answer: 3, why: "The official source wins when the AI disagrees with it." },
          { objective: "O5", q: "What is 211?", options: ["A free, confidential line that connects you to local help", "A bank", "An AI app", "A scam number"], answer: 0, why: "211 connects people to local help with food, housing and more." },
          { objective: "O6", q: "A text says your benefits stop today unless you pay with gift cards. This is:", options: ["A normal notice", "A new rule", "A scam warning sign", "A school message"], answer: 2, why: "Rushing you and asking for gift cards are signs of a scam." },
          { objective: "O6", q: "A message worries you. What is the safest way to check it?", options: ["Click its link", "Reply with your details", "Forward it to friends", "Go to the official website yourself or call a number you know"], answer: 3, why: "Contacting the agency on your own avoids fake links." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI and Digital Empowerment",
    questions: [
      { objective: "O1", q: "Where can you often borrow a laptop or hotspot?", options: ["Some public libraries", "Any grocery store", "A post office box", "A parking lot"], answer: 0, why: "Many libraries lend laptops and hotspots." },
      { objective: "O1", q: "Lifeline helps with:", options: ["Car repairs", "The monthly cost of phone or internet service", "Rent", "Groceries"], answer: 1, why: "Lifeline is a discount on phone or internet service." },
      { objective: "O1", q: "Where should you read about Lifeline?", options: ["A social media ad", "A stranger's text", "The official Lifeline site", "A pop-up window"], answer: 2, why: "Official sites have the real rules and application." },
      { objective: "O2", q: "An AI assistant is:", options: ["A person at the library", "A government office", "A phone company", "A program you chat with in your own words"], answer: 3, why: "It is a computer program you type or talk to." },
      { objective: "O2", q: "Which is something an AI assistant can help with?", options: ["Planning meals on a budget", "Signing your lease", "Going to your appointment", "Paying your bills from your account"], answer: 0, why: "It is good at plans, lists and explanations." },
      { objective: "O2", q: "AI sometimes gets facts wrong. That means you should:", options: ["Never use it", "Check important facts", "Trust it more", "Pay for a better one"], answer: 1, why: "It is useful, but important facts need checking." },
      { objective: "O3", q: "On a library computer, how do you open Copilot?", options: ["Call the library", "Turn the computer off and on", "Type copilot.microsoft.com in the browser", "Send an email"], answer: 2, why: "The web address opens Copilot in the browser." },
      { objective: "O3", q: "A good question to an AI includes:", options: ["Your password", "Only one word", "Your bank number", "What you need, your situation and how you want the answer"], answer: 3, why: "Those three parts get a useful answer." },
      { objective: "O3", q: "Where do you install an AI app on a phone?", options: ["The official app store", "A link in a text from a stranger", "A pop-up ad", "Any website"], answer: 0, why: "The official app store is the safe place." },
      { objective: "O4", q: "What is a placeholder?", options: ["A type of app", "A stand-in like [my name] instead of real details", "A password", "A website"], answer: 1, why: "It keeps private details out of your prompt." },
      { objective: "O4", q: "You want help with a school letter. What is a good request?", options: ["\"letter\"", "\"Here is my child's full name and ID number\"", "\"Explain this in plain words and list what I need to do and by when.\"", "\"school\""], answer: 2, why: "It asks for plain words and a to-do list, without private details." },
      { objective: "O4", q: "The AI uses a hard word you do not know. You can:", options: ["Give up", "Pretend you know it", "Close the browser", "Ask a follow-up: \"What does that word mean?\""], answer: 3, why: "Follow-up questions clear up confusing parts." },
      { objective: "O5", q: "Which should you always check before acting on it?", options: ["A deadline for benefits", "A dinner idea", "A joke", "A list of colors"], answer: 0, why: "Deadlines, money and benefits must be checked with the official source." },
      { objective: "O5", q: "US government websites usually end in:", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: ".gov is used by official US government sites." },
      { objective: "O5", q: "You cannot find local help with your utility bill. Who can you call?", options: ["A number in a pop-up ad", "Nobody", "211", "A random number online"], answer: 2, why: "211 connects you to local help with bills, food and housing." },
      { objective: "O6", q: "Which should you never type into an AI assistant?", options: ["\"Use simple words\"", "\"Make a list\"", "A dinner idea", "Your bank card number"], answer: 3, why: "Bank and card numbers are private." },
      { objective: "O6", q: "A message promises a free government grant if you pay a fee first. It is probably:", options: ["A scam", "A normal program", "A school notice", "A tax refund"], answer: 0, why: "Paying to get \"free\" money is a common scam." },
      { objective: "O6", q: "Real agencies ask for payment in:", options: ["Gift cards", "Never in gift cards", "Gift cards only on weekends", "Cash by text"], answer: 1, why: "Gift card payments are a scam sign." },
      { objective: "O6", q: "A text says \"Click here now or lose your benefits.\" What do you do?", options: ["Click fast", "Reply with your case number", "Do not click; go to the official site or call a known number", "Share it with neighbors"], answer: 2, why: "Contact the agency yourself instead of using the message's link." },
      { objective: "O5", q: "In the final task, after the AI makes your to-do list, you:", options: ["Delete the letter", "Post it online", "Add your bank details", "Check one date or phone number with the official source"], answer: 3, why: "Checking with the official source is the last step." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      7,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Private details removed",
        objective: "O6",
        notYet: "The prompt has a real name, case number, account number or address.",
        meets: "Every private name and number is left out or replaced with a placeholder.",
        exceeds: "Uses clear placeholders like [my name] so the answer still makes sense."
      },
      {
        name: "Clear request",
        objective: "O3",
        notYet: "The request is vague, like \"help with this\".",
        meets: "Says what you need, your situation and how you want the answer.",
        exceeds: "The first answer is close to what you need."
      },
      {
        name: "Plain words and to-do list",
        objective: "O4",
        notYet: "No plain-words explanation or no to-do list.",
        meets: "Gets a plain-words explanation and a short to-do list with dates.",
        exceeds: "Asked a follow-up to explain a hard word or a step."
      },
      {
        name: "Fact checked",
        objective: "O5",
        notYet: "No date or phone number was checked.",
        meets: "Checked one date or phone number against the letter or official source.",
        exceeds: "Can say where they checked it and what they found."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using an AI assistant safely for a letter, form or message within 30 days (follow-up survey)",
      "Learners who apply for Lifeline or start using a library computer or hotspot",
      "Learners who start another Koach Learn course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet, or a library or community-center computer",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "A real letter with private details covered, or a sample letter from a school website",
      "Paper and pen for notes and the to-do list",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Start by saying that technology is for everyone and asking for help is normal.",
      "Bring sample letters so no one has to share their own mail.",
      "Check every prompt before it is sent; no real names, case numbers or account numbers.",
      "Have the 211 and Lifeline information ready, and make sure learners sign out of shared computers.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
