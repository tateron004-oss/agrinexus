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
  chapters: [
    {
      name: "Chapter 1: Designing smart workflows",
      lessons: [
        {
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
          youCanNow: "describe any automation as a trigger plus actions, and say where AI could help."
        },
        {
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
          youCanNow: "map a workflow and decide which steps to automate, which AI can draft and which stay human."
        },
        {
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
          youCanNow: "design an automation with an AI step, a human checkpoint and safe data rules."
        }
      ],
      check: {
        title: "Knowledge Check 1: Designing smart workflows",
        questions: [
          { q: "In \"When a form is submitted, add a row to a spreadsheet\", what is the trigger?", options: ["Add a row", "The spreadsheet", "A form is submitted", "The email"], answer: 2, why: "The trigger is the event that starts it." },
          { q: "What does an AI step add to an automation?", options: ["The ability to read, sort, summarize or draft", "Free electricity", "Automatic payments to anyone", "Nothing"], answer: 0, why: "AI steps handle language tasks like sorting and drafting." },
          { q: "Which step is the best candidate to fully automate?", options: ["Deciding whether to approve someone's housing request", "Comforting an upset client", "Firing an employee", "Copying form answers into a spreadsheet"], answer: 3, why: "Repeated, rule-based copying is ideal to automate." },
          { q: "What does \"human in the loop\" mean?", options: ["A person is stuck in a loop", "A person checks or approves before the automation continues", "The automation runs with no people", "A type of trigger"], answer: 1, why: "It keeps a person in control where mistakes matter." },
          { q: "Which should never pass through an AI step?", options: ["A general request summary", "Customer card numbers", "The word \"Question\"", "Business hours"], answer: 1, why: "Payment details are private and risky." }
        ]
      }
    },
    {
      name: "Chapter 2: Building, testing and running it",
      lessons: [
        {
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
          youCanNow: "build a basic form-to-spreadsheet-to-email automation in no-code tools."
        },
        {
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
          youCanNow: "test an automation with sample data, log results and fix what fails."
        },
        {
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
          youCanNow: "design, build, test and run an AI-powered automation with a person in control."
        }
      ],
      check: {
        title: "Knowledge Check 2: Building, testing and running it",
        questions: [
          { q: "What is the simplest automation you can build with no extra tool?", options: ["A robot arm", "A custom phone app", "A paid server", "Google Forms saving responses to a Google Sheet"], answer: 3, why: "Forms can save responses to a spreadsheet on their own." },
          { q: "When should you add the AI step?", options: ["After the basic flow works", "Before anything else", "Never", "Only on weekends"], answer: 0, why: "Build simple first, then add AI." },
          { q: "What data should you use for testing?", options: ["Real customers' card numbers", "Real patient records", "Made-up sample entries", "Passwords"], answer: 2, why: "Test with sample data to protect real people." },
          { q: "The AI step returns long sentences when you wanted one word. What is the fix?", options: ["Delete the automation", "Ignore it", "Add a second form", "Tighten the prompt: \"Reply with exactly one word\""], answer: 3, why: "Clearer prompts give more predictable AI output." },
          { q: "Why write a one-page instruction sheet?", options: ["To make it slower", "It is required by law", "So someone else can run or turn off the automation", "To share passwords"], answer: 2, why: "It keeps the automation running if the owner leaves." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Automation and Smart Workflows",
    questions: [
      { q: "Automation means:", options: ["Hiring more staff", "Software doing steps for you without a person each time", "Working longer hours", "Buying a robot"], answer: 1, why: "Automations run steps on their own." },
      { q: "An email arriving that starts an automation is a:", options: ["Trigger", "Filter", "Field", "Run history"], answer: 0, why: "The starting event is the trigger." },
      { q: "\"Send a confirmation email\" in an automation is an:", options: ["Trigger", "Prompt", "Action", "Owner"], answer: 2, why: "Actions are what happens after the trigger." },
      { q: "Zapier calls an automation a:", options: ["Zap", "Flow", "Scenario", "Recipe card"], answer: 0, why: "Zapier's term is Zap." },
      { q: "Which task is best left to a person?", options: ["Filing a receipt", "Sending a reminder", "Copying form data", "Deciding whether someone qualifies for help"], answer: 3, why: "Decisions about people need human judgment." },
      { q: "A workflow map lists:", options: ["Only the final result", "Each step, who does it, the tool and the time", "Employee salaries", "Office addresses"], answer: 1, why: "It shows how the task is done today." },
      { q: "\"AI draft plus human check\" fits which step?", options: ["Adding a row to a sheet", "Writing a reply to a customer", "Saving a file", "Starting the automation"], answer: 1, why: "Customer messages should be checked before sending." },
      { q: "A good AI prompt in an automation is:", options: ["Vague, like \"do something\"", "Empty", "A password", "Exact, like \"Reply with one word: Quote, Question or Complaint\""], answer: 3, why: "Exact prompts give predictable output." },
      { q: "Where should you put a human checkpoint?", options: ["Wherever a mistake would hurt, like messages to customers", "Nowhere", "Only at the trigger", "Only after the automation is deleted"], answer: 0, why: "Checkpoints catch costly mistakes." },
      { q: "Data rules in your design say:", options: ["Which font to use", "Who gets a bonus", "What flows, where it is stored and what never goes through AI", "Nothing"], answer: 2, why: "They protect private information." },
      { q: "A form question or box is called a:", options: ["Trigger", "Zap", "Filter", "Field"], answer: 3, why: "Each box is a field." },
      { q: "No-code tools' free plans:", options: ["Are unlimited forever", "Always cost $1,000", "Have limits; check the pricing page", "Do not exist"], answer: 2, why: "Plans change, so check the official pricing page." },
      { q: "Connecting apps in an automation tool means:", options: ["Plugging in cables", "Giving one app permission to work with another", "Sharing your password publicly", "Buying new computers"], answer: 1, why: "Connections are permissions between apps." },
      { q: "How many test cases does the course suggest at minimum?", options: ["Five", "One", "Zero", "Five hundred"], answer: 0, why: "Five cases cover normal and tricky inputs." },
      { q: "Which is a tricky test case?", options: ["A perfectly normal entry only", "No entry at all, never tested", "A form with a blank field", "Your password"], answer: 2, why: "Blank fields often break automations." },
      { q: "A filter in an automation:", options: ["Lets only certain items continue", "Cleans the screen", "Deletes the spreadsheet", "Starts the automation"], answer: 0, why: "Filters control which items move on." },
      { q: "When you first go live, you should:", options: ["Turn it on for everyone and never check", "Delete the test log", "Remove the human checkpoint", "Start small and check results daily"], answer: 3, why: "Starting small limits the damage from problems." },
      { q: "Run history shows:", options: ["Your browsing history", "Each time the automation ran and whether it worked", "Employee hours", "Customer passwords"], answer: 1, why: "It helps you spot failures." },
      { q: "Which is a common reason automations break?", options: ["The sun went down", "A password or field name changed", "Too many happy customers", "The logo changed color"], answer: 1, why: "Changes in connected apps break automations." },
      { q: "Every automation should have:", options: ["No one responsible", "Unlimited access to all data", "A secret location", "An owner who checks error alerts"], answer: 3, why: "An owner keeps it healthy." }
    ]
  }
};
