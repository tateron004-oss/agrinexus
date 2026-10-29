"use strict";

// Koach Learn course (shared): "AI in Business: Strategies and Applications" (also AI Foundations for Business, AI for Business Leaders). Categories: Small Business, Non Profits, Youth, Veterans (military), Workforce Development.
// Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-in-business",
  category: "Small Business",
  name: "AI in Business: Strategies and Applications",
  skills: "Spotting AI opportunities, Matching tasks to AI tools, Scoring value and risk, Writing a one-page business case, Running a small pilot, Measuring results",
  outcome: "find the best place to use AI in a business or organization, score it for value and risk, write a one-page business case, and run and measure a small two-week pilot.",
  about: [
    "AI is now part of everyday business: writing, customer service, scheduling, sales, bookkeeping and planning. The hard part is not the tool. It is choosing the right job for it and proving it helps.",
    "This course is for small business owners, nonprofit leaders, managers, young entrepreneurs and anyone who wants to bring AI into their workplace in a smart, safe way. Examples include a hair salon, a food pantry, a landscaping crew and a student-run shop.",
    "You will map where time goes in an organization, pick the best AI opportunity, make the case for it, and test it with a small pilot. Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "For a real or practice organization, write a one-page AI business case: the task, the AI tool, the expected time or money saved, the risks and how you will control them, and what success looks like. Then run a two-week pilot (or a one-day practice version), record before-and-after numbers, and write a three-sentence recommendation: expand, change or stop.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners, managers and staff, and leaders of nonprofits and community organizations who want to use AI to save time or serve customers better.",
    startingPoint: "Know their business or organization well and may have tried an AI assistant. Few have measured where staff time goes, weighed AI risks, or tested a new tool in a planned way.",
    gap: "Many owners either avoid AI or try it at random and give up. Learners need a simple, repeatable way to pick the right task, weigh value and risk, win support with a short business case, and prove results with a small pilot, so AI saves real time without risking customers' data or trust.",
    constraints: [
      "Reading level: plain business words; no technical background needed",
      "Devices: a phone or computer; a spreadsheet helps for the time audit",
      "Time: 5 minute lessons, plus a two-week pilot or a one-day practice version",
      "Privacy: no customer, employee or donor private details, passwords or bank numbers in AI tools",
      "No legal, medical or tax decisions handed to AI; a person checks and decides"
    ],
    prerequisites: "None. Learners new to AI assistants can take an introduction to AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of business tasks", action: "identify which ones today's AI tools handle well and which need a person to check or decide", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "For a real or practice organization", action: "list the repeated tasks in a normal week and calculate the hours each one takes", standard: "with the top five tasks by hours circled" },
    { id: "O3", condition: "Given your top AI candidates", action: "score each one on value, effort and risk and choose one to pursue first", standard: "noting any private data involved" },
    { id: "O4", condition: "For the task you chose", action: "write a one-page AI business case", standard: "with all six parts and real numbers from your time audit" },
    { id: "O5", condition: "For a small AI pilot", action: "plan and run the pilot with a baseline, clear rules and a daily log", standard: "recording the same numbers before and after" },
    { id: "O6", condition: "Given your baseline and pilot numbers", action: "compare the results and recommend expand, change or stop", standard: "counting time spent fixing AI mistakes, in three sentences" }
  ],
  chapters: [
    {
      name: "Chapter 1: Finding the right AI opportunity",
      lessons: [
        {
          objectives: ["O1"],
          title: "What AI does well in business today",
          minutes: 5,
          goal: "Name the kinds of business work today's AI tools handle well and poorly.",
          text: [
            "Most business AI today is generative AI: tools like ChatGPT, Microsoft Copilot and Google Gemini that write, summarize, sort and answer in plain language. Other AI is built into software you may already use, such as email filters, sales forecasts and fraud alerts.",
            "AI is strong at first drafts (emails, posts, proposals), summaries (meetings, long documents, reviews), sorting and tagging (customer questions, receipts), brainstorming, and answering common questions from your own information.",
            "AI is weak at exact facts it was not given, final decisions about people or money, anything needing a license (legal, medical, tax advice), and situations where a mistake is costly and hard to catch. In those, a person must check or decide."
          ],
          words: [["Generative AI", "AI that creates text, images or other content from a request."], ["Use case", "a specific job a tool is used for."]],
          slides: [
            { title: "AI is strong at", bullets: ["First drafts and summaries", "Sorting and tagging", "Brainstorming and common questions"] },
            { title: "AI is weak at", bullets: ["Exact facts it was not given", "Final decisions about people or money", "Licensed advice: legal, medical, tax"] },
            { title: "Rule of thumb", bullets: ["AI drafts; people decide", "The costlier the mistake, the more checking"] }
          ],
          tryIt: "List five tasks in a business or organization you know. Mark each one \"AI strong\", \"AI with checking\" or \"keep for people\", with one reason.",
          youCanNow: "tell which business tasks AI handles well and which need a person.",
          quickCheck: [
            { objective: "O1", q: "Which task is today's AI weak at?", options: ["Summarizing a long meeting", "Drafting a social post", "Giving final tax advice for your business", "Sorting customer questions by topic"], answer: 2, why: "Anything needing a license, like tax advice, needs a person or a professional." },
            { objective: "O1", q: "Your shop gets hundreds of online reviews. How could AI help first?", options: ["Summarize them to find the most common complaints", "Reply to angry customers with no one checking", "Decide which staff to let go based on reviews", "Delete the bad reviews"], answer: 0, why: "Summarizing many reviews is a strength of AI, and a person still decides what to do." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mapping where time goes",
          minutes: 5,
          goal: "Map an organization's repeated tasks and spot the best AI candidates.",
          text: [
            "The best AI opportunities hide in repeated, time-consuming work. Walk through a normal week and list tasks by department or role: sales, customer service, marketing, admin, finance, operations.",
            "For each task, estimate how often it happens and how long it takes. A task done 20 times a week for 10 minutes is over three hours a week. That is where AI pays off.",
            "Look for patterns: answering the same questions, writing similar emails, copying information between places, summarizing notes, building schedules. These are classic AI or automation candidates."
          ],
          steps: ["List the tasks done in a normal week, by role.", "Estimate how often and how long for each.", "Multiply to get hours per week.", "Circle the top five by hours.", "Mark which of those fit AI's strengths."],
          words: [["Repetitive task", "work done the same way again and again."], ["Time audit", "a list of tasks and how much time each takes."]],
          slides: [
            { title: "Look for repeated work", bullets: ["Same questions, similar emails", "Copying information between places", "Summaries and schedules"] },
            { title: "Do the math", bullets: ["How often x how long = hours per week", "20 times x 10 minutes = over 3 hours"] },
            { title: "Pick candidates", bullets: ["Top five by hours", "Match them to AI's strengths"] }
          ],
          tryIt: "Do a time audit for one role in a real or practice organization. List at least eight tasks with hours per week, and circle the top three AI candidates.",
          youCanNow: "map an organization's repeated work and spot the best AI candidates.",
          quickCheck: [
            { objective: "O2", q: "A task happens 12 times a week and takes 15 minutes each time. How many hours a week is that?", options: ["1 hour", "2 hours", "12 hours", "3 hours"], answer: 3, why: "12 times 15 minutes is 180 minutes, which is 3 hours." },
            { objective: "O2", q: "You are mapping time at a nonprofit. Which task do you look at first for AI?", options: ["A once-a-year board vote", "Writing the same thank-you email to donors every week", "Choosing the new executive director", "Signing contracts"], answer: 1, why: "Repeated, similar writing tasks are where AI pays off most." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Scoring opportunities for value and risk",
          minutes: 5,
          goal: "Score AI ideas on value, effort and risk and pick one to pursue.",
          text: [
            "Not every AI idea is worth doing first. Score each candidate from 1 to 5 on three things. Value: how much time, money or customer happiness it adds. Effort: how hard it is to set up and learn. Risk: what happens if the AI gets it wrong, and whether private data is involved.",
            "Pick a quick win: high value, low effort, low risk. Drafting replies to common customer emails, with a person reviewing them, is a classic quick win. Using AI to decide who gets hired or approved for help is high risk and not a first project.",
            "Check data and privacy early. If the task uses customer, employee, donor or health information, find out what your AI tool does with the data and whether a business version with stronger privacy is needed."
          ],
          steps: ["List your top three candidates.", "Score each 1-5 on value, effort and risk.", "Prefer high value, low effort, low risk.", "Note any private data involved.", "Choose one to pursue first."],
          words: [["Quick win", "a project that gives clear value fast with little effort and risk."], ["Risk", "the chance and cost of something going wrong."]],
          slides: [
            { title: "Score 1 to 5", bullets: ["Value: time, money, customer happiness", "Effort: setup and learning", "Risk: cost of mistakes, private data"] },
            { title: "Start with a quick win", bullets: ["High value, low effort, low risk", "Example: AI drafts replies, a person reviews"] },
            { title: "Not a first project", bullets: ["Hiring or approval decisions", "Anything with health or money decisions"] }
          ],
          tryIt: "Score your top three AI candidates for value, effort and risk in a small table. Choose one quick win and write two sentences on why.",
          youCanNow: "score AI ideas for value, effort and risk and pick a smart first project.",
          quickCheck: [
            { objective: "O3", q: "When you score an AI idea, what does \"effort\" mean?", options: ["How hard it is to set up and learn", "How much money it makes", "How many customers like it", "How private the data is"], answer: 0, why: "Effort is how hard the idea is to set up and learn." },
            { objective: "O3", q: "Two ideas have the same value. One uses health records and one uses public product facts. Which do you pick first?", options: ["The health records idea, because it is harder", "Neither; AI is never safe", "The product facts idea, because it has lower risk", "Both at once"], answer: 2, why: "With equal value, choose the lower-risk idea that does not involve private data." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding the right AI opportunity",
        questions: [
          { objective: "O1", q: "Which task is today's generative AI strongest at?", options: ["Deciding who to hire", "Giving tax advice", "Drafting a reply to a common customer email", "Signing contracts"], answer: 2, why: "First drafts are a core strength; decisions and licensed advice need people." },
          { objective: "O2", q: "A task happens 30 times a week and takes 6 minutes. How many hours a week is that?", options: ["3 hours", "30 hours", "6 hours", "Half an hour"], answer: 0, why: "30 x 6 minutes = 180 minutes = 3 hours." },
          { objective: "O3", q: "What is a quick win?", options: ["High risk, high effort", "Any project with AI in the name", "The most expensive tool", "High value, low effort, low risk"], answer: 3, why: "Quick wins prove value fast with little risk." },
          { objective: "O3", q: "Why is using AI to approve or reject job applicants a poor first project?", options: ["It is too easy", "It is high risk: mistakes hurt people and can be unfair", "AI cannot read", "It saves no time"], answer: 1, why: "Decisions about people are high risk and need careful human control." },
          { objective: "O3", q: "A task uses donor or customer data. What should you check early?", options: ["The tool's color scheme", "What the AI tool does with that data", "Nothing", "How many emojis it uses"], answer: 1, why: "Privacy must be checked before private data goes into a tool." }
        ]
      }
    },
    {
      name: "Chapter 2: Making the case and proving it",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing a one-page AI business case",
          minutes: 5,
          goal: "Write a one-page business case that a boss, board or partner can say yes to.",
          text: [
            "A business case explains why a project is worth doing. Keep it to one page so busy people read it.",
            "Include six parts: the problem (in hours or dollars), the proposed AI solution and tool, the expected benefit, the cost (subscriptions, training time), the risks and how you will control them, and how you will measure success.",
            "Use real numbers from your time audit. \"Staff spend 4 hours a week answering the same 10 questions. An AI-drafted reply library, checked by staff, could cut that to 1.5 hours, saving about 10 hours a month.\" AI can help you draft the page; you supply the facts."
          ],
          steps: ["Problem: what it costs now in time or money.", "Solution: the AI tool and how it will be used.", "Benefit: expected savings or improvement.", "Cost: money and training time.", "Risks and controls: who checks the AI's work.", "Success measure: the number you will track."],
          words: [["Business case", "a short document explaining why a project is worth doing."], ["Control", "a step that reduces risk, like a person reviewing AI output."]],
          slides: [
            { title: "Keep it to one page", bullets: ["Busy people read short documents", "Use real numbers"] },
            { title: "Six parts", bullets: ["Problem, solution, benefit", "Cost, risks and controls", "Success measure"] },
            { title: "AI drafts, you supply facts", bullets: ["Paste your audit numbers", "Check every figure in the draft"] }
          ],
          tryIt: "Write a one-page business case for your chosen quick win with all six parts. You may ask AI to tidy the wording, but check every number.",
          youCanNow: "write a short, numbers-based business case for an AI project.",
          quickCheck: [
            { objective: "O4", q: "Which part of a business case says who checks the AI's work?", options: ["The problem", "Risks and controls", "The benefit", "The cost"], answer: 1, why: "Risks and controls say what could go wrong and who checks the AI's output." },
            { objective: "O4", q: "Your boss asks why the AI project is worth it. What makes your case strongest?", options: ["A long report with no numbers", "Saying AI is the future", "A list of every AI tool you found", "Real numbers from your time audit showing hours saved"], answer: 3, why: "Real numbers from your own time audit show the expected benefit clearly." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Running a small pilot",
          minutes: 5,
          goal: "Plan and run a two-week AI pilot with clear rules and a before-and-after measure.",
          text: [
            "A pilot is a small, time-limited test. It lets you learn cheaply before spending more. Two weeks with one or two people is often enough.",
            "Measure before you start. Track the current numbers for a few days: time spent, number of tasks, errors or customer complaints. Then run the pilot and track the same numbers.",
            "Set clear rules: which tasks use AI, who checks the output, what information must never go into the tool (customer, employee or donor private details, passwords, bank numbers), and what to do if the AI gets something wrong."
          ],
          steps: ["Pick one or two people and a two-week window.", "Record the baseline numbers for a few days.", "Write simple rules: tasks, who checks, what never goes in.", "Run the pilot and keep a short daily log.", "Record the same numbers at the end."],
          words: [["Pilot", "a small, time-limited test of a new idea."], ["Baseline", "the numbers before a change, used to compare after."]],
          slides: [
            { title: "Small and time-limited", bullets: ["Two weeks, one or two people", "Learn cheaply before spending more"] },
            { title: "Measure before and after", bullets: ["Time spent, tasks done", "Errors or complaints"] },
            { title: "Pilot rules", bullets: ["Which tasks use AI and who checks", "No private details in the tool", "What to do when AI is wrong"] }
          ],
          tryIt: "Write a pilot plan for your quick win: people, dates, baseline numbers, rules and the daily log format. If you can, run a one-day practice version and record the numbers.",
          youCanNow: "plan and run a small AI pilot with rules and before-and-after numbers.",
          quickCheck: [
            { objective: "O5", q: "How long is a typical small AI pilot in this course?", options: ["One year", "Six months", "Two weeks", "One hour"], answer: 2, why: "Two weeks with one or two people is often enough to learn cheaply." },
            { objective: "O5", q: "You are about to start a pilot tomorrow. What must you do first?", options: ["Record baseline numbers for a few days", "Buy the most expensive plan", "Give the tool every customer's details", "Tell staff to stop checking AI output"], answer: 0, why: "A baseline lets you compare before and after." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Measuring results and deciding what is next",
          minutes: 5,
          goal: "Compare pilot results to the baseline and recommend expand, change or stop.",
          text: [
            "At the end of the pilot, compare. Did time go down? Did quality hold or improve? Did customers or staff notice? Numbers matter, but also ask the people who used it what helped and what got in the way.",
            "Watch for hidden costs: time spent fixing AI mistakes, staff confusion, or customers who disliked the change. A tool that saves 3 hours but causes 2 hours of fixes saves only 1.",
            "Make a clear recommendation. Expand if it worked. Change if it partly worked. Stop if it did not, and say what you learned. Stopping a pilot is not failure; it saved you from a bigger mistake."
          ],
          steps: ["Put baseline and pilot numbers side by side.", "Subtract time spent fixing AI mistakes.", "Ask the people who used it two questions: what helped, what got in the way.", "Recommend expand, change or stop, in three sentences."],
          words: [["Hidden cost", "a cost that is easy to miss, like time spent fixing mistakes."], ["Recommendation", "your advice on what to do next, with reasons."]],
          slides: [
            { title: "Compare honestly", bullets: ["Time, quality, customer reaction", "Ask the people who used it"] },
            { title: "Count hidden costs", bullets: ["Time fixing AI mistakes", "Confusion or unhappy customers"] },
            { title: "Decide", bullets: ["Expand, change or stop", "Stopping a pilot is a lesson, not a failure"] }
          ],
          tryIt: "Final task: put your before-and-after numbers in a table (real or from your practice day), subtract hidden costs, and write a three-sentence recommendation to go with your one-page business case.",
          youCanNow: "find, justify, test and judge an AI project in a business or organization.",
          quickCheck: [
            { objective: "O6", q: "Why ask the people who used the AI tool what got in the way?", options: ["To blame them", "Because numbers are never useful", "To make the pilot longer", "To find problems the numbers might not show"], answer: 3, why: "Users can name hidden costs and problems that numbers miss." },
            { objective: "O6", q: "The pilot saved time but customers complained about the new replies. What do you recommend?", options: ["Expand it to everyone right away", "Change it, such as adding a staff review step, and test again", "Hide the complaints", "Stop measuring"], answer: 1, why: "If it partly worked, change it and test again." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Making the case and proving it",
        questions: [
          { objective: "O4", q: "Which belongs in an AI business case?", options: ["Staff passwords", "A list of every AI tool ever made", "Customer phone numbers", "The risks and who checks the AI's work"], answer: 3, why: "Risks and controls are one of the six parts." },
          { objective: "O5", q: "What is a baseline?", options: ["The numbers before a change, used for comparison", "A sports term only", "The AI's price", "The final report"], answer: 0, why: "You compare pilot results to the baseline." },
          { objective: "O5", q: "Which is a good pilot rule?", options: ["Let AI send everything with no checks", "Skip measuring", "Never put customer private details into the AI tool", "Run it for three years first"], answer: 2, why: "Keeping private data out is a key rule." },
          { objective: "O6", q: "AI saved 3 hours but staff spent 2 hours fixing its mistakes. What is the real saving?", options: ["5 hours", "3 hours", "None of it counts", "1 hour"], answer: 3, why: "Hidden costs come off the savings." },
          { objective: "O6", q: "The pilot did not save time. What should you recommend?", options: ["Expand it to the whole company", "Hide the results", "Stop or change it, and record what you learned", "Buy a more expensive plan without testing"], answer: 2, why: "Honest results guide the next step." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in Business: Strategies and Applications",
    questions: [
      { objective: "O1", q: "Generative AI is AI that:", options: ["Only does math", "Creates text, images or other content from a request", "Replaces all workers", "Only works offline"], answer: 1, why: "It generates content from a request." },
      { objective: "O1", q: "Which is a good use of AI in a small business?", options: ["Summarizing customer reviews to find common complaints", "Deciding employee pay alone", "Giving legal advice to clients", "Signing checks"], answer: 0, why: "Summarizing is a core AI strength." },
      { objective: "O1", q: "Who should make final decisions about people or money?", options: ["The AI", "Nobody", "A person", "The software vendor"], answer: 2, why: "AI drafts; people decide." },
      { objective: "O2", q: "A time audit lists:", options: ["Tasks and how much time each takes", "Employee birthdays", "Software prices only", "Social media followers"], answer: 0, why: "It shows where time goes." },
      { objective: "O2", q: "Which task is a classic AI candidate?", options: ["A one-time building inspection", "A handshake with a new client", "Signing a lease", "Writing similar emails again and again"], answer: 3, why: "Repeated writing tasks suit AI." },
      { objective: "O2", q: "15 tasks a week at 20 minutes each equals:", options: ["5 hours", "15 hours", "20 hours", "35 minutes"], answer: 0, why: "15 x 20 = 300 minutes = 5 hours." },
      { objective: "O3", q: "When scoring an AI idea, \"risk\" means:", options: ["The price of the tool", "The chance and cost of something going wrong", "How fun it is", "How many people like it"], answer: 1, why: "Risk is about mistakes and their cost." },
      { objective: "O3", q: "Which is the best first AI project?", options: ["AI decides who gets services", "AI picks which employees to let go", "AI gives medical advice", "AI drafts replies to common emails, a person reviews"], answer: 3, why: "It is high value, low effort and low risk." },
      { objective: "O3", q: "Why check what an AI tool does with data?", options: ["Private customer or donor data must be protected", "It changes the font", "It is not important", "Only for big companies"], answer: 0, why: "Privacy matters for every organization." },
      { objective: "O4", q: "A business case should be:", options: ["Fifty pages long", "Written without numbers", "Short, about one page, with real numbers", "Secret from the decision makers"], answer: 2, why: "Busy people read short, clear documents." },
      { objective: "O4", q: "Which is a \"control\"?", options: ["Buying more AI tools", "Turning off the computer", "Ignoring mistakes", "A person reviewing AI output before it is sent"], answer: 3, why: "Controls reduce risk." },
      { objective: "O4", q: "AI drafts your business case. Your job is to:", options: ["Send it unread", "Remove all numbers", "Check every number and fact", "Add fake savings"], answer: 2, why: "You supply and check the facts." },
      { objective: "O5", q: "A pilot is:", options: ["A full company rollout", "A small, time-limited test", "A type of AI model", "A permanent contract"], answer: 1, why: "Pilots let you learn cheaply." },
      { objective: "O5", q: "When should you record baseline numbers?", options: ["Before the pilot starts", "Only after it ends", "Never", "A year later"], answer: 0, why: "You need the before numbers to compare." },
      { objective: "O5", q: "Which should NEVER go into an AI tool during a pilot?", options: ["A sample question", "A generic email draft", "Customer bank numbers and passwords", "Your business hours"], answer: 2, why: "Private and financial details stay out." },
      { objective: "O5", q: "A daily log during a pilot helps you:", options: ["Remember what worked and what went wrong", "Hide problems", "Avoid measuring", "Skip the review"], answer: 0, why: "Notes make the final review accurate." },
      { objective: "O6", q: "Which is a hidden cost?", options: ["The tool's listed price", "The pilot's start date", "The number of users", "Time spent fixing AI mistakes"], answer: 3, why: "Fixing mistakes is easy to forget." },
      { objective: "O6", q: "Besides numbers, what should you collect at the end of a pilot?", options: ["Their passwords", "What the users say helped or got in the way", "Their home addresses", "Nothing"], answer: 1, why: "User feedback explains the numbers." },
      { objective: "O6", q: "A pilot partly worked. A sensible recommendation is:", options: ["Expand it everywhere at once", "Change it and test again", "Hide it", "Never try AI again"], answer: 1, why: "Partial success means adjust and retest." },
      { objective: "O6", q: "Stopping a pilot that did not work is:", options: ["Always a failure", "Against the law", "Impossible", "A useful lesson that avoided a bigger mistake"], answer: 3, why: "Pilots exist to find out cheaply." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      2,
      4,
      5,
      7,
      10,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Task and tool",
        objective: "O3",
        notYet: "The task is high risk, like hiring decisions, or no tool is named.",
        meets: "A repeated, lower-risk task and a named AI tool, with any private data noted.",
        exceeds: "Shows the value, effort and risk scores that led to this choice."
      },
      {
        name: "Business case",
        objective: "O4",
        notYet: "Missing parts, or no numbers.",
        meets: "One page with the problem, solution, benefit, cost, risks and controls, and a success measure.",
        exceeds: "Every number comes from the time audit and is easy to check."
      },
      {
        name: "Time savings estimate",
        objective: "O2",
        notYet: "The savings are a guess with no time audit.",
        meets: "Savings are based on how often the task happens and how long it takes.",
        exceeds: "Also estimates time needed to check the AI's work."
      },
      {
        name: "Pilot and baseline",
        objective: "O5",
        notYet: "No baseline, or the pilot had no rules.",
        meets: "Baseline and end numbers recorded, with rules on tasks, who checks and what never goes in.",
        exceeds: "A daily log shows what worked and what went wrong."
      },
      {
        name: "Recommendation",
        objective: "O6",
        notYet: "No clear recommendation, or it ignores the numbers.",
        meets: "Three sentences recommending expand, change or stop, based on before-and-after numbers.",
        exceeds: "Subtracts time spent fixing AI mistakes and includes what users said."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Organizations that run a pilot within 30 days (follow-up survey)",
      "Hours per week saved on the piloted task, as reported by the organization",
      "Organizations that expand, change or stop their pilot based on measured results"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini), or the tool the organization already uses",
      "A spreadsheet (Google Sheets or Excel) for the time audit and pilot numbers",
      "About 60 minutes for lessons and checks, plus a two-week pilot or a one-day practice version"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; build a sample time audit on a shared screen.",
      "Have learners bring a real week's task list from their own organization.",
      "Before any pilot, review the rules so no private customer, employee or donor details go into AI tools.",
      "Invite learners to present their one-page business case to the group for feedback.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
