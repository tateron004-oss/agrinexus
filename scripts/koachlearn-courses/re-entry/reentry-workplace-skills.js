"use strict";

// Koach Learn course: Re-Entry -> "Workplace Skills and Productivity". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "reentry-workplace-skills",
  category: "Re-Entry",
  name: "Workplace Skills and Productivity",
  skills: "Professional email and text, Talking with a supervisor, Planning and prioritizing a workday, Using shared documents and schedules, Handling feedback and problems, Following workplace AI rules",
  outcome: "write a clear, professional message to a supervisor with AI help, plan and prioritize a workday with a to-do list, and follow your workplace's rules for using AI and keeping information private.",
  about: [
    "This course is for people coming home who are starting a job, or getting ready for one. Workplaces now run on email, texts, shared schedules and computer documents, and many use AI. These skills help you keep the job and grow in it.",
    "You will practice professional messages, talking with a supervisor, planning your shift, using shared documents and schedules, handling feedback, and using AI at work the right way.",
    "Each lesson takes about five minutes. The examples come from real entry-level jobs: warehouse, kitchen, retail, cleaning, construction and office work. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Use an AI assistant to write a short, professional email or text to a supervisor asking to switch one shift, with a reason and an offer to help find coverage. Make it sound like you and check it has no private details. Then make a prioritized to-do list for a real or practice workday.",
  chapters: [
    {
      name: "Chapter 1: Communicating at work",
      lessons: [
        {
          title: "Writing professional messages",
          minutes: 5,
          goal: "Write a short, clear, professional email or text to someone at work.",
          text: [
            "At work, how you write matters. A professional message is short, polite and clear: it says what you need in the first line, gives a reason if needed, and ends with a thank-you.",
            "A simple pattern: greeting, the point, one or two details, what you are asking for, thanks and your name. For example: \"Hi Maria, I would like to switch my Saturday shift to Sunday this week because of a family event. I can help find someone to cover. Thank you, Andre.\"",
            "An AI assistant can help: \"Make this message to my supervisor more professional but still friendly.\" Then read it, make it sound like you, and check spelling of names. Avoid texting slang, all capital letters and too many emojis at work."
          ],
          steps: ["Start with a greeting and the person's name.", "Say your point in the first line.", "Add one or two details.", "Say what you are asking for.", "End with thanks and your name."],
          words: [["Professional", "the respectful, clear way people communicate at work."], ["Supervisor", "the person who directs your work and schedule."]],
          slides: [
            { title: "Short, polite, clear", bullets: ["Point first", "A reason if needed", "End with thanks"] },
            { title: "A simple pattern", bullets: ["Greeting, point, details", "What you are asking for", "Thanks and your name"] },
            { title: "AI can polish it", bullets: ["\"Make this more professional but friendly.\"", "Make it sound like you", "No slang, all caps or emoji overload"] }
          ],
          tryIt: "Write a rough message to a supervisor asking a question about your schedule. Ask an AI assistant to make it more professional but friendly, then make one change so it sounds like you.",
          youCanNow: "write a short, professional message to someone at work."
        },
        {
          title: "Talking with your supervisor",
          minutes: 5,
          goal: "Prepare for and hold a short, respectful conversation with a supervisor.",
          text: [
            "Some things are better said in person: asking for help, explaining a mistake, or asking about more hours. A little preparation makes it easier.",
            "Before you talk, write down the point in one sentence and what you hope will happen. Pick a calm moment and ask, \"Do you have two minutes?\" Speak clearly, listen fully, and repeat back what you heard: \"So you want me to finish the returns before restocking. Got it.\"",
            "You can practice with AI: \"Pretend you are my supervisor at a warehouse. I want to ask for more hours. Ask me questions, then give me feedback on how I did.\""
          ],
          steps: ["Write your point in one sentence.", "Pick a calm moment and ask if they have a minute.", "Speak clearly and listen fully.", "Repeat back what you heard.", "Practice first with AI if you like."],
          words: [["Repeat back", "saying in your own words what someone told you, to make sure you understood."], ["Role-play", "practicing a conversation by acting it out."]],
          slides: [
            { title: "Some things are said in person", bullets: ["Asking for help", "Explaining a mistake", "Asking for more hours"] },
            { title: "How to do it", bullets: ["Point in one sentence", "Pick a calm moment", "Listen, then repeat back"] },
            { title: "Practice with AI", bullets: ["\"Pretend you are my supervisor.\"", "Ask for feedback on how you did"] }
          ],
          tryIt: "Ask an AI assistant to role-play your supervisor while you ask for more hours. Do the conversation, then ask it for two tips to do better.",
          youCanNow: "prepare for and hold a respectful conversation with a supervisor."
        },
        {
          title: "Handling feedback and problems",
          minutes: 5,
          goal: "Respond to feedback calmly and report a problem the right way.",
          text: [
            "Feedback is information about how you are doing. Even when it is hard to hear, it is how people get better and get trusted with more. Listen, say thank you, ask a question if something is unclear, and show you are working on it.",
            "Problems happen: you will be late, you made a mistake, a machine broke, a coworker is causing trouble. Report it early, to the right person, with facts: what happened, when, and what you did. \"I dropped a case of glass jars in aisle 4 at 2 pm. I blocked the area and got the broom. Who should I tell for the inventory?\"",
            "If you feel angry, take a breath before answering. You can say, \"Let me think about that and get back to you.\" Use AI to help plan a calm reply, not to send one in anger."
          ],
          steps: ["Listen without arguing.", "Say thank you and ask questions if needed.", "Report problems early, with facts.", "Take a breath if you feel angry.", "Follow up on what you said you would do."],
          words: [["Feedback", "information about how you are doing, to help you improve."], ["Report", "telling the right person what happened."]],
          slides: [
            { title: "Feedback helps you grow", bullets: ["Listen, say thank you", "Ask a question if unclear", "Show you are working on it"] },
            { title: "Report problems early", bullets: ["To the right person", "What, when, what you did"] },
            { title: "Stay calm", bullets: ["Take a breath", "\"Let me think and get back to you.\"", "Use AI to plan a calm reply"] }
          ],
          tryIt: "Ask an AI assistant: \"My supervisor said I need to work faster on the line. Help me plan a calm, positive reply and two ways to improve.\" Write down the reply you would use.",
          youCanNow: "respond to feedback calmly and report a problem clearly."
        }
      ],
      check: {
        title: "Knowledge Check 1: Communicating at work",
        questions: [
          { q: "Where should the main point go in a work message?", options: ["Nowhere", "At the very end", "In the first line", "In a separate message"], answer: 2, why: "Busy supervisors read the first line first." },
          { q: "Which is most professional?", options: ["\"Hi Maria, can I switch Saturday to Sunday this week? I can help find coverage. Thanks, Andre\"", "\"yo cant come sat\"", "\"I'M NOT COMING SATURDAY\"", "\"??\""], answer: 0, why: "It is polite, clear and offers help." },
          { q: "What does \"repeat back\" mean?", options: ["Walking away", "Saying it louder", "Arguing", "Saying in your own words what you heard"], answer: 3, why: "It shows you understood." },
          { q: "Your supervisor gives you hard feedback. A good first response is:", options: ["Argue right away", "Listen and say thank you", "Quit", "Ignore it"], answer: 1, why: "Listening shows you can grow." },
          { q: "You broke something at work. What do you do?", options: ["Hide it", "Report it early to the right person with the facts", "Blame a coworker", "Wait until someone notices"], answer: 1, why: "Early, honest reports build trust." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting work done",
      lessons: [
        {
          title: "Planning and prioritizing your workday",
          minutes: 5,
          goal: "Make a to-do list and put the most important tasks first.",
          text: [
            "A to-do list keeps you from forgetting tasks and helps you do the most important ones first. That is called prioritizing.",
            "Write every task. Then mark each: Must do today (deadlines, safety, what your supervisor asked for), Should do, and Could do if there is time. Start with the must-do tasks. If you are unsure what matters most, ask your supervisor; that is a smart question, not a weakness.",
            "AI can help sort a list: \"Here are my tasks for my shift at a grocery store. Put them in order of importance and explain why.\" Check its order against what your supervisor said."
          ],
          steps: ["Write every task.", "Mark each: must, should or could.", "Do the must-do tasks first.", "Ask your supervisor if unsure.", "Check off tasks as you finish."],
          words: [["Prioritize", "to decide which tasks are most important and do them first."], ["Deadline", "the time by which something must be done."]],
          slides: [
            { title: "A to-do list helps", bullets: ["Nothing forgotten", "Important things first"] },
            { title: "Must, should, could", bullets: ["Must: deadlines, safety, supervisor's asks", "Should: important, less urgent", "Could: if there is time"] },
            { title: "AI can sort it", bullets: ["\"Put my tasks in order of importance.\"", "Check it against your supervisor"] }
          ],
          tryIt: "Write six tasks from a real or imagined shift. Mark each must, should or could. Ask an AI assistant to put them in order, and compare with your own order.",
          youCanNow: "plan a workday and do the most important tasks first."
        },
        {
          title: "Shared schedules and documents",
          minutes: 6,
          goal: "Open a shared schedule or document, find your part, and add to it.",
          text: [
            "Many jobs share schedules and documents online. Your shifts may be in a scheduling app your employer picks; checklists and forms may be in Google Docs, Google Sheets, Microsoft Word or Excel.",
            "When someone shares a document, you get a link by email or text. Tap it, sign in if asked, and find your part. You can type into the document, and others see the changes. A comment lets you ask a question without changing the text: select the words and choose Comment.",
            "Check your schedule app daily, and if a shift changes, confirm with your supervisor. Never change something in a shared document that is not yours to change; ask first."
          ],
          steps: ["Tap the shared link from email or text.", "Sign in if asked.", "Find your part of the document or schedule.", "Type your update, or add a comment to ask a question.", "Check your schedule daily and confirm changes."],
          words: [["Shared document", "a file online that several people can open and edit."], ["Comment", "a note added beside the text, used to ask or answer questions."]],
          slides: [
            { title: "Work is shared online", bullets: ["Schedules in an app", "Docs and Sheets, Word and Excel"] },
            { title: "Using a shared document", bullets: ["Tap the link, sign in", "Find your part", "Type, or add a comment"] },
            { title: "Good habits", bullets: ["Check your schedule daily", "Confirm changes with your supervisor", "Only change what is yours"] }
          ],
          tryIt: "Create a free Google Doc or Word document called \"My work week\". Type your shifts for a week, add one comment as a question, and practice sharing it by link with a family member or yourself.",
          youCanNow: "use shared schedules and documents and add to them properly."
        },
        {
          title: "Using AI at work the right way",
          minutes: 5,
          goal: "Follow your workplace's AI rules and keep company and customer information private.",
          text: [
            "Many workplaces use AI, and many have rules about it. Some allow certain tools; some do not allow AI at all for some tasks. Always ask your supervisor what is allowed before you use AI for work.",
            "Never put private work information into a public AI tool: customer names, addresses or payment details, coworkers' information, prices or plans that are not public, or passwords. That can break company rules and the law.",
            "Use AI for things like improving your own writing, explaining a word, or practicing a conversation. Check what it says, and be honest if you used it for something you hand in."
          ],
          steps: ["Ask your supervisor what AI use is allowed.", "Never put customer, coworker or company private information into AI.", "Use AI for your own writing and learning.", "Check its answers.", "Be honest about using it."],
          words: [["Confidential", "private information that must not be shared outside the company."], ["Policy", "a written rule at a workplace."]],
          slides: [
            { title: "Ask first", bullets: ["Workplaces have AI rules", "Ask your supervisor what is allowed"] },
            { title: "Never put into AI", bullets: ["Customer names or payment details", "Coworkers' information", "Company plans, prices or passwords"] },
            { title: "Good uses", bullets: ["Polish your own writing", "Explain a word", "Practice a conversation"] }
          ],
          tryIt: "Final task: ask an AI assistant to help write a short, professional message to a supervisor asking to switch one shift, with a reason and an offer to help find coverage. Make it sound like you and check it has no private details. Then make a prioritized to-do list for a workday.",
          youCanNow: "communicate professionally, plan your work, use shared tools, and use AI at work the right way."
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting work done",
        questions: [
          { q: "What does \"prioritize\" mean?", options: ["Do tasks in random order", "Do the easiest tasks only", "Skip tasks", "Do the most important tasks first"], answer: 3, why: "Prioritizing puts important tasks first." },
          { q: "Which task is a \"must do today\"?", options: ["What your supervisor asked for with a deadline today", "Something you could do next month", "Organizing your locker for fun", "Nothing"], answer: 0, why: "Deadlines and supervisor requests come first." },
          { q: "You want to ask a question about a line in a shared document. You:", options: ["Rewrite it without asking", "Delete the line", "Add a comment", "Ignore it"], answer: 2, why: "Comments ask without changing the text." },
          { q: "Can you paste a customer's name and card number into a public AI tool?", options: ["Only if the AI asks", "Yes, to save time", "Only on weekends", "No, never"], answer: 3, why: "Customer information is confidential." },
          { q: "Before using AI for work tasks, you should:", options: ["Hide it", "Assume it is fine", "Ask your supervisor what is allowed", "Use any tool you like"], answer: 2, why: "Workplaces have their own AI rules." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Workplace Skills and Productivity",
    questions: [
      { q: "A professional message is:", options: ["Long and full of slang", "Short, polite and clear", "All capital letters", "Mostly emojis"], answer: 1, why: "Clear, respectful messages work best." },
      { q: "A good work message ends with:", options: ["Thanks and your name", "Nothing", "A joke", "Your Social Security number"], answer: 0, why: "Thanks and a name are polite and clear." },
      { q: "AI can help a work message by:", options: ["Making it more professional while you keep your voice", "Sending it without you reading", "Adding private details", "Making it longer"], answer: 0, why: "AI polishes; you check and personalize." },
      { q: "A supervisor is:", options: ["A coworker on your level", "The person who directs your work", "A customer", "A delivery driver"], answer: 1, why: "Supervisors manage work and schedules." },
      { q: "Before talking to a supervisor, write:", options: ["Nothing", "A long speech", "Your point in one sentence", "Complaints about coworkers"], answer: 2, why: "One clear sentence keeps you focused." },
      { q: "A good time to talk to a supervisor is:", options: ["Never", "During a rush", "While they are with a customer", "A calm moment, after asking if they have a minute"], answer: 3, why: "Calm moments get better results." },
      { q: "Role-play with AI helps you:", options: ["Get a raise automatically", "Avoid all conversations", "Practice a conversation before it happens", "Skip work"], answer: 2, why: "Practice builds confidence." },
      { q: "Feedback is:", options: ["Information about how you are doing", "A punishment", "A paycheck", "A schedule"], answer: 0, why: "Feedback helps you improve." },
      { q: "When reporting a problem, include:", options: ["Rumors", "Who to blame", "Nothing", "What happened, when, and what you did"], answer: 3, why: "Facts help solve the problem." },
      { q: "If you feel angry at work, a good response is:", options: ["Yelling", "\"Let me think about that and get back to you.\"", "Walking out", "Sending an angry text"], answer: 1, why: "Taking time keeps things calm." },
      { q: "A deadline is:", options: ["A break", "The time something must be done by", "A day off", "A paycheck date"], answer: 1, why: "Deadlines set when work is due." },
      { q: "In must, should, could, you start with:", options: ["Whatever is fun", "Could", "Should", "Must"], answer: 3, why: "Must-do tasks come first." },
      { q: "If you are unsure what is most important, you:", options: ["Ask your supervisor", "Guess and hope", "Do nothing", "Ask a customer"], answer: 0, why: "Asking is smart, not weak." },
      { q: "A shared document is:", options: ["A password", "A paper in your locker", "A file online that several people can edit", "A private diary"], answer: 2, why: "Shared documents are edited together." },
      { q: "When a document is shared with you, you usually get:", options: ["Nothing", "A letter in the mail", "A phone call only", "A link by email or text"], answer: 3, why: "Links open shared files." },
      { q: "Should you change parts of a shared document that are not yours?", options: ["Only at night", "Yes, anytime", "No; ask first", "Only if bored"], answer: 2, why: "Respect others' work." },
      { q: "How often should you check your schedule app?", options: ["Once a year", "Daily", "Never", "Only when fired"], answer: 1, why: "Shifts can change." },
      { q: "\"Confidential\" information is:", options: ["Private and must not be shared outside the company", "Public news", "The weather", "Your favorite song"], answer: 0, why: "It stays inside the company." },
      { q: "A good use of AI at work, if allowed, is:", options: ["Improving your own writing", "Pasting customer payment details", "Sharing coworkers' addresses", "Posting company plans"], answer: 0, why: "Your own writing has no private data." },
      { q: "A workplace \"policy\" is:", options: ["A type of insurance only", "A written rule at work", "A coworker", "A lunch break"], answer: 1, why: "Policies set workplace rules, including about AI." }
    ]
  }
};
