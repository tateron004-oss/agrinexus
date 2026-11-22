"use strict";

// Koach Learn course (shared): "AI for Productivity and Operations". Categories: Small Business, Non Profits. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-productivity-operations",
  category: "Small Business",
  name: "AI for Productivity and Operations",
  skills: "Planning a week with AI, Writing a standard operating procedure, Turning meetings into action items, Building a staff or volunteer schedule, Tracking supplies and reorders, Writing a weekly operations review",
  outcome: "use a free AI assistant to plan the week, turn a messy task into a clear step-by-step procedure, get action items from meetings, build a schedule, track supplies, and review the week, so the organization runs smoother with less of your time.",
  about: [
    "Operations is the everyday work that keeps an organization running: schedules, supplies, procedures, meetings and follow-ups. When it is messy, owners and directors spend nights catching up. AI can take a lot of that load.",
    "This course is for small business owners and managers, nonprofit directors and volunteer coordinators. Examples include a restaurant, a daycare, a landscaping crew, a thrift store and a food pantry.",
    "You will use ChatGPT, Microsoft Copilot or Google Gemini with Google Docs and Sheets or Microsoft 365. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build a weekly operations kit for a real or practice organization: a prioritized weekly plan, one standard operating procedure for a repeated task, meeting notes with action items, owners and due dates, a one-week staff or volunteer schedule, a supplies sheet with reorder points, and a short end-of-week review with one improvement for next week.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners, shift leads and office managers, and coordinators of nonprofits, churches and community programs who juggle tasks, staff or volunteers, meetings and supplies.",
    startingPoint: "Keep the place running from memory, paper lists, texts and a calendar; may use a spreadsheet and have tried an AI assistant. Few have written procedures, structured meeting notes or reorder points.",
    gap: "When everything lives in one person's head, tasks get missed, new people learn slowly and supplies run out. Learners need simple AI-assisted tools for planning, procedures, meetings, scheduling, supplies and weekly review, so the operation runs smoother and takes less of their time.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a phone or computer; a computer is easier for spreadsheets",
      "Privacy: first names or labels only; no staff health, pay or private details in AI tools",
      "Rules: labor laws on breaks and minors' hours vary; learners check their state labor department",
      "Time: 5 minute lessons, about 60 minutes in total plus time to build the kit"
    ],
    prerequisites: "None. Learners new to AI assistants can take an introduction to AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a messy to-do list and your real available hours", action: "create a prioritized day-by-day weekly plan with AI", standard: "with the top three tasks blocked on your calendar" },
    { id: "O2", condition: "For a task your organization repeats", action: "write a numbered standard operating procedure with purpose, supplies, steps, safety notes and a checklist", standard: "so a new person can follow it without stopping" },
    { id: "O3", condition: "After a short meeting", action: "list the decisions, action items and open questions from the notes", standard: "with every action item having an agreed owner and due date, sent within a day" },
    { id: "O4", condition: "Given shifts, availability and rules", action: "create a one-week staff or volunteer schedule that covers every shift", standard: "following your hour limits, required skills and labor rules" },
    { id: "O5", condition: "Given your supplies and how fast you use them", action: "build a supplies sheet with reorder points and a formula that flags REORDER", standard: "with a reorder point for every item" },
    { id: "O6", condition: "At the end of the week", action: "write a short review of wins, misses and problems and choose one improvement", standard: "in about 15 minutes, with the improvement added to next week's plan" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting organized",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planning your week with AI",
          minutes: 5,
          goal: "Turn a messy to-do list into a prioritized weekly plan.",
          text: [
            "A long, mixed-up to-do list makes everything feel urgent. AI can sort it fast. Dump every task into the chat, then ask it to sort and plan.",
            "A useful prompt: \"Here is my to-do list for the week. Sort it into: must do this week, should do, can wait, and can hand off. Then make a day-by-day plan. I have about 3 hours a day for office work, and Tuesday is busy with deliveries.\"",
            "You are the boss of the plan. Move anything the AI got wrong, block time on your calendar for the top three tasks, and leave room for surprises."
          ],
          steps: ["Write every task, big and small, in one list.", "Ask AI to sort it into must, should, can wait and hand off.", "Tell it your real available hours and busy days.", "Fix the plan, then block time on your calendar for the top three."],
          words: [["Prioritize", "decide what matters most and do it first."], ["Delegate", "hand a task to someone else."]],
          slides: [
            { title: "Dump the list", bullets: ["Every task, big and small", "One place, one list"] },
            { title: "Ask AI to sort it", bullets: ["Must do, should do", "Can wait, can hand off", "Tell it your real hours"] },
            { title: "You own the plan", bullets: ["Fix what AI got wrong", "Block time for the top three", "Leave room for surprises"] }
          ],
          tryIt: "Write your full to-do list for this week. Ask an AI assistant to sort it and make a day-by-day plan using your real hours, then fix it and block your top three tasks on a calendar.",
          youCanNow: "turn a messy to-do list into a prioritized weekly plan with AI.",
          quickCheck: [
            { objective: "O1", q: "In this course's weekly plan, what does \"hand off\" mean?", options: ["Tasks you do first", "Tasks someone else can do", "Tasks you delete", "Tasks that must be done today"], answer: 1, why: "Hand-off tasks are ones someone else can do." },
            { objective: "O1", q: "AI's plan puts your biggest task on Tuesday, your busiest delivery day. What do you do?", options: ["Follow it; AI knows best", "Delete the task", "Ask AI for a new list of tasks", "Move the task to a quieter day and block that time on your calendar"], answer: 3, why: "You are the boss of the plan; fix what the AI got wrong." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing a standard operating procedure",
          minutes: 6,
          goal: "Turn how you do a task into a clear, step-by-step procedure anyone can follow.",
          text: [
            "A standard operating procedure (SOP) is written steps for a repeated task: opening the shop, cleaning the kitchen, checking in a client, counting the cash drawer. With an SOP, new staff or volunteers learn faster and things get done the same way every time.",
            "The fastest way: talk or type it out the way you would explain it to a new person, even if messy. Then ask AI: \"Turn this into a numbered SOP with a title, purpose, supplies needed, steps of one action each, safety notes and a final checklist. Use simple words.\"",
            "Test it: have someone who has never done the task follow it while you watch quietly. Every time they hesitate, the SOP needs a clearer step. Date it and say who owns it."
          ],
          steps: ["Explain the task out loud or in writing, messy is fine.", "Ask AI to turn it into a numbered SOP with purpose, supplies, steps, safety notes and a checklist.", "Check each step for accuracy.", "Have a new person test it.", "Fix unclear steps, then date it and name an owner."],
          words: [["SOP", "standard operating procedure: written steps for a repeated task."], ["Checklist", "a list of items to tick off so nothing is missed."]],
          slides: [
            { title: "Why SOPs", bullets: ["New people learn faster", "Done the same way every time"] },
            { title: "Messy notes to SOP", bullets: ["Explain it like to a new person", "AI formats: purpose, supplies, steps", "Add safety notes and a checklist"] },
            { title: "Test it", bullets: ["A new person follows it", "Every pause = a step to clarify", "Date it and name an owner"] }
          ],
          tryIt: "Pick one task you do every week. Explain it in your own words, have AI turn it into an SOP, check it, and ask someone to try following it.",
          youCanNow: "write and test a clear standard operating procedure with AI help.",
          quickCheck: [
            { objective: "O2", q: "What does SOP stand for?", options: ["Standard operating procedure", "Staff overtime plan", "Supplies order process", "Schedule of people"], answer: 0, why: "An SOP is a standard operating procedure: written steps for a repeated task." },
            { objective: "O2", q: "Your AI-made SOP for closing the shop says \"lock up\" but skips the back door. What do you do?", options: ["Use it anyway", "Throw out the SOP", "Check each step for accuracy and add the missing step", "Let new staff figure it out"], answer: 2, why: "Check every step for accuracy before anyone uses the SOP." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Turning meetings into action items",
          minutes: 5,
          goal: "Run a short meeting and use AI to turn notes into decisions and action items.",
          text: [
            "Many meetings end with everyone nodding and nothing happening. The fix is simple: every meeting ends with action items, each with an owner and a due date.",
            "Use an agenda with times. Take quick notes, or use a meeting tool's built-in AI notes if your organization allows it and everyone has been told. Then paste the notes into AI: \"From these notes, list decisions made, action items with owner and due date, and open questions.\"",
            "Check the list before sending, because AI may guess an owner or date that was never agreed. Remove anything private, such as staff health or pay details, before sharing. Send it within a day."
          ],
          steps: ["Write a short agenda with times.", "Take notes or use approved AI notes, with everyone informed.", "Ask AI to pull out decisions, action items and open questions.", "Check owners and dates; remove private details.", "Send the action list within a day."],
          words: [["Agenda", "the list of topics for a meeting, in order."], ["Action item", "a task from a meeting with an owner and a due date."]],
          slides: [
            { title: "End with action", bullets: ["Every action has an owner", "Every action has a due date"] },
            { title: "Let AI pull it out", bullets: ["Decisions made", "Action items", "Open questions"] },
            { title: "Before you send", bullets: ["Check owners and dates", "Remove private details", "Send within a day"] }
          ],
          tryIt: "Take notes at your next meeting, or write notes from a recent one. Use AI to pull out decisions and action items with owners and dates, check them, and write the message you would send.",
          youCanNow: "turn meeting notes into checked action items with owners and due dates.",
          quickCheck: [
            { objective: "O3", q: "What makes a meeting end with real follow-through?", options: ["A long discussion", "Everyone nodding", "A meeting the next day", "Action items, each with an owner and a due date"], answer: 3, why: "Action items with owners and dates turn talk into work." },
            { objective: "O3", q: "Your meeting notes mention a staff member's medical leave. What do you do before sharing the AI summary?", options: ["Share it as is", "Remove the private health details", "Add more details", "Post it on the notice board"], answer: 1, why: "Remove private details, such as health or pay, before sharing notes." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting organized",
        questions: [
          { objective: "O1", q: "When asking AI to plan your week, what should you tell it?", options: ["Your bank password", "Nothing; it will guess", "Your real available hours and busy days", "Your staff's home addresses"], answer: 2, why: "Real constraints make the plan realistic." },
          { objective: "O2", q: "What is an SOP?", options: ["Written steps for a repeated task", "A type of payroll tax", "A social media post", "A sales report"], answer: 0, why: "Standard operating procedures make tasks repeatable." },
          { objective: "O2", q: "A new volunteer hesitates at step 4 of your SOP. What does that tell you?", options: ["The volunteer is not smart", "SOPs never work", "Delete the SOP", "Step 4 needs to be clearer"], answer: 3, why: "Hesitation shows where the steps are unclear." },
          { objective: "O3", q: "Every action item should have:", options: ["A long story", "An owner and a due date", "A secret code", "No details"], answer: 1, why: "Owners and dates make actions happen." },
          { objective: "O3", q: "AI lists \"Maria will finish the budget by Friday\" but nobody agreed to that. What do you do?", options: ["Send it anyway", "Fix it before sending", "Assign it to Maria without asking", "Delete all notes"], answer: 1, why: "AI can guess; check owners and dates." }
        ]
      }
    },
    {
      name: "Chapter 2: Running smoother operations",
      lessons: [
        {
          objectives: ["O4"],
          title: "Building a staff or volunteer schedule",
          minutes: 5,
          goal: "Use AI and a spreadsheet to build a fair one-week schedule that covers every shift.",
          text: [
            "Scheduling is a puzzle: who is available, which shifts need how many people, and who has which skills. AI can draft a first version in seconds.",
            "Give it the rules without private details: \"Make a one-week schedule table. Shifts: Mon-Fri 8-12 and 12-4, two people each. Saturday 9-1, three people. Availability: Person A weekdays only, Person B not Mondays... Each person no more than 20 hours. At least one person with food-handler training per shift.\"",
            "Check the draft against your rules and any labor laws that apply, such as breaks and minors' hours; your state labor department lists them. Put the final schedule in a shared spreadsheet so everyone sees changes."
          ],
          steps: ["List shifts and how many people each needs.", "List each person's availability using first names or labels.", "List rules: maximum hours, required skills.", "Ask AI for a schedule table.", "Check rules and labor laws, then share it in a spreadsheet."],
          words: [["Shift", "a set block of work time."], ["Availability", "the times a person can work or volunteer."]],
          slides: [
            { title: "Scheduling is a puzzle", bullets: ["Availability, shifts, skills"] },
            { title: "Give AI the rules", bullets: ["Shifts and people needed", "Availability by first name or label", "Maximum hours and required skills"] },
            { title: "Check and share", bullets: ["Match your rules", "Check state labor rules: breaks, minors", "Share in a spreadsheet"] }
          ],
          tryIt: "Write the shifts, availability and rules for a real or practice team of at least four people. Have AI draft a week's schedule, check every rule, and fix any problems.",
          youCanNow: "build and check a fair weekly schedule with AI help.",
          quickCheck: [
            { objective: "O4", q: "What should you give AI when asking for a schedule?", options: ["Everyone's home address and phone", "Only the word \"schedule\"", "Shifts, first names or labels, availability and rules", "Staff pay rates"], answer: 2, why: "AI needs shifts, availability and rules, but no private details." },
            { objective: "O4", q: "AI's schedule leaves Saturday with no one who has food-handler training. What do you do?", options: ["Change it so every shift has a trained person", "Keep it; it is only one day", "Cancel Saturday", "Ask the untrained staff to guess"], answer: 0, why: "Check the draft against every rule, including required skills." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Tracking supplies and reorders",
          minutes: 5,
          goal: "Build a supplies sheet with reorder points so you never run out.",
          text: [
            "Running out of cups, gloves, flour or diapers stops the work. A simple supplies sheet prevents it. Columns: item, unit, amount on hand, weekly use, reorder point, reorder amount and supplier.",
            "The reorder point is the amount that tells you to order now. A simple rule: weekly use times the number of weeks delivery takes, plus a little extra. If you use 10 boxes a week and delivery takes 1 week, reorder at about 12 boxes.",
            "Ask AI for a formula that flags items to reorder: \"In Google Sheets, write a formula that shows REORDER when on-hand is at or below the reorder point.\" Count supplies on the same day each week and update the sheet."
          ],
          steps: ["List items with unit and supplier.", "Estimate weekly use for each.", "Set a reorder point: weekly use x delivery weeks + a little extra.", "Ask AI for a formula that flags REORDER.", "Count every week on the same day."],
          words: [["Inventory", "the supplies or products you have on hand."], ["Reorder point", "the amount that tells you it is time to order more."]],
          slides: [
            { title: "Supplies sheet columns", bullets: ["Item, unit, on hand", "Weekly use, reorder point", "Reorder amount, supplier"] },
            { title: "Reorder point", bullets: ["Weekly use x delivery weeks + extra", "10 a week, 1 week delivery: about 12"] },
            { title: "Let the sheet warn you", bullets: ["Formula shows REORDER", "Count on the same day every week"] }
          ],
          tryIt: "Build a supplies sheet with at least eight items, set reorder points, and add an AI-written formula that flags items to reorder.",
          youCanNow: "track supplies with reorder points and an automatic reorder flag.",
          quickCheck: [
            { objective: "O5", q: "What is a reorder point?", options: ["The supplier's address", "The amount on hand that tells you to order now", "The price of an item", "The day the store opens"], answer: 1, why: "The reorder point is the amount that tells you to order more." },
            { objective: "O5", q: "You use 20 packs of gloves a week and delivery takes 1 week. About when should you reorder?", options: ["When you have 0 packs", "When you have 2 packs", "When you have 100 packs", "When you have about 22 to 24 packs"], answer: 3, why: "Weekly use times delivery weeks, plus a little extra, gives about 22 to 24 packs." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reviewing the week and improving",
          minutes: 5,
          goal: "Write a short end-of-week review and choose one improvement.",
          text: [
            "A 15-minute review at the end of each week keeps small problems from growing. Look at what got done, what did not, what went wrong, and what to change.",
            "Give AI your plan, your finished action items and a few notes, then ask: \"Write a short weekly operations review: wins, misses, problems, and one improvement for next week.\" Edit it so it is true and fair to your team.",
            "Pick only one improvement per week, such as a new SOP, a schedule fix or a reorder change. Small weekly fixes add up to a much smoother operation over a few months."
          ],
          steps: ["Gather your weekly plan, action items and notes.", "Ask AI for a short review: wins, misses, problems, one improvement.", "Edit it for truth and fairness.", "Choose one improvement and add it to next week's plan."],
          words: [["Review", "a look back to learn what worked and what did not."], ["Continuous improvement", "making small changes regularly to get better over time."]],
          slides: [
            { title: "15 minutes a week", bullets: ["What got done", "What did not", "What went wrong"] },
            { title: "AI drafts the review", bullets: ["Wins, misses, problems", "One improvement", "You edit for truth and fairness"] },
            { title: "One fix a week", bullets: ["New SOP, schedule fix or reorder change", "Small fixes add up"] }
          ],
          tryIt: "Final task: write your end-of-week review with AI help and choose one improvement. Together with your weekly plan, SOP, action items, schedule and supplies sheet, this completes your weekly operations kit.",
          youCanNow: "run a week of operations with AI help and keep improving it.",
          quickCheck: [
            { objective: "O6", q: "What does an end-of-week review cover?", options: ["Wins, misses, problems and one improvement", "Only what went wrong", "Every staff member's mistakes", "Next year's budget"], answer: 0, why: "A short review covers wins, misses, problems and one improvement." },
            { objective: "O6", q: "AI's review blames one volunteer for a late delivery that was the supplier's fault. What do you do?", options: ["Send it as written", "Pick five improvements instead", "Edit it so it is true and fair to the team", "Skip the review this week"], answer: 2, why: "Edit the AI draft so it is true and fair before sharing it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running smoother operations",
        questions: [
          { objective: "O4", q: "When giving AI scheduling information, what should you use for people?", options: ["Full Social Security numbers", "Home addresses", "Medical records", "First names or labels, no private details"], answer: 3, why: "Scheduling needs availability, not private details." },
          { objective: "O4", q: "Where can you check rules on breaks and minors' work hours?", options: ["Your state labor department", "A random blog", "Only an AI chat", "A competitor"], answer: 0, why: "Labor rules come from official labor agencies." },
          { objective: "O5", q: "You use 10 boxes a week and delivery takes 1 week. A sensible reorder point is about:", options: ["0 boxes", "1 box", "12 boxes", "100 boxes"], answer: 2, why: "Weekly use x delivery weeks plus a little extra." },
          { objective: "O6", q: "How long does the weekly review take in this course?", options: ["A full day", "Three hours", "No time; skip it", "About 15 minutes"], answer: 3, why: "A short weekly review keeps problems small." },
          { objective: "O6", q: "How many improvements should you pick each week?", options: ["Twenty", "None", "One", "Everything at once"], answer: 2, why: "One fix a week is doable and adds up." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Productivity and Operations",
    questions: [
      { objective: "O1", q: "Operations means:", options: ["Only surgery", "The everyday work that keeps an organization running", "Only sales", "Only marketing"], answer: 1, why: "Schedules, supplies, procedures and follow-ups." },
      { objective: "O1", q: "When AI sorts your to-do list, which group is \"hand off\"?", options: ["Tasks someone else can do", "Tasks you must do today", "Tasks to delete", "Tasks for the AI to do alone"], answer: 0, why: "Hand off means delegate." },
      { objective: "O1", q: "Who has the final say on your weekly plan?", options: ["The AI", "Nobody", "You", "Your supplier"], answer: 2, why: "You fix and own the plan." },
      { objective: "O2", q: "An SOP helps because:", options: ["Tasks get done the same way and new people learn faster", "It replaces all staff", "It is required for every email", "It makes tasks slower"], answer: 0, why: "That is the purpose of SOPs." },
      { objective: "O2", q: "The fastest way to start an SOP is to:", options: ["Copy another company's SOP", "Wait for a consultant", "Skip writing it", "Explain the task in your own words, then have AI format it"], answer: 3, why: "Your knowledge plus AI formatting is fast." },
      { objective: "O2", q: "A good SOP includes:", options: ["Only a title", "Purpose, supplies, numbered steps, safety notes and a checklist", "Staff salaries", "Customer phone numbers"], answer: 1, why: "Those parts make it complete." },
      { objective: "O2", q: "How do you test an SOP?", options: ["Read it once yourself", "Have someone new follow it while you watch", "Ask the AI if it is good", "Do not test it"], answer: 1, why: "A new person reveals unclear steps." },
      { objective: "O3", q: "An agenda is:", options: ["A meeting's snack list", "A payroll form", "A type of SOP", "The list of meeting topics, in order"], answer: 3, why: "Agendas keep meetings focused." },
      { objective: "O3", q: "Before using AI meeting notes, you should:", options: ["Make sure it is allowed and everyone has been told", "Record secretly", "Share staff pay details", "Skip the agenda"], answer: 0, why: "People should know when meetings are recorded or transcribed." },
      { objective: "O3", q: "Before sending AI-made meeting notes, remove:", options: ["All action items", "The meeting date", "Private details like staff health or pay", "Decisions"], answer: 2, why: "Private information should not be shared widely." },
      { objective: "O3", q: "Action items should be sent:", options: ["A month later", "Never", "Only if asked", "Within a day"], answer: 3, why: "Fast follow-up keeps momentum." },
      { objective: "O4", q: "A shift is:", options: ["A keyboard key only", "A type of supply", "A set block of work time", "A meeting"], answer: 2, why: "Schedules are built from shifts." },
      { objective: "O4", q: "AI's draft schedule gives one person 30 hours, but your limit is 20. You should:", options: ["Keep it", "Fix the schedule to follow your rule", "Ignore the rule", "Remove that person"], answer: 1, why: "Always check AI drafts against your rules." },
      { objective: "O4", q: "Why share the final schedule in a spreadsheet?", options: ["Everyone sees the latest changes", "To hide it", "Spreadsheets are required by law", "So nobody can see it"], answer: 0, why: "A shared sheet keeps everyone updated." },
      { objective: "O5", q: "Inventory means:", options: ["Staff list", "Meeting notes", "The supplies or products on hand", "Customer reviews"], answer: 2, why: "Inventory is what you have in stock." },
      { objective: "O5", q: "A reorder point tells you:", options: ["When it is time to order more", "The price of an item", "Who the supplier is", "How to cook it"], answer: 0, why: "It triggers a new order." },
      { objective: "O5", q: "A formula that shows REORDER helps by:", options: ["Ordering items with your card automatically", "Deleting the sheet", "Changing suppliers", "Flagging low items automatically"], answer: 3, why: "The sheet warns you when stock is low." },
      { objective: "O5", q: "How often should you count supplies?", options: ["Once a year", "Every week on the same day", "Never", "Only when you run out"], answer: 1, why: "Regular counts keep the sheet accurate." },
      { objective: "O6", q: "A weekly review covers:", options: ["Only the wins", "Wins, misses, problems and one improvement", "Only blame", "Nothing in writing"], answer: 1, why: "A balanced review leads to improvement." },
      { objective: "O6", q: "Making small changes regularly to get better is called:", options: ["Delegation", "Inventory", "Scheduling", "Continuous improvement"], answer: 3, why: "Small regular fixes add up." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      2,
      3,
      6,
      8,
      9,
      12,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Weekly plan",
        objective: "O1",
        notYet: "Tasks are not sorted, or the plan ignores real available hours.",
        meets: "Tasks sorted into must, should, can wait and hand off, with a day-by-day plan that fits real hours.",
        exceeds: "The top three tasks are blocked on a calendar with room left for surprises."
      },
      {
        name: "Standard operating procedure",
        objective: "O2",
        notYet: "Steps are vague or out of order, or there is no checklist.",
        meets: "Title, purpose, supplies, numbered one-action steps, safety notes, checklist, date and owner.",
        exceeds: "A new person tested it and unclear steps were fixed."
      },
      {
        name: "Meeting action items",
        objective: "O3",
        notYet: "Action items have no owner or due date.",
        meets: "Decisions, action items with agreed owners and dates, and open questions, with private details removed.",
        exceeds: "Sent within a day, with a check that guessed owners or dates were corrected."
      },
      {
        name: "Schedule",
        objective: "O4",
        notYet: "A shift is uncovered or a rule is broken.",
        meets: "Every shift covered, hour limits and skills followed, shared in a spreadsheet.",
        exceeds: "Notes the labor rules checked with the state labor department."
      },
      {
        name: "Supplies sheet",
        objective: "O5",
        notYet: "No reorder points.",
        meets: "Every item has weekly use, a reorder point and a formula that flags REORDER.",
        exceeds: "Includes the supplier and a set day each week to count."
      },
      {
        name: "Weekly review",
        objective: "O6",
        notYet: "No review, or no improvement chosen.",
        meets: "A short, fair review of wins, misses and problems with one improvement.",
        exceeds: "The improvement is already in next week's plan."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Organizations with at least three SOPs written and in use within 60 days (follow-up survey)",
      "Fewer run-outs of key supplies in the 60 days after the course",
      "Owners and managers who report hours per week saved on planning and coordination"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "A calendar and a spreadsheet (Google Sheets or Excel)",
      "A real to-do list, a repeated task, and a list of supplies from the learner's organization",
      "About 60 minutes for lessons and checks, plus time to build the kit"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; build the reorder formula on a shared screen.",
      "Have learners swap SOPs and follow each other's steps to find unclear ones.",
      "Remind learners to use first names or labels only, and never put staff health or pay details into AI.",
      "Point learners to their state labor department for break and minors' hour rules; do not give legal advice.",
      "Score the final kit with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
