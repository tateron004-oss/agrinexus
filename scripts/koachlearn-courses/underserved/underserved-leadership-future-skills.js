"use strict";

// Koach Learn course: Undeserved Community -> "Leadership, Confidence and Future Skills". Skill-building course (shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js).
// Audience: adults in low-income and underserved communities who lead at home, work, church or in the neighborhood. Free AI tools as a practice partner.

module.exports = {
  id: "underserved-leadership-future-skills",
  category: "Undeserved Community",
  name: "Leadership, Confidence and Future Skills",
  skills: "Setting a clear goal, Solving problems step by step, Speaking up with confidence, Giving and asking for feedback, Leading a small project, Planning your next skill",
  outcome: "plan and lead a small community project: set a clear goal, solve problems step by step, give a one-minute talk that recruits helpers, and use a free AI assistant as a practice partner along the way.",
  about: [
    "You do not need a title to be a leader. If you organize your family, help neighbors, run a church committee or train new workers on your shift, you already lead.",
    "This course builds the skills that make leaders confident: setting clear goals, solving problems step by step, speaking up, giving feedback, leading a small project, and choosing the next skill to learn. A free AI assistant is your practice partner: it asks you questions, listens to your practice talks, and gives you feedback.",
    "Each lesson is about five minutes and ends with a \"Try it now\" task. A knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Plan a small community project you could really do, such as a book swap, a clothing drive or a park clean-up. Write one clear goal, list two problems that could come up and how you would solve them, and write a one-minute talk asking three people to help. Practice the talk out loud with an AI assistant, ask for feedback, and improve it once.",
  chapters: [
    {
      name: "Chapter 1: Leading yourself",
      lessons: [
        {
          title: "Setting a clear goal",
          minutes: 5,
          goal: "Turn a wish into a clear goal with a what, a how much, and a by-when.",
          text: [
            "Leaders start with a clear goal. \"Help the kids on my block read more\" is a wish. \"Run a free book swap at the community center on the first Saturday of next month and give away 50 books\" is a goal.",
            "A clear goal says what you will do, how much or how many, and by when. It should be something you can really do with the time and help you have.",
            "An AI assistant can help you sharpen a goal. Ask: \"Here is my wish: ... Help me turn it into a clear goal with what, how much and by when. Ask me questions first.\""
          ],
          steps: ["Write down a wish for your family, work or community.", "Add what you will do, how much, and by when.", "Ask the AI to ask you questions and help sharpen it.", "Check that it is something you can really do."],
          words: [["Goal", "something specific you plan to do by a certain time."], ["Deadline", "the date by which something must be done."]],
          slides: [
            { title: "Wish vs goal", bullets: ["Wish: \"Help kids read more\"", "Goal: \"Book swap, first Saturday next month, 50 books\""] },
            { title: "A clear goal has", bullets: ["What you will do", "How much or how many", "By when"] },
            { title: "Use AI to sharpen it", bullets: ["\"Ask me questions first\"", "Make sure you can really do it"] }
          ],
          tryIt: "Write one wish for your community. Ask an AI assistant to ask you questions and help you turn it into a clear goal with what, how much and by when.",
          youCanNow: "turn a wish into a clear, doable goal."
        },
        {
          title: "Solving problems step by step",
          minutes: 5,
          goal: "Use four simple steps to work through a real problem.",
          text: [
            "Every plan hits problems. Leaders stay calm and work through them in steps: name the problem, list a few options, pick one, then check how it went.",
            "AI is a good thinking partner. Describe the problem without private details and ask: \"Give me three options to solve this, with one good point and one risk for each.\" For example: \"Only two people signed up to help with our clothing drive.\"",
            "You choose. You know your people and your community better than any AI does. After you try an option, look back: did it work? What would you do differently?"
          ],
          steps: ["Name the problem in one sentence.", "Ask the AI for three options, each with a good point and a risk.", "Pick the option that fits your people and situation.", "Try it, then check how it went."],
          words: [["Option", "one possible choice."], ["Risk", "something that could go wrong."]],
          slides: [
            { title: "Four steps", bullets: ["1. Name the problem", "2. List options", "3. Pick one", "4. Check how it went"] },
            { title: "AI as a thinking partner", bullets: ["\"Give me three options\"", "\"One good point and one risk for each\""] },
            { title: "You choose", bullets: ["You know your people best", "Look back: what would you change?"] }
          ],
          tryIt: "Pick a real problem from your home, job or group. Ask an AI assistant for three options with a good point and a risk for each. Choose one and write why.",
          youCanNow: "work through a problem in four steps with AI as a thinking partner."
        },
        {
          title: "Speaking up with confidence",
          minutes: 5,
          goal: "Plan and practice a short talk that asks people to act.",
          text: [
            "Confidence grows with practice. A short talk is easier when it has a simple shape: why it matters, what you want to do, and what you are asking people to do.",
            "Write a one-minute talk (about 120 to 150 words). Then practice it out loud. You can type it into an AI assistant and ask: \"Is this clear and friendly? Give me two ways to make it stronger. Keep it under one minute.\"",
            "Nerves are normal. Breathe slowly, look at a few friendly faces, and speak a little slower than you think you need to. Practicing in front of a mirror or one friend helps too."
          ],
          steps: ["Write why it matters, what you want to do, and what you are asking.", "Keep it to about one minute.", "Ask an AI for two ways to make it stronger.", "Practice out loud three times, slowly."],
          words: [["Call to action", "the part of a talk that tells people exactly what you want them to do."]],
          slides: [
            { title: "A simple talk shape", bullets: ["Why it matters", "What you want to do", "What you are asking people to do"] },
            { title: "Practice with AI", bullets: ["About one minute, 120-150 words", "\"Give me two ways to make it stronger\""] },
            { title: "Handling nerves", bullets: ["Breathe slowly", "Find friendly faces", "Speak a little slower"] }
          ],
          tryIt: "Write a one-minute talk about the goal from Lesson 1. Ask an AI assistant for two ways to make it stronger, then practice it out loud three times.",
          youCanNow: "plan and practice a short talk with a clear call to action."
        }
      ],
      check: {
        title: "Knowledge Check 1: Leading yourself",
        questions: [
          { q: "Which is a clear goal?", options: ["\"Help people more\"", "\"Be a better neighbor\"", "\"Run a book swap on the first Saturday next month and give away 50 books\"", "\"Do good things\""], answer: 2, why: "It says what, how many and by when." },
          { q: "What three parts does a clear goal have?", options: ["What, how much, and by when", "Who, why, and where", "A title, a logo, and a slogan", "A budget, a bank and a loan"], answer: 0, why: "Those parts make a goal clear and checkable." },
          { q: "What is the first step in solving a problem?", options: ["Pick any option", "Blame someone", "Give up", "Name the problem in one sentence"], answer: 3, why: "You cannot solve a problem you have not named." },
          { q: "The AI suggests three options. Who chooses?", options: ["The AI", "You, because you know your people and community", "Nobody", "The first person who answers"], answer: 1, why: "AI is a thinking partner; you decide." },
          { q: "What is a call to action?", options: ["A phone call", "An emergency number", "The part of a talk that tells people what you want them to do", "A ringtone"], answer: 2, why: "It turns listeners into helpers." }
        ]
      }
    },
    {
      name: "Chapter 2: Leading others and growing",
      lessons: [
        {
          title: "Giving and asking for feedback",
          minutes: 5,
          goal: "Give kind, useful feedback and ask for it.",
          text: [
            "Feedback is information that helps someone do better. Good leaders give it kindly and ask for it often.",
            "A simple way to give feedback: say one thing that went well, one thing to try next time, and thank them. For example: \"You set up the tables fast. Next time, let's put the sign-in sheet by the door. Thank you for coming early.\"",
            "Ask for feedback too: \"What is one thing I could do better at our next meeting?\" You can practice with an AI: describe a situation and ask it to help you word feedback that is kind and clear."
          ],
          steps: ["Say one thing that went well.", "Say one thing to try next time.", "Thank the person.", "Ask others: \"What is one thing I could do better?\""],
          words: [["Feedback", "information that helps someone see what went well and what to improve."]],
          slides: [
            { title: "Feedback helps people grow", bullets: ["Give it kindly", "Ask for it often"] },
            { title: "A simple shape", bullets: ["One thing that went well", "One thing to try next time", "Thank you"] },
            { title: "Ask for it", bullets: ["\"What is one thing I could do better?\"", "Listen without arguing"] }
          ],
          tryIt: "Think of a helper, coworker or family member. Ask an AI assistant to help you word kind feedback with one thing that went well and one thing to try next time. Say it out loud.",
          youCanNow: "give kind, useful feedback and ask for it."
        },
        {
          title: "Leading a small project",
          minutes: 5,
          goal: "Break a project into tasks, give each a person and a date, and plan for problems.",
          text: [
            "A project is a goal with a start and an end. To lead one, break it into small tasks, give each task a person and a date, and check in.",
            "Ask the AI: \"I am running a clothing drive at our church in four weeks. Break it into tasks with a suggested week for each. List two problems that might come up and how to handle them.\"",
            "Share the task list with your helpers. Let people pick tasks they like. Check in each week, thank people often, and celebrate when you finish."
          ],
          steps: ["Write your project goal.", "Ask the AI to break it into tasks with dates and to list possible problems.", "Give each task a person; let people choose.", "Check in each week and celebrate at the end."],
          words: [["Project", "a piece of work with a goal, a start and an end."], ["Task", "one small job that is part of a project."]],
          slides: [
            { title: "A project has a start and an end", bullets: ["Break it into tasks", "Each task: a person and a date"] },
            { title: "Ask AI to help plan", bullets: ["Tasks with suggested weeks", "Two problems and how to handle them"] },
            { title: "Lead the team", bullets: ["Let people pick tasks", "Check in weekly", "Thank people and celebrate"] }
          ],
          tryIt: "Use your goal from Lesson 1. Ask an AI assistant to break it into tasks with dates and list two problems that could come up, with a plan for each.",
          youCanNow: "plan a small project with tasks, people, dates and backup plans."
        },
        {
          title: "Planning your next skill",
          minutes: 5,
          goal: "Choose one future skill to learn and a first step to start it.",
          text: [
            "The world of work keeps changing. Skills that help almost everyone include using digital tools, using AI well and safely, communicating clearly, working in teams, and solving problems.",
            "Ask an AI: \"Here is what I do now and what I enjoy. Suggest three skills that would help me grow, and one free way to start each.\" Then check the free options yourself, for example at your public library or an American Job Center.",
            "Pick one skill and one first step you can do this week. Leaders keep learning, and they bring others along."
          ],
          steps: ["Tell the AI what you do now and what you enjoy.", "Ask for three skills to grow and one free way to start each.", "Check the free options yourself.", "Pick one skill and one first step for this week."],
          words: [["Future skill", "a skill that will matter more as work and technology change."]],
          slides: [
            { title: "Skills that help almost everyone", bullets: ["Digital tools and AI, used safely", "Clear communication and teamwork", "Problem solving"] },
            { title: "Ask AI for ideas", bullets: ["Share what you do and enjoy", "Three skills and a free way to start each"] },
            { title: "Take a first step", bullets: ["Check free options: library, job center", "Pick one skill, one step this week"] }
          ],
          tryIt: "Final task: plan a small community project with one clear goal, two possible problems and how you would solve them, and a one-minute talk asking three people to help. Practice the talk with an AI assistant, get feedback, and improve it once.",
          youCanNow: "lead a small project with confidence and keep growing your skills."
        }
      ],
      check: {
        title: "Knowledge Check 2: Leading others and growing",
        questions: [
          { q: "Which is kind, useful feedback?", options: ["\"That was bad.\"", "\"You set up fast. Next time, put the sign-in sheet by the door. Thank you.\"", "Saying nothing", "\"Everyone else did better.\""], answer: 1, why: "It names a strength, a next step, and says thanks." },
          { q: "Someone gives you feedback. The best response is to:", options: ["Argue", "Ignore it", "Get upset", "Listen and thank them"], answer: 3, why: "Listening helps you grow." },
          { q: "What is a task?", options: ["One small job that is part of a project", "A whole project", "A meeting", "A goal"], answer: 0, why: "Projects are made of tasks." },
          { q: "How should you hand out project tasks?", options: ["Do them all yourself", "Give them to one person", "Let people pick tasks they like, each with a date", "Never assign them"], answer: 2, why: "Choice and clear dates keep helpers involved." },
          { q: "The AI suggests a free class to learn a skill. Before signing up you:", options: ["Pay a fee first", "Check it yourself, for example with your library or job center", "Give your bank number", "Trust it fully"], answer: 1, why: "AI can list programs that changed; check them yourself." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Leadership, Confidence and Future Skills",
    questions: [
      { q: "Who can be a leader?", options: ["Only managers", "Only people with titles", "Anyone who organizes and helps others", "Only elected officials"], answer: 2, why: "Leadership is what you do, not your title." },
      { q: "\"Help kids read more\" is:", options: ["A wish, not yet a clear goal", "A clear goal", "A deadline", "A task"], answer: 0, why: "It has no how much or by when." },
      { q: "A deadline is:", options: ["A goal", "A meeting", "A type of talk", "The date by which something must be done"], answer: 3, why: "Deadlines say by when." },
      { q: "A good prompt to sharpen your goal is:", options: ["\"Write my goal for me without asking.\"", "\"Ask me questions first, then help me add what, how much and by when.\"", "\"Goal.\"", "\"Make it impossible.\""], answer: 1, why: "Questions help the AI understand your real situation." },
      { q: "The four problem-solving steps are:", options: ["Name it, list options, pick one, check how it went", "Panic, blame, quit, forget", "Ask AI, copy it, send it, done", "Wait, wait, wait, hope"], answer: 0, why: "These steps keep you calm and clear." },
      { q: "When asking AI for options, also ask for:", options: ["Your password", "A good point and a risk for each", "Only one option", "A guarantee"], answer: 1, why: "Seeing the risk helps you choose wisely." },
      { q: "When describing a problem to AI, you leave out:", options: ["The problem", "The goal", "Private details about people", "The deadline"], answer: 2, why: "Keep private details about others out of AI." },
      { q: "After trying a solution, you should:", options: ["Never think about it again", "Blame the AI", "Do the same thing every time", "Look back: did it work, and what would you change?"], answer: 3, why: "Looking back helps you improve." },
      { q: "A short talk should have:", options: ["Why it matters, what you want to do, and your ask", "Only jokes", "Twenty minutes of facts", "No ask at all"], answer: 0, why: "That shape moves people to act." },
      { q: "A one-minute talk is about:", options: ["10 words", "120 to 150 words", "1,000 words", "5 pages"], answer: 1, why: "People speak about 120 to 150 words in a minute." },
      { q: "To calm nerves before speaking:", options: ["Talk very fast", "Look at the floor", "Breathe slowly and speak a little slower", "Skip practice"], answer: 2, why: "Slow breathing and pace help confidence." },
      { q: "How can AI help with your talk?", options: ["It gives the talk for you", "It makes it longer", "It removes your ask", "It suggests ways to make it clearer and stronger"], answer: 3, why: "AI can give feedback on your draft." },
      { q: "Feedback is:", options: ["Information that helps someone do better", "A punishment", "A type of food", "A complaint"], answer: 0, why: "Feedback is for growth." },
      { q: "A good feedback shape is:", options: ["Only criticism", "One thing that went well, one thing to try next time, and thanks", "Silence", "A long list of mistakes"], answer: 1, why: "Balanced feedback is easier to hear." },
      { q: "Good leaders ask for feedback:", options: ["Never", "Only once a year", "Often", "Only from the AI"], answer: 2, why: "Asking often helps leaders grow." },
      { q: "A project is:", options: ["A one-word wish", "A single phone call", "A feeling", "A goal with a start and an end"], answer: 3, why: "Projects have a clear start and finish." },
      { q: "When AI breaks your project into tasks, also ask it to:", options: ["List possible problems and how to handle them", "Do every task", "Pick your helpers", "Cancel it"], answer: 0, why: "Planning for problems makes the project stronger." },
      { q: "What keeps helpers involved in a project?", options: ["Never thanking them", "Letting them pick tasks, checking in, and thanking them", "Doing it all yourself", "Changing dates without telling them"], answer: 1, why: "People stay when they feel valued." },
      { q: "Which is a future skill that helps almost everyone?", options: ["Ignoring change", "Avoiding teamwork", "Using digital tools and AI safely", "Never learning"], answer: 2, why: "Digital and AI skills help across jobs." },
      { q: "In the final task, after practicing your talk with AI, you:", options: ["Stop there", "Make it longer", "Send it to strangers", "Get feedback and improve it once"], answer: 3, why: "Improving after feedback finishes the skill." }
    ]
  }
};
