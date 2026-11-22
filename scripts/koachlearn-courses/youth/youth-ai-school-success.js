"use strict";

// Koach Learn course: Youth -> "AI for School Success". Skill-building course for teens about 13-18: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. Shape: scripts/koachlearn-courses/README.md.

module.exports = {
  id: "youth-ai-school-success",
  category: "Youth",
  name: "AI for School Success",
  skills: "Planning a school week, Breaking a big project into steps, Understanding hard reading, Getting feedback on your own writing, Making a test study plan, Using AI within school rules",
  outcome: "use a free AI assistant, within your school's rules, to plan your week, break a big assignment into steps, understand hard reading, get feedback on your own writing, and build a study plan for a real test.",
  about: [
    "This course is for middle and high school students about 13 to 18 who want school to feel less overwhelming. It treats AI as a planner, a coach and a study partner, never as someone who does your work for you.",
    "You will plan a real week, split a big project into small steps, get help understanding a hard reading, get feedback on a draft you wrote, and make a study plan for an upcoming test.",
    "Rules first: every school and teacher has its own rules about AI. Check them, check the tool's age rule, and talk with a parent or guardian before signing up for anything. Use your school account for school-approved tools. Each lesson is about five minutes and ends with a \"Try it now\" task."
  ],
  finalTask: "Pick a real test or project coming up in the next two weeks. Use AI to make a day-by-day study plan that fits around your classes, activities and job or chores, then ask it for 5 practice questions with the answers hidden, answer them yourself, check them against your notes, and write one line on how you followed your school's AI rules.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Middle and high school students about 13 to 18 who feel overwhelmed by school, often balancing classes with sports, clubs, a part-time job or chores at home.",
    startingPoint: "Use phones and school computers daily and may have tried a chat assistant. Many cram the night before, put off big projects and are unsure what AI use their school allows.",
    gap: "Students can use AI to plan, understand hard readings and study better, but using it to do their work can count as cheating and skips the learning. They need to use AI as a planner, coach and study partner within their school's rules to keep up and do better on tests.",
    constraints: [
      "School and teacher AI rules differ; the teacher's rule for each assignment counts",
      "Age limits and parent or guardian permission for new accounts; school accounts for school tools",
      "Devices: a phone, school computer or library computer; free tools only",
      "Privacy: no private information pasted into AI tools",
      "Busy schedules: 5-minute lessons and plain words"
    ],
    prerequisites: "None. \"What Is AI? (for Young People)\" helps learners who have never used an AI assistant."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given your tasks, due dates and fixed times for the week", action: "make a simple weekly plan with AI and change it to fit your real life", standard: "with the hardest work first, breaks, and the plan copied into a planner or calendar" },
    { id: "O2", condition: "Given a big assignment and its due date", action: "break the assignment into 30-minute steps with dates and check them against the teacher's rubric", standard: "finishing two days early with every required part included" },
    { id: "O3", condition: "Given a hard paragraph from a class reading", action: "read it yourself, ask AI to explain it and define hard words, then reread it", standard: "writing one correct sentence in your own words about its meaning" },
    { id: "O4", condition: "Given a draft you wrote and your teacher's permission", action: "ask AI for three things to improve instead of a rewrite, and revise the draft in your own words", standard: "with every change written by you" },
    { id: "O5", condition: "Given a real test date, its topics and your daily time", action: "build a day-by-day study plan with practice questions, answer them first and check them against your notes", standard: "spending more time on the questions you got wrong" },
    { id: "O6", condition: "For any assignment where you might use AI", action: "follow your teacher's AI rule, check any fact or source yourself, and write one line on how you used AI", standard: "handing in no AI-written work that is not allowed" }
  ],
  chapters: [
    {
      name: "Chapter 1: Getting organized",
      lessons: [
        {
          objectives: ["O1"],
          title: "Planning your school week",
          minutes: 5,
          goal: "Turn a messy list of tasks into a simple weekly plan.",
          text: [
            "School, practice, clubs, a part-time job, chores and friends all compete for your time. An AI assistant can help you put it in order if you give it the facts.",
            "List what is due and when, plus your fixed times like practice or work. Then ask: \"Here is my week. Make a simple plan with study time each day, the hardest work first, and breaks. Keep it to one screen.\"",
            "The plan is a draft. Move things around until it fits your real life, then put it in a planner, Google Calendar or your school's calendar app."
          ],
          steps: ["Write down every task and due date.", "Add fixed times: classes, practice, work, family.", "Ask AI to make a simple weekly plan with breaks.", "Change it to fit you, then copy it into your planner or calendar."],
          words: [["Due date", "the day work must be handed in."], ["Prioritize", "decide what to do first because it matters most or is due soonest."]],
          slides: [
            { title: "Give AI the facts", bullets: ["What is due and when", "Practice, work and family times"] },
            { title: "Ask for a simple plan", bullets: ["Study time each day", "Hardest work first", "Breaks included", "Fits on one screen"] },
            { title: "Make it real", bullets: ["Move things to fit your life", "Copy it into a planner or calendar"] }
          ],
          tryIt: "List everything due this week and your fixed times. Ask an AI assistant you are allowed to use to make a simple weekly plan. Change one thing to fit your life, and copy it into a planner or calendar.",
          youCanNow: "build a realistic weekly plan with AI's help.",
          quickCheck: [
            { objective: "O1", q: "What are \"fixed times\" when you plan your week?", options: ["Times you cannot move, like classes, practice or work", "Times you plan to relax", "The deadlines for homework only", "Times the AI picks for you"], answer: 0, why: "Fixed times are commitments the plan must fit around." },
            { objective: "O1", q: "AI's plan puts study time during your shift at work. What do you do?", options: ["Skip work", "Ignore the plan", "Move the study time to fit your real schedule", "Ask AI to cancel your shift"], answer: 2, why: "The AI plan is a draft; you change it to fit your real life." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Breaking a big project into small steps",
          minutes: 5,
          goal: "Split a big assignment into small steps with dates.",
          text: [
            "Big projects feel scary because they look like one huge thing. Breaking them into small steps makes them doable.",
            "Give AI the assignment instructions (in your own words or pasted, with no private information) and the due date. Ask: \"Break this into small steps I can do in 30 minutes each, with a date for each step, finishing two days early.\"",
            "Read the steps and make sure they match what your teacher asked for. Your teacher's instructions and rubric always win over the AI's plan."
          ],
          steps: ["Share the instructions and due date.", "Ask for 30-minute steps with dates.", "Ask it to finish two days early.", "Check the steps against your teacher's rubric."],
          words: [["Rubric", "the list your teacher uses to grade the work."], ["Milestone", "a small goal on the way to finishing a big one."]],
          slides: [
            { title: "Big project, small steps", bullets: ["Huge tasks feel scary", "Small steps feel doable"] },
            { title: "Ask AI to split it", bullets: ["30-minute steps", "A date for each", "Finish two days early"] },
            { title: "The rubric wins", bullets: ["Check steps against the instructions", "Your teacher's rules come first"] }
          ],
          tryIt: "Take one big assignment you have now or had recently. Ask AI to break it into 30-minute steps with dates. Check them against the instructions and fix any step that does not match.",
          youCanNow: "turn a big assignment into small dated steps.",
          quickCheck: [
            { objective: "O2", q: "Why ask AI to finish the steps two days early?", options: ["Teachers give extra points", "It makes the project shorter", "AI works faster that way", "It leaves time for surprises or fixes"], answer: 3, why: "Finishing early gives you room if something takes longer than planned." },
            { objective: "O2", q: "AI's steps skip the bibliography your teacher requires. What do you do?", options: ["Leave it out, since AI knows best", "Add a step for it, because the teacher's instructions win", "Ask a friend to do it", "Start a different project"], answer: 1, why: "Your teacher's instructions and rubric always win over the AI's plan." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Understanding a hard reading",
          minutes: 5,
          goal: "Use AI to understand a hard text while still reading it yourself.",
          text: [
            "Some readings are tough: old language, science words or long paragraphs. AI can help you understand them, as long as you still read the text.",
            "Try this: read a paragraph first. Then ask AI: \"Explain this paragraph in simple words\" or \"What do these 3 words mean?\" or \"Give me 3 questions to think about while I read.\"",
            "A summary from AI can miss things or get them wrong, and it cannot replace reading for class. Use it to unlock the text, then go back and read again."
          ],
          steps: ["Read the paragraph yourself first.", "Ask AI to explain it simply or define hard words.", "Ask for questions to guide your reading.", "Reread the paragraph with the new understanding."],
          words: [["Summary", "a short version of the main points."], ["Context", "the words and ideas around a word that help explain its meaning."]],
          slides: [
            { title: "Read first", bullets: ["Try the paragraph yourself", "Mark words you do not know"] },
            { title: "Then ask AI", bullets: ["\"Explain this in simple words\"", "\"What do these 3 words mean?\"", "\"Give me questions to guide my reading\""] },
            { title: "Then reread", bullets: ["AI summaries can miss things", "They do not replace reading"] }
          ],
          tryIt: "Take one hard paragraph from a class reading. Read it, ask AI to explain it in simple words and define two hard words, then reread it and write one sentence in your own words about what it means.",
          youCanNow: "use AI to unlock a hard reading and then understand it yourself.",
          quickCheck: [
            { objective: "O3", q: "Why can't an AI summary replace doing the reading?", options: ["Summaries are always too long", "Teachers can see your screen", "It can miss things or get them wrong", "AI cannot read English"], answer: 2, why: "An AI summary can miss or get details wrong, so you still read the text." },
            { objective: "O3", q: "You are stuck on a paragraph full of science words. What is the best first move?", options: ["Read it yourself, then ask AI what the hard words mean", "Ask AI to summarize the whole book", "Skip the reading", "Copy the AI summary into your notes"], answer: 0, why: "Read first, use AI to unlock the hard parts, then reread." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Getting organized",
        questions: [
          { objective: "O1", q: "What should you give AI to help plan your week?", options: ["Your password", "What is due and your fixed times", "Your home address", "Nothing"], answer: 1, why: "AI needs your tasks and times to make a useful plan." },
          { objective: "O1", q: "AI made a weekly plan that does not fit your practice schedule. You:", options: ["Follow it anyway", "Quit practice", "Delete your calendar", "Change it to fit your real life"], answer: 3, why: "The plan is a draft; you make it fit." },
          { objective: "O2", q: "What is a rubric?", options: ["The list your teacher uses to grade work", "A type of puzzle", "A study app", "A password"], answer: 0, why: "The rubric shows what your teacher grades." },
          { objective: "O2", q: "AI's project steps leave out a part your teacher required. You:", options: ["Skip that part", "Ask AI to grade you", "Add it, because the teacher's instructions win", "Change due dates"], answer: 2, why: "Teacher instructions come first." },
          { objective: "O3", q: "What is the best way to use AI with a hard reading?", options: ["Skip the reading and use only the AI summary", "Ask AI to take the quiz", "Read it first, ask AI to explain, then reread", "Never read it"], answer: 2, why: "AI helps you understand, but you still read." }
        ]
      }
    },
    {
      name: "Chapter 2: Writing and studying smarter",
      lessons: [
        {
          objectives: ["O4"],
          title: "Getting feedback on your own writing",
          minutes: 5,
          goal: "Ask AI for feedback on a draft you wrote, then revise it yourself.",
          text: [
            "Writing your own draft is where learning happens. AI can then act like a coach: it can point out unclear sentences, missing evidence or grammar mistakes.",
            "Ask for feedback, not a rewrite: \"Here is my paragraph. Do not rewrite it. Tell me 3 things to improve and why.\" Then you make the changes in your own words.",
            "If your teacher does not allow AI feedback, use other help: a classmate, the school writing center, or your teacher during office hours."
          ],
          steps: ["Write your own draft first.", "Check your teacher allows AI feedback.", "Ask for 3 things to improve, not a rewrite.", "Revise in your own words."],
          words: [["Draft", "an early version of your writing."], ["Revise", "improve your writing by changing ideas, order or words."]],
          slides: [
            { title: "Write first", bullets: ["Your draft is where you learn", "AI comes after, as a coach"] },
            { title: "Ask for feedback, not a rewrite", bullets: ["\"Do not rewrite it\"", "\"Tell me 3 things to improve and why\""] },
            { title: "You make the changes", bullets: ["Revise in your own words", "No AI allowed? Ask a classmate or teacher"] }
          ],
          tryIt: "Take a paragraph you wrote (if your teacher allows AI feedback). Ask for 3 things to improve without a rewrite. Make the changes yourself and compare the two versions.",
          youCanNow: "get feedback from AI and revise your own writing.",
          quickCheck: [
            { objective: "O4", q: "What does \"feedback, not a rewrite\" mean?", options: ["AI writes a new version for you", "AI grades your work", "AI deletes your draft", "AI points out what to improve and you make the changes"], answer: 3, why: "Feedback tells you what to fix; you revise in your own words." },
            { objective: "O4", q: "Your teacher does not allow AI feedback on this essay. What do you do?", options: ["Use AI anyway", "Ask a classmate, the writing center or your teacher for feedback", "Turn in the first draft without reading it", "Have AI rewrite it secretly"], answer: 1, why: "When AI is not allowed, other people can give you feedback." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Making a study plan for a test",
          minutes: 5,
          goal: "Build a day-by-day study plan and practice questions for a real test.",
          text: [
            "Cramming the night before usually does not work well. Studying a little each day and testing yourself does.",
            "Tell AI the test date, the topics and how much time you have each day: \"My biology test is Friday on cells and DNA. I have 30 minutes each day. Make a study plan with a practice quiz each day.\"",
            "Ask for practice questions with the answers hidden, answer them yourself, then check against your notes or textbook. Spend more time on the questions you got wrong."
          ],
          steps: ["Tell AI the test date, topics and your daily time.", "Ask for a day-by-day plan with practice.", "Answer practice questions before seeing answers.", "Check against your notes and focus on what you missed."],
          words: [["Cramming", "trying to learn everything right before a test."], ["Spaced practice", "studying a little over several days instead of all at once."]],
          slides: [
            { title: "Little and often beats cramming", bullets: ["Study a bit each day", "Test yourself as you go"] },
            { title: "Ask for a plan", bullets: ["Test date and topics", "Minutes you have each day", "A practice quiz each day"] },
            { title: "Practice the right way", bullets: ["Answer before you look", "Check against your notes", "Focus on what you missed"] }
          ],
          tryIt: "Pick a real upcoming test. Ask AI for a day-by-day study plan using the time you really have. Do the first day's practice questions and check them against your notes.",
          youCanNow: "make a study plan and practice with AI for a real test.",
          quickCheck: [
            { objective: "O5", q: "What works better than cramming the night before?", options: ["Rereading notes once", "Studying a little each day and testing yourself", "Sleeping with your book", "Only reading the AI plan"], answer: 1, why: "Studying a little each day with self-tests helps you remember more." },
            { objective: "O5", q: "You got 3 of 5 practice questions wrong on cell parts. What do you do next?", options: ["Move on to a new topic", "Delete the questions", "Ask AI for the answers and memorize them", "Spend more time on cell parts and check your notes"], answer: 3, why: "Focus your study time on what you missed." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Using AI honestly at school",
          minutes: 5,
          goal: "Follow your school's AI rules and say how you used AI.",
          text: [
            "Schools have different AI rules. Some allow it for brainstorming and feedback, some want you to say when you used it, and some ban it for certain work. Your teacher's rule for that assignment is the one that counts.",
            "Never hand in AI-written work as your own when it is not allowed. It can count as cheating, and you miss the learning. If AI helped, say how: \"I used AI to make practice questions and to get feedback on my second paragraph.\"",
            "AI can make up facts and sources. Never copy a quote or a book title from AI into your work without finding it yourself. Keep private information out of AI tools, and use your school account for school tools."
          ],
          steps: ["Read your teacher's AI rule for this assignment.", "Use AI only in the ways allowed.", "Write one line saying how you used it.", "Check any fact or source yourself before using it."],
          words: [["Academic integrity", "being honest in schoolwork: what you hand in shows what you did."], ["Cite", "say where information came from."]],
          slides: [
            { title: "Rules differ", bullets: ["Some allow AI for ideas or feedback", "Some ban it for certain work", "Your teacher's rule counts"] },
            { title: "Be open about AI help", bullets: ["Never pass off AI work as yours", "Say how AI helped, in one line"] },
            { title: "Check facts and sources", bullets: ["AI can invent quotes and books", "Find every source yourself", "No private information in AI"] }
          ],
          tryIt: "Final task: for a real test or project in the next two weeks, make a day-by-day study plan with AI, do 5 practice questions with hidden answers, check them against your notes, and write one line on how you followed your school's AI rules.",
          youCanNow: "use AI for school in ways that are allowed, honest and actually help you learn.",
          quickCheck: [
            { objective: "O6", q: "Whose AI rule counts for a particular assignment?", options: ["Your friend's", "The AI company's", "Your teacher's", "Whoever is easiest"], answer: 2, why: "Schools differ, and your teacher's rule for that assignment is the one that counts." },
            { objective: "O6", q: "AI gives you a great quote for your essay. What do you do before using it?", options: ["Find it in the real source yourself", "Use it; AI does not make mistakes", "Change a few words", "Add a made-up page number"], answer: 0, why: "AI can make up quotes and sources, so you find them yourself first." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Writing and studying smarter",
        questions: [
          { objective: "O4", q: "Which request gets useful feedback without doing your work?", options: ["\"Do not rewrite it. Tell me 3 things to improve and why.\"", "\"Rewrite my essay\"", "\"Write it for me\"", "\"Make it perfect\""], answer: 0, why: "Asking for feedback keeps the writing yours." },
          { objective: "O4", q: "Your teacher does not allow AI feedback. You can:", options: ["Use AI secretly", "Skip writing", "Copy a friend", "Ask a classmate, writing center or the teacher"], answer: 3, why: "Other people can give feedback within the rules." },
          { objective: "O5", q: "What is spaced practice?", options: ["Studying all night before the test", "Studying a little over several days", "Skipping study", "Studying in space"], answer: 1, why: "Spreading study over days helps you remember." },
          { objective: "O6", q: "AI gives you a quote from a book for your essay. You should:", options: ["Find the quote in the real book yourself first", "Copy it in", "Make up a page number", "Ask AI if it is real"], answer: 0, why: "AI can invent quotes; check the real source." },
          { objective: "O6", q: "Whose AI rule counts for an assignment?", options: ["A friend's", "The AI company's", "Your teacher's", "Nobody's"], answer: 2, why: "Your teacher sets the rule for that assignment." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School Success",
    questions: [
      { objective: "O1", q: "To plan your week with AI, list:", options: ["Your passwords", "Tasks, due dates and fixed times", "Your friends' phone numbers", "Nothing"], answer: 1, why: "Those facts let AI build a real plan." },
      { objective: "O1", q: "A good weekly plan includes:", options: ["No breaks", "Only video games", "Everything on Sunday night", "Hardest work first and breaks"], answer: 3, why: "Breaks and doing hard work first help you finish." },
      { objective: "O1", q: "After AI makes a plan, you should:", options: ["Ignore it", "Share it with strangers", "Delete it", "Change it to fit your life and copy it to a calendar"], answer: 3, why: "The plan only helps when it fits and you can see it." },
      { objective: "O2", q: "Why break a big project into steps?", options: ["It makes it longer", "Small steps feel doable", "Teachers hate it", "It is required by law"], answer: 1, why: "Small steps make big work manageable." },
      { objective: "O2", q: "A good request to split a project is:", options: ["\"project\"", "\"Do my project\"", "\"Break this into 30-minute steps with dates, finishing two days early\"", "\"Make it go away\""], answer: 2, why: "It sets step size, dates and a buffer." },
      { objective: "O2", q: "If AI's steps and your teacher's rubric disagree:", options: ["Follow the rubric", "Follow AI", "Do neither", "Ask a stranger"], answer: 0, why: "Your teacher grades with the rubric." },
      { objective: "O3", q: "When using AI with a hard reading, first:", options: ["Skip to the summary", "Read the paragraph yourself", "Close the book", "Ask AI for the answers to the quiz"], answer: 1, why: "Reading first means AI helps you understand, not skip." },
      { objective: "O3", q: "Why can't an AI summary replace the reading?", options: ["It is too long", "It costs money", "It is always perfect", "It can miss or get things wrong"], answer: 3, why: "Summaries can leave out or twist important parts." },
      { objective: "O3", q: "Which is a helpful reading prompt?", options: ["\"What do these 3 words mean?\"", "\"Write my book report\"", "\"Give me my grade\"", "\"Read it for me forever\""], answer: 0, why: "Defining hard words helps you understand." },
      { objective: "O4", q: "Where does the learning in writing mostly happen?", options: ["Copying AI text", "Printing the page", "Writing your own draft and revising it", "Choosing a font"], answer: 2, why: "Drafting and revising build the skill." },
      { objective: "O4", q: "When AI gives feedback, who makes the changes?", options: ["AI", "A stranger", "You, in your own words", "Nobody"], answer: 2, why: "Revising yourself keeps the work yours." },
      { objective: "O4", q: "What does revise mean?", options: ["Improve your writing by changing it", "Delete it", "Print it", "Hand it in late"], answer: 0, why: "Revising is improving a draft." },
      { objective: "O5", q: "Which study habit works best?", options: ["Cramming the night before", "Only rereading", "Not studying", "A little each day with self-tests"], answer: 3, why: "Spaced practice with self-testing works well." },
      { objective: "O5", q: "Tell AI which three things for a study plan?", options: ["Your password, address and age", "Test date, topics and daily time", "Favorite color, food and song", "Nothing"], answer: 1, why: "Those let AI build a fitting plan." },
      { objective: "O5", q: "After practice questions, spend more time on:", options: ["The ones you got wrong", "The ones you got right", "None of them", "New random topics"], answer: 0, why: "Focusing on mistakes fixes gaps." },
      { objective: "O6", q: "Handing in AI-written work when it is not allowed:", options: ["Is always fine", "Is required", "Can count as cheating", "Is extra credit"], answer: 2, why: "It breaks the rules and skips learning." },
      { objective: "O6", q: "A good line about AI use is:", options: ["Nothing at all", "\"I used AI to make practice questions and get feedback on paragraph 2\"", "\"AI did everything\" when it did not", "\"I never use computers\""], answer: 1, why: "It says honestly how AI helped." },
      { objective: "O6", q: "AI lists a book source for your project. You should:", options: ["Copy it into your list", "Make up an author", "Ignore all sources", "Find the book yourself before using it"], answer: 3, why: "AI can invent sources." },
      { objective: "O6", q: "Which account should you use for school-approved tools?", options: ["A friend's account", "A fake account", "No account ever", "Your school account"], answer: 3, why: "School tools are set up for your school account." },
      { objective: "O6", q: "Before signing up for a new AI app you should:", options: ["Use any birthday", "Check its age rule and talk with a parent or guardian", "Give it your school password", "Skip the terms"], answer: 1, why: "Age rules and a parent's or guardian's OK come first." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      3,
      5,
      6,
      7,
      9,
      10,
      12,
      14,
      15
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Study plan fits real life",
        objective: "O5",
        notYet: "No plan, or it ignores classes, activities and work.",
        meets: "A day-by-day plan up to the test date that fits around fixed times.",
        exceeds: "The plan was changed after day one based on what was missed."
      },
      {
        name: "Weekly time planning",
        objective: "O1",
        notYet: "Study time is not on a calendar or planner.",
        meets: "Study sessions are copied into a planner or calendar with breaks.",
        exceeds: "The hardest topics are scheduled first in each session."
      },
      {
        name: "Practice and checking",
        objective: "O5",
        notYet: "Answers were looked at before trying, or not checked.",
        meets: "Five practice questions answered first, then checked against notes.",
        exceeds: "Wrong answers are listed with what to study more."
      },
      {
        name: "Honest AI use",
        objective: "O6",
        notYet: "No line on AI use, or AI was used in a way the teacher does not allow.",
        meets: "One clear line on how AI was used, matching the teacher's rule.",
        exceeds: "Also notes any fact or source from AI that was checked."
      }
    ]
  },
  evaluation: {
    results: [
      "Learners who finish the course and pass the final task (rubric)",
      "Learners who report a better test or project grade after using their study plan (30-day follow-up)",
      "Learners who report turning in big projects on time in the 30-day follow-up",
      "Teachers or programs that report fewer AI-related rule problems among learners"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A phone, school computer or library computer with internet",
      "A free AI assistant the learner is allowed to use, ideally through a school account",
      "A planner, Google Calendar or the school calendar app",
      "Class notes and the instructions for one real test or project",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Share your school's AI policy at the start and ask learners to bring each teacher's rule for their chosen test or project.",
      "Have learners use a real upcoming test or project so the plan is useful right away.",
      "Remind learners never to paste private information, and to use school accounts for school tools.",
      "Check in a week later to see whether learners kept to their study plans and adjust them together.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time."
    ]
  }
};
