"use strict";

// Koach Learn course: Leadership Development -> "AI-Powered Differentiation" (advanced topic in AI for School and Educational Leaders).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. FERPA via studentprivacy.ed.gov, checked 27 October 2026.

module.exports = {
  id: "edu-ai-differentiation",
  category: "Leadership Development",
  name: "AI-Powered Differentiation",
  skills: "Writing a quick pre-assessment, Designing tiered tasks, Building choice boards, Grouping flexibly from evidence, Running a differentiated class, Checking for fairness",
  outcome: "differentiate one lesson with AI from start to finish: a quick pre-assessment, three tiered tasks toward the same objective, a choice board, and a flexible grouping plan based on evidence, checked for accuracy and fairness.",
  about: [
    "This course is for classroom teachers, coaches and school leaders who want every student to reach grade-level goals by different paths. Differentiation has always been hard because it takes time to make several versions of everything. AI can make the versions; the teacher still decides who needs what and why.",
    "Chapter 1 builds the materials: a pre-assessment, tiered tasks and choice boards. Chapter 2 is about using them: grouping students flexibly from evidence, managing a differentiated classroom, and making sure differentiation opens doors rather than locking students into low tracks.",
    "Never put student names, scores or other identifying information into a tool your district has not approved; use made-up data to practice. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Differentiate one real lesson: write a five-question pre-assessment with a key, three tiered tasks that all reach the same objective (more support, on level, extension), a nine-square choice board for practice, and a grouping plan built from a made-up class's pre-assessment results (no real names). Check every task for accuracy and fairness, and write how and when students will move between groups.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Classroom teachers, instructional coaches and school leaders who want every student to reach grade-level goals by different paths, and who are starting to use AI to save planning time.",
    startingPoint: "Can plan and teach a lesson to the whole class and give a quiz. Some have tried an AI assistant for worksheets. Few have a routine for making tiered tasks, choice boards or flexible groups quickly.",
    gap: "Making several versions of every task takes more time than most teachers have, so differentiation often gets skipped or turns into fixed low and high groups. Teachers need to use AI to make the versions while they keep the decisions, protect student privacy and keep expectations high for every student.",
    constraints: [
      "Time: short lessons that fit into a planning period",
      "Devices: a school computer or laptop with an AI assistant the district allows",
      "Privacy: no student names, scores or identifying details in tools the district has not approved; practice uses made-up data",
      "Required IEP and 504 accommodations must still be provided in every version",
      "Every AI-made task must be checked by the teacher for accuracy and fairness before use"
    ],
    prerequisites: "None. Teachers new to AI tools may want an introductory AI course first."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Given one task you teach", action: "explain differentiation by readiness, interest and learning preference, and describe what AI does and what the teacher decides", standard: "keeping the same learning goal in every version" },
    { id: "O2", condition: "Given one learning objective and an AI assistant", action: "create a five-question pre-assessment with a key and three tiered tasks", standard: "with all three tiers practicing the same objective" },
    { id: "O3", condition: "Given one skill to practice", action: "create a nine-square choice board with a must-do square", standard: "with every square practicing the skill and taking about the same time" },
    { id: "O4", condition: "Given pre-assessment results for a made-up class", action: "group students from evidence and write when and how they move between groups", standard: "using codes instead of names and no fixed groups" },
    { id: "O5", condition: "When planning a differentiated lesson", action: "plan the routines, task cards and timing for the class", standard: "covering how students find their task, what to do when stuck and what to do when finished" },
    { id: "O6", condition: "Given a finished differentiated lesson", action: "check it for same goal, movement, patterns and access, and fix anything that fails", standard: "passing all four fairness checks" }
  ],
  chapters: [
    {
      name: "Chapter 1: Building differentiated materials",
      lessons: [
        {
          objectives: ["O1"],
          title: "Differentiation in one minute, and where AI helps",
          minutes: 5,
          goal: "Explain differentiation by readiness, interest and learning preference, and name AI's role.",
          text: [
            "Differentiation means adjusting how students reach the same learning goal. Teachers commonly differentiate by readiness (what a student already knows and can do), interest (what engages them) and learning preference (for example, reading, discussing, drawing or building). The goal stays the same; the path changes.",
            "AI helps with the slow part: producing several versions of a task, a set of interest-based examples, or a range of practice. It can turn one problem set into three, or one reading into versions about sports, music and cooking with the same skill.",
            "AI does not know your students. The teacher decides the goal, reads the evidence, chooses who gets which path, and checks every version for accuracy and fairness."
          ],
          words: [["Differentiation", "adjusting how students reach the same learning goal."], ["Readiness", "what a student already knows and can do on a skill."], ["Learning preference", "a way a student often learns well, such as discussing or drawing."]],
          slides: [
            { title: "Same goal, different paths", bullets: ["Readiness: what they know now", "Interest: what engages them", "Learning preference: how they work best"] },
            { title: "AI does the versions", bullets: ["One task into three levels", "Same skill, different interests", "A range of practice"] },
            { title: "The teacher decides", bullets: ["The goal and the evidence", "Who gets which path", "Accuracy and fairness checks"] }
          ],
          tryIt: "Take one task you teach. Ask AI to rewrite it three ways for different interests (for example sports, music, cooking) with the same skill. Check each keeps the skill.",
          youCanNow: "explain differentiation and use AI to produce versions of a task while you make the decisions.",
          quickCheck: [
            { objective: "O1", q: "What changes when you differentiate a lesson?", options: ["The path students take to the goal", "The learning goal itself", "The grade-level standard", "Which students take the final test"], answer: 0, why: "In differentiation the goal stays the same; only the path changes." },
            { objective: "O1", q: "AI turns your reading task into a sports version, a music version and a cooking version. What would you do next?", options: ["Hand them out without reading them", "Check that each version still practices the same skill", "Give the sports version to every student", "Ask AI to choose which student gets each version"], answer: 1, why: "AI makes the versions, but the teacher checks them and decides who gets which one." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pre-assessments and tiered tasks",
          minutes: 6,
          goal: "Write a quick pre-assessment and three tiered tasks toward one objective.",
          text: [
            "Start with evidence. Ask AI for a five-question pre-assessment on the objective: two questions on the prerequisite skills, two on the objective itself, one stretch question. Ask for a key and what each wrong answer suggests. Check every item.",
            "Tiered tasks reach the same objective at different levels of support and complexity. Prompt: \"Objective: [paste]. Write three tasks. Tier 1: more support (worked example, steps, word bank). Tier 2: on level. Tier 3: extension (a harder or real-world transfer task). All three must practice the objective. Include answer keys.\"",
            "Check that Tier 1 is not just easier, but supported toward the same goal, and that Tier 3 is deeper, not just more work. Students in every tier should finish having practiced the objective."
          ],
          steps: ["Ask for a five-question pre-assessment with a key.", "Check every item and the key.", "Ask for three tiers toward the same objective.", "Tier 1 supported, not easier; Tier 3 deeper, not longer.", "Check all keys."],
          words: [["Pre-assessment", "a short check before teaching to see what students already know."], ["Tiered task", "versions of a task at different levels of support or complexity, aimed at the same goal."], ["Transfer task", "using a skill in a new, often real-world, situation."]],
          slides: [
            { title: "Start with evidence", bullets: ["5 questions: prerequisites, objective, stretch", "Key and what wrong answers suggest"] },
            { title: "Three tiers, one objective", bullets: ["Tier 1: more support", "Tier 2: on level", "Tier 3: extension or transfer"] },
            { title: "Check the tiers", bullets: ["Tier 1 supported, not easier", "Tier 3 deeper, not longer", "Everyone practices the objective"] }
          ],
          tryIt: "Write a five-question pre-assessment and three tiered tasks for one objective with AI. Check that all three tiers practice the same objective.",
          youCanNow: "create a pre-assessment and tiered tasks that all reach the same goal.",
          quickCheck: [
            { objective: "O2", q: "What should a five-question pre-assessment from this lesson include?", options: ["Five stretch questions", "Five questions on last year's unit", "Two prerequisite questions, two on the objective and one stretch question", "Only questions students will surely get right"], answer: 2, why: "The mix shows who needs prerequisite help, who is ready and who is ready for more." },
            { objective: "O2", q: "Your Tier 3 task is the Tier 2 task with twice as many problems. What would you do?", options: ["Keep it, because more work is harder", "Remove Tier 3", "Give it to the support group", "Replace it with a deeper task, such as using the skill in a new situation"], answer: 3, why: "Tier 3 should be deeper, not just more work." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Choice boards",
          minutes: 5,
          goal: "Build a nine-square choice board for practice with AI.",
          text: [
            "A choice board is a grid of activities, often nine squares, that all practice the same skill in different ways: write, draw, explain aloud, solve, build, teach someone. Students choose a set number, for example three in a row.",
            "Prompt: \"Make a 3 by 3 choice board for 6th graders practicing [skill]. Each square is a different way to practice: writing, drawing, discussing, solving problems, creating, real-world. Every square must practice the skill. Put a must-do square in the middle.\"",
            "Check that every square truly practices the skill and takes about the same time, and that materials are available. Choice increases engagement; it should never become a way to avoid the hard part."
          ],
          steps: ["Name the skill and grade.", "Ask for a 3 by 3 board with varied ways to practice.", "Make the center square a must-do.", "Check every square practices the skill and is about equal in time.", "Check materials are available."],
          words: [["Choice board", "a grid of activities that practice the same skill in different ways, from which students choose."], ["Must-do", "an activity every student completes."]],
          slides: [
            { title: "A grid of ways to practice", bullets: ["Write, draw, discuss, solve, build", "Students choose, e.g. three in a row"] },
            { title: "The prompt", bullets: ["3 by 3, varied ways to practice", "Every square practices the skill", "Must-do in the middle"] },
            { title: "Check it", bullets: ["Same skill, about equal time", "Materials available", "Choice, not avoidance"] }
          ],
          tryIt: "Build a 3 by 3 choice board with AI for one skill. Check each square and replace any that do not practice the skill.",
          youCanNow: "create choice boards that offer real choice while practicing the same skill.",
          quickCheck: [
            { objective: "O3", q: "What is a choice board?", options: ["A grid of activities that all practice the same skill in different ways", "A list of different topics students can skip", "A seating chart", "A board where students vote on homework"], answer: 0, why: "Every square practices the same skill; only the way of practicing changes." },
            { objective: "O3", q: "One square on your AI-made choice board asks students to draw their favorite animal, which does not practice the skill. What would you do?", options: ["Keep it so students have a fun choice", "Make it the must-do square", "Replace it with a square that practices the skill", "Remove the whole board"], answer: 2, why: "Choice should never become a way to avoid the skill." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 1: Building differentiated materials",
        questions: [
          { objective: "O1", q: "In differentiation, what stays the same?", options: ["The path", "The materials", "The learning goal", "The group"], answer: 2, why: "The goal stays; the path changes." },
          { objective: "O1", q: "What does AI NOT know when differentiating?", options: ["Your students", "How to rewrite a task", "How to make three levels", "Common interests"], answer: 0, why: "Teachers know students and decide paths." },
          { objective: "O2", q: "A good Tier 1 task is:", options: ["An easier, different skill", "Skipping the objective", "Coloring only", "Supported toward the same objective"], answer: 3, why: "Support, not a lower goal." },
          { objective: "O2", q: "A good Tier 3 task is:", options: ["More of the same problems", "Deeper, such as a transfer task", "Optional", "Shorter"], answer: 1, why: "Extension means depth, not volume." },
          { objective: "O3", q: "Every square on a choice board should:", options: ["Need special materials", "Be a game", "Take different amounts of time", "Practice the same skill"], answer: 3, why: "Choice of path, same skill." }
        ]
      }
    },
    {
      name: "Chapter 2: Using differentiation well",
      lessons: [
        {
          objectives: ["O4"],
          title: "Flexible grouping from evidence",
          minutes: 6,
          goal: "Group students from pre-assessment evidence and plan how they move.",
          text: [
            "Flexible groups change often, based on current evidence for a specific skill, not on a label. After the pre-assessment, sort results into groups for this objective: needs prerequisite support, ready for the objective, ready for extension.",
            "AI can help you see patterns, but student scores with names are education records. Either do the sorting yourself in your gradebook, use a district-approved tool, or replace names with codes before using AI. Practice with a made-up class.",
            "Plan movement: after each check (an exit ticket, a hinge question), students move to the group that fits now. Write when you will re-check and how a student moves up. Groups that never change become tracking."
          ],
          steps: ["Sort pre-assessment results by skill, not label.", "Use your gradebook or an approved tool; never names in unapproved tools.", "Form three groups for this objective.", "Plan re-checks after each lesson.", "Move students as evidence changes."],
          words: [["Flexible grouping", "grouping students by current evidence on a skill, changing often."], ["Tracking", "keeping students in the same level group for a long time, which can limit opportunity."]],
          slides: [
            { title: "Groups from evidence", bullets: ["By current skill, not a label", "Prerequisite support, ready, extension"] },
            { title: "Protect student data", bullets: ["Scores with names are education records", "Gradebook or approved tool", "Or codes, not names"] },
            { title: "Keep groups moving", bullets: ["Re-check after each lesson", "Students move as evidence changes", "Fixed groups become tracking"] }
          ],
          sources: [{ name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Make up pre-assessment results for 24 students using codes (S1 to S24). Form three groups for the objective and write when and how students will move between them.",
          youCanNow: "group students flexibly from evidence and keep groups moving.",
          quickCheck: [
            { objective: "O4", q: "What makes a group \"flexible\"?", options: ["Students choose any group they like", "It changes often, based on current evidence for a skill", "It stays the same all year", "It is based on a student's label"], answer: 1, why: "Flexible groups follow current evidence and change as students learn." },
            { objective: "O4", q: "You want AI to help you see patterns in your class's pre-assessment scores. What would you do first?", options: ["Paste the gradebook with names", "Email the scores to a colleague", "Post the scores on the wall", "Replace names with codes like S1, or use a district-approved tool"], answer: 3, why: "Student scores with names are education records, so protect them before using AI." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Running a differentiated class",
          minutes: 5,
          goal: "Plan the routines that make a differentiated lesson work in the room.",
          text: [
            "Differentiated lessons fail on logistics more than on materials. Plan routines: how students know their task (a slide or card with group names or colors), where materials are, what to do when stuck (\"ask three before me\", a help card), and what to do when finished (the choice board).",
            "Plan your time: start with a short whole-class mini-lesson, then meet with the group that needs you most while others work, then check in with each group. AI can draft task cards, help cards and a timing plan.",
            "Make it feel normal. Use neutral group names (colors or shapes, not \"low\" and \"high\"), change groups often, and let every group do interesting work. Students notice when one group always gets the dull tasks."
          ],
          steps: ["Show each group its task clearly.", "Set materials, stuck and finished routines.", "Mini-lesson, then teacher time with the neediest group.", "Check in with every group.", "Use neutral names and interesting work for all."],
          words: [["Routine", "a regular way of doing something that students learn and follow."], ["Small-group instruction", "the teacher teaching a few students at once while others work."]],
          slides: [
            { title: "Logistics decide success", bullets: ["Clear task cards", "Materials, stuck and finished routines"] },
            { title: "Plan your time", bullets: ["Short whole-class mini-lesson", "Meet the group that needs you most", "Check in with every group"] },
            { title: "Make it feel normal", bullets: ["Neutral group names", "Groups change often", "Interesting work for every group"] }
          ],
          tryIt: "Use AI to draft task cards for your three tiers, a help card for when students are stuck, and a timing plan for a 50-minute class.",
          youCanNow: "run a differentiated lesson with clear routines and fair group practices.",
          quickCheck: [
            { objective: "O5", q: "Why do differentiated lessons most often fail?", options: ["Logistics and routines", "Too few worksheets", "Students dislike choice", "AI makes too many versions"], answer: 0, why: "The lesson says they fail on logistics more than on materials." },
            { objective: "O5", q: "Students finish their tier task ten minutes early. What should your plan tell them to do?", options: ["Wait quietly", "Start the next tier's task", "Go to the choice board", "Join the teacher's group"], answer: 2, why: "The plan should say what to do when finished, such as the choice board." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Checking differentiation for fairness",
          minutes: 6,
          goal: "Check that differentiation opens doors rather than lowering expectations.",
          text: [
            "Differentiation can quietly become lower expectations: some students always get easier tasks and never reach the grade-level goal. Check four things. Same goal: does every student practice the grade-level objective? Movement: did students change groups over the unit?",
            "Patterns: look (with privacy protections) at who ends up in each group over time. If students from one background, English learners or students with disabilities are always in the support group, ask why. Access: do supports such as read-aloud or visuals reach every student who needs them, including required IEP and 504 accommodations?",
            "AI materials need the same check: are examples and names varied and respectful, free of stereotypes about who is good at what? Leaders can ask teams to bring one differentiated lesson to a meeting and run this check together."
          ],
          steps: ["Same goal for every tier?", "Did students move between groups?", "Who is always in which group, and why?", "Do supports and required accommodations reach everyone?", "Are AI examples varied and free of stereotypes?"],
          words: [["Expectations", "what teachers believe students can achieve, which shapes what they are taught."], ["Stereotype", "an unfair, fixed idea about a group of people."]],
          slides: [
            { title: "Watch for lower expectations", bullets: ["Every tier reaches the grade-level goal", "Students move between groups"] },
            { title: "Look at patterns", bullets: ["Who is always in the support group?", "English learners, disabilities, background", "Ask why"] },
            { title: "Access and content", bullets: ["Supports and accommodations reach everyone", "AI examples varied, no stereotypes"] }
          ],
          tryIt: "Final task: assemble your differentiated lesson (pre-assessment with key, three tiers, choice board, grouping plan from made-up data with movement rules), then run the four fairness checks on it and fix anything that fails.",
          youCanNow: "differentiate lessons with AI in a way that keeps expectations high for every student.",
          quickCheck: [
            { objective: "O6", q: "What does the \"same goal\" fairness check ask?", options: ["Do all groups get the same worksheet?", "Does every student practice the grade-level objective?", "Do all groups finish at the same time?", "Do all students get the same score?"], answer: 1, why: "Differentiation must not leave some students away from the grade-level goal." },
            { objective: "O6", q: "Over the unit, the same students from one background are always in the support group. What would you do?", options: ["Keep them there, since it is working", "Move them to extension without evidence", "Stop using groups", "Ask why, and check whether the grouping reflects the skill or something else"], answer: 3, why: "A pattern like this is a warning sign that differentiation is becoming lower expectations." }
          ]
        }
      ],
      check: {
        title: "Knowledge Check 2: Using differentiation well",
        questions: [
          { objective: "O4", q: "Flexible groups are based on:", options: ["A label from last year", "Student popularity", "Current evidence on a specific skill", "Seating chart"], answer: 2, why: "Evidence on the current skill decides." },
          { objective: "O4", q: "You want AI to help sort pre-assessment results. What is safe?", options: ["Use codes instead of names, or an approved tool", "Paste names and scores into a free tool", "Post results online", "Email them to a vendor"], answer: 0, why: "Scores with names are education records." },
          { objective: "O5", q: "Which group names are best?", options: ["Low, middle, high", "Colors or shapes", "Smart and slow", "Students' test scores"], answer: 1, why: "Neutral names avoid labeling students." },
          { objective: "O6", q: "English learners are always in the support group all unit. What should you do?", options: ["Ask why and check whether the grouping reflects language rather than understanding", "Nothing", "Make it permanent", "Remove them from the class"], answer: 0, why: "Patterns may show unfair grouping." },
          { objective: "O4", q: "What is the risk of groups that never change?", options: ["None", "They save time", "They improve learning", "They become tracking"], answer: 3, why: "Fixed groups limit opportunity." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI-Powered Differentiation",
    questions: [
      { objective: "O1", q: "Differentiation means:", options: ["Giving different goals", "Adjusting how students reach the same goal", "Separate classes", "Less work for some"], answer: 1, why: "Same goal, different paths." },
      { objective: "O1", q: "Readiness refers to:", options: ["Age", "Being on time", "What a student already knows and can do", "Reading speed only"], answer: 2, why: "It is skill-specific." },
      { objective: "O1", q: "Interest-based versions keep:", options: ["No skill", "Different skills", "The same skill", "Only the topic"], answer: 2, why: "The context changes, not the skill." },
      { objective: "O1", q: "Who decides which student gets which path?", options: ["The teacher", "The AI", "The vendor", "The student's parents alone"], answer: 0, why: "Teachers read the evidence and decide." },
      { objective: "O2", q: "A pre-assessment is given:", options: ["Only to some students", "At the end of the year", "Never", "Before teaching"], answer: 3, why: "It shows where students start." },
      { objective: "O2", q: "A good pre-assessment includes:", options: ["Only the hardest questions", "Prerequisites, the objective and a stretch question", "Only opinion questions", "Nothing about the objective"], answer: 1, why: "It shows the range of readiness." },
      { objective: "O2", q: "Tiered tasks aim at:", options: ["Only the top students", "Different objectives", "No objective", "The same objective"], answer: 3, why: "Tiers vary support and complexity, not the goal." },
      { objective: "O2", q: "A transfer task:", options: ["Copies an answer", "Moves a student to another school", "Uses a skill in a new situation", "Is a test retake"], answer: 2, why: "It deepens learning." },
      { objective: "O3", q: "A choice board usually has:", options: ["Nine squares of activities for the same skill", "One activity", "Only games", "Grades"], answer: 0, why: "A grid of ways to practice." },
      { objective: "O3", q: "The must-do square on a choice board is:", options: ["Optional", "Completed by every student", "For the teacher", "Only for advanced students"], answer: 1, why: "It ensures the core practice." },
      { objective: "O3", q: "Choice board squares should take:", options: ["About the same time", "Very different amounts of time", "No time", "Only homework time"], answer: 0, why: "Fair choice needs similar effort." },
      { objective: "O4", q: "Student scores with names are:", options: ["Owned by AI companies", "Public", "Safe in any app", "Education records protected by FERPA"], answer: 3, why: "Protect them." },
      { objective: "O4", q: "Replacing names with codes like S1 helps:", options: ["Grade faster", "Protect student privacy when practicing with AI", "Hide grades from teachers", "Nothing"], answer: 1, why: "Codes remove identifying names." },
      { objective: "O4", q: "Students should move between groups:", options: ["Only at the end of the year", "Never", "As new evidence shows a change", "Randomly"], answer: 2, why: "Flexible means changing with evidence." },
      { objective: "O5", q: "Differentiated lessons often fail because of:", options: ["Bright classrooms", "Too many ideas", "Logistics and routines", "Short names"], answer: 2, why: "Routines make them work." },
      { objective: "O5", q: "\"Ask three before me\" is a routine for:", options: ["When students are stuck", "When students finish", "Lining up", "Lunch"], answer: 0, why: "It builds independence." },
      { objective: "O5", q: "During group work, the teacher should first meet:", options: ["The principal", "No one", "Only the extension group", "The group that needs them most"], answer: 3, why: "Teacher time goes where it matters most." },
      { objective: "O6", q: "Differentiation becomes lower expectations when:", options: ["Every tier reaches the goal", "Some students never practice the grade-level goal", "Groups change often", "Supports are offered"], answer: 1, why: "All students need the grade-level goal." },
      { objective: "O6", q: "Required IEP and 504 accommodations in a differentiated lesson:", options: ["Apply only on tests", "Are replaced by tiers", "Are optional", "Still must be provided"], answer: 3, why: "They are required." },
      { objective: "O6", q: "AI-made examples should be checked for:", options: ["Length only", "Font size only", "Variety and stereotypes", "Nothing"], answer: 2, why: "Materials should be fair and respectful." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Pre-Test: What Do You Already Know?",
    from: [
      0,
      4,
      6,
      8,
      11,
      13,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Meets or Exceeds on every row. If a row is Not yet, fix that part and try again.",
    criteria: [
      {
        name: "Pre-assessment",
        objective: "O2",
        notYet: "Fewer than five questions, no key, or no link to the objective.",
        meets: "Five questions (prerequisites, objective, stretch) with a key.",
        exceeds: "The key also says what each wrong answer suggests."
      },
      {
        name: "Tiered tasks",
        objective: "O2",
        notYet: "The tiers practice different goals, or Tier 3 is just more work.",
        meets: "Three tiers (more support, on level, extension) all practice the same objective, with keys.",
        exceeds: "Tier 1 has clear supports and Tier 3 is a real transfer task."
      },
      {
        name: "Choice board",
        objective: "O3",
        notYet: "Some squares do not practice the skill.",
        meets: "Nine squares that all practice the skill, with a must-do square in the middle.",
        exceeds: "The squares take about the same time and use different ways of working."
      },
      {
        name: "Grouping plan",
        objective: "O4",
        notYet: "Uses real names, or groups do not change.",
        meets: "Groups come from the made-up results with codes, and the plan says when and how students move.",
        exceeds: "Names the re-check, such as an exit ticket, that moves students."
      },
      {
        name: "Fairness check",
        objective: "O6",
        notYet: "The fairness checks were not run.",
        meets: "All four checks (same goal, movement, patterns, access) were run and failures fixed.",
        exceeds: "Can say what changed because of the check."
      }
    ]
  },
  evaluation: {
    results: [
      "Teachers who finish the course and pass the final task (rubric)",
      "Teachers who teach at least one differentiated lesson within 30 days (follow-up survey)",
      "Planning time teachers report saving on making task versions",
      "Schools where leaders run the fairness check with a team"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "A computer with an AI assistant your district allows",
      "One real lesson objective you teach",
      "A made-up class list using codes (S1 to S24)",
      "About 60 minutes in total: lessons, practice, checks and the final task"
    ],
    facilitatorNotes: [
      "Run it as a professional learning session: take the pre-test together, then have teachers bring one lesson they will teach soon.",
      "Never let participants paste real student names or scores into AI; give them a made-up class with codes.",
      "Pair teachers from the same grade or subject so they can check each other's tiers.",
      "Score the final task with the rubric and give feedback on one Not yet row at a time.",
      "Leaders can end with the four fairness checks run together on one shared lesson."
    ]
  }
};
