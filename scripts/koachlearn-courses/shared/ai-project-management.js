"use strict";

// Koach Learn course (shared, bonus): "AI Project Management". Categories: Veterans (military), Workforce Development. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.
// Uses AI to run the classic project steps (charter, work breakdown, schedule, roles, risks, status, closeout). Agile methods are in agile-project-management.

module.exports = {
  id: "ai-project-management",
  category: "Veterans (military)",
  name: "AI Project Management",
  skills: "Writing a project charter with AI, Breaking work into a WBS, Building a schedule with milestones, Assigning roles with a RACI chart, Keeping a risk register, Writing status reports and lessons learned",
  outcome: "use an AI assistant to plan and run a small project from start to finish: a one-page charter, a work breakdown, a schedule with milestones, a RACI chart, a risk register, weekly status reports and a lessons-learned closeout, checking every AI draft yourself.",
  about: [
    "Project managers plan the work, line up the people and keep everyone informed until the job is done. AI assistants such as ChatGPT, Microsoft Copilot and Google Gemini can draft the documents in minutes, so you spend your time on decisions and people.",
    "This course is for veterans moving into civilian project roles (many already led missions, logistics and teams), workforce program participants aiming for coordinator or project assistant jobs, and anyone leading a project at work or in the community.",
    "You will plan one real or practice project from charter to closeout. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Plan a real or practice project of four to twelve weeks (for example a community job fair, an office move or a website launch) with AI help: a one-page charter, a work breakdown structure, a schedule with at least four milestones, a RACI chart, a risk register with five risks, one weekly status report and a lessons-learned template. Mark every place you corrected the AI.",
  chapters: [
    {
      name: "Chapter 1: Planning the project",
      lessons: [
        {
          title: "Writing a project charter with AI",
          minutes: 5,
          goal: "Write a one-page charter that defines the project's goal, scope and success.",
          text: [
            "A project charter is the project's birth certificate. It says why the project exists, what it will deliver, what is in and out of scope, who the sponsor is, the rough budget and deadline, and how you will know it succeeded. It is like a mission order: purpose, end state, constraints.",
            "Give AI the facts and let it draft: \"Write a one-page project charter. Project: veterans' job fair at the community center on March 15. Goal: 30 employers, 200 attendees. Budget: $3,000. Sponsor: the center's director. Out of scope: catering beyond coffee.\"",
            "Then fix it. AI may invent numbers, stakeholders or goals. Every fact must be yours. Get the sponsor to agree to the charter before work starts; it stops arguments later about what the project was supposed to do."
          ],
          steps: ["Write the purpose, goal, deadline, budget and sponsor.", "List what is in scope and out of scope.", "Ask AI to draft a one-page charter.", "Correct anything AI invented.", "Get the sponsor's agreement."],
          words: [["Project charter", "a short document that authorizes a project and states its goal, scope and limits."], ["Scope", "the work the project will and will not do."], ["Sponsor", "the person who supports and approves the project."], ["Stakeholder", "anyone affected by or involved in the project."]],
          slides: [
            { title: "The charter is the mission order", bullets: ["Purpose and goal", "Scope: in and out", "Sponsor, budget, deadline, success"] },
            { title: "AI drafts from your facts", bullets: ["Give it the real numbers", "Ask for one page"] },
            { title: "Fix and approve", bullets: ["Remove invented facts", "Sponsor agrees before work starts"] }
          ],
          tryIt: "Choose a real or practice project. Write its key facts, have AI draft a one-page charter, and mark everything you corrected.",
          youCanNow: "write a one-page project charter with AI help."
        },
        {
          title: "Breaking the work down and scheduling it",
          minutes: 6,
          goal: "Turn the charter into a work breakdown structure and a schedule with milestones.",
          text: [
            "A work breakdown structure (WBS) breaks the whole project into smaller pieces until each piece is a task one person can do in a few days. For a job fair: venue, employers, marketing, volunteers, day-of logistics, follow-up, each split into tasks.",
            "Ask AI: \"From this charter, create a WBS with phases and tasks. Then estimate a duration for each task and list which tasks depend on others.\" Dependencies matter: you cannot print flyers until the venue and date are confirmed.",
            "Turn it into a schedule in a spreadsheet or free tool, working back from the deadline. Mark milestones, the big checkpoints like \"venue booked\" or \"20 employers confirmed\". Check AI's time estimates against your own experience; it tends to be too optimistic."
          ],
          steps: ["Ask AI for a WBS with phases and tasks.", "Split any task bigger than a few days.", "Add durations and dependencies.", "Build a schedule backward from the deadline.", "Mark at least four milestones."],
          words: [["WBS", "work breakdown structure: the whole project broken into smaller tasks."], ["Dependency", "a task that cannot start until another finishes."], ["Milestone", "a key checkpoint in a project."]],
          slides: [
            { title: "Work breakdown structure", bullets: ["Whole project to phases to tasks", "Each task: one person, a few days"] },
            { title: "Durations and dependencies", bullets: ["How long each task takes", "What must finish first"] },
            { title: "Schedule and milestones", bullets: ["Work back from the deadline", "Mark key checkpoints", "AI estimates run optimistic"] }
          ],
          tryIt: "Use AI to create a WBS for your project, then build a simple schedule in a spreadsheet with durations, dependencies and at least four milestones.",
          youCanNow: "break a project into tasks and schedule them with milestones."
        },
        {
          title: "Assigning roles with a RACI chart",
          minutes: 5,
          goal: "Build a RACI chart so everyone knows who does, decides and is informed.",
          text: [
            "Confusion about who does what sinks projects. A RACI chart lists tasks down the side and people across the top, and marks each box: R for Responsible (does the work), A for Accountable (owns the result and signs off; only one per task), C for Consulted (gives input) and I for Informed (kept updated).",
            "Ask AI: \"Make a RACI chart for these tasks and roles: [tasks], [people or roles].\" Then check: does every task have exactly one A? Is anyone overloaded with R's? Is anyone Consulted on everything, slowing things down?",
            "Share the RACI with the team and sponsor. When questions come up, like who approves the flyer, point to the chart."
          ],
          steps: ["List the main tasks and the people or roles.", "Ask AI to draft a RACI chart.", "Check each task has exactly one A.", "Balance the R's so nobody is overloaded.", "Share it with the team and sponsor."],
          words: [["RACI chart", "a table showing who is Responsible, Accountable, Consulted and Informed for each task."], ["Accountable", "the one person who owns the result and signs off."]],
          slides: [
            { title: "RACI", bullets: ["R: Responsible, does the work", "A: Accountable, owns it; only one", "C: Consulted; I: Informed"] },
            { title: "Check the chart", bullets: ["Exactly one A per task", "Nobody overloaded with R's", "Not everyone consulted on everything"] },
            { title: "Use it", bullets: ["Share with team and sponsor", "Point to it when questions come up"] }
          ],
          tryIt: "Have AI draft a RACI chart for your project's main tasks. Fix it so every task has exactly one A and the work is balanced.",
          youCanNow: "build and check a RACI chart that makes roles clear."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning the project",
        questions: [
          { q: "What does a project charter define?", options: ["Only the team's lunch order", "The company's tax return", "The project's purpose, scope, sponsor, budget, deadline and success", "Every task in detail"], answer: 2, why: "The charter sets the project's foundation." },
          { q: "AI adds a goal of \"100 employers\" to your charter, but you said 30. What do you do?", options: ["Correct it to your real goal", "Keep it", "Average them", "Delete the charter"], answer: 0, why: "Every fact in the charter must be yours." },
          { q: "A dependency is:", options: ["A team member", "A budget line", "A milestone", "A task that cannot start until another finishes"], answer: 3, why: "Dependencies set the order of work." },
          { q: "How many people should be Accountable (A) for one task in a RACI chart?", options: ["Everyone", "Exactly one", "None", "At least five"], answer: 1, why: "One owner prevents confusion." },
          { q: "AI estimates that booking a venue takes one hour. Based on this course, you should:", options: ["Accept it", "Check it against your experience; AI estimates run optimistic", "Make it zero", "Skip scheduling"], answer: 1, why: "Use your own judgment on durations." }
        ]
      }
    },
    {
      name: "Chapter 2: Running and closing the project",
      lessons: [
        {
          title: "Keeping a risk register",
          minutes: 5,
          goal: "Identify, rate and plan responses for project risks with AI help.",
          text: [
            "A risk is something that might happen and would affect the project. A risk register lists each risk, how likely it is, how bad the impact would be, the response plan and an owner who watches it.",
            "Ask AI: \"List ten risks for this project [paste charter], rate likelihood and impact as low, medium or high, and suggest a response for each.\" Responses: avoid it, reduce it, transfer it (for example, insurance or a contract) or accept it with a backup plan.",
            "Keep only the risks that are real for your project, add any AI missed, and review the register every week. Military planners call this thinking through branches and sequels; civilians call it risk management."
          ],
          steps: ["Ask AI to brainstorm risks from your charter.", "Rate likelihood and impact.", "Choose a response: avoid, reduce, transfer or accept.", "Give each risk an owner.", "Review the register weekly."],
          words: [["Risk", "something that might happen and affect the project."], ["Risk register", "a list of risks with ratings, responses and owners."], ["Mitigation", "steps to reduce a risk's chance or impact."]],
          slides: [
            { title: "Risk register columns", bullets: ["Risk, likelihood, impact", "Response and owner"] },
            { title: "Four responses", bullets: ["Avoid or reduce", "Transfer (insurance, contract)", "Accept with a backup plan"] },
            { title: "Keep it real", bullets: ["Remove risks that do not apply", "Add what AI missed", "Review weekly"] }
          ],
          tryIt: "Have AI brainstorm risks for your project. Keep the five most real, rate them, choose responses and assign owners.",
          youCanNow: "build and maintain a risk register with AI help."
        },
        {
          title: "Writing status reports that people read",
          minutes: 5,
          goal: "Write a short weekly status report with a clear red, yellow or green status.",
          text: [
            "A status report keeps the sponsor and team informed. Keep it to half a page: overall status (green on track, yellow at risk, red off track), what got done this week, what is next, risks and issues, and decisions needed from the sponsor.",
            "Paste your schedule updates and notes into AI and ask: \"Write a half-page weekly status report with overall status color, accomplishments, next steps, risks and issues, and decisions needed. Be direct.\"",
            "Be honest about yellow and red. Bad news early is a gift: it gives the sponsor time to help. Hiding problems until the deadline is the fastest way to lose trust. Check every date and number AI wrote."
          ],
          steps: ["Update the schedule and risk register.", "Paste notes and updates into AI.", "Ask for a half-page report with a status color.", "Check every date and number.", "Send it on the same day each week."],
          words: [["Status report", "a regular update on a project's progress, risks and needs."], ["Issue", "a problem that is happening now, unlike a risk that might happen."], ["RAG status", "red, amber (yellow) or green: a quick signal of project health."]],
          slides: [
            { title: "Half a page", bullets: ["Status color: green, yellow, red", "Done this week and next steps", "Risks, issues, decisions needed"] },
            { title: "AI drafts from your notes", bullets: ["Paste schedule updates", "Ask for direct language", "Check dates and numbers"] },
            { title: "Bad news early", bullets: ["Gives the sponsor time to help", "Hiding problems loses trust"] }
          ],
          tryIt: "Write a weekly status report for your project (real or imagined week 3) with AI help. Include an honest status color and at least one decision needed.",
          youCanNow: "write a clear, honest weekly status report with AI help."
        },
        {
          title: "Closing the project and capturing lessons learned",
          minutes: 5,
          goal: "Close a project properly and run a lessons-learned review.",
          text: [
            "Many projects just fade out. A proper close confirms the goals were met (compare to the charter), hands over anything that continues, pays final bills, thanks the team and stores the files where others can find them.",
            "A lessons-learned review, like an after-action review, asks: what did we plan, what happened, why, and what should we do differently next time? Collect input from everyone, including what went well.",
            "AI can sort the input: \"Group these lessons-learned comments into themes and write three recommendations for future projects.\" Keep it blame-free, focus on the process, and check that the summary is fair. If you want to grow in project management, the Project Management Institute offers credentials such as CAPM, PMP and an AI-focused PMI-CPMAI; check pmi.org for current requirements and fees."
          ],
          steps: ["Compare results to the charter's goals.", "Hand over ongoing work and pay final bills.", "Run a blame-free lessons-learned review.", "Use AI to group comments and draft recommendations.", "Store all files and thank the team."],
          words: [["Closeout", "the formal end of a project."], ["Lessons learned", "what a team learned that should change how future projects are run."], ["After-action review", "a structured look back: planned, happened, why, what to change."]],
          slides: [
            { title: "Close it properly", bullets: ["Compare results to the charter", "Hand over, pay bills, store files", "Thank the team"] },
            { title: "Lessons learned", bullets: ["Planned, happened, why, change", "What went well, too", "Blame-free"] },
            { title: "Grow your career", bullets: ["PMI credentials: CAPM, PMP, PMI-CPMAI", "Check pmi.org for current rules and fees"] }
          ],
          sources: [{ name: "Project Management Institute: certifications", url: "https://www.pmi.org/certifications" }],
          tryIt: "Final task: finish your project plan with charter, WBS, schedule with milestones, RACI, risk register and one status report, then write a lessons-learned template with the four review questions. Mark every place you corrected AI.",
          youCanNow: "plan, run and close a project using AI to draft documents while you make the decisions."
        }
      ],
      check: {
        title: "Knowledge Check 2: Running and closing the project",
        questions: [
          { q: "What is the difference between a risk and an issue?", options: ["There is no difference", "Issues are always good", "Risks are only about money", "A risk might happen; an issue is happening now"], answer: 3, why: "Risks are possible; issues are current problems." },
          { q: "Buying insurance against a possible loss is which risk response?", options: ["Transfer", "Avoid", "Accept", "Ignore"], answer: 0, why: "Insurance transfers the impact to someone else." },
          { q: "Your project is likely to miss a milestone. What status should your report show?", options: ["Green to avoid worry", "No status", "Yellow or red, honestly", "Purple"], answer: 2, why: "Bad news early lets the sponsor help." },
          { q: "A lessons-learned review should be:", options: ["A search for someone to fire", "Skipped", "Only about what went wrong", "Blame-free and focused on the process"], answer: 3, why: "Blame-free reviews get honest input." },
          { q: "Where should you check current PMI certification requirements and fees?", options: ["A random forum", "An AI guess", "pmi.org", "A flyer"], answer: 2, why: "Official requirements change; check the source." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Project Management",
    questions: [
      { q: "A project manager's main job is to:", options: ["Do every task alone", "Plan the work, line up people and keep everyone informed", "Only approve budgets", "Write code"], answer: 1, why: "PMs plan, coordinate and communicate." },
      { q: "In this course, AI's role is to:", options: ["Draft documents while you make decisions", "Make every decision", "Replace the sponsor", "Approve the budget"], answer: 0, why: "AI drafts; the PM decides." },
      { q: "A charter is most like which military document?", options: ["A leave form", "A uniform checklist", "A mission order", "A pay stub"], answer: 2, why: "Both give purpose, end state and constraints." },
      { q: "\"Catering beyond coffee\" listed as out of scope means:", options: ["The project will not provide it", "It is the main goal", "It is a risk", "It is a milestone"], answer: 0, why: "Out of scope work is not part of the project." },
      { q: "Who should agree to the charter before work starts?", options: ["Nobody", "Only the AI", "A random employee", "The sponsor"], answer: 3, why: "Sponsor agreement prevents later disputes." },
      { q: "A WBS breaks the project into:", options: ["Budget lines only", "Smaller tasks one person can do in a few days", "Team photos", "Office rooms"], answer: 1, why: "Small tasks are easier to plan and track." },
      { q: "You cannot print flyers until the venue is confirmed. This is a:", options: ["Milestone", "Dependency", "Sponsor", "Risk response"], answer: 1, why: "One task depends on another finishing." },
      { q: "\"20 employers confirmed\" is a good example of a:", options: ["Task duration", "RACI role", "Status color", "Milestone"], answer: 3, why: "Milestones are key checkpoints." },
      { q: "Schedules are often best built by:", options: ["Working backward from the deadline", "Guessing", "Starting with the last task only", "Skipping dates"], answer: 0, why: "Working back shows what must start when." },
      { q: "In RACI, \"R\" means:", options: ["Retired", "Reviewer only", "Responsible: does the work", "Rejected"], answer: 2, why: "R is the person doing the work." },
      { q: "In RACI, \"I\" means:", options: ["In charge", "Inspector", "Ignored", "Informed: kept updated"], answer: 3, why: "Informed people get updates." },
      { q: "A RACI chart shows one person with R on 15 tasks. You should:", options: ["Add more R's to them", "Remove the chart", "Rebalance the work", "Ignore it"], answer: 2, why: "Overloaded people slow the project." },
      { q: "A risk register includes:", options: ["Only the budget", "Risk, likelihood, impact, response and owner", "Team birthdays", "Customer reviews"], answer: 1, why: "These columns make risks manageable." },
      { q: "Changing the plan so a risk cannot happen is which response?", options: ["Avoid", "Transfer", "Accept", "Report"], answer: 0, why: "Avoiding removes the risk." },
      { q: "How often should the risk register be reviewed?", options: ["Never", "Once at the end", "Weekly", "Every ten years"], answer: 2, why: "Risks change as the project moves." },
      { q: "A status report should be about:", options: ["Half a page", "Fifty pages", "One word", "As long as possible"], answer: 0, why: "Short reports get read." },
      { q: "Green status means:", options: ["Off track", "Cancelled", "Unknown", "On track"], answer: 3, why: "Green signals the project is on track." },
      { q: "Before sending an AI-written status report, you must:", options: ["Add more colors", "Check every date and number", "Remove the decisions section", "Send it unread"], answer: 1, why: "AI can get details wrong." },
      { q: "A lessons-learned review asks:", options: ["Who to blame", "What we planned, what happened, why, and what to change", "How to hide mistakes", "Nothing"], answer: 1, why: "It mirrors the after-action review." },
      { q: "Proper closeout includes:", options: ["Walking away", "Deleting all records", "Starting a new project without review", "Comparing results to the charter and storing files"], answer: 3, why: "Closing properly captures value and lessons." }
    ]
  }
};
