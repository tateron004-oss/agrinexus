"use strict";

// Koach Learn course: Leadership Development -> "AI for School and Educational Leaders 3: AI for Lesson Planning" (course 3 of 8).
// Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "edu-ai-lesson-planning",
  category: "Leadership Development",
  name: "AI for School and Educational Leaders 3: AI for Lesson Planning",
  skills: "Planning backward from the objective, Prompting for a full lesson plan, Checking AI plans for accuracy and alignment, Building in differentiation, Drafting a unit outline, Coaching teams to plan with AI",
  outcome: "plan a complete lesson with an AI assistant, from objective and success criteria to activities, differentiation and an exit ticket, check it for accuracy, alignment and bias, and turn your process into a template your team can reuse.",
  about: [
    "This course is for teachers, instructional coaches, department heads and principals who support planning. AI can cut planning time, but a fast plan is only good if it is accurate, aligned to what students must learn, and right for your students.",
    "Chapter 1 teaches a backward-design process with AI: start from the objective, decide the evidence of learning, then build activities, and check everything. Chapter 2 adds differentiation, unit planning, and how leaders coach teams to plan with AI well.",
    "Use made-up class descriptions. Never put student names, IEP or 504 details, grades or other identifying information into a tool your district has not approved. A knowledge check closes each chapter and a 20-question quiz closes the course. This is course 3 of 8 in AI for School and Educational Leaders."
  ],
  finalTask: "Use an AI assistant to plan one complete lesson you (or a teacher you coach) will teach: objective and success criteria from a standard you choose, a hook, guided and independent practice, supports for three groups (needs more support, on level, ready for more), and a three-question exit ticket with answers. Check it with the quality checklist, record what you changed and why, and save your prompts as a template for your team.",
  chapters: [
    {
      name: "Chapter 1: Planning a lesson with AI",
      lessons: [
        {
          title: "Start with the objective, not the activity",
          minutes: 5,
          goal: "Write a clear objective and success criteria before asking AI for activities.",
          text: [
            "AI will happily produce a fun activity that teaches nothing in particular. Backward design prevents that: first decide what students should know or be able to do, then how you will see it, then the activities.",
            "You choose the standard. Copy its exact wording from your state's official standards site or your district's curriculum, not from the AI, because AI can misquote or invent standards codes. Then ask AI to help you turn it into a student-friendly objective (\"I can...\") and two or three success criteria.",
            "Example prompt: \"Here is a standard: [paste it]. Write a one-lesson objective for 6th graders in student-friendly words, and three success criteria that show the objective was met.\" Edit until you would put it on the board."
          ],
          steps: ["Choose the standard from your state or district source.", "Paste its exact wording into the prompt.", "Ask for an \"I can\" objective and success criteria.", "Edit until it is clear to students.", "Only then plan activities."],
          words: [["Backward design", "planning from the learning goal, to the evidence, to the activities."], ["Success criteria", "what students will be able to show when they have met the objective."], ["Standard", "the official statement of what students should learn, set by your state or district."]],
          slides: [
            { title: "Backward design", bullets: ["1. What should students learn?", "2. How will we see it?", "3. Then the activities"] },
            { title: "You choose the standard", bullets: ["Copy it from the official state or district source", "AI can misquote or invent standards codes"] },
            { title: "Objective and success criteria", bullets: ["\"I can...\" in student-friendly words", "Two or three things students will show"] }
          ],
          tryIt: "Pick a standard for a lesson coming up. Copy it from the official source, then use AI to write an \"I can\" objective and three success criteria. Edit them until they are ready for the board.",
          youCanNow: "start an AI-assisted lesson plan from a real standard, objective and success criteria."
        },
        {
          title: "Prompting for the full lesson",
          minutes: 6,
          goal: "Get a structured lesson plan draft from AI with a reusable prompt.",
          text: [
            "With the objective set, ask for the whole lesson in your school's format. A strong prompt gives: grade and subject, class length, the objective and success criteria, what students already know, materials you have, and the sections you want.",
            "Example: \"Plan a 50-minute 6th-grade lesson. Objective: [paste]. Success criteria: [paste]. Students already know [x]. Materials: whiteboards, a projector, no devices. Sections: hook (5 min), mini-lesson (10), guided practice (15), independent practice (15), exit ticket (5). Use a table with time, teacher actions, student actions.\"",
            "Treat the result as a draft from a fast but new colleague. Ask follow-ups: \"make the hook connect to students' lives\", \"add two checks for understanding during the mini-lesson\", \"shorten guided practice to 10 minutes\"."
          ],
          steps: ["Give grade, subject and class length.", "Paste objective and success criteria.", "Say what students know and what materials you have.", "List the sections and timings you want.", "Ask for a table, then improve with follow-ups."],
          words: [["Mini-lesson", "a short, focused teaching segment."], ["Check for understanding", "a quick way to see if students are following, like thumbs up or a whiteboard answer."]],
          slides: [
            { title: "Give the AI the context", bullets: ["Grade, subject, class length", "Objective and success criteria", "Prior knowledge and materials"] },
            { title: "Ask for your format", bullets: ["Sections with timings", "Table: time, teacher, students"] },
            { title: "Improve it", bullets: ["\"Connect the hook to students' lives\"", "\"Add two checks for understanding\""] }
          ],
          tryIt: "Use the prompt pattern to get a full lesson draft for your objective from Lesson 1. Ask at least two follow-ups to improve it.",
          youCanNow: "get a usable, structured lesson draft from AI and improve it with follow-ups."
        },
        {
          title: "Checking the plan: accuracy, alignment and bias",
          minutes: 5,
          goal: "Check an AI lesson plan with a five-point quality checklist.",
          text: [
            "Every AI plan needs a teacher's check before it reaches students. Use five questions. Accurate: are all facts, examples, dates and answers correct? Aligned: does every activity move students toward the objective, and does the exit ticket measure it?",
            "Right level: is it the right difficulty and length for these students and this time? Fair and inclusive: are examples, names and contexts respectful and varied, free of stereotypes, and accessible to students with disabilities and English learners? Doable: do you have the materials and time?",
            "Mark what you changed. Over time this shows your team where AI plans tend to go wrong (often: too much content for the time, and activities that look busy but do not practice the objective)."
          ],
          steps: ["Accurate: check facts, examples and answers.", "Aligned: each activity serves the objective; exit ticket measures it.", "Right level for these students and this time.", "Fair and inclusive: no stereotypes; accessible.", "Doable with your materials; note what you changed."],
          words: [["Alignment", "when objectives, activities and assessment all match."], ["Stereotype", "an unfair, fixed idea about a group of people."], ["Accessible", "usable by every student, including those with disabilities."]],
          slides: [
            { title: "The five-point check", bullets: ["Accurate", "Aligned", "Right level", "Fair and inclusive; doable"] },
            { title: "Common AI plan problems", bullets: ["Too much content for the time", "Busy activities that miss the objective", "Wrong answers or invented facts"] },
            { title: "Record your changes", bullets: ["Shows where AI plans go wrong", "Builds your team's judgment"] }
          ],
          tryIt: "Run your lesson draft through the five-point check. Fix every problem and list the changes you made.",
          youCanNow: "check an AI lesson plan for accuracy, alignment, level, fairness and practicality."
        }
      ],
      check: {
        title: "Knowledge Check 1: Planning a lesson with AI",
        questions: [
          { q: "In backward design, what comes first?", options: ["A fun activity", "The worksheet", "What students should learn", "The seating chart"], answer: 2, why: "Plan from the learning goal." },
          { q: "Where should the standard's wording come from?", options: ["Your state's or district's official source", "Whatever the AI says", "A random website", "Memory"], answer: 0, why: "AI can misquote or invent standards." },
          { q: "Which detail helps most in a lesson-planning prompt?", options: ["The names of struggling students", "The principal's phone number", "Students' test scores by name", "Class length, objective, prior knowledge and materials"], answer: 3, why: "Context improves the plan without private data." },
          { q: "An AI activity is fun but does not practice the objective. Which check fails?", options: ["Accurate", "Aligned", "Doable", "Fair"], answer: 1, why: "Alignment means activities serve the objective." },
          { q: "What is the most common problem with AI lesson plans?", options: ["Too little content", "Perfect timing", "No text at all", "Too much content for the time"], answer: 3, why: "AI often overfills the time." }
        ]
      }
    },
    {
      name: "Chapter 2: Differentiation, units and team planning",
      lessons: [
        {
          title: "Building in differentiation",
          minutes: 6,
          goal: "Use AI to plan supports for students who need more help and challenge for those ready for more.",
          text: [
            "Describe groups by need, never by name: \"students who need more support with multi-step problems\", \"students on level\", \"students ready for more challenge\". Ask AI for the same objective reached three ways: more scaffolding (worked examples, sentence starters, visuals), on-level practice, and extension (a harder problem or a transfer task).",
            "Ask for supports that help everyone: clear visuals, vocabulary with pictures, choices in how students show learning. This approach, planning for variety from the start, is often called Universal Design for Learning (UDL); look up CAST's UDL Guidelines for more.",
            "Students with IEPs or 504 plans must receive the accommodations in their plans; AI-generated supports never replace them. Check with the special education teacher, and do not put plan details into unapproved tools."
          ],
          steps: ["Describe groups by need, not by name.", "Ask for three paths to the same objective.", "Ask for supports that help everyone: visuals, vocabulary, choice.", "Check IEP and 504 accommodations with the special education teacher.", "Keep plan details out of unapproved tools."],
          words: [["Differentiation", "adjusting teaching so students with different needs can reach the same goal."], ["Scaffolding", "temporary support, like worked examples or sentence starters."], ["Universal Design for Learning (UDL)", "planning lessons for a wide range of learners from the start."]],
          slides: [
            { title: "Groups by need, not name", bullets: ["Needs more support", "On level", "Ready for more"] },
            { title: "Three paths, one objective", bullets: ["Scaffolds: examples, starters, visuals", "On-level practice", "Extension or transfer task"] },
            { title: "Supports for everyone", bullets: ["Visuals, vocabulary, choice", "UDL: see CAST's UDL Guidelines"] },
            { title: "IEPs and 504 plans", bullets: ["Required accommodations still apply", "AI supports never replace them"] }
          ],
          tryIt: "Add differentiation to your lesson: ask AI for three paths to the objective, check them, and confirm which IEP or 504 accommodations still need to be planned with your special education colleague.",
          youCanNow: "plan support and challenge for different learners with AI while honoring required accommodations."
        },
        {
          title: "From lesson to unit",
          minutes: 5,
          goal: "Draft a unit outline with AI and check its pacing.",
          text: [
            "A unit is a sequence of lessons toward bigger goals. Give AI the unit's standards (from your official source), the number of class days, holidays or testing days, and where students start. Ask for a day-by-day outline with objectives, key activities and checkpoints.",
            "Check pacing first: AI often packs in too much. Make sure each lesson builds on the last, that there are review days and a plan for re-teaching, and that the end-of-unit assessment matches the objectives.",
            "Use AI to brainstorm what it does well: a real-world project to anchor the unit, common misconceptions to plan for, and questions that make students think. You decide what fits."
          ],
          steps: ["Give unit standards, number of days and calendar gaps.", "Ask for a day-by-day outline with objectives and checkpoints.", "Check pacing: cut, add review and re-teach days.", "Check that the final assessment matches the objectives.", "Use AI to brainstorm misconceptions and anchor projects."],
          words: [["Unit", "a set of lessons that work toward bigger learning goals."], ["Pacing", "how much is taught each day and how fast the class moves."], ["Misconception", "a common wrong idea students have about a topic."]],
          slides: [
            { title: "Give the unit context", bullets: ["Standards from the official source", "Number of days and calendar gaps", "Where students start"] },
            { title: "Check pacing", bullets: ["AI often packs in too much", "Add review and re-teach days", "Assessment matches the objectives"] },
            { title: "Brainstorm with AI", bullets: ["Common misconceptions", "Anchor projects", "Questions that make students think"] }
          ],
          tryIt: "Ask AI for a ten-day outline of the unit your lesson belongs to. Adjust the pacing, add one review day, and list three misconceptions to plan for.",
          youCanNow: "draft and pace a unit outline with AI."
        },
        {
          title: "Coaching teams to plan with AI",
          minutes: 6,
          goal: "Turn your planning process into a template and coach a team to use it.",
          text: [
            "Leaders multiply good practice by making it repeatable. Turn what you learned into a planning template: the prompts for objective, full lesson, differentiation and unit, plus the five-point quality checklist.",
            "Use it in a team or professional learning community (PLC) meeting: each teacher plans one lesson with the template, then partners swap plans and run the quality check on each other's. Discuss what AI got wrong; that builds shared judgment faster than any training slide.",
            "Set expectations: AI-assisted plans are welcome, and teachers stay responsible for what they teach. Make sure only approved tools are used and no student information goes in. Ask teachers to note time saved and quality issues, so you know if the practice is working."
          ],
          steps: ["Write the planning template: four prompts and the checklist.", "In a team meeting, each teacher plans one lesson with it.", "Partners swap and run the quality check.", "Discuss what AI got wrong.", "Set expectations and track time saved and quality issues."],
          words: [["PLC", "professional learning community: a team of teachers who meet to improve teaching together."], ["Template", "a reusable starting format."]],
          slides: [
            { title: "Make it repeatable", bullets: ["Four prompts: objective, lesson, differentiation, unit", "Plus the five-point checklist"] },
            { title: "Team practice", bullets: ["Each teacher plans one lesson", "Partners swap and check", "Discuss what AI got wrong"] },
            { title: "Clear expectations", bullets: ["Teachers own what they teach", "Approved tools, no student info", "Track time saved and quality"] }
          ],
          tryIt: "Final task: finish your complete lesson plan (objective, success criteria, hook, guided and independent practice, three groups, exit ticket with answers), check it with the five-point checklist, record your changes, and save your four prompts and the checklist as a team template.",
          youCanNow: "plan lessons with AI to a high standard and help a team do the same."
        }
      ],
      check: {
        title: "Knowledge Check 2: Differentiation, units and team planning",
        questions: [
          { q: "How should you describe student groups in a prompt?", options: ["By name", "By test score and name", "By need, such as \"needs more support with multi-step problems\"", "By family income"], answer: 2, why: "Describe needs without identifying students." },
          { q: "A student's IEP lists an accommodation. AI suggested different supports. What applies?", options: ["The IEP accommodation still must be provided", "The AI supports replace the IEP", "Neither", "Ask the AI to decide"], answer: 0, why: "Required accommodations are not replaced by AI suggestions." },
          { q: "What is the first thing to check in an AI unit outline?", options: ["The font", "Pacing", "The title", "The colors"], answer: 1, why: "AI often packs in too much." },
          { q: "In a PLC, why have partners check each other's AI plans?", options: ["To build shared judgment about where AI goes wrong", "To grade teachers", "To skip planning", "To use more AI"], answer: 0, why: "Discussing errors builds team judgment." },
          { q: "Who is responsible for an AI-assisted lesson taught in class?", options: ["The AI company", "No one", "The students", "The teacher"], answer: 3, why: "Teachers stay responsible for what they teach." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for School and Educational Leaders 3: AI for Lesson Planning",
    questions: [
      { q: "Backward design plans in which order?", options: ["Activities, goal, evidence", "Goal, evidence, activities", "Worksheet, test, goal", "Evidence, activities, goal"], answer: 1, why: "Start with the goal." },
      { q: "Success criteria describe:", options: ["The room layout", "The teacher's salary", "What students will show when they meet the objective", "The bell schedule"], answer: 2, why: "They make the objective visible." },
      { q: "An \"I can\" objective is:", options: ["A test score", "A slogan", "The objective in student-friendly words", "A rule"], answer: 2, why: "Students should understand the goal." },
      { q: "Why not take standards codes from the AI?", options: ["AI can misquote or invent them", "They are secret", "AI never knows standards", "They are too long"], answer: 0, why: "Use the official source." },
      { q: "A full-lesson prompt should include:", options: ["Grades by name", "Student names", "Parent emails", "Class length, objective, prior knowledge, materials, sections"], answer: 3, why: "Context, not private data." },
      { q: "An AI lesson draft should be treated as:", options: ["The final plan", "A draft from a fast but new colleague", "A legal document", "A student's work"], answer: 1, why: "Teachers review and edit." },
      { q: "A check for understanding is:", options: ["A parent meeting", "A bank check", "A report card", "A quick way to see if students are following"], answer: 3, why: "It catches confusion early." },
      { q: "Which is part of the five-point check?", options: ["Longest", "Most colorful", "Fair and inclusive", "Most popular"], answer: 2, why: "Fairness and access are part of quality." },
      { q: "Alignment means:", options: ["Objectives, activities and assessment match", "Desks in rows", "The plan is long", "The AI agreed"], answer: 0, why: "Everything serves the objective." },
      { q: "Why record what you changed in an AI plan?", options: ["It is required by law", "It shows where AI plans go wrong", "It makes the plan longer", "To blame the AI"], answer: 1, why: "It builds judgment over time." },
      { q: "Differentiation means:", options: ["Adjusting teaching so different students reach the same goal", "Giving different grades", "Separating classes permanently", "Using different AI tools"], answer: 0, why: "Same goal, different paths." },
      { q: "Scaffolding includes:", options: ["Detention", "Removing all support", "A harder test", "Worked examples and sentence starters"], answer: 3, why: "Temporary supports help students reach the goal." },
      { q: "UDL stands for:", options: ["Unit Daily Lesson", "Universal Design for Learning", "Upper Division Level", "Unified District Login"], answer: 1, why: "Planning for a wide range of learners from the start." },
      { q: "An extension task is for students who:", options: ["Need more support", "Are absent", "Are ready for more challenge", "Finished the year"], answer: 2, why: "It deepens learning for ready students." },
      { q: "IEP and 504 accommodations:", options: ["Go into any AI tool", "Can be replaced by AI supports", "Must still be provided, whatever AI suggests", "Are optional"], answer: 2, why: "They are required." },
      { q: "A unit outline prompt should include:", options: ["Standards, number of days and calendar gaps", "Student names", "Staff salaries", "Nothing"], answer: 0, why: "Pacing depends on real time available." },
      { q: "AI is especially useful in unit planning for:", options: ["Approving tools", "Deciding grades", "Writing IEPs", "Brainstorming misconceptions and anchor projects"], answer: 3, why: "Brainstorming is a strength; you decide what fits." },
      { q: "A planning template should include:", options: ["Student data", "The prompts and the quality checklist", "Passwords", "Nothing"], answer: 1, why: "It makes good practice repeatable." },
      { q: "PLC stands for:", options: ["Principal leadership council", "Public library card", "Planning lesson calendar", "Professional learning community"], answer: 3, why: "Teachers improving teaching together." },
      { q: "To know if AI planning is working, leaders should track:", options: ["Nothing", "Only time saved", "Time saved and quality issues", "Number of prompts typed"], answer: 2, why: "Speed without quality is not success." }
    ]
  }
};
