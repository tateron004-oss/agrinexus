"use strict";

// Koach Learn course: Artificial Intelligence -> "Building AI Agents" (course 3 of the
// "Design, Build, and Deploy Autonomous AI Agents" program). Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "agentic-building-agents",
  category: "Artificial Intelligence",
  name: "Building AI Agents",
  skills: "Writing an agent loop in Python, Defining tools as functions, Asking the model for its next action in JSON, Keeping memory and a run log, Adding step limits and error handling",
  outcome: "build a small working AI agent in Python in a free Colab notebook: a loop that asks a model for its next action, runs one of two tools you wrote, feeds the result back, stops at a step limit, and logs every step.",
  about: [
    "This is course 3 of Design, Build, and Deploy Autonomous AI Agents. You have a design card (course 1) and a tested prompt (course 2). Now you build the agent itself, in plain Python, so you can see every moving part instead of hiding it inside a framework.",
    "Chapter 1 builds the loop: tools as Python functions, a prompt that makes the model choose an action in JSON, and the code that runs the action and feeds back the result. Chapter 2 makes it dependable: memory, a run log, step limits, error handling, and a look at agent frameworks you can use later.",
    "You need a Google account for Colab and a model API key (the Gemini API free tier from course 2 works, or a free local model with Ollama on your own computer). Code is shown as short lines in the lessons. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "In a Colab notebook, build an agent with two tools you wrote (for example calculator(expression) and lookup_note(topic) that reads from a small Python dictionary of notes). Give it the goal \"How many hours will I study this month if I study 45 minutes on each class day listed in my notes?\". The agent must choose tools in JSON, run them, feed results back, stop at a 6-step limit, handle one bad model reply without crashing, and print a log of every step.",
  chapters: [
    {
      name: "Chapter 1: The agent loop in code",
      lessons: [
        {
          title: "Tools are just functions",
          minutes: 5,
          goal: "Write two tools as Python functions with clear names and descriptions.",
          text: [
            "To an agent, a tool is a function your code runs when the model asks. The model never runs anything itself: it only writes the name of a tool and its input. Your code decides whether to run it.",
            "Start with safe, read-only tools. A calculator: def calculator(expression): with a body that only allows digits and + - * / ( ) . and then works out the answer. A notes lookup: NOTES = {'schedule': 'Class days: Mon, Wed, Thu'}, and def lookup_note(topic): return NOTES.get(topic, 'no note found').",
            "Collect them in a dictionary so the loop can find them by name: TOOLS = {'calculator': calculator, 'lookup_note': lookup_note}. Write a one-line description for each. The model reads those descriptions to choose, so they matter as much as the code."
          ],
          steps: ["Write each tool as a Python function with one input.", "Make it safe: check the input before using it.", "Return text the model can read, including a clear message on failure.", "Put the tools in a TOOLS dictionary.", "Write a one-line description of each tool."],
          words: [["Function", "a named block of code that takes input and returns a result."], ["Dictionary", "a Python collection of name and value pairs, like {'calculator': calculator}."], ["Read-only tool", "a tool that only looks things up and changes nothing."]],
          slides: [
            { title: "A tool is a function", bullets: ["The model only names the tool and its input", "Your code decides whether to run it"] },
            { title: "Two safe starter tools", bullets: ["calculator(expression): checks input, does math", "lookup_note(topic): reads from a dictionary"] },
            { title: "Make tools easy to choose", bullets: ["TOOLS = {name: function}", "One clear line describing each tool", "Return a clear message on failure"] }
          ],
          tryIt: "In a new Colab notebook, write calculator and lookup_note, put them in TOOLS, and test each by calling it yourself: calculator('45*12/60') and lookup_note('schedule').",
          youCanNow: "write safe tools as Python functions and register them by name."
        },
        {
          title: "Asking the model for its next action",
          minutes: 6,
          goal: "Write a prompt that makes the model reply with one action in JSON.",
          text: [
            "The model needs to know the goal, the tools and the reply format. Your system prompt lists each tool with its description and says: reply with only JSON, either {\"tool\": \"name\", \"input\": \"...\"} to use a tool, or {\"final\": \"...\"} when the goal is met.",
            "Add rules from your design card: use only the listed tools; one action per reply; if a tool result says it failed, try a different approach; never invent a tool result.",
            "Write a helper so the rest of your code does not care which provider you use: def ask_model(text): that calls your model (copy the call from your provider's quickstart, as in course 2) and returns the answer text. If you change providers later, only ask_model changes."
          ],
          steps: ["List each tool name and its description in the system prompt.", "Give the two JSON reply shapes: tool or final.", "Add the rules from your design card.", "Write ask_model(text) that returns the model's answer text.", "Test it once with the goal and print the reply."],
          words: [["Action", "one thing the agent decides to do next, like using a tool or giving the final answer."], ["Helper function", "a small function that hides details, like which model provider you call."]],
          slides: [
            { title: "The prompt tells the model", bullets: ["The goal", "The tools and what each does", "The exact JSON reply shapes"] },
            { title: "Two reply shapes", bullets: ["{\"tool\": \"name\", \"input\": \"...\"}", "{\"final\": \"...\"} when the goal is met"] },
            { title: "Rules from your design card", bullets: ["Only listed tools, one action per reply", "If a tool fails, try another way", "Never invent a tool result"] },
            { title: "Hide the provider", bullets: ["ask_model(text) returns the answer text", "Switch providers by changing one function"] }
          ],
          tryIt: "Write the system prompt and ask_model. Send the goal from the final task and print the reply. Did it choose lookup_note first? If not, improve the tool descriptions.",
          youCanNow: "get a model to choose its next action as JSON from a list of tools."
        },
        {
          title: "Running the loop: act and feed back",
          minutes: 6,
          goal: "Write the loop that runs the chosen tool and feeds the result back.",
          text: [
            "The loop is short. history = [] holds what happened. For each step: build the text (system prompt, goal, history), call ask_model, parse the JSON. If it has 'final', print it and stop. If it has 'tool', look it up in TOOLS, run it with the input, and add a line to history: the action and the result.",
            "Feeding back the result is the observe step from course 1. Without it the model would ask for the same thing forever. With it, the model sees \"lookup_note(schedule) returned: Class days: Mon, Wed, Thu\" and can decide the next step, such as using the calculator.",
            "If the model names a tool that is not in TOOLS, do not crash: add \"Unknown tool: X. Use one of: calculator, lookup_note\" to the history and continue. Clear messages back to the model are how an agent recovers from its own mistakes."
          ],
          steps: ["history = []", "Build the text: system prompt, goal, history.", "Call ask_model and parse the JSON.", "If 'final': print and stop.", "If 'tool': run it from TOOLS and add the action and result to history."],
          words: [["History", "the running list of actions and results the agent has seen this run."], ["Observation", "the result of a tool, fed back to the model."]],
          slides: [
            { title: "Each step of the loop", bullets: ["Build text: prompt, goal, history", "Ask the model, parse JSON", "Final? Stop. Tool? Run it."] },
            { title: "Feed back the result", bullets: ["Add the action and result to history", "The model sees it next step", "Without it, the agent repeats itself"] },
            { title: "Unknown tool?", bullets: ["Do not crash", "Tell the model which tools exist", "Let it try again"] }
          ],
          tryIt: "Write the loop and run it on the final-task goal. Print history after each step. Count how many steps it took to reach a final answer.",
          youCanNow: "write an agent loop that runs tools and feeds the results back to the model."
        }
      ],
      check: {
        title: "Knowledge Check 1: The agent loop in code",
        questions: [
          { q: "Who actually runs a tool in an agent?", options: ["The model", "The user's browser", "Your code", "The tool's website"], answer: 2, why: "The model only names the tool; your code decides and runs it." },
          { q: "Why does each tool need a clear one-line description?", options: ["The model reads it to choose the right tool", "It makes the code run faster", "Python requires it", "It hides the tool from the model"], answer: 0, why: "Descriptions are how the model knows what each tool is for." },
          { q: "The model replies {\"final\": \"About 27 hours\"}. What does the loop do?", options: ["Runs the calculator", "Starts over", "Asks the user for a password", "Prints the answer and stops"], answer: 3, why: "A final reply means the goal is met." },
          { q: "What is the purpose of the ask_model helper?", options: ["To run tools", "To keep provider details in one place", "To store the API key in the code", "To skip the loop"], answer: 1, why: "Changing providers then means changing one function." },
          { q: "The model asks for a tool named \"search\" that you did not write. Best response?", options: ["Crash so you notice", "Tell the model which tools exist and continue", "Run any search you can find", "Stop the agent forever"], answer: 1, why: "Clear feedback lets the agent recover." }
        ]
      }
    },
    {
      name: "Chapter 2: Making the agent dependable",
      lessons: [
        {
          title: "Memory and a run log",
          minutes: 5,
          goal: "Keep short-term memory tidy and log every step.",
          text: [
            "Short-term memory is the history list you already have. It grows every step, and everything in it is sent to the model, which costs tokens and time. For long runs, keep the last few steps in full and replace older steps with a one-line summary.",
            "Long-term memory is anything saved between runs: a notes file, a spreadsheet, a small database. Save only what the agent truly needs next time, and never save private data you do not need.",
            "A run log is for you, not the model. For each step, record the step number, the model's raw reply, the tool and input, the result and the time. When the agent does something odd, the log tells you why. A simple way: log.append({'step': n, 'reply': reply, 'result': result}) and print it at the end."
          ],
          words: [["Short-term memory", "what the agent sees during one run: the history so far."], ["Long-term memory", "information saved between runs, such as a notes file."], ["Run log", "your record of every step the agent took, for checking and debugging."]],
          slides: [
            { title: "Short-term memory", bullets: ["The history list, sent every step", "Long history costs tokens and time", "Summarize older steps"] },
            { title: "Long-term memory", bullets: ["Saved between runs: file or database", "Save only what is needed", "No private data you do not need"] },
            { title: "The run log", bullets: ["Step, raw reply, tool, input, result, time", "For you, not the model", "Read it when the agent acts oddly"] }
          ],
          tryIt: "Add a log list to your agent and record each step. Run it, then print the log as a neat table: step, tool, input, result.",
          youCanNow: "manage an agent's memory and keep a run log you can read."
        },
        {
          title: "Step limits, bad replies and errors",
          minutes: 6,
          goal: "Add a step limit and handle bad model replies and tool errors.",
          text: [
            "Every loop needs a ceiling: MAX_STEPS = 6 and for step in range(MAX_STEPS): instead of a loop that runs forever. If it reaches the limit without a final answer, stop and report \"Stopped: step limit reached\" with the log.",
            "Bad replies happen: extra words around the JSON, a missing key, an empty answer. Parse inside try and except. On failure, add \"Your last reply was not valid JSON. Reply with only JSON.\" to history and let the next step try again. Count these; if there are two in a row, stop.",
            "Tools fail too: a calculator gets letters, a file is missing. Each tool should catch its own errors and return a clear message such as \"calculator error: only numbers and + - * / allowed\". The model can then fix its input on the next step."
          ],
          steps: ["Set MAX_STEPS and loop with range(MAX_STEPS).", "Parse replies inside try / except.", "On a bad reply, tell the model and continue.", "Stop after two bad replies in a row.", "Make every tool return a clear error message instead of crashing."],
          words: [["Step limit", "the most steps an agent may take in one run."], ["Exception", "an error that happens while a program runs; try / except catches it."]],
          slides: [
            { title: "Always set a ceiling", bullets: ["MAX_STEPS = 6", "for step in range(MAX_STEPS):", "At the limit: stop and report"] },
            { title: "Bad model replies", bullets: ["Parse inside try / except", "Tell the model: reply with only JSON", "Two bad replies in a row: stop"] },
            { title: "Tool errors", bullets: ["Each tool catches its own errors", "Return a clear error message", "The model fixes its input next step"] }
          ],
          tryIt: "Test your safety code: temporarily make ask_model return \"hello\" on step 2, and send calculator the input 'abc'. Check the agent recovers, and that it stops at the step limit when you set MAX_STEPS = 2.",
          youCanNow: "keep an agent from looping forever and help it recover from bad replies and tool errors."
        },
        {
          title: "Frameworks, and finishing your first agent",
          minutes: 6,
          goal: "Finish and test your agent, and know when a framework would help.",
          text: [
            "Agent frameworks are libraries that give you the loop, tool handling and memory ready-made. Well-known ones include LangGraph, CrewAI, the OpenAI Agents SDK and Google's Agent Development Kit, and many model providers support native tool calling, where the model returns a structured tool call for you. They change often, so read each project's own documentation for current setup.",
            "Building the loop yourself first means you understand what a framework does for you, and you can debug it when it goes wrong. Many real agents are still a plain loop like yours.",
            "Before you call your agent done, test it like course 2: three goals it should finish, one it cannot (it should say so, not invent an answer), and one bad input. Read the log for each run."
          ],
          steps: ["Run the agent on three goals it should finish.", "Run one goal it cannot finish: it should say so.", "Run one bad input.", "Read the log for each run.", "Fix one weakness and rerun all five."],
          words: [["Framework", "a ready-made library that handles common parts of a program for you."], ["Native tool calling", "a model feature where the model returns a structured request to use a tool."]],
          slides: [
            { title: "Agent frameworks", bullets: ["Ready-made loop, tools and memory", "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK", "They change often: read their own docs"] },
            { title: "Why build it by hand first", bullets: ["You understand what a framework does", "You can debug it", "Many real agents are a plain loop"] },
            { title: "Test before you call it done", bullets: ["Three goals it should finish", "One it cannot finish: it should say so", "One bad input; read every log"] }
          ],
          tryIt: "Final task: finish your two-tool agent on the study-hours goal with a 6-step limit, one recovered bad reply and a printed log of every step. Then run the five tests above and write two sentences on what you fixed.",
          youCanNow: "build, test and explain a working AI agent in plain Python."
        }
      ],
      check: {
        title: "Knowledge Check 2: Making the agent dependable",
        questions: [
          { q: "Why summarize older steps in a long run?", options: ["The model forgets nothing anyway", "It hides mistakes", "Python cannot hold long lists", "Long history costs tokens and time"], answer: 3, why: "Everything in history is sent each step." },
          { q: "Who is the run log mainly for?", options: ["You, to see why the agent acted as it did", "The model", "The API provider", "Other users"], answer: 0, why: "The log is for checking and debugging." },
          { q: "What should happen when an agent reaches MAX_STEPS without a final answer?", options: ["Keep going anyway", "Make up a final answer", "Stop and report that the limit was reached", "Delete the log"], answer: 2, why: "Report honestly and show the log." },
          { q: "The calculator gets the input 'abc'. A well-built tool:", options: ["Crashes the whole agent", "Deletes the notebook", "Returns zero silently", "Returns a clear error message the model can use"], answer: 3, why: "Clear error messages let the model fix its input." },
          { q: "Which is a good test before calling the agent done?", options: ["Only goals it is sure to finish", "No tests, just ship it", "A goal it cannot finish, to see it says so", "Running it once"], answer: 2, why: "An honest \"I cannot\" beats an invented answer." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Building AI Agents",
    questions: [
      { q: "To an agent, a tool is:", options: ["A website", "A function your code runs when the model asks", "The model itself", "A password"], answer: 1, why: "Tools are functions; the model only names them." },
      { q: "Which is the safest kind of tool to start with?", options: ["A read-only lookup", "A delete-file tool", "A payment tool", "An email sender"], answer: 0, why: "Read-only tools change nothing." },
      { q: "TOOLS = {'calculator': calculator} lets the loop:", options: ["Find a tool by its name", "Skip the model", "Store the API key", "Make the model faster"], answer: 0, why: "The dictionary maps names to functions." },
      { q: "A tool should check its input because:", options: ["Python requires it", "The model may send something unsafe or wrong", "It saves tokens", "It hides the result"], answer: 1, why: "Never trust model output blindly." },
      { q: "Which reply means the agent wants to use a tool?", options: ["{\"final\": \"done\"}", "\"hello\"", "{\"tool\": \"calculator\", \"input\": \"2+2\"}", "An empty reply"], answer: 2, why: "The tool shape names a tool and its input." },
      { q: "A rule that helps honesty in the system prompt is:", options: ["\"Ignore failures.\"", "\"Always answer in one step.\"", "\"Use any tool you like.\"", "\"Never invent a tool result.\""], answer: 3, why: "Invented results are a common agent failure." },
      { q: "ask_model(text) is useful because:", options: ["It makes keys public", "It runs the tools", "It keeps provider details in one place", "It removes the loop"], answer: 2, why: "Switching providers changes only that function." },
      { q: "Feeding a tool result back into history is the:", options: ["Observe step", "Think step", "Trigger", "Final answer"], answer: 0, why: "Observing results lets the model choose the next step." },
      { q: "Without feeding results back, an agent will likely:", options: ["Finish faster", "Write better JSON", "Become cheaper", "Repeat the same action"], answer: 3, why: "It never learns what happened." },
      { q: "The model names an unknown tool. The loop should:", options: ["Crash", "Tell the model the valid tool names and continue", "Install a new tool automatically", "Give it full computer access"], answer: 1, why: "Clear feedback helps the agent recover." },
      { q: "Short-term memory in your agent is:", options: ["A file saved forever", "The history list for this run", "Your Google account", "The model's training data"], answer: 1, why: "History is what the model sees this run." },
      { q: "Long-term memory should store:", options: ["Everything, including private data", "Nothing ever", "Your API key", "Only what the agent needs next time"], answer: 3, why: "Save only what is needed; avoid private data." },
      { q: "A good run log records:", options: ["Step, raw reply, tool, input and result", "Only the final answer", "Your password", "Nothing"], answer: 0, why: "Full steps let you see why things happened." },
      { q: "for step in range(MAX_STEPS): gives the agent:", options: ["Unlimited steps", "More tools", "A ceiling on steps", "A faster model"], answer: 2, why: "The loop cannot run forever." },
      { q: "The model replies with words around the JSON. A good agent:", options: ["Turns off the step limit", "Crashes", "Accepts the words as the answer", "Tells the model to reply with only JSON and continues"], answer: 3, why: "Recover once, and stop after repeated failures." },
      { q: "When should the agent stop after bad replies?", options: ["Never", "After the first word", "After two in a row", "Only when the computer turns off"], answer: 2, why: "Repeated failures mean something is wrong." },
      { q: "Agent frameworks:", options: ["Never change", "Give a ready-made loop, tools and memory", "Replace the need for any testing", "Are required for every agent"], answer: 1, why: "They help, but change often and still need testing." },
      { q: "Native tool calling means:", options: ["The model returns a structured request to use a tool", "The model runs code on your computer by itself", "You type the tools by hand", "Tools run without code"], answer: 0, why: "The provider returns a structured tool call your code runs." },
      { q: "Why build the loop by hand first?", options: ["You understand and can debug what a framework does", "Frameworks are illegal", "It is always faster", "Models require it"], answer: 0, why: "Knowing the parts makes debugging possible." },
      { q: "Given a goal it cannot reach, a good agent:", options: ["Invents an answer", "Says it cannot and shows what it tried", "Loops forever", "Deletes its log"], answer: 1, why: "Honest failure is better than a made-up answer." }
    ]
  }
};
