"use strict";

// Koach Learn course: Leadership Development -> "Leadership in the Age of Agentic AI 1: Understanding AI" (course 1 of 3 in the
// "Leadership in the Age of Agentic AI" series). Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "lead-agentic-understanding-ai",
  category: "Leadership Development",
  name: "Leadership in the Age of Agentic AI 1: Understanding AI",
  skills: "Explaining AI to your team in plain words, Telling generative AI from agentic AI, Spotting good and poor uses, Naming the main risks, Writing a team AI briefing",
  outcome: "explain to your team, in plain words, what generative and agentic AI are, where they help and where they fail, and lead a ten-minute team briefing with three good uses, three risks and one clear ground rule.",
  about: [
    "This course is for managers, supervisors, team leads and owners of small businesses and nonprofits. You do not need a technical background. You need to be able to talk about AI clearly, because your team is already using it or asking about it.",
    "Chapter 1 explains what AI is, how today's generative AI works, and what makes agentic AI different. Chapter 2 helps you judge where AI fits in your team's work, what can go wrong, and how to brief your team so everyone starts with the same understanding.",
    "Each lesson takes about five minutes and ends with a short task you do with your own work. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 1 of 3 in Leadership in the Age of Agentic AI."
  ],
  finalTask: "Prepare and give (or record) a ten-minute AI briefing for your team. It explains generative and agentic AI in plain words, shows one live example with a free AI assistant, names three good uses and three risks for your team's real work, and ends with one ground rule everyone will follow, such as \"no customer or employee personal details go into public AI tools\".",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Managers, supervisors, team leads and owners of small businesses and nonprofits whose teams are already using AI or asking about it. No technical background is needed.",
    startingPoint: "Have heard of ChatGPT and similar tools and may have tried one. Cannot yet explain generative or agentic AI clearly, judge where it fits their team's work, or name its main risks.",
    gap: "Teams are using AI with or without guidance. Leaders need to explain it in plain words, judge good and poor uses, name the risks and set a first ground rule, so their people use AI safely and with shared expectations.",
    constraints: [
      "Reading level: plain words, no technical background assumed",
      "Devices: a phone or computer with a free AI assistant",
      "Time: about five minutes per lesson, fitted around a manager's day",
      "Privacy: no customer or employee personal details in public AI tools during practice",
      "Each organization's own policies and laws on AI and data apply"
    ],
    prerequisites: "None. This is course 1 of 3 in Leadership in the Age of Agentic AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "When a team member asks what AI is", action: "explain AI, machine learning and generative AI in plain words", standard: "in one sentence each that a new team member would understand" },
    { id: "O2", condition: "Given a routine team task", action: "describe what an AI assistant and an AI agent would each do and which steps a person should approve", standard: "naming who stays accountable" },
    { id: "O3", condition: "Given a list of your team's tasks", action: "sort each task into good, careful or poor uses of AI", standard: "with a short reason for each" },
    { id: "O4", condition: "For your team's real work", action: "name the three biggest AI risks and one guard for each", standard: "with guards you could put in place this month" },
    { id: "O5", condition: "Using a free AI assistant and a non-private team task", action: "run a short live demo, including one follow-up and a check", standard: "with no private data used" },
    { id: "O6", condition: "With your team", action: "give a ten-minute AI briefing that ends with one ground rule", standard: "covering three uses, three risks and the rule, sent in writing afterwards" }
  ],
  chapters: [
    {
      name: "Chapter 1: What leaders need to know about AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "AI in plain words",
          minutes: 5,
          goal: "Explain AI, machine learning and generative AI in one sentence each.",
          text: [
            "Artificial intelligence (AI) is software that does tasks that usually need human judgment, such as recognizing speech, spotting patterns or writing text. Machine learning is the most common way to build it: instead of writing every rule, people show the software many examples and it learns patterns.",
            "Generative AI is machine learning that creates new content: text, images, audio, code. Tools such as ChatGPT, Microsoft Copilot, Google Gemini and Claude are built on large language models (LLMs) trained on huge amounts of writing. They predict likely words, which is why they write fluently and also why they can be confidently wrong.",
            "As a leader you do not need the math. You need three plain sentences you can say to your team, and the judgment to know when the tool is helping and when it is guessing."
          ],
          words: [["Artificial intelligence (AI)", "software that does tasks that usually need human judgment."], ["Machine learning", "building software by showing it examples so it learns patterns."], ["Generative AI", "AI that creates new text, images, audio or code."], ["LLM", "large language model: the AI behind chat assistants."]],
          slides: [
            { title: "Three plain definitions", bullets: ["AI: software doing tasks that need judgment", "Machine learning: learns patterns from examples", "Generative AI: creates text, images, code"] },
            { title: "Why it sounds so sure", bullets: ["LLMs predict likely words", "Fluent is not the same as correct"] },
            { title: "What a leader needs", bullets: ["Plain words for your team", "Judgment: helping or guessing?"] }
          ],
          tryIt: "Write your own one-sentence explanation of AI, machine learning and generative AI, in words your newest team member would understand. Read them out loud.",
          youCanNow: "explain AI, machine learning and generative AI in plain words.",
          quickCheck: [
            { objective: "O1", q: "What is machine learning?", options: ["Software that learns patterns from examples", "A robot that learns to walk", "A person teaching a computer by hand, rule by rule", "Software that never makes mistakes"], answer: 0, why: "Machine learning finds patterns in examples instead of following hand-written rules." },
            { objective: "O1", q: "A new team member asks what generative AI is. Which answer would you give?", options: ["It is a search engine with a new name", "It is software that only does maths", "It is AI that creates new text, images or code from what you ask", "It is a program that knows every fact"], answer: 2, why: "Generative AI creates new content; it does not know every fact." }
          ]
        },
        {
          objectives: ["O2"],
          title: "From assistant to agent: what agentic AI changes",
          minutes: 5,
          goal: "Explain the difference between an AI assistant and an AI agent, and why it matters for leaders.",
          text: [
            "An AI assistant answers when asked: you prompt, it drafts, you decide. An AI agent is given a goal and acts: it plans steps, uses tools such as email, calendars, spreadsheets or websites, checks results and continues until it is done or stopped.",
            "Agentic AI moves AI from advice to action. An assistant drafts a reply to a customer; an agent could read the inbox, draft replies, send them and update the customer record. That saves more time, and it can make mistakes at speed, in your organization's name.",
            "For leaders, the key questions change. Not only \"is the answer good?\" but \"what is it allowed to do, who approves its actions, and who is accountable when it gets something wrong?\" A person is always accountable."
          ],
          words: [["Agentic AI", "AI that works toward a goal by planning steps and taking actions with tools."], ["Accountable", "the person who answers for the result, good or bad."]],
          slides: [
            { title: "Assistant vs agent", bullets: ["Assistant: you ask, it drafts, you decide", "Agent: given a goal, it plans and acts with tools"] },
            { title: "From advice to action", bullets: ["Drafts a reply vs sends it and updates the record", "More time saved, mistakes at speed"] },
            { title: "New leader questions", bullets: ["What may it do?", "Who approves its actions?", "Who is accountable? Always a person"] }
          ],
          tryIt: "Pick one routine task on your team. Describe what an AI assistant would do for it, and what an AI agent might do. Write which steps you would want a person to approve.",
          youCanNow: "explain how agentic AI differs from an assistant and what leaders must decide.",
          quickCheck: [
            { objective: "O2", q: "What can an AI agent do that a basic assistant does not?", options: ["Answer a question when asked", "Plan steps and take actions with tools toward a goal", "Draft a short email", "Fix its own mistakes without anyone knowing"], answer: 1, why: "Agents plan and act with tools, which is why leaders must decide what they may do." },
            { objective: "O2", q: "An agent could send refund emails to customers on its own. What would you decide first?", options: ["Let it send everything to save time", "Ban all AI on the team", "Let the agent decide which refunds need a person", "Which steps a person must approve and who is accountable"], answer: 3, why: "With agents, the leader's question is what it may do, who approves and who is accountable." }
          ]
        },
        {
          objectives: ["O3"],
          title: "What AI does well and where it fails",
          minutes: 5,
          goal: "Sort tasks into good, careful and poor uses of AI.",
          text: [
            "AI does well at first drafts (emails, job posts, agendas), summarizing long documents, brainstorming options, rewriting for a different audience, and explaining unfamiliar topics. These save time because a person still reviews the result.",
            "Use care with anything factual, legal, financial, medical or about people: AI can make up facts, sources and numbers (often called hallucination), can reflect bias in its training data, and does not know your organization's policies unless you tell it.",
            "Poor uses: final decisions about people (hiring, firing, discipline, pay), anything where a mistake cannot be undone, and anything that needs private data put into a public tool. A simple test for your team: would you be comfortable explaining to the person affected that AI did this?"
          ],
          words: [["Hallucination", "when AI writes something that sounds true but is made up."], ["Bias", "unfair patterns in AI output, often learned from its training data."]],
          slides: [
            { title: "Good uses", bullets: ["First drafts: emails, posts, agendas", "Summaries and brainstorming", "Rewriting for a new audience"] },
            { title: "Use with care", bullets: ["Facts, law, money, health, people", "Can invent facts and sources", "Can reflect bias"] },
            { title: "Poor uses", bullets: ["Final decisions about people", "Mistakes that cannot be undone", "Private data in public tools"] },
            { title: "The explain-it test", bullets: ["Would you tell the affected person AI did this?"] }
          ],
          tryIt: "List ten tasks your team does. Mark each GOOD, CARE or POOR for AI, with a few words on why.",
          youCanNow: "judge which of your team's tasks are good, careful or poor uses of AI.",
          quickCheck: [
            { objective: "O3", q: "What is an AI hallucination?", options: ["A picture made by AI", "AI refusing to answer", "AI writing something that sounds true but is made up", "AI running slowly"], answer: 2, why: "Hallucinations sound confident, which is why AI output needs checking." },
            { objective: "O3", q: "Your team wants AI to decide which applicants get interviews. How would you mark it?", options: ["CARE or POOR: a person must make the decision, using AI only to help", "GOOD: AI is faster", "GOOD, as long as no one is told", "Not worth thinking about"], answer: 0, why: "Decisions about people need human judgment, and the explain-it test fails if you would hide it." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: What leaders need to know about AI",
        questions: [
          { objective: "O1", q: "Which is the best plain description of generative AI?", options: ["A robot in a factory", "A faster spreadsheet", "AI that creates new text, images or code", "A search engine"], answer: 2, why: "Generative AI creates new content." },
          { objective: "O1", q: "Why can an AI assistant sound sure and still be wrong?", options: ["It predicts likely words rather than checking facts", "It is designed to lie", "It only reads old newspapers", "It is broken"], answer: 0, why: "Fluent prediction is not fact-checking." },
          { objective: "O2", q: "What most clearly makes AI \"agentic\"?", options: ["It has a voice", "It is expensive", "It writes long answers", "It plans steps and takes actions with tools"], answer: 3, why: "Agents act toward a goal, not just answer." },
          { objective: "O2", q: "An AI agent sends a wrong refund email to a customer. Who is accountable?", options: ["The AI", "A person in your organization", "No one", "The software company only"], answer: 1, why: "A person is always accountable for AI actions taken in the organization's name." },
          { objective: "O3", q: "Which is a POOR use of AI?", options: ["Drafting a meeting agenda", "Brainstorming event names", "Summarizing a long report", "Making the final decision to fire an employee"], answer: 3, why: "Final decisions about people need human judgment." }
        ]
      }
    },
    {
      name: "Chapter 2: Leading your team's first steps",
      lessons: [
        {
          objectives: ["O4"],
          title: "Risks every leader should name",
          minutes: 5,
          goal: "Name the main AI risks for your team and one guard for each.",
          text: [
            "Privacy: anything typed into a public AI tool may be stored by the provider, and some free tools may use it to improve their products. Guard: no customer, employee or confidential data in public tools; use tools your organization has approved.",
            "Accuracy: made-up facts, wrong numbers, invented sources. Guard: a person checks facts, figures and quotes before anything goes out. Bias and fairness: output can be unfair to groups of people. Guard: no AI-only decisions about people.",
            "Security and agents: agents that read email or web pages can be tricked by hidden instructions (prompt injection), and agents with too much access can do real damage. Guard: least access and human approval for actions. For a fuller framework, NIST's free AI Risk Management Framework organizes this work into four functions: Govern, Map, Measure and Manage."
          ],
          words: [["Prompt injection", "hidden text that tries to make an AI follow someone else's instructions."], ["Least access", "giving a tool or person only the access the job needs."], ["NIST AI RMF", "a free, voluntary US framework for managing AI risks."]],
          slides: [
            { title: "Privacy", bullets: ["Public tools may store what you type", "No customer, employee or confidential data", "Use approved tools"] },
            { title: "Accuracy and fairness", bullets: ["Check facts, figures and quotes", "No AI-only decisions about people"] },
            { title: "Security and agents", bullets: ["Hidden instructions can trick agents", "Least access, human approval for actions"] },
            { title: "A free framework", bullets: ["NIST AI RMF: Govern, Map, Measure, Manage", "Voluntary; being revised: check the NIST page"] }
          ],
          sources: [{ name: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }, { name: "OWASP Top 10 for LLM Applications 2025", url: "https://genai.owasp.org/llm-top-10/" }],
          tryIt: "Write the three biggest AI risks for your team's actual work, and one guard you could put in place this month for each.",
          youCanNow: "name your team's main AI risks and a practical guard for each.",
          quickCheck: [
            { objective: "O4", q: "What does least access mean for AI tools?", options: ["Giving AI tools as much access as possible so they work well", "Giving each tool only the access its job needs", "Letting only the leader use AI", "Using AI as little as possible"], answer: 1, why: "Least access limits the damage if a tool makes a mistake or is tricked." },
            { objective: "O4", q: "Your team handles customer records. Which risk and guard pair fits best?", options: ["Risk: AI is slow. Guard: buy a faster computer", "Risk: AI is new. Guard: wait five years", "Risk: staff like AI. Guard: block all websites", "Risk: personal details leak into public tools. Guard: remove details first or use an approved tool"], answer: 3, why: "A good guard matches the real risk in the team's own work." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Trying it yourself: a live demo you can show",
          minutes: 5,
          goal: "Run a short, safe AI demo on a real (non-private) team task.",
          text: [
            "Leaders who use AI themselves lead it better. Choose a real task with no private data: an agenda for next week's team meeting, a first draft of a job post, or a plain-language summary of a public policy.",
            "Write a clear prompt: what you need, the context (no names or private details), and the format. Then improve it with one follow-up, such as \"make it shorter\" or \"write it for new staff\". Check every fact before you use it.",
            "In your briefing, show the whole process, including a mistake if it makes one. Seeing a leader catch an AI error teaches the team more than a perfect demo."
          ],
          steps: ["Pick a real task with no private data.", "Write a prompt: need, context, format.", "Ask one follow-up to improve it.", "Check facts and fix errors.", "Note what you would show the team."],
          words: [["Prompt", "what you type or say to an AI tool to ask for something."], ["Follow-up", "a second request that improves the first answer."]],
          slides: [
            { title: "Use it yourself first", bullets: ["Leaders who use AI lead it better", "Pick a real task, no private data"] },
            { title: "A good demo", bullets: ["Clear prompt: need, context, format", "One follow-up to improve it", "Check every fact"] },
            { title: "Show the mistakes too", bullets: ["Catching an AI error teaches the most"] }
          ],
          tryIt: "Use ChatGPT, Copilot, Gemini or Claude to draft next week's team meeting agenda. Ask one follow-up, check it, and save the before and after versions for your briefing.",
          youCanNow: "run a short, safe, honest AI demo on a real team task.",
          quickCheck: [
            { objective: "O5", q: "What makes a good live AI demo for your team?", options: ["A real task with no private data", "A task using a real customer's file", "A made-up task with no link to your work", "A demo that hides any mistakes"], answer: 0, why: "A real but non-private task shows the value without putting anyone's data at risk." },
            { objective: "O5", q: "During your demo the AI drafts an agenda with a wrong meeting date. What do you do?", options: ["Skip that part quickly", "Blame the tool and stop", "Show how you caught it and ask a follow-up to fix it", "Say it is always this wrong"], answer: 2, why: "Showing the catch teaches your team the checking habit." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Briefing your team and setting a first ground rule",
          minutes: 6,
          goal: "Give a ten-minute team briefing on AI that ends with one ground rule.",
          text: [
            "A good first briefing is short and practical. Structure: two minutes on what AI and agentic AI are; three minutes of live demo; two minutes on good uses for our team; two minutes on risks; one minute on the ground rule and where to ask questions.",
            "Choose one ground rule that protects people and is easy to remember. The most useful first rule for most teams: \"No customer, client, student, patient or employee personal details go into public AI tools.\" Add who to ask when unsure.",
            "Invite questions and worries. Some people will be excited, some anxious about their jobs. Say plainly what you know, what you do not, and that people stay accountable for their work. Then follow up in writing with the rule."
          ],
          steps: ["Two minutes: what AI and agentic AI are.", "Three minutes: live demo.", "Two minutes: good uses for our team.", "Two minutes: risks.", "One minute: the ground rule and who to ask; then send it in writing."],
          words: [["Ground rule", "a simple, shared rule everyone follows."], ["Briefing", "a short meeting to give a team the same information."]],
          slides: [
            { title: "The ten-minute briefing", bullets: ["2 min: what AI and agents are", "3 min: live demo", "2 min: good uses; 2 min: risks", "1 min: the ground rule"] },
            { title: "A first ground rule", bullets: ["No personal details in public AI tools", "Say who to ask when unsure"] },
            { title: "Lead the conversation", bullets: ["Invite questions and worries", "Say what you know and do not know", "People stay accountable; follow up in writing"] }
          ],
          tryIt: "Final task: prepare your ten-minute briefing with the five parts above, using your demo from Lesson 5 and your risks from Lesson 4. Give it to your team (or record it), end with one ground rule, and send the rule in writing afterwards.",
          youCanNow: "brief your team on AI clearly and set a first ground rule that protects people.",
          quickCheck: [
            { objective: "O6", q: "What should a first AI briefing end with?", options: ["A list of every AI tool on the market", "One clear ground rule and who to ask", "A promise that AI will not change anything", "A test with grades"], answer: 1, why: "One clear rule and a contact person give the team a shared starting point." },
            { objective: "O6", q: "A day after your briefing, what is the best next step?", options: ["Wait to see if anyone remembers the rule", "Add five more rules", "Ask the AI to remind everyone", "Send the ground rule to the team in writing"], answer: 3, why: "A written rule is easy to find and refer back to." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Leading your team's first steps",
        questions: [
          { objective: "O4", q: "A staff member wants to paste a customer's complaint, with name and address, into a free public AI tool. Best response?", options: ["Go ahead", "Paste only the address", "Remove the personal details first, or use an approved tool", "Ask the AI if it is safe"], answer: 2, why: "Personal details stay out of public tools." },
          { objective: "O4", q: "What are the four functions of the NIST AI Risk Management Framework?", options: ["Govern, Map, Measure, Manage", "Plan, Build, Test, Ship", "Buy, Install, Train, Use", "Read, Write, Check, Send"], answer: 0, why: "NIST names Govern, Map, Measure and Manage." },
          { objective: "O5", q: "Your live demo gives a wrong date. What should you do in the briefing?", options: ["Hide it", "Show how you caught and fixed it", "Stop the briefing", "Blame the tool and move on"], answer: 1, why: "Catching errors openly teaches the checking habit." },
          { objective: "O6", q: "Which is the best first ground rule for most teams?", options: ["\"No personal details in public AI tools; ask if unsure.\"", "\"Never use AI.\"", "\"Only managers may use AI.\"", "\"Use AI for everything.\""], answer: 0, why: "It protects people and is easy to remember." },
          { objective: "O6", q: "A team member is anxious that AI will replace them. A good leader:", options: ["Ends the meeting", "Ignores the worry", "Promises nothing will ever change", "Says plainly what is known and that people stay accountable"], answer: 3, why: "Honest, plain answers build trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leadership in the Age of Agentic AI 1: Understanding AI",
    questions: [
      { objective: "O1", q: "AI is best described as:", options: ["A new kind of computer screen", "Software that does tasks that usually need human judgment", "A social media app", "A type of robot only"], answer: 1, why: "That is the plain definition." },
      { objective: "O1", q: "Machine learning means:", options: ["Staff learn to use machines", "Machines repair themselves", "Software learns patterns from examples", "Typing faster"], answer: 2, why: "It learns from examples instead of hand-written rules." },
      { objective: "O1", q: "Which is a generative AI tool?", options: ["A printer", "A calculator", "Microsoft Copilot", "A filing cabinet"], answer: 2, why: "Copilot, ChatGPT, Gemini and Claude generate text." },
      { objective: "O1", q: "LLM stands for:", options: ["Large language model", "Long legal memo", "Low-level machine", "Local learning module"], answer: 0, why: "LLMs power chat assistants." },
      { objective: "O2", q: "An AI assistant:", options: ["Never makes mistakes", "Always acts on its own", "Signs contracts", "Answers and drafts when asked"], answer: 3, why: "Assistants respond; you decide." },
      { objective: "O2", q: "An AI agent:", options: ["Only answers questions", "Plans steps and acts with tools toward a goal", "Is a human employee", "Cannot use email or calendars"], answer: 1, why: "Agents take actions." },
      { objective: "O2", q: "Agentic AI changes the leader's question to:", options: ["Is it popular?", "What color is it?", "How many words can it write?", "What may it do, who approves, who is accountable?"], answer: 3, why: "Action requires permissions and accountability." },
      { objective: "O3", q: "Hallucination means AI:", options: ["Refuses to answer", "Is very fast", "Writes something that sounds true but is made up", "Speaks out loud"], answer: 2, why: "Made-up content must be checked." },
      { objective: "O3", q: "Which is a GOOD use of AI for a team?", options: ["First draft of a job post that a person reviews", "Deciding who gets a raise", "Sending legal notices unchecked", "Storing staff medical records"], answer: 0, why: "Drafts reviewed by people save time safely." },
      { objective: "O3", q: "AI output can be unfair to groups of people because of:", options: ["Slow internet", "Bias learned from training data", "Font choices", "Screen size"], answer: 1, why: "Training data patterns can carry bias." },
      { objective: "O3", q: "The explain-it test asks:", options: ["Would you tell the affected person AI did this?", "Can the AI explain itself?", "Is it cheap?", "Is it fast?"], answer: 0, why: "Comfort explaining it signals an acceptable use." },
      { objective: "O4", q: "Prompt injection is:", options: ["A pricing plan", "A medical treatment", "A faster prompt", "Hidden text that tries to make AI follow someone else's orders"], answer: 3, why: "Agents reading email or web pages can be tricked." },
      { objective: "O4", q: "Least access means:", options: ["No access at all", "Only the access the job needs", "Full access for speed", "Access for managers only"], answer: 1, why: "Less access limits damage from mistakes." },
      { objective: "O4", q: "The NIST AI RMF is:", options: ["An AI tool", "A law with fines", "A free, voluntary framework for managing AI risk", "A training certificate"], answer: 2, why: "NIST describes it as voluntary." },
      { objective: "O4", q: "Before using AI-written facts in a report, you should:", options: ["Ask the AI to promise", "Trust them if they sound right", "Check them against a reliable source", "Remove all numbers"], answer: 2, why: "A person checks facts and figures." },
      { objective: "O5", q: "A good live demo uses:", options: ["A real task with no private data", "A customer's full file", "Staff salary data", "Passwords"], answer: 0, why: "Real but non-private tasks are safe and relevant." },
      { objective: "O5", q: "Why show an AI mistake during your briefing?", options: ["It proves AI is useless", "It is funny", "It ends the meeting early", "It teaches the checking habit"], answer: 3, why: "Seeing errors caught teaches more than a perfect demo." },
      { objective: "O6", q: "A first briefing should end with:", options: ["A 50-page policy", "One clear ground rule and who to ask", "No conclusion", "A software purchase"], answer: 1, why: "A simple rule is remembered and followed." },
      { objective: "O6", q: "After the briefing you should:", options: ["Ban questions", "Never mention AI again", "Delete the demo", "Send the ground rule in writing"], answer: 3, why: "Writing it down makes it stick." },
      { objective: "O6", q: "When people use AI for their work, who stays accountable for that work?", options: ["The AI company", "The AI tool", "The people doing the work", "No one"], answer: 2, why: "Accountability stays with people." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      6,
      8,
      10,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Plain explanation",
        objective: "O1",
        notYet: "Uses jargon, or mixes up generative and agentic AI.",
        meets: "Explains generative and agentic AI in plain words.",
        exceeds: "Uses an example from the team's own work that everyone recognizes."
      },
      {
        name: "Three good uses",
        objective: "O3",
        notYet: "Fewer than three uses, or uses that are poor fits.",
        meets: "Names three good uses for the team's real work.",
        exceeds: "Says which ones need a person to check the output."
      },
      {
        name: "Three risks",
        objective: "O4",
        notYet: "Risks are general or missing.",
        meets: "Names three risks that fit the team's real work.",
        exceeds: "Gives a guard for each risk."
      },
      {
        name: "Live example",
        objective: "O5",
        notYet: "No example, or it uses private data.",
        meets: "Shows one live example with a free AI assistant on a non-private task.",
        exceeds: "Shows a follow-up and how the output was checked."
      },
      {
        name: "Ground rule",
        objective: "O6",
        notYet: "No ground rule, or one that is vague.",
        meets: "Ends with one clear ground rule everyone will follow.",
        exceeds: "Names who to ask and sends the rule in writing afterwards."
      }
    ]
  },
  evaluation: {
    results: [
      "Leaders who finish the course and pass the final task (rubric)",
      "Leaders who deliver the briefing to their team within 30 days (follow-up survey)",
      "Teams that have a written AI ground rule within 30 days (follow-up survey)",
      "Leaders who go on to course 2 of Leadership in the Age of Agentic AI"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free AI assistant such as ChatGPT, Copilot, Gemini or Claude",
      "A list of your team's routine tasks",
      "Paper or a document for notes and the briefing outline",
      "About 60 minutes in total, plus the ten-minute team briefing"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then have managers share one task they marked GOOD, CARE or POOR and why.",
      "Run the Lesson 5 demo live with the group, including one mistake that is caught.",
      "Remind everyone to follow their organization's own AI and data policies and to use no personal details in practice.",
      "Let leaders practice their briefing in pairs before giving it to their team.",
      "Score the final task with the rubric, and ask for the written ground rule as evidence."
    ]
  }
};
