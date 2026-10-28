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
  chapters: [
    {
      name: "Chapter 1: Designing a team of agents",
      lessons: [
        {
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
          youCanNow: "decide when a task truly needs more than one agent."
        },
        {
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
          youCanNow: "choose between a pipeline, an orchestrator with workers, and a writer with a reviewer."
        },
        {
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
          youCanNow: "write role prompts and structured handoffs for a team of agents."
        }
      ],
      check: {
        title: "Knowledge Check 1: Designing a team of agents",
        questions: [
          { q: "What is the best starting point for most new agent projects?", options: ["Five agents", "An orchestrator with ten workers", "One agent with good tools", "No agents"], answer: 2, why: "Extra agents add cost and complexity; start simple." },
          { q: "Which is a good reason to add a reviewer agent?", options: ["To get an independent check against clear rules", "To make the project look bigger", "To use more tokens", "Because two is always better"], answer: 0, why: "Fresh instructions and a checklist catch mistakes the writer misses." },
          { q: "Research, then write, then format, in a fixed order, is a:", options: ["Schema", "Orchestrator", "Trigger", "Pipeline"], answer: 3, why: "A pipeline passes work along a fixed order." },
          { q: "Which handoff is easiest for code to check?", options: ["\"Here's what I think, hope it helps!\"", "{\"decision\": \"revise\", \"reasons\": [\"over 80 words\"]}", "A long paragraph", "A picture"], answer: 1, why: "Structured JSON has fixed keys code can read." },
          { q: "Which reviewer instruction gives the most real check?", options: ["\"Is it good?\"", "\"Be critical.\"", "\"Do you like it?\"", "\"Is every fact in the fact sheet, and is it under 80 words?\""], answer: 3, why: "Specific yes/no checks prevent easy agreement." }
        ]
      }
    },
    {
      name: "Chapter 2: Building and testing the team",
      lessons: [
        {
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
          youCanNow: "keep a multi-agent system's work in one shared state controlled by your code."
        },
        {
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
          youCanNow: "stop agent ping-pong with a round limit and hand unresolved work to a person."
        },
        {
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
          youCanNow: "build a small multi-agent system and prove whether it beats a single agent."
        }
      ],
      check: {
        title: "Knowledge Check 2: Building and testing the team",
        questions: [
          { q: "Who should update the shared state?", options: ["Any agent, whenever it likes", "The reviewer only", "Your code, after checking each handoff", "Nobody"], answer: 2, why: "Code-owned state keeps one truth and blocks bad output." },
          { q: "The reviewer has not approved after 3 rounds. What should happen?", options: ["Stop with 'needs_human' and show the draft and reasons", "Approve it automatically", "Keep going until it approves", "Delete the draft"], answer: 0, why: "Escalate to a person instead of looping." },
          { q: "The reviewer approves every draft, even bad ones. This is:", options: ["Ping-pong", "Rubber-stamping", "A pipeline", "Shared state"], answer: 1, why: "Vague checklists lead to approving everything." },
          { q: "How should you score team and single-agent outputs?", options: ["Score them yourself with the same checklist", "Ask the reviewer agent", "Pick the longer one", "Count the words only"], answer: 0, why: "An independent, consistent score makes the comparison fair." },
          { q: "The single agent scores the same as the team with a third of the model calls. What should you do?", options: ["Use the team anyway", "Add more agents", "Stop testing", "Use the single agent"], answer: 3, why: "Same quality for less cost means the simpler design wins." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Multi-Agent Systems",
    questions: [
      { q: "A multi-agent system is:", options: ["One agent with a long prompt", "Several agents with their own roles working on one job", "A chatbot with many users", "A database"], answer: 1, why: "Each agent has its own role, instructions and tools." },
      { q: "Each extra agent adds:", options: ["Free quality", "Nothing", "Cost, handoffs and testing work", "Less time"], answer: 2, why: "More agents mean more calls and more to check." },
      { q: "The hiring test asks:", options: ["Is the agent friendly?", "How much does the model cost?", "Would you hire two different people for this job?", "Is the prompt long?"], answer: 2, why: "Clearly different skills suggest separate agents." },
      { q: "Which task most likely needs only one agent?", options: ["Sorting messages into four categories with a checklist", "Research, write and fact-check a long report", "Running ten searches at once", "Writing and independently reviewing ads"], answer: 0, why: "One person with a checklist could do it." },
      { q: "In an orchestrator pattern, the orchestrator:", options: ["Approves its own work", "Only formats text", "Stores the API key", "Splits the goal and hands parts to workers"], answer: 3, why: "It plans and delegates, then combines results." },
      { q: "Why is writer-and-reviewer good for beginners?", options: ["It needs no limits", "It adds an independent quality check", "It uses no model", "It never loops"], answer: 1, why: "A second agent with a checklist catches mistakes." },
      { q: "A pipeline is easy to debug because:", options: ["It runs in secret", "It has no agents", "It never fails", "You always know which agent acts next"], answer: 3, why: "The fixed order makes each step clear." },
      { q: "A role prompt should include:", options: ["Your password", "Every other agent's full prompt", "The agent's one job, tools and output format", "A joke"], answer: 2, why: "Each agent needs only its own role and rules." },
      { q: "Should the reviewer agent have writing tools?", options: ["No, only what it needs to review", "Yes, all tools", "Only the email tool", "It should have the API key"], answer: 0, why: "Least privilege applies to every agent." },
      { q: "Structured handoffs are useful because:", options: ["They are longer", "Code can check what was passed", "They hide information", "Models cannot read text"], answer: 1, why: "Fixed keys make handoffs checkable." },
      { q: "A reviewer asked \"Is it good?\" will most likely:", options: ["Agree too easily", "Check every fact", "Refuse to answer", "Count words exactly"], answer: 0, why: "Vague questions get vague approval." },
      { q: "Shared state is owned by:", options: ["The user's browser", "The writer agent", "The model provider", "Your code"], answer: 3, why: "Code keeps the one source of truth." },
      { q: "Drift means:", options: ["The model getting faster", "Copies of information slowly becoming different", "A round limit", "A trigger"], answer: 1, why: "Shared state prevents drifting copies." },
      { q: "Why save state to the log after each step?", options: ["To skip rounds", "To make the model smarter", "To see exactly how the work changed", "To share your key"], answer: 2, why: "The log shows each change for debugging." },
      { q: "MAX_ROUNDS prevents:", options: ["Model calls entirely", "Good drafts", "Endless back-and-forth between agents", "Logging"], answer: 2, why: "A round limit ends ping-pong." },
      { q: "Ping-pong in a writer-reviewer loop is when:", options: ["Fixing one problem brings back an old one", "The reviewer approves everything", "The draft is perfect", "The state is saved"], answer: 0, why: "Agents keep trading the same problems." },
      { q: "Escalation means:", options: ["Deleting the log", "Adding more agents", "Raising the round limit forever", "Handing unresolved work to a person"], answer: 3, why: "People settle what the system cannot." },
      { q: "With more agents, the human checkpoint becomes:", options: ["Unneeded", "More important", "Automatic", "Illegal"], answer: 1, why: "More moving parts mean more ways to go wrong." },
      { q: "A baseline in this course is:", options: ["The longest output", "The first draft", "The API key", "A single agent you compare the team against"], answer: 3, why: "You compare the team to the simple option." },
      { q: "Model calls are counted because they stand for:", options: ["Word count", "Quality", "Cost and time", "Number of users"], answer: 2, why: "More calls cost more and take longer." }
    ]
  }
};
