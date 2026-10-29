"use strict";

// Koach Learn course: Seniors and Technology -> "AI for Learning and Hobbies". Shape and rules: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "seniors-ai-learning-hobbies",
  category: "Seniors and Technology",
  name: "AI for Learning and Hobbies",
  skills: "Asking AI to teach you step by step, Quizzing yourself with AI, Making a learning plan, Finding good how-to videos, Using AI for a hobby project",
  outcome: "use an AI assistant to make a simple two-week plan for learning a hobby or topic you care about, have it teach and quiz you step by step, and finish the first practice session.",
  about: [
    "It is never too late to learn. This course is for older adults who want to pick up a new hobby, return to an old one, or learn about something they have always been curious about: gardening, family history, painting, a new language, birds, music or history.",
    "You will use a free AI assistant such as ChatGPT, Microsoft Copilot or Google Gemini as a patient tutor that never minds repeating itself. You will ask it to teach you in small steps, quiz you, plan your practice, and help with a real hobby project.",
    "Each lesson takes about five minutes. Do the \"Try it now\" task each time; they build your own learning plan. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Choose one hobby or topic. Ask an AI assistant for a two-week learning plan with short daily sessions, ask it to teach you the first lesson step by step, let it quiz you with three questions, and write down one thing you will practice tomorrow.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Older adults, often retired, who have more free time and want to learn something new or return to a hobby: gardening, painting, music, crafts, bird watching or family history.",
    startingPoint: "Can use a phone, tablet or computer for calls, email and some websites. Many have not used an AI assistant as a tutor or searched YouTube for how-to videos.",
    gap: "Learning a new hobby keeps the mind active and builds connection, but classes can be costly, far away or too fast. An AI assistant can teach at the learner's pace, quiz them and make a plan, if they also check safety facts and do not trust it for family records.",
    constraints: [
      "Reading level: plain words, short sentences and large, simple steps",
      "Devices: a phone, tablet or computer with internet; a bigger screen helps for videos",
      "Time: about 5 minutes per lesson, and short daily practice sessions",
      "Energy and health vary; plans must allow short sessions and rest days",
      "Privacy: keep private details of living relatives out of AI"
    ],
    prerequisites: "\"AI for Seniors: Using AI Assistants\" is helpful first, but not required."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Using a free AI assistant", action: "ask it to teach a topic step by step, saying what you know and asking it to wait for \"next\"", standard: "getting small steps you can follow at your pace" },
    { id: "O2", condition: "After a short lesson", action: "ask the assistant to quiz you one question at a time and explain again anything you miss", standard: "answering at least 2 of 3 questions in your own words" },
    { id: "O3", condition: "Given a hobby or topic you care about", action: "ask for a two-week learning plan that fits your time, supplies and energy", standard: "with one small goal per day, written on your calendar or paper" },
    { id: "O4", condition: "Given a skill that is easier to learn by watching", action: "search YouTube for a beginner how-to video and skip ads and sign-up links", standard: "choosing a clear beginner video" },
    { id: "O5", condition: "Given a hobby project such as a garden or scrapbook", action: "ask for a supply list and simple steps, and check safety facts with a label or trusted source", standard: "before you buy or use anything risky" },
    { id: "O6", condition: "Given a family memory", action: "write a short family story in your voice with AI help, looking up records on trusted sites instead of AI", standard: "with no private details of living relatives" }
  ],
  chapters: [
    {
      name: "Chapter 1: AI as your patient tutor",
      lessons: [
        {
          objectives: ["O1"],
          title: "Asking AI to teach you, one step at a time",
          minutes: 5,
          goal: "Ask an AI assistant to teach a topic in small, clear steps at your pace.",
          text: [
            "An AI assistant can act like a patient tutor. It will explain something as many times as you need, in as many ways as you need, and it never gets tired of questions.",
            "Tell it what you want to learn, what you already know, and how you like to learn. For example: \"I want to start bird watching in my backyard. I am a complete beginner. Teach me the first three things to know, one at a time, in short sentences. Wait for me to say 'next' before going on.\"",
            "Asking it to wait for \"next\" keeps each step small, so you can try it or think about it before moving on."
          ],
          steps: ["Say what you want to learn.", "Say what you already know, even if it is nothing.", "Ask for short, simple steps.", "Ask it to wait for you to say \"next\"."],
          words: [["Tutor", "a teacher who helps one person learn at their own pace."]],
          slides: [
            { title: "A patient tutor", bullets: ["Explains as many times as you need", "Never tires of questions"] },
            { title: "Tell it", bullets: ["What you want to learn", "What you already know", "How you like to learn"] },
            { title: "Keep steps small", bullets: ["\"Teach me one thing at a time.\"", "\"Wait for me to say 'next'.\""] }
          ],
          tryIt: "Pick a topic you are curious about. Ask an assistant to teach you the first three things to know, one at a time, waiting for you to say \"next\". Go through all three.",
          youCanNow: "ask an AI assistant to teach you a topic in small steps at your own pace.",
          quickCheck: [
            { objective: "O1", q: "Why can an AI assistant be a good tutor?", options: ["It knows everything about you", "It explains again as many times and ways as you need, without getting tired", "It grades you like a school", "It only works for children"], answer: 1, why: "The lesson says an assistant is like a patient tutor that never tires of questions." },
            { objective: "O1", q: "You want to learn to play the harmonica and have never tried. What do you tell the assistant?", options: ["\"Harmonica.\"", "\"Tell me everything about music.\"", "\"I am a complete beginner. Teach me the first three things, one at a time. Wait for me to say next.\"", "\"Play a song for me.\""], answer: 2, why: "Saying what you know and asking for small steps that wait for \"next\" keeps learning at your pace." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Quizzing yourself to remember more",
          minutes: 4,
          goal: "Ask an AI assistant to quiz you on what you just learned.",
          text: [
            "We remember more when we try to recall something, not just read it again. A short quiz is one of the best ways to make new learning stick.",
            "After a lesson, ask: \"Quiz me with three easy questions about what you just taught me. Ask one at a time and tell me if I am right.\" Answer in your own words. If you get one wrong, ask it to explain again in a different way.",
            "Try the same quiz again the next day. A little practice spread over several days works better than a lot all at once."
          ],
          steps: ["Finish a short lesson.", "Ask for three easy questions, one at a time.", "Answer in your own words.", "Ask for a new explanation of anything you missed.", "Repeat the quiz tomorrow."],
          words: [["Recall", "bringing something back to mind from memory."]],
          slides: [
            { title: "Quizzes help you remember", bullets: ["Recalling beats re-reading", "Short and often is best"] },
            { title: "Ask for a quiz", bullets: ["\"Quiz me with three easy questions.\"", "\"One at a time; tell me if I am right.\""] },
            { title: "Missed one?", bullets: ["Ask for a different explanation", "Try again tomorrow"] }
          ],
          tryIt: "Ask the assistant to quiz you with three questions about what it taught you in Lesson 1. Answer them one at a time.",
          youCanNow: "use AI to quiz yourself and remember more of what you learn.",
          quickCheck: [
            { objective: "O2", q: "Why does a short quiz help you learn?", options: ["Trying to recall something helps you remember it", "It makes the lesson longer", "It gives you a grade for your records", "It replaces practice"], answer: 0, why: "We remember more when we try to recall something, not just read it again." },
            { objective: "O2", q: "You missed one quiz question about bird calls. What do you do?", options: ["Stop learning that topic", "Skip it and move on", "Get angry at the assistant", "Ask it to explain that part again in a different way"], answer: 3, why: "Ask for a new explanation of anything you missed, then try again." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Making a simple learning plan",
          minutes: 5,
          goal: "Ask an AI assistant for a short, realistic learning plan.",
          text: [
            "A plan turns \"someday\" into \"today\". Ask the assistant for a two-week plan with short sessions that fit your energy and schedule.",
            "For example: \"Make me a two-week plan to learn basic watercolor painting. I can practice 20 minutes a day, five days a week. I have a small paint set and paper. Keep each day to one small goal.\"",
            "Look over the plan and change anything that does not fit. Ask it to make the days easier, shorter, or to add rest days. Then write the plan on your calendar or on paper by your chair."
          ],
          steps: ["Say what you want to learn and for how long.", "Say how many minutes and days you can practice.", "Say what supplies you already have.", "Ask for one small goal per day.", "Adjust the plan, then write it down."],
          words: [["Learning plan", "a list of what to practice each day to reach a goal."]],
          slides: [
            { title: "From someday to today", bullets: ["A short, realistic plan", "One small goal each day"] },
            { title: "Tell the assistant", bullets: ["What and for how long", "Minutes and days you can practice", "Supplies you already have"] },
            { title: "Make it fit you", bullets: ["Ask for easier or shorter days", "Add rest days", "Write it on your calendar"] }
          ],
          tryIt: "Ask an assistant for a two-week learning plan for your topic, with one small goal a day and the time you can give. Make one change so it fits you better, then write down the first three days.",
          youCanNow: "make a realistic learning plan with AI that fits your time and energy.",
          quickCheck: [
            { objective: "O3", q: "What should a good learning plan have each day?", options: ["Several hours of practice", "One small goal that fits your time", "A test", "A new hobby"], answer: 1, why: "One small goal per day turns \"someday\" into \"today\"." },
            { objective: "O3", q: "The plan the AI gave you feels too tiring. What do you do?", options: ["Give up the hobby", "Follow it anyway", "Ask it to make the days shorter or add rest days", "Start a new hobby"], answer: 2, why: "You can ask the assistant to change the plan so it fits your energy." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: AI as your patient tutor",
        questions: [
          { objective: "O1", q: "Why ask the assistant to wait for you to say \"next\"?", options: ["So it stops working", "To make it faster", "So each step stays small and you can think about it", "It is required to sign in"], answer: 2, why: "Small steps at your pace are easier to learn." },
          { objective: "O1", q: "What should you tell the assistant when you want to learn something?", options: ["What you want to learn, what you know, and how you like to learn", "Your bank number", "Only one word", "Your password"], answer: 0, why: "These details help it teach at the right level." },
          { objective: "O2", q: "Which helps you remember more?", options: ["Reading the same page ten times", "Learning everything in one day", "Never practicing", "Answering a short quiz"], answer: 3, why: "Recalling answers makes learning stick." },
          { objective: "O2", q: "You got a quiz question wrong. What is a good next step?", options: ["Give up the hobby", "Ask it to explain again in a different way", "Delete the app", "Skip the topic forever"], answer: 1, why: "A new explanation often makes it click." },
          { objective: "O3", q: "A good learning plan has:", options: ["Ten hours of work a day", "One small goal per day that fits your time", "No days at all", "Only big goals"], answer: 1, why: "Small, realistic goals keep you going." }
        ]
      }
    },
    {
      name: "Chapter 2: Enjoying your hobbies with AI",
      lessons: [
        {
          objectives: ["O4"],
          title: "Finding good how-to videos",
          minutes: 5,
          goal: "Search for a helpful how-to video and judge whether it is a good one.",
          text: [
            "Some skills are easier to learn by watching: a knitting stitch, pruning roses, a chord on the guitar. YouTube has free how-to videos on almost every hobby.",
            "Ask an AI assistant for good search words first: \"What should I search on YouTube to learn a beginner knit stitch?\" Then open YouTube, tap the search box (the magnifying glass), and type those words. Look for videos made for beginners, with clear titles and helpful comments.",
            "You can pause, go back and watch again as many times as you like. Be careful with ads and links in video descriptions that ask you to buy things or sign up; you do not need them to learn."
          ],
          steps: ["Ask AI for good search words.", "Open YouTube and tap the magnifying glass.", "Type the words and look for beginner videos.", "Pause and replay as often as you need.", "Skip ads and links that ask you to buy or sign up."],
          words: [["YouTube", "a free website and app with videos on almost every subject."], ["Search box", "where you type words to find something; often shown by a magnifying glass."]],
          slides: [
            { title: "Learn by watching", bullets: ["Knitting, gardening, music and more", "Free on YouTube"] },
            { title: "Find a good video", bullets: ["Ask AI for search words", "Tap the magnifying glass and type", "Choose beginner videos"] },
            { title: "Watch your way", bullets: ["Pause and replay", "Skip ads and \"buy now\" links"] }
          ],
          tryIt: "Ask an AI assistant what to search on YouTube for the first day of your learning plan. Search for it, watch one beginner video, and pause it at least once to try a step.",
          youCanNow: "find a helpful beginner video and learn from it at your own pace.",
          quickCheck: [
            { objective: "O4", q: "What does the magnifying glass on YouTube do?", options: ["Makes the video bigger", "Opens the search box", "Turns up the sound", "Buys the video"], answer: 1, why: "The magnifying glass is the search button where you type your words." },
            { objective: "O4", q: "A knitting video shows a link to \"buy the full course\". What do you do?", options: ["Skip it; you do not need it to learn", "Buy it right away", "Enter your card number to see more", "Stop watching videos"], answer: 0, why: "Ads and links that ask you to buy or sign up are not needed to learn." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Using AI for a hobby project",
          minutes: 5,
          goal: "Use an AI assistant to plan a real hobby project from start to finish.",
          text: [
            "AI can help you plan a project: a small vegetable garden, a scrapbook for a grandchild's birthday, a family recipe book, or a birdhouse.",
            "Describe the project and ask for a supply list and steps: \"Help me make a small scrapbook of my granddaughter's first year. List the supplies and the steps. Keep it simple.\" For a garden, add your area and season: \"I live in Ohio and have a sunny patio. What are three easy vegetables to grow in pots this spring?\"",
            "For anything about safety, such as tools, chemicals or plants that may be harmful to pets, check the label or a trusted source like your local garden center or library."
          ],
          steps: ["Describe the project and who it is for.", "Add your area, season or space if it matters.", "Ask for a supply list and simple steps.", "Check safety facts with a label or trusted source."],
          words: [["Supply list", "the things you need to gather before starting a project."]],
          slides: [
            { title: "Plan a real project", bullets: ["Garden, scrapbook, recipe book, birdhouse"] },
            { title: "Ask for", bullets: ["A supply list", "Simple steps", "Ideas that fit your area and season"] },
            { title: "Stay safe", bullets: ["Check tool and chemical labels", "Ask a garden center or library"] }
          ],
          tryIt: "Pick a small project related to your topic. Ask an assistant for a supply list and simple steps, and circle the supplies you already have.",
          youCanNow: "plan a hobby project with AI, from supplies to steps.",
          quickCheck: [
            { objective: "O5", q: "What is a supply list?", options: ["A list of stores near you", "A shopping receipt", "A list of friends who can help", "The things you need before you start a project"], answer: 3, why: "A supply list shows what you need before you begin." },
            { objective: "O5", q: "The AI suggests a plant for your patio, and you have a cat. What do you do?", options: ["Buy it right away", "Ask the AI if it is sure", "Check with your garden center or the plant label whether it is safe for pets", "Ignore the question"], answer: 2, why: "Safety facts, such as plants that may harm pets, are checked with a label or trusted source." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Exploring family history and stories",
          minutes: 5,
          goal: "Use AI to help write down a family story to share.",
          text: [
            "Many older adults love to explore family history and pass stories down to grandchildren. AI can help you turn memories into a short story others will enjoy.",
            "Tell it a memory in your own words: \"My father ran a bakery in 1950s Chicago. I helped on Saturdays. Help me write this as a one-page story for my grandchildren, in my voice.\" Then make changes so it sounds like you.",
            "AI does not know your family's real history, so do not ask it to fill in facts about your ancestors; it may invent them. For records, websites like FamilySearch (free) or your local library's genealogy help desk are better places to look. Keep private details of living relatives out of AI."
          ],
          steps: ["Tell AI a memory in your own words.", "Ask for a one-page story in your voice.", "Change anything that does not sound like you.", "Look up records on trusted sites, not in AI.", "Share the story with family."],
          words: [["Genealogy", "the study of family history and ancestors."], ["Ancestor", "a family member from long ago, such as a great-grandparent."]],
          slides: [
            { title: "Turn memories into stories", bullets: ["Tell AI the memory in your own words", "Ask for a short story in your voice"] },
            { title: "Facts come from records", bullets: ["AI may invent family facts", "Try FamilySearch or your library"] },
            { title: "Share it", bullets: ["Keep living relatives' private details out", "Read it aloud to grandchildren"] }
          ],
          tryIt: "Final task: choose one hobby or topic, ask an AI assistant for a two-week plan, have it teach you the first lesson step by step, let it quiz you with three questions, and write down one thing you will practice tomorrow.",
          youCanNow: "use AI to learn, plan hobby projects and record family stories.",
          quickCheck: [
            { objective: "O6", q: "What is genealogy?", options: ["The study of family history", "A kind of garden", "A painting style", "A video app"], answer: 0, why: "Genealogy is the study of family history." },
            { objective: "O6", q: "You want to know where your great-grandmother was born. Where do you look?", options: ["Ask the AI to fill it in", "Guess and write it in the story", "Post your relatives' details online", "FamilySearch or your library's genealogy help desk"], answer: 3, why: "AI may invent family facts; real records are on trusted sites or at the library." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Enjoying your hobbies with AI",
        questions: [
          { objective: "O4", q: "How can AI help you find a good how-to video?", options: ["It deletes ads", "It films the video", "It pays for it", "It suggests good words to search"], answer: 3, why: "Good search words lead to better videos." },
          { objective: "O4", q: "A video description link says \"Buy the full course now\". Do you need it to learn?", options: ["No, you can skip it", "Yes, always", "Yes, it is required", "Only on weekends"], answer: 0, why: "Free videos teach a lot; you do not need to buy." },
          { objective: "O5", q: "For a vegetable garden plan, what should you tell AI?", options: ["Your password", "Your bank number", "Your area, season and space", "Nothing"], answer: 2, why: "Area, season and space affect what grows well." },
          { objective: "O5", q: "AI suggests a garden spray. How do you check it is safe?", options: ["Trust the AI", "Ask a stranger", "Spray more", "Read the label or ask a garden center"], answer: 3, why: "Safety facts should come from labels or trusted sources." },
          { objective: "O6", q: "Why not ask AI for facts about your great-grandparents?", options: ["It costs money", "It is too slow", "It may invent them", "It only speaks French"], answer: 2, why: "AI does not know your family history; records do." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Learning and Hobbies",
    questions: [
      { objective: "O1", q: "An AI assistant can act like:", options: ["Your doctor", "A patient tutor", "Your bank", "A pharmacist"], answer: 1, why: "It explains things as often as you need." },
      { objective: "O1", q: "Which request will teach you best?", options: ["\"I am a beginner. Teach me three things about backyard birds, one at a time.\"", "\"birds\"", "\"teach\"", "\"everything\""], answer: 0, why: "It says the topic, your level and the pace." },
      { objective: "O1", q: "Saying \"wait for me to say next\" helps by:", options: ["Keeping each step small", "Making it louder", "Turning off the device", "Paying less"], answer: 0, why: "Small steps let you think before going on." },
      { objective: "O1", q: "A tutor is:", options: ["A kind of phone", "A teacher who helps one person at their own pace", "A website ending", "A video"], answer: 1, why: "Tutors teach one person at a time." },
      { objective: "O2", q: "Which helps you remember new learning?", options: ["Learning it all in one night", "Never reviewing", "Quizzing yourself", "Skipping practice"], answer: 2, why: "Recalling answers strengthens memory." },
      { objective: "O2", q: "How should the AI quiz you?", options: ["No feedback", "Fifty questions at once", "Only hard questions", "One question at a time and say if you are right"], answer: 3, why: "One at a time with feedback is easiest." },
      { objective: "O2", q: "Practice works best when it is:", options: ["Once a year", "All at once", "Short and spread over several days", "Only when tired"], answer: 2, why: "Spaced practice helps memory." },
      { objective: "O3", q: "A good learning plan includes:", options: ["One small goal each day", "No goals", "Hours of practice daily", "Only a final exam"], answer: 0, why: "Small daily goals are realistic." },
      { objective: "O3", q: "If the plan feels too hard, you can:", options: ["Delete the plan", "Quit", "Do it all anyway", "Ask AI to make the days easier or add rest days"], answer: 3, why: "Plans should fit you." },
      { objective: "O3", q: "What should you tell AI when asking for a plan?", options: ["Your password", "Minutes and days you can practice", "Your bank number", "Your Medicare number"], answer: 1, why: "Time available shapes the plan." },
      { objective: "O4", q: "The magnifying glass on YouTube is the:", options: ["Volume", "Search button", "Power button", "Camera"], answer: 1, why: "It opens the search box." },
      { objective: "O4", q: "When watching a how-to video you can:", options: ["Not go back", "Only watch once", "Not stop it", "Pause and replay as often as you like"], answer: 3, why: "Pausing lets you try each step." },
      { objective: "O4", q: "Ads asking you to sign up or buy are:", options: ["Not needed to learn", "Required", "From the government", "Part of the lesson"], answer: 0, why: "You can learn without them." },
      { objective: "O5", q: "For a hobby project, AI can give you:", options: ["Your bank balance", "The supplies themselves", "A supply list and simple steps", "A doctor's note"], answer: 2, why: "It can plan; you gather and do." },
      { objective: "O5", q: "A supply list is:", options: ["A phone number", "A grocery receipt", "A password", "The things you need before starting"], answer: 3, why: "It lists what to gather." },
      { objective: "O5", q: "Safety facts about tools or chemicals should be checked:", options: ["Never", "Only with AI", "On the label or with a trusted source", "With a stranger"], answer: 2, why: "Labels and experts are reliable." },
      { objective: "O6", q: "Genealogy is:", options: ["A garden plant", "The study of family history", "A phone app", "A kind of paint"], answer: 1, why: "Genealogy traces ancestors." },
      { objective: "O6", q: "AI can help you with a family story by:", options: ["Turning your memory into a short story in your voice", "Knowing your ancestors' birthdays", "Finding your relatives' addresses", "Signing documents"], answer: 0, why: "It shapes your words; you supply the memory." },
      { objective: "O6", q: "Where should you look for real family records?", options: ["FamilySearch or your library's genealogy help", "AI only", "A pop-up ad", "Social media rumors"], answer: 0, why: "Records come from trusted record sources." },
      { objective: "O6", q: "What should you keep out of AI when writing family stories?", options: ["Your favorite color", "Private details of living relatives", "The name of a pet", "The season"], answer: 1, why: "Living relatives' private details deserve protection." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
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
        name: "Two-week plan",
        objective: "O3",
        notYet: "No plan, or a plan that does not fit your time or supplies.",
        meets: "A two-week plan with short daily sessions and one small goal each day.",
        exceeds: "Adjusted the plan to add rest days or easier days, and wrote it down."
      },
      {
        name: "First lesson step by step",
        objective: "O1",
        notYet: "Asked for everything at once.",
        meets: "Asked the assistant to teach the first lesson step by step at your pace.",
        exceeds: "Said what you already know so the steps started at the right level."
      },
      {
        name: "Quizzed yourself",
        objective: "O2",
        notYet: "Skipped the quiz.",
        meets: "Answered three quiz questions, one at a time, in your own words.",
        exceeds: "Asked for a new explanation of anything missed and tried again."
      },
      {
        name: "Next practice",
        objective: "O3",
        notYet: "Nothing written for tomorrow.",
        meets: "Wrote down one thing to practice tomorrow.",
        exceeds: "Chose a time for it and put it on your calendar."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who are still practicing their hobby at the 30-day follow-up",
      "Learners who share a project or family story with family or a group",
      "Learners who start another Seniors and Technology course within 30 days"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone, tablet or computer with internet",
      "A free AI assistant (ChatGPT, Microsoft Copilot or Google Gemini) and YouTube",
      "Paper and pen, or a calendar, for the learning plan",
      "About 60 minutes in total, in short, relaxed sessions: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Ask each learner to pick a hobby they care about before the first session; it keeps them motivated.",
      "Show YouTube on a big screen and point out ads and sign-up links before learners search alone.",
      "Remind learners to check safety facts about tools, chemicals and plants with labels or a garden center.",
      "For family stories, remind learners that AI can invent family facts and to keep living relatives' details private.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
