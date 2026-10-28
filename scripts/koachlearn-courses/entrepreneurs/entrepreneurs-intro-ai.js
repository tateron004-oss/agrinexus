"use strict";

// Koach Learn course: Entrepreneurs -> "Introduction to AI for Entrepreneurs". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-intro-ai",
  category: "Entrepreneurs",
  name: "Introduction to AI for Entrepreneurs",
  skills: "Spotting AI-ready business tasks, Writing a business prompt, Improving a draft, Checking facts and numbers, Protecting business and customer data",
  outcome: "pick one real task in your business, use a free AI assistant to do a first draft of it, improve and check the result, and keep customer and money details out of the chat.",
  about: [
    "This course is for people starting or growing a small business: a food truck, a cleaning service, a salon, an online shop, a consulting practice or a side hustle you want to grow.",
    "You will learn what AI assistants can do for a business owner, how to find the tasks in your week that AI can speed up, how to write a clear business prompt, how to improve and check what AI gives you, and how to protect your customers' information.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task using your own business. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Choose one real task from your business (for example a price sheet, a welcome email to new customers, or a weekly social post). Use a free AI assistant to draft it with a three-part business prompt, ask for two improvements, check every fact and number yourself, remove any private customer or money details, and save the final version ready to use.",
  chapters: [
    {
      name: "Chapter 1: What AI can do for your business",
      lessons: [
        {
          title: "What AI is, in business terms",
          minutes: 4,
          goal: "Explain in your own words what an AI assistant can and cannot do for a business.",
          text: [
            "An AI assistant is a computer program you type or talk to in everyday words. Well-known free ones include ChatGPT, Microsoft Copilot and Google Gemini. You ask for something, and it writes a draft in seconds.",
            "For a business owner, think of it as a fast first-draft helper. It is good at writing emails, social posts and product descriptions, turning notes into a plan, summarizing long documents, brainstorming names and ideas, and explaining business words you do not know.",
            "It is not your accountant, your lawyer or your customer. It does not know your prices, your customers or your local rules unless you tell it, and it can be wrong while sounding sure. You are the owner: you decide what goes out with your business name on it."
          ],
          words: [["AI assistant", "a computer program you chat with by typing or talking, which writes answers and drafts."], ["First draft", "an early version of something that you will check and improve before using."]],
          slides: [
            { title: "AI for business = a fast draft helper", bullets: ["You ask in everyday words", "It writes a draft in seconds", "Free options: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Good at", bullets: ["Emails, social posts, product descriptions", "Turning notes into plans", "Summaries and brainstorming"] },
            { title: "Not", bullets: ["Your accountant or lawyer", "Aware of your prices or customers unless you say", "Always right, even when it sounds sure"] }
          ],
          tryIt: "Write down three things you did for your business last week that involved writing, planning or explaining. Circle the one that took you the longest.",
          youCanNow: "say what an AI assistant can do for a business, and why you still check everything before it goes out."
        },
        {
          title: "Finding the tasks AI can speed up",
          minutes: 5,
          goal: "List the tasks in your week that are good for AI, and the ones that are not.",
          text: [
            "The best first tasks for AI are ones you repeat, that involve words, and where a mistake is easy to catch before anyone sees it. Examples: replying to common customer questions, writing a weekly post, drafting a flyer, making a checklist for a new helper, or summarizing a supplier's long email.",
            "Tasks that are NOT good to hand to AI alone: anything that sends money, signs a contract, sets a legal or tax position, or makes a promise to a customer without you reading it first. AI can help you prepare, but you make the final call.",
            "A simple way to sort: write each task on a line, then mark it \"AI drafts, I check\", \"AI helps me think\" or \"I do it myself\"."
          ],
          steps: ["List ten tasks you did in the last two weeks.", "Mark each one: AI drafts / AI helps me think / I do it myself.", "Pick the \"AI drafts\" task that takes you the most time.", "That is your first AI task."],
          words: [["Repeat task", "a job you do again and again, like answering the same customer question."]],
          slides: [
            { title: "Good first AI tasks", bullets: ["You repeat them", "They are mostly words", "Mistakes are easy to catch before anyone sees"] },
            { title: "Examples", bullets: ["Answers to common customer questions", "Weekly social post or flyer", "Checklist for a new helper"] },
            { title: "Keep for yourself", bullets: ["Sending money", "Signing contracts, tax and legal choices", "Promises to customers you have not read"] },
            { title: "Sort your tasks", bullets: ["AI drafts, I check", "AI helps me think", "I do it myself"] }
          ],
          tryIt: "Make your list of ten tasks and sort them into the three groups. Choose the one \"AI drafts, I check\" task you will use for the rest of this course.",
          youCanNow: "sort your business tasks and choose a safe, useful first task for AI."
        },
        {
          title: "Writing a clear business prompt",
          minutes: 5,
          goal: "Write a three-part business prompt that gets a useful draft the first time.",
          text: [
            "What you type to an AI assistant is called a prompt. A business prompt works best with three parts: the task, the business context, and the format you want.",
            "Example: \"Write a short welcome email for new customers of my home cleaning service in Atlanta. We clean homes every two weeks, and customers can text us to reschedule. Keep it friendly, under 120 words, with a clear subject line.\"",
            "A weak prompt like \"write an email\" makes the assistant guess. It does not know your business, your customer or your tone, so the draft will be general. Never put customer names, phone numbers, card numbers or passwords into the prompt; you can add those yourself later."
          ],
          steps: ["Task: say exactly what you want written or planned.", "Context: what you sell, who the customer is, where you are, your tone.", "Format: length, list or paragraphs, subject line, reading level.", "Read the prompt for private details and take them out before you send it."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."], ["Context", "the background facts the AI needs, such as what you sell and who you sell to."]],
          slides: [
            { title: "Three parts of a business prompt", bullets: ["1. Task: what you want", "2. Context: your business and customer", "3. Format: length, style, layout"] },
            { title: "Weak vs clear", bullets: ["Weak: \"write an email\"", "Clear: welcome email, cleaning service, Atlanta,", "friendly, under 120 words, with a subject line"] },
            { title: "Keep it out of the prompt", bullets: ["Customer names and phone numbers", "Card and bank numbers", "Passwords"] }
          ],
          tryIt: "Write a three-part prompt for the task you chose in Lesson 2. Send it to a free AI assistant and save the first draft.",
          youCanNow: "write a business prompt with a task, context and format, and leave private details out."
        }
      ],
      check: {
        title: "Knowledge Check 1: What AI can do for your business",
        questions: [
          { q: "What is the best way to think of an AI assistant in your business?", options: ["Your accountant", "A replacement for your judgment", "A fast first-draft helper that you check", "A customer"], answer: 2, why: "AI drafts quickly, but you check and decide what goes out." },
          { q: "Which task is a good first task to give an AI assistant?", options: ["Drafting a weekly social post you will read first", "Paying a supplier", "Signing a lease", "Choosing your tax filing status"], answer: 0, why: "It repeats, is mostly words, and mistakes are easy to catch before anyone sees it." },
          { q: "Which is a three-part business prompt?", options: ["\"write an email\"", "\"help me\"", "\"business stuff\"", "\"Welcome email for new cleaning customers in Atlanta; we clean every two weeks; friendly, under 120 words, with a subject line.\""], answer: 3, why: "It gives the task, the business context and the format." },
          { q: "What should you leave out of a prompt?", options: ["Your type of business", "A customer's card number", "The tone you want", "The length you want"], answer: 1, why: "Card numbers and other private details should never go into an AI chat." },
          { q: "An AI draft has your business name on it. Who is responsible for it?", options: ["The AI company", "You, the owner", "Nobody", "The customer"], answer: 1, why: "You decide what goes out with your business name on it." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI safely and well",
      lessons: [
        {
          title: "Improving the draft with follow-ups",
          minutes: 4,
          goal: "Turn a first draft into a version you would really use, with follow-up requests.",
          text: [
            "The first answer is a draft. The assistant remembers the earlier messages in the same chat, so you can ask it to change one thing at a time.",
            "Useful follow-ups for business writing: \"Make it sound more like a small local business.\" \"Cut it to 80 words.\" \"Add a clear next step for the customer.\" \"Give me three subject lines to choose from.\" \"Write it at an easy reading level.\"",
            "Add the facts only you know: your real hours, real prices and real policies. Then read it out loud. If it does not sound like you, ask for a change or edit it yourself."
          ],
          steps: ["Read the first draft.", "Pick the one thing you most want changed.", "Ask for that change.", "Add your real facts.", "Read it out loud and repeat if needed."],
          words: [["Follow-up", "a second request in the same chat that changes or builds on the answer."], ["Call to action", "the clear next step you want the customer to take, like \"Text us to book\"."]],
          slides: [
            { title: "The first answer is a draft", bullets: ["Ask for one change at a time", "The chat remembers what you said"] },
            { title: "Business follow-ups", bullets: ["\"Sound more like a small local business.\"", "\"Cut it to 80 words.\"", "\"Add a clear next step for the customer.\""] },
            { title: "Make it yours", bullets: ["Add your real hours, prices and policies", "Read it out loud", "Edit until it sounds like you"] }
          ],
          tryIt: "Take your draft from Lesson 3. Ask for two changes, one at a time, then add your own real details. Compare the first and final versions.",
          youCanNow: "improve an AI draft with follow-ups and make it sound like your business."
        },
        {
          title: "Checking facts, numbers and claims",
          minutes: 5,
          goal: "Check an AI draft for wrong facts, wrong numbers and promises you cannot keep.",
          text: [
            "AI can make things up: a price you never set, a rule that does not exist, a wrong total, or a claim like \"the best in the city\" that you cannot prove. Making things up like this is sometimes called a hallucination.",
            "Before anything goes to a customer, check three things. Facts: hours, prices, addresses, policies. Numbers: do the totals and percentages add up? Do the math yourself or in a spreadsheet. Claims: can you prove it? In the United States the FTC says ads must be truthful, not misleading, and backed by evidence.",
            "For tax, legal, licensing or money questions, use AI only to understand the words, then confirm with the official source (often a .gov site) or a professional such as an accountant or lawyer."
          ],
          steps: ["Highlight every fact, number and claim in the draft.", "Check facts against your own records.", "Redo any math yourself.", "Remove or soften any claim you cannot prove.", "Confirm tax, legal or license points with an official source or a professional."],
          words: [["Hallucination", "when AI writes something that sounds true but is made up."], ["Claim", "something your business says is true, like \"same-day service\"."], ["FTC", "the Federal Trade Commission, the US agency that enforces truth-in-advertising rules."]],
          slides: [
            { title: "AI can make things up", bullets: ["Prices you never set", "Rules that do not exist", "Wrong totals"] },
            { title: "Check three things", bullets: ["Facts: hours, prices, policies", "Numbers: redo the math", "Claims: can you prove it?"] },
            { title: "Truth in advertising", bullets: ["FTC: ads must be truthful and not misleading", "Claims need evidence behind them"] },
            { title: "Tax, legal, licenses", bullets: ["Use AI to understand the words", "Confirm on the official .gov site", "Or ask an accountant or lawyer"] }
          ],
          sources: [{ name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Highlight every fact, number and claim in your improved draft. Check each one, fix what is wrong, and remove any claim you cannot prove.",
          youCanNow: "check an AI draft for wrong facts, wrong numbers and claims you cannot back up."
        },
        {
          title: "Protecting customer and business information",
          minutes: 5,
          goal: "Use AI for business tasks without sharing private customer or money details.",
          text: [
            "What you type into an AI chat may be stored by the company that runs it, and on some free plans it may be used to improve their AI. Read the tool's privacy settings, and assume anything you type could be seen by someone else.",
            "Never type into an AI chat: customer names with phone numbers or addresses, card or bank numbers, passwords, Social Security or tax ID numbers, or private health details. Use placeholders such as \"[customer name]\" and fill them in yourself after.",
            "Also watch for AI-powered scams aimed at businesses: fake invoices, emails that copy a supplier's style, and calls in a voice that sounds like someone you know asking for an urgent payment. Before paying, call back on a number you already know is real."
          ],
          steps: ["Before sending a prompt, read it for private details.", "Replace them with placeholders like \"[customer name]\".", "Check the tool's privacy or data settings.", "Verify any urgent payment request by calling a number you already know."],
          words: [["Placeholder", "a stand-in like \"[customer name]\" that you replace with the real detail later, outside the AI chat."], ["Invoice scam", "a fake bill made to look like it comes from a real supplier."]],
          slides: [
            { title: "Assume it could be seen", bullets: ["Chats may be stored", "Free plans may use chats to improve AI", "Check the privacy settings"] },
            { title: "Never type into AI", bullets: ["Customer phone numbers and addresses", "Card, bank and tax ID numbers", "Passwords and health details"] },
            { title: "Use placeholders", bullets: ["\"[customer name]\", \"[order total]\"", "Fill in the real details yourself after"] },
            { title: "Business scams", bullets: ["Fake invoices that look real", "Urgent payment calls in a familiar voice", "Call back on a number you know"] }
          ],
          tryIt: "Final task: finish your chosen business task. Make sure the prompt and the final version have no private customer or money details, check every fact, number and claim, and save it ready to use.",
          youCanNow: "use AI for a real business task while protecting your customers, your money and your name."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI safely and well",
        questions: [
          { q: "The AI draft sounds too formal for your small shop. What do you do?", options: ["Use it anyway", "Delete the AI app", "Send it to a lawyer", "Ask: \"Make it sound more like a small local business.\""], answer: 3, why: "A follow-up asks the assistant to change the tone." },
          { q: "An AI draft says \"open until 9 pm\" but you close at 7. What does this show?", options: ["AI can make up facts, so you check them", "AI is always right", "Your hours are wrong", "The customer will not notice"], answer: 0, why: "AI can invent facts; you check them against your own records." },
          { q: "The draft says \"the cheapest in the state\". You have not compared prices. What should you do?", options: ["Keep it, it sounds good", "Make it bigger", "Remove it or change it to something you can prove", "Add \"guaranteed\""], answer: 2, why: "Ads must be truthful and backed by evidence." },
          { q: "How should you include a customer's name in an AI prompt?", options: ["Type the full name and phone number", "Type their card number too", "Ask the customer for their password", "Use a placeholder like \"[customer name]\""], answer: 3, why: "Placeholders keep private details out of the chat." },
          { q: "You get an urgent call in your supplier's voice asking you to pay a new account today. What do you do?", options: ["Pay right away", "Send your bank login", "Call the supplier back on a number you already know", "Reply with the code on your phone"], answer: 2, why: "Voices can be copied by AI; verify on a known number before paying." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI for Entrepreneurs",
    questions: [
      { q: "An AI assistant in your business is best used as:", options: ["Your lawyer", "A fast first-draft helper", "Your bank", "The final decision-maker"], answer: 1, why: "It drafts; you check and decide." },
      { q: "Which is a free, well-known AI assistant?", options: ["Google Gemini", "A cash register", "A printer", "A spreadsheet cell"], answer: 0, why: "Gemini, ChatGPT and Copilot are well-known AI assistants." },
      { q: "Which of these does an AI assistant NOT know unless you tell it?", options: ["What a business plan is", "How to write a list", "Your real prices", "Common business words"], answer: 2, why: "It does not know your prices, customers or policies unless you give them." },
      { q: "Good first AI tasks are ones that:", options: ["Repeat, are mostly words, and are easy to check", "Send money", "Sign contracts", "Set your tax position"], answer: 0, why: "These are low-risk and save time." },
      { q: "Which task should you keep for yourself?", options: ["Brainstorming shop names", "Drafting a flyer", "Making a checklist", "Approving a payment to a supplier"], answer: 3, why: "Money decisions stay with you." },
      { q: "When sorting tasks, \"AI helps me think\" means:", options: ["AI makes the decision", "You use AI to brainstorm or explain, then decide yourself", "You never use AI", "AI sends it for you"], answer: 1, why: "AI supports your thinking; you decide." },
      { q: "The three parts of a business prompt are:", options: ["Name, password, address", "Task, context, format", "Hello, please, thanks", "Price, tax, total"], answer: 1, why: "Task, context and format give the AI what it needs." },
      { q: "Which is business context?", options: ["\"Under 100 words\"", "\"Write an email\"", "\"Thanks\"", "\"We are a mobile car wash in Dallas serving busy parents\""], answer: 3, why: "Context explains your business and customer." },
      { q: "Which is a format instruction?", options: ["\"Give me a list of 5 short bullet points\"", "\"We sell cakes\"", "\"Our customers are students\"", "\"We are in Lagos\""], answer: 0, why: "Format says how the answer should look." },
      { q: "A follow-up request is:", options: ["A new app", "A customer review", "A second request in the same chat that changes the answer", "A type of invoice"], answer: 2, why: "Follow-ups improve the draft step by step." },
      { q: "Which follow-up adds a call to action?", options: ["\"Make it longer for no reason.\"", "\"Remove all details.\"", "\"Add my password.\"", "\"Add a clear next step, like Text us to book.\""], answer: 3, why: "A call to action tells the customer what to do next." },
      { q: "Why read a draft out loud?", options: ["To make the AI faster", "To save battery", "To check it sounds like you", "It is required by law"], answer: 2, why: "Hearing it helps you catch tone and mistakes." },
      { q: "An AI \"hallucination\" is:", options: ["A slow answer", "Something that sounds true but is made up", "A type of logo", "A customer complaint"], answer: 1, why: "AI can invent facts that sound real." },
      { q: "The AI totals your price list wrong. What is the lesson?", options: ["Redo the math yourself or in a spreadsheet", "Trust AI math", "Raise your prices", "Stop selling"], answer: 0, why: "Always check numbers before using them." },
      { q: "According to the FTC, advertising claims must be:", options: ["Funny", "Written by AI", "Truthful, not misleading and backed by evidence", "Short"], answer: 2, why: "The FTC's truth-in-advertising rules require this." },
      { q: "For a tax or license question, AI is best used to:", options: ["Understand the words before you check the official source or a professional", "Make the final decision", "File for you", "Replace your accountant"], answer: 0, why: "Confirm tax and legal points with official sources or professionals." },
      { q: "Which should NEVER go into an AI chat?", options: ["\"Make it friendlier\"", "Your type of business", "The tone you want", "A customer's card number"], answer: 3, why: "Card numbers are private money details." },
      { q: "A placeholder like \"[customer name]\" lets you:", options: ["Hide prices from customers", "Get help without sharing private details", "Skip checking", "Pay faster"], answer: 1, why: "You fill in the real detail yourself after." },
      { q: "On some free AI plans, your chats may:", options: ["Disappear before you read them", "Be stored and used to improve the AI", "Be sent to your customers", "Be printed"], answer: 1, why: "That is why you check privacy settings and keep private details out." },
      { q: "An email that looks like your supplier asks you to pay a new bank account urgently. Best step?", options: ["Pay now", "Reply with your bank login", "Forward it to all customers", "Call the supplier on a number you already know"], answer: 3, why: "Fake invoices are common; verify on a known number." }
    ]
  }
};
