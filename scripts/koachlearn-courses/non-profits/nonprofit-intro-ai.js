"use strict";

// Koach Learn course: Non Profits -> "Introduction to AI for Nonprofits". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge check
// closes each chapter; a 20-question quiz closes the course. Model: scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-intro-ai",
  category: "Non Profits",
  name: "Introduction to AI for Nonprofits",
  skills: "Explaining AI to your team, Writing clear prompts for nonprofit tasks, Improving a draft, Checking facts, Protecting donor and client privacy",
  outcome: "use a free AI assistant to draft a real piece of nonprofit writing, such as a volunteer thank-you note or an event announcement: ask clearly, improve the draft, check every fact, and keep donor and client information out of it.",
  about: [
    "This course is for nonprofit and faith-based leaders, staff and volunteers who have heard about AI but have not used it much, or who want to use it more safely.",
    "You will learn what an AI assistant is, how to open a free one, how to ask for the writing your organization needs every week, how to improve and check the draft, and how to protect the people you serve.",
    "Each lesson takes about five minutes. Read the lesson, watch the slides, then do the \"Try it now\" task. A short knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Use a free AI assistant to draft a thank-you note to the volunteers who helped at a recent event (a food drive, a clean-up day or a church dinner). Use a three-part prompt, ask for two improvements, check every fact and date against your own records, make sure no volunteer's or donor's private details are in the prompt, and edit the final note so it sounds like your organization.",
  chapters: [
    {
      name: "Chapter 1: What AI can do for a nonprofit",
      lessons: [
        {
          title: "What an AI assistant is, and what it is not",
          minutes: 4,
          goal: "Explain to a coworker or volunteer what an AI assistant can and cannot do for your organization.",
          text: [
            "An AI assistant is a computer program you chat with in everyday words. You type a request, and it writes an answer in seconds. Well-known ones with free versions include ChatGPT, Microsoft Copilot and Google Gemini.",
            "For a nonprofit, it is good at first drafts: thank-you notes, newsletter articles, volunteer sign-up messages, meeting agendas, social media posts, and turning long reports into short summaries.",
            "It is not a staff member, a lawyer, an accountant or a grant officer. It does not know your donors, your programs or your community, and it can be wrong even when it sounds sure. A person on your team always reviews and decides."
          ],
          words: [["AI", "short for artificial intelligence: computer programs that do tasks that usually need a person, like writing or summarizing."], ["AI assistant", "an AI program you chat with by typing or talking."], ["First draft", "a starting version that a person then checks and improves."]],
          slides: [
            { title: "An AI assistant is...", bullets: ["A computer program you chat with", "You ask in everyday words", "It writes a draft in seconds"] },
            { title: "Good for nonprofit first drafts", bullets: ["Thank-you notes and newsletters", "Volunteer sign-up messages and agendas", "Short summaries of long reports"] },
            { title: "It is NOT", bullets: ["A lawyer, accountant or grant officer", "Always right, even when it sounds sure", "The decision maker: your team is"] }
          ],
          tryIt: "List three pieces of writing your organization produces every month (for example a volunteer reminder, a donor thank-you and a newsletter). Circle the one that takes the most time. That is your first AI task.",
          youCanNow: "say what an AI assistant is, name three nonprofit tasks it can help with, and say why a person still reviews its work."
        },
        {
          title: "Opening a free AI assistant",
          minutes: 4,
          goal: "Open a free AI assistant on a phone or computer and find where to type.",
          text: [
            "You can use an AI assistant on a smartphone or any computer with internet, including an office computer or a church office laptop.",
            "On a computer, open the web browser and type the address: chatgpt.com, copilot.microsoft.com or gemini.google.com. On a phone, install the official app from the app store, made by the real company (OpenAI, Microsoft or Google).",
            "If your organization already uses Microsoft 365 or Google Workspace, ask your administrator which AI tool is approved. A work account may have extra privacy protections that a personal account does not.",
            "On a shared office computer, do not let the browser save your password, and sign out when you finish."
          ],
          steps: ["Ask whether your organization has an approved AI tool.", "Computer: type the web address in the browser. Phone: install the official app.", "Find the message box near the bottom of the screen.", "On a shared computer, sign out and close the browser when you are done."],
          words: [["Web browser", "the program you use to visit websites, like Chrome, Edge or Safari."], ["Administrator", "the person who manages your organization's accounts and settings."]],
          slides: [
            { title: "Where to use it", bullets: ["Office or home computer", "Smartphone app from the official store", "Your organization's approved work tool"] },
            { title: "Web addresses", bullets: ["chatgpt.com", "copilot.microsoft.com", "gemini.google.com"] },
            { title: "Ask first", bullets: ["Which AI tool does our organization approve?", "Work accounts may protect data better"] },
            { title: "On a shared computer", bullets: ["Do not save your password", "Sign out and close the browser"] }
          ],
          tryIt: "Open one free AI assistant. Type: I volunteer at a nonprofit and I am learning to use AI. What are three ways you could help me this week? Read the answer.",
          youCanNow: "open a free AI assistant, find where to type, and check which tool your organization approves."
        },
        {
          title: "Asking for nonprofit writing in a clear prompt",
          minutes: 5,
          goal: "Write a three-part prompt that gets a useful nonprofit draft the first time.",
          text: [
            "What you type is called a prompt. A good prompt has three parts: what you need, the situation (with no private details), and how you want the answer.",
            "Example: \"Write a short thank-you email to 25 volunteers who helped at our Saturday food drive. We served 140 families. Use a warm tone, under 120 words, and end with a date for the next drive: [date].\"",
            "A weak prompt like \"thank you letter\" makes the assistant guess, so the answer is generic. Tell it who will read it and what tone fits your organization: warm, formal, joyful or faith-based."
          ],
          steps: ["Say what you need and who will read it.", "Add the situation: event, numbers, purpose. No names or private details.", "Say how you want it: length, tone, format.", "Use a placeholder like [date] for anything you will fill in yourself."],
          words: [["Prompt", "what you type or say to an AI assistant to ask for something."], ["Tone", "how writing sounds, such as warm, formal or cheerful."], ["Placeholder", "a marker like [date] that you replace yourself later."]],
          slides: [
            { title: "Three parts of a good prompt", bullets: ["1. What you need and who reads it", "2. The situation, no private details", "3. Length, tone and format"] },
            { title: "Weak vs clear", bullets: ["Weak: \"thank you letter\"", "Clear: thank-you email to 25 food drive volunteers", "140 families served, warm tone, under 120 words"] },
            { title: "Use placeholders", bullets: ["[date], [name], [amount]", "You fill them in yourself later"] }
          ],
          tryIt: "Take the task you circled in Lesson 1. Write a three-part prompt for it, using placeholders for names and dates, and send it. Save the answer.",
          youCanNow: "write a clear three-part prompt for a nonprofit writing task."
        }
      ],
      check: {
        title: "Knowledge Check 1: What AI can do for a nonprofit",
        questions: [
          { q: "Which task is a good fit for an AI assistant at a nonprofit?", options: ["Drafting a volunteer thank-you email", "Deciding which family gets food", "Signing a grant contract", "Approving the budget"], answer: 0, why: "AI is good at first drafts; people make decisions and sign." },
          { q: "The AI gives a confident answer about a grant deadline. What do you do?", options: ["Trust it", "Check the funder's official page", "Post it on social media", "Send it to the board as final"], answer: 1, why: "AI can be wrong when it sounds sure; check the official source." },
          { q: "Before using AI with work information, who should you ask?", options: ["A donor", "A stranger online", "Your organization's administrator or leader", "Nobody"], answer: 2, why: "Your organization may have an approved tool with better privacy protections." },
          { q: "Which prompt is clearest?", options: ["\"letter\"", "\"help with volunteers\"", "\"do our newsletter\"", "\"Write a warm 100-word thank-you email to 25 food drive volunteers who served 140 families.\""], answer: 3, why: "It says what, the situation and the format." },
          { q: "What is a placeholder in a prompt?", options: ["A marker like [date] you fill in later", "A password", "A donor's full name", "A kind of app"], answer: 0, why: "Placeholders keep real details out and remind you what to fill in." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI safely and well",
      lessons: [
        {
          title: "Improving the draft",
          minutes: 4,
          goal: "Use follow-up requests to turn a first draft into one that fits your organization.",
          text: [
            "The first answer is a draft. The assistant remembers the conversation, so you can ask it to change things one at a time.",
            "Useful follow-ups: \"Make it shorter.\" \"Make it sound warmer.\" \"Add one sentence about why volunteers matter to our mission.\" \"Write it at a 6th-grade reading level.\" \"Give me a version in Spanish.\"",
            "Then make it yours. Add real names and details yourself, after you copy the text out of the AI tool, and read it as if you were the volunteer or donor receiving it."
          ],
          steps: ["Read the first draft.", "Pick the one thing that most needs to change.", "Ask for that change.", "Repeat, then copy the text out and add real details yourself."],
          words: [["Follow-up", "a second request that builds on the answer you already got."], ["Reading level", "how easy text is to read; a lower grade level is easier."]],
          slides: [
            { title: "The first answer is a draft", bullets: ["Ask for one change at a time", "It remembers the same chat"] },
            { title: "Follow-ups that work", bullets: ["\"Make it shorter.\"", "\"Make it sound warmer.\"", "\"Add one line about our mission.\"", "\"Give me a Spanish version.\""] },
            { title: "Make it yours", bullets: ["Copy the text out of the AI tool", "Add real names and details yourself", "Read it as the person receiving it"] }
          ],
          tryIt: "Take your saved draft from Lesson 3. Ask for two changes, one at a time. Then copy the best version into a document and add one personal detail yourself.",
          youCanNow: "improve an AI draft with clear follow-ups and finish it in your organization's own voice."
        },
        {
          title: "Checking facts before you send",
          minutes: 5,
          goal: "Find and check every fact in an AI draft before it goes to donors, volunteers or the public.",
          text: [
            "AI assistants sometimes make things up: a wrong date, a statistic that does not exist, or a tax rule that is out of date. This is called a hallucination.",
            "Always check numbers, dates, names, quotes, statistics, tax and legal statements, and anything about what a donation pays for. Check against your own records, the official source (often a .gov page), or the person who knows.",
            "Never let AI invent impact numbers. If the draft says \"we served 500 families\" and your records say 140, use 140. Honest numbers keep donor trust."
          ],
          steps: ["Highlight every number, date, name and claim in the draft.", "Check each one against your records or an official source.", "Fix or remove anything you cannot confirm.", "Ask a second person to read anything that goes to the public."],
          words: [["Hallucination", "when an AI writes something that sounds true but is made up."], ["Impact number", "a count of what your program achieved, like families served."]],
          slides: [
            { title: "AI can make things up", bullets: ["Wrong dates and numbers", "Statistics that do not exist", "Old tax or legal rules"] },
            { title: "Always check", bullets: ["Numbers, dates, names, quotes", "Tax and legal statements", "What a donation pays for"] },
            { title: "Honest numbers", bullets: ["Use your own records", "Never let AI invent impact numbers", "A second reader for public pieces"] }
          ],
          tryIt: "Ask an AI assistant: \"Write two sentences about the need for food banks in my county.\" Highlight every number it gives. Try to find each one on an official site. Remove any you cannot confirm.",
          youCanNow: "spot facts in an AI draft and check them before sending."
        },
        {
          title: "Protecting donor, volunteer and client privacy",
          minutes: 5,
          goal: "Use AI without putting private information about donors, volunteers or the people you serve into it.",
          text: [
            "People trust your organization with their information. Do not paste into an AI tool: donor names with gift amounts, home addresses, phone numbers, bank or card details, client case notes, health information, immigration status or children's details.",
            "You can still get help. Describe the situation in general terms and use placeholders: \"Write a thank-you to [donor name] for a gift of [amount] to our youth program.\" Fill in the real details after you copy the draft out.",
            "Follow your organization's privacy policy, and ask a leader if you are unsure. When in doubt, leave it out."
          ],
          steps: ["Before you send a prompt, read it for names and private details.", "Replace each one with a placeholder.", "Add real details only after you copy the draft out of the AI tool.", "Follow your organization's privacy policy."],
          words: [["Private information", "details that could identify a person or harm them if shared, like an address or a gift amount."], ["Privacy policy", "your organization's written rules for handling personal information."]],
          slides: [
            { title: "Never paste into AI", bullets: ["Donor names with gift amounts", "Addresses, phone numbers, bank details", "Client case notes, health or immigration details"] },
            { title: "Use placeholders instead", bullets: ["\"Thank [donor name] for [amount]\"", "Fill in real details after copying out"] },
            { title: "When in doubt", bullets: ["Leave it out", "Follow your privacy policy", "Ask a leader"] }
          ],
          tryIt: "Final task: draft a thank-you note to the volunteers from a recent event. Use a three-part prompt with placeholders, ask for two improvements, check every fact against your records, and edit it to sound like your organization.",
          youCanNow: "use AI for real nonprofit writing while protecting the privacy of the people you serve."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI safely and well",
        questions: [
          { q: "The draft is too formal for your church volunteers. What do you do?", options: ["Send it anyway", "Ask: \"Make it sound warmer and more personal\"", "Delete the AI tool", "Ask for a longer version"], answer: 1, why: "A clear follow-up asks for exactly the change you need." },
          { q: "The AI draft says you served 500 families. Your records say 140. What do you use?", options: ["500, it sounds better", "Leave the number vague on purpose", "140, from your records", "Ask the AI to pick"], answer: 2, why: "Honest numbers from your own records keep donor trust." },
          { q: "Which of these should you NOT paste into an AI tool?", options: ["\"Make it shorter\"", "The name of your food drive", "The word \"thank you\"", "A client's case notes"], answer: 3, why: "Case notes are private information about the people you serve." },
          { q: "How do you thank a specific donor without sharing their details with AI?", options: ["Use placeholders like [donor name] and [amount]", "Paste their full record", "Use their bank details", "Skip the thank-you"], answer: 0, why: "Placeholders get you a draft; you add real details afterwards." },
          { q: "What is a hallucination in AI?", options: ["A design style", "Text that sounds true but is made up", "A privacy setting", "A slow internet connection"], answer: 1, why: "AI can invent facts that sound real, so you check them." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to AI for Nonprofits",
    questions: [
      { q: "An AI assistant is best described as:", options: ["A volunteer", "A grant database", "A computer program you chat with in everyday words", "A bank"], answer: 2, why: "It is a program you type or talk to that writes answers." },
      { q: "Which nonprofit task is AI best at?", options: ["Choosing which clients get help", "Signing contracts", "Approving payroll", "Writing a first draft of a newsletter"], answer: 3, why: "First drafts are a strength; decisions stay with people." },
      { q: "Who makes final decisions when your team uses AI?", options: ["People on your team", "The AI", "The software company", "Donors"], answer: 0, why: "A person always reviews and decides." },
      { q: "Which is a web address for a free AI assistant?", options: ["donate-now.win", "gemini.google.com", "freegrants.xyz", "none of these"], answer: 1, why: "gemini.google.com is Google's official address for Gemini." },
      { q: "Why ask which AI tool your organization approves?", options: ["To get a discount on coffee", "Because AI is illegal", "Approved work tools may protect data better", "It does not matter"], answer: 2, why: "Work accounts can come with extra privacy protections and rules." },
      { q: "On a shared office computer, after using AI you should:", options: ["Save your password", "Leave it open", "Write your password on a note", "Sign out and close the browser"], answer: 3, why: "Signing out protects your account." },
      { q: "A good prompt includes:", options: ["What you need, the situation and the format", "One word", "Donor bank details", "Your password"], answer: 0, why: "Those three parts get a useful draft." },
      { q: "Which prompt will get the best volunteer reminder?", options: ["\"reminder\"", "\"Write a friendly 80-word text reminding volunteers of Saturday's 9 am park clean-up and to bring gloves.\"", "\"volunteers\"", "\"help\""], answer: 1, why: "It gives the need, situation and format." },
      { q: "What does [date] in a prompt mean?", options: ["A secret code", "A donor's birthday", "A placeholder you fill in later", "An error"], answer: 2, why: "Placeholders mark details you add yourself." },
      { q: "The first draft is too long. The best next step is:", options: ["Start a new organization", "Send it anyway", "Add more words", "Ask: \"Make it shorter\""], answer: 3, why: "A follow-up asks for the change." },
      { q: "When should you add real donor names to a thank-you?", options: ["After you copy the draft out of the AI tool", "In the first prompt", "Never thank donors", "Only in the AI chat"], answer: 0, why: "Adding them outside the tool keeps them private." },
      { q: "Which follow-up could help reach more of your community?", options: ["\"Add my password.\"", "\"Give me a Spanish version.\"", "\"Make up a statistic.\"", "\"Delete the chat.\""], answer: 1, why: "A translated version reaches more readers; a fluent speaker should still review it." },
      { q: "Which should you ALWAYS check in an AI draft?", options: ["The greeting word", "The font", "Numbers, dates and claims", "Nothing"], answer: 2, why: "Numbers, dates and claims can be made up." },
      { q: "Where do you check a tax or legal statement?", options: ["Another AI chat", "A social media comment", "Guess", "The official source, often a .gov page, or a professional"], answer: 3, why: "Official sources and professionals are reliable." },
      { q: "Why must impact numbers come from your records?", options: ["Honest numbers keep donor trust", "AI numbers are always too small", "Donors do not read them", "It is faster"], answer: 0, why: "Made-up numbers mislead donors and damage trust." },
      { q: "Who should read anything going to the public?", options: ["Nobody", "A second person on your team", "Only the AI", "A random stranger"], answer: 1, why: "A second reader catches mistakes." },
      { q: "Which is private information you should keep out of AI?", options: ["The name of your annual gala", "The word \"mission\"", "A volunteer's home address", "Your public website address"], answer: 2, why: "Home addresses are private personal details." },
      { q: "You are unsure whether something is too private for AI. You should:", options: ["Paste it anyway", "Post it online", "Email it to the AI company", "Leave it out and ask a leader"], answer: 3, why: "When in doubt, leave it out." },
      { q: "Which written rules guide how your organization handles personal information?", options: ["The privacy policy", "The menu", "The volunteer T-shirt order", "The parking map"], answer: 0, why: "A privacy policy sets the rules for personal information." },
      { q: "Client health or immigration details should be:", options: ["Pasted in for better answers", "Kept out of AI tools", "Shared in newsletters", "Used as examples online"], answer: 1, why: "They are sensitive and could harm the person if shared." }
    ]
  }
};
