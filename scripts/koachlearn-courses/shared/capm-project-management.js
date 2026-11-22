"use strict";

// Koach Learn course: Workforce Development -> "Project Management Basics (CAPM Preparation)" (wave 3, 30 October 2026).
// Prepares learners for the core ideas behind PMI's Certified Associate in Project Management (CAPM). It does not grant the credential.
// pmi.org returned 403 to the course writer's fetch, so no PMI fee, hour, question count or pass mark is stated; learners are sent to pmi.org.
// Goes deeper than shared/ai-project-management.js (charter, WBS, RACI with AI) and shared/agile-project-management.js (Scrum):
// here the focus is the plan-based toolkit (critical path, float, stakeholder grid, risk scoring, change control) and the CAPM path itself.

module.exports = {
  id: "capm-project-management",
  category: "Workforce Development",
  name: "Project Management Basics (CAPM Preparation)",
  skills: "Defining a project and its constraints, Writing a project charter, Building a WBS and finding the critical path, Managing risks and changes, Choosing a predictive or Agile approach, Planning for the CAPM exam",
  outcome: "plan a small real project the way the CAPM exam expects: write a charter, break the work down, find the critical path, track risks and changes, choose a fitting approach, and build your own dated plan to prepare for the CAPM.",
  about: [
    "This course is for job seekers, veterans, young adults, small business owners and anyone who wants an entry-level project role such as project coordinator, project assistant or team lead. It is also a first step toward the Certified Associate in Project Management (CAPM), an entry-level credential from the Project Management Institute (PMI).",
    "You will learn the core tools: a project charter, a stakeholder list, a work breakdown structure, a schedule with a critical path, a risk register and a change log. You will practice each one on paper or in a free spreadsheet, using a small project from your own life or work.",
    "This course PREPARES you. It does not give you the CAPM. Only PMI grants it, and PMI sets the rules: who can apply, the education hours you need, the fee, the exam and how to renew. Those can change, so you will check them yourself on pmi.org.",
    "Each lesson takes about five minutes, followed by a \"Try it now\" task and two quick questions. There is a pre-test at the start, a knowledge check after each chapter and a 20-question final quiz."
  ],
  finalTask: "Run your own CAPM preparation as a project. Make a one-page charter (goal, scope, sponsor, success measure), a work breakdown structure of your study work, a dated schedule with milestones that ends on a target test date and shows the critical path, a risk register with at least three risks (each with a score, a response and an owner), and a list of the official PMI pages you checked for current eligibility, fees and the exam content outline.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults and young adults in the US and abroad who want an entry-level project role or the CAPM: job seekers, veterans moving to civilian work, people coming home from prison, small business owners, nonprofit staff and workers who already coordinate tasks without the title.",
    startingPoint: "Most have organized work informally (an event, a move, a shift schedule, a military mission, a church program) but have not used formal project tools or vocabulary. Some can use a basic spreadsheet; few have seen a Gantt chart or a risk register.",
    gap: "Employers list project coordination and the CAPM in job postings, and the exam uses PMI vocabulary. Learners need to turn what they already do informally into the standard tools and words, and they need a realistic plan to meet PMI's requirements and pass the exam.",
    constraints: [
      "Reading level: plain words and short sentences; every PMI term defined",
      "Devices: paper and pen work for every task; a free spreadsheet (Google Sheets or Excel online) helps",
      "Time: 4 to 6 minute lessons that fit around work and family",
      "PMI rules, fees and the exam outline change: learners confirm them on pmi.org, not from this course",
      "The course prepares; it does not grant the CAPM or count automatically toward PMI's education hours"
    ],
    prerequisites: "None. Learners new to spreadsheets can take \"Excel and Spreadsheets\" first; \"Agile Project Management\" is a good next course."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Given a description of a piece of work", action: "identify whether it is a project and name its life-cycle phases and main constraints", standard: "correctly for at least 4 of 5 examples" },
    { id: "O2", condition: "For a small real project", action: "write a one-page project charter and a stakeholder list with each person's interest and influence", standard: "including goal, scope in and out, sponsor, deadline and a measurable success measure" },
    { id: "O3", condition: "Given a project goal and a list of tasks with durations", action: "build a work breakdown structure and a schedule that marks the critical path", standard: "with every dependency shown and the critical path length calculated correctly" },
    { id: "O4", condition: "For the same project", action: "record risks in a risk register and handle a change request through change control", standard: "with a score, a response and one owner for every risk, and no change made without approval" },
    { id: "O5", condition: "Given a short project scenario", action: "choose a predictive, Agile or hybrid approach and explain the choice", standard: "giving at least two reasons from the scenario" },
    { id: "O6", condition: "Using PMI's official pages", action: "build a dated CAPM study and test plan", standard: "with eligibility checked, the exam content outline listed and a target test date" }
  ],
  chapters: [
    {
      name: "Chapter 1: Starting a project the right way",
      lessons: [
        {
          title: "What makes work a project",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identify whether a piece of work is a project and name its phases and constraints.",
          text: [
            "A project is temporary work to create something new: it has a start, an end and a unique result. Opening a food truck, moving an office, running a voter drive or building a website are projects. Cooking the same lunch menu every day, or answering the phones each shift, is ongoing operations, not a project.",
            "Most projects move through phases. A simple way to see them: start (agree why and what), plan (how, when, who, how much), do the work, watch and control it, and close (hand it over and record lessons learned). PMI calls the people and practices that guide this \"project management\".",
            "Every project is limited by constraints. The classic three are scope (what you will deliver), schedule (time) and cost (money). Quality, resources and risk matter too. If one changes, the others feel it: add scope with the same deadline and you need more people or money, or quality drops."
          ],
          steps: ["Ask: does this work have a clear start and end?", "Ask: does it create something new or different?", "If yes to both, it is a project. If it repeats every day, it is operations.", "Name the phase it is in now and its tightest constraint."],
          words: [["Project", "temporary work with a start, an end and a unique result."], ["Operations", "ongoing, repeated work that keeps a business running."], ["Constraint", "a limit on the project, such as time, money or scope."], ["Scope", "all the work and results the project will deliver, and nothing more."], ["Life cycle", "the phases a project moves through from start to close."]],
          slides: [
            { title: "Project or operations?", bullets: ["Project: temporary, with a start, an end and a unique result", "Operations: the same work repeated every day"] },
            { title: "Five simple phases", bullets: ["Start: why and what", "Plan: how, when, who, how much", "Do, then watch and control", "Close: hand over and record lessons learned"] },
            { title: "The constraints", bullets: ["Scope, schedule and cost", "Also quality, resources and risk", "Change one and the others feel it"] }
          ],
          sources: [{ name: "Project Management Institute: What is project management?", url: "https://www.pmi.org/about/learn-about-pmi/what-is-project-management" }],
          tryIt: "Write down five pieces of work from your life, your job or your military service. Mark each one P (project) or O (operations). For each project, write its tightest constraint: scope, time or money.",
          youCanNow: "tell a project from ongoing operations, name its phases and say which constraint is tightest.",
          quickCheck: [
            { objective: "O1", q: "Which of these is a project?", options: ["Restocking shelves every night", "Answering customer calls each shift", "Opening a second store location by June", "Running payroll every two weeks"], answer: 2, why: "Opening a new location is temporary, has an end date and creates something new." },
            { objective: "O1", q: "The sponsor adds three new features but keeps the same deadline and budget. What is most likely to suffer?", options: ["Nothing; scope does not affect other constraints", "Quality, unless more time, people or money are added", "Only the project name", "The stakeholder list"], answer: 1, why: "Scope, schedule and cost are linked; more scope with the same time and money puts pressure on quality." }
          ]
        },
        {
          title: "The project charter and your stakeholders",
          objectives: ["O2"],
          minutes: 6,
          goal: "Write a one-page charter and a stakeholder list for a small project.",
          text: [
            "The project charter is the document that officially starts a project. It names the sponsor (the person who approves and funds it) and gives the project manager authority to use people and money. Think of it as the mission order: no charter, no project.",
            "A good one-page charter has: the purpose (why), a goal with a measure (\"open the food pantry's online sign-up by 1 March, with 50 families signed up in the first month\"), scope in and scope out, the deadline and major milestones, the budget, the main risks, and the sponsor's name.",
            "Stakeholders are everyone who affects the project or is affected by it: the sponsor, the team, customers, neighbors, inspectors, suppliers. List them, then place each on a simple grid of influence (high or low) and interest (high or low). High influence and high interest: manage them closely. High influence, low interest: keep them satisfied. Low influence, high interest: keep them informed. Low and low: check in now and then."
          ],
          steps: ["Write the purpose in one sentence.", "Write the goal with a number and a date.", "List what is in scope and what is out.", "Add deadline, milestones, budget and sponsor.", "List stakeholders and place each on the influence and interest grid."],
          words: [["Project charter", "the document that officially starts the project and gives the project manager authority."], ["Sponsor", "the person or group that approves, funds and supports the project."], ["Stakeholder", "anyone who affects the project or is affected by it."], ["Milestone", "an important point in the schedule, with no length of its own, such as \"permit approved\"."]],
          slides: [
            { title: "The charter starts the project", bullets: ["Names the sponsor", "Gives the project manager authority", "No charter, no project"] },
            { title: "What goes on one page", bullets: ["Purpose and a measurable goal", "Scope in and scope out", "Deadline, milestones, budget, main risks"] },
            { title: "Stakeholder grid", bullets: ["High influence, high interest: manage closely", "High influence, low interest: keep satisfied", "Low influence, high interest: keep informed"] }
          ],
          tryIt: "Pick a small real project, such as a family reunion, a church fundraiser, a yard sale or cleaning up a storage room at work. Write a one-page charter with every part above, then list at least five stakeholders and place each on the grid.",
          youCanNow: "write a one-page charter and decide how to work with each stakeholder.",
          quickCheck: [
            { objective: "O2", q: "Which goal is best for a charter?", options: ["\"Make the website better\"", "\"Do a great job on sign-ups\"", "\"Try to finish soon\"", "\"Open online sign-up by 1 March with 50 families signed up in the first month\""], answer: 3, why: "A good goal has a number and a date, so everyone can tell whether it was met." },
            { objective: "O2", q: "The city inspector has high influence but little interest in your project. How do you treat the inspector?", options: ["Keep them satisfied: meet their needs without heavy updates", "Ignore them until the end", "Send them every daily update", "Make them the sponsor"], answer: 0, why: "High influence, low interest stakeholders are kept satisfied so they do not block the project." }
          ]
        },
        {
          title: "Breaking down the work and finding the critical path",
          objectives: ["O3"],
          minutes: 6,
          goal: "Build a work breakdown structure and a schedule, and mark the critical path.",
          text: [
            "A work breakdown structure (WBS) splits the whole project into smaller pieces of deliverables, level by level, until each piece is small enough to estimate and give to one person. The smallest piece is a work package. If it is not in the WBS, it is not in the project.",
            "Next, list the tasks, how long each takes (duration) and which must finish before another can start (dependencies). Draw them as boxes with arrows, left to right. Example: A, get the permit (2 days); B, build the booth (3 days, after A); C, order signs (1 day, after A); D, set up at the fair (2 days, after B and C).",
            "Add up each path from start to end. A-B-D takes 2 + 3 + 2 = 7 days. A-C-D takes 2 + 1 + 2 = 5 days. The longest path is the critical path: it sets the shortest possible finish, 7 days. A delay on A, B or D delays the whole project. C has float (slack) of 7 - 5 = 2 days: it can slip 2 days without moving the finish."
          ],
          steps: ["Write the project's main deliverables as the first level of the WBS.", "Break each one down until a piece is small enough for one person to estimate.", "List tasks with durations and what each one must wait for.", "Draw boxes and arrows, then add up every path.", "The longest path is the critical path; the others have float."],
          words: [["Work breakdown structure (WBS)", "a tree that splits the project's deliverables into smaller pieces."], ["Work package", "the smallest piece in the WBS, small enough to estimate and assign."], ["Dependency", "a link that means one task must finish (or start) before another can."], ["Critical path", "the longest chain of linked tasks; it sets the earliest the project can finish."], ["Float (slack)", "how long a task can slip without delaying the project's finish."], ["Gantt chart", "a bar chart that shows each task on a calendar."]],
          slides: [
            { title: "Work breakdown structure", bullets: ["Whole project, then deliverables, then work packages", "Each work package: one owner, easy to estimate", "Not in the WBS means not in the project"] },
            { title: "Durations and dependencies", bullets: ["How long each task takes", "What must finish before it starts", "Draw boxes and arrows, left to right"] },
            { title: "Finding the critical path", bullets: ["Add up every path from start to end", "Example: A-B-D = 7 days, A-C-D = 5 days", "Longest path = critical path = 7 days"] },
            { title: "Float", bullets: ["Task C can slip 2 days without moving the finish", "Critical path tasks have zero float", "Watch critical tasks most closely"] }
          ],
          tryIt: "Take the project from your charter. Draw a WBS with at least two levels on paper. Then list five to eight tasks with durations and dependencies, draw them as boxes and arrows, add up each path, and circle the critical path. Write the float of one task that is not on it.",
          youCanNow: "break a project into a WBS, build a simple schedule and find the critical path and float.",
          quickCheck: [
            { objective: "O3", q: "Path 1 takes 9 days and Path 2 takes 6 days. What is the critical path, and how long is the project?", options: ["Path 2, 6 days", "Both paths, 15 days", "Path 1, 9 days", "Path 1, 3 days"], answer: 2, why: "The longest path is the critical path, and it sets the shortest finish: 9 days." },
            { objective: "O3", q: "A task has 2 days of float and slips 1 day. What happens to the finish date?", options: ["It does not move", "It moves 1 day later", "It moves 2 days later", "The project is canceled"], answer: 0, why: "A task can slip up to its float without delaying the finish." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Starting a project the right way",
        questions: [
          { objective: "O1", q: "What makes a project different from operations?", options: ["A project costs more", "A project is temporary and creates a unique result", "Operations never use a schedule", "A project has no budget"], answer: 1, why: "Projects have a start, an end and a unique result; operations repeat." },
          { objective: "O2", q: "Which document officially starts a project and gives the project manager authority?", options: ["The risk register", "The Gantt chart", "The lessons-learned report", "The project charter"], answer: 3, why: "The charter authorizes the project and names the sponsor." },
          { objective: "O2", q: "Neighbors care a lot about your park cleanup but cannot stop it. What is the best approach?", options: ["Keep them informed", "Manage them as closely as the sponsor", "Leave them off the list", "Ask them to fund it"], answer: 0, why: "Low influence, high interest stakeholders are kept informed." },
          { objective: "O3", q: "What is a work package?", options: ["The box the project's supplies arrive in", "The final report", "The smallest piece of the WBS, small enough to estimate and assign", "The sponsor's budget"], answer: 2, why: "A work package is the lowest level of the work breakdown structure." },
          { objective: "O3", q: "Tasks: A (3 days), then B (4 days) and C (2 days) both after A, then D (1 day) after B and C. How long is the critical path?", options: ["6 days", "10 days", "7 days", "8 days"], answer: 3, why: "A-B-D = 3 + 4 + 1 = 8 days, longer than A-C-D = 6 days." }
        ]
      }
    },
    {
      name: "Chapter 2: Keeping the project on track and preparing for the CAPM",
      lessons: [
        {
          title: "Risks, issues and change control",
          objectives: ["O4"],
          minutes: 6,
          goal: "Record risks in a risk register and send a change request through change control.",
          text: [
            "A risk is something that MIGHT happen and would affect the project. An issue is a problem that is happening NOW. Write risks down early in a risk register: the risk, its probability (how likely, 1 to 5), its impact (how bad, 1 to 5), a score (probability times impact), a response and one owner.",
            "There are four main responses to a threat. Avoid it (change the plan so it cannot happen). Transfer it (move it to someone else, for example with insurance or a contract). Mitigate it (make it less likely or less harmful). Accept it (do nothing now, but watch it, and maybe keep some time or money in reserve). Example: rain at an outdoor event, probability 3, impact 4, score 12; response: mitigate by renting a tent; owner: Maria.",
            "Changes will come. Scope creep is when work is added without approval. To stop it, use change control: write a change request, check its effect on scope, time, cost, quality and risk, have the right person (often the sponsor or a change board) approve or reject it, then update the plan and the change log. No approval, no change."
          ],
          steps: ["List what could go wrong (and what could go better than planned).", "Score each risk: probability x impact.", "Choose a response: avoid, transfer, mitigate or accept.", "Give each risk one owner.", "For any change: write it down, check the impact, get approval, then update the plan."],
          words: [["Risk", "something uncertain that might happen and would affect the project."], ["Issue", "a problem that is already happening."], ["Risk register", "a table of risks with scores, responses and owners."], ["Mitigate", "make a risk less likely or less harmful."], ["Scope creep", "work added to the project without approval."], ["Change control", "the process to review, approve or reject changes before they are made."]],
          slides: [
            { title: "Risk or issue?", bullets: ["Risk: might happen", "Issue: happening now", "Write risks down early"] },
            { title: "The risk register", bullets: ["Probability x impact = score", "One response and one owner per risk", "Review it at every team meeting"] },
            { title: "Four responses to a threat", bullets: ["Avoid, transfer, mitigate, accept", "Example: rain risk, score 12, mitigate with a tent"] },
            { title: "Change control", bullets: ["Write the request", "Check the effect on scope, time, cost, quality, risk", "Approve or reject, then update the plan"] }
          ],
          tryIt: "Make a risk register for your project in a spreadsheet or on paper with columns: risk, probability, impact, score, response, owner. Add at least three risks. Then write one change request someone might ask for, and note its effect on time and cost and who must approve it.",
          youCanNow: "keep a risk register and stop scope creep with change control.",
          quickCheck: [
            { objective: "O4", q: "A risk has probability 4 and impact 3. What is its score?", options: ["7", "12", "1", "43"], answer: 1, why: "Score = probability x impact = 4 x 3 = 12." },
            { objective: "O4", q: "A team member adds a new feature because a customer asked in the hallway. What went wrong?", options: ["Nothing; customers come first", "The risk register was too long", "The charter was too short", "Scope creep: the change skipped change control"], answer: 3, why: "Changes must be written, checked for impact and approved before work starts." }
          ]
        },
        {
          title: "Predictive, Agile or hybrid: choosing the approach",
          objectives: ["O5"],
          minutes: 5,
          goal: "Choose a predictive, Agile or hybrid approach for a project and give the reasons.",
          text: [
            "A predictive approach (sometimes called waterfall or plan-based) plans the scope, schedule and cost up front and follows the plan, with changes going through change control. It fits work where the requirements are clear and stable and changes are costly, such as building a ramp, moving a warehouse or a construction job with permits.",
            "An Agile approach delivers in short cycles (iterations or sprints), gets feedback each time and adjusts the plan. It fits work where needs are unclear or will change, such as a new app or a new service where you must learn what customers want. Scrum and Kanban are common Agile methods.",
            "A hybrid approach mixes them: for example, a predictive plan for buying equipment and a fixed opening date, with Agile sprints for the website and marketing. Whatever the approach, someone must understand the requirements: what the customer truly needs. Gathering, writing and checking requirements is called business analysis, and it is part of what the CAPM covers."
          ],
          steps: ["Ask: are the requirements clear and stable?", "Ask: how costly is a change late in the project?", "Ask: can we deliver and get feedback in small pieces?", "Clear and costly to change: predictive. Unclear and easy to deliver in pieces: Agile. A mix: hybrid."],
          words: [["Predictive approach", "plan scope, time and cost up front, then follow the plan; also called waterfall."], ["Agile approach", "deliver in short cycles, get feedback and adjust the plan."], ["Hybrid approach", "a mix of predictive and Agile parts in one project."], ["Requirement", "a need the result must meet, such as \"customers can pay by phone\"."], ["Business analysis", "finding, writing and checking what the customer truly needs."]],
          slides: [
            { title: "Predictive (plan-based)", bullets: ["Plan scope, schedule and cost up front", "Best when requirements are clear and stable", "Example: building a wheelchair ramp"] },
            { title: "Agile", bullets: ["Short cycles with feedback each time", "Best when needs are unclear or will change", "Example: a new phone app for customers"] },
            { title: "Hybrid and requirements", bullets: ["Mix both in one project", "Always find what the customer truly needs", "That work is business analysis"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Read these three: (1) paving a church parking lot with a fixed permit and budget; (2) a new delivery app where customers keep asking for changes; (3) opening a restaurant with a fixed date and a new online ordering site. Write predictive, Agile or hybrid for each, with two reasons. Then decide which approach fits your own project and why.",
          youCanNow: "choose a predictive, Agile or hybrid approach and explain why it fits.",
          quickCheck: [
            { objective: "O5", q: "A team is building a new app and does not yet know which features customers will use. Which approach fits best?", options: ["Predictive, with every feature fixed now", "No approach at all", "Agile, delivering small pieces and getting feedback", "Wait until customers send a full list"], answer: 2, why: "Unclear needs fit Agile: short cycles and feedback show what customers want." },
            { objective: "O5", q: "Paving a parking lot with a fixed permit, a fixed budget and clear specifications fits which approach?", options: ["Predictive", "Agile", "Kanban only", "None, because it is operations"], answer: 0, why: "Clear, stable requirements and costly late changes fit a predictive plan." }
          ]
        },
        {
          title: "The CAPM: checking the rules and planning your test",
          objectives: ["O6"],
          minutes: 6,
          goal: "Build a dated CAPM study and test plan from PMI's official pages.",
          text: [
            "The Certified Associate in Project Management (CAPM) is an entry-level credential granted only by the Project Management Institute (PMI). It is meant for people starting out, so it does not ask for years of project experience the way PMI's Project Management Professional (PMP) does. PMI does require some project management education before you take the exam. This course prepares you; it is not the credential, and it may or may not count toward PMI's education hours, so check pmi.org.",
            "Before you plan, read PMI's official CAPM page and the CAPM handbook and Exam Content Outline it links to. Write down: who is eligible, how many hours of education you need and what counts, the current fee (PMI members and non-members may pay different amounts), how and where you can take the exam, and how to keep the credential (it must be renewed). Recent outlines have covered project management basics, predictive methods, Agile methods and business analysis, but use the outline PMI shows today.",
            "Veterans: the GI Bill may pay back licensing and certification test fees. Check VA's test-fee page and its GI Bill Comparison Tool to see whether a test is approved. Outside the US, PMI has local chapters in many countries; look one up on pmi.org for study groups. Beware of anyone selling \"guaranteed pass\" or real exam questions: that breaks PMI's rules and can cost you the credential."
          ],
          steps: ["Open pmi.org and find the CAPM page, the handbook and the Exam Content Outline.", "Write down eligibility, education hours, fee, exam format and renewal rules.", "Pick a target test date 8 to 12 weeks away (or what fits your life).", "Break your study into a WBS by exam topic, with milestones and practice tests.", "Add a risk register: work hours, family, test anxiety, cost."],
          words: [["CAPM", "Certified Associate in Project Management, an entry-level credential from PMI."], ["PMI", "Project Management Institute, the organization that grants the CAPM and PMP."], ["Exam Content Outline", "PMI's official list of the topics an exam covers."], ["PMP", "Project Management Professional, PMI's credential for experienced project managers."], ["Eligibility", "the requirements you must meet before you can apply for the exam."]],
          slides: [
            { title: "What the CAPM is", bullets: ["Entry-level credential, granted only by PMI", "No years of project experience needed, unlike PMP", "This course prepares you; it is not the credential"] },
            { title: "Check on pmi.org", bullets: ["Eligibility and education hours", "Current fee, member and non-member", "Exam format, Exam Content Outline, renewal"] },
            { title: "Help with costs", bullets: ["Veterans: GI Bill may repay certification test fees", "Check va.gov and the GI Bill Comparison Tool", "Abroad: find a local PMI chapter"] },
            { title: "Plan your test like a project", bullets: ["Charter: goal and target test date", "WBS by exam topic, with milestones", "Risk register; never buy \"real exam questions\""] }
          ],
          sources: [{ name: "PMI: Certified Associate in Project Management (CAPM)", url: "https://www.pmi.org/certifications/certified-associate-capm" }, { name: "PMI: Certifications", url: "https://www.pmi.org/certifications" }, { name: "U.S. Department of Veterans Affairs: Reimbursement for licensing or certification test fees", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/test-fees/" }],
          tryIt: "Final task: open PMI's CAPM page and write down eligibility, education hours, fee and the exam topics. Then plan your CAPM preparation as a project: a one-page charter with a target test date, a WBS of your study by topic, a dated schedule with milestones and the critical path marked, and a risk register with at least three risks. Add the list of PMI pages you checked.",
          youCanNow: "check PMI's current CAPM rules and build your own dated study and test plan.",
          quickCheck: [
            { objective: "O6", q: "Who grants the CAPM?", options: ["This course", "Your state licensing board", "Any training company", "The Project Management Institute (PMI)"], answer: 3, why: "Only PMI grants the CAPM; courses only prepare you." },
            { objective: "O6", q: "Where should you check the current CAPM fee and education hours?", options: ["A social media post", "PMI's official CAPM page and handbook on pmi.org", "A seller of practice exams", "An AI chatbot's answer"], answer: 1, why: "Fees and requirements change; PMI's own pages are the official source." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Keeping the project on track and preparing for the CAPM",
        questions: [
          { objective: "O4", q: "Your supplier might be late. You arrange a second supplier just in case. Which response is this?", options: ["Accept", "Avoid", "Mitigate", "Ignore"], answer: 2, why: "A backup supplier makes the threat less harmful, which is mitigation." },
          { objective: "O4", q: "The sponsor asks for a bigger stage. What should happen first?", options: ["Build it right away", "Write a change request and check its effect on time and cost", "Say no to all changes", "Remove another task without telling anyone"], answer: 1, why: "Change control checks the impact and gets approval before any change." },
          { objective: "O5", q: "Which situation fits a hybrid approach?", options: ["A new restaurant with a fixed opening date plus a new ordering website built in sprints", "Paving a road with a fixed design", "Answering phones every day", "Painting one room"], answer: 0, why: "Hybrid mixes a predictive plan for fixed parts with Agile for the parts that will change." },
          { objective: "O6", q: "How is the CAPM different from the PMP?", options: ["The CAPM is granted by your state", "There is no difference", "The PMP is for beginners", "The CAPM is entry-level and does not require years of project experience"], answer: 3, why: "The CAPM is PMI's entry-level credential; the PMP is for experienced project managers." },
          { objective: "O6", q: "Someone online sells \"the real CAPM exam questions\". What do you do?", options: ["Buy them to pass faster", "Share them with your study group", "Refuse: it breaks PMI's rules and can cost you the credential", "Use them only once"], answer: 2, why: "Using leaked exam content breaks PMI's rules; study from the outline and honest practice tests." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Project Management Basics (CAPM Preparation)",
    questions: [
      { objective: "O1", q: "Which is ongoing operations, not a project?", options: ["Building a new website", "Processing customer orders every day", "Moving an office to a new city", "Organizing a one-time job fair"], answer: 1, why: "Daily order processing repeats; the others are temporary with a unique result." },
      { objective: "O1", q: "Which three constraints are the classic triple constraint?", options: ["Paper, pens and printers", "Sponsor, team and customer", "Risk, issue and change", "Scope, schedule and cost"], answer: 3, why: "Scope, schedule and cost are the classic three, and they affect each other." },
      { objective: "O1", q: "In which phase do you hand over the result and record lessons learned?", options: ["Closing", "Starting", "Planning", "Doing the work"], answer: 0, why: "Closing hands over the result and captures lessons for next time." },
      { objective: "O2", q: "Who approves and funds the project?", options: ["The newest team member", "Every stakeholder equally", "The sponsor", "The supplier"], answer: 2, why: "The sponsor approves, funds and supports the project." },
      { objective: "O2", q: "Which belongs in a project charter?", options: ["A goal with a measure and a date, plus scope in and out", "Every team member's lunch order", "The detailed daily task list", "Last year's tax return"], answer: 0, why: "The charter gives the purpose, a measurable goal, scope, deadline, budget and sponsor." },
      { objective: "O2", q: "A city council member has high influence and high interest in your community garden. How do you treat them?", options: ["Keep them informed with a yearly note", "Check in now and then", "Leave them off the list", "Manage them closely"], answer: 3, why: "High influence, high interest stakeholders are managed closely." },
      { objective: "O3", q: "What is the purpose of a work breakdown structure?", options: ["To list the project's risks", "To split the deliverables into smaller pieces you can estimate and assign", "To approve changes", "To pay the team"], answer: 1, why: "The WBS breaks the whole project down into work packages." },
      { objective: "O3", q: "What is the critical path?", options: ["The shortest chain of tasks", "The tasks the sponsor likes most", "The longest chain of linked tasks, which sets the earliest finish", "The list of risks"], answer: 2, why: "The longest path sets the shortest possible project length." },
      { objective: "O3", q: "Paths: A-B-E = 10 days, A-C-E = 7 days, A-D-E = 9 days. What is the float on path A-D-E?", options: ["0 days", "3 days", "9 days", "1 day"], answer: 3, why: "The critical path is 10 days, so A-D-E can slip 10 - 9 = 1 day." },
      { objective: "O3", q: "A task on the critical path is delayed 2 days. What happens?", options: ["The project finish moves 2 days later unless you recover time", "Nothing, because it has float", "Only the budget changes", "The task leaves the WBS"], answer: 0, why: "Critical path tasks have zero float, so their delay moves the finish." },
      { objective: "O4", q: "What is the difference between a risk and an issue?", options: ["There is none", "An issue might happen; a risk is happening now", "A risk might happen; an issue is happening now", "Risks are only about money"], answer: 2, why: "A risk is uncertain and in the future; an issue is a current problem." },
      { objective: "O4", q: "You buy event insurance in case the venue cancels. Which response is this?", options: ["Avoid", "Transfer", "Accept", "Mitigate"], answer: 1, why: "Insurance moves the money impact to someone else, which is transfer." },
      { objective: "O4", q: "What is scope creep?", options: ["A schedule tool", "A way to score risks", "A type of stakeholder", "Work added to the project without approval"], answer: 3, why: "Scope creep is unapproved added work; change control stops it." },
      { objective: "O5", q: "Requirements are clear and stable, and late changes are very costly. Which approach fits?", options: ["Predictive", "Agile", "No plan", "Change every week"], answer: 0, why: "Clear, stable needs and costly changes fit a plan-based approach." },
      { objective: "O5", q: "What is business analysis?", options: ["Counting the money at the end", "Choosing the team's lunch", "Finding, writing and checking what the customer truly needs", "Signing the charter"], answer: 2, why: "Business analysis works out the real requirements." },
      { objective: "O5", q: "A nonprofit is building a new volunteer app and expects feedback to change the features. Which approach fits best?", options: ["Predictive, with all features fixed now", "Agile, delivering small pieces with feedback", "No approach", "Build it all and show it only at the end"], answer: 1, why: "Changing needs fit Agile's short cycles and feedback." },
      { objective: "O6", q: "What does this course give you toward the CAPM?", options: ["The CAPM credential itself", "A guaranteed pass", "A PMI membership", "Preparation in the core ideas; only PMI grants the CAPM"], answer: 3, why: "The course prepares you; PMI alone grants the credential." },
      { objective: "O6", q: "Which official document lists the topics the CAPM exam covers?", options: ["PMI's Exam Content Outline", "A forum post", "Your job description", "A social media ad"], answer: 0, why: "PMI publishes the Exam Content Outline for each exam." },
      { objective: "O6", q: "A veteran wants help paying for the CAPM exam fee. Where should they check?", options: ["A practice-test seller", "Their bank", "VA's licensing and certification test-fee page and the GI Bill Comparison Tool", "A random forum"], answer: 2, why: "The GI Bill may repay approved certification test fees; VA's pages explain how." },
      { objective: "O6", q: "What is the best way to plan for the CAPM exam?", options: ["Study whenever you remember", "Treat it as a project: charter, WBS by topic, dated schedule and risk register", "Buy real exam questions", "Take the test without checking eligibility"], answer: 1, why: "A dated plan built from PMI's official outline is the reliable route." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Pre-Test: What Do You Already Know?", from: [0, 3, 6, 8, 10, 13, 16, 18] },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and resubmit.",
    criteria: [
      { name: "Charter", objective: "O2", notYet: "The goal is vague or has no date, or scope in and out is missing.", meets: "One page with purpose, a goal with a number and a date, scope in and out, sponsor and milestones.", exceeds: "Also lists stakeholders with influence and interest and how each will be kept informed." },
      { name: "WBS and schedule", objective: "O3", notYet: "Tasks are listed with no breakdown, durations or dependencies.", meets: "A WBS with at least two levels and a dated schedule with milestones, dependencies and the critical path marked.", exceeds: "Shows the float on non-critical tasks and the critical path length is calculated correctly." },
      { name: "Risk register", objective: "O4", notYet: "Fewer than three risks, or risks with no response or owner.", meets: "At least three risks, each with probability, impact, score, a response and one owner.", exceeds: "Uses more than one type of response and includes a change-control note for how the plan will be changed." },
      { name: "Approach", objective: "O5", notYet: "No approach chosen, or no reason given.", meets: "Names predictive, Agile or hybrid for the study plan and gives two reasons.", exceeds: "Shows how the approach is used, for example weekly study cycles with a review." },
      { name: "Official CAPM rules checked", objective: "O6", notYet: "Fees, hours or exam topics copied from an unofficial source or left out.", meets: "Lists eligibility, education hours, fee and exam topics from PMI's pages, with the page names.", exceeds: "Also lists help with costs (for example GI Bill or employer support) and a local PMI chapter or study group." }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who apply for the CAPM or finish PMI's required education within 90 days (follow-up survey)",
      "Learners who pass the CAPM or are hired or promoted into a project coordinator, assistant or team-lead role",
      "Learners who report using a charter, schedule or risk register at work or in their community within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Paper and pen, or a free spreadsheet (Google Sheets or Excel online)",
      "Internet access to read PMI's CAPM page, handbook and Exam Content Outline on pmi.org",
      "A small real project to plan (family, work, church, community or military unit)",
      "About 75 to 90 minutes in total, in short sessions, plus time for the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; work the critical path example on a whiteboard before learners do their own.",
      "Let learners use a project from their own life; veterans can map a mission plan onto the charter, WBS and risk register.",
      "Open pmi.org together in the last session so learners see the current eligibility, fees and Exam Content Outline; do not quote numbers from memory.",
      "Make clear the course prepares learners and does not grant the CAPM; tell them to check with PMI whether it counts toward the required education hours.",
      "Warn against sellers of real exam questions or guaranteed passes, and score the final task with the rubric."
    ]
  }
};
