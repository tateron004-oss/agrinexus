"use strict";

// Koach Learn course: shared -> "Time Management and Goal Setting" (new life and career skills course the owner asked for on 28 October 2026). Listed for Athletes, Entrepreneurs, Re-Entry, Small Business,
// Youth, Veterans (military), Workforce Development, Undeserved Community and Leadership Development, so it uses mixed, everyday examples: training, school, a job search, a side business, family.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "time-management-goals",
  category: "Athletes",
  name: "Time Management and Goal Setting",
  skills: "Writing SMART goals, Breaking goals into weekly steps, Planning a week, Choosing priorities, Beating procrastination, Tracking progress",
  outcome: "turn something you want into a SMART goal, break it into weekly steps, plan your week around your top priorities, get started even when you do not feel like it, and track your progress with a short weekly review.",
  about: [
    "Everyone gets the same 24 hours. The difference is how clearly we know what we want and how we use the time we have. Good news: planning is a skill, and anyone can learn it.",
    "This course is for athletes balancing training and school, workers and job seekers, business owners, veterans starting something new, young people, and anyone rebuilding their routine after a big change such as coming home from prison. The examples are everyday ones: a job search, a fitness goal, a small business, saving money, finishing a class.",
    "You will write one real goal, break it into steps, plan a week, choose what matters most, beat procrastination and track your progress. You can use paper, a free phone calendar or an app; an AI assistant can help you break a goal into steps, but you make the plan. Each lesson takes about five minutes. There is a knowledge check after each chapter and a 20-question quiz at the end."
  ],
  finalTask: "Write one SMART goal for the next four weeks. Break it into weekly steps, plan next week with time blocks for your top three priorities, track what you actually do for seven days, and finish with a five-minute weekly review that says what worked and what you will change.",
  chapters: [
    {
      name: "Chapter 1: Setting goals and planning",
      lessons: [
        {
          title: "Writing a SMART goal",
          minutes: 5,
          goal: "Turn a vague wish into a SMART goal.",
          text: [
            "\"Get in shape\" or \"find a job\" are wishes. They are a good start, but they do not tell you what to do today. A SMART goal turns a wish into something you can act on and measure.",
            "SMART stands for Specific (exactly what), Measurable (a number or a clear finish line), Achievable (stretching but possible), Relevant (it matters to you) and Time-bound (a deadline). \"Find a job\" becomes \"Apply to 10 warehouse or kitchen jobs by 30 November.\" \"Get faster\" becomes \"Cut 2 seconds off my 400-metre time by the end of the season.\"",
            "Notice the job goal is about what you control (applying), not what you do not (being hired). Goals you control keep you moving even when others are slow to answer."
          ],
          steps: ["Write your wish in a few words.", "Make it specific: what exactly?", "Add a number or a clear finish line.", "Check it is possible with the time and help you have.", "Check it matters to you.", "Add a deadline."],
          words: [["SMART goal", "a goal that is Specific, Measurable, Achievable, Relevant and Time-bound."], ["Deadline", "the date by which something should be done."]],
          slides: [
            { title: "Wish vs goal", bullets: ["Wish: \"Find a job\"", "Goal: \"Apply to 10 kitchen jobs by 30 November\""] },
            { title: "SMART", bullets: ["Specific and Measurable", "Achievable and Relevant", "Time-bound: it has a deadline"] },
            { title: "More examples", bullets: ["\"Save $200 by 31 December\"", "\"Cut 2 seconds off my 400 m by season's end\"", "\"Get 5 paying customers this month\""] },
            { title: "Aim at what you control", bullets: ["Applying, not being hired", "Practising, not winning", "Calling customers, not their answer"] }
          ],
          tryIt: "Write one wish you have right now. Then rewrite it as a SMART goal for the next four weeks. Check each letter: S, M, A, R, T.",
          youCanNow: "turn a vague wish into a SMART goal with a number and a deadline."
        },
        {
          title: "Breaking a goal into weekly steps",
          minutes: 5,
          goal: "Break a SMART goal into weekly steps and a first small action.",
          text: [
            "A four-week goal can feel big. Breaking it into weekly steps makes it doable. Work backwards from the deadline: what needs to be true by the end of week 4, week 3, week 2 and week 1?",
            "For \"Apply to 10 jobs by 30 November\": week 1, update the résumé and list 15 places; week 2, apply to 3; week 3, apply to 4; week 4, apply to 3 and follow up on all. For a small business goal of 5 new customers: week 1, list 30 people to contact; weeks 2 to 4, contact 10 a week.",
            "Then pick the very next action, small enough to do in 15 minutes or less, such as \"Open my résumé and fix the phone number.\" An AI assistant can suggest steps if you are stuck; ask it, then cut its list down to what fits your real week."
          ],
          steps: ["Write the goal and deadline at the top.", "Work backwards: what must be done each week?", "Write one step per week.", "Write the next small action you can do in 15 minutes.", "Do that action today if you can."],
          words: [["Milestone", "a checkpoint on the way to a goal, such as the end of each week."], ["Next action", "the very next small, physical thing you will do."]],
          slides: [
            { title: "Big goals feel heavy", bullets: ["Break them into weekly steps", "Work backwards from the deadline"] },
            { title: "Example: 10 job applications", bullets: ["Week 1: résumé + list 15 places", "Weeks 2-4: apply to 3, 4, then 3", "Week 4: follow up on all"] },
            { title: "The next action", bullets: ["Small: 15 minutes or less", "Physical: open, call, write, fix", "\"Open my résumé and fix the phone number\""] },
            { title: "AI can help", bullets: ["Ask it to suggest steps", "Cut the list to what fits your week"] }
          ],
          tryIt: "Take your SMART goal from Lesson 1. Write one step for each of the four weeks, then write the next small action and do it now if you can.",
          youCanNow: "break a goal into weekly steps and choose a small next action."
        },
        {
          title: "Planning your week",
          minutes: 5,
          goal: "Plan a week with time blocks for what matters most.",
          text: [
            "A plan for the week turns goals into time on the calendar. Choose a set time, such as Sunday evening, and spend 15 minutes on it.",
            "First, put in what is fixed: work shifts, classes, practices, appointments, parole or probation check-ins, family duties and sleep. Then add time blocks for your goal steps, such as \"Tuesday 6-7 pm: apply to 2 jobs.\" Treat these blocks like appointments with yourself.",
            "Leave some empty space. Things go wrong, buses run late and kids get sick. A plan with no room for surprises breaks on day one. Use whatever you will actually look at: a paper planner, a whiteboard, or a free calendar on your phone with reminders."
          ],
          steps: ["Pick a weekly planning time (for example Sunday evening).", "Add the fixed things: work, school, practice, appointments, sleep.", "Add time blocks for this week's goal step.", "Leave some empty space for surprises.", "Set reminders for the most important blocks."],
          words: [["Time block", "a set piece of time on your calendar for one task."], ["Buffer", "spare time you leave empty for surprises."]],
          slides: [
            { title: "Plan once a week", bullets: ["Same time each week, about 15 minutes", "For example, Sunday evening"] },
            { title: "Fixed things first", bullets: ["Work, school, practice", "Appointments and check-ins", "Family duties and sleep"] },
            { title: "Then your goal blocks", bullets: ["\"Tuesday 6-7 pm: apply to 2 jobs\"", "Treat it like an appointment"] },
            { title: "Leave room", bullets: ["Keep some empty buffer time", "Use paper or a phone calendar", "Set reminders for key blocks"] }
          ],
          tryIt: "Plan next week on paper or a phone calendar. Put in the fixed things, then add at least two time blocks for your goal step and one empty buffer block.",
          youCanNow: "plan a week with fixed commitments, goal time blocks and buffer time."
        }
      ],
      check: {
        title: "Knowledge Check 1: Setting goals and planning",
        questions: [
          { q: "Which is a SMART goal?", options: ["\"Get healthier\"", "\"Be better with money\"", "\"Walk 30 minutes, 5 days a week, for the next 4 weeks\"", "\"Try harder at work\""], answer: 2, why: "It is specific, measurable and has a time frame." },
          { q: "What does the T in SMART stand for?", options: ["Time-bound", "Tough", "Team", "Trusted"], answer: 0, why: "A SMART goal has a deadline." },
          { q: "Your goal is 10 job applications in 4 weeks. What is a good next action?", options: ["Get hired tomorrow", "Open your résumé and fix the phone number", "Think about it next month", "Apply to 100 jobs today"], answer: 1, why: "A next action is small, physical and doable now." },
          { q: "When you plan a week, what goes on the calendar first?", options: ["Fun extras", "Nothing; just see what happens", "Only goal blocks", "Fixed things like work, school, practice and sleep"], answer: 3, why: "Fixed commitments come first; goal blocks fit around them." },
          { q: "Why leave empty buffer time in your week?", options: ["Things go wrong and plans need room", "To waste time", "Because planning is optional", "So you never finish"], answer: 0, why: "A plan with no room breaks at the first surprise." }
        ]
      }
    },
    {
      name: "Chapter 2: Getting it done",
      lessons: [
        {
          title: "Choosing priorities",
          minutes: 5,
          goal: "Sort tasks by urgent and important and choose your top three.",
          text: [
            "There is always more to do than time allows. Priorities decide what gets your best time. One simple tool sorts tasks into four boxes using two questions: Is it important (does it move my goals or protect my health, family, job or freedom)? Is it urgent (does it need doing now)?",
            "Important and urgent: do it now (a rent payment due today, a check-in appointment). Important, not urgent: schedule it (studying, training, building your business). Urgent, not important: keep it short or hand it off (many calls and messages). Neither: drop it (endless scrolling).",
            "Most growth lives in the important but not urgent box, and it is the easiest to skip. Each morning or evening, pick your top three tasks for the next day and do the most important one first, before messages pull you away."
          ],
          steps: ["List everything on your mind.", "Ask of each: is it important? Is it urgent?", "Put each task in one of four boxes: do now, schedule, keep short or hand off, drop.", "Pick your top three for tomorrow.", "Do the most important one first."],
          words: [["Priority", "something that matters more and gets done first."], ["Urgent", "needs doing soon."], ["Important", "moves your goals or protects what matters most."]],
          slides: [
            { title: "Two questions", bullets: ["Is it important?", "Is it urgent?"] },
            { title: "Four boxes", bullets: ["Important + urgent: do it now", "Important, not urgent: schedule it", "Urgent, not important: keep short or hand off", "Neither: drop it"] },
            { title: "Growth lives in box 2", bullets: ["Studying, training, building your business", "Easy to skip because it is not urgent", "Put it on the calendar"] },
            { title: "Top three", bullets: ["Pick three tasks for tomorrow", "Do the most important first", "Before messages pull you away"] }
          ],
          tryIt: "Write down ten things on your to-do list. Put each in one of the four boxes. Then choose your top three for tomorrow and circle the one you will do first.",
          youCanNow: "sort tasks by important and urgent and choose a top three for each day."
        },
        {
          title: "Beating procrastination",
          minutes: 5,
          goal: "Use simple tricks to start a task you have been putting off.",
          text: [
            "Procrastination is not laziness. We usually put things off because the task feels too big, unclear, boring or scary. The fix is to make starting easier.",
            "Four tricks that work. Shrink it: make the first step tiny, such as \"write one sentence of the cover letter.\" Use a timer: work for just 10 minutes; you can stop after, but often you keep going. Remove distractions: put the phone in another room or turn on do-not-disturb. Pair it: do the task at the same time and place each day, or with a study or workout partner.",
            "Be kind to yourself when you slip. Blaming yourself makes the task feel worse. Notice it, pick the tiny first step, and start again."
          ],
          steps: ["Name the task you are avoiding.", "Ask why: too big, unclear, boring or scary?", "Shrink it to a tiny first step.", "Set a timer for 10 minutes.", "Put your phone away and start.", "When the timer ends, choose: stop or keep going."],
          words: [["Procrastination", "putting off something you know you should do."], ["Do not disturb", "a phone setting that silences calls and alerts for a while."]],
          slides: [
            { title: "Why we put things off", bullets: ["Too big or unclear", "Boring", "Scary"] },
            { title: "Make starting easy", bullets: ["Shrink it to a tiny first step", "Set a 10-minute timer", "Phone away or on do-not-disturb"] },
            { title: "Build a habit", bullets: ["Same time and place each day", "A study or workout partner"] },
            { title: "When you slip", bullets: ["Be kind to yourself", "Pick the tiny first step", "Start again"] }
          ],
          tryIt: "Pick one task you have been avoiding. Shrink it to a tiny first step, put your phone away, set a 10-minute timer and start right now.",
          youCanNow: "start a task you have been avoiding by shrinking it, timing it and removing distractions."
        },
        {
          title: "Tracking progress and the weekly review",
          minutes: 5,
          goal: "Track your progress and adjust your plan in a five-minute weekly review.",
          text: [
            "What gets tracked gets done. A simple tracker shows you are moving, which keeps you going. It can be a list on paper with a tick for each day you did your step, a number in your phone notes (applications sent, money saved, miles run), or a free habit app.",
            "Once a week, do a five-minute review. Ask three questions: What did I get done? What got in the way? What will I change next week? Then plan the next week using what you learned.",
            "If you keep missing a step, the plan is the problem, not you. Make the step smaller, move the time, or change the deadline. Coaches change the training plan when an athlete is not progressing; do the same for yourself. Celebrate small wins too."
          ],
          steps: ["Choose one number or tick to track each day.", "Record it at the same time each day.", "Once a week, ask: what got done, what got in the way, what will I change?", "Adjust next week's plan.", "Celebrate one small win."],
          words: [["Tracker", "a simple record of what you did each day."], ["Weekly review", "a short look back each week to learn and adjust your plan."]],
          slides: [
            { title: "What gets tracked gets done", bullets: ["Tick a list, note a number or use a habit app", "Seeing progress keeps you going"] },
            { title: "Five-minute weekly review", bullets: ["What did I get done?", "What got in the way?", "What will I change next week?"] },
            { title: "Missing steps?", bullets: ["Change the plan, not your worth", "Smaller step, new time or new deadline"] },
            { title: "Keep going", bullets: ["Celebrate small wins", "Plan next week with what you learned"] }
          ],
          tryIt: "Final task: track your goal step every day for seven days. On day 7, answer the three review questions in writing and plan the next week with at least one change.",
          youCanNow: "track progress on a goal and use a weekly review to adjust your plan."
        }
      ],
      check: {
        title: "Knowledge Check 2: Getting it done",
        questions: [
          { q: "Studying for a test in three weeks is:", options: ["Urgent and not important", "Neither", "Important but not urgent", "Something to drop"], answer: 2, why: "It matters but is not due today, so you schedule it." },
          { q: "What should you do with an important and urgent task, like a check-in appointment today?", options: ["Drop it", "Schedule it for next month", "Hand it to a friend", "Do it now"], answer: 3, why: "Important and urgent tasks get done first." },
          { q: "You keep putting off a big report. What is a good first step?", options: ["Wait until you feel ready", "Write just the first sentence with a 10-minute timer", "Do everything at once at midnight", "Check social media first"], answer: 1, why: "Shrinking the task and using a timer makes starting easier." },
          { q: "Which question belongs in a weekly review?", options: ["What will I change next week?", "Who can I blame?", "How can I avoid planning?", "Why am I so bad at this?"], answer: 0, why: "The review looks back to adjust the plan." },
          { q: "You missed your step three weeks in a row. What is the best move?", options: ["Quit the goal", "Blame yourself", "Change the plan: smaller step, new time or new deadline", "Keep the same plan and hope"], answer: 2, why: "When steps keep slipping, adjust the plan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Time Management and Goal Setting",
    questions: [
      { q: "SMART stands for:", options: ["Simple, Modern, Active, Ready, Tough", "Specific, Measurable, Achievable, Relevant, Time-bound", "Strong, Mighty, Able, Rich, Tall", "Short, Monthly, Annual, Real, Total"], answer: 1, why: "Those five letters make a goal clear and doable." },
      { q: "Which goal is measurable?", options: ["\"Be a better player\"", "\"Do more marketing\"", "\"Feel happier\"", "\"Save $50 a week for 8 weeks\""], answer: 3, why: "It has a number you can check." },
      { q: "Why aim a goal at what you control?", options: ["It keeps you moving even when others are slow", "It is easier to cheat", "It sounds better", "Others will do it for you"], answer: 0, why: "You can always act on what you control." },
      { q: "Which is a better job-search goal?", options: ["\"Get hired by Friday\"", "\"Hope someone calls\"", "\"Apply to 3 jobs this week\"", "\"Think about jobs\""], answer: 2, why: "Applying is in your control and measurable." },
      { q: "Breaking a goal into weekly steps works best when you:", options: ["Start with the hardest week", "Work backwards from the deadline", "Skip the first week", "Keep it all in your head"], answer: 1, why: "Working backwards shows what each week needs." },
      { q: "A \"next action\" should be:", options: ["Small, physical and doable in about 15 minutes", "As big as possible", "Something for next year", "Vague so you have options"], answer: 0, why: "Small actions are easy to start." },
      { q: "How can an AI assistant help with goals?", options: ["It does the goal for you", "It decides your goals", "It replaces your calendar", "It can suggest steps you then trim to your real week"], answer: 3, why: "AI can help brainstorm; you make the plan." },
      { q: "When is a good time to plan your week?", options: ["Never", "The same time each week, like Sunday evening", "Only when things go wrong", "Once a year"], answer: 1, why: "A regular planning time builds the habit." },
      { q: "A time block is:", options: ["A set piece of time on your calendar for one task", "A break from work", "A type of alarm", "A sports drill"], answer: 0, why: "It reserves time for a specific task." },
      { q: "Which belongs in your plan before goal blocks?", options: ["Social media time", "Optional extras", "Fixed things like work shifts, practice and appointments", "Nothing"], answer: 2, why: "Fixed commitments go in first." },
      { q: "A plan with no empty time usually:", options: ["Works perfectly", "Breaks at the first surprise", "Saves the most time", "Makes you rich"], answer: 1, why: "Buffer time absorbs surprises." },
      { q: "Endless scrolling is usually:", options: ["Important and urgent", "Important, not urgent", "Urgent, not important", "Neither important nor urgent"], answer: 3, why: "It neither moves goals nor needs doing now." },
      { q: "Where does most long-term growth happen?", options: ["Important but not urgent tasks", "Urgent but not important tasks", "Tasks you drop", "Random tasks"], answer: 0, why: "Training, study and building happen here, so schedule them." },
      { q: "Why do your most important task first each day?", options: ["It is always the easiest", "Messages and surprises can pull you away later", "It makes the day longer", "Nobody else will check"], answer: 1, why: "Doing it first protects it from distractions." },
      { q: "We often procrastinate because a task feels:", options: ["Too small and clear", "Too fun", "Too big, unclear, boring or scary", "Already done"], answer: 2, why: "Those feelings make starting hard." },
      { q: "The 10-minute timer trick means:", options: ["Work only 10 minutes a week", "Start for 10 minutes; then choose to stop or continue", "Finish everything in 10 minutes", "Wait 10 minutes before starting"], answer: 1, why: "A short timer lowers the barrier to start." },
      { q: "Which helps you remove distractions?", options: ["Keeping every alert on", "Working in front of the TV", "Checking messages every minute", "Putting your phone in another room or on do-not-disturb"], answer: 3, why: "Fewer distractions make focus easier." },
      { q: "What is a simple way to track progress?", options: ["Tick a list each day you do your step", "Try to remember it", "Ask a stranger", "Track nothing"], answer: 0, why: "A visible record shows you are moving." },
      { q: "In the weekly review, you ask what got done, what got in the way, and:", options: ["Who is to blame", "What will I change next week", "How to skip next week", "What others did"], answer: 1, why: "The review leads to a better next week." },
      { q: "Your coach changes your training when you stop improving. What does that teach about your own plans?", options: ["Never change a plan", "Give up when progress stalls", "Adjust the plan when it is not working", "Plans do not matter"], answer: 2, why: "Good plans change based on results." }
    ]
  }
};
