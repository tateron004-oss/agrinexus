"use strict";

// Koach Learn course (shared): "AI Automation and Smart Workflows". Categories: Small Business, Non Profits, Workforce Development. Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "ai-automation-workflows",
  category: "Small Business",
  name: "AI Automation and Smart Workflows",
  skills: "Mapping a workflow, Spotting automation candidates, Designing trigger-action automations, Adding an AI step, Building and testing an automation, Monitoring and fixing it",
  outcome: "map a repeated task, design an automation with a trigger, actions and an AI step, build it in a no-code tool, test it with sample data, and keep a person in the loop where mistakes would matter.",
  about: [
    "Automation means software does the boring steps for you: copying form answers into a spreadsheet, sending a confirmation email, filing a receipt, reminding someone of a deadline. Adding AI lets the automation also read, sort and write, for example summarizing a request or drafting a reply.",
    "This course is for small business owners, nonprofit staff and volunteers, and workers who want a skill employers value. Examples include a cleaning company handling quote requests, a nonprofit signing up volunteers, and an office assistant processing invoices.",
    "You will map a real task, design the automation on paper, then build it in a no-code tool such as Zapier, Microsoft Power Automate or Make, or with the built-in features of Google Forms and Sheets. Each lesson is about five minutes with a \"Try it now\" task, a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build one working automation for a real or practice organization: for example, a request form that saves each answer to a spreadsheet, uses an AI step to summarize and sort the request, and emails a draft reply to a staff member for approval. Document the workflow map, the trigger and actions, five test runs with results, and who checks the output.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners, office managers and staff, and nonprofit or church coordinators who handle the same forms, emails, sign-ups and reminders every week.",
    startingPoint: "Use email, spreadsheets and online forms, and may have tried an AI assistant. Most have not built an automation or connected two apps, and have no coding experience.",
    gap: "Hours go to copying, filing, reminding and confirming by hand, and things slip through the cracks. Learners need to design and build a safe no-code automation with an AI step, test it, and keep a person in charge where mistakes would hurt, so they save time without sending wrong messages or leaking data.",
    constraints: [
      "Reading level: plain words; no coding",
      "Devices: a computer is needed to build the automation",
      "Cost: free plans and trials have limits; tools and prices change, so learners check each pricing page",
      "Privacy: no card numbers, Social Security numbers, health details or passwords through an AI step; test with made-up data only",
      "Time: 5 minute lessons, about 60 minutes in total plus build and test time"
    ],
    prerequisites: "None. Comfort with Google Forms or Microsoft Forms and a spreadsheet helps."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an everyday automation", action: "identify its trigger, its actions and where an AI step fits", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "For a task done at least weekly", action: "map each step with who, which tool and how long, and mark each step automate, AI draft plus human check, or keep human", standard: "with an estimate of time saved each week" },
    { id: "O3", condition: "Before using any tool", action: "write an automation design with the trigger, actions, AI prompt, human checkpoints and data rules", standard: "with a human approval wherever a mistake would hurt" },
    { id: "O4", condition: "Using a form, a spreadsheet and a no-code tool", action: "build an automation that saves responses, runs an AI step and sends a draft for approval", standard: "so the basic flow works before the AI step is added" },
    { id: "O5", condition: "Given your built automation", action: "test it with five sample entries, including tricky ones, and fix what breaks", standard: "using only made-up data, with every failure fixed and re-tested" },
    { id: "O6", condition: "When the automation goes live", action: "monitor the run history, set an error alert, name an owner and write a one-page instruction sheet", standard: "so someone else could run or turn it off" }
  ],
  chapters: [
    {
      name: "Chapter 1: Designing smart workflows",
      lessons: [
        {
          objectives: ["O1"],
          title: "What automation and AI workflows are",
          minutes: 4,
          goal: "Explain triggers, actions and where an AI step fits.",
          text: [
            "Every automation has the same shape. A trigger is the event that starts it: a form is submitted, an email arrives, a date comes. Actions are what happens next: add a row to a spreadsheet, send an email, create a task.",
            "Plain automation follows fixed rules: if a form arrives, copy it to the sheet. An AI step adds judgment-like work: read a message and decide if it is a complaint, a question or a sales lead; summarize it in two sentences; draft a polite reply.",
            "Different tools use different names. Zapier calls an automation a Zap, Power Automate calls it a flow, and Make calls it a scenario. The idea is the same: when this happens, do that."
          ],
          words: [["Automation", "software doing steps for you without a person each time."], ["Trigger", "the event that starts an automation."], ["Action", "a step the automation does after the trigger."], ["Workflow", "the series of steps used to get a task done."]],
          slides: [
            { title: "When this happens, do that", bullets: ["Trigger: the event that starts it", "Actions: what happens next"] },
            { title: "Adding an AI step", bullets: ["Sort: complaint, question or lead", "Summarize in two sentences", "Draft a reply for a person to check"] },
            { title: "Same idea, different names", bullets: ["Zapier: Zap", "Power Automate: flow", "Make: scenario"] }
          ],
          tryIt: "Write three \"when this happens, do that\" automations you wish you had at work, home or a group you belong to. Circle the one that could use an AI step.",
          youCanNow: "describe any automation as a trigger plus actions, and say where AI could help.",
          quickCheck: [
            { objective: "O1", q: "What does Power Automate call an automation?", options: ["A Zap", "A scenario", "A flow", "A macro"], answer: 2, why: "Power Automate calls it a flow; Zapier calls it a Zap and Make calls it a scenario." },
            { objective: "O1", q: "You want each new message sorted as a complaint, question or sales lead. Which part does that?", options: ["An AI step", "The trigger", "A spreadsheet row", "The email address"], answer: 0, why: "Reading a message and sorting it is judgment-like work for an AI step." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Mapping a workflow and finding what to automate",
          minutes: 5,
          goal: "Map a repeated task step by step and pick the steps to automate.",
          text: [
            "Before you build, map the task as it is done today. Write each step, who does it, which tool they use and how long it takes. A volunteer sign-up might be: read the email, copy details to a spreadsheet, check the schedule, send a welcome email, add a calendar reminder.",
            "Good steps to automate are repeated, rule-based and boring: copying, filing, reminding, confirming. Steps that need judgment, kindness or a decision about someone's life should stay with a person, or use AI only to draft.",
            "Mark each step: automate, AI draft with human check, or keep human. That marked map is your design."
          ],
          steps: ["Pick a task done at least weekly.", "Write each step in order, with who, which tool and how long.", "Mark each step: automate, AI draft plus human check, or keep human.", "Estimate the time saved each week."],
          words: [["Workflow map", "a step-by-step list or drawing of how a task gets done."], ["Human in the loop", "a person checks or approves before the automation continues."]],
          slides: [
            { title: "Map it first", bullets: ["Each step in order", "Who, which tool, how long"] },
            { title: "Good to automate", bullets: ["Copying and filing", "Reminders and confirmations", "Repeated, rule-based steps"] },
            { title: "Mark every step", bullets: ["Automate", "AI draft plus human check", "Keep human"] }
          ],
          tryIt: "Map one repeated task with at least five steps. Mark each step automate, AI draft plus human check, or keep human, and estimate weekly time saved.",
          youCanNow: "map a workflow and decide which steps to automate, which AI can draft and which stay human.",
          quickCheck: [
            { objective: "O2", q: "Which step is a good candidate to fully automate?", options: ["Deciding who gets a scholarship", "Comforting an upset volunteer", "Choosing a new staff member", "Adding a calendar reminder after sign-up"], answer: 3, why: "Repeated, rule-based steps like reminders are good to automate." },
            { objective: "O2", q: "Your map includes \"reply to a family asking for help with rent\". How do you mark it?", options: ["Fully automate", "AI draft plus human check, or keep human", "Delete the step", "Send no reply"], answer: 1, why: "Steps that need kindness or affect someone's life stay with a person, or AI only drafts." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Designing the automation on paper",
          minutes: 5,
          goal: "Write a full automation design: trigger, actions, AI prompt, checks and data rules.",
          text: [
            "Design on paper before touching a tool. Write the trigger, each action in order, and the exact AI prompt if there is an AI step, for example: \"Read this request. Reply with one word: Quote, Question or Complaint. Then write a two-sentence summary.\"",
            "Add a human checkpoint wherever a mistake would hurt: anything sent to a customer, money moved, or a decision about a person. The automation can draft and then wait for approval.",
            "Write data rules: what information flows through the automation, where it is stored, and what must never pass through an AI step, such as card numbers, Social Security numbers, health details or passwords. Check what each connected tool does with your data."
          ],
          steps: ["Write the trigger.", "List each action in order.", "Write the exact AI prompt for any AI step.", "Add a human approval where mistakes would hurt.", "Write the data rules: what flows, where it is stored, what never goes through AI."],
          words: [["Prompt", "the instruction you give an AI step."], ["Checkpoint", "a point where a person reviews before the automation continues."]],
          slides: [
            { title: "Design before you build", bullets: ["Trigger and actions in order", "The exact AI prompt"] },
            { title: "Human checkpoints", bullets: ["Anything sent to customers", "Money moved", "Decisions about people"] },
            { title: "Data rules", bullets: ["What flows and where it is stored", "Never card, SSN, health data or passwords through AI"] }
          ],
          tryIt: "Write a one-page design for your automation: trigger, actions, AI prompt, human checkpoint and data rules.",
          youCanNow: "design an automation with an AI step, a human checkpoint and safe data rules.",
          quickCheck: [
            { objective: "O3", q: "What do data rules in a design say?", options: ["Which font the email uses", "What flows, where it is stored and what never goes through AI", "How fast the computer is", "Who designed the logo"], answer: 1, why: "Data rules cover what information flows, where it is stored and what never passes through AI." },
            { objective: "O3", q: "Your automation will send replies to customers. Where do you add a human checkpoint?", options: ["Nowhere; it saves time", "Only once a year", "After the reply is sent", "Before the reply is sent, so a person approves the draft"], answer: 3, why: "Anything sent to a customer should wait for a person's approval." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Designing smart workflows",
        questions: [
          { objective: "O1", q: "In \"When a form is submitted, add a row to a spreadsheet\", what is the trigger?", options: ["Add a row", "The spreadsheet", "A form is submitted", "The email"], answer: 2, why: "The trigger is the event that starts it." },
          { objective: "O1", q: "What does an AI step add to an automation?", options: ["The ability to read, sort, summarize or draft", "Free electricity", "Automatic payments to anyone", "Nothing"], answer: 0, why: "AI steps handle language tasks like sorting and drafting." },
          { objective: "O2", q: "Which step is the best candidate to fully automate?", options: ["Deciding whether to approve someone's housing request", "Comforting an upset client", "Firing an employee", "Copying form answers into a spreadsheet"], answer: 3, why: "Repeated, rule-based copying is ideal to automate." },
          { objective: "O3", q: "What does \"human in the loop\" mean?", options: ["A person is stuck in a loop", "A person checks or approves before the automation continues", "The automation runs with no people", "A type of trigger"], answer: 1, why: "It keeps a person in control where mistakes matter." },
          { objective: "O3", q: "Which should never pass through an AI step?", options: ["A general request summary", "Customer card numbers", "The word \"Question\"", "Business hours"], answer: 1, why: "Payment details are private and risky." }
        ]
      }
    },
    {
      name: "Chapter 2: Building, testing and running it",
      lessons: [
        {
          objectives: ["O4"],
          title: "Building your first automation",
          minutes: 6,
          goal: "Build a simple automation from a form to a spreadsheet to an email.",
          text: [
            "Start with the simplest version that works. Google Forms can save every response to a Google Sheet without any extra tool, and Microsoft Forms can send responses to Excel. That alone is an automation.",
            "To add actions, use a no-code tool such as Zapier, Power Automate or Make. Most have free plans or trials with limits; check each tool's pricing page, since plans change. Connect your accounts, choose the trigger (new form response or new spreadsheet row), then add actions (send an email, create a task).",
            "Add the AI step last, once the basic flow works. Many tools have a built-in AI action or connect to an AI service. Paste in the prompt from your design and send its result to the next action, such as a draft email that waits for a person to approve."
          ],
          steps: ["Make a form with the fields you need.", "Link it to a spreadsheet.", "In a no-code tool, set the trigger: new response or new row.", "Add an action: send an email or create a task.", "Add the AI step with your prompt, sending its result to a draft for approval."],
          words: [["No-code tool", "software that lets you build without writing code."], ["Connect", "give one app permission to work with another."], ["Field", "one question or box in a form."]],
          slides: [
            { title: "Start simple", bullets: ["Google Forms saves to Sheets", "Microsoft Forms can send to Excel"] },
            { title: "Add actions", bullets: ["Zapier, Power Automate or Make", "Free plans and trials have limits", "Check each pricing page"] },
            { title: "Add AI last", bullets: ["Once the basic flow works", "Paste your prompt", "Result goes to a draft for approval"] }
          ],
          sources: [{ name: "Zapier", url: "https://zapier.com/" }, { name: "Microsoft Power Automate", url: "https://www.microsoft.com/power-platform/products/power-automate" }, { name: "Make", url: "https://www.make.com/" }],
          tryIt: "Build the first part of your automation: a form linked to a spreadsheet. If you can, add one action in a no-code tool, such as an email to yourself for each new response.",
          youCanNow: "build a basic form-to-spreadsheet-to-email automation in no-code tools.",
          quickCheck: [
            { objective: "O4", q: "Which simple setup is already an automation with no extra tool?", options: ["Microsoft Forms sending responses to Excel", "Typing form answers into a sheet by hand", "Printing each response", "Reading responses on your phone"], answer: 0, why: "Microsoft Forms can send responses to Excel automatically." },
            { objective: "O4", q: "Your basic form-to-email flow works. What do you add next?", options: ["Five more apps at once", "Real customer card numbers", "The AI step with the prompt from your design", "Nothing; delete the flow"], answer: 2, why: "Add the AI step last, once the basic flow works." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Testing with sample data",
          minutes: 5,
          goal: "Test an automation with normal and tricky sample entries and fix what breaks.",
          text: [
            "Never turn on an automation for real people until it passes tests. Use made-up sample entries, not real customer data.",
            "Test five cases: a normal entry, a blank field, a very long message, a misspelled or unusual entry, and one the AI step might sort wrongly. Check each step: did the row appear, did the email go to the right place, did the AI sort and summarize correctly?",
            "Write a test log: input, expected result, actual result, pass or fail, fix. Common fixes: make a form field required, tighten the AI prompt (\"Reply with exactly one word\"), or add a filter so only certain entries continue."
          ],
          steps: ["Write five sample entries, including tricky ones.", "Run each through the automation.", "Check every step's result.", "Record pass or fail in a test log.", "Fix and re-test the failures."],
          words: [["Test case", "one sample input used to check that something works."], ["Filter", "a rule that lets only certain items continue in an automation."]],
          slides: [
            { title: "Test before going live", bullets: ["Made-up sample data only", "Never real customer data for tests"] },
            { title: "Five test cases", bullets: ["Normal, blank field, very long", "Misspelled or unusual", "One the AI might sort wrongly"] },
            { title: "Log and fix", bullets: ["Required fields and filters", "Tighter AI prompts", "Re-test after each fix"] }
          ],
          tryIt: "Run five sample entries through your automation, including at least two tricky ones. Record a test log and fix one problem.",
          youCanNow: "test an automation with sample data, log results and fix what fails.",
          quickCheck: [
            { objective: "O5", q: "What goes in an automation test log?", options: ["Customers' real details", "Only the tests that passed", "The tool's price", "Input, expected result, actual result, pass or fail, and fix"], answer: 3, why: "A test log records what went in, what should happen, what did, and the fix." },
            { objective: "O5", q: "A test entry with a blank email field breaks the flow. What is a common fix?", options: ["Make the email field required on the form", "Turn the automation on anyway", "Remove the email step", "Use real customer data to test"], answer: 0, why: "Making the field required stops blank entries from breaking the flow." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Running, monitoring and improving",
          minutes: 5,
          goal: "Turn the automation on safely, watch it, and know what to do when it fails.",
          text: [
            "Turn it on for a small group first, such as one form or one week. Check the results daily at the start. Most tools show a run history that lists each run and whether it succeeded.",
            "Automations break: a password changes, a field gets renamed, a free plan hits its limit, or the AI step starts sorting oddly. Set up an error alert to your email, and name an owner who checks it.",
            "Write a one-page instruction sheet: what the automation does, where it lives, who owns it and how to turn it off. If the owner leaves, someone else can keep it running. Review it every few months and ask: is it still saving time?"
          ],
          steps: ["Turn it on for a small group or one week.", "Check the run history daily at first.", "Set an error alert and name an owner.", "Write a one-page instruction sheet.", "Review every few months."],
          words: [["Run history", "a list of each time an automation ran and whether it worked."], ["Error alert", "a message telling you an automation failed."]],
          slides: [
            { title: "Go live small", bullets: ["One form or one week", "Check results daily at first"] },
            { title: "Why automations break", bullets: ["Passwords or field names change", "Plan limits are reached", "AI sorting drifts"] },
            { title: "Keep it healthy", bullets: ["Error alerts and an owner", "One-page instruction sheet", "Review every few months"] }
          ],
          tryIt: "Final task: finish your automation with its AI step and human approval, run five test entries, then write the one-page instruction sheet with the workflow map, trigger and actions, test results and owner.",
          youCanNow: "design, build, test and run an AI-powered automation with a person in control.",
          quickCheck: [
            { objective: "O6", q: "What does an error alert do?", options: ["Speeds up the automation", "Emails the owner when a run fails", "Deletes old runs", "Changes your password"], answer: 1, why: "An error alert tells the owner right away when something breaks." },
            { objective: "O6", q: "The person who built your automation is leaving. What keeps it running?", options: ["Hoping nothing breaks", "Turning it off for good", "A one-page instruction sheet and a new owner who checks alerts", "Changing all the passwords and telling no one"], answer: 2, why: "The instruction sheet and a named owner let someone else run or turn it off." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Building, testing and running it",
        questions: [
          { objective: "O4", q: "What is the simplest automation you can build with no extra tool?", options: ["A robot arm", "A custom phone app", "A paid server", "Google Forms saving responses to a Google Sheet"], answer: 3, why: "Forms can save responses to a spreadsheet on their own." },
          { objective: "O4", q: "When should you add the AI step?", options: ["After the basic flow works", "Before anything else", "Never", "Only on weekends"], answer: 0, why: "Build simple first, then add AI." },
          { objective: "O5", q: "What data should you use for testing?", options: ["Real customers' card numbers", "Real patient records", "Made-up sample entries", "Passwords"], answer: 2, why: "Test with sample data to protect real people." },
          { objective: "O5", q: "The AI step returns long sentences when you wanted one word. What is the fix?", options: ["Delete the automation", "Ignore it", "Add a second form", "Tighten the prompt: \"Reply with exactly one word\""], answer: 3, why: "Clearer prompts give more predictable AI output." },
          { objective: "O6", q: "Why write a one-page instruction sheet?", options: ["To make it slower", "It is required by law", "So someone else can run or turn off the automation", "To share passwords"], answer: 2, why: "It keeps the automation running if the owner leaves." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Automation and Smart Workflows",
    questions: [
      { objective: "O1", q: "Automation means:", options: ["Hiring more staff", "Software doing steps for you without a person each time", "Working longer hours", "Buying a robot"], answer: 1, why: "Automations run steps on their own." },
      { objective: "O1", q: "An email arriving that starts an automation is a:", options: ["Trigger", "Filter", "Field", "Run history"], answer: 0, why: "The starting event is the trigger." },
      { objective: "O1", q: "\"Send a confirmation email\" in an automation is an:", options: ["Trigger", "Prompt", "Action", "Owner"], answer: 2, why: "Actions are what happens after the trigger." },
      { objective: "O1", q: "Zapier calls an automation a:", options: ["Zap", "Flow", "Scenario", "Recipe card"], answer: 0, why: "Zapier's term is Zap." },
      { objective: "O2", q: "Which task is best left to a person?", options: ["Filing a receipt", "Sending a reminder", "Copying form data", "Deciding whether someone qualifies for help"], answer: 3, why: "Decisions about people need human judgment." },
      { objective: "O2", q: "A workflow map lists:", options: ["Only the final result", "Each step, who does it, the tool and the time", "Employee salaries", "Office addresses"], answer: 1, why: "It shows how the task is done today." },
      { objective: "O2", q: "\"AI draft plus human check\" fits which step?", options: ["Adding a row to a sheet", "Writing a reply to a customer", "Saving a file", "Starting the automation"], answer: 1, why: "Customer messages should be checked before sending." },
      { objective: "O3", q: "A good AI prompt in an automation is:", options: ["Vague, like \"do something\"", "Empty", "A password", "Exact, like \"Reply with one word: Quote, Question or Complaint\""], answer: 3, why: "Exact prompts give predictable output." },
      { objective: "O3", q: "Where should you put a human checkpoint?", options: ["Wherever a mistake would hurt, like messages to customers", "Nowhere", "Only at the trigger", "Only after the automation is deleted"], answer: 0, why: "Checkpoints catch costly mistakes." },
      { objective: "O3", q: "Data rules in your design say:", options: ["Which font to use", "Who gets a bonus", "What flows, where it is stored and what never goes through AI", "Nothing"], answer: 2, why: "They protect private information." },
      { objective: "O4", q: "A form question or box is called a:", options: ["Trigger", "Zap", "Filter", "Field"], answer: 3, why: "Each box is a field." },
      { objective: "O4", q: "No-code tools' free plans:", options: ["Are unlimited forever", "Always cost $1,000", "Have limits; check the pricing page", "Do not exist"], answer: 2, why: "Plans change, so check the official pricing page." },
      { objective: "O4", q: "Connecting apps in an automation tool means:", options: ["Plugging in cables", "Giving one app permission to work with another", "Sharing your password publicly", "Buying new computers"], answer: 1, why: "Connections are permissions between apps." },
      { objective: "O5", q: "How many test cases does the course suggest at minimum?", options: ["Five", "One", "Zero", "Five hundred"], answer: 0, why: "Five cases cover normal and tricky inputs." },
      { objective: "O5", q: "Which is a tricky test case?", options: ["A perfectly normal entry only", "No entry at all, never tested", "A form with a blank field", "Your password"], answer: 2, why: "Blank fields often break automations." },
      { objective: "O5", q: "A filter in an automation:", options: ["Lets only certain items continue", "Cleans the screen", "Deletes the spreadsheet", "Starts the automation"], answer: 0, why: "Filters control which items move on." },
      { objective: "O6", q: "When you first go live, you should:", options: ["Turn it on for everyone and never check", "Delete the test log", "Remove the human checkpoint", "Start small and check results daily"], answer: 3, why: "Starting small limits the damage from problems." },
      { objective: "O6", q: "Run history shows:", options: ["Your browsing history", "Each time the automation ran and whether it worked", "Employee hours", "Customer passwords"], answer: 1, why: "It helps you spot failures." },
      { objective: "O6", q: "Which is a common reason automations break?", options: ["The sun went down", "A password or field name changed", "Too many happy customers", "The logo changed color"], answer: 1, why: "Changes in connected apps break automations." },
      { objective: "O6", q: "Every automation should have:", options: ["No one responsible", "Unlimited access to all data", "A secret location", "An owner who checks error alerts"], answer: 3, why: "An owner keeps it healthy." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      2,
      4,
      6,
      8,
      9,
      11,
      14,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Workflow map",
        objective: "O2",
        notYet: "Steps are missing, or no step is marked.",
        meets: "Each step with who, tool and time, marked automate, AI draft plus human check, or keep human.",
        exceeds: "Includes an estimate of time saved each week."
      },
      {
        name: "Trigger, actions and AI step",
        objective: "O4",
        notYet: "The automation does not run from its trigger, or the AI step is missing.",
        meets: "A working trigger, actions in order and an AI step that summarizes and sorts the request.",
        exceeds: "Uses a filter or a tight one-word prompt so results are consistent."
      },
      {
        name: "Human check and data rules",
        objective: "O3",
        notYet: "Replies go out with no approval, or private data passes through the AI step.",
        meets: "A person approves the draft reply, and data rules say what never goes through AI.",
        exceeds: "Notes what each connected tool does with the data."
      },
      {
        name: "Five test runs",
        objective: "O5",
        notYet: "Fewer than five tests, real data used, or failures not fixed.",
        meets: "Five made-up test entries, including tricky ones, logged with pass or fail and fixes.",
        exceeds: "Every failure was re-tested and passed."
      },
      {
        name: "Owner and instructions",
        objective: "O6",
        notYet: "No named owner or instructions.",
        meets: "A named owner, an error alert and a one-page instruction sheet.",
        exceeds: "The sheet says how to turn it off and when it will be reviewed."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Automations still running and owned 60 days later (follow-up survey)",
      "Hours per week saved on the automated task, as reported by the organization",
      "Organizations that report no wrong messages sent or private data exposed by the automation"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet",
      "Google Forms and Sheets, or Microsoft Forms and Excel",
      "A no-code automation tool such as Zapier, Power Automate or Make (check the current free plan limits)",
      "Paper or a document for the workflow map, design and test log",
      "About 60 minutes for lessons and checks, plus time to build and test"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then do one chapter per session; build a form-to-sheet flow live on a shared screen.",
      "Have learners design on paper and get a partner's review before they open any tool.",
      "Use only made-up sample entries for testing; never real customer, client or donor data.",
      "Check that every automation that sends messages to people has a human approval step.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
