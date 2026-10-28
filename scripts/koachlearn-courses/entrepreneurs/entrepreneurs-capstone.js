"use strict";

// Koach Learn course: Entrepreneurs -> capstone. The student chooses ONE project (AI startup business plan, AI-powered service business, AI automation system, AI marketing strategy, or AI productivity ecosystem) and produces it; the six lessons are the stages of building it.
// Shape: re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-capstone",
  category: "Entrepreneurs",
  name: "Capstone Project: Build Your AI Business Plan, Service, Automation, Marketing Strategy or Productivity System",
  skills: "Choosing and scoping a project, Validating with real people, Designing the solution, Building it with AI, Checking numbers and risks, Testing and presenting your work",
  outcome: "choose one AI business project (a startup business plan, a service business, an automation system, a marketing strategy, or a productivity ecosystem), build it from start to finish with AI as your assistant, test it with real people, and present a finished, checked version.",
  about: [
    "This is the capstone: the project that pulls together everything in the Entrepreneurs courses. You will choose ONE of five projects and build it for a real business, your own or one you know well.",
    "The five choices are: 1) an AI startup business plan, 2) an AI-powered service business, 3) an AI automation system for a business, 4) an AI marketing strategy, or 5) an AI productivity ecosystem (the tools, templates and routines that run a business week). Each lesson is one stage of building it: choose and scope, validate, design, build, check numbers and risks, then test and present.",
    "Each lesson is about five minutes to read, but the \"Try it now\" tasks are real project work and may take an hour or more. There is a knowledge check after each chapter and a 20-question quiz at the end. When your project touches taxes, licenses or legal claims, the lessons point you to official sources; talk to an accountant or lawyer about your situation."
  ],
  finalTask: "Deliver your finished capstone project as one document or folder: a one-page summary (the business, the customer, the problem, your solution), the full project (business plan, service package, working automation with its record, marketing strategy, or productivity ecosystem), your validation notes from at least three real people, the numbers and risk checklist, test results and the changes you made, and a three-minute presentation you can give out loud.",
  chapters: [
    {
      name: "Chapter 1: Plan your project",
      lessons: [
        {
          title: "Stage 1: Choosing and scoping your project",
          minutes: 6,
          goal: "Choose one of the five capstone projects and write a one-paragraph scope.",
          text: [
            "Pick the project that will help a real business most in the next three months. A business plan fits a new idea that needs a clear plan or funding. A service business fits someone ready to sell a service using AI. An automation system fits a business drowning in repeated tasks. A marketing strategy fits a business that needs more customers. A productivity ecosystem fits an owner who is overwhelmed and needs a better week.",
            "Scope means deciding what is in and what is out. A good scope is small enough to finish: \"A 90-day marketing strategy for my mobile car wash, focused on one neighborhood and two channels\" is better than \"marketing for everything\".",
            "Ask AI to help you compare: \"Here is my business and my biggest problem. Which of these five capstone projects would help most, and why?\" Then decide yourself and write your scope."
          ],
          steps: ["Write your business (or the one you are helping) and its biggest problem.", "Read the five project choices.", "Ask AI which would help most and why.", "Choose one.", "Write a one-paragraph scope: what is in, what is out, and the finish date."],
          words: [["Capstone", "a final project that brings together everything you learned."], ["Scope", "the limits of a project: what is included and what is not."]],
          slides: [
            { title: "Five capstone choices", bullets: ["AI startup business plan", "AI-powered service business", "AI automation system", "AI marketing strategy or productivity ecosystem"] },
            { title: "Which fits?", bullets: ["New idea needing a plan: business plan", "Ready to sell a service: service business", "Too many repeated tasks: automation"] },
            { title: "And", bullets: ["Need customers: marketing strategy", "Overwhelmed owner: productivity ecosystem"] },
            { title: "Scope it small", bullets: ["What is in, what is out", "A finish date", "Small enough to finish"] }
          ],
          tryIt: "Choose your capstone project and write a one-paragraph scope with what is in, what is out and your finish date.",
          youCanNow: "choose a capstone project that fits a real business and scope it so you can finish it."
        },
        {
          title: "Stage 2: Validating with real people",
          minutes: 5,
          goal: "Check your project's assumptions by talking to at least three real people.",
          text: [
            "Every project rests on assumptions: customers want this, they will pay this much, this task wastes this many hours, people find us on this platform. Validation means checking them with real people before you build.",
            "Ask AI: \"List the five biggest assumptions in this project and write three neutral interview questions for each.\" Neutral means you do not lead the person: ask \"How do you handle this today?\" not \"Wouldn't you love my idea?\"",
            "Talk to at least three people: possible customers, the business owner, or staff who do the work. Write their exact words. Then ask AI to help you group what you heard, and note which assumptions held up and which did not."
          ],
          steps: ["Ask AI to list your project's five biggest assumptions.", "Write neutral interview questions.", "Talk to at least three real people.", "Write down their exact words.", "Mark each assumption: confirmed, wrong or unsure, and update your scope."],
          words: [["Assumption", "something you believe is true but have not checked."], ["Validation", "checking assumptions with real evidence before you build."], ["Neutral question", "a question that does not push the person toward an answer."]],
          slides: [
            { title: "Every project has assumptions", bullets: ["Customers want it", "They will pay this much", "This task wastes this many hours"] },
            { title: "Ask neutral questions", bullets: ["\"How do you handle this today?\"", "Not \"Wouldn't you love my idea?\""] },
            { title: "Talk to three or more people", bullets: ["Customers, owner or staff", "Write their exact words", "Confirmed, wrong or unsure?"] }
          ],
          tryIt: "List your five assumptions with AI's help, interview at least three people with neutral questions, and mark each assumption confirmed, wrong or unsure.",
          youCanNow: "validate a business project with real people before building it."
        },
        {
          title: "Stage 3: Designing the solution",
          minutes: 6,
          goal: "Write the outline of your project using the right structure for your choice.",
          text: [
            "Each project has a structure. Business plan: the SBA lists traditional plan sections (executive summary, company description, market analysis, organization and management, service or product line, marketing and sales, funding request, financial projections) and a lean plan option. Service business: the problem, the deliverable, the steps (AI and human), the instruction prompt, the price. Automation system: the workflow map, trigger and actions, AI step, approval guardrails, tests and monitoring.",
            "Marketing strategy: ideal customer, offer, one or two channels, a content calendar, an email plan, and the numbers you will track. Productivity ecosystem: the week plan, the toolkit (one tool per job), templates, SOPs, automations and a time log.",
            "Ask AI to turn your scope and validation notes into an outline with these sections. Edit it so every section reflects what real people told you."
          ],
          steps: ["Find the structure for your project type.", "Give AI your scope and validation notes.", "Ask for an outline with those sections and one line on what goes in each.", "Edit the outline using what real people told you.", "Mark which sections AI can draft and which need your own facts."],
          words: [["Outline", "the list of sections a project will have, before you write it fully."], ["Lean plan", "a short business plan focused on the key parts, as an alternative to a long traditional plan."]],
          slides: [
            { title: "Business plan (SBA sections)", bullets: ["Executive summary, company, market analysis", "Organization, product or service, marketing", "Funding request, financial projections"] },
            { title: "Service or automation", bullets: ["Service: problem, deliverable, steps, prompt, price", "Automation: map, trigger, actions, guardrails, tests"] },
            { title: "Marketing or productivity", bullets: ["Marketing: customer, offer, channels, calendar, email", "Productivity: week plan, toolkit, templates, SOPs"] },
            { title: "Build the outline", bullets: ["AI drafts from your scope and notes", "You edit with what real people said"] }
          ],
          sources: [{ name: "SBA: Write your business plan", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Have AI turn your scope and validation notes into an outline with the right sections for your project. Edit it and mark which sections need your own facts.",
          youCanNow: "design the full structure of your capstone project based on real evidence."
        }
      ],
      check: {
        title: "Knowledge Check 1: Plan your project",
        questions: [
          { q: "A business owner says, \"I spend 10 hours a week copying orders between apps.\" Which capstone fits best?", options: ["AI marketing strategy", "AI automation system", "AI startup business plan", "None"], answer: 1, why: "Repeated copying is exactly what automation solves." },
          { q: "Which is a well-scoped project?", options: ["Use all AI tools", "Marketing for everything forever", "Fix the whole business", "A 90-day marketing strategy for one neighborhood and two channels"], answer: 3, why: "It is small and clear enough to finish." },
          { q: "Which is a neutral interview question?", options: ["\"How do you handle this today?\"", "\"Wouldn't you love my idea?\"", "\"You'd pay $100, right?\"", "\"Everyone needs this, yes?\""], answer: 0, why: "It does not push the person toward an answer." },
          { q: "How many real people should you talk to at least?", options: ["One AI chat", "Zero", "Three", "Only yourself"], answer: 2, why: "Three conversations is the minimum for this capstone." },
          { q: "Which is one of the SBA's traditional business plan sections?", options: ["Social media passwords", "Favorite apps", "Market analysis", "Office decor"], answer: 2, why: "Market analysis is one of the sections the SBA lists." }
        ]
      }
    },
    {
      name: "Chapter 2: Build, check and present",
      lessons: [
        {
          title: "Stage 4: Building it with AI",
          minutes: 6,
          goal: "Build the full project section by section, with AI drafting and you checking.",
          text: [
            "Work one section at a time. For each, give AI the section name, your real facts and the format you want. Example: \"Write the market analysis section for my mobile car wash business plan. Here is what three customers told me and the local facts I found. Under 300 words, plain language.\"",
            "For hands-on projects, build the real thing: set up the automation and test it, create the templates and SOPs, make the first posts and the email, or write the service package and run it once.",
            "Keep a short build log: what you made, which tool, what you changed after checking. Never put private customer or money details into AI tools; use placeholders and fill them in yourself."
          ],
          steps: ["Pick the next section from your outline.", "Give AI the section name, your facts and the format.", "Check the draft: facts, numbers, tone, claims.", "Build hands-on parts for real and test them.", "Write a line in your build log and move to the next section."],
          words: [["Build log", "a simple record of what you made, with which tool, and what you changed."], ["Placeholder", "a stand-in like [customer name] you replace yourself, outside the AI tool."]],
          slides: [
            { title: "One section at a time", bullets: ["Section name + your facts + format", "AI drafts; you check"] },
            { title: "Build the real thing", bullets: ["Set up and test the automation", "Create templates, SOPs, posts", "Run the service once"] },
            { title: "Keep a build log", bullets: ["What, which tool, what you changed", "No private details in AI tools"] }
          ],
          tryIt: "Build at least half of your project's sections (or the core working piece) with AI drafting and you checking. Keep your build log.",
          youCanNow: "build a real business project with AI as your assistant and yourself as the checker."
        },
        {
          title: "Stage 5: Checking numbers and risks",
          minutes: 6,
          goal: "Check your project's numbers and make a risk checklist.",
          text: [
            "Every project needs honest numbers: costs (tools, time, materials), prices or savings, and when it pays off. Put them in a spreadsheet and check every formula yourself. AI can suggest what to include, but you check the math.",
            "Then make a risk checklist from what you learned: Are all marketing and AI claims true and provable (FTC advertising rules)? Is customer data kept out of AI tools and protected? Does a person check everything customers see? Are paid promotions disclosed? Do you need a license, permit or tax registration where you operate?",
            "For the official side, use official sites. For example, the IRS says you never have to pay a fee for an Employer Identification Number (EIN) and warns about sites that charge for one. Self-employed people generally pay self-employment tax and often quarterly estimated taxes; see irs.gov and talk to an accountant. Ask a lawyer about anything legal in your plan."
          ],
          steps: ["List all costs, prices or savings in a spreadsheet.", "Work out when the project pays for itself.", "Check every formula yourself.", "Make a risk checklist: claims, data, human checks, disclosures, licenses and taxes.", "Mark items to confirm with an official site, accountant or lawyer."],
          words: [["Payback", "how long until money earned or saved covers what you spent."], ["EIN", "Employer Identification Number: a free federal tax number for a business, issued by the IRS."], ["Self-employment tax", "Social Security and Medicare tax that self-employed people pay."]],
          slides: [
            { title: "Honest numbers", bullets: ["Costs: tools, time, materials", "Prices or savings", "When it pays off; check every formula"] },
            { title: "Risk checklist", bullets: ["Claims true and provable", "Customer data protected", "Human checks; disclosures"] },
            { title: "Official sources", bullets: ["IRS: an EIN is free; beware sites that charge", "Self-employment and estimated taxes: irs.gov", "Ask an accountant or lawyer"] }
          ],
          sources: [{ name: "IRS: Get an Employer Identification Number", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "FTC: Advertising and Marketing Basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics" }],
          tryIt: "Build your numbers sheet (costs, prices or savings, payback), check every formula, and write your risk checklist with items to confirm officially.",
          youCanNow: "check a project's numbers and risks, and know where to confirm tax and legal points."
        },
        {
          title: "Stage 6: Testing, improving and presenting",
          minutes: 6,
          goal: "Test your finished project with real people, improve it, and present it in three minutes.",
          text: [
            "Show the finished project to at least three people: the owner, a possible customer, or someone who would use it. Ask: \"What is clear? What is confusing? What would you change?\" For hands-on projects, have them try it.",
            "Make the most important changes and note them. Then ask AI to help you write a three-minute presentation: the problem, who has it, your solution, the proof (what people told you and test results), the numbers, and the next step.",
            "Practice it out loud. Ask AI to play a tough listener (an investor, a business owner, a customer) and ask you hard questions. Then put everything together as your final capstone package."
          ],
          steps: ["Show or test the project with at least three people.", "Make the top changes and note them.", "Ask AI to outline a three-minute presentation.", "Practice out loud and time it.", "Role-play hard questions with AI.", "Assemble the final package."],
          words: [["Pitch", "a short talk that explains your project and why it matters."], ["Proof", "evidence that your project works, like test results and what people said."]],
          slides: [
            { title: "Test the finished project", bullets: ["At least three people", "What is clear, confusing, worth changing?", "Let them try hands-on parts"] },
            { title: "A three-minute pitch", bullets: ["Problem and who has it", "Your solution and the proof", "The numbers and the next step"] },
            { title: "Practice", bullets: ["Out loud, timed", "AI plays a tough listener", "Then assemble the final package"] }
          ],
          tryIt: "Final task: test your project with three people, make the top changes, practice your three-minute presentation, and assemble your capstone package: summary, full project, validation notes, numbers and risk checklist, test results and presentation.",
          youCanNow: "build, check, test and present a complete AI business project from start to finish."
        }
      ],
      check: {
        title: "Knowledge Check 2: Build, check and present",
        questions: [
          { q: "When building with AI, what should you give it for each section?", options: ["The section name, your real facts and the format", "Your bank password", "Nothing; let it guess", "A competitor's plan to copy"], answer: 0, why: "Real facts and a clear format give a usable draft." },
          { q: "Who checks the formulas in your numbers sheet?", options: ["A random website", "Only the AI", "Nobody", "You"], answer: 3, why: "AI math can be wrong." },
          { q: "A website offers to get you an EIN for $250. What does the IRS say?", options: ["That is the official price", "You never have to pay a fee for an EIN; beware sites that charge", "EINs cost $1,000", "Only paid EINs are valid"], answer: 1, why: "The IRS issues EINs free and warns about paid sites." },
          { q: "Which belongs in a three-minute pitch?", options: ["The problem, your solution, the proof and the next step", "Every detail of every spreadsheet", "Your passwords", "Jokes only"], answer: 0, why: "A pitch is short and focused on what matters." },
          { q: "How can AI help you practice your presentation?", options: ["By writing fake reviews", "By giving the talk for you", "By playing a tough listener who asks hard questions", "By skipping practice"], answer: 2, why: "Role-play builds confidence for real questions." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Capstone Project: Build Your AI Business Plan, Service, Automation, Marketing Strategy or Productivity System",
    questions: [
      { q: "How many capstone projects do you choose?", options: ["All five", "One", "Three", "None"], answer: 1, why: "You choose ONE project and finish it." },
      { q: "An owner who is overwhelmed and needs a better week should choose:", options: ["A new logo", "An AI startup business plan", "Nothing", "An AI productivity ecosystem"], answer: 3, why: "A productivity ecosystem organizes the owner's week." },
      { q: "A new idea that needs funding fits best with:", options: ["A complaint template", "An automation system", "A content calendar only", "An AI startup business plan"], answer: 3, why: "A business plan explains the idea and the money needed." },
      { q: "Scope means:", options: ["The project's logo", "What is in and out of the project", "The price", "The software"], answer: 1, why: "Scope sets the limits so you can finish." },
      { q: "An assumption is:", options: ["A tax form", "A proven fact", "Something you believe but have not checked", "A type of AI"], answer: 2, why: "Validation checks assumptions." },
      { q: "During interviews you should write down:", options: ["People's exact words", "Only what you hoped to hear", "Their card numbers", "Nothing"], answer: 0, why: "Exact words keep you honest." },
      { q: "If an assumption turns out wrong, you should:", options: ["Hide it", "Ignore it", "Update your scope or design", "Ask different people until someone agrees"], answer: 2, why: "Validation is only useful if you act on it." },
      { q: "Where can you find the standard sections of a business plan?", options: ["The SBA's business plan page", "A random social post", "A competitor", "Your email inbox"], answer: 0, why: "The SBA lists traditional and lean plan sections." },
      { q: "An automation system project includes:", options: ["Only a logo", "Workflow map, trigger and actions, AI step, guardrails, tests", "Only a price", "Only a pitch"], answer: 1, why: "These parts make a working, safe automation." },
      { q: "A marketing strategy project includes:", options: ["Only a bank statement", "Only an SOP", "Only a time log", "Ideal customer, offer, channels, calendar and email plan"], answer: 3, why: "These are the parts of a marketing strategy." },
      { q: "When building, the best way is:", options: ["One section at a time, AI drafts, you check", "All at once with no checks", "Copying another project", "Letting AI publish it"], answer: 0, why: "Small steps with checks keep quality high." },
      { q: "A build log records:", options: ["Nothing useful", "Your passwords", "Your customers' addresses", "What you made, which tool, and what you changed"], answer: 3, why: "It shows your process and helps you improve." },
      { q: "How should you handle customer names in AI prompts?", options: ["Add card numbers", "Type them with phone numbers", "Use placeholders like [customer name]", "Post them publicly"], answer: 2, why: "Placeholders keep private data out." },
      { q: "Payback is:", options: ["A refund to a customer", "How long until earnings or savings cover the cost", "A fee", "A loan"], answer: 1, why: "It shows when the project pays for itself." },
      { q: "Which belongs on your risk checklist?", options: ["Is my logo round?", "What is my favorite color?", "How many apps do I have?", "Are all marketing claims true and provable?"], answer: 3, why: "FTC rules require truthful claims." },
      { q: "Self-employed people generally pay:", options: ["Only sales tax", "No tax", "Self-employment tax as well as income tax", "Only property tax"], answer: 2, why: "The IRS says so on its self-employed tax center." },
      { q: "For legal questions in your project, you should:", options: ["Talk to a lawyer", "Trust any AI answer", "Skip them", "Copy a competitor"], answer: 0, why: "A lawyer can advise on your situation." },
      { q: "When testing the finished project, ask people:", options: ["Will you give me five stars?", "What is clear, what is confusing, what would you change?", "What is your password?", "Can I have your card number?"], answer: 1, why: "These questions find real improvements." },
      { q: "Proof in your pitch means:", options: ["A promise", "Evidence like test results and what people said", "A logo", "A long list of features"], answer: 1, why: "Evidence makes a pitch believable." },
      { q: "The final capstone package includes:", options: ["Summary, full project, validation notes, numbers and risks, test results, presentation", "Only a title page", "Only the AI chat history", "Only a logo"], answer: 0, why: "Together these show a complete, checked project." }
    ]
  }
};
