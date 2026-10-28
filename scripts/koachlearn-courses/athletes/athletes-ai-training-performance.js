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
  chapters: [
    {
      name: "Chapter 1: Goals and data",
      lessons: [
        {
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
          youCanNow: "write a measurable training goal with a number, a date and a test."
        },
        {
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
          youCanNow: "keep a simple, consistent training log."
        },
        {
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
          youCanNow: "chart your training data and describe the trend in plain words."
        }
      ],
      check: {
        title: "Knowledge Check 1: Goals and data",
        questions: [
          { q: "Which is a measurable goal?", options: ["Get better", "Be a beast", "Make 16 of 20 free throws by January 15, tested at practice", "Work hard"], answer: 2, why: "It has a number, a date and a test." },
          { q: "What is a baseline?", options: ["Your starting number before you train for the goal", "The back line of the court", "Your best ever day", "The team's average"], answer: 0, why: "A baseline shows where you started." },
          { q: "Which training log is most useful?", options: ["A fancy one you quit after a week", "One you fill in once a season", "One you guess", "A simple one you fill in every time"], answer: 3, why: "Consistent data is what makes trends meaningful." },
          { q: "How should you treat numbers from a wearable?", options: ["As perfect facts", "As useful clues that are not perfect", "As medical advice", "As something to post publicly"], answer: 1, why: "Wearables help but can be off." },
          { q: "Your effort ratings keep rising but your times are getting slower. What should you do?", options: ["Train twice as hard", "Tell your coach; you may be tired", "Stop logging", "Ignore it"], answer: 1, why: "Rising effort with falling results can signal fatigue, which your coach should know." }
        ]
      }
    },
    {
      name: "Chapter 2: Using AI with your coach",
      lessons: [
        {
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
          youCanNow: "say which training tasks AI can help with and which belong to your coach or athletic trainer."
        },
        {
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
          youCanNow: "spot unsafe training advice and take it to the right person."
        },
        {
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
          youCanNow: "turn your training data into a clear update and questions for your coach."
        }
      ],
      check: {
        title: "Knowledge Check 2: Using AI with your coach",
        questions: [
          { q: "Which task is AI good at for training?", options: ["Seeing your form in person", "Clearing you to return from injury", "Knowing how you slept", "Summarizing your training log"], answer: 3, why: "Organizing and summarizing is a strength of AI." },
          { q: "Who decides when you return from an injury?", options: ["Your athletic trainer or doctor", "An AI assistant", "A teammate", "A fitness influencer"], answer: 0, why: "Return to play is a health decision for qualified professionals." },
          { q: "Which is a red flag in training advice?", options: ["Rest days each week", "Warming up first", "Training through sharp pain", "Asking your coach"], answer: 2, why: "Sharp pain is a signal to stop and get checked." },
          { q: "Why are supplements risky for athletes?", options: ["They are always banned", "They are tested by your coach", "They taste bad", "They are not checked by the FDA before sale, and some contain banned substances"], answer: 3, why: "USADA warns that supplements can be contaminated or mislabeled." },
          { q: "After talking with your coach, whose plan do you follow?", options: ["The AI's", "Your coach's", "A random video's", "Your rival's"], answer: 1, why: "The coach sets training; AI helps you prepare." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Training and Performance",
    questions: [
      { q: "\"Get faster\" is:", options: ["A perfect goal", "A training log", "A wish, not a measurable goal", "A drill"], answer: 2, why: "It has no number, date or test." },
      { q: "A good training goal includes:", options: ["One thing, a number, a date and a test", "Only a feeling", "Your password", "Ten goals at once"], answer: 0, why: "Those parts make it measurable." },
      { q: "Who should agree your goal with you?", options: ["Your coach", "A stranger online", "An AI only", "Nobody"], answer: 0, why: "Your goal should fit the team's plan." },
      { q: "What should your first training log have?", options: ["Fifty columns", "Your medical records", "Date, Session, Effort and Result", "Only photos"], answer: 2, why: "Four simple columns are enough to start." },
      { q: "An effort rating of 1 to 10 measures:", options: ["Your height", "How hard a session felt", "Your grades", "Your followers"], answer: 1, why: "It is a quick score for perceived effort." },
      { q: "Numbers from a watch or strap are:", options: ["Always exact", "Medical diagnoses", "Meaningless", "Useful clues that can be off"], answer: 3, why: "Wearables help, but treat them as clues." },
      { q: "When reading your chart, you should focus on:", options: ["Your single worst day", "The chart color", "The overall direction of the line", "Other athletes' charts"], answer: 2, why: "The trend matters more than one day." },
      { q: "Results are flat for weeks. This is called:", options: ["A sprint", "A baseline", "A wearable", "A plateau"], answer: 3, why: "A plateau is a stretch with no improvement." },
      { q: "Before pasting your log into AI, remove:", options: ["Names and health records", "The dates", "The effort ratings", "The results"], answer: 0, why: "Keep private and health details out of AI tools." },
      { q: "AI says your average improved by 2 seconds. You should:", options: ["Post it", "Check the math yourself", "Trust it fully", "Delete your log"], answer: 1, why: "AI can make math mistakes." },
      { q: "Which can AI NOT do for you?", options: ["Explain a training word", "Turn notes into a table", "See your form at practice", "Write questions for your coach"], answer: 2, why: "It cannot see you train." },
      { q: "What does an athletic trainer do?", options: ["Prevents and treats injuries and helps recovery", "Sells shoes", "Runs social media", "Writes the team schedule"], answer: 0, why: "Athletic trainers are licensed health professionals." },
      { q: "An online plan says to cut water to make weight. This is:", options: ["Safe for everyone", "Required", "A good idea before games", "A red flag"], answer: 3, why: "Cutting food or water to make weight can be dangerous." },
      { q: "A plan with \"no rest days\" is:", options: ["Best for growth", "A red flag", "NCAA required", "Normal for beginners"], answer: 1, why: "Rest is part of training; no rest is a warning sign." },
      { q: "Before taking any supplement, talk to:", options: ["An ad", "Your athletic trainer or a registered dietitian", "A teammate", "Nobody"], answer: 1, why: "They can explain risks, including banned substances." },
      { q: "If AI advice conflicts with your coach's plan, you:", options: ["Follow the AI", "Quit the team", "Follow your coach and ask about it", "Do both"], answer: 2, why: "Your coach knows you and the team plan." },
      { q: "A good coach update includes:", options: ["Your goal, what your data shows, and your questions", "Only complaints", "A long essay", "Your password"], answer: 0, why: "Short and clear helps busy coaches." },
      { q: "After AI drafts your update, you should:", options: ["Send it unread", "Post it publicly", "Edit it into your own words", "Send it to a rival"], answer: 2, why: "It should sound like you and be true." },
      { q: "A training block is:", options: ["A wooden block", "A blocked shot", "A rest day", "A set of weeks with one main focus"], answer: 3, why: "Coaches plan training in blocks." },
      { q: "The best use of AI for training is to:", options: ["Replace your coach", "Understand your data and prepare better questions", "Diagnose injuries", "Pick your supplements"], answer: 1, why: "AI helps you understand and prepare; people decide." }
    ]
  }
};
