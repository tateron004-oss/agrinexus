"use strict";

// Koach Learn course: Non Profits -> "Essential AI Tools for Nonprofits and How to Use Them". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three
// micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Model: scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-export.js for how it is built.
// Facts checked 27 October 2026: google.com/nonprofits (eligibility, Goodstack validation, Workspace discounts, Ad Grants), google.com/grants (up to $10,000 a month in search ads),
// microsoft.com/en-us/nonprofits/offers-for-nonprofits (Business Basic free up to 300 users; Copilot Chat included). Canva's nonprofit page refused the fetch, so the course tells students to check it themselves.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-essential-ai-tools",
  category: "Non Profits",
  name: "Essential AI Tools for Nonprofits and How to Use Them",
  skills: "Choosing the right AI tool for a task, Finding nonprofit tech programs, Summarizing meetings and documents, Making flyers and graphics with AI, Building a simple toolkit for your team",
  outcome: "pick the right free or nonprofit-discounted AI tool for a task, use a chat assistant to turn rough meeting notes into a clear summary with action items, use a design tool to make a volunteer flyer, and write a one-page toolkit card your team can follow.",
  about: [
    "This course is for nonprofit and faith-based staff and volunteers who want a short, practical list of AI tools and the know-how to use each one.",
    "You will learn the four kinds of AI tools most nonprofits need, where to find nonprofit programs from Google and Microsoft, and how to do two real jobs with AI: a meeting summary and a volunteer flyer.",
    "Each lesson takes about five minutes and ends with a hands-on task. Prices and programs change, so the course points you to the official pages to check before you sign up. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Make a one-page \"AI toolkit card\" for your team that names one chat assistant, one office suite and one design tool, says what each is for and what must never go into it, and attach two things you made with them: a meeting summary with action items (from notes with no private details) and a volunteer recruitment flyer.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit and faith-based staff and volunteers who want a short, practical list of AI tools and the know-how to use each one, often at small organizations with no IT staff.",
    startingPoint: "Use email, documents and a phone every day, and may have tried a chat assistant. Most do not know which nonprofit tech programs they qualify for or how to set tools up safely for a team.",
    gap: "Small teams often pay for tools they could get free or discounted, use personal accounts that leave with volunteers, and spend hours on meeting notes and flyers. Learners need a small, safe set of tools and a team card that shows everyone how to use them.",
    constraints: [
      "Budget: free or nonprofit-discounted tools only",
      "Program prices and rules change; learners check official pages before applying",
      "Privacy: no donor, volunteer or client private information in any tool unless leaders approved it",
      "Recording meetings needs everyone's agreement; children's photos need written permission from a parent or guardian",
      "Time: about 60 minutes in total, in 5-minute lessons"
    ],
    prerequisites: "\"Introduction to AI for Nonprofits\", or some experience using an AI assistant."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a nonprofit task", action: "choose the right kind of AI tool for it: chat assistant, office suite, design tool or meeting and note tool", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Using the official program pages", action: "identify which nonprofit tech programs your organization may qualify for and what you need to apply", standard: "with current terms checked on the official page" },
    { id: "O3", condition: "When your team starts using a tool", action: "set it up with an organization account, two-step sign-in and its privacy controls checked", standard: "with no private information going in unless leaders approved it" },
    { id: "O4", condition: "Given rough meeting notes", action: "remove private details and use a chat assistant to write a summary with an action-item table", standard: "with every decision and date checked against your notes" },
    { id: "O5", condition: "Given a volunteer event", action: "create a recruitment flyer with AI-written text and a design tool template", standard: "with date, time, place and contact checked and only permitted photos" },
    { id: "O6", condition: "For your team", action: "write a one-page toolkit card that names each approved tool, what it is for and what must never go into it", standard: "with your best prompts added and a review date set" }
  ],
  chapters: [
    {
      name: "Chapter 1: Knowing your tools",
      lessons: [
        {
          objectives: ["O1"],
          title: "The four kinds of AI tools a nonprofit uses",
          minutes: 4,
          goal: "Match a nonprofit task to the right kind of AI tool.",
          text: [
            "Most nonprofit AI work fits four kinds of tools. Chat assistants (ChatGPT, Microsoft Copilot, Google Gemini) write, explain and summarize. Office suites (Microsoft 365, Google Workspace) have AI built into email, documents and spreadsheets.",
            "Design tools (such as Canva or Adobe Express) help make flyers, social posts and slides, often with AI features. Meeting and note tools can record or transcribe a meeting and draft a summary, but only use them when everyone in the meeting agrees.",
            "Start with one tool from each kind that your organization already has. Fewer tools, used well, beat many tools used once."
          ],
          words: [["Chat assistant", "an AI you type or talk to that writes answers."], ["Office suite", "a set of work programs: email, documents, spreadsheets, slides."], ["Transcribe", "turn spoken words into written text."]],
          slides: [
            { title: "Four kinds of AI tools", bullets: ["Chat assistants: write, explain, summarize", "Office suites: AI in email and documents", "Design tools: flyers, posts, slides", "Meeting tools: transcripts and summaries"] },
            { title: "Examples", bullets: ["ChatGPT, Microsoft Copilot, Google Gemini", "Microsoft 365, Google Workspace", "Canva, Adobe Express"] },
            { title: "Keep it simple", bullets: ["Start with what you already have", "One tool per kind", "Meeting recordings only with everyone's consent"] }
          ],
          tryIt: "Write down the tools your organization already uses (email, documents, design). For each, note which of the four kinds it is.",
          youCanNow: "name the four kinds of AI tools and match a task to the right one.",
          quickCheck: [
            { objective: "O1", q: "Which kind of tool has AI built into email, documents and spreadsheets?", options: ["An office suite", "A design tool", "A meeting recorder", "A search ad"], answer: 0, why: "Office suites like Microsoft 365 and Google Workspace have AI built into everyday work programs." },
            { objective: "O1", q: "Your team has tried eight AI tools once each. What does this lesson suggest?", options: ["Try eight more", "Pick one tool from each kind that you already have and use it well", "Stop using AI", "Use only design tools"], answer: 1, why: "Fewer tools, used well, beat many tools used once." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Finding free and discounted nonprofit programs",
          minutes: 5,
          goal: "Find out which nonprofit tech programs your organization may qualify for and where to apply.",
          text: [
            "Big tech companies run nonprofit programs. Google for Nonprofits gives eligible registered charities no-cost or discounted Google products, including discounts on Google Workspace and Google Ad Grants, which gives qualifying nonprofits up to $10,000 a month in Google search ads. Google uses a partner called Goodstack to verify that you are a nonprofit.",
            "Microsoft's nonprofit offers include Microsoft 365 Business Basic free for up to 300 users, discounted paid plans, and Copilot Chat included with a Microsoft 365 subscription. You register and Microsoft confirms your eligibility.",
            "Not every group qualifies. Google's program excludes government bodies, hospitals and schools, for example. Design tools such as Canva also run nonprofit programs; check their official nonprofit page for current terms. Prices and rules change, so always check the official page before you apply."
          ],
          steps: ["Have your organization's legal name, address and tax-exempt proof ready.", "Open the official Google for Nonprofits and Microsoft nonprofit pages.", "Read the eligibility rules.", "Apply with an organization email, not a personal one.", "Activate each product separately after you are approved."],
          words: [["Eligible", "allowed to join because you meet the rules."], ["Tax-exempt", "recognized by the government as not paying certain taxes, such as a 501(c)(3) in the United States."], ["Ad Grants", "Google's program giving qualifying nonprofits free search ads."]],
          slides: [
            { title: "Google for Nonprofits", bullets: ["No-cost or discounted Google products", "Workspace discounts and Ad Grants", "Ad Grants: up to $10,000 a month in search ads", "Verified through Goodstack"] },
            { title: "Microsoft nonprofit offers", bullets: ["Microsoft 365 Business Basic free up to 300 users", "Discounted paid plans", "Copilot Chat included with Microsoft 365"] },
            { title: "Before you apply", bullets: ["Check eligibility on the official page", "Have tax-exempt proof ready", "Prices and rules change: check first"] }
          ],
          sources: [
            { name: "Google for Nonprofits", url: "https://www.google.com/nonprofits/" },
            { name: "Google Ad Grants", url: "https://www.google.com/grants/" },
            { name: "Microsoft offers for nonprofits", url: "https://www.microsoft.com/en-us/nonprofits/offers-for-nonprofits" }
          ],
          tryIt: "Open the Google for Nonprofits and Microsoft nonprofit offers pages. Write down whether your organization looks eligible for each and what proof you would need.",
          youCanNow: "find nonprofit tech programs, check eligibility, and know what to have ready to apply.",
          quickCheck: [
            { objective: "O2", q: "What does Microsoft do after you register for its nonprofit offers?", options: ["Sends you a bill", "Asks for donor lists", "Confirms your eligibility", "Gives you a grant in cash"], answer: 2, why: "You register and Microsoft confirms your eligibility." },
            { objective: "O2", q: "A public school asks you if it can join Google for Nonprofits. What do you tell them?", options: ["Yes, every group qualifies", "Yes, if they pay a fee", "Only on weekends", "Google's page says schools are excluded, so check the official page"], answer: 3, why: "Google's program excludes government bodies, hospitals and schools." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Setting safe habits for every tool",
          minutes: 4,
          goal: "Set up an AI tool safely for your team's use.",
          text: [
            "Use organization accounts, not personal ones, so work stays with the organization when a volunteer moves on. Turn on two-step sign-in for every account.",
            "Learn where each tool keeps your chat history and whether it can be turned off or deleted. Look in the tool's settings for privacy or data controls.",
            "The golden rule is the same in every tool: no donor, volunteer or client private information goes in unless your leaders have approved that tool for it. Use placeholders like [name] instead."
          ],
          steps: ["Sign in with an organization account.", "Turn on two-step sign-in.", "Open settings and find the privacy or data controls.", "Agree as a team: no private information, use placeholders."],
          words: [["Two-step sign-in", "a second check, like a code on your phone, when you log in."], ["Chat history", "the record a tool keeps of your past conversations."]],
          slides: [
            { title: "Accounts", bullets: ["Organization accounts, not personal", "Work stays when volunteers move on"] },
            { title: "Security", bullets: ["Turn on two-step sign-in", "Find privacy or data controls in settings"] },
            { title: "The golden rule", bullets: ["No private donor, volunteer or client info", "Use placeholders like [name]"] }
          ],
          tryIt: "Open the settings of the AI tool you use most. Find where it keeps your chat history and any privacy controls. Write one sentence on what you found.",
          youCanNow: "set up an AI tool with safe habits for your team.",
          quickCheck: [
            { objective: "O3", q: "Where do you find a tool's chat history and data controls?", options: ["In the tool's settings", "In your email inbox", "On a social media page", "Nowhere; they cannot be changed"], answer: 0, why: "Look in the tool's settings for privacy or data controls." },
            { objective: "O3", q: "A volunteer set up the team's design tool on her personal account and is moving away. What should you have done?", options: ["Nothing; personal accounts are best", "Used an organization account so the work stays with the organization", "Shared her password with everyone", "Turned off two-step sign-in"], answer: 1, why: "Organization accounts keep work with the organization when a volunteer moves on." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Knowing your tools",
        questions: [
          { objective: "O1", q: "You need a volunteer flyer. Which kind of tool fits best?", options: ["A design tool", "A spreadsheet", "A meeting recorder", "A calculator"], answer: 0, why: "Design tools make flyers and graphics." },
          { objective: "O2", q: "What does Google Ad Grants give qualifying nonprofits?", options: ["Free laptops", "Up to $10,000 a month in Google search ads", "Cash donations", "Free staff"], answer: 1, why: "Google's official page says up to $10,000 a month in search ads." },
          { objective: "O3", q: "Before recording a meeting with an AI note tool, you must:", options: ["Hide the recorder", "Ask only the chair", "Get everyone's agreement", "Nothing"], answer: 2, why: "People should agree before they are recorded." },
          { objective: "O3", q: "Why use an organization account instead of a personal one?", options: ["It is faster to type", "Personal accounts are illegal", "No reason", "Work stays with the organization"], answer: 3, why: "Work is not lost when a volunteer leaves." },
          { objective: "O2", q: "Program prices and rules change. What do you do?", options: ["Check the official page before applying", "Trust an old blog post", "Ask an AI and accept it", "Guess"], answer: 0, why: "Official pages have the current rules." }
        ]
      }
    },
    {
      name: "Chapter 2: Doing real work with AI tools",
      lessons: [
        {
          objectives: ["O4"],
          title: "Turning meeting notes into a clear summary",
          minutes: 5,
          goal: "Use a chat assistant to turn rough meeting notes into a summary with action items.",
          text: [
            "Board, ministry team and volunteer meetings produce messy notes. A chat assistant can turn them into a clean summary in seconds.",
            "First remove private details: no names of clients, health issues or donor amounts. Use roles instead: \"the treasurer\", \"the youth lead\". Then paste the notes with this prompt: \"Summarize these meeting notes in 5 bullet points. Then list action items as a table with: task, who (by role), and due date.\"",
            "Check the summary against your notes. AI can miss a decision or invent a due date. Fix it, then add real names yourself before you share it."
          ],
          steps: ["Remove private details; use roles instead of names.", "Paste the notes into the chat assistant.", "Ask for a 5-bullet summary and an action-item table.", "Check every decision and date against your notes.", "Add real names yourself, then share."],
          words: [["Action item", "a task someone agreed to do after a meeting."], ["Summary", "a short version that keeps the main points."]],
          slides: [
            { title: "Prepare the notes", bullets: ["Remove client, health and donor details", "Use roles: treasurer, youth lead"] },
            { title: "The prompt", bullets: ["Summarize in 5 bullet points", "Action items table: task, who, due date"] },
            { title: "Check and finish", bullets: ["Compare with your notes", "Fix missing decisions and invented dates", "Add real names yourself"] }
          ],
          tryIt: "Take notes from a recent meeting (or write five lines of practice notes). Remove private details, ask for a summary and an action-item table, and check it against the notes.",
          youCanNow: "turn meeting notes into a checked summary with action items using AI.",
          quickCheck: [
            { objective: "O4", q: "In the summary prompt, how is \"who\" listed in the action-item table?", options: ["By full name and phone", "By home address", "By role", "By donor amount"], answer: 2, why: "The prompt asks for task, who (by role) and due date; you add names later." },
            { objective: "O4", q: "The AI summary leaves out a decision the board made. What do you do?", options: ["Share it as it is", "Delete the notes", "Ask AI to guess what was decided", "Add the decision from your notes before sharing"], answer: 3, why: "Check the summary against your notes and fix anything missed." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making a volunteer flyer with AI",
          minutes: 5,
          goal: "Use AI to write flyer text and a design tool to lay it out.",
          text: [
            "Start with the words. Ask a chat assistant: \"Write flyer text to recruit volunteers for our Saturday tutoring program for middle schoolers. Include a short headline, three reasons to join, the time commitment, and how to sign up. Under 60 words.\"",
            "Then open a design tool, search its templates for \"volunteer\" or \"flyer\", and paste in your text. Many design tools have AI features that suggest layouts or images; describe what you want and pick one.",
            "Check the details yourself: date, time, place, contact and sign-up link. Use photos you have permission to use, and never show children's faces without written permission from a parent or guardian."
          ],
          steps: ["Ask a chat assistant for short flyer text.", "Open a design tool and search for a flyer template.", "Paste your text and adjust the layout.", "Check date, time, place and contact.", "Use only images you have permission to use."],
          words: [["Template", "a ready-made design you fill in with your own words."], ["Permission", "agreement, often written, to use someone's photo or work."]],
          slides: [
            { title: "Words first", bullets: ["Headline, three reasons, time commitment", "How to sign up", "Under 60 words"] },
            { title: "Then design", bullets: ["Open a design tool", "Search \"volunteer flyer\" templates", "Paste and adjust"] },
            { title: "Check before printing", bullets: ["Date, time, place, contact", "Photos with permission only", "No children's faces without parent permission"] }
          ],
          tryIt: "Make a volunteer recruitment flyer for a real or practice program: AI-written text under 60 words, laid out in a design tool template. Check every detail.",
          youCanNow: "make a volunteer flyer using AI for the words and a design tool for the layout.",
          quickCheck: [
            { objective: "O5", q: "What do you search for in a design tool's templates?", options: ["Words like \"volunteer\" or \"flyer\"", "Your donors' names", "Your password", "A client's address"], answer: 0, why: "Search the templates for \"volunteer\" or \"flyer\" and paste in your text." },
            { objective: "O5", q: "The AI flyer text lists the wrong sign-up link. What do you do?", options: ["Print it anyway", "Fix the link yourself before printing", "Remove the sign-up part", "Ask the design tool to guess the link"], answer: 1, why: "Check date, time, place, contact and sign-up link yourself." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Building your team's AI toolkit card",
          minutes: 5,
          goal: "Write a one-page toolkit card that tells your team which tools to use and how.",
          text: [
            "A toolkit card is one page your team can keep beside the computer. It names each approved tool, what it is for, how to sign in, and what must never go into it.",
            "Keep it short: one row per tool. Add the two or three prompts that worked best for your team, like the meeting summary prompt, so new volunteers can copy them.",
            "Review the card every six months. Tools, prices and nonprofit programs change, and your team will discover better prompts."
          ],
          steps: ["List one chat assistant, one office suite and one design tool.", "For each: what it is for and how to sign in.", "Add the privacy rule for each.", "Add your two or three best prompts.", "Set a date to review it in six months."],
          words: [["Toolkit card", "a one-page guide to the tools your team uses and how to use them safely."]],
          slides: [
            { title: "One row per tool", bullets: ["Name and what it is for", "How to sign in", "What never goes in"] },
            { title: "Add your best prompts", bullets: ["Meeting summary prompt", "Flyer text prompt", "New volunteers can copy them"] },
            { title: "Keep it current", bullets: ["Review every six months", "Tools and programs change"] }
          ],
          tryIt: "Final task: write your team's one-page AI toolkit card with three tools, their uses and privacy rules, and attach the meeting summary and flyer you made.",
          youCanNow: "choose, use and document a small set of AI tools for your nonprofit team.",
          quickCheck: [
            { objective: "O6", q: "How is a toolkit card laid out?", options: ["A long manual", "A video", "One row per tool on one page", "A list of passwords"], answer: 2, why: "Keep it short: one page, one row per tool." },
            { objective: "O6", q: "Your team found a meeting prompt that works really well. What do you do with it?", options: ["Keep it to yourself", "Delete it after use", "Send it to donors", "Add it to the toolkit card so new volunteers can copy it"], answer: 3, why: "Add the best prompts so new volunteers can copy what works." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Doing real work with AI tools",
        questions: [
          { objective: "O4", q: "Before pasting meeting notes into AI, you should:", options: ["Add donor bank details", "Remove private details and use roles instead of names", "Paste them exactly as written", "Email them to everyone first"], answer: 1, why: "Roles keep private details out of the AI tool." },
          { objective: "O4", q: "The AI summary lists a due date nobody agreed to. What do you do?", options: ["Keep it", "Ask the AI to keep it", "Fix it from your notes", "Share it anyway"], answer: 2, why: "AI can invent details; your notes are the record." },
          { objective: "O5", q: "Which is a good use of a design tool template?", options: ["Store donor lists", "Write a budget", "Record a meeting", "Paste your flyer text into a ready-made layout"], answer: 3, why: "Templates give you a ready layout." },
          { objective: "O5", q: "You want a photo of children at your program on the flyer. What do you need?", options: ["Written permission from a parent or guardian", "Nothing", "A bigger photo", "An AI to blur it"], answer: 0, why: "Children's images need permission from a parent or guardian." },
          { objective: "O6", q: "How often should you review your toolkit card?", options: ["Never", "About every six months", "Every day", "Only when a donor asks"], answer: 1, why: "Tools and programs change." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Essential AI Tools for Nonprofits and How to Use Them",
    questions: [
      { objective: "O1", q: "Which is a chat assistant?", options: ["A printer", "A spreadsheet cell", "Microsoft Copilot", "A stapler"], answer: 2, why: "Copilot, ChatGPT and Gemini are chat assistants." },
      { objective: "O1", q: "An office suite is:", options: ["A meeting room", "A donor database only", "A phone", "A set of work programs like email, documents and spreadsheets"], answer: 3, why: "Microsoft 365 and Google Workspace are office suites." },
      { objective: "O1", q: "Which kind of tool makes social media graphics?", options: ["A design tool", "A calculator", "A bank app", "A thermostat"], answer: 0, why: "Design tools make graphics and flyers." },
      { objective: "O1", q: "What does \"transcribe\" mean?", options: ["Translate to Spanish", "Turn spoken words into written text", "Delete a file", "Send a donation"], answer: 1, why: "Meeting tools can transcribe what people say." },
      { objective: "O1", q: "The best way to start choosing tools is:", options: ["Buy every new tool", "Use none", "Use what you already have, one per kind", "Ask a stranger"], answer: 2, why: "Fewer tools, used well." },
      { objective: "O2", q: "Google for Nonprofits verifies organizations through:", options: ["The post office", "Your bank", "A donor", "Goodstack"], answer: 3, why: "Google names Goodstack as its validation partner." },
      { objective: "O2", q: "Which group is NOT eligible for Google for Nonprofits, per its page?", options: ["A government body", "A registered charity", "A food bank charity", "A community nonprofit"], answer: 0, why: "Government entities, hospitals and schools are excluded." },
      { objective: "O2", q: "Microsoft's nonprofit offers include:", options: ["Free cars", "Microsoft 365 Business Basic free up to 300 users", "Cash grants for rent", "Free office buildings"], answer: 1, why: "Microsoft's page lists Business Basic free up to 300 users." },
      { objective: "O2", q: "What should you have ready before applying to a nonprofit tech program?", options: ["Donors' card numbers", "Client case files", "Your legal name, address and tax-exempt proof", "Nothing"], answer: 2, why: "Programs check that you are a real nonprofit." },
      { objective: "O3", q: "Two-step sign-in means:", options: ["Logging in twice a day", "Sharing your password", "Two people share one account", "A second check like a phone code when you log in"], answer: 3, why: "It protects accounts if a password leaks." },
      { objective: "O3", q: "Where do you look for a tool's privacy controls?", options: ["Its settings", "The trash bin", "A donor's email", "The printer"], answer: 0, why: "Settings usually hold data and privacy controls." },
      { objective: "O3", q: "The golden rule in every AI tool is:", options: ["Paste everything for best results", "No private donor, volunteer or client information unless approved", "Use personal accounts only", "Never check answers"], answer: 1, why: "Protecting private information keeps trust." },
      { objective: "O4", q: "In a meeting summary prompt, you should ask for:", options: ["A poem", "Donor bank details", "Bullet points and an action-item table", "A random story"], answer: 2, why: "This gives a clear, usable summary." },
      { objective: "O4", q: "Why use roles like \"the treasurer\" in notes you paste?", options: ["It is shorter", "AI cannot read names", "Treasurers prefer it", "To keep names and private details out"], answer: 3, why: "Roles protect privacy." },
      { objective: "O4", q: "What do you check on an AI meeting summary?", options: ["Every decision and date against your notes", "Only the font", "Nothing", "The length only"], answer: 0, why: "AI can miss or invent details." },
      { objective: "O5", q: "Good flyer text for volunteers includes:", options: ["Only a logo", "Headline, reasons to join, time commitment and how to sign up", "Donor names", "A long history of the organization"], answer: 1, why: "It tells readers why and how to join." },
      { objective: "O5", q: "Before printing a flyer, check:", options: ["Only the colors", "The weather", "Date, time, place and contact", "Nothing"], answer: 2, why: "Wrong details stop people from coming." },
      { objective: "O6", q: "A toolkit card is:", options: ["A gift card", "A volunteer badge", "A donation receipt", "A one-page guide to your team's approved tools"], answer: 3, why: "It shows which tools to use and how." },
      { objective: "O6", q: "Why add your best prompts to the toolkit card?", options: ["New volunteers can copy what works", "To fill space", "Prompts are secret", "Donors want them"], answer: 0, why: "Shared prompts save time and keep quality." },
      { objective: "O2", q: "Canva's nonprofit terms may have changed. You should:", options: ["Assume it is free forever", "Check Canva's official nonprofit page", "Ask a chat assistant and trust it", "Skip design tools"], answer: 1, why: "Official pages have the current terms." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      5,
      9,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Right tools named",
        objective: "O1",
        notYet: "Missing one of the three tool kinds, or a tool is used for the wrong job.",
        meets: "Names one chat assistant, one office suite and one design tool, each with what it is for.",
        exceeds: "Notes which tools come free or discounted through a nonprofit program."
      },
      {
        name: "Safety rules on the card",
        objective: "O3",
        notYet: "The card does not say what must never go into each tool.",
        meets: "Each tool says what must never go into it, with organization accounts and two-step sign-in.",
        exceeds: "Also says where to find each tool's privacy controls."
      },
      {
        name: "Meeting summary",
        objective: "O4",
        notYet: "The summary has names or private details, or a wrong decision or date.",
        meets: "Summary and action-item table by role, checked against the notes.",
        exceeds: "Real names were added only after copying out of the AI tool."
      },
      {
        name: "Volunteer flyer",
        objective: "O5",
        notYet: "Wrong or missing date, time, place or contact, or an unpermitted photo.",
        meets: "Headline, reasons to join, time commitment and sign-up, all details checked.",
        exceeds: "Uses only photos with permission and is easy to read at a glance."
      },
      {
        name: "Usable toolkit card",
        objective: "O6",
        notYet: "More than one page, or missing how to sign in.",
        meets: "One page, one row per tool, with the best prompts.",
        exceeds: "Has a review date about six months away and an owner."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Organizations that apply for at least one nonprofit tech program within 60 days (follow-up survey)",
      "Teams using their toolkit card for meeting summaries or flyers within 30 days",
      "Learners who start another Koach Learn nonprofit course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "A free chat assistant, your office suite and a free design tool account",
      "Sample meeting notes with no private details",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Before the session, check which office suite and design tool the organization already has.",
      "Have the organization's legal name, address and tax-exempt proof ready if learners will apply to programs during the session.",
      "Provide sample meeting notes with roles instead of names so no real private details are pasted.",
      "Remind learners that children's photos need written permission from a parent or guardian.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
