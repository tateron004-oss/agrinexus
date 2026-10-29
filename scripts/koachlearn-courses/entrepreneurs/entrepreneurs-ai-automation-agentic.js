"use strict";

// Koach Learn course: Entrepreneurs -> "AI Automation and Agentic Workflows". Skill-building course in the shape of re-entry/reentry-ai-digital-confidence.js (see scripts/koachlearn-courses/README.md).

module.exports = {
  id: "entrepreneurs-ai-automation-agentic",
  category: "Entrepreneurs",
  name: "AI Automation and Agentic Workflows",
  skills: "Mapping a workflow, Trigger and action thinking, Building a no-code automation, Adding an AI step, Setting guardrails for AI agents, Monitoring and fixing automations",
  outcome: "map one repeated business process, build a working no-code automation for it with an AI step, add a human approval guardrail, and test and monitor it so it fails safely.",
  about: [
    "Automation means a computer does a repeated job for you when something happens: a form is filled in, an email arrives, an order is paid. AI adds the ability to read, sort and write as part of that job. \"Agentic\" tools go further: you give them a goal and they plan and take several steps on their own.",
    "This course is for business owners who want to stop copying and pasting the same information all day. You will map a process, learn trigger-and-action thinking, build a real automation with a no-code tool (such as Zapier, Make or Microsoft Power Automate), add an AI step, and set guardrails so nothing important happens without your approval.",
    "Each lesson takes about five minutes with a hands-on task. There is a knowledge check after each chapter and a 20-question quiz at the end. Tool features and free-plan limits change often, so check each tool's own pricing and help pages."
  ],
  finalTask: "Build and test one automation for your business, for example: when a customer fills in your inquiry form, add their request to a spreadsheet, have AI draft a reply, and send the draft to you for approval before anything goes to the customer. Write a one-page record: the workflow map, the trigger and actions, the AI instruction, the approval step, three test results and what you will check each week.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Small business owners who spend hours copying the same information between forms, email and spreadsheets and want a computer to do it for them.",
    startingPoint: "Use online forms, email and spreadsheets, and have used an AI assistant. Few have built an automation or thought about what an AI agent should and should not do alone.",
    gap: "Repeated copying wastes hours and causes mistakes, but automations and agents that act without limits can send wrong replies, spend money or leak customer data. Owners need to build one small automation with an AI step, an approval guardrail, tests and a weekly check, so it saves time and fails safely.",
    constraints: [
      "No coding; plain words and a no-code tool's free plan",
      "Devices: a computer with a form tool, a spreadsheet and email",
      "Time: about five minutes per lesson plus building and testing",
      "Tool features and free-plan limits change often; check each tool's own pricing and help pages",
      "Test with made-up data, and keep card numbers and other private data out of AI steps"
    ],
    prerequisites: "\"AI Tools Every Entrepreneur Should Know\", or comfort with online forms and spreadsheets."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a process you repeat every week", action: "map it as steps from start to finish, marking each as copying, decision or writing", standard: "with anything AI got wrong corrected" },
    { id: "O2", condition: "Given your workflow map", action: "write the workflow as a trigger and a list of actions", standard: "with the AI action and the approval step marked" },
    { id: "O3", condition: "Using a no-code tool's free plan", action: "build an automation that moves form answers into a spreadsheet and notifies you", standard: "tested with made-up data and working" },
    { id: "O4", condition: "Given your working automation", action: "add an AI step that drafts a reply or sorts a request and sends it to you", standard: "with clear rules, tested on three different requests and no private data passing through" },
    { id: "O5", condition: "For your automation or any AI agent", action: "write a guardrail list of what it may do alone and what always needs your approval", standard: "with sending to customers and spending money always needing approval" },
    { id: "O6", condition: "Before and after switching your automation on", action: "test it with odd inputs, turn on failure alerts and plan a weekly check", standard: "so it stops and alerts you when something goes wrong" }
  ],
  chapters: [
    {
      name: "Chapter 1: Think in workflows",
      lessons: [
        {
          objectives: ["O1"],
          title: "Mapping a process you repeat",
          minutes: 5,
          goal: "Draw a repeated business process as a list of steps from start to finish.",
          text: [
            "Before you automate anything, write it down. A workflow is the steps a piece of work goes through from start to finish. Example, a new customer inquiry: the form arrives, you copy the details into a spreadsheet, you write a reply, you add a follow-up reminder.",
            "Pick a process that happens often, follows the same steps each time, and wastes your time with copying, pasting or retyping. Those are the best ones to automate.",
            "AI can help you map it. Describe what you do in your own words and ask: \"Turn this into a numbered workflow. Mark which steps are copying information, which need a decision, and which need writing.\""
          ],
          steps: ["Choose a process you do at least weekly.", "Describe it to an AI assistant in your own words.", "Ask for a numbered workflow, marking copying, decision and writing steps.", "Check the map against what you really do and fix it."],
          words: [["Workflow", "the steps a piece of work goes through from start to finish."], ["Automate", "set a computer to do a repeated job without you doing each step."]],
          slides: [
            { title: "Write it down first", bullets: ["A workflow = the steps from start to finish", "Example: form, spreadsheet, reply, reminder"] },
            { title: "Best processes to automate", bullets: ["Happen often", "Same steps every time", "Lots of copying and retyping"] },
            { title: "Map it with AI", bullets: ["Describe what you do", "Ask for numbered steps", "Mark copying, decision and writing steps"] }
          ],
          tryIt: "Map one process you repeat weekly with AI's help. Mark each step as copying, decision or writing, and correct anything AI got wrong.",
          youCanNow: "map a repeated business process as clear steps.",
          quickCheck: [
            { objective: "O1", q: "What is a workflow?", options: ["The steps work goes through from start to finish", "A type of spreadsheet", "A customer complaint", "An AI app"], answer: 0, why: "A workflow lists each step of a process in order." },
            { objective: "O1", q: "AI's map of your order process leaves out the step where you check stock. What do you do?", options: ["Use the map as it is", "Add the missing step yourself", "Start automating anyway", "Delete the whole map"], answer: 1, why: "You know your process best, so you correct AI's map." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Triggers and actions",
          minutes: 5,
          goal: "Turn your workflow map into a trigger and a list of actions.",
          text: [
            "Every automation has one trigger and one or more actions. The trigger is the event that starts it: \"a new form response\", \"a new email with the word invoice\", \"a new paid order\". The actions are what happens next: \"add a row to a spreadsheet\", \"send me a message\", \"create a calendar event\".",
            "Copying steps become actions easily. Writing steps can become AI actions. Decision steps usually stay with you, or become an approval step where the automation waits for your yes.",
            "No-code tools such as Zapier, Make and Microsoft Power Automate connect apps you already use with triggers and actions. Most have free plans with limits; check each tool's pricing page for what is included today."
          ],
          steps: ["Find the event that starts your workflow: that is the trigger.", "Turn each copying step into an action.", "Turn writing steps into AI actions.", "Turn decision steps into an approval step or keep them manual.", "Write it as: When [trigger], then [action 1], [action 2]..."],
          words: [["Trigger", "the event that starts an automation."], ["Action", "a step the automation does after the trigger."], ["No-code tool", "a tool that lets you build automations by clicking and choosing, not programming."]],
          slides: [
            { title: "One trigger, some actions", bullets: ["Trigger: the event that starts it", "Actions: what happens next"] },
            { title: "Turn steps into actions", bullets: ["Copying steps: easy actions", "Writing steps: AI actions", "Decisions: an approval step or you"] },
            { title: "No-code tools", bullets: ["Zapier, Make, Microsoft Power Automate", "Connect apps you already use", "Check free-plan limits on their sites"] }
          ],
          sources: [{ name: "Zapier: Pricing", url: "https://zapier.com/pricing" }, { name: "Make: Pricing", url: "https://www.make.com/en/pricing" }],
          tryIt: "Write your workflow as \"When [trigger], then [actions]\". Mark which action is AI and where you want an approval step.",
          youCanNow: "describe any automation as a trigger plus actions, with decisions kept under your control.",
          quickCheck: [
            { objective: "O2", q: "In \"When a payment arrives, send a receipt\", what is the action?", options: ["A payment arrives", "The customer", "Send a receipt", "The bank"], answer: 2, why: "The action is what happens after the trigger." },
            { objective: "O2", q: "One step in your workflow is deciding whether to give a refund. How do you handle it?", options: ["Let the automation decide", "Let AI decide", "Remove the step", "Keep it as an approval step for you"], answer: 3, why: "Decision steps become approvals or stay with you." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Building your first no-code automation",
          minutes: 6,
          goal: "Build a working automation that moves form answers into a spreadsheet and notifies you.",
          text: [
            "Start with a simple, safe automation: when someone fills in your inquiry form (for example a Google Form or Microsoft Form), add their answers to a spreadsheet and send you a notification. Nothing goes to the customer yet.",
            "In your no-code tool, create a new automation, choose the form app as the trigger, connect your account, and pick the form. Then add an action for the spreadsheet, and match each form question to a column. Add a second action to email or message you.",
            "Test it with a fake inquiry using a made-up name like \"Test Customer\". Check that the row appears in the right columns and that you got the message. Only then turn it on."
          ],
          steps: ["Make a short inquiry form with name, email and request.", "In the no-code tool, choose the form as the trigger.", "Add a spreadsheet action and match questions to columns.", "Add an action to notify you.", "Test with \"Test Customer\" data, check results, then turn it on."],
          words: [["Connect an account", "give the automation tool permission to use one of your apps."], ["Field mapping", "matching each piece of information to where it should go, like a form question to a spreadsheet column."]],
          slides: [
            { title: "Start simple and safe", bullets: ["Form answers into a spreadsheet", "A notification to you", "Nothing goes to the customer yet"] },
            { title: "Build it", bullets: ["Trigger: new form response", "Action: add spreadsheet row, map fields", "Action: notify you"] },
            { title: "Test before turning on", bullets: ["Use \"Test Customer\" data", "Check columns and the notification", "Then switch it on"] }
          ],
          tryIt: "Build the form-to-spreadsheet-plus-notification automation in a no-code tool's free plan. Test it with made-up data and confirm it works.",
          youCanNow: "build and test a simple no-code automation between apps you use.",
          quickCheck: [
            { objective: "O3", q: "What is field mapping in a no-code tool?", options: ["Matching each piece of information to where it goes", "Drawing a map of your shop", "Choosing a font", "Paying for a plan"], answer: 0, why: "Field mapping sends each answer to the right column." },
            { objective: "O3", q: "Your automation is built. What do you do before switching it on?", options: ["Send it to all customers", "Test it with made-up data like \"Test Customer\"", "Delete the form", "Skip testing to save time"], answer: 1, why: "Testing with made-up data finds problems without risk." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Think in workflows",
        questions: [
          { objective: "O1", q: "Which process is best to automate first?", options: ["A one-time legal decision", "One that happens often with the same steps and lots of copying", "Something you do once a year", "Hiring your first employee"], answer: 1, why: "Frequent, repeated copying work saves the most time." },
          { objective: "O2", q: "In \"When a new form response arrives, add a spreadsheet row\", what is the trigger?", options: ["Your email", "Add a spreadsheet row", "The spreadsheet", "A new form response arrives"], answer: 3, why: "The trigger is the event that starts the automation." },
          { objective: "O2", q: "What usually happens to decision steps in an automation?", options: ["They become an approval step or stay with you", "The tool guesses", "They are deleted", "The customer decides"], answer: 0, why: "Decisions need your judgment." },
          { objective: "O3", q: "What is field mapping?", options: ["Choosing a font", "Drawing a farm map", "Matching each piece of information to where it goes", "Paying a bill"], answer: 2, why: "It connects form questions to spreadsheet columns." },
          { objective: "O3", q: "What data should you use to test a new automation?", options: ["Your password", "A real customer's card number", "Made-up test data like \"Test Customer\"", "No test at all"], answer: 2, why: "Fake data lets you test safely." }
        ]
      }
    },
    {
      name: "Chapter 2: Add AI and keep control",
      lessons: [
        {
          objectives: ["O4"],
          title: "Adding an AI step",
          minutes: 5,
          goal: "Add an AI action that drafts a reply or sorts a request.",
          text: [
            "Many no-code tools let you add an AI action: send text to an AI model with an instruction and get its answer back as part of the automation. Common uses: sort an inquiry into a category, pull out key details, or draft a reply. On some tools the AI step is only on paid plans (when checked in October 2026, Zapier's AI steps needed a paid plan); check the pricing page. If yours is not included, have the automation send you the request and paste it into a free chat assistant yourself.",
            "Write the AI instruction carefully, like a reusable prompt: \"Read this customer request. Reply in under 100 words, friendly and clear. Only use the business details given here: [hours, services]. Never quote a price. If unsure, write [CHECK].\"",
            "Send the AI's draft to YOU, not to the customer. Think about what customer information passes to the AI service; check the tool's data and privacy terms, and do not send card numbers, ID numbers or health details through it."
          ],
          steps: ["Add an AI action after the spreadsheet step.", "Write a careful instruction with rules and your business facts.", "Pass in only the request text the AI needs.", "Send the AI's draft to yourself for review.", "Test with three different made-up requests."],
          words: [["AI action", "a step in an automation that sends text to an AI and uses its answer."], ["Data terms", "the rules for how a tool stores and uses the information you send it."]],
          slides: [
            { title: "What an AI step can do", bullets: ["Sort a request into a category", "Pull out key details", "Draft a reply", "May need a paid plan: check the pricing page"] },
            { title: "A careful instruction", bullets: ["Length and tone", "Only use the facts given", "Never quote prices; mark [CHECK] if unsure"] },
            { title: "Keep it safe", bullets: ["Draft goes to you, not the customer", "Send only what the AI needs", "Check the tool's data terms"] }
          ],
          sources: [{ name: "Zapier: Pricing (AI steps and plan limits)", url: "https://zapier.com/pricing" }],
          tryIt: "Add an AI step to your automation that drafts a reply and sends it to you. Test it with three different made-up requests and note any mistakes.",
          youCanNow: "add an AI step to an automation with clear rules and private data kept out.",
          quickCheck: [
            { objective: "O4", q: "Which rule belongs in an AI step's instruction?", options: ["\"Make up a price if unsure\"", "\"Send directly to the customer\"", "\"Only use the facts given; never quote a price\"", "\"Include the card number\""], answer: 2, why: "Clear rules keep AI drafts accurate and safe." },
            { objective: "O4", q: "Your form asks for a card number. What do you do about the AI step?", options: ["Send everything to AI", "Ask AI to hide it", "Store it in the reply", "Leave that field out of what the AI step receives"], answer: 3, why: "Card numbers and private data should not pass through the AI step." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Agents and guardrails",
          minutes: 5,
          goal: "Decide what an AI agent may do alone and what needs your approval.",
          text: [
            "An AI agent is given a goal and plans and takes several steps on its own, such as searching, filling in forms, or using your apps. Agents can save time, but they can also make mistakes quickly and at scale.",
            "Guardrails are the limits you set. A simple rule: an agent may read, sort and draft on its own, but it must get your approval before it sends anything to a customer, spends money, deletes anything, changes prices or signs up for anything. Give it access only to the apps and folders it needs.",
            "Keep a record of what the agent did (most tools have a history or log) and start with small, low-risk tasks. Add more freedom only after it has worked well for a while."
          ],
          steps: ["List what the agent will do.", "Mark each action: allowed alone, or needs your approval.", "Require approval for sending, spending, deleting, pricing and sign-ups.", "Limit its access to only the apps and folders it needs.", "Check its history or log regularly."],
          words: [["AI agent", "an AI tool that takes several steps on its own toward a goal."], ["Guardrail", "a limit that stops an automation or agent doing something risky."], ["Log", "a record of what an automation or agent did and when."]],
          slides: [
            { title: "What an agent is", bullets: ["Given a goal", "Plans and takes several steps alone", "Fast, including fast mistakes"] },
            { title: "Needs your approval", bullets: ["Sending to customers", "Spending money or changing prices", "Deleting or signing up for things"] },
            { title: "Limit and watch", bullets: ["Access only to what it needs", "Check its history or log", "Start small, add freedom slowly"] }
          ],
          tryIt: "Write a guardrail list for your automation: what it may do alone, and the five things that always need your approval. Add an approval step if your tool supports one.",
          youCanNow: "set guardrails so automations and agents never act on risky steps without you.",
          quickCheck: [
            { objective: "O5", q: "What is a guardrail in an automation?", options: ["A limit that stops risky actions", "A faster trigger", "A spreadsheet column", "A paid feature"], answer: 0, why: "Guardrails stop the automation from doing risky things alone." },
            { objective: "O5", q: "An agent tool asks for access to all your folders and your bank. What do you give it?", options: ["Everything it asks for", "Only the apps and folders it needs", "Your password", "Admin rights"], answer: 1, why: "Least access limits the damage if something goes wrong." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Testing, monitoring and failing safely",
          minutes: 5,
          goal: "Test your automation for problems and set up a weekly check.",
          text: [
            "Automations break: an app changes, a form question is renamed, a password expires, or the AI gives a strange answer. Test with odd inputs: an empty field, a very long message, a message in another language, a rude message.",
            "Set it to fail safely: if something goes wrong, the automation should stop and tell you, not send a half-finished message. Most tools can email you when a run fails; turn that on.",
            "Once a week, look at the log: how many runs, how many failed, and two or three AI drafts. Count the minutes saved. If it is causing more work than it saves, change it or switch it off."
          ],
          steps: ["Test with an empty field, a very long message and an unusual message.", "Turn on failure alerts.", "Make sure a failure stops the run instead of sending something.", "Each week, check runs, failures and a few AI drafts.", "Keep, change or switch off based on time saved."],
          words: [["Fail safely", "when something goes wrong, stop and alert a person instead of doing something harmful."], ["Run", "one time the automation starts and works through its steps."]],
          slides: [
            { title: "Automations break", bullets: ["Apps change", "Form questions get renamed", "AI gives strange answers"] },
            { title: "Test odd inputs", bullets: ["Empty field", "Very long message", "Another language or a rude message"] },
            { title: "Fail safely", bullets: ["Stop and alert you", "Never send half-finished messages", "Turn on failure emails"] },
            { title: "Weekly check", bullets: ["Runs and failures in the log", "Read a few AI drafts", "Count minutes saved"] }
          ],
          tryIt: "Final task: test your automation with three odd inputs, turn on failure alerts, and write your one-page record: map, trigger and actions, AI instruction, approval step, test results and weekly check.",
          youCanNow: "build, guard, test and monitor an AI automation for your business.",
          quickCheck: [
            { objective: "O6", q: "What is an odd-input test?", options: ["Testing only on weekends", "Testing with your best customer", "Testing with unusual data, such as an empty field", "Testing with real card numbers"], answer: 2, why: "Odd inputs show how the automation handles problems." },
            { objective: "O6", q: "Your weekly check shows five failed runs. What do you do?", options: ["Ignore them", "Turn off failure alerts", "Give the automation more access", "Find the cause, fix it and test again"], answer: 3, why: "Monitoring is for catching and fixing failures." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Add AI and keep control",
        questions: [
          { objective: "O4", q: "Where should the AI's draft reply go in your first automation?", options: ["To you for review", "Straight to the customer", "To social media", "Nowhere"], answer: 0, why: "You review drafts before customers see them." },
          { objective: "O4", q: "Which information should NOT pass through the AI step?", options: ["Your list of services", "The request text", "Your opening hours", "A customer's card number"], answer: 3, why: "Card numbers and similar details should never be sent to AI tools." },
          { objective: "O5", q: "Which action should always need your approval?", options: ["Reading an email", "Spending money", "Sorting a request", "Drafting a reply for you"], answer: 1, why: "Spending money is a high-risk action." },
          { objective: "O6", q: "What does \"fail safely\" mean?", options: ["Stop and alert a person when something goes wrong", "Keep going no matter what", "Delete the data", "Email every customer"], answer: 0, why: "Stopping prevents harmful half-finished actions." },
          { objective: "O6", q: "Your automation causes more fixing than it saves. What do you do?", options: ["Ignore it", "Add more AI steps", "Change it or switch it off", "Give it more access"], answer: 2, why: "Automations should save time, not cost it." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Automation and Agentic Workflows",
    questions: [
      { objective: "O1", q: "Automation means:", options: ["Hiring more people", "A computer does a repeated job when something happens", "Writing every email by hand", "Turning off your computer"], answer: 1, why: "That is the basic idea." },
      { objective: "O1", q: "The first step before automating is to:", options: ["Delete old data", "Buy the most expensive tool", "Give an agent full access", "Map the process as steps"], answer: 3, why: "You can only automate what you understand." },
      { objective: "O1", q: "A workflow is:", options: ["A password", "A type of spreadsheet", "A payment", "The steps work goes through from start to finish"], answer: 3, why: "That is the definition." },
      { objective: "O1", q: "Which step is easiest to automate?", options: ["Deciding whether to hire someone", "Copying form answers into a spreadsheet", "Signing a lease", "Choosing a business name"], answer: 1, why: "Copying is repetitive and rule-based." },
      { objective: "O2", q: "The trigger is:", options: ["The AI model", "The last step", "The event that starts the automation", "The price"], answer: 2, why: "Triggers start automations." },
      { objective: "O2", q: "Which is an action?", options: ["Add a row to a spreadsheet", "A new form response", "A new paid order", "A new email arrives"], answer: 0, why: "The others are triggers." },
      { objective: "O3", q: "Zapier, Make and Microsoft Power Automate are:", options: ["Social networks", "Banks", "No-code automation tools", "Printers"], answer: 2, why: "They connect apps with triggers and actions." },
      { objective: "O3", q: "Where should you check a no-code tool's free-plan limits?", options: ["Its own pricing page", "A guess", "An old video", "A customer"], answer: 0, why: "Plans and limits change." },
      { objective: "O3", q: "Before turning on an automation you should:", options: ["Send it to all customers", "Test it with made-up data", "Skip testing", "Remove notifications"], answer: 1, why: "Testing catches mistakes safely." },
      { objective: "O4", q: "An AI action in an automation can:", options: ["Approve itself", "Sign contracts", "Pay your taxes", "Sort a request or draft a reply"], answer: 3, why: "Reading, sorting and drafting are good AI uses." },
      { objective: "O4", q: "A good AI instruction includes:", options: ["Rules like \"Only use the facts given; never quote a price\"", "\"Do whatever you want\"", "Your password", "Customers' card numbers"], answer: 0, why: "Rules reduce mistakes." },
      { objective: "O4", q: "Why check an automation tool's data terms?", options: ["It is not needed", "To change your logo", "To get a discount", "To know how customer information you send is stored and used"], answer: 3, why: "Customer data passes through these tools." },
      { objective: "O5", q: "An AI agent is:", options: ["A spreadsheet", "A human sales agent", "An AI tool that takes several steps on its own toward a goal", "A delivery driver"], answer: 2, why: "Agents plan and act on their own." },
      { objective: "O5", q: "A guardrail is:", options: ["A type of trigger", "A limit that stops risky actions", "A fast internet line", "A new app"], answer: 1, why: "Guardrails keep you in control." },
      { objective: "O5", q: "An agent should get your approval before it:", options: ["Drafts a note for you", "Reads an email", "Sorts a list", "Sends anything to a customer"], answer: 3, why: "Sending to customers is high-risk." },
      { objective: "O5", q: "How much access should an agent have?", options: ["Your bank login", "Everything you own", "Only the apps and folders it needs", "All customer files"], answer: 2, why: "Limited access limits damage from mistakes." },
      { objective: "O5", q: "When giving an agent more freedom, you should:", options: ["Start small and add freedom after it works well", "Give full freedom on day one", "Never check its log", "Turn off alerts"], answer: 0, why: "Trust is earned with a track record." },
      { objective: "O6", q: "Which is a good odd-input test?", options: ["Only perfect messages", "A message with an empty field", "No test", "Your real customer's card number"], answer: 1, why: "Odd inputs reveal weak spots." },
      { objective: "O6", q: "If an automation run fails, it should:", options: ["Send a half-finished message", "Stop and alert you", "Delete your spreadsheet", "Retry forever silently"], answer: 1, why: "That is failing safely." },
      { objective: "O6", q: "In your weekly check you look at:", options: ["Runs, failures, a few AI drafts and minutes saved", "Only the tool's logo", "Nothing", "Competitors' passwords"], answer: 0, why: "This shows whether the automation is still working and worth it." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      1,
      4,
      6,
      8,
      9,
      13,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Workflow map",
        objective: "O1",
        notYet: "Steps are missing or not marked.",
        meets: "Every step from start to finish, marked copying, decision or writing.",
        exceeds: "Notes how long each step takes by hand today."
      },
      {
        name: "Trigger and actions",
        objective: "O2",
        notYet: "The trigger or actions are unclear.",
        meets: "One clear trigger and a list of actions, with the AI step and approval marked.",
        exceeds: "Field mapping is written for every piece of information."
      },
      {
        name: "Working automation",
        objective: "O3",
        notYet: "It does not run, or was tested with real customer data.",
        meets: "Form to spreadsheet plus notification works, tested with made-up data.",
        exceeds: "Notes the free-plan limits checked on the tool's own pricing page."
      },
      {
        name: "AI step and guardrails",
        objective: "O5",
        notYet: "AI can send to customers or act on risky steps without approval.",
        meets: "AI drafts go to the owner for approval; guardrail list with five approval items.",
        exceeds: "The AI instruction has clear rules and private fields are kept out of the AI step."
      },
      {
        name: "Testing and monitoring",
        objective: "O6",
        notYet: "Fewer than three tests, or no failure alert.",
        meets: "Three odd-input tests, failure alerts on and a weekly check written.",
        exceeds: "Weekly check includes minutes saved and a rule for when to switch it off."
      }
    ]
  },
  evaluation: {
    results: [
      "Owners who finish the course and pass the final task (rubric)",
      "Owners whose automation is still running safely after 30 days (follow-up survey)",
      "Weekly minutes saved on copying and replies, as reported by owners",
      "Learners who start another Koach Learn entrepreneur course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a free form tool, spreadsheet and email account",
      "A free plan of a no-code tool such as Zapier, Make or Microsoft Power Automate",
      "Made-up test data, for example \"Test Customer\"",
      "About 75 minutes in total for lessons, building, testing and the one-page record"
    ],
    facilitatorNotes: [
      "Build one shared example automation live before learners build their own.",
      "Check current free-plan limits on each tool's own pricing page before the session.",
      "Do not let learners connect bank accounts or send anything to real customers during the course.",
      "Have learners swap guardrail lists and look for any risky action left without approval.",
      "Score the one-page record with the rubric, one Not yet row at a time."
    ]
  }
};
