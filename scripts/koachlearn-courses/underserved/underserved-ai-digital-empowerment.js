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
  chapters: [
    {
      name: "Chapter 1: Getting connected",
      lessons: [
        {
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
          youCanNow: "name free places to get online and know where to learn about Lifeline."
        },
        {
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
          youCanNow: "say what an AI assistant is and name three ways it could help you."
        },
        {
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
          youCanNow: "open a free AI assistant and ask a clear question that gets a useful answer."
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting connected",
        questions: [
          { q: "You do not own a computer. Where can you usually use one for free?", options: ["A public library", "A car dealership", "A bank vault", "A gas station"], answer: 0, why: "Public libraries offer free computers and Wi-Fi." },
          { q: "What does Lifeline do?", options: ["Gives you a free car", "Lowers the monthly cost of phone or internet service for people who qualify", "Pays your rent", "Gives you a new computer every year"], answer: 1, why: "Lifeline is a federal discount on phone or internet service." },
          { q: "Which is a free AI assistant?", options: ["A calculator app", "A printer", "Microsoft Copilot", "A text message"], answer: 2, why: "Copilot, ChatGPT and Gemini are well-known free AI assistants." },
          { q: "Who decides what to do with an AI assistant's answer?", options: ["The AI", "The app store", "The library", "You"], answer: 3, why: "The AI is a helper; you stay in charge." },
          { q: "Which question will get the most useful answer?", options: ["\"food\"", "\"I have $60 for groceries for four people. Give me five cheap dinners and a list in simple words.\"", "\"help\"", "\"tell me stuff\""], answer: 1, why: "It says what you need, your situation and how you want the answer." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI for real life, safely",
      lessons: [
        {
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
          youCanNow: "turn a confusing letter into plain words and a to-do list, with your private details left out."
        },
        {
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
          youCanNow: "check an AI answer against the official source before you act on it."
        },
        {
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
          youCanNow: "use AI for a real family task while keeping your information safe and spotting scams."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI for real life, safely",
        questions: [
          { q: "Before pasting a letter into an AI assistant, what should you do?", options: ["Add your Social Security number", "Replace names and numbers with placeholders", "Add your bank details so it can help more", "Nothing"], answer: 1, why: "Placeholders let you get help without sharing private details." },
          { q: "The AI says your deadline is June 5, but the letter says June 1. Which do you trust?", options: ["The AI", "Neither", "Whichever is later", "The letter or the official office"], answer: 3, why: "The official source wins when the AI disagrees with it." },
          { q: "What is 211?", options: ["A free, confidential line that connects you to local help", "A bank", "An AI app", "A scam number"], answer: 0, why: "211 connects people to local help with food, housing and more." },
          { q: "A text says your benefits stop today unless you pay with gift cards. This is:", options: ["A normal notice", "A new rule", "A scam warning sign", "A school message"], answer: 2, why: "Rushing you and asking for gift cards are signs of a scam." },
          { q: "A message worries you. What is the safest way to check it?", options: ["Click its link", "Reply with your details", "Forward it to friends", "Go to the official website yourself or call a number you know"], answer: 3, why: "Contacting the agency on your own avoids fake links." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI and Digital Empowerment",
    questions: [
      { q: "Where can you often borrow a laptop or hotspot?", options: ["Some public libraries", "Any grocery store", "A post office box", "A parking lot"], answer: 0, why: "Many libraries lend laptops and hotspots." },
      { q: "Lifeline helps with:", options: ["Car repairs", "The monthly cost of phone or internet service", "Rent", "Groceries"], answer: 1, why: "Lifeline is a discount on phone or internet service." },
      { q: "Where should you read about Lifeline?", options: ["A social media ad", "A stranger's text", "The official Lifeline site", "A pop-up window"], answer: 2, why: "Official sites have the real rules and application." },
      { q: "An AI assistant is:", options: ["A person at the library", "A government office", "A phone company", "A program you chat with in your own words"], answer: 3, why: "It is a computer program you type or talk to." },
      { q: "Which is something an AI assistant can help with?", options: ["Planning meals on a budget", "Signing your lease", "Going to your appointment", "Paying your bills from your account"], answer: 0, why: "It is good at plans, lists and explanations." },
      { q: "AI sometimes gets facts wrong. That means you should:", options: ["Never use it", "Check important facts", "Trust it more", "Pay for a better one"], answer: 1, why: "It is useful, but important facts need checking." },
      { q: "On a library computer, how do you open Copilot?", options: ["Call the library", "Turn the computer off and on", "Type copilot.microsoft.com in the browser", "Send an email"], answer: 2, why: "The web address opens Copilot in the browser." },
      { q: "A good question to an AI includes:", options: ["Your password", "Only one word", "Your bank number", "What you need, your situation and how you want the answer"], answer: 3, why: "Those three parts get a useful answer." },
      { q: "Where do you install an AI app on a phone?", options: ["The official app store", "A link in a text from a stranger", "A pop-up ad", "Any website"], answer: 0, why: "The official app store is the safe place." },
      { q: "What is a placeholder?", options: ["A type of app", "A stand-in like [my name] instead of real details", "A password", "A website"], answer: 1, why: "It keeps private details out of your prompt." },
      { q: "You want help with a school letter. What is a good request?", options: ["\"letter\"", "\"Here is my child's full name and ID number\"", "\"Explain this in plain words and list what I need to do and by when.\"", "\"school\""], answer: 2, why: "It asks for plain words and a to-do list, without private details." },
      { q: "The AI uses a hard word you do not know. You can:", options: ["Give up", "Pretend you know it", "Close the browser", "Ask a follow-up: \"What does that word mean?\""], answer: 3, why: "Follow-up questions clear up confusing parts." },
      { q: "Which should you always check before acting on it?", options: ["A deadline for benefits", "A dinner idea", "A joke", "A list of colors"], answer: 0, why: "Deadlines, money and benefits must be checked with the official source." },
      { q: "US government websites usually end in:", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: ".gov is used by official US government sites." },
      { q: "You cannot find local help with your utility bill. Who can you call?", options: ["A number in a pop-up ad", "Nobody", "211", "A random number online"], answer: 2, why: "211 connects you to local help with bills, food and housing." },
      { q: "Which should you never type into an AI assistant?", options: ["\"Use simple words\"", "\"Make a list\"", "A dinner idea", "Your bank card number"], answer: 3, why: "Bank and card numbers are private." },
      { q: "A message promises a free government grant if you pay a fee first. It is probably:", options: ["A scam", "A normal program", "A school notice", "A tax refund"], answer: 0, why: "Paying to get \"free\" money is a common scam." },
      { q: "Real agencies ask for payment in:", options: ["Gift cards", "Never in gift cards", "Gift cards only on weekends", "Cash by text"], answer: 1, why: "Gift card payments are a scam sign." },
      { q: "A text says \"Click here now or lose your benefits.\" What do you do?", options: ["Click fast", "Reply with your case number", "Do not click; go to the official site or call a known number", "Share it with neighbors"], answer: 2, why: "Contact the agency yourself instead of using the message's link." },
      { q: "In the final task, after the AI makes your to-do list, you:", options: ["Delete the letter", "Post it online", "Add your bank details", "Check one date or phone number with the official source"], answer: 3, why: "Checking with the official source is the last step." }
    ]
  }
};
