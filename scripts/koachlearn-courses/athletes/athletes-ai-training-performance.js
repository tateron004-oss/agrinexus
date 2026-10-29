"use strict";

// Koach Learn course: Athletes -> "AI for Training and Performance". Skill-building course: by the end the student can DO the skill in `outcome`.
// Shape: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "athletes-ai-training-performance",
  category: "Athletes",
  name: "AI for Training and Performance",
  skills: "Setting a measurable training goal, Logging training data, Reading a simple training trend, Drafting a training-week question for your coach with AI, Spotting unsafe AI training advice",
  outcome: "set one measurable performance goal, log four weeks of training data in a sheet, use an AI assistant to summarize the trend, and bring a clear, safe question about your training to your coach.",
  about: [
    "This course is for athletes who want to train smarter and coaches who want their athletes to understand their own numbers. It is general education, not a training program: your coach and athletic trainer set your training.",
    "You will set a goal you can measure, track the right numbers, see what they say, and use an AI assistant to organize your data and prepare better conversations with your coach.",
    "Each lesson is about five minutes with a \"Try it now\" task. A knowledge check closes each chapter, and a 20-question quiz closes the course."
  ],
  finalTask: "Pick one measurable goal, log at least four sessions of training data in a Google Sheet (date, what you did, effort 1-10, result), ask an AI assistant to describe the trend in plain words, and write three questions about your next training block to bring to your coach.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "High school, college and club athletes who want to train smarter, and coaches who want their athletes to understand their own numbers.",
    startingPoint: "Train regularly under a coach and use a smartphone every day. Many have goals like \"get faster\" but no measurable target, no steady training log, and little practice reading a chart or judging online training advice.",
    gap: "Without a measurable goal and a simple log, athletes cannot see whether training is working, and AI or online plans can push unsafe advice. Clear numbers and safe questions make coach conversations better and protect the athlete's health.",
    constraints: [
      "Plain language at about a grade 7 reading level",
      "A phone or computer with free Google Sheets and a free AI assistant",
      "About 60 minutes of lessons, plus four weeks of logging alongside normal training",
      "General education only: the coach and athletic trainer set training, loads and return from injury",
      "Health data and records stay private and are never pasted into an AI assistant"
    ],
    prerequisites: "None. \"AI Tools for Athletes\" helps if you have never used Google Sheets."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a vague training goal", action: "rewrite it as one measurable goal with a number, a date and a test", standard: "with all four parts present and the goal agreed with your coach" },
    { id: "O2", condition: "Using Google Sheets", action: "set up and keep a training log with Date, Session, Effort and Result", standard: "with a row filled in after every session for at least four sessions" },
    { id: "O3", condition: "Given a chart of your own training log", action: "describe the trend in one or two sentences and compare effort with result", standard: "naming the direction correctly and checking any AI math yourself" },
    { id: "O4", condition: "Given a list of training tasks", action: "identify which tasks AI can help with and which belong to your coach or athletic trainer", standard: "getting at least 4 of 5 right" },
    { id: "O5", condition: "Given AI or online training advice", action: "identify red flags such as training through pain, cutting water or risky supplements", standard: "spotting every red flag and taking it to your coach or athletic trainer instead of following it" },
    { id: "O6", condition: "Using your goal, your log and an AI assistant", action: "write a three-sentence coach update and three questions about your next training block", standard: "in your own words, with no health records shared and your coach's answer used to update your plan" }
  ],
  chapters: [
    {
      name: "Chapter 1: Goals and data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Setting a goal you can measure",
          minutes: 5,
          goal: "Turn a vague goal into a measurable one with a date.",
          text: [
            "\"Get faster\" is a wish. \"Run the 40-yard dash 0.1 seconds faster by the end of the preseason, timed the same way each time\" is a goal you can measure.",
            "A good training goal names one thing, a number, a date, and how it will be measured. It should be agreed with your coach so it fits the team plan.",
            "An AI assistant can help you rewrite a vague goal. Try: \"Turn my goal 'get stronger for soccer' into one measurable goal with a date. Ask me questions if you need more information.\""
          ],
          steps: ["Write your goal in your own words.", "Add one number to measure.", "Add a date.", "Say how and when it will be tested.", "Agree it with your coach."],
          words: [["Measurable", "something you can count or time, so you know if it changed."], ["Baseline", "your starting number before you train for the goal."]],
          slides: [
            { title: "Wish vs goal", bullets: ["Wish: \"get faster\"", "Goal: \"40-yard dash 0.1 s faster by end of preseason\""] },
            { title: "A goal has", bullets: ["One thing", "A number and a date", "How it will be tested"] },
            { title: "Use AI to sharpen it", bullets: ["\"Turn my goal into a measurable one\"", "Then agree it with your coach"] }
          ],
          tryIt: "Write one vague goal. Ask an AI assistant to make it measurable with a date. Edit it so it is true to you, then write your baseline number if you know it.",
          youCanNow: "write a measurable training goal with a number, a date and a test.",
          quickCheck: [
            { objective: "O1", q: "Which part turns \"get stronger\" into a measurable goal?", options: ["Adding the word \"really\"", "Adding a number, a date and how it will be tested", "Posting it online", "Making it longer"], answer: 1, why: "A measurable goal names one thing, a number, a date and how it is measured." },
            { objective: "O1", q: "You wrote a measurable goal with AI help. What do you do next?", options: ["Start training for it alone", "Ask the AI to approve it", "Keep it secret", "Agree it with your coach"], answer: 3, why: "Your goal should be agreed with your coach so it fits the team plan." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Logging the right training data",
          minutes: 5,
          goal: "Set up a simple training log that you will actually keep.",
          text: [
            "Data is only useful if you collect it the same way every time. A simple log beats a fancy app you stop using after a week.",
            "Four columns are enough to start: Date, Session (what you did), Effort (how hard it felt, 1 to 10), and Result (the number for your goal). Some athletes add sleep hours or a short note.",
            "Wearables like watches and heart-rate straps can add data, but they are not perfect. Treat their numbers as clues, not facts, and keep your health data private."
          ],
          steps: ["Open Google Sheets.", "Make columns: Date, Session, Effort (1-10), Result.", "Fill one row after every session.", "Keep it in the same place on your phone so it takes one minute."],
          words: [["Effort rating", "a 1 to 10 score for how hard a session felt; coaches often call this RPE (rating of perceived exertion)."], ["Wearable", "a device you wear, like a watch, that measures things like heart rate or steps."]],
          slides: [
            { title: "Simple beats fancy", bullets: ["Same way, every time", "One minute after each session"] },
            { title: "Four columns", bullets: ["Date", "Session", "Effort 1-10", "Result"] },
            { title: "About wearables", bullets: ["Useful clues, not perfect facts", "Keep health data private"] }
          ],
          tryIt: "Create your training log in Google Sheets with the four columns. Fill in your last two or three sessions from memory or your notes.",
          youCanNow: "keep a simple, consistent training log.",
          quickCheck: [
            { objective: "O2", q: "What goes in the Result column of your log?", options: ["The number for your goal", "How hard it felt", "What you ate", "Your coach's name"], answer: 0, why: "Result holds the number you are tracking for your goal." },
            { objective: "O2", q: "You keep forgetting to fill in your log. What helps most?", options: ["Switch to a fancier app", "Fill it once a month from memory", "Keep it in the same place on your phone and fill one row right after each session", "Stop logging"], answer: 2, why: "A simple log filled in the same way every time is the one you will keep." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reading your training trend",
          minutes: 5,
          goal: "Read a chart of your data and describe what it shows in one or two sentences.",
          text: [
            "After a few weeks, chart your Result column by date. Look at the direction: up, down or flat. One bad day does not mean much; look at the overall line.",
            "Compare Effort and Result. If effort keeps going up but results stay flat or drop, you may be tired, and that is something to tell your coach.",
            "You can paste your table (no names or health records) into an AI assistant and ask: \"Describe the trend in this training data in plain words. What questions should I ask my coach?\" Check its math yourself."
          ],
          steps: ["Select Date and Result and insert a line chart.", "Say the direction: up, down or flat.", "Compare Effort with Result.", "Write a one-sentence summary."],
          words: [["Trend", "the overall direction of your numbers over time."], ["Plateau", "when results stop improving for a while."]],
          slides: [
            { title: "Look at the line", bullets: ["Up, down or flat?", "One bad day is not a trend"] },
            { title: "Effort vs result", bullets: ["Effort up, result flat or down?", "You may be tired: tell your coach"] },
            { title: "AI can describe it", bullets: ["Paste the table, no names or health records", "Check its math yourself"] }
          ],
          tryIt: "Chart your Result column. Write one sentence describing the trend. Then ask an AI assistant to describe it and compare its sentence with yours.",
          youCanNow: "chart your training data and describe the trend in plain words.",
          quickCheck: [
            { objective: "O3", q: "What do you look at first on your training chart?", options: ["The single worst day", "The colors", "The overall direction: up, down or flat", "The chart title"], answer: 2, why: "One bad day does not mean much; the overall line shows the trend." },
            { objective: "O3", q: "You paste your table into an AI assistant. What do you remove first?", options: ["Names and health records", "The dates", "The Result column", "Nothing"], answer: 0, why: "Keep names and health records out of AI tools." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Goals and data",
        questions: [
          { objective: "O1", q: "Which is a measurable goal?", options: ["Get better", "Be a beast", "Make 16 of 20 free throws by January 15, tested at practice", "Work hard"], answer: 2, why: "It has a number, a date and a test." },
          { objective: "O1", q: "What is a baseline?", options: ["Your starting number before you train for the goal", "The back line of the court", "Your best ever day", "The team's average"], answer: 0, why: "A baseline shows where you started." },
          { objective: "O2", q: "Which training log is most useful?", options: ["A fancy one you quit after a week", "One you fill in once a season", "One you guess", "A simple one you fill in every time"], answer: 3, why: "Consistent data is what makes trends meaningful." },
          { objective: "O2", q: "How should you treat numbers from a wearable?", options: ["As perfect facts", "As useful clues that are not perfect", "As medical advice", "As something to post publicly"], answer: 1, why: "Wearables help but can be off." },
          { objective: "O3", q: "Your effort ratings keep rising but your times are getting slower. What should you do?", options: ["Train twice as hard", "Tell your coach; you may be tired", "Stop logging", "Ignore it"], answer: 1, why: "Rising effort with falling results can signal fatigue, which your coach should know." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI with your coach",
      lessons: [
        {
          objectives: ["O4"],
          title: "What AI can and cannot do for training",
          minutes: 4,
          goal: "Sort training tasks into ones AI can help with and ones that belong to your coach or athletic trainer.",
          text: [
            "AI assistants are good at organizing: turning notes into a table, explaining a training term, summarizing your log, or writing questions for your coach.",
            "They are not good at knowing your body. They cannot see your form, your injury history or how you slept, and general plans from the internet may not fit your age, level or season.",
            "So use AI to understand and prepare, and let your coach and athletic trainer decide your workouts, loads and return from injury."
          ],
          words: [["Training load", "how much and how hard you train over time."], ["Athletic trainer", "a licensed health professional who prevents, treats and helps athletes recover from injuries."]],
          slides: [
            { title: "AI is good at", bullets: ["Organizing notes into tables", "Explaining training words", "Summarizing your log", "Writing questions for your coach"] },
            { title: "AI cannot", bullets: ["See your form", "Know your injury history", "Know how you feel today"] },
            { title: "Who decides", bullets: ["Coach: workouts and loads", "Athletic trainer: injury and return to play"] }
          ],
          tryIt: "Ask an AI assistant to explain one training word you have heard (for example \"periodization\" or \"deload week\") in simple words. Write one question about it for your coach.",
          youCanNow: "say which training tasks AI can help with and which belong to your coach or athletic trainer.",
          quickCheck: [
            { objective: "O4", q: "Which of these can an AI assistant do well for training?", options: ["See your form at practice", "Know your injury history", "Decide your return from injury", "Explain a training term"], answer: 3, why: "AI is good at organizing and explaining, not at knowing your body." },
            { objective: "O4", q: "An AI assistant gives you a heavier lifting plan than your coach wrote. What do you do?", options: ["Follow the AI plan", "Use it to prepare a question and let your coach decide", "Do both plans", "Stop lifting"], answer: 1, why: "Use AI to understand and prepare; your coach decides workouts and loads." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Spotting unsafe AI training advice",
          minutes: 5,
          goal: "Recognize red flags in AI or online training advice.",
          text: [
            "AI and online plans can give advice that is too much, too fast, or wrong for young or injured athletes. You need to spot it.",
            "Red flags: training through sharp pain; big jumps in training all at once; cutting food or water to make weight; supplements promising fast results; \"no rest days\"; and any plan that ignores what your coach wrote.",
            "Supplements are a special risk: they are not checked by the FDA before they are sold, and some contain banned substances. Talk with your athletic trainer or a registered dietitian before taking any."
          ],
          steps: ["Read the advice slowly.", "Check it against the red-flag list.", "If any red flag appears, do not follow it.", "Take it to your coach or athletic trainer."],
          words: [["Red flag", "a warning sign that something is unsafe or wrong."], ["Supplement", "a pill, powder or drink sold to add something to your diet."]],
          slides: [
            { title: "Red flags", bullets: ["Train through sharp pain", "Big jumps all at once", "Cut food or water to make weight", "\"No rest days\""] },
            { title: "Supplements", bullets: ["Not checked by the FDA before sale", "Some contain banned substances", "Ask your athletic trainer or a dietitian first"] },
            { title: "When you see one", bullets: ["Do not follow it", "Take it to your coach or athletic trainer"] }
          ],
          sources: [{ name: "USADA: Supplement Connect (supplement risks for athletes)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Ask an AI assistant for \"a plan to get faster in two weeks\". Read it and circle any red flags. Write what you would ask your coach about it.",
          youCanNow: "spot unsafe training advice and take it to the right person.",
          quickCheck: [
            { objective: "O5", q: "Which of these is a red flag in training advice?", options: ["A rest day each week", "A plan that matches what your coach wrote", "Big jumps in training all at once", "Warming up before practice"], answer: 2, why: "Too much, too fast is one of the red flags in the lesson." },
            { objective: "O5", q: "A teammate shares a supplement that promises fast results. What do you do?", options: ["Talk to your athletic trainer or a registered dietitian first", "Try a small amount", "Buy it if the reviews are good", "Ask the AI to approve it"], answer: 0, why: "Supplements are not checked by the FDA before sale and some contain banned substances." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Preparing a training talk with your coach",
          minutes: 5,
          goal: "Use AI to prepare a short, clear update and three questions for your coach.",
          text: [
            "Coaches are busy. A short, clear update with your numbers makes the conversation better: what your goal is, what your data shows, and what you want to ask.",
            "Ask an AI assistant: \"Here is my goal and my training log. Write a three-sentence update for my coach and suggest three questions I could ask about my next training block.\" Then edit it so it sounds like you.",
            "Bring the update to your coach in person or in the way your team prefers. Listen, take notes, and update your plan with what your coach says, not what the AI said."
          ],
          steps: ["Paste your goal and log (no health records).", "Ask for a three-sentence update and three questions.", "Edit it in your own words.", "Share it with your coach the way your team prefers.", "Update your plan with your coach's answer."],
          words: [["Training block", "a set of weeks with one main training focus."], ["Update", "a short message that says where you are now."]],
          slides: [
            { title: "A good update", bullets: ["My goal", "What my data shows", "My questions"] },
            { title: "Use AI to draft", bullets: ["Three-sentence update", "Three questions", "Edit it into your own words"] },
            { title: "Then", bullets: ["Talk with your coach", "Take notes", "Follow your coach's plan"] }
          ],
          tryIt: "Final task: log at least four sessions, ask an AI assistant to describe your trend, and write a three-sentence update with three questions for your coach.",
          youCanNow: "turn your training data into a clear update and questions for your coach.",
          quickCheck: [
            { objective: "O6", q: "What three things does a good coach update cover?", options: ["Your goal, what your data shows and what you want to ask", "Your social media, sleep and grades", "Other players' stats", "Only your best day"], answer: 0, why: "A short update gives your goal, your data and your questions." },
            { objective: "O6", q: "Your coach's answer differs from the AI's suggestion. What do you do?", options: ["Follow the AI", "Ask a different AI", "Ignore both", "Update your plan with what your coach said"], answer: 3, why: "Update your plan with your coach's answer, not what the AI said." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI with your coach",
        questions: [
          { objective: "O4", q: "Which task is AI good at for training?", options: ["Seeing your form in person", "Clearing you to return from injury", "Knowing how you slept", "Summarizing your training log"], answer: 3, why: "Organizing and summarizing is a strength of AI." },
          { objective: "O4", q: "Who decides when you return from an injury?", options: ["Your athletic trainer or doctor", "An AI assistant", "A teammate", "A fitness influencer"], answer: 0, why: "Return to play is a health decision for qualified professionals." },
          { objective: "O5", q: "Which is a red flag in training advice?", options: ["Rest days each week", "Warming up first", "Training through sharp pain", "Asking your coach"], answer: 2, why: "Sharp pain is a signal to stop and get checked." },
          { objective: "O5", q: "Why are supplements risky for athletes?", options: ["They are always banned", "They are tested by your coach", "They taste bad", "They are not checked by the FDA before sale, and some contain banned substances"], answer: 3, why: "USADA warns that supplements can be contaminated or mislabeled." },
          { objective: "O6", q: "After talking with your coach, whose plan do you follow?", options: ["The AI's", "Your coach's", "A random video's", "Your rival's"], answer: 1, why: "The coach sets training; AI helps you prepare." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Training and Performance",
    questions: [
      { objective: "O1", q: "\"Get faster\" is:", options: ["A perfect goal", "A training log", "A wish, not a measurable goal", "A drill"], answer: 2, why: "It has no number, date or test." },
      { objective: "O1", q: "A good training goal includes:", options: ["One thing, a number, a date and a test", "Only a feeling", "Your password", "Ten goals at once"], answer: 0, why: "Those parts make it measurable." },
      { objective: "O1", q: "Who should agree your goal with you?", options: ["Your coach", "A stranger online", "An AI only", "Nobody"], answer: 0, why: "Your goal should fit the team's plan." },
      { objective: "O2", q: "What should your first training log have?", options: ["Fifty columns", "Your medical records", "Date, Session, Effort and Result", "Only photos"], answer: 2, why: "Four simple columns are enough to start." },
      { objective: "O2", q: "An effort rating of 1 to 10 measures:", options: ["Your height", "How hard a session felt", "Your grades", "Your followers"], answer: 1, why: "It is a quick score for perceived effort." },
      { objective: "O2", q: "Numbers from a watch or strap are:", options: ["Always exact", "Medical diagnoses", "Meaningless", "Useful clues that can be off"], answer: 3, why: "Wearables help, but treat them as clues." },
      { objective: "O3", q: "When reading your chart, you should focus on:", options: ["Your single worst day", "The chart color", "The overall direction of the line", "Other athletes' charts"], answer: 2, why: "The trend matters more than one day." },
      { objective: "O3", q: "Results are flat for weeks. This is called:", options: ["A sprint", "A baseline", "A wearable", "A plateau"], answer: 3, why: "A plateau is a stretch with no improvement." },
      { objective: "O3", q: "Before pasting your log into AI, remove:", options: ["Names and health records", "The dates", "The effort ratings", "The results"], answer: 0, why: "Keep private and health details out of AI tools." },
      { objective: "O3", q: "AI says your average improved by 2 seconds. You should:", options: ["Post it", "Check the math yourself", "Trust it fully", "Delete your log"], answer: 1, why: "AI can make math mistakes." },
      { objective: "O4", q: "Which can AI NOT do for you?", options: ["Explain a training word", "Turn notes into a table", "See your form at practice", "Write questions for your coach"], answer: 2, why: "It cannot see you train." },
      { objective: "O4", q: "What does an athletic trainer do?", options: ["Prevents and treats injuries and helps recovery", "Sells shoes", "Runs social media", "Writes the team schedule"], answer: 0, why: "Athletic trainers are licensed health professionals." },
      { objective: "O5", q: "An online plan says to cut water to make weight. This is:", options: ["Safe for everyone", "Required", "A good idea before games", "A red flag"], answer: 3, why: "Cutting food or water to make weight can be dangerous." },
      { objective: "O5", q: "A plan with \"no rest days\" is:", options: ["Best for growth", "A red flag", "NCAA required", "Normal for beginners"], answer: 1, why: "Rest is part of training; no rest is a warning sign." },
      { objective: "O5", q: "Before taking any supplement, talk to:", options: ["An ad", "Your athletic trainer or a registered dietitian", "A teammate", "Nobody"], answer: 1, why: "They can explain risks, including banned substances." },
      { objective: "O5", q: "If AI advice conflicts with your coach's plan, you:", options: ["Follow the AI", "Quit the team", "Follow your coach and ask about it", "Do both"], answer: 2, why: "Your coach knows you and the team plan." },
      { objective: "O6", q: "A good coach update includes:", options: ["Your goal, what your data shows, and your questions", "Only complaints", "A long essay", "Your password"], answer: 0, why: "Short and clear helps busy coaches." },
      { objective: "O6", q: "After AI drafts your update, you should:", options: ["Send it unread", "Post it publicly", "Edit it into your own words", "Send it to a rival"], answer: 2, why: "It should sound like you and be true." },
      { objective: "O6", q: "A training block is:", options: ["A wooden block", "A blocked shot", "A rest day", "A set of weeks with one main focus"], answer: 3, why: "Coaches plan training in blocks." },
      { objective: "O4", q: "The best use of AI for training is to:", options: ["Replace your coach", "Understand your data and prepare better questions", "Diagnose injuries", "Pick your supplements"], answer: 1, why: "AI helps you understand and prepare; people decide." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      6,
      8,
      10,
      12,
      14,
      16
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Measurable goal",
        objective: "O1",
        notYet: "The goal is vague, or a number, date or test is missing.",
        meets: "One thing, a number, a date and a test, agreed with the coach.",
        exceeds: "Includes a baseline number and fits a named part of the team's season plan."
      },
      {
        name: "Training log",
        objective: "O2",
        notYet: "Fewer than four sessions, or columns are missing.",
        meets: "Date, Session, Effort and Result filled in for at least four sessions.",
        exceeds: "Every session logged the same day, with a short note or sleep hours added."
      },
      {
        name: "Trend summary",
        objective: "O3",
        notYet: "No chart, or the direction is wrong or missing.",
        meets: "A chart and a one- or two-sentence summary of the direction, with effort compared to result and the AI's math checked.",
        exceeds: "Spots a plateau or rising effort with flat results and flags it as a question for the coach."
      },
      {
        name: "Safe use of AI",
        objective: "O5",
        notYet: "Follows or repeats advice with a red flag, or shares health records with AI.",
        meets: "No red-flag advice is followed, and anything doubtful is taken to the coach or athletic trainer.",
        exceeds: "Names the specific red flag and why it is unsafe when raising it."
      },
      {
        name: "Coach questions",
        objective: "O6",
        notYet: "Fewer than three questions, or the update reads as copied AI text.",
        meets: "A three-sentence update and three clear questions in the athlete's own words.",
        exceeds: "The athlete records the coach's answers and updates the plan from them."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the final task and score Meets or Exceeds on every rubric row",
      "Learners still keeping their training log 30 days later (follow-up survey)",
      "Learners who report reaching or moving toward their measurable goal by the agreed date",
      "Learners who report bringing an update and questions to their coach, or refusing unsafe advice"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone or computer with internet",
      "A free Google account for Google Sheets",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini)",
      "One goal agreed with your coach",
      "About 60 minutes of lessons, then about one minute after each session for four weeks"
    ],
    facilitatorNotes: [
      "Coordinate with the head coach before starting so goals and logs fit the team plan; this course does not set training.",
      "Teach athletes to remove names and health records before pasting any data into an AI tool.",
      "Send any question about pain, injury, weight or supplements to the athletic trainer or a registered dietitian; do not answer it in the group.",
      "Run Lessons 1 to 2 first, let athletes log for four weeks, then run Lessons 3 to 6 and the final task.",
      "Schedule short coach meetings so athletes can deliver their update and questions."
    ]
  }
};
