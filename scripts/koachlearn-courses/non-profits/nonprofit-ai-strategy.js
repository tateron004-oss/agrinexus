"use strict";

// Koach Learn course: Non Profits -> "Building an AI Strategy for Your Nonprofit". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a
// knowledge check closes each chapter; a 20-question quiz closes the course. Model: scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-strategy",
  category: "Non Profits",
  name: "Building an AI Strategy for Your Nonprofit",
  skills: "Finding the right tasks for AI, Ranking ideas by value and risk, Writing an AI use policy, Planning a small pilot, Measuring results and reporting to the board",
  outcome: "write a one-page AI plan for your nonprofit that names three tasks AI will help with, the rules staff and volunteers must follow, a 30-day pilot with one owner, and how you will measure whether it worked.",
  about: [
    "This course is for executive directors, pastors, board members, program managers and volunteer leaders who want to use AI on purpose instead of by accident.",
    "You will map where your team's time goes, choose the tasks where AI helps most with the least risk, write simple rules that protect donors and the people you serve, and plan a small test you can report to your board.",
    "Each lesson takes about five minutes and ends with a task that builds one part of your plan. By Lesson 6 you will have a complete one-page AI plan. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page AI plan for your organization with five parts: (1) your mission in one sentence, (2) three tasks AI will help with, ranked by value and risk, (3) at least five rules for using AI, including privacy rules, (4) a 30-day pilot with one owner, one tool and a start date, and (5) two measures you will report to your board.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Executive directors, pastors, board members, program managers and volunteer leaders of nonprofits and faith-based organizations who want to use AI on purpose instead of by accident.",
    startingPoint: "Lead teams and know their mission and programs well. Some staff and volunteers already use AI tools on their own, but the organization has no shared plan or rules.",
    gap: "Without a plan, AI use is scattered: it may put donor or client information at risk, or miss the tasks where it would help the mission most. Leaders need a one-page plan that picks the right tasks, sets rules, tests safely and reports results to the board.",
    constraints: [
      "Small budgets: prefer AI already built into tools the organization has",
      "Leaders' limited time, so lessons are about 5 minutes each",
      "Privacy: donor, volunteer and client information stays out of AI; extra laws may apply to health, children's or legal information",
      "AI never decides who receives services, who is hired or who is turned away",
      "Board approval and oversight"
    ],
    prerequisites: "\"Introduction to AI for Nonprofits\", or some experience using an AI assistant."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your organization's mission", action: "explain to your board or leadership why your organization needs a simple AI plan", standard: "starting from the mission, not the tool" },
    { id: "O2", condition: "After asking staff and volunteers what eats their week", action: "list your repeating tasks and identify which ones AI could help with and which stay with people", standard: "keeping every decision about people with people" },
    { id: "O3", condition: "Given your list of AI-friendly tasks", action: "score each task from 1 to 3 for value and risk and choose the top three", standard: "putting high-value, low-risk tasks first" },
    { id: "O4", condition: "For your staff and volunteers", action: "write at least five clear rules for using AI, including privacy rules", standard: "short enough to fit on one page and simple enough for a new volunteer" },
    { id: "O5", condition: "Given one of your top three tasks", action: "plan a 30-day pilot with one tool, one owner, a start date and a baseline", standard: "with the baseline measured before you start" },
    { id: "O6", condition: "At the end of the pilot", action: "compare two measures with the baseline and write a five-sentence board update", standard: "with a clear decision to keep, change or stop" }
  ],
  chapters: [
    {
      name: "Chapter 1: Choosing where AI helps",
      lessons: [
        {
          objectives: ["O1"],
          title: "Why a nonprofit needs an AI plan",
          minutes: 4,
          goal: "Explain to your board or leadership why your organization needs a simple AI plan.",
          text: [
            "Your staff and volunteers may already be using AI tools on their own, with no shared rules. That can save time, but it can also put donor or client information at risk or produce writing that does not sound like you.",
            "An AI plan is a short document that says what AI is for in your organization, what it is not for, who decides, and how you will check that it helps your mission.",
            "A good plan starts with the mission, not the tool. The question is not \"Which AI should we buy?\" but \"Where does our team lose time that could go back to the people we serve?\""
          ],
          words: [["AI plan", "a short document saying how your organization will and will not use AI."], ["Mission", "the purpose your organization exists to serve."], ["Stakeholder", "anyone affected by your work: clients, donors, volunteers, staff, board."]],
          slides: [
            { title: "Why plan?", bullets: ["People may already use AI with no rules", "Privacy and trust are at stake", "A plan turns scattered use into real help"] },
            { title: "An AI plan says", bullets: ["What AI is for, and not for", "Who decides", "How you will check it helps"] },
            { title: "Start with the mission", bullets: ["Not \"Which tool?\"", "But \"Where do we lose time?\"", "Give that time back to the people you serve"] }
          ],
          tryIt: "Write your mission in one sentence at the top of a blank page titled \"Our AI Plan\". Under it, write one sentence on why your organization needs a plan now.",
          youCanNow: "explain why a nonprofit needs an AI plan and start one from your mission.",
          quickCheck: [
            { objective: "O1", q: "What does an AI plan say?", options: ["What AI is for, what it is not for, who decides and how you will check it helps", "Which AI company to invest in", "Every staff member's password", "Only the price of AI tools"], answer: 0, why: "A plan says what AI is for and not for, who decides and how you check it helps the mission." },
            { objective: "O1", q: "A board member asks, \"Which AI should we buy?\" How do you answer?", options: ["Buy the most popular one", "Start by asking where our team loses time that could go back to the people we serve", "Buy every tool and see", "Wait until other groups decide"], answer: 1, why: "A good plan starts with the mission, not the tool." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mapping where your team's time goes",
          minutes: 5,
          goal: "List your organization's repeating tasks and spot the ones AI could help with.",
          text: [
            "AI helps most with tasks that repeat, involve a lot of writing or sorting, and follow a pattern. Examples: weekly volunteer reminders, donor thank-you letters, newsletter drafts, meeting notes, grant report summaries, and answering the same questions from the public.",
            "AI should not make decisions about people: who gets services, who is hired, or who is turned away. Those need human judgment, fairness and care.",
            "Ask three or four people on your team, including a volunteer, what tasks eat their week. You will be surprised what you learn."
          ],
          steps: ["List ten tasks your team does every week or month.", "Next to each, write roughly how many hours it takes.", "Mark tasks that repeat and involve writing, sorting or summarizing.", "Cross out tasks that decide something about a person."],
          words: [["Repeating task", "work done the same way again and again, like weekly reminders."], ["Human judgment", "decisions a person makes using care, fairness and knowledge of the situation."]],
          slides: [
            { title: "Good AI tasks", bullets: ["Repeat often", "Lots of writing, sorting or summarizing", "Follow a pattern"] },
            { title: "Nonprofit examples", bullets: ["Volunteer reminders and donor thank-yous", "Newsletter drafts and meeting notes", "Answers to common public questions"] },
            { title: "Keep with people", bullets: ["Who gets services", "Who is hired or turned away", "Anything needing care and fairness"] }
          ],
          tryIt: "Make the ten-task list with hours for your organization. Mark the AI-friendly ones and cross out any that decide about people.",
          youCanNow: "map your team's repeating work and pick out tasks that suit AI.",
          quickCheck: [
            { objective: "O2", q: "Which kind of task does AI help with most?", options: ["Decisions about who gets services", "Hiring choices", "Tasks that repeat, involve writing or sorting, and follow a pattern", "Pastoral care conversations"], answer: 2, why: "AI helps most with repeating, pattern-based writing and sorting tasks." },
            { objective: "O2", q: "Someone suggests using AI to decide which families join the food program. What do you say?", options: ["Yes, it is faster", "Yes, if the AI explains itself", "Only for new families", "No; decisions about people need human judgment"], answer: 3, why: "AI should not make decisions about who gets services." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ranking ideas by value and risk",
          minutes: 5,
          goal: "Rank your AI ideas and choose the top three to start with.",
          text: [
            "For each AI-friendly task, ask two questions. Value: how much time or quality would we gain? Risk: what could go wrong, and how bad would it be?",
            "Low-risk, high-value tasks come first, for example drafting volunteer reminders from public event details. High-risk tasks, like anything with client case notes or health details, wait until you have strong rules and an approved, secure tool, or stay off the list.",
            "Score each from 1 (low) to 3 (high). Start with high value and low risk. Three good tasks are better than ten half-done ones."
          ],
          steps: ["Give each task a value score from 1 to 3.", "Give each task a risk score from 1 to 3.", "Sort: high value and low risk first.", "Pick your top three."],
          words: [["Value", "how much time, money or quality a change would gain."], ["Risk", "what could go wrong and how much harm it would cause."]],
          slides: [
            { title: "Two questions per task", bullets: ["Value: what do we gain?", "Risk: what could go wrong?"] },
            { title: "Score 1 to 3", bullets: ["High value + low risk = start here", "High risk = wait for rules or skip"] },
            { title: "Examples", bullets: ["Low risk: volunteer reminders from public event info", "High risk: anything with client case notes"] },
            { title: "Pick three", bullets: ["Three done well beats ten half-done"] }
          ],
          tryIt: "Score your marked tasks for value and risk. Write your top three under a heading \"Where AI will help\" in your plan.",
          youCanNow: "rank AI ideas by value and risk and choose three to start with.",
          quickCheck: [
            { objective: "O3", q: "In this lesson, what scale do you use to score value and risk?", options: ["1 (low) to 3 (high)", "1 to 100", "Yes or no only", "A to F"], answer: 0, why: "Score each from 1 (low) to 3 (high)." },
            { objective: "O3", q: "You have ten AI ideas. What do you do?", options: ["Start all ten at once", "Pick about three with high value and low risk", "Pick the three riskiest", "Let each staff member pick one"], answer: 1, why: "Three good tasks are better than ten half-done ones." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing where AI helps",
        questions: [
          { objective: "O1", q: "What should a nonprofit AI plan start from?", options: ["The mission", "The newest tool", "The cheapest price", "A competitor's website"], answer: 0, why: "A plan starts with the mission and where time could go back to the people you serve." },
          { objective: "O2", q: "Which task is the best fit for AI?", options: ["Deciding who receives food aid", "Drafting weekly volunteer reminders", "Choosing which staff to hire", "Turning away a client"], answer: 1, why: "Repeating writing tasks fit AI; decisions about people stay with people." },
          { objective: "O3", q: "A task scores high value and low risk. What do you do?", options: ["Skip it", "Wait five years", "Put it near the top of your list", "Give it to the board to write"], answer: 2, why: "High value and low risk tasks come first." },
          { objective: "O3", q: "A task involves client health details. How should you rank it?", options: ["Lowest risk", "Do it first", "Post it publicly", "High risk: wait for strong rules and a secure tool, or skip"], answer: 3, why: "Sensitive client data is high risk." },
          { objective: "O2", q: "Why ask volunteers and staff what eats their week?", options: ["To find real repeating tasks", "To assign blame", "To cut volunteers", "It is required by law"], answer: 0, why: "The people doing the work know where time goes." }
        ]
      }
    },
    {
      name: "Chapter 2: Rules, pilot and results",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing simple AI rules",
          minutes: 5,
          goal: "Write at least five clear rules for how your staff and volunteers use AI.",
          text: [
            "Rules make AI safe to use. Keep them short enough to fit on one page and simple enough for a new volunteer to follow.",
            "Core rules most nonprofits need: use only approved tools; never paste donor, volunteer or client private information; a person reviews everything before it is sent or published; check every fact and number; be honest when AI helped where it matters; and AI never decides who receives services.",
            "Faith-based groups may add a rule about sermons, prayers or pastoral care staying personal. Ask a lawyer or your insurer if you handle health, children's or legal information, because extra laws can apply."
          ],
          steps: ["List the approved AI tools.", "Write the privacy rule: what never goes into AI.", "Write the review rule: who checks before anything goes out.", "Write the decisions rule: AI never decides about people.", "Add any rules your mission needs."],
          words: [["AI use policy", "written rules for how people in your organization may use AI."], ["Approved tool", "an AI tool your leaders have checked and allowed."]],
          slides: [
            { title: "Keep rules short", bullets: ["One page", "Simple enough for a new volunteer"] },
            { title: "Core rules", bullets: ["Approved tools only", "No private donor or client information", "A person reviews before it goes out", "Check every fact and number"] },
            { title: "More rules", bullets: ["AI never decides who gets services", "Be honest when AI helped", "Add rules your mission needs"] },
            { title: "Get advice", bullets: ["Health, children's or legal data: ask a lawyer or insurer"] }
          ],
          tryIt: "Write at least five rules under a heading \"Our AI rules\" in your plan. Read them to one volunteer and ask if anything is unclear.",
          youCanNow: "write a simple AI use policy your team can follow.",
          quickCheck: [
            { objective: "O4", q: "How long should your AI rules be?", options: ["At least 20 pages", "Only spoken, never written", "Short enough to fit on one page", "As long as the bylaws"], answer: 2, why: "Keep rules short enough for one page and simple for a new volunteer." },
            { objective: "O4", q: "Your church wants a rule about prayers and sermons. What could it say?", options: ["AI writes all sermons", "AI chooses who gets prayer visits", "Nothing; churches need no rules", "Sermons, prayers and pastoral care stay personal"], answer: 3, why: "Faith-based groups may add a rule that these stay personal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planning a 30-day pilot",
          minutes: 5,
          goal: "Plan a small, 30-day test of AI on one task with one owner.",
          text: [
            "A pilot is a small test before you change everything. Pick one of your top three tasks, one tool, one person in charge, and 30 days.",
            "Before you start, measure how things work today. If volunteer reminders take 3 hours a week, write that down. That is your starting point, or baseline.",
            "Keep notes during the pilot: time spent, problems, and what people said. Use a tool your organization already has if you can, such as the AI built into Microsoft 365 or Google Workspace, so you do not add cost."
          ],
          steps: ["Choose one task from your top three.", "Choose one approved tool and one owner.", "Write down the baseline: how long it takes today.", "Set a start date and an end date 30 days later.", "Keep simple weekly notes."],
          words: [["Pilot", "a small, short test before a bigger change."], ["Baseline", "how something works today, measured before you change it."], ["Owner", "the one person responsible for the pilot."]],
          slides: [
            { title: "A pilot is a small test", bullets: ["One task, one tool, one owner", "30 days"] },
            { title: "Measure first", bullets: ["Baseline: how long it takes today", "Example: reminders take 3 hours a week"] },
            { title: "During the pilot", bullets: ["Note time spent", "Note problems", "Note what people said"] }
          ],
          tryIt: "Under \"Our 30-day pilot\", write the task, tool, owner, start date, end date and baseline.",
          youCanNow: "plan a 30-day AI pilot with a clear owner and baseline.",
          quickCheck: [
            { objective: "O5", q: "What notes do you keep during a pilot?", options: ["Time spent, problems and what people said", "Only the start date", "Donors' gift amounts", "Nothing until the end"], answer: 0, why: "Keep notes on time spent, problems and what people said." },
            { objective: "O5", q: "You want to start a pilot on newsletter drafts next week. What do you do first?", options: ["Buy a new AI tool", "Write down how long newsletters take today", "Start without telling anyone", "Plan five tasks at once"], answer: 1, why: "Measure how things work today first; that is your baseline." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Measuring results and reporting to your board",
          minutes: 5,
          goal: "Choose two measures and report pilot results in a short board update.",
          text: [
            "Pick two measures: one for time or cost (hours saved per week) and one for quality (fewer errors, more volunteer sign-ups, faster replies to the public, or what readers said).",
            "At the end, compare to your baseline. Then decide: keep it, change it, or stop it. Stopping is a fine result; you learned something cheaply.",
            "Report to your board in five sentences: what you tested, what changed, any problems, whether rules were followed, and what you recommend next. Boards care about mission, money, risk and trust."
          ],
          steps: ["Choose one time measure and one quality measure.", "Compare the end of the pilot to your baseline.", "Decide: keep, change or stop.", "Write a five-sentence board update."],
          words: [["Measure", "a number or sign you track to see if something worked."], ["Board", "the group of people who govern a nonprofit and oversee its leaders."]],
          slides: [
            { title: "Two measures", bullets: ["Time: hours saved each week", "Quality: errors, sign-ups, replies, feedback"] },
            { title: "Decide", bullets: ["Keep it", "Change it", "Stop it: still a useful result"] },
            { title: "Five-sentence board update", bullets: ["What we tested and what changed", "Problems and whether rules were followed", "What we recommend next"] }
          ],
          tryIt: "Final task: finish your one-page AI plan. Add two measures, then put together all five parts: mission, three tasks, rules, the 30-day pilot and the measures you will report to your board.",
          youCanNow: "write a complete one-page AI plan and report results to your board.",
          quickCheck: [
            { objective: "O6", q: "Which is a time or cost measure?", options: ["What readers said", "Fewer errors", "Hours saved per week", "More volunteer sign-ups"], answer: 2, why: "Hours saved per week measures time; the others measure quality." },
            { objective: "O6", q: "The pilot saved time but staff broke a privacy rule once. What goes in the board update?", options: ["Only the time saved", "Nothing; it was a small mistake", "A request for more money only", "The results, the problem, whether rules were followed and what you recommend next"], answer: 3, why: "The update covers what you tested, what changed, problems, rules followed and next steps." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Rules, pilot and results",
        questions: [
          { objective: "O4", q: "Which is a core AI rule for a nonprofit?", options: ["Paste client files for better answers", "A person reviews everything before it goes out", "AI chooses who gets services", "Any tool is fine"], answer: 1, why: "Human review protects quality and trust." },
          { objective: "O5", q: "What is a baseline?", options: ["The final score", "A type of AI", "How the task works today, before the change", "The board's budget"], answer: 2, why: "You compare results to the baseline." },
          { objective: "O5", q: "How big should a first pilot be?", options: ["Every task at once", "No time limit", "The whole board", "One task, one tool, one owner, 30 days"], answer: 3, why: "A small test teaches you cheaply and safely." },
          { objective: "O6", q: "The pilot did not save time. What is a good decision?", options: ["Stop or change it; you learned something", "Hide the results", "Force everyone to use it", "Blame the volunteers"], answer: 0, why: "Stopping is a fine, honest result." },
          { objective: "O4", q: "Your nonprofit handles children's information. What should you add?", options: ["Nothing", "Advice from a lawyer or insurer about extra rules", "Paste it into AI", "Share it publicly"], answer: 1, why: "Extra laws can apply to children's, health and legal information." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building an AI Strategy for Your Nonprofit",
    questions: [
      { objective: "O1", q: "An AI plan for a nonprofit is:", options: ["A software purchase", "A fundraising event", "A short document on how you will and will not use AI", "A list of donors"], answer: 2, why: "It sets purpose, rules and checks for AI use." },
      { objective: "O1", q: "The best first question for an AI plan is:", options: ["Which tool is most famous?", "How do we replace volunteers?", "What do other groups pay?", "Where does our team lose time we could give back to our mission?"], answer: 3, why: "Start with mission and time, not tools." },
      { objective: "O1", q: "Why is having no AI plan risky?", options: ["People may use AI with no privacy rules", "AI is illegal", "Donors require AI", "It is not risky"], answer: 0, why: "Unplanned use can expose private information." },
      { objective: "O2", q: "Which task suits AI?", options: ["Deciding who is evicted from housing", "Summarizing a long grant report", "Hiring a new pastor", "Signing a lease"], answer: 1, why: "Summarizing is a pattern task; the others are human decisions." },
      { objective: "O2", q: "Which should stay with people?", options: ["Drafting reminders", "Formatting a newsletter", "Deciding who receives services", "Listing meeting topics"], answer: 2, why: "Decisions about people need human judgment." },
      { objective: "O2", q: "When mapping time, you should:", options: ["Guess one task", "Ask only the board", "Skip volunteers", "List tasks and the hours they take"], answer: 3, why: "Hours show where AI could help most." },
      { objective: "O3", q: "Which pair of scores do you use to rank ideas?", options: ["Value and risk", "Color and size", "Price and brand", "Age and height"], answer: 0, why: "High value and low risk come first." },
      { objective: "O3", q: "How many tasks should you start with?", options: ["Every task", "About three", "None", "Fifty"], answer: 1, why: "Three done well beats ten half-done." },
      { objective: "O3", q: "Which task is lowest risk?", options: ["Summarizing client case notes", "Analyzing donors' bank data", "Volunteer reminders from public event details", "Writing medical advice"], answer: 2, why: "It uses only public information." },
      { objective: "O4", q: "An AI use policy should be:", options: ["Fifty pages long", "Secret", "Written only in legal terms", "Short and simple enough for a new volunteer"], answer: 3, why: "Simple rules get followed." },
      { objective: "O4", q: "Which is a privacy rule?", options: ["Never paste donor or client private information into AI", "Use any tool you like", "Share passwords to save time", "Post client stories with names"], answer: 0, why: "Protecting private information keeps trust." },
      { objective: "O4", q: "What does \"approved tool\" mean?", options: ["Any free tool", "A tool your leaders checked and allowed", "A tool with ads", "A tool a donor likes"], answer: 1, why: "Leaders check approved tools for safety." },
      { objective: "O5", q: "A pilot is:", options: ["A full rollout", "A grant", "A small, short test before a bigger change", "A board election"], answer: 2, why: "Pilots test cheaply first." },
      { objective: "O5", q: "Why measure the baseline before a pilot?", options: ["To slow things down", "Because donors ask", "It is not needed", "So you can compare results afterwards"], answer: 3, why: "Without a baseline you cannot tell if it helped." },
      { objective: "O5", q: "Each pilot needs:", options: ["One owner who is responsible", "No one in charge", "Every staff member in charge", "Only the AI"], answer: 0, why: "One owner keeps it on track." },
      { objective: "O5", q: "Why use AI already in tools you have, like Microsoft 365 or Google Workspace?", options: ["It is always perfect", "It can avoid adding cost", "It shares data with donors", "It is required"], answer: 1, why: "Using what you already have keeps costs down." },
      { objective: "O6", q: "Which is a quality measure?", options: ["The tool's logo color", "The number of AI apps installed", "More volunteers signing up after reminders", "How long the policy is"], answer: 2, why: "Quality measures show whether the work got better." },
      { objective: "O6", q: "After the pilot, your three choices are:", options: ["Hide it, ignore it or deny it", "Buy more tools", "Fire the owner", "Keep it, change it or stop it"], answer: 3, why: "Decide based on the measures." },
      { objective: "O6", q: "A good board update is:", options: ["About five clear sentences on results, risks and next steps", "A 40-page technical report", "Nothing", "Only the cost of the tool"], answer: 0, why: "Boards need a short, clear picture." },
      { objective: "O6", q: "Boards mostly care about:", options: ["Which AI has the best logo", "Mission, money, risk and trust", "How many prompts were typed", "Social media likes only"], answer: 1, why: "These are the board's core duties." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      6,
      10,
      12,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Mission first",
        objective: "O1",
        notYet: "No mission sentence, or the plan starts from a tool.",
        meets: "The mission in one sentence opens the plan.",
        exceeds: "Each chosen task says how it gives time back to the mission."
      },
      {
        name: "Three ranked tasks",
        objective: "O3",
        notYet: "Tasks are not ranked, or a high-risk task is first.",
        meets: "Three tasks scored for value and risk, high value and low risk first.",
        exceeds: "Notes which tasks were left off and why."
      },
      {
        name: "Clear AI rules",
        objective: "O4",
        notYet: "Fewer than five rules, or no privacy rule.",
        meets: "At least five short rules, including privacy, approved tools and human review.",
        exceeds: "Adds rules for the organization's special risks, such as children's information."
      },
      {
        name: "30-day pilot",
        objective: "O5",
        notYet: "No owner, tool or start date.",
        meets: "One task, one tool, one owner, a start date and a measured baseline.",
        exceeds: "Uses a tool the organization already has, with a note on cost."
      },
      {
        name: "Measures for the board",
        objective: "O6",
        notYet: "No measures, or measures cannot be compared with the baseline.",
        meets: "One time or cost measure and one quality measure.",
        exceeds: "Includes a draft of the five-sentence board update."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Organizations whose board approves a written AI plan within 60 days (follow-up survey)",
      "Organizations that complete a 30-day pilot and report hours saved",
      "Learners who start another Koach Learn nonprofit course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet and a word processor",
      "Your mission statement and a list of the team's weekly tasks",
      "A free AI assistant or the one your organization already has, for drafting",
      "About 60 minutes in total, plus time to talk with staff and volunteers"
    ],
    facilitatorNotes: [
      "Works best with two or three leaders from the same organization writing one plan together.",
      "Before the session, ask learners to collect what eats their team's week from staff and a volunteer.",
      "Point learners to a lawyer or insurer when they handle health, children's or legal information.",
      "Have learners practice reading the five-sentence board update out loud.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
