"use strict";

// Koach Learn course: Athletes -> "AI Coaching Assistants" (bonus). Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-coaching-assistants",
  category: "Athletes",
  name: "AI Coaching Assistants",
  skills: "Setting up an AI assistant with coaching instructions, Planning practices with AI, Writing parent and player messages, Creating drill cards and quizzes, Keeping athlete data private and decisions human",
  outcome: "set up an AI assistant as a coaching helper with your own standing instructions, then use it to plan a 90-minute practice, write a clear parent message, and make a drill card and a five-question playbook quiz, all checked by you and free of private athlete data.",
  about: [
    "This course is for head coaches, assistant coaches, club directors and athletes who help coach younger players. Coaches spend hours on planning and paperwork; an AI assistant can take some of that load.",
    "You will set up a free AI assistant with standing instructions about your team, then use it to plan practices, write messages, and make teaching materials. You will also set clear rules: what stays private and which decisions stay human.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course. Follow your school's, club's or league's rules on technology, communication with minors and student data."
  ],
  finalTask: "Write your coaching assistant's standing instructions (team level, style, safety rules, what not to include), then use it to produce a 90-minute practice plan, a parent message about next week's schedule, a drill card for one drill, and a five-question playbook quiz. Check and edit every piece, and confirm that no private athlete information was used.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Head coaches, assistant coaches, club directors and athletes who help coach younger players, often volunteers or part-time coaches with little planning time.",
    startingPoint: "Run practices and send team messages already. Some have tried an AI assistant, but few give it standing instructions or have written rules for privacy and safety.",
    gap: "Planning and paperwork take hours, and careless AI use can leak private athlete data, produce unsafe drills or replace decisions a coach must make. Coaches need to use AI as a checked helper with clear guardrails so they save time while keeping athletes safe and treated fairly.",
    constraints: [
      "Plain words; no technical background needed",
      "Devices: a phone or computer with a free AI assistant",
      "Time: about five minutes per lesson around a busy coaching week",
      "School, club and league rules on technology, messaging minors and student data come first",
      "No player names, health details or other private athlete data in any prompt"
    ],
    prerequisites: "None. Coaches new to AI assistants can take an introductory AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of weekly coaching tasks", action: "list which coaching tasks to give an AI assistant to draft and which decisions to keep for yourself", standard: "keeping playing time, selection and safety decisions with the coach" },
    { id: "O2", condition: "For your own team", action: "write standing instructions with the team level, practice length, style and safety rules", standard: "including a rule never to use player names or health details" },
    { id: "O3", condition: "Using your standing instructions", action: "draft a 90-minute practice plan with AI and adjust it", standard: "so times add up, drills fit the age group and equipment, and at least two changes are made" },
    { id: "O4", condition: "Given a schedule change or team news", action: "write a clear, kind parent or player message with AI and send it through an approved channel", standard: "with every date checked and nothing about one player in a group message" },
    { id: "O5", condition: "Given one drill and one play", action: "create a drill card and a five-question playbook quiz with AI", standard: "with every step and answer checked against your real drill and play" },
    { id: "O6", condition: "Before using AI for any coaching task", action: "write and follow guardrails for privacy, safety and fairness", standard: "sending medical and heat questions to trained staff and governing-body guidance" }
  ],
  chapters: [
    {
      name: "Chapter 1: Setting up your coaching assistant",
      lessons: [
        {
          objectives: ["O1"],
          title: "What an AI coaching assistant can do",
          minutes: 4,
          goal: "List coaching tasks to give to AI and decisions to keep for yourself.",
          text: [
            "An AI coaching assistant is a general AI assistant, like ChatGPT, Microsoft Copilot or Google Gemini, that you use for coaching work. It can draft practice plans, write emails, explain rules, create drill descriptions, quizzes and schedules, and summarize notes.",
            "It cannot see your players, know their health or feelings, or take responsibility. Playing time, discipline, injury and return-to-play decisions, safety calls and anything about a player's wellbeing stay with you and the right professionals.",
            "A good rule: AI drafts, the coach decides. Everything it writes is a first draft you check."
          ],
          words: [["AI coaching assistant", "a general AI assistant used to help with coaching tasks."], ["Return to play", "the decision on when an injured athlete can safely play again; made by medical professionals."]],
          slides: [
            { title: "AI can draft", bullets: ["Practice plans and schedules", "Emails and messages", "Drill descriptions and quizzes", "Summaries of your notes"] },
            { title: "Coach keeps", bullets: ["Playing time and discipline", "Safety calls", "Wellbeing; injuries go to medical staff"] },
            { title: "The rule", bullets: ["AI drafts", "The coach decides"] }
          ],
          tryIt: "Write two lists: five weekly coaching tasks you could give AI to draft, and five decisions you will always keep.",
          youCanNow: "decide which coaching tasks AI can help with and which decisions stay human.",
          quickCheck: [
            { objective: "O1", q: "Which coaching task can AI draft for you?", options: ["A weekly practice schedule", "Who starts on Saturday", "Whether an injured player can return", "How a player feels today"], answer: 0, why: "AI can draft plans; selection, injuries and feelings need the coach and trained staff." },
            { objective: "O1", q: "AI suggests benching a player based on your notes. What do you do?", options: ["Follow it exactly", "Make the decision yourself from what you have seen", "Let the players vote", "Ask AI again until it agrees"], answer: 1, why: "AI drafts, the coach decides, especially about playing time." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Writing standing instructions",
          minutes: 5,
          goal: "Write standing instructions that tell the AI about your team and rules.",
          text: [
            "Standing instructions are a paragraph you paste at the start of a chat (or save in the assistant's custom instructions or project feature, if it has one) so it always knows your context.",
            "Include: sport, level and age group; team size; practice length and facilities; your coaching style and values; safety rules (age-appropriate drills, water breaks, no punishment conditioning); and what it must never include (player names, health details, grades).",
            "Example: \"I coach a U12 girls' soccer team of 16 players. Practices are 90 minutes on half a field, Tuesdays and Thursdays. I value effort, fun and teamwork. Plans must include warm-up, water breaks every 20 minutes and age-appropriate drills. Never ask for or use player names or health details.\""
          ],
          steps: ["Write your sport, level, age group and team size.", "Add practice length and facilities.", "Add your values and coaching style.", "Add safety rules.", "Add what it must never include.", "Save it where you can paste it each time."],
          words: [["Standing instructions", "context you give an AI at the start so every answer fits your situation."], ["Age-appropriate", "suitable for the age and development of the players."]],
          slides: [
            { title: "Standing instructions", bullets: ["Paste at the start of each chat", "Or save in the assistant's settings, if offered"] },
            { title: "Include", bullets: ["Sport, level, age, team size", "Practice length and space", "Values and safety rules"] },
            { title: "Never include", bullets: ["Player names", "Health details", "Grades or family info"] }
          ],
          tryIt: "Write your standing instructions in one paragraph and save them in a note. Paste them into an AI assistant and ask: \"Summarize what you know about my team.\" Fix anything it got wrong.",
          youCanNow: "write standing instructions that make AI answers fit your team.",
          quickCheck: [
            { objective: "O2", q: "What are standing instructions?", options: ["A list of player phone numbers", "The league's rulebook", "Context about your team and rules that you give AI at the start", "A practice drill"], answer: 2, why: "Standing instructions make every AI answer fit your team." },
            { objective: "O2", q: "AI's summary of your standing instructions says your team is under-16, but it is under-12. What do you do?", options: ["Ignore it", "Delete the AI app", "Use the answers anyway", "Fix the instructions so it has the right age group"], answer: 3, why: "Wrong context gives wrong plans, so you correct it first." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Planning a practice with AI",
          minutes: 6,
          goal: "Use AI to draft a 90-minute practice plan and adjust it.",
          text: [
            "With your standing instructions pasted, ask: \"Plan a 90-minute practice focused on [skill]. Include warm-up, three progressive drills, a small-sided game, cool-down and water breaks. Give times, setup, coaching points and how to make each drill easier or harder.\"",
            "Check it like a coach: Are the drills safe and age-appropriate? Do the times add up? Do you have the space and equipment? Is the work-to-rest balance right? Are there too many lines and too much standing around?",
            "Ask follow-ups: \"We only have 10 balls.\" \"Two players are new.\" \"Swap drill 2 for something with more touches.\" Keep plans you like in a folder to reuse and improve."
          ],
          steps: ["Paste your standing instructions.", "Ask for a 90-minute plan with times, setup and coaching points.", "Check safety, timing, space and equipment.", "Ask follow-ups to fix problems.", "Save the final plan."],
          words: [["Progression", "drills that build from simple to harder."], ["Small-sided game", "a game with fewer players and a smaller space so everyone gets more touches."]],
          slides: [
            { title: "Ask for", bullets: ["Warm-up, 3 progressive drills", "Small-sided game, cool-down", "Times, setup, coaching points"] },
            { title: "Check like a coach", bullets: ["Safe and age-appropriate?", "Times add up? Space and gear?", "Little standing around?"] },
            { title: "Adjust", bullets: ["\"We only have 10 balls.\"", "\"Two players are new.\"", "Save plans you like"] }
          ],
          tryIt: "Use your standing instructions to get a 90-minute practice plan for a real upcoming practice. Make at least two follow-up changes and save it.",
          youCanNow: "plan a safe, well-timed practice with AI help.",
          quickCheck: [
            { objective: "O3", q: "What is a progression in a practice plan?", options: ["Drills that build from simple to harder", "A list of game scores", "The order players arrive", "A water break"], answer: 0, why: "A progression builds skills step by step." },
            { objective: "O3", q: "AI's plan needs 20 cones and you have 8. What do you do?", options: ["Cancel practice", "Tell AI you have 8 cones and ask it to adjust", "Use the plan and hope", "Buy cones before practice"], answer: 1, why: "Give AI your real limits so the plan works on the field." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up your coaching assistant",
        questions: [
          { objective: "O1", q: "Which task is a good fit for an AI coaching assistant?", options: ["Deciding return to play after a concussion", "Disciplining a player", "Drafting a practice plan", "Judging a player's feelings"], answer: 2, why: "AI drafts; medical and personal decisions stay with people." },
          { objective: "O1", q: "What is the coaching rule for AI?", options: ["AI drafts, the coach decides", "AI decides everything", "Never use AI", "Players decide"], answer: 0, why: "Every AI output is a first draft." },
          { objective: "O2", q: "Which belongs in standing instructions?", options: ["Player names", "Player health details", "Players' grades", "Age group and practice length"], answer: 3, why: "Team context helps; private data stays out." },
          { objective: "O3", q: "The AI plan has a drill that is unsafe for 10-year-olds. You:", options: ["Use it anyway", "Replace it with an age-appropriate drill", "Make it harder", "Skip water breaks"], answer: 1, why: "Safety and age-appropriateness come first." },
          { objective: "O3", q: "A small-sided game is useful because:", options: ["It's longer", "Everyone gets more touches", "It needs more equipment", "Players stand in lines"], answer: 1, why: "Fewer players means more involvement." }
        ]
      }
    },
    {
      name: "Chapter 2: Communication, materials and guardrails",
      lessons: [
        {
          objectives: ["O4"],
          title: "Messages to parents and players",
          minutes: 5,
          goal: "Write a clear, kind parent or player message with AI and send it through approved channels.",
          text: [
            "Coaches write lots of messages: schedules, changes, reminders, expectations. Ask: \"Write a short, friendly message to parents about next week's practice changes: Tuesday moves to 5 pm, Thursday is canceled for the field repair. Include what to bring. Under 100 words.\"",
            "Check facts, dates and tone. Keep group messages about the team; never discuss one player's performance, health or behavior in a group message.",
            "Use your school's or club's approved communication method. Many organizations have rules for coaches messaging minors, for example including a parent or another coach. Hard conversations, like playing time or behavior, are better in person or by phone, not AI-written texts."
          ],
          steps: ["Ask AI for a short, friendly draft.", "Check facts, dates and tone.", "Keep group messages about the team.", "Send through approved channels.", "Handle hard conversations in person."],
          words: [["Approved channel", "the communication method your school or club allows for coaches."], ["Tone", "how a message feels: friendly, firm, warm."]],
          slides: [
            { title: "AI drafts messages", bullets: ["Schedules, changes, reminders", "Short and friendly"] },
            { title: "Check", bullets: ["Facts and dates", "Tone", "Team topics only in groups"] },
            { title: "Send right", bullets: ["Approved channels", "Follow rules for messaging minors", "Hard talks in person"] }
          ],
          tryIt: "Use AI to write a real or practice parent message about a schedule change. Check every date and send it (or save it) through your approved channel.",
          youCanNow: "write clear team messages with AI and send them the right way.",
          quickCheck: [
            { objective: "O4", q: "What should a team group message be about?", options: ["One player's behavior", "A player's injury", "The team, such as times and places", "Who is being benched"], answer: 2, why: "Group messages are for team news; one player's issues are private." },
            { objective: "O4", q: "AI writes a parent message that says practice is on Tuesday the 14th. What do you do before sending?", options: ["Send it at once", "Add more emojis", "Send it from your personal account to the players only", "Check the date on the calendar"], answer: 3, why: "AI can get dates wrong, so you check every date." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Drill cards and playbook quizzes",
          minutes: 5,
          goal: "Create a drill card and a five-question playbook quiz.",
          text: [
            "Drill cards help assistant coaches and players run drills the same way. Ask: \"Make a one-page drill card for [drill]: purpose, setup, steps, coaching points, common mistakes, and how to make it easier or harder.\" Add a simple diagram in a tool like Canva or by hand.",
            "Quizzes help players learn the playbook and rules. Ask: \"Write five multiple-choice questions about our out-of-bounds play: [describe it]. One correct answer each, with a short explanation.\" Check every answer against your real play.",
            "Use a quiz tool like Google Forms to share it, without collecting more personal information than needed."
          ],
          steps: ["Ask AI for a drill card with purpose, setup, steps and coaching points.", "Add a simple diagram.", "Describe a play and ask for five quiz questions.", "Check every answer against your real play.", "Share with a simple form, collecting minimal info."],
          words: [["Drill card", "a one-page guide that explains how to run a drill."], ["Playbook", "a team's set of plays and rules for how to run them."]],
          slides: [
            { title: "Drill card", bullets: ["Purpose, setup, steps", "Coaching points, common mistakes", "Easier and harder versions"] },
            { title: "Playbook quiz", bullets: ["Describe the play", "Five questions with explanations", "Check every answer"] },
            { title: "Share simply", bullets: ["Google Forms or similar", "Collect minimal personal info"] }
          ],
          tryIt: "Make one drill card and a five-question quiz on one of your plays with AI. Check both and fix anything wrong.",
          youCanNow: "create drill cards and playbook quizzes with AI help.",
          quickCheck: [
            { objective: "O5", q: "What does a drill card help with?", options: ["Running a drill the same way every time", "Choosing team captains", "Paying club fees", "Booking a bus"], answer: 0, why: "A drill card gives purpose, setup, steps and coaching points so everyone runs it the same way." },
            { objective: "O5", q: "One answer in AI's playbook quiz does not match your real play. What do you do?", options: ["Share it anyway", "Fix the answer before sharing", "Change your play to match", "Remove the quiz from the course"], answer: 1, why: "Every quiz answer must match how your team really runs the play." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Guardrails: privacy, safety and fairness",
          minutes: 5,
          goal: "Write your coaching AI guardrails and follow them.",
          text: [
            "Privacy: never paste player names with health information, injuries, grades, family situations, contact details or photos of minors into AI tools. Use positions or numbers. Check your organization's rules about which tools may be used with student or player data.",
            "Safety: AI may suggest outdated or unsafe drills, conditioning or heat practices. Check drills against your governing body's guidance and your athletic trainer, and never use AI for medical, concussion or return-to-play decisions; the CDC's free HEADS UP training is one place to learn concussion basics.",
            "Fairness and honesty: decisions about selection and playing time come from what you observe, explained to players in person. Be open with families that you use AI for planning, if your organization asks."
          ],
          steps: ["Write your privacy rule: no names with private info.", "Write your safety rule: check drills; no medical decisions.", "Write your fairness rule: decisions from observation, explained in person.", "Check your organization's technology rules.", "Share the guardrails with your staff."],
          words: [["Guardrail", "a rule that keeps you safe while using a tool."], ["Governing body", "the organization that sets rules for your sport or level."]],
          slides: [
            { title: "Privacy", bullets: ["No names with health, grades or family info", "Use positions or numbers", "Follow your organization's tool rules"] },
            { title: "Safety", bullets: ["Check drills and conditioning", "No medical or return-to-play decisions", "CDC HEADS UP for concussion basics"] },
            { title: "Fairness", bullets: ["Decisions from what you observe", "Explained in person"] }
          ],
          sources: [{ name: "CDC: HEADS UP concussion training", url: "https://www.cdc.gov/heads-up/index.html" }],
          tryIt: "Final task: write your guardrails and standing instructions, then produce a practice plan, a parent message, a drill card and a quiz with AI, checking each and confirming no private athlete data was used.",
          youCanNow: "use an AI coaching assistant with clear guardrails for privacy, safety and fairness.",
          quickCheck: [
            { objective: "O6", q: "What is a coaching AI guardrail?", options: ["A fence around the field", "A drill for defenders", "A rule that keeps you safe while using AI", "A type of chart"], answer: 2, why: "Guardrails set what you will and will not do with AI." },
            { objective: "O6", q: "You want AI's help with a player's concussion recovery. What do you do?", options: ["Paste in the medical notes", "Follow AI's return date", "Ask the player's teammates", "Leave it to medical professionals"], answer: 3, why: "Return-to-play decisions after a concussion belong to medical professionals." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Communication, materials and guardrails",
        questions: [
          { objective: "O4", q: "Where should one player's behavior be discussed?", options: ["In the team group chat", "On social media", "In an AI-written group text", "Privately, in person or by phone"], answer: 3, why: "Group messages stay about the team." },
          { objective: "O5", q: "A drill card includes:", options: ["Purpose, setup, steps and coaching points", "Player grades", "Player health notes", "Nothing"], answer: 0, why: "It helps everyone run the drill the same way." },
          { objective: "O5", q: "AI writes a playbook quiz. Before sharing you:", options: ["Share it unread", "Add trick answers", "Check every answer against your real play", "Let AI grade players"], answer: 2, why: "AI can get your play wrong." },
          { objective: "O6", q: "Which is safe to paste into AI?", options: ["\"Maria Lopez, ACL tear, on medication\"", "A player's home address", "A minor's photo and full name", "\"Our left back keeps losing her mark on corners\""], answer: 3, why: "Positions without names or health info protect privacy." },
          { objective: "O6", q: "Who makes return-to-play decisions after a concussion?", options: ["An AI assistant", "Medical professionals", "The team captain", "Parents in a group chat"], answer: 1, why: "Medical decisions belong to qualified professionals." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Coaching Assistants",
    questions: [
      { objective: "O1", q: "An AI coaching assistant is:", options: ["A robot on the bench", "A referee", "A general AI assistant used for coaching tasks", "A paid scout"], answer: 2, why: "Coaches use free assistants for coaching work." },
      { objective: "O1", q: "Which can AI NOT do?", options: ["See your players and know their feelings", "Draft a schedule", "Write a drill description", "Summarize notes"], answer: 0, why: "It only knows what you tell it." },
      { objective: "O1", q: "Who decides playing time?", options: ["The coach", "The AI", "A parent group chat", "The opponent"], answer: 0, why: "Playing time is a human decision." },
      { objective: "O2", q: "Standing instructions are:", options: ["A team stretch", "A rulebook", "Context you give AI at the start", "A trophy"], answer: 2, why: "They make answers fit your team." },
      { objective: "O2", q: "Which safety rule fits standing instructions?", options: ["No rest ever", "Water breaks every 20 minutes", "Punishment laps", "Skip warm-ups"], answer: 1, why: "Safety rules belong in the instructions." },
      { objective: "O2", q: "What should standing instructions say to never include?", options: ["Practice length", "Age group", "Field size", "Player names and health details"], answer: 3, why: "Private data stays out." },
      { objective: "O3", q: "A progression is:", options: ["A parade", "A playoff", "Drills that build from simple to harder", "A schedule change"], answer: 2, why: "Progressions build skill step by step." },
      { objective: "O3", q: "The AI plan's times add up to 120 minutes for a 90-minute practice. You:", options: ["Run 120 minutes anyway", "Skip the warm-up", "Ignore it", "Ask it to fix the timing"], answer: 3, why: "Check that times add up." },
      { objective: "O3", q: "You only have 10 balls. You:", options: ["Tell AI and ask it to adjust", "Cancel practice", "Buy 50 today", "Ignore the plan"], answer: 0, why: "Follow-ups fit the plan to your resources." },
      { objective: "O4", q: "A parent message about a schedule change should be:", options: ["Long and vague", "Short, friendly and checked for dates", "Sent without checking", "Sent from a personal account against club rules"], answer: 1, why: "Clear and accurate is best." },
      { objective: "O4", q: "Group messages should be about:", options: ["One player's mistakes", "A player's injury details", "The team", "Gossip"], answer: 2, why: "Individual issues stay private." },
      { objective: "O4", q: "Rules for messaging minors often require:", options: ["Including a parent or another coach", "Secret messages", "Late-night texting", "Personal social accounts"], answer: 0, why: "These rules protect athletes and coaches." },
      { objective: "O4", q: "Hard conversations about playing time are best:", options: ["In an AI-written text", "On social media", "In the group chat", "In person or by phone"], answer: 3, why: "Hard talks need a human touch." },
      { objective: "O5", q: "A drill card helps:", options: ["Hide the drill", "Assistants and players run drills the same way", "Replace practice", "Track grades"], answer: 1, why: "Consistency improves practice." },
      { objective: "O5", q: "A playbook quiz checks:", options: ["Players' health", "Whether players know the plays", "Players' grades", "Parents' schedules"], answer: 1, why: "Quizzes reinforce learning." },
      { objective: "O5", q: "When sharing a quiz with a form, collect:", options: ["Home addresses", "Passwords", "Medical history", "Only the information you need"], answer: 3, why: "Minimal data protects players." },
      { objective: "O6", q: "A guardrail is:", options: ["A rule that keeps you safe while using a tool", "A fence", "A drill", "A uniform"], answer: 0, why: "Guardrails prevent misuse." },
      { objective: "O6", q: "AI suggests intense conditioning in high heat. You:", options: ["Do it", "Make it longer", "Check with your athletic trainer and governing body guidance", "Skip water"], answer: 2, why: "AI may suggest unsafe practices." },
      { objective: "O6", q: "A governing body is:", options: ["A gym", "A sponsor", "A parent group", "The organization that sets rules for your sport or level"], answer: 3, why: "It sets the official rules." },
      { objective: "O1", q: "Selection decisions should come from:", options: ["AI guesses", "What the coach observes", "Social media", "Rumors"], answer: 1, why: "Fair decisions come from real observation." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Standing instructions",
        objective: "O2",
        notYet: "Missing the team level, practice length or safety rules.",
        meets: "Team level, length, style, safety rules and a no-private-data rule.",
        exceeds: "Also lists equipment and space so plans fit the real field."
      },
      {
        name: "Practice plan",
        objective: "O3",
        notYet: "Times do not add up to 90 minutes or a drill is unsafe for the age group.",
        meets: "A 90-minute plan with correct times and safe drills, changed at least twice.",
        exceeds: "Has a clear progression and water breaks, and notes why each change was made."
      },
      {
        name: "Parent message",
        objective: "O4",
        notYet: "Wrong dates, an unkind tone, or private player details.",
        meets: "Short, friendly, dates checked, sent or saved through an approved channel.",
        exceeds: "Also includes who to contact with questions, following rules for messaging minors."
      },
      {
        name: "Drill card and quiz",
        objective: "O5",
        notYet: "A step or quiz answer does not match the real drill or play.",
        meets: "Drill card with purpose, setup, steps and coaching points; five checked quiz questions.",
        exceeds: "Quiz collects no more information than needed and covers the play's key moments."
      },
      {
        name: "Guardrails and privacy",
        objective: "O6",
        notYet: "A prompt includes player names or health details, or AI made a coach's decision.",
        meets: "Written guardrails followed; no private athlete data used; decisions kept by the coach.",
        exceeds: "Guardrails also say where medical and heat questions go."
      }
    ]
  },
  evaluation: {
    results: [
      "Coaches who finish the course and pass the final task (rubric)",
      "Coaches who report time saved on weekly planning and messages (30-day follow-up survey)",
      "Clubs or schools that adopt written AI guardrails for their coaches",
      "Learners who start another Koach Learn athlete course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with a free AI assistant",
      "A note app or paper to save standing instructions and guardrails",
      "Your team's schedule, equipment list and one play or drill to work on",
      "About 60 minutes in total for lessons, practice tasks, checks and the quiz"
    ],
    facilitatorNotes: [
      "Run it as a coach clinic: write standing instructions together, then each coach drafts a plan for their own team.",
      "Share your club's or school's rules on messaging minors and student data before Lesson 4.",
      "Check that no one pastes player names, health details or photos of minors into an AI tool.",
      "Have an athletic trainer or safety lead review heat and conditioning guidance.",
      "Score the final task with the rubric, one Not yet row at a time."
    ]
  }
};
