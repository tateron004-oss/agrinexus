"use strict";

// Koach Learn course: Leadership Development -> "AI and Project-Based Learning" (advanced topic in AI for School and Educational Leaders).
// Shape copied from re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "edu-ai-pbl",
  category: "Leadership Development",
  name: "AI and Project-Based Learning",
  skills: "Designing a project with a driving question, Planning milestones and rubrics with AI, Teaching students to research with AI responsibly, Setting AI use rules for each project stage, Assessing process and individual learning, Running a public showcase",
  outcome: "design a project-based learning unit with AI's help, a driving question, milestones, a rubric and an authentic public product, with clear AI use rules for each stage, a student AI log, and checkpoints that show each student's own learning.",
  about: [
    "This course is for teachers, coaches and school leaders who use or want to use project-based learning (PBL). In PBL, students learn by working over time on a real question and sharing a product with a real audience. AI changes how students research, create and collaborate; it also makes it easier to skip the learning.",
    "Chapter 1 uses AI to design the project: the driving question, the launch, the milestones and the rubric, and teaches students to research with AI responsibly. Chapter 2 manages the project: AI rules for each stage, team tools, checkpoints that show individual learning, and a public product with honest disclosure of AI use.",
    "Use approved tools for anything students do, and keep student information out of unapproved tools. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Design a two- to four-week PBL unit: a driving question, an entry event, four to six milestones each with an AI use level, a rubric for the final product and for process, an individual checkpoint at each milestone, a student AI log template, and a plan for a public showcase with a real audience. Check it with a colleague and revise one part based on their feedback.",
  chapters: [
    {
      name: "Chapter 1: Designing the project with AI",
      lessons: [
        {
          title: "PBL essentials and AI's place in them",
          minutes: 5,
          goal: "Name the essentials of a strong project and where AI helps or harms.",
          text: [
            "Strong projects share a few essentials: a driving question that is open and matters to students; sustained inquiry over time; authentic work connected to the real world; student voice and choice; critique and revision; and a public product shared with an audience beyond the teacher.",
            "AI can help the teacher design all of this faster, and can help students brainstorm, research, draft and get feedback. It can also short-circuit inquiry: a student can ask AI for the answer to the driving question in seconds.",
            "So design for it. The driving question should be local or personal enough that AI cannot simply answer it (\"How can we reduce food waste in our cafeteria?\" rather than \"What causes food waste?\"), and the learning should show in the process, not only the product."
          ],
          words: [["Project-based learning (PBL)", "learning by working over time on a real question and sharing a product with an audience."], ["Driving question", "the open question that guides a whole project."], ["Authentic", "connected to real people, places and problems."]],
          slides: [
            { title: "PBL essentials", bullets: ["Driving question; sustained inquiry", "Authentic work; voice and choice", "Critique and revision; public product"] },
            { title: "AI can help or short-circuit", bullets: ["Helps design, brainstorm, research, draft", "Can answer a generic question in seconds"] },
            { title: "Design for it", bullets: ["Local or personal driving questions", "Learning shows in the process"] }
          ],
          tryIt: "Ask an AI tool to answer a driving question you have used or seen. Then rewrite the question so it is local or personal enough that AI cannot simply answer it.",
          youCanNow: "name the essentials of strong PBL and design driving questions AI cannot short-circuit."
        },
        {
          title: "Driving questions, launches, milestones and rubrics",
          minutes: 6,
          goal: "Use AI to draft the project's driving question, entry event, milestones and rubric.",
          text: [
            "Give AI the grade, subject, standards (from your official source), length of the project, and your community context (in general terms). Ask for five driving-question options, then pick and refine one with students if you can.",
            "Ask for an entry event that sparks curiosity (a guest, a mystery object, a local problem, a site visit) and for four to six milestones: research, plan, first draft or prototype, critique, revision, final product. Ask for the knowledge each milestone requires, so you can plan mini-lessons.",
            "Ask for a rubric with two parts: the final product (content and quality) and process (collaboration, revision, use of evidence). Check that each rubric criterion matches your standards and that the timeline is realistic; AI often packs in too much."
          ],
          steps: ["Give grade, subject, standards, length and context.", "Pick and refine a driving question.", "Draft the entry event and 4-6 milestones.", "List the knowledge each milestone needs.", "Draft a product and process rubric; check standards and timeline."],
          words: [["Entry event", "an activity that launches a project and sparks questions."], ["Milestone", "a checkpoint where part of the project is due."], ["Critique", "structured feedback on work in progress."]],
          slides: [
            { title: "Give AI the context", bullets: ["Grade, subject, standards", "Project length, community context"] },
            { title: "Draft the structure", bullets: ["Driving question options", "Entry event", "4-6 milestones with needed knowledge"] },
            { title: "Two-part rubric", bullets: ["Product: content and quality", "Process: collaboration, revision, evidence", "Check standards and timeline"] }
          ],
          tryIt: "Use AI to draft the driving question, entry event, milestones and a two-part rubric for a project you could teach. Adjust the timeline to fit your calendar.",
          youCanNow: "design a project's structure quickly with AI and check it against standards and time."
        },
        {
          title: "Research with AI: search, verify, cite",
          minutes: 5,
          goal: "Teach students a research routine that uses AI without trusting it blindly.",
          text: [
            "In projects, students research. AI can help them understand a topic, generate questions and find search terms, but it can invent facts and sources. Teach a three-step routine: Explore with AI (\"What questions should I ask about food waste in schools?\" \"What words should I search for?\"); Find real sources (search engines, library databases, interviews, local data); Verify and cite (check every fact against at least one real source and cite that source, not the AI).",
            "Primary sources are a PBL strength: students can interview cafeteria staff, survey classmates (anonymously), measure waste themselves. AI cannot do that for them, which keeps the inquiry real.",
            "Have students keep a research log: question, source, what they learned, how they verified it."
          ],
          steps: ["Explore: use AI to generate questions and search terms.", "Find real sources: search, databases, interviews, local data.", "Verify each fact against a real source.", "Cite the real source, not the AI.", "Keep a research log."],
          words: [["Primary source", "first-hand evidence, such as an interview, survey or measurement."], ["Research log", "a record of questions, sources, findings and checks."]],
          slides: [
            { title: "Three-step research routine", bullets: ["Explore with AI: questions, search terms", "Find real sources", "Verify and cite the real source"] },
            { title: "Primary sources", bullets: ["Interviews, anonymous surveys, measurements", "AI cannot do this for them"] },
            { title: "Research log", bullets: ["Question, source, learning, how verified"] }
          ],
          tryIt: "Write the research routine and a research log template for your project. Test it yourself on one research question from the project.",
          youCanNow: "teach students to research with AI while relying on real, verified sources."
        }
      ],
      check: {
        title: "Knowledge Check 1: Designing the project with AI",
        questions: [
          { q: "Which driving question is hardest for AI to simply answer?", options: ["What causes food waste?", "What is food waste?", "How can we reduce food waste in our cafeteria?", "Who invented composting?"], answer: 2, why: "Local questions need students' own inquiry." },
          { q: "What is an entry event?", options: ["An activity that launches a project and sparks questions", "The final presentation", "A test", "A field trip permission form"], answer: 0, why: "It creates curiosity at the start." },
          { q: "A two-part PBL rubric scores:", options: ["Only the final product", "Only the presentation", "Only attendance", "The product and the process"], answer: 3, why: "Process shows learning along the way." },
          { q: "Students should cite:", options: ["The AI tool as their source", "The real source they verified", "Nothing", "Wikipedia only"], answer: 1, why: "AI is not a reliable source; real sources are." },
          { q: "Which is a primary source?", options: ["An AI summary", "A chatbot answer", "A textbook summary", "An interview with cafeteria staff"], answer: 3, why: "First-hand evidence keeps inquiry real." }
        ]
      }
    },
    {
      name: "Chapter 2: Managing and assessing the project",
      lessons: [
        {
          title: "AI rules for each stage and a student AI log",
          minutes: 5,
          goal: "Set an AI use level for each milestone and a log students keep.",
          text: [
            "One AI rule for a whole project is too blunt. Set a level for each milestone, using your school's scale. For example: brainstorming, AI allowed for ideas; research, AI for questions and search terms only; first draft, no AI (students show their own thinking); critique, AI feedback allowed alongside peer feedback; final product, AI tools allowed for design and polish, with disclosure.",
            "Students keep an AI log: date, tool, what they asked, what they used, and what they changed. It takes a minute per entry and makes AI use visible and honest.",
            "Explain the reasons. Students follow rules they understand: \"The first draft is no-AI because we need to see your thinking before anyone helps.\""
          ],
          steps: ["List the milestones.", "Set an AI use level for each.", "Write the reason for each level.", "Give students an AI log template.", "Check logs at each milestone."],
          words: [["AI log", "a student's record of when and how they used AI."], ["Disclosure", "saying openly how AI was used."]],
          slides: [
            { title: "A level for each stage", bullets: ["Brainstorm: ideas allowed", "Research: questions and search terms", "First draft: no AI", "Final product: tools allowed, disclosed"] },
            { title: "The AI log", bullets: ["Date, tool, what asked", "What used, what changed"] },
            { title: "Explain why", bullets: ["\"We need to see your thinking first\""] }
          ],
          tryIt: "Write an AI use level and a one-line reason for each milestone of your project, and make a one-page AI log template for students.",
          youCanNow: "set clear, stage-by-stage AI rules for a project and make AI use visible."
        },
        {
          title: "Checkpoints that show individual learning",
          minutes: 6,
          goal: "Plan checkpoints that show what each student learned in a team project.",
          text: [
            "Team products can hide who learned what, and AI makes that easier. Add individual checkpoints at each milestone: a short exit ticket on the knowledge for that stage, a two-minute conference, a written reflection, or an individual explanation of one part of the team's work.",
            "Use AI to help you prepare: questions for each checkpoint, conference prompts, and reflection questions (\"What did you change after critique and why?\"). Keep student names and grades out of unapproved tools when you record results.",
            "Use team tools well: AI can help teams divide tasks, plan timelines and give feedback on drafts against the rubric. But every student should be able to explain the team's work and their own contribution."
          ],
          steps: ["Add an individual checkpoint at each milestone.", "Use AI to draft checkpoint, conference and reflection questions.", "Record results in your gradebook or an approved tool.", "Let teams use AI for planning and draft feedback as allowed.", "Every student explains the work and their part."],
          words: [["Checkpoint", "a short individual check on learning during a project."], ["Conference", "a short one-to-one conversation between teacher and student about their work."], ["Reflection", "writing or talking about what you learned and how."]],
          slides: [
            { title: "Team products can hide learning", bullets: ["Add individual checkpoints", "Exit tickets, conferences, reflections"] },
            { title: "AI helps you prepare", bullets: ["Checkpoint and conference questions", "Reflection prompts", "Records stay in approved tools"] },
            { title: "Team tools, individual proof", bullets: ["AI for planning and draft feedback", "Every student explains the work and their part"] }
          ],
          tryIt: "Use AI to draft an individual checkpoint for each milestone (one exit-ticket question, one conference prompt or one reflection question).",
          youCanNow: "assess each student's learning inside a team project."
        },
        {
          title: "The public product, showcase and reflection",
          minutes: 6,
          goal: "Plan an authentic showcase with honest AI disclosure and student reflection.",
          text: [
            "A real audience raises the quality of work: families, community members, local experts, the school board or a business that faces the problem. Plan the showcase early and invite people with a short message (AI can draft it).",
            "Ask teams to include an AI disclosure with their product (\"We used AI to brainstorm design ideas and to check grammar; all research data was collected by us\"). Honest disclosure is part of the product's integrity, and audiences respect it.",
            "Protect students: follow your school's rules for photos, names and recordings, and for sharing work online. End with reflection: what students learned about the topic, about teamwork, and about when AI helped or got in the way."
          ],
          steps: ["Choose a real audience and invite them early.", "Teams add an AI disclosure to their product.", "Follow school rules for photos, names and online sharing.", "Hold the showcase.", "Close with reflection on learning, teamwork and AI."],
          words: [["Showcase", "an event where students present their work to an audience."], ["Authentic audience", "real people who care about the work, beyond the teacher."]],
          slides: [
            { title: "A real audience", bullets: ["Families, experts, community, board", "Invite early"] },
            { title: "AI disclosure on every product", bullets: ["What AI did and what students did", "Honesty is part of integrity"] },
            { title: "Protect and reflect", bullets: ["School rules on photos and names", "Reflect: topic, teamwork, AI"] }
          ],
          tryIt: "Final task: assemble your PBL unit (driving question, entry event, milestones with AI levels, product and process rubric, individual checkpoints, student AI log, showcase plan). Share it with a colleague and revise one part based on their feedback.",
          youCanNow: "lead project-based learning where AI supports real inquiry and every student's learning shows."
        }
      ],
      check: {
        title: "Knowledge Check 2: Managing and assessing the project",
        questions: [
          { q: "Why set an AI use level for each milestone rather than one for the whole project?", options: ["AI requires it", "It is shorter", "Different stages build different skills", "To confuse students"], answer: 2, why: "A first draft may need no AI while polishing can use it." },
          { q: "What does a student AI log record?", options: ["Date, tool, what was asked, used and changed", "Grades", "Passwords", "Teacher notes"], answer: 0, why: "It makes AI use visible and honest." },
          { q: "How can you see what each student learned in a team project?", options: ["Only grade the team product", "Add individual checkpoints at each milestone", "Ask the AI", "Skip assessment"], answer: 1, why: "Individual checks show individual learning." },
          { q: "What should a team's AI disclosure say?", options: ["What AI did and what students did", "Nothing", "Only the tool's price", "That no AI exists"], answer: 0, why: "Honest disclosure is part of integrity." },
          { q: "Before posting student work online after the showcase, check:", options: ["The AI's opinion", "Nothing", "Only the font", "Your school's rules for photos, names and online sharing"], answer: 3, why: "Student privacy rules apply." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI and Project-Based Learning",
    questions: [
      { q: "PBL means students learn by:", options: ["Only reading textbooks", "Working over time on a real question and sharing a product", "Taking daily quizzes only", "Watching videos"], answer: 1, why: "That is the core of PBL." },
      { q: "A driving question should be:", options: ["Secret", "Answerable in one word", "Open and meaningful to students", "From a test bank"], answer: 2, why: "It guides sustained inquiry." },
      { q: "Making a driving question local helps because:", options: ["It needs no research", "It is shorter", "AI cannot simply answer it", "It avoids standards"], answer: 2, why: "Local questions need real inquiry." },
      { q: "Which is a PBL essential?", options: ["A public product for a real audience", "No revision", "Teacher-only audience", "No student choice"], answer: 0, why: "Public products raise quality." },
      { q: "Milestones are:", options: ["Rubric levels", "Grades", "Field trips", "Checkpoints where parts of the project are due"], answer: 3, why: "They structure the project." },
      { q: "For each milestone, AI can list:", options: ["Students' names", "The knowledge it requires, for mini-lesson planning", "Grades", "Passwords"], answer: 1, why: "This helps plan teaching." },
      { q: "AI project timelines often:", options: ["Skip milestones", "Leave too much time", "Are always perfect", "Pack in too much"], answer: 3, why: "Check against your calendar." },
      { q: "Step 1 of the research routine is:", options: ["Cite the AI", "Copy the AI's answer", "Explore with AI: questions and search terms", "Skip research"], answer: 2, why: "AI helps start, not finish, research." },
      { q: "Every fact students use should be:", options: ["Verified against a real source", "Taken from AI", "Unverified", "Made up"], answer: 0, why: "AI can invent facts." },
      { q: "An anonymous classmate survey is:", options: ["An AI summary", "A primary source", "A secondary review", "Not allowed"], answer: 1, why: "Students collect first-hand evidence." },
      { q: "A research log records:", options: ["Question, source, learning and how it was verified", "Passwords", "Grades", "Lunch orders"], answer: 0, why: "It documents real research." },
      { q: "Why might the first draft be a no-AI stage?", options: ["Because drafts do not matter", "AI is illegal", "To save money", "To see students' own thinking before help"], answer: 3, why: "Thinking first, help after." },
      { q: "Rules students understand are:", options: ["Secret rules", "Rules with reasons explained", "Rules that change daily", "Rules from the AI"], answer: 1, why: "Reasons build buy-in." },
      { q: "An individual checkpoint could be:", options: ["A group grade", "The team's final product only", "A two-minute conference", "Nothing"], answer: 2, why: "It shows one student's learning." },
      { q: "Reflection questions ask students:", options: ["Their grade", "Their password", "What they changed and why", "Nothing"], answer: 2, why: "Reflection deepens learning." },
      { q: "Every student on a team should be able to:", options: ["Explain the team's work and their part", "Only present their slide", "Stay silent", "Let AI explain"], answer: 0, why: "Shared understanding is part of learning." },
      { q: "An authentic audience is:", options: ["No one", "Only the teacher", "An AI tool", "Real people who care about the work"], answer: 3, why: "Real audiences raise quality." },
      { q: "An AI disclosure on a product shows:", options: ["The AI's price", "What AI did and what students did", "Student grades", "Nothing"], answer: 1, why: "Transparency builds trust." },
      { q: "Photos of students at the showcase should follow:", options: ["Vendor rules", "No rules", "Social media trends", "School rules on photos and names"], answer: 3, why: "Student privacy matters." },
      { q: "The final reflection should cover:", options: ["Only the AI tool", "Only the grade", "The topic, teamwork and when AI helped or got in the way", "Nothing"], answer: 2, why: "Students learn from reflecting on all three." }
    ]
  }
};
