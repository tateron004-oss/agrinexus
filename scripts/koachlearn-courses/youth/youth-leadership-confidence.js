"use strict";

// Koach Learn course: Youth -> "Leadership, Confidence and Problem Solving". Skill-building course for teens about 13-18: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-leadership-confidence",
  category: "Youth",
  name: "Leadership, Confidence and Problem Solving",
  skills: "Naming your strengths, Setting a SMART goal, Practicing speaking up with AI role-play, Solving a problem in five steps, Running a short team meeting, Handling disagreement calmly",
  outcome: "lead a small group project from start to finish: name the problem, come up with and choose a solution, give everyone a role, run a short meeting with an agenda, and speak up with confidence, using AI as a practice partner along the way.",
  about: [
    "This course is for teens about 13 to 18 who want to feel more confident and step up as leaders, whether that is in a club, a team, a band, a class project, a gaming group or a part-time job.",
    "You will name your strengths, set a goal you can actually reach, practice speaking up, learn a simple five-step way to solve problems, run a short meeting and handle disagreements calmly. An AI assistant can be your practice partner: it can role-play, give you ideas and help you plan.",
    "Use only AI tools that fit your age and your school's rules, and talk with a parent or guardian before you sign up for anything new. Each lesson is about five minutes and ends with a \"Try it now\" task."
  ],
  finalTask: "Plan a small project for a real group you belong to (a club, team, class or youth group): write the problem in one sentence, list three solutions and pick one, give each person a role, write a 15-minute meeting agenda, and practice a one-minute pitch for the plan out loud (with AI role-play or a friend).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Teens about 13 to 18 who want to feel more confident and step up as leaders in a club, team, band, class project, gaming group, youth group or part-time job.",
    startingPoint: "Belong to at least one group and have ideas, but many feel nervous speaking up, set vague goals, and have never run a meeting or a structured problem-solving process.",
    gap: "Without simple leadership tools, groups stall, meetings drift and disagreements turn personal. Teens who can name their strengths, set reachable goals, speak clearly and run a short, fair meeting gain confidence that helps in school, jobs and their community.",
    constraints: [
      "Age limits and school rules for AI tools; a parent or guardian approves new accounts",
      "Privacy: no private details in AI role-play or stories",
      "Short lessons for busy schedules; plain words",
      "Practice needs a real group or a pretend one",
      "Safety: bullying, threats or harm go to a trusted adult right away"
    ],
    prerequisites: "None."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Thinking about times you felt proud", action: "name three of your strengths with a real example of each", standard: "with each strength backed by something you actually did" },
    { id: "O2", condition: "Given a wish about confidence or leadership", action: "write a SMART goal with a first step for this week", standard: "with all five SMART parts" },
    { id: "O3", condition: "Before a real conversation or short talk", action: "practice it with AI role-play using Point, Reason, Example, Point, then say it out loud to a person", standard: "speaking clearly for about one minute" },
    { id: "O4", condition: "Given a real problem in a group you belong to", action: "solve the problem in five steps: name it, find the cause, list solutions, pick one and check it", standard: "with the problem in one sentence and at least three solutions" },
    { id: "O5", condition: "For a group meeting", action: "plan and lead a 15-minute meeting with an agenda, roles and action items", standard: "ending with who does what by when" },
    { id: "O6", condition: "When your group disagrees", action: "use listen, repeat, respond and a fair way to decide", standard: "keeping it about the problem, not the person, and getting an adult if it becomes unsafe" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building confidence",
      lessons: [
        {
          objectives: ["O1"],
          title: "Knowing your strengths",
          minutes: 4,
          goal: "Name three of your strengths with a real example of each.",
          text: [
            "Confidence grows when you know what you are good at. Strengths are not only grades or sports. Being a good listener, staying calm, making people laugh, being organized or never giving up are strengths too.",
            "Think of times you felt proud or people thanked you. What did you do? That points to a strength. You can also ask people who know you: a coach, a teacher, a friend or a family member.",
            "AI can help you find words for your strengths. Tell it a story (no private details) and ask: \"What strengths does this show?\" You decide which ones fit."
          ],
          steps: ["Remember two or three times you felt proud.", "Write what you did in each one.", "Ask a trusted person or AI what strengths that shows.", "Pick three and write one example for each."],
          words: [["Strength", "something you do well or a quality that helps you and others."], ["Confidence", "trusting that you can handle something."]],
          slides: [
            { title: "Strengths are more than grades", bullets: ["Listening, staying calm, humor", "Being organized, not giving up"] },
            { title: "Find your strengths", bullets: ["Times you felt proud", "What people thank you for", "Ask a coach, teacher or friend"] },
            { title: "AI can help name them", bullets: ["Tell a short story, no private details", "Ask: \"What strengths does this show?\"", "You decide what fits"] }
          ],
          tryIt: "Write about one time you felt proud, in three sentences. Ask an AI assistant or a trusted person what strengths it shows. Write down your top three strengths with one example each.",
          youCanNow: "name three of your strengths and back each one with an example.",
          quickCheck: [
            { objective: "O1", q: "Which of these counts as a strength?", options: ["Only top grades", "Only sports trophies", "Staying calm when things go wrong", "Being the loudest"], answer: 2, why: "Strengths include qualities like staying calm, listening and being organized, not only grades or sports." },
            { objective: "O1", q: "You are not sure what your strengths are. What is a good next step?", options: ["Ask a coach, teacher or friend what they see in you", "Decide you have none", "Copy a friend's list", "Wait until you are older"], answer: 0, why: "People who know you can help you see strengths you miss." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Setting a goal you can reach",
          minutes: 5,
          goal: "Turn a wish into a SMART goal with a first step.",
          text: [
            "\"I want to be better at public speaking\" is a wish. \"I will speak once in every class discussion for the next two weeks\" is a goal. Goals that work are SMART: specific, measurable, achievable, relevant and time-bound.",
            "AI can help: \"Turn this into a SMART goal: I want to be more confident in my soccer team.\" Then make it yours by checking it is realistic for your life.",
            "Every goal needs a first step you can do this week. Small wins build confidence."
          ],
          steps: ["Write your wish.", "Make it specific and measurable.", "Check it is realistic and matters to you.", "Add a deadline and a first step for this week."],
          words: [["SMART goal", "a goal that is specific, measurable, achievable, relevant and time-bound."]],
          slides: [
            { title: "Wish vs goal", bullets: ["Wish: \"be better at speaking\"", "Goal: \"speak once in each class discussion for 2 weeks\""] },
            { title: "SMART", bullets: ["Specific and measurable", "Achievable and relevant", "Time-bound: has a deadline"] },
            { title: "Start small", bullets: ["One first step this week", "Small wins build confidence"] }
          ],
          tryIt: "Write one wish about confidence or leadership. Turn it into a SMART goal (with AI's help if you want), then write the first step you will take this week.",
          youCanNow: "set a SMART goal with a first step.",
          quickCheck: [
            { objective: "O2", q: "What does the M in SMART stand for?", options: ["Meaningful", "Modern", "Mandatory", "Measurable"], answer: 3, why: "SMART stands for specific, measurable, achievable, relevant and time-bound." },
            { objective: "O2", q: "Your goal is \"Lead a meeting every week for a year\" but you have little free time. What do you change?", options: ["Nothing; bigger is better", "Make it achievable, like leading one meeting this month", "Remove the deadline", "Make it vaguer"], answer: 1, why: "A goal must be realistic for your life; small wins build confidence." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Practicing speaking up with AI role-play",
          minutes: 5,
          goal: "Practice a hard conversation or short speech with AI before doing it for real.",
          text: [
            "Speaking up gets easier with practice. AI can play a role so you can practice: \"Pretend you are my club adviser. I want to ask to start a new project. Ask me tough questions.\"",
            "Practice the PREP pattern for short talks: Point (say your main idea), Reason (why), Example (a real one), Point again. It keeps you clear even when you are nervous.",
            "After practicing with AI, practice out loud with a friend or family member. Real people react in ways AI cannot. Take a slow breath before you start."
          ],
          steps: ["Choose a real situation: asking a question, pitching an idea, saying no.", "Ask AI to play the other person.", "Use Point, Reason, Example, Point.", "Practice out loud with a real person too."],
          words: [["Role-play", "acting out a situation to practice it."], ["PREP", "Point, Reason, Example, Point: a simple way to give a short talk."]],
          slides: [
            { title: "Practice with AI role-play", bullets: ["\"Pretend you are my club adviser\"", "\"Ask me tough questions\""] },
            { title: "PREP for short talks", bullets: ["Point: your main idea", "Reason: why", "Example: a real one", "Point: say it again"] },
            { title: "Then go real", bullets: ["Practice with a friend or family member", "Take a slow breath first"] }
          ],
          tryIt: "Pick a real conversation you need to have. Ask AI to role-play the other person. Answer using PREP. Then say it out loud once to someone you trust.",
          youCanNow: "practice speaking up with role-play and the PREP pattern.",
          quickCheck: [
            { objective: "O3", q: "In PREP, what do you say first?", options: ["Your main point", "A joke", "Your example", "An apology"], answer: 0, why: "PREP starts with your Point, then the Reason, an Example and the Point again." },
            { objective: "O3", q: "You practiced asking your adviser for a new project with AI. What is the next step?", options: ["Send the AI's words by text", "Skip the real talk", "Practice out loud with a friend or family member", "Ask the AI to talk to your adviser"], answer: 2, why: "Real people react in ways AI cannot, so practice with a person too." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building confidence",
        questions: [
          { objective: "O1", q: "Which is a strength?", options: ["Losing your keys", "Being a good listener", "Being late", "Ignoring friends"], answer: 1, why: "Strengths include people skills like listening." },
          { objective: "O1", q: "A good way to find your strengths is to:", options: ["Guess randomly", "Copy a friend's list", "Only look at grades", "Remember times you felt proud and what you did"], answer: 3, why: "Proud moments point to real strengths." },
          { objective: "O2", q: "Which is a SMART goal?", options: ["\"Speak once in every class discussion for the next two weeks\"", "\"Be more confident\"", "\"Be the best\"", "\"Try harder someday\""], answer: 0, why: "It is specific, measurable and time-bound." },
          { objective: "O3", q: "What does PREP stand for?", options: ["Plan, Run, Eat, Play", "Practice, Rest, Exit, Pause", "Point, Reason, Example, Point", "Phone, Radio, Email, Post"], answer: 2, why: "PREP is a simple pattern for short talks." },
          { objective: "O3", q: "After practicing with AI role-play, you should:", options: ["Never practice again", "Let AI give the talk", "Also practice out loud with a real person", "Skip the real conversation"], answer: 2, why: "Real people react in ways AI cannot." }
        ]
      }
    },
    {
      name: "Chapter 2: Leading and solving problems",
      lessons: [
        {
          objectives: ["O4"],
          title: "Solving a problem in five steps",
          minutes: 5,
          goal: "Use five steps to solve a real problem in a group.",
          text: [
            "Leaders solve problems in an organized way. Five steps work almost anywhere: 1. Name the problem in one sentence. 2. Find the cause. 3. List several solutions. 4. Pick one and try it. 5. Check if it worked.",
            "Example: \"Only 4 people come to our art club meetings.\" Cause: the meetings clash with sports practice. Solutions: move the day, meet at lunch, post the work online. Try one for a month, then check.",
            "AI is great at step 3. Ask: \"Give me 8 ideas to fix this problem for a high school club.\" You and your group still choose and check."
          ],
          steps: ["Name the problem in one sentence.", "Find the cause.", "List several solutions (AI can help).", "Pick one and try it.", "Check if it worked."],
          words: [["Root cause", "the real reason a problem happens."]],
          slides: [
            { title: "Five steps", bullets: ["1. Name it  2. Find the cause", "3. List solutions  4. Try one", "5. Check if it worked"] },
            { title: "Example: low club turnout", bullets: ["Cause: clashes with practice", "Ideas: new day, lunch meeting, online", "Try one, then check"] },
            { title: "Where AI helps", bullets: ["Brainstorming many solutions", "You and the group still decide"] }
          ],
          tryIt: "Pick a real problem in a group you belong to. Write it in one sentence, name the cause, ask AI for 8 solutions, and circle the one you would try first.",
          youCanNow: "solve a group problem using five clear steps.",
          quickCheck: [
            { objective: "O4", q: "What is the last of the five problem-solving steps?", options: ["Name the problem", "List solutions", "Find the cause", "Check if it worked"], answer: 3, why: "After trying a solution, you check whether it worked." },
            { objective: "O4", q: "Your band keeps missing practice. Before listing solutions, what do you do?", options: ["Kick someone out", "Find the cause, like a clash with work schedules", "Ask AI to choose for you", "Cancel the band"], answer: 1, why: "Finding the cause comes before listing solutions." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Running a short team meeting",
          minutes: 5,
          goal: "Plan and lead a 15-minute meeting with an agenda and roles.",
          text: [
            "Good meetings are short and clear. An agenda is a list of what you will talk about and how long each part takes. AI can draft one fast: \"Make a 15-minute agenda for our club meeting to plan a fundraiser bake sale.\"",
            "Give everyone a role so the work is shared: a note-taker, a timekeeper, and owners for each task. A leader makes sure everyone gets a chance to talk, especially quieter people.",
            "End every meeting with next steps: who does what by when. Send a short summary afterward."
          ],
          steps: ["Write a goal for the meeting.", "Make a 15-minute agenda with times.", "Give roles: note-taker, timekeeper, task owners.", "Invite quieter people to speak.", "End with who does what by when."],
          words: [["Agenda", "a list of topics for a meeting, with times."], ["Action item", "a task someone agrees to do by a date."]],
          slides: [
            { title: "Short and clear", bullets: ["Have a goal", "Use an agenda with times", "AI can draft the agenda"] },
            { title: "Share the work", bullets: ["Note-taker and timekeeper", "An owner for each task", "Invite quieter voices"] },
            { title: "End with next steps", bullets: ["Who does what by when", "Send a short summary"] }
          ],
          tryIt: "Ask AI to draft a 15-minute agenda for a real or pretend group meeting. Change it to fit your group, add roles, and write three action items with names and dates.",
          youCanNow: "plan and lead a short, useful meeting.",
          quickCheck: [
            { objective: "O5", q: "What does a note-taker do in a meeting?", options: ["Runs the clock", "Leads every topic", "Writes down decisions and next steps", "Chooses the snacks"], answer: 2, why: "The note-taker records what was decided so it can be shared afterward." },
            { objective: "O5", q: "Two people do all the talking in your meeting. What do you do as leader?", options: ["Invite the quieter people to share their ideas", "Let them keep going", "End the meeting early", "Cancel future meetings"], answer: 0, why: "A leader makes sure everyone gets a chance to talk, especially quieter people." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Handling disagreement calmly",
          minutes: 5,
          goal: "Use listen-repeat-respond to calm a disagreement and reach a decision.",
          text: [
            "Groups disagree, and that is normal. A good leader keeps it about the problem, not the person.",
            "Try listen, repeat, respond. Listen fully. Repeat what you heard: \"So you think the bake sale should be on Friday because more people are around.\" Then respond with your view and look for what you both want.",
            "If the group cannot agree, use a fair way to decide: a vote, a trial run, or asking your adviser or coach. If a disagreement turns into bullying, threats or someone getting hurt, step back and tell a trusted adult right away. You can also practice tough conversations with AI role-play first."
          ],
          steps: ["Keep it about the problem, not the person.", "Listen fully.", "Repeat what you heard.", "Respond and look for shared goals.", "If stuck, vote or try one option; get an adult if it gets unsafe."],
          words: [["Compromise", "an agreement where each side gives a little."], ["Active listening", "listening carefully and showing you understood."]],
          slides: [
            { title: "Disagreement is normal", bullets: ["Focus on the problem, not the person"] },
            { title: "Listen, repeat, respond", bullets: ["Listen fully", "\"So you think...\"", "Share your view and find shared goals"] },
            { title: "If you are stuck", bullets: ["Vote or do a trial run", "Ask an adviser or coach", "Unsafe or bullying? Tell a trusted adult"] }
          ],
          tryIt: "Final task: plan a small project for a real group: the problem in one sentence, three solutions and your pick, a role for each person, a 15-minute agenda, and a one-minute pitch practiced out loud with AI role-play or a friend.",
          youCanNow: "lead a group through a problem, a meeting and a disagreement with confidence.",
          quickCheck: [
            { objective: "O6", q: "In listen, repeat, respond, why do you repeat what you heard?", options: ["To win the argument", "To show the other person they were heard and check you understood", "To make the meeting longer", "To copy their idea"], answer: 1, why: "Repeating shows you listened and makes sure you understood before you respond." },
            { objective: "O6", q: "A disagreement about a fundraiser turns into threats. What do you do?", options: ["Hold a vote", "Ignore it", "Make a joke", "Step back and tell a trusted adult right away"], answer: 3, why: "Bullying, threats or someone getting hurt need a trusted adult right away." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Leading and solving problems",
        questions: [
          { objective: "O4", q: "What is the first of the five problem-solving steps?", options: ["Name the problem in one sentence", "Try a solution", "Check if it worked", "Blame someone"], answer: 0, why: "You start by naming the problem clearly." },
          { objective: "O4", q: "Where is AI most helpful in problem solving?", options: ["Making the final decision for the group", "Doing the group's work", "Blaming people", "Brainstorming many solutions"], answer: 3, why: "AI is good at listing ideas; the group decides." },
          { objective: "O5", q: "What is an agenda?", options: ["A snack", "A list of meeting topics with times", "A type of vote", "A password"], answer: 1, why: "An agenda keeps a meeting on track." },
          { objective: "O5", q: "How should every meeting end?", options: ["With who does what by when", "With no plan", "With an argument", "With everyone leaving early"], answer: 0, why: "Clear action items turn talk into action." },
          { objective: "O6", q: "A disagreement turns into threats. The leader should:", options: ["Ignore it", "Join in", "Step back and tell a trusted adult", "Post it online"], answer: 2, why: "Safety comes first; get an adult involved." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leadership, Confidence and Problem Solving",
    questions: [
      { objective: "O1", q: "Confidence means:", options: ["Never feeling nervous", "Trusting that you can handle something", "Always being loudest", "Being perfect"], answer: 1, why: "Confidence is trust in yourself, even with nerves." },
      { objective: "O1", q: "Which is NOT a strength?", options: ["Staying calm", "Being organized", "Never giving up", "Ignoring teammates"], answer: 3, why: "Ignoring teammates hurts the group." },
      { objective: "O1", q: "When asking AI to name your strengths, you should:", options: ["Share your address", "Let AI decide who you are", "Share your password", "Share a short story without private details"], answer: 3, why: "Stories without private details give AI enough to help." },
      { objective: "O2", q: "SMART goals are specific, measurable, achievable, relevant and:", options: ["Secret", "Time-bound", "Huge", "Optional"], answer: 1, why: "A deadline makes a goal time-bound." },
      { objective: "O2", q: "Why add a first step to a goal?", options: ["It makes the goal longer", "Teachers require it", "Small wins build confidence and start progress", "It is not needed"], answer: 2, why: "Starting small gets you moving." },
      { objective: "O2", q: "Which is a wish, not a goal?", options: ["\"I want to be better at leading\"", "\"I will lead one club meeting by March 1\"", "\"I will speak in class twice a week for a month\"", "\"I will run 2 miles three times a week for 4 weeks\""], answer: 0, why: "It has no measure or deadline." },
      { objective: "O3", q: "A good role-play prompt is:", options: ["\"Talk to my adviser for me\"", "\"Pretend you are my club adviser and ask me tough questions\"", "\"Give me a speech to read\"", "\"Do my homework\""], answer: 1, why: "Role-play lets you practice the real conversation." },
      { objective: "O3", q: "In PREP, the E stands for:", options: ["Exit", "Energy", "Email", "Example"], answer: 3, why: "Point, Reason, Example, Point." },
      { objective: "O3", q: "Before a hard talk, a quick way to calm nerves is to:", options: ["Take a slow breath", "Skip it", "Shout", "Read your phone"], answer: 0, why: "A slow breath helps you stay steady." },
      { objective: "O4", q: "In five-step problem solving, after listing solutions you:", options: ["Stop", "Blame someone", "Pick one and try it", "Start a new problem"], answer: 2, why: "Then you check whether it worked." },
      { objective: "O4", q: "A root cause is:", options: ["A plant's root", "A type of meeting", "The real reason a problem happens", "A password"], answer: 2, why: "Fixing the root cause solves the problem." },
      { objective: "O4", q: "Club turnout is low because meetings clash with practice. A good first solution to try is:", options: ["Moving the meeting day", "Canceling the club", "Blaming members", "Doing nothing"], answer: 0, why: "It goes after the cause." },
      { objective: "O4", q: "Who makes the final decision when AI lists solutions?", options: ["The AI", "A stranger online", "Nobody", "You and your group"], answer: 3, why: "AI suggests; people decide." },
      { objective: "O5", q: "A 15-minute meeting needs:", options: ["No plan", "An agenda with times", "Two hours", "Only snacks"], answer: 1, why: "Agendas keep meetings short." },
      { objective: "O5", q: "What does a timekeeper do?", options: ["Keeps the meeting on schedule", "Takes notes", "Brings snacks", "Votes twice"], answer: 0, why: "The timekeeper watches the clock." },
      { objective: "O5", q: "A good leader in a meeting:", options: ["Talks the whole time", "Ignores new ideas", "Invites quieter people to speak", "Lets one person decide everything"], answer: 2, why: "Everyone's ideas help the group." },
      { objective: "O5", q: "An action item is:", options: ["A movie", "A task someone agrees to do by a date", "A meeting snack", "An argument"], answer: 1, why: "Action items turn plans into work." },
      { objective: "O6", q: "In listen-repeat-respond, the \"repeat\" step sounds like:", options: ["\"You're wrong\"", "\"Whatever\"", "\"I'm leaving\"", "\"So you think the sale should be Friday because more people are around\""], answer: 3, why: "Repeating shows you understood." },
      { objective: "O6", q: "Your group can't agree on a date. A fair way to decide is:", options: ["The loudest person wins", "Give up", "Fight about it", "A vote or a trial run"], answer: 3, why: "Votes and trials are fair ways to decide." },
      { objective: "O6", q: "A compromise is:", options: ["One side wins everything", "An agreement where each side gives a little", "Ending the friendship", "Ignoring the problem"], answer: 1, why: "Both sides give a little to agree." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      7,
      9,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Problem named",
        objective: "O4",
        notYet: "The problem is vague or more than one sentence.",
        meets: "The problem is one clear sentence with its cause.",
        exceeds: "Also says how the group will know it is fixed."
      },
      {
        name: "Solutions and choice",
        objective: "O4",
        notYet: "Only one solution, or no choice made.",
        meets: "Three solutions listed and one picked with a reason.",
        exceeds: "Includes a plan to check if the choice worked."
      },
      {
        name: "Roles",
        objective: "O5",
        notYet: "Some people have no role, or one person does everything.",
        meets: "Every person has a role, including a note-taker and timekeeper.",
        exceeds: "Roles match people's strengths."
      },
      {
        name: "Meeting agenda",
        objective: "O5",
        notYet: "No agenda, or no times.",
        meets: "A 15-minute agenda with times that ends with who does what by when.",
        exceeds: "Includes a way to invite quieter people to speak."
      },
      {
        name: "One-minute pitch",
        objective: "O3",
        notYet: "The pitch was not practiced out loud.",
        meets: "A clear pitch using Point, Reason, Example, Point, practiced out loud.",
        exceeds: "Practiced with both AI role-play and a real person, and improved after."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who lead a real meeting or group project within 30 days (follow-up survey)",
      "Learners who reach the first step of their SMART goal",
      "Learners who take on a new leadership role in a club, team or youth group within 90 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, school computer or library computer with internet",
      "A free AI assistant the learner is allowed to use for role-play and ideas",
      "Paper or a document for the project plan and agenda",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Run it with a real club or team so learners can plan an actual project together.",
      "Pair learners for the PREP pitch and listen-repeat-respond practice so everyone speaks out loud.",
      "Rotate meeting roles (leader, note-taker, timekeeper) so each learner tries leading.",
      "Make clear that bullying, threats or harm go to a trusted adult right away, and name who that adult is in your program.",
      "Score the project plan with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
