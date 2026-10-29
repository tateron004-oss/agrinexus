"use strict";

// Koach Learn course: Leadership Development -> "Leadership in the Age of Agentic AI 2: AI for Modern Leaders and AI Tools for Leaders"
// (course 2 of 3). Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "lead-agentic-modern-leaders",
  category: "Leadership Development",
  name: "Leadership in the Age of Agentic AI 2: AI for Modern Leaders and AI Tools for Leaders",
  skills: "Turning meeting notes into action lists, Drafting decision memos with options and risks, Writing clear team communications, Preparing for hard conversations, Choosing approved tools, Writing a one-page team AI use guide",
  outcome: "use AI tools in your own leadership work, turning meeting notes into action lists, drafting a decision memo with options and risks, and preparing team messages, and write a one-page AI use guide your team can follow.",
  about: [
    "This course is for managers, supervisors, team leads, and owners of small businesses and nonprofits who finished course 1 or already understand the basics of AI. It is about your own work as a leader: meetings, decisions, communication and people.",
    "Chapter 1 builds three repeatable AI workflows you can use every week: meeting notes to action list, the decision memo, and team communications. Chapter 2 covers the harder parts: using AI to prepare for people conversations without handing them over to it, choosing tools wisely, and writing a simple AI use guide for your team.",
    "You can use any well-known assistant: ChatGPT, Microsoft Copilot, Google Gemini or Claude. If your organization has approved a particular tool, use that one. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Build your leader's AI toolkit: save three tested, reusable prompts (meeting notes to action list, decision memo with options and risks, team update message), each used once on real work with private details removed; and write a one-page AI use guide for your team that says which tools are approved, what never goes in, what must be checked by a person, and who to ask.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Managers, supervisors, team leads and owners of small businesses and nonprofits who finished course 1 or already understand the basics of AI.",
    startingPoint: "Can explain generative and agentic AI and name the main risks for their team. Use AI now and then, but not in repeatable workflows for meetings, decisions, communication and people work.",
    gap: "Leaders spend much of their week on notes, decisions and messages. Tested, reusable prompts save time, but only if leaders keep judgment, people conversations and personal data in human hands, and give their team a clear guide to follow.",
    constraints: [
      "Reading level: plain words, no technical background assumed",
      "Devices: a phone or computer with an AI assistant; use the tool your organization has approved",
      "Privacy: remove personal and confidential details before pasting anything into AI",
      "HR, legal and organization policies apply to people decisions and sensitive messages",
      "Time: short lessons with one task using real work"
    ],
    prerequisites: "\"Leadership in the Age of Agentic AI 1: Understanding AI\", or a basic understanding of AI."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given rough notes from a real meeting with personal details removed", action: "use a reusable prompt to turn the notes into decisions, actions with owners and dates, and open questions", standard: "checking the list for anything invented or missing" },
    { id: "O2", condition: "Given a real decision you face", action: "draft a decision memo with options, risks and follow-up questions, then write the recommendation yourself", standard: "never giving \"AI recommended it\" as a reason" },
    { id: "O3", condition: "Given three bullets for a team update", action: "draft and adjust a team message for tone, length and audience", standard: "reading it aloud before sending" },
    { id: "O4", condition: "Before a hard people conversation", action: "prepare an opening line and questions with AI using only a general description", standard: "with no names or private details, and the conversation and decision kept by you" },
    { id: "O5", condition: "Given an AI tool your team uses or wants", action: "compare it on data, access and plan terms using the provider's own pages", standard: "ending with a one-line verdict: approve, approve with limits, or not yet" },
    { id: "O6", condition: "For your team", action: "write a one-page AI use guide and save your tested prompts in one place", standard: "covering approved tools, what never goes in, what to check, disclosure and who to ask" }
  ],
  chapters: [
    {
      name: "Chapter 1: Three AI workflows for leaders",
      lessons: [
        {
          objectives: ["O1"],
          title: "Meeting notes to action list",
          minutes: 5,
          goal: "Turn rough meeting notes into a clear action list with owners and dates.",
          text: [
            "Meetings end in vague memory more often than in clear actions. AI is good at turning rough notes into structure. Paste your notes (with personal or confidential details removed) and ask for a list of decisions, actions with an owner and a due date, and open questions.",
            "A reusable prompt: \"From these meeting notes, list: 1) decisions made, 2) actions as a table with task, owner, due date, 3) open questions. If an owner or date is missing, write MISSING. Do not add anything not in the notes.\" The last sentence matters: it stops the tool from inventing tasks.",
            "Many meeting apps now offer AI notes or summaries. Before turning them on, check your organization's policy and tell participants, because recording and transcribing people raises consent and privacy questions."
          ],
          steps: ["Remove personal or confidential details from the notes.", "Paste the notes with the reusable prompt.", "Check every action against your memory and the notes.", "Fill in anything marked MISSING.", "Send the list to attendees the same day."],
          words: [["Action item", "a task agreed in a meeting, with an owner and a due date."], ["Reusable prompt", "a prompt you save and use again for the same kind of task."]],
          slides: [
            { title: "Notes to actions", bullets: ["Decisions made", "Actions: task, owner, due date", "Open questions"] },
            { title: "Stop invented tasks", bullets: ["\"If missing, write MISSING\"", "\"Do not add anything not in the notes\""] },
            { title: "AI meeting recorders", bullets: ["Check your organization's policy first", "Tell participants before recording"] }
          ],
          tryIt: "Take notes from a recent meeting, remove personal details, run the reusable prompt, and check the result. Count anything it got wrong or invented.",
          youCanNow: "turn meeting notes into a checked action list with owners and dates.",
          quickCheck: [
            { objective: "O1", q: "What should a good meeting-notes prompt ask the AI to list?", options: ["Who talked the most", "Decisions, actions with owners and dates, and open questions", "A summary of every sentence", "Ideas for the next meeting's snacks"], answer: 1, why: "Decisions, owned actions and open questions are what a team needs after a meeting." },
            { objective: "O1", q: "The action list includes a task nobody mentioned in the meeting. What would you do?", options: ["Keep it, since it is a good idea", "Assign it to yourself quietly", "Remove it and add \"Do not add anything not in the notes\" to the prompt", "Ask the AI to explain why"], answer: 2, why: "Invented tasks cause confusion; the prompt rule stops the tool from adding them." }
          ]
        },
        {
          objectives: ["O2"],
          title: "The decision memo: options, risks and a recommendation",
          minutes: 6,
          goal: "Use AI to draft a decision memo that compares options fairly.",
          text: [
            "Leaders decide under time pressure. AI can help you think wider, not decide for you. Give it the decision, the facts you have, your constraints (budget, time, people) and ask for three options, each with benefits, risks, costs and what you would need to believe for it to be the best choice.",
            "Then push back: \"What is the strongest argument against my preferred option?\" and \"What information am I missing?\" These two follow-ups are where AI adds the most value, because they surface blind spots.",
            "You write the recommendation. Check every number, add what only you know (your people, your history, your values) and own the decision. The memo should never say \"AI recommended\" as a reason."
          ],
          steps: ["Describe the decision, facts and constraints (no private data).", "Ask for three options with benefits, risks and costs.", "Ask for the strongest argument against your favorite.", "Ask what information is missing.", "Check numbers and write the recommendation yourself."],
          words: [["Decision memo", "a short document that sets out a decision, the options and a recommendation."], ["Blind spot", "something important you have not noticed."]],
          slides: [
            { title: "AI widens thinking, you decide", bullets: ["Give the decision, facts, constraints", "Ask for three options: benefits, risks, costs"] },
            { title: "Two powerful follow-ups", bullets: ["\"Strongest argument against my favorite?\"", "\"What information am I missing?\""] },
            { title: "You own the decision", bullets: ["Check every number", "Add what only you know", "Never \"AI recommended\" as the reason"] }
          ],
          tryIt: "Pick a real decision you face (for example, a new schedule, a vendor or an event). Run the decision-memo prompt and both follow-ups, then write a one-paragraph recommendation in your own words.",
          youCanNow: "use AI to widen a decision and write a memo you own.",
          quickCheck: [
            { objective: "O2", q: "What is AI's best role in a decision memo?", options: ["Making the final decision", "Choosing which option the team prefers", "Signing the memo", "Widening your options and finding blind spots"], answer: 3, why: "AI helps you see more options and risks; the leader decides." },
            { objective: "O2", q: "You have a favorite option. Which follow-up would you send?", options: ["\"What is the strongest argument against my preferred option?\"", "\"Tell me my option is best.\"", "\"Write the memo shorter.\"", "\"Pick for me.\""], answer: 0, why: "Asking for the strongest counterargument tests your choice fairly." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Clear team communication",
          minutes: 5,
          goal: "Draft and adjust a team message for tone, length and audience.",
          text: [
            "Many leadership problems are communication problems. AI helps you draft a team update, an announcement or a thank-you quickly, then adjust it: \"shorter\", \"warmer\", \"for staff who are new\", \"plain English for second-language readers\".",
            "Give it your key points as bullets and your audience, and ask for a draft in your voice. Paste an older message you wrote and say \"match this tone\" to make it sound like you.",
            "Read it aloud before sending. Cut anything you would not say in person. For sensitive news such as layoffs, policy changes or safety incidents, AI may help you structure it, but HR or legal should review the final words and you should deliver important news in person where you can."
          ],
          steps: ["Write your key points as bullets.", "Name the audience and the tone.", "Ask for a draft; give an older message to match your voice.", "Adjust with one or two follow-ups.", "Read it aloud; get review for sensitive news."],
          words: [["Tone", "how a message feels: warm, formal, urgent, calm."], ["Audience", "the people who will read the message."]],
          slides: [
            { title: "Draft fast, then adjust", bullets: ["Key points as bullets", "Audience and tone", "\"Shorter\", \"warmer\", \"plain English\""] },
            { title: "Sound like you", bullets: ["Paste an older message you wrote", "\"Match this tone\""] },
            { title: "Before you send", bullets: ["Read it aloud", "Sensitive news: HR or legal review", "Deliver big news in person"] }
          ],
          tryIt: "Write three bullets for a real team update. Use AI to draft it, ask for one adjustment, read it aloud and send it (or save it to send).",
          youCanNow: "draft and adjust team messages with AI while keeping your own voice.",
          quickCheck: [
            { objective: "O3", q: "How do you make an AI draft sound like you?", options: ["Ask it to use formal language", "Paste an older message you wrote and say \"match this tone\"", "Send it without reading", "Use more exclamation marks"], answer: 1, why: "An example of your own writing shows the tool your tone." },
            { objective: "O3", q: "The AI's team update is twice as long as you need. What would you do?", options: ["Send it anyway", "Start a new chat with a new tool", "Delete the second half", "Ask for one adjustment, such as \"cut this to five short sentences\", then read it aloud"], answer: 3, why: "One clear follow-up fixes length, and reading aloud catches what you would not say." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Three AI workflows for leaders",
        questions: [
          { objective: "O1", q: "Why add \"Do not add anything not in the notes\" to the meeting prompt?", options: ["It hides the owners", "It makes the list longer", "It stops the tool from inventing tasks", "It is required by law"], answer: 2, why: "AI can fill gaps with made-up content." },
          { objective: "O1", q: "Before turning on an AI meeting recorder, you should:", options: ["Check policy and tell participants", "Record secretly", "Only tell the boss", "Turn off the microphone"], answer: 0, why: "Recording people raises consent and privacy questions." },
          { objective: "O2", q: "Which follow-up adds the most value to a decision memo?", options: ["\"Make it longer.\"", "\"Add emojis.\"", "\"Use bigger words.\"", "\"What is the strongest argument against my preferred option?\""], answer: 3, why: "It surfaces blind spots." },
          { objective: "O2", q: "Who writes the recommendation in a decision memo?", options: ["The AI", "You, the leader", "The vendor", "Nobody"], answer: 1, why: "Leaders own decisions; AI only widens the thinking." },
          { objective: "O3", q: "You must announce a policy change that affects pay. Best approach?", options: ["Send an unreviewed AI draft by email", "Let AI deliver it", "Skip the announcement", "Use AI to structure it, get HR review, deliver in person"], answer: 3, why: "Sensitive news needs human review and delivery." }
        ]
      }
    },
    {
      name: "Chapter 2: People, tools and team guidelines",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparing for people conversations without handing them over",
          minutes: 5,
          goal: "Use AI to prepare for a hard conversation while keeping personal data out.",
          text: [
            "Feedback, conflict and performance conversations are where leaders most want help and where AI is most dangerous. Personal details about an employee are confidential; do not paste names, health, discipline records or performance ratings into public AI tools.",
            "You can still prepare. Describe the situation in general terms (\"a team member often misses deadlines, is well liked, and recently had a family change\") and ask for: an opening line, questions to understand their side, and ways to agree next steps. Ask it to role-play the other person so you can practice.",
            "Never let AI decide on hiring, discipline, pay or firing, and never send AI-written feedback you have not rewritten in your own words. People can tell, and trust is what you lose."
          ],
          steps: ["Describe the situation generally, with no names or private details.", "Ask for an opening, questions and next-step options.", "Practice with a role-play.", "Write your own notes in your own words.", "Keep decisions about people with people."],
          words: [["Role-play", "practicing a conversation with someone (or an AI) playing the other person."], ["Confidential", "information that must be kept private and shared only with people who need it."]],
          slides: [
            { title: "Keep personal data out", bullets: ["No names, health or discipline records", "No ratings in public AI tools"] },
            { title: "Prepare in general terms", bullets: ["Ask for an opening and good questions", "Ask for next-step options", "Practice with a role-play"] },
            { title: "Lines you do not cross", bullets: ["No AI decisions on hiring, pay or discipline", "Rewrite feedback in your own words"] }
          ],
          tryIt: "Think of a conversation you need to have. Describe it in general terms with no names, ask for an opening line and three questions, then role-play it once.",
          youCanNow: "prepare for hard conversations with AI while protecting people's privacy and your trust.",
          quickCheck: [
            { objective: "O4", q: "What may you put into a public AI tool when preparing for a performance conversation?", options: ["The employee's name and review history", "A general description with no names or private details", "Their medical notes, to be sensitive", "Their full personnel file"], answer: 1, why: "Only a general description keeps the person's private information out of the tool." },
            { objective: "O4", q: "AI suggests exactly what to say and what decision to make about an employee. What do you do?", options: ["Use its opening line idea as practice, and make the decision yourself", "Read its script word for word", "Let the AI send the message", "Copy its decision into HR records"], answer: 0, why: "AI can help you prepare, but the conversation and decision stay with you." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Choosing and using AI tools wisely",
          minutes: 5,
          goal: "Compare AI tools on the questions that matter for your team.",
          text: [
            "There are many AI tools: general assistants (ChatGPT, Microsoft Copilot, Google Gemini, Claude), assistants inside tools you already use (Microsoft 365, Google Workspace, Canva, meeting apps), and agent features that can take actions. Features and prices change often.",
            "Ask five questions before your team adopts one. Data: does it store or train on what we type, and can we turn that off? Access: what can it read or do in our systems? Approval: has our organization or IT approved it? Accuracy: can it show sources? Cost: what does it cost per person, now and at renewal?",
            "Find the answers on the provider's own privacy and pricing pages and in your contract, not in ads. Business and education plans often have different data terms from free personal plans; read them for the plan you would actually use."
          ],
          steps: ["List the tools your team uses or wants.", "Check data: storage and training on your inputs.", "Check access: what it can read or do.", "Check approval, accuracy and cost.", "Use the provider's own pages and your contract."],
          words: [["Data terms", "the rules for how a provider stores and uses what you type."], ["Built-in assistant", "an AI feature inside a tool you already use, like a word processor."]],
          slides: [
            { title: "Kinds of AI tools", bullets: ["General assistants", "Assistants inside tools you already use", "Agent features that take actions"] },
            { title: "Five questions", bullets: ["Data: stored or trained on?", "Access: what can it read or do?", "Approval, accuracy, cost"] },
            { title: "Where to find answers", bullets: ["Provider's privacy and pricing pages", "Your contract", "Terms differ by plan: check yours"] }
          ],
          tryIt: "Pick one AI tool your team uses or wants. Answer the five questions using the provider's own pages. Write a one-line verdict: approve, approve with limits, or not yet.",
          youCanNow: "judge an AI tool on data, access, approval, accuracy and cost.",
          quickCheck: [
            { objective: "O5", q: "What does the \"access\" question about an AI tool ask?", options: ["How much it costs", "How fast it answers", "What it can read or do in your systems", "Which languages it speaks"], answer: 2, why: "Access tells you what the tool could see or change if something goes wrong." },
            { objective: "O5", q: "Your team uses a free personal plan and you want to know if it trains on your data. Where do you look?", options: ["A news article from last year", "The provider's own privacy terms for that plan", "A colleague's guess", "The AI's own answer in a chat"], answer: 1, why: "Free and business plans can have different data terms, and the provider's pages are the source." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Writing a one-page team AI use guide",
          minutes: 6,
          goal: "Write a short AI use guide your team can follow.",
          text: [
            "A one-page guide beats a long policy nobody reads. It answers five questions: Which tools may we use? What never goes in? What must a person check before it goes out? When do we say AI helped? Who do we ask?",
            "Write it in plain words with examples from your team's work: \"Never paste customer names, addresses or payment details.\" \"A person checks every fact, number and quote.\" \"Tell the customer if they are chatting with an AI.\" If your organization has a formal policy, your guide must fit inside it; check with HR, IT or legal.",
            "Use AI to draft it from your notes, then edit hard. Share it, ask the team what is unclear, and review it every few months, because tools and risks keep changing."
          ],
          steps: ["Answer the five questions in bullet notes.", "Use AI to draft one page from your notes.", "Add real examples from your team's work.", "Check it fits any organization policy.", "Share it, ask what is unclear, set a review date."],
          words: [["AI use guide", "a short set of rules for how a team uses AI tools."], ["Disclosure", "telling people that AI helped make something or that they are talking to AI."]],
          slides: [
            { title: "Five questions, one page", bullets: ["Which tools?", "What never goes in?", "What must a person check?", "When do we disclose? Who do we ask?"] },
            { title: "Plain words, real examples", bullets: ["\"Never paste customer payment details\"", "\"A person checks every fact and number\""] },
            { title: "Keep it alive", bullets: ["Fit inside any formal policy", "Ask the team what is unclear", "Review every few months"] }
          ],
          tryIt: "Final task: save your three tested prompts (meeting actions, decision memo, team update) in one document, and add your one-page team AI use guide with tools, never-put-in, must-check, disclosure and who to ask. Share it with one colleague for feedback.",
          youCanNow: "lead your team's day-to-day AI use with a tested toolkit and a clear one-page guide.",
          quickCheck: [
            { objective: "O6", q: "What does disclosure mean in a team AI guide?", options: ["Sharing your passwords with IT", "Listing every AI tool ever made", "Publishing your prompts online", "Telling people when AI helped or when they are talking to AI"], answer: 3, why: "Disclosure keeps people informed about where AI was used." },
            { objective: "O6", q: "Your organization has a formal AI policy. How should your one-page team guide relate to it?", options: ["Fit inside it and point to it", "Replace it with simpler rules", "Ignore it, since teams are different", "Copy it word for word, all of it"], answer: 0, why: "A team guide adds practical detail but must stay within the organization's policy." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: People, tools and team guidelines",
        questions: [
          { objective: "O4", q: "Preparing for a performance conversation, what may you put into a public AI tool?", options: ["The employee's name and rating", "Their medical note", "A general description with no names or private details", "Their discipline file"], answer: 2, why: "Describe situations generally; keep personal data out." },
          { objective: "O4", q: "Which decision should never be made by AI?", options: ["Disciplining an employee", "Choosing a meeting time", "Picking a font", "Ordering agenda items"], answer: 0, why: "Decisions about people stay with people." },
          { objective: "O5", q: "Where should you check whether a tool trains on your data?", options: ["An ad for the tool", "The provider's own privacy terms for your plan", "A friend's opinion", "The tool's logo"], answer: 1, why: "Official terms for your actual plan are the source." },
          { objective: "O6", q: "What is the main advantage of a one-page AI guide?", options: ["People actually read and follow it", "It covers every possible case", "It never needs updating", "It replaces all policies"], answer: 0, why: "Short, plain guides get used." },
          { objective: "O6", q: "How often should you review your team's AI guide?", options: ["Never", "Every ten years", "Only after a disaster", "Every few months, as tools and risks change"], answer: 3, why: "AI tools change quickly." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leadership in the Age of Agentic AI 2: AI for Modern Leaders and AI Tools for Leaders",
    questions: [
      { objective: "O1", q: "A good meeting-notes prompt asks for:", options: ["A poem", "Decisions, actions with owners and dates, open questions", "Everyone's salaries", "A new agenda only"], answer: 1, why: "That structure turns notes into action." },
      { objective: "O1", q: "If the AI lists an action with no owner, the prompt should make it write:", options: ["Your name", "A random name", "MISSING", "Nothing"], answer: 2, why: "Marking gaps prevents invented owners." },
      { objective: "O1", q: "Before pasting notes into AI you should:", options: ["Add passwords", "Add more names", "Remove personal or confidential details", "Translate them"], answer: 2, why: "Private details stay out of public tools." },
      { objective: "O2", q: "In a decision memo, AI's best role is to:", options: ["Widen your options and surface blind spots", "Make the decision", "Sign the memo", "Replace your team"], answer: 0, why: "You decide; AI helps you think wider." },
      { objective: "O2", q: "\"What information am I missing?\" is a:", options: ["Formatting command", "Waste of time", "Privacy risk", "Useful follow-up that finds blind spots"], answer: 3, why: "It surfaces gaps in your thinking." },
      { objective: "O2", q: "A memo should never give which reason?", options: ["\"It fits our budget\"", "\"AI recommended it\"", "\"It meets the deadline\"", "\"Our team can deliver it\""], answer: 1, why: "Leaders own their reasons." },
      { objective: "O3", q: "To make an AI draft sound like you:", options: ["Use a different tool", "Use more exclamation marks", "Ask for longer words", "Paste an older message and say \"match this tone\""], answer: 3, why: "Examples of your writing guide the tone." },
      { objective: "O3", q: "Reading a message aloud before sending helps you:", options: ["Add jargon", "Make it longer", "Cut what you would not say in person", "Skip review"], answer: 2, why: "Your ear catches wrong tone." },
      { objective: "O3", q: "For news about layoffs, AI may help you:", options: ["Structure the message, with HR or legal review", "Send it without review", "Decide who is laid off", "Avoid telling people"], answer: 0, why: "Sensitive news needs human review." },
      { objective: "O4", q: "Which detail should never go into a public AI tool?", options: ["A generic meeting agenda", "An employee's health information", "Public event dates", "Your team's name"], answer: 1, why: "Health information is confidential." },
      { objective: "O4", q: "Role-play with AI helps you:", options: ["Practice a hard conversation", "Skip the conversation", "Record the employee", "Decide pay"], answer: 0, why: "Practice builds confidence without sharing private data." },
      { objective: "O4", q: "AI-written feedback should be:", options: ["Kept secret from the employee", "Sent as is", "Posted publicly", "Rewritten in your own words"], answer: 3, why: "People can tell, and trust matters." },
      { objective: "O5", q: "Which is a built-in assistant?", options: ["A paper notebook", "An AI feature inside your word processor", "A desk phone", "A printer"], answer: 1, why: "Many familiar tools now include AI features." },
      { objective: "O5", q: "The \"data\" question about a tool asks:", options: ["Is it popular?", "What color is it?", "Does it store or train on what we type?", "How many buttons does it have?"], answer: 2, why: "Data terms decide what is safe to type." },
      { objective: "O5", q: "The \"access\" question asks:", options: ["Is the office open?", "Can staff access the internet?", "What can it read or do in our systems?", "Who has a key to the door?"], answer: 2, why: "Agent features can act in your systems." },
      { objective: "O5", q: "Free personal plans and business plans:", options: ["Can have different data terms", "Always have the same terms", "Never store data", "Are always free"], answer: 0, why: "Read the terms for the plan you will use." },
      { objective: "O6", q: "A one-page AI guide answers:", options: ["Only who is in charge", "Every legal question", "Only prices", "Which tools, what never goes in, what to check, disclosure, who to ask"], answer: 3, why: "Five plain questions cover daily use." },
      { objective: "O6", q: "Disclosure means:", options: ["Hiding AI use", "Telling people AI helped or that they are talking to AI", "Deleting records", "Sharing passwords"], answer: 1, why: "Honesty about AI builds trust." },
      { objective: "O6", q: "If your organization has a formal AI policy, your team guide must:", options: ["Contradict it", "Replace it", "Ignore it", "Fit inside it"], answer: 3, why: "Team guides work within organization policy." },
      { objective: "O6", q: "Your leader's AI toolkit is best kept as:", options: ["Other people's passwords", "Random prompts you forget", "Tested, reusable prompts saved in one place", "A list of every AI tool"], answer: 2, why: "Saved, tested prompts make good habits repeatable." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Meeting actions prompt",
        objective: "O1",
        notYet: "No saved prompt, or it was not tested on real notes.",
        meets: "A saved prompt that turns notes into actions with owners and dates, used once with private details removed.",
        exceeds: "The prompt marks missing owners and forbids invented tasks."
      },
      {
        name: "Decision memo prompt",
        objective: "O2",
        notYet: "No saved prompt, or the AI made the recommendation.",
        meets: "A saved prompt for options and risks, used once, with the recommendation written by the leader.",
        exceeds: "Includes follow-ups that test the preferred option."
      },
      {
        name: "Team update prompt",
        objective: "O3",
        notYet: "No saved prompt, or the message was not checked.",
        meets: "A saved prompt for team updates, used once and adjusted for tone or length.",
        exceeds: "Includes a sample of the leader's own writing to match tone."
      },
      {
        name: "One-page AI guide",
        objective: "O6",
        notYet: "Missing approved tools, what never goes in, what must be checked or who to ask.",
        meets: "One page covering approved tools, what never goes in, what a person must check and who to ask.",
        exceeds: "Also covers disclosure and was shared with a colleague for feedback."
      },
      {
        name: "Private details kept out",
        objective: "O4",
        notYet: "A prompt or example contains names or private details.",
        meets: "No personal or confidential details in any saved prompt or example.",
        exceeds: "Prompts use placeholders such as [team member] so they are safe to reuse."
      }
    ]
  },
  evaluation: {
    results: [
      "Leaders who finish the course and pass the final task (rubric)",
      "Teams with a one-page AI use guide in place within 30 days (follow-up survey)",
      "Leaders who report saving time each week with their reusable prompts (follow-up survey)",
      "Leaders who go on to course 3 of Leadership in the Age of Agentic AI"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with an AI assistant; use the one your organization has approved",
      "Notes from a recent meeting, a real decision and a team update, with private details removed",
      "A document to save prompts and the AI use guide",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Take the pre-test together, then run the meeting-notes prompt live on made-up notes before leaders use their own.",
      "Remind leaders to follow their organization's AI policy and to involve HR or legal on people decisions and sensitive news.",
      "Pair leaders to role-play a hard conversation using only general descriptions.",
      "Have leaders swap draft AI guides and give one piece of feedback each.",
      "Score the final task with the rubric, and check that no saved prompt contains personal details."
    ]
  }
};
