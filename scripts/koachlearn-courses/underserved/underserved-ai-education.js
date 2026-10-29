"use strict";

// Koach Learn course: Undeserved Community -> "AI for Education and Learning". Skill-building course (shape: scripts/koachlearn-courses/README.md; model: re-entry/reentry-ai-digital-confidence.js).
// Audience: adults in low-income and underserved communities, some new to technology: learning for themselves and helping their children learn. Free tools only.

module.exports = {
  id: "underserved-ai-education",
  category: "Undeserved Community",
  name: "AI for Education and Learning",
  skills: "Using AI as a patient tutor, Making practice questions, Finding free learning sites, Building a study plan, Helping a child learn without doing the work",
  outcome: "use a free AI assistant and a free learning website to learn something new: get a hard idea explained, practice with AI-made questions, and follow a simple two-week study plan you made yourself.",
  about: [
    "It is never too late to learn. Maybe you want to finish a diploma, improve your English, learn a job skill, or keep up with your child's homework. Free AI tools can be a patient tutor that never gets tired of your questions.",
    "You will learn to ask AI to explain things at your level, make practice questions, find free learning websites, build a study plan that fits a busy life, and help a child learn without the AI doing the homework for them.",
    "Each lesson is about five minutes, with a \"Try it now\" task. A knowledge check ends each chapter, and a 20-question quiz ends the course."
  ],
  finalTask: "Pick one thing you want to learn. Make a two-week study plan with an AI assistant that uses one free learning website (like Khan Academy or LearnFree) for 20 minutes a day. Then ask the AI for five practice questions on the first topic, answer them yourself, and check your answers.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adults in underserved communities who want to learn something new: people finishing a diploma, improving English, learning a job skill, or helping their children with homework. Many work, raise children or care for family.",
    startingPoint: "Can use a phone and the internet a little. Some had hard school experiences or left school early, and few have used an AI assistant or a free learning website to study.",
    gap: "Free AI tools and learning websites can act as a patient tutor, but learners do not know how to ask for explanations at their level, practice instead of just rereading, or make a study plan that fits a busy life. Without this, many give up on learning goals that would help their jobs and families.",
    constraints: [
      "Reading level: plain words and short sentences (about grade 5 to 6)",
      "Devices: a smartphone or a library computer",
      "Time: short daily study, often 20 minutes or less",
      "AI can be wrong in math and facts; learners check steps and trusted sources",
      "Schools have their own AI rules, and many AI tools have age limits for children"
    ],
    prerequisites: "None. Learners new to AI assistants can take \"Introduction to AI and Digital Empowerment\" first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given an idea you find hard", action: "ask an AI assistant to explain it at your level with an everyday example, and say which part is still confusing", standard: "until you can explain it back in your own words" },
    { id: "O2", condition: "After learning an idea", action: "ask an AI assistant for practice questions one at a time, answer them yourself and check the answers", standard: "answering before you look and checking any answer that looks wrong" },
    { id: "O3", condition: "Given a skill you want to learn", action: "find a free course on a learning website or at your library", standard: "opening its first lesson" },
    { id: "O4", condition: "Given the real time you have each week", action: "create a two-week study plan with an AI assistant using one free learning site", standard: "with one small topic a day, rest days, and the plan placed where you will see it" },
    { id: "O5", condition: "Given a child's homework topic", action: "use an AI assistant to explain the idea to you so you can teach it, without giving the child the answers", standard: "following the school's rules on AI" },
    { id: "O6", condition: "At the end of a study week", action: "check your progress with a short quiz and adjust your plan", standard: "reviewing every topic you missed" }
  ],
  chapters: [
    {
      name: "Chapter 1: AI as your tutor",
      lessons: [
        {
          objectives: ["O1"],
          title: "Getting a hard idea explained at your level",
          minutes: 5,
          goal: "Ask an AI assistant to explain a hard idea in a way you understand.",
          text: [
            "A tutor is someone who explains things one-on-one. A free AI assistant can act like a patient tutor. You can ask the same question many times, and it does not judge you.",
            "Tell it your level: \"Explain fractions like I am just starting\" or \"Explain it with an example about cooking.\" Everyday examples from your own life make ideas stick.",
            "If it is still confusing, say what part you do not get: \"I understand the first part, but not why we flip the second fraction.\""
          ],
          steps: ["Name the idea you want to learn.", "Tell the AI your level and ask for an everyday example.", "Read the answer slowly.", "Say exactly which part is still confusing and ask again."],
          words: [["Tutor", "a teacher who helps one person at a time."], ["Example", "a real-life case that shows how an idea works."]],
          slides: [
            { title: "AI can be a patient tutor", bullets: ["Ask as many times as you need", "It does not judge you"] },
            { title: "Tell it your level", bullets: ["\"Explain it like I am just starting\"", "\"Use an example about cooking or work\""] },
            { title: "Still confused?", bullets: ["Say which part you do not get", "Ask for a different example"] }
          ],
          tryIt: "Pick one idea you always found hard (percentages, a grammar rule, how interest works). Ask an AI assistant to explain it at a beginner level with an example from your daily life.",
          youCanNow: "get a hard idea explained at your own level and ask follow-ups until it makes sense.",
          quickCheck: [
            { objective: "O1", q: "What is a tutor?", options: ["Someone who explains things one-on-one", "A test you take at school", "A type of calculator", "A school building"], answer: 0, why: "A tutor helps one person learn, and an AI assistant can act like a patient one." },
            { objective: "O1", q: "You get the first part of an explanation but not the second. What do you ask?", options: ["\"Explain everything again.\"", "\"I get the first part, but not why we flip the second fraction.\"", "\"Never mind.\"", "\"Give me the answer.\""], answer: 1, why: "Saying exactly which part is confusing helps the AI explain that part." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Practicing with AI-made questions",
          minutes: 5,
          goal: "Ask an AI assistant to quiz you and check your answers.",
          text: [
            "Reading is not the same as learning. You remember more when you practice: answering questions makes your brain pull the idea back out.",
            "Ask: \"Give me five practice questions about percentages, one at a time. Wait for my answer, then tell me if I am right and why.\"",
            "AI can make mistakes in math and facts. If an answer looks wrong, ask it to show the steps, or check with a trusted learning site or a teacher."
          ],
          steps: ["Ask for a small number of questions, one at a time.", "Answer each one yourself before looking anything up.", "Ask the AI to check your answer and explain.", "If its answer looks wrong, ask it to show the steps or check another source."],
          words: [["Practice question", "a question you answer to help you remember and test what you learned."]],
          slides: [
            { title: "Practice beats rereading", bullets: ["Answering pulls the idea out of your memory", "You remember more"] },
            { title: "Ask AI to quiz you", bullets: ["\"Give me five questions, one at a time\"", "\"Wait for my answer, then explain\""] },
            { title: "AI can be wrong too", bullets: ["Ask it to show the steps", "Check with a learning site or teacher"] }
          ],
          tryIt: "Ask an AI assistant for three practice questions on the idea from Lesson 1, one at a time. Answer each one before it tells you the answer.",
          youCanNow: "use an AI assistant to quiz yourself and check your learning.",
          quickCheck: [
            { objective: "O2", q: "Why ask for practice questions one at a time?", options: ["The AI can only write one", "It costs less", "You answer each one before seeing the next", "It makes the questions harder"], answer: 2, why: "One at a time lets you answer each question yourself before moving on." },
            { objective: "O2", q: "The AI says 25% of 80 is 25. What do you do?", options: ["Accept it", "Stop practicing", "Delete the chat", "Ask it to show the steps or check another source"], answer: 3, why: "AI can make math mistakes, so you ask for the steps or check a trusted source." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Finding free learning websites",
          minutes: 4,
          goal: "Find a free learning website with lessons on the skill you want.",
          text: [
            "AI is a great helper, but it is best used next to real lessons. Free learning websites give you courses in order, with videos and practice.",
            "Khan Academy is a nonprofit with free courses in math, science, reading, economics, computing and test prep. LearnFree has free, self-paced lessons on computers, Microsoft Office, Google tools, job search, money basics, reading and math.",
            "Your public library may also offer free classes, tutoring or online learning accounts. If you are thinking about college, ask the school's financial aid office about help paying, or look at studentaid.gov, the U.S. Department of Education's official site."
          ],
          steps: ["Decide the skill you want to learn.", "Search for it on Khan Academy or LearnFree.", "Pick a course and look at its first lesson.", "Ask your library what free classes or tutoring it offers."],
          words: [["Self-paced", "you go at your own speed, any time of day."], ["Nonprofit", "an organization that works for a mission, not to make money for owners."]],
          sources: [
            { name: "Khan Academy: About", url: "https://www.khanacademy.org/about" },
            { name: "LearnFree (free self-paced lessons)", url: "https://www.learnfree.org/en/" },
            { name: "Federal Student Aid (U.S. Department of Education)", url: "https://studentaid.gov/" }
          ],
          slides: [
            { title: "Use AI next to real lessons", bullets: ["Courses in order", "Videos and practice"] },
            { title: "Free learning sites", bullets: ["Khan Academy: math, science, reading, test prep", "LearnFree: computers, jobs, money, reading, math"] },
            { title: "More free help", bullets: ["Library classes and tutoring", "College money questions: the school's financial aid office or studentaid.gov"] }
          ],
          tryIt: "Go to Khan Academy or LearnFree and find one course on a skill you want. Open the first lesson and write down its name.",
          youCanNow: "find a free learning website with a course on the skill you want.",
          quickCheck: [
            { objective: "O3", q: "What does LearnFree offer?", options: ["Free lessons on computers, job search, money basics, reading and math", "Paid college degrees", "Free phones", "Job placement only"], answer: 0, why: "LearnFree has free, self-paced lessons on everyday skills." },
            { objective: "O3", q: "You want free help learning to read better in person. Where do you ask?", options: ["A car dealer", "Your public library", "A social media ad", "A bank"], answer: 1, why: "Public libraries often offer free classes, tutoring or online learning accounts." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: AI as your tutor",
        questions: [
          { objective: "O1", q: "The AI's explanation is too hard. What should you ask?", options: ["Nothing; give up", "\"Explain it like I am just starting, with an example from cooking.\"", "\"Use bigger words.\"", "\"Make it longer.\""], answer: 1, why: "Telling it your level and asking for an everyday example makes it clearer." },
          { objective: "O2", q: "Why does practicing with questions help more than rereading?", options: ["It is faster to skip", "It looks nicer", "Answering makes your brain pull the idea back out, so you remember more", "It costs less"], answer: 2, why: "Practice strengthens memory." },
          { objective: "O2", q: "The AI marks your math answer wrong, but you think it is right. What do you do?", options: ["Ask it to show the steps, or check another source", "Always trust the AI", "Stop learning math", "Delete the app"], answer: 0, why: "AI can make math mistakes; checking the steps shows who is right." },
          { objective: "O3", q: "Which is a free nonprofit learning website?", options: ["A shopping site", "A social media app", "A game store", "Khan Academy"], answer: 3, why: "Khan Academy is a free, nonprofit learning site." },
          { objective: "O3", q: "What does self-paced mean?", options: ["You must finish in one day", "You go at your own speed", "A teacher sets every time", "You pay per minute"], answer: 1, why: "Self-paced lessons fit your own schedule." }
        ]
      }
    },
    {
      name: "Chapter 2: Learning that fits your life",
      lessons: [
        {
          objectives: ["O4"],
          title: "Building a study plan that fits a busy life",
          minutes: 5,
          goal: "Make a simple two-week study plan with an AI assistant.",
          text: [
            "Many adults learn while working, raising children and caring for family. Short, steady study works better than long sessions you cannot keep up.",
            "Ask the AI for a plan that fits your real week: \"I work evenings and have 20 minutes each morning. Make a two-week plan to learn Excel basics with LearnFree. One small topic a day, with one rest day each week.\"",
            "Put the plan where you will see it: on your phone calendar, on the fridge, or in a notebook. Check off each day."
          ],
          steps: ["Choose one skill and one free learning site.", "Tell the AI how much time you have and when.", "Ask for a two-week plan with one small topic a day and rest days.", "Put it on your calendar or fridge and check off each day."],
          words: [["Study plan", "a schedule of what you will learn and when."]],
          slides: [
            { title: "Short and steady wins", bullets: ["20 minutes a day beats 3 hours once", "Plan around work and family"] },
            { title: "Ask AI for a plan", bullets: ["Your skill and learning site", "How much time and when", "One small topic a day, with rest days"] },
            { title: "Keep it in sight", bullets: ["Phone calendar, fridge or notebook", "Check off each day"] }
          ],
          tryIt: "Ask an AI assistant to make a two-week study plan for the course you found in Lesson 3, based on the real time you have each day.",
          youCanNow: "make a study plan that fits your real week.",
          quickCheck: [
            { objective: "O4", q: "Why do short, steady study sessions work for busy adults?", options: ["They are always easier", "They need no plan", "You can keep them up every day", "They replace practice"], answer: 2, why: "Short sessions fit a real week, so you keep going instead of giving up." },
            { objective: "O4", q: "You only have 15 minutes at lunch. What do you tell the AI when asking for a plan?", options: ["Nothing about your time", "That you can study 3 hours a day", "Only the subject", "That you have 15 minutes at lunch each day"], answer: 3, why: "Telling the AI your real time lets it make a plan you can follow." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Helping a child learn without doing the work",
          minutes: 5,
          goal: "Use AI to help a child understand homework instead of handing them answers.",
          text: [
            "AI can help you help your child, even with subjects you never learned or have forgotten. The key is to use it to explain, not to do the homework.",
            "Schools have rules about AI. Many do not allow students to turn in work an AI wrote. Ask your child's teacher what the rules are. Also check age limits: many AI tools are only for people 13 or older, and some require a parent's permission for teens; read the tool's terms.",
            "Good prompts for parents: \"Explain how to find the area of a rectangle so I can teach my 10-year-old. Do not give the answer to this problem.\" Or: \"Give me three easy questions to check if my child understands.\""
          ],
          steps: ["Read the homework with your child.", "Ask the AI to explain the idea to you, not to solve the problem.", "Explain it to your child in your own words.", "Let your child do the work; use AI-made questions to check understanding.", "Follow the school's rules on AI use."],
          words: [["Terms", "the rules you agree to when you use an app or website, including age limits."]],
          slides: [
            { title: "Explain, do not do", bullets: ["Use AI to understand the idea yourself", "Your child does the work"] },
            { title: "Follow the rules", bullets: ["Ask the teacher about AI rules", "Many AI tools are for ages 13 and up", "Read the tool's terms"] },
            { title: "Prompts for parents", bullets: ["\"Explain this so I can teach my 10-year-old\"", "\"Do not give the answer\"", "\"Give me three easy check questions\""] }
          ],
          tryIt: "Take one homework topic (or a topic from your child's grade). Ask an AI to explain it so you can teach it, without solving the problem. Write down how you would explain it in your own words.",
          youCanNow: "use AI to help a child learn while following school rules and keeping the work theirs.",
          quickCheck: [
            { objective: "O5", q: "What is the key rule for using AI with a child's homework?", options: ["Use it to explain, not to do the work", "Let it write the whole answer", "Use it only on tests", "Never look at the homework"], answer: 0, why: "AI should help you explain the idea; your child still does the work." },
            { objective: "O5", q: "Your 11-year-old wants to use an AI tool alone. What do you check first?", options: ["Its color scheme", "Its age limit and terms, and the school's AI rules", "How fast it types", "Whether it has games"], answer: 1, why: "Many AI tools are for ages 13 and up, and schools have their own rules." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Staying on track and checking your progress",
          minutes: 5,
          goal: "Check your own progress and adjust your plan.",
          text: [
            "After a week, look back. Which days did you study? What can you do now that you could not do before? Small wins count.",
            "Ask the AI to quiz you on the whole week: \"I studied these five topics. Give me one question on each.\" The questions you miss show you what to review.",
            "If the plan was too much, make it smaller. If it was easy, add a little. A plan that changes is still a plan."
          ],
          steps: ["Count the days you studied.", "Ask the AI for one question on each topic you covered.", "Mark the ones you missed and review them.", "Make the plan smaller or bigger to fit your life."],
          words: [["Progress", "how far you have moved toward your goal."], ["Review", "going over something again to remember it better."]],
          slides: [
            { title: "Look back each week", bullets: ["Which days did you study?", "What can you do now?", "Small wins count"] },
            { title: "Quiz the whole week", bullets: ["One question per topic", "Missed questions show what to review"] },
            { title: "Adjust your plan", bullets: ["Too much? Make it smaller", "Too easy? Add a little"] }
          ],
          tryIt: "Final task: make your two-week study plan with an AI assistant and one free learning site, then ask for five practice questions on the first topic, answer them yourself, and check your answers.",
          youCanNow: "learn a new skill with a study plan, free lessons and AI practice, and adjust as you go.",
          quickCheck: [
            { objective: "O6", q: "What do the questions you miss on a weekly quiz show you?", options: ["That you should quit", "That the AI is wrong", "What to review next", "That the plan was perfect"], answer: 2, why: "Missed questions point to the topics to review." },
            { objective: "O6", q: "Your plan felt too easy this week. What do you do?", options: ["Stop studying", "Start a new subject", "Do nothing", "Add a little more to the plan"], answer: 3, why: "A plan should change to fit you; if it is easy, add a little." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Learning that fits your life",
        questions: [
          { objective: "O4", q: "Which study plan is most likely to work for a busy parent?", options: ["Three hours every night", "20 minutes a day with rest days", "Only on holidays", "No plan at all"], answer: 1, why: "Short, steady study fits a busy life." },
          { objective: "O4", q: "What should you tell an AI when asking for a study plan?", options: ["Your password", "Your bank details", "The skill, the site and how much time you have", "Nothing"], answer: 2, why: "Those details make the plan fit your real week." },
          { objective: "O5", q: "Your child has math homework. What is the best way to use AI?", options: ["Have it explain the idea to you so you can teach it", "Have it write the answers for your child", "Copy the answers into the homework", "Ignore the homework"], answer: 0, why: "Using AI to explain keeps the learning and the work with your child." },
          { objective: "O5", q: "Where do you find out a school's rules on AI?", options: ["A social media post", "The AI itself", "A stranger online", "Ask the teacher or the school"], answer: 3, why: "Each school sets its own rules." },
          { objective: "O6", q: "Your weekly quiz shows you missed two topics. What next?", options: ["Quit", "Review those two topics", "Skip them forever", "Start a new skill"], answer: 1, why: "Missed questions show what to review." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Education and Learning",
    questions: [
      { objective: "O1", q: "A tutor is:", options: ["Someone who helps one person learn", "A type of computer", "A test", "A school building"], answer: 0, why: "A tutor teaches one-on-one." },
      { objective: "O1", q: "To get a clearer explanation, tell the AI:", options: ["Your address", "Your level and ask for an everyday example", "To use harder words", "Nothing"], answer: 1, why: "Your level and an example make it clearer." },
      { objective: "O1", q: "You understand part of an answer but not all. Say:", options: ["\"Never mind.\"", "\"Make it longer.\"", "Which exact part is confusing", "\"Use more numbers.\""], answer: 2, why: "Naming the confusing part gets a better follow-up." },
      { objective: "O1", q: "Why is a patient AI tutor helpful?", options: ["It grades your school work", "It gives you a diploma", "It costs money each question", "You can ask the same question many times"], answer: 3, why: "It does not get tired or judge you." },
      { objective: "O2", q: "Which prompt makes AI quiz you well?", options: ["\"Give me five questions, one at a time, and check my answers.\"", "\"Tell me all the answers.\"", "\"Quiz.\"", "\"Do my test.\""], answer: 0, why: "One at a time, with checking, is real practice." },
      { objective: "O2", q: "Before the AI tells you the answer, you should:", options: ["Look it up", "Answer it yourself", "Skip it", "Close the chat"], answer: 1, why: "Answering first is what makes practice work." },
      { objective: "O2", q: "If an AI's math answer looks wrong:", options: ["Trust it anyway", "Stop learning", "Ask it to show the steps or check another source", "Report your friend"], answer: 2, why: "AI can make math mistakes." },
      { objective: "O3", q: "Khan Academy is:", options: ["A paid college", "A game", "A store", "A free nonprofit learning site"], answer: 3, why: "It offers free courses as a nonprofit." },
      { objective: "O3", q: "LearnFree offers free lessons on:", options: ["Computers, job search, money basics, reading and math", "Only cooking", "Only sports", "Nothing for adults"], answer: 0, why: "LearnFree covers many everyday and job skills." },
      { objective: "O3", q: "Where else can you find free classes or tutoring?", options: ["A car wash", "Your public library", "A bank lobby", "A pop-up ad"], answer: 1, why: "Libraries often offer free classes and tutoring." },
      { objective: "O3", q: "For questions about paying for college, where can you look?", options: ["A random website asking for a fee", "A text from a stranger", "The school's financial aid office or studentaid.gov", "A video game"], answer: 2, why: "Those are the official sources." },
      { objective: "O4", q: "A good study plan for most adults is:", options: ["Five hours every Sunday", "Whenever you feel like it", "All in one night", "Short daily study with rest days"], answer: 3, why: "Short, steady study is easier to keep up." },
      { objective: "O4", q: "Where should you keep your study plan?", options: ["Somewhere you will see it, like a calendar or fridge", "Hidden in a drawer", "Only in your head", "In the trash"], answer: 0, why: "Seeing it reminds you to study." },
      { objective: "O4", q: "When asking AI for a study plan, include:", options: ["Your Social Security number", "How much time you really have and when", "Your bank PIN", "Your full address"], answer: 1, why: "Your real time makes a plan you can follow." },
      { objective: "O5", q: "Many AI tools have an age limit of:", options: ["5 and up", "10 and up", "13 and up, sometimes with parent permission", "No limit ever"], answer: 2, why: "Many AI tools are for ages 13 and up; check each tool's terms." },
      { objective: "O5", q: "Using AI with your child's homework, the AI should:", options: ["Write the homework", "Take the test", "Email the teacher for you", "Explain the idea, not do the work"], answer: 3, why: "Explaining keeps the learning with your child." },
      { objective: "O5", q: "Which is a good parent prompt?", options: ["\"Explain this so I can teach my 10-year-old. Do not give the answer.\"", "\"Do my kid's homework.\"", "\"Write the essay.\"", "\"Give all the answers.\""], answer: 0, why: "It asks for an explanation, not answers." },
      { objective: "O6", q: "At the end of a study week, you should:", options: ["Delete your notes", "Look back at what you did and quiz yourself", "Start over from zero", "Stop studying"], answer: 1, why: "Looking back shows progress and what to review." },
      { objective: "O6", q: "Your plan was too much for your week. What do you do?", options: ["Quit", "Feel bad", "Make it smaller", "Double it"], answer: 2, why: "A plan should fit your life; adjusting is normal." },
      { objective: "O2", q: "In the final task, after the AI gives five practice questions, you:", options: ["Copy its answers", "Skip them", "Share them online", "Answer them yourself, then check your answers"], answer: 3, why: "Answering yourself and checking proves the learning." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      1,
      4,
      7,
      11,
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
        name: "Free learning site",
        objective: "O3",
        notYet: "No learning site, or a paid one.",
        meets: "Names one free learning site and the course or lessons used.",
        exceeds: "Also names a free class or tutoring option at the library."
      },
      {
        name: "Two-week plan",
        objective: "O4",
        notYet: "No plan, or a plan that does not fit the learner's real time.",
        meets: "Two weeks, about 20 minutes a day, one small topic a day, with rest days.",
        exceeds: "Placed on a calendar or the fridge with days checked off."
      },
      {
        name: "Practice questions",
        objective: "O2",
        notYet: "Looked at the answers first, or did not answer the questions.",
        meets: "Five questions answered before checking, and each one checked.",
        exceeds: "Asked the AI to show steps on any answer that looked wrong."
      },
      {
        name: "Progress check",
        objective: "O6",
        notYet: "No look back at what was missed.",
        meets: "Lists the questions missed and what to review.",
        exceeds: "Says how the plan will change based on the results."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who follow their study plan for at least 10 of 14 days (follow-up survey)",
      "Learners who enroll in a free course, GED or English class, or college program within 90 days",
      "Parents who report helping a child with homework using AI to explain, not to answer"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A smartphone with internet, or a library or community-center computer",
      "A free AI assistant: Microsoft Copilot, ChatGPT or Google Gemini",
      "A free learning website such as Khan Academy or LearnFree",
      "A notebook or calendar for the study plan",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Start by asking each learner what they want to learn, and use that skill in every practice task.",
      "Show how to ask for a simpler explanation; many learners feel embarrassed to ask again.",
      "For parents, stress that the AI explains and the child does the work, and that school rules come first.",
      "Check in after one week to see who kept their plan and help them make it smaller or bigger.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
