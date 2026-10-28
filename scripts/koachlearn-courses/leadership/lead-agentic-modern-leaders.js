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
  chapters: [
    {
      name: "Chapter 1: Three AI workflows for leaders",
      lessons: [
        {
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
          youCanNow: "turn meeting notes into a checked action list with owners and dates."
        },
        {
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
          youCanNow: "use AI to widen a decision and write a memo you own."
        },
        {
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
          youCanNow: "draft and adjust team messages with AI while keeping your own voice."
        }
      ],
      check: {
        title: "Knowledge Check 1: Three AI workflows for leaders",
        questions: [
          { q: "Why add \"Do not add anything not in the notes\" to the meeting prompt?", options: ["It hides the owners", "It makes the list longer", "It stops the tool from inventing tasks", "It is required by law"], answer: 2, why: "AI can fill gaps with made-up content." },
          { q: "Before turning on an AI meeting recorder, you should:", options: ["Check policy and tell participants", "Record secretly", "Only tell the boss", "Turn off the microphone"], answer: 0, why: "Recording people raises consent and privacy questions." },
          { q: "Which follow-up adds the most value to a decision memo?", options: ["\"Make it longer.\"", "\"Add emojis.\"", "\"Use bigger words.\"", "\"What is the strongest argument against my preferred option?\""], answer: 3, why: "It surfaces blind spots." },
          { q: "Who writes the recommendation in a decision memo?", options: ["The AI", "You, the leader", "The vendor", "Nobody"], answer: 1, why: "Leaders own decisions; AI only widens the thinking." },
          { q: "You must announce a policy change that affects pay. Best approach?", options: ["Send an unreviewed AI draft by email", "Let AI deliver it", "Skip the announcement", "Use AI to structure it, get HR review, deliver in person"], answer: 3, why: "Sensitive news needs human review and delivery." }
        ]
      }
    },
    {
      name: "Chapter 2: People, tools and team guidelines",
      lessons: [
        {
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
          youCanNow: "prepare for hard conversations with AI while protecting people's privacy and your trust."
        },
        {
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
          youCanNow: "judge an AI tool on data, access, approval, accuracy and cost."
        },
        {
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
          youCanNow: "lead your team's day-to-day AI use with a tested toolkit and a clear one-page guide."
        }
      ],
      check: {
        title: "Knowledge Check 2: People, tools and team guidelines",
        questions: [
          { q: "Preparing for a performance conversation, what may you put into a public AI tool?", options: ["The employee's name and rating", "Their medical note", "A general description with no names or private details", "Their discipline file"], answer: 2, why: "Describe situations generally; keep personal data out." },
          { q: "Which decision should never be made by AI?", options: ["Disciplining an employee", "Choosing a meeting time", "Picking a font", "Ordering agenda items"], answer: 0, why: "Decisions about people stay with people." },
          { q: "Where should you check whether a tool trains on your data?", options: ["An ad for the tool", "The provider's own privacy terms for your plan", "A friend's opinion", "The tool's logo"], answer: 1, why: "Official terms for your actual plan are the source." },
          { q: "What is the main advantage of a one-page AI guide?", options: ["People actually read and follow it", "It covers every possible case", "It never needs updating", "It replaces all policies"], answer: 0, why: "Short, plain guides get used." },
          { q: "How often should you review your team's AI guide?", options: ["Never", "Every ten years", "Only after a disaster", "Every few months, as tools and risks change"], answer: 3, why: "AI tools change quickly." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leadership in the Age of Agentic AI 2: AI for Modern Leaders and AI Tools for Leaders",
    questions: [
      { q: "A good meeting-notes prompt asks for:", options: ["A poem", "Decisions, actions with owners and dates, open questions", "Everyone's salaries", "A new agenda only"], answer: 1, why: "That structure turns notes into action." },
      { q: "If the AI lists an action with no owner, the prompt should make it write:", options: ["Your name", "A random name", "MISSING", "Nothing"], answer: 2, why: "Marking gaps prevents invented owners." },
      { q: "Before pasting notes into AI you should:", options: ["Add passwords", "Add more names", "Remove personal or confidential details", "Translate them"], answer: 2, why: "Private details stay out of public tools." },
      { q: "In a decision memo, AI's best role is to:", options: ["Widen your options and surface blind spots", "Make the decision", "Sign the memo", "Replace your team"], answer: 0, why: "You decide; AI helps you think wider." },
      { q: "\"What information am I missing?\" is a:", options: ["Formatting command", "Waste of time", "Privacy risk", "Useful follow-up that finds blind spots"], answer: 3, why: "It surfaces gaps in your thinking." },
      { q: "A memo should never give which reason?", options: ["\"It fits our budget\"", "\"AI recommended it\"", "\"It meets the deadline\"", "\"Our team can deliver it\""], answer: 1, why: "Leaders own their reasons." },
      { q: "To make an AI draft sound like you:", options: ["Use a different tool", "Use more exclamation marks", "Ask for longer words", "Paste an older message and say \"match this tone\""], answer: 3, why: "Examples of your writing guide the tone." },
      { q: "Reading a message aloud before sending helps you:", options: ["Add jargon", "Make it longer", "Cut what you would not say in person", "Skip review"], answer: 2, why: "Your ear catches wrong tone." },
      { q: "For news about layoffs, AI may help you:", options: ["Structure the message, with HR or legal review", "Send it without review", "Decide who is laid off", "Avoid telling people"], answer: 0, why: "Sensitive news needs human review." },
      { q: "Which detail should never go into a public AI tool?", options: ["A generic meeting agenda", "An employee's health information", "Public event dates", "Your team's name"], answer: 1, why: "Health information is confidential." },
      { q: "Role-play with AI helps you:", options: ["Practice a hard conversation", "Skip the conversation", "Record the employee", "Decide pay"], answer: 0, why: "Practice builds confidence without sharing private data." },
      { q: "AI-written feedback should be:", options: ["Kept secret from the employee", "Sent as is", "Posted publicly", "Rewritten in your own words"], answer: 3, why: "People can tell, and trust matters." },
      { q: "Which is a built-in assistant?", options: ["A paper notebook", "An AI feature inside your word processor", "A desk phone", "A printer"], answer: 1, why: "Many familiar tools now include AI features." },
      { q: "The \"data\" question about a tool asks:", options: ["Is it popular?", "What color is it?", "Does it store or train on what we type?", "How many buttons does it have?"], answer: 2, why: "Data terms decide what is safe to type." },
      { q: "The \"access\" question asks:", options: ["Is the office open?", "Can staff access the internet?", "What can it read or do in our systems?", "Who has a key to the door?"], answer: 2, why: "Agent features can act in your systems." },
      { q: "Free personal plans and business plans:", options: ["Can have different data terms", "Always have the same terms", "Never store data", "Are always free"], answer: 0, why: "Read the terms for the plan you will use." },
      { q: "A one-page AI guide answers:", options: ["Only who is in charge", "Every legal question", "Only prices", "Which tools, what never goes in, what to check, disclosure, who to ask"], answer: 3, why: "Five plain questions cover daily use." },
      { q: "Disclosure means:", options: ["Hiding AI use", "Telling people AI helped or that they are talking to AI", "Deleting records", "Sharing passwords"], answer: 1, why: "Honesty about AI builds trust." },
      { q: "If your organization has a formal AI policy, your team guide must:", options: ["Contradict it", "Replace it", "Ignore it", "Fit inside it"], answer: 3, why: "Team guides work within organization policy." },
      { q: "Your leader's AI toolkit is best kept as:", options: ["Other people's passwords", "Random prompts you forget", "Tested, reusable prompts saved in one place", "A list of every AI tool"], answer: 2, why: "Saved, tested prompts make good habits repeatable." }
    ]
  }
};
