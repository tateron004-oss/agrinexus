"use strict";

// Koach Learn course: Non Profits -> "AI for Program Delivery and Impact". Written as a skill-building course: by the end the student can DO the skill in `outcome`. Two chapters of three micro-lessons; a knowledge
// check closes each chapter; a 20-question quiz closes the course. Model: scripts/koachlearn-courses/re-entry/reentry-ai-digital-confidence.js. See scripts/koachlearn-export.js for how it is built.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources (optional), tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

module.exports = {
  id: "nonprofit-ai-program-impact",
  category: "Non Profits",
  name: "AI for Program Delivery and Impact",
  skills: "Building a simple logic model, Choosing outcome measures, Writing a short participant survey with AI, Summarizing anonymous results, Writing a one-page impact report",
  outcome: "use AI to build a simple logic model for one program, write a short participant survey, summarize anonymous results, and turn them into an honest one-page impact report for your board and funders.",
  about: [
    "This course is for nonprofit and faith-based program managers, coordinators and volunteers who run programs and need to show what difference those programs make.",
    "You will plan a program on one page, choose what to measure, use AI to write a fair survey, summarize results without exposing anyone's private information, and write an impact report that funders and your board can trust.",
    "Each lesson takes about five minutes and builds one part of your impact report. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "For one real program, write a one-page impact report that includes: a simple logic model (inputs, activities, outputs, outcomes), two outcome measures, a short participant survey you drafted with AI, a summary of anonymous results (real or practice data with no names), one story shared with permission, and one honest lesson learned.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Nonprofit and faith-based program managers, coordinators and volunteers who run programs and need to show what difference those programs make.",
    startingPoint: "Run programs and keep counts such as meals served or sessions held. Many have not built a logic model, measured outcomes before and after, or written an impact report.",
    gap: "Funders and boards increasingly ask for outcomes, not just counts. Learners need a simple, honest way to plan, measure and report change, using AI to save time while protecting participants' privacy and keeping every number true.",
    constraints: [
      "Small teams with little time for data work",
      "Privacy: surveys are voluntary and anonymous; no names, health or immigration details unless truly needed and safely kept",
      "Only counts, never raw personal answers, go into AI tools",
      "AI makes math mistakes, so every percent is checked in a spreadsheet",
      "Free tools such as Google Forms or Microsoft Forms"
    ],
    prerequisites: "\"Introduction to AI for Nonprofits\", or some experience using an AI assistant."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given a list of program results", action: "identify which are outputs and which are outcomes", standard: "getting at least 4 of 5 right" },
    { id: "O2", condition: "Given a public description of one program", action: "build a one-page logic model with inputs, activities, outputs and outcomes with AI's help", standard: "with everything you do not really do removed" },
    { id: "O3", condition: "Given an outcome", action: "choose two simple measures your team can collect, asked before and after", standard: "that are honest and realistic for your staff and volunteer time" },
    { id: "O4", condition: "Given your outcome measures", action: "write a short, anonymous participant survey of 5 to 8 questions with AI", standard: "with no leading questions and a note that it is voluntary" },
    { id: "O5", condition: "Given anonymous survey counts", action: "summarize the results with AI and check every percent yourself", standard: "with no detail that could identify a person" },
    { id: "O6", condition: "Given your logic model and checked results", action: "write a one-page impact report with the need, what you did, what changed, a story and a lesson learned", standard: "with no numbers or claims that are not in your data" }
  ],
  chapters: [
    {
      name: "Chapter 1: Planning what to measure",
      lessons: [
        {
          objectives: ["O1"],
          title: "Outputs and outcomes: what is the difference?",
          minutes: 4,
          goal: "Tell outputs and outcomes apart for one of your programs.",
          text: [
            "Outputs count what you did: 300 meals served, 40 tutoring sessions, 25 volunteers trained. Outcomes describe what changed for people: families worried less about food, students raised their reading grades, volunteers felt ready to lead.",
            "Funders and boards increasingly ask for outcomes, not just outputs. Outcomes show your mission is working.",
            "AI can help you think it through. Ask: \"Our program [public description] does [activities]. List likely outputs and likely short-term outcomes for participants.\" Then choose the ones that are true for your program."
          ],
          words: [["Output", "a count of what your program did, like meals served."], ["Outcome", "a change in people's lives because of your program."], ["Impact", "the bigger, longer-term difference your work makes in the community."]],
          slides: [
            { title: "Outputs count what you did", bullets: ["300 meals served", "40 tutoring sessions", "25 volunteers trained"] },
            { title: "Outcomes show what changed", bullets: ["Families worry less about food", "Students raise reading grades", "Volunteers ready to lead"] },
            { title: "Ask AI to brainstorm", bullets: ["Likely outputs and outcomes", "You choose what is true"] }
          ],
          tryIt: "For one program, write three outputs and two outcomes. Use AI to brainstorm, then keep only the ones true for your program.",
          youCanNow: "tell outputs from outcomes for your own program.",
          quickCheck: [
            { objective: "O1", q: "\"25 volunteers trained\" is an example of what?", options: ["An output", "An outcome", "An input", "A survey"], answer: 0, why: "Outputs count what you did; outcomes describe what changed for people." },
            { objective: "O1", q: "Your report lists only meals served. A funder asks for outcomes. What do you add?", options: ["More meal counts", "What changed for families, such as worrying less about food", "The cost of the food", "A list of volunteers"], answer: 1, why: "Outcomes describe what changed for people because of the program." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Building a simple logic model",
          minutes: 5,
          goal: "Build a one-page logic model for one program with AI's help.",
          text: [
            "A logic model is a one-page picture of how your program works: inputs (what you put in), activities (what you do), outputs (what you count) and outcomes (what changes).",
            "Ask AI: \"Make a logic model table for this program: [public description]. Columns: inputs, activities, outputs, short-term outcomes, long-term outcomes. Keep each cell short.\"",
            "Then fix it so it matches reality. Remove anything you do not do. A logic model is a plan you can defend, not a wish list."
          ],
          steps: ["Describe the program in three public sentences.", "Ask AI for a logic model table with five columns.", "Remove anything you do not really do.", "Check that each outcome links to an activity."],
          words: [["Logic model", "a one-page table showing inputs, activities, outputs and outcomes."], ["Input", "what you put into a program: staff, volunteers, money, space."]],
          slides: [
            { title: "A logic model shows", bullets: ["Inputs: what you put in", "Activities: what you do", "Outputs: what you count", "Outcomes: what changes"] },
            { title: "Ask AI for a table", bullets: ["Five columns", "Short cells"] },
            { title: "Make it real", bullets: ["Remove what you do not do", "Each outcome links to an activity"] }
          ],
          tryIt: "Build a logic model table for your program with AI, then edit it until every cell is true.",
          youCanNow: "build a simple, honest logic model for a program.",
          quickCheck: [
            { objective: "O2", q: "In a logic model, what are activities?", options: ["What you count", "What changes", "What you do", "What you put in"], answer: 2, why: "Activities are what you do; inputs go in, outputs are counted, outcomes are what changes." },
            { objective: "O2", q: "AI's logic model lists a long-term outcome you have no way to reach. What do you do?", options: ["Keep it; funders like big goals", "Make it bigger", "Copy it to every program", "Remove it so the model matches reality"], answer: 3, why: "A logic model is a plan you can defend, not a wish list." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Choosing outcome measures",
          minutes: 5,
          goal: "Choose two outcome measures you can actually collect.",
          text: [
            "A measure is how you will know an outcome happened. For \"families worry less about food\", a measure could be: percent of families who say they worried less about running out of food, asked at sign-up and after three months.",
            "Good measures are simple, can be collected by your team, and are honest. Comparing before and after is stronger than asking only once.",
            "Ask AI: \"Suggest three simple ways a small nonprofit could measure this outcome: [outcome]. We have [staff and volunteer time].\" Pick two you can really do."
          ],
          steps: ["Pick two outcomes from your logic model.", "Ask AI for simple ways to measure each.", "Choose ones your team can collect.", "Plan to measure before and after when you can."],
          words: [["Measure", "how you will know an outcome happened, often a number or percent."], ["Before and after", "asking the same question at the start and later, to see change."]],
          slides: [
            { title: "A measure shows an outcome", bullets: ["\"Percent of families who worry less about food\"", "Asked at sign-up and after three months"] },
            { title: "Good measures are", bullets: ["Simple", "Collectable by your team", "Honest"] },
            { title: "Before and after", bullets: ["Stronger than asking once", "Shows change over time"] }
          ],
          tryIt: "Choose two outcome measures for your program, with AI's suggestions, and write when you will collect each.",
          youCanNow: "choose outcome measures your team can collect.",
          quickCheck: [
            { objective: "O3", q: "Why is asking at sign-up and again later stronger than asking once?", options: ["It shows change over time", "It is shorter", "It needs no staff time", "It avoids using numbers"], answer: 0, why: "Comparing before and after shows change." },
            { objective: "O3", q: "AI suggests three measures, but one needs hours of staff time you do not have. What do you do?", options: ["Use all three anyway", "Pick the two you can really collect", "Hire a consultant first", "Skip measuring"], answer: 1, why: "Good measures can be collected by your team; pick two you can really do." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning what to measure",
        questions: [
          { objective: "O1", q: "Which is an outcome?", options: ["Families worry less about food", "300 meals served", "40 sessions held", "25 volunteers trained"], answer: 0, why: "Outcomes are changes in people's lives." },
          { objective: "O1", q: "Which is an output?", options: ["Students feel more confident", "40 tutoring sessions held", "Families are healthier", "Volunteers feel ready to lead"], answer: 1, why: "Outputs count what you did." },
          { objective: "O2", q: "The AI logic model lists an activity you do not do. What do you do?", options: ["Keep it", "Start doing it secretly", "Remove it", "Ask a funder"], answer: 2, why: "A logic model must be true." },
          { objective: "O3", q: "Which measurement plan is strongest?", options: ["Ask once at the end", "Guess", "Ask only staff", "Ask the same question at sign-up and after three months"], answer: 3, why: "Before and after shows change." },
          { objective: "O2", q: "What are inputs?", options: ["What you put in: staff, volunteers, money, space", "Survey answers", "Funders' names", "Outcomes"], answer: 0, why: "Inputs are the resources a program uses." }
        ]
      }
    },
    {
      name: "Chapter 2: Collecting, summarizing and reporting",
      lessons: [
        {
          objectives: ["O4"],
          title: "Writing a short, fair participant survey",
          minutes: 5,
          goal: "Use AI to draft a short survey that measures your outcomes.",
          text: [
            "A survey asks participants what changed for them. Keep it short, about 5 to 8 questions, in plain words and the languages they use.",
            "Ask AI: \"Write a 6-question anonymous survey for adults in our food program to measure [outcome]. Use plain language at a 6th-grade level, mostly multiple choice, one open question. Avoid leading questions.\"",
            "Remove any question that asks for names, health details or immigration status unless you truly need it and have a safe way to keep it. Tell people the survey is voluntary and will not affect their services. Free tools like Google Forms or Microsoft Forms can collect answers."
          ],
          steps: ["Ask AI for a short anonymous survey that measures your outcome.", "Rewrite any leading question.", "Remove questions about names or sensitive details you do not need.", "Add a note that the survey is voluntary.", "Build it in a free form tool."],
          words: [["Survey", "a set of questions to learn what people think or experienced."], ["Anonymous", "no names or details that could show who answered."], ["Leading question", "a question that pushes people toward an answer, like \"How much did our great program help you?\""]],
          slides: [
            { title: "Keep it short", bullets: ["5 to 8 questions", "Plain words, people's languages"] },
            { title: "Ask AI", bullets: ["Anonymous, 6th-grade level", "Mostly multiple choice, one open question", "No leading questions"] },
            { title: "Protect people", bullets: ["No names or sensitive details unless needed", "Voluntary: it will not affect services"] }
          ],
          tryIt: "Draft a 6-question anonymous survey for your program with AI. Find and rewrite any leading question, and add a voluntary note.",
          youCanNow: "write a short, fair, anonymous participant survey with AI's help.",
          quickCheck: [
            { objective: "O4", q: "What kind of questions should most of the survey use?", options: ["Long essay questions", "Questions about names and addresses", "Mostly multiple choice, with one open question", "Only yes or no about the staff"], answer: 2, why: "The prompt asks for mostly multiple choice and one open question." },
            { objective: "O4", q: "AI's survey asks every participant for their health conditions. What do you do?", options: ["Keep it to get more data", "Make it required", "Add their names too", "Remove it unless you truly need it and can keep it safely"], answer: 3, why: "Remove questions on health or immigration unless truly needed and safely kept." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Summarizing results without exposing anyone",
          minutes: 5,
          goal: "Summarize anonymous survey results with AI and check the numbers yourself.",
          text: [
            "Before using AI on results, make sure the data has no names, contact details or anything else that could identify a person. If a small group could be recognized (for example the only three Spanish-speaking seniors), combine or leave out those details.",
            "Your form tool or spreadsheet can count answers for you. Then you can paste the counts, not raw personal answers, into AI: \"Here are survey counts: [counts]. Summarize the main findings in 4 bullet points and suggest one chart.\"",
            "Check every percent yourself in the spreadsheet. AI often makes math mistakes. For open answers, read them yourself first and remove anything identifying before asking AI to group them into themes."
          ],
          steps: ["Remove names and identifying details.", "Count answers in your form tool or spreadsheet.", "Paste counts, not raw personal answers, into AI.", "Ask for a short summary and a chart idea.", "Check every percent yourself."],
          words: [["Data", "information you collected, like survey answers."], ["Theme", "an idea that comes up again and again in open answers."], ["Percent", "a part out of 100, like 60 of 100 people is 60 percent."]],
          slides: [
            { title: "Protect people first", bullets: ["No names or contact details", "Small groups can be recognized: combine them"] },
            { title: "Count, then summarize", bullets: ["Let the spreadsheet count", "Give AI counts, not raw personal answers"] },
            { title: "Check the math", bullets: ["AI makes math mistakes", "Check every percent yourself"] }
          ],
          tryIt: "Use practice counts (for example 30 of 40 people said they worry less about food). Ask AI for a 4-bullet summary, then check each percent with a calculator.",
          youCanNow: "summarize anonymous results with AI and check the numbers.",
          quickCheck: [
            { objective: "O5", q: "What do you do with open answers before asking AI to find themes?", options: ["Read them yourself and remove anything identifying", "Paste them all in as they are", "Delete them", "Send them to the funder"], answer: 0, why: "Read open answers first and remove anything identifying." },
            { objective: "O5", q: "Only two participants are men over 70, so they could be recognized. What do you do?", options: ["Report them separately by name", "Combine or leave out those details", "Ask AI to guess who they are", "Post their answers online"], answer: 1, why: "If a small group could be recognized, combine or leave out those details." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Writing a one-page impact report",
          minutes: 5,
          goal: "Turn your logic model and results into an honest one-page impact report.",
          text: [
            "An impact report tells your board, funders and community what your program did and what changed. One page is enough: the need, what you did (outputs), what changed (outcomes with numbers), one story, and what you learned.",
            "Ask AI: \"Using only this information, write a one-page impact report with these headings: The need, What we did, What changed, A story, What we learned. [your logic model, measures, checked results, story shared with permission].\"",
            "Include an honest lesson learned. Funders trust organizations that say what did not work and how they will improve. Never let AI add numbers or claims that are not in your data."
          ],
          steps: ["Gather your logic model, measures, checked results and a permitted story.", "Ask AI for a one-page report with five headings, using only your information.", "Check every number against your spreadsheet.", "Add an honest lesson learned.", "Have a colleague read it."],
          words: [["Impact report", "a short report on what a program did and what changed."], ["Lesson learned", "something you discovered that will help you do better next time."]],
          slides: [
            { title: "One page, five parts", bullets: ["The need", "What we did and what changed", "A story", "What we learned"] },
            { title: "Ask AI", bullets: ["\"Using only this information...\"", "Five headings"] },
            { title: "Stay honest", bullets: ["Every number from your data", "Include a lesson learned", "A colleague reads it"] }
          ],
          tryIt: "Final task: write your one-page impact report with a logic model, two measures, your survey, a summary of anonymous results, a story shared with permission and one honest lesson learned.",
          youCanNow: "plan, measure and report a program's impact with AI's help.",
          quickCheck: [
            { objective: "O6", q: "Which heading belongs in the lesson's one-page impact report?", options: ["Donor passwords", "Staff salaries", "What we learned", "Participants' addresses"], answer: 2, why: "The headings are the need, what we did, what changed, a story and what we learned." },
            { objective: "O6", q: "AI's report adds \"90% of families found jobs,\" which is not in your data. What do you do?", options: ["Keep it; it sounds great", "Change it to 80%", "Move it to a footnote", "Remove it, because AI must not add claims that are not in your data"], answer: 3, why: "Never let AI add numbers or claims that are not in your data." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Collecting, summarizing and reporting",
        questions: [
          { objective: "O4", q: "Which is a leading question?", options: ["\"How often did you worry about food last month?\"", "\"How much did our wonderful program help you?\"", "\"Which day do you visit?\"", "\"How did you hear about us?\""], answer: 1, why: "It pushes people toward a positive answer." },
          { objective: "O4", q: "What should you tell people about your survey?", options: ["It is required for services", "Nothing", "It is voluntary and will not affect their services", "Their answers will be posted"], answer: 2, why: "People should feel free to answer honestly or not at all." },
          { objective: "O5", q: "What should you paste into AI to summarize results?", options: ["Raw answers with names", "Participants' phone numbers", "The whole client database", "Counts with no identifying details"], answer: 3, why: "Counts protect privacy." },
          { objective: "O5", q: "AI says 30 of 40 is 80 percent. What do you do?", options: ["Check it yourself: it is 75 percent", "Use it", "Round to 100", "Remove all numbers"], answer: 0, why: "AI makes math mistakes; 30 of 40 is 75 percent." },
          { objective: "O6", q: "Why include a lesson learned in an impact report?", options: ["To fill space", "Funders trust honest organizations that improve", "It is required by AI", "To hide results"], answer: 1, why: "Honesty about what did not work builds trust." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Program Delivery and Impact",
    questions: [
      { objective: "O1", q: "An output is:", options: ["A change in people's lives", "A donor", "A count of what your program did", "A survey question"], answer: 2, why: "Outputs count activity." },
      { objective: "O1", q: "An outcome is:", options: ["The number of flyers printed", "The budget", "The office address", "A change in people's lives because of your program"], answer: 3, why: "Outcomes are changes for people." },
      { objective: "O1", q: "Why do funders ask for outcomes?", options: ["Outcomes show the mission is working", "They are easier to count", "They are shorter", "Funders dislike numbers"], answer: 0, why: "Outcomes show real difference." },
      { objective: "O2", q: "Which is NOT part of a logic model?", options: ["Inputs", "Donor passwords", "Activities", "Outcomes"], answer: 1, why: "A logic model has inputs, activities, outputs and outcomes." },
      { objective: "O2", q: "A logic model should be:", options: ["A wish list", "Secret", "A plan you can defend, true to what you do", "Written only by AI"], answer: 2, why: "It must match reality." },
      { objective: "O2", q: "Each outcome in a logic model should link to:", options: ["A donor", "A logo", "A holiday", "An activity"], answer: 3, why: "Activities lead to outcomes." },
      { objective: "O3", q: "A good measure is:", options: ["Simple, collectable and honest", "Complex and expensive", "Impossible to collect", "Made up"], answer: 0, why: "Your team must be able to collect it." },
      { objective: "O3", q: "Measuring before and after helps you:", options: ["Avoid surveys", "See change over time", "Skip outcomes", "Hide results"], answer: 1, why: "Comparison shows change." },
      { objective: "O4", q: "How long should a participant survey be?", options: ["50 questions", "One word", "About 5 to 8 questions", "No limit"], answer: 2, why: "Short surveys get more answers." },
      { objective: "O4", q: "An anonymous survey:", options: ["Asks for full names", "Is only for staff", "Has no questions", "Has no names or details showing who answered"], answer: 3, why: "Anonymous protects participants." },
      { objective: "O4", q: "Which survey question should you usually remove?", options: ["Immigration status, unless truly needed and safely kept", "\"How often did you visit?\"", "\"Did you feel welcome?\"", "\"What could we improve?\""], answer: 0, why: "Sensitive details put people at risk." },
      { objective: "O4", q: "Which free tools can collect survey answers?", options: ["A calculator", "Google Forms or Microsoft Forms", "A printer", "A phone charger"], answer: 1, why: "Form tools collect and count answers." },
      { objective: "O5", q: "A small group could be recognized in your results. You should:", options: ["Name them", "Post them publicly", "Combine or leave out those details", "Ignore it"], answer: 2, why: "Small groups can identify people." },
      { objective: "O5", q: "Who should count survey answers?", options: ["AI guessing", "A donor", "Nobody", "Your form tool or spreadsheet"], answer: 3, why: "Spreadsheets count reliably." },
      { objective: "O5", q: "AI makes math mistakes, so you should:", options: ["Check every percent yourself", "Trust it", "Remove all numbers", "Ask it twice and pick one"], answer: 0, why: "You are responsible for the numbers." },
      { objective: "O5", q: "A theme in open answers is:", options: ["A color scheme", "An idea that comes up again and again", "A donor type", "A program name"], answer: 1, why: "Themes summarize open answers." },
      { objective: "O6", q: "An impact report should be:", options: ["100 pages", "Only photos", "About one page with need, what you did, what changed, a story and lessons", "Only a budget"], answer: 2, why: "One clear page is enough." },
      { objective: "O6", q: "Which prompt keeps an impact report honest?", options: ["\"Make our numbers bigger.\"", "\"Invent a success story.\"", "\"Add impressive statistics.\"", "\"Using only this information, write...\""], answer: 3, why: "Limiting AI to your data stops invented claims." },
      { objective: "O6", q: "A story in an impact report needs:", options: ["The person's permission", "Their full name and address", "A celebrity", "Nothing"], answer: 0, why: "Stories require consent." },
      { objective: "O6", q: "Who should read the impact report before it goes out?", options: ["Nobody", "A colleague", "Only the AI", "A competitor"], answer: 1, why: "A second reader catches mistakes." }
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
      12,
      17
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Logic model",
        objective: "O2",
        notYet: "A column is missing, or it lists things the program does not do.",
        meets: "Inputs, activities, outputs and outcomes, all true to the program.",
        exceeds: "Each outcome links clearly to an activity."
      },
      {
        name: "Outcome measures",
        objective: "O3",
        notYet: "Measures are outputs, or cannot be collected.",
        meets: "Two simple, honest outcome measures the team can collect.",
        exceeds: "Both are asked before and after to show change."
      },
      {
        name: "Fair survey",
        objective: "O4",
        notYet: "Leading questions, or it asks for names or sensitive details without need.",
        meets: "5 to 8 plain questions, anonymous and voluntary.",
        exceeds: "Offered in the languages participants use."
      },
      {
        name: "Anonymous, checked results",
        objective: "O5",
        notYet: "Results could identify someone, or a percent is wrong.",
        meets: "Summary from counts with no identifying details, every percent checked.",
        exceeds: "Open answers are grouped into themes after removing identifying details."
      },
      {
        name: "Honest one-page report",
        objective: "O6",
        notYet: "A number or claim is not in the data, or the story has no permission.",
        meets: "One page with need, outputs, outcomes, a permitted story and a lesson learned.",
        exceeds: "A colleague read it and the lesson learned says how the program will improve."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Programs that collect before-and-after outcome data within 90 days (follow-up survey)",
      "Impact reports shared with a board or funder within 90 days",
      "Grant renewals or new funding that organizations link to their impact reports"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with internet and a free spreadsheet",
      "A free AI assistant and Google Forms or Microsoft Forms",
      "A public description of one program, and practice data with no names if real data is not ready",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Provide a practice data set with no names so learners can try summarizing safely.",
      "Do the outputs and outcomes sorting as a group game before the first check.",
      "Have learners check AI's percents in a spreadsheet together to see how often they need fixing.",
      "Remind learners that surveys must be voluntary and must not affect anyone's services.",
      "Score the final task with the rubric, and give feedback on one Not yet row at a time."
    ]
  }
};
