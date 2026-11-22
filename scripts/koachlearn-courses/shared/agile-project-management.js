"use strict";

// Koach Learn course (shared): "Agile Project Management". Categories: Veterans (military), Workforce Development. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "agile-project-management",
  category: "Veterans (military)",
  name: "Agile Project Management",
  skills: "Writing user stories, Building a backlog, Planning a sprint, Running a task board, Holding a review and retrospective",
  outcome: "run a small project the Agile way: turn the work into a prioritized backlog of user stories, plan a one- or two-week sprint, track it on a task board, and close it with a review and a retrospective.",
  about: [
    "Agile is a way of running projects in short rounds of work, checking results often and changing course when you learn something new. Many employers in tech, government, healthcare and logistics use it, and job posts often ask for it.",
    "This course is for anyone who leads or works on a team: veterans moving into civilian project roles, workers aiming for a coordinator or analyst job, and people running a project at work, church or in the community. Military planning habits like the mission brief and the after-action review map well onto Agile.",
    "You will practice on one real, small project of your own from the first lesson to the last. Each lesson takes about five minutes, ends with a \"Try it now\" task, and there is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Pick a real project that takes two to six weeks (for example a résumé-and-job-search push, a community event or a small website). Build a backlog of at least eight user stories in priority order, plan a one-week sprint with a sprint goal, run it on a free task board, and finish with a written sprint review and a retrospective that lists one thing to keep, one to stop and one to try.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans and transitioning service members moving into civilian roles such as project coordinator, operations, IT or program management. Many led teams, ran missions and held after-action reviews in the military.",
    startingPoint: "Experienced with planning, briefing, chains of responsibility and after-action reviews. Most have not used Agile words, user stories or digital task boards.",
    gap: "Many civilian employers run projects the Agile way and ask for Scrum or Kanban experience in job posts. Learners need to show they can run a small project in sprints with civilian terms, and connect that to leadership skills they already have, to compete for these roles.",
    constraints: [
      "Reading level: plain words; Agile terms are explained the first time",
      "Devices: a phone or computer for a free board tool, or sticky notes on a wall",
      "Time: 5 minute lessons, plus a one-week sprint for the final task",
      "Certification fees and requirements change; learners check the certifying body's site",
      "No private or classified details in practice projects or AI prompts"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a project description", action: "explain how Agile runs the work in short rounds and when waterfall fits better", standard: "in your own words, with one example of each" },
    { id: "O2", condition: "Given a small Scrum team", action: "name the three Scrum accountabilities, the five events and the three artifacts", standard: "getting at least 9 of 11 right" },
    { id: "O3", condition: "For a real project of two to six weeks", action: "write a backlog of at least eight user stories with acceptance criteria, in priority order", standard: "with every story in the \"As a..., I want... so that...\" pattern" },
    { id: "O4", condition: "Given your backlog and the hours you really have", action: "plan a one-week sprint with a one-sentence sprint goal and tasks of a day or less", standard: "so the planned work fits the time you have" },
    { id: "O5", condition: "During your sprint", action: "track the work on a task board with a WIP limit and a daily 15-minute check-in", standard: "moving every card as the work happens" },
    { id: "O6", condition: "At the end of your sprint", action: "hold a sprint review and a Keep, Stop, Try retrospective and add one improvement to the next sprint", standard: "with feedback written into the backlog" }
  ],
  chapters: [
    {
      name: "Chapter 1: Planning the Agile way",
      lessons: [
        {
          objectives: ["O1"],
          title: "What Agile is, and how it differs from a big plan",
          minutes: 4,
          goal: "Explain in your own words how Agile runs a project in short rounds.",
          text: [
            "In a traditional or \"waterfall\" project, you plan everything up front, then build it, then test it, then deliver it at the end. That works when the job is well known, like pouring a foundation. It breaks down when needs change halfway through.",
            "Agile delivers in short rounds, often one to four weeks. Each round produces something usable, the team shows it to the people it is for, and the plan is adjusted based on what they say. The Agile Manifesto (2001) puts it simply: working results and responding to change matter more than following a fixed plan.",
            "Scrum and Kanban are the two most common ways to do Agile. Scrum uses fixed-length rounds called sprints. Kanban uses a board and a steady flow of work with a limit on how much is in progress at once. You can use ideas from both."
          ],
          words: [["Agile", "a way of running projects in short rounds, with frequent checks and changes."], ["Waterfall", "a way of running projects where each phase is finished before the next begins."], ["Scrum", "an Agile method that works in fixed-length rounds called sprints."], ["Kanban", "an Agile method that uses a board and limits how much work is in progress."]],
          slides: [
            { title: "Waterfall vs Agile", bullets: ["Waterfall: plan it all, build it all, deliver at the end", "Agile: deliver something usable every few weeks", "Agile adjusts the plan as you learn"] },
            { title: "Why teams use Agile", bullets: ["Needs change partway through", "Problems show up early, not at the end", "The people you serve see progress often"] },
            { title: "Two common methods", bullets: ["Scrum: fixed-length sprints of one month or less", "Kanban: a board and a limit on work in progress"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Choose one real project you want to finish in the next two to six weeks. Write one sentence describing it and one sentence about who it is for.",
          youCanNow: "explain how Agile differs from a big up-front plan and name Scrum and Kanban.",
          quickCheck: [
            { objective: "O1", q: "What is Kanban?", options: ["A fixed four-week plan", "A type of user story", "A certification exam", "A way of doing Agile with a board and a limit on work in progress"], answer: 3, why: "Kanban uses a board and a steady flow of work with a limit on how much is in progress." },
            { objective: "O1", q: "Your veterans' group is building a new website, and members keep changing what they want. Which approach fits?", options: ["Waterfall: plan it all up front and deliver at the end", "Agile: deliver in short rounds and adjust after each one", "No plan at all", "Wait until everyone agrees on everything"], answer: 1, why: "Agile suits work where needs change, because each round is shown and the plan is adjusted." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Scrum roles, events and artifacts",
          minutes: 5,
          goal: "Name who does what in Scrum and the five events a sprint uses.",
          text: [
            "The Scrum Guide (2020 version) names three accountabilities. The Product Owner decides what matters most and keeps the list of work in order. The Developers are the people doing the work, of any kind, not only software. The Scrum Master helps the team follow Scrum and removes blockers.",
            "There are five events. The Sprint is the container, one month or less. Sprint Planning sets the sprint goal and picks the work. The Daily Scrum is a 15-minute check on progress toward the goal. The Sprint Review shows the results to the people the work is for. The Sprint Retrospective looks at how the team worked and picks improvements.",
            "There are three artifacts: the Product Backlog (all the work, in order), the Sprint Backlog (the work chosen for this sprint) and the Increment (the usable result). On a small project, one person may hold more than one role. That is fine as long as each job gets done."
          ],
          words: [["Product Owner", "the person who decides what work matters most and orders the backlog."], ["Scrum Master", "the person who helps the team use Scrum well and clears blockers."], ["Increment", "the usable result a sprint produces."], ["Retrospective", "a meeting at the end of a sprint about how the team worked; similar to an after-action review."]],
          slides: [
            { title: "Three accountabilities", bullets: ["Product Owner: what matters most", "Developers: do the work", "Scrum Master: helps the team and clears blockers"] },
            { title: "Five events", bullets: ["Sprint: one month or less", "Sprint Planning and the Daily Scrum (15 minutes)", "Sprint Review and Sprint Retrospective"] },
            { title: "Three artifacts", bullets: ["Product Backlog: all the work, in order", "Sprint Backlog: work for this sprint", "Increment: the usable result"] }
          ],
          sources: [{ name: "The Scrum Guide (2020)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "For your project, write who will act as Product Owner, Scrum Master and Developers. If it is just you, write which hat you will wear at each event.",
          youCanNow: "name the three Scrum accountabilities, the five events and the three artifacts, and assign them on your project.",
          quickCheck: [
            { objective: "O2", q: "What is the Increment in Scrum?", options: ["The usable result produced by the sprint", "The list of all the work", "A daily meeting", "The Scrum Master's report"], answer: 0, why: "The Increment is the usable result; the Product Backlog is the list of all work." },
            { objective: "O2", q: "You are the only person on a small project. What do you do about the Scrum roles?", options: ["Stop, because Scrum needs at least three people", "Hire a Scrum Master first", "Hold more than one role and make sure each job gets done", "Skip the Product Owner's job"], answer: 2, why: "On a small project one person may hold more than one role, as long as each job gets done." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing user stories and building a backlog",
          minutes: 6,
          goal: "Turn a project into a prioritized backlog of user stories with clear finish lines.",
          text: [
            "A user story describes a piece of work from the point of view of the person it helps: \"As a [type of person], I want [something] so that [reason].\" For example: \"As a hiring manager, I want a one-page résumé so that I can see the candidate's skills fast.\"",
            "Each story needs acceptance criteria: two or three checks that say when it is done. For the résumé story: fits on one page, lists three measurable results, has no spelling errors. Clear finish lines stop arguments later.",
            "Put the stories in order: most valuable and most urgent at the top. An AI assistant like ChatGPT, Microsoft Copilot or Google Gemini can help you draft stories from a project description, but you decide the order and check that each story is real work."
          ],
          steps: ["List everything the project needs, one item per line.", "Rewrite each item as \"As a..., I want... so that...\".", "Add two or three acceptance criteria to each.", "Split any story too big to finish in one sprint.", "Put the stories in priority order, top to bottom."],
          words: [["User story", "a short description of work from the point of view of the person it helps."], ["Acceptance criteria", "the checks that say a story is done."], ["Backlog", "the ordered list of all work for the project."]],
          slides: [
            { title: "The user story pattern", bullets: ["As a [type of person]", "I want [something]", "so that [reason]"] },
            { title: "Acceptance criteria", bullets: ["Two or three checks that mean \"done\"", "Example: fits on one page, three results, no typos"] },
            { title: "Ordering the backlog", bullets: ["Most valuable and urgent at the top", "Split stories too big for one sprint", "AI can draft; you decide the order"] }
          ],
          tryIt: "Write at least eight user stories for your project, each with acceptance criteria, and put them in priority order. You may ask an AI assistant: \"Turn this project into user stories with acceptance criteria\" and then edit the result.",
          youCanNow: "write user stories with acceptance criteria and order them into a backlog.",
          quickCheck: [
            { objective: "O3", q: "What does the \"so that\" part of a user story give?", options: ["The deadline", "The person doing the work", "The reason the work matters", "The cost"], answer: 2, why: "\"So that\" states the reason or benefit for the person the story helps." },
            { objective: "O3", q: "An AI assistant drafts stories for your community event. One is \"Plan the whole event\". What do you do?", options: ["Split it into smaller stories that fit in one sprint", "Keep it as the top story", "Delete all the AI's stories", "Add it to every sprint"], answer: 0, why: "A story too big for one sprint should be split into smaller pieces." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning the Agile way",
        questions: [
          { objective: "O1", q: "What is the main difference between Agile and waterfall?", options: ["Agile has no plan at all", "Agile delivers in short rounds and adjusts as it learns", "Waterfall uses sprints", "Agile only works for software"], answer: 1, why: "Agile works in short rounds that each deliver something and then adjusts the plan." },
          { objective: "O2", q: "According to the Scrum Guide, how long can a sprint be?", options: ["One month or less", "Any length the boss likes", "One year", "Exactly six months"], answer: 0, why: "The Scrum Guide says sprints are one month or less." },
          { objective: "O2", q: "Who decides what work matters most and keeps the backlog in order?", options: ["Whoever finishes first", "The Scrum Master", "The customer's lawyer", "The Product Owner"], answer: 3, why: "The Product Owner orders the Product Backlog." },
          { objective: "O3", q: "Which is a well-written user story?", options: ["\"Résumé\"", "\"Fix stuff\"", "\"As a hiring manager, I want a one-page résumé so that I can see skills fast\"", "\"Do everything by Friday\""], answer: 2, why: "It names the person, what they want and why." },
          { objective: "O3", q: "A story is too big to finish in one sprint. What do you do?", options: ["Make the sprint a year long", "Delete it", "Split it into smaller stories", "Skip acceptance criteria"], answer: 2, why: "Big stories are split so each piece can be finished in a sprint." }
        ]
      }
    },
    {
      name: "Chapter 2: Running a sprint",
      lessons: [
        {
          objectives: ["O4"],
          title: "Planning a sprint with a clear goal",
          minutes: 5,
          goal: "Plan a one- or two-week sprint with a sprint goal and the right amount of work.",
          text: [
            "Sprint Planning answers three questions: why is this sprint valuable (the sprint goal), what can be done (which stories), and how will it be done (the tasks).",
            "A sprint goal is one sentence, like a commander's intent: \"By Friday, I have a finished résumé and five tailored applications sent.\" If plans change midway, the goal tells everyone what still matters.",
            "Take stories from the top of the backlog until the team's time is full, and leave some slack. New teams almost always plan too much. Break each story into tasks of a day or less."
          ],
          steps: ["Decide the sprint length (one or two weeks is good for beginners).", "Write a one-sentence sprint goal.", "Pull stories from the top of the backlog that serve the goal.", "Break each story into tasks of a day or less.", "Check the total against the hours you really have, and cut if needed."],
          words: [["Sprint goal", "one sentence saying what the sprint is meant to achieve."], ["Capacity", "how much time the team really has during the sprint."]],
          slides: [
            { title: "Sprint Planning answers", bullets: ["Why: the sprint goal", "What: which stories", "How: the tasks"] },
            { title: "A good sprint goal", bullets: ["One sentence, like commander's intent", "Says what still matters if plans change"] },
            { title: "Do not overload", bullets: ["Pull from the top of the backlog", "Tasks of a day or less", "Leave slack: new teams plan too much"] }
          ],
          tryIt: "Plan a one-week sprint for your project: write the sprint goal, pick the stories, break them into tasks, and check them against the hours you actually have this week.",
          youCanNow: "plan a sprint with a goal, chosen stories and tasks that fit your real time.",
          quickCheck: [
            { objective: "O4", q: "How long should a task in a sprint plan ideally take?", options: ["A full sprint", "A day or less", "At least a week", "A month"], answer: 1, why: "Breaking stories into tasks of a day or less makes progress easy to track." },
            { objective: "O4", q: "Halfway through the sprint, plans change. What tells the team what still matters?", options: ["The oldest card on the board", "Whoever talks loudest", "The retrospective from last year", "The sprint goal"], answer: 3, why: "Like commander's intent, the sprint goal says what still matters when plans change." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Running the work on a task board",
          minutes: 5,
          goal: "Set up a task board and use a daily check-in to keep work moving.",
          text: [
            "A task board shows the work in columns: To Do, In Progress and Done. Each task is a card that moves right as work happens. You can use sticky notes on a wall, a spreadsheet, or a free board tool such as Trello, Microsoft Planner or GitHub Projects.",
            "Kanban adds a work-in-progress (WIP) limit: for example, no more than two cards In Progress per person. Finishing work beats starting new work.",
            "The Daily Scrum is 15 minutes. Each person shares progress toward the sprint goal, what is next, and anything blocking them. Blockers get solved after the meeting, not during it."
          ],
          steps: ["Make three columns: To Do, In Progress, Done.", "Add one card per task from your sprint plan.", "Set a WIP limit, such as two cards In Progress.", "Each day, move cards and hold a 15-minute check-in.", "Write down blockers and who will clear them."],
          words: [["Task board", "a board with columns showing where each task stands."], ["WIP limit", "a cap on how many tasks can be in progress at once."], ["Blocker", "anything stopping a task from moving forward."]],
          slides: [
            { title: "A simple task board", bullets: ["To Do, In Progress, Done", "One card per task", "Sticky notes, a spreadsheet or a free board tool"] },
            { title: "Limit work in progress", bullets: ["For example: two cards per person", "Finish work before starting new work"] },
            { title: "The 15-minute Daily Scrum", bullets: ["Progress toward the sprint goal", "What is next", "Blockers: solve them after the meeting"] }
          ],
          tryIt: "Build a task board for your sprint with three columns and one card per task. Set a WIP limit. For the next three days, move the cards and write a two-line daily check-in.",
          youCanNow: "run a sprint on a task board with a WIP limit and a short daily check-in.",
          quickCheck: [
            { objective: "O5", q: "What three things does each person share at the Daily Scrum?", options: ["Their salary, title and hours", "Every detail of every task", "Their opinion of the Product Owner", "Progress toward the goal, what is next and any blockers"], answer: 3, why: "The Daily Scrum is a short check on progress toward the sprint goal, next steps and blockers." },
            { objective: "O5", q: "You finish a task. What do you do with its card?", options: ["Leave it in In Progress", "Move it to Done", "Throw it away before anyone sees it", "Move it back to To Do"], answer: 1, why: "Cards move right as work happens, so a finished task goes to Done." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Closing the sprint: review and retrospective",
          minutes: 5,
          goal: "Hold a sprint review and a retrospective and turn them into one change for the next sprint.",
          text: [
            "The Sprint Review shows the finished work to the people it is for and asks what they think. Only show work that meets its acceptance criteria. Their feedback goes back into the backlog.",
            "The Sprint Retrospective is about how you worked, not what you built. It works like an after-action review: what was supposed to happen, what happened, why, and what to do differently. A simple format is Keep, Stop, Try.",
            "Pick one improvement and put it into the next sprint as a real task. A retrospective that changes nothing is just a meeting. Agile certifications, such as the Certified ScrumMaster from Scrum Alliance or the Professional Scrum Master from Scrum.org, can come later; check their sites for current requirements and fees."
          ],
          steps: ["List what was finished and meets its acceptance criteria.", "Show it to the people it is for and write down their feedback.", "Add the feedback to the backlog.", "Hold a Keep / Stop / Try retrospective.", "Put one improvement into the next sprint."],
          words: [["Sprint Review", "a meeting to show finished work and get feedback."], ["After-action review", "a military debrief on what was planned, what happened and what to change."], ["Keep / Stop / Try", "a simple retrospective format."]],
          slides: [
            { title: "Sprint Review", bullets: ["Show only finished work", "Ask the people it is for", "Feedback goes into the backlog"] },
            { title: "Retrospective = after-action review", bullets: ["About how you worked", "Keep, Stop, Try"] },
            { title: "Make it count", bullets: ["Pick one improvement", "Put it in the next sprint as a task"] }
          ],
          sources: [{ name: "Scrum Alliance: Certified ScrumMaster", url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" }, { name: "Scrum.org assessments", url: "https://www.scrum.org/assessments" }],
          tryIt: "Final task: finish your one-week sprint. Write a short sprint review (what is done, who saw it, what they said) and a Keep / Stop / Try retrospective, then add one improvement to the next sprint.",
          youCanNow: "close a sprint with a review and a retrospective and carry one improvement into the next sprint.",
          quickCheck: [
            { objective: "O6", q: "A retrospective is most like which military practice?", options: ["An after-action review", "A change-of-command ceremony", "A supply request", "A uniform inspection"], answer: 0, why: "Like an after-action review, it asks what was planned, what happened, why, and what to change." },
            { objective: "O6", q: "Your team listed five things to try next sprint. What makes the retrospective count?", options: ["Try all five at once", "Write them down and forget them", "Pick one and add it to the next sprint as a real task", "Hold another meeting to discuss them"], answer: 2, why: "One improvement turned into a real task is what changes how the team works." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Running a sprint",
        questions: [
          { objective: "O4", q: "What is a sprint goal?", options: ["A list of every task", "The team's salary", "One sentence saying what the sprint should achieve", "A deadline for the whole project"], answer: 2, why: "The sprint goal is a one-sentence aim that guides choices during the sprint." },
          { objective: "O4", q: "Your team planned 60 hours of work but has 40 hours available. What should you do?", options: ["Keep all 60 hours and work weekends", "Cut stories until the plan fits the real time", "Skip the Daily Scrum", "Make the sprint longer without telling anyone"], answer: 1, why: "Plan to real capacity; overloaded sprints fail." },
          { objective: "O5", q: "What does a WIP limit do?", options: ["Caps how many tasks can be in progress at once", "Limits how many people can join", "Sets the project budget", "Removes the Done column"], answer: 0, why: "A WIP limit pushes the team to finish work before starting more." },
          { objective: "O5", q: "A teammate raises a blocker at the Daily Scrum. When should it be solved?", options: ["During the meeting, for an hour", "Never", "At the end of the project", "After the meeting, by the people who can help"], answer: 3, why: "The Daily Scrum stays at 15 minutes; blockers are handled right after." },
          { objective: "O6", q: "What is the retrospective about?", options: ["Selling the product", "Choosing a new Product Owner", "Writing the budget", "How the team worked and what to change"], answer: 3, why: "The retrospective reviews how the team worked, like an after-action review." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agile Project Management",
    questions: [
      { objective: "O1", q: "Agile projects deliver:", options: ["Everything at the very end", "Only paperwork", "Something usable in short rounds", "Nothing until the budget is spent"], answer: 2, why: "Agile delivers usable work every few weeks." },
      { objective: "O1", q: "Which situation suits waterfall better than Agile?", options: ["A new app where users' needs are unclear", "A well-known job that will not change, like pouring a foundation", "A marketing test with unknown results", "A project where feedback changes the plan weekly"], answer: 1, why: "Waterfall works when the work is well known and stable." },
      { objective: "O1", q: "Scrum and Kanban are:", options: ["Two common ways to do Agile", "Two programming languages", "Two certification exams", "Two kinds of budget"], answer: 0, why: "Both are popular Agile methods." },
      { objective: "O2", q: "Who helps the team use Scrum well and clears blockers?", options: ["The Product Owner", "The accountant", "The customer", "The Scrum Master"], answer: 3, why: "That is the Scrum Master's job." },
      { objective: "O2", q: "In Scrum, \"Developers\" means:", options: ["Only software programmers", "The managers", "Real estate builders", "The people doing the work, of any kind"], answer: 3, why: "Developers are whoever does the work of the sprint." },
      { objective: "O2", q: "How long is the Daily Scrum?", options: ["A full day", "Two hours", "15 minutes", "There is no limit"], answer: 2, why: "The Scrum Guide sets the Daily Scrum at 15 minutes." },
      { objective: "O2", q: "Which is NOT one of the three Scrum artifacts?", options: ["Product Backlog", "Annual Report", "Increment", "Sprint Backlog"], answer: 1, why: "The artifacts are the Product Backlog, Sprint Backlog and Increment." },
      { objective: "O3", q: "Complete the user story pattern: \"As a ___, I want ___ ...\"", options: ["\"...so that [reason]\"", "\"...by Friday\"", "\"...for free\"", "\"...or else\""], answer: 0, why: "The pattern ends with the reason: so that..." },
      { objective: "O3", q: "Acceptance criteria are:", options: ["The checks that say a story is done", "The team's job applications", "The price of the project", "A list of team members"], answer: 0, why: "They define when a story counts as finished." },
      { objective: "O3", q: "An AI assistant drafts ten user stories for you. What is your job?", options: ["Use them without reading", "Ask the AI to run the sprint", "Delete the backlog", "Check them, edit them and decide the order"], answer: 3, why: "AI can draft; you check the work and set priorities." },
      { objective: "O3", q: "The backlog's top items should be:", options: ["The easiest ones", "Picked at random", "The most valuable and urgent", "The oldest"], answer: 2, why: "The backlog is ordered by value and urgency." },
      { objective: "O4", q: "Sprint Planning answers which three questions?", options: ["Who, where, when", "Why, what and how", "Cost, price, profit", "Start, stop, pause"], answer: 1, why: "Why (the goal), what (the stories), how (the tasks)." },
      { objective: "O4", q: "A sprint goal is most like which military idea?", options: ["Uniform inspection", "Commander's intent", "Pay grade", "Leave request"], answer: 1, why: "Both say what matters if plans change." },
      { objective: "O4", q: "Tasks in a sprint should ideally take:", options: ["A day or less", "A month each", "A year", "No time"], answer: 0, why: "Small tasks show progress and reveal problems early." },
      { objective: "O5", q: "A basic task board has which columns?", options: ["Red, white, blue", "Yes and No", "Monday to Friday", "To Do, In Progress, Done"], answer: 3, why: "Those three columns show where each task stands." },
      { objective: "O5", q: "You have five cards In Progress and a WIP limit of two. What should you do?", options: ["Start a sixth task", "Remove the limit", "Finish work before starting anything new", "Move them all to Done"], answer: 2, why: "A WIP limit means finishing beats starting." },
      { objective: "O6", q: "In the Sprint Review you should show:", options: ["Nothing; it is a planning meeting", "Half-finished work as if done", "Only work that meets its acceptance criteria", "The team's personal schedules"], answer: 2, why: "Only finished work is shown, so feedback is honest." },
      { objective: "O6", q: "Feedback from the Sprint Review goes:", options: ["Into the trash", "Into the backlog", "Into the retrospective only", "To a lawyer"], answer: 1, why: "New feedback becomes backlog items." },
      { objective: "O6", q: "Keep / Stop / Try is a format for:", options: ["The retrospective", "The budget", "Hiring", "User stories"], answer: 0, why: "It is a simple way to run a retrospective." },
      { objective: "O6", q: "Where should you confirm the current requirements and fee for an Agile certification?", options: ["A random forum post", "A social media ad", "An AI chat answer alone", "The certifying body's official site, such as Scrum Alliance or Scrum.org"], answer: 3, why: "Requirements and fees change; the official site is the source." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      3,
      6,
      7,
      11,
      12,
      14,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Backlog of user stories",
        objective: "O3",
        notYet: "Fewer than eight stories, or items written as plain tasks with no \"so that\".",
        meets: "At least eight stories in the pattern, each with two or three acceptance criteria, in priority order.",
        exceeds: "Big stories are split and the learner can explain why the top story is first."
      },
      {
        name: "Sprint plan",
        objective: "O4",
        notYet: "No sprint goal, or the work is more than the time available.",
        meets: "A one-sentence sprint goal, stories from the top of the backlog and tasks of a day or less that fit the hours.",
        exceeds: "Leaves some slack and says what would be cut first."
      },
      {
        name: "Task board",
        objective: "O5",
        notYet: "The board was set up but cards were not moved during the week.",
        meets: "To Do, In Progress and Done columns, a WIP limit and cards moved daily.",
        exceeds: "Blockers were written down with who cleared them."
      },
      {
        name: "Review and retrospective",
        objective: "O6",
        notYet: "The review or the retrospective is missing.",
        meets: "A written review with feedback added to the backlog, and Keep, Stop and Try listed.",
        exceeds: "One improvement is already a task in the next sprint."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who add Agile or Scrum experience to a résumé or LinkedIn profile within 30 days",
      "Learners who apply for or start a project, program or operations role within 90 days",
      "Learners who go on to an Agile certification such as Certified ScrumMaster or Professional Scrum Master"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A free task board tool (Trello, Microsoft Planner or GitHub Projects), a spreadsheet, or sticky notes on a wall",
      "A phone or computer; an AI assistant is optional for drafting stories",
      "Paper and pen, or a document, for the backlog, sprint plan, review and retrospective",
      "About 60 minutes for lessons and checks, plus one week to run the sprint"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; run a sample board on a shared screen.",
      "Connect each idea to military experience: sprint goal and commander's intent, retrospective and after-action review.",
      "Have learners pick a real personal or community project so the sprint is genuine work.",
      "Hold a short group check-in during the sprint week so learners practice the Daily Scrum out loud.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
