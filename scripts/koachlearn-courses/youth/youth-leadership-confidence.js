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
  chapters: [
    {
      name: "Chapter 1: Building confidence",
      lessons: [
        {
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
          youCanNow: "name three of your strengths and back each one with an example."
        },
        {
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
          youCanNow: "set a SMART goal with a first step."
        },
        {
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
          youCanNow: "practice speaking up with role-play and the PREP pattern."
        }
      ],
      check: {
        title: "Knowledge Check 1: Building confidence",
        questions: [
          { q: "Which is a strength?", options: ["Losing your keys", "Being a good listener", "Being late", "Ignoring friends"], answer: 1, why: "Strengths include people skills like listening." },
          { q: "A good way to find your strengths is to:", options: ["Guess randomly", "Copy a friend's list", "Only look at grades", "Remember times you felt proud and what you did"], answer: 3, why: "Proud moments point to real strengths." },
          { q: "Which is a SMART goal?", options: ["\"Speak once in every class discussion for the next two weeks\"", "\"Be more confident\"", "\"Be the best\"", "\"Try harder someday\""], answer: 0, why: "It is specific, measurable and time-bound." },
          { q: "What does PREP stand for?", options: ["Plan, Run, Eat, Play", "Practice, Rest, Exit, Pause", "Point, Reason, Example, Point", "Phone, Radio, Email, Post"], answer: 2, why: "PREP is a simple pattern for short talks." },
          { q: "After practicing with AI role-play, you should:", options: ["Never practice again", "Let AI give the talk", "Also practice out loud with a real person", "Skip the real conversation"], answer: 2, why: "Real people react in ways AI cannot." }
        ]
      }
    },
    {
      name: "Chapter 2: Leading and solving problems",
      lessons: [
        {
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
          youCanNow: "solve a group problem using five clear steps."
        },
        {
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
          youCanNow: "plan and lead a short, useful meeting."
        },
        {
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
          youCanNow: "lead a group through a problem, a meeting and a disagreement with confidence."
        }
      ],
      check: {
        title: "Knowledge Check 2: Leading and solving problems",
        questions: [
          { q: "What is the first of the five problem-solving steps?", options: ["Name the problem in one sentence", "Try a solution", "Check if it worked", "Blame someone"], answer: 0, why: "You start by naming the problem clearly." },
          { q: "Where is AI most helpful in problem solving?", options: ["Making the final decision for the group", "Doing the group's work", "Blaming people", "Brainstorming many solutions"], answer: 3, why: "AI is good at listing ideas; the group decides." },
          { q: "What is an agenda?", options: ["A snack", "A list of meeting topics with times", "A type of vote", "A password"], answer: 1, why: "An agenda keeps a meeting on track." },
          { q: "How should every meeting end?", options: ["With who does what by when", "With no plan", "With an argument", "With everyone leaving early"], answer: 0, why: "Clear action items turn talk into action." },
          { q: "A disagreement turns into threats. The leader should:", options: ["Ignore it", "Join in", "Step back and tell a trusted adult", "Post it online"], answer: 2, why: "Safety comes first; get an adult involved." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leadership, Confidence and Problem Solving",
    questions: [
      { q: "Confidence means:", options: ["Never feeling nervous", "Trusting that you can handle something", "Always being loudest", "Being perfect"], answer: 1, why: "Confidence is trust in yourself, even with nerves." },
      { q: "Which is NOT a strength?", options: ["Staying calm", "Being organized", "Never giving up", "Ignoring teammates"], answer: 3, why: "Ignoring teammates hurts the group." },
      { q: "When asking AI to name your strengths, you should:", options: ["Share your address", "Let AI decide who you are", "Share your password", "Share a short story without private details"], answer: 3, why: "Stories without private details give AI enough to help." },
      { q: "SMART goals are specific, measurable, achievable, relevant and:", options: ["Secret", "Time-bound", "Huge", "Optional"], answer: 1, why: "A deadline makes a goal time-bound." },
      { q: "Why add a first step to a goal?", options: ["It makes the goal longer", "Teachers require it", "Small wins build confidence and start progress", "It is not needed"], answer: 2, why: "Starting small gets you moving." },
      { q: "Which is a wish, not a goal?", options: ["\"I want to be better at leading\"", "\"I will lead one club meeting by March 1\"", "\"I will speak in class twice a week for a month\"", "\"I will run 2 miles three times a week for 4 weeks\""], answer: 0, why: "It has no measure or deadline." },
      { q: "A good role-play prompt is:", options: ["\"Talk to my adviser for me\"", "\"Pretend you are my club adviser and ask me tough questions\"", "\"Give me a speech to read\"", "\"Do my homework\""], answer: 1, why: "Role-play lets you practice the real conversation." },
      { q: "In PREP, the E stands for:", options: ["Exit", "Energy", "Email", "Example"], answer: 3, why: "Point, Reason, Example, Point." },
      { q: "Before a hard talk, a quick way to calm nerves is to:", options: ["Take a slow breath", "Skip it", "Shout", "Read your phone"], answer: 0, why: "A slow breath helps you stay steady." },
      { q: "In five-step problem solving, after listing solutions you:", options: ["Stop", "Blame someone", "Pick one and try it", "Start a new problem"], answer: 2, why: "Then you check whether it worked." },
      { q: "A root cause is:", options: ["A plant's root", "A type of meeting", "The real reason a problem happens", "A password"], answer: 2, why: "Fixing the root cause solves the problem." },
      { q: "Club turnout is low because meetings clash with practice. A good first solution to try is:", options: ["Moving the meeting day", "Canceling the club", "Blaming members", "Doing nothing"], answer: 0, why: "It goes after the cause." },
      { q: "Who makes the final decision when AI lists solutions?", options: ["The AI", "A stranger online", "Nobody", "You and your group"], answer: 3, why: "AI suggests; people decide." },
      { q: "A 15-minute meeting needs:", options: ["No plan", "An agenda with times", "Two hours", "Only snacks"], answer: 1, why: "Agendas keep meetings short." },
      { q: "What does a timekeeper do?", options: ["Keeps the meeting on schedule", "Takes notes", "Brings snacks", "Votes twice"], answer: 0, why: "The timekeeper watches the clock." },
      { q: "A good leader in a meeting:", options: ["Talks the whole time", "Ignores new ideas", "Invites quieter people to speak", "Lets one person decide everything"], answer: 2, why: "Everyone's ideas help the group." },
      { q: "An action item is:", options: ["A movie", "A task someone agrees to do by a date", "A meeting snack", "An argument"], answer: 1, why: "Action items turn plans into work." },
      { q: "In listen-repeat-respond, the \"repeat\" step sounds like:", options: ["\"You're wrong\"", "\"Whatever\"", "\"I'm leaving\"", "\"So you think the sale should be Friday because more people are around\""], answer: 3, why: "Repeating shows you understood." },
      { q: "Your group can't agree on a date. A fair way to decide is:", options: ["The loudest person wins", "Give up", "Fight about it", "A vote or a trial run"], answer: 3, why: "Votes and trials are fair ways to decide." },
      { q: "A compromise is:", options: ["One side wins everything", "An agreement where each side gives a little", "Ending the friendship", "Ignoring the problem"], answer: 1, why: "Both sides give a little to agree." }
    ]
  }
};
