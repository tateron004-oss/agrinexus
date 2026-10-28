"use strict";

// Koach Learn course: Leadership Development -> "Leadership in the Age of Agentic AI 3: Agentic AI, Automation and Leading Transformation"
// (course 3 of 3). Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "lead-agentic-transformation",
  category: "Leadership Development",
  name: "Leadership in the Age of Agentic AI 3: Agentic AI, Automation and Leading Transformation",
  skills: "Choosing a process to automate, Setting an agent's level of autonomy, Measuring baseline and value, Keeping a risk register, Leading people through change, Writing a 90-day pilot plan",
  outcome: "choose one work process that AI agents could improve and write a 90-day pilot plan for it, with the process map, the agent's level of autonomy and approvals, the baseline and success measures, a risk register, a people and training plan, and a go or no-go rule for scaling up.",
  about: [
    "This course is for leaders who will decide whether and how AI agents enter their organization: managers, directors, owners, and nonprofit and public-sector leaders. It finishes the series Leadership in the Age of Agentic AI.",
    "Chapter 1 is about the work: finding a process worth automating, deciding how much an agent may do on its own, and measuring value and risk honestly. Chapter 2 is about the people: leading change, setting up simple governance, and writing a 90-day pilot plan you could present to your board, owner or leadership team.",
    "No coding is needed. You will use a free AI assistant to help draft, and your own judgment to decide. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a two-page, 90-day pilot plan for one AI agent in your organization. Include: the process map (current steps and time), the agent's job and level of autonomy, every human approval point and the accountable person, baseline and success measures, a risk register with at least five risks, a people plan (who is affected, how you will communicate and train), and a go or no-go rule for day 90. Present it in five minutes to a colleague and note their two hardest questions.",
  chapters: [
    {
      name: "Chapter 1: Agents in the work",
      lessons: [
        {
          title: "Finding a process worth automating",
          minutes: 6,
          goal: "Map a process and score whether it is a good first candidate for an agent.",
          text: [
            "Do not start with the technology; start with the work. A good first process is frequent, follows clear steps, uses information that is already digital, is annoying or slow for people, and has mistakes you can catch before they cause harm. Examples: sorting incoming requests, preparing weekly reports, scheduling, first drafts of routine replies.",
            "Map it before you automate it. Write each step, who does it, the tool used and the time it takes. Mapping often shows waste you can remove with no AI at all. Automating a broken process just makes it break faster.",
            "Score each candidate from 1 to 5 on: volume, clear steps, digital inputs, pain for staff, and low harm if wrong. Pick the highest total for your first pilot, not the most exciting idea. Avoid first pilots that make decisions about people, money or safety."
          ],
          steps: ["List five candidate processes.", "Map the best two: steps, who, tool, time.", "Remove obvious waste first.", "Score each 1 to 5 on volume, clear steps, digital inputs, pain, low harm.", "Pick the highest score that avoids decisions about people, money or safety."],
          words: [["Process map", "a step-by-step picture of how a piece of work gets done today."], ["Pilot", "a small, time-limited trial before a wider rollout."]],
          slides: [
            { title: "Start with the work", bullets: ["Frequent, clear steps, digital inputs", "Slow or annoying for people", "Mistakes catchable before harm"] },
            { title: "Map before you automate", bullets: ["Steps, who, tool, time", "Remove waste first", "Broken process + AI = faster breakage"] },
            { title: "Score the candidates", bullets: ["Volume, clear steps, digital inputs, pain, low harm", "Pick the best score, not the most exciting", "Avoid people, money, safety decisions first"] }
          ],
          tryIt: "List five processes in your area. Map the top two, score them on the five factors, and choose your pilot process.",
          youCanNow: "map a process and pick a sensible first candidate for an AI agent."
        },
        {
          title: "How much may the agent do? Autonomy and approvals",
          minutes: 5,
          goal: "Set an agent's level of autonomy and name the human approvals.",
          text: [
            "Think of autonomy in levels. Level 1, suggest: the agent drafts, a person does everything. Level 2, prepare: the agent prepares the action (a filled-in form, a ready email) and a person approves each one. Level 3, act with checks: the agent acts on routine cases and sends exceptions to a person, who also reviews a sample. Level 4, act alone: rare, only for low-harm, reversible tasks.",
            "Start pilots at level 1 or 2. Move up only when your measures show the agent is reliable, and only for the cases where it proved so. Keep approval before anything that spends money, speaks to customers or the public, changes records, or affects a person's rights.",
            "Name an accountable person for the agent: someone who owns its results, reviews its log, and can switch it off. An agent with no owner is the most common way automation goes wrong."
          ],
          words: [["Autonomy level", "how much an AI agent may do without a person approving."], ["Exception", "a case that does not fit the normal pattern and needs a person."], ["Agent owner", "the accountable person who owns an agent's results and can switch it off."]],
          slides: [
            { title: "Four levels of autonomy", bullets: ["1 Suggest: agent drafts, people act", "2 Prepare: people approve each action", "3 Act with checks: exceptions to people", "4 Act alone: rare, low-harm, reversible"] },
            { title: "Start low, earn trust", bullets: ["Pilots at level 1 or 2", "Move up only with evidence"] },
            { title: "Always approve before", bullets: ["Spending money", "Speaking to customers or the public", "Changing records or affecting rights"] },
            { title: "Every agent has an owner", bullets: ["Owns results, reviews logs", "Can switch it off"] }
          ],
          tryIt: "For your pilot process, choose the starting autonomy level, list each step where a person must approve, and name the agent owner.",
          youCanNow: "set an agent's autonomy level, approval points and owner."
        },
        {
          title: "Measuring value and risk honestly",
          minutes: 6,
          goal: "Set a baseline, success measures and a risk register for a pilot.",
          text: [
            "You cannot show improvement without a baseline: how the process performs today. Measure time per task, volume, error rate, waiting time and staff or customer satisfaction for a few weeks before the pilot.",
            "Choose three to five success measures, and include quality, not just speed: \"time per request down 30 percent with no rise in errors\". Count the hidden costs: review time, tool costs, training and the time to fix agent mistakes.",
            "Keep a risk register: a simple table of each risk, how likely it is, how bad it would be, the guard, and the owner. Typical agent risks: wrong outputs, privacy leaks, prompt injection, too much access, unfair outcomes, staff over-trusting the agent, and vendor lock-in. NIST's free AI Risk Management Framework, organized as Govern, Map, Measure and Manage, is a good guide."
          ],
          steps: ["Measure the baseline for a few weeks.", "Pick three to five measures, including quality.", "Count hidden costs: review, tools, training, fixes.", "List at least five risks in a register.", "Give each risk a guard and an owner."],
          words: [["Baseline", "how a process performs before you change it."], ["Risk register", "a table of risks with how likely, how bad, the guard and the owner."], ["Vendor lock-in", "being stuck with one supplier because switching is hard."]],
          slides: [
            { title: "Baseline first", bullets: ["Time per task, volume, errors", "Waiting time, satisfaction", "Measure for a few weeks"] },
            { title: "Measure quality, not just speed", bullets: ["\"30% faster, no rise in errors\"", "Count review, tool, training and fix time"] },
            { title: "Risk register", bullets: ["Risk, likelihood, impact, guard, owner", "Wrong output, privacy, injection, access", "Unfairness, over-trust, lock-in"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Write the baseline measures for your pilot process, three to five success measures, and a risk register with at least five risks, each with a guard and owner.",
          youCanNow: "set a baseline, honest success measures and a risk register for an AI pilot."
        }
      ],
      check: {
        title: "Knowledge Check 1: Agents in the work",
        questions: [
          { q: "Which is the best first process for an AI agent pilot?", options: ["Deciding who to promote", "Approving large payments", "Sorting routine incoming requests", "Handling safety incidents"], answer: 2, why: "Frequent, clear, low-harm work makes a safe first pilot." },
          { q: "Why map a process before automating it?", options: ["Mapping often reveals waste, and automating a broken process makes it break faster", "It is required by law", "Agents cannot run without a map", "It makes the pilot longer"], answer: 0, why: "Fix the process first, then automate." },
          { q: "At autonomy level 2 (prepare), who approves each action?", options: ["No one", "The agent", "The vendor", "A person"], answer: 3, why: "Level 2 prepares actions for human approval." },
          { q: "What is a baseline?", options: ["The cheapest plan", "How the process performs before the change", "The agent's name", "The final report"], answer: 1, why: "Without a baseline you cannot show improvement." },
          { q: "Which success measure is best?", options: ["\"It feels faster\"", "\"Staff like the logo\"", "\"The agent is busy\"", "\"Time per request down 30% with no rise in errors\""], answer: 3, why: "It measures speed and quality against the baseline." }
        ]
      }
    },
    {
      name: "Chapter 2: Leading the people and the plan",
      lessons: [
        {
          title: "Leading people through change",
          minutes: 5,
          goal: "Plan how you will communicate, involve and train the people affected.",
          text: [
            "Automation changes jobs, and people feel it before you announce anything. Involve the people who do the work today from the start: they know the exceptions, the workarounds and the real risks. They should help map the process and test the agent.",
            "Communicate early and honestly: why you are piloting, what will and will not change, what happens to the time saved, and how people can raise concerns. If you do not know yet, say so and say when you will know. Silence fills with rumors.",
            "Plan the new skills: reviewing agent work, handling exceptions, spotting AI errors and writing good instructions. Budget time for training, and recognize people who find problems; catching an agent's mistake is a contribution, not disloyalty."
          ],
          steps: ["List who is affected and how.", "Invite the people who do the work to help map and test.", "Tell them why, what changes, what does not, and how to raise concerns.", "Plan the new skills and the training time.", "Recognize people who find problems."],
          words: [["Change management", "planning how people move from the old way of working to the new one."], ["Stakeholder", "anyone affected by or able to affect a change."]],
          slides: [
            { title: "Involve the people who do the work", bullets: ["They know the exceptions and risks", "They help map and test"] },
            { title: "Communicate early and honestly", bullets: ["Why, what changes, what does not", "What happens to time saved", "Say when you do not know yet"] },
            { title: "Build new skills", bullets: ["Reviewing agent work and exceptions", "Spotting AI errors", "Reward people who find problems"] }
          ],
          tryIt: "List the people your pilot affects. Write a short first message to them that explains why, what will and will not change, and how to raise concerns. Plan one training session.",
          youCanNow: "plan the people side of an AI change: involvement, honest communication and training."
        },
        {
          title: "Simple AI governance that works",
          minutes: 5,
          goal: "Set up light governance: an inventory, an owner per agent and a review rhythm.",
          text: [
            "Governance means deciding who may do what with AI, and checking it is working. It does not have to be heavy. Start with three things.",
            "An inventory: a list of every AI tool and agent in use, what it does, what data it touches, its autonomy level and its owner. You cannot govern what you do not know exists, and staff often start using tools on their own.",
            "A small review group (for a small organization, two or three people) that approves new agents, reviews the risk register and incident reports monthly, and can pause any agent. Write down how someone reports an AI problem and how fast you respond. Check any laws or rules that apply to your sector and location with a qualified advisor."
          ],
          steps: ["Build an inventory of AI tools and agents.", "Record purpose, data, autonomy level and owner for each.", "Form a small review group.", "Review risks and incidents monthly; allow any agent to be paused.", "Publish how to report an AI problem."],
          words: [["Governance", "the rules and roles for deciding and checking how something is used."], ["Inventory", "a complete list of the AI tools and agents in use."], ["Incident", "an event where something went wrong or nearly did."]],
          slides: [
            { title: "Governance can be light", bullets: ["Who may do what with AI", "And checking it works"] },
            { title: "Start with an inventory", bullets: ["Every AI tool and agent", "Purpose, data, autonomy level, owner"] },
            { title: "A small review group", bullets: ["Approves new agents", "Monthly risk and incident review", "Can pause any agent"] },
            { title: "Make reporting easy", bullets: ["How to report an AI problem", "How fast you respond", "Check sector rules with an advisor"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework (Govern function)", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
          tryIt: "Start an AI inventory for your team with at least three rows (tool, purpose, data, autonomy level, owner). Name who would be in your review group.",
          youCanNow: "set up light AI governance with an inventory, owners and a review rhythm."
        },
        {
          title: "Writing the 90-day pilot plan",
          minutes: 6,
          goal: "Assemble a 90-day pilot plan with a go or no-go rule.",
          text: [
            "Pull your work together into a two-page plan. Days 1 to 30: baseline, set-up, training, agent at level 1 or 2 on a small share of the work. Days 31 to 60: run, review the log weekly, fix problems, track measures. Days 61 to 90: compare with the baseline, interview staff and decide.",
            "Write the go or no-go rule before you start, so the result decides, not enthusiasm: \"Scale to the whole team if time per request falls at least 25 percent, errors do not rise, and no serious incident occurs. Otherwise stop or redesign.\" Include a stop rule for serious incidents at any time.",
            "Use an AI assistant to turn your notes into a clean draft, then edit it yourself. Present it in five minutes: the problem, the process, the agent and its limits, measures, risks, people plan, and the decision rule."
          ],
          steps: ["Days 1-30: baseline, set-up, training, small start.", "Days 31-60: run, weekly log review, fixes, measures.", "Days 61-90: compare, interview staff, decide.", "Write the go or no-go rule and the stop rule first.", "Draft with AI, edit yourself, present in five minutes."],
          words: [["Go or no-go rule", "a decision rule, written in advance, for whether to continue."], ["Stop rule", "a condition that pauses the pilot at once, such as a serious incident."]],
          slides: [
            { title: "Three phases", bullets: ["Days 1-30: baseline, set-up, small start", "Days 31-60: run, review, fix", "Days 61-90: compare, interview, decide"] },
            { title: "Decide the rule first", bullets: ["Go if measures met and no serious incident", "Otherwise stop or redesign", "Stop rule for serious incidents"] },
            { title: "Present in five minutes", bullets: ["Problem, process, agent and limits", "Measures, risks, people plan", "The decision rule"] }
          ],
          tryIt: "Final task: write your two-page 90-day pilot plan with process map, autonomy and approvals, owner, baseline and measures, risk register, people plan, and go or no-go rule. Present it to a colleague in five minutes and write down their two hardest questions.",
          youCanNow: "lead an AI agent pilot from idea to a plan with clear measures, guardrails and a decision rule."
        }
      ],
      check: {
        title: "Knowledge Check 2: Leading the people and the plan",
        questions: [
          { q: "Who should help map the process and test the agent?", options: ["Only the vendor", "Only senior leaders", "The people who do the work today", "No one"], answer: 2, why: "They know the exceptions and real risks." },
          { q: "You do not yet know how the pilot will affect jobs. What should you say?", options: ["That you do not know yet and when you will know", "That nothing will ever change", "Nothing until it is over", "That everyone will lose their job"], answer: 0, why: "Honesty about uncertainty prevents rumors." },
          { q: "What is an AI inventory?", options: ["A shopping list", "A list of every AI tool and agent in use, with owners", "A list of staff", "A budget"], answer: 1, why: "You cannot govern what you do not know exists." },
          { q: "When should the go or no-go rule be written?", options: ["Before the pilot starts", "After the results are in", "Never", "Only if the pilot fails"], answer: 0, why: "Writing it first lets results, not enthusiasm, decide." },
          { q: "A serious privacy incident happens on day 40. What should the plan say?", options: ["Keep going until day 90", "Raise the autonomy level", "Hide it", "Pause at once under the stop rule"], answer: 3, why: "A stop rule applies at any time." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leadership in the Age of Agentic AI 3: Agentic AI, Automation and Leading Transformation",
    questions: [
      { q: "A good first automation candidate is:", options: ["Rare and complex", "Frequent, clear steps, low harm if wrong", "About firing people", "About large payments"], answer: 1, why: "Simple, frequent, low-harm work is a safe start." },
      { q: "A process map shows:", options: ["The org chart only", "Office floor plans", "Each step, who does it, the tool and the time", "Salaries"], answer: 2, why: "Maps show how work gets done today." },
      { q: "Automating a broken process:", options: ["Makes it free", "Fixes it automatically", "Makes it break faster", "Removes all risks"], answer: 2, why: "Fix the process first." },
      { q: "The five scoring factors include:", options: ["Volume, clear steps, digital inputs, pain, low harm", "Color, size, brand", "Cost only", "Popularity"], answer: 0, why: "They predict a good first pilot." },
      { q: "Autonomy level 1 (suggest) means:", options: ["No AI is used", "The agent acts alone", "The agent approves people", "The agent drafts; people do everything"], answer: 3, why: "It only suggests." },
      { q: "Level 3 (act with checks) sends what to people?", options: ["Nothing", "Exceptions, plus a sample for review", "Only invoices", "Only praise"], answer: 1, why: "Routine cases flow; exceptions go to people." },
      { q: "Pilots should usually start at:", options: ["The highest level available", "Level 4", "No level", "Level 1 or 2"], answer: 3, why: "Start low and earn trust." },
      { q: "Approval should always come before an agent:", options: ["Counts words", "Reads a public page", "Spends money or speaks to customers", "Formats a table"], answer: 2, why: "These actions carry real consequences." },
      { q: "An agent owner:", options: ["Owns its results, reviews logs and can switch it off", "Is the AI vendor", "Is optional", "Is the agent itself"], answer: 0, why: "Every agent needs an accountable person." },
      { q: "Success measures should include:", options: ["Only speed", "Quality, not just speed", "Only cost", "Only staff opinions"], answer: 1, why: "Faster but worse is not success." },
      { q: "Which is a hidden cost of an agent?", options: ["Time spent reviewing and fixing its work", "The office rent", "Coffee", "Parking"], answer: 0, why: "Review and fix time count against savings." },
      { q: "A risk register lists each risk with:", options: ["Nothing else", "A joke", "Only the cost", "Likelihood, impact, guard and owner"], answer: 3, why: "That makes risks manageable." },
      { q: "Vendor lock-in means:", options: ["A locked office", "Being stuck with one supplier because switching is hard", "A password", "A discount"], answer: 1, why: "It is a strategic risk worth listing." },
      { q: "The NIST AI RMF's four functions are:", options: ["Buy, Build, Run, Sell", "Plan, Do, Check, Act", "Govern, Map, Measure, Manage", "Hire, Train, Promote, Retire"], answer: 2, why: "NIST names those four." },
      { q: "Change management is about:", options: ["Changing passwords", "Counting coins", "Moving people from the old way of working to the new one", "Buying software"], answer: 2, why: "It is the people side of change." },
      { q: "A staff member finds an agent mistake. Leaders should:", options: ["Recognize it as a contribution", "Treat it as disloyalty", "Ignore it", "Hide it"], answer: 0, why: "Finding problems keeps the pilot safe." },
      { q: "AI governance can start with:", options: ["Nothing", "A 200-page manual", "Banning all tools", "An inventory, owners and a small review group"], answer: 3, why: "Light governance is enough to begin." },
      { q: "Who can pause an agent under good governance?", options: ["No one", "The review group or owner", "Only the vendor", "Only the agent"], answer: 1, why: "Someone must always be able to stop it." },
      { q: "For laws that apply to your sector and location, you should:", options: ["Copy another country's rules", "Ask the AI to decide", "Assume none apply", "Check with a qualified advisor"], answer: 3, why: "Legal questions need qualified advice." },
      { q: "Days 61 to 90 of the pilot are for:", options: ["Buying more tools", "Starting set-up", "Comparing to baseline, interviewing staff and deciding", "Skipping review"], answer: 2, why: "The last phase produces the decision." }
    ]
  }
};
