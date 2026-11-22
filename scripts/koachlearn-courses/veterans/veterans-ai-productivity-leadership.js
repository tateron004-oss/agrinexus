"use strict";

// Koach Learn course: Veterans (military) -> "AI for Productivity and Leadership". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three
// micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "veterans-ai-productivity-leadership",
  category: "Veterans (military)",
  name: "AI for Productivity and Leadership",
  skills: "Planning a team's week with AI, Writing BLUF emails, Summarizing meetings into action items, Giving clear feedback, Delegating with a checklist, Using AI responsibly with team information",
  outcome: "use an AI assistant to plan a small team's week, write a clear bottom-line-up-front update email, and turn meeting notes into action items with owners and dates, while keeping team members' private information out of public AI tools.",
  about: [
    "This course is for veterans who led in uniform, as NCOs, petty officers, officers or team leads, and now lead or want to lead in civilian workplaces. Your leadership habits transfer; the words and the tools are a little different.",
    "You will use a free AI assistant to plan a team's week, write short, clear updates, turn messy meeting notes into action items, prepare feedback and delegate well. You will also learn the rules for using AI responsibly with other people's information.",
    "Each lesson takes about five minutes: read, watch the slides, then do the \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "For a real or practice team of three to six people: use an AI assistant to build a one-week plan with priorities and owners, write a bottom-line-up-front update email to your manager, and turn a short set of meeting notes into an action-item table with owner and due date, using roles instead of names and leaving out any private information.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Veterans who led in uniform as NCOs, petty officers, officers or team leads, and now lead or want to lead small teams in civilian workplaces.",
    startingPoint: "Strong habits in planning, briefing, after-action reviews and taking care of people. Comfortable with email and a computer. Little use of AI assistants for leadership work, and military writing can sound blunt to civilian readers.",
    gap: "Civilian teams expect plans, emails and feedback in civilian words, and many workplaces now use AI tools. Learners need to use an AI assistant to save time on planning, updates, meeting notes, feedback and delegation, while keeping team members' private information out and staying responsible for the final work.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a computer or smartphone with internet and a free AI assistant",
      "Privacy and policy: roles instead of names, no pay, health or personnel details in public AI tools, and the employer's AI policy comes first",
      "Time: about 5-minute lessons that fit around a working day",
      "Practice uses a real or practice team of three to six people"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and the Future Workforce\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of a team's tasks for the week", action: "use an AI assistant to build a prioritized weekly plan with an owner for each task", standard: "and correct anything it got wrong using your own judgment" },
    { id: "O2", condition: "Given a messy note to a manager", action: "write a bottom-line-up-front (BLUF) email with AI help", standard: "with the main point in the first sentence and a friendly, professional tone" },
    { id: "O3", condition: "Given a short set of meeting notes", action: "turn the notes into decisions, action items and open questions with AI", standard: "with one owner and a due date on every action item" },
    { id: "O4", condition: "Given something a teammate did", action: "draft feedback in situation-behavior-impact form and rewrite it in your own words", standard: "describing only behavior you saw" },
    { id: "O5", condition: "Given a task you could hand off", action: "create a delegation checklist with purpose, standard, deadline, resources and check-ins", standard: "with every required part" },
    { id: "O6", condition: "Whenever you use AI with team or company information", action: "follow your employer's AI policy, use roles instead of names and keep private information out", standard: "with no private details in any prompt and you responsible for the final work" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting the work done",
      lessons: [
        {
          objectives: ["O1"],
          title: "From mission planning to a weekly team plan",
          minutes: 5,
          goal: "Use AI to turn a list of tasks into a prioritized weekly plan with owners.",
          text: [
            "In the military you planned from the mission: what must get done, by when, with what people and resources. Civilian teams need the same thing; they often call it a work plan or project plan.",
            "Give an AI assistant your list of tasks, deadlines and team roles, and ask it to sort them by priority and lay out the week. Example: \"Here are 8 tasks for my 5-person warehouse team this week, with deadlines. Sort them by urgency and importance and make a Monday-to-Friday table with an owner role for each.\"",
            "Use roles, not full names (\"Shift lead A\", \"Forklift operator 2\"). Then apply your judgment: AI does not know that one person is on leave or that one customer matters most. You adjust and approve the plan."
          ],
          steps: ["List the week's tasks and deadlines.", "List team roles, not names.", "Ask AI to sort by urgency and importance and make a weekly table.", "Adjust for what AI does not know: leave, skills, key customers.", "Share the final plan with the team."],
          words: [["Work plan", "a list of tasks with owners and dates; the civilian version of an operations plan."], ["Urgent vs important", "urgent needs action now; important matters most to the goal. Not always the same."]],
          slides: [
            { title: "Same skill, new words", bullets: ["Mission planning = work plan", "What, by when, who, with what"] },
            { title: "Let AI sort and lay out", bullets: ["Give tasks, deadlines and roles", "Ask for priority order and a weekly table"] },
            { title: "You approve the plan", bullets: ["Use roles, not names", "Adjust for leave, skills, key customers", "Share the final plan"] }
          ],
          tryIt: "Write six tasks your team (real or practice) must do this week. Ask an AI assistant to sort them by urgency and importance and lay out a Monday-to-Friday table with an owner role for each. Change one thing it got wrong.",
          youCanNow: "turn a list of tasks into a prioritized weekly team plan with AI, and correct it with your judgment.",
          quickCheck: [
            { objective: "O1", q: "What does it mean to sort tasks by urgency and importance?", options: ["Do the easiest tasks first", "Decide which tasks need doing soon and which matter most", "Give every task to one person", "Do tasks in alphabetical order"], answer: 1, why: "Urgent and important are different, so sorting by both shows what to do first." },
            { objective: "O1", q: "The AI's weekly plan gives all six tasks to the same person. What do you do?", options: ["Accept it because the AI decided", "Delete the plan and do it all yourself", "Ask the AI to add more tasks", "Use your judgment to spread the work and fix the plan"], answer: 3, why: "The AI drafts the plan, but you know your team and approve the final version." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing BLUF emails and updates",
          minutes: 5,
          goal: "Write a short bottom-line-up-front email with AI help.",
          text: [
            "BLUF, bottom line up front, works in civilian offices too, even if people do not use the term. Put the main point or the decision you need in the first sentence. Then give the short reasons and the next steps.",
            "Ask the AI to rewrite a long draft: \"Rewrite this as a short email to my manager. Put the bottom line in the first sentence, then three bullet points, then the next step. Friendly, professional tone. No military terms.\"",
            "Check the tone. Military writing can sound blunt to civilian readers. A simple \"Thanks\" or \"Happy to discuss\" helps. Read it once as the person receiving it."
          ],
          steps: ["Write what you need to say, even if messy.", "Ask AI to put the bottom line first, then bullets, then the next step.", "Ask it to remove military terms and use a friendly, professional tone.", "Read it as the receiver and fix anything unclear."],
          words: [["BLUF", "bottom line up front: the main point or request goes first."], ["Tone", "how your writing sounds to the reader: friendly, blunt, formal."]],
          slides: [
            { title: "BLUF works everywhere", bullets: ["Main point or request first", "Short reasons next", "Next step last"] },
            { title: "Ask AI to rewrite", bullets: ["\"Bottom line in the first sentence\"", "\"Three bullets, then the next step\"", "\"Friendly, professional, no military terms\""] },
            { title: "Check the tone", bullets: ["Military writing can sound blunt", "Add \"Thanks\" or \"Happy to discuss\"", "Read it as the receiver"] }
          ],
          tryIt: "Write a messy note to a manager about a delay on a task. Ask an AI assistant to rewrite it as a BLUF email with three bullets and a next step, in a friendly, professional tone.",
          youCanNow: "write a short, clear bottom-line-up-front email that suits a civilian workplace.",
          quickCheck: [
            { objective: "O2", q: "In a BLUF email, what comes first?", options: ["The main point or request", "A long background story", "Your signature", "A list of everyone who helped"], answer: 0, why: "Bottom line up front means the reader sees the key point or request right away." },
            { objective: "O2", q: "Your AI-drafted email sounds short and blunt. What do you do before sending?", options: ["Send it as it is", "Make it twice as long", "Add a friendly line and read it as the receiver would", "Remove the main point"], answer: 2, why: "A friendly line and a read-through as the receiver keep it clear and professional." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Turning meeting notes into action items",
          minutes: 5,
          goal: "Use AI to turn meeting notes into an action-item table with owners and due dates.",
          text: [
            "Meetings waste time when nobody leaves knowing who does what. An after-action habit fixes that: what was decided, who owns each action, and when it is due.",
            "Paste your notes (with roles instead of names, and no private details) and ask: \"Turn these notes into: 1) decisions made, 2) a table of action items with owner and due date, 3) open questions.\" If an action has no owner or date, the AI should flag it.",
            "Many workplace tools, such as Microsoft Teams with Copilot or Google Meet with Gemini, can summarize meetings if your employer has turned that on. Follow your employer's rules about recording and AI, and tell people when a meeting is being recorded or summarized."
          ],
          steps: ["Take short notes during the meeting.", "Replace names with roles and remove private details.", "Ask AI for decisions, an action table with owner and due date, and open questions.", "Fill in any missing owners or dates.", "Send the summary to the team the same day."],
          words: [["Action item", "a task from a meeting with one owner and a due date."], ["After-action review", "a short look back: what happened, what worked, what to change."]],
          slides: [
            { title: "Every meeting should end with", bullets: ["Decisions made", "Action items: owner + due date", "Open questions"] },
            { title: "Ask AI to sort the notes", bullets: ["Paste notes with roles, not names", "Ask for decisions, actions, questions", "Have it flag missing owners or dates"] },
            { title: "Follow workplace rules", bullets: ["Use AI meeting tools only if allowed", "Tell people when you record or summarize", "Send the summary the same day"] }
          ],
          tryIt: "Write five lines of practice meeting notes. Ask an AI assistant to turn them into decisions, an action-item table with owner role and due date, and open questions.",
          youCanNow: "turn meeting notes into a clear action-item table with owners and dates.",
          quickCheck: [
            { objective: "O3", q: "What is an open question in a meeting summary?", options: ["A task with an owner", "A decision the team made", "A question nobody may ask", "Something still undecided that needs an answer later"], answer: 3, why: "Open questions are issues the meeting did not settle, listed so they are not forgotten." },
            { objective: "O3", q: "The AI's action-item table has \"Order parts\" with no owner. What do you do?", options: ["Leave it; someone will do it", "Give it one owner and a due date", "Give it to everyone", "Delete it"], answer: 1, why: "An action item is only complete with one owner and a due date." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting the work done",
        questions: [
          { objective: "O1", q: "What is the civilian name often used for a mission or operations plan?", options: ["A work plan or project plan", "A résumé", "A budget", "A crosswalk"], answer: 0, why: "Civilian teams usually call it a work plan or project plan." },
          { objective: "O6", q: "Why use roles like \"Shift lead A\" instead of names in an AI prompt?", options: ["AI cannot read names", "To keep team members' information private", "Names make answers longer", "It is faster to type"], answer: 1, why: "Roles give AI what it needs without sharing people's information." },
          { objective: "O1", q: "The AI's plan puts a big task on a day one person is on leave. You:", options: ["Keep the AI's plan", "Cancel the task", "Adjust the plan with your judgment", "Ask the person to skip leave"], answer: 2, why: "You know things AI does not; you approve the final plan." },
          { objective: "O2", q: "What goes in the first sentence of a BLUF email?", options: ["A long greeting", "Background history", "A joke", "The main point or request"], answer: 3, why: "Bottom line up front: the main point comes first." },
          { objective: "O3", q: "Which makes an action item complete?", options: ["One owner and a due date", "A long description", "Everyone owns it", "No date, so it is flexible"], answer: 0, why: "An action item needs one clear owner and a due date." }
        ]
      }
    },
    {
      name: "Chapter 2: Leading people with AI as your aide",
      lessons: [
        {
          objectives: ["O4"],
          title: "Preparing clear, fair feedback",
          minutes: 5,
          goal: "Use AI to draft feedback in situation-behavior-impact form, then make it your own.",
          text: [
            "Good feedback is specific and about behavior, not personality. A simple model is situation, behavior, impact (SBI): \"In Tuesday's shift handoff (situation), you walked through every open order (behavior), and the next shift started with no delays (impact).\" It works for praise and for correction.",
            "AI can help you prepare: \"Help me write SBI feedback for a team member who has been late to the morning huddle three times this month. Keep it respectful and end with a question that invites their side.\" Use a role, not a name.",
            "Deliver it yourself, in person or by call, and listen. AI helps you prepare the words; trust between you and your people comes from you."
          ],
          steps: ["Pick one specific situation.", "Describe the behavior you saw, not the person's character.", "Say the impact on the team or the work.", "Ask AI to help phrase it respectfully, using a role not a name.", "Deliver it yourself and listen."],
          words: [["SBI", "situation, behavior, impact: a simple way to give clear feedback."], ["Behavior", "what someone did or said, which you can see or hear."]],
          slides: [
            { title: "SBI feedback", bullets: ["Situation: when and where", "Behavior: what they did", "Impact: the effect on the team or work"] },
            { title: "Let AI help you prepare", bullets: ["Use a role, not a name", "Ask for respectful wording", "End with a question for their side"] },
            { title: "You deliver it", bullets: ["In person or by call", "Listen", "Trust comes from you, not the tool"] }
          ],
          tryIt: "Think of one thing a teammate did well recently. Ask an AI assistant to help you write SBI praise for it, using a role not a name. Then rewrite it in your own words.",
          youCanNow: "prepare clear, fair situation-behavior-impact feedback with AI help and deliver it yourself.",
          quickCheck: [
            { objective: "O4", q: "In SBI feedback, what is the behavior part?", options: ["Your opinion of the person's attitude", "The date of the meeting", "What the person did that you saw or heard", "The impact on your mood"], answer: 2, why: "Behavior is the specific action you observed, not a judgment about the person." },
            { objective: "O4", q: "The AI drafted praise for a teammate that sounds stiff. What do you do?", options: ["Rewrite it in your own words and give it yourself", "Email the AI text as it is", "Have the AI send it", "Skip the praise"], answer: 0, why: "AI can help you prepare, but feedback should be in your words and come from you." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Delegating with a clear checklist",
          minutes: 5,
          goal: "Use AI to build a delegation checklist that states the task, standard, deadline and check-in.",
          text: [
            "You know commander's intent: tell people the purpose and the end state, not only the steps, so they can adapt. Civilian delegation works the same way.",
            "A good handoff covers: the task, why it matters (intent), what done looks like (the standard), the deadline, the resources and authority they have, and when you will check in. Ask AI: \"Make a one-page delegation checklist for handing off the weekly inventory report to a new team member. Include purpose, standard, deadline, resources and check-in points.\"",
            "Then hand it off in person, ask them to explain it back, and step back. Check in at the agreed points instead of hovering."
          ],
          steps: ["Name the task and why it matters.", "Describe what done looks like.", "Set the deadline, resources and authority.", "Ask AI to turn this into a one-page checklist.", "Hand it off, ask them to explain it back, and check in as agreed."],
          words: [["Delegate", "give someone else a task and the authority to do it."], ["Intent", "the purpose and end state of a task, so people can adapt when things change."]],
          slides: [
            { title: "Commander's intent, civilian style", bullets: ["Purpose and end state", "Not only the steps", "So people can adapt"] },
            { title: "A good handoff covers", bullets: ["Task and why it matters", "Standard and deadline", "Resources, authority and check-ins"] },
            { title: "Then step back", bullets: ["Ask them to explain it back", "Check in at agreed points", "Do not hover"] }
          ],
          tryIt: "Pick one task you could hand off. Ask an AI assistant to make a one-page delegation checklist with purpose, standard, deadline, resources and check-in points.",
          youCanNow: "delegate a task with a clear checklist that gives purpose, standard, deadline and check-ins.",
          quickCheck: [
            { objective: "O5", q: "Why include the purpose when you delegate a task?", options: ["So the person cannot change anything", "So the person can adapt if things change", "So you never need to check in", "So the task takes longer"], answer: 1, why: "Knowing the purpose and end state lets people make good choices when plans change." },
            { objective: "O5", q: "You handed off a report due Friday. What do you do next?", options: ["Wait until Friday and hope", "Take the task back right away", "Redo it yourself without asking", "Check in at the agreed points"], answer: 3, why: "Agreed check-ins let you catch problems early without micromanaging." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Using AI responsibly as a leader",
          minutes: 5,
          goal: "Use three rules for using AI responsibly with team and company information.",
          text: [
            "As a leader you set the example. Rule 1: follow your employer's AI policy. Many companies say which AI tools are approved and what information may go into them. If there is no policy, ask.",
            "Rule 2: keep people's private information out of public AI tools: performance problems by name, health, pay, home addresses, or anything said in confidence. Keep customer and company secrets out too. Use roles and general descriptions.",
            "Rule 3: you own the result. Check facts, numbers and tone before anything goes out. If AI helped write something important, read every word. Telling your team how you use AI, and how they may use it, builds trust."
          ],
          steps: ["Find and read your employer's AI policy, or ask your manager.", "Use only approved tools for work information.", "Keep private and confidential information out of public AI.", "Check everything AI writes before it goes out.", "Tell your team how AI may be used."],
          words: [["AI policy", "an employer's rules about which AI tools may be used and what information may go into them."], ["Confidential", "information meant to be kept private within a group or company."]],
          slides: [
            { title: "Rule 1: Follow the policy", bullets: ["Use approved AI tools", "No policy? Ask"] },
            { title: "Rule 2: Protect people", bullets: ["No names with performance, health or pay", "No customer or company secrets", "Use roles and general terms"] },
            { title: "Rule 3: You own the result", bullets: ["Check facts, numbers and tone", "Read every word of important work", "Be open with your team about AI"] }
          ],
          tryIt: "Final task: for a team of three to six people, use an AI assistant to build a one-week plan with owners, write a BLUF update email, and turn short meeting notes into an action-item table. Use roles instead of names and check that no private information is in any of it.",
          youCanNow: "use AI as a leader in a way that follows policy, protects your people and keeps you accountable.",
          quickCheck: [
            { objective: "O6", q: "Which rule comes first when you use AI at work?", options: ["Follow your employer's AI policy", "Use any tool you like", "Paste in everything so the AI has context", "Let the AI make the final decision"], answer: 0, why: "Your employer's policy decides which tools and information you may use." },
            { objective: "O6", q: "You want AI help with a note about a team member's pay problem. What do you do?", options: ["Paste in their name and pay details", "Paste their whole file", "Leave the private details out and describe the situation with a role", "Post it in a public chat"], answer: 2, why: "Pay and personal details never go into a public AI tool; a role keeps the person private." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Leading people with AI as your aide",
        questions: [
          { objective: "O4", q: "What does SBI stand for?", options: ["Situation, behavior, impact", "Staff, budget, inventory", "Speed, balance, intent", "Safety, briefing, inspection"], answer: 0, why: "SBI is a simple model for clear feedback." },
          { objective: "O4", q: "Which is behavior-based feedback?", options: ["\"You are lazy.\"", "\"You arrived 15 minutes late to three huddles this month.\"", "\"You have a bad attitude.\"", "\"You are the worst.\""], answer: 1, why: "It describes what the person did, which you can see." },
          { objective: "O5", q: "In delegation, \"intent\" means:", options: ["The exact steps only", "The deadline only", "The purpose and end state, so people can adapt", "Your feelings about the task"], answer: 2, why: "Intent lets people adapt when things change." },
          { objective: "O6", q: "Your company has no AI policy. What do you do?", options: ["Use any tool with any data", "Ban AI for everyone yourself", "Paste customer data into a public chatbot", "Ask your manager before using AI with work information"], answer: 3, why: "When there is no policy, ask before you put work information into AI." },
          { objective: "O6", q: "Which is OK to put in a public AI prompt?", options: ["\"A team member has been late to three huddles\"", "A named employee's health problem", "Customer account numbers", "Your team's home addresses"], answer: 0, why: "A role-based, general description keeps people's information private." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Productivity and Leadership",
    questions: [
      { objective: "O1", q: "A civilian work plan covers:", options: ["Only who is in charge", "What, by when, who and with what", "Only the budget", "Only the meeting time"], answer: 1, why: "Like a mission plan, it covers tasks, dates, people and resources." },
      { objective: "O1", q: "When asking AI to sort tasks, it helps to ask for:", options: ["Random order", "Alphabetical order", "Order by urgency and importance", "The longest task first"], answer: 2, why: "Urgency and importance give a useful priority order." },
      { objective: "O1", q: "Urgent and important are:", options: ["Always the same", "Both words for \"easy\"", "Military terms only", "Not always the same thing"], answer: 3, why: "Urgent means now; important means it matters most to the goal." },
      { objective: "O1", q: "Who approves the final team plan?", options: ["You, the leader", "The AI", "The newest team member", "Nobody"], answer: 0, why: "You apply judgment AI does not have." },
      { objective: "O2", q: "BLUF stands for:", options: ["Briefing, lesson, update, follow-up", "Bottom line up front", "Basic leadership under fire", "Best last unit file"], answer: 1, why: "Put the main point first." },
      { objective: "O2", q: "Military writing can sound blunt to civilians. A good fix is:", options: ["Make it longer", "Add more acronyms", "Add a friendly line like \"Happy to discuss\"", "Write in all capitals"], answer: 2, why: "A friendly, professional tone helps civilian readers." },
      { objective: "O2", q: "Before sending an AI-drafted email, you should:", options: ["Send it unread", "Add military terms", "Make it longer", "Read it as the receiver and fix anything unclear"], answer: 3, why: "You own what you send." },
      { objective: "O3", q: "A meeting summary should include:", options: ["Decisions, action items with owner and date, and open questions", "Only who attended", "Only jokes", "Only the start time"], answer: 0, why: "This tells everyone who does what by when." },
      { objective: "O6", q: "Before pasting meeting notes into a public AI, you should:", options: ["Add everyone's phone numbers", "Replace names with roles and remove private details", "Add the company's secrets", "Do nothing"], answer: 1, why: "Protect people's information first." },
      { objective: "O6", q: "Using an AI meeting summary tool at work is OK when:", options: ["Nobody knows about it", "You use a personal account with company data", "Your employer allows it and people are told", "Always, no matter the rules"], answer: 2, why: "Follow your employer's rules and be open about recording." },
      { objective: "O3", q: "An action item with no owner should be:", options: ["Ignored", "Given to everyone", "Deleted", "Assigned one owner and a due date"], answer: 3, why: "Shared ownership often means no one does it." },
      { objective: "O4", q: "Good feedback is about:", options: ["Behavior you saw", "The person's personality", "Rumors", "Your mood"], answer: 0, why: "Behavior is specific and fair." },
      { objective: "O4", q: "In SBI feedback, \"impact\" is:", options: ["The person's rank", "The effect on the team or the work", "The punishment", "The date"], answer: 1, why: "Impact explains why the behavior matters." },
      { objective: "O4", q: "Who should deliver feedback that AI helped prepare?", options: ["The AI by email", "A coworker", "You, in person or by call", "No one"], answer: 2, why: "Trust comes from you, not the tool." },
      { objective: "O5", q: "When delegating, after handing off the task you should:", options: ["Do it yourself anyway", "Hover over every step", "Never check again", "Check in at the agreed points"], answer: 3, why: "Agreed check-ins balance trust and accountability." },
      { objective: "O5", q: "A good delegation handoff includes:", options: ["Purpose, standard, deadline, resources and check-ins", "Only the deadline", "Only \"do it\"", "Your password"], answer: 0, why: "Those parts let the person succeed." },
      { objective: "O5", q: "Asking the person to explain the task back helps you:", options: ["Waste time", "Confirm they understood", "Test their memory for fun", "Avoid giving intent"], answer: 1, why: "It catches misunderstandings early." },
      { objective: "O6", q: "Rule 1 for using AI as a leader is:", options: ["Use any free tool for everything", "Never use AI", "Follow your employer's AI policy", "Let the team decide alone"], answer: 2, why: "Policy says which tools and information are allowed." },
      { objective: "O6", q: "Which should never go into a public AI tool?", options: ["\"Plan my week\"", "\"Rewrite this email\"", "A list of task names", "A named employee's pay and health information"], answer: 3, why: "That is private, confidential information." },
      { objective: "O6", q: "If AI helped write an important report, who is responsible for it?", options: ["You", "The AI company", "The reader", "No one"], answer: 0, why: "You own the result, so check every word." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
      8,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Weekly plan",
        objective: "O1",
        notYet: "Tasks are not in priority order, or some have no owner.",
        meets: "A one-week plan with priorities and an owner role for each task.",
        exceeds: "The learner changed something the AI got wrong and can say why."
      },
      {
        name: "BLUF update email",
        objective: "O2",
        notYet: "The main point is buried, or the tone is blunt.",
        meets: "The first sentence states the main point, with short bullets and a next step in a professional tone.",
        exceeds: "The email was read as the receiver would and tightened to the fewest words."
      },
      {
        name: "Action items",
        objective: "O3",
        notYet: "Some action items have no owner or no due date.",
        meets: "Decisions, action items with one owner and a due date each, and open questions.",
        exceeds: "Due dates fit the weekly plan, and open questions have a person to answer them."
      },
      {
        name: "Privacy and policy",
        objective: "O6",
        notYet: "A name or private detail appears in a prompt or the work.",
        meets: "Roles instead of names, and no private information anywhere.",
        exceeds: "The learner names the employer's AI policy or the question they would ask their manager about it."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using a weekly plan, BLUF emails or action-item tables at work within 30 days (follow-up survey)",
      "Learners who move into or keep a civilian lead, supervisor or manager role within 6 months",
      "Learners who start another Koach Learn veterans or leadership course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer or smartphone with internet",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini, or the tool your employer approves",
      "Practice task lists and meeting notes that use roles, not names",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Provide practice team scenarios with roles like \"Shift lead A\" so no one uses real coworkers' names or details.",
      "Ask learners to check their employer's AI policy before using AI with real work information.",
      "Pair learners to read each other's BLUF emails as the receiver and give one suggestion.",
      "Practice SBI feedback out loud in pairs after the AI draft, so learners make it their own.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
