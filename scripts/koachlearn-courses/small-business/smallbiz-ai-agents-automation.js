"use strict";

// Koach Learn course: Small Business -> "AI Agents for Business Automation" (bonus course). Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "smallbiz-ai-agents-automation",
  category: "Small Business",
  name: "AI Agents for Business Automation",
  skills: "Telling automations from AI agents, Mapping a repeat task step by step, Designing a trigger-and-action workflow, Adding human approval, Testing with sample data, Logging and monitoring",
  outcome: "design, build and safely test one simple automation for your business, such as turning a new web form inquiry into a spreadsheet row, a drafted reply and a reminder for you, with a human approval step before anything is sent, a test run on sample data, and a log you check each week.",
  about: [
    "This course is for small business owners who repeat the same computer tasks every day: copying form answers into a sheet, sending the same follow-up email, creating invoices, sorting inquiries. Examples come from shops, restaurants, salons, cleaning and repair services, and small offices.",
    "You will learn the difference between a simple automation and an AI agent, map a task into steps, design a workflow with a trigger and actions, and build one with a no-code tool such as Zapier, Make or Microsoft Power Automate, or the automation features of tools you already use. Most importantly, you will keep a person in control.",
    "Tools change their screens and prices often, so we describe what to do rather than exact menu names; check each tool's site for its current free plan. Each lesson takes about five minutes, with a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Build one working automation for a real repeat task: write the step map, choose the trigger and actions, put a human approval step before anything is sent or paid, test it with three sample entries (no real customer data), fix what breaks, and set up a simple log and a weekly check. Write a one-page description of it so someone else could understand or turn it off.",
  chapters: [
    {
      name: "Chapter 1: Understanding and designing automation",
      lessons: [
        {
          title: "Automations and AI agents: what is the difference?",
          minutes: 5,
          goal: "Explain the difference between a fixed automation and an AI agent, and when each fits.",
          text: [
            "An automation follows fixed rules you set: \"When a new form is submitted, add a row to my sheet and email me.\" It does the same thing every time. It is predictable and easy to check.",
            "An AI agent is an AI system that can decide some of its own steps to reach a goal, like reading an inquiry, deciding what kind it is, drafting a reply and choosing which tool to use next. Agents are more flexible but less predictable, and they can make mistakes confidently.",
            "For a small business, start with fixed automations, and add AI to one step where judgment with words helps, like drafting a reply or sorting messages. Keep people in charge of anything that spends money, sends messages to customers or changes records."
          ],
          words: [["Automation", "a set of fixed steps a computer does by itself when something happens."], ["AI agent", "an AI system that can choose some of its own steps to reach a goal."], ["Workflow", "the series of steps that gets a task done."]],
          slides: [
            { title: "Automation", bullets: ["Fixed rules you set", "Same result every time", "Predictable and easy to check"] },
            { title: "AI agent", bullets: ["Chooses some of its own steps", "Flexible, but less predictable", "Can be confidently wrong"] },
            { title: "Start simple", bullets: ["Fixed automation first", "Add AI to one wording step", "People approve money, messages and records"] }
          ],
          tryIt: "Write down two repeat tasks in your business. For each, write whether a fixed automation could do it, or whether it needs judgment (a possible AI step).",
          youCanNow: "explain the difference between an automation and an AI agent and choose the safer fit."
        },
        {
          title: "Mapping a repeat task step by step",
          minutes: 5,
          goal: "Break one repeat task into a clear step map.",
          text: [
            "You cannot automate what you have not written down. Pick one task you do often and write every step as you do it today. Example for a cleaning service: (1) inquiry arrives by web form, (2) I copy name, address and job type into my sheet, (3) I write a reply with my price range, (4) I add a reminder to call back, (5) I send the quote.",
            "Mark each step: Rule (always the same), Words (needs writing or judgment), Decision (needs the owner), Money or sending (needs approval).",
            "Steps marked Rule can be automated. Words steps can get an AI draft. Decision and Money or sending steps stay with a person."
          ],
          steps: ["Pick a task you do at least weekly.", "Write every step as you do it now.", "Mark each: Rule, Words, Decision, Money or sending.", "Circle the Rule steps to automate first."],
          words: [["Step map", "a numbered list of every step in a task."], ["Manual", "done by a person by hand."]],
          slides: [
            { title: "Write it before you automate", bullets: ["Pick one frequent task", "List every step as you do it today"] },
            { title: "Mark each step", bullets: ["Rule: always the same", "Words: writing or judgment", "Decision / Money or sending: a person"] },
            { title: "What gets automated", bullets: ["Rule steps: automate", "Words steps: AI draft", "Decision and money steps: people"] }
          ],
          tryIt: "Write the step map for one repeat task in your business and mark every step Rule, Words, Decision or Money/sending.",
          youCanNow: "break a repeat task into a step map that shows what can be automated."
        },
        {
          title: "Designing the workflow: trigger, actions, approval",
          minutes: 5,
          goal: "Design a workflow with a trigger, actions and a human approval step.",
          text: [
            "Every automation has a trigger (the event that starts it) and actions (what happens next). Trigger: \"new form submission\". Actions: \"add a row to the sheet\", \"draft a reply with AI\", \"send the draft to me for approval\", \"create a calendar reminder\".",
            "Put the human approval before anything leaves the business: messages to customers, payments, price changes, deleting records. The automation can prepare everything; you press send.",
            "Draw it as boxes and arrows on paper first. Name the tool for each box: your form tool, Google Sheets or Excel, an AI step, your email, your calendar. Check that each tool connects to the connector service you plan to use."
          ],
          steps: ["Write the trigger.", "List the actions in order.", "Insert an approval step before anything is sent or paid.", "Draw it as boxes and arrows.", "Name the tool for each box and check it connects."],
          words: [["Trigger", "the event that starts an automation."], ["Action", "a step the automation does after the trigger."], ["Approval step", "a point where a person must say yes before the workflow continues."]],
          slides: [
            { title: "Trigger and actions", bullets: ["Trigger: new form submission", "Actions: add row, AI draft, remind me"] },
            { title: "Human approval", bullets: ["Before messages leave the business", "Before payments, price changes or deletions", "The automation prepares; you press send"] },
            { title: "Draw it first", bullets: ["Boxes and arrows on paper", "Name the tool for each box", "Check each tool connects"] }
          ],
          tryIt: "Draw the workflow for your task from Lesson 2: trigger, actions, and an approval step. Write the tool name in each box.",
          youCanNow: "design a workflow with a trigger, actions and a human approval step."
        }
      ],
      check: {
        title: "Knowledge Check 1: Understanding and designing automation",
        questions: [
          { q: "Which best describes a fixed automation?", options: ["It chooses its own goals", "It follows rules you set and does the same thing every time", "It is a person", "It never runs"], answer: 1, why: "Automations follow fixed rules." },
          { q: "Which is more predictable?", options: ["Neither ever works", "An AI agent", "They are always the same", "A fixed automation"], answer: 3, why: "Agents choose steps and are less predictable." },
          { q: "In a step map, \"send the quote\" is marked:", options: ["Money or sending: needs approval", "Rule: automate fully", "Ignore", "Delete"], answer: 0, why: "Anything sent to a customer needs a person's approval." },
          { q: "What is a trigger?", options: ["A password", "The last step", "The event that starts an automation", "A price"], answer: 2, why: "Triggers start workflows." },
          { q: "Where does the approval step go?", options: ["Nowhere", "After the customer gets it", "Before anything leaves the business", "Only at the end of the year"], answer: 2, why: "Approve before sending, paying or deleting." }
        ]
      }
    },
    {
      name: "Chapter 2: Building, testing and running it safely",
      lessons: [
        {
          title: "Building it with a no-code tool",
          minutes: 6,
          goal: "Build your workflow in a no-code automation tool.",
          text: [
            "No-code tools let you build automations by choosing from menus instead of writing code. Common ones are Zapier, Make and Microsoft Power Automate. Some apps you already use, like your form, booking or email tool, have simple automations built in. Check each tool's site for its free plan and limits.",
            "The pattern is the same everywhere: create a new automation, choose the app and event for the trigger, sign in to connect your account, then add each action and map the fields (for example, the form's \"Name\" goes into the sheet's \"Name\" column).",
            "For an AI step, many tools offer an action that sends text to an AI model and returns a draft. Tell it exactly what to write and give it only the fields it needs. Send the draft to yourself, not straight to the customer."
          ],
          steps: ["Create a new automation in your chosen tool.", "Choose the trigger app and event; connect your account.", "Add each action and map the fields.", "Add the AI draft step with clear instructions and only needed fields.", "Send the draft to yourself for approval."],
          words: [["No-code", "building software by choosing options instead of writing code."], ["Field mapping", "telling the tool which piece of information goes where."], ["Connect an account", "letting the automation tool use one of your apps, after you sign in."]],
          slides: [
            { title: "No-code tools", bullets: ["Zapier, Make, Microsoft Power Automate", "Built-in automations in apps you use", "Check each site for free plan limits"] },
            { title: "The same pattern", bullets: ["Choose trigger app and event", "Connect your account", "Add actions and map the fields"] },
            { title: "The AI step", bullets: ["Clear instructions", "Only the fields it needs", "Draft goes to you, not the customer"] }
          ],
          tryIt: "Build your workflow in a no-code tool's free plan (or on paper if you cannot sign up yet): trigger, field mapping for each action, and an AI draft sent to you.",
          youCanNow: "build a trigger-and-action workflow in a no-code automation tool."
        },
        {
          title: "Testing with sample data and fixing what breaks",
          minutes: 5,
          goal: "Test the automation with sample entries and fix errors before going live.",
          text: [
            "Never test on real customers. Make three sample entries with made-up names like \"Test Customer\" and a test email you own. Include one normal entry, one with a missing field, and one with odd text (very long, another language, emojis).",
            "Run each and check every step: did the row land in the right columns? Did the AI draft make sense and stay on topic? Did the approval reach you? Did anything get sent that should not have?",
            "Fix one thing at a time and test again. Common problems: wrong field mapping, a step that fails when a field is blank, an AI draft that invents prices. Fix the instructions (\"Use only the price range in the field; do not invent prices\") and retest."
          ],
          steps: ["Make three sample entries: normal, missing field, odd text.", "Run each through the automation.", "Check every step's result.", "Fix one problem at a time and retest.", "Go live only when all three pass."],
          words: [["Sample data", "made-up information used for testing."], ["Edge case", "an unusual input that might break a process, like a blank field."], ["Go live", "turn the automation on for real use."]],
          slides: [
            { title: "Test with made-up data", bullets: ["\"Test Customer\" and your own test email", "Normal, missing field, odd text"] },
            { title: "Check every step", bullets: ["Right columns?", "AI draft sensible and on topic?", "Approval reached you? Nothing sent by mistake?"] },
            { title: "Fix and retest", bullets: ["One fix at a time", "Tell the AI step not to invent prices", "Go live when all three pass"] }
          ],
          tryIt: "Run three sample entries through your automation (or walk them through your paper design). Write what happened at each step and one fix.",
          youCanNow: "test an automation safely and fix problems before it touches real customers."
        },
        {
          title: "Running it safely: logs, monitoring and an off switch",
          minutes: 5,
          goal: "Set up a log, a weekly check and a way to turn the automation off.",
          text: [
            "Once it is live, keep watching. Most tools show a history of each run; check it weekly for errors. You can also add a log row to a sheet: date, what triggered it, what it did, approved by whom.",
            "Write a one-page description: what the automation does, its trigger and actions, which accounts it uses, who approves, and how to turn it off. Store it where a family member or staff member could find it.",
            "Protect access: use two-step sign-in on the automation tool and connected accounts, give it access only to what it needs, keep customer card numbers and passwords out of AI steps, and remove access when a staff member leaves."
          ],
          steps: ["Check the run history weekly.", "Add a log row for each run.", "Write the one-page description with the off switch.", "Turn on two-step sign-in and limit access.", "Review whether it still saves time every month."],
          words: [["Run history", "a list the tool keeps of every time the automation ran."], ["Log", "a record of what happened and when."], ["Off switch", "the way to turn an automation off quickly."]],
          slides: [
            { title: "Keep watching", bullets: ["Check run history weekly", "Log: date, trigger, action, approver"] },
            { title: "One-page description", bullets: ["What it does and which accounts it uses", "Who approves", "How to turn it off"] },
            { title: "Protect access", bullets: ["Two-step sign-in", "Least access needed", "No card numbers or passwords in AI steps"] }
          ],
          tryIt: "Final task: finish your automation: step map, workflow with approval, three passing tests, a log and weekly check, and a one-page description with the off switch.",
          youCanNow: "run a business automation safely with approval, testing, logs and an off switch."
        }
      ],
      check: {
        title: "Knowledge Check 2: Building, testing and running it safely",
        questions: [
          { q: "Which is a no-code automation tool?", options: ["Zapier", "A stapler", "A cash drawer", "A fax"], answer: 0, why: "Zapier builds automations without code." },
          { q: "What is field mapping?", options: ["Printing a map", "Drawing a farm", "Choosing a password", "Telling the tool which information goes where"], answer: 3, why: "It matches form fields to sheet columns." },
          { q: "What data should you test with?", options: ["Real customers' details", "Made-up sample entries", "Card numbers", "Your bank login"], answer: 1, why: "Never test on real customers." },
          { q: "The AI draft invents a price. What do you fix?", options: ["The AI step's instructions, then retest", "Nothing", "Send it anyway", "Delete the business"], answer: 0, why: "Clear instructions reduce invented facts." },
          { q: "Why write a one-page description with an off switch?", options: ["For decoration", "To make it longer", "So someone else can understand or stop it", "It is not useful"], answer: 2, why: "Anyone should be able to turn it off fast." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Agents for Business Automation",
    questions: [
      { q: "An AI agent is:", options: ["A person", "An AI system that can choose some of its own steps", "A fixed rule", "A printer"], answer: 1, why: "Agents choose steps toward a goal." },
      { q: "Where should a small business start?", options: ["Automate everything at once", "A fully independent agent with bank access", "Nothing", "Fixed automations, then one AI step"], answer: 3, why: "Simple and predictable first." },
      { q: "Which should always stay with a person?", options: ["Formatting a row", "Copying a form into a sheet", "Adding a calendar reminder", "Spending money"], answer: 3, why: "Money decisions need a person." },
      { q: "The first step before automating is to:", options: ["Buy a tool", "Write a step map of the task", "Turn it on", "Hire someone"], answer: 1, why: "You cannot automate what you have not written down." },
      { q: "A \"Rule\" step is one that is:", options: ["About money", "A big decision", "Always the same", "Unclear"], answer: 2, why: "Rule steps can be automated." },
      { q: "A \"Words\" step can get:", options: ["An AI draft", "A payment", "A deletion", "Nothing"], answer: 0, why: "AI helps with writing." },
      { q: "\"New form submission\" is an example of a:", options: ["Log", "Action", "Trigger", "Password"], answer: 2, why: "It starts the workflow." },
      { q: "\"Add a row to the sheet\" is an example of an:", options: ["Action", "Trigger", "Approval", "Off switch"], answer: 0, why: "Actions follow the trigger." },
      { q: "In a safe workflow, AI drafts customer replies and then:", options: ["Sends them straight to customers", "Sends them to you for approval", "Deletes them", "Posts them publicly"], answer: 1, why: "You press send." },
      { q: "Why draw the workflow on paper first?", options: ["It is not useful", "It is required by law", "For fun only", "To see every step and tool before building"], answer: 3, why: "Planning prevents mistakes." },
      { q: "When you connect an account to an automation tool, you are:", options: ["Letting the tool use that app after you sign in", "Deleting the app", "Sharing it publicly", "Paying a fine"], answer: 0, why: "Connections give the tool access." },
      { q: "What should the AI step receive?", options: ["Passwords", "All customer data", "Card numbers", "Only the fields it needs"], answer: 3, why: "Least data needed." },
      { q: "Where do you check a tool's free plan limits?", options: ["An old video", "A guess", "The tool's official site", "A competitor"], answer: 2, why: "Plans change." },
      { q: "An edge case is:", options: ["A table corner", "An unusual input that might break the process", "A normal entry", "A password"], answer: 1, why: "Test odd inputs too." },
      { q: "How many sample entries should pass before going live in this course?", options: ["A thousand", "Zero", "One real customer", "Three: normal, missing field, odd text"], answer: 3, why: "They cover common problems." },
      { q: "Fix problems by:", options: ["Ignoring them", "Changing everything at once", "Changing one thing at a time and retesting", "Going live anyway"], answer: 2, why: "One fix at a time shows what worked." },
      { q: "Run history shows:", options: ["Every time the automation ran", "Your browser history", "Customer passwords", "Tax returns"], answer: 0, why: "It helps you spot errors." },
      { q: "How often should you check a live automation?", options: ["Never", "At least weekly", "Once every few years", "Only when customers complain"], answer: 1, why: "Regular checks catch problems early." },
      { q: "Two-step sign-in on automation accounts:", options: ["Slows down nothing useful", "Makes them harder to break into", "Is not allowed", "Shares your password"], answer: 1, why: "It adds a second check." },
      { q: "Each month you should ask whether the automation:", options: ["Still saves time", "Has a nice name", "Uses more apps", "Is popular"], answer: 0, why: "If it no longer helps, change or stop it." }
    ]
  }
};
