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
  chapters: [
    {
      name: "Chapter 1: AI as your patient tutor",
      lessons: [
        {
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
          youCanNow: "ask an AI assistant to teach you a topic in small steps at your own pace."
        },
        {
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
          youCanNow: "use AI to quiz yourself and remember more of what you learn."
        },
        {
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
          youCanNow: "make a realistic learning plan with AI that fits your time and energy."
        }
      ],
      check: {
        title: "Knowledge Check 1: AI as your patient tutor",
        questions: [
          { q: "Why ask the assistant to wait for you to say \"next\"?", options: ["So it stops working", "To make it faster", "So each step stays small and you can think about it", "It is required to sign in"], answer: 2, why: "Small steps at your pace are easier to learn." },
          { q: "What should you tell the assistant when you want to learn something?", options: ["What you want to learn, what you know, and how you like to learn", "Your bank number", "Only one word", "Your password"], answer: 0, why: "These details help it teach at the right level." },
          { q: "Which helps you remember more?", options: ["Reading the same page ten times", "Learning everything in one day", "Never practicing", "Answering a short quiz"], answer: 3, why: "Recalling answers makes learning stick." },
          { q: "You got a quiz question wrong. What is a good next step?", options: ["Give up the hobby", "Ask it to explain again in a different way", "Delete the app", "Skip the topic forever"], answer: 1, why: "A new explanation often makes it click." },
          { q: "A good learning plan has:", options: ["Ten hours of work a day", "One small goal per day that fits your time", "No days at all", "Only big goals"], answer: 1, why: "Small, realistic goals keep you going." }
        ]
      }
    },
    {
      name: "Chapter 2: Enjoying your hobbies with AI",
      lessons: [
        {
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
          youCanNow: "find a helpful beginner video and learn from it at your own pace."
        },
        {
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
          youCanNow: "plan a hobby project with AI, from supplies to steps."
        },
        {
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
          youCanNow: "use AI to learn, plan hobby projects and record family stories."
        }
      ],
      check: {
        title: "Knowledge Check 2: Enjoying your hobbies with AI",
        questions: [
          { q: "How can AI help you find a good how-to video?", options: ["It deletes ads", "It films the video", "It pays for it", "It suggests good words to search"], answer: 3, why: "Good search words lead to better videos." },
          { q: "A video description link says \"Buy the full course now\". Do you need it to learn?", options: ["No, you can skip it", "Yes, always", "Yes, it is required", "Only on weekends"], answer: 0, why: "Free videos teach a lot; you do not need to buy." },
          { q: "For a vegetable garden plan, what should you tell AI?", options: ["Your password", "Your bank number", "Your area, season and space", "Nothing"], answer: 2, why: "Area, season and space affect what grows well." },
          { q: "AI suggests a garden spray. How do you check it is safe?", options: ["Trust the AI", "Ask a stranger", "Spray more", "Read the label or ask a garden center"], answer: 3, why: "Safety facts should come from labels or trusted sources." },
          { q: "Why not ask AI for facts about your great-grandparents?", options: ["It costs money", "It is too slow", "It may invent them", "It only speaks French"], answer: 2, why: "AI does not know your family history; records do." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Learning and Hobbies",
    questions: [
      { q: "An AI assistant can act like:", options: ["Your doctor", "A patient tutor", "Your bank", "A pharmacist"], answer: 1, why: "It explains things as often as you need." },
      { q: "Which request will teach you best?", options: ["\"I am a beginner. Teach me three things about backyard birds, one at a time.\"", "\"birds\"", "\"teach\"", "\"everything\""], answer: 0, why: "It says the topic, your level and the pace." },
      { q: "Saying \"wait for me to say next\" helps by:", options: ["Keeping each step small", "Making it louder", "Turning off the device", "Paying less"], answer: 0, why: "Small steps let you think before going on." },
      { q: "A tutor is:", options: ["A kind of phone", "A teacher who helps one person at their own pace", "A website ending", "A video"], answer: 1, why: "Tutors teach one person at a time." },
      { q: "Which helps you remember new learning?", options: ["Learning it all in one night", "Never reviewing", "Quizzing yourself", "Skipping practice"], answer: 2, why: "Recalling answers strengthens memory." },
      { q: "How should the AI quiz you?", options: ["No feedback", "Fifty questions at once", "Only hard questions", "One question at a time and say if you are right"], answer: 3, why: "One at a time with feedback is easiest." },
      { q: "Practice works best when it is:", options: ["Once a year", "All at once", "Short and spread over several days", "Only when tired"], answer: 2, why: "Spaced practice helps memory." },
      { q: "A good learning plan includes:", options: ["One small goal each day", "No goals", "Hours of practice daily", "Only a final exam"], answer: 0, why: "Small daily goals are realistic." },
      { q: "If the plan feels too hard, you can:", options: ["Delete the plan", "Quit", "Do it all anyway", "Ask AI to make the days easier or add rest days"], answer: 3, why: "Plans should fit you." },
      { q: "What should you tell AI when asking for a plan?", options: ["Your password", "Minutes and days you can practice", "Your bank number", "Your Medicare number"], answer: 1, why: "Time available shapes the plan." },
      { q: "The magnifying glass on YouTube is the:", options: ["Volume", "Search button", "Power button", "Camera"], answer: 1, why: "It opens the search box." },
      { q: "When watching a how-to video you can:", options: ["Not go back", "Only watch once", "Not stop it", "Pause and replay as often as you like"], answer: 3, why: "Pausing lets you try each step." },
      { q: "Ads asking you to sign up or buy are:", options: ["Not needed to learn", "Required", "From the government", "Part of the lesson"], answer: 0, why: "You can learn without them." },
      { q: "For a hobby project, AI can give you:", options: ["Your bank balance", "The supplies themselves", "A supply list and simple steps", "A doctor's note"], answer: 2, why: "It can plan; you gather and do." },
      { q: "A supply list is:", options: ["A phone number", "A grocery receipt", "A password", "The things you need before starting"], answer: 3, why: "It lists what to gather." },
      { q: "Safety facts about tools or chemicals should be checked:", options: ["Never", "Only with AI", "On the label or with a trusted source", "With a stranger"], answer: 2, why: "Labels and experts are reliable." },
      { q: "Genealogy is:", options: ["A garden plant", "The study of family history", "A phone app", "A kind of paint"], answer: 1, why: "Genealogy traces ancestors." },
      { q: "AI can help you with a family story by:", options: ["Turning your memory into a short story in your voice", "Knowing your ancestors' birthdays", "Finding your relatives' addresses", "Signing documents"], answer: 0, why: "It shapes your words; you supply the memory." },
      { q: "Where should you look for real family records?", options: ["FamilySearch or your library's genealogy help", "AI only", "A pop-up ad", "Social media rumors"], answer: 0, why: "Records come from trusted record sources." },
      { q: "What should you keep out of AI when writing family stories?", options: ["Your favorite color", "Private details of living relatives", "The name of a pet", "The season"], answer: 1, why: "Living relatives' private details deserve protection." }
    ]
  }
};
