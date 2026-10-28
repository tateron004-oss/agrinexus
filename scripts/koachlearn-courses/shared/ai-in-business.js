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
  chapters: [
    {
      name: "Chapter 1: Finding the right AI opportunity",
      lessons: [
        {
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
          youCanNow: "tell which business tasks AI handles well and which need a person."
        },
        {
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
          youCanNow: "map an organization's repeated work and spot the best AI candidates."
        },
        {
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
          youCanNow: "score AI ideas for value, effort and risk and pick a smart first project."
        }
      ],
      check: {
        title: "Knowledge Check 1: Finding the right AI opportunity",
        questions: [
          { q: "Which task is today's generative AI strongest at?", options: ["Deciding who to hire", "Giving tax advice", "Drafting a reply to a common customer email", "Signing contracts"], answer: 2, why: "First drafts are a core strength; decisions and licensed advice need people." },
          { q: "A task happens 30 times a week and takes 6 minutes. How many hours a week is that?", options: ["3 hours", "30 hours", "6 hours", "Half an hour"], answer: 0, why: "30 x 6 minutes = 180 minutes = 3 hours." },
          { q: "What is a quick win?", options: ["High risk, high effort", "Any project with AI in the name", "The most expensive tool", "High value, low effort, low risk"], answer: 3, why: "Quick wins prove value fast with little risk." },
          { q: "Why is using AI to approve or reject job applicants a poor first project?", options: ["It is too easy", "It is high risk: mistakes hurt people and can be unfair", "AI cannot read", "It saves no time"], answer: 1, why: "Decisions about people are high risk and need careful human control." },
          { q: "A task uses donor or customer data. What should you check early?", options: ["The tool's color scheme", "What the AI tool does with that data", "Nothing", "How many emojis it uses"], answer: 1, why: "Privacy must be checked before private data goes into a tool." }
        ]
      }
    },
    {
      name: "Chapter 2: Making the case and proving it",
      lessons: [
        {
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
          youCanNow: "write a short, numbers-based business case for an AI project."
        },
        {
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
          youCanNow: "plan and run a small AI pilot with rules and before-and-after numbers."
        },
        {
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
          youCanNow: "find, justify, test and judge an AI project in a business or organization."
        }
      ],
      check: {
        title: "Knowledge Check 2: Making the case and proving it",
        questions: [
          { q: "Which belongs in an AI business case?", options: ["Staff passwords", "A list of every AI tool ever made", "Customer phone numbers", "The risks and who checks the AI's work"], answer: 3, why: "Risks and controls are one of the six parts." },
          { q: "What is a baseline?", options: ["The numbers before a change, used for comparison", "A sports term only", "The AI's price", "The final report"], answer: 0, why: "You compare pilot results to the baseline." },
          { q: "Which is a good pilot rule?", options: ["Let AI send everything with no checks", "Skip measuring", "Never put customer private details into the AI tool", "Run it for three years first"], answer: 2, why: "Keeping private data out is a key rule." },
          { q: "AI saved 3 hours but staff spent 2 hours fixing its mistakes. What is the real saving?", options: ["5 hours", "3 hours", "None of it counts", "1 hour"], answer: 3, why: "Hidden costs come off the savings." },
          { q: "The pilot did not save time. What should you recommend?", options: ["Expand it to the whole company", "Hide the results", "Stop or change it, and record what you learned", "Buy a more expensive plan without testing"], answer: 2, why: "Honest results guide the next step." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in Business: Strategies and Applications",
    questions: [
      { q: "Generative AI is AI that:", options: ["Only does math", "Creates text, images or other content from a request", "Replaces all workers", "Only works offline"], answer: 1, why: "It generates content from a request." },
      { q: "Which is a good use of AI in a small business?", options: ["Summarizing customer reviews to find common complaints", "Deciding employee pay alone", "Giving legal advice to clients", "Signing checks"], answer: 0, why: "Summarizing is a core AI strength." },
      { q: "Who should make final decisions about people or money?", options: ["The AI", "Nobody", "A person", "The software vendor"], answer: 2, why: "AI drafts; people decide." },
      { q: "A time audit lists:", options: ["Tasks and how much time each takes", "Employee birthdays", "Software prices only", "Social media followers"], answer: 0, why: "It shows where time goes." },
      { q: "Which task is a classic AI candidate?", options: ["A one-time building inspection", "A handshake with a new client", "Signing a lease", "Writing similar emails again and again"], answer: 3, why: "Repeated writing tasks suit AI." },
      { q: "15 tasks a week at 20 minutes each equals:", options: ["5 hours", "15 hours", "20 hours", "35 minutes"], answer: 0, why: "15 x 20 = 300 minutes = 5 hours." },
      { q: "When scoring an AI idea, \"risk\" means:", options: ["The price of the tool", "The chance and cost of something going wrong", "How fun it is", "How many people like it"], answer: 1, why: "Risk is about mistakes and their cost." },
      { q: "Which is the best first AI project?", options: ["AI decides who gets services", "AI picks which employees to let go", "AI gives medical advice", "AI drafts replies to common emails, a person reviews"], answer: 3, why: "It is high value, low effort and low risk." },
      { q: "Why check what an AI tool does with data?", options: ["Private customer or donor data must be protected", "It changes the font", "It is not important", "Only for big companies"], answer: 0, why: "Privacy matters for every organization." },
      { q: "A business case should be:", options: ["Fifty pages long", "Written without numbers", "Short, about one page, with real numbers", "Secret from the decision makers"], answer: 2, why: "Busy people read short, clear documents." },
      { q: "Which is a \"control\"?", options: ["Buying more AI tools", "Turning off the computer", "Ignoring mistakes", "A person reviewing AI output before it is sent"], answer: 3, why: "Controls reduce risk." },
      { q: "AI drafts your business case. Your job is to:", options: ["Send it unread", "Remove all numbers", "Check every number and fact", "Add fake savings"], answer: 2, why: "You supply and check the facts." },
      { q: "A pilot is:", options: ["A full company rollout", "A small, time-limited test", "A type of AI model", "A permanent contract"], answer: 1, why: "Pilots let you learn cheaply." },
      { q: "When should you record baseline numbers?", options: ["Before the pilot starts", "Only after it ends", "Never", "A year later"], answer: 0, why: "You need the before numbers to compare." },
      { q: "Which should NEVER go into an AI tool during a pilot?", options: ["A sample question", "A generic email draft", "Customer bank numbers and passwords", "Your business hours"], answer: 2, why: "Private and financial details stay out." },
      { q: "A daily log during a pilot helps you:", options: ["Remember what worked and what went wrong", "Hide problems", "Avoid measuring", "Skip the review"], answer: 0, why: "Notes make the final review accurate." },
      { q: "Which is a hidden cost?", options: ["The tool's listed price", "The pilot's start date", "The number of users", "Time spent fixing AI mistakes"], answer: 3, why: "Fixing mistakes is easy to forget." },
      { q: "Besides numbers, what should you collect at the end of a pilot?", options: ["Their passwords", "What the users say helped or got in the way", "Their home addresses", "Nothing"], answer: 1, why: "User feedback explains the numbers." },
      { q: "A pilot partly worked. A sensible recommendation is:", options: ["Expand it everywhere at once", "Change it and test again", "Hide it", "Never try AI again"], answer: 1, why: "Partial success means adjust and retest." },
      { q: "Stopping a pilot that did not work is:", options: ["Always a failure", "Against the law", "Impossible", "A useful lesson that avoided a bigger mistake"], answer: 3, why: "Pilots exist to find out cheaply." }
    ]
  }
};
