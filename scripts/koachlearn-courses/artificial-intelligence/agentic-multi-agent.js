"use strict";

// Koach Learn course: Artificial Intelligence -> "Multi-Agent Systems" (course 5 of the
// "Design, Build, and Deploy Autonomous AI Agents" program). Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "agentic-multi-agent",
  category: "Artificial Intelligence",
  name: "Multi-Agent Systems",
  skills: "Deciding when one agent is enough, Choosing a pattern: pipeline, orchestrator, reviewer, Writing roles and handoffs, Sharing state safely, Stopping review loops, Comparing against a single agent",
  outcome: "design and build a small multi-agent system in Python, a writer agent and a reviewer agent with clear roles, a written handoff, a shared state and a round limit, and show with a simple test whether it beats a single agent.",
  about: [
    "This is course 5 of Design, Build, and Deploy Autonomous AI Agents. A multi-agent system splits a job between several agents, each with its own role, instructions and tools, the way a team splits work. Done well, it can raise quality. Done badly, it multiplies cost, confusion and mistakes.",
    "Chapter 1 is about design: when to use more than one agent, the common patterns (pipeline, orchestrator and workers, writer and reviewer), and how to write roles and handoffs. Chapter 2 is about building: shared state, stopping endless back-and-forth, keeping humans in charge, and testing whether the team actually beats one agent.",
    "You will reuse your Python loop and ask_model helper from course 3. Code is shown as short lines in the lessons. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build a two-agent system in Python: a writer agent drafts a one-paragraph product description from a short fact sheet, and a reviewer agent checks it against a written checklist (uses only facts from the sheet, under 80 words, no claims like \"best\" or \"guaranteed\") and returns JSON: approve or revise with reasons. Pass the work through a shared state dictionary, stop after at most 3 rounds, and print the full log. Then run the same 3 fact sheets through a single agent and write which did better and why.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in the Design, Build, and Deploy Autonomous AI Agents program who finished courses 1 to 4: small business owners, career changers, students and staff who want to know when and how to use a team of agents.",
    startingPoint: "Can build a single agent in Python with tools, argument checks, a step limit, a run log and approval on write actions. Have not split a job between agents.",
    gap: "Multi-agent systems are popular, but done badly they multiply cost, confusion and mistakes. Learners need to decide when a team is worth it, design clear roles and handoffs, stop endless loops, keep a person in charge and prove with a test whether the team beats one agent.",
    constraints: [
      "Reading level: plain words; code shown as short lines to copy",
      "Devices: a computer with a web browser; free API tiers limit how many model calls you can make",
      "Practice uses made-up fact sheets only",
      "Every loop has a round limit and hands unresolved work to a person",
      "Time: short lessons with one practice task each"
    ],
    prerequisites: "Courses 3 and 4 of Design, Build, and Deploy Autonomous AI Agents (\"Building AI Agents\" and \"AI Agent Tool Use and Automation\")."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a job you might automate", action: "decide whether it needs one agent or a team, using the hiring test", standard: "with a one-sentence reason for each job" },
    { id: "O2", condition: "Given a job that needs a team", action: "choose a pattern (pipeline, orchestrator and workers, or writer and reviewer) and draw how work passes between agents", standard: "labeling what passes along each arrow" },
    { id: "O3", condition: "For each agent in the team", action: "write a role prompt and a JSON handoff format", standard: "with one job per agent and a reviewer checklist that can be checked" },
    { id: "O4", condition: "In your Python code", action: "keep the team's work in one shared state that only your code updates", standard: "logging the state after each step" },
    { id: "O5", condition: "Given a writer-reviewer loop", action: "add a round limit and hand unresolved work to a person", standard: "stopping with needs_human after at most 3 rounds" },
    { id: "O6", condition: "Given the same test inputs", action: "compare the team with a single-agent baseline on quality and model calls", standard: "scoring both with the same checklist and choosing the simpler one when scores tie" }
  ],
  chapters: [
    {
      name: "Chapter 1: Designing a team of agents",
      lessons: [
        {
          objectives: ["O1"],
          title: "When one agent is enough, and when it is not",
          minutes: 5,
          goal: "Decide whether a task needs more than one agent.",
          text: [
            "Start with one agent. Every extra agent adds model calls (cost and time), handoffs (places to lose information) and more things to test. Many tasks that look like they need a team work fine with one well-prompted agent and good tools.",
            "Consider more than one agent when: the job has clearly different skills (research, then writing, then checking); one prompt is getting too long and confused; you want an independent check, since a reviewer with fresh instructions catches mistakes the writer misses; or parts can run at the same time.",
            "A useful test: if you would hire two different people for it, two agents may help. If one person could do it with a checklist, one agent with a checklist is probably better."
          ],
          words: [["Multi-agent system", "several AI agents, each with its own role, working together on one job."], ["Handoff", "passing work and information from one agent to another."], ["Overhead", "the extra cost and effort a design adds."]],
          slides: [
            { title: "Start with one agent", bullets: ["Every extra agent adds cost and time", "Each handoff can lose information", "More parts to test"] },
            { title: "Consider a team when", bullets: ["The job needs clearly different skills", "One prompt is too long and confused", "You want an independent check", "Parts can run at the same time"] },
            { title: "The hiring test", bullets: ["Two different people? Maybe two agents", "One person with a checklist? One agent"] }
          ],
          tryIt: "List three jobs you might automate. For each, write \"one agent\" or \"team\" and one sentence on why, using the hiring test.",
          youCanNow: "decide when a task truly needs more than one agent.",
          quickCheck: [
            { objective: "O1", q: "What is the hiring test?", options: ["Asking whether a person would pass a job interview", "Testing whether a model can be hired by a company", "Asking whether you would hire two different people for this job", "Counting how many tools a job needs"], answer: 2, why: "If you would not hire two people, one agent is usually enough." },
            { objective: "O1", q: "A job is sorting messages into four categories with a checklist. What would you build?", options: ["One agent with clear instructions", "A team of four agents, one per category", "An orchestrator with workers", "A writer and a reviewer"], answer: 0, why: "A simple, well-defined job does not need the extra cost and handoffs of a team." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Common patterns: pipeline, orchestrator, reviewer",
          minutes: 6,
          goal: "Pick a multi-agent pattern that fits a task.",
          text: [
            "Pipeline: agents work in a fixed order, each passing its output to the next, like an assembly line: research, then write, then format. Simple to build and to debug, because you always know who acts next.",
            "Orchestrator and workers: one agent (the orchestrator) breaks the goal into parts, hands each part to a worker agent, then combines the results. Flexible, but the orchestrator can split the work badly, and more freedom means more to check.",
            "Writer and reviewer: one agent produces, a second judges against a checklist and either approves or sends it back with reasons. This is the most useful pattern for beginners because it adds an independent quality check. It needs a round limit so the two never argue forever."
          ],
          words: [["Pipeline", "agents working in a fixed order, each passing work to the next."], ["Orchestrator", "an agent that splits a goal into tasks and hands them to other agents."], ["Reviewer agent", "an agent that checks another agent's work against clear rules."]],
          slides: [
            { title: "Pipeline", bullets: ["Fixed order: research, write, format", "Easy to build and debug"] },
            { title: "Orchestrator and workers", bullets: ["One agent splits the goal", "Workers do the parts", "Flexible, but harder to check"] },
            { title: "Writer and reviewer", bullets: ["One produces, one judges with a checklist", "Approve, or send back with reasons", "Needs a round limit"] }
          ],
          tryIt: "For the \"team\" job from Lesson 1, draw the agents as boxes with arrows (on paper is fine). Label which pattern it is and what passes along each arrow.",
          youCanNow: "choose between a pipeline, an orchestrator with workers, and a writer with a reviewer.",
          quickCheck: [
            { objective: "O2", q: "What does the orchestrator do in an orchestrator-and-workers pattern?", options: ["Checks every draft against a checklist", "Splits the goal and hands parts to workers", "Saves files to disk", "Runs only at the end"], answer: 1, why: "The orchestrator divides the work and passes parts to worker agents." },
            { objective: "O2", q: "Your job always goes research, then write, then format, in that order. Which pattern fits?", options: ["Writer and reviewer", "Orchestrator and workers", "No pattern; use three chatbots", "Pipeline"], answer: 3, why: "A fixed order of steps is a pipeline, which is also easy to debug." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Writing roles and handoffs",
          minutes: 5,
          goal: "Write a role prompt for each agent and a handoff format between them.",
          text: [
            "Each agent gets its own short system prompt: who it is, its one job, its tools (only what it needs), and its output format. The writer does not need the reviewer's checklist in full; the reviewer does not need writing tools at all.",
            "The handoff is the message passed between agents. Make it structured, not chatty: {\"draft\": \"...\", \"facts_used\": [...]} from writer to reviewer, and {\"decision\": \"approve\" or \"revise\", \"reasons\": [...]} back. Structured handoffs make it obvious what was passed and easy for code to check.",
            "Give the reviewer a checklist, not a feeling. \"Is it good?\" gets agreement. \"Does every fact appear in the fact sheet? Is it under 80 words? Does it avoid the words best and guaranteed?\" gets a real check."
          ],
          steps: ["Write a role prompt for each agent: role, one job, tools, output format.", "Give each agent only the tools it needs.", "Define the handoff as JSON with fixed keys.", "Write the reviewer's checklist as yes/no questions."],
          words: [["Role prompt", "the system prompt that gives one agent its job and rules."], ["Checklist", "a list of specific yes/no checks used to judge work."]],
          slides: [
            { title: "One role prompt per agent", bullets: ["Who it is and its one job", "Only the tools it needs", "Its output format"] },
            { title: "Structured handoffs", bullets: ["Writer -> reviewer: draft and facts used", "Reviewer -> writer: decision and reasons", "Code can check every handoff"] },
            { title: "Give the reviewer a checklist", bullets: ["\"Is it good?\" gets easy agreement", "Yes/no checks get a real review"] }
          ],
          tryIt: "Write the writer's role prompt, the reviewer's role prompt with a 3-item checklist, and the two JSON handoff formats for the final-task system.",
          youCanNow: "write role prompts and structured handoffs for a team of agents.",
          quickCheck: [
            { objective: "O3", q: "What belongs in a role prompt?", options: ["The agent's one job, its tools and its output format", "Every other agent's instructions", "Your API key", "A list of all past runs"], answer: 0, why: "A role prompt keeps each agent focused on its own job and format." },
            { objective: "O3", q: "Your reviewer is told \"Check if the draft is good.\" What would you change?", options: ["Nothing, it is short", "Give it writing tools so it can fix drafts", "Replace it with a checklist of specific questions it can answer yes or no", "Let it decide its own rules"], answer: 2, why: "Vague review questions lead to agreeing too easily; a checklist gives a real check." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Designing a team of agents",
        questions: [
          { objective: "O1", q: "What is the best starting point for most new agent projects?", options: ["Five agents", "An orchestrator with ten workers", "One agent with good tools", "No agents"], answer: 2, why: "Extra agents add cost and complexity; start simple." },
          { objective: "O1", q: "Which is a good reason to add a reviewer agent?", options: ["To get an independent check against clear rules", "To make the project look bigger", "To use more tokens", "Because two is always better"], answer: 0, why: "Fresh instructions and a checklist catch mistakes the writer misses." },
          { objective: "O2", q: "Research, then write, then format, in a fixed order, is a:", options: ["Schema", "Orchestrator", "Trigger", "Pipeline"], answer: 3, why: "A pipeline passes work along a fixed order." },
          { objective: "O3", q: "Which handoff is easiest for code to check?", options: ["\"Here's what I think, hope it helps!\"", "{\"decision\": \"revise\", \"reasons\": [\"over 80 words\"]}", "A long paragraph", "A picture"], answer: 1, why: "Structured JSON has fixed keys code can read." },
          { objective: "O3", q: "Which reviewer instruction gives the most real check?", options: ["\"Is it good?\"", "\"Be critical.\"", "\"Do you like it?\"", "\"Is every fact in the fact sheet, and is it under 80 words?\""], answer: 3, why: "Specific yes/no checks prevent easy agreement." }
        ]
      }
    },
    {
      name: "Chapter 2: Building and testing the team",
      lessons: [
        {
          objectives: ["O4"],
          title: "Shared state: one place for the work",
          minutes: 5,
          goal: "Keep a team's work in one shared state that every agent reads from.",
          text: [
            "Shared state is one place where the team's work lives, owned by your code, not by any agent. In Python, a dictionary works: state = {'facts': FACTS, 'draft': None, 'reviews': [], 'round': 0, 'status': 'drafting'}.",
            "Each agent gets only the parts it needs and returns a handoff; your code checks the handoff and updates state. The writer reads facts and the last review; the reviewer reads facts and the draft. No agent edits state directly.",
            "This keeps the truth in one place, makes the log easy (save state after each step), and stops agents from passing around copies that drift apart. If one agent's output is bad, your code can refuse it before it reaches the next agent."
          ],
          steps: ["Create a state dictionary with every field the team needs.", "Give each agent only the fields it needs.", "Check each handoff in code before updating state.", "Save a copy of state to the log after each step."],
          words: [["Shared state", "the single record of a team's work that the code keeps and every agent reads from."], ["Drift", "when copies of information slowly become different from each other."]],
          slides: [
            { title: "One place for the work", bullets: ["state = {facts, draft, reviews, round, status}", "Owned by your code, not an agent"] },
            { title: "Agents read, code writes", bullets: ["Each agent gets only the fields it needs", "Code checks the handoff, then updates state"] },
            { title: "Why it helps", bullets: ["One truth, no drifting copies", "Easy log: save state each step", "Bad output stopped before the next agent"] }
          ],
          tryIt: "Create the state dictionary for the final task. Write two functions, run_writer(state) and run_reviewer(state), that each call ask_model with their role prompt and return parsed JSON, without changing state themselves.",
          youCanNow: "keep a multi-agent system's work in one shared state controlled by your code.",
          quickCheck: [
            { objective: "O4", q: "What is shared state in a multi-agent system?", options: ["Each agent's private notes", "One place, owned by your code, that holds the team's work", "The model's memory between days", "A shared password"], answer: 1, why: "One shared state that your code updates keeps every agent working from the same facts." },
            { objective: "O4", q: "The writer and reviewer each keep their own copy of the draft, and the copies start to differ. What would you do?", options: ["Let each agent update the state directly", "Add a third agent to merge them", "Ignore it if the final answer looks fine", "Keep one shared state that only your code updates after checking each handoff"], answer: 3, why: "Separate copies drift; one checked shared state prevents it." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Stopping loops and keeping humans in charge",
          minutes: 5,
          goal: "Add a round limit and a human escalation to a writer-reviewer loop.",
          text: [
            "Two agents can loop forever: the reviewer always finds something, the writer always changes something. Set MAX_ROUNDS = 3. If the reviewer has not approved by then, stop with status 'needs_human' and show the last draft and the reasons.",
            "Watch for two other team failures. Rubber-stamping: the reviewer approves everything, often because its checklist is vague. Ping-pong: the writer fixes one problem and brings back an old one. Read the log for both.",
            "Keep humans in charge of the result. The team produces a draft and a review; a person approves anything that will be published, sent or used to make a decision. More agents do not remove the need for that checkpoint; they make it more important."
          ],
          steps: ["Set MAX_ROUNDS.", "Loop: writer drafts, reviewer decides.", "On approve: status 'approved', stop.", "On revise: pass the reasons back to the writer.", "At the limit: status 'needs_human', show the draft and reasons."],
          words: [["Round", "one cycle of draft and review."], ["Rubber-stamping", "approving everything without really checking."], ["Escalation", "handing a problem to a person when the system cannot settle it."]],
          slides: [
            { title: "Two agents can loop forever", bullets: ["MAX_ROUNDS = 3", "No approval by then: 'needs_human'"] },
            { title: "Two team failures", bullets: ["Rubber-stamping: approves everything", "Ping-pong: old problems come back", "Read the log for both"] },
            { title: "Humans stay in charge", bullets: ["The team drafts and reviews", "A person approves what is published or sent"] }
          ],
          tryIt: "Write the writer-reviewer loop with MAX_ROUNDS = 3. Test it with a fact sheet where the writer is likely to exaggerate. Then test the limit by making the reviewer's checklist impossible (\"under 5 words\") and confirm it stops with needs_human.",
          youCanNow: "stop agent ping-pong with a round limit and hand unresolved work to a person.",
          quickCheck: [
            { objective: "O5", q: "What is ping-pong in a writer-reviewer loop?", options: ["Fixing one problem brings back an old one, round after round", "The reviewer approving every draft", "Two agents running at the same time", "A fast loop that finishes in one round"], answer: 0, why: "Ping-pong is endless back-and-forth, which is why the loop needs a round limit." },
            { objective: "O5", q: "The reviewer has not approved after 3 rounds. What should the system do?", options: ["Approve the last draft anyway", "Start again with round 1", "Stop with needs_human and show the draft and the reasons", "Raise the limit to 10 rounds"], answer: 2, why: "Unresolved work goes to a person with everything they need to decide." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Does the team beat one agent? Testing it",
          minutes: 6,
          goal: "Compare a multi-agent system with a single agent on the same tests.",
          text: [
            "A team is only worth it if it does better. Test it the way you tested prompts in course 2: the same inputs, a clear score, and a comparison. Make three fact sheets, run them through the team and through a single agent that has the checklist in its own prompt.",
            "Score each output with the reviewer's checklist yourself (not with the reviewer agent), and count model calls for each approach. Model calls stand in for cost and time.",
            "Write the result honestly. If the single agent scored the same with a third of the calls, use the single agent. If the team caught real mistakes the single agent missed, the extra calls bought you quality. Either answer is a good engineering result."
          ],
          steps: ["Make three test fact sheets.", "Run each through the team and through a single agent.", "Score every output yourself with the checklist.", "Count model calls for each approach.", "Write which approach wins and why."],
          words: [["Baseline", "the simple version you compare against, here a single agent."], ["Model call", "one request to the model; more calls mean more cost and time."]],
          slides: [
            { title: "A team must earn its place", bullets: ["Same inputs, clear score, comparison", "Baseline: one agent with the checklist"] },
            { title: "Measure two things", bullets: ["Quality: score with the checklist yourself", "Cost: count model calls"] },
            { title: "Report honestly", bullets: ["Same score, fewer calls? Use one agent", "Real mistakes caught? The team earns it"] }
          ],
          tryIt: "Final task: finish the writer-reviewer system with shared state, structured handoffs and MAX_ROUNDS = 3, run it on three fact sheets, run a single-agent baseline on the same sheets, and write a short comparison of quality and model calls.",
          youCanNow: "build a small multi-agent system and prove whether it beats a single agent.",
          quickCheck: [
            { objective: "O6", q: "What is a baseline in this course?", options: ["The first draft the writer makes", "A single agent you compare the team against", "The lowest score allowed", "The round limit"], answer: 1, why: "Comparing with a single agent shows whether the team is worth its extra cost." },
            { objective: "O6", q: "The team scores a little higher than one agent but uses three times the model calls. What would you do?", options: ["Always pick the team, because teams are better", "Stop testing", "Add more agents to raise the score", "Weigh whether the small gain is worth the extra cost and time, and write down why"], answer: 3, why: "Model calls stand for cost and time, so the choice weighs quality against them." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Building and testing the team",
        questions: [
          { objective: "O4", q: "Who should update the shared state?", options: ["Any agent, whenever it likes", "The reviewer only", "Your code, after checking each handoff", "Nobody"], answer: 2, why: "Code-owned state keeps one truth and blocks bad output." },
          { objective: "O5", q: "The reviewer has not approved after 3 rounds. What should happen?", options: ["Stop with 'needs_human' and show the draft and reasons", "Approve it automatically", "Keep going until it approves", "Delete the draft"], answer: 0, why: "Escalate to a person instead of looping." },
          { objective: "O5", q: "The reviewer approves every draft, even bad ones. This is:", options: ["Ping-pong", "Rubber-stamping", "A pipeline", "Shared state"], answer: 1, why: "Vague checklists lead to approving everything." },
          { objective: "O6", q: "How should you score team and single-agent outputs?", options: ["Score them yourself with the same checklist", "Ask the reviewer agent", "Pick the longer one", "Count the words only"], answer: 0, why: "An independent, consistent score makes the comparison fair." },
          { objective: "O6", q: "The single agent scores the same as the team with a third of the model calls. What should you do?", options: ["Use the team anyway", "Add more agents", "Stop testing", "Use the single agent"], answer: 3, why: "Same quality for less cost means the simpler design wins." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Multi-Agent Systems",
    questions: [
      { objective: "O1", q: "A multi-agent system is:", options: ["One agent with a long prompt", "Several agents with their own roles working on one job", "A chatbot with many users", "A database"], answer: 1, why: "Each agent has its own role, instructions and tools." },
      { objective: "O1", q: "Each extra agent adds:", options: ["Free quality", "Nothing", "Cost, handoffs and testing work", "Less time"], answer: 2, why: "More agents mean more calls and more to check." },
      { objective: "O1", q: "The hiring test asks:", options: ["Is the agent friendly?", "How much does the model cost?", "Would you hire two different people for this job?", "Is the prompt long?"], answer: 2, why: "Clearly different skills suggest separate agents." },
      { objective: "O1", q: "Which task most likely needs only one agent?", options: ["Sorting messages into four categories with a checklist", "Research, write and fact-check a long report", "Running ten searches at once", "Writing and independently reviewing ads"], answer: 0, why: "One person with a checklist could do it." },
      { objective: "O2", q: "In an orchestrator pattern, the orchestrator:", options: ["Approves its own work", "Only formats text", "Stores the API key", "Splits the goal and hands parts to workers"], answer: 3, why: "It plans and delegates, then combines results." },
      { objective: "O2", q: "Why is writer-and-reviewer good for beginners?", options: ["It needs no limits", "It adds an independent quality check", "It uses no model", "It never loops"], answer: 1, why: "A second agent with a checklist catches mistakes." },
      { objective: "O2", q: "A pipeline is easy to debug because:", options: ["It runs in secret", "It has no agents", "It never fails", "You always know which agent acts next"], answer: 3, why: "The fixed order makes each step clear." },
      { objective: "O3", q: "A role prompt should include:", options: ["Your password", "Every other agent's full prompt", "The agent's one job, tools and output format", "A joke"], answer: 2, why: "Each agent needs only its own role and rules." },
      { objective: "O3", q: "Should the reviewer agent have writing tools?", options: ["No, only what it needs to review", "Yes, all tools", "Only the email tool", "It should have the API key"], answer: 0, why: "Least privilege applies to every agent." },
      { objective: "O3", q: "Structured handoffs are useful because:", options: ["They are longer", "Code can check what was passed", "They hide information", "Models cannot read text"], answer: 1, why: "Fixed keys make handoffs checkable." },
      { objective: "O3", q: "A reviewer asked \"Is it good?\" will most likely:", options: ["Agree too easily", "Check every fact", "Refuse to answer", "Count words exactly"], answer: 0, why: "Vague questions get vague approval." },
      { objective: "O4", q: "Shared state is owned by:", options: ["The user's browser", "The writer agent", "The model provider", "Your code"], answer: 3, why: "Code keeps the one source of truth." },
      { objective: "O4", q: "Drift means:", options: ["The model getting faster", "Copies of information slowly becoming different", "A round limit", "A trigger"], answer: 1, why: "Shared state prevents drifting copies." },
      { objective: "O4", q: "Why save state to the log after each step?", options: ["To skip rounds", "To make the model smarter", "To see exactly how the work changed", "To share your key"], answer: 2, why: "The log shows each change for debugging." },
      { objective: "O5", q: "MAX_ROUNDS prevents:", options: ["Model calls entirely", "Good drafts", "Endless back-and-forth between agents", "Logging"], answer: 2, why: "A round limit ends ping-pong." },
      { objective: "O5", q: "Ping-pong in a writer-reviewer loop is when:", options: ["Fixing one problem brings back an old one", "The reviewer approves everything", "The draft is perfect", "The state is saved"], answer: 0, why: "Agents keep trading the same problems." },
      { objective: "O5", q: "Escalation means:", options: ["Deleting the log", "Adding more agents", "Raising the round limit forever", "Handing unresolved work to a person"], answer: 3, why: "People settle what the system cannot." },
      { objective: "O5", q: "With more agents, the human checkpoint becomes:", options: ["Unneeded", "More important", "Automatic", "Illegal"], answer: 1, why: "More moving parts mean more ways to go wrong." },
      { objective: "O6", q: "A baseline in this course is:", options: ["The longest output", "The first draft", "The API key", "A single agent you compare the team against"], answer: 3, why: "You compare the team to the simple option." },
      { objective: "O6", q: "Model calls are counted because they stand for:", options: ["Word count", "Quality", "Cost and time", "Number of users"], answer: 2, why: "More calls cost more and take longer." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      4,
      7,
      9,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Clear roles and checklist",
        objective: "O3",
        notYet: "Roles overlap, or the reviewer only asks whether the draft is good.",
        meets: "The writer and reviewer each have one job; the reviewer checks facts from the sheet, under 80 words and no claims like \"best\".",
        exceeds: "The reviewer has no writing tools and gives a reason for every revise."
      },
      {
        name: "Structured handoffs",
        objective: "O3",
        notYet: "Agents pass free text the code cannot check.",
        meets: "The reviewer returns JSON with approve or revise and reasons.",
        exceeds: "The code checks each handoff before using it."
      },
      {
        name: "Shared state",
        objective: "O4",
        notYet: "Agents keep separate copies of the work.",
        meets: "The work passes through one state dictionary that the code updates.",
        exceeds: "The state is logged after every step."
      },
      {
        name: "Round limit and escalation",
        objective: "O5",
        notYet: "No round limit, or the loop can run forever.",
        meets: "Stops after at most 3 rounds and prints the full log.",
        exceeds: "Unresolved work stops with needs_human and shows the draft and reasons."
      },
      {
        name: "Fair comparison",
        objective: "O6",
        notYet: "No single-agent baseline, or different inputs were used.",
        meets: "The same 3 fact sheets were run through both, with a written note on which did better and why.",
        exceeds: "Both were scored with the same checklist and model calls were counted."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who go on to course 6 of the agents program within 30 days",
      "Learners who report choosing one agent or a team based on a test rather than guesswork (follow-up survey)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with a web browser and internet; Colab or Python on your own computer",
      "Your agent loop and ask_model helper from course 3, and a model API key",
      "Three short made-up product fact sheets",
      "Paper for drawing agent patterns",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then have the group apply the hiring test to real jobs before anyone writes code.",
      "Give everyone the same three fact sheets so team and single-agent results can be compared across the group.",
      "Watch model-call counts on free tiers; keep the round limit at 3.",
      "Ask learners to show one run that stopped with needs_human, and discuss what the person would decide.",
      "Score the final task with the rubric, and accept \"one agent did as well\" as a good result when the test shows it."
    ]
  }
};
