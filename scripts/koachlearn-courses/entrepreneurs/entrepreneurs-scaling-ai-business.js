"use strict";

// Koach Learn course: Entrepreneurs -> "Scaling an AI-Powered Business". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-scaling-ai-business",
  category: "Entrepreneurs",
  name: "Scaling an AI-Powered Business",
  skills: "Knowing your key numbers, Finding the bottleneck, Turning work into systems, Bringing on help, Growing customers step by step, Keeping quality as you grow",
  outcome: "use AI to read your key business numbers, find what is holding growth back, turn your work into systems others can run, and write a realistic 90-day scaling plan with quality checks.",
  about: [
    "Scaling means growing sales without your costs, hours and mistakes growing just as fast. This course is for owners whose business already works and who are ready to grow it, with AI doing more of the routine work.",
    "In Chapter 1 you will use AI to understand your numbers, find the one bottleneck slowing you down, and turn your work into written systems. In Chapter 2 you will plan for help (contractors, employees and AI tools), choose growth channels, and set quality and risk checks so growth does not break what customers love.",
    "Each lesson takes about five minutes with a task on your own business. There is a knowledge check after each chapter and a 20-question quiz at the end. Tax, employment and legal points link to official sources; check with an accountant or lawyer for your situation."
  ],
  finalTask: "Write a one-page 90-day scaling plan: your five key numbers today and targets, your main bottleneck and how you will remove it, two systems you will document, the help you will add (person or AI tool) and its cost, one growth channel to test, and three quality checks you will watch weekly.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "US owners of small businesses that already work and have steady customers, who are ready to grow and want AI to do more of the routine work.",
    startingPoint: "Make sales, serve customers and do most key jobs themselves. Many do not track their key numbers each month, have few written systems, and have not planned hiring or growth tests.",
    gap: "Growing a business that loses money on each sale, or that depends on the owner's time for every job, makes problems bigger, not smaller. Owners need to read their numbers, fix the main bottleneck, write systems, add the right help and test growth with quality checks, so the business grows without breaking.",
    constraints: [
      "Plain words and basic spreadsheet math",
      "Devices: a computer with a spreadsheet and a free AI assistant",
      "Time: about five minutes per lesson plus work on the owner's own numbers and systems",
      "Tax and employment points (such as worker status) link to official sources; owners check with an accountant or lawyer",
      "Customer names removed before any business data goes into AI"
    ],
    prerequisites: "\"AI for Business Productivity\" is recommended, plus a business with at least six months of sales."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given six months of business numbers with customer names removed", action: "track five key numbers in a spreadsheet and use AI to explain the trends", standard: "checking AI's math and saying whether each sale is profitable" },
    { id: "O2", condition: "Given the steps of your main process with times", action: "identify the bottleneck and choose one fix: remove, automate or hand off", standard: "with the fix ready to try this month" },
    { id: "O3", condition: "Given two key jobs you do yourself", action: "write each as a system with steps, a checklist and a quality standard", standard: "so someone else can follow it without asking questions" },
    { id: "O4", condition: "Given the help your business needs most", action: "choose between an AI tool and a person and prepare a fair role description", standard: "with job-related wording and a note on worker status using the IRS's three categories" },
    { id: "O5", condition: "Given possible growth channels", action: "plan a 30-day test of one channel with a target, a measure and a spending limit", standard: "comparing cost per new customer with your key numbers" },
    { id: "O6", condition: "For your 90-day scaling plan", action: "set three weekly quality checks and a review of AI tools and customer data", standard: "reviewing the plan every two weeks" }
  ],
  chapters: [
    {
      name: "Chapter 1: Get ready to grow",
      lessons: [
        {
          objectives: ["O1"],
          title: "Knowing your key numbers",
          minutes: 5,
          goal: "Track five key numbers and use AI to explain what they mean.",
          text: [
            "You cannot grow what you do not measure. Five numbers matter for most small businesses: monthly revenue (money in), costs, profit (what is left), number of customers, and how much each customer is worth over time compared with what it costs to get them.",
            "Put the last six months in a spreadsheet. Then ask AI to help you read it: \"Here are my monthly revenue, costs and customer counts (no names). What trends do you see? Which number should I worry about?\" Check its math yourself.",
            "A business is ready to scale when each sale makes a profit and customers keep coming back or recommend you. If each sale loses money, growing makes the loss bigger."
          ],
          steps: ["Make a spreadsheet with six months of revenue, costs, profit and customer count.", "Work out average sale and cost to get a customer.", "Ask AI to describe trends and risks (no customer names).", "Redo any calculations yourself.", "Write one sentence: is each sale profitable?"],
          words: [["Revenue", "all the money that comes in from sales."], ["Profit", "revenue minus costs."], ["Customer acquisition cost", "what you spend, on average, to get one new customer."], ["Scale", "grow sales faster than costs and effort."]],
          slides: [
            { title: "Five key numbers", bullets: ["Revenue and costs", "Profit", "Number of customers", "Customer value vs cost to get one"] },
            { title: "AI reads the trends", bullets: ["Six months in a spreadsheet", "Ask AI for trends and risks", "Check the math yourself"] },
            { title: "Ready to scale?", bullets: ["Each sale makes a profit", "Customers return or recommend you", "If a sale loses money, growth grows the loss"] }
          ],
          tryIt: "Build your six-month numbers sheet, ask AI to point out trends and one risk, check its math, and write whether each sale is profitable.",
          youCanNow: "track your key numbers and judge whether your business is ready to scale.",
          quickCheck: [
            { objective: "O1", q: "What is customer acquisition cost?", options: ["What you spend on average to get one new customer", "The price a customer pays", "Your rent", "The number of customers you have"], answer: 0, why: "It shows how much each new customer costs you to win." },
            { objective: "O1", q: "AI says your profit doubled last month, but it feels wrong. What do you do?", options: ["Celebrate and hire right away", "Check the math yourself in the spreadsheet", "Ask AI to say it again", "Ignore your numbers"], answer: 1, why: "Always check AI's math before acting on it." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Finding the bottleneck",
          minutes: 5,
          goal: "Find the one step that most limits how much your business can handle.",
          text: [
            "A bottleneck is the narrowest point that limits everything else. In a cake business it might be oven space; in a service business it is often the owner's time for quotes, follow-up or quality checks.",
            "List the steps from first contact to happy customer and how long each takes per customer. Ask AI: \"Here are my steps and times. Where is the bottleneck, and what are three ways to fix it: remove the step, automate it, or hand it off?\"",
            "Fix the bottleneck first. Speeding up any other step does not help, because work still piles up at the narrow point."
          ],
          steps: ["List each step from first contact to finished job.", "Write the time each step takes per customer and who does it.", "Ask AI to find the bottleneck and suggest fixes.", "Choose remove, automate or hand off.", "Plan one fix to try in the next month."],
          words: [["Bottleneck", "the slowest step, which limits how much the whole business can do."], ["Hand off", "give a task to someone else to do."]],
          slides: [
            { title: "The narrowest point", bullets: ["Limits everything else", "Often the owner's time"] },
            { title: "Find it", bullets: ["List steps and time per customer", "Ask AI where work piles up"] },
            { title: "Fix it first", bullets: ["Remove, automate or hand off", "Speeding up other steps does not help"] }
          ],
          tryIt: "Write your steps with times, ask AI to find the bottleneck, and choose one fix (remove, automate or hand off) to try this month.",
          youCanNow: "find the step that limits your growth and pick a fix.",
          quickCheck: [
            { objective: "O2", q: "What is a bottleneck?", options: ["Your fastest step", "A type of bottle", "The slowest step that limits everything else", "A new customer"], answer: 2, why: "Work piles up at the bottleneck, so it limits growth." },
            { objective: "O2", q: "Every quote waits for you to write it, and orders pile up. What fix could you choose?", options: ["Speed up delivery instead", "Take more orders", "Stop sending quotes", "Use a quote template or hand quoting to a trained helper"], answer: 3, why: "Automating or handing off the bottleneck step frees up the flow." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Turning your work into systems",
          minutes: 5,
          goal: "Document two key jobs as systems someone else (or an AI tool) can run.",
          text: [
            "If everything lives in your head, the business cannot grow past you. A system is a written way of doing a job: the steps, the tools, the checklist and what \"done well\" looks like.",
            "Record yourself doing a job, or write rough notes, and ask AI to turn it into a standard operating procedure (SOP) with a checklist and a quality standard. Mark which steps AI tools can do and where a person must check.",
            "Test each system by having someone else follow it while you watch quietly. Every question they ask shows a missing step. Keep systems in one shared place."
          ],
          steps: ["Pick the two jobs that take most of your time.", "Record or write notes while you do each one.", "Ask AI to turn the notes into an SOP with a checklist and quality standard.", "Mark AI steps and human checks.", "Test with another person and fill the gaps."],
          words: [["System", "a written, repeatable way of doing a job."], ["SOP", "standard operating procedure: the written steps for a job."], ["Quality standard", "a clear description of what good work looks like."]],
          slides: [
            { title: "Get it out of your head", bullets: ["A system = steps, tools, checklist, standard", "The business can grow past you"] },
            { title: "Build it with AI", bullets: ["Record or write rough notes", "AI turns them into an SOP", "Mark AI steps and human checks"] },
            { title: "Test it", bullets: ["Someone else follows it", "Every question = a missing step", "Keep all systems in one place"] }
          ],
          tryIt: "Turn one of your two biggest jobs into an SOP with AI's help, including a checklist and a quality standard. Have someone test it if you can.",
          youCanNow: "turn your know-how into systems that others or AI tools can run.",
          quickCheck: [
            { objective: "O3", q: "What is a quality standard in an SOP?", options: ["A clear description of what a good result looks like", "The tool's price", "The owner's signature", "A list of customers"], answer: 0, why: "A quality standard tells the person what done well means." },
            { objective: "O3", q: "A helper keeps calling you with questions while following your SOP. What do you do?", options: ["Do the job yourself again", "Add the missing details to the SOP and test it again", "Fire the helper", "Throw away the SOP"], answer: 1, why: "Questions show where the SOP is not yet complete." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Get ready to grow",
        questions: [
          { objective: "O1", q: "Each sale loses a little money. What happens if you scale?", options: ["Profit appears automatically", "The losses grow", "Nothing changes", "Costs disappear"], answer: 1, why: "Growth multiplies whatever each sale does." },
          { objective: "O1", q: "What is profit?", options: ["Number of customers", "All money in", "Your price", "Revenue minus costs"], answer: 3, why: "Profit is what is left after costs." },
          { objective: "O1", q: "AI says your costs rose 40%. What should you do?", options: ["Check the math yourself in the spreadsheet", "Trust it and panic", "Delete the spreadsheet", "Ignore it"], answer: 0, why: "AI math can be wrong; verify." },
          { objective: "O2", q: "What is a bottleneck?", options: ["Your best customer", "A type of bottle", "The slowest step that limits everything else", "A marketing channel"], answer: 2, why: "It is the narrowest point in your process." },
          { objective: "O3", q: "How do you know an SOP is complete?", options: ["AI wrote it", "It is very long", "Someone else can follow it without asking questions", "It has a nice title"], answer: 2, why: "Questions during testing reveal missing steps." }
        ]
      }
    },
    {
      name: "Chapter 2: Grow without breaking",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bringing on help: people and AI tools",
          minutes: 6,
          goal: "Decide what help to add and prepare a role description.",
          text: [
            "Some work is best handed to an AI tool or automation (sorting, drafting, scheduling). Some needs a person (judgment, hands-on work, customer relationships). Use your bottleneck and systems to decide which.",
            "If you hire a person, AI can draft a clear role description from your SOPs: tasks, skills, hours and pay range. Check it for fair, inclusive wording and remove anything unrelated to the job.",
            "Contractor or employee? The IRS looks at three kinds of evidence: behavioral control (do you control how the work is done?), financial control (who controls pay, expenses and tools?) and the type of relationship (contracts, benefits, ongoing and central work). Getting this wrong can cost you taxes and penalties; read the IRS page, and ask an accountant or lawyer. State rules can be stricter."
          ],
          steps: ["List the work you want off your plate.", "Mark each: AI tool, contractor or employee.", "Have AI draft a role description from your SOPs.", "Check the wording for fairness and remove unrelated requirements.", "Read the IRS worker-status page and ask an accountant before hiring."],
          words: [["Contractor", "someone in business for themselves who does work for you, usually controlling how they do it."], ["Employee", "someone whose work you control; you withhold and pay employment taxes."], ["Role description", "a written summary of a job's tasks, skills, hours and pay."]],
          slides: [
            { title: "Person or AI tool?", bullets: ["AI: sorting, drafting, scheduling", "People: judgment, hands-on work, relationships"] },
            { title: "Role description with AI", bullets: ["Draft from your SOPs", "Tasks, skills, hours, pay range", "Check wording is fair and job-related"] },
            { title: "Contractor or employee? (IRS)", bullets: ["Behavioral control", "Financial control", "Type of relationship", "Ask an accountant; state rules can be stricter"] }
          ],
          sources: [{ name: "IRS: Independent Contractor (Self-Employed) or Employee?", url: "https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" }],
          tryIt: "Choose the help you need most. If it is a person, have AI draft a role description from your SOP and check it for fairness; note whether you think it is a contractor or employee role and why, using the IRS's three categories.",
          youCanNow: "decide between AI tools and people for growth, and prepare a fair role description.",
          quickCheck: [
            { objective: "O4", q: "Which job usually needs a person rather than AI?", options: ["Sorting emails", "Drafting a template", "Building relationships with key customers", "Summarizing notes"], answer: 2, why: "Relationships need human judgment and trust." },
            { objective: "O4", q: "AI's role description says \"young, energetic team member\". What do you do?", options: ["Keep it", "Add more adjectives", "Post it as it is", "Change it to fair, job-related wording"], answer: 3, why: "Role descriptions should be fair and about the job." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Growing customers step by step",
          minutes: 5,
          goal: "Choose one growth channel and design a small, measurable test.",
          text: [
            "Growth channels are the ways new customers find you: referrals, partnerships, local search and maps listings, social media, email, paid ads, marketplaces. Most small businesses grow best through one or two channels done well.",
            "Ask AI: \"My business is [type] serving [customer]. Suggest five growth channels, how each would work for me, what it would cost, and how I would measure it.\" Pick the one that fits your customer and budget.",
            "Run a small test for 30 days with a clear target: \"Ask 20 past customers for referrals; goal: 5 new leads.\" Measure the result, compare the cost per new customer with your numbers from Lesson 1, and only then spend more."
          ],
          steps: ["Ask AI for five possible growth channels with costs and measures.", "Pick one that fits your customer and budget.", "Set a 30-day test with a clear target.", "Track results and cost per new customer.", "Decide: grow it, change it or stop it."],
          words: [["Growth channel", "a way new customers find and buy from you."], ["Referral", "a customer recommending you to someone else."], ["Test", "a small, time-limited try with a clear target."]],
          slides: [
            { title: "Ways customers find you", bullets: ["Referrals and partnerships", "Local search, social, email", "Paid ads and marketplaces"] },
            { title: "Pick one or two", bullets: ["Ask AI for options, costs, measures", "Choose what fits your customer and budget"] },
            { title: "Test small first", bullets: ["30 days, clear target", "Track cost per new customer", "Grow, change or stop"] }
          ],
          tryIt: "Choose one growth channel with AI's help and write a 30-day test: what you will do, the target, how you will measure it, and the most you will spend.",
          youCanNow: "pick a growth channel and test it before spending more.",
          quickCheck: [
            { objective: "O5", q: "What does a good 30-day growth test include?", options: ["A clear target and a spending limit", "As much spending as possible", "No way to measure it", "Every channel at once"], answer: 0, why: "A target and a limit tell you whether the channel works without big risk." },
            { objective: "O5", q: "Your test brings in customers, but each costs more than they are worth to you. What do you do?", options: ["Spend more on it", "Stop or change the channel before spending more", "Ignore the numbers", "Lower your prices"], answer: 1, why: "Compare cost per new customer with customer value before scaling a channel." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Keeping quality as you grow",
          minutes: 5,
          goal: "Set weekly quality checks and a plan for AI and data risks as you grow.",
          text: [
            "Growth often breaks quality: rushed work, slower replies, AI drafts that nobody checks. Choose three quality numbers to watch weekly, such as average review rating, reply time, and redo or refund rate.",
            "As more work runs through AI tools, risks grow too: more customer data in more tools, more AI content going out. Review which tools hold customer data, who has access, and that a person still checks anything customers see.",
            "Put it together in a 90-day plan. Ask AI to help you lay it out, but every number and date should be one you believe. Review it every two weeks and adjust."
          ],
          steps: ["Choose three quality numbers to track weekly.", "List which tools hold customer data and who can access them.", "Confirm a human checks everything customers see.", "Ask AI to lay out your 90-day plan from your notes.", "Set a review every two weeks."],
          words: [["Quality check", "a regular look at a number or sample of work to make sure standards hold."], ["Refund rate", "the share of sales you had to give money back on."]],
          slides: [
            { title: "Growth can break quality", bullets: ["Rushed work, slow replies", "AI drafts nobody checks"] },
            { title: "Watch three numbers weekly", bullets: ["Review rating", "Reply time", "Redo or refund rate"] },
            { title: "AI and data risks grow too", bullets: ["Which tools hold customer data?", "Who has access?", "A person checks what customers see"] },
            { title: "Your 90-day plan", bullets: ["AI lays it out; you set real numbers", "Review every two weeks"] }
          ],
          tryIt: "Final task: write your one-page 90-day scaling plan: key numbers and targets, bottleneck fix, two systems, the help you will add, one growth test, and three weekly quality checks.",
          youCanNow: "plan and manage growth with AI while protecting quality and customer data.",
          quickCheck: [
            { objective: "O6", q: "Which is a weekly quality number?", options: ["Your favorite color", "Number of social followers", "Redo or refund rate", "Office size"], answer: 2, why: "Redo and refund rates show whether quality is slipping." },
            { objective: "O6", q: "Sales are growing, but complaints doubled this month. What does your plan tell you to do?", options: ["Keep growing faster", "Ignore it until next quarter", "Remove the quality checks", "Find the cause and fix it before adding more customers"], answer: 3, why: "Quality checks exist so growth does not break what customers love." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Grow without breaking",
        questions: [
          { objective: "O4", q: "Which job is best handed to an AI tool?", options: ["Sorting incoming requests", "Building trust with your biggest client", "Hands-on repair work", "Deciding who to hire"], answer: 0, why: "Routine sorting suits AI; judgment and relationships need people." },
          { objective: "O4", q: "Which is one of the IRS's three categories for worker status?", options: ["Phone type", "Favorite color", "Years of school", "Behavioral control"], answer: 3, why: "Behavioral control, financial control and relationship type are the three." },
          { objective: "O5", q: "Before spending more on a growth channel you should:", options: ["Spend your whole budget", "Run a small, measured test", "Copy a competitor", "Skip measuring"], answer: 1, why: "Tests show whether it works before you invest." },
          { objective: "O6", q: "Which is a good weekly quality number?", options: ["Average reply time to customers", "Number of apps you use", "Your logo size", "Your social media bio length"], answer: 0, why: "Reply time shows whether service is slipping." },
          { objective: "O6", q: "As more work runs through AI tools, you should:", options: ["Give every tool all your data", "Stop checking AI work", "Review which tools hold customer data and who can access them", "Remove human checks"], answer: 2, why: "Data and quality risks grow with scale." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Scaling an AI-Powered Business",
    questions: [
      { objective: "O1", q: "Scaling means:", options: ["Raising prices only", "Growing sales faster than costs and effort", "Working more hours", "Buying more tools"], answer: 1, why: "That is the definition used in the course." },
      { objective: "O1", q: "Revenue is:", options: ["Your number of customers", "What is left after costs", "Your tool bill", "All money that comes in from sales"], answer: 3, why: "Revenue is money in." },
      { objective: "O1", q: "Customer acquisition cost is:", options: ["A tax", "Your price", "Your rent", "What you spend on average to get one new customer"], answer: 3, why: "That is the definition." },
      { objective: "O1", q: "Before asking AI to analyze your numbers, you should:", options: ["Add card numbers", "Remove customer names", "Add passwords", "Post them online"], answer: 1, why: "Keep private data out of AI tools." },
      { objective: "O1", q: "A business is ready to scale when:", options: ["It has many apps", "It has a new logo", "Each sale makes a profit and customers return or refer", "Its owner works 80 hours"], answer: 2, why: "Profitable, repeatable sales can grow." },
      { objective: "O2", q: "In a service business, the bottleneck is often:", options: ["The owner's time", "The color of the van", "The website font", "The number of followers"], answer: 0, why: "Owners often do quotes, follow-up and checks themselves." },
      { objective: "O2", q: "The three ways to fix a bottleneck are:", options: ["Raise, lower or freeze prices", "Ignore, hide or delay", "Remove, automate or hand off", "Buy, sell or rent"], answer: 2, why: "These remove the limit." },
      { objective: "O2", q: "Why fix the bottleneck first?", options: ["Speeding up other steps does not help while work piles up there", "It is the cheapest step", "It is the most fun", "AI says so"], answer: 0, why: "The narrowest point limits the whole process." },
      { objective: "O3", q: "A system is:", options: ["A computer brand", "A written, repeatable way of doing a job", "A sales channel", "A tax form"], answer: 1, why: "That is the definition." },
      { objective: "O3", q: "An SOP should include:", options: ["Customer card numbers", "Only a title", "Your passwords", "Steps, a checklist and a quality standard"], answer: 3, why: "These make the job repeatable and checkable." },
      { objective: "O3", q: "In an SOP, you mark AI steps and:", options: ["Where a person must check", "Your favorite songs", "Competitor prices", "Nothing else"], answer: 0, why: "Human checks keep quality." },
      { objective: "O4", q: "Which work needs a person rather than AI?", options: ["Summarizing notes", "Sorting emails", "Drafting a schedule", "Building customer relationships"], answer: 3, why: "Relationships and judgment need people." },
      { objective: "O4", q: "When AI drafts a role description you should:", options: ["Add age limits", "Post it unchanged", "Check it for fair, job-related wording", "Remove the pay range"], answer: 2, why: "Fair wording avoids discrimination problems." },
      { objective: "O4", q: "To ask the IRS to decide a worker's status, either side can file:", options: ["Form 1040-ES", "Form SS-8", "A W-2", "A business plan"], answer: 1, why: "The IRS page names Form SS-8." },
      { objective: "O4", q: "Getting worker status wrong can lead to:", options: ["Nothing", "Free advertising", "Lower costs forever", "Taxes and penalties"], answer: 3, why: "Misclassification has tax consequences." },
      { objective: "O5", q: "Which is a growth channel?", options: ["Your SOP", "Your spreadsheet", "Referrals from customers", "Your bottleneck"], answer: 2, why: "Referrals bring in new customers." },
      { objective: "O5", q: "A good 30-day test has:", options: ["A clear target and a spending limit", "No measures", "Unlimited budget", "No end date"], answer: 0, why: "Targets and limits make tests useful." },
      { objective: "O5", q: "After a growth test, you compare the cost per new customer with:", options: ["Your competitor's logo", "Your key numbers, like customer value", "The weather", "Your phone bill"], answer: 1, why: "A channel is worth it if customers are worth more than they cost." },
      { objective: "O6", q: "Which is a quality number to watch as you grow?", options: ["Number of fonts", "Redo or refund rate", "Office plant count", "Email signature length"], answer: 1, why: "Redos and refunds show quality slipping." },
      { objective: "O6", q: "How often should you review your 90-day plan?", options: ["Every two weeks", "Never", "Once at the end only", "Every hour"], answer: 0, why: "Regular reviews let you adjust." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      11,
      13,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Key numbers",
        objective: "O1",
        notYet: "Fewer than five numbers, no targets, or AI's math not checked.",
        meets: "Five key numbers today with 90-day targets, math checked.",
        exceeds: "Says clearly whether each sale is profitable and why."
      },
      {
        name: "Bottleneck fix",
        objective: "O2",
        notYet: "No bottleneck named, or the fix is vague.",
        meets: "The main bottleneck and one fix: remove, automate or hand off.",
        exceeds: "Shows step times that prove it is the bottleneck."
      },
      {
        name: "Systems",
        objective: "O3",
        notYet: "Fewer than two systems, or missing steps or a quality standard.",
        meets: "Two systems named, each with steps, a checklist and a quality standard.",
        exceeds: "At least one was tested by someone else."
      },
      {
        name: "Help and growth test",
        objective: "O5",
        notYet: "No cost for the help, or the growth test has no target or limit.",
        meets: "The help to add with its cost, and one growth test with a target, measure and limit.",
        exceeds: "Worker status noted with the IRS categories, and a plan to compare cost per new customer."
      },
      {
        name: "Quality checks",
        objective: "O6",
        notYet: "Fewer than three checks, or no review date.",
        meets: "Three weekly quality checks and a review every two weeks.",
        exceeds: "Also includes a check on which AI tools hold customer data."
      }
    ]
  },
  evaluation: {
    results: [
      "Owners who finish the course and pass the final task (rubric)",
      "Owners who complete their bottleneck fix and one growth test within 90 days (follow-up survey)",
      "Change in revenue and profit per sale reported by owners after 90 days",
      "Owners who add help (a person or AI tool) with a written system to follow"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a spreadsheet and a free AI assistant",
      "Six months of sales and cost figures with customer names removed",
      "A one-page 90-day plan template",
      "About 75 minutes for lessons and checks, plus time with the owner's own numbers"
    ],
    facilitatorNotes: [
      "Ask owners to bring six months of numbers before the first session.",
      "Check that customer names are removed before any data goes into AI.",
      "Point worker-status, tax and employment questions to the IRS pages and an accountant or lawyer.",
      "Have owners present their 90-day plan in small groups for feedback.",
      "Score the plan with the rubric, one Not yet row at a time."
    ]
  }
};
