"use strict";

// Koach Learn course: Workforce Development -> "Workplace Communication and Productivity". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "workforce-communication-productivity",
  category: "Workforce Development",
  name: "Workplace Communication and Productivity",
  skills: "Writing clear work messages, Giving a shift or task handoff, Asking for help and giving updates, Prioritizing a to-do list, Planning your week with time blocks, Using AI as a helper, not a replacement",
  outcome: "communicate clearly and get the right work done at your job: write a clear message with the main point first, give a complete handoff, send a short status update, sort a to-do list by importance and urgency, and plan a week with time blocks, using AI to help draft and organize.",
  about: [
    "This course is for working people and job seekers in any field: retail, warehouse, healthcare support, office, customer service, trades. Clear communication and good habits with time are among the skills employers value most, and they help in every job.",
    "You will practice writing messages people understand the first time, handing work over so nothing is dropped, keeping your manager informed, and deciding what to do first when everything feels urgent. An AI assistant helps you draft and organize; you supply the facts and the judgment.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. Follow your workplace's rules on which AI tools you can use and keep confidential information out."
  ],
  finalTask: "Complete a one-week communication and productivity kit: one clear work message using main point first, one shift or task handoff using the handoff checklist, one status update in the Done / Next / Blocked format, a to-do list sorted into the four urgent/important boxes, and a time-blocked plan for next week. Use AI to help draft at least two of them, and check every fact.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Working people and job seekers in any field: retail, warehouse, healthcare support, office, customer service and the trades.",
    startingPoint: "Send texts and emails and keep some kind of to-do list. Many write messages that bury the main point, give incomplete handoffs, and plan the week around whatever is urgent. Some have tried an AI assistant.",
    gap: "Clear communication and managing time are among the skills employers value most, and dropped handoffs and unclear messages cause mistakes. Learners need simple, repeatable formats for messages, handoffs and updates, a way to choose what matters, and a weekly plan, using AI to draft while keeping their own judgment in charge.",
    constraints: [
      "Reading level: plain words and short sentences",
      "Devices: a smartphone or computer; a phone calendar or paper planner",
      "Privacy and policy: no private customer or patient details in AI tools unless the workplace approves the system; workplace AI rules come first",
      "Shift workers have limited control over schedules, so plans work around fixed shifts",
      "Time: about 5-minute lessons that fit around a working day"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a message you need to send at work", action: "write the message with the main point first and a clear ask with a deadline", standard: "covering one topic, with every fact checked" },
    { id: "O2", condition: "At the end of a shift or task", action: "give a complete handoff using the five-section checklist", standard: "with open items and what to watch for, and no private details in unapproved tools" },
    { id: "O3", condition: "Each week, or when you are stuck", action: "write a Done / Next / Blocked status update and ask for help early", standard: "with what you tried, what you need and by when" },
    { id: "O4", condition: "Given at least ten tasks", action: "sort them into the four urgent and important boxes and choose your top three", standard: "asking your manager when you are unsure what comes first" },
    { id: "O5", condition: "For next week", action: "create a time-blocked plan with your shifts, important tasks, message blocks and buffer time", standard: "adjusted to your real life" },
    { id: "O6", condition: "When you use AI to help with your work", action: "choose which parts AI drafts and check every fact before sending", standard: "using only approved tools and keeping confidential data out" }
  ],
  chapters: [
    {
      name: "Chapter 1: Communicating clearly",
      lessons: [
        {
          objectives: ["O1"],
          title: "Main point first: clear work messages",
          minutes: 5,
          goal: "Write a work message with the main point first and a clear ask.",
          text: [
            "Busy people read the first line and skim the rest. Put the main point or the ask first, then the details, then what you need and by when. Example: \"Can you cover my Saturday 8-4 shift? I have a family emergency. Please reply by Thursday noon.\"",
            "Keep it short: one topic per message, short sentences, bullet points for lists. Use a clear subject line for email: \"Need cover: Sat 8-4 shift\".",
            "An AI assistant can turn rough notes into a clear message: \"Rewrite this so the main point is first, under 80 words, polite and direct.\" You check the facts, names and times."
          ],
          steps: ["Write the main point or ask in one sentence.", "Add only the details the reader needs.", "Say what you need and by when.", "Use a clear subject line.", "Ask AI to tighten it, then check facts."],
          words: [["Main point first", "putting the most important message or request at the start."], ["Subject line", "the short title of an email."]],
          slides: [
            { title: "Readers skim", bullets: ["Main point or ask first", "Then details", "Then what you need and by when"] },
            { title: "Keep it short", bullets: ["One topic per message", "Short sentences and bullets", "Clear subject: \"Need cover: Sat 8-4\""] },
            { title: "AI can tighten it", bullets: ["\"Main point first, under 80 words\"", "You check names, dates and times"] }
          ],
          tryIt: "Take a message you need to send (or a sample, like asking for a schedule change). Rewrite it main point first with a deadline, ask AI to tighten it, and check every fact.",
          youCanNow: "write a short work message with the main point and ask first.",
          quickCheck: [
            { objective: "O1", q: "Why put the main point first in a work message?", options: ["It makes the message longer", "It sounds more polite", "Busy people read the first line and skim the rest", "It is a legal rule"], answer: 2, why: "Readers who only see the first line still get what you need." },
            { objective: "O1", q: "You need Friday off. Which message do you send?", options: ["\"Can I have Friday off for a medical appointment? Please let me know by Wednesday.\"", "\"Hi, hope you are well, so this week has been busy and...\"", "\"Friday?\"", "A message with three different requests"], answer: 0, why: "It puts the ask first, gives a reason and a deadline, and covers one topic." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Handoffs that do not drop anything",
          minutes: 5,
          goal: "Give a complete shift or task handoff using a simple checklist.",
          text: [
            "Many problems at work happen at handoffs: end of shift, a coworker going on leave, a task passed to someone else. A short checklist keeps things from falling through.",
            "A good handoff covers: Status (where things stand), Open items (what is not finished), Watch for (risks or problems), Contacts (who to call), and Next steps (what the next person should do first).",
            "You can speak your notes into your phone or type them quickly and ask AI: \"Turn these notes into a handoff with sections Status, Open items, Watch for, Contacts, Next steps.\" Leave out private customer, patient or employee details unless you are using an approved work system."
          ],
          steps: ["Write or speak rough notes at the end of the shift or task.", "Organize into Status, Open items, Watch for, Contacts, Next steps.", "Check nothing is missing.", "Hand it over and answer questions."],
          words: [["Handoff", "passing work to another person, with the information they need."], ["Open item", "something not finished yet."]],
          slides: [
            { title: "Problems happen at handoffs", bullets: ["End of shift", "Leave or vacation", "A task passed to someone else"] },
            { title: "Handoff checklist", bullets: ["Status and open items", "Watch for (risks)", "Contacts and next steps"] },
            { title: "AI organizes your notes", bullets: ["Speak or type rough notes", "Ask for the five sections", "Keep private details out"] }
          ],
          tryIt: "Write a handoff for your current or last job (or a sample warehouse shift) using the five sections. Use AI to organize your rough notes and check nothing is missing.",
          youCanNow: "give a complete handoff so the next person knows what to do.",
          quickCheck: [
            { objective: "O2", q: "Why do handoffs matter?", options: ["They make shifts longer", "They are only for managers", "They replace training", "Many problems happen when work changes hands"], answer: 3, why: "Information gets lost when work changes hands, so a checklist keeps it complete." },
            { objective: "O2", q: "You are handing off a shift and a pallet is leaning badly. Where does it go?", options: ["Nowhere; the next person will see it", "Under \"Watch for\" in your handoff", "In a text to a friend", "Only in your head"], answer: 1, why: "Safety issues and things to watch go in the handoff so the next person acts on them." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Status updates and asking for help",
          minutes: 4,
          goal: "Send a short status update and ask for help early and clearly.",
          text: [
            "Managers like to hear progress before they have to ask. A three-line update works: Done (what you finished), Next (what you are doing next), Blocked (what is stopping you and what you need).",
            "Ask for help early, not at the deadline. Say what you tried, what you need, and by when: \"I tried resetting the scanner and checking the cable. It still won't connect. Can IT look at it before 2 pm?\"",
            "AI can help you find the words when a message feels awkward, like asking for more time or telling your manager about a mistake. Keep it honest and short."
          ],
          steps: ["Write Done, Next, Blocked.", "For any block, say what you tried and what you need.", "Send it before you are asked.", "Ask for help early with a clear deadline."],
          words: [["Status update", "a short report on progress."], ["Blocked", "unable to continue until something is fixed or someone helps."]],
          slides: [
            { title: "Three-line update", bullets: ["Done", "Next", "Blocked"] },
            { title: "Ask for help early", bullets: ["What you tried", "What you need", "By when"] },
            { title: "Hard messages", bullets: ["Asking for more time; reporting a mistake", "AI helps find the words", "Keep it honest and short"] }
          ],
          tryIt: "Write a Done / Next / Blocked update for this week (real or sample). Include one clear request for help with what you tried and a deadline.",
          youCanNow: "send clear status updates and ask for help early.",
          quickCheck: [
            { objective: "O3", q: "What does \"Blocked\" mean in a status update?", options: ["You cannot continue until something is fixed", "You finished the task", "You are on break", "You blocked a coworker's email"], answer: 0, why: "Blocked tells your manager what is stopping you so they can help." },
            { objective: "O3", q: "You have been stuck on a task for a day and it is due tomorrow. What do you do?", options: ["Keep trying alone and say nothing", "Wait until after the deadline", "Ask for help now, saying what you tried, what you need and by when", "Skip the task"], answer: 2, why: "Asking early with details gives others time to help before the deadline." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Communicating clearly",
        questions: [
          { objective: "O1", q: "Where does the main point go in a work message?", options: ["Last", "First", "Hidden in the middle", "Nowhere"], answer: 1, why: "Busy readers see the first line." },
          { objective: "O1", q: "Which is the clearest subject line?", options: ["\"Stuff\"", "\"Hi\"", "\"Question\"", "\"Need cover: Sat 8-4 shift\""], answer: 3, why: "It says the topic and the ask." },
          { objective: "O2", q: "Which belongs in a handoff?", options: ["Open items and what to watch for", "Your social media password", "Gossip", "Nothing"], answer: 0, why: "The next person needs status, risks and next steps." },
          { objective: "O3", q: "What are the three lines of a status update?", options: ["Yes, No, Maybe", "Hello, How are you, Bye", "Done, Next, Blocked", "Start, Stop, Pause"], answer: 2, why: "That format shows progress and needs." },
          { objective: "O3", q: "When should you ask for help?", options: ["Never", "Only after the deadline", "Early, with what you tried and a deadline", "Only by guessing"], answer: 2, why: "Early asks give time to fix problems." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting the right work done",
      lessons: [
        {
          objectives: ["O4"],
          title: "Sorting your to-do list: urgent vs important",
          minutes: 5,
          goal: "Sort tasks into four boxes and decide what to do first.",
          text: [
            "When everything feels urgent, sort it. Draw four boxes: Urgent and important (do now), Important not urgent (schedule it), Urgent not important (delegate or do quickly), Neither (drop or later). This is often called the Eisenhower matrix.",
            "Important tasks connect to your goals or your job's main duties: safety, customers, deadlines your manager set. Urgent tasks have a close deadline or someone waiting.",
            "You can paste your to-do list (without confidential details) into AI and ask it to suggest boxes. Then decide yourself: you know what your manager expects. When unsure, ask your manager which comes first."
          ],
          steps: ["List all your tasks.", "Ask: is it important? Is it urgent?", "Put each in one of the four boxes.", "Do box 1, schedule box 2, hand off or speed through box 3, drop box 4.", "When unsure, ask your manager."],
          words: [["Urgent", "needs attention soon, with a close deadline or someone waiting."], ["Important", "connected to your main duties or goals."], ["Eisenhower matrix", "a four-box way to sort tasks by urgent and important."]],
          slides: [
            { title: "Four boxes", bullets: ["Urgent + important: do now", "Important, not urgent: schedule", "Urgent, not important: delegate or quick", "Neither: drop or later"] },
            { title: "What makes it important", bullets: ["Safety and customers", "Main duties and manager deadlines"] },
            { title: "AI suggests, you decide", bullets: ["Paste your list without confidential details", "Check the boxes yourself", "Unsure? Ask your manager"] }
          ],
          tryIt: "List at least ten tasks for this week. Sort them into the four boxes (ask AI for a first try if you like), then pick your top three for tomorrow.",
          youCanNow: "sort a to-do list by urgent and important and choose what to do first.",
          quickCheck: [
            { objective: "O4", q: "What makes a task important?", options: ["Someone asked loudly", "It connects to your main duties, safety or goals", "It is the newest email", "It is the easiest"], answer: 1, why: "Important tasks connect to your main duties, safety and goals." },
            { objective: "O4", q: "A task is not urgent and not important. What do you do with it?", options: ["Do it first", "Schedule it for this morning", "Ask a coworker to do it right now", "Drop it or do it later"], answer: 3, why: "Box 4 tasks are dropped or done later so time goes to what matters." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Planning your week with time blocks",
          minutes: 5,
          goal: "Plan a week by blocking time for important work.",
          text: [
            "A to-do list says what; a calendar says when. Time blocking means putting tasks into set times on your calendar, such as \"Tuesday 9-10: finish inventory report\".",
            "Block your important-but-not-urgent tasks first, because they get pushed aside. Add short blocks for email and messages instead of checking all day. Leave some open time for surprises.",
            "Ask AI: \"Here are my shifts and my tasks with time estimates. Make a time-blocked plan for next week with buffer time.\" Then adjust it to your real life: commute, family, breaks."
          ],
          steps: ["Write your fixed times: shifts, meetings, family.", "Estimate how long each task takes.", "Block important tasks first.", "Add short message blocks and buffer time.", "Ask AI for a draft and adjust it."],
          words: [["Time blocking", "putting tasks into set times on your calendar."], ["Buffer time", "open time left for surprises and delays."]],
          slides: [
            { title: "List says what; calendar says when", bullets: ["\"Tuesday 9-10: finish inventory report\""] },
            { title: "How to block", bullets: ["Important-not-urgent tasks first", "Short blocks for email and messages", "Leave buffer time"] },
            { title: "AI drafts the week", bullets: ["Give shifts, tasks and estimates", "Adjust for commute, family and breaks"] }
          ],
          tryIt: "Make a time-blocked plan for next week with your shifts, three important tasks, two message blocks and buffer time. Use AI for a first draft if you like.",
          youCanNow: "plan a week with time blocks so important work gets done.",
          quickCheck: [
            { objective: "O5", q: "What is buffer time?", options: ["Time to check social media", "Extra time for meetings", "Open time in your plan for surprises and delays", "Overtime"], answer: 2, why: "Buffer time keeps a surprise from wrecking the whole plan." },
            { objective: "O5", q: "The AI's weekly plan puts a task during your Tuesday shift. What do you do?", options: ["Move it to a time that fits your real schedule", "Follow the AI's plan anyway", "Skip your shift", "Delete the plan"], answer: 0, why: "AI drafts the plan, but you adjust it to your real life." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Using AI as a helper, not a replacement",
          minutes: 5,
          goal: "Use AI for the right parts of your work and keep your judgment in charge.",
          text: [
            "AI helps most with first drafts, organizing notes, summarizing, and finding words for hard messages. It does not know your workplace, your coworkers or what your manager really meant, and it can be wrong.",
            "Good habits: give it your notes, not your thinking; ask for a short draft; check every fact; make it sound like you; follow your workplace AI rules; keep confidential and personal information out.",
            "Track one thing: time saved. If a tool saves you 20 minutes a day on messages, that is time for the people part of your job, which is where you stand out."
          ],
          steps: ["Use AI for drafts, organizing and summaries.", "Check facts and make it sound like you.", "Follow workplace AI rules.", "Note the time you save each week."],
          words: [["Judgment", "your ability to decide well using what you know."]],
          slides: [
            { title: "AI is good at", bullets: ["First drafts", "Organizing notes and summarizing", "Words for hard messages"] },
            { title: "Good habits", bullets: ["Check every fact", "Make it sound like you", "Follow rules; keep private data out"] },
            { title: "Time saved = people time", bullets: ["Track minutes saved", "Use them where you stand out"] }
          ],
          tryIt: "Final task: build your one-week kit: one main-point-first message, one handoff, one Done/Next/Blocked update, a four-box to-do list and a time-blocked week. Use AI to draft at least two and check every fact.",
          youCanNow: "communicate clearly and manage your time at work with AI as a helper.",
          quickCheck: [
            { objective: "O6", q: "Which part of your work is AI good at?", options: ["Deciding what matters most", "Comforting an upset customer", "Knowing your manager's real deadline", "First drafts and organizing notes"], answer: 3, why: "AI helps with drafts and organizing; judgment and people work stay with you." },
            { objective: "O6", q: "You want AI to clean up notes that include a patient's name. What do you do?", options: ["Paste them into any free AI", "Use only an approved tool, or remove the private details first", "Post the notes online", "Email them to a friend to fix"], answer: 1, why: "Workplace rules come first: approved tools only, and confidential data stays out." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting the right work done",
        questions: [
          { objective: "O4", q: "A task is important but not urgent. What do you do?", options: ["Schedule it", "Drop it", "Do it instantly every time", "Give it to a customer"], answer: 0, why: "Scheduling protects important work." },
          { objective: "O4", q: "Which task is urgent and important?", options: ["Changing your desktop picture", "Organizing old emails", "Reading a newsletter", "A safety hazard on the floor right now"], answer: 3, why: "Safety now is both urgent and important." },
          { objective: "O5", q: "What is time blocking?", options: ["Blocking coworkers", "Putting tasks into set times on your calendar", "Turning off your phone forever", "A sport"], answer: 1, why: "It schedules when you do tasks." },
          { objective: "O5", q: "Why leave buffer time?", options: ["For surprises and delays", "To nap", "Because AI says so", "It is not useful"], answer: 0, why: "Surprises always happen." },
          { objective: "O6", q: "AI's draft says your manager wants the report Friday, but she said Wednesday. What do you do?", options: ["Send both dates", "Trust the AI", "Fix it to Wednesday", "Ignore it"], answer: 2, why: "You check facts; AI does not know what was said." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Workplace Communication and Productivity",
    questions: [
      { objective: "O1", q: "Why put the main point first?", options: ["It is a law", "Busy people read the first line and skim the rest", "It makes it longer", "It hides the point"], answer: 1, why: "First lines get read." },
      { objective: "O1", q: "A good work message includes:", options: ["Gossip", "Every detail you know", "Your password", "What you need and by when"], answer: 3, why: "A clear ask with a deadline gets action." },
      { objective: "O1", q: "One message should cover:", options: ["Everything this month", "Ten topics", "No topic", "One topic"], answer: 3, why: "One topic keeps it clear." },
      { objective: "O2", q: "Which is a handoff section?", options: ["Favorite food", "Watch for", "Weekend plans", "Password list"], answer: 1, why: "Watch for lists risks." },
      { objective: "O2", q: "Handoffs matter because:", options: ["They are optional", "They are fun", "Many problems happen when work changes hands", "They replace training"], answer: 2, why: "Gaps at handoffs cause mistakes." },
      { objective: "O2", q: "Using AI to organize handoff notes, leave out:", options: ["Private customer or patient details, unless using an approved system", "Open items", "Next steps", "Contacts' roles"], answer: 0, why: "Private data stays protected." },
      { objective: "O3", q: "\"Blocked\" in a status update means:", options: ["You are on break", "You are done", "You cannot continue until something is fixed", "Your account is locked"], answer: 2, why: "It flags what you need." },
      { objective: "O3", q: "A good help request says:", options: ["What you tried, what you need, and by when", "Only \"Help!\"", "Nothing", "Whose fault it is"], answer: 0, why: "Clear requests get faster help." },
      { objective: "O3", q: "A status update is best sent:", options: ["Never", "Before your manager has to ask", "Only after problems", "Once a year"], answer: 1, why: "Proactive updates build trust." },
      { objective: "O4", q: "Box 4 (not urgent, not important) tasks should be:", options: ["Done every hour", "Done first", "Given to the CEO", "Dropped or done later"], answer: 3, why: "They add little value." },
      { objective: "O4", q: "Important tasks connect to:", options: ["Your main duties, safety and goals", "Your favorite shows", "Random emails", "Nothing"], answer: 0, why: "Importance means it matters to your role." },
      { objective: "O4", q: "If unsure which task comes first, you should:", options: ["Let AI decide alone", "Guess", "Do nothing", "Ask your manager"], answer: 3, why: "Your manager knows priorities." },
      { objective: "O5", q: "Which tasks should you block on your calendar first?", options: ["Social media", "Least important ones", "Important but not urgent ones", "None"], answer: 2, why: "They are the ones that get pushed aside." },
      { objective: "O5", q: "Instead of checking email all day, you can:", options: ["Never read email", "Use short message blocks", "Check every minute", "Forward everything"], answer: 1, why: "Blocks protect focus time." },
      { objective: "O5", q: "After AI drafts your weekly plan, you:", options: ["Ignore it", "Follow it exactly", "Delete your calendar", "Adjust it to your real life"], answer: 3, why: "You know your commute, family and breaks." },
      { objective: "O6", q: "AI is good at:", options: ["Knowing your coworkers", "Knowing what your manager meant", "First drafts and organizing notes", "Being always right"], answer: 2, why: "Drafting and organizing are strengths." },
      { objective: "O6", q: "Before sending an AI draft, always:", options: ["Check every fact", "Add more AI text", "Remove your name", "Send it unread"], answer: 0, why: "AI can be wrong." },
      { objective: "O6", q: "Time saved with AI is best used for:", options: ["Doing nothing", "The people part of your job", "More screen time", "Nothing"], answer: 1, why: "Human work is where you stand out." },
      { objective: "O6", q: "Which follows workplace AI rules?", options: ["Using any app", "Using only approved tools and keeping confidential data out", "Pasting customer data", "Sharing passwords"], answer: 1, why: "Rules protect you and your employer." },
      { objective: "O3", q: "The \"Next\" line in an update tells your manager:", options: ["What you are doing next", "Your lunch plans", "Your next vacation", "Nothing"], answer: 0, why: "It shows your plan." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      6,
      7,
      9,
      12,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Main-point-first message",
        objective: "O1",
        notYet: "The main point or ask is buried or missing.",
        meets: "The main point is first, with a clear ask and a deadline, on one topic.",
        exceeds: "Has a clear subject line, and the message is under 100 words."
      },
      {
        name: "Complete handoff",
        objective: "O2",
        notYet: "One or more of the five sections is missing.",
        meets: "All five sections, including open items and what to watch for.",
        exceeds: "Each open item says who owns it next."
      },
      {
        name: "Status update",
        objective: "O3",
        notYet: "Missing Done, Next or Blocked.",
        meets: "A Done / Next / Blocked update with one clear request for help.",
        exceeds: "The help request says what was tried and by when it is needed."
      },
      {
        name: "Four-box list and time blocks",
        objective: "O5",
        notYet: "Tasks are not sorted, or the week has no time blocks.",
        meets: "Ten tasks in the four boxes and a week with shifts, three important tasks, message blocks and buffer time.",
        exceeds: "Important but not urgent tasks are blocked first."
      },
      {
        name: "AI checked",
        objective: "O6",
        notYet: "AI drafts were sent without checking, or private details were used.",
        meets: "AI helped draft at least two items, and every fact was checked.",
        exceeds: "The learner notes one fact they corrected."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report using main-point-first messages and status updates at work 30 days later (follow-up survey)",
      "Supervisors who report fewer dropped handoffs or missed deadlines",
      "Learners who start another Koach Learn workforce course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone or computer",
      "A free AI assistant: ChatGPT, Microsoft Copilot or Google Gemini, or the tool the workplace approves",
      "A phone calendar or a paper planner",
      "Sample messages, handoff notes and task lists with no private details",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Use examples from the learners' own fields (retail, warehouse, healthcare support, office) so formats feel real.",
      "Practice handoffs in pairs: one hands off, the other checks the five sections.",
      "Remind learners in healthcare and customer service that patient and customer details stay out of unapproved AI tools.",
      "Shift workers may not control their schedules; help them block the time they do control.",
      "Score the one-week kit with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
