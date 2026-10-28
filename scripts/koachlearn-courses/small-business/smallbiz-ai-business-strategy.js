"use strict";

// Koach Learn course: Small Business -> "Building an AI Business Strategy and Integrations". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "smallbiz-ai-business-strategy",
  category: "Small Business",
  name: "Building an AI Business Strategy and Integrations",
  skills: "Mapping where time goes, Choosing AI projects by value and risk, Running a 30-day pilot, Measuring results, Connecting tools safely, Writing an AI use policy",
  outcome: "write a one-page AI plan for your business: the two tasks you will improve first and why, a 30-day pilot with a before-and-after measure, how your tools will connect and who approves what, and a short AI use policy for you and your staff.",
  about: [
    "This course is for small business owners who have tried AI a little and now want a plan instead of random experiments: shops, restaurants, salons, cleaning and repair services, and small offices.",
    "You will map where your time goes, pick the AI projects that are worth it, test one for 30 days and measure it, learn how tools connect to each other (integrations), and write simple rules for how your business uses AI.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. The tasks build into your one-page AI plan."
  ],
  finalTask: "Write your one-page AI plan with five parts: (1) your time map and the two tasks you chose, with a value and risk score for each; (2) a 30-day pilot for the first task with a before-and-after measure; (3) a simple diagram or list of how your tools connect and which steps need your approval; (4) a cost check; (5) a five-rule AI use policy for you and your staff.",
  chapters: [
    {
      name: "Chapter 1: Choosing what to improve",
      lessons: [
        {
          title: "Mapping where your time goes",
          minutes: 5,
          goal: "Make a simple map of the tasks that take your time each week.",
          text: [
            "A strategy starts with facts about your own business. For one week, write down the tasks that take your time and roughly how long each takes: answering messages, scheduling, ordering supplies, social posts, bookkeeping, quotes, cleaning up, training staff.",
            "Group them into buckets: customers, sales and marketing, operations (ordering, scheduling), money (invoices, bookkeeping), and people (hiring, training).",
            "You will often find a few tasks eat most of your time. Those are where AI might help, but only if the task is right for it, which is the next lesson."
          ],
          steps: ["For one week, note each task and the minutes it takes.", "Group tasks into five buckets.", "Total the time in each bucket.", "Circle the three biggest time-eaters."],
          words: [["Strategy", "a plan for what to do first and why."], ["Time map", "a list of your tasks and how much time each takes."], ["Operations", "the daily work of running the business, like ordering and scheduling."]],
          slides: [
            { title: "Start with your own facts", bullets: ["Note every task for one week", "Write roughly how long each takes"] },
            { title: "Five buckets", bullets: ["Customers; sales and marketing", "Operations; money", "People"] },
            { title: "Find the time-eaters", bullets: ["Total each bucket", "Circle the three biggest tasks"] }
          ],
          tryIt: "Start your time map. From memory, list at least ten weekly tasks with minutes for each, sort them into the five buckets, and circle the three biggest.",
          youCanNow: "map where your time goes and find your biggest time-eaters."
        },
        {
          title: "Choosing AI projects by value and risk",
          minutes: 5,
          goal: "Score possible AI projects and pick the two to start with.",
          text: [
            "Not every time-eater is a good AI project. Score each one 1 to 5 on value (time or money saved, better service) and 1 to 5 on risk (what happens if AI gets it wrong: angry customers, lost money, legal trouble).",
            "Start with high value and low risk. Drafting social posts and answering common questions are often good starts. Bookkeeping categories or quotes may be high value but need careful checking. Hiring decisions, legal documents and anything about health or safety are high risk: keep a person and a professional in charge.",
            "Pick two projects. One quick win to build confidence, and one bigger project you will plan carefully."
          ],
          steps: ["List your three biggest time-eaters plus any other ideas.", "Score value 1-5 and risk 1-5.", "Pick one quick win (high value, low risk).", "Pick one bigger project you will plan carefully."],
          words: [["Value", "how much a project saves or earns, or how much it improves service."], ["Risk", "how much harm a mistake could cause."], ["Quick win", "a small project that works fast and builds confidence."]],
          slides: [
            { title: "Score each idea", bullets: ["Value 1-5: time, money, better service", "Risk 1-5: harm if AI gets it wrong"] },
            { title: "Where to start", bullets: ["High value, low risk first", "Social posts and common questions are good starts", "Hiring, legal, health and safety: people in charge"] },
            { title: "Pick two", bullets: ["One quick win", "One bigger, carefully planned project"] }
          ],
          tryIt: "Score at least five AI ideas for value and risk in a small table. Choose your quick win and your bigger project, and write one sentence on why for each.",
          youCanNow: "choose AI projects for your business by weighing value against risk."
        },
        {
          title: "Running a 30-day pilot and measuring it",
          minutes: 5,
          goal: "Plan a small 30-day test with a clear before-and-after measure.",
          text: [
            "A pilot is a small, time-limited test. Instead of changing everything, you try AI on one task for 30 days and measure whether it helped.",
            "First measure the \"before\": how long the task takes now, how many mistakes, how customers respond. Then decide the \"after\" target: \"Answering common messages drops from 60 to 25 minutes a day, with no increase in complaints.\"",
            "During the pilot, keep a short log: what worked, what went wrong, what you fixed. At the end, decide: keep, change or stop. Stopping is fine; you learned something cheaply."
          ],
          steps: ["Pick the task and write the before numbers.", "Write the after target.", "Run the test for 30 days and keep a short log.", "At day 30: keep, change or stop."],
          words: [["Pilot", "a small, time-limited test of a new way of working."], ["Baseline", "the \"before\" numbers you compare against."], ["Target", "the result you hope to reach."]],
          slides: [
            { title: "A pilot is a small test", bullets: ["One task, 30 days", "Measure whether it helped"] },
            { title: "Before and after", bullets: ["Before: time, mistakes, customer response", "After target example: 60 to 25 minutes a day", "No increase in complaints"] },
            { title: "At day 30", bullets: ["Read your log", "Keep, change or stop", "Stopping is a cheap lesson"] }
          ],
          tryIt: "Write a pilot plan for your quick win: the task, the before numbers (estimate if needed), the after target, and what you will write in your log each week.",
          youCanNow: "plan and measure a 30-day AI pilot for one business task."
        }
      ],
      check: {
        title: "Knowledge Check 1: Choosing what to improve",
        questions: [
          { q: "What is the first step of an AI strategy in this course?", options: ["Buy many tools", "Map where your time goes", "Fire staff", "Copy a competitor"], answer: 1, why: "Strategy starts with facts about your business." },
          { q: "Which project is the best first choice?", options: ["Whatever is newest", "Low value, high risk", "High risk, any value", "High value, low risk"], answer: 3, why: "Start where AI helps most and can do little harm." },
          { q: "Which task should keep a person and a professional in charge?", options: ["Hiring decisions", "Drafting social posts", "Answering \"What are your hours?\"", "Brainstorming menu names"], answer: 0, why: "Hiring is high risk." },
          { q: "What is a pilot?", options: ["An airline job", "A permanent change", "A small, time-limited test", "A software license"], answer: 2, why: "A pilot tests one task for a set time." },
          { q: "At day 30 the pilot did not help. What is the right move?", options: ["Hide the results", "Expand it to everything", "Stop or change it; you learned cheaply", "Never measure again"], answer: 2, why: "Stopping a test that did not work is a good decision." }
        ]
      }
    },
    {
      name: "Chapter 2: Connecting tools and setting rules",
      lessons: [
        {
          title: "How tools connect: integrations in plain words",
          minutes: 5,
          goal: "Draw how your business tools pass information to each other.",
          text: [
            "An integration is a connection that lets one tool send information to another automatically. For example: a booking form adds the appointment to your calendar; a paid order adds a row to your sales sheet; a new review sends you a text.",
            "Many tools have built-in connections listed in their settings, often called apps, integrations or connected accounts. Connector services such as Zapier, Make or Microsoft Power Automate link tools that do not connect on their own. Check each tool's official site for what it connects to and what it costs.",
            "Draw your tools as boxes and the information as arrows: \"booking app -> calendar\", \"POS -> sales sheet\". Then mark which arrows already work, which you do by hand, and which you might automate."
          ],
          steps: ["List the tools you use: POS, booking, email, calendar, spreadsheets, social.", "Draw each as a box.", "Draw arrows for information that moves between them.", "Mark each arrow: automatic, by hand, or could automate."],
          words: [["Integration", "a connection that lets one tool send information to another automatically."], ["Connector service", "a tool like Zapier, Make or Power Automate that links other tools."], ["Automate", "make a task happen by itself without a person doing each step."]],
          slides: [
            { title: "An integration is a connection", bullets: ["Booking form -> calendar", "Paid order -> sales sheet", "New review -> text alert"] },
            { title: "Ways to connect", bullets: ["Built-in connections in a tool's settings", "Connector services: Zapier, Make, Power Automate", "Check each official site for costs"] },
            { title: "Draw your map", bullets: ["Tools are boxes; information is arrows", "Mark: automatic, by hand, could automate"] }
          ],
          tryIt: "Draw your tool map on paper with boxes and arrows. Mark at least one arrow you do by hand today that could be automated.",
          youCanNow: "map how your business tools connect and spot tasks that could be automated."
        },
        {
          title: "Keeping control: approvals, costs and data",
          minutes: 5,
          goal: "Decide which automated steps need your approval and check the true cost.",
          text: [
            "Automation saves time, but it can also repeat a mistake a hundred times. Keep a person approving anything that sends money, sends messages to many customers, changes prices, deletes records or makes promises.",
            "Count the full cost: subscriptions, per-use charges, setup time and the time to check the work. Compare it with the time saved from your pilot. If the numbers do not add up, stay manual for now.",
            "Know where your data goes. Before connecting a tool, read what data it can see and keep that to the minimum. Use strong passwords and two-step sign-in on business accounts, and remove access for staff who leave."
          ],
          steps: ["Mark every automated step that sends money, messages many people, changes prices or deletes data.", "Require your approval on those steps.", "Add up the full monthly cost.", "Check what data each connection can see.", "Turn on two-step sign-in."],
          words: [["Approval step", "a point where a person must say yes before the process continues."], ["Two-step sign-in", "a second check, like a code on your phone, when you log in."], ["Subscription", "a regular payment to keep using a tool."]],
          slides: [
            { title: "A person approves", bullets: ["Anything that sends money", "Messages to many customers", "Price changes, deletions, promises"] },
            { title: "Count the full cost", bullets: ["Subscriptions and per-use charges", "Setup and checking time", "Compare with time saved"] },
            { title: "Protect your data", bullets: ["Give each tool the least data it needs", "Strong passwords and two-step sign-in", "Remove access when staff leave"] }
          ],
          tryIt: "On your tool map, put a star on every step that needs your approval. Then write a cost check: monthly tool costs vs hours saved times what your hour is worth.",
          youCanNow: "keep control of automations with approval steps, cost checks and data limits."
        },
        {
          title: "Writing your AI use policy and one-page plan",
          minutes: 5,
          goal: "Write five simple AI rules for your business and finish your one-page AI plan.",
          text: [
            "An AI use policy is a short list of rules for how you and your staff use AI. It protects customers and keeps everyone consistent. Five rules are enough to start.",
            "Example rules: (1) No customer names with contact details, card numbers, passwords or employee records go into AI tools. (2) A person checks every fact before customers see it. (3) We never write fake reviews or claims. (4) Only approved tools are used for business. (5) Money, legal, hiring and safety decisions are made by people.",
            "Ask AI to make your rules clear and short, then put them on one page with your time map, chosen projects, pilot plan, tool map and cost check. Review the plan every three months."
          ],
          steps: ["Write five rules in plain words.", "Ask AI to make them clear and short.", "Share them with staff and get their questions.", "Put everything on one page and set a review date."],
          words: [["AI use policy", "written rules for how a business uses AI."], ["Approved tool", "a tool the owner has checked and allowed for business use."]],
          slides: [
            { title: "Why a policy", bullets: ["Protects customers", "Keeps staff consistent", "Five rules are enough to start"] },
            { title: "Example rules", bullets: ["No private customer or staff data in AI", "A person checks facts; no fake reviews", "Approved tools only; people make big decisions"] },
            { title: "Your one-page plan", bullets: ["Time map and two projects", "Pilot, tool map and cost check", "Five rules; review every three months"] }
          ],
          tryIt: "Final task: write your five AI rules and your one-page AI plan with all five parts. Share the rules with one staff member or a trusted person and ask if anything is unclear.",
          youCanNow: "lead your business's use of AI with a written plan and clear rules."
        }
      ],
      check: {
        title: "Knowledge Check 2: Connecting tools and setting rules",
        questions: [
          { q: "What is an integration?", options: ["A connection that lets one tool send information to another", "A new employee", "A tax form", "A type of loan"], answer: 0, why: "Integrations pass information between tools." },
          { q: "Which is a connector service?", options: ["A stapler", "A cash drawer", "A fax machine", "Zapier"], answer: 3, why: "Zapier links tools that do not connect on their own." },
          { q: "Which automated step most needs your approval?", options: ["Saving a file name", "Sending a discount email to all 800 customers", "Adding a calendar color", "Sorting a list"], answer: 1, why: "Messages to many customers need a person's yes." },
          { q: "An automation costs more each month than the time it saves. What do you do?", options: ["Stay manual for now", "Keep paying", "Add more tools", "Ignore the cost"], answer: 0, why: "The numbers should add up." },
          { q: "Which is a good AI use rule?", options: ["Paste customer card numbers to save time", "Use any tool you find", "A person checks every fact before customers see it", "AI makes hiring decisions"], answer: 2, why: "Checking facts protects customers." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building an AI Business Strategy and Integrations",
    questions: [
      { q: "A time map lists:", options: ["Your passwords", "Your tasks and how long each takes", "Your customers' addresses", "Your competitors"], answer: 1, why: "It shows where your time goes." },
      { q: "Which is one of the five buckets?", options: ["Movies", "Weather", "Sports", "Operations"], answer: 3, why: "Customers, sales and marketing, operations, money, people." },
      { q: "Why circle your three biggest time-eaters?", options: ["For decoration", "To delete them", "To share online", "They are where AI might help most"], answer: 3, why: "Big tasks offer the most time savings." },
      { q: "In value-and-risk scoring, risk means:", options: ["How fun it is", "Harm if AI gets it wrong", "How new the tool is", "How many apps you have"], answer: 1, why: "Risk measures possible harm." },
      { q: "A quick win is:", options: ["A lottery ticket", "The biggest, riskiest project", "A small project that works fast", "A lawsuit"], answer: 2, why: "Quick wins build confidence." },
      { q: "Which project is high risk?", options: ["Writing a legal contract", "Drafting an Instagram caption", "Brainstorming a special's name", "Formatting a checklist"], answer: 0, why: "Legal documents need a professional." },
      { q: "The \"before\" numbers in a pilot are called the:", options: ["Budget", "Target", "Baseline", "Password"], answer: 2, why: "A baseline is what you compare against." },
      { q: "A good pilot target is:", options: ["\"Messages drop from 60 to 25 minutes a day with no rise in complaints\"", "\"Be better\"", "\"Use AI more\"", "\"Try stuff\""], answer: 0, why: "It is specific and measurable." },
      { q: "During the pilot you keep:", options: ["No notes", "A short log of what worked and what went wrong", "Customer card numbers", "Only the good news"], answer: 1, why: "The log guides your day-30 decision." },
      { q: "\"Paid order -> sales sheet\" is an example of:", options: ["A tax", "A policy", "A review", "An integration"], answer: 3, why: "Information moves automatically between tools." },
      { q: "Where are built-in connections usually found?", options: ["In a tool's settings", "On a receipt", "In the mail", "Nowhere"], answer: 0, why: "Settings often list apps or integrations." },
      { q: "In your tool map, arrows show:", options: ["Staff names", "Customer moods", "Prices", "Information moving between tools"], answer: 3, why: "Boxes are tools; arrows are information." },
      { q: "Why keep approval on automations that send money?", options: ["To annoy staff", "It is slower", "Automation can repeat a mistake many times", "It is not needed"], answer: 2, why: "A person stops costly repeated mistakes." },
      { q: "The full cost of a tool includes:", options: ["Only the price on the ad", "Subscription, per-use charges, setup and checking time", "Nothing", "Only electricity"], answer: 1, why: "All costs count against the time saved." },
      { q: "When a staff member leaves, you should:", options: ["Do nothing", "Leave it open", "Share their password", "Remove their access to business tools"], answer: 3, why: "Removing access protects your data." },
      { q: "What does two-step sign-in add?", options: ["A free upgrade", "A second password on paper", "A second check, like a phone code", "Nothing"], answer: 2, why: "It makes accounts harder to break into." },
      { q: "An AI use policy is:", options: ["Written rules for how your business uses AI", "An insurance policy", "A lease", "A tool"], answer: 0, why: "It keeps everyone safe and consistent." },
      { q: "Which belongs in your AI policy?", options: ["AI decides who to hire", "People make money, legal, hiring and safety decisions", "Any tool is fine", "Fake reviews are ok"], answer: 1, why: "Big decisions stay with people." },
      { q: "How often should you review your AI plan?", options: ["Never", "About every three months", "Every hour", "Only after a disaster"], answer: 1, why: "Regular reviews keep it current." },
      { q: "Your one-page AI plan includes:", options: ["Time map, projects, pilot, tool map, cost check and rules", "Only a list of apps", "Customer passwords", "A competitor's prices"], answer: 0, why: "Those parts make a complete plan." }
    ]
  }
};
