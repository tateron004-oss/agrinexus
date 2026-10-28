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
  chapters: [
    {
      name: "Chapter 1: Setting up your coaching assistant",
      lessons: [
        {
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
          youCanNow: "decide which coaching tasks AI can help with and which decisions stay human."
        },
        {
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
          youCanNow: "write standing instructions that make AI answers fit your team."
        },
        {
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
          youCanNow: "plan a safe, well-timed practice with AI help."
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting up your coaching assistant",
        questions: [
          { q: "Which task is a good fit for an AI coaching assistant?", options: ["Deciding return to play after a concussion", "Disciplining a player", "Drafting a practice plan", "Judging a player's feelings"], answer: 2, why: "AI drafts; medical and personal decisions stay with people." },
          { q: "What is the coaching rule for AI?", options: ["AI drafts, the coach decides", "AI decides everything", "Never use AI", "Players decide"], answer: 0, why: "Every AI output is a first draft." },
          { q: "Which belongs in standing instructions?", options: ["Player names", "Player health details", "Players' grades", "Age group and practice length"], answer: 3, why: "Team context helps; private data stays out." },
          { q: "The AI plan has a drill that is unsafe for 10-year-olds. You:", options: ["Use it anyway", "Replace it with an age-appropriate drill", "Make it harder", "Skip water breaks"], answer: 1, why: "Safety and age-appropriateness come first." },
          { q: "A small-sided game is useful because:", options: ["It's longer", "Everyone gets more touches", "It needs more equipment", "Players stand in lines"], answer: 1, why: "Fewer players means more involvement." }
        ]
      }
    },
    {
      name: "Chapter 2: Communication, materials and guardrails",
      lessons: [
        {
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
          youCanNow: "write clear team messages with AI and send them the right way."
        },
        {
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
          youCanNow: "create drill cards and playbook quizzes with AI help."
        },
        {
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
          youCanNow: "use an AI coaching assistant with clear guardrails for privacy, safety and fairness."
        }
      ],
      check: {
        title: "Knowledge Check 2: Communication, materials and guardrails",
        questions: [
          { q: "Where should one player's behavior be discussed?", options: ["In the team group chat", "On social media", "In an AI-written group text", "Privately, in person or by phone"], answer: 3, why: "Group messages stay about the team." },
          { q: "A drill card includes:", options: ["Purpose, setup, steps and coaching points", "Player grades", "Player health notes", "Nothing"], answer: 0, why: "It helps everyone run the drill the same way." },
          { q: "AI writes a playbook quiz. Before sharing you:", options: ["Share it unread", "Add trick answers", "Check every answer against your real play", "Let AI grade players"], answer: 2, why: "AI can get your play wrong." },
          { q: "Which is safe to paste into AI?", options: ["\"Maria Lopez, ACL tear, on medication\"", "A player's home address", "A minor's photo and full name", "\"Our left back keeps losing her mark on corners\""], answer: 3, why: "Positions without names or health info protect privacy." },
          { q: "Who makes return-to-play decisions after a concussion?", options: ["An AI assistant", "Medical professionals", "The team captain", "Parents in a group chat"], answer: 1, why: "Medical decisions belong to qualified professionals." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI Coaching Assistants",
    questions: [
      { q: "An AI coaching assistant is:", options: ["A robot on the bench", "A referee", "A general AI assistant used for coaching tasks", "A paid scout"], answer: 2, why: "Coaches use free assistants for coaching work." },
      { q: "Which can AI NOT do?", options: ["See your players and know their feelings", "Draft a schedule", "Write a drill description", "Summarize notes"], answer: 0, why: "It only knows what you tell it." },
      { q: "Who decides playing time?", options: ["The coach", "The AI", "A parent group chat", "The opponent"], answer: 0, why: "Playing time is a human decision." },
      { q: "Standing instructions are:", options: ["A team stretch", "A rulebook", "Context you give AI at the start", "A trophy"], answer: 2, why: "They make answers fit your team." },
      { q: "Which safety rule fits standing instructions?", options: ["No rest ever", "Water breaks every 20 minutes", "Punishment laps", "Skip warm-ups"], answer: 1, why: "Safety rules belong in the instructions." },
      { q: "What should standing instructions say to never include?", options: ["Practice length", "Age group", "Field size", "Player names and health details"], answer: 3, why: "Private data stays out." },
      { q: "A progression is:", options: ["A parade", "A playoff", "Drills that build from simple to harder", "A schedule change"], answer: 2, why: "Progressions build skill step by step." },
      { q: "The AI plan's times add up to 120 minutes for a 90-minute practice. You:", options: ["Run 120 minutes anyway", "Skip the warm-up", "Ignore it", "Ask it to fix the timing"], answer: 3, why: "Check that times add up." },
      { q: "You only have 10 balls. You:", options: ["Tell AI and ask it to adjust", "Cancel practice", "Buy 50 today", "Ignore the plan"], answer: 0, why: "Follow-ups fit the plan to your resources." },
      { q: "A parent message about a schedule change should be:", options: ["Long and vague", "Short, friendly and checked for dates", "Sent without checking", "Sent from a personal account against club rules"], answer: 1, why: "Clear and accurate is best." },
      { q: "Group messages should be about:", options: ["One player's mistakes", "A player's injury details", "The team", "Gossip"], answer: 2, why: "Individual issues stay private." },
      { q: "Rules for messaging minors often require:", options: ["Including a parent or another coach", "Secret messages", "Late-night texting", "Personal social accounts"], answer: 0, why: "These rules protect athletes and coaches." },
      { q: "Hard conversations about playing time are best:", options: ["In an AI-written text", "On social media", "In the group chat", "In person or by phone"], answer: 3, why: "Hard talks need a human touch." },
      { q: "A drill card helps:", options: ["Hide the drill", "Assistants and players run drills the same way", "Replace practice", "Track grades"], answer: 1, why: "Consistency improves practice." },
      { q: "A playbook quiz checks:", options: ["Players' health", "Whether players know the plays", "Players' grades", "Parents' schedules"], answer: 1, why: "Quizzes reinforce learning." },
      { q: "When sharing a quiz with a form, collect:", options: ["Home addresses", "Passwords", "Medical history", "Only the information you need"], answer: 3, why: "Minimal data protects players." },
      { q: "A guardrail is:", options: ["A rule that keeps you safe while using a tool", "A fence", "A drill", "A uniform"], answer: 0, why: "Guardrails prevent misuse." },
      { q: "AI suggests intense conditioning in high heat. You:", options: ["Do it", "Make it longer", "Check with your athletic trainer and governing body guidance", "Skip water"], answer: 2, why: "AI may suggest unsafe practices." },
      { q: "A governing body is:", options: ["A gym", "A sponsor", "A parent group", "The organization that sets rules for your sport or level"], answer: 3, why: "It sets the official rules." },
      { q: "Selection decisions should come from:", options: ["AI guesses", "What the coach observes", "Social media", "Rumors"], answer: 1, why: "Fair decisions come from real observation." }
    ]
  }
};
