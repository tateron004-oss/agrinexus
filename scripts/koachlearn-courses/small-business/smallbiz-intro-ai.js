"use strict";

// Koach Learn course: Small Business -> "Introduction to AI for Small Business". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "smallbiz-intro-ai",
  category: "Small Business",
  name: "Introduction to AI for Small Business",
  skills: "Explaining what AI can do for a business, Spotting time-saving tasks, Writing a business prompt, Checking and editing AI drafts, Protecting customer and business information",
  outcome: "use a free AI assistant to finish one real task for your business, such as a customer notice, a product description or a weekly to-do list: write a clear prompt with your business details, improve the draft, check every fact, and keep private information out.",
  about: [
    "This course is for small business owners who have heard about AI but have not used it much: shop owners, restaurant and food truck owners, barbers and stylists, cleaners, contractors and home-based businesses. Many of our students are first-time and minority business owners who run everything themselves.",
    "You will learn what an AI assistant is, which jobs in your business it can speed up, how to ask it for help with your business details, how to check its work, and how to protect your customers' information.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task using your own business. There is a short knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Pick one real task from your business this week (a sign about new hours, a product description, a reply to a customer, or a to-do list). Use a free AI assistant to make it: write a prompt with your business details, ask for at least one change, check every fact (prices, hours, address) yourself, remove any private information, and use it in your business.",
  chapters: [
    {
      name: "Chapter 1: What AI can do for your business",
      lessons: [
        {
          title: "What an AI assistant is, in business terms",
          minutes: 4,
          goal: "Explain what an AI assistant can and cannot do for a small business.",
          text: [
            "An AI assistant is a computer program you type or talk to in everyday words. You ask for something, and it writes it for you in seconds. Well-known free ones include ChatGPT, Microsoft Copilot and Google Gemini.",
            "Think of it as a fast helper for writing and thinking. It can draft a flyer, a menu description, a reply to a review, a price list layout, a social media post or a checklist for opening the shop.",
            "It is not your accountant, lawyer or business partner. It does not know your prices, your customers or your town unless you tell it, and it can be wrong while sounding sure. You stay the owner: you decide what to use."
          ],
          words: [["AI", "artificial intelligence: computer programs that do tasks that usually need a person, like writing."], ["AI assistant", "an AI program you chat with by typing or talking, such as ChatGPT, Copilot or Gemini."], ["Draft", "a first version you will check and change."]],
          slides: [
            { title: "An AI assistant is...", bullets: ["A program you chat with in everyday words", "A fast helper for writing and thinking", "Free versions: ChatGPT, Copilot, Gemini"] },
            { title: "In a small business it can draft", bullets: ["Flyers, signs and social posts", "Menu and product descriptions", "Replies to customers and reviews", "Checklists and schedules"] },
            { title: "It is NOT", bullets: ["Your accountant, lawyer or partner", "Aware of your prices unless you say them", "Always right: you are the owner"] }
          ],
          tryIt: "Write down three writing jobs you did for your business last month, for example a sign, a text to a customer, or a price list. Circle the one that took the longest.",
          youCanNow: "say what an AI assistant is and name writing jobs in your business it could help with."
        },
        {
          title: "Finding the tasks worth handing to AI",
          minutes: 5,
          goal: "Make a list of tasks in your business that AI can speed up, and ones it should not touch.",
          text: [
            "Good AI tasks are repeated, written and low-risk: answering the same questions, describing products, writing posts, making schedules and checklists, summarizing long emails or turning messy notes into a clean list.",
            "Keep AI away from final decisions about money, taxes, contracts, hiring and firing, health and safety rules, and anything legal. It can help you prepare questions for your accountant, but it is not the accountant.",
            "A simple test: if a mistake would be easy to catch and fix, AI can help. If a mistake could cost you money, a customer's trust or a fine, a person checks it, and you check the official source."
          ],
          steps: ["List the jobs you do every week.", "Mark each one: repeated? written? low-risk?", "Put the tasks with three yeses on a \"Try with AI\" list.", "Put money, legal and safety decisions on a \"People and official sources\" list."],
          words: [["Low-risk task", "a task where a mistake is easy to see and fix."], ["Repeated task", "something you do again and again, like answering the same question."]],
          slides: [
            { title: "Good AI tasks", bullets: ["Repeated: the same questions every day", "Written: posts, descriptions, replies", "Low-risk: mistakes are easy to catch"] },
            { title: "Keep with people and official sources", bullets: ["Money, taxes and contracts", "Hiring and firing", "Health, safety and legal rules"] },
            { title: "The quick test", bullets: ["Easy to catch and fix? AI can help", "Could cost money, trust or a fine? A person checks"] }
          ],
          tryIt: "Make two lists for your business: \"Try with AI\" (at least five tasks) and \"People and official sources\" (at least three).",
          youCanNow: "sort the tasks in your business into ones AI can help with and ones people must handle."
        },
        {
          title: "Writing a clear business prompt",
          minutes: 5,
          goal: "Write a prompt that includes your business details so the answer fits your business.",
          text: [
            "What you type to an AI assistant is called a prompt. The more it knows about your business, the better the answer fits. A good business prompt has four parts: who you are, what you need, who it is for, and how it should look.",
            "Example: \"I own a small Caribbean restaurant in Fresno. Write a short sign for the front door saying we close at 8 pm on Sundays starting May 5. Friendly tone, under 30 words.\"",
            "A weak prompt like \"write a sign\" makes the AI guess. Add your real details: your type of business, your town, your hours, your style. Leave out private details like bank numbers or a customer's phone number."
          ],
          steps: ["Who you are: your type of business and where.", "What you need: the exact item.", "Who it is for: customers, staff, a supplier.", "How it should look: length, tone, list or paragraph."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."], ["Tone", "how writing sounds: friendly, formal, fun."]],
          slides: [
            { title: "Four parts of a business prompt", bullets: ["1. Who you are", "2. What you need", "3. Who it is for", "4. How it should look"] },
            { title: "Example", bullets: ["\"I own a small Caribbean restaurant in Fresno.", "Write a door sign: we close at 8 pm Sundays from May 5.", "Friendly tone, under 30 words.\""] },
            { title: "Weak vs clear", bullets: ["Weak: \"write a sign\"", "Clear: your business, the details, the style", "Never: bank numbers or customer phone numbers"] }
          ],
          tryIt: "Pick one task from your \"Try with AI\" list. Write a prompt with all four parts, send it to a free AI assistant, and read the answer.",
          youCanNow: "write a business prompt with who you are, what you need, who it is for and how it should look."
        }
      ],
      check: {
        title: "Knowledge Check 1: What AI can do for your business",
        questions: [
          { q: "What is an AI assistant?", options: ["A new employee", "A program you chat with that writes drafts", "A bank", "A cash register"], answer: 1, why: "It is a computer program you type or talk to." },
          { q: "Which task is a good one to give an AI assistant?", options: ["Deciding whether to sign a lease", "Firing an employee", "Filing your taxes alone", "Drafting a product description"], answer: 3, why: "Product descriptions are written, repeated and low-risk." },
          { q: "A mistake could cost you a fine. What do you do?", options: ["Have a person check it against the official source", "Let AI decide", "Ignore it", "Ask AI twice"], answer: 0, why: "High-risk tasks need a person and an official source." },
          { q: "Which is the clearest business prompt?", options: ["\"sign\"", "\"help my business\"", "\"I own a barbershop in Oakland. Write a short sign: closed Monday July 4. Friendly, under 25 words.\"", "\"write something\""], answer: 2, why: "It says who you are, what you need, who it is for and how it should look." },
          { q: "Which should you leave out of a prompt?", options: ["Your type of business", "Your town", "A customer's phone number", "The tone you want"], answer: 2, why: "Customer private details stay out of AI tools." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI safely and well",
      lessons: [
        {
          title: "Improving the draft",
          minutes: 4,
          goal: "Use follow-up requests to turn a first draft into something you would really use.",
          text: [
            "The first answer is a draft. In the same chat, the assistant remembers what you asked, so you can tell it what to change.",
            "Useful follow-ups for a business: \"Make it shorter.\" \"Sound warmer.\" \"Add our hours.\" \"Give me three versions.\" \"Write it in Spanish too.\" \"Use simpler words.\"",
            "Then make it yours. Change words to sound like you and your shop. Customers know your voice; the final version should too."
          ],
          steps: ["Read the draft out loud.", "Pick one thing to change and ask for it.", "Repeat until it works.", "Edit the last version in your own words."],
          words: [["Follow-up", "a second request that builds on the answer you got."], ["Version", "one of several ways of writing the same thing."]],
          slides: [
            { title: "The first answer is a draft", bullets: ["The chat remembers your request", "Ask for one change at a time"] },
            { title: "Business follow-ups", bullets: ["\"Make it shorter.\" \"Sound warmer.\"", "\"Give me three versions.\"", "\"Write it in Spanish too.\""] },
            { title: "Make it yours", bullets: ["Read it out loud", "Change words to sound like you", "Customers know your voice"] }
          ],
          tryIt: "Take the answer from Lesson 3. Ask for two changes, one at a time, then edit the last version so it sounds like you.",
          youCanNow: "improve an AI draft with follow-up requests and make it sound like your business."
        },
        {
          title: "Checking facts before customers see them",
          minutes: 5,
          goal: "Check every fact in an AI draft before you post, print or send it.",
          text: [
            "AI can make things up: a wrong price, wrong hours, a sale you never planned, or a rule that does not exist. This is called a hallucination. If it goes on your sign or website, customers will hold you to it.",
            "Before you use anything, check: prices, dates and hours, your address and phone, promises (\"free delivery\", \"guaranteed\"), and any rule about licenses, taxes or health. Compare with your own records.",
            "For rules and laws, the AI is not the source. Check the official government page (often ending in .gov) or ask your accountant, your city office or a free small business advisor such as SCORE or a Small Business Development Center."
          ],
          steps: ["Underline every number, date, name and promise.", "Check each against your own records.", "Check any rule or law on the official .gov page.", "Delete any promise you did not plan to make."],
          words: [["Hallucination", "when AI writes something that sounds true but is made up."], ["Official source", "the government office or company that actually sets the rule or price."]],
          slides: [
            { title: "AI can make things up", bullets: ["Wrong prices or hours", "Sales or promises you never planned", "Rules that do not exist"] },
            { title: "Check before customers see it", bullets: ["Prices, dates, hours", "Address and phone", "Promises like \"free\" or \"guaranteed\""] },
            { title: "Rules and laws", bullets: ["Check the official .gov page", "Ask your accountant or city office", "Free help: SCORE or an SBDC"] }
          ],
          tryIt: "Ask an AI assistant to write a short \"About us\" paragraph for your business. Underline every fact and promise in it, check each one, and fix or delete what is wrong.",
          youCanNow: "find and check every fact and promise in an AI draft before customers see it."
        },
        {
          title: "Protecting customer and business information",
          minutes: 5,
          goal: "Use AI for your business without sharing private customer or business information.",
          text: [
            "Do not paste private information into an AI assistant: customers' names with phone numbers or addresses, card or bank numbers, passwords, employee Social Security numbers, or private health details. You can get the help you need without them. Write \"[customer name]\" instead.",
            "Read the privacy settings of the tool you use. Some tools let you turn off saving your chats for training. Business versions of some tools offer more protection; check the company's official page before you rely on that.",
            "Scammers use AI too: fake invoices, fake supplier emails and fake calls. If a message rushes you to pay or change bank details, stop and call the supplier back on a number you already know."
          ],
          steps: ["Before sending a prompt, read it for private details.", "Swap them for placeholders like \"[customer name]\".", "Check the tool's privacy settings.", "Call back on a known number before paying any rushed request."],
          words: [["Placeholder", "a stand-in like \"[customer name]\" used instead of real private details."], ["Privacy settings", "the choices in a tool about what it saves and how it uses your data."]],
          slides: [
            { title: "Never paste into AI", bullets: ["Customer phone numbers and addresses", "Card, bank numbers and passwords", "Employee ID or private health details"] },
            { title: "Use placeholders", bullets: ["\"[customer name]\" instead of the real name", "You still get the help you need"] },
            { title: "Settings and scams", bullets: ["Check the tool's privacy settings", "Fake invoices and supplier emails are common", "Call back on a known number before paying"] }
          ],
          tryIt: "Final task: pick one real task for your business this week. Use a free AI assistant to make it with a four-part prompt, ask for at least one change, check every fact yourself, remove any private information, and put it to use.",
          youCanNow: "use AI for a real business task while keeping customer and business information safe."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI safely and well",
        questions: [
          { q: "The AI's sign is too long. What do you ask?", options: ["\"Make it shorter.\"", "\"Delete my account.\"", "\"Add my bank number.\"", "Nothing; print it"], answer: 0, why: "A follow-up asks for the change you want." },
          { q: "The AI draft says \"Free delivery on all orders\" but you never offered that. What do you do?", options: ["Keep it; it sounds good", "Ask AI if it is true", "Post it and see", "Delete the promise before using the draft"], answer: 3, why: "Customers can hold you to promises on your sign or site." },
          { q: "Where do you check a rule about business licenses?", options: ["The AI's answer", "The official government page or office", "A social media post", "A competitor"], answer: 1, why: "Rules come from the official source." },
          { q: "What do you write instead of a customer's real name and phone?", options: ["A placeholder like \"[customer name]\"", "The real details", "Their card number", "Nothing; skip AI forever"], answer: 0, why: "Placeholders keep private information out." },
          { q: "An email \"from your supplier\" says to pay a new bank account today. What do you do?", options: ["Pay right away", "Reply with your password", "Call the supplier back on a number you already know", "Forward it to customers"], answer: 2, why: "Rushed payment changes are a common scam." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI for Small Business",
    questions: [
      { q: "Which is a free AI assistant?", options: ["A cash register", "Microsoft Copilot", "A barcode scanner", "A receipt printer"], answer: 1, why: "Copilot, ChatGPT and Gemini are well-known assistants." },
      { q: "An AI assistant knows your prices:", options: ["Always", "From your city", "From your bank", "Only if you tell it"], answer: 3, why: "It does not know your business unless you tell it." },
      { q: "Who makes the final decision on AI work for your business?", options: ["The AI", "Your customers", "The app store", "You, the owner"], answer: 3, why: "You stay the owner and decide what to use." },
      { q: "Which is a repeated, written, low-risk task?", options: ["Signing a lease", "Answering the same customer question each day", "Paying payroll taxes", "Choosing a lawyer"], answer: 1, why: "Repeated written answers are good AI tasks." },
      { q: "Which belongs on the \"People and official sources\" list?", options: ["Social media posts", "Menu descriptions", "Tax decisions", "Opening checklists"], answer: 2, why: "Money and tax decisions need people and official sources." },
      { q: "The quick test says AI can help when a mistake is:", options: ["Easy to catch and fix", "Costly", "Legal", "Hidden"], answer: 0, why: "Low-risk tasks are safe to try with AI." },
      { q: "What is a prompt?", options: ["A receipt", "A late fee", "What you type to ask the AI for something", "A delivery"], answer: 2, why: "A prompt is your request." },
      { q: "Which part tells the AI the style you want?", options: ["How it should look", "Who you are", "Your bank", "Your password"], answer: 0, why: "\"How it should look\" covers length and tone." },
      { q: "Why add your type of business and town to a prompt?", options: ["To make it slower", "So the answer fits your business", "It is required by law", "So AI can charge you"], answer: 1, why: "Details make the answer fit." },
      { q: "The first AI answer is best treated as:", options: ["Final", "A law", "A contract", "A draft"], answer: 3, why: "You improve and check it before use." },
      { q: "Which follow-up helps a Spanish-speaking customer base?", options: ["\"Write it in Spanish too.\"", "\"Add my password.\"", "\"Make it longer.\"", "\"Delete it.\""], answer: 0, why: "AI can draft other languages; have a fluent speaker check." },
      { q: "Why edit the last version in your own words?", options: ["It is not useful", "To hide mistakes", "To make it longer", "So it sounds like you and your business"], answer: 3, why: "Customers know your voice." },
      { q: "What is an AI hallucination?", options: ["A screen problem", "A slow internet connection", "A made-up fact that sounds true", "A type of app"], answer: 2, why: "AI can invent facts." },
      { q: "Which must you check before posting an AI draft?", options: ["Only spelling", "Prices, hours, address and promises", "Nothing", "Only the font"], answer: 1, why: "Wrong facts or promises hurt trust." },
      { q: "Free small business advisors include:", options: ["The AI itself", "Pop-up ads", "Random forums", "SCORE and Small Business Development Centers"], answer: 3, why: "SCORE and SBDCs give free advice." },
      { q: "Which should you NEVER paste into an AI tool?", options: ["\"Make it friendlier\"", "Your business type", "A customer's card number", "Your opening hours"], answer: 2, why: "Card numbers are private." },
      { q: "A placeholder is:", options: ["A stand-in like \"[customer name]\"", "A real phone number", "A password", "A price"], answer: 0, why: "Placeholders stand in for private details." },
      { q: "Before relying on a tool's privacy promises, you should:", options: ["Guess", "Check its settings and the company's official page", "Ask a customer", "Ignore privacy"], answer: 1, why: "Settings and official pages say what the tool saves." },
      { q: "A caller rushes you to pay a \"past-due invoice\" with gift cards. This is:", options: ["Normal business", "A warning sign of a scam", "A tax rule", "A discount"], answer: 1, why: "Rushing and gift cards are scam signs." },
      { q: "The best way to check a rushed payment request from a supplier is to:", options: ["Call the supplier on a number you already know", "Reply to the same email", "Pay half", "Ask the AI"], answer: 0, why: "A known number reaches the real supplier." }
    ]
  }
};
