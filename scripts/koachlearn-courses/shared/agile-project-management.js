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
  chapters: [
    {
      name: "Chapter 1: Planning the Agile way",
      lessons: [
        {
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
          youCanNow: "explain how Agile differs from a big up-front plan and name Scrum and Kanban."
        },
        {
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
          youCanNow: "name the three Scrum accountabilities, the five events and the three artifacts, and assign them on your project."
        },
        {
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
          youCanNow: "write user stories with acceptance criteria and order them into a backlog."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning the Agile way",
        questions: [
          { q: "What is the main difference between Agile and waterfall?", options: ["Agile has no plan at all", "Agile delivers in short rounds and adjusts as it learns", "Waterfall uses sprints", "Agile only works for software"], answer: 1, why: "Agile works in short rounds that each deliver something and then adjusts the plan." },
          { q: "According to the Scrum Guide, how long can a sprint be?", options: ["One month or less", "Any length the boss likes", "One year", "Exactly six months"], answer: 0, why: "The Scrum Guide says sprints are one month or less." },
          { q: "Who decides what work matters most and keeps the backlog in order?", options: ["Whoever finishes first", "The Scrum Master", "The customer's lawyer", "The Product Owner"], answer: 3, why: "The Product Owner orders the Product Backlog." },
          { q: "Which is a well-written user story?", options: ["\"Résumé\"", "\"Fix stuff\"", "\"As a hiring manager, I want a one-page résumé so that I can see skills fast\"", "\"Do everything by Friday\""], answer: 2, why: "It names the person, what they want and why." },
          { q: "A story is too big to finish in one sprint. What do you do?", options: ["Make the sprint a year long", "Delete it", "Split it into smaller stories", "Skip acceptance criteria"], answer: 2, why: "Big stories are split so each piece can be finished in a sprint." }
        ]
      }
    },
    {
      name: "Chapter 2: Running a sprint",
      lessons: [
        {
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
          youCanNow: "plan a sprint with a goal, chosen stories and tasks that fit your real time."
        },
        {
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
          youCanNow: "run a sprint on a task board with a WIP limit and a short daily check-in."
        },
        {
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
          youCanNow: "close a sprint with a review and a retrospective and carry one improvement into the next sprint."
        }
      ],
      check: {
        title: "Knowledge Check 2: Running a sprint",
        questions: [
          { q: "What is a sprint goal?", options: ["A list of every task", "The team's salary", "One sentence saying what the sprint should achieve", "A deadline for the whole project"], answer: 2, why: "The sprint goal is a one-sentence aim that guides choices during the sprint." },
          { q: "Your team planned 60 hours of work but has 40 hours available. What should you do?", options: ["Keep all 60 hours and work weekends", "Cut stories until the plan fits the real time", "Skip the Daily Scrum", "Make the sprint longer without telling anyone"], answer: 1, why: "Plan to real capacity; overloaded sprints fail." },
          { q: "What does a WIP limit do?", options: ["Caps how many tasks can be in progress at once", "Limits how many people can join", "Sets the project budget", "Removes the Done column"], answer: 0, why: "A WIP limit pushes the team to finish work before starting more." },
          { q: "A teammate raises a blocker at the Daily Scrum. When should it be solved?", options: ["During the meeting, for an hour", "Never", "At the end of the project", "After the meeting, by the people who can help"], answer: 3, why: "The Daily Scrum stays at 15 minutes; blockers are handled right after." },
          { q: "What is the retrospective about?", options: ["Selling the product", "Choosing a new Product Owner", "Writing the budget", "How the team worked and what to change"], answer: 3, why: "The retrospective reviews how the team worked, like an after-action review." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Agile Project Management",
    questions: [
      { q: "Agile projects deliver:", options: ["Everything at the very end", "Only paperwork", "Something usable in short rounds", "Nothing until the budget is spent"], answer: 2, why: "Agile delivers usable work every few weeks." },
      { q: "Which situation suits waterfall better than Agile?", options: ["A new app where users' needs are unclear", "A well-known job that will not change, like pouring a foundation", "A marketing test with unknown results", "A project where feedback changes the plan weekly"], answer: 1, why: "Waterfall works when the work is well known and stable." },
      { q: "Scrum and Kanban are:", options: ["Two common ways to do Agile", "Two programming languages", "Two certification exams", "Two kinds of budget"], answer: 0, why: "Both are popular Agile methods." },
      { q: "Who helps the team use Scrum well and clears blockers?", options: ["The Product Owner", "The accountant", "The customer", "The Scrum Master"], answer: 3, why: "That is the Scrum Master's job." },
      { q: "In Scrum, \"Developers\" means:", options: ["Only software programmers", "The managers", "Real estate builders", "The people doing the work, of any kind"], answer: 3, why: "Developers are whoever does the work of the sprint." },
      { q: "How long is the Daily Scrum?", options: ["A full day", "Two hours", "15 minutes", "There is no limit"], answer: 2, why: "The Scrum Guide sets the Daily Scrum at 15 minutes." },
      { q: "Which is NOT one of the three Scrum artifacts?", options: ["Product Backlog", "Annual Report", "Increment", "Sprint Backlog"], answer: 1, why: "The artifacts are the Product Backlog, Sprint Backlog and Increment." },
      { q: "Complete the user story pattern: \"As a ___, I want ___ ...\"", options: ["\"...so that [reason]\"", "\"...by Friday\"", "\"...for free\"", "\"...or else\""], answer: 0, why: "The pattern ends with the reason: so that..." },
      { q: "Acceptance criteria are:", options: ["The checks that say a story is done", "The team's job applications", "The price of the project", "A list of team members"], answer: 0, why: "They define when a story counts as finished." },
      { q: "An AI assistant drafts ten user stories for you. What is your job?", options: ["Use them without reading", "Ask the AI to run the sprint", "Delete the backlog", "Check them, edit them and decide the order"], answer: 3, why: "AI can draft; you check the work and set priorities." },
      { q: "The backlog's top items should be:", options: ["The easiest ones", "Picked at random", "The most valuable and urgent", "The oldest"], answer: 2, why: "The backlog is ordered by value and urgency." },
      { q: "Sprint Planning answers which three questions?", options: ["Who, where, when", "Why, what and how", "Cost, price, profit", "Start, stop, pause"], answer: 1, why: "Why (the goal), what (the stories), how (the tasks)." },
      { q: "A sprint goal is most like which military idea?", options: ["Uniform inspection", "Commander's intent", "Pay grade", "Leave request"], answer: 1, why: "Both say what matters if plans change." },
      { q: "Tasks in a sprint should ideally take:", options: ["A day or less", "A month each", "A year", "No time"], answer: 0, why: "Small tasks show progress and reveal problems early." },
      { q: "A basic task board has which columns?", options: ["Red, white, blue", "Yes and No", "Monday to Friday", "To Do, In Progress, Done"], answer: 3, why: "Those three columns show where each task stands." },
      { q: "You have five cards In Progress and a WIP limit of two. What should you do?", options: ["Start a sixth task", "Remove the limit", "Finish work before starting anything new", "Move them all to Done"], answer: 2, why: "A WIP limit means finishing beats starting." },
      { q: "In the Sprint Review you should show:", options: ["Nothing; it is a planning meeting", "Half-finished work as if done", "Only work that meets its acceptance criteria", "The team's personal schedules"], answer: 2, why: "Only finished work is shown, so feedback is honest." },
      { q: "Feedback from the Sprint Review goes:", options: ["Into the trash", "Into the backlog", "Into the retrospective only", "To a lawyer"], answer: 1, why: "New feedback becomes backlog items." },
      { q: "Keep / Stop / Try is a format for:", options: ["The retrospective", "The budget", "Hiring", "User stories"], answer: 0, why: "It is a simple way to run a retrospective." },
      { q: "Where should you confirm the current requirements and fee for an Agile certification?", options: ["A random forum post", "A social media ad", "An AI chat answer alone", "The certifying body's official site, such as Scrum Alliance or Scrum.org"], answer: 3, why: "Requirements and fees change; the official site is the source." }
    ]
  }
};
