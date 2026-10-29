"use strict";

// Koach Learn course: Artificial Intelligence -> "AI Agent Tool Use and Automation" (course 4 of the
// "Design, Build, and Deploy Autonomous AI Agents" program). Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "AI Agent Tool Use and Automation",
  skills: "Describing tools with a schema, Validating tool arguments, Putting write tools behind approval, Dry runs and safe re-runs, Connecting tools with MCP, Running an agent on a schedule",
  outcome: "give an agent real tools safely: describe each tool with a schema, check every argument, keep write actions behind a dry run and a human yes, and run the agent as a repeatable automation that reads a file and writes a report.",
  about: [
    "This is course 4 of Design, Build, and Deploy Autonomous AI Agents. Your course 3 agent had two safe tools. Real agents read files, call web services and write results, and that is where most agent accidents happen. This course teaches you to add real tools without losing control.",
    "Chapter 1 is about tools: describing them with a schema the model understands, checking every argument your code receives, and putting any action that changes something behind a dry run and a human approval. Chapter 2 is about automation: triggers and schedules, safe re-runs, the Model Context Protocol (MCP) for connecting tools, and turning your agent into a job that runs on its own.",
    "You will work in Python in Google Colab or on your own computer. Code is shown as short lines in the lessons. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build a \"weekly report\" agent. It reads a CSV file of made-up sales or expenses with a read tool, uses a calculator tool to work out totals, and drafts a short summary. Its only write tool, save_report(filename, text), must check its arguments (only .txt or .md files, only in a reports folder), run in dry-run mode by default, and ask \"Save report? yes/no\" before writing. Running it twice for the same week must not create duplicate reports. Show the log of one full run.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in the Design, Build, and Deploy Autonomous AI Agents program who finished courses 1 to 3: small business owners, career changers, students and staff who want agents that do real work on a schedule.",
    startingPoint: "Have built a two-tool agent loop in Python with a step limit, error handling and a run log. Have not given an agent tools that read files or change anything, and have not run one as an automation.",
    gap: "Most agent accidents happen when agents get real tools that read and write. Learners need to describe tools clearly, check every argument, keep write actions behind a dry run and a human yes, and make automations safe to re-run, so their agents help without causing damage.",
    constraints: [
      "Reading level: plain words; code shown as short lines to copy",
      "Devices: a computer with a web browser; Colab for building, not for running schedules",
      "Practice uses made-up CSV data only, never real customer or financial records",
      "Write actions stay in dry-run mode until a person approves",
      "Only trusted MCP servers, with the least access needed"
    ],
    prerequisites: "Course 3 of Design, Build, and Deploy Autonomous AI Agents (\"Building AI Agents\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "For each tool your agent uses", action: "write a tool schema with a clear name, purpose and typed inputs", standard: "so a model can choose the right tool and arguments" },
    { id: "O2", condition: "Given arguments sent by the model", action: "check every argument against an allow list before the tool uses it", standard: "refusing bad file types, path tricks and wrong types with a clear error" },
    { id: "O3", condition: "For any tool that changes something", action: "put the action behind a dry run and a yes/no approval that shows the exact details", standard: "so nothing is written until a person says yes" },
    { id: "O4", condition: "Given a task that runs regularly", action: "choose a trigger and make the automation safe to re-run", standard: "so a second run for the same period creates no duplicate" },
    { id: "O5", condition: "Given a tool you want to share with AI apps", action: "explain what an MCP server does and decide when to use one", standard: "naming the approval and checking rules you would keep" },
    { id: "O6", condition: "Given read, calculator and save tools", action: "build and test the weekly report automation end to end", standard: "with a full run log and bad data reported, not ignored" }
  ],
  chapters: [
    {
      name: "Chapter 1: Giving an agent real tools",
      lessons: [
        {
          objectives: ["O1"],
          title: "Describing a tool with a schema",
          minutes: 5,
          goal: "Write a tool description with a name, purpose and typed inputs.",
          text: [
            "A model chooses tools from their descriptions. A tool schema is a precise description: a name, one or two sentences on what it does and when to use it, and each input with its type and meaning. Most providers write the inputs in JSON Schema, a standard way to describe data.",
            "Example: name read_csv; description \"Read a CSV file from the data folder and return its first 50 rows as text. Use when you need the numbers in a file.\"; inputs: filename (string, required, a file name in the data folder such as sales-week-42.csv).",
            "Good schemas are small and specific. One tool, one job. Say what the tool returns and when not to use it. Use names that read like actions: read_csv, save_report, not tool1."
          ],
          steps: ["Name the tool with an action word.", "Describe what it does, when to use it and what it returns.", "List each input with its type and whether it is required.", "Keep it to one job.", "Test: give the model a goal and see if it picks the tool correctly."],
          words: [["Tool schema", "a precise description of a tool: its name, purpose and inputs."], ["JSON Schema", "a standard way to describe the shape of data, such as which fields are text or numbers."], ["Argument", "a value passed into a tool or function."]],
          slides: [
            { title: "Models choose from descriptions", bullets: ["Name, purpose, inputs", "Inputs often written in JSON Schema"] },
            { title: "Example: read_csv", bullets: ["Reads a CSV from the data folder", "Returns the first 50 rows as text", "Input: filename (string, required)"] },
            { title: "Good schemas", bullets: ["One tool, one job", "Action names: read_csv, save_report", "Say what it returns and when not to use it"] }
          ],
          tryIt: "Write schemas for three tools: read_csv, calculator and save_report. Give a free chatbot the three schemas and the goal \"Total last week's sales and save a report\", and ask which tool it would call first and with what arguments.",
          youCanNow: "describe a tool so a model can choose it and fill in its inputs correctly.",
          quickCheck: [
            { objective: "O1", q: "What do typed inputs in a tool schema tell the model?", options: ["How fast the tool runs", "Who wrote the tool", "What kind of value each input must be, such as text or a number", "Which model to use"], answer: 2, why: "Types describe the shape of each input so the model can send the right arguments." },
            { objective: "O1", q: "You want one tool that reads files, sends emails and deletes old reports. What would you do instead?", options: ["Split it into separate tools that each do one clear job", "Keep it, since one tool is simpler", "Give it a longer description", "Hide the delete part from the schema"], answer: 0, why: "A good tool does one clear job, which makes it easier to describe, check and approve." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Never trust the arguments: validating tool input",
          minutes: 6,
          goal: "Check every argument the model sends before a tool uses it.",
          text: [
            "The model writes your tool's arguments, and the model can be wrong or be tricked by prompt injection. So the tool, not the model, must enforce the rules. Treat arguments like input from a stranger on the internet.",
            "Check type and shape: is filename a string? Check allowed values: only names ending in .csv, only inside the data folder. Block path tricks: a name like ../../secrets.txt tries to climb out of the folder. In Python: from pathlib import Path, then p = (DATA_DIR / filename).resolve() and refuse if DATA_DIR.resolve() is not in p.parents.",
            "When a check fails, return a clear message, not a crash: \"read_csv error: only .csv files in the data folder are allowed\". Never run model-written text as code or as a shell command; that is how a small mistake becomes a big one."
          ],
          steps: ["Check the type of each argument.", "Check allowed values: file types, folders, number ranges.", "Resolve file paths and refuse anything outside the allowed folder.", "Return a clear error message on failure.", "Never run model-written text as code or a shell command."],
          words: [["Validation", "checking that input is the right type and within allowed values before using it."], ["Path traversal", "a trick using ../ in a file name to reach files outside the allowed folder."], ["Allow list", "a list of the only values that are permitted."]],
          slides: [
            { title: "The tool enforces the rules", bullets: ["The model can be wrong or tricked", "Treat arguments like input from a stranger"] },
            { title: "Check every argument", bullets: ["Type: is it a string or number?", "Allowed values: only .csv, only the data folder", "Block ../ path tricks"] },
            { title: "On failure", bullets: ["Return a clear error message", "Never crash, never guess", "Never run model text as code or a command"] }
          ],
          tryIt: "Write read_csv with validation. Test it yourself with: 'sales.csv', 'notes.exe', '../secret.txt' and 42. Only the first should read a file; the others should return clear errors.",
          youCanNow: "write tools that check every argument before acting.",
          quickCheck: [
            { objective: "O2", q: "Why must the tool's own code check its arguments?", options: ["The schema already blocks every bad value", "The model may send something unsafe or wrong", "It makes the model smarter", "It is only needed for write tools"], answer: 1, why: "Only the tool's code can enforce its rules; the model can make mistakes or be tricked." },
            { objective: "O2", q: "read_csv receives the number 42 as a file name. What should happen?", options: ["Read a file named 42.csv", "Turn it into text and keep going", "Ask the model to guess the right file", "Return a clear error that the file name must be text ending in .csv"], answer: 3, why: "A wrong type is refused with a clear error the model can act on." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Write tools: dry runs and human approval",
          minutes: 6,
          goal: "Put a write action behind a dry run and a yes/no approval.",
          text: [
            "A write tool changes something: saves a file, sends a message, updates a sheet, spends money. Give write tools two locks. First, a dry run: the tool says exactly what it would do, but does not do it. Make dry run the default, with DRY_RUN = True at the top of your code.",
            "Second, human approval: before the real write, show the person what will happen and ask. In a notebook, answer = input('Save report to reports/week-42.md? yes/no ') and only continue if answer == 'yes'. In a real app, this is an Approve button.",
            "Show the real details in the approval, not a summary the model wrote: the file name, the recipient, the amount. Log every approval and every refusal. If the model asks for the same write again after a no, that is a sign to stop the run."
          ],
          steps: ["Mark each tool READ or WRITE.", "Give every write tool a dry-run mode, on by default.", "Before a real write, show the exact details and ask yes or no.", "Write only on yes, and log the answer.", "Stop the run if the model retries a refused write."],
          words: [["Dry run", "a practice run that shows what would happen without doing it."], ["Approval gate", "a point where a person must say yes before an action happens."]],
          slides: [
            { title: "Write tools change things", bullets: ["Save, send, update, spend", "They need two locks"] },
            { title: "Lock 1: dry run by default", bullets: ["DRY_RUN = True", "Shows exactly what would happen", "Does not do it"] },
            { title: "Lock 2: human approval", bullets: ["Show the real details: file, recipient, amount", "Ask yes or no", "Write only on yes; log the answer"] }
          ],
          tryIt: "Write save_report(filename, text) with validation (only .md or .txt, only in a reports folder), a dry-run default and a yes/no approval. Try it with DRY_RUN on, then off, answering no once and yes once.",
          youCanNow: "add write tools that only act after a dry run and a human yes.",
          quickCheck: [
            { objective: "O3", q: "What does a dry run do?", options: ["Shows what would happen without doing it", "Runs the action twice to be sure", "Deletes the old file first", "Saves a backup copy of the model"], answer: 0, why: "A dry run lets a person see the result before anything changes." },
            { objective: "O3", q: "The approval prompt only says \"Proceed? yes/no\". What would you change?", options: ["Nothing, it is short and clear", "Make the agent answer yes itself", "Show the exact file name and text that will be saved", "Remove the approval to save time"], answer: 2, why: "A person can only approve well when they see the exact details." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Giving an agent real tools",
        questions: [
          { objective: "O1", q: "What does a tool schema give the model?", options: ["Your API key", "The tool's source code", "The tool's name, purpose and inputs", "Permission to run anything"], answer: 2, why: "The model chooses and fills in tools from their schemas." },
          { objective: "O1", q: "Which tool name is best?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Action names tell the model what the tool does." },
          { objective: "O2", q: "The model sends read_csv the filename '../../passwords.txt'. The tool should:", options: ["Read it, the model asked", "Ask the model to promise it is safe", "Read half of it", "Refuse with a clear error"], answer: 3, why: "Path tricks outside the allowed folder must be blocked by the tool." },
          { objective: "O3", q: "Why should DRY_RUN be on by default?", options: ["It is faster", "Nothing changes until someone deliberately turns it off", "Models prefer it", "It saves tokens"], answer: 1, why: "A safe default prevents accidental writes." },
          { objective: "O3", q: "What should an approval prompt show?", options: ["A summary the model wrote", "Nothing, just \"OK?\"", "The model's name", "The exact details: file name, recipient or amount"], answer: 3, why: "People must approve what will really happen." }
        ]
      }
    },
    {
      name: "Chapter 2: From agent to automation",
      lessons: [
        {
          objectives: ["O4"],
          title: "Triggers, schedules and safe re-runs",
          minutes: 5,
          goal: "Choose a trigger for an agent and make re-runs safe.",
          text: [
            "An automation is an agent that starts on its own. A trigger starts it: a schedule (every Monday at 8 am), an event (a new file in a folder, a new form response) or a button someone presses.",
            "Automations get re-run: a schedule fires twice, a run fails halfway and you start it again. Design for it. Idempotent means running it twice gives the same result as once. Name outputs by their period (reports/week-42.md) and check before writing: if the report exists, stop or ask, instead of making a copy.",
            "Ways to schedule: on your own computer, Windows Task Scheduler or cron on Mac and Linux can run a Python script; no-code tools like Zapier, Make and n8n run workflows on triggers; cloud services have schedulers too. Colab is for building and testing, not for running on a schedule. Check each tool's current free limits on its own site."
          ],
          steps: ["Pick the trigger: schedule, event or button.", "Name each output by its period, like week-42.", "Before writing, check whether the output already exists.", "If it does, stop or ask; never duplicate.", "Choose where it will run, and check that tool's limits."],
          words: [["Trigger", "the event that starts an automation."], ["Idempotent", "safe to run more than once: the second run changes nothing extra."], ["Cron", "a scheduler on Mac and Linux that runs commands at set times."]],
          slides: [
            { title: "Three kinds of trigger", bullets: ["Schedule: every Monday 8 am", "Event: new file or form response", "Button: a person starts it"] },
            { title: "Design for re-runs", bullets: ["Idempotent: twice = once", "Name outputs by period: week-42", "Check before writing; never duplicate"] },
            { title: "Where it can run", bullets: ["Task Scheduler or cron on your computer", "No-code: Zapier, Make, n8n", "Colab is for building, not scheduling"] }
          ],
          tryIt: "Change save_report so the file name includes the week number, and so a second run for the same week stops with \"Report for week 42 already exists\". Run it twice to prove it.",
          youCanNow: "choose a trigger and make an automation safe to run more than once.",
          quickCheck: [
            { objective: "O4", q: "What does it mean that an automation is idempotent?", options: ["It runs only once a year", "Running it twice gives the same result as running it once", "It never needs a trigger", "It always asks for approval"], answer: 1, why: "Idempotent jobs can be re-run safely without making duplicates." },
            { objective: "O4", q: "Your weekly job ran twice by mistake and made two reports. What would you change?", options: ["Run it less often", "Delete reports by hand each week", "Turn off the log", "Name the report by week and stop if that week's report already exists"], answer: 3, why: "A week-based name plus an exists check makes re-runs safe." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Connecting tools with MCP",
          minutes: 5,
          goal: "Explain what MCP is and decide when to use an MCP server.",
          text: [
            "The Model Context Protocol (MCP) is an open-source standard for connecting AI applications to outside systems: files, databases, calendars, search tools. Its own site compares it to a USB-C port for AI: build a connection once and many AI apps can use it.",
            "In MCP, a server offers tools and data; a client (inside an AI app such as Claude, ChatGPT or a code editor like VS Code) connects to it and lets the model use them. You can use ready-made servers or write your own small server in Python that wraps tools like your read_csv.",
            "MCP does not make a tool safe by itself. Every rule from Chapter 1 still applies: check arguments, least privilege, approval for writes. Install servers only from sources you trust, because a server runs with whatever access you give it. Read the MCP security best-practices page before connecting anything private."
          ],
          words: [["MCP", "Model Context Protocol: an open standard for connecting AI apps to tools and data."], ["MCP server", "a program that offers tools or data to AI apps through MCP."], ["MCP client", "the part of an AI app that connects to MCP servers."]],
          slides: [
            { title: "What MCP is", bullets: ["Open standard to connect AI apps to tools and data", "Like a USB-C port for AI", "Build once, use in many AI apps"] },
            { title: "Servers and clients", bullets: ["Server: offers tools and data", "Client: inside the AI app, connects to servers", "You can write a small server in Python"] },
            { title: "Still your job", bullets: ["Check arguments, least privilege", "Approval for writes", "Install servers only from trusted sources"] }
          ],
          sources: [{ name: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Read the MCP introduction page. Then write three sentences: which of your tools you would offer through an MCP server, which AI app would use it, and which approval rule you would keep.",
          youCanNow: "explain MCP servers and clients and decide when connecting a tool through MCP makes sense.",
          quickCheck: [
            { objective: "O5", q: "What is an MCP server?", options: ["A program that offers tools and data to AI apps in a standard way", "A model that writes code", "A cloud folder for reports", "A kind of API key"], answer: 0, why: "MCP, the Model Context Protocol, is a standard way to connect tools and data to AI apps." },
            { objective: "O5", q: "You offer save_report through an MCP server. What happens to its argument checks and approval?", options: ["They can be removed, since MCP handles safety", "They move to the AI app", "You keep them in the tool", "Only the approval stays"], answer: 2, why: "MCP connects tools; it does not replace the checks and approvals in your own code." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Building the weekly report automation",
          minutes: 6,
          goal: "Put the tools, the loop and the safety rules together into one automation.",
          text: [
            "Now assemble everything. Tools: read_csv (read, validated), calculator (read, validated), save_report (write: validated, dry run, approval, no duplicates). The loop from course 3 with a step limit and a log. A system prompt from course 2 with the goal: summarize the week and save a report.",
            "Make a small made-up file to test with, such as data/sales-week-42.csv with columns day, item, amount. Never test with real customer or personal data.",
            "Run it start to finish. Read the log: did it read before it calculated? Did it ask before saving? Run it a second time for the same week: it must not make a duplicate. Then try a file with a bad row (a word where a number should be) and check it reports the problem instead of guessing."
          ],
          steps: ["Create a made-up CSV in a data folder.", "Register the three tools with their schemas.", "Run the loop with a step limit and a log.", "Approve the save once; run again to test no duplicates.", "Test a file with a bad row."],
          words: [["Test data", "made-up data used to check a program without risking real information."], ["End-to-end test", "running the whole automation from start to finish."]],
          slides: [
            { title: "Put it together", bullets: ["read_csv, calculator, save_report", "Loop with step limit and log", "Prompt with the weekly goal"] },
            { title: "Test with made-up data", bullets: ["data/sales-week-42.csv", "Never real customer or personal data"] },
            { title: "Check the run", bullets: ["Read before calculate?", "Asked before saving?", "Second run: no duplicate", "Bad row: reported, not guessed"] }
          ],
          tryIt: "Final task: build the weekly report agent with read_csv, calculator and save_report (validated, dry run by default, yes/no approval, no duplicates). Run it on a made-up CSV, run it again for the same week, and save the log of the full run.",
          youCanNow: "turn an agent into a safe, repeatable automation with real tools.",
          quickCheck: [
            { objective: "O6", q: "What is an end-to-end test of your automation?", options: ["Testing only the calculator", "Running the whole automation from start to finish", "Reading the code out loud", "Testing the model in a chatbot"], answer: 1, why: "End to end means every part runs together, the way it will for real." },
            { objective: "O6", q: "Your CSV has the word \"none\" where a sales number should be. What should the agent do?", options: ["Report the problem in its summary", "Count it as zero without saying so", "Skip the whole file", "Guess a number"], answer: 0, why: "A good agent reports bad data instead of hiding it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: From agent to automation",
        questions: [
          { objective: "O4", q: "Which is an event trigger?", options: ["A person reads the log", "Every Monday at 8 am", "A new file arrives in a folder", "The step limit"], answer: 2, why: "An event, like a new file, starts the run." },
          { objective: "O4", q: "An automation is idempotent when:", options: ["Running it twice gives the same result as once", "It runs very fast", "It never fails", "It uses no tools"], answer: 0, why: "Safe re-runs do not duplicate work." },
          { objective: "O5", q: "What does an MCP server do?", options: ["Trains the model", "Offers tools and data to AI apps", "Stores your password", "Replaces argument checks"], answer: 1, why: "Servers expose tools and data; clients in AI apps connect to them." },
          { objective: "O5", q: "You found an MCP server on an unknown website that wants access to your files. Best move?", options: ["Only use servers from sources you trust, with the least access needed", "Give it access to everything", "Install it right away", "Turn off approvals"], answer: 0, why: "A server runs with whatever access you give it." },
          { objective: "O6", q: "What data should you test your automation with?", options: ["Real customer records", "Your bank statement", "Your friend's emails", "Made-up test data"], answer: 3, why: "Test data avoids risking real information." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Agent Tool Use and Automation",
    questions: [
      { objective: "O1", q: "A tool schema includes:", options: ["The model's training data", "A name, purpose and inputs", "A password", "A price list"], answer: 1, why: "That is what the model reads to choose and use the tool." },
      { objective: "O1", q: "JSON Schema is used to:", options: ["Store API keys", "Make pictures", "Describe the shape of tool inputs", "Train models"], answer: 2, why: "It describes types and required fields." },
      { objective: "O1", q: "A good tool does:", options: ["Whatever the model says", "Every job at once", "One clear job", "Nothing"], answer: 2, why: "Small, specific tools are easier to choose and safer." },
      { objective: "O2", q: "Who must enforce a tool's rules?", options: ["The tool's own code", "The model", "The user's browser", "Nobody"], answer: 0, why: "The model can be wrong or tricked." },
      { objective: "O2", q: "The file name '../secret.txt' is an example of:", options: ["A normal file", "A trigger", "A schema", "Path traversal"], answer: 3, why: "../ tries to leave the allowed folder." },
      { objective: "O2", q: "An allow list is:", options: ["A list of blocked users", "A list of the only permitted values", "A to-do list", "A model setting"], answer: 1, why: "Only listed values are accepted." },
      { objective: "O2", q: "Should an agent run model-written text as a shell command?", options: ["Yes, always", "Only on weekends", "Only if it is short", "No, never"], answer: 3, why: "That turns a model mistake into a system problem." },
      { objective: "O3", q: "A dry run:", options: ["Deletes test files", "Runs with no model", "Shows what would happen without doing it", "Runs twice"], answer: 2, why: "It previews the action safely." },
      { objective: "O3", q: "Which is a write tool?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Saving changes something." },
      { objective: "O3", q: "Before a real write, the person should see:", options: ["Only a thumbs-up", "The exact file, recipient or amount", "The API key", "Nothing"], answer: 1, why: "Approval must be about the real details." },
      { objective: "O3", q: "The model asks to save again right after you said no. You should:", options: ["Stop the run and read the log", "Say yes to make it stop", "Turn off approval", "Give it more tools"], answer: 0, why: "Retrying a refused write is a warning sign." },
      { objective: "O4", q: "Which is a schedule trigger?", options: ["A bad row", "A new form response", "A button press", "Every Monday at 8 am"], answer: 3, why: "Schedules start runs at set times." },
      { objective: "O4", q: "Naming reports by week (week-42) helps:", options: ["Make the model smarter", "Avoid duplicate reports on re-runs", "Hide the report", "Save tokens"], answer: 1, why: "The agent can check if that week's report already exists." },
      { objective: "O4", q: "Is Google Colab the right place to run a weekly schedule?", options: ["Yes, it runs forever", "Yes, it has a built-in calendar", "No, it is for building and testing", "Only for paid users"], answer: 2, why: "Use a scheduler or automation service for scheduled runs." },
      { objective: "O4", q: "Cron and Windows Task Scheduler are used to:", options: ["Check JSON", "Write prompts", "Run programs at set times", "Train models"], answer: 2, why: "They are schedulers." },
      { objective: "O5", q: "MCP stands for:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "It is an open standard for connecting AI apps to tools." },
      { objective: "O5", q: "MCP is compared on its own site to:", options: ["A phone charger cable only for Apple", "A password manager", "A spreadsheet", "A USB-C port for AI applications"], answer: 3, why: "One standard connection that many apps can use." },
      { objective: "O5", q: "Using MCP means your argument checks are:", options: ["No longer needed", "Still needed", "Done by the server's website", "Done by the model"], answer: 1, why: "MCP connects tools; it does not make them safe." },
      { objective: "O6", q: "A CSV row has a word where a number should be. A good agent:", options: ["Guesses a number", "Skips the whole report silently", "Deletes the file", "Reports the problem"], answer: 3, why: "Report data problems; never guess." },
      { objective: "O6", q: "An end-to-end test means:", options: ["Testing one function", "Reading the schema", "Running the whole automation start to finish", "Only checking the final answer"], answer: 2, why: "It checks every part working together." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      4,
      7,
      9,
      11,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Tools described",
        objective: "O1",
        notYet: "A tool has no schema or a vague name or purpose.",
        meets: "read_csv, calculator and save_report each have a name, purpose and typed inputs.",
        exceeds: "Descriptions are clear enough that the model picks the right tool first time."
      },
      {
        name: "Arguments checked",
        objective: "O2",
        notYet: "save_report accepts any file name or folder.",
        meets: "Only .txt or .md files, only in the reports folder; bad input gets a clear error.",
        exceeds: "read_csv is checked the same way and the errors are tested."
      },
      {
        name: "Dry run and approval",
        objective: "O3",
        notYet: "The report is written without a dry run or a yes.",
        meets: "Dry run is on by default and \"Save report? yes/no\" is asked before writing.",
        exceeds: "The approval shows the exact file name and a preview of the text."
      },
      {
        name: "Safe re-run",
        objective: "O4",
        notYet: "A second run for the same week makes a duplicate report.",
        meets: "A second run for the same week stops without a duplicate.",
        exceeds: "It says clearly which week's report already exists."
      },
      {
        name: "Full run logged",
        objective: "O6",
        notYet: "No log, or the run did not finish.",
        meets: "The log shows one full run from reading the CSV to the approval.",
        exceeds: "The summary reports any bad rows in the data."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who go on to course 5 of the agents program within 30 days",
      "Learners who report running a scheduled automation with approval on write actions within 30 days (follow-up survey)",
      "Learners who report no unwanted writes or duplicates from their automations (follow-up survey)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a web browser and internet; Colab or Python on your own computer",
      "A model API key from course 2 or a free local model",
      "A made-up CSV file of sales or expenses",
      "Your agent loop from course 3",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then build each safety layer live: schema, checks, dry run, approval.",
      "Give everyone the same made-up CSV so results can be compared; never use real customer or money records.",
      "Have learners try the bad file names from Lesson 2 aloud as a group to see each error.",
      "Stress that only trusted MCP servers should be used, with the least access needed.",
      "Score the final task with the rubric, and ask each learner to show their second run stopping without a duplicate."
    ]
  }
};
